"""Real dark controls and seven recipe order/reveal/save flows. Vite on 5173."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # Use full Chromium: the legacy headless shell leaves stale body paint over WebGL.
    browser = p.chromium.launch(channel='chromium')
    page = browser.new_page(viewport={'width':390,'height':844}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto('http://localhost:5173/')
    page.wait_for_function('window.__game')
    ids = page.evaluate("""async()=>{
      const {DARK_RECIPES}=await import('/src/data/dark.js');
      const {VOCAB}=await import('/src/data/vocab.js');const {makeDish}=await import('/src/three/models.js');
      if(DARK_RECIPES.length!==7) throw Error('Expected seven dark recipes');
      for(const r of DARK_RECIPES) {
        if(!makeDish(r.id).children.length) throw Error('Empty model '+r.id);
        for(const id of [...r.ingredients.map(i=>i[0]), ...r.steps.flatMap(s=>[...(s.need||[]),...(s.decoys||[]),...(s.verb?[s.verb]:[])])])
          if(!VOCAB[id]) throw Error('Missing vocab '+id);
        if(r.steps.some(s=>!__game.minigames[s.type])) throw Error('Missing minigame');
      }
      Object.assign(__game.state(),{started:true,chapter:'dark',level:3,xp:80,shifts:1,coins:123});
      const {today}=await import('/src/save.js');
      __game.state().lastDay=today();__game.state().lastGift=today();
      return DARK_RECIPES.map(r=>r.id);
    }""")
    page.locator('#start').click()
    page.wait_for_selector('[data-chapter="dark"]')
    for width,height in [(320,568),(390,844),(844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        for chapter in ['home','izakaya','cafe','dark']:
            page.locator(f'[data-chapter="{chapter}"]').click()
            assert page.locator(f'[data-chapter="{chapter}"]').get_attribute('aria-pressed')=='true'
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    page.set_viewport_size({'width':390,'height':844})
    page.wait_for_timeout(800)
    page.screenshot(path='docs/art-review/dark-hub.png')
    print('PASS seven recipes, vocab, 3D models, all four mobile chapter tabs', flush=True)
    page.evaluate("""async()=>{
      const {DARK_RECIPES}=await import('/src/data/dark.js');window.controlDone=false;
      __game.minigames.microwave(DARK_RECIPES[0].steps[1],__world).then(v=>window.controlDone=v);
    }""")
    assert page.locator('.micro-display').inner_text()=='00:03'
    page.locator('.dark-control').click()
    page.wait_for_function('window.controlDone===1')
    assert page.locator('.micro-display').inner_text()=='叮！'
    assert page.evaluate('__world.stations.microwave.visible')
    page.screenshot(path='docs/art-review/dark-microwave.png')
    for level in [2,5]:
        page.evaluate("""async()=>{
          const {DARK_RECIPES}=await import('/src/data/dark.js');window.controlDone=false;
          __game.minigames.season(DARK_RECIPES.find(r=>r.id==='dark_rice').steps[2]).then(v=>window.controlDone=v);
        }""")
        for _ in range(level): page.locator('[data-season="add"]').click()
        page.locator('[data-season="taste"]').click()
        if level==5: assert page.locator('[data-season="add"]').is_disabled()
        page.locator('[data-season="serve"]').click()
        page.wait_for_function('window.controlDone!==false')
        assert page.evaluate('window.controlDone') == (1 if level==2 else 0.1) or (level==5 and page.evaluate('window.controlDone')<0.11)
    print('PASS real microwave countdown and balanced/overloaded seasoning', flush=True)
    # Isolate the order/reward flow from cooking gestures, tested above and in check-chapters.py.
    page.evaluate("""()=>{
      Math.random=()=>0.99;window.originalSeason=__game.minigames.season;
      for(const key of Object.keys(__game.minigames)) __game.minigames[key]=async()=>1;
      __game.state().settings.subs='show';
    }""")
    results=[]
    for index,dish in enumerate(ids+['dark_rice','dark_rice']):
        honest=index==7
        overloaded=index==8
        page.evaluate("""({dish,index,overloaded})=>{
          __game.minigames.season=async()=>overloaded?0.1:1;
          __game.state().cooked[dish]=1;window.flowDone=null;
          __game.serveCustomer({index,tutorial:false,forceDish:dish}).then(r=>window.flowDone=r);
        }""", {'dish':dish,'index':index,'overloaded':overloaded})
        for _ in range(320):
            if page.evaluate('!!window.flowDone'): break
            if page.locator('#modal.show [data-secret]').count():
                page.wait_for_function("getComputedStyle(document.querySelector('#modal.show .card')).transform === 'none'")
                report=page.locator('#modal.show [data-secret]')
                assert report.get_attribute('data-secret')==dish
                if dish=='dark_rice':
                    taste=int(report.locator('.dark-scores b').first.inner_text())
                    assert taste<65 if overloaded else taste==100
                if index==0: page.screenshot(path='docs/art-review/dark-reveal.png')
                button=page.locator('.card-footer button')
                box=button.bounding_box()
                assert 0<=box['y'] and box['y']+box['height']<=845, box
                button.evaluate('(el)=>el.click()')
            choices=page.locator('#panel .choice')
            title=page.locator('#panel .panel-title').first
            text=title.inner_text() if title.count() else ''
            if choices.count():
                if '客人要' in text:
                    wanted=page.evaluate("async id=>(await import('/src/data/vocab.js')).vocab(id).yue",dish)
                    target=choices.filter(has=page.locator(f'[aria-label="{wanted}"]')).first
                elif '揀餐具' in text: target=choices.nth(2)
                elif '擺盤' in text: target=choices.nth(1)
                elif '改菜名' in text: target=choices.nth(0 if honest else 1)
                else: target=choices.first
                if target.count(): target.evaluate('(el)=>el.click()')
            page.wait_for_timeout(100)
        assert page.evaluate('!!window.flowDone'), (dish, page.locator('#panel').inner_text(), errors)
        result=page.evaluate('window.flowDone');results.append(result)
        assert result['stars']==(1 if overloaded else 3), result
        print('PASS order, styling, reveal, reward',dish,'overload' if overloaded else 'honest' if honest else 'grand', flush=True)
    # Same taste and recipe gets the same reward regardless of marketing name.
    assert results[6]['coins']==results[7]['coins'], results
    assert results[8]['coins']<results[7]['coins']
    state=page.evaluate('__game.state()')
    assert len(state['darkSecrets'])==7
    assert state['darkSecrets']['dark_rice']['visits']==3
    assert state['darkSecrets']['dark_rice']['bestTaste']==100
    assert state['srs']['moritsukeru']['right']==9
    page.evaluate("async()=>{(await import('/src/screens.js')).openBook('secrets')}")
    assert page.locator('.dark-report').count()==7
    assert page.locator('.dark-pantry .unlocked').count()==7
    page.screenshot(path='docs/art-review/dark-collection.png')
    page.reload()
    saved=page.evaluate("JSON.parse(localStorage.getItem('catcook_v1'))")
    assert len(saved['darkSecrets'])==7 and saved['served']==9
    assert not errors,errors
    print('PASS seven collected secrets, no hype bonus, overload penalty and save reload',flush=True)
    browser.close()
