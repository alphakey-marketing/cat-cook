import './style.css';
import { World } from './three/world.js';
import { $, h, panel, hidePanel, choose, next, bubble, clearBubble, hint, hideHint, toast, pop, coinFly, renderHUD, showHUD, applySettings, jpLine, fade, wait, shuffle, pick, modal, closeModal } from './ui.js';
import { unlockAudio, say, sfx, preload } from './audio.js';
import { S, save, checkIn, addXP, srsAnswer, srsSeen, srsPick, today } from './save.js';
import { RECIPES, recipe } from './data/recipes.js';
import { VOCAB, vocab } from './data/vocab.js';
import { ORDER_TEMPLATES, ORDER_NUM_TEMPLATES, REACT, CAT, SMALLTALK, RESTAURANT } from './data/dialogue.js';
import { CUSTOMERS } from './data/shop.js';
import { MINIGAMES } from './minigames.js';
import { fill, NUMS } from './lines.js';
import { isUnlocked, recipeCard, openBook, openShop, openSettings, shiftSummary, apply } from './screens.js';
import { hash, toHTML } from './jp.js';

const world = new World($('#c'));
if (import.meta.env.DEV) window.__world = world; // 截圖 / debug 用
let busy = false;
if (import.meta.env.DEV) window.__world = world; // 測試用

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
$('#btn-set').onclick = () => { sfx('tap'); openSettings(); };

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
  hub();
}

function special() {
  const list = RECIPES.filter(isUnlocked);
  return list[parseInt(hash(today()), 36) % list.length]?.id;
}

function refreshMenu() {
  world.setMenu(RECIPES.map((r) => ({ name: VOCAB[r.dish].jp.replace(/\{.*?\}/g, ''), price: r.price, locked: !isUnlocked(r) })));
}

// ===== 大堂（兩更之間）=====
function hub() {
  busy = false;
  world.setView('kitchen');
  world.catFace('front');
  const sp = special();
  const spv = sp ? vocab(recipe(sp).dish) : null;
  const canRest = S().shifts >= 1;
  panel(
    h('div', { class: 'panel-title' }, '今日做咩好？'),
    spv ? h('div', { class: 'special' }, '🌟 今日特價：',h('span', { class: 'jp-inline', html: toHTML(spv.jp) }), ' 金幣 x2') : null,
    h('div', { class: 'hub-btns' },
      h('button', { class: 'btn primary big', onclick: () => { sfx('tap'); shift({}); } }, '🏮 開舖'),
      h('button', { class: `btn big ${canRest ? '' : 'disabled'}`, onclick: () => { sfx('tap'); if (canRest) restaurant(); else toast('做完第一更先解鎖！'); } }, canRest ? '🍱 去日本餐廳' : '🔒 日本餐廳'),
      h('button', { class: 'btn', onclick: () => { sfx('tap'); openBook(); } }, '📚 圖鑑'),
      h('button', { class: 'btn', onclick: () => { sfx('tap'); openShop(world); } }, '🛍️ 商店'),
    ),
  );
}

// ===== 一更（幾位客人）=====
async function shift({ tutorial = false } = {}) {
  busy = true;
  const n = tutorial ? 4 : 5;
  const stat = { served: 0, coins: 0, perfect: 0 };
  let forceDish = null;
  for (let i = 0; i < n; i++) {
    $('#shiftinfo').textContent = `客人 ${i + 1} / ${n}`;
    $('#shiftinfo').classList.add('show');
    const res = await serveCustomer({ index: i, tutorial, forceDish });
    forceDish = null;
    stat.served++;
    stat.coins += res.coins;
    if (res.stars === 3) stat.perfect++;
    // 升級
    if (res.levelUps) {
      const newR = await levelUp();
      if (newR) forceDish = newR.dish;
    }
  }
  $('#shiftinfo').classList.remove('show');
  S().shifts++;
  save();
  hidePanel();
  clearBubble();
  world.setView('kitchen');
  world.cat.happy();
  sfx('level');
  const first = S().shifts === 1;
  await new Promise((res) => shiftSummary(stat, {
    firstShift: first,
    onNext: () => res(() => shift({})),
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
  const cust = pickCustomer(index, tutorial);
  const voice = cust.id;
  const unlocked = RECIPES.filter(isUnlocked);
  // 揀菜：新解鎖優先，其次 SRS 要溫嘅
  const dishId = forceDish || srsPick(unlocked.map((r) => r.dish));
  const rec = unlocked.find((r) => r.dish === dishId) || unlocked[0];
  const withNum = s.level >= 2 && !tutorial && Math.random() < 0.45;
  const qty = withNum ? 1 + Math.floor(Math.random() * 3) : 1;
  const line = withNum
    ? fill(pick(ORDER_NUM_TEMPLATES), { dish: rec.dish, num: NUMS[qty - 1] })
    : fill(pick(ORDER_TEMPLATES), { dish: rec.dish });
  preload(line.jp, voice);

  // 入門
  hidePanel();
  world.setView('kitchen');
  world.catFace('customer');
  sfx('door');
  await world.customerIn(cust);
  if (cust.rare) { sfx('rare'); toast(`✨ 稀有客人：${cust.yue}！ 貼士 x${cust.tip}`, 2600, 'rare'); }
  world.cat.play('wave', 0.8); world.cat.emote('happy', 1.2);
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
      return { value: r.dish, el: h('div', { class: 'dish-opt' }, h('span', { class: 'emo' }, v.emoji), h('span', { class: 'jp-inline', html: toHTML(v.jp) })) };
    });
    const pickDish = await choose(opts, { title: h('div', { class: 'panel-title' }, '🐾 客人要咩？'), cols: Math.min(opts.length, 2) });
    let pickQty = 1;
    if (pickDish.value === rec.dish && withNum) {
      const qo = await choose(NUMS.map((id, i) => ({ value: i + 1, el: h('div', { class: 'dish-opt' }, h('span', { class: 'emo' }, vocab(id).emoji), h('span', { class: 'jp-inline', html: toHTML(vocab(id).jp) })) })), { title: h('div', { class: 'panel-title' }, '要幾多個？'), cols: 3 });
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
      world.cat.play('sad', 0.6); world.cat.emote('sad', 1.6);
      const wr = pick(REACT.wrong);
      await bubble(world, 'cust', wr.jp, wr.yue, voice, { mood: 'surprised' });
      hint(`佢講：「${line.yue}」— 再聽一次！`, 3500);
      srsAnswer(rec.dish, false);
      await wait(600);
    }
  }
  srsSeen(rec.dish);
  clearBubble('cust');

  // 第一次煮呢個菜：睇食譜
  if (!s.cooked[rec.id]) {
    await new Promise((res) => recipeCard(rec, { onStart: res }));
  }

  // 煮
  const score = await cook(rec);
  const stars = score >= 0.9 ? 3 : score >= 0.65 ? 2 : 1;
  s.stars[rec.id] = Math.max(s.stars[rec.id] || 0, stars);
  s.cooked[rec.id] = (s.cooked[rec.id] || 0) + 1;

  // 上菜
  world.setView('serve');
  world.slideDishToCustomer();
  await wait(500);
  const react = pick(stars === 3 ? REACT.great : REACT.ok);
  world.customerJump();
  world.cat.emote('happy', 2);
  bubble(world, 'cust', react.jp, react.yue, voice, { mood: stars >= 2 ? 'happy' : 'normal' });
  const isSpecial = special() === rec.id;
  let coins = Math.round(rec.price * qty * (0.6 + 0.4 * score) * cust.tip * (isSpecial ? 2 : 1) / 10);
  if (listen && tries === 0) coins *= 2;
  const xp = 10 + stars * 5;
  panel(
    h('div', { class: 'stars-big' }, ...[1, 2, 3].map((n) => h('span', { class: n <= stars ? 'on' : '' }, '★'))),
    h('div', { class: 'reward' }, `🪙 +${coins}　✨ +${xp} XP`, isSpecial ? h('span', { class: 'tag' }, '特價 x2') : null, listen && tries === 0 ? h('span', { class: 'tag' }, '🎧 x2') : null),
  );
  [1, 2, 3].forEach((n) => n <= stars && setTimeout(() => sfx('good'), n * 180));
  world.coinsFromCustomer();
  coinFly(coins, { x: innerWidth * 0.7, y: innerHeight * 0.35 });
  s.coins += coins;
  s.served++;
  addXP(xp);
  renderHUD();
  await wait(1600);
  world.removeDish();

  // 閒聊（SRS 溫習）
  let extra = 0;
  if (!(tutorial && index === 0)) extra = await smalltalk(cust, voice);

  // 走
  const bye = pick(REACT.bye);
  await bubble(world, 'cust', bye.jp, bye.yue, voice, { mood: 'happy' });
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
    scores.push(sc);
    if (step.verb) { srsSeen(step.verb); srsAnswer(step.verb, sc >= 0.7); }
  }
  hideHint();
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  world.showDish(rec.dish);
  world.catFace('front');
  world.cat.happy();
  sfx('perfect');
  hidePanel();
  await bubble(world, 'cat', CAT.done.jp, CAT.done.yue, 'cat');
  clearBubble('cat');
  return avg;
}

async function smalltalk(cust, voice) {
  const keys = Object.keys(SMALLTALK);
  const k = srsPick(keys);
  const st = SMALLTALK[k];
  const v = vocab(st.key);
  srsSeen(st.key);
  const listen = S().settings.subs === 'tap';
  bubble(world, 'cust', st.jp, '', voice, { hidden: listen });
  const wrongs = shuffle(keys.filter((x) => x !== k)).slice(0, 2).map((x) => SMALLTALK[x].yue);
  const opts = shuffle([{ value: true, label: st.yue }, ...wrongs.map((w) => ({ value: false, label: w }))]);
  const ans = await choose(opts, { title: h('div', { class: 'panel-title' }, '💬 客人講咩？（答啱有貼士）') });
  srsAnswer(st.key, ans.value);
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
    hint(`「${v.jp.replace(/\{.*?\}/g, '')}」= ${v.yue}。之後會再考你！`, 3500);
  }
  await wait(1300);
  clearBubble('cust');
  return coins;
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
  await next('好嘢！', h('div', { class: 'unlock' }, h('div', { class: 'big-emo spin' }, v.emoji), h('div', { class: 'panel-title' }, '🔓 新食譜解鎖！'), jpLine(v.jp, { yue: v.yue, voice: 'word', size: 'big', autoplay: true })));
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
  hidePanel();
  clearBubble();
  const R = RESTAURANT;
  const ppl = pick(R.people);
  const food = pick(R.foods);
  const drink = pick(R.drinks);
  const num = NUMS[ppl.n - 1];
  const total = (R.prices[food] + R.prices[drink]) * ppl.n;
  let right = 0, qs = 0;

  await fade(() => { world.catTo('rest'); world.setView('rest', true); });
  const task = h('div', { class: 'task' }, `🎯 任務：你哋 ${ppl.n} 個人，每人想食 ${vocab(food).emoji}${vocab(food).yue.replace(/（.*?）/g, '')}，飲 ${vocab(drink).emoji}${vocab(drink).yue.replace(/（.*?）/g, '')}`);
  $('#taskbar').innerHTML = ''; $('#taskbar').append(task); $('#taskbar').classList.add('show');
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
        return;
      }
      sfx('bad');
      a.button.classList.add('wrong');
      first = false;
      hint(`「${options[a.value].yue}」唔係最啱，再試吓！`, 3000);
      await wait(900);
    }
  };

  const ppOpts = R.people.map((p) => ({ jp: p.jp, yue: p.yue }));
  await ask(R.staff.welcome, ppOpts, R.people.indexOf(ppl), '👥 你哋幾多位？');
  srsAnswer(ppl.key, true);
  await bubble(world, 'cat', R.staff.seat.jp, R.staff.seat.yue, 'cat');

  const otherFood = pick(R.foods.filter((f) => f !== food));
  const otherNum = pick(NUMS.filter((x) => x !== num));
  const fo = [fill(R.you.order, { food, num }), fill(R.you.order, { food: otherFood, num }), fill(R.you.order, { food, num: otherNum })];
  await ask(R.staff.order, fo, 0, '🍽️ 點餐（記住人數！）');

  const otherDrink = pick(R.drinks.filter((d) => d !== drink));
  const dr = [fill(R.you.drink, { drink, num }), fill(R.you.drink, { drink: otherDrink, num }), fill(R.you.drink, { drink, num: otherNum })];
  await ask(R.staff.drink, dr, 0, '🥤 飲品');

  await ask(R.staff.confirm, [R.you.yes, R.you.wrongPay, R.you.wrongGreet], 0, '✅ 就咁多？');
  await bubble(world, 'cat', R.staff.wait.jp, R.staff.wait.yue, 'cat');
  clearBubble();
  hidePanel();
  await fade(() => { world.setView('restTable', true); world.restServe([food, drink], ppl.n); });
  await bubble(world, 'cat', R.staff.serve.jp, R.staff.serve.yue, 'cat');
  await ask({ jp: null, yue: '（食之前講咩？）' }, [R.you.itadakimasu, R.you.wrongEat, R.you.gochisou], 0, '🙏 開動之前講咩？');
  srsAnswer('itadakimasu', true);
  hidePanel();
  clearBubble();
  hint('😋 食緊… 好好味！', 1800);
  await wait(1800);
  await fade(() => { world.restClear(); world.setView('rest', true); });
  await ask({ jp: null, yue: '（食完講咩？）' }, [R.you.gochisou, R.you.itadakimasu, R.you.wrongGreet], 0, '😊 食完講咩？');
  srsAnswer('gochisousama', true);
  await ask({ jp: null, yue: '（想埋單）' }, [R.you.kaikei, R.you.wrongPay, R.you.no], 0, '🧾 叫埋單');
  srsAnswer('okaikei', true);

  // 聽價錢
  const payLine = fill(R.staff.pay, { price: total });
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
