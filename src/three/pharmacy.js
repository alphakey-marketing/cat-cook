// 藥房場景：自己畫。櫃枱 z=0，藥劑師企後面，病人（貓）喺前面
import * as THREE from 'three';
import { mat } from './models.js';

export const PHARM_X = 160;

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const box = (w, h, d, color, opt) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, opt));
const cyl = (rt, rb, h, color, opt, seg = 16) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat(color, opt));

// 招牌：綠十字 + 薬局
function signTex() {
  return canvasTex(512, 128, (x, w, h) => {
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#2e9e5b'; x.lineWidth = 8; x.strokeRect(6, 6, w - 12, h - 12);
    x.fillStyle = '#2e9e5b';
    x.fillRect(40, 44, 60, 20); x.fillRect(60, 24, 20, 60);
    x.font = 'bold 64px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText('薬局 ねこ', 300, h / 2 + 4);
  });
}
// 藥架：一格格彩色藥盒
function shelfTex(seed) {
  const cols = ['#e86a5a', '#4a90d9', '#f2c14e', '#7bc67e', '#b58be0', '#ffffff'];
  return canvasTex(256, 256, (x, w, h) => {
    x.fillStyle = '#f4f0e6'; x.fillRect(0, 0, w, h);
    for (let r = 0; r < 4; r++) {
      x.fillStyle = '#c9b99a'; x.fillRect(0, 60 + r * 64, w, 6);
      for (let c = 0; c < 7; c++) {
        const bw = 26 + ((c * 7 + r * 3 + seed) % 3) * 4, bh = 30 + ((c + r + seed) % 3) * 7;
        x.fillStyle = cols[(c * 2 + r + seed) % cols.length];
        x.fillRect(6 + c * 35, 60 + r * 64 - bh, bw, bh);
        x.fillStyle = 'rgba(255,255,255,0.7)'; x.fillRect(10 + c * 35, 60 + r * 64 - bh + 8, bw - 8, 6);
      }
    }
  });
}
// 視力／身體檢查海報
function posterTex() {
  return canvasTex(128, 160, (x, w, h) => {
    x.fillStyle = '#e8f6ee'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#2e9e5b'; x.lineWidth = 4; x.strokeRect(4, 4, w - 8, h - 8);
    x.fillStyle = '#2e9e5b'; x.fillRect(44, 24, 40, 14); x.fillRect(57, 11, 14, 40);
    x.font = 'bold 18px sans-serif'; x.textAlign = 'center'; x.fillText('お大事に', 64, 100);
    x.fillRect(24, 116, 80, 4); x.fillRect(24, 128, 60, 4);
  });
}

export function buildPharmacy() {
  const g = new THREE.Group();
  g.position.x = PHARM_X;

  // 地板：淺綠白格
  const ft = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = '#f2f6f0'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#d3e6d6'; x.fillRect(0, 0, w / 2, h / 2); x.fillRect(w / 2, h / 2, w / 2, h / 2);
  });
  ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.repeat.set(10, 7);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), new THREE.MeshStandardMaterial({ map: ft, roughness: 0.35 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);

  // 牆：白 + 薄荷綠腳線
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0xf7faf5, { roughness: 1 }));
  wall.position.set(0, 3, -2.2); wall.receiveShadow = true; g.add(wall);
  const wain = box(14, 0.9, 0.05, 0xbfe0c8); wain.position.set(0, 0.45, -2.17); g.add(wain);
  const stripe = box(14, 0.06, 0.06, 0x2e9e5b); stripe.position.set(0, 0.93, -2.14); g.add(stripe);

  // 招牌（發光）
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshBasicMaterial({ map: signTex() }));
  sign.position.set(0, 3.05, -2.13); g.add(sign);

  // 後牆藥架（兩邊）
  [[-2.3, 1], [2.3, 2]].forEach(([x, seed]) => {
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.9), new THREE.MeshBasicMaterial({ map: shelfTex(seed) }));
    sh.position.set(x, 1.95, -2.12); g.add(sh);
    const fr = box(1.98, 1.98, 0.04, 0x8fb99a); fr.position.set(x, 1.95, -2.15); g.add(fr);
  });
  // 中間海報
  const ps = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.0), new THREE.MeshBasicMaterial({ map: posterTex() }));
  ps.position.set(0, 1.95, -2.12); g.add(ps);

  // 吊燈（冷白）
  for (const x of [-1.6, 1.6]) {
    const cord = cyl(0.008, 0.008, 0.8, 0x111111, {}, 6); cord.position.set(x, 3.6, -0.6); g.add(cord);
    const shade = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshBasicMaterial({ color: 0xf4fff8 })); shade.position.set(x, 3.15, -0.6); g.add(shade);
  }
  const light = new THREE.PointLight(0xf2fff6, 3.2, 9, 1.4); light.position.set(0.2, 3.4, 0.4); g.add(light);

  // 櫃枱：白身 + 綠頂
  const desk = box(3.6, 1.0, 0.9, 0xf2f2ee, { roughness: 0.4 }); desk.position.set(0, 0.5, 0); desk.castShadow = desk.receiveShadow = true; g.add(desk);
  const dstripe = box(3.62, 0.1, 0.92, 0x2e9e5b); dstripe.position.set(0, 0.7, 0); g.add(dstripe);
  const top = box(3.7, 0.08, 1.0, 0xd8eadc, { roughness: 0.25 }); top.position.set(0, 1.04, 0); top.castShadow = top.receiveShadow = true; g.add(top);
  // 櫃枱上面：藥瓶、藥盒、電腦
  const bottle = cyl(0.08, 0.08, 0.24, 0xe08a2a, {}, 12); bottle.position.set(-0.9, 1.2, 0.2); g.add(bottle);
  const cap = cyl(0.085, 0.085, 0.05, 0xffffff, {}, 12); cap.position.set(-0.9, 1.34, 0.2); g.add(cap);
  const bx = box(0.28, 0.1, 0.18, 0x4a90d9); bx.position.set(-0.45, 1.13, 0.25); g.add(bx);
  const bx2 = box(0.2, 0.08, 0.14, 0xf2c14e); bx2.position.set(-0.45, 1.22, 0.25); g.add(bx2);
  const pc = box(0.38, 0.26, 0.03, 0x222222); pc.position.set(1.2, 1.28, -0.1); pc.rotation.x = -0.15; g.add(pc);
  const pcb = box(0.12, 0.1, 0.1, 0x222222); pcb.position.set(1.2, 1.13, -0.12); g.add(pcb);

  // 等候椅 + 盆栽 + 體重磅
  const bench = box(1.5, 0.35, 0.5, 0x5fae80); bench.position.set(-2.5, 0.18, 1.4); g.add(bench);
  const bback = box(1.5, 0.45, 0.12, 0x5fae80); bback.position.set(-2.5, 0.5, 1.15); g.add(bback);
  const pot = cyl(0.22, 0.17, 0.4, 0xb5653a); pot.position.set(3.3, 0.2, -1.6); g.add(pot);
  for (let i = 0; i < 6; i++) { const lf = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), mat(0x3f8a4a)); lf.position.set(3.3 + Math.sin(i * 1.1) * 0.2, 0.7 + i * 0.12, -1.6 + Math.cos(i * 1.1) * 0.15); g.add(lf); }
  const scale = box(0.6, 0.08, 0.5, 0xdddddd, { metalness: 0.3 }); scale.position.set(2.7, 0.04, 1.0); g.add(scale);
  const sdisp = box(0.22, 0.012, 0.1, 0x222222); sdisp.position.set(2.7, 0.085, 1.05); g.add(sdisp);

  // 地毯
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.2), mat(0xbfe0c8, { roughness: 1 })); rug.rotation.x = -Math.PI / 2; rug.position.set(0.1, 0.005, 1.5); g.add(rug);

  return g;
}
