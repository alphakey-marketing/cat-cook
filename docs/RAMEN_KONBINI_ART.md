# 拉麵店及便利店手繪素材

沿用壽司章節嘅暖色繪本風格，以 `dish_salmon_nigiri.png` 及 `ing_shoyu.png` 作風格參考，用 Codex 內置 `image_gen` 逐張生成 18 張透明 PNG。

鹽味拉麵同肉包另用內置工具清理背景，移除角落極淡殘留；兩張嘅 `editPrompt` 已記錄，最終原稿保留清理結果嘅原生像素及 alpha。

拉麵店有六款料理：豉油拉麵、鹽味拉麵、味噌拉麵、豬骨拉麵、沾麵、炒飯。四款湯拉麵按食譜用深琥珀清湯、淡金清湯、黃啡味噌湯、奶白豬骨湯及配料分辨；沾麵保留獨立麵碟同沾汁碗。兩款材料係筍乾、豬骨濃湯。

便利店有十款貨品：飯糰、便當、三文治、樽裝茶、罐裝咖啡、薯片、雪糕、肉包、即食咖哩、布甸。獨立 `goods_*` 素材保留包裝線索，避免將便利店貨品同食堂上碟料理混淆；`GOODS.art` 供實際掃碼選項使用，便當圖亦用於便利店章節按鈕。

- 原稿：`public/art/dish_*.png`、`ing_*.png`、`goods_*.png`，不改動生成像素或 alpha。
- 手機圖片：`public/art/game/` 對應 WebP，最長邊 192px。
- 完整提示詞：`docs/art-review/ramen-konbini-art-prompts.json`，共用 `style` 加每張 `subject`；同時加入 `chapter-art-prompts.json` 供既有註冊腳本使用。
- 尺寸／深淺背景預覽：`docs/art-review/ramen-art.png`、`konbini-art.png`。
- 實際手機畫面：`docs/art-review/ramen-recipe.png`、`konbini-scan.png`。

先跑 `python scripts/register-chapter-art.py`，再用 `prepare-art.py --id <asset-id>`（可重複）只匯出新素材；`TEXT_ICON_IDS` 移除八個已有圖嘅詞彙。

驗證：`python scripts/check-art.py`、`python scripts/check-chapter-art.py`、`python scripts/check-konbini.py`、`npm run build`。瀏覽器檢查需 Vite 在 5173，涵蓋圖片載入、七個章節按鈕、六款新料理食譜、便利店掃碼圖片及完整收銀流程。手機尺寸為 320×568、390×844、844×390；使用 Chromium 模擬。
