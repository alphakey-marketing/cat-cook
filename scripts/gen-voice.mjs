// 用 VOICEVOX 生成全部日文發音 → public/audio/*.mp3
// 用法：先開 VOICEVOX（或 vv-engine/run.exe），再 npm run voice
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { VOCAB } from '../src/data/vocab.js';
import { RECIPES, COMING_SOON } from '../src/data/recipes.js';
import { ORDER_TEMPLATES, ORDER_NUM_TEMPLATES, REACT, CAT, SMALLTALK_LIST, DETAILS, RESTAURANT, SOLDOUT, REPLACE, TSUIKA, HERASU, KAERU, KYANSERU, YAMERU, FINISH_STEPS, HI_VOICES, allRestaurantLines } from '../src/data/dialogue.js';
import { K_STEPS, K_PAY, K_PAY_ASK, K_THANKS, K_OTSURI_ASK } from '../src/data/konbini.js';
import { DESTS, PLAT, TYPES, M_DEST, M_COUNT, M_TOTAL, M_TAKE, ASK, REPLY, ANN, INCIDENT_ANN, INCIDENTS, CAT_THANKS, STAFF_THANKS, OVERSHOOT, STAFF_RUDE, TOURIST_THANKS } from '../src/data/eki.js';
import { WELCOME, BYE_STAFF, CHECKIN, ROOM_REPLY, REQUESTS, CHECKOUT, NIGHTS, floorJP, roomJP, STAFF_RUDE_H, GUEST_THANKS } from '../src/data/hotel.js';
import { REGULARS, WASABI_REQUESTS, SOY_ASK, RAMEN_REQUESTS } from '../src/data/chapters.js';
import { DARK_RECIPES, DARK_ORDER_TEMPLATES, DARK_CUST, DARK_REPLY, TELLS, PROBES, EXCUSES, WISHES, STYLES, PLATE_REACT } from '../src/data/dark.js';
import { SHOP, CUSTOMERS } from '../src/data/shop.js';
import { VOICES, CUSTOMER_VOICES } from '../src/data/voices.js';
import { audioKey, toSpeech, toReading, kataToHira } from '../src/jp.js';
import { fill, NUMS, KAN, NIGIRI } from '../src/lines.js';

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
add('おかえりにゃ！', 'cat');
RECIPES.forEach((r) => r.steps.forEach((s) => add(s.jp, 'cat')));
// 客人：lv0 又冇 hi 旗標 → 六把聲線；其餘只用 HI_VOICES（慳音檔）
const dishes = RECIPES.filter((r) => r.chapter !== 'dark').map((r) => r.dish); // 暗黑菜用專屬落單句
const custAdd = (l, jp = l.jp) => ((l.lv ?? 0) > 0 || l.hi ? HI_VOICES : CUSTOMER_VOICES).forEach((cv) => add(jp, cv));
const tplAdd = (t, vars) => custAdd(t, fill(t, vars).jp);
for (const d of dishes) {
  ORDER_TEMPLATES.forEach((t) => tplAdd(t, { dish: d }));
  ORDER_NUM_TEMPLATES.forEach((t) => NUMS.forEach((n) => tplAdd(t, { dish: d, num: n })));
  REPLACE.forEach((t) => tplAdd(t, { dish: d }));
  KAERU.forEach((t) => tplAdd(t, { dish: d }));
  SOLDOUT.forEach((t) => add(fill(t, { dish: d }).jp, 'cat'));
}
// 壽司店專屬：貫數量落單、山葵要求、豉油沾法
for (const d of NIGIRI) ORDER_NUM_TEMPLATES.forEach((t) => KAN.forEach((n) => tplAdd(t, { dish: d, num: n })));
WASABI_REQUESTS.forEach((w) => custAdd({ lv: 0 }, w.jp));
custAdd({ lv: 0 }, SOY_ASK.jp);
Object.values(K_STEPS).forEach((st) => { add(st.ask.jp, 'cat'); custAdd({ lv: 0 }, st.yes.jp); custAdd({ lv: 0 }, st.no.jp); });
K_PAY.forEach((p) => custAdd({ lv: 0 }, p.jp));
[K_PAY_ASK, K_THANKS, K_OTSURI_ASK].forEach((l) => add(l.jp, 'cat'));
Object.values(RAMEN_REQUESTS).flat().forEach((r) => custAdd({ lv: 0 }, r.jp));
Object.values(REACT).flat().forEach((l) => custAdd(l));
SMALLTALK_LIST.forEach((l) => custAdd(l));
DETAILS.forEach((l) => custAdd(l));
TSUIKA.forEach((l) => custAdd(l));
[...HERASU, ...KYANSERU, ...YAMERU].forEach((l) => custAdd(l));
// 喫茶店熟客（固定 customer 聲線）
REGULARS.forEach((r) => CUSTOMERS.slice(0, REGULARS.length).forEach((c) => add(r.jp, c.id)));
// 熟客最後一步指示、暗黑食堂
Object.values(FINISH_STEPS).forEach((jp) => add(jp, 'cat'));
add('中身{なかみ}は？', 'word');
// 暗黑食堂：浮誇菜單名落單、追問、回應
DARK_RECIPES.forEach((r) => DARK_ORDER_TEMPLATES.forEach((t) => custAdd(t, t.jp.replace('{dish}', r.jp))));
Object.values(DARK_CUST).flat().forEach((l) => custAdd(l));
Object.values(DARK_REPLY).forEach((l) => add(l.jp, 'cat'));
Object.values(EXCUSES).forEach((l) => add(l.jp, 'cat'));
[...TELLS.safe, ...TELLS.turn, ...PROBES, ...Object.values(WISHES).flat(), ...PLATE_REACT].forEach((l) => custAdd(l));
STYLES.forEach((st) => add(st.jp, 'word'));
// 餐廳
const R = RESTAURANT;
Object.entries(R.staff).forEach(([k, l]) => { if (k !== 'pay' && k !== 'pay2') add(l.jp, 'cat'); });
const totals = new Set();
for (const f of R.foods) for (const d of R.drinks) for (const p of R.people) totals.add((R.prices[f] + R.prices[d]) * p.n);
totals.forEach((t) => { add(fill(R.staff.pay, { price: t }).jp, 'cat'); add(fill(R.staff.pay2, { price: t }).jp, 'cat'); });
// 車站：駅員 kuma、廣播 usagi、貓 cat（玩家句）
{
  const sub = (t, d) => t.replace(/\{d\}/g, d.jp).replace(/\{dy\}/g, d.yue).replace(/\{n\}/g, PLAT[d.platform]).replace(/\{p\}/g, d.platform);
  [M_DEST, M_COUNT, INCIDENT_ANN].forEach((l) => add(l.jp, 'usagi'));
  add(M_TAKE.jp, 'kuma'); add(STAFF_THANKS.jp, 'kuma'); add(CAT_THANKS.jp, 'cat');
  const fares = new Set();
  for (const d of DESTS) {
    for (let n = 1; n <= 3; n++) { fares.add(d.fare * n); fares.add(d.fare * (n + 1)); fares.add(d.fare * (n > 1 ? n - 1 : n + 2)); fares.add(d.fare + 10); }
    ASK.forEach((a) => { add(sub(a.ok.jp, d), 'cat'); a.bad.forEach((b) => add(sub(b.jp, d), 'cat')); });
    REPLY.forEach((r) => add(sub(r.jp, d), 'kuma'));
    for (let lv = 0; lv < 4; lv++) for (const t of TYPES) add(ANN(lv, d.platform, t, d).jp, 'usagi');
    for (const t of TYPES) for (const o of DESTS) for (const pl of [1, 2, 3, 4]) { add(ANN(0, pl, t, o).jp, 'usagi'); }
  }
  fares.forEach((f) => add(M_TOTAL(f).jp, 'usagi'));
  // 駅員視角：遊客 usagi 問，貓答
  add(TOURIST_THANKS.jp, 'usagi');
  OVERSHOOT.forEach((o) => { if (o) { add(o.tourist.jp, 'usagi'); add(o.ok.jp, 'cat'); o.bad.forEach((b) => add(b.jp, 'cat')); } });
  STAFF_RUDE.forEach((r) => add(r.jp, 'cat'));
  for (const d of DESTS) ASK.forEach((a) => add(sub(a.ok.jp, d), 'usagi'));
  for (const d of DESTS) for (const o of DESTS) REPLY.forEach((r) => add(sub(r.jp, { ...d, platform: o.platform }), 'cat'));
  INCIDENTS.forEach((i) => { add(i.ok.jp, 'cat'); i.bad.forEach((b) => add(b.jp, 'cat')); add(i.reply.jp, 'kuma'); });
}
// 酒店：職員 kuma、玩家句 cat
{
  const G = [{ jp: '一人{ひとり}' }, { jp: '二人{ふたり}' }];
  add(WELCOME.jp, 'kuma'); BYE_STAFF.forEach((b) => add(b.jp, 'kuma'));
  const subp = (t, p, q) => t.replace(/\{p\}/g, p).replace(/\{q\}/g, q);
  CHECKIN.forEach((c) => { for (let i = 0; i < 2; i++) { add(subp(c.ok.jp, G[i].jp, G[1 - i].jp), 'cat'); c.bad.forEach((b) => add(subp(b.jp, G[i].jp, G[1 - i].jp), 'cat')); } });
  for (let fl = 2; fl <= 9; fl++) for (let k = 1; k <= 9; k++) for (let n = 1; n <= 3; n++) {
    const room = fl * 100 + k;
    ROOM_REPLY.forEach((r) => add(r.jp.replace(/\{n\}/g, NIGHTS[n]).replace(/\{f\}/g, floorJP(fl)).replace(/\{r\}/g, roomJP(room)), 'kuma'));
    if (n === 1) add(roomJP(room), 'word');
  }
  REQUESTS.forEach((lvl) => lvl.forEach((q) => { add(q.ok.jp, 'cat'); q.bad.forEach((b) => add(b.jp, 'cat')); add(q.reply.jp, 'kuma'); }));
  add(GUEST_THANKS.jp, 'usagi'); STAFF_RUDE_H.forEach((r) => r && add(r.jp, 'cat'));
  REQUESTS.forEach((lvl) => lvl.forEach((q) => { add(q.ok.jp, 'usagi'); add(q.reply.jp, 'cat'); }));
  CHECKOUT.forEach((c) => { add(c.ok.jp, 'cat'); c.bad.forEach((b) => add(b.jp, 'cat')); });
}
R.people.forEach((p) => add(p.jp, 'word'));
for (const n of NUMS) {
  R.foods.forEach((f) => add(fill(R.you.order, { food: f, num: n }).jp, 'word'));
  R.drinks.forEach((d) => add(fill(R.you.drink, { drink: d, num: n }).jp, 'word'));
}
Object.entries(R.you).forEach(([k, l]) => { if (k !== 'order' && k !== 'drink') add(l.jp, 'word'); });
add(R.name.jp, 'cat');
// 餐廳額外環節：店員 cat、你講嘅 word
const rl = allRestaurantLines();
rl.staff.forEach((jp) => add(jp, 'cat'));
rl.you.forEach((jp) => add(jp, 'word'));

console.log(`共 ${jobs.size} 句`);
if (process.env.DRY) {
  // 只數缺幾多，唔生成
  const miss = [...jobs].filter(([k]) => !fs.existsSync(path.join(OUT, k + '.mp3')));
  console.log(`缺 ${miss.length} 個；例：`);
  const by = {};
  miss.forEach(([, j]) => { by[j.voice] = (by[j.voice] || 0) + 1; });
  console.log(by);
  miss.slice(0, 400).forEach(([, j]) => console.log(`${j.voice}	${j.jp}`));
  process.exit(0);
}

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
