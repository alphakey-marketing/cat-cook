"""Check all added chapter illustrations and their real mobile consumers. Vite on 5173."""
import json
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
assets = json.loads((ROOT / 'docs/art-review/chapter-art-prompts.json').read_text(encoding='utf-8'))['assets']
assert len(assets) == 57 and len({asset['id'] for asset in assets}) == 57
total = 0
for asset in assets:
    for suffix, folder in [('png', 'public/art'), ('webp', 'public/art/game')]:
        path = ROOT / folder / f"{asset['id']}.{suffix}"
        with Image.open(path) as image:
            assert image.mode == 'RGBA', path
            alpha = image.getchannel('A')
            assert alpha.getextrema() == (0, 255), path
            assert all(alpha.getpixel(point) == 0 for point in [(0, 0), (image.width - 1, 0), (0, image.height - 1), (image.width - 1, image.height - 1)]), path
            if suffix == 'webp':
                assert max(image.size) <= 192, path
                total += path.stat().st_size
assert total < 1024 * 1024, total
print(f'PASS 57 PNG masters and transparent mobile exports, {total // 1024} KiB', flush=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chromium')
    page = browser.new_page(viewport={'width': 390, 'height': 844}, reduced_motion='reduce')
    page.route('**/fonts.googleapis.com/**', lambda route: route.abort())
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto('http://localhost:5173/', wait_until='domcontentloaded')
    page.wait_for_function('window.__game')
    page.evaluate("""async ids => {
      const {vocab}=await import('/src/data/vocab.js');
      const {vocabArt}=await import('/src/art.js');
      const holder=document.createElement('div');
      for(const asset of ids) {
        const id=asset.replace(/^(ing|dish)_/, '');
        const icon=vocabArt(vocab(id));
        if(icon.tagName!=='IMG') throw Error('Emoji fallback: '+asset);
        if(!icon.src.endsWith('/art/game/'+asset+'.webp')) throw Error('Wrong URL: '+asset);
        holder.append(icon);
      }
      document.body.append(holder);
      await Promise.all([...holder.querySelectorAll('img')].map(image=>image.decode()));
      holder.remove();
      const d=new Date(),t=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
      Object.assign(__game.state(),{started:true,jpLevel:0,chapter:'dark',shifts:1,lastDay:t,lastGift:t});
    }""", [asset['id'] for asset in assets])
    page.locator('#start').click()
    page.wait_for_selector('[data-chapter="dark"]')
    for width, height in [(320, 568), (390, 844), (844, 390)]:
        page.set_viewport_size({'width': width, 'height': height})
        assert page.locator('.chapter-tabs img').count() == 5
        assert page.locator('[data-chapter="sushi"] img').get_attribute('src').endswith('/art/game/dish_salmon_nigiri.webp')
        page.wait_for_function("[...document.querySelectorAll('.chapter-tabs img')].every(i=>i.complete&&i.naturalWidth>0)")
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
        for button in page.locator('.chapter-tabs button').all():
            assert button.evaluate('(el)=>el.scrollWidth<=el.clientWidth'), width
        page.locator('#btn-book').evaluate('(el)=>el.click()')
        page.wait_for_function("[...document.querySelectorAll('#modal img')].every(i=>i.complete&&i.naturalWidth>0)")
        assert page.locator('.book-card:not(.soon)').count() == 29
        assert page.locator('.book-card .food-icon').count() == 0
        page.locator('#modal .x').evaluate('(el)=>el.click()')
    page.set_viewport_size({'width': 390, 'height': 844})
    page.locator('#btn-book').evaluate('(el)=>el.click()')
    page.wait_for_function("[...document.querySelectorAll('#modal img')].every(i=>i.complete&&i.naturalWidth>0)")
    page.locator('.book-card').nth(4).scroll_into_view_if_needed()
    page.screenshot(path=str(ROOT / 'docs/art-review/chapter-art-book.png'))
    page.evaluate("""async()=>{
      const {recipeCard}=await import('/src/screens.js');
      const {DARK_RECIPES}=await import('/src/data/dark.js');
      recipeCard(DARK_RECIPES.find(r=>r.id==='dark_coffee'),{onStart:()=>{}});
    }""")
    page.wait_for_function("[...document.querySelectorAll('#modal img')].every(i=>i.complete&&i.naturalWidth>0)")
    page.wait_for_function("getComputedStyle(document.querySelector('#modal .card')).transform==='none'")
    footer=page.locator('.card-footer button').bounding_box()
    assert footer['y']+footer['height'] <= 844
    page.screenshot(path=str(ROOT / 'docs/art-review/chapter-art-recipe.png'))
    page.locator('#modal .x').evaluate('(el)=>el.click()')
    # Check every sushi recipe and its actual ingredient icons at phone sizes.
    sushi_ids = ['kappamaki', 'tekkamaki', 'tamago_nigiri', 'salmon_nigiri', 'inari', 'chirashi']
    for width, height in [(320, 568), (390, 844), (844, 390)]:
        page.set_viewport_size({'width': width, 'height': height})
        for dish in sushi_ids:
            page.evaluate("""async id => {
              const {recipeCard}=await import('/src/screens.js');
              const {CHAPTER_RECIPES}=await import('/src/data/chapters.js');
              recipeCard(CHAPTER_RECIPES.find(r=>r.id===id),{onStart:()=>{}});
            }""", dish)
            page.wait_for_function("[...document.querySelectorAll('#modal img')].every(i=>i.complete&&i.naturalWidth>0)")
            assert page.locator('#modal .food-icon').count() == 0, dish
            assert page.locator('#modal .recipe-hero .big-emo img').get_attribute('src').endswith(f'/art/game/dish_{dish}.webp'), dish
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), (width, dish)
            if width == 390 and dish == 'chirashi':
                page.screenshot(path=str(ROOT / 'docs/art-review/sushi-recipe.png'))
            page.locator('#modal .x').evaluate('(el)=>el.click()')
    assert not errors, errors
    print('PASS all 57 vocabulary images, five illustrated chapter tabs, book and recipe mobile layouts', flush=True)
    browser.close()
