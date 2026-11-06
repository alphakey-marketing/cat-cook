import { art, vocabArt } from './art.js';
// 煮食小遊戲。全部返回 Promise<score 0..1>
import { h, panel, jpLine, pop, shuffle, pick as pickOne, wait, hint, next } from './ui.js';
import { gameNow, isPaused, playActivity } from './gameplay.js';
import { say, sfx, preload } from './audio.js';
import { vocab } from './data/vocab.js';
import { S, srsAnswer, srsSeen } from './save.js';
import { toHTML } from './jp.js';
import { DARK, addSus } from './darkstate.js';
import { TELLS, PERSONAS } from './data/dark.js';
import { renderDarkbar } from './dark.js';
import { jpLevel, hiVoice } from './data/phrases.js';

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

// ---------- 後廚紅綠燈（暗黑食堂）----------
// 按住 = 做見唔得光嘅嘢。客人間中講嘢：同朋友傾偈 = 冇事；
// 講嘢衝住你嚟 = 預兆，過一陣就轉頭望。望緊嗰陣仲按住 = 捉到（懷疑度 +1）。
// 零基礎有 ❓ 視覺提示；初學提示遲啲先出；N3 淨係靠聽。
export async function sneak(step, world) {
  const L = jpLevel();
  const P = DARK.persona || PERSONAS.tourist;
  const work = step.work || [4.5, 5.5, 6.5][L];   // 要按住幾多秒先做完
  const tellMs = [1500, 1200, 1000][L] * P.tell;
  const lookMs = 1300 * P.look;
  // 保證有預兆：Lv0 一次、Lv1 兩次、Lv2 三次（多疑客人 +1，最多 3）；第一次一定喺頭一半
  const nTells = Math.min(3, L + 1 + (P.turn >= 0.5 ? 1 : 0));
  const marks = { 1: [0.3], 2: [0.2, 0.55], 3: [0.15, 0.4, 0.65] }[nTells].map((m) => m + (Math.random() - 0.5) * 0.08);
  const limit = step.limit || Math.round(work * 2 + nTells * (tellMs + lookMs) / 1000 + 3); // 時限（秒）
  const voice = hiVoice(DARK.custId || 'usagi');
  const pool = (k) => TELLS[k].filter((x) => x.lv <= L);
  [...pool('safe'), ...pool('turn')].forEach((x) => preload(x.jp, voice));
  if (step.station) world.useStation(step.station);

  const face = h('div', { class: 'sneak-face' }, '🗣️');
  const status = h('div', { class: 'sneak-state' }, `${P.icon} ${P.name}同朋友傾緊偈`);
  const line = h('div', { class: 'sneak-line' });
  const cust = h('div', { class: 'sneak-cust', 'data-phase': 'idle' }, face, h('div', { class: 'sneak-talk' }, status, line));
  const prog = h('div', { class: 'mg-timer prog' }, h('i'));
  const timer = h('div', { class: 'mg-timer' }, h('i'));
  const bars = h('div', { class: 'sneak-bars' }, h('span', { title: '進度' }, '🍳'), prog, h('span', { title: '時間' }, '⏱️'), timer);
  const btn = h('button', { class: 'btn primary big holdbtn sneak-btn', 'data-sneak': 'hold' }, step.btn);
  const help = L === 0 ? '按住做嘢；客人講嘢衝你、見到 ❓ → 即刻放手！'
    : '按住做嘢：傾偈照做，講嘢衝你就即刻放手！';
  panel(header(step, help), cust, bars, btn).classList.add('sneak-panel');
  say(step.jp, 'cat');

  let holding = false, locked = false, started = false, finished = false;
  let tellIdx = 0, progress = 0, caught = 0, phase = 'away', t0 = 0, last = 0, nextLine = 0, turnAt = 0, lookUntil = 0, dingAt = 0, caughtThis = false;
  const setPhase = (p) => { phase = p; cust.dataset.phase = p; };
  const release = () => { holding = false; btn.classList.remove('on'); btn.textContent = step.btn; world.cat.setMode('idle'); if (step.ding) world.microwaveLight(false); };
  const onPause = () => release();
  document.addEventListener('gamepause', onPause);

  const score = await new Promise((resolve) => {
    let raf;
    const finish = (sc) => { if (finished) return; finished = true; cancelAnimationFrame(raf); release(); resolve(sc); };
    const getCaught = (why) => {
      caught++; caughtThis = true; locked = holding; release();
      addSus(1); renderDarkbar();
      sfx('bad'); world.shake(0.4);
      face.textContent = '🤨'; status.textContent = why;
    };
    const speak = (now, turn) => {
      const l = pickOne(pool(turn ? 'turn' : 'safe'));
      line.replaceChildren(jpLine(l.jp, { yue: L === 0 ? l.yue : '', voice }));
      say(l.jp, voice);
      if (turn) { setPhase('tell'); turnAt = now + tellMs; if (L === 0) face.textContent = '❓'; }
      else { face.textContent = '🗣️'; status.textContent = `${P.icon} 同朋友傾緊偈`; nextLine = now + (1200 + Math.random() * 1200) * P.gap; }
    };
    const loop = () => {
      const now = gameNow();
      const dt = (now - last) / 1000; last = now;
      if (phase === 'away' && !dingAt) {
        if (tellIdx < marks.length && progress >= marks[tellIdx]) { tellIdx++; speak(now, true); }
        else if (now >= nextLine) speak(now, false);
      }
      else if (phase === 'tell') {
        if (L === 1 && now >= turnAt - 350) face.textContent = '❓';
        if (now >= turnAt) { setPhase('look'); lookUntil = now + lookMs; caughtThis = false; face.textContent = '👀'; status.textContent = '客人望緊廚房！'; }
      } else if (phase === 'look') {
        if (holding && !caughtThis) getCaught(step.caught);
        if (now >= lookUntil) {
          setPhase('away'); face.textContent = '🗣️'; status.textContent = `${P.icon} 轉返去傾偈`; line.replaceChildren();
          nextLine = now + (900 + Math.random() * 900) * P.gap;
        }
      }
      if (holding && !dingAt) {
        // 預兆未出晒 / 客人未轉返去，唔俾做完
        progress = Math.min(tellIdx < marks.length || phase !== 'away' ? 0.97 : 1, progress + dt / work);
        if (progress >= 1) {
          if (step.ding) { dingAt = now + 450; release(); btn.disabled = true; btn.textContent = '⏳ 就嚟「叮」…'; }
          else return finish(caught ? 0.9 : 1);
        }
      }
      if (dingAt && now >= dingAt) {
        sfx('ding');
        if (phase === 'look') getCaught('「チン♪」——客人聽到晒！');
        return finish(caught ? 0.9 : 1);
      }
      const el = (now - t0) / 1000;
      prog.firstChild.style.width = progress * 100 + '%';
      timer.firstChild.style.width = Math.max(0, 1 - el / limit) * 100 + '%';
      cust.dataset.progress = progress.toFixed(2);
      if (el >= limit) return finish(Math.max(0.3, progress * 0.8));
      raf = requestAnimationFrame(loop);
    };
    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault(); try { btn.setPointerCapture(e.pointerId); } catch {}
      if (finished || isPaused() || locked || dingAt) return;
      if (!started) { started = true; t0 = last = gameNow(); nextLine = t0 + 900 + Math.random() * 600; raf = requestAnimationFrame(loop); }
      holding = true; btn.classList.add('on'); btn.textContent = `${step.btn.replace('按住：', '')}…`;
      world.cat.setMode('stir'); if (step.ding) world.microwaveLight(true);
      if (phase === 'look' && !caughtThis) getCaught(step.caught);
    });
    const up = () => { locked = false; if (holding) { release(); btn.textContent = `${step.hide}（放手中）`; } };
    btn.addEventListener('pointerup', up);
    btn.addEventListener('pointercancel', up);
  });
  document.removeEventListener('gamepause', onPause);
  if (finished && score >= 1) { pop('冇俾人發現！', 'perfect'); sfx('perfect'); }
  else if (score >= 0.9) { pop('做完…但俾人望到', 'good'); }
  else { pop('做唔切！', 'miss'); sfx('bad'); hint(`被捉 ${caught} 次；時間唔夠，味道會差啲`, 3000); }
  await wait(500);
  return score;
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

export const MINIGAMES = Object.fromEntries(Object.entries({ pick, timing, mash, stir, hold, sneak, season, request }).map(([key, fn]) => [key, (...args) => playActivity(fn, ...args)]));
