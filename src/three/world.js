// 3D 世界：廚房 + 餐廳，鏡頭，粒子
import * as THREE from 'three';
import { Cat } from './cat.js';
import { makeBoard, makePot, makePan, makeDish, makeIngredient, makeProp, makeCustomer, makeDeco, circleTexture, emojiTexture, mat } from './models.js';

const REST_X = 40;

export class World {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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
    this.initEnv();

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
  }

  lights() {
    const hemi = new THREE.HemisphereLight(0xfff4e0, 0x8a6a50, 1.1);
    this.scene.add(hemi);
    this.hemi = hemi;
    const sun = new THREE.DirectionalLight(0xffe6c0, 2.0);
    sun.position.set(3, 6, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -4; sun.shadow.camera.right = 4; sun.shadow.camera.top = 4; sun.shadow.camera.bottom = -2;
    sun.shadow.bias = -0.0005;
    sun.shadow.radius = 4;
    this.sun = sun;
    this.scene.add(sun, sun.target);
    const fill = new THREE.DirectionalLight(0xc0d8ff, 0.5);
    fill.position.set(-4, 3, 2);
    this.scene.add(fill);
    this.fill = fill;
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
    this.skyCanvas = document.createElement('canvas'); this.skyCanvas.width = 256; this.skyCanvas.height = 184;
    this.skyTex = new THREE.CanvasTexture(this.skyCanvas); this.skyTex.colorSpace = THREE.SRGBColorSpace;
    const win = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.0), new THREE.MeshBasicMaterial({ map: this.skyTex }));
    win.position.set(1.4, 2.4, -2.18); k.add(win);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 0.04), mat(0x6b4226));
    frame.position.set(1.4, 2.4, -2.2); k.add(frame);
    const sill = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.06, 0.2), mat(0x6b4226)); sill.position.set(1.4, 1.87, -2.12); sill.castShadow = true; k.add(sill);
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
    this.bulb = bulb;
    bulb.position.set(-0.3, 2.88, -0.4); k.add(bulb);
    const lampLight = new THREE.PointLight(0xffd59a, 3, 5, 1.5); lampLight.position.set(-0.3, 2.8, -0.4); k.add(lampLight);
    this.lampLight = lampLight;
    // 窗外透入嚟嘅光（夜晚係月光）
    this.winLight = new THREE.PointLight(0xaac4ff, 0, 6, 1.2); this.winLight.position.set(1.4, 2.4, -1.4); k.add(this.winLight);
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
      deco_lantern: [new THREE.Vector3(0.6, 2.55, -1.7), k],
      deco_noren: [new THREE.Vector3(0.0, 3.0, -2.1), k],
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

  // ===== 日夜 / 天氣 =====
  initEnv() {
    const q = new URLSearchParams(location.search);
    this.envOverride = { h: q.has('h') ? parseFloat(q.get('h')) : null, w: q.get('w') };
    this.env = { hour: 12, weather: 'clear', night: 0 };
    this.skyAcc = 99;
    this.rainSeeds = Array.from({ length: 46 }, () => [Math.random(), Math.random(), 0.6 + Math.random() * 0.8]);
    this.drops = Array.from({ length: 9 }, () => [Math.random(), Math.random(), 2 + Math.random() * 3, Math.random()]);
    this.stars = Array.from({ length: 34 }, () => [Math.random(), Math.random() * 0.6, Math.random()]);
    this.envClock = 99;
    this.updateEnv();
  }
  pickWeather(date, hour) {
    const m = date.getMonth();
    let hsh = 2166136261;
    for (const ch of `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${Math.floor(hour / 6)}`) hsh = Math.imul(hsh ^ ch.charCodeAt(0), 16777619);
    const r = ((hsh >>> 0) % 1000) / 1000;
    if (r < 0.5) return 'clear';
    if (r < 0.75) return 'cloud';
    if (r < 0.95) return 'rain';
    return m === 11 || m < 2 ? 'snow' : 'rain';
  }
  updateEnv() {
    const d = new Date();
    const hour = this.envOverride.h ?? d.getHours() + d.getMinutes() / 60;
    const weather = ['clear', 'cloud', 'rain', 'snow'].includes(this.envOverride.w) ? this.envOverride.w : this.pickWeather(d, hour);
    this.setEnv(hour, weather);
  }
  setEnv(hour, weather) {
    this.env.hour = hour; this.env.weather = weather;
    const KF = [
      // hour, skyTop, skyBot, hemiSky, hemiGround, hemiInt, sunCol, sunInt, bg, lamp
      [0, 0x0b1030, 0x1c2a55, 0x5a6a9a, 0x2a2438, 0.6, 0x8fa8ff, 0.55, 0x171a34, 5.5],
      [5.5, 0x3b3f7a, 0xf2a37a, 0xb59ab0, 0x5a4a50, 0.75, 0xffa070, 0.9, 0x6a5a7a, 4.5],
      [7.5, 0x7cc4ff, 0xffe6bd, 0xfff0d8, 0x8a6a50, 1.0, 0xffe0b0, 1.8, 0xf3dfc0, 2.4],
      [12, 0x5db6ff, 0xd8f0ff, 0xfff4e0, 0x8a6a50, 1.1, 0xfff0d0, 2.0, 0xf6e3c8, 2.0],
      [16.5, 0x6aa8f0, 0xffd9a0, 0xffe9c8, 0x8a6a50, 1.0, 0xffc080, 1.8, 0xf3d2a8, 2.6],
      [19, 0x4a3a7a, 0xff8a5a, 0xc09aa0, 0x5a4a50, 0.75, 0xff7a50, 1.0, 0x8a5a58, 4.2],
      [21, 0x101640, 0x2a3568, 0x5a6a9a, 0x2a2438, 0.6, 0x8fa8ff, 0.55, 0x171a34, 5.5],
      [24, 0x0b1030, 0x1c2a55, 0x5a6a9a, 0x2a2438, 0.6, 0x8fa8ff, 0.55, 0x171a34, 5.5],
    ];
    let i = 0; while (i < KF.length - 2 && hour >= KF[i + 1][0]) i++;
    const A = KF[i], B = KF[i + 1], f = Math.max(0, Math.min(1, (hour - A[0]) / (B[0] - A[0])));
    const col = (idx) => new THREE.Color(A[idx]).lerp(new THREE.Color(B[idx]), f);
    const num = (idx) => A[idx] + (B[idx] - A[idx]) * f;
    const wx = { clear: [1, 1], cloud: [0.82, 0.88], rain: [0.6, 0.75], snow: [0.72, 0.85] }[weather];
    const grey = new THREE.Color(0x8b93a0);
    const mute = weather === 'clear' ? 0 : weather === 'cloud' ? 0.3 : 0.5;
    this.skyTop = col(1).lerp(grey.clone().multiplyScalar(col(1).getHSL({}).l * 1.6 + 0.3), mute);
    this.skyBot = col(2).lerp(grey.clone().multiplyScalar(col(2).getHSL({}).l * 1.6 + 0.3), mute);
    const night = Math.max(0, Math.min(1, 1 - (num(5) - 0.6) / 0.5));
    this.env.night = night;
    this.hemi.color.copy(col(3)); this.hemi.groundColor.copy(col(4)); this.hemi.intensity = num(5) * (0.5 + 0.5 * wx[1]);
    this.sun.color.copy(col(6)).lerp(grey, mute * 0.5); this.sun.intensity = num(7) * wx[0];
    const bg = col(8).lerp(grey.clone().multiplyScalar(col(8).getHSL({}).l * 1.1 + 0.25), mute * 0.7);
    this.scene.background.copy(bg); this.scene.fog.color.copy(bg);
    this.lampLight.intensity = num(9) * (1 + (1 - wx[1]) * 0.5);
    this.bulb.material.color.set(0xfff1c0).multiplyScalar(0.6 + night * 0.6);
    this.winLight.intensity = night * 1.6 + (1 - night) * 0.35 * wx[1];
    this.winLight.color.set(night > 0.5 ? 0x9fb8ff : 0xfff0d0);
    this.fill.intensity = 0.5 - night * 0.3;
    this.renderer.toneMappingExposure = 1.05 + night * 0.12;
    this.drawSky(0);
  }
  drawSky(t) {
    const c = this.skyCanvas, x = c.getContext('2d'), W = c.width, H = c.height;
    const { hour, weather, night } = this.env;
    const hex = (cc) => '#' + cc.getHexString();
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, hex(this.skyTop)); g.addColorStop(1, hex(this.skyBot));
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    // 星
    if (night > 0.2 && weather !== 'rain') {
      for (const [a, b, tw] of this.stars) { x.globalAlpha = night * (0.5 + 0.5 * Math.sin(t * 2 + tw * 20)) * (weather === 'cloud' ? 0.4 : 1); x.fillStyle = '#fff'; x.fillRect(a * W, b * H, 2, 2); }
      x.globalAlpha = 1;
    }
    // 日 / 月（日 6–18 點，月 18–6 點）
    const isDay = hour >= 6 && hour < 18;
    const prog = isDay ? (hour - 6) / 12 : ((hour + 6) % 24) / 12;
    const sx = 28 + prog * (W - 56), sy = H * 0.78 - Math.sin(prog * Math.PI) * H * 0.58;
    const vis = weather === 'rain' ? 0.25 : weather === 'cloud' ? 0.6 : 1;
    x.globalAlpha = vis;
    if (isDay) {
      const rg = x.createRadialGradient(sx, sy, 4, sx, sy, 46); rg.addColorStop(0, 'rgba(255,240,180,.95)'); rg.addColorStop(0.35, 'rgba(255,220,140,.35)'); rg.addColorStop(1, 'rgba(255,220,140,0)');
      x.fillStyle = rg; x.fillRect(sx - 50, sy - 50, 100, 100);
      x.fillStyle = '#fff4c2'; x.beginPath(); x.arc(sx, sy, 13, 0, 7); x.fill();
    } else {
      const rg = x.createRadialGradient(sx, sy, 6, sx, sy, 40); rg.addColorStop(0, 'rgba(200,215,255,.5)'); rg.addColorStop(1, 'rgba(200,215,255,0)');
      x.fillStyle = rg; x.fillRect(sx - 44, sy - 44, 88, 88);
      x.fillStyle = '#f4f1dc'; x.beginPath(); x.arc(sx, sy, 12, 0, 7); x.fill();
      x.fillStyle = hex(this.skyTop); x.beginPath(); x.arc(sx + 6, sy - 3, 10, 0, 7); x.fill();
    }
    x.globalAlpha = 1;
    // 雲
    const nC = { clear: 3, cloud: 7, rain: 8, snow: 7 }[weather];
    const cc = weather === 'rain' ? [92, 100, 116] : weather === 'cloud' ? [200, 206, 216] : [255, 255, 255];
    const dim = 1 - night * 0.65;
    x.fillStyle = `rgba(${cc[0] * dim | 0},${cc[1] * dim | 0},${cc[2] * dim | 0},${weather === 'clear' ? 0.8 : 0.95})`;
    for (let i = 0; i < nC; i++) {
      const sp = 3 + (i % 3) * 2, cx = ((i * 71 + t * sp) % (W + 80)) - 40, cy = 18 + ((i * 37) % 56), r = weather === 'clear' ? 11 : 15 + (i % 3) * 3;
      x.beginPath(); x.arc(cx, cy, r, 0, 7); x.arc(cx + r * 0.9, cy + 3, r * 0.8, 0, 7); x.arc(cx - r * 0.9, cy + 4, r * 0.7, 0, 7); x.fill();
    }
    // 遠山 + 近樹
    const m = (a, b) => a * (1 - night * 0.8) + b * night * 0.8;
    x.fillStyle = `rgb(${m(122, 28) | 0},${m(154, 40) | 0},${m(122, 56) | 0})`;
    x.beginPath(); x.moveTo(0, H); x.lineTo(0, 120); x.lineTo(46, 88); x.lineTo(84, 116); x.lineTo(130, 78); x.lineTo(176, 112); x.lineTo(W, 92); x.lineTo(W, H); x.fill();
    x.fillStyle = `rgb(${m(86, 18) | 0},${m(128, 30) | 0},${m(92, 40) | 0})`;
    x.beginPath(); x.moveTo(0, H); x.lineTo(0, 150); x.quadraticCurveTo(60, 128, 120, 148); x.quadraticCurveTo(190, 130, W, 152); x.lineTo(W, H); x.fill();
    // 屋仔窗燈（夜晚亮）
    x.fillStyle = `rgb(${m(150, 40) | 0},${m(110, 34) | 0},${m(80, 40) | 0})`; x.fillRect(176, 138, 34, 22);
    x.beginPath(); x.moveTo(170, 139); x.lineTo(193, 120); x.lineTo(216, 139); x.fill();
    x.fillStyle = night > 0.35 ? '#ffd877' : `rgb(${m(230, 60) | 0},${m(220, 60) | 0},${m(190, 70) | 0})`; x.fillRect(184, 144, 8, 8); x.fillRect(196, 144, 8, 8);
    // 雨 / 雪
    if (weather === 'rain') {
      x.strokeStyle = night > 0.5 ? 'rgba(190,205,255,.55)' : 'rgba(255,255,255,.65)'; x.lineWidth = 1.6;
      for (const [a, b, sp] of this.rainSeeds) {
        const yy = ((b + t * sp * 1.4) % 1) * (H + 20) - 10, xx = ((a + t * 0.05 * sp) % 1) * W;
        x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx - 4, yy + 14); x.stroke();
      }
    } else if (weather === 'snow') {
      x.fillStyle = 'rgba(255,255,255,.95)';
      for (const [a, b, sp] of this.rainSeeds) {
        const yy = ((b + t * sp * 0.12) % 1) * (H + 10), xx = ((a + Math.sin(t * sp + a * 9) * 0.02) % 1 + 1) % 1 * W;
        x.beginPath(); x.arc(xx, yy, 1.6 + sp, 0, 7); x.fill();
      }
    }
    // 玻璃水珠
    if (weather === 'rain') {
      for (const [a, b, r, ph] of this.drops) {
        const yy = (b * H + ((t * 6 * ph) % 40)) % H;
        x.fillStyle = 'rgba(255,255,255,.28)'; x.beginPath(); x.ellipse(a * W, yy, r * 0.7, r, 0, 0, 7); x.fill();
        x.fillStyle = 'rgba(255,255,255,.7)'; x.beginPath(); x.arc(a * W - r * 0.25, yy - r * 0.35, r * 0.25, 0, 7); x.fill();
      }
    }
    this.skyTex.needsUpdate = true;
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
    this.view = name;
    if (name === 'kitchen') { this.camTargetPos.set(0.2, 2.75, 5.0); this.camTargetLook.set(0.2, 1.55, 0); }
    if (name === 'cook') { this.camTargetPos.set(-0.3, 2.9, 3.6); this.camTargetLook.set(-0.4, 1.35, -0.1); }
    if (name === 'serve') { this.camTargetPos.set(0.6, 2.5, 4.2); this.camTargetLook.set(0.5, 1.4, 0.3); }
    if (name === 'rest') { this.camTargetPos.set(REST_X - 0.1, 1.95, 4.0); this.camTargetLook.set(REST_X - 0.55, 1.15, -0.4); }
    if (name === 'restTable') { this.camTargetPos.set(REST_X, 2.75, 3.1); this.camTargetLook.set(REST_X, 0.75, 0.3); }
    this.fitAspect();
    if (instant) { this.camPos.copy(this.camTargetPos); this.camLook.copy(this.camTargetLook); }
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
    this.tween({ k: 0 }, { k: 1 }, 0.6, (o) => { m.position.y = Math.abs(Math.sin(o.k * Math.PI * 2)) * 0.25; });
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

  // ===== 粒子 / tween =====
  burst(pos, tex, n = 12, size = 0.08, speed = 0.35) {
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
    const p = new THREE.Vector3(); st.getWorldPosition(p);
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
    const p = new THREE.Vector3();
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
    this.sun.position.set(this.camLook.x + 3, 6, 4);
    this.sun.target.position.set(this.camLook.x, 0, 0);

    this.cat.update(dt);
    const t = this.clock.elapsedTime;
    // 日夜：每 30 秒對返真實時間；天氣動畫 ~12fps
    this.envClock += dt; this.skyAcc += dt;
    if (this.envClock > 30) { this.envClock = 0; this.updateEnv(); this.skyAcc = 0; }
    else if (this.skyAcc > (this.env.weather === 'clear' ? 0.5 : 0.08)) { this.skyAcc = 0; if (this.view !== 'rest' && this.view !== 'restTable') this.drawSky(t); }
    if (this.decoObjs.deco_noren) this.decoObjs.deco_noren.userData.panels.forEach((p, i) => { p.rotation.x = Math.sin(t * 1.3 + i * 1.1) * 0.05; });
    if (this.decoObjs.deco_lantern) this.decoObjs.deco_lantern.userData.glow.intensity = 0.85 + Math.sin(t * 7) * 0.08 + Math.sin(t * 13) * 0.05;
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
    for (const a of this.anchors) {
      const o = a.getObj();
      if (!o) { a.el.style.opacity = 0; continue; }
      const s = this.screenOf(o, a.offsetY);
      a.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
