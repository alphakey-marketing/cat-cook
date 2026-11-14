# VOICEVOX 聲線條款核對（2026-11-10）

來源：[VOICEVOX 軟件規約](https://voicevox.hiroshiba.jp/term/)（商用、非商用皆可，要有「利用 VOICEVOX」嘅 credit，生成音聲要跟各音聲庫規約）；各角色條款轉載於 [VOICEVOX Engine（Docker Hub）](https://hub.docker.com/r/voicevox/voicevox_engine)；雨晴はう見[官方頁](https://amehau.com/?page_id=225)。
轉載頁唔係官方原文，**上架前要再對一次各角色官方頁**。

假設：開發者以**個人**身份發售（唔係公司）。如果會用公司名義賣，青山龍星要先問。

| key | 角色 | 音檔數 | 收費 app 可用？ | Credit 寫法 | 狀態 |
|---|---|---|---|---|---|
| cat | 春日部つむぎ | 2,902 | ✅ 商用可 | VOICEVOX:春日部つむぎ | OK |
| word | 冥鳴ひまり | 1,139 | ✅ | VOICEVOX:冥鳴ひまり | OK |
| usagi | 雨晴はう | 1,564 | ✅ 個人／企業皆可；VOICEVOX credit 必須；R18 用途唔好 | VOICEVOX:雨晴はう | OK |
| kuma | 玄野武宏 | 1,663 | ✅ | VOICEVOX:玄野武宏 | OK |
| kitsune | 四国めたん | 398 | ✅ | VOICEVOX:四国めたん | OK |
| tanuki | 白上虎太郎 | 524 | ✅ | VOICEVOX:白上虎太郎 | OK |
| shiba | 青山龍星 | 375 | ⚠️ 個人可；「企業が携わる形」要先問ななはぴ（https://v.seventhh.com/contact/） | VOICEVOX:青山龍星 | 個人發售 OK；改公司名義前要問 |
| maneki | もち子さん | 407 | ❌ 「音声作品・音声素材・ゲーム作品等を除いて」商用可；呢個 app 係遊戲 | VOICEVOX:もち子(cv 明日葉よもぎ) | **賣之前必須換聲** |

## 已做
- `src/data/voices.js` 加 `credit` 欄；`src/screens.js` 設定頁用 `credit`，もち子さん 改為官方格式（原本只寫「もち子さん」，格式唔啱）。

## 待做：換走 maneki（407 個音檔）
`maneki` 用喺 `CUSTOMER_VOICES`（招き猫さま客人）同 `NPC.family`（`src/data/drama.js:17`，家人角色）。

1. 揀替代聲：要先核對條款（上面 ✅ 嘅聲全部已經有人用，重用都得）。建議 `maneki` 改用 **四國めたん（id 2）**，唔使新核對。
2. 改 `src/data/voices.js`：`maneki: { id: 2, name: '四国めたん' }`（credit 重複會被去重）。
3. 刪走 `public/audio/maneki_*.mp3`（407 個），開 VOICEVOX engine，行 `npm run voice`。
4. 試玩招き猫さま客人同家人劇場，確認有聲。

## 其他注意
- 如果之後要用其他角色，先核條款；ずんだもん等「唔寫 credit 嘅商用」要收費（每角色 40 萬日圓）。
- 暫時未換聲，所以**唔好 deploy 去收費版本**。
