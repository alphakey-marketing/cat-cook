// 食譜：遊戲步驟 + 真實做法（食譜卡）
// unlock: { level } 或 { day }（第幾日玩先開）
// step.type: pick 揀材料 / timing 撳準時 / stir 畫圈攪 / mash 狂撳 / hold 長按控火

export const RECIPES = [
  {
    id: 'onigiri',
    dish: 'onigiri',
    price: 120,
    unlock: { level: 1 },
    station: 'board',
    serves: '2 個',
    time: '10 分鐘',
    ingredients: [
      ['gohan', '熱白飯 1 碗（約 150g）'],
      ['shio', '鹽 少少（一撮）'],
      ['umeboshi', '酸梅 1 粒（或三文魚碎）'],
      ['nori', '紫菜 1 塊（剪半）'],
      ['mizu', '凍水 少少（濕手用）'],
    ],
    howto: [
      '雙手沾水，再喺手掌抹少少鹽。',
      '攞一半飯放手心，中間整個窿，放酸梅。',
      '用另一半飯蓋住，雙手合埋輕輕揸，轉 3–4 次整成三角形。',
      '唔好揸太實！外實內鬆先好食。',
      '最後包上紫菜。想紫菜脆，食之前先包。',
    ],
    steps: [
      { type: 'pick', need: ['gohan', 'shio', 'umeboshi', 'nori'], decoys: ['tofu', 'tamago', 'negi'],
        jp: 'まず 材料{ざいりょう}を 選{えら}んでにゃ', yue: '首先揀材料喵', tip: '聽讀音，揀啱嘅材料。' },
      { type: 'mash', taps: 10, time: 5, anim: 'press', verb: 'nigiru', add: ['onigiri_raw'],
        jp: '三角{さんかく}に 握{にぎ}って', yue: '揸成三角形', tip: '狂撳！但真係整嘅時候要輕力，外實內鬆。' },
      { type: 'timing', rounds: 1, zone: 0.24, anim: 'wrap', verb: 'noseru',
        jp: '海苔{のり}を 巻{ま}いて', yue: '包紫菜', tip: '撳準！紫菜要喺中間。' },
    ],
  },
  {
    id: 'misoshiru',
    dish: 'misoshiru',
    price: 150,
    unlock: { level: 2 },
    station: 'pot',
    serves: '2 碗',
    time: '10 分鐘',
    ingredients: [
      ['mizu', '水 400ml'],
      ['dashi', '日式高湯粉 1 茶匙（或昆布 + 木魚自己煲）'],
      ['tofu', '豆腐 半盒（約 150g）'],
      ['wakame', '乾海帶芽 1 湯匙'],
      ['miso', '味噌 2 湯匙'],
      ['negi', '蔥 少少'],
    ],
    howto: [
      '水同高湯粉落煲，中火煮滾。',
      '豆腐切 1.5cm 粒，同海帶芽一齊落，煮 1 分鐘。',
      '熄火！用湯殼盛味噌，喺湯入面慢慢攪溶。',
      '重點：味噌落咗之後唔好再滾，滾咗香味會走晒。',
      '最後灑蔥花。',
    ],
    steps: [
      { type: 'pick', need: ['dashi', 'tofu', 'wakame', 'miso'], decoys: ['gohan', 'shoyu', 'chashu'],
        jp: '材料{ざいりょう}を 選{えら}んでにゃ', yue: '揀材料喵', tip: '高湯係日本菜嘅靈魂。' },
      { type: 'timing', rounds: 3, zone: 0.2, anim: 'chop', verb: 'kiru', add: ['tofu_cubes'],
        jp: '豆腐{とうふ}を 切{き}って', yue: '切豆腐', tip: '撳準綠色位，切 3 刀。' },
      { type: 'hold', zone: [0.55, 0.8], anim: 'stir', verb: 'tokasu', add: ['miso_soup'],
        jp: '火{ひ}を 止{と}めて、味噌{みそ}を 溶{と}かして', yue: '熄火，溶味噌', tip: '長按加熱，喺綠色位放手。太熱 = 滾瀉，味噌香味會走！' },
    ],
  },
  {
    id: 'oyakodon',
    dish: 'oyakodon',
    price: 280,
    unlock: { level: 3 },
    station: 'pan',
    serves: '1 人',
    time: '15 分鐘',
    ingredients: [
      ['toriniku', '雞髀肉 100g'],
      ['tamanegi', '洋蔥 1/4 個'],
      ['tamago', '雞蛋 2 隻'],
      ['dashi', '高湯 60ml'],
      ['shoyu', '豉油 1 湯匙'],
      ['mirin', '味醂 1 湯匙'],
      ['satou', '砂糖 1 茶匙'],
      ['gohan', '熱白飯 1 碗'],
    ],
    howto: [
      '雞肉切一口大小，洋蔥切薄片。',
      '細平底鑊落高湯、豉油、味醂、砂糖，煮滾。',
      '落洋蔥同雞肉，中火煮 5 分鐘至熟。',
      '雞蛋輕輕打散（唔好打太勻），淋 2/3 落去，冚蓋 30 秒。',
      '再淋餘下蛋液，半熟就熄火，即刻滑落飯面。',
    ],
    steps: [
      { type: 'pick', need: ['toriniku', 'tamanegi', 'tamago', 'shoyu'], decoys: ['tofu', 'nori', 'moyashi'],
        jp: '材料{ざいりょう}を 選{えら}んでにゃ', yue: '揀材料喵', tip: '親子 = 雞（親）+ 蛋（子），幾得意。' },
      { type: 'timing', rounds: 3, zone: 0.18, anim: 'chop', verb: 'kiru', add: ['chicken_pieces'],
        jp: '鶏肉{とりにく}を 切{き}って', yue: '切雞肉', tip: '一口大小就啱。' },
      { type: 'stir', turns: 3, anim: 'stir', verb: 'niru', add: ['pan_simmer'],
        jp: 'だしで 煮{に}て', yue: '用高湯煮', tip: '手指喺圓圈度轉圈！' },
      { type: 'hold', zone: [0.4, 0.62], anim: 'pour', verb: 'tamago', add: ['oyako_egg'],
        jp: '卵{たまご}を 入{い}れて、半熟{はんじゅく}に', yue: '落蛋，要半熟', tip: '半熟先好食，唔好煮過龍！' },
    ],
  },
  {
    id: 'ramen',
    dish: 'ramen',
    price: 380,
    unlock: { day: 2 },
    station: 'pot',
    serves: '1 碗',
    time: '20 分鐘（簡易版）',
    ingredients: [
      ['men', '拉麵（新鮮或乾麵）1 份'],
      ['dashi', '雞湯 300ml'],
      ['shoyu', '豉油 2 湯匙'],
      ['mirin', '味醂 1 茶匙'],
      ['ninniku', '蒜頭 1 粒（磨蓉）'],
      ['chashu', '叉燒 2 片'],
      ['tamago', '溏心蛋 半隻'],
      ['negi', '蔥、紫菜 適量'],
    ],
    howto: [
      '湯底：雞湯加蒜蓉煮滾，熄火。',
      '碗底先落豉油同味醂（呢個叫「タレ」）。',
      '另一煲大滾水烚麵，跟包裝時間（通常 1–2 分鐘）。',
      '熱湯沖入碗攪勻，麵瀝乾放入碗。',
      '鋪叉燒、半隻溏心蛋（滾水 6.5 分鐘再浸冰水）、蔥同紫菜。',
    ],
    steps: [
      { type: 'pick', need: ['men', 'chashu', 'tamago', 'negi'], decoys: ['tofu', 'umeboshi', 'satou'],
        jp: '材料{ざいりょう}を 選{えら}んでにゃ', yue: '揀材料喵', tip: '拉麵嘅配料叫「トッピング」。' },
      { type: 'hold', zone: [0.6, 0.85], anim: 'stir', verb: 'yuderu', add: ['ramen_boil'],
        jp: '麺{めん}を ゆでて', yue: '烚麵', tip: '水要大滾！' },
      { type: 'stir', turns: 2, anim: 'stir', verb: 'mazeru',
        jp: 'スープを 混{ま}ぜて', yue: '攪勻湯', tip: '湯同タレ要撈勻。' },
      { type: 'timing', rounds: 2, zone: 0.18, anim: 'chop', verb: 'noseru',
        jp: 'トッピングを のせて', yue: '放配料', tip: '靚唔靚就睇呢步！' },
    ],
  },
];

// 圖鑑用：未做嘅菜（剪影）
export const COMING_SOON = [
  { id: 'tempura', emoji: '🍤', jp: '天{てん}ぷら', yue: '天婦羅' },
  { id: 'sushi', emoji: '🍣', jp: 'お寿司{すし}', yue: '壽司' },
  { id: 'curry', emoji: '🍛', jp: 'カレーライス', yue: '咖喱飯' },
  { id: 'gyoza', emoji: '🥟', jp: '餃子{ぎょうざ}', yue: '餃子' },
  { id: 'tamagoyaki', emoji: '🍳', jp: '卵焼{たまごや}き', yue: '玉子燒' },
];

export function recipe(id) {
  return RECIPES.find((r) => r.id === id);
}
