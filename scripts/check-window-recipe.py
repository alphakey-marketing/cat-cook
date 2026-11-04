"""Check window depth separation and no-scroll recipe continuation on mobile."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173/'
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width':390,'height':844}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(url)
    page.wait_for_function('window.__world')
    page.evaluate("document.querySelector('#start').remove()")
    # The backing must be wholly behind the sky, and the bars wholly in front.
    # This catches coplanar faces and actual geometry intersections, not just draw order.
    layers = page.evaluate("""() => {
      const meshes=__world.kitchen.children;
      const sky=meshes.find(m=>m.geometry?.type==='PlaneGeometry' && m.geometry.parameters.width===1.4);
      const backing=meshes.find(m=>m.geometry?.type==='BoxGeometry' && m.geometry.parameters.width===1.5);
      const bars=meshes.filter(m=>m.geometry?.type==='BoxGeometry' && m.geometry.parameters.depth===0.06 && m.position.x===1.4);
      return {sky:sky.position.z, backingFront:backing.position.z+backing.geometry.parameters.depth/2,
        barsBack:bars.map(b=>b.position.z-b.geometry.parameters.depth/2)};
    }""")
    assert layers['sky'] - layers['backingFront'] > 0.005, layers
    assert len(layers['barsBack']) == 2 and all(z - layers['sky'] > 0.005 for z in layers['barsBack']), layers
    page.screenshot(path='docs/art-review/window-fixed.png')
    print('PASS window: no overlapping sky, backing or bars')

    for width,height in [(320,568),(390,844),(430,932),(844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        count = page.evaluate("""async () => {
          const {RECIPES}=await import('/src/data/recipes.js');return RECIPES.length;
        }""")
        for index in range(count):
            page.evaluate("""async index => {
              const {recipeCard}=await import('/src/screens.js');
              const {RECIPES}=await import('/src/data/recipes.js');
              window.continued=0;
              recipeCard(RECIPES[index], {onStart:()=>window.continued++});
            }""", index)
            page.wait_for_timeout(60)
            button=page.locator('.card-footer button')
            box=button.bounding_box()
            assert 0 <= box['y'] and box['y']+box['height'] <= height+1, (width,height,index,box)
            assert box['height'] >= 44, box
            assert page.locator('.card-body').evaluate('(el)=>el.scrollTop') == 0
            # Still reachable after reading all ingredients and instructions.
            page.locator('.card-body').evaluate('(el)=>el.scrollTop=el.scrollHeight')
            after=button.bounding_box()
            assert abs(box['y']-after['y']) < 1, (box,after)
            page.locator('.card-body').evaluate('(el)=>el.scrollTop=0')
            if width == 390 and index == 0:
                page.screenshot(path='docs/art-review/recipe-fixed.png')
            button.click()
            assert page.evaluate('window.continued') == 1
            assert not page.locator('#modal').evaluate('(el)=>el.classList.contains("show")')
        print(f'PASS {width}x{height}: {count} recipes continue without scrolling')
    page.evaluate("""async()=>{
      const {recipeCard}=await import('/src/screens.js');
      const {RECIPES}=await import('/src/data/recipes.js');recipeCard(RECIPES[0]);
    }""")
    assert page.locator('.card-footer').count() == 0, 'Reading-only recipe should have no start button'
    assert not errors, errors
    browser.close()
