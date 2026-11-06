import { art, artURL, vocabArt, decorateArt } from './art.js';
import './style.css';
import { World } from './three/world.js';
import { makeIce } from './three/models.js';
import { $, h, panel, hidePanel, choose, next, bubble, clearBubble, hint, hideHint, toast, pop, coinFly, renderHUD, showHUD, applySettings, jpLine, fade, wait, shuffle, pick, modal, closeModal, mission } from './ui.js';
import { unlockAudio, say, sfx, preload, onSfx, setMood } from './audio.js';
import { S, save, checkIn, addXP, srsAnswer, srsSeen, srsPick, today } from './save.js';
import { RECIPES, recipe } from './data/recipes.js';
import { VOCAB, vocab } from './data/vocab.js';
import { CHAPTERS, REGULARS } from './data/chapters.js';
import { dressDarkDish, darkReport, revealDarkDish, interrogate, settleDark, pickPersona, introPersona, darkShiftIntro, bankOrGamble, bankAtEnd, raid, darkStars, renderDarkbar, hideDarkbar } from './dark.js';
import { DARK_ORDER_TEMPLATES } from './data/dark.js';
import { DARK, resetDark } from './darkstate.js';
import { ORDER_TEMPLATES, ORDER_NUM_TEMPLATES, REACT, CAT, RESTAURANT, pickByLevel, lineVoice, pickSmalltalk, pickDetail, resetUsed, trackLv, levelNudge, SOLDOUT, REPLACE, TSUIKA, HERASU, KAERU, KYANSERU, YAMERU, FINISH_STEPS, drawBeats, BEAT_COUNT, jpLevel, LEVELS } from './data/dialogue.js';
import { CUSTOMERS } from './data/shop.js';
import { MINIGAMES } from './minigames.js';
import { fill, NUMS } from './lines.js';
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
if (import.meta.env.DEV) window.__game = { hub, shift, serveCustomer, cook, restaurant, state: S, save, minigames: MINIGAMES };

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
    { label: '<b>🌿 識少少</b><small>識假名、簡單字</small>', value: 1 },
    { label: '<b>🌳 N3 或以上</b><small>想練聽力同實用句子</small>', value: 2 },
  ], { title: h('div', { class: 'panel-title' }, '你嘅日文程度係？（之後可以喺 ⚙️ 改）') });
  const st = S().settings;
  S().jpLevel = lv.value;
  if (lv.value === 0) Object.assign(st, { furigana: true, romaji: true, yue: true, subs: 'show' });
  if (lv.value === 1) Object.assign(st, { furigana: true, romaji: false, yue: true, subs: 'show' });
  if (lv.value === 2) Object.assign(st, { furigana: true, romaji: false, yue: false, subs: 'tap' });
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
    const lv = await choose(LEVELS.map((l) => ({ label: `<b>${l.icon} ${l.name}</b><small>${l.desc}</small>`, value: l.id })),
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

// 答啱率高：問玩家想唔想升一級
function levelNudgeCard() {
  const n = levelNudge();
  if (!n) return null;
  const to = LEVELS[n.to];
  return h('div', { class: 'special lv-nudge' },
    `${LEVELS[n.from].icon} 呢級答啱率 ${n.rate}%（${n.total} 題）！想試吓 ${to.icon} ${to.name} 嗎？`,
    h('button', { class: 'btn primary', onclick: () => { S().jpLevel = n.to; save(); sfx('level'); toast(`轉咗做 ${to.name}`); hub(); } }, '升一級'),
    h('button', { class: 'btn', onclick: () => { S().lvNudgeDismissed = n.from; save(); hub(); } }, '遲啲先'));
}

// ===== 大堂（兩更之間）=====
function hub() {
  busy = false;
  clearBubble();
  world.setView('kitchen');
  world.catFace('front');
  const sp = special();
  const spv = sp ? vocab(recipe(sp).dish) : null;
  const canRest = S().shifts >= 1;
  refreshMenu();
  const chapter = CHAPTERS.find(c => c.id === S().chapter) || CHAPTERS[0];
  const actions = h('div', { class: 'hub-btns' },
    h('button', { class: 'btn primary big', 'data-action': 'open-shift', onclick: () => { sfx('tap'); shift({}); } }, '🏮 開舖'),
    h('button', { class: `btn big ${canRest ? '' : 'disabled'}`, onclick: () => { sfx('tap'); if (canRest) restaurant(); else toast('完成第一位客人就解鎖！'); } }, canRest ? '🍱 去日本餐廳' : '🔒 日本餐廳'),
    h('button', { class: 'btn', onclick: () => { sfx('tap'); openBook(); } }, '📚 圖鑑'),
    h('button', { class: 'btn', onclick: () => { sfx('tap'); openShop(world); } }, '🛍️ 商店'));
  panel(h('div', { class: 'hub-info' },
    h('div', { class: 'chapter-tabs', 'aria-label': '選擇章節' }, CHAPTERS.map(c => h('button', {
      class: `btn ${c.id === chapter.id ? 'primary' : ''}`, 'data-chapter': c.id,
      'aria-pressed': String(c.id === chapter.id), onclick: () => { S().chapter = c.id; save(); sfx('tap'); hub(); },
    }, art({ home: 'ui_open_shop', izakaya: 'shop_deco_lantern', cafe: 'dish_instant_coffee', dark: 'dish_dark_ding' }[c.id]), ` ${{ home: '食堂', izakaya: '居酒屋', cafe: '喫茶店', dark: '暗黑' }[c.id]}`))),
    h('div', { class: 'panel-title' }, chapter.name),
    h('div', { class: 'sub' }, `${chapter.intro}　完成 ${S().chapterShifts[chapter.id] || 0} 更`),
    chapter.id === 'dark' ? h('button', { class: 'btn', onclick: () => openBook('secrets') }, `後廚捷徑圖鑑 · ${Object.keys(S().darkSecrets).length} / 7`) : null,
    spv ? h('div', { class: 'special' }, '🌟 今日特價：',h('span', { class: 'jp-inline', html: toHTML(spv.jp) }), ' 金幣 x2') : null,
    levelNudgeCard(),
  ), actions).classList.add('hub-panel');
}

// ===== 一更（幾位客人）=====
async function shift({ tutorial = false } = {}) {
  busy = true;
  resetUsed();
  const n = tutorial ? 1 : 5;
  const stat = { served: 0, coins: 0, perfect: 0 };
  let forceDish = null;
  // 暗黑食堂：成更懷疑度／彩池
  const dark = S().chapter === 'dark' && !tutorial;
  if (dark) { resetDark(); await darkShiftIntro(); }
  for (let i = 0; i < n; i++) {
    $('#shiftinfo').textContent = `客人 ${i + 1} / ${n}`;
    $('#shiftinfo').classList.add('show');
    const res = await serveCustomer({ index: i, tutorial, forceDish });
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

async function serveCustomer({ index, tutorial, forceDish }) {
  const s = S();
  const lv0 = s.level;
  const cust = s.chapter === 'cafe' ? CUSTOMERS[index % REGULARS.length] : pickCustomer(index, tutorial);
  const unlocked = menuRecipes();
  // 揀菜：新解鎖優先，其次 SRS 要溫嘅
  const dishId = forceDish || srsPick(unlocked.map((r) => r.dish));
  let rec = unlocked.find((r) => r.dish === dishId) || unlocked[0];
  if (import.meta.env.DEV) window.__order = rec.dish; // 測試用
  const withNum = s.level >= 2 && !tutorial && rec.chapter !== 'dark' && Math.random() < 0.45;
  let qty = withNum ? 1 + Math.floor(Math.random() * 3) : 1;
  // 按日文程度抽句；高級句用共用聲線（慳音檔）
  const isDark = rec.chapter === 'dark';
  if (isDark) { qty = 1; DARK.persona = pickPersona(); DARK.custId = cust.id; }
  const tpl = pickByLevel(isDark ? DARK_ORDER_TEMPLATES : withNum ? ORDER_NUM_TEMPLATES : ORDER_TEMPLATES);
  // 暗黑食堂：客人照浮誇菜單名落單（自然日文）
  const line = isDark
    ? { jp: tpl.jp.replace('{dish}', rec.jp), yue: tpl.yue.replace('{dishYue}', rec.yue) }
    : fill(tpl, withNum ? { dish: rec.dish, num: NUMS[qty - 1] } : { dish: rec.dish });
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
  while (!orderOk) {
    bubble(world, 'cust', line.jp, line.yue, voice, { hidden: listen });
    const opts = shuffle(unlocked).map((r) => {
      const v = vocab(r.dish);
      return { value: r.dish, el: h('div', { class: 'dish-opt' }, h('span', { class: 'emo' }, vocabArt(v)), h('span', { class: 'jp-inline', html: toHTML(v.jp) })) };
    });
    const pickDish = await choose(opts, { title: h('div', { class: 'panel-title' }, '🐾 客人要咩？'), cols: Math.min(opts.length, 2) });
    let pickQty = 1;
    if (pickDish.value === rec.dish && withNum) {
      const qo = await choose(NUMS.map((id, i) => ({ value: i + 1, el: h('div', { class: 'dish-opt' }, h('span', { class: 'emo' }, vocabArt(vocab(id))), h('span', { class: 'jp-inline', html: toHTML(vocab(id).jp) })) })), { title: h('div', { class: 'panel-title' }, '要幾多個？'), cols: 3 });
      pickQty = qo.value;
    }
    if (pickDish.value === rec.dish && pickQty === qty) {
      orderOk = true;
      sfx('good');
      srsAnswer(rec.dish, tries === 0);
      if (withNum) srsAnswer(NUMS[qty - 1], tries === 0);
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
  if (S().chapter === 'izakaya' && index % 2 === 0) {
    // 落單後、未煮前改單：加單 / 減少 / 換菜 / 取消（按情況抽，答案位置隨機）
    const other = unlocked.filter((r) => r.id !== rec.id);
    const kinds = [['add', 3], ['cancel', 1], ...(qty >= 2 ? [['less', 2]] : []), ...(other.length ? [['swap', 3]] : [])];
    let roll = Math.random() * kinds.reduce((a, [, w]) => a + w, 0);
    const kind = (kinds.find(([, w]) => (roll -= w) <= 0) || kinds[0])[0];
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
    if (!replacement || Math.random() < 0.25) {
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
async function restaurant() {
  busy = true;
  resetUsed();
  hidePanel();
  clearBubble();
  const R = RESTAURANT;
  const ppl = pick(R.people);
  const food = pick(R.foods);
  const drink = pick(R.drinks);
  const num = NUMS[ppl.n - 1];
  const total = (R.prices[food] + R.prices[drink]) * ppl.n;
  let right = 0, qs = 0;
  // 額外對答環節：程度越高越多（1/2/3 個）
  const ctx = { ppl, food, drink, num, f: {} };
  const beats = drawBeats(ctx, BEAT_COUNT[jpLevel()]);

  await fade(() => { world.catTo('rest'); world.setView('rest', true); });
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
