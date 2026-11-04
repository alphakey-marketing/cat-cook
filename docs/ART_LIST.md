# 黑貓食堂 — Art List & Style Guide

Everything in the 2D UI is an emoji right now. This list covers every icon that needs replacing, the style to draw it in, and ready-to-paste prompts for GPT image generation.

When the art is ready, drop the PNGs into `public/art/` using the filenames below. The code can then swap `emoji` for an image path.

---

## 1. Art direction (read this first)

**Look we want:** a hand-drawn Japanese picture-book (絵本) look, like a cozy diner menu doodled by hand. It should *not* look like glossy 3D, emoji, or "AI app icon".

| Rule | Detail |
|---|---|
| Medium | Flat gouache / colored-pencil look with a light paper grain. Small, uneven brush strokes are good. |
| Outline | Soft **dark-brown** line (`#2b211b`), a bit wobbly and hand-drawn, about 3–4% of the icon width. Never pure black, never vector-perfect. |
| Shading | 1 flat base color + 1 darker shadow shape + 1 small cream highlight. No gradients, no gloss, no glow, no drop shadows. |
| Palette | Warm and slightly muted. Base it on the app colors: cream `#fff8ec`, paper `#f6e9d2`, red `#d7263d`, gold `#f5b82e`, green `#3fa66b`, ink brown `#2b211b`. Avoid neon or very saturated colors. |
| Shape | Chunky, rounded, a little squashed and "cute". Simple silhouette, easy to read at 48px. |
| Angle | Food and objects: straight-on or slight ¾ top view. Same angle across the whole set. |
| Background | **Transparent**. No circle or tile behind the object (the app draws its own card). |
| Faces | Only the cat, customers and phrase icons get faces. Food does **not** get cute faces. |
| Text | No letters or numbers inside the image (the app adds Japanese text itself), except where noted. |

**Our cat, 小黑 (Kuro):** round chubby black cat (`#1c1c24`, not pure black), big round gold-yellow eyes, small pink nose, white chef apron, white chef hat. Calm, kind, a bit sleepy. Body is mostly a round bean shape with stubby limbs.

### Tech specs
- PNG, transparent background, **1024×1024** master (the app will scale down).
- Object fills about 80% of the canvas, centered, with even padding.
- Must still read clearly at **48×48px**. Test by shrinking it before you approve it.
- Filename = the id in the tables below, e.g. `ing_gohan.png`.

---

## 2. Master prompt (paste this first in GPT)

> I'm making a set of game icons for a cozy Japanese-cooking game about a black cat chef. Every image must follow this style exactly:
> hand-drawn Japanese picture-book illustration, flat gouache and colored-pencil texture, soft wobbly dark-brown outline (#2b211b), one flat base color plus one darker shadow shape and one small cream highlight, warm muted palette (cream #fff8ec, red #d7263d, gold #f5b82e, green #3fa66b), chunky rounded cute shapes, slight ¾ top-down view, single centered object filling 80% of the frame, **transparent background**, no text, no gradient, no gloss, no 3D render, no emoji style, no drop shadow.
> I'll ask for icons one at a time. Keep every icon in exactly the same style, line weight and angle as the first one.

Then for each icon just send: **"Next icon: `<subject line from the table>`"**.

**Tips to keep the set consistent**
1. Make 3–4 "anchor" icons first (e.g. `ing_gohan`, `ing_tamago`, `dish_onigiri`, `ui_coin`). Regenerate until you love them.
2. After that, upload those anchors as a reference image with every new request: *"Match the style of this reference exactly."*
3. Ask for a **sheet of 4–6 icons in a grid** in one image if GPT keeps drifting. Same-image items stay more consistent. Then crop them.
4. If you get a white background instead of transparent, ask "same image, transparent background PNG".

---

## 3. Asset list

Priority: **P1** = shows up constantly, do first. **P2** = shows up often. **P3** = nice to have.

### 3.1 Ingredients — 22 icons (P1)
Used in: ingredient picking mini-game, recipe cards, vocab book.

| File | Item | What to draw |
|---|---|---|
| `ing_gohan.png` | ご飯 white rice | A small bowl piled with fluffy white rice, a few visible grains, simple red-brown rice bowl |
| `ing_shio.png` | 塩 salt | Small round ceramic salt pot with a tiny wooden spoon and a little mound of white salt |
| `ing_nori.png` | 海苔 seaweed sheet | One dark-green rectangular nori sheet, slightly curled corner, subtle texture |
| `ing_umeboshi.png` | 梅干し pickled plum | One wrinkly red-pink umeboshi plum, maybe a small shiso leaf under it |
| `ing_sake_fish.png` | 鮭 salmon | A thick salmon fillet, orange with pale fat stripes, small strip of silver skin |
| `ing_mizu.png` | 水 water | A clear glass of water with a small water drop above it, light blue tint |
| `ing_dashi.png` | だし soup stock | A piece of kombu kelp and a small pile of bonito flakes next to a little bowl of golden broth |
| `ing_tofu.png` | 豆腐 tofu | One soft white tofu block on a small leaf or plate, gentle edges |
| `ing_wakame.png` | わかめ wakame | A small tangle of glossy dark-green wakame seaweed |
| `ing_negi.png` | ねぎ green onion | Two long green onion stalks, white bottoms and green tops, a few sliced rings in front |
| `ing_miso.png` | 味噌 miso paste | Small wooden tub of light brown miso paste with a wooden spoon scoop |
| `ing_toriniku.png` | 鶏肉 chicken | A raw chicken thigh piece, pale pink with skin (not a cartoon drumstick) |
| `ing_tamago.png` | 卵 egg | One brown-cream egg, plus one cracked egg showing yolk is OK |
| `ing_tamanegi.png` | 玉ねぎ onion | One round yellow-brown onion with dry papery skin and small root tuft |
| `ing_shoyu.png` | 醤油 soy sauce | Classic Japanese soy sauce dispenser bottle with red cap, dark sauce inside |
| `ing_mirin.png` | みりん mirin | Tall slim bottle with pale golden liquid and plain label (no text) |
| `ing_satou.png` | 砂糖 sugar | Small jar of white sugar cubes, or a little pile of sugar cubes |
| `ing_men.png` | 麺 noodles | A curled bundle of fresh wavy ramen noodles, pale yellow |
| `ing_chashu.png` | チャーシュー chashu | Two round slices of rolled chashu pork, swirl visible, browned edge |
| `ing_moyashi.png` | もやし bean sprouts | A small bunch of white bean sprouts with yellow tips |
| `ing_ninniku.png` | にんにく garlic | One garlic bulb plus one peeled clove |
| `ing_sake_drink.png` | 酒 cooking sake | Small white ceramic tokkuri sake bottle with a tiny ochoko cup |

> Note: `negi` and `tamanegi` currently share the same 🧅 emoji, which is confusing for learners. Drawing them separately fixes this.

### 3.2 Dishes & drinks — 7 icons (P1)
Used in: customer orders, recipe card hero, unlock screen, vocab book. These are the "reward" images, so they can be a bit richer than ingredients.

| File | Item | What to draw |
|---|---|---|
| `dish_onigiri.png` | おにぎり | Triangle rice ball with a nori band at the bottom, on a small bamboo leaf |
| `dish_misoshiru.png` | 味噌汁 | Red-black lacquer bowl of miso soup with tofu cubes, wakame and green onion, light steam |
| `dish_oyakodon.png` | 親子丼 | Donburi bowl with chicken and soft, runny egg over rice, green onion on top, steam |
| `dish_ramen.png` | ラーメン | Ramen bowl with chashu, half soft-boiled egg, nori, green onion, chopsticks resting on top |
| `dish_ocha.png` | お茶 | Japanese teacup (yunomi) with green tea and a little steam |
| `dish_omizu.png` | お水 | Glass of ice water with two ice cubes |
| `dish_biiru.png` | ビール | Beer mug with foam |

**Coming-soon dishes (silhouettes in the book) — 5 icons (P3)**
Draw in full color; the app darkens them into silhouettes.
`dish_tempura.png` shrimp tempura · `dish_sushi.png` nigiri sushi pair · `dish_curry.png` Japanese curry rice · `dish_gyoza.png` pan-fried gyoza · `dish_tamagoyaki.png` rolled omelette slices

### 3.3 Cooking actions — 7 icons (P2)
Used in: vocab book (verbs) and mini-game buttons. Draw the **tool + motion**, using a black cat paw where a hand is needed.

| File | Verb | What to draw |
|---|---|---|
| `verb_kiru.png` | 切る cut | Kitchen knife over a wooden board, with a little motion line |
| `verb_mazeru.png` | 混ぜる mix | Wooden spoon stirring in a bowl, curved swirl motion line |
| `verb_niru.png` | 煮る simmer | Small pot with lid slightly lifted, gentle bubbles and steam |
| `verb_nigiru.png` | 握る press | Two black cat paws shaping a triangle rice ball |
| `verb_tokasu.png` | 溶かす dissolve | Ladle with miso melting into soup, small swirl |
| `verb_yuderu.png` | ゆでる boil | Big pot with rolling boil, noodles in strainer basket |
| `verb_noseru.png` | のせる put on top | Chopsticks placing a slice of chashu onto a bowl, small down arrow motion |

### 3.4 Numbers & people — 6 icons (P2)
Used when a customer orders a quantity, and at the restaurant.

| File | Word | What to draw |
|---|---|---|
| `num_hitotsu.png` | 一つ | 1 onigiri |
| `num_futatsu.png` | 二つ | 2 onigiri side by side |
| `num_mittsu.png` | 三つ | 3 onigiri in a little pyramid |
| `num_hitori.png` | 一人 | 1 small cute animal customer (bunny) standing |
| `num_futari.png` | 二人 | 2 animal customers (bunny + bear) |
| `num_sannin.png` | 三人 | 3 animal customers (bunny + bear + fox) |

### 3.5 Phrases — 15 icons (P2)
Used in the vocab book. Draw **小黑 the cat** doing each gesture (same character every time, upper body, no chef hat needed if it gets in the way).

| File | Phrase | Cat pose / expression |
|---|---|---|
| `phrase_irasshaimase.png` | いらっしゃいませ welcome | Bowing politely with a big welcoming smile |
| `phrase_arigatou.png` | ありがとうございます thank you | Small bow, eyes closed happily |
| `phrase_oishii.png` | おいしい delicious | Holding chopsticks, cheeks puffed, sparkles |
| `phrase_itadakimasu.png` | いただきます | Paws pressed together in front of a bowl |
| `phrase_gochisousama.png` | ごちそうさま | Paws together, empty bowl, satisfied smile |
| `phrase_kudasai.png` | ください please give me | Pointing a paw at a menu |
| `phrase_onegaishimasu.png` | お願いします please | Deep bow, paws together |
| `phrase_okaikei.png` | お会計 the bill | Holding a small paper receipt |
| `phrase_sumimasen.png` | すみません excuse me | Raising one paw to call a waiter |
| `phrase_atsui.png` | 熱い hot | Tongue out, fanning mouth, steam from bowl |
| `phrase_oomori.png` | 大盛り large serving | Looking up at a huge overflowing bowl of rice |
| `phrase_matta.png` | また来ます I'll come again | Waving goodbye at a shop door with noren |
| `phrase_oishikatta.png` | 美味しかった it was delicious | Patting full round tummy, blissful |
| `phrase_hai.png` | はい yes | Holding up a red ⭕ circle sign |
| `phrase_iie.png` | いいえ no | Shaking head, paws crossed in an ✕ |

### 3.6 Shop items — 9 icons (P2)
Used in the shop. Draw the **item on its own** (not worn), so it reads as a product.

| File | Item | What to draw |
|---|---|---|
| `shop_hat_chef.png` | コック帽 chef hat | Puffy white chef hat |
| `shop_hat_hachimaki.png` | はちまき headband | Twisted white headband with a small red circle, knot at the back |
| `shop_hat_straw.png` | 麦わら帽子 straw hat | Straw hat with a red ribbon |
| `shop_neck_bell.png` | 鈴 bell | Gold round cat bell on a red cord |
| `shop_neck_scarf.png` | スカーフ scarf | Small knotted scarf, red with a simple wave (seigaiha) pattern |
| `shop_deco_lantern.png` | 提灯 lantern | Red paper chochin lantern, glowing softly (no text on it) |
| `shop_deco_noren.png` | のれん shop curtain | Indigo noren curtain with 3 panels and a simple white cat-paw mark |
| `shop_deco_bonsai.png` | 盆栽 bonsai | Small pine bonsai in a shallow brown pot |
| `shop_deco_maneki.png` | 招き猫 lucky cat | White maneki-neko with a raised paw, red collar, gold bell |

### 3.7 UI icons — about 25 icons (P1 for top section, P2 for the rest)
These are smaller and simpler than food. Same style, but fewer details and a thicker outline so they read at 24–32px.

**HUD & main buttons (P1)**

| File | Replaces | What to draw |
|---|---|---|
| `ui_coin.png` | 🪙 | Gold coin with a small cat-paw stamp in the middle (also used as a 3D sprite) |
| `ui_streak.png` | 🔥 | Small warm flame, orange and red |
| `ui_book.png` | 📚 | Closed recipe book, red cover, a ribbon bookmark |
| `ui_shop.png` | 🛍️ | Small paper shopping bag with cat-ear handles |
| `ui_settings.png` | ⚙️ | Simple gear, or a cat-paw-shaped gear |
| `ui_speaker.png` | 🔊 | Small speaker with sound waves (used a lot for "listen again") |
| `ui_close.png` | ✕ | Hand-drawn brush ✕ |
| `ui_heart.png` | 💖 | Chubby pink heart (3D sprite when you pet the cat) |
| `ui_paw.png` | 🐾 | Black cat paw print |
| `ui_lock.png` | 🔒 | Small padlock |
| `ui_star_on.png` / `ui_star_off.png` | ★ ☆ | Gold star, and the same star as an empty outline |

**Screens & rewards (P2)**

| File | Replaces | What to draw |
|---|---|---|
| `ui_gift.png` | 🎁 | Gift box wrapped in furoshiki cloth |
| `ui_celebrate.png` | 🎉 | Party popper with confetti |
| `ui_unlock.png` | 🔓 | Open padlock with sparkles |
| `ui_open_shop.png` | 🏮 (開舖 button) | Red lantern (can reuse `shop_deco_lantern`) |
| `ui_listen.png` | 🎧 | Headphones with cat ears |
| `ui_serves.png` | 🍽️ | Plate with chopsticks |
| `ui_timer.png` | ⏱️ | Small kitchen timer |
| `ui_target.png` | 🎯 | Paw-print target / mission flag |
| `ui_xp.png` | ✨ | Small sparkle cluster |
| `ui_rare.png` | ✨ (rare customer) | Big gold sparkle |
| `ui_mic.png` | 🎙️ | Vintage microphone (voice credits) |
| `ui_calendar.png` | 📅 | Tear-off calendar page |
| `ui_stats.png` | 📊 | Little notebook with a bar chart |
| `ui_yen.png` | 💴 | Folded yen banknote (no text) |
| `ui_receipt.png` | 🧾 | Small paper receipt |

**Skill growth stages (P2)** — shown next to each word to show how well you know it, and on the level picker.
`ui_grow_1.png` seed sprout · `ui_grow_2.png` small plant with leaves · `ui_grow_3.png` young tree · `ui_grow_4.png` cherry blossom branch in bloom

**Restaurant stamps (P3)** — look like red ink hanko stamps.
`ui_stamp_hanamaru.png` 💮 flower circle "perfect" · `ui_stamp_maru.png` ⭕ red circle "good" · `ui_stamp_sankaku.png` 🔺 triangle "OK"

**Milestones (P3)**
`ui_medal.png` 🏅 · `ui_trophy.png` 🏆 · `ui_crown.png` 👑

### 3.8 Title screen & branding (P1)

| File | What to draw | Size |
|---|---|---|
| `logo_cat.png` | 小黑 full body, sitting, chef hat and apron, sleepy happy face, holding a wooden ladle. Replaces 🐈‍⬛ on the start screen | 1024×1024, transparent |
| `app_icon.png` | 小黑's face with chef hat on a cream `#fff8ec` round tile, thick outline. For the home-screen icon and favicon | 1024×1024, background allowed |
| `title_bg.png` (optional) | Warm wooden diner counter at night, noren curtain and red lantern, softly blurred, dark brown `#2a1d14` tones so white text stays readable | 1080×1920, portrait |

---

## 4. Totals

| Group | Count | Priority |
|---|---|---|
| Ingredients | 22 | P1 |
| Dishes & drinks | 7 (+5 coming soon) | P1 / P3 |
| HUD & main UI | 12 | P1 |
| Branding | 2–3 | P1 |
| Cooking actions | 7 | P2 |
| Numbers & people | 6 | P2 |
| Phrases | 15 | P2 |
| Shop items | 9 | P2 |
| Other UI, growth, stamps, milestones | ~25 | P2 / P3 |
| **Total** | **~110** | |

Suggested order: anchors → P1 (~45 icons, the game already looks much better) → P2 → P3.

## 5. Not in this list
- The **3D scene** (kitchen, 小黑, customers, pots and food on the counter) is built in code with Three.js shapes, so it doesn't need images. The two 3D sprites that do use art (`ui_coin`, `ui_heart`) are already listed above.
- Customer animals (bunny, bear, fox, tanuki, shiba, maneki) are 3D. If you want portraits for a future "customer book", add 6 more icons in the same style.
