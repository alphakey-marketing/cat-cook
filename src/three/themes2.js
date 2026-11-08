// 廚房換皮（二）：居酒屋、喫茶店、暗黑食堂。座標同 themes.js 一樣
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
const cyl = (rt, rb, h, color, opt, seg = 16) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat(color, opt));
const flat = (w, h, tex) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
function ground(color, tex) {
  const f = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), tex ? new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }) : mat(color, { roughness: 0.85 }));
  f.rotation.x = -Math.PI / 2; f.receiveShadow = true; return f;
}
function backWall(color) {
  const w = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(color, { roughness: 1 }));
  w.position.set(0, 3, -2.2); w.receiveShadow = true; return w;
}
function textTex(w, h, bg, fg, text, size, font = 'serif', border) {
  return canvasTex(w, h, (x, ww, hh) => {
    if (bg) { x.fillStyle = bg; x.fillRect(0, 0, ww, hh); } else x.clearRect(0, 0, ww, hh);
    if (border) { x.strokeStyle = border; x.lineWidth = 6; x.strokeRect(3, 3, ww - 6, hh - 6); }
    x.fillStyle = fg; x.font = `bold ${size}px ${font}`; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(text, ww / 2, hh / 2);
  });
}
function chochin(color, text) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 14), mat(color, { roughness: 0.6, emissive: color, emissiveIntensity: 0.35 }));
  body.scale.y = 1.25; g.add(body);
  for (const y of [-0.26, 0.26]) { const cap = cyl(0.1, 0.1, 0.05, 0x111111); cap.position.y = y; g.add(cap); }
  const lab = flat(0.24, 0.24, textTex(64, 64, null, '#fff', text, 46));
  lab.position.z = 0.2; g.add(lab);
  return g;
}

// ===== 居酒屋 =====
export function buildIzakaya() {
  const g = new THREE.Group();
  g.add(ground(0x5a3b26));
  g.add(backWall(0xcdb593));
  // 木樑 + 下半木板
  const wood = box(14, 1.4, 0.05, 0x4a2e1c); wood.position.set(0, 0.7, -2.17); g.add(wood);
  for (const x of [-3.2, 0.2, 3.4]) { const b = box(0.2, 6, 0.1, 0x3a2412); b.position.set(x, 3, -2.12); g.add(b); }
  const beam = box(14, 0.22, 0.12, 0x3a2412); beam.position.set(0, 3.55, -2.1); g.add(beam);
  // 暖簾
  const rod = cyl(0.03, 0.03, 3.4, 0x111111, {}, 8); rod.rotation.z = Math.PI / 2; rod.position.set(-0.1, 3.3, -2.0); g.add(rod);
  const noren = flat(3.2, 1.2, canvasTex(512, 192, (x, w, h) => {
    for (let i = 0; i < 3; i++) { x.fillStyle = '#7a1f1f'; x.fillRect(i * (w / 3) + 4, 0, w / 3 - 8, h - 6); }
    x.fillStyle = '#fff'; x.font = 'bold 84px serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('居酒屋', w / 2, h / 2 - 6);
  }));
  noren.position.set(-0.1, 2.65, -1.98); g.add(noren);
  // 短冊（細長菜單條）
  ['焼き鳥', '刺身', '枝豆', 'ビール', '唐揚げ'].forEach((t, i) => {
    const p = flat(0.2, 0.9, canvasTex(64, 256, (x, w, h) => {
      x.fillStyle = '#f3e6c4'; x.fillRect(0, 0, w, h); x.strokeStyle = '#6b4226'; x.lineWidth = 4; x.strokeRect(2, 2, w - 4, h - 4);
      x.fillStyle = '#2a1608'; x.font = 'bold 34px serif'; x.textAlign = 'center'; x.textBaseline = 'top';
      [...t].forEach((c, j) => x.fillText(c, w / 2, 12 + j * 38));
    }));
    p.position.set(-2.3 + i * 0.3, 1.9, -2.13); g.add(p);
  });
  // 酒樽（右後）
  for (const [x, z] of [[2.7, -1.7], [2.2, -1.75]]) {
    const barrel = cyl(0.3, 0.3, 0.55, 0xb88a52, { roughness: 0.7 }); barrel.position.set(x, 0.28, z); g.add(barrel);
    for (const y of [0.1, 0.46]) { const band = cyl(0.31, 0.31, 0.04, 0x2a2a2a); band.position.set(x, y, z); g.add(band); }
  }
  // 層架：一排酒瓶
  const shelf = box(1.7, 0.05, 0.3, 0x3a2412); shelf.position.set(1.7, 1.75, -2.0); g.add(shelf);
  [0x2f4a7a, 0xf5f0e4, 0x3f7a4a, 0xc0392b, 0x2f4a7a, 0xd9a441].forEach((c, i) => {
    const b = cyl(0.055, 0.07, 0.34, c, { roughness: 0.3 }, 12); b.position.set(1.0 + i * 0.28, 1.95, -2.0); g.add(b);
  });
  // 紅燈籠一排
  [-2.4, -1.2, 2.5].forEach((x) => { const l = chochin(0xc0392b, x < 0 ? '酒' : '飲'); l.position.set(x, 3.0, -1.0); g.add(l); });
  // 櫃台上：啤酒杯 + 小碟
  const mug = cyl(0.07, 0.065, 0.16, 0xf2c230, { roughness: 0.2 }, 14); mug.position.set(1.0, 1.16, 0.36); g.add(mug);
  const foam = cyl(0.07, 0.07, 0.04, 0xffffff, {}, 14); foam.position.set(1.0, 1.26, 0.36); g.add(foam);
  const dish = cyl(0.12, 0.1, 0.03, 0xf5f0e4, {}, 18); dish.position.set(1.5, 1.1, 0.3); g.add(dish);
  return g;
}

// ===== 喫茶店 =====
export function buildCafe() {
  const g = new THREE.Group();
  // 黑白格地板
  const ck = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = '#f2ede2'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#2f2b28'; x.fillRect(0, 0, w / 2, h / 2); x.fillRect(w / 2, h / 2, w / 2, h / 2);
  });
  ck.wrapS = ck.wrapT = THREE.RepeatWrapping; ck.repeat.set(14, 10);
  g.add(ground(0, ck));
  g.add(backWall(0xf3e6c8));
  const wain = box(14, 1.3, 0.05, 0x2f5a46); wain.position.set(0, 0.65, -2.17); g.add(wain);
  const rail = box(14, 0.06, 0.07, 0xc9a24a); rail.position.set(0, 1.32, -2.14); g.add(rail);
  // 招牌「珈琲」
  const sign = flat(1.3, 0.55, textTex(256, 108, '#2f5a46', '#f5e6a8', '珈琲', 72, 'serif', '#c9a24a'));
  sign.position.set(-0.2, 3.05, -2.13); g.add(sign);
  // 黑板餐牌
  const board = flat(1.1, 1.0, canvasTex(220, 200, (x, w, h) => {
    x.fillStyle = '#26332c'; x.fillRect(0, 0, w, h); x.strokeStyle = '#8b5a3c'; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, h - 10);
    x.fillStyle = '#f5f0e0'; x.font = 'bold 34px serif'; x.textAlign = 'center';
    ['メニュー', '珈琲', '紅茶', '抹茶'].forEach((t, i) => x.fillText(t, w / 2, 50 + i * 40));
  }));
  board.position.set(-1.6, 2.2, -2.13); g.add(board);
  // 層架：杯同咖啡罐
  const shelf = box(1.7, 0.05, 0.3, 0x5a3b26); shelf.position.set(1.6, 1.8, -2.0); g.add(shelf);
  for (let i = 0; i < 5; i++) {
    const cup = cyl(0.07, 0.05, 0.09, 0xfaf6ee, { roughness: 0.3 }, 14); cup.position.set(0.9 + i * 0.2, 1.87, -2.0); g.add(cup);
  }
  const shelf2 = box(1.7, 0.05, 0.3, 0x5a3b26); shelf2.position.set(1.6, 2.35, -2.0); g.add(shelf2);
  [0x6b3f1e, 0x8b5a2b, 0x3a1a0c, 0xa86b32].forEach((c, i) => {
    const jar = cyl(0.09, 0.09, 0.22, c, { roughness: 0.3 }, 14); jar.position.set(1.0 + i * 0.4, 2.48, -2.0); g.add(jar);
    const lid = cyl(0.095, 0.095, 0.04, 0xc9a24a); lid.position.set(1.0 + i * 0.4, 2.61, -2.0); g.add(lid);
  });
  // 吊燈兩盞
  for (const x of [-1.2, 1.4]) {
    const cord = cyl(0.008, 0.008, 0.7, 0x111111, {}, 6); cord.position.set(x, 3.55, -0.9); g.add(cord);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.22, 20, 1, true), mat(0x2f5a46, { side: THREE.DoubleSide })); shade.position.set(x, 3.12, -0.9); g.add(shade);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06), new THREE.MeshBasicMaterial({ color: 0xfff1c0 })); bulb.position.set(x, 3.05, -0.9); g.add(bulb);
  }
  // 盆栽
  const pot = cyl(0.16, 0.12, 0.28, 0xb5653a); pot.position.set(-2.8, 0.14, -1.8); g.add(pot);
  for (let i = 0; i < 5; i++) { const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), mat(0x3f8a4a)); leaf.position.set(-2.8 + Math.sin(i * 1.3) * 0.16, 0.5 + i * 0.1, -1.8 + Math.cos(i * 1.3) * 0.1); leaf.scale.y = 1.4; g.add(leaf); }
  // 櫃台：虹吸壺 + 咖啡杯
  const siphon = new THREE.Group(); siphon.position.set(1.55, 1.08, -0.2);
  const lower = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 12), new THREE.MeshStandardMaterial({ color: 0xdff2fb, transparent: true, opacity: 0.55 })); lower.position.y = 0.12; siphon.add(lower);
  const upper = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 12), new THREE.MeshStandardMaterial({ color: 0xdff2fb, transparent: true, opacity: 0.55 })); upper.position.y = 0.38; siphon.add(upper);
  const stand = cyl(0.01, 0.01, 0.5, 0x333333, {}, 6); stand.position.set(0.1, 0.25, 0); siphon.add(stand);
  const lamp = cyl(0.03, 0.03, 0.06, 0xc0392b, { emissive: 0xc0392b, emissiveIntensity: 0.4 }, 8); lamp.position.y = 0.02; siphon.add(lamp);
  g.add(siphon);
  const cup = cyl(0.065, 0.045, 0.08, 0xfaf6ee, { roughness: 0.3 }, 14); cup.position.set(1.0, 1.14, 0.36); g.add(cup);
  const saucer = cyl(0.1, 0.1, 0.015, 0xfaf6ee, {}, 18); saucer.position.set(1.0, 1.1, 0.36); g.add(saucer);
  return g;
}

// ===== 暗黑食堂 =====
export function buildDark() {
  const g = new THREE.Group();
  g.add(ground(0x2a2430));
  // 牆：暗綠，污漬
  const wallTex = canvasTex(512, 256, (x, w, h) => {
    x.fillStyle = '#1f2b25'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) {
      x.fillStyle = `rgba(${10 + (i * 7) % 30},${14 + (i * 11) % 24},${12 + (i * 5) % 20},0.35)`;
      x.beginPath(); x.ellipse((i * 97) % w, (i * 53) % h, 18 + (i % 5) * 10, 10 + (i % 4) * 8, 0, 0, Math.PI * 2); x.fill();
    }
    x.fillStyle = 'rgba(80,20,20,0.35)';
    for (let i = 0; i < 5; i++) { x.fillRect(60 + i * 90, 0, 6, 60 + (i * 37) % 110); }
  });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), new THREE.MeshStandardMaterial({ map: wallTex, roughness: 1 }));
  wall.position.set(0, 3, -2.2); g.add(wall);
  // 黃黑警戒膠帶
  const tape = flat(14, 0.18, canvasTex(512, 16, (x, w, h) => {
    for (let i = -2; i < 40; i++) { x.fillStyle = i % 2 ? '#111' : '#e6b800'; x.beginPath(); x.moveTo(i * 20, h); x.lineTo(i * 20 + 12, 0); x.lineTo(i * 20 + 32, 0); x.lineTo(i * 20 + 20, h); x.fill(); }
  }));
  tape.position.set(0, 1.5, -2.15); tape.rotation.z = 0.02; g.add(tape);
  // 霓虹招牌「食堂」
  const neon = flat(1.7, 0.7, canvasTex(320, 132, (x, w, h) => {
    x.shadowColor = '#ff2d6f'; x.shadowBlur = 24; x.fillStyle = '#ff6fa0';
    x.font = 'bold 84px serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText('食堂', w / 2, h / 2); x.fillText('食堂', w / 2, h / 2);
  }));
  neon.position.set(0, 3.0, -2.12); g.add(neon);
  const neonLight = new THREE.PointLight(0xff2d6f, 1.2, 4, 1.6); neonLight.position.set(0, 2.9, -1.6); g.add(neonLight);
  // 裸燈泡
  const cord = cyl(0.008, 0.008, 0.9, 0x111111, {}, 6); cord.position.set(-1.8, 3.5, -0.8); g.add(cord);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07), new THREE.MeshBasicMaterial({ color: 0xffe9a0 })); bulb.position.set(-1.8, 3.0, -0.8); g.add(bulb);
  // 層架：發綠光嘅罐
  const shelf = box(1.7, 0.05, 0.3, 0x1a1a1a); shelf.position.set(1.7, 1.9, -2.0); g.add(shelf);
  [0x6cff7a, 0xb06cff, 0x6cff7a, 0xff6c6c, 0xb06cff].forEach((c, i) => {
    const jar = cyl(0.08, 0.08, 0.22 + (i % 2) * 0.06, c, { roughness: 0.2, emissive: c, emissiveIntensity: 0.5 }, 14); jar.position.set(1.0 + i * 0.3, 2.04, -2.0); g.add(jar);
  });
  const glow = new THREE.PointLight(0x6cff7a, 0.8, 3, 1.6); glow.position.set(1.7, 2.2, -1.7); g.add(glow);
  // 「営業中？」牌
  const sign = flat(0.9, 0.35, textTex(180, 70, '#1a1a1a', '#ff6f6f', '営業中？', 38, 'serif', '#ff6f6f'));
  sign.position.set(-2.4, 2.3, -2.12); g.add(sign);
  // 櫃台：可疑液體
  const flask = cyl(0.07, 0.07, 0.18, 0x6cff7a, { roughness: 0.2, emissive: 0x6cff7a, emissiveIntensity: 0.4 }, 12); flask.position.set(1.55, 1.17, -0.25); g.add(flask);
  const bottle = cyl(0.04, 0.05, 0.2, 0xb06cff, { roughness: 0.2, emissive: 0xb06cff, emissiveIntensity: 0.4 }, 10); bottle.position.set(1.75, 1.18, -0.2); g.add(bottle);
  return g;
}
