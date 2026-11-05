// 暗黑食堂：前台講到天花龍鳳（自然日文菜單名），後廚其實叮叮／沖沖（口語真相）
export const DARK_INGREDIENTS = [
  ['meal_patty', '調理済{ちょうりず}みハンバーグ', '預製熟肉餅', '🥩', 'box', 0x875337],
  ['mash_potato', 'マッシュポテト', '即食薯蓉', '🥔', 'sphere', 0xeddba7],
  ['frozen_veg', '冷凍野菜{れいとうやさい}', '冷凍蔬菜', '🥦', 'sphere', 0x79a84c],
  ['beef_pouch', 'レトルトビーフシチュー', '預製燉牛肉包', '🥘', 'box', 0x9a5336],
  ['herb', 'ハーブ', '裝飾香草', '🌿', 'sphere', 0x5c983e],
  ['bottled_tea', 'ペットボトルの緑茶{りょくちゃ}', '樽裝綠茶', '🍵', 'cyl', 0x94ae63],
  ['ice', '氷{こおり}', '冰塊', '🧊', 'box', 0xbfe6f3],
  ['caramel_syrup', 'キャラメルシロップ', '焦糖糖漿', '🍯', 'cyl', 0xbb793c],
  ['fruit_syrup', 'フルーツシロップ', '果味糖漿', '🍓', 'cyl', 0xe36b67],
  ['soda_water', '炭酸水{たんさんすい}', '梳打水', '🫧', 'cyl', 0xc5e8ef],
  ['fruit_slice', '果物{くだもの}のスライス', '裝飾水果片', '🍋', 'sphere', 0xf3d456],
  ['stock_powder', '鶏{とり}ガラスープの素{もと}', '雞湯粉', '🥣', 'cyl', 0xdabb73],
  ['stock_concentrate', '濃縮{のうしゅく}スープ', '濃縮高湯', '🫙', 'cyl', 0xa47a3c],
  ['msg', 'うま味調味料{みちょうみりょう}', '味精 MSG', '🧂', 'cyl', 0xf6eee1],
  ['oyster_sauce', 'オイスターソース', '蠔油', '🫗', 'cyl', 0x533021],
];

export const DARK_WORDS = [
  ['atatameru', '温{あたた}める', '翻熱', 'verb'],
  ['moritsukeru', '盛{も}り付{つ}ける', '擺盤', 'verb'],
  ['nakami', '中身{なかみ}', '真正內容', 'phrase'],
];

// 小黑喺後廚講嘅日常口語（真相）
const K = {
  ding: { jp: '冷凍{れいとう}を 三{みっ}つ チンして', yue: '冷凍食品叮三份' },
  beef: { jp: 'レトルトを 温{あたた}めて', yue: '翻熱料理包' },
  tea: { jp: 'お茶{ちゃ}に 牛乳{ぎゅうにゅう}を 入{い}れて', yue: '茶加奶' },
  coffee: { jp: 'インスタントに シロップを 入{い}れて', yue: '即溶咖啡加糖漿' },
  soda: { jp: 'シロップを 炭酸{たんさん}で 割{わ}って', yue: '糖漿兌梳打' },
  soup: { jp: 'スープの素{もと}を お湯{ゆ}で 溶{と}いて', yue: '湯粉用熱水沖' },
  rice: { jp: 'うま味{み}調味料{ちょうみりょう}を 少{すこ}しだけ', yue: '只落少少味精' },
};
export const KITCHEN_LINES = Object.values(K);

// 遮掩：客人會偷望，要撳掣遮住（kind 對應 minigames.cover）
export const COVERS = {
  cough: { jp: 'チンの 音{おと}を ごまかして！', yue: '叮一刻，撳掣咳嗽蓋聲', btn: '🤧 咳嗽', ok: '客人：「風邪ですか？」', bad: '客人聽到「チン♪」，頭頂出咗個「？」' },
  bottle: { jp: 'ペットボトルを 隠{かく}して！', yue: '客人望過嚟前收起膠樽', btn: '🫙 收埋膠樽', ok: '膠樽已經藏入櫃底', bad: '膠樽企喺枱面，客人：「…ペットボトル？」' },
  grinder: { jp: 'ミルの 音{おと}で ごまかして！', yue: '撕包聲太大，開磨豆機蓋住', btn: '⚙️ 開磨豆機', ok: '磨豆機嗡嗡聲——其實入面係空嘅', bad: '客人聽到撕即溶包嘅「嘶」一聲' },
  glass: { jp: '果物{くだもの}の 側{がわ}を 向{む}けて！', yue: '轉杯，令唯一嗰片生果對住客人', btn: '🍋 轉杯', ok: '生果片企得好威風', bad: '客人只見到糖漿同冰，冇生果' },
  steam: { jp: '湯気{ゆげ}を 出{だ}して！', yue: '空煲都要冒煙，扮緊熬湯', btn: '♨️ 出蒸氣', ok: '好大一煲「老火湯」蒸氣', bad: '煲停咗冒煙，客人：「火、消{き}えてますよ？」' },
  hand: { jp: '調味料{ちょうみりょう}は 控{ひか}えめに！', yue: '撥開小黑伸去攞雞粉嘅手', btn: '✋ 撥開手', ok: '小黑嘅手被擋返出嚟', bad: '客人望見小黑隻手撈緊雞粉' },
};
export const COVER_LINES = Object.values(COVERS).map(c => c.jp);

// 干擾項用同類暗黑材料，唔再係明顯錯嘅海苔味噌
const ingredients = (ids, decoys, kitchen) => ({ type: 'pick', need: ids, decoys, jp: kitchen.jp, yue: kitchen.yue, tip: '聽清楚真正用咩材料。' });
const cover = kind => ({ type: 'cover', kind, weight: 0.5, ...COVERS[kind] });
const microwave = { type: 'microwave', verb: 'atatameru', jp: '電子{でんし}レンジで 温{あたた}めて', yue: '放入微波爐翻熱', tip: '遊戲倒數係縮時演出；現實請跟包裝翻熱指示。' };
const mix = { type: 'stir', turns: 2, anim: 'stir', verb: 'mazeru', jp: 'よく 混{ま}ぜて', yue: '攪勻就出得', tip: '轉圈攪勻。' };

// jp/yue = 前台浮誇菜單名（客人照呢個名落單）；names = 較收斂嘅介紹；kitchen 見 K
export const DARK_RECIPES = [
  { id: 'dark_ding', number: '01', jp: 'シェフおまかせ 三種{さんしゅ}の 盛{も}り合{あ}わせ', yue: '主廚精選三拼大餐', emoji: '🍽️', price: 480, station: 'board', time: '縮時翻熱',
    ingredients: [['meal_patty', '預製熟肉餅 1 份'], ['mash_potato', '即食薯蓉 1 份'], ['frozen_veg', '冷凍蔬菜 1 份']],
    howto: ['按各款包裝指示，用適合微波爐嘅容器分別翻熱至熱透。', '肉餅、薯蓉、蔬菜分區擺好，加幾點醬汁。'],
    steps: [ingredients(['meal_patty', 'mash_potato', 'frozen_veg'], ['stock_powder', 'herb'], K.ding), microwave, cover('cough')],
    names: { honest: { jp: '冷凍{れいとう}・レトルトの 盛{も}り合{あ}わせ', yue: '冷凍同預製拼盤' }, mild: { jp: '三種{さんしゅ}の 盛{も}り合{あ}わせ', yue: '三拼盤' } },
    truth: '肉餅、薯蓉、蔬菜預先煮好，出餐前翻熱。', gag: '客人：「層次好豐富！」後廚：「叮——！」', shortcut: '預製餐', lesson: 'おまかせ = 交畀師傅決定；擺盤可以花心思，製作來源照樣講清楚。' },
  { id: 'dark_beef', number: '02', jp: '八時間{はちじかん}煮込{にこ}んだ 特製{とくせい}ビーフシチュー', yue: '八小時慢燉特製牛肉', emoji: '🥘', price: 520, station: 'board', time: '縮時翻熱',
    ingredients: [['beef_pouch', '預製燉牛肉包 1 包'], ['herb', '裝飾香草 1 條']],
    howto: ['按料理包指示翻熱；包裝未標明可微波，就先倒入適用容器。', '倒入小砂鍋，放上香草。三分鐘係關卡名，實際時間跟包裝。'],
    steps: [ingredients(['beef_pouch', 'herb'], ['mash_potato', 'msg'], K.beef), microwave, cover('cough')],
    names: { honest: { jp: 'レトルトの ビーフシチュー', yue: '料理包燉牛肉' }, mild: { jp: '特製{とくせい}ビーフシチュー', yue: '特製燉牛肉' } },
    truth: '牛肉已經喺料理包入面燉好，小黑只負責翻熱同換鍋。', gag: '「慢燉八小時」招牌跌低，後面係一疊料理包。', shortcut: '料理包', lesson: '煮込{にこ}む = 燉；レトルト = 預製料理包；換咗砂鍋，唔代表由零開始燉。' },
  { id: 'dark_milk_tea', number: '07', jp: '職人{しょくにん}仕立{じた}ての 緑茶{りょくちゃ}ラテ', yue: '職人特調鮮奶綠', emoji: '🥛', price: 300, station: 'board', time: '1 分鐘',
    ingredients: [['bottled_tea', '樽裝綠茶 1 份'], ['milk', '牛奶 適量'], ['ice', '冰塊 適量']],
    howto: ['透明杯加冰，倒入樽裝綠茶。', '加牛奶攪勻，按口味調整比例。'],
    steps: [ingredients(['bottled_tea', 'milk', 'ice'], ['fruit_syrup', 'soda_water'], K.tea), mix, cover('bottle')],
    names: { honest: { jp: 'ペットボトルの 緑茶{りょくちゃ}ラテ', yue: '樽裝綠茶加奶' }, mild: { jp: '緑茶{りょくちゃ}ラテ', yue: '綠茶拿鐵' } },
    truth: '樽裝綠茶加牛奶同冰，冇煲茶，連茶隔都唔使洗。', gag: '客人問茶葉產地，小黑將膠樽慢慢推入櫃底。', shortcut: '瓶裝茶', lesson: '仕立{した}て = 度身製作嘅講法；緑茶 = 綠茶；特調可以係比例調配，未必係現泡茶。' },
  { id: 'dark_coffee', number: '08', jp: '自家製{じかせい}キャラメルの 特製{とくせい}ラテ', yue: '自家製焦糖特製拿鐵', emoji: '☕', price: 380, station: 'board', time: '2 分鐘',
    ingredients: [['coffee_powder', '即溶咖啡粉 1 份'], ['mizu', '熱水 少量'], ['milk', '牛奶 適量'], ['ice', '冰塊 適量'], ['caramel_syrup', '焦糖糖漿 少量']],
    howto: ['即溶咖啡粉用少量熱水溶開。', '杯內加冰、牛奶同少量焦糖糖漿，再倒入咖啡。'],
    steps: [ingredients(['coffee_powder', 'milk', 'caramel_syrup', 'ice'], ['bottled_tea', 'fruit_syrup'], K.coffee), mix, cover('grinder')],
    names: { honest: { jp: 'インスタントの キャラメルラテ', yue: '即溶焦糖拿鐵' }, mild: { jp: '特製{とくせい}キャラメルラテ', yue: '特製焦糖拿鐵' } },
    truth: '即溶粉沖開，加奶、冰同焦糖，靚杯係最大排場。', gag: '製作三十秒，介紹風味講足三分鐘。', shortcut: '即溶粉', lesson: '自家製{じかせい} = 自己店內製作；呢個詞喺菜單好重要，講大話就係問題。' },
  { id: 'dark_soda', number: '09', jp: '季節{きせつ}の フルーツソーダ', yue: '季節鮮果梳打', emoji: '🍹', price: 320, station: 'board', time: '1 分鐘',
    ingredients: [['fruit_syrup', '果味糖漿 少量'], ['soda_water', '梳打水 1 份'], ['ice', '冰塊 適量'], ['fruit_slice', '水果片 1 片（裝飾）']],
    howto: ['杯中加冰、果味糖漿同梳打水，輕輕拌勻。', '杯邊放一片水果；飲品主體嘅果味來自糖漿。'],
    steps: [ingredients(['fruit_syrup', 'soda_water', 'ice', 'fruit_slice'], ['bottled_tea', 'caramel_syrup'], K.soda), mix, cover('glass')],
    names: { honest: { jp: 'シロップの ソーダ割{わ}り', yue: '糖漿梳打' }, mild: { jp: 'フルーツソーダ', yue: '果味梳打' } },
    truth: '果味主要來自糖漿；真正水果得杯邊裝飾嗰一片。', gag: '全杯唯一鮮果，今日負責企喺杯邊返工。', shortcut: '糖漿', lesson: '季節{きせつ}の = 時令；〜風 = 某種風味；フルーツソーダ唔等於鮮果汁。' },
  { id: 'dark_soup', number: '26', jp: 'じっくり 煮出{にだ}した 自家製{じかせい}スープ', yue: '慢火熬製自家湯', emoji: '🥣', price: 280, station: 'board', time: '1 分鐘',
    ingredients: [['stock_powder', '雞湯粉 按包裝份量'], ['stock_concentrate', '濃縮高湯 少量，按鹹度調整'], ['mizu', '熱水 適量']],
    howto: ['按產品標示用熱水稀釋湯底，先試味。', '兩款湯底唔好各落足一份，以免過鹹；唔夠味先逐少調整。'],
    steps: [ingredients(['stock_powder', 'stock_concentrate', 'mizu'], ['msg', 'oyster_sauce'], K.soup), mix, cover('steam')],
    names: { honest: { jp: '粉末{ふんまつ}スープ', yue: '粉末湯' }, mild: { jp: '自家製{じかせい}スープ', yue: '自家湯' } },
    truth: '湯粉、濃縮高湯同熱水沖成，冇喺店內熬八小時。', gag: '客人問熬咗幾耐，小黑望住秒錶，扮睇唔到。', shortcut: '濃縮高湯', lesson: 'じっくり = 慢慢、用心；濃縮 = concentrated；稀釋比例同鹹度比落得多更重要。' },
  { id: 'dark_rice', number: '25', jp: '黄金{おうごん}の 特製{とくせい}チャーハン', yue: '黃金特製炒飯', emoji: '🍚', price: 360, station: 'pan', time: '5 分鐘',
    ingredients: [['gohan', '熟飯 1 碗'], ['tamago', '雞蛋 1 隻'], ['msg', '味精 少量'], ['stock_powder', '雞粉 少量'], ['oyster_sauce', '蠔油 少量'], ['abura', '油 適量']],
    howto: ['鑊落油炒熟雞蛋，加熟飯炒散至熱透。', '味精、雞粉、蠔油會疊加味道；先少量試味，再決定使唔使補。'],
    steps: [ingredients(['gohan', 'tamago', 'msg', 'stock_powder', 'oyster_sauce'], ['stock_concentrate', 'herb'], K.rice), mix, cover('hand'),
      { type: 'season', weight: 3, jp: '味{あじ}を 調{ととの}えて', yue: '主廚，仲差少少？試味先！', tip: '呢個係遊戲調味格數，唔係現實用量。' }],
    names: { honest: { jp: 'うま味{み}調味料{ちょうみりょう}の チャーハン', yue: '味精炒飯' }, mild: { jp: '特製{とくせい}チャーハン', yue: '特製炒飯' } },
    truth: '鮮味靠調味配搭；亂落大量調味，會蓋過蛋香同飯香。', gag: '「仲差少少！」大廚伸手再攞雞粉，客人即刻遞杯水。', shortcut: '増鮮調味', lesson: 'うま味 = 鮮味。MSG 本身唔係笑柄；唔試味、亂落先係。' },
].map(r => ({ ...r, chapter: 'dark', dish: r.id, serves: '1 份', unlock: {} }));

export const PLATING = [
  { id: 'plain', label: '家常餐具', icon: '🍽️', score: 0.55 },
  { id: 'bistro', label: '小館靚碟／靚杯', icon: '✨', score: 0.85 },
  { id: 'grand', label: '超大留白餐具', icon: '👑', score: 1 },
];
export const GARNISHES = [
  { id: 'none', label: '乾淨俐落', icon: '🍽️', score: 0.7 },
  { id: 'accent', label: '一點裝飾', icon: '🌿', score: 1 },
  { id: 'tower', label: '裝飾堆成山', icon: '⛰️', score: 0.4 },
];

// 宣傳等級：越浮誇收入越高，客人越可能追問（ask = 被追問機率）
export const HYPE = {
  honest: { label: '如實介紹', hype: 15, mult: 1, ask: 0 },
  mild: { label: '小誇張', hype: 55, mult: 1.5, ask: 0.5 },
  grand: { label: '極度浮誇', hype: 100, mult: 2.5, ask: 1 },
};
export const dishName = (rec, tier) => (tier === 'grand' ? { jp: rec.jp, yue: rec.yue } : rec.names[tier]);

export function darkRatings(taste, plate, garnish, pitch) {
  return { taste: Math.round(taste * 100), look: Math.round((plate.score + garnish.score) * 50), hype: HYPE[pitch].hype };
}

// 客人落單句：只用 3 句（每級 1 句，共用兩把聲線），慳音檔
export const DARK_ORDER_TEMPLATES = [
  { lv: 0, hi: true, jp: '{dish}、 ください', yue: '唔該，{dishYue}' },
  { lv: 1, hi: true, jp: 'すみません、 {dish}を お願{ねが}いします', yue: '唔好意思，我要{dishYue}' },
  { lv: 2, hi: true, jp: 'メニューを 見{み}て… {dish}に します', yue: '睇完餐牌…我要{dishYue}' },
];

// 客人追問後嘅對白（hi 聲線）同你嘅三種回應（word 聲線）
export const DARK_REPLY = {
  honest: { jp: 'すみません、 実{じつ}は 温{あたた}めただけです', yue: '唔好意思，其實只係翻熱' },
  bluff: { jp: 'はい、 全部{ぜんぶ} 手作{てづく}りです！', yue: '係，全部自己整！' },
  deflect: { jp: '今日{きょう}は いい 天気{てんき}ですね！', yue: '今日天氣好好呀！' },
};
export const DARK_CUST = {
  forgive: [
    { lv: 0, hi: true, jp: 'そうですか。 おいしいです', yue: '係咩。都好食' },
    { lv: 1, hi: true, jp: '正直{しょうじき}ですね。 でも おいしいから いいです', yue: '你好老實。不過好食就得喇' },
    { lv: 2, hi: true, jp: '冷凍{れいとう}だとしても、 おいしければ 気{き}にしません', yue: '就算係急凍，好食我都唔介意' },
  ],
  believe: [
    { lv: 0, hi: true, jp: 'へえ、 すごい！', yue: '嘩，好叻！' },
    { lv: 1, hi: true, jp: 'さすが プロですね！', yue: '真係專業！' },
    { lv: 2, hi: true, jp: 'やっぱり 職人{しょくにん}の 技{わざ}は 違{ちが}いますね', yue: '果然師傅手藝唔同' },
  ],
  expose: [
    { lv: 0, hi: true, jp: 'あれ？ これ、 レトルト？', yue: '咦？呢個係料理包？' },
    { lv: 1, hi: true, jp: 'えっ、 これ、 レトルトじゃないですか！', yue: '咩話，呢個唔係料理包咩！' },
    { lv: 2, hi: true, jp: '…これ、 市販{しはん}の 商品{しょうひん}ですよね？', yue: '…呢個係街外賣嘅現成貨，啱唔啱？' },
  ],
};
