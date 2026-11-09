// 街上場景：自己畫。路人企喺行人路，遊客（貓）喺前面問路
import * as THREE from 'three';
import { mat } from './models.js';

export const STREET_X = 200;

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

// 招牌貼圖
function signTex(text, bg, fg = '#fff') {
  return canvasTex(256, 96, (x, w, h) => {
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    x.strokeStyle = fg; x.lineWidth = 5; x.strokeRect(5, 5, w - 10, h - 10);
    x.fillStyle = fg; x.font = 'bold 54px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(text, w / 2, h / 2 + 3);
  });
}
// 窗格貼圖
function windowsTex(lit) {
  return canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = 'rgba(0,0,0,0)'; x.clearRect(0, 0, w, h);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      x.fillStyle = (r + c) % 2 && lit ? '#fff3b0' : '#8fb4cc';
      x.fillRect(10 + c * 40, 10 + r * 40, 30, 28);
    }
  });
}

export function buildStreet() {
  const g = new THREE.Group();
  g.position.x = STREET_X;

  // 馬路（深灰）+ 白色虛線
  const road = new THREE.Mesh(new THREE.PlaneGeometry(16, 3.2), mat(0x55585e, { roughness: 1 }));
  road.rotation.x = -Math.PI / 2; road.position.set(0, 0.001, 2.6); road.receiveShadow = true; g.add(road);
  for (let i = -6; i <= 6; i++) { const d = box(0.7, 0.01, 0.1, 0xffffff); d.position.set(i * 1.2, 0.01, 2.6); g.add(d); }
  // 行人路（淺米磚）
  const pt = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = '#e3d9c6'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#cbbfa6'; x.lineWidth = 3; x.strokeRect(0, 0, w, h); x.beginPath(); x.moveTo(0, h / 2); x.lineTo(w, h / 2); x.stroke();
  });
  pt.wrapS = pt.wrapT = THREE.RepeatWrapping; pt.repeat.set(10, 3);
  const walk = new THREE.Mesh(new THREE.PlaneGeometry(16, 3.4), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.9 }));
  walk.rotation.x = -Math.PI / 2; walk.position.set(0, 0.002, -0.2); walk.receiveShadow = true; g.add(walk);
  const curb = box(16, 0.12, 0.15, 0xb8b0a0); curb.position.set(0, 0.06, 1.55); g.add(curb);
  // 後面草地
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(16, 3), mat(0xb9d9a0, { roughness: 1 }));
  grass.rotation.x = -Math.PI / 2; grass.position.set(0, 0, -3.4); g.add(grass);

  // 一排樓房（後面）：駅、コンビニ、薬局、銀行
  const shops = [
    { x: -4.6, w: 2.2, h: 3.4, c: 0xd9a8a0, t: '駅', bg: '#2f6fb5' },
    { x: -2.0, w: 2.6, h: 2.6, c: 0xb6d4e8, t: 'コンビニ', bg: '#2e9e5b' },
    { x: 0.9, w: 2.4, h: 3.0, c: 0xf0e2b8, t: '薬局', bg: '#2e9e5b' },
    { x: 3.6, w: 2.6, h: 3.8, c: 0xc9bde0, t: '銀行', bg: '#8a5a3b' },
  ];
  for (const s of shops) {
    const b = box(s.w, s.h, 1.4, s.c, { roughness: 0.9 }); b.position.set(s.x, s.h / 2, -2.4); b.castShadow = b.receiveShadow = true; g.add(b);
    const sg = new THREE.Mesh(new THREE.PlaneGeometry(s.w * 0.85, 0.65), new THREE.MeshBasicMaterial({ map: signTex(s.t, s.bg) }));
    sg.position.set(s.x, 1.45, -1.69); g.add(sg);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(s.w * 0.7, s.h * 0.4), new THREE.MeshBasicMaterial({ map: windowsTex(s.x > 0), transparent: true }));
    win.position.set(s.x, s.h - 0.9, -1.69); g.add(win);
    const awn = box(s.w * 0.9, 0.12, 0.4, s.bg === '#8a5a3b' ? 0x8a5a3b : 0xe86a5a); awn.position.set(s.x, 1.95, -1.55); g.add(awn);
  }

  // 紅綠燈
  const pole = cyl(0.05, 0.05, 2.6, 0x444a52, {}, 8); pole.position.set(2.2, 1.3, 1.2); g.add(pole);
  const lamp = box(0.22, 0.6, 0.18, 0x2b2f35); lamp.position.set(2.2, 2.6, 1.2); g.add(lamp);
  [[0xff4d4d, 0.17], [0xffd24d, 0], [0x4dff88, -0.17]].forEach(([c, y]) => {
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: c })); l.position.set(2.2, 2.6 + y, 1.3); g.add(l);
  });
  // 郵筒（紅）
  const post = cyl(0.2, 0.2, 0.9, 0xd8362f, {}, 16); post.position.set(-3.1, 0.45, 1.0); g.add(post);
  const ptop = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xd8362f)); ptop.position.set(-3.1, 0.9, 1.0); g.add(ptop);
  const slot = box(0.18, 0.03, 0.02, 0x222222); slot.position.set(-3.1, 0.75, 1.2); g.add(slot);
  // 自動販賣機
  const vm = box(0.7, 1.5, 0.55, 0x2f6fb5); vm.position.set(3.7, 0.75, -0.8); g.add(vm);
  const vmf = box(0.5, 0.9, 0.02, 0xe8f4ff); vmf.position.set(3.7, 0.95, -0.52); g.add(vmf);
  for (let i = 0; i < 6; i++) { const can = box(0.08, 0.14, 0.02, [0xe86a5a, 0xf2c14e, 0x7bc67e][i % 3]); can.position.set(3.55 + (i % 3) * 0.15, 1.2 - Math.floor(i / 3) * 0.3, -0.5); g.add(can); }
  // 街燈
  const lp = cyl(0.04, 0.04, 2.8, 0x444a52, {}, 8); lp.position.set(-1.2, 1.4, 0.9); g.add(lp);
  const lh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), new THREE.MeshBasicMaterial({ color: 0xfff3c4 })); lh.position.set(-1.2, 2.85, 0.9); g.add(lh);
  // 路牌（箭咀）
  const sp = cyl(0.03, 0.03, 1.8, 0x888888, {}, 8); sp.position.set(-2.4, 0.9, 0.7); g.add(sp);
  const sb = box(0.9, 0.3, 0.04, 0x2f6fb5); sb.position.set(-2.4, 1.7, 0.7); g.add(sb);

  const light = new THREE.PointLight(0xfff8e6, 2.4, 14, 1.2); light.position.set(0.2, 4.0, 2.0); g.add(light);
  return g;
}
