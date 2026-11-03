// 食物、材料、客人、裝修 3D 模型（全部程式砌）
import * as THREE from 'three';
import { VOCAB } from '../data/vocab.js';
import { toonMat, basicMat } from './style.js';

export const mat = (c, o = {}) => toonMat(c, o);
// 細碎配料（麵條、蔥花、豆腐粒）：唔描邊，免得成碗湯變一堆黑線
const tiny = (c, o = {}) => toonMat(c, { outline: false, rim: 0, ...o });
const shadow = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };

function sph(r, c, sx = 1, sy = 1, sz = 1) {
  const m = shadow(new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), typeof c === 'number' ? mat(c) : c));
  m.scale.set(sx, sy, sz);
  return m;
}
function box(w, h, d, c) { return shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), typeof c === 'number' ? mat(c) : c)); }
function cyl(rt, rb, h, c, seg = 24) { return shadow(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), typeof c === 'number' ? mat(c) : c)); }

// 碗（Lathe）
function bowl(r = 0.22, h = 0.14, outer = 0x9b1d20, inner = 0x1a1010) {
  const pts = [];
  for (let i = 0; i <= 10; i++) {
    const k = i / 10;
    pts.push(new THREE.Vector2(r * 0.45 + r * 0.55 * Math.sin(k * Math.PI / 2), h * k));
  }
  const g = new THREE.Group();
  const out = shadow(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mat(outer, { gloss: true })));
  const inPts = pts.map((p) => new THREE.Vector2(p.x * 0.93, p.y + 0.005));
  const inn = new THREE.Mesh(new THREE.LatheGeometry(inPts, 32), mat(inner, { side: THREE.BackSide, outline: false, rim: 0 }));
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
  const rice = shadow(new THREE.Mesh(geo, mat(0xfbfbf4)));
  rice.position.y = 0.14;
  g.add(rice);
  if (withNori) {
    const nori = box(0.13, 0.11, 0.2, mat(0x17261b));
    nori.position.set(0, 0.07, 0);
    g.add(nori);
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
    const ume = sph(0.025, tiny(0xc8283c)); ume.position.set(-0.13, 0.04, 0.12); g.add(ume);
  } else if (id === 'misoshiru') {
    const b = bowl(0.18, 0.13); g.add(b);
    const soup = new THREE.Mesh(new THREE.CircleGeometry(0.15, 32), mat(0xc58b4a, { gloss: true }));
    soup.rotation.x = -Math.PI / 2; soup.position.y = 0.11; g.add(soup);
    for (let i = 0; i < 6; i++) {
      const tf = box(0.035, 0.03, 0.035, tiny(0xfffbe8)); tf.position.set((Math.random() - 0.5) * 0.18, 0.115, (Math.random() - 0.5) * 0.18); tf.rotation.y = Math.random(); g.add(tf);
    }
    for (let i = 0; i < 5; i++) {
      const w = sph(0.03, tiny(0x2e6b3a), 1, 0.2, 0.6); w.position.set((Math.random() - 0.5) * 0.16, 0.112, (Math.random() - 0.5) * 0.16); g.add(w);
    }
    for (let i = 0; i < 8; i++) {
      const n = cyl(0.012, 0.012, 0.005, tiny(0x7fd04f), 8); n.position.set((Math.random() - 0.5) * 0.15, 0.118, (Math.random() - 0.5) * 0.15); g.add(n);
    }
  } else if (id === 'oyakodon') {
    const b = bowl(0.22, 0.15, 0x2c4f8f, 0xf2efe6); g.add(b);
    const rice = sph(0.19, 0xfbfbf4, 1, 0.3, 1); rice.position.y = 0.13; g.add(rice);
    const egg = sph(0.19, mat(0xf7c531, { gloss: true }), 1, 0.16, 1); egg.position.y = 0.17; g.add(egg);
    for (let i = 0; i < 6; i++) {
      const w = sph(0.05, tiny(0xfff7d6), 1, 0.25, 0.8); w.position.set((Math.random() - 0.5) * 0.24, 0.19, (Math.random() - 0.5) * 0.24); g.add(w);
    }
    for (let i = 0; i < 6; i++) {
      const c = box(0.05, 0.035, 0.04, tiny(0xc9925a)); c.position.set((Math.random() - 0.5) * 0.22, 0.2, (Math.random() - 0.5) * 0.22); c.rotation.y = Math.random() * 3; g.add(c);
    }
    for (let i = 0; i < 3; i++) {
      const l = sph(0.03, tiny(0x4caf50), 1, 0.15, 1.6); l.position.set((Math.random() - 0.5) * 0.08, 0.22, (Math.random() - 0.5) * 0.08); l.rotation.y = i * 2; g.add(l);
    }
  } else if (id === 'ramen') {
    const b = bowl(0.27, 0.17, 0xb3261e, 0x111111); g.add(b);
    const broth = new THREE.Mesh(new THREE.CircleGeometry(0.235, 32), mat(0xd29b5b, { gloss: true }));
    broth.rotation.x = -Math.PI / 2; broth.position.y = 0.15; g.add(broth);
    for (let i = 0; i < 7; i++) {
      const n = new THREE.Mesh(new THREE.TorusGeometry(0.05 + Math.random() * 0.06, 0.008, 6, 20), tiny(0xf3d77a));
      n.rotation.x = Math.PI / 2; n.position.set((Math.random() - 0.5) * 0.12, 0.152, (Math.random() - 0.5) * 0.12); g.add(n);
    }
    for (let i = 0; i < 2; i++) {
      const c = cyl(0.07, 0.07, 0.02, 0xb5653a); c.position.set(-0.08 + i * 0.05, 0.165, -0.08); c.rotation.x = 0.3; g.add(c);
    }
    const eggW = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xfffaf0));
    eggW.scale.set(1, 0.7, 1.3); eggW.position.set(0.1, 0.15, 0.05); g.add(eggW);
    const yolk = sph(0.028, tiny(0xf08a1a), 1, 0.4, 1.2); yolk.position.set(0.1, 0.183, 0.05); g.add(yolk);
    const nori = box(0.12, 0.14, 0.005, 0x17261b); nori.position.set(0, 0.2, -0.18); nori.rotation.x = -0.25; g.add(nori);
    const naruto = cyl(0.035, 0.035, 0.012, 0xffffff); naruto.position.set(0.05, 0.16, 0.13); g.add(naruto);
    const sw = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.005, 6, 16), tiny(0xff6fa0)); sw.rotation.x = Math.PI / 2; sw.position.set(0.05, 0.167, 0.13); g.add(sw);
    for (let i = 0; i < 10; i++) {
      const ng = cyl(0.01, 0.01, 0.005, tiny(0x7fd04f), 8); ng.position.set(-0.1 + Math.random() * 0.1, 0.158, 0.05 + Math.random() * 0.1); g.add(ng);
    }
  } else if (id === 'ocha') {
    const cup = cyl(0.06, 0.05, 0.12, 0x6a8f4e); cup.position.y = 0.06; g.add(cup);
    const tea = new THREE.Mesh(new THREE.CircleGeometry(0.055, 20), mat(0x9bbf4a)); tea.rotation.x = -Math.PI / 2; tea.position.y = 0.11; g.add(tea);
  } else if (id === 'omizu') {
    const glass = cyl(0.05, 0.045, 0.14, mat(0xcfefff, { transparent: true, opacity: 0.45, outline: false })); glass.position.y = 0.07; g.add(glass);
  } else if (id === 'biiru') {
    const mug = cyl(0.06, 0.06, 0.18, mat(0xf2b134, { transparent: true, opacity: 0.85 })); mug.position.y = 0.09; g.add(mug);
    const foam = sph(0.062, 0xffffff, 1, 0.4, 1); foam.position.y = 0.18; g.add(foam);
    const h = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 6, 12, Math.PI), mat(0xe8f4ff, { transparent: true, opacity: 0.6, outline: false }));
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
      for (let i = 0; i < 9; i++) { const c = box(0.06, 0.06, 0.06, 0xfffbe8); c.position.set((i % 3) * 0.07 - 0.07, 0.03, Math.floor(i / 3) * 0.07 - 0.07); g.add(c); }
      break;
    case 'chicken_pieces':
      for (let i = 0; i < 8; i++) { const c = box(0.06, 0.04, 0.05, 0xf2c9a0); c.position.set((Math.random() - 0.5) * 0.25, 0.02, (Math.random() - 0.5) * 0.15); c.rotation.y = Math.random() * 3; g.add(c); }
      break;
  }
  return g;
}

// 廚具
export function makeBoard() {
  const g = new THREE.Group();
  const b = box(0.7, 0.04, 0.42, mat(0xd9b48a));
  b.position.y = 0.02;
  g.add(b);
  return g;
}
export function makePot() {
  const g = new THREE.Group();
  const metal = mat(0xb8bec7, { gloss: true });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.22, 28, 1, true), mat(0xb8bec7, { gloss: true, side: THREE.DoubleSide }));
  body.position.y = 0.11; body.castShadow = true;
  const bottom = cyl(0.18, 0.18, 0.01, metal); bottom.position.y = 0.005;
  const liquid = new THREE.Mesh(new THREE.CircleGeometry(0.19, 28), mat(0xe8d8a8, { gloss: true }));
  liquid.rotation.x = -Math.PI / 2; liquid.position.y = 0.16; liquid.visible = false;
  g.add(body, bottom, liquid);
  for (const s of [-1, 1]) { const h = box(0.08, 0.02, 0.04, 0x333333); h.position.set(s * 0.24, 0.19, 0); g.add(h); }
  g.userData.liquid = liquid;
  return g;
}
export function makePan() {
  const g = new THREE.Group();
  const base = cyl(0.17, 0.15, 0.05, mat(0x2a2a2a, { gloss: true }));
  base.position.y = 0.025;
  const handle = cyl(0.015, 0.015, 0.35, 0x6b3f1d); handle.rotation.z = Math.PI / 2; handle.position.set(0.33, 0.05, 0);
  const liquid = new THREE.Mesh(new THREE.CircleGeometry(0.15, 28), mat(0xb87a3a, { gloss: true }));
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
  const ears = [];
  head.add(sph(0.3, col, 1.1, 1, 1));
  const muzzleC = c.id === 'kuma' ? 0xd9b38c : c.id === 'kitsune' || c.id === 'shiba' ? 0xfff3e0 : 0xffffff;
  const mz = sph(0.12, muzzleC, 1.3, 0.85, 0.9); mz.position.set(0, -0.08, 0.24); head.add(mz);
  const nose = sph(0.035, 0x222222); nose.position.set(0, -0.04, 0.35); head.add(nose);
  for (const s of [-1, 1]) {
    const e = sph(0.04, basicMat({ color: 0x111111 }), 1, 1.2, 0.6); e.position.set(s * 0.12, 0.04, 0.27); head.add(e);
    const hi = sph(0.012, basicMat({ color: 0xffffff })); hi.position.set(s * 0.12 + 0.012, 0.06, 0.3); head.add(hi);
    const blush = sph(0.04, basicMat({ color: 0xff9fb0, transparent: true, opacity: 0.6 }), 1, 0.6, 0.3); blush.position.set(s * 0.2, -0.06, 0.24); head.add(blush);
    if (c.mask) { const m = sph(0.08, 0x3a3028, 1.2, 0.9, 0.4); m.position.set(s * 0.12, 0.03, 0.24); head.add(m); e.position.z = 0.29; }
    let ear;
    if (c.ear === 'long') { ear = sph(0.07, col, 1, 3.2, 0.6); ear.position.set(s * 0.1, 0.42, 0); ear.rotation.z = -s * 0.15; }
    else if (c.ear === 'round') { ear = sph(0.09, col, 1, 1, 0.6); ear.position.set(s * 0.22, 0.24, 0); }
    else { ear = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 12), mat(col))); ear.scale.z = 0.6; ear.position.set(s * 0.18, 0.3, 0); ear.rotation.z = -s * 0.3; }
    head.add(ear); ears.push(ear);
    const arm = sph(0.08, col, 1, 1.6, 1); arm.position.set(s * 0.3, 0.6, 0.1); arm.rotation.z = s * 0.4; g.add(arm);
    if (c.id === 'maneki' && s === 1) { arm.position.set(0.3, 0.95, 0.1); arm.rotation.z = -0.3; g.userData.wave = arm; }
    const foot = sph(0.09, col, 1.2, 0.6, 1.4); foot.position.set(s * 0.14, 0.05, 0.08); g.add(foot);
  }
  if (c.id === 'maneki') {
    const col2 = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 24), mat(0xd7263d))); col2.rotation.x = Math.PI / 2; col2.position.y = 0.86; g.add(col2);
    const bell = sph(0.05, mat(0xf5c542, { gloss: true })); bell.position.set(0, 0.8, 0.2); g.add(bell);
    const koban = cyl(0.12, 0.12, 0.02, mat(0xf5c542, { gloss: true })); koban.scale.set(0.7, 1, 1.2); koban.rotation.x = Math.PI / 2; koban.position.set(-0.15, 0.55, 0.3); g.add(koban);
  }
  // ===== 每個種類獨有嘅外形同 idle 動作 =====
  const tailAt = (obj, y = 0.4, z = -0.3) => { obj.position.set(0, y, z); g.add(obj); return obj; };
  const dark = (c) => tiny(c);
  let idle = () => {};
  if (c.id === 'usagi') {
    const tail = tailAt(sph(0.11, tiny(0xffffff))); tail.position.y = 0.3;
    ears.forEach((e, i) => { const inner = sph(0.04, tiny(0xffb3c1), 1, 3, 0.3); inner.position.set(0, 0, 0.05); e.add(inner); });
    idle = (t) => {
      const k = Math.max(0, Math.sin(t * 1.3) - 0.7) / 0.3;       // 間唔中跳一下
      g.position.y = Math.abs(k) * 0.12;
      ears.forEach((e, i) => { e.rotation.z = (i ? 1 : -1) * 0.15 + Math.sin(t * 2.4 + i) * 0.1 - k * 0.3; });
      head.rotation.x = Math.sin(t * 9) * 0.02;                    // 鼻郁郁
    };
  } else if (c.id === 'kuma') {
    g.scale.setScalar(1.12);
    tailAt(sph(0.08, c.color), 0.3);
    ears.forEach((e) => { const inner = sph(0.05, tiny(0xd9b38c), 1, 1, 0.4); inner.position.z = 0.05; e.add(inner); });
    idle = (t) => { g.rotation.z = Math.sin(t * 1.1) * 0.04; head.rotation.x = Math.sin(t * 0.8) * 0.05; };
  } else if (c.id === 'kitsune') {
    const tail = new THREE.Group();
    const body = sph(0.17, c.color, 0.8, 2.2, 0.8); body.position.y = 0.2;
    const tip = sph(0.12, tiny(0xffffff), 0.8, 1.2, 0.8); tip.position.y = 0.52;
    tail.add(body, tip); tailAt(tail, 0.35, -0.3); tail.rotation.x = -0.7;
    ears.forEach((e) => { const t = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.1, 10), tiny(0x3a2a22))); t.position.y = 0.07; e.add(t); });
    idle = (t) => { tail.rotation.z = Math.sin(t * 2.2) * 0.35; };
    g.userData.tail = tail;
  } else if (c.id === 'tanuki') {
    belly.scale.multiplyScalar(1.25);
    const leaf = sph(0.1, tiny(0x4caf50), 1.4, 0.25, 1); leaf.position.set(0, 0.32, 0.03); leaf.rotation.z = 0.25; head.add(leaf);
    const tail = new THREE.Group();
    for (let i = 0; i < 4; i++) { const r = sph(0.09 - i * 0.008, tiny(i % 2 ? 0x3a3028 : c.color), 1, 0.8, 1); r.position.y = i * 0.09; tail.add(r); }
    tailAt(tail, 0.3, -0.3); tail.rotation.x = -1.0;
    idle = (t) => {
      const k = Math.max(0, Math.sin(t * 2.6) - 0.6) / 0.4;       // 拍肚皮
      belly.scale.set(1.25 * (1 + k * 0.06), 1.1 * 1.25, 0.6 * 1.25 * (1 + k * 0.1));
      g.position.y = k * 0.03; tail.rotation.z = Math.sin(t * 1.5) * 0.2;
    };
  } else if (c.id === 'shiba') {
    const tail = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.04, 8, 16, Math.PI * 1.6), mat(c.color));
    tail.castShadow = true; tailAt(tail, 0.4, -0.3); tail.rotation.set(0, Math.PI / 2, 0.3);
    for (const sd of [-1, 1]) { const ch = sph(0.1, tiny(0xfff3e0), 1, 0.9, 0.7); ch.position.set(sd * 0.17, -0.07, 0.2); head.add(ch); }
    idle = (t) => { tail.rotation.x = Math.sin(t * 14) * 0.3; head.rotation.z += Math.sin(t * 0.9) * 0.002 + 0.06 * Math.max(0, Math.sin(t * 0.6) - 0.8); };
  } else if (c.id === 'maneki') {
    idle = (t) => { head.rotation.z = Math.sin(t * 1.2) * 0.05; };
  }
  g.userData.idle = idle;
  g.userData.id = c.id;
  g.userData.head = head;
  g.userData.baseY = 0;
  return g;
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
      const p = box(0.44, 0.55, 0.01, mat(0x1d3557, { side: THREE.DoubleSide, soft: true })); p.position.set(-0.46 + i * 0.46, -0.28, 0); g.add(p);
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
