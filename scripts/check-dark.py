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
      Object.assign(__game.state(),{started:true,jpLevel:2,chapter:'dark',level:3,xp:80,shifts:1,coins:123,chapterShifts:{dark:4}});
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
    # 紅綠燈：全部係「傾偈」句 → 一直按住做完 = 1 分、懷疑度 0（叮聲都冇人望）
    def run_sneak(kind, rnd):
        page.evaluate("""async({kind,rnd})=>{
          const {DARK_RECIPES}=await import('/src/data/dark.js');const {resetDark,DARK}=await import('/src/darkstate.js');
          resetDark();DARK.persona=null;window.controlDone=false;window.__rnd0=window.__rnd0||Math.random;Math.random=()=>rnd;
          const step=DARK_RECIPES.flatMap(r=>r.steps).find(s=>s.kind===kind);
          __game.minigames.sneak(step,__world).then(v=>window.controlDone=v);
        }""", {'kind':kind,'rnd':rnd})
        page.wait_for_selector('[data-sneak="hold"], [data-demo="go"]')
        if page.locator('#panel.show [data-demo="go"]').count():
            page.screenshot(path='docs/art-review/dark-sneak-demo.png')
            page.locator('[data-demo="go"]').click()
        page.wait_for_selector('[data-sneak="hold"]')
    btn=lambda: page.locator('[data-sneak="hold"]')
    # 識聽預兆：預兆就放手，其餘按住 → 1 分、懷疑度 0；一定出過預兆
    def play_well(holding=False):
        tells=0;prev=None
        for _ in range(400):
            if page.evaluate('window.controlDone!==false'): break
            phase=page.evaluate("document.querySelector('.sneak-cust')?.dataset.phase")
            if phase=='tell' and prev!='tell': tells+=1
            prev=phase
            if phase in ('idle','away') and not holding:
                btn().dispatch_event('pointerdown', {'pointerId':1}); holding=True
            elif phase in ('tell','look') and holding:
                btn().dispatch_event('pointerup', {'pointerId':1}); holding=False
            page.wait_for_timeout(60)
        if holding: btn().dispatch_event('pointerup', {'pointerId':1})
        return tells
    run_sneak('cough', 0.5)
    tells=play_well()
    sus=page.evaluate("async()=>(await import('/src/darkstate.js')).DARK.suspicion")
    assert page.evaluate('window.controlDone')==1 and sus==0 and tells>=3, (page.evaluate('window.controlDone'), sus, tells)
    page.screenshot(path='docs/art-review/dark-microwave.png')
    # 一直按住唔理預兆 = 一定被捉；之後識聽預兆放手 → 做完 0.9 分
    run_sneak('bottle', 0.5)
    btn().dispatch_event('pointerdown', {'pointerId':1})
    page.wait_for_function("document.querySelector('.sneak-cust').dataset.phase==='look'", timeout=12000)
    page.wait_for_function("document.querySelector('.sneak-cust').dataset.cue==='caught'", timeout=3000)
    page.screenshot(path='docs/art-review/dark-sneak-caught.png')
    assert page.evaluate("async()=>(await import('/src/darkstate.js')).DARK.suspicion")==1
    box=btn().bounding_box()
    assert box['y']+box['height']<=844, box  # 唔使捲都撳到
    btn().dispatch_event('pointerup', {'pointerId':1})
    play_well()
    sus=page.evaluate("async()=>(await import('/src/darkstate.js')).DARK.suspicion")
    assert page.evaluate('window.controlDone')==0.9 and sus==1, (page.evaluate('window.controlDone'), sus)
    page.evaluate("()=>{Math.random=window.__rnd0}")
    print('PASS sneak: hold through chatter, caught on look, release on tell', flush=True)
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
    print('PASS balanced/overloaded seasoning', flush=True)
    # Isolate the order/reward flow from cooking gestures, tested above and in check-chapters.py.
    page.evaluate("""()=>{
      Math.random=window.__rnd;window.originalSeason=__game.minigames.season;
      for(const key of Object.keys(__game.minigames)) __game.minigames[key]=async()=>1;
      __game.state().settings.subs='show';
    }""")
    results=[];pots=[]
    # rnd=0.5：客人 = 街坊婆婆（ask 高）；grand 必被問；啱藉口必信、錯藉口必揭穿
    plan=[(d,'grand','right',False) for d in ids]+[
      ('dark_rice','honest',None,False),   # 7 如實介紹：唔追問、冇彩池
      ('dark_rice','grand','right',True),  # 8 過鹹 + 蒙混成功
      ('dark_rice','grand','honest',False),# 9 老實交代 -> x0.8
      ('dark_rice','grand','wrong',False)] # 10 錯藉口 -> 被揭穿，0
    for index,(dish,tier,answer,overloaded) in enumerate(plan):
        page.evaluate("()=>{Math.random=()=>0.5}")
        page.evaluate("""async({dish,index,overloaded})=>{
          const {resetDark}=await import('/src/darkstate.js');resetDark();
          __game.minigames.season=async()=>overloaded?0.1:1;
          __game.state().cooked[dish]=1;__game.state().darkRating=3;window.flowDone=null;
          __game.serveCustomer({index,tutorial:false,forceDish:dish}).then(r=>window.flowDone=r);
        }""", {'dish':dish,'index':index,'overloaded':overloaded})
        for _ in range(320):
            if page.evaluate('!!window.flowDone'): break
            if page.locator('#modal.show [data-secret]').count():
                page.wait_for_function("getComputedStyle(document.querySelector('#modal.show .card')).transform === 'none'")
                report=page.locator('#modal.show [data-secret]')
                assert report.get_attribute('data-secret')==dish
                if index==0: page.screenshot(path='docs/art-review/dark-reveal.png')
                button=page.locator('.card-footer button')
                box=button.bounding_box()
                assert 0<=box['y'] and box['y']+box['height']<=845, box
                button.evaluate('(el)=>el.click()')
            try:
                if page.locator('#panel.show [data-dress="style:simple"]').count():
                    if index==0: page.screenshot(path='docs/art-review/dark-dress.png')
                    page.locator('#panel.show [data-dress="style:simple"]').evaluate('(el)=>el.closest(".choice").click()')
                elif page.locator(f'#panel.show [data-dress="pitch:{tier}"]').count():
                    if index==0: page.screenshot(path='docs/art-review/dark-pitch.png')
                    page.locator(f'#panel.show [data-dress="pitch:{tier}"]').evaluate('(el)=>el.closest(".choice").click()')
                elif page.locator('#panel [data-excuse]').count():
                    kind=page.evaluate("async()=>(await import('/src/darkstate.js')).DARK.probe.kind")
                    if index==6: page.screenshot(path='docs/art-review/dark-probe.png')
                    if answer=='right': want=kind
                    elif answer=='honest': want='honest'
                    else: want=[k for k in ['what','made','time','origin'] if k!=kind and page.locator(f'#panel [data-excuse="{k}"]').count()][0]
                    page.locator(f'#panel [data-excuse="{want}"]').evaluate('(el)=>el.closest(".choice").click()')
                else:
                    choices=page.locator('#panel .choice')
                    text=page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
                    if choices.count():
                        if '客人要' in text:
                            wanted=page.evaluate("async id=>(await import('/src/data/vocab.js')).vocab(id).yue",dish)
                            target=choices.filter(has=page.locator(f'[aria-label="{wanted}"], img[alt="{wanted}"]')).first
                        else: target=choices.first
                        if target.count(): target.evaluate('(el)=>el.click()', timeout=1500)
            except Exception: pass  # 面板剛好重繪，下一輪再試
            page.wait_for_timeout(100)
        assert page.evaluate('!!window.flowDone'), (dish, page.locator('#panel').inner_text(), errors)
        result=page.evaluate('window.flowDone');results.append(result)
        dk=page.evaluate("async()=>{const {DARK}=await import('/src/darkstate.js');return {pot:DARK.pot,exposes:DARK.exposes,persona:DARK.persona.id}}")
        pots.append(dk)
        assert result['stars']==(1 if overloaded else 3), result
        print('PASS order, styling, probe, reward',dish,tier,answer,'overload' if overloaded else '',result['coins'],dk, flush=True)
    assert all(d['persona']=='granny' for d in pots), pots
    # 即收 = base；浮誇紅利入彩池
    assert pots[6]['pot']>0 and pots[7]['pot']==0, pots
    assert results[6]['coins']==results[7]['coins'], results
    assert abs(results[9]['coins']-round(results[7]['coins']*0.8))<=1, results
    assert results[10]['coins']==0 and pots[10]['exposes']==1, (results, pots)
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
    print('PASS seven collected secrets, pot, honest cost, wrong excuse bust, overload penalty and save reload',flush=True)
    browser.close()
