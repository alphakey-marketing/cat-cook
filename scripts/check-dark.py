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
      Object.assign(__game.state(),{started:true,jpLevel:2,chapter:'dark',level:3,xp:80,shifts:1,coins:123});
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
    # cover：撳中三次 = 1 分、懷疑度 0；唔撳 = 0.4 分、懷疑度 3
    for hit in [True, False]:
        page.evaluate("""async()=>{
          const {DARK_RECIPES}=await import('/src/data/dark.js');const {DARK,resetDark}=await import('/src/darkstate.js');
          resetDark();window.controlDone=false;
          __game.minigames.cover(DARK_RECIPES[0].steps[2]).then(v=>window.controlDone=v);
        }""")
        for _ in range(3):
            if hit:
                page.wait_for_function("document.querySelector('.cover-eye')?.textContent==='😳❓'")
                page.locator('[data-cover="btn"]').click()
            page.wait_for_function("document.querySelector('.cover-eye')?.textContent!=='😳❓'")
        page.wait_for_function('window.controlDone!==false')
        sus=page.evaluate("async()=>(await import('/src/darkstate.js')).DARK.suspicion")
        score=page.evaluate('window.controlDone')
        assert (score==1 and sus==0) if hit else (score==0.4 and sus==3), (hit,score,sus)
    print('PASS cover minigame hit/miss and suspicion', flush=True)
    page.evaluate("()=>{window.__rnd=Math.random;Math.random=()=>0}")
    for level in [2,5]:
        page.evaluate("""async()=>{
          const {DARK_RECIPES}=await import('/src/data/dark.js');window.controlDone=false;
          __game.minigames.season(DARK_RECIPES.find(r=>r.id==='dark_rice').steps.find(s=>s.type==='season')).then(v=>window.controlDone=v);
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
      Math.random=window.__rnd;window.originalSeason=__game.minigames.season;
      for(const key of Object.keys(__game.minigames)) __game.minigames[key]=async()=>1;
      __game.state().settings.subs='show';
    }""")
    results=[]
    # rnd=0.5：grand 必被問、bluff 成功；rnd=0.99：bluff/deflect 必失敗
    plan=[(d,2,1,0.5,False) for d in ids]+[
      ('dark_rice',0,1,0.5,False),   # 7 honest 介紹：唔追問，x1
      ('dark_rice',2,1,0.5,True),    # 8 過鹹 + 蒙混成功
      ('dark_rice',2,0,0.5,False),   # 9 grand + 老實交代 -> x1
      ('dark_rice',2,2,0.99,False)]  # 10 grand + 轉移話題失敗 -> 收入 0
    for index,(dish,tier,reply,rnd,overloaded) in enumerate(plan):
        honest=tier==0
        page.evaluate("r=>{Math.random=()=>r}", rnd)
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
            text=page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
            if choices.count():
                if '客人要' in text:
                    wanted=page.evaluate("async id=>(await import('/src/data/vocab.js')).vocab(id).yue",dish)
                    target=choices.filter(has=page.locator(f'[aria-label="{wanted}"], img[alt="{wanted}"]')).first
                elif '揀餐具' in text: target=choices.nth(2)
                elif '擺盤' in text: target=choices.nth(1)
                elif '點介紹' in text: target=choices.nth(tier)
                elif '追問緊咩' in text: target=choices.first
                elif '你點答' in text: target=choices.nth(reply)
                else: target=choices.first
                try:
                    if target.count(): target.evaluate('(el)=>el.click()', timeout=1500)
                except Exception: pass  # 面板剛好重繪，下一輪再試
            page.wait_for_timeout(100)
        assert page.evaluate('!!window.flowDone'), (dish, page.locator('#panel').inner_text(), errors)
        result=page.evaluate('window.flowDone');results.append(result)
        assert result['stars']==(1 if overloaded else 3), result
        print('PASS order, styling, reveal, reward',dish,'overload' if overloaded else 'honest' if honest else 'grand', flush=True)
    # 浮誇倍率：grand 蒙混成功 > 如實；老實交代 = 如實；被揭穿 = 0
    assert results[6]['coins']>results[7]['coins'], results
    assert results[9]['coins']==results[7]['coins'], results
    assert results[10]['coins']<=15, results  # 只剩閒聊貼士
    assert results[8]['coins']<results[6]['coins']
    state=page.evaluate('__game.state()')
    assert len(state['darkSecrets'])==7
    assert state['darkSecrets']['dark_rice']['visits']==5
    assert state['darkSecrets']['dark_rice']['bestTaste']==100
    assert state['darkSecrets']['dark_rice']['outcome']=='expose'
    assert 'moritsukeru' not in state['srs']
    page.evaluate("async()=>{(await import('/src/screens.js')).openBook('secrets')}")
    assert page.locator('.dark-report').count()==7
    assert page.locator('.dark-pantry .unlocked').count()==7
    page.screenshot(path='docs/art-review/dark-collection.png')
    page.reload()
    saved=page.evaluate("JSON.parse(localStorage.getItem('catcook_v1'))")
    assert len(saved['darkSecrets'])==7 and saved['served']==11
    assert not errors,errors
    print('PASS seven collected secrets, hype multiplier, busted bluff, overload penalty and save reload',flush=True)
    browser.close()
