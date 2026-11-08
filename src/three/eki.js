// 車站場景（程式砌）：大堂（券売機、閘機、路線牌）+ 月台（列車、黃線）
import * as THREE from 'three';
import { mat } from './models.js';

export const EKI_X = -40;   // 大堂
export const PF_X = -80;    // 月台

const box = (w, h, d, c, o) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), typeof c === 'number' ? mat(c, o) : c);
  m.castShadow = m.receiveShadow = true;
  return m;
};
const FONT = '"Noto Sans JP","Yu Gothic",sans-serif';

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// 券売機屏幕：標題 + 副題
export function machineTexture(title, sub = '') {
  return canvasTex(256, 192, (x, w, h) => {
    x.fillStyle = '#12304a'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#4fd1c5'; x.fillRect(0, 0, w, 36);
    x.fillStyle = '#06222f'; x.font = `bold 22px ${FONT}`; x.textAlign = 'center';
    x.fillText('きっぷ 券売機', w / 2, 26);
    x.fillStyle = '#fff'; x.font = `bold 30px ${FONT}`;
    x.fillText(title, w / 2, 100);
    x.fillStyle = '#ffe680'; x.font = `22px ${FONT}`;
    x.fillText(sub, w / 2, 148);
  });
}

function signTexture(left, mid, right) {
  return canvasTex(512, 96, (x, w, h) => {
    x.fillStyle = '#1b3b66'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#fff'; x.lineWidth = 4; x.strokeRect(4, 4, w - 8, h - 8);
    x.fillStyle = '#fff'; x.font = `bold 38px ${FONT}`; x.textAlign = 'center';
    x.fillText(left, 100, 62); x.fillText(mid, 256, 62); x.fillText(right, 412, 62);
  });
}

export function platformSignTexture(n, dests) {
  return canvasTex(160, 256, (x, w, h) => {
    x.fillStyle = '#1b3b66'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#fff'; x.lineWidth = 5; x.strokeRect(4, 4, w - 8, h - 8);
    x.fillStyle = '#fff'; x.textAlign = 'center';
    x.font = `bold 92px ${FONT}`; x.fillText(String(n), w / 2, 100);
    x.font = `bold 34px ${FONT}`; x.fillText('番線', w / 2, 146);
    x.font = `22px ${FONT}`; x.fillStyle = '#ffe680';
    dests.slice(0, 3).forEach((d, i) => x.fillText(d, w / 2, 188 + i * 26));
  });
}

function trainTexture(dest, type, color) {
  return canvasTex(256, 64, (x, w, h) => {
    x.fillStyle = '#10151c'; x.fillRect(0, 0, w, h);
    x.fillStyle = color; x.fillRect(6, 8, 74, 48);
    x.fillStyle = '#fff'; x.font = `bold 24px ${FONT}`; x.textAlign = 'center';
    x.fillText(type, 43, 40);
    x.fillStyle = '#ffd35c'; x.font = `bold 34px ${FONT}`; x.textAlign = 'left';
    x.fillText(`${dest} 行き`, 92, 44);
  });
}

function suitcase() {
  const g = new THREE.Group();
  const body = box(0.3, 0.42, 0.14, 0xd9534f); body.position.y = 0.26; g.add(body);
  const handle = box(0.03, 0.2, 0.03, 0x333333); handle.position.set(0, 0.57, 0); g.add(handle);
  for (const s of [-1, 1]) { const w = box(0.05, 0.05, 0.05, 0x222222); w.position.set(s * 0.1, 0.03, 0); g.add(w); }
  return g;
}

// 駅員帽
export function stationCap() {
  const g = new THREE.Group();
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.1, 20), mat(0x1b3b66));
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.1, 20), mat(0x24508c));
  top.position.y = 0.09;
  const brim = box(0.34, 0.02, 0.16, 0x10233f); brim.position.set(0, -0.03, 0.3);
  const badge = box(0.08, 0.06, 0.02, 0xf5c542); badge.position.set(0, 0.04, 0.31);
  g.add(band, top, brim, badge);
  g.position.set(0, 0.28, 0);
  return g;
}

export function buildEki() {
  // ===== 大堂 =====
  const eki = new THREE.Group();
  eki.position.x = EKI_X;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat(0xd9d4cc, { roughness: 0.8 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; eki.add(floor);
  for (let i = -6; i < 7; i++) { const l = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 10), mat(0xbdb7ad)); l.rotation.x = -Math.PI / 2; l.position.set(i, 0.002, 0); eki.add(l); }
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0xe9eef2, { roughness: 1 }));
  wall.position.set(0, 3, -2.3); eki.add(wall);
  const band = box(14, 0.9, 0.05, 0x2f6aa8); band.position.set(0, 0.45, -2.27); eki.add(band);
  // 天花燈
  for (const x of [-3, -1, 1, 3]) {
    const strip = box(1.2, 0.05, 0.25, new THREE.MeshBasicMaterial({ color: 0xfffbe8 }));
    strip.position.set(x, 3.6, -0.6); eki.add(strip);
  }
  // 路線牌（吊牌）
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.64), new THREE.MeshBasicMaterial({ map: signTexture('← 1番線', '2番線 ↑', '3番線 →') }));
  sign.position.set(-0.4, 3.05, -1.9); eki.add(sign);
  // 路線圖
  const map = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.95), new THREE.MeshBasicMaterial({
    map: canvasTex(240, 152, (x, w, h) => {
      x.fillStyle = '#f4f1e6'; x.fillRect(0, 0, w, h);
      x.strokeStyle = '#2f6aa8'; x.lineWidth = 8; x.beginPath(); x.moveTo(20, 100); x.lineTo(90, 60); x.lineTo(150, 90); x.lineTo(220, 40); x.stroke();
      x.strokeStyle = '#e0763a'; x.beginPath(); x.moveTo(30, 30); x.lineTo(110, 70); x.lineTo(200, 120); x.stroke();
      x.fillStyle = '#fff'; x.strokeStyle = '#222'; x.lineWidth = 3;
      [[90, 60], [150, 90], [110, 70], [20, 100], [220, 40]].forEach(([a, b]) => { x.beginPath(); x.arc(a, b, 7, 0, 7); x.fill(); x.stroke(); });
      x.fillStyle = '#222'; x.font = `bold 18px ${FONT}`; x.fillText('路線図', 8, 20);
    }),
  }));
  map.position.set(-2.2, 2.0, -2.22); eki.add(map);
  // 時鐘
  const clock = new THREE.Mesh(new THREE.CircleGeometry(0.28, 32), new THREE.MeshBasicMaterial({
    map: canvasTex(128, 128, (x, w) => {
      x.fillStyle = '#fff'; x.beginPath(); x.arc(64, 64, 62, 0, 7); x.fill();
      x.strokeStyle = '#222'; x.lineWidth = 6; x.stroke();
      x.lineWidth = 6; x.beginPath(); x.moveTo(64, 64); x.lineTo(64, 28); x.stroke();
      x.lineWidth = 4; x.beginPath(); x.moveTo(64, 64); x.lineTo(92, 74); x.stroke();
    }),
  }));
  clock.position.set(2.7, 2.7, -2.22); eki.add(clock);

  // 券売機
  const machine = new THREE.Group();
  machine.position.set(1.5, 0, -1.5);
  const body = box(0.95, 1.55, 0.5, 0x3d4f66); body.position.y = 0.78; machine.add(body);
  const hood = box(1.0, 0.1, 0.56, 0x2a3647); hood.position.y = 1.58; machine.add(hood);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.46), new THREE.MeshBasicMaterial({ map: machineTexture('行き先を えらぶ') }));
  screen.position.set(0, 1.15, 0.255); screen.rotation.x = -0.12; machine.add(screen);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) {
    const b = box(0.18, 0.1, 0.04, [0x4fd1c5, 0xf5c542, 0xe0763a][i]); b.position.set(-0.24 + i * 0.24, 0.62 - j * 0.15, 0.26); machine.add(b);
  }
  const slot = box(0.4, 0.07, 0.04, 0xf5c542); slot.position.set(0, 0.28, 0.26); machine.add(slot);
  const coin = box(0.12, 0.12, 0.04, 0x222222); coin.position.set(0.3, 0.42, 0.26); machine.add(coin);
  eki.add(machine);
  // 另一部（裝飾）
  const m2 = box(0.95, 1.55, 0.5, 0x3d4f66); m2.position.set(2.7, 0.78, -1.5); eki.add(m2);
  const s2 = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.46), new THREE.MeshBasicMaterial({ map: machineTexture('ICカード', 'チャージ') }));
  s2.position.set(2.7, 1.15, -1.245); s2.rotation.x = -0.12; eki.add(s2);

  // 閘機
  for (const x of [-1.3, -2.1]) {
    const g = box(0.28, 1.0, 1.0, 0xcfd6dc); g.position.set(x, 0.5, -0.9); eki.add(g);
    const light = box(0.12, 0.05, 0.12, 0x3ddc84); light.position.set(x, 1.03, -0.6); eki.add(light);
    const flap = box(0.02, 0.4, 0.4, 0x4a90e2, { transparent: true, opacity: 0.7 }); flap.position.set(x + 0.2, 0.7, -0.9); eki.add(flap);
  }
  // 盆栽
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.3, 14), mat(0x8b5a3c)); pot.position.set(-3.2, 0.15, -1.5); pot.castShadow = true; eki.add(pot);
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.34, 14, 10), mat(0x4a8f3c)); leaf.position.set(-3.2, 0.62, -1.5); leaf.castShadow = true; eki.add(leaf);

  // ===== 月台 =====
  const pf = new THREE.Group();
  pf.position.x = PF_X;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(24, 7), mat(0xb7b9bc, { roughness: 0.9 }));
  ground.rotation.x = -Math.PI / 2; ground.position.z = 3.2; ground.receiveShadow = true; pf.add(ground);
  const edge = box(24, 0.35, 0.2, 0x8f9296); edge.position.set(0, -0.12, -0.3); pf.add(edge);
  const yellow = box(24, 0.02, 0.32, 0xf2c230); yellow.position.set(0, 0.012, 0.05); pf.add(yellow);
  const track = new THREE.Mesh(new THREE.PlaneGeometry(24, 4), mat(0x5a5650, { roughness: 1 }));
  track.rotation.x = -Math.PI / 2; track.position.set(0, -0.4, -2.3); pf.add(track);
  for (const z of [-1.6, -2.4]) { const r = box(24, 0.06, 0.06, 0x9aa0a6); r.position.set(0, -0.32, z); pf.add(r); }
  for (let i = -11; i < 12; i++) { const t = box(0.14, 0.05, 1.2, 0x6e5a44); t.position.set(i, -0.36, -2.0); pf.add(t); }
  // 背景樓
  [[-6, 3, 2.6, 0x9fb3c8], [-3, 4.4, 3.4, 0xb4c4d4], [0, 3.4, 2.2, 0x8fa5bd], [3.5, 5, 3, 0xa9bdd0], [7, 3.6, 2.8, 0x98aec6]].forEach(([x, hh, w, c]) => {
    const b = box(w, hh, 1.2, c, { roughness: 1 }); b.position.set(x, hh / 2 - 0.4, -6); pf.add(b);
  });
  // 屋頂同柱
  const roof = box(16, 0.15, 5.2, 0xaab3bc); roof.position.set(0, 3.7, 1.0); pf.add(roof);
  for (const x of [-3.2, 3.6]) { const p = box(0.22, 3.7, 0.22, 0x8b949c); p.position.set(x, 1.85, 0.7); pf.add(p); }
  const pfSign = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.96), new THREE.MeshBasicMaterial({ map: platformSignTexture(1, []) }));
  pfSign.position.set(-3.2, 2.4, 0.83); pf.add(pfSign);
  for (const x of [-3.6, 0, 3.6]) { const l = box(1.2, 0.05, 0.25, new THREE.MeshBasicMaterial({ color: 0xfffbe8 })); l.position.set(x, 3.58, 1.0); pf.add(l); }
  // 長椅
  const bench = box(1.4, 0.08, 0.4, 0x7a4a2a); bench.position.set(1.6, 0.45, 2.6); pf.add(bench);
  for (const x of [1.0, 2.2]) { const lg = box(0.08, 0.45, 0.35, 0x444444); lg.position.set(x, 0.22, 2.6); pf.add(lg); }

  // 列車
  const train = new THREE.Group();
  train.position.set(16, 0, -1.9);
  const carBody = box(8, 2.1, 1.5, 0xe8edf2); carBody.position.y = 1.2; train.add(carBody);
  const stripe = box(8.02, 0.22, 1.52, 0x2f9e44); stripe.position.y = 0.85; train.add(stripe);
  const under = box(7.8, 0.3, 1.3, 0x3a3f45); under.position.y = 0.1; train.add(under);
  for (let i = 0; i < 6; i++) {
    if (i === 2 || i === 3) continue;
    const w = box(0.9, 0.7, 0.04, 0x28425c, { roughness: 0.2 }); w.position.set(-3.3 + i * 1.3, 1.55, 0.77); train.add(w);
  }
  const door = box(1.2, 1.6, 0.05, 0xc9d1d9); door.position.set(-0.7, 1.0, 0.77); train.add(door);
  const door2 = box(1.2, 1.6, 0.05, 0xc9d1d9); door2.position.set(0.7, 1.0, 0.77); train.add(door2);
  const destBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.45), new THREE.MeshBasicMaterial({ map: trainTexture('', '', '#2f9e44') }));
  destBoard.position.set(-2.8, 2.0, 0.775); train.add(destBoard);
  pf.add(train);

  const suit = suitcase();
  return { eki, pf, machineScreen: screen, pfSign, train, destBoard, suit };
}

export { trainTexture };
