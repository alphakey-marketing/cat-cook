// 對白頭像：全部用 SVG 手寫，每個角色 3 個表情（normal / happy / surprised）
// 用法：portrait('kitsune', 'happy') → 一段 HTML 字串
const OUT = '#4a2e22';           // 描邊色，同 3D 描邊一致
const st = `stroke="${OUT}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;

const eyes = (mood, x = 20, y = 36, col = '#2a1a14') => {
  const L = x, R = 64 - x;
  if (mood === 'happy') return `<path d="M${L - 5} ${y + 2}q5 -8 10 0M${R - 5} ${y + 2}q5 -8 10 0" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`;
  const r = mood === 'surprised' ? 5.6 : 4.2;
  return [L, R].map((cx) => `<ellipse cx="${cx}" cy="${y}" rx="${r}" ry="${r * 1.2}" fill="${col}"/><circle cx="${cx + 1.6}" cy="${y - 2}" r="1.7" fill="#fff"/>`).join('');
};
const mouth = (mood, y = 47) => mood === 'happy'
  ? `<path d="M26 ${y}q6 8 12 0z" fill="#8a2a3a" ${st} stroke-width="1.8"/>`
  : mood === 'surprised'
    ? `<ellipse cx="32" cy="${y + 2}" rx="3.2" ry="4.2" fill="#6a1a2a"/>`
    : `<path d="M27 ${y}q2.5 3 5 0q2.5 3 5 0" fill="none" stroke="${OUT}" stroke-width="2" stroke-linecap="round"/>`;
const blush = (on) => on ? `<ellipse cx="13" cy="44" rx="5" ry="3" fill="#ff8fa3" opacity=".55"/><ellipse cx="51" cy="44" rx="5" ry="3" fill="#ff8fa3" opacity=".55"/>` : '';

const SPECIES = {
  cat: (m) => `
    <path d="M12 26L10 6l16 9zM52 26l2-20-16 9z" fill="#26263a" ${st}/>
    <path d="M14 22l-1-10 7 4zM50 22l1-10-7 4z" fill="#ff9fb5"/>
    <ellipse cx="32" cy="38" rx="25" ry="22" fill="#26263a" ${st}/>
    <ellipse cx="32" cy="46" rx="11" ry="8" fill="#3a3a4c"/>
    ${eyes(m, 20, 36, '#05050a').replace(/#05050a/g, '#05050a')}
    ${m === 'happy' ? '' : '<ellipse cx="20" cy="36" rx="6.6" ry="7.6" fill="#c8e04a" opacity=".0"/>'}
    <ellipse cx="32" cy="42" rx="3" ry="2.2" fill="#ff8fa8"/>${mouth(m, 46)}
    <path d="M17 43l-12-2M17 46l-12 2M47 43l12-2M47 46l12 2" stroke="#ddd" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M18 8q14-9 28 0l-3 8H21z" fill="#fff" ${st}/><circle cx="32" cy="6" r="7" fill="#fff" ${st}/>`,
  usagi: (m) => `
    <ellipse cx="22" cy="12" rx="6" ry="16" fill="#faf6f0" ${st} transform="rotate(-8 22 12)"/><ellipse cx="22" cy="13" rx="2.8" ry="11" fill="#ffb3c1" transform="rotate(-8 22 12)"/>
    <ellipse cx="42" cy="12" rx="6" ry="16" fill="#faf6f0" ${st} transform="rotate(8 42 12)"/><ellipse cx="42" cy="13" rx="2.8" ry="11" fill="#ffb3c1" transform="rotate(8 42 12)"/>
    <ellipse cx="32" cy="40" rx="23" ry="20" fill="#faf6f0" ${st}/>${blush(true)}${eyes(m, 21, 38)}
    <path d="M29.5 43l2.5 2.4 2.5-2.4z" fill="#ff8fa3"/>${mouth(m, 47)}`,
  kuma: (m) => `
    <circle cx="14" cy="18" r="8" fill="#8a5a3b" ${st}/><circle cx="14" cy="18" r="4" fill="#d9b38c"/>
    <circle cx="50" cy="18" r="8" fill="#8a5a3b" ${st}/><circle cx="50" cy="18" r="4" fill="#d9b38c"/>
    <ellipse cx="32" cy="38" rx="25" ry="22" fill="#8a5a3b" ${st}/>
    <ellipse cx="32" cy="46" rx="11" ry="8.5" fill="#d9b38c"/>${eyes(m, 20, 34)}
    <ellipse cx="32" cy="42" rx="3.6" ry="2.6" fill="#2a1a14"/>${mouth(m, 49)}`,
  kitsune: (m) => `
    <path d="M9 30L8 4l18 14zM55 30l1-26-18 14z" fill="#e5823a" ${st}/><path d="M11 20l-1-11 8 6zM53 20l1-11-8 6z" fill="#3a2a22"/>
    <path d="M7 36q0-16 25-16t25 16q0 18-25 20Q7 54 7 36z" fill="#e5823a" ${st}/>
    <path d="M7 40q10 2 14 10 6 5 11 5t11-5q4-8 14-10-2 14-25 16Q9 54 7 40z" fill="#fff3e0"/>
    ${eyes(m, 20, 36)}<ellipse cx="32" cy="44" rx="3" ry="2.2" fill="#2a1a14"/>${mouth(m, 48)}`,
  tanuki: (m) => `
    <circle cx="13" cy="19" r="7.5" fill="#7b6a58" ${st}/><circle cx="51" cy="19" r="7.5" fill="#7b6a58" ${st}/>
    <ellipse cx="32" cy="39" rx="25" ry="21" fill="#7b6a58" ${st}/>
    <ellipse cx="32" cy="46" rx="13" ry="9" fill="#e8dcc8"/>
    <ellipse cx="19" cy="35" rx="8" ry="6.5" fill="#3a3028" transform="rotate(-18 19 35)"/><ellipse cx="45" cy="35" rx="8" ry="6.5" fill="#3a3028" transform="rotate(18 45 35)"/>
    ${eyes(m, 20, 35, '#fff').replace(/#fff"\/>/g, '#fff"/>')}<ellipse cx="32" cy="42" rx="3.2" ry="2.4" fill="#2a1a14"/>${mouth(m, 48)}
    <ellipse cx="32" cy="14" rx="9" ry="3.6" fill="#4caf50" ${st} transform="rotate(-14 32 14)"/>`,
  shiba: (m) => `
    <path d="M9 32L7 6l17 12zM55 32l2-26-17 12z" fill="#d99a4e" ${st}/><path d="M11 22l-1-10 7 5zM53 22l1-10-7 5z" fill="#fff3e0"/>
    <ellipse cx="32" cy="38" rx="25" ry="22" fill="#d99a4e" ${st}/>
    <path d="M7 40q10-2 14 4 4 8 11 8t11-8q4-6 14-4-2 14-25 16Q9 54 7 40z" fill="#fff3e0"/><path d="M32 22q-6 8 0 12q6-4 0-12z" fill="#fff3e0"/>
    ${eyes(m, 21, 35)}<ellipse cx="32" cy="43" rx="3.4" ry="2.5" fill="#2a1a14"/>${mouth(m, 48)}
    <ellipse cx="22" cy="28" rx="2.6" ry="1.8" fill="#fff3e0"/><ellipse cx="42" cy="28" rx="2.6" ry="1.8" fill="#fff3e0"/>`,
  maneki: (m) => `
    <path d="M10 28L9 6l16 11zM54 28l1-22-16 11z" fill="#fff" ${st}/><path d="M12 20l-1-8 6 5zM52 20l1-8-6 5z" fill="#ffb3c1"/>
    <ellipse cx="32" cy="38" rx="24" ry="21" fill="#fff" ${st}/>
    <circle cx="14" cy="26" r="5" fill="#e5823a"/><circle cx="48" cy="22" r="4" fill="#3a3028"/>${blush(true)}
    ${eyes(m, 21, 36)}<ellipse cx="32" cy="42" rx="2.6" ry="2" fill="#ff8fa3"/>${mouth(m, 46)}
    <path d="M14 54q18 10 36 0" fill="none" stroke="#d7263d" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="60" r="3.4" fill="#f5c542" ${st} stroke-width="1.4"/>`,
};

export function portrait(id, mood = 'normal') {
  const f = SPECIES[id] || SPECIES.usagi;
  return `<svg class="portrait-svg" viewBox="0 0 64 64" aria-hidden="true">${f(mood)}</svg>`;
}
