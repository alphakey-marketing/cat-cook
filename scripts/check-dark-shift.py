"""暗黑食堂成更：目標 → 收手/繼續搏 → 食評家突擊 → 星級結算。Vite on 5173."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chromium')
    page = browser.new_page(viewport={'width':390,'height':844}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto('http://localhost:5173/')
    page.wait_for_function('window.__game')
    page.evaluate("""async()=>{
      const {today}=await import('/src/save.js');
      Object.assign(__game.state(),{started:true,jpLevel:0,chapter:'dark',level:3,xp:80,shifts:3,coins:0,chapterShifts:{dark:1},lastDay:today(),lastGift:today()});
      for(const k of Object.keys(__game.minigames)) __game.minigames[k]=async()=>1;
      for(const r of (await import('/src/data/dark.js')).DARK_RECIPES) __game.state().cooked[r.id]=1;
    }""")
    page.locator('#start').click(); page.wait_for_selector('[data-chapter="dark"]')
    page.evaluate("()=>{Math.random=()=>0.5; window.shiftDone=false; __game.shift().then(()=>window.shiftDone=true)}")
    seen = set()
    for _ in range(900):
        if page.locator('#modal.show .summary').count(): break
        try:
            dark = lambda: page.evaluate("async()=>{const {DARK}=await import('/src/darkstate.js');return {sus:DARK.suspicion,pot:DARK.pot,probe:DARK.probe?.kind,raid:DARK.raid}}")
            if page.locator('#modal.show [data-dark="start"]').count():
                seen.add('goals'); page.screenshot(path='docs/art-review/dark-goals.png')
                page.locator('#modal.show [data-dark="start"]').evaluate('el=>el.click()')
            elif page.locator('#modal.show .card-footer button').count():
                page.locator('#modal.show .card-footer button').evaluate('el=>el.click()')
            elif page.locator('#panel.show [data-dress^="style:"]').count():
                # 擺盤唔啱婆婆口味（豪華）→ 懷疑度 +1 → 爆
                st = 'gouka' if 'gamble' in seen and 'raid' not in seen else 'simple'
                page.locator(f'#panel.show [data-dress="style:{st}"]').evaluate('el=>el.closest(".choice").click()')
            elif page.locator('#panel.show [data-dress^="pitch:"]').count():
                page.locator('#panel.show [data-dress="pitch:grand"]').evaluate('el=>el.closest(".choice").click()')
            elif page.locator('#panel.show [data-bank]').count():
                # 第一次繼續搏，之後逼爆懷疑度試突擊，再收手
                if 'gamble' not in seen:
                    seen.add('gamble'); page.screenshot(path='docs/art-review/dark-bank.png')
                    page.evaluate("async()=>{(await import('/src/darkstate.js')).DARK.suspicion=4}")
                    page.locator('#panel.show [data-bank="go"]').evaluate('el=>el.closest(".choice").click()')
                else:
                    seen.add('bank'); page.locator('#panel.show [data-bank="bank"]').evaluate('el=>el.closest(".choice").click()')
            elif page.locator('#panel.show [data-raid]').count():
                seen.add('raid'); page.screenshot(path='docs/art-review/dark-raid.png')
                page.locator('#panel.show [data-raid="fight"]').evaluate('el=>el.closest(".choice").click()')
            elif page.locator('#panel.show [data-excuse]').count():
                k = dark()['probe']
                page.locator(f'#panel.show [data-excuse="{k}"]').evaluate('el=>el.closest(".choice").click()')
            else:
                choices = page.locator('#panel.show .choice')
                text = page.locator('#panel').evaluate("el=>el.querySelector('.panel-title')?.textContent || ''")
                if choices.count() and '客人要' in text:
                    wanted=page.evaluate("async()=>(await import('/src/data/vocab.js')).vocab(window.__order).yue")
                    choices.filter(has=page.locator(f'[aria-label="{wanted}"], img[alt="{wanted}"]')).first.evaluate('el=>el.click()')
                elif choices.count():
                    choices.first.evaluate('el=>el.click()')
        except Exception:
            pass
        # 等舊面板消失先做下一步，唔好撳到殘留嘅掣
        try: page.wait_for_function("()=>!document.querySelector('#panel.show [data-bank], #panel.show [data-raid]')", timeout=1500) if 'gamble' in seen else None
        except Exception: pass
        page.wait_for_timeout(100)
    assert page.locator('#modal.show .summary').count(), (page.locator('#panel').inner_text(), errors)
    page.wait_for_timeout(500)
    page.screenshot(path='docs/art-review/dark-summary.png')
    stars = int(page.locator('.dark-stars').get_attribute('data-stars'))
    st = page.evaluate("async()=>{const {DARK}=await import('/src/darkstate.js');return {raid:DARK.raid,pot:DARK.pot,earned:DARK.earned,s:__game.state()}}")
    assert {'goals','gamble','raid','bank'} <= seen, seen
    assert st['raid'] == 'win' and st['pot'] == 0 and st['earned'] > 0, st
    assert st['s']['chapterShifts']['dark'] == 2 and st['s']['darkBest'] == stars and stars >= 2, (stars, st['s']['darkBest'])
    assert st['s']['darkRating'] > 3
    assert not page.locator('#darkbar.show').count()
    assert not errors, errors
    print('PASS dark shift: goals, gamble, raid win, bank, stars', stars, 'earned', st['earned'], 'rating', st['s']['darkRating'])
    browser.close()
