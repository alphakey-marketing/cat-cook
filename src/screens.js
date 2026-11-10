import { art, vocabArt } from './art.js';
import { PHARMACY_WORD_IDS } from './data/pharmacy.js';
import { STREET_WORD_IDS } from './data/street.js';
import { KONBINI_WORD_IDS } from './data/konbini.js';
import { EKI_WORD_IDS } from './data/eki.js';
import { HOTEL_WORD_IDS } from './data/hotel.js';
// 各種彈出畫面：食譜卡、圖鑑、商店、設定、收工總結
import { h, modal, jpLine, applySettings, renderHUD, toast, closeModal } from './ui.js';
import { RECIPES, COMING_SOON } from './data/recipes.js';
import { CHAPTERS } from './data/chapters.js';
import { DARK_RECIPES } from './data/dark.js';
import { secretCard } from './dark.js';
import { VOCAB, vocab } from './data/vocab.js';
import { SHOP } from './data/shop.js';
import { VOICES } from './data/voices.js';
import { S, save, reset, learnedCount, seenCount, msToMidnight } from './save.js';
import { say, sfx, setBGM } from './audio.js';
import { toHTML } from './jp.js';
import { unitProgress, LEVEL_LEARN, CHAPTER_DONE_RATIO, PROGRESS_ROWS } from './data/progress.js';
import { LEVELS, jpLevel, SMALLTALK_LIST, DETAILS, REACT } from './data/phrases.js';

export function isUnlocked(r) {
  const s = S();
  if (r.unlock.level) return s.level >= r.unlock.level;
  if (r.unlock.day) return s.daysPlayed >= r.unlock.day;
  if (r.unlock.darkShift) return (s.chapterShifts.dark || 0) >= r.unlock.darkShift;
  return true;
}
export function unlockText(r) {
  if (r.unlock.level) return `Lv.${r.unlock.level} 解鎖`;
  if (r.unlock.darkShift) return `暗黑食堂完成 ${r.unlock.darkShift} 更解鎖`;
  if (r.unlock.day) {
    const ms = msToMidnight();
    const hh = Math.floor(ms / 3600000), mm = Math.floor((ms % 3600000) / 60000);
    return S().daysPlayed + 1 >= r.unlock.day ? `聽日解鎖（仲有 ${hh}:${String(mm).padStart(2, '0')}）` : `第 ${r.unlock.day} 日解鎖`;
  }
  return '';
}

// 單詞進度：總數只計已解鎖食譜用到嘅字 + 基本字（數字／常用句），未解鎖章節唔計
export function wordProgress() {
  const pool = new Set();
  for (const [id, v] of Object.entries(VOCAB)) if (v.cat === 'num' || v.cat === 'phrase') pool.add(id);
  for (const r of RECIPES.filter(isUnlocked)) {
    pool.add(r.dish);
    r.ingredients.forEach(([id]) => pool.add(id));
    r.steps.forEach((st) => { if (st.verb) pool.add(st.verb); if (st.request) pool.add(st.request); });
  }
  const srs = S().srs;
  Object.keys(srs).forEach((id) => { if (VOCAB[id]) pool.add(id); });   // 玩過嘅字一定計入分母
  const ids = [...pool].filter((id) => VOCAB[id]);
  const learned = ids.filter((id) => srs[id] && srs[id].box >= 2).length;
  const mastered = ids.filter((id) => srs[id] && srs[id].box >= 5).length;
  const seen = ids.filter((id) => srs[id]).length;
  // 分章節：每章用到嘅字（共用字喺每章都計）；食堂章額外計數字同常用句
  const chapters = CHAPTERS.map((c) => {
    const set = new Set();
    if (c.id === 'home') for (const [id, v] of Object.entries(VOCAB)) if (v.cat === 'num' || v.cat === 'phrase') set.add(id);
    for (const r of RECIPES.filter((x) => (x.chapter || 'home') === c.id && isUnlocked(x))) {
      set.add(r.dish);
      r.ingredients.forEach(([id]) => set.add(id));
      r.steps.forEach((st) => { if (st.verb) set.add(st.verb); if (st.request) set.add(st.request); });
    }
    if (c.id === 'konbini') KONBINI_WORD_IDS.forEach((id) => set.add(id));
    if (c.id === 'eki') EKI_WORD_IDS.forEach((id) => set.add(id));
    if (c.id === 'hotel') HOTEL_WORD_IDS.forEach((id) => set.add(id));
    if (c.id === 'pharmacy') PHARMACY_WORD_IDS.forEach((id) => set.add(id));
    if (c.id === 'street') STREET_WORD_IDS.forEach((id) => set.add(id));
    const list = [...set].filter((id) => VOCAB[id]);
    return { id: c.id, name: c.name.split('・')[0], icon: c.icon, total: list.length, learned: list.filter((id) => srs[id] && srs[id].box >= 2).length };
  });
  return { total: ids.length, learned, mastered, seen, unseen: ids.length - seen, chapters };
}

const stars = (n) => '★'.repeat(n) + '☆'.repeat(3 - n);

// 真實食譜卡
export function recipeCard(r, { onStart = null } = {}) {
  const d = vocab(r.dish);
  const body = h('div', { class: 'recipe' },
    h('div', { class: 'recipe-hero' }, h('div', { class: 'big-emo' }, vocabArt(d)), jpLine(d.jp, { yue: d.yue, voice: 'word', size: 'big', autoplay: true })),
    h('div', { class: 'recipe-meta' }, `🍽️ ${r.serves}　⏱️ 現實烹調：${r.time}　${S().stars[r.id] ? stars(S().stars[r.id]) : ''}`),
    h('h3', {}, '材料'),
    h('ul', { class: 'ing-list' }, r.ingredients.map(([id, amt]) => {
      const v = vocab(id);
      return h('li', {},
        h('button', { class: 'mini-spk', 'aria-label': `再聽：${v.yue}`, onclick: () => say(v.jp, 'word') }, '🔊'),
        h('span', { class: 'emo' }, vocabArt(v)),
        h('span', { class: 'jp-inline', html: toHTML(v.jp) }),
        h('span', { class: 'amt' }, amt));
    })),
    h('h3', {}, r.chapter === 'dark' ? '真正捷徑（浮誇菜名唔代表實際工序）' : '做法（真係煮得㗎！）'),
    h('ol', { class: 'howto' }, r.howto.map((t) => h('li', {}, t))),
  );
  if (onStart) {
    const [hero, ...realRecipe] = [...body.children];
    const labels = { pick: '聽日文揀材料', mash: '連撳搓飯糰', timing: '指針入綠色區時撳掣', stir: '手指畫圈攪拌', hold: '長按加熱，綠色區放手', sneak: '點一下開始偷偷做；客人講嘢衝你就再點一下停', season: '先試味再調味', request: '聽客人要求，揀實際做法' };
    const details = h('details', { class: 'real-recipe' }, h('summary', {}, '📖 睇真實食譜、份量同烹調時間'), ...realRecipe);
    body.replaceChildren(hero, h('h3', {}, '今次遊戲步驟'), h('ol', { class: 'howto game-steps' }, r.steps.map(step => h('li', {}, labels[step.type]))), details);
  }
  const footer = onStart ? h('button', { class: 'btn primary big', onclick: () => { sfx('tap'); m.close(); } }, '🔥 開始煮！') : null;
  const m = modal('📖 食譜', body, { onClose: onStart, wide: true, footer });
  return m;
}

// ===== 圖鑑 / 食譜書 =====
export function openBook(tab = 'recipes') {
  const tabs = h('div', { class: 'tabs' });
  const content = h('div', { class: 'tab-content' });
  const T = { recipes: '🍳 食譜', words: '📝 單詞', phrases: '💬 句子', secrets: '🌙 後廚', stats: '📊 紀錄' };
  const show = (t) => {
    tabs.querySelectorAll('button').forEach((b) => {
      b.classList.toggle('on', b.dataset.t === t);
      b.setAttribute('aria-pressed', String(b.dataset.t === t));
    });
    content.parentElement?.scrollTo(0, 0);
    content.innerHTML = '';
    if (t === 'recipes') {
      const grid = h('div', { class: 'book-grid' });
      RECIPES.forEach((r) => {
        const d = vocab(r.dish);
        const ok = isUnlocked(r);
        const c = h('div', { class: `book-card ${ok ? '' : 'locked'}` },
          h('div', { class: 'big-emo' }, ok ? vocabArt(d) : '🔒'),
          h('div', { class: 'jp-inline', html: ok ? toHTML(d.jp) : '？？？' }),
          h('div', { class: 'sub' }, CHAPTERS.find(c => c.id === (r.chapter || 'home')).name),
          h('div', { class: 'sub' }, ok ? (S().stars[r.id] ? stars(S().stars[r.id]) : '未煮過') : unlockText(r)));
        if (ok) c.onclick = () => { sfx('tap'); recipeCard(r); };
        grid.append(c);
      });
      COMING_SOON.forEach((c) => grid.append(h('div', { class: 'book-card locked soon' }, h('div', { class: 'big-emo sil' }, art(`dish_${c.id}`, c.yue)), h('div', { class: 'jp-inline', html: toHTML(c.jp) }), h('div', { class: 'sub' }, '即將推出'))));
      const total = RECIPES.length + COMING_SOON.length;
      const have = RECIPES.filter(isUnlocked).length;
      content.append(h('div', { class: 'progress-line' }, `收集 ${have} / ${total}`, h('div', { class: 'bar' }, h('i', { style: `width:${(have / total) * 100}%` }))), grid);
    } else if (t === 'words') {
      const list = h('div', { class: 'word-list' });
      const ids = Object.keys(S().srs);
      if (!ids.length) list.append(h('p', { class: 'muted' }, '未學到字，去煮嘢先啦！'));
      ids.sort((a, b) => S().srs[b].box - S().srs[a].box).forEach((id) => {
        if (!VOCAB[id]) return;
        const v = vocab(id), r = S().srs[id];
        const lvl = ['🌱', '🌱', '🌿', '🌿', '🌳', '🌸'][r.box];
        list.append(h('div', { class: 'word-row', onclick: () => say(v.jp, 'word') },
          h('span', { class: 'emo' }, vocabArt(v)), h('span', { class: 'jp-inline', html: toHTML(v.jp) }), h('span', { class: 'yue' }, v.yue), h('span', { class: 'lvl', title: '熟練度' }, lvl)));
      });
      const p = wordProgress();
      content.append(h('div', { class: 'progress-line' },
        `識咗 ${p.learned} / ${p.total} 個 · 🌸 熟晒 ${p.mastered} 個`,
        h('div', { class: 'bar' }, h('i', { style: `width:${p.total ? (p.learned / p.total) * 100 : 0}%` })),
        h('div', { class: 'sub' }, `見過 ${p.seen} 個 · 待重溫 ${ids.filter((id) => VOCAB[id] && S().srs[id].due <= Date.now()).length} 個`),
        h('div', { class: 'sub' }, '按單詞聽發音。章節進度可以喺「紀錄」睇。')), list);
    } else if (t === 'phrases') {
      // 閒聊／再見／落單細節：見過先顯示，按等級分組，點一下聽
      const L = jpLevel();
      const all = [...SMALLTALK_LIST, ...DETAILS, ...REACT.bye];
      const seen = all.filter((x) => S().srs[x.key]);
      const total = all.filter((x) => (x.lv ?? 0) <= L).length;
      content.append(h('div', { class: 'progress-line' }, `見過 ${seen.length} 句 · 你而家嘅程度可以遇到 ${total} 句　（🌱→🌸 越溫越熟）`));
      if (!seen.length) content.append(h('p', { class: 'muted' }, '未有句子，開店同客人傾偈先啦！'));
      for (const lv of [0, 1, 2, 3]) {
        const rows = seen.filter((x) => (x.lv ?? 0) === lv).sort((a, b) => S().srs[b.key].box - S().srs[a.key].box);
        if (!rows.length) continue;
        content.append(h('div', { class: 'sub' }, `${LEVELS[lv].icon} ${LEVELS[lv].name}`));
        const list = h('div', { class: 'word-list' });
        rows.forEach((x) => {
          const r = S().srs[x.key];
          const m = ['🌱', '🌱', '🌿', '🌿', '🌳', '🌸'][r.box];
          list.append(h('div', { class: 'word-row', onclick: () => say(x.jp, 'usagi') },
            h('span', { class: 'jp-inline', html: toHTML(x.jp) }), h('span', { class: 'yue' }, x.yue), h('span', { class: 'lvl', title: '熟練度' }, m)));
        });
        content.append(list);
      }
    } else if (t === 'secrets') {
      const collected = DARK_RECIPES.filter(r => S().darkSecrets[r.id]);
      content.append(h('p', { class: 'sub' }, `主廚秘密 ${collected.length} / ${DARK_RECIPES.length} · 完成出餐揭曉後收藏`));
      const shortcuts = [...new Set(collected.map(r => r.shortcut))];
      content.append(h('div', { class: 'dark-pantry' }, ...DARK_RECIPES.map(r => h('span', { class: shortcuts.includes(r.shortcut) ? 'unlocked' : '' }, shortcuts.includes(r.shortcut) ? r.shortcut : '🔒 未揭曉'))));
      DARK_RECIPES.forEach(r => {
        const report = S().darkSecrets[r.id];
        content.append(report ? secretCard(r, report) : h('div', { class: 'dark-locked' }, `${r.number} · ${r.yue}　🔒`));
      });
    } else {
      const s = S();
      const rows = [['🔥 連續日數', `${s.streak} 日`], ['📅 玩咗', `${s.daysPlayed} 日`], ['🐾 招呼客人', `${s.served} 位`], ['🏮 去餐廳', `${s.restaurantDone} 次`], ['📝 識咗單詞', `${wordProgress().learned} 個`], ['💕 小黑好感度', `${s.affection}`]];
      content.append(h('div', { class: 'stats' }, rows.map(([a, b]) => h('div', { class: 'stat' }, h('span', {}, a), h('b', {}, b)))));
      const p = wordProgress();
      content.append(h('h3', {}, '各章單詞收集'),
        ...p.chapters.filter((c) => c.total).map((c) => h('div', { class: 'progress-line' }, `${c.icon} ${c.name} ${c.learned} / ${c.total}`,
          h('div', { class: 'bar' }, h('i', { style: `width:${(c.learned / c.total) * 100}%` })))),
        h('h3', {}, '情境掌握進度'),
        h('p', { class: 'sub' }, '掌握達標：90%。情境練習需兩次一次答啱；餐廳及便利店按重溫熟練度計。按章節睇各程度。'),
        ...PROGRESS_ROWS.map(({ id: ch, label }) => h('details', { class: 'fold book-progress' },
          h('summary', {}, h('b', {}, label)),
          h('div', { class: 'lv-grid-row' }, ...LEVELS.map((l) => {
            const u = unitProgress(ch, l.id), done = u.ratio >= CHAPTER_DONE_RATIO;
            return h('div', { class: `lv-cell ${done ? 'done' : ''} ${jpLevel() === l.id ? 'cur' : ''}`, title: LEVEL_LEARN[ch][l.id] },
              h('b', {}, `${done ? '✅' : l.icon} ${l.name}`),
              h('span', {}, `已掌握 ${u.done} / ${u.total}`),
              h('div', { class: 'bar' }, h('i', { style: `width:${u.ratio * 100}%` })),
              h('small', {}, LEVEL_LEARN[ch][l.id]));
          })))));
    }
  };
  for (const [k, v] of Object.entries(T)) tabs.append(h('button', { 'data-t': k, onclick: () => { sfx('tap'); show(k); } }, v));
  show(tab);
  const { card } = modal('📚 圖鑑', content, { wide: true });
  card.classList.add('book-modal');
  tabs.setAttribute('aria-label', '圖鑑分類');
  card.insertBefore(tabs, card.querySelector('.card-body'));
}

// ===== 商店 =====
export function openShop(world) {
  const grid = h('div', { class: 'shop-grid' });
  const head = h('div', { class: 'shop-coins' });
  const draw = () => {
    const s = S();
    head.replaceChildren(art('ui_coin'), h('b', {}, s.coins));
    grid.innerHTML = '';
    SHOP.forEach((it) => {
      const owned = s.owned.includes(it.id) || s.deco.includes(it.id);
      const worn = it.slot === 'deco' ? s.deco.includes(it.id) : s.wear[it.slot] === it.id;
      let btn;
      if (!owned) {
        btn = h('button', { class: `btn ${s.coins >= it.price ? 'primary' : 'disabled'}` }, `🪙 ${it.price}`);
        btn.onclick = () => {
          if (s.coins < it.price) { sfx('bad'); toast('金幣唔夠，再招呼多啲客人啦！'); return; }
          s.coins -= it.price; sfx('coin'); sfx('perfect');
          if (it.slot === 'deco') s.deco.push(it.id); else { s.owned.push(it.id); s.wear[it.slot] = it.id; }
          save(); apply(world); renderHUD(); draw();
          say(it.jp, 'word');
          toast(`買咗 ${it.yue}！`);
        };
      } else if (it.slot === 'deco') {
        btn = h('button', { class: 'btn ghost' }, '✔ 已擺');
      } else {
        btn = h('button', { class: `btn ${worn ? 'ghost' : ''}` }, worn ? '除低' : '著上');
        btn.onclick = () => { sfx('tap'); s.wear[it.slot] = worn ? (it.slot === 'hat' ? null : null) : it.id; save(); apply(world); draw(); world.cat.happy(); };
      }
      grid.append(h('div', { class: `shop-item ${worn ? 'worn' : ''}` },
        h('div', { class: 'big-emo' }, art(`shop_${it.id}`, it.yue)),
        h('div', { class: 'jp-inline', html: toHTML(it.jp), onclick: () => say(it.jp, 'word') }),
        h('div', { class: 'sub' }, it.yue),
        btn));
    });
  };
  draw();
  world.setView('kitchen');
  modal('🛍️ 商店', h('div', {}, head, grid), { wide: true });
}
export function apply(world) {
  const s = S();
  world.cat.wear(s.wear);
  world.setDeco(s.deco);
}

// ===== 設定 =====
export function openSettings(world) {
  const s = S().settings;
  const row = (label, key, desc) => {
    const inp = h('input', { type: 'checkbox' });
    inp.checked = !!s[key];
    inp.onchange = () => { s[key] = inp.checked; save(); applySettings(); if (key === 'bgm') setBGM(inp.checked); if (key === 'shake') world.shakeOn = inp.checked; sfx('tap'); };
    return h('label', { class: 'set-row' }, h('div', {}, h('b', {}, label), h('div', { class: 'sub' }, desc)), inp);
  };
  const subs = h('input', { type: 'checkbox' });
  subs.checked = s.subs === 'tap';
  subs.onchange = () => { s.subs = subs.checked ? 'tap' : 'show'; save(); sfx('tap'); };
  // 日文程度：之後隨時改，唔會郁字幕設定
  const lvBox = h('div', { class: 'lv-pick' });
  const drawLvBox = () => {
    lvBox.replaceChildren(...LEVELS.map((l) => h('button', {
      class: `btn ${jpLevel() === l.id ? 'primary' : ''}`,
      onclick: () => { S().jpLevel = l.id; save(); sfx('tap'); drawLvBox(); },
    }, `${l.icon} ${l.name}`, h('small', {}, l.learn || l.desc))));
  };
  drawLvBox();
  const credits = Object.values(VOICES).map((v) => `VOICEVOX:${v.name}`).filter((v, i, a) => a.indexOf(v) === i).join('、');
  const body = h('div', { class: 'settings' },
    h('div', { class: 'set-row lv-row' }, h('div', {}, h('b', {}, '📚 日文程度'), h('div', { class: 'sub' }, '決定客人同餐廳對白嘅難度；轉咗之後新句即刻生效')), lvBox),
    row('振假名 ふりがな', 'furigana', '漢字上面顯示讀音'),
    row('羅馬字 Romaji', 'romaji', '例：onigiri'),
    row('廣東話翻譯', 'yue', '每句下面顯示意思'),
    row('加大文字', 'largeText', '放大對白、翻譯同操作說明'),
    h('label', { class: 'set-row' }, h('div', {}, h('b', {}, '🎧 聽力挑戰'), h('div', { class: 'sub' }, '客人落單嘅字幕要撳先見，答啱有雙倍貼士')), subs),
    row('背景音樂', 'bgm', ''),
    row('音效', 'sfx', ''),
    row('畫面震動', 'shake', '切菜、答錯、升級時鏡頭輕震'),
    h('button', { class: 'btn', onclick: () => { save(); location.reload(); } }, '🏠 回到大堂（今次未完嘅單唔計）'),
    h('p', { class: 'credits' }, `🎙️ 語音：${credits}`),
    h('button', { class: 'btn danger', onclick: () => { if (confirm('真係要清除全部進度？')) { reset(); location.reload(); } } }, '清除進度'),
  );
  modal('⚙️ 設定', body);
}

// ===== 收工總結 =====
export function shiftSummary(stat, { onNext, onRest, onShop, firstShift }) {
  const s = S();
  let selected = false;
  const finish = fn => { selected = true; closeModal(); fn(); };
  const locked = RECIPES.filter((r) => !isUnlocked(r));
  const teaser = locked[0];
  const body = h('div', { class: 'summary' },
    h('div', { class: 'sum-big' }, '🎉'),
    firstShift ? h('div', { class: 'panel-title' }, '第一道菜完成！想繼續開舖，定去餐廳試吓？') : null,
    jpLine('お疲{つか}れ様{さま}でした！', { yue: '辛苦晒！（收工講）', voice: 'cat' }),
    h('div', { class: 'sum-grid' },
      h('div', {}, h('b', {}, stat.served), h('span', {}, '位客人')),
      h('div', {}, h('b', {}, `+${stat.coins}`), h('span', {}, '🪙 金幣')),
      h('div', {}, h('b', {}, stat.perfect), h('span', {}, '⭐ 三星')),
      h('div', {}, h('b', {}, `${wordProgress().learned}`), h('span', {}, '📝 識咗字')),
    ),
    stat.dark ? h('div', { class: 'dark-stars', 'data-stars': stat.dark.stars },
      h('div', { class: 'stars-big' }, ...[1, 2, 3].map((n) => h('span', { class: n <= stat.dark.stars ? 'on' : '' }, '★'))),
      ...stat.dark.res.map((r) => h('div', { class: `goal ${r.ok ? 'ok' : ''}` }, `${r.ok ? '✅' : '❌'} ${r.label}`)),
      h('div', { class: 'sub' }, `店舖評分 ⭐ ${(s.darkRating ?? 3).toFixed(2)}`)) : null,
    h('div', { class: 'streak-row' }, ...Array.from({ length: 7 }, (_, i) => h('div', { class: `sd ${i < Math.min(s.streak, 7) ? 'on' : ''}` }, i < Math.min(s.streak, 7) ? '🔥' : i + 1)), h('div', { class: 'sub' }, `連續 ${s.streak} 日！聽日返嚟，禮物會再大啲`)),
    teaser ? h('div', { class: 'teaser' }, h('span', { class: 'big-emo' }, art('ui_lock'), vocabArt(vocab(teaser.dish))), h('div', {}, h('b', { html: toHTML(vocab(teaser.dish).jp) }), h('div', { class: 'sub' }, unlockText(teaser)))) : null,
    h('div', { class: 'sum-btns' },
      h('button', { class: 'btn primary big', onclick: () => finish(onNext) }, firstShift ? '🏮 繼續開舖／返大堂' : '🏠 返大堂／揀章節'),
      onRest ? h('button', { class: 'btn big', onclick: () => finish(onRest) }, '🏮 同小黑去日本餐廳食飯') : null,
      h('button', { class: 'btn', onclick: () => finish(onShop) }, '🛍️ 商店'),
    ),
  );
  modal('收工！', body, { onClose: () => { if (!selected) onNext(); } });
  say('お疲{つか}れ様{さま}でした！', 'cat');
}
