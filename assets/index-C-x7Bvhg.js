(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Cd=new Set(["ui_lock","ui_unlock","ui_settings","ui_coin","ui_timer","ui_serves"]),_a=i=>new URL(`./art/game/${i}.${Cd.has(i)?"svg":"webp"}`,document.baseURI).href;function oi(i,t="",e=""){const n=document.createElement("img");return n.src=_a(i),n.alt=t,n.className=`art ${e}`,n.draggable=!1,n.decoding="async",n}const Xn=i=>{if(!i.textIcon)return oi(`${i.cat}_${i.id}`,i.yue);const t=document.createElement("span");return t.className="food-icon",t.setAttribute("role","img"),t.setAttribute("aria-label",i.yue),t.textContent=i.emoji,t},Sl={"🪙":"coin","🔥":"streak","📚":"book","📖":"book","🛍️":"shop","⚙️":"settings","🔊":"speaker","✕":"close","❤️":"heart","💖":"heart","💕":"heart","🐾":"paw","🔒":"lock","⭐":"star_on","★":"star_on","☆":"star_off","🎁":"gift","🎉":"celebrate","🎊":"celebrate","🔓":"unlock","🎧":"listen","🍽️":"serves","⏱️":"timer","🎯":"target","✨":"xp","🌟":"rare","🎙️":"mic","📅":"calendar","📊":"stats","💴":"yen","🧾":"receipt","🌱":"grow_1","🌿":"grow_2","🌳":"grow_3","🌸":"grow_4","💮":"stamp_hanamaru","⭕":"stamp_maru","🔺":"stamp_sankaku","🏅":"medal","🏆":"trophy","👑":"crown","🏮":"open_shop","🐈‍⬛":"@logo_cat"};function Ta(i){var s;if((s=i.closest)!=null&&s.call(i,"script,style"))return;const t=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);const n=new RegExp(Object.keys(Sl).join("|"),"gu");for(const r of e){if(r.parentElement.closest("script,style"))continue;const a=r.textContent;if(n.lastIndex=0,!n.test(a))continue;n.lastIndex=0;const o=document.createDocumentFragment();let c=0;for(const l of a.matchAll(n)){o.append(a.slice(c,l.index));const u=Sl[l[0]];o.append(oi(u.startsWith("@")?u.slice(1):`ui_${u}`,l[0])),c=l.index+l[0].length}o.append(a.slice(c)),r.replaceWith(o)}}const dr=new Set;let ra=null,Zu=0,Io=0,Oa;const un=()=>dr.size>0,sn=()=>(ra??performance.now())-Zu;function js(i,t){const e=un();t?dr.add(i):dr.delete(i),!e&&un()?(ra=performance.now(),document.dispatchEvent(new Event("gamepause"))):e&&!un()&&(Zu+=performance.now()-ra,ra=null),document.body.classList.toggle("game-paused",un())}function va(i,t){var e;if(t)js(i,!0),clearInterval(Oa),js("resume",!1),(e=document.querySelector("#resume-countdown"))==null||e.remove();else{if(dr.has(i)&&dr.size===1&&Io){js("resume",!0);let n=3;const s=document.createElement("div");s.id="resume-countdown",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=`準備繼續 · ${n}`,document.body.append(s),Oa=setInterval(()=>{--n?s.textContent=`準備繼續 · ${n}`:(clearInterval(Oa),s.remove(),js("resume",!1))},1e3)}js(i,!1)}}function se(i=0){const t=sn()+i;return new Promise(e=>{const n=()=>!un()&&sn()>=t?e():setTimeout(n,25);n()})}async function Pd(i,...t){Io++;try{return await se(),await i(...t)}finally{Io--}}document.addEventListener("visibilitychange",()=>va("hidden",document.hidden));document.hidden&&va("hidden",!0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="169",Ld=0,bl=1,Dd=2,Fc=1,Qu=2,ei=3,Si=0,rn=1,ln=2,xi=0,As=1,wl=2,El=3,Tl=4,Id=5,zi=100,Ud=101,Nd=102,kd=103,Od=104,Fd=200,Bd=201,zd=202,Hd=203,Uo=204,No=205,Vd=206,Gd=207,jd=208,Wd=209,Xd=210,$d=211,qd=212,Yd=213,Kd=214,ko=0,Oo=1,Fo=2,Ls=3,Bo=4,zo=5,Ho=6,Vo=7,th=0,Jd=1,Zd=2,yi=0,Qd=1,tf=2,ef=3,eh=4,nf=5,sf=6,rf=7,nh=300,Ds=301,Is=302,Go=303,jo=304,Aa=306,Wo=1e3,Gi=1001,Xo=1002,Ln=1003,af=1004,Ar=1005,Fn=1006,Fa=1007,ji=1008,ci=1009,ih=1010,sh=1011,fr=1012,Bc=1013,qi=1014,ni=1015,yr=1016,zc=1017,Hc=1018,Us=1020,rh=35902,ah=1021,oh=1022,zn=1023,ch=1024,lh=1025,Rs=1026,Ns=1027,uh=1028,Vc=1029,hh=1030,Gc=1031,jc=1033,aa=33776,oa=33777,ca=33778,la=33779,$o=35840,qo=35841,Yo=35842,Ko=35843,Jo=36196,Zo=37492,Qo=37496,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,cc=37816,lc=37817,uc=37818,hc=37819,dc=37820,fc=37821,ua=36492,pc=36494,mc=36495,dh=36283,gc=36284,_c=36285,vc=36286,of=3200,cf=3201,fh=0,lf=1,vi="",qe="srgb",Ei="srgb-linear",Wc="display-p3",Ra="display-p3-linear",xa="linear",we="srgb",ya="rec709",Ma="p3",is=7680,Al=519,uf=512,hf=513,df=514,ph=515,ff=516,pf=517,mf=518,gf=519,xc=35044,Rl="300 es",ii=2e3,Sa=2001;class Hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,yc=180/Math.PI;function si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function _f(i,t){return(i%t+t)%t}function za(i,t,e){return(1-e)*i+e*t}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],E=s[1],x=s[4],S=s[7],L=s[2],C=s[5],R=s[8];return r[0]=a*v+o*E+c*L,r[3]=a*m+o*x+c*C,r[6]=a*f+o*S+c*R,r[1]=l*v+u*E+h*L,r[4]=l*m+u*x+h*C,r[7]=l*f+u*S+h*R,r[2]=d*v+p*E+g*L,r[5]=d*m+p*x+g*C,r[8]=d*f+p*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new qt;function mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){const i=pr("canvas");return i.style.display="block",i}const Cl={};function ha(i){i in Cl||(Cl[i]=!0,console.warn(i))}function xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pl=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[Ei]:{transfer:xa,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[qe]:{transfer:we,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ra]:{transfer:xa,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl)},[Wc]:{transfer:we,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl).convertLinearToSRGB()}},Sf=new Set([Ei,Ra]),le={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ws[t].toReference,s=Ws[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ws[i].primaries},getTransfer:function(i){return i===vi?xa:Ws[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ws[t].luminanceCoefficients)}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Va(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=pr("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wf=0;class gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;class Ye extends Hs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Gi,s=Gi,r=Fn,a=ji,o=zn,c=ci,l=Ye.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=si(),this.name="",this.source=new gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=nh;Ye.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(p+1)/2,L=(f+1)/2,C=(u+d)/4,R=(h+v)/4,I=(g+m)/4;return x>S&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=R/n):S>L?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tf extends Hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _h extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*v,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,f*E);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const S=o*E;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,h=h*m+v*S,m===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-o*p,t[e+2]=l*g+u*p+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new P,Dl=new Mr;class Sr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Cr.subVectors(this.max,Xs),rs.subVectors(t.a,Xs),as.subVectors(t.b,Xs),os.subVectors(t.c,Xs),di.subVectors(as,rs),fi.subVectors(os,as),Ri.subVectors(rs,os);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,di.z,0,-di.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!Wa(e,rs,as,os,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,rs,as,os,Cr))?!1:(Pr.crossVectors(di,fi),e=[Pr.x,Pr.y,Pr.z],Wa(e,rs,as,os,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,Rr=new Sr,rs=new P,as=new P,os=new P,di=new P,fi=new P,Ri=new P,Xs=new P,Cr=new P,Pr=new P,Ci=new P;function Wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Rf=new Sr,$s=new P,Xa=new P;class Ca{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Xa)),this.expandByPoint($s.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new P,$a=new P,Lr=new P,pi=new P,qa=new P,Dr=new P,Ya=new P;class Xc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$a.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub($a);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=pi.dot(this.direction),c=-pi.dot(Lr),l=pi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($a).addScaledVector(Lr,d),p}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){qa.subVectors(e,t),Dr.subVectors(n,t),Ya.crossVectors(qa,Dr);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const c=o*this.direction.dot(Dr.crossVectors(pi,Dr));if(c<0)return null;const l=o*this.direction.dot(qa.cross(pi));if(l<0||c+l>a)return null;const u=-o*pi.dot(Ya);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,r,a,o,c,l,u,h,d,p,g,v,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,p,g,v,m)}set(t,e,n,s,r,a,o,c,l,u,h,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,v=l*h;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,v=l*h;e[0]=d-v*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),mi.crossVectors(n,mn),mi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),mi.crossVectors(n,mn)),mi.normalize(),Ir.crossVectors(mn,mi),s[0]=mi.x,s[4]=Ir.x,s[8]=mn.x,s[1]=mi.y,s[5]=Ir.y,s[9]=mn.y,s[2]=mi.z,s[6]=Ir.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],E=n[3],x=n[7],S=n[11],L=n[15],C=s[0],R=s[4],I=s[8],Q=s[12],_=s[1],M=s[5],F=s[9],k=s[13],B=s[2],X=s[6],z=s[10],J=s[14],G=s[3],_t=s[7],mt=s[11],gt=s[15];return r[0]=a*C+o*_+c*B+l*G,r[4]=a*R+o*M+c*X+l*_t,r[8]=a*I+o*F+c*z+l*mt,r[12]=a*Q+o*k+c*J+l*gt,r[1]=u*C+h*_+d*B+p*G,r[5]=u*R+h*M+d*X+p*_t,r[9]=u*I+h*F+d*z+p*mt,r[13]=u*Q+h*k+d*J+p*gt,r[2]=g*C+v*_+m*B+f*G,r[6]=g*R+v*M+m*X+f*_t,r[10]=g*I+v*F+m*z+f*mt,r[14]=g*Q+v*k+m*J+f*gt,r[3]=E*C+x*_+S*B+L*G,r[7]=E*R+x*M+S*X+L*_t,r[11]=E*I+x*F+S*z+L*mt,r[15]=E*Q+x*k+S*J+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+v*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],E=h*m*l-v*d*l+v*c*p-o*m*p-h*c*f+o*d*f,x=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,S=u*v*l-g*h*l+g*o*p-a*v*p-u*o*f+a*h*f,L=g*h*c-u*v*c-g*o*d+a*v*d+u*o*m-a*h*m,C=e*E+n*x+s*S+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=E*R,t[1]=(v*d*r-h*m*r-v*s*p+n*m*p+h*s*f-n*d*f)*R,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*f+n*c*f)*R,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*R,t[4]=x*R,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*R,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*p+e*c*p)*R,t[8]=S*R,t[9]=(g*h*r-u*v*r-g*n*p+e*v*p+u*n*f-e*h*f)*R,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*f+e*o*f)*R,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*R,t[12]=L*R,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*m+e*h*m)*R,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*R,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,g=r*h,v=a*u,m=a*h,f=o*h,E=c*l,x=c*u,S=c*h,L=n.x,C=n.y,R=n.z;return s[0]=(1-(v+f))*L,s[1]=(p+S)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(d+f))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(g+x)*R,s[9]=(m-E)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const l=1/r,u=1/a,h=1/o;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,e.setFromRotationMatrix(Nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ii){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===ii)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ii){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,p=(n+s)*u;let g,v;if(o===ii)g=(a+r)*h,v=-2*h;else if(o===Sa)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new P,Nn=new xe,Cf=new P(0,0,0),Pf=new P(1,1,1),mi=new P,Ir=new P,mn=new P,Il=new xe,Ul=new Mr;class $n{constructor(t=0,e=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const Nl=new P,ls=new Mr,Zn=new xe,Ur=new P,qs=new P,Df=new P,If=new Mr,kl=new P(1,0,0),Ol=new P(0,1,0),Fl=new P(0,0,1),Bl={type:"added"},Uf={type:"removed"},us={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Oe extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new P,e=new $n,n=new Mr,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new qt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(qs,Ur,this.up):Zn.lookAt(Ur,qs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Zn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new P(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new P,Qn=new P,Ja=new P,ti=new P,hs=new P,ds=new P,zl=new P,Za=new P,Qa=new P,to=new P,eo=new _e,no=new _e,io=new _e;class Pn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),Qn.subVectors(n,e),Ja.subVectors(t,e);const a=kn.dot(kn),o=kn.dot(Qn),c=kn.dot(Ja),l=Qn.dot(Qn),u=Qn.dot(Ja),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(eo,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),Qn.subVectors(t,e),kn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),kn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;hs.subVectors(s,n),ds.subVectors(r,n),Za.subVectors(t,n);const c=hs.dot(Za),l=ds.dot(Za);if(c<=0&&l<=0)return e.copy(n);Qa.subVectors(t,s);const u=hs.dot(Qa),h=ds.dot(Qa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(hs,a);to.subVectors(t,r);const p=hs.dot(to),g=ds.dot(to);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ds,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return zl.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(zl,o);const f=1/(m+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(hs,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=_f(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+1/3),this.g=so(a,r,t),this.b=so(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return le.fromWorkingColorSpace($e.copy(this),t),Math.round(We($e.r*255,0,255))*65536+Math.round(We($e.g*255,0,255))*256+Math.round(We($e.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=qe){le.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Nr);const n=za(gi.h,Nr.h,e),s=za(gi.s,Nr.s,e),r=za(gi.l,Nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Zt;Zt.NAMES=vh;let Nf=0;class ts extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=si(),this.name="",this.type="Material",this.blending=As,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sn extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new P,kr=new ot;class Hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}}class xh extends Hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yh extends Hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kf=0;const En=new xe,ro=new Oe,fs=new P,gn=new Sr,Ys=new Sr,ze=new P;class Ke extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mh(t)?yh:xh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(gn.min,Ys.min),gn.expandByPoint(ze),ze.addVectors(gn.max,Ys.max),gn.expandByPoint(ze)):(gn.expandByPoint(Ys.min),gn.expandByPoint(Ys.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ze.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(t,l),ze.add(fs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;const l=new P,u=new P,h=new P,d=new ot,p=new ot,g=new ot,v=new P,m=new P;function f(I,Q,_){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,Q),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(M),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(M),o[I].add(v),o[Q].add(v),o[_].add(v),c[I].add(m),c[Q].add(m),c[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,Q=E.length;I<Q;++I){const _=E[I],M=_.start,F=_.count;for(let k=M,B=M+F;k<B;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new P,S=new P,L=new P,C=new P;function R(I){L.fromBufferAttribute(s,I),C.copy(L);const Q=o[I];x.copy(Q),x.sub(L.multiplyScalar(L.dot(Q))).normalize(),S.crossVectors(C,Q);const M=S.dot(c[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,M)}for(let I=0,Q=E.length;I<Q;++I){const _=E[I],M=_.start,F=_.count;for(let k=M,B=M+F;k<B;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new xe,Pi=new Xc,Or=new Ca,Vl=new P,Fr=new P,Br=new P,zr=new P,ao=new P,Hr=new P,Gl=new P,Vr=new P;class yt extends Oe{constructor(t=new Ke,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ao.fromBufferAttribute(h,t),a?Hr.addScaledVector(ao,u):Hr.addScaledVector(ao.sub(e),u))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Or.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Or,Vl)===null||Pi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,L=x;S<L;S+=3){const C=o.getX(S),R=o.getX(S+1),I=o.getX(S+2);s=Gr(this,f,t,n,l,u,h,C,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const E=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=Gr(this,a,t,n,l,u,h,E,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,L=x;S<L;S+=3){const C=S,R=S+1,I=S+2;s=Gr(this,f,t,n,l,u,h,C,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const E=m,x=m+1,S=m+2;s=Gr(this,a,t,n,l,u,h,E,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Of(i,t,e,n,s,r,a,o){let c;if(t.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Si,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Fr),i.getVertexPosition(c,Br),i.getVertexPosition(l,zr);const u=Of(i,t,e,n,Fr,Br,zr,Gl);if(u){const h=new P;Pn.getBarycoord(Gl,Fr,Br,zr,h),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,c,l,h,new ot)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,c,l,h,new ot)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};Pn.getNormal(Fr,Br,zr,d.normal),u.face=d,u.barycoord=h}return u}class De extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function g(v,m,f,E,x,S,L,C,R,I,Q){const _=S/R,M=L/I,F=S/2,k=L/2,B=C/2,X=R+1,z=I+1;let J=0,G=0;const _t=new P;for(let mt=0;mt<z;mt++){const gt=mt*M-k;for(let Wt=0;Wt<X;Wt++){const Bt=Wt*_-F;_t[v]=Bt*E,_t[m]=gt*x,_t[f]=B,l.push(_t.x,_t.y,_t.z),_t[v]=0,_t[m]=0,_t[f]=C>0?1:-1,u.push(_t.x,_t.y,_t.z),h.push(Wt/R),h.push(1-mt/I),J+=1}}for(let mt=0;mt<I;mt++)for(let gt=0;gt<R;gt++){const Wt=d+gt+X*mt,Bt=d+gt+X*(mt+1),j=d+(gt+1)+X*(mt+1),st=d+(gt+1)+X*mt;c.push(Wt,Bt,st),c.push(Bt,j,st),G+=6}o.addGroup(p,G,Q),p+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function Ff(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Bf={clone:ks,merge:Ze};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sh extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new P,jl=new ot,Wl=new ot;class yn extends Sh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Wl),e.subVectors(Wl,jl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Vf extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new yn(ps,ms,t,e);r.layers=this.layers,this.add(r);const a=new yn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new yn(ps,ms,t,e);o.layers=this.layers,this.add(o);const c=new yn(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new yn(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bh extends Ye{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gf extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:xi});r.uniforms.tEquirect.value=e;const a=new yt(s,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=Fn),new Vf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const oo=new P,jf=new P,Wf=new qt;class Fi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oo.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),s=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Ca,jr=new P;class qc{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],E=s[13],x=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+a,d+u,m+g,S+E).normalize(),n[3].setComponents(c-a,d-u,m-g,S-E).normalize(),n[4].setComponents(c-o,d-h,m-v,S-x).normalize(),e===ii)n[5].setComponents(c+o,d+h,m+v,S+x).normalize();else if(e===Sa)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xf(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class xn extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const E=f*d-a;for(let x=0;x<l;x++){const S=x*h-r;g.push(S,-E,0),v.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const x=E+l*f,S=E+l*(f+1),L=E+1+l*(f+1),C=E+1+l*f;p.push(x,S,C),p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
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
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,Xp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,t0=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,v0=`#define TOON
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
}`,x0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:$f,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:Kf,alphatest_fragment:Jf,alphatest_pars_fragment:Zf,aomap_fragment:Qf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:cp,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:up,clipping_planes_vertex:hp,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:vp,displacementmap_pars_vertex:xp,displacementmap_vertex:yp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:bp,colorspace_pars_fragment:wp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:Bp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Op,lights_pars_begin:Fp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:jp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:$p,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Zp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:cm,morphtarget_vertex:lm,normal_fragment_begin:um,normal_fragment_maps:hm,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:vm,iridescence_pars_fragment:xm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:km,specularmap_pars_fragment:Om,tonemapping_fragment:Fm,tonemapping_pars_fragment:Bm,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:jm,worldpos_vertex:Wm,background_vert:Xm,background_frag:$m,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:Km,cube_frag:Jm,depth_vert:Zm,depth_frag:Qm,distanceRGBA_vert:t0,distanceRGBA_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:a0,meshbasic_frag:o0,meshlambert_vert:c0,meshlambert_frag:l0,meshmatcap_vert:u0,meshmatcap_frag:h0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:v0,meshtoon_frag:x0,points_vert:y0,points_frag:M0,shadow_vert:S0,shadow_frag:b0,sprite_vert:w0,sprite_frag:E0},xt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},jn={basic:{uniforms:Ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ze([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ze([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ze([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ze([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ze([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ze([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ze([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ze([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ze([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ze([xt.lights,xt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};jn.physical={uniforms:Ze([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Wr={r:0,b:0,g:0},Di=new $n,T0=new xe;function A0(i,t,e,n,s,r,a){const o=new Zt(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function v(E){let x=!1;const S=g(E);S===null?f(o,c):S&&S.isColor&&(f(S,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Aa)?(u===void 0&&(u=new yt(new De(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ks(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(x.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Di)),u.material.toneMapped=le.getTransfer(S.colorSpace)!==we,(h!==S||d!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new yt(new xn(2,2),new bi({name:"BackgroundMaterial",uniforms:ks(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=le.getTransfer(S.colorSpace)!==we,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,x){E.getRGB(Wr,Mh(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:v,addToRenderList:m}}function R0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,M,F,k,B){let X=!1;const z=h(k,F,M);r!==z&&(r=z,l(r.object)),X=p(_,k,F,B),X&&g(_,k,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(_,M,F,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,M,F){const k=F.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let X=B[M.id];X===void 0&&(X={},B[M.id]=X);let z=X[k];return z===void 0&&(z=d(c()),X[k]=z),z}function d(_){const M=[],F=[],k=[];for(let B=0;B<e;B++)M[B]=0,F[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,M,F,k){const B=r.attributes,X=M.attributes;let z=0;const J=F.getAttributes();for(const G in J)if(J[G].location>=0){const mt=B[G];let gt=X[G];if(gt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),mt===void 0||mt.attribute!==gt||gt&&mt.data!==gt.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(_,M,F,k){const B={},X=M.attributes;let z=0;const J=F.getAttributes();for(const G in J)if(J[G].location>=0){let mt=X[G];mt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor));const gt={};gt.attribute=mt,mt&&mt.data&&(gt.data=mt.data),B[G]=gt,z++}r.attributes=B,r.attributesNum=z,r.index=k}function v(){const _=r.newAttributes;for(let M=0,F=_.length;M<F;M++)_[M]=0}function m(_){f(_,0)}function f(_,M){const F=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;F[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),B[_]!==M&&(i.vertexAttribDivisor(_,M),B[_]=M)}function E(){const _=r.newAttributes,M=r.enabledAttributes;for(let F=0,k=M.length;F<k;F++)M[F]!==_[F]&&(i.disableVertexAttribArray(F),M[F]=0)}function x(_,M,F,k,B,X,z){z===!0?i.vertexAttribIPointer(_,M,F,B,X):i.vertexAttribPointer(_,M,F,k,B,X)}function S(_,M,F,k){v();const B=k.attributes,X=F.getAttributes(),z=M.defaultAttributeValues;for(const J in X){const G=X[J];if(G.location>=0){let _t=B[J];if(_t===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),_t!==void 0){const mt=_t.normalized,gt=_t.itemSize,Wt=t.get(_t);if(Wt===void 0)continue;const Bt=Wt.buffer,j=Wt.type,st=Wt.bytesPerElement,Mt=j===i.INT||j===i.UNSIGNED_INT||_t.gpuType===Bc;if(_t.isInterleavedBufferAttribute){const pt=_t.data,Nt=pt.stride,At=_t.offset;if(pt.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)f(G.location+Z,pt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Z=0;Z<G.locationSize;Z++)x(G.location+Z,gt/G.locationSize,j,mt,Nt*st,(At+gt/G.locationSize*Z)*st,Mt)}else{if(_t.isInstancedBufferAttribute){for(let pt=0;pt<G.locationSize;pt++)f(G.location+pt,_t.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let pt=0;pt<G.locationSize;pt++)m(G.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let pt=0;pt<G.locationSize;pt++)x(G.location+pt,gt/G.locationSize,j,mt,gt*st,gt/G.locationSize*pt*st,Mt)}}else if(z!==void 0){const mt=z[J];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(G.location,mt);break;case 3:i.vertexAttrib3fv(G.location,mt);break;case 4:i.vertexAttrib4fv(G.location,mt);break;default:i.vertexAttrib1fv(G.location,mt)}}}}E()}function L(){I();for(const _ in n){const M=n[_];for(const F in M){const k=M[F];for(const B in k)u(k[B].object),delete k[B];delete M[F]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const F in M){const k=M[F];for(const B in k)u(k[B].object),delete k[B];delete M[F]}delete n[_.id]}function R(_){for(const M in n){const F=n[M];if(F[_.id]===void 0)continue;const k=F[_.id];for(const B in k)u(k[B].object),delete k[B];delete F[_.id]}}function I(){Q(),a=!0,r!==s&&(r=s,l(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function C0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function P0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ci&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:L,maxSamples:C}}function L0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Fi,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,x=E*4;let S=f.clippingState||null;c.value=S,S=u(g,d,x,p);for(let L=0;L!==x;++L)S[L]=e[L];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(h[x]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function D0(i){let t=new WeakMap;function e(a,o){return o===Go?a.mapping=Ds:o===jo&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Go||o===jo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Eh extends Sh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bs=4,Xl=[.125,.215,.35,.446,.526,.582],Hi=20,co=new Eh,$l=new Zt;let lo=null,uo=0,ho=0,fo=!1;const Bi=(1+Math.sqrt(5))/2,gs=1/Bi,ql=[new P(-Bi,gs,0),new P(Bi,gs,0),new P(-gs,0,Bi),new P(gs,0,Bi),new P(0,Bi,-gs),new P(0,Bi,gs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){lo=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,uo,ho),this._renderer.xr.enabled=fo,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:yr,format:zn,colorSpace:Ei,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(r)),this._blurMaterial=U0(r,t,e)}return s}_compileMaterial(t){const e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s){const o=new yn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($l),u.toneMapping=yi,u.autoClear=!1;const p=new Sn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new yt(new De,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy($l),v=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;Xr(s,E*x,f>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ds||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ql[(s-r-1)%ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const f=[];let E=0;for(let R=0;R<Hi;++R){const I=R/v,Q=Math.exp(-I*I/2);f.push(Q),R===0?E+=Q:R<m&&(E+=2*Q)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[s],L=3*S*(s>x-bs?s-x+bs:0),C=4*(this._cubeSize-S);Xr(e,L,C,3*S,2*S),c.setRenderTarget(e),c.render(h,co)}}function I0(i){const t=[],e=[],n=[];let s=i;const r=i-bs+1+Xl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-bs?c=Xl[a-i+bs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,E=new Float32Array(v*g*p),x=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,I=C>2?0:-1,Q=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(Q,v*g*C),x.set(d,m*g*C);const _=[C,C,C,C,C,C];S.set(_,f*g*C)}const L=new Ke;L.setAttribute("position",new Hn(E,v)),L.setAttribute("uv",new Hn(x,m)),L.setAttribute("faceIndex",new Hn(S,f)),t.push(L),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){const n=new Yi(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U0(i,t,e){const n=new Float32Array(Hi),s=new P(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Jl(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Zl(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function N0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Go||c===jo,u=c===Ds||c===Is;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Yl(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Yl(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function k0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ha("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O0(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let x=0,S=E.length;x<S;x+=3){const L=E[x+0],C=E[x+1],R=E[x+2];d.push(L,C,C,R,R,L)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const L=x+0,C=x+1,R=x+2;d.push(L,C,C,R,R,L)}}else return;const m=new(mh(d)?yh:xh)(d,1);m.version=v;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function F0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<v.length;E++)e.update(f,n,v[E])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function B0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let _=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let L=o.attributes.position.count*S,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*C*4*h),I=new _h(R,L,C,h);I.type=ni,I.needsUpdate=!0;const Q=S*4;for(let M=0;M<h;M++){const F=f[M],k=E[M],B=x[M],X=L*C*4*M;for(let z=0;z<F.count;z++){const J=z*Q;g===!0&&(s.fromBufferAttribute(F,z),R[X+J+0]=s.x,R[X+J+1]=s.y,R[X+J+2]=s.z,R[X+J+3]=0),v===!0&&(s.fromBufferAttribute(k,z),R[X+J+4]=s.x,R[X+J+5]=s.y,R[X+J+6]=s.z,R[X+J+7]=0),m===!0&&(s.fromBufferAttribute(B,z),R[X+J+8]=s.x,R[X+J+9]=s.y,R[X+J+10]=s.z,R[X+J+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ot(L,C)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Th extends Ye{constructor(t,e,n,s,r,a,o,c,l,u=Rs){if(u!==Rs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=qi),n===void 0&&u===Ns&&(n=Us),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ah=new Ye,Ql=new Th(1,1),Rh=new _h,Ch=new Af,Ph=new bh,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function X0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Be(e,n)}}function $0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Be(e,n)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Be(e,n)}}function Y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=ph,r=Ql):r=Ah,e.setTexture2D(t||r,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ch,s)}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ph,s)}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rh,s)}function og(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return j0;case 35666:return W0;case 35674:return X0;case 35675:return $0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return Z0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}function cg(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){const e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){const e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){const e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function dg(i,t){const e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){const e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){const e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function xg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ah,r[a])}function wg(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ch,r[a])}function Eg(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ph,r[a])}function Tg(i,t,e){const n=this.cache,s=t.length,r=Pa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rh,r[a])}function Ag(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return ug;case 35666:return hg;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return yg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=og(e.type)}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}}class Pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function ru(i,t){i.seq.push(t),i.map[t.id]=t}function Lg(i,t,e){const n=i.name,s=n.length;for(po.lastIndex=0;;){const r=po.exec(n),a=po.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ru(e,l===void 0?new Rg(o,i,t):new Cg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Pg(o),ru(e,h)),e=h}}}class da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function au(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dg=37297;let Ig=0;function Ug(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ng(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===Ma&&e===ya?n="LinearDisplayP3ToLinearSRGB":t===ya&&e===Ma&&(n="LinearSRGBToLinearDisplayP3"),i){case Ei:case Ra:return[n,"LinearTransferOETF"];case qe:case Wc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ou(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ug(i.getShaderSource(t),a)}else return s}function kg(i,t){const e=Ng(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Og(i,t){let e;switch(t){case Qd:e="Linear";break;case tf:e="Reinhard";break;case ef:e="Cineon";break;case eh:e="ACESFilmic";break;case sf:e="AgX";break;case rf:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new P;function Fg(){le.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function cu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(Vg,jg)}const Gg=new Map;function jg(i,t){let e=$t[t];if(e===void 0){const n=Gg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function qg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Is:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:t="ENVMAP_BLENDING_MULTIPLY";break;case Jd:t="ENVMAP_BLENDING_MIX";break;case Zd:t="ENVMAP_BLENDING_ADD";break}return t}function Jg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$g(e),l=qg(e),u=Yg(e),h=Kg(e),d=Jg(e),p=Bg(e),g=zg(r),v=s.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),f.length>0&&(f+=`
`)):(m=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),f=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?$t.tonemapping_pars_fragment:"",e.toneMapping!==yi?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,kg("linearToOutputTexel",e.outputColorSpace),Fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=Mc(a),a=cu(a,e),a=lu(a,e),o=Mc(o),o=cu(o,e),o=lu(o,e),a=uu(a),o=uu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+m+a,S=E+f+o,L=au(s,s.VERTEX_SHADER,x),C=au(s,s.FRAGMENT_SHADER,S);s.attachShader(v,L),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(M){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(L).trim(),B=s.getShaderInfoLog(C).trim();let X=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,C);else{const J=ou(s,L,"vertex"),G=ou(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+J+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||B==="")&&(z=!1);z&&(M.diagnostics={runnable:X,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(L),s.deleteShader(C),I=new da(s,v),Q=Hg(s,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let Q;this.getAttributes=function(){return Q===void 0&&R(this),Q};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Dg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ig++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let Qg=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e_(t),e.set(t,n)),n}}class e_{constructor(t){this.id=Qg++,this.code=t,this.usedTimes=0}}function n_(i,t,e,n,s,r,a){const o=new $c,c=new t_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,M,F,k,B){const X=k.fog,z=B.geometry,J=_.isMeshStandardMaterial?k.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),_t=G&&G.mapping===Aa?G.image.height:null,mt=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Wt=gt!==void 0?gt.length:0;let Bt=0;z.morphAttributes.position!==void 0&&(Bt=1),z.morphAttributes.normal!==void 0&&(Bt=2),z.morphAttributes.color!==void 0&&(Bt=3);let j,st,Mt,pt;if(mt){const on=jn[mt];j=on.vertexShader,st=on.fragmentShader}else j=_.vertexShader,st=_.fragmentShader,c.update(_),Mt=c.getVertexShaderID(_),pt=c.getFragmentShaderID(_);const Nt=i.getRenderTarget(),At=B.isInstancedMesh===!0,Z=B.isBatchedMesh===!0,wt=!!_.map,$=!!_.matcap,T=!!G,nt=!!_.aoMap,et=!!_.lightMap,it=!!_.bumpMap,dt=!!_.normalMap,ut=!!_.displacementMap,ft=!!_.emissiveMap,A=!!_.metalnessMap,y=!!_.roughnessMap,O=_.anisotropy>0,q=_.clearcoat>0,Y=_.dispersion>0,K=_.iridescence>0,Dt=_.sheen>0,vt=_.transmission>0,Rt=O&&!!_.anisotropyMap,te=q&&!!_.clearcoatMap,lt=q&&!!_.clearcoatNormalMap,Ct=q&&!!_.clearcoatRoughnessMap,Gt=K&&!!_.iridescenceMap,jt=K&&!!_.iridescenceThicknessMap,Pt=Dt&&!!_.sheenColorMap,ee=Dt&&!!_.sheenRoughnessMap,Xt=!!_.specularMap,ye=!!_.specularColorMap,D=!!_.specularIntensityMap,Et=vt&&!!_.transmissionMap,W=vt&&!!_.thicknessMap,tt=!!_.gradientMap,St=!!_.alphaMap,Tt=_.alphaTest>0,ne=!!_.alphaHash,Pe=!!_.extensions;let an=yi;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(an=i.toneMapping);const ae={shaderID:mt,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:st,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Z,batchingColor:Z&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:Ei,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:$,envMap:T,envMapMode:T&&G.mapping,envMapCubeUVHeight:_t,aoMap:nt,lightMap:et,bumpMap:it,normalMap:dt,displacementMap:p&&ut,emissiveMap:ft,normalMapObjectSpace:dt&&_.normalMapType===lf,normalMapTangentSpace:dt&&_.normalMapType===fh,metalnessMap:A,roughnessMap:y,anisotropy:O,anisotropyMap:Rt,clearcoat:q,clearcoatMap:te,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ct,dispersion:Y,iridescence:K,iridescenceMap:Gt,iridescenceThicknessMap:jt,sheen:Dt,sheenColorMap:Pt,sheenRoughnessMap:ee,specularMap:Xt,specularColorMap:ye,specularIntensityMap:D,transmission:vt,transmissionMap:Et,thicknessMap:W,gradientMap:tt,opaque:_.transparent===!1&&_.blending===As&&_.alphaToCoverage===!1,alphaMap:St,alphaTest:Tt,alphaHash:ne,combine:_.combine,mapUv:wt&&m(_.map.channel),aoMapUv:nt&&m(_.aoMap.channel),lightMapUv:et&&m(_.lightMap.channel),bumpMapUv:it&&m(_.bumpMap.channel),normalMapUv:dt&&m(_.normalMap.channel),displacementMapUv:ut&&m(_.displacementMap.channel),emissiveMapUv:ft&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:y&&m(_.roughnessMap.channel),anisotropyMapUv:Rt&&m(_.anisotropyMap.channel),clearcoatMapUv:te&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(_.sheenRoughnessMap.channel),specularMapUv:Xt&&m(_.specularMap.channel),specularColorMapUv:ye&&m(_.specularColorMap.channel),specularIntensityMapUv:D&&m(_.specularIntensityMap.channel),transmissionMapUv:Et&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:St&&m(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(wt||St),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:an,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&_.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function E(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(x(M,_),S(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const M=v[_.type];let F;if(M){const k=jn[M];F=Bf.clone(k.uniforms)}else F=_.uniforms;return F}function C(_,M){let F;for(let k=0,B=u.length;k<B;k++){const X=u[k];if(X.cacheKey===M){F=X,++F.usedTimes;break}}return F===void 0&&(F=new Zg(i,M,_,r),u.push(F)),F}function R(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function I(_){c.remove(_)}function Q(){c.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:L,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:Q}}function i_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function o(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||s_),n.length>1&&n.sort(d||du),s.length>1&&s.sort(d||du)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function r_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fu,i.set(n,[a])):s>=r.length?(a=new fu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Zt};break;case"SpotLight":e={position:new P,direction:new P,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function o_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u_(i){const t=new a_,e=o_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new xe,a=new xe;function o(l){let u=0,h=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,E=0,x=0,S=0,L=0,C=0,R=0;l.sort(l_);for(let Q=0,_=l.length;Q<_;Q++){const M=l[Q],F=M.color,k=M.intensity,B=M.distance,X=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=F.r*k,h+=F.g*k,d+=F.b*k;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],k);R++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const J=M.shadow,G=e.get(M);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=M.shadow.matrix,E++}n.directional[p]=z,p++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(F).multiplyScalar(k),z.distance=B,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[v]=z;const J=M.shadow;if(M.map&&(n.spotLightMap[L]=M.map,L++,J.updateMatrices(M),M.castShadow&&C++),n.spotLightMatrix[v]=J.matrix,M.castShadow){const G=e.get(M);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,S++}v++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(F).multiplyScalar(k),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=z,m++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const J=M.shadow,G=e.get(M);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=M.shadow.matrix,x++}n.point[g]=z,g++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(k),z.groundColor.copy(M.groundColor).multiplyScalar(k),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==x||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=x,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=R,n.version=c_++)}function c(l,u){let h=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const x=l[f];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function pu(i){const t=new u_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function h_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new pu(i),t.set(s,[o])):r>=a.length?(o=new pu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class d_ extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f_ extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(i,t,e){let n=new qc;const s=new ot,r=new ot,a=new _e,o=new d_({depthPacking:cf}),c=new f_,l={},u=e.maxTextureSize,h={[Si]:rn,[rn]:Si,[ln]:ln},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let f=this.type;this.render=function(C,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const Q=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),F=i.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=f!==ei&&this.type===ei,B=f===ei&&this.type!==ei;for(let X=0,z=C.length;X<z;X++){const J=C[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const _t=G.getFrameExtents();if(s.multiply(_t),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,G.mapSize.y=r.y)),G.map===null||k===!0||B===!0){const gt=this.type!==ei?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new Yi(s.x,s.y,gt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const mt=G.getViewportCount();for(let gt=0;gt<mt;gt++){const Wt=G.getViewport(gt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),F.viewport(a),G.updateMatrices(J,gt),n=G.getFrustum(),S(R,I,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&E(G,I),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(Q,_,M)};function E(C,R){const I=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,I,p,v,null)}function x(C,R,I,Q){let _=null;const M=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)_=M;else if(_=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=_.uuid,k=R.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let X=B[k];X===void 0&&(X=_.clone(),B[k]=X,R.addEventListener("dispose",L)),_=X}if(_.visible=R.visible,_.wireframe=R.wireframe,Q===ei?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:h[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=I}return _}function S(C,R,I,Q,_){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===ei)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const k=t.update(C),B=C.material;if(Array.isArray(B)){const X=k.groups;for(let z=0,J=X.length;z<J;z++){const G=X[z],_t=B[G.materialIndex];if(_t&&_t.visible){const mt=x(C,_t,Q,_);C.onBeforeShadow(i,C,R,I,k,mt,G),i.renderBufferDirect(I,null,k,mt,C,G),C.onAfterShadow(i,C,R,I,k,mt,G)}}}else if(B.visible){const X=x(C,B,Q,_);C.onBeforeShadow(i,C,R,I,k,X,null),i.renderBufferDirect(I,null,k,X,C,null),C.onAfterShadow(i,C,R,I,k,X,null)}}const F=C.children;for(let k=0,B=F.length;k<B;k++)S(F[k],R,I,Q,_)}function L(C){C.target.removeEventListener("dispose",L);for(const I in l){const Q=l[I],_=C.target.uuid;_ in Q&&(Q[_].dispose(),delete Q[_])}}}const __={[ko]:Oo,[Fo]:Ho,[Bo]:Vo,[Ls]:zo,[Oo]:ko,[Ho]:Fo,[Vo]:Bo,[zo]:Ls};function v_(i){function t(){let D=!1;const Et=new _e;let W=null;const tt=new _e(0,0,0,0);return{setMask:function(St){W!==St&&!D&&(i.colorMask(St,St,St,St),W=St)},setLocked:function(St){D=St},setClear:function(St,Tt,ne,Pe,an){an===!0&&(St*=Pe,Tt*=Pe,ne*=Pe),Et.set(St,Tt,ne,Pe),tt.equals(Et)===!1&&(i.clearColor(St,Tt,ne,Pe),tt.copy(Et))},reset:function(){D=!1,W=null,tt.set(-1,0,0,0)}}}function e(){let D=!1,Et=!1,W=null,tt=null,St=null;return{setReversed:function(Tt){Et=Tt},setTest:function(Tt){Tt?Mt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Tt){W!==Tt&&!D&&(i.depthMask(Tt),W=Tt)},setFunc:function(Tt){if(Et&&(Tt=__[Tt]),tt!==Tt){switch(Tt){case ko:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=Tt}},setLocked:function(Tt){D=Tt},setClear:function(Tt){St!==Tt&&(i.clearDepth(Tt),St=Tt)},reset:function(){D=!1,W=null,tt=null,St=null}}}function n(){let D=!1,Et=null,W=null,tt=null,St=null,Tt=null,ne=null,Pe=null,an=null;return{setTest:function(ae){D||(ae?Mt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ae){Et!==ae&&!D&&(i.stencilMask(ae),Et=ae)},setFunc:function(ae,on,Yn){(W!==ae||tt!==on||St!==Yn)&&(i.stencilFunc(ae,on,Yn),W=ae,tt=on,St=Yn)},setOp:function(ae,on,Yn){(Tt!==ae||ne!==on||Pe!==Yn)&&(i.stencilOp(ae,on,Yn),Tt=ae,ne=on,Pe=Yn)},setLocked:function(ae){D=ae},setClear:function(ae){an!==ae&&(i.clearStencil(ae),an=ae)},reset:function(){D=!1,Et=null,W=null,tt=null,St=null,Tt=null,ne=null,Pe=null,an=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,E=null,x=null,S=null,L=null,C=new Zt(0,0,0),R=0,I=!1,Q=null,_=null,M=null,F=null,k=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=z>=2);let G=null,_t={};const mt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Wt=new _e().fromArray(mt),Bt=new _e().fromArray(gt);function j(D,Et,W,tt){const St=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(D,Tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<W;ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(Et+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Tt}const st={};st[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),r.setFunc(Ls),et(!1),it(bl),Mt(i.CULL_FACE),T(xi);function Mt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function pt(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Nt(D,Et){return u[D]!==Et?(i.bindFramebuffer(D,Et),u[D]=Et,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Et),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function At(D,Et){let W=d,tt=!1;if(D){W=h.get(Et),W===void 0&&(W=[],h.set(Et,W));const St=D.textures;if(W.length!==St.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,ne=St.length;Tt<ne;Tt++)W[Tt]=i.COLOR_ATTACHMENT0+Tt;W.length=St.length,tt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,tt=!0);tt&&i.drawBuffers(W)}function Z(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const wt={[zi]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};wt[kd]=i.MIN,wt[Od]=i.MAX;const $={[Fd]:i.ZERO,[Bd]:i.ONE,[zd]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[Xd]:i.SRC_ALPHA_SATURATE,[jd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[Wd]:i.ONE_MINUS_DST_COLOR,[Gd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[qd]:i.ONE_MINUS_CONSTANT_COLOR,[Yd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function T(D,Et,W,tt,St,Tt,ne,Pe,an,ae){if(D===xi){g===!0&&(pt(i.BLEND),g=!1);return}if(g===!1&&(Mt(i.BLEND),g=!0),D!==Id){if(D!==v||ae!==I){if((m!==zi||x!==zi)&&(i.blendEquation(i.FUNC_ADD),m=zi,x=zi),ae)switch(D){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,E=null,S=null,L=null,C.set(0,0,0),R=0,v=D,I=ae}return}St=St||Et,Tt=Tt||W,ne=ne||tt,(Et!==m||St!==x)&&(i.blendEquationSeparate(wt[Et],wt[St]),m=Et,x=St),(W!==f||tt!==E||Tt!==S||ne!==L)&&(i.blendFuncSeparate($[W],$[tt],$[Tt],$[ne]),f=W,E=tt,S=Tt,L=ne),(Pe.equals(C)===!1||an!==R)&&(i.blendColor(Pe.r,Pe.g,Pe.b,an),C.copy(Pe),R=an),v=D,I=!1}function nt(D,Et){D.side===ln?pt(i.CULL_FACE):Mt(i.CULL_FACE);let W=D.side===rn;Et&&(W=!W),et(W),D.blending===As&&D.transparent===!1?T(xi):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const tt=D.stencilWrite;a.setTest(tt),tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){Q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Q=D)}function it(D){D!==Ld?(Mt(i.CULL_FACE),D!==_&&(D===bl?i.cullFace(i.BACK):D===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),_=D}function dt(D){D!==M&&(X&&i.lineWidth(D),M=D)}function ut(D,Et,W){D?(Mt(i.POLYGON_OFFSET_FILL),(F!==Et||k!==W)&&(i.polygonOffset(Et,W),F=Et,k=W)):pt(i.POLYGON_OFFSET_FILL)}function ft(D){D?Mt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+B-1),G!==D&&(i.activeTexture(D),G=D)}function y(D,Et,W){W===void 0&&(G===null?W=i.TEXTURE0+B-1:W=G);let tt=_t[W];tt===void 0&&(tt={type:void 0,texture:void 0},_t[W]=tt),(tt.type!==D||tt.texture!==Et)&&(G!==W&&(i.activeTexture(W),G=W),i.bindTexture(D,Et||st[D]),tt.type=D,tt.texture=Et)}function O(){const D=_t[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(D){Wt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Wt.copy(D))}function Pt(D){Bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function ee(D,Et){let W=c.get(Et);W===void 0&&(W=new WeakMap,c.set(Et,W));let tt=W.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(Et,D.name),W.set(D,tt))}function Xt(D,Et){const tt=c.get(Et).get(D);o.get(Et)!==tt&&(i.uniformBlockBinding(Et,tt,D.__bindingPointIndex),o.set(Et,tt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,_t={},u={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,E=null,x=null,S=null,L=null,C=new Zt(0,0,0),R=0,I=!1,Q=null,_=null,M=null,F=null,k=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Mt,disable:pt,bindFramebuffer:Nt,drawBuffers:At,useProgram:Z,setBlending:T,setMaterial:nt,setFlipSided:et,setCullFace:it,setLineWidth:dt,setPolygonOffset:ut,setScissorTest:ft,activeTexture:A,bindTexture:y,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:Y,texImage2D:Ct,texImage3D:Gt,updateUBOMapping:ee,uniformBlockBinding:Xt,texStorage2D:te,texStorage3D:lt,texSubImage2D:K,texSubImage3D:Dt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Rt,scissor:jt,viewport:Pt,reset:ye}}function mu(i,t,e,n){const s=x_(n);switch(e){case ah:return i*t;case ch:return i*t;case lh:return i*t*2;case uh:return i*t/s.components*s.byteLength;case Vc:return i*t/s.components*s.byteLength;case hh:return i*t*2/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case oh:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case jc:return i*t*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case $o:case Yo:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _c:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function x_(i){switch(i){case ci:case ih:return{byteLength:1,components:1};case fr:case sh:case yr:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case qi:case Bc:case ni:return{byteLength:4,components:1};case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function y_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):pr("canvas")}function v(A,y,O){let q=1;const Y=ft(A);if((Y.width>O||Y.height>O)&&(q=O/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(q*Y.width),Dt=Math.floor(q*Y.height);h===void 0&&(h=g(K,Dt));const vt=y?g(K,Dt):h;return vt.width=K,vt.height=Dt,vt.getContext("2d").drawImage(A,0,0,K,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+K+"x"+Dt+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ln&&A.minFilter!==Fn}function f(A){i.generateMipmap(A)}function E(A,y,O,q,Y=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=y;if(y===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),y===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),y===i.RGBA){const Dt=Y?xa:le.getTransfer(q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=Dt===we?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(A,y){let O;return A?y===null||y===qi||y===Us?O=i.DEPTH24_STENCIL8:y===ni?O=i.DEPTH32F_STENCIL8:y===fr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qi||y===Us?O=i.DEPTH_COMPONENT24:y===ni?O=i.DEPTH_COMPONENT32F:y===fr&&(O=i.DEPTH_COMPONENT16),O}function S(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ln&&A.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){const y=A.target;y.removeEventListener("dispose",L),R(y),y.isVideoTexture&&u.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),Q(y)}function R(A){const y=n.get(A);if(y.__webglInit===void 0)return;const O=A.source,q=d.get(O);if(q){const Y=q[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&I(A),Object.keys(q).length===0&&d.delete(O)}n.remove(A)}function I(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const O=A.source,q=d.get(O);delete q[y.__cacheKey],a.memory.textures--}function Q(A){const y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Y=0;Y<y.__webglFramebuffer[q].length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[q][Y]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let q=0,Y=O.length;q<Y;q++){const K=n.get(O[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(A)}let _=0;function M(){_=0}function F(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function k(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function B(A,y){const O=n.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(O,A,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function X(A,y){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Bt(O,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function z(A,y){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Bt(O,A,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function J(A,y){const O=n.get(A);if(A.version>0&&O.__version!==A.version){j(O,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const G={[Wo]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},_t={[Ln]:i.NEAREST,[af]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},mt={[uf]:i.NEVER,[gf]:i.ALWAYS,[hf]:i.LESS,[ph]:i.LEQUAL,[df]:i.EQUAL,[mf]:i.GEQUAL,[ff]:i.GREATER,[pf]:i.NOTEQUAL};function gt(A,y){if(y.type===ni&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===Fa||y.magFilter===Ar||y.magFilter===ji||y.minFilter===Fn||y.minFilter===Fa||y.minFilter===Ar||y.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_t[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ln||y.minFilter!==Ar&&y.minFilter!==ji||y.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",L));const q=y.source;let Y=d.get(q);Y===void 0&&(Y={},d.set(q,Y));const K=k(y);if(K!==A.__cacheKey){Y[K]===void 0&&(Y[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[K].usedTimes++;const Dt=Y[A.__cacheKey];Dt!==void 0&&(Y[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&I(y)),A.__cacheKey=K,A.__webglTexture=Y[K].texture}return O}function Bt(A,y,O){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const Y=Wt(A,y),K=y.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+O);const Dt=n.get(K);if(K.version!==Dt.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const vt=le.getPrimaries(le.workingColorSpace),Rt=y.colorSpace===vi?null:le.getPrimaries(y.colorSpace),te=y.colorSpace===vi||vt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let lt=v(y.image,!1,s.maxTextureSize);lt=ut(y,lt);const Ct=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type);let jt=E(y.internalFormat,Ct,Gt,y.colorSpace,y.isVideoTexture);gt(q,y);let Pt;const ee=y.mipmaps,Xt=y.isVideoTexture!==!0,ye=Dt.__version===void 0||Y===!0,D=K.dataReady,Et=S(y,lt);if(y.isDepthTexture)jt=x(y.format===Ns,y.type),ye&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,jt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,jt,lt.width,lt.height,0,Ct,Gt,null));else if(y.isDataTexture)if(ee.length>0){Xt&&ye&&e.texStorage2D(i.TEXTURE_2D,Et,jt,ee[0].width,ee[0].height);for(let W=0,tt=ee.length;W<tt;W++)Pt=ee[W],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Pt.width,Pt.height,Ct,Gt,Pt.data):e.texImage2D(i.TEXTURE_2D,W,jt,Pt.width,Pt.height,0,Ct,Gt,Pt.data);y.generateMipmaps=!1}else Xt?(ye&&e.texStorage2D(i.TEXTURE_2D,Et,jt,lt.width,lt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Ct,Gt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,jt,lt.width,lt.height,0,Ct,Gt,lt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,jt,ee[0].width,ee[0].height,lt.depth);for(let W=0,tt=ee.length;W<tt;W++)if(Pt=ee[W],y.format!==zn)if(Ct!==null)if(Xt){if(D)if(y.layerUpdates.size>0){const St=mu(Pt.width,Pt.height,y.format,y.type);for(const Tt of y.layerUpdates){const ne=Pt.data.subarray(Tt*St/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*St/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Tt,Pt.width,Pt.height,1,Ct,ne,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Pt.width,Pt.height,lt.depth,Ct,Pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,jt,Pt.width,Pt.height,lt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Pt.width,Pt.height,lt.depth,Ct,Gt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,jt,Pt.width,Pt.height,lt.depth,0,Ct,Gt,Pt.data)}else{Xt&&ye&&e.texStorage2D(i.TEXTURE_2D,Et,jt,ee[0].width,ee[0].height);for(let W=0,tt=ee.length;W<tt;W++)Pt=ee[W],y.format!==zn?Ct!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Pt.width,Pt.height,Ct,Gt,Pt.data):e.texImage2D(i.TEXTURE_2D,W,jt,Pt.width,Pt.height,0,Ct,Gt,Pt.data)}else if(y.isDataArrayTexture)if(Xt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,jt,lt.width,lt.height,lt.depth),D)if(y.layerUpdates.size>0){const W=mu(lt.width,lt.height,y.format,y.type);for(const tt of y.layerUpdates){const St=lt.data.subarray(tt*W/lt.data.BYTES_PER_ELEMENT,(tt+1)*W/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,Ct,Gt,St)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Gt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,lt.width,lt.height,lt.depth,0,Ct,Gt,lt.data);else if(y.isData3DTexture)Xt?(ye&&e.texStorage3D(i.TEXTURE_3D,Et,jt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Gt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,jt,lt.width,lt.height,lt.depth,0,Ct,Gt,lt.data);else if(y.isFramebufferTexture){if(ye)if(Xt)e.texStorage2D(i.TEXTURE_2D,Et,jt,lt.width,lt.height);else{let W=lt.width,tt=lt.height;for(let St=0;St<Et;St++)e.texImage2D(i.TEXTURE_2D,St,jt,W,tt,0,Ct,Gt,null),W>>=1,tt>>=1}}else if(ee.length>0){if(Xt&&ye){const W=ft(ee[0]);e.texStorage2D(i.TEXTURE_2D,Et,jt,W.width,W.height)}for(let W=0,tt=ee.length;W<tt;W++)Pt=ee[W],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ct,Gt,Pt):e.texImage2D(i.TEXTURE_2D,W,jt,Ct,Gt,Pt);y.generateMipmaps=!1}else if(Xt){if(ye){const W=ft(lt);e.texStorage2D(i.TEXTURE_2D,Et,jt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Gt,lt)}else e.texImage2D(i.TEXTURE_2D,0,jt,Ct,Gt,lt);m(y)&&f(q),Dt.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function j(A,y,O){if(y.image.length!==6)return;const q=Wt(A,y),Y=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const K=n.get(Y);if(Y.version!==K.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const Dt=le.getPrimaries(le.workingColorSpace),vt=y.colorSpace===vi?null:le.getPrimaries(y.colorSpace),Rt=y.colorSpace===vi||Dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,lt=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let tt=0;tt<6;tt++)!te&&!lt?Ct[tt]=v(y.image[tt],!0,s.maxCubemapSize):Ct[tt]=lt?y.image[tt].image:y.image[tt],Ct[tt]=ut(y,Ct[tt]);const Gt=Ct[0],jt=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),ee=E(y.internalFormat,jt,Pt,y.colorSpace),Xt=y.isVideoTexture!==!0,ye=K.__version===void 0||q===!0,D=Y.dataReady;let Et=S(y,Gt);gt(i.TEXTURE_CUBE_MAP,y);let W;if(te){Xt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ee,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){W=Ct[tt].mipmaps;for(let St=0;St<W.length;St++){const Tt=W[St];y.format!==zn?jt!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Tt.width,Tt.height,jt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,ee,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Tt.width,Tt.height,jt,Pt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,ee,Tt.width,Tt.height,0,jt,Pt,Tt.data)}}}else{if(W=y.mipmaps,Xt&&ye){W.length>0&&Et++;const tt=ft(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ee,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct[tt].width,Ct[tt].height,jt,Pt,Ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,Ct[tt].width,Ct[tt].height,0,jt,Pt,Ct[tt].data);for(let St=0;St<W.length;St++){const ne=W[St].image[tt].image;Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,ne.width,ne.height,jt,Pt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,ee,ne.width,ne.height,0,jt,Pt,ne.data)}}else{Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,jt,Pt,Ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,jt,Pt,Ct[tt]);for(let St=0;St<W.length;St++){const Tt=W[St];Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,jt,Pt,Tt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,ee,jt,Pt,Tt.image[tt])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),K.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function st(A,y,O,q,Y,K){const Dt=r.convert(O.format,O.colorSpace),vt=r.convert(O.type),Rt=E(O.internalFormat,Dt,vt,O.colorSpace);if(!n.get(y).__hasExternalTextures){const lt=Math.max(1,y.width>>K),Ct=Math.max(1,y.height>>K);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,K,Rt,lt,Ct,y.depth,0,Dt,vt,null):e.texImage2D(Y,K,Rt,lt,Ct,0,Dt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Y,n.get(O).__webglTexture,0,et(y)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Y,n.get(O).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(A,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const q=y.depthTexture,Y=q&&q.isDepthTexture?q.type:null,K=x(y.stencilBuffer,Y),Dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=et(y);it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,K,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,A)}else{const q=y.textures;for(let Y=0;Y<q.length;Y++){const K=q[Y],Dt=r.convert(K.format,K.colorSpace),vt=r.convert(K.type),Rt=E(K.internalFormat,Dt,vt,K.colorSpace),te=et(y);O&&it(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Rt,y.width,y.height):it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const q=n.get(y.depthTexture).__webglTexture,Y=et(y);if(y.depthTexture.format===Rs)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(y.depthTexture.format===Ns)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");pt(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),Mt(y.__webglDepthbuffer[q],A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Mt(y.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Y)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,y,O){const q=n.get(A);y!==void 0&&st(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(A)}function Z(A){const y=A.texture,O=n.get(A),q=n.get(y);A.addEventListener("dispose",C);const Y=A.textures,K=A.isWebGLCubeRenderTarget===!0,Dt=Y.length>1;if(Dt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[vt]=[];for(let Rt=0;Rt<y.mipmaps.length;Rt++)O.__webglFramebuffer[vt][Rt]=i.createFramebuffer()}else O.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)O.__webglFramebuffer[vt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let vt=0,Rt=Y.length;vt<Rt;vt++){const te=n.get(Y[vt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let vt=0;vt<Y.length;vt++){const Rt=Y[vt];O.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[vt]);const te=r.convert(Rt.format,Rt.colorSpace),lt=r.convert(Rt.type),Ct=E(Rt.internalFormat,te,lt,Rt.colorSpace,A.isXRRenderTarget===!0),Gt=et(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,O.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),gt(i.TEXTURE_CUBE_MAP,y);for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)st(O.__webglFramebuffer[vt][Rt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt);else st(O.__webglFramebuffer[vt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let vt=0,Rt=Y.length;vt<Rt;vt++){const te=Y[vt],lt=n.get(te);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),gt(i.TEXTURE_2D,te),st(O.__webglFramebuffer,A,te,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(te)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,q.__webglTexture),gt(vt,y),y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)st(O.__webglFramebuffer[Rt],A,y,i.COLOR_ATTACHMENT0,vt,Rt);else st(O.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,vt,0);m(y)&&f(vt),e.unbindTexture()}A.depthBuffer&&Nt(A)}function wt(A){const y=A.textures;for(let O=0,q=y.length;O<q;O++){const Y=y[O];if(m(Y)){const K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(Y).__webglTexture;e.bindTexture(K,Dt),f(K),e.unbindTexture()}}}const $=[],T=[];function nt(A){if(A.samples>0){if(it(A)===!1){const y=A.textures,O=A.width,q=A.height;let Y=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(A),vt=y.length>1;if(vt)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const te=n.get(y[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Y,i.NEAREST),c===!0&&($.length=0,T.length=0,$.push(i.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&($.push(K),T.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const te=n.get(y[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function et(A){return Math.min(s.maxSamples,A.samples)}function it(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dt(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function ut(A,y){const O=A.colorSpace,q=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ei&&O!==vi&&(le.getTransfer(O)===we?(q!==zn||Y!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=At,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=it}function M_(i,t){function e(n,s=vi){let r;const a=le.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===oh)return i.RGB;if(n===zn)return i.RGBA;if(n===ch)return i.LUMINANCE;if(n===lh)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===uh)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===hh)return i.RG;if(n===Gc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===aa||n===oa||n===ca||n===la)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===qo||n===Yo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Zo||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Zo)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===uc||n===hc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===pc||n===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===gc||n===_c||n===vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class S_ extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bi({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A_ extends Hs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const v=new T_,m=e.getContextAttributes();let f=null,E=null;const x=[],S=[],L=new ot;let C=null;const R=new yn;R.layers.enable(1),R.viewport=new _e;const I=new yn;I.layers.enable(2),I.viewport=new _e;const Q=[R,I],_=new S_;_.layers.enable(1),_.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=x[j];return st===void 0&&(st=new mo,x[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=x[j];return st===void 0&&(st=new mo,x[j]=st),st.getGripSpace()},this.getHand=function(j){let st=x[j];return st===void 0&&(st=new mo,x[j]=st),st.getHandSpace()};function k(j){const st=S.indexOf(j.inputSource);if(st===-1)return;const Mt=x[st];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,l||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let j=0;j<x.length;j++){const st=S[j];st!==null&&(S[j]=null,x[j].disconnect(st))}M=null,F=null,v.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,E=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Yi(p.framebufferWidth,p.framebufferHeight,{format:zn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Mt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Ns:Rs,Mt=m.stencil?Us:qi);const Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Yi(d.textureWidth,d.textureHeight,{format:zn,type:ci,depthTexture:new Th(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let st=0;st<j.removed.length;st++){const Mt=j.removed[st],pt=S.indexOf(Mt);pt>=0&&(S[pt]=null,x[pt].disconnect(Mt))}for(let st=0;st<j.added.length;st++){const Mt=j.added[st];let pt=S.indexOf(Mt);if(pt===-1){for(let At=0;At<x.length;At++)if(At>=S.length){S.push(Mt),pt=At;break}else if(S[At]===null){S[At]=Mt,pt=At;break}if(pt===-1)break}const Nt=x[pt];Nt&&Nt.connect(Mt)}}const z=new P,J=new P;function G(j,st,Mt){z.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);const pt=z.distanceTo(J),Nt=st.projectionMatrix.elements,At=Mt.projectionMatrix.elements,Z=Nt[14]/(Nt[10]-1),wt=Nt[14]/(Nt[10]+1),$=(Nt[9]+1)/Nt[5],T=(Nt[9]-1)/Nt[5],nt=(Nt[8]-1)/Nt[0],et=(At[8]+1)/At[0],it=Z*nt,dt=Z*et,ut=pt/(-nt+et),ft=ut*-nt;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ft),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const A=Z+ut,y=wt+ut,O=it-ft,q=dt+(pt-ft),Y=$*wt/y*A,K=T*wt/y*A;j.projectionMatrix.makePerspective(O,q,Y,K,A,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _t(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Mt=j.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),_.near=I.near=R.near=st,_.far=I.far=R.far=Mt,(M!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,F=_.far);const pt=j.parent,Nt=_.cameras;_t(_,pt);for(let At=0;At<Nt.length;At++)_t(Nt[At],pt);Nt.length===2?G(_,R,I):_.projectionMatrix.copy(R.projectionMatrix),mt(j,_,pt)};function mt(j,st,Mt){Mt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let gt=null;function Wt(j,st){if(u=st.getViewerPose(l||a),g=st,u!==null){const Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let pt=!1;Mt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let At=0;At<Mt.length;At++){const Z=Mt[At];let wt=null;if(p!==null)wt=p.getViewport(Z);else{const T=h.getViewSubImage(d,Z);wt=T.viewport,At===0&&(t.setRenderTargetTextures(E,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(E))}let $=Q[At];$===void 0&&($=new yn,$.layers.enable(At),$.viewport=new _e,Q[At]=$),$.matrix.fromArray(Z.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Z.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(wt.x,wt.y,wt.width,wt.height),At===0&&(_.matrix.copy($.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push($)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const At=h.getDepthInformation(Mt[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const pt=S[Mt],Nt=x[Mt];pt!==null&&Nt!==void 0&&Nt.update(pt,st,l||a)}gt&&gt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Bt=new wh;Bt.setAnimationLoop(Wt),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}}const Ii=new $n,R_=new xe;function C_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Mh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),x=E.envMap,S=E.envMapRotation;x&&(m.envMap.value=x,Ii.copy(S),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(Ii)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const S=x.program;n.uniformBlockBinding(E,S)}function l(E,x){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(E,L);const C=t.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function u(E){const x=h();E.__bindingPointIndex=x;const S=i.createBuffer(),L=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=s[E.id],S=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,R=S.length;C<R;C++){const I=Array.isArray(S[C])?S[C]:[S[C]];for(let Q=0,_=I.length;Q<_;Q++){const M=I[Q];if(p(M,C,Q,L)===!0){const F=M.__offset,k=Array.isArray(M.value)?M.value:[M.value];let B=0;for(let X=0;X<k.length;X++){const z=k[X],J=v(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+B,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,x,S,L){const C=E.value,R=x+"_"+S;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const I=L[R];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return L[R]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(E){const x=E.uniforms;let S=0;const L=16;for(let R=0,I=x.length;R<I;R++){const Q=Array.isArray(x[R])?x[R]:[x[R]];for(let _=0,M=Q.length;_<M;_++){const F=Q[_],k=Array.isArray(F.value)?F.value:[F.value];for(let B=0,X=k.length;B<X;B++){const z=k[B],J=v(z),G=S%L,_t=G%J.boundary,mt=G+_t;S+=_t,mt!==0&&L-mt<J.storage&&(S+=L-mt),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=J.storage}}}const C=S%L;return C>0&&(S+=L-C),E.__size=S,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class L_{constructor(t={}){const{canvas:e=vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let S=!1,L=0,C=0,R=null,I=-1,Q=null;const _=new _e,M=new _e;let F=null;const k=new Zt(0);let B=0,X=e.width,z=e.height,J=1,G=null,_t=null;const mt=new _e(0,0,X,z),gt=new _e(0,0,X,z);let Wt=!1;const Bt=new qc;let j=!1,st=!1;const Mt=new xe,pt=new xe,Nt=new P,At=new _e,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function $(){return R===null?J:1}let T=n;function nt(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),T===null){const U="webgl2";if(T=nt(U,w),T===null)throw nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,it,dt,ut,ft,A,y,O,q,Y,K,Dt,vt,Rt,te,lt,Ct,Gt,jt,Pt,ee,Xt,ye,D;function Et(){et=new k0(T),et.init(),Xt=new M_(T,et),it=new P0(T,et,t,Xt),dt=new v_(T),it.reverseDepthBuffer&&dt.buffers.depth.setReversed(!0),ut=new B0(T),ft=new i_,A=new y_(T,et,dt,ft,it,Xt,ut),y=new D0(x),O=new N0(x),q=new Xf(T),ye=new R0(T,q),Y=new O0(T,q,ut,ye),K=new H0(T,Y,q,ut),jt=new z0(T,it,A),lt=new L0(ft),Dt=new n_(x,y,O,et,it,ye,lt),vt=new C_(x,ft),Rt=new r_,te=new h_(et),Gt=new A0(x,y,O,dt,K,d,c),Ct=new g_(x,K,it),D=new P_(T,ut,it,dt),Pt=new C0(T,et,ut),ee=new F0(T,et,ut),ut.programs=Dt.programs,x.capabilities=it,x.extensions=et,x.properties=ft,x.renderLists=Rt,x.shadowMap=Ct,x.state=dt,x.info=ut}Et();const W=new A_(x,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(X,z,!1))},this.getSize=function(w){return w.set(X,z)},this.setSize=function(w,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,z=U,e.width=Math.floor(w*J),e.height=Math.floor(U*J),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*J,z*J).floor()},this.setDrawingBufferSize=function(w,U,H){X=w,z=U,J=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,U,H,V){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,U,H,V),dt.viewport(_.copy(mt).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,U,H,V){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,U,H,V),dt.scissor(M.copy(gt).multiplyScalar(J).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(w){dt.setScissorTest(Wt=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let N=!1;if(R!==null){const ht=R.texture.format;N=ht===jc||ht===Gc||ht===Vc}if(N){const ht=R.texture.type,bt=ht===ci||ht===qi||ht===fr||ht===Us||ht===zc||ht===Hc,Lt=Gt.getClearColor(),It=Gt.getClearAlpha(),Ht=Lt.r,Vt=Lt.g,kt=Lt.b;bt?(p[0]=Ht,p[1]=Vt,p[2]=kt,p[3]=It,T.clearBufferuiv(T.COLOR,0,p)):(g[0]=Ht,g[1]=Vt,g[2]=kt,g[3]=It,T.clearBufferiv(T.COLOR,0,g))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Rt.dispose(),te.dispose(),ft.dispose(),y.dispose(),O.dispose(),K.dispose(),ye.dispose(),D.dispose(),Dt.dispose(),W.dispose(),W.removeEventListener("sessionstart",pl),W.removeEventListener("sessionend",ml),Ai.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ut.autoReset,U=Ct.enabled,H=Ct.autoUpdate,V=Ct.needsUpdate,N=Ct.type;Et(),ut.autoReset=w,Ct.enabled=U,Ct.autoUpdate=H,Ct.needsUpdate=V,Ct.type=N}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const U=w.target;U.removeEventListener("dispose",ne),Pe(U)}function Pe(w){an(w),ft.remove(w)}function an(w){const U=ft.get(w).programs;U!==void 0&&(U.forEach(function(H){Dt.releaseProgram(H)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,N,ht){U===null&&(U=Z);const bt=N.isMesh&&N.matrixWorld.determinant()<0,Lt=Ed(w,U,H,V,N);dt.setMaterial(V,bt);let It=H.index,Ht=1;if(V.wireframe===!0){if(It=Y.getWireframeAttribute(H),It===void 0)return;Ht=2}const Vt=H.drawRange,kt=H.attributes.position;let ue=Vt.start*Ht,Se=(Vt.start+Vt.count)*Ht;ht!==null&&(ue=Math.max(ue,ht.start*Ht),Se=Math.min(Se,(ht.start+ht.count)*Ht)),It!==null?(ue=Math.max(ue,0),Se=Math.min(Se,It.count)):kt!=null&&(ue=Math.max(ue,0),Se=Math.min(Se,kt.count));const Ae=Se-ue;if(Ae<0||Ae===1/0)return;ye.setup(N,V,Lt,H,It);let fn,oe=Pt;if(It!==null&&(fn=q.get(It),oe=ee,oe.setIndex(fn)),N.isMesh)V.wireframe===!0?(dt.setLineWidth(V.wireframeLinewidth*$()),oe.setMode(T.LINES)):oe.setMode(T.TRIANGLES);else if(N.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),dt.setLineWidth(Ot*$()),N.isLineSegments?oe.setMode(T.LINES):N.isLineLoop?oe.setMode(T.LINE_LOOP):oe.setMode(T.LINE_STRIP)}else N.isPoints?oe.setMode(T.POINTS):N.isSprite&&oe.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ot=N._multiDrawStarts,je=N._multiDrawCounts,ce=N._multiDrawCount,In=It?q.get(It).bytesPerElement:1,ns=ft.get(V).currentProgram.getUniforms();for(let pn=0;pn<ce;pn++)ns.setValue(T,"_gl_DrawID",pn),oe.render(Ot[pn]/In,je[pn])}else if(N.isInstancedMesh)oe.renderInstances(ue,Ae,N.count);else if(H.isInstancedBufferGeometry){const Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,je=Math.min(H.instanceCount,Ot);oe.renderInstances(ue,Ae,je)}else oe.render(ue,Ae)};function ae(w,U,H){w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Tr(w,U,H),w.side=Si,w.needsUpdate=!0,Tr(w,U,H),w.side=ln):Tr(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),m=te.get(H),m.init(U),E.push(m),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ht=N.material;if(ht)if(Array.isArray(ht))for(let bt=0;bt<ht.length;bt++){const Lt=ht[bt];ae(Lt,H,N),V.add(Lt)}else ae(ht,H,N),V.add(ht)}),E.pop(),m=null,V},this.compileAsync=function(w,U,H=null){const V=this.compile(w,U,H);return new Promise(N=>{function ht(){if(V.forEach(function(bt){ft.get(bt).currentProgram.isReady()&&V.delete(bt)}),V.size===0){N(w);return}setTimeout(ht,10)}et.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let on=null;function Yn(w){on&&on(w)}function pl(){Ai.stop()}function ml(){Ai.start()}const Ai=new wh;Ai.setAnimationLoop(Yn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(w){on=w,W.setAnimationLoop(w),w===null?Ai.stop():Ai.start()},W.addEventListener("sessionstart",pl),W.addEventListener("sessionend",ml),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),m=te.get(w,E.length),m.init(U),E.push(m),pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(pt),st=this.localClippingEnabled,j=lt.init(this.clippingPlanes,st),v=Rt.get(w,f.length),v.init(),f.push(v),W.enabled===!0&&W.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Ia(ht,U,-1/0,x.sortObjects)}Ia(w,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,_t),wt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,wt&&Gt.addToRenderList(v,w),this.info.render.frame++,j===!0&&lt.beginShadows();const H=m.state.shadowsArray;Ct.render(H,w,U),j===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,N=v.transmissive;if(m.setupLights(),U.isArrayCamera){const ht=U.cameras;if(N.length>0)for(let bt=0,Lt=ht.length;bt<Lt;bt++){const It=ht[bt];_l(V,N,w,It)}wt&&Gt.render(w);for(let bt=0,Lt=ht.length;bt<Lt;bt++){const It=ht[bt];gl(v,w,It,It.viewport)}}else N.length>0&&_l(V,N,w,U),wt&&Gt.render(w),gl(v,w,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),ye.resetDefaultState(),I=-1,Q=null,E.pop(),E.length>0?(m=E[E.length-1],j===!0&&lt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ia(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Bt.intersectsSprite(w)){V&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pt);const bt=K.update(w),Lt=w.material;Lt.visible&&v.push(w,bt,Lt,H,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Bt.intersectsObject(w))){const bt=K.update(w),Lt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),At.copy(bt.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const It=bt.groups;for(let Ht=0,Vt=It.length;Ht<Vt;Ht++){const kt=It[Ht],ue=Lt[kt.materialIndex];ue&&ue.visible&&v.push(w,bt,ue,H,At.z,kt)}}else Lt.visible&&v.push(w,bt,Lt,H,At.z,null)}}const ht=w.children;for(let bt=0,Lt=ht.length;bt<Lt;bt++)Ia(ht[bt],U,H,V)}function gl(w,U,H,V){const N=w.opaque,ht=w.transmissive,bt=w.transparent;m.setupLightsView(H),j===!0&&lt.setGlobalState(x.clippingPlanes,H),V&&dt.viewport(_.copy(V)),N.length>0&&Er(N,U,H),ht.length>0&&Er(ht,U,H),bt.length>0&&Er(bt,U,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function _l(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Yi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?yr:ci,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ht=m.state.transmissionRenderTarget[V.id],bt=V.viewport||_;ht.setSize(bt.z,bt.w);const Lt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(k),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),wt&&Gt.render(H);const It=x.toneMapping;x.toneMapping=yi;const Ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),j===!0&&lt.setGlobalState(x.clippingPlanes,V),Er(w,H,V),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),et.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let kt=0,ue=U.length;kt<ue;kt++){const Se=U[kt],Ae=Se.object,fn=Se.geometry,oe=Se.material,Ot=Se.group;if(oe.side===ln&&Ae.layers.test(V.layers)){const je=oe.side;oe.side=rn,oe.needsUpdate=!0,vl(Ae,H,V,fn,oe,Ot),oe.side=je,oe.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}x.setRenderTarget(Lt),x.setClearColor(k,B),Ht!==void 0&&(V.viewport=Ht),x.toneMapping=It}function Er(w,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ht=w.length;N<ht;N++){const bt=w[N],Lt=bt.object,It=bt.geometry,Ht=V===null?bt.material:V,Vt=bt.group;Lt.layers.test(H.layers)&&vl(Lt,U,H,It,Ht,Vt)}}function vl(w,U,H,V,N,ht){w.onBeforeRender(x,U,H,V,N,ht),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,U,H,V,w,ht),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,w,ht),N.side=Si,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,w,ht),N.side=ln):x.renderBufferDirect(H,U,V,N,w,ht),w.onAfterRender(x,U,H,V,N,ht)}function Tr(w,U,H){U.isScene!==!0&&(U=Z);const V=ft.get(w),N=m.state.lights,ht=m.state.shadowsArray,bt=N.state.version,Lt=Dt.getParameters(w,N.state,ht,U,H),It=Dt.getProgramCacheKey(Lt);let Ht=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",ne),Ht=new Map,V.programs=Ht);let Vt=Ht.get(It);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===bt)return yl(w,Lt),Vt}else Lt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Lt,x),Vt=Dt.acquireProgram(Lt,It),Ht.set(It,Vt),V.uniforms=Lt.uniforms;const kt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=lt.uniform),yl(w,Lt),V.needsLights=Ad(w),V.lightsStateVersion=bt,V.needsLights&&(kt.ambientLightColor.value=N.state.ambient,kt.lightProbe.value=N.state.probe,kt.directionalLights.value=N.state.directional,kt.directionalLightShadows.value=N.state.directionalShadow,kt.spotLights.value=N.state.spot,kt.spotLightShadows.value=N.state.spotShadow,kt.rectAreaLights.value=N.state.rectArea,kt.ltc_1.value=N.state.rectAreaLTC1,kt.ltc_2.value=N.state.rectAreaLTC2,kt.pointLights.value=N.state.point,kt.pointLightShadows.value=N.state.pointShadow,kt.hemisphereLights.value=N.state.hemi,kt.directionalShadowMap.value=N.state.directionalShadowMap,kt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,kt.spotShadowMap.value=N.state.spotShadowMap,kt.spotLightMatrix.value=N.state.spotLightMatrix,kt.spotLightMap.value=N.state.spotLightMap,kt.pointShadowMap.value=N.state.pointShadowMap,kt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function xl(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=da.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function yl(w,U){const H=ft.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ed(w,U,H,V,N){U.isScene!==!0&&(U=Z),A.resetTextureUnits();const ht=U.fog,bt=V.isMeshStandardMaterial?U.environment:null,Lt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ei,It=(V.isMeshStandardMaterial?O:y).get(V.envMap||bt),Ht=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!H.morphAttributes.position,ue=!!H.morphAttributes.normal,Se=!!H.morphAttributes.color;let Ae=yi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const fn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=fn!==void 0?fn.length:0,Ot=ft.get(V),je=m.state.lights;if(j===!0&&(st===!0||w!==Q)){const wn=w===Q&&V.id===I;lt.setState(V,w,wn)}let ce=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==je.state.version||Ot.outputColorSpace!==Lt||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==It||V.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==Ht||Ot.vertexTangents!==Vt||Ot.morphTargets!==kt||Ot.morphNormals!==ue||Ot.morphColors!==Se||Ot.toneMapping!==Ae||Ot.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,Ot.__version=V.version);let In=Ot.currentProgram;ce===!0&&(In=Tr(V,U,N));let ns=!1,pn=!1,Ua=!1;const Re=In.getUniforms(),hi=Ot.uniforms;if(dt.useProgram(In.program)&&(ns=!0,pn=!0,Ua=!0),V.id!==I&&(I=V.id,pn=!0),ns||Q!==w){it.reverseDepthBuffer?(Mt.copy(w.projectionMatrix),yf(Mt),Mf(Mt),Re.setValue(T,"projectionMatrix",Mt)):Re.setValue(T,"projectionMatrix",w.projectionMatrix),Re.setValue(T,"viewMatrix",w.matrixWorldInverse);const wn=Re.map.cameraPosition;wn!==void 0&&wn.setValue(T,Nt.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&Re.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,pn=!0,Ua=!0)}if(N.isSkinnedMesh){Re.setOptional(T,N,"bindMatrix"),Re.setOptional(T,N,"bindMatrixInverse");const wn=N.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Re.setValue(T,"boneTexture",wn.boneTexture,A))}N.isBatchedMesh&&(Re.setOptional(T,N,"batchingTexture"),Re.setValue(T,"batchingTexture",N._matricesTexture,A),Re.setOptional(T,N,"batchingIdTexture"),Re.setValue(T,"batchingIdTexture",N._indirectTexture,A),Re.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&Re.setValue(T,"batchingColorTexture",N._colorsTexture,A));const Na=H.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0)&&jt.update(N,H,In),(pn||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,Re.setValue(T,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hi.envMap.value=It,hi.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(hi.envMapIntensity.value=U.environmentIntensity),pn&&(Re.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Td(hi,Ua),ht&&V.fog===!0&&vt.refreshFogUniforms(hi,ht),vt.refreshMaterialUniforms(hi,V,J,z,m.state.transmissionRenderTarget[w.id]),da.upload(T,xl(Ot),hi,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(da.upload(T,xl(Ot),hi,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(T,"center",N.center),Re.setValue(T,"modelViewMatrix",N.modelViewMatrix),Re.setValue(T,"normalMatrix",N.normalMatrix),Re.setValue(T,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const wn=V.uniformsGroups;for(let ka=0,Rd=wn.length;ka<Rd;ka++){const Ml=wn[ka];D.update(Ml,In),D.bind(Ml,In)}}return In}function Td(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ad(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,H){ft.get(w.texture).__webglTexture=U,ft.get(w.depthTexture).__webglTexture=H;const V=ft.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=ft.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){R=w,L=U,C=H;let V=!0,N=null,ht=!1,bt=!1;if(w){const It=ft.get(w);if(It.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(It.__hasExternalTextures)A.rebindTextures(w,ft.get(w.texture).__webglTexture,ft.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const kt=w.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&ft.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Vt=ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][H]:N=Vt[U],ht=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=ft.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[H]:N=Vt,_.copy(w.viewport),M.copy(w.scissor),F=w.scissorTest}else _.copy(mt).multiplyScalar(J).floor(),M.copy(gt).multiplyScalar(J).floor(),F=Wt;if(dt.bindFramebuffer(T.FRAMEBUFFER,N)&&V&&dt.drawBuffers(w,N),dt.viewport(_),dt.scissor(M),dt.setScissorTest(F),ht){const It=ft.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,H)}else if(bt){const It=ft.get(w.texture),Ht=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,It.__webglTexture,H||0,Ht)}I=-1},this.readRenderTargetPixels=function(w,U,H,V,N,ht,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){dt.bindFramebuffer(T.FRAMEBUFFER,Lt);try{const It=w.texture,Ht=It.format,Vt=It.type;if(!it.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N&&T.readPixels(U,H,V,N,Xt.convert(Ht),Xt.convert(Vt),ht)}finally{const It=R!==null?ft.get(R).__webglFramebuffer:null;dt.bindFramebuffer(T.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,V,N,ht,bt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){const It=w.texture,Ht=It.format,Vt=It.type;if(!it.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N){dt.bindFramebuffer(T.FRAMEBUFFER,Lt);const kt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,kt),T.bufferData(T.PIXEL_PACK_BUFFER,ht.byteLength,T.STREAM_READ),T.readPixels(U,H,V,N,Xt.convert(Ht),Xt.convert(Vt),0);const ue=R!==null?ft.get(R).__webglFramebuffer:null;dt.bindFramebuffer(T.FRAMEBUFFER,ue);const Se=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await xf(T,Se,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,kt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ht),T.deleteBuffer(kt),T.deleteSync(Se),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(w.image.width*V),ht=Math.floor(w.image.height*V),bt=U!==null?U.x:0,Lt=U!==null?U.y:0;A.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,H,0,0,bt,Lt,N,ht),dt.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,V=null,N=0){w.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let ht,bt,Lt,It,Ht,Vt;H!==null?(ht=H.max.x-H.min.x,bt=H.max.y-H.min.y,Lt=H.min.x,It=H.min.y):(ht=w.image.width,bt=w.image.height,Lt=0,It=0),V!==null?(Ht=V.x,Vt=V.y):(Ht=0,Vt=0);const kt=Xt.convert(U.format),ue=Xt.convert(U.type);A.setTexture2D(U,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const Se=T.getParameter(T.UNPACK_ROW_LENGTH),Ae=T.getParameter(T.UNPACK_IMAGE_HEIGHT),fn=T.getParameter(T.UNPACK_SKIP_PIXELS),oe=T.getParameter(T.UNPACK_SKIP_ROWS),Ot=T.getParameter(T.UNPACK_SKIP_IMAGES),je=w.isCompressedTexture?w.mipmaps[N]:w.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,je.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,je.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,It),w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Ht,Vt,ht,bt,kt,ue,je.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Ht,Vt,je.width,je.height,kt,je.data):T.texSubImage2D(T.TEXTURE_2D,N,Ht,Vt,ht,bt,kt,ue,je),T.pixelStorei(T.UNPACK_ROW_LENGTH,Se),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ae),T.pixelStorei(T.UNPACK_SKIP_PIXELS,fn),T.pixelStorei(T.UNPACK_SKIP_ROWS,oe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ot),N===0&&U.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,V=null,N=0){w.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let ht,bt,Lt,It,Ht,Vt,kt,ue,Se;const Ae=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(ht=H.max.x-H.min.x,bt=H.max.y-H.min.y,Lt=H.max.z-H.min.z,It=H.min.x,Ht=H.min.y,Vt=H.min.z):(ht=Ae.width,bt=Ae.height,Lt=Ae.depth,It=0,Ht=0,Vt=0),V!==null?(kt=V.x,ue=V.y,Se=V.z):(kt=0,ue=0,Se=0);const fn=Xt.convert(U.format),oe=Xt.convert(U.type);let Ot;if(U.isData3DTexture)A.setTexture3D(U,0),Ot=T.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Ot=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const je=T.getParameter(T.UNPACK_ROW_LENGTH),ce=T.getParameter(T.UNPACK_IMAGE_HEIGHT),In=T.getParameter(T.UNPACK_SKIP_PIXELS),ns=T.getParameter(T.UNPACK_SKIP_ROWS),pn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ae.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ae.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,It),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Vt),w.isDataTexture||w.isData3DTexture?T.texSubImage3D(Ot,N,kt,ue,Se,ht,bt,Lt,fn,oe,Ae.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Ot,N,kt,ue,Se,ht,bt,Lt,fn,Ae.data):T.texSubImage3D(Ot,N,kt,ue,Se,ht,bt,Lt,fn,oe,Ae),T.pixelStorei(T.UNPACK_ROW_LENGTH,je),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ce),T.pixelStorei(T.UNPACK_SKIP_PIXELS,In),T.pixelStorei(T.UNPACK_SKIP_ROWS,ns),T.pixelStorei(T.UNPACK_SKIP_IMAGES,pn),N===0&&U.generateMipmaps&&T.generateMipmap(Ot),dt.unbindTexture()},this.initRenderTarget=function(w){ft.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){L=0,C=0,R=null,dt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wc?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Ra?"display-p3":"srgb"}}class Kc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class D_ extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class I_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new P;class ba{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ba(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sc extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _s;const Ks=new P,vs=new P,xs=new P,ys=new ot,Js=new ot,Lh=new xe,qr=new P,Zs=new P,Yr=new P,gu=new ot,go=new ot,_u=new ot;class vu extends Oe{constructor(t=new Sc){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new I_(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new ba(n,3,0,!1)),_s.setAttribute("uv",new ba(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Kr(qr.set(-.5,-.5,0),xs,a,vs,s,r),Kr(Zs.set(.5,-.5,0),xs,a,vs,s,r),Kr(Yr.set(.5,.5,0),xs,a,vs,s,r),gu.set(0,0),go.set(1,0),_u.set(1,1);let o=t.ray.intersectTriangle(qr,Zs,Yr,!1,Ks);if(o===null&&(Kr(Zs.set(-.5,.5,0),xs,a,vs,s,r),go.set(0,1),o=t.ray.intersectTriangle(qr,Yr,Zs,!1,Ks),o===null))return;const c=t.ray.origin.distanceTo(Ks);c<t.near||c>t.far||e.push({distance:c,point:Ks.clone(),uv:Pn.getInterpolation(Ks,qr,Zs,Yr,gu,go,_u,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kr(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*ys.x-s*ys.y,Js.y=s*ys.x+r*ys.y):Js.copy(ys),i.copy(t),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(Lh)}class Dh extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wa=new P,Ea=new P,xu=new xe,Qs=new Xc,Jr=new Ca,_o=new P,yu=new P;class U_ extends Oe{constructor(t=new Ke,e=new Dh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wa.fromBufferAttribute(e,s-1),Ea.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wa.distanceTo(Ea);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;xu.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(xu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=u.getX(v),E=u.getX(v+1),x=Zr(this,t,Qs,c,f,E);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=Zr(this,t,Qs,c,v,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=Zr(this,t,Qs,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Zr(this,t,Qs,c,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(wa.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),e.distanceSqToSegment(wa,Ea,_o,yu)>n)return;_o.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_o);if(!(c<t.near||c>t.far))return{distance:c,point:yu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class fa extends Ye{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ot:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new xe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(We(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jc extends qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class N_ extends Jc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Qr=new P,vo=new Zc,xo=new Zc,yo=new Zc;class k_ extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),vo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),xo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),yo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),xo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),yo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(vo.calc(c),xo.calc(c),yo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function O_(i,t){const e=1-i;return e*e*t}function F_(i,t){return 2*(1-i)*i*t}function B_(i,t){return i*i*t}function rr(i,t,e,n){return O_(i,t)+F_(i,e)+B_(i,n)}function z_(i,t){const e=1-i;return e*e*e*t}function H_(i,t){const e=1-i;return 3*e*e*i*t}function V_(i,t){return 3*(1-i)*i*i*t}function G_(i,t){return i*i*i*t}function ar(i,t,e,n,s){return z_(i,t)+H_(i,e)+V_(i,n)+G_(i,s)}class Ih extends qn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ar(t,s.x,r.x,a.x,o.x),ar(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class j_ extends qn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ar(t,s.x,r.x,a.x,o.x),ar(t,s.y,r.y,a.y,o.y),ar(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uh extends qn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W_ extends qn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends qn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X_ extends qn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y),rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Mu(o,c.x,l.x,u.x,h.x),Mu(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var bc=Object.freeze({__proto__:null,ArcCurve:N_,CatmullRomCurve3:k_,CubicBezierCurve:Ih,CubicBezierCurve3:j_,EllipseCurve:Jc,LineCurve:Uh,LineCurve3:W_,QuadraticBezierCurve:Nh,QuadraticBezierCurve3:X_,SplineCurve:kh});class $_ extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bc[s.type]().fromJSON(s))}return this}}class wc extends $_{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Nh(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Ih(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Jc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mr extends Ke{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new P,d=new ot,p=new P,g=new P,v=new P;let m=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let E=0;E<=e;E++){const x=n+E*u*s,S=Math.sin(x),L=Math.cos(x);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*S,h.y=t[C].y,h.z=t[C].x*L,a.push(h.x,h.y,h.z),d.x=E/e,d.y=C/(t.length-1),o.push(d.x,d.y);const R=c[3*C+0]*S,I=c[3*C+1],Q=c[3*C+0]*L;l.push(R,I,Q)}}for(let E=0;E<e;E++)for(let x=0;x<t.length-1;x++){const S=x+E*t.length,L=S,C=S+t.length,R=S+t.length+1,I=S+1;r.push(L,C,I),r.push(R,I,C)}this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.points,t.segments,t.phiStart,t.phiLength)}}class Qc extends mr{constructor(t=1,e=1,n=4,s=8){const r=new wc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Qc(t.radius,t.length,t.capSegments,t.radialSegments)}}class $i extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,u=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rn extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;E(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2));function E(){const S=new P,L=new P;let C=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const Q=[],_=I/r,M=_*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,B=k*c+o,X=Math.sin(B),z=Math.cos(B);L.x=M*X,L.y=-_*n+m,L.z=M*z,h.push(L.x,L.y,L.z),S.set(X,R,z).normalize(),d.push(S.x,S.y,S.z),p.push(k,1-_),Q.push(g++)}v.push(Q)}for(let I=0;I<s;I++)for(let Q=0;Q<r;Q++){const _=v[Q][I],M=v[Q+1][I],F=v[Q+1][I+1],k=v[Q][I+1];t>0&&(u.push(_,M,k),C+=3),e>0&&(u.push(M,F,k),C+=3)}l.addGroup(f,C,0),f+=C}function x(S){const L=g,C=new ot,R=new P;let I=0;const Q=S===!0?t:e,_=S===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const M=g;for(let F=0;F<=s;F++){const B=F/s*c+o,X=Math.cos(B),z=Math.sin(B);R.x=Q*z,R.y=m*_,R.z=Q*X,h.push(R.x,R.y,R.z),d.push(0,_,0),C.x=X*.5+.5,C.y=z*.5*_+.5,p.push(C.x,C.y),g++}for(let F=0;F<s;F++){const k=L+F,B=M+F;S===!0?u.push(B,B+1,k):u.push(B+1,B,k),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Os extends Rn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Os(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oh extends wc{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wc().fromJSON(s))}return this}}const q_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Fh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,p;if(n&&(r=Q_(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return gr(r,a,e,o,c,p,0),a}};function Fh(i,t,e,n,s){let r,a;if(s===uv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Su(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Su(r,i[r],i[r+1],a);return a&&La(a,a.next)&&(vr(a),a=a.next),a}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(La(e,e.next)||Te(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&sv(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?K_(i,n,s,r):Y_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=J_(Ki(i),t,e),gr(i,t,e,n,s,r,2)):a===2&&Z_(i,t,e,n,s,r):gr(Ki(i),t,e,n,s,r,1);break}}}function Y_(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&ws(s,o,r,c,a,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function K_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=Ec(p,g,t,e,n),E=Ec(v,m,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=f&&S&&S.z<=E;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ws(o,u,c,h,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ws(o,u,c,h,l,d,S.x,S.y)&&Te(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ws(o,u,c,h,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=E;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ws(o,u,c,h,l,d,S.x,S.y)&&Te(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function J_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!La(s,r)&&Bh(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function Z_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ov(a,o)){let c=zh(a,o);a=Ki(a,a.next),c=Ki(c,c.next),gr(a,t,e,n,s,r,0),gr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Q_(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Fh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(av(l));for(s.sort(tv),r=0;r<s.length;r++)e=ev(s[r],e);return e}function tv(i,t){return i.x-t.x}function ev(i,t){const e=nv(i,t);if(!e)return t;const n=zh(e,i);return Ki(n,n.next),Ki(e,e.next)}function nv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ws(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),_r(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&iv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function iv(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function sv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rv(s)}function rv(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function av(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ov(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cv(i,t)&&(_r(i,t)&&_r(t,i)&&lv(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||La(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function La(i,t){return i.x===t.x&&i.y===t.y}function Bh(i,t,e,n){const s=ea(Te(i,t,e)),r=ea(Te(i,t,n)),a=ea(Te(e,n,i)),o=ea(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&ta(i,e,t)||r===0&&ta(i,n,t)||a===0&&ta(e,i,n)||o===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function cv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function lv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zh(i,t){const e=new Tc(i.i,i.x,i.y),n=new Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Su(i,t,e,n){const s=new Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class or{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return or.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];bu(t),wu(n,t);let a=t.length;e.forEach(bu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,wu(n,e[c]);const o=q_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function bu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class tl extends Ke{constructor(t=new Oh([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:hv;let x,S=!1,L,C,R,I;f&&(x=f.getSpacedPoints(u),S=!0,d=!1,L=f.computeFrenetFrames(u,!1),C=new P,R=new P,I=new P),d||(m=0,p=0,g=0,v=0);const Q=o.extractPoints(l);let _=Q.shape;const M=Q.holes;if(!or.isClockWise(_)){_=_.reverse();for(let $=0,T=M.length;$<T;$++){const nt=M[$];or.isClockWise(nt)&&(M[$]=nt.reverse())}}const k=or.triangulateShape(_,M),B=_;for(let $=0,T=M.length;$<T;$++){const nt=M[$];_=_.concat(nt)}function X($,T,nt){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(T,nt)}const z=_.length,J=k.length;function G($,T,nt){let et,it,dt;const ut=$.x-T.x,ft=$.y-T.y,A=nt.x-$.x,y=nt.y-$.y,O=ut*ut+ft*ft,q=ut*y-ft*A;if(Math.abs(q)>Number.EPSILON){const Y=Math.sqrt(O),K=Math.sqrt(A*A+y*y),Dt=T.x-ft/Y,vt=T.y+ut/Y,Rt=nt.x-y/K,te=nt.y+A/K,lt=((Rt-Dt)*y-(te-vt)*A)/(ut*y-ft*A);et=Dt+ut*lt-$.x,it=vt+ft*lt-$.y;const Ct=et*et+it*it;if(Ct<=2)return new ot(et,it);dt=Math.sqrt(Ct/2)}else{let Y=!1;ut>Number.EPSILON?A>Number.EPSILON&&(Y=!0):ut<-Number.EPSILON?A<-Number.EPSILON&&(Y=!0):Math.sign(ft)===Math.sign(y)&&(Y=!0),Y?(et=-ft,it=ut,dt=Math.sqrt(O)):(et=ut,it=ft,dt=Math.sqrt(O/2))}return new ot(et/dt,it/dt)}const _t=[];for(let $=0,T=B.length,nt=T-1,et=$+1;$<T;$++,nt++,et++)nt===T&&(nt=0),et===T&&(et=0),_t[$]=G(B[$],B[nt],B[et]);const mt=[];let gt,Wt=_t.concat();for(let $=0,T=M.length;$<T;$++){const nt=M[$];gt=[];for(let et=0,it=nt.length,dt=it-1,ut=et+1;et<it;et++,dt++,ut++)dt===it&&(dt=0),ut===it&&(ut=0),gt[et]=G(nt[et],nt[dt],nt[ut]);mt.push(gt),Wt=Wt.concat(gt)}for(let $=0;$<m;$++){const T=$/m,nt=p*Math.cos(T*Math.PI/2),et=g*Math.sin(T*Math.PI/2)+v;for(let it=0,dt=B.length;it<dt;it++){const ut=X(B[it],_t[it],et);pt(ut.x,ut.y,-nt)}for(let it=0,dt=M.length;it<dt;it++){const ut=M[it];gt=mt[it];for(let ft=0,A=ut.length;ft<A;ft++){const y=X(ut[ft],gt[ft],et);pt(y.x,y.y,-nt)}}}const Bt=g+v;for(let $=0;$<z;$++){const T=d?X(_[$],Wt[$],Bt):_[$];S?(R.copy(L.normals[0]).multiplyScalar(T.x),C.copy(L.binormals[0]).multiplyScalar(T.y),I.copy(x[0]).add(R).add(C),pt(I.x,I.y,I.z)):pt(T.x,T.y,0)}for(let $=1;$<=u;$++)for(let T=0;T<z;T++){const nt=d?X(_[T],Wt[T],Bt):_[T];S?(R.copy(L.normals[$]).multiplyScalar(nt.x),C.copy(L.binormals[$]).multiplyScalar(nt.y),I.copy(x[$]).add(R).add(C),pt(I.x,I.y,I.z)):pt(nt.x,nt.y,h/u*$)}for(let $=m-1;$>=0;$--){const T=$/m,nt=p*Math.cos(T*Math.PI/2),et=g*Math.sin(T*Math.PI/2)+v;for(let it=0,dt=B.length;it<dt;it++){const ut=X(B[it],_t[it],et);pt(ut.x,ut.y,h+nt)}for(let it=0,dt=M.length;it<dt;it++){const ut=M[it];gt=mt[it];for(let ft=0,A=ut.length;ft<A;ft++){const y=X(ut[ft],gt[ft],et);S?pt(y.x,y.y+x[u-1].y,x[u-1].x+nt):pt(y.x,y.y,h+nt)}}}j(),st();function j(){const $=s.length/3;if(d){let T=0,nt=z*T;for(let et=0;et<J;et++){const it=k[et];Nt(it[2]+nt,it[1]+nt,it[0]+nt)}T=u+m*2,nt=z*T;for(let et=0;et<J;et++){const it=k[et];Nt(it[0]+nt,it[1]+nt,it[2]+nt)}}else{for(let T=0;T<J;T++){const nt=k[T];Nt(nt[2],nt[1],nt[0])}for(let T=0;T<J;T++){const nt=k[T];Nt(nt[0]+z*u,nt[1]+z*u,nt[2]+z*u)}}n.addGroup($,s.length/3-$,0)}function st(){const $=s.length/3;let T=0;Mt(B,T),T+=B.length;for(let nt=0,et=M.length;nt<et;nt++){const it=M[nt];Mt(it,T),T+=it.length}n.addGroup($,s.length/3-$,1)}function Mt($,T){let nt=$.length;for(;--nt>=0;){const et=nt;let it=nt-1;it<0&&(it=$.length-1);for(let dt=0,ut=u+m*2;dt<ut;dt++){const ft=z*dt,A=z*(dt+1),y=T+et+ft,O=T+it+ft,q=T+it+A,Y=T+et+A;At(y,O,q,Y)}}}function pt($,T,nt){c.push($),c.push(T),c.push(nt)}function Nt($,T,nt){Z($),Z(T),Z(nt);const et=s.length/3,it=E.generateTopUV(n,s,et-3,et-2,et-1);wt(it[0]),wt(it[1]),wt(it[2])}function At($,T,nt,et){Z($),Z(T),Z(et),Z(T),Z(nt),Z(et);const it=s.length/3,dt=E.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);wt(dt[0]),wt(dt[1]),wt(dt[3]),wt(dt[1]),wt(dt[2]),wt(dt[3])}function Z($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function wt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bc[s.type]().fromJSON(s)),new tl(n,t.options)}}const hv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ot(r,a),new ot(o,c),new ot(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-h),new ot(d,1-g),new ot(v,1-f)]:[new ot(o,1-c),new ot(u,1-h),new ot(p,1-g),new ot(m,1-f)]}};function dv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ri extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,d=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const E=[],x=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&c===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(s+C*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+C*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(C+S,1-x),E.push(l++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const x=u[f][E+1],S=u[f][E],L=u[f+1][E],C=u[f+1][E+1];(f!==0||a>0)&&p.push(x,S,C),(f!==n-1||c<Math.PI)&&p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tn extends Ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(v,m,E),a.push(m,f,E)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class el extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Eu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fv{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const pv=new fv;class nl{constructor(t){this.manager=t!==void 0?t:pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nl.DEFAULT_MATERIAL_NAME="__DEFAULT";class mv extends nl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Eu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=pr("img");function c(){u(),Eu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Tu extends nl{constructor(t){super(t)}load(t,e,n,s){const r=new Ye,a=new mv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class il extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gv extends il{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new xe,Au=new P,Ru=new P;class Hh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cu=new xe,tr=new P,So=new P;class _v extends Hh{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),So.copy(n.position),So.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(So),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu)}}class Vh extends il{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _v}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vv extends Hh{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lu(){return performance.now()}const Du=new xe;class yv{constructor(t,e,n=0,s=1/0){this.ray=new Xc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(Iu),n}}function Iu(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const Mv=1842212,be=(i,t={})=>new el({color:i,roughness:.55,metalness:0,...t});function _n(i,t,e=1,n=1,s=1){const r=new yt(new ri(i,20,14),t);return r.scale.set(e,n,s),r.castShadow=!0,r}class Sv{constructor(){this.root=new Qt,this.root.name="cat",this.mBody=be(Mv,{roughness:.45}),this.mDark=be(3421247),this.parts=[],this.t=0,this.action=null,this.mode="idle",this.blinkT=2,this.sq=0,this.sqV=0,this.happyEyes=0,this.build()}build(){const t=this.root;this.body=new Qt,t.add(this.body);const e=_n(.42,this.mBody,1,1.25,.9);e.position.y=1,this.body.add(e);const n=new ri(.43,24,16,Math.PI/2-Math.PI*.32,Math.PI*.64,Math.PI*.38,Math.PI*.5),s=new yt(n,be(16448250,{side:ln}));s.scale.set(1.02,1.27,.93),s.position.y=1,this.body.add(s);const r=_n(.1,be(15921906),1,1.3,.5);r.position.set(0,1.36,.33),this.body.add(r),this.head=new Qt,this.head.position.y=1.72,this.body.add(this.head);const a=_n(.42,this.mBody,1.12,.96,1);this.head.add(a);const o=_n(.17,this.mDark,1.35,.85,.8);o.position.set(0,-.12,.31),this.head.add(o);const c=_n(.045,be(16748456),1.3,.8,1);c.position.set(0,-.06,.44),this.head.add(c);const l=new Sn({color:657934});for(const x of[-1,1]){const S=new yt(new tn(.035,.008,6,12,Math.PI),l);S.position.set(x*.034,-.13,.43),S.rotation.z=Math.PI,this.head.add(S)}this.eyes=[];for(const x of[-1,1]){const S=new Qt;S.position.set(x*.17,.03,.33),S.rotation.y=x*.35;const L=_n(.1,be(13164618,{emissive:3820032,roughness:.2}),1,1.1,.55),C=_n(.05,new Sn({color:328965}),.6,1.5,.5);C.position.z=.04;const R=_n(.022,new Sn({color:16777215}));R.position.set(.03,.045,.07),S.add(L,C,R),this.head.add(S),this.eyes.push(S)}this.ears=[];for(const x of[-1,1]){const S=new Qt;S.position.set(x*.26,.3,0),S.rotation.z=-x*.35;const L=new yt(new Os(.15,.32,16),this.mBody);L.position.y=.12,L.scale.z=.6,L.castShadow=!0;const C=new yt(new Os(.09,.22,12),be(16752565));C.position.set(0,.1,.05),C.scale.z=.4,S.add(L,C),this.head.add(S),this.ears.push(S)}const u=new Dh({color:14540253});for(const x of[-1,1])for(let S=0;S<3;S++){const L=new Ke().setFromPoints([new P(x*.15,-.1+S*.03,.4),new P(x*.48,-.06+S*.07-.05,.3)]);this.head.add(new U_(L,u))}this.hatSlot=new Qt,this.hatSlot.position.y=.33,this.head.add(this.hatSlot),this.neckSlot=new Qt,this.neckSlot.position.y=1.42,this.body.add(this.neckSlot),this.arms=[];for(const x of[-1,1]){const S=new Qt;S.position.set(x*.36,1.25,.08);const L=new yt(new Qc(.085,.3,6,12),this.mBody);L.position.y=-.2,L.castShadow=!0;const C=_n(.1,be(16053492),1,.85,1);C.position.y=-.4,S.add(L,C),S.rotation.z=x*.25,S.userData.side=x,this.body.add(S),this.arms.push(S)}this.tools={};const h=new Qt,d=new yt(new De(.04,.3,.012),be(14673646,{metalness:.8,roughness:.2}));d.position.y=-.17;const p=new yt(new Rn(.02,.02,.12),be(7028509));h.add(d,p),h.rotation.x=Math.PI/2,h.position.set(0,-.45,.06);const g=new Qt,v=new yt(new Rn(.015,.015,.45),be(13081179));v.position.y=-.2;const m=new yt(new ri(.06,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),be(13081179,{side:ln}));m.position.y=-.42,g.add(v,m),g.position.set(0,-.42,.04);const f=new yt(new De(.16,.2,.02),be(16775392));f.position.set(0,-.48,.12),f.rotation.x=-.5,this.tools.knife=h,this.tools.ladle=g,this.tools.pad=f;for(const x in this.tools)this.tools[x].visible=!1,this.arms[1].add(this.tools[x]);this.tail=[];let E=new Qt;E.position.set(0,.75,-.32),E.rotation.x=-.9,this.body.add(E);for(let x=0;x<8;x++){const S=new Qt;S.position.y=x===0?0:.11;const L=new yt(new ri(.065-x*.003,12,8),this.mBody);L.scale.y=1.6,L.castShadow=!0,S.add(L),E.add(S),this.tail.push(S),E=S}this.root.traverse(x=>{x.isMesh&&(x.userData.cat=!0)})}holding(t){for(const e in this.tools)this.tools[e].visible=e===t}wear({hat:t,neck:e}){if(this.hatSlot.clear(),this.neckSlot.clear(),t==="hat_chef"){const n=new yt(new Rn(.26,.28,.16,24),be(16777215));n.position.y=.02;const s=new Qt;[[0,.22,0,.24],[-.14,.18,0,.17],[.14,.18,0,.17],[0,.18,.12,.17],[0,.18,-.12,.17]].forEach(([r,a,o,c])=>{const l=_n(c,be(16777215));l.position.set(r,a,o),s.add(l)}),this.hatSlot.add(n,s),this.hatSlot.rotation.z=.12}else if(t==="hat_hachimaki"){const n=new yt(new tn(.43,.04,8,32),be(16777215));n.rotation.x=Math.PI/2,n.position.y=-.18,n.scale.set(1.08,1,1);const s=_n(.06,be(14100029),1,1,.3);s.position.set(0,-.18,.45);const r=_n(.06,be(16777215));r.position.set(.1,-.15,-.44),this.hatSlot.add(n,s,r),this.hatSlot.rotation.z=0}else if(t==="hat_straw"){const n=new yt(new Rn(.6,.62,.03,32),be(15255664)),s=new yt(new Rn(.26,.3,.2,24),be(15255664));s.position.y=.1;const r=new yt(new Rn(.305,.305,.05,24),be(14100029));r.position.y=.04,this.hatSlot.add(n,s,r),this.hatSlot.rotation.z=-.1}if(e==="neck_bell"){const n=new yt(new tn(.24,.03,8,32),be(14100029));n.rotation.x=Math.PI/2;const s=_n(.06,be(16106818,{metalness:.7,roughness:.25}));s.position.set(0,-.07,.25),this.neckSlot.add(n,s)}else if(e==="neck_scarf"){const n=new yt(new tn(.25,.07,10,32),be(3832789));n.rotation.x=Math.PI/2;const s=new yt(new De(.1,.25,.04),be(3832789));s.position.set(.12,-.15,.25),s.rotation.z=.2,this.neckSlot.add(n,s)}}play(t,e=.35){this.action={name:t,t:0,dur:e},(t==="chop"||t==="press")&&this.squash(-.1)}squash(t){this.sqV+=t*22}setMode(t){this.mode=t}happy(){this.play("happy",1),this.happyEyes=1.2}update(t){this.t+=t;const e=this.t;this.sqV+=(-170*this.sq-11*this.sqV)*t,this.sq+=this.sqV*t;let n=this.sq;this.body.position.y=0,this.head.rotation.set(Math.sin(e*.7)*.04,Math.sin(e*.5)*.08,Math.sin(e*.9)*.05),this.tail.forEach((l,u)=>{l.rotation.z=Math.sin(e*1.8-u*.5)*.18,l.rotation.x=.12+Math.sin(e*1.1-u*.4)*.05}),this.ears.forEach((l,u)=>{l.rotation.x=Math.max(0,Math.sin(e*3+u*7)-.96)*6}),this.blinkT-=t;let s=1;this.blinkT<0&&(s=.1,this.blinkT<-.12&&(this.blinkT=2+Math.random()*3)),this.happyEyes>0&&(this.happyEyes-=t,s=.15),this.eyes.forEach(l=>l.scale.y=s);const[r,a]=this.arms;r.rotation.set(0,0,-.25+Math.sin(e*2.2)*.03),a.rotation.set(0,0,.25-Math.sin(e*2.2)*.03),this.mode==="stir"&&(a.rotation.x=-1+Math.sin(e*8)*.25,a.rotation.z=.35+Math.cos(e*8)*.25),this.mode==="talk"&&(this.head.rotation.x+=Math.sin(e*14)*.03),this.mode==="pet"&&(this.head.rotation.z=Math.sin(e*2)*.15+.15,this.eyes.forEach(l=>l.scale.y=.15));const o=this.action;if(o){o.t+=t;const l=Math.min(o.t/o.dur,1),u=Math.sin(l*Math.PI);switch(o.name){case"chop":a.rotation.x=-1.4+u*.9,this.body.position.y=-u*.02;break;case"press":r.rotation.x=a.rotation.x=-1.1,r.rotation.z=-.25-u*.5+.6,a.rotation.z=.25+u*.5-.6,this.body.position.y=-u*.03;break;case"wrap":r.rotation.x=a.rotation.x=-1-u*.4;break;case"pour":a.rotation.x=-1.2,a.rotation.y=-u*.6;break;case"wave":a.rotation.z=2.4+Math.sin(o.t*14)*.3;break;case"happy":{const h=Math.abs(Math.sin(l*Math.PI*2));this.body.position.y=h*.18,n+=(h-.35)*.22}r.rotation.z=-2.3,a.rotation.z=2.3;break;case"sad":this.head.rotation.x=.3*u,this.ears.forEach(h=>h.rotation.x=-.6*u);break}l>=1&&(this.action=null)}const c=1+Math.sin(e*2.2)*.012;this.body.scale.set(1-n*.5,c*(1+n),1-n*.5)}}const cr=[{id:"home",name:"小黑食堂",jp:"食堂{しょくどう}",icon:"🏠",intro:"由飯糰開始，練好基本功。"},{id:"izakaya",name:"居酒屋・夜間營業",jp:"居酒屋{いざかや}",icon:"🏮",intro:"六款新料理，練習加單同沽清應對。"},{id:"cafe",name:"喫茶店・午後小休",jp:"喫茶店{きっさてん}",icon:"☕",intro:"六款餐飲，記住熟客嘅冷熱同甜度喜好。"},{id:"sushi",name:"壽司店・師傅出手",jp:"お寿司{すし}屋{や}",icon:"🍣",intro:"六款壽司，練習握、卷、揀魚同醋飯。"},{id:"dark",name:"暗黑食堂・主廚，叮好喇！",jp:"裏{うら}メニュー",icon:"🌙",intro:"七款捷徑料理，擺盤、改名，再揭開後廚秘密。"}],bv=[["edamame_raw","枝豆{えだまめ}","生枝豆","🫛","sphere",7974216],["abura","油{あぶら}","食用油","🫗","cyl",15121748],["katakuriko","片栗粉{かたくりこ}","粟粉／薯仔澱粉","🥣","sphere",16775920],["komugiko","小麦粉{こむぎこ}","麵粉","🥣","sphere",15656401],["kyabetsu","キャベツ","椰菜","🥬","sphere",9812329],["sosu","ソース","日式炒麵／大阪燒醬","🫙","cyl",6501155],["coffee_powder","インスタントコーヒー","即溶咖啡粉","☕","cyl",5781287],["koucha_leaf","紅茶{こうちゃ}","紅茶茶葉","🍂","sphere",7421995],["matcha_powder","抹茶{まっちゃ}","抹茶粉","🍵","sphere",7512395],["milk","牛乳{ぎゅうにゅう}","牛奶","🥛","cyl",16775400],["pan_bread","食{しょく}パン","厚切方包","🍞","box",15516554],["butter","バター","牛油","🧈","box",16177017],["sushi_su","寿司酢{すしず}","壽司醋","🫙","cyl",15851432],["kyuri","きゅうり","青瓜","🥒","cyl",5939786],["maguro","まぐろ","吞拿魚","🐟","box",13120060],["aburaage","油揚{あぶらあ}げ","豆腐卜","🟫","box",13208124],["wasabi","わさび","山葵","🟢","sphere",9420618]],Gh=[],He=i=>({type:"pick",need:i,decoys:["nori","miso"],jp:"材料{ざいりょう}を 選{えら}んで",yue:"揀啱材料",tip:"聽日文，再揀材料。"}),ie=(i,t,e,n,s)=>({type:i,verb:t,jp:e,yue:n,tip:s,anim:i==="timing"?"wrap":"stir",turns:2,rounds:2,zone:i==="hold"?[.45,.7]:.24}),jh=[{id:"edamame",chapter:"izakaya",jp:"枝豆{えだまめ}",yue:"鹽水枝豆",emoji:"🫛",price:180,station:"pot",serves:"2 人",time:"10 分鐘",ingredients:[["edamame_raw","枝豆 200g"],["shio","鹽 1 茶匙"],["mizu","水 1 公升"]],howto:["枝豆洗淨，用少少鹽搓一搓。","水煮滾，落枝豆煮約 4–5 分鐘，至豆仁熟透。","瀝乾，趁熱拌少少鹽；只食豆仁，豆莢唔食。"],steps:[He(["edamame_raw","shio","mizu"]),ie("hold","yuderu","枝豆{えだまめ}を ゆでて","烚熟枝豆","長按加熱，綠色位放手。")]},{id:"yakitori",chapter:"izakaya",jp:"焼{や}き鳥{とり}",yue:"焼鳥",emoji:"🍢",price:320,station:"pan",serves:"4 串",time:"20 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["negi","大蔥 1 條"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"]],howto:["雞肉切小件，大蔥切段，交替串上竹籤。","豉油同味醂混合成醬汁。","用平底鑊煎串燒，不時反面，最後掃醬；雞肉中心須達 75°C 並維持至少 1 分鐘。"],steps:[He(["toriniku","negi","shoyu"]),ie("timing","noseru","串{くし}に のせて","將雞肉同蔥串好","撳準綠色位。"),ie("hold","yaku","鶏肉{とりにく}を 焼{や}いて","燒熟雞肉","控制火候，唔好燒焦。")]},{id:"karaage",chapter:"izakaya",jp:"唐揚{からあ}げ",yue:"唐揚炸雞",emoji:"🍗",price:360,station:"pan",serves:"2 人",time:"25 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["shoyu","豉油 1 湯匙"],["ninniku","蒜蓉 1 茶匙"],["katakuriko","澱粉 3 湯匙"],["abura","炸油 適量"]],howto:["雞肉切件，用豉油同蒜蓉醃 10 分鐘。","逐件薄薄裹上澱粉。","以約 170°C 油炸至金黃；雞肉中心須達 75°C 並維持至少 1 分鐘，瀝油上碟。"],steps:[He(["toriniku","katakuriko","abura"]),ie("stir","mazeru","衣{ころも}を つけて","拌上薄薄粉衣","轉圈拌勻。"),ie("hold","ageru","鶏肉{とりにく}を 揚{あ}げて","炸熟雞肉","控制油溫。")]},{id:"agedashi",chapter:"izakaya",jp:"揚{あ}げ出{だ}し豆腐{どうふ}",yue:"揚出豆腐",emoji:"⬜",price:280,station:"pan",serves:"2 人",time:"20 分鐘",ingredients:[["tofu","硬豆腐 1 盒"],["katakuriko","澱粉 2 湯匙"],["abura","油 適量"],["dashi","高湯 100ml"],["shoyu","豉油 1 茶匙"],["negi","蔥花 少許"]],howto:["豆腐瀝乾抹乾，切大件，薄薄裹粉。","熱油中小火煎至各面金黃。","高湯加豉油煮熱，沿碗邊淋入，再放蔥花。"],steps:[He(["tofu","katakuriko","dashi"]),ie("hold","ageru","豆腐{とうふ}を 揚{あ}げて","煎至金黃","綠色位放手。"),ie("timing","noseru","ねぎを のせて","灑上蔥花","最後先放配料。")]},{id:"okonomiyaki",chapter:"izakaya",jp:"お好{この}み焼{や}き",yue:"大阪燒",emoji:"🥞",price:380,station:"pan",serves:"1 塊",time:"20 分鐘",ingredients:[["kyabetsu","椰菜絲 150g"],["komugiko","麵粉 50g"],["tamago","雞蛋 1 隻"],["mizu","水 50ml"],["sosu","大阪燒醬 1 湯匙"],["abura","油 1 茶匙"]],howto:["麵粉、蛋同水拌勻，再拌入椰菜絲。","平底鑊落油，倒入麵糊成厚圓餅，中小火煎約 5 分鐘。","小心反面，冚蓋再煎至中心熟透，上碟搽醬。"],steps:[He(["kyabetsu","komugiko","tamago"]),ie("stir","mazeru","生地{きじ}を 混{ま}ぜて","拌勻麵糊","轉圈攪勻。"),ie("timing","yaku","裏返{うらがえ}して","反面煎熟","撳準時機反面！")]},{id:"yakisoba",chapter:"izakaya",jp:"焼{や}きそば",yue:"日式炒麵",emoji:"🍝",price:340,station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["men","熟炒麵 1 份"],["kyabetsu","椰菜絲 100g"],["tamanegi","洋蔥 1/4 個"],["sosu","炒麵醬 1–2 湯匙"],["abura","油 1 茶匙"]],howto:["洋蔥切絲，椰菜切細。","鑊落油炒軟蔬菜，加熟麵同一湯匙水炒散。","加醬汁炒勻至熱透。"],steps:[He(["men","kyabetsu","sosu"]),ie("stir","mazeru","麺{めん}を 炒{いた}めて","炒散麵條","轉圈翻炒。"),ie("timing","noseru","お皿{さら}に のせて","上碟","撳準出餐！")]},{id:"instant_coffee",chapter:"cafe",jp:"インスタントコーヒー",yue:"精品即溶咖啡",emoji:"☕",price:260,station:"board",serves:"1 杯",time:"3 分鐘",ingredients:[["coffee_powder","精品即溶咖啡粉 2g"],["mizu","熱水 150ml"]],howto:["按咖啡粉包裝建議份量放入杯。","加入熱水攪溶，按喜好調整濃淡。","冷飲版先用少量熱水溶粉，再補冷水同冰；加水時計埋融冰份量。"],steps:[He(["coffee_powder","mizu"]),ie("stir","tokasu","コーヒーを 溶{と}かして","攪溶咖啡粉","轉圈攪至均勻。")]},{id:"black_tea",chapter:"cafe",jp:"紅茶{こうちゃ}",yue:"紅茶",emoji:"🫖",price:220,station:"pot",serves:"1 杯",time:"5 分鐘",ingredients:[["koucha_leaf","紅茶葉 2g"],["mizu","熱水 200ml"]],howto:["暖杯後放入茶葉。","沖入熱水，按茶葉包裝建議浸泡約 3 分鐘，再隔走茶葉。","冷飲版放涼再加冰，調整水量避免過淡。"],steps:[He(["koucha_leaf","mizu"]),ie("hold","ireru","紅茶{こうちゃ}を 入{い}れて","沖泡紅茶","掌握浸泡時間。")]},{id:"matcha_latte",chapter:"cafe",jp:"抹茶{まっちゃ}ラテ",yue:"抹茶拿鐵",emoji:"🍵",price:320,station:"board",serves:"1 杯",time:"5 分鐘",ingredients:[["matcha_powder","抹茶粉 2g"],["mizu","熱水 30ml"],["milk","牛奶 150ml"],["satou","糖 0–1 茶匙，按客人要求"]],howto:["抹茶粉過篩，用熱水攪成冇粉粒嘅茶液。","按冷熱要求加入暖奶，或凍奶同冰。","按客人要求加糖，攪勻。"],steps:[He(["matcha_powder","milk","mizu"]),ie("stir","mazeru","抹茶{まっちゃ}を 混{ま}ぜて","攪散抹茶粉","轉圈攪滑。"),ie("timing","ireru","牛乳{ぎゅうにゅう}を 入{い}れて","倒入牛奶","慢慢倒奶。")]},{id:"pudding",chapter:"cafe",jp:"プリン",yue:"雞蛋布甸",emoji:"🍮",price:280,station:"pot",serves:"2 杯",time:"25 分鐘＋冷藏",ingredients:[["tamago","雞蛋 1 隻"],["milk","牛奶 150ml"],["satou","糖 20g"]],howto:["蛋同糖輕輕拌勻，加入微暖牛奶，過篩入耐熱杯。","用蒸鍋小火蒸約 12–15 分鐘，至中心凝固；蛋液須充分煮熟。","放涼後冷藏至少 2 小時。"],steps:[He(["tamago","milk","satou"]),ie("stir","mazeru","卵液{らんえき}を 混{ま}ぜて","輕輕攪勻蛋液","唔好打入太多氣泡。"),ie("hold","musu","プリンを 蒸{む}して","慢火蒸布甸","小火先滑！")]},{id:"thick_toast",chapter:"cafe",jp:"厚切{あつぎ}りトースト",yue:"牛油厚多士",emoji:"🍞",price:240,station:"pan",serves:"1 份",time:"8 分鐘",ingredients:[["pan_bread","厚切方包 1 片"],["butter","牛油 10g"]],howto:["方包表面劃淺格，唔好切穿。","搽牛油，放多士爐烤至表面金黃；亦可平底鑊小火煎兩面。","趁熱上碟。"],steps:[He(["pan_bread","butter"]),ie("timing","kiru","パンに 切{き}り込{こ}みを 入{い}れて","喺方包劃淺格","輕力劃，唔好切穿。"),ie("hold","yaku","パンを 焼{や}いて","烘至金黃","控制火候。")]},{id:"pancakes",chapter:"cafe",jp:"ホットケーキ",yue:"熱香餅",emoji:"🥞",price:300,station:"pan",serves:"2 塊",time:"15 分鐘",ingredients:[["komugiko","自發粉 100g（此處取代普通麵粉）"],["tamago","雞蛋 1 隻"],["milk","牛奶 80ml"],["satou","糖 15g"],["butter","牛油 5g"]],howto:["蛋、奶同糖拌勻，加自發粉輕拌至冇乾粉。","平底鑊薄搽牛油，小火倒入麵糊。","表面冒泡、邊緣凝固時反面，再煎至中心熟透。"],steps:[He(["komugiko","tamago","milk"]),ie("stir","mazeru","生地{きじ}を 混{ま}ぜて","輕拌麵糊","唔好攪過頭。"),ie("timing","yaku","裏返{うらがえ}して","冒泡就反面","等啱時機！")]},{id:"kappamaki",chapter:"sushi",jp:"かっぱ巻{ま}き",yue:"青瓜卷",emoji:"🥒",price:240,station:"board",serves:"6 件",time:"20 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["nori","紫菜 1 張"],["kyuri","青瓜 1/2 條"]],howto:["熱飯拌入壽司醋，用扇扇涼至體溫。","青瓜切成長條；紫菜粗面向上，鋪薄薄一層飯，近身處放青瓜。","用竹簾捲實，濕刀切成 6 件。"],steps:[He(["gohan","sushi_su","kyuri"]),ie("stir","mazeru","酢飯{すめし}を 混{ま}ぜて","醋拌飯","轉圈拌勻醋飯。"),ie("timing","maku","のりで 巻{ま}いて","捲起青瓜卷","撳準時機捲實！")]},{id:"tekkamaki",chapter:"sushi",jp:"鉄火巻{てっかま}き",yue:"吞拿魚卷",emoji:"🍣",price:360,station:"board",serves:"6 件",time:"25 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["nori","紫菜 1 張"],["maguro","刺身級吞拿魚 80g"],["wasabi","山葵 少許"]],howto:["醋飯同上，扇涼。","吞拿魚用刺身級，切成長條；飯上抹少少山葵，放魚條。","捲實，濕刀切件；魚肉要新鮮，即日食用。"],steps:[He(["gohan","maguro","wasabi"]),ie("timing","kiru","まぐろを 切{き}って","切吞拿魚條","輕力一刀切好。"),ie("timing","maku","のりで 巻{ま}いて","捲起魚卷","撳準時機捲實！")]},{id:"tamago_nigiri",chapter:"sushi",jp:"玉子{たまご}の 握{にぎ}り",yue:"玉子握壽司",emoji:"🍣",price:200,station:"board",serves:"4 件",time:"25 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["tamago","雞蛋 3 隻"],["satou","砂糖 1 湯匙"],["shoyu","豉油 1 茶匙"]],howto:["蛋、糖同豉油拌勻，用方形鑊煎成厚蛋卷，放涼切條。","醋飯輕輕握成長方形小團，唔好捏太實。","蛋條放飯上，可用細條紫菜束緊。"],steps:[He(["tamago","satou","gohan"]),ie("stir","mazeru","卵{たまご}を 混{ま}ぜて","拌勻蛋液","轉圈拌勻。"),ie("timing","nigiru","ご飯{はん}を 握{にぎ}って","握成飯團","輕輕握，唔好太實。")]},{id:"salmon_nigiri",chapter:"sushi",jp:"サーモンの 握{にぎ}り",yue:"三文魚握壽司",emoji:"🍣",price:320,station:"board",serves:"4 件",time:"20 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["sake_fish","刺身級三文魚 100g"],["wasabi","山葵 少許"]],howto:["醋飯扇涼，手沾醋水防黐手。","三文魚斜刀切成薄片。","握一小團飯，抹少少山葵，蓋上魚片輕壓成形。"],steps:[He(["gohan","sake_fish","wasabi"]),ie("timing","kiru","鮭{さけ}を 切{き}って","斜刀切魚片","一刀拉切，唔好壓爛。"),ie("timing","nigiru","ご飯{はん}を 握{にぎ}って","握成飯團","輕輕握。")]},{id:"inari",chapter:"sushi",jp:"いなり寿司{ずし}",yue:"稻荷壽司",emoji:"🟫",price:220,station:"pot",serves:"6 個",time:"30 分鐘",ingredients:[["aburaage","豆腐卜 3 塊"],["dashi","高湯 150ml"],["shoyu","豉油 1 湯匙"],["satou","砂糖 1 湯匙"],["gohan","熟白飯 200g"]],howto:["豆腐卜淋熱水去油，切半成袋。","高湯、豉油同糖煮滾，豆腐卜小火煮約 10 分鐘至入味。","壓乾汁，輕輕塞入醋飯。"],steps:[He(["aburaage","dashi","shoyu"]),ie("hold","niru","油揚{あぶらあ}げを 煮{に}て","煮入味","小火煮，綠色位放手。"),ie("timing","tsumeru","ご飯{はん}を 詰{つ}めて","塞入醋飯","輕手塞滿。")]},{id:"chirashi",chapter:"sushi",jp:"ちらし寿司{ずし}",yue:"散壽司",emoji:"🍱",price:420,station:"board",serves:"1 碗",time:"25 分鐘",ingredients:[["gohan","熟白飯 250g"],["sushi_su","壽司醋 2 湯匙"],["sake_fish","刺身級三文魚 60g"],["tamago","蛋絲 1 隻份"],["nori","紫菜絲 少許"]],howto:["醋飯扇涼，盛入碗。","三文魚切片；蛋煎薄片切絲。","將魚片、蛋絲同紫菜絲散放飯面。"],steps:[He(["gohan","sake_fish","tamago"]),ie("stir","mazeru","酢飯{すめし}を 混{ま}ぜて","拌勻醋飯","轉圈拌勻。"),ie("timing","noseru","具{ぐ}を のせて","擺上配料","撳準，漂亮擺盤。")]}].map(i=>({...i,dish:i.id,unlock:{}})),wv=[["yaku","焼{や}く","燒、烘","verb"],["ageru","揚{あ}げる","炸","verb"],["ireru","入{い}れる","倒入、沖泡","verb"],["musu","蒸{む}す","蒸","verb"],["sabinuki","さび抜{ぬ}き","唔落山葵","phrase"],["wasabi_ooi","わさび 多{おお}め","多啲山葵","phrase"],["wasabi_sukunai","わさび 少{すく}なめ","少啲山葵","phrase"],["shoyu_tsukeru","醤油{しょうゆ}を つける","沾豉油","phrase"],["maku","巻{ま}く","捲","verb"],["tsumeru","詰{つ}める","塞入","verb"],["tsuika","追加{ついか}","加單","phrase"],["urikire","売{う}り切{き}れ","沽清","phrase"],["herasu","減{へ}らす","減少","phrase"],["kaeru","変{か}える","改做、換","phrase"],["kyanseru","キャンセル","取消訂單","phrase"],["yameru","やめる","唔要、算","phrase"],["hot","温{あたた}かい","熱飲","phrase"],["iced","冷{つめ}たい","凍飲","phrase"],["less_sugar","甘{あま}さ控{ひか}えめ","少甜","phrase"],["no_sugar","砂糖{さとう}なし","無糖","phrase"]],bo=[{id:"sabinuki",jp:"さび抜{ぬ}きで お願{ねが}いします。",yue:"唔該，唔好落山葵。",label:"唔落山葵",detail:"飯同魚中間唔搽",icon:"🚫"},{id:"wasabi_ooi",jp:"わさびを 多{おお}めに お願{ねが}いします。",yue:"唔該，山葵多啲。",label:"多落山葵",detail:"搽厚少少",icon:"🟢"},{id:"wasabi_sukunai",jp:"わさびは 少{すく}なめで お願{ねが}いします。",yue:"山葵少啲，唔該。",label:"少落山葵",detail:"只搽薄薄一層",icon:"🥄"}],Uu={jp:"お醤油{しょうゆ}は どう つけますか？",yue:"豉油應該點沾？"},Ev=["沾魚面，輕輕一點","沾飯面","成件浸落豉油碟"],wo=[{id:"reader",name:"讀書常客",request:"hot",jp:"いつもの、温{あたた}かいので お願{ねが}いします。",yue:"同平時一樣，要熱嘅。"},{id:"walker",name:"散步常客",request:"iced",jp:"冷{つめ}たいので お願{ねが}いします。",yue:"唔該要凍飲。"},{id:"artist",name:"畫畫常客",request:"less_sugar",jp:"甘{あま}さ控{ひか}えめで お願{ねが}いします。",yue:"唔該少甜。"}],Tv=[["meal_patty","調理済{ちょうりず}みハンバーグ","預製熟肉餅","🥩","box",8868663],["mash_potato","マッシュポテト","即食薯蓉","🥔","sphere",15588263],["frozen_veg","冷凍野菜{れいとうやさい}","冷凍蔬菜","🥦","sphere",7972940],["beef_pouch","レトルトビーフシチュー","預製燉牛肉包","🥘","box",10113846],["herb","ハーブ","裝飾香草","🌿","sphere",6068286],["bottled_tea","ペットボトルの緑茶{りょくちゃ}","樽裝綠茶","🍵","cyl",9743971],["ice","氷{こおり}","冰塊","🧊","box",12576499],["caramel_syrup","キャラメルシロップ","焦糖糖漿","🍯","cyl",12286268],["fruit_syrup","フルーツシロップ","果味糖漿","🍓","cyl",14904167],["soda_water","炭酸水{たんさんすい}","梳打水","🫧","cyl",12970223],["fruit_slice","果物{くだもの}のスライス","裝飾水果片","🍋","sphere",15979606],["stock_powder","鶏{とり}ガラスープの素{もと}","雞湯粉","🥣","cyl",14334835],["stock_concentrate","濃縮{のうしゅく}スープ","濃縮高湯","🫙","cyl",10779196],["msg","うま味調味料{みちょうみりょう}","味精 MSG","🧂","cyl",16183009],["oyster_sauce","オイスターソース","蠔油","🫗","cyl",5451809]],Av=[["atatameru","温{あたた}める","翻熱","verb"],["moritsukeru","盛{も}り付{つ}ける","擺盤","verb"],["nakami","中身{なかみ}","真正內容","phrase"]],Ui={ding:{jp:"冷凍{れいとう}を 三{みっ}つ チンして",yue:"冷凍食品叮三份"},beef:{jp:"レトルトを 温{あたた}めて",yue:"翻熱料理包"},tea:{jp:"お茶{ちゃ}に 牛乳{ぎゅうにゅう}を 入{い}れて",yue:"茶加奶"},coffee:{jp:"インスタントに シロップを 入{い}れて",yue:"即溶咖啡加糖漿"},soda:{jp:"シロップを 炭酸{たんさん}で 割{わ}って",yue:"糖漿兌梳打"},soup:{jp:"スープの素{もと}を お湯{ゆ}で 溶{と}いて",yue:"湯粉用熱水沖"},rice:{jp:"うま味{み}調味料{ちょうみりょう}を 少{すこ}しだけ",yue:"只落少少味精"}},Rv={cough:{jp:"チンの 音{おと}を ごまかして！",yue:"點一下開始叮；客人轉頭前再點一下停。最後「叮」一聲唔好俾佢聽到！",btn:"🔊 點一下：叮緊",hide:"🤧 扮咳，企喺微波爐前",ding:!0,caught:"客人望到你守住微波爐：「…チン？」",verb:"atatameru",station:"microwave"},bottle:{jp:"ペットボトルを 隠{かく}して！",yue:"點一下開始倒樽裝茶；客人轉頭前收埋膠樽",btn:"🫙 點一下：倒樽裝茶",hide:"🫖 扮緊沖茶",caught:"客人：「…ペットボトル？」"},grinder:{jp:"ミルの 音{おと}で ごまかして！",yue:"點一下開始撕即溶包；客人轉頭前扮磨豆",btn:"📦 點一下：撕即溶包",hide:"⚙️ 扮緊磨豆",caught:"客人聽到撕即溶包嘅「嘶」一聲"},glass:{jp:"果物{くだもの}の 側{がわ}を 向{む}けて！",yue:"點一下開始倒糖漿；客人轉頭前轉返生果嗰面",btn:"🍯 點一下：倒糖漿",hide:"🍋 生果片對住客人",caught:"客人見到你狂倒糖漿"},steam:{jp:"湯気{ゆげ}を 出{だ}して！",yue:"點一下開始沖湯粉；客人轉頭前扮熬湯",btn:"🥣 點一下：沖湯粉",hide:"♨️ 扮緊睇火",caught:"客人見到你撕湯粉包"},hand:{jp:"調味料{ちょうみりょう}は 控{ひか}えめに！",yue:"點一下開始落雞粉；客人轉頭前縮手",btn:"🧂 點一下：落雞粉",hide:"🍳 扮緊兜炒",caught:"客人望見小黑隻手撈緊雞粉"}},vn=(i,t,e)=>({lv:i,hi:!0,jp:t,yue:e}),Cv={safe:[vn(0,"でね、 でね…","跟住呢、跟住呢…"),vn(0,"うん、 うん","係呀，係呀"),vn(0,"へえ、 そうなんだ","哦，原來係咁"),vn(1,"昨日{きのう}の ドラマ、 見{み}た？","琴日套劇睇咗未？"),vn(1,"それで、 どう なったの？","跟住點呀？"),vn(2,"最近{さいきん}、 仕事{しごと}が 忙{いそが}しくて…","最近返工好忙…"),vn(2,"週末{しゅうまつ}、 どこか 行{い}かない？","週末去唔去邊度玩？")],turn:[vn(0,"あれ？","咦？"),vn(0,"ん？ 何{なん}の 音{おと}？","嗯？咩聲？"),vn(1,"すみません、 ちょっと…","唔好意思，想問…"),vn(1,"なんか、 いい におい！","好似好香喎！"),vn(2,"あの、 厨房{ちゅうぼう}、 見{み}ても いいですか？","請問可唔可以睇吓廚房？"),vn(2,"さっき、 チンって 音{おと}、 しなかった？","頭先係咪有「叮」一聲？")]},Wh={tourist:{icon:"🧳",name:"遊客",like:"gouka",hint:"好易信人",ask:-.25,tell:1.3,look:1,gap:1.2,turn:.35,pay:1,weight:3},granny:{icon:"👵",name:"街坊婆婆",like:"simple",hint:"浮誇菜名佢最起疑",ask:.3,tell:1.2,look:1.4,gap:1.1,turn:.4,pay:.9,weight:3},influencer:{icon:"📸",name:"網紅",like:"oshare",hint:"成日舉機望過嚟",ask:0,tell:1,look:.8,gap:.7,turn:.55,pay:1.2,weight:3},critic:{icon:"🧐",name:"食評家",like:"simple",hint:"轉頭快、追問多，但畀錢最多",ask:.2,tell:.8,look:1.2,gap:.9,turn:.5,pay:1.5,weight:2,minShift:1}},Tn=(i,t,e,n,s)=>({key:i,lv:t,kind:e,hi:!0,jp:n,yue:s}),Pv=[Tn("st_nani",0,"what","これ、 なに？","呢個係咩嚟？"),Tn("st_tezukuri",0,"made","手作{てづく}り？","自家製？"),Tn("pr_nanjikan",0,"time","何時間{なんじかん}？","整咗幾多個鐘？"),Tn("pr_zairyo",0,"origin","材料{ざいりょう}は どこの？","材料係邊度嘅？"),Tn("pr_nanno",1,"what","これは 何{なん}の 料理{りょうり}ですか？","呢個係咩料理？"),Tn("st_tsukuru",1,"made","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),Tn("pr_jikan",1,"time","どのくらい 時間{じかん}が かかりましたか？","用咗幾耐時間整？"),Tn("pr_doko",1,"origin","材料{ざいりょう}は どこから 来{き}ましたか？","材料由邊度嚟？"),Tn("pr_himitsu",2,"what","この 味{あじ}の 秘密{ひみつ}は 何{なん}ですか？","呢個味道有咩秘訣？"),Tn("pr_shihan",2,"made","まさか、 市販{しはん}の ものじゃ ないですよね？","唔會係街外買嘅現成貨啩？"),Tn("pr_kaketa",2,"time","本当{ほんとう}に 時間{じかん}を かけて 作{つく}ったんですか？","真係花咗好多時間整？"),Tn("st_genzairyo",2,"origin","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],lr={what:{jp:"シェフの 秘伝{ひでん}の レシピです！",yue:"主廚秘傳食譜！"},made:{jp:"はい、 全部{ぜんぶ} 手作{てづく}りです！",yue:"係，全部自己整！"},time:{jp:"朝{あさ}から じっくり 準備{じゅんび}しました！",yue:"由朝早慢慢準備到而家！"},origin:{jp:"産地{さんち}直送{ちょくそう}の 素材{そざい}です！",yue:"產地直送嘅材料！"}},Es={believe:["★★★★★「職人の技！」 師傅手藝一流","★★★★★「また来ます！」 一定再嚟","★★★★☆「本格的！」 好正宗"],quiet:["★★★★☆「雰囲気がいい」 好有氣氛","★★★★☆「盛り付けがきれい」 擺盤好靚"],honest:["★★★☆☆「正直なお店」 老實舖頭","★★★★☆「店長が正直で好感」 店長好老實"],expose:["★☆☆☆☆「レトルトでした」 原來係料理包","★☆☆☆☆「だまされた！」 呃人㗎"],raidWin:["★★★★★ 食評家：「本物の味」 真材實料（？）"],raidLose:["★☆☆☆☆ 食評家爆料：「全部チンでした」 全部係叮"]},Ni=(i,t,e)=>({type:"pick",need:i,decoys:t,jp:e.jp,yue:e.yue,tip:"聽清楚真正用咩材料。"}),ki=i=>({type:"sneak",kind:i,weight:1,tip:"遊戲時間係縮時演出；現實請跟包裝指示。",...Rv[i]}),na={type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"よく 混{ま}ぜて",yue:"攪勻就出得",tip:"轉圈攪勻。"},Nu={dark_beef:1,dark_coffee:2,dark_soup:3,dark_rice:4},Ts=[{id:"dark_ding",number:"01",jp:"シェフおまかせ 三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"主廚精選三拼大餐",emoji:"🍽️",price:480,station:"board",time:"縮時翻熱",ingredients:[["meal_patty","預製熟肉餅 1 份"],["mash_potato","即食薯蓉 1 份"],["frozen_veg","冷凍蔬菜 1 份"]],howto:["按各款包裝指示，用適合微波爐嘅容器分別翻熱至熱透。","肉餅、薯蓉、蔬菜分區擺好，加幾點醬汁。"],steps:[Ni(["meal_patty","mash_potato","frozen_veg"],["stock_powder","herb"],Ui.ding),ki("cough")],names:{honest:{jp:"冷凍{れいとう}・レトルトの 盛{も}り合{あ}わせ",yue:"冷凍同預製拼盤"},mild:{jp:"三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"三拼盤"}},truth:"肉餅、薯蓉、蔬菜預先煮好，出餐前翻熱。",gag:"客人：「層次好豐富！」後廚：「叮——！」",shortcut:"預製餐",lesson:"おまかせ = 交畀師傅決定；擺盤可以花心思，製作來源照樣講清楚。"},{id:"dark_beef",number:"02",jp:"八時間{はちじかん}煮込{にこ}んだ 特製{とくせい}ビーフシチュー",yue:"八小時慢燉特製牛肉",emoji:"🥘",price:520,station:"board",time:"縮時翻熱",ingredients:[["beef_pouch","預製燉牛肉包 1 包"],["herb","裝飾香草 1 條"]],howto:["按料理包指示翻熱；包裝未標明可微波，就先倒入適用容器。","倒入小砂鍋，放上香草。三分鐘係關卡名，實際時間跟包裝。"],steps:[Ni(["beef_pouch","herb"],["mash_potato","msg"],Ui.beef),ki("cough")],names:{honest:{jp:"レトルトの ビーフシチュー",yue:"料理包燉牛肉"},mild:{jp:"特製{とくせい}ビーフシチュー",yue:"特製燉牛肉"}},truth:"牛肉已經喺料理包入面燉好，小黑只負責翻熱同換鍋。",gag:"「慢燉八小時」招牌跌低，後面係一疊料理包。",shortcut:"料理包",lesson:"煮込{にこ}む = 燉；レトルト = 預製料理包；換咗砂鍋，唔代表由零開始燉。"},{id:"dark_milk_tea",number:"07",jp:"職人{しょくにん}仕立{じた}ての 緑茶{りょくちゃ}ラテ",yue:"職人特調鮮奶綠",emoji:"🥛",price:300,station:"board",time:"1 分鐘",ingredients:[["bottled_tea","樽裝綠茶 1 份"],["milk","牛奶 適量"],["ice","冰塊 適量"]],howto:["透明杯加冰，倒入樽裝綠茶。","加牛奶攪勻，按口味調整比例。"],steps:[Ni(["bottled_tea","milk","ice"],["fruit_syrup","soda_water"],Ui.tea),ki("bottle"),na],names:{honest:{jp:"ペットボトルの 緑茶{りょくちゃ}ラテ",yue:"樽裝綠茶加奶"},mild:{jp:"緑茶{りょくちゃ}ラテ",yue:"綠茶拿鐵"}},truth:"樽裝綠茶加牛奶同冰，冇煲茶，連茶隔都唔使洗。",gag:"客人問茶葉產地，小黑將膠樽慢慢推入櫃底。",shortcut:"瓶裝茶",lesson:"仕立{した}て = 度身製作嘅講法；緑茶 = 綠茶；特調可以係比例調配，未必係現泡茶。"},{id:"dark_coffee",number:"08",jp:"自家製{じかせい}キャラメルの 特製{とくせい}ラテ",yue:"自家製焦糖特製拿鐵",emoji:"☕",price:380,station:"board",time:"2 分鐘",ingredients:[["coffee_powder","即溶咖啡粉 1 份"],["mizu","熱水 少量"],["milk","牛奶 適量"],["ice","冰塊 適量"],["caramel_syrup","焦糖糖漿 少量"]],howto:["即溶咖啡粉用少量熱水溶開。","杯內加冰、牛奶同少量焦糖糖漿，再倒入咖啡。"],steps:[Ni(["coffee_powder","milk","caramel_syrup","ice"],["bottled_tea","fruit_syrup"],Ui.coffee),ki("grinder"),na],names:{honest:{jp:"インスタントの キャラメルラテ",yue:"即溶焦糖拿鐵"},mild:{jp:"特製{とくせい}キャラメルラテ",yue:"特製焦糖拿鐵"}},truth:"即溶粉沖開，加奶、冰同焦糖，靚杯係最大排場。",gag:"製作三十秒，介紹風味講足三分鐘。",shortcut:"即溶粉",lesson:"自家製{じかせい} = 自己店內製作；呢個詞喺菜單好重要，講大話就係問題。"},{id:"dark_soda",number:"09",jp:"季節{きせつ}の フルーツソーダ",yue:"季節鮮果梳打",emoji:"🍹",price:320,station:"board",time:"1 分鐘",ingredients:[["fruit_syrup","果味糖漿 少量"],["soda_water","梳打水 1 份"],["ice","冰塊 適量"],["fruit_slice","水果片 1 片（裝飾）"]],howto:["杯中加冰、果味糖漿同梳打水，輕輕拌勻。","杯邊放一片水果；飲品主體嘅果味來自糖漿。"],steps:[Ni(["fruit_syrup","soda_water","ice","fruit_slice"],["bottled_tea","caramel_syrup"],Ui.soda),ki("glass"),na],names:{honest:{jp:"シロップの ソーダ割{わ}り",yue:"糖漿梳打"},mild:{jp:"フルーツソーダ",yue:"果味梳打"}},truth:"果味主要來自糖漿；真正水果得杯邊裝飾嗰一片。",gag:"全杯唯一鮮果，今日負責企喺杯邊返工。",shortcut:"糖漿",lesson:"季節{きせつ}の = 時令；〜風 = 某種風味；フルーツソーダ唔等於鮮果汁。"},{id:"dark_soup",number:"26",jp:"じっくり 煮出{にだ}した 自家製{じかせい}スープ",yue:"慢火熬製自家湯",emoji:"🥣",price:280,station:"board",time:"1 分鐘",ingredients:[["stock_powder","雞湯粉 按包裝份量"],["stock_concentrate","濃縮高湯 少量，按鹹度調整"],["mizu","熱水 適量"]],howto:["按產品標示用熱水稀釋湯底，先試味。","兩款湯底唔好各落足一份，以免過鹹；唔夠味先逐少調整。"],steps:[Ni(["stock_powder","stock_concentrate","mizu"],["msg","oyster_sauce"],Ui.soup),ki("steam"),na],names:{honest:{jp:"粉末{ふんまつ}スープ",yue:"粉末湯"},mild:{jp:"自家製{じかせい}スープ",yue:"自家湯"}},truth:"湯粉、濃縮高湯同熱水沖成，冇喺店內熬八小時。",gag:"客人問熬咗幾耐，小黑望住秒錶，扮睇唔到。",shortcut:"濃縮高湯",lesson:"じっくり = 慢慢、用心；濃縮 = concentrated；稀釋比例同鹹度比落得多更重要。"},{id:"dark_rice",number:"25",jp:"黄金{おうごん}の 特製{とくせい}チャーハン",yue:"黃金特製炒飯",emoji:"🍚",price:360,station:"pan",time:"5 分鐘",ingredients:[["gohan","熟飯 1 碗"],["tamago","雞蛋 1 隻"],["msg","味精 少量"],["stock_powder","雞粉 少量"],["oyster_sauce","蠔油 少量"],["abura","油 適量"]],howto:["鑊落油炒熟雞蛋，加熟飯炒散至熱透。","味精、雞粉、蠔油會疊加味道；先少量試味，再決定使唔使補。"],steps:[Ni(["gohan","tamago","msg","stock_powder","oyster_sauce"],["stock_concentrate","herb"],Ui.rice),ki("hand"),{type:"season",weight:3,jp:"味{あじ}を 調{ととの}えて",yue:"主廚，仲差少少？試味先！",tip:"呢個係遊戲調味格數，唔係現實用量。"}],names:{honest:{jp:"うま味{み}調味料{ちょうみりょう}の チャーハン",yue:"味精炒飯"},mild:{jp:"特製{とくせい}チャーハン",yue:"特製炒飯"}},truth:"鮮味靠調味配搭；亂落大量調味，會蓋過蛋香同飯香。",gag:"「仲差少少！」大廚伸手再攞雞粉，客人即刻遞杯水。",shortcut:"増鮮調味",lesson:"うま味 = 鮮味。MSG 本身唔係笑柄；唔試味、亂落先係。"}].map(i=>({...i,chapter:"dark",dish:i.id,serves:"1 份",unlock:Nu[i.id]?{darkShift:Nu[i.id]}:{}})),ia=[{id:"simple",jp:"シンプル",yue:"簡單樸素",icon:"🍽️",plate:"plain",garnish:"none"},{id:"oshare",jp:"おしゃれ",yue:"精緻時尚",icon:"✨",plate:"bistro",garnish:"accent"},{id:"gouka",jp:"豪華{ごうか}",yue:"豪華誇張",icon:"👑",plate:"grand",garnish:"tower"}],An=(i,t,e)=>({lv:i,hi:!0,jp:t,yue:e}),Lv={simple:[An(0,"シンプルが いいです","簡單就好"),An(1,"飾{かざ}りは いりません","唔使裝飾"),An(2,"素材{そざい}の 味{あじ}を 見{み}せてください","想睇到食材原味")],oshare:[An(0,"おしゃれに してください","整靚啲"),An(1,"写真{しゃしん}を 撮{と}りたいです","我想影相"),An(2,"映{ば}える 感{かん}じで お願{ねが}いします","要打卡感覺")],gouka:[An(0,"大{おお}きいのが いいです","大大份就好"),An(1,"たくさん 飾{かざ}ってください","多啲裝飾"),An(2,"豪華{ごうか}な 料理{りょうり}が 食{た}べたいです","想食豪華嘢")]},Dv=[An(0,"えっ… イメージと 違{ちが}います","吓…同我諗嘅唔同"),An(0,"うーん、 まあまあです","嗯…麻麻地"),An(0,"わあ、 これです！","嘩，就係咁！")],xr={honest:{label:"如實介紹",hype:15,mult:1,ask:0},mild:{label:"小誇張",hype:55,mult:1.6,ask:.45},grand:{label:"極度浮誇",hype:100,mult:2.5,ask:.85}},Xh=(i,t)=>t==="grand"?{jp:i.jp,yue:i.yue}:i.names[t];function Iv(i,t,e){return{taste:Math.round(i*100),look:[55,80,100][t],hype:xr[e].hype}}const Uv=[{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,hi:!0,jp:"すみません、 {dish}を お願{ねが}いします",yue:"唔好意思，我要{dishYue}"},{lv:2,hi:!0,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],Nv={honest:{jp:"すみません、 実{じつ}は 温{あたた}めただけです",yue:"唔好意思，其實只係翻熱"}},Eo={forgive:[{lv:0,hi:!0,jp:"そうですか。 おいしいです",yue:"係咩。都好食"},{lv:1,hi:!0,jp:"正直{しょうじき}ですね。 でも おいしいから いいです",yue:"你好老實。不過好食就得喇"},{lv:2,hi:!0,jp:"冷凍{れいとう}だとしても、 おいしければ 気{き}にしません",yue:"就算係急凍，好食我都唔介意"}],believe:[{lv:0,hi:!0,jp:"へえ、 すごい！",yue:"嘩，好叻！"},{lv:1,hi:!0,jp:"さすが プロですね！",yue:"真係專業！"},{lv:2,hi:!0,jp:"やっぱり 職人{しょくにん}の 技{わざ}は 違{ちが}いますね",yue:"果然師傅手藝唔同"}],expose:[{lv:0,hi:!0,jp:"あれ？ これ、 レトルト？",yue:"咦？呢個係料理包？"},{lv:1,hi:!0,jp:"えっ、 これ、 レトルトじゃないですか！",yue:"咩話，呢個唔係料理包咩！"},{lv:2,hi:!0,jp:"…これ、 市販{しはん}の 商品{しょうひん}ですよね？",yue:"…呢個係街外賣嘅現成貨，啱唔啱？"}]},en={gohan:{jp:"ご飯{はん}",yue:"白飯",emoji:"🍚",cat:"ing",m:{s:"sphere",c:16645621,sc:[.32,.2,.32]}},shio:{jp:"塩{しお}",yue:"鹽",emoji:"🧂",cat:"ing",m:{s:"cyl",c:15658734,sc:[.08,.2,.08]}},nori:{jp:"海苔{のり}",yue:"紫菜",emoji:"🟩",cat:"ing",m:{s:"box",c:2044706,sc:[.3,.01,.2]}},umeboshi:{jp:"梅干{うめぼ}し",yue:"酸梅",emoji:"🔴",cat:"ing",m:{s:"sphere",c:13117500,sc:[.07,.06,.07]}},sake_fish:{jp:"鮭{さけ}",yue:"三文魚",emoji:"🐟",cat:"ing",m:{s:"box",c:16747622,sc:[.2,.06,.12]}},mizu:{jp:"水{みず}",yue:"水",emoji:"💧",cat:"ing",m:{s:"cyl",c:9425919,sc:[.1,.22,.1]}},dashi:{jp:"だし",yue:"日式高湯",emoji:"🥣",cat:"ing",m:{s:"cyl",c:14263361,sc:[.12,.12,.12]}},tofu:{jp:"豆腐{とうふ}",yue:"豆腐",emoji:"⬜",cat:"ing",m:{s:"box",c:16776168,sc:[.24,.12,.16]}},wakame:{jp:"わかめ",yue:"海帶芽",emoji:"🌿",cat:"ing",m:{s:"sphere",c:3042106,sc:[.12,.04,.12]}},negi:{jp:"ねぎ",yue:"蔥",emoji:"🧅",cat:"ing",m:{s:"cyl",c:7127626,sc:[.03,.35,.03],rz:1.57}},miso:{jp:"味噌{みそ}",yue:"麵豉醬",emoji:"🟫",cat:"ing",m:{s:"cyl",c:11037490,sc:[.14,.1,.14]}},toriniku:{jp:"鶏肉{とりにく}",yue:"雞肉",emoji:"🍗",cat:"ing",m:{s:"box",c:15911328,sc:[.22,.08,.16]}},tamago:{jp:"卵{たまご}",yue:"雞蛋",emoji:"🥚",cat:"ing",m:{s:"sphere",c:16774108,sc:[.08,.1,.08]}},tamanegi:{jp:"玉{たま}ねぎ",yue:"洋蔥",emoji:"🧅",cat:"ing",m:{s:"sphere",c:15253626,sc:[.12,.11,.12]}},shoyu:{jp:"醤油{しょうゆ}",yue:"豉油",emoji:"🫗",cat:"ing",m:{s:"cyl",c:3807756,sc:[.06,.24,.06]}},mirin:{jp:"みりん",yue:"味醂（甜米酒）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:16115368,sc:[.06,.24,.06]}},satou:{jp:"砂糖{さとう}",yue:"砂糖",emoji:"🍬",cat:"ing",m:{s:"box",c:16777215,sc:[.1,.1,.1]}},men:{jp:"麺{めん}",yue:"麵",emoji:"🍜",cat:"ing",m:{s:"sphere",c:15980410,sc:[.22,.08,.22]}},chashu:{jp:"チャーシュー",yue:"叉燒（日式）",emoji:"🥩",cat:"ing",m:{s:"cyl",c:11887930,sc:[.14,.03,.14]}},moyashi:{jp:"もやし",yue:"芽菜",emoji:"🌱",cat:"ing",m:{s:"sphere",c:16249808,sc:[.12,.05,.12]}},ninniku:{jp:"にんにく",yue:"蒜頭",emoji:"🧄",cat:"ing",m:{s:"sphere",c:15986400,sc:[.07,.07,.07]}},sake_drink:{jp:"酒{さけ}",yue:"日本酒（煮食用）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:14741759,sc:[.06,.24,.06]}},kiru:{jp:"切{き}る",yue:"切",emoji:"🔪",cat:"verb"},mazeru:{jp:"混{ま}ぜる",yue:"攪拌、撈勻",emoji:"🥄",cat:"verb"},niru:{jp:"煮{に}る",yue:"煮、燜",emoji:"🍲",cat:"verb"},nigiru:{jp:"握{にぎ}る",yue:"揸實、搓（飯糰）",emoji:"✊",cat:"verb"},tokasu:{jp:"溶{と}かす",yue:"溶開",emoji:"🫧",cat:"verb"},yuderu:{jp:"ゆでる",yue:"烚（落水煮）",emoji:"♨️",cat:"verb"},noseru:{jp:"のせる",yue:"放上面",emoji:"⬆️",cat:"verb"},onigiri:{jp:"おにぎり",yue:"飯糰",emoji:"🍙",cat:"dish"},misoshiru:{jp:"味噌汁{みそしる}",yue:"麵豉湯",emoji:"🥣",cat:"dish"},oyakodon:{jp:"親子丼{おやこどん}",yue:"親子丼（雞肉滑蛋飯）",emoji:"🍛",cat:"dish"},ramen:{jp:"ラーメン",yue:"拉麵",emoji:"🍜",cat:"dish"},ocha:{jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",cat:"dish"},omizu:{jp:"お水{みず}",yue:"水（禮貌講法）",emoji:"🥛",cat:"dish"},biiru:{jp:"ビール",yue:"啤酒",emoji:"🍺",cat:"dish"},hitotsu:{jp:"一{ひと}つ",yue:"一個",emoji:"1️⃣",cat:"num"},futatsu:{jp:"二{ふた}つ",yue:"兩個",emoji:"2️⃣",cat:"num"},mittsu:{jp:"三{みっ}つ",yue:"三個",emoji:"3️⃣",cat:"num"},hitori:{jp:"一人{ひとり}",yue:"一個人",emoji:"🧍",cat:"num"},futari:{jp:"二人{ふたり}",yue:"兩個人",emoji:"👫",cat:"num"},ikkan:{jp:"一貫{いっかん}",yue:"一件（握壽司）",emoji:"1️⃣",cat:"num",textIcon:!0},nikan:{jp:"二貫{にかん}",yue:"兩件（握壽司）",emoji:"2️⃣",cat:"num",textIcon:!0},sankan:{jp:"三貫{さんかん}",yue:"三件（握壽司）",emoji:"3️⃣",cat:"num",textIcon:!0},sannin:{jp:"三人{さんにん}",yue:"三個人",emoji:"👨‍👩‍👧",cat:"num"},irasshaimase:{jp:"いらっしゃいませ",yue:"歡迎光臨",emoji:"🙇",cat:"phrase"},arigatou:{jp:"ありがとうございます",yue:"多謝（禮貌）",emoji:"🙏",cat:"phrase"},oishii:{jp:"おいしい",yue:"好好食",emoji:"😋",cat:"phrase"},itadakimasu:{jp:"いただきます",yue:"開動喇（食之前講）",emoji:"🙏",cat:"phrase"},gochisousama:{jp:"ごちそうさまでした",yue:"多謝款待（食完講）",emoji:"😊",cat:"phrase"},kudasai:{jp:"ください",yue:"請畀我⋯",emoji:"👉",cat:"phrase"},onegaishimasu:{jp:"お願{ねが}いします",yue:"麻煩你、唔該",emoji:"🙇",cat:"phrase"},okaikei:{jp:"お会計{かいけい}",yue:"埋單",emoji:"🧾",cat:"phrase"},sumimasen:{jp:"すみません",yue:"唔好意思（叫人都用得）",emoji:"✋",cat:"phrase"},atsui:{jp:"熱{あつ}い",yue:"好熱、好燙",emoji:"🔥",cat:"phrase"},oomori:{jp:"大盛{おおも}り",yue:"大份",emoji:"⛰️",cat:"phrase"},matta:{jp:"また 来{き}ます",yue:"我會再嚟",emoji:"👋",cat:"phrase"},oishikatta:{jp:"美味{おい}しかった",yue:"好好食呀（過去式）",emoji:"🥰",cat:"phrase"},hai:{jp:"はい",yue:"係／好",emoji:"⭕",cat:"phrase"},iie:{jp:"いいえ",yue:"唔係／唔使",emoji:"❌",cat:"phrase"}};for(const[i,t,e,n,s,r]of[...bv,...Tv])en[i]={jp:t,yue:e,emoji:n,cat:"ing",m:{s,c:r,sc:[.12,.1,.12]},...Gh.includes(i)?{textIcon:!0}:{}};for(const i of[...jh,...Ts])en[i.id]={jp:i.jp,yue:i.yue,emoji:i.emoji,cat:"dish",...Gh.includes(i.id)?{textIcon:!0}:{}};for(const[i,t,e,n]of[...wv,...Av])en[i]={jp:t,yue:e,cat:n,emoji:n==="verb"?"🥄":"💬",textIcon:!0};function ve(i){const t=en[i];if(!t)throw new Error("vocab missing: "+i);return{id:i,...t}}const Ft=(i,t={})=>new el({color:i,roughness:.6,...t}),wi=i=>(i.castShadow=!0,i.receiveShadow=!0,i);function Kt(i,t,e=1,n=1,s=1){const r=wi(new yt(new ri(i,20,14),typeof t=="number"?Ft(t):t));return r.scale.set(e,n,s),r}function he(i,t,e,n){return wi(new yt(new De(i,t,e),typeof n=="number"?Ft(n):n))}function Yt(i,t,e,n,s=24){return wi(new yt(new Rn(i,t,e,s),typeof n=="number"?Ft(n):n))}function er(i=.22,t=.14,e=10165536,n=1708048){const s=[];for(let u=0;u<=10;u++){const h=u/10;s.push(new ot(i*.45+i*.55*Math.sin(h*Math.PI/2),t*h))}const r=new Qt,a=wi(new yt(new mr(s,32),Ft(e,{roughness:.3}))),o=s.map(u=>new ot(u.x*.93,u.y+.005)),c=new yt(new mr(o,32),Ft(n,{side:rn,roughness:.3})),l=Yt(i*.38,i*.4,.03,e);return l.position.y=-.01,r.add(a,c,l),r.userData.top=t,r.userData.r=i*.93,r}function cn(i=.25,t=16052714){const e=Yt(i,i*.8,.03,t,32),n=wi(new yt(new tn(i*.95,.012,6,32),Ft(3104156)));n.rotation.x=Math.PI/2,n.position.y=.016;const s=new Qt;return s.add(e,n),s}function Rc(i=!0){const t=new Qt,e=new Oh,n=.14,s=.05,r=[0,1,2].map(c=>new ot(Math.sin(c*2.094)*n,Math.cos(c*2.094)*n));for(let c=0;c<3;c++){const l=r[c],u=r[(c+1)%3],h=r[(c+2)%3],d=l.clone().lerp(h,s/n*.9),p=l.clone().lerp(u,s/n*.9);c===0?e.moveTo(d.x,d.y):e.lineTo(d.x,d.y),e.quadraticCurveTo(l.x,l.y,p.x,p.y)}e.closePath();const a=new tl(e,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.04,bevelSegments:4,curveSegments:10});a.translate(0,0,-.04);const o=wi(new yt(a,Ft(16514036,{roughness:.9})));if(o.position.y=.14,t.add(o),i){const c=he(.13,.11,.2,Ft(1517083,{roughness:.8}));c.position.set(0,.07,0),t.add(c)}return t}function ku(i){const t=new Qt;if(["dark_milk_tea","dark_coffee","dark_soda"].includes(i)){const e=Yt(.11,.09,.3,Ft(14874362,{transparent:!0,opacity:.35}));e.position.y=.17,t.add(e);const n=Yt(.098,.083,.25,i==="dark_coffee"?10383697:i==="dark_soda"?15308175:11846026);n.position.y=.15,t.add(n);const s=$h();if(s.position.y=.04,t.add(s),i==="dark_soda"){const r=Yt(.065,.065,.014,16243299);r.rotation.x=Math.PI/2,r.position.set(.09,.3,0),t.add(r)}if(i==="dark_coffee"){const r=Yt(.096,.096,.045,14995373);r.position.y=.255,t.add(r)}}else if(i==="dark_ding"){t.add(cn(.3));const e=Kt(.12,8868663,1.1,.4,.8);e.position.set(-.1,.07,0),t.add(e);const n=Kt(.09,15785896,1,.8,1);n.position.set(.12,.08,.08),t.add(n);for(let s=0;s<3;s++){const r=Kt(.04,7382346);r.position.set(s*.06,.06,-.13),t.add(r)}}else if(i==="dark_beef"||i==="dark_soup"){t.add(er(.23,.15,i==="dark_beef"?8671289:15787471,16182751));const e=Yt(.205,.205,.025,i==="dark_beef"?8536360:14004830);if(e.position.y=.12,t.add(e),i==="dark_beef")for(let s=0;s<5;s++){const r=he(.065,.045,.06,9524274);r.position.set(Math.sin(s*2)*.12,.15,Math.cos(s*2)*.12),t.add(r)}const n=Kt(.04,6524477,1.5,.2,.5);n.position.set(0,.17,0),t.add(n)}else if(i==="dark_rice"){t.add(cn(.28));const e=Kt(.21,14858078,1,.6,1);e.position.y=.045,t.add(e);for(let n=0;n<12;n++){const s=he(.035,.018,.025,n%3?16372556:7382346);s.position.set(Math.sin(n*2)*.15,.13,Math.cos(n*2)*.12),t.add(s)}}else if(i==="onigiri"){t.add(cn(.24));const e=Rc();e.position.y=.02,t.add(e);const n=Rc();n.position.set(.1,.02,-.06),n.rotation.y=.5,n.scale.setScalar(.85),t.add(n);const s=Kt(.025,13117500);s.position.set(-.13,.04,.12),t.add(s)}else if(i==="misoshiru"){const e=er(.18,.13);t.add(e);const n=new yt(new $i(.15,32),Ft(12946250,{roughness:.2}));n.rotation.x=-Math.PI/2,n.position.y=.11,t.add(n);for(let s=0;s<6;s++){const r=he(.035,.03,.035,16776168);r.position.set((Math.random()-.5)*.18,.115,(Math.random()-.5)*.18),r.rotation.y=Math.random(),t.add(r)}for(let s=0;s<5;s++){const r=Kt(.03,3042106,1,.2,.6);r.position.set((Math.random()-.5)*.16,.112,(Math.random()-.5)*.16),t.add(r)}for(let s=0;s<8;s++){const r=Yt(.012,.012,.005,8376399,8);r.position.set((Math.random()-.5)*.15,.118,(Math.random()-.5)*.15),t.add(r)}}else if(i==="oyakodon"){const e=er(.22,.15,2903951,15921126);t.add(e);const n=Kt(.19,16514036,1,.3,1);n.position.y=.13,t.add(n);const s=Kt(.19,Ft(16237873,{roughness:.35}),1,.16,1);s.position.y=.17,t.add(s);for(let r=0;r<6;r++){const a=Kt(.05,16775126,1,.25,.8);a.position.set((Math.random()-.5)*.24,.19,(Math.random()-.5)*.24),t.add(a)}for(let r=0;r<6;r++){const a=he(.05,.035,.04,13210202);a.position.set((Math.random()-.5)*.22,.2,(Math.random()-.5)*.22),a.rotation.y=Math.random()*3,t.add(a)}for(let r=0;r<3;r++){const a=Kt(.03,5025616,1,.15,1.6);a.position.set((Math.random()-.5)*.08,.22,(Math.random()-.5)*.08),a.rotation.y=r*2,t.add(a)}}else if(i==="ramen"){const e=er(.27,.17,11740702,1118481);t.add(e);const n=new yt(new $i(.235,32),Ft(13802331,{roughness:.15}));n.rotation.x=-Math.PI/2,n.position.y=.15,t.add(n);for(let l=0;l<7;l++){const u=new yt(new tn(.05+Math.random()*.06,.008,6,20),Ft(15980410));u.rotation.x=Math.PI/2,u.position.set((Math.random()-.5)*.12,.152,(Math.random()-.5)*.12),t.add(u)}for(let l=0;l<2;l++){const u=Yt(.07,.07,.02,11887930);u.position.set(-.08+l*.05,.165,-.08),u.rotation.x=.3,t.add(u)}const s=new yt(new ri(.05,16,10,0,Math.PI*2,0,Math.PI/2),Ft(16775920));s.scale.set(1,.7,1.3),s.position.set(.1,.15,.05),t.add(s);const r=Kt(.028,15763994,1,.4,1.2);r.position.set(.1,.183,.05),t.add(r);const a=he(.12,.14,.005,1517083);a.position.set(0,.2,-.18),a.rotation.x=-.25,t.add(a);const o=Yt(.035,.035,.012,16777215);o.position.set(.05,.16,.13),t.add(o);const c=new yt(new tn(.018,.005,6,16),Ft(16740256));c.rotation.x=Math.PI/2,c.position.set(.05,.167,.13),t.add(c);for(let l=0;l<10;l++){const u=Yt(.01,.01,.005,8376399,8);u.position.set(-.1+Math.random()*.1,.158,.05+Math.random()*.1),t.add(u)}}else if(["instant_coffee","black_tea","matcha_latte"].includes(i)){t.add(cn(.19));const e=Yt(.115,.09,.2,16774367);e.position.y=.12,t.add(e);const n=Yt(.106,.106,.012,i==="instant_coffee"?4796454:i==="black_tea"?11627820:9350233);n.position.y=.225,t.add(n);const s=new yt(new tn(.06,.015,8,20),Ft(16774367));if(s.position.set(.12,.12,0),t.add(s),i==="matcha_latte"){const r=Yt(.06,.06,.005,16775647);r.position.y=.235,t.add(r)}}else if(i==="edamame"){t.add(cn());for(let e=0;e<6;e++){const n=Kt(.065,7974216,1.7,.45,.55);n.position.set((e%3-1)*.12,.05+Math.floor(e/3)*.035,(Math.floor(e/3)-.5)*.12),n.rotation.y=e*.8,t.add(n)}}else if(i==="yakitori"){t.add(cn());for(let e=0;e<2;e++){const n=he(.015,.015,.42,13017452);n.position.set(e*.17-.08,.05,0),t.add(n);for(let s=0;s<4;s++){const r=he(.085,.06,.065,s%2?8889940:13009468);r.position.set(e*.17-.08,.08,s*.08-.08),t.add(r)}}}else if(i==="karaage"||i==="agedashi"){t.add(cn());for(let e=0;e<5;e++){const n=i==="karaage"?Kt(.07,12945979,1,.8,.9):he(.1,.08,.1,15122813);if(n.position.set(Math.cos(e*1.26)*.13,.07,Math.sin(e*1.26)*.13),t.add(n),i==="agedashi"){const s=Kt(.02,7185226,1.4,.2,.5);s.position.copy(n.position),s.position.y+=.05,t.add(s)}}}else if(i==="okonomiyaki"||i==="pancakes"){t.add(cn());for(let e=0;e<(i==="pancakes"?3:1);e++){const n=Yt(.2,.2,.045,e%2?14858346:13210700);n.position.y=.045+e*.045,t.add(n)}if(i==="pancakes"){const e=he(.065,.025,.065,16768899);e.position.y=.17,t.add(e)}else for(let e=0;e<4;e++){const n=he(.31,.008,.015,6568748);n.position.set(0,.075,(e-1.5)*.055),t.add(n)}}else if(i==="thick_toast"){t.add(cn());const e=he(.32,.09,.29,10314292);e.position.y=.065,t.add(e);const n=he(.28,.012,.25,15517065);n.position.y=.116,t.add(n);const s=he(.07,.022,.07,16768899);s.position.y=.135,t.add(s)}else if(i==="pudding"){t.add(cn());const e=Yt(.11,.16,.19,16046470);e.position.y=.11,t.add(e);const n=Yt(.112,.112,.012,10178863);n.position.y=.21,t.add(n)}else if(i==="yakisoba"){t.add(cn());for(let e=0;e<12;e++){const n=new yt(new tn(.07,.009,6,16),Ft(12158277));n.rotation.x=Math.PI/2,n.position.set(Math.sin(e*2)*.11,.04+e*.004,Math.cos(e*2)*.1),t.add(n)}for(let e=0;e<5;e++){const n=Kt(.035,9876576,1.4,.2,1);n.position.set(Math.cos(e)*.12,.1,Math.sin(e)*.12),t.add(n)}}else if(i==="ocha"){const e=Yt(.06,.05,.12,6983502);e.position.y=.06,t.add(e);const n=new yt(new $i(.055,20),Ft(10207050));n.rotation.x=-Math.PI/2,n.position.y=.11,t.add(n)}else if(i==="omizu"){const e=Yt(.05,.045,.14,Ft(13627391,{transparent:!0,opacity:.45,roughness:.05}));e.position.y=.07,t.add(e)}else if(i==="biiru"){const e=Yt(.06,.06,.18,Ft(15905076,{transparent:!0,opacity:.85,roughness:.1}));e.position.y=.09,t.add(e);const n=Kt(.062,16777215,1,.4,1);n.position.y=.18,t.add(n);const s=new yt(new tn(.04,.012,6,12,Math.PI),Ft(15267071,{transparent:!0,opacity:.6}));s.rotation.z=-Math.PI/2,s.position.set(.06,.09,0),t.add(s)}else if(["kappamaki","tekkamaki"].includes(i)){t.add(cn(.27));const e=i==="kappamaki"?7320149:13120060;for(let n=0;n<4;n++){const s=(n%2-.5)*.17,r=(Math.floor(n/2)-.5)*.17,a=Yt(.07,.07,.07,1517083);a.position.set(s,.07,r),t.add(a);const o=Yt(.056,.056,.01,16645621);o.position.set(s,.108,r),t.add(o);const c=Yt(.026,.026,.012,e);c.position.set(s,.112,r),t.add(c)}}else if(["tamago_nigiri","salmon_nigiri"].includes(i)){t.add(cn(.27));for(let e=0;e<2;e++){const n=(e-.5)*.2,s=he(.15,.06,.08,16645621);s.position.set(n,.07,0),t.add(s);const r=he(.17,.03,.095,i==="salmon_nigiri"?16747622:16237873);if(r.position.set(n,.115,0),t.add(r),i==="tamago_nigiri"){const a=he(.03,.04,.1,1517083);a.position.set(n,.11,0),t.add(a)}}}else if(i==="inari"){t.add(cn(.27));for(let e=0;e<3;e++){const n=Kt(.09,13208124,1.1,.7,.9);n.position.set((e-1)*.17,.07,e%2*.05),t.add(n);const s=Yt(.045,.045,.01,16645621);s.position.set((e-1)*.17,.125,e%2*.05),t.add(s)}}else if(i==="chirashi"){t.add(er(.24,.13,2903951,15921126));const e=Yt(.21,.21,.04,16645621);e.position.y=.12,t.add(e);for(let n=0;n<5;n++){const s=he(.08,.02,.05,16747622);s.position.set(Math.cos(n*1.3)*.1,.15,Math.sin(n*1.3)*.1),s.rotation.y=n,t.add(s)}for(let n=0;n<6;n++){const s=he(.05,.012,.012,16237873);s.position.set(Math.cos(n*2.1)*.07,.16,Math.sin(n*2.1)*.07),s.rotation.y=n,t.add(s)}}return t}function $h(){const i=new Qt;for(let t=0;t<3;t++){const e=he(.045,.035,.045,Ft(14086911,{transparent:!0,opacity:.75}));e.position.set((t-1)*.045,.244,t%2*.04-.02),i.add(e)}return i}function kv(){const i=new Qt,t=he(.62,.35,.4,14012875);t.position.y=.175,i.add(t);const e=he(.42,.24,.012,Ft(3157048,{emissive:0}));e.position.set(-.055,.18,.207),i.add(e);const n=he(.025,.17,.03,7827836);n.position.set(.13,.18,.225),i.add(n);for(let s=0;s<2;s++){const r=Yt(.035,.035,.025,6839152);r.rotation.x=Math.PI/2,r.position.set(.235,.12+s*.13,.22),i.add(r)}return i.userData.window=e,i}function Ov(i,t,e){if(!i)return;if(t!=="plain"){const s=Yt(t==="grand"?.39:.3,.28,.02,t==="grand"?3420222:15262940);s.position.y=-.025,i.add(s)}const n=e==="tower"?7:e==="accent"?1:0;for(let s=0;s<n;s++){const r=Kt(.04,6329916,1.5,.25,.5);r.position.set(.035*Math.sin(s),.32+s*.025,0),r.rotation.y=s,i.add(r)}}function Fv(i){const t=en[i],e=t==null?void 0:t.m,n=new Qt;if(!e)return n;let s;return e.s==="sphere"?s=Kt(1,e.c):e.s==="box"?s=he(1,1,1,e.c):s=Yt(1,1,1,e.c,18),s.scale.set(...e.sc),(e.s==="cyl"||e.s==="box")&&(s.scale.y=e.sc[1]),s.position.y=e.s==="sphere"?e.sc[1]:e.sc[1]/2,e.rz&&(s.rotation.z=e.rz,s.position.y=e.sc[0]),n.add(s),n}function Bv(i){const t=new Qt;switch(i){case"onigiri_raw":{const e=Rc(!1);t.add(e);break}case"tofu_cubes":for(let e=0;e<9;e++){const n=he(.06,.06,.06,16776168);n.position.set(e%3*.07-.07,.03,Math.floor(e/3)*.07-.07),t.add(n)}break;case"chicken_pieces":for(let e=0;e<8;e++){const n=he(.06,.04,.05,15911328);n.position.set((Math.random()-.5)*.25,.02,(Math.random()-.5)*.15),n.rotation.y=Math.random()*3,t.add(n)}break}return t}function zv(){const i=new Qt,t=he(.7,.04,.42,Ft(14267530,{roughness:.8}));return t.position.y=.02,i.add(t),i}function Hv(){const i=new Qt,t=Ft(12107463,{metalness:.7,roughness:.3}),e=new yt(new Rn(.2,.18,.22,28,1,!0),new el({color:12107463,metalness:.7,roughness:.3,side:ln}));e.position.y=.11,e.castShadow=!0;const n=Yt(.18,.18,.01,t);n.position.y=.005;const s=new yt(new $i(.19,28),Ft(15259816,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.16,s.visible=!1,i.add(e,n,s);for(const r of[-1,1]){const a=he(.08,.02,.04,3355443);a.position.set(r*.24,.19,0),i.add(a)}return i.userData.liquid=s,i}function Vv(){const i=new Qt,t=Yt(.17,.15,.05,Ft(2763306,{metalness:.5,roughness:.4}));t.position.y=.025;const e=Yt(.015,.015,.35,7028509);e.rotation.z=Math.PI/2,e.position.set(.33,.05,0);const n=new yt(new $i(.15,28),Ft(12089914,{roughness:.15}));return n.rotation.x=-Math.PI/2,n.position.y=.045,n.visible=!1,i.add(t,e,n),i.userData.liquid=n,i}function qh(i){const t=new Qt,e=i.color,n=Kt(.32,e,1,1.15,.9);n.position.y=.55,t.add(n);const s=Kt(.22,i.id==="maneki"?16777215:16774112,1,1.1,.6);s.position.set(0,.5,.2),t.add(s);const r=new Qt;r.position.y=1.08,t.add(r),r.add(Kt(.3,e,1.1,1,1));const a=i.id==="kuma"?14267276:i.id==="kitsune"||i.id==="shiba"?16774112:16777215,o=Kt(.12,a,1.3,.85,.9);o.position.set(0,-.08,.24),r.add(o);const c=Kt(.035,2236962);c.position.set(0,-.04,.35),r.add(c);for(const l of[-1,1]){const u=Kt(.04,new Sn({color:1118481}),1,1.2,.6);u.position.set(l*.12,.04,.27),r.add(u);const h=Kt(.012,new Sn({color:16777215}));h.position.set(l*.12+.012,.06,.3),r.add(h);const d=Kt(.04,new Sn({color:16752560,transparent:!0,opacity:.6}),1,.6,.3);if(d.position.set(l*.2,-.06,.24),r.add(d),i.mask){const m=Kt(.08,3813416,1.2,.9,.4);m.position.set(l*.12,.03,.24),r.add(m),u.position.z=.29}let p;i.ear==="long"?(p=Kt(.07,e,1,3.2,.6),p.position.set(l*.1,.42,0),p.rotation.z=-l*.15):i.ear==="round"?(p=Kt(.09,e,1,1,.6),p.position.set(l*.22,.24,0)):(p=wi(new yt(new Os(.1,.2,12),Ft(e))),p.scale.z=.6,p.position.set(l*.18,.3,0),p.rotation.z=-l*.3),r.add(p);const g=Kt(.08,e,1,1.6,1);g.position.set(l*.3,.6,.1),g.rotation.z=l*.4,t.add(g),i.id==="maneki"&&l===1&&(g.position.set(.3,.95,.1),g.rotation.z=-.3,t.userData.wave=g);const v=Kt(.09,e,1.2,.6,1.4);v.position.set(l*.14,.05,.08),t.add(v)}if(i.id==="maneki"){const l=wi(new yt(new tn(.2,.03,8,24),Ft(14100029)));l.rotation.x=Math.PI/2,l.position.y=.86,t.add(l);const u=Kt(.05,Ft(16106818,{metalness:.8,roughness:.2}));u.position.set(0,.8,.2),t.add(u);const h=Yt(.12,.12,.02,Ft(16106818,{metalness:.8,roughness:.2}));h.scale.set(.7,1,1.2),h.rotation.x=Math.PI/2,h.position.set(-.15,.55,.3),t.add(h)}return t.userData.head=r,t}function Ou(i){const t=new Qt;if(i==="deco_lantern"){const e=Kt(.2,Ft(14694959,{emissive:8392720,emissiveIntensity:.6}),1,1.3,1),n=Yt(.1,.1,.05,2236962);n.position.y=.27;const s=Yt(.1,.1,.05,2236962);s.position.y=-.27;const r=Yt(.005,.005,.5,2236962);r.position.y=.5;const a=new Vh(16744512,.8,3);t.add(e,n,s,r,a)}else if(i==="deco_noren"){const e=Yt(.015,.015,1.4,7028509);e.rotation.z=Math.PI/2,t.add(e);for(let n=0;n<3;n++){const s=he(.44,.55,.01,Ft(1914199,{side:ln}));s.position.set(-.46+n*.46,-.28,0),t.add(s);const r=Kt(.06,16777215,1,1,.2);r.position.set(-.46+n*.46,-.3,.01),t.add(r)}}else if(i==="deco_bonsai"){const e=Yt(.12,.09,.08,3100527);e.position.y=.04,t.add(e);const n=Yt(.02,.03,.18,5978654);n.position.y=.17,n.rotation.z=.3,t.add(n),[[0,.3,0,.1],[-.08,.26,.02,.07],[.08,.32,-.02,.07]].forEach(([s,r,a,o])=>{const c=Kt(o,4165439,1.3,.7,1);c.position.set(s,r,a),t.add(c)})}else if(i==="deco_maneki"){const e=qh({id:"maneki",color:16777215,ear:"pointy"});e.scale.setScalar(.35),t.add(e),t.userData.wave=e.userData.wave}return t}function Fu(i="#fff",t=!0){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,i),s.addColorStop(t?.4:.9,i),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new fa(e);return r.colorSpace=qe,r}const Ms=40;class Gv{constructor(t){this.canvas=t,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.dprMax=Math.min(window.devicePixelRatio||1,this.mobile?1.5:2),this.renderer=new L_({canvas:t,antialias:!(this.mobile&&window.devicePixelRatio>=2),powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dprMax),this.renderer.outputColorSpace=qe,this.renderer.toneMapping=eh,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.mobile?Fc:Qu,this.quality=2,this.perfN=0,this.perfT=0,this.perfCool=3,this.trauma=0,this.fovKick=0,this.baseFov=42,this.reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,this.shakeOn=!0,this.springs=[],this._v=new P,this.scene=new D_,this.scene.background=new Zt(16180168),this.scene.fog=new Kc(16180168,12,30),this.camera=new yn(42,1,.1,100),this.camPos=new P,this.camLook=new P,this.camTargetPos=new P,this.camTargetLook=new P,this.particles=[],this.tweens=[],this.anchors=[],this.clock=new xv,this.onCatTap=null,this.raycaster=new yv,this.lights(),this.buildKitchen(),this.buildRestaurant(),this.cat=new Sv,this.cat.root.position.set(-.35,0,-.6),this.kitchen.add(this.cat.root),this.texSteam=Fu("rgba(255,255,255,0.9)"),this.texSpark=Fu("#ffe680",!1),this.texHeart=new Tu().load(_a("ui_heart")),this.texCoin=new Tu().load(_a("ui_coin")),this.texHeart.colorSpace=this.texCoin.colorSpace=qe,this.steamOn=null,this.setView("kitchen",!0),this.resize(),window.addEventListener("resize",()=>this.resize()),t.addEventListener("pointerdown",e=>this.tap(e)),this.renderer.setAnimationLoop(()=>this.frame()),document.addEventListener("visibilitychange",()=>{document.hidden?this.renderer.setAnimationLoop(null):(this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.frame()))})}lights(){const t=new gv(16774368,9071184,1.1);this.scene.add(t);const e=new Pu(16770752,2);e.position.set(3,6,4),e.castShadow=!0,e.shadow.mapSize.set(this.mobile?512:1024,this.mobile?512:1024),e.shadow.camera.left=-4,e.shadow.camera.right=4,e.shadow.camera.top=4,e.shadow.camera.bottom=-2,e.shadow.bias=-5e-4,e.shadow.radius=4,this.sun=e,this.scene.add(e,e.target);const n=new Pu(12638463,.5);n.position.set(-4,3,2),this.scene.add(n)}buildKitchen(){const t=new Qt;this.kitchen=t,this.scene.add(t);const e=new yt(new xn(14,10),Ft(13016173,{roughness:.9}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let C=-6;C<7;C++){const R=new yt(new xn(.02,10),Ft(10779730));R.rotation.x=-Math.PI/2,R.position.set(C*.6,.002,0),t.add(R)}const n=new yt(new xn(14,6),Ft(16247506,{roughness:1}));n.position.set(0,3,-2.2),n.receiveShadow=!0,t.add(n);const s=new yt(new De(14,1,.05),Ft(9132604));s.position.set(0,.5,-2.17),t.add(s);const r=new yt(new xn(1.4,1),new Sn({map:this.skyTexture()}));r.position.set(1.4,2.4,-2.14),t.add(r);const a=new yt(new De(1.5,1.1,.04),Ft(7029286));a.position.set(1.4,2.4,-2.17),t.add(a);const o=new yt(new De(.04,1,.06),Ft(7029286));o.position.set(1.4,2.4,-2.1),t.add(o);const c=new yt(new De(1.4,.04,.06),Ft(7029286));c.position.set(1.4,2.4,-2.1),t.add(c),this.menuBoard=new yt(new xn(1.2,.9),new Sn({map:this.menuTexture([])})),this.menuBoard.position.set(-1.3,2.45,-2.17),t.add(this.menuBoard);const l=new yt(new De(1.8,.05,.3),Ft(9132604));l.position.set(-.2,1.75,-2.05),l.castShadow=!0,t.add(l);const u=[14263361,11037490,3807756,16115368,16777215,7127626];for(let C=0;C<6;C++){const R=new yt(new Rn(.07,.07,.16+C%2*.06,14),Ft(u[C],{roughness:.3}));R.position.set(-.95+C*.22,1.86+C%2*.03,-2),R.castShadow=!0,t.add(R)}const h=new yt(new Os(.3,.25,24,1,!0),Ft(2894892,{side:ln}));h.position.set(-.3,3,-.4),t.add(h);const d=new yt(new ri(.08),new Sn({color:16773568}));d.position.set(-.3,2.88,-.4),t.add(d);const p=new Vh(16766362,3,5,1.5);p.position.set(-.3,2.8,-.4),t.add(p);const g=new yt(new De(3.6,1,.9),Ft(7226409,{roughness:.7}));g.position.set(0,.5,0),g.castShadow=g.receiveShadow=!0,t.add(g);const v=new yt(new De(3.7,.08,1),Ft(14730138,{roughness:.5}));v.position.set(0,1.04,0),v.receiveShadow=!0,v.castShadow=!0,t.add(v),this.counterY=1.08;const m=new yt(new De(.6,.05,.5),Ft(3355443));m.position.set(-1.1,this.counterY+.02,-.1),t.add(m);const f=new yt(new tn(.15,.02,6,24),Ft(1118481));f.rotation.x=Math.PI/2,f.position.set(-1.1,this.counterY+.05,-.1),t.add(f),this.flame=new yt(new tn(.14,.02,6,24),new Sn({color:4891647})),this.flame.rotation.x=Math.PI/2,this.flame.position.set(-1.1,this.counterY+.07,-.1),this.flame.visible=!1,t.add(this.flame),this.stations={};const E=zv();E.position.set(.05,this.counterY,.05),t.add(E);const x=Hv();x.position.set(-1.1,this.counterY+.05,-.1),t.add(x);const S=Vv();S.position.set(-1.1,this.counterY+.05,-.1),S.visible=!1,t.add(S);const L=kv();L.position.set(-1.1,this.counterY+.05,-.1),L.visible=!1,t.add(L),this.stations={board:E,pot:x,pan:S,microwave:L},this.workItems=new Qt,t.add(this.workItems),this.servePos=new P(.75,this.counterY,.25),this.customerPos=new P(1.1,0,1),this.customerSpawn=new P(3.5,0,1.6),this.decoSlots={deco_lantern:[new P(1.4,2.9,-.6),t],deco_noren:[new P(-.2,3.35,-2.1),t],deco_bonsai:[new P(1.55,this.counterY,-.25),t],deco_maneki:[new P(.3,1.78,-2),t]},this.decoObjs={}}buildRestaurant(){const t=new Qt;t.position.x=Ms,this.rest=t,this.scene.add(t);const e=new yt(new xn(10,10),Ft(12165754,{roughness:1}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let a=-4;a<5;a++){const o=new yt(new xn(.03,10),Ft(7035450));o.rotation.x=-Math.PI/2,o.position.set(a*.9,.002,0),t.add(o)}const n=new yt(new xn(10,6),Ft(15721156,{roughness:1}));n.position.set(0,3,-2.5),t.add(n);for(let a=-5;a<=5;a++){const o=new yt(new De(.08,6,.06),Ft(5978654));o.position.set(a*.9,3,-2.45),t.add(o)}["おにぎり","味噌汁","親子丼","ラーメン","ビール"].forEach((a,o)=>{const c=new yt(new xn(.28,.9),new Sn({map:this.tagTexture(a)}));c.position.set(-1.2+o*.4,2.6,-2.4),t.add(c)});for(const a of[-1.8,1.8]){const o=Ou("deco_lantern");o.position.set(a,2.6,-1.8),t.add(o)}const r=new yt(new De(1.8,.08,1.1),Ft(8014378,{roughness:.5}));r.position.set(0,.75,.3),r.castShadow=r.receiveShadow=!0,t.add(r);for(const[a,o]of[[-.8,-.15],[.8,-.15],[-.8,.75],[.8,.75]]){const c=new yt(new De(.08,.75,.08),Ft(5978654));c.position.set(a,.375,o),t.add(c)}this.tableY=.79,this.tableItems=new Qt,t.add(this.tableItems),this.restCatPos=new P(-.95,0,-.55)}skyTexture(){const t=document.createElement("canvas");t.width=128,t.height=96;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,96);n.addColorStop(0,"#8fd3ff"),n.addColorStop(1,"#ffe3b0"),e.fillStyle=n,e.fillRect(0,0,128,96),e.fillStyle="#ffffffcc",[[30,30,14],[44,26,12],[90,40,10],[100,36,8]].forEach(([r,a,o])=>{e.beginPath(),e.arc(r,a,o,0,7),e.fill()}),e.fillStyle="#7a9a7a",e.beginPath(),e.moveTo(0,96),e.lineTo(40,60),e.lineTo(70,80),e.lineTo(100,55),e.lineTo(128,75),e.lineTo(128,96),e.fill();const s=new fa(t);return s.colorSpace=qe,s}tagTexture(t){const e=document.createElement("canvas");e.width=80,e.height=256;const n=e.getContext("2d");n.fillStyle="#f3e3c0",n.fillRect(0,0,80,256),n.strokeStyle="#5b3a1e",n.lineWidth=6,n.strokeRect(3,3,74,250),n.fillStyle="#2a1a10",n.font='bold 38px "Noto Serif JP","Yu Mincho",serif',n.textAlign="center";const s=[...t],r=Math.min(48,220/s.length);s.forEach((o,c)=>n.fillText(o==="ー"?"｜":o,40,44+c*r));const a=new fa(e);return a.colorSpace=qe,a}menuTexture(t){const e=document.createElement("canvas");e.width=320,e.height=240;const n=e.getContext("2d");n.fillStyle="#2f3b2f",n.fillRect(0,0,320,240),n.strokeStyle="#8b5a3c",n.lineWidth=14,n.strokeRect(0,0,320,240),n.fillStyle="#fff",n.font='bold 30px "Noto Sans JP",sans-serif',n.textAlign="center",n.fillText("お品書き",160,46),n.font='24px "Noto Sans JP",sans-serif',n.textAlign="left";const s=Math.min(36,145/Math.max(1,t.length));n.font=`${t.length>4?16:24}px "Noto Sans JP",sans-serif`,t.forEach((a,o)=>{n.fillStyle=a.locked?"#889":"#ffeeaa",n.fillText(a.locked?"？？？":a.name,22,82+o*s,205),n.textAlign="right",n.fillText(a.locked?"":a.price+"円",298,82+o*s),n.textAlign="left"});const r=new fa(e);return r.colorSpace=qe,r}setMenu(t){var e;(e=this.menuBoard.material.map)==null||e.dispose(),this.menuBoard.material.map=this.menuTexture(t),this.menuBoard.material.needsUpdate=!0}setView(t,e=!1){var s;const n=this.view;this.view=t,t==="kitchen"&&(this.camTargetPos.set(.2,2.75,5),this.camTargetLook.set(.2,1.55,0)),t==="cook"&&(this.camTargetPos.set(-.3,2.9,3.6),this.camTargetLook.set(-.4,1.35,-.1)),t==="serve"&&(this.camTargetPos.set(.6,2.5,4.2),this.camTargetLook.set(.5,1.4,.3)),t==="rest"&&(this.camTargetPos.set(Ms-.1,1.95,4),this.camTargetLook.set(Ms-.55,1.15,-.4)),t==="restTable"&&(this.camTargetPos.set(Ms,2.75,3.1),this.camTargetLook.set(Ms,.75,.3)),this.fitAspect(),e?(this.camPos.copy(this.camTargetPos),this.camLook.copy(this.camTargetLook)):n!==t&&(this.fovKick=7),(s=this.onView)==null||s.call(this,t,e)}fitAspect(){const t=this.camera.aspect||.5;t<.9&&this.view==="cook"&&(this.camTargetPos.x+=.9,this.camTargetLook.x+=.9);const e=Math.max(this.view==="cook"?.45:0,(.9/t-1)*1.15),n=this.camTargetPos.clone().sub(this.camTargetLook);this.camTargetPos.copy(this.camTargetLook).add(n.multiplyScalar(1+e))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,e*.17,t,e),this.camera.updateProjectionMatrix(),this.setView(this.view||"kitchen",!0)}catTo(t){t==="rest"?(this.rest.add(this.cat.root),this.cat.root.position.copy(this.restCatPos),this.cat.root.rotation.y=.6,this.cat.holding("pad")):(this.kitchen.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null))}catFace(t){const e={front:0,stove:-.6,board:.25,customer:.6}[t]??0;this.tween(this.cat.root.rotation,{y:e},.3);const n=t==="stove"?-.75:-.35;this.tween(this.cat.root.position,{x:n},.35)}useStation(t){this.stations.pot.visible=t!=="pan"&&t!=="microwave",this.stations.pan.visible=t==="pan",this.stations.microwave.visible=t==="microwave",this.station=t}clearWork(){this.workItems.clear(),this.stations.pot.userData.liquid.visible=!1,this.stations.pan.userData.liquid.visible=!1,this.flame.visible=!1,this.steamOn=null}placeIngredient(t,e,n){const s=Fv(t),a=this.station==="board"?new P(.05,this.counterY+.04,.05):new P(.05,this.counterY+.04,.05);return s.position.copy(a).add(new P((e-(n-1)/2)*.17,0,e%2*.08-.04)),this.popIn(s),this.workItems.add(s),s}showProp(t){const e={miso_soup:12946250,ramen_boil:15983544,pan_simmer:12089914,oyako_egg:16237873};if(e[t]){const s=this.stations[this.station==="pan"?"pan":"pot"];s.userData.liquid.visible=!0,s.userData.liquid.material.color.setHex(e[t]),this.flame.visible=!0,this.steamOn=s,this.workItems.children.forEach(r=>this.tween(r.scale,{x:.01,y:.01,z:.01},.25));return}const n=Bv(t);n.children.length&&(this.workItems.children.forEach(s=>this.tween(s.scale,{x:.01,y:.01,z:.01},.25)),n.position.set(.05,this.counterY+.04,.05),this.popIn(n),this.workItems.add(n))}heat(t){this.flame.visible=t,t&&(this.steamOn=this.stations[this.station==="pan"?"pan":"pot"])}microwaveLight(t){this.stations.microwave.userData.window.material.emissive.setHex(t?7160869:0)}styleDish(t,e){Ov(this.dish,t,e)}showDish(t){this.clearWork();const e=ku(t);return e.position.copy(this.servePos).add(new P(-.7,0,-.15)),e.scale.setScalar(1.6),this.popIn(e,1.6),this.kitchen.add(e),this.dish=e,this.burst(e.position.clone().add(new P(0,.3,0)),this.texSpark,24,.08),setTimeout(()=>this.punch(e,-.18),350),e}slideDishToCustomer(){this.dish&&(this.tween(this.dish.position,{x:this.servePos.x,z:this.servePos.z+.1},.5),this.tween(this.dish.scale,{x:1.3,y:1.3,z:1.3},.5))}removeDish(){if(!this.dish)return;const t=this.dish;this.dish=null,this.tween(t.scale,{x:.01,y:.01,z:.01},.3).then(()=>{var e;return(e=t.parent)==null?void 0:e.remove(t)})}async customerIn(t){this.customerOut(!0);const e=qh(t);return e.position.copy(this.customerSpawn),e.rotation.y=-1.2,this.kitchen.add(e),this.customer=e,await this.walk(e,this.customerPos,1.1),this.punch(e,-.22),this.tween(e.rotation,{y:-.9},.3),e}async customerOut(t=!1){var n,s;const e=this.customer;if(e){if(this.customer=null,t){(n=e.parent)==null||n.remove(e);return}this.tween(e.rotation,{y:1.6},.3),await this.walk(e,this.customerSpawn.clone().add(new P(1,0,.5)),1),(s=e.parent)==null||s.remove(e)}}walk(t,e,n){const s=t.position.clone();return this.tween({k:0},{k:1},n,r=>{t.position.lerpVectors(s,e,r.k),t.position.y=Math.abs(Math.sin(r.k*Math.PI*6))*.06})}customerJump(){const t=this.customer;t&&(this.punch(t,.3),this.tween({k:0},{k:1},.6,e=>{t.position.y=Math.abs(Math.sin(e.k*Math.PI*2))*.25}).then(()=>this.punch(t,-.25)),this.shake(.25),this.burst(t.position.clone().add(new P(0,1.5,0)),this.texHeart,6,.05,.25))}coinsFromCustomer(){this.customer&&this.burst(this.customer.position.clone().add(new P(0,1.2,0)),this.texCoin,10,.06,.2)}setDeco(t){for(const e in this.decoSlots){const n=t.includes(e);if(n&&!this.decoObjs[e]){const s=Ou(e),[r,a]=this.decoSlots[e];s.position.copy(r),a.add(s),this.popIn(s),this.decoObjs[e]=s}else!n&&this.decoObjs[e]&&(this.decoObjs[e].parent.remove(this.decoObjs[e]),delete this.decoObjs[e])}}restClear(){this.tableItems.clear()}restServe(t,e){this.restClear(),t.forEach((n,s)=>{for(let r=0;r<e;r++){const a=ku(n),o=(r-(e-1)/2)*.5+(s?.18:-.05);a.position.set(o,this.tableY,s?.25:.5),s&&a.scale.setScalar(1.1),this.popIn(a,a.scale.x),this.tableItems.add(a)}}),this.burst(new P(Ms,this.tableY+.4,.4),this.texSpark,20,.07)}shake(t=.3){!this.shakeOn||this.reduceMotion||(this.trauma=Math.min(1,this.trauma+t))}punch(t,e=.2){if(!t||this.reduceMotion)return;let n=this.springs.find(s=>s.obj===t);n||(n={obj:t,base:t.scale.clone(),x:0,v:0},this.springs.push(n)),n.v+=e*22}updateSprings(t){for(let e=this.springs.length-1;e>=0;e--){const n=this.springs[e];n.v+=(-180*n.x-12*n.v)*t,n.x+=n.v*t;const s=n.obj;if(Math.abs(n.x)<.001&&Math.abs(n.v)<.01){s.scale.copy(n.base),this.springs.splice(e,1);continue}s.scale.set(n.base.x*(1-n.x*.5),n.base.y*(1+n.x),n.base.z*(1-n.x*.5))}}perfWatch(t){if(t>.05||(this.perfT+=t,this.perfN++,this.perfN<90))return;const e=this.perfT/this.perfN;if(this.perfT=0,this.perfN=0,this.perfCool>0){this.perfCool--;return}e>.026&&this.quality>0&&(this.quality--,this.quality===1?(this.dprMax=Math.max(1,this.dprMax*.75),this.renderer.setPixelRatio(this.dprMax),this.resize()):(this.sun.castShadow=!1,this.renderer.shadowMap.enabled=!1,this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),this.perfCool=2)}burst(t,e,n=12,s=.08,r=.35){this.quality<2&&(n=Math.ceil(n/2)),n=Math.min(n,Math.max(0,70-this.particles.length));for(let a=0;a<n;a++){const o=new vu(new Sc({map:e,transparent:!0,depthWrite:!1}));o.position.copy(t),o.scale.setScalar(s*(1.5+Math.random())*(e===this.texSpark?1:2.5));const c=Math.random()*Math.PI*2;o.userData={v:new P(Math.cos(c)*r*Math.random()*2,.5+Math.random()*r*3,Math.sin(c)*r*Math.random()),life:1,g:-2},this.scene.add(o),this.particles.push(o)}}hearts(){const t=new P;this.cat.head.getWorldPosition(t),this.burst(t.add(new P(0,.4,0)),this.texHeart,4,.05,.15)}steamPuff(t){if(this.particles.length>60)return;const e=this._v;t.getWorldPosition(e);const n=new vu(new Sc({map:this.texSteam,transparent:!0,opacity:.5,depthWrite:!1}));n.position.copy(e).add(new P((Math.random()-.5)*.2,.25,(Math.random()-.5)*.2)),n.scale.setScalar(.15),n.userData={v:new P((Math.random()-.5)*.1,.4,0),life:1.4,g:0,grow:.25},this.scene.add(n),this.particles.push(n)}popIn(t,e=1){return t.scale.setScalar(.01),this.tween(t.scale,{x:e,y:e,z:e},.35,null,"back")}tween(t,e,n,s=null,r="out"){const a={};for(const o in e)a[o]=t[o];return new Promise(o=>this.tweens.push({obj:t,from:a,to:e,dur:n,t:0,onUpdate:s,ease:r,res:o}))}tap(t){const e=this.canvas.getBoundingClientRect(),n=new ot((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(n,this.camera),this.raycaster.intersectObject(this.cat.root,!0)[0]&&this.onCatTap&&this.onCatTap()}screenOf(t,e=0){const n=this._v;return t.getWorldPosition(n),n.y+=e,n.project(this.camera),{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,behind:n.z>1}}anchor(t,e,n){this.anchors.push({el:t,getObj:e,offsetY:n})}unanchor(t){this.anchors=this.anchors.filter(e=>e.el!==t)}frame(){var r,a;const t=this.clock.getDelta(),e=un()?0:Math.min(t,.05),n=1-Math.pow(.02,e);if(this.camPos.lerp(this.camTargetPos,n),this.camLook.lerp(this.camTargetLook,n),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.trauma>0){const o=this.trauma*this.trauma;this.camera.position.x+=(Math.random()-.5)*.16*o,this.camera.position.y+=(Math.random()-.5)*.16*o,this.camera.rotation.z+=(Math.random()-.5)*.035*o,this.trauma=Math.max(0,this.trauma-e*1.8)}this.fovKick>.01?(this.fovKick*=Math.pow(.004,e),this.camera.fov=this.baseFov+this.fovKick,this.camera.updateProjectionMatrix()):this.camera.fov!==this.baseFov&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()),this.sun.position.set(this.camLook.x+3,6,4),this.sun.target.position.set(this.camLook.x,0,0),this.cat.update(e),this.updateSprings(e),this.perfWatch(e);const s=this.clock.elapsedTime;this.customer&&(this.customer.userData.head.rotation.z=Math.sin(s*2)*.08,this.customer.userData.wave&&(this.customer.userData.wave.rotation.z=-.3+Math.sin(s*6)*.4)),(r=this.decoObjs.deco_maneki)!=null&&r.userData.wave&&(this.decoObjs.deco_maneki.userData.wave.rotation.z=-.3+Math.sin(s*4)*.4),this.decoObjs.deco_lantern&&(this.decoObjs.deco_lantern.rotation.z=Math.sin(s*.8)*.05),this.flame.visible&&this.flame.scale.setScalar(1+Math.sin(s*30)*.05),this.steamOn&&Math.random()<e*8&&this.steamPuff(this.steamOn);for(let o=this.tweens.length-1;o>=0;o--){const c=this.tweens[o];c.t+=e;let l=Math.min(c.t/c.dur,1);c.ease==="out"?l=1-Math.pow(1-l,3):c.ease==="back"&&(l=1+(1.70158+1)*Math.pow(l-1,3)+1.70158*Math.pow(l-1,2));for(const u in c.to)c.obj[u]=c.from[u]+(c.to[u]-c.from[u])*l;(a=c.onUpdate)==null||a.call(c,c.obj),c.t>=c.dur&&(this.tweens.splice(o,1),c.res())}for(let o=this.particles.length-1;o>=0;o--){const c=this.particles[o],l=c.userData;l.life-=e,l.v.y+=l.g*e,c.position.addScaledVector(l.v,e),l.grow&&c.scale.addScalar(l.grow*e),c.material.opacity=Math.max(0,Math.min(1,l.life))*(l.grow?.5:1),l.life<=0&&(this.scene.remove(c),c.material.dispose(),this.particles.splice(o,1))}if(this.anchors.length)for(const o of this.anchors){const c=o.getObj();if(!c){o.el.style.opacity=0;continue}const l=this.screenOf(c,o.offsetY),u=o.el.firstElementChild,h=12,d=document.querySelector("#hud.show"),p=document.querySelector("#taskbar.show"),g=Math.max((d==null?void 0:d.getBoundingClientRect().bottom)||0,(p==null?void 0:p.getBoundingClientRect().bottom)||0,h)+12,v=document.querySelector("#panel.show"),m=v==null?void 0:v.getBoundingClientRect(),f=innerWidth>innerHeight&&innerHeight<=500&&m&&!v.classList.contains("hub-panel"),E=f?m.left-h:innerWidth,x=m&&!f?m.top-12:innerHeight-h;u.style.maxWidth=`${Math.min(360,E-h*2)}px`,u.style.maxHeight=`${Math.max(44,x-g)}px`;const S=u.offsetWidth,L=u.offsetHeight,C=Math.max(S/2+h,Math.min(E-S/2-h,l.x)),R=Math.max(g+L,Math.min(x,l.y));u.style.setProperty("--tail-x",`${Math.max(16,Math.min(S-16,l.x-C+S/2))}px`),o.el.style.opacity=l.behind?0:1,o.el.style.transform=`translate(${C}px, ${R}px)`}this.renderer.render(this.scene,this.camera)}}const sl=/([一-鿿々〆ヶ]+)\{([^}]+)\}/g;function jv(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function hn(i){return jv(i).replace(/\^/g,"").replace(/ /g,"").replace(sl,"<ruby>$1<rt>$2</rt></ruby>")}function Wv(i){return i.replace(sl,"$1").replace(/\^/g,"").replace(/ /g,"")}function Xv(i,{forSpeech:t=!1}={}){let e=i.replace(sl,"$2");return t&&(e=e.replace(/\^は/g,"わ").replace(/\^へ/g,"え")),e}function Yh(i){return Wv(i)}const $v=96;function qv(i){return i.replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-$v))}const Bu={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"o",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ゔ:"vu"},To={ゃ:"a",ゅ:"u",ょ:"o"},zu={a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"};function Yv(i){let t=qv(Xv(i)),e="";for(let n=0;n<t.length;n++){const s=t[n],r=t[n+1];if(s==="^"){const o=t[n+1];if(o==="は"){e+="wa",n++;continue}if(o==="へ"){e+="e",n++;continue}continue}if(s==="っ"){const o=Bu[r];o&&(e+=o.startsWith("ch")?"t":o[0]);continue}if(s==="ー"){const o=e[e.length-1];zu[o]&&(e=e.slice(0,-1)+zu[o]);continue}let a=Bu[s];if(a===void 0){e+=s==="、"?", ":s==="。"?". ":s==="？"?"?":s==="！"?"!":s;continue}if(To[r]){const o=a.slice(0,-1);o==="sh"||o==="ch"||o==="j"?a=o+To[r]:a=o+"y"+To[r],n++}s==="ん"&&r&&/[あいうえおやゆよ]/.test(r)&&(a="n'"),e+=a}return e.replace(/\s+/g," ").trim()}function rl(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Kh(i,t){return`${t}_${rl(Yh(i))}`}const Jh="catcook_v1",Cc={v:1,started:!1,level:1,xp:0,coins:0,served:0,shifts:0,firstDay:null,lastDay:null,streak:0,daysPlayed:0,lastGift:null,affection:0,lastPet:null,owned:["hat_chef"],wear:{hat:"hat_chef",neck:null},deco:[],stars:{},cooked:{},srs:{},restaurantDone:0,chapter:"home",chapterShifts:{},regularVisits:{},darkSecrets:{},darkRating:3,darkBest:0,settings:{furigana:!0,romaji:!0,yue:!0,subs:"show",bgm:!0,sfx:!0,shake:!0},jpLevel:null,lvStats:{},lvNudgeDismissed:-1,achievements:[]};let de=Kv();function Kv(){try{const i=localStorage.getItem(Jh);if(i)return Zh(structuredClone(Cc),JSON.parse(i))}catch{}return structuredClone(Cc)}function Zh(i,t){for(const e in t)t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&i[e]&&typeof i[e]=="object"?Zh(i[e],t[e]):i[e]=t[e];return i}function Me(){try{localStorage.setItem(Jh,JSON.stringify(de))}catch{}}function at(){return de}function Jv(){de=structuredClone(Cc),Me()}function Fs(){const i=new Date;return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`}function Zv(i,t){const e=i.split("-").map(Number),n=t.split("-").map(Number),s=new Date(e[0],e[1]-1,e[2]),r=new Date(n[0],n[1]-1,n[2]);return Math.round((r-s)/864e5)}function Qv(){const i=Fs(),t={newDay:!1,streakBroken:!1,gift:0};return de.firstDay||(de.firstDay=i),de.lastDay!==i&&(t.newDay=!0,de.lastDay&&Zv(de.lastDay,i)===1?de.streak+=1:(de.lastDay&&de.streak>1&&(t.streakBroken=!0),de.streak=1),de.lastDay=i,de.daysPlayed+=1),de.lastGift!==i&&de.started&&(t.gift=30+Math.min(de.streak,7)*10,de.lastGift=i,de.coins+=t.gift),Me(),t}function tx(){const i=new Date;return new Date(i.getFullYear(),i.getMonth(),i.getDate()+1)-i}const Hu=[0,30,80,160,270,420,620,880,1200,1600,2100];function Pc(i){return Hu[Math.min(i,Hu.length-1)]??i*500}function al(i){de.xp+=i;let t=0;for(;de.xp>=Pc(de.level);)de.level++,t++;return Me(),t}const ex=[0,2,10,60*12,60*24*2,60*24*5];function Bn(i){de.srs[i]||(de.srs[i]={box:0,due:Date.now(),seen:0,right:0,wrong:0}),de.srs[i].seen++,Me()}function ke(i,t){const e=de.srs[i]||(de.srs[i]={box:0,due:0,seen:1,right:0,wrong:0});t?(e.box=Math.min(e.box+1,5),e.right++):(e.box=0,e.wrong++),e.due=Date.now()+ex[e.box]*6e4,Me()}function Qh(i){var n;const t=Date.now(),e=i.map(s=>{const r=de.srs[s];if(!r)return{id:s,s:50+Math.random()*10};const a=(t-r.due)/6e4;return{id:s,s:(a>=0?100+Math.min(a,60):-10)+(5-r.box)*8+r.wrong*3+Math.random()*10}});return e.sort((s,r)=>r.s-s.s),(n=e[0])==null?void 0:n.id}let zt=null,Ss,ur,ai,pa;const Ao=new Map;let Ps=null;const td=.26,nx=.08;let br=null,ma=null;function ix(i){ma=i}function sx(){if(zt){zt.state==="suspended"&&zt.resume();return}zt=new(window.AudioContext||window.webkitAudioContext),Ss=zt.createGain(),Ss.gain.value=.9,Ss.connect(zt.destination),ur=zt.createGain(),ur.gain.value=.5,ur.connect(Ss),ai=zt.createGain(),ai.gain.value=0,ai.connect(Ss),ox(),pa=zt.createGain(),pa.gain.value=1,pa.connect(Ss),hx(),document.addEventListener("visibilitychange",()=>{zt&&(document.hidden?zt.suspend():zt.resume())})}async function ed(i){if(Ao.has(i))return Ao.get(i);const t=fetch(`./audio/${i}.mp3`).then(e=>{if(!e.ok)throw new Error("404");return e.arrayBuffer()}).then(e=>zt.decodeAudioData(e)).catch(()=>null);return Ao.set(i,t),t}function ga(i,t){return zt?ed(Kh(i,t)):Promise.resolve(null)}async function Ie(i,t="word",e=1){if(!zt)return;rx();const n=await ed(Kh(i,t));if(n){const s=zt.createBufferSource();return s.buffer=n,s.playbackRate.value=e,s.connect(pa),Vu(!0),s.start(),Ps=s,new Promise(r=>{s.onended=()=>{Vu(!1),Ps===s&&(Ps=null),r()}})}if("speechSynthesis"in window){const s=new SpeechSynthesisUtterance(Yh(i));return s.lang="ja-JP",s.rate=.9*e,speechSynthesis.speak(s),new Promise(r=>{s.onend=r,setTimeout(r,4e3)})}}function rx(){if(Ps){try{Ps.stop()}catch{}Ps=null}"speechSynthesis"in window&&speechSynthesis.cancel()}function Vu(i){!ai||!at().settings.bgm||ai.gain.setTargetAtTime(i?nx:td,zt.currentTime,.1)}function Ne(i,t,{type:e="sine",vol:n=.3,at:s=0,slide:r=0,out:a=null}={}){const o=zt.currentTime+s,c=zt.createOscillator(),l=zt.createGain();c.type=e,c.frequency.setValueAtTime(i,o),r&&c.frequency.exponentialRampToValueAtTime(i*r,o+t),l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(.001,o+t),c.connect(l),l.connect(a||ur),c.start(o),c.stop(o+t+.05)}function Ro(i,{vol:t=.3,freq:e=2e3,q:n=1,at:s=0,type:r="bandpass"}={}){const a=zt.currentTime+s,o=Math.floor(zt.sampleRate*i),c=zt.createBuffer(1,o,zt.sampleRate),l=c.getChannelData(0);for(let p=0;p<o;p++)l[p]=(Math.random()*2-1)*(1-p/o);const u=zt.createBufferSource();u.buffer=c;const h=zt.createBiquadFilter();h.type=r,h.frequency.value=e,h.Q.value=n;const d=zt.createGain();d.gain.value=t,u.connect(h),h.connect(d),d.connect(ur),u.start(a)}function ct(i){if(ma==null||ma(i),!(!zt||!at().settings.sfx))switch(i){case"tap":Ne(880,.08,{type:"triangle",vol:.2});break;case"good":Ne(784,.12,{type:"triangle"}),Ne(1175,.2,{type:"triangle",at:.08});break;case"perfect":[784,988,1175,1568].forEach((t,e)=>Ne(t,.18,{type:"triangle",vol:.25,at:e*.06}));break;case"bad":Ne(220,.25,{type:"square",vol:.12,slide:.7});break;case"coin":Ne(1319,.08,{type:"square",vol:.1}),Ne(1760,.25,{type:"square",vol:.1,at:.07});break;case"chop":Ro(.08,{vol:.6,freq:3e3,q:.8}),Ne(140,.06,{vol:.3});break;case"pop":Ne(500,.1,{slide:2,vol:.25});break;case"bubble":Ne(300+Math.random()*300,.08,{slide:1.8,vol:.12});break;case"whoosh":Ro(.3,{vol:.25,freq:800,q:.5});break;case"boil":for(let t=0;t<4;t++)Ne(200+Math.random()*200,.1,{slide:2,vol:.1,at:t*.07});break;case"level":[523,659,784,1047,1319,1568].forEach((t,e)=>Ne(t,.3,{type:"triangle",vol:.22,at:e*.09}));break;case"meow":Ne(700,.35,{type:"sawtooth",vol:.06,slide:1.4}),Ne(980,.3,{type:"sine",vol:.1,at:.15,slide:.6});break;case"purr":for(let t=0;t<10;t++)Ro(.05,{vol:.25,freq:120,q:2,at:t*.07,type:"lowpass"});break;case"ding":Ne(2093,.9,{type:"sine",vol:.22}),Ne(2637,.7,{type:"sine",vol:.12,at:.02});break;case"door":Ne(1568,.5,{vol:.12}),Ne(1975,.6,{vol:.1,at:.15});break;case"rare":[1047,1319,1568,2093,1568,2093].forEach((t,e)=>Ne(t,.25,{type:"triangle",vol:.2,at:e*.07}));break}}const nr=i=>440*Math.pow(2,(i-69)/12),ax=[{root:38,chord:[62,66,69,73],mel:[74,76,78,81,73]},{root:35,chord:[59,62,66,69],mel:[74,76,78,81,71]},{root:43,chord:[59,62,67,71],mel:[74,71,76,78,79]},{root:45,chord:[62,64,67,69],mel:[76,74,69,81,79]}],nd={kitchen:{bpm:78,arp:.55,mel:.5,perc:0,pad:1,oct:0},cook:{bpm:102,arp:.8,mel:.55,perc:1,pad:.6,oct:0},rest:{bpm:68,arp:.35,mel:.6,perc:0,pad:1.2,oct:0}};let Gu="kitchen",id="kitchen",Oi=0,Co=0,ju=[];function ox(){const i=zt.createBiquadFilter();i.type="lowpass",i.frequency.value=3400,i.Q.value=.3;const t=zt.createGain();t.gain.value=.85;const e=zt.createConvolver(),n=Math.floor(zt.sampleRate*1.8),s=zt.createBuffer(2,n,zt.sampleRate);for(let a=0;a<2;a++){const o=s.getChannelData(a);for(let c=0;c<n;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/n,2.6)}e.buffer=s;const r=zt.createGain();r.gain.value=.35,i.connect(t),t.connect(ai),i.connect(e),e.connect(r),r.connect(ai),br=i}function Wu(i,t,e,n){for(const[s,r,a,o]of[[1,1,"triangle",e],[2,.25,"sine",e*.5],[4,.06,"sine",e*.2]]){const c=zt.createOscillator(),l=zt.createGain();c.type=a,c.frequency.value=i*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(n*r,t+.008),l.gain.exponentialRampToValueAtTime(5e-4,t+o),c.connect(l),l.connect(br),c.start(t),c.stop(t+o+.05)}}function cx(i,t,e,n){const s=zt.createOscillator(),r=zt.createGain();s.type="sine",s.frequency.value=i,s.detune.value=(Math.random()-.5)*8,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(n,t+e*.35),r.gain.linearRampToValueAtTime(5e-4,t+e),s.connect(r),r.connect(br),s.start(t),s.stop(t+e+.05)}function Po(i,t,e,n){const s=zt.createOscillator(),r=zt.createGain();s.type="sine",s.frequency.value=i,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(n,t+.02),r.gain.exponentialRampToValueAtTime(5e-4,t+e),s.connect(r),r.connect(br),s.start(t),s.stop(t+e+.05)}function lx(i,t,e=!1){const n=zt.createOscillator(),s=zt.createGain();n.type="sine",n.frequency.setValueAtTime(e?1500:1e3,i),n.frequency.exponentialRampToValueAtTime(e?900:600,i+.05),s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(5e-4,i+.07),n.connect(s),s.connect(br),n.start(i),n.stop(i+.1)}function ux(i){const t=nd[Gu],e=30/t.bpm,n=Math.floor(Co/8)%4,s=Co%8,r=ax[n];if(s===0&&(Gu=id,Po(nr(r.root),i,e*7,.55),r.chord.forEach((o,c)=>cx(nr(o-12),i+c*.03,e*8.5,.07*t.pad))),s===4&&Po(nr(r.root+7),i,e*3,.35),[0,2,3,5,6,7].includes(s)&&Math.random()<t.arp+(s===0?1:0)){const o=r.chord[(s*3+n)%r.chord.length];Wu(nr(o),i,e*4,.16)}if(s%2===0||s===3||s===7){let o=null;n%2===0?((Math.random()<t.mel||s===0)&&(o=r.mel[Math.floor(Math.random()*r.mel.length)]),ju[s]=o):(o=ju[s]??null,o!=null&&Math.random()<.2&&(o=r.mel[Math.floor(Math.random()*r.mel.length)])),o!=null&&Wu(nr(o),i,e*3,.2)}return t.perc&&(s%2===1&&lx(i,.09,s===3||s===7),(s===0||s===4)&&Po(70,i,.12,.5)),Co++,e}function hx(){Oi=zt.currentTime+.2,setInterval(()=>{if(!document.hidden)for(Oi<zt.currentTime-.5&&(Oi=zt.currentTime+.1);Oi<zt.currentTime+.25;)at().settings.bgm?Oi+=ux(Oi):Oi+=.25},80),sd(at().settings.bgm)}function sd(i){ai&&ai.gain.setTargetAtTime(i?td:0,zt.currentTime,.3)}function dx(i){nd[i]&&(id=i)}const re=(i,t=document)=>t.querySelector(i);function b(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))s==="class"?n.className=r:s==="html"?n.innerHTML=r:s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r);for(const s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return Ta(n),n}function ol(){const i=at().settings;document.body.classList.toggle("no-furi",!i.furigana),document.body.classList.toggle("no-roma",!i.romaji),document.body.classList.toggle("no-yue",!i.yue),document.body.classList.toggle("large-text",!!i.largeText)}function Vn(i,{yue:t="",voice:e="word",size:n="",hidden:s=!1,autoplay:r=!1}={}){const a=b("div",{class:`jp ${n}`}),o=b("div",{class:"jp-text",html:hn(i)}),c=b("div",{class:"jp-roma"},Yv(i)),l=t?b("div",{class:"jp-yue"},t):null,u=b("button",{class:"spk","aria-label":"再聽",onclick:d=>{d.stopPropagation(),ct("tap"),Ie(i,e)}},"🔊"),h=b("div",{class:"jp-body"},o,c,l);return a.append(h,u),s&&(a.classList.add("veiled"),h.addEventListener("click",()=>a.classList.remove("veiled"),{once:!0})),r&&Ie(i,e),a}function li(){const i=at();re("#lv").textContent=i.level;const t=Pc(i.level-1),e=Pc(i.level);re("#xpbar i").style.width=`${Math.max(0,Math.min(1,(i.xp-t)/(e-t)))*100}%`,re("#coins b").textContent=i.coins,re("#streak b").textContent=i.streak,re("#streak").classList.toggle("hot",i.streak>=2)}function rd(i){re("#hud").classList.toggle("show",i)}function bn(...i){const t=re("#panel");return t.innerHTML="",t.classList.remove("hub-panel","sneak-panel"),t.scrollTop=0,t.append(...i.flat().filter(e=>e!=null&&e!==!1)),t.classList.add("show"),t}function Mi(){re("#panel").classList.remove("show")}function nn(i,{title:t=null,cols:e=1,extra:n=null}={}){return new Promise(s=>{const r=b("div",{class:`choices cols${e}`});let a=!1;i.forEach(o=>{const c=b("button",{class:`choice ${o.cls||""}`,type:"button"});o.el?c.append(o.el):(c.innerHTML=o.label,Ta(c)),c.addEventListener("click",()=>{a||(a=!0,ct("tap"),s({value:o.value,button:c,grid:r}))}),r.append(c)}),bn(...[t,n,r].filter(Boolean))})}function cl(i="繼續 ▶",...t){return new Promise(e=>{const n=b("button",{class:"btn primary big",onclick:()=>{ct("tap"),e()}},i);bn(...t,n)})}const Lc=new Set;function pe(i,t,e,n,s,{hidden:r=!1,play:a=!0}={}){fe(t);const o=b("div",{class:`bubble ${t}`});o.append(Vn(e,{yue:n,voice:s,hidden:r}));const c=b("div",{class:"bubble-anchor","data-who":t},o);re("#bubbles").append(c),Lc.add(c),c._world=i;const l=t==="cat"?()=>i.cat.head:()=>{var u;return(u=i.customer)==null?void 0:u.userData.head};return i.anchor(c,l,t==="cat"?.75:.5),requestAnimationFrame(()=>o.classList.add("in")),a?(t==="cat"&&i.cat.setMode("talk"),Ie(e,s).then(async()=>{await se(),t==="cat"&&i.cat.mode==="talk"&&i.cat.setMode("idle")})):Promise.resolve()}function fe(i){for(const t of[...Lc])(!i||t.dataset.who===i)&&(t._world.unanchor(t),t.remove(),Lc.delete(t))}function Ve(i,t=2600){const e=re("#hint");e.textContent=i,e.classList.add("show"),clearTimeout(e._t),t&&(e._t=setTimeout(()=>e.classList.remove("show"),t))}function fx(){re("#hint").classList.remove("show")}function Ce(i,t=2200,e=""){const n=b("div",{class:`toast ${e}`,html:i});re("#toasts").append(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+500)}function me(i,t=""){const e=b("div",{class:`popword ${t}`},i);document.body.append(e),setTimeout(()=>e.remove(),900)}function Gs(i,t={x:innerWidth/2,y:innerHeight*.4}){const e=re("#coins").getBoundingClientRect(),n=Math.min(12,Math.max(3,Math.round(i/15)));for(let s=0;s<n;s++){const r=b("div",{class:"flycoin"},"🪙");r.style.left=t.x+"px",r.style.top=t.y+"px",document.body.append(r);const a=(Math.random()-.5)*120,o=-40-Math.random()*60;r.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${a}px,${o}px) scale(1.3)`,offset:.35},{transform:`translate(${e.x+10-t.x}px,${e.y+8-t.y}px) scale(0.6)`}],{duration:700+s*60,easing:"cubic-bezier(.5,0,.6,1)"}).onfinish=()=>{r.remove(),ct("coin"),re("#coins").classList.remove("bump"),re("#coins").offsetWidth,re("#coins").classList.add("bump")}}}function ui(i,t,{onClose:e=null,wide:n=!1,footer:s=null}={}){const r=re("#modal");va("modal",!0),r.innerHTML="";let a=!1;const o=()=>{a||(a=!0,r.classList.remove("show"),va("modal",!1),e==null||e())};r._close=o;const c=b("div",{class:`card ${n?"wide":""}`},b("div",{class:"card-head"},b("h2",{html:i}),b("button",{class:"x","aria-label":"關閉",onclick:()=>{ct("tap"),o()}},"✕")),b("div",{class:"card-body"},t),s?b("div",{class:"card-footer"},s):null);return Ta(c),r.append(c),r.classList.add("show"),r.onclick=l=>{l.target===r&&o()},{close:o,card:c}}function ad(){var i,t;(t=(i=re("#modal"))._close)==null||t.call(i)}function px(i,t){const e=re("#taskbar");e.replaceChildren(b("button",{class:"mission-btn",onclick:()=>ui("📋 今次任務",b("p",{class:"mission-details"},t))},`📋 ${i} · 詳情`)),e.classList.add("show")}function sa(i){const t=re("#fade");return t.classList.add("on"),se(520).then(async()=>{await i(),await se(80),t.classList.remove("on"),await se(520)})}function Ge(i){i=[...i];for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}const Mn=i=>i[Math.floor(Math.random()*i.length)],Dn=[{id:"onigiri",dish:"onigiri",price:120,unlock:{level:1},station:"board",serves:"2 個",time:"10 分鐘",ingredients:[["gohan","熱白飯 1 碗（約 150g）"],["shio","鹽 少少（一撮）"],["umeboshi","酸梅 1 粒（或三文魚碎）"],["nori","紫菜 1 塊（剪半）"],["mizu","凍水 少少（濕手用）"]],howto:["雙手沾水，再喺手掌抹少少鹽。","攞一半飯放手心，中間整個窿，放酸梅。","用另一半飯蓋住，雙手合埋輕輕揸，轉 3–4 次整成三角形。","唔好揸太實！外實內鬆先好食。","最後包上紫菜。想紫菜脆，食之前先包。"],steps:[{type:"pick",need:["gohan","shio","umeboshi","nori"],decoys:["tofu","tamago","negi"],jp:"まず 材料{ざいりょう}を 選{えら}んでにゃ",yue:"首先揀材料喵",tip:"聽讀音，揀啱嘅材料。"},{type:"mash",taps:10,time:5,anim:"press",verb:"nigiru",add:["onigiri_raw"],jp:"三角{さんかく}に 握{にぎ}って",yue:"揸成三角形",tip:"狂撳！但真係整嘅時候要輕力，外實內鬆。"},{type:"timing",rounds:1,zone:.24,anim:"wrap",verb:"noseru",jp:"海苔{のり}を 巻{ま}いて",yue:"包紫菜",tip:"撳準！紫菜要喺中間。"}]},{id:"misoshiru",dish:"misoshiru",price:150,unlock:{level:2},station:"pot",serves:"2 碗",time:"10 分鐘",ingredients:[["mizu","水 400ml"],["dashi","日式高湯粉 1 茶匙（或昆布 + 木魚自己煲）"],["tofu","豆腐 半盒（約 150g）"],["wakame","乾海帶芽 1 湯匙"],["miso","味噌 2 湯匙"],["negi","蔥 少少"]],howto:["水同高湯粉落煲，中火煮滾。","豆腐切 1.5cm 粒，同海帶芽一齊落，煮 1 分鐘。","熄火！用湯殼盛味噌，喺湯入面慢慢攪溶。","重點：味噌落咗之後唔好再滾，滾咗香味會走晒。","最後灑蔥花。"],steps:[{type:"pick",need:["dashi","tofu","wakame","miso"],decoys:["gohan","shoyu","chashu"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"高湯係日本菜嘅靈魂。"},{type:"timing",rounds:3,zone:.2,anim:"chop",verb:"kiru",add:["tofu_cubes"],jp:"豆腐{とうふ}を 切{き}って",yue:"切豆腐",tip:"撳準綠色位，切 3 刀。"},{type:"hold",zone:[.55,.8],anim:"stir",verb:"tokasu",add:["miso_soup"],jp:"火{ひ}を 止{と}めて、味噌{みそ}を 溶{と}かして",yue:"熄火，溶味噌",tip:"長按加熱，喺綠色位放手。太熱 = 滾瀉，味噌香味會走！"}]},{id:"oyakodon",dish:"oyakodon",price:280,unlock:{level:3},station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["toriniku","雞髀肉 100g"],["tamanegi","洋蔥 1/4 個"],["tamago","雞蛋 2 隻"],["dashi","高湯 60ml"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"],["satou","砂糖 1 茶匙"],["gohan","熱白飯 1 碗"]],howto:["雞肉切一口大小，洋蔥切薄片。","細平底鑊落高湯、豉油、味醂、砂糖，煮滾。","落洋蔥同雞肉，中火煮 5 分鐘至熟。","雞蛋輕輕打散（唔好打太勻），淋 2/3 落去，冚蓋 30 秒。","再淋餘下蛋液，半熟就熄火，即刻滑落飯面。"],steps:[{type:"pick",need:["toriniku","tamanegi","tamago","shoyu"],decoys:["tofu","nori","moyashi"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"親子 = 雞（親）+ 蛋（子），幾得意。"},{type:"timing",rounds:3,zone:.18,anim:"chop",verb:"kiru",add:["chicken_pieces"],jp:"鶏肉{とりにく}を 切{き}って",yue:"切雞肉",tip:"一口大小就啱。"},{type:"stir",turns:3,anim:"stir",verb:"niru",add:["pan_simmer"],jp:"だしで 煮{に}て",yue:"用高湯煮",tip:"手指喺圓圈度轉圈！"},{type:"hold",zone:[.4,.62],anim:"pour",verb:"tamago",add:["oyako_egg"],jp:"卵{たまご}を 入{い}れて、半熟{はんじゅく}に",yue:"落蛋，要半熟",tip:"半熟先好食，唔好煮過龍！"}]},{id:"ramen",dish:"ramen",price:380,unlock:{day:2},station:"pot",serves:"1 碗",time:"20 分鐘（簡易版）",ingredients:[["men","拉麵（新鮮或乾麵）1 份"],["dashi","雞湯 300ml"],["shoyu","豉油 2 湯匙"],["mirin","味醂 1 茶匙"],["ninniku","蒜頭 1 粒（磨蓉）"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥、紫菜 適量"]],howto:["湯底：雞湯加蒜蓉煮滾，熄火。","碗底先落豉油同味醂（呢個叫「タレ」）。","另一煲大滾水烚麵，跟包裝時間（通常 1–2 分鐘）。","熱湯沖入碗攪勻，麵瀝乾放入碗。","鋪叉燒、半隻溏心蛋（滾水 6.5 分鐘再浸冰水）、蔥同紫菜。"],steps:[{type:"pick",need:["men","chashu","tamago","negi"],decoys:["tofu","umeboshi","satou"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"拉麵嘅配料叫「トッピング」。"},{type:"hold",zone:[.6,.85],anim:"stir",verb:"yuderu",add:["ramen_boil"],jp:"麺{めん}を ゆでて",yue:"烚麵",tip:"水要大滾！"},{type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"スープを 混{ま}ぜて",yue:"攪勻湯",tip:"湯同タレ要撈勻。"},{type:"timing",rounds:2,zone:.18,anim:"chop",verb:"noseru",jp:"トッピングを のせて",yue:"放配料",tip:"靚唔靚就睇呢步！"}]}];Dn.push(...jh,...Ts);const Xu=[{id:"tempura",emoji:"🍤",jp:"天{てん}ぷら",yue:"天婦羅"},{id:"curry",emoji:"🍛",jp:"カレーライス",yue:"咖喱飯"},{id:"gyoza",emoji:"🥟",jp:"餃子{ぎょうざ}",yue:"餃子"},{id:"tamagoyaki",emoji:"🍳",jp:"卵焼{たまごや}き",yue:"玉子燒"}];function mx(i){return Dn.find(t=>t.id===i)}const Bs=[{id:0,icon:"🌱",name:"零基礎",desc:"假名都未識"},{id:1,icon:"🌿",name:"初學",desc:"識假名、簡單字（N5–N4）"},{id:2,icon:"🌳",name:"N3 或以上",desc:"想練聽力同實用句子"}],$u=["usagi","kuma"],Ue=()=>Math.max(0,Math.min(2,at().jpLevel??0)),od=i=>$u[parseInt(rl(i),36)%$u.length],Qe=(i,t)=>t.lv>0||t.hi?od(i):i;function ll(){const i=Ue();return i===0||Math.random()<.6?i:Math.floor(Math.random()*i)}const Ji=new Set,cd=()=>Ji.clear(),qu=i=>i.key||i.jp;function Gn(i,t=Math.random){const e=Ue(),n=i.filter(l=>(l.lv??0)<=e),s=ll(),r=n.filter(l=>(l.lv??0)===s),a=l=>l.filter(u=>!Ji.has(qu(u))),o=[a(r),a(n),r,n].find(l=>l.length)||i,c=o[Math.floor(t()*o.length)];return Ji.add(qu(c)),c}function wr(i,t){var r;if(i!==Ue())return;const e=(r=at()).lvStats||(r.lvStats={}),n=e[i]||(e[i]={right:0,total:0,days:[]});n.total++,t&&n.right++;const s=Fs();n.days||(n.days=[]),n.days.includes(s)||n.days.push(s),Me()}function gx(){var e,n;const i=Ue();if(i>=2)return null;const t=(e=at().lvStats)==null?void 0:e[i];return!t||t.total<15||t.right/t.total<.8||(((n=t.days)==null?void 0:n.length)??0)<2||(at().lvNudgeDismissed??-1)>=i?null:{from:i,to:i+1,rate:Math.round(t.right/t.total*100),total:t.total}}const _x=[{lv:0,jp:"{dish}を ください",yue:"唔該畀{dishYue}我"},{lv:0,jp:"{dish}を お願{ねが}いします",yue:"麻煩你，{dishYue}"},{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,jp:"すみません、{dish}を ください",yue:"唔好意思，我要{dishYue}"},{lv:1,jp:"すみません、 {dish}は ありますか？",yue:"唔好意思，有冇{dishYue}？"},{lv:1,jp:"{dish}を お願{ねが}いできますか？",yue:"可唔可以幫我整{dishYue}？"},{lv:2,jp:"今日{きょう}は {dish}に しようかな",yue:"今日食{dishYue}好喇"},{lv:2,jp:"{dish}って、 すぐ できますか？",yue:"{dishYue}係咪好快有得食？"},{lv:2,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],vx=[{lv:0,jp:"{dish}を {num} ください",yue:"唔該{numYue}{dishYue}"},{lv:0,jp:"{dish}、{num} お願{ねが}いします",yue:"{dishYue}，{numYue}，唔該"},{lv:1,jp:"{dish}を {num} お願{ねが}いできますか？",yue:"可唔可以幫我整{numYue}{dishYue}？"},{lv:2,jp:"{dish}は {num}で お願{ねが}いします",yue:"{dishYue}要{numYue}，唔該"}],Vi={great:[{lv:0,jp:"おいしい！",yue:"好好食！"},{lv:0,jp:"すごく おいしいです！",yue:"超好食！"},{lv:0,jp:"最高{さいこう}！",yue:"一流！"},{lv:1,jp:"味{あじ}が ちょうど いいです",yue:"味道啱啱好"},{lv:1,jp:"本当{ほんとう}に おいしいです！",yue:"真係好好食！"},{lv:1,jp:"これ、 大好{だいす}きな 味{あじ}です",yue:"呢個係我最鍾意嘅味道"},{lv:2,jp:"優{やさ}しい 味{あじ}で、 ほっとしますね",yue:"味道好溫和，食完好放鬆"},{lv:2,jp:"見{み}た目{め}も きれいで、 食{た}べるのが もったいないです",yue:"賣相咁靚，食咗好唔捨得"},{lv:2,jp:"一口{ひとくち}食{た}べただけで、 幸{しあわ}せな 気持{きも}ちに なりました",yue:"食一啖已經覺得好幸福"}],ok:[{lv:0,jp:"うん、おいしいです",yue:"嗯，幾好食"},{lv:0,hi:!0,jp:"おいしいです",yue:"好食"},{lv:1,jp:"まあまあ おいしいです",yue:"幾好食，都ok"},{lv:1,jp:"なかなか おいしいです",yue:"相當好食"},{lv:2,jp:"なかなか いけますね",yue:"都幾唔錯喎"},{lv:2,jp:"悪{わる}くない 味{あじ}ですね",yue:"味道唔差喎"}],meh:[{lv:0,hi:!0,jp:"うーん、 ちょっと…",yue:"嗯…有啲…"},{lv:1,jp:"もう ちょっと 味{あじ}が ほしいです",yue:"想味道再濃啲"},{lv:2,jp:"もう 少{すこ}し 味{あじ}が はっきり していると いいですね",yue:"味道再突出啲就好喇"}],wrong:[{lv:0,jp:"あれ？ これじゃないです",yue:"咦？唔係呢個喎"},{lv:1,jp:"これ、 頼{たの}んでいません",yue:"呢個我冇叫"},{lv:2,jp:"すみません、 注文{ちゅうもん}したのは これじゃなかったと 思{おも}うんですが",yue:"唔好意思，我諗我叫嘅唔係呢個"}],bye:[{key:"gochisousama",lv:0,jp:"ごちそうさまでした！",yue:"多謝款待！"},{key:"matta",lv:0,jp:"また 来{き}ます！",yue:"我會再嚟！"},{key:"oishikatta",lv:0,hi:!0,jp:"美味{おい}しかったです！",yue:"好好食呀！"},{key:"arigatou",lv:0,hi:!0,jp:"ありがとうございました！",yue:"多謝晒！"},{key:"okaikei",lv:1,jp:"お会計{かいけい}、 お願{ねが}いします。 ごちそうさまでした",yue:"唔該埋單，多謝款待"},{key:"by_tomodachi",lv:1,jp:"とても おいしかったです。 また 友達{ともだち}と 来{き}ます！",yue:"好好食，下次同朋友嚟！"},{key:"by_mata",lv:1,jp:"また 近{ちか}いうちに 来{き}ますね",yue:"好快會再嚟"},{key:"by_chikaku",lv:2,jp:"この 近{ちか}くに 来{き}たら、 また 寄{よ}らせてもらいます",yue:"之後行經附近，我會再嚟"},{key:"by_tsurete",lv:2,jp:"今度{こんど}は 家族{かぞく}も 連{つ}れて 来{き}ますね",yue:"下次帶埋家人嚟"},{key:"by_gochisou2",lv:2,jp:"今日{きょう}は ごちそうさまでした。 どれも 本当{ほんとう}に おいしかったです",yue:"今日多謝款待，每樣都真係好好食"}]},dn={wake:{jp:"ふわぁ… おはようにゃ！",yue:"呵～早晨喵！"},intro:{jp:"ぼくは クロ。この 店{みせ}の シェフにゃ",yue:"我叫小黑（クロ），係呢間店嘅廚師喵"},irasshai:{jp:"いらっしゃいませ！",yue:"歡迎光臨！"},done:{jp:"できたにゃ！",yue:"整好喇喵！"},purr:{jp:"ごろごろ…",yue:"（呼嚕呼嚕⋯）"},levelup:{jp:"レベルアップにゃ！",yue:"升級喇喵！"},newRecipe:{jp:"新{あたら}しい レシピにゃ！",yue:"新食譜喵！"}},Jt=(i,t,e,n,s)=>({key:i,lv:t,ch:e,jp:n,yue:s,hi:!0}),ul=[{key:"oishii",lv:0,ch:"any",jp:"この 店{みせ}、おいしいですね",yue:"呢間店好好食喎"},{key:"atsui",lv:0,ch:"any",jp:"わあ、熱{あつ}い！",yue:"嘩，好熱！"},{key:"sumimasen",lv:0,ch:"any",jp:"すみません！",yue:"唔好意思！"},Jt("st_osusume",0,"home","おすすめは？","有咩推介？"),Jt("st_nioi",0,"home","いい におい！","好香呀！"),Jt("st_mizu",0,"any","お水{みず}、 ください","唔該畀杯水"),Jt("st_toire",0,"any","トイレは どこですか？","洗手間喺邊？"),Jt("st_kanpai",0,"izakaya","乾杯{かんぱい}！","乾杯！"),Jt("st_toriaezu",0,"izakaya","とりあえず ビール！","總之先嚟啤酒！"),Jt("st_hot",0,"cafe","ホット、 お願{ねが}いします","要熱嘅，唔該"),Jt("st_ice",0,"cafe","アイス、 お願{ねが}いします","要凍嘅，唔該"),Jt("st_nani",0,"dark","これ、 なに？","呢個係咩嚟？"),Jt("st_tezukuri",0,"dark","手作{てづく}り？","自家製？"),Jt("st_shizuka",1,"any","この 店{みせ}、 静{しず}かで いいですね","呢間舖頭好靜，好舒服"),Jt("st_hajimete",1,"any","ここは 初{はじ}めてです","我第一次嚟呢度"),Jt("st_haitte",1,"any","これには 何{なに}が 入{はい}っていますか？","呢個入面有啲咩？"),Jt("st_kyou",1,"any","今日{きょう}は 暑{あつ}いですね","今日好熱呀"),Jt("st_suwaru",1,"home","ここ、 座{すわ}っても いいですか？","呢度可以坐嗎？"),Jt("st_sukuname",1,"home","ご飯{はん}、 少{すく}なめに できますか？","飯可唔可以少啲？"),Jt("st_okawari",1,"home","おかわり、 いいですか？","可以添飯嗎？"),Jt("st_dashi",1,"home","この 味噌汁{みそしる}、 何{なん}の だしですか？","呢碗味噌湯用咩熬底？"),Jt("st_lastorder",1,"izakaya","ラストオーダーは 何時{なんじ}ですか？","最後落單係幾點？"),Jt("st_nama",1,"izakaya","生{なま}ビール、 もう 一杯{いっぱい}","生啤再嚟一杯"),Jt("st_satou_nashi",1,"cafe","砂糖{さとう}なしで お願{ねが}いします","唔該走糖"),Jt("st_milk_ooi",1,"cafe","ミルクを 多{おお}めに できますか？","可唔可以多奶？"),Jt("st_tsukuru",1,"dark","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),Jt("st_nikomi",1,"dark","どのくらい 煮込{にこ}みましたか？","燉咗幾耐？"),Jt("st_mae",2,"any","この 店{みせ}、 前{まえ}から 来{き}てみたかったんです","呢間舖我想嚟好耐㗎喇"),Jt("st_hitori",2,"any","一人{ひとり}でも 入{はい}りやすい お店{みせ}ですね","一個人入嚟都冇壓力"),Jt("st_susume",2,"any","友達{ともだち}に すすめられて 来{き}ました","朋友推介我嚟"),Jt("st_fun",2,"any","雰囲気{ふんいき}が 落{お}ち着{つ}いていて いいですね","氣氛好舒服，好寧靜"),Jt("st_ryou",2,"home","値段{ねだん}の わりに、 量{りょう}が 多{おお}くて 驚{おどろ}きました","價錢計，份量多到嚇親"),Jt("st_tezukuri2",2,"home","これ、 全部{ぜんぶ} 手作{てづく}りなんですか？","呢啲全部係自己整？"),Jt("st_omakase",2,"izakaya","お任{まか}せで 何品{なんぴん}か 出{だ}してもらえますか？","可唔可以隨你出幾款？"),Jt("st_agetate",2,"izakaya","唐揚{からあ}げは 揚{あ}げたてを 食{た}べたいので、 後{あと}で 出{だ}してもらえますか？","唐揚想食啱炸起，可唔可以遲啲先上？"),Jt("st_samui",2,"cafe","今日{きょう}は 寒{さむ}いので、 熱{あつ}めに してもらえますか？","今日凍，可唔可以整熱啲？"),Jt("st_purin",2,"cafe","プリンは 食後{しょくご}に 出{だ}していただけますか？","布甸可唔可以食完先上？"),Jt("st_hachijikan",2,"dark","本当{ほんとう}に 八時間{はちじかん}も 煮込{にこ}んだんですか？","真係燉咗八個鐘咁耐？"),Jt("st_genzairyo",2,"dark","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],xx=Object.fromEntries(ul.map(i=>[i.key,i]));function yx(i,t,e=Math.random){const n=Ue(),s=ul.filter(f=>f.lv<=n&&(f.ch==="any"||f.ch===i)),r=ll(),a=s.filter(f=>f.lv===r),o=a.length>=2?a:s,c=o.filter(f=>!Ji.has(f.key)),l=c.length?c:o,u=t(l.map(f=>f.key));Ji.add(u);const h=xx[u],d=f=>f.filter((E,x)=>f.findIndex(S=>S.yue===E.yue)===x),p=f=>[...f].sort(()=>e()-.5),g=s.filter(f=>f.key!==u&&f.yue!==h.yue&&f.lv===h.lv),v=s.filter(f=>f.key!==u&&f.yue!==h.yue),m=d([...p(g),...p(v)]).slice(0,2);return{st:h,wrongs:m}}const Mx=["misoshiru","oyakodon","ramen"],ld=[{key:"oomori",lv:1,hi:!0,jp:"大盛{おおも}りで お願{ねが}いします",yue:"大份，唔該",label:"要大份"},{key:"dt_sukuname",lv:1,hi:!0,jp:"少{すく}なめで お願{ねが}いします",yue:"細份，唔該",label:"要細份"},{key:"dt_koko",lv:1,hi:!0,jp:"ここで 食{た}べます",yue:"喺度食",label:"喺度食"},{key:"dt_mochikaeri",lv:1,hi:!0,jp:"お持{も}ち帰{かえ}りで お願{ねが}いします",yue:"外賣，唔該",label:"外賣"},{key:"dt_negi",lv:2,hi:!0,jp:"ねぎ抜{ぬ}きに してもらえますか？",yue:"可唔可以走蔥？",label:"走蔥",when:i=>Mx.includes(i)},{key:"dt_henkou",lv:2,hi:!0,jp:"すみません、 やっぱり 持{も}ち帰{かえ}りに 変更{へんこう}できますか？",yue:"唔好意思，可唔可以改做外賣？",label:"改做外賣"}];function Sx(i){const t=Ue(),e=ld.filter(u=>u.lv<=t&&(!u.when||u.when(i)));if(!e.length)return null;const n=ll(),s=e.filter(u=>u.lv===n),r=s.length?s:e,a=r.filter(u=>!Ji.has(u.key)),o=a.length?a:r,c=o[Math.floor(Math.random()*o.length)];Ji.add(c.key);const l=[...new Set(e.filter(u=>u.label!==c.label).map(u=>u.label))].sort(()=>Math.random()-.5);return{d:c,wrongs:l.slice(0,2)}}const bx=[{lv:0,jp:"売{う}り切{き}れです",yue:"賣晒喇"},{lv:1,jp:"すみません、売{う}り切{き}れです。",yue:"唔好意思，賣晒喇"},{lv:2,jp:"申{もう}し訳{わけ}ございません、 あいにく {dish}は 切{き}らしておりまして…",yue:"好抱歉，啱啱{dishYue}用晒…"}],wx=[{lv:0,hi:!0,jp:"{dish}を ください",yue:"咁要{dishYue}"},{lv:1,jp:"{dish}を お願{ねが}いします",yue:"咁要{dishYue}"},{lv:2,jp:"それなら、 {dish}に します",yue:"咁我要{dishYue}"}],Ex=[{lv:0,hi:!0,jp:"追加{ついか}で！",yue:"加單！"},{lv:1,jp:"すみません、もう 一{ひと}つ 追加{ついか}で。",yue:"唔該，再加一份。"},{lv:2,jp:"あ、 すみません、 同{おな}じものを もう 一{ひと}つ 追加{ついか}で お願{ねが}いします",yue:"啊唔好意思，同一款再加一份，唔該"}],Tx=[{lv:0,hi:!0,jp:"一{ひと}つ 減{へ}らして ください",yue:"減一份，唔該"},{lv:1,jp:"すみません、 一{ひと}つ 減{へ}らして ください。",yue:"唔好意思，減一份。"},{lv:2,jp:"あ、 すみません、 一{ひと}つ 減{へ}らして もらえますか？",yue:"啊唔好意思，可唔可以減一份？"}],Ax=[{lv:0,hi:!0,jp:"{dish}に 変{か}えて ください",yue:"改做{dishYue}，唔該"},{lv:1,jp:"すみません、 {dish}に 変{か}えて ください。",yue:"唔好意思，改做{dishYue}。"},{lv:2,jp:"あ、 すみません、 {dish}に 変{か}えて もらえますか？",yue:"啊唔好意思，可唔可以改做{dishYue}？"}],Rx=[{lv:0,hi:!0,jp:"やっぱり キャンセルで！",yue:"算啦，取消！"},{lv:1,jp:"すみません、 やっぱり キャンセルで お願{ねが}いします。",yue:"唔好意思，算啦，唔該取消。"},{lv:2,jp:"あの、 すみません、 やっぱり 注文{ちゅうもん}を キャンセルして もらえますか？",yue:"請問，我想取消啱啱嗰張單，得唔得？"}],Cx=[{lv:0,hi:!0,jp:"じゃあ、 やめておきます",yue:"咁就算啦"},{lv:1,jp:"そうですか… じゃあ、 やめておきます。",yue:"係咩…咁就算啦。"},{lv:2,jp:"そうですか… それなら、 今日{きょう}は やめておきます",yue:"係咩…咁今日就唔要喇"}],hr={people:[{n:1,key:"hitori",jp:"一人{ひとり}です",yue:"一位",mei:"一名{いちめい}"},{n:2,key:"futari",jp:"二人{ふたり}です",yue:"兩位",mei:"二名{にめい}"},{n:3,key:"sannin",jp:"三人{さんにん}です",yue:"三位",mei:"三名{さんめい}"}],foods:["onigiri","misoshiru","oyakodon","ramen"],drinks:["ocha","omizu","biiru"],hasNegi:["misoshiru","oyakodon","ramen"],prices:{onigiri:200,misoshiru:150,oyakodon:850,ramen:900,ocha:0,omizu:0,biiru:500},staff:{welcome:{jp:"いらっしゃいませ！ 何名様{なんめいさま}ですか？",yue:"歡迎光臨！請問幾位？"},seat:{jp:"こちらへ どうぞ",yue:"呢邊請"},order:{jp:"ご注文{ちゅうもん}は お決{き}まりですか？",yue:"決定好叫咩未？"},drink:{jp:"お飲{の}み物{もの}は いかがですか？",yue:"想飲啲咩？"},confirm:{jp:"以上{いじょう}で よろしいですか？",yue:"就咁多？"},wait:{jp:"少々{しょうしょう} お待{ま}ちください",yue:"請稍等"},serve:{jp:"お待{ま}たせしました！",yue:"久等喇！"},pay:{jp:"ありがとうございます。{price}円{えん}です",yue:"多謝，{price} 円"},pay2:{jp:"税込{ぜいこ}みで {price}円{えん}に なります",yue:"連稅 {price} 円"},bye:{jp:"ありがとうございました！ また お越{こ}しください",yue:"多謝晒！歡迎再嚟"},sorry:{jp:"大変{たいへん} お待{ま}たせしました！",yue:"等咗好耐，真係唔好意思！"}},you:{order:{jp:"{food}を {num} ください",yue:"唔該畀{numYue}{foodYue}我"},drink:{jp:"{drink}を {num} お願{ねが}いします",yue:"{numYue}{drinkYue}，唔該"},yes:{jp:"はい、お願{ねが}いします",yue:"係，唔該"},itadakimasu:{jp:"いただきます！",yue:"開動！（食之前）"},gochisou:{jp:"ごちそうさまでした",yue:"多謝款待（食完）"},kaikei:{jp:"すみません、お会計{かいけい} お願{ねが}いします",yue:"唔好意思，唔該埋單"},wrongGreet:{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},wrongEat:{jp:"さようなら",yue:"再見（好正式／長時間唔見）"},wrongPay:{jp:"おかわり ください",yue:"唔該再嚟一碗"},no:{jp:"いいえ、大丈夫{だいじょうぶ}です",yue:"唔使喇，冇問題"}}},Yu=i=>hr.people[i.ppl.n-1],Px=[{id:"water0",lv:0,phase:"preorder",task:()=>"想要杯水",build:()=>({staff:null,prompt:"（想要杯水）",title:"💧 想要杯水，點講？",options:[{jp:"お水{みず}、 ください",yue:"唔該畀杯水"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"さようなら",yue:"再見（好正式）"}]})},{id:"call0",lv:0,phase:"mid",task:()=>"想叫店員",build:()=>({staff:null,prompt:"（想叫店員過嚟）",title:"✋ 叫店員，點講？",options:[{jp:"すみません！",yue:"唔好意思！"},{jp:"いらっしゃいませ！",yue:"歡迎光臨（店員講）"},{jp:"ごちそうさまでした",yue:"多謝款待（食完）"}]})},{id:"reserve1",lv:1,phase:"enter",init:i=>{i.f.reserved=Math.random()<.5},task:i=>i.f.reserved?"你有訂位":"你冇訂位",build:i=>({staff:{jp:"ご予約{よやく}は されていますか？",yue:"有冇訂位？"},title:"📅 有冇訂位？",options:i.f.reserved?[{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]:[{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"counter1",lv:1,phase:"seat",task:()=>"你唔介意坐吧枱",build:()=>({staff:{jp:"カウンター席{せき}でも よろしいですか？",yue:"坐吧枱得唔得？"},title:"🪑 坐吧枱得唔得？（你唔介意）",options:[{jp:"はい、 大丈夫{だいじょうぶ}です",yue:"得，冇問題"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"recommend1",lv:1,phase:"preorder",task:()=>"唔知食咩，想問推介",build:i=>({staff:null,prompt:"（唔知食咩，想問店員推介）",title:"🤔 想問推介，點講？",options:[{jp:"おすすめは 何{なん}ですか？",yue:"有咩推介？"},{jp:"お会計{かいけい}は いくらですか？",yue:"幾多錢？"},{jp:"ごちそうさまでした",yue:"多謝款待"}],reply:{jp:`本日{ほんじつ}の おすすめは ${Lx(i.food)}です`,yue:`今日推介${Dx(i.food)}`}})},{id:"chopsticks1",lv:1,phase:"mid",task:()=>"冇筷子，想叫店員攞",build:()=>({staff:null,prompt:"（發現冇筷子）",title:"🥢 冇筷子，點講？",options:[{jp:"すみません、 お箸{はし}を ください",yue:"唔好意思，唔該畀對筷子"},{jp:"すみません、 お水{みず}を ください",yue:"唔好意思，唔該畀杯水"},{jp:"すみません、 さようなら",yue:"唔好意思，再見"}]})},{id:"split1",lv:1,phase:"pay",when:i=>i.ppl.n>=2,init:i=>{i.f.split=Math.random()<.5},task:i=>i.f.split?"各自畀錢":"你請客，一齊畀",build:i=>({staff:{jp:"お会計{かいけい}は 別々{べつべつ}ですか？ ご一緒{いっしょ}ですか？",yue:"分開畀定一齊畀？"},title:"💴 點樣畀錢？",options:i.f.split?[{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"いただきます",yue:"開動喇"}]:[{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"いただきます",yue:"開動喇"}]})},{id:"cash1",lv:1,phase:"pay",when:i=>i.ppl.n===1,init:i=>{i.f.card=Math.random()<.5},task:i=>i.f.card?"你想碌卡":"你想畀現金",build:i=>({staff:{jp:"お支払{しはら}いは 現金{げんきん}ですか？ カードですか？",yue:"現金定碌卡？"},title:"💳 現金定碌卡？",options:i.f.card?[{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"おやすみなさい",yue:"晚安"}]:[{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"reserve2",lv:2,phase:"enter",init:i=>{i.f.reserved=Math.random()<.5},task:i=>i.f.reserved?`你七點訂咗位（${Yu(i).yue}，姓陳）`:"你冇訂位，但有時間，願意等",build:i=>{const t=Yu(i),e=hr.people.find(n=>n.n!==t.n);return i.f.reserved?{staff:{jp:"ご予約の お名前{なまえ}を お願{ねが}いします",yue:"請問訂位姓名？"},title:"📅 報訂位資料（七點、姓陳）",options:[{jp:`七時{しちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${t.yue}`},{jp:`七時{しちじ}に ${e.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${e.yue}`},{jp:`八時{はちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗八點${t.yue}`}]}:{staff:{jp:"ただいま 満席{まんせき}でして、 十分{じゅっぷん}ほど お待{ま}ちいただくことになりますが、 よろしいですか？",yue:"而家滿座，要等十分鐘左右，得唔得？"},title:"⏳ 要等十分鐘（你有時間）",options:[{jp:"はい、 待{ま}ちます",yue:"得，我等"},{jp:"じゃあ、 また 今度{こんど}に します",yue:"咁下次先啦"},{jp:"ごちそうさまでした",yue:"多謝款待"}]}}},{id:"luggage2",lv:2,phase:"seat",task:()=>"行李多，想坐枱",build:()=>({staff:{jp:"お席{せき}は カウンターと テーブルが ございますが…",yue:"有吧枱同枱位，你想坐邊？"},title:"🧳 行李多，想坐枱",options:[{jp:"荷物{にもつ}が 多{おお}いので、 テーブル席{せき}に していただけますか？",yue:"我哋行李多，可唔可以坐枱？"},{jp:"テーブル席{せき}に しろ",yue:"畀張枱我坐（好粗魯）"},{jp:"荷物{にもつ}が 少{すく}ないので、 カウンター席{せき}に してください",yue:"行李少，坐吧枱（同情況唔符）"}]})},{id:"negi2",lv:2,phase:"order",when:i=>hr.hasNegi.includes(i.food),task:()=>"你唔食蔥",build:()=>({staff:null,prompt:"（你唔食蔥）",title:"🙏 想走蔥，點講？",options:[{jp:"ねぎ抜{ぬ}きに していただけますか？",yue:"可唔可以走蔥？"},{jp:"ねぎを 多{おお}めに お願{ねが}いします",yue:"蔥多啲，唔該（相反）"},{jp:"ねぎ抜{ぬ}きに しろ",yue:"走蔥啦（好粗魯）"}]})},{id:"late2",lv:2,phase:"wait",task:()=>"等咗好耐，菜仲未嚟",build:()=>({staff:null,prompt:"（等咗好耐，菜仲未嚟）",title:"⌛ 菜仲未嚟，點講？",reply:hr.staff.sorry,options:[{jp:"注文{ちゅうもん}した 料理{りょうり}が まだ 来{き}ていないんですが…",yue:"我叫咗嘅菜仲未嚟…"},{jp:"早{はや}く しろ",yue:"快啲啦（好粗魯）"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"clear2",lv:2,phase:"after",task:()=>"",build:()=>({staff:{jp:"お下{さ}げしても よろしいですか？",yue:"可唔可以收走碟？"},title:"🍽️ 食晒喇，點答？",options:[{jp:"はい、 お願{ねが}いします",yue:"好，唔該"},{jp:"すみません、 まだ 食{た}べています",yue:"唔好意思，我仲食緊（同情況唔符）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"cashonly2",lv:2,phase:"pay",init:i=>{i.f.cashOnly=!0},task:()=>"你有現金",build:()=>({staff:{jp:"現金{げんきん}のみと なっておりますが…",yue:"我哋只收現金…"},title:"💴 只收現金",options:[{jp:"じゃあ、 現金{げんきん}で 払{はら}います",yue:"咁我畀現金"},{jp:"カードで 払{はら}います",yue:"我碌卡（唔收卡）"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"receipt2",lv:2,phase:"receipt",task:()=>"你想要收據",build:()=>({staff:null,prompt:"（想要張收據，抬頭唔使寫）",title:"🧾 想要收據，點講？",options:[{jp:"領収書{りょうしゅうしょ}を いただけますか？ 宛名{あてな}は なしで 大丈夫{だいじょうぶ}です",yue:"可唔可以畀張收據？抬頭唔使寫"},{jp:"領収書{りょうしゅうしょ}を よこせ",yue:"收據拎嚟（好粗魯）"},{jp:"お箸{はし}を ください",yue:"唔該畀對筷子（唔對題）"}]})}],ud={onigiri:["おにぎり","飯糰"],misoshiru:["味噌汁{みそしる}","麵豉湯"],oyakodon:["親子丼{おやこどん}","親子丼"],ramen:["ラーメン","拉麵"]};function Lx(i){return ud[i][0]}function Dx(i){return ud[i][1]}function Ix(i,t){var a;const e=Ue(),n=Px.filter(o=>o.lv<=e&&(!o.when||o.when(i))),s=[],r=new Set;for(;s.length<t;){const o=n.filter(d=>!s.includes(d)&&!r.has(d.phase));if(!o.length)break;const c=o.map(d=>d.lv===e?3:1);let l=Math.random()*c.reduce((d,p)=>d+p,0),u=0;for(let d=0;d<o.length;d++)if(l-=c[d],l<=0){u=d;break}const h=o[u];s.push(h),r.add(h.phase)}for(const o of s)(a=o.init)==null||a.call(o,i);return s}const Ux=[1,2,3],Nx=[{id:"hat_chef",slot:"hat",price:0,emoji:"👨‍🍳",jp:"コック帽{ぼう}",yue:"廚師帽"},{id:"hat_hachimaki",slot:"hat",price:80,emoji:"🎌",jp:"はちまき",yue:"頭巾（打氣用）"},{id:"hat_straw",slot:"hat",price:180,emoji:"👒",jp:"麦{むぎ}わら帽子{ぼうし}",yue:"草帽"},{id:"neck_bell",slot:"neck",price:60,emoji:"🔔",jp:"鈴{すず}",yue:"鈴鐺"},{id:"neck_scarf",slot:"neck",price:120,emoji:"🧣",jp:"スカーフ",yue:"頸巾"},{id:"deco_lantern",slot:"deco",price:100,emoji:"🏮",jp:"提灯{ちょうちん}",yue:"燈籠"},{id:"deco_noren",slot:"deco",price:150,emoji:"🎏",jp:"のれん",yue:"門簾"},{id:"deco_bonsai",slot:"deco",price:220,emoji:"🪴",jp:"盆栽{ぼんさい}",yue:"盆栽"},{id:"deco_maneki",slot:"deco",price:350,emoji:"🐱",jp:"招{まね}き猫{ねこ}",yue:"招財貓（客人多啲）"}],zs=[{id:"usagi",jp:"うさぎさん",yue:"兔仔",color:16447216,ear:"long",weight:10,tip:1},{id:"kuma",jp:"くまさん",yue:"熊仔",color:9067067,ear:"round",weight:10,tip:1},{id:"kitsune",jp:"きつねさん",yue:"狐狸",color:15041082,ear:"pointy",weight:8,tip:1.2},{id:"tanuki",jp:"たぬきさん",yue:"狸貓",color:8088152,ear:"round",mask:!0,weight:6,tip:1.3},{id:"shiba",jp:"柴犬{しばいぬ}さん",yue:"柴犬",color:14260814,ear:"pointy",weight:4,tip:1.6,rare:!0},{id:"maneki",jp:"招{まね}き猫{ねこ}さま",yue:"招財貓大人",color:16777215,ear:"pointy",weight:1,tip:5,rare:!0,legend:!0}],Wi=5,Ut={suspicion:0,pot:0,combo:1,persona:null,exposes:0,raid:null,earned:0,active:!1},kx=()=>Object.assign(Ut,{suspicion:0,pot:0,combo:1,persona:null,exposes:0,raid:null,earned:0,active:!0}),Cn=i=>{Ut.suspicion=Math.max(0,Math.min(Wi,Ut.suspicion+i))},hd=()=>at().chapterShifts.dark||0,Ox=i=>Math.max(1,Math.min(5,Math.round(i*100)/100)),Xi=i=>{at().darkRating=Ox((at().darkRating??3)+i)};let ir=null;function Ti(){const i=re("#darkbar");if(!i)return;if(i.classList.toggle("show",Ut.active),!Ut.active){ir=null;return}const t=ir;ir={sus:Ut.suspicion,pot:Ut.pot};const e=Array.from({length:Wi},(a,o)=>o<Ut.suspicion?"●":"○").join("");if(i.dataset.sus=Ut.suspicion,i.replaceChildren(b("span",{class:"db-sus",title:"懷疑度：滿 5 食評家突擊"},`👀 ${e}`),b("span",{class:"db-pot",title:"黑錢彩池：收手先落袋"},`💰 ${Ut.pot}`),b("span",{class:"db-combo"},`🔥x${Ut.combo.toFixed(2)}`),b("span",{class:"db-rating"},`⭐${(at().darkRating??3).toFixed(2)}`)),!t)return;const n=(a,o,c,l)=>{var u;(u=i.querySelector(a))==null||u.classList.add("bump"),i.append(b("span",{class:`db-delta ${c}`,style:`left:${l}`},o))},s=ir.sus-t.sus,r=ir.pot-t.pot;s&&n(".db-sus",`👀 ${s>0?"+":""}${s} 懷疑`,s>0?"up":"down","8px"),r&&n(".db-pot",`💰 ${r>0?"+":""}${r}`,r>0?"coin":"up","45%")}function Fx(){Ut.active=!1,Ti()}function dd(){return{coins:200+30*Math.min(hd(),5),exposes:1}}async function Bx(){const i=dd();Ti(),await new Promise(t=>{const e=b("button",{class:"btn primary big","data-dark":"start",onclick:()=>n.close()},"🔪 開工"),n=ui("今晚目標",b("div",{class:"dark-goals"},b("p",{},`⭐ 賺到 ${i.coins} 🪙（彩池要收手先計）`),b("p",{},`⭐ 被揭穿最多 ${i.exposes} 次`),b("p",{},"⭐ 冇俾食評家拆穿"),b("div",{class:"sub"},"每次浮誇介紹，紅利會入 💰 彩池；繼續搏有 🔥 combo，被揭穿就冇一半。懷疑度 👀 滿 5，食評家突擊！")),{footer:e,onClose:t})})}function zx(i){const t=dd(),e=[{ok:i.coins>=t.coins,label:`賺 ${i.coins} / ${t.coins} 🪙`},{ok:Ut.exposes<=t.exposes,label:`被揭穿 ${Ut.exposes} 次（≤ ${t.exposes}）`},{ok:Ut.raid!=="lose",label:Ut.raid==="win"?"食評家突擊：頂住咗！":Ut.raid==="lose"?"食評家突擊：被拆穿":Ut.raid==="confess"?"食評家突擊：認錯":"冇被突擊"}],n=e.filter(r=>r.ok).length,s=at();return s.darkBest=Math.max(s.darkBest||0,n),Me(),{stars:n,res:e}}function Hx(){const i=Object.entries(Wh).filter(([,e])=>!e.minShift||hd()>=e.minShift);let t=Math.random()*i.reduce((e,[,n])=>e+n.weight,0);for(const[e,n]of i)if(t-=n.weight,t<=0)return{id:e,...n};return{id:i[0][0],...i[0][1]}}function Vx(i){Ce(`${i.icon} ${i.name}：${i.hint}`,3600)}const Ku=(i,t,e={})=>b("div",{class:"dress-opt",...e},b("b",{class:"jp-inline",html:hn(i)}),t?b("small",{},t):null);async function Gx(i,t){var m;const e=Ut.persona,n=Ue(),s=zs.find(f=>f.id===Ut.custId)||{id:Ut.custId||"usagi"},r=Lv[e.like],a=r[Math.min(n,r.length-1)];pe(t,"cust",a.jp,n===0?a.yue:"",Qe(s.id,a));const o=await nn(ia.map(f=>({value:f,el:Ku(`${f.icon} ${f.jp}`,n===0?f.yue:"",{"data-dress":`style:${f.id}`})})),{title:b("div",{class:"panel-title"},`${e.icon} 客人想要咩擺盤？`),cols:3}),c=o.value;t.styleDish(c.plate,c.garnish),fe("cust");const u=2-Math.abs(ia.findIndex(f=>f.id===c.id)-ia.findIndex(f=>f.id===e.like)),h=ia.find(f=>f.id===e.like),d=(m=o.grid.querySelector(`[data-dress="style:${h.id}"]`))==null?void 0:m.closest(".choice");o.button.classList.add(u===2?"fb-right":"fb-wrong"),u<2&&(d==null||d.classList.add("fb-answer"));const p=[.85,1,1.25][u];u===2?(Cn(-1),me("⭕ 擺盤正中！懷疑 -1、收入 x1.25","perfect"),ct("perfect")):u===1?(me("🔺 差少少：收入照舊","good"),ct("good")):(Cn(1),me("❌ 擺盤唔啱！懷疑 +1、收入 x0.85","miss"),ct("bad")),Ti(),u<2&&Ve(`客人講「${a.yue}」→ 要 ${h.icon} ${h.jp.replace(/\{[^}]*\}/g,"")}（${h.yue}）`,4e3);const g=Dv[u];await Promise.race([pe(t,"cust",g.jp,g.yue,Qe(s.id,g)),se(3e3)]),await se(500),fe("cust");const{value:v}=await nn(["honest","mild","grand"].map(f=>({value:f,el:Ku(Xh(i,f).jp,`${xr[f].label} · 紅利 x${xr[f].mult}`,{"data-dress":`pitch:${f}`})})),{title:b("div",{class:"panel-title"},"🍽️ 上菜！點介紹？越浮誇紅利越多，越易被追問")});return{style:c.id,plate:c.plate,garnish:c.garnish,pitch:v,matches:u,lookMult:p}}function jx(i,t,e){return{...Iv(t,e.matches,e.pitch),style:e.style,plate:e.plate,garnish:e.garnish,pitch:e.pitch,matches:e.matches,lookMult:e.lookMult??1,outcome:"none"}}const Lo=(i,t,e)=>{const n=e[Math.min(Ue(),2)]||e[0];return pe(i,"cust",n.jp,n.yue,Qe(t.id,n))},Wx=()=>{const i=Ue(),t=Pv.filter(n=>n.lv<=i),e=t.filter(n=>n.lv===i);return Mn(e.length&&Math.random()<.7?e:t)},Xx=(i,t)=>{const e=Object.keys(lr),n=Ge(e.filter(r=>r!==i.kind)).slice(0,t?2:3),s=Ge([i.kind,...n]).map(r=>({value:r,el:b("div",{"data-excuse":r},b("b",{class:"jp-inline",html:hn(lr[r].jp)}),b("small",{},lr[r].yue))}));return t&&s.push({value:"honest",el:b("div",{"data-excuse":"honest"},"🙇 老實交代",b("small",{},"收入 x0.8，懷疑度 -1"))}),s};async function fd(i,t,e,n,s){var u,h;const r=Wx();Ut.probe=r;const a=Qe(t.id,r);Bn(r.key),pe(i,"cust",r.jp,"",a,{hidden:e});const o=await nn(Xx(r,n),{title:b("div",{class:"panel-title"},s)});fe("cust");const c=o.value===r.kind;o.value!=="honest"&&(ke(r.key,c),wr(r.lv,c),o.button.classList.add(c?"fb-right":"fb-wrong"),c||(h=(u=o.grid.querySelector(`[data-excuse="${r.kind}"]`))==null?void 0:u.closest(".choice"))==null||h.classList.add("fb-answer"),me(c?"⭕ 藉口啱題！":"❌ 答非所問…",c?"good":"miss"),ct(c?"good":"bad"),c||Ve(`佢問：「${r.yue}」→ 應該答「${lr[r.kind].yue}」`,3500),await se(900));const l=o.value==="honest"?Nv.honest:lr[o.value];return await pe(i,"cat",l.jp,l.yue,"cat"),fe("cat"),{answer:o.value,right:c,probe:r}}function $x(i){var t;return i==="honest"?0:Math.max(0,Math.min(1,xr[i].ask+(((t=Ut.persona)==null?void 0:t.ask)||0)+Ut.suspicion*.08))}async function qx(i,t,e,n){if(e.pitch==="honest")return me("🙂 如實介紹：冇紅利、冇風險","good"),e.outcome="plain";if(Math.random()>=$x(e.pitch))return me("😌 客人冇追問！紅利入彩池","perfect"),ct("good"),await se(700),e.outcome="none";const{answer:s,right:r}=await fd(i,t,n,!0,"🤨 客人追問！揀啱藉口（聽清楚佢問咩）");let a;return s==="honest"?(a="honest",me("🙇 老實交代：收入 x0.8、懷疑 -1","good"),await Lo(i,t,Eo.forgive),ct("good")):Math.random()<(r?Math.max(.5,1-Ut.suspicion*.1):.15)?(a="believe",me("✅ 客人信咗！紅利入彩池","perfect"),await Lo(i,t,Eo.believe),ct("perfect")):(a="expose",me("💥 被揭穿！冇收入、彩池減半、懷疑 +2","miss"),await Lo(i,t,Eo.expose),ct("bad"),i.shake(.4)),fe("cust"),e.outcome=a}function Yx(i,t){const e=xr[i.pitch],n=i.outcome;let s=t,r=0;return n==="none"||n==="believe"?(r=Math.round(t*(e.mult-1)*Ut.combo),Ut.pot+=r,Ut.combo=Math.min(2,Ut.combo+.25),Xi(.05),Ce(Mn(n==="believe"?Es.believe:Es.quiet),2400)):n==="honest"?(s=Math.round(t*.8),Cn(-1),Ut.combo=1,Xi(.02),Ce(Mn(Es.honest),2400)):n==="expose"?(s=0,Ut.pot=Math.floor(Ut.pot/2),Cn(2),Ut.combo=1,Ut.exposes++,Xi(-.15),Ce(Mn(Es.expose),2600,"bad")):Xi(.02),i.bonus=r,Me(),Ti(),s}function hl(){const i=Ut.pot;return i?(Ut.pot=0,Ut.earned+=i,at().coins+=i,Me(),ct("coin"),Gs(i),li(),Ti(),i):0}async function Kx(){if(Ut.pot<=0||(await nn([{value:"bank",el:b("div",{"data-bank":"bank"},`💰 收手落袋 +${Ut.pot}`,b("small",{},"懷疑度 -1，combo 歸零"))},{value:"go",el:b("div",{"data-bank":"go"},`🎲 繼續搏（🔥x${Ut.combo.toFixed(2)}）`,b("small",{},"下位客紅利更多；被揭穿彩池冇一半"))}],{title:b("div",{class:"panel-title"},`彩池 💰 ${Ut.pot} · 懷疑度 👀 ${Ut.suspicion}/${Wi}`)})).value!=="bank")return 0;Cn(-1),Ut.combo=1;const t=hl();return me(`+${t} 落袋！`,"good"),t}const Jx=()=>hl();async function Zx(i,t){if(Ut.suspicion<Wi)return 0;const e=zs.find(a=>a.id==="kitsune")||zs[0];ct("rare"),i.setView("kitchen"),await i.customerIn(e),Ce("🚨 食評家突擊！懷疑度爆咗",3e3,"bad");const n=await nn([{value:"fight",el:b("div",{"data-raid":"fight"},"😤 硬撐到底",b("small",{},"連續答啱 2 條：彩池 x1.5"))},{value:"confess",el:b("div",{"data-raid":"confess"},"🙇 認錯",b("small",{},"彩池清零，評分 -0.1"))}],{title:b("div",{class:"panel-title"},`🧐 食評家：「我要睇吓你嘅廚房。」彩池 💰 ${Ut.pot}`)});let s=n.value==="fight";if(s)for(let a=0;a<2&&s;a++)s=(await fd(i,e,t,!1,`🧐 食評家問題 ${a+1} / 2`)).right;let r=0;return n.value==="confess"?(Ut.pot=0,Xi(-.1),Cn(-Wi),Cn(1),Ut.raid="confess",Ce("🙇 認咗錯，食評家搖頭離開",2600)):s?(Ut.pot=Math.round(Ut.pot*1.5),Xi(.2),Cn(-Wi),Cn(1),Ut.raid="win",ct("perfect"),Ce(Mn(Es.raidWin),3e3,"rare"),r=hl()):(Ut.pot=0,Xi(-.3),Cn(-Wi),Cn(2),Ut.raid="lose",ct("bad"),i.shake(.5),Ce(Mn(Es.raidLose),3e3,"bad")),Ut.combo=1,Me(),Ti(),await se(900),i.customerOut(),await se(500),r}const pd={none:"冇人追問，紅利入袋",plain:"如實介紹，冇風險",honest:"老實交代，客人原諒",believe:"藉口成功，蒙混過關",expose:"被揭穿，今餐白做"};function md(i,t){const e=Xh(i,t.pitch);return b("div",{class:"dark-report","data-secret":i.id},b("div",{class:"dark-tag"},`後廚秘密 ${i.number} · ${i.shortcut}`),b("div",{class:"dark-dish-heading"},oi(`dish_${i.id}`,i.yue),b("h3",{},i.yue)),b("div",{class:"dark-scores"},...[["好味",t.taste],["賣相",t.look],["宣傳誇張度",t.hype]].map(([n,s])=>b("div",{},b("b",{},`${s}`),b("span",{},n)))),b("p",{},`你講嘅菜名：${e.yue}`),b("p",{},`結果：${pd[t.outcome]||""}`),b("p",{class:"dark-truth"},`真正做法：${i.truth}`),b("p",{},i.gag),Vn("中身{なかみ}は？",{yue:i.lesson,voice:"word"}))}async function Qx(i,t){const e=at().darkSecrets[i.id];if(at().darkSecrets[i.id]={...t,bestTaste:Math.max((e==null?void 0:e.bestTaste)||0,t.taste),visits:((e==null?void 0:e.visits)||0)+1},Me(),e){Ce(`🗂️ ${i.yue}：${pd[t.outcome]||""}`,1800);return}ct("rare"),await new Promise(n=>{const s=b("button",{class:"btn primary big dark-control",onclick:()=>r.close()},"收低秘密卡，繼續出餐"),r=ui("新後廚秘密！",b("div",{},md(i,t),b("div",{class:"sub"},"圖鑑入面可以再睇。")),{footer:s,onClose:n})})}function es(i,t=""){const e=i.verb?ve(i.verb):null;return b("div",{class:"mg-head"},Vn(i.jp,{yue:i.yue,voice:"cat"}),e?b("div",{class:"verb-chip"},Xn(e)," 新字 ",b("span",{class:"jp-inline",html:e.jp.replace(/([一-鿿]+)\{([^}]+)\}/g,"<ruby>$1<rt>$2</rt></ruby>")}),` = ${e.yue}`):null,t?b("div",{class:"mg-help"},t):null)}async function ty(i,t){let e=0;const n=Ge([...i.need,...i.decoys]),s=b("div",{class:"ing-grid"}),r=b("div",{class:"pick-prompt"},b("div",{class:"pick-label"},"🐾 聽小黑講…"));n.forEach(a=>{const o=ve(a),l=o.textIcon&&o.emoji==="💬"?b("span",{class:"emo ing-jp",html:hn(o.jp)}):b("span",{class:"emo"},Xn(o)),u=b("button",{class:"ing"},l,b("span",{class:"ing-yue"},o.yue.replace(/（.*?）/g,"")));u.dataset.id=a,s.append(u)}),bn(es(i),r,s),await Ie(i.jp,"cat");for(let a=0;a<i.need.length;a++){const o=i.need[a],c=ve(o);Bn(o),r.innerHTML="",s.dataset.want=o,r.append(b("div",{class:"pick-label"},`請攞（${a+1}/${i.need.length}）：`),Vn(c.jp,{voice:"word",size:"big"})),Ie(c.jp,"word");let l=!1;await new Promise(u=>{const h=d=>{const p=d.target.closest(".ing");if(!(un()||!p||p.classList.contains("used")))if(p.dataset.id===o)ct("good"),p.classList.add("used","ok"),t.placeIngredient(o,a,i.need.length),ke(o,!l),s.removeEventListener("click",h),u();else{ct("bad"),e++,l=!0,p.classList.remove("shake"),p.offsetWidth,p.classList.add("shake");const g=ve(p.dataset.id);Ve(`呢個係「${g.yue}」，日文叫 ${g.jp.replace(/\{.*?\}/g,"")}`),Ie(g.jp,"word")}};s.addEventListener("click",h)}),await se(250)}return Math.max(.3,1-e*.2)}async function ey(i,t){var u;const e=i.rounds||3,n=b("div",{class:"tbar"}),s=b("div",{class:"tzone"}),r=b("div",{class:"tsweet"}),a=b("div",{class:"tneedle"});s.append(r),n.append(s,a);const o=b("div",{class:"mg-count"}),c=b("button",{class:"btn primary big tapzone"},i.anim==="chop"?"🔪 切！":"👆 撳！");bn(es(i,"指針入綠色區時撳掣；深綠色最準！"),o,n,c),Ie(i.jp,"cat"),t.catFace("board"),i.anim==="chop"&&t.cat.holding("knife");let l=0;for(let h=0;h<e;h++){o.textContent=`${h+1} / ${e}`;const d=i.zone*(1-h*.12),p=.15+Math.random()*(.7-d);s.style.left=p*100+"%",s.style.width=d*100+"%";const g=.9+h*.25+at().level*.03;let v=0,m=1,f=sn(),E;const x=()=>{const R=sn(),I=(R-f)/1e3;f=R,v+=m*g*I,v>1&&(v=1,m=-1),v<0&&(v=0,m=1),a.style.left=v*100+"%",E=requestAnimationFrame(x)};E=requestAnimationFrame(x),await new Promise(R=>{c.onclick=()=>{un()||R()}}),cancelAnimationFrame(E),t.cat.play(i.anim||"chop",.25),ct(i.anim==="chop"?"chop":"pop");const S=p+d/2,L=Math.abs(v-S);let C;L<d*.17?(C=1,me("PERFECT!","perfect"),ct("perfect")):L<d/2?(C=.7,me("GOOD","good"),ct("good")):(C=.2,me("MISS","miss")),l+=C,h===0&&i.anim==="chop"&&t.workItems.children.length&&t.showProp((u=i.add)==null?void 0:u[0]),await se(380)}return t.cat.holding(null),i.add&&i.anim!=="chop"&&t.showProp(i.add[0]),l/e}async function ny(i,t){const e=i.taps||10,n=i.time||5;let s=0;const r=b("button",{class:"ring","aria-label":`連撳飯糰 ${e} 次`},b("div",{class:"ring-in"},oi("verb_nigiru"))),a=b("div",{class:"mg-timer"},b("i")),o=b("div",{class:"mg-count","aria-live":"polite"},`0 / ${e}`);bn(es(i,`連撳飯糰 ${e} 次！第一下先開始 ${n} 秒倒數。`),o,a,r),Ie(i.jp,"cat"),t.catFace("board");let c=!1,l=!1,u=0;const h=await new Promise(d=>{let p;const g=()=>{if(un()){p=requestAnimationFrame(g);return}const v=(sn()-u)/1e3;if(a.firstChild.style.width=Math.max(0,1-v/n)*100+"%",v>=n&&!l){l=!0,d(s/e);return}p=requestAnimationFrame(g)};r.addEventListener("pointerdown",v=>{if(v.preventDefault(),!(l||un())&&(c||(c=!0,u=sn(),p=requestAnimationFrame(g)),s++,o.textContent=`${s} / ${e}`,ct("pop"),t.cat.play(i.anim||"press",.18),r.style.setProperty("--p",Math.min(1,s/e)),r.classList.remove("hit"),r.offsetWidth,r.classList.add("hit"),s>=e)){l=!0,cancelAnimationFrame(p);const m=n-(sn()-u)/1e3;d(m>n*.4?1:.85)}})});return i.add&&t.showProp(i.add[0]),h>=1?(me("PERFECT!","perfect"),ct("perfect")):h>=.7?(me("GOOD","good"),ct("good")):me("OK","miss"),await se(450),Math.max(.3,Math.min(1,h))}async function iy(i,t){const e=i.turns||3,n=b("div",{class:"stirpad"},b("div",{class:"stir-dot"}),b("div",{class:"stir-label"},"🥄 手指轉圈")),s=b("div",{class:"mg-timer prog"},b("i"));bn(es(i,`按住圓盤畫 ${e} 個圈，順時針或逆時針都得。`),s,n),Ie(i.jp,"cat"),t.catFace("stove"),t.cat.holding("ladle"),t.heat(!0),i.add&&t.showProp(i.add[0]);let r=0,a=null,o=null,c=0;const l=await new Promise(u=>{const h=d=>{if(un()){a=null;return}const p=n.getBoundingClientRect(),g=d.clientX-(p.left+p.width/2),v=d.clientY-(p.top+p.height/2);if(Math.hypot(g,v)<15)return;const m=Math.atan2(v,g);if(n.querySelector(".stir-dot").style.transform=`rotate(${m}rad) translateX(${p.width*.36}px)`,a!==null){let E=m-a;E>Math.PI&&(E-=Math.PI*2),E<-Math.PI&&(E+=Math.PI*2),r+=Math.abs(E),o||(o=sn()),t.cat.setMode("stir");const x=Math.floor(r/(Math.PI/2));x>c&&(c=x,ct("bubble"))}a=m;const f=r/(e*Math.PI*2);if(s.firstChild.style.width=Math.min(1,f)*100+"%",f>=1){n.removeEventListener("pointermove",h);const E=(sn()-o)/1e3;u(E<e*1.4?1:E<e*2.5?.8:.6)}};n.addEventListener("pointerdown",d=>{try{n.setPointerCapture(d.pointerId)}catch{}a=null}),n.addEventListener("pointermove",d=>{(d.buttons||d.pointerType==="touch")&&h(d)}),n.addEventListener("pointerup",()=>{a=null,t.cat.setMode("idle")})});return t.cat.setMode("idle"),t.cat.holding(null),t.heat(!1),l>=1?(me("PERFECT!","perfect"),ct("perfect")):(me("GOOD","good"),ct("good")),await se(450),l}async function sy(i,t){const[e,n]=i.zone,s=b("div",{class:"gauge"},b("div",{class:"gzone",style:`bottom:${e*100}%;height:${(n-e)*100}%`}),b("div",{class:"gfill"}),b("div",{class:"gtop"},"🔥 滾瀉")),r=b("button",{class:"btn primary big holdbtn"},"🔥 長按加熱"),a=b("div",{class:"hold-wrap"},s,r);bn(es(i,"長按加熱，升到綠色區就放手！暫停後要再長按。"),a),Ie(i.jp,"cat"),t.catFace("stove"),i.add&&t.showProp(i.add[0]);let o=0,c=!1,l=sn(),u,h=0;const d=()=>{c=!1,cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle")};document.addEventListener("gamepause",d);const p=s.querySelector(".gfill"),g=await new Promise(v=>{const m=()=>{const E=sn(),x=(E-l)/1e3;if(l=E,c&&(o+=x*(.32+o*.35),h+=x,h>.25&&(h=0,ct(o>n?"boil":"bubble"))),p.style.height=Math.min(1,o)*100+"%",p.classList.toggle("hot",o>n),o>=1){f();return}u=requestAnimationFrame(m)},f=()=>{cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle");const E=(e+n)/2;o>=e&&o<=n?v(Math.abs(o-E)<(n-e)*.2?1:.75):v(.3)};r.addEventListener("pointerdown",E=>{E.preventDefault();try{r.setPointerCapture(E.pointerId)}catch{}c||un()||(c=!0,l=sn(),u=requestAnimationFrame(m),t.heat(!0),t.cat.holding(i.anim==="pour"?null:"ladle"),t.cat.setMode(i.anim==="pour"?"idle":"stir"),i.anim==="pour"&&t.cat.play("pour",.8))}),r.addEventListener("pointerup",()=>{c&&(c=!1,f())}),r.addEventListener("pointercancel",()=>{c&&(c=!1,f())})});return document.removeEventListener("gamepause",d),t.cat.holding(null),g>=1?(me("PERFECT!","perfect"),ct("perfect")):g>=.7?(me("GOOD","good"),ct("good")):(me(o>=1?"滾瀉！":"未夠熱","miss"),ct("bad"),Ve(i.tip,3e3)),await se(500),g}function ry(i){const t=(e,n,s)=>b("div",{class:`demo-row demo-${e}`},b("b",{},n),b("small",{},s));return new Promise(e=>{const n=b("button",{class:"btn primary big","data-demo":"go",onclick:()=>{at().sneakTap=!0,Me(),ct("tap"),e()}},"明白，開始！");bn(b("div",{class:"panel-title"},"🤫 偷偷煮：點玩？"),t("safe","① 🟢 客人傾偈 → 點一下開始","偷偷做嘢，進度條會行"),t("tell","② 🟡 客人講嘢衝住你 → 即刻再點一下停","聽完句嘢有少少時間反應"),t("look","③ 🔴 客人望緊廚房 → 唔好掂","佢轉返去（變返🟢）再點一下開始；被望到 = 懷疑 +1"),n)})}async function ay(i,t){const e=Ue(),n=Ut.persona||Wh.tourist;at().sneakTap||await ry();const s=i.work||[4.5,5.5,6.5][e],r=[1500,1150,900][e]*n.tell,a=1300*n.look,o=250,c=Math.min(3,e+1+(n.turn>=.5?1:0)),l={1:[.3],2:[.2,.55],3:[.15,.4,.65]}[c].map(At=>At+(Math.random()-.5)*.08),u=i.limit||Math.round(s*2+c*(2.5+(r+a)/1e3)+3),h=od(Ut.custId||"usagi"),d=At=>Cv[At].filter(Z=>Z.lv<=e);[...d("safe"),...d("turn")].forEach(At=>ga(At.jp,h)),i.station&&t.useStation(i.station);const p=b("div",{class:"sneak-face"},"🗣️"),g=b("div",{class:"sneak-state"},`🟢 ${n.icon} ${n.name}同朋友傾緊偈 → 點一下開始`),v=b("div",{class:"sneak-line"}),m=b("div",{class:"sneak-cust","data-phase":"idle","data-cue":"safe"},p,b("div",{class:"sneak-talk"},g,v)),f=b("div",{class:"mg-timer prog"},b("i")),E=b("div",{class:"mg-timer"},b("i")),x=b("div",{class:"sneak-bars"},b("span",{title:"進度"},"🍳"),f,b("span",{title:"時間"},"⏱️"),E),S=b("button",{class:"btn primary big holdbtn sneak-btn","data-sneak":"hold","data-state":"ready"},i.btn);bn(es(i,e===0?"🟢 點一下開始 → 🟡 客人講嘢衝你：再點一下停 → 🟢 佢轉返去：再點一下開始":e===1?"傾偈就點一下開始；聽到講嘢衝你就點一下停，佢轉返去再點":"靠耳仔：傾偈就點一下開始；講嘢衝你就點一下停"),m,x,S).classList.add("sneak-panel"),Ie(i.jp,"cat");let C=!1,R=0,I=!1,Q=!1,_=0,M=0,F=0,k="away",B=0,X=0,z=0,J=0,G=0,_t=0,mt=0,gt=!1;const Wt=At=>{k=At,m.dataset.phase=At},Bt=(At,Z,wt)=>{m.dataset.cue=At,Z&&(g.textContent=Z),wt&&(p.textContent=wt)},j=(At,Z)=>{S.dataset.state=At,S.textContent=Z},st=()=>k==="look"?j("look","🙈 唔好掂！"):k==="tell"&&m.dataset.cue==="tell"?j("tell","✋ 點一下停！"):I?j("stop","⏸ 停咗｜點一下繼續"):j("ready",i.btn),Mt=()=>{C=!1,S.classList.remove("on"),x.classList.remove("on"),st(),t.cat.setMode("idle"),i.ding&&t.microwaveLight(!1)},pt=()=>Mt();document.addEventListener("gamepause",pt);const Nt=await new Promise(At=>{let Z;const wt=ut=>{Q||(Q=!0,cancelAnimationFrame(Z),Mt(),j(ut>=.9?"hold":"stop",ut>=.9?"✅ 完成！":"⌛ 時間到"),At(ut))},$=ut=>{F++,gt=!0,Mt(),Cn(1),Ti(),ct("bad"),t.shake(.4),me("👀 被發現！懷疑度 +1","miss"),Bt("caught",`🔴 ${ut}｜被發現！已停手，等佢轉返去再點一下`,"🤨"),j("look","🙈 唔好掂！")},T=()=>{Bt("tell","🟡 客人講嘢衝住你！即刻點一下停！","❓"),C||j("tell","✋ 點一下停！")},nt=(ut,ft)=>{const A=Mn(d(ft?"turn":"safe"));v.replaceChildren(Vn(A.jp,{yue:e===0?A.yue:"",voice:h}));const y=Promise.race([Ie(A.jp,h),se(4e3)]);ft?(Wt("tell"),J=1/0,e===0?T():Bt("safe",`🟢 ${n.icon} 客人講緊嘢…聽清楚`,"🗣️"),y.then(()=>{k!=="tell"||Q||(J=sn()+r,e===1&&T())})):(Bt("safe",`🟢 ${n.icon} 同朋友傾緊偈 → 點一下開始`,"🗣️"),z=ut+(1200+Math.random()*1200)*n.gap)},et=()=>{const ut=sn(),ft=(ut-X)/1e3;if(X=ut,k==="away"&&!mt?_<l.length&&M>=l[_]?(_++,nt(ut,!0)):ut>=z&&nt(ut,!1):k==="tell"?ut>=J&&(Wt("look"),G=ut,_t=ut+a,gt=!1,Bt("look","🔴 客人望緊廚房！唔好掂！","👀"),C||j("look","🙈 唔好掂！")):k==="look"&&(C&&!gt&&ut>=G+o&&$(i.caught),ut>=_t&&(Wt("away"),v.replaceChildren(),gt||(me("😌 冇被發現！","good"),ct("good")),Bt("safe",`🟢 ${gt?"佢":"冇發現！佢"}轉返去傾偈 → 再點一下開始`,"🗣️"),C||j("ready",i.btn),z=ut+(900+Math.random()*900)*n.gap)),C&&!mt&&(M=Math.min(_<l.length||k!=="away"?.97:1,M+ft/s),M>=1))if(i.ding)mt=ut+450,Mt(),S.disabled=!0,j("stop","⏳ 就嚟「叮」…");else return wt(F?.9:1);if(mt&&ut>=mt)return ct("ding"),k==="look"&&$("「チン♪」——客人聽到晒！"),wt(F?.9:1);const A=(ut-B)/1e3;if(f.firstChild.style.width=M*100+"%",E.firstChild.style.width=Math.max(0,1-A/u)*100+"%",m.dataset.progress=M.toFixed(2),A>=u)return wt(Math.max(.3,M*.8));Z=requestAnimationFrame(et)},it=()=>{k==="look"&&gt||(I||(I=!0,B=X=sn(),z=B+900+Math.random()*600,Z=requestAnimationFrame(et)),C=!0,S.classList.add("on"),x.classList.add("on"),j("hold",`🍳 ${i.btn.replace(/^\S*\s*點一下：/,"")}…（點一下停）`),t.cat.setMode("stir"),i.ding&&t.microwaveLight(!0),k==="look"&&!gt&&$(i.caught))},dt=()=>{Mt(),k==="tell"&&(Bt(e<2?"tell":"hid",`🫣 ${i.hide}…收埋咗，等佢望完`),j("tell","🫣 收埋咗"))};S.addEventListener("pointerdown",ut=>{if(ut.preventDefault(),Q||un()||mt)return;const ft=performance.now();ft-R<150||(R=ft,C?dt():it())})});return document.removeEventListener("gamepause",pt),Q&&Nt>=1?(me("完美！冇俾人發現","perfect"),ct("perfect")):Nt>=.9?me("做完！但俾人發現過","good"):(me("做唔切！","miss"),ct("bad"),Ve(`被捉 ${F} 次；時間唔夠，味道會差啲`,3e3)),await se(500),Nt}async function oy(i){let t=0;const e=2+Math.floor(Math.random()*2),n=b("div",{class:"season-meter","aria-live":"polite"}),s=b("p",{},"先試味，再決定要唔要補。"),r=b("button",{class:"btn dark-control","data-season":"add"},"加一格調味"),a=b("button",{class:"btn dark-control","data-season":"taste"},"試味"),o=b("button",{class:"btn primary big dark-control","data-season":"serve"},"確認出餐"),c=()=>{n.textContent=`${"●".repeat(t)}${"○".repeat(5-t)}　${t} / 5`,r.disabled=t>=5};c(),r.addEventListener("click",()=>{t<5&&(t++,c(),s.textContent="加咗調味，試一啖先。")}),a.addEventListener("click",()=>{s.textContent=t===e?"啱啱好，仲食到蛋香同飯香！":t<e?"味道仲有啲淡。":"調味過重，蓋過食材味喇。",ct("tap")}),bn(es(i),n,s,b("div",{class:"dark-actions"},r,a),b("div",{class:"sub"},i.tip),o),await new Promise(u=>o.addEventListener("click",u,{once:!0}));const l=Math.max(.1,1-Math.abs(t-e)*.3);return ct(l>=.9?"perfect":"bad"),l}async function cy(i){const t=i.actions||[{id:"hot",icon:"♨️",label:"保持熱飲",detail:"用熱杯盛裝"},{id:"iced",icon:"🧊",label:"加冰做凍飲",detail:"用凍杯盛裝"},{id:"less_sugar",icon:"🥄",label:"減少糖量",detail:"只落半份糖"},{id:"no_sugar",icon:"🚫",label:"唔加糖",detail:"保持無糖"}];let e=0;for(Bn(i.request);;){const n=b("div",{class:"mg-head"},b("div",{class:"panel-title"},i.title||"客人想要點樣嘅飲品？"),Vn(i.jp,{yue:Ue()===0?i.yue:"",voice:i.voice||"cat",hidden:Ue()>0,autoplay:!0}),b("div",{class:"mg-help"},"聽客人要求，揀實際做法。撳喇叭可以再聽。"));if(await new Promise(r=>{bn(n,b("div",{class:"choices cols2 request-actions"},Ge(t).map(a=>b("button",{class:"choice","data-request":a.id,onclick:()=>{un()||r(a.id)}},b("span",{class:"request-icon"},a.icon),b("b",{},a.label),Ue()===0?b("small",{},a.detail):null))))})===i.request){ke(i.request,e===0),ct("good");const r=ve(i.request);return await cl("做好喇，出餐！",b("div",{class:"panel-title"},"啱喇！客人嘅意思係："),Vn(r.jp,{yue:r.yue,voice:"word",autoplay:!0})),Math.max(.3,1-e*.2)}e++,ct("bad"),Ve(i.retry||"再聽一次：留意客人講緊冷熱，定係甜度。",3500)}}const ly=Object.fromEntries(Object.entries({pick:ty,timing:ey,mash:ny,stir:iy,hold:sy,sneak:ay,season:oy,request:cy}).map(([i,t])=>[i,(...e)=>Pd(t,...e)])),Dc=["hitotsu","futatsu","mittsu"],uy=["ikkan","nikan","sankan"],Ic=["tamago_nigiri","salmon_nigiri"],hy=i=>Ic.includes(i)?uy:Dc;function On(i,t){let e=i.jp,n=i.yue;for(const[s,r]of Object.entries(t))typeof r=="string"&&en[r]?(e=e.replaceAll(`{${s}}`,en[r].jp),n=n.replaceAll(`{${s}Yue}`,en[r].yue.replace(/（.*?）/g,""))):(e=e.replaceAll(`{${s}}`,String(r)),n=n.replaceAll(`{${s}}`,String(r)));return{jp:e,yue:n}}const dy={cat:{id:8,name:"春日部つむぎ"},word:{id:14,name:"冥鳴ひまり"},usagi:{id:10,name:"雨晴はう"},kuma:{id:11,name:"玄野武宏"},kitsune:{id:2,name:"四国めたん"},tanuki:{id:12,name:"白上虎太郎"},shiba:{id:13,name:"青山龍星"},maneki:{id:20,name:"もち子さん"}};function Zi(i){const t=at();return i.unlock.level?t.level>=i.unlock.level:i.unlock.day?t.daysPlayed>=i.unlock.day:i.unlock.darkShift?(t.chapterShifts.dark||0)>=i.unlock.darkShift:!0}function gd(i){if(i.unlock.level)return`Lv.${i.unlock.level} 解鎖`;if(i.unlock.darkShift)return`暗黑食堂完成 ${i.unlock.darkShift} 更解鎖`;if(i.unlock.day){const t=tx(),e=Math.floor(t/36e5),n=Math.floor(t%36e5/6e4);return at().daysPlayed+1>=i.unlock.day?`聽日解鎖（仲有 ${e}:${String(n).padStart(2,"0")}）`:`第 ${i.unlock.day} 日解鎖`}return""}function Uc(){const i=new Set;for(const[o,c]of Object.entries(en))(c.cat==="num"||c.cat==="phrase")&&i.add(o);for(const o of Dn.filter(Zi))i.add(o.dish),o.ingredients.forEach(([c])=>i.add(c)),o.steps.forEach(c=>{c.verb&&i.add(c.verb),c.request&&i.add(c.request)});const t=at().srs;Object.keys(t).forEach(o=>{en[o]&&i.add(o)});const e=[...i].filter(o=>en[o]),n=e.filter(o=>t[o]&&t[o].box>=2).length,s=e.filter(o=>t[o]&&t[o].box>=5).length,r=e.filter(o=>t[o]).length,a=cr.map(o=>{const c=new Set;if(o.id==="home")for(const[u,h]of Object.entries(en))(h.cat==="num"||h.cat==="phrase")&&c.add(u);for(const u of Dn.filter(h=>(h.chapter||"home")===o.id&&Zi(h)))c.add(u.dish),u.ingredients.forEach(([h])=>c.add(h)),u.steps.forEach(h=>{h.verb&&c.add(h.verb),h.request&&c.add(h.request)});const l=[...c].filter(u=>en[u]);return{id:o.id,name:o.name.split("・")[0],icon:o.icon,total:l.length,learned:l.filter(u=>t[u]&&t[u].box>=2).length}});return{total:e.length,learned:n,mastered:s,seen:r,unseen:e.length-r,chapters:a}}const _d=i=>"★".repeat(i)+"☆".repeat(3-i);function vd(i,{onStart:t=null}={}){const e=ve(i.dish),n=b("div",{class:"recipe"},b("div",{class:"recipe-hero"},b("div",{class:"big-emo"},Xn(e)),Vn(e.jp,{yue:e.yue,voice:"word",size:"big",autoplay:!0})),b("div",{class:"recipe-meta"},`🍽️ ${i.serves}　⏱️ 現實烹調：${i.time}　${at().stars[i.id]?_d(at().stars[i.id]):""}`),b("h3",{},"材料"),b("ul",{class:"ing-list"},i.ingredients.map(([a,o])=>{const c=ve(a);return b("li",{},b("button",{class:"mini-spk","aria-label":`再聽：${c.yue}`,onclick:()=>Ie(c.jp,"word")},"🔊"),b("span",{class:"emo"},Xn(c)),b("span",{class:"jp-inline",html:hn(c.jp)}),b("span",{class:"amt"},o))})),b("h3",{},i.chapter==="dark"?"真正捷徑（浮誇菜名唔代表實際工序）":"做法（真係煮得㗎！）"),b("ol",{class:"howto"},i.howto.map(a=>b("li",{},a))));if(t){const[a,...o]=[...n.children],c={pick:"聽日文揀材料",mash:"連撳搓飯糰",timing:"指針入綠色區時撳掣",stir:"手指畫圈攪拌",hold:"長按加熱，綠色區放手",sneak:"點一下開始偷偷做；客人講嘢衝你就再點一下停",season:"先試味再調味",request:"聽客人要求，揀實際做法"},l=b("details",{class:"real-recipe"},b("summary",{},"📖 睇真實食譜、份量同烹調時間"),...o);n.replaceChildren(a,b("h3",{},"今次遊戲步驟"),b("ol",{class:"howto game-steps"},i.steps.map(u=>b("li",{},c[u.type]))),l)}const s=t?b("button",{class:"btn primary big",onclick:()=>{ct("tap"),r.close()}},"🔥 開始煮！"):null,r=ui("📖 食譜",n,{onClose:t,wide:!0,footer:s});return r}function Nc(i="recipes"){const t=b("div",{class:"tabs"}),e=b("div",{class:"tab-content"}),n={recipes:"🍳 食譜",words:"📝 單詞",phrases:"💬 句子",secrets:"🌙 後廚",stats:"📊 紀錄"},s=r=>{if(t.querySelectorAll("button").forEach(a=>a.classList.toggle("on",a.dataset.t===r)),e.innerHTML="",r==="recipes"){const a=b("div",{class:"book-grid"});Dn.forEach(l=>{const u=ve(l.dish),h=Zi(l),d=b("div",{class:`book-card ${h?"":"locked"}`},b("div",{class:"big-emo"},h?Xn(u):"🔒"),b("div",{class:"jp-inline",html:h?hn(u.jp):"？？？"}),b("div",{class:"sub"},cr.find(p=>p.id===(l.chapter||"home")).name),b("div",{class:"sub"},h?at().stars[l.id]?_d(at().stars[l.id]):"未煮過":gd(l)));h&&(d.onclick=()=>{ct("tap"),vd(l)}),a.append(d)}),Xu.forEach(l=>a.append(b("div",{class:"book-card locked soon"},b("div",{class:"big-emo sil"},oi(`dish_${l.id}`,l.yue)),b("div",{class:"jp-inline",html:hn(l.jp)}),b("div",{class:"sub"},"即將推出"))));const o=Dn.length+Xu.length,c=Dn.filter(Zi).length;e.append(b("div",{class:"progress-line"},`收集 ${c} / ${o}`,b("div",{class:"bar"},b("i",{style:`width:${c/o*100}%`}))),a)}else if(r==="words"){const a=b("div",{class:"word-list"}),o=Object.keys(at().srs);o.length||a.append(b("p",{class:"muted"},"未學到字，去煮嘢先啦！")),o.sort((l,u)=>at().srs[u].box-at().srs[l].box).forEach(l=>{if(!en[l])return;const u=ve(l),h=at().srs[l],d=["🌱","🌱","🌿","🌿","🌳","🌸"][h.box];a.append(b("div",{class:"word-row",onclick:()=>Ie(u.jp,"word")},b("span",{class:"emo"},Xn(u)),b("span",{class:"jp-inline",html:hn(u.jp)}),b("span",{class:"yue"},u.yue),b("span",{class:"lvl",title:"熟練度"},d)))});const c=Uc();e.append(b("div",{class:"progress-line"},`識咗 ${c.learned} / ${c.total} 個 · 🌸 熟晒 ${c.mastered} 個`,b("div",{class:"bar"},b("i",{style:`width:${c.total?c.learned/c.total*100:0}%`})),b("div",{class:"sub"},`見過 ${c.seen} 個 · 仲有 ${c.unseen} 個未見過　（🌱→🌸 越溫越熟）`),...c.chapters.filter(l=>l.total).map(l=>b("div",{class:"sub"},`${l.icon} ${l.name} ${l.learned} / ${l.total}`,b("div",{class:"bar"},b("i",{style:`width:${l.learned/l.total*100}%`}))))),a)}else if(r==="phrases"){const a=Ue(),o=[...ul,...ld,...Vi.bye],c=o.filter(u=>at().srs[u.key]),l=o.filter(u=>(u.lv??0)<=a).length;e.append(b("div",{class:"progress-line"},`見過 ${c.length} 句 · 你而家嘅程度可以遇到 ${l} 句　（🌱→🌸 越溫越熟）`)),c.length||e.append(b("p",{class:"muted"},"未有句子，開店同客人傾偈先啦！"));for(const u of[0,1,2]){const h=c.filter(p=>(p.lv??0)===u).sort((p,g)=>at().srs[g.key].box-at().srs[p.key].box);if(!h.length)continue;e.append(b("div",{class:"sub"},`${Bs[u].icon} ${Bs[u].name}`));const d=b("div",{class:"word-list"});h.forEach(p=>{const g=at().srs[p.key],v=["🌱","🌱","🌿","🌿","🌳","🌸"][g.box];d.append(b("div",{class:"word-row",onclick:()=>Ie(p.jp,"usagi")},b("span",{class:"jp-inline",html:hn(p.jp)}),b("span",{class:"yue"},p.yue),b("span",{class:"lvl",title:"熟練度"},v)))}),e.append(d)}}else if(r==="secrets"){const a=Ts.filter(c=>at().darkSecrets[c.id]);e.append(b("p",{class:"sub"},`主廚秘密 ${a.length} / ${Ts.length} · 完成出餐揭曉後收藏`));const o=[...new Set(a.map(c=>c.shortcut))];e.append(b("div",{class:"dark-pantry"},...Ts.map(c=>b("span",{class:o.includes(c.shortcut)?"unlocked":""},o.includes(c.shortcut)?c.shortcut:"🔒 未揭曉")))),Ts.forEach(c=>{const l=at().darkSecrets[c.id];e.append(l?md(c,l):b("div",{class:"dark-locked"},`${c.number} · ${c.yue}　🔒`))})}else{const a=at(),o=[["🔥 連續日數",`${a.streak} 日`],["📅 玩咗",`${a.daysPlayed} 日`],["🐾 招呼客人",`${a.served} 位`],["🏮 去餐廳",`${a.restaurantDone} 次`],["📝 識咗單詞",`${Uc().learned} 個`],["💕 小黑好感度",`${a.affection}`]];e.append(b("div",{class:"stats"},o.map(([c,l])=>b("div",{class:"stat"},b("span",{},c),b("b",{},l)))))}};for(const[r,a]of Object.entries(n))t.append(b("button",{"data-t":r,onclick:()=>{ct("tap"),s(r)}},a));s(i),ui("📚 圖鑑",b("div",{},t,e),{wide:!0})}function dl(i){const t=b("div",{class:"shop-grid"}),e=b("div",{class:"shop-coins"}),n=()=>{const s=at();e.replaceChildren(oi("ui_coin"),b("b",{},s.coins)),t.innerHTML="",Nx.forEach(r=>{const a=s.owned.includes(r.id)||s.deco.includes(r.id),o=r.slot==="deco"?s.deco.includes(r.id):s.wear[r.slot]===r.id;let c;a?r.slot==="deco"?c=b("button",{class:"btn ghost"},"✔ 已擺"):(c=b("button",{class:`btn ${o?"ghost":""}`},o?"除低":"著上"),c.onclick=()=>{ct("tap"),s.wear[r.slot]=o?(r.slot==="hat",null):r.id,Me(),kc(i),n(),i.cat.happy()}):(c=b("button",{class:`btn ${s.coins>=r.price?"primary":"disabled"}`},`🪙 ${r.price}`),c.onclick=()=>{if(s.coins<r.price){ct("bad"),Ce("金幣唔夠，再招呼多啲客人啦！");return}s.coins-=r.price,ct("coin"),ct("perfect"),r.slot==="deco"?s.deco.push(r.id):(s.owned.push(r.id),s.wear[r.slot]=r.id),Me(),kc(i),li(),n(),Ie(r.jp,"word"),Ce(`買咗 ${r.yue}！`)}),t.append(b("div",{class:`shop-item ${o?"worn":""}`},b("div",{class:"big-emo"},oi(`shop_${r.id}`,r.yue)),b("div",{class:"jp-inline",html:hn(r.jp),onclick:()=>Ie(r.jp,"word")}),b("div",{class:"sub"},r.yue),c))})};n(),i.setView("kitchen"),ui("🛍️ 商店",b("div",{},e,t),{wide:!0})}function kc(i){const t=at();i.cat.wear(t.wear),i.setDeco(t.deco)}function fy(i){const t=at().settings,e=(c,l,u)=>{const h=b("input",{type:"checkbox"});return h.checked=!!t[l],h.onchange=()=>{t[l]=h.checked,Me(),ol(),l==="bgm"&&sd(h.checked),l==="shake"&&(i.shakeOn=h.checked),ct("tap")},b("label",{class:"set-row"},b("div",{},b("b",{},c),b("div",{class:"sub"},u)),h)},n=b("input",{type:"checkbox"});n.checked=t.subs==="tap",n.onchange=()=>{t.subs=n.checked?"tap":"show",Me(),ct("tap")};const s=b("div",{class:"lv-pick"}),r=()=>{s.replaceChildren(...Bs.map(c=>b("button",{class:`btn ${Ue()===c.id?"primary":""}`,onclick:()=>{at().jpLevel=c.id,Me(),ct("tap"),r()}},`${c.icon} ${c.name}`,b("small",{},c.desc))))};r();const a=Object.values(dy).map(c=>`VOICEVOX:${c.name}`).filter((c,l,u)=>u.indexOf(c)===l).join("、"),o=b("div",{class:"settings"},b("div",{class:"set-row lv-row"},b("div",{},b("b",{},"📚 日文程度"),b("div",{class:"sub"},"決定客人同餐廳對白嘅難度；轉咗之後新句即刻生效")),s),e("振假名 ふりがな","furigana","漢字上面顯示讀音"),e("羅馬字 Romaji","romaji","例：onigiri"),e("廣東話翻譯","yue","每句下面顯示意思"),e("加大文字","largeText","放大對白、翻譯同操作說明"),b("label",{class:"set-row"},b("div",{},b("b",{},"🎧 聽力挑戰"),b("div",{class:"sub"},"客人落單嘅字幕要撳先見，答啱有雙倍貼士")),n),e("背景音樂","bgm",""),e("音效","sfx",""),e("畫面震動","shake","切菜、答錯、升級時鏡頭輕震"),b("p",{class:"credits"},`🎙️ 語音：${a}`),b("button",{class:"btn danger",onclick:()=>{confirm("真係要清除全部進度？")&&(Jv(),location.reload())}},"清除進度"));ui("⚙️ 設定",o)}function py(i,{onNext:t,onRest:e,onShop:n,firstShift:s}){const r=at();let a=!1;const o=h=>{a=!0,ad(),h()},l=Dn.filter(h=>!Zi(h))[0],u=b("div",{class:"summary"},b("div",{class:"sum-big"},"🎉"),s?b("div",{class:"panel-title"},"第一道菜完成！想繼續開舖，定去餐廳試吓？"):null,Vn("お疲{つか}れ様{さま}でした！",{yue:"辛苦晒！（收工講）",voice:"cat"}),b("div",{class:"sum-grid"},b("div",{},b("b",{},i.served),b("span",{},"位客人")),b("div",{},b("b",{},`+${i.coins}`),b("span",{},"🪙 金幣")),b("div",{},b("b",{},i.perfect),b("span",{},"⭐ 三星")),b("div",{},b("b",{},`${Uc().learned}`),b("span",{},"📝 識咗字"))),i.dark?b("div",{class:"dark-stars","data-stars":i.dark.stars},b("div",{class:"stars-big"},...[1,2,3].map(h=>b("span",{class:h<=i.dark.stars?"on":""},"★"))),...i.dark.res.map(h=>b("div",{class:`goal ${h.ok?"ok":""}`},`${h.ok?"✅":"❌"} ${h.label}`)),b("div",{class:"sub"},`店舖評分 ⭐ ${(r.darkRating??3).toFixed(2)}`)):null,b("div",{class:"streak-row"},...Array.from({length:7},(h,d)=>b("div",{class:`sd ${d<Math.min(r.streak,7)?"on":""}`},d<Math.min(r.streak,7)?"🔥":d+1)),b("div",{class:"sub"},`連續 ${r.streak} 日！聽日返嚟，禮物會再大啲`)),l?b("div",{class:"teaser"},b("span",{class:"big-emo"},oi("ui_lock"),Xn(ve(l.dish))),b("div",{},b("b",{html:hn(ve(l.dish).jp)}),b("div",{class:"sub"},gd(l)))):null,b("div",{class:"sum-btns"},b("button",{class:"btn primary big",onclick:()=>o(t)},s?"🏮 繼續開舖／返大堂":"🏠 返大堂／揀章節"),e?b("button",{class:"btn big",onclick:()=>o(e)},"🏮 同小黑去日本餐廳食飯"):null,b("button",{class:"btn",onclick:()=>o(n)},"🛍️ 商店")));ui("收工！",u,{onClose:()=>{a||t()}}),Ie("お疲{つか}れ様{さま}でした！","cat")}Ta(document.body);re("#start").style.setProperty("--title-bg",`url("${_a("title_bg")}")`);const rt=new Gv(re("#c"));let Da=!1;rt.shakeOn=at().settings.shake!==!1;const Do={chop:()=>{rt.shake(.18),rt.cat.squash(-.08)},press:()=>rt.shake(.15),bad:()=>{rt.shake(.4),rt.cat.squash(-.12)},good:()=>rt.cat.squash(.08),perfect:()=>{rt.shake(.25),rt.cat.squash(.14)},level:()=>{rt.shake(.55),rt.cat.squash(.2)},rare:()=>rt.shake(.3),door:()=>rt.shake(.12),purr:()=>rt.cat.squash(-.1),coin:()=>{}};ix(i=>{var t;return(t=Do[i])==null?void 0:t.call(Do)});rt.onView=i=>dx(i==="cook"?"cook":i.startsWith("rest")?"rest":"kitchen");ol();li();kc(rt);rt.cat.happyEyes=999;rt.setView("kitchen",!0);fl();re("#start").addEventListener("click",async()=>{sx(),ct("tap"),re("#start").classList.add("gone");const i=Qv();at().started?await gy(i):await my()},{once:!0});re("#btn-book").onclick=()=>{ct("tap"),Nc()};re("#btn-shop").onclick=()=>{if(ct("tap"),Da)return Ce("做緊嘢，收工先買啦！");dl(rt)};re("#btn-set").onclick=()=>{ct("tap"),fy(rt)};let Ju=0;rt.onCatTap=()=>{if(!at().started)return;ct("purr"),rt.hearts(),rt.cat.happyEyes=.8;const i=at();i.affection++,Ju++,i.lastPet!==Fs()?(i.lastPet=Fs(),i.coins+=10,Ce("小黑好開心！ 今日第一次掃 ❤️ +10🪙"),Gs(10),li()):Ju%5===0&&(pe(rt,"cat",dn.purr.jp,dn.purr.yue,"cat"),setTimeout(()=>fe("cat"),2e3)),Me()};async function my(){await se(500),rt.cat.happyEyes=0,rt.cat.happy(),ct("meow"),await pe(rt,"cat",dn.wake.jp,dn.wake.yue,"cat"),await se(300),await pe(rt,"cat",dn.intro.jp,dn.intro.yue,"cat");const i=await nn([{label:"<b>🌱 零基礎</b><small>假名都未識</small>",value:0},{label:"<b>🌿 識少少</b><small>識假名、簡單字</small>",value:1},{label:"<b>🌳 N3 或以上</b><small>想練聽力同實用句子</small>",value:2}],{title:b("div",{class:"panel-title"},"你嘅日文程度係？（之後可以喺 ⚙️ 改）")}),t=at().settings;at().jpLevel=i.value,i.value===0&&Object.assign(t,{furigana:!0,romaji:!0,yue:!0,subs:"show"}),i.value===1&&Object.assign(t,{furigana:!0,romaji:!1,yue:!0,subs:"show"}),i.value===2&&Object.assign(t,{furigana:!0,romaji:!1,yue:!1,subs:"tap"}),ol(),at().started=!0,at().lastGift=Fs(),Me(),fe(),Ve("撳 🔊 可以再聽；撳小黑可以掃佢 🐾",3500),rd(!0),await Md({tutorial:!0})}async function gy(i){rd(!0),rt.cat.happyEyes=0,rt.cat.happy(),ct("meow");const t=at(),e=Dn.filter(n=>n.unlock.day&&n.unlock.day===t.daysPlayed&&i.newDay);pe(rt,"cat","おかえりにゃ！","你返嚟喇喵！","cat"),i.gift&&(await new Promise(n=>{ui("🎁 每日禮物",b("div",{class:"summary"},b("div",{class:"sum-big"},"🎁"),b("div",{class:"gift-amt"},`+${i.gift} 🪙`),b("div",{class:"streak-row"},...Array.from({length:7},(s,r)=>b("div",{class:`sd ${r<Math.min(t.streak,7)?"on":""}`},r<Math.min(t.streak,7)?"🔥":r+1))),b("div",{class:"sub"},i.streakBroken?"連續日數斷咗… 唔緊要，今日重新開始！":`連續 ${t.streak} 日！每日禮物越嚟越大（最多 7 日）`),b("button",{class:"btn primary big",onclick:()=>ad()},"收！")),{onClose:n})}),Gs(i.gift),li());for(const n of e)await bd(n);if(t.jpLevel==null){const n=await nn(Bs.map(s=>({label:`<b>${s.icon} ${s.name}</b><small>${s.desc}</small>`,value:s.id})),{title:b("div",{class:"panel-title"},"新增咗分級對白！揀你嘅日文程度（之後可喺 ⚙️ 改）")});t.jpLevel=n.value,Me()}Qi()}function xd(){return Dn.filter(i=>(i.chapter||"home")===at().chapter&&Zi(i))}function yd(){var t;const i=xd();return(t=i[parseInt(rl(Fs()),36)%i.length])==null?void 0:t.id}function fl(){rt.setMenu(Dn.filter(i=>(i.chapter||"home")===at().chapter).map(i=>({name:en[i.dish].jp.replace(/\{.*?\}/g,""),price:i.price,locked:!Zi(i)})))}function _y(){const i=gx();if(!i)return null;const t=Bs[i.to];return b("div",{class:"special lv-nudge"},`${Bs[i.from].icon} 呢級答啱率 ${i.rate}%（${i.total} 題）！想試吓 ${t.icon} ${t.name} 嗎？`,b("button",{class:"btn primary",onclick:()=>{at().jpLevel=i.to,Me(),ct("level"),Ce(`轉咗做 ${t.name}`),Qi()}},"升一級"),b("button",{class:"btn",onclick:()=>{at().lvNudgeDismissed=i.from,Me(),Qi()}},"遲啲先"))}function Qi(){Da=!1,fe(),rt.setView("kitchen"),rt.catFace("front");const i=yd(),t=i?ve(mx(i).dish):null,e=at().shifts>=1;fl();const n=cr.find(r=>r.id===at().chapter)||cr[0],s=b("div",{class:"hub-btns"},b("button",{class:"btn primary big","data-action":"open-shift",onclick:()=>{ct("tap"),Md({})}},"🏮 開舖"),b("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{ct("tap"),e?wd():Ce("完成第一位客人就解鎖！")}},e?"🍱 去日本餐廳":"🔒 日本餐廳"),b("button",{class:"btn",onclick:()=>{ct("tap"),Nc()}},"📚 圖鑑"),b("button",{class:"btn",onclick:()=>{ct("tap"),dl(rt)}},"🛍️ 商店"));bn(b("div",{class:"hub-info"},b("div",{class:"chapter-tabs","aria-label":"選擇章節"},cr.map(r=>b("button",{class:`btn ${r.id===n.id?"primary":""}`,"data-chapter":r.id,"aria-pressed":String(r.id===n.id),onclick:()=>{at().chapter=r.id,Me(),ct("tap"),Qi()}},oi({home:"ui_open_shop",izakaya:"shop_deco_lantern",cafe:"dish_instant_coffee",sushi:"dish_salmon_nigiri",dark:"dish_dark_ding"}[r.id]),` ${{home:"食堂",izakaya:"居酒屋",cafe:"喫茶店",sushi:"壽司店",dark:"暗黑"}[r.id]}`))),b("div",{class:"panel-title"},n.name),b("div",{class:"sub"},`${n.intro}　完成 ${at().chapterShifts[n.id]||0} 更`),n.id==="dark"?b("button",{class:"btn",onclick:()=>Nc("secrets")},`後廚捷徑圖鑑 · ${Object.keys(at().darkSecrets).length} / 7`):null,t?b("div",{class:"special"},"🌟 今日特價：",b("span",{class:"jp-inline",html:hn(t.jp)})," 金幣 x2"):null,_y()),s).classList.add("hub-panel")}async function Md({tutorial:i=!1}={}){Da=!0,cd();const t=i?1:5,e={served:0,coins:0,perfect:0};let n=null;const s=at().chapter==="izakaya"&&!i?My(t):at().chapter==="sushi"&&!i?xy(t):null,r=at().chapter==="dark"&&!i;r&&(kx(),await Bx());for(let o=0;o<t;o++){re("#shiftinfo").textContent=`客人 ${o+1} / ${t}`,re("#shiftinfo").classList.add("show");const c=await Sy({index:o,tutorial:i,forceDish:n,plan:s});if(c.cancelled){await se(700);continue}if(n=null,e.served++,e.coins+=c.coins,c.stars===3&&e.perfect++,r&&(e.coins+=await Zx(rt,at().settings.subs==="tap"),(o===1||o===3)&&o<t-1&&(e.coins+=await Kx()),Mi()),c.levelUps){const l=await Sd();l&&(l.chapter||"home")===at().chapter&&(n=l.dish)}}re("#shiftinfo").classList.remove("show"),r&&(e.coins+=Jx(),e.dark=zx(e),Fx()),at().shifts++,at().chapterShifts[at().chapter]=(at().chapterShifts[at().chapter]||0)+1,Me(),Mi(),fe(),rt.setView("kitchen"),rt.cat.happy(),ct("level");const a=at().shifts===1;await new Promise(o=>py(e,{firstShift:a,onNext:()=>o(()=>Qi()),onRest:()=>o(()=>wd()),onShop:()=>o(()=>{Qi(),dl(rt)})})).then(o=>o())}function vy(i,t){if(t&&i===0)return zs[0];const e=at(),n=e.deco.includes("deco_maneki")?3:1,s=zs.filter(o=>!o.legend||e.level>=2),r=s.map(o=>o.weight*(o.rare?n:1));let a=Math.random()*r.reduce((o,c)=>o+c,0);for(let o=0;o<s.length;o++)if(a-=r[o],a<=0)return s[o];return s[0]}function xy(i){const t=[];for(;t.length<i;)t.push(...Ge(["kan","wasabi","soy"]));return t.slice(0,i)}function yy(i,t){const e={kan:Ic.includes(i.dish),wasabi:["salmon_nigiri","tekkamaki"].includes(i.dish),soy:Ic.includes(i.dish)};return t&&e[t]?t:Object.keys(e).find(n=>e[n])||null}function My(i){const t=Ge([...Ge(["add","less","swap"]).slice(0,2),"cancel"]),e=Ge(["replace","decline"]);return Array.from({length:i},(n,s)=>s%2===0?t[s/2]:e[(s-1)/2])}async function Sy({index:i,tutorial:t,forceDish:e,plan:n}){var At;const s=at(),r=s.level,a=s.chapter==="cafe"?zs[i%wo.length]:vy(i,t),o=xd(),c=e||Qh(o.map(Z=>Z.dish));let l=o.find(Z=>Z.dish===c)||o[0];const u=s.chapter==="izakaya"&&!t?n==null?void 0:n[i]:null,h=s.chapter==="sushi"&&!t?yy(l,n==null?void 0:n[i]):null,d=hy(l.dish),p=u==="less"||h==="kan"||s.level>=2&&!t&&l.chapter!=="dark"&&Math.random()<.45;let g=u==="less"?2+Math.floor(Math.random()*2):p?1+Math.floor(Math.random()*3):1;const v=l.chapter==="dark";v&&(g=1,Ut.persona=Hx(),Ut.custId=a.id);const m=Gn(v?Uv:p?vx:_x),f=v?{jp:m.jp.replace("{dish}",l.jp),yue:m.yue.replace("{dishYue}",l.yue)}:On(m,p?{dish:l.dish,num:d[g-1]}:{dish:l.dish}),E=Qe(a.id,m);ga(f.jp,E);const x={3:Gn(Vi.great),2:Gn(Vi.ok),1:Gn(Vi.meh)};for(const Z of Object.values(x))ga(Z.jp,Qe(a.id,Z));Mi(),rt.setView("kitchen"),rt.catFace("customer"),ct("door"),await rt.customerIn(a),a.rare&&(ct("rare"),Ce(`✨ 稀有客人：${a.yue}！ 貼士 x${a.tip}`,2600,"rare")),v&&(Vx(Ut.persona),Ti()),rt.cat.play("wave",.8),await pe(rt,"cat",dn.irasshai.jp,dn.irasshai.yue,"cat"),fe("cat");const S=s.settings.subs==="tap";let L=0,C=!1;for(t&&i===0&&Ve("客人講緊要咩，聽完揀啱嘅菜！",3500);!C;){pe(rt,"cust",f.jp,f.yue,E,{hidden:S});const Z=Ge(o).map(T=>{const nt=ve(T.dish);return{value:T.dish,el:b("div",{class:"dish-opt"},b("span",{class:"emo"},Xn(nt)),b("span",{class:"jp-inline",html:hn(nt.jp)}))}}),wt=await nn(Z,{title:b("div",{class:"panel-title"},"🐾 客人要咩？"),cols:Math.min(Z.length,2)});let $=1;if(wt.value===l.dish&&p&&($=(await nn(d.map((nt,et)=>({value:et+1,el:b("div",{class:"dish-opt"},b("span",{class:"emo"},Xn(ve(nt))),b("span",{class:"jp-inline",html:hn(ve(nt).jp)}))})),{title:b("div",{class:"panel-title"},"要幾多個？"),cols:3})).value),wt.value===l.dish&&$===g)C=!0,ct("good"),ke(l.dish,L===0),p&&ke(d[g-1],L===0);else{L++,ct("bad"),rt.cat.play("sad",.6);const T=Gn(Vi.wrong);await pe(rt,"cust",T.jp,T.yue,Qe(a.id,T)),Ve(`佢講：「${f.yue}」— 再聽一次！`,3500),ke(l.dish,!1),await se(600)}}Bn(l.dish),fe("cust");const R=async(Z,wt,$,T,nt,et,it=E)=>{let dt=!0;for(Bn(nt);;){if(pe(rt,"cust",Z,wt,it,{hidden:S}),(await nn(Ge($.map((ft,A)=>({label:ft,value:A}))),{title:b("div",{class:"panel-title"},et)})).value===T){ke(nt,dt),ct("good"),fe("cust");return}dt=!1,ke(nt,!1),ct("bad"),Ve(wt,3e3)}};if(at().chapter==="home"&&!t&&Ue()>0&&Math.random()<.3){const Z=Sx(l.dish);if(Z){const wt=Qe(a.id,Z.d);Bn(Z.d.key);let $=!0;for(;;){if(pe(rt,"cust",Z.d.jp,Z.d.yue,wt,{hidden:S}),(await nn(Ge([Z.d.label,...Z.wrongs].map((nt,et)=>({label:nt,value:et===0?0:-1}))),{title:b("div",{class:"panel-title"},"客人再補一句？")})).value===0){ke(Z.d.key,$),wr(Z.d.lv,$),ct("good"),fe("cust");break}$=!1,ke(Z.d.key,!1),ct("bad"),Ve(Z.d.yue,3e3)}}}const I=()=>(fe("cust"),rt.cat.play("sad",.6),Ce("客人取消咗訂單，今次冇收入"),rt.customerOut(),{coins:0,stars:0,levelUps:0,cancelled:!0}),Q=Z=>Z[Math.floor(Math.random()*Z.length)],_=Z=>ve(Z.dish).yue.replace(/（.*?）/g,"");if(at().chapter==="izakaya"&&(u?!["replace","decline"].includes(u):i%2===0)){const Z=o.filter(Y=>Y.id!==l.id),wt=[["add",3],["cancel",1],...g>=2?[["less",2]]:[],...Z.length?[["swap",3]]:[]];let $=Math.random()*wt.reduce((Y,[,K])=>Y+K,0),T=u||(wt.find(([,Y])=>($-=Y)<=0)||wt[0])[0];(T==="swap"&&!Z.length||T==="less"&&g<2)&&(T="add");const nt=Y=>`改做${_(Y)}`,et=T==="swap"?Q(Z):null,it={add:Ex,less:Tx,swap:Ax,cancel:Rx}[T],dt={add:"tsuika",less:"herasu",swap:"kaeru",cancel:"kyanseru"}[T],ut={add:"加一份",less:"減一份",cancel:"取消訂單",swap:et&&nt(et)}[T],ft=Gn(it),A=et?On(ft,{dish:et.dish}):ft,y=["加一份","減一份","取消訂單"],O=Z.filter(Y=>Y!==et);O.length&&y.push(nt(Q(O)));const q=Ge(y.filter(Y=>Y!==ut)).slice(0,2);if(await R(A.jp,A.yue,[ut,...q],0,dt,"客人想改張單？",Qe(a.id,ft)),T==="add")g++,Ce(`加單成功：共 ${g} 份`);else if(T==="less")g--,Ce(`減咗一份：共 ${g} 份`);else if(T==="swap")l=et,Bn(l.dish),ke(l.dish,!0),Ce(`改做 ${_(l)}`);else return I()}else if(at().chapter==="izakaya"){const Z=o.find(et=>et.id!==l.id),wt=On(Gn(bx),{dish:l.dish});if(await pe(rt,"cat",wt.jp,wt.yue,"cat"),fe("cat"),!Z||(u?u==="decline":Math.random()<.25)){const et=Gn(Cx),it=Z?[ve(Z.dish).yue]:[];return await R(et.jp,et.yue,["取消所有訂單",ve(l.dish).yue,...it].slice(0,3),0,"yameru","沽清後，客人點樣話？",Qe(a.id,et)),I()}const $=ve(Z.dish),T=Gn(wx),nt=On(T,{dish:Z.dish});await R(nt.jp,nt.yue,[$.yue,ve(l.dish).yue,"取消所有訂單"],0,"urikire","沽清後，客人改要邊款？",Qe(a.id,T)),l=Z,Bn(l.dish),ke(l.dish,!0)}let M=null,F=null;if(at().chapter==="cafe"&&["instant_coffee","black_tea","matcha_latte"].includes(l.id)){const Z=wo[i%wo.length],wt=at().regularVisits[Z.id]||0;M=Z.request,F=Z.id,l={...l,steps:[...l.steps,{type:"request",request:M,jp:Z.jp,yue:Z.yue,voice:a.id,title:`${Z.name} · ${wt?`第 ${wt+1} 次到訪`:"初次到訪"}：點樣調製？`}]}}if(h==="wasabi"){const Z=bo[Math.floor(Math.random()*bo.length)];M=Z.id,l={...l,steps:[...l.steps,{type:"request",request:Z.id,jp:Z.jp,yue:Z.yue,voice:a.id,title:"客人對山葵有要求，點整？",retry:"再聽一次：留意客人想要幾多山葵。",actions:bo.map(wt=>({id:wt.id,icon:wt.icon,label:wt.label,detail:wt.detail}))}]}}s.cooked[l.id]||await new Promise(Z=>vd(l,{onStart:Z}));const k=await by(l);let B=null;l.chapter==="dark"&&(rt.setView("serve"),B=jx(l,k,await Gx(l,rt))),M==="iced"&&((At=rt.dish)==null||At.add($h())),F&&(s.regularVisits[F]=(s.regularVisits[F]||0)+1);const X=k>=.9?3:k>=.65?2:1;s.stars[l.id]=Math.max(s.stars[l.id]||0,X),s.cooked[l.id]=(s.cooked[l.id]||0)+1,rt.setView("serve"),rt.slideDishToCustomer(),await se(500),h==="soy"&&(fe("cust"),await R(Uu.jp,Uu.yue,Ev,0,"shoyu_tsukeru","壽司應該點沾豉油？"));const z=x[X],J=Qe(a.id,z);rt.customerJump();const G=ga(z.jp,J),_t=Promise.race([pe(rt,"cust",z.jp,z.yue,J),G.then(()=>se(6e3),()=>se(6e3))]),mt=yd()===l.id;let gt=1;B&&(gt=B.lookMult,await _t,await se(400),fe("cust"),await qx(rt,a,B,S));const Wt=B?Ut.persona.pay*gt*(.8+(s.darkRating??3)*.08):1;let Bt=Math.round(l.price*g*(.6+.4*k)*a.tip*(mt?2:1)*Wt/10);S&&L===0&&(Bt*=2),B&&(Bt=Yx(B,Bt));const j=B?{none:`💰 +${B.bonus} 入彩池`,believe:`💰 +${B.bonus} 入彩池`,honest:"老實 x0.8",expose:"被揭穿",plain:"如實介紹"}[B.outcome]:null,st=10+X*5;bn(b("div",{class:"sub"},`${ve(l.dish).yue} × ${g}${M?` · ${ve(M).yue}`:""}`),b("div",{class:"stars-big"},...[1,2,3].map(Z=>b("span",{class:Z<=X?"on":""},"★"))),b("div",{class:"reward"},`🪙 +${Bt}　✨ +${st} XP`,mt?b("span",{class:"tag"},"特價 x2"):null,j?b("span",{class:"tag"},j):null,S&&L===0?b("span",{class:"tag"},"🎧 x2"):null)),[1,2,3].forEach(Z=>Z<=X&&setTimeout(()=>ct("good"),Z*180)),rt.coinsFromCustomer(),Gs(Bt,{x:innerWidth*.7,y:innerHeight*.35}),s.coins+=Bt,s.served++,al(st),li(),await Promise.all([se(1600),_t.then(()=>se(400))]),B&&(fe(),await Qx(l,B)),rt.removeDish();const Mt=!(t&&i===0)&&!v;let pt=0;Mt&&(pt=await wy(a));const Nt=Gn(Vi.bye);return Mt&&Nt.key&&Math.random()<1/3?await Ey(a,Nt):await pe(rt,"cust",Nt.jp,Nt.yue,Qe(a.id,Nt)),fe("cust"),rt.customerOut(),Ay(),{coins:Bt+pt,stars:X,levelUps:at().level-r}}async function by(i){Mi(),rt.setView("cook"),rt.useStation(i.station),rt.clearWork();const t=[];for(const n of i.steps){const s=await ly[n.type](n,rt);t.push({score:s,weight:n.weight||1}),n.verb&&(Bn(n.verb),ke(n.verb,s>=.7))}fx();const e=t.reduce((n,s)=>n+s.score*s.weight,0)/t.reduce((n,s)=>n+s.weight,0);return rt.showDish(i.dish),rt.catFace("front"),rt.cat.happy(),ct("perfect"),Mi(),await pe(rt,"cat",dn.done.jp,dn.done.yue,"cat"),fe("cat"),e}async function wy(i){const{st:t,wrongs:e}=yx(at().chapter,Qh),n=Qe(i.id,t);Bn(t.key);const s=at().settings.subs==="tap";pe(rt,"cust",t.jp,"",n,{hidden:s});const r=Ge([{value:!0,label:t.yue},...e.map(c=>({value:!1,label:c.yue}))]),a=await nn(r,{title:b("div",{class:"panel-title"},"💬 客人講咩？（答啱有貼士）")});ke(t.key,a.value),wr(t.lv,a.value);let o=0;return a.value?(ct("perfect"),a.button.classList.add("right"),o=15,at().coins+=o,al(5),Gs(o),li(),me("+15 🪙","good")):(ct("bad"),a.button.classList.add("wrong"),[...a.grid.children].forEach((c,l)=>{r[l].value&&c.classList.add("right")}),Ve(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}。之後會再考你！`,3500)),await se(1300),fe("cust"),o}async function Ey(i,t){const e=Ge(Vi.bye.filter(r=>r.key!==t.key&&r.yue!==t.yue&&(r.lv??0)<=Ue())).slice(0,2);Bn(t.key);const n=Ge([{value:!0,label:t.yue},...e.map(r=>({value:!1,label:r.yue}))]);pe(rt,"cust",t.jp,"",Qe(i.id,t),{hidden:at().settings.subs==="tap"});const s=await nn(n,{title:b("div",{class:"panel-title"},"👋 客人走之前講咩？")});ke(t.key,s.value),wr(t.lv??0,s.value),s.value?(ct("perfect"),me("+5 🪙","good"),at().coins+=5,li()):(ct("bad"),Ve(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}`,3e3)),await se(900)}async function Sd(){const i=at();ct("level"),rt.cat.happy(),me(`Lv.${i.level}!`,"level"),await pe(rt,"cat",dn.levelup.jp,dn.levelup.yue,"cat"),fe("cat");const t=Dn.find(e=>e.unlock.level===i.level);return t&&await bd(t),t}async function bd(i){fl();const t=ve(i.dish);ct("rare"),pe(rt,"cat",dn.newRecipe.jp,dn.newRecipe.yue,"cat"),await cl("好嘢！",b("div",{class:"unlock"},b("div",{class:"big-emo spin"},Xn(t)),b("div",{class:"panel-title"},"🔓 新食譜解鎖！"),Vn(t.jp,{yue:t.yue,voice:"word",size:"big",autoplay:!0}))),fe("cat")}const Ty=[[1,"🎊 第一位客人！"],[5,"🏅 招呼咗 5 位客人"],[10,"🏆 10 位客人！小黑好驕傲"],[25,"👑 25 位！你係人氣店"],[50,"🌸 50 位！傳說級食堂"]];function Ay(){const i=at();for(const[t,e]of Ty)i.served===t&&!i.achievements.includes("served"+t)&&(i.achievements.push("served"+t),Ce(e,2600,"rare"),ct("rare"),Me())}async function wd(){Da=!0,cd(),Mi(),fe();const i=hr,t=Mn(i.people),e=Mn(i.foods),n=Mn(i.drinks),s=Dc[t.n-1],r=(i.prices[e]+i.prices[n])*t.n;let a=0,o=0;const c={ppl:t,food:e,drink:n,num:s,f:{}},l=Ix(c,Ux[Ue()]);await sa(()=>{rt.catTo("rest"),rt.setView("rest",!0)});const u=`你哋 ${t.n} 個人，每人想食 ${ve(e).yue.replace(/（.*?）/g,"")}，飲 ${ve(n).yue.replace(/（.*?）/g,"")}${l.map(M=>M.task(c)).filter(Boolean).map(M=>`；${M}`).join("")}`;px(`${t.n} 位 · ${ve(e).yue.replace(/（.*?）/g,"")} · ${ve(n).yue.replace(/（.*?）/g,"")}`,u),Ve("今次你做客人！小黑做店員 🐈‍⬛",3e3);const h=async(M,F,k,B)=>{M.jp?await pe(rt,"cat",M.jp,M.yue,"cat"):(fe("cat"),Ve(M.yue,2500)),o++;let X=!0;for(;;){const z=Ge(F.map((G,_t)=>({value:_t,el:Vn(G.jp,{yue:G.yue,voice:"word"})}))),J=await nn(z,{title:b("div",{class:"panel-title"},B)});if(J.value===k)return ct("good"),J.button.classList.add("right"),X&&a++,await Ie(F[k].jp,"word"),X;ct("bad"),J.button.classList.add("wrong"),X=!1,Ve(`「${F[J.value].yue}」唔係最啱，再試吓！`,3e3),await se(900)}},d=async M=>{for(const F of l.filter(k=>k.phase===M)){const k=F.task(c);k&&Ve(`📋 ${k}`,5e3);const B=F.build(c),X=await h(B.staff||{jp:null,yue:B.prompt},B.options,0,B.title);wr(F.lv,X),B.reply&&await pe(rt,"cat",B.reply.jp,B.reply.yue,"cat")}},p=i.people.map(M=>({jp:M.jp,yue:M.yue}));await h(i.staff.welcome,p,i.people.indexOf(t),"👥 你哋幾多位？"),ke(t.key,!0),await d("enter"),await pe(rt,"cat",i.staff.seat.jp,i.staff.seat.yue,"cat"),await d("seat"),await d("preorder");const g=Mn(i.foods.filter(M=>M!==e)),v=Mn(Dc.filter(M=>M!==s)),m=[On(i.you.order,{food:e,num:s}),On(i.you.order,{food:g,num:s}),On(i.you.order,{food:e,num:v})];await h(i.staff.order,m,0,"🍽️ 點餐（記住人數！）"),await d("order");const f=Mn(i.drinks.filter(M=>M!==n)),E=[On(i.you.drink,{drink:n,num:s}),On(i.you.drink,{drink:f,num:s}),On(i.you.drink,{drink:n,num:v})];await h(i.staff.drink,E,0,"🥤 飲品"),await h(i.staff.confirm,[i.you.yes,i.you.wrongPay,i.you.wrongGreet],0,"✅ 就咁多？"),await pe(rt,"cat",i.staff.wait.jp,i.staff.wait.yue,"cat"),await d("wait"),fe(),Mi(),await sa(()=>{rt.setView("restTable",!0),rt.restServe([e,n],t.n)}),await pe(rt,"cat",i.staff.serve.jp,i.staff.serve.yue,"cat"),await d("mid"),await h({jp:null,yue:"（食之前講咩？）"},[i.you.itadakimasu,i.you.wrongEat,i.you.gochisou],0,"🙏 開動之前講咩？"),ke("itadakimasu",!0),Mi(),fe(),Ve("😋 食緊… 好好味！",1800),await se(1800),await sa(()=>{rt.restClear(),rt.setView("rest",!0)}),await h({jp:null,yue:"（食完講咩？）"},[i.you.gochisou,i.you.itadakimasu,i.you.wrongGreet],0,"😊 食完講咩？"),ke("gochisousama",!0),await d("after"),await h({jp:null,yue:"（想埋單）"},[i.you.kaikei,i.you.wrongPay,i.you.no],0,"🧾 叫埋單"),ke("okaikei",!0),await d("pay");const x=On(Ue()>0&&Math.random()<.5?i.staff.pay2:i.staff.pay,{price:r});await pe(rt,"cat",x.jp,"（聽吓幾錢？）","cat",{hidden:!0}),o++;const S=Ge([r+100,Math.max(100,r-50),r+500,r*2].filter(M=>M!==r)).slice(0,2);let L=!0;for(;;){const M=await nn(Ge([r,...S]).map(F=>({value:F,label:`<b>${F}円</b>`})),{title:b("div",{class:"panel-title"},"💴 要畀幾錢？（撳泡泡可以睇字幕）"),cols:3});if(M.value===r){ct("coin"),M.button.classList.add("right"),L&&a++;break}ct("bad"),M.button.classList.add("wrong"),L=!1,Ie(x.jp,"cat"),await se(700)}await d("receipt"),await pe(rt,"cat",i.staff.bye.jp,i.staff.bye.yue,"cat");const C=a/o,R=40+Math.round(C*80),I=20+Math.round(C*20);at().restaurantDone++,at().coins+=R;const Q=al(I);Me(),li(),ct("level");const _=C===1?"💮":C>.7?"⭕":"🔺";await cl("返廚房 🏠",b("div",{class:"unlock"},b("div",{class:"big-emo spin"},_),b("div",{class:"panel-title"},`點餐成功！一次答啱 ${a} / ${o}`),b("div",{class:"reward"},`🪙 +${R}　✨ +${I} XP　🏮 旅遊印章 x${at().restaurantDone}`))),Gs(R),fe(),re("#taskbar").classList.remove("show"),await sa(()=>{rt.catTo("kitchen"),rt.setView("kitchen",!0)}),Q&&await Sd(),Qi()}
