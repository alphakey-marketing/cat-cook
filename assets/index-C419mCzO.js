(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Of=new Set(["ui_lock","ui_unlock","ui_settings","ui_coin","ui_timer","ui_serves"]),Vo=n=>new URL(`./art/game/${n}.${Of.has(n)?"svg":"webp"}`,document.baseURI).href;function ni(n,t="",e=""){const i=document.createElement("img");return i.src=Vo(n),i.alt=t,i.className=`art ${e}`,i.draggable=!1,i.decoding="async",i}const ii=n=>{if(!n.textIcon)return ni(`${n.cat}_${n.id}`,n.yue);const t=document.createElement("span");return t.className="food-icon",t.setAttribute("role","img"),t.setAttribute("aria-label",n.yue),t.textContent=n.emoji,t},ou={"🪙":"coin","🔥":"streak","📚":"book","📖":"book","🛍️":"shop","⚙️":"settings","🔊":"speaker","✕":"close","❤️":"heart","💖":"heart","💕":"heart","🐾":"paw","🔒":"lock","⭐":"star_on","★":"star_on","☆":"star_off","🎁":"gift","🎉":"celebrate","🎊":"celebrate","🔓":"unlock","🎧":"listen","🍽️":"serves","⏱️":"timer","🎯":"target","✨":"xp","🌟":"rare","🎙️":"mic","📅":"calendar","📊":"stats","💴":"yen","🧾":"receipt","🌱":"grow_1","🌿":"grow_2","🌳":"grow_3","🌸":"grow_4","💮":"stamp_hanamaru","⭕":"stamp_maru","🔺":"stamp_sankaku","🏅":"medal","🏆":"trophy","👑":"crown","🏮":"open_shop","🐈‍⬛":"@logo_cat"};function tr(n){var s;if((s=n.closest)!=null&&s.call(n,"script,style"))return;const t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);const i=new RegExp(Object.keys(ou).join("|"),"gu");for(const a of e){if(a.parentElement.closest("script,style"))continue;const o=a.textContent;if(i.lastIndex=0,!i.test(o))continue;i.lastIndex=0;const r=document.createDocumentFragment();let c=0;for(const l of o.matchAll(i)){r.append(o.slice(c,l.index));const u=ou[l[0]];r.append(ni(u.startsWith("@")?u.slice(1):`ui_${u}`,l[0])),c=l.index+l[0].length}r.append(o.slice(c)),a.replaceWith(r)}}const Na=new Set;let Lo=null,Wh=0,uc=0,fr;const wn=()=>Na.size>0,vn=()=>(Lo??performance.now())-Wh;function ha(n,t){const e=wn();t?Na.add(n):Na.delete(n),!e&&wn()?(Lo=performance.now(),document.dispatchEvent(new Event("gamepause"))):e&&!wn()&&(Wh+=performance.now()-Lo,Lo=null),document.body.classList.toggle("game-paused",wn())}function Go(n,t){var e;if(t)ha(n,!0),clearInterval(fr),ha("resume",!1),(e=document.querySelector("#resume-countdown"))==null||e.remove();else{if(Na.has(n)&&Na.size===1&&uc){ha("resume",!0);let i=3;const s=document.createElement("div");s.id="resume-countdown",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=`準備繼續 · ${i}`,document.body.append(s),fr=setInterval(()=>{--i?s.textContent=`準備繼續 · ${i}`:(clearInterval(fr),s.remove(),ha("resume",!1))},1e3)}ha(n,!1)}}function Qt(n=0){const t=vn()+n;return new Promise(e=>{const i=()=>!wn()&&vn()>=t?e():setTimeout(i,25);i()})}async function Ff(n,...t){uc++;try{return await Qt(),await n(...t)}finally{uc--}}document.addEventListener("visibilitychange",()=>Go("hidden",document.hidden));document.hidden&&Go("hidden",!0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="169",Bf=0,ru=1,zf=2,bl=1,$h=2,di=3,Ni=0,yn=1,mn=2,Li=0,Ws=1,cu=2,lu=3,uu=4,jf=5,es=100,Hf=101,Vf=102,Gf=103,Wf=104,$f=200,Xf=201,qf=202,Yf=203,hc=204,dc=205,Kf=206,Jf=207,Zf=208,Qf=209,tp=210,ep=211,np=212,ip=213,sp=214,fc=0,pc=1,mc=2,Ks=3,gc=4,_c=5,vc=6,yc=7,Xh=0,ap=1,op=2,ki=0,rp=1,cp=2,lp=3,qh=4,up=5,hp=6,dp=7,Yh=300,Js=301,Zs=302,xc=303,Mc=304,er=306,Qs=1e3,ss=1001,Sc=1002,zn=1003,fp=1004,Ka=1005,qn=1006,pr=1007,as=1008,Mi=1009,Kh=1010,Jh=1011,Oa=1012,wl=1013,cs=1014,pi=1015,Ga=1016,El=1017,Tl=1018,ta=1020,Zh=35902,Qh=1021,td=1022,Yn=1023,ed=1024,nd=1025,$s=1026,ea=1027,id=1028,Al=1029,sd=1030,Rl=1031,Cl=1033,ko=33776,Io=33777,Do=33778,Uo=33779,bc=35840,wc=35841,Ec=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37808,Lc=37809,kc=37810,Ic=37811,Dc=37812,Uc=37813,Nc=37814,Oc=37815,Fc=37816,Bc=37817,zc=37818,jc=37819,Hc=37820,Vc=37821,No=36492,Gc=36494,Wc=36495,ad=36283,$c=36284,Xc=36285,qc=36286,pp=3200,mp=3201,od=0,gp=1,Pi="",He="srgb",Bi="srgb-linear",Pl="display-p3",nr="display-p3-linear",Wo="linear",Le="srgb",$o="rec709",Xo="p3",ys=7680,hu=519,_p=512,vp=513,yp=514,rd=515,xp=516,Mp=517,Sp=518,bp=519,Yc=35044,du="300 es",mi=2e3,qo=2001;class ca{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,Kc=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function wp(n,t){return(n%t+t)%t}function gr(n,t,e){return(1-e)*n+e*t}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*s+t.x,this.y=a*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,i,s,a,o,r,c,l){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,c,l)}set(t,e,i,s,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],u=i[4],h=i[7],m=i[2],p=i[5],g=i[8],_=s[0],d=s[3],f=s[6],S=s[1],v=s[4],b=s[7],P=s[2],R=s[5],T=s[8];return a[0]=o*_+r*S+c*P,a[3]=o*d+r*v+c*R,a[6]=o*f+r*b+c*T,a[1]=l*_+u*S+h*P,a[4]=l*d+u*v+h*R,a[7]=l*f+u*b+h*T,a[2]=m*_+p*S+g*P,a[5]=m*d+p*v+g*R,a[8]=m*f+p*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-i*a*u+i*r*c+s*a*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],h=u*o-r*l,m=r*c-u*a,p=l*a-o*c,g=e*h+i*m+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(r*i-s*o)*_,t[3]=m*_,t[4]=(u*e-s*c)*_,t[5]=(s*a-r*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-s*l,s*c,-s*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new ee;function cd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ep(){const n=Fa("canvas");return n.style.display="block",n}const fu={};function Oo(n){n in fu||(fu[n]=!0,console.warn(n))}function Tp(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Ap(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pu=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mu=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[Bi]:{transfer:Wo,primaries:$o,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[He]:{transfer:Le,primaries:$o,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nr]:{transfer:Wo,primaries:Xo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(mu),fromReference:n=>n.applyMatrix3(pu)},[Pl]:{transfer:Le,primaries:Xo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(mu),fromReference:n=>n.applyMatrix3(pu).convertLinearToSRGB()}},Cp=new Set([Bi,nr]),_e={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Cp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=da[t].toReference,s=da[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return da[n].primaries},getTransfer:function(n){return n===Pi?Wo:da[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(da[t].luminanceCoefficients)}};function Xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class Pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Fa("canvas")),xs.width=t.width,xs.height=t.height;const i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Xs(a[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xs(e[i]/255)*255):e[i]=Xs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lp=0;class ld{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(yr(s[o].image)):a.push(yr(s[o]))}else a=yr(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function yr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class un extends ca{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,i=ss,s=ss,a=qn,o=as,r=Yn,c=Mi,l=un.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=_i(),this.name="",this.source=new ld(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qs:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qs:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Yh;un.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const c=t.elements,l=c[0],u=c[4],h=c[8],m=c[1],p=c[5],g=c[9],_=c[2],d=c[6],f=c[10];if(Math.abs(u-m)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+m)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,b=(p+1)/2,P=(f+1)/2,R=(u+m)/4,T=(h+_)/4,U=(g+d)/4;return v>b&&v>P?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=R/i,a=T/i):b>P?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=R/s,a=U/s):P<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),i=T/a,s=U/a),this.set(i,s,a,e),this}let S=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(m-u)*(m-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-_)/S,this.z=(m-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ip extends ca{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ld(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Ip{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ud extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dp extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,o,r){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(r===1){t[e+0]=m,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==m||l!==p||u!==g){let d=1-r;const f=c*m+l*p+u*g+h*_,S=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,f*S);d=Math.sin(d*R)/P,r=Math.sin(r*R)/P}const b=r*S;if(c=c*d+m*b,l=l*d+p*b,u=u*d+g*b,h=h*d+_*b,d===1-r){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,a,o){const r=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=a[o],m=a[o+1],p=a[o+2],g=a[o+3];return t[e]=r*g+u*h+c*p-l*m,t[e+1]=c*g+u*m+l*h-r*p,t[e+2]=l*g+u*p+r*m-c*h,t[e+3]=u*g-r*h-c*m-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),u=r(s/2),h=r(a/2),m=c(i/2),p=c(s/2),g=c(a/2);switch(o){case"XYZ":this._x=m*u*h+l*p*g,this._y=l*p*h-m*u*g,this._z=l*u*g+m*p*h,this._w=l*u*h-m*p*g;break;case"YXZ":this._x=m*u*h+l*p*g,this._y=l*p*h-m*u*g,this._z=l*u*g-m*p*h,this._w=l*u*h+m*p*g;break;case"ZXY":this._x=m*u*h-l*p*g,this._y=l*p*h+m*u*g,this._z=l*u*g+m*p*h,this._w=l*u*h-m*p*g;break;case"ZYX":this._x=m*u*h-l*p*g,this._y=l*p*h+m*u*g,this._z=l*u*g-m*p*h,this._w=l*u*h+m*p*g;break;case"YZX":this._x=m*u*h+l*p*g,this._y=l*p*h+m*u*g,this._z=l*u*g-m*p*h,this._w=l*u*h-m*p*g;break;case"XZY":this._x=m*u*h-l*p*g,this._y=l*p*h-m*u*g,this._z=l*u*g+m*p*h,this._w=l*u*h+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],h=e[10],m=i+r+h;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-c)*p,this._y=(a-l)*p,this._z=(o-s)*p}else if(i>r&&i>h){const p=2*Math.sqrt(1+i-r-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(a+l)/p}else if(r>h){const p=2*Math.sqrt(1+r-i-h);this._w=(a-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-r);this._w=(o-s)/p,this._x=(a+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*r+s*l-a*c,this._y=s*u+o*c+a*r-i*l,this._z=a*u+o*l+i*c-s*r,this._w=o*u-i*r-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=s,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),h=Math.sin((1-e)*u)/l,m=Math.sin(e*u)/l;return this._w=o*h+this._w*m,this._x=i*h+this._x*m,this._y=s*h+this._y*m,this._z=a*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*s-r*i),u=2*(r*e-a*s),h=2*(a*i-o*e);return this.x=e+c*l+o*h-r*u,this.y=i+c*u+r*l-a*h,this.z=s+c*h+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=s*c-a*r,this.y=a*o-i*c,this.z=i*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new k,gu=new Wa;class $a{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(a,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ja.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(t.matrixWorld),this.union(Ja)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),Za.subVectors(this.max,fa),Ms.subVectors(t.a,fa),Ss.subVectors(t.b,fa),bs.subVectors(t.c,fa),wi.subVectors(Ss,Ms),Ei.subVectors(bs,Ss),Vi.subVectors(Ms,bs);let e=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Vi.z,Vi.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Vi.z,0,-Vi.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Vi.y,Vi.x,0];return!Mr(e,Ms,Ss,bs,Za)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,Ms,Ss,bs,Za))?!1:(Qa.crossVectors(wi,Ei),e=[Qa.x,Qa.y,Qa.z],Mr(e,Ms,Ss,bs,Za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new k,new k,new k,new k,new k,new k,new k,new k],Vn=new k,Ja=new $a,Ms=new k,Ss=new k,bs=new k,wi=new k,Ei=new k,Vi=new k,fa=new k,Za=new k,Qa=new k,Gi=new k;function Mr(n,t,e,i,s){for(let a=0,o=n.length-3;a<=o;a+=3){Gi.fromArray(n,a);const r=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const Up=new $a,pa=new k,Sr=new k;class ir{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Up.setFromPoints(t).getCenter(i);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pa.subVectors(t,this.center);const e=pa.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(pa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pa.copy(t.center).add(Sr)),this.expandByPoint(pa.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new k,br=new k,to=new k,Ti=new k,wr=new k,eo=new k,Er=new k;class Ll{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){br.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(br);const a=t.distanceTo(e)*.5,o=-this.direction.dot(to),r=Ti.dot(this.direction),c=-Ti.dot(to),l=Ti.lengthSq(),u=Math.abs(1-o*o);let h,m,p,g;if(u>0)if(h=o*c-r,m=o*r-c,g=a*u,h>=0)if(m>=-g)if(m<=g){const _=1/u;h*=_,m*=_,p=h*(h+o*m+2*r)+m*(o*h+m+2*c)+l}else m=a,h=Math.max(0,-(o*m+r)),p=-h*h+m*(m+2*c)+l;else m=-a,h=Math.max(0,-(o*m+r)),p=-h*h+m*(m+2*c)+l;else m<=-g?(h=Math.max(0,-(-o*a+r)),m=h>0?-a:Math.min(Math.max(-a,-c),a),p=-h*h+m*(m+2*c)+l):m<=g?(h=0,m=Math.min(Math.max(-a,-c),a),p=m*(m+2*c)+l):(h=Math.max(0,-(o*a+r)),m=h>0?a:Math.min(Math.max(-a,-c),a),p=-h*h+m*(m+2*c)+l);else m=o>0?-a:a,h=Math.max(0,-(o*m+r)),p=-h*h+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(br).addScaledVector(to,m),p}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,m=this.origin;return l>=0?(i=(t.min.x-m.x)*l,s=(t.max.x-m.x)*l):(i=(t.max.x-m.x)*l,s=(t.min.x-m.x)*l),u>=0?(a=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(a=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),i>o||a>s||((a>i||isNaN(i))&&(i=a),(o<s||isNaN(s))&&(s=o),h>=0?(r=(t.min.z-m.z)*h,c=(t.max.z-m.z)*h):(r=(t.max.z-m.z)*h,c=(t.min.z-m.z)*h),i>c||r>s)||((r>i||i!==i)&&(i=r),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,i,s,a){wr.subVectors(e,t),eo.subVectors(i,t),Er.crossVectors(wr,eo);let o=this.direction.dot(Er),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const c=r*this.direction.dot(eo.crossVectors(Ti,eo));if(c<0)return null;const l=r*this.direction.dot(wr.cross(Ti));if(l<0||c+l>o)return null;const u=-r*Ti.dot(Er);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,i,s,a,o,r,c,l,u,h,m,p,g,_,d){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,c,l,u,h,m,p,g,_,d)}set(t,e,i,s,a,o,r,c,l,u,h,m,p,g,_,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=a,f[5]=o,f[9]=r,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=m,f[3]=p,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),a=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const m=o*u,p=o*h,g=r*u,_=r*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=m-_*l,e[9]=-r*c,e[2]=_-m*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const m=c*u,p=c*h,g=l*u,_=l*h;e[0]=m+_*r,e[4]=g*r-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-r,e[2]=p*r-g,e[6]=_+m*r,e[10]=o*c}else if(t.order==="ZXY"){const m=c*u,p=c*h,g=l*u,_=l*h;e[0]=m-_*r,e[4]=-o*h,e[8]=g+p*r,e[1]=p+g*r,e[5]=o*u,e[9]=_-m*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const m=o*u,p=o*h,g=r*u,_=r*h;e[0]=c*u,e[4]=g*l-p,e[8]=m*l+_,e[1]=c*h,e[5]=_*l+m,e[9]=p*l-g,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const m=o*c,p=o*l,g=r*c,_=r*l;e[0]=c*u,e[4]=_-m*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=p*h+g,e[10]=m-_*h}else if(t.order==="XZY"){const m=o*c,p=o*l,g=r*c,_=r*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=m*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=r*u,e[10]=_*h+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Op)}lookAt(t,e,i){const s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ai.crossVectors(i,Rn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ai.crossVectors(i,Rn)),Ai.normalize(),no.crossVectors(Rn,Ai),s[0]=Ai.x,s[4]=no.x,s[8]=Rn.x,s[1]=Ai.y,s[5]=no.y,s[9]=Rn.y,s[2]=Ai.z,s[6]=no.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],u=i[1],h=i[5],m=i[9],p=i[13],g=i[2],_=i[6],d=i[10],f=i[14],S=i[3],v=i[7],b=i[11],P=i[15],R=s[0],T=s[4],U=s[8],q=s[12],y=s[1],x=s[5],D=s[9],N=s[13],B=s[2],I=s[6],O=s[10],L=s[14],F=s[3],rt=s[7],ht=s[11],dt=s[15];return a[0]=o*R+r*y+c*B+l*F,a[4]=o*T+r*x+c*I+l*rt,a[8]=o*U+r*D+c*O+l*ht,a[12]=o*q+r*N+c*L+l*dt,a[1]=u*R+h*y+m*B+p*F,a[5]=u*T+h*x+m*I+p*rt,a[9]=u*U+h*D+m*O+p*ht,a[13]=u*q+h*N+m*L+p*dt,a[2]=g*R+_*y+d*B+f*F,a[6]=g*T+_*x+d*I+f*rt,a[10]=g*U+_*D+d*O+f*ht,a[14]=g*q+_*N+d*L+f*dt,a[3]=S*R+v*y+b*B+P*F,a[7]=S*T+v*x+b*I+P*rt,a[11]=S*U+v*D+b*O+P*ht,a[15]=S*q+v*N+b*L+P*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],h=t[6],m=t[10],p=t[14],g=t[3],_=t[7],d=t[11],f=t[15];return g*(+a*c*h-s*l*h-a*r*m+i*l*m+s*r*p-i*c*p)+_*(+e*c*p-e*l*m+a*o*m-s*o*p+s*l*u-a*c*u)+d*(+e*l*h-e*r*p-a*o*h+i*o*p+a*r*u-i*l*u)+f*(-s*r*u-e*c*h+e*r*m+s*o*h-i*o*m+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],h=t[9],m=t[10],p=t[11],g=t[12],_=t[13],d=t[14],f=t[15],S=h*d*l-_*m*l+_*c*p-r*d*p-h*c*f+r*m*f,v=g*m*l-u*d*l-g*c*p+o*d*p+u*c*f-o*m*f,b=u*_*l-g*h*l+g*r*p-o*_*p-u*r*f+o*h*f,P=g*h*c-u*_*c-g*r*m+o*_*m+u*r*d-o*h*d,R=e*S+i*v+s*b+a*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=S*T,t[1]=(_*m*a-h*d*a-_*s*p+i*d*p+h*s*f-i*m*f)*T,t[2]=(r*d*a-_*c*a+_*s*l-i*d*l-r*s*f+i*c*f)*T,t[3]=(h*c*a-r*m*a-h*s*l+i*m*l+r*s*p-i*c*p)*T,t[4]=v*T,t[5]=(u*d*a-g*m*a+g*s*p-e*d*p-u*s*f+e*m*f)*T,t[6]=(g*c*a-o*d*a-g*s*l+e*d*l+o*s*f-e*c*f)*T,t[7]=(o*m*a-u*c*a+u*s*l-e*m*l-o*s*p+e*c*p)*T,t[8]=b*T,t[9]=(g*h*a-u*_*a-g*i*p+e*_*p+u*i*f-e*h*f)*T,t[10]=(o*_*a-g*r*a+g*i*l-e*_*l-o*i*f+e*r*f)*T,t[11]=(u*r*a-o*h*a-u*i*l+e*h*l+o*i*p-e*r*p)*T,t[12]=P*T,t[13]=(u*_*s-g*h*s+g*i*m-e*_*m-u*i*d+e*h*d)*T,t[14]=(g*r*s-o*_*s-g*i*c+e*_*c+o*i*d-e*r*d)*T,t[15]=(o*h*s-u*r*s+u*i*c-e*h*c-o*i*m+e*r*m)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+i,l*r-s*c,l*c+s*r,0,l*r+s*c,u*r+i,u*c-s*o,0,l*c-s*r,u*c+s*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,o){return this.set(1,i,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,h=r+r,m=a*l,p=a*u,g=a*h,_=o*u,d=o*h,f=r*h,S=c*l,v=c*u,b=c*h,P=i.x,R=i.y,T=i.z;return s[0]=(1-(_+f))*P,s[1]=(p+b)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(p-b)*R,s[5]=(1-(m+f))*R,s[6]=(d+S)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(d-S)*T,s[10]=(1-(m+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=ws.set(s[0],s[1],s[2]).length();const o=ws.set(s[4],s[5],s[6]).length(),r=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const l=1/a,u=1/o,h=1/r;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,e.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,s,a,o,r=mi){const c=this.elements,l=2*a/(e-t),u=2*a/(i-s),h=(e+t)/(e-t),m=(i+s)/(i-s);let p,g;if(r===mi)p=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===qo)p=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,o,r=mi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-a),m=(e+t)*l,p=(i+s)*u;let g,_;if(r===mi)g=(o+a)*h,_=-2*h;else if(r===qo)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ws=new k,Gn=new Ee,Np=new k(0,0,0),Op=new k(1,1,1),Ai=new k,no=new k,Rn=new k,_u=new Ee,vu=new Wa;class si{constructor(t=0,e=0,i=0,s=si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],c=s[1],l=s[5],u=s[9],h=s[2],m=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(nn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fp=0;const yu=new k,Es=new Wa,li=new Ee,io=new k,ma=new k,Bp=new k,zp=new Wa,xu=new k(1,0,0),Mu=new k(0,1,0),Su=new k(0,0,1),bu={type:"added"},jp={type:"removed"},Ts={type:"childadded",child:null},Tr={type:"childremoved",child:null};class Ke extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new k,e=new si,i=new Wa,s=new k(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ee}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?io.copy(t):io.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ma,io,this.up):li.lookAt(io,ma,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(li),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jp),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(t.shapes,h)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];s.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),m=o(t.skeletons),p=o(t.animations),g=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new k(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new k,ui=new k,Ar=new k,hi=new k,As=new k,Rs=new k,wu=new k,Rr=new k,Cr=new k,Pr=new k,Lr=new be,kr=new be,Ir=new be;class Bn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Wn.subVectors(s,e),ui.subVectors(i,e),Ar.subVectors(t,e);const o=Wn.dot(Wn),r=Wn.dot(ui),c=Wn.dot(Ar),l=ui.dot(ui),u=ui.dot(Ar),h=o*l-r*r;if(h===0)return a.set(0,0,0),null;const m=1/h,p=(l*c-r*u)*m,g=(o*u-r*c)*m;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,s,a,o,r,c){return this.getBarycoord(t,e,i,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(r,hi.z),c)}static getInterpolatedAttribute(t,e,i,s,a,o){return Lr.setScalar(0),kr.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,i),Ir.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lr,a.x),o.addScaledVector(kr,a.y),o.addScaledVector(Ir,a.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),ui.subVectors(t,e),Wn.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Wn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let o,r;As.subVectors(s,i),Rs.subVectors(a,i),Rr.subVectors(t,i);const c=As.dot(Rr),l=Rs.dot(Rr);if(c<=0&&l<=0)return e.copy(i);Cr.subVectors(t,s);const u=As.dot(Cr),h=Rs.dot(Cr);if(u>=0&&h<=u)return e.copy(s);const m=c*h-u*l;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(As,o);Pr.subVectors(t,a);const p=As.dot(Pr),g=Rs.dot(Pr);if(g>=0&&p<=g)return e.copy(a);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(i).addScaledVector(Rs,r);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return wu.subVectors(a,s),r=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(wu,r);const f=1/(d+_+m);return o=_*f,r=m*f,e.copy(i).addScaledVector(As,o).addScaledVector(Rs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},so={h:0,s:0,l:0};function Dr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=wp(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Dr(o,a,t+1/3),this.g=Dr(o,a,t),this.b=Dr(o,a,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return _e.fromWorkingColorSpace(an.copy(this),t),Math.round(nn(an.r*255,0,255))*65536+Math.round(nn(an.g*255,0,255))*256+Math.round(nn(an.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(an.copy(this),e);const i=an.r,s=an.g,a=an.b,o=Math.max(i,s,a),r=Math.min(i,s,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const h=o-r;switch(l=u<=.5?h/(o+r):h/(2-o-r),o){case i:c=(s-a)/h+(s<a?6:0);break;case s:c=(a-i)/h+2;break;case a:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=He){_e.fromWorkingColorSpace(an.copy(this),t);const e=an.r,i=an.g,s=an.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(so);const i=gr(Ri.h,so.h,e),s=gr(Ri.s,so.s,e),a=gr(Ri.l,so.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new oe;oe.NAMES=hd;let Hp=0;class ms extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Ws,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class se extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new k,ao=new ft;class Kn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),a=Me(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yc&&(t.usage=this.usage),t}}class dd extends Kn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fd extends Kn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ke extends Kn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vp=0;const Un=new Ee,Ur=new Ke,Cs=new k,Cn=new $a,ga=new $a,tn=new k;class hn extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?fd:dd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ee().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,i){return Un.makeTranslation(t,e,i),this.applyMatrix4(Un),this}scale(t,e,i){return Un.makeScale(t,e,i),this.applyMatrix4(Un),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];ga.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(Cn.min,ga.min),Cn.expandByPoint(tn),tn.addVectors(Cn.max,ga.max),Cn.expandByPoint(tn)):(Cn.expandByPoint(ga.min),Cn.expandByPoint(ga.max))}Cn.getCenter(i);let s=0;for(let a=0,o=t.count;a<o;a++)tn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(tn));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)tn.fromBufferAttribute(r,l),c&&(Cs.fromBufferAttribute(t,l),tn.add(Cs)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],c=[];for(let U=0;U<i.count;U++)r[U]=new k,c[U]=new k;const l=new k,u=new k,h=new k,m=new ft,p=new ft,g=new ft,_=new k,d=new k;function f(U,q,y){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,q),h.fromBufferAttribute(i,y),m.fromBufferAttribute(a,U),p.fromBufferAttribute(a,q),g.fromBufferAttribute(a,y),u.sub(l),h.sub(l),p.sub(m),g.sub(m);const x=1/(p.x*g.y-g.x*p.y);isFinite(x)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(x),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(x),r[U].add(_),r[q].add(_),r[y].add(_),c[U].add(d),c[q].add(d),c[y].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,q=S.length;U<q;++U){const y=S[U],x=y.start,D=y.count;for(let N=x,B=x+D;N<B;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new k,b=new k,P=new k,R=new k;function T(U){P.fromBufferAttribute(s,U),R.copy(P);const q=r[U];v.copy(q),v.sub(P.multiplyScalar(P.dot(q))).normalize(),b.crossVectors(R,q);const x=b.dot(c[U])<0?-1:1;o.setXYZW(U,v.x,v.y,v.z,x)}for(let U=0,q=S.length;U<q;++U){const y=S[U],x=y.start,D=y.count;for(let N=x,B=x+D;N<B;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const s=new k,a=new k,o=new k,r=new k,c=new k,l=new k,u=new k,h=new k;if(t)for(let m=0,p=t.count;m<p;m+=3){const g=t.getX(m+0),_=t.getX(m+1),d=t.getX(m+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),u.subVectors(o,a),h.subVectors(s,a),u.cross(h),r.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),r.add(u),c.add(u),l.add(u),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let m=0,p=e.count;m<p;m+=3)s.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,a),h.subVectors(s,a),u.cross(h),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,h=r.normalized,m=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,d=c.length;_<d;_++){r.isInterleavedBufferAttribute?p=c[_]*r.data.stride+r.offset:p=c[_]*u;for(let f=0;f<u;f++)m[g++]=l[p++]}return new Kn(m,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,i=this.index.array,s=this.attributes;for(const r in s){const c=s[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,h=l.length;u<h;u++){const m=l[u],p=t(m,i);c.push(p)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,m=l.length;h<m;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],h=a[l];for(let m=0,p=h.length;m<p;m++)u.push(h[m].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new Ee,Wi=new Ll,oo=new ir,Tu=new k,ro=new k,co=new k,lo=new k,Nr=new k,uo=new k,Au=new k,ho=new k;class G extends Ke{constructor(t=new hn,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){uo.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],h=a[c];u!==0&&(Nr.fromBufferAttribute(h,t),o?uo.addScaledVector(Nr,u):uo.addScaledVector(Nr.sub(e),u))}e.add(uo)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(a),Wi.copy(t.ray).recast(t.near),!(oo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(oo,Tu)===null||Wi.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(Eu.copy(a).invert(),Wi.copy(t.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let s;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,m=a.groups,p=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const d=m[g],f=o[d.materialIndex],S=Math.max(d.start,p.start),v=Math.min(r.count,Math.min(d.start+d.count,p.start+p.count));for(let b=S,P=v;b<P;b+=3){const R=r.getX(b),T=r.getX(b+1),U=r.getX(b+2);s=fo(this,f,t,i,l,u,h,R,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(r.count,p.start+p.count);for(let d=g,f=_;d<f;d+=3){const S=r.getX(d),v=r.getX(d+1),b=r.getX(d+2);s=fo(this,o,t,i,l,u,h,S,v,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const d=m[g],f=o[d.materialIndex],S=Math.max(d.start,p.start),v=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let b=S,P=v;b<P;b+=3){const R=b,T=b+1,U=b+2;s=fo(this,f,t,i,l,u,h,R,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let d=g,f=_;d<f;d+=3){const S=d,v=d+1,b=d+2;s=fo(this,o,t,i,l,u,h,S,v,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Gp(n,t,e,i,s,a,o,r){let c;if(t.side===yn?c=i.intersectTriangle(o,a,s,!0,r):c=i.intersectTriangle(s,a,o,t.side===Ni,r),c===null)return null;ho.copy(r),ho.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:n}}function fo(n,t,e,i,s,a,o,r,c,l){n.getVertexPosition(r,ro),n.getVertexPosition(c,co),n.getVertexPosition(l,lo);const u=Gp(n,t,e,i,ro,co,lo,Au);if(u){const h=new k;Bn.getBarycoord(Au,ro,co,lo,h),s&&(u.uv=Bn.getInterpolatedAttribute(s,r,c,l,h,new ft)),a&&(u.uv1=Bn.getInterpolatedAttribute(a,r,c,l,h,new ft)),o&&(u.normal=Bn.getInterpolatedAttribute(o,r,c,l,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a:r,b:c,c:l,normal:new k,materialIndex:0};Bn.getNormal(ro,co,lo,m.normal),u.face=m,u.barycoord=h}return u}class Zt extends hn{constructor(t=1,e=1,i=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],h=[];let m=0,p=0;g("z","y","x",-1,-1,i,e,t,o,a,0),g("z","y","x",1,-1,i,e,-t,o,a,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function g(_,d,f,S,v,b,P,R,T,U,q){const y=b/T,x=P/U,D=b/2,N=P/2,B=R/2,I=T+1,O=U+1;let L=0,F=0;const rt=new k;for(let ht=0;ht<O;ht++){const dt=ht*x-N;for(let Ht=0;Ht<I;Ht++){const Wt=Ht*y-D;rt[_]=Wt*S,rt[d]=dt*v,rt[f]=B,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[d]=0,rt[f]=R>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Ht/T),h.push(1-ht/U),L+=1}}for(let ht=0;ht<U;ht++)for(let dt=0;dt<T;dt++){const Ht=m+dt+I*ht,Wt=m+dt+I*(ht+1),K=m+(dt+1)+I*(ht+1),ct=m+(dt+1)+I*ht;c.push(Ht,Wt,ct),c.push(Wt,K,ct),F+=6}r.addGroup(p,F,q),p+=F,m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function na(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pn(n){const t={};for(let e=0;e<n.length;e++){const i=na(n[e]);for(const s in i)t[s]=i[s]}return t}function Wp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const $p={clone:na,merge:pn};var Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=na(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class md extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new k,Ru=new ft,Cu=new ft;class kn extends md{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,i,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ls=1;class Yp extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);const a=new kn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);const o=new kn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);const r=new kn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);const c=new kn(Ps,Ls,t,e);c.layers=this.layers,this.add(c);const l=new kn(Ps,Ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,h=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,r),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,m,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gd extends un{constructor(t,e,i,s,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,i,s,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kp extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new gd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zt(5,5,5),a=new Oi({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Li});a.uniforms.tEquirect.value=e;const o=new G(s,a),r=e.minFilter;return e.minFilter===as&&(e.minFilter=qn),new Yp(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(a)}}const Or=new k,Jp=new k,Zp=new ee;class Qi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Or.subVectors(i,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Or),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(Or).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new ir,po=new k;class Il{constructor(t=new Qi,e=new Qi,i=new Qi,s=new Qi,a=new Qi,o=new Qi){this.planes=[t,e,i,s,a,o]}set(t,e,i,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi){const i=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],c=s[3],l=s[4],u=s[5],h=s[6],m=s[7],p=s[8],g=s[9],_=s[10],d=s[11],f=s[12],S=s[13],v=s[14],b=s[15];if(i[0].setComponents(c-a,m-l,d-p,b-f).normalize(),i[1].setComponents(c+a,m+l,d+p,b+f).normalize(),i[2].setComponents(c+o,m+u,d+g,b+S).normalize(),i[3].setComponents(c-o,m-u,d-g,b-S).normalize(),i[4].setComponents(c-r,m-h,d-_,b-v).normalize(),e===mi)i[5].setComponents(c+r,m+h,d+_,b+v).normalize();else if(e===qo)i[5].setComponents(r,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let n=null,t=!1,e=null,i=null;function s(a,o){e(a,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Qp(n){const t=new WeakMap;function e(r,c){const l=r.array,u=r.usage,h=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,u),r.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)r.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:r.version,size:h}}function i(r,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,r),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let m=0;for(let p=1;p<h.length;p++){const g=h[m],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,h[m]=_)}h.length=m+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const c=t.get(r);c&&(n.deleteBuffer(c.buffer),t.delete(r))}function o(r,c){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const u=t.get(r);(!u||u.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const l=t.get(r);if(l===void 0)t.set(r,e(r,c));else if(l.version<r.version){if(l.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,r,c),l.version=r.version}}return{get:s,remove:a,update:o}}class zt extends hn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(s),l=r+1,u=c+1,h=t/r,m=e/c,p=[],g=[],_=[],d=[];for(let f=0;f<u;f++){const S=f*m-o;for(let v=0;v<l;v++){const b=v*h-a;g.push(b,-S,0),_.push(0,0,1),d.push(v/r),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<r;S++){const v=S+l*f,b=S+l*(f+1),P=S+1+l*(f+1),R=S+1+l*f;p.push(v,b,R),p.push(b,P,R)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.width,t.height,t.widthSegments,t.heightSegments)}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:t0,alphahash_pars_fragment:e0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:a0,aomap_fragment:o0,aomap_pars_fragment:r0,batching_pars_vertex:c0,batching_vertex:l0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:y0,color_pars_fragment:x0,color_pars_vertex:M0,color_vertex:S0,common:b0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:A0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:L0,envmap_fragment:k0,envmap_common_pars_fragment:I0,envmap_pars_fragment:D0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:$0,envmap_vertex:N0,fog_vertex:O0,fog_pars_vertex:F0,fog_fragment:B0,fog_pars_fragment:z0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:K0,lights_physical_fragment:J0,lights_physical_pars_fragment:Z0,lights_fragment_begin:Q0,lights_fragment_maps:tm,lights_fragment_end:em,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:rm,map_particle_fragment:cm,map_particle_pars_fragment:lm,metalnessmap_fragment:um,metalnessmap_pars_fragment:hm,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:xm,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:Lm,dithering_pars_fragment:km,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Om,shadowmask_pars_fragment:Fm,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:jm,skinnormal_vertex:Hm,specularmap_fragment:Vm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:$m,transmission_fragment:Xm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Km,uv_vertex:Jm,worldpos_vertex:Zm,background_vert:Qm,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:ag,depth_frag:og,distanceRGBA_vert:rg,distanceRGBA_frag:cg,equirect_vert:lg,equirect_frag:ug,linedashed_vert:hg,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:xg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:wg,meshtoon_vert:Eg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Lg,sprite_frag:kg},xt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Qn={basic:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new oe(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:pn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:pn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new oe(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:pn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:pn([xt.points,xt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:pn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:pn([xt.common,xt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:pn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:pn([xt.sprite,xt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:pn([xt.common,xt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:pn([xt.lights,xt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Qn.physical={uniforms:pn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const mo={r:0,b:0,g:0},Xi=new si,Ig=new Ee;function Dg(n,t,e,i,s,a,o){const r=new oe(0);let c=a===!0?0:1,l,u,h=null,m=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const b=g(S);b===null?f(r,c):b&&b.isColor&&(f(b,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(S,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===er)?(u===void 0&&(u=new G(new Zt(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:na(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xi.copy(v.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Xi)),u.material.toneMapped=_e.getTransfer(b.colorSpace)!==Le,(h!==b||m!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,m=b.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new G(new zt(2,2),new Oi({name:"BackgroundMaterial",uniforms:na(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=_e.getTransfer(b.colorSpace)!==Le,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||m!==b.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,m=b.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,v){S.getRGB(mo,pd(n)),i.buffers.color.setClear(mo.r,mo.g,mo.b,v,o)}return{getClearColor:function(){return r},setClearColor:function(S,v=1){r.set(S),c=v,f(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(r,c)},render:_,addToRenderList:d}}function Ug(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,o=!1;function r(y,x,D,N,B){let I=!1;const O=h(N,D,x);a!==O&&(a=O,l(a.object)),I=p(y,N,D,B),I&&g(y,N,D,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,b(y,x,D,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,x,D){const N=D.wireframe===!0;let B=i[y.id];B===void 0&&(B={},i[y.id]=B);let I=B[x.id];I===void 0&&(I={},B[x.id]=I);let O=I[N];return O===void 0&&(O=m(c()),I[N]=O),O}function m(y){const x=[],D=[],N=[];for(let B=0;B<e;B++)x[B]=0,D[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:D,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,x,D,N){const B=a.attributes,I=x.attributes;let O=0;const L=D.getAttributes();for(const F in L)if(L[F].location>=0){const ht=B[F];let dt=I[F];if(dt===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),ht===void 0||ht.attribute!==dt||dt&&ht.data!==dt.data)return!0;O++}return a.attributesNum!==O||a.index!==N}function g(y,x,D,N){const B={},I=x.attributes;let O=0;const L=D.getAttributes();for(const F in L)if(L[F].location>=0){let ht=I[F];ht===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const dt={};dt.attribute=ht,ht&&ht.data&&(dt.data=ht.data),B[F]=dt,O++}a.attributes=B,a.attributesNum=O,a.index=N}function _(){const y=a.newAttributes;for(let x=0,D=y.length;x<D;x++)y[x]=0}function d(y){f(y,0)}function f(y,x){const D=a.newAttributes,N=a.enabledAttributes,B=a.attributeDivisors;D[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),B[y]!==x&&(n.vertexAttribDivisor(y,x),B[y]=x)}function S(){const y=a.newAttributes,x=a.enabledAttributes;for(let D=0,N=x.length;D<N;D++)x[D]!==y[D]&&(n.disableVertexAttribArray(D),x[D]=0)}function v(y,x,D,N,B,I,O){O===!0?n.vertexAttribIPointer(y,x,D,B,I):n.vertexAttribPointer(y,x,D,N,B,I)}function b(y,x,D,N){_();const B=N.attributes,I=D.getAttributes(),O=x.defaultAttributeValues;for(const L in I){const F=I[L];if(F.location>=0){let rt=B[L];if(rt===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const ht=rt.normalized,dt=rt.itemSize,Ht=t.get(rt);if(Ht===void 0)continue;const Wt=Ht.buffer,K=Ht.type,ct=Ht.bytesPerElement,Mt=K===n.INT||K===n.UNSIGNED_INT||rt.gpuType===wl;if(rt.isInterleavedBufferAttribute){const _t=rt.data,Bt=_t.stride,At=rt.offset;if(_t.isInstancedInterleavedBuffer){for(let kt=0;kt<F.locationSize;kt++)f(F.location+kt,_t.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let kt=0;kt<F.locationSize;kt++)d(F.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let kt=0;kt<F.locationSize;kt++)v(F.location+kt,dt/F.locationSize,K,ht,Bt*ct,(At+dt/F.locationSize*kt)*ct,Mt)}else{if(rt.isInstancedBufferAttribute){for(let _t=0;_t<F.locationSize;_t++)f(F.location+_t,rt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let _t=0;_t<F.locationSize;_t++)d(F.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let _t=0;_t<F.locationSize;_t++)v(F.location+_t,dt/F.locationSize,K,ht,dt*ct,dt/F.locationSize*_t*ct,Mt)}}else if(O!==void 0){const ht=O[L];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(F.location,ht);break;case 3:n.vertexAttrib3fv(F.location,ht);break;case 4:n.vertexAttrib4fv(F.location,ht);break;default:n.vertexAttrib1fv(F.location,ht)}}}}S()}function P(){U();for(const y in i){const x=i[y];for(const D in x){const N=x[D];for(const B in N)u(N[B].object),delete N[B];delete x[D]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const x=i[y.id];for(const D in x){const N=x[D];for(const B in N)u(N[B].object),delete N[B];delete x[D]}delete i[y.id]}function T(y){for(const x in i){const D=i[x];if(D[y.id]===void 0)continue;const N=D[y.id];for(const B in N)u(N[B].object),delete N[B];delete D[y.id]}}function U(){q(),o=!0,a!==s&&(a=s,l(a.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:U,resetDefaultState:q,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:S}}function Ng(n,t,e){let i;function s(l){i=l}function a(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function r(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,m){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,m,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<m.length;_++)e.update(g,i,m[_])}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function Og(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(T){const U=T===Ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Mi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pi&&!U)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(m===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:r,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function Fg(n){const t=this;let e=null,i=0,s=!1,a=!1;const o=new Qi,r=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const p=h.length!==0||m||i!==0||s;return s=m,i=h.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,m){e=u(h,m,0)},this.setState=function(h,m,p){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||a&&!d)a?u(null):l();else{const S=a?0:i,v=S*4;let b=f.clippingState||null;c.value=b,b=u(g,m,v,p);for(let P=0;P!==v;++P)b[P]=e[P];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,m,p,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const f=p+_*4,S=m.matrixWorldInverse;r.getNormalMatrix(S),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,b=p;v!==_;++v,b+=4)o.copy(h[v]).applyMatrix4(S,r),o.normal.toArray(d,b),d[b+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Bg(n){let t=new WeakMap;function e(o,r){return r===xc?o.mapping=Js:r===Mc&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===xc||r===Mc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kp(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class vd extends md{constructor(t=-1,e=1,i=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const js=4,Pu=[.125,.215,.35,.446,.526,.582],ns=20,Fr=new vd,Lu=new oe;let Br=null,zr=0,jr=0,Hr=!1;const ts=(1+Math.sqrt(5))/2,ks=1/ts,ku=[new k(-ts,ks,0),new k(ts,ks,0),new k(-ks,0,ts),new k(ks,0,ts),new k(0,ts,-ks),new k(0,ts,ks),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Iu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,zr,jr),this._renderer.xr.enabled=Hr,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ga,format:Yn,colorSpace:Bi,depthBuffer:!1},s=Du(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(a)),this._blurMaterial=jg(a,t,e)}return s}_compileMaterial(t){const e=new G(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,i,s){const r=new kn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Lu),u.toneMapping=ki,u.autoClear=!1;const p=new se({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new G(new Zt,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(Lu),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(r.up.set(0,c[f],0),r.lookAt(l[f],0,0)):S===1?(r.up.set(0,0,c[f]),r.lookAt(0,l[f],0)):(r.up.set(0,c[f],0),r.lookAt(0,0,l[f]));const v=this._cubeSize;go(s,S*v,f>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,r),u.render(t,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Js||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;go(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Fr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=ku[(s-a-1)%ku.length];this._blur(t,a-1,a,o,r)}e.autoClear=i}_blur(t,e,i,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",a),this._halfBlur(o,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new G(this._lodPlanes[s],l),m=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ns-1),_=a/g,d=isFinite(a)?1+Math.floor(u*_):ns;d>ns&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ns}`);const f=[];let S=0;for(let T=0;T<ns;++T){const U=T/_,q=Math.exp(-U*U/2);f.push(q),T===0?S+=q:T<d&&(S+=2*q)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;m.envMap.value=t.texture,m.samples.value=d,m.weights.value=f,m.latitudinal.value=o==="latitudinal",r&&(m.poleAxis.value=r);const{_lodMax:v}=this;m.dTheta.value=g,m.mipInt.value=v-i;const b=this._sizeLods[s],P=3*b*(s>v-js?s-v+js:0),R=4*(this._cubeSize-b);go(e,P,R,3*b,2*b),c.setRenderTarget(e),c.render(h,Fr)}}function zg(n){const t=[],e=[],i=[];let s=n;const a=n-js+1+Pu.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let c=1/r;o>n-js?c=Pu[o-n+js-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),u=-l,h=1+l,m=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,d=2,f=1,S=new Float32Array(_*g*p),v=new Float32Array(d*g*p),b=new Float32Array(f*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,U=R>2?0:-1,q=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];S.set(q,_*g*R),v.set(m,d*g*R);const y=[R,R,R,R,R,R];b.set(y,f*g*R)}const P=new hn;P.setAttribute("position",new Kn(S,_)),P.setAttribute("uv",new Kn(v,d)),P.setAttribute("faceIndex",new Kn(b,f)),t.push(P),s>js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Du(n,t,e){const i=new ls(n,t,e);return i.texture.mapping=er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jg(n,t,e){const i=new Float32Array(ns),s=new k(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Uu(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Nu(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(n){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===xc||c===Mc,u=c===Js||c===Zs;if(l||u){let h=t.get(r);const m=h!==void 0?h.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==m)return e===null&&(e=new Iu(n)),h=l?e.fromEquirectangular(r,h):e.fromCubemap(r,h),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),h.texture;if(h!==void 0)return h.texture;{const p=r.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Iu(n)),h=l?e.fromEquirectangular(r):e.fromCubemap(r),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),r.addEventListener("dispose",a),h.texture):null}}}return r}function s(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Vg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gg(n,t,e,i){const s={},a=new WeakMap;function o(h){const m=h.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const _=m.morphAttributes[g];for(let d=0,f=_.length;d<f;d++)t.remove(_[d])}m.removeEventListener("dispose",o),delete s[m.id];const p=a.get(m);p&&(t.remove(p),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function r(h,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function c(h){const m=h.attributes;for(const g in m)t.update(m[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let d=0,f=_.length;d<f;d++)t.update(_[d],n.ARRAY_BUFFER)}}function l(h){const m=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let v=0,b=S.length;v<b;v+=3){const P=S[v+0],R=S[v+1],T=S[v+2];m.push(P,R,R,T,T,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,b=S.length/3-1;v<b;v+=3){const P=v+0,R=v+1,T=v+2;m.push(P,R,R,T,T,P)}}else return;const d=new(cd(m)?fd:dd)(m,1);d.version=_;const f=a.get(h);f&&t.remove(f),a.set(h,d)}function u(h){const m=a.get(h);if(m){const p=h.index;p!==null&&m.version<p.version&&l(h)}else l(h);return a.get(h)}return{get:r,update:c,getWireframeAttribute:u}}function Wg(n,t,e){let i;function s(m){i=m}let a,o;function r(m){a=m.type,o=m.bytesPerElement}function c(m,p){n.drawElements(i,p,a,m*o),e.update(p,i,1)}function l(m,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,m*o,g),e.update(p,i,g))}function u(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,m,0,g);let d=0;for(let f=0;f<g;f++)d+=p[f];e.update(d,i,1)}function h(m,p,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<m.length;f++)l(m[f]/o,p[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,a,m,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S];for(let S=0;S<_.length;S++)e.update(f,i,_[S])}}this.setMode=s,this.setIndex=r,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $g(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=r*(a/3);break;case n.LINES:e.lines+=r*(a/2);break;case n.LINE_STRIP:e.lines+=r*(a-1);break;case n.LINE_LOOP:e.lines+=r*a;break;case n.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xg(n,t,e){const i=new WeakMap,s=new be;function a(o,r,c){const l=o.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=u!==void 0?u.length:0;let m=i.get(r);if(m===void 0||m.count!==h){let y=function(){U.dispose(),i.delete(r),r.removeEventListener("dispose",y)};var p=y;m!==void 0&&m.texture.dispose();const g=r.morphAttributes.position!==void 0,_=r.morphAttributes.normal!==void 0,d=r.morphAttributes.color!==void 0,f=r.morphAttributes.position||[],S=r.morphAttributes.normal||[],v=r.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),d===!0&&(b=3);let P=r.attributes.position.count*b,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*R*4*h),U=new ud(T,P,R,h);U.type=pi,U.needsUpdate=!0;const q=b*4;for(let x=0;x<h;x++){const D=f[x],N=S[x],B=v[x],I=P*R*4*x;for(let O=0;O<D.count;O++){const L=O*q;g===!0&&(s.fromBufferAttribute(D,O),T[I+L+0]=s.x,T[I+L+1]=s.y,T[I+L+2]=s.z,T[I+L+3]=0),_===!0&&(s.fromBufferAttribute(N,O),T[I+L+4]=s.x,T[I+L+5]=s.y,T[I+L+6]=s.z,T[I+L+7]=0),d===!0&&(s.fromBufferAttribute(B,O),T[I+L+8]=s.x,T[I+L+9]=s.y,T[I+L+10]=s.z,T[I+L+11]=B.itemSize===4?s.w:1)}}m={count:h,texture:U,size:new ft(P,R)},i.set(r,m),r.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=r.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function qg(n,t,e,i){let s=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return h}function o(){s=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class yd extends un{constructor(t,e,i,s,a,o,r,c,l,u=$s){if(u!==$s&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=cs),i===void 0&&u===ea&&(i=ta),super(null,s,a,o,r,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:zn,this.minFilter=c!==void 0?c:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xd=new un,Ou=new yd(1,1),Md=new ud,Sd=new Dp,bd=new gd,Fu=[],Bu=[],zu=new Float32Array(16),ju=new Float32Array(9),Hu=new Float32Array(4);function la(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=Fu[s];if(a===void 0&&(a=new Float32Array(s),Fu[s]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,n[o].toArray(a,r)}return a}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function sr(n,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function Qg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Ze(e,i)}}function t_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,i))return;ju.set(i),n.uniformMatrix3fv(this.addr,!1,ju),Ze(e,i)}}function e_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Je(e,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),Ze(e,i)}}function n_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function s_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function a_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function o_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function r_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function c_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function l_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function u_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Ou.compareFunction=rd,a=Ou):a=xd,e.setTexture2D(t||a,s)}function h_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sd,s)}function d_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bd,s)}function f_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Md,s)}function p_(n){switch(n){case 5126:return Yg;case 35664:return Kg;case 35665:return Jg;case 35666:return Zg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return r_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(n,t){n.uniform1fv(this.addr,t)}function g_(n,t){const e=la(t,this.size,2);n.uniform2fv(this.addr,e)}function __(n,t){const e=la(t,this.size,3);n.uniform3fv(this.addr,e)}function v_(n,t){const e=la(t,this.size,4);n.uniform4fv(this.addr,e)}function y_(n,t){const e=la(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function x_(n,t){const e=la(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function M_(n,t){const e=la(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function S_(n,t){n.uniform1iv(this.addr,t)}function b_(n,t){n.uniform2iv(this.addr,t)}function w_(n,t){n.uniform3iv(this.addr,t)}function E_(n,t){n.uniform4iv(this.addr,t)}function T_(n,t){n.uniform1uiv(this.addr,t)}function A_(n,t){n.uniform2uiv(this.addr,t)}function R_(n,t){n.uniform3uiv(this.addr,t)}function C_(n,t){n.uniform4uiv(this.addr,t)}function P_(n,t,e){const i=this.cache,s=t.length,a=sr(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xd,a[o])}function L_(n,t,e){const i=this.cache,s=t.length,a=sr(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sd,a[o])}function k_(n,t,e){const i=this.cache,s=t.length,a=sr(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bd,a[o])}function I_(n,t,e){const i=this.cache,s=t.length,a=sr(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Md,a[o])}function D_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return v_;case 35674:return y_;case 35675:return x_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return b_;case 35668:case 35672:return w_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return I_}}class U_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}}class N_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D_(e.type)}}class O_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],i)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Vu(n,t){n.seq.push(t),n.map[t.id]=t}function F_(n,t,e){const i=n.name,s=i.length;for(Vr.lastIndex=0;;){const a=Vr.exec(i),o=Vr.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===s){Vu(e,l===void 0?new U_(r,n,t):new N_(r,n,t));break}else{let h=e.map[r];h===void 0&&(h=new O_(r),Vu(e,h)),e=h}}}class Fo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);F_(a,o,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Gu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const B_=37297;let z_=0;function j_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function H_(n){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(n);let i;switch(t===e?i="":t===Xo&&e===$o?i="LinearDisplayP3ToLinearSRGB":t===$o&&e===Xo&&(i="LinearSRGBToLinearDisplayP3"),n){case Bi:case nr:return[i,"LinearTransferOETF"];case He:case Pl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+j_(n.getShaderSource(t),o)}else return s}function V_(n,t){const e=H_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function G_(n,t){let e;switch(t){case rp:e="Linear";break;case cp:e="Reinhard";break;case lp:e="Cineon";break;case qh:e="ACESFilmic";break;case hp:e="AgX";break;case dp:e="Neutral";break;case up:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new k;function W_(){_e.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function X_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function q_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),o=a.name;let r=1;a.type===n.FLOAT_MAT2&&(r=2),a.type===n.FLOAT_MAT3&&(r=3),a.type===n.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:n.getAttribLocation(t,o),locationSize:r}}return e}function Ea(n){return n!==""}function $u(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(Y_,J_)}const K_=new Map;function J_(n,t){let e=te[t];if(e===void 0){const i=K_.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(n){return n.replace(Z_,Q_)}function Q_(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function ev(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Zs:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function iv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xh:t="ENVMAP_BLENDING_MULTIPLY";break;case ap:t="ENVMAP_BLENDING_MIX";break;case op:t="ENVMAP_BLENDING_ADD";break}return t}function sv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function av(n,t,e,i){const s=n.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=tv(e),l=ev(e),u=nv(e),h=iv(e),m=sv(e),p=$_(e),g=X_(a),_=s.createProgram();let d,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ea).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ea).join(`
`),f.length>0&&(f+=`
`)):(d=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),f=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?te.tonemapping_pars_fragment:"",e.toneMapping!==ki?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),o=Jc(o),o=$u(o,e),o=Xu(o,e),r=Jc(r),r=$u(r,e),r=Xu(r,e),o=qu(o),r=qu(r),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=S+d+o,b=S+f+r,P=Gu(s,s.VERTEX_SHADER,v),R=Gu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,P),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(x){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(P).trim(),B=s.getShaderInfoLog(R).trim();let I=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,R);else{const L=Wu(s,P,"vertex"),F=Wu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+D+`
`+L+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||B==="")&&(O=!1);O&&(x.diagnostics={runnable:I,programLog:D,vertexShader:{log:N,prefix:d},fragmentShader:{log:B,prefix:f}})}s.deleteShader(P),s.deleteShader(R),U=new Fo(s,_),q=q_(s,_)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let q;this.getAttributes=function(){return q===void 0&&T(this),q};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,B_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let ov=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cv(t),e.set(t,i)),i}}class cv{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}}function lv(n,t,e,i,s,a,o){const r=new kl,c=new rv,l=new Set,u=[],h=s.logarithmicDepthBuffer,m=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,x,D,N,B){const I=N.fog,O=B.geometry,L=y.isMeshStandardMaterial?N.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||L),rt=F&&F.mapping===er?F.image.height:null,ht=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const dt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ht=dt!==void 0?dt.length:0;let Wt=0;O.morphAttributes.position!==void 0&&(Wt=1),O.morphAttributes.normal!==void 0&&(Wt=2),O.morphAttributes.color!==void 0&&(Wt=3);let K,ct,Mt,_t;if(ht){const bn=Qn[ht];K=bn.vertexShader,ct=bn.fragmentShader}else K=y.vertexShader,ct=y.fragmentShader,c.update(y),Mt=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const Bt=n.getRenderTarget(),At=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,Vt=!!y.map,H=!!y.matcap,A=!!F,lt=!!y.aoMap,st=!!y.lightMap,nt=!!y.bumpMap,ut=!!y.normalMap,mt=!!y.displacementMap,vt=!!y.emissiveMap,C=!!y.metalnessMap,w=!!y.roughnessMap,$=y.anisotropy>0,Z=y.clearcoat>0,at=y.dispersion>0,Q=y.iridescence>0,St=y.sheen>0,yt=y.transmission>0,Rt=$&&!!y.anisotropyMap,re=Z&&!!y.clearcoatMap,pt=Z&&!!y.clearcoatNormalMap,Ct=Z&&!!y.clearcoatRoughnessMap,qt=Q&&!!y.iridescenceMap,Yt=Q&&!!y.iridescenceThicknessMap,Pt=St&&!!y.sheenColorMap,ce=St&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Te=!!y.specularColorMap,z=!!y.specularIntensityMap,Et=yt&&!!y.transmissionMap,J=yt&&!!y.thicknessMap,ot=!!y.gradientMap,bt=!!y.alphaMap,Tt=y.alphaTest>0,ue=!!y.alphaHash,We=!!y.extensions;let Sn=ki;y.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(Sn=n.toneMapping);const fe={shaderID:ht,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:ct,defines:y.defines,customVertexShaderID:Mt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Bt===null?n.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:Bi,alphaToCoverage:!!y.alphaToCoverage,map:Vt,matcap:H,envMap:A,envMapMode:A&&F.mapping,envMapCubeUVHeight:rt,aoMap:lt,lightMap:st,bumpMap:nt,normalMap:ut,displacementMap:p&&mt,emissiveMap:vt,normalMapObjectSpace:ut&&y.normalMapType===gp,normalMapTangentSpace:ut&&y.normalMapType===od,metalnessMap:C,roughnessMap:w,anisotropy:$,anisotropyMap:Rt,clearcoat:Z,clearcoatMap:re,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ct,dispersion:at,iridescence:Q,iridescenceMap:qt,iridescenceThicknessMap:Yt,sheen:St,sheenColorMap:Pt,sheenRoughnessMap:ce,specularMap:Jt,specularColorMap:Te,specularIntensityMap:z,transmission:yt,transmissionMap:Et,thicknessMap:J,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:Tt,alphaHash:ue,combine:y.combine,mapUv:Vt&&d(y.map.channel),aoMapUv:lt&&d(y.aoMap.channel),lightMapUv:st&&d(y.lightMap.channel),bumpMapUv:nt&&d(y.bumpMap.channel),normalMapUv:ut&&d(y.normalMap.channel),displacementMapUv:mt&&d(y.displacementMap.channel),emissiveMapUv:vt&&d(y.emissiveMap.channel),metalnessMapUv:C&&d(y.metalnessMap.channel),roughnessMapUv:w&&d(y.roughnessMap.channel),anisotropyMapUv:Rt&&d(y.anisotropyMap.channel),clearcoatMapUv:re&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(y.sheenRoughnessMap.channel),specularMapUv:Jt&&d(y.specularMap.channel),specularColorMapUv:Te&&d(y.specularColorMap.channel),specularIntensityMapUv:z&&d(y.specularIntensityMap.channel),transmissionMapUv:Et&&d(y.transmissionMap.channel),thicknessMapUv:J&&d(y.thicknessMap.channel),alphaMapUv:bt&&d(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Vt||bt),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:m,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Wt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Sn,decodeVideoTexture:Vt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function S(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)x.push(D),x.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(x,y),b(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function v(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.alphaToCoverage&&r.enable(20),y.push(r.mask)}function P(y){const x=_[y.type];let D;if(x){const N=Qn[x];D=$p.clone(N.uniforms)}else D=y.uniforms;return D}function R(y,x){let D;for(let N=0,B=u.length;N<B;N++){const I=u[N];if(I.cacheKey===x){D=I,++D.usedTimes;break}}return D===void 0&&(D=new av(n,x,y,a),u.push(D)),D}function T(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function U(y){c.remove(y)}function q(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:U,programs:u,dispose:q}}function uv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function s(o,r,c){n.get(o)[r]=c}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function hv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ku(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ju(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function o(h,m,p,g,_,d){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:m,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},n[t]=f):(f.id=h.id,f.object=h,f.geometry=m,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=d),t++,f}function r(h,m,p,g,_,d){const f=o(h,m,p,g,_,d);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,m,p,g,_,d){const f=o(h,m,p,g,_,d);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,m){e.length>1&&e.sort(h||hv),i.length>1&&i.sort(m||Ku),s.length>1&&s.sort(m||Ku)}function u(){for(let h=t,m=n.length;h<m;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:r,unshift:c,finish:u,sort:l}}function dv(){let n=new WeakMap;function t(i,s){const a=n.get(i);let o;return a===void 0?(o=new Ju,n.set(i,[o])):s>=a.length?(o=new Ju,a.push(o)):o=a[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new oe};break;case"SpotLight":e={position:new k,direction:new k,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function pv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mv=0;function gv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _v(n){const t=new fv,e=pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const s=new k,a=new Ee,o=new Ee;function r(l){let u=0,h=0,m=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,g=0,_=0,d=0,f=0,S=0,v=0,b=0,P=0,R=0,T=0;l.sort(gv);for(let q=0,y=l.length;q<y;q++){const x=l[q],D=x.color,N=x.intensity,B=x.distance,I=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=D.r*N,h+=D.g*N,m+=D.b*N;else if(x.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(x.sh.coefficients[O],N);T++}else if(x.isDirectionalLight){const O=t.get(x);if(O.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const L=x.shadow,F=e.get(x);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=x.shadow.matrix,S++}i.directional[p]=O,p++}else if(x.isSpotLight){const O=t.get(x);O.position.setFromMatrixPosition(x.matrixWorld),O.color.copy(D).multiplyScalar(N),O.distance=B,O.coneCos=Math.cos(x.angle),O.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),O.decay=x.decay,i.spot[_]=O;const L=x.shadow;if(x.map&&(i.spotLightMap[P]=x.map,P++,L.updateMatrices(x),x.castShadow&&R++),i.spotLightMatrix[_]=L.matrix,x.castShadow){const F=e.get(x);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=I,b++}_++}else if(x.isRectAreaLight){const O=t.get(x);O.color.copy(D).multiplyScalar(N),O.halfWidth.set(x.width*.5,0,0),O.halfHeight.set(0,x.height*.5,0),i.rectArea[d]=O,d++}else if(x.isPointLight){const O=t.get(x);if(O.color.copy(x.color).multiplyScalar(x.intensity),O.distance=x.distance,O.decay=x.decay,x.castShadow){const L=x.shadow,F=e.get(x);F.shadowIntensity=L.intensity,F.shadowBias=L.bias,F.shadowNormalBias=L.normalBias,F.shadowRadius=L.radius,F.shadowMapSize=L.mapSize,F.shadowCameraNear=L.camera.near,F.shadowCameraFar=L.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=x.shadow.matrix,v++}i.point[g]=O,g++}else if(x.isHemisphereLight){const O=t.get(x);O.skyColor.copy(x.color).multiplyScalar(N),O.groundColor.copy(x.groundColor).multiplyScalar(N),i.hemi[f]=O,f++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==d||U.hemiLength!==f||U.numDirectionalShadows!==S||U.numPointShadows!==v||U.numSpotShadows!==b||U.numSpotMaps!==P||U.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=d,U.hemiLength=f,U.numDirectionalShadows=S,U.numPointShadows=v,U.numSpotShadows=b,U.numSpotMaps=P,U.numLightProbes=T,i.version=mv++)}function c(l,u){let h=0,m=0,p=0,g=0,_=0;const d=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const v=l[f];if(v.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(v.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),p++}else if(v.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),o.identity(),a.copy(v.matrixWorld),a.premultiply(d),o.extractRotation(a),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(d),_++}}}return{setup:r,setupView:c,state:i}}function Zu(n){const t=new _v(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function r(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:r,setupLightsView:c,pushLight:a,pushShadow:o}}function vv(n){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let r;return o===void 0?(r=new Zu(n),t.set(s,[r])):a>=o.length?(r=new Zu(n),o.push(r)):r=o[a],r}function i(){t=new WeakMap}return{get:e,dispose:i}}class yv extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xv extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bv(n,t,e){let i=new Il;const s=new ft,a=new ft,o=new be,r=new yv({depthPacking:mp}),c=new xv,l={},u=e.maxTextureSize,h={[Ni]:yn,[yn]:Ni,[mn]:mn},m=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new G(g,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let f=this.type;this.render=function(R,T,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const q=n.getRenderTarget(),y=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Li),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=f!==di&&this.type===di,B=f===di&&this.type!==di;for(let I=0,O=R.length;I<O;I++){const L=R[I],F=L.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const rt=F.getFrameExtents();if(s.multiply(rt),a.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/rt.x),s.x=a.x*rt.x,F.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/rt.y),s.y=a.y*rt.y,F.mapSize.y=a.y)),F.map===null||N===!0||B===!0){const dt=this.type!==di?{minFilter:zn,magFilter:zn}:{};F.map!==null&&F.map.dispose(),F.map=new ls(s.x,s.y,dt),F.map.texture.name=L.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ht=F.getViewportCount();for(let dt=0;dt<ht;dt++){const Ht=F.getViewport(dt);o.set(a.x*Ht.x,a.y*Ht.y,a.x*Ht.z,a.y*Ht.w),D.viewport(o),F.updateMatrices(L,dt),i=F.getFrustum(),b(T,U,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===di&&S(F,U),F.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(q,y,x)};function S(R,T){const U=t.update(_);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ls(s.x,s.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,U,m,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,U,p,_,null)}function v(R,T,U,q){let y=null;const x=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(x!==void 0)y=x;else if(y=U.isPointLight===!0?c:r,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=y.uuid,N=T.uuid;let B=l[D];B===void 0&&(B={},l[D]=B);let I=B[N];I===void 0&&(I=y.clone(),B[N]=I,T.addEventListener("dispose",P)),y=I}if(y.visible=T.visible,y.wireframe=T.wireframe,q===di?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=U}return y}function b(R,T,U,q,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const N=t.update(R),B=R.material;if(Array.isArray(B)){const I=N.groups;for(let O=0,L=I.length;O<L;O++){const F=I[O],rt=B[F.materialIndex];if(rt&&rt.visible){const ht=v(R,rt,q,y);R.onBeforeShadow(n,R,T,U,N,ht,F),n.renderBufferDirect(U,null,N,ht,R,F),R.onAfterShadow(n,R,T,U,N,ht,F)}}}else if(B.visible){const I=v(R,B,q,y);R.onBeforeShadow(n,R,T,U,N,I,null),n.renderBufferDirect(U,null,N,I,R,null),R.onAfterShadow(n,R,T,U,N,I,null)}}const D=R.children;for(let N=0,B=D.length;N<B;N++)b(D[N],T,U,q,y)}function P(R){R.target.removeEventListener("dispose",P);for(const U in l){const q=l[U],y=R.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}const wv={[fc]:pc,[mc]:vc,[gc]:yc,[Ks]:_c,[pc]:fc,[vc]:mc,[yc]:gc,[_c]:Ks};function Ev(n){function t(){let z=!1;const Et=new be;let J=null;const ot=new be(0,0,0,0);return{setMask:function(bt){J!==bt&&!z&&(n.colorMask(bt,bt,bt,bt),J=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Tt,ue,We,Sn){Sn===!0&&(bt*=We,Tt*=We,ue*=We),Et.set(bt,Tt,ue,We),ot.equals(Et)===!1&&(n.clearColor(bt,Tt,ue,We),ot.copy(Et))},reset:function(){z=!1,J=null,ot.set(-1,0,0,0)}}}function e(){let z=!1,Et=!1,J=null,ot=null,bt=null;return{setReversed:function(Tt){Et=Tt},setTest:function(Tt){Tt?Mt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Tt){J!==Tt&&!z&&(n.depthMask(Tt),J=Tt)},setFunc:function(Tt){if(Et&&(Tt=wv[Tt]),ot!==Tt){switch(Tt){case fc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case gc:n.depthFunc(n.EQUAL);break;case _c:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=Tt}},setLocked:function(Tt){z=Tt},setClear:function(Tt){bt!==Tt&&(n.clearDepth(Tt),bt=Tt)},reset:function(){z=!1,J=null,ot=null,bt=null}}}function i(){let z=!1,Et=null,J=null,ot=null,bt=null,Tt=null,ue=null,We=null,Sn=null;return{setTest:function(fe){z||(fe?Mt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(fe){Et!==fe&&!z&&(n.stencilMask(fe),Et=fe)},setFunc:function(fe,bn,oi){(J!==fe||ot!==bn||bt!==oi)&&(n.stencilFunc(fe,bn,oi),J=fe,ot=bn,bt=oi)},setOp:function(fe,bn,oi){(Tt!==fe||ue!==bn||We!==oi)&&(n.stencilOp(fe,bn,oi),Tt=fe,ue=bn,We=oi)},setLocked:function(fe){z=fe},setClear:function(fe){Sn!==fe&&(n.clearStencil(fe),Sn=fe)},reset:function(){z=!1,Et=null,J=null,ot=null,bt=null,Tt=null,ue=null,We=null,Sn=null}}}const s=new t,a=new e,o=new i,r=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,m=[],p=null,g=!1,_=null,d=null,f=null,S=null,v=null,b=null,P=null,R=new oe(0,0,0),T=0,U=!1,q=null,y=null,x=null,D=null,N=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(L)[1]),I=O>=1):L.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),I=O>=2);let F=null,rt={};const ht=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),Ht=new be().fromArray(ht),Wt=new be().fromArray(dt);function K(z,Et,J,ot){const bt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(z,Tt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<J;ue++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(Et+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Tt}const ct={};ct[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Mt(n.DEPTH_TEST),a.setFunc(Ks),st(!1),nt(ru),Mt(n.CULL_FACE),A(Li);function Mt(z){l[z]!==!0&&(n.enable(z),l[z]=!0)}function _t(z){l[z]!==!1&&(n.disable(z),l[z]=!1)}function Bt(z,Et){return u[z]!==Et?(n.bindFramebuffer(z,Et),u[z]=Et,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Et),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function At(z,Et){let J=m,ot=!1;if(z){J=h.get(Et),J===void 0&&(J=[],h.set(Et,J));const bt=z.textures;if(J.length!==bt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,ue=bt.length;Tt<ue;Tt++)J[Tt]=n.COLOR_ATTACHMENT0+Tt;J.length=bt.length,ot=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ot=!0);ot&&n.drawBuffers(J)}function kt(z){return p!==z?(n.useProgram(z),p=z,!0):!1}const Vt={[es]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Vf]:n.FUNC_REVERSE_SUBTRACT};Vt[Gf]=n.MIN,Vt[Wf]=n.MAX;const H={[$f]:n.ZERO,[Xf]:n.ONE,[qf]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[tp]:n.SRC_ALPHA_SATURATE,[Zf]:n.DST_COLOR,[Kf]:n.DST_ALPHA,[Yf]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[Qf]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[ep]:n.CONSTANT_COLOR,[np]:n.ONE_MINUS_CONSTANT_COLOR,[ip]:n.CONSTANT_ALPHA,[sp]:n.ONE_MINUS_CONSTANT_ALPHA};function A(z,Et,J,ot,bt,Tt,ue,We,Sn,fe){if(z===Li){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(Mt(n.BLEND),g=!0),z!==jf){if(z!==_||fe!==U){if((d!==es||v!==es)&&(n.blendEquation(n.FUNC_ADD),d=es,v=es),fe)switch(z){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.ONE,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}f=null,S=null,b=null,P=null,R.set(0,0,0),T=0,_=z,U=fe}return}bt=bt||Et,Tt=Tt||J,ue=ue||ot,(Et!==d||bt!==v)&&(n.blendEquationSeparate(Vt[Et],Vt[bt]),d=Et,v=bt),(J!==f||ot!==S||Tt!==b||ue!==P)&&(n.blendFuncSeparate(H[J],H[ot],H[Tt],H[ue]),f=J,S=ot,b=Tt,P=ue),(We.equals(R)===!1||Sn!==T)&&(n.blendColor(We.r,We.g,We.b,Sn),R.copy(We),T=Sn),_=z,U=!1}function lt(z,Et){z.side===mn?_t(n.CULL_FACE):Mt(n.CULL_FACE);let J=z.side===yn;Et&&(J=!J),st(J),z.blending===Ws&&z.transparent===!1?A(Li):A(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const ot=z.stencilWrite;o.setTest(ot),ot&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(z){q!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),q=z)}function nt(z){z!==Bf?(Mt(n.CULL_FACE),z!==y&&(z===ru?n.cullFace(n.BACK):z===zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),y=z}function ut(z){z!==x&&(I&&n.lineWidth(z),x=z)}function mt(z,Et,J){z?(Mt(n.POLYGON_OFFSET_FILL),(D!==Et||N!==J)&&(n.polygonOffset(Et,J),D=Et,N=J)):_t(n.POLYGON_OFFSET_FILL)}function vt(z){z?Mt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function C(z){z===void 0&&(z=n.TEXTURE0+B-1),F!==z&&(n.activeTexture(z),F=z)}function w(z,Et,J){J===void 0&&(F===null?J=n.TEXTURE0+B-1:J=F);let ot=rt[J];ot===void 0&&(ot={type:void 0,texture:void 0},rt[J]=ot),(ot.type!==z||ot.texture!==Et)&&(F!==J&&(n.activeTexture(J),F=J),n.bindTexture(z,Et||ct[z]),ot.type=z,ot.texture=Et)}function $(){const z=rt[F];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(z){Ht.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ht.copy(z))}function Pt(z){Wt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Wt.copy(z))}function ce(z,Et){let J=c.get(Et);J===void 0&&(J=new WeakMap,c.set(Et,J));let ot=J.get(z);ot===void 0&&(ot=n.getUniformBlockIndex(Et,z.name),J.set(z,ot))}function Jt(z,Et){const ot=c.get(Et).get(z);r.get(Et)!==ot&&(n.uniformBlockBinding(Et,ot,z.__bindingPointIndex),r.set(Et,ot))}function Te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},F=null,rt={},u={},h=new WeakMap,m=[],p=null,g=!1,_=null,d=null,f=null,S=null,v=null,b=null,P=null,R=new oe(0,0,0),T=0,U=!1,q=null,y=null,x=null,D=null,N=null,Ht.set(0,0,n.canvas.width,n.canvas.height),Wt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Mt,disable:_t,bindFramebuffer:Bt,drawBuffers:At,useProgram:kt,setBlending:A,setMaterial:lt,setFlipSided:st,setCullFace:nt,setLineWidth:ut,setPolygonOffset:mt,setScissorTest:vt,activeTexture:C,bindTexture:w,unbindTexture:$,compressedTexImage2D:Z,compressedTexImage3D:at,texImage2D:Ct,texImage3D:qt,updateUBOMapping:ce,uniformBlockBinding:Jt,texStorage2D:re,texStorage3D:pt,texSubImage2D:Q,texSubImage3D:St,compressedTexSubImage2D:yt,compressedTexSubImage3D:Rt,scissor:Yt,viewport:Pt,reset:Te}}function Qu(n,t,e,i){const s=Tv(i);switch(e){case Qh:return n*t;case ed:return n*t;case nd:return n*t*2;case id:return n*t/s.components*s.byteLength;case Al:return n*t/s.components*s.byteLength;case sd:return n*t*2/s.components*s.byteLength;case Rl:return n*t*2/s.components*s.byteLength;case td:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case Cl:return n*t*4/s.components*s.byteLength;case ko:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Do:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:case Tc:return Math.max(n,16)*Math.max(t,8)/4;case bc:case Ec:return Math.max(n,8)*Math.max(t,8)/2;case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case No:case Gc:case Wc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ad:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xc:case qc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tv(n){switch(n){case Mi:case Kh:return{byteLength:1,components:1};case Oa:case Jh:case Ga:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case cs:case wl:case pi:return{byteLength:4,components:1};case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Av(n,t,e,i,s,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let h;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return p?new OffscreenCanvas(C,w):Fa("canvas")}function _(C,w,$){let Z=1;const at=vt(C);if((at.width>$||at.height>$)&&(Z=$/Math.max(at.width,at.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(Z*at.width),St=Math.floor(Z*at.height);h===void 0&&(h=g(Q,St));const yt=w?g(Q,St):h;return yt.width=Q,yt.height=St,yt.getContext("2d").drawImage(C,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+St+")."),yt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function d(C){return C.generateMipmaps&&C.minFilter!==zn&&C.minFilter!==qn}function f(C){n.generateMipmap(C)}function S(C,w,$,Z,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=w;if(w===n.RED&&($===n.FLOAT&&(Q=n.R32F),$===n.HALF_FLOAT&&(Q=n.R16F),$===n.UNSIGNED_BYTE&&(Q=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.R8UI),$===n.UNSIGNED_SHORT&&(Q=n.R16UI),$===n.UNSIGNED_INT&&(Q=n.R32UI),$===n.BYTE&&(Q=n.R8I),$===n.SHORT&&(Q=n.R16I),$===n.INT&&(Q=n.R32I)),w===n.RG&&($===n.FLOAT&&(Q=n.RG32F),$===n.HALF_FLOAT&&(Q=n.RG16F),$===n.UNSIGNED_BYTE&&(Q=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RG8UI),$===n.UNSIGNED_SHORT&&(Q=n.RG16UI),$===n.UNSIGNED_INT&&(Q=n.RG32UI),$===n.BYTE&&(Q=n.RG8I),$===n.SHORT&&(Q=n.RG16I),$===n.INT&&(Q=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),$===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),$===n.UNSIGNED_INT&&(Q=n.RGB32UI),$===n.BYTE&&(Q=n.RGB8I),$===n.SHORT&&(Q=n.RGB16I),$===n.INT&&(Q=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),$===n.UNSIGNED_INT&&(Q=n.RGBA32UI),$===n.BYTE&&(Q=n.RGBA8I),$===n.SHORT&&(Q=n.RGBA16I),$===n.INT&&(Q=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),w===n.RGBA){const St=at?Wo:_e.getTransfer(Z);$===n.FLOAT&&(Q=n.RGBA32F),$===n.HALF_FLOAT&&(Q=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Q=St===Le?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(C,w){let $;return C?w===null||w===cs||w===ta?$=n.DEPTH24_STENCIL8:w===pi?$=n.DEPTH32F_STENCIL8:w===Oa&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cs||w===ta?$=n.DEPTH_COMPONENT24:w===pi?$=n.DEPTH_COMPONENT32F:w===Oa&&($=n.DEPTH_COMPONENT16),$}function b(C,w){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){const w=C.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&u.delete(w)}function R(C){const w=C.target;w.removeEventListener("dispose",R),q(w)}function T(C){const w=i.get(C);if(w.__webglInit===void 0)return;const $=C.source,Z=m.get($);if(Z){const at=Z[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&U(C),Object.keys(Z).length===0&&m.delete($)}i.remove(C)}function U(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const $=C.source,Z=m.get($);delete Z[w.__cacheKey],o.memory.textures--}function q(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let at=0;at<w.__webglFramebuffer[Z].length;at++)n.deleteFramebuffer(w.__webglFramebuffer[Z][at]);else n.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)n.deleteFramebuffer(w.__webglFramebuffer[Z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=C.textures;for(let Z=0,at=$.length;Z<at;Z++){const Q=i.get($[Z]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove($[Z])}i.remove(C)}let y=0;function x(){y=0}function D(){const C=y;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),y+=1,C}function N(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function B(C,w){const $=i.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt($,C,w);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function I(C,w){const $=i.get(C);if(C.version>0&&$.__version!==C.version){Wt($,C,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function O(C,w){const $=i.get(C);if(C.version>0&&$.__version!==C.version){Wt($,C,w);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function L(C,w){const $=i.get(C);if(C.version>0&&$.__version!==C.version){K($,C,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const F={[Qs]:n.REPEAT,[ss]:n.CLAMP_TO_EDGE,[Sc]:n.MIRRORED_REPEAT},rt={[zn]:n.NEAREST,[fp]:n.NEAREST_MIPMAP_NEAREST,[Ka]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[pr]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},ht={[_p]:n.NEVER,[bp]:n.ALWAYS,[vp]:n.LESS,[rd]:n.LEQUAL,[yp]:n.EQUAL,[Sp]:n.GEQUAL,[xp]:n.GREATER,[Mp]:n.NOTEQUAL};function dt(C,w){if(w.type===pi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===qn||w.magFilter===pr||w.magFilter===Ka||w.magFilter===as||w.minFilter===qn||w.minFilter===pr||w.minFilter===Ka||w.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,F[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,F[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,F[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,rt[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zn||w.minFilter!==Ka&&w.minFilter!==as||w.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ht(C,w){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",P));const Z=w.source;let at=m.get(Z);at===void 0&&(at={},m.set(Z,at));const Q=N(w);if(Q!==C.__cacheKey){at[Q]===void 0&&(at[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),at[Q].usedTimes++;const St=at[C.__cacheKey];St!==void 0&&(at[C.__cacheKey].usedTimes--,St.usedTimes===0&&U(w)),C.__cacheKey=Q,C.__webglTexture=at[Q].texture}return $}function Wt(C,w,$){let Z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=n.TEXTURE_3D);const at=Ht(C,w),Q=w.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+$);const St=i.get(Q);if(Q.version!==St.__version||at===!0){e.activeTexture(n.TEXTURE0+$);const yt=_e.getPrimaries(_e.workingColorSpace),Rt=w.colorSpace===Pi?null:_e.getPrimaries(w.colorSpace),re=w.colorSpace===Pi||yt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let pt=_(w.image,!1,s.maxTextureSize);pt=mt(w,pt);const Ct=a.convert(w.format,w.colorSpace),qt=a.convert(w.type);let Yt=S(w.internalFormat,Ct,qt,w.colorSpace,w.isVideoTexture);dt(Z,w);let Pt;const ce=w.mipmaps,Jt=w.isVideoTexture!==!0,Te=St.__version===void 0||at===!0,z=Q.dataReady,Et=b(w,pt);if(w.isDepthTexture)Yt=v(w.format===ea,w.type),Te&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Yt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Ct,qt,null));else if(w.isDataTexture)if(ce.length>0){Jt&&Te&&e.texStorage2D(n.TEXTURE_2D,Et,Yt,ce[0].width,ce[0].height);for(let J=0,ot=ce.length;J<ot;J++)Pt=ce[J],Jt?z&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Pt.width,Pt.height,Ct,qt,Pt.data):e.texImage2D(n.TEXTURE_2D,J,Yt,Pt.width,Pt.height,0,Ct,qt,Pt.data);w.generateMipmaps=!1}else Jt?(Te&&e.texStorage2D(n.TEXTURE_2D,Et,Yt,pt.width,pt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Ct,qt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Ct,qt,pt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Jt&&Te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Yt,ce[0].width,ce[0].height,pt.depth);for(let J=0,ot=ce.length;J<ot;J++)if(Pt=ce[J],w.format!==Yn)if(Ct!==null)if(Jt){if(z)if(w.layerUpdates.size>0){const bt=Qu(Pt.width,Pt.height,w.format,w.type);for(const Tt of w.layerUpdates){const ue=Pt.data.subarray(Tt*bt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Tt,Pt.width,Pt.height,1,Ct,ue,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,pt.depth,Ct,Pt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Yt,Pt.width,Pt.height,pt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,pt.depth,Ct,qt,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Yt,Pt.width,Pt.height,pt.depth,0,Ct,qt,Pt.data)}else{Jt&&Te&&e.texStorage2D(n.TEXTURE_2D,Et,Yt,ce[0].width,ce[0].height);for(let J=0,ot=ce.length;J<ot;J++)Pt=ce[J],w.format!==Yn?Ct!==null?Jt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?z&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Pt.width,Pt.height,Ct,qt,Pt.data):e.texImage2D(n.TEXTURE_2D,J,Yt,Pt.width,Pt.height,0,Ct,qt,Pt.data)}else if(w.isDataArrayTexture)if(Jt){if(Te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Yt,pt.width,pt.height,pt.depth),z)if(w.layerUpdates.size>0){const J=Qu(pt.width,pt.height,w.format,w.type);for(const ot of w.layerUpdates){const bt=pt.data.subarray(ot*J/pt.data.BYTES_PER_ELEMENT,(ot+1)*J/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,Ct,qt,bt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ct,qt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,pt.width,pt.height,pt.depth,0,Ct,qt,pt.data);else if(w.isData3DTexture)Jt?(Te&&e.texStorage3D(n.TEXTURE_3D,Et,Yt,pt.width,pt.height,pt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ct,qt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,pt.width,pt.height,pt.depth,0,Ct,qt,pt.data);else if(w.isFramebufferTexture){if(Te)if(Jt)e.texStorage2D(n.TEXTURE_2D,Et,Yt,pt.width,pt.height);else{let J=pt.width,ot=pt.height;for(let bt=0;bt<Et;bt++)e.texImage2D(n.TEXTURE_2D,bt,Yt,J,ot,0,Ct,qt,null),J>>=1,ot>>=1}}else if(ce.length>0){if(Jt&&Te){const J=vt(ce[0]);e.texStorage2D(n.TEXTURE_2D,Et,Yt,J.width,J.height)}for(let J=0,ot=ce.length;J<ot;J++)Pt=ce[J],Jt?z&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Ct,qt,Pt):e.texImage2D(n.TEXTURE_2D,J,Yt,Ct,qt,Pt);w.generateMipmaps=!1}else if(Jt){if(Te){const J=vt(pt);e.texStorage2D(n.TEXTURE_2D,Et,Yt,J.width,J.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,qt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Ct,qt,pt);d(w)&&f(Z),St.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function K(C,w,$){if(w.image.length!==6)return;const Z=Ht(C,w),at=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+$);const Q=i.get(at);if(at.version!==Q.__version||Z===!0){e.activeTexture(n.TEXTURE0+$);const St=_e.getPrimaries(_e.workingColorSpace),yt=w.colorSpace===Pi?null:_e.getPrimaries(w.colorSpace),Rt=w.colorSpace===Pi||St===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,pt=w.image[0]&&w.image[0].isDataTexture,Ct=[];for(let ot=0;ot<6;ot++)!re&&!pt?Ct[ot]=_(w.image[ot],!0,s.maxCubemapSize):Ct[ot]=pt?w.image[ot].image:w.image[ot],Ct[ot]=mt(w,Ct[ot]);const qt=Ct[0],Yt=a.convert(w.format,w.colorSpace),Pt=a.convert(w.type),ce=S(w.internalFormat,Yt,Pt,w.colorSpace),Jt=w.isVideoTexture!==!0,Te=Q.__version===void 0||Z===!0,z=at.dataReady;let Et=b(w,qt);dt(n.TEXTURE_CUBE_MAP,w);let J;if(re){Jt&&Te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,ce,qt.width,qt.height);for(let ot=0;ot<6;ot++){J=Ct[ot].mipmaps;for(let bt=0;bt<J.length;bt++){const Tt=J[bt];w.format!==Yn?Yt!==null?Jt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,Tt.width,Tt.height,Yt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,ce,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,Tt.width,Tt.height,Yt,Pt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,ce,Tt.width,Tt.height,0,Yt,Pt,Tt.data)}}}else{if(J=w.mipmaps,Jt&&Te){J.length>0&&Et++;const ot=vt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,ce,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){Jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct[ot].width,Ct[ot].height,Yt,Pt,Ct[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ce,Ct[ot].width,Ct[ot].height,0,Yt,Pt,Ct[ot].data);for(let bt=0;bt<J.length;bt++){const ue=J[bt].image[ot].image;Jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,ue.width,ue.height,Yt,Pt,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,ce,ue.width,ue.height,0,Yt,Pt,ue.data)}}else{Jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Yt,Pt,Ct[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ce,Yt,Pt,Ct[ot]);for(let bt=0;bt<J.length;bt++){const Tt=J[bt];Jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,Yt,Pt,Tt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,ce,Yt,Pt,Tt.image[ot])}}}d(w)&&f(n.TEXTURE_CUBE_MAP),Q.__version=at.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ct(C,w,$,Z,at,Q){const St=a.convert($.format,$.colorSpace),yt=a.convert($.type),Rt=S($.internalFormat,St,yt,$.colorSpace);if(!i.get(w).__hasExternalTextures){const pt=Math.max(1,w.width>>Q),Ct=Math.max(1,w.height>>Q);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,Rt,pt,Ct,w.depth,0,St,yt,null):e.texImage2D(at,Q,Rt,pt,Ct,0,St,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),nt(w)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,at,i.get($).__webglTexture,0,st(w)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,at,i.get($).__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(C,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const Z=w.depthTexture,at=Z&&Z.isDepthTexture?Z.type:null,Q=v(w.stencilBuffer,at),St=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=st(w);nt(w)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,Q,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,Q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,C)}else{const Z=w.textures;for(let at=0;at<Z.length;at++){const Q=Z[at],St=a.convert(Q.format,Q.colorSpace),yt=a.convert(Q.type),Rt=S(Q.internalFormat,St,yt,Q.colorSpace),re=st(w);$&&nt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Rt,w.width,w.height):nt(w)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Rt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const Z=i.get(w.depthTexture).__webglTexture,at=st(w);if(w.depthTexture.format===$s)nt(w)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(w.depthTexture.format===ea)nt(w)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Bt(C){const w=i.get(C),$=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",at)};Z.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=Z}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");_t(w.__webglFramebuffer,C)}else if($){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=n.createRenderbuffer(),Mt(w.__webglDepthbuffer[Z],C,!1);else{const at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Mt(w.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(C,w,$){const Z=i.get(C);w!==void 0&&ct(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Bt(C)}function kt(C){const w=C.texture,$=i.get(C),Z=i.get(w);C.addEventListener("dispose",R);const at=C.textures,Q=C.isWebGLCubeRenderTarget===!0,St=at.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=w.version,o.memory.textures++),Q){$.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[yt]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)$.__webglFramebuffer[yt][Rt]=n.createFramebuffer()}else $.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)$.__webglFramebuffer[yt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(St)for(let yt=0,Rt=at.length;yt<Rt;yt++){const re=i.get(at[yt]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&nt(C)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let yt=0;yt<at.length;yt++){const Rt=at[yt];$.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);const re=a.convert(Rt.format,Rt.colorSpace),pt=a.convert(Rt.type),Ct=S(Rt.internalFormat,re,pt,Rt.colorSpace,C.isXRRenderTarget===!0),qt=st(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Ct,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,$.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),dt(n.TEXTURE_CUBE_MAP,w);for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ct($.__webglFramebuffer[yt][Rt],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt);else ct($.__webglFramebuffer[yt],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);d(w)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let yt=0,Rt=at.length;yt<Rt;yt++){const re=at[yt],pt=i.get(re);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),dt(n.TEXTURE_2D,re),ct($.__webglFramebuffer,C,re,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),d(re)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Z.__webglTexture),dt(yt,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ct($.__webglFramebuffer[Rt],C,w,n.COLOR_ATTACHMENT0,yt,Rt);else ct($.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,yt,0);d(w)&&f(yt),e.unbindTexture()}C.depthBuffer&&Bt(C)}function Vt(C){const w=C.textures;for(let $=0,Z=w.length;$<Z;$++){const at=w[$];if(d(at)){const Q=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,St=i.get(at).__webglTexture;e.bindTexture(Q,St),f(Q),e.unbindTexture()}}}const H=[],A=[];function lt(C){if(C.samples>0){if(nt(C)===!1){const w=C.textures,$=C.width,Z=C.height;let at=n.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(C),yt=w.length>1;if(yt)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[Rt]);const re=i.get(w[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,$,Z,0,0,$,Z,at,n.NEAREST),c===!0&&(H.length=0,A.length=0,H.push(n.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(H.push(Q),A.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,St.__webglColorRenderbuffer[Rt]);const re=i.get(w[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function nt(C){const w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function mt(C,w){const $=C.colorSpace,Z=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==Bi&&$!==Pi&&(_e.getTransfer($)===Le?(Z!==Yn||at!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=x,this.setTexture2D=B,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=At,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=nt}function Rv(n,t){function e(i,s=Pi){let a;const o=_e.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kh)return n.BYTE;if(i===Jh)return n.SHORT;if(i===Oa)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Ga)return n.HALF_FLOAT;if(i===Qh)return n.ALPHA;if(i===td)return n.RGB;if(i===Yn)return n.RGBA;if(i===ed)return n.LUMINANCE;if(i===nd)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===ea)return n.DEPTH_STENCIL;if(i===id)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===sd)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Cl)return n.RGBA_INTEGER;if(i===ko||i===Io||i===Do||i===Uo)if(o===Le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ko)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ko)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===wc||i===Ec||i===Tc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ac||i===Rc)return o===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pc||i===Lc||i===kc||i===Ic||i===Dc||i===Uc||i===Nc||i===Oc||i===Fc||i===Bc||i===zc||i===jc||i===Hc||i===Vc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Pc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===Gc||i===Wc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===No)return o===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===$c||i===Xc||i===qc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===No)return a.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Cv extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),f=this._getHandJoint(l,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],m=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&m>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return r!==null&&(r.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new un,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Oi({vertexShader:Lv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new G(new zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dv extends ca{constructor(t,e){super();const i=this;let s=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,h=null,m=null,p=null,g=null;const _=new Iv,d=e.getContextAttributes();let f=null,S=null;const v=[],b=[],P=new ft;let R=null;const T=new kn;T.layers.enable(1),T.viewport=new be;const U=new kn;U.layers.enable(2),U.viewport=new be;const q=[T,U],y=new Cv;y.layers.enable(1),y.layers.enable(2);let x=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=v[K];return ct===void 0&&(ct=new Gr,v[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=v[K];return ct===void 0&&(ct=new Gr,v[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=v[K];return ct===void 0&&(ct=new Gr,v[K]=ct),ct.getHandSpace()};function N(K){const ct=b.indexOf(K.inputSource);if(ct===-1)return;const Mt=v[ct];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,l||o),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",I);for(let K=0;K<v.length;K++){const ct=b[K];ct!==null&&(b[K]=null,v[K].disconnect(ct))}x=null,D=null,_.reset(),t.setRenderTarget(f),p=null,m=null,h=null,s=null,S=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",I),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const ct={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ls(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let ct=null,Mt=null,_t=null;d.depth&&(_t=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=d.stencil?ea:$s,Mt=d.stencil?ta:cs);const Bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:a};h=new XRWebGLBinding(s,e),m=h.createProjectionLayer(Bt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new ls(m.textureWidth,m.textureHeight,{format:Yn,type:Mi,depthTexture:new yd(m.textureWidth,m.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(r),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(K){for(let ct=0;ct<K.removed.length;ct++){const Mt=K.removed[ct],_t=b.indexOf(Mt);_t>=0&&(b[_t]=null,v[_t].disconnect(Mt))}for(let ct=0;ct<K.added.length;ct++){const Mt=K.added[ct];let _t=b.indexOf(Mt);if(_t===-1){for(let At=0;At<v.length;At++)if(At>=b.length){b.push(Mt),_t=At;break}else if(b[At]===null){b[At]=Mt,_t=At;break}if(_t===-1)break}const Bt=v[_t];Bt&&Bt.connect(Mt)}}const O=new k,L=new k;function F(K,ct,Mt){O.setFromMatrixPosition(ct.matrixWorld),L.setFromMatrixPosition(Mt.matrixWorld);const _t=O.distanceTo(L),Bt=ct.projectionMatrix.elements,At=Mt.projectionMatrix.elements,kt=Bt[14]/(Bt[10]-1),Vt=Bt[14]/(Bt[10]+1),H=(Bt[9]+1)/Bt[5],A=(Bt[9]-1)/Bt[5],lt=(Bt[8]-1)/Bt[0],st=(At[8]+1)/At[0],nt=kt*lt,ut=kt*st,mt=_t/(-lt+st),vt=mt*-lt;if(ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ(mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Bt[10]===-1)K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const C=kt+mt,w=Vt+mt,$=nt-vt,Z=ut+(_t-vt),at=H*Vt/w*C,Q=A*Vt/w*C;K.projectionMatrix.makePerspective($,Z,at,Q,C,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ct=K.near,Mt=K.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),y.near=U.near=T.near=ct,y.far=U.far=T.far=Mt,(x!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,D=y.far);const _t=K.parent,Bt=y.cameras;rt(y,_t);for(let At=0;At<Bt.length;At++)rt(Bt[At],_t);Bt.length===2?F(y,T,U):y.projectionMatrix.copy(T.projectionMatrix),ht(K,y,_t)};function ht(K,ct,Mt){Mt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Kc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(m===null&&p===null))return c},this.setFoveation=function(K){c=K,m!==null&&(m.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let dt=null;function Ht(K,ct){if(u=ct.getViewerPose(l||o),g=ct,u!==null){const Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let _t=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let At=0;At<Mt.length;At++){const kt=Mt[At];let Vt=null;if(p!==null)Vt=p.getViewport(kt);else{const A=h.getViewSubImage(m,kt);Vt=A.viewport,At===0&&(t.setRenderTargetTextures(S,A.colorTexture,m.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(S))}let H=q[At];H===void 0&&(H=new kn,H.layers.enable(At),H.viewport=new be,q[At]=H),H.matrix.fromArray(kt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(kt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),At===0&&(y.matrix.copy(H.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(H)}const Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const At=h.getDepthInformation(Mt[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let Mt=0;Mt<v.length;Mt++){const _t=b[Mt],Bt=v[Mt];_t!==null&&Bt!==void 0&&Bt.update(_t,ct,l||o)}dt&&dt(K,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Wt=new _d;Wt.setAnimationLoop(Ht),this.setAnimationLoop=function(K){dt=K},this.dispose=function(){}}}const qi=new si,Uv=new Ee;function Nv(n,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,pd(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,S,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(d,f):f.isMeshToonMaterial?(a(d,f),h(d,f)):f.isMeshPhongMaterial?(a(d,f),u(d,f)):f.isMeshStandardMaterial?(a(d,f),m(d,f),f.isMeshPhysicalMaterial&&p(d,f,b)):f.isMeshMatcapMaterial?(a(d,f),g(d,f)):f.isMeshDepthMaterial?a(d,f):f.isMeshDistanceMaterial?(a(d,f),_(d,f)):f.isMeshNormalMaterial?a(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&r(d,f)):f.isPointsMaterial?c(d,f,S,v):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===yn&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===yn&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const S=t.get(f),v=S.envMap,b=S.envMapRotation;v&&(d.envMap.value=v,qi.copy(b),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),d.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(qi)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function r(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,S,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*S,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function h(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function m(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,S){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){const S=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ov(n,t,e,i){let s={},a={},o=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){const b=v.program;i.uniformBlockBinding(S,b)}function l(S,v){let b=s[S.id];b===void 0&&(g(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",d));const P=v.program;i.updateUBOMapping(S,P);const R=t.render.frame;a[S.id]!==R&&(m(S),a[S.id]=R)}function u(S){const v=h();S.__bindingPointIndex=v;const b=n.createBuffer(),P=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function h(){for(let S=0;S<r;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){const v=s[S.id],b=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,T=b.length;R<T;R++){const U=Array.isArray(b[R])?b[R]:[b[R]];for(let q=0,y=U.length;q<y;q++){const x=U[q];if(p(x,R,q,P)===!0){const D=x.__offset,N=Array.isArray(x.value)?x.value:[x.value];let B=0;for(let I=0;I<N.length;I++){const O=N[I],L=_(O);typeof O=="number"||typeof O=="boolean"?(x.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+B,x.__data)):O.isMatrix3?(x.__data[0]=O.elements[0],x.__data[1]=O.elements[1],x.__data[2]=O.elements[2],x.__data[3]=0,x.__data[4]=O.elements[3],x.__data[5]=O.elements[4],x.__data[6]=O.elements[5],x.__data[7]=0,x.__data[8]=O.elements[6],x.__data[9]=O.elements[7],x.__data[10]=O.elements[8],x.__data[11]=0):(O.toArray(x.__data,B),B+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,v,b,P){const R=S.value,T=v+"_"+b;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const U=P[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return P[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(S){const v=S.uniforms;let b=0;const P=16;for(let T=0,U=v.length;T<U;T++){const q=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,x=q.length;y<x;y++){const D=q[y],N=Array.isArray(D.value)?D.value:[D.value];for(let B=0,I=N.length;B<I;B++){const O=N[B],L=_(O),F=b%P,rt=F%L.boundary,ht=F+rt;b+=rt,ht!==0&&P-ht<L.storage&&(b+=P-ht),D.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=L.storage}}}const R=b%P;return R>0&&(b+=P-R),S.__size=b,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){const v=S.target;v.removeEventListener("dispose",d);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function f(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},a={}}return{bind:c,update:l,dispose:f}}class Fv{constructor(t={}){const{canvas:e=Ep(),context:i=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=ki,this.toneMappingExposure=1;const v=this;let b=!1,P=0,R=0,T=null,U=-1,q=null;const y=new be,x=new be;let D=null;const N=new oe(0);let B=0,I=e.width,O=e.height,L=1,F=null,rt=null;const ht=new be(0,0,I,O),dt=new be(0,0,I,O);let Ht=!1;const Wt=new Il;let K=!1,ct=!1;const Mt=new Ee,_t=new Ee,Bt=new k,At=new be,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function H(){return T===null?L:1}let A=i;function lt(E,j){return e.getContext(E,j)}try{const E={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),A===null){const j="webgl2";if(A=lt(j,E),A===null)throw lt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,nt,ut,mt,vt,C,w,$,Z,at,Q,St,yt,Rt,re,pt,Ct,qt,Yt,Pt,ce,Jt,Te,z;function Et(){st=new Vg(A),st.init(),Jt=new Rv(A,st),nt=new Og(A,st,t,Jt),ut=new Ev(A),nt.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),mt=new $g(A),vt=new uv,C=new Av(A,st,ut,vt,nt,Jt,mt),w=new Bg(v),$=new Hg(v),Z=new Qp(A),Te=new Ug(A,Z),at=new Gg(A,Z,mt,Te),Q=new qg(A,at,Z,mt),Yt=new Xg(A,nt,C),pt=new Fg(vt),St=new lv(v,w,$,st,nt,Te,pt),yt=new Nv(v,vt),Rt=new dv,re=new vv(st),qt=new Dg(v,w,$,ut,Q,m,c),Ct=new bv(v,Q,nt),z=new Ov(A,mt,nt,ut),Pt=new Ng(A,st,mt),ce=new Wg(A,st,mt),mt.programs=St.programs,v.capabilities=nt,v.extensions=st,v.properties=vt,v.renderLists=Rt,v.shadowMap=Ct,v.state=ut,v.info=mt}Et();const J=new Dv(v,A);this.xr=J,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(I,O,!1))},this.getSize=function(E){return E.set(I,O)},this.setSize=function(E,j,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,O=j,e.width=Math.floor(E*L),e.height=Math.floor(j*L),X===!0&&(e.style.width=E+"px",e.style.height=j+"px"),this.setViewport(0,0,E,j)},this.getDrawingBufferSize=function(E){return E.set(I*L,O*L).floor()},this.setDrawingBufferSize=function(E,j,X){I=E,O=j,L=X,e.width=Math.floor(E*X),e.height=Math.floor(j*X),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,j,X,Y){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,j,X,Y),ut.viewport(y.copy(ht).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,j,X,Y){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,j,X,Y),ut.scissor(x.copy(dt).multiplyScalar(L).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(E){ut.setScissorTest(Ht=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(E=!0,j=!0,X=!0){let Y=0;if(E){let V=!1;if(T!==null){const gt=T.texture.format;V=gt===Cl||gt===Rl||gt===Al}if(V){const gt=T.texture.type,wt=gt===Mi||gt===cs||gt===Oa||gt===ta||gt===El||gt===Tl,Lt=qt.getClearColor(),It=qt.getClearAlpha(),$t=Lt.r,Xt=Lt.g,Nt=Lt.b;wt?(p[0]=$t,p[1]=Xt,p[2]=Nt,p[3]=It,A.clearBufferuiv(A.COLOR,0,p)):(g[0]=$t,g[1]=Xt,g[2]=Nt,g[3]=It,A.clearBufferiv(A.COLOR,0,g))}else Y|=A.COLOR_BUFFER_BIT}j&&(Y|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Rt.dispose(),re.dispose(),vt.dispose(),w.dispose(),$.dispose(),Q.dispose(),Te.dispose(),z.dispose(),St.dispose(),J.dispose(),J.removeEventListener("sessionstart",Zl),J.removeEventListener("sessionend",Ql),Hi.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=mt.autoReset,j=Ct.enabled,X=Ct.autoUpdate,Y=Ct.needsUpdate,V=Ct.type;Et(),mt.autoReset=E,Ct.enabled=j,Ct.autoUpdate=X,Ct.needsUpdate=Y,Ct.type=V}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ue(E){const j=E.target;j.removeEventListener("dispose",ue),We(j)}function We(E){Sn(E),vt.remove(E)}function Sn(E){const j=vt.get(E).programs;j!==void 0&&(j.forEach(function(X){St.releaseProgram(X)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,j,X,Y,V,gt){j===null&&(j=kt);const wt=V.isMesh&&V.matrixWorld.determinant()<0,Lt=If(E,j,X,Y,V);ut.setMaterial(Y,wt);let It=X.index,$t=1;if(Y.wireframe===!0){if(It=at.getWireframeAttribute(X),It===void 0)return;$t=2}const Xt=X.drawRange,Nt=X.attributes.position;let ve=Xt.start*$t,Ce=(Xt.start+Xt.count)*$t;gt!==null&&(ve=Math.max(ve,gt.start*$t),Ce=Math.min(Ce,(gt.start+gt.count)*$t)),It!==null?(ve=Math.max(ve,0),Ce=Math.min(Ce,It.count)):Nt!=null&&(ve=Math.max(ve,0),Ce=Math.min(Ce,Nt.count));const Oe=Ce-ve;if(Oe<0||Oe===1/0)return;Te.setup(V,Y,Lt,X,It);let Tn,pe=Pt;if(It!==null&&(Tn=Z.get(It),pe=ce,pe.setIndex(Tn)),V.isMesh)Y.wireframe===!0?(ut.setLineWidth(Y.wireframeLinewidth*H()),pe.setMode(A.LINES)):pe.setMode(A.TRIANGLES);else if(V.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),ut.setLineWidth(Ot*H()),V.isLineSegments?pe.setMode(A.LINES):V.isLineLoop?pe.setMode(A.LINE_LOOP):pe.setMode(A.LINE_STRIP)}else V.isPoints?pe.setMode(A.POINTS):V.isSprite&&pe.setMode(A.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)pe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ot=V._multiDrawStarts,en=V._multiDrawCounts,me=V._multiDrawCount,Hn=It?Z.get(It).bytesPerElement:1,vs=vt.get(Y).currentProgram.getUniforms();for(let An=0;An<me;An++)vs.setValue(A,"_gl_DrawID",An),pe.render(Ot[An]/Hn,en[An])}else if(V.isInstancedMesh)pe.renderInstances(ve,Oe,V.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,en=Math.min(X.instanceCount,Ot);pe.renderInstances(ve,Oe,en)}else pe.render(ve,Oe)};function fe(E,j,X){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,Ya(E,j,X),E.side=Ni,E.needsUpdate=!0,Ya(E,j,X),E.side=mn):Ya(E,j,X)}this.compile=function(E,j,X=null){X===null&&(X=E),d=re.get(X),d.init(j),S.push(d),X.traverseVisible(function(V){V.isLight&&V.layers.test(j.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(j.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const Y=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const gt=V.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){const Lt=gt[wt];fe(Lt,X,V),Y.add(Lt)}else fe(gt,X,V),Y.add(gt)}),S.pop(),d=null,Y},this.compileAsync=function(E,j,X=null){const Y=this.compile(E,j,X);return new Promise(V=>{function gt(){if(Y.forEach(function(wt){vt.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){V(E);return}setTimeout(gt,10)}st.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let bn=null;function oi(E){bn&&bn(E)}function Zl(){Hi.stop()}function Ql(){Hi.start()}const Hi=new _d;Hi.setAnimationLoop(oi),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(E){bn=E,J.setAnimationLoop(E),E===null?Hi.stop():Hi.start()},J.addEventListener("sessionstart",Zl),J.addEventListener("sessionend",Ql),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(j),j=J.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,j,T),d=re.get(E,S.length),d.init(j),S.push(d),_t.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Wt.setFromProjectionMatrix(_t),ct=this.localClippingEnabled,K=pt.init(this.clippingPlanes,ct),_=Rt.get(E,f.length),_.init(),f.push(_),J.enabled===!0&&J.isPresenting===!0){const gt=v.xr.getDepthSensingMesh();gt!==null&&lr(gt,j,-1/0,v.sortObjects)}lr(E,j,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(F,rt),Vt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Vt&&qt.addToRenderList(_,E),this.info.render.frame++,K===!0&&pt.beginShadows();const X=d.state.shadowsArray;Ct.render(X,E,j),K===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,V=_.transmissive;if(d.setupLights(),j.isArrayCamera){const gt=j.cameras;if(V.length>0)for(let wt=0,Lt=gt.length;wt<Lt;wt++){const It=gt[wt];eu(Y,V,E,It)}Vt&&qt.render(E);for(let wt=0,Lt=gt.length;wt<Lt;wt++){const It=gt[wt];tu(_,E,It,It.viewport)}}else V.length>0&&eu(Y,V,E,j),Vt&&qt.render(E),tu(_,E,j);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,j),Te.resetDefaultState(),U=-1,q=null,S.pop(),S.length>0?(d=S[S.length-1],K===!0&&pt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function lr(E,j,X,Y){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Wt.intersectsSprite(E)){Y&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const wt=Q.update(E),Lt=E.material;Lt.visible&&_.push(E,wt,Lt,X,At.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Wt.intersectsObject(E))){const wt=Q.update(E),Lt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),At.copy(wt.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Lt)){const It=wt.groups;for(let $t=0,Xt=It.length;$t<Xt;$t++){const Nt=It[$t],ve=Lt[Nt.materialIndex];ve&&ve.visible&&_.push(E,wt,ve,X,At.z,Nt)}}else Lt.visible&&_.push(E,wt,Lt,X,At.z,null)}}const gt=E.children;for(let wt=0,Lt=gt.length;wt<Lt;wt++)lr(gt[wt],j,X,Y)}function tu(E,j,X,Y){const V=E.opaque,gt=E.transmissive,wt=E.transparent;d.setupLightsView(X),K===!0&&pt.setGlobalState(v.clippingPlanes,X),Y&&ut.viewport(y.copy(Y)),V.length>0&&qa(V,j,X),gt.length>0&&qa(gt,j,X),wt.length>0&&qa(wt,j,X),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function eu(E,j,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new ls(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ga:Mi,minFilter:as,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const gt=d.state.transmissionRenderTarget[Y.id],wt=Y.viewport||y;gt.setSize(wt.z,wt.w);const Lt=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&qt.render(X);const It=v.toneMapping;v.toneMapping=ki;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),K===!0&&pt.setGlobalState(v.clippingPlanes,Y),qa(E,X,Y),C.updateMultisampleRenderTarget(gt),C.updateRenderTargetMipmap(gt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Nt=0,ve=j.length;Nt<ve;Nt++){const Ce=j[Nt],Oe=Ce.object,Tn=Ce.geometry,pe=Ce.material,Ot=Ce.group;if(pe.side===mn&&Oe.layers.test(Y.layers)){const en=pe.side;pe.side=yn,pe.needsUpdate=!0,nu(Oe,X,Y,Tn,pe,Ot),pe.side=en,pe.needsUpdate=!0,Xt=!0}}Xt===!0&&(C.updateMultisampleRenderTarget(gt),C.updateRenderTargetMipmap(gt))}v.setRenderTarget(Lt),v.setClearColor(N,B),$t!==void 0&&(Y.viewport=$t),v.toneMapping=It}function qa(E,j,X){const Y=j.isScene===!0?j.overrideMaterial:null;for(let V=0,gt=E.length;V<gt;V++){const wt=E[V],Lt=wt.object,It=wt.geometry,$t=Y===null?wt.material:Y,Xt=wt.group;Lt.layers.test(X.layers)&&nu(Lt,j,X,It,$t,Xt)}}function nu(E,j,X,Y,V,gt){E.onBeforeRender(v,j,X,Y,V,gt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(v,j,X,Y,E,gt),V.transparent===!0&&V.side===mn&&V.forceSinglePass===!1?(V.side=yn,V.needsUpdate=!0,v.renderBufferDirect(X,j,Y,V,E,gt),V.side=Ni,V.needsUpdate=!0,v.renderBufferDirect(X,j,Y,V,E,gt),V.side=mn):v.renderBufferDirect(X,j,Y,V,E,gt),E.onAfterRender(v,j,X,Y,V,gt)}function Ya(E,j,X){j.isScene!==!0&&(j=kt);const Y=vt.get(E),V=d.state.lights,gt=d.state.shadowsArray,wt=V.state.version,Lt=St.getParameters(E,V.state,gt,j,X),It=St.getProgramCacheKey(Lt);let $t=Y.programs;Y.environment=E.isMeshStandardMaterial?j.environment:null,Y.fog=j.fog,Y.envMap=(E.isMeshStandardMaterial?$:w).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?j.environmentRotation:E.envMapRotation,$t===void 0&&(E.addEventListener("dispose",ue),$t=new Map,Y.programs=$t);let Xt=$t.get(It);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===wt)return su(E,Lt),Xt}else Lt.uniforms=St.getUniforms(E),E.onBeforeCompile(Lt,v),Xt=St.acquireProgram(Lt,It),$t.set(It,Xt),Y.uniforms=Lt.uniforms;const Nt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=pt.uniform),su(E,Lt),Y.needsLights=Uf(E),Y.lightsStateVersion=wt,Y.needsLights&&(Nt.ambientLightColor.value=V.state.ambient,Nt.lightProbe.value=V.state.probe,Nt.directionalLights.value=V.state.directional,Nt.directionalLightShadows.value=V.state.directionalShadow,Nt.spotLights.value=V.state.spot,Nt.spotLightShadows.value=V.state.spotShadow,Nt.rectAreaLights.value=V.state.rectArea,Nt.ltc_1.value=V.state.rectAreaLTC1,Nt.ltc_2.value=V.state.rectAreaLTC2,Nt.pointLights.value=V.state.point,Nt.pointLightShadows.value=V.state.pointShadow,Nt.hemisphereLights.value=V.state.hemi,Nt.directionalShadowMap.value=V.state.directionalShadowMap,Nt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Nt.spotShadowMap.value=V.state.spotShadowMap,Nt.spotLightMatrix.value=V.state.spotLightMatrix,Nt.spotLightMap.value=V.state.spotLightMap,Nt.pointShadowMap.value=V.state.pointShadowMap,Nt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function iu(E){if(E.uniformsList===null){const j=E.currentProgram.getUniforms();E.uniformsList=Fo.seqWithValue(j.seq,E.uniforms)}return E.uniformsList}function su(E,j){const X=vt.get(E);X.outputColorSpace=j.outputColorSpace,X.batching=j.batching,X.batchingColor=j.batchingColor,X.instancing=j.instancing,X.instancingColor=j.instancingColor,X.instancingMorph=j.instancingMorph,X.skinning=j.skinning,X.morphTargets=j.morphTargets,X.morphNormals=j.morphNormals,X.morphColors=j.morphColors,X.morphTargetsCount=j.morphTargetsCount,X.numClippingPlanes=j.numClippingPlanes,X.numIntersection=j.numClipIntersection,X.vertexAlphas=j.vertexAlphas,X.vertexTangents=j.vertexTangents,X.toneMapping=j.toneMapping}function If(E,j,X,Y,V){j.isScene!==!0&&(j=kt),C.resetTextureUnits();const gt=j.fog,wt=Y.isMeshStandardMaterial?j.environment:null,Lt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Bi,It=(Y.isMeshStandardMaterial?$:w).get(Y.envMap||wt),$t=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!X.morphAttributes.position,ve=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color;let Oe=ki;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Oe=v.toneMapping);const Tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=Tn!==void 0?Tn.length:0,Ot=vt.get(Y),en=d.state.lights;if(K===!0&&(ct===!0||E!==q)){const Dn=E===q&&Y.id===U;pt.setState(Y,E,Dn)}let me=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==en.state.version||Ot.outputColorSpace!==Lt||V.isBatchedMesh&&Ot.batching===!1||!V.isBatchedMesh&&Ot.batching===!0||V.isBatchedMesh&&Ot.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ot.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ot.instancing===!1||!V.isInstancedMesh&&Ot.instancing===!0||V.isSkinnedMesh&&Ot.skinning===!1||!V.isSkinnedMesh&&Ot.skinning===!0||V.isInstancedMesh&&Ot.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ot.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ot.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ot.instancingMorph===!1&&V.morphTexture!==null||Ot.envMap!==It||Y.fog===!0&&Ot.fog!==gt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==pt.numPlanes||Ot.numIntersection!==pt.numIntersection)||Ot.vertexAlphas!==$t||Ot.vertexTangents!==Xt||Ot.morphTargets!==Nt||Ot.morphNormals!==ve||Ot.morphColors!==Ce||Ot.toneMapping!==Oe||Ot.morphTargetsCount!==pe)&&(me=!0):(me=!0,Ot.__version=Y.version);let Hn=Ot.currentProgram;me===!0&&(Hn=Ya(Y,j,V));let vs=!1,An=!1,ur=!1;const ze=Hn.getUniforms(),bi=Ot.uniforms;if(ut.useProgram(Hn.program)&&(vs=!0,An=!0,ur=!0),Y.id!==U&&(U=Y.id,An=!0),vs||q!==E){nt.reverseDepthBuffer?(Mt.copy(E.projectionMatrix),Ap(Mt),Rp(Mt),ze.setValue(A,"projectionMatrix",Mt)):ze.setValue(A,"projectionMatrix",E.projectionMatrix),ze.setValue(A,"viewMatrix",E.matrixWorldInverse);const Dn=ze.map.cameraPosition;Dn!==void 0&&Dn.setValue(A,Bt.setFromMatrixPosition(E.matrixWorld)),nt.logarithmicDepthBuffer&&ze.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ze.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),q!==E&&(q=E,An=!0,ur=!0)}if(V.isSkinnedMesh){ze.setOptional(A,V,"bindMatrix"),ze.setOptional(A,V,"bindMatrixInverse");const Dn=V.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),ze.setValue(A,"boneTexture",Dn.boneTexture,C))}V.isBatchedMesh&&(ze.setOptional(A,V,"batchingTexture"),ze.setValue(A,"batchingTexture",V._matricesTexture,C),ze.setOptional(A,V,"batchingIdTexture"),ze.setValue(A,"batchingIdTexture",V._indirectTexture,C),ze.setOptional(A,V,"batchingColorTexture"),V._colorsTexture!==null&&ze.setValue(A,"batchingColorTexture",V._colorsTexture,C));const hr=X.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Yt.update(V,X,Hn),(An||Ot.receiveShadow!==V.receiveShadow)&&(Ot.receiveShadow=V.receiveShadow,ze.setValue(A,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bi.envMap.value=It,bi.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&j.environment!==null&&(bi.envMapIntensity.value=j.environmentIntensity),An&&(ze.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Df(bi,ur),gt&&Y.fog===!0&&yt.refreshFogUniforms(bi,gt),yt.refreshMaterialUniforms(bi,Y,L,O,d.state.transmissionRenderTarget[E.id]),Fo.upload(A,iu(Ot),bi,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fo.upload(A,iu(Ot),bi,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ze.setValue(A,"center",V.center),ze.setValue(A,"modelViewMatrix",V.modelViewMatrix),ze.setValue(A,"normalMatrix",V.normalMatrix),ze.setValue(A,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Dn=Y.uniformsGroups;for(let dr=0,Nf=Dn.length;dr<Nf;dr++){const au=Dn[dr];z.update(au,Hn),z.bind(au,Hn)}}return Hn}function Df(E,j){E.ambientLightColor.needsUpdate=j,E.lightProbe.needsUpdate=j,E.directionalLights.needsUpdate=j,E.directionalLightShadows.needsUpdate=j,E.pointLights.needsUpdate=j,E.pointLightShadows.needsUpdate=j,E.spotLights.needsUpdate=j,E.spotLightShadows.needsUpdate=j,E.rectAreaLights.needsUpdate=j,E.hemisphereLights.needsUpdate=j}function Uf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,j,X){vt.get(E.texture).__webglTexture=j,vt.get(E.depthTexture).__webglTexture=X;const Y=vt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,j){const X=vt.get(E);X.__webglFramebuffer=j,X.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,X=0){T=E,P=j,R=X;let Y=!0,V=null,gt=!1,wt=!1;if(E){const It=vt.get(E);if(It.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(A.FRAMEBUFFER,null),Y=!1;else if(It.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(It.__hasExternalTextures)C.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Nt=E.depthTexture;if(It.__boundDepthTexture!==Nt){if(Nt!==null&&vt.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const $t=E.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(wt=!0);const Xt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?V=Xt[j][X]:V=Xt[j],gt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?V=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[X]:V=Xt,y.copy(E.viewport),x.copy(E.scissor),D=E.scissorTest}else y.copy(ht).multiplyScalar(L).floor(),x.copy(dt).multiplyScalar(L).floor(),D=Ht;if(ut.bindFramebuffer(A.FRAMEBUFFER,V)&&Y&&ut.drawBuffers(E,V),ut.viewport(y),ut.scissor(x),ut.setScissorTest(D),gt){const It=vt.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,X)}else if(wt){const It=vt.get(E.texture),$t=j||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,X||0,$t)}U=-1},this.readRenderTargetPixels=function(E,j,X,Y,V,gt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){ut.bindFramebuffer(A.FRAMEBUFFER,Lt);try{const It=E.texture,$t=It.format,Xt=It.type;if(!nt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=E.width-Y&&X>=0&&X<=E.height-V&&A.readPixels(j,X,Y,V,Jt.convert($t),Jt.convert(Xt),gt)}finally{const It=T!==null?vt.get(T).__webglFramebuffer:null;ut.bindFramebuffer(A.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,j,X,Y,V,gt,wt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){const It=E.texture,$t=It.format,Xt=It.type;if(!nt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=E.width-Y&&X>=0&&X<=E.height-V){ut.bindFramebuffer(A.FRAMEBUFFER,Lt);const Nt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Nt),A.bufferData(A.PIXEL_PACK_BUFFER,gt.byteLength,A.STREAM_READ),A.readPixels(j,X,Y,V,Jt.convert($t),Jt.convert(Xt),0);const ve=T!==null?vt.get(T).__webglFramebuffer:null;ut.bindFramebuffer(A.FRAMEBUFFER,ve);const Ce=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Tp(A,Ce,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Nt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,gt),A.deleteBuffer(Nt),A.deleteSync(Ce),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,j=null,X=0){E.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),V=Math.floor(E.image.width*Y),gt=Math.floor(E.image.height*Y),wt=j!==null?j.x:0,Lt=j!==null?j.y:0;C.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,wt,Lt,V,gt),ut.unbindTexture()},this.copyTextureToTexture=function(E,j,X=null,Y=null,V=0){E.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],j=arguments[2],V=arguments[3]||0,X=null);let gt,wt,Lt,It,$t,Xt;X!==null?(gt=X.max.x-X.min.x,wt=X.max.y-X.min.y,Lt=X.min.x,It=X.min.y):(gt=E.image.width,wt=E.image.height,Lt=0,It=0),Y!==null?($t=Y.x,Xt=Y.y):($t=0,Xt=0);const Nt=Jt.convert(j.format),ve=Jt.convert(j.type);C.setTexture2D(j,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,j.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,j.unpackAlignment);const Ce=A.getParameter(A.UNPACK_ROW_LENGTH),Oe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Tn=A.getParameter(A.UNPACK_SKIP_PIXELS),pe=A.getParameter(A.UNPACK_SKIP_ROWS),Ot=A.getParameter(A.UNPACK_SKIP_IMAGES),en=E.isCompressedTexture?E.mipmaps[V]:E.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,en.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,en.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,It),E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,V,$t,Xt,gt,wt,Nt,ve,en.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,V,$t,Xt,en.width,en.height,Nt,en.data):A.texSubImage2D(A.TEXTURE_2D,V,$t,Xt,gt,wt,Nt,ve,en),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ce),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Oe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Tn),A.pixelStorei(A.UNPACK_SKIP_ROWS,pe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ot),V===0&&j.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,j,X=null,Y=null,V=0){E.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],j=arguments[3],V=arguments[4]||0);let gt,wt,Lt,It,$t,Xt,Nt,ve,Ce;const Oe=E.isCompressedTexture?E.mipmaps[V]:E.image;X!==null?(gt=X.max.x-X.min.x,wt=X.max.y-X.min.y,Lt=X.max.z-X.min.z,It=X.min.x,$t=X.min.y,Xt=X.min.z):(gt=Oe.width,wt=Oe.height,Lt=Oe.depth,It=0,$t=0,Xt=0),Y!==null?(Nt=Y.x,ve=Y.y,Ce=Y.z):(Nt=0,ve=0,Ce=0);const Tn=Jt.convert(j.format),pe=Jt.convert(j.type);let Ot;if(j.isData3DTexture)C.setTexture3D(j,0),Ot=A.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Ot=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,j.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,j.unpackAlignment);const en=A.getParameter(A.UNPACK_ROW_LENGTH),me=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Hn=A.getParameter(A.UNPACK_SKIP_PIXELS),vs=A.getParameter(A.UNPACK_SKIP_ROWS),An=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Oe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Oe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,It),A.pixelStorei(A.UNPACK_SKIP_ROWS,$t),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xt),E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Ot,V,Nt,ve,Ce,gt,wt,Lt,Tn,pe,Oe.data):j.isCompressedArrayTexture?A.compressedTexSubImage3D(Ot,V,Nt,ve,Ce,gt,wt,Lt,Tn,Oe.data):A.texSubImage3D(Ot,V,Nt,ve,Ce,gt,wt,Lt,Tn,pe,Oe),A.pixelStorei(A.UNPACK_ROW_LENGTH,en),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,me),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Hn),A.pixelStorei(A.UNPACK_SKIP_ROWS,vs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,An),V===0&&j.generateMipmaps&&A.generateMipmap(Ot),ut.unbindTexture()},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,ut.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pl?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===nr?"display-p3":"srgb"}}class Ul{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=i}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bv extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new k;class Yo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),a=Me(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Kn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zc extends ms{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const _a=new k,Ds=new k,Us=new k,Ns=new ft,va=new ft,wd=new Ee,vo=new k,ya=new k,yo=new k,th=new ft,Wr=new ft,eh=new ft;class nh extends Ke{constructor(t=new Zc){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new hn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zv(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Yo(i,3,0,!1)),Is.setAttribute("uv",new Yo(i,2,3,!1))}this.geometry=Is,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),wd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const i=this.material.rotation;let s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));const o=this.center;xo(vo.set(-.5,-.5,0),Us,o,Ds,s,a),xo(ya.set(.5,-.5,0),Us,o,Ds,s,a),xo(yo.set(.5,.5,0),Us,o,Ds,s,a),th.set(0,0),Wr.set(1,0),eh.set(1,1);let r=t.ray.intersectTriangle(vo,ya,yo,!1,_a);if(r===null&&(xo(ya.set(-.5,.5,0),Us,o,Ds,s,a),Wr.set(0,1),r=t.ray.intersectTriangle(vo,yo,ya,!1,_a),r===null))return;const c=t.ray.origin.distanceTo(_a);c<t.near||c>t.far||e.push({distance:c,point:_a.clone(),uv:Bn.getInterpolation(_a,vo,ya,yo,th,Wr,eh,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xo(n,t,e,i,s,a){Ns.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(va.x=a*Ns.x-s*Ns.y,va.y=s*Ns.x+a*Ns.y):va.copy(Ns),n.copy(t),n.x+=va.x,n.y+=va.y,n.applyMatrix4(wd)}class Ed extends ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ko=new k,Jo=new k,ih=new Ee,xa=new Ll,Mo=new ir,$r=new k,sh=new k;class jv extends Ke{constructor(t=new hn,e=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Ko.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ko.distanceTo(Jo);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=a,t.ray.intersectsSphere(Mo)===!1)return;ih.copy(s).invert(),xa.copy(t.ray).applyMatrix4(ih);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,d=g-1;_<d;_+=l){const f=u.getX(_),S=u.getX(_+1),v=So(this,t,xa,c,f,S);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(g-1),d=u.getX(p),f=So(this,t,xa,c,_,d);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=p,d=g-1;_<d;_+=l){const f=So(this,t,xa,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=So(this,t,xa,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function So(n,t,e,i,s,a){const o=n.geometry.attributes.position;if(Ko.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,a),e.distanceSqToSegment(Ko,Jo,$r,sh)>i)return;$r.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($r);if(!(c<t.near||c>t.far))return{distance:c,point:sh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class vi extends un{constructor(t,e,i,s,a,o,r,c,l){super(t,e,i,s,a,o,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let o;e?o=e:o=t*i[a-1];let r=0,c=a-1,l;for(;r<=c;)if(s=Math.floor(r+(c-r)/2),l=i[s]-o,l<0)r=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(a-1);const u=i[s],m=i[s+1]-u,p=(o-u)/m;return(s+p)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),c=e||(o.isVector2?new ft:new k);return c.copy(r).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new k,s=[],a=[],o=[],r=new k,c=new Ee;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new k)}a[0]=new k,o[0]=new k;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),m<=l&&i.set(0,0,1),r.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),o[p]=o[p-1].clone(),r.crossVectors(s[p-1],s[p]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(nn(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(r,g))}o[p].crossVectors(s[p],a[p])}if(e===!0){let p=Math.acos(nn(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nl extends ai{constructor(t=0,e=0,i=1,s=1,a=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=c-this.aX,p=l-this.aY;c=m*u-p*h+this.aX,l=m*h+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hv extends Nl{constructor(t,e,i,s,a,o){super(t,e,i,i,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ol(){let n=0,t=0,e=0,i=0;function s(a,o,r,c){n=a,t=r,e=-3*a+3*o-2*r-c,i=2*a-2*o+r+c}return{initCatmullRom:function(a,o,r,c,l){s(o,r,l*(r-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,r,c,l,u,h){let m=(o-a)/l-(r-a)/(l+u)+(r-o)/u,p=(r-o)/u-(c-o)/(u+h)+(c-r)/h;m*=u,p*=u,s(o,r,m,p)},calc:function(a){const o=a*a,r=o*a;return n+t*a+e*o+i*r}}}const bo=new k,Xr=new Ol,qr=new Ol,Yr=new Ol;class Vv extends ai{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new k){const i=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),c=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:c===0&&r===a-1&&(r=a-2,c=1);let l,u;this.closed||r>0?l=s[(r-1)%a]:(bo.subVectors(s[0],s[1]).add(s[0]),l=bo);const h=s[r%a],m=s[(r+1)%a];if(this.closed||r+2<a?u=s[(r+2)%a]:(bo.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(m),p),d=Math.pow(m.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Xr.initNonuniformCatmullRom(l.x,h.x,m.x,u.x,g,_,d),qr.initNonuniformCatmullRom(l.y,h.y,m.y,u.y,g,_,d),Yr.initNonuniformCatmullRom(l.z,h.z,m.z,u.z,g,_,d)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(l.x,h.x,m.x,u.x,this.tension),qr.initCatmullRom(l.y,h.y,m.y,u.y,this.tension),Yr.initCatmullRom(l.z,h.z,m.z,u.z,this.tension));return i.set(Xr.calc(c),qr.calc(c),Yr.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ah(n,t,e,i,s){const a=(i-t)*.5,o=(s-e)*.5,r=n*n,c=n*r;return(2*e-2*i+a+o)*c+(-3*e+3*i-2*a-o)*r+a*n+e}function Gv(n,t){const e=1-n;return e*e*t}function Wv(n,t){return 2*(1-n)*n*t}function $v(n,t){return n*n*t}function Ta(n,t,e,i){return Gv(n,t)+Wv(n,e)+$v(n,i)}function Xv(n,t){const e=1-n;return e*e*e*t}function qv(n,t){const e=1-n;return 3*e*e*n*t}function Yv(n,t){return 3*(1-n)*n*n*t}function Kv(n,t){return n*n*n*t}function Aa(n,t,e,i,s){return Xv(n,t)+qv(n,e)+Yv(n,i)+Kv(n,s)}class Td extends ai{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(Aa(t,s.x,a.x,o.x,r.x),Aa(t,s.y,a.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jv extends ai{constructor(t=new k,e=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new k){const i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(Aa(t,s.x,a.x,o.x,r.x),Aa(t,s.y,a.y,o.y,r.y),Aa(t,s.z,a.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ad extends ai{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zv extends ai{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends ai{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Ta(t,s.x,a.x,o.x),Ta(t,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qv extends ai{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){const i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Ta(t,s.x,a.x,o.x),Ta(t,s.y,a.y,o.y),Ta(t,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cd extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(ah(r,c.x,l.x,u.x,h.x),ah(r,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:Hv,CatmullRomCurve3:Vv,CubicBezierCurve:Td,CubicBezierCurve3:Jv,EllipseCurve:Nl,LineCurve:Ad,LineCurve3:Zv,QuadraticBezierCurve:Rd,QuadraticBezierCurve3:Qv,SplineCurve:Cd});class ty extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const o=s[a]-i,r=this.curves[a],c=r.getLength(),l=c===0?0:1-o/c;return r.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const o=a[s],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(r);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Qc[s.type]().fromJSON(s))}return this}}class tl extends ty{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ad(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new Rd(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,o){const r=new Td(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Cd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,o){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,i,s,a,o),this}absarc(t,e,i,s,a,o){return this.absellipse(t,e,i,i,s,a,o),this}ellipse(t,e,i,s,a,o,r,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,a,o,r,c),this}absellipse(t,e,i,s,a,o,r,c){const l=new Nl(t,e,i,s,a,o,r,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ba extends hn{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);const a=[],o=[],r=[],c=[],l=[],u=1/e,h=new k,m=new ft,p=new k,g=new k,_=new k;let d=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:d=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-d,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-d,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const v=i+S*u*s,b=Math.sin(v),P=Math.cos(v);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*b,h.y=t[R].y,h.z=t[R].x*P,o.push(h.x,h.y,h.z),m.x=S/e,m.y=R/(t.length-1),r.push(m.x,m.y);const T=c[3*R+0]*b,U=c[3*R+1],q=c[3*R+0]*P;l.push(T,U,q)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const b=v+S*t.length,P=b,R=b+t.length,T=b+t.length+1,U=b+1;a.push(P,R,U),a.push(T,U,R)}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("uv",new ke(r,2)),this.setAttribute("normal",new ke(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.points,t.segments,t.phiStart,t.phiLength)}}class Fl extends Ba{constructor(t=1,e=1,i=4,s=8){const a=new tl;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Fl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ii extends hn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],o=[],r=[],c=[],l=new k,u=new ft;o.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let h=0,m=3;h<=e;h++,m+=3){const p=i+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),r.push(0,0,1),u.x=(o[m]/t+1)/2,u.y=(o[m+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends hn{constructor(t=1,e=1,i=1,s=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const u=[],h=[],m=[],p=[];let g=0;const _=[],d=i/2;let f=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(m,3)),this.setAttribute("uv",new ke(p,2));function S(){const b=new k,P=new k;let R=0;const T=(e-t)/i;for(let U=0;U<=a;U++){const q=[],y=U/a,x=y*(e-t)+t;for(let D=0;D<=s;D++){const N=D/s,B=N*c+r,I=Math.sin(B),O=Math.cos(B);P.x=x*I,P.y=-y*i+d,P.z=x*O,h.push(P.x,P.y,P.z),b.set(I,T,O).normalize(),m.push(b.x,b.y,b.z),p.push(N,1-y),q.push(g++)}_.push(q)}for(let U=0;U<s;U++)for(let q=0;q<a;q++){const y=_[q][U],x=_[q+1][U],D=_[q+1][U+1],N=_[q][U+1];t>0&&(u.push(y,x,N),R+=3),e>0&&(u.push(x,D,N),R+=3)}l.addGroup(f,R,0),f+=R}function v(b){const P=g,R=new ft,T=new k;let U=0;const q=b===!0?t:e,y=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,d*y,0),m.push(0,y,0),p.push(.5,.5),g++;const x=g;for(let D=0;D<=s;D++){const B=D/s*c+r,I=Math.cos(B),O=Math.sin(B);T.x=q*O,T.y=d*y,T.z=q*I,h.push(T.x,T.y,T.z),m.push(0,y,0),R.x=I*.5+.5,R.y=O*.5*y+.5,p.push(R.x,R.y),g++}for(let D=0;D<s;D++){const N=P+D,B=x+D;b===!0?u.push(B,B+1,N):u.push(B+1,B,N),U+=3}l.addGroup(f,U,b===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends Ae{constructor(t=1,e=1,i=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,i,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new us(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pd extends tl{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new tl().fromJSON(s))}return this}}const ey={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let a=Ld(n,0,s,e,!0);const o=[];if(!a||a.next===a.prev)return o;let r,c,l,u,h,m,p;if(i&&(a=oy(n,t,a,e)),n.length>80*e){r=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)h=n[g],m=n[g+1],h<r&&(r=h),m<c&&(c=m),h>l&&(l=h),m>u&&(u=m);p=Math.max(l-r,u-c),p=p!==0?32767/p:0}return za(a,o,e,r,c,p,0),o}};function Ld(n,t,e,i,s){let a,o;if(s===_y(n,t,e,i)>0)for(a=t;a<e;a+=i)o=oh(a,n[a],n[a+1],o);else for(a=e-i;a>=t;a-=i)o=oh(a,n[a],n[a+1],o);return o&&ar(o,o.next)&&(Ha(o),o=o.next),o}function hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ar(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Ha(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function za(n,t,e,i,s,a,o){if(!n)return;!o&&a&&hy(n,i,s,a);let r=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,a?iy(n,i,s,a):ny(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Ha(n),n=l.next,r=l.next;continue}if(n=l,n===r){o?o===1?(n=sy(hs(n),t,e),za(n,t,e,i,s,a,2)):o===2&&ay(n,t,e,i,s,a):za(hs(n),t,e,i,s,a,1);break}}}function ny(n){const t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;const s=t.x,a=e.x,o=i.x,r=t.y,c=e.y,l=i.y,u=s<a?s<o?s:o:a<o?a:o,h=r<c?r<l?r:l:c<l?c:l,m=s>a?s>o?s:o:a>o?a:o,p=r>c?r>l?r:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=m&&g.y>=h&&g.y<=p&&Hs(s,r,a,c,o,l,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function iy(n,t,e,i){const s=n.prev,a=n,o=n.next;if(Ne(s,a,o)>=0)return!1;const r=s.x,c=a.x,l=o.x,u=s.y,h=a.y,m=o.y,p=r<c?r<l?r:l:c<l?c:l,g=u<h?u<m?u:m:h<m?h:m,_=r>c?r>l?r:l:c>l?c:l,d=u>h?u>m?u:m:h>m?h:m,f=el(p,g,t,e,i),S=el(_,d,t,e,i);let v=n.prevZ,b=n.nextZ;for(;v&&v.z>=f&&b&&b.z<=S;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Hs(r,u,c,h,l,m,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=p&&b.x<=_&&b.y>=g&&b.y<=d&&b!==s&&b!==o&&Hs(r,u,c,h,l,m,b.x,b.y)&&Ne(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Hs(r,u,c,h,l,m,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=S;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=d&&b!==s&&b!==o&&Hs(r,u,c,h,l,m,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function sy(n,t,e){let i=n;do{const s=i.prev,a=i.next.next;!ar(s,a)&&kd(s,i,i.next,a)&&ja(s,a)&&ja(a,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(a.i/e|0),Ha(i),Ha(i.next),i=n=a),i=i.next}while(i!==n);return hs(i)}function ay(n,t,e,i,s,a){let o=n;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&py(o,r)){let c=Id(o,r);o=hs(o,o.next),c=hs(c,c.next),za(o,t,e,i,s,a,0),za(c,t,e,i,s,a,0);return}r=r.next}o=o.next}while(o!==n)}function oy(n,t,e,i){const s=[];let a,o,r,c,l;for(a=0,o=t.length;a<o;a++)r=t[a]*i,c=a<o-1?t[a+1]*i:n.length,l=Ld(n,r,c,i,!1),l===l.next&&(l.steiner=!0),s.push(fy(l));for(s.sort(ry),a=0;a<s.length;a++)e=cy(s[a],e);return e}function ry(n,t){return n.x-t.x}function cy(n,t){const e=ly(n,t);if(!e)return t;const i=Id(e,n);return hs(i,i.next),hs(e,e.next)}function ly(n,t){let e=t,i=-1/0,s;const a=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=a&&m>i&&(i=m,s=e.x<e.next.x?e:e.next,m===a))return s}e=e.next}while(e!==t);if(!s)return null;const r=s,c=s.x,l=s.y;let u=1/0,h;e=s;do a>=e.x&&e.x>=c&&a!==e.x&&Hs(o<l?a:i,o,c,l,o<l?i:a,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(a-e.x),ja(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&uy(s,e)))&&(s=e,u=h)),e=e.next;while(e!==r);return s}function uy(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function hy(n,t,e,i){let s=n;do s.z===0&&(s.z=el(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dy(s)}function dy(n){let t,e,i,s,a,o,r,c,l=1;do{for(e=n,n=null,a=null,o=0;e;){for(o++,i=e,r=0,t=0;t<l&&(r++,i=i.nextZ,!!i);t++);for(c=l;r>0||c>0&&i;)r!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,r--):(s=i,i=i.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;e=i}a.nextZ=null,l*=2}while(o>1);return n}function el(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function fy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Hs(n,t,e,i,s,a,o,r){return(s-o)*(t-r)>=(n-o)*(a-r)&&(n-o)*(i-r)>=(e-o)*(t-r)&&(e-o)*(a-r)>=(s-o)*(i-r)}function py(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!my(n,t)&&(ja(n,t)&&ja(t,n)&&gy(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||ar(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ar(n,t){return n.x===t.x&&n.y===t.y}function kd(n,t,e,i){const s=Eo(Ne(n,t,e)),a=Eo(Ne(n,t,i)),o=Eo(Ne(e,i,n)),r=Eo(Ne(e,i,t));return!!(s!==a&&o!==r||s===0&&wo(n,e,t)||a===0&&wo(n,i,t)||o===0&&wo(e,n,i)||r===0&&wo(e,t,i))}function wo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Eo(n){return n>0?1:n<0?-1:0}function my(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&kd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ja(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function gy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Id(n,t){const e=new nl(n.i,n.x,n.y),i=new nl(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function oh(n,t,e,i){const s=new nl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _y(n,t,e,i){let s=0;for(let a=t,o=e-i;a<e;a+=i)s+=(n[o]-n[a])*(n[a+1]+n[o+1]),o=a;return s}class Ra{static area(t){const e=t.length;let i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return Ra.area(t)<0}static triangulateShape(t,e){const i=[],s=[],a=[];rh(t),ch(i,t);let o=t.length;e.forEach(rh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ch(i,e[c]);const r=ey.triangulate(i,s);for(let c=0;c<r.length;c+=3)a.push(r.slice(c,c+3));return a}}function rh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ch(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Bl extends hn{constructor(t=new Pd([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],a=[];for(let r=0,c=t.length;r<c;r++){const l=t[r];o(l)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(a,2)),this.computeVertexNormals();function o(r){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:vy;let v,b=!1,P,R,T,U;f&&(v=f.getSpacedPoints(u),b=!0,m=!1,P=f.computeFrenetFrames(u,!1),R=new k,T=new k,U=new k),m||(d=0,p=0,g=0,_=0);const q=r.extractPoints(l);let y=q.shape;const x=q.holes;if(!Ra.isClockWise(y)){y=y.reverse();for(let H=0,A=x.length;H<A;H++){const lt=x[H];Ra.isClockWise(lt)&&(x[H]=lt.reverse())}}const N=Ra.triangulateShape(y,x),B=y;for(let H=0,A=x.length;H<A;H++){const lt=x[H];y=y.concat(lt)}function I(H,A,lt){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(A,lt)}const O=y.length,L=N.length;function F(H,A,lt){let st,nt,ut;const mt=H.x-A.x,vt=H.y-A.y,C=lt.x-H.x,w=lt.y-H.y,$=mt*mt+vt*vt,Z=mt*w-vt*C;if(Math.abs(Z)>Number.EPSILON){const at=Math.sqrt($),Q=Math.sqrt(C*C+w*w),St=A.x-vt/at,yt=A.y+mt/at,Rt=lt.x-w/Q,re=lt.y+C/Q,pt=((Rt-St)*w-(re-yt)*C)/(mt*w-vt*C);st=St+mt*pt-H.x,nt=yt+vt*pt-H.y;const Ct=st*st+nt*nt;if(Ct<=2)return new ft(st,nt);ut=Math.sqrt(Ct/2)}else{let at=!1;mt>Number.EPSILON?C>Number.EPSILON&&(at=!0):mt<-Number.EPSILON?C<-Number.EPSILON&&(at=!0):Math.sign(vt)===Math.sign(w)&&(at=!0),at?(st=-vt,nt=mt,ut=Math.sqrt($)):(st=mt,nt=vt,ut=Math.sqrt($/2))}return new ft(st/ut,nt/ut)}const rt=[];for(let H=0,A=B.length,lt=A-1,st=H+1;H<A;H++,lt++,st++)lt===A&&(lt=0),st===A&&(st=0),rt[H]=F(B[H],B[lt],B[st]);const ht=[];let dt,Ht=rt.concat();for(let H=0,A=x.length;H<A;H++){const lt=x[H];dt=[];for(let st=0,nt=lt.length,ut=nt-1,mt=st+1;st<nt;st++,ut++,mt++)ut===nt&&(ut=0),mt===nt&&(mt=0),dt[st]=F(lt[st],lt[ut],lt[mt]);ht.push(dt),Ht=Ht.concat(dt)}for(let H=0;H<d;H++){const A=H/d,lt=p*Math.cos(A*Math.PI/2),st=g*Math.sin(A*Math.PI/2)+_;for(let nt=0,ut=B.length;nt<ut;nt++){const mt=I(B[nt],rt[nt],st);_t(mt.x,mt.y,-lt)}for(let nt=0,ut=x.length;nt<ut;nt++){const mt=x[nt];dt=ht[nt];for(let vt=0,C=mt.length;vt<C;vt++){const w=I(mt[vt],dt[vt],st);_t(w.x,w.y,-lt)}}}const Wt=g+_;for(let H=0;H<O;H++){const A=m?I(y[H],Ht[H],Wt):y[H];b?(T.copy(P.normals[0]).multiplyScalar(A.x),R.copy(P.binormals[0]).multiplyScalar(A.y),U.copy(v[0]).add(T).add(R),_t(U.x,U.y,U.z)):_t(A.x,A.y,0)}for(let H=1;H<=u;H++)for(let A=0;A<O;A++){const lt=m?I(y[A],Ht[A],Wt):y[A];b?(T.copy(P.normals[H]).multiplyScalar(lt.x),R.copy(P.binormals[H]).multiplyScalar(lt.y),U.copy(v[H]).add(T).add(R),_t(U.x,U.y,U.z)):_t(lt.x,lt.y,h/u*H)}for(let H=d-1;H>=0;H--){const A=H/d,lt=p*Math.cos(A*Math.PI/2),st=g*Math.sin(A*Math.PI/2)+_;for(let nt=0,ut=B.length;nt<ut;nt++){const mt=I(B[nt],rt[nt],st);_t(mt.x,mt.y,h+lt)}for(let nt=0,ut=x.length;nt<ut;nt++){const mt=x[nt];dt=ht[nt];for(let vt=0,C=mt.length;vt<C;vt++){const w=I(mt[vt],dt[vt],st);b?_t(w.x,w.y+v[u-1].y,v[u-1].x+lt):_t(w.x,w.y,h+lt)}}}K(),ct();function K(){const H=s.length/3;if(m){let A=0,lt=O*A;for(let st=0;st<L;st++){const nt=N[st];Bt(nt[2]+lt,nt[1]+lt,nt[0]+lt)}A=u+d*2,lt=O*A;for(let st=0;st<L;st++){const nt=N[st];Bt(nt[0]+lt,nt[1]+lt,nt[2]+lt)}}else{for(let A=0;A<L;A++){const lt=N[A];Bt(lt[2],lt[1],lt[0])}for(let A=0;A<L;A++){const lt=N[A];Bt(lt[0]+O*u,lt[1]+O*u,lt[2]+O*u)}}i.addGroup(H,s.length/3-H,0)}function ct(){const H=s.length/3;let A=0;Mt(B,A),A+=B.length;for(let lt=0,st=x.length;lt<st;lt++){const nt=x[lt];Mt(nt,A),A+=nt.length}i.addGroup(H,s.length/3-H,1)}function Mt(H,A){let lt=H.length;for(;--lt>=0;){const st=lt;let nt=lt-1;nt<0&&(nt=H.length-1);for(let ut=0,mt=u+d*2;ut<mt;ut++){const vt=O*ut,C=O*(ut+1),w=A+st+vt,$=A+nt+vt,Z=A+nt+C,at=A+st+C;At(w,$,Z,at)}}}function _t(H,A,lt){c.push(H),c.push(A),c.push(lt)}function Bt(H,A,lt){kt(H),kt(A),kt(lt);const st=s.length/3,nt=S.generateTopUV(i,s,st-3,st-2,st-1);Vt(nt[0]),Vt(nt[1]),Vt(nt[2])}function At(H,A,lt,st){kt(H),kt(A),kt(st),kt(A),kt(lt),kt(st);const nt=s.length/3,ut=S.generateSideWallUV(i,s,nt-6,nt-3,nt-2,nt-1);Vt(ut[0]),Vt(ut[1]),Vt(ut[3]),Vt(ut[1]),Vt(ut[2]),Vt(ut[3])}function kt(H){s.push(c[H*3+0]),s.push(c[H*3+1]),s.push(c[H*3+2])}function Vt(H){a.push(H.x),a.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return yy(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,o=t.shapes.length;a<o;a++){const r=e[t.shapes[a]];i.push(r)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qc[s.type]().fromJSON(s)),new Bl(i,t.options)}}const vy={generateTopUV:function(n,t,e,i,s){const a=t[e*3],o=t[e*3+1],r=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ft(a,o),new ft(r,c),new ft(l,u)]},generateSideWallUV:function(n,t,e,i,s,a){const o=t[e*3],r=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],m=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[a*3],d=t[a*3+1],f=t[a*3+2];return Math.abs(r-u)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-h),new ft(m,1-g),new ft(_,1-f)]:[new ft(r,1-c),new ft(u,1-h),new ft(p,1-g),new ft(d,1-f)]}};function yy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ve extends hn{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const u=[],h=new k,m=new k,p=[],g=[],_=[],d=[];for(let f=0;f<=i;f++){const S=[],v=f/i;let b=0;f===0&&o===0?b=.5/e:f===i&&c===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const R=P/e;h.x=-t*Math.cos(s+R*a)*Math.sin(o+v*r),h.y=t*Math.cos(o+v*r),h.z=t*Math.sin(s+R*a)*Math.sin(o+v*r),g.push(h.x,h.y,h.z),m.copy(h).normalize(),_.push(m.x,m.y,m.z),d.push(R+b,1-v),S.push(l++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<e;S++){const v=u[f][S+1],b=u[f][S],P=u[f+1][S],R=u[f+1][S+1];(f!==0||o>0)&&p.push(v,b,R),(f!==i-1||c<Math.PI)&&p.push(b,P,R)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cn extends hn{constructor(t=1,e=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const o=[],r=[],c=[],l=[],u=new k,h=new k,m=new k;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*a,d=p/i*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(_),h.y=(t+e*Math.cos(d))*Math.sin(_),h.z=e*Math.sin(d),r.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(h,u).normalize(),c.push(m.x,m.y,m.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(_,d,S),o.push(d,f,S)}this.setIndex(o),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jn extends ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const lh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xy{constructor(t,e,i){const s=this;let a=!1,o=0,r=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){r++,a===!1&&s.onStart!==void 0&&s.onStart(u,o,r),a=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,r),o===r&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,m=l.length;h<m;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const My=new xy;class zl{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sy extends zl{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=lh.get(t);if(o!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o;const r=Fa("img");function c(){u(),lh.add(t,this),e&&e(this),a.manager.itemEnd(t)}function l(h){u(),s&&s(h),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){r.removeEventListener("load",c,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",c,!1),r.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),a.manager.itemStart(t),r.src=t,r}}class uh extends zl{constructor(t){super(t)}load(t,e,i,s){const a=new un,o=new Sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(r){a.image=r,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class jl extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class by extends jl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new Ee,hh=new k,dh=new k;class Dd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fh=new Ee,Ma=new k,Jr=new k;class wy extends Dd{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ma.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ma),Jr.copy(i.position),Jr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Jr),i.updateMatrixWorld(),s.makeTranslation(-Ma.x,-Ma.y,-Ma.z),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class ia extends jl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ey extends Dd{constructor(){super(new vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ph extends jl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Ey}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ty{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mh(){return performance.now()}const gh=new Ee;class Ay{constructor(t,e,i=0,s=1/0){this.ray=new Ll(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,i=[]){return il(t,this,i,e),i.sort(_h),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)il(t[s],this,i,e);return i.sort(_h),i}}function _h(n,t){return n.distance-t.distance}function il(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const a=n.children;for(let o=0,r=a.length;o<r;o++)il(a[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);const Ry=1842212,Pe=(n,t={})=>new Jn({color:n,roughness:.55,metalness:0,...t});function Pn(n,t,e=1,i=1,s=1){const a=new G(new Ve(n,20,14),t);return a.scale.set(e,i,s),a.castShadow=!0,a}class Cy{constructor(){this.root=new Ut,this.root.name="cat",this.mBody=Pe(Ry,{roughness:.45}),this.mDark=Pe(3421247),this.parts=[],this.t=0,this.action=null,this.mode="idle",this.blinkT=2,this.sq=0,this.sqV=0,this.happyEyes=0,this.build()}build(){const t=this.root;this.body=new Ut,t.add(this.body);const e=Pn(.42,this.mBody,1,1.25,.9);e.position.y=1,this.body.add(e);const i=new Ve(.43,24,16,Math.PI/2-Math.PI*.32,Math.PI*.64,Math.PI*.38,Math.PI*.5),s=new G(i,Pe(16448250,{side:mn}));s.scale.set(1.02,1.27,.93),s.position.y=1,this.body.add(s);const a=Pn(.1,Pe(15921906),1,1.3,.5);a.position.set(0,1.36,.33),this.body.add(a),this.head=new Ut,this.head.position.y=1.72,this.body.add(this.head);const o=Pn(.42,this.mBody,1.12,.96,1);this.head.add(o);const r=Pn(.17,this.mDark,1.35,.85,.8);r.position.set(0,-.12,.31),this.head.add(r);const c=Pn(.045,Pe(16748456),1.3,.8,1);c.position.set(0,-.06,.44),this.head.add(c);const l=new se({color:657934});for(const v of[-1,1]){const b=new G(new cn(.035,.008,6,12,Math.PI),l);b.position.set(v*.034,-.13,.43),b.rotation.z=Math.PI,this.head.add(b)}this.eyes=[];for(const v of[-1,1]){const b=new Ut;b.position.set(v*.17,.03,.33),b.rotation.y=v*.35;const P=Pn(.1,Pe(13164618,{emissive:3820032,roughness:.2}),1,1.1,.55),R=Pn(.05,new se({color:328965}),.6,1.5,.5);R.position.z=.04;const T=Pn(.022,new se({color:16777215}));T.position.set(.03,.045,.07),b.add(P,R,T),this.head.add(b),this.eyes.push(b)}this.ears=[];for(const v of[-1,1]){const b=new Ut;b.position.set(v*.26,.3,0),b.rotation.z=-v*.35;const P=new G(new us(.15,.32,16),this.mBody);P.position.y=.12,P.scale.z=.6,P.castShadow=!0;const R=new G(new us(.09,.22,12),Pe(16752565));R.position.set(0,.1,.05),R.scale.z=.4,b.add(P,R),this.head.add(b),this.ears.push(b)}const u=new Ed({color:14540253});for(const v of[-1,1])for(let b=0;b<3;b++){const P=new hn().setFromPoints([new k(v*.15,-.1+b*.03,.4),new k(v*.48,-.06+b*.07-.05,.3)]);this.head.add(new jv(P,u))}this.hatSlot=new Ut,this.hatSlot.position.y=.33,this.head.add(this.hatSlot),this.neckSlot=new Ut,this.neckSlot.position.y=1.42,this.body.add(this.neckSlot),this.arms=[];for(const v of[-1,1]){const b=new Ut;b.position.set(v*.36,1.25,.08);const P=new G(new Fl(.085,.3,6,12),this.mBody);P.position.y=-.2,P.castShadow=!0;const R=Pn(.1,Pe(16053492),1,.85,1);R.position.y=-.4,b.add(P,R),b.rotation.z=v*.25,b.userData.side=v,this.body.add(b),this.arms.push(b)}this.tools={};const h=new Ut,m=new G(new Zt(.04,.3,.012),Pe(14673646,{metalness:.8,roughness:.2}));m.position.y=-.17;const p=new G(new Ae(.02,.02,.12),Pe(7028509));h.add(m,p),h.rotation.x=Math.PI/2,h.position.set(0,-.45,.06);const g=new Ut,_=new G(new Ae(.015,.015,.45),Pe(13081179));_.position.y=-.2;const d=new G(new Ve(.06,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),Pe(13081179,{side:mn}));d.position.y=-.42,g.add(_,d),g.position.set(0,-.42,.04);const f=new G(new Zt(.16,.2,.02),Pe(16775392));f.position.set(0,-.48,.12),f.rotation.x=-.5,this.tools.knife=h,this.tools.ladle=g,this.tools.pad=f;for(const v in this.tools)this.tools[v].visible=!1,this.arms[1].add(this.tools[v]);this.tail=[];let S=new Ut;S.position.set(0,.75,-.32),S.rotation.x=-.9,this.body.add(S);for(let v=0;v<8;v++){const b=new Ut;b.position.y=v===0?0:.11;const P=new G(new Ve(.065-v*.003,12,8),this.mBody);P.scale.y=1.6,P.castShadow=!0,b.add(P),S.add(b),this.tail.push(b),S=b}this.root.traverse(v=>{v.isMesh&&(v.userData.cat=!0)})}holding(t){for(const e in this.tools)this.tools[e].visible=e===t}wear({hat:t,neck:e}){if(this.hatSlot.clear(),this.neckSlot.clear(),t==="hat_chef"){const i=new G(new Ae(.26,.28,.16,24),Pe(16777215));i.position.y=.02;const s=new Ut;[[0,.22,0,.24],[-.14,.18,0,.17],[.14,.18,0,.17],[0,.18,.12,.17],[0,.18,-.12,.17]].forEach(([a,o,r,c])=>{const l=Pn(c,Pe(16777215));l.position.set(a,o,r),s.add(l)}),this.hatSlot.add(i,s),this.hatSlot.rotation.z=.12}else if(t==="hat_hachimaki"){const i=new G(new cn(.43,.04,8,32),Pe(16777215));i.rotation.x=Math.PI/2,i.position.y=-.18,i.scale.set(1.08,1,1);const s=Pn(.06,Pe(14100029),1,1,.3);s.position.set(0,-.18,.45);const a=Pn(.06,Pe(16777215));a.position.set(.1,-.15,-.44),this.hatSlot.add(i,s,a),this.hatSlot.rotation.z=0}else if(t==="hat_straw"){const i=new G(new Ae(.6,.62,.03,32),Pe(15255664)),s=new G(new Ae(.26,.3,.2,24),Pe(15255664));s.position.y=.1;const a=new G(new Ae(.305,.305,.05,24),Pe(14100029));a.position.y=.04,this.hatSlot.add(i,s,a),this.hatSlot.rotation.z=-.1}if(e==="neck_bell"){const i=new G(new cn(.24,.03,8,32),Pe(14100029));i.rotation.x=Math.PI/2;const s=Pn(.06,Pe(16106818,{metalness:.7,roughness:.25}));s.position.set(0,-.07,.25),this.neckSlot.add(i,s)}else if(e==="neck_scarf"){const i=new G(new cn(.25,.07,10,32),Pe(3832789));i.rotation.x=Math.PI/2;const s=new G(new Zt(.1,.25,.04),Pe(3832789));s.position.set(.12,-.15,.25),s.rotation.z=.2,this.neckSlot.add(i,s)}}play(t,e=.35){this.action={name:t,t:0,dur:e},(t==="chop"||t==="press")&&this.squash(-.1)}squash(t){this.sqV+=t*22}setMode(t){this.mode=t}happy(){this.play("happy",1),this.happyEyes=1.2}update(t){this.t+=t;const e=this.t;this.sqV+=(-170*this.sq-11*this.sqV)*t,this.sq+=this.sqV*t;let i=this.sq;this.body.position.y=0,this.head.rotation.set(Math.sin(e*.7)*.04,Math.sin(e*.5)*.08,Math.sin(e*.9)*.05),this.tail.forEach((l,u)=>{l.rotation.z=Math.sin(e*1.8-u*.5)*.18,l.rotation.x=.12+Math.sin(e*1.1-u*.4)*.05}),this.ears.forEach((l,u)=>{l.rotation.x=Math.max(0,Math.sin(e*3+u*7)-.96)*6}),this.blinkT-=t;let s=1;this.blinkT<0&&(s=.1,this.blinkT<-.12&&(this.blinkT=2+Math.random()*3)),this.happyEyes>0&&(this.happyEyes-=t,s=.15),this.eyes.forEach(l=>l.scale.y=s);const[a,o]=this.arms;a.rotation.set(0,0,-.25+Math.sin(e*2.2)*.03),o.rotation.set(0,0,.25-Math.sin(e*2.2)*.03),this.mode==="stir"&&(o.rotation.x=-1+Math.sin(e*8)*.25,o.rotation.z=.35+Math.cos(e*8)*.25),this.mode==="talk"&&(this.head.rotation.x+=Math.sin(e*14)*.03),this.mode==="pet"&&(this.head.rotation.z=Math.sin(e*2)*.15+.15,this.eyes.forEach(l=>l.scale.y=.15));const r=this.action;if(r){r.t+=t;const l=Math.min(r.t/r.dur,1),u=Math.sin(l*Math.PI);switch(r.name){case"chop":o.rotation.x=-1.4+u*.9,this.body.position.y=-u*.02;break;case"press":a.rotation.x=o.rotation.x=-1.1,a.rotation.z=-.25-u*.5+.6,o.rotation.z=.25+u*.5-.6,this.body.position.y=-u*.03;break;case"wrap":a.rotation.x=o.rotation.x=-1-u*.4;break;case"pour":o.rotation.x=-1.2,o.rotation.y=-u*.6;break;case"wave":o.rotation.z=2.4+Math.sin(r.t*14)*.3;break;case"happy":{const h=Math.abs(Math.sin(l*Math.PI*2));this.body.position.y=h*.18,i+=(h-.35)*.22}a.rotation.z=-2.3,o.rotation.z=2.3;break;case"sad":this.head.rotation.x=.3*u,this.ears.forEach(h=>h.rotation.x=-.6*u);break}l>=1&&(this.action=null)}const c=1+Math.sin(e*2.2)*.012;this.body.scale.set(1-i*.5,c*(1+i),1-i*.5)}}const Ca=[{id:"home",name:"小黑食堂",jp:"食堂{しょくどう}",icon:"🏠",intro:"由飯糰開始，練好基本功。"},{id:"izakaya",name:"居酒屋・夜間營業",jp:"居酒屋{いざかや}",icon:"🏮",intro:"六款新料理，練習加單同沽清應對。"},{id:"cafe",name:"喫茶店・午後小休",jp:"喫茶店{きっさてん}",icon:"☕",intro:"六款餐飲，記住熟客嘅冷熱同甜度喜好。"},{id:"sushi",name:"壽司店・師傅出手",jp:"お寿司{すし}屋{や}",icon:"🍣",intro:"六款壽司，練習握、卷、揀魚同醋飯。"},{id:"ramen",name:"拉麵店・食券機",jp:"ラーメン屋{や}",icon:"🍜",intro:"先喺食券機買券，再答麵硬度同湯濃淡。"},{id:"konbini",name:"便利店・收銀員",jp:"コンビニ",icon:"🏪",intro:"今次你係收銀員：掃碼、聽客人要求、收錢找續。"},{id:"eki",name:"車站・買票搭車",jp:"駅{えき}",icon:"🚉",intro:"你係遊客：喺券売機買票，問駅員月台，聽廣播上啱車。"},{id:"hotel",name:"酒店・入住退房",jp:"ホテル",icon:"🏨",intro:"你係遊客：check-in、聽房號、提出請求，最後退房。"},{id:"dark",name:"暗黑食堂・主廚，叮好喇！",jp:"裏{うら}メニュー",icon:"🌙",intro:"七款捷徑料理，擺盤、改名，再揭開後廚秘密。"}],Py=[["edamame_raw","枝豆{えだまめ}","生枝豆","🫛","sphere",7974216],["abura","油{あぶら}","食用油","🫗","cyl",15121748],["katakuriko","片栗粉{かたくりこ}","粟粉／薯仔澱粉","🥣","sphere",16775920],["komugiko","小麦粉{こむぎこ}","麵粉","🥣","sphere",15656401],["kyabetsu","キャベツ","椰菜","🥬","sphere",9812329],["sosu","ソース","日式炒麵／大阪燒醬","🫙","cyl",6501155],["coffee_powder","インスタントコーヒー","即溶咖啡粉","☕","cyl",5781287],["koucha_leaf","紅茶{こうちゃ}","紅茶茶葉","🍂","sphere",7421995],["matcha_powder","抹茶{まっちゃ}","抹茶粉","🍵","sphere",7512395],["milk","牛乳{ぎゅうにゅう}","牛奶","🥛","cyl",16775400],["pan_bread","食{しょく}パン","厚切方包","🍞","box",15516554],["butter","バター","牛油","🧈","box",16177017],["sushi_su","寿司酢{すしず}","壽司醋","🫙","cyl",15851432],["kyuri","きゅうり","青瓜","🥒","cyl",5939786],["maguro","まぐろ","吞拿魚","🐟","box",13120060],["aburaage","油揚{あぶらあ}げ","豆腐卜","🟫","box",13208124],["wasabi","わさび","山葵","🟢","sphere",9420618],["menma","メンマ","筍乾","🎋","box",13215066],["tonkotsu_soup","豚骨{とんこつ}スープ","豬骨濃湯","🥣","cyl",15786696]],Ud=[],Ie=n=>({type:"pick",need:n,decoys:["nori","miso"],jp:"材料{ざいりょう}を 選{えら}んで",yue:"揀啱材料",tip:"聽日文，再揀材料。"}),Kt=(n,t,e,i,s)=>({type:n,verb:t,jp:e,yue:i,tip:s,anim:n==="timing"?"wrap":"stir",turns:2,rounds:2,zone:n==="hold"?[.45,.7]:.24}),Nd=[{id:"edamame",chapter:"izakaya",jp:"枝豆{えだまめ}",yue:"鹽水枝豆",emoji:"🫛",price:180,station:"pot",serves:"2 人",time:"10 分鐘",ingredients:[["edamame_raw","枝豆 200g"],["shio","鹽 1 茶匙"],["mizu","水 1 公升"]],howto:["枝豆洗淨，用少少鹽搓一搓。","水煮滾，落枝豆煮約 4–5 分鐘，至豆仁熟透。","瀝乾，趁熱拌少少鹽；只食豆仁，豆莢唔食。"],steps:[Ie(["edamame_raw","shio","mizu"]),Kt("hold","yuderu","枝豆{えだまめ}を ゆでて","烚熟枝豆","長按加熱，綠色位放手。")]},{id:"yakitori",chapter:"izakaya",jp:"焼{や}き鳥{とり}",yue:"焼鳥",emoji:"🍢",price:320,station:"pan",serves:"4 串",time:"20 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["negi","大蔥 1 條"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"]],howto:["雞肉切小件，大蔥切段，交替串上竹籤。","豉油同味醂混合成醬汁。","用平底鑊煎串燒，不時反面，最後掃醬；雞肉中心須達 75°C 並維持至少 1 分鐘。"],steps:[Ie(["toriniku","negi","shoyu"]),Kt("timing","noseru","串{くし}に のせて","將雞肉同蔥串好","撳準綠色位。"),Kt("hold","yaku","鶏肉{とりにく}を 焼{や}いて","燒熟雞肉","控制火候，唔好燒焦。")]},{id:"karaage",chapter:"izakaya",jp:"唐揚{からあ}げ",yue:"唐揚炸雞",emoji:"🍗",price:360,station:"pan",serves:"2 人",time:"25 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["shoyu","豉油 1 湯匙"],["ninniku","蒜蓉 1 茶匙"],["katakuriko","澱粉 3 湯匙"],["abura","炸油 適量"]],howto:["雞肉切件，用豉油同蒜蓉醃 10 分鐘。","逐件薄薄裹上澱粉。","以約 170°C 油炸至金黃；雞肉中心須達 75°C 並維持至少 1 分鐘，瀝油上碟。"],steps:[Ie(["toriniku","katakuriko","abura"]),Kt("stir","mazeru","衣{ころも}を つけて","拌上薄薄粉衣","轉圈拌勻。"),Kt("hold","ageru","鶏肉{とりにく}を 揚{あ}げて","炸熟雞肉","控制油溫。")]},{id:"agedashi",chapter:"izakaya",jp:"揚{あ}げ出{だ}し豆腐{どうふ}",yue:"揚出豆腐",emoji:"⬜",price:280,station:"pan",serves:"2 人",time:"20 分鐘",ingredients:[["tofu","硬豆腐 1 盒"],["katakuriko","澱粉 2 湯匙"],["abura","油 適量"],["dashi","高湯 100ml"],["shoyu","豉油 1 茶匙"],["negi","蔥花 少許"]],howto:["豆腐瀝乾抹乾，切大件，薄薄裹粉。","熱油中小火煎至各面金黃。","高湯加豉油煮熱，沿碗邊淋入，再放蔥花。"],steps:[Ie(["tofu","katakuriko","dashi"]),Kt("hold","ageru","豆腐{とうふ}を 揚{あ}げて","煎至金黃","綠色位放手。"),Kt("timing","noseru","ねぎを のせて","灑上蔥花","最後先放配料。")]},{id:"okonomiyaki",chapter:"izakaya",jp:"お好{この}み焼{や}き",yue:"大阪燒",emoji:"🥞",price:380,station:"pan",serves:"1 塊",time:"20 分鐘",ingredients:[["kyabetsu","椰菜絲 150g"],["komugiko","麵粉 50g"],["tamago","雞蛋 1 隻"],["mizu","水 50ml"],["sosu","大阪燒醬 1 湯匙"],["abura","油 1 茶匙"]],howto:["麵粉、蛋同水拌勻，再拌入椰菜絲。","平底鑊落油，倒入麵糊成厚圓餅，中小火煎約 5 分鐘。","小心反面，冚蓋再煎至中心熟透，上碟搽醬。"],steps:[Ie(["kyabetsu","komugiko","tamago"]),Kt("stir","mazeru","生地{きじ}を 混{ま}ぜて","拌勻麵糊","轉圈攪勻。"),Kt("timing","yaku","裏返{うらがえ}して","反面煎熟","撳準時機反面！")]},{id:"yakisoba",chapter:"izakaya",jp:"焼{や}きそば",yue:"日式炒麵",emoji:"🍝",price:340,station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["men","熟炒麵 1 份"],["kyabetsu","椰菜絲 100g"],["tamanegi","洋蔥 1/4 個"],["sosu","炒麵醬 1–2 湯匙"],["abura","油 1 茶匙"]],howto:["洋蔥切絲，椰菜切細。","鑊落油炒軟蔬菜，加熟麵同一湯匙水炒散。","加醬汁炒勻至熱透。"],steps:[Ie(["men","kyabetsu","sosu"]),Kt("stir","mazeru","麺{めん}を 炒{いた}めて","炒散麵條","轉圈翻炒。"),Kt("timing","noseru","お皿{さら}に のせて","上碟","撳準出餐！")]},{id:"instant_coffee",chapter:"cafe",jp:"インスタントコーヒー",yue:"精品即溶咖啡",emoji:"☕",price:260,station:"board",serves:"1 杯",time:"3 分鐘",ingredients:[["coffee_powder","精品即溶咖啡粉 2g"],["mizu","熱水 150ml"]],howto:["按咖啡粉包裝建議份量放入杯。","加入熱水攪溶，按喜好調整濃淡。","冷飲版先用少量熱水溶粉，再補冷水同冰；加水時計埋融冰份量。"],steps:[Ie(["coffee_powder","mizu"]),Kt("stir","tokasu","コーヒーを 溶{と}かして","攪溶咖啡粉","轉圈攪至均勻。")]},{id:"black_tea",chapter:"cafe",jp:"紅茶{こうちゃ}",yue:"紅茶",emoji:"🫖",price:220,station:"pot",serves:"1 杯",time:"5 分鐘",ingredients:[["koucha_leaf","紅茶葉 2g"],["mizu","熱水 200ml"]],howto:["暖杯後放入茶葉。","沖入熱水，按茶葉包裝建議浸泡約 3 分鐘，再隔走茶葉。","冷飲版放涼再加冰，調整水量避免過淡。"],steps:[Ie(["koucha_leaf","mizu"]),Kt("hold","ireru","紅茶{こうちゃ}を 入{い}れて","沖泡紅茶","掌握浸泡時間。")]},{id:"matcha_latte",chapter:"cafe",jp:"抹茶{まっちゃ}ラテ",yue:"抹茶拿鐵",emoji:"🍵",price:320,station:"board",serves:"1 杯",time:"5 分鐘",ingredients:[["matcha_powder","抹茶粉 2g"],["mizu","熱水 30ml"],["milk","牛奶 150ml"],["satou","糖 0–1 茶匙，按客人要求"]],howto:["抹茶粉過篩，用熱水攪成冇粉粒嘅茶液。","按冷熱要求加入暖奶，或凍奶同冰。","按客人要求加糖，攪勻。"],steps:[Ie(["matcha_powder","milk","mizu"]),Kt("stir","mazeru","抹茶{まっちゃ}を 混{ま}ぜて","攪散抹茶粉","轉圈攪滑。"),Kt("timing","ireru","牛乳{ぎゅうにゅう}を 入{い}れて","倒入牛奶","慢慢倒奶。")]},{id:"pudding",chapter:"cafe",jp:"プリン",yue:"雞蛋布甸",emoji:"🍮",price:280,station:"pot",serves:"2 杯",time:"25 分鐘＋冷藏",ingredients:[["tamago","雞蛋 1 隻"],["milk","牛奶 150ml"],["satou","糖 20g"]],howto:["蛋同糖輕輕拌勻，加入微暖牛奶，過篩入耐熱杯。","用蒸鍋小火蒸約 12–15 分鐘，至中心凝固；蛋液須充分煮熟。","放涼後冷藏至少 2 小時。"],steps:[Ie(["tamago","milk","satou"]),Kt("stir","mazeru","卵液{らんえき}を 混{ま}ぜて","輕輕攪勻蛋液","唔好打入太多氣泡。"),Kt("hold","musu","プリンを 蒸{む}して","慢火蒸布甸","小火先滑！")]},{id:"thick_toast",chapter:"cafe",jp:"厚切{あつぎ}りトースト",yue:"牛油厚多士",emoji:"🍞",price:240,station:"pan",serves:"1 份",time:"8 分鐘",ingredients:[["pan_bread","厚切方包 1 片"],["butter","牛油 10g"]],howto:["方包表面劃淺格，唔好切穿。","搽牛油，放多士爐烤至表面金黃；亦可平底鑊小火煎兩面。","趁熱上碟。"],steps:[Ie(["pan_bread","butter"]),Kt("timing","kiru","パンに 切{き}り込{こ}みを 入{い}れて","喺方包劃淺格","輕力劃，唔好切穿。"),Kt("hold","yaku","パンを 焼{や}いて","烘至金黃","控制火候。")]},{id:"pancakes",chapter:"cafe",jp:"ホットケーキ",yue:"熱香餅",emoji:"🥞",price:300,station:"pan",serves:"2 塊",time:"15 分鐘",ingredients:[["komugiko","自發粉 100g（此處取代普通麵粉）"],["tamago","雞蛋 1 隻"],["milk","牛奶 80ml"],["satou","糖 15g"],["butter","牛油 5g"]],howto:["蛋、奶同糖拌勻，加自發粉輕拌至冇乾粉。","平底鑊薄搽牛油，小火倒入麵糊。","表面冒泡、邊緣凝固時反面，再煎至中心熟透。"],steps:[Ie(["komugiko","tamago","milk"]),Kt("stir","mazeru","生地{きじ}を 混{ま}ぜて","輕拌麵糊","唔好攪過頭。"),Kt("timing","yaku","裏返{うらがえ}して","冒泡就反面","等啱時機！")]},{id:"kappamaki",chapter:"sushi",jp:"かっぱ巻{ま}き",yue:"青瓜卷",emoji:"🥒",price:240,station:"board",serves:"6 件",time:"20 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["nori","紫菜 1 張"],["kyuri","青瓜 1/2 條"]],howto:["熱飯拌入壽司醋，用扇扇涼至體溫。","青瓜切成長條；紫菜粗面向上，鋪薄薄一層飯，近身處放青瓜。","用竹簾捲實，濕刀切成 6 件。"],steps:[Ie(["gohan","sushi_su","kyuri"]),Kt("stir","mazeru","酢飯{すめし}を 混{ま}ぜて","醋拌飯","轉圈拌勻醋飯。"),Kt("timing","maku","のりで 巻{ま}いて","捲起青瓜卷","撳準時機捲實！")]},{id:"tekkamaki",chapter:"sushi",jp:"鉄火巻{てっかま}き",yue:"吞拿魚卷",emoji:"🍣",price:360,station:"board",serves:"6 件",time:"25 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["nori","紫菜 1 張"],["maguro","刺身級吞拿魚 80g"],["wasabi","山葵 少許"]],howto:["醋飯同上，扇涼。","吞拿魚用刺身級，切成長條；飯上抹少少山葵，放魚條。","捲實，濕刀切件；魚肉要新鮮，即日食用。"],steps:[Ie(["gohan","maguro","wasabi"]),Kt("timing","kiru","まぐろを 切{き}って","切吞拿魚條","輕力一刀切好。"),Kt("timing","maku","のりで 巻{ま}いて","捲起魚卷","撳準時機捲實！")]},{id:"tamago_nigiri",chapter:"sushi",jp:"玉子{たまご}の 握{にぎ}り",yue:"玉子握壽司",emoji:"🍣",price:200,station:"board",serves:"4 件",time:"25 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["tamago","雞蛋 3 隻"],["satou","砂糖 1 湯匙"],["shoyu","豉油 1 茶匙"]],howto:["蛋、糖同豉油拌勻，用方形鑊煎成厚蛋卷，放涼切條。","醋飯輕輕握成長方形小團，唔好捏太實。","蛋條放飯上，可用細條紫菜束緊。"],steps:[Ie(["tamago","satou","gohan"]),Kt("stir","mazeru","卵{たまご}を 混{ま}ぜて","拌勻蛋液","轉圈拌勻。"),Kt("timing","nigiru","ご飯{はん}を 握{にぎ}って","握成飯團","輕輕握，唔好太實。")]},{id:"salmon_nigiri",chapter:"sushi",jp:"サーモンの 握{にぎ}り",yue:"三文魚握壽司",emoji:"🍣",price:320,station:"board",serves:"4 件",time:"20 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["sake_fish","刺身級三文魚 100g"],["wasabi","山葵 少許"]],howto:["醋飯扇涼，手沾醋水防黐手。","三文魚斜刀切成薄片。","握一小團飯，抹少少山葵，蓋上魚片輕壓成形。"],steps:[Ie(["gohan","sake_fish","wasabi"]),Kt("timing","kiru","鮭{さけ}を 切{き}って","斜刀切魚片","一刀拉切，唔好壓爛。"),Kt("timing","nigiru","ご飯{はん}を 握{にぎ}って","握成飯團","輕輕握。")]},{id:"inari",chapter:"sushi",jp:"いなり寿司{ずし}",yue:"稻荷壽司",emoji:"🟫",price:220,station:"pot",serves:"6 個",time:"30 分鐘",ingredients:[["aburaage","豆腐卜 3 塊"],["dashi","高湯 150ml"],["shoyu","豉油 1 湯匙"],["satou","砂糖 1 湯匙"],["gohan","熟白飯 200g"]],howto:["豆腐卜淋熱水去油，切半成袋。","高湯、豉油同糖煮滾，豆腐卜小火煮約 10 分鐘至入味。","壓乾汁，輕輕塞入醋飯。"],steps:[Ie(["aburaage","dashi","shoyu"]),Kt("hold","niru","油揚{あぶらあ}げを 煮{に}て","煮入味","小火煮，綠色位放手。"),Kt("timing","tsumeru","ご飯{はん}を 詰{つ}めて","塞入醋飯","輕手塞滿。")]},{id:"chirashi",chapter:"sushi",jp:"ちらし寿司{ずし}",yue:"散壽司",emoji:"🍱",price:420,station:"board",serves:"1 碗",time:"25 分鐘",ingredients:[["gohan","熟白飯 250g"],["sushi_su","壽司醋 2 湯匙"],["sake_fish","刺身級三文魚 60g"],["tamago","蛋絲 1 隻份"],["nori","紫菜絲 少許"]],howto:["醋飯扇涼，盛入碗。","三文魚切片；蛋煎薄片切絲。","將魚片、蛋絲同紫菜絲散放飯面。"],steps:[Ie(["gohan","sake_fish","tamago"]),Kt("stir","mazeru","酢飯{すめし}を 混{ま}ぜて","拌勻醋飯","轉圈拌勻。"),Kt("timing","noseru","具{ぐ}を のせて","擺上配料","撳準，漂亮擺盤。")]},{id:"shoyu_ramen",chapter:"ramen",jp:"醤油{しょうゆ}ラーメン",yue:"豉油拉麵",emoji:"🍜",price:800,station:"pot",serves:"1 碗",time:"30 分鐘",ingredients:[["men","拉麵 1 球"],["dashi","雞骨高湯 400ml"],["shoyu","豉油 2 湯匙"],["chashu","叉燒 2 片"],["negi","蔥花 少許"]],howto:["高湯煮滾，加豉油調成湯底。","麵放滾水煮約 2 分鐘，瀝乾。","麵放碗中淋湯，擺上叉燒同蔥花。"],steps:[Ie(["men","shoyu","chashu"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","控制時間，綠色位放手。"),Kt("timing","noseru","チャーシューを のせて","擺上叉燒","撳準綠色位。")]},{id:"shio_ramen",chapter:"ramen",jp:"塩{しお}ラーメン",yue:"鹽味拉麵",emoji:"🍜",price:800,station:"pot",serves:"1 碗",time:"30 分鐘",ingredients:[["men","拉麵 1 球"],["dashi","清湯 400ml"],["shio","鹽 1 茶匙"],["menma","筍乾 數條"],["negi","蔥花 少許"]],howto:["清湯煮滾，用鹽調味，味道清淡。","麵煮好瀝乾放碗。","淋湯，加筍乾同蔥花。"],steps:[Ie(["men","shio","menma"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","控制時間，綠色位放手。"),Kt("stir","mazeru","スープを 混{ま}ぜて","攪勻湯底","轉圈拌勻。")]},{id:"miso_ramen",chapter:"ramen",jp:"味噌{みそ}ラーメン",yue:"味噌拉麵",emoji:"🍜",price:900,station:"pot",serves:"1 碗",time:"30 分鐘",ingredients:[["men","拉麵 1 球"],["dashi","高湯 400ml"],["miso","味噌 2 湯匙"],["moyashi","芽菜 一把"],["negi","蔥花 少許"]],howto:["高湯煮滾後熄火，溶入味噌。","麵煮好放碗，淋湯。","加炒香芽菜同蔥花。"],steps:[Ie(["men","miso","moyashi"]),Kt("stir","tokasu","味噌{みそ}を 溶{と}かして","溶開味噌","轉圈拌勻。"),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","控制時間，綠色位放手。")]},{id:"tonkotsu_ramen",chapter:"ramen",jp:"豚骨{とんこつ}ラーメン",yue:"豬骨拉麵",emoji:"🍜",price:950,station:"pot",serves:"1 碗",time:"40 分鐘",ingredients:[["men","細麵 1 球"],["tonkotsu_soup","豬骨濃湯 400ml"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥花 少許"]],howto:["濃白豬骨湯煮熱。","細麵煮約 1 分鐘，偏硬。","倒湯放麵，擺叉燒、溏心蛋同蔥花。"],steps:[Ie(["men","tonkotsu_soup","tamago"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","細麵好快熟，控制時間。"),Kt("timing","noseru","卵{たまご}を のせて","擺上溏心蛋","撳準綠色位。")]},{id:"tsukemen",chapter:"ramen",jp:"つけ麺{めん}",yue:"沾麵",emoji:"🍝",price:1e3,station:"pot",serves:"1 人",time:"35 分鐘",ingredients:[["men","粗麵 1 球"],["shoyu","豉油 2 湯匙"],["dashi","濃縮魚介湯 150ml"],["chashu","叉燒 2 片"],["negi","蔥花 少許"]],howto:["粗麵煮熟後用冰水過冷，令麵更彈牙。","濃湯另碗盛，加叉燒同蔥花。","麵同沾汁分開上，用麵沾湯食。"],steps:[Ie(["men","dashi","chashu"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮粗麵","控制時間，綠色位放手。"),Kt("timing","noseru","チャーシューを のせて","擺料落沾汁","撳準綠色位。")]},{id:"chahan",chapter:"ramen",jp:"チャーハン",yue:"炒飯",emoji:"🍚",price:700,station:"pot",serves:"1 碗",time:"20 分鐘",ingredients:[["gohan","熟白飯 250g"],["tamago","雞蛋 1 隻"],["negi","蔥花 2 湯匙"],["shoyu","豉油 1 茶匙"],["abura","油 1 湯匙"]],howto:["鑊燒熱落油，倒入蛋液快炒。","放飯炒散，加蔥花。","鑊邊淋豉油，炒勻即成。"],steps:[Ie(["gohan","tamago","negi"]),Kt("stir","itameru","ご飯{はん}を 炒{いた}めて","炒飯","轉圈拌勻。"),Kt("hold","yaku","強火{つよび}で 焼{や}いて","炒出鑊氣","控制火候，唔好燒焦。")]}].map(n=>({...n,dish:n.id,unlock:{}})),Ly=[["yaku","焼{や}く","燒、烘","verb"],["ageru","揚{あ}げる","炸","verb"],["ireru","入{い}れる","倒入、沖泡","verb"],["musu","蒸{む}す","蒸","verb"],["sabinuki","さび抜{ぬ}き","唔落山葵","phrase"],["wasabi_ooi","わさび 多{おお}め","多啲山葵","phrase"],["wasabi_sukunai","わさび 少{すく}なめ","少啲山葵","phrase"],["shoyu_tsukeru","醤油{しょうゆ}を つける","沾豉油","phrase"],["men_katame","麺{めん}は かため","麵要硬啲","phrase"],["men_futsuu","麺{めん}は ふつう","麵正常","phrase"],["men_yawaraka","麺{めん}は やわらかめ","麵要淋啲","phrase"],["aji_koime","味{あじ}は 濃{こ}いめ","味道濃啲","phrase"],["aji_futsuu","味{あじ}は ふつう","味道正常","phrase"],["aji_usume","味{あじ}は 薄{うす}め","味道淡啲","phrase"],["itameru","炒{いた}める","炒","verb"],["maku","巻{ま}く","捲","verb"],["tsumeru","詰{つ}める","塞入","verb"],["tsuika","追加{ついか}","加單","phrase"],["urikire","売{う}り切{き}れ","沽清","phrase"],["herasu","減{へ}らす","減少","phrase"],["kaeru","変{か}える","改做、換","phrase"],["kyanseru","キャンセル","取消訂單","phrase"],["yameru","やめる","唔要、算","phrase"],["hot","温{あたた}かい","熱飲","phrase"],["iced","冷{つめ}たい","凍飲","phrase"],["less_sugar","甘{あま}さ控{ひか}えめ","少甜","phrase"],["no_sugar","砂糖{さとう}なし","無糖","phrase"]],Zr=[{id:"sabinuki",jp:"さび抜{ぬ}きで お願{ねが}いします。",yue:"唔該，唔好落山葵。",label:"唔落山葵",detail:"飯同魚中間唔搽",icon:"🚫"},{id:"wasabi_ooi",jp:"わさびを 多{おお}めに お願{ねが}いします。",yue:"唔該，山葵多啲。",label:"多落山葵",detail:"搽厚少少",icon:"🟢"},{id:"wasabi_sukunai",jp:"わさびは 少{すく}なめで お願{ねが}いします。",yue:"山葵少啲，唔該。",label:"少落山葵",detail:"只搽薄薄一層",icon:"🥄"}],ky={noodle:[{id:"men_katame",jp:"麺{めん}は かために お願{ねが}いします。",yue:"麵硬啲，唔該。",label:"煮硬啲",detail:"少煮 30 秒",icon:"💪"},{id:"men_futsuu",jp:"麺{めん}は ふつうで お願{ねが}いします。",yue:"麵正常就得，唔該。",label:"煮正常",detail:"照食譜時間",icon:"👌"},{id:"men_yawaraka",jp:"麺{めん}は やわらかめで お願{ねが}いします。",yue:"麵淋啲，唔該。",label:"煮淋啲",detail:"多煮 30 秒",icon:"🫧"}],soup:[{id:"aji_koime",jp:"味{あじ}は 濃{こ}いめで お願{ねが}いします。",yue:"味道濃啲，唔該。",label:"湯底濃啲",detail:"多落醬汁",icon:"🧂"},{id:"aji_futsuu",jp:"味{あじ}は ふつうで お願{ねが}いします。",yue:"味道正常就得，唔該。",label:"湯底正常",detail:"照食譜調味",icon:"👌"},{id:"aji_usume",jp:"味{あじ}は 薄{うす}めで お願{ねが}いします。",yue:"味道淡啲，唔該。",label:"湯底淡啲",detail:"少落醬汁",icon:"💧"}]},vh={jp:"お醤油{しょうゆ}は どう つけますか？",yue:"豉油應該點沾？"},Iy=["沾魚面，輕輕一點","沾飯面","成件浸落豉油碟"],Qr=[{id:"reader",name:"讀書常客",request:"hot",jp:"いつもの、温{あたた}かいので お願{ねが}いします。",yue:"同平時一樣，要熱嘅。"},{id:"walker",name:"散步常客",request:"iced",jp:"冷{つめ}たいので お願{ねが}いします。",yue:"唔該要凍飲。"},{id:"artist",name:"畫畫常客",request:"less_sugar",jp:"甘{あま}さ控{ひか}えめで お願{ねが}いします。",yue:"唔該少甜。"}],Dy=[{id:"onigiri",jp:"おにぎり",yue:"飯糰",emoji:"🍙",price:150,heat:!1},{id:"bento",jp:"お弁当{べんとう}",yue:"便當",emoji:"🍱",price:480,heat:!0,cutlery:!0},{id:"sandwich",jp:"サンドイッチ",yue:"三文治",emoji:"🥪",price:280,heat:!1},{id:"ocha",jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",price:130,heat:!1},{id:"coffee",jp:"コーヒー",yue:"咖啡",emoji:"☕",price:120,heat:!1},{id:"chips",jp:"ポテトチップス",yue:"薯片",emoji:"🥔",price:170,heat:!1},{id:"ice",jp:"アイス",yue:"雪糕",emoji:"🍦",price:160,heat:!1},{id:"nikuman",jp:"肉{にく}まん",yue:"肉包",emoji:"🥟",price:190,heat:!1},{id:"curry_pack",jp:"レトルトカレー",yue:"即食咖哩",emoji:"🍛",price:330,heat:!0,cutlery:!0},{id:"pudding",jp:"プリン",yue:"布甸",emoji:"🍮",price:140,heat:!1}].map(n=>({...n,art:`goods_${n.id}`})),Od={bag:{ask:{jp:"袋{ふくろ}は いりますか？",yue:"要唔要膠袋？"},title:"客人要唔要袋？",yes:{id:"k_fukuro",jp:"袋{ふくろ}を お願{ねが}いします。",yue:"唔該，要袋。",label:"加袋"},no:{id:"k_fukuro_no",jp:"袋{ふくろ}は いりません。",yue:"唔使袋。",label:"唔使袋"}},heat:{ask:{jp:"温{あたた}めますか？",yue:"要唔要叮熱？"},title:"客人要唔要叮熱？",yes:{id:"k_atatame",jp:"温{あたた}めて ください。",yue:"請幫我叮熱。",label:"叮熱"},no:{id:"k_sonomama",jp:"そのままで お願{ねが}いします。",yue:"唔使，照原樣。",label:"唔叮"}},cutlery:{ask:{jp:"お箸{はし}は おつけしますか？",yue:"要唔要筷子？"},title:"客人要唔要筷子？",yes:{id:"k_hashi",jp:"お箸{はし}を お願{ねが}いします。",yue:"唔該，要筷子。",label:"附筷子"},no:{id:"k_hashi_no",jp:"お箸{はし}は いりません。",yue:"唔使筷子。",label:"唔附筷子"}},point:{ask:{jp:"ポイントカードは お持{も}ちですか？",yue:"有冇積分卡？"},title:"客人有冇積分卡？",yes:{id:"k_point",jp:"はい、 あります。 お願{ねが}いします。",yue:"有，請幫我儲分。",label:"儲積分"},no:{id:"k_point_no",jp:"ポイントカードは ありません。",yue:"冇積分卡。",label:"唔儲分"}}},Bo=[{id:"k_genkin",jp:"現金{げんきん}で お願{ねが}いします。",yue:"現金付款。",label:"現金",icon:"💴"},{id:"k_card",jp:"カードで お願{ねが}いします。",yue:"用信用卡。",label:"信用卡",icon:"💳"},{id:"k_ic",jp:"交通系{こうつうけい}アイシーで お願{ねが}いします。",yue:"用交通卡（Suica 之類）。",label:"交通卡",icon:"🚃"}],yh={jp:"お支払{しはら}いは いかがなさいますか？",yue:"點樣付款？"},xh={jp:"ありがとうございました。",yue:"多謝光臨。"},Uy=[{key:"kb_arigatou",lv:0,jp:"ありがとう！",yue:"多謝！"},{key:"kb_mata",lv:0,jp:"また 来{き}ます！",yue:"我會再嚟！"},{key:"kb_arigatou2",lv:1,jp:"ありがとうございました。 また 来{き}ますね",yue:"多謝，我會再嚟"},{key:"kb_benri",lv:1,jp:"近{ちか}くに あって、 便利{べんり}です！",yue:"喺附近好方便！"},{key:"kb_osewa",lv:2,jp:"夜遅{よるおそ}くまで 開{あ}いていて 助{たす}かります",yue:"開到好夜，幫到手"},{key:"kb_mata2",lv:2,jp:"また 近{ちか}くを 通{とお}ったら 寄{よ}らせて もらいます",yue:"下次經過再嚟"},{key:"kb_osewa3",lv:3,jp:"いつも 遅{おそ}くまで お疲{つか}れ様{さま}です。 助{たす}かります",yue:"成日做到咁夜，辛苦晒，幫到手"},{key:"kb_mata3",lv:3,jp:"いつも 便利{べんり}に 使{つか}わせて もらってます。 また 来{き}ますね",yue:"成日用得好方便，下次再嚟"}],Mh={jp:"おつりを お返{かえ}しします。",yue:"搵返錢畀你。"},Fd=[...Object.values(Od).flatMap(n=>[n.yes,n.no].map(t=>[t.id,t.jp,t.yue,"phrase"])),...Bo.map(n=>[n.id,n.jp,n.yue,"phrase"]),["k_goukei","合計{ごうけい}","合計、總數","phrase"],["k_otsuri","おつり","找續（搵返嘅錢）","phrase"]],Ny=Fd.map(n=>n[0]),tc=["","一","二","三","四","五","六","七","八","九"],Oy=["","せん","にせん","さんぜん","よんせん","ごせん","ろくせん","ななせん","はっせん","きゅうせん"],Fy=["","ひゃく","にひゃく","さんびゃく","よんひゃく","ごひゃく","ろっぴゃく","ななひゃく","はっぴゃく","きゅうひゃく"],By=["","じゅう","にじゅう","さんじゅう","よんじゅう","ごじゅう","ろくじゅう","ななじゅう","はちじゅう","きゅうじゅう"];function Pa(n){const t=Math.floor(n/1e3),e=Math.floor(n%1e3/100),i=Math.floor(n%100/10);return`${(t?(t>1?tc[t]:"")+"千":"")+(e?(e>1?tc[e]:"")+"百":"")+(i?(i>1?tc[i]:"")+"十":"")+"円"}{${Oy[t]}${Fy[e]}${By[i]}えん}`}const La=[{id:"shinjuku",jp:"新宿{しんじゅく}",yue:"新宿",fare:210,platform:3},{id:"shibuya",jp:"渋谷{しぶや}",yue:"澀谷",fare:170,platform:1},{id:"tokyo",jp:"東京{とうきょう}",yue:"東京",fare:200,platform:2},{id:"ueno",jp:"上野{うえの}",yue:"上野",fare:180,platform:4},{id:"ikebukuro",jp:"池袋{いけぶくろ}",yue:"池袋",fare:220,platform:3},{id:"shinagawa",jp:"品川{しながわ}",yue:"品川",fare:190,platform:1}],zy=["","一枚{いちまい}","二枚{にまい}","三枚{さんまい}"],qs=["","一番線{いちばんせん}","二番線{にばんせん}","三番線{さんばんせん}","四番線{よんばんせん}"],Os=[{id:"kaku",jp:"各駅停車{かくえきていしゃ}",yue:"每站停",short:"各停",color:"#2f9e44",ok:!0},{id:"kaisoku",jp:"快速{かいそく}",yue:"快速",short:"快速",color:"#e0763a",ok:!0},{id:"tokkyu",jp:"特急{とっきゅう}",yue:"特急",short:"特急",color:"#c0392b",ok:!1}],jy={jp:"行{い}き先{さき}を えらんで ください。",yue:"請揀目的地。"},Hy={jp:"大人{おとな}は 何枚{なんまい}ですか？",yue:"成人買幾張？"},Vy=n=>({jp:`合計{ごうけい}は ${Pa(n)}です。 お金{かね}を 入{い}れて ください。`,yue:`總共 ${n} 円。請投錢。`}),Sh=500,Gy={jp:"特急券{とっきゅうけん}は 必要{ひつよう}ですか？",yue:"要唔要特急券？"},To={plain:{jp:"乗車券{じょうしゃけん}だけ",yue:"淨係普通車票"},ltd:{jp:"特急券{とっきゅうけん}も お願{ねが}いします",yue:"連特急券，唔該"}},bh={jp:"きっぷを お取{と}りください。",yue:"請取車票。"},Zo=[{lv:0,ok:{jp:"{d}は 何番線{なんばんせん}ですか？",yue:"{dy}係幾號月台？"},bad:[{jp:"いただきます。",yue:"開動喇。",why:"場合錯：呢句係食飯先講"},{jp:"二人{ふたり}です。",yue:"兩位。",why:"同問月台無關"}]},{lv:1,ok:{jp:"{d}行{ゆ}きは 何番線{なんばんせん}ですか？",yue:"去{dy}係幾號月台？"},bad:[{jp:"{d}行{ゆ}きの 切符{きっぷ}を ください。",yue:"請畀我去{dy}嘅車票。",why:"你已經買咗票，而家問月台"},{jp:"トイレは どこですか？",yue:"廁所喺邊？",why:"同問月台無關"}]},{lv:2,ok:{jp:"{d}まで 行{い}きたいんですが、 どの 電車{でんしゃ}に 乗{の}れば いいですか？",yue:"我想去{dy}，應該搭邊班車？"},bad:[{jp:"{d}、 どこ？ 早{はや}く 教{おし}えて。",yue:"{dy}喺邊？快啲講。",why:"語感錯：對駅員太粗魯"},{jp:"乗{の}り越{こ}し 精算{せいさん}は どこで できますか？",yue:"邊度補票？",why:"你未坐過站"}]},{lv:3,ok:{jp:"{d}方面{ほうめん}へ 行{い}きたいのですが、 どちらの ホームから 乗{の}れば よろしいでしょうか。",yue:"我想去{dy}方向，應該喺邊個月台上車？"},bad:[{jp:"{d}方面{ほうめん}の ホーム、 教{おし}えて ください。",yue:"請話我知{dy}方向月台。",why:"語感錯：太直接，欠敬語"},{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}していただけますか。",yue:"可唔可以發延誤證明？",why:"情境錯：車冇延誤"}]}],sl=[{lv:0,jp:"{n}です。",yue:"{p}月台。"},{lv:1,jp:"{n}です。 あちらの 階段{かいだん}を どうぞ。",yue:"{p}月台。請行嗰邊樓梯。"},{lv:2,jp:"{n}の 電車{でんしゃ}に お乗{の}りください。",yue:"請搭{p}月台嘅車。"},{lv:3,jp:"{d}方面{ほうめん}でしたら、 {n}から ご乗車{じょうしゃ}いただけます。",yue:"去{dy}方向嘅話，可以喺{p}月台上車。"}],Wy={yue:"駅員講咗邊個月台？"},$y=(n,t,e,i)=>{const s=qs[t];return n<=1?{jp:`まもなく ${s}に ${i.jp}行{ゆ}きが 参{まい}ります。`,yue:`${i.yue}方向列車即將到達 ${t} 號月台。`}:n===2?{jp:`まもなく ${s}に ${e.jp} ${i.jp}行{ゆ}きが 参{まい}ります。`,yue:`${e.yue}（${i.yue}方向）即將到達 ${t} 號月台。`}:{jp:`まもなく ${s}に ${e.jp} ${i.jp}行{ゆ}きが 参{まい}ります。 危険{きけん}ですので、 黄色{きいろ}い 線{せん}の 内側{うちがわ}まで お下{さ}がりください。`,yue:`${e.yue}（${i.yue}方向）即將到達 ${t} 號月台。請退到黃線後面。`}},Ao={ride:{jp:"乗{の}る",yue:"上車"},wait:{jp:"待{ま}つ",yue:"等下一班"}},Xy={jp:"人身事故{じんしんじこ}の 影響{えいきょう}で、 ただいま 運転{うんてん}を 見合{みあ}わせております。 ご迷惑{めいわく}を おかけいたします。",yue:"因人身事故，暫停行駛。造成不便，敬請原諒。"},qy=[{id:"refund",task:"你決定唔搭喇，想退款",ok:{jp:"払{はら}い戻{もど}しは 可能{かのう}でしょうか。 手数料{てすうりょう}は かかりますか。",yue:"請問可否退款？有冇手續費？"},bad:[{jp:"払{はら}い戻{もど}して ください。",yue:"退錢畀我。",why:"語感錯：太直接"},{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}していただけますか。",yue:"可唔可以發延誤證明？",why:"你想退款，唔係要證明"}],reply:{jp:"払{はら}い戻{もど}しは 可能{かのう}でございます。 手数料{てすうりょう}が かかりますが、 よろしいでしょうか。",yue:"可以退款，不過要手續費，可以嗎？"}},{id:"proof",task:"你上班會遲到，想要延誤證明",ok:{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}していただけますか。",yue:"可唔可以發延誤證明？"},bad:[{jp:"遅延証明書{ちえんしょうめいしょ}、 くれ。",yue:"延誤證明，畀我。",why:"語感錯：太粗魯"},{jp:"落{お}とし物{もの}を 探{さが}しているのですが。",yue:"我想搵遺失物。",why:"同延誤證明無關"}],reply:{jp:"かしこまりました。 少々{しょうしょう} お待{ま}ちください。",yue:"明白，請稍等。"}},{id:"furikae",task:"你想轉搭其他路線去目的地",ok:{jp:"振替輸送{ふりかえゆそう}を 利用{りよう}したいのですが、 乗{の}り場{ば}を 教{おし}えていただけますか。",yue:"我想用轉乘輸送，請問邊度上車？"},bad:[{jp:"振替{ふりかえ}、 どこ？ 早{はや}く 教{おし}えて。",yue:"轉乘喺邊？快啲講。",why:"語感錯：太粗魯"},{jp:"特急券{とっきゅうけん}の 払{はら}い戻{もど}しは できますか。",yue:"特急券可唔可以退？",why:"同轉乘無關"}],reply:{jp:"振替輸送{ふりかえゆそう}は 改札{かいさつ}の 外{そと}で ご案内{あんない}しております。",yue:"轉乘輸送喺閘口外面指引。"}}],ec=[null,{tourist:{jp:"乗{の}り過{す}ごしました。 どうしたら いいですか？",yue:"搭過站喇，點算好？"},ok:{jp:"精算機{せいさんき}で 精算{せいさん}して ください。",yue:"請去精算機補差價。"},bad:[{jp:"きっぷを もう一枚{いちまい} 買{か}って ください。",yue:"請再買多一張票。",why:"唔使重買，補差價就得"},{jp:"あちらの 階段{かいだん}を どうぞ。",yue:"請行嗰邊樓梯。",why:"同補票無關"}]},{tourist:{jp:"乗{の}り過{す}ごして しまったんですが、 どうすれば いいですか。",yue:"我搭過咗站，應該點做？"},ok:{jp:"乗{の}り越{こ}し 精算{せいさん}を していただければ 大丈夫{だいじょうぶ}です。 精算機{せいさんき}は あちらです。",yue:"補票就得。精算機喺嗰邊。"},bad:[{jp:"もう 一度{いちど} 切符{きっぷ}を 買{か}い直{なお}して ください。",yue:"請重新買票。",why:"唔使重買，補差價就得"},{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}します。",yue:"我發延誤證明畀你。",why:"佢係自己搭過站，唔係列車延誤"}]},{tourist:{jp:"うっかり 乗{の}り過{す}ごして しまいまして、 引{ひ}き返{かえ}したいのですが。",yue:"不小心搭過站，想折返。"},ok:{jp:"差額{さがく}を 精算{せいさん}して いただければ、 折{お}り返{かえ}しで ご乗車{じょうしゃ}いただけます。",yue:"補咗差額，就可以折返搭車。"},bad:[{jp:"払{はら}い戻{もど}しは いたしかねます。",yue:"恕不能退款。",why:"佢想折返，唔係要退款"},{jp:"それは お客様{きゃくさま}の ご自由{じゆう}です。",yue:"隨你喜歡。",why:"語感錯：對客人太冷淡，欠禮貌"}]}],Yy=[{jp:"わかりません。",yue:"我唔知。",why:"駅員要幫到手，唔可以咁答"},{jp:"わかりません。",yue:"我唔知。",why:"駅員要幫到手，唔可以咁答"},{jp:"あっち。 自分{じぶん}で 探{さが}して。",yue:"嗰邊，自己搵。",why:"語感錯：對客人太失禮"},{jp:"ホームの 案内{あんない}は 掲示板{けいじばん}を ご覧{らん}。",yue:"睇告示板。",why:"語感錯：太冷淡，欠敬語"}],wh={jp:"ありがとうございます。",yue:"多謝。"},Eh={jp:"ありがとうございます。",yue:"多謝。"},Bd=[...La.map(n=>[`eki_d_${n.id}`,n.jp,n.yue,"travel"]),["eki_kippu","切符{きっぷ}","車票","travel"],["eki_ikisaki","行{い}き先{さき}","目的地","travel"],["eki_otona","大人{おとな}","成人","travel"],["eki_mai","〜枚{まい}","張（票嘅量詞）","travel"],["eki_bansen","〜番線{ばんせん}","幾號月台","travel"],["eki_noru","乗{の}る","搭、上車","travel"],["eki_matsu","待{ま}つ","等","travel"],["eki_kaku","各駅停車{かくえきていしゃ}","每站停嘅列車","travel"],["eki_kaisoku","快速{かいそく}","快速列車","travel"],["eki_tokkyu","特急{とっきゅう}","特急列車（要另買特急券）","travel"],["eki_harai","払{はら}い戻{もど}し","退款","travel"],["eki_chien","遅延証明書{ちえんしょうめいしょ}","延誤證明","travel"],["eki_furikae","振替輸送{ふりかえゆそう}","轉乘其他路線嘅補救安排","travel"],["eki_norisugoshi","乗{の}り過{す}ごす","搭過站","travel"],["eki_seisan","精算{せいさん}","補差價／結算","travel"],["eki_jinshin","人身事故{じんしんじこ}","人身事故","travel"]],Ky=Bd.map(n=>n[0]),Jy=["","","二階{にかい}","三階{さんがい}","四階{よんかい}","五階{ごかい}","六階{ろっかい}","七階{ななかい}","八階{はっかい}","九階{きゅうかい}"],Zy=["","","二百{にひゃく}","三百{さんびゃく}","四百{よんひゃく}","五百{ごひゃく}","六百{ろっぴゃく}","七百{ななひゃく}","八百{はっぴゃく}","九百{きゅうひゃく}"],Qy=["","一{いち}","二{に}","三{さん}","四{よん}","五{ご}","六{ろく}","七{なな}","八{はち}","九{きゅう}"],zd=n=>Jy[n],al=n=>`${Zy[Math.floor(n/100)]}${Qy[n%100]}号室{ごうしつ}`,jd=["","一泊{いっぱく}","二泊{にはく}","三泊{さんぱく}"],Hd={jp:"いらっしゃいませ。",yue:"歡迎光臨。"},Vd=[{task:"你想入住（check-in）",ok:{jp:"チェックイン お願{ねが}いします。",yue:"我要 check-in。"},bad:[{jp:"おやすみなさい。",yue:"晚安。",why:"場合錯：check-in 唔係講晚安"},{jp:"チェックアウト お願{ねが}いします。",yue:"我要退房。",why:"你係嚟入住，唔係退房"}]},{task:"你已經訂咗房，{py}入住",ok:{jp:"予約{よやく}している チャンです。 {p}です。",yue:"我有訂房，我係陳，{py}。"},bad:[{jp:"予約{よやく}している チャンです。 {q}です。",yue:"我有訂房，我係陳，人數講錯。",why:"細節錯：任務係{py}",swap:!0},{jp:"トイレは どこですか？",yue:"廁所喺邊？",why:"同入住無關"}]},{task:"你訂咗房，但會好夜先到，想先確認",ok:{jp:"予約{よやく}の 確認{かくにん}を お願{ねが}いしたいんですが。 到着{とうちゃく}が 夜遅{よるおそ}くなりそうなんですが、 大丈夫{だいじょうぶ}ですか？",yue:"想確認預約。我好似會好夜先到，得唔得？"},bad:[{jp:"夜{よる}、 遅{おそ}いけど、 入{い}れて ください。",yue:"我好夜先到，你要放我入。",why:"語感錯：太直接，欠禮貌"},{jp:"領収書{りょうしゅうしょ}を お願{ねが}いします。",yue:"請俾收據。",why:"情境錯：未入住，未要收據"}]},{task:"房型同你訂房時講嘅唔同，要求核實",ok:{jp:"予約時{よやくじ}に お伝{つた}えした 条件{じょうけん}と 異{こと}なっておりますので、 ご確認{かくにん}いただけませんでしょうか。",yue:"同訂房時講嘅條件唔同，可否核實？"},bad:[{jp:"部屋{へや}が 違{ちが}う！ ちゃんと 調{しら}べて。",yue:"房間錯咗！認真查！",why:"語感錯：對前台太粗魯"},{jp:"もう 一泊{いっぱく} 延長{えんちょう}することは 可能{かのう}でしょうか。",yue:"可唔可以加住一晚？",why:"情境錯：你而家係投訴房型，唔係加住"}]}],ol=[{jp:"パスポートを お願{ねが}いします。 {r}です。",yue:"請俾護照。房號 {rn}。"},{jp:"{n}ですね。 お部屋{へや}は {f}の {r}です。",yue:"住幾晚（{nn}）啱唔啱？房間喺 {fn}樓 {rn}。"},{jp:"お待{ま}たせいたしました。 お部屋{へや}の ご用意{ようい}が できております。 {f}の {r}です。",yue:"唔好意思，房間已準備好。{fn}樓 {rn}。"},{jp:"手違{てちが}いがございまして、 誠{まこと}に 申{もう}し訳{わけ}ございません。 お部屋{へや}を ご用意{ようい}いたしました。 {f}の {r}でございます。",yue:"弄錯咗，非常抱歉。已重新安排，{fn}樓 {rn}。"}],tx={yue:"前台講咗邊個房號？"},rl=[[{task:"你想要毛巾",ok:{jp:"タオル ください。",yue:"請俾毛巾。"},bad:[{jp:"いただきます。",yue:"開動喇。",why:"場合錯：食飯先講"},{jp:"おやすみなさい。",yue:"晚安。",why:"你想要毛巾，唔係瞓覺"}],reply:{jp:"はい、 どうぞ。",yue:"好，請。"}},{task:"你想寄存行李",ok:{jp:"荷物{にもつ} お願{ねが}いします。",yue:"行李拜託。"},bad:[{jp:"お風呂{ふろ} ください。",yue:"請俾浴室。",why:"詞語錯：你要寄行李，唔係浴室"},{jp:"いただきます。",yue:"開動喇。",why:"場合錯"}],reply:{jp:"はい、 お預{あず}かりします。",yue:"好，幫你寄存。"}}],[{task:"你想知道早餐幾點到幾點",ok:{jp:"朝食{ちょうしょく}は 何時{なんじ}から 何時{なんじ}までですか？",yue:"早餐幾點到幾點？"},bad:[{jp:"チェックアウトは 何時{なんじ}ですか？",yue:"幾點退房？",why:"你問嘅係早餐，唔係退房"},{jp:"トイレは どこですか？",yue:"廁所喺邊？",why:"同早餐無關"}],reply:{jp:"七時{しちじ}から 十時{じゅうじ}までです。",yue:"七點到十點。"}},{task:"你想知道 Wi-Fi 密碼",ok:{jp:"Wi-Fiの パスワードを 教{おし}えて ください。",yue:"請話我知 Wi-Fi 密碼。"},bad:[{jp:"Wi-Fiの パスワードを 食{た}べて ください。",yue:"請食 Wi-Fi 密碼。",why:"動詞錯：要用「教える」"},{jp:"部屋{へや}に ドライヤーは ありますか？",yue:"房入面有冇風筒？",why:"你問嘅係 Wi-Fi"}],reply:{jp:"こちらの カードに 書{か}いて あります。",yue:"寫喺呢張卡上面。"}}],[{task:"房間冷氣唔凍，想請人睇",ok:{jp:"部屋{へや}の エアコンが 効{き}かないんですが、 見{み}て もらえますか？",yue:"房間冷氣唔凍，可唔可以睇睇？"},bad:[{jp:"エアコン 壊{こわ}れてる！ すぐ 直{なお}して！",yue:"冷氣壞咗，即刻整！",why:"語感錯：意思啱但太粗魯"},{jp:"もう 一枚{いちまい} タオルを ください。",yue:"再要多一條毛巾。",why:"你要處理冷氣，唔係毛巾"}],reply:{jp:"申{もう}し訳{わけ}ございません。 すぐに 伺{うかが}います。",yue:"唔好意思，我即刻過嚟。"}},{task:"隔籬好嘈，想換房",ok:{jp:"隣{となり}の 部屋{へや}が うるさいので、 部屋{へや}を 変{か}えて もらえますか？",yue:"隔籬好嘈，可唔可以換房？"},bad:[{jp:"うるさい！ 部屋{へや}、 変{か}えろ！",yue:"好嘈！換房！",why:"語感錯：太粗魯"},{jp:"タクシーを 呼{よ}んで いただけますか？",yue:"可唔可以幫我叫的士？",why:"你想換房，唔係叫的士"}],reply:{jp:"申{もう}し訳{わけ}ございません。 すぐに 別{べつ}の お部屋{へや}を ご用意{ようい}します。",yue:"唔好意思，即刻安排另一間。"}}],[{task:"帳單有一項你冇印象嘅收費",ok:{jp:"ご請求書{せいきゅうしょ}に 身{み}に覚{おぼ}えのない 項目{こうもく}が 含{ふく}まれているようですが。",yue:"帳單似乎有一項我冇印象嘅收費。"},bad:[{jp:"この 金額{きんがく}、 おかしい。 返{かえ}して。",yue:"呢個金額奇怪，還返我。",why:"語感錯：太直接，欠敬語"},{jp:"もう 一泊{いっぱく} 延長{えんちょう}することは 可能{かのう}でしょうか。",yue:"可唔可以加住一晚？",why:"情境錯：你而家係問帳單"}],reply:{jp:"手違{てちが}いがございまして、 誠{まこと}に 申{もう}し訳{わけ}ございません。 すぐに 訂正{ていせい}いたします。",yue:"弄錯咗，非常抱歉，即刻更正。"}},{task:"你想加住一晚",ok:{jp:"もう 一泊{いっぱく} 延長{えんちょう}することは 可能{かのう}でしょうか。",yue:"可唔可以加住一晚？"},bad:[{jp:"もう 一泊{いっぱく}、 泊{と}まる。",yue:"再住多一晚。",why:"語感錯：用咗命令口吻，欠詢問"},{jp:"ご請求書{せいきゅうしょ}に 身{み}に覚{おぼ}えのない 項目{こうもく}が 含{ふく}まれているようですが。",yue:"帳單有項冇印象。",why:"情境錯：你想加住，唔係問帳單"}],reply:{jp:"生憎{あいにく}、 本日{ほんじつ}は 満室{まんしつ}でございまして、 ご希望{きぼう}に 添{そ}いかねます。",yue:"不巧今日滿房，未能滿足。"}}]],ex=[null,null,{jp:"ちょっと 待{ま}って。 忙{いそが}しいから。",yue:"等等，我好忙。",why:"語感錯：對客人太失禮"},{jp:"それは お客様{きゃくさま}の 問題{もんだい}じゃ ないですか。",yue:"呢個係你自己問題啦。",why:"語感錯：前台唔可以咁答"}],Th={jp:"ありがとうございます。",yue:"多謝。"},Gd=[{ok:{jp:"チェックアウト お願{ねが}いします。",yue:"我要退房。"},bad:[{jp:"チェックイン お願{ねが}いします。",yue:"我要 check-in。",why:"你係退房，唔係入住"},{jp:"おやすみなさい。",yue:"晚安。",why:"場合錯"}],reply:{jp:"ありがとうございました。",yue:"多謝。"}},{ok:{jp:"チェックアウト お願{ねが}いします。 領収書{りょうしゅうしょ}を ください。",yue:"我要退房，請俾收據。"},bad:[{jp:"チェックアウトは 何時{なんじ}ですか？",yue:"幾點退房？",why:"你已經要退房，唔使再問時間"},{jp:"もう 一枚{いちまい} タオルを ください。",yue:"再要多一條毛巾。",why:"場合錯：而家係退房"}],reply:{jp:"はい、 こちらが 領収書{りょうしゅうしょ}です。 ありがとうございました。",yue:"好，呢張係收據。多謝。"}},{ok:{jp:"チェックアウトを お願{ねが}いします。 領収書{りょうしゅうしょ}も いただけますか？",yue:"我要退房，可唔可以同時俾收據？"},bad:[{jp:"チェックアウト、 領収書{りょうしゅうしょ}、 早{はや}く。",yue:"退房，收據，快啲。",why:"語感錯：太直接"},{jp:"荷物{にもつ}を 預{あず}かって いただけますか？",yue:"可唔可以幫我寄住行李？",why:"你係退房結帳，未問行李"}],reply:{jp:"かしこまりました。 領収書{りょうしゅうしょ}を お渡{わた}しします。 ご利用{りよう}、 ありがとうございました。",yue:"明白，收據畀你。多謝惠顧。"}},{ok:{jp:"チェックアウトを お願{ねが}いします。 精算{せいさん}は クレジットカードで お願{ねが}いできますか。",yue:"我要退房，可唔可以用信用卡結帳？"},bad:[{jp:"クレジットカードで 払{はら}う。 早{はや}く して。",yue:"用信用卡畀，快啲。",why:"語感錯：太直接"},{jp:"入湯税{にゅうとうぜい}は 別途{べっと} 頂戴{ちょうだい}しております。",yue:"入湯稅另外收。",why:"角色錯：呢句係職員講嘅"}],reply:{jp:"かしこまりました。 クレジットカードで 承{うけたまわ}ります。 ご利用{りよう}いただき、 誠{まこと}に ありがとうございました。",yue:"明白，可以用信用卡。多謝惠顧。"}}],Wd=[["hotel_heya","部屋{へや}","房","travel"],["hotel_kagi","鍵{かぎ}","鎖匙／房卡","travel"],["hotel_nimotsu","荷物{にもつ}","行李","travel"],["hotel_chosyoku","朝食{ちょうしょく}","早餐","travel"],["hotel_taoru","タオル","毛巾","travel"],["hotel_passport","パスポート","護照","travel"],["hotel_checkin","チェックイン","入住","travel"],["hotel_checkout","チェックアウト","退房","travel"],["hotel_yoyaku","予約{よやく}","預約","travel"],["hotel_haku","〜泊{はく}","住幾晚","travel"],["hotel_goshitsu","〜号室{ごうしつ}","房號","travel"],["hotel_kai","〜階{かい}","樓層","travel"],["hotel_azukeru","預{あず}ける","寄存","travel"],["hotel_ryoshu","領収書{りょうしゅうしょ}","收據","travel"],["hotel_kikanai","効{き}かない","冇作用（冷氣唔凍）","travel"],["hotel_urusai","うるさい","嘈","travel"],["hotel_enpaku","延泊{えんぱく}","加住","travel"],["hotel_seikyu","請求書{せいきゅうしょ}","帳單","travel"],["hotel_techigai","手違{てちが}い","弄錯／出錯","travel"],["hotel_aniku","生憎{あいにく}","不巧","travel"]],nx=Wd.map(n=>n[0]),ix=[["meal_patty","調理済{ちょうりず}みハンバーグ","預製熟肉餅","🥩","box",8868663],["mash_potato","マッシュポテト","即食薯蓉","🥔","sphere",15588263],["frozen_veg","冷凍野菜{れいとうやさい}","冷凍蔬菜","🥦","sphere",7972940],["beef_pouch","レトルトビーフシチュー","預製燉牛肉包","🥘","box",10113846],["herb","ハーブ","裝飾香草","🌿","sphere",6068286],["bottled_tea","ペットボトルの緑茶{りょくちゃ}","樽裝綠茶","🍵","cyl",9743971],["ice","氷{こおり}","冰塊","🧊","box",12576499],["caramel_syrup","キャラメルシロップ","焦糖糖漿","🍯","cyl",12286268],["fruit_syrup","フルーツシロップ","果味糖漿","🍓","cyl",14904167],["soda_water","炭酸水{たんさんすい}","梳打水","🫧","cyl",12970223],["fruit_slice","果物{くだもの}のスライス","裝飾水果片","🍋","sphere",15979606],["stock_powder","鶏{とり}ガラスープの素{もと}","雞湯粉","🥣","cyl",14334835],["stock_concentrate","濃縮{のうしゅく}スープ","濃縮高湯","🫙","cyl",10779196],["msg","うま味調味料{みちょうみりょう}","味精 MSG","🧂","cyl",16183009],["oyster_sauce","オイスターソース","蠔油","🫗","cyl",5451809]],sx=[["atatameru","温{あたた}める","翻熱","verb"],["moritsukeru","盛{も}り付{つ}ける","擺盤","verb"],["nakami","中身{なかみ}","真正內容","phrase"]],Yi={ding:{jp:"冷凍{れいとう}を 三{みっ}つ チンして",yue:"冷凍食品叮三份"},beef:{jp:"レトルトを 温{あたた}めて",yue:"翻熱料理包"},tea:{jp:"お茶{ちゃ}に 牛乳{ぎゅうにゅう}を 入{い}れて",yue:"茶加奶"},coffee:{jp:"インスタントに シロップを 入{い}れて",yue:"即溶咖啡加糖漿"},soda:{jp:"シロップを 炭酸{たんさん}で 割{わ}って",yue:"糖漿兌梳打"},soup:{jp:"スープの素{もと}を お湯{ゆ}で 溶{と}いて",yue:"湯粉用熱水沖"},rice:{jp:"うま味{み}調味料{ちょうみりょう}を 少{すこ}しだけ",yue:"只落少少味精"}},ax={cough:{jp:"チンの 音{おと}を ごまかして！",yue:"點一下開始叮；客人轉頭前再點一下停。最後「叮」一聲唔好俾佢聽到！",btn:"🔊 點一下：叮緊",hide:"🤧 扮咳，企喺微波爐前",ding:!0,caught:"客人望到你守住微波爐：「…チン？」",verb:"atatameru",station:"microwave"},bottle:{jp:"ペットボトルを 隠{かく}して！",yue:"點一下開始倒樽裝茶；客人轉頭前收埋膠樽",btn:"🫙 點一下：倒樽裝茶",hide:"🫖 扮緊沖茶",caught:"客人：「…ペットボトル？」"},grinder:{jp:"ミルの 音{おと}で ごまかして！",yue:"點一下開始撕即溶包；客人轉頭前扮磨豆",btn:"📦 點一下：撕即溶包",hide:"⚙️ 扮緊磨豆",caught:"客人聽到撕即溶包嘅「嘶」一聲"},glass:{jp:"果物{くだもの}の 側{がわ}を 向{む}けて！",yue:"點一下開始倒糖漿；客人轉頭前轉返生果嗰面",btn:"🍯 點一下：倒糖漿",hide:"🍋 生果片對住客人",caught:"客人見到你狂倒糖漿"},steam:{jp:"湯気{ゆげ}を 出{だ}して！",yue:"點一下開始沖湯粉；客人轉頭前扮熬湯",btn:"🥣 點一下：沖湯粉",hide:"♨️ 扮緊睇火",caught:"客人見到你撕湯粉包"},hand:{jp:"調味料{ちょうみりょう}は 控{ひか}えめに！",yue:"點一下開始落雞粉；客人轉頭前縮手",btn:"🧂 點一下：落雞粉",hide:"🍳 扮緊兜炒",caught:"客人望見小黑隻手撈緊雞粉"}},Ln=(n,t,e)=>({lv:n,hi:!0,jp:t,yue:e}),ox={safe:[Ln(0,"でね、 でね…","跟住呢、跟住呢…"),Ln(0,"うん、 うん","係呀，係呀"),Ln(0,"へえ、 そうなんだ","哦，原來係咁"),Ln(1,"昨日{きのう}の ドラマ、 見{み}た？","琴日套劇睇咗未？"),Ln(1,"それで、 どう なったの？","跟住點呀？"),Ln(2,"最近{さいきん}、 仕事{しごと}が 忙{いそが}しくて…","最近返工好忙…"),Ln(2,"週末{しゅうまつ}、 どこか 行{い}かない？","週末去唔去邊度玩？")],turn:[Ln(0,"あれ？","咦？"),Ln(0,"ん？ 何{なん}の 音{おと}？","嗯？咩聲？"),Ln(1,"すみません、 ちょっと…","唔好意思，想問…"),Ln(1,"なんか、 いい におい！","好似好香喎！"),Ln(2,"あの、 厨房{ちゅうぼう}、 見{み}ても いいですか？","請問可唔可以睇吓廚房？"),Ln(2,"さっき、 チンって 音{おと}、 しなかった？","頭先係咪有「叮」一聲？")]},$d={tourist:{icon:"🧳",name:"遊客",like:"gouka",hint:"好易信人",ask:-.25,tell:1.3,look:1,gap:1.2,turn:.35,pay:1,weight:3},granny:{icon:"👵",name:"街坊婆婆",like:"simple",hint:"浮誇菜名佢最起疑",ask:.3,tell:1.2,look:1.4,gap:1.1,turn:.4,pay:.9,weight:3},influencer:{icon:"📸",name:"網紅",like:"oshare",hint:"成日舉機望過嚟",ask:0,tell:1,look:.8,gap:.7,turn:.55,pay:1.2,weight:3},critic:{icon:"🧐",name:"食評家",like:"simple",hint:"轉頭快、追問多，但畀錢最多",ask:.2,tell:.8,look:1.2,gap:.9,turn:.5,pay:1.5,weight:2,minShift:1}},Nn=(n,t,e,i,s)=>({key:n,lv:t,kind:e,hi:!0,jp:i,yue:s}),rx=[Nn("st_nani",0,"what","これ、 なに？","呢個係咩嚟？"),Nn("st_tezukuri",0,"made","手作{てづく}り？","自家製？"),Nn("pr_nanjikan",0,"time","何時間{なんじかん}？","整咗幾多個鐘？"),Nn("pr_zairyo",0,"origin","材料{ざいりょう}は どこの？","材料係邊度嘅？"),Nn("pr_nanno",1,"what","これは 何{なん}の 料理{りょうり}ですか？","呢個係咩料理？"),Nn("st_tsukuru",1,"made","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),Nn("pr_jikan",1,"time","どのくらい 時間{じかん}が かかりましたか？","用咗幾耐時間整？"),Nn("pr_doko",1,"origin","材料{ざいりょう}は どこから 来{き}ましたか？","材料由邊度嚟？"),Nn("pr_himitsu",2,"what","この 味{あじ}の 秘密{ひみつ}は 何{なん}ですか？","呢個味道有咩秘訣？"),Nn("pr_shihan",2,"made","まさか、 市販{しはん}の ものじゃ ないですよね？","唔會係街外買嘅現成貨啩？"),Nn("pr_kaketa",2,"time","本当{ほんとう}に 時間{じかん}を かけて 作{つく}ったんですか？","真係花咗好多時間整？"),Nn("st_genzairyo",2,"origin","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],ka={what:{jp:"シェフの 秘伝{ひでん}の レシピです！",yue:"主廚秘傳食譜！"},made:{jp:"はい、 全部{ぜんぶ} 手作{てづく}りです！",yue:"係，全部自己整！"},time:{jp:"朝{あさ}から じっくり 準備{じゅんび}しました！",yue:"由朝早慢慢準備到而家！"},origin:{jp:"産地{さんち}直送{ちょくそう}の 素材{そざい}です！",yue:"產地直送嘅材料！"}},Vs={believe:["★★★★★「職人の技！」 師傅手藝一流","★★★★★「また来ます！」 一定再嚟","★★★★☆「本格的！」 好正宗"],quiet:["★★★★☆「雰囲気がいい」 好有氣氛","★★★★☆「盛り付けがきれい」 擺盤好靚"],honest:["★★★☆☆「正直なお店」 老實舖頭","★★★★☆「店長が正直で好感」 店長好老實"],expose:["★☆☆☆☆「レトルトでした」 原來係料理包","★☆☆☆☆「だまされた！」 呃人㗎"],raidWin:["★★★★★ 食評家：「本物の味」 真材實料（？）"],raidLose:["★☆☆☆☆ 食評家爆料：「全部チンでした」 全部係叮"]},Ki=(n,t,e)=>({type:"pick",need:n,decoys:t,jp:e.jp,yue:e.yue,tip:"聽清楚真正用咩材料。"}),Ji=n=>({type:"sneak",kind:n,weight:1,tip:"遊戲時間係縮時演出；現實請跟包裝指示。",...ax[n]}),Ro={type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"よく 混{ま}ぜて",yue:"攪勻就出得",tip:"轉圈攪勻。"},Ah={dark_beef:1,dark_coffee:2,dark_soup:3,dark_rice:4},Gs=[{id:"dark_ding",number:"01",jp:"シェフおまかせ 三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"主廚精選三拼大餐",emoji:"🍽️",price:480,station:"board",time:"縮時翻熱",ingredients:[["meal_patty","預製熟肉餅 1 份"],["mash_potato","即食薯蓉 1 份"],["frozen_veg","冷凍蔬菜 1 份"]],howto:["按各款包裝指示，用適合微波爐嘅容器分別翻熱至熱透。","肉餅、薯蓉、蔬菜分區擺好，加幾點醬汁。"],steps:[Ki(["meal_patty","mash_potato","frozen_veg"],["stock_powder","herb"],Yi.ding),Ji("cough")],names:{honest:{jp:"冷凍{れいとう}・レトルトの 盛{も}り合{あ}わせ",yue:"冷凍同預製拼盤"},mild:{jp:"三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"三拼盤"}},truth:"肉餅、薯蓉、蔬菜預先煮好，出餐前翻熱。",gag:"客人：「層次好豐富！」後廚：「叮——！」",shortcut:"預製餐",lesson:"おまかせ = 交畀師傅決定；擺盤可以花心思，製作來源照樣講清楚。"},{id:"dark_beef",number:"02",jp:"八時間{はちじかん}煮込{にこ}んだ 特製{とくせい}ビーフシチュー",yue:"八小時慢燉特製牛肉",emoji:"🥘",price:520,station:"board",time:"縮時翻熱",ingredients:[["beef_pouch","預製燉牛肉包 1 包"],["herb","裝飾香草 1 條"]],howto:["按料理包指示翻熱；包裝未標明可微波，就先倒入適用容器。","倒入小砂鍋，放上香草。三分鐘係關卡名，實際時間跟包裝。"],steps:[Ki(["beef_pouch","herb"],["mash_potato","msg"],Yi.beef),Ji("cough")],names:{honest:{jp:"レトルトの ビーフシチュー",yue:"料理包燉牛肉"},mild:{jp:"特製{とくせい}ビーフシチュー",yue:"特製燉牛肉"}},truth:"牛肉已經喺料理包入面燉好，小黑只負責翻熱同換鍋。",gag:"「慢燉八小時」招牌跌低，後面係一疊料理包。",shortcut:"料理包",lesson:"煮込{にこ}む = 燉；レトルト = 預製料理包；換咗砂鍋，唔代表由零開始燉。"},{id:"dark_milk_tea",number:"07",jp:"職人{しょくにん}仕立{じた}ての 緑茶{りょくちゃ}ラテ",yue:"職人特調鮮奶綠",emoji:"🥛",price:300,station:"board",time:"1 分鐘",ingredients:[["bottled_tea","樽裝綠茶 1 份"],["milk","牛奶 適量"],["ice","冰塊 適量"]],howto:["透明杯加冰，倒入樽裝綠茶。","加牛奶攪勻，按口味調整比例。"],steps:[Ki(["bottled_tea","milk","ice"],["fruit_syrup","soda_water"],Yi.tea),Ji("bottle"),Ro],names:{honest:{jp:"ペットボトルの 緑茶{りょくちゃ}ラテ",yue:"樽裝綠茶加奶"},mild:{jp:"緑茶{りょくちゃ}ラテ",yue:"綠茶拿鐵"}},truth:"樽裝綠茶加牛奶同冰，冇煲茶，連茶隔都唔使洗。",gag:"客人問茶葉產地，小黑將膠樽慢慢推入櫃底。",shortcut:"瓶裝茶",lesson:"仕立{した}て = 度身製作嘅講法；緑茶 = 綠茶；特調可以係比例調配，未必係現泡茶。"},{id:"dark_coffee",number:"08",jp:"自家製{じかせい}キャラメルの 特製{とくせい}ラテ",yue:"自家製焦糖特製拿鐵",emoji:"☕",price:380,station:"board",time:"2 分鐘",ingredients:[["coffee_powder","即溶咖啡粉 1 份"],["mizu","熱水 少量"],["milk","牛奶 適量"],["ice","冰塊 適量"],["caramel_syrup","焦糖糖漿 少量"]],howto:["即溶咖啡粉用少量熱水溶開。","杯內加冰、牛奶同少量焦糖糖漿，再倒入咖啡。"],steps:[Ki(["coffee_powder","milk","caramel_syrup","ice"],["bottled_tea","fruit_syrup"],Yi.coffee),Ji("grinder"),Ro],names:{honest:{jp:"インスタントの キャラメルラテ",yue:"即溶焦糖拿鐵"},mild:{jp:"特製{とくせい}キャラメルラテ",yue:"特製焦糖拿鐵"}},truth:"即溶粉沖開，加奶、冰同焦糖，靚杯係最大排場。",gag:"製作三十秒，介紹風味講足三分鐘。",shortcut:"即溶粉",lesson:"自家製{じかせい} = 自己店內製作；呢個詞喺菜單好重要，講大話就係問題。"},{id:"dark_soda",number:"09",jp:"季節{きせつ}の フルーツソーダ",yue:"季節鮮果梳打",emoji:"🍹",price:320,station:"board",time:"1 分鐘",ingredients:[["fruit_syrup","果味糖漿 少量"],["soda_water","梳打水 1 份"],["ice","冰塊 適量"],["fruit_slice","水果片 1 片（裝飾）"]],howto:["杯中加冰、果味糖漿同梳打水，輕輕拌勻。","杯邊放一片水果；飲品主體嘅果味來自糖漿。"],steps:[Ki(["fruit_syrup","soda_water","ice","fruit_slice"],["bottled_tea","caramel_syrup"],Yi.soda),Ji("glass"),Ro],names:{honest:{jp:"シロップの ソーダ割{わ}り",yue:"糖漿梳打"},mild:{jp:"フルーツソーダ",yue:"果味梳打"}},truth:"果味主要來自糖漿；真正水果得杯邊裝飾嗰一片。",gag:"全杯唯一鮮果，今日負責企喺杯邊返工。",shortcut:"糖漿",lesson:"季節{きせつ}の = 時令；〜風 = 某種風味；フルーツソーダ唔等於鮮果汁。"},{id:"dark_soup",number:"26",jp:"じっくり 煮出{にだ}した 自家製{じかせい}スープ",yue:"慢火熬製自家湯",emoji:"🥣",price:280,station:"board",time:"1 分鐘",ingredients:[["stock_powder","雞湯粉 按包裝份量"],["stock_concentrate","濃縮高湯 少量，按鹹度調整"],["mizu","熱水 適量"]],howto:["按產品標示用熱水稀釋湯底，先試味。","兩款湯底唔好各落足一份，以免過鹹；唔夠味先逐少調整。"],steps:[Ki(["stock_powder","stock_concentrate","mizu"],["msg","oyster_sauce"],Yi.soup),Ji("steam"),Ro],names:{honest:{jp:"粉末{ふんまつ}スープ",yue:"粉末湯"},mild:{jp:"自家製{じかせい}スープ",yue:"自家湯"}},truth:"湯粉、濃縮高湯同熱水沖成，冇喺店內熬八小時。",gag:"客人問熬咗幾耐，小黑望住秒錶，扮睇唔到。",shortcut:"濃縮高湯",lesson:"じっくり = 慢慢、用心；濃縮 = concentrated；稀釋比例同鹹度比落得多更重要。"},{id:"dark_rice",number:"25",jp:"黄金{おうごん}の 特製{とくせい}チャーハン",yue:"黃金特製炒飯",emoji:"🍚",price:360,station:"pan",time:"5 分鐘",ingredients:[["gohan","熟飯 1 碗"],["tamago","雞蛋 1 隻"],["msg","味精 少量"],["stock_powder","雞粉 少量"],["oyster_sauce","蠔油 少量"],["abura","油 適量"]],howto:["鑊落油炒熟雞蛋，加熟飯炒散至熱透。","味精、雞粉、蠔油會疊加味道；先少量試味，再決定使唔使補。"],steps:[Ki(["gohan","tamago","msg","stock_powder","oyster_sauce"],["stock_concentrate","herb"],Yi.rice),Ji("hand"),{type:"season",weight:3,jp:"味{あじ}を 調{ととの}えて",yue:"主廚，仲差少少？試味先！",tip:"呢個係遊戲調味格數，唔係現實用量。"}],names:{honest:{jp:"うま味{み}調味料{ちょうみりょう}の チャーハン",yue:"味精炒飯"},mild:{jp:"特製{とくせい}チャーハン",yue:"特製炒飯"}},truth:"鮮味靠調味配搭；亂落大量調味，會蓋過蛋香同飯香。",gag:"「仲差少少！」大廚伸手再攞雞粉，客人即刻遞杯水。",shortcut:"増鮮調味",lesson:"うま味 = 鮮味。MSG 本身唔係笑柄；唔試味、亂落先係。"}].map(n=>({...n,chapter:"dark",dish:n.id,serves:"1 份",unlock:Ah[n.id]?{darkShift:Ah[n.id]}:{}})),Co=[{id:"simple",jp:"シンプル",yue:"簡單樸素",icon:"🍽️",plate:"plain",garnish:"none"},{id:"oshare",jp:"おしゃれ",yue:"精緻時尚",icon:"✨",plate:"bistro",garnish:"accent"},{id:"gouka",jp:"豪華{ごうか}",yue:"豪華誇張",icon:"👑",plate:"grand",garnish:"tower"}],On=(n,t,e)=>({lv:n,hi:!0,jp:t,yue:e}),cx={simple:[On(0,"シンプルが いいです","簡單就好"),On(1,"飾{かざ}りは いりません","唔使裝飾"),On(2,"素材{そざい}の 味{あじ}を 見{み}せてください","想睇到食材原味")],oshare:[On(0,"おしゃれに してください","整靚啲"),On(1,"写真{しゃしん}を 撮{と}りたいです","我想影相"),On(2,"映{ば}える 感{かん}じで お願{ねが}いします","要打卡感覺")],gouka:[On(0,"大{おお}きいのが いいです","大大份就好"),On(1,"たくさん 飾{かざ}ってください","多啲裝飾"),On(2,"豪華{ごうか}な 料理{りょうり}が 食{た}べたいです","想食豪華嘢")]},lx=[On(0,"えっ… イメージと 違{ちが}います","吓…同我諗嘅唔同"),On(0,"うーん、 まあまあです","嗯…麻麻地"),On(0,"わあ、 これです！","嘩，就係咁！")],Va={honest:{label:"如實介紹",hype:15,mult:1,ask:0},mild:{label:"小誇張",hype:55,mult:1.6,ask:.45},grand:{label:"極度浮誇",hype:100,mult:2.5,ask:.85}},Xd=(n,t)=>t==="grand"?{jp:n.jp,yue:n.yue}:n.names[t];function ux(n,t,e){return{taste:Math.round(n*100),look:[55,80,100][t],hype:Va[e].hype}}const hx=[{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,hi:!0,jp:"すみません、 {dish}を お願{ねが}いします",yue:"唔好意思，我要{dishYue}"},{lv:2,hi:!0,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],dx={honest:{jp:"すみません、 実{じつ}は 温{あたた}めただけです",yue:"唔好意思，其實只係翻熱"}},nc={forgive:[{lv:0,hi:!0,jp:"そうですか。 おいしいです",yue:"係咩。都好食"},{lv:1,hi:!0,jp:"正直{しょうじき}ですね。 でも おいしいから いいです",yue:"你好老實。不過好食就得喇"},{lv:2,hi:!0,jp:"冷凍{れいとう}だとしても、 おいしければ 気{き}にしません",yue:"就算係急凍，好食我都唔介意"}],believe:[{lv:0,hi:!0,jp:"へえ、 すごい！",yue:"嘩，好叻！"},{lv:1,hi:!0,jp:"さすが プロですね！",yue:"真係專業！"},{lv:2,hi:!0,jp:"やっぱり 職人{しょくにん}の 技{わざ}は 違{ちが}いますね",yue:"果然師傅手藝唔同"}],expose:[{lv:0,hi:!0,jp:"あれ？ これ、 レトルト？",yue:"咦？呢個係料理包？"},{lv:1,hi:!0,jp:"えっ、 これ、 レトルトじゃないですか！",yue:"咩話，呢個唔係料理包咩！"},{lv:2,hi:!0,jp:"…これ、 市販{しはん}の 商品{しょうひん}ですよね？",yue:"…呢個係街外賣嘅現成貨，啱唔啱？"}]},gn={gohan:{jp:"ご飯{はん}",yue:"白飯",emoji:"🍚",cat:"ing",m:{s:"sphere",c:16645621,sc:[.32,.2,.32]}},shio:{jp:"塩{しお}",yue:"鹽",emoji:"🧂",cat:"ing",m:{s:"cyl",c:15658734,sc:[.08,.2,.08]}},nori:{jp:"海苔{のり}",yue:"紫菜",emoji:"🟩",cat:"ing",m:{s:"box",c:2044706,sc:[.3,.01,.2]}},umeboshi:{jp:"梅干{うめぼ}し",yue:"酸梅",emoji:"🔴",cat:"ing",m:{s:"sphere",c:13117500,sc:[.07,.06,.07]}},sake_fish:{jp:"鮭{さけ}",yue:"三文魚",emoji:"🐟",cat:"ing",m:{s:"box",c:16747622,sc:[.2,.06,.12]}},mizu:{jp:"水{みず}",yue:"水",emoji:"💧",cat:"ing",m:{s:"cyl",c:9425919,sc:[.1,.22,.1]}},dashi:{jp:"だし",yue:"日式高湯",emoji:"🥣",cat:"ing",m:{s:"cyl",c:14263361,sc:[.12,.12,.12]}},tofu:{jp:"豆腐{とうふ}",yue:"豆腐",emoji:"⬜",cat:"ing",m:{s:"box",c:16776168,sc:[.24,.12,.16]}},wakame:{jp:"わかめ",yue:"海帶芽",emoji:"🌿",cat:"ing",m:{s:"sphere",c:3042106,sc:[.12,.04,.12]}},negi:{jp:"ねぎ",yue:"蔥",emoji:"🧅",cat:"ing",m:{s:"cyl",c:7127626,sc:[.03,.35,.03],rz:1.57}},miso:{jp:"味噌{みそ}",yue:"麵豉醬",emoji:"🟫",cat:"ing",m:{s:"cyl",c:11037490,sc:[.14,.1,.14]}},toriniku:{jp:"鶏肉{とりにく}",yue:"雞肉",emoji:"🍗",cat:"ing",m:{s:"box",c:15911328,sc:[.22,.08,.16]}},tamago:{jp:"卵{たまご}",yue:"雞蛋",emoji:"🥚",cat:"ing",m:{s:"sphere",c:16774108,sc:[.08,.1,.08]}},tamanegi:{jp:"玉{たま}ねぎ",yue:"洋蔥",emoji:"🧅",cat:"ing",m:{s:"sphere",c:15253626,sc:[.12,.11,.12]}},shoyu:{jp:"醤油{しょうゆ}",yue:"豉油",emoji:"🫗",cat:"ing",m:{s:"cyl",c:3807756,sc:[.06,.24,.06]}},mirin:{jp:"みりん",yue:"味醂（甜米酒）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:16115368,sc:[.06,.24,.06]}},satou:{jp:"砂糖{さとう}",yue:"砂糖",emoji:"🍬",cat:"ing",m:{s:"box",c:16777215,sc:[.1,.1,.1]}},men:{jp:"麺{めん}",yue:"麵",emoji:"🍜",cat:"ing",m:{s:"sphere",c:15980410,sc:[.22,.08,.22]}},chashu:{jp:"チャーシュー",yue:"叉燒（日式）",emoji:"🥩",cat:"ing",m:{s:"cyl",c:11887930,sc:[.14,.03,.14]}},moyashi:{jp:"もやし",yue:"芽菜",emoji:"🌱",cat:"ing",m:{s:"sphere",c:16249808,sc:[.12,.05,.12]}},ninniku:{jp:"にんにく",yue:"蒜頭",emoji:"🧄",cat:"ing",m:{s:"sphere",c:15986400,sc:[.07,.07,.07]}},sake_drink:{jp:"酒{さけ}",yue:"日本酒（煮食用）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:14741759,sc:[.06,.24,.06]}},kiru:{jp:"切{き}る",yue:"切",emoji:"🔪",cat:"verb"},mazeru:{jp:"混{ま}ぜる",yue:"攪拌、撈勻",emoji:"🥄",cat:"verb"},niru:{jp:"煮{に}る",yue:"煮、燜",emoji:"🍲",cat:"verb"},nigiru:{jp:"握{にぎ}る",yue:"揸實、搓（飯糰）",emoji:"✊",cat:"verb"},tokasu:{jp:"溶{と}かす",yue:"溶開",emoji:"🫧",cat:"verb"},yuderu:{jp:"ゆでる",yue:"烚（落水煮）",emoji:"♨️",cat:"verb"},noseru:{jp:"のせる",yue:"放上面",emoji:"⬆️",cat:"verb"},onigiri:{jp:"おにぎり",yue:"飯糰",emoji:"🍙",cat:"dish"},misoshiru:{jp:"味噌汁{みそしる}",yue:"麵豉湯",emoji:"🥣",cat:"dish"},oyakodon:{jp:"親子丼{おやこどん}",yue:"親子丼（雞肉滑蛋飯）",emoji:"🍛",cat:"dish"},ramen:{jp:"ラーメン",yue:"拉麵",emoji:"🍜",cat:"dish"},ocha:{jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",cat:"dish"},omizu:{jp:"お水{みず}",yue:"水（禮貌講法）",emoji:"🥛",cat:"dish"},biiru:{jp:"ビール",yue:"啤酒",emoji:"🍺",cat:"dish"},hitotsu:{jp:"一{ひと}つ",yue:"一個",emoji:"1️⃣",cat:"num"},futatsu:{jp:"二{ふた}つ",yue:"兩個",emoji:"2️⃣",cat:"num"},mittsu:{jp:"三{みっ}つ",yue:"三個",emoji:"3️⃣",cat:"num"},hitori:{jp:"一人{ひとり}",yue:"一個人",emoji:"🧍",cat:"num"},futari:{jp:"二人{ふたり}",yue:"兩個人",emoji:"👫",cat:"num"},ikkan:{jp:"一貫{いっかん}",yue:"一件（握壽司）",emoji:"1️⃣",cat:"num",textIcon:!0},nikan:{jp:"二貫{にかん}",yue:"兩件（握壽司）",emoji:"2️⃣",cat:"num",textIcon:!0},sankan:{jp:"三貫{さんかん}",yue:"三件（握壽司）",emoji:"3️⃣",cat:"num",textIcon:!0},sannin:{jp:"三人{さんにん}",yue:"三個人",emoji:"👨‍👩‍👧",cat:"num"},irasshaimase:{jp:"いらっしゃいませ",yue:"歡迎光臨",emoji:"🙇",cat:"phrase"},arigatou:{jp:"ありがとうございます",yue:"多謝（禮貌）",emoji:"🙏",cat:"phrase"},oishii:{jp:"おいしい",yue:"好好食",emoji:"😋",cat:"phrase"},itadakimasu:{jp:"いただきます",yue:"開動喇（食之前講）",emoji:"🙏",cat:"phrase"},gochisousama:{jp:"ごちそうさまでした",yue:"多謝款待（食完講）",emoji:"😊",cat:"phrase"},kudasai:{jp:"ください",yue:"請畀我⋯",emoji:"👉",cat:"phrase"},onegaishimasu:{jp:"お願{ねが}いします",yue:"麻煩你、唔該",emoji:"🙇",cat:"phrase"},okaikei:{jp:"お会計{かいけい}",yue:"埋單",emoji:"🧾",cat:"phrase"},sumimasen:{jp:"すみません",yue:"唔好意思（叫人都用得）",emoji:"✋",cat:"phrase"},atsui:{jp:"熱{あつ}い",yue:"好熱、好燙",emoji:"🔥",cat:"phrase"},oomori:{jp:"大盛{おおも}り",yue:"大份",emoji:"⛰️",cat:"phrase"},matta:{jp:"また 来{き}ます",yue:"我會再嚟",emoji:"👋",cat:"phrase"},oishikatta:{jp:"美味{おい}しかった",yue:"好好食呀（過去式）",emoji:"🥰",cat:"phrase"},hai:{jp:"はい",yue:"係／好",emoji:"⭕",cat:"phrase"},iie:{jp:"いいえ",yue:"唔係／唔使",emoji:"❌",cat:"phrase"}};for(const[n,t,e,i,s,a]of[...Py,...ix])gn[n]={jp:t,yue:e,emoji:i,cat:"ing",m:{s,c:a,sc:[.12,.1,.12]},...Ud.includes(n)?{textIcon:!0}:{}};for(const n of[...Nd,...Gs])gn[n.id]={jp:n.jp,yue:n.yue,emoji:n.emoji,cat:"dish",...Ud.includes(n.id)?{textIcon:!0}:{}};for(const[n,t,e,i]of[...Ly,...Fd,...Bd,...Wd,...sx])gn[n]={jp:t,yue:e,cat:i,emoji:i==="verb"?"🥄":i==="travel"?n.startsWith("hotel_")?"🏨":"🚉":"💬",textIcon:!0};function Se(n){const t=gn[n];if(!t)throw new Error("vocab missing: "+n);return{id:n,...t}}const et=(n,t={})=>new Jn({color:n,roughness:.6,...t}),Fi=n=>(n.castShadow=!0,n.receiveShadow=!0,n);function ie(n,t,e=1,i=1,s=1){const a=Fi(new G(new Ve(n,20,14),typeof t=="number"?et(t):t));return a.scale.set(e,i,s),a}function ge(n,t,e,i){return Fi(new G(new Zt(n,t,e),typeof i=="number"?et(i):i))}function ne(n,t,e,i,s=24){return Fi(new G(new Ae(n,t,e,s),typeof i=="number"?et(i):i))}function Fs(n=.22,t=.14,e=10165536,i=1708048){const s=[];for(let u=0;u<=10;u++){const h=u/10;s.push(new ft(n*.45+n*.55*Math.sin(h*Math.PI/2),t*h))}const a=new Ut,o=Fi(new G(new Ba(s,32),et(e,{roughness:.3}))),r=s.map(u=>new ft(u.x*.93,u.y+.005)),c=new G(new Ba(r,32),et(i,{side:yn,roughness:.3})),l=ne(n*.38,n*.4,.03,e);return l.position.y=-.01,a.add(o,c,l),a.userData.top=t,a.userData.r=n*.93,a}function on(n=.25,t=16052714){const e=ne(n,n*.8,.03,t,32),i=Fi(new G(new cn(n*.95,.012,6,32),et(3104156)));i.rotation.x=Math.PI/2,i.position.y=.016;const s=new Ut;return s.add(e,i),s}function cl(n=!0){const t=new Ut,e=new Pd,i=.14,s=.05,a=[0,1,2].map(c=>new ft(Math.sin(c*2.094)*i,Math.cos(c*2.094)*i));for(let c=0;c<3;c++){const l=a[c],u=a[(c+1)%3],h=a[(c+2)%3],m=l.clone().lerp(h,s/i*.9),p=l.clone().lerp(u,s/i*.9);c===0?e.moveTo(m.x,m.y):e.lineTo(m.x,m.y),e.quadraticCurveTo(l.x,l.y,p.x,p.y)}e.closePath();const o=new Bl(e,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.04,bevelSegments:4,curveSegments:10});o.translate(0,0,-.04);const r=Fi(new G(o,et(16514036,{roughness:.9})));if(r.position.y=.14,t.add(r),n){const c=ge(.13,.11,.2,et(1517083,{roughness:.8}));c.position.set(0,.07,0),t.add(c)}return t}function Rh(n){const t=new Ut;if(["dark_milk_tea","dark_coffee","dark_soda"].includes(n)){const e=ne(.11,.09,.3,et(14874362,{transparent:!0,opacity:.35}));e.position.y=.17,t.add(e);const i=ne(.098,.083,.25,n==="dark_coffee"?10383697:n==="dark_soda"?15308175:11846026);i.position.y=.15,t.add(i);const s=qd();if(s.position.y=.04,t.add(s),n==="dark_soda"){const a=ne(.065,.065,.014,16243299);a.rotation.x=Math.PI/2,a.position.set(.09,.3,0),t.add(a)}if(n==="dark_coffee"){const a=ne(.096,.096,.045,14995373);a.position.y=.255,t.add(a)}}else if(n==="dark_ding"){t.add(on(.3));const e=ie(.12,8868663,1.1,.4,.8);e.position.set(-.1,.07,0),t.add(e);const i=ie(.09,15785896,1,.8,1);i.position.set(.12,.08,.08),t.add(i);for(let s=0;s<3;s++){const a=ie(.04,7382346);a.position.set(s*.06,.06,-.13),t.add(a)}}else if(n==="dark_beef"||n==="dark_soup"){t.add(Fs(.23,.15,n==="dark_beef"?8671289:15787471,16182751));const e=ne(.205,.205,.025,n==="dark_beef"?8536360:14004830);if(e.position.y=.12,t.add(e),n==="dark_beef")for(let s=0;s<5;s++){const a=ge(.065,.045,.06,9524274);a.position.set(Math.sin(s*2)*.12,.15,Math.cos(s*2)*.12),t.add(a)}const i=ie(.04,6524477,1.5,.2,.5);i.position.set(0,.17,0),t.add(i)}else if(n==="dark_rice"){t.add(on(.28));const e=ie(.21,14858078,1,.6,1);e.position.y=.045,t.add(e);for(let i=0;i<12;i++){const s=ge(.035,.018,.025,i%3?16372556:7382346);s.position.set(Math.sin(i*2)*.15,.13,Math.cos(i*2)*.12),t.add(s)}}else if(n==="onigiri"){t.add(on(.24));const e=cl();e.position.y=.02,t.add(e);const i=cl();i.position.set(.1,.02,-.06),i.rotation.y=.5,i.scale.setScalar(.85),t.add(i);const s=ie(.025,13117500);s.position.set(-.13,.04,.12),t.add(s)}else if(n==="misoshiru"){const e=Fs(.18,.13);t.add(e);const i=new G(new Ii(.15,32),et(12946250,{roughness:.2}));i.rotation.x=-Math.PI/2,i.position.y=.11,t.add(i);for(let s=0;s<6;s++){const a=ge(.035,.03,.035,16776168);a.position.set((Math.random()-.5)*.18,.115,(Math.random()-.5)*.18),a.rotation.y=Math.random(),t.add(a)}for(let s=0;s<5;s++){const a=ie(.03,3042106,1,.2,.6);a.position.set((Math.random()-.5)*.16,.112,(Math.random()-.5)*.16),t.add(a)}for(let s=0;s<8;s++){const a=ne(.012,.012,.005,8376399,8);a.position.set((Math.random()-.5)*.15,.118,(Math.random()-.5)*.15),t.add(a)}}else if(n==="oyakodon"){const e=Fs(.22,.15,2903951,15921126);t.add(e);const i=ie(.19,16514036,1,.3,1);i.position.y=.13,t.add(i);const s=ie(.19,et(16237873,{roughness:.35}),1,.16,1);s.position.y=.17,t.add(s);for(let a=0;a<6;a++){const o=ie(.05,16775126,1,.25,.8);o.position.set((Math.random()-.5)*.24,.19,(Math.random()-.5)*.24),t.add(o)}for(let a=0;a<6;a++){const o=ge(.05,.035,.04,13210202);o.position.set((Math.random()-.5)*.22,.2,(Math.random()-.5)*.22),o.rotation.y=Math.random()*3,t.add(o)}for(let a=0;a<3;a++){const o=ie(.03,5025616,1,.15,1.6);o.position.set((Math.random()-.5)*.08,.22,(Math.random()-.5)*.08),o.rotation.y=a*2,t.add(o)}}else if(n==="chahan"){t.add(on(.3));const e=ie(.2,15254634,1,.45,1);e.position.y=.07,t.add(e);for(let i=0;i<8;i++){const s=ge(.04,.02,.04,i%2?16243018:7127626);s.position.set(Math.cos(i*.8)*.12,.17,Math.sin(i*.8)*.12),s.rotation.y=i,t.add(s)}}else if(n==="tsukemen"){t.add(on(.3));for(let s=0;s<6;s++){const a=new G(new cn(.07+s*.01,.012,6,20),et(15980410));a.rotation.x=Math.PI/2,a.position.set(-.05,.03+s*.012,0),t.add(a)}const e=Fs(.12,.09,2894892,1118481);e.position.set(.2,0,.06),t.add(e);const i=ne(.1,.1,.01,8014372);i.position.set(.2,.08,.06),t.add(i)}else if(["ramen","shoyu_ramen","shio_ramen","miso_ramen","tonkotsu_ramen"].includes(n)){const e={shoyu_ramen:9062943,shio_ramen:15785120,miso_ramen:13208124,tonkotsu_ramen:15918799}[n]||13802331,i=Fs(.27,.17,11740702,1118481);t.add(i);const s=new G(new Ii(.235,32),et(e,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.15,t.add(s);for(let u=0;u<7;u++){const h=new G(new cn(.05+Math.random()*.06,.008,6,20),et(15980410));h.rotation.x=Math.PI/2,h.position.set((Math.random()-.5)*.12,.152,(Math.random()-.5)*.12),t.add(h)}for(let u=0;u<2;u++){const h=ne(.07,.07,.02,11887930);h.position.set(-.08+u*.05,.165,-.08),h.rotation.x=.3,t.add(h)}const a=new G(new Ve(.05,16,10,0,Math.PI*2,0,Math.PI/2),et(16775920));a.scale.set(1,.7,1.3),a.position.set(.1,.15,.05),t.add(a);const o=ie(.028,15763994,1,.4,1.2);o.position.set(.1,.183,.05),t.add(o);const r=ge(.12,.14,.005,1517083);r.position.set(0,.2,-.18),r.rotation.x=-.25,t.add(r);const c=ne(.035,.035,.012,16777215);c.position.set(.05,.16,.13),t.add(c);const l=new G(new cn(.018,.005,6,16),et(16740256));l.rotation.x=Math.PI/2,l.position.set(.05,.167,.13),t.add(l);for(let u=0;u<10;u++){const h=ne(.01,.01,.005,8376399,8);h.position.set(-.1+Math.random()*.1,.158,.05+Math.random()*.1),t.add(h)}}else if(["instant_coffee","black_tea","matcha_latte"].includes(n)){t.add(on(.19));const e=ne(.115,.09,.2,16774367);e.position.y=.12,t.add(e);const i=ne(.106,.106,.012,n==="instant_coffee"?4796454:n==="black_tea"?11627820:9350233);i.position.y=.225,t.add(i);const s=new G(new cn(.06,.015,8,20),et(16774367));if(s.position.set(.12,.12,0),t.add(s),n==="matcha_latte"){const a=ne(.06,.06,.005,16775647);a.position.y=.235,t.add(a)}}else if(n==="edamame"){t.add(on());for(let e=0;e<6;e++){const i=ie(.065,7974216,1.7,.45,.55);i.position.set((e%3-1)*.12,.05+Math.floor(e/3)*.035,(Math.floor(e/3)-.5)*.12),i.rotation.y=e*.8,t.add(i)}}else if(n==="yakitori"){t.add(on());for(let e=0;e<2;e++){const i=ge(.015,.015,.42,13017452);i.position.set(e*.17-.08,.05,0),t.add(i);for(let s=0;s<4;s++){const a=ge(.085,.06,.065,s%2?8889940:13009468);a.position.set(e*.17-.08,.08,s*.08-.08),t.add(a)}}}else if(n==="karaage"||n==="agedashi"){t.add(on());for(let e=0;e<5;e++){const i=n==="karaage"?ie(.07,12945979,1,.8,.9):ge(.1,.08,.1,15122813);if(i.position.set(Math.cos(e*1.26)*.13,.07,Math.sin(e*1.26)*.13),t.add(i),n==="agedashi"){const s=ie(.02,7185226,1.4,.2,.5);s.position.copy(i.position),s.position.y+=.05,t.add(s)}}}else if(n==="okonomiyaki"||n==="pancakes"){t.add(on());for(let e=0;e<(n==="pancakes"?3:1);e++){const i=ne(.2,.2,.045,e%2?14858346:13210700);i.position.y=.045+e*.045,t.add(i)}if(n==="pancakes"){const e=ge(.065,.025,.065,16768899);e.position.y=.17,t.add(e)}else for(let e=0;e<4;e++){const i=ge(.31,.008,.015,6568748);i.position.set(0,.075,(e-1.5)*.055),t.add(i)}}else if(n==="thick_toast"){t.add(on());const e=ge(.32,.09,.29,10314292);e.position.y=.065,t.add(e);const i=ge(.28,.012,.25,15517065);i.position.y=.116,t.add(i);const s=ge(.07,.022,.07,16768899);s.position.y=.135,t.add(s)}else if(n==="pudding"){t.add(on());const e=ne(.11,.16,.19,16046470);e.position.y=.11,t.add(e);const i=ne(.112,.112,.012,10178863);i.position.y=.21,t.add(i)}else if(n==="yakisoba"){t.add(on());for(let e=0;e<12;e++){const i=new G(new cn(.07,.009,6,16),et(12158277));i.rotation.x=Math.PI/2,i.position.set(Math.sin(e*2)*.11,.04+e*.004,Math.cos(e*2)*.1),t.add(i)}for(let e=0;e<5;e++){const i=ie(.035,9876576,1.4,.2,1);i.position.set(Math.cos(e)*.12,.1,Math.sin(e)*.12),t.add(i)}}else if(n==="ocha"){const e=ne(.06,.05,.12,6983502);e.position.y=.06,t.add(e);const i=new G(new Ii(.055,20),et(10207050));i.rotation.x=-Math.PI/2,i.position.y=.11,t.add(i)}else if(n==="omizu"){const e=ne(.05,.045,.14,et(13627391,{transparent:!0,opacity:.45,roughness:.05}));e.position.y=.07,t.add(e)}else if(n==="biiru"){const e=ne(.06,.06,.18,et(15905076,{transparent:!0,opacity:.85,roughness:.1}));e.position.y=.09,t.add(e);const i=ie(.062,16777215,1,.4,1);i.position.y=.18,t.add(i);const s=new G(new cn(.04,.012,6,12,Math.PI),et(15267071,{transparent:!0,opacity:.6}));s.rotation.z=-Math.PI/2,s.position.set(.06,.09,0),t.add(s)}else if(["kappamaki","tekkamaki"].includes(n)){t.add(on(.27));const e=n==="kappamaki"?7320149:13120060;for(let i=0;i<4;i++){const s=(i%2-.5)*.17,a=(Math.floor(i/2)-.5)*.17,o=ne(.07,.07,.07,1517083);o.position.set(s,.07,a),t.add(o);const r=ne(.056,.056,.01,16645621);r.position.set(s,.108,a),t.add(r);const c=ne(.026,.026,.012,e);c.position.set(s,.112,a),t.add(c)}}else if(["tamago_nigiri","salmon_nigiri"].includes(n)){t.add(on(.27));for(let e=0;e<2;e++){const i=(e-.5)*.2,s=ge(.15,.06,.08,16645621);s.position.set(i,.07,0),t.add(s);const a=ge(.17,.03,.095,n==="salmon_nigiri"?16747622:16237873);if(a.position.set(i,.115,0),t.add(a),n==="tamago_nigiri"){const o=ge(.03,.04,.1,1517083);o.position.set(i,.11,0),t.add(o)}}}else if(n==="inari"){t.add(on(.27));for(let e=0;e<3;e++){const i=ie(.09,13208124,1.1,.7,.9);i.position.set((e-1)*.17,.07,e%2*.05),t.add(i);const s=ne(.045,.045,.01,16645621);s.position.set((e-1)*.17,.125,e%2*.05),t.add(s)}}else if(n==="chirashi"){t.add(Fs(.24,.13,2903951,15921126));const e=ne(.21,.21,.04,16645621);e.position.y=.12,t.add(e);for(let i=0;i<5;i++){const s=ge(.08,.02,.05,16747622);s.position.set(Math.cos(i*1.3)*.1,.15,Math.sin(i*1.3)*.1),s.rotation.y=i,t.add(s)}for(let i=0;i<6;i++){const s=ge(.05,.012,.012,16237873);s.position.set(Math.cos(i*2.1)*.07,.16,Math.sin(i*2.1)*.07),s.rotation.y=i,t.add(s)}}return t}function qd(){const n=new Ut;for(let t=0;t<3;t++){const e=ge(.045,.035,.045,et(14086911,{transparent:!0,opacity:.75}));e.position.set((t-1)*.045,.244,t%2*.04-.02),n.add(e)}return n}function fx(){const n=new Ut,t=ge(.62,.35,.4,14012875);t.position.y=.175,n.add(t);const e=ge(.42,.24,.012,et(3157048,{emissive:0}));e.position.set(-.055,.18,.207),n.add(e);const i=ge(.025,.17,.03,7827836);i.position.set(.13,.18,.225),n.add(i);for(let s=0;s<2;s++){const a=ne(.035,.035,.025,6839152);a.rotation.x=Math.PI/2,a.position.set(.235,.12+s*.13,.22),n.add(a)}return n.userData.window=e,n}function px(n,t,e){if(!n)return;if(t!=="plain"){const s=ne(t==="grand"?.39:.3,.28,.02,t==="grand"?3420222:15262940);s.position.y=-.025,n.add(s)}const i=e==="tower"?7:e==="accent"?1:0;for(let s=0;s<i;s++){const a=ie(.04,6329916,1.5,.25,.5);a.position.set(.035*Math.sin(s),.32+s*.025,0),a.rotation.y=s,n.add(a)}}function mx(n){const t=gn[n],e=t==null?void 0:t.m,i=new Ut;if(!e)return i;let s;return e.s==="sphere"?s=ie(1,e.c):e.s==="box"?s=ge(1,1,1,e.c):s=ne(1,1,1,e.c,18),s.scale.set(...e.sc),(e.s==="cyl"||e.s==="box")&&(s.scale.y=e.sc[1]),s.position.y=e.s==="sphere"?e.sc[1]:e.sc[1]/2,e.rz&&(s.rotation.z=e.rz,s.position.y=e.sc[0]),i.add(s),i}function gx(n){const t=new Ut;switch(n){case"onigiri_raw":{const e=cl(!1);t.add(e);break}case"tofu_cubes":for(let e=0;e<9;e++){const i=ge(.06,.06,.06,16776168);i.position.set(e%3*.07-.07,.03,Math.floor(e/3)*.07-.07),t.add(i)}break;case"chicken_pieces":for(let e=0;e<8;e++){const i=ge(.06,.04,.05,15911328);i.position.set((Math.random()-.5)*.25,.02,(Math.random()-.5)*.15),i.rotation.y=Math.random()*3,t.add(i)}break}return t}function _x(){const n=new Ut,t=ge(.7,.04,.42,et(14267530,{roughness:.8}));return t.position.y=.02,n.add(t),n}function vx(){const n=new Ut,t=et(12107463,{metalness:.7,roughness:.3}),e=new G(new Ae(.2,.18,.22,28,1,!0),new Jn({color:12107463,metalness:.7,roughness:.3,side:mn}));e.position.y=.11,e.castShadow=!0;const i=ne(.18,.18,.01,t);i.position.y=.005;const s=new G(new Ii(.19,28),et(15259816,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.16,s.visible=!1,n.add(e,i,s);for(const a of[-1,1]){const o=ge(.08,.02,.04,3355443);o.position.set(a*.24,.19,0),n.add(o)}return n.userData.liquid=s,n}function yx(){const n=new Ut,t=ne(.17,.15,.05,et(2763306,{metalness:.5,roughness:.4}));t.position.y=.025;const e=ne(.015,.015,.35,7028509);e.rotation.z=Math.PI/2,e.position.set(.33,.05,0);const i=new G(new Ii(.15,28),et(12089914,{roughness:.15}));return i.rotation.x=-Math.PI/2,i.position.y=.045,i.visible=!1,n.add(t,e,i),n.userData.liquid=i,n}function zo(n){const t=new Ut,e=n.color,i=ie(.32,e,1,1.15,.9);i.position.y=.5,t.add(i);const s=ie(.22,n.id==="maneki"?16777215:16774112,1,1.1,.6);s.position.set(0,.46,.2),t.add(s);const a=new Ut;a.position.y=1.08,t.add(a),a.add(ie(.3,e,1.1,1,1));const o=n.id==="kuma"?14267276:n.id==="kitsune"||n.id==="shiba"?16774112:16777215,r=ie(.12,o,1.3,.85,.9);r.position.set(0,-.08,.24),a.add(r);const c=ie(.035,2236962);c.position.set(0,-.04,.35),a.add(c);for(const l of[-1,1]){const u=ie(.04,new se({color:1118481}),1,1.2,.6);u.position.set(l*.12,.04,.27),a.add(u);const h=ie(.012,new se({color:16777215}));h.position.set(l*.12+.012,.06,.3),a.add(h);const m=ie(.04,new se({color:16752560,transparent:!0,opacity:.6}),1,.6,.3);if(m.position.set(l*.2,-.06,.24),a.add(m),n.mask){const d=ie(.08,3813416,1.2,.9,.4);d.position.set(l*.12,.03,.24),a.add(d),u.position.z=.29}let p;n.ear==="long"?(p=ie(.07,e,1,3.2,.6),p.position.set(l*.1,.42,0),p.rotation.z=-l*.15):n.ear==="round"?(p=ie(.09,e,1,1,.6),p.position.set(l*.22,.24,0)):(p=Fi(new G(new us(.1,.2,12),et(e))),p.scale.z=.6,p.position.set(l*.18,.3,0),p.rotation.z=-l*.3),a.add(p);const g=ie(.08,e,1,1.6,1);g.position.set(l*.3,.56,.1),g.rotation.z=l*.4,t.add(g),n.id==="maneki"&&l===1&&(g.position.set(.3,.95,.1),g.rotation.z=-.3,t.userData.wave=g);const _=ie(.09,e,1.2,1.1,1.4);_.position.set(l*.14,.1,.08),t.add(_)}if(n.id==="maneki"){const l=Fi(new G(new cn(.2,.03,8,24),et(14100029)));l.rotation.x=Math.PI/2,l.position.y=.86,t.add(l);const u=ie(.05,et(16106818,{metalness:.8,roughness:.2}));u.position.set(0,.8,.2),t.add(u);const h=ne(.12,.12,.02,et(16106818,{metalness:.8,roughness:.2}));h.scale.set(.7,1,1.2),h.rotation.x=Math.PI/2,h.position.set(-.15,.55,.3),t.add(h)}return t.userData.head=a,t}function Ch(n){const t=new Ut;if(n==="deco_lantern"){const e=ie(.2,et(14694959,{emissive:8392720,emissiveIntensity:.6}),1,1.3,1),i=ne(.1,.1,.05,2236962);i.position.y=.27;const s=ne(.1,.1,.05,2236962);s.position.y=-.27;const a=ne(.005,.005,.5,2236962);a.position.y=.5;const o=new ia(16744512,.8,3);t.add(e,i,s,a,o)}else if(n==="deco_noren"){const e=ne(.015,.015,1.4,7028509);e.rotation.z=Math.PI/2,t.add(e);for(let i=0;i<3;i++){const s=ge(.44,.55,.01,et(1914199,{side:mn}));s.position.set(-.46+i*.46,-.28,0),t.add(s);const a=ie(.06,16777215,1,1,.2);a.position.set(-.46+i*.46,-.3,.01),t.add(a)}}else if(n==="deco_bonsai"){const e=ne(.12,.09,.08,3100527);e.position.y=.04,t.add(e);const i=ne(.02,.03,.18,5978654);i.position.y=.17,i.rotation.z=.3,t.add(i),[[0,.3,0,.1],[-.08,.26,.02,.07],[.08,.32,-.02,.07]].forEach(([s,a,o,r])=>{const c=ie(r,4165439,1.3,.7,1);c.position.set(s,a,o),t.add(c)})}else if(n==="deco_maneki"){const e=zo({id:"maneki",color:16777215,ear:"pointy"});e.scale.setScalar(.35),t.add(e),t.userData.wave=e.userData.wave}return t}function Ph(n="#fff",t=!0){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d"),s=i.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,n),s.addColorStop(t?.4:.9,n),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);const a=new vi(e);return a.colorSpace=He,a}function or(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new vi(i);return s.colorSpace=He,s}const fi=(n,t,e,i,s)=>new G(new Zt(n,t,e),et(i,s)),Qo=(n,t,e)=>new G(new zt(n,t),new se({map:e,transparent:!0}));function Yd(n,t,e="#ffffff"){return or(512,200,(i,s,a)=>{i.clearRect(0,0,s,a);const o=3,r=s/o;for(let c=0;c<o;c++)i.fillStyle=n,i.fillRect(c*r+4,0,r-8,a-6),i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(c*r+4,a-26,r-8,20);i.fillStyle=e,i.font="bold 110px serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,s/2,a/2-8)})}function Kd(n,t="#f1dcae",e="#3a2210",i=44){return or(256,64+n.length*24,(s,a,o)=>{s.fillStyle=t,s.fillRect(0,0,a,o),s.strokeStyle="#6b4226",s.lineWidth=6,s.strokeRect(3,3,a-6,o-6),s.fillStyle=e,s.font=`bold ${i}px serif`,s.textAlign="center",s.textBaseline="middle",n.forEach((r,c)=>s.fillText(r,a/2,o/(n.length+1)*(c+1)))})}function Jd(n,t){const e=new Ut,i=new G(new Ae(.22,.22,.5,20),et(n,{roughness:.6,emissive:n,emissiveIntensity:.25}));e.add(i);for(const a of[-.27,.27]){const o=new G(new Ae(.15,.15,.06,16),et(1710618));o.position.y=a,e.add(o)}const s=new G(new zt(.3,.3),new se({map:or(64,64,(a,o,r)=>{a.fillStyle="#fff",a.font="bold 48px serif",a.textAlign="center",a.textBaseline="middle",a.fillText(t,o/2,r/2)}),transparent:!0}));return s.position.z=.225,e.add(s),e}function xx(){const n=new Ut,t=new G(new zt(14,10),et(14268810,{roughness:.8}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);for(let p=-7;p<8;p++){const g=new G(new zt(.02,10),et(12096874));g.rotation.x=-Math.PI/2,g.position.set(p*.5,.002,0),n.add(g)}const e=new G(new zt(14,6),et(15985884,{roughness:1}));e.position.set(0,3,-2.2),e.receiveShadow=!0,n.add(e);const i=fi(14,1.5,.05,12094034,{roughness:.7});i.position.set(0,.75,-2.17),n.add(i);for(let p=-7;p<8;p++){const g=fi(.02,1.5,.06,9200696);g.position.set(p*.5,.75,-2.15),n.add(g)}const s=new G(new Ae(.03,.03,3.4,8),et(3809808));s.rotation.z=Math.PI/2,s.position.set(-.1,3.3,-2),n.add(s);const a=Qo(3.2,1.25,Yd("#1f3a68","寿司"));a.position.set(-.1,2.65,-1.98),n.add(a),[["鮪","二貫"],["鮭","二貫"],["海老","二貫"],["玉子","二貫"]].forEach((p,g)=>{const _=Qo(.5,.35000000000000003,Kd(p));_.position.set(-1.9+g*.62,1.9,-2.14),n.add(_)});const r=fi(1.6,.05,.3,7029286);r.position.set(1.7,1.75,-2),n.add(r);const c=new G(new Ve(.13,14,12),et(4876882,{roughness:.4}));c.position.set(1.2,1.92,-2),c.scale.y=.8,n.add(c),[3099258,16117988,12597547].forEach((p,g)=>{const _=new G(new Ae(.06,.07,.34,12),et(p,{roughness:.3}));_.position.set(1.55+g*.22,1.95,-2),n.add(_)});const l=Jd(12597547,"寿");l.position.set(2.5,2.75,-1.2),n.add(l);const u=new Ut;u.position.set(1.6,1.08,-.2),u.add(fi(.8,.12,.4,15327440)),[15765648,15769690,16049856,15227466,15909424].forEach((p,g)=>{const _=fi(.11,.05,.08,16775920);_.position.set(-.3+g*.15,.085,0),u.add(_);const d=fi(.13,.03,.1,p);d.position.set(-.3+g*.15,.125,0),u.add(d)});const h=new G(new Zt(.8,.22,.42),new Jn({color:14676731,transparent:!0,opacity:.28,roughness:.1}));h.position.y=.2,u.add(h),n.add(u);const m=new G(new Ae(.07,.055,.1,14),et(16119280));return m.position.set(1.05,1.17,.35),n.add(m),n}function Mx(){const n=new Ut,t=new G(new zt(14,10),et(5986904,{roughness:.9}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const e=new G(new zt(14,6),et(2762018,{roughness:1}));e.position.set(0,3,-2.2),e.receiveShadow=!0,n.add(e);const i=or(256,256,(_,d,f)=>{_.fillStyle="#f2efe8",_.fillRect(0,0,d,f),_.strokeStyle="#c9c4b8",_.lineWidth=3;for(let S=0;S<=8;S++)_.beginPath(),_.moveTo(0,S*32),_.lineTo(d,S*32),_.stroke(),_.beginPath(),_.moveTo(S*32,0),_.lineTo(S*32,f),_.stroke()});i.wrapS=i.wrapT=Qs,i.repeat.set(14,1.6);const s=new G(new zt(14,1.6),new se({map:i}));s.position.set(0,.8,-2.17),n.add(s);const a=fi(14,.06,.07,12131356);a.position.set(0,1.62,-2.14),n.add(a);const o=new G(new Ae(.03,.03,3.4,8),et(1118481));o.rotation.z=Math.PI/2,o.position.set(-.1,3.3,-2),n.add(o);const r=Qo(3.2,1.25,Yd("#b91c1c","拉麺"));r.position.set(-.1,2.65,-1.98),n.add(r),[["醤油","800"],["味噌","850"],["塩","800"],["豚骨","900"]].forEach((_,d)=>{const f=Qo(.5,.35000000000000003,Kd(_,"#1a1a1a","#f5e6a8",40));f.position.set(-1.9+d*.62,2.05,-2.14),n.add(f)});const l=fi(1.5,.05,.3,3815994);l.position.set(1.7,1.85,-2),n.add(l);for(let _=0;_<3;_++)for(let d=0;d<3;d++){const f=new G(new Ae(.11,.07,.07,16),et(d%2?16119280:12131356,{roughness:.3}));f.position.set(1.3+_*.4,1.92+d*.05,-2),n.add(f)}const u=Jd(12131356,"麺");u.position.set(-2.5,2.7,-1.2),n.add(u);const h=new Ut;h.position.set(1.55,1.08,-.25);const m=(_,d,f)=>{const S=new G(new Ae(.045,.05,f,12),et(_,{roughness:.3}));return S.position.set(d,f/2,0),S};h.add(m(2236962,-.18,.2),m(8010514,-.06,.18),m(14211280,.06,.16));const p=new G(new Zt(.14,.12,.09),et(12131356));p.position.set(.22,.06,0),h.add(p);for(let _=0;_<4;_++){const d=fi(.012,.16,.012,15784096);d.position.set(.18+_*.03,.17,0),d.rotation.z=(_-1.5)*.06,h.add(d)}n.add(h);const g=new G(new Ae(.06,.05,.12,14),new Jn({color:14676731,transparent:!0,opacity:.5}));return g.position.set(1.05,1.14,.35),n.add(g),n}function Di(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new vi(i);return s.colorSpace=He,s}const gi=(n,t,e,i,s)=>new G(new Zt(n,t,e),et(i,s)),je=(n,t,e,i,s,a=16)=>new G(new Ae(n,t,e,a),et(i,s)),Ui=(n,t,e)=>new G(new zt(n,t),new se({map:e,transparent:!0}));function Hl(n,t){const e=new G(new zt(14,10),t?new Jn({map:t,roughness:.6}):et(n,{roughness:.85}));return e.rotation.x=-Math.PI/2,e.receiveShadow=!0,e}function Zd(n){const t=new G(new zt(14,6),et(n,{roughness:1}));return t.position.set(0,3,-2.2),t.receiveShadow=!0,t}function Vl(n,t,e,i,s,a,o="serif",r){return Di(n,t,(c,l,u)=>{e?(c.fillStyle=e,c.fillRect(0,0,l,u)):c.clearRect(0,0,l,u),r&&(c.strokeStyle=r,c.lineWidth=6,c.strokeRect(3,3,l-6,u-6)),c.fillStyle=i,c.font=`bold ${a}px ${o}`,c.textAlign="center",c.textBaseline="middle",c.fillText(s,l/2,u/2)})}function Sx(n,t){const e=new Ut,i=new G(new Ve(.2,18,14),et(n,{roughness:.6,emissive:n,emissiveIntensity:.35}));i.scale.y=1.25,e.add(i);for(const a of[-.26,.26]){const o=je(.1,.1,.05,1118481);o.position.y=a,e.add(o)}const s=Ui(.24,.24,Vl(64,64,null,"#fff",t,46));return s.position.z=.2,e.add(s),e}function bx(){const n=new Ut;n.add(Hl(5913382)),n.add(Zd(13481363));const t=gi(14,1.4,.05,4861468);t.position.set(0,.7,-2.17),n.add(t);for(const l of[-3.2,.2,3.4]){const u=gi(.2,6,.1,3810322);u.position.set(l,3,-2.12),n.add(u)}const e=gi(14,.22,.12,3810322);e.position.set(0,3.55,-2.1),n.add(e);const i=je(.03,.03,3.4,1118481,{},8);i.rotation.z=Math.PI/2,i.position.set(-.1,3.3,-2),n.add(i);const s=Ui(3.2,1.2,Di(512,192,(l,u,h)=>{for(let m=0;m<3;m++)l.fillStyle="#7a1f1f",l.fillRect(m*(u/3)+4,0,u/3-8,h-6);l.fillStyle="#fff",l.font="bold 84px serif",l.textAlign="center",l.textBaseline="middle",l.fillText("居酒屋",u/2,h/2-6)}));s.position.set(-.1,2.65,-1.98),n.add(s),["焼き鳥","刺身","枝豆","ビール","唐揚げ"].forEach((l,u)=>{const h=Ui(.2,.9,Di(64,256,(m,p,g)=>{m.fillStyle="#f3e6c4",m.fillRect(0,0,p,g),m.strokeStyle="#6b4226",m.lineWidth=4,m.strokeRect(2,2,p-4,g-4),m.fillStyle="#2a1608",m.font="bold 34px serif",m.textAlign="center",m.textBaseline="top",[...l].forEach((_,d)=>m.fillText(_,p/2,12+d*38))}));h.position.set(-2.3+u*.3,1.9,-2.13),n.add(h)});for(const[l,u]of[[2.7,-1.7],[2.2,-1.75]]){const h=je(.3,.3,.55,12094034,{roughness:.7});h.position.set(l,.28,u),n.add(h);for(const m of[.1,.46]){const p=je(.31,.31,.04,2763306);p.position.set(l,m,u),n.add(p)}}const a=gi(1.7,.05,.3,3810322);a.position.set(1.7,1.75,-2),n.add(a),[3099258,16117988,4160074,12597547,3099258,14263361].forEach((l,u)=>{const h=je(.055,.07,.34,l,{roughness:.3},12);h.position.set(1+u*.28,1.95,-2),n.add(h)}),[-2.4,-1.2,2.5].forEach(l=>{const u=Sx(12597547,l<0?"酒":"飲");u.position.set(l,3,-1),n.add(u)});const o=je(.07,.065,.16,15909424,{roughness:.2},14);o.position.set(1,1.16,.36),n.add(o);const r=je(.07,.07,.04,16777215,{},14);r.position.set(1,1.26,.36),n.add(r);const c=je(.12,.1,.03,16117988,{},18);return c.position.set(1.5,1.1,.3),n.add(c),n}function wx(){const n=new Ut,t=Di(128,128,(d,f,S)=>{d.fillStyle="#f2ede2",d.fillRect(0,0,f,S),d.fillStyle="#2f2b28",d.fillRect(0,0,f/2,S/2),d.fillRect(f/2,S/2,f/2,S/2)});t.wrapS=t.wrapT=Qs,t.repeat.set(14,10),n.add(Hl(0,t)),n.add(Zd(15984328));const e=gi(14,1.3,.05,3103302);e.position.set(0,.65,-2.17),n.add(e);const i=gi(14,.06,.07,13214282);i.position.set(0,1.32,-2.14),n.add(i);const s=Ui(1.3,.55,Vl(256,108,"#2f5a46","#f5e6a8","珈琲",72,"serif","#c9a24a"));s.position.set(-.2,3.05,-2.13),n.add(s);const a=Ui(1.1,1,Di(220,200,(d,f,S)=>{d.fillStyle="#26332c",d.fillRect(0,0,f,S),d.strokeStyle="#8b5a3c",d.lineWidth=10,d.strokeRect(5,5,f-10,S-10),d.fillStyle="#f5f0e0",d.font="bold 34px serif",d.textAlign="center",["メニュー","珈琲","紅茶","抹茶"].forEach((v,b)=>d.fillText(v,f/2,50+b*40))}));a.position.set(-1.6,2.2,-2.13),n.add(a);const o=gi(1.7,.05,.3,5913382);o.position.set(1.6,1.8,-2),n.add(o);for(let d=0;d<5;d++){const f=je(.07,.05,.09,16447214,{roughness:.3},14);f.position.set(.9+d*.2,1.87,-2),n.add(f)}const r=gi(1.7,.05,.3,5913382);r.position.set(1.6,2.35,-2),n.add(r),[7028510,9132587,3807756,11037490].forEach((d,f)=>{const S=je(.09,.09,.22,d,{roughness:.3},14);S.position.set(1+f*.4,2.48,-2),n.add(S);const v=je(.095,.095,.04,13214282);v.position.set(1+f*.4,2.61,-2),n.add(v)});for(const d of[-1.2,1.4]){const f=je(.008,.008,.7,1118481,{},6);f.position.set(d,3.55,-.9),n.add(f);const S=new G(new us(.22,.22,20,1,!0),et(3103302,{side:mn}));S.position.set(d,3.12,-.9),n.add(S);const v=new G(new Ve(.06),new se({color:16773568}));v.position.set(d,3.05,-.9),n.add(v)}const c=je(.16,.12,.28,11887930);c.position.set(-2.8,.14,-1.8),n.add(c);for(let d=0;d<5;d++){const f=new G(new Ve(.14,10,8),et(4164170));f.position.set(-2.8+Math.sin(d*1.3)*.16,.5+d*.1,-1.8+Math.cos(d*1.3)*.1),f.scale.y=1.4,n.add(f)}const l=new Ut;l.position.set(1.55,1.08,-.2);const u=new G(new Ve(.1,14,12),new Jn({color:14676731,transparent:!0,opacity:.55}));u.position.y=.12,l.add(u);const h=new G(new Ve(.085,14,12),new Jn({color:14676731,transparent:!0,opacity:.55}));h.position.y=.38,l.add(h);const m=je(.01,.01,.5,3355443,{},6);m.position.set(.1,.25,0),l.add(m);const p=je(.03,.03,.06,12597547,{emissive:12597547,emissiveIntensity:.4},8);p.position.y=.02,l.add(p),n.add(l);const g=je(.065,.045,.08,16447214,{roughness:.3},14);g.position.set(1,1.14,.36),n.add(g);const _=je(.1,.1,.015,16447214,{},18);return _.position.set(1,1.1,.36),n.add(_),n}function Ex(){const n=new Ut;n.add(Hl(2761776));const t=Di(512,256,(p,g,_)=>{p.fillStyle="#1f2b25",p.fillRect(0,0,g,_);for(let d=0;d<40;d++)p.fillStyle=`rgba(${10+d*7%30},${14+d*11%24},${12+d*5%20},0.35)`,p.beginPath(),p.ellipse(d*97%g,d*53%_,18+d%5*10,10+d%4*8,0,0,Math.PI*2),p.fill();p.fillStyle="rgba(80,20,20,0.35)";for(let d=0;d<5;d++)p.fillRect(60+d*90,0,6,60+d*37%110)}),e=new G(new zt(14,6),new Jn({map:t,roughness:1}));e.position.set(0,3,-2.2),n.add(e);const i=Ui(14,.18,Di(512,16,(p,g,_)=>{for(let d=-2;d<40;d++)p.fillStyle=d%2?"#111":"#e6b800",p.beginPath(),p.moveTo(d*20,_),p.lineTo(d*20+12,0),p.lineTo(d*20+32,0),p.lineTo(d*20+20,_),p.fill()}));i.position.set(0,1.5,-2.15),i.rotation.z=.02,n.add(i);const s=Ui(1.7,.7,Di(320,132,(p,g,_)=>{p.shadowColor="#ff2d6f",p.shadowBlur=24,p.fillStyle="#ff6fa0",p.font="bold 84px serif",p.textAlign="center",p.textBaseline="middle",p.fillText("食堂",g/2,_/2),p.fillText("食堂",g/2,_/2)}));s.position.set(0,3,-2.12),n.add(s);const a=new ia(16723311,1.2,4,1.6);a.position.set(0,2.9,-1.6),n.add(a);const o=je(.008,.008,.9,1118481,{},6);o.position.set(-1.8,3.5,-.8),n.add(o);const r=new G(new Ve(.07),new se({color:16771488}));r.position.set(-1.8,3,-.8),n.add(r);const c=gi(1.7,.05,.3,1710618);c.position.set(1.7,1.9,-2),n.add(c),[7143290,11562239,7143290,16739436,11562239].forEach((p,g)=>{const _=je(.08,.08,.22+g%2*.06,p,{roughness:.2,emissive:p,emissiveIntensity:.5},14);_.position.set(1+g*.3,2.04,-2),n.add(_)});const l=new ia(7143290,.8,3,1.6);l.position.set(1.7,2.2,-1.7),n.add(l);const u=Ui(.9,.35,Vl(180,70,"#1a1a1a","#ff6f6f","営業中？",38,"serif","#ff6f6f"));u.position.set(-2.4,2.3,-2.12),n.add(u);const h=je(.07,.07,.18,7143290,{roughness:.2,emissive:7143290,emissiveIntensity:.4},12);h.position.set(1.55,1.17,-.25),n.add(h);const m=je(.04,.05,.2,11562239,{roughness:.2,emissive:11562239,emissiveIntensity:.4},10);return m.position.set(1.75,1.18,-.2),n.add(m),n}const ll=80;function Gl(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new vi(i);return s.colorSpace=He,s}function Tx(){return Gl(512,128,(n,t,e)=>{n.fillStyle="#1b8a4a",n.fillRect(0,0,t,e),n.fillStyle="#f08a24",n.fillRect(0,e-22,t,12),n.fillStyle="#ffffff",n.fillRect(0,e-10,t,10),n.fillStyle="#fff",n.font="bold 66px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("ねこマート",t/2,e/2-8)})}function Ax(){return Gl(256,384,(n,t,e)=>{n.fillStyle="#dff1fb",n.fillRect(0,0,t,e);const i=["#e8503a","#3a8fe8","#f2c230","#47b86a","#b05ad0","#f08a24"];for(let s=0;s<4;s++){const a=20+s*92;n.fillStyle="#9fb7c4",n.fillRect(0,a+66,t,6);for(let o=0;o<9;o++)n.fillStyle=i[(o+s*2)%i.length],n.fillRect(8+o*27,a+6,20,58),n.fillStyle="#ffffffaa",n.fillRect(11+o*27,a+10,5,50),n.fillStyle="#fff",n.fillRect(8+o*27,a,20,8)}})}function Rx(){return Gl(128,80,(n,t,e)=>{n.fillStyle="#17323a",n.fillRect(0,0,t,e),n.fillStyle="#7fffd4",n.font="bold 26px monospace",n.textAlign="right",n.textBaseline="middle",n.fillText("¥ 0",t-10,e/2)})}function Lh(n,t,e,i,s,a=0){const o=new Ut,r=et(15921902,{roughness:.6}),c=new G(new Zt(n,t,.04),r);c.position.set(0,t/2,-e/2),o.add(c);for(const l of[-1,1]){const u=new G(new Zt(.04,t,e),r);u.position.set(l*n/2,t/2,0),o.add(u)}for(let l=0;l<=i;l++){const u=.12+l*((t-.16)/i),h=new G(new Zt(n,.03,e),r);if(h.position.set(0,u,0),o.add(h),l===i)break;const m=Math.floor(n/.2);for(let p=0;p<m;p++){const g=.14+(p+l+a)*7%3*.04,_=new G(new Zt(.15,g,e*.7),et(s[(p*3+l*5+a)%s.length],{roughness:.5}));_.position.set(-n/2+.12+p*.2,u+.015+g/2,0),_.castShadow=!0,o.add(_)}}return o}function Cx(){const n=new Ut;n.position.x=ll;const t=new G(new zt(14,10),et(15328991,{roughness:.4}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);for(let y=-7;y<8;y++){const x=new G(new zt(.015,10),et(13617856));x.rotation.x=-Math.PI/2,x.position.set(y*.8,.002,0),n.add(x)}const e=new G(new zt(14,6),et(16514040,{roughness:1}));e.position.set(0,3,-2.2),e.receiveShadow=!0,n.add(e);const i=new G(new Zt(14,.22,.05),et(1804874));i.position.set(0,2.95,-2.17),n.add(i);const s=new G(new Zt(14,.08,.05),et(15764004));s.position.set(0,2.78,-2.17),n.add(s);const a=new G(new zt(2.4,.6),new se({map:Tx()}));a.position.set(.2,3.5,-2.14),n.add(a);for(const y of[-2.2,.2,2.6]){const x=new G(new Zt(1.6,.05,.18),new se({color:16777215}));x.position.set(y,3.9,-.4),n.add(x)}const o=new ia(15924223,3.2,8,1.4);o.position.set(.2,3.4,.2),n.add(o);const r=new Ut;r.position.set(-2.3,0,-1.95);const c=new G(new Zt(1.7,2.3,.5),et(14474456,{roughness:.5}));c.position.y=1.15,r.add(c);const l=new G(new zt(1.5,2.1),new se({map:Ax()}));l.position.set(0,1.15,.26),r.add(l);const u=new G(new zt(1.5,2.1),new se({color:16777215,transparent:!0,opacity:.12}));u.position.set(0,1.15,.27),r.add(u),n.add(r);const h=[15224890,15909424,3837928,4700266,15764004,11557584,16777215],m=Lh(1.4,1.9,.4,4,h,0);m.position.set(.6,0,-1.95),n.add(m);const p=Lh(1.4,1.9,.4,4,h,3);p.position.set(2.1,0,-1.95),n.add(p);const g=new G(new Zt(3.6,1,.9),et(16053488,{roughness:.4}));g.position.set(0,.5,0),g.castShadow=g.receiveShadow=!0,n.add(g);const _=new G(new Zt(3.62,.12,.92),et(1804874));_.position.set(0,.5,0),n.add(_);const d=new G(new Zt(3.7,.08,1),et(4868682,{roughness:.3}));d.position.set(0,1.04,0),d.receiveShadow=!0,d.castShadow=!0,n.add(d);const f=new Ut;f.position.set(-1,1.08,-.1);const S=new G(new Zt(.5,.22,.4),et(2960685));S.position.y=.11,S.castShadow=!0,f.add(S);const v=new G(new Zt(.4,.26,.04),et(2960685));v.position.set(0,.35,-.1),v.rotation.x=-.25,f.add(v);const b=new G(new zt(.34,.2),new se({map:Rx()}));b.position.set(0,.35,-.077),b.rotation.x=-.25,b.rotation.y=Math.PI,f.add(b),n.add(f);const P=new Ut;P.position.set(1.2,1.08,.12);const R=new G(new Zt(.9,.3,.45),et(16053488));R.position.y=.15,P.add(R);const T=new G(new Zt(.86,.22,.41),new Jn({color:13625845,transparent:!0,opacity:.45,roughness:.1}));T.position.y=.41,P.add(T),[14263361,15918784,12085810,14263361].forEach((y,x)=>{const D=new G(new Ve(.07,10,8),et(y));D.position.set(-.3+x*.2,.36,0),P.add(D)}),n.add(P);const U=new G(new Zt(.38,.2,.28),et(15224890,{roughness:.6}));U.position.set(.3,1.18,.3),n.add(U);const q=new G(new zt(2.2,.9),et(1804874));return q.rotation.x=-Math.PI/2,q.position.set(1.1,.004,1.4),n.add(q),n}const ul=120;function rr(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new vi(i);return s.colorSpace=He,s}const fn=(n,t,e,i,s)=>new G(new Zt(n,t,e),et(i,s)),Sa=(n,t,e,i,s,a=16)=>new G(new Ae(n,t,e,a),et(i,s));function Px(){return rr(384,256,(n,t,e)=>{n.fillStyle="#3b2a1e",n.fillRect(0,0,t,e);for(let i=0;i<4;i++)for(let s=0;s<6;s++){const a=8+s*62,o=8+i*60;n.fillStyle="#241810",n.fillRect(a,o,54,52),n.fillStyle="#e0b84a",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText(`${i+2}0${s+1}`,a+27,o+16),(i*6+s)%3!==0&&(n.fillRect(a+22,o+24,10,22),n.beginPath(),n.arc(a+27,o+24,8,0,7),n.fill())}})}function Lx(){return rr(512,128,(n,t,e)=>{n.fillStyle="#1d3b5a",n.fillRect(0,0,t,e),n.strokeStyle="#e0b84a",n.lineWidth=6,n.strokeRect(6,6,t-12,e-12),n.fillStyle="#f5e6a8",n.font="bold 60px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("ホテル ねこ",t/2,e/2)})}function kx(){return rr(128,128,(n,t,e)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,60,0,7),n.fill(),n.strokeStyle="#333",n.lineWidth=6,n.stroke(),n.lineWidth=5,n.beginPath(),n.moveTo(64,64),n.lineTo(64,24),n.moveTo(64,64),n.lineTo(92,74),n.stroke()})}function Ix(){const n=new Ut;n.position.x=ul;const t=rr(128,128,(I,O,L)=>{I.fillStyle="#efe7d8",I.fillRect(0,0,O,L),I.fillStyle="#d6c8ad",I.fillRect(0,0,O/2,L/2),I.fillRect(O/2,L/2,O/2,L/2)});t.wrapS=t.wrapT=Qs,t.repeat.set(10,7);const e=new G(new zt(14,10),new Jn({map:t,roughness:.3}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,n.add(e);const i=new G(new zt(14,6),et(15853782,{roughness:1}));i.position.set(0,3,-2.2),i.receiveShadow=!0,n.add(i);const s=fn(14,1.1,.05,7031346);s.position.set(0,.55,-2.17),n.add(s);const a=fn(14,.05,.07,13214282);a.position.set(0,1.12,-2.14),n.add(a);const o=new G(new zt(2.4,.6),new se({map:Lx()}));o.position.set(.2,3.35,-2.13),n.add(o);const r=new G(new zt(1.8,1.2),new se({map:Px()}));r.position.set(1.55,2.1,-2.12),n.add(r);const c=new G(new zt(.5,.5),new se({map:kx(),transparent:!0}));c.position.set(-1,2.7,-2.12),n.add(c);const l=fn(1.2,2.2,.08,12105912,{roughness:.25,metalness:.5});l.position.set(-2.8,1.1,-2.12),n.add(l);const u=fn(.02,2.2,.09,5592405);u.position.set(-2.8,1.1,-2.11),n.add(u);const h=Sa(.04,.04,.02,16757575,{emissive:16757575,emissiveIntensity:.6},10);h.rotation.x=Math.PI/2,h.position.set(-2,1.1,-2.1),n.add(h);for(const I of[-1.5,1.8]){const O=Sa(.008,.008,.8,1118481,{},6);O.position.set(I,3.6,-.6),n.add(O);const L=new G(new Ve(.2,16,12),new se({color:16773568}));L.position.set(I,3.15,-.6),n.add(L)}const m=new ia(16771520,3,9,1.4);m.position.set(.2,3.4,.4),n.add(m);const p=fn(3.6,1,.9,7031346,{roughness:.5});p.position.set(0,.5,0),p.castShadow=p.receiveShadow=!0,n.add(p);const g=fn(3.62,.08,.92,13214282);g.position.set(0,.88,0),n.add(g);const _=fn(3.7,.08,1,15722456,{roughness:.25});_.position.set(0,1.04,0),_.castShadow=_.receiveShadow=!0,n.add(_);const d=new G(new Ve(.08,14,10,0,Math.PI*2,0,Math.PI/2),et(13214282,{metalness:.6,roughness:.3}));d.position.set(-.8,1.08,.25),n.add(d);const f=Sa(.015,.015,.04,2236962,{},8);f.position.set(-.8,1.17,.25),n.add(f);const S=fn(.38,.26,.03,2236962);S.position.set(1.2,1.28,-.1),S.rotation.x=-.15,n.add(S);const v=fn(.12,.1,.1,2236962);v.position.set(1.2,1.13,-.12),n.add(v);const b=fn(.3,.03,.22,1915738);b.position.set(.4,1.1,.25),n.add(b);const P=new Ut;P.position.set(2.7,0,.9);const R=Sa(.015,.015,1.1,13214282,{metalness:.6},6);for(const[I,O]of[[-.3,-.2],[.3,-.2],[-.3,.2],[.3,.2]]){const L=R.clone();L.position.set(I,.55,O),P.add(L)}const T=fn(.7,.04,.5,13214282,{metalness:.6});T.position.y=.12,P.add(T);const U=fn(.4,.3,.2,12597547);U.position.set(-.1,.29,0),P.add(U);const q=fn(.3,.22,.18,3108789);q.position.set(.18,.25,.02),P.add(q),n.add(P);const y=Sa(.22,.17,.4,11887930);y.position.set(-3.3,.2,-1.6),n.add(y);for(let I=0;I<6;I++){const O=new G(new Ve(.2,10,8),et(4164170));O.position.set(-3.3+Math.sin(I*1.1)*.2,.7+I*.12,-1.6+Math.cos(I*1.1)*.12),O.scale.y=1.5,n.add(O)}const x=fn(1.5,.4,.6,8007226);x.position.set(-2.4,.2,1.4),n.add(x);const D=fn(1.5,.5,.15,8007226);D.position.set(-2.4,.55,1.1),n.add(D);const N=new G(new zt(3.2,1.4),et(8007226,{roughness:1}));N.rotation.x=-Math.PI/2,N.position.set(.1,.005,1.5),n.add(N);const B=new G(new zt(3,1.2),et(13214282,{roughness:1}));return B.rotation.x=-Math.PI/2,B.position.set(.1,.006,1.5),B.scale.set(.92,.8,1),n.add(B),n}const hl=-40,dl=-80,he=(n,t,e,i,s)=>{const a=new G(new Zt(n,t,e),typeof i=="number"?et(i,s):i);return a.castShadow=a.receiveShadow=!0,a},ei='"Noto Sans JP","Yu Gothic",sans-serif';function sa(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new vi(i);return s.colorSpace=He,s}function fl(n,t=""){return sa(256,192,(e,i,s)=>{e.fillStyle="#12304a",e.fillRect(0,0,i,s),e.fillStyle="#4fd1c5",e.fillRect(0,0,i,36),e.fillStyle="#06222f",e.font=`bold 22px ${ei}`,e.textAlign="center",e.fillText("きっぷ 券売機",i/2,26),e.fillStyle="#fff",e.font=`bold 30px ${ei}`,e.fillText(n,i/2,100),e.fillStyle="#ffe680",e.font=`22px ${ei}`,e.fillText(t,i/2,148)})}function Dx(n,t,e){return sa(512,96,(i,s,a)=>{i.fillStyle="#1b3b66",i.fillRect(0,0,s,a),i.strokeStyle="#fff",i.lineWidth=4,i.strokeRect(4,4,s-8,a-8),i.fillStyle="#fff",i.font=`bold 38px ${ei}`,i.textAlign="center",i.fillText(n,100,62),i.fillText(t,256,62),i.fillText(e,412,62)})}function Qd(n,t){return sa(160,256,(e,i,s)=>{e.fillStyle="#1b3b66",e.fillRect(0,0,i,s),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(4,4,i-8,s-8),e.fillStyle="#fff",e.textAlign="center",e.font=`bold 92px ${ei}`,e.fillText(String(n),i/2,100),e.font=`bold 34px ${ei}`,e.fillText("番線",i/2,146),e.font=`22px ${ei}`,e.fillStyle="#ffe680",t.slice(0,3).forEach((a,o)=>e.fillText(a,i/2,188+o*26))})}function tf(n,t,e){return sa(256,64,(i,s,a)=>{i.fillStyle="#10151c",i.fillRect(0,0,s,a),i.fillStyle=e,i.fillRect(6,8,74,48),i.fillStyle="#fff",i.font=`bold 24px ${ei}`,i.textAlign="center",i.fillText(t,43,40),i.fillStyle="#ffd35c",i.font=`bold 34px ${ei}`,i.textAlign="left",i.fillText(`${n} 行き`,92,44)})}function Ux(){const n=new Ut,t=he(.3,.42,.14,14242639);t.position.y=.26,n.add(t);const e=he(.03,.2,.03,3355443);e.position.set(0,.57,0),n.add(e);for(const i of[-1,1]){const s=he(.05,.05,.05,2236962);s.position.set(i*.1,.03,0),n.add(s)}return n}function Nx(){const n=new Ut,t=new G(new Ae(.3,.32,.1,20),et(1784678)),e=new G(new Ae(.28,.3,.1,20),et(2379916));e.position.y=.09;const i=he(.34,.02,.16,1057599);i.position.set(0,-.03,.3);const s=he(.08,.06,.02,16106818);return s.position.set(0,.04,.31),n.add(t,e,i,s),n.position.set(0,.28,0),n}function Ox(){const n=new Ut;n.position.x=hl;const t=new G(new zt(14,10),et(14275788,{roughness:.8}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);for(let L=-6;L<7;L++){const F=new G(new zt(.02,10),et(12433325));F.rotation.x=-Math.PI/2,F.position.set(L,.002,0),n.add(F)}const e=new G(new zt(14,6),et(15331058,{roughness:1}));e.position.set(0,3,-2.3),n.add(e);const i=he(14,.9,.05,3107496);i.position.set(0,.45,-2.27),n.add(i);for(const L of[-3,-1,1,3]){const F=he(1.2,.05,.25,new se({color:16776168}));F.position.set(L,3.6,-.6),n.add(F)}const s=new G(new zt(3.4,.64),new se({map:Dx("← 1番線","2番線 ↑","3番線 →")}));s.position.set(-.4,3.05,-1.9),n.add(s);const a=new G(new zt(1.5,.95),new se({map:sa(240,152,(L,F,rt)=>{L.fillStyle="#f4f1e6",L.fillRect(0,0,F,rt),L.strokeStyle="#2f6aa8",L.lineWidth=8,L.beginPath(),L.moveTo(20,100),L.lineTo(90,60),L.lineTo(150,90),L.lineTo(220,40),L.stroke(),L.strokeStyle="#e0763a",L.beginPath(),L.moveTo(30,30),L.lineTo(110,70),L.lineTo(200,120),L.stroke(),L.fillStyle="#fff",L.strokeStyle="#222",L.lineWidth=3,[[90,60],[150,90],[110,70],[20,100],[220,40]].forEach(([ht,dt])=>{L.beginPath(),L.arc(ht,dt,7,0,7),L.fill(),L.stroke()}),L.fillStyle="#222",L.font=`bold 18px ${ei}`,L.fillText("路線図",8,20)})}));a.position.set(-2.2,2,-2.22),n.add(a);const o=new G(new Ii(.28,32),new se({map:sa(128,128,(L,F)=>{L.fillStyle="#fff",L.beginPath(),L.arc(64,64,62,0,7),L.fill(),L.strokeStyle="#222",L.lineWidth=6,L.stroke(),L.lineWidth=6,L.beginPath(),L.moveTo(64,64),L.lineTo(64,28),L.stroke(),L.lineWidth=4,L.beginPath(),L.moveTo(64,64),L.lineTo(92,74),L.stroke()})}));o.position.set(2.7,2.7,-2.22),n.add(o);const r=new Ut;r.position.set(1.5,0,-1.5);const c=he(.95,1.55,.5,4018022);c.position.y=.78,r.add(c);const l=he(1,.1,.56,2766407);l.position.y=1.58,r.add(l);const u=new G(new zt(.62,.46),new se({map:fl("行き先を えらぶ")}));u.position.set(0,1.15,.255),u.rotation.x=-.12,r.add(u);for(let L=0;L<3;L++)for(let F=0;F<2;F++){const rt=he(.18,.1,.04,[5231045,16106818,14710330][L]);rt.position.set(-.24+L*.24,.62-F*.15,.26),r.add(rt)}const h=he(.4,.07,.04,16106818);h.position.set(0,.28,.26),r.add(h);const m=he(.12,.12,.04,2236962);m.position.set(.3,.42,.26),r.add(m),n.add(r);const p=he(.95,1.55,.5,4018022);p.position.set(2.7,.78,-1.5),n.add(p);const g=new G(new zt(.62,.46),new se({map:fl("ICカード","チャージ")}));g.position.set(2.7,1.15,-1.245),g.rotation.x=-.12,n.add(g);for(const L of[-1.3,-2.1]){const F=he(.28,1,1,13620956);F.position.set(L,.5,-.9),n.add(F);const rt=he(.12,.05,.12,4054148);rt.position.set(L,1.03,-.6),n.add(rt);const ht=he(.02,.4,.4,4886754,{transparent:!0,opacity:.7});ht.position.set(L+.2,.7,-.9),n.add(ht)}const _=new G(new Ae(.2,.15,.3,14),et(9132604));_.position.set(-3.2,.15,-1.5),_.castShadow=!0,n.add(_);const d=new G(new Ve(.34,14,10),et(4886332));d.position.set(-3.2,.62,-1.5),d.castShadow=!0,n.add(d);const f=new Ut;f.position.x=dl;const S=new G(new zt(24,7),et(12040636,{roughness:.9}));S.rotation.x=-Math.PI/2,S.position.z=3.2,S.receiveShadow=!0,f.add(S);const v=he(24,.35,.2,9409174);v.position.set(0,-.12,-.3),f.add(v);const b=he(24,.02,.32,15909424);b.position.set(0,.012,.05),f.add(b);const P=new G(new zt(24,4),et(5920336,{roughness:1}));P.rotation.x=-Math.PI/2,P.position.set(0,-.4,-2.3),f.add(P);for(const L of[-1.6,-2.4]){const F=he(24,.06,.06,10133670);F.position.set(0,-.32,L),f.add(F)}for(let L=-11;L<12;L++){const F=he(.14,.05,1.2,7232068);F.position.set(L,-.36,-2),f.add(F)}[[-6,3,2.6,10466248],[-3,4.4,3.4,11846868],[0,3.4,2.2,9414077],[3.5,5,3,11124176],[7,3.6,2.8,10006214]].forEach(([L,F,rt,ht])=>{const dt=he(rt,F,1.2,ht,{roughness:1});dt.position.set(L,F/2-.4,-6),f.add(dt)});const R=he(16,.15,5.2,11187132);R.position.set(0,3.7,1),f.add(R);for(const L of[-3.2,3.6]){const F=he(.22,3.7,.22,9147548);F.position.set(L,1.85,.7),f.add(F)}const T=new G(new zt(.6,.96),new se({map:Qd(1,[])}));T.position.set(-3.2,2.4,.83),f.add(T);for(const L of[-3.6,0,3.6]){const F=he(1.2,.05,.25,new se({color:16776168}));F.position.set(L,3.58,1),f.add(F)}const U=he(1.4,.08,.4,8014378);U.position.set(1.6,.45,2.6),f.add(U);for(const L of[1,2.2]){const F=he(.08,.45,.35,4473924);F.position.set(L,.22,2.6),f.add(F)}const q=new Ut;q.position.set(16,0,-1.9);const y=he(8,2.1,1.5,15265266);y.position.y=1.2,q.add(y);const x=he(8.02,.22,1.52,3120708);x.position.y=.85,q.add(x);const D=he(7.8,.3,1.3,3817285);D.position.y=.1,q.add(D);for(let L=0;L<6;L++){if(L===2||L===3)continue;const F=he(.9,.7,.04,2638428,{roughness:.2});F.position.set(-3.3+L*1.3,1.55,.77),q.add(F)}const N=he(1.2,1.6,.05,13226457);N.position.set(-.7,1,.77),q.add(N);const B=he(1.2,1.6,.05,13226457);B.position.set(.7,1,.77),q.add(B);const I=new G(new zt(1.8,.45),new se({map:tf("","","#2f9e44")}));I.position.set(-2.8,2,.775),q.add(I),f.add(q);const O=Ux();return{eki:n,pf:f,machineScreen:u,pfSign:T,train:q,destBoard:I,suit:O}}const Bs=40;class Fx{constructor(t){this.canvas=t,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.dprMax=Math.min(window.devicePixelRatio||1,this.mobile?1.5:2),this.renderer=new Fv({canvas:t,antialias:!(this.mobile&&window.devicePixelRatio>=2),powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dprMax),this.renderer.outputColorSpace=He,this.renderer.toneMapping=qh,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.mobile?bl:$h,this.quality=2,this.perfN=0,this.perfT=0,this.perfCool=3,this.trauma=0,this.fovKick=0,this.baseFov=42,this.reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,this.shakeOn=!0,this.springs=[],this._v=new k,this.scene=new Bv,this.scene.background=new oe(16180168),this.scene.fog=new Ul(16180168,12,30),this.camera=new kn(42,1,.1,100),this.camPos=new k,this.camLook=new k,this.camTargetPos=new k,this.camTargetLook=new k,this.particles=[],this.tweens=[],this.anchors=[],this.clock=new Ty,this.onCatTap=null,this.raycaster=new Ay,this.lights(),this.buildKitchen(),this.buildRestaurant(),this.buildEkiScene(),this.kon=Cx(),this.scene.add(this.kon),this.hotel=Ix(),this.scene.add(this.hotel),this.stage="kitchen",this.cat=new Cy,this.cat.root.position.set(-.35,0,-.6),this.kitchen.add(this.cat.root),this.texSteam=Ph("rgba(255,255,255,0.9)"),this.texSpark=Ph("#ffe680",!1),this.texHeart=new uh().load(Vo("ui_heart")),this.texCoin=new uh().load(Vo("ui_coin")),this.texHeart.colorSpace=this.texCoin.colorSpace=He,this.steamOn=null,this.setView("kitchen",!0),this.resize(),window.addEventListener("resize",()=>this.resize()),t.addEventListener("pointerdown",e=>this.tap(e)),this.renderer.setAnimationLoop(()=>this.frame()),document.addEventListener("visibilitychange",()=>{document.hidden?this.renderer.setAnimationLoop(null):(this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.frame()))})}lights(){const t=new by(16774368,9071184,1.1);this.scene.add(t);const e=new ph(16770752,2);e.position.set(3,6,4),e.castShadow=!0,e.shadow.mapSize.set(this.mobile?512:1024,this.mobile?512:1024),e.shadow.camera.left=-4,e.shadow.camera.right=4,e.shadow.camera.top=4,e.shadow.camera.bottom=-2,e.shadow.bias=-5e-4,e.shadow.radius=4,this.sun=e,this.scene.add(e,e.target);const i=new ph(12638463,.5);i.position.set(-4,3,2),this.scene.add(i)}buildKitchen(){const t=new Ut;this.kitchen=t,this.scene.add(t);const e=t.children.length,i=new G(new zt(14,10),et(13016173,{roughness:.9}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);for(let T=-6;T<7;T++){const U=new G(new zt(.02,10),et(10779730));U.rotation.x=-Math.PI/2,U.position.set(T*.6,.002,0),t.add(U)}const s=new G(new zt(14,6),et(16247506,{roughness:1}));s.position.set(0,3,-2.2),s.receiveShadow=!0,t.add(s);const a=new G(new Zt(14,1,.05),et(9132604));a.position.set(0,.5,-2.17),t.add(a);const o=new G(new zt(1.4,1),new se({map:this.skyTexture()}));o.position.set(1.4,2.4,-2.14),t.add(o);const r=new G(new Zt(1.5,1.1,.04),et(7029286));r.position.set(1.4,2.4,-2.17),t.add(r);const c=new G(new Zt(.04,1,.06),et(7029286));c.position.set(1.4,2.4,-2.1),t.add(c);const l=new G(new Zt(1.4,.04,.06),et(7029286));l.position.set(1.4,2.4,-2.1),t.add(l),this.menuBoard=new G(new zt(1.2,.9),new se({map:this.menuTexture([])})),this.menuBoard.position.set(-1.3,2.45,-2.17),t.add(this.menuBoard);const u=new G(new Zt(1.8,.05,.3),et(9132604));u.position.set(-.2,1.75,-2.05),u.castShadow=!0,t.add(u);const h=[14263361,11037490,3807756,16115368,16777215,7127626];for(let T=0;T<6;T++){const U=new G(new Ae(.07,.07,.16+T%2*.06,14),et(h[T],{roughness:.3}));U.position.set(-.95+T*.22,1.86+T%2*.03,-2),U.castShadow=!0,t.add(U)}const m=new G(new us(.3,.25,24,1,!0),et(2894892,{side:mn}));m.position.set(-.3,3,-.4),t.add(m);const p=new G(new Ve(.08),new se({color:16773568}));p.position.set(-.3,2.88,-.4),t.add(p);const g=new ia(16766362,3,5,1.5);g.position.set(-.3,2.8,-.4),t.add(g),this.kitDecor=t.children.slice(e).filter(T=>!T.isLight);const _=new G(new Zt(3.6,1,.9),et(7226409,{roughness:.7}));_.position.set(0,.5,0),_.castShadow=_.receiveShadow=!0,t.add(_);const d=new G(new Zt(3.7,.08,1),et(14730138,{roughness:.5}));d.position.set(0,1.04,0),d.receiveShadow=!0,d.castShadow=!0,t.add(d),this.counterY=1.08,this.kCounter=_,this.kTop=d,this.themes={},this.theme="home";const f=new G(new Zt(.6,.05,.5),et(3355443));f.position.set(-1.1,this.counterY+.02,-.1),t.add(f);const S=new G(new cn(.15,.02,6,24),et(1118481));S.rotation.x=Math.PI/2,S.position.set(-1.1,this.counterY+.05,-.1),t.add(S),this.flame=new G(new cn(.14,.02,6,24),new se({color:4891647})),this.flame.rotation.x=Math.PI/2,this.flame.position.set(-1.1,this.counterY+.07,-.1),this.flame.visible=!1,t.add(this.flame),this.stations={};const v=_x();v.position.set(.05,this.counterY,.05),t.add(v);const b=vx();b.position.set(-1.1,this.counterY+.05,-.1),t.add(b);const P=yx();P.position.set(-1.1,this.counterY+.05,-.1),P.visible=!1,t.add(P);const R=fx();R.position.set(-1.1,this.counterY+.05,-.1),R.visible=!1,t.add(R),this.stations={board:v,pot:b,pan:P,microwave:R},this.workItems=new Ut,t.add(this.workItems),this.servePos=new k(.75,this.counterY,.25),this.customerPos=new k(1.1,0,1),this.customerSpawn=new k(3.5,0,1.6),this.decoSlots={deco_lantern:[new k(1.4,2.9,-.6),t],deco_noren:[new k(-.2,3.35,-2.1),t],deco_bonsai:[new k(1.55,this.counterY,-.25),t],deco_maneki:[new k(.3,1.78,-2),t]},this.decoObjs={}}buildRestaurant(){const t=new Ut;t.position.x=Bs,this.rest=t,this.scene.add(t);const e=new G(new zt(10,10),et(12165754,{roughness:1}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let o=-4;o<5;o++){const r=new G(new zt(.03,10),et(7035450));r.rotation.x=-Math.PI/2,r.position.set(o*.9,.002,0),t.add(r)}const i=new G(new zt(10,6),et(15721156,{roughness:1}));i.position.set(0,3,-2.5),t.add(i);for(let o=-5;o<=5;o++){const r=new G(new Zt(.08,6,.06),et(5978654));r.position.set(o*.9,3,-2.45),t.add(r)}["おにぎり","味噌汁","親子丼","ラーメン","ビール"].forEach((o,r)=>{const c=new G(new zt(.28,.9),new se({map:this.tagTexture(o)}));c.position.set(-1.2+r*.4,2.6,-2.4),t.add(c)});for(const o of[-1.8,1.8]){const r=Ch("deco_lantern");r.position.set(o,2.6,-1.8),t.add(r)}const a=new G(new Zt(1.8,.08,1.1),et(8014378,{roughness:.5}));a.position.set(0,.75,.3),a.castShadow=a.receiveShadow=!0,t.add(a);for(const[o,r]of[[-.8,-.15],[.8,-.15],[-.8,.75],[.8,.75]]){const c=new G(new Zt(.08,.75,.08),et(5978654));c.position.set(o,.375,r),t.add(c)}this.tableY=.79,this.tableItems=new Ut,t.add(this.tableItems),this.restCatPos=new k(-.95,0,-.55)}buildEkiScene(){const t=Ox();this.eki=t.eki,this.pf=t.pf,this.ekiScreen_=t.machineScreen,this.pfSign=t.pfSign,this.train=t.train,this.trainBoard=t.destBoard,this.suitcase=t.suit,this.scene.add(t.eki,t.pf),this.ekiCatPos=new k(.45,0,-.7),this.pfCatPos=new k(-.6,0,.7),this.ekiStaffPos=new k(-1.7,0,-1.7),this.pfStaffPos=new k(1.3,0,.8)}setMachine(t,e=""){var s;const i=this.ekiScreen_.material;(s=i.map)==null||s.dispose(),i.map=fl(t,e),i.needsUpdate=!0}setPlatform(t,e=[]){var s;const i=this.pfSign.material;(s=i.map)==null||s.dispose(),i.map=Qd(t,e),i.needsUpdate=!0}async ekiStaffIn(t,e="eki",i=!0){this.customerOut(!0);const s=zo(t);return i&&s.userData.head.add(Nx()),s.position.copy(e==="pf"?this.pfStaffPos:this.ekiStaffPos),s.rotation.y=e==="pf"?-1.1:.7,s.scale.setScalar(.01),(e==="pf"?this.pf:this.eki).add(s),this.customer=s,this.popIn(s),s}async hotelStaffIn(t,e=!1){this.customerOut(!0);const i=zo(t);return i.position.set(e?-.6:.55,0,e?1.15:-.75),i.rotation.y=e?2.7:.25,i.scale.setScalar(.01),this.hotel.add(i),this.customer=i,this.popIn(i),i}async trainArrive(t,e,i="#2f9e44"){var a;const s=this.trainBoard.material;(a=s.map)==null||a.dispose(),s.map=tf(t,e,i),s.needsUpdate=!0,this.train.position.x=16,await this.tween(this.train.position,{x:0},2.4),this.shake(.15)}async trainLeave(){await this.tween(this.train.position,{x:-18},2.2,null,"in"),this.train.position.x=16}skyTexture(){const t=document.createElement("canvas");t.width=128,t.height=96;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,96);i.addColorStop(0,"#8fd3ff"),i.addColorStop(1,"#ffe3b0"),e.fillStyle=i,e.fillRect(0,0,128,96),e.fillStyle="#ffffffcc",[[30,30,14],[44,26,12],[90,40,10],[100,36,8]].forEach(([a,o,r])=>{e.beginPath(),e.arc(a,o,r,0,7),e.fill()}),e.fillStyle="#7a9a7a",e.beginPath(),e.moveTo(0,96),e.lineTo(40,60),e.lineTo(70,80),e.lineTo(100,55),e.lineTo(128,75),e.lineTo(128,96),e.fill();const s=new vi(t);return s.colorSpace=He,s}tagTexture(t){const e=document.createElement("canvas");e.width=80,e.height=256;const i=e.getContext("2d");i.fillStyle="#f3e3c0",i.fillRect(0,0,80,256),i.strokeStyle="#5b3a1e",i.lineWidth=6,i.strokeRect(3,3,74,250),i.fillStyle="#2a1a10",i.font='bold 38px "Noto Serif JP","Yu Mincho",serif',i.textAlign="center";const s=[...t],a=Math.min(48,220/s.length);s.forEach((r,c)=>i.fillText(r==="ー"?"｜":r,40,44+c*a));const o=new vi(e);return o.colorSpace=He,o}menuTexture(t){const e=document.createElement("canvas");e.width=320,e.height=240;const i=e.getContext("2d");i.fillStyle="#2f3b2f",i.fillRect(0,0,320,240),i.strokeStyle="#8b5a3c",i.lineWidth=14,i.strokeRect(0,0,320,240),i.fillStyle="#fff",i.font='bold 30px "Noto Sans JP",sans-serif',i.textAlign="center",i.fillText("お品書き",160,46),i.font='24px "Noto Sans JP",sans-serif',i.textAlign="left";const s=Math.min(36,145/Math.max(1,t.length));i.font=`${t.length>4?16:24}px "Noto Sans JP",sans-serif`,t.forEach((o,r)=>{i.fillStyle=o.locked?"#889":"#ffeeaa",i.fillText(o.locked?"？？？":o.name,22,82+r*s,205),i.textAlign="right",i.fillText(o.locked?"":o.price+"円",298,82+r*s),i.textAlign="left"});const a=new vi(e);return a.colorSpace=He,a}setMenu(t){var e;(e=this.menuBoard.material.map)==null||e.dispose(),this.menuBoard.material.map=this.menuTexture(t),this.menuBoard.material.needsUpdate=!0}setView(t,e=!1){var a;const i=this.view;this.view=t,t==="kitchen"&&(this.camTargetPos.set(.2,2.75,5),this.camTargetLook.set(.2,1.55,0)),t==="kon"&&(this.camTargetPos.set(ll+.2,2.75,5),this.camTargetLook.set(ll+.2,1.55,0)),t==="hotel"&&(this.camTargetPos.set(ul+.2,2.6,5),this.camTargetLook.set(ul+.1,1.45,0)),t==="cook"&&(this.camTargetPos.set(-.3,2.9,3.6),this.camTargetLook.set(-.4,1.35,-.1)),t==="serve"&&(this.camTargetPos.set(.6,2.5,4.2),this.camTargetLook.set(.5,1.4,.3)),t==="rest"&&(this.camTargetPos.set(Bs-.1,1.95,4),this.camTargetLook.set(Bs-.55,1.15,-.4)),t==="eki"&&(this.camTargetPos.set(hl+.5,2.1,4.4),this.camTargetLook.set(hl+.3,1.2,-.8)),t==="ekiPf"&&(this.camTargetPos.set(dl-.2,1.9,4.6),this.camTargetLook.set(dl-.2,1.2,-.8));const s=t==="eki"?14083826:t==="ekiPf"?12574965:t==="kon"?15004147:t==="hotel"?15721680:this.themeBg??16180168;this.scene.background.setHex(s),this.scene.fog.color.setHex(s),t==="restTable"&&(this.camTargetPos.set(Bs,2.75,3.1),this.camTargetLook.set(Bs,.75,.3)),this.fitAspect(),e?(this.camPos.copy(this.camTargetPos),this.camLook.copy(this.camTargetLook)):i!==t&&(this.fovKick=7),(a=this.onView)==null||a.call(this,t,e)}fitAspect(){const t=this.camera.aspect||.5;t<.9&&this.view==="cook"&&(this.camTargetPos.x+=.9,this.camTargetLook.x+=.9);const e=Math.max(this.view==="cook"?.45:0,(.9/t-1)*1.15),i=this.camTargetPos.clone().sub(this.camTargetLook);this.camTargetPos.copy(this.camTargetLook).add(i.multiplyScalar(1+e))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,e*.17,t,e),this.camera.updateProjectionMatrix(),this.setView(this.view||"kitchen",!0)}setTheme(t){["sushi","ramen","izakaya","cafe","dark"].includes(t)||(t="home"),this.theme=t;const e={sushi:xx,ramen:Mx,izakaya:bx,cafe:wx,dark:Ex};for(const s in e)t===s&&!this.themes[s]&&(this.themes[s]=e[s](),this.kitchen.add(this.themes[s])),this.themes[s]&&(this.themes[s].visible=t===s);this.kitDecor.forEach(s=>{s.visible=t==="home"});const i={home:[7226409,14730138],sushi:[12094034,15785136],ramen:[9116186,2829099],izakaya:[4861468,12094034],cafe:[3103302,15259056],dark:[2829099,4868682]}[t];this.kCounter.material.color.setHex(i[0]),this.kTop.material.color.setHex(i[1]),this.themeBg={home:16180168,sushi:15985884,ramen:2762018,izakaya:2759956,cafe:15984328,dark:1315354}[t],this.stage!=="kon"&&this.stage!=="hotel"&&!["eki","ekiPf"].includes(this.view)&&(this.scene.background.setHex(this.themeBg),this.scene.fog.color.setHex(this.themeBg))}catTo(t){this.stage=t==="kon"?"kon":t==="hotel"?"hotel":"kitchen",this.suitcase.visible=t==="eki"||t==="pf",t==="eki"||t==="pf"?((t==="eki"?this.eki:this.pf).add(this.cat.root),this.cat.root.position.copy(t==="eki"?this.ekiCatPos:this.pfCatPos),this.cat.root.rotation.y=t==="eki"?1.25:.9,this.cat.holding(null),this.suitcase.parent||this.cat.root.add(this.suitcase),this.suitcase.position.set(-.55,0,.1)):t==="hotel"?(this.hotel.add(this.cat.root),this.cat.root.position.set(-.6,0,1.15),this.cat.root.rotation.y=2.7,this.cat.holding(null),this.suitcase.visible=!0,this.suitcase.parent||this.cat.root.add(this.suitcase),this.suitcase.position.set(-.55,0,.1)):t==="kon"?(this.kon.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null)):t==="rest"?(this.rest.add(this.cat.root),this.cat.root.position.copy(this.restCatPos),this.cat.root.rotation.y=.6,this.cat.holding("pad")):(this.kitchen.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null))}catFace(t){const e={front:0,stove:-.6,board:.25,customer:.6}[t]??0;this.tween(this.cat.root.rotation,{y:e},.3);const i=t==="stove"?-.75:-.35;this.tween(this.cat.root.position,{x:i},.35)}useStation(t){this.stations.pot.visible=t!=="pan"&&t!=="microwave",this.stations.pan.visible=t==="pan",this.stations.microwave.visible=t==="microwave",this.station=t}clearWork(){this.workItems.clear(),this.stations.pot.userData.liquid.visible=!1,this.stations.pan.userData.liquid.visible=!1,this.flame.visible=!1,this.steamOn=null}placeIngredient(t,e,i){const s=mx(t),o=this.station==="board"?new k(.05,this.counterY+.04,.05):new k(.05,this.counterY+.04,.05);return s.position.copy(o).add(new k((e-(i-1)/2)*.17,0,e%2*.08-.04)),this.popIn(s),this.workItems.add(s),s}showProp(t){const e={miso_soup:12946250,ramen_boil:15983544,pan_simmer:12089914,oyako_egg:16237873};if(e[t]){const s=this.stations[this.station==="pan"?"pan":"pot"];s.userData.liquid.visible=!0,s.userData.liquid.material.color.setHex(e[t]),this.flame.visible=!0,this.steamOn=s,this.workItems.children.forEach(a=>this.tween(a.scale,{x:.01,y:.01,z:.01},.25));return}const i=gx(t);i.children.length&&(this.workItems.children.forEach(s=>this.tween(s.scale,{x:.01,y:.01,z:.01},.25)),i.position.set(.05,this.counterY+.04,.05),this.popIn(i),this.workItems.add(i))}heat(t){this.flame.visible=t,t&&(this.steamOn=this.stations[this.station==="pan"?"pan":"pot"])}microwaveLight(t){this.stations.microwave.userData.window.material.emissive.setHex(t?7160869:0)}styleDish(t,e){px(this.dish,t,e)}showDish(t){this.clearWork();const e=Rh(t);return e.position.copy(this.servePos).add(new k(-.7,0,-.15)),e.scale.setScalar(1.6),this.popIn(e,1.6),this.kitchen.add(e),this.dish=e,this.burst(e.position.clone().add(new k(0,.3,0)),this.texSpark,24,.08),setTimeout(()=>this.punch(e,-.18),350),e}slideDishToCustomer(){this.dish&&(this.tween(this.dish.position,{x:this.servePos.x,z:this.servePos.z+.1},.5),this.tween(this.dish.scale,{x:1.3,y:1.3,z:1.3},.5))}removeDish(){if(!this.dish)return;const t=this.dish;this.dish=null,this.tween(t.scale,{x:.01,y:.01,z:.01},.3).then(()=>{var e;return(e=t.parent)==null?void 0:e.remove(t)})}async customerIn(t){this.customerOut(!0);const e=zo(t);return e.position.copy(this.customerSpawn),e.rotation.y=-1.2,(this.stage==="kon"?this.kon:this.kitchen).add(e),this.customer=e,await this.walk(e,this.customerPos,1.1),this.punch(e,-.22),this.tween(e.rotation,{y:-.9},.3),e}async customerOut(t=!1){var i,s;const e=this.customer;if(e){if(this.customer=null,t){(i=e.parent)==null||i.remove(e);return}this.tween(e.rotation,{y:1.6},.3),await this.walk(e,this.customerSpawn.clone().add(new k(1,0,.5)),1),(s=e.parent)==null||s.remove(e)}}walk(t,e,i){const s=t.position.clone();return this.tween({k:0},{k:1},i,a=>{t.position.lerpVectors(s,e,a.k),t.position.y=Math.abs(Math.sin(a.k*Math.PI*6))*.06})}customerJump(){const t=this.customer;t&&(this.punch(t,.3),this.tween({k:0},{k:1},.6,e=>{t.position.y=Math.abs(Math.sin(e.k*Math.PI*2))*.25}).then(()=>this.punch(t,-.25)),this.shake(.25),this.burst(t.position.clone().add(new k(0,1.5,0)),this.texHeart,6,.05,.25))}coinsFromCustomer(){this.customer&&this.burst(this.customer.position.clone().add(new k(0,1.2,0)),this.texCoin,10,.06,.2)}setDeco(t){for(const e in this.decoSlots){const i=t.includes(e);if(i&&!this.decoObjs[e]){const s=Ch(e),[a,o]=this.decoSlots[e];s.position.copy(a),o.add(s),this.popIn(s),this.decoObjs[e]=s}else!i&&this.decoObjs[e]&&(this.decoObjs[e].parent.remove(this.decoObjs[e]),delete this.decoObjs[e])}}restClear(){this.tableItems.clear()}restServe(t,e){this.restClear(),t.forEach((i,s)=>{for(let a=0;a<e;a++){const o=Rh(i),r=(a-(e-1)/2)*.5+(s?.18:-.05);o.position.set(r,this.tableY,s?.25:.5),s&&o.scale.setScalar(1.1),this.popIn(o,o.scale.x),this.tableItems.add(o)}}),this.burst(new k(Bs,this.tableY+.4,.4),this.texSpark,20,.07)}shake(t=.3){!this.shakeOn||this.reduceMotion||(this.trauma=Math.min(1,this.trauma+t))}punch(t,e=.2){if(!t||this.reduceMotion)return;let i=this.springs.find(s=>s.obj===t);i||(i={obj:t,base:t.scale.clone(),x:0,v:0},this.springs.push(i)),i.v+=e*22}updateSprings(t){for(let e=this.springs.length-1;e>=0;e--){const i=this.springs[e];i.v+=(-180*i.x-12*i.v)*t,i.x+=i.v*t;const s=i.obj;if(Math.abs(i.x)<.001&&Math.abs(i.v)<.01){s.scale.copy(i.base),this.springs.splice(e,1);continue}s.scale.set(i.base.x*(1-i.x*.5),i.base.y*(1+i.x),i.base.z*(1-i.x*.5))}}perfWatch(t){if(t>.05||(this.perfT+=t,this.perfN++,this.perfN<90))return;const e=this.perfT/this.perfN;if(this.perfT=0,this.perfN=0,this.perfCool>0){this.perfCool--;return}e>.026&&this.quality>0&&(this.quality--,this.quality===1?(this.dprMax=Math.max(1,this.dprMax*.75),this.renderer.setPixelRatio(this.dprMax),this.resize()):(this.sun.castShadow=!1,this.renderer.shadowMap.enabled=!1,this.scene.traverse(i=>{i.material&&(i.material.needsUpdate=!0)})),this.perfCool=2)}burst(t,e,i=12,s=.08,a=.35){this.quality<2&&(i=Math.ceil(i/2)),i=Math.min(i,Math.max(0,70-this.particles.length));for(let o=0;o<i;o++){const r=new nh(new Zc({map:e,transparent:!0,depthWrite:!1}));r.position.copy(t),r.scale.setScalar(s*(1.5+Math.random())*(e===this.texSpark?1:2.5));const c=Math.random()*Math.PI*2;r.userData={v:new k(Math.cos(c)*a*Math.random()*2,.5+Math.random()*a*3,Math.sin(c)*a*Math.random()),life:1,g:-2},this.scene.add(r),this.particles.push(r)}}hearts(){const t=new k;this.cat.head.getWorldPosition(t),this.burst(t.add(new k(0,.4,0)),this.texHeart,4,.05,.15)}steamPuff(t){if(this.particles.length>60)return;const e=this._v;t.getWorldPosition(e);const i=new nh(new Zc({map:this.texSteam,transparent:!0,opacity:.5,depthWrite:!1}));i.position.copy(e).add(new k((Math.random()-.5)*.2,.25,(Math.random()-.5)*.2)),i.scale.setScalar(.15),i.userData={v:new k((Math.random()-.5)*.1,.4,0),life:1.4,g:0,grow:.25},this.scene.add(i),this.particles.push(i)}popIn(t,e=1){return t.scale.setScalar(.01),this.tween(t.scale,{x:e,y:e,z:e},.35,null,"back")}tween(t,e,i,s=null,a="out"){const o={};for(const r in e)o[r]=t[r];return new Promise(r=>this.tweens.push({obj:t,from:o,to:e,dur:i,t:0,onUpdate:s,ease:a,res:r}))}tap(t){const e=this.canvas.getBoundingClientRect(),i=new ft((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(i,this.camera),this.raycaster.intersectObject(this.cat.root,!0)[0]&&this.onCatTap&&this.onCatTap()}screenOf(t,e=0){const i=this._v;return t.getWorldPosition(i),i.y+=e,i.project(this.camera),{x:(i.x*.5+.5)*window.innerWidth,y:(-i.y*.5+.5)*window.innerHeight,behind:i.z>1}}anchor(t,e,i){this.anchors.push({el:t,getObj:e,offsetY:i})}unanchor(t){this.anchors=this.anchors.filter(e=>e.el!==t)}frame(){var a,o;const t=this.clock.getDelta(),e=wn()?0:Math.min(t,.05),i=1-Math.pow(.02,e);if(this.camPos.lerp(this.camTargetPos,i),this.camLook.lerp(this.camTargetLook,i),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.trauma>0){const r=this.trauma*this.trauma;this.camera.position.x+=(Math.random()-.5)*.16*r,this.camera.position.y+=(Math.random()-.5)*.16*r,this.camera.rotation.z+=(Math.random()-.5)*.035*r,this.trauma=Math.max(0,this.trauma-e*1.8)}this.fovKick>.01?(this.fovKick*=Math.pow(.004,e),this.camera.fov=this.baseFov+this.fovKick,this.camera.updateProjectionMatrix()):this.camera.fov!==this.baseFov&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()),this.sun.position.set(this.camLook.x+3,6,4),this.sun.target.position.set(this.camLook.x,0,0),this.cat.update(e),this.updateSprings(e),this.perfWatch(e);const s=this.clock.elapsedTime;this.customer&&(this.customer.userData.head.rotation.z=Math.sin(s*2)*.08,this.customer.userData.wave&&(this.customer.userData.wave.rotation.z=-.3+Math.sin(s*6)*.4)),(a=this.decoObjs.deco_maneki)!=null&&a.userData.wave&&(this.decoObjs.deco_maneki.userData.wave.rotation.z=-.3+Math.sin(s*4)*.4),this.decoObjs.deco_lantern&&(this.decoObjs.deco_lantern.rotation.z=Math.sin(s*.8)*.05),this.flame.visible&&this.flame.scale.setScalar(1+Math.sin(s*30)*.05),this.steamOn&&Math.random()<e*8&&this.steamPuff(this.steamOn);for(let r=this.tweens.length-1;r>=0;r--){const c=this.tweens[r];c.t+=e;let l=Math.min(c.t/c.dur,1);c.ease==="out"?l=1-Math.pow(1-l,3):c.ease==="back"&&(l=1+(1.70158+1)*Math.pow(l-1,3)+1.70158*Math.pow(l-1,2));for(const u in c.to)c.obj[u]=c.from[u]+(c.to[u]-c.from[u])*l;(o=c.onUpdate)==null||o.call(c,c.obj),c.t>=c.dur&&(this.tweens.splice(r,1),c.res())}for(let r=this.particles.length-1;r>=0;r--){const c=this.particles[r],l=c.userData;l.life-=e,l.v.y+=l.g*e,c.position.addScaledVector(l.v,e),l.grow&&c.scale.addScalar(l.grow*e),c.material.opacity=Math.max(0,Math.min(1,l.life))*(l.grow?.5:1),l.life<=0&&(this.scene.remove(c),c.material.dispose(),this.particles.splice(r,1))}if(this.anchors.length)for(const r of this.anchors){const c=r.getObj();if(!c){r.el.style.opacity=0;continue}const l=this.screenOf(c,r.offsetY),u=r.el.firstElementChild,h=12,m=document.querySelector("#hud.show"),p=document.querySelector("#taskbar.show"),g=Math.max((m==null?void 0:m.getBoundingClientRect().bottom)||0,(p==null?void 0:p.getBoundingClientRect().bottom)||0,h)+12,_=document.querySelector("#panel.show"),d=_==null?void 0:_.getBoundingClientRect(),f=innerWidth>innerHeight&&innerHeight<=500&&d&&!_.classList.contains("hub-panel"),S=f?d.left-h:innerWidth,v=d&&!f?d.top-12:innerHeight-h;u.style.maxWidth=`${Math.min(360,S-h*2)}px`,u.style.maxHeight=`${Math.max(44,v-g)}px`;const b=u.offsetWidth,P=u.offsetHeight,R=Math.max(b/2+h,Math.min(S-b/2-h,l.x)),T=Math.max(g+P,Math.min(v,l.y));u.style.setProperty("--tail-x",`${Math.max(16,Math.min(b-16,l.x-R+b/2))}px`),r.el.style.opacity=l.behind?0:1,r.el.style.transform=`translate(${R}px, ${T}px)`}this.renderer.render(this.scene,this.camera)}}const Wl=/([一-鿿々〆ヶ]+)\{([^}]+)\}/g;function Bx(n){return n.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Xe(n){return Bx(n).replace(/\^/g,"").replace(/ /g,"").replace(Wl,"<ruby>$1<rt>$2</rt></ruby>")}function zx(n){return n.replace(Wl,"$1").replace(/\^/g,"").replace(/ /g,"")}function jx(n,{forSpeech:t=!1}={}){let e=n.replace(Wl,"$2");return t&&(e=e.replace(/\^は/g,"わ").replace(/\^へ/g,"え")),e}function ef(n){return zx(n)}const Hx=96;function Vx(n){return n.replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-Hx))}const kh={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"o",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ゔ:"vu"},ic={ゃ:"a",ゅ:"u",ょ:"o"},Ih={a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"};function Gx(n){let t=Vx(jx(n)),e="";for(let i=0;i<t.length;i++){const s=t[i],a=t[i+1];if(s==="^"){const r=t[i+1];if(r==="は"){e+="wa",i++;continue}if(r==="へ"){e+="e",i++;continue}continue}if(s==="っ"){const r=kh[a];r&&(e+=r.startsWith("ch")?"t":r[0]);continue}if(s==="ー"){const r=e[e.length-1];Ih[r]&&(e=e.slice(0,-1)+Ih[r]);continue}let o=kh[s];if(o===void 0){e+=s==="、"?", ":s==="。"?". ":s==="？"?"?":s==="！"?"!":s;continue}if(ic[a]){const r=o.slice(0,-1);r==="sh"||r==="ch"||r==="j"?o=r+ic[a]:o=r+"y"+ic[a],i++}s==="ん"&&a&&/[あいうえおやゆよ]/.test(a)&&(o="n'"),e+=o}return e.replace(/\s+/g," ").trim()}function $l(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function nf(n,t){return`${t}_${$l(ef(n))}`}const sf="catcook_v1",pl={v:1,started:!1,level:1,xp:0,coins:0,served:0,shifts:0,firstDay:null,lastDay:null,streak:0,daysPlayed:0,lastGift:null,affection:0,lastPet:null,owned:["hat_chef"],wear:{hat:"hat_chef",neck:null},deco:[],stars:{},cooked:{},srs:{},restaurantDone:0,chapter:"home",chapterShifts:{},regularVisits:{},darkSecrets:{},darkRating:3,darkBest:0,settings:{furigana:!0,romaji:!0,yue:!0,subs:"show",bgm:!0,sfx:!0,shake:!0},jpLevel:null,lvStats:{},lvNudgeDismissed:-1,achievements:[]};let ye=Wx();function Wx(){try{const n=localStorage.getItem(sf);if(n)return af(structuredClone(pl),JSON.parse(n))}catch{}return structuredClone(pl)}function af(n,t){for(const e in t)t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&n[e]&&typeof n[e]=="object"?af(n[e],t[e]):n[e]=t[e];return n}function Re(){try{localStorage.setItem(sf,JSON.stringify(ye))}catch{}}function it(){return ye}function $x(){ye=structuredClone(pl),Re()}function aa(){const n=new Date;return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`}function Xx(n,t){const e=n.split("-").map(Number),i=t.split("-").map(Number),s=new Date(e[0],e[1]-1,e[2]),a=new Date(i[0],i[1]-1,i[2]);return Math.round((a-s)/864e5)}function qx(){const n=aa(),t={newDay:!1,streakBroken:!1,gift:0};return ye.firstDay||(ye.firstDay=n),ye.lastDay!==n&&(t.newDay=!0,ye.lastDay&&Xx(ye.lastDay,n)===1?ye.streak+=1:(ye.lastDay&&ye.streak>1&&(t.streakBroken=!0),ye.streak=1),ye.lastDay=n,ye.daysPlayed+=1),ye.lastGift!==n&&ye.started&&(t.gift=30+Math.min(ye.streak,7)*10,ye.lastGift=n,ye.coins+=t.gift),Re(),t}function Yx(){const n=new Date;return new Date(n.getFullYear(),n.getMonth(),n.getDate()+1)-n}const Dh=[0,30,80,160,270,420,620,880,1200,1600,2100];function ml(n){return Dh[Math.min(n,Dh.length-1)]??n*500}function zi(n){ye.xp+=n;let t=0;for(;ye.xp>=ml(ye.level);)ye.level++,t++;return Re(),t}const Kx=[0,2,10,60*12,60*24*2,60*24*5];function _n(n){ye.srs[n]||(ye.srs[n]={box:0,due:Date.now(),seen:0,right:0,wrong:0}),ye.srs[n].seen++,Re()}function we(n,t){const e=ye.srs[n]||(ye.srs[n]={box:0,due:0,seen:1,right:0,wrong:0});t?(e.box=Math.min(e.box+1,5),e.right++):(e.box=0,e.wrong++),e.due=Date.now()+Kx[e.box]*6e4,Re()}function of(n){var i;const t=Date.now(),e=n.map(s=>{const a=ye.srs[s];if(!a)return{id:s,s:50+Math.random()*10};const o=(t-a.due)/6e4;return{id:s,s:(o>=0?100+Math.min(o,60):-10)+(5-a.box)*8+a.wrong*3+Math.random()*10}});return e.sort((s,a)=>a.s-s.s),(i=e[0])==null?void 0:i.id}let Gt=null,zs,Ia,yi,jo;const sc=new Map;let Ys=null;const rf=.26,Jx=.08;let Xa=null,Ho=null;function Zx(n){Ho=n}function Qx(){if(Gt){Gt.state==="suspended"&&Gt.resume();return}Gt=new(window.AudioContext||window.webkitAudioContext),zs=Gt.createGain(),zs.gain.value=.9,zs.connect(Gt.destination),Ia=Gt.createGain(),Ia.gain.value=.5,Ia.connect(zs),yi=Gt.createGain(),yi.gain.value=0,yi.connect(zs),n1(),jo=Gt.createGain(),jo.gain.value=1,jo.connect(zs),o1(),document.addEventListener("visibilitychange",()=>{Gt&&(document.hidden?Gt.suspend():Gt.resume())})}async function cf(n){if(sc.has(n))return sc.get(n);const t=fetch(`./audio/${n}.mp3`).then(e=>{if(!e.ok)throw new Error("404");return e.arrayBuffer()}).then(e=>Gt.decodeAudioData(e)).catch(()=>null);return sc.set(n,t),t}function Da(n,t){return Gt?cf(nf(n,t)):Promise.resolve(null)}async function qe(n,t="word",e=1){if(!Gt)return;t1();const i=await cf(nf(n,t));if(i){const s=Gt.createBufferSource();return s.buffer=i,s.playbackRate.value=e,s.connect(jo),Uh(!0),s.start(),Ys=s,new Promise(a=>{s.onended=()=>{Uh(!1),Ys===s&&(Ys=null),a()}})}if("speechSynthesis"in window){const s=new SpeechSynthesisUtterance(ef(n));return s.lang="ja-JP",s.rate=.9*e,speechSynthesis.speak(s),new Promise(a=>{s.onend=a,setTimeout(a,4e3)})}}function t1(){if(Ys){try{Ys.stop()}catch{}Ys=null}"speechSynthesis"in window&&speechSynthesis.cancel()}function Uh(n){!yi||!it().settings.bgm||yi.gain.setTargetAtTime(n?Jx:rf,Gt.currentTime,.1)}function Ye(n,t,{type:e="sine",vol:i=.3,at:s=0,slide:a=0,out:o=null}={}){const r=Gt.currentTime+s,c=Gt.createOscillator(),l=Gt.createGain();c.type=e,c.frequency.setValueAtTime(n,r),a&&c.frequency.exponentialRampToValueAtTime(n*a,r+t),l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(i,r+.01),l.gain.exponentialRampToValueAtTime(.001,r+t),c.connect(l),l.connect(o||Ia),c.start(r),c.stop(r+t+.05)}function ac(n,{vol:t=.3,freq:e=2e3,q:i=1,at:s=0,type:a="bandpass"}={}){const o=Gt.currentTime+s,r=Math.floor(Gt.sampleRate*n),c=Gt.createBuffer(1,r,Gt.sampleRate),l=c.getChannelData(0);for(let p=0;p<r;p++)l[p]=(Math.random()*2-1)*(1-p/r);const u=Gt.createBufferSource();u.buffer=c;const h=Gt.createBiquadFilter();h.type=a,h.frequency.value=e,h.Q.value=i;const m=Gt.createGain();m.gain.value=t,u.connect(h),h.connect(m),m.connect(Ia),u.start(o)}function tt(n){if(Ho==null||Ho(n),!(!Gt||!it().settings.sfx))switch(n){case"tap":Ye(880,.08,{type:"triangle",vol:.2});break;case"good":Ye(784,.12,{type:"triangle"}),Ye(1175,.2,{type:"triangle",at:.08});break;case"perfect":[784,988,1175,1568].forEach((t,e)=>Ye(t,.18,{type:"triangle",vol:.25,at:e*.06}));break;case"bad":Ye(220,.25,{type:"square",vol:.12,slide:.7});break;case"coin":Ye(1319,.08,{type:"square",vol:.1}),Ye(1760,.25,{type:"square",vol:.1,at:.07});break;case"chop":ac(.08,{vol:.6,freq:3e3,q:.8}),Ye(140,.06,{vol:.3});break;case"pop":Ye(500,.1,{slide:2,vol:.25});break;case"bubble":Ye(300+Math.random()*300,.08,{slide:1.8,vol:.12});break;case"whoosh":ac(.3,{vol:.25,freq:800,q:.5});break;case"boil":for(let t=0;t<4;t++)Ye(200+Math.random()*200,.1,{slide:2,vol:.1,at:t*.07});break;case"level":[523,659,784,1047,1319,1568].forEach((t,e)=>Ye(t,.3,{type:"triangle",vol:.22,at:e*.09}));break;case"meow":Ye(700,.35,{type:"sawtooth",vol:.06,slide:1.4}),Ye(980,.3,{type:"sine",vol:.1,at:.15,slide:.6});break;case"purr":for(let t=0;t<10;t++)ac(.05,{vol:.25,freq:120,q:2,at:t*.07,type:"lowpass"});break;case"ding":Ye(2093,.9,{type:"sine",vol:.22}),Ye(2637,.7,{type:"sine",vol:.12,at:.02});break;case"door":Ye(1568,.5,{vol:.12}),Ye(1975,.6,{vol:.1,at:.15});break;case"rare":[1047,1319,1568,2093,1568,2093].forEach((t,e)=>Ye(t,.25,{type:"triangle",vol:.2,at:e*.07}));break}}const ba=n=>440*Math.pow(2,(n-69)/12),e1=[{root:38,chord:[62,66,69,73],mel:[74,76,78,81,73]},{root:35,chord:[59,62,66,69],mel:[74,76,78,81,71]},{root:43,chord:[59,62,67,71],mel:[74,71,76,78,79]},{root:45,chord:[62,64,67,69],mel:[76,74,69,81,79]}],lf={kitchen:{bpm:78,arp:.55,mel:.5,perc:0,pad:1,oct:0},cook:{bpm:102,arp:.8,mel:.55,perc:1,pad:.6,oct:0},rest:{bpm:68,arp:.35,mel:.6,perc:0,pad:1.2,oct:0}};let Nh="kitchen",uf="kitchen",Zi=0,oc=0,Oh=[];function n1(){const n=Gt.createBiquadFilter();n.type="lowpass",n.frequency.value=3400,n.Q.value=.3;const t=Gt.createGain();t.gain.value=.85;const e=Gt.createConvolver(),i=Math.floor(Gt.sampleRate*1.8),s=Gt.createBuffer(2,i,Gt.sampleRate);for(let o=0;o<2;o++){const r=s.getChannelData(o);for(let c=0;c<i;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/i,2.6)}e.buffer=s;const a=Gt.createGain();a.gain.value=.35,n.connect(t),t.connect(yi),n.connect(e),e.connect(a),a.connect(yi),Xa=n}function Fh(n,t,e,i){for(const[s,a,o,r]of[[1,1,"triangle",e],[2,.25,"sine",e*.5],[4,.06,"sine",e*.2]]){const c=Gt.createOscillator(),l=Gt.createGain();c.type=o,c.frequency.value=n*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(i*a,t+.008),l.gain.exponentialRampToValueAtTime(5e-4,t+r),c.connect(l),l.connect(Xa),c.start(t),c.stop(t+r+.05)}}function i1(n,t,e,i){const s=Gt.createOscillator(),a=Gt.createGain();s.type="sine",s.frequency.value=n,s.detune.value=(Math.random()-.5)*8,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(i,t+e*.35),a.gain.linearRampToValueAtTime(5e-4,t+e),s.connect(a),a.connect(Xa),s.start(t),s.stop(t+e+.05)}function rc(n,t,e,i){const s=Gt.createOscillator(),a=Gt.createGain();s.type="sine",s.frequency.value=n,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(i,t+.02),a.gain.exponentialRampToValueAtTime(5e-4,t+e),s.connect(a),a.connect(Xa),s.start(t),s.stop(t+e+.05)}function s1(n,t,e=!1){const i=Gt.createOscillator(),s=Gt.createGain();i.type="sine",i.frequency.setValueAtTime(e?1500:1e3,n),i.frequency.exponentialRampToValueAtTime(e?900:600,n+.05),s.gain.setValueAtTime(t,n),s.gain.exponentialRampToValueAtTime(5e-4,n+.07),i.connect(s),s.connect(Xa),i.start(n),i.stop(n+.1)}function a1(n){const t=lf[Nh],e=30/t.bpm,i=Math.floor(oc/8)%4,s=oc%8,a=e1[i];if(s===0&&(Nh=uf,rc(ba(a.root),n,e*7,.55),a.chord.forEach((r,c)=>i1(ba(r-12),n+c*.03,e*8.5,.07*t.pad))),s===4&&rc(ba(a.root+7),n,e*3,.35),[0,2,3,5,6,7].includes(s)&&Math.random()<t.arp+(s===0?1:0)){const r=a.chord[(s*3+i)%a.chord.length];Fh(ba(r),n,e*4,.16)}if(s%2===0||s===3||s===7){let r=null;i%2===0?((Math.random()<t.mel||s===0)&&(r=a.mel[Math.floor(Math.random()*a.mel.length)]),Oh[s]=r):(r=Oh[s]??null,r!=null&&Math.random()<.2&&(r=a.mel[Math.floor(Math.random()*a.mel.length)])),r!=null&&Fh(ba(r),n,e*3,.2)}return t.perc&&(s%2===1&&s1(n,.09,s===3||s===7),(s===0||s===4)&&rc(70,n,.12,.5)),oc++,e}function o1(){Zi=Gt.currentTime+.2,setInterval(()=>{if(!document.hidden)for(Zi<Gt.currentTime-.5&&(Zi=Gt.currentTime+.1);Zi<Gt.currentTime+.25;)it().settings.bgm?Zi+=a1(Zi):Zi+=.25},80),hf(it().settings.bgm)}function hf(n){yi&&yi.gain.setTargetAtTime(n?rf:0,Gt.currentTime,.3)}function r1(n){lf[n]&&(uf=n)}const de=(n,t=document)=>t.querySelector(n);function M(n,t={},...e){const i=document.createElement(n);for(const[s,a]of Object.entries(t))s==="class"?i.className=a:s==="html"?i.innerHTML=a:s.startsWith("on")?i.addEventListener(s.slice(2),a):s==="style"?i.style.cssText=a:i.setAttribute(s,a);for(const s of e.flat())s!=null&&i.append(s.nodeType?s:document.createTextNode(s));return tr(i),i}function Xl(){const n=it().settings;document.body.classList.toggle("no-furi",!n.furigana),document.body.classList.toggle("no-roma",!n.romaji),document.body.classList.toggle("no-yue",!n.yue),document.body.classList.toggle("large-text",!!n.largeText)}function Mn(n,{yue:t="",voice:e="word",size:i="",hidden:s=!1,autoplay:a=!1}={}){const o=M("div",{class:`jp ${i}`}),r=M("div",{class:"jp-text",html:Xe(n)}),c=M("div",{class:"jp-roma"},Gx(n)),l=t?M("div",{class:"jp-yue"},t):null,u=M("button",{class:"spk","aria-label":"再聽",onclick:m=>{m.stopPropagation(),tt("tap"),qe(n,e)}},"🔊"),h=M("div",{class:"jp-body"},r,c,l);return o.append(h,u),s&&(o.classList.add("veiled"),h.addEventListener("click",()=>o.classList.remove("veiled"),{once:!0})),a&&qe(n,e),o}function En(){const n=it();de("#lv").textContent=n.level;const t=ml(n.level-1),e=ml(n.level);de("#xpbar i").style.width=`${Math.max(0,Math.min(1,(n.xp-t)/(e-t)))*100}%`,de("#coins b").textContent=n.coins,de("#streak b").textContent=n.streak,de("#streak").classList.toggle("hot",n.streak>=2)}function df(n){de("#hud").classList.toggle("show",n)}function Qe(...n){const t=de("#panel");return t.innerHTML="",t.classList.remove("hub-panel","sneak-panel"),t.scrollTop=0,t.append(...n.flat().filter(e=>e!=null&&e!==!1)),t.classList.add("show"),t}function xn(){de("#panel").classList.remove("show")}function Ge(n,{title:t=null,cols:e=1,extra:i=null}={}){return new Promise(s=>{const a=M("div",{class:`choices cols${e}`});let o=!1;n.forEach(r=>{const c=M("button",{class:`choice ${r.cls||""}`,type:"button"});r.el?c.append(r.el):(c.innerHTML=r.label,tr(c)),c.addEventListener("click",()=>{o||(o=!0,tt("tap"),s({value:r.value,button:c,grid:a}))}),a.append(c)}),Qe(...[t,i,a].filter(Boolean))})}function xi(n="繼續 ▶",...t){return new Promise(e=>{const i=M("button",{class:"btn primary big",onclick:()=>{tt("tap"),e()}},n);Qe(...t,i)})}const gl=new Set;function jt(n,t,e,i,s,{hidden:a=!1,play:o=!0}={}){Ft(t);const r=M("div",{class:`bubble ${t}`});r.append(Mn(e,{yue:i,voice:s,hidden:a}));const c=M("div",{class:"bubble-anchor","data-who":t},r);de("#bubbles").append(c),gl.add(c),c._world=n;const l=t==="cat"?()=>n.cat.head:()=>{var u;return(u=n.customer)==null?void 0:u.userData.head};return n.anchor(c,l,t==="cat"?.75:.5),requestAnimationFrame(()=>r.classList.add("in")),o?(t==="cat"&&n.cat.setMode("talk"),qe(e,s).then(async()=>{await Qt(),t==="cat"&&n.cat.mode==="talk"&&n.cat.setMode("idle")})):Promise.resolve()}function Ft(n){for(const t of[...gl])(!n||t.dataset.who===n)&&(t._world.unanchor(t),t.remove(),gl.delete(t))}function De(n,t=2600){const e=de("#hint");e.textContent=n,e.classList.add("show"),clearTimeout(e._t),t&&(e._t=setTimeout(()=>e.classList.remove("show"),t))}function c1(){de("#hint").classList.remove("show")}function Fe(n,t=2200,e=""){const i=M("div",{class:`toast ${e}`,html:n});de("#toasts").append(i),setTimeout(()=>i.classList.add("out"),t),setTimeout(()=>i.remove(),t+500)}function xe(n,t=""){const e=M("div",{class:`popword ${t}`},n);document.body.append(e),setTimeout(()=>e.remove(),900)}function Zn(n,t={x:innerWidth/2,y:innerHeight*.4}){const e=de("#coins").getBoundingClientRect(),i=Math.min(12,Math.max(3,Math.round(n/15)));for(let s=0;s<i;s++){const a=M("div",{class:"flycoin"},"🪙");a.style.left=t.x+"px",a.style.top=t.y+"px",document.body.append(a);const o=(Math.random()-.5)*120,r=-40-Math.random()*60;a.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${o}px,${r}px) scale(1.3)`,offset:.35},{transform:`translate(${e.x+10-t.x}px,${e.y+8-t.y}px) scale(0.6)`}],{duration:700+s*60,easing:"cubic-bezier(.5,0,.6,1)"}).onfinish=()=>{a.remove(),tt("coin"),de("#coins").classList.remove("bump"),de("#coins").offsetWidth,de("#coins").classList.add("bump")}}}function Si(n,t,{onClose:e=null,wide:i=!1,footer:s=null}={}){const a=de("#modal");Go("modal",!0),a.innerHTML="";let o=!1;const r=()=>{o||(o=!0,a.classList.remove("show"),Go("modal",!1),e==null||e())};a._close=r;const c=M("div",{class:`card ${i?"wide":""}`},M("div",{class:"card-head"},M("h2",{html:n}),M("button",{class:"x","aria-label":"關閉",onclick:()=>{tt("tap"),r()}},"✕")),M("div",{class:"card-body"},t),s?M("div",{class:"card-footer"},s):null);return tr(c),a.append(c),a.classList.add("show"),a.onclick=l=>{l.target===a&&r()},{close:r,card:c}}function ff(){var n,t;(t=(n=de("#modal"))._close)==null||t.call(n)}function l1(n,t){const e=de("#taskbar");e.replaceChildren(M("button",{class:"mission-btn",onclick:()=>Si("📋 今次任務",M("p",{class:"mission-details"},t))},`📋 ${n} · 詳情`)),e.classList.add("show")}function Po(n){const t=de("#fade");return t.classList.add("on"),Qt(520).then(async()=>{await n(),await Qt(80),t.classList.remove("on"),await Qt(520)})}function le(n){n=[...n];for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}const Ue=n=>n[Math.floor(Math.random()*n.length)],jn=[{id:"onigiri",dish:"onigiri",price:120,unlock:{level:1},station:"board",serves:"2 個",time:"10 分鐘",ingredients:[["gohan","熱白飯 1 碗（約 150g）"],["shio","鹽 少少（一撮）"],["umeboshi","酸梅 1 粒（或三文魚碎）"],["nori","紫菜 1 塊（剪半）"],["mizu","凍水 少少（濕手用）"]],howto:["雙手沾水，再喺手掌抹少少鹽。","攞一半飯放手心，中間整個窿，放酸梅。","用另一半飯蓋住，雙手合埋輕輕揸，轉 3–4 次整成三角形。","唔好揸太實！外實內鬆先好食。","最後包上紫菜。想紫菜脆，食之前先包。"],steps:[{type:"pick",need:["gohan","shio","umeboshi","nori"],decoys:["tofu","tamago","negi"],jp:"まず 材料{ざいりょう}を 選{えら}んでにゃ",yue:"首先揀材料喵",tip:"聽讀音，揀啱嘅材料。"},{type:"mash",taps:10,time:5,anim:"press",verb:"nigiru",add:["onigiri_raw"],jp:"三角{さんかく}に 握{にぎ}って",yue:"揸成三角形",tip:"狂撳！但真係整嘅時候要輕力，外實內鬆。"},{type:"timing",rounds:1,zone:.24,anim:"wrap",verb:"noseru",jp:"海苔{のり}を 巻{ま}いて",yue:"包紫菜",tip:"撳準！紫菜要喺中間。"}]},{id:"misoshiru",dish:"misoshiru",price:150,unlock:{level:2},station:"pot",serves:"2 碗",time:"10 分鐘",ingredients:[["mizu","水 400ml"],["dashi","日式高湯粉 1 茶匙（或昆布 + 木魚自己煲）"],["tofu","豆腐 半盒（約 150g）"],["wakame","乾海帶芽 1 湯匙"],["miso","味噌 2 湯匙"],["negi","蔥 少少"]],howto:["水同高湯粉落煲，中火煮滾。","豆腐切 1.5cm 粒，同海帶芽一齊落，煮 1 分鐘。","熄火！用湯殼盛味噌，喺湯入面慢慢攪溶。","重點：味噌落咗之後唔好再滾，滾咗香味會走晒。","最後灑蔥花。"],steps:[{type:"pick",need:["dashi","tofu","wakame","miso"],decoys:["gohan","shoyu","chashu"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"高湯係日本菜嘅靈魂。"},{type:"timing",rounds:3,zone:.2,anim:"chop",verb:"kiru",add:["tofu_cubes"],jp:"豆腐{とうふ}を 切{き}って",yue:"切豆腐",tip:"撳準綠色位，切 3 刀。"},{type:"hold",zone:[.55,.8],anim:"stir",verb:"tokasu",add:["miso_soup"],jp:"火{ひ}を 止{と}めて、味噌{みそ}を 溶{と}かして",yue:"熄火，溶味噌",tip:"長按加熱，喺綠色位放手。太熱 = 滾瀉，味噌香味會走！"}]},{id:"oyakodon",dish:"oyakodon",price:280,unlock:{level:3},station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["toriniku","雞髀肉 100g"],["tamanegi","洋蔥 1/4 個"],["tamago","雞蛋 2 隻"],["dashi","高湯 60ml"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"],["satou","砂糖 1 茶匙"],["gohan","熱白飯 1 碗"]],howto:["雞肉切一口大小，洋蔥切薄片。","細平底鑊落高湯、豉油、味醂、砂糖，煮滾。","落洋蔥同雞肉，中火煮 5 分鐘至熟。","雞蛋輕輕打散（唔好打太勻），淋 2/3 落去，冚蓋 30 秒。","再淋餘下蛋液，半熟就熄火，即刻滑落飯面。"],steps:[{type:"pick",need:["toriniku","tamanegi","tamago","shoyu"],decoys:["tofu","nori","moyashi"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"親子 = 雞（親）+ 蛋（子），幾得意。"},{type:"timing",rounds:3,zone:.18,anim:"chop",verb:"kiru",add:["chicken_pieces"],jp:"鶏肉{とりにく}を 切{き}って",yue:"切雞肉",tip:"一口大小就啱。"},{type:"stir",turns:3,anim:"stir",verb:"niru",add:["pan_simmer"],jp:"だしで 煮{に}て",yue:"用高湯煮",tip:"手指喺圓圈度轉圈！"},{type:"hold",zone:[.4,.62],anim:"pour",verb:"tamago",add:["oyako_egg"],jp:"卵{たまご}を 入{い}れて、半熟{はんじゅく}に",yue:"落蛋，要半熟",tip:"半熟先好食，唔好煮過龍！"}]},{id:"ramen",dish:"ramen",price:380,unlock:{day:2},station:"pot",serves:"1 碗",time:"20 分鐘（簡易版）",ingredients:[["men","拉麵（新鮮或乾麵）1 份"],["dashi","雞湯 300ml"],["shoyu","豉油 2 湯匙"],["mirin","味醂 1 茶匙"],["ninniku","蒜頭 1 粒（磨蓉）"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥、紫菜 適量"]],howto:["湯底：雞湯加蒜蓉煮滾，熄火。","碗底先落豉油同味醂（呢個叫「タレ」）。","另一煲大滾水烚麵，跟包裝時間（通常 1–2 分鐘）。","熱湯沖入碗攪勻，麵瀝乾放入碗。","鋪叉燒、半隻溏心蛋（滾水 6.5 分鐘再浸冰水）、蔥同紫菜。"],steps:[{type:"pick",need:["men","chashu","tamago","negi"],decoys:["tofu","umeboshi","satou"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"拉麵嘅配料叫「トッピング」。"},{type:"hold",zone:[.6,.85],anim:"stir",verb:"yuderu",add:["ramen_boil"],jp:"麺{めん}を ゆでて",yue:"烚麵",tip:"水要大滾！"},{type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"スープを 混{ま}ぜて",yue:"攪勻湯",tip:"湯同タレ要撈勻。"},{type:"timing",rounds:2,zone:.18,anim:"chop",verb:"noseru",jp:"トッピングを のせて",yue:"放配料",tip:"靚唔靚就睇呢步！"}]}];jn.push(...Nd,...Gs);const Bh=[{id:"tempura",emoji:"🍤",jp:"天{てん}ぷら",yue:"天婦羅"},{id:"curry",emoji:"🍛",jp:"カレーライス",yue:"咖喱飯"},{id:"gyoza",emoji:"🥟",jp:"餃子{ぎょうざ}",yue:"餃子"},{id:"tamagoyaki",emoji:"🍳",jp:"卵焼{たまごや}き",yue:"玉子燒"}];function u1(n){return jn.find(t=>t.id===n)}const oa=[{id:0,icon:"🌱",name:"零基礎",desc:"假名都未識"},{id:1,icon:"🌿",name:"N5",desc:"識假名、簡單字、基本句型"},{id:2,icon:"🌳",name:"N4–N3",desc:"想練聽力同實用句子"},{id:3,icon:"🏔️",name:"N1",desc:"敬語、長句、事故廣播"}],zh=["usagi","kuma"],Be=()=>Math.max(0,Math.min(3,it().jpLevel??0)),pf=n=>zh[parseInt($l(n),36)%zh.length],rn=(n,t)=>t.lv>0||t.hi?pf(n):n;function gs(){const n=Be();return n===0||Math.random()<.6?n:Math.floor(Math.random()*n)}const ds=new Set,mf=()=>ds.clear(),jh=n=>n.key||n.jp;function $n(n,t=Math.random){const e=Be(),i=n.filter(l=>(l.lv??0)<=e),s=gs(),a=i.filter(l=>(l.lv??0)===s),o=l=>l.filter(u=>!ds.has(jh(u))),r=[o(a),o(i),a,i].find(l=>l.length)||n,c=r[Math.floor(t()*r.length)];return ds.add(jh(c)),c}function In(n,t){var a;if(n!==Be())return;const e=(a=it()).lvStats||(a.lvStats={}),i=e[n]||(e[n]={right:0,total:0,days:[]});i.total++,t&&i.right++;const s=aa();i.days||(i.days=[]),i.days.includes(s)||i.days.push(s),Re()}function h1(){var e,i;const n=Be();if(n>=3)return null;const t=(e=it().lvStats)==null?void 0:e[n];return!t||t.total<15||t.right/t.total<.8||(((i=t.days)==null?void 0:i.length)??0)<2||(it().lvNudgeDismissed??-1)>=n?null:{from:n,to:n+1,rate:Math.round(t.right/t.total*100),total:t.total}}const d1=[{lv:0,jp:"{dish}を ください",yue:"唔該畀{dishYue}我"},{lv:0,jp:"{dish}を お願{ねが}いします",yue:"麻煩你，{dishYue}"},{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,jp:"すみません、{dish}を ください",yue:"唔好意思，我要{dishYue}"},{lv:1,jp:"すみません、 {dish}は ありますか？",yue:"唔好意思，有冇{dishYue}？"},{lv:1,jp:"{dish}を お願{ねが}いできますか？",yue:"可唔可以幫我整{dishYue}？"},{lv:2,jp:"今日{きょう}は {dish}に しようかな",yue:"今日食{dishYue}好喇"},{lv:2,jp:"{dish}って、 すぐ できますか？",yue:"{dishYue}係咪好快有得食？"},{lv:2,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],f1=[{lv:0,jp:"{dish}を {num} ください",yue:"唔該{numYue}{dishYue}"},{lv:0,jp:"{dish}、{num} お願{ねが}いします",yue:"{dishYue}，{numYue}，唔該"},{lv:1,jp:"{dish}を {num} お願{ねが}いできますか？",yue:"可唔可以幫我整{numYue}{dishYue}？"},{lv:2,jp:"{dish}は {num}で お願{ねが}いします",yue:"{dishYue}要{numYue}，唔該"}],is={great:[{lv:0,jp:"おいしい！",yue:"好好食！"},{lv:0,jp:"すごく おいしいです！",yue:"超好食！"},{lv:0,jp:"最高{さいこう}！",yue:"一流！"},{lv:1,jp:"味{あじ}が ちょうど いいです",yue:"味道啱啱好"},{lv:1,jp:"本当{ほんとう}に おいしいです！",yue:"真係好好食！"},{lv:1,jp:"これ、 大好{だいす}きな 味{あじ}です",yue:"呢個係我最鍾意嘅味道"},{lv:2,jp:"優{やさ}しい 味{あじ}で、 ほっとしますね",yue:"味道好溫和，食完好放鬆"},{lv:2,jp:"見{み}た目{め}も きれいで、 食{た}べるのが もったいないです",yue:"賣相咁靚，食咗好唔捨得"},{lv:2,jp:"一口{ひとくち}食{た}べただけで、 幸{しあわ}せな 気持{きも}ちに なりました",yue:"食一啖已經覺得好幸福"}],ok:[{lv:0,jp:"うん、おいしいです",yue:"嗯，幾好食"},{lv:0,hi:!0,jp:"おいしいです",yue:"好食"},{lv:1,jp:"まあまあ おいしいです",yue:"幾好食，都ok"},{lv:1,jp:"なかなか おいしいです",yue:"相當好食"},{lv:2,jp:"なかなか いけますね",yue:"都幾唔錯喎"},{lv:2,jp:"悪{わる}くない 味{あじ}ですね",yue:"味道唔差喎"}],meh:[{lv:0,hi:!0,jp:"うーん、 ちょっと…",yue:"嗯…有啲…"},{lv:1,jp:"もう ちょっと 味{あじ}が ほしいです",yue:"想味道再濃啲"},{lv:2,jp:"もう 少{すこ}し 味{あじ}が はっきり していると いいですね",yue:"味道再突出啲就好喇"}],wrong:[{lv:0,jp:"あれ？ これじゃないです",yue:"咦？唔係呢個喎"},{lv:1,jp:"これ、 頼{たの}んでいません",yue:"呢個我冇叫"},{lv:2,jp:"すみません、 注文{ちゅうもん}したのは これじゃなかったと 思{おも}うんですが",yue:"唔好意思，我諗我叫嘅唔係呢個"}],bye:[{key:"gochisousama",lv:0,jp:"ごちそうさまでした！",yue:"多謝款待！"},{key:"matta",lv:0,jp:"また 来{き}ます！",yue:"我會再嚟！"},{key:"oishikatta",lv:0,hi:!0,jp:"美味{おい}しかったです！",yue:"好好食呀！"},{key:"arigatou",lv:0,hi:!0,jp:"ありがとうございました！",yue:"多謝晒！"},{key:"okaikei",lv:1,jp:"お会計{かいけい}、 お願{ねが}いします。 ごちそうさまでした",yue:"唔該埋單，多謝款待"},{key:"by_tomodachi",lv:1,jp:"とても おいしかったです。 また 友達{ともだち}と 来{き}ます！",yue:"好好食，下次同朋友嚟！"},{key:"by_mata",lv:1,jp:"また 近{ちか}いうちに 来{き}ますね",yue:"好快會再嚟"},{key:"by_chikaku",lv:2,jp:"この 近{ちか}くに 来{き}たら、 また 寄{よ}らせてもらいます",yue:"之後行經附近，我會再嚟"},{key:"by_tsurete",lv:2,jp:"今度{こんど}は 家族{かぞく}も 連{つ}れて 来{き}ますね",yue:"下次帶埋家人嚟"},{key:"by_gochisou2",lv:2,jp:"今日{きょう}は ごちそうさまでした。 どれも 本当{ほんとう}に おいしかったです",yue:"今日多謝款待，每樣都真係好好食"}]},ln={wake:{jp:"ふわぁ… おはようにゃ！",yue:"呵～早晨喵！"},intro:{jp:"ぼくは クロ。この 店{みせ}の シェフにゃ",yue:"我叫小黑（クロ），係呢間店嘅廚師喵"},irasshai:{jp:"いらっしゃいませ！",yue:"歡迎光臨！"},done:{jp:"できたにゃ！",yue:"整好喇喵！"},purr:{jp:"ごろごろ…",yue:"（呼嚕呼嚕⋯）"},levelup:{jp:"レベルアップにゃ！",yue:"升級喇喵！"},newRecipe:{jp:"新{あたら}しい レシピにゃ！",yue:"新食譜喵！"}},ae=(n,t,e,i,s)=>({key:n,lv:t,ch:e,jp:i,yue:s,hi:!0}),ql=[{key:"oishii",lv:0,ch:"any",jp:"この 店{みせ}、おいしいですね",yue:"呢間店好好食喎"},{key:"atsui",lv:0,ch:"any",jp:"わあ、熱{あつ}い！",yue:"嘩，好熱！"},{key:"sumimasen",lv:0,ch:"any",jp:"すみません！",yue:"唔好意思！"},ae("st_osusume",0,"home","おすすめは？","有咩推介？"),ae("st_nioi",0,"home","いい におい！","好香呀！"),ae("st_mizu",0,"any","お水{みず}、 ください","唔該畀杯水"),ae("st_toire",0,"any","トイレは どこですか？","洗手間喺邊？"),ae("st_kanpai",0,"izakaya","乾杯{かんぱい}！","乾杯！"),ae("st_toriaezu",0,"izakaya","とりあえず ビール！","總之先嚟啤酒！"),ae("st_hot",0,"cafe","ホット、 お願{ねが}いします","要熱嘅，唔該"),ae("st_ice",0,"cafe","アイス、 お願{ねが}いします","要凍嘅，唔該"),ae("st_nani",0,"dark","これ、 なに？","呢個係咩嚟？"),ae("st_tezukuri",0,"dark","手作{てづく}り？","自家製？"),ae("st_shizuka",1,"any","この 店{みせ}、 静{しず}かで いいですね","呢間舖頭好靜，好舒服"),ae("st_hajimete",1,"any","ここは 初{はじ}めてです","我第一次嚟呢度"),ae("st_haitte",1,"any","これには 何{なに}が 入{はい}っていますか？","呢個入面有啲咩？"),ae("st_kyou",1,"any","今日{きょう}は 暑{あつ}いですね","今日好熱呀"),ae("st_suwaru",1,"home","ここ、 座{すわ}っても いいですか？","呢度可以坐嗎？"),ae("st_sukuname",1,"home","ご飯{はん}、 少{すく}なめに できますか？","飯可唔可以少啲？"),ae("st_okawari",1,"home","おかわり、 いいですか？","可以添飯嗎？"),ae("st_dashi",1,"home","この 味噌汁{みそしる}、 何{なん}の だしですか？","呢碗味噌湯用咩熬底？"),ae("st_lastorder",1,"izakaya","ラストオーダーは 何時{なんじ}ですか？","最後落單係幾點？"),ae("st_nama",1,"izakaya","生{なま}ビール、 もう 一杯{いっぱい}","生啤再嚟一杯"),ae("st_satou_nashi",1,"cafe","砂糖{さとう}なしで お願{ねが}いします","唔該走糖"),ae("st_milk_ooi",1,"cafe","ミルクを 多{おお}めに できますか？","可唔可以多奶？"),ae("st_tsukuru",1,"dark","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),ae("st_nikomi",1,"dark","どのくらい 煮込{にこ}みましたか？","燉咗幾耐？"),ae("st_mae",2,"any","この 店{みせ}、 前{まえ}から 来{き}てみたかったんです","呢間舖我想嚟好耐㗎喇"),ae("st_hitori",2,"any","一人{ひとり}でも 入{はい}りやすい お店{みせ}ですね","一個人入嚟都冇壓力"),ae("st_susume",2,"any","友達{ともだち}に すすめられて 来{き}ました","朋友推介我嚟"),ae("st_fun",2,"any","雰囲気{ふんいき}が 落{お}ち着{つ}いていて いいですね","氣氛好舒服，好寧靜"),ae("st_ryou",2,"home","値段{ねだん}の わりに、 量{りょう}が 多{おお}くて 驚{おどろ}きました","價錢計，份量多到嚇親"),ae("st_tezukuri2",2,"home","これ、 全部{ぜんぶ} 手作{てづく}りなんですか？","呢啲全部係自己整？"),ae("st_omakase",2,"izakaya","お任{まか}せで 何品{なんぴん}か 出{だ}してもらえますか？","可唔可以隨你出幾款？"),ae("st_agetate",2,"izakaya","唐揚{からあ}げは 揚{あ}げたてを 食{た}べたいので、 後{あと}で 出{だ}してもらえますか？","唐揚想食啱炸起，可唔可以遲啲先上？"),ae("st_samui",2,"cafe","今日{きょう}は 寒{さむ}いので、 熱{あつ}めに してもらえますか？","今日凍，可唔可以整熱啲？"),ae("st_purin",2,"cafe","プリンは 食後{しょくご}に 出{だ}していただけますか？","布甸可唔可以食完先上？"),ae("st_hachijikan",2,"dark","本当{ほんとう}に 八時間{はちじかん}も 煮込{にこ}んだんですか？","真係燉咗八個鐘咁耐？"),ae("st_genzairyo",2,"dark","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],p1=Object.fromEntries(ql.map(n=>[n.key,n]));function m1(n,t,e=Math.random){const i=Be(),s=ql.filter(f=>f.lv<=i&&(f.ch==="any"||f.ch===n)),a=gs(),o=s.filter(f=>f.lv===a),r=o.length>=2?o:s,c=r.filter(f=>!ds.has(f.key)),l=c.length?c:r,u=t(l.map(f=>f.key));ds.add(u);const h=p1[u],m=f=>f.filter((S,v)=>f.findIndex(b=>b.yue===S.yue)===v),p=f=>[...f].sort(()=>e()-.5),g=s.filter(f=>f.key!==u&&f.yue!==h.yue&&f.lv===h.lv),_=s.filter(f=>f.key!==u&&f.yue!==h.yue),d=m([...p(g),...p(_)]).slice(0,2);return{st:h,wrongs:d}}const g1=["misoshiru","oyakodon","ramen"],gf=[{key:"oomori",lv:1,hi:!0,jp:"大盛{おおも}りで お願{ねが}いします",yue:"大份，唔該",label:"要大份"},{key:"dt_sukuname",lv:1,hi:!0,jp:"少{すく}なめで お願{ねが}いします",yue:"細份，唔該",label:"要細份"},{key:"dt_koko",lv:1,hi:!0,jp:"ここで 食{た}べます",yue:"喺度食",label:"喺度食"},{key:"dt_mochikaeri",lv:1,hi:!0,jp:"お持{も}ち帰{かえ}りで お願{ねが}いします",yue:"外賣，唔該",label:"外賣"},{key:"dt_negi",lv:2,hi:!0,jp:"ねぎ抜{ぬ}きに してもらえますか？",yue:"可唔可以走蔥？",label:"走蔥",when:n=>g1.includes(n)},{key:"dt_henkou",lv:2,hi:!0,jp:"すみません、 やっぱり 持{も}ち帰{かえ}りに 変更{へんこう}できますか？",yue:"唔好意思，可唔可以改做外賣？",label:"改做外賣"}];function _1(n){const t=Be(),e=gf.filter(u=>u.lv<=t&&(!u.when||u.when(n)));if(!e.length)return null;const i=gs(),s=e.filter(u=>u.lv===i),a=s.length?s:e,o=a.filter(u=>!ds.has(u.key)),r=o.length?o:a,c=r[Math.floor(Math.random()*r.length)];ds.add(c.key);const l=[...new Set(e.filter(u=>u.label!==c.label).map(u=>u.label))].sort(()=>Math.random()-.5);return{d:c,wrongs:l.slice(0,2)}}const v1=[{lv:0,jp:"売{う}り切{き}れです",yue:"賣晒喇"},{lv:1,jp:"すみません、売{う}り切{き}れです。",yue:"唔好意思，賣晒喇"},{lv:2,jp:"申{もう}し訳{わけ}ございません、 あいにく {dish}は 切{き}らしておりまして…",yue:"好抱歉，啱啱{dishYue}用晒…"}],y1=[{lv:0,hi:!0,jp:"{dish}を ください",yue:"咁要{dishYue}"},{lv:1,jp:"{dish}を お願{ねが}いします",yue:"咁要{dishYue}"},{lv:2,jp:"それなら、 {dish}に します",yue:"咁我要{dishYue}"}],x1=[{lv:0,hi:!0,jp:"追加{ついか}で！",yue:"加單！"},{lv:1,jp:"すみません、もう 一{ひと}つ 追加{ついか}で。",yue:"唔該，再加一份。"},{lv:2,jp:"あ、 すみません、 同{おな}じものを もう 一{ひと}つ 追加{ついか}で お願{ねが}いします",yue:"啊唔好意思，同一款再加一份，唔該"}],M1=[{lv:0,hi:!0,jp:"一{ひと}つ 減{へ}らして ください",yue:"減一份，唔該"},{lv:1,jp:"すみません、 一{ひと}つ 減{へ}らして ください。",yue:"唔好意思，減一份。"},{lv:2,jp:"あ、 すみません、 一{ひと}つ 減{へ}らして もらえますか？",yue:"啊唔好意思，可唔可以減一份？"}],S1=[{lv:0,hi:!0,jp:"{dish}に 変{か}えて ください",yue:"改做{dishYue}，唔該"},{lv:1,jp:"すみません、 {dish}に 変{か}えて ください。",yue:"唔好意思，改做{dishYue}。"},{lv:2,jp:"あ、 すみません、 {dish}に 変{か}えて もらえますか？",yue:"啊唔好意思，可唔可以改做{dishYue}？"}],b1=[{lv:0,hi:!0,jp:"やっぱり キャンセルで！",yue:"算啦，取消！"},{lv:1,jp:"すみません、 やっぱり キャンセルで お願{ねが}いします。",yue:"唔好意思，算啦，唔該取消。"},{lv:2,jp:"あの、 すみません、 やっぱり 注文{ちゅうもん}を キャンセルして もらえますか？",yue:"請問，我想取消啱啱嗰張單，得唔得？"}],w1=[{lv:0,hi:!0,jp:"じゃあ、 やめておきます",yue:"咁就算啦"},{lv:1,jp:"そうですか… じゃあ、 やめておきます。",yue:"係咩…咁就算啦。"},{lv:2,jp:"そうですか… それなら、 今日{きょう}は やめておきます",yue:"係咩…咁今日就唔要喇"}],Ua={people:[{n:1,key:"hitori",jp:"一人{ひとり}です",yue:"一位",mei:"一名{いちめい}"},{n:2,key:"futari",jp:"二人{ふたり}です",yue:"兩位",mei:"二名{にめい}"},{n:3,key:"sannin",jp:"三人{さんにん}です",yue:"三位",mei:"三名{さんめい}"}],foods:["onigiri","misoshiru","oyakodon","ramen"],drinks:["ocha","omizu","biiru"],hasNegi:["misoshiru","oyakodon","ramen"],prices:{onigiri:200,misoshiru:150,oyakodon:850,ramen:900,ocha:0,omizu:0,biiru:500},staff:{welcome:{jp:"いらっしゃいませ！ 何名様{なんめいさま}ですか？",yue:"歡迎光臨！請問幾位？"},seat:{jp:"こちらへ どうぞ",yue:"呢邊請"},order:{jp:"ご注文{ちゅうもん}は お決{き}まりですか？",yue:"決定好叫咩未？"},drink:{jp:"お飲{の}み物{もの}は いかがですか？",yue:"想飲啲咩？"},confirm:{jp:"以上{いじょう}で よろしいですか？",yue:"就咁多？"},wait:{jp:"少々{しょうしょう} お待{ま}ちください",yue:"請稍等"},serve:{jp:"お待{ま}たせしました！",yue:"久等喇！"},pay:{jp:"ありがとうございます。{price}円{えん}です",yue:"多謝，{price} 円"},pay2:{jp:"税込{ぜいこ}みで {price}円{えん}に なります",yue:"連稅 {price} 円"},bye:{jp:"ありがとうございました！ また お越{こ}しください",yue:"多謝晒！歡迎再嚟"},sorry:{jp:"大変{たいへん} お待{ま}たせしました！",yue:"等咗好耐，真係唔好意思！"}},you:{order:{jp:"{food}を {num} ください",yue:"唔該畀{numYue}{foodYue}我"},drink:{jp:"{drink}を {num} お願{ねが}いします",yue:"{numYue}{drinkYue}，唔該"},yes:{jp:"はい、お願{ねが}いします",yue:"係，唔該"},itadakimasu:{jp:"いただきます！",yue:"開動！（食之前）"},gochisou:{jp:"ごちそうさまでした",yue:"多謝款待（食完）"},kaikei:{jp:"すみません、お会計{かいけい} お願{ねが}いします",yue:"唔好意思，唔該埋單"},wrongGreet:{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},wrongEat:{jp:"さようなら",yue:"再見（好正式／長時間唔見）"},wrongPay:{jp:"おかわり ください",yue:"唔該再嚟一碗"},no:{jp:"いいえ、大丈夫{だいじょうぶ}です",yue:"唔使喇，冇問題"}}},Hh=n=>Ua.people[n.ppl.n-1],E1=[{id:"water0",lv:0,phase:"preorder",task:()=>"想要杯水",build:()=>({staff:null,prompt:"（想要杯水）",title:"💧 想要杯水，點講？",options:[{jp:"お水{みず}、 ください",yue:"唔該畀杯水"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"さようなら",yue:"再見（好正式）"}]})},{id:"call0",lv:0,phase:"mid",task:()=>"想叫店員",build:()=>({staff:null,prompt:"（想叫店員過嚟）",title:"✋ 叫店員，點講？",options:[{jp:"すみません！",yue:"唔好意思！"},{jp:"いらっしゃいませ！",yue:"歡迎光臨（店員講）"},{jp:"ごちそうさまでした",yue:"多謝款待（食完）"}]})},{id:"reserve1",lv:1,phase:"enter",init:n=>{n.f.reserved=Math.random()<.5},task:n=>n.f.reserved?"你有訂位":"你冇訂位",build:n=>({staff:{jp:"ご予約{よやく}は されていますか？",yue:"有冇訂位？"},title:"📅 有冇訂位？",options:n.f.reserved?[{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]:[{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"counter1",lv:1,phase:"seat",task:()=>"你唔介意坐吧枱",build:()=>({staff:{jp:"カウンター席{せき}でも よろしいですか？",yue:"坐吧枱得唔得？"},title:"🪑 坐吧枱得唔得？（你唔介意）",options:[{jp:"はい、 大丈夫{だいじょうぶ}です",yue:"得，冇問題"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"recommend1",lv:1,phase:"preorder",task:()=>"唔知食咩，想問推介",build:n=>({staff:null,prompt:"（唔知食咩，想問店員推介）",title:"🤔 想問推介，點講？",options:[{jp:"おすすめは 何{なん}ですか？",yue:"有咩推介？"},{jp:"お会計{かいけい}は いくらですか？",yue:"幾多錢？"},{jp:"ごちそうさまでした",yue:"多謝款待"}],reply:{jp:`本日{ほんじつ}の おすすめは ${T1(n.food)}です`,yue:`今日推介${A1(n.food)}`}})},{id:"chopsticks1",lv:1,phase:"mid",task:()=>"冇筷子，想叫店員攞",build:()=>({staff:null,prompt:"（發現冇筷子）",title:"🥢 冇筷子，點講？",options:[{jp:"すみません、 お箸{はし}を ください",yue:"唔好意思，唔該畀對筷子"},{jp:"すみません、 お水{みず}を ください",yue:"唔好意思，唔該畀杯水"},{jp:"すみません、 さようなら",yue:"唔好意思，再見"}]})},{id:"split1",lv:1,phase:"pay",when:n=>n.ppl.n>=2,init:n=>{n.f.split=Math.random()<.5},task:n=>n.f.split?"各自畀錢":"你請客，一齊畀",build:n=>({staff:{jp:"お会計{かいけい}は 別々{べつべつ}ですか？ ご一緒{いっしょ}ですか？",yue:"分開畀定一齊畀？"},title:"💴 點樣畀錢？",options:n.f.split?[{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"いただきます",yue:"開動喇"}]:[{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"いただきます",yue:"開動喇"}]})},{id:"cash1",lv:1,phase:"pay",when:n=>n.ppl.n===1,init:n=>{n.f.card=Math.random()<.5},task:n=>n.f.card?"你想碌卡":"你想畀現金",build:n=>({staff:{jp:"お支払{しはら}いは 現金{げんきん}ですか？ カードですか？",yue:"現金定碌卡？"},title:"💳 現金定碌卡？",options:n.f.card?[{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"おやすみなさい",yue:"晚安"}]:[{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"reserve2",lv:2,phase:"enter",init:n=>{n.f.reserved=Math.random()<.5},task:n=>n.f.reserved?`你七點訂咗位（${Hh(n).yue}，姓陳）`:"你冇訂位，但有時間，願意等",build:n=>{const t=Hh(n),e=Ua.people.find(i=>i.n!==t.n);return n.f.reserved?{staff:{jp:"ご予約の お名前{なまえ}を お願{ねが}いします",yue:"請問訂位姓名？"},title:"📅 報訂位資料（七點、姓陳）",options:[{jp:`七時{しちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${t.yue}`},{jp:`七時{しちじ}に ${e.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${e.yue}`},{jp:`八時{はちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗八點${t.yue}`}]}:{staff:{jp:"ただいま 満席{まんせき}でして、 十分{じゅっぷん}ほど お待{ま}ちいただくことになりますが、 よろしいですか？",yue:"而家滿座，要等十分鐘左右，得唔得？"},title:"⏳ 要等十分鐘（你有時間）",options:[{jp:"はい、 待{ま}ちます",yue:"得，我等"},{jp:"じゃあ、 また 今度{こんど}に します",yue:"咁下次先啦"},{jp:"ごちそうさまでした",yue:"多謝款待"}]}}},{id:"luggage2",lv:2,phase:"seat",task:()=>"行李多，想坐枱",build:()=>({staff:{jp:"お席{せき}は カウンターと テーブルが ございますが…",yue:"有吧枱同枱位，你想坐邊？"},title:"🧳 行李多，想坐枱",options:[{jp:"荷物{にもつ}が 多{おお}いので、 テーブル席{せき}に していただけますか？",yue:"我哋行李多，可唔可以坐枱？"},{jp:"テーブル席{せき}に しろ",yue:"畀張枱我坐（好粗魯）"},{jp:"荷物{にもつ}が 少{すく}ないので、 カウンター席{せき}に してください",yue:"行李少，坐吧枱（同情況唔符）"}]})},{id:"negi2",lv:2,phase:"order",when:n=>Ua.hasNegi.includes(n.food),task:()=>"你唔食蔥",build:()=>({staff:null,prompt:"（你唔食蔥）",title:"🙏 想走蔥，點講？",options:[{jp:"ねぎ抜{ぬ}きに していただけますか？",yue:"可唔可以走蔥？"},{jp:"ねぎを 多{おお}めに お願{ねが}いします",yue:"蔥多啲，唔該（相反）"},{jp:"ねぎ抜{ぬ}きに しろ",yue:"走蔥啦（好粗魯）"}]})},{id:"late2",lv:2,phase:"wait",task:()=>"等咗好耐，菜仲未嚟",build:()=>({staff:null,prompt:"（等咗好耐，菜仲未嚟）",title:"⌛ 菜仲未嚟，點講？",reply:Ua.staff.sorry,options:[{jp:"注文{ちゅうもん}した 料理{りょうり}が まだ 来{き}ていないんですが…",yue:"我叫咗嘅菜仲未嚟…"},{jp:"早{はや}く しろ",yue:"快啲啦（好粗魯）"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"clear2",lv:2,phase:"after",task:()=>"",build:()=>({staff:{jp:"お下{さ}げしても よろしいですか？",yue:"可唔可以收走碟？"},title:"🍽️ 食晒喇，點答？",options:[{jp:"はい、 お願{ねが}いします",yue:"好，唔該"},{jp:"すみません、 まだ 食{た}べています",yue:"唔好意思，我仲食緊（同情況唔符）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"cashonly2",lv:2,phase:"pay",init:n=>{n.f.cashOnly=!0},task:()=>"你有現金",build:()=>({staff:{jp:"現金{げんきん}のみと なっておりますが…",yue:"我哋只收現金…"},title:"💴 只收現金",options:[{jp:"じゃあ、 現金{げんきん}で 払{はら}います",yue:"咁我畀現金"},{jp:"カードで 払{はら}います",yue:"我碌卡（唔收卡）"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"receipt2",lv:2,phase:"receipt",task:()=>"你想要收據",build:()=>({staff:null,prompt:"（想要張收據，抬頭唔使寫）",title:"🧾 想要收據，點講？",options:[{jp:"領収書{りょうしゅうしょ}を いただけますか？ 宛名{あてな}は なしで 大丈夫{だいじょうぶ}です",yue:"可唔可以畀張收據？抬頭唔使寫"},{jp:"領収書{りょうしゅうしょ}を よこせ",yue:"收據拎嚟（好粗魯）"},{jp:"お箸{はし}を ください",yue:"唔該畀對筷子（唔對題）"}]})}],_f={onigiri:["おにぎり","飯糰"],misoshiru:["味噌汁{みそしる}","麵豉湯"],oyakodon:["親子丼{おやこどん}","親子丼"],ramen:["ラーメン","拉麵"]};function T1(n){return _f[n][0]}function A1(n){return _f[n][1]}function R1(n,t){var o;const e=Be(),i=E1.filter(r=>r.lv<=e&&(!r.when||r.when(n))),s=[],a=new Set;for(;s.length<t;){const r=i.filter(m=>!s.includes(m)&&!a.has(m.phase));if(!r.length)break;const c=r.map(m=>m.lv===e?3:1);let l=Math.random()*c.reduce((m,p)=>m+p,0),u=0;for(let m=0;m<r.length;m++)if(l-=c[m],l<=0){u=m;break}const h=r[u];s.push(h),a.add(h.phase)}for(const r of s)(o=r.init)==null||o.call(r,n);return s}const C1=[1,2,3,3],P1=[{id:"hat_chef",slot:"hat",price:0,emoji:"👨‍🍳",jp:"コック帽{ぼう}",yue:"廚師帽"},{id:"hat_hachimaki",slot:"hat",price:80,emoji:"🎌",jp:"はちまき",yue:"頭巾（打氣用）"},{id:"hat_straw",slot:"hat",price:180,emoji:"👒",jp:"麦{むぎ}わら帽子{ぼうし}",yue:"草帽"},{id:"neck_bell",slot:"neck",price:60,emoji:"🔔",jp:"鈴{すず}",yue:"鈴鐺"},{id:"neck_scarf",slot:"neck",price:120,emoji:"🧣",jp:"スカーフ",yue:"頸巾"},{id:"deco_lantern",slot:"deco",price:100,emoji:"🏮",jp:"提灯{ちょうちん}",yue:"燈籠"},{id:"deco_noren",slot:"deco",price:150,emoji:"🎏",jp:"のれん",yue:"門簾"},{id:"deco_bonsai",slot:"deco",price:220,emoji:"🪴",jp:"盆栽{ぼんさい}",yue:"盆栽"},{id:"deco_maneki",slot:"deco",price:350,emoji:"🐱",jp:"招{まね}き猫{ねこ}",yue:"招財貓（客人多啲）"}],ra=[{id:"usagi",jp:"うさぎさん",yue:"兔仔",color:16447216,ear:"long",weight:10,tip:1},{id:"kuma",jp:"くまさん",yue:"熊仔",color:9067067,ear:"round",weight:10,tip:1},{id:"kitsune",jp:"きつねさん",yue:"狐狸",color:15041082,ear:"pointy",weight:8,tip:1.2},{id:"tanuki",jp:"たぬきさん",yue:"狸貓",color:8088152,ear:"round",mask:!0,weight:6,tip:1.3},{id:"shiba",jp:"柴犬{しばいぬ}さん",yue:"柴犬",color:14260814,ear:"pointy",weight:4,tip:1.6,rare:!0},{id:"maneki",jp:"招{まね}き猫{ねこ}さま",yue:"招財貓大人",color:16777215,ear:"pointy",weight:1,tip:5,rare:!0,legend:!0}],os=5,Dt={suspicion:0,pot:0,combo:1,persona:null,exposes:0,raid:null,earned:0,active:!1},L1=()=>Object.assign(Dt,{suspicion:0,pot:0,combo:1,persona:null,exposes:0,raid:null,earned:0,active:!0}),Fn=n=>{Dt.suspicion=Math.max(0,Math.min(os,Dt.suspicion+n))},vf=()=>it().chapterShifts.dark||0,k1=n=>Math.max(1,Math.min(5,Math.round(n*100)/100)),rs=n=>{it().darkRating=k1((it().darkRating??3)+n)};let wa=null;function ji(){const n=de("#darkbar");if(!n)return;if(n.classList.toggle("show",Dt.active),!Dt.active){wa=null;return}const t=wa;wa={sus:Dt.suspicion,pot:Dt.pot};const e=Array.from({length:os},(o,r)=>r<Dt.suspicion?"●":"○").join("");if(n.dataset.sus=Dt.suspicion,n.replaceChildren(M("span",{class:"db-sus",title:"懷疑度：滿 5 食評家突擊"},`👀 ${e}`),M("span",{class:"db-pot",title:"黑錢彩池：收手先落袋"},`💰 ${Dt.pot}`),M("span",{class:"db-combo"},`🔥x${Dt.combo.toFixed(2)}`),M("span",{class:"db-rating"},`⭐${(it().darkRating??3).toFixed(2)}`)),!t)return;const i=(o,r,c,l)=>{var u;(u=n.querySelector(o))==null||u.classList.add("bump"),n.append(M("span",{class:`db-delta ${c}`,style:`left:${l}`},r))},s=wa.sus-t.sus,a=wa.pot-t.pot;s&&i(".db-sus",`👀 ${s>0?"+":""}${s} 懷疑`,s>0?"up":"down","8px"),a&&i(".db-pot",`💰 ${a>0?"+":""}${a}`,a>0?"coin":"up","45%")}function I1(){Dt.active=!1,ji()}function yf(){return{coins:200+30*Math.min(vf(),5),exposes:1}}async function D1(){const n=yf();ji(),await new Promise(t=>{const e=M("button",{class:"btn primary big","data-dark":"start",onclick:()=>i.close()},"🔪 開工"),i=Si("今晚目標",M("div",{class:"dark-goals"},M("p",{},`⭐ 賺到 ${n.coins} 🪙（彩池要收手先計）`),M("p",{},`⭐ 被揭穿最多 ${n.exposes} 次`),M("p",{},"⭐ 冇俾食評家拆穿"),M("div",{class:"sub"},"每次浮誇介紹，紅利會入 💰 彩池；繼續搏有 🔥 combo，被揭穿就冇一半。懷疑度 👀 滿 5，食評家突擊！")),{footer:e,onClose:t})})}function U1(n){const t=yf(),e=[{ok:n.coins>=t.coins,label:`賺 ${n.coins} / ${t.coins} 🪙`},{ok:Dt.exposes<=t.exposes,label:`被揭穿 ${Dt.exposes} 次（≤ ${t.exposes}）`},{ok:Dt.raid!=="lose",label:Dt.raid==="win"?"食評家突擊：頂住咗！":Dt.raid==="lose"?"食評家突擊：被拆穿":Dt.raid==="confess"?"食評家突擊：認錯":"冇被突擊"}],i=e.filter(a=>a.ok).length,s=it();return s.darkBest=Math.max(s.darkBest||0,i),Re(),{stars:i,res:e}}function N1(){const n=Object.entries($d).filter(([,e])=>!e.minShift||vf()>=e.minShift);let t=Math.random()*n.reduce((e,[,i])=>e+i.weight,0);for(const[e,i]of n)if(t-=i.weight,t<=0)return{id:e,...i};return{id:n[0][0],...n[0][1]}}function O1(n){Fe(`${n.icon} ${n.name}：${n.hint}`,3600)}const Vh=(n,t,e={})=>M("div",{class:"dress-opt",...e},M("b",{class:"jp-inline",html:Xe(n)}),t?M("small",{},t):null);async function F1(n,t){var d;const e=Dt.persona,i=Be(),s=ra.find(f=>f.id===Dt.custId)||{id:Dt.custId||"usagi"},a=cx[e.like],o=a[Math.min(i,a.length-1)];jt(t,"cust",o.jp,i===0?o.yue:"",rn(s.id,o));const r=await Ge(Co.map(f=>({value:f,el:Vh(`${f.icon} ${f.jp}`,i===0?f.yue:"",{"data-dress":`style:${f.id}`})})),{title:M("div",{class:"panel-title"},`${e.icon} 客人想要咩擺盤？`),cols:3}),c=r.value;t.styleDish(c.plate,c.garnish),Ft("cust");const u=2-Math.abs(Co.findIndex(f=>f.id===c.id)-Co.findIndex(f=>f.id===e.like)),h=Co.find(f=>f.id===e.like),m=(d=r.grid.querySelector(`[data-dress="style:${h.id}"]`))==null?void 0:d.closest(".choice");r.button.classList.add(u===2?"fb-right":"fb-wrong"),u<2&&(m==null||m.classList.add("fb-answer"));const p=[.85,1,1.25][u];u===2?(Fn(-1),xe("⭕ 擺盤正中！懷疑 -1、收入 x1.25","perfect"),tt("perfect")):u===1?(xe("🔺 差少少：收入照舊","good"),tt("good")):(Fn(1),xe("❌ 擺盤唔啱！懷疑 +1、收入 x0.85","miss"),tt("bad")),ji(),u<2&&De(`客人講「${o.yue}」→ 要 ${h.icon} ${h.jp.replace(/\{[^}]*\}/g,"")}（${h.yue}）`,4e3);const g=lx[u];await Promise.race([jt(t,"cust",g.jp,g.yue,rn(s.id,g)),Qt(3e3)]),await Qt(500),Ft("cust");const{value:_}=await Ge(["honest","mild","grand"].map(f=>({value:f,el:Vh(Xd(n,f).jp,`${Va[f].label} · 紅利 x${Va[f].mult}`,{"data-dress":`pitch:${f}`})})),{title:M("div",{class:"panel-title"},"🍽️ 上菜！點介紹？越浮誇紅利越多，越易被追問")});return{style:c.id,plate:c.plate,garnish:c.garnish,pitch:_,matches:u,lookMult:p}}function B1(n,t,e){return{...ux(t,e.matches,e.pitch),style:e.style,plate:e.plate,garnish:e.garnish,pitch:e.pitch,matches:e.matches,lookMult:e.lookMult??1,outcome:"none"}}const cc=(n,t,e)=>{const i=e[Math.min(Be(),2)]||e[0];return jt(n,"cust",i.jp,i.yue,rn(t.id,i))},z1=()=>{const n=Be(),t=rx.filter(i=>i.lv<=n),e=t.filter(i=>i.lv===n);return Ue(e.length&&Math.random()<.7?e:t)},j1=(n,t)=>{const e=Object.keys(ka),i=le(e.filter(a=>a!==n.kind)).slice(0,t?2:3),s=le([n.kind,...i]).map(a=>({value:a,el:M("div",{"data-excuse":a},M("b",{class:"jp-inline",html:Xe(ka[a].jp)}),M("small",{},ka[a].yue))}));return t&&s.push({value:"honest",el:M("div",{"data-excuse":"honest"},"🙇 老實交代",M("small",{},"收入 x0.8，懷疑度 -1"))}),s};async function xf(n,t,e,i,s){var u,h;const a=z1();Dt.probe=a;const o=rn(t.id,a);_n(a.key),jt(n,"cust",a.jp,"",o,{hidden:e});const r=await Ge(j1(a,i),{title:M("div",{class:"panel-title"},s)});Ft("cust");const c=r.value===a.kind;r.value!=="honest"&&(we(a.key,c),In(a.lv,c),r.button.classList.add(c?"fb-right":"fb-wrong"),c||(h=(u=r.grid.querySelector(`[data-excuse="${a.kind}"]`))==null?void 0:u.closest(".choice"))==null||h.classList.add("fb-answer"),xe(c?"⭕ 藉口啱題！":"❌ 答非所問…",c?"good":"miss"),tt(c?"good":"bad"),c||De(`佢問：「${a.yue}」→ 應該答「${ka[a.kind].yue}」`,3500),await Qt(900));const l=r.value==="honest"?dx.honest:ka[r.value];return await jt(n,"cat",l.jp,l.yue,"cat"),Ft("cat"),{answer:r.value,right:c,probe:a}}function H1(n){var t;return n==="honest"?0:Math.max(0,Math.min(1,Va[n].ask+(((t=Dt.persona)==null?void 0:t.ask)||0)+Dt.suspicion*.08))}async function V1(n,t,e,i){if(e.pitch==="honest")return xe("🙂 如實介紹：冇紅利、冇風險","good"),e.outcome="plain";if(Math.random()>=H1(e.pitch))return xe("😌 客人冇追問！紅利入彩池","perfect"),tt("good"),await Qt(700),e.outcome="none";const{answer:s,right:a}=await xf(n,t,i,!0,"🤨 客人追問！揀啱藉口（聽清楚佢問咩）");let o;return s==="honest"?(o="honest",xe("🙇 老實交代：收入 x0.8、懷疑 -1","good"),await cc(n,t,nc.forgive),tt("good")):Math.random()<(a?Math.max(.5,1-Dt.suspicion*.1):.15)?(o="believe",xe("✅ 客人信咗！紅利入彩池","perfect"),await cc(n,t,nc.believe),tt("perfect")):(o="expose",xe("💥 被揭穿！冇收入、彩池減半、懷疑 +2","miss"),await cc(n,t,nc.expose),tt("bad"),n.shake(.4)),Ft("cust"),e.outcome=o}function G1(n,t){const e=Va[n.pitch],i=n.outcome;let s=t,a=0;return i==="none"||i==="believe"?(a=Math.round(t*(e.mult-1)*Dt.combo),Dt.pot+=a,Dt.combo=Math.min(2,Dt.combo+.25),rs(.05),Fe(Ue(i==="believe"?Vs.believe:Vs.quiet),2400)):i==="honest"?(s=Math.round(t*.8),Fn(-1),Dt.combo=1,rs(.02),Fe(Ue(Vs.honest),2400)):i==="expose"?(s=0,Dt.pot=Math.floor(Dt.pot/2),Fn(2),Dt.combo=1,Dt.exposes++,rs(-.15),Fe(Ue(Vs.expose),2600,"bad")):rs(.02),n.bonus=a,Re(),ji(),s}function Yl(){const n=Dt.pot;return n?(Dt.pot=0,Dt.earned+=n,it().coins+=n,Re(),tt("coin"),Zn(n),En(),ji(),n):0}async function W1(){if(Dt.pot<=0||(await Ge([{value:"bank",el:M("div",{"data-bank":"bank"},`💰 收手落袋 +${Dt.pot}`,M("small",{},"懷疑度 -1，combo 歸零"))},{value:"go",el:M("div",{"data-bank":"go"},`🎲 繼續搏（🔥x${Dt.combo.toFixed(2)}）`,M("small",{},"下位客紅利更多；被揭穿彩池冇一半"))}],{title:M("div",{class:"panel-title"},`彩池 💰 ${Dt.pot} · 懷疑度 👀 ${Dt.suspicion}/${os}`)})).value!=="bank")return 0;Fn(-1),Dt.combo=1;const t=Yl();return xe(`+${t} 落袋！`,"good"),t}const $1=()=>Yl();async function X1(n,t){if(Dt.suspicion<os)return 0;const e=ra.find(o=>o.id==="kitsune")||ra[0];tt("rare"),n.setView("kitchen"),await n.customerIn(e),Fe("🚨 食評家突擊！懷疑度爆咗",3e3,"bad");const i=await Ge([{value:"fight",el:M("div",{"data-raid":"fight"},"😤 硬撐到底",M("small",{},"連續答啱 2 條：彩池 x1.5"))},{value:"confess",el:M("div",{"data-raid":"confess"},"🙇 認錯",M("small",{},"彩池清零，評分 -0.1"))}],{title:M("div",{class:"panel-title"},`🧐 食評家：「我要睇吓你嘅廚房。」彩池 💰 ${Dt.pot}`)});let s=i.value==="fight";if(s)for(let o=0;o<2&&s;o++)s=(await xf(n,e,t,!1,`🧐 食評家問題 ${o+1} / 2`)).right;let a=0;return i.value==="confess"?(Dt.pot=0,rs(-.1),Fn(-os),Fn(1),Dt.raid="confess",Fe("🙇 認咗錯，食評家搖頭離開",2600)):s?(Dt.pot=Math.round(Dt.pot*1.5),rs(.2),Fn(-os),Fn(1),Dt.raid="win",tt("perfect"),Fe(Ue(Vs.raidWin),3e3,"rare"),a=Yl()):(Dt.pot=0,rs(-.3),Fn(-os),Fn(2),Dt.raid="lose",tt("bad"),n.shake(.5),Fe(Ue(Vs.raidLose),3e3,"bad")),Dt.combo=1,Re(),ji(),await Qt(900),n.customerOut(),await Qt(500),a}const Mf={none:"冇人追問，紅利入袋",plain:"如實介紹，冇風險",honest:"老實交代，客人原諒",believe:"藉口成功，蒙混過關",expose:"被揭穿，今餐白做"};function Sf(n,t){const e=Xd(n,t.pitch);return M("div",{class:"dark-report","data-secret":n.id},M("div",{class:"dark-tag"},`後廚秘密 ${n.number} · ${n.shortcut}`),M("div",{class:"dark-dish-heading"},ni(`dish_${n.id}`,n.yue),M("h3",{},n.yue)),M("div",{class:"dark-scores"},...[["好味",t.taste],["賣相",t.look],["宣傳誇張度",t.hype]].map(([i,s])=>M("div",{},M("b",{},`${s}`),M("span",{},i)))),M("p",{},`你講嘅菜名：${e.yue}`),M("p",{},`結果：${Mf[t.outcome]||""}`),M("p",{class:"dark-truth"},`真正做法：${n.truth}`),M("p",{},n.gag),Mn("中身{なかみ}は？",{yue:n.lesson,voice:"word"}))}async function q1(n,t){const e=it().darkSecrets[n.id];if(it().darkSecrets[n.id]={...t,bestTaste:Math.max((e==null?void 0:e.bestTaste)||0,t.taste),visits:((e==null?void 0:e.visits)||0)+1},Re(),e){Fe(`🗂️ ${n.yue}：${Mf[t.outcome]||""}`,1800);return}tt("rare"),await new Promise(i=>{const s=M("button",{class:"btn primary big dark-control",onclick:()=>a.close()},"收低秘密卡，繼續出餐"),a=Si("新後廚秘密！",M("div",{},Sf(n,t),M("div",{class:"sub"},"圖鑑入面可以再睇。")),{footer:s,onClose:i})})}function _s(n,t=""){const e=n.verb?Se(n.verb):null;return M("div",{class:"mg-head"},Mn(n.jp,{yue:n.yue,voice:"cat"}),e?M("div",{class:"verb-chip"},ii(e)," 新字 ",M("span",{class:"jp-inline",html:e.jp.replace(/([一-鿿]+)\{([^}]+)\}/g,"<ruby>$1<rt>$2</rt></ruby>")}),` = ${e.yue}`):null,t?M("div",{class:"mg-help"},t):null)}async function Y1(n,t){let e=0;const i=le([...n.need,...n.decoys]),s=M("div",{class:"ing-grid"}),a=M("div",{class:"pick-prompt"},M("div",{class:"pick-label"},"🐾 聽小黑講…"));i.forEach(o=>{const r=Se(o),l=r.textIcon&&r.emoji==="💬"?M("span",{class:"emo ing-jp",html:Xe(r.jp)}):M("span",{class:"emo"},ii(r)),u=M("button",{class:"ing"},l,M("span",{class:"ing-yue"},r.yue.replace(/（.*?）/g,"")));u.dataset.id=o,s.append(u)}),Qe(_s(n),a,s),await qe(n.jp,"cat");for(let o=0;o<n.need.length;o++){const r=n.need[o],c=Se(r);_n(r),a.innerHTML="",s.dataset.want=r,a.append(M("div",{class:"pick-label"},`請攞（${o+1}/${n.need.length}）：`),Mn(c.jp,{voice:"word",size:"big"})),qe(c.jp,"word");let l=!1;await new Promise(u=>{const h=m=>{const p=m.target.closest(".ing");if(!(wn()||!p||p.classList.contains("used")))if(p.dataset.id===r)tt("good"),p.classList.add("used","ok"),t.placeIngredient(r,o,n.need.length),we(r,!l),s.removeEventListener("click",h),u();else{tt("bad"),e++,l=!0,p.classList.remove("shake"),p.offsetWidth,p.classList.add("shake");const g=Se(p.dataset.id);De(`呢個係「${g.yue}」，日文叫 ${g.jp.replace(/\{.*?\}/g,"")}`),qe(g.jp,"word")}};s.addEventListener("click",h)}),await Qt(250)}return Math.max(.3,1-e*.2)}async function K1(n,t){var u;const e=n.rounds||3,i=M("div",{class:"tbar"}),s=M("div",{class:"tzone"}),a=M("div",{class:"tsweet"}),o=M("div",{class:"tneedle"});s.append(a),i.append(s,o);const r=M("div",{class:"mg-count"}),c=M("button",{class:"btn primary big tapzone"},n.anim==="chop"?"🔪 切！":"👆 撳！");Qe(_s(n,"指針入綠色區時撳掣；深綠色最準！"),r,i,c),qe(n.jp,"cat"),t.catFace("board"),n.anim==="chop"&&t.cat.holding("knife");let l=0;for(let h=0;h<e;h++){r.textContent=`${h+1} / ${e}`;const m=n.zone*(1-h*.12),p=.15+Math.random()*(.7-m);s.style.left=p*100+"%",s.style.width=m*100+"%";const g=.9+h*.25+it().level*.03;let _=0,d=1,f=vn(),S;const v=()=>{const T=vn(),U=(T-f)/1e3;f=T,_+=d*g*U,_>1&&(_=1,d=-1),_<0&&(_=0,d=1),o.style.left=_*100+"%",S=requestAnimationFrame(v)};S=requestAnimationFrame(v),await new Promise(T=>{c.onclick=()=>{wn()||T()}}),cancelAnimationFrame(S),t.cat.play(n.anim||"chop",.25),tt(n.anim==="chop"?"chop":"pop");const b=p+m/2,P=Math.abs(_-b);let R;P<m*.17?(R=1,xe("PERFECT!","perfect"),tt("perfect")):P<m/2?(R=.7,xe("GOOD","good"),tt("good")):(R=.2,xe("MISS","miss")),l+=R,h===0&&n.anim==="chop"&&t.workItems.children.length&&t.showProp((u=n.add)==null?void 0:u[0]),await Qt(380)}return t.cat.holding(null),n.add&&n.anim!=="chop"&&t.showProp(n.add[0]),l/e}async function J1(n,t){const e=n.taps||10,i=n.time||5;let s=0;const a=M("button",{class:"ring","aria-label":`連撳飯糰 ${e} 次`},M("div",{class:"ring-in"},ni("verb_nigiru"))),o=M("div",{class:"mg-timer"},M("i")),r=M("div",{class:"mg-count","aria-live":"polite"},`0 / ${e}`);Qe(_s(n,`連撳飯糰 ${e} 次！第一下先開始 ${i} 秒倒數。`),r,o,a),qe(n.jp,"cat"),t.catFace("board");let c=!1,l=!1,u=0;const h=await new Promise(m=>{let p;const g=()=>{if(wn()){p=requestAnimationFrame(g);return}const _=(vn()-u)/1e3;if(o.firstChild.style.width=Math.max(0,1-_/i)*100+"%",_>=i&&!l){l=!0,m(s/e);return}p=requestAnimationFrame(g)};a.addEventListener("pointerdown",_=>{if(_.preventDefault(),!(l||wn())&&(c||(c=!0,u=vn(),p=requestAnimationFrame(g)),s++,r.textContent=`${s} / ${e}`,tt("pop"),t.cat.play(n.anim||"press",.18),a.style.setProperty("--p",Math.min(1,s/e)),a.classList.remove("hit"),a.offsetWidth,a.classList.add("hit"),s>=e)){l=!0,cancelAnimationFrame(p);const d=i-(vn()-u)/1e3;m(d>i*.4?1:.85)}})});return n.add&&t.showProp(n.add[0]),h>=1?(xe("PERFECT!","perfect"),tt("perfect")):h>=.7?(xe("GOOD","good"),tt("good")):xe("OK","miss"),await Qt(450),Math.max(.3,Math.min(1,h))}async function Z1(n,t){const e=n.turns||3,i=M("div",{class:"stirpad"},M("div",{class:"stir-dot"}),M("div",{class:"stir-label"},"🥄 手指轉圈")),s=M("div",{class:"mg-timer prog"},M("i"));Qe(_s(n,`按住圓盤畫 ${e} 個圈，順時針或逆時針都得。`),s,i),qe(n.jp,"cat"),t.catFace("stove"),t.cat.holding("ladle"),t.heat(!0),n.add&&t.showProp(n.add[0]);let a=0,o=null,r=null,c=0;const l=await new Promise(u=>{const h=m=>{if(wn()){o=null;return}const p=i.getBoundingClientRect(),g=m.clientX-(p.left+p.width/2),_=m.clientY-(p.top+p.height/2);if(Math.hypot(g,_)<15)return;const d=Math.atan2(_,g);if(i.querySelector(".stir-dot").style.transform=`rotate(${d}rad) translateX(${p.width*.36}px)`,o!==null){let S=d-o;S>Math.PI&&(S-=Math.PI*2),S<-Math.PI&&(S+=Math.PI*2),a+=Math.abs(S),r||(r=vn()),t.cat.setMode("stir");const v=Math.floor(a/(Math.PI/2));v>c&&(c=v,tt("bubble"))}o=d;const f=a/(e*Math.PI*2);if(s.firstChild.style.width=Math.min(1,f)*100+"%",f>=1){i.removeEventListener("pointermove",h);const S=(vn()-r)/1e3;u(S<e*1.4?1:S<e*2.5?.8:.6)}};i.addEventListener("pointerdown",m=>{try{i.setPointerCapture(m.pointerId)}catch{}o=null}),i.addEventListener("pointermove",m=>{(m.buttons||m.pointerType==="touch")&&h(m)}),i.addEventListener("pointerup",()=>{o=null,t.cat.setMode("idle")})});return t.cat.setMode("idle"),t.cat.holding(null),t.heat(!1),l>=1?(xe("PERFECT!","perfect"),tt("perfect")):(xe("GOOD","good"),tt("good")),await Qt(450),l}async function Q1(n,t){const[e,i]=n.zone,s=M("div",{class:"gauge"},M("div",{class:"gzone",style:`bottom:${e*100}%;height:${(i-e)*100}%`}),M("div",{class:"gfill"}),M("div",{class:"gtop"},"🔥 滾瀉")),a=M("button",{class:"btn primary big holdbtn"},"🔥 長按加熱"),o=M("div",{class:"hold-wrap"},s,a);Qe(_s(n,"長按加熱，升到綠色區就放手！暫停後要再長按。"),o),qe(n.jp,"cat"),t.catFace("stove"),n.add&&t.showProp(n.add[0]);let r=0,c=!1,l=vn(),u,h=0;const m=()=>{c=!1,cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle")};document.addEventListener("gamepause",m);const p=s.querySelector(".gfill"),g=await new Promise(_=>{const d=()=>{const S=vn(),v=(S-l)/1e3;if(l=S,c&&(r+=v*(.32+r*.35),h+=v,h>.25&&(h=0,tt(r>i?"boil":"bubble"))),p.style.height=Math.min(1,r)*100+"%",p.classList.toggle("hot",r>i),r>=1){f();return}u=requestAnimationFrame(d)},f=()=>{cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle");const S=(e+i)/2;r>=e&&r<=i?_(Math.abs(r-S)<(i-e)*.2?1:.75):_(.3)};a.addEventListener("pointerdown",S=>{S.preventDefault();try{a.setPointerCapture(S.pointerId)}catch{}c||wn()||(c=!0,l=vn(),u=requestAnimationFrame(d),t.heat(!0),t.cat.holding(n.anim==="pour"?null:"ladle"),t.cat.setMode(n.anim==="pour"?"idle":"stir"),n.anim==="pour"&&t.cat.play("pour",.8))}),a.addEventListener("pointerup",()=>{c&&(c=!1,f())}),a.addEventListener("pointercancel",()=>{c&&(c=!1,f())})});return document.removeEventListener("gamepause",m),t.cat.holding(null),g>=1?(xe("PERFECT!","perfect"),tt("perfect")):g>=.7?(xe("GOOD","good"),tt("good")):(xe(r>=1?"滾瀉！":"未夠熱","miss"),tt("bad"),De(n.tip,3e3)),await Qt(500),g}function tM(n){const t=(e,i,s)=>M("div",{class:`demo-row demo-${e}`},M("b",{},i),M("small",{},s));return new Promise(e=>{const i=M("button",{class:"btn primary big","data-demo":"go",onclick:()=>{it().sneakTap=!0,Re(),tt("tap"),e()}},"明白，開始！");Qe(M("div",{class:"panel-title"},"🤫 偷偷煮：點玩？"),t("safe","① 🟢 客人傾偈 → 點一下開始","偷偷做嘢，進度條會行"),t("tell","② 🟡 客人講嘢衝住你 → 即刻再點一下停","聽完句嘢有少少時間反應"),t("look","③ 🔴 客人望緊廚房 → 唔好掂","佢轉返去（變返🟢）再點一下開始；被望到 = 懷疑 +1"),i)})}async function eM(n,t){const e=Be(),i=Dt.persona||$d.tourist;it().sneakTap||await tM();const s=n.work||[4.5,5.5,6.5,6.5][e],a=[1500,1150,900,900][e]*i.tell,o=1300*i.look,r=250,c=Math.min(3,e+1+(i.turn>=.5?1:0)),l={1:[.3],2:[.2,.55],3:[.15,.4,.65]}[c].map(At=>At+(Math.random()-.5)*.08),u=n.limit||Math.round(s*2+c*(2.5+(a+o)/1e3)+3),h=pf(Dt.custId||"usagi"),m=At=>ox[At].filter(kt=>kt.lv<=e);[...m("safe"),...m("turn")].forEach(At=>Da(At.jp,h)),n.station&&t.useStation(n.station);const p=M("div",{class:"sneak-face"},"🗣️"),g=M("div",{class:"sneak-state"},`🟢 ${i.icon} ${i.name}同朋友傾緊偈 → 點一下開始`),_=M("div",{class:"sneak-line"}),d=M("div",{class:"sneak-cust","data-phase":"idle","data-cue":"safe"},p,M("div",{class:"sneak-talk"},g,_)),f=M("div",{class:"mg-timer prog"},M("i")),S=M("div",{class:"mg-timer"},M("i")),v=M("div",{class:"sneak-bars"},M("span",{title:"進度"},"🍳"),f,M("span",{title:"時間"},"⏱️"),S),b=M("button",{class:"btn primary big holdbtn sneak-btn","data-sneak":"hold","data-state":"ready"},n.btn);Qe(_s(n,e===0?"🟢 點一下開始 → 🟡 客人講嘢衝你：再點一下停 → 🟢 佢轉返去：再點一下開始":e===1?"傾偈就點一下開始；聽到講嘢衝你就點一下停，佢轉返去再點":"靠耳仔：傾偈就點一下開始；講嘢衝你就點一下停"),d,v,b).classList.add("sneak-panel"),qe(n.jp,"cat");let R=!1,T=0,U=!1,q=!1,y=0,x=0,D=0,N="away",B=0,I=0,O=0,L=0,F=0,rt=0,ht=0,dt=!1;const Ht=At=>{N=At,d.dataset.phase=At},Wt=(At,kt,Vt)=>{d.dataset.cue=At,kt&&(g.textContent=kt),Vt&&(p.textContent=Vt)},K=(At,kt)=>{b.dataset.state=At,b.textContent=kt},ct=()=>N==="look"?K("look","🙈 唔好掂！"):N==="tell"&&d.dataset.cue==="tell"?K("tell","✋ 點一下停！"):U?K("stop","⏸ 停咗｜點一下繼續"):K("ready",n.btn),Mt=()=>{R=!1,b.classList.remove("on"),v.classList.remove("on"),ct(),t.cat.setMode("idle"),n.ding&&t.microwaveLight(!1)},_t=()=>Mt();document.addEventListener("gamepause",_t);const Bt=await new Promise(At=>{let kt;const Vt=mt=>{q||(q=!0,cancelAnimationFrame(kt),Mt(),K(mt>=.9?"hold":"stop",mt>=.9?"✅ 完成！":"⌛ 時間到"),At(mt))},H=mt=>{D++,dt=!0,Mt(),Fn(1),ji(),tt("bad"),t.shake(.4),xe("👀 被發現！懷疑度 +1","miss"),Wt("caught",`🔴 ${mt}｜被發現！已停手，等佢轉返去再點一下`,"🤨"),K("look","🙈 唔好掂！")},A=()=>{Wt("tell","🟡 客人講嘢衝住你！即刻點一下停！","❓"),R||K("tell","✋ 點一下停！")},lt=(mt,vt)=>{const C=Ue(m(vt?"turn":"safe"));_.replaceChildren(Mn(C.jp,{yue:e===0?C.yue:"",voice:h}));const w=Promise.race([qe(C.jp,h),Qt(4e3)]);vt?(Ht("tell"),L=1/0,e===0?A():Wt("safe",`🟢 ${i.icon} 客人講緊嘢…聽清楚`,"🗣️"),w.then(()=>{N!=="tell"||q||(L=vn()+a,e===1&&A())})):(Wt("safe",`🟢 ${i.icon} 同朋友傾緊偈 → 點一下開始`,"🗣️"),O=mt+(1200+Math.random()*1200)*i.gap)},st=()=>{const mt=vn(),vt=(mt-I)/1e3;if(I=mt,N==="away"&&!ht?y<l.length&&x>=l[y]?(y++,lt(mt,!0)):mt>=O&&lt(mt,!1):N==="tell"?mt>=L&&(Ht("look"),F=mt,rt=mt+o,dt=!1,Wt("look","🔴 客人望緊廚房！唔好掂！","👀"),R||K("look","🙈 唔好掂！")):N==="look"&&(R&&!dt&&mt>=F+r&&H(n.caught),mt>=rt&&(Ht("away"),_.replaceChildren(),dt||(xe("😌 冇被發現！","good"),tt("good")),Wt("safe",`🟢 ${dt?"佢":"冇發現！佢"}轉返去傾偈 → 再點一下開始`,"🗣️"),R||K("ready",n.btn),O=mt+(900+Math.random()*900)*i.gap)),R&&!ht&&(x=Math.min(y<l.length||N!=="away"?.97:1,x+vt/s),x>=1))if(n.ding)ht=mt+450,Mt(),b.disabled=!0,K("stop","⏳ 就嚟「叮」…");else return Vt(D?.9:1);if(ht&&mt>=ht)return tt("ding"),N==="look"&&H("「チン♪」——客人聽到晒！"),Vt(D?.9:1);const C=(mt-B)/1e3;if(f.firstChild.style.width=x*100+"%",S.firstChild.style.width=Math.max(0,1-C/u)*100+"%",d.dataset.progress=x.toFixed(2),C>=u)return Vt(Math.max(.3,x*.8));kt=requestAnimationFrame(st)},nt=()=>{N==="look"&&dt||(U||(U=!0,B=I=vn(),O=B+900+Math.random()*600,kt=requestAnimationFrame(st)),R=!0,b.classList.add("on"),v.classList.add("on"),K("hold",`🍳 ${n.btn.replace(/^\S*\s*點一下：/,"")}…（點一下停）`),t.cat.setMode("stir"),n.ding&&t.microwaveLight(!0),N==="look"&&!dt&&H(n.caught))},ut=()=>{Mt(),N==="tell"&&(Wt(e<2?"tell":"hid",`🫣 ${n.hide}…收埋咗，等佢望完`),K("tell","🫣 收埋咗"))};b.addEventListener("pointerdown",mt=>{if(mt.preventDefault(),q||wn()||ht)return;const vt=performance.now();vt-T<150||(T=vt,R?ut():nt())})});return document.removeEventListener("gamepause",_t),q&&Bt>=1?(xe("完美！冇俾人發現","perfect"),tt("perfect")):Bt>=.9?xe("做完！但俾人發現過","good"):(xe("做唔切！","miss"),tt("bad"),De(`被捉 ${D} 次；時間唔夠，味道會差啲`,3e3)),await Qt(500),Bt}async function nM(n){let t=0;const e=2+Math.floor(Math.random()*2),i=M("div",{class:"season-meter","aria-live":"polite"}),s=M("p",{},"先試味，再決定要唔要補。"),a=M("button",{class:"btn dark-control","data-season":"add"},"加一格調味"),o=M("button",{class:"btn dark-control","data-season":"taste"},"試味"),r=M("button",{class:"btn primary big dark-control","data-season":"serve"},"確認出餐"),c=()=>{i.textContent=`${"●".repeat(t)}${"○".repeat(5-t)}　${t} / 5`,a.disabled=t>=5};c(),a.addEventListener("click",()=>{t<5&&(t++,c(),s.textContent="加咗調味，試一啖先。")}),o.addEventListener("click",()=>{s.textContent=t===e?"啱啱好，仲食到蛋香同飯香！":t<e?"味道仲有啲淡。":"調味過重，蓋過食材味喇。",tt("tap")}),Qe(_s(n),i,s,M("div",{class:"dark-actions"},a,o),M("div",{class:"sub"},n.tip),r),await new Promise(u=>r.addEventListener("click",u,{once:!0}));const l=Math.max(.1,1-Math.abs(t-e)*.3);return tt(l>=.9?"perfect":"bad"),l}async function iM(n){const t=n.actions||[{id:"hot",icon:"♨️",label:"保持熱飲",detail:"用熱杯盛裝"},{id:"iced",icon:"🧊",label:"加冰做凍飲",detail:"用凍杯盛裝"},{id:"less_sugar",icon:"🥄",label:"減少糖量",detail:"只落半份糖"},{id:"no_sugar",icon:"🚫",label:"唔加糖",detail:"保持無糖"}];let e=0;for(_n(n.request);;){const i=M("div",{class:"mg-head"},M("div",{class:"panel-title"},n.title||"客人想要點樣嘅飲品？"),Mn(n.jp,{yue:Be()===0?n.yue:"",voice:n.voice||"cat",hidden:Be()>0,autoplay:!0}),M("div",{class:"mg-help"},"聽客人要求，揀實際做法。撳喇叭可以再聽。"));if(await new Promise(a=>{Qe(i,M("div",{class:"choices cols2 request-actions"},le(t).map(o=>M("button",{class:"choice","data-request":o.id,onclick:()=>{wn()||a(o.id)}},M("span",{class:"request-icon"},o.icon),M("b",{},o.label),Be()===0?M("small",{},o.detail):null))))})===n.request){we(n.request,e===0),tt("good");const a=Se(n.request);return await xi("做好喇，出餐！",M("div",{class:"panel-title"},"啱喇！客人嘅意思係："),Mn(a.jp,{yue:a.yue,voice:"word",autoplay:!0})),Math.max(.3,1-e*.2)}e++,tt("bad"),De(n.retry||"再聽一次：留意客人講緊冷熱，定係甜度。",3500)}}const sM=Object.fromEntries(Object.entries({pick:Y1,timing:K1,mash:J1,stir:Z1,hold:Q1,sneak:eM,season:nM,request:iM}).map(([n,t])=>[n,(...e)=>Ff(t,...e)])),_l=["hitotsu","futatsu","mittsu"],aM=["ikkan","nikan","sankan"],vl=["tamago_nigiri","salmon_nigiri"],oM=n=>vl.includes(n)?aM:_l;function Xn(n,t){let e=n.jp,i=n.yue;for(const[s,a]of Object.entries(t))typeof a=="string"&&gn[a]?(e=e.replaceAll(`{${s}}`,gn[a].jp),i=i.replaceAll(`{${s}Yue}`,gn[a].yue.replace(/（.*?）/g,""))):(e=e.replaceAll(`{${s}}`,String(a)),i=i.replaceAll(`{${s}}`,String(a)));return{jp:e,yue:i}}const rM={cat:{id:8,name:"春日部つむぎ"},word:{id:14,name:"冥鳴ひまり"},usagi:{id:10,name:"雨晴はう"},kuma:{id:11,name:"玄野武宏"},kitsune:{id:2,name:"四国めたん"},tanuki:{id:12,name:"白上虎太郎"},shiba:{id:13,name:"青山龍星"},maneki:{id:20,name:"もち子さん"}};function fs(n){const t=it();return n.unlock.level?t.level>=n.unlock.level:n.unlock.day?t.daysPlayed>=n.unlock.day:n.unlock.darkShift?(t.chapterShifts.dark||0)>=n.unlock.darkShift:!0}function bf(n){if(n.unlock.level)return`Lv.${n.unlock.level} 解鎖`;if(n.unlock.darkShift)return`暗黑食堂完成 ${n.unlock.darkShift} 更解鎖`;if(n.unlock.day){const t=Yx(),e=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4);return it().daysPlayed+1>=n.unlock.day?`聽日解鎖（仲有 ${e}:${String(i).padStart(2,"0")}）`:`第 ${n.unlock.day} 日解鎖`}return""}function yl(){const n=new Set;for(const[r,c]of Object.entries(gn))(c.cat==="num"||c.cat==="phrase")&&n.add(r);for(const r of jn.filter(fs))n.add(r.dish),r.ingredients.forEach(([c])=>n.add(c)),r.steps.forEach(c=>{c.verb&&n.add(c.verb),c.request&&n.add(c.request)});const t=it().srs;Object.keys(t).forEach(r=>{gn[r]&&n.add(r)});const e=[...n].filter(r=>gn[r]),i=e.filter(r=>t[r]&&t[r].box>=2).length,s=e.filter(r=>t[r]&&t[r].box>=5).length,a=e.filter(r=>t[r]).length,o=Ca.map(r=>{const c=new Set;if(r.id==="home")for(const[u,h]of Object.entries(gn))(h.cat==="num"||h.cat==="phrase")&&c.add(u);for(const u of jn.filter(h=>(h.chapter||"home")===r.id&&fs(h)))c.add(u.dish),u.ingredients.forEach(([h])=>c.add(h)),u.steps.forEach(h=>{h.verb&&c.add(h.verb),h.request&&c.add(h.request)});r.id==="konbini"&&Ny.forEach(u=>c.add(u)),r.id==="eki"&&Ky.forEach(u=>c.add(u)),r.id==="hotel"&&nx.forEach(u=>c.add(u));const l=[...c].filter(u=>gn[u]);return{id:r.id,name:r.name.split("・")[0],icon:r.icon,total:l.length,learned:l.filter(u=>t[u]&&t[u].box>=2).length}});return{total:e.length,learned:i,mastered:s,seen:a,unseen:e.length-a,chapters:o}}const wf=n=>"★".repeat(n)+"☆".repeat(3-n);function Ef(n,{onStart:t=null}={}){const e=Se(n.dish),i=M("div",{class:"recipe"},M("div",{class:"recipe-hero"},M("div",{class:"big-emo"},ii(e)),Mn(e.jp,{yue:e.yue,voice:"word",size:"big",autoplay:!0})),M("div",{class:"recipe-meta"},`🍽️ ${n.serves}　⏱️ 現實烹調：${n.time}　${it().stars[n.id]?wf(it().stars[n.id]):""}`),M("h3",{},"材料"),M("ul",{class:"ing-list"},n.ingredients.map(([o,r])=>{const c=Se(o);return M("li",{},M("button",{class:"mini-spk","aria-label":`再聽：${c.yue}`,onclick:()=>qe(c.jp,"word")},"🔊"),M("span",{class:"emo"},ii(c)),M("span",{class:"jp-inline",html:Xe(c.jp)}),M("span",{class:"amt"},r))})),M("h3",{},n.chapter==="dark"?"真正捷徑（浮誇菜名唔代表實際工序）":"做法（真係煮得㗎！）"),M("ol",{class:"howto"},n.howto.map(o=>M("li",{},o))));if(t){const[o,...r]=[...i.children],c={pick:"聽日文揀材料",mash:"連撳搓飯糰",timing:"指針入綠色區時撳掣",stir:"手指畫圈攪拌",hold:"長按加熱，綠色區放手",sneak:"點一下開始偷偷做；客人講嘢衝你就再點一下停",season:"先試味再調味",request:"聽客人要求，揀實際做法"},l=M("details",{class:"real-recipe"},M("summary",{},"📖 睇真實食譜、份量同烹調時間"),...r);i.replaceChildren(o,M("h3",{},"今次遊戲步驟"),M("ol",{class:"howto game-steps"},n.steps.map(u=>M("li",{},c[u.type]))),l)}const s=t?M("button",{class:"btn primary big",onclick:()=>{tt("tap"),a.close()}},"🔥 開始煮！"):null,a=Si("📖 食譜",i,{onClose:t,wide:!0,footer:s});return a}function xl(n="recipes"){const t=M("div",{class:"tabs"}),e=M("div",{class:"tab-content"}),i={recipes:"🍳 食譜",words:"📝 單詞",phrases:"💬 句子",secrets:"🌙 後廚",stats:"📊 紀錄"},s=a=>{if(t.querySelectorAll("button").forEach(o=>o.classList.toggle("on",o.dataset.t===a)),e.innerHTML="",a==="recipes"){const o=M("div",{class:"book-grid"});jn.forEach(l=>{const u=Se(l.dish),h=fs(l),m=M("div",{class:`book-card ${h?"":"locked"}`},M("div",{class:"big-emo"},h?ii(u):"🔒"),M("div",{class:"jp-inline",html:h?Xe(u.jp):"？？？"}),M("div",{class:"sub"},Ca.find(p=>p.id===(l.chapter||"home")).name),M("div",{class:"sub"},h?it().stars[l.id]?wf(it().stars[l.id]):"未煮過":bf(l)));h&&(m.onclick=()=>{tt("tap"),Ef(l)}),o.append(m)}),Bh.forEach(l=>o.append(M("div",{class:"book-card locked soon"},M("div",{class:"big-emo sil"},ni(`dish_${l.id}`,l.yue)),M("div",{class:"jp-inline",html:Xe(l.jp)}),M("div",{class:"sub"},"即將推出"))));const r=jn.length+Bh.length,c=jn.filter(fs).length;e.append(M("div",{class:"progress-line"},`收集 ${c} / ${r}`,M("div",{class:"bar"},M("i",{style:`width:${c/r*100}%`}))),o)}else if(a==="words"){const o=M("div",{class:"word-list"}),r=Object.keys(it().srs);r.length||o.append(M("p",{class:"muted"},"未學到字，去煮嘢先啦！")),r.sort((l,u)=>it().srs[u].box-it().srs[l].box).forEach(l=>{if(!gn[l])return;const u=Se(l),h=it().srs[l],m=["🌱","🌱","🌿","🌿","🌳","🌸"][h.box];o.append(M("div",{class:"word-row",onclick:()=>qe(u.jp,"word")},M("span",{class:"emo"},ii(u)),M("span",{class:"jp-inline",html:Xe(u.jp)}),M("span",{class:"yue"},u.yue),M("span",{class:"lvl",title:"熟練度"},m)))});const c=yl();e.append(M("div",{class:"progress-line"},`識咗 ${c.learned} / ${c.total} 個 · 🌸 熟晒 ${c.mastered} 個`,M("div",{class:"bar"},M("i",{style:`width:${c.total?c.learned/c.total*100:0}%`})),M("div",{class:"sub"},`見過 ${c.seen} 個 · 仲有 ${c.unseen} 個未見過　（🌱→🌸 越溫越熟）`),...c.chapters.filter(l=>l.total).map(l=>M("div",{class:"sub"},`${l.icon} ${l.name} ${l.learned} / ${l.total}`,M("div",{class:"bar"},M("i",{style:`width:${l.learned/l.total*100}%`}))))),o)}else if(a==="phrases"){const o=Be(),r=[...ql,...gf,...is.bye],c=r.filter(u=>it().srs[u.key]),l=r.filter(u=>(u.lv??0)<=o).length;e.append(M("div",{class:"progress-line"},`見過 ${c.length} 句 · 你而家嘅程度可以遇到 ${l} 句　（🌱→🌸 越溫越熟）`)),c.length||e.append(M("p",{class:"muted"},"未有句子，開店同客人傾偈先啦！"));for(const u of[0,1,2,3]){const h=c.filter(p=>(p.lv??0)===u).sort((p,g)=>it().srs[g.key].box-it().srs[p.key].box);if(!h.length)continue;e.append(M("div",{class:"sub"},`${oa[u].icon} ${oa[u].name}`));const m=M("div",{class:"word-list"});h.forEach(p=>{const g=it().srs[p.key],_=["🌱","🌱","🌿","🌿","🌳","🌸"][g.box];m.append(M("div",{class:"word-row",onclick:()=>qe(p.jp,"usagi")},M("span",{class:"jp-inline",html:Xe(p.jp)}),M("span",{class:"yue"},p.yue),M("span",{class:"lvl",title:"熟練度"},_)))}),e.append(m)}}else if(a==="secrets"){const o=Gs.filter(c=>it().darkSecrets[c.id]);e.append(M("p",{class:"sub"},`主廚秘密 ${o.length} / ${Gs.length} · 完成出餐揭曉後收藏`));const r=[...new Set(o.map(c=>c.shortcut))];e.append(M("div",{class:"dark-pantry"},...Gs.map(c=>M("span",{class:r.includes(c.shortcut)?"unlocked":""},r.includes(c.shortcut)?c.shortcut:"🔒 未揭曉")))),Gs.forEach(c=>{const l=it().darkSecrets[c.id];e.append(l?Sf(c,l):M("div",{class:"dark-locked"},`${c.number} · ${c.yue}　🔒`))})}else{const o=it(),r=[["🔥 連續日數",`${o.streak} 日`],["📅 玩咗",`${o.daysPlayed} 日`],["🐾 招呼客人",`${o.served} 位`],["🏮 去餐廳",`${o.restaurantDone} 次`],["📝 識咗單詞",`${yl().learned} 個`],["💕 小黑好感度",`${o.affection}`]];e.append(M("div",{class:"stats"},r.map(([c,l])=>M("div",{class:"stat"},M("span",{},c),M("b",{},l)))))}};for(const[a,o]of Object.entries(i))t.append(M("button",{"data-t":a,onclick:()=>{tt("tap"),s(a)}},o));s(n),Si("📚 圖鑑",M("div",{},t,e),{wide:!0})}function Kl(n){const t=M("div",{class:"shop-grid"}),e=M("div",{class:"shop-coins"}),i=()=>{const s=it();e.replaceChildren(ni("ui_coin"),M("b",{},s.coins)),t.innerHTML="",P1.forEach(a=>{const o=s.owned.includes(a.id)||s.deco.includes(a.id),r=a.slot==="deco"?s.deco.includes(a.id):s.wear[a.slot]===a.id;let c;o?a.slot==="deco"?c=M("button",{class:"btn ghost"},"✔ 已擺"):(c=M("button",{class:`btn ${r?"ghost":""}`},r?"除低":"著上"),c.onclick=()=>{tt("tap"),s.wear[a.slot]=r?(a.slot==="hat",null):a.id,Re(),Ml(n),i(),n.cat.happy()}):(c=M("button",{class:`btn ${s.coins>=a.price?"primary":"disabled"}`},`🪙 ${a.price}`),c.onclick=()=>{if(s.coins<a.price){tt("bad"),Fe("金幣唔夠，再招呼多啲客人啦！");return}s.coins-=a.price,tt("coin"),tt("perfect"),a.slot==="deco"?s.deco.push(a.id):(s.owned.push(a.id),s.wear[a.slot]=a.id),Re(),Ml(n),En(),i(),qe(a.jp,"word"),Fe(`買咗 ${a.yue}！`)}),t.append(M("div",{class:`shop-item ${r?"worn":""}`},M("div",{class:"big-emo"},ni(`shop_${a.id}`,a.yue)),M("div",{class:"jp-inline",html:Xe(a.jp),onclick:()=>qe(a.jp,"word")}),M("div",{class:"sub"},a.yue),c))})};i(),n.setView("kitchen"),Si("🛍️ 商店",M("div",{},e,t),{wide:!0})}function Ml(n){const t=it();n.cat.wear(t.wear),n.setDeco(t.deco)}function cM(n){const t=it().settings,e=(c,l,u)=>{const h=M("input",{type:"checkbox"});return h.checked=!!t[l],h.onchange=()=>{t[l]=h.checked,Re(),Xl(),l==="bgm"&&hf(h.checked),l==="shake"&&(n.shakeOn=h.checked),tt("tap")},M("label",{class:"set-row"},M("div",{},M("b",{},c),M("div",{class:"sub"},u)),h)},i=M("input",{type:"checkbox"});i.checked=t.subs==="tap",i.onchange=()=>{t.subs=i.checked?"tap":"show",Re(),tt("tap")};const s=M("div",{class:"lv-pick"}),a=()=>{s.replaceChildren(...oa.map(c=>M("button",{class:`btn ${Be()===c.id?"primary":""}`,onclick:()=>{it().jpLevel=c.id,Re(),tt("tap"),a()}},`${c.icon} ${c.name}`,M("small",{},c.desc))))};a();const o=Object.values(rM).map(c=>`VOICEVOX:${c.name}`).filter((c,l,u)=>u.indexOf(c)===l).join("、"),r=M("div",{class:"settings"},M("div",{class:"set-row lv-row"},M("div",{},M("b",{},"📚 日文程度"),M("div",{class:"sub"},"決定客人同餐廳對白嘅難度；轉咗之後新句即刻生效")),s),e("振假名 ふりがな","furigana","漢字上面顯示讀音"),e("羅馬字 Romaji","romaji","例：onigiri"),e("廣東話翻譯","yue","每句下面顯示意思"),e("加大文字","largeText","放大對白、翻譯同操作說明"),M("label",{class:"set-row"},M("div",{},M("b",{},"🎧 聽力挑戰"),M("div",{class:"sub"},"客人落單嘅字幕要撳先見，答啱有雙倍貼士")),i),e("背景音樂","bgm",""),e("音效","sfx",""),e("畫面震動","shake","切菜、答錯、升級時鏡頭輕震"),M("p",{class:"credits"},`🎙️ 語音：${o}`),M("button",{class:"btn danger",onclick:()=>{confirm("真係要清除全部進度？")&&($x(),location.reload())}},"清除進度"));Si("⚙️ 設定",r)}function lM(n,{onNext:t,onRest:e,onShop:i,firstShift:s}){const a=it();let o=!1;const r=h=>{o=!0,ff(),h()},l=jn.filter(h=>!fs(h))[0],u=M("div",{class:"summary"},M("div",{class:"sum-big"},"🎉"),s?M("div",{class:"panel-title"},"第一道菜完成！想繼續開舖，定去餐廳試吓？"):null,Mn("お疲{つか}れ様{さま}でした！",{yue:"辛苦晒！（收工講）",voice:"cat"}),M("div",{class:"sum-grid"},M("div",{},M("b",{},n.served),M("span",{},"位客人")),M("div",{},M("b",{},`+${n.coins}`),M("span",{},"🪙 金幣")),M("div",{},M("b",{},n.perfect),M("span",{},"⭐ 三星")),M("div",{},M("b",{},`${yl().learned}`),M("span",{},"📝 識咗字"))),n.dark?M("div",{class:"dark-stars","data-stars":n.dark.stars},M("div",{class:"stars-big"},...[1,2,3].map(h=>M("span",{class:h<=n.dark.stars?"on":""},"★"))),...n.dark.res.map(h=>M("div",{class:`goal ${h.ok?"ok":""}`},`${h.ok?"✅":"❌"} ${h.label}`)),M("div",{class:"sub"},`店舖評分 ⭐ ${(a.darkRating??3).toFixed(2)}`)):null,M("div",{class:"streak-row"},...Array.from({length:7},(h,m)=>M("div",{class:`sd ${m<Math.min(a.streak,7)?"on":""}`},m<Math.min(a.streak,7)?"🔥":m+1)),M("div",{class:"sub"},`連續 ${a.streak} 日！聽日返嚟，禮物會再大啲`)),l?M("div",{class:"teaser"},M("span",{class:"big-emo"},ni("ui_lock"),ii(Se(l.dish))),M("div",{},M("b",{html:Xe(Se(l.dish).jp)}),M("div",{class:"sub"},bf(l)))):null,M("div",{class:"sum-btns"},M("button",{class:"btn primary big",onclick:()=>r(t)},s?"🏮 繼續開舖／返大堂":"🏠 返大堂／揀章節"),e?M("button",{class:"btn big",onclick:()=>r(e)},"🏮 同小黑去日本餐廳食飯"):null,M("button",{class:"btn",onclick:()=>r(i)},"🛍️ 商店")));Si("收工！",u,{onClose:()=>{o||t()}}),qe("お疲{つか}れ様{さま}でした！","cat")}tr(document.body);de("#start").style.setProperty("--title-bg",`url("${Vo("title_bg")}")`);const W=new Fx(de("#c"));let cr=!1;W.shakeOn=it().settings.shake!==!1;const lc={chop:()=>{W.shake(.18),W.cat.squash(-.08)},press:()=>W.shake(.15),bad:()=>{W.shake(.4),W.cat.squash(-.12)},good:()=>W.cat.squash(.08),perfect:()=>{W.shake(.25),W.cat.squash(.14)},level:()=>{W.shake(.55),W.cat.squash(.2)},rare:()=>W.shake(.3),door:()=>W.shake(.12),purr:()=>W.cat.squash(-.1),coin:()=>{}};Zx(n=>{var t;return(t=lc[n])==null?void 0:t.call(lc)});W.onView=n=>r1(n==="cook"?"cook":n.startsWith("rest")?"rest":"kitchen");Xl();En();Ml(W);W.cat.happyEyes=999;W.setView("kitchen",!0);Jl();de("#start").addEventListener("click",async()=>{Qx(),tt("tap"),de("#start").classList.add("gone");const n=qx();it().started?await hM(n):await uM()},{once:!0});de("#btn-book").onclick=()=>{tt("tap"),xl()};de("#btn-shop").onclick=()=>{if(tt("tap"),cr)return Fe("做緊嘢，收工先買啦！");Kl(W)};de("#btn-set").onclick=()=>{tt("tap"),cM(W)};let Gh=0;W.onCatTap=()=>{if(!it().started)return;tt("purr"),W.hearts(),W.cat.happyEyes=.8;const n=it();n.affection++,Gh++,n.lastPet!==aa()?(n.lastPet=aa(),n.coins+=10,Fe("小黑好開心！ 今日第一次掃 ❤️ +10🪙"),Zn(10),En()):Gh%5===0&&(jt(W,"cat",ln.purr.jp,ln.purr.yue,"cat"),setTimeout(()=>Ft("cat"),2e3)),Re()};async function uM(){await Qt(500),W.cat.happyEyes=0,W.cat.happy(),tt("meow"),await jt(W,"cat",ln.wake.jp,ln.wake.yue,"cat"),await Qt(300),await jt(W,"cat",ln.intro.jp,ln.intro.yue,"cat");const n=await Ge([{label:"<b>🌱 零基礎</b><small>假名都未識</small>",value:0},{label:"<b>🌿 N5</b><small>識假名、簡單字、基本句型</small>",value:1},{label:"<b>🌳 N4–N3</b><small>想練聽力同實用句子</small>",value:2},{label:"<b>🏔️ N1</b><small>敬語、長句、事故廣播</small>",value:3}],{title:M("div",{class:"panel-title"},"你嘅日文程度係？（之後可以喺 ⚙️ 改）")}),t=it().settings;it().jpLevel=n.value,n.value===0&&Object.assign(t,{furigana:!0,romaji:!0,yue:!0,subs:"show"}),n.value===1&&Object.assign(t,{furigana:!0,romaji:!1,yue:!0,subs:"show"}),n.value>=2&&Object.assign(t,{furigana:!0,romaji:!1,yue:!1,subs:"tap"}),Xl(),it().started=!0,it().lastGift=aa(),Re(),Ft(),De("撳 🔊 可以再聽；撳小黑可以掃佢 🐾",3500),df(!0),await Rf({tutorial:!0})}async function hM(n){df(!0),W.cat.happyEyes=0,W.cat.happy(),tt("meow");const t=it(),e=jn.filter(i=>i.unlock.day&&i.unlock.day===t.daysPlayed&&n.newDay);jt(W,"cat","おかえりにゃ！","你返嚟喇喵！","cat"),n.gift&&(await new Promise(i=>{Si("🎁 每日禮物",M("div",{class:"summary"},M("div",{class:"sum-big"},"🎁"),M("div",{class:"gift-amt"},`+${n.gift} 🪙`),M("div",{class:"streak-row"},...Array.from({length:7},(s,a)=>M("div",{class:`sd ${a<Math.min(t.streak,7)?"on":""}`},a<Math.min(t.streak,7)?"🔥":a+1))),M("div",{class:"sub"},n.streakBroken?"連續日數斷咗… 唔緊要，今日重新開始！":`連續 ${t.streak} 日！每日禮物越嚟越大（最多 7 日）`),M("button",{class:"btn primary big",onclick:()=>ff()},"收！")),{onClose:i})}),Zn(n.gift),En());for(const i of e)await Lf(i);if(t.jpLevel==null){const i=await Ge(oa.map(s=>({label:`<b>${s.icon} ${s.name}</b><small>${s.desc}</small>`,value:s.id})),{title:M("div",{class:"panel-title"},"新增咗分級對白！揀你嘅日文程度（之後可喺 ⚙️ 改）")});t.jpLevel=i.value,Re()}ps()}function Tf(){return jn.filter(n=>(n.chapter||"home")===it().chapter&&fs(n))}function Af(){var t;const n=Tf();return(t=n[parseInt($l(aa()),36)%n.length])==null?void 0:t.id}function Jl(){W.setMenu(jn.filter(n=>(n.chapter||"home")===it().chapter).map(n=>({name:gn[n.dish].jp.replace(/\{.*?\}/g,""),price:n.price,locked:!fs(n)})))}function dM(){const n=h1();if(!n)return null;const t=oa[n.to];return M("div",{class:"special lv-nudge"},`${oa[n.from].icon} 呢級答啱率 ${n.rate}%（${n.total} 題）！想試吓 ${t.icon} ${t.name} 嗎？`,M("button",{class:"btn primary",onclick:()=>{it().jpLevel=n.to,Re(),tt("level"),Fe(`轉咗做 ${t.name}`),ps()}},"升一級"),M("button",{class:"btn",onclick:()=>{it().lvNudgeDismissed=n.from,Re(),ps()}},"遲啲先"))}function ps(){cr=!1,Ft(),W.setTheme(it().chapter),W.setView("kitchen"),W.catFace("front");const n=Af(),t=n?Se(u1(n).dish):null,e=it().shifts>=1;Jl();const i=Ca.find(a=>a.id===it().chapter)||Ca[0],s=M("div",{class:"hub-btns"},M("button",{class:"btn primary big","data-action":"open-shift",onclick:()=>{tt("tap"),Rf({})}},i.id==="hotel"?"🛎️ 入住酒店":i.id==="eki"?"🎫 出發旅行":"🏮 開舖"),M("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{tt("tap"),e?kf():Fe("完成第一位客人就解鎖！")}},e?"🍱 去日本餐廳":"🔒 日本餐廳"),M("button",{class:"btn",onclick:()=>{tt("tap"),xl()}},"📚 圖鑑"),M("button",{class:"btn",onclick:()=>{tt("tap"),Kl(W)}},"🛍️ 商店"));Qe(M("div",{class:"hub-info"},M("div",{class:"chapter-tabs","aria-label":"選擇章節"},Ca.map(a=>M("button",{class:`btn ${a.id===i.id?"primary":""}`,"data-chapter":a.id,"aria-pressed":String(a.id===i.id),onclick:()=>{it().chapter=a.id,Re(),tt("tap"),ps()}},a.id==="eki"?"🚉":a.id==="hotel"?"🏨":ni({home:"ui_open_shop",izakaya:"shop_deco_lantern",cafe:"dish_instant_coffee",sushi:"dish_salmon_nigiri",ramen:"dish_shoyu_ramen",konbini:"goods_bento",dark:"dish_dark_ding"}[a.id]),` ${{home:"食堂",izakaya:"居酒屋",cafe:"喫茶店",sushi:"壽司店",ramen:"拉麵店",konbini:"便利店",eki:"車站",hotel:"酒店",dark:"暗黑"}[a.id]}`))),M("div",{class:"panel-title"},i.name),M("div",{class:"sub"},`${i.intro}　完成 ${it().chapterShifts[i.id]||0} 更`),i.id==="dark"?M("button",{class:"btn",onclick:()=>xl("secrets")},`後廚捷徑圖鑑 · ${Object.keys(it().darkSecrets).length} / 7`):null,t?M("div",{class:"special"},"🌟 今日特價：",M("span",{class:"jp-inline",html:Xe(t.jp)})," 金幣 x2"):null,dM()),s).classList.add("hub-panel")}async function Rf({tutorial:n=!1}={}){cr=!0,mf(),W.setTheme(it().chapter);const t=n?1:["eki","hotel"].includes(it().chapter)?3:5,e={served:0,coins:0,perfect:0};let i=null;const s=it().chapter==="izakaya"&&!n?_M(t):it().chapter==="sushi"&&!n?fM(t):it().chapter==="ramen"&&!n?mM(t):null,a=it().chapter==="dark"&&!n;a&&(L1(),await D1());for(let r=0;r<t;r++){de("#shiftinfo").textContent=["eki","hotel"].includes(it().chapter)?`旅程 ${r+1} / ${t}`:`客人 ${r+1} / ${t}`,de("#shiftinfo").classList.add("show");const c=it().chapter==="eki"&&!n?await(r===1?yM({index:r}):xM({index:r})):it().chapter==="hotel"&&!n?await(r===1?MM({index:r}):SM({index:r})):it().chapter==="konbini"&&!n?await vM({index:r}):await bM({index:r,tutorial:n,forceDish:i,plan:s});if(c.cancelled){await Qt(700);continue}if(i=null,e.served++,e.coins+=c.coins,c.stars===3&&e.perfect++,a&&(e.coins+=await X1(W,it().settings.subs==="tap"),(r===1||r===3)&&r<t-1&&(e.coins+=await W1()),xn()),c.levelUps){const l=await Pf();l&&(l.chapter||"home")===it().chapter&&(i=l.dish)}}de("#shiftinfo").classList.remove("show"),W.catTo("kitchen"),a&&(e.coins+=$1(),e.dark=U1(e),I1()),it().shifts++,it().chapterShifts[it().chapter]=(it().chapterShifts[it().chapter]||0)+1,Re(),xn(),Ft(),W.setView("kitchen"),W.cat.happy(),tt("level");const o=it().shifts===1;await new Promise(r=>lM(e,{firstShift:o,onNext:()=>r(()=>ps()),onRest:()=>r(()=>kf()),onShop:()=>r(()=>{ps(),Kl(W)})})).then(r=>r())}function Cf(n,t){if(t&&n===0)return ra[0];const e=it(),i=e.deco.includes("deco_maneki")?3:1,s=ra.filter(r=>!r.legend||e.level>=2),a=s.map(r=>r.weight*(r.rare?i:1));let o=Math.random()*a.reduce((r,c)=>r+c,0);for(let r=0;r<s.length;r++)if(o-=a[r],o<=0)return s[r];return s[0]}function fM(n){const t=[];for(;t.length<n;)t.push(...le(["kan","wasabi","soy"]));return t.slice(0,n)}function pM(n,t){const e={kan:vl.includes(n.dish),wasabi:["salmon_nigiri","tekkamaki"].includes(n.dish),soy:vl.includes(n.dish)};return t&&e[t]?t:Object.keys(e).find(i=>e[i])||null}function mM(n){const t=[];for(;t.length<n;)t.push(...le(["noodle","soup"]));return t.slice(0,n)}function gM(n,t){return n.dish==="chahan"?null:t||"noodle"}function _M(n){const t=le([...le(["add","less","swap"]).slice(0,2),"cancel"]),e=le(["replace","decline"]);return Array.from({length:n},(i,s)=>s%2===0?t[s/2]:e[(s-1)/2])}async function vM({index:n}){const t=it(),e=t.level,i=Cf(n,!1),s=t.settings.subs==="tap",a=le(Dy).slice(0,2+Math.floor(Math.random()*2)),o=a.reduce((d,f)=>d+f.price,0),r=d=>d[Math.floor(Math.random()*d.length)];let c=0;xn(),W.catTo("kon"),W.setView("kon",!0),W.catFace("customer"),tt("door"),await W.customerIn(i),W.cat.play("wave",.8),await jt(W,"cat",ln.irasshai.jp,ln.irasshai.yue,"cat"),Ft("cat"),await new Promise(d=>{const f=new Set;let S=0;const v=M("div",{class:"scan-total"},"合計：0 円"),b=a.map(P=>M("button",{class:"choice scan-item",type:"button",onclick:R=>{f.has(P.id)||(f.add(P.id),S+=P.price,tt("coin"),R.currentTarget.classList.add("right"),v.textContent=`合計：${S} 円`,f.size===a.length&&setTimeout(d,600))}},M("span",{class:"emo"},ni(P.art,P.yue)),M("span",{class:"jp-inline",html:Xe(P.jp)}),M("small",{},`${P.price} 円`)));Qe(M("div",{class:"panel-title"},"🧾 逐件掃碼（撳每件貨品）"),M("div",{class:"choices cols2"},b),v)}),xn(),await jt(W,"cat",`合計{ごうけい}は ${Pa(o)}です。`,`總共 ${o} 円`,"cat"),Ft("cat");const l=async(d,f,S,v,b,P)=>{let R=!0;for(_n(b);;){if(jt(W,"cust",d.jp,d.yue,P,{hidden:s}),(await Ge(le(f.map((U,q)=>({label:U,value:q}))),{title:M("div",{class:"panel-title"},v)})).value===S){we(b,R),tt("good"),Ft("cust");return}R&&c++,R=!1,we(b,!1),tt("bad"),De(`佢講：「${d.yue}」— 再聽一次！`,3e3)}},u=["bag"];a.some(d=>d.heat)&&u.push("heat"),a.some(d=>d.cutlery)?u.push("cutlery"):Math.random()<.5&&u.push("point");for(const d of u){const f=Od[d],S=Math.random()<.5,v=S?f.yes:f.no;Da(v.jp,i.id),await jt(W,"cat",f.ask.jp,f.ask.yue,"cat"),Ft("cat"),await l(v,[f.yes.label,f.no.label],S?0:1,f.title,v.id,i.id)}await jt(W,"cat",yh.jp,yh.yue,"cat"),Ft("cat");const h=r(Bo);if(await l(h,Bo.map(d=>`${d.icon} ${d.label}`),Bo.indexOf(h),"客人點樣付款？",h.id,i.id),h.id==="k_genkin"){const d=o<1e3?1e3:o<2e3?2e3:5e3,f=d-o,S=le([f+100,f+10,f>100?f-100:f+200,f+50].filter(P=>P>0&&P!==f)).slice(0,2),v=le([f,...S]);await jt(W,"cust",`${Pa(d)}で お願{ねが}いします。`,`用 ${d} 円付款。`,i.id),Ft("cust"),_n("k_otsuri");let b=!0;for(;;){if(await jt(W,"cat",Mh.jp,Mh.yue,"cat"),Ft("cat"),(await Ge(v.map(R=>({value:R,el:M("div",{class:"dish-opt"},M("span",{class:"jp-inline",html:Xe(Pa(R))}),M("small",{},`${R} 円`))})),{title:M("div",{class:"panel-title"},`💴 收咗 ${d} 円，總共 ${o} 円，應該找幾多？`)})).value===f){we("k_otsuri",b),tt("perfect");break}b&&c++,b=!1,we("k_otsuri",!1),tt("bad"),De(`${d} − ${o} = ${f} 円`,3500)}}xn(),await jt(W,"cat",xh.jp,xh.yue,"cat"),Ft("cat");const m=c===0?3:c===1?2:1,p=Math.round((40+o/10)*(.6+.4*(m/3))*i.tip),g=10+m*5;Qe(M("div",{class:"sub"},`🏪 ${a.map(d=>d.yue).join("、")}`),M("div",{class:"stars-big"},...[1,2,3].map(d=>M("span",{class:d<=m?"on":""},"★"))),M("div",{class:"reward"},`🪙 +${p}　✨ +${g} XP`)),[1,2,3].forEach(d=>d<=m&&setTimeout(()=>tt("good"),d*180)),W.coinsFromCustomer(),Zn(p,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=p,t.served++,zi(g),En(),await Qt(1600);const _=$n(Uy);return await jt(W,"cust",_.jp,_.yue,rn(i.id,_)),Ft("cust"),W.customerOut(),ua(),{coins:p,stars:m,levelUps:it().level-e}}async function yM({index:n}){const t=it(),e=t.level;Be();const i=t.settings.subs==="tap",s=t.settings.yue!==!1,a=Ue(La),o={d:a.jp,dy:a.yue,n:qs[a.platform],p:a.platform},r=(P,R=o)=>P.replace(/\{(d|dy|n|p)\}/g,(T,U)=>R[U]),c=gs(),l=c>=1&&Math.random()<.5;let u=0;xn(),Ft(),W.catTo("eki"),W.suitcase.visible=!1,W.setView("eki",!0),W.setMachine("きっぷ うりば",""),W.customerOut(!0),tt("door"),await W.ekiStaffIn({id:"usagi",color:16447216,ear:"long"},"eki",!1);const h=(P,R)=>M("div",{class:"dish-opt"},M("span",{class:"jp-inline",html:Xe(P)}),s&&R?M("small",{},R):null),m=l?ec[c].tourist:{jp:r(Zo[c].ok.jp),yue:r(Zo[c].ok.yue)};await xi("你係駅員 ▶",M("div",{class:"panel-title"},"🧑‍✈️ 今次你做駅員。聽遊客問乜，揀啱嘅答案。")),await jt(W,"cust",m.jp,m.yue,"usagi",{hidden:i}),Ft("cust");let p;if(l)p=[ec[c].ok,...ec[c].bad];else{const P=le([1,2,3,4].filter(U=>U!==a.platform))[0],R={...o,n:qs[P],p:P},T=sl[c];p=[{jp:r(T.jp),yue:r(T.yue)},{jp:r(T.jp,R),yue:r(T.yue,R),why:`${a.yue}係 ${a.platform} 號月台，唔係 ${P} 號`},{...Yy[c]}]}const g=le(p.map((P,R)=>R)),_=g.indexOf(0);let d=!0;const f=M("div",{class:"panel-title"},Mn(m.jp,{yue:m.yue,voice:"usagi",hidden:i}),M("div",{class:"sub"},l?"遊客搭過站，你點答？":`📋 案內表：${a.jp.replace(/\{.*?\}/g,"")} → ${qs[a.platform].replace(/\{.*?\}/g,"")}（${a.platform} 號月台）　遊客想去 ${a.yue}，你點答？`));for(;;){const P=await Ge(g.map((R,T)=>({el:h(p[R].jp,p[R].yue),value:T})),{title:f});if(P.value===_){In(c,d),tt("good");break}d&&u++,d=!1,In(c,!1),tt("bad"),De(p[g[P.value]].why||"再諗吓！",3200)}await jt(W,"cat",p[0].jp,p[0].yue,"cat"),Ft("cat"),W.cat.happy(),await jt(W,"cust",wh.jp,wh.yue,"usagi",{hidden:i}),Ft("cust"),W.customerOut(!0);const S=u===0?3:u<=2?2:1,v=Math.round(70*(.6+.4*(S/3))),b=10+S*5;return Qe(M("div",{class:"sub"},`🧑‍✈️ 駅員 · ${l?"乗り過ごし":"問月台"}`),M("div",{class:"stars-big"},...[1,2,3].map(P=>M("span",{class:P<=S?"on":""},"★"))),M("div",{class:"reward"},`🪙 +${v}　✨ +${b} XP`)),[1,2,3].forEach(P=>P<=S&&setTimeout(()=>tt("good"),P*180)),Zn(v,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=v,t.served++,zi(b),En(),await Qt(1600),ua(),{coins:v,stars:S,levelUps:it().level-e}}async function xM({index:n}){const t=it(),e=t.level,i=Be(),s=t.settings.subs==="tap",a=t.settings.yue!==!1,o=Ue(La),r=1+Math.floor(Math.random()*3),c=i>=2&&Math.random()<.4,l=o.fare+(c?Sh:0),u=l*r,h=I=>I.replace(/\{.*?\}/g,""),m=(I,O)=>I.replace(/\{(d|dy|n|p)\}/g,(L,F)=>O[F]),p={d:o.jp,dy:o.yue,n:qs[o.platform],p:o.platform};let g=0;const _=(I,O,L)=>M("div",{class:"dish-opt"},M("span",{class:"jp-inline",html:Xe(I)}),L?M("small",{},L):a&&O?M("small",{},O):null),d=(I,O,L)=>M("div",{class:"panel-title"},I?Mn(I.jp,{yue:I.yue,voice:O,hidden:s,autoplay:!0}):null,L?M("div",{class:"sub"},L):null),f=async({line:I=null,voice:O="usagi",options:L,correct:F,caption:rt,word:ht,lv:dt})=>{let Ht=!0;for(ht&&_n(ht);;){const Wt=await Ge(L.map((K,ct)=>({el:K.el,value:ct})),{title:d(I,O,rt)});if(Wt.value===F)return ht&&we(ht,Ht),dt!=null&&In(dt,Ht),tt("good"),Wt.value;Ht&&g++,Ht=!1,ht&&we(ht,!1),dt!=null&&In(dt,!1),tt("bad"),De(L[Wt.value].why||(I?`再聽一次：「${I.yue}」`:"再諗吓！"),3200)}},S=I=>{const O=le(I.map((L,F)=>F));return{options:O.map(L=>I[L]),correct:O.indexOf(0)}},v={id:"kuma",color:9067067,ear:"round"};xn(),Ft(),W.catTo("eki"),W.setView("eki",!0),W.setMachine("行き先を えらぶ",""),W.customerOut(!0),tt("door"),await W.ekiStaffIn(v,"eki");const b=i>=2?`🎫 今次旅程：去 ${o.yue}，成人 ${r} 位。${c?`你要搭特急，要買特急券（每位加 ${Sh} 円）。`:"你買嘅係普通車票（唔包特急）。"}`:`🎫 今次旅程：去 ${o.yue}，成人 ${r} 位。`;await xi("出發 ▶",M("div",{class:"panel-title"},b));const P=le(La.filter(I=>I.id!==o.id)).slice(0,3);await f({line:jy,caption:`去 ${o.yue}`,word:`eki_d_${o.id}`,...S([o,...P].map(I=>({el:_(I.jp,"",`${I.fare} 円`),why:I.id===o.id?"":`呢個係 ${I.yue}，你要去 ${o.yue}`})))}),W.setMachine(h(o.jp),`${o.fare} 円 × ?`),await f({line:Hy,caption:`成人 ${r} 位`,word:"eki_mai",options:[1,2,3].map(I=>({el:_(`大人{おとな} ${zy[I]}`,`${I} 張`),why:`你要買 ${r} 張`})),correct:r-1}),i>=2&&await f({line:Gy,caption:c?"你要搭特急":"你只買普通車票",word:"eki_tokkyu",...S((c?[To.ltd,To.plain]:[To.plain,To.ltd]).map((I,O)=>({el:_(I.jp,I.yue),why:O===0?"":c?"你要搭特急，要買特急券":"你只買普通車票，唔使特急券"})))}),W.setMachine(h(o.jp),`${l} 円 × ${r}`);const R=[...new Set([l*(r+1),l*(r>1?r-1:r+2),l+10])].filter(I=>I!==u).slice(0,2);await f({line:Vy(u),caption:`${l} 円 × ${r} 位 = ?`,word:"eki_kippu",...S([u,...R].map(I=>({el:_(Pa(I),"",`${I} 円`),why:`${l} × ${r} = ${u} 円`})))}),W.setMachine("きっぷ",`${u} 円`),tt("coin"),await jt(W,"cust",bh.jp,bh.yue,"kuma",{hidden:s}),Ft("cust");const T=gs(),U=Zo.find(I=>I.lv===T)||Zo[0],q=sl.find(I=>I.lv===T)||sl[0];await f({caption:"問駅員：去呢個目的地要喺邊個月台上車？",word:"eki_ikisaki",lv:T,...S([U.ok,...U.bad].map(I=>({el:_(m(I.jp,p),m(I.yue,p)),why:I.why})))}),await jt(W,"cat",m(U.ok.jp,p),m(U.ok.yue,p),"cat"),Ft("cat"),await jt(W,"cust",m(q.jp,p),m(q.yue,p),"kuma",{hidden:s}),Ft("cust");const y=le([1,2,3,4].filter(I=>I!==o.platform)).slice(0,2);await f({caption:Wy.yue,word:"eki_bansen",...S([o.platform,...y].map(I=>({el:_(qs[I],`${I} 號月台`),why:`駅員講咗 ${o.platform} 號月台`})))}),W.customerOut(!0),W.catTo("pf"),W.setView("ekiPf",!0),W.setPlatform(o.platform,[h(o.jp),"各駅停車","快速"]),await Qt(400);const x=async(I,O)=>{const L=$y(i,o.platform,I.type,I.dest),F=W.trainArrive(h(I.dest.jp),I.type.short,I.type.color),rt=i>=2?`你要去 ${o.yue}（${c?"特急券":"普通車票"}）`:`你要去 ${o.yue}`;await f({line:L,voice:"usagi",caption:rt,word:O?"eki_noru":"eki_matsu",options:[{el:_(Ao.ride.jp,Ao.ride.yue),why:I.dest.id!==o.id?`呢班車去 ${I.dest.yue}，唔係 ${o.yue}`:c?`你買咗特急券，要搭特急，${I.type.yue}唔啱`:`${I.type.yue}唔包喺你嘅普通車票`},{el:_(Ao.wait.jp,Ao.wait.yue),why:"呢班就係你要搭嘅！"}],correct:O?0:1}),await F,O?(W.cat.happy(),tt("perfect"),await Qt(900)):await Qt(500),await W.trainLeave()};if(i>=3&&Math.random()<.5){const I=Ue(qy);await W.ekiStaffIn(v,"pf"),await f({line:Xy,voice:"usagi",caption:`🚨 ${I.task}`,lv:3,word:"eki_jinshin",...S([I.ok,...I.bad].map(O=>({el:_(O.jp,O.yue),why:O.why})))}),await jt(W,"cat",I.ok.jp,I.ok.yue,"cat"),Ft("cat"),await jt(W,"cust",I.reply.jp,I.reply.yue,"kuma",{hidden:s}),Ft("cust"),W.customerOut(!0)}else{const I=Ue(La.filter(F=>F.id!==o.id)),O=c?[Os[2]]:Os.filter(F=>F.ok),L=i>=2&&Math.random()<.5?{dest:o,type:c?Ue(Os.filter(F=>F.ok)):Os[2]}:{dest:I,type:i>=2?Ue(O):Os[0]};await x(L,!1),await x({dest:o,type:i>=2?Ue(O):Os[0]},!0)}await jt(W,"cat",Eh.jp,Eh.yue,"cat"),Ft("cat");const D=g===0?3:g<=2?2:1,N=Math.round((50+u/10)*(.6+.4*(D/3))),B=10+D*5;return Qe(M("div",{class:"sub"},`🚉 ${o.yue} · 成人 ${r} 位 · ${u} 円`),M("div",{class:"stars-big"},...[1,2,3].map(I=>M("span",{class:I<=D?"on":""},"★"))),M("div",{class:"reward"},`🪙 +${N}　✨ +${B} XP`)),[1,2,3].forEach(I=>I<=D&&setTimeout(()=>tt("good"),I*180)),Zn(N,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=N,t.served++,zi(B),En(),await Qt(1600),ua(),{coins:N,stars:D,levelUps:it().level-e}}async function MM({index:n}){const t=it(),e=t.level,i=t.settings.subs==="tap",s=t.settings.yue!==!1,a=gs(),o=Ue(["req","checkin","checkout"]),r=ex[a],c=[{jp:"一人{ひとり}",yue:"一位"},{jp:"二人{ふたり}",yue:"兩位"}],l=Math.floor(Math.random()*2),u=1+Math.floor(Math.random()*3),h=2+Math.floor(Math.random()*8),m=h*100+1+Math.floor(Math.random()*9),p=(x,D)=>({p:c[l].jp,py:c[l].yue,q:c[1-l].jp,n:jd[u],nn:`${u} 晚`,f:zd(x),fn:String(x),r:al(D),rn:String(D)}),g=(x,D)=>x.replace(/\{(py|p|q|nn|n|fn|f|rn|r)\}/g,(N,B)=>D[B]),_=p(h,m);let d;if(o==="req"){const x=Ue(rl[a]),D=rl.flat().filter(B=>B.reply.jp!==x.reply.jp).map(B=>B.reply),N=le(D).slice(0,r?1:2).map(B=>({...B,why:"呢句答咗另一個要求，客人問嘅唔係呢樣"}));d={task:x.task,ok:x.ok,reply:x.reply,items:[x.reply,...N,...r?[r]:[]]}}else if(o==="checkin"){const x=Vd[a],D=ol[a],N=(L,F)=>{const rt=p(L,F);return{jp:g(D.jp,rt),yue:g(D.yue,rt)}},I=le([1,2,3,4,5,6,7,8,9].filter(L=>L!==m%100)).slice(0,r?1:2).map((L,F)=>{const rt=F===0?h%8+2:h;return{...N(rt,rt*100+L),why:`分配嘅係 ${m} 號房，呢句講錯房號`}}),O=N(h,m);d={task:`客人入住，你分配 ${m} 號房（${u} 晚）`,ok:{jp:g(x.ok.jp,_),yue:g(x.ok.yue,_)},reply:O,items:[O,...I,...r?[r]:[]]}}else{const x=Gd[a],D=x.reply,N=ol[a],B=[{...Hd,why:"客人係離開，唔係剛到"},{jp:g(N.jp,_),yue:g(N.yue,_),why:"呢句係入住時先講"}];d={task:"客人退房",ok:x.ok,reply:D,items:[D,...B.slice(0,r?1:2),...r?[r]:[]]}}const f=d.items;let S=0;xn(),Ft(),W.catTo("hotel"),W.suitcase.visible=!1,W.cat.root.position.set(.55,0,-.75),W.cat.root.rotation.y=.25,W.setView("hotel",!0),W.customerOut(!0),tt("door"),await W.hotelStaffIn({id:"usagi",color:16447216,ear:"long"},!0),await xi("你係前台 ▶",M("div",{class:"panel-title"},"🛎️ 今次你做酒店前台。聽客人講乜，揀啱嘅回答。")),await jt(W,"cust",d.ok.jp,d.ok.yue,"usagi",{hidden:i}),Ft("cust");const v=le(f.map((x,D)=>D)),b=v.indexOf(0),P=x=>M("div",{class:"dish-opt"},M("span",{class:"jp-inline",html:Xe(x.jp)}),s&&x.yue?M("small",{},x.yue):null),R=M("div",{class:"panel-title"},Mn(d.ok.jp,{yue:d.ok.yue,voice:"usagi",hidden:i}),M("div",{class:"sub"},`客人情況：${d.task}。你點答？`));let T=!0;for(;;){const x=await Ge(v.map((D,N)=>({el:P(f[D]),value:N})),{title:R});if(x.value===b){In(a,T),tt("good");break}T&&S++,T=!1,In(a,!1),tt("bad"),De(f[v[x.value]].why||"再諗吓！",3400)}await jt(W,"cat",d.reply.jp,d.reply.yue,"cat"),Ft("cat"),W.cat.happy(),await jt(W,"cust",Th.jp,Th.yue,"usagi",{hidden:i}),Ft("cust"),W.customerOut(!0);const U=S===0?3:S<=2?2:1,q=Math.round(70*(.6+.4*(U/3))),y=10+U*5;return Qe(M("div",{class:"sub"},"🛎️ 前台 · 回應客人"),M("div",{class:"stars-big"},...[1,2,3].map(x=>M("span",{class:x<=U?"on":""},"★"))),M("div",{class:"reward"},`🪙 +${q}　✨ +${y} XP`)),[1,2,3].forEach(x=>x<=U&&setTimeout(()=>tt("good"),x*180)),Zn(q,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=q,t.served++,zi(y),En(),await Qt(1600),ua(),{coins:q,stars:U,levelUps:it().level-e}}async function SM({index:n}){const t=it(),e=t.level,i=t.settings.subs==="tap",s=t.settings.yue!==!1,a=gs(),o={id:"kuma",color:9067067,ear:"round"},r=[{jp:"一人{ひとり}",yue:"一位"},{jp:"二人{ふたり}",yue:"兩位"}],c=Math.floor(Math.random()*2),l=1+Math.floor(Math.random()*3),u=2+Math.floor(Math.random()*8),h=u*100+1+Math.floor(Math.random()*9),m={p:r[c].jp,py:r[c].yue,q:r[1-c].jp,n:jd[l],nn:`${l} 晚`,f:zd(u),fn:String(u),r:al(h),rn:String(h)},p=(D,N=m)=>D.replace(/\{(py|p|q|nn|n|fn|f|rn|r)\}/g,(B,I)=>N[I]);let g=0;const _=(D,N,B)=>M("div",{class:"dish-opt"},M("span",{class:"jp-inline",html:Xe(D)}),B?M("small",{},B):s&&N?M("small",{},N):null),d=(D,N,B)=>M("div",{class:"panel-title"},D?Mn(D.jp,{yue:D.yue,voice:N,hidden:i,autoplay:!0}):null,B?M("div",{class:"sub"},B):null),f=async({line:D=null,voice:N="kuma",options:B,correct:I,caption:O,word:L,lv:F})=>{let rt=!0;for(L&&_n(L);;){const ht=await Ge(B.map((dt,Ht)=>({el:dt.el,value:Ht})),{title:d(D,N,O)});if(ht.value===I)return L&&we(L,rt),F!=null&&In(F,rt),tt("good"),ht.value;rt&&g++,rt=!1,L&&we(L,!1),F!=null&&In(F,!1),tt("bad"),De(B[ht.value].why||"再諗吓！",3600)}},S=D=>{const N=le(D.map((B,I)=>I));return{options:N.map(B=>({el:_(p(D[B].jp),p(D[B].yue)),why:D[B].why?p(D[B].why):""})),correct:N.indexOf(0)}},v=async(D,N)=>{const B={jp:p(N.jp),yue:p(N.yue)};await jt(W,D,B.jp,B.yue,D==="cat"?"cat":"kuma",D==="cat"?{}:{hidden:i}),Ft(D)};xn(),Ft(),W.catTo("hotel"),W.setView("hotel",!0),W.customerOut(!0),tt("door"),await W.hotelStaffIn(o),await xi("入去 ▶",M("div",{class:"panel-title"},`🏨 今次住宿：${m.nn}，${m.py}。`)),await v("cust",Hd);const b=Vd[a];await f({caption:`🧳 ${p(b.task)}`,word:"hotel_checkin",lv:a,...S([b.ok,...b.bad])}),await v("cat",b.ok);const P=ol[a];await v("cust",P);const R=le([1,2,3,4,5,6,7,8,9].filter(D=>D!==h%100)).slice(0,2).map((D,N)=>N===0?(u%8+2)*100+D:u*100+D);await f({caption:tx.yue,word:"hotel_goshitsu",lv:a,...(()=>{const D=[h,...R],N=le(D.map((B,I)=>I));return{options:N.map(B=>({el:_(al(D[B]),"",String(D[B])),why:`前台講嘅係 ${h} 號房`})),correct:N.indexOf(0)}})()}),W.cat.happy();const T=Ue(rl[a]);await xi("入咗房 ▶",M("div",{class:"panel-title"},`🛏️ 你住喺 ${h} 號房。`)),await f({caption:`📞 ${T.task}`,word:a>=2?"hotel_kikanai":"hotel_taoru",lv:a,...S([T.ok,...T.bad])}),await v("cat",T.ok),await v("cust",T.reply);const U=Gd[a];await xi("第二日 ▶",M("div",{class:"panel-title"},"🌅 住完喇，落去前台退房。")),await f({caption:"🧳 你想退房",word:"hotel_checkout",lv:a,...S([U.ok,...U.bad])}),await v("cat",U.ok),await v("cust",U.reply),W.customerOut(!0);const q=g===0?3:g<=2?2:1,y=Math.round(90*(.6+.4*(q/3))),x=12+q*5;return Qe(M("div",{class:"sub"},`🏨 ${m.nn} · ${h} 號房`),M("div",{class:"stars-big"},...[1,2,3].map(D=>M("span",{class:D<=q?"on":""},"★"))),M("div",{class:"reward"},`🪙 +${y}　✨ +${x} XP`)),[1,2,3].forEach(D=>D<=q&&setTimeout(()=>tt("good"),D*180)),Zn(y,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=y,t.served++,zi(x),En(),await Qt(1600),ua(),{coins:y,stars:q,levelUps:it().level-e}}async function bM({index:n,tutorial:t,forceDish:e,plan:i}){var Vt;const s=it(),a=s.level,o=s.chapter==="cafe"?ra[n%Qr.length]:Cf(n,t),r=Tf(),c=e||of(r.map(H=>H.dish));let l=r.find(H=>H.dish===c)||r[0];const u=s.chapter==="izakaya"&&!t?i==null?void 0:i[n]:null,h=s.chapter==="sushi"&&!t?pM(l,i==null?void 0:i[n]):null,m=s.chapter==="ramen"&&!t?gM(l,i==null?void 0:i[n]):null,p=oM(l.dish),g=u==="less"||h==="kan"||s.level>=2&&!t&&l.chapter!=="dark"&&Math.random()<.45;let _=u==="less"?2+Math.floor(Math.random()*2):g?1+Math.floor(Math.random()*3):1;const d=l.chapter==="dark";d&&(_=1,Dt.persona=N1(),Dt.custId=o.id);const f=$n(d?hx:g?f1:d1),S=d?{jp:f.jp.replace("{dish}",l.jp),yue:f.yue.replace("{dishYue}",l.yue)}:Xn(f,g?{dish:l.dish,num:p[_-1]}:{dish:l.dish}),v=rn(o.id,f);Da(S.jp,v);const b={3:$n(is.great),2:$n(is.ok),1:$n(is.meh)};for(const H of Object.values(b))Da(H.jp,rn(o.id,H));xn(),W.setView("kitchen"),W.catFace("customer"),tt("door"),await W.customerIn(o),o.rare&&(tt("rare"),Fe(`✨ 稀有客人：${o.yue}！ 貼士 x${o.tip}`,2600,"rare")),d&&(O1(Dt.persona),ji()),W.cat.play("wave",.8),await jt(W,"cat",ln.irasshai.jp,ln.irasshai.yue,"cat"),Ft("cat");const P=s.settings.subs==="tap";let R=0,T=!1;t&&n===0&&De("客人講緊要咩，聽完揀啱嘅菜！",3500);const U=s.chapter==="ramen"&&!t;for(;!T;){jt(W,"cust",S.jp,S.yue,v,{hidden:P});const H=le(r).map(st=>{const nt=Se(st.dish);return{value:st.dish,el:M("div",{class:U?"dish-opt ticket-btn":"dish-opt"},M("span",{class:"emo"},ii(nt)),M("span",{class:"jp-inline",html:Xe(nt.jp)}),U?M("span",{class:"ticket-price"},`${st.price}円`):null)}}),A=await Ge(H,{title:M("div",{class:"panel-title"},U?"🎫 食券機：幫客人買券":"🐾 客人要咩？"),cols:Math.min(H.length,2)});U&&tt("coin");let lt=1;if(A.value===l.dish&&g&&(lt=(await Ge(p.map((nt,ut)=>({value:ut+1,el:M("div",{class:"dish-opt"},M("span",{class:"emo"},ii(Se(nt))),M("span",{class:"jp-inline",html:Xe(Se(nt).jp)}))})),{title:M("div",{class:"panel-title"},"要幾多個？"),cols:3})).value),A.value===l.dish&&lt===_)T=!0,tt("good"),we(l.dish,R===0),g&&we(p[_-1],R===0);else{R++,tt("bad"),W.cat.play("sad",.6);const st=$n(is.wrong);await jt(W,"cust",st.jp,st.yue,rn(o.id,st)),De(`佢講：「${S.yue}」— 再聽一次！`,3500),we(l.dish,!1),await Qt(600)}}_n(l.dish),Ft("cust");const q=async(H,A,lt,st,nt,ut,mt=v)=>{let vt=!0;for(_n(nt);;){if(jt(W,"cust",H,A,mt,{hidden:P}),(await Ge(le(lt.map((w,$)=>({label:w,value:$}))),{title:M("div",{class:"panel-title"},ut)})).value===st){we(nt,vt),tt("good"),Ft("cust");return}vt=!1,we(nt,!1),tt("bad"),De(A,3e3)}};if(it().chapter==="home"&&!t&&Be()>0&&Math.random()<.3){const H=_1(l.dish);if(H){const A=rn(o.id,H.d);_n(H.d.key);let lt=!0;for(;;){if(jt(W,"cust",H.d.jp,H.d.yue,A,{hidden:P}),(await Ge(le([H.d.label,...H.wrongs].map((nt,ut)=>({label:nt,value:ut===0?0:-1}))),{title:M("div",{class:"panel-title"},"客人再補一句？")})).value===0){we(H.d.key,lt),In(H.d.lv,lt),tt("good"),Ft("cust");break}lt=!1,we(H.d.key,!1),tt("bad"),De(H.d.yue,3e3)}}}const y=()=>(Ft("cust"),W.cat.play("sad",.6),Fe("客人取消咗訂單，今次冇收入"),W.customerOut(),{coins:0,stars:0,levelUps:0,cancelled:!0}),x=H=>H[Math.floor(Math.random()*H.length)],D=H=>Se(H.dish).yue.replace(/（.*?）/g,"");if(it().chapter==="izakaya"&&(u?!["replace","decline"].includes(u):n%2===0)){const H=r.filter(St=>St.id!==l.id),A=[["add",3],["cancel",1],..._>=2?[["less",2]]:[],...H.length?[["swap",3]]:[]];let lt=Math.random()*A.reduce((St,[,yt])=>St+yt,0),st=u||(A.find(([,St])=>(lt-=St)<=0)||A[0])[0];(st==="swap"&&!H.length||st==="less"&&_<2)&&(st="add");const nt=St=>`改做${D(St)}`,ut=st==="swap"?x(H):null,mt={add:x1,less:M1,swap:S1,cancel:b1}[st],vt={add:"tsuika",less:"herasu",swap:"kaeru",cancel:"kyanseru"}[st],C={add:"加一份",less:"減一份",cancel:"取消訂單",swap:ut&&nt(ut)}[st],w=$n(mt),$=ut?Xn(w,{dish:ut.dish}):w,Z=["加一份","減一份","取消訂單"],at=H.filter(St=>St!==ut);at.length&&Z.push(nt(x(at)));const Q=le(Z.filter(St=>St!==C)).slice(0,2);if(await q($.jp,$.yue,[C,...Q],0,vt,"客人想改張單？",rn(o.id,w)),st==="add")_++,Fe(`加單成功：共 ${_} 份`);else if(st==="less")_--,Fe(`減咗一份：共 ${_} 份`);else if(st==="swap")l=ut,_n(l.dish),we(l.dish,!0),Fe(`改做 ${D(l)}`);else return y()}else if(it().chapter==="izakaya"){const H=r.find(ut=>ut.id!==l.id),A=Xn($n(v1),{dish:l.dish});if(await jt(W,"cat",A.jp,A.yue,"cat"),Ft("cat"),!H||(u?u==="decline":Math.random()<.25)){const ut=$n(w1),mt=H?[Se(H.dish).yue]:[];return await q(ut.jp,ut.yue,["取消所有訂單",Se(l.dish).yue,...mt].slice(0,3),0,"yameru","沽清後，客人點樣話？",rn(o.id,ut)),y()}const lt=Se(H.dish),st=$n(y1),nt=Xn(st,{dish:H.dish});await q(nt.jp,nt.yue,[lt.yue,Se(l.dish).yue,"取消所有訂單"],0,"urikire","沽清後，客人改要邊款？",rn(o.id,st)),l=H,_n(l.dish),we(l.dish,!0)}let N=null,B=null;if(it().chapter==="cafe"&&["instant_coffee","black_tea","matcha_latte"].includes(l.id)){const H=Qr[n%Qr.length],A=it().regularVisits[H.id]||0;N=H.request,B=H.id,l={...l,steps:[...l.steps,{type:"request",request:N,jp:H.jp,yue:H.yue,voice:o.id,title:`${H.name} · ${A?`第 ${A+1} 次到訪`:"初次到訪"}：點樣調製？`}]}}if(h==="wasabi"){const H=Zr[Math.floor(Math.random()*Zr.length)];N=H.id,l={...l,steps:[...l.steps,{type:"request",request:H.id,jp:H.jp,yue:H.yue,voice:o.id,title:"客人對山葵有要求，點整？",retry:"再聽一次：留意客人想要幾多山葵。",actions:Zr.map(A=>({id:A.id,icon:A.icon,label:A.label,detail:A.detail}))}]}}if(m){const H=ky[m],A=H[Math.floor(Math.random()*H.length)];N=A.id,Fe(`🎫 收到食券：${Se(l.dish).yue}`),l={...l,steps:[...l.steps,{type:"request",request:A.id,jp:A.jp,yue:A.yue,voice:o.id,title:m==="noodle"?"客人對麵條有要求，點整？":"客人對湯底有要求，點整？",retry:"再聽一次：留意客人講麵硬度，定係湯濃淡。",actions:H.map(lt=>({id:lt.id,icon:lt.icon,label:lt.label,detail:lt.detail}))}]}}s.cooked[l.id]||await new Promise(H=>Ef(l,{onStart:H}));const I=await wM(l);let O=null;l.chapter==="dark"&&(W.setView("serve"),O=B1(l,I,await F1(l,W))),N==="iced"&&((Vt=W.dish)==null||Vt.add(qd())),B&&(s.regularVisits[B]=(s.regularVisits[B]||0)+1);const L=I>=.9?3:I>=.65?2:1;s.stars[l.id]=Math.max(s.stars[l.id]||0,L),s.cooked[l.id]=(s.cooked[l.id]||0)+1,W.setView("serve"),W.slideDishToCustomer(),await Qt(500),h==="soy"&&(Ft("cust"),await q(vh.jp,vh.yue,Iy,0,"shoyu_tsukeru","壽司應該點沾豉油？"));const F=b[L],rt=rn(o.id,F);W.customerJump();const ht=Da(F.jp,rt),dt=Promise.race([jt(W,"cust",F.jp,F.yue,rt),ht.then(()=>Qt(6e3),()=>Qt(6e3))]),Ht=Af()===l.id;let Wt=1;O&&(Wt=O.lookMult,await dt,await Qt(400),Ft("cust"),await V1(W,o,O,P));const K=O?Dt.persona.pay*Wt*(.8+(s.darkRating??3)*.08):1;let ct=Math.round(l.price*_*(.6+.4*I)*o.tip*(Ht?2:1)*K/10);P&&R===0&&(ct*=2),O&&(ct=G1(O,ct));const Mt=O?{none:`💰 +${O.bonus} 入彩池`,believe:`💰 +${O.bonus} 入彩池`,honest:"老實 x0.8",expose:"被揭穿",plain:"如實介紹"}[O.outcome]:null,_t=10+L*5;Qe(M("div",{class:"sub"},`${Se(l.dish).yue} × ${_}${N?` · ${Se(N).yue}`:""}`),M("div",{class:"stars-big"},...[1,2,3].map(H=>M("span",{class:H<=L?"on":""},"★"))),M("div",{class:"reward"},`🪙 +${ct}　✨ +${_t} XP`,Ht?M("span",{class:"tag"},"特價 x2"):null,Mt?M("span",{class:"tag"},Mt):null,P&&R===0?M("span",{class:"tag"},"🎧 x2"):null)),[1,2,3].forEach(H=>H<=L&&setTimeout(()=>tt("good"),H*180)),W.coinsFromCustomer(),Zn(ct,{x:innerWidth*.7,y:innerHeight*.35}),s.coins+=ct,s.served++,zi(_t),En(),await Promise.all([Qt(1600),dt.then(()=>Qt(400))]),O&&(Ft(),await q1(l,O)),W.removeDish();const Bt=!(t&&n===0)&&!d;let At=0;Bt&&(At=await EM(o));const kt=$n(is.bye);return Bt&&kt.key&&Math.random()<1/3?await TM(o,kt):await jt(W,"cust",kt.jp,kt.yue,rn(o.id,kt)),Ft("cust"),W.customerOut(),ua(),{coins:ct+At,stars:L,levelUps:it().level-a}}async function wM(n){xn(),W.setView("cook"),W.useStation(n.station),W.clearWork();const t=[];for(const i of n.steps){const s=await sM[i.type](i,W);t.push({score:s,weight:i.weight||1}),i.verb&&(_n(i.verb),we(i.verb,s>=.7))}c1();const e=t.reduce((i,s)=>i+s.score*s.weight,0)/t.reduce((i,s)=>i+s.weight,0);return W.showDish(n.dish),W.catFace("front"),W.cat.happy(),tt("perfect"),xn(),await jt(W,"cat",ln.done.jp,ln.done.yue,"cat"),Ft("cat"),e}async function EM(n){const{st:t,wrongs:e}=m1(it().chapter,of),i=rn(n.id,t);_n(t.key);const s=it().settings.subs==="tap";jt(W,"cust",t.jp,"",i,{hidden:s});const a=le([{value:!0,label:t.yue},...e.map(c=>({value:!1,label:c.yue}))]),o=await Ge(a,{title:M("div",{class:"panel-title"},"💬 客人講咩？（答啱有貼士）")});we(t.key,o.value),In(t.lv,o.value);let r=0;return o.value?(tt("perfect"),o.button.classList.add("right"),r=15,it().coins+=r,zi(5),Zn(r),En(),xe("+15 🪙","good")):(tt("bad"),o.button.classList.add("wrong"),[...o.grid.children].forEach((c,l)=>{a[l].value&&c.classList.add("right")}),De(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}。之後會再考你！`,3500)),await Qt(1300),Ft("cust"),r}async function TM(n,t){const e=le(is.bye.filter(a=>a.key!==t.key&&a.yue!==t.yue&&(a.lv??0)<=Be())).slice(0,2);_n(t.key);const i=le([{value:!0,label:t.yue},...e.map(a=>({value:!1,label:a.yue}))]);jt(W,"cust",t.jp,"",rn(n.id,t),{hidden:it().settings.subs==="tap"});const s=await Ge(i,{title:M("div",{class:"panel-title"},"👋 客人走之前講咩？")});we(t.key,s.value),In(t.lv??0,s.value),s.value?(tt("perfect"),xe("+5 🪙","good"),it().coins+=5,En()):(tt("bad"),De(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}`,3e3)),await Qt(900)}async function Pf(){const n=it();tt("level"),W.cat.happy(),xe(`Lv.${n.level}!`,"level"),await jt(W,"cat",ln.levelup.jp,ln.levelup.yue,"cat"),Ft("cat");const t=jn.find(e=>e.unlock.level===n.level);return t&&await Lf(t),t}async function Lf(n){Jl();const t=Se(n.dish);tt("rare"),jt(W,"cat",ln.newRecipe.jp,ln.newRecipe.yue,"cat"),await xi("好嘢！",M("div",{class:"unlock"},M("div",{class:"big-emo spin"},ii(t)),M("div",{class:"panel-title"},"🔓 新食譜解鎖！"),Mn(t.jp,{yue:t.yue,voice:"word",size:"big",autoplay:!0}))),Ft("cat")}const AM=[[1,"🎊 第一位客人！"],[5,"🏅 招呼咗 5 位客人"],[10,"🏆 10 位客人！小黑好驕傲"],[25,"👑 25 位！你係人氣店"],[50,"🌸 50 位！傳說級食堂"]];function ua(){const n=it();for(const[t,e]of AM)n.served===t&&!n.achievements.includes("served"+t)&&(n.achievements.push("served"+t),Fe(e,2600,"rare"),tt("rare"),Re())}async function kf(){cr=!0,mf(),xn(),Ft();const n=Ua,t=Ue(n.people),e=Ue(n.foods),i=Ue(n.drinks),s=_l[t.n-1],a=(n.prices[e]+n.prices[i])*t.n;let o=0,r=0;const c={ppl:t,food:e,drink:i,num:s,f:{}},l=R1(c,C1[Be()]);await Po(()=>{W.catTo("rest"),W.setView("rest",!0)});const u=`你哋 ${t.n} 個人，每人想食 ${Se(e).yue.replace(/（.*?）/g,"")}，飲 ${Se(i).yue.replace(/（.*?）/g,"")}${l.map(x=>x.task(c)).filter(Boolean).map(x=>`；${x}`).join("")}`;l1(`${t.n} 位 · ${Se(e).yue.replace(/（.*?）/g,"")} · ${Se(i).yue.replace(/（.*?）/g,"")}`,u),De("今次你做客人！小黑做店員 🐈‍⬛",3e3);const h=async(x,D,N,B)=>{x.jp?await jt(W,"cat",x.jp,x.yue,"cat"):(Ft("cat"),De(x.yue,2500)),r++;let I=!0;for(;;){const O=le(D.map((F,rt)=>({value:rt,el:Mn(F.jp,{yue:F.yue,voice:"word"})}))),L=await Ge(O,{title:M("div",{class:"panel-title"},B)});if(L.value===N)return tt("good"),L.button.classList.add("right"),I&&o++,await qe(D[N].jp,"word"),I;tt("bad"),L.button.classList.add("wrong"),I=!1,De(`「${D[L.value].yue}」唔係最啱，再試吓！`,3e3),await Qt(900)}},m=async x=>{for(const D of l.filter(N=>N.phase===x)){const N=D.task(c);N&&De(`📋 ${N}`,5e3);const B=D.build(c),I=await h(B.staff||{jp:null,yue:B.prompt},B.options,0,B.title);In(D.lv,I),B.reply&&await jt(W,"cat",B.reply.jp,B.reply.yue,"cat")}},p=n.people.map(x=>({jp:x.jp,yue:x.yue}));await h(n.staff.welcome,p,n.people.indexOf(t),"👥 你哋幾多位？"),we(t.key,!0),await m("enter"),await jt(W,"cat",n.staff.seat.jp,n.staff.seat.yue,"cat"),await m("seat"),await m("preorder");const g=Ue(n.foods.filter(x=>x!==e)),_=Ue(_l.filter(x=>x!==s)),d=[Xn(n.you.order,{food:e,num:s}),Xn(n.you.order,{food:g,num:s}),Xn(n.you.order,{food:e,num:_})];await h(n.staff.order,d,0,"🍽️ 點餐（記住人數！）"),await m("order");const f=Ue(n.drinks.filter(x=>x!==i)),S=[Xn(n.you.drink,{drink:i,num:s}),Xn(n.you.drink,{drink:f,num:s}),Xn(n.you.drink,{drink:i,num:_})];await h(n.staff.drink,S,0,"🥤 飲品"),await h(n.staff.confirm,[n.you.yes,n.you.wrongPay,n.you.wrongGreet],0,"✅ 就咁多？"),await jt(W,"cat",n.staff.wait.jp,n.staff.wait.yue,"cat"),await m("wait"),Ft(),xn(),await Po(()=>{W.setView("restTable",!0),W.restServe([e,i],t.n)}),await jt(W,"cat",n.staff.serve.jp,n.staff.serve.yue,"cat"),await m("mid"),await h({jp:null,yue:"（食之前講咩？）"},[n.you.itadakimasu,n.you.wrongEat,n.you.gochisou],0,"🙏 開動之前講咩？"),we("itadakimasu",!0),xn(),Ft(),De("😋 食緊… 好好味！",1800),await Qt(1800),await Po(()=>{W.restClear(),W.setView("rest",!0)}),await h({jp:null,yue:"（食完講咩？）"},[n.you.gochisou,n.you.itadakimasu,n.you.wrongGreet],0,"😊 食完講咩？"),we("gochisousama",!0),await m("after"),await h({jp:null,yue:"（想埋單）"},[n.you.kaikei,n.you.wrongPay,n.you.no],0,"🧾 叫埋單"),we("okaikei",!0),await m("pay");const v=Xn(Be()>0&&Math.random()<.5?n.staff.pay2:n.staff.pay,{price:a});await jt(W,"cat",v.jp,"（聽吓幾錢？）","cat",{hidden:!0}),r++;const b=le([a+100,Math.max(100,a-50),a+500,a*2].filter(x=>x!==a)).slice(0,2);let P=!0;for(;;){const x=await Ge(le([a,...b]).map(D=>({value:D,label:`<b>${D}円</b>`})),{title:M("div",{class:"panel-title"},"💴 要畀幾錢？（撳泡泡可以睇字幕）"),cols:3});if(x.value===a){tt("coin"),x.button.classList.add("right"),P&&o++;break}tt("bad"),x.button.classList.add("wrong"),P=!1,qe(v.jp,"cat"),await Qt(700)}await m("receipt"),await jt(W,"cat",n.staff.bye.jp,n.staff.bye.yue,"cat");const R=o/r,T=40+Math.round(R*80),U=20+Math.round(R*20);it().restaurantDone++,it().coins+=T;const q=zi(U);Re(),En(),tt("level");const y=R===1?"💮":R>.7?"⭕":"🔺";await xi("返廚房 🏠",M("div",{class:"unlock"},M("div",{class:"big-emo spin"},y),M("div",{class:"panel-title"},`點餐成功！一次答啱 ${o} / ${r}`),M("div",{class:"reward"},`🪙 +${T}　✨ +${U} XP　🏮 旅遊印章 x${it().restaurantDone}`))),Zn(T),Ft(),de("#taskbar").classList.remove("show"),await Po(()=>{W.catTo("kitchen"),W.setView("kitchen",!0)}),q&&await Pf(),ps()}
