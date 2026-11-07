// 便利店章節：玩家做收銀員，客人買嘢。
// 句子寫法同其他資料一樣： 漢字{かな}

// 貨品：heat = 可以叮熱，cutlery = 會問筷子
export const GOODS = [
  { id: 'onigiri', jp: 'おにぎり', yue: '飯糰', emoji: '🍙', price: 150, heat: false },
  { id: 'bento', jp: 'お弁当{べんとう}', yue: '便當', emoji: '🍱', price: 480, heat: true, cutlery: true },
  { id: 'sandwich', jp: 'サンドイッチ', yue: '三文治', emoji: '🥪', price: 280, heat: false },
  { id: 'ocha', jp: 'お茶{ちゃ}', yue: '茶', emoji: '🍵', price: 130, heat: false },
  { id: 'coffee', jp: 'コーヒー', yue: '咖啡', emoji: '☕', price: 120, heat: false },
  { id: 'chips', jp: 'ポテトチップス', yue: '薯片', emoji: '🥔', price: 170, heat: false },
  { id: 'ice', jp: 'アイス', yue: '雪糕', emoji: '🍦', price: 160, heat: false },
  { id: 'nikuman', jp: '肉{にく}まん', yue: '肉包', emoji: '🥟', price: 190, heat: false },
  { id: 'curry_pack', jp: 'レトルトカレー', yue: '即食咖哩', emoji: '🍛', price: 330, heat: true, cutlery: true },
  { id: 'pudding', jp: 'プリン', yue: '布甸', emoji: '🍮', price: 140, heat: false },
].map(g => ({ ...g, art: `goods_${g.id}` }));

// 客人答覆：yes / no 各一句。id 同時係 SRS 單詞 id（見 KONBINI_WORDS）
export const K_STEPS = {
  bag: {
    ask: { jp: '袋{ふくろ}は いりますか？', yue: '要唔要膠袋？' },
    title: '客人要唔要袋？',
    yes: { id: 'k_fukuro', jp: '袋{ふくろ}を お願{ねが}いします。', yue: '唔該，要袋。', label: '加袋' },
    no: { id: 'k_fukuro_no', jp: '袋{ふくろ}は いりません。', yue: '唔使袋。', label: '唔使袋' },
  },
  heat: {
    ask: { jp: '温{あたた}めますか？', yue: '要唔要叮熱？' },
    title: '客人要唔要叮熱？',
    yes: { id: 'k_atatame', jp: '温{あたた}めて ください。', yue: '請幫我叮熱。', label: '叮熱' },
    no: { id: 'k_sonomama', jp: 'そのままで お願{ねが}いします。', yue: '唔使，照原樣。', label: '唔叮' },
  },
  cutlery: {
    ask: { jp: 'お箸{はし}は おつけしますか？', yue: '要唔要筷子？' },
    title: '客人要唔要筷子？',
    yes: { id: 'k_hashi', jp: 'お箸{はし}を お願{ねが}いします。', yue: '唔該，要筷子。', label: '附筷子' },
    no: { id: 'k_hashi_no', jp: 'お箸{はし}は いりません。', yue: '唔使筷子。', label: '唔附筷子' },
  },
  point: {
    ask: { jp: 'ポイントカードは お持{も}ちですか？', yue: '有冇積分卡？' },
    title: '客人有冇積分卡？',
    yes: { id: 'k_point', jp: 'ポイントカードを お願{ねが}いします。', yue: '有，請幫我儲分。', label: '儲積分' },
    no: { id: 'k_point_no', jp: 'ポイントカードは ありません。', yue: '冇積分卡。', label: '唔儲分' },
  },
};

// 付款方式
export const K_PAY = [
  { id: 'k_genkin', jp: '現金{げんきん}で お願{ねが}いします。', yue: '現金付款。', label: '現金', icon: '💴' },
  { id: 'k_card', jp: 'カードで お願{ねが}いします。', yue: '用信用卡。', label: '信用卡', icon: '💳' },
  { id: 'k_ic', jp: '交通系{こうつうけい}アイシーで お願{ねが}いします。', yue: '用交通卡（Suica 之類）。', label: '交通卡', icon: '🚃' },
];
export const K_PAY_ASK = { jp: 'お支払{しはら}いは いかがなさいますか？', yue: '點樣付款？' };
export const K_GREET = { jp: 'いらっしゃいませ。', yue: '歡迎光臨。' };
export const K_THANKS = { jp: 'ありがとうございました。', yue: '多謝光臨。' };
export const K_TOTAL = (yenText) => ({ jp: `合計{ごうけい}は ${yenText}です。`, yue: '總共係呢個價錢。' });
export const K_OTSURI_ASK = { jp: 'おつりを お返{かえ}しします。', yue: '搵返錢畀你。' };

// 單詞表（vocab.js 會讀）：[id, jp, yue, cat]
export const KONBINI_WORDS = [
  ...Object.values(K_STEPS).flatMap((s) => [s.yes, s.no].map((x) => [x.id, x.jp, x.yue, 'phrase'])),
  ...K_PAY.map((x) => [x.id, x.jp, x.yue, 'phrase']),
  ['k_goukei', '合計{ごうけい}', '合計、總數', 'phrase'],
  ['k_otsuri', 'おつり', '找續（搵返嘅錢）', 'phrase'],
];
export const KONBINI_WORD_IDS = KONBINI_WORDS.map((w) => w[0]);

// ---- 金額日文（只支援 10 的倍數，10 ~ 9990）----
const K_NUM = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const SEN = ['', 'せん', 'にせん', 'さんぜん', 'よんせん', 'ごせん', 'ろくせん', 'ななせん', 'はっせん', 'きゅうせん'];
const HYAKU = ['', 'ひゃく', 'にひゃく', 'さんびゃく', 'よんひゃく', 'ごひゃく', 'ろっぴゃく', 'ななひゃく', 'はっぴゃく', 'きゅうひゃく'];
const JUU = ['', 'じゅう', 'にじゅう', 'さんじゅう', 'よんじゅう', 'ごじゅう', 'ろくじゅう', 'ななじゅう', 'はちじゅう', 'きゅうじゅう'];
// 回傳 ruby 寫法，例如 420 → 四百二十円{よんひゃくにじゅうえん}
export function yenJP(n) {
  const th = Math.floor(n / 1000), hu = Math.floor((n % 1000) / 100), te = Math.floor((n % 100) / 10);
  const kanji = (th ? (th > 1 ? K_NUM[th] : '') + '千' : '') + (hu ? (hu > 1 ? K_NUM[hu] : '') + '百' : '') + (te ? (te > 1 ? K_NUM[te] : '') + '十' : '') + '円';
  return `${kanji}{${SEN[th]}${HYAKU[hu]}${JUU[te]}えん}`;
}
