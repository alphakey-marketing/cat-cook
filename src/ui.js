import { decorateArt } from './art.js';
// DOM 介面工具
import { toHTML, toRomaji } from './jp.js';
import { say, sfx } from './audio.js';
import { S, xpForLevel } from './save.js';

export const $ = (s, r = document) => r.querySelector(s);
export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'style') el.style.cssText = v;
    else el.setAttribute(k, v);
  }
  for (const c of kids.flat()) if (c != null) el.append(c.nodeType ? c : document.createTextNode(c));
  decorateArt(el);
  return el;
}
export const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// 套用設定（振假名 / 羅馬字 / 廣東話）
export function applySettings() {
  const st = S().settings;
  document.body.classList.toggle('no-furi', !st.furigana);
  document.body.classList.toggle('no-roma', !st.romaji);
  document.body.classList.toggle('no-yue', !st.yue);
}

// 一句日文：振假名 + 羅馬字 + 廣東話 + 🔊
export function jpLine(jp, { yue = '', voice = 'word', size = '', hidden = false, autoplay = false } = {}) {
  const el = h('div', { class: `jp ${size}` });
  const text = h('div', { class: 'jp-text', html: toHTML(jp) });
  const roma = h('div', { class: 'jp-roma' }, toRomaji(jp));
  const y = yue ? h('div', { class: 'jp-yue' }, yue) : null;
  const btn = h('button', { class: 'spk', 'aria-label': '再聽', onclick: (e) => { e.stopPropagation(); sfx('tap'); say(jp, voice); } }, '🔊');
  const body = h('div', { class: 'jp-body' }, text, roma, y);
  el.append(body, btn);
  if (hidden) {
    el.classList.add('veiled');
    body.addEventListener('click', () => el.classList.remove('veiled'), { once: true });
  }
  if (autoplay) say(jp, voice);
  return el;
}

// ===== HUD =====
export function renderHUD() {
  const s = S();
  $('#lv').textContent = s.level;
  const lo = xpForLevel(s.level - 1), hi = xpForLevel(s.level);
  $('#xpbar i').style.width = `${Math.max(0, Math.min(1, (s.xp - lo) / (hi - lo))) * 100}%`;
  $('#coins b').textContent = s.coins;
  $('#streak b').textContent = s.streak;
  $('#streak').classList.toggle('hot', s.streak >= 2);
}
export function showHUD(on) { $('#hud').classList.toggle('show', on); }

// ===== 底部 panel =====
export function panel(...kids) {
  const p = $('#panel');
  p.innerHTML = '';
  p.append(...kids);
  p.classList.add('show');
  return p;
}
export function hidePanel() { $('#panel').classList.remove('show'); }

// 揀一個。options: [{ el | label, value, cls }]
export function choose(options, { title = null, cols = 1, extra = null } = {}) {
  return new Promise((res) => {
    const grid = h('div', { class: `choices cols${cols}` });
    let done = false; // 揀咗就鎖，唔俾撳多次
    options.forEach((o) => {
      const b = h('div', { class: `choice ${o.cls || ''}`, role: 'button', tabindex: '0' });
      if (o.el) b.append(o.el); else { b.innerHTML = o.label; decorateArt(b); }
      b.addEventListener('click', () => { if (done) return; done = true; sfx('tap'); res({ value: o.value, button: b, grid }); });
      grid.append(b);
    });
    panel(...[title, extra, grid].filter(Boolean));
  });
}

// 撳一個掣繼續
export function next(label = '繼續 ▶', ...above) {
  return new Promise((res) => {
    const b = h('button', { class: 'btn primary big', onclick: () => { sfx('tap'); res(); } }, label);
    panel(...above, b);
  });
}

// ===== 對白泡泡 =====
const bubbles = new Set();
export function bubble(world, who, jp, yue, voice, { hidden = false, play = true } = {}) {
  clearBubble(who);
  const inner = h('div', { class: `bubble ${who}` });
  inner.append(jpLine(jp, { yue, voice, hidden }));
  const wrap = h('div', { class: 'bubble-anchor', 'data-who': who }, inner);
  $('#bubbles').append(wrap);
  bubbles.add(wrap);
  wrap._world = world;
  const get = who === 'cat' ? () => world.cat.head : () => world.customer?.userData.head;
  world.anchor(wrap, get, who === 'cat' ? 0.75 : 0.5);
  requestAnimationFrame(() => inner.classList.add('in'));
  if (play) {
    if (who === 'cat') world.cat.setMode('talk');
    return say(jp, voice).then(() => { if (who === 'cat' && world.cat.mode === 'talk') world.cat.setMode('idle'); });
  }
  return Promise.resolve();
}
export function clearBubble(who) {
  for (const b of [...bubbles]) if (!who || b.dataset.who === who) { b._world.unanchor(b); b.remove(); bubbles.delete(b); }
}

// 小黑廣東話提示（唔讀出聲）
export function hint(text, ms = 2600) {
  const el = $('#hint');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el._t);
  if (ms) el._t = setTimeout(() => el.classList.remove('show'), ms);
}
export function hideHint() { $('#hint').classList.remove('show'); }

export function toast(html, ms = 2200, cls = '') {
  const t = h('div', { class: `toast ${cls}`, html });
  $('#toasts').append(t);
  setTimeout(() => t.classList.add('out'), ms);
  setTimeout(() => t.remove(), ms + 500);
}

// 大字特效（PERFECT 之類）
export function pop(text, cls = '') {
  const t = h('div', { class: `popword ${cls}` }, text);
  document.body.append(t);
  setTimeout(() => t.remove(), 900);
}

// 金幣飛去 HUD
export function coinFly(n, from = { x: innerWidth / 2, y: innerHeight * 0.4 }) {
  const target = $('#coins').getBoundingClientRect();
  const count = Math.min(12, Math.max(3, Math.round(n / 15)));
  for (let i = 0; i < count; i++) {
    const c = h('div', { class: 'flycoin' }, '🪙');
    c.style.left = from.x + 'px'; c.style.top = from.y + 'px';
    document.body.append(c);
    const dx = (Math.random() - 0.5) * 120, dy = -40 - Math.random() * 60;
    c.animate([
      { transform: 'translate(0,0) scale(1)' },
      { transform: `translate(${dx}px,${dy}px) scale(1.3)`, offset: 0.35 },
      { transform: `translate(${target.x + 10 - from.x}px,${target.y + 8 - from.y}px) scale(0.6)` },
    ], { duration: 700 + i * 60, easing: 'cubic-bezier(.5,0,.6,1)' }).onfinish = () => {
      c.remove(); sfx('coin');
      $('#coins').classList.remove('bump'); void $('#coins').offsetWidth; $('#coins').classList.add('bump');
    };
  }
}

// ===== Modal =====
export function modal(title, body, { onClose = null, wide = false } = {}) {
  const m = $('#modal');
  m.innerHTML = '';
  const close = () => { m.classList.remove('show'); onClose?.(); };
  const card = h('div', { class: `card ${wide ? 'wide' : ''}` },
    h('div', { class: 'card-head' }, h('h2', { html: title }), h('button', { class: 'x', onclick: () => { sfx('tap'); close(); } }, '✕')),
    h('div', { class: 'card-body' }, body));
  decorateArt(card);
  m.append(card);
  m.classList.add('show');
  m.onclick = (e) => { if (e.target === m) close(); };
  return { close, card };
}
export function closeModal() { $('#modal').classList.remove('show'); }

export function fade(fn) {
  const f = $('#fade');
  f.classList.add('on');
  return wait(520).then(async () => { await fn(); await wait(80); f.classList.remove('on'); await wait(520); });
}

export function shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
export const pick = (a) => a[Math.floor(Math.random() * a.length)];
