// 劇場 turn 助手（drama.js／drama_more.js／daily.js 共用）
export const F = (jp, yue) => ({ t: 'f', line: { jp, yue } });
export const ME = (task, ok, bad) => ({ t: 'me', task, ok, bad });
export const LS = (jp, yue, task, answer, wrong) => ({ t: 'ls', line: { jp, yue }, task, answer, wrong });
export const L = (jp, yue, why) => ({ jp, yue, why });
// 縮約聽力：答啱之後彈出拆解 note
export const LSN = (jp, yue, task, answer, wrong, note) => ({ ...LS(jp, yue, task, answer, wrong), note });
export const SAY = (jp, yue, task = '🎤 跟住講一次') => ({ t: 'say', line: { jp, yue }, task });
// 換對象：呢句由另一個關係嘅角色講（例如中途部長行埋嚟）
export const AS = (rel, turn) => ({ ...turn, rel });
// 旁白：一句說明，唔講嘢
export const NOTE = (text) => ({ t: 'note', text });
// 冇標準答案嘅選擇：opts = [jp, yue, 分數, 對方回應jp, 對方回應yue]
export const CH = (task, opts) => ({
  t: 'ch', task,
  opts: opts.map(([jp, yue, pt, rjp, ryue]) => ({ jp, yue, pt, re: rjp ? { jp: rjp, yue: ryue } : null })),
});
// 結局：好感分（CH 分數 − 答錯次數）≥ th 就好結局
const endOf = (e) => ({ name: e.name, lines: e.lines.map(([jp, yue]) => ({ jp, yue })) });
export const END = (th, good, bad) => ({ t: 'end', th, good: endOf(good), bad: endOf(bad) });
