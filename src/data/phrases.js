// 分級句庫（設計見 docs/PHRASES.md）
// lv: 0 = 零基礎 / 1 = 初學 / 2 = N3
// hi: true = 用共用客人聲線（HI_VOICES），慳音檔；lv >= 1 自動當 hi
import { S, save, today } from '../save.js';
import { hash } from '../jp.js';
import { RECIPES } from './recipes.js';

export const LEVELS = [
  { id: 0, icon: '🌱', name: '零基礎', desc: '假名都未識', learn: '單字加「ください」，由最簡單開始' },
  { id: 1, icon: '🌿', name: 'N5', desc: '識假名、簡單字、基本句型', learn: '完整禮貌句：「〜をお願いします」' },
  { id: 2, icon: '🌳', name: 'N4–N3', desc: '想練聽力同實用句子', learn: '委婉有禮貌嘅要求、特急、換房' },
  { id: 3, icon: '🏔️', name: 'N1', desc: '敬語、長句、事故廣播', learn: '投訴、交涉、敬語、事故廣播' },
];

// 共用聲線：高等級／新句只做呢兩把聲，客人按 id 固定配一把
export const HI_VOICES = ['usagi', 'kuma'];
export const jpLevel = () => Math.max(0, Math.min(3, S().jpLevel ?? 0));
export const hiVoice = (custId) => HI_VOICES[parseInt(hash(custId), 36) % HI_VOICES.length];
export const lineVoice = (custId, line) => (line.lv > 0 || line.hi ? hiVoice(custId) : custId);

// 今次抽邊個等級：本級 60%，其餘平均分畀較低級（溫習）
export function drawLv() {
  const L = jpLevel();
  if (L === 0 || Math.random() < 0.6) return L;
  return Math.floor(Math.random() * L);
}

// 同一更唔重複同一句（key 用 jp 或 key）；resetUsed() 喺開更／入餐廳時叫
const used = new Set();
export const resetUsed = () => used.clear();
const idOf = (x) => x.key || x.jp;

// 由一堆 { lv } 句子入面按等級抽一句；優先抽冇用過嘅
export function pickByLevel(list, rnd = Math.random) {
  const L = jpLevel();
  const ok = list.filter((x) => (x.lv ?? 0) <= L);
  const want = drawLv();
  const exact = ok.filter((x) => (x.lv ?? 0) === want);
  const fresh = (a) => a.filter((x) => !used.has(idOf(x)));
  const pool = [fresh(exact), fresh(ok), exact, ok].find((a) => a.length) || list;
  const x = pool[Math.floor(rnd() * pool.length)];
  used.add(idOf(x));
  return x;
}

// 答題記錄（俾「想唔想升級」用）：淨係計本級句，仲要記低邊日玩過
export function trackLv(lv, right) {
  if (lv !== jpLevel()) return;
  const st = (S().lvStats ||= {});
  const r = (st[lv] ||= { right: 0, total: 0, days: [] });
  r.total++; if (right) r.right++;
  const d = today();
  (r.days ||= []);
  if (!r.days.includes(d)) r.days.push(d);
  save();
}
export function levelNudge() {
  const L = jpLevel();
  if (L >= 3) return null;
  const r = S().lvStats?.[L];
  if (!r || r.total < 15 || r.right / r.total < 0.8 || (r.days?.length ?? 0) < 2) return null;
  if ((S().lvNudgeDismissed ?? -1) >= L) return null;
  return { from: L, to: L + 1, rate: Math.round((r.right / r.total) * 100), total: r.total };
}

// ===== 客人落單（{dish} 菜名 / {num} 數量）=====
export const ORDER_TEMPLATES = [
  { lv: 0, jp: '{dish}を ください', yue: '唔該畀{dishYue}我' },
  { lv: 0, jp: '{dish}を お願{ねが}いします', yue: '麻煩你，{dishYue}' },
  { lv: 0, hi: true, jp: '{dish}、 ください', yue: '唔該，{dishYue}' },
  { lv: 1, jp: 'すみません、{dish}を ください', yue: '唔好意思，我要{dishYue}' },
  { lv: 1, jp: 'すみません、 {dish}は ありますか？', yue: '唔好意思，有冇{dishYue}？' },
  { lv: 1, jp: '{dish}を お願{ねが}いできますか？', yue: '可唔可以幫我整{dishYue}？' },
  { lv: 2, jp: '今日{きょう}は {dish}に しようかな', yue: '今日食{dishYue}好喇' },
  { lv: 2, jp: '{dish}って、 すぐ できますか？', yue: '{dishYue}係咪好快有得食？' },
  { lv: 2, jp: 'メニューを 見{み}て… {dish}に します', yue: '睇完餐牌…我要{dishYue}' },
];
export const ORDER_NUM_TEMPLATES = [
  { lv: 0, jp: '{dish}を {num} ください', yue: '唔該{numYue}{dishYue}' },
  { lv: 0, jp: '{dish}、{num} お願{ねが}いします', yue: '{dishYue}，{numYue}，唔該' },
  { lv: 1, jp: '{dish}を {num} お願{ねが}いできますか？', yue: '可唔可以幫我整{numYue}{dishYue}？' },
  { lv: 2, jp: '{dish}は {num}で お願{ねが}いします', yue: '{dishYue}要{numYue}，唔該' },
];

// ===== 客人反應 =====
// 分工：great/ok/meh = 上菜時嘅味道評價（跟星級 3/2/1）；bye = 道別（有 key 嘅會記 SRS，偶爾小測）
// 閒聊（SMALLTALK_LIST）淨係放「問題／情境」，唔再放評價同道別
export const REACT = {
  great: [
    { lv: 0, jp: 'おいしい！', yue: '好好食！' },
    { lv: 0, jp: 'すごく おいしいです！', yue: '超好食！' },
    { lv: 0, jp: '最高{さいこう}！', yue: '一流！' },
    { lv: 1, jp: '味{あじ}が ちょうど いいです', yue: '味道啱啱好' },
    { lv: 1, jp: '本当{ほんとう}に おいしいです！', yue: '真係好好食！' },
    { lv: 1, jp: 'これ、 大好{だいす}きな 味{あじ}です', yue: '呢個係我最鍾意嘅味道' },
    { lv: 2, jp: '優{やさ}しい 味{あじ}で、 ほっとしますね', yue: '味道好溫和，食完好放鬆' },
    { lv: 2, jp: '見{み}た目{め}も きれいで、 食{た}べるのが もったいないです', yue: '賣相咁靚，食咗好唔捨得' },
    { lv: 2, jp: '一口{ひとくち}食{た}べただけで、 幸{しあわ}せな 気持{きも}ちに なりました', yue: '食一啖已經覺得好幸福' },
  ],
  ok: [
    { lv: 0, jp: 'うん、おいしいです', yue: '嗯，幾好食' },
    { lv: 0, hi: true, jp: 'おいしいです', yue: '好食' },
    { lv: 1, jp: 'まあまあ おいしいです', yue: '幾好食，都ok' },
    { lv: 1, jp: 'なかなか おいしいです', yue: '相當好食' },
    { lv: 2, jp: 'なかなか いけますね', yue: '都幾唔錯喎' },
    { lv: 2, jp: '悪{わる}くない 味{あじ}ですね', yue: '味道唔差喎' },
  ],
  meh: [
    { lv: 0, hi: true, jp: 'うーん、 ちょっと…', yue: '嗯…有啲…' },
    { lv: 1, jp: 'もう ちょっと 味{あじ}が ほしいです', yue: '想味道再濃啲' },
    { lv: 2, jp: 'もう 少{すこ}し 味{あじ}が はっきり していると いいですね', yue: '味道再突出啲就好喇' },
  ],
  wrong: [
    { lv: 0, jp: 'あれ？ これじゃないです', yue: '咦？唔係呢個喎' },
    { lv: 1, jp: 'これ、 頼{たの}んでいません', yue: '呢個我冇叫' },
    { lv: 2, jp: 'すみません、 注文{ちゅうもん}したのは これじゃなかったと 思{おも}うんですが', yue: '唔好意思，我諗我叫嘅唔係呢個' },
  ],
  // key：用單詞 id 就會同單詞簿熟練度連動；by_ 開頭係純句子
  bye: [
    { key: 'gochisousama', lv: 0, jp: 'ごちそうさまでした！', yue: '多謝款待！' },
    { key: 'matta', lv: 0, jp: 'また 来{き}ます！', yue: '我會再嚟！' },
    { key: 'oishikatta', lv: 0, hi: true, jp: '美味{おい}しかったです！', yue: '好好食呀！' },
    { key: 'arigatou', lv: 0, hi: true, jp: 'ありがとうございました！', yue: '多謝晒！' },
    { key: 'okaikei', lv: 1, jp: 'お会計{かいけい}、 お願{ねが}いします。 ごちそうさまでした', yue: '唔該埋單，多謝款待' },
    { key: 'by_tomodachi', lv: 1, jp: 'とても おいしかったです。 また 友達{ともだち}と 来{き}ます！', yue: '好好食，下次同朋友嚟！' },
    { key: 'by_mata', lv: 1, jp: 'また 近{ちか}いうちに 来{き}ますね', yue: '好快會再嚟' },
    { key: 'by_chikaku', lv: 2, jp: 'この 近{ちか}くに 来{き}たら、 また 寄{よ}らせてもらいます', yue: '之後行經附近，我會再嚟' },
    { key: 'by_tsurete', lv: 2, jp: '今度{こんど}は 家族{かぞく}も 連{つ}れて 来{き}ますね', yue: '下次帶埋家人嚟' },
    { key: 'by_gochisou2', lv: 2, jp: '今日{きょう}は ごちそうさまでした。 どれも 本当{ほんとう}に おいしかったです', yue: '今日多謝款待，每樣都真係好好食' },
  ],
  hello: [
    { lv: 0, jp: 'こんにちは！', yue: '你好！' },
    { lv: 0, jp: 'こんばんは', yue: '晚安（夜晚打招呼）' },
  ],
};

// 小黑講嘢（固定）
export const CAT = {
  wake: { jp: 'ふわぁ… おはようにゃ！', yue: '呵～早晨喵！' },
  intro: { jp: 'ぼくは クロ。この 店{みせ}の シェフにゃ', yue: '我叫小黑（クロ），係呢間店嘅廚師喵' },
  irasshai: { jp: 'いらっしゃいませ！', yue: '歡迎光臨！' },
  done: { jp: 'できたにゃ！', yue: '整好喇喵！' },
  great: { jp: '上手{じょうず}にゃ！', yue: '好叻喵！' },
  oops: { jp: 'だいじょうぶ、もう 一回{いっかい}！', yue: '唔緊要，再嚟一次！' },
  purr: { jp: 'ごろごろ…', yue: '（呼嚕呼嚕⋯）' },
  levelup: { jp: 'レベルアップにゃ！', yue: '升級喇喵！' },
  newRecipe: { jp: '新{あたら}しい レシピにゃ！', yue: '新食譜喵！' },
  tomorrow: { jp: 'また 明日{あした}ね！', yue: '聽日見喇！' },
  shiftEnd: { jp: 'お疲{つか}れ様{さま}でした！', yue: '辛苦晒！（收工講）' },
  goOut: { jp: '一緒{いっしょ}に 食{た}べに 行{い}こう！', yue: '一齊出去食飯啦！' },
};

// ===== 閒聊（SRS 溫習：客人講一句，你揀廣東話意思）=====
// 只放「問題／情境」；味道評價喺 REACT，道別喺 REACT.bye，落單細節喺 DETAILS
// ch: any = 全部章節 / home izakaya cafe dark
// key：舊句沿用單詞 id；新句用 st_ 開頭（唔入單詞簿，但記 SRS，喺「句子」頁睇到）
const T = (key, lv, ch, jp, yue) => ({ key, lv, ch, jp, yue, hi: true });
export const SMALLTALK_LIST = [
  // --- 舊句（lv0，保留六把聲線）---
  { key: 'oishii', lv: 0, ch: 'any', jp: 'この 店{みせ}、おいしいですね', yue: '呢間店好好食喎' },
  { key: 'atsui', lv: 0, ch: 'any', jp: 'わあ、熱{あつ}い！', yue: '嘩，好熱！' },
  { key: 'sumimasen', lv: 0, ch: 'any', jp: 'すみません！', yue: '唔好意思！' },
  // --- Lv0 ---
  T('st_osusume', 0, 'home', 'おすすめは？', '有咩推介？'),
  T('st_nioi', 0, 'home', 'いい におい！', '好香呀！'),
  T('st_mizu', 0, 'any', 'お水{みず}、 ください', '唔該畀杯水'),
  T('st_toire', 0, 'any', 'トイレは どこですか？', '洗手間喺邊？'),
  T('st_kanpai', 0, 'izakaya', '乾杯{かんぱい}！', '乾杯！'),
  T('st_toriaezu', 0, 'izakaya', 'とりあえず ビール！', '總之先嚟啤酒！'),
  T('st_hot', 0, 'cafe', 'ホット、 お願{ねが}いします', '要熱嘅，唔該'),
  T('st_ice', 0, 'cafe', 'アイス、 お願{ねが}いします', '要凍嘅，唔該'),
  T('st_nani', 0, 'dark', 'これ、 なに？', '呢個係咩嚟？'),
  T('st_tezukuri', 0, 'dark', '手作{てづく}り？', '自家製？'),
  // --- Lv1 ---
  T('st_shizuka', 1, 'any', 'この 店{みせ}、 静{しず}かで いいですね', '呢間舖頭好靜，好舒服'),
  T('st_hajimete', 1, 'any', 'ここは 初{はじ}めてです', '我第一次嚟呢度'),
  T('st_haitte', 1, 'any', 'これには 何{なに}が 入{はい}っていますか？', '呢個入面有啲咩？'),
  T('st_kyou', 1, 'any', '今日{きょう}は 暑{あつ}いですね', '今日好熱呀'),
  T('st_suwaru', 1, 'home', 'ここ、 座{すわ}っても いいですか？', '呢度可以坐嗎？'),
  T('st_sukuname', 1, 'home', 'ご飯{はん}、 少{すく}なめに できますか？', '飯可唔可以少啲？'),
  T('st_okawari', 1, 'home', 'おかわり、 いいですか？', '可以添飯嗎？'),
  T('st_dashi', 1, 'home', 'この 味噌汁{みそしる}、 何{なん}の だしですか？', '呢碗味噌湯用咩熬底？'),
  T('st_lastorder', 1, 'izakaya', 'ラストオーダーは 何時{なんじ}ですか？', '最後落單係幾點？'),
  T('st_nama', 1, 'izakaya', '生{なま}ビール、 もう 一杯{いっぱい}', '生啤再嚟一杯'),
  T('st_satou_nashi', 1, 'cafe', '砂糖{さとう}なしで お願{ねが}いします', '唔該走糖'),
  T('st_milk_ooi', 1, 'cafe', 'ミルクを 多{おお}めに できますか？', '可唔可以多奶？'),
  T('st_tsukuru', 1, 'dark', 'これは お店{みせ}で 作{つく}りましたか？', '呢個係咪舖頭自己整？'),
  T('st_nikomi', 1, 'dark', 'どのくらい 煮込{にこ}みましたか？', '燉咗幾耐？'),
  // --- Lv2（N3）---
  T('st_mae', 2, 'any', 'この 店{みせ}、 前{まえ}から 来{き}てみたかったんです', '呢間舖我想嚟好耐㗎喇'),
  T('st_hitori', 2, 'any', '一人{ひとり}でも 入{はい}りやすい お店{みせ}ですね', '一個人入嚟都冇壓力'),
  T('st_susume', 2, 'any', '友達{ともだち}に すすめられて 来{き}ました', '朋友推介我嚟'),
  T('st_fun', 2, 'any', '雰囲気{ふんいき}が 落{お}ち着{つ}いていて いいですね', '氣氛好舒服，好寧靜'),
  T('st_ryou', 2, 'home', '値段{ねだん}の わりに、 量{りょう}が 多{おお}くて 驚{おどろ}きました', '價錢計，份量多到嚇親'),
  T('st_tezukuri2', 2, 'home', 'これ、 全部{ぜんぶ} 手作{てづく}りなんですか？', '呢啲全部係自己整？'),
  T('st_omakase', 2, 'izakaya', 'お任{まか}せで 何品{なんぴん}か 出{だ}してもらえますか？', '可唔可以隨你出幾款？'),
  T('st_agetate', 2, 'izakaya', '唐揚{からあ}げは 揚{あ}げたてを 食{た}べたいので、 後{あと}で 出{だ}してもらえますか？', '唐揚想食啱炸起，可唔可以遲啲先上？'),
  T('st_samui', 2, 'cafe', '今日{きょう}は 寒{さむ}いので、 熱{あつ}めに してもらえますか？', '今日凍，可唔可以整熱啲？'),
  T('st_purin', 2, 'cafe', 'プリンは 食後{しょくご}に 出{だ}していただけますか？', '布甸可唔可以食完先上？'),
  T('st_hachijikan', 2, 'dark', '本当{ほんとう}に 八時間{はちじかん}も 煮込{にこ}んだんですか？', '真係燉咗八個鐘咁耐？'),
  T('st_genzairyo', 2, 'dark', '原材料{げんざいりょう}を 見{み}せてもらえますか？', '可唔可以睇吓成分表？'),
];
export const SMALLTALK = Object.fromEntries(SMALLTALK_LIST.map((x) => [x.key, x]));

// 抽一句閒聊：按章節＋等級；同一更唔重複
export function pickSmalltalk(chapter, srsPick, rnd = Math.random) {
  const L = jpLevel();
  const pool = SMALLTALK_LIST.filter((x) => x.lv <= L && (x.ch === 'any' || x.ch === chapter));
  const want = drawLv();
  const level = pool.filter((x) => x.lv === want);
  const base = level.length >= 2 ? level : pool;
  const fresh = base.filter((x) => !used.has(x.key));
  const cand = fresh.length ? fresh : base;
  const key = srsPick(cand.map((x) => x.key));
  used.add(key);
  const st = SMALLTALK[key];
  const uniq = (a) => a.filter((x, i) => a.findIndex((y) => y.yue === x.yue) === i);
  const shuf = (a) => [...a].sort(() => rnd() - 0.5);
  const same = pool.filter((x) => x.key !== key && x.yue !== st.yue && x.lv === st.lv);
  const rest = pool.filter((x) => x.key !== key && x.yue !== st.yue);
  const wrongs = uniq([...shuf(same), ...shuf(rest)]).slice(0, 2);
  return { st, wrongs };
}

// ===== 落單細節（點完菜再補一句；只喺食堂 home 章節）=====
// label：廣東話答案；when：呢道菜適唔適用
const NEGI = ['misoshiru', 'oyakodon', 'ramen'];
export const DETAILS = [
  { key: 'oomori', lv: 1, hi: true, jp: '大盛{おおも}りで お願{ねが}いします', yue: '大份，唔該', label: '要大份' },
  { key: 'dt_sukuname', lv: 1, hi: true, jp: '少{すく}なめで お願{ねが}いします', yue: '細份，唔該', label: '要細份' },
  { key: 'dt_koko', lv: 1, hi: true, jp: 'ここで 食{た}べます', yue: '喺度食', label: '喺度食' },
  { key: 'dt_mochikaeri', lv: 1, hi: true, jp: 'お持{も}ち帰{かえ}りで お願{ねが}いします', yue: '外賣，唔該', label: '外賣' },
  { key: 'dt_negi', lv: 2, hi: true, jp: 'ねぎ抜{ぬ}きに してもらえますか？', yue: '可唔可以走蔥？', label: '走蔥', when: (dish) => NEGI.includes(dish) },
  { key: 'dt_henkou', lv: 2, hi: true, jp: 'すみません、 やっぱり 持{も}ち帰{かえ}りに 変更{へんこう}できますか？', yue: '唔好意思，可唔可以改做外賣？', label: '改做外賣' },
];
// 抽一個細節（冇就返 null）；錯誤選項用其他細節嘅 label
export function pickDetail(dish) {
  const L = jpLevel();
  const pool = DETAILS.filter((d) => d.lv <= L && (!d.when || d.when(dish)));
  if (!pool.length) return null;
  const want = drawLv();
  const level = pool.filter((d) => d.lv === want);
  const base = level.length ? level : pool;
  const fresh = base.filter((d) => !used.has(d.key));
  const cand = fresh.length ? fresh : base;
  const d = cand[Math.floor(Math.random() * cand.length)];
  used.add(d.key);
  const labels = [...new Set(pool.filter((x) => x.label !== d.label).map((x) => x.label))].sort(() => Math.random() - 0.5);
  return { d, wrongs: labels.slice(0, 2) };
}

// ===== 章節額外對白（居酒屋沽清、咖啡店熟客）=====
// 沽清：小黑講（cat 聲）
export const SOLDOUT = [
  { lv: 0, jp: '売{う}り切{き}れです', yue: '賣晒喇' },
  { lv: 1, jp: 'すみません、売{う}り切{き}れです。', yue: '唔好意思，賣晒喇' },
  { lv: 2, jp: '申{もう}し訳{わけ}ございません、 あいにく {dish}は 切{き}らしておりまして…', yue: '好抱歉，啱啱{dishYue}用晒…' },
];
// 客人改要：{dish}
export const REPLACE = [
  { lv: 0, hi: true, jp: '{dish}を ください', yue: '咁要{dishYue}' },
  { lv: 1, jp: '{dish}を お願{ねが}いします', yue: '咁要{dishYue}' },
  { lv: 2, jp: 'それなら、 {dish}に します', yue: '咁我要{dishYue}' },
];
export const TSUIKA = [
  { lv: 0, hi: true, jp: '追加{ついか}で！', yue: '加單！' },
  { lv: 1, jp: 'すみません、もう 一{ひと}つ 追加{ついか}で。', yue: '唔該，再加一份。' },
  { lv: 2, jp: 'あ、 すみません、 同{おな}じものを もう 一{ひと}つ 追加{ついか}で お願{ねが}いします', yue: '啊唔好意思，同一款再加一份，唔該' },
];
// 落單後、未煮前改單（居酒屋）：減少／換菜／取消。加單用上面 TSUIKA
export const HERASU = [
  { lv: 0, hi: true, jp: '一{ひと}つ 減{へ}らして ください', yue: '減一份，唔該' },
  { lv: 1, jp: 'すみません、 一{ひと}つ 減{へ}らして ください。', yue: '唔好意思，減一份。' },
  { lv: 2, jp: 'あ、 すみません、 一{ひと}つ 減{へ}らして もらえますか？', yue: '啊唔好意思，可唔可以減一份？' },
];
// {dish}：改要嘅新菜
export const KAERU = [
  { lv: 0, hi: true, jp: '{dish}に 変{か}えて ください', yue: '改做{dishYue}，唔該' },
  { lv: 1, jp: 'すみません、 {dish}に 変{か}えて ください。', yue: '唔好意思，改做{dishYue}。' },
  { lv: 2, jp: 'あ、 すみません、 {dish}に 変{か}えて もらえますか？', yue: '啊唔好意思，可唔可以改做{dishYue}？' },
];
export const KYANSERU = [
  { lv: 0, hi: true, jp: 'やっぱり キャンセルで！', yue: '算啦，取消！' },
  { lv: 1, jp: 'すみません、 やっぱり キャンセルで お願{ねが}いします。', yue: '唔好意思，算啦，唔該取消。' },
  { lv: 2, jp: 'あの、 すみません、 やっぱり 注文{ちゅうもん}を キャンセルして もらえますか？', yue: '請問，我想取消啱啱嗰張單，得唔得？' },
];
// 沽清後客人唔想要替代品
export const YAMERU = [
  { lv: 0, hi: true, jp: 'じゃあ、 やめておきます', yue: '咁就算啦' },
  { lv: 1, jp: 'そうですか… じゃあ、 やめておきます。', yue: '係咩…咁就算啦。' },
  { lv: 2, jp: 'そうですか… それなら、 今日{きょう}は やめておきます', yue: '係咩…咁今日就唔要喇' },
];
export const FINISH_STEPS = {
  hot: '温{あたた}かいので 仕上{しあ}げて', iced: '冷{つめ}たいので 仕上{しあ}げて',
  less_sugar: '甘{あま}さ控{ひか}えめで 仕上{しあ}げて', no_sugar: '砂糖{さとう}なしで 仕上{しあ}げて',
};

// ===== 日本餐廳（你做客人，小黑做店員）=====
export const RESTAURANT = {
  name: { jp: '定食屋{ていしょくや} くろねこ', yue: '黑貓定食屋' },
  people: [
    { n: 1, key: 'hitori', jp: '一人{ひとり}です', yue: '一位', mei: '一名{いちめい}' },
    { n: 2, key: 'futari', jp: '二人{ふたり}です', yue: '兩位', mei: '二名{にめい}' },
    { n: 3, key: 'sannin', jp: '三人{さんにん}です', yue: '三位', mei: '三名{さんめい}' },
  ],
  foods: ['onigiri', 'misoshiru', 'oyakodon', 'ramen'],
  drinks: ['ocha', 'omizu', 'biiru'],
  hasNegi: ['misoshiru', 'oyakodon', 'ramen'],
  prices: { onigiri: 200, misoshiru: 150, oyakodon: 850, ramen: 900, ocha: 0, omizu: 0, biiru: 500 },
  staff: {
    welcome: { jp: 'いらっしゃいませ！ 何名様{なんめいさま}ですか？', yue: '歡迎光臨！請問幾位？' },
    seat: { jp: 'こちらへ どうぞ', yue: '呢邊請' },
    order: { jp: 'ご注文{ちゅうもん}は お決{き}まりですか？', yue: '決定好叫咩未？' },
    drink: { jp: 'お飲{の}み物{もの}は いかがですか？', yue: '想飲啲咩？' },
    confirm: { jp: '以上{いじょう}で よろしいですか？', yue: '就咁多？' },
    wait: { jp: '少々{しょうしょう} お待{ま}ちください', yue: '請稍等' },
    serve: { jp: 'お待{ま}たせしました！', yue: '久等喇！' },
    pay: { jp: 'ありがとうございます。{price}円{えん}です', yue: '多謝，{price} 円' },
    pay2: { jp: '税込{ぜいこ}みで {price}円{えん}に なります', yue: '連稅 {price} 円' },
    bye: { jp: 'ありがとうございました！ また お越{こ}しください', yue: '多謝晒！歡迎再嚟' },
    sorry: { jp: '大変{たいへん} お待{ま}たせしました！', yue: '等咗好耐，真係唔好意思！' },
  },
  you: {
    order: { jp: '{food}を {num} ください', yue: '唔該畀{numYue}{foodYue}我' },
    drink: { jp: '{drink}を {num} お願{ねが}いします', yue: '{numYue}{drinkYue}，唔該' },
    yes: { jp: 'はい、お願{ねが}いします', yue: '係，唔該' },
    itadakimasu: { jp: 'いただきます！', yue: '開動！（食之前）' },
    gochisou: { jp: 'ごちそうさまでした', yue: '多謝款待（食完）' },
    kaikei: { jp: 'すみません、お会計{かいけい} お願{ねが}いします', yue: '唔好意思，唔該埋單' },
    wrongGreet: { jp: 'おやすみなさい', yue: '晚安（瞓覺前講）' },
    wrongEat: { jp: 'さようなら', yue: '再見（好正式／長時間唔見）' },
    wrongPay: { jp: 'おかわり ください', yue: '唔該再嚟一碗' },
    no: { jp: 'いいえ、大丈夫{だいじょうぶ}です', yue: '唔使喇，冇問題' },
  },
};

// 額外對答「環節」(beat)：每次抽 1–3 個，按等級。build(c) 返回
//   { staff:{jp,yue}|null, reply?:{jp,yue}, prompt?:cantonese, title, options:[{jp,yue}]（第一個係啱）}
//   c = { ppl, food, drink, num, f:{旗標} }
// phase: enter(報咗人數之後) seat(坐低之後) preorder(點菜前) order(點菜後) wait(等菜) mid(上菜後) after(食完) pay(叫咗埋單後) receipt(俾完錢)
const people = (c) => RESTAURANT.people[c.ppl.n - 1];
export const BEATS = [
  // ---- Lv0 ----
  { id: 'water0', lv: 0, phase: 'preorder',
    task: () => '想要杯水', build: () => ({
      staff: null, prompt: '（想要杯水）', title: '💧 想要杯水，點講？',
      options: [{ jp: 'お水{みず}、 ください', yue: '唔該畀杯水' }, { jp: 'おやすみなさい', yue: '晚安（瞓覺前講）' }, { jp: 'さようなら', yue: '再見（好正式）' }] }) },
  { id: 'call0', lv: 0, phase: 'mid',
    task: () => '想叫店員', build: () => ({
      staff: null, prompt: '（想叫店員過嚟）', title: '✋ 叫店員，點講？',
      options: [{ jp: 'すみません！', yue: '唔好意思！' }, { jp: 'いらっしゃいませ！', yue: '歡迎光臨（店員講）' }, { jp: 'ごちそうさまでした', yue: '多謝款待（食完）' }] }) },
  // ---- Lv1 ----
  { id: 'reserve1', lv: 1, phase: 'enter',
    init: (c) => { c.f.reserved = Math.random() < 0.5; },
    task: (c) => (c.f.reserved ? '你有訂位' : '你冇訂位'),
    build: (c) => ({
      staff: { jp: 'ご予約{よやく}は されていますか？', yue: '有冇訂位？' }, title: '📅 有冇訂位？',
      options: c.f.reserved
        ? [{ jp: 'はい、 予約{よやく}しました', yue: '有，訂咗位' }, { jp: 'いいえ、 予約{よやく}していません', yue: '冇訂位' }, { jp: 'ごちそうさまでした', yue: '多謝款待' }]
        : [{ jp: 'いいえ、 予約{よやく}していません', yue: '冇訂位' }, { jp: 'はい、 予約{よやく}しました', yue: '有，訂咗位' }, { jp: 'ごちそうさまでした', yue: '多謝款待' }] }) },
  { id: 'counter1', lv: 1, phase: 'seat',
    task: () => '你唔介意坐吧枱', build: () => ({
      staff: { jp: 'カウンター席{せき}でも よろしいですか？', yue: '坐吧枱得唔得？' }, title: '🪑 坐吧枱得唔得？（你唔介意）',
      options: [{ jp: 'はい、 大丈夫{だいじょうぶ}です', yue: '得，冇問題' }, { jp: 'おやすみなさい', yue: '晚安（瞓覺前講）' }, { jp: 'おかわり ください', yue: '唔該再嚟一碗' }] }) },
  { id: 'recommend1', lv: 1, phase: 'preorder',
    task: () => '唔知食咩，想問推介', build: (c) => ({
      staff: null, prompt: '（唔知食咩，想問店員推介）', title: '🤔 想問推介，點講？',
      options: [{ jp: 'おすすめは 何{なん}ですか？', yue: '有咩推介？' }, { jp: 'お会計{かいけい}は いくらですか？', yue: '幾多錢？' }, { jp: 'ごちそうさまでした', yue: '多謝款待' }],
      reply: { jp: `本日{ほんじつ}の おすすめは ${recJp(c)}です`, yue: `今日推介${recYue(c)}` } }) },
  { id: 'chopsticks1', lv: 1, phase: 'mid',
    task: () => '冇筷子，想叫店員攞', build: () => ({
      staff: null, prompt: '（發現冇筷子）', title: '🥢 冇筷子，點講？',
      options: [{ jp: 'すみません、 お箸{はし}を ください', yue: '唔好意思，唔該畀對筷子' }, { jp: 'すみません、 お水{みず}を ください', yue: '唔好意思，唔該畀杯水' }, { jp: 'すみません、 さようなら', yue: '唔好意思，再見' }] }) },
  { id: 'split1', lv: 1, phase: 'pay',
    when: (c) => c.ppl.n >= 2,
    init: (c) => { c.f.split = Math.random() < 0.5; },
    task: (c) => (c.f.split ? '各自畀錢' : '你請客，一齊畀'),
    build: (c) => ({
      staff: { jp: 'お会計{かいけい}は 別々{べつべつ}ですか？ ご一緒{いっしょ}ですか？', yue: '分開畀定一齊畀？' }, title: '💴 點樣畀錢？',
      options: c.f.split
        ? [{ jp: '別々{べつべつ}で お願{ねが}いします', yue: '分開畀，唔該' }, { jp: '一緒{いっしょ}で お願{ねが}いします', yue: '一齊畀，唔該' }, { jp: 'いただきます', yue: '開動喇' }]
        : [{ jp: '一緒{いっしょ}で お願{ねが}いします', yue: '一齊畀，唔該' }, { jp: '別々{べつべつ}で お願{ねが}いします', yue: '分開畀，唔該' }, { jp: 'いただきます', yue: '開動喇' }] }) },
  { id: 'cash1', lv: 1, phase: 'pay',
    when: (c) => c.ppl.n === 1,
    init: (c) => { c.f.card = Math.random() < 0.5; },
    task: (c) => (c.f.card ? '你想碌卡' : '你想畀現金'),
    build: (c) => ({
      staff: { jp: 'お支払{しはら}いは 現金{げんきん}ですか？ カードですか？', yue: '現金定碌卡？' }, title: '💳 現金定碌卡？',
      options: c.f.card
        ? [{ jp: 'カードで お願{ねが}いします', yue: '碌卡，唔該' }, { jp: '現金{げんきん}で お願{ねが}いします', yue: '現金，唔該' }, { jp: 'おやすみなさい', yue: '晚安' }]
        : [{ jp: '現金{げんきん}で お願{ねが}いします', yue: '現金，唔該' }, { jp: 'カードで お願{ねが}いします', yue: '碌卡，唔該' }, { jp: 'おやすみなさい', yue: '晚安' }] }) },
  // ---- Lv2（N3）----
  { id: 'reserve2', lv: 2, phase: 'enter',
    init: (c) => { c.f.reserved = Math.random() < 0.5; },
    task: (c) => (c.f.reserved ? `你七點訂咗位（${people(c).yue}，姓陳）` : '你冇訂位，但有時間，願意等'),
    build: (c) => {
      const p = people(c), wrongP = RESTAURANT.people.find((x) => x.n !== p.n);
      return c.f.reserved ? {
        staff: { jp: 'ご予約の お名前{なまえ}を お願{ねが}いします', yue: '請問訂位姓名？' }, title: '📅 報訂位資料（七點、姓陳）',
        options: [
          { jp: `七時{しちじ}に ${p.mei}で 予約{よやく}した チャンです`, yue: `我姓陳，訂咗七點${p.yue}` },
          { jp: `七時{しちじ}に ${wrongP.mei}で 予約{よやく}した チャンです`, yue: `我姓陳，訂咗七點${wrongP.yue}` },
          { jp: `八時{はちじ}に ${p.mei}で 予約{よやく}した チャンです`, yue: `我姓陳，訂咗八點${p.yue}` }] }
        : {
          staff: { jp: 'ただいま 満席{まんせき}でして、 十分{じゅっぷん}ほど お待{ま}ちいただくことになりますが、 よろしいですか？', yue: '而家滿座，要等十分鐘左右，得唔得？' }, title: '⏳ 要等十分鐘（你有時間）',
          options: [{ jp: 'はい、 待{ま}ちます', yue: '得，我等' }, { jp: 'じゃあ、 また 今度{こんど}に します', yue: '咁下次先啦' }, { jp: 'ごちそうさまでした', yue: '多謝款待' }] };
    } },
  { id: 'luggage2', lv: 2, phase: 'seat',
    task: () => '行李多，想坐枱', build: () => ({
      staff: { jp: 'お席{せき}は カウンターと テーブルが ございますが…', yue: '有吧枱同枱位，你想坐邊？' }, title: '🧳 行李多，想坐枱',
      options: [
        { jp: '荷物{にもつ}が 多{おお}いので、 テーブル席{せき}に していただけますか？', yue: '我哋行李多，可唔可以坐枱？' },
        { jp: 'テーブル席{せき}に しろ', yue: '畀張枱我坐（好粗魯）' },
        { jp: '荷物{にもつ}が 少{すく}ないので、 カウンター席{せき}に してください', yue: '行李少，坐吧枱（同情況唔符）' }] }) },
  { id: 'negi2', lv: 2, phase: 'order',
    when: (c) => RESTAURANT.hasNegi.includes(c.food),
    task: () => '你唔食蔥', build: () => ({
      staff: null, prompt: '（你唔食蔥）', title: '🙏 想走蔥，點講？',
      options: [
        { jp: 'ねぎ抜{ぬ}きに していただけますか？', yue: '可唔可以走蔥？' },
        { jp: 'ねぎを 多{おお}めに お願{ねが}いします', yue: '蔥多啲，唔該（相反）' },
        { jp: 'ねぎ抜{ぬ}きに しろ', yue: '走蔥啦（好粗魯）' }] }) },
  { id: 'late2', lv: 2, phase: 'wait',
    task: () => '等咗好耐，菜仲未嚟', build: () => ({
      staff: null, prompt: '（等咗好耐，菜仲未嚟）', title: '⌛ 菜仲未嚟，點講？',
      reply: RESTAURANT.staff.sorry,
      options: [
        { jp: '注文{ちゅうもん}した 料理{りょうり}が まだ 来{き}ていないんですが…', yue: '我叫咗嘅菜仲未嚟…' },
        { jp: '早{はや}く しろ', yue: '快啲啦（好粗魯）' },
        { jp: 'ごちそうさまでした', yue: '多謝款待' }] }) },
  { id: 'clear2', lv: 2, phase: 'after',
    task: () => '', build: () => ({
      staff: { jp: 'お下{さ}げしても よろしいですか？', yue: '可唔可以收走碟？' }, title: '🍽️ 食晒喇，點答？',
      options: [{ jp: 'はい、 お願{ねが}いします', yue: '好，唔該' }, { jp: 'すみません、 まだ 食{た}べています', yue: '唔好意思，我仲食緊（同情況唔符）' }, { jp: 'おかわり ください', yue: '唔該再嚟一碗' }] }) },
  { id: 'cashonly2', lv: 2, phase: 'pay',
    init: (c) => { c.f.cashOnly = true; },
    task: () => '你有現金',
    build: () => ({
      staff: { jp: '現金{げんきん}のみと なっておりますが…', yue: '我哋只收現金…' }, title: '💴 只收現金',
      options: [{ jp: 'じゃあ、 現金{げんきん}で 払{はら}います', yue: '咁我畀現金' }, { jp: 'カードで 払{はら}います', yue: '我碌卡（唔收卡）' }, { jp: 'おやすみなさい', yue: '晚安' }] }) },
  { id: 'receipt2', lv: 2, phase: 'receipt',
    task: () => '你想要收據', build: () => ({
      staff: null, prompt: '（想要張收據，抬頭唔使寫）', title: '🧾 想要收據，點講？',
      options: [
        { jp: '領収書{りょうしゅうしょ}を いただけますか？ 宛名{あてな}は なしで 大丈夫{だいじょうぶ}です', yue: '可唔可以畀張收據？抬頭唔使寫' },
        { jp: '領収書{りょうしゅうしょ}を よこせ', yue: '收據拎嚟（好粗魯）' },
        { jp: 'お箸{はし}を ください', yue: '唔該畀對筷子（唔對題）' }] }) },
];
const REC_NAME = { onigiri: ['おにぎり', '飯糰'], misoshiru: ['味噌汁{みそしる}', '麵豉湯'], oyakodon: ['親子丼{おやこどん}', '親子丼'], ramen: ['ラーメン', '拉麵'] };
function recJp(c) { return c.foodJp ?? REC_NAME[c.food][0]; }
function recYue(c) { return c.foodYue ?? REC_NAME[c.food][1]; }

// 抽 n 個環節：本級 weight 3，其他較低級 weight 1；每個 phase 最多一個
export function drawBeats(c, n) {
  const L = jpLevel();
  const pool = BEATS.filter((b) => b.lv <= L && (!b.when || b.when(c)));
  const chosen = [];
  const phases = new Set();
  while (chosen.length < n) {
    const cand = pool.filter((b) => !chosen.includes(b) && !phases.has(b.phase));
    if (!cand.length) break;
    const w = cand.map((b) => (b.lv === L ? 3 : 1));
    let r = Math.random() * w.reduce((a, b) => a + b, 0);
    let pickIdx = 0;
    for (let i = 0; i < cand.length; i++) { r -= w[i]; if (r <= 0) { pickIdx = i; break; } }
    const b = cand[pickIdx];
    chosen.push(b); phases.add(b.phase);
  }
  for (const b of chosen) b.init?.(c);
  return chosen;
}
export const BEAT_COUNT = [1, 2, 3, 3];

// 全部餐廳句（俾 gen-voice 用）：窮舉人數／菜／飲品／旗標
export function allRestaurantLines() {
  const staff = new Set(), you = new Set();
  const add = (set, l) => l?.jp && set.add(l.jp);
  const flagSets = [];
  for (const reserved of [true, false]) for (const split of [true, false]) for (const card of [true, false]) flagSets.push({ reserved, split, card });
  for (const ppl of RESTAURANT.people) for (const food of RESTAURANT.foods) for (const drink of RESTAURANT.drinks) for (const f of flagSets) {
    const c = { ppl, food, drink, f: { ...f } };
    for (const b of BEATS) {
      if (b.when && !b.when(c)) continue;
      const r = b.build(c);
      add(staff, r.staff); add(staff, r.reply); r.options.forEach((o) => add(you, o));
    }
  }
  return { staff: [...staff], you: [...you] };
}

// 做客人嘅餐廳：按章節換背景、餐牌同菜單
export const RESTO_CHAPTERS = {
  home: { name: '定食屋', icon: '🍱' },
  izakaya: { name: '居酒屋', icon: '🏮', drinks: ['biiru', 'ocha', 'omizu'] },
  cafe: { name: '喫茶店', icon: '☕', foods: ['pudding', 'thick_toast', 'pancakes'], drinks: ['instant_coffee', 'black_tea', 'matcha_latte'] },
  sushi: { name: '壽司店', icon: '🍣', drinks: ['ocha', 'omizu'] },
  ramen: { name: '拉麵店', icon: '🍜', drinks: ['ocha', 'omizu', 'biiru'], negi: true },
};
export function restoMenu(chId) {
  const t = RESTO_CHAPTERS[chId];
  if (!t || chId === 'home') return { ...RESTAURANT, theme: 'home' };
  const price = { ...RESTAURANT.prices };
  const dishes = RECIPES.filter((r) => r.chapter === chId);
  dishes.forEach((r) => { price[r.dish] = r.price; });
  const foods = t.foods || dishes.map((r) => r.dish);
  return { ...RESTAURANT, theme: chId, foods, drinks: t.drinks, prices: price, hasNegi: t.negi ? foods : [] };
}
