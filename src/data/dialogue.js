// 對白。每句都會生成 VOICEVOX 音檔
// 客人落單模板：{dish} 會換成菜名，{num} 換成數量
export const ORDER_TEMPLATES = [
  { jp: '{dish}を ください', yue: '唔該畀{dishYue}我' },
  { jp: '{dish}を お願{ねが}いします', yue: '麻煩你，{dishYue}' },
  { jp: 'すみません、{dish}を ください', yue: '唔好意思，我要{dishYue}' },
];
export const ORDER_NUM_TEMPLATES = [
  { jp: '{dish}を {num} ください', yue: '唔該{numYue}{dishYue}' },
  { jp: '{dish}、{num} お願{ねが}いします', yue: '{dishYue}，{numYue}，唔該' },
];

// 客人反應
export const REACT = {
  great: [
    { jp: 'おいしい！', yue: '好好食！' },
    { jp: 'すごく おいしいです！', yue: '超好食！' },
    { jp: '最高{さいこう}！', yue: '一流！' },
  ],
  ok: [
    { jp: 'うん、おいしいです', yue: '嗯，幾好食' },
    { jp: 'ありがとう', yue: '多謝' },
  ],
  wrong: [
    { jp: 'あれ？ これじゃないです', yue: '咦？唔係呢個喎' },
  ],
  bye: [
    { jp: 'ごちそうさまでした！', yue: '多謝款待！' },
    { jp: 'また 来{き}ます！', yue: '我會再嚟！' },
  ],
  hello: [
    { jp: 'こんにちは！', yue: '你好！' },
    { jp: 'こんばんは', yue: '晚安（夜晚打招呼）' },
  ],
};

// 小黑講嘢
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

// 閒聊 SRS 問題：客人講一句，你揀廣東話意思（vocab id）
export const SMALLTALK = {
  oishii: { jp: 'この 店{みせ}、おいしいですね', yue: '呢間店好好食喎', key: 'oishii' },
  atsui: { jp: 'わあ、熱{あつ}い！', yue: '嘩，好熱！', key: 'atsui' },
  oomori: { jp: '大盛{おおも}りで お願{ねが}いします', yue: '大份唔該', key: 'oomori' },
  matta: { jp: 'また 来{き}ますね', yue: '我會再嚟㗎', key: 'matta' },
  oishikatta: { jp: '美味{おい}しかったです', yue: '好好食呀', key: 'oishikatta' },
  arigatou: { jp: 'ありがとうございます', yue: '多謝', key: 'arigatou' },
  sumimasen: { jp: 'すみません！', yue: '唔好意思！', key: 'sumimasen' },
  okaikei: { jp: 'お会計{かいけい}、お願{ねが}いします', yue: '唔該埋單', key: 'okaikei' },
};

// ===== 日本餐廳點餐（你做客人，小黑做店員）=====
// 每次隨機：人數、菜、飲品。choices 入面 ok:true 係啱
export const RESTAURANT = {
  name: { jp: '定食屋{ていしょくや} くろねこ', yue: '黑貓定食屋' },
  people: [
    { n: 1, key: 'hitori', jp: '一人{ひとり}です', yue: '一位' },
    { n: 2, key: 'futari', jp: '二人{ふたり}です', yue: '兩位' },
    { n: 3, key: 'sannin', jp: '三人{さんにん}です', yue: '三位' },
  ],
  foods: ['onigiri', 'misoshiru', 'oyakodon', 'ramen'],
  drinks: ['ocha', 'omizu', 'biiru'],
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
    bye: { jp: 'ありがとうございました！ また お越{こ}しください', yue: '多謝晒！歡迎再嚟' },
  },
  // 你講嘅嘢（揀）
  you: {
    order: { jp: '{food}を {num} ください', yue: '唔該畀{numYue}{foodYue}我' },
    drink: { jp: '{drink}を {num} お願{ねが}いします', yue: '{numYue}{drinkYue}，唔該' },
    yes: { jp: 'はい、お願{ねが}いします', yue: '係，唔該' },
    itadakimasu: { jp: 'いただきます！', yue: '開動！（食之前）' },
    gochisou: { jp: 'ごちそうさまでした', yue: '多謝款待（食完）' },
    kaikei: { jp: 'すみません、お会計{かいけい} お願{ねが}いします', yue: '唔好意思，唔該埋單' },
    // 干擾選項
    wrongGreet: { jp: 'おやすみなさい', yue: '晚安（瞓覺前講）' },
    wrongEat: { jp: 'さようなら', yue: '再見（好正式／長時間唔見）' },
    wrongPay: { jp: 'おかわり ください', yue: '唔該再嚟一碗' },
    no: { jp: 'いいえ、大丈夫{だいじょうぶ}です', yue: '唔使喇，冇問題' },
  },
};

