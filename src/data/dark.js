// Satirical menu names are separated from the actual shortcut and ingredient list.
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
const ingredients = ids => ({ type: 'pick', need: ids, decoys: ['nori', 'miso'], jp: '材料{ざいりょう}を 選{えら}んで', yue: '打開後廚捷徑櫃', tip: '聽清楚真正用咩材料。' });
const microwave = { type: 'microwave', verb: 'atatameru', jp: '電子{でんし}レンジで 温{あたた}めて', yue: '放入微波爐翻熱', tip: '遊戲倒數係縮時演出；現實請跟包裝翻熱指示。' };
const mix = { type: 'stir', turns: 2, anim: 'stir', verb: 'mazeru', jp: 'よく 混{ま}ぜて', yue: '攪勻就出得', tip: '轉圈攪勻。' };

export const DARK_RECIPES = [
  { id: 'dark_ding', number: '01', jp: 'レンジのごちそう', yue: '米芝蓮級叮叮大餐', emoji: '🍽️', price: 480, station: 'board', time: '縮時翻熱',
    ingredients: [['meal_patty', '預製熟肉餅 1 份'], ['mash_potato', '即食薯蓉 1 份'], ['frozen_veg', '冷凍蔬菜 1 份']],
    howto: ['按各款包裝指示，用適合微波爐嘅容器分別翻熱至熱透。', '肉餅、薯蓉、蔬菜分區擺好，加幾點醬汁。'],
    steps: [ingredients(['meal_patty', 'mash_potato', 'frozen_veg']), microwave],
    pitch: '主廚三重奏・匠心盛宴', truth: '肉餅、薯蓉、蔬菜預先煮好，出餐前翻熱。', gag: '客人：「層次好豐富！」後廚：「叮——！」', shortcut: '預製餐', lesson: 'ごちそう = 大餐；擺盤可以花心思，製作來源照樣講清楚。' },
  { id: 'dark_beef', number: '02', jp: '三分{さんぷん}ビーフシチュー', yue: '三分鐘燉牛肉', emoji: '🥘', price: 520, station: 'board', time: '縮時翻熱',
    ingredients: [['beef_pouch', '預製燉牛肉包 1 包'], ['herb', '裝飾香草 1 條']],
    howto: ['按料理包指示翻熱；包裝未標明可微波，就先倒入適用容器。', '倒入小砂鍋，放上香草。三分鐘係關卡名，實際時間跟包裝。'],
    steps: [ingredients(['beef_pouch', 'herb']), microwave],
    pitch: '時光慢燉・八小時牛肉', truth: '牛肉已經喺料理包入面燉好，小黑只負責翻熱同換鍋。', gag: '「慢燉八小時」招牌跌低，後面係一疊料理包。', shortcut: '料理包', lesson: 'レトルト = 預製料理包；換咗砂鍋，唔代表由零開始燉。' },
  { id: 'dark_milk_tea', number: '07', jp: 'ボトル緑茶{りょくちゃ}ミルク', yue: '瓶裝奶綠', emoji: '🥛', price: 300, station: 'board', time: '1 分鐘',
    ingredients: [['bottled_tea', '樽裝綠茶 1 份'], ['milk', '牛奶 適量'], ['ice', '冰塊 適量']],
    howto: ['透明杯加冰，倒入樽裝綠茶。', '加牛奶攪勻，按口味調整比例。'],
    steps: [ingredients(['bottled_tea', 'milk', 'ice']), mix],
    pitch: '職人特調・鮮奶綠', truth: '樽裝綠茶加牛奶同冰，冇煲茶，連茶隔都唔使洗。', gag: '客人問茶葉產地，小黑將膠樽慢慢推入櫃底。', shortcut: '瓶裝茶', lesson: '緑茶 = 綠茶；特調可以係比例調配，未必係現泡茶。' },
  { id: 'dark_coffee', number: '08', jp: '即席{そくせき}キャラメルコーヒー', yue: '精品即溶咖啡・暗黑版', emoji: '☕', price: 380, station: 'board', time: '2 分鐘',
    ingredients: [['coffee_powder', '即溶咖啡粉 1 份'], ['mizu', '熱水 少量'], ['milk', '牛奶 適量'], ['ice', '冰塊 適量'], ['caramel_syrup', '焦糖糖漿 少量']],
    howto: ['即溶咖啡粉用少量熱水溶開。', '杯內加冰、牛奶同少量焦糖糖漿，再倒入咖啡。'],
    steps: [ingredients(['coffee_powder', 'milk', 'caramel_syrup', 'ice']), mix],
    pitch: '手工焦糖雲層・主廚特調', truth: '即溶粉沖開，加奶、冰同焦糖，靚杯係最大排場。', gag: '製作三十秒，介紹風味講足三分鐘。', shortcut: '即溶粉', lesson: '即席 = 即製、快捷；即溶咖啡亦可以好飲，浮誇嘅係故事。' },
  { id: 'dark_soda', number: '09', jp: 'フルーツ風{ふう}ソーダ', yue: '鮮果梳打冇鮮果', emoji: '🍹', price: 320, station: 'board', time: '1 分鐘',
    ingredients: [['fruit_syrup', '果味糖漿 少量'], ['soda_water', '梳打水 1 份'], ['ice', '冰塊 適量'], ['fruit_slice', '水果片 1 片（裝飾）']],
    howto: ['杯中加冰、果味糖漿同梳打水，輕輕拌勻。', '杯邊放一片水果；飲品主體嘅果味來自糖漿。'],
    steps: [ingredients(['fruit_syrup', 'soda_water', 'ice', 'fruit_slice']), mix],
    pitch: '夏日鮮果・氣泡交響曲', truth: '果味主要來自糖漿；真正水果得杯邊裝飾嗰一片。', gag: '全杯唯一鮮果，今日負責企喺杯邊返工。', shortcut: '糖漿', lesson: '〜風 = 某種風味／風格；フルーツ風唔等於鮮果汁。' },
  { id: 'dark_soup', number: '26', jp: '即席{そくせき}スープ', yue: '一秒老火湯', emoji: '🥣', price: 280, station: 'board', time: '1 分鐘',
    ingredients: [['stock_powder', '雞湯粉 按包裝份量'], ['stock_concentrate', '濃縮高湯 少量，按鹹度調整'], ['mizu', '熱水 適量']],
    howto: ['按產品標示用熱水稀釋湯底，先試味。', '兩款湯底唔好各落足一份，以免過鹹；唔夠味先逐少調整。'],
    steps: [ingredients(['stock_powder', 'stock_concentrate', 'mizu']), mix],
    pitch: '八小時熬製・主廚濃湯', truth: '湯粉、濃縮高湯同熱水沖成，冇喺店內熬八小時。', gag: '客人問熬咗幾耐，小黑望住秒錶，扮睇唔到。', shortcut: '濃縮高湯', lesson: '濃縮 = concentrated；稀釋比例同鹹度比落得多更重要。' },
  { id: 'dark_rice', number: '25', jp: 'うま味{み}チャーハン', yue: '味精核爆炒飯', emoji: '🍚', price: 360, station: 'pan', time: '5 分鐘',
    ingredients: [['gohan', '熟飯 1 碗'], ['tamago', '雞蛋 1 隻'], ['msg', '味精 少量'], ['stock_powder', '雞粉 少量'], ['oyster_sauce', '蠔油 少量'], ['abura', '油 適量']],
    howto: ['鑊落油炒熟雞蛋，加熟飯炒散至熱透。', '味精、雞粉、蠔油會疊加味道；先少量試味，再決定使唔使補。'],
    steps: [ingredients(['gohan', 'tamago', 'msg', 'stock_powder', 'oyster_sauce']), mix,
      { type: 'season', weight: 3, jp: '味{あじ}を 調{ととの}えて', yue: '主廚，仲差少少？試味先！', tip: '呢個係遊戲調味格數，唔係現實用量。' }],
    pitch: '極致鮮味・黃金炒飯', truth: '鮮味靠調味配搭；亂落大量調味，會蓋過蛋香同飯香。', gag: '「仲差少少！」大廚伸手再攞雞粉，客人即刻遞杯水。', shortcut: '增鮮調味', lesson: 'うま味 = 鮮味。MSG 本身唔係笑柄；唔試味、亂落先係。' },
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

export function darkRatings(taste, plate, garnish, pitch) {
  return { taste: Math.round(taste * 100), look: Math.round((plate.score + garnish.score) * 50), hype: pitch === 'grand' ? 100 : 15 };
}
