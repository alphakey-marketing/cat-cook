"""Smoke-test the real production UI without development hooks or replaced games."""
import math
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

url=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:4173/'
out=Path('tmp/mobile-ux');out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
    browser=p.chromium.launch(channel='chromium')
    errors=[];bad=[]
    def load(chapter):
        page=browser.new_page(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.on('response',lambda r:bad.append(f'{r.status} {r.url}') if r.status>=400 and any(s in r.url for s in ['/art/','/audio/','/assets/']) else None)
        page.add_init_script("""{const d=new Date();const t=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
          localStorage.setItem('catcook_v1',JSON.stringify({v:1,started:true,jpLevel:2,level:5,xp:300,shifts:1,
          chapter:CHAPTER,coins:681,lastDay:t,lastGift:t,daysPlayed:1,streak:1,cooked:{instant_coffee:1},
          settings:{furigana:true,romaji:false,yue:false,subs:'tap',bgm:false,sfx:false,shake:false}}));Math.random=()=>0;}""".replace('CHAPTER',repr(chapter)))
        page.goto(url)
        page.wait_for_selector('#start .tap')
        page.touchscreen.tap(195,400)
        page.wait_for_selector('[data-action="open-shift"]',timeout=60000)
        assert page.locator('#coins b').inner_text()=='681'
        return page
    restaurant=load('home')
    restaurant.locator('.hub-btns button').filter(has_text='去日本餐廳').tap()
    restaurant.wait_for_selector('.mission-btn',timeout=30000)
    restaurant.wait_for_selector('#panel .choice',timeout=30000)
    for w,h in [(390,844),(844,390)]:
        restaurant.set_viewport_size({'width':w,'height':h});restaurant.wait_for_timeout(600)
        m=restaurant.locator('#taskbar').bounding_box();b=restaurant.locator('.bubble').bounding_box();q=restaurant.locator('#panel').bounding_box()
        assert b['y']>=m['y']+m['height']
        assert b['y']+b['height']<=q['y']+1 or b['x']+b['width']<=q['x']
        restaurant.screenshot(path=str(out/f'production-{w}-mission.png'))
    restaurant.locator('.mission-btn').tap();restaurant.wait_for_selector('.mission-details')
    assert '每人想食' in restaurant.locator('.mission-details').inner_text()
    restaurant.locator('.x').tap()
    cafe=load('cafe')
    cafe.locator('[data-action="open-shift"]').tap()
    cafe.wait_for_selector('.dish-opt',timeout=30000)
    cafe.locator('.choice').filter(has=cafe.locator('img[alt="精品即溶咖啡"]')).tap()
    cafe.wait_for_function("document.querySelector('#panel .panel-title')?.textContent.includes('幾多個')")
    cafe.locator('.choice').first.tap()
    for _ in range(2):
        cafe.wait_for_function("document.querySelector('.ing-grid')?.dataset.want")
        wanted=cafe.locator('.ing-grid').get_attribute('data-want')
        cafe.locator(f'.ing[data-id="{wanted}"]').tap();cafe.wait_for_timeout(400)
    cafe.wait_for_selector('.stirpad');box=cafe.locator('.stirpad').bounding_box()
    cx,cy=box['x']+box['width']/2,box['y']+box['height']/2
    cafe.mouse.move(cx+60,cy);cafe.mouse.down()
    for i in range(66):
        a=i*math.pi/16;cafe.mouse.move(cx+60*math.cos(a),cy+60*math.sin(a))
    cafe.mouse.up()
    cafe.wait_for_selector('.request-actions',timeout=30000)
    assert cafe.locator('.pick-prompt').count()==0
    assert cafe.locator('.veiled').count()==1
    cafe.screenshot(path=str(out/'production-request.png'))
    cafe.locator('[data-request="hot"]').tap()
    cafe.wait_for_selector('#panel .btn.primary')
    assert '啱喇' in cafe.locator('#panel').inner_text()
    assert not errors,errors
    assert not bad,bad
    print('PASS production: existing save, mission clearance/details, real cafe cooking, semantic request, no missing assets or browser errors',flush=True)
    browser.close()
