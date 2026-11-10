"""Responsive home/book navigation and shared cat grounding regression checks."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173/'
OUT = Path('tmp/home-book-grounding')
OUT.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chromium')
    page = browser.new_page(reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.route('https://fonts.googleapis.com/**', lambda route: route.abort())
    page.route('https://fonts.gstatic.com/**', lambda route: route.abort())
    page.goto(URL, wait_until='domcontentloaded')
    page.wait_for_function('window.__game')
    page.evaluate("""async () => {
        document.querySelector('#start').remove();
        window.ui = await import('/src/ui.js');
        window.screens = await import('/src/screens.js');
        ui.showHUD(true);
        Object.assign(__game.state(), {started:true, shifts:1, level:7, jpLevel:2, chapter:'street'});
        const {VOCAB} = await import('/src/data/vocab.js');
        for (const id of Object.keys(VOCAB).slice(0,40)) __game.state().srs[id]={box:2,due:0,seen:2,right:2,wrong:0};
        ui.renderHUD();
    }""")

    for width, height in [(320,568), (390,844), (547,527), (752,724), (1366,768), (844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        for large in [False, True]:
            page.evaluate('v=>document.body.classList.toggle("large-text",v)', large)
            page.evaluate('ui.closeModal(); __game.hub()')
            page.wait_for_timeout(100)
            assert page.locator('.home-locations').get_attribute('open') is None
            button = page.locator('[data-action="open-shift"]').bounding_box()
            assert button['y'] >= 60 and button['y']+button['height'] <= height, (width,height,button)
            assert page.locator('.home-panel .hub-info').evaluate('(e)=>e.scrollWidth<=e.clientWidth')
            page.locator('.home-locations summary').click()
            assert page.locator('[data-chapter]').count() == 11
            page.locator('[data-chapter="hotel"]').click()
            assert page.evaluate('__game.state().chapter') == 'hotel'
            assert '入住酒店' in page.locator('[data-action="open-shift"]').inner_text()
            assert page.locator('.home-locations').get_attribute('open') is None
            page.wait_for_timeout(450)
            primary_before = page.locator('[data-action="open-shift"]').bounding_box()
            page.locator('.home-panel .hub-info').evaluate('(e)=>e.scrollTop=e.scrollHeight')
            assert page.locator('[data-action="open-shift"]').bounding_box() == primary_before
            if not large:
                page.locator('.home-panel .hub-info').evaluate('(e)=>e.scrollTop=0')
                page.screenshot(path=str(OUT/f'{width}-home.png'))
            page.evaluate('screens.openBook("words")')
            page.wait_for_timeout(450)
            assert page.locator('.word-row').count() > 0
            assert page.locator('.book-progress').count() == 0
            tabs = page.locator('.book-modal > .tabs').bounding_box()
            page.locator('.book-modal .card-body').evaluate('(e)=>e.scrollTop=e.scrollHeight')
            assert page.locator('.book-modal > .tabs').bounding_box() == tabs
            page.get_by_role('button',name='📊 紀錄',exact=True).click()
            assert page.locator('.book-progress').count() == 7
            page.locator('.book-progress summary').first.click()
            cols = page.locator('.book-progress .lv-grid-row').first.evaluate('(e)=>getComputedStyle(e).gridTemplateColumns.split(" ").length')
            assert cols == (4 if width >= 900 else 2), (width,cols)
            assert page.locator('.book-modal .card-body').evaluate('(e)=>e.scrollWidth<=e.clientWidth'), (width,height,large)
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
            if not large:
                page.locator('.book-progress').first.scroll_into_view_if_needed()
                page.screenshot(path=str(OUT/f'{width}-book.png'))
            page.locator('.book-modal .x').click()
        page.evaluate('document.body.classList.remove("large-text")')

    # Entry points clear the home-only layout before starting another activity.
    page.evaluate('__game.hub()')
    page.get_by_role('button',name='每日一句（聽＋講）',exact=False).click()
    assert page.locator('#panel.home-panel').count() == 0

    page.set_viewport_size({'width':653,'height':651})
    soles = page.evaluate("""async () => {
        ui.hidePanel(); ui.closeModal();
        const {Box3} = await import('/node_modules/three/build/three.module.js');
        const cat = __world.cat;
        const result = {};
        cat.action=null; cat.sq=cat.sqV=0;
        for (const stage of ['street','eki','pf','hotel','pharm','kitchen']) {
            __world.catTo(stage);
            for (let i=0;i<60;i++) cat.update(1/60);
            cat.root.updateWorldMatrix(true,true);
            result[stage]=cat.feet.map(f=>new Box3().setFromObject(f).min.y-cat.root.position.y);
        }
        __world.catTo('street'); __world.setView('street',true);
        cat.action={name:'happy',t:0,dur:1}; cat.update(.125);
        result.jump=cat.body.position.y;
        result.shadow=cat.contactShadow.position.y;
        cat.action=null; cat.update(1/60);
        return result;
    }""")
    for stage in ['street','eki','pf','hotel','pharm','kitchen']:
        assert all(abs(y)<.01 for y in soles[stage]), (stage,soles[stage])
    assert soles['jump'] > .1 and soles['shadow'] < .01, soles
    page.evaluate("""async()=>{
        const {CUSTOMERS}=await import('/src/data/shop.js');
        await __world.streetPersonIn(CUSTOMERS.find(c=>c.id==='kuma'));
    }""")
    page.wait_for_timeout(1000)
    page.screenshot(path=str(OUT/'street-grounded.png'))
    assert not errors, errors
    browser.close()
    print('PASS: 24 home/book viewport-font combinations; chapter selection; pinned actions/tabs; progress layout; six grounded stages; jump shadow; no browser errors')
