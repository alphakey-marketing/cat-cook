// 街上問路章節（最小版）：玩家係遊客，向路人問路。
// 每級學唔同嘢：lv0 方向單字 / lv1 第幾個街角 / lv2 位置＋行幾耐 / lv3 婉轉請求＋聽長指示＋接受帶路
// 句子寫法：漢字{かな}。 lv: 0 零基礎 / 1 N5 / 2 N4–N3 / 3 N1
import { PH_BYE, PH_BYE_WRONG } from './pharmacy.js';

export const ST_SORRY = { jp: 'すみません。', yue: '唔好意思。' };
export const ST_GREET = { jp: 'はい、 どう しましたか？', yue: '係，咩事？' };
export const ST_BYE_STAFF = [
  { jp: 'いえいえ。', yue: '唔緊要。' },
  { jp: 'いえいえ。 お気{き}を つけて。', yue: '唔緊要，路上小心。' },
  { jp: 'どういたしまして。 お気{き}を つけて。', yue: '唔使客氣，路上小心。' },
  { jp: 'どういたしまして。 どうぞ お気{き}を つけて、 良{よ}い 旅{たび}を。', yue: '唔使客氣，請小心慢行，旅途愉快。' },
];
export { PH_BYE as ST_BYE, PH_BYE_WRONG as ST_BYE_WRONG };

export const DESTS = [
  { id: 'eki', jp: '駅{えき}', yue: '車站' },
  { id: 'konbini', jp: 'コンビニ', yue: '便利店' },
  { id: 'yakkyoku', jp: '薬局{やっきょく}', yue: '藥房' },
  { id: 'yubin', jp: '郵便局{ゆうびんきょく}', yue: '郵局' },
  { id: 'ginko', jp: '銀行{ぎんこう}', yue: '銀行' },
];
export const DIRS = [{ jp: '右{みぎ}', yue: '右' }, { jp: '左{ひだり}', yue: '左' }];
const CNT = [null, { jp: '一{ひと}つ目{め}', yue: '第一個' }, { jp: '二{ふた}つ目{め}', yue: '第二個' }, { jp: '三{みっ}つ目{め}', yue: '第三個' }];
export const LANDMARKS = [{ jp: '交番{こうばん}', yue: '警崗' }, { jp: '公園{こうえん}', yue: '公園' }, { jp: 'ポスト', yue: '郵筒' }];
export const RELS = [{ jp: '隣{となり}', yue: '隔離' }, { jp: '向{む}かい', yue: '對面' }, { jp: '裏{うら}', yue: '後面' }];
export const MINS = [{ jp: '三分{さんぷん}', yue: '3 分鐘' }, { jp: '十分{じゅっぷん}', yue: '10 分鐘' }];

// ---- 玩家問路句 ----
export const askLine = (lv, d) => [
  { jp: `${d.jp}は どこですか？`, yue: `${d.yue}喺邊度？` },
  { jp: `${d.jp}まで どう 行{い}けば いいですか？`, yue: `去${d.yue}點行？` },
  { jp: `${d.jp}に 行{い}きたいのですが、 歩{ある}いて 何分{なんぷん}ぐらい ですか？`, yue: `我想去${d.yue}，行路大約幾分鐘？` },
  { jp: `恐{おそ}れ入{い}りますが、 ${d.jp}への 行{い}き方{かた}を 教{おし}えて いただけませんでしょうか。`, yue: `唔好意思，可唔可以教我點去${d.yue}？` },
][lv];

// ---- 路人答 ----
// lv0：直行／右／左　（dir: 'go' | 0 | 1）
export const reply0 = (dir) => (dir === 'go'
  ? { jp: 'まっすぐ です。', yue: '直行。' }
  : { jp: `${DIRS[dir].jp}です。`, yue: `${DIRS[dir].yue}邊。` });
// lv1：直行，第 n 個街角轉
export const reply1 = (n, dir) => ({ jp: `まっすぐ 行{い}って、 ${CNT[n].jp}の 角{かど}を ${DIRS[dir].jp}に 曲{ま}がって ください。`, yue: `直行，${CNT[n].yue}街角${DIRS[dir].yue}轉。` });
// lv2：喺某地標嘅邊度，行幾分鐘
export const reply2 = (lm, rel, min) => ({ jp: `${LANDMARKS[lm].jp}の ${RELS[rel].jp}に あります。 歩{ある}いて ${MINS[min].jp}ぐらいです。`, yue: `喺${LANDMARKS[lm].yue}${RELS[rel].yue}，行路大約${MINS[min].yue}。` });
// lv3：長指示（信號燈）
export const reply3 = (n, dir) => ({ jp: `この 道{みち}を まっすぐ 進{すす}んで、 ${CNT[n].jp}の 信号{しんごう}を ${DIRS[dir].jp}に 曲{ま}がって ください。 突{つ}き当{あ}たりに ございます。`, yue: `沿住條路直行，${CNT[n].yue}紅綠燈${DIRS[dir].yue}轉，盡頭就係。` });

// lv3 追加：路人婉轉提出帶路，揀得體回應（「結構です」係婉拒）
export const GUIDE = {
  ask: { jp: '少{すこ}し 分{わ}かりにくい 場所{ばしょ}なので、 よろしければ ご案内{あんない}しましょうか？', yue: '' },
  answer: '個位置有啲難搵，問你要唔要佢帶路',
  wrong: ['個位置好近，叫你自己行就得', '佢趕時間，想你快啲離開'],
  then: {
    task: '🗣️ 你想接受帶路',
    ok: { jp: 'お手数{てすう}を おかけしますが、 お願{ねが}いできますでしょうか。', yue: '麻煩你喇，可以拜託你嗎？' },
    bad: [{ jp: 'はい、 結構{けっこう}です。', yue: '好，結構です。', why: '陷阱：「結構です」其實係婉拒（唔使喇），唔係「好呀」' },
          { jp: '案内{あんない}は いいから、 地図{ちず}を ください。', yue: '唔使帶路，畀張地圖我。', why: '語感錯：太直接，冇禮貌' }],
  },
};

// ---- 全部句子（俾語音腳本用）----
export function streetLines() {
  const out = [];
  const P = (l) => out.push({ jp: l.jp, voice: 'cat' });
  const S = (l) => out.push({ jp: l.jp, voice: 'kuma' });
  P(ST_SORRY); S(ST_GREET); ST_BYE_STAFF.forEach(S); S(GUIDE.ask);
  P(GUIDE.then.ok); GUIDE.then.bad.forEach(P);
  for (let lv = 0; lv < 4; lv++) DESTS.forEach((d) => P(askLine(lv, d)));
  ['go', 0, 1].forEach((d) => S(reply0(d)));
  [1, 2, 3].forEach((n) => [0, 1].forEach((d) => { S(reply1(n, d)); S(reply3(n, d)); }));
  LANDMARKS.forEach((_, a) => RELS.forEach((__, b) => MINS.forEach((___, c) => S(reply2(a, b, c)))));
  return out;
}

// 單詞表（vocab.js 會讀）：[id, jp, yue, cat]
export const STREET_WORDS = [
  ['st_doko', '〜は どこですか', '…喺邊度？', 'travel'],
  ['st_massugu', 'まっすぐ', '直行', 'travel'],
  ['st_migi', '右{みぎ}', '右', 'travel'],
  ['st_hidari', '左{ひだり}', '左', 'travel'],
  ['st_kado', '角{かど}を 曲{ま}がる', '喺街角轉彎', 'travel'],
  ['st_tonari', '隣{となり}／向{む}かい', '隔離／對面', 'travel'],
  ['st_nanpun', '何分{なんぷん}', '幾分鐘', 'travel'],
  ['st_shingo', '信号{しんごう}', '紅綠燈', 'travel'],
  ['st_annai', '案内{あんない}', '帶路／介紹', 'travel'],
];
export const STREET_WORD_IDS = STREET_WORDS.map((w) => w[0]);
