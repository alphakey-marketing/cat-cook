"""Sushi shop: 貫 counters, wasabi request and soy-dipping question.
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
      const s=S(); Object.assign(s,{started:true,level:3,xp:80,shifts:1,lastDay:today(),lastGift:today(),coins:123,chapter:'sushi'});
      const {RECIPES}=await import('/src/data/recipes.js'); RECIPES.forEach(r=>{s.cooked[r.id]=1;});
      s.settings.subs='show'; save(); document.querySelector('#start').remove();
      const ui=await import('/src/ui.js');ui.showHUD(true);__game.hub();
      const M=__game.minigames;
      for(const k of Object.keys(M)) if(k!=='request') M[k]=async()=>1;
    }""")
    seen = {'kan': False, 'wasabi': False, 'soy': False}
    cases = [('kan', 'salmon_nigiri'), ('wasabi', 'salmon_nigiri'), ('soy', 'tamago_nigiri'), ('kan', 'tamago_nigiri'), ('wasabi', 'tekkamaki')]
    qn = 1
    for kind, dish in cases:
        page.evaluate("""({kind,dish})=>{window.result=null;
          __game.serveCustomer({index:0,tutorial:false,forceDish:dish,plan:[kind]}).then(r=>window.result=r);}""", {'kind': kind, 'dish': dish})
        for _ in range(120):
            if page.evaluate('!!window.result'): break
            title = page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
            choices = page.locator('#panel .choice')
            if choices.count():
                if '客人要' in title:
                    bt = page.locator('#bubbles').inner_text()
                    qn = 2 if ('二貫' in bt or '二つ' in bt) else 3 if ('三貫' in bt or '三つ' in bt) else 1
                    wanted = page.evaluate("async id=>(await import('/src/data/vocab.js')).vocab(id).yue", dish)
                    t = choices.filter(has=page.locator(f'[aria-label="{wanted}"], img[alt="{wanted}"]')).first
                elif '要幾多個' in title:
                    ptxt = page.locator('#panel').inner_text()
                    if '要幾多個' not in ptxt: continue  # panel moved on between reads
                    assert ('貫' in ptxt) == dish.endswith('_nigiri'), (kind, dish, ptxt)
                    seen['kan'] = True
                    t = choices.nth(qn - 1)
                elif '沾豉油' in title:
                    seen['soy'] = True
                    t = choices.filter(has_text='沾魚面')
                elif '山葵' in title:
                    seen['wasabi'] = True
                    t = choices.nth(0)
                else:
                    t = choices.first
                try: t.evaluate('(el)=>el.click()', timeout=1000)
                except Exception: pass
            elif page.locator('#panel .request-actions').count() == 0 and page.locator('#panel button').count():
                try: page.locator('#panel button').last.click(force=True, timeout=500)
                except Exception: pass
            page.wait_for_timeout(100)
        assert page.evaluate('!!window.result'), (kind, dish, errors)
        print('PASS', kind, dish)
    assert all(seen.values()), seen
    assert not errors, errors
    print('PASS sushi interactions', seen)
    browser.close()
