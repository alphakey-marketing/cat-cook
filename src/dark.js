import { h, choose, modal, jpLine } from './ui.js';
import { sfx } from './audio.js';
import { S, save } from './save.js';
import { PLATING, GARNISHES, HYPE, darkRatings, dishName } from './data/dark.js';
import { art } from './art.js';
import { toHTML } from './jp.js';

export async function dressDarkDish(rec, world) {
  const select = (items, title) => choose(items.map(item => ({ value: item, label: `${item.icon} ${item.label}` })), { title: h('div', { class: 'panel-title' }, title) });
  const plate = (await select(PLATING, '① 揀餐具：排場由呢度開始')).value;
  const garnish = (await select(GARNISHES, '② 擺盤：最後一點點綴')).value;
  world.styleDish(plate.id, garnish.id);
  // ③ 三級介紹：越浮誇賺越多，但客人越可能追問
  const opts = ['honest', 'mild', 'grand'].map(tier => {
    const n = dishName(rec, tier);
    return { value: tier, el: h('div', {}, h('b', { class: 'jp-inline', html: toHTML(n.jp) }), h('small', {}, `${HYPE[tier].label} · 收入 x${HYPE[tier].mult}`)) };
  });
  const pitch = (await choose(opts, { title: h('div', { class: 'panel-title' }, '③ 跟客人點介紹？（客人照你講嘅名睇）') })).value;
  return { plate, garnish, pitch };
}

export function darkReport(rec, taste, styling) {
  const ratings = darkRatings(taste, styling.plate, styling.garnish, styling.pitch);
  return { ...ratings, plate: styling.plate.id, garnish: styling.garnish.id, pitch: styling.pitch, outcome: 'none' };
}

// 追問後食客信唔信：suspicion = 遮掩失敗次數；how = bluff | deflect
export function bluffChance(tier, suspicion, how) {
  const base = how === 'bluff' ? 0.8 : 0.45;
  return Math.max(0.05, base - suspicion * 0.25 - (tier === 'grand' ? 0.15 : 0));
}

const OUTCOME = { none: '冇人追問', honest: '老實交代，客人原諒', believe: '成功蒙混過關', expose: '被揭穿，今晚白做' };

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

export async function revealDarkDish(rec, report) {
  sfx('rare');
  const previous = S().darkSecrets[rec.id];
  S().darkSecrets[rec.id] = { ...report, bestTaste: Math.max(previous?.bestTaste || 0, report.taste), visits: (previous?.visits || 0) + 1 };
  save();
  await new Promise(resolve => {
    const footer = h('button', { class: 'btn primary big dark-control', onclick: () => card.close() }, '收低秘密卡，繼續出餐');
    const card = modal('主廚秘密揭曉', h('div', {}, secretCard(rec, report), h('div', { class: 'sub' }, '越浮誇收入越高，但被揭穿就一毫都冇。')), { footer, onClose: resolve });
  });
}
