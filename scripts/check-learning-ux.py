"""Learning menus: responsive reachability, filters and real lesson entry points."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173/'
OUT = Path('tmp/learning-ux')
OUT.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chromium')
    page = browser.new_page(reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL)
    page.wait_for_function('window.__game')
    page.evaluate("""async () => {
        document.querySelector('#start').remove();
        (await import('/src/ui.js')).showHUD(true);
        Object.assign(__game.state(), {started:true, shifts:1, level:7, jpLevel:2});
    }""")

    def menu(name):
        page.evaluate('__game.hub()')
        page.get_by_role('button', name=name).click()
        page.wait_for_selector('#panel.learning-panel')

    for width, height in [(320,568), (390,844), (768,1024), (1366,768), (1440,900), (844,390)]:
        page.set_viewport_size({'width': width, 'height': height})
        for name in ['每日一句（聽＋講）', '對話劇場（學口語）']:
            menu(name)
            for large in [False, True]:
                page.evaluate('v=>document.body.classList.toggle("large-text",v)', large)
                page.wait_for_timeout(100)
                for selector in ['.learning-header', '.learning-footer']:
                    box = page.locator(selector).bounding_box()
                    assert box['y'] >= 60 and box['y'] + box['height'] <= height + 1, (width, height, selector, box)
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
                assert page.locator('.learning-content').evaluate('(e)=>e.scrollWidth<=e.clientWidth'), (width, name)
                for box in page.locator('.learning-header button, .learning-footer button').evaluate_all('(es)=>es.map(e=>({w:e.offsetWidth,h:e.offsetHeight}))'):
                    assert box['w'] >= 44 and box['h'] >= 44, box
                before = page.locator('.learning-footer').bounding_box()
                page.locator('.learning-content').evaluate('(e)=>e.scrollTop=e.scrollHeight')
                assert page.locator('.learning-footer').bounding_box() == before
                if not large:
                    page.locator('.learning-content').evaluate('(e)=>e.scrollTop=0')
                    page.screenshot(path=str(OUT / f'{width}-{name[:4]}.png'))
            page.evaluate('document.body.classList.remove("large-text")')

    page.set_viewport_size({'width':390,'height':844})
    menu('每日一句（聽＋講）')
    assert 'N4–N3' in page.locator('.learning-feature').inner_text()
    assert not page.locator('.learning-content > details').first.get_attribute('open')
    page.get_by_text('句庫篩選', exact=False).click()
    page.get_by_role('button', name='N5', exact=False).click()
    assert 'N5' in page.locator('.learning-feature').inner_text()
    assert page.locator('.learning-content > details').first.get_attribute('open') is not None
    page.get_by_role('button', name='開始學習', exact=True).click()
    page.wait_for_selector('#panel:not(.learning-panel) .jp')

    # Reward status and next lesson remain available after today's completion.
    page.evaluate("__game.state().dailyDay=Math.floor((Date.now()-new Date().getTimezoneOffset()*60000)/86400000)")
    menu('每日一句（聽＋講）')
    assert '今日已完成' in page.locator('.learning-feature').inner_text()
    assert page.get_by_role('button', name='再學一句', exact=False).count() == 1
    assert page.get_by_role('button', name='重溫', exact=True).count() == 1

    menu('對話劇場（學口語）')
    page.get_by_role('button', name='玩單集', exact=True).click()
    page.get_by_text('篩選場景', exact=False).click()
    page.get_by_role('button', name='朋友', exact=True).click()
    assert page.locator('.learning-filters').is_visible()
    page.get_by_role('button', name='追連續劇', exact=True).click()
    page.locator('.learning-content > details').first.locator('summary').click()
    page.wait_for_selector('button[aria-disabled="true"]')
    page.locator('.learning-footer button').click()
    page.wait_for_selector('#panel:not(.learning-panel) .panel-title')
    page.evaluate('__game.hub()')
    assert page.locator('#panel.learning-panel').count() == 0
    assert not errors, errors
    browser.close()
    print('PASS: 24 responsive menus; fixed actions; filters; level-matched daily; completion; series locks; lesson entry; class cleanup; no browser errors')
