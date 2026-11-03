// 日文文字工具：振假名、羅馬字、發音 key
// 寫法： 漢字{かな}  例： 親子丼{おやこどん}をください
// ^は = 助詞 wa， ^へ = 助詞 e， 空格 = 羅馬字分詞（日文唔顯示）

const RUBY_RE = /([一-鿿々〆ヶ]+)\{([^}]+)\}/g;

function esc(s) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// 顯示用 HTML（有 ruby）
export function toHTML(src) {
  const s = esc(src).replace(/\^/g, '').replace(/ /g, '');
  return s.replace(RUBY_RE, '<ruby>$1<rt>$2</rt></ruby>');
}

// 純文字（漢字版）
export function toPlain(src) {
  return src.replace(RUBY_RE, '$1').replace(/\^/g, '').replace(/ /g, '');
}

// 全假名讀音（羅馬字同 TTS 用）
export function toReading(src, { forSpeech = false } = {}) {
  let s = src.replace(RUBY_RE, '$2');
  if (forSpeech) s = s.replace(/\^は/g, 'わ').replace(/\^へ/g, 'え');
  return s;
}

// TTS 用：保留漢字（音調較自然）
export function toSpeech(src) {
  return toPlain(src);
}

const KATA_OFFSET = 0x60;
export function kataToHira(s) {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - KATA_OFFSET));
}

const BASE = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'o', ん: 'n',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o', ゔ: 'vu',
};
const SMALL_Y = { ゃ: 'a', ゅ: 'u', ょ: 'o' };
const MACRON = { a: 'ā', i: 'ī', u: 'ū', e: 'ē', o: 'ō' };

export function toRomaji(src) {
  let s = kataToHira(toReading(src));
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const n = s[i + 1];
    if (c === '^') {
      const p = s[i + 1];
      if (p === 'は') { out += 'wa'; i++; continue; }
      if (p === 'へ') { out += 'e'; i++; continue; }
      continue;
    }
    if (c === 'っ') {
      const nxt = BASE[n];
      if (nxt) out += nxt.startsWith('ch') ? 't' : nxt[0];
      continue;
    }
    if (c === 'ー') {
      const last = out[out.length - 1];
      if (MACRON[last]) out = out.slice(0, -1) + MACRON[last];
      continue;
    }
    let r = BASE[c];
    if (r === undefined) { out += c === '、' ? ', ' : c === '。' ? '. ' : c === '？' ? '?' : c === '！' ? '!' : c; continue; }
    if (SMALL_Y[n]) {
      const stem = r.slice(0, -1);
      if (stem === 'sh' || stem === 'ch' || stem === 'j') r = stem + SMALL_Y[n];
      else r = stem + 'y' + SMALL_Y[n];
      i++;
    }
    if (c === 'ん' && n && /[あいうえおやゆよ]/.test(n)) r = "n'";
    out += r;
  }
  return out.replace(/\s+/g, ' ').trim();
}

// 穩定短 hash，做音檔名
export function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

export function audioKey(src, voice) {
  return `${voice}_${hash(toSpeech(src))}`;
}
