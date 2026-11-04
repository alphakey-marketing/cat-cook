# 黑貓食堂素材製作記錄

來源：`docs/ART_LIST.md`，由 GitHub 分支 `claude/pensive-pasteur-0yj0qw` 取回；本機原本未有呢份文件。

生成方式：Codex 內置 `image_gen`。每張獨立生成，白飯、雞蛋、飯糰同金幣作風格基準；小黑表情用 `logo_cat.png` 作角色參考。

最終素材放喺 `public/art/`。圖示為 1024×1024 PNG，保留透明通道；直向標題背景為 1080×1920。`ui_open_shop.png` 按原清單重用燈籠素材。

完整共用 prompt、角色設定、每張主題及檔名見 `public/art/manifest.json`；實際生成 prompt 另存於 `docs/art-review/prompts.json`。

預覽：啟動專案後開 `/art/`，可按分類睇 128px／48px 對照同切換深色底。

驗證：`python scripts/check-art.py`（需要 Pillow）。輸出 `docs/art-review/validation.json` 同 `contact-sheet-48.png`，檢查檔案完整性、尺寸、透明背景及空圖。

素材已接入遊戲：食材、菜式、單詞、商店、HUD、獎勵、標題畫面及 3D 金幣／心心粒子。3D 角色同場景保留原有模型。

`python scripts/prepare-art.py` 會由 PNG 原稿輸出 `public/art/game/` 嘅輕量 WebP，供手機遊戲載入。原稿同素材圖鑑繼續保留 PNG。

手機回歸檢查：啟動 `npm run dev` 後執行 `python scripts/check-mobile.py`（需要 Playwright）。涵蓋 320–1280px、直向／橫向、客人取景、長對白、素材載入同泡泡清理。
