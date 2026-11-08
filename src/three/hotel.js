// 酒店大堂場景：自己畫。前台 z=0，職員企喺後面，遊客（貓）喺前面
import * as THREE from 'three';
import { mat } from './models.js';

export const HOTEL_X = 120;

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

// 房間鎖匙格（牆上一排格仔 + 房號）
function keyBoard() {
  return canvasTex(384, 256, (x, w, h) => {
    x.fillStyle = '#3b2a1e'; x.fillRect(0, 0, w, h);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const px = 8 + c * 62, py = 8 + r * 60;
      x.fillStyle = '#241810'; x.fillRect(px, py, 54, 52);
      x.fillStyle = '#e0b84a'; x.font = 'bold 14px sans-serif'; x.textAlign = 'center';
      x.fillText(`${r + 2}0${c + 1}`, px + 27, py + 16);
      if ((r * 6 + c) % 3 !== 0) { x.fillRect(px + 22, py + 24, 10, 22); x.beginPath(); x.arc(px + 27, py + 24, 8, 0, 7); x.fill(); }
    }
  });
}
function logoTex() {
  return canvasTex(512, 128, (x, w, h) => {
    x.fillStyle = '#1d3b5a'; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#e0b84a'; x.lineWidth = 6; x.strokeRect(6, 6, w - 12, h - 12);
    x.fillStyle = '#f5e6a8'; x.font = 'bold 60px serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText('ホテル ねこ', w / 2, h / 2);
  });
}
function clockTex() {
  return canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = '#fff'; x.beginPath(); x.arc(64, 64, 60, 0, 7); x.fill();
    x.strokeStyle = '#333'; x.lineWidth = 6; x.stroke();
    x.lineWidth = 5; x.beginPath(); x.moveTo(64, 64); x.lineTo(64, 24); x.moveTo(64, 64); x.lineTo(92, 74); x.stroke();
  });
}

export function buildHotel() {
  const g = new THREE.Group();
  g.position.x = HOTEL_X;

  // 地板：大理石格
  const ft = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = '#efe7d8'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#d6c8ad'; x.fillRect(0, 0, w / 2, h / 2); x.fillRect(w / 2, h / 2, w / 2, h / 2);
  });
  ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.repeat.set(10, 7);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), new THREE.MeshStandardMaterial({ map: ft, roughness: 0.3 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);

  // 牆：米色 + 深木板 + 金線
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0xf1e8d6, { roughness: 1 }));
  wall.position.set(0, 3, -2.2); wall.receiveShadow = true; g.add(wall);
  const wain = box(14, 1.1, 0.05, 0x6b4a32); wain.position.set(0, 0.55, -2.17); g.add(wain);
  const gold = box(14, 0.05, 0.07, 0xc9a24a); gold.position.set(0, 1.12, -2.14); g.add(gold);

  // 酒店招牌
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshBasicMaterial({ map: logoTex() }));
  logo.position.set(0.2, 3.35, -2.13); g.add(logo);
  // 鎖匙格（職員後面）
  const kb = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.2), new THREE.MeshBasicMaterial({ map: keyBoard() }));
  kb.position.set(1.55, 2.1, -2.12); g.add(kb);
  // 時鐘
  const clock = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.MeshBasicMaterial({ map: clockTex(), transparent: true }));
  clock.position.set(-1.0, 2.7, -2.12); g.add(clock);
  // 升降機門（左後）
  const lift = box(1.2, 2.2, 0.08, 0xb8b8b8, { roughness: 0.25, metalness: 0.5 }); lift.position.set(-2.8, 1.1, -2.12); g.add(lift);
  const gap = box(0.02, 2.2, 0.09, 0x555555); gap.position.set(-2.8, 1.1, -2.11); g.add(gap);
  const lbtn = cyl(0.04, 0.04, 0.02, 0xffb347, { emissive: 0xffb347, emissiveIntensity: 0.6 }, 10); lbtn.rotation.x = Math.PI / 2; lbtn.position.set(-2.0, 1.1, -2.1); g.add(lbtn);
  // 吊燈
  for (const x of [-1.5, 1.8]) {
    const cord = cyl(0.008, 0.008, 0.8, 0x111111, {}, 6); cord.position.set(x, 3.6, -0.6); g.add(cord);
    const shade = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshBasicMaterial({ color: 0xfff1c0 })); shade.position.set(x, 3.15, -0.6); g.add(shade);
  }
  const light = new THREE.PointLight(0xffe9c0, 3.0, 9, 1.4); light.position.set(0.2, 3.4, 0.4); g.add(light);

  // 前台
  const desk = box(3.6, 1.0, 0.9, 0x6b4a32, { roughness: 0.5 }); desk.position.set(0, 0.5, 0); desk.castShadow = desk.receiveShadow = true; g.add(desk);
  const trim = box(3.62, 0.08, 0.92, 0xc9a24a); trim.position.set(0, 0.88, 0); g.add(trim);
  const top = box(3.7, 0.08, 1.0, 0xefe7d8, { roughness: 0.25 }); top.position.set(0, 1.04, 0); top.castShadow = top.receiveShadow = true; g.add(top);
  // 服務鈴
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xc9a24a, { metalness: 0.6, roughness: 0.3 })); bell.position.set(-0.8, 1.08, 0.25); g.add(bell);
  const bbtn = cyl(0.015, 0.015, 0.04, 0x222222, {}, 8); bbtn.position.set(-0.8, 1.17, 0.25); g.add(bbtn);
  // 電腦
  const pc = box(0.38, 0.26, 0.03, 0x222222); pc.position.set(1.2, 1.28, -0.1); pc.rotation.x = -0.15; g.add(pc);
  const pcb = box(0.12, 0.1, 0.1, 0x222222); pcb.position.set(1.2, 1.13, -0.12); g.add(pcb);
  // 登記簿 + 筆
  const book = box(0.3, 0.03, 0.22, 0x1d3b5a); book.position.set(0.4, 1.1, 0.25); g.add(book);

  // 行李車（右前）
  const cart = new THREE.Group(); cart.position.set(2.7, 0, 0.9);
  const frame = cyl(0.015, 0.015, 1.1, 0xc9a24a, { metalness: 0.6 }, 6);
  for (const [x, z] of [[-0.3, -0.2], [0.3, -0.2], [-0.3, 0.2], [0.3, 0.2]]) { const p = frame.clone(); p.position.set(x, 0.55, z); cart.add(p); }
  const plat = box(0.7, 0.04, 0.5, 0xc9a24a, { metalness: 0.6 }); plat.position.y = 0.12; cart.add(plat);
  const s1 = box(0.4, 0.3, 0.2, 0xc0392b); s1.position.set(-0.1, 0.29, 0); cart.add(s1);
  const s2 = box(0.3, 0.22, 0.18, 0x2f6fb5); s2.position.set(0.18, 0.25, 0.02); cart.add(s2);
  g.add(cart);

  // 盆栽 + 沙發 + 地毯
  const pot = cyl(0.22, 0.17, 0.4, 0xb5653a); pot.position.set(-3.3, 0.2, -1.6); g.add(pot);
  for (let i = 0; i < 6; i++) { const lf = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), mat(0x3f8a4a)); lf.position.set(-3.3 + Math.sin(i * 1.1) * 0.2, 0.7 + i * 0.12, -1.6 + Math.cos(i * 1.1) * 0.12); lf.scale.y = 1.5; g.add(lf); }
  const sofa = box(1.5, 0.4, 0.6, 0x7a2e3a); sofa.position.set(-2.4, 0.2, 1.4); g.add(sofa);
  const sback = box(1.5, 0.5, 0.15, 0x7a2e3a); sback.position.set(-2.4, 0.55, 1.1); g.add(sback);
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.4), mat(0x7a2e3a, { roughness: 1 })); rug.rotation.x = -Math.PI / 2; rug.position.set(0.1, 0.005, 1.5); g.add(rug);
  const rug2 = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.2), mat(0xc9a24a, { roughness: 1 })); rug2.rotation.x = -Math.PI / 2; rug2.position.set(0.1, 0.006, 1.5); rug2.scale.set(0.92, 0.8, 1); g.add(rug2);

  return g;
}
