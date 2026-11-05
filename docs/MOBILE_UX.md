# 手機 UX 更新

- 任務列改為可展開詳情的摘要；對白按狀態列及任務列實際高度避讓。窄橫向使用左對白、右選項。
- 喫茶店要求改用實際調製操作作答。零基礎提供圖示及說明；較高程度先聽語音，可按字幕揭示，答完顯示詞義。移除重複的要求配對題。
- 設定、圖鑑、任務詳情及背景切換會暫停共用遊戲時鐘；小遊戲返回時倒數三秒。控火暫停後須再次長按，避免自動過熱。
- 大堂主要操作固定可見，介紹區獨立捲動。擴大常用觸控範圍至 44px，增大細字、提供加大文字並允許瀏覽器縮放。
- 鎖、齒輪、金幣、時間及份量使用清楚的 SVG 圖示。
- 首次教學只接待一位客人。小遊戲展示操作方法及搓飯糰次數；首次食譜先顯示遊戲步驟，真實食譜可展開並標明現實烹調時間。
- 沿用 `catcook_v1`；不清除已有金幣、章節或學習紀錄。

驗證：`python -X utf8 scripts/check-mobile-ux.py`（Vite 伺服器）、`scripts/check-mobile.py`、`scripts/check-chapters.py`、`scripts/check-dark.py`、`scripts/check-window-recipe.py`、`npm run build`。

使用 Chromium 模擬手機及觸控；未使用實體 iOS／Android 裝置。畫面證據保存在 `tmp/mobile-ux/`，不加入正式遊戲。
