import { h, choose, modal, jpLine } from './ui.js';
import { sfx } from './audio.js';
import { S, save, srsSeen, srsAnswer } from './save.js';
import { PLATING, GARNISHES, darkRatings } from './data/dark.js';

export async function dressDarkDish(rec, world) {
  const select = (items, title) => choose(items.map(item => ({ value: item, label: `${item.icon} ${item.label}` })), { title: h('div', { class: 'panel-title' }, title) });
  const plate = (await select(PLATING, '① 揀餐具：排場由呢度開始')).value;
  const garnish = (await select(GARNISHES, '② 擺盤：最後一點點綴')).value;
  world.styleDish(plate.id, garnish.id);
  const pitch = (await choose([
    { value: 'honest', el: h('div', {}, '如實介紹', h('small', {}, rec.truth)) },
    { value: 'grand', el: h('div', {}, '浮誇菜名', h('small', {}, rec.pitch)) },
  ], { title: h('div', { class: 'panel-title' }, '③ 改菜名：你會點介紹？') })).value;
  srsSeen('moritsukeru'); srsAnswer('moritsukeru', true);
  return { plate, garnish, pitch };
}

export function darkReport(rec, taste, styling) {
  const ratings = darkRatings(taste, styling.plate, styling.garnish, styling.pitch);
  return { ...ratings, plate: styling.plate.id, garnish: styling.garnish.id, pitch: styling.pitch };
}

export function secretCard(rec, report) {
  return h('div', { class: 'dark-report', 'data-secret': rec.id },
    h('div', { class: 'dark-tag' }, `後廚秘密 ${rec.number} · ${rec.shortcut}`),
    h('h3', {}, rec.yue),
    h('div', { class: 'dark-scores' }, ...[['好味', report.taste], ['賣相', report.look], ['宣傳誇張度', report.hype]].map(([name, score]) => h('div', {}, h('b', {}, `${score}`), h('span', {}, name)))),
    h('p', {}, `菜名：${report.pitch === 'grand' ? rec.pitch : rec.yue}`),
    h('p', { class: 'dark-truth' }, `真正做法：${rec.truth}`),
    h('p', {}, rec.gag),
    jpLine('中身{なかみ}は？', { yue: rec.lesson, voice: 'word' }));
}

export async function revealDarkDish(rec, report) {
  sfx('rare');
  srsSeen('nakami'); srsAnswer('nakami', true);
  const previous = S().darkSecrets[rec.id];
  S().darkSecrets[rec.id] = { ...report, bestTaste: Math.max(previous?.bestTaste || 0, report.taste), visits: (previous?.visits || 0) + 1 };
  save();
  await new Promise(resolve => {
    const footer = h('button', { class: 'btn primary big dark-control', onclick: () => card.close() }, '收低秘密卡，繼續出餐');
    const card = modal('主廚秘密揭曉', h('div', {}, secretCard(rec, report), h('div', { class: 'sub' }, '誇張度係笑位指標；金幣同星級按口味計，唔會因為講大話而加成。')), { footer, onClose: resolve });
  });
}
