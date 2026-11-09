// 廚房換皮：壽司屋、拉麵店。座標同廚房一樣（櫃台 z=0，貓喺後面，牆 z=-2.2）
// 爐、砧板、鍋位置唔郁，淨係換牆、地、擺設
import * as THREE from 'three';
import { mat } from './models.js';

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const box = (w, h, d, color, opt) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, opt));
const flat = (w, h, tex) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));

// 暖簾：布幕有三條縫
function norenTex(bg, text, fg = '#ffffff') {
  return canvasTex(512, 200, (x, w, h) => {
    x.clearRect(0, 0, w, h);
    const parts = 3, pw = w / parts;
    for (let i = 0; i < parts; i++) {
      x.fillStyle = bg; x.fillRect(i * pw + 4, 0, pw - 8, h - 6);
      x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(i * pw + 4, h - 26, pw - 8, 20);
    }
    x.fillStyle = fg; x.font = 'bold 110px serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(text, w / 2, h / 2 - 8);
  });
}
// 木牌（價目、菜名）
function plaqueTex(lines, bg = '#f1dcae', fg = '#3a2210', size = 44) {
  return canvasTex(256, 64 + lines.length * 24, (x, w, h) => {
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#6b4226'; x.lineWidth = 6; x.strokeRect(3, 3, w - 6, h - 6);
    x.fillStyle = fg; x.font = `bold ${size}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
    lines.forEach((t, i) => x.fillText(t, w / 2, (h / (lines.length + 1)) * (i + 1)));
  });
}
function lantern(color, text) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.5, 20), mat(color, { roughness: 0.6, emissive: color, emissiveIntensity: 0.25 }));
  g.add(body);
  for (const y of [-0.27, 0.27]) { const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.06, 16), mat(0x1a1a1a)); cap.position.y = y; g.add(cap); }
  const label = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), new THREE.MeshBasicMaterial({
    map: canvasTex(64, 64, (x, w, h) => { x.fillStyle = '#fff'; x.font = 'bold 48px serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, w / 2, h / 2); }),
    transparent: true }));
  label.position.z = 0.225; g.add(label);
  return g;
}

// ===== 壽司屋 =====
export function buildSushi() {
  const g = new THREE.Group();
  // 地：淺色檜木
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat(0xd9b98a, { roughness: 0.8 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);
  for (let i = -7; i < 8; i++) { const l = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 10), mat(0xb8956a)); l.rotation.x = -Math.PI / 2; l.position.set(i * 0.5, 0.002, 0); g.add(l); }
  // 牆：上白灰泥 + 下面木板
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0xf3ecdc, { roughness: 1 }));
  wall.position.set(0, 3, -2.2); wall.receiveShadow = true; g.add(wall);
  const wood = box(14, 1.5, 0.05, 0xb88a52, { roughness: 0.7 }); wood.position.set(0, 0.75, -2.17); g.add(wood);
  for (let i = -7; i < 8; i++) { const gr = box(0.02, 1.5, 0.06, 0x8c6438); gr.position.set(i * 0.5, 0.75, -2.15); g.add(gr); }
  // 暖簾（橫桿 + 布）
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3.4, 8), mat(0x3a2210)); rod.rotation.z = Math.PI / 2; rod.position.set(-0.1, 3.3, -2.0); g.add(rod);
  const noren = flat(3.2, 1.25, norenTex('#1f3a68', '寿司')); noren.position.set(-0.1, 2.65, -1.98); g.add(noren);
  // 價目木牌（牆上一排）
  const names = [['鮪', '二貫'], ['鮭', '二貫'], ['海老', '二貫'], ['玉子', '二貫']];
  names.forEach((n, i) => { const p = flat(0.5, 0.5 * (64 + 48) / 256 * 1.6, plaqueTex(n)); p.position.set(-3.05 + i * 0.55, 1.9, -2.14); g.add(p); });
  // 層架：茶壺、酒樽
  const shelf = box(1.6, 0.05, 0.3, 0x6b4226); shelf.position.set(1.7, 1.75, -2.0); g.add(shelf);
  const tea = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 12), mat(0x4a6a52, { roughness: 0.4 })); tea.position.set(1.2, 1.92, -2.0); tea.scale.y = 0.8; g.add(tea);
  [0x2f4a7a, 0xf5f0e4, 0xc0392b].forEach((c, i) => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.34, 12), mat(c, { roughness: 0.3 })); b.position.set(1.55 + i * 0.22, 1.95, -2.0); g.add(b);
  });
  // 紅燈籠（右上）
  const l = lantern(0xc0392b, '寿'); l.position.set(2.5, 2.75, -1.2); g.add(l);
  // 櫃台：檜木檯面 + 玻璃握壽司櫃（放右邊，唔阻爐／砧板）
  const sneta = new THREE.Group(); sneta.position.set(1.6, 1.08, -0.2);
  sneta.add(box(0.8, 0.12, 0.4, 0xe9e0d0));
  [0xf09090, 0xf0a05a, 0xf4e6c0, 0xe85a4a, 0xf2c230].forEach((c, i) => {
    const rice = box(0.11, 0.05, 0.08, 0xfffaf0); rice.position.set(-0.3 + i * 0.15, 0.085, 0); sneta.add(rice);
    const top = box(0.13, 0.03, 0.1, c); top.position.set(-0.3 + i * 0.15, 0.125, 0); sneta.add(top);
  });
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.22, 0.42), new THREE.MeshStandardMaterial({ color: 0xdff2fb, transparent: true, opacity: 0.28, roughness: 0.1 }));
  glass.position.y = 0.2; sneta.add(glass);
  g.add(sneta);
  // 湯呑（客人面前）
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.055, 0.1, 14), mat(0xf5f5f0)); cup.position.set(1.05, 1.17, 0.35); g.add(cup);
  return g;
}

// ===== 拉麵店 =====
export function buildRamen() {
  const g = new THREE.Group();
  // 地：深灰水泥
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat(0x5b5a58, { roughness: 0.9 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);
  // 牆：上面黑，下面白磚
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0x7a6254, { roughness: 1 }));
  wall.position.set(0, 3, -2.2); wall.receiveShadow = true; g.add(wall);
  const tile = canvasTex(256, 256, (x, w, h) => {
    x.fillStyle = '#f2efe8'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#c9c4b8'; x.lineWidth = 3;
    for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(0, i * 32); x.lineTo(w, i * 32); x.stroke(); x.beginPath(); x.moveTo(i * 32, 0); x.lineTo(i * 32, h); x.stroke(); }
  });
  tile.wrapS = tile.wrapT = THREE.RepeatWrapping; tile.repeat.set(14, 1.6);
  const dado = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.6), new THREE.MeshBasicMaterial({ map: tile }));
  dado.position.set(0, 0.8, -2.17); g.add(dado);
  const rail = box(14, 0.06, 0.07, 0xb91c1c); rail.position.set(0, 1.62, -2.14); g.add(rail);
  // 暖簾：紅底
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3.4, 8), mat(0x111111)); rod.rotation.z = Math.PI / 2; rod.position.set(-0.1, 3.3, -2.0); g.add(rod);
  const noren = flat(3.2, 1.25, norenTex('#b91c1c', '拉麺')); noren.position.set(-0.1, 2.65, -1.98); g.add(noren);
  // 餐牌（牆上木牌）
  const menus = [['醤油', '800'], ['味噌', '850'], ['塩', '800'], ['豚骨', '900']];
  menus.forEach((n, i) => { const p = flat(0.5, 0.5 * (64 + 48) / 256 * 1.6, plaqueTex(n, '#1a1a1a', '#f5e6a8', 40)); p.position.set(-3.05 + i * 0.55, 2.05, -2.14); g.add(p); });
  // 層架：叠起嘅碗
  const shelf = box(1.5, 0.05, 0.3, 0x3a3a3a); shelf.position.set(1.7, 1.85, -2.0); g.add(shelf);
  for (let s = 0; s < 3; s++) for (let i = 0; i < 3; i++) {
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.07, 0.07, 16), mat(i % 2 ? 0xf5f5f0 : 0xb91c1c, { roughness: 0.3 }));
    bowl.position.set(1.3 + s * 0.4, 1.92 + i * 0.05, -2.0); g.add(bowl);
  }
  // 紅燈籠（左上）
  const l = lantern(0xb91c1c, '麺'); l.position.set(-2.5, 2.7, -1.2); g.add(l);
  // 櫃台上嘅調味：胡椒、醬油、筷筒（右邊，唔阻爐／砧板）
  const cond = new THREE.Group(); cond.position.set(1.55, 1.08, -0.25);
  const jar = (c, x, h) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, h, 12), mat(c, { roughness: 0.3 })); m.position.set(x, h / 2, 0); return m; };
  cond.add(jar(0x222222, -0.18, 0.2), jar(0x7a3b12, -0.06, 0.18), jar(0xd8d8d0, 0.06, 0.16));
  const holder = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.09), mat(0xb91c1c)); holder.position.set(0.22, 0.06, 0); cond.add(holder);
  for (let i = 0; i < 4; i++) { const st = box(0.012, 0.16, 0.012, 0xf0d8a0); st.position.set(0.18 + i * 0.03, 0.17, 0); st.rotation.z = (i - 1.5) * 0.06; cond.add(st); }
  g.add(cond);
  // 冷水杯
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.12, 14), new THREE.MeshStandardMaterial({ color: 0xdff2fb, transparent: true, opacity: 0.5 })); cup.position.set(1.05, 1.14, 0.35); g.add(cup);
  return g;
}
