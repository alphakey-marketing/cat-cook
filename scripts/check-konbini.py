"""Konbini cashier shift: scan items, bag/heat/cutlery/point questions, payment and change.
Requires a running Vite dev server and Python Playwright.
"""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 390, 'height': 844}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto('http://localhost:5173/')
    page.wait_for_function('window.__game')
    page.evaluate("""async () => {
      const {today}=await import('/src/save.js');const {state:S,save}=__game;
      const s=S(); Object.assign(s,{started:true,level:3,xp:80,shifts:1,lastDay:today(),lastGift:today(),coins:123,chapter:'konbini'});
      s.settings.subs='show'; save(); document.querySelector('#start').remove();
      const ui=await import('/src/ui.js');ui.showHUD(true);__game.hub();
    }""")
    seen = {'scan': False, 'ask': False, 'change': False}
    for n in range(3):
        page.evaluate("()=>{window.result=null;__game.cashierServe({index:0}).then(r=>window.result=r);}")
        for _ in range(500):
            if page.evaluate('!!window.result'): break
            title = page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
            if page.locator('#panel .scan-item').count():
                if not seen['scan']:
                    for width, height in [(320, 568), (390, 844), (844, 390)]:
                        page.set_viewport_size({'width': width, 'height': height})
                        page.wait_for_function("[...document.querySelectorAll('.scan-item img')].every(i=>i.complete&&i.naturalWidth>0)")
                        assert page.locator('.scan-item img').count() == page.locator('.scan-item').count()
                        for image in page.locator('.scan-item img').all():
                            assert '/art/game/goods_' in image.get_attribute('src')
                            assert image.get_attribute('alt')
                        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
                        for button in page.locator('.scan-item').all():
                            assert button.evaluate('(el)=>el.scrollWidth<=el.clientWidth'), width
                        if width == 390:
                            page.screenshot(path='docs/art-review/konbini-scan.png')
                    page.set_viewport_size({'width': 390, 'height': 844})
                seen['scan'] = True
                for i in range(page.locator('#panel .scan-item').count()):
                    try: page.locator('#panel .scan-item').nth(i).evaluate('(el)=>el.click()', timeout=500)
                    except Exception: pass
            elif page.locator('#panel .choice').count():
                if '找幾多' in title:
                    seen['change'] = True
                    txt = page.locator('#panel .panel-title').inner_text()
                    import re
                    nums = [int(x) for x in re.findall(r'\d+', txt)]
                    want = nums[0] - nums[1]
                    t = page.locator('#panel .choice').filter(has_text=f'{want} 円').first
                else:
                    seen['ask'] = True
                    t = page.locator('#panel .choice').nth(0)
                try: t.evaluate('(el)=>el.click()', timeout=500)
                except Exception: pass
            page.wait_for_timeout(100)
        assert page.evaluate('!!window.result'), (n, errors)
        r = page.evaluate('window.result')
        assert r['coins'] > 0 and 1 <= r['stars'] <= 3, r
        print('PASS cashier', n, r)
    assert seen['scan'] and seen['ask'], seen
    assert not errors, errors
    print('PASS konbini', seen)
    browser.close()
