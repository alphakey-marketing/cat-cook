// 便利店場景：自己畫，唔再借廚房。座標同廚房一樣（櫃台 z=0，貓喺後面，客人喺前面）
import * as THREE from 'three';
import { mat } from './models.js';

export const KON_X = 80;

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// 招牌
function signTexture() {
  return canvasTex(512, 128, (x, w, h) => {
    x.fillStyle = '#1b8a4a'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#f08a24'; x.fillRect(0, h - 22, w, 12);
    x.fillStyle = '#ffffff'; x.fillRect(0, h - 10, w, 10);
    x.fillStyle = '#fff'; x.font = 'bold 66px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText('ねこマート', w / 2, h / 2 - 8);
  });
}
// 雪櫃入面一排排飲品
function fridgeTexture() {
  return canvasTex(256, 384, (x, w, h) => {
    x.fillStyle = '#dff1fb'; x.fillRect(0, 0, w, h);
    const cols = ['#e8503a', '#3a8fe8', '#f2c230', '#47b86a', '#b05ad0', '#f08a24'];
    for (let r = 0; r < 4; r++) {
      const y = 20 + r * 92;
      x.fillStyle = '#9fb7c4'; x.fillRect(0, y + 66, w, 6);
      for (let i = 0; i < 9; i++) {
        x.fillStyle = cols[(i + r * 2) % cols.length];
        x.fillRect(8 + i * 27, y + 6, 20, 58);
        x.fillStyle = '#ffffffaa'; x.fillRect(11 + i * 27, y + 10, 5, 50);
        x.fillStyle = '#fff'; x.fillRect(8 + i * 27, y, 20, 8);
      }
    }
  });
}
// 收銀機熒幕
function screenTexture() {
  return canvasTex(128, 80, (x, w, h) => {
    x.fillStyle = '#17323a'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#7fffd4'; x.font = 'bold 26px monospace'; x.textAlign = 'right'; x.textBaseline = 'middle';
    x.fillText('¥ 0', w - 10, h / 2);
  });
}

// 一格貨架：幾層，每層一排顏色盒（零食、麵包、杯麵）
function shelfUnit(w, h, d, rows, colors, seed = 0) {
  const g = new THREE.Group();
  const frame = mat(0xf2f2ee, { roughness: 0.6 });
  const back = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.04), frame); back.position.set(0, h / 2, -d / 2); g.add(back);
  for (const s of [-1, 1]) { const side = new THREE.Mesh(new THREE.BoxGeometry(0.04, h, d), frame); side.position.set(s * w / 2, h / 2, 0); g.add(side); }
  for (let r = 0; r <= rows; r++) {
    const y = 0.12 + r * ((h - 0.16) / rows);
    const board = new THREE.Mesh(new THREE.BoxGeometry(w, 0.03, d), frame); board.position.set(0, y, 0); g.add(board);
    if (r === rows) break;
    const n = Math.floor(w / 0.2);
    for (let i = 0; i < n; i++) {
      const hh = 0.14 + (((i + r + seed) * 7) % 3) * 0.04;
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.15, hh, d * 0.7), mat(colors[(i * 3 + r * 5 + seed) % colors.length], { roughness: 0.5 }));
      box.position.set(-w / 2 + 0.12 + i * 0.2, y + 0.015 + hh / 2, 0);
      box.castShadow = true; g.add(box);
    }
  }
  return g;
}

export function buildKonbini() {
  const k = new THREE.Group();
  k.position.x = KON_X;

  // 地板：淺色磚
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat(0xe9e6df, { roughness: 0.4 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; k.add(floor);
  for (let i = -7; i < 8; i++) {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(0.015, 10), mat(0xcfcac0)); l.rotation.x = -Math.PI / 2; l.position.set(i * 0.8, 0.002, 0); k.add(l);
  }
  // 牆：白底 + 綠橙腰帶
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0xfbfbf8, { roughness: 1 }));
  wall.position.set(0, 3, -2.2); wall.receiveShadow = true; k.add(wall);
  const band = new THREE.Mesh(new THREE.BoxGeometry(14, 0.22, 0.05), mat(0x1b8a4a)); band.position.set(0, 2.95, -2.17); k.add(band);
  const band2 = new THREE.Mesh(new THREE.BoxGeometry(14, 0.08, 0.05), mat(0xf08a24)); band2.position.set(0, 2.78, -2.17); k.add(band2);
  // 招牌
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshBasicMaterial({ map: signTexture() }));
  sign.position.set(0.2, 3.5, -2.14); k.add(sign);

  // 天花燈管（發光）
  for (const x of [-2.2, 0.2, 2.6]) {
    const tube = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 0.18), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    tube.position.set(x, 3.9, -0.4); k.add(tube);
  }
  const light = new THREE.PointLight(0xf2fbff, 3.2, 8, 1.4); light.position.set(0.2, 3.4, 0.2); k.add(light);

  // 飲品雪櫃（左後）
  const fridge = new THREE.Group(); fridge.position.set(-2.3, 0, -1.95);
  const fbody = new THREE.Mesh(new THREE.BoxGeometry(1.7, 2.3, 0.5), mat(0xdcdcd8, { roughness: 0.5 })); fbody.position.y = 1.15; fridge.add(fbody);
  const fglass = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.1), new THREE.MeshBasicMaterial({ map: fridgeTexture() }));
  fglass.position.set(0, 1.15, 0.26); fridge.add(fglass);
  const fshine = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.1), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 }));
  fshine.position.set(0, 1.15, 0.27); fridge.add(fshine);
  k.add(fridge);

  // 零食／麵包貨架（右後，兩格）
  const snackCols = [0xe8503a, 0xf2c230, 0x3a8fe8, 0x47b86a, 0xf08a24, 0xb05ad0, 0xffffff];
  const s1 = shelfUnit(1.4, 1.9, 0.4, 4, snackCols, 0); s1.position.set(0.6, 0, -1.95); k.add(s1);
  const s2 = shelfUnit(1.4, 1.9, 0.4, 4, snackCols, 3); s2.position.set(2.1, 0, -1.95); k.add(s2);

  // 櫃台
  const counter = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.0, 0.9), mat(0xf4f4f0, { roughness: 0.4 }));
  counter.position.set(0, 0.5, 0); counter.castShadow = counter.receiveShadow = true; k.add(counter);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.62, 0.12, 0.92), mat(0x1b8a4a)); stripe.position.set(0, 0.5, 0); k.add(stripe);
  const top = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.08, 1.0), mat(0x4a4a4a, { roughness: 0.3 }));
  top.position.set(0, 1.04, 0); top.receiveShadow = true; top.castShadow = true; k.add(top);

  // 收銀機（貓嗰邊）
  const reg = new THREE.Group(); reg.position.set(-1.0, 1.08, -0.1);
  const rb = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.4), mat(0x2d2d2d)); rb.position.y = 0.11; rb.castShadow = true; reg.add(rb);
  const rs = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.26, 0.04), mat(0x2d2d2d)); rs.position.set(0, 0.35, -0.1); rs.rotation.x = -0.25; reg.add(rs);
  const rscr = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.2), new THREE.MeshBasicMaterial({ map: screenTexture() }));
  rscr.position.set(0, 0.35, -0.077); rscr.rotation.x = -0.25; rscr.rotation.y = Math.PI; reg.add(rscr);
  k.add(reg);

  // 熱食櫃（關東煮／炸雞）放櫃台右邊
  const hot = new THREE.Group(); hot.position.set(1.2, 1.08, 0.12);
  const hb = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.45), mat(0xf4f4f0)); hb.position.y = 0.15; hot.add(hb);
  const hg = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.22, 0.41), new THREE.MeshStandardMaterial({ color: 0xcfe9f5, transparent: true, opacity: 0.45, roughness: 0.1 }));
  hg.position.y = 0.41; hot.add(hg);
  [0xd9a441, 0xf2e6c0, 0xb86a32, 0xd9a441].forEach((c, i) => {
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), mat(c)); f.position.set(-0.3 + i * 0.2, 0.36, 0); hot.add(f);
  });
  k.add(hot);

  // 膠籃 + 糖果小架
  const basket = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.2, 0.28), mat(0xe8503a, { roughness: 0.6 })); basket.position.set(0.3, 1.18, 0.3); k.add(basket);

  // 地墊 + 前景小盆栽
  const mat1 = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.9), mat(0x1b8a4a)); mat1.rotation.x = -Math.PI / 2; mat1.position.set(1.1, 0.004, 1.4); k.add(mat1);

  return k;
}
