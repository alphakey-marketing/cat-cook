"""Mobile UX regressions: mission clearance, semantic actions, pause and first dish.
Run against Vite: python -X utf8 scripts/check-mobile-ux.py [url]
"""
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173/'
OUT = Path('tmp/mobile-ux')
OUT.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chromium')
    page = browser.new_page(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True, reduced_motion='reduce')
    errors=[]
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL)
    page.wait_for_function('window.__game')
    page.evaluate("document.querySelector('#start').remove()")
    page.evaluate("""async()=>{const ui=await import('/src/ui.js'); ui.showHUD(true); Object.assign(__game.state(),{started:true,shifts:1,level:5,jpLevel:2}); __game.hub()}""")
    for width,height in [(320,568),(375,667),(390,844),(430,932),(547,527),(752,724),(844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        for screen in ['hub','openBook','openShop','openSettings','recipeCard']:
            page.evaluate("""async name=>{const ui=await import('/src/ui.js');ui.closeModal();const s=await import('/src/screens.js');if(name==='hub')__game.hub();else if(name==='recipeCard'){const {RECIPES}=await import('/src/data/recipes.js');s.recipeCard(RECIPES[0],{onStart:()=>{}})}else if(name==='openBook')s[name]();else s[name](__world)}""", screen)
            page.wait_for_timeout(100)
            if screen!='hub':page.wait_for_function("getComputedStyle(document.querySelector('#modal.show .card')).transform==='none'")
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), (width,height,screen)
            if screen=='hub':
                box=page.locator('[data-action="open-shift"]').bounding_box()
                assert 0<=box['y'] and box['y']+box['height']<=height, (width,height,box)
                assert page.locator('#panel').evaluate('(e)=>e.scrollTop')==0
            elif screen=='recipeCard':
                box=page.locator('.card-footer button').bounding_box()
                assert box['y']+box['height']<=height
                assert not page.locator('.real-recipe').get_attribute('open')
                page.locator('.real-recipe summary').click()
                assert page.locator('.real-recipe').get_attribute('open') is not None
            for selector in ['#hud button','#modal.show .x','#modal.show .mini-spk']:
                for box in page.locator(selector).evaluate_all('(es)=>es.map(e=>{const r=e.getBoundingClientRect();return {w:r.width,h:r.height}})'):
                    assert box['w']>=44 and box['h']>=44,(selector,box)
            if width in [320,390,844]:page.screenshot(path=str(OUT/f'{width}-{screen}.png'))
    print('PASS 35 mobile screens; primary actions visible; 44px controls; recipe details',flush=True)

    page.evaluate("""async()=>{(await import('/src/ui.js')).closeModal();__game.restaurant()}""")
    page.wait_for_selector('.mission-btn')
    page.wait_for_selector('.bubble')
    for width,height in [(320,568),(390,844),(547,527),(752,724),(844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        for large in [False,True]:
            page.evaluate("large=>document.body.classList.toggle('large-text',large)",large)
            page.wait_for_timeout(500)
            mission=page.locator('#taskbar').bounding_box()
            bubble=page.locator('.bubble').bounding_box()
            panel=page.locator('#panel').bounding_box()
            assert bubble['y']>=mission['y']+mission['height'],(width,height,mission,bubble)
            assert bubble['y']+bubble['height']<=panel['y']+1 or bubble['x']+bubble['width']<=panel['x'],(width,height,bubble,panel)
            assert bubble['height']>=44
            if not large:page.screenshot(path=str(OUT/f'{width}-mission.png'))
    page.evaluate("document.body.classList.remove('large-text')")
    page.locator('.mission-btn').click()
    assert '你哋' in page.locator('.mission-details').inner_text()
    page.locator('.x').click()
    assert page.locator('#panel .choice').count()>0
    print('PASS mission never covers dialogue at five sizes, including large text; details open/close',flush=True)

    # Isolated minigames use the same public entry points as cooking.
    game=browser.new_page(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
    game.on('pageerror',lambda e:errors.append(str(e)))
    game.goto(URL);game.wait_for_function('window.__game')
    game.evaluate("""async()=>{document.querySelector('#start').remove();const ui=await import('/src/ui.js');ui.showHUD(true);window.ui=ui;window.clock=await import('/src/gameplay.js');window.recipes=(await import('/src/data/recipes.js')).RECIPES;}""")
    for request in ['hot','iced','less_sugar','no_sugar']:
        game.evaluate("""async id=>{__game.state().jpLevel=2;const r=(await import('/src/data/chapters.js')).REGULARS.find(r=>r.request===id);window.done=null;__game.minigames.request({request:id,jp:r?.jp||'砂糖なしでお願いします',yue:r?.yue||'唔加糖'}).then(v=>window.done=v)}""",request)
        game.wait_for_selector('.request-actions')
        assert game.locator('.pick-prompt').count()==0
        assert game.locator('.veiled').count()==1
        if request=='iced':
            game.locator('[data-request="hot"]').click()
            game.wait_for_timeout(100)
        game.locator(f'[data-request="{request}"]').click()
        game.wait_for_selector('#panel .btn.primary')
        if request=='iced':game.screenshot(path=str(OUT/'request-feedback.png'))
        game.locator('#panel .btn.primary').click()
        game.wait_for_function('window.done!==null')
        assert game.evaluate('window.done')==(.8 if request=='iced' else 1)
    print('PASS four requests use kitchen actions, concealed subtitles, correction and SRS',flush=True)

    game.evaluate("window.done=null;void __game.minigames.mash(recipes[0].steps[1],__world).then(v=>window.done=v)")
    game.wait_for_selector('.ring');game.locator('.ring').tap()
    game.locator('#btn-set').tap()
    frozen=game.locator('.mg-timer i').get_attribute('style')
    game.wait_for_timeout(5500)
    assert game.evaluate('window.done') is None
    assert game.locator('.mg-timer i').get_attribute('style')==frozen
    game.locator('.x').tap()
    game.wait_for_selector('#resume-countdown')
    game.wait_for_selector('#resume-countdown',state='detached')
    for _ in range(9):game.locator('.ring').tap()
    game.wait_for_function('window.done!==null')
    assert game.evaluate('window.done')>=.85
    print('PASS mash survives 5.5s settings pause and 3s resume countdown without lost time',flush=True)

    game.evaluate("window.done=null;void __game.minigames.timing(recipes[0].steps[2],__world).then(v=>window.done=v)")
    game.wait_for_selector('.tneedle');game.wait_for_timeout(100)
    game.locator('#btn-book').click()
    frozen=game.locator('.tneedle').get_attribute('style')
    game.wait_for_timeout(1000)
    assert game.locator('.tneedle').get_attribute('style')==frozen
    game.locator('.x').click();game.wait_for_selector('#resume-countdown',state='detached')
    game.locator('.tapzone').click();game.wait_for_function('window.done!==null')
    # Background visibility pauses the shared clock; nested reasons cannot resume early.
    game.evaluate("Object.defineProperty(document,'hidden',{configurable:true,get:()=>window.testHidden});window.testHidden=true;document.dispatchEvent(new Event('visibilitychange'));clock.pause('modal',true);window.frozen=clock.gameNow();clock.pause('modal',false)")
    game.wait_for_timeout(300)
    assert game.evaluate('clock.isPaused() && clock.gameNow()===window.frozen')
    game.evaluate("window.testHidden=false;document.dispatchEvent(new Event('visibilitychange'));delete document.hidden")
    print('PASS timing freezes behind book; background/nested pause keeps active clock frozen',flush=True)

    game.evaluate("window.done=null;void __game.minigames.hold(recipes.find(r=>r.id==='edamame').steps[1],__world).then(v=>window.done=v)")
    game.wait_for_selector('.holdbtn')
    game.locator('.holdbtn').dispatch_event('pointerdown',{'pointerId':1})
    game.wait_for_timeout(600)
    game.locator('#btn-set').click()
    frozen=game.locator('.gfill').get_attribute('style')
    game.wait_for_timeout(1500)
    assert game.evaluate('window.done') is None
    assert game.locator('.gfill').get_attribute('style')==frozen
    game.locator('.x').click();game.wait_for_selector('#resume-countdown',state='detached')
    game.wait_for_timeout(500)
    assert game.locator('.gfill').get_attribute('style')==frozen
    game.locator('.holdbtn').dispatch_event('pointerdown',{'pointerId':1})
    game.wait_for_timeout(700)
    game.locator('.holdbtn').dispatch_event('pointerup',{'pointerId':1})
    game.wait_for_function('window.done!==null')
    assert game.evaluate('window.done')>=.75

    game.evaluate("window.done=null;void __game.minigames.microwave(recipes.find(r=>r.id==='dark_ding').steps.find(s=>s.type==='microwave'),__world).then(v=>window.done=v)")
    game.wait_for_selector('.micro-display');game.locator('.dark-control').click()
    game.locator('#btn-set').click()
    frozen=game.locator('.micro-display').inner_text()
    game.wait_for_timeout(2400)
    assert game.evaluate('window.done') is None
    assert game.locator('.micro-display').inner_text()==frozen
    game.locator('.x').click();game.wait_for_selector('#resume-countdown',state='detached')
    game.wait_for_function('window.done===1')
    print('PASS paused heat stops safely until re-press; microwave countdown freezes behind settings',flush=True)

    # Full fresh first shift, with real input and rewards (no stubbed minigames).
    first=browser.new_page(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
    first.on('pageerror',lambda e:errors.append(str(e)))
    first.goto(URL);first.wait_for_function('window.__game')
    first.locator('#start').tap();first.wait_for_selector('.choice',timeout=60000)
    first.locator('.choice').first.tap();first.wait_for_selector('.dish-opt',timeout=60000)
    first.locator('.choice').first.tap();first.wait_for_selector('.card-footer button')
    assert '今次遊戲步驟' in first.locator('.recipe').inner_text()
    first.locator('.card-footer button').tap();first.wait_for_selector('.ing-grid')
    for _ in range(4):
        first.wait_for_function("document.querySelector('.ing-grid')?.dataset.want")
        wanted=first.locator('.ing-grid').get_attribute('data-want')
        first.locator(f'.ing[data-id="{wanted}"]').tap();first.wait_for_timeout(350)
    first.wait_for_selector('.ring')
    assert '連撳' in first.locator('.mg-help').inner_text()
    for _ in range(10):first.locator('.ring').tap()
    first.wait_for_selector('.tapzone');first.locator('.tapzone').tap()
    first.wait_for_selector('#modal.show .summary',timeout=60000)
    assert first.evaluate('__game.state().shifts')==1
    assert first.evaluate('__game.state().served')==1
    first.screenshot(path=str(OUT/'first-shift.png'))
    first.locator('.x').tap()
    first.wait_for_selector('[data-action="open-shift"]')
    first.reload();first.wait_for_function('window.__game')
    assert first.evaluate('__game.state().served')==1
    assert first.evaluate('__game.state().settings.furigana')
    print('PASS fresh single-customer tutorial, cooking gestures, rewards, summary dismissal, save reload',flush=True)
    assert not errors,errors
    (OUT/'result.json').write_text(json.dumps({'status':'passed','errors':errors}),encoding='utf8')
    browser.close()
