"""Chapter data, real cooking controls, mobile UI and order-flow regressions.
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
      const s=S(); Object.assign(s,{started:true,level:3,xp:80,shifts:1,lastDay:today(),lastGift:today(),coins:123});
      const {RECIPES}=await import('/src/data/recipes.js');
      const {VOCAB}=await import('/src/data/vocab.js');
      const {makeDish}=await import('/src/three/models.js');
      if(RECIPES.length!==35) throw Error('Expected 4 original, 12 cafe/izakaya and 7 dark recipes');
      for(const chapter of ['izakaya','cafe','sushi','ramen']) {
        const recipes=RECIPES.filter(r=>r.chapter===chapter);
        if(recipes.length!==6 || recipes.some(r=>r.id==='onigiri')) throw Error('Bad chapter menu');
        for(const r of recipes) {
          if(!makeDish(r.id).children.length) throw Error('Empty model '+r.id);
          for(const id of [...r.ingredients.map(x=>x[0]),...r.steps.flatMap(x=>[...(x.need||[]),...(x.decoys||[]),...(x.verb?[x.verb]:[])])])
            if(!VOCAB[id]) throw Error('Missing word '+id);
          s.cooked[r.id]=1;
        }
      }
      save(); document.querySelector('#start').remove();
      const ui=await import('/src/ui.js');ui.showHUD(true);__game.hub();
    }""")
    for width,height in [(320,568),(390,844),(844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        for chapter in ['izakaya','cafe','home']:
            button=page.locator(f'[data-chapter="{chapter}"]')
            button.click()
            assert button.get_attribute('aria-pressed')=='true'
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    print('PASS chapter menus, models, vocab, mobile selection')
    page.set_viewport_size({'width':390,'height':844})
    # Exercise real ingredient selection and real heat control, without replacing them.
    page.evaluate("""async()=>{
      const {RECIPES}=await import('/src/data/recipes.js');
      const MINIGAMES=__game.minigames;
      window.done=false;MINIGAMES.pick(RECIPES.find(r=>r.id==='edamame').steps[0],__world).then(v=>{window.done=v});
    }""")
    for _ in range(3):
        page.wait_for_function("document.querySelector('.ing-grid')?.dataset.want")
        wanted=page.locator('.ing-grid').get_attribute('data-want')
        page.locator(f'.ing[data-id="{wanted}"]').click()
        page.wait_for_timeout(350)
    page.wait_for_function('window.done===1')
    page.evaluate("""async()=>{
      const {RECIPES}=await import('/src/data/recipes.js');const MINIGAMES=__game.minigames;
      window.done=false;MINIGAMES.hold(RECIPES.find(r=>r.id==='edamame').steps[1],__world).then(v=>window.done=v);
    }""")
    page.locator('.holdbtn').dispatch_event('pointerdown', {'pointerId':1})
    page.wait_for_timeout(1400)
    page.locator('.holdbtn').dispatch_event('pointerup', {'pointerId':1})
    page.wait_for_function('window.done!==false')
    assert page.evaluate('window.done')>=0.75
    print('PASS real ingredient and heat controls')
    # Isolate the order/reward loop by stubbing already-tested cooking mechanics.
    page.evaluate("""async()=>{
      const MINIGAMES=__game.minigames;
      for(const key of Object.keys(MINIGAMES)) MINIGAMES[key]=async()=>1;
      __game.state().settings.subs='show';
    }""")
    cases=[('sushi',0,'kappamaki'),('sushi',1,'salmon_nigiri'),('sushi',2,'inari'),('cafe',0,'instant_coffee'),('cafe',1,'instant_coffee'),('cafe',2,'matcha_latte')]
    for chapter,index,dish in cases:
        page.evaluate("""async ({chapter,index,dish})=>{
          __game.state().chapter=chapter;
          window.result=null;__game.serveCustomer({index,tutorial:false,forceDish:dish}).then(r=>window.result=r);
        }""", {'chapter':chapter,'index':index,'dish':dish})
        for _ in range(240):
            if page.evaluate('!!window.result'): break
            text=page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
            choices=page.locator('#panel .choice')
            if choices.count():
                target=None
                if '客人要' in text:
                    wanted=page.evaluate("async id=>(await import('/src/data/vocab.js')).vocab(id).yue",dish)
                    target=choices.filter(has=page.locator(f'[aria-label="{wanted}"], img[alt="{wanted}"]')).first
                elif '幾多' in text:
                    # Match the numeral shown in the customer's Japanese subtitle.
                    bubble=page.locator('.bubble.cust .jp-text').inner_text()
                    n=2 if '\u4e8c' in bubble else 3 if '\u4e09' in bubble else 1
                    target=choices.nth(n-1)
                elif '改張單' in text: target=choices.filter(has_text='加一份')
                elif '沽清後' in text: target=choices.filter(has_text='焼鳥')
                elif '調製' in text:
                    target=choices.filter(has_text=['熱飲','凍飲','少甜'][index%3])
                else: target=choices.first
                if target is not None and target.count():
                    try: target.evaluate('(el)=>el.click()',timeout=1000)
                    except Exception: pass  # A resolved choice can replace the panel between calls.
            # Level-up and recipe announcements can also need a continuation button.
            if page.locator('#panel .unlock').count():
                page.locator('#panel button').last.click(force=True)
            page.wait_for_timeout(100)
        if not page.evaluate('window.result && window.result.stars===3'):
            page.screenshot(path='docs/art-review/chapter-test-failure.png')
            print(page.locator('#panel').inner_text(), flush=True)
            print(page.locator('#bubbles').inner_text(), flush=True)
            print(errors, flush=True)
            raise AssertionError((chapter,index))
        assert page.evaluate('__world.anchors.size===0') if page.evaluate('__world.anchors instanceof Map') else True
        print('PASS order flow',chapter,index,dish)
    saved=page.evaluate("JSON.parse(localStorage.getItem('catcook_v1'))")
    assert saved['served']==6 and saved['coins']>123
    assert all(saved['regularVisits'].get(k)==1 for k in ['reader','walker','artist'])
    page.reload()
    assert page.evaluate("JSON.parse(localStorage.getItem('catcook_v1')).served")==6
    assert not errors, errors
    print('PASS rewards, regular visits and save reload')
    browser.close()
