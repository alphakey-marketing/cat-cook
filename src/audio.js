// 聲音：VOICEVOX 音檔 + 合成音效 + 背景音樂
import { audioKey, toSpeech } from './jp.js';
import { S } from './save.js';

let ctx = null;
let master, sfxGain, bgmGain, voiceGain;
const cache = new Map();
let currentVoice = null;
const BGM_LEVEL = 0.26, BGM_DUCK = 0.08;
let bgmBus = null; // 音樂專用：lowpass → 乾 + 殘響
let sfxHook = null;
// 畀 main 掛手感效果（震鏡頭 / 擠壓）喺音效上
export function onSfx(fn) { sfxHook = fn; }

export function unlockAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
  sfxGain = ctx.createGain(); sfxGain.gain.value = 0.5; sfxGain.connect(master);
  bgmGain = ctx.createGain(); bgmGain.gain.value = 0.0; bgmGain.connect(master);
  buildBGMBus();
  voiceGain = ctx.createGain(); voiceGain.gain.value = 1.0; voiceGain.connect(master);
  startBGM();
  // 切 tab / 鎖屏：暫停音訊引擎（慳電）
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend(); else ctx.resume();
  });
}

async function loadBuf(key) {
  if (cache.has(key)) return cache.get(key);
  const p = fetch(`${import.meta.env.BASE_URL}audio/${key}.mp3`)
    .then((r) => { if (!r.ok) throw new Error('404'); return r.arrayBuffer(); })
    .then((b) => ctx.decodeAudioData(b))
    .catch(() => null);
  cache.set(key, p);
  return p;
}

// 預載音檔；返回 Promise（載完 resolve，冇 ctx 就即刻 resolve）
export function preload(jp, voice) { return ctx ? loadBuf(audioKey(jp, voice)) : Promise.resolve(null); }

// 講一句日文。返回 Promise（講完 resolve）
export async function say(jp, voice = 'word', rate = 1) {
  if (!ctx) return;
  stopVoice();
  const buf = await loadBuf(audioKey(jp, voice));
  if (buf) {
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    src.connect(voiceGain);
    duck(true);
    src.start();
    currentVoice = src;
    return new Promise((res) => { src.onended = () => { duck(false); if (currentVoice === src) currentVoice = null; res(); }; });
  }
  // 冇音檔：用瀏覽器 TTS 頂住
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(toSpeech(jp));
    u.lang = 'ja-JP';
    u.rate = 0.9 * rate;
    speechSynthesis.speak(u);
    return new Promise((res) => { u.onend = res; setTimeout(res, 4000); });
  }
}

export function stopVoice() {
  if (currentVoice) { try { currentVoice.stop(); } catch (e) { /* */ } currentVoice = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

function duck(on) {
  if (!bgmGain || !S().settings.bgm) return;
  bgmGain.gain.setTargetAtTime(on ? BGM_DUCK : BGM_LEVEL, ctx.currentTime, 0.1);
}

// ===== 音效（合成，唔使檔案）=====
function tone(freq, dur, { type = 'sine', vol = 0.3, at = 0, slide = 0, out = null } = {}) {
  const t = ctx.currentTime + at;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(out || sfxGain);
  o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, { vol = 0.3, freq = 2000, q = 1, at = 0, type = 'bandpass' } = {}) {
  const t = ctx.currentTime + at;
  const len = Math.floor(ctx.sampleRate * dur);
  const b = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const s = ctx.createBufferSource(); s.buffer = b;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain(); g.gain.value = vol;
  s.connect(f); f.connect(g); g.connect(sfxGain);
  s.start(t);
}

export function sfx(name) {
  sfxHook?.(name);
  if (!ctx || !S().settings.sfx) return;
  switch (name) {
    case 'tap': tone(880, 0.08, { type: 'triangle', vol: 0.2 }); break;
    case 'good': tone(784, 0.12, { type: 'triangle' }); tone(1175, 0.2, { type: 'triangle', at: 0.08 }); break;
    case 'perfect': [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.18, { type: 'triangle', vol: 0.25, at: i * 0.06 })); break;
    case 'bad': tone(220, 0.25, { type: 'square', vol: 0.12, slide: 0.7 }); break;
    case 'coin': tone(1319, 0.08, { type: 'square', vol: 0.1 }); tone(1760, 0.25, { type: 'square', vol: 0.1, at: 0.07 }); break;
    case 'chop': noise(0.08, { vol: 0.6, freq: 3000, q: 0.8 }); tone(140, 0.06, { vol: 0.3 }); break;
    case 'pop': tone(500, 0.1, { slide: 2, vol: 0.25 }); break;
    case 'bubble': tone(300 + Math.random() * 300, 0.08, { slide: 1.8, vol: 0.12 }); break;
    case 'whoosh': noise(0.3, { vol: 0.25, freq: 800, q: 0.5 }); break;
    case 'boil': for (let i = 0; i < 4; i++) tone(200 + Math.random() * 200, 0.1, { slide: 2, vol: 0.1, at: i * 0.07 }); break;
    case 'level': [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.3, { type: 'triangle', vol: 0.22, at: i * 0.09 })); break;
    case 'meow': tone(700, 0.35, { type: 'sawtooth', vol: 0.06, slide: 1.4 }); tone(980, 0.3, { type: 'sine', vol: 0.1, at: 0.15, slide: 0.6 }); break;
    case 'purr': for (let i = 0; i < 10; i++) noise(0.05, { vol: 0.25, freq: 120, q: 2, at: i * 0.07, type: 'lowpass' }); break;
    case 'ding': tone(2093, 0.9, { type: 'sine', vol: 0.22 }); tone(2637, 0.7, { type: 'sine', vol: 0.12, at: 0.02 }); break;
    case 'door': tone(1568, 0.5, { vol: 0.12 }); tone(1975, 0.6, { vol: 0.1, at: 0.15 }); break;
    case 'rare': [1047, 1319, 1568, 2093, 1568, 2093].forEach((f, i) => tone(f, 0.25, { type: 'triangle', vol: 0.2, at: i * 0.07 })); break;
  }
}

// ===== 背景音樂 =====
// 4 小節和弦循環（Dmaj7 – Bm7 – Gmaj7 – A7sus4），用 lookahead scheduler 排期，
// 有低音、鋪底和弦、琶音、會重複嘅旋律，仲有輕輕嘅木魚節奏。
// 三種情緒：kitchen（悠閒）／ cook（輕快）／ rest（和風、慢）
const N = (n) => 440 * Math.pow(2, (n - 69) / 12); // MIDI → Hz
const PROG = [
  { root: 38, chord: [62, 66, 69, 73], mel: [74, 76, 78, 81, 73] },  // Dmaj7
  { root: 35, chord: [59, 62, 66, 69], mel: [74, 76, 78, 81, 71] },  // Bm7
  { root: 43, chord: [59, 62, 67, 71], mel: [74, 71, 76, 78, 79] },  // Gmaj7
  { root: 45, chord: [62, 64, 67, 69], mel: [76, 74, 69, 81, 79] },  // A7sus4
];
const MOODS = {
  kitchen: { bpm: 78, arp: 0.55, mel: 0.5, perc: 0, pad: 1, oct: 0 },
  cook:    { bpm: 102, arp: 0.8, mel: 0.55, perc: 1, pad: 0.6, oct: 0 },
  rest:    { bpm: 68, arp: 0.35, mel: 0.6, perc: 0, pad: 1.2, oct: 0 },
};
let mood = 'kitchen', moodWant = 'kitchen';
let bgmTimer = null, nextT = 0, stepI = 0, lastPhrase = [];

function buildBGMBus() {
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3400; lp.Q.value = 0.3;
  const dry = ctx.createGain(); dry.gain.value = 0.85;
  const verb = ctx.createConvolver();
  const len = Math.floor(ctx.sampleRate * 1.8), ir = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
  verb.buffer = ir;
  const wet = ctx.createGain(); wet.gain.value = 0.35;
  lp.connect(dry); dry.connect(bgmGain);
  lp.connect(verb); verb.connect(wet); wet.connect(bgmGain);
  bgmBus = lp;
}

// 一粒撥弦音（kalimba / 電鋼琴感）
function pluck(f, t, dur, vol) {
  for (const [mul, v, type, d] of [[1, 1, 'triangle', dur], [2, 0.25, 'sine', dur * 0.5], [4, 0.06, 'sine', dur * 0.2]]) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = f * mul;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol * v, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0005, t + d);
    o.connect(g); g.connect(bgmBus);
    o.start(t); o.stop(t + d + 0.05);
  }
}
function padNote(f, t, dur, vol) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5) * 8;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + dur * 0.35);
  g.gain.linearRampToValueAtTime(0.0005, t + dur);
  o.connect(g); g.connect(bgmBus);
  o.start(t); o.stop(t + dur + 0.05);
}
function bassNote(f, t, dur, vol) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.value = f;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
  o.connect(g); g.connect(bgmBus);
  o.start(t); o.stop(t + dur + 0.05);
}
function woodblock(t, vol, hi = false) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(hi ? 1500 : 1000, t);
  o.frequency.exponentialRampToValueAtTime(hi ? 900 : 600, t + 0.05);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0005, t + 0.07);
  o.connect(g); g.connect(bgmBus);
  o.start(t); o.stop(t + 0.1);
}

// 排一個八分音符
function scheduleStep(t) {
  const m = MOODS[mood];
  const e = 30 / m.bpm;               // 八分音符長度（秒）
  const bar = Math.floor(stepI / 8) % 4, st = stepI % 8;
  const P = PROG[bar];
  if (st === 0) {
    mood = moodWant;                  // 情緒切換只喺小節線發生，唔會斷
    bassNote(N(P.root), t, e * 7, 0.55);
    P.chord.forEach((n, i) => padNote(N(n - 12), t + i * 0.03, e * 8.5, 0.07 * m.pad));
  }
  if (st === 4) bassNote(N(P.root + 7), t, e * 3, 0.35);
  // 琶音：8 步入面揀幾步彈
  const arpSteps = [0, 2, 3, 5, 6, 7];
  if (arpSteps.includes(st) && Math.random() < m.arp + (st === 0 ? 1 : 0)) {
    const n = P.chord[(st * 3 + bar) % P.chord.length];
    pluck(N(n), t, e * 4, 0.16);
  }
  // 旋律：偶數小節生新句，奇數小節重複（偶爾變奏），所以聽落有「記憶點」
  if (st % 2 === 0 || st === 3 || st === 7) {
    let n = null;
    if (bar % 2 === 0) {
      if (Math.random() < m.mel || st === 0) n = P.mel[Math.floor(Math.random() * P.mel.length)];
      lastPhrase[st] = n;
    } else {
      n = lastPhrase[st] ?? null;
      if (n != null && Math.random() < 0.2) n = P.mel[Math.floor(Math.random() * P.mel.length)];
    }
    if (n != null) pluck(N(n), t, e * 3, 0.2);
  }
  if (m.perc) {
    if (st % 2 === 1) woodblock(t, 0.09, st === 3 || st === 7);
    if (st === 0 || st === 4) bassNote(70, t, 0.12, 0.5); // 軟 kick
  }
  stepI++;
  return e;
}

function startBGM() {
  nextT = ctx.currentTime + 0.2;
  bgmTimer = setInterval(() => {
    if (document.hidden) return;
    // 如果引擎停咗好耐（背景），重新對時，免得一次過排好多
    if (nextT < ctx.currentTime - 0.5) nextT = ctx.currentTime + 0.1;
    while (nextT < ctx.currentTime + 0.25) {
      if (S().settings.bgm) nextT += scheduleStep(nextT);
      else nextT += 0.25;
    }
  }, 80);
  setBGM(S().settings.bgm);
}
export function setBGM(on) {
  if (!bgmGain) return;
  bgmGain.gain.setTargetAtTime(on ? BGM_LEVEL : 0, ctx.currentTime, 0.3);
}
// 切換音樂情緒：kitchen / cook / rest
export function setMood(name) { if (MOODS[name]) moodWant = name; }
