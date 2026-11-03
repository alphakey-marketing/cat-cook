// 用 VOICEVOX 生成全部日文發音 → public/audio/*.mp3
// 用法：先開 VOICEVOX（或 vv-engine/run.exe），再 npm run voice
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { VOCAB } from '../src/data/vocab.js';
import { RECIPES, COMING_SOON } from '../src/data/recipes.js';
import { ORDER_TEMPLATES, ORDER_NUM_TEMPLATES, REACT, CAT, SMALLTALK, RESTAURANT } from '../src/data/dialogue.js';
import { SHOP, CUSTOMERS } from '../src/data/shop.js';
import { VOICES, CUSTOMER_VOICES } from '../src/data/voices.js';
import { audioKey, toSpeech, toReading, kataToHira } from '../src/jp.js';
import { fill, NUMS } from '../src/lines.js';

const HOST = process.env.VV || 'http://127.0.0.1:50021';
const OUT = path.resolve('public/audio');
fs.mkdirSync(OUT, { recursive: true });

const jobs = new Map();
const add = (jp, voice) => jobs.set(audioKey(jp, voice), { jp, voice });

// 單詞、名
Object.values(VOCAB).forEach((v) => add(v.jp, 'word'));
SHOP.forEach((s) => add(s.jp, 'word'));
CUSTOMERS.forEach((c) => add(c.jp, 'word'));
COMING_SOON.forEach((c) => add(c.jp, 'word'));
// 小黑
Object.values(CAT).forEach((l) => add(l.jp, 'cat'));
RECIPES.forEach((r) => r.steps.forEach((s) => add(s.jp, 'cat')));
// 客人
const dishes = RECIPES.map((r) => r.dish);
for (const cv of CUSTOMER_VOICES) {
  for (const d of dishes) {
    ORDER_TEMPLATES.forEach((t) => add(fill(t, { dish: d }).jp, cv));
    ORDER_NUM_TEMPLATES.forEach((t) => NUMS.forEach((n) => add(fill(t, { dish: d, num: n }).jp, cv)));
  }
  Object.values(REACT).flat().forEach((l) => add(l.jp, cv));
  Object.values(SMALLTALK).forEach((l) => add(l.jp, cv));
}
// 餐廳
const R = RESTAURANT;
Object.entries(R.staff).forEach(([k, l]) => { if (k !== 'pay') add(l.jp, 'cat'); });
const totals = new Set();
for (const f of R.foods) for (const d of R.drinks) for (const p of R.people) totals.add((R.prices[f] + R.prices[d]) * p.n);
totals.forEach((t) => add(fill(R.staff.pay, { price: t }).jp, 'cat'));
R.people.forEach((p) => add(p.jp, 'word'));
for (const n of NUMS) {
  R.foods.forEach((f) => add(fill(R.you.order, { food: f, num: n }).jp, 'word'));
  R.drinks.forEach((d) => add(fill(R.you.drink, { drink: d, num: n }).jp, 'word'));
}
Object.entries(R.you).forEach(([k, l]) => { if (k !== 'order' && k !== 'drink') add(l.jp, 'word'); });
add(R.name.jp, 'cat');

console.log(`共 ${jobs.size} 句`);

function norm(s) {
  return kataToHira(s).replace(/[、。？！?!\s'_/]/g, '').replace(/ー/g, '');
}

// 寬鬆比較：去晒母音（長音寫法唔同都當啱），有數字就唔檢查
function mismatch(got, expect, text) {
  if (!got || /[0-9]/.test(text)) return false;
  const sk = (x) => x.replace(/[あいうえおー]/g, '').replace(/を/g, '').replace(/は/g, 'わ').replace(/へ/g, '');
  return sk(got) !== sk(expect);
}

let made = 0, skipped = 0;
const warn = [];
for (const [key, { jp, voice }] of jobs) {
  const file = path.join(OUT, key + '.mp3');
  const speaker = VOICES[voice].id;
  const text = toSpeech(jp);
  if (fs.existsSync(file) && !process.env.RECHECK) { skipped++; continue; }
  let q = await (await fetch(`${HOST}/audio_query?speaker=${speaker}&text=${encodeURIComponent(text)}`, { method: 'POST' })).json();
  if (fs.existsSync(file)) {
    // RECHECK：舊版誤判 = 用咗假名做，要用漢字重做
    const e0 = norm(toReading(jp, { forSpeech: true })), g0 = norm(q.kana || '');
    const old = (x) => x.replace(/[うい]/g, '').replace(/を/g, 'お').replace(/[はわ]/g, 'わ').replace(/へ/g, 'え');
    if (g0 && old(g0) !== old(e0) && !mismatch(g0, e0, text)) { fs.unlinkSync(file); } else { skipped++; continue; }
  }
  // 檢查讀音：VOICEVOX 讀法同我哋寫嘅假名唔同就改用假名重做
  const expect = norm(toReading(jp, { forSpeech: true }));
  const got = norm(q.kana || '');
  if (mismatch(got, expect, text)) {
    warn.push(`${text} : VV=${got} / 預期=${expect}`);
    const t2 = toReading(jp, { forSpeech: true }).replace(/ /g, '');
    q = await (await fetch(`${HOST}/audio_query?speaker=${speaker}&text=${encodeURIComponent(t2)}`, { method: 'POST' })).json();
  }
  q.speedScale = voice === 'word' ? 0.9 : 1.0;
  q.outputSamplingRate = 24000;
  q.prePhonemeLength = 0.05;
  q.postPhonemeLength = 0.1;
  const wav = Buffer.from(await (await fetch(`${HOST}/synthesis?speaker=${speaker}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(q),
  })).arrayBuffer());
  const tmp = path.join(OUT, key + '.wav');
  fs.writeFileSync(tmp, wav);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-ac', '1', '-b:a', '48k', file]);
  fs.unlinkSync(tmp);
  made++;
  if (made % 25 === 0) console.log(`  ${made} 句…`);
}
console.log(`完成：新做 ${made}，已有 ${skipped}`);
if (warn.length) console.log('讀音唔同（已改用假名）：\n  ' + warn.join('\n  '));
