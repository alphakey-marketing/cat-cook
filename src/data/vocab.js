// 詞彙表。 jp 用 漢字{かな} 寫法。 m = 3D 小模型（材料用）
// cat: ing 材料 / verb 動作 / phrase 句子 / num 數字 / dish 菜
import { NEW_INGREDIENTS, CHAPTER_RECIPES, CHAPTER_WORDS, TEXT_ICON_IDS } from './chapters.js';
import { KONBINI_WORDS } from './konbini.js';
import { EKI_WORDS } from './eki.js';
import { HOTEL_WORDS } from './hotel.js';
import { DARK_INGREDIENTS, DARK_RECIPES, DARK_WORDS } from './dark.js';
export const VOCAB = {
  // ---- 材料 ----
  gohan: { jp: 'ご飯{はん}', yue: '白飯', emoji: '🍚', cat: 'ing', m: { s: 'sphere', c: 0xfdfdf5, sc: [0.32, 0.2, 0.32] } },
  shio: { jp: '塩{しお}', yue: '鹽', emoji: '🧂', cat: 'ing', m: { s: 'cyl', c: 0xeeeeee, sc: [0.08, 0.2, 0.08] } },
  nori: { jp: '海苔{のり}', yue: '紫菜', emoji: '🟩', cat: 'ing', m: { s: 'box', c: 0x1f3322, sc: [0.3, 0.01, 0.2] } },
  umeboshi: { jp: '梅干{うめぼ}し', yue: '酸梅', emoji: '🔴', cat: 'ing', m: { s: 'sphere', c: 0xc8283c, sc: [0.07, 0.06, 0.07] } },
  sake_fish: { jp: '鮭{さけ}', yue: '三文魚', emoji: '🐟', cat: 'ing', m: { s: 'box', c: 0xff8c66, sc: [0.2, 0.06, 0.12] } },
  mizu: { jp: '水{みず}', yue: '水', emoji: '💧', cat: 'ing', m: { s: 'cyl', c: 0x8fd3ff, sc: [0.1, 0.22, 0.1] } },
  dashi: { jp: 'だし', yue: '日式高湯', emoji: '🥣', cat: 'ing', m: { s: 'cyl', c: 0xd9a441, sc: [0.12, 0.12, 0.12] } },
  tofu: { jp: '豆腐{とうふ}', yue: '豆腐', emoji: '⬜', cat: 'ing', m: { s: 'box', c: 0xfffbe8, sc: [0.24, 0.12, 0.16] } },
  wakame: { jp: 'わかめ', yue: '海帶芽', emoji: '🌿', cat: 'ing', m: { s: 'sphere', c: 0x2e6b3a, sc: [0.12, 0.04, 0.12] } },
  negi: { jp: 'ねぎ', yue: '蔥', emoji: '🧅', cat: 'ing', m: { s: 'cyl', c: 0x6cc24a, sc: [0.03, 0.35, 0.03], rz: 1.57 } },
  miso: { jp: '味噌{みそ}', yue: '麵豉醬', emoji: '🟫', cat: 'ing', m: { s: 'cyl', c: 0xa86b32, sc: [0.14, 0.1, 0.14] } },
  toriniku: { jp: '鶏肉{とりにく}', yue: '雞肉', emoji: '🍗', cat: 'ing', m: { s: 'box', c: 0xf2c9a0, sc: [0.22, 0.08, 0.16] } },
  tamago: { jp: '卵{たまご}', yue: '雞蛋', emoji: '🥚', cat: 'ing', m: { s: 'sphere', c: 0xfff3dc, sc: [0.08, 0.1, 0.08] } },
  tamanegi: { jp: '玉{たま}ねぎ', yue: '洋蔥', emoji: '🧅', cat: 'ing', m: { s: 'sphere', c: 0xe8c07a, sc: [0.12, 0.11, 0.12] } },
  shoyu: { jp: '醤油{しょうゆ}', yue: '豉油', emoji: '🫗', cat: 'ing', m: { s: 'cyl', c: 0x3a1a0c, sc: [0.06, 0.24, 0.06] } },
  mirin: { jp: 'みりん', yue: '味醂（甜米酒）', emoji: '🍶', cat: 'ing', m: { s: 'cyl', c: 0xf5e6a8, sc: [0.06, 0.24, 0.06] } },
  satou: { jp: '砂糖{さとう}', yue: '砂糖', emoji: '🍬', cat: 'ing', m: { s: 'box', c: 0xffffff, sc: [0.1, 0.1, 0.1] } },
  men: { jp: '麺{めん}', yue: '麵', emoji: '🍜', cat: 'ing', m: { s: 'sphere', c: 0xf3d77a, sc: [0.22, 0.08, 0.22] } },
  chashu: { jp: 'チャーシュー', yue: '叉燒（日式）', emoji: '🥩', cat: 'ing', m: { s: 'cyl', c: 0xb5653a, sc: [0.14, 0.03, 0.14] } },
  moyashi: { jp: 'もやし', yue: '芽菜', emoji: '🌱', cat: 'ing', m: { s: 'sphere', c: 0xf7f3d0, sc: [0.12, 0.05, 0.12] } },
  ninniku: { jp: 'にんにく', yue: '蒜頭', emoji: '🧄', cat: 'ing', m: { s: 'sphere', c: 0xf3eee0, sc: [0.07, 0.07, 0.07] } },
  sake_drink: { jp: '酒{さけ}', yue: '日本酒（煮食用）', emoji: '🍶', cat: 'ing', m: { s: 'cyl', c: 0xe0f0ff, sc: [0.06, 0.24, 0.06] } },

  // ---- 動作 ----
  kiru: { jp: '切{き}る', yue: '切', emoji: '🔪', cat: 'verb' },
  mazeru: { jp: '混{ま}ぜる', yue: '攪拌、撈勻', emoji: '🥄', cat: 'verb' },
  niru: { jp: '煮{に}る', yue: '煮、燜', emoji: '🍲', cat: 'verb' },
  nigiru: { jp: '握{にぎ}る', yue: '揸實、搓（飯糰）', emoji: '✊', cat: 'verb' },
  tokasu: { jp: '溶{と}かす', yue: '溶開', emoji: '🫧', cat: 'verb' },
  yuderu: { jp: 'ゆでる', yue: '烚（落水煮）', emoji: '♨️', cat: 'verb' },
  noseru: { jp: 'のせる', yue: '放上面', emoji: '⬆️', cat: 'verb' },

  // ---- 菜 ----
  onigiri: { jp: 'おにぎり', yue: '飯糰', emoji: '🍙', cat: 'dish' },
  misoshiru: { jp: '味噌汁{みそしる}', yue: '麵豉湯', emoji: '🥣', cat: 'dish' },
  oyakodon: { jp: '親子丼{おやこどん}', yue: '親子丼（雞肉滑蛋飯）', emoji: '🍛', cat: 'dish' },
  ramen: { jp: 'ラーメン', yue: '拉麵', emoji: '🍜', cat: 'dish' },
  ocha: { jp: 'お茶{ちゃ}', yue: '茶', emoji: '🍵', cat: 'dish' },
  omizu: { jp: 'お水{みず}', yue: '水（禮貌講法）', emoji: '🥛', cat: 'dish' },
  biiru: { jp: 'ビール', yue: '啤酒', emoji: '🍺', cat: 'dish' },

  // ---- 數字 ----
  hitotsu: { jp: '一{ひと}つ', yue: '一個', emoji: '1️⃣', cat: 'num' },
  futatsu: { jp: '二{ふた}つ', yue: '兩個', emoji: '2️⃣', cat: 'num' },
  mittsu: { jp: '三{みっ}つ', yue: '三個', emoji: '3️⃣', cat: 'num' },
  hitori: { jp: '一人{ひとり}', yue: '一個人', emoji: '🧍', cat: 'num' },
  futari: { jp: '二人{ふたり}', yue: '兩個人', emoji: '👫', cat: 'num' },
  ikkan: { jp: '一貫{いっかん}', yue: '一件（握壽司）', emoji: '1️⃣', cat: 'num', textIcon: true },
  nikan: { jp: '二貫{にかん}', yue: '兩件（握壽司）', emoji: '2️⃣', cat: 'num', textIcon: true },
  sankan: { jp: '三貫{さんかん}', yue: '三件（握壽司）', emoji: '3️⃣', cat: 'num', textIcon: true },
  sannin: { jp: '三人{さんにん}', yue: '三個人', emoji: '👨‍👩‍👧', cat: 'num' },

  // ---- 句子 ----
  irasshaimase: { jp: 'いらっしゃいませ', yue: '歡迎光臨', emoji: '🙇', cat: 'phrase' },
  arigatou: { jp: 'ありがとうございます', yue: '多謝（禮貌）', emoji: '🙏', cat: 'phrase' },
  oishii: { jp: 'おいしい', yue: '好好食', emoji: '😋', cat: 'phrase' },
  itadakimasu: { jp: 'いただきます', yue: '開動喇（食之前講）', emoji: '🙏', cat: 'phrase' },
  gochisousama: { jp: 'ごちそうさまでした', yue: '多謝款待（食完講）', emoji: '😊', cat: 'phrase' },
  kudasai: { jp: 'ください', yue: '請畀我⋯', emoji: '👉', cat: 'phrase' },
  onegaishimasu: { jp: 'お願{ねが}いします', yue: '麻煩你、唔該', emoji: '🙇', cat: 'phrase' },
  okaikei: { jp: 'お会計{かいけい}', yue: '埋單', emoji: '🧾', cat: 'phrase' },
  sumimasen: { jp: 'すみません', yue: '唔好意思（叫人都用得）', emoji: '✋', cat: 'phrase' },
  atsui: { jp: '熱{あつ}い', yue: '好熱、好燙', emoji: '🔥', cat: 'phrase' },
  oomori: { jp: '大盛{おおも}り', yue: '大份', emoji: '⛰️', cat: 'phrase' },
  matta: { jp: 'また 来{き}ます', yue: '我會再嚟', emoji: '👋', cat: 'phrase' },
  oishikatta: { jp: '美味{おい}しかった', yue: '好好食呀（過去式）', emoji: '🥰', cat: 'phrase' },
  hai: { jp: 'はい', yue: '係／好', emoji: '⭕', cat: 'phrase' },
  iie: { jp: 'いいえ', yue: '唔係／唔使', emoji: '❌', cat: 'phrase' },
};

for (const [id, jp, yue, emoji, s, c] of [...NEW_INGREDIENTS, ...DARK_INGREDIENTS]) VOCAB[id] = { jp, yue, emoji, cat: 'ing', m: { s, c, sc: [0.12, 0.1, 0.12] }, ...(TEXT_ICON_IDS.includes(id) ? { textIcon: true } : {}) };
for (const r of [...CHAPTER_RECIPES, ...DARK_RECIPES]) VOCAB[r.id] = { jp: r.jp, yue: r.yue, emoji: r.emoji, cat: 'dish', ...(TEXT_ICON_IDS.includes(r.id) ? { textIcon: true } : {}) };
for (const [id, jp, yue, cat] of [...CHAPTER_WORDS, ...KONBINI_WORDS, ...EKI_WORDS, ...HOTEL_WORDS, ...DARK_WORDS]) VOCAB[id] = { jp, yue, cat, emoji: cat === 'verb' ? '🥄' : cat === 'travel' ? (id.startsWith('hotel_') ? '🏨' : '🚉') : '💬', textIcon: true };

export function vocab(id) {
  const v = VOCAB[id];
  if (!v) throw new Error('vocab missing: ' + id);
  return { id, ...v };
}
