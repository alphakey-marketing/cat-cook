// Shared art URLs work at the GitHub Pages project path too.
export const artURL = (id) => new URL(`${import.meta.env.BASE_URL}art/game/${id}.webp`, document.baseURI).href;
export function art(id, label = '', cls = '') {
  const img = document.createElement('img');
  img.src = artURL(id);
  img.alt = label;
  img.className = `art ${cls}`;
  img.draggable = false;
  img.decoding = 'async';
  return img;
}
export const vocabArt = (v) => art(`${v.cat}_${v.id}`, v.yue);
const icons = {
  '🪙':'coin', '🔥':'streak', '📚':'book', '📖':'book', '🛍️':'shop', '⚙️':'settings',
  '🔊':'speaker', '✕':'close', '❤️':'heart', '💖':'heart', '💕':'heart', '🐾':'paw',
  '🔒':'lock', '⭐':'star_on', '★':'star_on', '☆':'star_off', '🎁':'gift',
  '🎉':'celebrate', '🎊':'celebrate', '🔓':'unlock', '🎧':'listen', '🍽️':'serves',
  '⏱️':'timer', '🎯':'target', '✨':'xp', '🌟':'rare', '🎙️':'mic', '📅':'calendar',
  '📊':'stats', '💴':'yen', '🧾':'receipt', '🌱':'grow_1', '🌿':'grow_2', '🌳':'grow_3',
  '🌸':'grow_4', '💮':'stamp_hanamaru', '⭕':'stamp_maru', '🔺':'stamp_sankaku',
  '🏅':'medal', '🏆':'trophy', '👑':'crown', '🏮':'open_shop', '🐈‍⬛':'@logo_cat'
};
// Only replace text nodes, preserving markup, handlers, Japanese ruby and saved data.
export function decorateArt(root) {
  if (root.closest?.('script,style')) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  const pattern = new RegExp(Object.keys(icons).join('|'), 'gu');
  for (const node of nodes) {
    if (node.parentElement.closest('script,style')) continue;
    const text = node.textContent;
    pattern.lastIndex = 0;
    if (!pattern.test(text)) continue;
    pattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let last = 0;
    for (const match of text.matchAll(pattern)) {
      fragment.append(text.slice(last, match.index));
      const id = icons[match[0]];
      fragment.append(art(id.startsWith('@') ? id.slice(1) : `ui_${id}`, match[0]));
      last = match.index + match[0].length;
    }
    fragment.append(text.slice(last));
    node.replaceWith(fragment);
  }
}
