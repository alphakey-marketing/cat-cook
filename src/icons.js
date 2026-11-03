// 統一風格 SVG 圖示：48x48，墨線 2.5、圓角、平塗色
const INK = '#2b211b';
const sv = (body, vb = '0 0 48 48') =>
  `<svg class="ic" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const ICONS = {
  // ===== 商店 =====
  hat_chef: sv(`<path d="M14 30v-6a7 7 0 0 1 3-13 7 7 0 0 1 14 0 7 7 0 0 1 3 13v6z" fill="#fffaf0"/><path d="M14 30h20v6a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" fill="#f1e2c6"/><path d="M20 14v12M28 14v12" stroke="#d9c7a4" stroke-width="2"/>`),
  hat_hachimaki: sv(`<path d="M8 20c10-6 22-6 32 0v8c-10-6-22-6-32 0z" fill="#fffaf0"/><circle cx="24" cy="23" r="4.5" fill="#d7263d" stroke-width="2"/><path d="M38 24l6 8M40 22l5 3" stroke-width="2.5"/>`),
  hat_straw: sv(`<ellipse cx="24" cy="30" rx="20" ry="7" fill="#f2cf79"/><path d="M13 29c0-10 4-16 11-16s11 6 11 16" fill="#f7dc8f"/><path d="M13 27c7 3 15 3 22 0" stroke="#d7263d" stroke-width="3.5"/><path d="M8 30c4 3 28 3 32 0" stroke-width="1.8" opacity=".5"/>`),
  neck_bell: sv(`<path d="M9 14c8 6 22 6 30 0" stroke="#d7263d" stroke-width="4"/><circle cx="24" cy="29" r="9" fill="#f5b82e"/><path d="M15.5 29h17" stroke-width="2"/><circle cx="24" cy="33" r="1.8" fill="${INK}" stroke="none"/><path d="M20 22.5c2.4-1.4 5.6-1.4 8 0" stroke="#fff" stroke-width="2" opacity=".8"/>`),
  neck_scarf: sv(`<path d="M7 14c11 7 23 7 34 0l2 8c-12 7-26 7-38 0z" fill="#d7263d"/><path d="M28 24l5 18 7-3-4-16z" fill="#b81f33"/><path d="M13 19l2 2M20 22l2 2M27 23l2 2" stroke="#fff" stroke-width="2" opacity=".7"/>`),
  deco_lantern: sv(`<path d="M24 3v7" /><rect x="17" y="9" width="14" height="5" rx="1.5" fill="#3a2a22"/><ellipse cx="24" cy="26" rx="13" ry="13" fill="#e03a2f"/><path d="M24 13c-5 6-5 20 0 26M24 13c5 6 5 20 0 26M12 21h24M11.5 30h25" stroke="#8c1d17" stroke-width="1.8"/><rect x="17" y="38" width="14" height="5" rx="1.5" fill="#3a2a22"/><path d="M24 43v3" /><path d="M18 20c1-2 3-3 5-3" stroke="#fff" stroke-width="2" opacity=".6"/>`),
  deco_noren: sv(`<path d="M4 9h40" stroke-width="3.5"/><circle cx="4" cy="9" r="2.4" fill="#6b3f1d"/><circle cx="44" cy="9" r="2.4" fill="#6b3f1d"/><path d="M7 11h11v27H7zM18.5 11h11v27h-11zM30 11h11v27H30z" fill="#1d3557"/><circle cx="12.5" cy="24" r="3.4" fill="#fff" stroke="none"/><circle cx="24" cy="24" r="3.4" fill="#fff" stroke="none"/><circle cx="35.5" cy="24" r="3.4" fill="#fff" stroke="none"/>`),
  deco_bonsai: sv(`<path d="M24 31c-1-6 2-9 0-14" stroke="#5b3a1e" stroke-width="4"/><path d="M24 24c-5-1-8-3-9-6" stroke="#5b3a1e" stroke-width="3"/><circle cx="24" cy="12" r="8" fill="#4aa060"/><circle cx="13" cy="19" r="6.5" fill="#3f8f50"/><circle cx="35" cy="17" r="6.5" fill="#3f8f50"/><path d="M11 31h26l-3 12H14z" fill="#2f5f8f"/><path d="M11 31h26" stroke-width="3.5"/><path d="M19 36h10" stroke="#fff" stroke-width="2" opacity=".5"/>`),
  deco_maneki: sv(`<path d="M12 42V26c0-9 5-14 12-14s12 5 12 14v16z" fill="#fffaf0"/><path d="M14 18L12 6l8 5M34 18l2-12-8 5" fill="#fffaf0"/><path d="M36 26c4-3 6-8 5-13" stroke="${INK}" stroke-width="5" opacity="0"/><path d="M33 29c5 0 7-5 6-11l-4 1" fill="#fffaf0"/><circle cx="19.5" cy="22" r="1.8" fill="${INK}" stroke="none"/><circle cx="28.5" cy="22" r="1.8" fill="${INK}" stroke="none"/><path d="M22.5 26h3l-1.5 2z" fill="#f08a9a" stroke-width="1.6"/><path d="M13 31c3 1 5 0 6-1M35 31c-3 1-5 0-6-1M12 27l5 1.5M36 27l-5 1.5" stroke-width="1.6"/><path d="M15 36h18" stroke="#d7263d" stroke-width="3"/><circle cx="24" cy="39" r="3" fill="#f5b82e" stroke-width="2"/>`),

  // ===== HUD / 通用 =====
  coin: sv(`<circle cx="24" cy="24" r="18" fill="#f5b82e"/><circle cx="24" cy="24" r="12.5" stroke-width="1.8" fill="#fbd35e"/><rect x="20.5" y="20.5" width="7" height="7" fill="${INK}" stroke="none" transform="rotate(0 24 24)"/><rect x="22" y="22" width="4" height="4" fill="#fbd35e" stroke="none"/>`),
  flame: sv(`<path d="M24 4c2 8 11 11 11 22a11 11 0 0 1-22 0c0-5 3-8 5-11 1 3 2 4 4 4-1-6 0-10 2-15z" fill="#ff7a3b"/><path d="M24 24c1 4 5 5 5 9a5 5 0 0 1-10 0c0-3 3-5 5-9z" fill="#ffd25a" stroke-width="2"/>`),
  book: sv(`<path d="M6 10c6-3 12-3 18 1 6-4 12-4 18-1v29c-6-3-12-3-18 1-6-4-12-4-18-1z" fill="#fff8ec"/><path d="M24 11v29" /><path d="M11 17c3-1 6-1 9 1M11 24c3-1 6-1 9 1M28 18c3-2 6-2 9-1M28 25c3-2 6-2 9-1" stroke-width="1.8" opacity=".55"/>`),
  bag: sv(`<path d="M9 16h30l-2 26H11z" fill="#d7263d"/><path d="M17 21v-5a7 7 0 0 1 14 0v5" /><path d="M16 28c3 3 13 3 16 0" stroke="#fff" stroke-width="2" opacity=".75"/>`),
  gear: sv(`<rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(0 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(45 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(90 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(135 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(180 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(225 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(270 24 24)"/><rect x="20.5" y="3.5" width="7" height="9" rx="2" fill="#d9c7a4" transform="rotate(315 24 24)"/><circle cx="24" cy="24" r="14" fill="#d9c7a4"/><circle cx="24" cy="24" r="6" fill="#fff8ec"/>`),
  speaker: sv(`<path d="M8 19h7l9-8v26l-9-8H8z" fill="#f5b82e"/><path d="M30 17c3 4 3 10 0 14M35 12c6 7 6 17 0 24" />`),
  lock: sv(`<rect x="10" y="21" width="28" height="21" rx="4" fill="#f5b82e"/><path d="M16 21v-6a8 8 0 0 1 16 0v6"/><circle cx="24" cy="31" r="3" fill="${INK}" stroke="none"/>`),
  paw: sv(`<ellipse cx="24" cy="31" rx="9" ry="8" fill="#2b211b"/><circle cx="11" cy="22" r="4.2" fill="#2b211b"/><circle cx="19" cy="13" r="4.2" fill="#2b211b"/><circle cx="29" cy="13" r="4.2" fill="#2b211b"/><circle cx="37" cy="22" r="4.2" fill="#2b211b"/>`),
  star: sv(`<path d="M24 5l5.500 12 13 1.500-9.700 8.800 2.800 12.900L24 33.500 12.400 40.200l2.800-12.900L5.500 18.500 18.500 17z" fill="#f5b82e"/>`),
};

export const icon = (id, size = 28) => {
  const s = ICONS[id] || '';
  return s.replace('class="ic"', `class="ic" width="${size}" height="${size}"`);
};
export const iconEl = (id, size = 28) => {
  const w = document.createElement('span');
  w.className = 'ic-wrap';
  w.innerHTML = icon(id, size);
  return w;
};

// ===== 食譜卡插圖：160x110，統一風格 =====
const dsv = (body) =>
  `<svg class="illus" viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const steam = (x, y) => `<path d="M${x} ${y}c-5-6 5-10 0-17M${x + 12} ${y + 3}c-5-6 5-10 0-17" stroke="#fff" stroke-width="3" opacity=".85" fill="none"/>`;
const table = `<path d="M6 96h148" stroke-width="3"/><path d="M6 96h148v8H6z" fill="#c69c6d" stroke-width="2.4"/>`;

export const ILLUS = {
  onigiri: dsv(`${table}
    <ellipse cx="80" cy="96" rx="48" ry="6" fill="#e8d7bd" stroke="none"/>
    <path d="M80 22c10 0 34 40 36 62 0 7-6 11-14 11H58c-8 0-14-4-14-11 2-22 26-62 36-62z" fill="#fffdf5"/>
    <path d="M62 62h36l6 33H56z" fill="#1f3322"/><path d="M62 62h36l6 33H56z" />
    <circle cx="80" cy="45" r="5" fill="#c8283c" stroke-width="2"/>
    <path d="M70 36c3-5 8-8 12-8" stroke="#fff" stroke-width="3" opacity=".9"/>
    <path d="M120 70l14-10M124 80l16-3" stroke="#d9c7a4" stroke-width="2.4"/>
    <path d="M24 88c4-8 10-8 14 0" stroke="#3fa66b" fill="#6cc24a"/><path d="M30 88c1-10 7-12 12-8" stroke="#3fa66b"/>`),
  misoshiru: dsv(`${table}
    <ellipse cx="80" cy="96" rx="52" ry="6" fill="#e8d7bd" stroke="none"/>
    <path d="M34 52h92c0 26-12 42-46 42S34 78 34 52z" fill="#b03a2e"/>
    <path d="M34 52h92" /><ellipse cx="80" cy="52" rx="46" ry="9" fill="#c58b4a"/>
    <path d="M44 78c10 8 62 8 72 0" stroke="#f5b82e" stroke-width="3" opacity=".8"/>
    <rect x="56" y="46" width="12" height="9" rx="2" fill="#fffbe8" stroke-width="2" transform="rotate(-10 62 50)"/>
    <rect x="76" y="48" width="12" height="9" rx="2" fill="#fffbe8" stroke-width="2" transform="rotate(8 82 52)"/>
    <path d="M98 50c4-3 9-2 11 1-3 3-8 4-11-1z" fill="#2e6b3a" stroke-width="2"/>
    <circle cx="70" cy="56" r="2" fill="#6cc24a" stroke="none"/><circle cx="92" cy="57" r="2" fill="#6cc24a" stroke="none"/>
    ${steam(66, 38)}
    <path d="M128 40l22-14M128 46l24-8" stroke="#8b5a3c" stroke-width="3"/>`),
  oyakodon: dsv(`${table}
    <ellipse cx="80" cy="96" rx="52" ry="6" fill="#e8d7bd" stroke="none"/>
    <path d="M30 54h100c0 26-14 40-50 40S30 80 30 54z" fill="#b03a2e"/>
    <path d="M36 82c12 8 76 8 88 0" stroke="#f5b82e" stroke-width="3" opacity=".8"/>
    <path d="M30 54c0-10 22-18 50-18s50 8 50 18" fill="#f7c531"/>
    <path d="M42 50c8-10 22-12 30-6M78 44c8-8 22-8 30 0M100 52c6-4 12-3 16 1" stroke="#e8a317" stroke-width="2.6" fill="none"/>
    <circle cx="62" cy="46" r="6" fill="#f2c9a0" stroke-width="2"/><circle cx="96" cy="48" r="5" fill="#f2c9a0" stroke-width="2"/>
    <path d="M70 40l4-4M86 42l4 4M108 44l4-3" stroke="#3fa66b" stroke-width="3"/>
    <circle cx="80" cy="40" r="3" fill="#2e6b3a" stroke-width="1.6"/>
    ${steam(58, 34)}`),
  ramen: dsv(`${table}
    <ellipse cx="80" cy="96" rx="54" ry="6" fill="#e8d7bd" stroke="none"/>
    <path d="M26 50h108c0 28-14 46-54 46S26 78 26 50z" fill="#fff8ec"/>
    <path d="M26 50h108c0 8-1 15-4 21H30c-3-6-4-13-4-21z" fill="#d7263d" stroke="none"/>
    <path d="M26 50h108c0 28-14 46-54 46S26 78 26 50z" />
    <path d="M58 64l8 6 8-6 8 6 8-6 8 6 8-6" stroke="#fff" stroke-width="2.4" opacity=".9"/>
    <ellipse cx="80" cy="50" rx="54" ry="11" fill="#e8b960"/>
    <path d="M44 48c10 6 28 6 38 0M60 54c10 5 26 4 36-1M48 44c14-6 30-6 44 0" stroke="#fbe49a" stroke-width="2.4" fill="none"/>
    <circle cx="60" cy="46" r="10" fill="#e8f0d2" stroke-width="2"/><circle cx="60" cy="46" r="4.500" fill="#f7a929" stroke-width="2"/>
    <ellipse cx="96" cy="44" rx="14" ry="9" fill="#b5653a" stroke-width="2"/><ellipse cx="96" cy="44" rx="8" ry="4.500" fill="#d98d5e" stroke="none"/>
    <path d="M78 40h10v6H78z" fill="#1f3322" stroke-width="2"/>
    <path d="M110 48l6-3M112 52l8-1" stroke="#6cc24a" stroke-width="3"/>
    ${steam(70, 30)}
    <path d="M118 22l32-14M120 30l32-8" stroke="#8b5a3c" stroke-width="3"/>`),
};
export const illus = (id) => ILLUS[id] || '';
