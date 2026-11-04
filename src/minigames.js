import { art, vocabArt } from './art.js';
// 煮食小遊戲。全部返回 Promise<score 0..1>
import { h, panel, jpLine, pop, shuffle, wait, hint } from './ui.js';
import { say, sfx } from './audio.js';
import { vocab } from './data/vocab.js';
import { S, srsAnswer, srsSeen } from './save.js';

function header(step) {
  const verb = step.verb ? vocab(step.verb) : null;
  return h('div', { class: 'mg-head' },
    jpLine(step.jp, { yue: step.yue, voice: 'cat' }),
    verb ? h('div', { class: 'verb-chip' }, vocabArt(verb), ' 新字 ', h('span', { class: 'jp-inline', html: verb.jp.replace(/([一-鿿]+)\{([^}]+)\}/g, '<ruby>$1<rt>$2</rt></ruby>') }), ` = ${verb.yue}`) : null,
  );
}

// ---------- 揀材料 ----------
export async function pick(step, world) {
  let mistakes = 0;
  const items = shuffle([...step.need, ...step.decoys]);
  const grid = h('div', { class: 'ing-grid' });
  const prompt = h('div', { class: 'pick-prompt' }, h('div', { class: 'pick-label' }, '🐾 聽小黑講…'));
  const cards = {};
  items.forEach((id) => {
    const v = vocab(id);
    const c = h('button', { class: 'ing' }, h('span', { class: 'emo' }, vocabArt(v)), h('span', { class: 'ing-yue' }, v.yue.replace(/（.*?）/g, '')));
    c.dataset.id = id;
    grid.append(c);
    cards[id] = c;
  });
  panel(header(step), prompt, grid);
  await say(step.jp, 'cat');

  for (let i = 0; i < step.need.length; i++) {
    const id = step.need[i];
    const v = vocab(id);
    srsSeen(id);
    prompt.innerHTML = '';
    grid.dataset.want = id;
    prompt.append(h('div', { class: 'pick-label' }, `請攞（${i + 1}/${step.need.length}）：`), jpLine(v.jp, { voice: 'word', size: 'big' }));
    say(v.jp, 'word');
    let wrongThis = false;
    await new Promise((res) => {
      const onClick = (e) => {
        const c = e.target.closest('.ing');
        if (!c || c.classList.contains('used')) return;
        if (c.dataset.id === id) {
          sfx('good');
          c.classList.add('used', 'ok');
          world.placeIngredient(id, i, step.need.length);
          srsAnswer(id, !wrongThis);
          grid.removeEventListener('click', onClick);
          res();
        } else {
          sfx('bad');
          mistakes++;
          wrongThis = true;
          c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake');
          const wv = vocab(c.dataset.id);
          hint(`呢個係「${wv.yue}」，日文叫 ${wv.jp.replace(/\{.*?\}/g, '')}`);
          say(wv.jp, 'word');
        }
      };
      grid.addEventListener('click', onClick);
    });
    await wait(250);
  }
  return Math.max(0.3, 1 - mistakes * 0.2);
}

// ---------- 撳準時（切 / 包）----------
export async function timing(step, world) {
  const rounds = step.rounds || 3;
  const bar = h('div', { class: 'tbar' });
  const zone = h('div', { class: 'tzone' });
  const sweet = h('div', { class: 'tsweet' });
  const needle = h('div', { class: 'tneedle' });
  zone.append(sweet);
  bar.append(zone, needle);
  const counter = h('div', { class: 'mg-count' });
  const tapBtn = h('button', { class: 'btn primary big tapzone' }, step.anim === 'chop' ? '🔪 切！' : '👆 撳！');
  panel(header(step), counter, bar, tapBtn);
  say(step.jp, 'cat');
  world.catFace('board');
  if (step.anim === 'chop') world.cat.holding('knife');

  let total = 0;
  for (let r = 0; r < rounds; r++) {
    counter.textContent = `${r + 1} / ${rounds}`;
    const w = step.zone * (1 - r * 0.12);
    const zx = 0.15 + Math.random() * (0.7 - w);
    zone.style.left = zx * 100 + '%';
    zone.style.width = w * 100 + '%';
    const speed = 0.9 + r * 0.25 + S().level * 0.03;
    let pos = 0, dir = 1, last = performance.now(), raf;
    const loop = (t) => {
      const dt = (t - last) / 1000; last = t;
      pos += dir * speed * dt;
      if (pos > 1) { pos = 1; dir = -1; } if (pos < 0) { pos = 0; dir = 1; }
      needle.style.left = pos * 100 + '%';
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    await new Promise((res) => { tapBtn.onclick = res; });
    cancelAnimationFrame(raf);
    world.cat.play(step.anim || 'chop', 0.25);
    sfx(step.anim === 'chop' ? 'chop' : 'pop');
    const center = zx + w / 2;
    const d = Math.abs(pos - center);
    let s;
    if (d < w * 0.17) { s = 1; pop('PERFECT!', 'perfect'); sfx('perfect'); }
    else if (d < w / 2) { s = 0.7; pop('GOOD', 'good'); sfx('good'); }
    else { s = 0.2; pop('MISS', 'miss'); }
    total += s;
    if (r === 0 && step.anim === 'chop' && world.workItems.children.length) world.showProp(step.add?.[0]);
    await wait(380);
  }
  world.cat.holding(null);
  if (step.add && step.anim !== 'chop') world.showProp(step.add[0]);
  return total / rounds;
}

// ---------- 狂撳（搓飯糰）----------
export async function mash(step, world) {
  const need = step.taps || 10, time = step.time || 5;
  let n = 0;
  const ring = h('div', { class: 'ring' }, h('div', { class: 'ring-in' }, art('verb_nigiru')));
  const timer = h('div', { class: 'mg-timer' }, h('i'));
  panel(header(step), timer, ring);
  say(step.jp, 'cat');
  world.catFace('board');
  let started = false, done = false, t0 = 0;
  const res = await new Promise((resolve) => {
    let raf;
    const tick = () => {
      const el = (performance.now() - t0) / 1000;
      timer.firstChild.style.width = Math.max(0, 1 - el / time) * 100 + '%';
      if (el >= time && !done) { done = true; resolve(n / need); return; }
      raf = requestAnimationFrame(tick);
    };
    ring.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (done) return;
      if (!started) { started = true; t0 = performance.now(); raf = requestAnimationFrame(tick); }
      n++;
      sfx('pop');
      world.cat.play(step.anim || 'press', 0.18);
      ring.style.setProperty('--p', Math.min(1, n / need));
      ring.classList.remove('hit'); void ring.offsetWidth; ring.classList.add('hit');
      if (n >= need) {
        done = true; cancelAnimationFrame(raf);
        const left = time - (performance.now() - t0) / 1000;
        resolve(left > time * 0.4 ? 1 : 0.85);
      }
    });
  });
  if (step.add) world.showProp(step.add[0]);
  if (res >= 1) { pop('PERFECT!', 'perfect'); sfx('perfect'); } else if (res >= 0.7) { pop('GOOD', 'good'); sfx('good'); } else { pop('OK', 'miss'); }
  await wait(450);
  return Math.max(0.3, Math.min(1, res));
}

// ---------- 畫圈攪 ----------
export async function stir(step, world) {
  const turns = step.turns || 3;
  const pad = h('div', { class: 'stirpad' }, h('div', { class: 'stir-dot' }), h('div', { class: 'stir-label' }, '🥄 手指轉圈'));
  const prog = h('div', { class: 'mg-timer prog' }, h('i'));
  panel(header(step), prog, pad);
  say(step.jp, 'cat');
  world.catFace('stove');
  world.cat.holding('ladle');
  world.heat(true);
  if (step.add) world.showProp(step.add[0]);
  let acc = 0, lastA = null, t0 = null, lastQ = 0;
  const score = await new Promise((resolve) => {
    const move = (e) => {
      const r = pad.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
      if (Math.hypot(x, y) < 15) return;
      const a = Math.atan2(y, x);
      pad.querySelector('.stir-dot').style.transform = `rotate(${a}rad) translateX(${r.width * 0.36}px)`;
      if (lastA !== null) {
        let d = a - lastA;
        if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2;
        acc += Math.abs(d);
        if (!t0) t0 = performance.now();
        world.cat.setMode('stir');
        const q = Math.floor(acc / (Math.PI / 2));
        if (q > lastQ) { lastQ = q; sfx('bubble'); }
      }
      lastA = a;
      const p = acc / (turns * Math.PI * 2);
      prog.firstChild.style.width = Math.min(1, p) * 100 + '%';
      if (p >= 1) {
        pad.removeEventListener('pointermove', move);
        const secs = (performance.now() - t0) / 1000;
        resolve(secs < turns * 1.4 ? 1 : secs < turns * 2.5 ? 0.8 : 0.6);
      }
    };
    pad.addEventListener('pointerdown', (e) => { try { pad.setPointerCapture(e.pointerId); } catch {} lastA = null; });
    pad.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'touch') move(e); });
    pad.addEventListener('pointerup', () => { lastA = null; world.cat.setMode('idle'); });
  });
  world.cat.setMode('idle');
  world.cat.holding(null);
  world.heat(false);
  if (score >= 1) { pop('PERFECT!', 'perfect'); sfx('perfect'); } else { pop('GOOD', 'good'); sfx('good'); }
  await wait(450);
  return score;
}

// ---------- 長按控火 ----------
export async function hold(step, world) {
  const [lo, hi] = step.zone;
  const gauge = h('div', { class: 'gauge' }, h('div', { class: 'gzone', style: `bottom:${lo * 100}%;height:${(hi - lo) * 100}%` }), h('div', { class: 'gfill' }), h('div', { class: 'gtop' }, '🔥 滾瀉'));
  const btn = h('button', { class: 'btn primary big holdbtn' }, '🔥 長按加熱');
  const wrap = h('div', { class: 'hold-wrap' }, gauge, btn);
  panel(header(step), wrap);
  say(step.jp, 'cat');
  world.catFace('stove');
  if (step.add) world.showProp(step.add[0]);
  let v = 0, holding = false, last = performance.now(), raf, bubbleT = 0;
  const fill = gauge.querySelector('.gfill');
  const score = await new Promise((resolve) => {
    const loop = (t) => {
      const dt = (t - last) / 1000; last = t;
      if (holding) {
        v += dt * (0.32 + v * 0.35);
        bubbleT += dt;
        if (bubbleT > 0.25) { bubbleT = 0; sfx(v > hi ? 'boil' : 'bubble'); }
      }
      fill.style.height = Math.min(1, v) * 100 + '%';
      fill.classList.toggle('hot', v > hi);
      if (v >= 1) { finish(); return; }
      raf = requestAnimationFrame(loop);
    };
    const finish = () => {
      cancelAnimationFrame(raf);
      world.heat(false);
      world.cat.setMode('idle');
      const mid = (lo + hi) / 2;
      if (v >= lo && v <= hi) resolve(Math.abs(v - mid) < (hi - lo) * 0.2 ? 1 : 0.75);
      else resolve(0.3);
    };
    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault(); try { btn.setPointerCapture(e.pointerId); } catch {}
      if (holding) return;
      holding = true; last = performance.now(); raf = requestAnimationFrame(loop);
      world.heat(true); world.cat.holding(step.anim === 'pour' ? null : 'ladle'); world.cat.setMode(step.anim === 'pour' ? 'idle' : 'stir');
      if (step.anim === 'pour') world.cat.play('pour', 0.8);
    });
    btn.addEventListener('pointerup', () => { if (holding) { holding = false; finish(); } });
    btn.addEventListener('pointercancel', () => { if (holding) { holding = false; finish(); } });
  });
  world.cat.holding(null);
  if (score >= 1) { pop('PERFECT!', 'perfect'); sfx('perfect'); }
  else if (score >= 0.7) { pop('GOOD', 'good'); sfx('good'); }
  else { pop(v >= 1 ? '滾瀉！' : '未夠熱', 'miss'); sfx('bad'); hint(step.tip, 3000); }
  await wait(500);
  return score;
}

export const MINIGAMES = { pick, timing, mash, stir, hold };
