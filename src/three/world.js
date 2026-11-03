// 3D 世界：廚房 + 餐廳，鏡頭，粒子
import * as THREE from 'three';
import { Cat } from './cat.js';
import { makeBoard, makePot, makePan, makeDish, makeIngredient, makeProp, makeCustomer, makeDeco, circleTexture, emojiTexture, mat } from './models.js';

const REST_X = 40;

export class World {
  constructor(canvas) {
    this.canvas = canvas;
    // 手機：細啲 pixel ratio，高 DPR 唔開 MSAA（慳 GPU）
    this.mobile = matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 700;
    this.dprMax = Math.min(window.devicePixelRatio || 1, this.mobile ? 1.5 : 2);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: !(this.mobile && window.devicePixelRatio >= 2), powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(this.dprMax);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = this.mobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
    this.quality = 2;        // 2 全開 / 1 降解像 / 0 連影子都熄
    this.perfN = 0; this.perfT = 0; this.perfCool = 3;
    this.trauma = 0; this.fovKick = 0; this.baseFov = 42;
    this.reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.shakeOn = true;
    this.springs = [];
    this._v = new THREE.Vector3();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf6e3c8);
    this.scene.fog = new THREE.Fog(0xf6e3c8, 12, 30);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.camTargetPos = new THREE.Vector3();
    this.camTargetLook = new THREE.Vector3();

    this.particles = [];
    this.tweens = [];
    this.anchors = [];
    this.clock = new THREE.Clock();
    this.onCatTap = null;
    this.raycaster = new THREE.Raycaster();

    this.lights();
    this.buildKitchen();
    this.buildRestaurant();

    this.cat = new Cat();
    this.cat.root.position.set(-0.35, 0, -0.6);
    this.kitchen.add(this.cat.root);

    this.texSteam = circleTexture('rgba(255,255,255,0.9)');
    this.texSpark = circleTexture('#ffe680', false);
    this.texHeart = emojiTexture('💖');
    this.texCoin = emojiTexture('🪙');
    this.steamOn = null;

    this.setView('kitchen', true);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    canvas.addEventListener('pointerdown', (e) => this.tap(e));
    this.renderer.setAnimationLoop(() => this.frame());
    // 背景分頁 / 鎖屏：停止渲染，慳電
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.renderer.setAnimationLoop(null);
      else { this.clock.getDelta(); this.renderer.setAnimationLoop(() => this.frame()); }
    });
  }

  lights() {
    const hemi = new THREE.HemisphereLight(0xfff4e0, 0x8a6a50, 1.1);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffe6c0, 2.0);
    sun.position.set(3, 6, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(this.mobile ? 512 : 1024, this.mobile ? 512 : 1024);
    sun.shadow.camera.left = -4; sun.shadow.camera.right = 4; sun.shadow.camera.top = 4; sun.shadow.camera.bottom = -2;
    sun.shadow.bias = -0.0005;
    sun.shadow.radius = 4;
    this.sun = sun;
    this.scene.add(sun, sun.target);
    const fill = new THREE.DirectionalLight(0xc0d8ff, 0.5);
    fill.position.set(-4, 3, 2);
    this.scene.add(fill);
  }

  buildKitchen() {
    const k = new THREE.Group();
    this.kitchen = k;
    this.scene.add(k);
    // 地板
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat(0xc69c6d, { roughness: 0.9 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; k.add(floor);
    for (let i = -6; i < 7; i++) { const l = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 10), mat(0xa47c52)); l.rotation.x = -Math.PI / 2; l.position.set(i * 0.6, 0.002, 0); k.add(l); }
    // 牆
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), mat(0xf7ead2, { roughness: 1 }));
    wall.position.set(0, 3, -2.2); wall.receiveShadow = true; k.add(wall);
    const wainscot = new THREE.Mesh(new THREE.BoxGeometry(14, 1.0, 0.05), mat(0x8b5a3c));
    wainscot.position.set(0, 0.5, -2.17); k.add(wainscot);
    // 窗
    const win = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.0), new THREE.MeshBasicMaterial({ map: this.skyTexture() }));
    win.position.set(1.4, 2.4, -2.18); k.add(win);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 0.04), mat(0x6b4226));
    frame.position.set(1.4, 2.4, -2.2); k.add(frame);
    const bar1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.0, 0.06), mat(0x6b4226)); bar1.position.set(1.4, 2.4, -2.16); k.add(bar1);
    const bar2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.06), mat(0x6b4226)); bar2.position.set(1.4, 2.4, -2.16); k.add(bar2);
    // 餐牌板
    this.menuBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.9), new THREE.MeshBasicMaterial({ map: this.menuTexture([]) }));
    this.menuBoard.position.set(-1.3, 2.45, -2.17); k.add(this.menuBoard);
    // 層架
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.05, 0.3), mat(0x8b5a3c)); shelf.position.set(-0.2, 1.75, -2.05); shelf.castShadow = true; k.add(shelf);
    const jarCols = [0xd9a441, 0xa86b32, 0x3a1a0c, 0xf5e6a8, 0xffffff, 0x6cc24a];
    for (let i = 0; i < 6; i++) {
      const j = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.16 + (i % 2) * 0.06, 14), mat(jarCols[i], { roughness: 0.3 }));
      j.position.set(-0.95 + i * 0.22, 1.86 + (i % 2) * 0.03, -2.0); j.castShadow = true; k.add(j);
    }
    // 吊燈
    const lampShade = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.25, 24, 1, true), mat(0x2c2c2c, { side: THREE.DoubleSide }));
    lampShade.position.set(-0.3, 3.0, -0.4); k.add(lampShade);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08), new THREE.MeshBasicMaterial({ color: 0xfff1c0 }));
    bulb.position.set(-0.3, 2.88, -0.4); k.add(bulb);
    const lampLight = new THREE.PointLight(0xffd59a, 3, 5, 1.5); lampLight.position.set(-0.3, 2.8, -0.4); k.add(lampLight);
    // 櫃台
    const counter = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.0, 0.9), mat(0x6e4429, { roughness: 0.7 }));
    counter.position.set(0, 0.5, 0); counter.castShadow = counter.receiveShadow = true; k.add(counter);
    const top = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.08, 1.0), mat(0xe0c39a, { roughness: 0.5 }));
    top.position.set(0, 1.04, 0); top.receiveShadow = true; top.castShadow = true; k.add(top);
    this.counterY = 1.08;
    // 爐
    const stove = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.5), mat(0x333333)); stove.position.set(-1.1, this.counterY + 0.02, -0.1); k.add(stove);
    const burner = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.02, 6, 24), mat(0x111111)); burner.rotation.x = Math.PI / 2; burner.position.set(-1.1, this.counterY + 0.05, -0.1); k.add(burner);
    this.flame = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 6, 24), new THREE.MeshBasicMaterial({ color: 0x4aa3ff }));
    this.flame.rotation.x = Math.PI / 2; this.flame.position.set(-1.1, this.counterY + 0.07, -0.1); this.flame.visible = false; k.add(this.flame);

    // 工作位：砧板 / 煲 / 鑊
    this.stations = {};
    const board = makeBoard(); board.position.set(0.05, this.counterY, 0.05); k.add(board);
    const pot = makePot(); pot.position.set(-1.1, this.counterY + 0.05, -0.1); k.add(pot);
    const pan = makePan(); pan.position.set(-1.1, this.counterY + 0.05, -0.1); pan.visible = false; k.add(pan);
    this.stations = { board, pot, pan };
    this.workItems = new THREE.Group(); k.add(this.workItems);

    // 上菜位
    this.servePos = new THREE.Vector3(0.75, this.counterY, 0.25);
    // 客人位
    this.customerPos = new THREE.Vector3(1.1, 0, 1.0);
    this.customerSpawn = new THREE.Vector3(3.5, 0, 1.6);
    // 裝修位
    this.decoSlots = {
      deco_lantern: [new THREE.Vector3(1.4, 2.9, -0.6), k],
      deco_noren: [new THREE.Vector3(-0.2, 3.35, -2.1), k],
      deco_bonsai: [new THREE.Vector3(1.55, this.counterY, -0.25), k],
      deco_maneki: [new THREE.Vector3(0.3, 1.78, -2.0), k],
    };
    this.decoObjs = {};
  }

  buildRestaurant() {
    const r = new THREE.Group();
    r.position.x = REST_X;
    this.rest = r;
    this.scene.add(r);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), mat(0xb9a27a, { roughness: 1 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; r.add(floor);
    // 疊蓆紋
    for (let i = -4; i < 5; i++) { const l = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 10), mat(0x6b5a3a)); l.rotation.x = -Math.PI / 2; l.position.set(i * 0.9, 0.002, 0); r.add(l); }
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), mat(0xefe2c4, { roughness: 1 })); wall.position.set(0, 3, -2.5); r.add(wall);
    // 木格
    for (let i = -5; i <= 5; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 6, 0.06), mat(0x5b3a1e)); p.position.set(i * 0.9, 3, -2.45); r.add(p); }
    // 餐牌（木牌）
    const labels = ['おにぎり', '味噌汁', '親子丼', 'ラーメン', 'ビール'];
    labels.forEach((t, i) => {
      const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.9), new THREE.MeshBasicMaterial({ map: this.tagTexture(t) }));
      tag.position.set(-1.2 + i * 0.4, 2.6, -2.4); r.add(tag);
    });
    // 燈籠
    for (const x of [-1.8, 1.8]) { const l = makeDeco('deco_lantern'); l.position.set(x, 2.6, -1.8); r.add(l); }
    // 枱
    const table = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 1.1), mat(0x7a4a2a, { roughness: 0.5 }));
    table.position.set(0, 0.75, 0.3); table.castShadow = table.receiveShadow = true; r.add(table);
    for (const [x, z] of [[-0.8, -0.15], [0.8, -0.15], [-0.8, 0.75], [0.8, 0.75]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, 0.08), mat(0x5b3a1e)); leg.position.set(x, 0.375, z); r.add(leg);
    }
    this.tableY = 0.79;
    this.tableItems = new THREE.Group(); r.add(this.tableItems);
    this.restCatPos = new THREE.Vector3(-0.95, 0, -0.55);
  }

  skyTexture() {
    const c = document.createElement('canvas'); c.width = 128; c.height = 96;
    const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, 96); g.addColorStop(0, '#8fd3ff'); g.addColorStop(1, '#ffe3b0');
    x.fillStyle = g; x.fillRect(0, 0, 128, 96);
    x.fillStyle = '#ffffffcc'; [[30, 30, 14], [44, 26, 12], [90, 40, 10], [100, 36, 8]].forEach(([a, b, r]) => { x.beginPath(); x.arc(a, b, r, 0, 7); x.fill(); });
    x.fillStyle = '#7a9a7a'; x.beginPath(); x.moveTo(0, 96); x.lineTo(40, 60); x.lineTo(70, 80); x.lineTo(100, 55); x.lineTo(128, 75); x.lineTo(128, 96); x.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  tagTexture(text) {
    const c = document.createElement('canvas'); c.width = 80; c.height = 256;
    const x = c.getContext('2d');
    x.fillStyle = '#f3e3c0'; x.fillRect(0, 0, 80, 256);
    x.strokeStyle = '#5b3a1e'; x.lineWidth = 6; x.strokeRect(3, 3, 74, 250);
    x.fillStyle = '#2a1a10'; x.font = 'bold 38px "Noto Serif JP","Yu Mincho",serif'; x.textAlign = 'center';
    const chars = [...text];
    const step = Math.min(48, 220 / chars.length);
    chars.forEach((ch, i) => x.fillText(ch === 'ー' ? '｜' : ch, 40, 44 + i * step));
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  menuTexture(items) {
    const c = document.createElement('canvas'); c.width = 320; c.height = 240;
    const x = c.getContext('2d');
    x.fillStyle = '#2f3b2f'; x.fillRect(0, 0, 320, 240);
    x.strokeStyle = '#8b5a3c'; x.lineWidth = 14; x.strokeRect(0, 0, 320, 240);
    x.fillStyle = '#fff'; x.font = 'bold 30px "Noto Sans JP",sans-serif'; x.textAlign = 'center';
    x.fillText('お品書き', 160, 46);
    x.font = '24px "Noto Sans JP",sans-serif'; x.textAlign = 'left';
    items.forEach((it, i) => { x.fillStyle = it.locked ? '#889' : '#ffeeaa'; x.fillText((it.locked ? '？？？' : it.name), 30, 90 + i * 36); x.textAlign = 'right'; x.fillText(it.locked ? '' : it.price + '円', 290, 90 + i * 36); x.textAlign = 'left'; });
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  setMenu(items) { this.menuBoard.material.map = this.menuTexture(items); this.menuBoard.material.needsUpdate = true; }

  // ===== 鏡頭 =====
  setView(name, instant = false) {
    const prev = this.view;
    this.view = name;
    if (name === 'kitchen') { this.camTargetPos.set(0.2, 2.75, 5.0); this.camTargetLook.set(0.2, 1.55, 0); }
    if (name === 'cook') { this.camTargetPos.set(-0.3, 2.9, 3.6); this.camTargetLook.set(-0.4, 1.35, -0.1); }
    if (name === 'serve') { this.camTargetPos.set(0.6, 2.5, 4.2); this.camTargetLook.set(0.5, 1.4, 0.3); }
    if (name === 'rest') { this.camTargetPos.set(REST_X - 0.1, 1.95, 4.0); this.camTargetLook.set(REST_X - 0.55, 1.15, -0.4); }
    if (name === 'restTable') { this.camTargetPos.set(REST_X, 2.75, 3.1); this.camTargetLook.set(REST_X, 0.75, 0.3); }
    this.fitAspect();
    if (instant) { this.camPos.copy(this.camTargetPos); this.camLook.copy(this.camTargetLook); }
    else if (prev !== name) this.fovKick = 7;   // 轉場：鏡頭輕輕「彈」一下
    this.onView?.(name, instant);
  }
  fitAspect() {
    // 窄身手機：鏡頭拉後啲
    const a = this.camera.aspect || 0.5;
    const pull = a < 0.75 ? (0.75 / a - 1) * 0.55 : 0;
    const dir = this.camTargetPos.clone().sub(this.camTargetLook);
    this.camTargetPos.copy(this.camTargetLook).add(dir.multiplyScalar(1 + pull));
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // 下面有 UI panel，畫面中心推上啲
    this.camera.setViewOffset(w, h, 0, h * 0.17, w, h);
    this.camera.updateProjectionMatrix();
    this.setView(this.view || 'kitchen', true);
  }

  // ===== 小黑搬位 =====
  catTo(place) {
    if (place === 'rest') {
      this.rest.add(this.cat.root);
      this.cat.root.position.copy(this.restCatPos);
      this.cat.root.rotation.y = 0.6;
      this.cat.holding('pad');
    } else {
      this.kitchen.add(this.cat.root);
      this.cat.root.position.set(-0.35, 0, -0.6);
      this.cat.root.rotation.y = 0;
      this.cat.holding(null);
    }
  }
  catFace(target) {
    // target: 'front' | 'stove' | 'board' | 'customer'
    const y = { front: 0, stove: -0.6, board: 0.25, customer: 0.6 }[target] ?? 0;
    this.tween(this.cat.root.rotation, { y }, 0.3);
    const x = target === 'stove' ? -0.75 : -0.35;
    this.tween(this.cat.root.position, { x }, 0.35);
  }

  // ===== 工作台 =====
  useStation(name) {
    this.stations.pot.visible = name !== 'pan';
    this.stations.pan.visible = name === 'pan';
    this.station = name;
  }
  clearWork() { this.workItems.clear(); this.stations.pot.userData.liquid.visible = false; this.stations.pan.userData.liquid.visible = false; this.flame.visible = false; this.steamOn = null; }
  placeIngredient(id, i, n) {
    const m = makeIngredient(id);
    const onBoard = this.station === 'board';
    const base = onBoard ? new THREE.Vector3(0.05, this.counterY + 0.04, 0.05) : new THREE.Vector3(0.05, this.counterY + 0.04, 0.05);
    m.position.copy(base).add(new THREE.Vector3((i - (n - 1) / 2) * 0.17, 0, (i % 2) * 0.08 - 0.04));
    this.popIn(m);
    this.workItems.add(m);
    return m;
  }
  showProp(name) {
    const liquidCol = { miso_soup: 0xc58b4a, ramen_boil: 0xf3e3b8, pan_simmer: 0xb87a3a, oyako_egg: 0xf7c531 };
    if (liquidCol[name]) {
      const st = this.stations[this.station === 'pan' ? 'pan' : 'pot'];
      st.userData.liquid.visible = true;
      st.userData.liquid.material.color.setHex(liquidCol[name]);
      this.flame.visible = true;
      this.steamOn = st;
      this.workItems.children.forEach((c) => this.tween(c.scale, { x: 0.01, y: 0.01, z: 0.01 }, 0.25));
      return;
    }
    const p = makeProp(name);
    if (!p.children.length) return;
    this.workItems.children.forEach((c) => this.tween(c.scale, { x: 0.01, y: 0.01, z: 0.01 }, 0.25));
    p.position.set(0.05, this.counterY + 0.04, 0.05);
    this.popIn(p);
    this.workItems.add(p);
  }
  heat(on) { this.flame.visible = on; if (on) this.steamOn = this.stations[this.station === 'pan' ? 'pan' : 'pot']; }

  // 成品出現
  showDish(id) {
    this.clearWork();
    const d = makeDish(id);
    d.position.copy(this.servePos).add(new THREE.Vector3(-0.7, 0, -0.15));
    d.scale.setScalar(1.6);
    this.popIn(d, 1.6);
    this.kitchen.add(d);
    this.dish = d;
    this.burst(d.position.clone().add(new THREE.Vector3(0, 0.3, 0)), this.texSpark, 24, 0.08);
    setTimeout(() => this.punch(d, -0.18), 350);
    return d;
  }
  slideDishToCustomer() {
    if (!this.dish) return;
    this.tween(this.dish.position, { x: this.servePos.x, z: this.servePos.z + 0.1 }, 0.5);
    this.tween(this.dish.scale, { x: 1.3, y: 1.3, z: 1.3 }, 0.5);
  }
  removeDish() {
    if (!this.dish) return;
    const d = this.dish; this.dish = null;
    this.tween(d.scale, { x: 0.01, y: 0.01, z: 0.01 }, 0.3).then(() => d.parent?.remove(d));
  }

  // ===== 客人 =====
  async customerIn(c) {
    this.customerOut(true);
    const m = makeCustomer(c);
    m.position.copy(this.customerSpawn);
    m.rotation.y = -1.2;
    this.kitchen.add(m);
    this.customer = m;
    await this.walk(m, this.customerPos, 1.1);
    this.punch(m, -0.22);   // 企定個下壓扁一下
    this.tween(m.rotation, { y: -0.9 }, 0.3);
    return m;
  }
  async customerOut(instant = false) {
    const m = this.customer;
    if (!m) return;
    this.customer = null;
    if (instant) { m.parent?.remove(m); return; }
    this.tween(m.rotation, { y: 1.6 }, 0.3);
    await this.walk(m, this.customerSpawn.clone().add(new THREE.Vector3(1, 0, 0.5)), 1.0);
    m.parent?.remove(m);
  }
  walk(m, to, dur) {
    const from = m.position.clone();
    return this.tween({ k: 0 }, { k: 1 }, dur, (o) => {
      m.position.lerpVectors(from, to, o.k);
      m.position.y = Math.abs(Math.sin(o.k * Math.PI * 6)) * 0.06;
    });
  }
  customerJump() {
    const m = this.customer; if (!m) return;
    this.punch(m, 0.3);
    this.tween({ k: 0 }, { k: 1 }, 0.6, (o) => { m.position.y = Math.abs(Math.sin(o.k * Math.PI * 2)) * 0.25; }).then(() => this.punch(m, -0.25));
    this.shake(0.25);
    this.burst(m.position.clone().add(new THREE.Vector3(0, 1.5, 0)), this.texHeart, 6, 0.05, 0.25);
  }
  coinsFromCustomer() {
    if (this.customer) this.burst(this.customer.position.clone().add(new THREE.Vector3(0, 1.2, 0)), this.texCoin, 10, 0.06, 0.2);
  }

  // ===== 裝修 =====
  setDeco(list) {
    for (const id in this.decoSlots) {
      const want = list.includes(id);
      if (want && !this.decoObjs[id]) {
        const d = makeDeco(id);
        const [pos, parent] = this.decoSlots[id];
        d.position.copy(pos);
        parent.add(d);
        this.popIn(d);
        this.decoObjs[id] = d;
      } else if (!want && this.decoObjs[id]) { this.decoObjs[id].parent.remove(this.decoObjs[id]); delete this.decoObjs[id]; }
    }
  }

  // ===== 餐廳 =====
  restClear() { this.tableItems.clear(); }
  restServe(items, n) {
    this.restClear();
    items.forEach((id, i) => {
      for (let p = 0; p < n; p++) {
        const d = makeDish(id);
        const x = (p - (n - 1) / 2) * 0.5 + (i ? 0.18 : -0.05);
        d.position.set(x, this.tableY, i ? 0.25 : 0.5);
        if (i) d.scale.setScalar(1.1);
        this.popIn(d, d.scale.x);
        this.tableItems.add(d);
      }
    });
    this.burst(new THREE.Vector3(REST_X, this.tableY + 0.4, 0.4), this.texSpark, 20, 0.07);
  }

  // ===== 手感：鏡頭微震 / 擠壓拉伸 =====
  shake(amount = 0.3) {
    if (!this.shakeOn || this.reduceMotion) return;
    this.trauma = Math.min(1, this.trauma + amount);
  }
  // 擠壓拉伸：amt>0 拉長（Y 變高 X/Z 變窄），amt<0 壓扁
  punch(obj, amt = 0.2) {
    if (!obj || this.reduceMotion) return;
    let sp = this.springs.find((x) => x.obj === obj);
    if (!sp) { sp = { obj, base: obj.scale.clone(), x: 0, v: 0 }; this.springs.push(sp); }
    sp.v += amt * 22;
  }
  updateSprings(dt) {
    for (let i = this.springs.length - 1; i >= 0; i--) {
      const sp = this.springs[i];
      sp.v += (-180 * sp.x - 12 * sp.v) * dt;
      sp.x += sp.v * dt;
      const o = sp.obj;
      if (Math.abs(sp.x) < 0.001 && Math.abs(sp.v) < 0.01) { o.scale.copy(sp.base); this.springs.splice(i, 1); continue; }
      o.scale.set(sp.base.x * (1 - sp.x * 0.5), sp.base.y * (1 + sp.x), sp.base.z * (1 - sp.x * 0.5));
    }
  }
  // 自動降質：連續一段時間低於 ~40fps 就降 DPR，再唔掂就熄影子
  perfWatch(dt) {
    if (dt > 0.05) return; // 切 tab 回來嗰下唔計
    this.perfT += dt; this.perfN++;
    if (this.perfN < 90) return;
    const avg = this.perfT / this.perfN;
    this.perfT = 0; this.perfN = 0;
    if (this.perfCool > 0) { this.perfCool--; return; }
    if (avg > 0.026 && this.quality > 0) {
      this.quality--;
      if (this.quality === 1) { this.dprMax = Math.max(1, this.dprMax * 0.75); this.renderer.setPixelRatio(this.dprMax); this.resize(); }
      else { this.sun.castShadow = false; this.renderer.shadowMap.enabled = false; this.scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; }); }
      this.perfCool = 2;
    }
  }

  // ===== 粒子 / tween =====
  burst(pos, tex, n = 12, size = 0.08, speed = 0.35) {
    if (this.quality < 2) n = Math.ceil(n / 2);
    n = Math.min(n, Math.max(0, 70 - this.particles.length));
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      s.position.copy(pos);
      s.scale.setScalar(size * (1.5 + Math.random()) * (tex === this.texSpark ? 1 : 2.5));
      const a = Math.random() * Math.PI * 2;
      s.userData = { v: new THREE.Vector3(Math.cos(a) * speed * Math.random() * 2, 0.5 + Math.random() * speed * 3, Math.sin(a) * speed * Math.random()), life: 1, g: -2 };
      this.scene.add(s);
      this.particles.push(s);
    }
  }
  hearts() {
    const p = new THREE.Vector3();
    this.cat.head.getWorldPosition(p);
    this.burst(p.add(new THREE.Vector3(0, 0.4, 0)), this.texHeart, 4, 0.05, 0.15);
  }
  steamPuff(st) {
    if (this.particles.length > 60) return;
    const p = this._v; st.getWorldPosition(p);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.texSteam, transparent: true, opacity: 0.5, depthWrite: false }));
    s.position.copy(p).add(new THREE.Vector3((Math.random() - 0.5) * 0.2, 0.25, (Math.random() - 0.5) * 0.2));
    s.scale.setScalar(0.15);
    s.userData = { v: new THREE.Vector3((Math.random() - 0.5) * 0.1, 0.4, 0), life: 1.4, g: 0, grow: 0.25 };
    this.scene.add(s);
    this.particles.push(s);
  }
  popIn(obj, target = 1) {
    obj.scale.setScalar(0.01);
    return this.tween(obj.scale, { x: target, y: target, z: target }, 0.35, null, 'back');
  }
  tween(obj, to, dur, onUpdate = null, ease = 'out') {
    const from = {};
    for (const k in to) from[k] = obj[k];
    return new Promise((res) => this.tweens.push({ obj, from, to, dur, t: 0, onUpdate, ease, res }));
  }

  tap(e) {
    const r = this.canvas.getBoundingClientRect();
    const m = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(m, this.camera);
    const hit = this.raycaster.intersectObject(this.cat.root, true)[0];
    if (hit && this.onCatTap) this.onCatTap();
  }

  // 3D → 螢幕座標（對白泡泡用）
  screenOf(obj, offsetY = 0) {
    const p = this._v;
    obj.getWorldPosition(p);
    p.y += offsetY;
    p.project(this.camera);
    return { x: (p.x * 0.5 + 0.5) * window.innerWidth, y: (-p.y * 0.5 + 0.5) * window.innerHeight, behind: p.z > 1 };
  }
  anchor(el, getObj, offsetY) { this.anchors.push({ el, getObj, offsetY }); }
  unanchor(el) { this.anchors = this.anchors.filter((a) => a.el !== el); }

  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    // 鏡頭
    const k = 1 - Math.pow(0.02, dt);
    this.camPos.lerp(this.camTargetPos, k);
    this.camLook.lerp(this.camTargetLook, k);
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.camLook);
    if (this.trauma > 0) {
      const a = this.trauma * this.trauma;
      this.camera.position.x += (Math.random() - 0.5) * 0.16 * a;
      this.camera.position.y += (Math.random() - 0.5) * 0.16 * a;
      this.camera.rotation.z += (Math.random() - 0.5) * 0.035 * a;
      this.trauma = Math.max(0, this.trauma - dt * 1.8);
    }
    if (this.fovKick > 0.01) {
      this.fovKick *= Math.pow(0.004, dt);
      this.camera.fov = this.baseFov + this.fovKick;
      this.camera.updateProjectionMatrix();
    } else if (this.camera.fov !== this.baseFov) { this.camera.fov = this.baseFov; this.camera.updateProjectionMatrix(); }
    this.sun.position.set(this.camLook.x + 3, 6, 4);
    this.sun.target.position.set(this.camLook.x, 0, 0);

    this.cat.update(dt);
    this.updateSprings(dt);
    this.perfWatch(dt);
    const t = this.clock.elapsedTime;
    if (this.customer) {
      this.customer.userData.head.rotation.z = Math.sin(t * 2) * 0.08;
      if (this.customer.userData.wave) this.customer.userData.wave.rotation.z = -0.3 + Math.sin(t * 6) * 0.4;
    }
    if (this.decoObjs.deco_maneki?.userData.wave) this.decoObjs.deco_maneki.userData.wave.rotation.z = -0.3 + Math.sin(t * 4) * 0.4;
    if (this.decoObjs.deco_lantern) this.decoObjs.deco_lantern.rotation.z = Math.sin(t * 0.8) * 0.05;
    if (this.flame.visible) this.flame.scale.setScalar(1 + Math.sin(t * 30) * 0.05);
    if (this.steamOn && Math.random() < dt * 8) this.steamPuff(this.steamOn);

    // tweens
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.t += dt;
      let e = Math.min(tw.t / tw.dur, 1);
      if (tw.ease === 'out') e = 1 - Math.pow(1 - e, 3);
      else if (tw.ease === 'back') { const c = 1.70158; e = 1 + (c + 1) * Math.pow(e - 1, 3) + c * Math.pow(e - 1, 2); }
      for (const key in tw.to) tw.obj[key] = tw.from[key] + (tw.to[key] - tw.from[key]) * e;
      tw.onUpdate?.(tw.obj);
      if (tw.t >= tw.dur) { this.tweens.splice(i, 1); tw.res(); }
    }
    // particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i], u = p.userData;
      u.life -= dt;
      u.v.y += u.g * dt;
      p.position.addScaledVector(u.v, dt);
      if (u.grow) p.scale.addScalar(u.grow * dt);
      p.material.opacity = Math.max(0, Math.min(1, u.life)) * (u.grow ? 0.5 : 1);
      if (u.life <= 0) { this.scene.remove(p); p.material.dispose(); this.particles.splice(i, 1); }
    }
    // 對白泡泡跟住 3D 物件
    if (this.anchors.length) for (const a of this.anchors) {
      const o = a.getObj();
      if (!o) { a.el.style.opacity = 0; continue; }
      const s = this.screenOf(o, a.offsetY);
      a.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
