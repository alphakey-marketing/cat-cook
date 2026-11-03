// 聲音：VOICEVOX 音檔 + 合成音效 + 背景音樂
import { audioKey, toSpeech } from './jp.js';
import { S } from './save.js';

let ctx = null;
let master, sfxGain, bgmGain, voiceGain;
const cache = new Map();
let currentVoice = null;

export function unlockAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
  sfxGain = ctx.createGain(); sfxGain.gain.value = 0.5; sfxGain.connect(master);
  bgmGain = ctx.createGain(); bgmGain.gain.value = 0.0; bgmGain.connect(master);
  voiceGain = ctx.createGain(); voiceGain.gain.value = 1.0; voiceGain.connect(master);
  startBGM();
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

export function preload(jp, voice) { if (ctx) loadBuf(audioKey(jp, voice)); }

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
  bgmGain.gain.setTargetAtTime(on ? 0.035 : 0.09, ctx.currentTime, 0.1);
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
    case 'door': tone(1568, 0.5, { vol: 0.12 }); tone(1975, 0.6, { vol: 0.1, at: 0.15 }); break;
    case 'rare': [1047, 1319, 1568, 2093, 1568, 2093].forEach((f, i) => tone(f, 0.25, { type: 'triangle', vol: 0.2, at: i * 0.07 })); break;
  }
}

// ===== 背景音樂：五聲音階琴音，慢慢彈 =====
let bgmTimer = null;
function startBGM() {
  const scale = [293.66, 329.63, 392.0, 440.0, 493.88, 587.33, 659.25, 783.99];
  const bass = [146.83, 196.0, 220.0, 164.81];
  let step = 0;
  const pluck = (f, at, vol) => {
    tone(f, 1.2, { type: 'triangle', vol, at, out: bgmGain });
    tone(f * 2, 0.4, { type: 'sine', vol: vol * 0.3, at, out: bgmGain });
  };
  const tick = () => {
    if (S().settings.bgm) {
      if (step % 8 === 0) pluck(bass[(step / 8) % 4], 0, 0.5);
      if (Math.random() < 0.6) pluck(scale[Math.floor(Math.random() * scale.length)], 0, 0.35);
    }
    step++;
  };
  bgmTimer = setInterval(tick, 420);
  setBGM(S().settings.bgm);
}
export function setBGM(on) {
  if (!bgmGain) return;
  bgmGain.gain.setTargetAtTime(on ? 0.09 : 0, ctx.currentTime, 0.3);
}
