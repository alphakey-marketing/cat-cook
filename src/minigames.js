import { art, vocabArt } from './art.js';
// 煮食小遊戲。全部返回 Promise<score 0..1>
import { h, panel, jpLine, pop, shuffle, wait, hint, next } from './ui.js';
import { gameNow, isPaused, playActivity } from './gameplay.js';
import { say, sfx } from './audio.js';
import { vocab } from './data/vocab.js';
import { S, srsAnswer, srsSeen } from './save.js';
import { toHTML } from './jp.js';
import { DARK } from './darkstate.js';
import { jpLevel } from './data/phrases.js';

function header(step, instruction = '') {
  const verb = step.verb ? vocab(step.verb) : null;
  return h('div', { class: 'mg-head' },
    jpLine(step.jp, { yue: step.yue, voice: 'cat' }),
    verb ? h('div', { class: 'verb-chip' }, vocabArt(verb), ' 新字 ', h('span', { class: 'jp-inline', html: verb.jp.replace(/([一-鿿]+)\{([^}]+)\}/g, '<ruby>$1<rt>$2</rt></ruby>') }), ` = ${verb.yue}`) : null,
    instruction ? h('div', { class: 'mg-help' }, instruction) : null,
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
    // 冇專屬圖嘅詞（后備 💬）：卡面改用大字日文，字幕被隱藏都睇得到
    const noArt = v.textIcon && v.emoji === '💬';
    const face = noArt ? h('span', { class: 'emo ing-jp', html: toHTML(v.jp) }) : h('span', { class: 'emo' }, vocabArt(v));
    const c = h('button', { class: 'ing' }, face, h('span', { class: 'ing-yue' }, v.yue.replace(/（.*?）/g, '')));
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
        if (isPaused() || !c || c.classList.contains('used')) return;
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
  panel(header(step, '指針入綠色區時撳掣；深綠色最準！'), counter, bar, tapBtn);
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
    let pos = 0, dir = 1, last = gameNow(), raf;
    const loop = () => {
      const t = gameNow();
      const dt = (t - last) / 1000; last = t;
      pos += dir * speed * dt;
      if (pos > 1) { pos = 1; dir = -1; } if (pos < 0) { pos = 0; dir = 1; }
      needle.style.left = pos * 100 + '%';
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    await new Promise((res) => { tapBtn.onclick = () => { if (!isPaused()) res(); }; });
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
  const ring = h('button', { class: 'ring', 'aria-label': `連撳飯糰 ${need} 次` }, h('div', { class: 'ring-in' }, art('verb_nigiru')));
  const timer = h('div', { class: 'mg-timer' }, h('i'));
  const counter = h('div', { class: 'mg-count', 'aria-live': 'polite' }, `0 / ${need}`);
  panel(header(step, `連撳飯糰 ${need} 次！第一下先開始 ${time} 秒倒數。`), counter, timer, ring);
  say(step.jp, 'cat');
  world.catFace('board');
  let started = false, done = false, t0 = 0;
  const res = await new Promise((resolve) => {
    let raf;
    const tick = () => {
      if (isPaused()) { raf = requestAnimationFrame(tick); return; }
      const el = (gameNow() - t0) / 1000;
      timer.firstChild.style.width = Math.max(0, 1 - el / time) * 100 + '%';
      if (el >= time && !done) { done = true; resolve(n / need); return; }
      raf = requestAnimationFrame(tick);
    };
    ring.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (done || isPaused()) return;
      if (!started) { started = true; t0 = gameNow(); raf = requestAnimationFrame(tick); }
      n++;
      counter.textContent = `${n} / ${need}`;
      sfx('pop');
      world.cat.play(step.anim || 'press', 0.18);
      ring.style.setProperty('--p', Math.min(1, n / need));
      ring.classList.remove('hit'); void ring.offsetWidth; ring.classList.add('hit');
      if (n >= need) {
        done = true; cancelAnimationFrame(raf);
        const left = time - (gameNow() - t0) / 1000;
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
  panel(header(step, `按住圓盤畫 ${turns} 個圈，順時針或逆時針都得。`), prog, pad);
  say(step.jp, 'cat');
  world.catFace('stove');
  world.cat.holding('ladle');
  world.heat(true);
  if (step.add) world.showProp(step.add[0]);
  let acc = 0, lastA = null, t0 = null, lastQ = 0;
  const score = await new Promise((resolve) => {
    const move = (e) => {
      if (isPaused()) { lastA = null; return; }
      const r = pad.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
      if (Math.hypot(x, y) < 15) return;
      const a = Math.atan2(y, x);
      pad.querySelector('.stir-dot').style.transform = `rotate(${a}rad) translateX(${r.width * 0.36}px)`;
      if (lastA !== null) {
        let d = a - lastA;
        if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2;
        acc += Math.abs(d);
        if (!t0) t0 = gameNow();
        world.cat.setMode('stir');
        const q = Math.floor(acc / (Math.PI / 2));
        if (q > lastQ) { lastQ = q; sfx('bubble'); }
      }
      lastA = a;
      const p = acc / (turns * Math.PI * 2);
      prog.firstChild.style.width = Math.min(1, p) * 100 + '%';
      if (p >= 1) {
        pad.removeEventListener('pointermove', move);
        const secs = (gameNow() - t0) / 1000;
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
  panel(header(step, '長按加熱，升到綠色區就放手！暫停後要再長按。'), wrap);
  say(step.jp, 'cat');
  world.catFace('stove');
  if (step.add) world.showProp(step.add[0]);
  let v = 0, holding = false, last = gameNow(), raf, bubbleT = 0;
  const onPause = () => { holding = false; cancelAnimationFrame(raf); world.heat(false); world.cat.setMode('idle'); };
  document.addEventListener('gamepause', onPause);
  const fill = gauge.querySelector('.gfill');
  const score = await new Promise((resolve) => {
    const loop = () => {
      const t = gameNow();
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
      if (holding || isPaused()) return;
      holding = true; last = gameNow(); raf = requestAnimationFrame(loop);
      world.heat(true); world.cat.holding(step.anim === 'pour' ? null : 'ladle'); world.cat.setMode(step.anim === 'pour' ? 'idle' : 'stir');
      if (step.anim === 'pour') world.cat.play('pour', 0.8);
    });
    btn.addEventListener('pointerup', () => { if (holding) { holding = false; finish(); } });
    btn.addEventListener('pointercancel', () => { if (holding) { holding = false; finish(); } });
  });
  document.removeEventListener('gamepause', onPause);
  world.cat.holding(null);
  if (score >= 1) { pop('PERFECT!', 'perfect'); sfx('perfect'); }
  else if (score >= 0.7) { pop('GOOD', 'good'); sfx('good'); }
  else { pop(v >= 1 ? '滾瀉！' : '未夠熱', 'miss'); sfx('bad'); hint(step.tip, 3000); }
  await wait(500);
  return score;
}

// A short game countdown, deliberately separate from real reheating instructions.
export async function microwave(step, world) {
  world.useStation('microwave');
  const display = h('div', { class: 'micro-display', 'aria-live': 'polite' }, '00:03');
  const start = h('button', { class: 'btn primary big dark-control' }, '放好食物，開始翻熱');
  panel(header(step), h('div', { class: 'micro-panel' }, h('div', { class: 'micro-window' }, '▤', display), h('div', { class: 'sub' }, step.tip)), start);
  await new Promise(resolve => start.addEventListener('click', resolve, { once: true }));
  start.disabled = true;
  for (let seconds = 3; seconds > 0; seconds--) {
    display.textContent = `00:0${seconds}`;
    world.microwaveLight(true);
    await wait(650);
  }
  world.microwaveLight(false);
  display.textContent = '叮！'; sfx('good');
  await wait(300);
  return 1;
}

// 遮掩：客人偷望三次，喺佢望過嚟嗰下撳掣；級數越高，窗口越短
export async function cover(step) {
  const win = [1100, 850, 650][jpLevel()] || 1100;
  const eye = h('div', { class: 'cover-eye' }, '😺');
  const note = h('p', {}, '客人偷望前會出現「？」，即刻撳掣！');
  const btn = h('button', { class: 'btn primary big dark-control', 'data-cover': 'btn' }, step.btn);
  let alert = false, hit = false;
  btn.addEventListener('click', () => { if (alert && !hit) { hit = true; sfx('good'); } else sfx('tap'); });
  panel(header(step), eye, note, btn);
  let ok = 0;
  for (let i = 0; i < 3; i++) {
    await wait(700 + Math.random() * 900);
    alert = true; hit = false;
    eye.textContent = '😳❓';
    await wait(win);
    alert = false;
    if (hit) { ok++; note.textContent = step.ok; }
    else { DARK.suspicion++; eye.textContent = '🤨'; note.textContent = step.bad; sfx('bad'); }
    await wait(600);
    eye.textContent = '😺';
  }
  return ok === 3 ? 1 : ok === 2 ? 0.8 : ok === 1 ? 0.6 : 0.4;
}

export async function season(step) {
  let level = 0;
  const target = 2 + Math.floor(Math.random() * 2); // 2 或 3 格先啱味
  const meter = h('div', { class: 'season-meter', 'aria-live': 'polite' });
  const note = h('p', {}, '先試味，再決定要唔要補。');
  const add = h('button', { class: 'btn dark-control', 'data-season': 'add' }, '加一格調味');
  const taste = h('button', { class: 'btn dark-control', 'data-season': 'taste' }, '試味');
  const serve = h('button', { class: 'btn primary big dark-control', 'data-season': 'serve' }, '確認出餐');
  const draw = () => { meter.textContent = `${'●'.repeat(level)}${'○'.repeat(5 - level)}　${level} / 5`; add.disabled = level >= 5; };
  draw();
  add.addEventListener('click', () => { if (level < 5) { level++; draw(); note.textContent = '加咗調味，試一啖先。'; } });
  taste.addEventListener('click', () => { note.textContent = level === target ? '啱啱好，仲食到蛋香同飯香！' : level < target ? '味道仲有啲淡。' : '調味過重，蓋過食材味喇。'; sfx('tap'); });
  panel(header(step), meter, note, h('div', { class: 'dark-actions' }, add, taste), h('div', { class: 'sub' }, step.tip), serve);
  await new Promise(resolve => serve.addEventListener('click', resolve, { once: true }));
  const score = Math.max(0.1, 1 - Math.abs(level - target) * 0.3);
  sfx(score >= 0.9 ? 'perfect' : 'bad');
  return score;
}

// Requests test meaning through a kitchen action, rather than copying a Japanese word.
export async function request(step) {
  const actions = [
    { id: 'hot', icon: '♨️', label: '保持熱飲', detail: '用熱杯盛裝' },
    { id: 'iced', icon: '🧊', label: '加冰做凍飲', detail: '用凍杯盛裝' },
    { id: 'less_sugar', icon: '🥄', label: '減少糖量', detail: '只落半份糖' },
    { id: 'no_sugar', icon: '🚫', label: '唔加糖', detail: '保持無糖' },
  ];
  let mistakes = 0;
  srsSeen(step.request);
  for (;;) {
    const prompt = h('div', { class: 'mg-head' }, h('div', { class: 'panel-title' }, step.title || '客人想要點樣嘅飲品？'),
      jpLine(step.jp, { yue: jpLevel() === 0 ? step.yue : '', voice: step.voice || 'cat', hidden: jpLevel() > 0, autoplay: true }),
      h('div', { class: 'mg-help' }, '聽客人要求，揀實際做法。撳喇叭可以再聽。'));
    const result = await new Promise(resolve => {
      panel(prompt, h('div', { class: 'choices cols2 request-actions' }, shuffle(actions).map(a => h('button', {
        class: 'choice', 'data-request': a.id, onclick: () => { if (!isPaused()) resolve(a.id); },
      }, h('span', { class: 'request-icon' }, a.icon), h('b', {}, a.label), jpLevel() === 0 ? h('small', {}, a.detail) : null))));
    });
    if (result === step.request) {
      srsAnswer(step.request, mistakes === 0);
      sfx('good');
      const v = vocab(step.request);
      await next('做好喇，出餐！', h('div', { class: 'panel-title' }, '啱喇！客人嘅意思係：'), jpLine(v.jp, { yue: v.yue, voice: 'word', autoplay: true }));
      return Math.max(0.3, 1 - mistakes * 0.2);
    }
    mistakes++; sfx('bad'); hint('再聽一次：留意客人講緊冷熱，定係甜度。', 3500);
  }
}

export const MINIGAMES = Object.fromEntries(Object.entries({ pick, timing, mash, stir, hold, microwave, season, cover, request }).map(([key, fn]) => [key, (...args) => playActivity(fn, ...args)]));
