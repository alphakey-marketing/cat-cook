// 商店：小黑衫褲 + 店舖裝修。名都係日文，買嘢都學到字
export const SHOP = [
  { id: 'hat_chef', slot: 'hat', price: 0, emoji: '👨‍🍳', jp: 'コック帽{ぼう}', yue: '廚師帽' },
  { id: 'hat_hachimaki', slot: 'hat', price: 80, emoji: '🎌', jp: 'はちまき', yue: '頭巾（打氣用）' },
  { id: 'hat_straw', slot: 'hat', price: 180, emoji: '👒', jp: '麦{むぎ}わら帽子{ぼうし}', yue: '草帽' },
  { id: 'neck_bell', slot: 'neck', price: 60, emoji: '🔔', jp: '鈴{すず}', yue: '鈴鐺' },
  { id: 'neck_scarf', slot: 'neck', price: 120, emoji: '🧣', jp: 'スカーフ', yue: '頸巾' },
  { id: 'deco_lantern', slot: 'deco', price: 100, emoji: '🏮', jp: '提灯{ちょうちん}', yue: '燈籠' },
  { id: 'deco_noren', slot: 'deco', price: 150, emoji: '🎏', jp: 'のれん', yue: '門簾' },
  { id: 'deco_bonsai', slot: 'deco', price: 220, emoji: '🪴', jp: '盆栽{ぼんさい}', yue: '盆栽' },
  { id: 'deco_maneki', slot: 'deco', price: 350, emoji: '🐱', jp: '招{まね}き猫{ねこ}', yue: '招財貓（客人多啲）' },
];

// 客人種類。rare 越細越少見
export const CUSTOMERS = [
  { id: 'usagi', jp: 'うさぎさん', yue: '兔仔', color: 0xfaf6f0, ear: 'long', weight: 10, tip: 1 },
  { id: 'kuma', jp: 'くまさん', yue: '熊仔', color: 0x8a5a3b, ear: 'round', weight: 10, tip: 1 },
  { id: 'kitsune', jp: 'きつねさん', yue: '狐狸', color: 0xe5823a, ear: 'pointy', weight: 8, tip: 1.2 },
  { id: 'tanuki', jp: 'たぬきさん', yue: '狸貓', color: 0x7b6a58, ear: 'round', mask: true, weight: 6, tip: 1.3 },
  { id: 'shiba', jp: '柴犬{しばいぬ}さん', yue: '柴犬', color: 0xd99a4e, ear: 'pointy', weight: 4, tip: 1.6, rare: true },
  { id: 'maneki', jp: '招{まね}き猫{ねこ}さま', yue: '招財貓大人', color: 0xffffff, ear: 'pointy', weight: 1, tip: 5, rare: true, legend: true },
];
