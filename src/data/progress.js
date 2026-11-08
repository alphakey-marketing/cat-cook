// 旅行章節：按「章節 × 等級」計進度。一個 unit = 一種情境（例如酒店入住、房間請求第 N 個）。
// 同一 unit 一次過答啱（唔錯）累計 2 次就當學晒。全部 unit 達 90% = 呢級呢章完成。
import { S, save } from '../save.js';
import { REQUESTS } from './hotel.js';
import { INCIDENTS } from './eki.js';
import { SMALLTALK_LIST, DETAILS, REACT, jpLevel } from './phrases.js';
import { K_BYE } from './konbini.js';

export const UNIT_DONE_AT = 2;
export const CHAPTER_DONE_RATIO = 0.9;
export const TRAVEL_CHAPTERS = ['eki', 'hotel'];
// 句庫型：隨機抽句，用 SRS 熟練度（box>=2）計學晒
export const POOLS = {
  konbini: () => K_BYE,
  resto: () => [...SMALLTALK_LIST, ...DETAILS, ...REACT.bye],
};
export const PROGRESS_ROWS = [
  { id: 'eki', label: '🚉 車站' }, { id: 'hotel', label: '🏨 酒店' },
  { id: 'konbini', label: '🏪 便利店' }, { id: 'resto', label: '🍱 餐廳' },
];

// 每章每級嘅 unit 清單
export function unitList(ch, lv) {
  if (ch === 'hotel') {
    const rq = (REQUESTS[lv] || []).map((_, i) => i);
    return ['t:ci', 't:rm', 't:co', ...rq.map((i) => `t:rq${i}`), 's:ci', 's:co', ...rq.map((i) => `s:rq${i}`)];
  }
  if (POOLS[ch]) return POOLS[ch]().filter((x) => (x.lv ?? 0) === lv).map((x) => x.key);
  if (ch === 'eki') {
    const u = ['t:ask', 't:ann', 's:ask'];
    if (lv >= 1) u.push('s:os');
    if (lv >= 2) u.push('t:kind');
    if (lv >= 3) INCIDENTS.forEach((_, i) => u.push(`t:inc${i}`));
    return u;
  }
  return [];
}

// 呢級喺呢章學到咩（揀等級／升級提示用）
export const LEVEL_LEARN = {
  konbini: ['簡單道別：「ありがとう」', '禮貌道別、讚便利', '委婉感謝、深夜營業', '敬語慰勞、長句'],
  resto: ['簡單閒聊同道別', '基本閒聊、口味評語', '實用細節、推介', '敬語、較長嘅閒聊'],
  hotel: [
    '單字加「お願いします」：入住、退房、要毛巾、寄行李',
    '完整禮貌句：報名同人數、問早餐時間、Wi-Fi',
    '有禮貌嘅請求：冷氣壞咗、換房、確認預約、要收據',
    '敬語同交涉：帳單有疑問、房型唔符、刷卡結帳',
  ],
  eki: [
    '單字：買票、問月台、「何番線ですか」',
    '完整句：「〜行きは 何番線ですか」、搭過站要補票',
    '聽廣播分各停／快速／特急，買特急券',
    '事故廣播、退款、延誤證明、轉乘輸送、敬語交涉',
  ],
};

const key = (ch, lv, u) => `${ch}:${lv}:${u}`;

// 答完一題：firstTry = 一次答啱。返回 'level-done'（呢章呢級剛好第一次完成）或 null
export function markUnit(ch, lv, unit, firstTry) {
  if (!TRAVEL_CHAPTERS.includes(ch) || !firstTry || !unitList(ch, lv).includes(unit)) return null;
  const st = (S().unitStat ||= {});
  const before = unitProgress(ch, lv);
  st[key(ch, lv, unit)] = (st[key(ch, lv, unit)] || 0) + 1;
  const after = unitProgress(ch, lv);
  const flags = (S().lvDoneFlags ||= {});
  let res = null;
  if (!flags[`${ch}:${lv}`] && after.ratio >= CHAPTER_DONE_RATIO && before.ratio < CHAPTER_DONE_RATIO) {
    flags[`${ch}:${lv}`] = true;
    res = 'level-done';
  }
  save();
  return res;
}

export function unitProgress(ch, lv) {
  const list = unitList(ch, lv);
  const st = S().unitStat || {};
  if (POOLS[ch]) {
    const done = list.filter((k) => (S().srs[k]?.box || 0) >= 2).length;
    return { done, total: list.length, ratio: list.length ? done / list.length : 1 };
  }
  const done = list.filter((u) => (st[key(ch, lv, u)] || 0) >= UNIT_DONE_AT).length;
  return { done, total: list.length, ratio: list.length ? done / list.length : 0 };
}

// 呢章最高已完成嘅等級 +1 即係建議升去嘅等級；冇就 null
export function chapterNudge(ch, currentLv) {
  if (currentLv >= 3) return null;
  if (POOLS[ch] && !unitList(ch, currentLv).length) return null;
  const p = unitProgress(ch, currentLv);
  if (p.ratio < CHAPTER_DONE_RATIO) return null;
  if ((S().lvDoneDismissed || {})[`${ch}:${currentLv}`]) return null;
  return { ch, from: currentLv, to: currentLv + 1 };
}
export function dismissChapterNudge(ch, lv) {
  (S().lvDoneDismissed ||= {})[`${ch}:${lv}`] = true;
  save();
}

// 全部場景喺呢級都學晒 → 整體升級提示
export function allDone(lv) {
  return PROGRESS_ROWS.every((r) => unitProgress(r.id, lv).ratio >= CHAPTER_DONE_RATIO);
}
export function levelNudge() {
  const L = jpLevel();
  if (L >= 3 || !allDone(L)) return null;
  if ((S().lvNudgeDismissed ?? -1) >= L) return null;
  return { from: L, to: L + 1 };
}
// 學晒狀態（唔係 eki/hotel 嘅 markUnit）：句庫型章節完成時提示一次
export function checkPoolDone(ch, lv) {
  if (!POOLS[ch]) return false;
  const flags = (S().lvDoneFlags ||= {});
  const k = `${ch}:${lv}`;
  if (flags[k] || unitProgress(ch, lv).ratio < CHAPTER_DONE_RATIO || !unitList(ch, lv).length) return false;
  flags[k] = true; save();
  return true;
}
