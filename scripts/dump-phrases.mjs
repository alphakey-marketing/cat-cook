// 列出全部句子（日文＋廣東話）→ docs/SENTENCES.md，方便檢查
import fs from 'node:fs';
import { SMALLTALK_LIST, DETAILS, REACT } from '../src/data/dialogue.js';
const strip = (s) => s.replace(/\{.*?\}/g, '');
const lv = ['🌱 零基礎', '🌿 初學', '🌳 N3'];
const tbl = (rows) => ['| 級 | 章節 | 日文 | 廣東話 |', '|---|---|---|---|', ...rows.map((x) => `| ${lv[x.lv ?? 0]} | ${x.ch || ''} | ${strip(x.jp)} | ${x.yue} |`)].join('\n');
let out = '# 全部句子（自動生成：node scripts/dump-phrases.mjs）\n';
out += '\n## 閒聊\n' + tbl(SMALLTALK_LIST);
out += '\n\n## 落單細節（食堂）\n' + tbl(DETAILS);
for (const k of ['great', 'ok', 'meh', 'wrong', 'bye']) out += `\n\n## 上菜／再見：${k}\n` + tbl(REACT[k]);
fs.writeFileSync('docs/SENTENCES.md', out + '\n');
console.log('docs/SENTENCES.md');
