# 黑貓食堂：商業評估（2026-11-10）

審查範圍：repo 全部 source、`src/data/`、`docs/`、`scripts/`、live site（https://alphakey-marketing.github.io/cat-cook/）試玩一段每日一句。評估基於 commit `4c0620d`。

## 1. 判詞

**未賣得，修完先賣（not yet）。** 內容底同教學設計夠賣，但入面冇任何收錢、帳戶、analytics 或私隱政策嘅 code，存檔只喺 localStorage，冇 PWA 亦冇 app 包裝。最大問題係 IP：`content/` 係 YouTube 影片字幕，入面有日劇《半沢直樹》對白，而且已經 commit 入 git。再加上零真人用戶數據，冇人知留存點樣。

## 2. Scorecard

| 維度 | 分 | 證據 |
|---|---|---|
| 學習價值 | 7 | 有 SRS（`src/save.js:124`，6 格，2 分鐘至 5 日）。有聽→揀→用→講流程，錯選項有解釋。開口用瀏覽器語音辨識（`src/speak.js`），Firefox 冇，只能自評。SRS 最長 5 日，太短。 |
| 好玩／留存 | 5 | 有 streak、金幣、商店、等級、劇場解鎖。但試玩所見每句都係選擇題，冇推送，冇每日提醒。留存零數據。 |
| 差異化 | 6 | 廣東話介面加廣東話翻譯係真賣點，大 app 少做。「貓」唔係護城河，人人抄得。情境同語感錯選項（太粗魯／場合錯）先係特色。 |
| 內容深度 | 6 | 440 句每日一句、40 場劇場、232 單詞、35 食譜、8,972 個音檔。7 日寫晒（46 commits，11 月 3–10 日），平係平，但未有母語者校對。 |
| 製作質素 | 5 | 2D 圖靚，3D 係基本幾何體，兩者風格唔夾。桌面版大堂影唔到貓，每日一句畫面貓臉被切。載入快：約 3 秒，560KB。只用 Chromium 模擬測過（`docs/MOBILE_UX.md` 自己寫明）。 |
| 平台／分發 | 2 | 只有 GitHub Pages。冇 manifest、冇 service worker、冇 Capacitor、冇 SEO 頁。 |
| 收費配合度 | 6 | 自然閘位有：章節、劇場系列（`SERIES`）、戀愛／商務句庫、N3 級。但 code 零收費鉤。 |
| 法律／IP | 3 | 見缺口 1、2。語音 credit 有寫（`src/screens.js:278`）。冇私隱政策。 |

## 3. 如果修完：收費模式（全部係估算）

- **模式**：freemium 加一次過買斷。細眾工具，訂閱難撐。
- **免費**：小黑食堂、便利店、劇場頭 10 場、每日一句每日 1 句。
- **收費**：
  - 全解鎖：US$7.99／HK$58／NT$250
  - 單包（戀愛、商務、旅行）：各 US$2.99／HK$22／NT$90
- **參考價**：LingoDeer 年費 US$95.99（官網）。Duolingo Super 美國約 US$84／年，台灣 NT$1,530／年（二手來源，未核實）。香港價查唔到。
- **第一年收入**：約 US$300–3,400（HK$2.3k–26k）。
  - 假設：5,000–20,000 人試玩，全靠 Threads／IG 自然流量。
  - 轉化 1–3%（語言 app 據報 2–5%，二手來源）。
  - 每個付費用戶淨收約 US$6。
- **首發平台**：先 web（PWA 加 Stripe／Lemon Squeezy，冇 30% 抽成）驗證，之後 Capacitor 上 Google Play，iOS 最後。

以上數字只夠做副業，唔夠養一個人。

## 4. 缺口排名

| # | 缺口 | 級別 | 證據 | 工夫 | 修法 |
|---|---|---|---|---|---|
| 1 | 第三方字幕喺 repo | blocker | `content/感情/001_QodBJtZN05E.txt`（YouTube ID 檔名）；`content/business/001…` 有「ハンザワ」；305 個檔已 track | 1–2 日 | 由 git 歷史刪走 `content/`。只留自己寫嘅對話。主角句逐句改寫，唔好跟原片次序同編號。 |
| 2 | VOICEVOX 逐角色條款未核 | blocker | `src/data/voices.js` 用 8 把聲；二手資料話青山龍星（`shiba`）企業用途要事先問 | 2–3 日 | 逐個讀官方規約，唔得就換聲重生成。 |
| 3 | 冇收費、帳戶、雲端存檔 | blocker | `src/` grep 唔到 payment／login；存檔只有 `catcook_v1`，冇匯出 | 1–2 週 | 加匯出／匯入，再加授權碼或 Stripe checkout。 |
| 4 | 冇 analytics | blocker | grep 零結果 | 1 日 | 加 Plausible／PostHog，量 D1／D7 同完成率。 |
| 5 | 冇私隱政策／條款 | major | 用咪做語音辨識，但冇任何說明 | 1 日 | 寫一頁，講明咪同存檔點用。 |
| 6 | 冇 PWA／離線 | major | live site 實測 `manifest:false`、`sw:false` | 2–3 日 | 加 manifest 同 service worker，音檔按章節 cache。 |
| 7 | 日文未校對 | major | 3,833 句對白一週寫成；字幕源有錯字（「営業家」） | 1–2 週 | 請母語者抽查 10%，錯率高就全查。 |
| 8 | 3D 質素同桌面取景 | major | 試玩截圖：大堂空地冇貓、貓臉被切 | 1 週 | 修鏡頭，或者桌面鎖直向寬度。 |
| 9 | 未用真機測 | major | `docs/MOBILE_UX.md` 尾段 | 2 日 | iPhone Safari 加 Android 各測一次，重點測咪同音檔。 |
| 10 | repo 肥 | minor | git pack 287MB，另有 123MB 垃圾 pack；`public/audio` 149MB、`public/art` 156MB、`dist` 312MB | 半日 | 音檔搬 CDN／LFS，行 `git gc`；PNG 原稿（186 張 1024×1024）唔跟 build 出街，只出 `public/art/game/` WebP。 |

補充：首次載入只約 560KB（音檔同圖用到先攞），速度冇問題；但 PWA 離線唔可以一次過 cache 晒，要按章節分批，app 包裝亦會好肥。

## 5. 30 日行動（按收入影響排）

1. 清 IP：刪 `content/`，核 VOICEVOX 條款（缺口 1、2）。唔清就乜都賣唔到。
2. 加 analytics 加匯出存檔，搵 30–50 個真學習者玩，睇 D1／D7。
3. 做 landing page 加 waitlist，寫明價錢「HK$58 全解鎖」，量點擊率。
4. 加 PWA 同私隱頁。
5. 留存過關先做收費牆（建議 D7 ≥ 15%）。唔過關就改核心循環，唔好再加內容。

## 6. 風險同平驗證

- **冇需求**：廣東話學日文嘅人有幾多，查唔到 JLPT 香港／台灣分區人數。驗法：Threads／IG 出 3 條片，HK$300–500 廣告導去 waitlist，目標 email 轉化 ≥ 10%。
- **留存差**：選擇題玩 3 日就厭。驗法：50 人封測，睇第 7 日仲有幾多人。
- **大 app 加廣東話**：擋唔住，只能靠快同本地味。
- **語音辨識**：iOS Safari 同 Android 表現未知，要真機試。
- **AI 圖**：`public/art/manifest.json` 寫明用 image_gen 生成，可商用，但版權保護弱，人哋抄圖難告。

## 7. 信心

| 主張 | 信心 | 仲欠乜 |
|---|---|---|
| 冇收費／帳戶／PWA／analytics | 高 | 冇 |
| `content/` 係第三方字幕 | 高 | 原頻道係邊個未確認；GitHub repo 係咪公開未查 |
| VOICEVOX 有條款風險 | 中 | 未讀到各角色官方規約，只有二手文 |
| 教學設計合格 | 中 | 只睇 code 同試咗一句，冇聽到聲，冇玩完整章 |
| 日文準確度 | 低 | 只抽睇約 20 句，冇見到錯，唔代表全部啱 |
| 價錢同收入範圍 | 低 | 零流量、零轉化、零留存數據；香港競品價查唔到 |
| 手機體驗 | 中 | 靠 `tmp/mobile-ux/` 舊截圖，瀏覽器視窗縮唔到手機闊度 |

試玩用咗 live site 上面嘅現有存檔（Lv.7），玩之前備份、玩完還原咗，冇改任何檔案。

## Sources

- [LingoDeer pricing](https://www.lingodeer.com/es/pricing?plan=1)
- [Duolingo Super cost（dealnews）](https://qa1.dealnews.com/features/duolingo/cost)
- [Duolingo 台灣價（titikey，未核實）](https://www.titikey.com/en/article/tjkbqt-bhiuu)
- [VOICEVOX 商用解說（crystal-method）](https://crystal-method.com/blog/voicevox-commercial/)
- [VOICEVOX 商用解說（Hakky）](https://book.st-hakky.com/data-science/voicevox-usage-and-commercial-use)
- [語言 app 訂閱定價 2026（appsops）](https://appsops.store/blog/language-learning-app-subscription-pricing-2026)
- [RevenueCat State of Subscription Apps 2025](https://revenuecat.com/state-of-subscription-apps-2025)
- [JLPT 2025 年 7 月統計](https://www.jlpt.jp/e/statistics/archive/202501.html)
- [B站《看日劇學日語 每日一句》](https://www.bilibili.com/video/av89816491?p=64)
