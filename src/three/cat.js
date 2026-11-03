// 小黑：黑貓廚師（用基本形狀砌，唔使外部模型）
import * as THREE from 'three';
import { toonMat, basicMat } from './style.js';

const BLACK = 0x26263a; // 唔用純黑：帶少少藍紫，卡通光影先睇到層次
const mat = (c, o = {}) => toonMat(c, { soft: true, ...o });

function sph(r, m, sx = 1, sy = 1, sz = 1) {
  const g = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 20), m);
  g.scale.set(sx, sy, sz);
  g.castShadow = true;
  return g;
}

export class Cat {
  constructor() {
    this.root = new THREE.Group();
    this.root.name = 'cat';
    this.mBody = mat(BLACK, { rim: 0.55 });
    this.mDark = mat(0x34343f);
    this.parts = [];
    this.t = 0;
    this.action = null;     // { name, t, dur }
    this.mode = 'idle';     // 長時間嘅模式：idle / stir / talk
    this.blinkT = 2;
    this.happyEyes = 0;
    this.build();
  }

  build() {
    const r = this.root;
    // 身
    this.body = new THREE.Group();
    r.add(this.body);
    const torso = sph(0.42, this.mBody, 1, 1.25, 0.9);
    torso.position.y = 1.0;
    this.body.add(torso);
    // 圍裙（白色前半球）
    // phi = π/2 係正前面 (+z)
    const apronGeo = new THREE.SphereGeometry(0.43, 24, 16, Math.PI / 2 - Math.PI * 0.32, Math.PI * 0.64, Math.PI * 0.38, Math.PI * 0.5);
    const apron = new THREE.Mesh(apronGeo, mat(0xfafafa, { side: THREE.DoubleSide }));
    apron.scale.set(1.02, 1.27, 0.93);
    apron.position.y = 1.0;
    this.body.add(apron);
    // 胸口白毛
    const chest = sph(0.1, mat(0xf2f2f2), 1, 1.3, 0.5);
    chest.position.set(0, 1.36, 0.33);
    this.body.add(chest);

    // 頭
    this.head = new THREE.Group();
    this.head.position.y = 1.72;
    this.body.add(this.head);
    const skull = sph(0.42, this.mBody, 1.12, 0.96, 1);
    this.head.add(skull);
    const muzzle = sph(0.17, this.mDark, 1.35, 0.85, 0.8);
    muzzle.position.set(0, -0.12, 0.31);
    this.head.add(muzzle);
    const nose = sph(0.045, mat(0xff8fa8), 1.3, 0.8, 1);
    nose.position.set(0, -0.06, 0.44);
    this.head.add(nose);
    // 口：三種嘴型（笑 ω / 開口 / 平）
    const mouthMat = basicMat({ color: 0x0a0a0e });
    this.mouths = { smile: new THREE.Group(), open: new THREE.Group(), flat: new THREE.Group() };
    for (const s of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.008, 6, 12, Math.PI), mouthMat);
      m.position.set(s * 0.034, -0.13, 0.43);
      m.rotation.z = Math.PI;
      this.mouths.smile.add(m);
    }
    const hole = sph(0.04, basicMat({ color: 0x2a0a12 }), 1, 1, 0.5);
    hole.position.set(0, -0.17, 0.43);
    const tongue = sph(0.022, basicMat({ color: 0xff7f9c }), 1.2, 0.7, 0.5);
    tongue.position.set(0, -0.19, 0.45);
    this.mouths.open.add(hole, tongue);
    const flat = new THREE.Mesh(new THREE.CapsuleGeometry(0.006, 0.07, 3, 6), mouthMat);
    flat.rotation.z = Math.PI / 2; flat.position.set(0, -0.14, 0.43);
    this.mouths.flat.add(flat);
    for (const k in this.mouths) this.head.add(this.mouths[k]);
    // 眼
    this.eyes = [];
    for (const s of [-1, 1]) {
      const eye = new THREE.Group();
      eye.position.set(s * 0.17, 0.03, 0.33);
      eye.rotation.y = s * 0.35;
      const iris = sph(0.1, mat(0xc8e04a, { emissive: 0x3a4a00, rim: 0, outline: false }), 1, 1.1, 0.55);
      const pupil = sph(0.05, basicMat({ color: 0x050505 }), 0.6, 1.5, 0.5);
      pupil.position.z = 0.04;
      const hi = sph(0.022, basicMat({ color: 0xffffff }));
      hi.position.set(0.03, 0.045, 0.07);
      eye.add(iris, pupil, hi);
      this.head.add(eye);
      this.eyes.push(eye);
    }
    // 開心眼（^ ^）同眉毛：平時隱藏，表情切換時先出
    this.arcs = []; this.brows = [];
    for (const s of [-1, 1]) {
      const arc = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.016, 6, 14, Math.PI), basicMat({ color: 0x05050a }));
      arc.position.set(s * 0.17, 0.02, 0.4); arc.rotation.y = s * 0.3; arc.visible = false;
      this.head.add(arc); this.arcs.push(arc);
      const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.09, 3, 6), basicMat({ color: 0x8a8aa0 }));
      brow.position.set(s * 0.17, 0.17, 0.37); brow.visible = false;
      this.head.add(brow); this.brows.push(brow);
    }
    this.face = 'normal'; this.faceT = 0;
    // 耳
    this.ears = [];
    for (const s of [-1, 1]) {
      const ear = new THREE.Group();
      ear.position.set(s * 0.26, 0.3, 0);
      ear.rotation.z = -s * 0.35;
      const outer = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.32, 16), this.mBody);
      outer.position.y = 0.12;
      outer.scale.z = 0.6;
      outer.castShadow = true;
      const inner = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 12), mat(0xff9fb5, { outline: false }));
      inner.position.set(0, 0.1, 0.05);
      inner.scale.z = 0.4;
      ear.add(outer, inner);
      this.head.add(ear);
      this.ears.push(ear);
    }
    // 鬚
    const wm = new THREE.LineBasicMaterial({ color: 0xdddddd });
    for (const s of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const g = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(s * 0.15, -0.1 + i * 0.03, 0.4),
          new THREE.Vector3(s * 0.48, -0.06 + i * 0.07 - 0.05, 0.3),
        ]);
        this.head.add(new THREE.Line(g, wm));
      }
    }
    // 帽 / 頸 slot
    this.hatSlot = new THREE.Group();
    this.hatSlot.position.y = 0.33;
    this.head.add(this.hatSlot);
    this.neckSlot = new THREE.Group();
    this.neckSlot.position.y = 1.42;
    this.body.add(this.neckSlot);

    // 手（肩膀做 pivot）
    this.arms = [];
    for (const s of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(s * 0.36, 1.25, 0.08);
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.3, 6, 12), this.mBody);
      arm.position.y = -0.2;
      arm.castShadow = true;
      const paw = sph(0.1, mat(0xf4f4f4), 1, 0.85, 1);
      paw.position.y = -0.4;
      sh.add(arm, paw);
      sh.rotation.z = s * 0.25;
      sh.userData.side = s;
      this.body.add(sh);
      this.arms.push(sh);
    }
    // 工具（右手）
    this.tools = {};
    const knife = new THREE.Group();
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.3, 0.012), mat(0xdfe6ee, { gloss: true }));
    blade.position.y = -0.17;
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.12), mat(0x6b3f1d));
    knife.add(blade, handle);
    knife.rotation.x = Math.PI / 2;
    knife.position.set(0, -0.45, 0.06);
    const ladle = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.45), mat(0xc79a5b));
    stick.position.y = -0.2;
    const cup = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mat(0xc79a5b, { side: THREE.DoubleSide }));
    cup.position.y = -0.42;
    ladle.add(stick, cup);
    ladle.position.set(0, -0.42, 0.04);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.2, 0.02), mat(0xfff8e0));
    pad.position.set(0, -0.48, 0.12);
    pad.rotation.x = -0.5;
    this.tools.knife = knife; this.tools.ladle = ladle; this.tools.pad = pad;
    for (const k in this.tools) { this.tools[k].visible = false; this.arms[1].add(this.tools[k]); }

    // 尾（一串 segment）
    this.tail = [];
    let parent = new THREE.Group();
    parent.position.set(0, 0.75, -0.32);
    parent.rotation.x = -0.9;
    this.body.add(parent);
    for (let i = 0; i < 8; i++) {
      const seg = new THREE.Group();
      seg.position.y = i === 0 ? 0 : 0.11;
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.065 - i * 0.003, 12, 8), this.mBody);
      m.scale.y = 1.6;
      m.castShadow = true;
      seg.add(m);
      parent.add(seg);
      this.tail.push(seg);
      parent = seg;
    }

    this.root.traverse((o) => { if (o.isMesh) o.userData.cat = true; });
  }

  holding(name) {
    for (const k in this.tools) this.tools[k].visible = k === name;
  }

  // 衫：hat / neck
  wear({ hat, neck }) {
    this.hatSlot.clear();
    this.neckSlot.clear();
    if (hat === 'hat_chef') {
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.16, 24), mat(0xffffff));
      band.position.y = 0.02;
      const puff = new THREE.Group();
      [[0, 0.22, 0, 0.24], [-0.14, 0.18, 0, 0.17], [0.14, 0.18, 0, 0.17], [0, 0.18, 0.12, 0.17], [0, 0.18, -0.12, 0.17]].forEach(([x, y, z, rr]) => {
        // 只描最大嗰粒，細粒重疊位描邊會出雜點
        const p = sph(rr, mat(0xffffff, { outline: rr > 0.2 })); p.position.set(x, y, z); puff.add(p);
      });
      this.hatSlot.add(band, puff);
      this.hatSlot.rotation.z = 0.12;
    } else if (hat === 'hat_hachimaki') {
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.04, 8, 32), mat(0xffffff));
      t.rotation.x = Math.PI / 2; t.position.y = -0.18; t.scale.set(1.08, 1, 1);
      const dot = sph(0.06, mat(0xd7263d), 1, 1, 0.3); dot.position.set(0, -0.18, 0.45);
      const knot = sph(0.06, mat(0xffffff)); knot.position.set(0.1, -0.15, -0.44);
      this.hatSlot.add(t, dot, knot);
      this.hatSlot.rotation.z = 0;
    } else if (hat === 'hat_straw') {
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.62, 0.03, 32), mat(0xe8c870));
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.2, 24), mat(0xe8c870));
      crown.position.y = 0.1;
      const ribbon = new THREE.Mesh(new THREE.CylinderGeometry(0.305, 0.305, 0.05, 24), mat(0xd7263d));
      ribbon.position.y = 0.04;
      this.hatSlot.add(brim, crown, ribbon);
      this.hatSlot.rotation.z = -0.1;
    }
    if (neck === 'neck_bell') {
      const c = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.03, 8, 32), mat(0xd7263d));
      c.rotation.x = Math.PI / 2;
      const b = sph(0.06, mat(0xf5c542, { gloss: true }));
      b.position.set(0, -0.07, 0.25);
      this.neckSlot.add(c, b);
    } else if (neck === 'neck_scarf') {
      const c = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.07, 10, 32), mat(0x3a7bd5));
      c.rotation.x = Math.PI / 2;
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.04), mat(0x3a7bd5));
      tail.position.set(0.12, -0.15, 0.25); tail.rotation.z = 0.2;
      this.neckSlot.add(c, tail);
    }
  }

  play(name, dur = 0.35) { if (name === 'sad') this.emote('sad', 1.4); this.action = { name, t: 0, dur }; }
  setMode(m) { this.mode = m; }
  happy() { this.play('happy', 1.0); this.happyEyes = 1.2; }
  // 表情：normal / happy / surprised / focus / sleepy / sad，維持 secs 秒後自動返原狀（0 = 一直）
  emote(name, secs = 1.5) { this.face = name; this.faceT = secs; }

  applyFace(blink) {
    let f = this.face;
    if (this.happyEyes > 0 || this.mode === 'pet') f = this.happyEyes > 100 ? 'sleepy' : 'happy';
    else if (f === 'normal' && (this.mode === 'stir')) f = 'focus';
    const sad = f === 'sad', happy = f === 'happy';
    this.arcs.forEach((a) => { a.visible = happy; a.rotation.z = 0; });
    this.eyes.forEach((e, i) => {
      e.visible = !happy;
      const s = i ? 1 : -1;
      let y = blink, sc = 1;
      if (f === 'surprised') { y = 1.15; sc = 1.25; }
      if (f === 'focus') y = Math.min(blink, 0.65);
      if (f === 'sleepy') y = Math.min(blink, 0.25);
      if (sad) y = Math.min(blink, 0.85);
      e.scale.set(sc, y * sc, sc);
      e.rotation.z = sad ? -s * 0.25 : 0;
    });
    this.brows.forEach((b, i) => {
      const s = i ? 1 : -1;
      b.visible = f === 'focus' || sad || f === 'surprised';
      b.position.y = f === 'surprised' ? 0.22 : 0.17;
      b.rotation.z = Math.PI / 2 + (f === 'focus' ? -s * 0.35 : sad ? s * 0.35 : 0);
    });
    const talking = this.mode === 'talk' && Math.sin(this.t * 14) > -0.2;
    const m = f === 'surprised' || talking ? 'open' : sad || f === 'focus' || f === 'sleepy' ? 'flat' : 'smile';
    for (const k in this.mouths) this.mouths[k].visible = k === m;
  }

  update(dt) {
    this.t += dt;
    const t = this.t;
    // 呼吸
    this.body.scale.y = 1 + Math.sin(t * 2.2) * 0.012;
    this.body.position.y = 0;
    this.head.rotation.set(Math.sin(t * 0.7) * 0.04, Math.sin(t * 0.5) * 0.08, Math.sin(t * 0.9) * 0.05);
    // 尾
    this.tail.forEach((s, i) => {
      s.rotation.z = Math.sin(t * 1.8 - i * 0.5) * 0.18;
      s.rotation.x = 0.12 + Math.sin(t * 1.1 - i * 0.4) * 0.05;
    });
    // 耳郁吓
    this.ears.forEach((e, i) => { e.rotation.x = Math.max(0, Math.sin(t * 3 + i * 7) - 0.96) * 6; });
    // 眨眼
    this.blinkT -= dt;
    let eyeY = 1;
    if (this.blinkT < 0) { eyeY = 0.1; if (this.blinkT < -0.12) this.blinkT = 2 + Math.random() * 3; }
    if (this.happyEyes > 0) this.happyEyes -= dt;
    if (this.faceT > 0) { this.faceT -= dt; if (this.faceT <= 0) this.face = 'normal'; }
    this.applyFace(eyeY);

    const [L, R] = this.arms;
    L.rotation.set(0, 0, -0.25 + Math.sin(t * 2.2) * 0.03);
    R.rotation.set(0, 0, 0.25 - Math.sin(t * 2.2) * 0.03);

    if (this.mode === 'stir') {
      R.rotation.x = -1.0 + Math.sin(t * 8) * 0.25;
      R.rotation.z = 0.35 + Math.cos(t * 8) * 0.25;
    }
    if (this.mode === 'talk') {
      this.head.rotation.x += Math.sin(t * 14) * 0.03;
    }
    if (this.mode === 'pet') {
      this.head.rotation.z = Math.sin(t * 2) * 0.15 + 0.15;
    }

    const a = this.action;
    if (a) {
      a.t += dt;
      const k = Math.min(a.t / a.dur, 1);
      const sw = Math.sin(k * Math.PI);
      switch (a.name) {
        case 'chop': R.rotation.x = -1.4 + sw * 0.9; this.body.position.y = -sw * 0.02; break;
        case 'press': L.rotation.x = R.rotation.x = -1.1; L.rotation.z = -0.25 - sw * 0.5 + 0.6; R.rotation.z = 0.25 + sw * 0.5 - 0.6; this.body.position.y = -sw * 0.03; break;
        case 'wrap': L.rotation.x = R.rotation.x = -1.0 - sw * 0.4; break;
        case 'pour': R.rotation.x = -1.2; R.rotation.y = -sw * 0.6; break;
        case 'wave': R.rotation.z = 2.4 + Math.sin(a.t * 14) * 0.3; break;
        case 'happy':
          this.body.position.y = Math.abs(Math.sin(k * Math.PI * 2)) * 0.18;
          L.rotation.z = -2.3; R.rotation.z = 2.3;
          break;
        case 'sad': this.head.rotation.x = 0.3 * sw; this.ears.forEach((e) => (e.rotation.x = -0.6 * sw)); break;
      }
      if (k >= 1) this.action = null;
    }
  }
}
