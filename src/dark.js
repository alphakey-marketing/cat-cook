import { h, panel, choose, modal, jpLine, bubble, clearBubble, toast, hint, pop, shuffle, pick, wait, $, renderHUD, coinFly } from './ui.js';
import { sfx } from './audio.js';
import { S, save, srsSeen, srsAnswer } from './save.js';
import { STYLES, WISHES, HYPE, PERSONAS, PROBES, EXCUSES, REVIEWS, DARK_REPLY, DARK_CUST, darkRatings, dishName } from './data/dark.js';
import { jpLevel, lineVoice, trackLv } from './data/phrases.js';
import { CUSTOMERS } from './data/shop.js';
import { DARK, SUS_MAX, addSus } from './darkstate.js';
import { art } from './art.js';
import { toHTML } from './jp.js';

const darkShifts = () => S().chapterShifts.dark || 0;
const clampRating = (v) => Math.max(1, Math.min(5, Math.round(v * 100) / 100));
const rate = (d) => { S().darkRating = clampRating((S().darkRating ?? 3) + d); };

// ---------- HUD：👀 懷疑度 · 💰 彩池 · 🔥 combo · ⭐ 評分 ----------
export function renderDarkbar() {
  const el = $('#darkbar');
  if (!el) return;
  el.classList.toggle('show', DARK.active);
  if (!DARK.active) return;
  const eyes = Array.from({ length: SUS_MAX }, (_, i) => (i < DARK.suspicion ? '●' : '○')).join('');
  el.dataset.sus = DARK.suspicion;
  el.replaceChildren(
    h('span', { class: 'db-sus', title: '懷疑度：滿 5 食評家突擊' }, `👀 ${eyes}`),
    h('span', { class: 'db-pot', title: '黑錢彩池：收手先落袋' }, `💰 ${DARK.pot}`),
    h('span', { class: 'db-combo' }, `🔥x${DARK.combo.toFixed(2)}`),
    h('span', { class: 'db-rating' }, `⭐${(S().darkRating ?? 3).toFixed(2)}`),
  );
}
export function hideDarkbar() { DARK.active = false; renderDarkbar(); }

// ---------- 開更：目標 ----------
export function darkGoals() {
  return { coins: 200 + 30 * Math.min(darkShifts(), 5), exposes: 1 };
}
export async function darkShiftIntro() {
  const g = darkGoals();
  renderDarkbar();
  await new Promise((resolve) => {
    const footer = h('button', { class: 'btn primary big', 'data-dark': 'start', onclick: () => m.close() }, '🔪 開工');
    const m = modal('今晚目標', h('div', { class: 'dark-goals' },
      h('p', {}, `⭐ 賺到 ${g.coins} 🪙（彩池要收手先計）`),
      h('p', {}, `⭐ 被揭穿最多 ${g.exposes} 次`),
      h('p', {}, '⭐ 冇俾食評家拆穿'),
      h('div', { class: 'sub' }, '每次浮誇介紹，紅利會入 💰 彩池；繼續搏有 🔥 combo，被揭穿就冇一半。懷疑度 👀 滿 5，食評家突擊！'),
    ), { footer, onClose: resolve });
  });
}
export function darkStars(stat) {
  const g = darkGoals();
  const res = [
    { ok: stat.coins >= g.coins, label: `賺 ${stat.coins} / ${g.coins} 🪙` },
    { ok: DARK.exposes <= g.exposes, label: `被揭穿 ${DARK.exposes} 次（≤ ${g.exposes}）` },
    { ok: DARK.raid !== 'lose', label: DARK.raid === 'win' ? '食評家突擊：頂住咗！' : DARK.raid === 'lose' ? '食評家突擊：被拆穿' : DARK.raid === 'confess' ? '食評家突擊：認錯' : '冇被突擊' },
  ];
  const stars = res.filter((r) => r.ok).length;
  const s = S();
  s.darkBest = Math.max(s.darkBest || 0, stars);
  save();
  return { stars, res };
}

// ---------- 客人類型 ----------
export function pickPersona() {
  const pool = Object.entries(PERSONAS).filter(([, p]) => !p.minShift || darkShifts() >= p.minShift);
  let r = Math.random() * pool.reduce((a, [, p]) => a + p.weight, 0);
  for (const [id, p] of pool) { r -= p.weight; if (r <= 0) return { id, ...p }; }
  return { id: pool[0][0], ...pool[0][1] };
}
export function introPersona(p) {
  toast(`${p.icon} ${p.name}：${p.hint}`, 3600);
}

// ---------- 擺盤 + 介紹：聽客人日文要求 → 揀風格 → 揀菜名（兩下撳完）----------
const optJP = (jp, yue, attrs = {}) => h('div', { class: 'dress-opt', ...attrs },
  h('b', { class: 'jp-inline', html: toHTML(jp) }), yue ? h('small', {}, yue) : null);
export async function dressDarkDish(rec, world) {
  const P = DARK.persona;
  const L = jpLevel();
  const cust = CUSTOMERS.find((c) => c.id === DARK.custId) || { id: DARK.custId || 'usagi' };
  const wishes = WISHES[P.like];
  const wish = wishes[Math.min(L, wishes.length - 1)];
  bubble(world, 'cust', wish.jp, L === 0 ? wish.yue : '', lineVoice(cust.id, wish));
  // ① 風格：日文字揀，lv0 先有廣東話細字
  const { value: style } = await choose(STYLES.map((st) => ({
    value: st,
    el: optJP(`${st.icon} ${st.jp}`, L === 0 ? st.yue : '', { 'data-dress': `style:${st.id}` }),
  })), { title: h('div', { class: 'panel-title' }, `${P.icon} 客人想要咩擺盤？`), cols: 3 });
  world.styleDish(style.plate, style.garnish);
  clearBubble('cust');
  // ② 介紹：揀講邊個菜名，越浮誇紅利越多但越易被追問
  const { value: pitch } = await choose(['honest', 'mild', 'grand'].map((t) => ({
    value: t,
    el: optJP(dishName(rec, t).jp, `${HYPE[t].label} · 紅利 x${HYPE[t].mult}`, { 'data-dress': `pitch:${t}` }),
  })), { title: h('div', { class: 'panel-title' }, '🍽️ 上菜！點介紹？越浮誇紅利越多，越易被追問') });
  const gap = Math.abs(STYLES.findIndex((x) => x.id === style.id) - STYLES.findIndex((x) => x.id === P.like));
  return { style: style.id, plate: style.plate, garnish: style.garnish, pitch, matches: 2 - gap };
}

export function darkReport(rec, taste, styling) {
  const ratings = darkRatings(taste, styling.matches, styling.pitch);
  return { ...ratings, style: styling.style, plate: styling.plate, garnish: styling.garnish, pitch: styling.pitch, matches: styling.matches, outcome: 'none' };
}

// 擺盤啱唔啱口味：影響收入同懷疑度
export function plateEffect(report) {
  const m = report.matches;
  if (m === 2) { addSus(-1); pop('擺盤正中客人口味！', 'perfect'); return 1.25; }
  if (m === 0) { addSus(1); pop('客人對擺盤皺眉…', 'miss'); return 0.85; }
  return 1;
}

// ---------- 追問：揀啱藉口 ----------
const say_ = (world, cust, list) => { const l = list[Math.min(jpLevel(), 2)] || list[0]; return bubble(world, 'cust', l.jp, l.yue, lineVoice(cust.id, l)); };
const pickProbe = () => {
  const L = jpLevel();
  const pool = PROBES.filter((p) => p.lv <= L);
  const top = pool.filter((p) => p.lv === L);
  return pick(top.length && Math.random() < 0.7 ? top : pool);
};
const excuseOpts = (probe, withHonest) => {
  const kinds = Object.keys(EXCUSES);
  const wrong = shuffle(kinds.filter((k) => k !== probe.kind)).slice(0, withHonest ? 2 : 3);
  const opts = shuffle([probe.kind, ...wrong]).map((k) => ({ value: k, el: h('div', { 'data-excuse': k }, h('b', { class: 'jp-inline', html: toHTML(EXCUSES[k].jp) }), h('small', {}, EXCUSES[k].yue)) }));
  if (withHonest) opts.push({ value: 'honest', el: h('div', { 'data-excuse': 'honest' }, '🙇 老實交代', h('small', {}, '收入 x0.8，懷疑度 -1')) });
  return opts;
};
async function askProbe(world, cust, listen, withHonest, title) {
  const probe = pickProbe();
  DARK.probe = probe; // 測試用：知佢問咩類
  const voice = lineVoice(cust.id, probe);
  srsSeen(probe.key);
  bubble(world, 'cust', probe.jp, '', voice, { hidden: listen });
  const ans = await choose(excuseOpts(probe, withHonest), { title: h('div', { class: 'panel-title' }, title) });
  clearBubble('cust');
  const right = ans.value === probe.kind;
  if (ans.value !== 'honest') { srsAnswer(probe.key, right); trackLv(probe.lv, right); }
  if (!right && ans.value !== 'honest') hint(`佢問：「${probe.yue}」→ 應該答「${EXCUSES[probe.kind].yue}」`, 3500);
  const mine = ans.value === 'honest' ? DARK_REPLY.honest : EXCUSES[ans.value];
  await bubble(world, 'cat', mine.jp, mine.yue, 'cat');
  clearBubble('cat');
  return { answer: ans.value, right, probe };
}

export function askChance(tier) {
  if (tier === 'honest') return 0;
  return Math.max(0, Math.min(1, HYPE[tier].ask + (DARK.persona?.ask || 0) + DARK.suspicion * 0.08));
}

// 返回 outcome：none | honest | believe | expose
export async function interrogate(world, cust, report, listen) {
  if (report.pitch === 'honest') return (report.outcome = 'plain');
  if (Math.random() >= askChance(report.pitch)) return (report.outcome = 'none');
  const { answer, right } = await askProbe(world, cust, listen, true, '🤨 客人追問！揀啱藉口（聽清楚佢問咩）');
  let outcome;
  if (answer === 'honest') { outcome = 'honest'; await say_(world, cust, DARK_CUST.forgive); sfx('good'); }
  else if (Math.random() < (right ? Math.max(0.5, 1 - DARK.suspicion * 0.1) : 0.15)) { outcome = 'believe'; await say_(world, cust, DARK_CUST.believe); sfx('perfect'); }
  else { outcome = 'expose'; await say_(world, cust, DARK_CUST.expose); sfx('bad'); world.shake(0.4); }
  clearBubble('cust');
  return (report.outcome = outcome);
}

// 結算一位客：base 即刻收；浮誇紅利入彩池。返回即收金額
export function settleDark(report, base) {
  const H = HYPE[report.pitch];
  const o = report.outcome;
  let paid = base, bonus = 0;
  if (o === 'none' || o === 'believe') {
    bonus = Math.round(base * (H.mult - 1) * DARK.combo);
    DARK.pot += bonus;
    DARK.combo = Math.min(2, DARK.combo + 0.25);
    rate(0.05);
    toast(pick(o === 'believe' ? REVIEWS.believe : REVIEWS.quiet), 2400);
  } else if (o === 'honest') {
    paid = Math.round(base * 0.8);
    addSus(-1); DARK.combo = 1; rate(0.02);
    toast(pick(REVIEWS.honest), 2400);
  } else if (o === 'expose') {
    paid = 0;
    DARK.pot = Math.floor(DARK.pot / 2);
    addSus(2); DARK.combo = 1; DARK.exposes++; rate(-0.15);
    toast(pick(REVIEWS.expose), 2600, 'bad');
  } else {
    rate(0.02);
  }
  report.bonus = bonus;
  save();
  renderDarkbar();
  return paid;
}

// 每位客之後：收手定繼續搏
function bankPot() {
  const n = DARK.pot;
  if (!n) return 0;
  DARK.pot = 0;
  DARK.earned += n;
  S().coins += n;
  save();
  sfx('coin');
  coinFly(n);
  renderHUD();
  renderDarkbar();
  return n;
}
export async function bankOrGamble() {
  if (DARK.pot <= 0) return 0;
  const a = await choose([
    { value: 'bank', el: h('div', { 'data-bank': 'bank' }, `💰 收手落袋 +${DARK.pot}`, h('small', {}, '懷疑度 -1，combo 歸零')) },
    { value: 'go', el: h('div', { 'data-bank': 'go' }, `🎲 繼續搏（🔥x${DARK.combo.toFixed(2)}）`, h('small', {}, '下位客紅利更多；被揭穿彩池冇一半')) },
  ], { title: h('div', { class: 'panel-title' }, `彩池 💰 ${DARK.pot} · 懷疑度 👀 ${DARK.suspicion}/${SUS_MAX}`) });
  if (a.value !== 'bank') return 0;
  addSus(-1); DARK.combo = 1;
  const n = bankPot();
  pop(`+${n} 落袋！`, 'good');
  return n;
}
export const bankAtEnd = () => bankPot();

// ---------- 食評家突擊（懷疑度滿）----------
export async function raid(world, listen) {
  if (DARK.suspicion < SUS_MAX) return 0;
  const critic = CUSTOMERS.find((c) => c.id === 'kitsune') || CUSTOMERS[0];
  sfx('rare');
  world.setView('kitchen');
  await world.customerIn(critic);
  toast('🚨 食評家突擊！懷疑度爆咗', 3000, 'bad');
  const a = await choose([
    { value: 'fight', el: h('div', { 'data-raid': 'fight' }, '😤 硬撐到底', h('small', {}, `連續答啱 2 條：彩池 x1.5`)) },
    { value: 'confess', el: h('div', { 'data-raid': 'confess' }, '🙇 認錯', h('small', {}, '彩池清零，評分 -0.1')) },
  ], { title: h('div', { class: 'panel-title' }, `🧐 食評家：「我要睇吓你嘅廚房。」彩池 💰 ${DARK.pot}`) });
  let win = a.value === 'fight';
  if (win) {
    for (let i = 0; i < 2 && win; i++) {
      const r = await askProbe(world, critic, listen, false, `🧐 食評家問題 ${i + 1} / 2`);
      win = r.right;
    }
  }
  let banked = 0;
  if (a.value === 'confess') {
    DARK.pot = 0; rate(-0.1); addSus(-SUS_MAX); addSus(1); DARK.raid = 'confess';
    toast('🙇 認咗錯，食評家搖頭離開', 2600);
  } else if (win) {
    DARK.pot = Math.round(DARK.pot * 1.5); rate(0.2); addSus(-SUS_MAX); addSus(1); DARK.raid = 'win';
    sfx('perfect'); toast(pick(REVIEWS.raidWin), 3000, 'rare');
    banked = bankPot();
  } else {
    DARK.pot = 0; rate(-0.3); addSus(-SUS_MAX); addSus(2); DARK.raid = 'lose';
    sfx('bad'); world.shake(0.5); toast(pick(REVIEWS.raidLose), 3000, 'bad');
  }
  DARK.combo = 1;
  save();
  renderDarkbar();
  await wait(900);
  world.customerOut();
  await wait(500);
  return banked;
}

// ---------- 秘密卡 ----------
const OUTCOME = { none: '冇人追問，紅利入袋', plain: '如實介紹，冇風險', honest: '老實交代，客人原諒', believe: '藉口成功，蒙混過關', expose: '被揭穿，今餐白做' };

export function secretCard(rec, report) {
  const n = dishName(rec, report.pitch);
  return h('div', { class: 'dark-report', 'data-secret': rec.id },
    h('div', { class: 'dark-tag' }, `後廚秘密 ${rec.number} · ${rec.shortcut}`),
    h('div', { class: 'dark-dish-heading' }, art(`dish_${rec.id}`, rec.yue), h('h3', {}, rec.yue)),
    h('div', { class: 'dark-scores' }, ...[['好味', report.taste], ['賣相', report.look], ['宣傳誇張度', report.hype]].map(([name, score]) => h('div', {}, h('b', {}, `${score}`), h('span', {}, name)))),
    h('p', {}, `你講嘅菜名：${n.yue}`),
    h('p', {}, `結果：${OUTCOME[report.outcome] || ''}`),
    h('p', { class: 'dark-truth' }, `真正做法：${rec.truth}`),
    h('p', {}, rec.gag),
    jpLine('中身{なかみ}は？', { yue: rec.lesson, voice: 'word' }));
}

// 第一次先彈秘密卡；之後淨係 toast
export async function revealDarkDish(rec, report) {
  const previous = S().darkSecrets[rec.id];
  S().darkSecrets[rec.id] = { ...report, bestTaste: Math.max(previous?.bestTaste || 0, report.taste), visits: (previous?.visits || 0) + 1 };
  save();
  if (previous) { toast(`🗂️ ${rec.yue}：${OUTCOME[report.outcome] || ''}`, 1800); return; }
  sfx('rare');
  await new Promise(resolve => {
    const footer = h('button', { class: 'btn primary big dark-control', onclick: () => card.close() }, '收低秘密卡，繼續出餐');
    const card = modal('新後廚秘密！', h('div', {}, secretCard(rec, report), h('div', { class: 'sub' }, '圖鑑入面可以再睇。')), { footer, onClose: resolve });
  });
}
