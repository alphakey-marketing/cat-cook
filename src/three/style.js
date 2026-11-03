// 美術風格：治癒系日式小食堂 · 卡通渲染（cel-shading + 描邊 + 邊緣光）
// 所有 3D 物件都經 toonMat() 出材質，咁成個遊戲先會統一風格。
import * as THREE from 'three';

// ===== 調色板 =====
// 暖色為主；影唔用灰黑，用帶紫嘅暖褐，睇落似動畫背景。
export const PALETTE = {
  sky: 0xf8e2c2,        // 背景 / 霧
  outline: [0.17, 0.1, 0.08], // 描邊：深朱古力色，唔用純黑
  rim: 0xfff0d6,        // 邊緣光：暖白
  sun: 0xfff0d8,
  ambientTop: 0xfff6e8,
  ambientBottom: 0xa8806a,
  shadowTint: 0x7a5a78, // 影嘅色調（紫褐）
};

// ===== 光影階數 =====
// 三階：影 / 中間 / 亮。用 NearestFilter 先有硬邊。
function makeGradient(steps) {
  const data = new Uint8Array(steps.length * 4);
  steps.forEach((v, i) => { data.set([v, v, v, 255], i * 4); });
  const t = new THREE.DataTexture(data, steps.length, 1, THREE.RGBAFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}
const GRADIENT = makeGradient([115, 190, 255]);
const GRADIENT_SOFT = makeGradient([150, 205, 235, 255]); // 皮毛、布料用，柔啲

// MeshStandardMaterial 先有、toon 材質冇嘅參數，要剔走免 three.js 出 warning
const DROP = ['roughness', 'metalness', 'envMap', 'envMapIntensity', 'roughnessMap', 'metalnessMap', 'clearcoat', 'sheen'];

// 共用 shader 改動：加邊緣光（rim light），令黑色小黑都睇到輪廓
function addRim(material, rimColor, rimStrength) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.rimColor = { value: new THREE.Color(rimColor) };
    shader.uniforms.rimStrength = { value: rimStrength };
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 rimColor;\nuniform float rimStrength;')
      .replace('#include <opaque_fragment>', `
        {
          float fres = 1.0 - saturate(dot(normalize(vViewPosition), normal));
          float rim = smoothstep(0.62, 0.68, fres) * rimStrength;
          // 只喺受光嗰邊（上方）先有，似背光
          rim *= smoothstep(-0.2, 0.4, normal.y);
          outgoingLight += rimColor * rim;
        }
        #include <opaque_fragment>`);
  };
  material.customProgramCacheKey = () => 'toon-rim';
}

/**
 * 出一個卡通材質。用法同 MeshStandardMaterial 差唔多：toonMat(0xff0000, { transparent: true })
 * 額外選項：
 *   soft: true      → 用柔啲嘅四階光影（皮毛、布）
 *   rim: 0.0–1.0    → 邊緣光強度（預設 0.35）
 *   outline: false  → 唔描邊（地板、牆、細碎嘢）
 *   outlineWidth    → 描邊粗幼（預設 0.008，按螢幕比例）
 *   gloss: true     → 金屬 / 湯面，加亮啲
 */
export function toonMat(color, o = {}) {
  const { soft, rim = 0.35, outline = true, outlineWidth, gloss, ...rest } = o;
  for (const k of DROP) delete rest[k];
  const m = new THREE.MeshToonMaterial({ color, gradientMap: soft ? GRADIENT_SOFT : GRADIENT, ...rest });
  if (gloss) m.color.offsetHSL(0, -0.05, 0.06);
  if (rim > 0) addRim(m, PALETTE.rim, rim);
  m.userData.outlineParameters = {
    thickness: outlineWidth ?? 0.008,
    color: PALETTE.outline,
    alpha: 1,
    visible: outline,
  };
  return m;
}

// MeshBasicMaterial（貼圖、發光嘢）都要話畀描邊知要唔要描
export function basicMat(o = {}, outline = false) {
  const m = new THREE.MeshBasicMaterial(o);
  m.userData.outlineParameters = { thickness: 0.006, color: PALETTE.outline, alpha: 1, visible: outline };
  return m;
}

// 手機效能：像素密度上限
export const MAX_DPR = 1.75;
export const OUTLINE_DEFAULT = { defaultThickness: 0.008, defaultColor: PALETTE.outline, defaultAlpha: 1, defaultKeepAlive: true };

// 牆身貼圖：上深下淺嘅漸變 + 少少灰泥斑點，平面牆都有空氣感
export function plasterTexture(top = '#e9cfa8', bottom = '#fbeedb', seed = 7) {
  const c = document.createElement('canvas'); c.width = 64; c.height = 256;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, top); g.addColorStop(0.65, bottom); g.addColorStop(1, bottom);
  x.fillStyle = g; x.fillRect(0, 0, 64, 256);
  let r = seed;
  const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 260; i++) {
    x.fillStyle = `rgba(120,80,50,${0.02 + rnd() * 0.03})`;
    x.fillRect(rnd() * 64, rnd() * 256, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.RepeatWrapping;
  t.repeat.set(6, 1);
  return t;
}
