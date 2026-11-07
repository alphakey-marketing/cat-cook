"""Ramen shop: ticket machine, noodle hardness and soup strength requests.
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
      const s=S(); Object.assign(s,{started:true,level:3,xp:80,shifts:1,lastDay:today(),lastGift:today(),coins:123,chapter:'ramen'});
      const {RECIPES}=await import('/src/data/recipes.js'); RECIPES.forEach(r=>{s.cooked[r.id]=1;});
      s.settings.subs='show'; save(); document.querySelector('#start').remove();
      const ui=await import('/src/ui.js');ui.showHUD(true);__game.hub();
      const M=__game.minigames;
      for(const k of Object.keys(M)) if(k!=='request') M[k]=async()=>1;
    }""")
    seen = {'ticket': False, 'noodle': False, 'soup': False}
    import sys
    ALL = [('noodle', 'tonkotsu_ramen'), ('soup', 'chahan'), ('noodle', 'tsukemen'), ('soup', 'shio_ramen'), ('noodle', 'shoyu_ramen'), ('soup', 'miso_ramen')]
    part = int(sys.argv[1]) if len(sys.argv) > 1 else 0  # 無頭瀏覽器連跑太多次會 crash，分三批
    cases = ALL[part * 2:part * 2 + 2]
    for kind, dish in cases:
        page.evaluate("""({kind,dish})=>{window.result=null;
          __game.serveCustomer({index:0,tutorial:false,forceDish:dish,plan:[kind]}).then(r=>window.result=r);}""", {'kind': kind, 'dish': dish})
        for _ in range(400):
            if page.evaluate('!!window.result'): break
            title = page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
            choices = page.locator('#panel .choice')
            if choices.count():
                if '食券機' in title:
                    seen['ticket'] = True
                    assert page.locator('#panel .ticket-price').count() >= 1
                    wanted = page.evaluate("async id=>(await import('/src/data/vocab.js')).vocab(id).yue", dish)
                    t = choices.filter(has=page.locator(f'[aria-label="{wanted}"], img[alt="{wanted}"], .emo:has-text("{wanted}")')).first
                    if not t.count(): t = choices.first
                elif '麵條' in title:
                    seen['noodle'] = True; t = choices.nth(0)
                elif '湯底' in title:
                    seen['soup'] = True; t = choices.nth(0)
                else:
                    t = choices.first
                try: t.evaluate('(el)=>el.click()', timeout=1000)
                except Exception: pass
            elif page.locator('#panel .request-actions').count() == 0 and page.locator('#panel button').count():
                try: page.locator('#panel button').last.click(force=True, timeout=500)
                except Exception: pass
            page.wait_for_timeout(100)
        assert page.evaluate('!!window.result'), (kind, dish, errors)
        assert dish == 'chahan' or seen[kind], (kind, dish, seen)  # 炒飯冇麵硬度／湯濃淡要求
        print('PASS', kind, dish)
    assert seen['ticket'], seen
    assert not errors, errors
    print('PASS ramen interactions', seen)
    browser.close()
