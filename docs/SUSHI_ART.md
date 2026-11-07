# 壽司章節手繪素材

用 Codex 內置 `image_gen` 逐張生成 11 張透明 PNG，沿用飯糰及豉油素材嘅暖色繪本風格、深啡粗線同物件內粉彩紋理。

- 六款料理：青瓜卷、吞拿魚卷、玉子握壽司、三文魚握壽司、稻荷壽司、散壽司。
- 五款材料：壽司醋、青瓜、吞拿魚、豆腐卜、山葵。
- 原稿：`public/art/dish_{id}.png`、`public/art/ing_{id}.png`，保留生成時嘅像素及 alpha。
- 手機版：`public/art/game/` 對應 WebP，最長邊 192px。
- 完整提示詞：`docs/art-review/sushi-art-prompts.json`（共用 style 加逐張 subject）；註冊清單同步加入 `chapter-art-prompts.json`。
- 素材對照：`docs/art-review/sushi-art.png`，含 96px／48px、淺底／深底預覽。
- 遊戲食譜預覽：`docs/art-review/sushi-recipe.png`。

沿用 `register-chapter-art.py` 更新 manifest，再用 `prepare-art.py` 匯出 WebP。`SUSHI_NO_ART` 清空，料理、材料及章節按鈕接上手繪圖。原有三文魚、白飯、紫菜等共用材料繼續使用既有素材。

驗證：`python scripts/check-art.py`、`python scripts/check-chapter-art.py`（需 Vite 在 5173）、`npm run build`。章節素材檢查包含 57 張圖片載入、五個圖像章節按鈕，以及六款壽司食譜在 320×568、390×844、844×390 嘅實際顯示。
