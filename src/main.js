import { art, artURL, vocabArt, decorateArt } from './art.js';
import './style.css';
import { World } from './three/world.js';
import { makeIce } from './three/models.js';
import { $, h, panel, hidePanel, choose, next, bubble, clearBubble, hint, hideHint, toast, pop, coinFly, renderHUD, showHUD, applySettings, jpLine, fade, wait, shuffle, pick, modal, closeModal, mission } from './ui.js';
import { unlockAudio, say, sfx, preload, onSfx, setMood } from './audio.js';
import { S, save, checkIn, addXP, srsAnswer, srsSeen, srsPick, today } from './save.js';
import { RECIPES, recipe } from './data/recipes.js';
import { VOCAB, vocab } from './data/vocab.js';
import { CHAPTERS, REGULARS, WASABI_REQUESTS, SOY_ASK, SOY_OPTIONS, RAMEN_REQUESTS } from './data/chapters.js';
import { dressDarkDish, darkReport, revealDarkDish, interrogate, settleDark, pickPersona, introPersona, darkShiftIntro, bankOrGamble, bankAtEnd, raid, darkStars, renderDarkbar, hideDarkbar } from './dark.js';
import { DARK_ORDER_TEMPLATES } from './data/dark.js';
import { DARK, resetDark } from './darkstate.js';
import { ORDER_TEMPLATES, ORDER_NUM_TEMPLATES, REACT, CAT, RESTAURANT, pickByLevel, lineVoice, pickSmalltalk, pickDetail, resetUsed, trackLv, RESTO_CHAPTERS, restoMenu, SOLDOUT, REPLACE, TSUIKA, HERASU, KAERU, KYANSERU, YAMERU, FINISH_STEPS, drawBeats, BEAT_COUNT, jpLevel, LEVELS, drawLv } from './data/dialogue.js';
import { CUSTOMERS } from './data/shop.js';
import { MINIGAMES } from './minigames.js';
import { levelNudge, checkPoolDone, markUnit, chapterNudge, dismissChapterNudge, LEVEL_LEARN, unitProgress, TRAVEL_CHAPTERS, UNIT_DONE_AT } from './data/progress.js';
import { K_CHANGE, K_BYE_WRONG, K_GREET, K_BYE, GOODS, K_STEPS, K_PAY, K_PAY_ASK, K_THANKS, K_OTSURI_ASK, yenJP } from './data/konbini.js';
import { fill, NUMS, NIGIRI, numsFor } from './lines.js';
import { DESTS, CNT, PLAT, TYPES, M_DEST, M_COUNT, M_KIND, KIND_OPT, LTD_EXTRA, M_TOTAL, M_TAKE, ASK, REPLY, PICK_PLAT, ANN, BOARD, INCIDENT_ANN, INCIDENTS, STAFF_THANKS, CAT_THANKS, OVERSHOOT, STAFF_RUDE, TOURIST_THANKS } from './data/eki.js';
import { DRAMA, REL, TOPIC, NPC, REGISTER, REG_REL, REG_LABEL, SERIES } from './data/drama.js';
import { DAILY, DAILY_CAT } from './data/daily.js';
import { canListen, listenOnce } from './speak.js';
import { ST_SORRY, ST_GREET, ST_BYE_STAFF, ST_BYE, ST_BYE_WRONG, DESTS as ST_DESTS, askLine, reply0, reply1, reply2, reply3, GUIDE } from './data/street.js';
import { PH_GREET, PH_WHEN, PH_ALLERGY, PH_BYE_STAFF, PH_HAND, SYMPTOMS, TIMES, WHEN_LINES, ALLERGY, DOSES, PH_BYE, PH_BYE_WRONG, PH_EXTRA } from './data/pharmacy.js';
import { WELCOME, BYE_STAFF, CHECKIN, ROOM_REPLY, PICK_ROOM, REQUESTS, CHECKOUT, NIGHTS, floorJP, roomJP, STAFF_RUDE_H, GUEST_THANKS } from './data/hotel.js';
import { isUnlocked, recipeCard, openBook, openShop, openSettings, shiftSummary, apply } from './screens.js';
import { hash, toHTML } from './jp.js';

decorateArt(document.body);
$('#start').style.setProperty('--title-bg', `url("${artURL('title_bg')}")`);
const world = new World($('#c'));
let busy = false;
world.shakeOn = S().settings.shake !== false;

// 手感：音效同時觸發鏡頭微震 / 擠壓拉伸 / 畫面閃光
const FEEL = {
  chop: () => { world.shake(0.18); world.cat.squash(-0.08); },
  press: () => world.shake(0.15),
  bad: () => { world.shake(0.4); world.cat.squash(-0.12); },
  good: () => world.cat.squash(0.08),
  perfect: () => { world.shake(0.25); world.cat.squash(0.14); },
  level: () => { world.shake(0.55); world.cat.squash(0.2); },
  rare: () => world.shake(0.3),
  door: () => world.shake(0.12),
  purr: () => world.cat.squash(-0.1),
  coin: () => {},
};
onSfx((n) => FEEL[n]?.());
// 場景 → 音樂情緒
world.onView = (v) => setMood(v === 'cook' ? 'cook' : v.startsWith('rest') ? 'rest' : 'kitchen');
if (import.meta.env.DEV) window.__world = world; // 測試用
if (import.meta.env.DEV) window.__game = { hub, shift, serveCustomer, cashierServe, cook, restaurant, state: S, save, minigames: MINIGAMES };

// ===== 開始畫面 =====
applySettings();
renderHUD();
apply(world);
world.cat.happyEyes = 999; // 瞓緊
world.setView('kitchen', true);
refreshMenu();

$('#start').addEventListener('click', async () => {
  unlockAudio();
  sfx('tap');
  $('#start').classList.add('gone');
  const ci = checkIn();
  if (!S().started) await firstRun();
  else await returning(ci);
}, { once: true });

$('#btn-book').onclick = () => { sfx('tap'); openBook(); };
$('#btn-shop').onclick = () => { sfx('tap'); if (busy) return toast('做緊嘢，收工先買啦！'); openShop(world); };
$('#btn-set').onclick = () => { sfx('tap'); openSettings(world); };

// 掃小黑
let petsToday = 0;
world.onCatTap = () => {
  if (!S().started) return;
  sfx('purr');
  world.hearts();
  world.cat.happyEyes = 0.8;
  const s = S();
  s.affection++;
  petsToday++;
  if (s.lastPet !== today()) {
    s.lastPet = today();
    s.coins += 10;
    toast('小黑好開心！ 今日第一次掃 ❤️ +10🪙');
    coinFly(10);
    renderHUD();
  } else if (petsToday % 5 === 0) {
    bubble(world, 'cat', CAT.purr.jp, CAT.purr.yue, 'cat');
    setTimeout(() => clearBubble('cat'), 2000);
  }
  save();
};

// ===== 第一次玩 =====
async function firstRun() {
  await wait(500);
  world.cat.happyEyes = 0;
  world.cat.happy();
  sfx('meow');
  await bubble(world, 'cat', CAT.wake.jp, CAT.wake.yue, 'cat');
  await wait(300);
  await bubble(world, 'cat', CAT.intro.jp, CAT.intro.yue, 'cat');

  const lv = await choose([
    { label: '<b>🌱 零基礎</b><small>假名都未識</small>', value: 0 },
    { label: '<b>🌿 N5</b><small>識假名、簡單字、基本句型</small>', value: 1 },
    { label: '<b>🌳 N4–N3</b><small>想練聽力同實用句子</small>', value: 2 },
    { label: '<b>🏔️ N1</b><small>敬語、長句、事故廣播</small>', value: 3 },
  ], { title: h('div', { class: 'panel-title' }, '你嘅日文程度係？（之後可以喺 ⚙️ 改）') });
  const st = S().settings;
  S().jpLevel = lv.value;
  if (lv.value === 0) Object.assign(st, { furigana: true, romaji: true, yue: true, subs: 'show' });
  if (lv.value === 1) Object.assign(st, { furigana: true, romaji: false, yue: true, subs: 'show' });
  if (lv.value >= 2) Object.assign(st, { furigana: true, romaji: false, yue: false, subs: 'tap' });
  applySettings();
  S().started = true;
  S().lastGift = today();
  save();
  clearBubble();
  hint('撳 🔊 可以再聽；撳小黑可以掃佢 🐾', 3500);
  showHUD(true);
  await shift({ tutorial: true });
}

// ===== 返嚟玩 =====
async function returning(ci) {
  showHUD(true);
  world.cat.happyEyes = 0;
  world.cat.happy();
  sfx('meow');
  const s = S();
  const newlyUnlocked = RECIPES.filter((r) => r.unlock.day && r.unlock.day === s.daysPlayed && ci.newDay);
  bubble(world, 'cat', 'おかえりにゃ！', '你返嚟喇喵！', 'cat');
  if (ci.gift) {
    await new Promise((res) => {
      modal('🎁 每日禮物', h('div', { class: 'summary' },
        h('div', { class: 'sum-big' }, '🎁'),
        h('div', { class: 'gift-amt' }, `+${ci.gift} 🪙`),
        h('div', { class: 'streak-row' }, ...Array.from({ length: 7 }, (_, i) => h('div', { class: `sd ${i < Math.min(s.streak, 7) ? 'on' : ''}` }, i < Math.min(s.streak, 7) ? '🔥' : i + 1))),
        h('div', { class: 'sub' }, ci.streakBroken ? '連續日數斷咗… 唔緊要，今日重新開始！' : `連續 ${s.streak} 日！每日禮物越嚟越大（最多 7 日）`),
        h('button', { class: 'btn primary big', onclick: () => closeModal() }, '收！')), { onClose: res });
    });
    coinFly(ci.gift);
    renderHUD();
  }
  for (const r of newlyUnlocked) await announceRecipe(r);
  // 舊存檔未揀過程度：補問一次（唔改字幕設定）
  if (s.jpLevel == null) {
    const lv = await choose(LEVELS.map((l) => ({ label: `<b>${l.icon} ${l.name}</b><small>${l.desc}<br>📖 ${l.learn}</small>`, value: l.id })),
      { title: h('div', { class: 'panel-title' }, '新增咗分級對白！揀你嘅日文程度（之後可喺 ⚙️ 改）') });
    s.jpLevel = lv.value; save();
  }
  hub();
}

function menuRecipes() {
  return RECIPES.filter(r => (r.chapter || 'home') === S().chapter && isUnlocked(r));
}
function special() {
  const list = menuRecipes();
  return list[parseInt(hash(today()), 36) % list.length]?.id;
}

function refreshMenu() {
  world.setMenu(RECIPES.filter(r => (r.chapter || 'home') === S().chapter).map((r) => ({ name: VOCAB[r.dish].jp.replace(/\{.*?\}/g, ''), price: r.price, locked: !isUnlocked(r) })));
}

// 呢章呢級學晒：提示試下一級（只係提示，唔鎖）
function chapterNudgeCard(chId) {
  const ch = ['eki', 'hotel', 'pharmacy', 'street', 'konbini'].includes(chId) ? chId : 'resto';
  const n = chapterNudge(ch, jpLevel());
  if (!n) return null;
  const to = LEVELS[n.to], cn = { eki: '車站', hotel: '酒店', pharmacy: '藥房', street: '街上', konbini: '便利店', resto: '餐廳' }[ch];
  return h('div', { class: 'special lv-nudge' },
    `✅ ${LEVELS[n.from].name} ${cn}學晒喇！試下 ${to.icon} ${to.name}：${LEVEL_LEARN[ch][n.to]}`,
    h('button', { class: 'btn primary', onclick: () => { S().jpLevel = n.to; save(); sfx('level'); toast(`轉咗做 ${to.name}`); hub(); } }, `轉去 ${to.name}`),
    h('button', { class: 'btn', onclick: () => { dismissChapterNudge(ch, n.from); hub(); } }, '遲啲先'));
}

// 答啱率高：問玩家想唔想升一級
function levelNudgeCard() {
  const n = levelNudge();
  if (!n) return null;
  const to = LEVELS[n.to];
  return h('div', { class: 'special lv-nudge' },
    `🎉 ${LEVELS[n.from].name} 所有場景都學晒！想試吓 ${to.icon} ${to.name} 嗎？（會學：${to.learn}）`,
    h('button', { class: 'btn primary', onclick: () => { S().jpLevel = n.to; save(); sfx('level'); toast(`轉咗做 ${to.name}`); hub(); } }, '升一級'),
    h('button', { class: 'btn', onclick: () => { S().lvNudgeDismissed = n.from; save(); hub(); } }, '遲啲先'));
}

// ===== 大堂（兩更之間）=====
function hub() {
  busy = false;
  clearBubble();
  world.setTheme(S().chapter);
  // 大堂預覽：旅行／便利店章節顯示自己嘅背景，唔再係食堂
  const pv = { konbini: 'kon', eki: 'eki', hotel: 'hotel', pharmacy: 'pharm', street: 'street' }[S().chapter];
  world.customerOut(true);
  world.catTo(pv || 'kitchen');
  world.setView(pv || 'kitchen');
  world.catFace('front');
  const sp = special();
  const spv = sp ? vocab(recipe(sp).dish) : null;
  const canRest = S().shifts >= 1;
  refreshMenu();
  const chapter = CHAPTERS.find(c => c.id === S().chapter) || CHAPTERS[0];
  const actions = h('div', { class: 'hub-btns' },
    h('button', { class: 'btn primary big', 'data-action': 'open-shift', onclick: () => { sfx('tap'); shift(chapter.id === 'hotel' || chapter.id === 'eki' ? { role: 'guest' } : {}); } }, chapter.id === 'konbini' ? '🏪 開舖（做收銀）' : chapter.id === 'pharmacy' ? '💊 去藥房（做病人）' : chapter.id === 'street' ? '🗺️ 出街問路（做遊客）' : chapter.id === 'hotel' ? '🛎️ 入住酒店（做旅客）' : chapter.id === 'eki' ? '🎫 出發旅行（做旅客）' : RESTO_CHAPTERS[chapter.id] ? '🏮 開舖（做老闆）' : '🏮 開舖'),
    chapter.id === 'hotel' || chapter.id === 'eki' ? h('button', { class: `btn big ${canRest ? '' : 'disabled'}`, onclick: () => { sfx('tap'); if (canRest) shift({ role: 'staff' }); else toast('完成第一位客人就解鎖！'); } }, canRest ? (chapter.id === 'hotel' ? '🛎️ 上班（做前台）' : '🚉 上班（做站務員）') : '🔒 上班') : null,
    chapter.id === 'konbini' ? h('button', { class: `btn big ${canRest ? '' : 'disabled'}`, onclick: () => { sfx('tap'); if (canRest) konbiniShopper(); else toast('完成第一位客人就解鎖！'); } }, canRest ? '🛒 去買嘢（做客人）' : '🔒 去買嘢') : null,
    RESTO_CHAPTERS[chapter.id] ? h('button', { class: `btn big ${canRest ? '' : 'disabled'}`, onclick: () => { sfx('tap'); if (canRest) restaurant(chapter.id); else toast('完成第一位客人就解鎖！'); } }, canRest ? `${RESTO_CHAPTERS[chapter.id].icon} 去${RESTO_CHAPTERS[chapter.id].name}（做客人）` : `🔒 ${RESTO_CHAPTERS[chapter.id].name}`) : null,
  );
  const locations = h('details', { class: 'fold home-locations' },
    h('summary', {}, h('b', {}, '轉換地點')),
    h('div', { class: 'chapter-tabs', 'aria-label': '選擇章節' }, CHAPTERS.map(c => h('button', {
      class: `btn ${c.id === chapter.id ? 'primary' : ''}`, 'data-chapter': c.id,
      'aria-pressed': String(c.id === chapter.id), onclick: () => { S().chapter = c.id; save(); sfx('tap'); hub(); },
    }, c.id === 'eki' ? '🚉' : c.id === 'hotel' ? '🏨' : c.id === 'pharmacy' ? '💊' : c.id === 'street' ? '🗺️' : art({ home: 'ui_open_shop', izakaya: 'shop_deco_lantern', cafe: 'dish_instant_coffee', sushi: 'dish_salmon_nigiri', ramen: 'dish_shoyu_ramen', konbini: 'goods_bento', dark: 'dish_dark_ding' }[c.id]), ` ${{ home: '食堂', izakaya: '居酒屋', cafe: '喫茶店', sushi: '壽司店', ramen: '拉麵店', konbini: '便利店', eki: '車站', hotel: '酒店', pharmacy: '藥房', street: '街上', dark: '暗黑' }[c.id]}`))));
  panel(h('section', { class: 'home-current' },
    h('div', { class: 'sub' }, `目前地點 · 完成 ${S().chapterShifts[chapter.id] || 0} 更`),
    h('h2', {}, chapter.name),
    h('div', { class: 'sub home-intro' }, chapter.intro), actions),
  h('div', { class: 'hub-info' },
    locations,
    h('div', { class: 'home-learning' },
      h('h3', {}, '輕鬆學日文'),
      h('div', { class: 'hub-btns' },
        h('button', { class: 'btn', onclick: () => { sfx('tap'); dailyMenu(); } }, '📅 每日一句（聽＋講）'),
        h('button', { class: 'btn', onclick: () => { sfx('tap'); dramaMenu(); } }, '🎭 對話劇場（學口語）'))),
    h('div', { class: 'hub-btns home-tools' },
      h('button', { class: 'btn', onclick: () => { sfx('tap'); openBook(); } }, '📚 圖鑑'),
      h('button', { class: 'btn', onclick: () => { sfx('tap'); openShop(world); } }, '🛍️ 商店')),
    chapter.id === 'dark' ? h('button', { class: 'btn', onclick: () => openBook('secrets') }, `後廚捷徑圖鑑 · ${Object.keys(S().darkSecrets).length} / 7`) : null,
    spv ? h('div', { class: 'special' }, '🌟 今日特價：',h('span', { class: 'jp-inline', html: toHTML(spv.jp) }), ' 金幣 x2') : null,
    chapterNudgeCard(chapter.id),
    levelNudgeCard(),
  )).classList.add('hub-panel', 'home-panel');
}

// ===== 一更（幾位客人）=====
async function shift({ tutorial = false, role = null } = {}) {
  busy = true;
  resetUsed();
  world.setTheme(S().chapter);
  const n = tutorial ? 1 : ['eki', 'hotel', 'pharmacy', 'street'].includes(S().chapter) ? 3 : 5;
  const stat = { served: 0, coins: 0, perfect: 0 };
  let forceDish = null;
  const plan = S().chapter === 'izakaya' && !tutorial ? izakayaPlan(n) : S().chapter === 'sushi' && !tutorial ? sushiPlan(n) : S().chapter === 'ramen' && !tutorial ? ramenPlan(n) : null;
  // 暗黑食堂：成更懷疑度／彩池
  const dark = S().chapter === 'dark' && !tutorial;
  if (dark) { resetDark(); await darkShiftIntro(); }
  for (let i = 0; i < n; i++) {
    $('#shiftinfo').textContent = ['eki', 'hotel', 'pharmacy', 'street'].includes(S().chapter) ? `旅程 ${i + 1} / ${n}` : `客人 ${i + 1} / ${n}`;
    $('#shiftinfo').classList.add('show');
    const res = S().chapter === 'eki' && !tutorial ? await ((role ? role === 'staff' : i === 1) ? ekiStaffServe({ index: i }) : ekiServe({ index: i })) : S().chapter === 'hotel' && !tutorial ? await ((role ? role === 'staff' : i === 1) ? hotelStaffServe({ index: i }) : hotelServe({ index: i })) : S().chapter === 'street' && !tutorial ? await streetServe({ index: i }) : S().chapter === 'pharmacy' && !tutorial ? await pharmacyServe({ index: i }) : S().chapter === 'konbini' && !tutorial ? await cashierServe({ index: i }) : await serveCustomer({ index: i, tutorial, forceDish, plan });
    if (res.cancelled) { await wait(700); continue; }   // 取消：唔計服務、保留 forceDish
    forceDish = null;
    stat.served++;
    stat.coins += res.coins;
    if (res.stars === 3) stat.perfect++;
    if (dark) {
      stat.coins += await raid(world, S().settings.subs === 'tap');
      // 第 2、4 個客人之後先問收手定繼續搏，節奏快啲
      if ((i === 1 || i === 3) && i < n - 1) stat.coins += await bankOrGamble();
      hidePanel();
    }
    // 升級
    if (res.levelUps) {
      const newR = await levelUp();
      if (newR && (newR.chapter || 'home') === S().chapter) forceDish = newR.dish;
    }
  }
  $('#shiftinfo').classList.remove('show');
  world.catTo('kitchen');
  if (dark) { stat.coins += bankAtEnd(); stat.dark = darkStars(stat); hideDarkbar(); }
  S().shifts++;
  S().chapterShifts[S().chapter] = (S().chapterShifts[S().chapter] || 0) + 1;
  save();
  hidePanel();
  clearBubble();
  world.setView('kitchen');
  world.cat.happy();
  sfx('level');
  const first = S().shifts === 1;
  await new Promise((res) => shiftSummary(stat, {
    firstShift: first,
    onNext: () => res(() => hub()),
    onRest: () => res(() => restaurant()),
    onShop: () => res(() => { hub(); openShop(world); }),
  })).then((fn) => fn());
}

function pickCustomer(index, tutorial) {
  if (tutorial && index === 0) return CUSTOMERS[0];
  const s = S();
  const boost = s.deco.includes('deco_maneki') ? 3 : 1;
  const pool = CUSTOMERS.filter((c) => !c.legend || s.level >= 2);
  const w = pool.map((c) => c.weight * (c.rare ? boost : 1));
  let r = Math.random() * w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < pool.length; i++) { r -= w[i]; if (r <= 0) return pool[i]; }
  return pool[0];
}

// 居酒屋每更計劃：3 次改單（取消一定有 + 另外 2 種）、2 次沽清（1 換菜 + 1 唔要替代品）
// 壽司店：每位客人最多一種專屬互動（貫數量／山葵要求／豉油沾法），輪流出現
function sushiPlan(n) {
  const out = [];
  while (out.length < n) out.push(...shuffle(['kan', 'wasabi', 'soy']));
  return out.slice(0, n);
}
function sushiKind(rec, planned) {
  const ok = {
    kan: NIGIRI.includes(rec.dish),
    wasabi: ['salmon_nigiri', 'tekkamaki'].includes(rec.dish),
    soy: NIGIRI.includes(rec.dish),
  };
  if (planned && ok[planned]) return planned;
  return Object.keys(ok).find((k) => ok[k]) || null;
}

// 拉麵店：每位客人買完券後，要求麵硬度或湯濃淡（輪流）；炒飯冇呢類要求
function ramenPlan(n) {
  const out = [];
  while (out.length < n) out.push(...shuffle(['noodle', 'soup']));
  return out.slice(0, n);
}
function ramenKind(rec, planned) {
  return rec.dish === 'chahan' ? null : (planned || 'noodle');
}

function izakayaPlan(n) {
  const ch = shuffle([...shuffle(['add', 'less', 'swap']).slice(0, 2), 'cancel']);
  const so = shuffle(['replace', 'decline']);
  return Array.from({ length: n }, (_, i) => (i % 2 === 0 ? ch[i / 2] : so[(i - 1) / 2]));
}

// ===== 便利店：玩家做客人 =====
async function konbiniShopper() {
  busy = true;
  resetUsed();
  hidePanel();
  clearBubble();
  const staff = pickCustomer(0, false);
  const items = shuffle(GOODS).slice(0, 2 + Math.floor(Math.random() * 2));
  const total = items.reduce((a, g) => a + g.price, 0);
  const kinds = ['bag'];
  if (items.some((g) => g.heat)) kinds.push('heat');
  if (items.some((g) => g.cutlery)) kinds.push('cutlery'); else if (Math.random() < 0.5) kinds.push('point');
  const want = {};
  kinds.forEach((k) => { want[k] = Math.random() < 0.5; });
  const pay = pick(K_PAY);
  let right = 0, qs = 0;
  const hideTxt = S().settings.subs === 'tap';

  const taskLines = [`買：${items.map((g) => g.yue).join('、')}`, ...kinds.map((k) => (want[k] ? K_STEPS[k].yes : K_STEPS[k].no).label), `付款：${pay.label}`];
  await fade(() => { world.catTo('konShop'); world.setView('kon', true); });
  mission(taskLines.slice(0, 2).join('　'), taskLines.join('\n'));
  await world.konStaffIn(staff);
  sfx('door');
  hint('今次你做客人！買齊嘢，聽清楚收銀員問咩 🛒', 3500);
  await bubble(world, 'cust', K_GREET.jp, K_GREET.yue, 'cat');
  clearBubble('cust');

  // 一條多項選擇：錯咗再揀
  const ask = async (title, options, correctIdx, word = null) => {
    qs++;
    let first = true;
    for (;;) {
      const a = await choose(shuffle(options.map((o, i) => ({ value: i, el: jpLine(o.jp, { yue: o.yue, voice: 'word' }) }))), { title: h('div', { class: 'panel-title' }, title) });
      if (a.value === correctIdx) {
        sfx('good'); a.button.classList.add('right');
        if (first) right++;
        if (word) { srsAnswer(word, first); poolCheck('konbini', 1); }
        await say(options[correctIdx].jp, 'word');
        return first;
      }
      sfx('bad'); a.button.classList.add('wrong'); first = false;
      if (word) srsAnswer(word, false);
      hint(`「${options[a.value].yue}」唔啱，再試吓！`, 2800);
      await wait(700);
    }
  };
  const moneyOpts = (vals) => shuffle(vals).map((v) => ({ value: v, el: h('div', { class: 'dish-opt' }, h('span', { class: 'jp-inline', html: toHTML(yenJP(v)) }), h('small', {}, `${v} 円`)) }));

  // 1. 睇日文揀貨
  qs++;
  await new Promise((resolve) => {
    const picked = new Set();
    let firstTry = true;
    const pool = shuffle([...items, ...shuffle(GOODS.filter((g) => !items.includes(g))).slice(0, 3)]);
    const btns = pool.map((g) => h('button', {
      class: 'choice scan-item', type: 'button',
      onclick: (e) => {
        say(g.jp, 'word');
        if (picked.has(g.id)) return;
        if (!items.includes(g)) { sfx('bad'); firstTry = false; e.currentTarget.classList.add('wrong'); hint(`「${g.yue}」唔係要買嘅`, 2000); return; }
        picked.add(g.id); sfx('coin'); e.currentTarget.classList.add('right');
        if (picked.size === items.length) { if (firstTry) right++; setTimeout(resolve, 500); }
      },
    }, h('span', { class: 'emo' }, art(g.art, g.yue)), h('span', { class: 'jp-inline', html: toHTML(g.jp) }), h('small', {}, '點一下聽發音')));
    panel(h('div', { class: 'panel-title' }, `🛒 睇日文揀貨：${items.map((g) => g.yue).join('、')}`), h('div', { class: 'choices cols2' }, btns));
  });
  hidePanel();

  // 2. 聽總數
  const totLine = `合計{ごうけい}は ${yenJP(total)}です。`;
  await bubble(world, 'cust', totLine, '（聽吓幾錢？）', 'cat', { hidden: true });
  qs++;
  const fakes = shuffle([total + 100, Math.max(10, total - 50), total + 30, total - 100].filter((x) => x > 0 && x !== total)).slice(0, 2);
  let firstP = true;
  for (;;) {
    const a = await choose(moneyOpts([total, ...fakes]), { title: h('div', { class: 'panel-title' }, '💴 總共幾錢？（撳泡泡可以重聽）') });
    if (a.value === total) { sfx('coin'); a.button.classList.add('right'); if (firstP) right++; break; }
    sfx('bad'); a.button.classList.add('wrong'); firstP = false; say(totLine, 'cat'); await wait(700);
  }
  clearBubble('cust');

  // 3. 收銀員問，你按任務答
  for (const k of kinds) {
    const st = K_STEPS[k];
    srsSeen((want[k] ? st.yes : st.no).id);
    await bubble(world, 'cust', st.ask.jp, st.ask.yue, 'cat', { hidden: hideTxt });
    clearBubble('cust');
    await ask(`🗣️ ${st.title.replace('客人要唔要', '你要唔要')}`, [st.yes, st.no], want[k] ? 0 : 1, (want[k] ? st.yes : st.no).id);
  }

  // 4. 付款
  srsSeen(pay.id);
  await bubble(world, 'cust', K_PAY_ASK.jp, K_PAY_ASK.yue, 'cat', { hidden: hideTxt });
  clearBubble('cust');
  await ask('💳 點樣付款？', K_PAY, K_PAY.indexOf(pay), pay.id);
  if (pay.id === 'k_genkin') {
    const tender = total < 1000 ? 1000 : total < 2000 ? 2000 : 5000;
    const change = tender - total;
    const cl = K_CHANGE(yenJP(change));
    await bubble(world, 'cust', cl.jp, '（聽吓找返幾錢？）', 'cat', { hidden: true });
    qs++;
    const wrongs = shuffle([change + 100, change + 10, change > 100 ? change - 100 : change + 200, change + 50].filter((v) => v > 0 && v !== change)).slice(0, 2);
    let firstC = true;
    for (;;) {
      const a = await choose(moneyOpts([change, ...wrongs]), { title: h('div', { class: 'panel-title' }, `💴 你畀咗 ${tender} 円，總共 ${total} 円，找返幾多？`) });
      if (a.value === change) { sfx('perfect'); a.button.classList.add('right'); if (firstC) right++; break; }
      sfx('bad'); a.button.classList.add('wrong'); firstC = false; say(cl.jp, 'cat'); await wait(700);
    }
    clearBubble('cust');
  }
  await bubble(world, 'cust', K_THANKS.jp, K_THANKS.yue, 'cat');
  clearBubble('cust');

  // 5. 離開前講咩
  const bye = pickByLevel(K_BYE);
  srsSeen(bye.key);
  const okFirst = await ask('👋 離開前講咩？', [bye, ...shuffle(K_BYE_WRONG).slice(0, 2)], 0, bye.key);
  poolCheck('konbini', bye.lv ?? 0);
  trackLv(bye.lv ?? 0, okFirst);

  const score = qs ? right / qs : 1;
  const coins = 30 + Math.round(score * 60);
  const xp = 15 + Math.round(score * 15);
  S().coins += coins;
  const ups = addXP(xp);
  save(); renderHUD(); sfx('level');
  await next('返廚房 🏠',
    h('div', { class: 'unlock' },
      h('div', { class: 'big-emo spin' }, score === 1 ? '💮' : score > 0.7 ? '⭕' : '🔺'),
      h('div', { class: 'panel-title' }, `買嘢成功！一次答啱 ${right} / ${qs}`),
      h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`)));
  coinFly(coins);
  clearBubble();
  $('#taskbar').classList.remove('show');
  world.customerOut(true);
  await fade(() => { world.catTo('kitchen'); world.setView('kitchen', true); });
  if (ups) await levelUp();
  hub();
}

// ===== 便利店：玩家做收銀員 =====
async function cashierServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const cust = pickCustomer(index, false);
  const listen = s.settings.subs === 'tap';
  const items = shuffle(GOODS).slice(0, 2 + Math.floor(Math.random() * 2));
  const total = items.reduce((a, g) => a + g.price, 0);
  const rnd = (a) => a[Math.floor(Math.random() * a.length)];
  let mistakes = 0;
  hidePanel();
  world.catTo('kon');
  world.setView('kon', true);
  world.catFace('customer');
  sfx('door');
  await world.customerIn(cust);
  world.cat.play('wave', 0.8);
  await bubble(world, 'cat', CAT.irasshai.jp, CAT.irasshai.yue, 'cat');
  clearBubble('cat');

  // 掃碼：逐件撳
  await new Promise((resolve) => {
    const scanned = new Set();
    let sum = 0;
    const totalEl = h('div', { class: 'scan-total' }, '合計：0 円');
    const btns = items.map((g) => h('button', {
      class: 'choice scan-item', type: 'button',
      onclick: (e) => {
        if (scanned.has(g.id)) return;
        scanned.add(g.id); sum += g.price; sfx('coin');
        e.currentTarget.classList.add('right');
        totalEl.textContent = `合計：${sum} 円`;
        if (scanned.size === items.length) setTimeout(resolve, 600);
      },
    }, h('span', { class: 'emo' }, art(g.art, g.yue)), h('span', { class: 'jp-inline', html: toHTML(g.jp) }), h('small', {}, `${g.price} 円`)));
    panel(h('div', { class: 'panel-title' }, '🧾 逐件掃碼（撳每件貨品）'), h('div', { class: 'choices cols2' }, btns), totalEl);
  });
  hidePanel();
  await bubble(world, 'cat', `合計{ごうけい}は ${yenJP(total)}です。`, `總共 ${total} 円`, 'cat');
  clearBubble('cat');

  // 客人答覆：揀啱做法，錯咗要再聽
  const kAsk = async (line, labels, correct, title, word, voice) => {
    let first = true;
    srsSeen(word);
    for (;;) {
      bubble(world, 'cust', line.jp, line.yue, voice, { hidden: listen });
      const a = await choose(shuffle(labels.map((label, value) => ({ label, value }))), { title: h('div', { class: 'panel-title' }, title) });
      if (a.value === correct) { srsAnswer(word, first); poolCheck('konbini', 1); sfx('good'); clearBubble('cust'); return; }
      if (first) mistakes++;
      first = false; srsAnswer(word, false); sfx('bad'); hint(`佢講：「${line.yue}」— 再聽一次！`, 3000);
    }
  };
  const kinds = ['bag'];
  if (items.some((g) => g.heat)) kinds.push('heat');
  if (items.some((g) => g.cutlery)) kinds.push('cutlery'); else if (Math.random() < 0.5) kinds.push('point');
  for (const k of kinds) {
    const st = K_STEPS[k];
    const yes = Math.random() < 0.5;
    const ans = yes ? st.yes : st.no;
    preload(ans.jp, cust.id);
    await bubble(world, 'cat', st.ask.jp, st.ask.yue, 'cat');
    clearBubble('cat');
    await kAsk(ans, [st.yes.label, st.no.label], yes ? 0 : 1, st.title, ans.id, cust.id);
  }

  // 付款
  await bubble(world, 'cat', K_PAY_ASK.jp, K_PAY_ASK.yue, 'cat');
  clearBubble('cat');
  const pay = rnd(K_PAY);
  await kAsk(pay, K_PAY.map((p) => `${p.icon} ${p.label}`), K_PAY.indexOf(pay), '客人點樣付款？', pay.id, cust.id);
  if (pay.id === 'k_genkin') {
    const tender = total < 1000 ? 1000 : total < 2000 ? 2000 : 5000;
    const change = tender - total;
    const wrongs = shuffle([change + 100, change + 10, change > 100 ? change - 100 : change + 200, change + 50].filter((v) => v > 0 && v !== change)).slice(0, 2);
    const opts = shuffle([change, ...wrongs]);
    await bubble(world, 'cust', `${yenJP(tender)}で お願{ねが}いします。`, `用 ${tender} 円付款。`, cust.id);
    clearBubble('cust');
    srsSeen('k_otsuri');
    let first = true;
    for (;;) {
      await bubble(world, 'cat', K_OTSURI_ASK.jp, K_OTSURI_ASK.yue, 'cat');
      clearBubble('cat');
      const a = await choose(opts.map((v) => ({ value: v, el: h('div', { class: 'dish-opt' }, h('span', { class: 'jp-inline', html: toHTML(yenJP(v)) }), h('small', {}, `${v} 円`)) })),
        { title: h('div', { class: 'panel-title' }, `💴 收咗 ${tender} 円，總共 ${total} 円，應該找幾多？`) });
      if (a.value === change) { srsAnswer('k_otsuri', first); sfx('perfect'); break; }
      if (first) mistakes++;
      first = false; srsAnswer('k_otsuri', false); sfx('bad'); hint(`${tender} − ${total} = ${change} 円`, 3500);
    }
  }
  hidePanel();
  await bubble(world, 'cat', K_THANKS.jp, K_THANKS.yue, 'cat');
  clearBubble('cat');

  const stars = mistakes === 0 ? 3 : mistakes === 1 ? 2 : 1;
  const coins = Math.round((40 + total / 10) * (0.6 + 0.4 * (stars / 3)) * cust.tip);
  const xp = 10 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `🏪 ${items.map((g) => g.yue).join('、')}`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((n) => h('span', { class: n <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((n) => n <= stars && setTimeout(() => sfx('good'), n * 180));
  world.coinsFromCustomer();
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  const bye = pickByLevel(K_BYE);
  srsSeen(bye.key); srsAnswer(bye.key, true); poolCheck('konbini', bye.lv);
  await bubble(world, 'cust', bye.jp, bye.yue, lineVoice(cust.id, bye));
  clearBubble('cust');
  world.customerOut();
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}

// ===== 車站：玩家做遊客 =====
// 旅行章節 unit 進度：一次答啱計數，呢級呢章第一次學晒有獎勵
function markU(ch, lv, unit, first) {
  if (markUnit(ch, lv, unit, first) !== 'level-done') return;
  levelDoneReward(ch, lv);
}
function poolCheck(ch, lv) { if (checkPoolDone(ch, lv)) levelDoneReward(ch, lv); }
function levelDoneReward(ch, lv) {
  S().coins += 100; save(); renderHUD(); sfx('level');
  const cn = { konbini: '便利店', resto: '餐廳', drama: '對話劇場' }[ch] || (CHAPTERS.find((c) => c.id === ch) || {}).name || ch;
  toast(`✅ ${cn.split('・')[0]} ${LEVELS[lv].name} 學晒！獎勵 🪙100`);
}

// ===== 車站：玩家做駅員（聽遊客問，揀啱答案）=====
async function ekiStaffServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const L = jpLevel();
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  const dest = pick(DESTS);
  const vars = { d: dest.jp, dy: dest.yue, n: PLAT[dest.platform], p: dest.platform };
  const subst = (t, v = vars) => t.replace(/\{(d|dy|n|p)\}/g, (_, k) => v[k]);
  const lvA = drawLv();
  const overshoot = lvA >= 1 && Math.random() < 0.5;
  let mistakes = 0;

  hidePanel();
  clearBubble();
  world.catTo('eki');
  world.suitcase.visible = false;
  world.setView('eki', true);
  world.setMachine('きっぷ うりば', '');
  world.customerOut(true);
  sfx('door');
  await world.ekiStaffIn({ id: 'usagi', color: 0xfaf6f0, ear: 'long' }, 'eki', false);

  const opt = (jp, yue) => h('div', { class: 'dish-opt' },
    h('span', { class: 'jp-inline', html: toHTML(jp) }),
    showYue && yue ? h('small', {}, yue) : null);
  const tourist = overshoot ? OVERSHOOT[lvA].tourist : { jp: subst(ASK[lvA].ok.jp), yue: subst(ASK[lvA].ok.yue) };
  await next('你係駅員 ▶', h('div', { class: 'panel-title' }, '🧑‍✈️ 今次你做駅員。聽遊客問乜，揀啱嘅答案。'));
  await bubble(world, 'cust', tourist.jp, tourist.yue, 'usagi', { hidden: listen });
  clearBubble('cust');

  let items;
  if (overshoot) {
    items = [OVERSHOOT[lvA].ok, ...OVERSHOOT[lvA].bad];
  } else {
    const wrongPlat = shuffle([1, 2, 3, 4].filter((x) => x !== dest.platform))[0];
    const wv = { ...vars, n: PLAT[wrongPlat], p: wrongPlat };
    const r = REPLY[lvA];
    items = [
      { jp: subst(r.jp), yue: subst(r.yue) },
      { jp: subst(r.jp, wv), yue: subst(r.yue, wv), why: `${dest.yue}係 ${dest.platform} 號月台，唔係 ${wrongPlat} 號` },
      { ...STAFF_RUDE[lvA] },
    ];
  }
  const idx = shuffle(items.map((_, i) => i));
  const correct = idx.indexOf(0);
  let first = true;
  const title = h('div', { class: 'panel-title' },
    jpLine(tourist.jp, { yue: tourist.yue, voice: 'usagi', hidden: listen }),
    h('div', { class: 'sub' }, overshoot ? '遊客搭過站，你點答？' : `📋 案內表：${dest.jp.replace(/\{.*?\}/g, '')} → ${PLAT[dest.platform].replace(/\{.*?\}/g, '')}（${dest.platform} 號月台）　遊客想去 ${dest.yue}，你點答？`));
  for (;;) {
    const a = await choose(idx.map((i, value) => ({ el: opt(items[i].jp, items[i].yue), value })), { title });
    if (a.value === correct) { trackLv(lvA, first); markU('eki', lvA, overshoot ? 's:os' : 's:ask', first); sfx('good'); break; }
    if (first) mistakes++;
    first = false;
    trackLv(lvA, false);
    sfx('bad');
    hint(items[idx[a.value]].why || '再諗吓！', 3200);
  }
  await bubble(world, 'cat', items[0].jp, items[0].yue, 'cat');
  clearBubble('cat');
  world.cat.happy();
  await bubble(world, 'cust', TOURIST_THANKS.jp, TOURIST_THANKS.yue, 'usagi', { hidden: listen });
  clearBubble('cust');
  world.customerOut(true);

  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round(70 * (0.6 + 0.4 * (stars / 3)));
  const xp = 10 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `🧑‍✈️ 駅員 · ${overshoot ? '乗り過ごし' : '問月台'}`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}

async function ekiServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const L = jpLevel();
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  const dest = pick(DESTS);
  const n = 1 + Math.floor(Math.random() * 3);
  const ltd = L >= 2 && Math.random() < 0.4; // 今次買特急券
  const each = dest.fare + (ltd ? LTD_EXTRA : 0);
  const total = each * n;
  const plain = (t) => t.replace(/\{.*?\}/g, '');
  const sub = (t, m) => t.replace(/\{(d|dy|n|p)\}/g, (_, k) => m[k]);
  const vars = { d: dest.jp, dy: dest.yue, n: PLAT[dest.platform], p: dest.platform };
  let mistakes = 0;

  // 選項：日文 + （可選）廣東話細字
  const opt = (jp, yue, small) => h('div', { class: 'dish-opt' },
    h('span', { class: 'jp-inline', html: toHTML(jp) }),
    small ? h('small', {}, small) : (showYue && yue ? h('small', {}, yue) : null));
  const card = (line, voice, caption) => h('div', { class: 'panel-title' },
    line ? jpLine(line.jp, { yue: line.yue, voice, hidden: listen, autoplay: true }) : null,
    caption ? h('div', { class: 'sub' }, caption) : null);
  // 揀到啱為止；第一次錯計一次失誤。options 次序已經打亂，correct 係啱嗰個 index
  const ask = async ({ line = null, voice = 'usagi', options, correct, caption, word, lv, unit = null, ulv = null }) => {
    let first = true;
    if (word) srsSeen(word);
    for (;;) {
      const a = await choose(options.map((o, value) => ({ el: o.el, value })), { title: card(line, voice, caption) });
      if (a.value === correct) {
        if (word) srsAnswer(word, first);
        if (lv != null) trackLv(lv, first);
        if (unit) markU('eki', ulv ?? lv ?? L, unit, first);
        sfx('good');
        return a.value;
      }
      if (first) mistakes++;
      first = false;
      if (word) srsAnswer(word, false);
      if (lv != null) trackLv(lv, false);
      sfx('bad');
      hint(options[a.value].why || (line ? `再聽一次：「${line.yue}」` : '再諗吓！'), 3200);
    }
  };
  // 將 [啱嗰個, ...其餘] 打亂，返回 { options, correct }
  const mix = (items) => {
    const idx = shuffle(items.map((_, i) => i));
    return { options: idx.map((i) => items[i]), correct: idx.indexOf(0) };
  };
  const staffLook = { id: 'kuma', color: 0x8a5a3b, ear: 'round' };

  // ① 去到大堂，睇今次旅程
  hidePanel();
  clearBubble();
  world.catTo('eki');
  world.setView('eki', true);
  world.setMachine('行き先を えらぶ', '');
  world.customerOut(true);
  sfx('door');
  await world.ekiStaffIn(staffLook, 'eki');
  const trip = L >= 2 ? `🎫 今次旅程：去 ${dest.yue}，成人 ${n} 位。${ltd ? `你要搭特急，要買特急券（每位加 ${LTD_EXTRA} 円）。` : '你買嘅係普通車票（唔包特急）。'}` : `🎫 今次旅程：去 ${dest.yue}，成人 ${n} 位。`;
  await next('出發 ▶', h('div', { class: 'panel-title' }, trip));

  // ② 券売機：目的地 → 張數 → 投錢
  const others = shuffle(DESTS.filter((d) => d.id !== dest.id)).slice(0, 3);
  await ask({
    line: M_DEST, caption: `去 ${dest.yue}`, word: `eki_d_${dest.id}`,
    ...mix([dest, ...others].map((d) => ({ el: opt(d.jp, '', `${d.fare} 円`), why: d.id === dest.id ? '' : `呢個係 ${d.yue}，你要去 ${dest.yue}` }))),
  });
  world.setMachine(plain(dest.jp), `${dest.fare} 円 × ?`);
  await ask({
    line: M_COUNT, caption: `成人 ${n} 位`, word: 'eki_mai',
    options: [1, 2, 3].map((k) => ({ el: opt(`大人{おとな} ${CNT[k]}`, `${k} 張`), why: `你要買 ${n} 張` })),
    correct: n - 1,
  });
  if (L >= 2) {
    await ask({
      line: M_KIND, caption: ltd ? '你要搭特急' : '你只買普通車票', word: 'eki_tokkyu', unit: 't:kind', ulv: L,
      ...mix((ltd ? [KIND_OPT.ltd, KIND_OPT.plain] : [KIND_OPT.plain, KIND_OPT.ltd]).map((o, i) => ({ el: opt(o.jp, o.yue), why: i === 0 ? '' : ltd ? '你要搭特急，要買特急券' : '你只買普通車票，唔使特急券' }))),
    });
  }
  world.setMachine(plain(dest.jp), `${each} 円 × ${n}`);
  const wrongs = [...new Set([each * (n + 1), each * (n > 1 ? n - 1 : n + 2), each + 10])].filter((v) => v !== total).slice(0, 2);
  await ask({
    line: M_TOTAL(total), caption: `${each} 円 × ${n} 位 = ?`, word: 'eki_kippu',
    ...mix([total, ...wrongs].map((v) => ({ el: opt(yenJP(v), '', `${v} 円`), why: `${each} × ${n} = ${total} 円` }))),
  });
  world.setMachine('きっぷ', `${total} 円`);
  sfx('coin');
  await bubble(world, 'cust', M_TAKE.jp, M_TAKE.yue, 'kuma', { hidden: listen });
  clearBubble('cust');

  // ③ 問駅員：搵月台
  const lvA = drawLv();
  const A = ASK.find((a) => a.lv === lvA) || ASK[0];
  const rep = REPLY.find((r) => r.lv === lvA) || REPLY[0];
  await ask({
    caption: '問駅員：去呢個目的地要喺邊個月台上車？', word: 'eki_ikisaki', lv: lvA, unit: 't:ask',
    ...mix([A.ok, ...A.bad].map((o) => ({ el: opt(sub(o.jp, vars), sub(o.yue, vars)), why: o.why }))),
  });
  await bubble(world, 'cat', sub(A.ok.jp, vars), sub(A.ok.yue, vars), 'cat');
  clearBubble('cat');
  await bubble(world, 'cust', sub(rep.jp, vars), sub(rep.yue, vars), 'kuma', { hidden: listen });
  clearBubble('cust');
  const otherPlats = shuffle([1, 2, 3, 4].filter((x) => x !== dest.platform)).slice(0, 2);
  await ask({
    caption: PICK_PLAT.yue, word: 'eki_bansen',
    ...mix([dest.platform, ...otherPlats].map((x) => ({ el: opt(PLAT[x], `${x} 號月台`), why: `駅員講咗 ${dest.platform} 號月台` }))),
  });
  world.customerOut(true);

  // ④ 月台：聽廣播，揀上唔上車
  world.catTo('pf');
  world.setView('ekiPf', true);
  world.setPlatform(dest.platform, [plain(dest.jp), '各駅停車', '快速']);
  await wait(400);
  const trainCheck = async (train, isRight) => {
    const ann = ANN(L, dest.platform, train.type, train.dest);
    const arr = world.trainArrive(plain(train.dest.jp), train.type.short, train.type.color);
    const cap = L >= 2 ? `你要去 ${dest.yue}（${ltd ? '特急券' : '普通車票'}）` : `你要去 ${dest.yue}`;
    await ask({
      line: ann, voice: 'usagi', caption: cap, word: isRight ? 'eki_noru' : 'eki_matsu', unit: 't:ann', ulv: L,
      options: [
        { el: opt(BOARD.ride.jp, BOARD.ride.yue), why: train.dest.id !== dest.id ? `呢班車去 ${train.dest.yue}，唔係 ${dest.yue}` : ltd ? `你買咗特急券，要搭特急，${train.type.yue}唔啱` : `${train.type.yue}唔包喺你嘅普通車票` },
        { el: opt(BOARD.wait.jp, BOARD.wait.yue), why: '呢班就係你要搭嘅！' },
      ],
      correct: isRight ? 0 : 1,
    });
    await arr;
    if (isRight) { world.cat.happy(); sfx('perfect'); await wait(900); } else await wait(500);
    await world.trainLeave();
  };
  if (L >= 3 && Math.random() < 0.5) {
    // N1：人身事故，要同駅員交涉
    const inc = pick(INCIDENTS);
    await world.ekiStaffIn(staffLook, 'pf');
    await ask({
      line: INCIDENT_ANN, voice: 'usagi', caption: `🚨 ${inc.task}`, lv: 3, word: 'eki_jinshin', unit: `t:inc${INCIDENTS.indexOf(inc)}`,
      ...mix([inc.ok, ...inc.bad].map((o) => ({ el: opt(o.jp, o.yue), why: o.why }))),
    });
    await bubble(world, 'cat', inc.ok.jp, inc.ok.yue, 'cat');
    clearBubble('cat');
    await bubble(world, 'cust', inc.reply.jp, inc.reply.yue, 'kuma', { hidden: listen });
    clearBubble('cust');
    world.customerOut(true);
  } else {
    // 第一班錯（另一個目的地，或者特急），第二班啱
    const other = pick(DESTS.filter((d) => d.id !== dest.id));
    const okTypes = ltd ? [TYPES[2]] : TYPES.filter((t) => t.ok);
    const wrongTrain = L >= 2 && Math.random() < 0.5
      ? { dest, type: ltd ? pick(TYPES.filter((t) => t.ok)) : TYPES[2] }
      : { dest: other, type: L >= 2 ? pick(okTypes) : TYPES[0] };
    await trainCheck(wrongTrain, false);
    await trainCheck({ dest, type: L >= 2 ? pick(okTypes) : TYPES[0] }, true);
  }
  await bubble(world, 'cat', CAT_THANKS.jp, CAT_THANKS.yue, 'cat');
  clearBubble('cat');

  // ⑤ 結算
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round((50 + total / 10) * (0.6 + 0.4 * (stars / 3)));
  const xp = 10 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `🚉 ${dest.yue} · 成人 ${n} 位 · ${total} 円`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}

// 選項試聽掣：只播放，唔會當係揀答案
const spkOpt = (jp, voice = 'cat') => h('span', {
  class: 'mini-spk', role: 'button', tabindex: 0, 'aria-label': '試聽',
  onclick: (e) => { e.stopPropagation(); e.preventDefault(); sfx('tap'); say(jp, voice); },
}, '🔊');

// ===== 酒店：前台視角，客人提出要求，玩家揀啱嘅職員答覆 =====
async function hotelStaffServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  const lvA = drawLv();
  // 三種情境：房間請求 / 客人入住（揀啱房號回覆）/ 客人退房
  const mode = pick(['req', 'checkin', 'checkout']);
  const rude = STAFF_RUDE_H[lvA];
  const guests = [{ jp: '一人{ひとり}', yue: '一位' }, { jp: '二人{ふたり}', yue: '兩位' }];
  const gi = Math.floor(Math.random() * 2);
  const nights = 1 + Math.floor(Math.random() * 3);
  const floor = 2 + Math.floor(Math.random() * 8);
  const room = floor * 100 + 1 + Math.floor(Math.random() * 9);
  const mkVars = (fl, rm) => ({ p: guests[gi].jp, py: guests[gi].yue, q: guests[1 - gi].jp, n: NIGHTS[nights], nn: `${nights} 晚`, f: floorJP(fl), fn: String(fl), r: roomJP(rm), rn: String(rm) });
  const fill = (t, v) => t.replace(/\{(py|p|q|nn|n|fn|f|rn|r)\}/g, (_, k) => v[k]);
  const V = mkVars(floor, room);
  let unitKey = mode === 'checkin' ? 's:ci' : 's:co';
  let req; // { task, ok(客人講), reply(職員答啱), items }
  if (mode === 'req') {
    const r0 = pick(REQUESTS[lvA]);
    unitKey = `s:rq${REQUESTS[lvA].indexOf(r0)}`;
    const pool = REQUESTS.flat().filter((q) => q.reply.jp !== r0.reply.jp).map((q) => q.reply);
    const wr = shuffle(pool).slice(0, rude ? 1 : 2).map((r) => ({ ...r, why: '呢句答咗另一個要求，客人問嘅唔係呢樣' }));
    req = { task: r0.task, ok: r0.ok, reply: r0.reply, items: [r0.reply, ...wr, ...(rude ? [rude] : [])] };
  } else if (mode === 'checkin') {
    // 客人講要求（樓層／靜／高低），玩家睇房況揀合適嘅房
    const ci = CHECKIN[lvA];
    const fls = shuffle([2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 3).sort((x, y) => x - y);
    const rmOf = (f) => f * 100 + 1 + Math.floor(Math.random() * 9);
    let guest, okRoom, wrongRooms, why, tags = {};
    if (lvA <= 1) {
      const t = pick(fls);
      guest = lvA === 0
        ? { jp: `${floorJP(t)}が いいです。`, yue: `我想要 ${t} 樓。` }
        : { jp: `${floorJP(t)}の 部屋{へや}を お願{ねが}いします。`, yue: `唔該，我要 ${t} 樓嘅房。` };
      okRoom = rmOf(t); wrongRooms = fls.filter((f) => f !== t).slice(0, 2).map(rmOf); why = `客人想要 ${t} 樓`;
    } else if (lvA === 2) {
      const high = Math.random() < 0.5;
      guest = high
        ? { jp: 'できるだけ 高{たか}い 階{かい}の 部屋{へや}が いいんですが。', yue: '想盡量要高層嘅房。' }
        : { jp: 'できるだけ 低{ひく}い 階{かい}の 部屋{へや}が いいんですが。', yue: '想盡量要低層嘅房。' };
      const t = high ? fls[2] : fls[0];
      okRoom = rmOf(t); wrongRooms = fls.filter((f) => f !== t).map(rmOf); why = high ? '客人要高層，揀最高樓層' : '客人要低層，揀最低樓層';
      [okRoom, ...wrongRooms].forEach((r) => { tags[r] = `${Math.floor(r / 100)} 樓`; });
    } else {
      guest = { jp: '静{しず}かで、 エレベーターから 遠{とお}い 部屋{へや}を お願{ねが}いできますか。', yue: '可唔可以要安靜、遠離升降機嘅房？' };
      const fs = shuffle([2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 3);
      const rooms = fs.map(rmOf);
      okRoom = rooms[0]; wrongRooms = rooms.slice(1);
      tags[okRoom] = '走廊盡頭，遠離升降機・安靜';
      tags[wrongRooms[0]] = '升降機隔籬';
      tags[wrongRooms[1]] = '近製冰機・較嘈';
      why = '客人要安靜、遠離升降機嘅房';
    }
    const mkItem = (r, ok) => ({ jp: roomJP(r), yue: `${r} 號房`, tag: tags[r] || '', voice: 'word', why: ok ? '' : `呢間唔合客人要求：${why}` });
    req = {
      pre: { jp: fill(ci.ok.jp, V), yue: fill(ci.ok.yue, V) },
      task: '客人入住：聽佢嘅要求，揀合適嘅房間',
      ok: guest,
      reply: { jp: `${roomJP(okRoom)}は いかがでしょうか。`, yue: `${okRoom} 號房可以嗎？` },
      items: [mkItem(okRoom, true), ...wrongRooms.map((r) => mkItem(r, false))],
    };
  } else {
    const co = CHECKOUT[lvA];
    const bye = co.reply;
    const tpl = ROOM_REPLY[lvA];
    const wr = [{ ...WELCOME, why: '客人係離開，唔係剛到' }, { jp: fill(tpl.jp, V), yue: fill(tpl.yue, V), why: '呢句係入住時先講' }];
    req = { task: '客人退房', ok: co.ok, reply: bye, items: [bye, ...wr.slice(0, rude ? 1 : 2), ...(rude ? [rude] : [])] };
  }
  const items = req.items;
  let mistakes = 0;

  hidePanel();
  clearBubble();
  world.catTo('hotel');
  world.suitcase.visible = false;
  world.cat.root.position.set(0.55, 0, -0.75);
  world.cat.root.rotation.y = 0.25;
  world.setView('hotel', true);
  world.customerOut(true);
  sfx('door');
  await world.hotelStaffIn({ id: 'usagi', color: 0xfaf6f0, ear: 'long' }, true);
  await next('你係前台 ▶', h('div', { class: 'panel-title' }, '🛎️ 今次你做酒店前台。聽客人講乜，揀啱嘅回答。'));
  if (req.pre) { await bubble(world, 'cust', req.pre.jp, req.pre.yue, 'usagi', { hidden: listen }); clearBubble('cust'); }
  await bubble(world, 'cust', req.ok.jp, req.ok.yue, 'usagi', { hidden: listen });
  clearBubble('cust');

  const idx = shuffle(items.map((_, i) => i));
  const correct = idx.indexOf(0);
  const opt = (it) => h('div', { class: 'dish-opt' },
    h('span', { class: 'jp-inline', html: toHTML(it.jp) }),
    it.tag ? h('small', {}, it.tag) : (showYue && it.yue ? h('small', {}, it.yue) : null),
    spkOpt(it.jp, it.voice || 'cat'));
  const title = h('div', { class: 'panel-title' },
    jpLine(req.ok.jp, { yue: req.ok.yue, voice: 'usagi', hidden: listen }),
    h('div', { class: 'sub' }, `客人情況：${req.task}。你點答？`));
  let first = true;
  for (;;) {
    const a = await choose(idx.map((i, value) => ({ el: opt(items[i]), value })), { title });
    if (a.value === correct) { trackLv(lvA, first); markU('hotel', lvA, unitKey, first); sfx('good'); break; }
    if (first) mistakes++;
    first = false;
    trackLv(lvA, false);
    sfx('bad');
    hint(items[idx[a.value]].why || '再諗吓！', 3400);
  }
  await bubble(world, 'cat', req.reply.jp, req.reply.yue, 'cat');
  clearBubble('cat');
  world.cat.happy();
  await bubble(world, 'cust', GUEST_THANKS.jp, GUEST_THANKS.yue, 'usagi', { hidden: listen });
  clearBubble('cust');
  world.customerOut(true);

  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round(70 * (0.6 + 0.4 * (stars / 3)));
  const xp = 10 + stars * 5;
  panel(
    h('div', { class: 'sub' }, '🛎️ 前台 · 回應客人'),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}

// ===== 酒店：遊客入住 → 房間請求 → 退房 =====
async function hotelServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  const lvA = drawLv();
  const staffLook = { id: 'kuma', color: 0x8a5a3b, ear: 'round' };
  const guests = [{ jp: '一人{ひとり}', yue: '一位' }, { jp: '二人{ふたり}', yue: '兩位' }];
  const gi = Math.floor(Math.random() * 2);
  const nights = 1 + Math.floor(Math.random() * 3);
  const floor = 2 + Math.floor(Math.random() * 8);
  const room = floor * 100 + 1 + Math.floor(Math.random() * 9);
  const vars = { p: guests[gi].jp, py: guests[gi].yue, q: guests[1 - gi].jp, n: NIGHTS[nights], nn: `${nights} 晚`, f: floorJP(floor), fn: String(floor), r: roomJP(room), rn: String(room) };
  const sub = (t, v = vars) => t.replace(/\{(py|p|q|nn|n|fn|f|rn|r)\}/g, (_, k) => v[k]);
  let mistakes = 0;

  const opt = (jp, yue, small, voice = 'cat') => h('div', { class: 'dish-opt' },
    h('span', { class: 'jp-inline', html: toHTML(jp) }),
    small ? h('small', {}, small) : (showYue && yue ? h('small', {}, yue) : null),
    spkOpt(jp, voice));
  const card = (line, voice, caption, auto = true) => h('div', { class: 'panel-title' },
    line ? jpLine(line.jp, { yue: line.yue, voice, hidden: listen, autoplay: auto }) : null,
    caption ? h('div', { class: 'sub' }, caption) : null);
  const ask = async ({ line = null, voice = 'kuma', options, correct, caption, word, lv, auto = true, unit = null }) => {
    let first = true;
    if (word) srsSeen(word);
    for (;;) {
      const a = await choose(options.map((o, value) => ({ el: o.el, value })), { title: card(line, voice, caption, auto) });
      if (a.value === correct) {
        if (word) srsAnswer(word, first);
        if (lv != null) trackLv(lv, first);
        if (unit && lv != null) markU('hotel', lv, unit, first);
        sfx('good');
        return a.value;
      }
      if (first) mistakes++;
      first = false;
      if (word) srsAnswer(word, false);
      if (lv != null) trackLv(lv, false);
      sfx('bad');
      hint(options[a.value].why || '再諗吓！', 3600);
    }
  };
  // items[0] = 啱；其餘 = 干擾。返回打亂後嘅 options
  const mix = (items) => {
    const idx = shuffle(items.map((_, i) => i));
    return { options: idx.map((i) => ({ el: opt(sub(items[i].jp), sub(items[i].yue)), why: items[i].why ? sub(items[i].why) : '' })), correct: idx.indexOf(0) };
  };
  const say2 = async (who, line) => {
    const l = { jp: sub(line.jp), yue: sub(line.yue) };
    await bubble(world, who, l.jp, l.yue, who === 'cat' ? 'cat' : 'kuma', who === 'cat' ? {} : { hidden: listen });
    clearBubble(who);
  };

  // ① 入門
  hidePanel();
  clearBubble();
  world.catTo('hotel');
  world.setView('hotel', true);
  world.customerOut(true);
  sfx('door');
  await world.hotelStaffIn(staffLook);
  await next('入去 ▶', h('div', { class: 'panel-title' }, `🏨 今次住宿：${vars.nn}，${vars.py}。`));
  await say2('cust', WELCOME);

  // ② check-in
  const ci = CHECKIN[lvA];
  await ask({ caption: `🧳 ${sub(ci.task)}`, word: 'hotel_checkin', lv: lvA, unit: 't:ci', ...mix([ci.ok, ...ci.bad]) });
  await say2('cat', ci.ok);
  const rr = ROOM_REPLY[lvA];
  await say2('cust', rr);
  const wrongRooms = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((k) => k !== room % 100)).slice(0, 2).map((k, i) => (i === 0 ? ((floor % 8) + 2) * 100 + k : floor * 100 + k));
  await ask({
    line: { jp: sub(rr.jp), yue: sub(rr.yue) }, voice: 'kuma', auto: false, // 方便重聽房號
    caption: PICK_ROOM.yue, word: 'hotel_goshitsu', lv: lvA, unit: 't:rm',
    ...(() => {
      const items = [room, ...wrongRooms];
      const idx = shuffle(items.map((_, i) => i));
      return { options: idx.map((i) => ({ el: opt(roomJP(items[i]), '', String(items[i]), 'word'), why: `前台講嘅係 ${room} 號房` })), correct: idx.indexOf(0) };
    })(),
  });
  world.cat.happy();

  // ③ 住宿中：一個請求
  const req = pick(REQUESTS[lvA]);
  const rqUnit = `t:rq${REQUESTS[lvA].indexOf(req)}`;
  await next('入咗房 ▶', h('div', { class: 'panel-title' }, `🛏️ 你住喺 ${room} 號房。`));
  await ask({ caption: `📞 ${req.task}`, word: lvA >= 2 ? 'hotel_kikanai' : 'hotel_taoru', lv: lvA, unit: rqUnit, ...mix([req.ok, ...req.bad]) });
  await say2('cat', req.ok);
  await say2('cust', req.reply);

  // ④ 退房
  const co = CHECKOUT[lvA];
  await next('第二日 ▶', h('div', { class: 'panel-title' }, '🌅 住完喇，落去前台退房。'));
  await ask({ caption: '🧳 你想退房', word: 'hotel_checkout', lv: lvA, unit: 't:co', ...mix([co.ok, ...co.bad]) });
  await say2('cat', co.ok);
  await say2('cust', co.reply);
  world.customerOut(true);

  // ⑤ 結算
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round(90 * (0.6 + 0.4 * (stars / 3)));
  const xp = 12 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `🏨 ${vars.nn} · ${room} 號房`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}

// ===== 藥房：病人問診 → 症狀 → 幾時開始 → 敏感 → 服藥指示 → 道別 =====
// ===== 街上問路：問路 → 聽指示 →（N1：接受帶路）→ 道別 =====
// ===== 對話劇場：選場景 → 逐句對話 → 語言點小卡 =====
let dramaRel = 'all';
let dramaMode = 'series';
let dramaFiltersOpen = false;
let dailyFiltersOpen = false;
// Learning menus own their scroll area; header and primary action stay reachable.
function learningPanel(title, content, action) {
  const p = panel(
    h('div', { class: 'learning-header' }, h('h2', {}, title),
      h('button', { class: 'btn', onclick: () => { sfx('tap'); hub(); } }, '返大堂')),
    h('div', { class: 'learning-content', tabindex: '0', 'aria-label': `${title}內容` }, content),
    h('div', { class: 'learning-footer' }, action));
  p.classList.add('learning-panel');
}
function learningFilters(label, open, remember, ...content) {
  const d = fold(h('b', {}, label), open, () => h('div', { class: 'fold-body learning-filters' }, content));
  d.addEventListener('toggle', () => remember(d.open));
  return d;
}
// 進度條
const miniBar = (n, total) => h('span', { class: 'mini-bar', 'aria-hidden': 'true' }, h('i', { style: `width:${total ? Math.round((n / total) * 100) : 0}%` }));
const progLine = (label, n, total, unit) => h('div', { class: 'prog', role: 'progressbar', 'aria-valuenow': String(n), 'aria-valuemax': String(total), 'aria-label': label },
  h('span', {}, label), h('b', {}, `${n} / ${total} ${unit}`), miniBar(n, total));
const foldHead = (title, n, total, unit) => h('span', { class: 'fold-head' }, h('b', {}, title), h('small', {}, `${n}/${total} ${unit}`), miniBar(n, total));
// 摺疊卡：打開先砌內容，慳 DOM
function fold(head, open, fill) {
  const d = h('details', { class: 'fold', ...(open ? { open: '' } : {}) }, h('summary', {}, head));
  let filled = false;
  const go = () => { if (filled || !d.open) return; filled = true; d.append(...[fill()].flat().filter(Boolean)); };
  d.addEventListener('toggle', go);
  go();
  return d;
}
// 每 size 個一組做單元；第一個未完成嘅自動打開
function unitFolds(list, isDone, render, { size = 10, unit = '句', title = (i) => `單元 ${i + 1}`, autoOpen = true } = {}) {
  const groups = [];
  for (let i = 0; i < list.length; i += size) groups.push(list.slice(i, i + size));
  const first = autoOpen ? groups.findIndex((g) => g.some((x) => !isDone(x))) : -1;
  return groups.map((g, i) => {
    const n = g.filter(isDone).length;
    const head = autoOpen ? foldHead(`${n === g.length ? '✅' : n ? '⭐' : '📘'} ${title(i, g)}`, n, g.length, unit)
      : h('span', { class: 'fold-head' }, h('b', {}, `📒 ${title(i, g)}`));
    return fold(head, i === first, () => h('div', { class: 'hub-btns drama-list' }, ...g.map(render)));
  });
}
const npcLook = (rel) => CUSTOMERS.find((c) => c.id === NPC[rel]) || CUSTOMERS[0];
function dramaMenu() {
  busy = true;
  clearBubble();
  world.customerOut(true);
  world.catTo('street');
  world.setView('street');
  world.catFace('front');
  const s = S();
  const st = s.unitStat || {};
  const seen = s.dramaSeen || {};
  const ends = s.dramaEnds || {};
  const chips = h('div', { class: 'chapter-tabs', 'aria-label': '揀關係' },
    ['all', ...Object.keys(REL)].map((k) => h('button', {
      class: `btn ${dramaRel === k ? 'primary' : ''}`, 'aria-pressed': String(dramaRel === k),
      onclick: () => { sfx('tap'); dramaRel = k; dramaMenu(); },
    }, k === 'all' ? '全部' : REL[k])));
  const row = (sc, locked, big) => {
    const done = st[`drama:${sc.lv}:${sc.id}`] || 0;
    const end = sc.turns.some((t) => t.t === 'end') ? ` · 🔀 結局 ${Object.keys(ends[sc.id] || {}).length}/2` : '';
    const tag = [sc.review ? '♻️' : '', sc.turns.some((t) => t.rel) ? '🔄' : ''].join('');
    return h('button', { class: `btn scene${locked ? ' disabled' : ''}${big ? ' primary big' : ''}`, ...(locked ? { 'aria-disabled': 'true' } : {}), onclick: () => { if (locked) return; sfx('tap'); dramaPlay(sc); } },
      `${big ? (sc.ep > 1 ? '繼續：' : '開始：') : ''}${locked ? '🔒' : sc.icon} ${sc.ep ? `第${sc.ep}集 ` : ''}${sc.name}${tag ? ' ' + tag : ''}`,
      !big ? h('span', { class: 'scene-intro' }, sc.intro) : null,
      h('small', { style: 'display:block;opacity:.75' }, locked ? '玩完上一集先開' :
        `${REL[sc.rel]} · ${TOPIC[sc.topic]}${end}${done >= UNIT_DONE_AT ? ' · ✅' : done ? ' · ▶' : seen[sc.id] ? ' · 👀' : ''}`));
  };
  // 連續劇：按集數排，上一集玩過先解鎖；每套收埋做一張卡
  const seriesEps = Object.entries(SERIES).map(([k, name]) => [name, DRAMA.filter((sc) => sc.series === k).sort((a, b) => a.ep - b.ep)]);
  const series = seriesEps.map(([name, eps]) => {
    const n = eps.filter((sc) => seen[sc.id]).length;
    return fold(foldHead(`${n === eps.length ? '✅' : '📺'} ${name}`, n, eps.length, '集'), false,
      () => h('div', { class: 'hub-btns drama-list' }, ...eps.map((sc, i) => row(sc, i > 0 && !seen[eps[i - 1].id]))));
  });
  // 繼續：先揀玩緊嗰套劇下一集，再揀自己程度未玩嘅單集
  const nextEp = seriesEps.map(([, eps]) => (eps.some((sc) => seen[sc.id]) ? eps.find((sc) => !seen[sc.id]) : null)).find(Boolean);
  const relOk = (sc) => dramaRel === 'all' || sc.rel === dramaRel;
  const singles = DRAMA.filter((sc) => !sc.series && relOk(sc)).slice().sort((a, b) => a.lv - b.lv);
  const next = dramaMode === 'series'
    ? nextEp || seriesEps.map(([, eps]) => eps.find((sc, i) => !seen[sc.id] && (i === 0 || seen[eps[i - 1].id]))).find(Boolean)
    : singles.find((sc) => !seen[sc.id]);
  const seenAll = DRAMA.filter((sc) => seen[sc.id]).length;
  learningPanel('對話劇場', [
    next ? h('section', { class: 'learning-feature' }, h('div', { class: 'sub' }, next === nextEp ? '接住上次嘅故事' : '為你推薦'),
      h('h3', {}, `${next.series ? SERIES[next.series] + ' · ' : ''}${next.ep ? `第 ${next.ep} 集：` : ''}${next.name}`),
      h('p', {}, next.intro), h('div', { class: 'sub' }, `${REL[next.rel]} · ${TOPIC[next.topic]}`))
      : h('p', {}, '呢個選擇已無新場景。可以重玩，或者換個玩法／篩選。'),
    h('div', { class: 'chapter-tabs learning-modes', 'aria-label': '玩法' }, ...[['series', '追連續劇'], ['single', '玩單集']].map(([key, label]) =>
      h('button', { class: 'btn', 'aria-pressed': String(dramaMode === key), onclick: () => { dramaMode = key; sfx('tap'); dramaMenu(); } }, label))),
    ...(dramaMode === 'series' ? series : [
      learningFilters(`篩選場景 · ${REL[dramaRel] || '全部關係'}`, dramaFiltersOpen, (open) => { dramaFiltersOpen = open; },
        h('b', {}, '人物關係'), chips),
      singles.length ? h('div', { class: 'hub-btns drama-list' }, ...singles.map((sc) => row(sc, false)))
        : h('p', {}, '呢個篩選未有場景。打開篩選，試吓其他關係。')]),
    progLine('已完成場景', seenAll, DRAMA.length, '場'),
    h('div', { class: 'hub-btns' },
      h('button', { class: 'btn', onclick: () => { sfx('tap'); registerGame(); } }, '角色練習'),
      h('button', { class: 'btn', onclick: () => { sfx('tap'); phraseBook(); } }, '句卡冊')),
  ], next ? row(next, false, true) : h('span', {}, '揀一個場景，再玩一次'));
}

// 開口講一句。返 true（辨識過關）／'self'（冇辨識，自評）／false（跳過）
const SPEAK_PASS = 0.7;
const SR_ERR = {
  'not-allowed': '冇咪權限：喺瀏覽器網址列允許用咪。',
  'service-not-allowed': '冇咪權限：喺瀏覽器網址列允許用咪。',
  network: '要上網先用到語音辨識。',
  'audio-capture': '搵唔到咪。',
};
function speakStep(line, task) {
  return new Promise((res) => {
    const sr = canListen();
    let passed = false;
    const out = h('div', { class: 'sub', 'aria-live': 'polite' },
      sr ? '撳 🎤 之後直接講。撳 🔊 可以先聽原聲。' : '呢個瀏覽器冇語音辨識（用 Chrome／Safari 先有）。跟住讀出聲，讀完撳「我讀咗」。');
    const go = h('button', { class: 'btn primary big', onclick: () => { sfx('tap'); res(sr ? passed : 'self'); } }, sr ? '跳過 ▶' : '✅ 我讀咗');
    let mic = null;
    if (sr) {
      mic = h('button', { class: 'btn big', onclick: async () => {
        if (mic.disabled) return;
        mic.disabled = true;
        mic.textContent = '👂 聽緊…講啦';
        const r = await listenOnce(line.jp);
        mic.disabled = false;
        mic.textContent = '🎤 再講一次';
        if (r.error) { sfx('bad'); out.textContent = SR_ERR[r.error] || '聽唔到聲，再試吓。'; return; }
        const pct = Math.round(r.score * 100);
        if (r.score >= SPEAK_PASS) {
          passed = true;
          sfx('good');
          out.textContent = `✅ 聽到：「${r.text}」（${pct}%）好自然！`;
          go.textContent = '下一步 ▶';
        } else {
          sfx('bad');
          out.textContent = `聽到：「${r.text}」（${pct}%）。撳 🔊 再聽，慢慢講多次。`;
        }
      } }, '🎤 撳一下開始講');
    }
    panel(
      h('div', { class: 'panel-title' }, h('div', { class: 'sub' }, task), jpLine(line.jp, { yue: line.yue, voice: 'cat', autoplay: true })),
      out,
      h('div', { class: 'hub-btns' }, mic, go),
    );
  });
}

// 每日一句：今日一句 + 全部清單；連續日數有獎
const dayNo = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
let dailyCat = 'n';
function dailyMenu() {
  busy = true;
  clearBubble();
  world.customerOut(true);
  world.catTo('street');
  world.setView('street');
  world.catFace('front');
  const s = S();
  const best = s.dailyStat || {};
  const pool = DAILY.filter((sc) => sc.cat === dailyCat);
  // 每個話題入面由易到難排（sort 穩定，同級保持原有次序）
  const list = pool.slice().sort((a, b) => a.lv - b.lv);
  const td = list.length ? list[dayNo() % list.length] : null;
  const doneToday = s.dailyDay === dayNo();
  const row = (sc, big) => {
    const b = best[sc.id] || 0;
    return h('button', { class: `btn ${big ? 'primary big' : ''}`, onclick: () => { sfx('tap'); dramaPlay(sc, { back: dailyMenu, today: sc === td, ch: 'daily' }); } },
      h('b', {}, sc.name), h('span', { class: 'jp-inline scene-intro', html: toHTML(sc.key) }),
      h('small', {}, `${sc.warn ? '只做聽力 · ' : ''}${b ? '★'.repeat(b) : '未學'}`));
  };
  const chip = (on, label, fn) => h('button', { class: `btn ${on ? 'primary' : ''}`, 'aria-pressed': String(on), onclick: () => { sfx('tap'); fn(); dailyMenu(); } }, label);
  const cleared = pool.filter((sc) => best[sc.id]).length;
  const start = (sc, isToday) => { sfx('tap'); dramaPlay(sc, { back: dailyMenu, today: isToday, ch: 'daily' }); };
  const extra = td && list.find((sc) => sc !== td && !best[sc.id]);
  learningPanel('每日一句', [
    h('section', { class: 'learning-feature' },
      h('div', { class: 'sub', role: 'status' }, `${doneToday ? '今日已完成' : '今日一句'}${s.dailyStreak ? ` · 連續 ${s.dailyStreak} 日` : ''}`),
      td ? h('h3', { class: 'jp-inline', html: toHTML(td.key) }) : h('h3', {}, '呢個話題未有句子'),
      td ? h('p', {}, td.name) : h('p', {}, '打開句庫篩選，揀其他話題。'),
      td ? h('div', { class: 'sub' }, `${DAILY_CAT[dailyCat]}${td.warn ? ' · 只做聽力' : ''}`) : null,
      td ? h('div', { class: 'sub' }, doneToday ? '獎勵已領取。可以重溫，或者再學一句。' : '完成今日一句，領取額外金幣。') : null),
    h('h3', { class: 'learning-section-title' }, '探索句庫'),
    learningFilters(`句庫篩選 · ${DAILY_CAT[dailyCat]}`, dailyFiltersOpen, (open) => { dailyFiltersOpen = open; },
      h('b', {}, '話題'),
      h('div', { class: 'chapter-tabs', 'aria-label': '話題' }, ...Object.entries(DAILY_CAT).map(([k, v]) => chip(dailyCat === k, v, () => { dailyCat = k; }))),
    ),
    ...unitFolds(list, (sc) => best[sc.id], (sc) => row(sc, false), { title: (i, g) => `${i + 1}. ${g[0].name}等情境` }),
    progLine(`${DAILY_CAT[dailyCat]} 已學`, cleared, pool.length, '句'),
  ], td ? h('div', { class: 'daily-actions' },
    h('button', { class: 'btn primary big', onclick: () => start(doneToday && extra ? extra : td, !(doneToday && extra)) },
      doneToday && extra ? h('span', {}, '再學一句', h('small', { class: 'scene-intro' }, extra.name)) : doneToday ? '重溫今日一句' : '開始學習'),
    doneToday && extra ? h('button', { class: 'btn', onclick: () => start(td, true) }, '重溫') : null)
    : h('span', {}, '揀其他話題，開始學習'));
}

// 句卡冊：玩過嘅場景嘅語言點，可重聽
function phraseBook() {
  const seen = S().dramaSeen || {};
  const all = [...DRAMA, ...DAILY];
  const scs = all.filter((sc) => seen[sc.id]);
  const card = (sc) => h('div', { class: 'phrase-card' },
    h('div', { class: 'sub' }, `${sc.icon} ${sc.name}（${REL[sc.rel]}）`),
    ...sc.points.map((p) => (/[ぁ-んァ-ン]/.test(p.jp) ? jpLine(p.jp, { yue: p.yue, voice: 'word' }) : h('div', {}, `💡 ${p.jp}：${p.yue}`))));
  // 按來源分組，每組再每 10 場一疊；全部收埋，打開先砌（幾百張卡都唔慢）
  const groups = [['🎭 對話劇場', DRAMA], ...Object.entries(DAILY_CAT).map(([k, v]) => [`📅 ${v}`, DAILY.filter((sc) => sc.cat === k)])];
  panel(
    h('div', { class: 'panel-title' }, '📒 句卡冊'),
    progLine('📈 收集咗', scs.length, all.length, '場'),
    scs.length ? null : h('div', { class: 'sub' }, '玩完一個場景，佢嘅語言點就會收入呢度。'),
    ...groups.map(([name, pool]) => {
      const got = pool.filter((sc) => seen[sc.id]);
      return got.length ? fold(foldHead(name, got.length, pool.length, '場'), false,
        () => h('div', { class: 'fold-body' }, ...unitFolds(got, () => true, card, { unit: '場', autoOpen: false, title: (i, g) => `第 ${i * 10 + 1}–${i * 10 + g.length} 張` }))) : null;
    }),
    h('button', { class: 'btn', onclick: () => { sfx('tap'); dramaMenu(); } }, '⬅️ 返去'),
  ).classList.add('hub-panel');
}

// 共用：揀答案直至啱。options[i] = { el, why }
function dramaAsk(lv, onWrong) {
  return async ({ title, options, correct }) => {
    let first = true;
    for (;;) {
      const a = await choose(options.map((o, value) => ({ el: o.el, value })), { title });
      if (a.value === correct) { trackLv(lv, first); sfx('good'); return first; }
      if (first) onWrong();
      first = false;
      trackLv(lv, false);
      sfx('bad');
      hint(options[a.value].why || '再諗吓！', 3600);
    }
  };
}
const dramaOpt = (jp, yue, showYue) => h('div', { class: 'dish-opt' },
  jp ? h('span', { class: 'jp-inline', html: toHTML(jp) }) : null,
  showYue && yue ? h('small', {}, yue) : (!jp && yue ? h('small', {}, yue) : null),
  jp ? spkOpt(jp, 'cat') : null);

async function dramaEnd({ title, mistakes, lv, unit, extra = [], bonus = 0, back = dramaMenu, ch = 'drama' }) {
  const s = S();
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round(80 * (0.6 + 0.4 * (stars / 3))) + bonus;
  const xp = 12 + stars * 5;
  // 每日一句唔計入章節進度，自己記最高星數
  if (ch === 'daily') { const b = (s.dailyStat ||= {}); b[unit] = Math.max(b[unit] || 0, stars); } else markU(ch, lv, unit, mistakes === 0);
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  await next('返去 ▶', h('div', {},
    h('div', { class: 'panel-title' }, title),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
    ...extra));
  milestones();
  back();
}

async function dramaPlay(sc, { back = dramaMenu, today = false, ch = 'drama' } = {}) {
  busy = true;
  const s = S();
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  let voice = NPC[sc.rel];
  let curRel = sc.rel;
  let mistakes = 0;
  let spoken = 0;
  let aff = 0; // CH 好感分
  let ending = null;
  const ask = dramaAsk(sc.lv, () => mistakes++);
  const card = (line, caption) => h('div', { class: 'panel-title' },
    // 唔自動播：泡泡啱啱講完，想再聽撳 🔊
    line ? jpLine(line.jp, { yue: line.yue, voice, hidden: listen }) : null,
    caption ? h('div', { class: 'sub' }, caption) : null);
  const say2 = async (who, line) => {
    hidePanel(); // 收起上一個面板，唔好遮住對白泡泡
    await bubble(world, who, line.jp, line.yue, who === 'cat' ? 'cat' : voice, who === 'cat' ? {} : { hidden: listen });
    clearBubble(who);
  };

  hidePanel();
  clearBubble();
  world.catTo('street');
  world.setView('street', true);
  world.customerOut(true);
  await world.streetPersonIn(npcLook(sc.rel));
  // 每日一句：開場先教主角句（用 SAY 句，冇就用 key）
  const keyLine = sc.key ? (sc.turns.find((t) => t.t === 'say')?.line || { jp: sc.key, yue: sc.points[0]?.yue || '' }) : null;
  await next('開始 ▶', h('div', { class: 'panel-title' }, `${sc.icon} ${sc.name}`,
    keyLine ? h('div', { class: 'sub' }, '📅 今日學呢句（撳 🔊 再聽）') : null,
    keyLine ? jpLine(keyLine.jp, { yue: keyLine.yue, voice: sc.turns.some((t) => t.t === 'say') ? 'cat' : 'word', autoplay: true }) : null,
    h('div', { class: 'sub' }, `${REL[sc.rel]} · ${sc.intro}`), sc.warn ? h('div', { class: 'sub' }, `⚠️ ${sc.warn}`) : null,
    // 溫習：今場會用到嘅每日一句
    sc.review ? h('div', { class: 'sub' }, '♻️ 今場會用到（每日一句）') : null,
    ...(sc.review || []).map((id) => DAILY.find((d) => d.id === id)).filter(Boolean)
      .map((d) => jpLine(d.key, { yue: d.name, voice: 'cat' }))));

  for (const t of sc.turns) {
    // 對方講嘢嘅 turn：換咗人就換角色同把聲
    const rel = t.rel || sc.rel;
    if (['f', 'ls', 'ch', 'end'].includes(t.t) && rel !== curRel) {
      hidePanel();
      clearBubble();
      await world.streetPersonIn(npcLook(rel));
      curRel = rel;
      voice = NPC[rel];
    }
    if (t.t === 'note') {
      await next('▶', h('div', { class: 'panel-title' }, h('div', { class: 'sub' }, t.text)));
    } else if (t.t === 'ch') {
      // 冇對錯，揀法影響結局
      const idx = shuffle(t.opts.map((_, i) => i));
      const a = await choose(idx.map((i) => ({ el: dramaOpt(t.opts[i].jp, t.opts[i].yue, showYue), value: i })),
        { title: card(null, `🔀 ${t.task}`) });
      const o = t.opts[a.value];
      aff += o.pt;
      sfx(o.pt > 0 ? 'good' : 'tap');
      await say2('cat', o);
      if (o.re) await say2('cust', o.re);
    } else if (t.t === 'end') {
      const kind = aff - mistakes >= t.th ? 'good' : 'bad';
      const e = t[kind];
      for (const l of e.lines) await say2('cust', l);
      const got = ((s.dramaEnds ||= {})[sc.id] ||= {});
      got[kind] = 1;
      ending = h('div', { class: 'sub' }, `🔀 結局：${e.name}（已解鎖 ${Object.keys(got).length}/2${kind === 'bad' ? '，揀法唔同會有另一個結局' : ''}）`);
    } else if (t.t === 'f') {
      await say2('cust', t.line);
    } else if (t.t === 'me') {
      const items = [t.ok, ...t.bad];
      const idx = shuffle(items.map((_, i) => i));
      await ask({
        title: card(null, `🗣️ ${t.task}`),
        options: idx.map((i) => ({ el: dramaOpt(items[i].jp, items[i].yue, showYue), why: items[i].why || '' })),
        correct: idx.indexOf(0),
      });
      await say2('cat', t.ok);
    } else if (t.t === 'say') {
      if (await speakStep(t.line, t.task)) spoken++;
    } else {
      await say2('cust', t.line);
      const items = [t.answer, ...t.wrong];
      const idx = shuffle(items.map((_, i) => i));
      await ask({
        title: card(t.line, t.task),
        options: idx.map((i) => ({ el: dramaOpt(null, items[i], true), why: i === 0 ? '' : '唔啱，再聽一次（撳句子可重聽）' })),
        correct: idx.indexOf(0),
      });
      if (t.note) await next('明白 ▶', h('div', { class: 'panel-title' }, `🔍 ${t.note}`));
    }
  }
  // 冇 SAY 嘅場景：完場可以揀練講自己嘅對白
  const mine = sc.turns.filter((t) => t.t === 'me').map((t) => t.ok);
  if (!sc.warn && !sc.turns.some((t) => t.t === 'say') && mine.length) {
    const a = await choose([{ label: `🎤 練講你嘅對白（${mine.length} 句）`, value: 1 }, { label: '跳過 ▶', value: 0 }],
      { title: h('div', { class: 'panel-title' }, '要唔要開口講一次？') });
    if (a.value) for (const l of mine) if (await speakStep(l, '🎤 跟住講你啱啱揀嘅句')) spoken++;
  }
  world.cat.happy();
  world.customerOut(true);
  (s.dramaSeen ||= {})[sc.id] = 1;
  // 每日一句：今日第一次完成先有獎，連續日數 +1
  let bonus = 0;
  if (today && s.dailyDay !== dayNo()) {
    s.dailyStreak = s.dailyDay === dayNo() - 1 ? (s.dailyStreak || 0) + 1 : 1;
    s.dailyDay = dayNo();
    bonus = 30 + 10 * Math.min(s.dailyStreak, 7);
  }
  save();
  await dramaEnd({
    title: `${sc.icon} ${sc.name} 完成`, mistakes, lv: sc.lv, unit: sc.id, bonus, back, ch,
    extra: [
      ending,
      bonus ? h('div', { class: 'sub' }, `📅 今日一句 +${bonus} 🪙（連續 ${s.dailyStreak} 日 🔥）`) : null,
      spoken ? h('div', { class: 'sub' }, `🎤 開口講咗 ${spoken} 句`) : null,
h('div', { class: 'sub' }, '📝 今日語言點（已收入句卡冊）'),
      ...sc.points.map((p) => h('div', {}, h('span', { class: 'jp-inline', html: toHTML(p.jp) }), '　', p.yue))],
  });
}

// 講乜人：6 題，同一意思揀啱對象嘅講法
async function registerGame() {
  busy = true;
  hidePanel();
  clearBubble();
  world.customerOut(true);
  let mistakes = 0;
  const ask = dramaAsk(2, () => mistakes++);
  const qs = shuffle(REGISTER).slice(0, 6);
  for (let i = 0; i < qs.length; i++) {
    const r = qs[i];
    const who = REG_REL[Math.floor(Math.random() * REG_REL.length)];
    const idx = shuffle(REG_REL.slice());
    await ask({
      title: h('div', { class: 'panel-title' }, `🎯 ${i + 1} / ${qs.length}　對${REG_LABEL[who]}講：「${r.yue}」`),
      // 選項唔顯示對象標籤（會穿煲），錯先講係對邊個講
      options: idx.map((k) => ({ el: dramaOpt(r[k], '', false), why: `呢句係對${REG_LABEL[k]}講嘅講法` })),
      correct: idx.indexOf(who),
    });
    say(r[who], 'cat');
  }
  await dramaEnd({ title: '🎯 講乜人 完成', mistakes, lv: 2, unit: 'register' });
}

async function streetServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  const lvA = drawLv();
  const staffLook = { id: 'kuma', color: 0x8a5a3b, ear: 'round' };
  const d = pick(ST_DESTS);
  const otherD = shuffle(ST_DESTS.filter((x) => x !== d)).slice(0, 2);
  let mistakes = 0;

  const opt = (jp, yue, voice = 'cat') => h('div', { class: 'dish-opt' },
    jp ? h('span', { class: 'jp-inline', html: toHTML(jp) }) : null,
    showYue && yue ? h('small', {}, yue) : (!jp && yue ? h('small', {}, yue) : null),
    jp ? spkOpt(jp, voice) : null);
  const card = (line, caption) => h('div', { class: 'panel-title' },
    line ? jpLine(line.jp, { yue: line.yue, voice: 'kuma', hidden: listen, autoplay: true }) : null,
    caption ? h('div', { class: 'sub' }, caption) : null);
  const ask = async ({ line = null, options, correct, caption, word, unit }) => {
    let first = true;
    if (word) srsSeen(word);
    for (;;) {
      const a = await choose(options.map((o, value) => ({ el: o.el, value })), { title: card(line, caption) });
      if (a.value === correct) {
        if (word) srsAnswer(word, first);
        trackLv(lvA, first);
        if (unit) markU('street', lvA, unit, first);
        sfx('good');
        return;
      }
      if (first) mistakes++;
      first = false;
      if (word) srsAnswer(word, false);
      trackLv(lvA, false);
      sfx('bad');
      hint(options[a.value].why || '再諗吓！', 3600);
    }
  };
  const mix = (items) => {
    const idx = shuffle(items.map((_, i) => i));
    return { options: idx.map((i) => ({ el: opt(items[i].jp, items[i].yue), why: items[i].why || '' })), correct: idx.indexOf(0) };
  };
  // 聽日文，揀中文意思：items[0] = 啱
  const listenPick = (line, caption, texts, word, unit) => {
    const idx = shuffle(texts.map((_, i) => i));
    return ask({
      line, caption, word, unit,
      options: idx.map((i) => ({ el: opt(null, texts[i]), why: i === 0 ? '' : '唔啱，再聽一次（撳句子可重聽）' })),
      correct: idx.indexOf(0),
    });
  };
  const say2 = async (who, line) => {
    await bubble(world, who, line.jp, line.yue, who === 'cat' ? 'cat' : 'kuma', who === 'cat' ? {} : { hidden: listen });
    clearBubble(who);
  };

  // 1. 入場
  hidePanel();
  clearBubble();
  world.catTo('street');
  world.setView('street', true);
  world.customerOut(true);
  sfx('door');
  await world.streetPersonIn(staffLook);
  await next('出發 ▶', h('div', { class: 'panel-title' }, `🗺️ 你想去${d.yue}，向路人問路。`));
  await say2('cat', ST_SORRY);
  await say2('cust', ST_GREET);

  // 2. 問路
  const wrongAsk = otherD.map((o) => ({ ...askLine(lvA, o), why: `地方錯：你想去${d.yue}` }));
  await ask({ caption: `🗣️ 你想去${d.yue}`, word: 'st_doko', unit: 'ask', ...mix([askLine(lvA, d), ...wrongAsk]) });
  await say2('cat', askLine(lvA, d));

  // 3. 聽指示，揀意思
  if (lvA === 0) {
    const dir = pick(['go', 0, 1]);
    const all = ['go', 0, 1];
    const texts = [reply0(dir).yue, ...all.filter((x) => x !== dir).map((x) => reply0(x).yue)];
    await say2('cust', reply0(dir));
    await listenPick(reply0(dir), '👂 路人點樣指路？', texts, dir === 'go' ? 'st_massugu' : dir === 0 ? 'st_migi' : 'st_hidari', 'dir');
  } else if (lvA === 1) {
    const n = 1 + Math.floor(Math.random() * 3), dir = Math.floor(Math.random() * 2);
    const n2 = n === 3 ? 1 : n + 1;
    const r = reply1(n, dir);
    await say2('cust', r);
    await listenPick(r, '👂 路人點樣指路？', [r.yue, reply1(n, 1 - dir).yue, reply1(n2, dir).yue], 'st_kado', 'route');
  } else if (lvA === 2) {
    const lm = Math.floor(Math.random() * 3), rel = Math.floor(Math.random() * 3), mn = Math.floor(Math.random() * 2);
    const r = reply2(lm, rel, mn);
    await say2('cust', r);
    await listenPick(r, '👂 喺邊度？行幾耐？', [r.yue, reply2(lm, (rel + 1) % 3, mn).yue, reply2(lm, rel, 1 - mn).yue], 'st_tonari', 'where');
  } else {
    const n = 1 + Math.floor(Math.random() * 3), dir = Math.floor(Math.random() * 2);
    const r = reply3(n, dir);
    await say2('cust', r);
    await listenPick(r, '👂 路人點樣指路？', [r.yue, reply3(n, 1 - dir).yue, reply3(n === 3 ? 1 : n + 1, dir).yue], 'st_shingo', 'route');
    await say2('cust', GUIDE.ask);
    await listenPick(GUIDE.ask, '👂 路人真正想講咩？', [GUIDE.answer, ...GUIDE.wrong], 'st_annai', 'guide');
    await ask({ caption: GUIDE.then.task, ...mix([GUIDE.then.ok, ...GUIDE.then.bad]) });
    await say2('cat', GUIDE.then.ok);
  }

  // 4. 道別
  await say2('cat', ST_BYE[lvA]);
  await ask({ caption: '👋 多謝路人，講咩？', unit: 'bye', ...mix([ST_BYE[lvA], ...shuffle(ST_BYE_WRONG).slice(0, 2)]) });
  await say2('cust', ST_BYE_STAFF[lvA]);
  world.cat.happy();
  world.customerOut(true);

  // 5. 結算
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round(90 * (0.6 + 0.4 * (stars / 3)));
  const xp = 12 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `🗺️ 去${d.yue}`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}

async function pharmacyServe({ index }) {
  const s = S();
  const lv0 = s.level;
  const listen = s.settings.subs === 'tap';
  const showYue = s.settings.yue !== false;
  const lvA = drawLv();
  const staffLook = { id: 'usagi', color: 0xfaf6f0, ear: 'long' };
  const sym = pick(SYMPTOMS);
  const others = shuffle(SYMPTOMS.filter((x) => x !== sym)).slice(0, 2);
  const tm = pick(TIMES);
  const timeOthers = shuffle(TIMES.filter((x) => x !== tm)).slice(0, 2);
  let mistakes = 0;

  const opt = (jp, yue, voice = 'cat') => h('div', { class: 'dish-opt' },
    jp ? h('span', { class: 'jp-inline', html: toHTML(jp) }) : null,
    showYue && yue ? h('small', {}, yue) : (!jp && yue ? h('small', {}, yue) : null),
    jp ? spkOpt(jp, voice) : null);
  const card = (line, caption) => h('div', { class: 'panel-title' },
    line ? jpLine(line.jp, { yue: line.yue, voice: 'usagi', hidden: listen, autoplay: true }) : null,
    caption ? h('div', { class: 'sub' }, caption) : null);
  // options[i] = { el, why }；correct = index
  const ask = async ({ line = null, options, correct, caption, word, unit }) => {
    let first = true;
    if (word) srsSeen(word);
    for (;;) {
      const a = await choose(options.map((o, value) => ({ el: o.el, value })), { title: card(line, caption) });
      if (a.value === correct) {
        if (word) srsAnswer(word, first);
        trackLv(lvA, first);
        if (unit) markU('pharmacy', lvA, unit, first);
        sfx('good');
        return;
      }
      if (first) mistakes++;
      first = false;
      if (word) srsAnswer(word, false);
      trackLv(lvA, false);
      sfx('bad');
      hint(options[a.value].why || '再諗吓！', 3600);
    }
  };
  // items[0] = 啱
  const mix = (items) => {
    const idx = shuffle(items.map((_, i) => i));
    return { options: idx.map((i) => ({ el: opt(items[i].jp, items[i].yue), why: items[i].why || '' })), correct: idx.indexOf(0) };
  };
  const say2 = async (who, line) => {
    await bubble(world, who, line.jp, line.yue, who === 'cat' ? 'cat' : 'usagi', who === 'cat' ? {} : { hidden: listen });
    clearBubble(who);
  };

  // 1. 入門
  hidePanel();
  clearBubble();
  world.catTo('pharm');
  world.setView('pharm', true);
  world.customerOut(true);
  sfx('door');
  await world.pharmStaffIn(staffLook);
  await next('入去 ▶', h('div', { class: 'panel-title' }, `💊 ${sym.task}，去藥房。`));
  await say2('cust', PH_GREET);

  // 2. 講症狀
  const wrongSym = others.map((o) => ({ ...o.lines[lvA], why: `症狀錯：你嘅任務係「${sym.name}」` }));
  await ask({ caption: `🤒 ${sym.task}`, word: 'ph_' + sym.id, unit: 'sym:' + sym.id, ...mix([sym.lines[lvA], ...wrongSym]) });
  await say2('cat', sym.lines[lvA]);

  // 3. 幾時開始
  await say2('cust', PH_WHEN);
  const wl = WHEN_LINES[lvA];
  await ask({
    line: PH_WHEN, caption: `📅 你由${tm.yue}開始唔舒服`, word: 'ph_itsukara', unit: 'when',
    ...mix([wl(tm), ...timeOthers.map((t) => ({ ...wl(t), why: `時間錯：你係由${tm.yue}開始` }))]),
  });
  await say2('cat', wl(tm));

  // 4. 藥物敏感（N4 起）
  if (lvA >= 2) {
    const al = Math.random() < 0.5 ? ALLERGY.none : ALLERGY.some;
    await say2('cust', PH_ALLERGY);
    await ask({ line: PH_ALLERGY, caption: `⚠️ ${al.task}`, word: 'ph_arerugi', unit: 'allergy', ...mix([al.ok, al.bad]) });
    await say2('cat', al.ok);
  }

  // 5. 服藥指示（N5 起）：聽，揀中文意思
  await say2('cust', PH_HAND);
  if (lvA >= 1) {
    const dose = pick(DOSES);
    const items = [dose, ...shuffle(DOSES.filter((d) => d !== dose)).slice(0, 2)];
    const idx = shuffle(items.map((_, i) => i));
    await ask({
      line: dose, caption: '👂 藥劑師點樣叫你食藥？', word: 'ph_nomu', unit: 'dose',
      options: idx.map((i) => ({ el: opt(null, items[i].yue), why: i === 0 ? '' : '唔啱，再聽一次（撳句子可重聽）' })),
      correct: idx.indexOf(0),
    });
  }

  // 5b. 每級獨有嘅題（N1 有多題）
  for (const ex of [].concat(PH_EXTRA[lvA] || [])) {
    await say2('cust', ex.ask);
    if (ex.ok) {
      await ask({ line: ex.ask, caption: `🗣️ ${ex.task}`, word: ex.word, unit: ex.unit, ...mix([ex.ok, ...ex.bad]) });
      await say2('cat', ex.ok);
    } else {
      const items = [ex.answer, ...ex.wrong];
      const idx = shuffle(items.map((_, i) => i));
      await ask({
        line: ex.ask, caption: ex.task, word: ex.word, unit: ex.unit,
        options: idx.map((i) => ({ el: opt(null, items[i]), why: i === 0 ? '' : '唔啱，再聽一次（撳句子可重聽）' })),
        correct: idx.indexOf(0),
      });
      if (ex.then) {
        await ask({ caption: ex.then.task, ...mix([ex.then.ok, ...ex.then.bad]) });
        await say2('cat', ex.then.ok);
      }
    }
  }

  // 6. 道別
  await say2('cust', PH_BYE_STAFF);
  const bye = PH_BYE[lvA];
  await ask({ caption: '👋 離開前講咩？', word: 'ph_daijini', unit: 'bye', ...mix([bye, ...shuffle(PH_BYE_WRONG).slice(0, 2)]) });
  await say2('cat', bye);
  world.cat.happy();
  world.customerOut(true);

  // 7. 結算
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const coins = Math.round(90 * (0.6 + 0.4 * (stars / 3)));
  const xp = 12 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `💊 ${sym.name} · 由${tm.yue}開始`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`),
  );
  [1, 2, 3].forEach((k) => k <= stars && setTimeout(() => sfx('good'), k * 180));
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  milestones();
  return { coins, stars, levelUps: S().level - lv0 };
}


async function serveCustomer({ index, tutorial, forceDish, plan }) {
  const s = S();
  const lv0 = s.level;
  const cust = s.chapter === 'cafe' ? CUSTOMERS[index % REGULARS.length] : pickCustomer(index, tutorial);
  const unlocked = menuRecipes();
  // 揀菜：新解鎖優先，其次 SRS 要溫嘅
  const dishId = forceDish || srsPick(unlocked.map((r) => r.dish));
  let rec = unlocked.find((r) => r.dish === dishId) || unlocked[0];
  if (import.meta.env.DEV) window.__order = rec.dish; // 測試用
  // 計劃減少：客人一定先叫 2–3 份，之後先減一份
  const planned = s.chapter === 'izakaya' && !tutorial ? plan?.[index] : null;
  const sushiK = s.chapter === 'sushi' && !tutorial ? sushiKind(rec, plan?.[index]) : null;
  const ramenK = s.chapter === 'ramen' && !tutorial ? ramenKind(rec, plan?.[index]) : null;
  const NM = numsFor(rec.dish);
  const withNum = planned === 'less' || sushiK === 'kan' || (s.level >= 2 && !tutorial && rec.chapter !== 'dark' && Math.random() < 0.45);
  let qty = planned === 'less' ? 2 + Math.floor(Math.random() * 2) : withNum ? 1 + Math.floor(Math.random() * 3) : 1;
  // 按日文程度抽句；高級句用共用聲線（慳音檔）
  const isDark = rec.chapter === 'dark';
  if (isDark) { qty = 1; DARK.persona = pickPersona(); DARK.custId = cust.id; }
  const tpl = pickByLevel(isDark ? DARK_ORDER_TEMPLATES : withNum ? ORDER_NUM_TEMPLATES : ORDER_TEMPLATES);
  // 暗黑食堂：客人照浮誇菜單名落單（自然日文）
  const line = isDark
    ? { jp: tpl.jp.replace('{dish}', rec.jp), yue: tpl.yue.replace('{dishYue}', rec.yue) }
    : fill(tpl, withNum ? { dish: rec.dish, num: NM[qty - 1] } : { dish: rec.dish });
  const voice = lineVoice(cust.id, tpl);
  preload(line.jp, voice);
  // 食後反應句預先揀好兼預載：手機網慢都唔使上菜先下載
  const reacts = { 3: pickByLevel(REACT.great), 2: pickByLevel(REACT.ok), 1: pickByLevel(REACT.meh) };
  for (const r of Object.values(reacts)) preload(r.jp, lineVoice(cust.id, r));

  // 入門
  hidePanel();
  world.setView('kitchen');
  world.catFace('customer');
  sfx('door');
  await world.customerIn(cust);
  if (cust.rare) { sfx('rare'); toast(`✨ 稀有客人：${cust.yue}！ 貼士 x${cust.tip}`, 2600, 'rare'); }
  if (isDark) { introPersona(DARK.persona); renderDarkbar(); }
  world.cat.play('wave', 0.8);
  await bubble(world, 'cat', CAT.irasshai.jp, CAT.irasshai.yue, 'cat');
  clearBubble('cat');

  // 落單
  const listen = s.settings.subs === 'tap';
  let tries = 0;
  let orderOk = false;
  if (tutorial && index === 0) hint('客人講緊要咩，聽完揀啱嘅菜！', 3500);
  const ticketMode = s.chapter === 'ramen' && !tutorial;
  while (!orderOk) {
    bubble(world, 'cust', line.jp, line.yue, voice, { hidden: listen });
    const opts = shuffle(unlocked).map((r) => {
      const v = vocab(r.dish);
      return { value: r.dish, el: h('div', { class: ticketMode ? 'dish-opt ticket-btn' : 'dish-opt' }, h('span', { class: 'emo' }, vocabArt(v)), h('span', { class: 'jp-inline', html: toHTML(v.jp) }), ticketMode ? h('span', { class: 'ticket-price' }, `${r.price}円`) : null) };
    });
    const pickDish = await choose(opts, { title: h('div', { class: 'panel-title' }, ticketMode ? '🎫 食券機：幫客人買券' : '🐾 客人要咩？'), cols: Math.min(opts.length, 2) });
    if (ticketMode) sfx('coin');
    let pickQty = 1;
    if (pickDish.value === rec.dish && withNum) {
      const qo = await choose(NM.map((id, i) => ({ value: i + 1, el: h('div', { class: 'dish-opt' }, h('span', { class: 'emo' }, vocabArt(vocab(id))), h('span', { class: 'jp-inline', html: toHTML(vocab(id).jp) })) })), { title: h('div', { class: 'panel-title' }, '要幾多個？'), cols: 3 });
      pickQty = qo.value;
    }
    if (pickDish.value === rec.dish && pickQty === qty) {
      orderOk = true;
      sfx('good');
      srsAnswer(rec.dish, tries === 0);
      if (withNum) srsAnswer(NM[qty - 1], tries === 0);
      if (tpl.key && !isDark) { srsSeen(tpl.key); srsAnswer(tpl.key, tries === 0); poolCheck('resto', tpl.lv ?? 0); }
    } else {
      tries++;
      sfx('bad');
      world.cat.play('sad', 0.6);
      const wr = pickByLevel(REACT.wrong);
      await bubble(world, 'cust', wr.jp, wr.yue, lineVoice(cust.id, wr));
      hint(`佢講：「${line.yue}」— 再聽一次！`, 3500);
      srsAnswer(rec.dish, false);
      await wait(600);
    }
  }
  srsSeen(rec.dish);
  clearBubble('cust');

  const askChapter = async (jp, yue, options, correct, word, title, vo = voice) => {
    let first = true;
    srsSeen(word);
    for (;;) {
      bubble(world, 'cust', jp, yue, vo, { hidden: listen });
      const a = await choose(shuffle(options.map((label, value) => ({ label, value }))), { title: h('div', { class: 'panel-title' }, title) });
      if (a.value === correct) { srsAnswer(word, first); sfx('good'); clearBubble('cust'); return; }
      first = false; srsAnswer(word, false); sfx('bad'); hint(yue, 3000);
    }
  };
  // 落單細節：食堂章節，Lv1/2 約 30% 客人補一句（大盛り／走蔥…）
  if (S().chapter === 'home' && !tutorial && jpLevel() > 0 && Math.random() < 0.3) {
    const pd = pickDetail(rec.dish);
    if (pd) {
      const dv = lineVoice(cust.id, pd.d);
      srsSeen(pd.d.key);
      let first = true;
      for (;;) {
        bubble(world, 'cust', pd.d.jp, pd.d.yue, dv, { hidden: listen });
        const a = await choose(shuffle([pd.d.label, ...pd.wrongs].map((label, value) => ({ label, value: value === 0 ? 0 : -1 }))), { title: h('div', { class: 'panel-title' }, '客人再補一句？') });
        if (a.value === 0) { srsAnswer(pd.d.key, first); trackLv(pd.d.lv, first); sfx('good'); clearBubble('cust'); break; }
        first = false; srsAnswer(pd.d.key, false); sfx('bad'); hint(pd.d.yue, 3000);
      }
    }
  }
  // 客人取消：唔煮、唔收錢，客人離場
  const cancelOrder = () => {
    clearBubble('cust');
    world.cat.play('sad', 0.6);
    toast('客人取消咗訂單，今次冇收入');
    world.customerOut();
    return { coins: 0, stars: 0, levelUps: 0, cancelled: true };
  };
  const rnd = (a) => a[Math.floor(Math.random() * a.length)];
  const yueOf = (r) => vocab(r.dish).yue.replace(/（.*?）/g, '');
  if (S().chapter === 'izakaya' && (planned ? !['replace', 'decline'].includes(planned) : index % 2 === 0)) {
    // 落單後、未煮前改單：加單 / 減少 / 換菜 / 取消（按情況抽，答案位置隨機）
    const other = unlocked.filter((r) => r.id !== rec.id);
    const kinds = [['add', 3], ['cancel', 1], ...(qty >= 2 ? [['less', 2]] : []), ...(other.length ? [['swap', 3]] : [])];
    let roll = Math.random() * kinds.reduce((a, [, w]) => a + w, 0);
    let kind = planned || (kinds.find(([, w]) => (roll -= w) <= 0) || kinds[0])[0];
    if ((kind === 'swap' && !other.length) || (kind === 'less' && qty < 2)) kind = 'add';
    const swapLabel = (r) => `改做${yueOf(r)}`;
    const sw = kind === 'swap' ? rnd(other) : null;
    const T = { add: TSUIKA, less: HERASU, swap: KAERU, cancel: KYANSERU }[kind];
    const word = { add: 'tsuika', less: 'herasu', swap: 'kaeru', cancel: 'kyanseru' }[kind];
    const right = { add: '加一份', less: '減一份', cancel: '取消訂單', swap: sw && swapLabel(sw) }[kind];
    const tpl2 = pickByLevel(T);
    const ln = sw ? fill(tpl2, { dish: sw.dish }) : tpl2;
    const decoyPool = ['加一份', '減一份', '取消訂單'];
    const otherSwap = other.filter((r) => r !== sw);
    if (otherSwap.length) decoyPool.push(swapLabel(rnd(otherSwap)));
    const decoys = shuffle(decoyPool.filter((l) => l !== right)).slice(0, 2);
    await askChapter(ln.jp, ln.yue, [right, ...decoys], 0, word, '客人想改張單？', lineVoice(cust.id, tpl2));
    if (kind === 'add') { qty++; toast(`加單成功：共 ${qty} 份`); }
    else if (kind === 'less') { qty--; toast(`減咗一份：共 ${qty} 份`); }
    else if (kind === 'swap') { rec = sw; srsSeen(rec.dish); srsAnswer(rec.dish, true); toast(`改做 ${yueOf(rec)}`); }
    else return cancelOrder();
  } else if (S().chapter === 'izakaya') {
    const replacement = unlocked.find(r => r.id !== rec.id);
    const so = fill(pickByLevel(SOLDOUT), { dish: rec.dish });
    await bubble(world, 'cat', so.jp, so.yue, 'cat');
    clearBubble('cat');
    if (!replacement || (planned ? planned === 'decline' : Math.random() < 0.25)) {
      // 客人唔要替代品：「取消所有訂單」先係答案
      const yl = pickByLevel(YAMERU);
      const alt = replacement ? [vocab(replacement.dish).yue] : [];
      await askChapter(yl.jp, yl.yue, ['取消所有訂單', vocab(rec.dish).yue, ...alt].slice(0, 3), 0, 'yameru', '沽清後，客人點樣話？', lineVoice(cust.id, yl));
      return cancelOrder();
    }
    const d = vocab(replacement.dish);
    const rp = pickByLevel(REPLACE);
    const rl = fill(rp, { dish: replacement.dish });
    await askChapter(rl.jp, rl.yue, [d.yue, vocab(rec.dish).yue, '取消所有訂單'], 0, 'urikire', '沽清後，客人改要邊款？', lineVoice(cust.id, rp));
    rec = replacement;
    srsSeen(rec.dish); srsAnswer(rec.dish, true);
  }
  let preference = null, servedRegular = null;
  if (S().chapter === 'cafe' && ['instant_coffee', 'black_tea', 'matcha_latte'].includes(rec.id)) {
    const regular = REGULARS[index % REGULARS.length];
    const seen = S().regularVisits[regular.id] || 0;
    preference = regular.request;
    servedRegular = regular.id;
    rec = { ...rec, steps: [...rec.steps, {
      type: 'request', request: preference, jp: regular.jp, yue: regular.yue, voice: cust.id,
      title: `${regular.name} · ${seen ? `第 ${seen + 1} 次到訪` : '初次到訪'}：點樣調製？`,
    }] };
  }

  // 壽司店：山葵要求（煮完前再問一次點整）
  if (sushiK === 'wasabi') {
    const wr = WASABI_REQUESTS[Math.floor(Math.random() * WASABI_REQUESTS.length)];
    preference = wr.id;
    rec = { ...rec, steps: [...rec.steps, {
      type: 'request', request: wr.id, jp: wr.jp, yue: wr.yue, voice: cust.id,
      title: '客人對山葵有要求，點整？', retry: '再聽一次：留意客人想要幾多山葵。',
      actions: WASABI_REQUESTS.map((x) => ({ id: x.id, icon: x.icon, label: x.label, detail: x.detail })),
    }] };
  }

  // 拉麵店：買券後，客人再講麵硬度／湯濃淡
  if (ramenK) {
    const list = RAMEN_REQUESTS[ramenK];
    const rr = list[Math.floor(Math.random() * list.length)];
    preference = rr.id;
    toast(`🎫 收到食券：${vocab(rec.dish).yue}`);
    rec = { ...rec, steps: [...rec.steps, {
      type: 'request', request: rr.id, jp: rr.jp, yue: rr.yue, voice: cust.id,
      title: ramenK === 'noodle' ? '客人對麵條有要求，點整？' : '客人對湯底有要求，點整？',
      retry: '再聽一次：留意客人講麵硬度，定係湯濃淡。',
      actions: list.map((x) => ({ id: x.id, icon: x.icon, label: x.label, detail: x.detail })),
    }] };
  }

  // 第一次煮呢個菜：睇食譜
  if (!s.cooked[rec.id]) {
    await new Promise((res) => recipeCard(rec, { onStart: res }));
  }

  // 煮
  const score = await cook(rec);
  let darkResult = null;
  if (rec.chapter === 'dark') {
    world.setView('serve');
    darkResult = darkReport(rec, score, await dressDarkDish(rec, world));
  }
  if (preference === 'iced') world.dish?.add(makeIce());
  if (servedRegular) s.regularVisits[servedRegular] = (s.regularVisits[servedRegular] || 0) + 1;
  const stars = score >= 0.9 ? 3 : score >= 0.65 ? 2 : 1;
  s.stars[rec.id] = Math.max(s.stars[rec.id] || 0, stars);
  s.cooked[rec.id] = (s.cooked[rec.id] || 0) + 1;

  // 上菜
  world.setView('serve');
  world.slideDishToCustomer();
  await wait(500);
  // 壽司店：上菜後客人問豉油沾法
  if (sushiK === 'soy') {
    clearBubble('cust');
    await askChapter(SOY_ASK.jp, SOY_ASK.yue, SOY_OPTIONS, 0, 'shoyu_tsukeru', '壽司應該點沾豉油？');
  }
  const react = reacts[stars];
  const reactVoice = lineVoice(cust.id, react);
  world.customerJump();
  // 客人食後反應：要等講完先走下一步，唔好畀後面句子 cut 咗
  // 6 秒上限喺音檔載完先開始計（下載時間唔計），防音檔 hang 住
  const reactLoaded = preload(react.jp, reactVoice);
  const reactDone = Promise.race([
    bubble(world, 'cust', react.jp, react.yue, reactVoice), // 反應唔考，唔遮字幕
    reactLoaded.then(() => wait(6000), () => wait(6000)),
  ]);
  const isSpecial = special() === rec.id;
  let lookMult = 1;
  if (darkResult) {
    lookMult = darkResult.lookMult;
    await reactDone;
    await wait(400);
    clearBubble('cust');
    await interrogate(world, cust, darkResult, listen);
  }
  // 暗黑：客類型畀錢倍數 × 擺盤 × 店評（⭐3 ≈ x1.04）
  const darkPay = darkResult ? DARK.persona.pay * lookMult * (0.8 + (s.darkRating ?? 3) * 0.08) : 1;
  let coins = Math.round(rec.price * qty * (0.6 + 0.4 * score) * cust.tip * (isSpecial ? 2 : 1) * darkPay / 10);
  if (listen && tries === 0) coins *= 2;
  if (darkResult) coins = settleDark(darkResult, coins);
  const darkTag = darkResult ? { none: `💰 +${darkResult.bonus} 入彩池`, believe: `💰 +${darkResult.bonus} 入彩池`, honest: '老實 x0.8', expose: '被揭穿', plain: '如實介紹' }[darkResult.outcome] : null;
  const xp = 10 + stars * 5;
  panel(
    h('div', { class: 'sub' }, `${vocab(rec.dish).yue} × ${qty}${preference ? ` · ${vocab(preference).yue}` : ''}`),
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((n) => h('span', { class: n <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`, isSpecial ? h('span', { class: 'tag' }, '特價 x2') : null, darkTag ? h('span', { class: 'tag' }, darkTag) : null, listen && tries === 0 ? h('span', { class: 'tag' }, '🎧 x2') : null),
  );
  [1, 2, 3].forEach((n) => n <= stars && setTimeout(() => sfx('good'), n * 180));
  world.coinsFromCustomer();
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  // 結算畫面至少 1.6 秒，而且反應句一定講完（再留 400ms 畀人睇字幕）
  await Promise.all([wait(1600), reactDone.then(() => wait(400))]);
  if (darkResult) { clearBubble(); await revealDarkDish(rec, darkResult); }
  world.removeDish();

  // 閒聊（SRS 溫習）
  // 暗黑食堂唔考閒聊同再見（節奏留畀紅綠燈同追問）
  const quiz = !(tutorial && index === 0) && !isDark;
  let extra = 0;
  if (quiz) extra = await smalltalk(cust);

  // 走
  const bye = pickByLevel(REACT.bye);
  if (quiz && bye.key && Math.random() < 1 / 3) await byeQuiz(cust, bye);
  else await bubble(world, 'cust', bye.jp, bye.yue, lineVoice(cust.id, bye));
  clearBubble('cust');
  world.customerOut();
  milestones();
  return { coins: coins + extra, stars, levelUps: S().level - lv0 };
}

async function cook(rec) {
  hidePanel();
  world.setView('cook');
  world.useStation(rec.station);
  world.clearWork();
  const scores = [];
  for (const step of rec.steps) {
    const sc = await MINIGAMES[step.type](step, world);
    scores.push({ score: sc, weight: step.weight || 1 });
    if (step.verb) { srsSeen(step.verb); srsAnswer(step.verb, sc >= 0.7); }
  }
  hideHint();
  const avg = scores.reduce((sum, item) => sum + item.score * item.weight, 0) / scores.reduce((sum, item) => sum + item.weight, 0);
  world.showDish(rec.dish);
  world.catFace('front');
  world.cat.happy();
  sfx('perfect');
  hidePanel();
  await bubble(world, 'cat', CAT.done.jp, CAT.done.yue, 'cat');
  clearBubble('cat');
  return avg;
}

async function smalltalk(cust) {
  const { st, wrongs } = pickSmalltalk(S().chapter, srsPick);
  const voice = lineVoice(cust.id, st);
  srsSeen(st.key);
  const listen = S().settings.subs === 'tap';
  bubble(world, 'cust', st.jp, '', voice, { hidden: listen });
  const opts = shuffle([{ value: true, label: st.yue }, ...wrongs.map((w) => ({ value: false, label: w.yue }))]);
  const ans = await choose(opts, { title: h('div', { class: 'panel-title' }, '💬 客人講咩？（答啱有貼士）') });
  srsAnswer(st.key, ans.value);
  trackLv(st.lv, ans.value);
  poolCheck('resto', st.lv ?? 0);
  let coins = 0;
  if (ans.value) {
    sfx('perfect');
    ans.button.classList.add('right');
    coins = 15;
    S().coins += coins;
    addXP(5);
    coinFly(coins);
    renderHUD();
    pop('+15 🪙', 'good');
  } else {
    sfx('bad');
    ans.button.classList.add('wrong');
    [...ans.grid.children].forEach((b, i) => { if (opts[i].value) b.classList.add('right'); });
    hint(`「${st.jp.replace(/\{.*?\}/g, '')}」= ${st.yue}。之後會再考你！`, 3500);
  }
  await wait(1300);
  clearBubble('cust');
  return coins;
}

// 再見小測：客人講再見，揀意思（約 1/3 機會）
async function byeQuiz(cust, bye) {
  const wrongs = shuffle(REACT.bye.filter((x) => x.key !== bye.key && x.yue !== bye.yue && (x.lv ?? 0) <= jpLevel())).slice(0, 2);
  srsSeen(bye.key);
  const opts = shuffle([{ value: true, label: bye.yue }, ...wrongs.map((w) => ({ value: false, label: w.yue }))]);
  bubble(world, 'cust', bye.jp, '', lineVoice(cust.id, bye), { hidden: S().settings.subs === 'tap' });
  const ans = await choose(opts, { title: h('div', { class: 'panel-title' }, '👋 客人走之前講咩？') });
  srsAnswer(bye.key, ans.value);
  trackLv(bye.lv ?? 0, ans.value);
  poolCheck('resto', bye.lv ?? 0);
  if (ans.value) { sfx('perfect'); pop('+5 🪙', 'good'); S().coins += 5; renderHUD(); }
  else { sfx('bad'); hint(`「${bye.jp.replace(/\{.*?\}/g, '')}」= ${bye.yue}`, 3000); }
  await wait(900);
}

async function levelUp() {
  const s = S();
  sfx('level');
  world.cat.happy();
  pop(`Lv.${s.level}!`, 'level');
  await bubble(world, 'cat', CAT.levelup.jp, CAT.levelup.yue, 'cat');
  clearBubble('cat');
  const newR = RECIPES.find((r) => r.unlock.level === s.level);
  if (newR) await announceRecipe(newR);
  return newR;
}

async function announceRecipe(r) {
  refreshMenu();
  const v = vocab(r.dish);
  sfx('rare');
  bubble(world, 'cat', CAT.newRecipe.jp, CAT.newRecipe.yue, 'cat');
  await next('好嘢！', h('div', { class: 'unlock' }, h('div', { class: 'big-emo spin' }, vocabArt(v)), h('div', { class: 'panel-title' }, '🔓 新食譜解鎖！'), jpLine(v.jp, { yue: v.yue, voice: 'word', size: 'big', autoplay: true })));
  clearBubble('cat');
}

const MILES = [[1, '🎊 第一位客人！'], [5, '🏅 招呼咗 5 位客人'], [10, '🏆 10 位客人！小黑好驕傲'], [25, '👑 25 位！你係人氣店'], [50, '🌸 50 位！傳說級食堂']];
function milestones() {
  const s = S();
  for (const [n, t] of MILES) {
    if (s.served === n && !s.achievements.includes('served' + n)) { s.achievements.push('served' + n); toast(t, 2600, 'rare'); sfx('rare'); save(); }
  }
}

// ===== 日本餐廳（你做客人）=====
async function restaurant(chId = 'home') {
  busy = true;
  resetUsed();
  hidePanel();
  clearBubble();
  const R = restoMenu(chId);
  const ppl = pick(R.people);
  const food = pick(R.foods);
  const drink = pick(R.drinks);
  const num = NUMS[ppl.n - 1];
  const total = (R.prices[food] + R.prices[drink]) * ppl.n;
  let right = 0, qs = 0;
  // 額外對答環節：程度越高越多（1/2/3 個）
  const ctx = { ppl, food, drink, num, f: {}, foodJp: R.theme === 'home' ? undefined : vocab(food).jp, foodYue: R.theme === 'home' ? undefined : vocab(food).yue.replace(/（.*?）/g, '') };
  const beats = drawBeats(ctx, BEAT_COUNT[jpLevel()]);

  const menuTags = [...R.foods, ...R.drinks.filter((d) => R.prices[d] > 0)].slice(0, 5).map((id) => vocab(id).jp.replace(/\{.*?\}/g, '').slice(0, 7));
  await fade(() => { world.catTo('rest'); world.setView('rest', true); world.restTheme(R.theme, menuTags); });
  const taskDetails = `你哋 ${ppl.n} 個人，每人想食 ${vocab(food).yue.replace(/（.*?）/g, '')}，飲 ${vocab(drink).yue.replace(/（.*?）/g, '')}${beats.map((b) => b.task(ctx)).filter(Boolean).map((t) => `；${t}`).join('')}`;
  mission(`${ppl.n} 位 · ${vocab(food).yue.replace(/（.*?）/g, '')} · ${vocab(drink).yue.replace(/（.*?）/g, '')}`, taskDetails);
  hint('今次你做客人！小黑做店員 🐈‍⬛', 3000);

  // 一條問題：店員講 staffLine，你喺 options 揀
  const ask = async (staffLine, options, correctIdx, title) => {
    if (staffLine.jp) await bubble(world, 'cat', staffLine.jp, staffLine.yue, 'cat');
    else { clearBubble('cat'); hint(staffLine.yue, 2500); }
    qs++;
    let first = true;
    for (;;) {
      const opts = shuffle(options.map((o, i) => ({ value: i, el: jpLine(o.jp, { yue: o.yue, voice: 'word' }) })));
      const a = await choose(opts, { title: h('div', { class: 'panel-title' }, title) });
      if (a.value === correctIdx) {
        sfx('good');
        a.button.classList.add('right');
        if (first) right++;
        await say(options[correctIdx].jp, 'word');
        return first;
      }
      sfx('bad');
      a.button.classList.add('wrong');
      first = false;
      hint(`「${options[a.value].yue}」唔係最啱，再試吓！`, 3000);
      await wait(900);
    }
  };

  // 跑某個階段嘅額外環節
  const runBeats = async (phase) => {
    for (const b of beats.filter((x) => x.phase === phase)) {
      const reminder = b.task(ctx);
      if (reminder) hint(`📋 ${reminder}`, 5000);
      const r = b.build(ctx);
      const ok = await ask(r.staff || { jp: null, yue: r.prompt }, r.options, 0, r.title);
      trackLv(b.lv, ok);
      if (r.reply) await bubble(world, 'cat', r.reply.jp, r.reply.yue, 'cat');
    }
  };

  const ppOpts = R.people.map((p) => ({ jp: p.jp, yue: p.yue }));
  await ask(R.staff.welcome, ppOpts, R.people.indexOf(ppl), '👥 你哋幾多位？');
  srsAnswer(ppl.key, true);
  await runBeats('enter');
  await bubble(world, 'cat', R.staff.seat.jp, R.staff.seat.yue, 'cat');
  await runBeats('seat');
  await runBeats('preorder');

  const otherFood = pick(R.foods.filter((f) => f !== food));
  const otherNum = pick(NUMS.filter((x) => x !== num));
  const fo = [fill(R.you.order, { food, num }), fill(R.you.order, { food: otherFood, num }), fill(R.you.order, { food, num: otherNum })];
  await ask(R.staff.order, fo, 0, '🍽️ 點餐（記住人數！）');
  await runBeats('order');

  const otherDrink = pick(R.drinks.filter((d) => d !== drink));
  const dr = [fill(R.you.drink, { drink, num }), fill(R.you.drink, { drink: otherDrink, num }), fill(R.you.drink, { drink, num: otherNum })];
  await ask(R.staff.drink, dr, 0, '🥤 飲品');

  await ask(R.staff.confirm, [R.you.yes, R.you.wrongPay, R.you.wrongGreet], 0, '✅ 就咁多？');
  await bubble(world, 'cat', R.staff.wait.jp, R.staff.wait.yue, 'cat');
  await runBeats('wait');
  clearBubble();
  hidePanel();
  await fade(() => { world.setView('restTable', true); world.restServe([food, drink], ppl.n); });
  await bubble(world, 'cat', R.staff.serve.jp, R.staff.serve.yue, 'cat');
  await runBeats('mid');
  await ask({ jp: null, yue: '（食之前講咩？）' }, [R.you.itadakimasu, R.you.wrongEat, R.you.gochisou], 0, '🙏 開動之前講咩？');
  srsAnswer('itadakimasu', true);
  hidePanel();
  clearBubble();
  hint('😋 食緊… 好好味！', 1800);
  await wait(1800);
  await fade(() => { world.restClear(); world.setView('rest', true); });
  await ask({ jp: null, yue: '（食完講咩？）' }, [R.you.gochisou, R.you.itadakimasu, R.you.wrongGreet], 0, '😊 食完講咩？');
  srsAnswer('gochisousama', true);
  await runBeats('after');
  await ask({ jp: null, yue: '（想埋單）' }, [R.you.kaikei, R.you.wrongPay, R.you.no], 0, '🧾 叫埋單');
  srsAnswer('okaikei', true);
  await runBeats('pay');

  // 聽價錢（初學以上有時會講「税込み」）
  const payLine = fill(jpLevel() > 0 && Math.random() < 0.5 ? R.staff.pay2 : R.staff.pay, { price: total });
  await bubble(world, 'cat', payLine.jp, '（聽吓幾錢？）', 'cat', { hidden: true });
  qs++;
  const fakes = shuffle([total + 100, Math.max(100, total - 50), total + 500, total * 2].filter((x) => x !== total)).slice(0, 2);
  let firstP = true;
  for (;;) {
    const a = await choose(shuffle([total, ...fakes]).map((p) => ({ value: p, label: `<b>${p}円</b>` })), { title: h('div', { class: 'panel-title' }, '💴 要畀幾錢？（撳泡泡可以睇字幕）'), cols: 3 });
    if (a.value === total) { sfx('coin'); a.button.classList.add('right'); if (firstP) right++; break; }
    sfx('bad'); a.button.classList.add('wrong'); firstP = false; say(payLine.jp, 'cat');
    await wait(700);
  }
  await runBeats('receipt');
  await bubble(world, 'cat', R.staff.bye.jp, R.staff.bye.yue, 'cat');

  // 結果
  const score = right / qs;
  const coins = 40 + Math.round(score * 80);
  const xp = 20 + Math.round(score * 20);
  S().restaurantDone++;
  S().coins += coins;
  const ups = addXP(xp);
  save();
  renderHUD();
  sfx('level');
  const stamp = score === 1 ? '💮' : score > 0.7 ? '⭕' : '🔺';
  await next('返廚房 🏠',
    h('div', { class: 'unlock' },
      h('div', { class: 'big-emo spin' }, stamp),
      h('div', { class: 'panel-title' }, `點餐成功！一次答啱 ${right} / ${qs}`),
      h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP　🏮 旅遊印章 x${S().restaurantDone}`)));
  coinFly(coins);
  clearBubble();
  $('#taskbar').classList.remove('show');
  await fade(() => { world.catTo('kitchen'); world.setView('kitchen', true); });
  if (ups) await levelUp();
  hub();
}
