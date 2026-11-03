// 存檔（localStorage）+ 連續日數 + SRS
const KEY = 'catcook_v1';

const DEFAULT = {
  v: 1,
  started: false,
  level: 1,
  xp: 0,
  coins: 0,
  served: 0,
  shifts: 0,
  firstDay: null,
  lastDay: null,
  streak: 0,
  daysPlayed: 0,
  lastGift: null,
  affection: 0,
  lastPet: null,
  owned: ['hat_chef'],
  wear: { hat: 'hat_chef', neck: null },
  deco: [],
  stars: {},          // recipeId -> best stars
  cooked: {},         // recipeId -> 次數
  srs: {},            // vocabId -> { box, due, seen, right, wrong }
  restaurantDone: 0,
  settings: { furigana: true, romaji: true, yue: true, subs: 'show', bgm: true, sfx: true },
  jpLevel: null,
  achievements: [],
};

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return deepMerge(structuredClone(DEFAULT), JSON.parse(raw));
  } catch (e) { /* 私隱模式之類 */ }
  return structuredClone(DEFAULT);
}

function deepMerge(base, obj) {
  for (const k in obj) {
    if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k]) && base[k] && typeof base[k] === 'object') {
      deepMerge(base[k], obj[k]);
    } else base[k] = obj[k];
  }
  return base;
}

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
}

export function S() { return state; }

export function reset() {
  state = structuredClone(DEFAULT);
  save();
}

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function dayDiff(a, b) {
  const pa = a.split('-').map(Number), pb = b.split('-').map(Number);
  const da = new Date(pa[0], pa[1] - 1, pa[2]), db = new Date(pb[0], pb[1] - 1, pb[2]);
  return Math.round((db - da) / 86400000);
}

// 每次開 game 叫一次。返回 { newDay, streakBroken, gift }
export function checkIn() {
  const t = today();
  const res = { newDay: false, streakBroken: false, gift: 0 };
  if (!state.firstDay) state.firstDay = t;
  if (state.lastDay !== t) {
    res.newDay = true;
    if (state.lastDay && dayDiff(state.lastDay, t) === 1) state.streak += 1;
    else {
      if (state.lastDay && state.streak > 1) res.streakBroken = true;
      state.streak = 1;
    }
    state.lastDay = t;
    state.daysPlayed += 1;
  }
  if (state.lastGift !== t && state.started) {
    res.gift = 30 + Math.min(state.streak, 7) * 10;
    state.lastGift = t;
    state.coins += res.gift;
  }
  save();
  return res;
}

export function msToMidnight() {
  const n = new Date();
  const m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
  return m - n;
}

// ===== 等級 =====
const XP_TABLE = [0, 30, 80, 160, 270, 420, 620, 880, 1200, 1600, 2100];
export function xpForLevel(l) { return XP_TABLE[Math.min(l, XP_TABLE.length - 1)] ?? (l * 500); }
// 加 XP，返回升咗幾多級
export function addXP(n) {
  state.xp += n;
  let ups = 0;
  while (state.xp >= xpForLevel(state.level)) { state.level++; ups++; }
  save();
  return ups;
}

// ===== SRS（Leitner 盒）=====
// box 0..5，間隔（分鐘）：同一 session 內都會再出，之後拉長
const INTERVAL_MIN = [0, 2, 10, 60 * 12, 60 * 24 * 2, 60 * 24 * 5];
export function srsSeen(id) {
  if (!state.srs[id]) state.srs[id] = { box: 0, due: Date.now(), seen: 0, right: 0, wrong: 0 };
  state.srs[id].seen++;
  save();
}
export function srsAnswer(id, ok) {
  const r = state.srs[id] || (state.srs[id] = { box: 0, due: 0, seen: 1, right: 0, wrong: 0 });
  if (ok) { r.box = Math.min(r.box + 1, 5); r.right++; }
  else { r.box = 0; r.wrong++; }
  r.due = Date.now() + INTERVAL_MIN[r.box] * 60000;
  save();
}
// 揀一個最需要溫嘅字（喺 pool 入面）
export function srsPick(pool) {
  const now = Date.now();
  const scored = pool.map((id) => {
    const r = state.srs[id];
    if (!r) return { id, s: 50 + Math.random() * 10 };           // 未見過：中等優先
    const overdue = (now - r.due) / 60000;
    return { id, s: (overdue >= 0 ? 100 + Math.min(overdue, 60) : -10) + (5 - r.box) * 8 + r.wrong * 3 + Math.random() * 10 };
  });
  scored.sort((a, b) => b.s - a.s);
  return scored[0]?.id;
}
export function learnedCount() {
  return Object.values(state.srs).filter((r) => r.box >= 2).length;
}
export function seenCount() {
  return Object.keys(state.srs).length;
}
