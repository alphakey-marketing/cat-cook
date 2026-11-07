# 新章節手繪素材

沿用 `docs/ART_LIST.md` 嘅暖色繪本方向，以原有飯糰、親子丼、豉油圖作風格參考。全部用內置 image_gen 逐張生成，保留透明 PNG 原圖及 alpha，再用既有 `prepare-art.py` 匯出最長邊 192px 嘅 WebP，供手機遊戲使用。

新增 46 張：居酒屋六款、喫茶店六款、暗黑食堂七款料理，以及三章新增嘅 27 款材料。圖鑑、食譜、揀材料、點餐選項及單詞表沿用同一個 `vocabArt` 入口，料理／材料不再用 emoji 後備。章節選擇亦改用現有燈籠及新料理圖；暗黑秘密卡加入對應料理插畫。

重點辨認：唐揚係炸雞件、揚出豆腐有湯汁、大阪燒有鹹味醬料、炒麵有椰菜；即溶咖啡保留粉包線索。暗黑飲品及湯可見樽裝茶、即溶粉或濃縮湯底來源，延續捷徑料理主題。

今次補齊料理同材料，未新增章節背景、客人造型或 3D 模型；動詞／要求詞彙嘅既有通用符號亦保留。

- PNG 原圖：`public/art/dish_*.png`、`public/art/ing_*.png`，新增檔名及實際尺寸見 `public/art/manifest.json`。
- 手機圖片：`public/art/game/*.webp`。
- 提示詞集：`docs/art-review/chapter-art-prompts.json`（共用風格及逐張主體描述）。
- 96px／48px 檢視：`docs/art-review/chapter-dishes.png`、`chapter-ingredients.png`。

檢查：`python scripts/check-art.py`、`python scripts/check-chapter-art.py`、`python scripts/check-dark.py`、`python scripts/check-window-recipe.py`、`npm run build`。

2026-11-07 補齊壽司章節六款料理及五款材料，章節素材合共 57 張。原稿、提示詞、預覽及接入詳情見 [SUSHI_ART.md](SUSHI_ART.md)。

同日再補拉麵店六款料理、兩款材料及便利店十款貨品，章節素材合共 75 張。詳見 [RAMEN_KONBINI_ART.md](RAMEN_KONBINI_ART.md)。
