// 模板填字（遊戲同生成音檔腳本共用，確保 key 一樣）
import { VOCAB } from './data/vocab.js';

export const NUMS = ['hitotsu', 'futatsu', 'mittsu'];

export function fill(tpl, vars) {
  let jp = tpl.jp;
  let yue = tpl.yue;
  for (const [k, v] of Object.entries(vars)) {
    if (typeof v === 'string' && VOCAB[v]) {
      jp = jp.replaceAll(`{${k}}`, VOCAB[v].jp);
      yue = yue.replaceAll(`{${k}Yue}`, VOCAB[v].yue.replace(/（.*?）/g, ''));
    } else {
      jp = jp.replaceAll(`{${k}}`, String(v));
      yue = yue.replaceAll(`{${k}}`, String(v));
    }
  }
  return { jp, yue };
}
