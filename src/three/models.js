// 食物、材料、客人、裝修 3D 模型（全部程式砌）
import * as THREE from 'three';
import { VOCAB } from '../data/vocab.js';

export const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, ...o });
const shadow = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };

export function sph(r, c, sx = 1, sy = 1, sz = 1) {
  const m = shadow(new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), typeof c === 'number' ? mat(c) : c));
  m.scale.set(sx, sy, sz);
  return m;
}
function box(w, h, d, c) { return shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), typeof c === 'number' ? mat(c) : c)); }
function cyl(rt, rb, h, c, seg = 24) { return shadow(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), typeof c === 'number' ? mat(c) : c)); }


// 光澤物料（湯面、蛋黃、叉燒）
export const glossy = (c, o = {}) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.12, ...o });

// 米粒貼圖：白底 + 一粒粒米嘅輕微陰影，用嚟做飯嘅質感
let _riceTex;
function riceTexture() {
  if (_riceTex) return _riceTex;
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#fbfaf2'; x.fillRect(0, 0, 256, 256);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 520; i++) {
    const px = rnd() * 256, py = rnd() * 256, a = rnd() * Math.PI, l = 9 + rnd() * 5, w = 4 + rnd() * 1.5;
    x.save(); x.translate(px, py); x.rotate(a);
    x.fillStyle = `rgba(150,140,110,${0.10 + rnd() * 0.1})`;
    x.beginPath(); x.ellipse(1.2, 1.5, l / 2, w / 2, 0, 0, 7); x.fill();
    x.fillStyle = `rgb(${252 - rnd() * 6},${251 - rnd() * 6},${243 - rnd() * 10})`;
    x.beginPath(); x.ellipse(0, 0, l / 2, w / 2, 0, 0, 7); x.fill();
    x.fillStyle = 'rgba(255,255,255,0.8)';
    x.beginPath(); x.ellipse(-l * 0.1, -w * 0.15, l * 0.3, w * 0.15, 0, 0, 7); x.fill();
    x.restore();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 2); t.anisotropy = 4;
  return (_riceTex = t);
}
export const riceMat = (o = {}) => new THREE.MeshStandardMaterial({ color: 0xffffff, map: riceTexture(), roughness: 0.75, ...o });

// 隨機但可重現（避免每次 makeDish 都唔同樣）
function rng(seed = 1) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

// 彎曲麵條
function noodleBundle(r, y, n = 14, seed = 3) {
  const R = rng(seed), g = new THREE.Group();
  const m = mat(0xf2d77a, { roughness: 0.45 });
  for (let i = 0; i < n; i++) {
    const a0 = R() * Math.PI * 2, rad = r * (0.2 + R() * 0.75), ph = R() * 6;
    const pts = [];
    for (let k = 0; k <= 10; k++) {
      const u = k / 10;
      pts.push(new THREE.Vector3(
        Math.cos(a0) * rad * 0.5 + (u - 0.5) * r * 1.4 * Math.cos(a0 + 1.2) + Math.sin(u * 9 + ph) * 0.018,
        y + Math.sin(u * 7 + ph) * 0.01,
        Math.sin(a0) * rad * 0.5 + (u - 0.5) * r * 1.4 * Math.sin(a0 + 1.2) + Math.cos(u * 8 + ph) * 0.018));
    }
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.0085, 5), m));
  }
  return g;
}

// 溏心蛋半邊：蛋白 + 流心蛋黃（外橙內黃，帶光澤）
function ajitama(r = 0.05) {
  const g = new THREE.Group();
  const white = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 14), glossy(0xf6dcae, { roughness: 0.3 }));   // 滷過嘅蛋白帶茶色
  white.scale.set(0.82, 1.15, 0.6); white.castShadow = true;
  const ring = new THREE.Mesh(new THREE.SphereGeometry(r * 0.99, 24, 14), glossy(0xfff4dc));
  ring.scale.set(0.8, 1.12, 0.63); ring.position.z = 0.004;
  const yolkOut = new THREE.Mesh(new THREE.SphereGeometry(r * 0.62, 20, 12), glossy(0xf08a1a, { roughness: 0.08 }));
  yolkOut.scale.set(0.9, 1.0, 0.6); yolkOut.position.z = r * 0.42;
  const yolkIn = new THREE.Mesh(new THREE.SphereGeometry(r * 0.38, 16, 10), glossy(0xffc233, { roughness: 0.05 }));
  yolkIn.scale.set(0.9, 1.0, 0.6); yolkIn.position.z = r * 0.56;
  const hl = new THREE.Mesh(new THREE.SphereGeometry(r * 0.08, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  hl.position.set(-r * 0.14, r * 0.17, r * 0.84);
  g.add(white, ring, yolkOut, yolkIn, hl);
  return g;
}

// 碗（Lathe）
function bowl(r = 0.22, h = 0.14, outer = 0x9b1d20, inner = 0x1a1010) {
  const pts = [];
  for (let i = 0; i <= 10; i++) {
    const k = i / 10;
    pts.push(new THREE.Vector2(r * 0.45 + r * 0.55 * Math.sin(k * Math.PI / 2), h * k));
  }
  const g = new THREE.Group();
  const out = shadow(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mat(outer, { roughness: 0.3 })));
  const inPts = pts.map((p) => new THREE.Vector2(p.x * 0.93, p.y + 0.005));
  const inn = new THREE.Mesh(new THREE.LatheGeometry(inPts, 32), mat(inner, { side: THREE.BackSide, roughness: 0.3 }));
  const foot = cyl(r * 0.38, r * 0.4, 0.03, outer);
  foot.position.y = -0.01;
  g.add(out, inn, foot);
  g.userData.top = h;
  g.userData.r = r * 0.93;
  return g;
}

function plate(r = 0.25, c = 0xf4f1ea) {
  const p = cyl(r, r * 0.8, 0.03, c, 32);
  const rim = shadow(new THREE.Mesh(new THREE.TorusGeometry(r * 0.95, 0.012, 6, 32), mat(0x2f5d9c)));
  rim.rotation.x = Math.PI / 2; rim.position.y = 0.016;
  const g = new THREE.Group(); g.add(p, rim); return g;
}

function onigiriShape(withNori = true) {
  const g = new THREE.Group();
  const s = new THREE.Shape();
  const R = 0.14, rr = 0.05;
  const pts = [0, 1, 2].map((i) => new THREE.Vector2(Math.sin(i * 2.094) * R, Math.cos(i * 2.094) * R));
  // 圓角三角
  for (let i = 0; i < 3; i++) {
    const p = pts[i], n = pts[(i + 1) % 3], prev = pts[(i + 2) % 3];
    const a = p.clone().lerp(prev, rr / R * 0.9), b = p.clone().lerp(n, rr / R * 0.9);
    if (i === 0) s.moveTo(a.x, a.y); else s.lineTo(a.x, a.y);
    s.quadraticCurveTo(p.x, p.y, b.x, b.y);
  }
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.08, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.04, bevelSegments: 4, curveSegments: 10 });
  geo.translate(0, 0, -0.04);
  const rice = shadow(new THREE.Mesh(geo, riceMat()));
  rice.position.y = 0.14;
  g.add(rice);
  if (withNori) {
    const nori = box(0.13, 0.11, 0.2, mat(0x17261b, { roughness: 0.55, metalness: 0.15 }));
    nori.position.set(0, 0.07, 0);
    g.add(nori);
    const R = rng(11);
    for (let i = 0; i < 6; i++) { const sm = sph(0.006, 0xf3ecd8, 1, 0.6, 1); sm.position.set((R() - 0.5) * 0.1, 0.07 + 0.056, (R() - 0.5) * 0.14); g.add(sm); }
  }
  return g;
}

// 成品菜
export function makeDish(id) {
  const g = new THREE.Group();
  if (id === 'onigiri') {
    g.add(plate(0.24));
    const o = onigiriShape(); o.position.y = 0.02; g.add(o);
    const o2 = onigiriShape(); o2.position.set(0.1, 0.02, -0.06); o2.rotation.y = 0.5; o2.scale.setScalar(0.85); g.add(o2);
    const ume = sph(0.025, 0xc8283c); ume.position.set(-0.13, 0.04, 0.12); g.add(ume);
  } else if (id === 'misoshiru') {
    const R = rng(21);
    const b = bowl(0.18, 0.13, 0x1f1a17, 0x8a2a1c); g.add(b);   // 黑漆碗、紅內
    const soup = new THREE.Mesh(new THREE.CircleGeometry(0.152, 40), glossy(0xb98046, { roughness: 0.12, clearcoat: 0.6 }));
    soup.rotation.x = -Math.PI / 2; soup.position.y = 0.112; g.add(soup);
    // 味噌溶開嘅渾濁紋
    for (let i = 0; i < 5; i++) {
      const sw = new THREE.Mesh(new THREE.TorusGeometry(0.03 + i * 0.022, 0.004, 5, 24, 4.2), new THREE.MeshBasicMaterial({ color: 0xd9a566, transparent: true, opacity: 0.55 }));
      sw.rotation.x = -Math.PI / 2; sw.rotation.z = i * 1.3; sw.position.y = 0.1135; g.add(sw);
    }
    // 豆腐：浮喺面，有少少高低
    for (let i = 0; i < 6; i++) {
      const a = i * 1.05 + R() * 0.4, d = 0.03 + R() * 0.085;
      const tf = box(0.04, 0.034, 0.04, mat(0xfffaea, { roughness: 0.5 }));
      tf.position.set(Math.cos(a) * d, 0.118, Math.sin(a) * d); tf.rotation.set(R() * 0.3, R() * 3, R() * 0.3); g.add(tf);
    }
    // 海帶芽：彎曲深綠片
    for (let i = 0; i < 6; i++) {
      const w = sph(0.03, glossy(0x2a6a38, { roughness: 0.3, clearcoat: 0.4 }), 1.4, 0.18, 0.7);
      const a = R() * 6.28, d = R() * 0.1;
      w.position.set(Math.cos(a) * d, 0.116, Math.sin(a) * d); w.rotation.set(R() * 0.5, R() * 3, R() * 0.5); g.add(w);
    }
    // 蔥花：圈圈
    for (let i = 0; i < 14; i++) {
      const n = new THREE.Mesh(new THREE.TorusGeometry(0.009, 0.0035, 5, 10), mat(0x86d44f));
      const a = R() * 6.28, d = R() * 0.125;
      n.position.set(Math.cos(a) * d, 0.1175, Math.sin(a) * d); n.rotation.x = Math.PI / 2 + (R() - 0.5) * 0.5; g.add(n);
    }
  } else if (id === 'oyakodon') {
    const R = rng(33);
    const b = bowl(0.22, 0.15, 0x2c4f8f, 0xf2efe6); g.add(b);
    const rice = sph(0.19, riceMat(), 1, 0.34, 1); rice.position.y = 0.13; g.add(rice);
    // 蛋：半熟蛋漿，疊成幾片有光澤嘅層
    const eggM = glossy(0xf8c93a, { roughness: 0.22, clearcoat: 0.8 });
    const egg = sph(0.195, eggM, 1, 0.17, 1); egg.position.y = 0.175; g.add(egg);
    for (let i = 0; i < 7; i++) {
      const a = R() * 6.28, d = R() * 0.12;
      const w = sph(0.058, glossy(i % 2 ? 0xfff0b0 : 0xffe27a, { roughness: 0.18 }), 1, 0.3, 0.85);
      w.position.set(Math.cos(a) * d, 0.195 + R() * 0.012, Math.sin(a) * d); w.rotation.y = R() * 3; g.add(w);
    }
    // 流心蛋黃浮喺中間：橙黃 + 高光
    const yolk = sph(0.052, glossy(0xf08a1a, { roughness: 0.06 }), 1, 0.55, 1); yolk.position.set(0.015, 0.215, 0.01); g.add(yolk);
    const yolkTop = sph(0.03, glossy(0xffb92e, { roughness: 0.04 }), 1, 0.6, 1); yolkTop.position.set(0.01, 0.228, 0.005); g.add(yolkTop);
    const yhl = sph(0.008, new THREE.MeshBasicMaterial({ color: 0xffffff })); yhl.position.set(-0.012, 0.242, 0.018); g.add(yhl);
    // 雞肉：金黃煮熟，帶光
    for (let i = 0; i < 6; i++) {
      const a = i * 1.05 + R() * 0.5, d = 0.08 + R() * 0.07;
      const c = box(0.05, 0.034, 0.04, glossy(0xd6a266, { roughness: 0.35, clearcoat: 0.5 }));
      c.position.set(Math.cos(a) * d, 0.2, Math.sin(a) * d); c.rotation.set(R() * 0.3, R() * 3, R() * 0.3); g.add(c);
    }
    // 洋蔥絲（半透明）
    for (let i = 0; i < 5; i++) {
      const o = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.005, 5, 12, 2.6), mat(0xf3e0b0, { transparent: true, opacity: 0.8 }));
      o.rotation.x = Math.PI / 2; o.rotation.z = R() * 6; o.position.set((R() - 0.5) * 0.25, 0.198, (R() - 0.5) * 0.25); g.add(o);
    }
    // 三つ葉
    for (let i = 0; i < 3; i++) {
      const l = sph(0.022, 0x4caf50, 1, 0.12, 1.7); l.position.set(0.03 + (R() - 0.5) * 0.1, 0.226, -0.05 + (R() - 0.5) * 0.1); l.rotation.y = i * 2.1; g.add(l);
    }
  } else if (id === 'ramen') {
    const R = rng(45);
    const b = bowl(0.27, 0.17, 0xb3261e, 0x151010); g.add(b);
    // 湯：透亮醬油湯底 + 油花高光
    const broth = new THREE.Mesh(new THREE.CircleGeometry(0.236, 48), glossy(0xb8742f, { roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.03, reflectivity: 0.9 }));
    broth.rotation.x = -Math.PI / 2; broth.position.y = 0.148; g.add(broth);
    const oilM = new THREE.MeshPhysicalMaterial({ color: 0xffd27a, transparent: true, opacity: 0.55, roughness: 0.02, clearcoat: 1, clearcoatRoughness: 0 });
    for (let i = 0; i < 16; i++) {
      const a = R() * 6.28, d = 0.04 + R() * 0.17, rr = 0.008 + R() * 0.018;
      const o = new THREE.Mesh(new THREE.CircleGeometry(rr, 14), oilM);
      o.rotation.x = -Math.PI / 2; o.position.set(Math.cos(a) * d, 0.1495, Math.sin(a) * d); g.add(o);
    }
    // 麵（盤成一堆喺湯面）
    const nd = noodleBundle(0.2, 0.152, 16, 5); g.add(nd);
    // 叉燒兩片：粉紅肉 + 焦邊 + 肥膏紋
    for (let i = 0; i < 2; i++) {
      const cs = new THREE.Group();
      const meat = cyl(0.065, 0.065, 0.016, glossy(0xc98a62, { roughness: 0.3, clearcoat: 0.5 }), 28);
      const edge = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.007, 6, 28), mat(0x6b3a22, { roughness: 0.5 }));
      edge.rotation.x = Math.PI / 2;
      const swirl = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.005, 5, 20, 4.5), mat(0xf6dcc4));
      swirl.rotation.x = -Math.PI / 2; swirl.position.y = 0.0085;
      cs.add(meat, edge, swirl);
      cs.position.set(-0.115 + i * 0.045, 0.172 + i * 0.012, -0.095 + i * 0.01); cs.rotation.set(0.45, 0.4 + i * 0.3, 0.1); g.add(cs);
    }
    // 溏心蛋（半隻，流心）
    const eg = ajitama(0.055); eg.position.set(0.105, 0.18, 0.05); eg.rotation.set(-0.2, -0.5, 0); g.add(eg);
    // 紫菜：企喺碗邊
    const nori = box(0.13, 0.15, 0.004, mat(0x17261b, { roughness: 0.5, metalness: 0.15 }));
    nori.position.set(0.0, 0.215, -0.17); nori.rotation.x = -0.28; g.add(nori);
    // 鳴門卷
    const naruto = cyl(0.036, 0.036, 0.012, glossy(0xffffff, { roughness: 0.3 }), 24); naruto.position.set(0.0, 0.17, 0.14); naruto.rotation.x = 0.35; g.add(naruto);
    const sw = new THREE.Mesh(new THREE.TorusGeometry(0.019, 0.0045, 6, 16, 5), mat(0xff6fa0)); sw.rotation.x = Math.PI / 2 + 0.35; sw.position.set(0.0, 0.1765, 0.1405); g.add(sw);
    // 筍乾
    for (let i = 0; i < 3; i++) {
      const m = box(0.045, 0.01, 0.014, mat(0xd8a85a, { roughness: 0.5 })); m.position.set(-0.12 + i * 0.012, 0.162 + i * 0.006, 0.09 + i * 0.022); m.rotation.y = 0.6 + i * 0.5; g.add(m);
    }
    // 蔥花 + 芝麻
    for (let i = 0; i < 16; i++) {
      const ng = new THREE.Mesh(new THREE.TorusGeometry(0.01, 0.004, 5, 10), mat(0x7fd04f)); ng.position.set(-0.05 + R() * 0.16, 0.168 + R() * 0.01, 0.0 + R() * 0.18); ng.rotation.x = Math.PI / 2 + (R() - 0.5) * 0.6; g.add(ng);
    }
    for (let i = 0; i < 10; i++) {
      const sm = sph(0.0055, 0xf3ecd8, 1, 0.6, 1); sm.position.set((R() - 0.5) * 0.3, 0.164, (R() - 0.5) * 0.3); g.add(sm);
    }
  } else if (id === 'ocha') {
    const cup = cyl(0.06, 0.05, 0.12, 0x6a8f4e); cup.position.y = 0.06; g.add(cup);
    const tea = new THREE.Mesh(new THREE.CircleGeometry(0.055, 20), mat(0x9bbf4a)); tea.rotation.x = -Math.PI / 2; tea.position.y = 0.11; g.add(tea);
  } else if (id === 'omizu') {
    const glass = cyl(0.05, 0.045, 0.14, mat(0xcfefff, { transparent: true, opacity: 0.45, roughness: 0.05 })); glass.position.y = 0.07; g.add(glass);
  } else if (id === 'biiru') {
    const mug = cyl(0.06, 0.06, 0.18, mat(0xf2b134, { transparent: true, opacity: 0.85, roughness: 0.1 })); mug.position.y = 0.09; g.add(mug);
    const foam = sph(0.062, 0xffffff, 1, 0.4, 1); foam.position.y = 0.18; g.add(foam);
    const h = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 6, 12, Math.PI), mat(0xe8f4ff, { transparent: true, opacity: 0.6 }));
    h.rotation.z = -Math.PI / 2; h.position.set(0.06, 0.09, 0); g.add(h);
  }
  return g;
}

// 材料細模型（由 vocab.m 生成）
export function makeIngredient(id) {
  const v = VOCAB[id];
  const m = v?.m;
  const g = new THREE.Group();
  if (!m) return g;
  let mesh;
  if (m.s === 'sphere') mesh = sph(1, m.c);
  else if (m.s === 'box') mesh = box(1, 1, 1, m.c);
  else mesh = cyl(1, 1, 1, m.c, 18);
  mesh.scale.set(...m.sc);
  if (m.s === 'cyl' || m.s === 'box') mesh.scale.y = m.sc[1];
  mesh.position.y = m.s === 'sphere' ? m.sc[1] : m.sc[1] / 2;
  if (m.rz) { mesh.rotation.z = m.rz; mesh.position.y = m.sc[0]; }
  g.add(mesh);
  return g;
}

// 中途嘅狀態模型
export function makeProp(name) {
  const g = new THREE.Group();
  switch (name) {
    case 'onigiri_raw': { const o = onigiriShape(false); g.add(o); break; }
    case 'tofu_cubes':
      for (let i = 0; i < 9; i++) { const c = box(0.06, 0.06, 0.06, mat(0xfffbe8, { roughness: 0.45 })); c.position.set((i % 3) * 0.07 - 0.07, 0.03, Math.floor(i / 3) * 0.07 - 0.07); g.add(c); }
      break;
    case 'chicken_pieces':
      for (let i = 0; i < 8; i++) { const c = box(0.06, 0.04, 0.05, glossy(0xf4b9a4, { roughness: 0.35, clearcoat: 0.6 })); c.position.set((Math.random() - 0.5) * 0.25, 0.02, (Math.random() - 0.5) * 0.15); c.rotation.y = Math.random() * 3; g.add(c); }
      break;
  }
  return g;
}

// 廚具
export function makeBoard() {
  const g = new THREE.Group();
  const b = box(0.7, 0.04, 0.42, mat(0xd9b48a, { roughness: 0.8 }));
  b.position.y = 0.02;
  g.add(b);
  return g;
}
export function makePot() {
  const g = new THREE.Group();
  const metal = mat(0xb8bec7, { metalness: 0.7, roughness: 0.3 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.22, 28, 1, true), new THREE.MeshStandardMaterial({ color: 0xb8bec7, metalness: 0.7, roughness: 0.3, side: THREE.DoubleSide }));
  body.position.y = 0.11; body.castShadow = true;
  const bottom = cyl(0.18, 0.18, 0.01, metal); bottom.position.y = 0.005;
  const liquid = new THREE.Mesh(new THREE.CircleGeometry(0.19, 28), mat(0xe8d8a8, { roughness: 0.15 }));
  liquid.rotation.x = -Math.PI / 2; liquid.position.y = 0.16; liquid.visible = false;
  g.add(body, bottom, liquid);
  for (const s of [-1, 1]) { const h = box(0.08, 0.02, 0.04, 0x333333); h.position.set(s * 0.24, 0.19, 0); g.add(h); }
  g.userData.liquid = liquid;
  return g;
}
export function makePan() {
  const g = new THREE.Group();
  const base = cyl(0.17, 0.15, 0.05, mat(0x2a2a2a, { metalness: 0.5, roughness: 0.4 }));
  base.position.y = 0.025;
  const handle = cyl(0.015, 0.015, 0.35, 0x6b3f1d); handle.rotation.z = Math.PI / 2; handle.position.set(0.33, 0.05, 0);
  const liquid = new THREE.Mesh(new THREE.CircleGeometry(0.15, 28), mat(0xb87a3a, { roughness: 0.15 }));
  liquid.rotation.x = -Math.PI / 2; liquid.position.y = 0.045; liquid.visible = false;
  g.add(base, handle, liquid);
  g.userData.liquid = liquid;
  return g;
}

// ===== 客人 =====
export function makeCustomer(c) {
  const g = new THREE.Group();
  const col = c.color;
  const body = sph(0.32, col, 1, 1.15, 0.9); body.position.y = 0.55; g.add(body);
  const belly = sph(0.22, c.id === 'maneki' ? 0xffffff : 0xfff3e0, 1, 1.1, 0.6); belly.position.set(0, 0.5, 0.2); g.add(belly);
  const head = new THREE.Group(); head.position.y = 1.08; g.add(head);
  head.add(sph(0.3, col, 1.1, 1, 1));
  const muzzleC = c.id === 'kuma' ? 0xd9b38c : c.id === 'kitsune' || c.id === 'shiba' ? 0xfff3e0 : 0xffffff;
  const mz = sph(0.12, muzzleC, 1.3, 0.85, 0.9); mz.position.set(0, -0.08, 0.24); head.add(mz);
  const nose = sph(0.035, 0x222222); nose.position.set(0, -0.04, 0.35); head.add(nose);
  for (const s of [-1, 1]) {
    const e = sph(0.04, new THREE.MeshBasicMaterial({ color: 0x111111 }), 1, 1.2, 0.6); e.position.set(s * 0.12, 0.04, 0.27); head.add(e);
    const hi = sph(0.012, new THREE.MeshBasicMaterial({ color: 0xffffff })); hi.position.set(s * 0.12 + 0.012, 0.06, 0.3); head.add(hi);
    const blush = sph(0.04, new THREE.MeshBasicMaterial({ color: 0xff9fb0, transparent: true, opacity: 0.6 }), 1, 0.6, 0.3); blush.position.set(s * 0.2, -0.06, 0.24); head.add(blush);
    if (c.mask) { const m = sph(0.08, 0x3a3028, 1.2, 0.9, 0.4); m.position.set(s * 0.12, 0.03, 0.24); head.add(m); e.position.z = 0.29; }
    let ear;
    if (c.ear === 'long') { ear = sph(0.07, col, 1, 3.2, 0.6); ear.position.set(s * 0.1, 0.42, 0); ear.rotation.z = -s * 0.15; }
    else if (c.ear === 'round') { ear = sph(0.09, col, 1, 1, 0.6); ear.position.set(s * 0.22, 0.24, 0); }
    else { ear = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 12), mat(col))); ear.scale.z = 0.6; ear.position.set(s * 0.18, 0.3, 0); ear.rotation.z = -s * 0.3; }
    head.add(ear);
    const arm = sph(0.08, col, 1, 1.6, 1); arm.position.set(s * 0.3, 0.6, 0.1); arm.rotation.z = s * 0.4; g.add(arm);
    if (c.id === 'maneki' && s === 1) { arm.position.set(0.3, 0.95, 0.1); arm.rotation.z = -0.3; g.userData.wave = arm; }
    const foot = sph(0.09, col, 1.2, 0.6, 1.4); foot.position.set(s * 0.14, 0.05, 0.08); g.add(foot);
  }
  if (c.id === 'maneki') {
    const col2 = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 24), mat(0xd7263d))); col2.rotation.x = Math.PI / 2; col2.position.y = 0.86; g.add(col2);
    const bell = sph(0.05, mat(0xf5c542, { metalness: 0.8, roughness: 0.2 })); bell.position.set(0, 0.8, 0.2); g.add(bell);
    const koban = cyl(0.12, 0.12, 0.02, mat(0xf5c542, { metalness: 0.8, roughness: 0.2 })); koban.scale.set(0.7, 1, 1.2); koban.rotation.x = Math.PI / 2; koban.position.set(-0.15, 0.55, 0.3); g.add(koban);
  }
  g.add(makeTail(c, col));
  g.userData.head = head;
  return g;
}

// 客人尾巴：每種動物一款，側身都睇得清
function makeTail(c, col) {
  const t = new THREE.Group();
  t.position.set(0.04, 0.38, -0.28);
  const cream = 0xfff3e0;
  const tube = (pts, r, m) => shadow(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p))), 36, r, 12, false), m));
  if (c.id === 'shiba') {
    // 柴犬捲尾：由背後向上、向外捲成一個大圈（側面睇一個「6」字），尾底白毛
    t.add(tube([[0, 0, 0], [0.04, 0.14, -0.08], [0.12, 0.3, -0.12], [0.26, 0.45, -0.08], [0.3, 0.6, 0.02], [0.2, 0.68, 0.06], [0.1, 0.6, 0.03], [0.14, 0.5, -0.02]], 0.07, mat(col)));
    const tip = sph(0.075, cream); tip.position.set(0.14, 0.5, -0.02); t.add(tip);
  } else if (c.id === 'kitsune') {
    // 狐狸：蓬鬆大尾，尾尖白
    const f = sph(0.16, col, 0.95, 2.2, 0.95); f.position.set(0.1, 0.28, -0.22); f.rotation.set(-0.6, 0, -0.5); t.add(f);
    const tip = sph(0.12, 0xffffff, 0.95, 1.4, 0.95); tip.position.set(0.27, 0.58, -0.38); tip.rotation.set(-0.6, 0, -0.5); t.add(tip);
  } else if (c.id === 'tanuki') {
    // 狸貓：粗短尾 + 深色環紋
    const f = sph(0.14, col, 1, 1.9, 1); f.position.set(0.1, 0.22, -0.2); f.rotation.set(-0.7, 0, -0.5); t.add(f);
    [[0.04, 0.12, -0.12], [0.1, 0.24, -0.2], [0.16, 0.36, -0.28]].forEach(([x, y, z], i) => {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.115 - i * 0.012, 0.022, 6, 16), mat(0x3a3028));
      r.position.set(x, y, z); r.rotation.set(-0.7 + Math.PI / 2, 0, -0.5); t.add(r);
    });
  } else if (c.id === 'usagi') {
    const p = sph(0.12, 0xffffff); p.position.set(0.04, 0.12, -0.12); t.add(p);   // 圓毛球尾
  } else if (c.id === 'kuma') {
    const p = sph(0.09, col); p.position.set(0.03, 0.06, -0.1); t.add(p);
  } else {
    // 招財貓：長尾向上彎
    t.add(tube([[0, 0, 0], [0.06, 0.1, -0.22], [0.18, 0.3, -0.3], [0.26, 0.52, -0.2]], 0.055, mat(col)));
  }
  t.userData.tailSway = true;
  return t;
}

// ===== 裝修 =====
export function makeDeco(id) {
  const g = new THREE.Group();
  if (id === 'deco_lantern') {
    const l = sph(0.2, mat(0xe03a2f, { emissive: 0x801010, emissiveIntensity: 0.6 }), 1, 1.3, 1);
    const top = cyl(0.1, 0.1, 0.05, 0x222222); top.position.y = 0.27;
    const bot = cyl(0.1, 0.1, 0.05, 0x222222); bot.position.y = -0.27;
    const cord = cyl(0.005, 0.005, 0.5, 0x222222); cord.position.y = 0.5;
    const light = new THREE.PointLight(0xff8040, 0.8, 3);
    g.add(l, top, bot, cord, light);
  } else if (id === 'deco_noren') {
    const rod = cyl(0.015, 0.015, 1.4, 0x6b3f1d); rod.rotation.z = Math.PI / 2; g.add(rod);
    for (let i = 0; i < 3; i++) {
      const p = box(0.44, 0.55, 0.01, mat(0x1d3557, { side: THREE.DoubleSide })); p.position.set(-0.46 + i * 0.46, -0.28, 0); g.add(p);
      const cat = sph(0.06, 0xffffff, 1, 1, 0.2); cat.position.set(-0.46 + i * 0.46, -0.3, 0.01); g.add(cat);
    }
  } else if (id === 'deco_bonsai') {
    const pot = cyl(0.12, 0.09, 0.08, 0x2f4f6f); pot.position.y = 0.04; g.add(pot);
    const trunk = cyl(0.02, 0.03, 0.18, 0x5b3a1e); trunk.position.y = 0.17; trunk.rotation.z = 0.3; g.add(trunk);
    [[0, 0.3, 0, 0.1], [-0.08, 0.26, 0.02, 0.07], [0.08, 0.32, -0.02, 0.07]].forEach(([x, y, z, r]) => { const f = sph(r, 0x3f8f3f, 1.3, 0.7, 1); f.position.set(x, y, z); g.add(f); });
  } else if (id === 'deco_maneki') {
    const m = makeCustomer({ id: 'maneki', color: 0xffffff, ear: 'pointy' });
    m.scale.setScalar(0.35);
    g.add(m);
    g.userData.wave = m.userData.wave;
  }
  return g;
}

// 粒子貼圖
export function circleTexture(color = '#fff', soft = true) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d');
  const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, color); gr.addColorStop(soft ? 0.4 : 0.9, color); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function emojiTexture(e, size = 128) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const x = c.getContext('2d');
  x.font = `${size * 0.8}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(e, size / 2, size / 2 + size * 0.05);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}


// ===== 煮食中嘅鍋內容物（會由生變熟） =====
// 回傳 group；userData.items 係一組 { mesh, raw, cooked } 畀 world 做顏色過渡
export function makePotContents(kind) {
  const g = new THREE.Group();
  const items = [];
  const R = rng(77);
  const add = (mesh, raw, cooked) => { mesh.material = mesh.material.clone(); mesh.material.color.setHex(raw); items.push({ mesh, raw: new THREE.Color(raw), cooked: new THREE.Color(cooked) }); g.add(mesh); return mesh; };
  if (kind === 'miso_soup') {
    for (let i = 0; i < 6; i++) { const a = i * 1.05, d = 0.04 + R() * 0.09; const t = box(0.045, 0.04, 0.045, mat(0xfffbe8, { roughness: 0.5 })); t.position.set(Math.cos(a) * d, 0, Math.sin(a) * d); t.rotation.y = R() * 3; add(t, 0xfffbe8, 0xf0d8a8); }
    for (let i = 0; i < 5; i++) { const w = sph(0.03, mat(0x2a6a38), 1.4, 0.2, 0.7); const a = R() * 6.28, d = R() * 0.12; w.position.set(Math.cos(a) * d, 0.005, Math.sin(a) * d); w.rotation.y = R() * 3; add(w, 0x3d3a2a, 0x2a6a38); }
  } else if (kind === 'ramen_boil') {
    const nd = noodleBundle(0.14, 0, 12, 9);
    nd.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color.setHex(0xf6f1e4); items.push({ mesh: o, raw: new THREE.Color(0xf6f1e4), cooked: new THREE.Color(0xf2d77a) }); } });
    g.add(nd);
  } else if (kind === 'pan_simmer') {
    for (let i = 0; i < 8; i++) { const a = i * 0.8, d = 0.03 + R() * 0.09; const c = box(0.05, 0.034, 0.04, glossy(0xf4b9a4, { roughness: 0.4, clearcoat: 0.5 })); c.position.set(Math.cos(a) * d, 0.012, Math.sin(a) * d); c.rotation.set(0, R() * 3, 0); add(c, 0xf4b9a4, 0xd2a064); }
    for (let i = 0; i < 6; i++) { const o = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.005, 5, 12, 2.6), mat(0xfff4d0, { transparent: true, opacity: 0.9 })); o.rotation.x = Math.PI / 2; o.rotation.z = R() * 6; o.position.set((R() - 0.5) * 0.22, 0.01, (R() - 0.5) * 0.22); add(o, 0xfff4d0, 0xe8c070); }
  }
  g.userData.items = items;
  return g;
}
