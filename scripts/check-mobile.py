"""Browser regression checks. Requires Python Playwright and a running Vite server."""
import itertools
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173/'
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.on('response', lambda response: errors.append(f'{response.status} {response.url}')
            if response.status >= 400 and '/art/' in response.url else None)
    page.goto(url)
    page.wait_for_function('window.__world')
    page.evaluate("""async () => {
      document.querySelector('#start').remove();
      const ui = await import('/src/ui.js');
      const {CUSTOMERS} = await import('/src/data/shop.js');
      await window.__world.customerIn(CUSTOMERS[0]);
      ui.showHUD(true);
      ui.choose([{label:'Rice ball',value:1},{label:'Soup',value:2}],{cols:2});
      window.testUI = ui;
    }""")
    for (width, height), view in itertools.product(
        [(320,568),(375,667),(390,844),(430,932),(768,1024),(844,390),(1280,800)],
        ['kitchen','serve','cook']
    ):
        page.set_viewport_size({'width':width,'height':height})
        page.evaluate("""view => {
          __world.setView(view,true);
          testUI.bubble(__world,'cust','おにぎりを三つください。ありがとうございます。',
            '唔該畀三個飯糰我，多謝！','word',{play:false});
        }""", view)
        page.wait_for_timeout(500)
        box = page.locator('.bubble').bounding_box()
        assert box['x'] >= 0 and box['x']+box['width'] <= width+1, (width,height,view,box)
        assert box['y'] >= 0 and box['y']+box['height'] <= height+1, (width,height,view,box)
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        # Project all eight bounding-box corners, including the rabbit's tall ears.
        bounds = page.evaluate("""async () => {
          const {Box3,Vector3}=await import('/node_modules/three/build/three.module.js');
          const box=new Box3().setFromObject(__world.customer);
          const points=[];
          for(const x of [box.min.x,box.max.x]) for(const y of [box.min.y,box.max.y])
            for(const z of [box.min.z,box.max.z]) points.push(new Vector3(x,y,z).project(__world.camera));
          return points.map(p=>({x:p.x,y:p.y}));
        }""")
        assert all(-1 <= pt['x'] <= 1 and -1 <= pt['y'] <= 1 for pt in bounds), (width,height,view,bounds)
        print(f'PASS {width}x{height} {view}')
    page.set_viewport_size({'width':390,'height':844})
    page.evaluate("__world.setView('kitchen',true)")
    page.wait_for_timeout(400)
    page.screenshot(path='docs/art-review/mobile-after.png')
    for screen in ['openBook','openShop','openSettings','recipeCard']:
        page.evaluate("""async name => {
          const screens=await import('/src/screens.js');
          if(name==='recipeCard') {
            const {RECIPES}=await import('/src/data/recipes.js');
            screens.recipeCard(RECIPES[0]);
          } else name==='openShop'?screens[name](__world):screens[name]();
        }""", screen)
        page.wait_for_timeout(500)
        assert page.locator('.card').bounding_box()['width'] <= 390
        page.locator('img').evaluate_all('(imgs)=>Promise.all(imgs.map(i=>i.decode()))')
        broken=page.locator('img').evaluate_all('(imgs)=>imgs.filter(i=>!i.complete || !i.naturalWidth).map(i=>i.src)')
        assert not broken, broken
        page.screenshot(path=f'docs/art-review/mobile-{screen}.png')
    page.evaluate("""async()=>{
      const {VOCAB,vocab}=await import('/src/data/vocab.js');
      const {vocabArt}=await import('/src/art.js');
      const {COMING_SOON}=await import('/src/data/recipes.js');
      const {art}=await import('/src/art.js');
      const holder=document.createElement('div');
      for(const id of Object.keys(VOCAB)) holder.append(vocabArt(vocab(id)));
      for(const c of COMING_SOON) holder.append(art(`dish_${c.id}`));
      document.body.append(holder);
      await Promise.all([...holder.querySelectorAll('img')].map(i=>i.decode()));
      holder.remove();
      testUI.clearBubble();
      if(__world.anchors.length) throw Error('Removed bubble still anchored');
    }""")
    assert not errors, errors
    print('PASS screens, vocabulary art, bubble cleanup; no browser errors')
    browser.close()
