// 開口講：用瀏覽器語音辨識（ja-JP）對比目標句。
// Chrome／Edge／Safari 有；Firefox 冇 → 自評。
import { toPlain, toReading, kataToHira } from './jp.js';

const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
export const canListen = () => !!SR;

// 去標點、空格，片假名變平假名
const norm = (s) => kataToHira(String(s)).replace(/[\s、。！？!?…・「」『』（）()〜~ー,.]/g, '');

// 最長公共子序列長度
function lcs(a, b) {
  const dp = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    let prev = 0;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[b.length];
}
// 相似度 0..1：同漢字版、讀音版都比，攞高分
export function score(heard, target) {
  const h = norm(heard);
  if (!h) return 0;
  let best = 0;
  for (const t of [norm(toPlain(target)), norm(toReading(target))]) {
    if (!t) continue;
    const l = lcs(h, t);
    best = Math.max(best, (2 * l) / (h.length + t.length));
  }
  return best;
}

// 聽一次。返 { text, score } 或 { error }
export function listenOnce(target, ms = 7000) {
  return new Promise((res) => {
    if (!SR) { res({ error: 'unsupported' }); return; }
    const r = new SR();
    r.lang = 'ja-JP';
    r.interimResults = false;
    r.maxAlternatives = 5;
    let done = false;
    const end = (v) => { if (done) return; done = true; clearTimeout(t); try { r.stop(); } catch { /* 已停 */ } res(v); };
    const t = setTimeout(() => end({ error: 'timeout' }), ms);
    r.onresult = (e) => {
      const alts = [...e.results[0]].map((a) => a.transcript);
      let best = { text: alts[0] || '', score: 0 };
      alts.forEach((a) => { const s = score(a, target); if (s > best.score) best = { text: a, score: s }; });
      end(best);
    };
    r.onerror = (e) => end({ error: e.error || 'error' });
    r.onend = () => end({ error: 'no-speech' });
    try { r.start(); } catch { end({ error: 'error' }); }
  });
}
