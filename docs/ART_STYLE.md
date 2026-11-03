# 美術風格指南：治癒系日式小食堂

所有美術都係程式生成：3D 用 three.js 砌，紋理用 canvas 畫，唔用外部圖片或者模型。

## 方向
- **卡通渲染（cel-shading）**：三階光影（影 / 中間 / 亮），硬邊，似動畫。
- **描邊**：深朱古力色（唔用純黑），粗幼按螢幕比例，手機大細都一致。
- **邊緣光（rim light）**：暖白色，喺物件上方邊緣，令黑色嘅小黑都睇到輪廓。
- **色調**：暖色為主，影帶紫褐，唔好死黑；畫面四邊有暖色暗角。

## 點用
所有材質都要經 `src/three/style.js`：

```js
import { toonMat, basicMat } from './style.js';
toonMat(0xd7263d);                       // 一般物件
toonMat(0x26263a, { soft: true });       // 皮毛、布料：四階，柔啲
toonMat(0xb8bec7, { gloss: true });      // 金屬、湯面：加亮
toonMat(0x7fd04f, { outline: false });   // 細碎配料：唔描邊
basicMat({ color: 0xffffff });           // 唔受光嘅嘢（眼仔高光、發光）
```

## 規則
- 細過約 0.05 單位嘅配料（蔥花、麵條、豆腐粒）唔描邊，否則一碗湯會變一堆黑線。
- 重疊好多粒波砌成嘅嘢（例如廚師帽），只描最大嗰粒，細粒會出雜點。
- 平面（地板、牆）本身唔會出描邊，唔使特登關。
- 調色板改 `PALETTE`，唔好喺各個檔案寫死顏色。

## 手機效能
- 描邊會將每件物件多畫一次，所以加新物件時盡量合併細件。
- 像素密度上限 `MAX_DPR = 1.75`。

## Phase 2：角色
- 小黑表情：`cat.emote('happy'|'surprised'|'focus'|'sleepy'|'sad', 秒數)`；講嘢會自動開口，煮嘢（stir）自動專心。
- 客人：每個種類喺 `makeCustomer()` 有獨有外形同 idle 動作（`userData.idle`）。
- 對白頭像：`src/portraits.js`，SVG，7 個角色 × 3 表情；`bubble(..., { mood })` 設定。
- 鏡頭：廚房 / 上菜鏡頭按螢幕闊度拉後，確保小黑同客人都完整入鏡（見 `fitAspect`）。
