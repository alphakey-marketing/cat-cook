(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const np=new Set(["ui_lock","ui_unlock","ui_settings","ui_coin","ui_timer","ui_serves"]),Qo=n=>new URL(`./art/game/${n}.${np.has(n)?"svg":"webp"}`,document.baseURI).href;function Zn(n,t="",e=""){const i=document.createElement("img");return i.src=Qo(n),i.alt=t,i.className=`art ${e}`,i.draggable=!1,i.decoding="async",i}const ai=n=>{if(!n.textIcon)return Zn(`${n.cat}_${n.id}`,n.yue);const t=document.createElement("span");return t.className="food-icon",t.setAttribute("role","img"),t.setAttribute("aria-label",n.yue),t.textContent=n.emoji,t},Au={"🪙":"coin","🔥":"streak","📚":"book","📖":"book","🛍️":"shop","⚙️":"settings","🔊":"speaker","✕":"close","❤️":"heart","💖":"heart","💕":"heart","🐾":"paw","🔒":"lock","⭐":"star_on","★":"star_on","☆":"star_off","🎁":"gift","🎉":"celebrate","🎊":"celebrate","🔓":"unlock","🎧":"listen","🍽️":"serves","⏱️":"timer","🎯":"target","✨":"xp","🌟":"rare","🎙️":"mic","📅":"calendar","📊":"stats","💴":"yen","🧾":"receipt","🌱":"grow_1","🌿":"grow_2","🌳":"grow_3","🌸":"grow_4","💮":"stamp_hanamaru","⭕":"stamp_maru","🔺":"stamp_sankaku","🏅":"medal","🏆":"trophy","👑":"crown","🏮":"open_shop","🐈‍⬛":"@logo_cat"};function dr(n){var s;if((s=n.closest)!=null&&s.call(n,"script,style"))return;const t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);const i=new RegExp(Object.keys(Au).join("|"),"gu");for(const a of e){if(a.parentElement.closest("script,style"))continue;const o=a.textContent;if(i.lastIndex=0,!i.test(o))continue;i.lastIndex=0;const r=document.createDocumentFragment();let c=0;for(const l of o.matchAll(i)){r.append(o.slice(c,l.index));const u=Au[l[0]];r.append(Zn(u.startsWith("@")?u.slice(1):`ui_${u}`,l[0])),c=l.index+l[0].length}r.append(o.slice(c)),a.replaceWith(r)}}const $a=new Set;let Ho=null,hd=0,wc=0,Ar;const En=()=>$a.size>0,Mn=()=>(Ho??performance.now())-hd;function ba(n,t){const e=En();t?$a.add(n):$a.delete(n),!e&&En()?(Ho=performance.now(),document.dispatchEvent(new Event("gamepause"))):e&&!En()&&(hd+=performance.now()-Ho,Ho=null),document.body.classList.toggle("game-paused",En())}function tr(n,t){var e;if(t)ba(n,!0),clearInterval(Ar),ba("resume",!1),(e=document.querySelector("#resume-countdown"))==null||e.remove();else{if($a.has(n)&&$a.size===1&&wc){ba("resume",!0);let i=3;const s=document.createElement("div");s.id="resume-countdown",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=`準備繼續 · ${i}`,document.body.append(s),Ar=setInterval(()=>{--i?s.textContent=`準備繼續 · ${i}`:(clearInterval(Ar),s.remove(),ba("resume",!1))},1e3)}ba(n,!1)}}function Jt(n=0){const t=Mn()+n;return new Promise(e=>{const i=()=>!En()&&Mn()>=t?e():setTimeout(i,25);i()})}async function ip(n,...t){wc++;try{return await Jt(),await n(...t)}finally{wc--}}document.addEventListener("visibilitychange",()=>tr("hidden",document.hidden));document.hidden&&tr("hidden",!0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="169",sp=0,Ru=1,ap=2,Fl=1,dd=2,mi=3,Hi=0,bn=1,yn=2,Ui=0,Zs=1,Cu=2,Pu=3,ku=4,op=5,os=100,rp=101,cp=102,lp=103,up=104,hp=200,dp=201,fp=202,pp=203,Ec=204,Tc=205,mp=206,gp=207,_p=208,vp=209,yp=210,xp=211,Mp=212,bp=213,Sp=214,Ac=0,Rc=1,Cc=2,oa=3,Pc=4,kc=5,Lc=6,Ic=7,fd=0,wp=1,Ep=2,Ni=0,Tp=1,Ap=2,Rp=3,pd=4,Cp=5,Pp=6,kp=7,md=300,ra=301,ca=302,Dc=303,Uc=304,fr=306,la=1e3,cs=1001,Nc=1002,Hn=1003,Lp=1004,co=1005,Yn=1006,Rr=1007,ls=1008,Si=1009,gd=1010,_d=1011,Xa=1012,Bl=1013,fs=1014,_i=1015,eo=1016,zl=1017,jl=1018,ua=1020,vd=35902,yd=1021,xd=1022,Kn=1023,Md=1024,bd=1025,Qs=1026,ha=1027,Sd=1028,Hl=1029,wd=1030,Vl=1031,Gl=1033,Vo=33776,Go=33777,Wo=33778,$o=33779,Oc=35840,Fc=35841,Bc=35842,zc=35843,jc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,$c=37810,Xc=37811,qc=37812,Yc=37813,Kc=37814,Jc=37815,Zc=37816,Qc=37817,tl=37818,el=37819,nl=37820,il=37821,Xo=36492,sl=36494,al=36495,Ed=36283,ol=36284,rl=36285,cl=36286,Ip=3200,Dp=3201,Td=0,Up=1,Ii="",We="srgb",Wi="srgb-linear",Wl="display-p3",pr="display-p3-linear",er="linear",Ie="srgb",nr="rec709",ir="p3",ws=7680,Lu=519,Np=512,Op=513,Fp=514,Ad=515,Bp=516,zp=517,jp=518,Hp=519,ll=35044,Iu="300 es",vi=2e3,sr=2001;class ya{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,ul=180/Math.PI;function xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function sn(n,t,e){return Math.max(t,Math.min(e,n))}function Vp(n,t){return(n%t+t)%t}function Pr(n,t,e){return(1-e)*n+e*t}function ei(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*s+t.x,this.y=a*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,i,s,a,o,r,c,l){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,c,l)}set(t,e,i,s,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],u=i[4],h=i[7],m=i[2],f=i[5],g=i[8],_=s[0],p=s[3],d=s[6],M=s[1],y=s[4],b=s[7],C=s[2],E=s[5],A=s[8];return a[0]=o*_+r*M+c*C,a[3]=o*p+r*y+c*E,a[6]=o*d+r*b+c*A,a[1]=l*_+u*M+h*C,a[4]=l*p+u*y+h*E,a[7]=l*d+u*b+h*A,a[2]=m*_+f*M+g*C,a[5]=m*p+f*y+g*E,a[8]=m*d+f*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-i*a*u+i*r*c+s*a*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],h=u*o-r*l,m=r*c-u*a,f=l*a-o*c,g=e*h+i*m+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(r*i-s*o)*_,t[3]=m*_,t[4]=(u*e-s*c)*_,t[5]=(s*a-r*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-s*l,s*c,-s*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new ne;function Rd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gp(){const n=qa("canvas");return n.style.display="block",n}const Du={};function qo(n){n in Du||(Du[n]=!0,console.warn(n))}function Wp(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function $p(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Uu=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[Wi]:{transfer:er,primaries:nr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[We]:{transfer:Ie,primaries:nr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pr]:{transfer:er,primaries:ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Nu),fromReference:n=>n.applyMatrix3(Uu)},[Wl]:{transfer:Ie,primaries:ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Nu),fromReference:n=>n.applyMatrix3(Uu).convertLinearToSRGB()}},qp=new Set([Wi,pr]),xe={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Sa[t].toReference,s=Sa[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Sa[n].primaries},getTransfer:function(n){return n===Ii?er:Sa[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Sa[t].luminanceCoefficients)}};function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class Yp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=qa("canvas")),Es.width=t.width,Es.height=t.height;const i=Es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=ta(a[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ta(e[i]/255)*255):e[i]=ta(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kp=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(Ir(s[o].image)):a.push(Ir(s[o]))}else a=Ir(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ir(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class dn extends ya{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,i=cs,s=cs,a=Yn,o=ls,r=Kn,c=Si,l=dn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=xi(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=md;dn.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const c=t.elements,l=c[0],u=c[4],h=c[8],m=c[1],f=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(u-m)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+m)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(f+1)/2,C=(d+1)/2,E=(u+m)/4,A=(h+_)/4,N=(g+p)/4;return y>b&&y>C?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=E/i,a=A/i):b>C?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=E/s,a=N/s):C<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),i=A/a,s=N/a),this.set(i,s,a,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(m-u)*(m-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(m-u)/M,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends ya{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends Zp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Pd extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qp extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,o,r){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const m=a[o+0],f=a[o+1],g=a[o+2],_=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(r===1){t[e+0]=m,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==m||l!==f||u!==g){let p=1-r;const d=c*m+l*f+u*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const C=Math.sqrt(y),E=Math.atan2(C,d*M);p=Math.sin(p*E)/C,r=Math.sin(r*E)/C}const b=r*M;if(c=c*p+m*b,l=l*p+f*b,u=u*p+g*b,h=h*p+_*b,p===1-r){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,a,o){const r=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=a[o],m=a[o+1],f=a[o+2],g=a[o+3];return t[e]=r*g+u*h+c*f-l*m,t[e+1]=c*g+u*m+l*h-r*f,t[e+2]=l*g+u*f+r*m-c*h,t[e+3]=u*g-r*h-c*m-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),u=r(s/2),h=r(a/2),m=c(i/2),f=c(s/2),g=c(a/2);switch(o){case"XYZ":this._x=m*u*h+l*f*g,this._y=l*f*h-m*u*g,this._z=l*u*g+m*f*h,this._w=l*u*h-m*f*g;break;case"YXZ":this._x=m*u*h+l*f*g,this._y=l*f*h-m*u*g,this._z=l*u*g-m*f*h,this._w=l*u*h+m*f*g;break;case"ZXY":this._x=m*u*h-l*f*g,this._y=l*f*h+m*u*g,this._z=l*u*g+m*f*h,this._w=l*u*h-m*f*g;break;case"ZYX":this._x=m*u*h-l*f*g,this._y=l*f*h+m*u*g,this._z=l*u*g-m*f*h,this._w=l*u*h+m*f*g;break;case"YZX":this._x=m*u*h+l*f*g,this._y=l*f*h+m*u*g,this._z=l*u*g-m*f*h,this._w=l*u*h-m*f*g;break;case"XZY":this._x=m*u*h-l*f*g,this._y=l*f*h-m*u*g,this._z=l*u*g+m*f*h,this._w=l*u*h+m*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],h=e[10],m=i+r+h;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(o-s)*f}else if(i>r&&i>h){const f=2*Math.sqrt(1+i-r-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(a+l)/f}else if(r>h){const f=2*Math.sqrt(1+r-i-h);this._w=(a-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-r);this._w=(o-s)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*r+s*l-a*c,this._y=s*u+o*c+a*r-i*l,this._z=a*u+o*l+i*c-s*r,this._w=o*u-i*r-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=s,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),h=Math.sin((1-e)*u)/l,m=Math.sin(e*u)/l;return this._w=o*h+this._w*m,this._x=i*h+this._x*m,this._y=s*h+this._y*m,this._z=a*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*s-r*i),u=2*(r*e-a*s),h=2*(a*i-o*e);return this.x=e+c*l+o*h-r*u,this.y=i+c*u+r*l-a*h,this.z=s+c*h+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=s*c-a*r,this.y=a*o-i*c,this.z=i*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new D,Ou=new no;class io{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(a,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wa),uo.subVectors(this.max,wa),Ts.subVectors(t.a,wa),As.subVectors(t.b,wa),Rs.subVectors(t.c,wa),Ai.subVectors(As,Ts),Ri.subVectors(Rs,As),qi.subVectors(Ts,Rs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-qi.z,qi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,qi.z,0,-qi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-qi.y,qi.x,0];return!Ur(e,Ts,As,Rs,uo)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,Ts,As,Rs,uo))?!1:(ho.crossVectors(Ai,Ri),e=[ho.x,ho.y,ho.z],Ur(e,Ts,As,Rs,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new D,new D,new D,new D,new D,new D,new D,new D],Wn=new D,lo=new io,Ts=new D,As=new D,Rs=new D,Ai=new D,Ri=new D,qi=new D,wa=new D,uo=new D,ho=new D,Yi=new D;function Ur(n,t,e,i,s){for(let a=0,o=n.length-3;a<=o;a+=3){Yi.fromArray(n,a);const r=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),c=t.dot(Yi),l=e.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const t0=new io,Ea=new D,Nr=new D;class mr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):t0.setFromPoints(t).getCenter(i);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ea.subVectors(t,this.center);const e=Ea.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ea.copy(t.center).add(Nr)),this.expandByPoint(Ea.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new D,Or=new D,fo=new D,Ci=new D,Fr=new D,po=new D,Br=new D;class $l{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Or.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Or);const a=t.distanceTo(e)*.5,o=-this.direction.dot(fo),r=Ci.dot(this.direction),c=-Ci.dot(fo),l=Ci.lengthSq(),u=Math.abs(1-o*o);let h,m,f,g;if(u>0)if(h=o*c-r,m=o*r-c,g=a*u,h>=0)if(m>=-g)if(m<=g){const _=1/u;h*=_,m*=_,f=h*(h+o*m+2*r)+m*(o*h+m+2*c)+l}else m=a,h=Math.max(0,-(o*m+r)),f=-h*h+m*(m+2*c)+l;else m=-a,h=Math.max(0,-(o*m+r)),f=-h*h+m*(m+2*c)+l;else m<=-g?(h=Math.max(0,-(-o*a+r)),m=h>0?-a:Math.min(Math.max(-a,-c),a),f=-h*h+m*(m+2*c)+l):m<=g?(h=0,m=Math.min(Math.max(-a,-c),a),f=m*(m+2*c)+l):(h=Math.max(0,-(o*a+r)),m=h>0?a:Math.min(Math.max(-a,-c),a),f=-h*h+m*(m+2*c)+l);else m=o>0?-a:a,h=Math.max(0,-(o*m+r)),f=-h*h+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Or).addScaledVector(fo,m),f}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,m=this.origin;return l>=0?(i=(t.min.x-m.x)*l,s=(t.max.x-m.x)*l):(i=(t.max.x-m.x)*l,s=(t.min.x-m.x)*l),u>=0?(a=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(a=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),i>o||a>s||((a>i||isNaN(i))&&(i=a),(o<s||isNaN(s))&&(s=o),h>=0?(r=(t.min.z-m.z)*h,c=(t.max.z-m.z)*h):(r=(t.max.z-m.z)*h,c=(t.min.z-m.z)*h),i>c||r>s)||((r>i||i!==i)&&(i=r),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,a){Fr.subVectors(e,t),po.subVectors(i,t),Br.crossVectors(Fr,po);let o=this.direction.dot(Br),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const c=r*this.direction.dot(po.crossVectors(Ci,po));if(c<0)return null;const l=r*this.direction.dot(Fr.cross(Ci));if(l<0||c+l>o)return null;const u=-r*Ci.dot(Br);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,i,s,a,o,r,c,l,u,h,m,f,g,_,p){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,c,l,u,h,m,f,g,_,p)}set(t,e,i,s,a,o,r,c,l,u,h,m,f,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=a,d[5]=o,d[9]=r,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=m,d[3]=f,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),a=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const m=o*u,f=o*h,g=r*u,_=r*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=m-_*l,e[9]=-r*c,e[2]=_-m*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const m=c*u,f=c*h,g=l*u,_=l*h;e[0]=m+_*r,e[4]=g*r-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-r,e[2]=f*r-g,e[6]=_+m*r,e[10]=o*c}else if(t.order==="ZXY"){const m=c*u,f=c*h,g=l*u,_=l*h;e[0]=m-_*r,e[4]=-o*h,e[8]=g+f*r,e[1]=f+g*r,e[5]=o*u,e[9]=_-m*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const m=o*u,f=o*h,g=r*u,_=r*h;e[0]=c*u,e[4]=g*l-f,e[8]=m*l+_,e[1]=c*h,e[5]=_*l+m,e[9]=f*l-g,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const m=o*c,f=o*l,g=r*c,_=r*l;e[0]=c*u,e[4]=_-m*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=f*h+g,e[10]=m-_*h}else if(t.order==="XZY"){const m=o*c,f=o*l,g=r*c,_=r*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=m*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=r*u,e[10]=_*h+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(e0,t,n0)}lookAt(t,e,i){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Pi.crossVectors(i,Cn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Pi.crossVectors(i,Cn)),Pi.normalize(),mo.crossVectors(Cn,Pi),s[0]=Pi.x,s[4]=mo.x,s[8]=Cn.x,s[1]=Pi.y,s[5]=mo.y,s[9]=Cn.y,s[2]=Pi.z,s[6]=mo.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],u=i[1],h=i[5],m=i[9],f=i[13],g=i[2],_=i[6],p=i[10],d=i[14],M=i[3],y=i[7],b=i[11],C=i[15],E=s[0],A=s[4],N=s[8],X=s[12],v=s[1],w=s[5],O=s[9],k=s[13],B=s[2],L=s[6],U=s[10],I=s[14],F=s[3],ot=s[7],ut=s[11],tt=s[15];return a[0]=o*E+r*v+c*B+l*F,a[4]=o*A+r*w+c*L+l*ot,a[8]=o*N+r*O+c*U+l*ut,a[12]=o*X+r*k+c*I+l*tt,a[1]=u*E+h*v+m*B+f*F,a[5]=u*A+h*w+m*L+f*ot,a[9]=u*N+h*O+m*U+f*ut,a[13]=u*X+h*k+m*I+f*tt,a[2]=g*E+_*v+p*B+d*F,a[6]=g*A+_*w+p*L+d*ot,a[10]=g*N+_*O+p*U+d*ut,a[14]=g*X+_*k+p*I+d*tt,a[3]=M*E+y*v+b*B+C*F,a[7]=M*A+y*w+b*L+C*ot,a[11]=M*N+y*O+b*U+C*ut,a[15]=M*X+y*k+b*I+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],h=t[6],m=t[10],f=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+a*c*h-s*l*h-a*r*m+i*l*m+s*r*f-i*c*f)+_*(+e*c*f-e*l*m+a*o*m-s*o*f+s*l*u-a*c*u)+p*(+e*l*h-e*r*f-a*o*h+i*o*f+a*r*u-i*l*u)+d*(-s*r*u-e*c*h+e*r*m+s*o*h-i*o*m+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],h=t[9],m=t[10],f=t[11],g=t[12],_=t[13],p=t[14],d=t[15],M=h*p*l-_*m*l+_*c*f-r*p*f-h*c*d+r*m*d,y=g*m*l-u*p*l-g*c*f+o*p*f+u*c*d-o*m*d,b=u*_*l-g*h*l+g*r*f-o*_*f-u*r*d+o*h*d,C=g*h*c-u*_*c-g*r*m+o*_*m+u*r*p-o*h*p,E=e*M+i*y+s*b+a*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=M*A,t[1]=(_*m*a-h*p*a-_*s*f+i*p*f+h*s*d-i*m*d)*A,t[2]=(r*p*a-_*c*a+_*s*l-i*p*l-r*s*d+i*c*d)*A,t[3]=(h*c*a-r*m*a-h*s*l+i*m*l+r*s*f-i*c*f)*A,t[4]=y*A,t[5]=(u*p*a-g*m*a+g*s*f-e*p*f-u*s*d+e*m*d)*A,t[6]=(g*c*a-o*p*a-g*s*l+e*p*l+o*s*d-e*c*d)*A,t[7]=(o*m*a-u*c*a+u*s*l-e*m*l-o*s*f+e*c*f)*A,t[8]=b*A,t[9]=(g*h*a-u*_*a-g*i*f+e*_*f+u*i*d-e*h*d)*A,t[10]=(o*_*a-g*r*a+g*i*l-e*_*l-o*i*d+e*r*d)*A,t[11]=(u*r*a-o*h*a-u*i*l+e*h*l+o*i*f-e*r*f)*A,t[12]=C*A,t[13]=(u*_*s-g*h*s+g*i*m-e*_*m-u*i*p+e*h*p)*A,t[14]=(g*r*s-o*_*s-g*i*c+e*_*c+o*i*p-e*r*p)*A,t[15]=(o*h*s-u*r*s+u*i*c-e*h*c-o*i*m+e*r*m)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+i,l*r-s*c,l*c+s*r,0,l*r+s*c,u*r+i,u*c-s*o,0,l*c-s*r,u*c+s*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,o){return this.set(1,i,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,h=r+r,m=a*l,f=a*u,g=a*h,_=o*u,p=o*h,d=r*h,M=c*l,y=c*u,b=c*h,C=i.x,E=i.y,A=i.z;return s[0]=(1-(_+d))*C,s[1]=(f+b)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(m+d))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(p-M)*A,s[10]=(1-(m+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),r=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const l=1/a,u=1/o,h=1/r;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,e.setFromRotationMatrix($n),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,s,a,o,r=vi){const c=this.elements,l=2*a/(e-t),u=2*a/(i-s),h=(e+t)/(e-t),m=(i+s)/(i-s);let f,g;if(r===vi)f=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===sr)f=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,o,r=vi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-a),m=(e+t)*l,f=(i+s)*u;let g,_;if(r===vi)g=(o+a)*h,_=-2*h;else if(r===sr)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Cs=new D,$n=new Ae,e0=new D(0,0,0),n0=new D(1,1,1),Pi=new D,mo=new D,Cn=new D,Fu=new Ae,Bu=new no;class oi{constructor(t=0,e=0,i=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],c=s[1],l=s[5],u=s[9],h=s[2],m=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let i0=0;const zu=new D,Ps=new no,di=new Ae,go=new D,Ta=new D,s0=new D,a0=new no,ju=new D(1,0,0),Hu=new D(0,1,0),Vu=new D(0,0,1),Gu={type:"added"},o0={type:"removed"},ks={type:"childadded",child:null},zr={type:"childremoved",child:null};class Ze extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new D,e=new oi,i=new no,s=new D(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ne}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ta,go,this.up):di.lookAt(go,Ta,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(di),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(o0),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,s0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,a0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(t.shapes,h)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];s.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),m=o(t.skeletons),f=o(t.animations),g=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ze.DEFAULT_UP=new D(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new D,fi=new D,jr=new D,pi=new D,Ls=new D,Is=new D,Wu=new D,Hr=new D,Vr=new D,Gr=new D,Wr=new Ee,$r=new Ee,Xr=new Ee;class jn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xn.subVectors(t,e),s.cross(Xn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Xn.subVectors(s,e),fi.subVectors(i,e),jr.subVectors(t,e);const o=Xn.dot(Xn),r=Xn.dot(fi),c=Xn.dot(jr),l=fi.dot(fi),u=fi.dot(jr),h=o*l-r*r;if(h===0)return a.set(0,0,0),null;const m=1/h,f=(l*c-r*u)*m,g=(o*u-r*c)*m;return a.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,s,a,o,r,c){return this.getBarycoord(t,e,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(r,pi.z),c)}static getInterpolatedAttribute(t,e,i,s,a,o){return Wr.setScalar(0),$r.setScalar(0),Xr.setScalar(0),Wr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,i),Xr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wr,a.x),o.addScaledVector($r,a.y),o.addScaledVector(Xr,a.z),o}static isFrontFacing(t,e,i,s){return Xn.subVectors(i,e),fi.subVectors(t,e),Xn.cross(fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Xn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return jn.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let o,r;Ls.subVectors(s,i),Is.subVectors(a,i),Hr.subVectors(t,i);const c=Ls.dot(Hr),l=Is.dot(Hr);if(c<=0&&l<=0)return e.copy(i);Vr.subVectors(t,s);const u=Ls.dot(Vr),h=Is.dot(Vr);if(u>=0&&h<=u)return e.copy(s);const m=c*h-u*l;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ls,o);Gr.subVectors(t,a);const f=Ls.dot(Gr),g=Is.dot(Gr);if(g>=0&&f<=g)return e.copy(a);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(i).addScaledVector(Is,r);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Wu.subVectors(a,s),r=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Wu,r);const d=1/(p+_+m);return o=_*d,r=m*d,e.copy(i).addScaledVector(Ls,o).addScaledVector(Is,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},_o={h:0,s:0,l:0};function qr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=Vp(t,1),e=sn(e,0,1),i=sn(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=qr(o,a,t+1/3),this.g=qr(o,a,t),this.b=qr(o,a,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const i=kd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return xe.fromWorkingColorSpace(rn.copy(this),t),Math.round(sn(rn.r*255,0,255))*65536+Math.round(sn(rn.g*255,0,255))*256+Math.round(sn(rn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(rn.copy(this),e);const i=rn.r,s=rn.g,a=rn.b,o=Math.max(i,s,a),r=Math.min(i,s,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const h=o-r;switch(l=u<=.5?h/(o+r):h/(2-o-r),o){case i:c=(s-a)/h+(s<a?6:0);break;case s:c=(a-i)/h+2;break;case a:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=We){xe.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,i=rn.g,s=rn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(_o);const i=Pr(ki.h,_o.h,e),s=Pr(ki.s,_o.s,e),a=Pr(ki.l,_o.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new re;re.NAMES=kd;let r0=0;class xs extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Zs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ec&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ae extends xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new D,vo=new ft;class Jn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ll,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ll&&(t.usage=this.usage),t}}class Ld extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Id extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ne extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let c0=0;const Nn=new Ae,Yr=new Ze,Ds=new D,Pn=new io,Aa=new io,en=new D;class pn extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rd(t)?Id:Ld)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ne().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Pn.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];Aa.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(Pn.min,Aa.min),Pn.expandByPoint(en),en.addVectors(Pn.max,Aa.max),Pn.expandByPoint(en)):(Pn.expandByPoint(Aa.min),Pn.expandByPoint(Aa.max))}Pn.getCenter(i);let s=0;for(let a=0,o=t.count;a<o;a++)en.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(en));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)en.fromBufferAttribute(r,l),c&&(Ds.fromBufferAttribute(t,l),en.add(Ds)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],c=[];for(let N=0;N<i.count;N++)r[N]=new D,c[N]=new D;const l=new D,u=new D,h=new D,m=new ft,f=new ft,g=new ft,_=new D,p=new D;function d(N,X,v){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,X),h.fromBufferAttribute(i,v),m.fromBufferAttribute(a,N),f.fromBufferAttribute(a,X),g.fromBufferAttribute(a,v),u.sub(l),h.sub(l),f.sub(m),g.sub(m);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(w),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(w),r[N].add(_),r[X].add(_),r[v].add(_),c[N].add(p),c[X].add(p),c[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,X=M.length;N<X;++N){const v=M[N],w=v.start,O=v.count;for(let k=w,B=w+O;k<B;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new D,b=new D,C=new D,E=new D;function A(N){C.fromBufferAttribute(s,N),E.copy(C);const X=r[N];y.copy(X),y.sub(C.multiplyScalar(C.dot(X))).normalize(),b.crossVectors(E,X);const w=b.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,w)}for(let N=0,X=M.length;N<X;++N){const v=M[N],w=v.start,O=v.count;for(let k=w,B=w+O;k<B;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);const s=new D,a=new D,o=new D,r=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let m=0,f=t.count;m<f;m+=3){const g=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,a),h.subVectors(s,a),u.cross(h),r.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),r.add(u),c.add(u),l.add(u),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let m=0,f=e.count;m<f;m+=3)s.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,a),h.subVectors(s,a),u.cross(h),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,h=r.normalized,m=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){r.isInterleavedBufferAttribute?f=c[_]*r.data.stride+r.offset:f=c[_]*u;for(let d=0;d<u;d++)m[g++]=l[f++]}return new Jn(m,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,i=this.index.array,s=this.attributes;for(const r in s){const c=s[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,h=l.length;u<h;u++){const m=l[u],f=t(m,i);c.push(f)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,m=l.length;h<m;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],h=a[l];for(let m=0,f=h.length;m<f;m++)u.push(h[m].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new Ae,Ki=new $l,yo=new mr,Xu=new D,xo=new D,Mo=new D,bo=new D,Kr=new D,So=new D,qu=new D,wo=new D;class W extends Ze{constructor(t=new pn,e=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){So.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],h=a[c];u!==0&&(Kr.fromBufferAttribute(h,t),o?So.addScaledVector(Kr,u):So.addScaledVector(Kr.sub(e),u))}e.add(So)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(a),Ki.copy(t.ray).recast(t.near),!(yo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(yo,Xu)===null||Ki.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&($u.copy(a).invert(),Ki.copy(t.ray).applyMatrix4($u),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let s;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,m=a.groups,f=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],d=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(r.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,C=y;b<C;b+=3){const E=r.getX(b),A=r.getX(b+1),N=r.getX(b+2);s=Eo(this,d,t,i,l,u,h,E,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(r.count,f.start+f.count);for(let p=g,d=_;p<d;p+=3){const M=r.getX(p),y=r.getX(p+1),b=r.getX(p+2);s=Eo(this,o,t,i,l,u,h,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],d=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,C=y;b<C;b+=3){const E=b,A=b+1,N=b+2;s=Eo(this,d,t,i,l,u,h,E,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,d=_;p<d;p+=3){const M=p,y=p+1,b=p+2;s=Eo(this,o,t,i,l,u,h,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function l0(n,t,e,i,s,a,o,r){let c;if(t.side===bn?c=i.intersectTriangle(o,a,s,!0,r):c=i.intersectTriangle(s,a,o,t.side===Hi,r),c===null)return null;wo.copy(r),wo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(wo);return l<e.near||l>e.far?null:{distance:l,point:wo.clone(),object:n}}function Eo(n,t,e,i,s,a,o,r,c,l){n.getVertexPosition(r,xo),n.getVertexPosition(c,Mo),n.getVertexPosition(l,bo);const u=l0(n,t,e,i,xo,Mo,bo,qu);if(u){const h=new D;jn.getBarycoord(qu,xo,Mo,bo,h),s&&(u.uv=jn.getInterpolatedAttribute(s,r,c,l,h,new ft)),a&&(u.uv1=jn.getInterpolatedAttribute(a,r,c,l,h,new ft)),o&&(u.normal=jn.getInterpolatedAttribute(o,r,c,l,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a:r,b:c,c:l,normal:new D,materialIndex:0};jn.getNormal(xo,Mo,bo,m.normal),u.face=m,u.barycoord=h}return u}class te extends pn{constructor(t=1,e=1,i=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],h=[];let m=0,f=0;g("z","y","x",-1,-1,i,e,t,o,a,0),g("z","y","x",1,-1,i,e,-t,o,a,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(h,2));function g(_,p,d,M,y,b,C,E,A,N,X){const v=b/A,w=C/N,O=b/2,k=C/2,B=E/2,L=A+1,U=N+1;let I=0,F=0;const ot=new D;for(let ut=0;ut<U;ut++){const tt=ut*w-k;for(let Pt=0;Pt<L;Pt++){const jt=Pt*v-O;ot[_]=jt*M,ot[p]=tt*y,ot[d]=B,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[p]=0,ot[d]=E>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Pt/A),h.push(1-ut/N),I+=1}}for(let ut=0;ut<N;ut++)for(let tt=0;tt<A;tt++){const Pt=m+tt+L*ut,jt=m+tt+L*(ut+1),K=m+(tt+1)+L*(ut+1),ct=m+(tt+1)+L*ut;c.push(Pt,jt,ct),c.push(jt,K,ct),F+=6}r.addGroup(f,F,X),f+=F,m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function da(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=da(n[e]);for(const s in i)t[s]=i[s]}return t}function u0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const h0={clone:da,merge:vn};var d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=da(t.uniforms),this.uniformsGroups=u0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ud extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new D,Yu=new ft,Ku=new ft;class In extends Ud{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Yu,Ku),e.subVectors(Ku,Yu)}setViewOffset(t,e,i,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,Ns=1;class p0 extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(Us,Ns,t,e);s.layers=this.layers,this.add(s);const a=new In(Us,Ns,t,e);a.layers=this.layers,this.add(a);const o=new In(Us,Ns,t,e);o.layers=this.layers,this.add(o);const r=new In(Us,Ns,t,e);r.layers=this.layers,this.add(r);const c=new In(Us,Ns,t,e);c.layers=this.layers,this.add(c);const l=new In(Us,Ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,h=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,r),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,m,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nd extends dn{constructor(t,e,i,s,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ra,super(t,e,i,s,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class m0 extends ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Nd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),a=new Vi({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ui});a.uniforms.tEquirect.value=e;const o=new W(s,a),r=e.minFilter;return e.minFilter===ls&&(e.minFilter=Yn),new p0(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(a)}}const Jr=new D,g0=new D,_0=new ne;class ss{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Jr.subVectors(i,e).cross(g0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Jr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_0.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new mr,To=new D;class ql{constructor(t=new ss,e=new ss,i=new ss,s=new ss,a=new ss,o=new ss){this.planes=[t,e,i,s,a,o]}set(t,e,i,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],c=s[3],l=s[4],u=s[5],h=s[6],m=s[7],f=s[8],g=s[9],_=s[10],p=s[11],d=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,m-l,p-f,b-d).normalize(),i[1].setComponents(c+a,m+l,p+f,b+d).normalize(),i[2].setComponents(c+o,m+u,p+g,b+M).normalize(),i[3].setComponents(c-o,m-u,p-g,b-M).normalize(),i[4].setComponents(c-r,m-h,p-_,b-y).normalize(),e===vi)i[5].setComponents(c+r,m+h,p+_,b+y).normalize();else if(e===sr)i[5].setComponents(r,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let n=null,t=!1,e=null,i=null;function s(a,o){e(a,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function v0(n){const t=new WeakMap;function e(r,c){const l=r.array,u=r.usage,h=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,u),r.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)r.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:r.version,size:h}}function i(r,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,r),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let m=0;for(let f=1;f<h.length;f++){const g=h[m],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,h[m]=_)}h.length=m+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const c=t.get(r);c&&(n.deleteBuffer(c.buffer),t.delete(r))}function o(r,c){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const u=t.get(r);(!u||u.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const l=t.get(r);if(l===void 0)t.set(r,e(r,c));else if(l.version<r.version){if(l.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,r,c),l.version=r.version}}return{get:s,remove:a,update:o}}class Vt extends pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(s),l=r+1,u=c+1,h=t/r,m=e/c,f=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const M=d*m-o;for(let y=0;y<l;y++){const b=y*h-a;g.push(b,-M,0),_.push(0,0,1),p.push(y/r),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<r;M++){const y=M+l*d,b=M+l*(d+1),C=M+1+l*(d+1),E=M+1+l*d;f.push(y,b,E),f.push(b,C,E)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.widthSegments,t.heightSegments)}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H0=`#define PI 3.141592653589793
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`
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
}`,J0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
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
#endif`,_m=`struct PhysicalMaterial {
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
}`,vm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,Hg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,$g=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:y0,alphahash_pars_fragment:x0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:S0,alphatest_pars_fragment:w0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:k0,iridescence_fragment:L0,bumpmap_pars_fragment:I0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:O0,color_fragment:F0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:j0,common:H0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:$0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:K0,envmap_fragment:J0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:Q0,envmap_pars_vertex:tm,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_pars_fragment:rm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:lm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:fm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:_m,lights_fragment_begin:vm,lights_fragment_maps:ym,lights_fragment_end:xm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:wm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:km,morphcolor_vertex:Lm,morphnormal_vertex:Im,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Bm,normal_vertex:zm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:$m,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:Km,dithering_pars_fragment:Jm,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:ag,skinning_vertex:og,skinnormal_vertex:rg,specularmap_fragment:cg,specularmap_pars_fragment:lg,tonemapping_fragment:ug,tonemapping_pars_fragment:hg,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:_g,background_vert:vg,background_frag:yg,backgroundCube_vert:xg,backgroundCube_frag:Mg,cube_vert:bg,cube_frag:Sg,depth_vert:wg,depth_frag:Eg,distanceRGBA_vert:Tg,distanceRGBA_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:kg,meshbasic_vert:Lg,meshbasic_frag:Ig,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Ng,meshmatcap_frag:Og,meshnormal_vert:Fg,meshnormal_frag:Bg,meshphong_vert:zg,meshphong_frag:jg,meshphysical_vert:Hg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:$g,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:Kg,sprite_frag:Jg},xt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ti={basic:{uniforms:vn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:vn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new re(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:vn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:vn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:vn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new re(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:vn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:vn([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:vn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:vn([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:vn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:vn([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:vn([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:vn([xt.lights,xt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ti.physical={uniforms:vn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Ao={r:0,b:0,g:0},Zi=new oi,Zg=new Ae;function Qg(n,t,e,i,s,a,o){const r=new re(0);let c=a===!0?0:1,l,u,h=null,m=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=g(M);b===null?d(r,c):b&&b.isColor&&(d(b,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===fr)?(u===void 0&&(u=new W(new te(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:da(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(Zi)),u.material.toneMapped=xe.getTransfer(b.colorSpace)!==Ie,(h!==b||m!==b.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,m=b.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new W(new Vt(2,2),new Vi({name:"BackgroundMaterial",uniforms:da(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=xe.getTransfer(b.colorSpace)!==Ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||m!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,m=b.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,y){M.getRGB(Ao,Dd(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,y,o)}return{getClearColor:function(){return r},setClearColor:function(M,y=1){r.set(M),c=y,d(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(r,c)},render:_,addToRenderList:p}}function t_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,o=!1;function r(v,w,O,k,B){let L=!1;const U=h(k,O,w);a!==U&&(a=U,l(a.object)),L=f(v,k,O,B),L&&g(v,k,O,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,b(v,w,O,k),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,w,O){const k=O.wireframe===!0;let B=i[v.id];B===void 0&&(B={},i[v.id]=B);let L=B[w.id];L===void 0&&(L={},B[w.id]=L);let U=L[k];return U===void 0&&(U=m(c()),L[k]=U),U}function m(v){const w=[],O=[],k=[];for(let B=0;B<e;B++)w[B]=0,O[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,w,O,k){const B=a.attributes,L=w.attributes;let U=0;const I=O.getAttributes();for(const F in I)if(I[F].location>=0){const ut=B[F];let tt=L[F];if(tt===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),ut===void 0||ut.attribute!==tt||tt&&ut.data!==tt.data)return!0;U++}return a.attributesNum!==U||a.index!==k}function g(v,w,O,k){const B={},L=w.attributes;let U=0;const I=O.getAttributes();for(const F in I)if(I[F].location>=0){let ut=L[F];ut===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const tt={};tt.attribute=ut,ut&&ut.data&&(tt.data=ut.data),B[F]=tt,U++}a.attributes=B,a.attributesNum=U,a.index=k}function _(){const v=a.newAttributes;for(let w=0,O=v.length;w<O;w++)v[w]=0}function p(v){d(v,0)}function d(v,w){const O=a.newAttributes,k=a.enabledAttributes,B=a.attributeDivisors;O[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),B[v]!==w&&(n.vertexAttribDivisor(v,w),B[v]=w)}function M(){const v=a.newAttributes,w=a.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==v[O]&&(n.disableVertexAttribArray(O),w[O]=0)}function y(v,w,O,k,B,L,U){U===!0?n.vertexAttribIPointer(v,w,O,B,L):n.vertexAttribPointer(v,w,O,k,B,L)}function b(v,w,O,k){_();const B=k.attributes,L=O.getAttributes(),U=w.defaultAttributeValues;for(const I in L){const F=L[I];if(F.location>=0){let ot=B[I];if(ot===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const ut=ot.normalized,tt=ot.itemSize,Pt=t.get(ot);if(Pt===void 0)continue;const jt=Pt.buffer,K=Pt.type,ct=Pt.bytesPerElement,Mt=K===n.INT||K===n.UNSIGNED_INT||ot.gpuType===Bl;if(ot.isInterleavedBufferAttribute){const _t=ot.data,Ht=_t.stride,At=ot.offset;if(_t.isInstancedInterleavedBuffer){for(let Dt=0;Dt<F.locationSize;Dt++)d(F.location+Dt,_t.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Dt=0;Dt<F.locationSize;Dt++)p(F.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Dt=0;Dt<F.locationSize;Dt++)y(F.location+Dt,tt/F.locationSize,K,ut,Ht*ct,(At+tt/F.locationSize*Dt)*ct,Mt)}else{if(ot.isInstancedBufferAttribute){for(let _t=0;_t<F.locationSize;_t++)d(F.location+_t,ot.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let _t=0;_t<F.locationSize;_t++)p(F.location+_t);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let _t=0;_t<F.locationSize;_t++)y(F.location+_t,tt/F.locationSize,K,ut,tt*ct,tt/F.locationSize*_t*ct,Mt)}}else if(U!==void 0){const ut=U[I];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(F.location,ut);break;case 3:n.vertexAttrib3fv(F.location,ut);break;case 4:n.vertexAttrib4fv(F.location,ut);break;default:n.vertexAttrib1fv(F.location,ut)}}}}M()}function C(){N();for(const v in i){const w=i[v];for(const O in w){const k=w[O];for(const B in k)u(k[B].object),delete k[B];delete w[O]}delete i[v]}}function E(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const O in w){const k=w[O];for(const B in k)u(k[B].object),delete k[B];delete w[O]}delete i[v.id]}function A(v){for(const w in i){const O=i[w];if(O[v.id]===void 0)continue;const k=O[v.id];for(const B in k)u(k[B].object),delete k[B];delete O[v.id]}}function N(){X(),o=!0,a!==s&&(a=s,l(a.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:N,resetDefaultState:X,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function e_(n,t,e){let i;function s(l){i=l}function a(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function r(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function c(l,u,h,m){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],m[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,m,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<m.length;_++)e.update(g,i,m[_])}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function n_(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Kn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const N=A===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!N)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(m===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:r,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:m,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:C,maxSamples:E}}function i_(n){const t=this;let e=null,i=0,s=!1,a=!1;const o=new ss,r=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const f=h.length!==0||m||i!==0||s;return s=m,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,m){e=u(h,m,0)},this.setState=function(h,m,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||a&&!p)a?u(null):l();else{const M=a?0:i,y=M*4;let b=d.clippingState||null;c.value=b,b=u(g,m,y,f);for(let C=0;C!==y;++C)b[C]=e[C];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,m,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const d=f+_*4,M=m.matrixWorldInverse;r.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,b=f;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(M,r),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function s_(n){let t=new WeakMap;function e(o,r){return r===Dc?o.mapping=ra:r===Uc&&(o.mapping=ca),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===Dc||r===Uc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new m0(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Fd extends Ud{constructor(t=-1,e=1,i=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xs=4,Ju=[.125,.215,.35,.446,.526,.582],rs=20,Zr=new Fd,Zu=new re;let Qr=null,tc=0,ec=0,nc=!1;const as=(1+Math.sqrt(5))/2,Os=1/as,Qu=[new D(-as,Os,0),new D(as,Os,0),new D(-Os,0,as),new D(Os,0,as),new D(0,as,-Os),new D(0,as,Os),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Qr=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,tc,ec),this._renderer.xr.enabled=nc,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ra||t.mapping===ca?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:eo,format:Kn,colorSpace:Wi,depthBuffer:!1},s=eh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a_(a)),this._blurMaterial=o_(a,t,e)}return s}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,i,s){const r=new In(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Zu),u.toneMapping=Ni,u.autoClear=!1;const f=new ae({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new W(new te,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Zu),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(r.up.set(0,c[d],0),r.lookAt(l[d],0,0)):M===1?(r.up.set(0,0,c[d]),r.lookAt(0,l[d],0)):(r.up.set(0,c[d],0),r.lookAt(0,0,l[d]));const y=this._cubeSize;Ro(s,M*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,r),u.render(t,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ra||t.mapping===ca;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;Ro(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Zr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Qu[(s-a-1)%Qu.length];this._blur(t,a-1,a,o,r)}e.autoClear=i}_blur(t,e,i,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",a),this._halfBlur(o,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new W(this._lodPlanes[s],l),m=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*rs-1),_=a/g,p=isFinite(a)?1+Math.floor(u*_):rs;p>rs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);const d=[];let M=0;for(let A=0;A<rs;++A){const N=A/_,X=Math.exp(-N*N/2);d.push(X),A===0?M+=X:A<p&&(M+=2*X)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=d,m.latitudinal.value=o==="latitudinal",r&&(m.poleAxis.value=r);const{_lodMax:y}=this;m.dTheta.value=g,m.mipInt.value=y-i;const b=this._sizeLods[s],C=3*b*(s>y-Xs?s-y+Xs:0),E=4*(this._cubeSize-b);Ro(e,C,E,3*b,2*b),c.setRenderTarget(e),c.render(h,Zr)}}function a_(n){const t=[],e=[],i=[];let s=n;const a=n-Xs+1+Ju.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let c=1/r;o>n-Xs?c=Ju[o-n+Xs-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),u=-l,h=1+l,m=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*f),y=new Float32Array(p*g*f),b=new Float32Array(d*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,N=E>2?0:-1,X=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];M.set(X,_*g*E),y.set(m,p*g*E);const v=[E,E,E,E,E,E];b.set(v,d*g*E)}const C=new pn;C.setAttribute("position",new Jn(M,_)),C.setAttribute("uv",new Jn(y,p)),C.setAttribute("faceIndex",new Jn(b,d)),t.push(C),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function eh(n,t,e){const i=new ps(n,t,e);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function o_(n,t,e){const i=new Float32Array(rs),s=new D(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function nh(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ih(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function r_(n){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===Dc||c===Uc,u=c===ra||c===ca;if(l||u){let h=t.get(r);const m=h!==void 0?h.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==m)return e===null&&(e=new th(n)),h=l?e.fromEquirectangular(r,h):e.fromCubemap(r,h),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),h.texture;if(h!==void 0)return h.texture;{const f=r.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new th(n)),h=l?e.fromEquirectangular(r):e.fromCubemap(r),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),r.addEventListener("dispose",a),h.texture):null}}}return r}function s(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function c_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&qo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function l_(n,t,e,i){const s={},a=new WeakMap;function o(h){const m=h.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const _=m.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}m.removeEventListener("dispose",o),delete s[m.id];const f=a.get(m);f&&(t.remove(f),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function r(h,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function c(h){const m=h.attributes;for(const g in m)t.update(m[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],n.ARRAY_BUFFER)}}function l(h){const m=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,b=M.length;y<b;y+=3){const C=M[y+0],E=M[y+1],A=M[y+2];m.push(C,E,E,A,A,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const C=y+0,E=y+1,A=y+2;m.push(C,E,E,A,A,C)}}else return;const p=new(Rd(m)?Id:Ld)(m,1);p.version=_;const d=a.get(h);d&&t.remove(d),a.set(h,p)}function u(h){const m=a.get(h);if(m){const f=h.index;f!==null&&m.version<f.version&&l(h)}else l(h);return a.get(h)}return{get:r,update:c,getWireframeAttribute:u}}function u_(n,t,e){let i;function s(m){i=m}let a,o;function r(m){a=m.type,o=m.bytesPerElement}function c(m,f){n.drawElements(i,f,a,m*o),e.update(f,i,1)}function l(m,f,g){g!==0&&(n.drawElementsInstanced(i,f,a,m*o,g),e.update(f,i,g))}function u(m,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,m,0,g);let p=0;for(let d=0;d<g;d++)p+=f[d];e.update(p,i,1)}function h(m,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<m.length;d++)l(m[d]/o,f[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,a,m,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M];for(let M=0;M<_.length;M++)e.update(d,i,_[M])}}this.setMode=s,this.setIndex=r,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function h_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=r*(a/3);break;case n.LINES:e.lines+=r*(a/2);break;case n.LINE_STRIP:e.lines+=r*(a-1);break;case n.LINE_LOOP:e.lines+=r*a;break;case n.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function d_(n,t,e){const i=new WeakMap,s=new Ee;function a(o,r,c){const l=o.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=u!==void 0?u.length:0;let m=i.get(r);if(m===void 0||m.count!==h){let v=function(){N.dispose(),i.delete(r),r.removeEventListener("dispose",v)};var f=v;m!==void 0&&m.texture.dispose();const g=r.morphAttributes.position!==void 0,_=r.morphAttributes.normal!==void 0,p=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],M=r.morphAttributes.normal||[],y=r.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let C=r.attributes.position.count*b,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const A=new Float32Array(C*E*4*h),N=new Pd(A,C,E,h);N.type=_i,N.needsUpdate=!0;const X=b*4;for(let w=0;w<h;w++){const O=d[w],k=M[w],B=y[w],L=C*E*4*w;for(let U=0;U<O.count;U++){const I=U*X;g===!0&&(s.fromBufferAttribute(O,U),A[L+I+0]=s.x,A[L+I+1]=s.y,A[L+I+2]=s.z,A[L+I+3]=0),_===!0&&(s.fromBufferAttribute(k,U),A[L+I+4]=s.x,A[L+I+5]=s.y,A[L+I+6]=s.z,A[L+I+7]=0),p===!0&&(s.fromBufferAttribute(B,U),A[L+I+8]=s.x,A[L+I+9]=s.y,A[L+I+10]=s.z,A[L+I+11]=B.itemSize===4?s.w:1)}}m={count:h,texture:N,size:new ft(C,E)},i.set(r,m),r.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=r.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function f_(n,t,e,i){let s=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return h}function o(){s=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class Bd extends dn{constructor(t,e,i,s,a,o,r,c,l,u=Qs){if(u!==Qs&&u!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=fs),i===void 0&&u===ha&&(i=ua),super(null,s,a,o,r,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Hn,this.minFilter=c!==void 0?c:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zd=new dn,sh=new Bd(1,1),jd=new Pd,Hd=new Qp,Vd=new Nd,ah=[],oh=[],rh=new Float32Array(16),ch=new Float32Array(9),lh=new Float32Array(4);function xa(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=ah[s];if(a===void 0&&(a=new Float32Array(s),ah[s]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,n[o].toArray(a,r)}return a}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gr(n,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function p_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function m_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function g_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function __(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function v_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;lh.set(i),n.uniformMatrix2fv(this.addr,!1,lh),tn(e,i)}}function y_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;ch.set(i),n.uniformMatrix3fv(this.addr,!1,ch),tn(e,i)}}function x_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;rh.set(i),n.uniformMatrix4fv(this.addr,!1,rh),tn(e,i)}}function M_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function b_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function S_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function w_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function E_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function T_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function A_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function R_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function C_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(sh.compareFunction=Ad,a=sh):a=zd,e.setTexture2D(t||a,s)}function P_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hd,s)}function k_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Vd,s)}function L_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jd,s)}function I_(n){switch(n){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return y_;case 35676:return x_;case 5124:case 35670:return M_;case 35667:case 35671:return b_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return E_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return L_}}function D_(n,t){n.uniform1fv(this.addr,t)}function U_(n,t){const e=xa(t,this.size,2);n.uniform2fv(this.addr,e)}function N_(n,t){const e=xa(t,this.size,3);n.uniform3fv(this.addr,e)}function O_(n,t){const e=xa(t,this.size,4);n.uniform4fv(this.addr,e)}function F_(n,t){const e=xa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function B_(n,t){const e=xa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function z_(n,t){const e=xa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function j_(n,t){n.uniform1iv(this.addr,t)}function H_(n,t){n.uniform2iv(this.addr,t)}function V_(n,t){n.uniform3iv(this.addr,t)}function G_(n,t){n.uniform4iv(this.addr,t)}function W_(n,t){n.uniform1uiv(this.addr,t)}function $_(n,t){n.uniform2uiv(this.addr,t)}function X_(n,t){n.uniform3uiv(this.addr,t)}function q_(n,t){n.uniform4uiv(this.addr,t)}function Y_(n,t,e){const i=this.cache,s=t.length,a=gr(e,s);Qe(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zd,a[o])}function K_(n,t,e){const i=this.cache,s=t.length,a=gr(e,s);Qe(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hd,a[o])}function J_(n,t,e){const i=this.cache,s=t.length,a=gr(e,s);Qe(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vd,a[o])}function Z_(n,t,e){const i=this.cache,s=t.length,a=gr(e,s);Qe(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jd,a[o])}function Q_(n){switch(n){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return O_;case 35674:return F_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return j_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return $_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Z_}}class tv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=I_(e.type)}}class ev{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q_(e.type)}}class nv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function uh(n,t){n.seq.push(t),n.map[t.id]=t}function iv(n,t,e){const i=n.name,s=i.length;for(ic.lastIndex=0;;){const a=ic.exec(i),o=ic.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===s){uh(e,l===void 0?new tv(r,n,t):new ev(r,n,t));break}else{let h=e.map[r];h===void 0&&(h=new nv(r),uh(e,h)),e=h}}}class Yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);iv(a,o,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function hh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sv=37297;let av=0;function ov(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function rv(n){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(n);let i;switch(t===e?i="":t===ir&&e===nr?i="LinearDisplayP3ToLinearSRGB":t===nr&&e===ir&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case pr:return[i,"LinearTransferOETF"];case We:case Wl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ov(n.getShaderSource(t),o)}else return s}function cv(n,t){const e=rv(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lv(n,t){let e;switch(t){case Tp:e="Linear";break;case Ap:e="Reinhard";break;case Rp:e="Cineon";break;case pd:e="ACESFilmic";break;case Pp:e="AgX";break;case kp:e="Neutral";break;case Cp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new D;function uv(){xe.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function dv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),o=a.name;let r=1;a.type===n.FLOAT_MAT2&&(r=2),a.type===n.FLOAT_MAT3&&(r=3),a.type===n.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:n.getAttribLocation(t,o),locationSize:r}}return e}function Na(n){return n!==""}function fh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(pv,gv)}const mv=new Map;function gv(n,t){let e=ee[t];if(e===void 0){const i=mv.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(n){return n.replace(_v,vv)}function vv(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function gh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function yv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===dd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ra:case ca:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ca:t="ENVMAP_MODE_REFRACTION";break}return t}function bv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:t="ENVMAP_BLENDING_MULTIPLY";break;case wp:t="ENVMAP_BLENDING_MIX";break;case Ep:t="ENVMAP_BLENDING_ADD";break}return t}function Sv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function wv(n,t,e,i){const s=n.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=yv(e),l=xv(e),u=Mv(e),h=bv(e),m=Sv(e),f=hv(e),g=dv(a),_=s.createProgram();let p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Na).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Na).join(`
`),d.length>0&&(d+=`
`)):(p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),d=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ni?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,cv("linearToOutputTexel",e.outputColorSpace),uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Na).join(`
`)),o=hl(o),o=fh(o,e),o=ph(o,e),r=hl(r),r=fh(r,e),r=ph(r,e),o=mh(o),r=mh(r),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+p+o,b=M+d+r,C=hh(s,s.VERTEX_SHADER,y),E=hh(s,s.FRAGMENT_SHADER,b);s.attachShader(_,C),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(w){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(E).trim();let L=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,E);else{const I=dh(s,C,"vertex"),F=dh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+I+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||B==="")&&(U=!1);U&&(w.diagnostics={runnable:L,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:B,prefix:d}})}s.deleteShader(C),s.deleteShader(E),N=new Yo(s,_),X=fv(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let X;this.getAttributes=function(){return X===void 0&&A(this),X};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,sv)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=av++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let Ev=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Av(t),e.set(t,i)),i}}class Av{constructor(t){this.id=Ev++,this.code=t,this.usedTimes=0}}function Rv(n,t,e,i,s,a,o){const r=new Xl,c=new Tv,l=new Set,u=[],h=s.logarithmicDepthBuffer,m=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function d(v,w,O,k,B){const L=k.fog,U=B.geometry,I=v.isMeshStandardMaterial?k.environment:null,F=(v.isMeshStandardMaterial?e:t).get(v.envMap||I),ot=F&&F.mapping===fr?F.image.height:null,ut=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Pt=tt!==void 0?tt.length:0;let jt=0;U.morphAttributes.position!==void 0&&(jt=1),U.morphAttributes.normal!==void 0&&(jt=2),U.morphAttributes.color!==void 0&&(jt=3);let K,ct,Mt,_t;if(ut){const wn=ti[ut];K=wn.vertexShader,ct=wn.fragmentShader}else K=v.vertexShader,ct=v.fragmentShader,c.update(v),Mt=c.getVertexShaderID(v),_t=c.getFragmentShaderID(v);const Ht=n.getRenderTarget(),At=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,Gt=!!v.map,V=!!v.matcap,R=!!F,ht=!!v.aoMap,at=!!v.lightMap,st=!!v.bumpMap,dt=!!v.normalMap,mt=!!v.displacementMap,vt=!!v.emissiveMap,P=!!v.metalnessMap,S=!!v.roughnessMap,$=v.anisotropy>0,et=v.clearcoat>0,rt=v.dispersion>0,nt=v.iridescence>0,bt=v.sheen>0,yt=v.transmission>0,Rt=$&&!!v.anisotropyMap,ce=et&&!!v.clearcoatMap,pt=et&&!!v.clearcoatNormalMap,Ct=et&&!!v.clearcoatRoughnessMap,qt=nt&&!!v.iridescenceMap,Yt=nt&&!!v.iridescenceThicknessMap,Lt=bt&&!!v.sheenColorMap,le=bt&&!!v.sheenRoughnessMap,Qt=!!v.specularMap,Re=!!v.specularColorMap,z=!!v.specularIntensityMap,Et=yt&&!!v.transmissionMap,Z=yt&&!!v.thicknessMap,lt=!!v.gradientMap,St=!!v.alphaMap,Tt=v.alphaTest>0,ue=!!v.alphaHash,Xe=!!v.extensions;let Sn=Ni;v.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(Sn=n.toneMapping);const pe={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ct,defines:v.defines,customVertexShaderID:Mt,customFragmentShaderID:_t,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ht===null?n.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:Wi,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:V,envMap:R,envMapMode:R&&F.mapping,envMapCubeUVHeight:ot,aoMap:ht,lightMap:at,bumpMap:st,normalMap:dt,displacementMap:f&&mt,emissiveMap:vt,normalMapObjectSpace:dt&&v.normalMapType===Up,normalMapTangentSpace:dt&&v.normalMapType===Td,metalnessMap:P,roughnessMap:S,anisotropy:$,anisotropyMap:Rt,clearcoat:et,clearcoatMap:ce,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ct,dispersion:rt,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:Yt,sheen:bt,sheenColorMap:Lt,sheenRoughnessMap:le,specularMap:Qt,specularColorMap:Re,specularIntensityMap:z,transmission:yt,transmissionMap:Et,thicknessMap:Z,gradientMap:lt,opaque:v.transparent===!1&&v.blending===Zs&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:Tt,alphaHash:ue,combine:v.combine,mapUv:Gt&&p(v.map.channel),aoMapUv:ht&&p(v.aoMap.channel),lightMapUv:at&&p(v.lightMap.channel),bumpMapUv:st&&p(v.bumpMap.channel),normalMapUv:dt&&p(v.normalMap.channel),displacementMapUv:mt&&p(v.displacementMap.channel),emissiveMapUv:vt&&p(v.emissiveMap.channel),metalnessMapUv:P&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:Rt&&p(v.anisotropyMap.channel),clearcoatMapUv:ce&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(v.sheenRoughnessMap.channel),specularMapUv:Qt&&p(v.specularMap.channel),specularColorMapUv:Re&&p(v.specularColorMap.channel),specularIntensityMapUv:z&&p(v.specularIntensityMap.channel),transmissionMapUv:Et&&p(v.transmissionMap.channel),thicknessMapUv:Z&&p(v.thicknessMap.channel),alphaMapUv:St&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(dt||$),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Gt||St),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:m,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:jt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Sn,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&xe.getTransfer(v.map.colorSpace)===Ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yn,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Xe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&v.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function M(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(y(w,v),b(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){r.disableAll(),w.supportsVertexTextures&&r.enable(0),w.instancing&&r.enable(1),w.instancingColor&&r.enable(2),w.instancingMorph&&r.enable(3),w.matcap&&r.enable(4),w.envMap&&r.enable(5),w.normalMapObjectSpace&&r.enable(6),w.normalMapTangentSpace&&r.enable(7),w.clearcoat&&r.enable(8),w.iridescence&&r.enable(9),w.alphaTest&&r.enable(10),w.vertexColors&&r.enable(11),w.vertexAlphas&&r.enable(12),w.vertexUv1s&&r.enable(13),w.vertexUv2s&&r.enable(14),w.vertexUv3s&&r.enable(15),w.vertexTangents&&r.enable(16),w.anisotropy&&r.enable(17),w.alphaHash&&r.enable(18),w.batching&&r.enable(19),w.dispersion&&r.enable(20),w.batchingColor&&r.enable(21),v.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reverseDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.alphaToCoverage&&r.enable(20),v.push(r.mask)}function C(v){const w=_[v.type];let O;if(w){const k=ti[w];O=h0.clone(k.uniforms)}else O=v.uniforms;return O}function E(v,w){let O;for(let k=0,B=u.length;k<B;k++){const L=u[k];if(L.cacheKey===w){O=L,++O.usedTimes;break}}return O===void 0&&(O=new wv(n,w,v,a),u.push(O)),O}function A(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function N(v){c.remove(v)}function X(){c.dispose()}return{getParameters:d,getProgramCacheKey:M,getUniforms:C,acquireProgram:E,releaseProgram:A,releaseShaderCache:N,programs:u,dispose:X}}function Cv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function s(o,r,c){n.get(o)[r]=c}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function Pv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _h(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vh(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function o(h,m,f,g,_,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:m,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=m,d.material=f,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function r(h,m,f,g,_,p){const d=o(h,m,f,g,_,p);f.transmission>0?i.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(h,m,f,g,_,p){const d=o(h,m,f,g,_,p);f.transmission>0?i.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,m){e.length>1&&e.sort(h||Pv),i.length>1&&i.sort(m||_h),s.length>1&&s.sort(m||_h)}function u(){for(let h=t,m=n.length;h<m;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:r,unshift:c,finish:u,sort:l}}function kv(){let n=new WeakMap;function t(i,s){const a=n.get(i);let o;return a===void 0?(o=new vh,n.set(i,[o])):s>=a.length?(o=new vh,a.push(o)):o=a[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Lv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new re};break;case"SpotLight":e={position:new D,direction:new D,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function Iv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Dv=0;function Uv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Nv(n){const t=new Lv,e=Iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,a=new Ae,o=new Ae;function r(l){let u=0,h=0,m=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let f=0,g=0,_=0,p=0,d=0,M=0,y=0,b=0,C=0,E=0,A=0;l.sort(Uv);for(let X=0,v=l.length;X<v;X++){const w=l[X],O=w.color,k=w.intensity,B=w.distance,L=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*k,h+=O.g*k,m+=O.b*k;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],k);A++}else if(w.isDirectionalLight){const U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const I=w.shadow,F=e.get(w);F.shadowIntensity=I.intensity,F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=w.shadow.matrix,M++}i.directional[f]=U,f++}else if(w.isSpotLight){const U=t.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(O).multiplyScalar(k),U.distance=B,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[_]=U;const I=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,I.updateMatrices(w),w.castShadow&&E++),i.spotLightMatrix[_]=I.matrix,w.castShadow){const F=e.get(w);F.shadowIntensity=I.intensity,F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=L,b++}_++}else if(w.isRectAreaLight){const U=t.get(w);U.color.copy(O).multiplyScalar(k),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=U,p++}else if(w.isPointLight){const U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){const I=w.shadow,F=e.get(w);F.shadowIntensity=I.intensity,F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,F.shadowCameraNear=I.camera.near,F.shadowCameraFar=I.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=w.shadow.matrix,y++}i.point[g]=U,g++}else if(w.isHemisphereLight){const U=t.get(w);U.skyColor.copy(w.color).multiplyScalar(k),U.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[d]=U,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==d||N.numDirectionalShadows!==M||N.numPointShadows!==y||N.numSpotShadows!==b||N.numSpotMaps!==C||N.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=d,N.numDirectionalShadows=M,N.numPointShadows=y,N.numSpotShadows=b,N.numSpotMaps=C,N.numLightProbes=A,i.version=Dv++)}function c(l,u){let h=0,m=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const y=l[d];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(y.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:r,setupView:c,state:i}}function yh(n){const t=new Nv(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function r(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:r,setupLightsView:c,pushLight:a,pushShadow:o}}function Ov(n){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let r;return o===void 0?(r=new yh(n),t.set(s,[r])):a>=o.length?(r=new yh(n),o.push(r)):r=o[a],r}function i(){t=new WeakMap}return{get:e,dispose:i}}class Fv extends xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bv extends xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
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
}`;function Hv(n,t,e){let i=new ql;const s=new ft,a=new ft,o=new Ee,r=new Fv({depthPacking:Dp}),c=new Bv,l={},u=e.maxTextureSize,h={[Hi]:bn,[bn]:Hi,[yn]:yn},m=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:zv,fragmentShader:jv}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let d=this.type;this.render=function(E,A,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const X=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ui),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=d!==mi&&this.type===mi,B=d===mi&&this.type!==mi;for(let L=0,U=E.length;L<U;L++){const I=E[L],F=I.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ot=F.getFrameExtents();if(s.multiply(ot),a.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ot.x),s.x=a.x*ot.x,F.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ot.y),s.y=a.y*ot.y,F.mapSize.y=a.y)),F.map===null||k===!0||B===!0){const tt=this.type!==mi?{minFilter:Hn,magFilter:Hn}:{};F.map!==null&&F.map.dispose(),F.map=new ps(s.x,s.y,tt),F.map.texture.name=I.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ut=F.getViewportCount();for(let tt=0;tt<ut;tt++){const Pt=F.getViewport(tt);o.set(a.x*Pt.x,a.y*Pt.y,a.x*Pt.z,a.y*Pt.w),O.viewport(o),F.updateMatrices(I,tt),i=F.getFrustum(),b(A,N,F.camera,I,this.type)}F.isPointLightShadow!==!0&&this.type===mi&&M(F,N),F.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(X,v,w)};function M(E,A){const N=t.update(_);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ps(s.x,s.y)),m.uniforms.shadow_pass.value=E.map.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,N,m,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,N,f,_,null)}function y(E,A,N,X){let v=null;const w=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)v=w;else if(v=N.isPointLight===!0?c:r,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=v.uuid,k=A.uuid;let B=l[O];B===void 0&&(B={},l[O]=B);let L=B[k];L===void 0&&(L=v.clone(),B[k]=L,A.addEventListener("dispose",C)),v=L}if(v.visible=A.visible,v.wireframe=A.wireframe,X===mi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=n.properties.get(v);O.light=N}return v}function b(E,A,N,X,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const k=t.update(E),B=E.material;if(Array.isArray(B)){const L=k.groups;for(let U=0,I=L.length;U<I;U++){const F=L[U],ot=B[F.materialIndex];if(ot&&ot.visible){const ut=y(E,ot,X,v);E.onBeforeShadow(n,E,A,N,k,ut,F),n.renderBufferDirect(N,null,k,ut,E,F),E.onAfterShadow(n,E,A,N,k,ut,F)}}}else if(B.visible){const L=y(E,B,X,v);E.onBeforeShadow(n,E,A,N,k,L,null),n.renderBufferDirect(N,null,k,L,E,null),E.onAfterShadow(n,E,A,N,k,L,null)}}const O=E.children;for(let k=0,B=O.length;k<B;k++)b(O[k],A,N,X,v)}function C(E){E.target.removeEventListener("dispose",C);for(const N in l){const X=l[N],v=E.target.uuid;v in X&&(X[v].dispose(),delete X[v])}}}const Vv={[Ac]:Rc,[Cc]:Lc,[Pc]:Ic,[oa]:kc,[Rc]:Ac,[Lc]:Cc,[Ic]:Pc,[kc]:oa};function Gv(n){function t(){let z=!1;const Et=new Ee;let Z=null;const lt=new Ee(0,0,0,0);return{setMask:function(St){Z!==St&&!z&&(n.colorMask(St,St,St,St),Z=St)},setLocked:function(St){z=St},setClear:function(St,Tt,ue,Xe,Sn){Sn===!0&&(St*=Xe,Tt*=Xe,ue*=Xe),Et.set(St,Tt,ue,Xe),lt.equals(Et)===!1&&(n.clearColor(St,Tt,ue,Xe),lt.copy(Et))},reset:function(){z=!1,Z=null,lt.set(-1,0,0,0)}}}function e(){let z=!1,Et=!1,Z=null,lt=null,St=null;return{setReversed:function(Tt){Et=Tt},setTest:function(Tt){Tt?Mt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Tt){Z!==Tt&&!z&&(n.depthMask(Tt),Z=Tt)},setFunc:function(Tt){if(Et&&(Tt=Vv[Tt]),lt!==Tt){switch(Tt){case Ac:n.depthFunc(n.NEVER);break;case Rc:n.depthFunc(n.ALWAYS);break;case Cc:n.depthFunc(n.LESS);break;case oa:n.depthFunc(n.LEQUAL);break;case Pc:n.depthFunc(n.EQUAL);break;case kc:n.depthFunc(n.GEQUAL);break;case Lc:n.depthFunc(n.GREATER);break;case Ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Tt}},setLocked:function(Tt){z=Tt},setClear:function(Tt){St!==Tt&&(n.clearDepth(Tt),St=Tt)},reset:function(){z=!1,Z=null,lt=null,St=null}}}function i(){let z=!1,Et=null,Z=null,lt=null,St=null,Tt=null,ue=null,Xe=null,Sn=null;return{setTest:function(pe){z||(pe?Mt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(pe){Et!==pe&&!z&&(n.stencilMask(pe),Et=pe)},setFunc:function(pe,wn,li){(Z!==pe||lt!==wn||St!==li)&&(n.stencilFunc(pe,wn,li),Z=pe,lt=wn,St=li)},setOp:function(pe,wn,li){(Tt!==pe||ue!==wn||Xe!==li)&&(n.stencilOp(pe,wn,li),Tt=pe,ue=wn,Xe=li)},setLocked:function(pe){z=pe},setClear:function(pe){Sn!==pe&&(n.clearStencil(pe),Sn=pe)},reset:function(){z=!1,Et=null,Z=null,lt=null,St=null,Tt=null,ue=null,Xe=null,Sn=null}}}const s=new t,a=new e,o=new i,r=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,m=[],f=null,g=!1,_=null,p=null,d=null,M=null,y=null,b=null,C=null,E=new re(0,0,0),A=0,N=!1,X=null,v=null,w=null,O=null,k=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,U=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(I)[1]),L=U>=1):I.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),L=U>=2);let F=null,ot={};const ut=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),Pt=new Ee().fromArray(ut),jt=new Ee().fromArray(tt);function K(z,Et,Z,lt){const St=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(z,Tt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<Z;ue++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(Et+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Tt}const ct={};ct[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Mt(n.DEPTH_TEST),a.setFunc(oa),at(!1),st(Ru),Mt(n.CULL_FACE),R(Ui);function Mt(z){l[z]!==!0&&(n.enable(z),l[z]=!0)}function _t(z){l[z]!==!1&&(n.disable(z),l[z]=!1)}function Ht(z,Et){return u[z]!==Et?(n.bindFramebuffer(z,Et),u[z]=Et,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Et),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function At(z,Et){let Z=m,lt=!1;if(z){Z=h.get(Et),Z===void 0&&(Z=[],h.set(Et,Z));const St=z.textures;if(Z.length!==St.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,ue=St.length;Tt<ue;Tt++)Z[Tt]=n.COLOR_ATTACHMENT0+Tt;Z.length=St.length,lt=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,lt=!0);lt&&n.drawBuffers(Z)}function Dt(z){return f!==z?(n.useProgram(z),f=z,!0):!1}const Gt={[os]:n.FUNC_ADD,[rp]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};Gt[lp]=n.MIN,Gt[up]=n.MAX;const V={[hp]:n.ZERO,[dp]:n.ONE,[fp]:n.SRC_COLOR,[Ec]:n.SRC_ALPHA,[yp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[mp]:n.DST_ALPHA,[pp]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[vp]:n.ONE_MINUS_DST_COLOR,[gp]:n.ONE_MINUS_DST_ALPHA,[xp]:n.CONSTANT_COLOR,[Mp]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[Sp]:n.ONE_MINUS_CONSTANT_ALPHA};function R(z,Et,Z,lt,St,Tt,ue,Xe,Sn,pe){if(z===Ui){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(Mt(n.BLEND),g=!0),z!==op){if(z!==_||pe!==N){if((p!==os||y!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,y=os),pe)switch(z){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.ONE,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ku:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}d=null,M=null,b=null,C=null,E.set(0,0,0),A=0,_=z,N=pe}return}St=St||Et,Tt=Tt||Z,ue=ue||lt,(Et!==p||St!==y)&&(n.blendEquationSeparate(Gt[Et],Gt[St]),p=Et,y=St),(Z!==d||lt!==M||Tt!==b||ue!==C)&&(n.blendFuncSeparate(V[Z],V[lt],V[Tt],V[ue]),d=Z,M=lt,b=Tt,C=ue),(Xe.equals(E)===!1||Sn!==A)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Sn),E.copy(Xe),A=Sn),_=z,N=!1}function ht(z,Et){z.side===yn?_t(n.CULL_FACE):Mt(n.CULL_FACE);let Z=z.side===bn;Et&&(Z=!Z),at(Z),z.blending===Zs&&z.transparent===!1?R(Ui):R(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const lt=z.stencilWrite;o.setTest(lt),lt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){X!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),X=z)}function st(z){z!==sp?(Mt(n.CULL_FACE),z!==v&&(z===Ru?n.cullFace(n.BACK):z===ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),v=z}function dt(z){z!==w&&(L&&n.lineWidth(z),w=z)}function mt(z,Et,Z){z?(Mt(n.POLYGON_OFFSET_FILL),(O!==Et||k!==Z)&&(n.polygonOffset(Et,Z),O=Et,k=Z)):_t(n.POLYGON_OFFSET_FILL)}function vt(z){z?Mt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function P(z){z===void 0&&(z=n.TEXTURE0+B-1),F!==z&&(n.activeTexture(z),F=z)}function S(z,Et,Z){Z===void 0&&(F===null?Z=n.TEXTURE0+B-1:Z=F);let lt=ot[Z];lt===void 0&&(lt={type:void 0,texture:void 0},ot[Z]=lt),(lt.type!==z||lt.texture!==Et)&&(F!==Z&&(n.activeTexture(Z),F=Z),n.bindTexture(z,Et||ct[z]),lt.type=z,lt.texture=Et)}function $(){const z=ot[F];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(z){Pt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Pt.copy(z))}function Lt(z){jt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),jt.copy(z))}function le(z,Et){let Z=c.get(Et);Z===void 0&&(Z=new WeakMap,c.set(Et,Z));let lt=Z.get(z);lt===void 0&&(lt=n.getUniformBlockIndex(Et,z.name),Z.set(z,lt))}function Qt(z,Et){const lt=c.get(Et).get(z);r.get(Et)!==lt&&(n.uniformBlockBinding(Et,lt,z.__bindingPointIndex),r.set(Et,lt))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},F=null,ot={},u={},h=new WeakMap,m=[],f=null,g=!1,_=null,p=null,d=null,M=null,y=null,b=null,C=null,E=new re(0,0,0),A=0,N=!1,X=null,v=null,w=null,O=null,k=null,Pt.set(0,0,n.canvas.width,n.canvas.height),jt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Mt,disable:_t,bindFramebuffer:Ht,drawBuffers:At,useProgram:Dt,setBlending:R,setMaterial:ht,setFlipSided:at,setCullFace:st,setLineWidth:dt,setPolygonOffset:mt,setScissorTest:vt,activeTexture:P,bindTexture:S,unbindTexture:$,compressedTexImage2D:et,compressedTexImage3D:rt,texImage2D:Ct,texImage3D:qt,updateUBOMapping:le,uniformBlockBinding:Qt,texStorage2D:ce,texStorage3D:pt,texSubImage2D:nt,texSubImage3D:bt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Rt,scissor:Yt,viewport:Lt,reset:Re}}function xh(n,t,e,i){const s=Wv(i);switch(e){case yd:return n*t;case Md:return n*t;case bd:return n*t*2;case Sd:return n*t/s.components*s.byteLength;case Hl:return n*t/s.components*s.byteLength;case wd:return n*t*2/s.components*s.byteLength;case Vl:return n*t*2/s.components*s.byteLength;case xd:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case Gl:return n*t*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fc:case zc:return Math.max(n,16)*Math.max(t,8)/4;case Oc:case Bc:return Math.max(n,8)*Math.max(t,8)/2;case jc:case Hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xo:case sl:case al:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ed:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case rl:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wv(n){switch(n){case Si:case gd:return{byteLength:1,components:1};case Xa:case _d:case eo:return{byteLength:2,components:1};case zl:case jl:return{byteLength:2,components:4};case fs:case Bl:case _i:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $v(n,t,e,i,s,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let h;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):qa("canvas")}function _(P,S,$){let et=1;const rt=vt(P);if((rt.width>$||rt.height>$)&&(et=$/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const nt=Math.floor(et*rt.width),bt=Math.floor(et*rt.height);h===void 0&&(h=g(nt,bt));const yt=S?g(nt,bt):h;return yt.width=nt,yt.height=bt,yt.getContext("2d").drawImage(P,0,0,nt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+bt+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Hn&&P.minFilter!==Yn}function d(P){n.generateMipmap(P)}function M(P,S,$,et,rt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let nt=S;if(S===n.RED&&($===n.FLOAT&&(nt=n.R32F),$===n.HALF_FLOAT&&(nt=n.R16F),$===n.UNSIGNED_BYTE&&(nt=n.R8)),S===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.R8UI),$===n.UNSIGNED_SHORT&&(nt=n.R16UI),$===n.UNSIGNED_INT&&(nt=n.R32UI),$===n.BYTE&&(nt=n.R8I),$===n.SHORT&&(nt=n.R16I),$===n.INT&&(nt=n.R32I)),S===n.RG&&($===n.FLOAT&&(nt=n.RG32F),$===n.HALF_FLOAT&&(nt=n.RG16F),$===n.UNSIGNED_BYTE&&(nt=n.RG8)),S===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.RG8UI),$===n.UNSIGNED_SHORT&&(nt=n.RG16UI),$===n.UNSIGNED_INT&&(nt=n.RG32UI),$===n.BYTE&&(nt=n.RG8I),$===n.SHORT&&(nt=n.RG16I),$===n.INT&&(nt=n.RG32I)),S===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),$===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),$===n.UNSIGNED_INT&&(nt=n.RGB32UI),$===n.BYTE&&(nt=n.RGB8I),$===n.SHORT&&(nt=n.RGB16I),$===n.INT&&(nt=n.RGB32I)),S===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),$===n.UNSIGNED_INT&&(nt=n.RGBA32UI),$===n.BYTE&&(nt=n.RGBA8I),$===n.SHORT&&(nt=n.RGBA16I),$===n.INT&&(nt=n.RGBA32I)),S===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),S===n.RGBA){const bt=rt?er:xe.getTransfer(et);$===n.FLOAT&&(nt=n.RGBA32F),$===n.HALF_FLOAT&&(nt=n.RGBA16F),$===n.UNSIGNED_BYTE&&(nt=bt===Ie?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(P,S){let $;return P?S===null||S===fs||S===ua?$=n.DEPTH24_STENCIL8:S===_i?$=n.DEPTH32F_STENCIL8:S===Xa&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fs||S===ua?$=n.DEPTH_COMPONENT24:S===_i?$=n.DEPTH_COMPONENT32F:S===Xa&&($=n.DEPTH_COMPONENT16),$}function b(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Hn&&P.minFilter!==Yn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function C(P){const S=P.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&u.delete(S)}function E(P){const S=P.target;S.removeEventListener("dispose",E),X(S)}function A(P){const S=i.get(P);if(S.__webglInit===void 0)return;const $=P.source,et=m.get($);if(et){const rt=et[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&N(P),Object.keys(et).length===0&&m.delete($)}i.remove(P)}function N(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const $=P.source,et=m.get($);delete et[S.__cacheKey],o.memory.textures--}function X(P){const S=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let rt=0;rt<S.__webglFramebuffer[et].length;rt++)n.deleteFramebuffer(S.__webglFramebuffer[et][rt]);else n.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)n.deleteFramebuffer(S.__webglFramebuffer[et]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=P.textures;for(let et=0,rt=$.length;et<rt;et++){const nt=i.get($[et]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove($[et])}i.remove(P)}let v=0;function w(){v=0}function O(){const P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function B(P,S){const $=i.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt($,P,S);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+S)}function L(P,S){const $=i.get(P);if(P.version>0&&$.__version!==P.version){jt($,P,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+S)}function U(P,S){const $=i.get(P);if(P.version>0&&$.__version!==P.version){jt($,P,S);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+S)}function I(P,S){const $=i.get(P);if(P.version>0&&$.__version!==P.version){K($,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+S)}const F={[la]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[Nc]:n.MIRRORED_REPEAT},ot={[Hn]:n.NEAREST,[Lp]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Rr]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},ut={[Np]:n.NEVER,[Hp]:n.ALWAYS,[Op]:n.LESS,[Ad]:n.LEQUAL,[Fp]:n.EQUAL,[jp]:n.GEQUAL,[Bp]:n.GREATER,[zp]:n.NOTEQUAL};function tt(P,S){if(S.type===_i&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Yn||S.magFilter===Rr||S.magFilter===co||S.magFilter===ls||S.minFilter===Yn||S.minFilter===Rr||S.minFilter===co||S.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,F[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,F[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,F[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ot[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==co&&S.minFilter!==ls||S.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Pt(P,S){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",C));const et=S.source;let rt=m.get(et);rt===void 0&&(rt={},m.set(et,rt));const nt=k(S);if(nt!==P.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),rt[nt].usedTimes++;const bt=rt[P.__cacheKey];bt!==void 0&&(rt[P.__cacheKey].usedTimes--,bt.usedTimes===0&&N(S)),P.__cacheKey=nt,P.__webglTexture=rt[nt].texture}return $}function jt(P,S,$){let et=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=n.TEXTURE_3D);const rt=Pt(P,S),nt=S.source;e.bindTexture(et,P.__webglTexture,n.TEXTURE0+$);const bt=i.get(nt);if(nt.version!==bt.__version||rt===!0){e.activeTexture(n.TEXTURE0+$);const yt=xe.getPrimaries(xe.workingColorSpace),Rt=S.colorSpace===Ii?null:xe.getPrimaries(S.colorSpace),ce=S.colorSpace===Ii||yt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let pt=_(S.image,!1,s.maxTextureSize);pt=mt(S,pt);const Ct=a.convert(S.format,S.colorSpace),qt=a.convert(S.type);let Yt=M(S.internalFormat,Ct,qt,S.colorSpace,S.isVideoTexture);tt(et,S);let Lt;const le=S.mipmaps,Qt=S.isVideoTexture!==!0,Re=bt.__version===void 0||rt===!0,z=nt.dataReady,Et=b(S,pt);if(S.isDepthTexture)Yt=y(S.format===ha,S.type),Re&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Yt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Ct,qt,null));else if(S.isDataTexture)if(le.length>0){Qt&&Re&&e.texStorage2D(n.TEXTURE_2D,Et,Yt,le[0].width,le[0].height);for(let Z=0,lt=le.length;Z<lt;Z++)Lt=le[Z],Qt?z&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Ct,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,Z,Yt,Lt.width,Lt.height,0,Ct,qt,Lt.data);S.generateMipmaps=!1}else Qt?(Re&&e.texStorage2D(n.TEXTURE_2D,Et,Yt,pt.width,pt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Ct,qt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Ct,qt,pt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qt&&Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Yt,le[0].width,le[0].height,pt.depth);for(let Z=0,lt=le.length;Z<lt;Z++)if(Lt=le[Z],S.format!==Kn)if(Ct!==null)if(Qt){if(z)if(S.layerUpdates.size>0){const St=xh(Lt.width,Lt.height,S.format,S.type);for(const Tt of S.layerUpdates){const ue=Lt.data.subarray(Tt*St/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*St/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Tt,Lt.width,Lt.height,1,Ct,ue,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Lt.width,Lt.height,pt.depth,Ct,Lt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Yt,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Lt.width,Lt.height,pt.depth,Ct,qt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Yt,Lt.width,Lt.height,pt.depth,0,Ct,qt,Lt.data)}else{Qt&&Re&&e.texStorage2D(n.TEXTURE_2D,Et,Yt,le[0].width,le[0].height);for(let Z=0,lt=le.length;Z<lt;Z++)Lt=le[Z],S.format!==Kn?Ct!==null?Qt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Ct,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?z&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Ct,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,Z,Yt,Lt.width,Lt.height,0,Ct,qt,Lt.data)}else if(S.isDataArrayTexture)if(Qt){if(Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Yt,pt.width,pt.height,pt.depth),z)if(S.layerUpdates.size>0){const Z=xh(pt.width,pt.height,S.format,S.type);for(const lt of S.layerUpdates){const St=pt.data.subarray(lt*Z/pt.data.BYTES_PER_ELEMENT,(lt+1)*Z/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,pt.width,pt.height,1,Ct,qt,St)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ct,qt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,pt.width,pt.height,pt.depth,0,Ct,qt,pt.data);else if(S.isData3DTexture)Qt?(Re&&e.texStorage3D(n.TEXTURE_3D,Et,Yt,pt.width,pt.height,pt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ct,qt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,pt.width,pt.height,pt.depth,0,Ct,qt,pt.data);else if(S.isFramebufferTexture){if(Re)if(Qt)e.texStorage2D(n.TEXTURE_2D,Et,Yt,pt.width,pt.height);else{let Z=pt.width,lt=pt.height;for(let St=0;St<Et;St++)e.texImage2D(n.TEXTURE_2D,St,Yt,Z,lt,0,Ct,qt,null),Z>>=1,lt>>=1}}else if(le.length>0){if(Qt&&Re){const Z=vt(le[0]);e.texStorage2D(n.TEXTURE_2D,Et,Yt,Z.width,Z.height)}for(let Z=0,lt=le.length;Z<lt;Z++)Lt=le[Z],Qt?z&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ct,qt,Lt):e.texImage2D(n.TEXTURE_2D,Z,Yt,Ct,qt,Lt);S.generateMipmaps=!1}else if(Qt){if(Re){const Z=vt(pt);e.texStorage2D(n.TEXTURE_2D,Et,Yt,Z.width,Z.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,qt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Ct,qt,pt);p(S)&&d(et),bt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function K(P,S,$){if(S.image.length!==6)return;const et=Pt(P,S),rt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);const nt=i.get(rt);if(rt.version!==nt.__version||et===!0){e.activeTexture(n.TEXTURE0+$);const bt=xe.getPrimaries(xe.workingColorSpace),yt=S.colorSpace===Ii?null:xe.getPrimaries(S.colorSpace),Rt=S.colorSpace===Ii||bt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,pt=S.image[0]&&S.image[0].isDataTexture,Ct=[];for(let lt=0;lt<6;lt++)!ce&&!pt?Ct[lt]=_(S.image[lt],!0,s.maxCubemapSize):Ct[lt]=pt?S.image[lt].image:S.image[lt],Ct[lt]=mt(S,Ct[lt]);const qt=Ct[0],Yt=a.convert(S.format,S.colorSpace),Lt=a.convert(S.type),le=M(S.internalFormat,Yt,Lt,S.colorSpace),Qt=S.isVideoTexture!==!0,Re=nt.__version===void 0||et===!0,z=rt.dataReady;let Et=b(S,qt);tt(n.TEXTURE_CUBE_MAP,S);let Z;if(ce){Qt&&Re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,le,qt.width,qt.height);for(let lt=0;lt<6;lt++){Z=Ct[lt].mipmaps;for(let St=0;St<Z.length;St++){const Tt=Z[St];S.format!==Kn?Yt!==null?Qt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Tt.width,Tt.height,Yt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,le,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Tt.width,Tt.height,Yt,Lt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,le,Tt.width,Tt.height,0,Yt,Lt,Tt.data)}}}else{if(Z=S.mipmaps,Qt&&Re){Z.length>0&&Et++;const lt=vt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,le,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(pt){Qt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ct[lt].width,Ct[lt].height,Yt,Lt,Ct[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,le,Ct[lt].width,Ct[lt].height,0,Yt,Lt,Ct[lt].data);for(let St=0;St<Z.length;St++){const ue=Z[St].image[lt].image;Qt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,ue.width,ue.height,Yt,Lt,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,le,ue.width,ue.height,0,Yt,Lt,ue.data)}}else{Qt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Yt,Lt,Ct[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,le,Yt,Lt,Ct[lt]);for(let St=0;St<Z.length;St++){const Tt=Z[St];Qt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Yt,Lt,Tt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,le,Yt,Lt,Tt.image[lt])}}}p(S)&&d(n.TEXTURE_CUBE_MAP),nt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ct(P,S,$,et,rt,nt){const bt=a.convert($.format,$.colorSpace),yt=a.convert($.type),Rt=M($.internalFormat,bt,yt,$.colorSpace);if(!i.get(S).__hasExternalTextures){const pt=Math.max(1,S.width>>nt),Ct=Math.max(1,S.height>>nt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,Rt,pt,Ct,S.depth,0,bt,yt,null):e.texImage2D(rt,nt,Rt,pt,Ct,0,bt,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),st(S)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,rt,i.get($).__webglTexture,0,at(S)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,rt,i.get($).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(P,S,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const et=S.depthTexture,rt=et&&et.isDepthTexture?et.type:null,nt=y(S.stencilBuffer,rt),bt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=at(S);st(S)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,nt,S.width,S.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,nt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,nt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,P)}else{const et=S.textures;for(let rt=0;rt<et.length;rt++){const nt=et[rt],bt=a.convert(nt.format,nt.colorSpace),yt=a.convert(nt.type),Rt=M(nt.internalFormat,bt,yt,nt.colorSpace),ce=at(S);$&&st(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Rt,S.width,S.height):st(S)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Rt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const et=i.get(S.depthTexture).__webglTexture,rt=at(S);if(S.depthTexture.format===Qs)st(S)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(S.depthTexture.format===ha)st(S)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ht(P){const S=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=et}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");_t(S.__webglFramebuffer,P)}else if($){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=n.createRenderbuffer(),Mt(S.__webglDepthbuffer[et],P,!1);else{const rt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Mt(S.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(P,S,$){const et=i.get(P);S!==void 0&&ct(et.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ht(P)}function Dt(P){const S=P.texture,$=i.get(P),et=i.get(S);P.addEventListener("dispose",E);const rt=P.textures,nt=P.isWebGLCubeRenderTarget===!0,bt=rt.length>1;if(bt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=S.version,o.memory.textures++),nt){$.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[yt]=[];for(let Rt=0;Rt<S.mipmaps.length;Rt++)$.__webglFramebuffer[yt][Rt]=n.createFramebuffer()}else $.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)$.__webglFramebuffer[yt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(bt)for(let yt=0,Rt=rt.length;yt<Rt;yt++){const ce=i.get(rt[yt]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&st(P)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let yt=0;yt<rt.length;yt++){const Rt=rt[yt];$.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);const ce=a.convert(Rt.format,Rt.colorSpace),pt=a.convert(Rt.type),Ct=M(Rt.internalFormat,ce,pt,Rt.colorSpace,P.isXRRenderTarget===!0),qt=at(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Ct,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,$.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),tt(n.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)ct($.__webglFramebuffer[yt][Rt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt);else ct($.__webglFramebuffer[yt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(S)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let yt=0,Rt=rt.length;yt<Rt;yt++){const ce=rt[yt],pt=i.get(ce);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),tt(n.TEXTURE_2D,ce),ct($.__webglFramebuffer,P,ce,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),p(ce)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,et.__webglTexture),tt(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)ct($.__webglFramebuffer[Rt],P,S,n.COLOR_ATTACHMENT0,yt,Rt);else ct($.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,yt,0);p(S)&&d(yt),e.unbindTexture()}P.depthBuffer&&Ht(P)}function Gt(P){const S=P.textures;for(let $=0,et=S.length;$<et;$++){const rt=S[$];if(p(rt)){const nt=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,bt=i.get(rt).__webglTexture;e.bindTexture(nt,bt),d(nt),e.unbindTexture()}}}const V=[],R=[];function ht(P){if(P.samples>0){if(st(P)===!1){const S=P.textures,$=P.width,et=P.height;let rt=n.COLOR_BUFFER_BIT;const nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(P),yt=S.length>1;if(yt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const ce=i.get(S[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,$,et,0,0,$,et,rt,n.NEAREST),c===!0&&(V.length=0,R.length=0,V.push(n.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(V.push(nt),R.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const ce=i.get(S[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,ce,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function at(P){return Math.min(s.maxSamples,P.samples)}function st(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function mt(P,S){const $=P.colorSpace,et=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Wi&&$!==Ii&&(xe.getTransfer($)===Ie?(et!==Kn||rt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),S}function vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=B,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=I,this.rebindTextures=At,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=st}function Xv(n,t){function e(i,s=Ii){let a;const o=xe.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gd)return n.BYTE;if(i===_d)return n.SHORT;if(i===Xa)return n.UNSIGNED_SHORT;if(i===Bl)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===eo)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===xd)return n.RGB;if(i===Kn)return n.RGBA;if(i===Md)return n.LUMINANCE;if(i===bd)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===ha)return n.DEPTH_STENCIL;if(i===Sd)return n.RED;if(i===Hl)return n.RED_INTEGER;if(i===wd)return n.RG;if(i===Vl)return n.RG_INTEGER;if(i===Gl)return n.RGBA_INTEGER;if(i===Vo||i===Go||i===Wo||i===$o)if(o===Ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Vo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Vo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Fc||i===Bc||i===zc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Oc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jc||i===Hc||i===Vc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===jc||i===Hc)return o===Ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gc||i===Wc||i===$c||i===Xc||i===qc||i===Yc||i===Kc||i===Jc||i===Zc||i===Qc||i===tl||i===el||i===nl||i===il)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Gc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$c)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qc)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===sl||i===al)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Xo)return o===Ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===ol||i===rl||i===cl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class qv extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ot extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],m=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&m>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return r!==null&&(r.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new dn,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vi({vertexShader:Kv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new Vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qv extends ya{constructor(t,e){super();const i=this;let s=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,h=null,m=null,f=null,g=null;const _=new Zv,p=e.getContextAttributes();let d=null,M=null;const y=[],b=[],C=new ft;let E=null;const A=new In;A.layers.enable(1),A.viewport=new Ee;const N=new In;N.layers.enable(2),N.viewport=new Ee;const X=[A,N],v=new qv;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=y[K];return ct===void 0&&(ct=new sc,y[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=y[K];return ct===void 0&&(ct=new sc,y[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=y[K];return ct===void 0&&(ct=new sc,y[K]=ct),ct.getHandSpace()};function k(K){const ct=b.indexOf(K.inputSource);if(ct===-1)return;const Mt=y[ct];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,l||o),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",L);for(let K=0;K<y.length;K++){const ct=b[K];ct!==null&&(b[K]=null,y[K].disconnect(ct))}w=null,O=null,_.reset(),t.setRenderTarget(d),f=null,m=null,h=null,s=null,M=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const ct={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ps(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ct=null,Mt=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=p.stencil?ha:Qs,Mt=p.stencil?ua:fs);const Ht={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:a};h=new XRWebGLBinding(s,e),m=h.createProjectionLayer(Ht),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new ps(m.textureWidth,m.textureHeight,{format:Kn,type:Si,depthTexture:new Bd(m.textureWidth,m.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(r),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function L(K){for(let ct=0;ct<K.removed.length;ct++){const Mt=K.removed[ct],_t=b.indexOf(Mt);_t>=0&&(b[_t]=null,y[_t].disconnect(Mt))}for(let ct=0;ct<K.added.length;ct++){const Mt=K.added[ct];let _t=b.indexOf(Mt);if(_t===-1){for(let At=0;At<y.length;At++)if(At>=b.length){b.push(Mt),_t=At;break}else if(b[At]===null){b[At]=Mt,_t=At;break}if(_t===-1)break}const Ht=y[_t];Ht&&Ht.connect(Mt)}}const U=new D,I=new D;function F(K,ct,Mt){U.setFromMatrixPosition(ct.matrixWorld),I.setFromMatrixPosition(Mt.matrixWorld);const _t=U.distanceTo(I),Ht=ct.projectionMatrix.elements,At=Mt.projectionMatrix.elements,Dt=Ht[14]/(Ht[10]-1),Gt=Ht[14]/(Ht[10]+1),V=(Ht[9]+1)/Ht[5],R=(Ht[9]-1)/Ht[5],ht=(Ht[8]-1)/Ht[0],at=(At[8]+1)/At[0],st=Dt*ht,dt=Dt*at,mt=_t/(-ht+at),vt=mt*-ht;if(ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ(mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ht[10]===-1)K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const P=Dt+mt,S=Gt+mt,$=st-vt,et=dt+(_t-vt),rt=V*Gt/S*P,nt=R*Gt/S*P;K.projectionMatrix.makePerspective($,et,rt,nt,P,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ct=K.near,Mt=K.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),v.near=N.near=A.near=ct,v.far=N.far=A.far=Mt,(w!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far);const _t=K.parent,Ht=v.cameras;ot(v,_t);for(let At=0;At<Ht.length;At++)ot(Ht[At],_t);Ht.length===2?F(v,A,N):v.projectionMatrix.copy(A.projectionMatrix),ut(K,v,_t)};function ut(K,ct,Mt){Mt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ul*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(m===null&&f===null))return c},this.setFoveation=function(K){c=K,m!==null&&(m.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let tt=null;function Pt(K,ct){if(u=ct.getViewerPose(l||o),g=ct,u!==null){const Mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let _t=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,_t=!0);for(let At=0;At<Mt.length;At++){const Dt=Mt[At];let Gt=null;if(f!==null)Gt=f.getViewport(Dt);else{const R=h.getViewSubImage(m,Dt);Gt=R.viewport,At===0&&(t.setRenderTargetTextures(M,R.colorTexture,m.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(M))}let V=X[At];V===void 0&&(V=new In,V.layers.enable(At),V.viewport=new Ee,X[At]=V),V.matrix.fromArray(Dt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Dt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),At===0&&(v.matrix.copy(V.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_t===!0&&v.cameras.push(V)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const At=h.getDepthInformation(Mt[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let Mt=0;Mt<y.length;Mt++){const _t=b[Mt],Ht=y[Mt];_t!==null&&Ht!==void 0&&Ht.update(_t,ct,l||o)}tt&&tt(K,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const jt=new Od;jt.setAnimationLoop(Pt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const Qi=new oi,ty=new Ae;function ey(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Dd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),h(p,d)):d.isMeshPhongMaterial?(a(p,d),u(p,d)):d.isMeshStandardMaterial?(a(p,d),m(p,d),d.isMeshPhysicalMaterial&&f(p,d,b)):d.isMeshMatcapMaterial?(a(p,d),g(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),_(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&r(p,d)):d.isPointsMaterial?c(p,d,M,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===bn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===bn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=t.get(d),y=M.envMap,b=M.envMapRotation;y&&(p.envMap.value=y,Qi.copy(b),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),p.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(Qi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function r(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function m(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ny(n,t,e,i){let s={},a={},o=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function l(M,y){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",p));const C=y.program;i.updateUBOMapping(M,C);const E=t.render.frame;a[M.id]!==E&&(m(M),a[M.id]=E)}function u(M){const y=h();M.__bindingPointIndex=y;const b=n.createBuffer(),C=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<r;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const y=s[M.id],b=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){const N=Array.isArray(b[E])?b[E]:[b[E]];for(let X=0,v=N.length;X<v;X++){const w=N[X];if(f(w,E,X,C)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let L=0;L<k.length;L++){const U=k[L],I=_(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,O+B,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,B),B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,y,b,C){const E=M.value,A=y+"_"+b;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{const N=C[A];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return C[A]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(M){const y=M.uniforms;let b=0;const C=16;for(let A=0,N=y.length;A<N;A++){const X=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,w=X.length;v<w;v++){const O=X[v],k=Array.isArray(O.value)?O.value:[O.value];for(let B=0,L=k.length;B<L;B++){const U=k[B],I=_(U),F=b%C,ot=F%I.boundary,ut=F+ot;b+=ot,ut!==0&&C-ut<I.storage&&(b+=C-ut),O.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=I.storage}}}const E=b%C;return E>0&&(b+=C-E),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},a={}}return{bind:c,update:l,dispose:d}}class iy{constructor(t={}){const{canvas:e=Gp(),context:i=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Ni,this.toneMappingExposure=1;const y=this;let b=!1,C=0,E=0,A=null,N=-1,X=null;const v=new Ee,w=new Ee;let O=null;const k=new re(0);let B=0,L=e.width,U=e.height,I=1,F=null,ot=null;const ut=new Ee(0,0,L,U),tt=new Ee(0,0,L,U);let Pt=!1;const jt=new ql;let K=!1,ct=!1;const Mt=new Ae,_t=new Ae,Ht=new D,At=new Ee,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function V(){return A===null?I:1}let R=i;function ht(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),R===null){const H="webgl2";if(R=ht(H,T),R===null)throw ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,st,dt,mt,vt,P,S,$,et,rt,nt,bt,yt,Rt,ce,pt,Ct,qt,Yt,Lt,le,Qt,Re,z;function Et(){at=new c_(R),at.init(),Qt=new Xv(R,at),st=new n_(R,at,t,Qt),dt=new Gv(R),st.reverseDepthBuffer&&dt.buffers.depth.setReversed(!0),mt=new h_(R),vt=new Cv,P=new $v(R,at,dt,vt,st,Qt,mt),S=new s_(y),$=new r_(y),et=new v0(R),Re=new t_(R,et),rt=new l_(R,et,mt,Re),nt=new f_(R,rt,et,mt),Yt=new d_(R,st,P),pt=new i_(vt),bt=new Rv(y,S,$,at,st,Re,pt),yt=new ey(y,vt),Rt=new kv,ce=new Ov(at),qt=new Qg(y,S,$,dt,nt,m,c),Ct=new Hv(y,nt,st),z=new ny(R,mt,st,dt),Lt=new e_(R,at,mt),le=new u_(R,at,mt),mt.programs=bt.programs,y.capabilities=st,y.extensions=at,y.properties=vt,y.renderLists=Rt,y.shadowMap=Ct,y.state=dt,y.info=mt}Et();const Z=new Qv(y,R);this.xr=Z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(L,U,!1))},this.getSize=function(T){return T.set(L,U)},this.setSize=function(T,H,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,U=H,e.width=Math.floor(T*I),e.height=Math.floor(H*I),q===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(L*I,U*I).floor()},this.setDrawingBufferSize=function(T,H,q){L=T,U=H,I=q,e.width=Math.floor(T*q),e.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,H,q,Y){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,H,q,Y),dt.viewport(v.copy(ut).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,H,q,Y){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,H,q,Y),dt.scissor(w.copy(tt).multiplyScalar(I).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){dt.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){F=T},this.setTransparentSort=function(T){ot=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(T=!0,H=!0,q=!0){let Y=0;if(T){let G=!1;if(A!==null){const gt=A.texture.format;G=gt===Gl||gt===Vl||gt===Hl}if(G){const gt=A.texture.type,wt=gt===Si||gt===fs||gt===Xa||gt===ua||gt===zl||gt===jl,It=qt.getClearColor(),Ut=qt.getClearAlpha(),$t=It.r,Xt=It.g,Bt=It.b;wt?(f[0]=$t,f[1]=Xt,f[2]=Bt,f[3]=Ut,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=$t,g[1]=Xt,g[2]=Bt,g[3]=Ut,R.clearBufferiv(R.COLOR,0,g))}else Y|=R.COLOR_BUFFER_BIT}H&&(Y|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Rt.dispose(),ce.dispose(),vt.dispose(),S.dispose(),$.dispose(),nt.dispose(),Re.dispose(),z.dispose(),bt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",yu),Z.removeEventListener("sessionend",xu),Xi.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=mt.autoReset,H=Ct.enabled,q=Ct.autoUpdate,Y=Ct.needsUpdate,G=Ct.type;Et(),mt.autoReset=T,Ct.enabled=H,Ct.autoUpdate=q,Ct.needsUpdate=Y,Ct.type=G}function Tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const H=T.target;H.removeEventListener("dispose",ue),Xe(H)}function Xe(T){Sn(T),vt.remove(T)}function Sn(T){const H=vt.get(T).programs;H!==void 0&&(H.forEach(function(q){bt.releaseProgram(q)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,Y,G,gt){H===null&&(H=Dt);const wt=G.isMesh&&G.matrixWorld.determinant()<0,It=Zf(T,H,q,Y,G);dt.setMaterial(Y,wt);let Ut=q.index,$t=1;if(Y.wireframe===!0){if(Ut=rt.getWireframeAttribute(q),Ut===void 0)return;$t=2}const Xt=q.drawRange,Bt=q.attributes.position;let Me=Xt.start*$t,ke=(Xt.start+Xt.count)*$t;gt!==null&&(Me=Math.max(Me,gt.start*$t),ke=Math.min(ke,(gt.start+gt.count)*$t)),Ut!==null?(Me=Math.max(Me,0),ke=Math.min(ke,Ut.count)):Bt!=null&&(Me=Math.max(Me,0),ke=Math.min(ke,Bt.count));const je=ke-Me;if(je<0||je===1/0)return;Re.setup(G,Y,It,q,Ut);let An,_e=Lt;if(Ut!==null&&(An=et.get(Ut),_e=le,_e.setIndex(An)),G.isMesh)Y.wireframe===!0?(dt.setLineWidth(Y.wireframeLinewidth*V()),_e.setMode(R.LINES)):_e.setMode(R.TRIANGLES);else if(G.isLine){let zt=Y.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*V()),G.isLineSegments?_e.setMode(R.LINES):G.isLineLoop?_e.setMode(R.LINE_LOOP):_e.setMode(R.LINE_STRIP)}else G.isPoints?_e.setMode(R.POINTS):G.isSprite&&_e.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_e.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))_e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const zt=G._multiDrawStarts,nn=G._multiDrawCounts,ve=G._multiDrawCount,Gn=Ut?et.get(Ut).bytesPerElement:1,Ss=vt.get(Y).currentProgram.getUniforms();for(let Rn=0;Rn<ve;Rn++)Ss.setValue(R,"_gl_DrawID",Rn),_e.render(zt[Rn]/Gn,nn[Rn])}else if(G.isInstancedMesh)_e.renderInstances(Me,je,G.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,nn=Math.min(q.instanceCount,zt);_e.renderInstances(Me,je,nn)}else _e.render(Me,je)};function pe(T,H,q){T.transparent===!0&&T.side===yn&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,ro(T,H,q),T.side=Hi,T.needsUpdate=!0,ro(T,H,q),T.side=yn):ro(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),p=ce.get(q),p.init(H),M.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Y=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){const It=gt[wt];pe(It,q,G),Y.add(It)}else pe(gt,q,G),Y.add(gt)}),M.pop(),p=null,Y},this.compileAsync=function(T,H,q=null){const Y=this.compile(T,H,q);return new Promise(G=>{function gt(){if(Y.forEach(function(wt){vt.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){G(T);return}setTimeout(gt,10)}at.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let wn=null;function li(T){wn&&wn(T)}function yu(){Xi.stop()}function xu(){Xi.start()}const Xi=new Od;Xi.setAnimationLoop(li),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(T){wn=T,Z.setAnimationLoop(T),T===null?Xi.stop():Xi.start()},Z.addEventListener("sessionstart",yu),Z.addEventListener("sessionend",xu),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,H,A),p=ce.get(T,M.length),p.init(H),M.push(p),_t.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),jt.setFromProjectionMatrix(_t),ct=this.localClippingEnabled,K=pt.init(this.clippingPlanes,ct),_=Rt.get(T,d.length),_.init(),d.push(_),Z.enabled===!0&&Z.isPresenting===!0){const gt=y.xr.getDepthSensingMesh();gt!==null&&Sr(gt,H,-1/0,y.sortObjects)}Sr(T,H,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(F,ot),Gt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Gt&&qt.addToRenderList(_,T),this.info.render.frame++,K===!0&&pt.beginShadows();const q=p.state.shadowsArray;Ct.render(q,T,H),K===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,G=_.transmissive;if(p.setupLights(),H.isArrayCamera){const gt=H.cameras;if(G.length>0)for(let wt=0,It=gt.length;wt<It;wt++){const Ut=gt[wt];bu(Y,G,T,Ut)}Gt&&qt.render(T);for(let wt=0,It=gt.length;wt<It;wt++){const Ut=gt[wt];Mu(_,T,Ut,Ut.viewport)}}else G.length>0&&bu(Y,G,T,H),Gt&&qt.render(T),Mu(_,T,H);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(y,T,H),Re.resetDefaultState(),N=-1,X=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&pt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Sr(T,H,q,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){Y&&At.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_t);const wt=nt.update(T),It=T.material;It.visible&&_.push(T,wt,It,q,At.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){const wt=nt.update(T),It=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),At.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),At.copy(wt.boundingSphere.center)),At.applyMatrix4(T.matrixWorld).applyMatrix4(_t)),Array.isArray(It)){const Ut=wt.groups;for(let $t=0,Xt=Ut.length;$t<Xt;$t++){const Bt=Ut[$t],Me=It[Bt.materialIndex];Me&&Me.visible&&_.push(T,wt,Me,q,At.z,Bt)}}else It.visible&&_.push(T,wt,It,q,At.z,null)}}const gt=T.children;for(let wt=0,It=gt.length;wt<It;wt++)Sr(gt[wt],H,q,Y)}function Mu(T,H,q,Y){const G=T.opaque,gt=T.transmissive,wt=T.transparent;p.setupLightsView(q),K===!0&&pt.setGlobalState(y.clippingPlanes,q),Y&&dt.viewport(v.copy(Y)),G.length>0&&oo(G,H,q),gt.length>0&&oo(gt,H,q),wt.length>0&&oo(wt,H,q),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function bu(T,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ps(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?eo:Si,minFilter:ls,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const gt=p.state.transmissionRenderTarget[Y.id],wt=Y.viewport||v;gt.setSize(wt.z,wt.w);const It=y.getRenderTarget();y.setRenderTarget(gt),y.getClearColor(k),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&qt.render(q);const Ut=y.toneMapping;y.toneMapping=Ni;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),K===!0&&pt.setGlobalState(y.clippingPlanes,Y),oo(T,q,Y),P.updateMultisampleRenderTarget(gt),P.updateRenderTargetMipmap(gt),at.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Bt=0,Me=H.length;Bt<Me;Bt++){const ke=H[Bt],je=ke.object,An=ke.geometry,_e=ke.material,zt=ke.group;if(_e.side===yn&&je.layers.test(Y.layers)){const nn=_e.side;_e.side=bn,_e.needsUpdate=!0,Su(je,q,Y,An,_e,zt),_e.side=nn,_e.needsUpdate=!0,Xt=!0}}Xt===!0&&(P.updateMultisampleRenderTarget(gt),P.updateRenderTargetMipmap(gt))}y.setRenderTarget(It),y.setClearColor(k,B),$t!==void 0&&(Y.viewport=$t),y.toneMapping=Ut}function oo(T,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,gt=T.length;G<gt;G++){const wt=T[G],It=wt.object,Ut=wt.geometry,$t=Y===null?wt.material:Y,Xt=wt.group;It.layers.test(q.layers)&&Su(It,H,q,Ut,$t,Xt)}}function Su(T,H,q,Y,G,gt){T.onBeforeRender(y,H,q,Y,G,gt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,H,q,Y,T,gt),G.transparent===!0&&G.side===yn&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,y.renderBufferDirect(q,H,Y,G,T,gt),G.side=Hi,G.needsUpdate=!0,y.renderBufferDirect(q,H,Y,G,T,gt),G.side=yn):y.renderBufferDirect(q,H,Y,G,T,gt),T.onAfterRender(y,H,q,Y,G,gt)}function ro(T,H,q){H.isScene!==!0&&(H=Dt);const Y=vt.get(T),G=p.state.lights,gt=p.state.shadowsArray,wt=G.state.version,It=bt.getParameters(T,G.state,gt,H,q),Ut=bt.getProgramCacheKey(It);let $t=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?$:S).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",ue),$t=new Map,Y.programs=$t);let Xt=$t.get(Ut);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===wt)return Eu(T,It),Xt}else It.uniforms=bt.getUniforms(T),T.onBeforeCompile(It,y),Xt=bt.acquireProgram(It,Ut),$t.set(Ut,Xt),Y.uniforms=It.uniforms;const Bt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=pt.uniform),Eu(T,It),Y.needsLights=tp(T),Y.lightsStateVersion=wt,Y.needsLights&&(Bt.ambientLightColor.value=G.state.ambient,Bt.lightProbe.value=G.state.probe,Bt.directionalLights.value=G.state.directional,Bt.directionalLightShadows.value=G.state.directionalShadow,Bt.spotLights.value=G.state.spot,Bt.spotLightShadows.value=G.state.spotShadow,Bt.rectAreaLights.value=G.state.rectArea,Bt.ltc_1.value=G.state.rectAreaLTC1,Bt.ltc_2.value=G.state.rectAreaLTC2,Bt.pointLights.value=G.state.point,Bt.pointLightShadows.value=G.state.pointShadow,Bt.hemisphereLights.value=G.state.hemi,Bt.directionalShadowMap.value=G.state.directionalShadowMap,Bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Bt.spotShadowMap.value=G.state.spotShadowMap,Bt.spotLightMatrix.value=G.state.spotLightMatrix,Bt.spotLightMap.value=G.state.spotLightMap,Bt.pointShadowMap.value=G.state.pointShadowMap,Bt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function wu(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Eu(T,H){const q=vt.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Zf(T,H,q,Y,G){H.isScene!==!0&&(H=Dt),P.resetTextureUnits();const gt=H.fog,wt=Y.isMeshStandardMaterial?H.environment:null,It=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wi,Ut=(Y.isMeshStandardMaterial?$:S).get(Y.envMap||wt),$t=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Bt=!!q.morphAttributes.position,Me=!!q.morphAttributes.normal,ke=!!q.morphAttributes.color;let je=Ni;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=y.toneMapping);const An=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=An!==void 0?An.length:0,zt=vt.get(Y),nn=p.state.lights;if(K===!0&&(ct===!0||T!==X)){const Un=T===X&&Y.id===N;pt.setState(Y,T,Un)}let ve=!1;Y.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==nn.state.version||zt.outputColorSpace!==It||G.isBatchedMesh&&zt.batching===!1||!G.isBatchedMesh&&zt.batching===!0||G.isBatchedMesh&&zt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&zt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&zt.instancing===!1||!G.isInstancedMesh&&zt.instancing===!0||G.isSkinnedMesh&&zt.skinning===!1||!G.isSkinnedMesh&&zt.skinning===!0||G.isInstancedMesh&&zt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&zt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&zt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&zt.instancingMorph===!1&&G.morphTexture!==null||zt.envMap!==Ut||Y.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==pt.numPlanes||zt.numIntersection!==pt.numIntersection)||zt.vertexAlphas!==$t||zt.vertexTangents!==Xt||zt.morphTargets!==Bt||zt.morphNormals!==Me||zt.morphColors!==ke||zt.toneMapping!==je||zt.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,zt.__version=Y.version);let Gn=zt.currentProgram;ve===!0&&(Gn=ro(Y,H,G));let Ss=!1,Rn=!1,wr=!1;const Ve=Gn.getUniforms(),Ti=zt.uniforms;if(dt.useProgram(Gn.program)&&(Ss=!0,Rn=!0,wr=!0),Y.id!==N&&(N=Y.id,Rn=!0),Ss||X!==T){st.reverseDepthBuffer?(Mt.copy(T.projectionMatrix),$p(Mt),Xp(Mt),Ve.setValue(R,"projectionMatrix",Mt)):Ve.setValue(R,"projectionMatrix",T.projectionMatrix),Ve.setValue(R,"viewMatrix",T.matrixWorldInverse);const Un=Ve.map.cameraPosition;Un!==void 0&&Un.setValue(R,Ht.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&Ve.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ve.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,Rn=!0,wr=!0)}if(G.isSkinnedMesh){Ve.setOptional(R,G,"bindMatrix"),Ve.setOptional(R,G,"bindMatrixInverse");const Un=G.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ve.setValue(R,"boneTexture",Un.boneTexture,P))}G.isBatchedMesh&&(Ve.setOptional(R,G,"batchingTexture"),Ve.setValue(R,"batchingTexture",G._matricesTexture,P),Ve.setOptional(R,G,"batchingIdTexture"),Ve.setValue(R,"batchingIdTexture",G._indirectTexture,P),Ve.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&Ve.setValue(R,"batchingColorTexture",G._colorsTexture,P));const Er=q.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Yt.update(G,q,Gn),(Rn||zt.receiveShadow!==G.receiveShadow)&&(zt.receiveShadow=G.receiveShadow,Ve.setValue(R,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ti.envMap.value=Ut,Ti.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Ti.envMapIntensity.value=H.environmentIntensity),Rn&&(Ve.setValue(R,"toneMappingExposure",y.toneMappingExposure),zt.needsLights&&Qf(Ti,wr),gt&&Y.fog===!0&&yt.refreshFogUniforms(Ti,gt),yt.refreshMaterialUniforms(Ti,Y,I,U,p.state.transmissionRenderTarget[T.id]),Yo.upload(R,wu(zt),Ti,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Yo.upload(R,wu(zt),Ti,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ve.setValue(R,"center",G.center),Ve.setValue(R,"modelViewMatrix",G.modelViewMatrix),Ve.setValue(R,"normalMatrix",G.normalMatrix),Ve.setValue(R,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Un=Y.uniformsGroups;for(let Tr=0,ep=Un.length;Tr<ep;Tr++){const Tu=Un[Tr];z.update(Tu,Gn),z.bind(Tu,Gn)}}return Gn}function Qf(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function tp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,H,q){vt.get(T.texture).__webglTexture=H,vt.get(T.depthTexture).__webglTexture=q;const Y=vt.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const q=vt.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){A=T,C=H,E=q;let Y=!0,G=null,gt=!1,wt=!1;if(T){const Ut=vt.get(T);if(Ut.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(R.FRAMEBUFFER,null),Y=!1;else if(Ut.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Ut.__hasExternalTextures)P.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Bt=T.depthTexture;if(Ut.__boundDepthTexture!==Bt){if(Bt!==null&&vt.has(Bt)&&(T.width!==Bt.image.width||T.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(wt=!0);const Xt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?G=Xt[H][q]:G=Xt[H],gt=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?G=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?G=Xt[q]:G=Xt,v.copy(T.viewport),w.copy(T.scissor),O=T.scissorTest}else v.copy(ut).multiplyScalar(I).floor(),w.copy(tt).multiplyScalar(I).floor(),O=Pt;if(dt.bindFramebuffer(R.FRAMEBUFFER,G)&&Y&&dt.drawBuffers(T,G),dt.viewport(v),dt.scissor(w),dt.setScissorTest(O),gt){const Ut=vt.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ut.__webglTexture,q)}else if(wt){const Ut=vt.get(T.texture),$t=H||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,q||0,$t)}N=-1},this.readRenderTargetPixels=function(T,H,q,Y,G,gt,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){dt.bindFramebuffer(R.FRAMEBUFFER,It);try{const Ut=T.texture,$t=Ut.format,Xt=Ut.type;if(!st.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-G&&R.readPixels(H,q,Y,G,Qt.convert($t),Qt.convert(Xt),gt)}finally{const Ut=A!==null?vt.get(A).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,H,q,Y,G,gt,wt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){const Ut=T.texture,$t=Ut.format,Xt=Ut.type;if(!st.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-G){dt.bindFramebuffer(R.FRAMEBUFFER,It);const Bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Bt),R.bufferData(R.PIXEL_PACK_BUFFER,gt.byteLength,R.STREAM_READ),R.readPixels(H,q,Y,G,Qt.convert($t),Qt.convert(Xt),0);const Me=A!==null?vt.get(A).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,Me);const ke=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Wp(R,ke,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,gt),R.deleteBuffer(Bt),R.deleteSync(ke),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,q=0){T.isTexture!==!0&&(qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(T.image.width*Y),gt=Math.floor(T.image.height*Y),wt=H!==null?H.x:0,It=H!==null?H.y:0;P.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,wt,It,G,gt),dt.unbindTexture()},this.copyTextureToTexture=function(T,H,q=null,Y=null,G=0){T.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],H=arguments[2],G=arguments[3]||0,q=null);let gt,wt,It,Ut,$t,Xt;q!==null?(gt=q.max.x-q.min.x,wt=q.max.y-q.min.y,It=q.min.x,Ut=q.min.y):(gt=T.image.width,wt=T.image.height,It=0,Ut=0),Y!==null?($t=Y.x,Xt=Y.y):($t=0,Xt=0);const Bt=Qt.convert(H.format),Me=Qt.convert(H.type);P.setTexture2D(H,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const ke=R.getParameter(R.UNPACK_ROW_LENGTH),je=R.getParameter(R.UNPACK_IMAGE_HEIGHT),An=R.getParameter(R.UNPACK_SKIP_PIXELS),_e=R.getParameter(R.UNPACK_SKIP_ROWS),zt=R.getParameter(R.UNPACK_SKIP_IMAGES),nn=T.isCompressedTexture?T.mipmaps[G]:T.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,nn.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ut),T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,$t,Xt,gt,wt,Bt,Me,nn.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,$t,Xt,nn.width,nn.height,Bt,nn.data):R.texSubImage2D(R.TEXTURE_2D,G,$t,Xt,gt,wt,Bt,Me,nn),R.pixelStorei(R.UNPACK_ROW_LENGTH,ke),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,je),R.pixelStorei(R.UNPACK_SKIP_PIXELS,An),R.pixelStorei(R.UNPACK_SKIP_ROWS,_e),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt),G===0&&H.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q=null,Y=null,G=0){T.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],H=arguments[3],G=arguments[4]||0);let gt,wt,It,Ut,$t,Xt,Bt,Me,ke;const je=T.isCompressedTexture?T.mipmaps[G]:T.image;q!==null?(gt=q.max.x-q.min.x,wt=q.max.y-q.min.y,It=q.max.z-q.min.z,Ut=q.min.x,$t=q.min.y,Xt=q.min.z):(gt=je.width,wt=je.height,It=je.depth,Ut=0,$t=0,Xt=0),Y!==null?(Bt=Y.x,Me=Y.y,ke=Y.z):(Bt=0,Me=0,ke=0);const An=Qt.convert(H.format),_e=Qt.convert(H.type);let zt;if(H.isData3DTexture)P.setTexture3D(H,0),zt=R.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)P.setTexture2DArray(H,0),zt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const nn=R.getParameter(R.UNPACK_ROW_LENGTH),ve=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Gn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ss=R.getParameter(R.UNPACK_SKIP_ROWS),Rn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,je.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,je.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ut),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt),T.isDataTexture||T.isData3DTexture?R.texSubImage3D(zt,G,Bt,Me,ke,gt,wt,It,An,_e,je.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(zt,G,Bt,Me,ke,gt,wt,It,An,je.data):R.texSubImage3D(zt,G,Bt,Me,ke,gt,wt,It,An,_e,je),R.pixelStorei(R.UNPACK_ROW_LENGTH,nn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ve),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ss),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rn),G===0&&H.generateMipmaps&&R.generateMipmap(zt),dt.unbindTexture()},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){C=0,E=0,A=null,dt.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wl?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===pr?"display-p3":"srgb"}}class Kl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=i}clone(){return new Kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sy extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ay{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new D;class ar{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),a=we(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Jn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ar(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dl extends xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const Ra=new D,Bs=new D,zs=new D,js=new ft,Ca=new ft,Gd=new Ae,Po=new D,Pa=new D,ko=new D,Mh=new ft,ac=new ft,bh=new ft;class Sh extends Ze{constructor(t=new dl){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new pn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ay(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new ar(i,3,0,!1)),Fs.setAttribute("uv",new ar(i,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),Gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-zs.z);const i=this.material.rotation;let s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));const o=this.center;Lo(Po.set(-.5,-.5,0),zs,o,Bs,s,a),Lo(Pa.set(.5,-.5,0),zs,o,Bs,s,a),Lo(ko.set(.5,.5,0),zs,o,Bs,s,a),Mh.set(0,0),ac.set(1,0),bh.set(1,1);let r=t.ray.intersectTriangle(Po,Pa,ko,!1,Ra);if(r===null&&(Lo(Pa.set(-.5,.5,0),zs,o,Bs,s,a),ac.set(0,1),r=t.ray.intersectTriangle(Po,ko,Pa,!1,Ra),r===null))return;const c=t.ray.origin.distanceTo(Ra);c<t.near||c>t.far||e.push({distance:c,point:Ra.clone(),uv:jn.getInterpolation(Ra,Po,Pa,ko,Mh,ac,bh,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lo(n,t,e,i,s,a){js.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ca.x=a*js.x-s*js.y,Ca.y=s*js.x+a*js.y):Ca.copy(js),n.copy(t),n.x+=Ca.x,n.y+=Ca.y,n.applyMatrix4(Gd)}class Wd extends xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const or=new D,rr=new D,wh=new Ae,ka=new $l,Io=new mr,oc=new D,Eh=new D;class oy extends Ze{constructor(t=new pn,e=new Wd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)or.fromBufferAttribute(e,s-1),rr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=or.distanceTo(rr);t.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=a,t.ray.intersectsSphere(Io)===!1)return;wh.copy(s).invert(),ka.copy(t.ray).applyMatrix4(wh);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const d=u.getX(_),M=u.getX(_+1),y=Do(this,t,ka,c,d,M);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),d=Do(this,t,ka,c,_,p);d&&e.push(d)}}else{const f=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const d=Do(this,t,ka,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Do(this,t,ka,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Do(n,t,e,i,s,a){const o=n.geometry.attributes.position;if(or.fromBufferAttribute(o,s),rr.fromBufferAttribute(o,a),e.distanceSqToSegment(or,rr,oc,Eh)>i)return;oc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Mi extends dn{constructor(t,e,i,s,a,o,r,c,l){super(t,e,i,s,a,o,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let o;e?o=e:o=t*i[a-1];let r=0,c=a-1,l;for(;r<=c;)if(s=Math.floor(r+(c-r)/2),l=i[s]-o,l<0)r=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(a-1);const u=i[s],m=i[s+1]-u,f=(o-u)/m;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),c=e||(o.isVector2?new ft:new D);return c.copy(r).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],a=[],o=[],r=new D,c=new Ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}a[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),m<=l&&i.set(0,0,1),r.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(sn(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(r,g))}o[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(sn(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jl extends ci{constructor(t=0,e=0,i=1,s=1,a=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=c-this.aX,f=l-this.aY;c=m*u-f*h+this.aX,l=m*h+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ry extends Jl{constructor(t,e,i,s,a,o){super(t,e,i,i,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zl(){let n=0,t=0,e=0,i=0;function s(a,o,r,c){n=a,t=r,e=-3*a+3*o-2*r-c,i=2*a-2*o+r+c}return{initCatmullRom:function(a,o,r,c,l){s(o,r,l*(r-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,r,c,l,u,h){let m=(o-a)/l-(r-a)/(l+u)+(r-o)/u,f=(r-o)/u-(c-o)/(u+h)+(c-r)/h;m*=u,f*=u,s(o,r,m,f)},calc:function(a){const o=a*a,r=o*a;return n+t*a+e*o+i*r}}}const Uo=new D,rc=new Zl,cc=new Zl,lc=new Zl;class cy extends ci{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),c=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:c===0&&r===a-1&&(r=a-2,c=1);let l,u;this.closed||r>0?l=s[(r-1)%a]:(Uo.subVectors(s[0],s[1]).add(s[0]),l=Uo);const h=s[r%a],m=s[(r+1)%a];if(this.closed||r+2<a?u=s[(r+2)%a]:(Uo.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(m),f),p=Math.pow(m.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),rc.initNonuniformCatmullRom(l.x,h.x,m.x,u.x,g,_,p),cc.initNonuniformCatmullRom(l.y,h.y,m.y,u.y,g,_,p),lc.initNonuniformCatmullRom(l.z,h.z,m.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(l.x,h.x,m.x,u.x,this.tension),cc.initCatmullRom(l.y,h.y,m.y,u.y,this.tension),lc.initCatmullRom(l.z,h.z,m.z,u.z,this.tension));return i.set(rc.calc(c),cc.calc(c),lc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Th(n,t,e,i,s){const a=(i-t)*.5,o=(s-e)*.5,r=n*n,c=n*r;return(2*e-2*i+a+o)*c+(-3*e+3*i-2*a-o)*r+a*n+e}function ly(n,t){const e=1-n;return e*e*t}function uy(n,t){return 2*(1-n)*n*t}function hy(n,t){return n*n*t}function Fa(n,t,e,i){return ly(n,t)+uy(n,e)+hy(n,i)}function dy(n,t){const e=1-n;return e*e*e*t}function fy(n,t){const e=1-n;return 3*e*e*n*t}function py(n,t){return 3*(1-n)*n*n*t}function my(n,t){return n*n*n*t}function Ba(n,t,e,i,s){return dy(n,t)+fy(n,e)+py(n,i)+my(n,s)}class $d extends ci{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(Ba(t,s.x,a.x,o.x,r.x),Ba(t,s.y,a.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gy extends ci{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(Ba(t,s.x,a.x,o.x,r.x),Ba(t,s.y,a.y,o.y,r.y),Ba(t,s.z,a.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xd extends ci{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _y extends ci{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qd extends ci{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Fa(t,s.x,a.x,o.x),Fa(t,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vy extends ci{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Fa(t,s.x,a.x,o.x),Fa(t,s.y,a.y,o.y),Fa(t,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yd extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Th(r,c.x,l.x,u.x,h.x),Th(r,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var fl=Object.freeze({__proto__:null,ArcCurve:ry,CatmullRomCurve3:cy,CubicBezierCurve:$d,CubicBezierCurve3:gy,EllipseCurve:Jl,LineCurve:Xd,LineCurve3:_y,QuadraticBezierCurve:qd,QuadraticBezierCurve3:vy,SplineCurve:Yd});class yy extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const o=s[a]-i,r=this.curves[a],c=r.getLength(),l=c===0?0:1-o/c;return r.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const o=a[s],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(r);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new fl[s.type]().fromJSON(s))}return this}}class pl extends yy{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Xd(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new qd(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,o){const r=new $d(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Yd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,o){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,i,s,a,o),this}absarc(t,e,i,s,a,o){return this.absellipse(t,e,i,i,s,a,o),this}ellipse(t,e,i,s,a,o,r,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,a,o,r,c),this}absellipse(t,e,i,s,a,o,r,c){const l=new Jl(t,e,i,s,a,o,r,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ya extends pn{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=sn(s,0,Math.PI*2);const a=[],o=[],r=[],c=[],l=[],u=1/e,h=new D,m=new ft,f=new D,g=new D,_=new D;let p=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-p,f.z=d*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-p,f.z=d*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const y=i+M*u*s,b=Math.sin(y),C=Math.cos(y);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*b,h.y=t[E].y,h.z=t[E].x*C,o.push(h.x,h.y,h.z),m.x=M/e,m.y=E/(t.length-1),r.push(m.x,m.y);const A=c[3*E+0]*b,N=c[3*E+1],X=c[3*E+0]*C;l.push(A,N,X)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const b=y+M*t.length,C=b,E=b+t.length,A=b+t.length+1,N=b+1;a.push(C,E,N),a.push(A,N,E)}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(r,2)),this.setAttribute("normal",new Ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.points,t.segments,t.phiStart,t.phiLength)}}class Ql extends Ya{constructor(t=1,e=1,i=4,s=8){const a=new pl;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Ql(t.radius,t.length,t.capSegments,t.radialSegments)}}class Oi extends pn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],o=[],r=[],c=[],l=new D,u=new ft;o.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let h=0,m=3;h<=e;h++,m+=3){const f=i+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),r.push(0,0,1),u.x=(o[m]/t+1)/2,u.y=(o[m+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends pn{constructor(t=1,e=1,i=1,s=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const u=[],h=[],m=[],f=[];let g=0;const _=[],p=i/2;let d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(m,3)),this.setAttribute("uv",new Ne(f,2));function M(){const b=new D,C=new D;let E=0;const A=(e-t)/i;for(let N=0;N<=a;N++){const X=[],v=N/a,w=v*(e-t)+t;for(let O=0;O<=s;O++){const k=O/s,B=k*c+r,L=Math.sin(B),U=Math.cos(B);C.x=w*L,C.y=-v*i+p,C.z=w*U,h.push(C.x,C.y,C.z),b.set(L,A,U).normalize(),m.push(b.x,b.y,b.z),f.push(k,1-v),X.push(g++)}_.push(X)}for(let N=0;N<s;N++)for(let X=0;X<a;X++){const v=_[X][N],w=_[X+1][N],O=_[X+1][N+1],k=_[X][N+1];t>0&&(u.push(v,w,k),E+=3),e>0&&(u.push(w,O,k),E+=3)}l.addGroup(d,E,0),d+=E}function y(b){const C=g,E=new ft,A=new D;let N=0;const X=b===!0?t:e,v=b===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*v,0),m.push(0,v,0),f.push(.5,.5),g++;const w=g;for(let O=0;O<=s;O++){const B=O/s*c+r,L=Math.cos(B),U=Math.sin(B);A.x=X*U,A.y=p*v,A.z=X*L,h.push(A.x,A.y,A.z),m.push(0,v,0),E.x=L*.5+.5,E.y=U*.5*v+.5,f.push(E.x,E.y),g++}for(let O=0;O<s;O++){const k=C+O,B=w+O;b===!0?u.push(B,B+1,k):u.push(B+1,B,k),N+=3}l.addGroup(d,N,b===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends Ce{constructor(t=1,e=1,i=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,i,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new ms(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kd extends pl{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new pl().fromJSON(s))}return this}}const xy={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let a=Jd(n,0,s,e,!0);const o=[];if(!a||a.next===a.prev)return o;let r,c,l,u,h,m,f;if(i&&(a=Ey(n,t,a,e)),n.length>80*e){r=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)h=n[g],m=n[g+1],h<r&&(r=h),m<c&&(c=m),h>l&&(l=h),m>u&&(u=m);f=Math.max(l-r,u-c),f=f!==0?32767/f:0}return Ka(a,o,e,r,c,f,0),o}};function Jd(n,t,e,i,s){let a,o;if(s===Ny(n,t,e,i)>0)for(a=t;a<e;a+=i)o=Ah(a,n[a],n[a+1],o);else for(a=e-i;a>=t;a-=i)o=Ah(a,n[a],n[a+1],o);return o&&_r(o,o.next)&&(Za(o),o=o.next),o}function gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(_r(e,e.next)||ze(e.prev,e,e.next)===0)){if(Za(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ka(n,t,e,i,s,a,o){if(!n)return;!o&&a&&Py(n,i,s,a);let r=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,a?by(n,i,s,a):My(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Za(n),n=l.next,r=l.next;continue}if(n=l,n===r){o?o===1?(n=Sy(gs(n),t,e),Ka(n,t,e,i,s,a,2)):o===2&&wy(n,t,e,i,s,a):Ka(gs(n),t,e,i,s,a,1);break}}}function My(n){const t=n.prev,e=n,i=n.next;if(ze(t,e,i)>=0)return!1;const s=t.x,a=e.x,o=i.x,r=t.y,c=e.y,l=i.y,u=s<a?s<o?s:o:a<o?a:o,h=r<c?r<l?r:l:c<l?c:l,m=s>a?s>o?s:o:a>o?a:o,f=r>c?r>l?r:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=m&&g.y>=h&&g.y<=f&&qs(s,r,a,c,o,l,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function by(n,t,e,i){const s=n.prev,a=n,o=n.next;if(ze(s,a,o)>=0)return!1;const r=s.x,c=a.x,l=o.x,u=s.y,h=a.y,m=o.y,f=r<c?r<l?r:l:c<l?c:l,g=u<h?u<m?u:m:h<m?h:m,_=r>c?r>l?r:l:c>l?c:l,p=u>h?u>m?u:m:h>m?h:m,d=ml(f,g,t,e,i),M=ml(_,p,t,e,i);let y=n.prevZ,b=n.nextZ;for(;y&&y.z>=d&&b&&b.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&qs(r,u,c,h,l,m,y.x,y.y)&&ze(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&qs(r,u,c,h,l,m,b.x,b.y)&&ze(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=d;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&qs(r,u,c,h,l,m,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&qs(r,u,c,h,l,m,b.x,b.y)&&ze(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Sy(n,t,e){let i=n;do{const s=i.prev,a=i.next.next;!_r(s,a)&&Zd(s,i,i.next,a)&&Ja(s,a)&&Ja(a,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(a.i/e|0),Za(i),Za(i.next),i=n=a),i=i.next}while(i!==n);return gs(i)}function wy(n,t,e,i,s,a){let o=n;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&Iy(o,r)){let c=Qd(o,r);o=gs(o,o.next),c=gs(c,c.next),Ka(o,t,e,i,s,a,0),Ka(c,t,e,i,s,a,0);return}r=r.next}o=o.next}while(o!==n)}function Ey(n,t,e,i){const s=[];let a,o,r,c,l;for(a=0,o=t.length;a<o;a++)r=t[a]*i,c=a<o-1?t[a+1]*i:n.length,l=Jd(n,r,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Ly(l));for(s.sort(Ty),a=0;a<s.length;a++)e=Ay(s[a],e);return e}function Ty(n,t){return n.x-t.x}function Ay(n,t){const e=Ry(n,t);if(!e)return t;const i=Qd(e,n);return gs(i,i.next),gs(e,e.next)}function Ry(n,t){let e=t,i=-1/0,s;const a=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=a&&m>i&&(i=m,s=e.x<e.next.x?e:e.next,m===a))return s}e=e.next}while(e!==t);if(!s)return null;const r=s,c=s.x,l=s.y;let u=1/0,h;e=s;do a>=e.x&&e.x>=c&&a!==e.x&&qs(o<l?a:i,o,c,l,o<l?i:a,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(a-e.x),Ja(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Cy(s,e)))&&(s=e,u=h)),e=e.next;while(e!==r);return s}function Cy(n,t){return ze(n.prev,n,t.prev)<0&&ze(t.next,n,n.next)<0}function Py(n,t,e,i){let s=n;do s.z===0&&(s.z=ml(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ky(s)}function ky(n){let t,e,i,s,a,o,r,c,l=1;do{for(e=n,n=null,a=null,o=0;e;){for(o++,i=e,r=0,t=0;t<l&&(r++,i=i.nextZ,!!i);t++);for(c=l;r>0||c>0&&i;)r!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,r--):(s=i,i=i.nextZ,c--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;e=i}a.nextZ=null,l*=2}while(o>1);return n}function ml(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ly(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qs(n,t,e,i,s,a,o,r){return(s-o)*(t-r)>=(n-o)*(a-r)&&(n-o)*(i-r)>=(e-o)*(t-r)&&(e-o)*(a-r)>=(s-o)*(i-r)}function Iy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Dy(n,t)&&(Ja(n,t)&&Ja(t,n)&&Uy(n,t)&&(ze(n.prev,n,t.prev)||ze(n,t.prev,t))||_r(n,t)&&ze(n.prev,n,n.next)>0&&ze(t.prev,t,t.next)>0)}function ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function _r(n,t){return n.x===t.x&&n.y===t.y}function Zd(n,t,e,i){const s=Oo(ze(n,t,e)),a=Oo(ze(n,t,i)),o=Oo(ze(e,i,n)),r=Oo(ze(e,i,t));return!!(s!==a&&o!==r||s===0&&No(n,e,t)||a===0&&No(n,i,t)||o===0&&No(e,n,i)||r===0&&No(e,t,i))}function No(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Oo(n){return n>0?1:n<0?-1:0}function Dy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ja(n,t){return ze(n.prev,n,n.next)<0?ze(n,t,n.next)>=0&&ze(n,n.prev,t)>=0:ze(n,t,n.prev)<0||ze(n,n.next,t)<0}function Uy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Qd(n,t){const e=new gl(n.i,n.x,n.y),i=new gl(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function Ah(n,t,e,i){const s=new gl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Za(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function gl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ny(n,t,e,i){let s=0;for(let a=t,o=e-i;a<e;a+=i)s+=(n[o]-n[a])*(n[a+1]+n[o+1]),o=a;return s}class za{static area(t){const e=t.length;let i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return za.area(t)<0}static triangulateShape(t,e){const i=[],s=[],a=[];Rh(t),Ch(i,t);let o=t.length;e.forEach(Rh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ch(i,e[c]);const r=xy.triangulate(i,s);for(let c=0;c<r.length;c+=3)a.push(r.slice(c,c+3));return a}}function Rh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ch(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class tu extends pn{constructor(t=new Kd([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],a=[];for(let r=0,c=t.length;r<c;r++){const l=t[r];o(l)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(a,2)),this.computeVertexNormals();function o(r){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Oy;let y,b=!1,C,E,A,N;d&&(y=d.getSpacedPoints(u),b=!0,m=!1,C=d.computeFrenetFrames(u,!1),E=new D,A=new D,N=new D),m||(p=0,f=0,g=0,_=0);const X=r.extractPoints(l);let v=X.shape;const w=X.holes;if(!za.isClockWise(v)){v=v.reverse();for(let V=0,R=w.length;V<R;V++){const ht=w[V];za.isClockWise(ht)&&(w[V]=ht.reverse())}}const k=za.triangulateShape(v,w),B=v;for(let V=0,R=w.length;V<R;V++){const ht=w[V];v=v.concat(ht)}function L(V,R,ht){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(R,ht)}const U=v.length,I=k.length;function F(V,R,ht){let at,st,dt;const mt=V.x-R.x,vt=V.y-R.y,P=ht.x-V.x,S=ht.y-V.y,$=mt*mt+vt*vt,et=mt*S-vt*P;if(Math.abs(et)>Number.EPSILON){const rt=Math.sqrt($),nt=Math.sqrt(P*P+S*S),bt=R.x-vt/rt,yt=R.y+mt/rt,Rt=ht.x-S/nt,ce=ht.y+P/nt,pt=((Rt-bt)*S-(ce-yt)*P)/(mt*S-vt*P);at=bt+mt*pt-V.x,st=yt+vt*pt-V.y;const Ct=at*at+st*st;if(Ct<=2)return new ft(at,st);dt=Math.sqrt(Ct/2)}else{let rt=!1;mt>Number.EPSILON?P>Number.EPSILON&&(rt=!0):mt<-Number.EPSILON?P<-Number.EPSILON&&(rt=!0):Math.sign(vt)===Math.sign(S)&&(rt=!0),rt?(at=-vt,st=mt,dt=Math.sqrt($)):(at=mt,st=vt,dt=Math.sqrt($/2))}return new ft(at/dt,st/dt)}const ot=[];for(let V=0,R=B.length,ht=R-1,at=V+1;V<R;V++,ht++,at++)ht===R&&(ht=0),at===R&&(at=0),ot[V]=F(B[V],B[ht],B[at]);const ut=[];let tt,Pt=ot.concat();for(let V=0,R=w.length;V<R;V++){const ht=w[V];tt=[];for(let at=0,st=ht.length,dt=st-1,mt=at+1;at<st;at++,dt++,mt++)dt===st&&(dt=0),mt===st&&(mt=0),tt[at]=F(ht[at],ht[dt],ht[mt]);ut.push(tt),Pt=Pt.concat(tt)}for(let V=0;V<p;V++){const R=V/p,ht=f*Math.cos(R*Math.PI/2),at=g*Math.sin(R*Math.PI/2)+_;for(let st=0,dt=B.length;st<dt;st++){const mt=L(B[st],ot[st],at);_t(mt.x,mt.y,-ht)}for(let st=0,dt=w.length;st<dt;st++){const mt=w[st];tt=ut[st];for(let vt=0,P=mt.length;vt<P;vt++){const S=L(mt[vt],tt[vt],at);_t(S.x,S.y,-ht)}}}const jt=g+_;for(let V=0;V<U;V++){const R=m?L(v[V],Pt[V],jt):v[V];b?(A.copy(C.normals[0]).multiplyScalar(R.x),E.copy(C.binormals[0]).multiplyScalar(R.y),N.copy(y[0]).add(A).add(E),_t(N.x,N.y,N.z)):_t(R.x,R.y,0)}for(let V=1;V<=u;V++)for(let R=0;R<U;R++){const ht=m?L(v[R],Pt[R],jt):v[R];b?(A.copy(C.normals[V]).multiplyScalar(ht.x),E.copy(C.binormals[V]).multiplyScalar(ht.y),N.copy(y[V]).add(A).add(E),_t(N.x,N.y,N.z)):_t(ht.x,ht.y,h/u*V)}for(let V=p-1;V>=0;V--){const R=V/p,ht=f*Math.cos(R*Math.PI/2),at=g*Math.sin(R*Math.PI/2)+_;for(let st=0,dt=B.length;st<dt;st++){const mt=L(B[st],ot[st],at);_t(mt.x,mt.y,h+ht)}for(let st=0,dt=w.length;st<dt;st++){const mt=w[st];tt=ut[st];for(let vt=0,P=mt.length;vt<P;vt++){const S=L(mt[vt],tt[vt],at);b?_t(S.x,S.y+y[u-1].y,y[u-1].x+ht):_t(S.x,S.y,h+ht)}}}K(),ct();function K(){const V=s.length/3;if(m){let R=0,ht=U*R;for(let at=0;at<I;at++){const st=k[at];Ht(st[2]+ht,st[1]+ht,st[0]+ht)}R=u+p*2,ht=U*R;for(let at=0;at<I;at++){const st=k[at];Ht(st[0]+ht,st[1]+ht,st[2]+ht)}}else{for(let R=0;R<I;R++){const ht=k[R];Ht(ht[2],ht[1],ht[0])}for(let R=0;R<I;R++){const ht=k[R];Ht(ht[0]+U*u,ht[1]+U*u,ht[2]+U*u)}}i.addGroup(V,s.length/3-V,0)}function ct(){const V=s.length/3;let R=0;Mt(B,R),R+=B.length;for(let ht=0,at=w.length;ht<at;ht++){const st=w[ht];Mt(st,R),R+=st.length}i.addGroup(V,s.length/3-V,1)}function Mt(V,R){let ht=V.length;for(;--ht>=0;){const at=ht;let st=ht-1;st<0&&(st=V.length-1);for(let dt=0,mt=u+p*2;dt<mt;dt++){const vt=U*dt,P=U*(dt+1),S=R+at+vt,$=R+st+vt,et=R+st+P,rt=R+at+P;At(S,$,et,rt)}}}function _t(V,R,ht){c.push(V),c.push(R),c.push(ht)}function Ht(V,R,ht){Dt(V),Dt(R),Dt(ht);const at=s.length/3,st=M.generateTopUV(i,s,at-3,at-2,at-1);Gt(st[0]),Gt(st[1]),Gt(st[2])}function At(V,R,ht,at){Dt(V),Dt(R),Dt(at),Dt(R),Dt(ht),Dt(at);const st=s.length/3,dt=M.generateSideWallUV(i,s,st-6,st-3,st-2,st-1);Gt(dt[0]),Gt(dt[1]),Gt(dt[3]),Gt(dt[1]),Gt(dt[2]),Gt(dt[3])}function Dt(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function Gt(V){a.push(V.x),a.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Fy(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,o=t.shapes.length;a<o;a++){const r=e[t.shapes[a]];i.push(r)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fl[s.type]().fromJSON(s)),new tu(i,t.options)}}const Oy={generateTopUV:function(n,t,e,i,s){const a=t[e*3],o=t[e*3+1],r=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ft(a,o),new ft(r,c),new ft(l,u)]},generateSideWallUV:function(n,t,e,i,s,a){const o=t[e*3],r=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],m=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[a*3],p=t[a*3+1],d=t[a*3+2];return Math.abs(r-u)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-h),new ft(m,1-g),new ft(_,1-d)]:[new ft(r,1-c),new ft(u,1-h),new ft(f,1-g),new ft(p,1-d)]}};function Fy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $e extends pn{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const u=[],h=new D,m=new D,f=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let b=0;d===0&&o===0?b=.5/e:d===i&&c===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const E=C/e;h.x=-t*Math.cos(s+E*a)*Math.sin(o+y*r),h.y=t*Math.cos(o+y*r),h.z=t*Math.sin(s+E*a)*Math.sin(o+y*r),g.push(h.x,h.y,h.z),m.copy(h).normalize(),_.push(m.x,m.y,m.z),p.push(E+b,1-y),M.push(l++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){const y=u[d][M+1],b=u[d][M],C=u[d+1][M],E=u[d+1][M+1];(d!==0||o>0)&&f.push(y,b,E),(d!==i-1||c<Math.PI)&&f.push(b,C,E)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class un extends pn{constructor(t=1,e=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const o=[],r=[],c=[],l=[],u=new D,h=new D,m=new D;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*a,p=f/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),r.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(h,u).normalize(),c.push(m.x,m.y,m.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,d=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,p,M),o.push(p,d,M)}this.setIndex(o),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qn extends xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ph={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class By{constructor(t,e,i){const s=this;let a=!1,o=0,r=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){r++,a===!1&&s.onStart!==void 0&&s.onStart(u,o,r),a=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,r),o===r&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,m=l.length;h<m;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const zy=new By;class eu{constructor(t){this.manager=t!==void 0?t:zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}eu.DEFAULT_MATERIAL_NAME="__DEFAULT";class jy extends eu{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=Ph.get(t);if(o!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o;const r=qa("img");function c(){u(),Ph.add(t,this),e&&e(this),a.manager.itemEnd(t)}function l(h){u(),s&&s(h),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){r.removeEventListener("load",c,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",c,!1),r.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),a.manager.itemStart(t),r.src=t,r}}class kh extends eu{constructor(t){super(t)}load(t,e,i,s){const a=new dn,o=new jy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(r){a.image=r,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class nu extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hy extends nu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const uc=new Ae,Lh=new D,Ih=new D;class tf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dh=new Ae,La=new D,hc=new D;class Vy extends tf{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),La.setFromMatrixPosition(t.matrixWorld),i.position.copy(La),hc.copy(i.position),hc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(hc),i.updateMatrixWorld(),s.makeTranslation(-La.x,-La.y,-La.z),Dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh)}}class fa extends nu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Gy extends tf{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uh extends nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Gy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nh(){return performance.now()}const Oh=new Ae;class $y{constructor(t,e,i=0,s=1/0){this.ray=new $l(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(t,e=!0,i=[]){return _l(t,this,i,e),i.sort(Fh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)_l(t[s],this,i,e);return i.sort(Fh),i}}function Fh(n,t){return n.distance-t.distance}function _l(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const a=n.children;for(let o=0,r=a.length;o<r;o++)_l(a[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);const Xy=1842212,Le=(n,t={})=>new Qn({color:n,roughness:.55,metalness:0,...t});function kn(n,t,e=1,i=1,s=1){const a=new W(new $e(n,20,14),t);return a.scale.set(e,i,s),a.castShadow=!0,a}class qy{constructor(){this.root=new Ot,this.root.name="cat",this.mBody=Le(Xy,{roughness:.45}),this.mDark=Le(3421247),this.parts=[],this.t=0,this.action=null,this.mode="idle",this.blinkT=2,this.sq=0,this.sqV=0,this.happyEyes=0,this.build()}build(){const t=this.root;this.body=new Ot,t.add(this.body);const e=kn(.42,this.mBody,1,1.25,.9);e.position.y=1,this.body.add(e);const i=new $e(.43,24,16,Math.PI/2-Math.PI*.32,Math.PI*.64,Math.PI*.38,Math.PI*.5),s=new W(i,Le(16448250,{side:yn}));s.scale.set(1.02,1.27,.93),s.position.y=1,this.body.add(s);const a=kn(.1,Le(15921906),1,1.3,.5);a.position.set(0,1.36,.33),this.body.add(a),this.head=new Ot,this.head.position.y=1.72,this.body.add(this.head);const o=kn(.42,this.mBody,1.12,.96,1);this.head.add(o);const r=kn(.17,this.mDark,1.35,.85,.8);r.position.set(0,-.12,.31),this.head.add(r);const c=kn(.045,Le(16748456),1.3,.8,1);c.position.set(0,-.06,.44),this.head.add(c);const l=new ae({color:657934});for(const y of[-1,1]){const b=new W(new un(.035,.008,6,12,Math.PI),l);b.position.set(y*.034,-.13,.43),b.rotation.z=Math.PI,this.head.add(b)}this.eyes=[];for(const y of[-1,1]){const b=new Ot;b.position.set(y*.17,.03,.33),b.rotation.y=y*.35;const C=kn(.1,Le(13164618,{emissive:3820032,roughness:.2}),1,1.1,.55),E=kn(.05,new ae({color:328965}),.6,1.5,.5);E.position.z=.04;const A=kn(.022,new ae({color:16777215}));A.position.set(.03,.045,.07),b.add(C,E,A),this.head.add(b),this.eyes.push(b)}this.ears=[];for(const y of[-1,1]){const b=new Ot;b.position.set(y*.26,.3,0),b.rotation.z=-y*.35;const C=new W(new ms(.15,.32,16),this.mBody);C.position.y=.12,C.scale.z=.6,C.castShadow=!0;const E=new W(new ms(.09,.22,12),Le(16752565));E.position.set(0,.1,.05),E.scale.z=.4,b.add(C,E),this.head.add(b),this.ears.push(b)}const u=new Wd({color:14540253});for(const y of[-1,1])for(let b=0;b<3;b++){const C=new pn().setFromPoints([new D(y*.15,-.1+b*.03,.4),new D(y*.48,-.06+b*.07-.05,.3)]);this.head.add(new oy(C,u))}this.hatSlot=new Ot,this.hatSlot.position.y=.33,this.head.add(this.hatSlot),this.neckSlot=new Ot,this.neckSlot.position.y=1.42,this.body.add(this.neckSlot),this.arms=[];for(const y of[-1,1]){const b=new Ot;b.position.set(y*.36,1.25,.08);const C=new W(new Ql(.085,.3,6,12),this.mBody);C.position.y=-.2,C.castShadow=!0;const E=kn(.1,Le(16053492),1,.85,1);E.position.y=-.4,b.add(C,E),b.rotation.z=y*.25,b.userData.side=y,this.body.add(b),this.arms.push(b)}this.tools={};const h=new Ot,m=new W(new te(.04,.3,.012),Le(14673646,{metalness:.8,roughness:.2}));m.position.y=-.17;const f=new W(new Ce(.02,.02,.12),Le(7028509));h.add(m,f),h.rotation.x=Math.PI/2,h.position.set(0,-.45,.06);const g=new Ot,_=new W(new Ce(.015,.015,.45),Le(13081179));_.position.y=-.2;const p=new W(new $e(.06,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),Le(13081179,{side:yn}));p.position.y=-.42,g.add(_,p),g.position.set(0,-.42,.04);const d=new W(new te(.16,.2,.02),Le(16775392));d.position.set(0,-.48,.12),d.rotation.x=-.5,this.tools.knife=h,this.tools.ladle=g,this.tools.pad=d;for(const y in this.tools)this.tools[y].visible=!1,this.arms[1].add(this.tools[y]);this.tail=[];let M=new Ot;M.position.set(0,.75,-.32),M.rotation.x=-.9,this.body.add(M);for(let y=0;y<8;y++){const b=new Ot;b.position.y=y===0?0:.11;const C=new W(new $e(.065-y*.003,12,8),this.mBody);C.scale.y=1.6,C.castShadow=!0,b.add(C),M.add(b),this.tail.push(b),M=b}this.root.traverse(y=>{y.isMesh&&(y.userData.cat=!0)})}holding(t){for(const e in this.tools)this.tools[e].visible=e===t}wear({hat:t,neck:e}){if(this.hatSlot.clear(),this.neckSlot.clear(),t==="hat_chef"){const i=new W(new Ce(.26,.28,.16,24),Le(16777215));i.position.y=.02;const s=new Ot;[[0,.22,0,.24],[-.14,.18,0,.17],[.14,.18,0,.17],[0,.18,.12,.17],[0,.18,-.12,.17]].forEach(([a,o,r,c])=>{const l=kn(c,Le(16777215));l.position.set(a,o,r),s.add(l)}),this.hatSlot.add(i,s),this.hatSlot.rotation.z=.12}else if(t==="hat_hachimaki"){const i=new W(new un(.43,.04,8,32),Le(16777215));i.rotation.x=Math.PI/2,i.position.y=-.18,i.scale.set(1.08,1,1);const s=kn(.06,Le(14100029),1,1,.3);s.position.set(0,-.18,.45);const a=kn(.06,Le(16777215));a.position.set(.1,-.15,-.44),this.hatSlot.add(i,s,a),this.hatSlot.rotation.z=0}else if(t==="hat_straw"){const i=new W(new Ce(.6,.62,.03,32),Le(15255664)),s=new W(new Ce(.26,.3,.2,24),Le(15255664));s.position.y=.1;const a=new W(new Ce(.305,.305,.05,24),Le(14100029));a.position.y=.04,this.hatSlot.add(i,s,a),this.hatSlot.rotation.z=-.1}if(e==="neck_bell"){const i=new W(new un(.24,.03,8,32),Le(14100029));i.rotation.x=Math.PI/2;const s=kn(.06,Le(16106818,{metalness:.7,roughness:.25}));s.position.set(0,-.07,.25),this.neckSlot.add(i,s)}else if(e==="neck_scarf"){const i=new W(new un(.25,.07,10,32),Le(3832789));i.rotation.x=Math.PI/2;const s=new W(new te(.1,.25,.04),Le(3832789));s.position.set(.12,-.15,.25),s.rotation.z=.2,this.neckSlot.add(i,s)}}play(t,e=.35){this.action={name:t,t:0,dur:e},(t==="chop"||t==="press")&&this.squash(-.1)}squash(t){this.sqV+=t*22}setMode(t){this.mode=t}happy(){this.play("happy",1),this.happyEyes=1.2}update(t){this.t+=t;const e=this.t;this.sqV+=(-170*this.sq-11*this.sqV)*t,this.sq+=this.sqV*t;let i=this.sq;this.body.position.y=0,this.head.rotation.set(Math.sin(e*.7)*.04,Math.sin(e*.5)*.08,Math.sin(e*.9)*.05),this.tail.forEach((l,u)=>{l.rotation.z=Math.sin(e*1.8-u*.5)*.18,l.rotation.x=.12+Math.sin(e*1.1-u*.4)*.05}),this.ears.forEach((l,u)=>{l.rotation.x=Math.max(0,Math.sin(e*3+u*7)-.96)*6}),this.blinkT-=t;let s=1;this.blinkT<0&&(s=.1,this.blinkT<-.12&&(this.blinkT=2+Math.random()*3)),this.happyEyes>0&&(this.happyEyes-=t,s=.15),this.eyes.forEach(l=>l.scale.y=s);const[a,o]=this.arms;a.rotation.set(0,0,-.25+Math.sin(e*2.2)*.03),o.rotation.set(0,0,.25-Math.sin(e*2.2)*.03),this.mode==="stir"&&(o.rotation.x=-1+Math.sin(e*8)*.25,o.rotation.z=.35+Math.cos(e*8)*.25),this.mode==="talk"&&(this.head.rotation.x+=Math.sin(e*14)*.03),this.mode==="pet"&&(this.head.rotation.z=Math.sin(e*2)*.15+.15,this.eyes.forEach(l=>l.scale.y=.15));const r=this.action;if(r){r.t+=t;const l=Math.min(r.t/r.dur,1),u=Math.sin(l*Math.PI);switch(r.name){case"chop":o.rotation.x=-1.4+u*.9,this.body.position.y=-u*.02;break;case"press":a.rotation.x=o.rotation.x=-1.1,a.rotation.z=-.25-u*.5+.6,o.rotation.z=.25+u*.5-.6,this.body.position.y=-u*.03;break;case"wrap":a.rotation.x=o.rotation.x=-1-u*.4;break;case"pour":o.rotation.x=-1.2,o.rotation.y=-u*.6;break;case"wave":o.rotation.z=2.4+Math.sin(r.t*14)*.3;break;case"happy":{const h=Math.abs(Math.sin(l*Math.PI*2));this.body.position.y=h*.18,i+=(h-.35)*.22}a.rotation.z=-2.3,o.rotation.z=2.3;break;case"sad":this.head.rotation.x=.3*u,this.ears.forEach(h=>h.rotation.x=-.6*u);break}l>=1&&(this.action=null)}const c=1+Math.sin(e*2.2)*.012;this.body.scale.set(1-i*.5,c*(1+i),1-i*.5)}}const ea=[{id:"home",name:"小黑食堂",jp:"食堂{しょくどう}",icon:"🏠",intro:"由飯糰開始，練好基本功。"},{id:"izakaya",name:"居酒屋・夜間營業",jp:"居酒屋{いざかや}",icon:"🏮",intro:"六款新料理，練習加單同沽清應對。"},{id:"cafe",name:"喫茶店・午後小休",jp:"喫茶店{きっさてん}",icon:"☕",intro:"六款餐飲，記住熟客嘅冷熱同甜度喜好。"},{id:"sushi",name:"壽司店・師傅出手",jp:"お寿司{すし}屋{や}",icon:"🍣",intro:"六款壽司，練習握、卷、揀魚同醋飯。"},{id:"ramen",name:"拉麵店・食券機",jp:"ラーメン屋{や}",icon:"🍜",intro:"先喺食券機買券，再答麵硬度同湯濃淡。"},{id:"konbini",name:"便利店・收銀員",jp:"コンビニ",icon:"🏪",intro:"今次你係收銀員：掃碼、聽客人要求、收錢找續。"},{id:"eki",name:"車站・買票搭車",jp:"駅{えき}",icon:"🚉",intro:"你係遊客：喺券売機買票，問駅員月台，聽廣播上啱車。"},{id:"hotel",name:"酒店・入住退房",jp:"ホテル",icon:"🏨",intro:"你係遊客：check-in、聽房號、提出請求，最後退房。"},{id:"dark",name:"暗黑食堂・主廚，叮好喇！",jp:"裏{うら}メニュー",icon:"🌙",intro:"七款捷徑料理，擺盤、改名，再揭開後廚秘密。"}],Yy=[["edamame_raw","枝豆{えだまめ}","生枝豆","🫛","sphere",7974216],["abura","油{あぶら}","食用油","🫗","cyl",15121748],["katakuriko","片栗粉{かたくりこ}","粟粉／薯仔澱粉","🥣","sphere",16775920],["komugiko","小麦粉{こむぎこ}","麵粉","🥣","sphere",15656401],["kyabetsu","キャベツ","椰菜","🥬","sphere",9812329],["sosu","ソース","日式炒麵／大阪燒醬","🫙","cyl",6501155],["coffee_powder","インスタントコーヒー","即溶咖啡粉","☕","cyl",5781287],["koucha_leaf","紅茶{こうちゃ}","紅茶茶葉","🍂","sphere",7421995],["matcha_powder","抹茶{まっちゃ}","抹茶粉","🍵","sphere",7512395],["milk","牛乳{ぎゅうにゅう}","牛奶","🥛","cyl",16775400],["pan_bread","食{しょく}パン","厚切方包","🍞","box",15516554],["butter","バター","牛油","🧈","box",16177017],["sushi_su","寿司酢{すしず}","壽司醋","🫙","cyl",15851432],["kyuri","きゅうり","青瓜","🥒","cyl",5939786],["maguro","まぐろ","吞拿魚","🐟","box",13120060],["aburaage","油揚{あぶらあ}げ","豆腐卜","🟫","box",13208124],["wasabi","わさび","山葵","🟢","sphere",9420618],["menma","メンマ","筍乾","🎋","box",13215066],["tonkotsu_soup","豚骨{とんこつ}スープ","豬骨濃湯","🥣","cyl",15786696]],ef=[],Oe=n=>({type:"pick",need:n,decoys:["nori","miso"],jp:"材料{ざいりょう}を 選{えら}んで",yue:"揀啱材料",tip:"聽日文，再揀材料。"}),Kt=(n,t,e,i,s)=>({type:n,verb:t,jp:e,yue:i,tip:s,anim:n==="timing"?"wrap":"stir",turns:2,rounds:2,zone:n==="hold"?[.45,.7]:.24}),nf=[{id:"edamame",chapter:"izakaya",jp:"枝豆{えだまめ}",yue:"鹽水枝豆",emoji:"🫛",price:180,station:"pot",serves:"2 人",time:"10 分鐘",ingredients:[["edamame_raw","枝豆 200g"],["shio","鹽 1 茶匙"],["mizu","水 1 公升"]],howto:["枝豆洗淨，用少少鹽搓一搓。","水煮滾，落枝豆煮約 4–5 分鐘，至豆仁熟透。","瀝乾，趁熱拌少少鹽；只食豆仁，豆莢唔食。"],steps:[Oe(["edamame_raw","shio","mizu"]),Kt("hold","yuderu","枝豆{えだまめ}を ゆでて","烚熟枝豆","長按加熱，綠色位放手。")]},{id:"yakitori",chapter:"izakaya",jp:"焼{や}き鳥{とり}",yue:"焼鳥",emoji:"🍢",price:320,station:"pan",serves:"4 串",time:"20 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["negi","大蔥 1 條"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"]],howto:["雞肉切小件，大蔥切段，交替串上竹籤。","豉油同味醂混合成醬汁。","用平底鑊煎串燒，不時反面，最後掃醬；雞肉中心須達 75°C 並維持至少 1 分鐘。"],steps:[Oe(["toriniku","negi","shoyu"]),Kt("timing","noseru","串{くし}に のせて","將雞肉同蔥串好","撳準綠色位。"),Kt("hold","yaku","鶏肉{とりにく}を 焼{や}いて","燒熟雞肉","控制火候，唔好燒焦。")]},{id:"karaage",chapter:"izakaya",jp:"唐揚{からあ}げ",yue:"唐揚炸雞",emoji:"🍗",price:360,station:"pan",serves:"2 人",time:"25 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["shoyu","豉油 1 湯匙"],["ninniku","蒜蓉 1 茶匙"],["katakuriko","澱粉 3 湯匙"],["abura","炸油 適量"]],howto:["雞肉切件，用豉油同蒜蓉醃 10 分鐘。","逐件薄薄裹上澱粉。","以約 170°C 油炸至金黃；雞肉中心須達 75°C 並維持至少 1 分鐘，瀝油上碟。"],steps:[Oe(["toriniku","katakuriko","abura"]),Kt("stir","mazeru","衣{ころも}を つけて","拌上薄薄粉衣","轉圈拌勻。"),Kt("hold","ageru","鶏肉{とりにく}を 揚{あ}げて","炸熟雞肉","控制油溫。")]},{id:"agedashi",chapter:"izakaya",jp:"揚{あ}げ出{だ}し豆腐{どうふ}",yue:"揚出豆腐",emoji:"⬜",price:280,station:"pan",serves:"2 人",time:"20 分鐘",ingredients:[["tofu","硬豆腐 1 盒"],["katakuriko","澱粉 2 湯匙"],["abura","油 適量"],["dashi","高湯 100ml"],["shoyu","豉油 1 茶匙"],["negi","蔥花 少許"]],howto:["豆腐瀝乾抹乾，切大件，薄薄裹粉。","熱油中小火煎至各面金黃。","高湯加豉油煮熱，沿碗邊淋入，再放蔥花。"],steps:[Oe(["tofu","katakuriko","dashi"]),Kt("hold","ageru","豆腐{とうふ}を 揚{あ}げて","煎至金黃","綠色位放手。"),Kt("timing","noseru","ねぎを のせて","灑上蔥花","最後先放配料。")]},{id:"okonomiyaki",chapter:"izakaya",jp:"お好{この}み焼{や}き",yue:"大阪燒",emoji:"🥞",price:380,station:"pan",serves:"1 塊",time:"20 分鐘",ingredients:[["kyabetsu","椰菜絲 150g"],["komugiko","麵粉 50g"],["tamago","雞蛋 1 隻"],["mizu","水 50ml"],["sosu","大阪燒醬 1 湯匙"],["abura","油 1 茶匙"]],howto:["麵粉、蛋同水拌勻，再拌入椰菜絲。","平底鑊落油，倒入麵糊成厚圓餅，中小火煎約 5 分鐘。","小心反面，冚蓋再煎至中心熟透，上碟搽醬。"],steps:[Oe(["kyabetsu","komugiko","tamago"]),Kt("stir","mazeru","生地{きじ}を 混{ま}ぜて","拌勻麵糊","轉圈攪勻。"),Kt("timing","yaku","裏返{うらがえ}して","反面煎熟","撳準時機反面！")]},{id:"yakisoba",chapter:"izakaya",jp:"焼{や}きそば",yue:"日式炒麵",emoji:"🍝",price:340,station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["men","熟炒麵 1 份"],["kyabetsu","椰菜絲 100g"],["tamanegi","洋蔥 1/4 個"],["sosu","炒麵醬 1–2 湯匙"],["abura","油 1 茶匙"]],howto:["洋蔥切絲，椰菜切細。","鑊落油炒軟蔬菜，加熟麵同一湯匙水炒散。","加醬汁炒勻至熱透。"],steps:[Oe(["men","kyabetsu","sosu"]),Kt("stir","mazeru","麺{めん}を 炒{いた}めて","炒散麵條","轉圈翻炒。"),Kt("timing","noseru","お皿{さら}に のせて","上碟","撳準出餐！")]},{id:"instant_coffee",chapter:"cafe",jp:"インスタントコーヒー",yue:"精品即溶咖啡",emoji:"☕",price:260,station:"board",serves:"1 杯",time:"3 分鐘",ingredients:[["coffee_powder","精品即溶咖啡粉 2g"],["mizu","熱水 150ml"]],howto:["按咖啡粉包裝建議份量放入杯。","加入熱水攪溶，按喜好調整濃淡。","冷飲版先用少量熱水溶粉，再補冷水同冰；加水時計埋融冰份量。"],steps:[Oe(["coffee_powder","mizu"]),Kt("stir","tokasu","コーヒーを 溶{と}かして","攪溶咖啡粉","轉圈攪至均勻。")]},{id:"black_tea",chapter:"cafe",jp:"紅茶{こうちゃ}",yue:"紅茶",emoji:"🫖",price:220,station:"pot",serves:"1 杯",time:"5 分鐘",ingredients:[["koucha_leaf","紅茶葉 2g"],["mizu","熱水 200ml"]],howto:["暖杯後放入茶葉。","沖入熱水，按茶葉包裝建議浸泡約 3 分鐘，再隔走茶葉。","冷飲版放涼再加冰，調整水量避免過淡。"],steps:[Oe(["koucha_leaf","mizu"]),Kt("hold","ireru","紅茶{こうちゃ}を 入{い}れて","沖泡紅茶","掌握浸泡時間。")]},{id:"matcha_latte",chapter:"cafe",jp:"抹茶{まっちゃ}ラテ",yue:"抹茶拿鐵",emoji:"🍵",price:320,station:"board",serves:"1 杯",time:"5 分鐘",ingredients:[["matcha_powder","抹茶粉 2g"],["mizu","熱水 30ml"],["milk","牛奶 150ml"],["satou","糖 0–1 茶匙，按客人要求"]],howto:["抹茶粉過篩，用熱水攪成冇粉粒嘅茶液。","按冷熱要求加入暖奶，或凍奶同冰。","按客人要求加糖，攪勻。"],steps:[Oe(["matcha_powder","milk","mizu"]),Kt("stir","mazeru","抹茶{まっちゃ}を 混{ま}ぜて","攪散抹茶粉","轉圈攪滑。"),Kt("timing","ireru","牛乳{ぎゅうにゅう}を 入{い}れて","倒入牛奶","慢慢倒奶。")]},{id:"pudding",chapter:"cafe",jp:"プリン",yue:"雞蛋布甸",emoji:"🍮",price:280,station:"pot",serves:"2 杯",time:"25 分鐘＋冷藏",ingredients:[["tamago","雞蛋 1 隻"],["milk","牛奶 150ml"],["satou","糖 20g"]],howto:["蛋同糖輕輕拌勻，加入微暖牛奶，過篩入耐熱杯。","用蒸鍋小火蒸約 12–15 分鐘，至中心凝固；蛋液須充分煮熟。","放涼後冷藏至少 2 小時。"],steps:[Oe(["tamago","milk","satou"]),Kt("stir","mazeru","卵液{らんえき}を 混{ま}ぜて","輕輕攪勻蛋液","唔好打入太多氣泡。"),Kt("hold","musu","プリンを 蒸{む}して","慢火蒸布甸","小火先滑！")]},{id:"thick_toast",chapter:"cafe",jp:"厚切{あつぎ}りトースト",yue:"牛油厚多士",emoji:"🍞",price:240,station:"pan",serves:"1 份",time:"8 分鐘",ingredients:[["pan_bread","厚切方包 1 片"],["butter","牛油 10g"]],howto:["方包表面劃淺格，唔好切穿。","搽牛油，放多士爐烤至表面金黃；亦可平底鑊小火煎兩面。","趁熱上碟。"],steps:[Oe(["pan_bread","butter"]),Kt("timing","kiru","パンに 切{き}り込{こ}みを 入{い}れて","喺方包劃淺格","輕力劃，唔好切穿。"),Kt("hold","yaku","パンを 焼{や}いて","烘至金黃","控制火候。")]},{id:"pancakes",chapter:"cafe",jp:"ホットケーキ",yue:"熱香餅",emoji:"🥞",price:300,station:"pan",serves:"2 塊",time:"15 分鐘",ingredients:[["komugiko","自發粉 100g（此處取代普通麵粉）"],["tamago","雞蛋 1 隻"],["milk","牛奶 80ml"],["satou","糖 15g"],["butter","牛油 5g"]],howto:["蛋、奶同糖拌勻，加自發粉輕拌至冇乾粉。","平底鑊薄搽牛油，小火倒入麵糊。","表面冒泡、邊緣凝固時反面，再煎至中心熟透。"],steps:[Oe(["komugiko","tamago","milk"]),Kt("stir","mazeru","生地{きじ}を 混{ま}ぜて","輕拌麵糊","唔好攪過頭。"),Kt("timing","yaku","裏返{うらがえ}して","冒泡就反面","等啱時機！")]},{id:"kappamaki",chapter:"sushi",jp:"かっぱ巻{ま}き",yue:"青瓜卷",emoji:"🥒",price:240,station:"board",serves:"6 件",time:"20 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["nori","紫菜 1 張"],["kyuri","青瓜 1/2 條"]],howto:["熱飯拌入壽司醋，用扇扇涼至體溫。","青瓜切成長條；紫菜粗面向上，鋪薄薄一層飯，近身處放青瓜。","用竹簾捲實，濕刀切成 6 件。"],steps:[Oe(["gohan","sushi_su","kyuri"]),Kt("stir","mazeru","酢飯{すめし}を 混{ま}ぜて","醋拌飯","轉圈拌勻醋飯。"),Kt("timing","maku","のりで 巻{ま}いて","捲起青瓜卷","撳準時機捲實！")]},{id:"tekkamaki",chapter:"sushi",jp:"鉄火巻{てっかま}き",yue:"吞拿魚卷",emoji:"🍣",price:360,station:"board",serves:"6 件",time:"25 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["nori","紫菜 1 張"],["maguro","刺身級吞拿魚 80g"],["wasabi","山葵 少許"]],howto:["醋飯同上，扇涼。","吞拿魚用刺身級，切成長條；飯上抹少少山葵，放魚條。","捲實，濕刀切件；魚肉要新鮮，即日食用。"],steps:[Oe(["gohan","maguro","wasabi"]),Kt("timing","kiru","まぐろを 切{き}って","切吞拿魚條","輕力一刀切好。"),Kt("timing","maku","のりで 巻{ま}いて","捲起魚卷","撳準時機捲實！")]},{id:"tamago_nigiri",chapter:"sushi",jp:"玉子{たまご}の 握{にぎ}り",yue:"玉子握壽司",emoji:"🍣",price:200,station:"board",serves:"4 件",time:"25 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["tamago","雞蛋 3 隻"],["satou","砂糖 1 湯匙"],["shoyu","豉油 1 茶匙"]],howto:["蛋、糖同豉油拌勻，用方形鑊煎成厚蛋卷，放涼切條。","醋飯輕輕握成長方形小團，唔好捏太實。","蛋條放飯上，可用細條紫菜束緊。"],steps:[Oe(["tamago","satou","gohan"]),Kt("stir","mazeru","卵{たまご}を 混{ま}ぜて","拌勻蛋液","轉圈拌勻。"),Kt("timing","nigiru","ご飯{はん}を 握{にぎ}って","握成飯團","輕輕握，唔好太實。")]},{id:"salmon_nigiri",chapter:"sushi",jp:"サーモンの 握{にぎ}り",yue:"三文魚握壽司",emoji:"🍣",price:320,station:"board",serves:"4 件",time:"20 分鐘",ingredients:[["gohan","熟白飯 200g"],["sushi_su","壽司醋 2 湯匙"],["sake_fish","刺身級三文魚 100g"],["wasabi","山葵 少許"]],howto:["醋飯扇涼，手沾醋水防黐手。","三文魚斜刀切成薄片。","握一小團飯，抹少少山葵，蓋上魚片輕壓成形。"],steps:[Oe(["gohan","sake_fish","wasabi"]),Kt("timing","kiru","鮭{さけ}を 切{き}って","斜刀切魚片","一刀拉切，唔好壓爛。"),Kt("timing","nigiru","ご飯{はん}を 握{にぎ}って","握成飯團","輕輕握。")]},{id:"inari",chapter:"sushi",jp:"いなり寿司{ずし}",yue:"稻荷壽司",emoji:"🟫",price:220,station:"pot",serves:"6 個",time:"30 分鐘",ingredients:[["aburaage","豆腐卜 3 塊"],["dashi","高湯 150ml"],["shoyu","豉油 1 湯匙"],["satou","砂糖 1 湯匙"],["gohan","熟白飯 200g"]],howto:["豆腐卜淋熱水去油，切半成袋。","高湯、豉油同糖煮滾，豆腐卜小火煮約 10 分鐘至入味。","壓乾汁，輕輕塞入醋飯。"],steps:[Oe(["aburaage","dashi","shoyu"]),Kt("hold","niru","油揚{あぶらあ}げを 煮{に}て","煮入味","小火煮，綠色位放手。"),Kt("timing","tsumeru","ご飯{はん}を 詰{つ}めて","塞入醋飯","輕手塞滿。")]},{id:"chirashi",chapter:"sushi",jp:"ちらし寿司{ずし}",yue:"散壽司",emoji:"🍱",price:420,station:"board",serves:"1 碗",time:"25 分鐘",ingredients:[["gohan","熟白飯 250g"],["sushi_su","壽司醋 2 湯匙"],["sake_fish","刺身級三文魚 60g"],["tamago","蛋絲 1 隻份"],["nori","紫菜絲 少許"]],howto:["醋飯扇涼，盛入碗。","三文魚切片；蛋煎薄片切絲。","將魚片、蛋絲同紫菜絲散放飯面。"],steps:[Oe(["gohan","sake_fish","tamago"]),Kt("stir","mazeru","酢飯{すめし}を 混{ま}ぜて","拌勻醋飯","轉圈拌勻。"),Kt("timing","noseru","具{ぐ}を のせて","擺上配料","撳準，漂亮擺盤。")]},{id:"shoyu_ramen",chapter:"ramen",jp:"醤油{しょうゆ}ラーメン",yue:"豉油拉麵",emoji:"🍜",price:800,station:"pot",serves:"1 碗",time:"30 分鐘",ingredients:[["men","拉麵 1 球"],["dashi","雞骨高湯 400ml"],["shoyu","豉油 2 湯匙"],["chashu","叉燒 2 片"],["negi","蔥花 少許"]],howto:["高湯煮滾，加豉油調成湯底。","麵放滾水煮約 2 分鐘，瀝乾。","麵放碗中淋湯，擺上叉燒同蔥花。"],steps:[Oe(["men","shoyu","chashu"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","控制時間，綠色位放手。"),Kt("timing","noseru","チャーシューを のせて","擺上叉燒","撳準綠色位。")]},{id:"shio_ramen",chapter:"ramen",jp:"塩{しお}ラーメン",yue:"鹽味拉麵",emoji:"🍜",price:800,station:"pot",serves:"1 碗",time:"30 分鐘",ingredients:[["men","拉麵 1 球"],["dashi","清湯 400ml"],["shio","鹽 1 茶匙"],["menma","筍乾 數條"],["negi","蔥花 少許"]],howto:["清湯煮滾，用鹽調味，味道清淡。","麵煮好瀝乾放碗。","淋湯，加筍乾同蔥花。"],steps:[Oe(["men","shio","menma"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","控制時間，綠色位放手。"),Kt("stir","mazeru","スープを 混{ま}ぜて","攪勻湯底","轉圈拌勻。")]},{id:"miso_ramen",chapter:"ramen",jp:"味噌{みそ}ラーメン",yue:"味噌拉麵",emoji:"🍜",price:900,station:"pot",serves:"1 碗",time:"30 分鐘",ingredients:[["men","拉麵 1 球"],["dashi","高湯 400ml"],["miso","味噌 2 湯匙"],["moyashi","芽菜 一把"],["negi","蔥花 少許"]],howto:["高湯煮滾後熄火，溶入味噌。","麵煮好放碗，淋湯。","加炒香芽菜同蔥花。"],steps:[Oe(["men","miso","moyashi"]),Kt("stir","tokasu","味噌{みそ}を 溶{と}かして","溶開味噌","轉圈拌勻。"),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","控制時間，綠色位放手。")]},{id:"tonkotsu_ramen",chapter:"ramen",jp:"豚骨{とんこつ}ラーメン",yue:"豬骨拉麵",emoji:"🍜",price:950,station:"pot",serves:"1 碗",time:"40 分鐘",ingredients:[["men","細麵 1 球"],["tonkotsu_soup","豬骨濃湯 400ml"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥花 少許"]],howto:["濃白豬骨湯煮熱。","細麵煮約 1 分鐘，偏硬。","倒湯放麵，擺叉燒、溏心蛋同蔥花。"],steps:[Oe(["men","tonkotsu_soup","tamago"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮麵","細麵好快熟，控制時間。"),Kt("timing","noseru","卵{たまご}を のせて","擺上溏心蛋","撳準綠色位。")]},{id:"tsukemen",chapter:"ramen",jp:"つけ麺{めん}",yue:"沾麵",emoji:"🍝",price:1e3,station:"pot",serves:"1 人",time:"35 分鐘",ingredients:[["men","粗麵 1 球"],["shoyu","豉油 2 湯匙"],["dashi","濃縮魚介湯 150ml"],["chashu","叉燒 2 片"],["negi","蔥花 少許"]],howto:["粗麵煮熟後用冰水過冷，令麵更彈牙。","濃湯另碗盛，加叉燒同蔥花。","麵同沾汁分開上，用麵沾湯食。"],steps:[Oe(["men","dashi","chashu"]),Kt("hold","yuderu","麺{めん}を ゆでて","煮粗麵","控制時間，綠色位放手。"),Kt("timing","noseru","チャーシューを のせて","擺料落沾汁","撳準綠色位。")]},{id:"chahan",chapter:"ramen",jp:"チャーハン",yue:"炒飯",emoji:"🍚",price:700,station:"pot",serves:"1 碗",time:"20 分鐘",ingredients:[["gohan","熟白飯 250g"],["tamago","雞蛋 1 隻"],["negi","蔥花 2 湯匙"],["shoyu","豉油 1 茶匙"],["abura","油 1 湯匙"]],howto:["鑊燒熱落油，倒入蛋液快炒。","放飯炒散，加蔥花。","鑊邊淋豉油，炒勻即成。"],steps:[Oe(["gohan","tamago","negi"]),Kt("stir","itameru","ご飯{はん}を 炒{いた}めて","炒飯","轉圈拌勻。"),Kt("hold","yaku","強火{つよび}で 焼{や}いて","炒出鑊氣","控制火候，唔好燒焦。")]}].map(n=>({...n,dish:n.id,unlock:{}})),Ky=[["yaku","焼{や}く","燒、烘","verb"],["ageru","揚{あ}げる","炸","verb"],["ireru","入{い}れる","倒入、沖泡","verb"],["musu","蒸{む}す","蒸","verb"],["sabinuki","さび抜{ぬ}き","唔落山葵","phrase"],["wasabi_ooi","わさび 多{おお}め","多啲山葵","phrase"],["wasabi_sukunai","わさび 少{すく}なめ","少啲山葵","phrase"],["shoyu_tsukeru","醤油{しょうゆ}を つける","沾豉油","phrase"],["men_katame","麺{めん}は かため","麵要硬啲","phrase"],["men_futsuu","麺{めん}は ふつう","麵正常","phrase"],["men_yawaraka","麺{めん}は やわらかめ","麵要淋啲","phrase"],["aji_koime","味{あじ}は 濃{こ}いめ","味道濃啲","phrase"],["aji_futsuu","味{あじ}は ふつう","味道正常","phrase"],["aji_usume","味{あじ}は 薄{うす}め","味道淡啲","phrase"],["itameru","炒{いた}める","炒","verb"],["maku","巻{ま}く","捲","verb"],["tsumeru","詰{つ}める","塞入","verb"],["tsuika","追加{ついか}","加單","phrase"],["urikire","売{う}り切{き}れ","沽清","phrase"],["herasu","減{へ}らす","減少","phrase"],["kaeru","変{か}える","改做、換","phrase"],["kyanseru","キャンセル","取消訂單","phrase"],["yameru","やめる","唔要、算","phrase"],["hot","温{あたた}かい","熱飲","phrase"],["iced","冷{つめ}たい","凍飲","phrase"],["less_sugar","甘{あま}さ控{ひか}えめ","少甜","phrase"],["no_sugar","砂糖{さとう}なし","無糖","phrase"]],dc=[{id:"sabinuki",jp:"さび抜{ぬ}きで お願{ねが}いします。",yue:"唔該，唔好落山葵。",label:"唔落山葵",detail:"飯同魚中間唔搽",icon:"🚫"},{id:"wasabi_ooi",jp:"わさびを 多{おお}めに お願{ねが}いします。",yue:"唔該，山葵多啲。",label:"多落山葵",detail:"搽厚少少",icon:"🟢"},{id:"wasabi_sukunai",jp:"わさびは 少{すく}なめで お願{ねが}いします。",yue:"山葵少啲，唔該。",label:"少落山葵",detail:"只搽薄薄一層",icon:"🥄"}],Jy={noodle:[{id:"men_katame",jp:"麺{めん}は かために お願{ねが}いします。",yue:"麵硬啲，唔該。",label:"煮硬啲",detail:"少煮 30 秒",icon:"💪"},{id:"men_futsuu",jp:"麺{めん}は ふつうで お願{ねが}いします。",yue:"麵正常就得，唔該。",label:"煮正常",detail:"照食譜時間",icon:"👌"},{id:"men_yawaraka",jp:"麺{めん}は やわらかめで お願{ねが}いします。",yue:"麵淋啲，唔該。",label:"煮淋啲",detail:"多煮 30 秒",icon:"🫧"}],soup:[{id:"aji_koime",jp:"味{あじ}は 濃{こ}いめで お願{ねが}いします。",yue:"味道濃啲，唔該。",label:"湯底濃啲",detail:"多落醬汁",icon:"🧂"},{id:"aji_futsuu",jp:"味{あじ}は ふつうで お願{ねが}いします。",yue:"味道正常就得，唔該。",label:"湯底正常",detail:"照食譜調味",icon:"👌"},{id:"aji_usume",jp:"味{あじ}は 薄{うす}めで お願{ねが}いします。",yue:"味道淡啲，唔該。",label:"湯底淡啲",detail:"少落醬汁",icon:"💧"}]},Bh={jp:"お醤油{しょうゆ}は どう つけますか？",yue:"豉油應該點沾？"},Zy=["沾魚面，輕輕一點","沾飯面","成件浸落豉油碟"],fc=[{id:"reader",name:"讀書常客",request:"hot",jp:"いつもの、温{あたた}かいので お願{ねが}いします。",yue:"同平時一樣，要熱嘅。"},{id:"walker",name:"散步常客",request:"iced",jp:"冷{つめ}たいので お願{ねが}いします。",yue:"唔該要凍飲。"},{id:"artist",name:"畫畫常客",request:"less_sugar",jp:"甘{あま}さ控{ひか}えめで お願{ねが}いします。",yue:"唔該少甜。"}],vl=[{id:"onigiri",jp:"おにぎり",yue:"飯糰",emoji:"🍙",price:150,heat:!1},{id:"bento",jp:"お弁当{べんとう}",yue:"便當",emoji:"🍱",price:480,heat:!0,cutlery:!0},{id:"sandwich",jp:"サンドイッチ",yue:"三文治",emoji:"🥪",price:280,heat:!1},{id:"ocha",jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",price:130,heat:!1},{id:"coffee",jp:"コーヒー",yue:"咖啡",emoji:"☕",price:120,heat:!1},{id:"chips",jp:"ポテトチップス",yue:"薯片",emoji:"🥔",price:170,heat:!1},{id:"ice",jp:"アイス",yue:"雪糕",emoji:"🍦",price:160,heat:!1},{id:"nikuman",jp:"肉{にく}まん",yue:"肉包",emoji:"🥟",price:190,heat:!1},{id:"curry_pack",jp:"レトルトカレー",yue:"即食咖哩",emoji:"🍛",price:330,heat:!0,cutlery:!0},{id:"pudding",jp:"プリン",yue:"布甸",emoji:"🍮",price:140,heat:!1}].map(n=>({...n,art:`goods_${n.id}`})),na={bag:{ask:{jp:"袋{ふくろ}は いりますか？",yue:"要唔要膠袋？"},title:"客人要唔要袋？",yes:{id:"k_fukuro",jp:"袋{ふくろ}を お願{ねが}いします。",yue:"唔該，要袋。",label:"加袋"},no:{id:"k_fukuro_no",jp:"袋{ふくろ}は いりません。",yue:"唔使袋。",label:"唔使袋"}},heat:{ask:{jp:"温{あたた}めますか？",yue:"要唔要叮熱？"},title:"客人要唔要叮熱？",yes:{id:"k_atatame",jp:"温{あたた}めて ください。",yue:"請幫我叮熱。",label:"叮熱"},no:{id:"k_sonomama",jp:"そのままで お願{ねが}いします。",yue:"唔使，照原樣。",label:"唔叮"}},cutlery:{ask:{jp:"お箸{はし}は おつけしますか？",yue:"要唔要筷子？"},title:"客人要唔要筷子？",yes:{id:"k_hashi",jp:"お箸{はし}を お願{ねが}いします。",yue:"唔該，要筷子。",label:"附筷子"},no:{id:"k_hashi_no",jp:"お箸{はし}は いりません。",yue:"唔使筷子。",label:"唔附筷子"}},point:{ask:{jp:"ポイントカードは お持{も}ちですか？",yue:"有冇積分卡？"},title:"客人有冇積分卡？",yes:{id:"k_point",jp:"はい、 あります。 お願{ねが}いします。",yue:"有，請幫我儲分。",label:"儲積分"},no:{id:"k_point_no",jp:"ポイントカードは ありません。",yue:"冇積分卡。",label:"唔儲分"}}},Fi=[{id:"k_genkin",jp:"現金{げんきん}で お願{ねが}いします。",yue:"現金付款。",label:"現金",icon:"💴"},{id:"k_card",jp:"カードで お願{ねが}いします。",yue:"用信用卡。",label:"信用卡",icon:"💳"},{id:"k_ic",jp:"交通系{こうつうけい}アイシーで お願{ねが}いします。",yue:"用交通卡（Suica 之類）。",label:"交通卡",icon:"🚃"}],cr={jp:"お支払{しはら}いは いかがなさいますか？",yue:"點樣付款？"},zh={jp:"いらっしゃいませ。",yue:"歡迎光臨。"},lr={jp:"ありがとうございました。",yue:"多謝光臨。"},iu=[{key:"kb_arigatou",lv:0,jp:"ありがとう！",yue:"多謝！"},{key:"kb_mata",lv:0,jp:"また 来{き}ます！",yue:"我會再嚟！"},{key:"kb_arigatou2",lv:1,jp:"ありがとうございました。 また 来{き}ますね",yue:"多謝，我會再嚟"},{key:"kb_benri",lv:1,jp:"近{ちか}くに あって、 便利{べんり}です！",yue:"喺附近好方便！"},{key:"kb_osewa",lv:2,jp:"夜遅{よるおそ}くまで 開{あ}いていて 助{たす}かります",yue:"開到好夜，幫到手"},{key:"kb_mata2",lv:2,jp:"また 近{ちか}くを 通{とお}ったら 寄{よ}らせて もらいます",yue:"下次經過再嚟"},{key:"kb_osewa3",lv:3,jp:"いつも 遅{おそ}くまで お疲{つか}れ様{さま}です。 助{たす}かります",yue:"成日做到咁夜，辛苦晒，幫到手"},{key:"kb_mata3",lv:3,jp:"いつも 便利{べんり}に 使{つか}わせて もらってます。 また 来{き}ますね",yue:"成日用得好方便，下次再嚟"}],Qy=n=>({jp:`${n}の お返{かえ}しです。`,yue:"找返錢畀你"}),tx=[{key:"kbw_irasshai",jp:"いらっしゃいませ！",yue:"歡迎光臨（店員先講）"},{key:"kbw_itadaki",jp:"いただきます！",yue:"開動（食飯前講）"},{key:"kbw_gochi",jp:"ごちそうさまでした",yue:"多謝款待（食完飯講）"}],jh={jp:"おつりを お返{かえ}しします。",yue:"搵返錢畀你。"},sf=[...Object.values(na).flatMap(n=>[n.yes,n.no].map(t=>[t.id,t.jp,t.yue,"phrase"])),...Fi.map(n=>[n.id,n.jp,n.yue,"phrase"]),["k_goukei","合計{ごうけい}","合計、總數","phrase"],["k_otsuri","おつり","找續（搵返嘅錢）","phrase"]],ex=sf.map(n=>n[0]),pc=["","一","二","三","四","五","六","七","八","九"],nx=["","せん","にせん","さんぜん","よんせん","ごせん","ろくせん","ななせん","はっせん","きゅうせん"],ix=["","ひゃく","にひゃく","さんびゃく","よんひゃく","ごひゃく","ろっぴゃく","ななひゃく","はっぴゃく","きゅうひゃく"],sx=["","じゅう","にじゅう","さんじゅう","よんじゅう","ごじゅう","ろくじゅう","ななじゅう","はちじゅう","きゅうじゅう"];function Bi(n){const t=Math.floor(n/1e3),e=Math.floor(n%1e3/100),i=Math.floor(n%100/10);return`${(t?(t>1?pc[t]:"")+"千":"")+(e?(e>1?pc[e]:"")+"百":"")+(i?(i>1?pc[i]:"")+"十":"")+"円"}{${nx[t]}${ix[e]}${sx[i]}えん}`}const ja=[{id:"shinjuku",jp:"新宿{しんじゅく}",yue:"新宿",fare:210,platform:3},{id:"shibuya",jp:"渋谷{しぶや}",yue:"澀谷",fare:170,platform:1},{id:"tokyo",jp:"東京{とうきょう}",yue:"東京",fare:200,platform:2},{id:"ueno",jp:"上野{うえの}",yue:"上野",fare:180,platform:4},{id:"ikebukuro",jp:"池袋{いけぶくろ}",yue:"池袋",fare:220,platform:3},{id:"shinagawa",jp:"品川{しながわ}",yue:"品川",fare:190,platform:1}],ax=["","一枚{いちまい}","二枚{にまい}","三枚{さんまい}"],ia=["","一番線{いちばんせん}","二番線{にばんせん}","三番線{さんばんせん}","四番線{よんばんせん}"],Hs=[{id:"kaku",jp:"各駅停車{かくえきていしゃ}",yue:"每站停",short:"各停",color:"#2f9e44",ok:!0},{id:"kaisoku",jp:"快速{かいそく}",yue:"快速",short:"快速",color:"#e0763a",ok:!0},{id:"tokkyu",jp:"特急{とっきゅう}",yue:"特急",short:"特急",color:"#c0392b",ok:!1}],ox={jp:"行{い}き先{さき}を えらんで ください。",yue:"請揀目的地。"},rx={jp:"大人{おとな}は 何枚{なんまい}ですか？",yue:"成人買幾張？"},cx=n=>({jp:`合計{ごうけい}は ${Bi(n)}です。 お金{かね}を 入{い}れて ください。`,yue:`總共 ${n} 円。請投錢。`}),Hh=500,lx={jp:"特急券{とっきゅうけん}は 必要{ひつよう}ですか？",yue:"要唔要特急券？"},Fo={plain:{jp:"乗車券{じょうしゃけん}だけ",yue:"淨係普通車票"},ltd:{jp:"特急券{とっきゅうけん}も お願{ねが}いします",yue:"連特急券，唔該"}},Vh={jp:"きっぷを お取{と}りください。",yue:"請取車票。"},ur=[{lv:0,ok:{jp:"{d}は 何番線{なんばんせん}ですか？",yue:"{dy}係幾號月台？"},bad:[{jp:"いただきます。",yue:"開動喇。",why:"場合錯：呢句係食飯先講"},{jp:"二人{ふたり}です。",yue:"兩位。",why:"同問月台無關"}]},{lv:1,ok:{jp:"{d}行{ゆ}きは 何番線{なんばんせん}ですか？",yue:"去{dy}係幾號月台？"},bad:[{jp:"{d}行{ゆ}きの 切符{きっぷ}を ください。",yue:"請畀我去{dy}嘅車票。",why:"你已經買咗票，而家問月台"},{jp:"トイレは どこですか？",yue:"廁所喺邊？",why:"同問月台無關"}]},{lv:2,ok:{jp:"{d}まで 行{い}きたいんですが、 どの 電車{でんしゃ}に 乗{の}れば いいですか？",yue:"我想去{dy}，應該搭邊班車？"},bad:[{jp:"{d}、 どこ？ 早{はや}く 教{おし}えて。",yue:"{dy}喺邊？快啲講。",why:"語感錯：對駅員太粗魯"},{jp:"乗{の}り越{こ}し 精算{せいさん}は どこで できますか？",yue:"邊度補票？",why:"你未坐過站"}]},{lv:3,ok:{jp:"{d}方面{ほうめん}へ 行{い}きたいのですが、 どちらの ホームから 乗{の}れば よろしいでしょうか。",yue:"我想去{dy}方向，應該喺邊個月台上車？"},bad:[{jp:"{d}方面{ほうめん}の ホーム、 教{おし}えて ください。",yue:"請話我知{dy}方向月台。",why:"語感錯：太直接，欠敬語"},{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}していただけますか。",yue:"可唔可以發延誤證明？",why:"情境錯：車冇延誤"}]}],yl=[{lv:0,jp:"{n}です。",yue:"{p}月台。"},{lv:1,jp:"{n}です。 あちらの 階段{かいだん}を どうぞ。",yue:"{p}月台。請行嗰邊樓梯。"},{lv:2,jp:"{n}の 電車{でんしゃ}に お乗{の}りください。",yue:"請搭{p}月台嘅車。"},{lv:3,jp:"{d}方面{ほうめん}でしたら、 {n}から ご乗車{じょうしゃ}いただけます。",yue:"去{dy}方向嘅話，可以喺{p}月台上車。"}],ux={yue:"駅員講咗邊個月台？"},hx=(n,t,e,i)=>{const s=ia[t];return n<=1?{jp:`まもなく ${s}に ${i.jp}行{ゆ}きが 参{まい}ります。`,yue:`${i.yue}方向列車即將到達 ${t} 號月台。`}:n===2?{jp:`まもなく ${s}に ${e.jp} ${i.jp}行{ゆ}きが 参{まい}ります。`,yue:`${e.yue}（${i.yue}方向）即將到達 ${t} 號月台。`}:{jp:`まもなく ${s}に ${e.jp} ${i.jp}行{ゆ}きが 参{まい}ります。 危険{きけん}ですので、 黄色{きいろ}い 線{せん}の 内側{うちがわ}まで お下{さ}がりください。`,yue:`${e.yue}（${i.yue}方向）即將到達 ${t} 號月台。請退到黃線後面。`}},Bo={ride:{jp:"乗{の}る",yue:"上車"},wait:{jp:"待{ま}つ",yue:"等下一班"}},dx={jp:"人身事故{じんしんじこ}の 影響{えいきょう}で、 ただいま 運転{うんてん}を 見合{みあ}わせております。 ご迷惑{めいわく}を おかけいたします。",yue:"因人身事故，暫停行駛。造成不便，敬請原諒。"},xl=[{id:"refund",task:"你決定唔搭喇，想退款",ok:{jp:"払{はら}い戻{もど}しは 可能{かのう}でしょうか。 手数料{てすうりょう}は かかりますか。",yue:"請問可否退款？有冇手續費？"},bad:[{jp:"払{はら}い戻{もど}して ください。",yue:"退錢畀我。",why:"語感錯：太直接"},{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}していただけますか。",yue:"可唔可以發延誤證明？",why:"你想退款，唔係要證明"}],reply:{jp:"払{はら}い戻{もど}しは 可能{かのう}でございます。 手数料{てすうりょう}が かかりますが、 よろしいでしょうか。",yue:"可以退款，不過要手續費，可以嗎？"}},{id:"proof",task:"你上班會遲到，想要延誤證明",ok:{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}していただけますか。",yue:"可唔可以發延誤證明？"},bad:[{jp:"遅延証明書{ちえんしょうめいしょ}、 くれ。",yue:"延誤證明，畀我。",why:"語感錯：太粗魯"},{jp:"落{お}とし物{もの}を 探{さが}しているのですが。",yue:"我想搵遺失物。",why:"同延誤證明無關"}],reply:{jp:"かしこまりました。 少々{しょうしょう} お待{ま}ちください。",yue:"明白，請稍等。"}},{id:"furikae",task:"你想轉搭其他路線去目的地",ok:{jp:"振替輸送{ふりかえゆそう}を 利用{りよう}したいのですが、 乗{の}り場{ば}を 教{おし}えていただけますか。",yue:"我想用轉乘輸送，請問邊度上車？"},bad:[{jp:"振替{ふりかえ}、 どこ？ 早{はや}く 教{おし}えて。",yue:"轉乘喺邊？快啲講。",why:"語感錯：太粗魯"},{jp:"特急券{とっきゅうけん}の 払{はら}い戻{もど}しは できますか。",yue:"特急券可唔可以退？",why:"同轉乘無關"}],reply:{jp:"振替輸送{ふりかえゆそう}は 改札{かいさつ}の 外{そと}で ご案内{あんない}しております。",yue:"轉乘輸送喺閘口外面指引。"}}],mc=[null,{tourist:{jp:"乗{の}り過{す}ごしました。 どうしたら いいですか？",yue:"搭過站喇，點算好？"},ok:{jp:"精算機{せいさんき}で 精算{せいさん}して ください。",yue:"請去精算機補差價。"},bad:[{jp:"きっぷを もう一枚{いちまい} 買{か}って ください。",yue:"請再買多一張票。",why:"唔使重買，補差價就得"},{jp:"あちらの 階段{かいだん}を どうぞ。",yue:"請行嗰邊樓梯。",why:"同補票無關"}]},{tourist:{jp:"乗{の}り過{す}ごして しまったんですが、 どうすれば いいですか。",yue:"我搭過咗站，應該點做？"},ok:{jp:"乗{の}り越{こ}し 精算{せいさん}を していただければ 大丈夫{だいじょうぶ}です。 精算機{せいさんき}は あちらです。",yue:"補票就得。精算機喺嗰邊。"},bad:[{jp:"もう 一度{いちど} 切符{きっぷ}を 買{か}い直{なお}して ください。",yue:"請重新買票。",why:"唔使重買，補差價就得"},{jp:"遅延証明書{ちえんしょうめいしょ}を 発行{はっこう}します。",yue:"我發延誤證明畀你。",why:"佢係自己搭過站，唔係列車延誤"}]},{tourist:{jp:"うっかり 乗{の}り過{す}ごして しまいまして、 引{ひ}き返{かえ}したいのですが。",yue:"不小心搭過站，想折返。"},ok:{jp:"差額{さがく}を 精算{せいさん}して いただければ、 折{お}り返{かえ}しで ご乗車{じょうしゃ}いただけます。",yue:"補咗差額，就可以折返搭車。"},bad:[{jp:"払{はら}い戻{もど}しは いたしかねます。",yue:"恕不能退款。",why:"佢想折返，唔係要退款"},{jp:"それは お客様{きゃくさま}の ご自由{じゆう}です。",yue:"隨你喜歡。",why:"語感錯：對客人太冷淡，欠禮貌"}]}],fx=[{jp:"わかりません。",yue:"我唔知。",why:"駅員要幫到手，唔可以咁答"},{jp:"わかりません。",yue:"我唔知。",why:"駅員要幫到手，唔可以咁答"},{jp:"あっち。 自分{じぶん}で 探{さが}して。",yue:"嗰邊，自己搵。",why:"語感錯：對客人太失禮"},{jp:"ホームの 案内{あんない}は 掲示板{けいじばん}を ご覧{らん}。",yue:"睇告示板。",why:"語感錯：太冷淡，欠敬語"}],Gh={jp:"ありがとうございます。",yue:"多謝。"},Wh={jp:"ありがとうございます。",yue:"多謝。"},af=[...ja.map(n=>[`eki_d_${n.id}`,n.jp,n.yue,"travel"]),["eki_kippu","切符{きっぷ}","車票","travel"],["eki_ikisaki","行{い}き先{さき}","目的地","travel"],["eki_otona","大人{おとな}","成人","travel"],["eki_mai","〜枚{まい}","張（票嘅量詞）","travel"],["eki_bansen","〜番線{ばんせん}","幾號月台","travel"],["eki_noru","乗{の}る","搭、上車","travel"],["eki_matsu","待{ま}つ","等","travel"],["eki_kaku","各駅停車{かくえきていしゃ}","每站停嘅列車","travel"],["eki_kaisoku","快速{かいそく}","快速列車","travel"],["eki_tokkyu","特急{とっきゅう}","特急列車（要另買特急券）","travel"],["eki_harai","払{はら}い戻{もど}し","退款","travel"],["eki_chien","遅延証明書{ちえんしょうめいしょ}","延誤證明","travel"],["eki_furikae","振替輸送{ふりかえゆそう}","轉乘其他路線嘅補救安排","travel"],["eki_norisugoshi","乗{の}り過{す}ごす","搭過站","travel"],["eki_seisan","精算{せいさん}","補差價／結算","travel"],["eki_jinshin","人身事故{じんしんじこ}","人身事故","travel"]],px=af.map(n=>n[0]),mx=["","","二階{にかい}","三階{さんがい}","四階{よんかい}","五階{ごかい}","六階{ろっかい}","七階{ななかい}","八階{はっかい}","九階{きゅうかい}"],gx=["","","二百{にひゃく}","三百{さんびゃく}","四百{よんひゃく}","五百{ごひゃく}","六百{ろっぴゃく}","七百{ななひゃく}","八百{はっぴゃく}","九百{きゅうひゃく}"],_x=["","一{いち}","二{に}","三{さん}","四{よん}","五{ご}","六{ろく}","七{なな}","八{はち}","九{きゅう}"],Ko=n=>mx[n],Ha=n=>`${gx[Math.floor(n/100)]}${_x[n%100]}号室{ごうしつ}`,of=["","一泊{いっぱく}","二泊{にはく}","三泊{さんぱく}"],rf={jp:"いらっしゃいませ。",yue:"歡迎光臨。"},cf=[{task:"你想入住（check-in）",ok:{jp:"チェックイン お願{ねが}いします。",yue:"我要 check-in。"},bad:[{jp:"おやすみなさい。",yue:"晚安。",why:"場合錯：check-in 唔係講晚安"},{jp:"チェックアウト お願{ねが}いします。",yue:"我要退房。",why:"你係嚟入住，唔係退房"}]},{task:"你已經訂咗房，{py}入住",ok:{jp:"予約{よやく}している チャンです。 {p}です。",yue:"我有訂房，我係陳，{py}。"},bad:[{jp:"予約{よやく}している チャンです。 {q}です。",yue:"我有訂房，我係陳，人數講錯。",why:"細節錯：任務係{py}",swap:!0},{jp:"トイレは どこですか？",yue:"廁所喺邊？",why:"同入住無關"}]},{task:"你訂咗房，但會好夜先到，想先確認",ok:{jp:"予約{よやく}の 確認{かくにん}を お願{ねが}いしたいんですが。 到着{とうちゃく}が 夜遅{よるおそ}くなりそうなんですが、 大丈夫{だいじょうぶ}ですか？",yue:"想確認預約。我好似會好夜先到，得唔得？"},bad:[{jp:"夜{よる}、 遅{おそ}いけど、 入{い}れて ください。",yue:"我好夜先到，你要放我入。",why:"語感錯：太直接，欠禮貌"},{jp:"領収書{りょうしゅうしょ}を お願{ねが}いします。",yue:"請俾收據。",why:"情境錯：未入住，未要收據"}]},{task:"房型同你訂房時講嘅唔同，要求核實",ok:{jp:"予約時{よやくじ}に お伝{つた}えした 条件{じょうけん}と 異{こと}なっておりますので、 ご確認{かくにん}いただけませんでしょうか。",yue:"同訂房時講嘅條件唔同，可否核實？"},bad:[{jp:"部屋{へや}が 違{ちが}う！ ちゃんと 調{しら}べて。",yue:"房間錯咗！認真查！",why:"語感錯：對前台太粗魯"},{jp:"もう 一泊{いっぱく} 延長{えんちょう}することは 可能{かのう}でしょうか。",yue:"可唔可以加住一晚？",why:"情境錯：你而家係投訴房型，唔係加住"}]}],lf=[{jp:"パスポートを お願{ねが}いします。 {r}です。",yue:"請俾護照。房號 {rn}。"},{jp:"{n}ですね。 お部屋{へや}は {f}の {r}です。",yue:"住幾晚（{nn}）啱唔啱？房間喺 {fn}樓 {rn}。"},{jp:"お待{ま}たせいたしました。 お部屋{へや}の ご用意{ようい}が できております。 {f}の {r}です。",yue:"唔好意思，房間已準備好。{fn}樓 {rn}。"},{jp:"手違{てちが}いがございまして、 誠{まこと}に 申{もう}し訳{わけ}ございません。 お部屋{へや}を ご用意{ようい}いたしました。 {f}の {r}でございます。",yue:"弄錯咗，非常抱歉。已重新安排，{fn}樓 {rn}。"}],vx={yue:"前台講咗邊個房號？"},sa=[[{task:"你想要毛巾",ok:{jp:"タオル ください。",yue:"請俾毛巾。"},bad:[{jp:"いただきます。",yue:"開動喇。",why:"場合錯：食飯先講"},{jp:"おやすみなさい。",yue:"晚安。",why:"你想要毛巾，唔係瞓覺"}],reply:{jp:"はい、 どうぞ。",yue:"好，請。"}},{task:"你想寄存行李",ok:{jp:"荷物{にもつ} お願{ねが}いします。",yue:"行李拜託。"},bad:[{jp:"お風呂{ふろ} ください。",yue:"請俾浴室。",why:"詞語錯：你要寄行李，唔係浴室"},{jp:"いただきます。",yue:"開動喇。",why:"場合錯"}],reply:{jp:"はい、 お預{あず}かりします。",yue:"好，幫你寄存。"}}],[{task:"你想知道早餐幾點到幾點",ok:{jp:"朝食{ちょうしょく}は 何時{なんじ}から 何時{なんじ}までですか？",yue:"早餐幾點到幾點？"},bad:[{jp:"チェックアウトは 何時{なんじ}ですか？",yue:"幾點退房？",why:"你問嘅係早餐，唔係退房"},{jp:"トイレは どこですか？",yue:"廁所喺邊？",why:"同早餐無關"}],reply:{jp:"七時{しちじ}から 十時{じゅうじ}までです。",yue:"七點到十點。"}},{task:"你想知道 Wi-Fi 密碼",ok:{jp:"Wi-Fiの パスワードを 教{おし}えて ください。",yue:"請話我知 Wi-Fi 密碼。"},bad:[{jp:"Wi-Fiの パスワードを 食{た}べて ください。",yue:"請食 Wi-Fi 密碼。",why:"動詞錯：要用「教える」"},{jp:"部屋{へや}に ドライヤーは ありますか？",yue:"房入面有冇風筒？",why:"你問嘅係 Wi-Fi"}],reply:{jp:"こちらの カードに 書{か}いて あります。",yue:"寫喺呢張卡上面。"}}],[{task:"房間冷氣唔凍，想請人睇",ok:{jp:"部屋{へや}の エアコンが 効{き}かないんですが、 見{み}て もらえますか？",yue:"房間冷氣唔凍，可唔可以睇睇？"},bad:[{jp:"エアコン 壊{こわ}れてる！ すぐ 直{なお}して！",yue:"冷氣壞咗，即刻整！",why:"語感錯：意思啱但太粗魯"},{jp:"もう 一枚{いちまい} タオルを ください。",yue:"再要多一條毛巾。",why:"你要處理冷氣，唔係毛巾"}],reply:{jp:"申{もう}し訳{わけ}ございません。 すぐに 伺{うかが}います。",yue:"唔好意思，我即刻過嚟。"}},{task:"隔籬好嘈，想換房",ok:{jp:"隣{となり}の 部屋{へや}が うるさいので、 部屋{へや}を 変{か}えて もらえますか？",yue:"隔籬好嘈，可唔可以換房？"},bad:[{jp:"うるさい！ 部屋{へや}、 変{か}えろ！",yue:"好嘈！換房！",why:"語感錯：太粗魯"},{jp:"タクシーを 呼{よ}んで いただけますか？",yue:"可唔可以幫我叫的士？",why:"你想換房，唔係叫的士"}],reply:{jp:"申{もう}し訳{わけ}ございません。 すぐに 別{べつ}の お部屋{へや}を ご用意{ようい}します。",yue:"唔好意思，即刻安排另一間。"}}],[{task:"帳單有一項你冇印象嘅收費",ok:{jp:"ご請求書{せいきゅうしょ}に 身{み}に覚{おぼ}えのない 項目{こうもく}が 含{ふく}まれているようですが。",yue:"帳單似乎有一項我冇印象嘅收費。"},bad:[{jp:"この 金額{きんがく}、 おかしい。 返{かえ}して。",yue:"呢個金額奇怪，還返我。",why:"語感錯：太直接，欠敬語"},{jp:"もう 一泊{いっぱく} 延長{えんちょう}することは 可能{かのう}でしょうか。",yue:"可唔可以加住一晚？",why:"情境錯：你而家係問帳單"}],reply:{jp:"手違{てちが}いがございまして、 誠{まこと}に 申{もう}し訳{わけ}ございません。 すぐに 訂正{ていせい}いたします。",yue:"弄錯咗，非常抱歉，即刻更正。"}},{task:"你想加住一晚",ok:{jp:"もう 一泊{いっぱく} 延長{えんちょう}することは 可能{かのう}でしょうか。",yue:"可唔可以加住一晚？"},bad:[{jp:"もう 一泊{いっぱく}、 泊{と}まる。",yue:"再住多一晚。",why:"語感錯：用咗命令口吻，欠詢問"},{jp:"ご請求書{せいきゅうしょ}に 身{み}に覚{おぼ}えのない 項目{こうもく}が 含{ふく}まれているようですが。",yue:"帳單有項冇印象。",why:"情境錯：你想加住，唔係問帳單"}],reply:{jp:"生憎{あいにく}、 本日{ほんじつ}は 満室{まんしつ}でございまして、 ご希望{きぼう}に 添{そ}いかねます。",yue:"不巧今日滿房，未能滿足。"}}]],yx=[null,null,{jp:"ちょっと 待{ま}って。 忙{いそが}しいから。",yue:"等等，我好忙。",why:"語感錯：對客人太失禮"},{jp:"それは お客様{きゃくさま}の 問題{もんだい}じゃ ないですか。",yue:"呢個係你自己問題啦。",why:"語感錯：前台唔可以咁答"}],$h={jp:"ありがとうございます。",yue:"多謝。"},uf=[{ok:{jp:"チェックアウト お願{ねが}いします。",yue:"我要退房。"},bad:[{jp:"チェックイン お願{ねが}いします。",yue:"我要 check-in。",why:"你係退房，唔係入住"},{jp:"おやすみなさい。",yue:"晚安。",why:"場合錯"}],reply:{jp:"ありがとうございました。",yue:"多謝。"}},{ok:{jp:"チェックアウト お願{ねが}いします。 領収書{りょうしゅうしょ}を ください。",yue:"我要退房，請俾收據。"},bad:[{jp:"チェックアウトは 何時{なんじ}ですか？",yue:"幾點退房？",why:"你已經要退房，唔使再問時間"},{jp:"もう 一枚{いちまい} タオルを ください。",yue:"再要多一條毛巾。",why:"場合錯：而家係退房"}],reply:{jp:"はい、 こちらが 領収書{りょうしゅうしょ}です。 ありがとうございました。",yue:"好，呢張係收據。多謝。"}},{ok:{jp:"チェックアウトを お願{ねが}いします。 領収書{りょうしゅうしょ}も いただけますか？",yue:"我要退房，可唔可以同時俾收據？"},bad:[{jp:"チェックアウト、 領収書{りょうしゅうしょ}、 早{はや}く。",yue:"退房，收據，快啲。",why:"語感錯：太直接"},{jp:"荷物{にもつ}を 預{あず}かって いただけますか？",yue:"可唔可以幫我寄住行李？",why:"你係退房結帳，未問行李"}],reply:{jp:"かしこまりました。 領収書{りょうしゅうしょ}を お渡{わた}しします。 ご利用{りよう}、 ありがとうございました。",yue:"明白，收據畀你。多謝惠顧。"}},{ok:{jp:"チェックアウトを お願{ねが}いします。 精算{せいさん}は クレジットカードで お願{ねが}いできますか。",yue:"我要退房，可唔可以用信用卡結帳？"},bad:[{jp:"クレジットカードで 払{はら}う。 早{はや}く して。",yue:"用信用卡畀，快啲。",why:"語感錯：太直接"},{jp:"入湯税{にゅうとうぜい}は 別途{べっと} 頂戴{ちょうだい}しております。",yue:"入湯稅另外收。",why:"角色錯：呢句係職員講嘅"}],reply:{jp:"かしこまりました。 クレジットカードで 承{うけたまわ}ります。 ご利用{りよう}いただき、 誠{まこと}に ありがとうございました。",yue:"明白，可以用信用卡。多謝惠顧。"}}],hf=[["hotel_heya","部屋{へや}","房","travel"],["hotel_kagi","鍵{かぎ}","鎖匙／房卡","travel"],["hotel_nimotsu","荷物{にもつ}","行李","travel"],["hotel_chosyoku","朝食{ちょうしょく}","早餐","travel"],["hotel_taoru","タオル","毛巾","travel"],["hotel_passport","パスポート","護照","travel"],["hotel_checkin","チェックイン","入住","travel"],["hotel_checkout","チェックアウト","退房","travel"],["hotel_yoyaku","予約{よやく}","預約","travel"],["hotel_haku","〜泊{はく}","住幾晚","travel"],["hotel_goshitsu","〜号室{ごうしつ}","房號","travel"],["hotel_kai","〜階{かい}","樓層","travel"],["hotel_azukeru","預{あず}ける","寄存","travel"],["hotel_ryoshu","領収書{りょうしゅうしょ}","收據","travel"],["hotel_kikanai","効{き}かない","冇作用（冷氣唔凍）","travel"],["hotel_urusai","うるさい","嘈","travel"],["hotel_enpaku","延泊{えんぱく}","加住","travel"],["hotel_seikyu","請求書{せいきゅうしょ}","帳單","travel"],["hotel_techigai","手違{てちが}い","弄錯／出錯","travel"],["hotel_aniku","生憎{あいにく}","不巧","travel"]],xx=hf.map(n=>n[0]),Mx=[["meal_patty","調理済{ちょうりず}みハンバーグ","預製熟肉餅","🥩","box",8868663],["mash_potato","マッシュポテト","即食薯蓉","🥔","sphere",15588263],["frozen_veg","冷凍野菜{れいとうやさい}","冷凍蔬菜","🥦","sphere",7972940],["beef_pouch","レトルトビーフシチュー","預製燉牛肉包","🥘","box",10113846],["herb","ハーブ","裝飾香草","🌿","sphere",6068286],["bottled_tea","ペットボトルの緑茶{りょくちゃ}","樽裝綠茶","🍵","cyl",9743971],["ice","氷{こおり}","冰塊","🧊","box",12576499],["caramel_syrup","キャラメルシロップ","焦糖糖漿","🍯","cyl",12286268],["fruit_syrup","フルーツシロップ","果味糖漿","🍓","cyl",14904167],["soda_water","炭酸水{たんさんすい}","梳打水","🫧","cyl",12970223],["fruit_slice","果物{くだもの}のスライス","裝飾水果片","🍋","sphere",15979606],["stock_powder","鶏{とり}ガラスープの素{もと}","雞湯粉","🥣","cyl",14334835],["stock_concentrate","濃縮{のうしゅく}スープ","濃縮高湯","🫙","cyl",10779196],["msg","うま味調味料{みちょうみりょう}","味精 MSG","🧂","cyl",16183009],["oyster_sauce","オイスターソース","蠔油","🫗","cyl",5451809]],bx=[["atatameru","温{あたた}める","翻熱","verb"],["moritsukeru","盛{も}り付{つ}ける","擺盤","verb"],["nakami","中身{なかみ}","真正內容","phrase"]],ts={ding:{jp:"冷凍{れいとう}を 三{みっ}つ チンして",yue:"冷凍食品叮三份"},beef:{jp:"レトルトを 温{あたた}めて",yue:"翻熱料理包"},tea:{jp:"お茶{ちゃ}に 牛乳{ぎゅうにゅう}を 入{い}れて",yue:"茶加奶"},coffee:{jp:"インスタントに シロップを 入{い}れて",yue:"即溶咖啡加糖漿"},soda:{jp:"シロップを 炭酸{たんさん}で 割{わ}って",yue:"糖漿兌梳打"},soup:{jp:"スープの素{もと}を お湯{ゆ}で 溶{と}いて",yue:"湯粉用熱水沖"},rice:{jp:"うま味{み}調味料{ちょうみりょう}を 少{すこ}しだけ",yue:"只落少少味精"}},Sx={cough:{jp:"チンの 音{おと}を ごまかして！",yue:"點一下開始叮；客人轉頭前再點一下停。最後「叮」一聲唔好俾佢聽到！",btn:"🔊 點一下：叮緊",hide:"🤧 扮咳，企喺微波爐前",ding:!0,caught:"客人望到你守住微波爐：「…チン？」",verb:"atatameru",station:"microwave"},bottle:{jp:"ペットボトルを 隠{かく}して！",yue:"點一下開始倒樽裝茶；客人轉頭前收埋膠樽",btn:"🫙 點一下：倒樽裝茶",hide:"🫖 扮緊沖茶",caught:"客人：「…ペットボトル？」"},grinder:{jp:"ミルの 音{おと}で ごまかして！",yue:"點一下開始撕即溶包；客人轉頭前扮磨豆",btn:"📦 點一下：撕即溶包",hide:"⚙️ 扮緊磨豆",caught:"客人聽到撕即溶包嘅「嘶」一聲"},glass:{jp:"果物{くだもの}の 側{がわ}を 向{む}けて！",yue:"點一下開始倒糖漿；客人轉頭前轉返生果嗰面",btn:"🍯 點一下：倒糖漿",hide:"🍋 生果片對住客人",caught:"客人見到你狂倒糖漿"},steam:{jp:"湯気{ゆげ}を 出{だ}して！",yue:"點一下開始沖湯粉；客人轉頭前扮熬湯",btn:"🥣 點一下：沖湯粉",hide:"♨️ 扮緊睇火",caught:"客人見到你撕湯粉包"},hand:{jp:"調味料{ちょうみりょう}は 控{ひか}えめに！",yue:"點一下開始落雞粉；客人轉頭前縮手",btn:"🧂 點一下：落雞粉",hide:"🍳 扮緊兜炒",caught:"客人望見小黑隻手撈緊雞粉"}},Ln=(n,t,e)=>({lv:n,hi:!0,jp:t,yue:e}),wx={safe:[Ln(0,"でね、 でね…","跟住呢、跟住呢…"),Ln(0,"うん、 うん","係呀，係呀"),Ln(0,"へえ、 そうなんだ","哦，原來係咁"),Ln(1,"昨日{きのう}の ドラマ、 見{み}た？","琴日套劇睇咗未？"),Ln(1,"それで、 どう なったの？","跟住點呀？"),Ln(2,"最近{さいきん}、 仕事{しごと}が 忙{いそが}しくて…","最近返工好忙…"),Ln(2,"週末{しゅうまつ}、 どこか 行{い}かない？","週末去唔去邊度玩？")],turn:[Ln(0,"あれ？","咦？"),Ln(0,"ん？ 何{なん}の 音{おと}？","嗯？咩聲？"),Ln(1,"すみません、 ちょっと…","唔好意思，想問…"),Ln(1,"なんか、 いい におい！","好似好香喎！"),Ln(2,"あの、 厨房{ちゅうぼう}、 見{み}ても いいですか？","請問可唔可以睇吓廚房？"),Ln(2,"さっき、 チンって 音{おと}、 しなかった？","頭先係咪有「叮」一聲？")]},df={tourist:{icon:"🧳",name:"遊客",like:"gouka",hint:"好易信人",ask:-.25,tell:1.3,look:1,gap:1.2,turn:.35,pay:1,weight:3},granny:{icon:"👵",name:"街坊婆婆",like:"simple",hint:"浮誇菜名佢最起疑",ask:.3,tell:1.2,look:1.4,gap:1.1,turn:.4,pay:.9,weight:3},influencer:{icon:"📸",name:"網紅",like:"oshare",hint:"成日舉機望過嚟",ask:0,tell:1,look:.8,gap:.7,turn:.55,pay:1.2,weight:3},critic:{icon:"🧐",name:"食評家",like:"simple",hint:"轉頭快、追問多，但畀錢最多",ask:.2,tell:.8,look:1.2,gap:.9,turn:.5,pay:1.5,weight:2,minShift:1}},On=(n,t,e,i,s)=>({key:n,lv:t,kind:e,hi:!0,jp:i,yue:s}),Ex=[On("st_nani",0,"what","これ、 なに？","呢個係咩嚟？"),On("st_tezukuri",0,"made","手作{てづく}り？","自家製？"),On("pr_nanjikan",0,"time","何時間{なんじかん}？","整咗幾多個鐘？"),On("pr_zairyo",0,"origin","材料{ざいりょう}は どこの？","材料係邊度嘅？"),On("pr_nanno",1,"what","これは 何{なん}の 料理{りょうり}ですか？","呢個係咩料理？"),On("st_tsukuru",1,"made","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),On("pr_jikan",1,"time","どのくらい 時間{じかん}が かかりましたか？","用咗幾耐時間整？"),On("pr_doko",1,"origin","材料{ざいりょう}は どこから 来{き}ましたか？","材料由邊度嚟？"),On("pr_himitsu",2,"what","この 味{あじ}の 秘密{ひみつ}は 何{なん}ですか？","呢個味道有咩秘訣？"),On("pr_shihan",2,"made","まさか、 市販{しはん}の ものじゃ ないですよね？","唔會係街外買嘅現成貨啩？"),On("pr_kaketa",2,"time","本当{ほんとう}に 時間{じかん}を かけて 作{つく}ったんですか？","真係花咗好多時間整？"),On("st_genzairyo",2,"origin","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],Va={what:{jp:"シェフの 秘伝{ひでん}の レシピです！",yue:"主廚秘傳食譜！"},made:{jp:"はい、 全部{ぜんぶ} 手作{てづく}りです！",yue:"係，全部自己整！"},time:{jp:"朝{あさ}から じっくり 準備{じゅんび}しました！",yue:"由朝早慢慢準備到而家！"},origin:{jp:"産地{さんち}直送{ちょくそう}の 素材{そざい}です！",yue:"產地直送嘅材料！"}},Ys={believe:["★★★★★「職人の技！」 師傅手藝一流","★★★★★「また来ます！」 一定再嚟","★★★★☆「本格的！」 好正宗"],quiet:["★★★★☆「雰囲気がいい」 好有氣氛","★★★★☆「盛り付けがきれい」 擺盤好靚"],honest:["★★★☆☆「正直なお店」 老實舖頭","★★★★☆「店長が正直で好感」 店長好老實"],expose:["★☆☆☆☆「レトルトでした」 原來係料理包","★☆☆☆☆「だまされた！」 呃人㗎"],raidWin:["★★★★★ 食評家：「本物の味」 真材實料（？）"],raidLose:["★☆☆☆☆ 食評家爆料：「全部チンでした」 全部係叮"]},es=(n,t,e)=>({type:"pick",need:n,decoys:t,jp:e.jp,yue:e.yue,tip:"聽清楚真正用咩材料。"}),ns=n=>({type:"sneak",kind:n,weight:1,tip:"遊戲時間係縮時演出；現實請跟包裝指示。",...Sx[n]}),zo={type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"よく 混{ま}ぜて",yue:"攪勻就出得",tip:"轉圈攪勻。"},Xh={dark_beef:1,dark_coffee:2,dark_soup:3,dark_rice:4},Ks=[{id:"dark_ding",number:"01",jp:"シェフおまかせ 三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"主廚精選三拼大餐",emoji:"🍽️",price:480,station:"board",time:"縮時翻熱",ingredients:[["meal_patty","預製熟肉餅 1 份"],["mash_potato","即食薯蓉 1 份"],["frozen_veg","冷凍蔬菜 1 份"]],howto:["按各款包裝指示，用適合微波爐嘅容器分別翻熱至熱透。","肉餅、薯蓉、蔬菜分區擺好，加幾點醬汁。"],steps:[es(["meal_patty","mash_potato","frozen_veg"],["stock_powder","herb"],ts.ding),ns("cough")],names:{honest:{jp:"冷凍{れいとう}・レトルトの 盛{も}り合{あ}わせ",yue:"冷凍同預製拼盤"},mild:{jp:"三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"三拼盤"}},truth:"肉餅、薯蓉、蔬菜預先煮好，出餐前翻熱。",gag:"客人：「層次好豐富！」後廚：「叮——！」",shortcut:"預製餐",lesson:"おまかせ = 交畀師傅決定；擺盤可以花心思，製作來源照樣講清楚。"},{id:"dark_beef",number:"02",jp:"八時間{はちじかん}煮込{にこ}んだ 特製{とくせい}ビーフシチュー",yue:"八小時慢燉特製牛肉",emoji:"🥘",price:520,station:"board",time:"縮時翻熱",ingredients:[["beef_pouch","預製燉牛肉包 1 包"],["herb","裝飾香草 1 條"]],howto:["按料理包指示翻熱；包裝未標明可微波，就先倒入適用容器。","倒入小砂鍋，放上香草。三分鐘係關卡名，實際時間跟包裝。"],steps:[es(["beef_pouch","herb"],["mash_potato","msg"],ts.beef),ns("cough")],names:{honest:{jp:"レトルトの ビーフシチュー",yue:"料理包燉牛肉"},mild:{jp:"特製{とくせい}ビーフシチュー",yue:"特製燉牛肉"}},truth:"牛肉已經喺料理包入面燉好，小黑只負責翻熱同換鍋。",gag:"「慢燉八小時」招牌跌低，後面係一疊料理包。",shortcut:"料理包",lesson:"煮込{にこ}む = 燉；レトルト = 預製料理包；換咗砂鍋，唔代表由零開始燉。"},{id:"dark_milk_tea",number:"07",jp:"職人{しょくにん}仕立{じた}ての 緑茶{りょくちゃ}ラテ",yue:"職人特調鮮奶綠",emoji:"🥛",price:300,station:"board",time:"1 分鐘",ingredients:[["bottled_tea","樽裝綠茶 1 份"],["milk","牛奶 適量"],["ice","冰塊 適量"]],howto:["透明杯加冰，倒入樽裝綠茶。","加牛奶攪勻，按口味調整比例。"],steps:[es(["bottled_tea","milk","ice"],["fruit_syrup","soda_water"],ts.tea),ns("bottle"),zo],names:{honest:{jp:"ペットボトルの 緑茶{りょくちゃ}ラテ",yue:"樽裝綠茶加奶"},mild:{jp:"緑茶{りょくちゃ}ラテ",yue:"綠茶拿鐵"}},truth:"樽裝綠茶加牛奶同冰，冇煲茶，連茶隔都唔使洗。",gag:"客人問茶葉產地，小黑將膠樽慢慢推入櫃底。",shortcut:"瓶裝茶",lesson:"仕立{した}て = 度身製作嘅講法；緑茶 = 綠茶；特調可以係比例調配，未必係現泡茶。"},{id:"dark_coffee",number:"08",jp:"自家製{じかせい}キャラメルの 特製{とくせい}ラテ",yue:"自家製焦糖特製拿鐵",emoji:"☕",price:380,station:"board",time:"2 分鐘",ingredients:[["coffee_powder","即溶咖啡粉 1 份"],["mizu","熱水 少量"],["milk","牛奶 適量"],["ice","冰塊 適量"],["caramel_syrup","焦糖糖漿 少量"]],howto:["即溶咖啡粉用少量熱水溶開。","杯內加冰、牛奶同少量焦糖糖漿，再倒入咖啡。"],steps:[es(["coffee_powder","milk","caramel_syrup","ice"],["bottled_tea","fruit_syrup"],ts.coffee),ns("grinder"),zo],names:{honest:{jp:"インスタントの キャラメルラテ",yue:"即溶焦糖拿鐵"},mild:{jp:"特製{とくせい}キャラメルラテ",yue:"特製焦糖拿鐵"}},truth:"即溶粉沖開，加奶、冰同焦糖，靚杯係最大排場。",gag:"製作三十秒，介紹風味講足三分鐘。",shortcut:"即溶粉",lesson:"自家製{じかせい} = 自己店內製作；呢個詞喺菜單好重要，講大話就係問題。"},{id:"dark_soda",number:"09",jp:"季節{きせつ}の フルーツソーダ",yue:"季節鮮果梳打",emoji:"🍹",price:320,station:"board",time:"1 分鐘",ingredients:[["fruit_syrup","果味糖漿 少量"],["soda_water","梳打水 1 份"],["ice","冰塊 適量"],["fruit_slice","水果片 1 片（裝飾）"]],howto:["杯中加冰、果味糖漿同梳打水，輕輕拌勻。","杯邊放一片水果；飲品主體嘅果味來自糖漿。"],steps:[es(["fruit_syrup","soda_water","ice","fruit_slice"],["bottled_tea","caramel_syrup"],ts.soda),ns("glass"),zo],names:{honest:{jp:"シロップの ソーダ割{わ}り",yue:"糖漿梳打"},mild:{jp:"フルーツソーダ",yue:"果味梳打"}},truth:"果味主要來自糖漿；真正水果得杯邊裝飾嗰一片。",gag:"全杯唯一鮮果，今日負責企喺杯邊返工。",shortcut:"糖漿",lesson:"季節{きせつ}の = 時令；〜風 = 某種風味；フルーツソーダ唔等於鮮果汁。"},{id:"dark_soup",number:"26",jp:"じっくり 煮出{にだ}した 自家製{じかせい}スープ",yue:"慢火熬製自家湯",emoji:"🥣",price:280,station:"board",time:"1 分鐘",ingredients:[["stock_powder","雞湯粉 按包裝份量"],["stock_concentrate","濃縮高湯 少量，按鹹度調整"],["mizu","熱水 適量"]],howto:["按產品標示用熱水稀釋湯底，先試味。","兩款湯底唔好各落足一份，以免過鹹；唔夠味先逐少調整。"],steps:[es(["stock_powder","stock_concentrate","mizu"],["msg","oyster_sauce"],ts.soup),ns("steam"),zo],names:{honest:{jp:"粉末{ふんまつ}スープ",yue:"粉末湯"},mild:{jp:"自家製{じかせい}スープ",yue:"自家湯"}},truth:"湯粉、濃縮高湯同熱水沖成，冇喺店內熬八小時。",gag:"客人問熬咗幾耐，小黑望住秒錶，扮睇唔到。",shortcut:"濃縮高湯",lesson:"じっくり = 慢慢、用心；濃縮 = concentrated；稀釋比例同鹹度比落得多更重要。"},{id:"dark_rice",number:"25",jp:"黄金{おうごん}の 特製{とくせい}チャーハン",yue:"黃金特製炒飯",emoji:"🍚",price:360,station:"pan",time:"5 分鐘",ingredients:[["gohan","熟飯 1 碗"],["tamago","雞蛋 1 隻"],["msg","味精 少量"],["stock_powder","雞粉 少量"],["oyster_sauce","蠔油 少量"],["abura","油 適量"]],howto:["鑊落油炒熟雞蛋，加熟飯炒散至熱透。","味精、雞粉、蠔油會疊加味道；先少量試味，再決定使唔使補。"],steps:[es(["gohan","tamago","msg","stock_powder","oyster_sauce"],["stock_concentrate","herb"],ts.rice),ns("hand"),{type:"season",weight:3,jp:"味{あじ}を 調{ととの}えて",yue:"主廚，仲差少少？試味先！",tip:"呢個係遊戲調味格數，唔係現實用量。"}],names:{honest:{jp:"うま味{み}調味料{ちょうみりょう}の チャーハン",yue:"味精炒飯"},mild:{jp:"特製{とくせい}チャーハン",yue:"特製炒飯"}},truth:"鮮味靠調味配搭；亂落大量調味，會蓋過蛋香同飯香。",gag:"「仲差少少！」大廚伸手再攞雞粉，客人即刻遞杯水。",shortcut:"増鮮調味",lesson:"うま味 = 鮮味。MSG 本身唔係笑柄；唔試味、亂落先係。"}].map(n=>({...n,chapter:"dark",dish:n.id,serves:"1 份",unlock:Xh[n.id]?{darkShift:Xh[n.id]}:{}})),jo=[{id:"simple",jp:"シンプル",yue:"簡單樸素",icon:"🍽️",plate:"plain",garnish:"none"},{id:"oshare",jp:"おしゃれ",yue:"精緻時尚",icon:"✨",plate:"bistro",garnish:"accent"},{id:"gouka",jp:"豪華{ごうか}",yue:"豪華誇張",icon:"👑",plate:"grand",garnish:"tower"}],Bn=(n,t,e)=>({lv:n,hi:!0,jp:t,yue:e}),Tx={simple:[Bn(0,"シンプルが いいです","簡單就好"),Bn(1,"飾{かざ}りは いりません","唔使裝飾"),Bn(2,"素材{そざい}の 味{あじ}を 見{み}せてください","想睇到食材原味")],oshare:[Bn(0,"おしゃれに してください","整靚啲"),Bn(1,"写真{しゃしん}を 撮{と}りたいです","我想影相"),Bn(2,"映{ば}える 感{かん}じで お願{ねが}いします","要打卡感覺")],gouka:[Bn(0,"大{おお}きいのが いいです","大大份就好"),Bn(1,"たくさん 飾{かざ}ってください","多啲裝飾"),Bn(2,"豪華{ごうか}な 料理{りょうり}が 食{た}べたいです","想食豪華嘢")]},Ax=[Bn(0,"えっ… イメージと 違{ちが}います","吓…同我諗嘅唔同"),Bn(0,"うーん、 まあまあです","嗯…麻麻地"),Bn(0,"わあ、 これです！","嘩，就係咁！")],Qa={honest:{label:"如實介紹",hype:15,mult:1,ask:0},mild:{label:"小誇張",hype:55,mult:1.6,ask:.45},grand:{label:"極度浮誇",hype:100,mult:2.5,ask:.85}},ff=(n,t)=>t==="grand"?{jp:n.jp,yue:n.yue}:n.names[t];function Rx(n,t,e){return{taste:Math.round(n*100),look:[55,80,100][t],hype:Qa[e].hype}}const Cx=[{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,hi:!0,jp:"すみません、 {dish}を お願{ねが}いします",yue:"唔好意思，我要{dishYue}"},{lv:2,hi:!0,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],Px={honest:{jp:"すみません、 実{じつ}は 温{あたた}めただけです",yue:"唔好意思，其實只係翻熱"}},gc={forgive:[{lv:0,hi:!0,jp:"そうですか。 おいしいです",yue:"係咩。都好食"},{lv:1,hi:!0,jp:"正直{しょうじき}ですね。 でも おいしいから いいです",yue:"你好老實。不過好食就得喇"},{lv:2,hi:!0,jp:"冷凍{れいとう}だとしても、 おいしければ 気{き}にしません",yue:"就算係急凍，好食我都唔介意"}],believe:[{lv:0,hi:!0,jp:"へえ、 すごい！",yue:"嘩，好叻！"},{lv:1,hi:!0,jp:"さすが プロですね！",yue:"真係專業！"},{lv:2,hi:!0,jp:"やっぱり 職人{しょくにん}の 技{わざ}は 違{ちが}いますね",yue:"果然師傅手藝唔同"}],expose:[{lv:0,hi:!0,jp:"あれ？ これ、 レトルト？",yue:"咦？呢個係料理包？"},{lv:1,hi:!0,jp:"えっ、 これ、 レトルトじゃないですか！",yue:"咩話，呢個唔係料理包咩！"},{lv:2,hi:!0,jp:"…これ、 市販{しはん}の 商品{しょうひん}ですよね？",yue:"…呢個係街外賣嘅現成貨，啱唔啱？"}]},xn={gohan:{jp:"ご飯{はん}",yue:"白飯",emoji:"🍚",cat:"ing",m:{s:"sphere",c:16645621,sc:[.32,.2,.32]}},shio:{jp:"塩{しお}",yue:"鹽",emoji:"🧂",cat:"ing",m:{s:"cyl",c:15658734,sc:[.08,.2,.08]}},nori:{jp:"海苔{のり}",yue:"紫菜",emoji:"🟩",cat:"ing",m:{s:"box",c:2044706,sc:[.3,.01,.2]}},umeboshi:{jp:"梅干{うめぼ}し",yue:"酸梅",emoji:"🔴",cat:"ing",m:{s:"sphere",c:13117500,sc:[.07,.06,.07]}},sake_fish:{jp:"鮭{さけ}",yue:"三文魚",emoji:"🐟",cat:"ing",m:{s:"box",c:16747622,sc:[.2,.06,.12]}},mizu:{jp:"水{みず}",yue:"水",emoji:"💧",cat:"ing",m:{s:"cyl",c:9425919,sc:[.1,.22,.1]}},dashi:{jp:"だし",yue:"日式高湯",emoji:"🥣",cat:"ing",m:{s:"cyl",c:14263361,sc:[.12,.12,.12]}},tofu:{jp:"豆腐{とうふ}",yue:"豆腐",emoji:"⬜",cat:"ing",m:{s:"box",c:16776168,sc:[.24,.12,.16]}},wakame:{jp:"わかめ",yue:"海帶芽",emoji:"🌿",cat:"ing",m:{s:"sphere",c:3042106,sc:[.12,.04,.12]}},negi:{jp:"ねぎ",yue:"蔥",emoji:"🧅",cat:"ing",m:{s:"cyl",c:7127626,sc:[.03,.35,.03],rz:1.57}},miso:{jp:"味噌{みそ}",yue:"麵豉醬",emoji:"🟫",cat:"ing",m:{s:"cyl",c:11037490,sc:[.14,.1,.14]}},toriniku:{jp:"鶏肉{とりにく}",yue:"雞肉",emoji:"🍗",cat:"ing",m:{s:"box",c:15911328,sc:[.22,.08,.16]}},tamago:{jp:"卵{たまご}",yue:"雞蛋",emoji:"🥚",cat:"ing",m:{s:"sphere",c:16774108,sc:[.08,.1,.08]}},tamanegi:{jp:"玉{たま}ねぎ",yue:"洋蔥",emoji:"🧅",cat:"ing",m:{s:"sphere",c:15253626,sc:[.12,.11,.12]}},shoyu:{jp:"醤油{しょうゆ}",yue:"豉油",emoji:"🫗",cat:"ing",m:{s:"cyl",c:3807756,sc:[.06,.24,.06]}},mirin:{jp:"みりん",yue:"味醂（甜米酒）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:16115368,sc:[.06,.24,.06]}},satou:{jp:"砂糖{さとう}",yue:"砂糖",emoji:"🍬",cat:"ing",m:{s:"box",c:16777215,sc:[.1,.1,.1]}},men:{jp:"麺{めん}",yue:"麵",emoji:"🍜",cat:"ing",m:{s:"sphere",c:15980410,sc:[.22,.08,.22]}},chashu:{jp:"チャーシュー",yue:"叉燒（日式）",emoji:"🥩",cat:"ing",m:{s:"cyl",c:11887930,sc:[.14,.03,.14]}},moyashi:{jp:"もやし",yue:"芽菜",emoji:"🌱",cat:"ing",m:{s:"sphere",c:16249808,sc:[.12,.05,.12]}},ninniku:{jp:"にんにく",yue:"蒜頭",emoji:"🧄",cat:"ing",m:{s:"sphere",c:15986400,sc:[.07,.07,.07]}},sake_drink:{jp:"酒{さけ}",yue:"日本酒（煮食用）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:14741759,sc:[.06,.24,.06]}},kiru:{jp:"切{き}る",yue:"切",emoji:"🔪",cat:"verb"},mazeru:{jp:"混{ま}ぜる",yue:"攪拌、撈勻",emoji:"🥄",cat:"verb"},niru:{jp:"煮{に}る",yue:"煮、燜",emoji:"🍲",cat:"verb"},nigiru:{jp:"握{にぎ}る",yue:"揸實、搓（飯糰）",emoji:"✊",cat:"verb"},tokasu:{jp:"溶{と}かす",yue:"溶開",emoji:"🫧",cat:"verb"},yuderu:{jp:"ゆでる",yue:"烚（落水煮）",emoji:"♨️",cat:"verb"},noseru:{jp:"のせる",yue:"放上面",emoji:"⬆️",cat:"verb"},onigiri:{jp:"おにぎり",yue:"飯糰",emoji:"🍙",cat:"dish"},misoshiru:{jp:"味噌汁{みそしる}",yue:"麵豉湯",emoji:"🥣",cat:"dish"},oyakodon:{jp:"親子丼{おやこどん}",yue:"親子丼（雞肉滑蛋飯）",emoji:"🍛",cat:"dish"},ramen:{jp:"ラーメン",yue:"拉麵",emoji:"🍜",cat:"dish"},ocha:{jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",cat:"dish"},omizu:{jp:"お水{みず}",yue:"水（禮貌講法）",emoji:"🥛",cat:"dish"},biiru:{jp:"ビール",yue:"啤酒",emoji:"🍺",cat:"dish"},hitotsu:{jp:"一{ひと}つ",yue:"一個",emoji:"1️⃣",cat:"num"},futatsu:{jp:"二{ふた}つ",yue:"兩個",emoji:"2️⃣",cat:"num"},mittsu:{jp:"三{みっ}つ",yue:"三個",emoji:"3️⃣",cat:"num"},hitori:{jp:"一人{ひとり}",yue:"一個人",emoji:"🧍",cat:"num"},futari:{jp:"二人{ふたり}",yue:"兩個人",emoji:"👫",cat:"num"},ikkan:{jp:"一貫{いっかん}",yue:"一件（握壽司）",emoji:"1️⃣",cat:"num",textIcon:!0},nikan:{jp:"二貫{にかん}",yue:"兩件（握壽司）",emoji:"2️⃣",cat:"num",textIcon:!0},sankan:{jp:"三貫{さんかん}",yue:"三件（握壽司）",emoji:"3️⃣",cat:"num",textIcon:!0},sannin:{jp:"三人{さんにん}",yue:"三個人",emoji:"👨‍👩‍👧",cat:"num"},irasshaimase:{jp:"いらっしゃいませ",yue:"歡迎光臨",emoji:"🙇",cat:"phrase"},arigatou:{jp:"ありがとうございます",yue:"多謝（禮貌）",emoji:"🙏",cat:"phrase"},oishii:{jp:"おいしい",yue:"好好食",emoji:"😋",cat:"phrase"},itadakimasu:{jp:"いただきます",yue:"開動喇（食之前講）",emoji:"🙏",cat:"phrase"},gochisousama:{jp:"ごちそうさまでした",yue:"多謝款待（食完講）",emoji:"😊",cat:"phrase"},kudasai:{jp:"ください",yue:"請畀我⋯",emoji:"👉",cat:"phrase"},onegaishimasu:{jp:"お願{ねが}いします",yue:"麻煩你、唔該",emoji:"🙇",cat:"phrase"},okaikei:{jp:"お会計{かいけい}",yue:"埋單",emoji:"🧾",cat:"phrase"},sumimasen:{jp:"すみません",yue:"唔好意思（叫人都用得）",emoji:"✋",cat:"phrase"},atsui:{jp:"熱{あつ}い",yue:"好熱、好燙",emoji:"🔥",cat:"phrase"},oomori:{jp:"大盛{おおも}り",yue:"大份",emoji:"⛰️",cat:"phrase"},matta:{jp:"また 来{き}ます",yue:"我會再嚟",emoji:"👋",cat:"phrase"},oishikatta:{jp:"美味{おい}しかった",yue:"好好食呀（過去式）",emoji:"🥰",cat:"phrase"},hai:{jp:"はい",yue:"係／好",emoji:"⭕",cat:"phrase"},iie:{jp:"いいえ",yue:"唔係／唔使",emoji:"❌",cat:"phrase"}};for(const[n,t,e,i,s,a]of[...Yy,...Mx])xn[n]={jp:t,yue:e,emoji:i,cat:"ing",m:{s,c:a,sc:[.12,.1,.12]},...ef.includes(n)?{textIcon:!0}:{}};for(const n of[...nf,...Ks])xn[n.id]={jp:n.jp,yue:n.yue,emoji:n.emoji,cat:"dish",...ef.includes(n.id)?{textIcon:!0}:{}};for(const[n,t,e,i]of[...Ky,...sf,...af,...hf,...bx])xn[n]={jp:t,yue:e,cat:i,emoji:i==="verb"?"🥄":i==="travel"?n.startsWith("hotel_")?"🏨":"🚉":"💬",textIcon:!0};function me(n){const t=xn[n];if(!t)throw new Error("vocab missing: "+n);return{id:n,...t}}const it=(n,t={})=>new Qn({color:n,roughness:.6,...t}),Gi=n=>(n.castShadow=!0,n.receiveShadow=!0,n);function se(n,t,e=1,i=1,s=1){const a=Gi(new W(new $e(n,20,14),typeof t=="number"?it(t):t));return a.scale.set(e,i,s),a}function ye(n,t,e,i){return Gi(new W(new te(n,t,e),typeof i=="number"?it(i):i))}function ie(n,t,e,i,s=24){return Gi(new W(new Ce(n,t,e,s),typeof i=="number"?it(i):i))}function Vs(n=.22,t=.14,e=10165536,i=1708048){const s=[];for(let u=0;u<=10;u++){const h=u/10;s.push(new ft(n*.45+n*.55*Math.sin(h*Math.PI/2),t*h))}const a=new Ot,o=Gi(new W(new Ya(s,32),it(e,{roughness:.3}))),r=s.map(u=>new ft(u.x*.93,u.y+.005)),c=new W(new Ya(r,32),it(i,{side:bn,roughness:.3})),l=ie(n*.38,n*.4,.03,e);return l.position.y=-.01,a.add(o,c,l),a.userData.top=t,a.userData.r=n*.93,a}function cn(n=.25,t=16052714){const e=ie(n,n*.8,.03,t,32),i=Gi(new W(new un(n*.95,.012,6,32),it(3104156)));i.rotation.x=Math.PI/2,i.position.y=.016;const s=new Ot;return s.add(e,i),s}function Ml(n=!0){const t=new Ot,e=new Kd,i=.14,s=.05,a=[0,1,2].map(c=>new ft(Math.sin(c*2.094)*i,Math.cos(c*2.094)*i));for(let c=0;c<3;c++){const l=a[c],u=a[(c+1)%3],h=a[(c+2)%3],m=l.clone().lerp(h,s/i*.9),f=l.clone().lerp(u,s/i*.9);c===0?e.moveTo(m.x,m.y):e.lineTo(m.x,m.y),e.quadraticCurveTo(l.x,l.y,f.x,f.y)}e.closePath();const o=new tu(e,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.04,bevelSegments:4,curveSegments:10});o.translate(0,0,-.04);const r=Gi(new W(o,it(16514036,{roughness:.9})));if(r.position.y=.14,t.add(r),n){const c=ye(.13,.11,.2,it(1517083,{roughness:.8}));c.position.set(0,.07,0),t.add(c)}return t}function qh(n){const t=new Ot;if(["dark_milk_tea","dark_coffee","dark_soda"].includes(n)){const e=ie(.11,.09,.3,it(14874362,{transparent:!0,opacity:.35}));e.position.y=.17,t.add(e);const i=ie(.098,.083,.25,n==="dark_coffee"?10383697:n==="dark_soda"?15308175:11846026);i.position.y=.15,t.add(i);const s=pf();if(s.position.y=.04,t.add(s),n==="dark_soda"){const a=ie(.065,.065,.014,16243299);a.rotation.x=Math.PI/2,a.position.set(.09,.3,0),t.add(a)}if(n==="dark_coffee"){const a=ie(.096,.096,.045,14995373);a.position.y=.255,t.add(a)}}else if(n==="dark_ding"){t.add(cn(.3));const e=se(.12,8868663,1.1,.4,.8);e.position.set(-.1,.07,0),t.add(e);const i=se(.09,15785896,1,.8,1);i.position.set(.12,.08,.08),t.add(i);for(let s=0;s<3;s++){const a=se(.04,7382346);a.position.set(s*.06,.06,-.13),t.add(a)}}else if(n==="dark_beef"||n==="dark_soup"){t.add(Vs(.23,.15,n==="dark_beef"?8671289:15787471,16182751));const e=ie(.205,.205,.025,n==="dark_beef"?8536360:14004830);if(e.position.y=.12,t.add(e),n==="dark_beef")for(let s=0;s<5;s++){const a=ye(.065,.045,.06,9524274);a.position.set(Math.sin(s*2)*.12,.15,Math.cos(s*2)*.12),t.add(a)}const i=se(.04,6524477,1.5,.2,.5);i.position.set(0,.17,0),t.add(i)}else if(n==="dark_rice"){t.add(cn(.28));const e=se(.21,14858078,1,.6,1);e.position.y=.045,t.add(e);for(let i=0;i<12;i++){const s=ye(.035,.018,.025,i%3?16372556:7382346);s.position.set(Math.sin(i*2)*.15,.13,Math.cos(i*2)*.12),t.add(s)}}else if(n==="onigiri"){t.add(cn(.24));const e=Ml();e.position.y=.02,t.add(e);const i=Ml();i.position.set(.1,.02,-.06),i.rotation.y=.5,i.scale.setScalar(.85),t.add(i);const s=se(.025,13117500);s.position.set(-.13,.04,.12),t.add(s)}else if(n==="misoshiru"){const e=Vs(.18,.13);t.add(e);const i=new W(new Oi(.15,32),it(12946250,{roughness:.2}));i.rotation.x=-Math.PI/2,i.position.y=.11,t.add(i);for(let s=0;s<6;s++){const a=ye(.035,.03,.035,16776168);a.position.set((Math.random()-.5)*.18,.115,(Math.random()-.5)*.18),a.rotation.y=Math.random(),t.add(a)}for(let s=0;s<5;s++){const a=se(.03,3042106,1,.2,.6);a.position.set((Math.random()-.5)*.16,.112,(Math.random()-.5)*.16),t.add(a)}for(let s=0;s<8;s++){const a=ie(.012,.012,.005,8376399,8);a.position.set((Math.random()-.5)*.15,.118,(Math.random()-.5)*.15),t.add(a)}}else if(n==="oyakodon"){const e=Vs(.22,.15,2903951,15921126);t.add(e);const i=se(.19,16514036,1,.3,1);i.position.y=.13,t.add(i);const s=se(.19,it(16237873,{roughness:.35}),1,.16,1);s.position.y=.17,t.add(s);for(let a=0;a<6;a++){const o=se(.05,16775126,1,.25,.8);o.position.set((Math.random()-.5)*.24,.19,(Math.random()-.5)*.24),t.add(o)}for(let a=0;a<6;a++){const o=ye(.05,.035,.04,13210202);o.position.set((Math.random()-.5)*.22,.2,(Math.random()-.5)*.22),o.rotation.y=Math.random()*3,t.add(o)}for(let a=0;a<3;a++){const o=se(.03,5025616,1,.15,1.6);o.position.set((Math.random()-.5)*.08,.22,(Math.random()-.5)*.08),o.rotation.y=a*2,t.add(o)}}else if(n==="chahan"){t.add(cn(.3));const e=se(.2,15254634,1,.45,1);e.position.y=.07,t.add(e);for(let i=0;i<8;i++){const s=ye(.04,.02,.04,i%2?16243018:7127626);s.position.set(Math.cos(i*.8)*.12,.17,Math.sin(i*.8)*.12),s.rotation.y=i,t.add(s)}}else if(n==="tsukemen"){t.add(cn(.3));for(let s=0;s<6;s++){const a=new W(new un(.07+s*.01,.012,6,20),it(15980410));a.rotation.x=Math.PI/2,a.position.set(-.05,.03+s*.012,0),t.add(a)}const e=Vs(.12,.09,2894892,1118481);e.position.set(.2,0,.06),t.add(e);const i=ie(.1,.1,.01,8014372);i.position.set(.2,.08,.06),t.add(i)}else if(["ramen","shoyu_ramen","shio_ramen","miso_ramen","tonkotsu_ramen"].includes(n)){const e={shoyu_ramen:9062943,shio_ramen:15785120,miso_ramen:13208124,tonkotsu_ramen:15918799}[n]||13802331,i=Vs(.27,.17,11740702,1118481);t.add(i);const s=new W(new Oi(.235,32),it(e,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.15,t.add(s);for(let u=0;u<7;u++){const h=new W(new un(.05+Math.random()*.06,.008,6,20),it(15980410));h.rotation.x=Math.PI/2,h.position.set((Math.random()-.5)*.12,.152,(Math.random()-.5)*.12),t.add(h)}for(let u=0;u<2;u++){const h=ie(.07,.07,.02,11887930);h.position.set(-.08+u*.05,.165,-.08),h.rotation.x=.3,t.add(h)}const a=new W(new $e(.05,16,10,0,Math.PI*2,0,Math.PI/2),it(16775920));a.scale.set(1,.7,1.3),a.position.set(.1,.15,.05),t.add(a);const o=se(.028,15763994,1,.4,1.2);o.position.set(.1,.183,.05),t.add(o);const r=ye(.12,.14,.005,1517083);r.position.set(0,.2,-.18),r.rotation.x=-.25,t.add(r);const c=ie(.035,.035,.012,16777215);c.position.set(.05,.16,.13),t.add(c);const l=new W(new un(.018,.005,6,16),it(16740256));l.rotation.x=Math.PI/2,l.position.set(.05,.167,.13),t.add(l);for(let u=0;u<10;u++){const h=ie(.01,.01,.005,8376399,8);h.position.set(-.1+Math.random()*.1,.158,.05+Math.random()*.1),t.add(h)}}else if(["instant_coffee","black_tea","matcha_latte"].includes(n)){t.add(cn(.19));const e=ie(.115,.09,.2,16774367);e.position.y=.12,t.add(e);const i=ie(.106,.106,.012,n==="instant_coffee"?4796454:n==="black_tea"?11627820:9350233);i.position.y=.225,t.add(i);const s=new W(new un(.06,.015,8,20),it(16774367));if(s.position.set(.12,.12,0),t.add(s),n==="matcha_latte"){const a=ie(.06,.06,.005,16775647);a.position.y=.235,t.add(a)}}else if(n==="edamame"){t.add(cn());for(let e=0;e<6;e++){const i=se(.065,7974216,1.7,.45,.55);i.position.set((e%3-1)*.12,.05+Math.floor(e/3)*.035,(Math.floor(e/3)-.5)*.12),i.rotation.y=e*.8,t.add(i)}}else if(n==="yakitori"){t.add(cn());for(let e=0;e<2;e++){const i=ye(.015,.015,.42,13017452);i.position.set(e*.17-.08,.05,0),t.add(i);for(let s=0;s<4;s++){const a=ye(.085,.06,.065,s%2?8889940:13009468);a.position.set(e*.17-.08,.08,s*.08-.08),t.add(a)}}}else if(n==="karaage"||n==="agedashi"){t.add(cn());for(let e=0;e<5;e++){const i=n==="karaage"?se(.07,12945979,1,.8,.9):ye(.1,.08,.1,15122813);if(i.position.set(Math.cos(e*1.26)*.13,.07,Math.sin(e*1.26)*.13),t.add(i),n==="agedashi"){const s=se(.02,7185226,1.4,.2,.5);s.position.copy(i.position),s.position.y+=.05,t.add(s)}}}else if(n==="okonomiyaki"||n==="pancakes"){t.add(cn());for(let e=0;e<(n==="pancakes"?3:1);e++){const i=ie(.2,.2,.045,e%2?14858346:13210700);i.position.y=.045+e*.045,t.add(i)}if(n==="pancakes"){const e=ye(.065,.025,.065,16768899);e.position.y=.17,t.add(e)}else for(let e=0;e<4;e++){const i=ye(.31,.008,.015,6568748);i.position.set(0,.075,(e-1.5)*.055),t.add(i)}}else if(n==="thick_toast"){t.add(cn());const e=ye(.32,.09,.29,10314292);e.position.y=.065,t.add(e);const i=ye(.28,.012,.25,15517065);i.position.y=.116,t.add(i);const s=ye(.07,.022,.07,16768899);s.position.y=.135,t.add(s)}else if(n==="pudding"){t.add(cn());const e=ie(.11,.16,.19,16046470);e.position.y=.11,t.add(e);const i=ie(.112,.112,.012,10178863);i.position.y=.21,t.add(i)}else if(n==="yakisoba"){t.add(cn());for(let e=0;e<12;e++){const i=new W(new un(.07,.009,6,16),it(12158277));i.rotation.x=Math.PI/2,i.position.set(Math.sin(e*2)*.11,.04+e*.004,Math.cos(e*2)*.1),t.add(i)}for(let e=0;e<5;e++){const i=se(.035,9876576,1.4,.2,1);i.position.set(Math.cos(e)*.12,.1,Math.sin(e)*.12),t.add(i)}}else if(n==="ocha"){const e=ie(.06,.05,.12,6983502);e.position.y=.06,t.add(e);const i=new W(new Oi(.055,20),it(10207050));i.rotation.x=-Math.PI/2,i.position.y=.11,t.add(i)}else if(n==="omizu"){const e=ie(.05,.045,.14,it(13627391,{transparent:!0,opacity:.45,roughness:.05}));e.position.y=.07,t.add(e)}else if(n==="biiru"){const e=ie(.06,.06,.18,it(15905076,{transparent:!0,opacity:.85,roughness:.1}));e.position.y=.09,t.add(e);const i=se(.062,16777215,1,.4,1);i.position.y=.18,t.add(i);const s=new W(new un(.04,.012,6,12,Math.PI),it(15267071,{transparent:!0,opacity:.6}));s.rotation.z=-Math.PI/2,s.position.set(.06,.09,0),t.add(s)}else if(["kappamaki","tekkamaki"].includes(n)){t.add(cn(.27));const e=n==="kappamaki"?7320149:13120060;for(let i=0;i<4;i++){const s=(i%2-.5)*.17,a=(Math.floor(i/2)-.5)*.17,o=ie(.07,.07,.07,1517083);o.position.set(s,.07,a),t.add(o);const r=ie(.056,.056,.01,16645621);r.position.set(s,.108,a),t.add(r);const c=ie(.026,.026,.012,e);c.position.set(s,.112,a),t.add(c)}}else if(["tamago_nigiri","salmon_nigiri"].includes(n)){t.add(cn(.27));for(let e=0;e<2;e++){const i=(e-.5)*.2,s=ye(.15,.06,.08,16645621);s.position.set(i,.07,0),t.add(s);const a=ye(.17,.03,.095,n==="salmon_nigiri"?16747622:16237873);if(a.position.set(i,.115,0),t.add(a),n==="tamago_nigiri"){const o=ye(.03,.04,.1,1517083);o.position.set(i,.11,0),t.add(o)}}}else if(n==="inari"){t.add(cn(.27));for(let e=0;e<3;e++){const i=se(.09,13208124,1.1,.7,.9);i.position.set((e-1)*.17,.07,e%2*.05),t.add(i);const s=ie(.045,.045,.01,16645621);s.position.set((e-1)*.17,.125,e%2*.05),t.add(s)}}else if(n==="chirashi"){t.add(Vs(.24,.13,2903951,15921126));const e=ie(.21,.21,.04,16645621);e.position.y=.12,t.add(e);for(let i=0;i<5;i++){const s=ye(.08,.02,.05,16747622);s.position.set(Math.cos(i*1.3)*.1,.15,Math.sin(i*1.3)*.1),s.rotation.y=i,t.add(s)}for(let i=0;i<6;i++){const s=ye(.05,.012,.012,16237873);s.position.set(Math.cos(i*2.1)*.07,.16,Math.sin(i*2.1)*.07),s.rotation.y=i,t.add(s)}}return t}function pf(){const n=new Ot;for(let t=0;t<3;t++){const e=ye(.045,.035,.045,it(14086911,{transparent:!0,opacity:.75}));e.position.set((t-1)*.045,.244,t%2*.04-.02),n.add(e)}return n}function kx(){const n=new Ot,t=ye(.62,.35,.4,14012875);t.position.y=.175,n.add(t);const e=ye(.42,.24,.012,it(3157048,{emissive:0}));e.position.set(-.055,.18,.207),n.add(e);const i=ye(.025,.17,.03,7827836);i.position.set(.13,.18,.225),n.add(i);for(let s=0;s<2;s++){const a=ie(.035,.035,.025,6839152);a.rotation.x=Math.PI/2,a.position.set(.235,.12+s*.13,.22),n.add(a)}return n.userData.window=e,n}function Lx(n,t,e){if(!n)return;if(t!=="plain"){const s=ie(t==="grand"?.39:.3,.28,.02,t==="grand"?3420222:15262940);s.position.y=-.025,n.add(s)}const i=e==="tower"?7:e==="accent"?1:0;for(let s=0;s<i;s++){const a=se(.04,6329916,1.5,.25,.5);a.position.set(.035*Math.sin(s),.32+s*.025,0),a.rotation.y=s,n.add(a)}}function Ix(n){const t=xn[n],e=t==null?void 0:t.m,i=new Ot;if(!e)return i;let s;return e.s==="sphere"?s=se(1,e.c):e.s==="box"?s=ye(1,1,1,e.c):s=ie(1,1,1,e.c,18),s.scale.set(...e.sc),(e.s==="cyl"||e.s==="box")&&(s.scale.y=e.sc[1]),s.position.y=e.s==="sphere"?e.sc[1]:e.sc[1]/2,e.rz&&(s.rotation.z=e.rz,s.position.y=e.sc[0]),i.add(s),i}function Dx(n){const t=new Ot;switch(n){case"onigiri_raw":{const e=Ml(!1);t.add(e);break}case"tofu_cubes":for(let e=0;e<9;e++){const i=ye(.06,.06,.06,16776168);i.position.set(e%3*.07-.07,.03,Math.floor(e/3)*.07-.07),t.add(i)}break;case"chicken_pieces":for(let e=0;e<8;e++){const i=ye(.06,.04,.05,15911328);i.position.set((Math.random()-.5)*.25,.02,(Math.random()-.5)*.15),i.rotation.y=Math.random()*3,t.add(i)}break}return t}function Ux(){const n=new Ot,t=ye(.7,.04,.42,it(14267530,{roughness:.8}));return t.position.y=.02,n.add(t),n}function Nx(){const n=new Ot,t=it(12107463,{metalness:.7,roughness:.3}),e=new W(new Ce(.2,.18,.22,28,1,!0),new Qn({color:12107463,metalness:.7,roughness:.3,side:yn}));e.position.y=.11,e.castShadow=!0;const i=ie(.18,.18,.01,t);i.position.y=.005;const s=new W(new Oi(.19,28),it(15259816,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.16,s.visible=!1,n.add(e,i,s);for(const a of[-1,1]){const o=ye(.08,.02,.04,3355443);o.position.set(a*.24,.19,0),n.add(o)}return n.userData.liquid=s,n}function Ox(){const n=new Ot,t=ie(.17,.15,.05,it(2763306,{metalness:.5,roughness:.4}));t.position.y=.025;const e=ie(.015,.015,.35,7028509);e.rotation.z=Math.PI/2,e.position.set(.33,.05,0);const i=new W(new Oi(.15,28),it(12089914,{roughness:.15}));return i.rotation.x=-Math.PI/2,i.position.y=.045,i.visible=!1,n.add(t,e,i),n.userData.liquid=i,n}function Oa(n){const t=new Ot,e=n.color,i=se(.32,e,1,1.15,.9);i.position.y=.5,t.add(i);const s=se(.22,n.id==="maneki"?16777215:16774112,1,1.1,.6);s.position.set(0,.46,.2),t.add(s);const a=new Ot;a.position.y=1.08,t.add(a),a.add(se(.3,e,1.1,1,1));const o=n.id==="kuma"?14267276:n.id==="kitsune"||n.id==="shiba"?16774112:16777215,r=se(.12,o,1.3,.85,.9);r.position.set(0,-.08,.24),a.add(r);const c=se(.035,2236962);c.position.set(0,-.04,.35),a.add(c);for(const l of[-1,1]){const u=se(.04,new ae({color:1118481}),1,1.2,.6);u.position.set(l*.12,.04,.27),a.add(u);const h=se(.012,new ae({color:16777215}));h.position.set(l*.12+.012,.06,.3),a.add(h);const m=se(.04,new ae({color:16752560,transparent:!0,opacity:.6}),1,.6,.3);if(m.position.set(l*.2,-.06,.24),a.add(m),n.mask){const p=se(.08,3813416,1.2,.9,.4);p.position.set(l*.12,.03,.24),a.add(p),u.position.z=.29}let f;n.ear==="long"?(f=se(.07,e,1,3.2,.6),f.position.set(l*.1,.42,0),f.rotation.z=-l*.15):n.ear==="round"?(f=se(.09,e,1,1,.6),f.position.set(l*.22,.24,0)):(f=Gi(new W(new ms(.1,.2,12),it(e))),f.scale.z=.6,f.position.set(l*.18,.3,0),f.rotation.z=-l*.3),a.add(f);const g=se(.08,e,1,1.6,1);g.position.set(l*.3,.56,.1),g.rotation.z=l*.4,t.add(g),n.id==="maneki"&&l===1&&(g.position.set(.3,.95,.1),g.rotation.z=-.3,t.userData.wave=g);const _=se(.09,e,1.2,1.1,1.4);_.position.set(l*.14,.1,.08),t.add(_)}if(n.id==="maneki"){const l=Gi(new W(new un(.2,.03,8,24),it(14100029)));l.rotation.x=Math.PI/2,l.position.y=.86,t.add(l);const u=se(.05,it(16106818,{metalness:.8,roughness:.2}));u.position.set(0,.8,.2),t.add(u);const h=ie(.12,.12,.02,it(16106818,{metalness:.8,roughness:.2}));h.scale.set(.7,1,1.2),h.rotation.x=Math.PI/2,h.position.set(-.15,.55,.3),t.add(h)}return t.userData.head=a,t}function Yh(n){const t=new Ot;if(n==="deco_lantern"){const e=se(.2,it(14694959,{emissive:8392720,emissiveIntensity:.6}),1,1.3,1),i=ie(.1,.1,.05,2236962);i.position.y=.27;const s=ie(.1,.1,.05,2236962);s.position.y=-.27;const a=ie(.005,.005,.5,2236962);a.position.y=.5;const o=new fa(16744512,.8,3);t.add(e,i,s,a,o)}else if(n==="deco_noren"){const e=ie(.015,.015,1.4,7028509);e.rotation.z=Math.PI/2,t.add(e);for(let i=0;i<3;i++){const s=ye(.44,.55,.01,it(1914199,{side:yn}));s.position.set(-.46+i*.46,-.28,0),t.add(s);const a=se(.06,16777215,1,1,.2);a.position.set(-.46+i*.46,-.3,.01),t.add(a)}}else if(n==="deco_bonsai"){const e=ie(.12,.09,.08,3100527);e.position.y=.04,t.add(e);const i=ie(.02,.03,.18,5978654);i.position.y=.17,i.rotation.z=.3,t.add(i),[[0,.3,0,.1],[-.08,.26,.02,.07],[.08,.32,-.02,.07]].forEach(([s,a,o,r])=>{const c=se(r,4165439,1.3,.7,1);c.position.set(s,a,o),t.add(c)})}else if(n==="deco_maneki"){const e=Oa({id:"maneki",color:16777215,ear:"pointy"});e.scale.setScalar(.35),t.add(e),t.userData.wave=e.userData.wave}return t}function Kh(n="#fff",t=!0){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d"),s=i.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,n),s.addColorStop(t?.4:.9,n),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);const a=new Mi(e);return a.colorSpace=We,a}function vr(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Mi(i);return s.colorSpace=We,s}const gi=(n,t,e,i,s)=>new W(new te(n,t,e),it(i,s)),hr=(n,t,e)=>new W(new Vt(n,t),new ae({map:e,transparent:!0}));function mf(n,t,e="#ffffff"){return vr(512,200,(i,s,a)=>{i.clearRect(0,0,s,a);const o=3,r=s/o;for(let c=0;c<o;c++)i.fillStyle=n,i.fillRect(c*r+4,0,r-8,a-6),i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(c*r+4,a-26,r-8,20);i.fillStyle=e,i.font="bold 110px serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,s/2,a/2-8)})}function gf(n,t="#f1dcae",e="#3a2210",i=44){return vr(256,64+n.length*24,(s,a,o)=>{s.fillStyle=t,s.fillRect(0,0,a,o),s.strokeStyle="#6b4226",s.lineWidth=6,s.strokeRect(3,3,a-6,o-6),s.fillStyle=e,s.font=`bold ${i}px serif`,s.textAlign="center",s.textBaseline="middle",n.forEach((r,c)=>s.fillText(r,a/2,o/(n.length+1)*(c+1)))})}function _f(n,t){const e=new Ot,i=new W(new Ce(.22,.22,.5,20),it(n,{roughness:.6,emissive:n,emissiveIntensity:.25}));e.add(i);for(const a of[-.27,.27]){const o=new W(new Ce(.15,.15,.06,16),it(1710618));o.position.y=a,e.add(o)}const s=new W(new Vt(.3,.3),new ae({map:vr(64,64,(a,o,r)=>{a.fillStyle="#fff",a.font="bold 48px serif",a.textAlign="center",a.textBaseline="middle",a.fillText(t,o/2,r/2)}),transparent:!0}));return s.position.z=.225,e.add(s),e}function Fx(){const n=new Ot,t=new W(new Vt(14,10),it(14268810,{roughness:.8}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);for(let f=-7;f<8;f++){const g=new W(new Vt(.02,10),it(12096874));g.rotation.x=-Math.PI/2,g.position.set(f*.5,.002,0),n.add(g)}const e=new W(new Vt(14,6),it(15985884,{roughness:1}));e.position.set(0,3,-2.2),e.receiveShadow=!0,n.add(e);const i=gi(14,1.5,.05,12094034,{roughness:.7});i.position.set(0,.75,-2.17),n.add(i);for(let f=-7;f<8;f++){const g=gi(.02,1.5,.06,9200696);g.position.set(f*.5,.75,-2.15),n.add(g)}const s=new W(new Ce(.03,.03,3.4,8),it(3809808));s.rotation.z=Math.PI/2,s.position.set(-.1,3.3,-2),n.add(s);const a=hr(3.2,1.25,mf("#1f3a68","寿司"));a.position.set(-.1,2.65,-1.98),n.add(a),[["鮪","二貫"],["鮭","二貫"],["海老","二貫"],["玉子","二貫"]].forEach((f,g)=>{const _=hr(.5,.35000000000000003,gf(f));_.position.set(-3.05+g*.55,1.9,-2.14),n.add(_)});const r=gi(1.6,.05,.3,7029286);r.position.set(1.7,1.75,-2),n.add(r);const c=new W(new $e(.13,14,12),it(4876882,{roughness:.4}));c.position.set(1.2,1.92,-2),c.scale.y=.8,n.add(c),[3099258,16117988,12597547].forEach((f,g)=>{const _=new W(new Ce(.06,.07,.34,12),it(f,{roughness:.3}));_.position.set(1.55+g*.22,1.95,-2),n.add(_)});const l=_f(12597547,"寿");l.position.set(2.5,2.75,-1.2),n.add(l);const u=new Ot;u.position.set(1.6,1.08,-.2),u.add(gi(.8,.12,.4,15327440)),[15765648,15769690,16049856,15227466,15909424].forEach((f,g)=>{const _=gi(.11,.05,.08,16775920);_.position.set(-.3+g*.15,.085,0),u.add(_);const p=gi(.13,.03,.1,f);p.position.set(-.3+g*.15,.125,0),u.add(p)});const h=new W(new te(.8,.22,.42),new Qn({color:14676731,transparent:!0,opacity:.28,roughness:.1}));h.position.y=.2,u.add(h),n.add(u);const m=new W(new Ce(.07,.055,.1,14),it(16119280));return m.position.set(1.05,1.17,.35),n.add(m),n}function Bx(){const n=new Ot,t=new W(new Vt(14,10),it(5986904,{roughness:.9}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const e=new W(new Vt(14,6),it(8020564,{roughness:1}));e.position.set(0,3,-2.2),e.receiveShadow=!0,n.add(e);const i=vr(256,256,(_,p,d)=>{_.fillStyle="#f2efe8",_.fillRect(0,0,p,d),_.strokeStyle="#c9c4b8",_.lineWidth=3;for(let M=0;M<=8;M++)_.beginPath(),_.moveTo(0,M*32),_.lineTo(p,M*32),_.stroke(),_.beginPath(),_.moveTo(M*32,0),_.lineTo(M*32,d),_.stroke()});i.wrapS=i.wrapT=la,i.repeat.set(14,1.6);const s=new W(new Vt(14,1.6),new ae({map:i}));s.position.set(0,.8,-2.17),n.add(s);const a=gi(14,.06,.07,12131356);a.position.set(0,1.62,-2.14),n.add(a);const o=new W(new Ce(.03,.03,3.4,8),it(1118481));o.rotation.z=Math.PI/2,o.position.set(-.1,3.3,-2),n.add(o);const r=hr(3.2,1.25,mf("#b91c1c","拉麺"));r.position.set(-.1,2.65,-1.98),n.add(r),[["醤油","800"],["味噌","850"],["塩","800"],["豚骨","900"]].forEach((_,p)=>{const d=hr(.5,.35000000000000003,gf(_,"#1a1a1a","#f5e6a8",40));d.position.set(-3.05+p*.55,2.05,-2.14),n.add(d)});const l=gi(1.5,.05,.3,3815994);l.position.set(1.7,1.85,-2),n.add(l);for(let _=0;_<3;_++)for(let p=0;p<3;p++){const d=new W(new Ce(.11,.07,.07,16),it(p%2?16119280:12131356,{roughness:.3}));d.position.set(1.3+_*.4,1.92+p*.05,-2),n.add(d)}const u=_f(12131356,"麺");u.position.set(-2.5,2.7,-1.2),n.add(u);const h=new Ot;h.position.set(1.55,1.08,-.25);const m=(_,p,d)=>{const M=new W(new Ce(.045,.05,d,12),it(_,{roughness:.3}));return M.position.set(p,d/2,0),M};h.add(m(2236962,-.18,.2),m(8010514,-.06,.18),m(14211280,.06,.16));const f=new W(new te(.14,.12,.09),it(12131356));f.position.set(.22,.06,0),h.add(f);for(let _=0;_<4;_++){const p=gi(.012,.16,.012,15784096);p.position.set(.18+_*.03,.17,0),p.rotation.z=(_-1.5)*.06,h.add(p)}n.add(h);const g=new W(new Ce(.06,.05,.12,14),new Qn({color:14676731,transparent:!0,opacity:.5}));return g.position.set(1.05,1.14,.35),n.add(g),n}function zi(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Mi(i);return s.colorSpace=We,s}const yi=(n,t,e,i,s)=>new W(new te(n,t,e),it(i,s)),Ge=(n,t,e,i,s,a=16)=>new W(new Ce(n,t,e,a),it(i,s)),ji=(n,t,e)=>new W(new Vt(n,t),new ae({map:e,transparent:!0}));function su(n,t){const e=new W(new Vt(14,10),t?new Qn({map:t,roughness:.6}):it(n,{roughness:.85}));return e.rotation.x=-Math.PI/2,e.receiveShadow=!0,e}function vf(n){const t=new W(new Vt(14,6),it(n,{roughness:1}));return t.position.set(0,3,-2.2),t.receiveShadow=!0,t}function au(n,t,e,i,s,a,o="serif",r){return zi(n,t,(c,l,u)=>{e?(c.fillStyle=e,c.fillRect(0,0,l,u)):c.clearRect(0,0,l,u),r&&(c.strokeStyle=r,c.lineWidth=6,c.strokeRect(3,3,l-6,u-6)),c.fillStyle=i,c.font=`bold ${a}px ${o}`,c.textAlign="center",c.textBaseline="middle",c.fillText(s,l/2,u/2)})}function zx(n,t){const e=new Ot,i=new W(new $e(.2,18,14),it(n,{roughness:.6,emissive:n,emissiveIntensity:.35}));i.scale.y=1.25,e.add(i);for(const a of[-.26,.26]){const o=Ge(.1,.1,.05,1118481);o.position.y=a,e.add(o)}const s=ji(.24,.24,au(64,64,null,"#fff",t,46));return s.position.z=.2,e.add(s),e}function jx(){const n=new Ot;n.add(su(5913382)),n.add(vf(13481363));const t=yi(14,1.4,.05,4861468);t.position.set(0,.7,-2.17),n.add(t);for(const l of[-3.2,.2,3.4]){const u=yi(.2,6,.1,3810322);u.position.set(l,3,-2.12),n.add(u)}const e=yi(14,.22,.12,3810322);e.position.set(0,3.55,-2.1),n.add(e);const i=Ge(.03,.03,3.4,1118481,{},8);i.rotation.z=Math.PI/2,i.position.set(-.1,3.3,-2),n.add(i);const s=ji(3.2,1.2,zi(512,192,(l,u,h)=>{for(let m=0;m<3;m++)l.fillStyle="#7a1f1f",l.fillRect(m*(u/3)+4,0,u/3-8,h-6);l.fillStyle="#fff",l.font="bold 84px serif",l.textAlign="center",l.textBaseline="middle",l.fillText("居酒屋",u/2,h/2-6)}));s.position.set(-.1,2.65,-1.98),n.add(s),["焼き鳥","刺身","枝豆","ビール","唐揚げ"].forEach((l,u)=>{const h=ji(.2,.9,zi(64,256,(m,f,g)=>{m.fillStyle="#f3e6c4",m.fillRect(0,0,f,g),m.strokeStyle="#6b4226",m.lineWidth=4,m.strokeRect(2,2,f-4,g-4),m.fillStyle="#2a1608",m.font="bold 34px serif",m.textAlign="center",m.textBaseline="top",[...l].forEach((_,p)=>m.fillText(_,f/2,12+p*38))}));h.position.set(-2.3+u*.3,1.9,-2.13),n.add(h)});for(const[l,u]of[[2.7,-1.7],[2.2,-1.75]]){const h=Ge(.3,.3,.55,12094034,{roughness:.7});h.position.set(l,.28,u),n.add(h);for(const m of[.1,.46]){const f=Ge(.31,.31,.04,2763306);f.position.set(l,m,u),n.add(f)}}const a=yi(1.7,.05,.3,3810322);a.position.set(1.7,1.75,-2),n.add(a),[3099258,16117988,4160074,12597547,3099258,14263361].forEach((l,u)=>{const h=Ge(.055,.07,.34,l,{roughness:.3},12);h.position.set(1+u*.28,1.95,-2),n.add(h)}),[-2.4,-1.2,2.5].forEach(l=>{const u=zx(12597547,l<0?"酒":"飲");u.position.set(l,3,-1),n.add(u)});const o=Ge(.07,.065,.16,15909424,{roughness:.2},14);o.position.set(1,1.16,.36),n.add(o);const r=Ge(.07,.07,.04,16777215,{},14);r.position.set(1,1.26,.36),n.add(r);const c=Ge(.12,.1,.03,16117988,{},18);return c.position.set(1.5,1.1,.3),n.add(c),n}function Hx(){const n=new Ot,t=zi(128,128,(p,d,M)=>{p.fillStyle="#f2ede2",p.fillRect(0,0,d,M),p.fillStyle="#2f2b28",p.fillRect(0,0,d/2,M/2),p.fillRect(d/2,M/2,d/2,M/2)});t.wrapS=t.wrapT=la,t.repeat.set(14,10),n.add(su(0,t)),n.add(vf(15984328));const e=yi(14,1.3,.05,3103302);e.position.set(0,.65,-2.17),n.add(e);const i=yi(14,.06,.07,13214282);i.position.set(0,1.32,-2.14),n.add(i);const s=ji(1.3,.55,au(256,108,"#2f5a46","#f5e6a8","珈琲",72,"serif","#c9a24a"));s.position.set(-.2,3.05,-2.13),n.add(s);const a=ji(1.1,1,zi(220,200,(p,d,M)=>{p.fillStyle="#26332c",p.fillRect(0,0,d,M),p.strokeStyle="#8b5a3c",p.lineWidth=10,p.strokeRect(5,5,d-10,M-10),p.fillStyle="#f5f0e0",p.font="bold 34px serif",p.textAlign="center",["メニュー","珈琲","紅茶","抹茶"].forEach((y,b)=>p.fillText(y,d/2,50+b*40))}));a.position.set(-1.6,2.2,-2.13),n.add(a);const o=yi(1.7,.05,.3,5913382);o.position.set(1.6,1.8,-2),n.add(o);for(let p=0;p<5;p++){const d=Ge(.07,.05,.09,16447214,{roughness:.3},14);d.position.set(.9+p*.2,1.87,-2),n.add(d)}const r=yi(1.7,.05,.3,5913382);r.position.set(1.6,2.35,-2),n.add(r),[7028510,9132587,3807756,11037490].forEach((p,d)=>{const M=Ge(.09,.09,.22,p,{roughness:.3},14);M.position.set(1+d*.4,2.48,-2),n.add(M);const y=Ge(.095,.095,.04,13214282);y.position.set(1+d*.4,2.61,-2),n.add(y)});for(const p of[-1.2,1.4]){const d=Ge(.008,.008,.7,1118481,{},6);d.position.set(p,3.55,-.9),n.add(d);const M=new W(new ms(.22,.22,20,1,!0),it(3103302,{side:yn}));M.position.set(p,3.12,-.9),n.add(M);const y=new W(new $e(.06),new ae({color:16773568}));y.position.set(p,3.05,-.9),n.add(y)}const c=Ge(.16,.12,.28,11887930);c.position.set(-2.8,.14,-1.8),n.add(c);for(let p=0;p<5;p++){const d=new W(new $e(.14,10,8),it(4164170));d.position.set(-2.8+Math.sin(p*1.3)*.16,.5+p*.1,-1.8+Math.cos(p*1.3)*.1),d.scale.y=1.4,n.add(d)}const l=new Ot;l.position.set(1.55,1.08,-.2);const u=new W(new $e(.1,14,12),new Qn({color:14676731,transparent:!0,opacity:.55}));u.position.y=.12,l.add(u);const h=new W(new $e(.085,14,12),new Qn({color:14676731,transparent:!0,opacity:.55}));h.position.y=.38,l.add(h);const m=Ge(.01,.01,.5,3355443,{},6);m.position.set(.1,.25,0),l.add(m);const f=Ge(.03,.03,.06,12597547,{emissive:12597547,emissiveIntensity:.4},8);f.position.y=.02,l.add(f),n.add(l);const g=Ge(.065,.045,.08,16447214,{roughness:.3},14);g.position.set(1,1.14,.36),n.add(g);const _=Ge(.1,.1,.015,16447214,{},18);return _.position.set(1,1.1,.36),n.add(_),n}function Vx(){const n=new Ot;n.add(su(2761776));const t=zi(512,256,(f,g,_)=>{f.fillStyle="#1f2b25",f.fillRect(0,0,g,_);for(let p=0;p<40;p++)f.fillStyle=`rgba(${10+p*7%30},${14+p*11%24},${12+p*5%20},0.35)`,f.beginPath(),f.ellipse(p*97%g,p*53%_,18+p%5*10,10+p%4*8,0,0,Math.PI*2),f.fill();f.fillStyle="rgba(80,20,20,0.35)";for(let p=0;p<5;p++)f.fillRect(60+p*90,0,6,60+p*37%110)}),e=new W(new Vt(14,6),new Qn({map:t,roughness:1}));e.position.set(0,3,-2.2),n.add(e);const i=ji(14,.18,zi(512,16,(f,g,_)=>{for(let p=-2;p<40;p++)f.fillStyle=p%2?"#111":"#e6b800",f.beginPath(),f.moveTo(p*20,_),f.lineTo(p*20+12,0),f.lineTo(p*20+32,0),f.lineTo(p*20+20,_),f.fill()}));i.position.set(0,1.5,-2.15),i.rotation.z=.02,n.add(i);const s=ji(1.7,.7,zi(320,132,(f,g,_)=>{f.shadowColor="#ff2d6f",f.shadowBlur=24,f.fillStyle="#ff6fa0",f.font="bold 84px serif",f.textAlign="center",f.textBaseline="middle",f.fillText("食堂",g/2,_/2),f.fillText("食堂",g/2,_/2)}));s.position.set(0,3,-2.12),n.add(s);const a=new fa(16723311,1.2,4,1.6);a.position.set(0,2.9,-1.6),n.add(a);const o=Ge(.008,.008,.9,1118481,{},6);o.position.set(-1.8,3.5,-.8),n.add(o);const r=new W(new $e(.07),new ae({color:16771488}));r.position.set(-1.8,3,-.8),n.add(r);const c=yi(1.7,.05,.3,1710618);c.position.set(1.7,1.9,-2),n.add(c),[7143290,11562239,7143290,16739436,11562239].forEach((f,g)=>{const _=Ge(.08,.08,.22+g%2*.06,f,{roughness:.2,emissive:f,emissiveIntensity:.5},14);_.position.set(1+g*.3,2.04,-2),n.add(_)});const l=new fa(7143290,.8,3,1.6);l.position.set(1.7,2.2,-1.7),n.add(l);const u=ji(.9,.35,au(180,70,"#1a1a1a","#ff6f6f","営業中？",38,"serif","#ff6f6f"));u.position.set(-2.4,2.3,-2.12),n.add(u);const h=Ge(.07,.07,.18,7143290,{roughness:.2,emissive:7143290,emissiveIntensity:.4},12);h.position.set(1.55,1.17,-.25),n.add(h);const m=Ge(.04,.05,.2,11562239,{roughness:.2,emissive:11562239,emissiveIntensity:.4},10);return m.position.set(1.75,1.18,-.2),n.add(m),n}const bl=80;function ou(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Mi(i);return s.colorSpace=We,s}function Gx(){return ou(512,128,(n,t,e)=>{n.fillStyle="#1b8a4a",n.fillRect(0,0,t,e),n.fillStyle="#f08a24",n.fillRect(0,e-22,t,12),n.fillStyle="#ffffff",n.fillRect(0,e-10,t,10),n.fillStyle="#fff",n.font="bold 66px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("ねこマート",t/2,e/2-8)})}function Wx(){return ou(256,384,(n,t,e)=>{n.fillStyle="#dff1fb",n.fillRect(0,0,t,e);const i=["#e8503a","#3a8fe8","#f2c230","#47b86a","#b05ad0","#f08a24"];for(let s=0;s<4;s++){const a=20+s*92;n.fillStyle="#9fb7c4",n.fillRect(0,a+66,t,6);for(let o=0;o<9;o++)n.fillStyle=i[(o+s*2)%i.length],n.fillRect(8+o*27,a+6,20,58),n.fillStyle="#ffffffaa",n.fillRect(11+o*27,a+10,5,50),n.fillStyle="#fff",n.fillRect(8+o*27,a,20,8)}})}function $x(){return ou(128,80,(n,t,e)=>{n.fillStyle="#17323a",n.fillRect(0,0,t,e),n.fillStyle="#7fffd4",n.font="bold 26px monospace",n.textAlign="right",n.textBaseline="middle",n.fillText("¥ 0",t-10,e/2)})}function Jh(n,t,e,i,s,a=0){const o=new Ot,r=it(15921902,{roughness:.6}),c=new W(new te(n,t,.04),r);c.position.set(0,t/2,-e/2),o.add(c);for(const l of[-1,1]){const u=new W(new te(.04,t,e),r);u.position.set(l*n/2,t/2,0),o.add(u)}for(let l=0;l<=i;l++){const u=.12+l*((t-.16)/i),h=new W(new te(n,.03,e),r);if(h.position.set(0,u,0),o.add(h),l===i)break;const m=Math.floor(n/.2);for(let f=0;f<m;f++){const g=.14+(f+l+a)*7%3*.04,_=new W(new te(.15,g,e*.7),it(s[(f*3+l*5+a)%s.length],{roughness:.5}));_.position.set(-n/2+.12+f*.2,u+.015+g/2,0),_.castShadow=!0,o.add(_)}}return o}function Xx(){const n=new Ot;n.position.x=bl;const t=new W(new Vt(14,10),it(15328991,{roughness:.4}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);for(let v=-7;v<8;v++){const w=new W(new Vt(.015,10),it(13617856));w.rotation.x=-Math.PI/2,w.position.set(v*.8,.002,0),n.add(w)}const e=new W(new Vt(14,6),it(16514040,{roughness:1}));e.position.set(0,3,-2.2),e.receiveShadow=!0,n.add(e);const i=new W(new te(14,.22,.05),it(1804874));i.position.set(0,2.95,-2.17),n.add(i);const s=new W(new te(14,.08,.05),it(15764004));s.position.set(0,2.78,-2.17),n.add(s);const a=new W(new Vt(2.4,.6),new ae({map:Gx()}));a.position.set(.2,3.5,-2.14),n.add(a);for(const v of[-2.2,.2,2.6]){const w=new W(new te(1.6,.05,.18),new ae({color:16777215}));w.position.set(v,3.9,-.4),n.add(w)}const o=new fa(15924223,3.2,8,1.4);o.position.set(.2,3.4,.2),n.add(o);const r=new Ot;r.position.set(-2.3,0,-1.95);const c=new W(new te(1.7,2.3,.5),it(14474456,{roughness:.5}));c.position.y=1.15,r.add(c);const l=new W(new Vt(1.5,2.1),new ae({map:Wx()}));l.position.set(0,1.15,.26),r.add(l);const u=new W(new Vt(1.5,2.1),new ae({color:16777215,transparent:!0,opacity:.12}));u.position.set(0,1.15,.27),r.add(u),n.add(r);const h=[15224890,15909424,3837928,4700266,15764004,11557584,16777215],m=Jh(1.4,1.9,.4,4,h,0);m.position.set(.6,0,-1.95),n.add(m);const f=Jh(1.4,1.9,.4,4,h,3);f.position.set(2.1,0,-1.95),n.add(f);const g=new W(new te(3.6,1,.9),it(16053488,{roughness:.4}));g.position.set(0,.5,0),g.castShadow=g.receiveShadow=!0,n.add(g);const _=new W(new te(3.62,.12,.92),it(1804874));_.position.set(0,.5,0),n.add(_);const p=new W(new te(3.7,.08,1),it(4868682,{roughness:.3}));p.position.set(0,1.04,0),p.receiveShadow=!0,p.castShadow=!0,n.add(p);const d=new Ot;d.position.set(-1,1.08,-.1);const M=new W(new te(.5,.22,.4),it(2960685));M.position.y=.11,M.castShadow=!0,d.add(M);const y=new W(new te(.4,.26,.04),it(2960685));y.position.set(0,.35,-.1),y.rotation.x=-.25,d.add(y);const b=new W(new Vt(.34,.2),new ae({map:$x()}));b.position.set(0,.35,-.077),b.rotation.x=-.25,b.rotation.y=Math.PI,d.add(b),n.add(d);const C=new Ot;C.position.set(1.2,1.08,.12);const E=new W(new te(.9,.3,.45),it(16053488));E.position.y=.15,C.add(E);const A=new W(new te(.86,.22,.41),new Qn({color:13625845,transparent:!0,opacity:.45,roughness:.1}));A.position.y=.41,C.add(A),[14263361,15918784,12085810,14263361].forEach((v,w)=>{const O=new W(new $e(.07,10,8),it(v));O.position.set(-.3+w*.2,.36,0),C.add(O)}),n.add(C);const N=new W(new te(.38,.2,.28),it(15224890,{roughness:.6}));N.position.set(.3,1.18,.3),n.add(N);const X=new W(new Vt(2.2,.9),it(1804874));return X.rotation.x=-Math.PI/2,X.position.set(1.1,.004,1.4),n.add(X),n}const Sl=120;function yr(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Mi(i);return s.colorSpace=We,s}const _n=(n,t,e,i,s)=>new W(new te(n,t,e),it(i,s)),Ia=(n,t,e,i,s,a=16)=>new W(new Ce(n,t,e,a),it(i,s));function qx(){return yr(384,256,(n,t,e)=>{n.fillStyle="#3b2a1e",n.fillRect(0,0,t,e);for(let i=0;i<4;i++)for(let s=0;s<6;s++){const a=8+s*62,o=8+i*60;n.fillStyle="#241810",n.fillRect(a,o,54,52),n.fillStyle="#e0b84a",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText(`${i+2}0${s+1}`,a+27,o+16),(i*6+s)%3!==0&&(n.fillRect(a+22,o+24,10,22),n.beginPath(),n.arc(a+27,o+24,8,0,7),n.fill())}})}function Yx(){return yr(512,128,(n,t,e)=>{n.fillStyle="#1d3b5a",n.fillRect(0,0,t,e),n.strokeStyle="#e0b84a",n.lineWidth=6,n.strokeRect(6,6,t-12,e-12),n.fillStyle="#f5e6a8",n.font="bold 60px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("ホテル ねこ",t/2,e/2)})}function Kx(){return yr(128,128,(n,t,e)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,60,0,7),n.fill(),n.strokeStyle="#333",n.lineWidth=6,n.stroke(),n.lineWidth=5,n.beginPath(),n.moveTo(64,64),n.lineTo(64,24),n.moveTo(64,64),n.lineTo(92,74),n.stroke()})}function Jx(){const n=new Ot;n.position.x=Sl;const t=yr(128,128,(L,U,I)=>{L.fillStyle="#efe7d8",L.fillRect(0,0,U,I),L.fillStyle="#d6c8ad",L.fillRect(0,0,U/2,I/2),L.fillRect(U/2,I/2,U/2,I/2)});t.wrapS=t.wrapT=la,t.repeat.set(10,7);const e=new W(new Vt(14,10),new Qn({map:t,roughness:.3}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,n.add(e);const i=new W(new Vt(14,6),it(15853782,{roughness:1}));i.position.set(0,3,-2.2),i.receiveShadow=!0,n.add(i);const s=_n(14,1.1,.05,7031346);s.position.set(0,.55,-2.17),n.add(s);const a=_n(14,.05,.07,13214282);a.position.set(0,1.12,-2.14),n.add(a);const o=new W(new Vt(2.4,.6),new ae({map:Yx()}));o.position.set(.2,3.35,-2.13),n.add(o);const r=new W(new Vt(1.8,1.2),new ae({map:qx()}));r.position.set(1.55,2.1,-2.12),n.add(r);const c=new W(new Vt(.5,.5),new ae({map:Kx(),transparent:!0}));c.position.set(-1,2.7,-2.12),n.add(c);const l=_n(1.2,2.2,.08,12105912,{roughness:.25,metalness:.5});l.position.set(-2.8,1.1,-2.12),n.add(l);const u=_n(.02,2.2,.09,5592405);u.position.set(-2.8,1.1,-2.11),n.add(u);const h=Ia(.04,.04,.02,16757575,{emissive:16757575,emissiveIntensity:.6},10);h.rotation.x=Math.PI/2,h.position.set(-2,1.1,-2.1),n.add(h);for(const L of[-1.5,1.8]){const U=Ia(.008,.008,.8,1118481,{},6);U.position.set(L,3.6,-.6),n.add(U);const I=new W(new $e(.2,16,12),new ae({color:16773568}));I.position.set(L,3.15,-.6),n.add(I)}const m=new fa(16771520,3,9,1.4);m.position.set(.2,3.4,.4),n.add(m);const f=_n(3.6,1,.9,7031346,{roughness:.5});f.position.set(0,.5,0),f.castShadow=f.receiveShadow=!0,n.add(f);const g=_n(3.62,.08,.92,13214282);g.position.set(0,.88,0),n.add(g);const _=_n(3.7,.08,1,15722456,{roughness:.25});_.position.set(0,1.04,0),_.castShadow=_.receiveShadow=!0,n.add(_);const p=new W(new $e(.08,14,10,0,Math.PI*2,0,Math.PI/2),it(13214282,{metalness:.6,roughness:.3}));p.position.set(-.8,1.08,.25),n.add(p);const d=Ia(.015,.015,.04,2236962,{},8);d.position.set(-.8,1.17,.25),n.add(d);const M=_n(.38,.26,.03,2236962);M.position.set(1.2,1.28,-.1),M.rotation.x=-.15,n.add(M);const y=_n(.12,.1,.1,2236962);y.position.set(1.2,1.13,-.12),n.add(y);const b=_n(.3,.03,.22,1915738);b.position.set(.4,1.1,.25),n.add(b);const C=new Ot;C.position.set(2.7,0,.9);const E=Ia(.015,.015,1.1,13214282,{metalness:.6},6);for(const[L,U]of[[-.3,-.2],[.3,-.2],[-.3,.2],[.3,.2]]){const I=E.clone();I.position.set(L,.55,U),C.add(I)}const A=_n(.7,.04,.5,13214282,{metalness:.6});A.position.y=.12,C.add(A);const N=_n(.4,.3,.2,12597547);N.position.set(-.1,.29,0),C.add(N);const X=_n(.3,.22,.18,3108789);X.position.set(.18,.25,.02),C.add(X),n.add(C);const v=Ia(.22,.17,.4,11887930);v.position.set(-3.3,.2,-1.6),n.add(v);for(let L=0;L<6;L++){const U=new W(new $e(.2,10,8),it(4164170));U.position.set(-3.3+Math.sin(L*1.1)*.2,.7+L*.12,-1.6+Math.cos(L*1.1)*.12),U.scale.y=1.5,n.add(U)}const w=_n(1.5,.4,.6,8007226);w.position.set(-2.4,.2,1.4),n.add(w);const O=_n(1.5,.5,.15,8007226);O.position.set(-2.4,.55,1.1),n.add(O);const k=new W(new Vt(3.2,1.4),it(8007226,{roughness:1}));k.rotation.x=-Math.PI/2,k.position.set(.1,.005,1.5),n.add(k);const B=new W(new Vt(3,1.2),it(13214282,{roughness:1}));return B.rotation.x=-Math.PI/2,B.position.set(.1,.006,1.5),B.scale.set(.92,.8,1),n.add(B),n}const wl=-40,El=-80,fe=(n,t,e,i,s)=>{const a=new W(new te(n,t,e),typeof i=="number"?it(i,s):i);return a.castShadow=a.receiveShadow=!0,a},ni='"Noto Sans JP","Yu Gothic",sans-serif';function pa(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Mi(i);return s.colorSpace=We,s}function Tl(n,t=""){return pa(256,192,(e,i,s)=>{e.fillStyle="#12304a",e.fillRect(0,0,i,s),e.fillStyle="#4fd1c5",e.fillRect(0,0,i,36),e.fillStyle="#06222f",e.font=`bold 22px ${ni}`,e.textAlign="center",e.fillText("きっぷ 券売機",i/2,26),e.fillStyle="#fff",e.font=`bold 30px ${ni}`,e.fillText(n,i/2,100),e.fillStyle="#ffe680",e.font=`22px ${ni}`,e.fillText(t,i/2,148)})}function Zx(n,t,e){return pa(512,96,(i,s,a)=>{i.fillStyle="#1b3b66",i.fillRect(0,0,s,a),i.strokeStyle="#fff",i.lineWidth=4,i.strokeRect(4,4,s-8,a-8),i.fillStyle="#fff",i.font=`bold 38px ${ni}`,i.textAlign="center",i.fillText(n,100,62),i.fillText(t,256,62),i.fillText(e,412,62)})}function yf(n,t){return pa(160,256,(e,i,s)=>{e.fillStyle="#1b3b66",e.fillRect(0,0,i,s),e.strokeStyle="#fff",e.lineWidth=5,e.strokeRect(4,4,i-8,s-8),e.fillStyle="#fff",e.textAlign="center",e.font=`bold 92px ${ni}`,e.fillText(String(n),i/2,100),e.font=`bold 34px ${ni}`,e.fillText("番線",i/2,146),e.font=`22px ${ni}`,e.fillStyle="#ffe680",t.slice(0,3).forEach((a,o)=>e.fillText(a,i/2,188+o*26))})}function xf(n,t,e){return pa(256,64,(i,s,a)=>{i.fillStyle="#10151c",i.fillRect(0,0,s,a),i.fillStyle=e,i.fillRect(6,8,74,48),i.fillStyle="#fff",i.font=`bold 24px ${ni}`,i.textAlign="center",i.fillText(t,43,40),i.fillStyle="#ffd35c",i.font=`bold 34px ${ni}`,i.textAlign="left",i.fillText(`${n} 行き`,92,44)})}function Qx(){const n=new Ot,t=fe(.3,.42,.14,14242639);t.position.y=.26,n.add(t);const e=fe(.03,.2,.03,3355443);e.position.set(0,.57,0),n.add(e);for(const i of[-1,1]){const s=fe(.05,.05,.05,2236962);s.position.set(i*.1,.03,0),n.add(s)}return n}function t1(){const n=new Ot,t=new W(new Ce(.3,.32,.1,20),it(1784678)),e=new W(new Ce(.28,.3,.1,20),it(2379916));e.position.y=.09;const i=fe(.34,.02,.16,1057599);i.position.set(0,-.03,.3);const s=fe(.08,.06,.02,16106818);return s.position.set(0,.04,.31),n.add(t,e,i,s),n.position.set(0,.28,0),n}function e1(){const n=new Ot;n.position.x=wl;const t=new W(new Vt(14,10),it(14275788,{roughness:.8}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);for(let I=-6;I<7;I++){const F=new W(new Vt(.02,10),it(12433325));F.rotation.x=-Math.PI/2,F.position.set(I,.002,0),n.add(F)}const e=new W(new Vt(14,6),it(15331058,{roughness:1}));e.position.set(0,3,-2.3),n.add(e);const i=fe(14,.9,.05,3107496);i.position.set(0,.45,-2.27),n.add(i);for(const I of[-3,-1,1,3]){const F=fe(1.2,.05,.25,new ae({color:16776168}));F.position.set(I,3.6,-.6),n.add(F)}const s=new W(new Vt(3.4,.64),new ae({map:Zx("← 1番線","2番線 ↑","3番線 →")}));s.position.set(-.4,3.05,-1.9),n.add(s);const a=new W(new Vt(1.5,.95),new ae({map:pa(240,152,(I,F,ot)=>{I.fillStyle="#f4f1e6",I.fillRect(0,0,F,ot),I.strokeStyle="#2f6aa8",I.lineWidth=8,I.beginPath(),I.moveTo(20,100),I.lineTo(90,60),I.lineTo(150,90),I.lineTo(220,40),I.stroke(),I.strokeStyle="#e0763a",I.beginPath(),I.moveTo(30,30),I.lineTo(110,70),I.lineTo(200,120),I.stroke(),I.fillStyle="#fff",I.strokeStyle="#222",I.lineWidth=3,[[90,60],[150,90],[110,70],[20,100],[220,40]].forEach(([ut,tt])=>{I.beginPath(),I.arc(ut,tt,7,0,7),I.fill(),I.stroke()}),I.fillStyle="#222",I.font=`bold 18px ${ni}`,I.fillText("路線図",8,20)})}));a.position.set(-2.2,2,-2.22),n.add(a);const o=new W(new Oi(.28,32),new ae({map:pa(128,128,(I,F)=>{I.fillStyle="#fff",I.beginPath(),I.arc(64,64,62,0,7),I.fill(),I.strokeStyle="#222",I.lineWidth=6,I.stroke(),I.lineWidth=6,I.beginPath(),I.moveTo(64,64),I.lineTo(64,28),I.stroke(),I.lineWidth=4,I.beginPath(),I.moveTo(64,64),I.lineTo(92,74),I.stroke()})}));o.position.set(2.7,2.7,-2.22),n.add(o);const r=new Ot;r.position.set(1.5,0,-1.5);const c=fe(.95,1.55,.5,4018022);c.position.y=.78,r.add(c);const l=fe(1,.1,.56,2766407);l.position.y=1.58,r.add(l);const u=new W(new Vt(.62,.46),new ae({map:Tl("行き先を えらぶ")}));u.position.set(0,1.15,.255),u.rotation.x=-.12,r.add(u);for(let I=0;I<3;I++)for(let F=0;F<2;F++){const ot=fe(.18,.1,.04,[5231045,16106818,14710330][I]);ot.position.set(-.24+I*.24,.62-F*.15,.26),r.add(ot)}const h=fe(.4,.07,.04,16106818);h.position.set(0,.28,.26),r.add(h);const m=fe(.12,.12,.04,2236962);m.position.set(.3,.42,.26),r.add(m),n.add(r);const f=fe(.95,1.55,.5,4018022);f.position.set(2.7,.78,-1.5),n.add(f);const g=new W(new Vt(.62,.46),new ae({map:Tl("ICカード","チャージ")}));g.position.set(2.7,1.15,-1.245),g.rotation.x=-.12,n.add(g);for(const I of[-1.3,-2.1]){const F=fe(.28,1,1,13620956);F.position.set(I,.5,-.9),n.add(F);const ot=fe(.12,.05,.12,4054148);ot.position.set(I,1.03,-.6),n.add(ot);const ut=fe(.02,.4,.4,4886754,{transparent:!0,opacity:.7});ut.position.set(I+.2,.7,-.9),n.add(ut)}const _=new W(new Ce(.2,.15,.3,14),it(9132604));_.position.set(-3.2,.15,-1.5),_.castShadow=!0,n.add(_);const p=new W(new $e(.34,14,10),it(4886332));p.position.set(-3.2,.62,-1.5),p.castShadow=!0,n.add(p);const d=new Ot;d.position.x=El;const M=new W(new Vt(24,7),it(12040636,{roughness:.9}));M.rotation.x=-Math.PI/2,M.position.z=3.2,M.receiveShadow=!0,d.add(M);const y=fe(24,.35,.2,9409174);y.position.set(0,-.12,-.3),d.add(y);const b=fe(24,.02,.32,15909424);b.position.set(0,.012,.05),d.add(b);const C=new W(new Vt(24,4),it(5920336,{roughness:1}));C.rotation.x=-Math.PI/2,C.position.set(0,-.4,-2.3),d.add(C);for(const I of[-1.6,-2.4]){const F=fe(24,.06,.06,10133670);F.position.set(0,-.32,I),d.add(F)}for(let I=-11;I<12;I++){const F=fe(.14,.05,1.2,7232068);F.position.set(I,-.36,-2),d.add(F)}[[-6,3,2.6,10466248],[-3,4.4,3.4,11846868],[0,3.4,2.2,9414077],[3.5,5,3,11124176],[7,3.6,2.8,10006214]].forEach(([I,F,ot,ut])=>{const tt=fe(ot,F,1.2,ut,{roughness:1});tt.position.set(I,F/2-.4,-6),d.add(tt)});const E=fe(16,.15,5.2,11187132);E.position.set(0,3.7,1),d.add(E);for(const I of[-3.2,3.6]){const F=fe(.22,3.7,.22,9147548);F.position.set(I,1.85,.7),d.add(F)}const A=new W(new Vt(.6,.96),new ae({map:yf(1,[])}));A.position.set(-3.2,2.4,.83),d.add(A);for(const I of[-3.6,0,3.6]){const F=fe(1.2,.05,.25,new ae({color:16776168}));F.position.set(I,3.58,1),d.add(F)}const N=fe(1.4,.08,.4,8014378);N.position.set(1.6,.45,2.6),d.add(N);for(const I of[1,2.2]){const F=fe(.08,.45,.35,4473924);F.position.set(I,.22,2.6),d.add(F)}const X=new Ot;X.position.set(16,0,-1.9);const v=fe(8,2.1,1.5,15265266);v.position.y=1.2,X.add(v);const w=fe(8.02,.22,1.52,3120708);w.position.y=.85,X.add(w);const O=fe(7.8,.3,1.3,3817285);O.position.y=.1,X.add(O);for(let I=0;I<6;I++){if(I===2||I===3)continue;const F=fe(.9,.7,.04,2638428,{roughness:.2});F.position.set(-3.3+I*1.3,1.55,.77),X.add(F)}const k=fe(1.2,1.6,.05,13226457);k.position.set(-.7,1,.77),X.add(k);const B=fe(1.2,1.6,.05,13226457);B.position.set(.7,1,.77),X.add(B);const L=new W(new Vt(1.8,.45),new ae({map:xf("","","#2f9e44")}));L.position.set(-2.8,2,.775),X.add(L),d.add(X);const U=Qx();return{eki:n,pf:d,machineScreen:u,pfSign:A,train:X,destBoard:L,suit:U}}const Gs=40;class n1{constructor(t){this.canvas=t,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.dprMax=Math.min(window.devicePixelRatio||1,this.mobile?1.5:2),this.renderer=new iy({canvas:t,antialias:!(this.mobile&&window.devicePixelRatio>=2),powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dprMax),this.renderer.outputColorSpace=We,this.renderer.toneMapping=pd,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.mobile?Fl:dd,this.quality=2,this.perfN=0,this.perfT=0,this.perfCool=3,this.trauma=0,this.fovKick=0,this.baseFov=42,this.reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,this.shakeOn=!0,this.springs=[],this._v=new D,this.scene=new sy,this.scene.background=new re(16180168),this.scene.fog=new Kl(16180168,12,30),this.camera=new In(42,1,.1,100),this.camPos=new D,this.camLook=new D,this.camTargetPos=new D,this.camTargetLook=new D,this.particles=[],this.tweens=[],this.anchors=[],this.clock=new Wy,this.onCatTap=null,this.raycaster=new $y,this.lights(),this.buildKitchen(),this.buildRestaurant(),this.buildEkiScene(),this.kon=Xx(),this.scene.add(this.kon),this.hotel=Jx(),this.scene.add(this.hotel),this.stage="kitchen",this.cat=new qy,this.cat.root.position.set(-.35,0,-.6),this.kitchen.add(this.cat.root),this.texSteam=Kh("rgba(255,255,255,0.9)"),this.texSpark=Kh("#ffe680",!1),this.texHeart=new kh().load(Qo("ui_heart")),this.texCoin=new kh().load(Qo("ui_coin")),this.texHeart.colorSpace=this.texCoin.colorSpace=We,this.steamOn=null,this.setView("kitchen",!0),this.resize(),window.addEventListener("resize",()=>this.resize()),t.addEventListener("pointerdown",e=>this.tap(e)),this.renderer.setAnimationLoop(()=>this.frame()),document.addEventListener("visibilitychange",()=>{document.hidden?this.renderer.setAnimationLoop(null):(this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.frame()))})}lights(){const t=new Hy(16774368,9071184,1.1);this.scene.add(t);const e=new Uh(16770752,2);e.position.set(3,6,4),e.castShadow=!0,e.shadow.mapSize.set(this.mobile?512:1024,this.mobile?512:1024),e.shadow.camera.left=-4,e.shadow.camera.right=4,e.shadow.camera.top=4,e.shadow.camera.bottom=-2,e.shadow.bias=-5e-4,e.shadow.radius=4,this.sun=e,this.scene.add(e,e.target);const i=new Uh(12638463,.5);i.position.set(-4,3,2),this.scene.add(i)}buildKitchen(){const t=new Ot;this.kitchen=t,this.scene.add(t);const e=t.children.length,i=new W(new Vt(14,10),it(13016173,{roughness:.9}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);for(let A=-6;A<7;A++){const N=new W(new Vt(.02,10),it(10779730));N.rotation.x=-Math.PI/2,N.position.set(A*.6,.002,0),t.add(N)}const s=new W(new Vt(14,6),it(16247506,{roughness:1}));s.position.set(0,3,-2.2),s.receiveShadow=!0,t.add(s);const a=new W(new te(14,1,.05),it(9132604));a.position.set(0,.5,-2.17),t.add(a);const o=new W(new Vt(1.4,1),new ae({map:this.skyTexture()}));o.position.set(1.4,2.4,-2.14),t.add(o);const r=new W(new te(1.5,1.1,.04),it(7029286));r.position.set(1.4,2.4,-2.17),t.add(r);const c=new W(new te(.04,1,.06),it(7029286));c.position.set(1.4,2.4,-2.1),t.add(c);const l=new W(new te(1.4,.04,.06),it(7029286));l.position.set(1.4,2.4,-2.1),t.add(l),this.menuBoard=new W(new Vt(1.2,.9),new ae({map:this.menuTexture([])})),this.menuBoard.position.set(-1.3,2.45,-2.17),t.add(this.menuBoard);const u=new W(new te(1.8,.05,.3),it(9132604));u.position.set(-.2,1.75,-2.05),u.castShadow=!0,t.add(u);const h=[14263361,11037490,3807756,16115368,16777215,7127626];for(let A=0;A<6;A++){const N=new W(new Ce(.07,.07,.16+A%2*.06,14),it(h[A],{roughness:.3}));N.position.set(-.95+A*.22,1.86+A%2*.03,-2),N.castShadow=!0,t.add(N)}const m=new W(new ms(.3,.25,24,1,!0),it(2894892,{side:yn}));m.position.set(-.3,3,-.4),t.add(m);const f=new W(new $e(.08),new ae({color:16773568}));f.position.set(-.3,2.88,-.4),t.add(f);const g=new fa(16766362,3,5,1.5);g.position.set(-.3,2.8,-.4),t.add(g),this.kitDecor=t.children.slice(e).filter(A=>!A.isLight);const _=new W(new te(3.6,1,.9),it(7226409,{roughness:.7}));_.position.set(0,.5,0),_.castShadow=_.receiveShadow=!0,t.add(_);const p=new W(new te(3.7,.08,1),it(14730138,{roughness:.5}));p.position.set(0,1.04,0),p.receiveShadow=!0,p.castShadow=!0,t.add(p),this.counterY=1.08,this.kCounter=_,this.kTop=p,this.themes={},this.theme="home";const d=new W(new te(.6,.05,.5),it(3355443));d.position.set(-1.1,this.counterY+.02,-.1),t.add(d);const M=new W(new un(.15,.02,6,24),it(1118481));M.rotation.x=Math.PI/2,M.position.set(-1.1,this.counterY+.05,-.1),t.add(M),this.flame=new W(new un(.14,.02,6,24),new ae({color:4891647})),this.flame.rotation.x=Math.PI/2,this.flame.position.set(-1.1,this.counterY+.07,-.1),this.flame.visible=!1,t.add(this.flame),this.stations={};const y=Ux();y.position.set(.05,this.counterY,.05),t.add(y);const b=Nx();b.position.set(-1.1,this.counterY+.05,-.1),t.add(b);const C=Ox();C.position.set(-1.1,this.counterY+.05,-.1),C.visible=!1,t.add(C);const E=kx();E.position.set(-1.1,this.counterY+.05,-.1),E.visible=!1,t.add(E),this.stations={board:y,pot:b,pan:C,microwave:E},this.workItems=new Ot,t.add(this.workItems),this.servePos=new D(.75,this.counterY,.25),this.customerPos=new D(1.1,0,1),this.customerSpawn=new D(3.5,0,1.6),this.decoSlots={deco_lantern:[new D(1.4,2.9,-.6),t],deco_noren:[new D(-.2,3.35,-2.1),t],deco_bonsai:[new D(1.55,this.counterY,-.25),t],deco_maneki:[new D(.3,1.78,-2),t]},this.decoObjs={}}buildRestaurant(){const t=new Ot;t.position.x=Gs,this.rest=t,this.scene.add(t);const e=new W(new Vt(10,10),it(12165754,{roughness:1}));this.restParts={floor:e,posts:[],tags:[],r:t},e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let o=-4;o<5;o++){const r=new W(new Vt(.03,10),it(7035450));r.rotation.x=-Math.PI/2,r.position.set(o*.9,.002,0),t.add(r)}const i=new W(new Vt(10,6),it(15721156,{roughness:1}));i.position.set(0,3,-2.5),t.add(i),this.restParts.wall=i;for(let o=-5;o<=5;o++){const r=new W(new te(.08,6,.06),it(5978654));r.position.set(o*.9,3,-2.45),t.add(r),this.restParts.posts.push(r)}["おにぎり","味噌汁","親子丼","ラーメン","ビール"].forEach((o,r)=>{const c=new W(new Vt(.28,.9),new ae({map:this.tagTexture(o)}));c.position.set(-1.2+r*.4,2.6,-2.4),t.add(c),this.restParts.tags.push(c)});for(const o of[-1.8,1.8]){const r=Yh("deco_lantern");r.position.set(o,2.6,-1.8),t.add(r)}const a=new W(new te(1.8,.08,1.1),it(8014378,{roughness:.5}));a.position.set(0,.75,.3),a.castShadow=a.receiveShadow=!0,t.add(a);for(const[o,r]of[[-.8,-.15],[.8,-.15],[-.8,.75],[.8,.75]]){const c=new W(new te(.08,.75,.08),it(5978654));c.position.set(o,.375,r),t.add(c)}this.restParts.table=a,this.tableY=.79,this.tableItems=new Ot,t.add(this.tableItems),this.restCatPos=new D(-.95,0,-.55)}restTheme(t,e){const i=this.restParts,s={home:[12165754,15721156,5978654,8014378,16180168],izakaya:[3877406,6963496,2759184,4861468,2759956],cafe:[14207398,13624274,3103302,9067062,15984328],sushi:[14270346,16183264,10123850,13212250,15985884],ramen:[6972768,11020834,2824724,5913124,9073766]}[t]||null;if(!s)return this.restTheme("home",e);i.floor.material.color.setHex(s[0]),i.wall.material.color.setHex(s[1]),i.posts.forEach(a=>a.material.color.setHex(s[2])),i.table.material.color.setHex(s[3]),this.themeBg=s[4],this.scene.background.setHex(s[4]),this.scene.fog.color.setHex(s[4]),i.tags.forEach((a,o)=>{var r;a.visible=o<e.length,a.visible&&((r=a.material.map)==null||r.dispose(),a.material.map=this.tagTexture(e[o]),a.material.needsUpdate=!0)})}buildEkiScene(){const t=e1();this.eki=t.eki,this.pf=t.pf,this.ekiScreen_=t.machineScreen,this.pfSign=t.pfSign,this.train=t.train,this.trainBoard=t.destBoard,this.suitcase=t.suit,this.scene.add(t.eki,t.pf),this.ekiCatPos=new D(.45,0,-.7),this.pfCatPos=new D(-.6,0,.7),this.ekiStaffPos=new D(-1.7,0,-1.7),this.pfStaffPos=new D(1.3,0,.8)}setMachine(t,e=""){var s;const i=this.ekiScreen_.material;(s=i.map)==null||s.dispose(),i.map=Tl(t,e),i.needsUpdate=!0}setPlatform(t,e=[]){var s;const i=this.pfSign.material;(s=i.map)==null||s.dispose(),i.map=yf(t,e),i.needsUpdate=!0}async ekiStaffIn(t,e="eki",i=!0){this.customerOut(!0);const s=Oa(t);return i&&s.userData.head.add(t1()),s.position.copy(e==="pf"?this.pfStaffPos:this.ekiStaffPos),s.rotation.y=e==="pf"?-1.1:.7,s.scale.setScalar(.01),(e==="pf"?this.pf:this.eki).add(s),this.customer=s,this.popIn(s),s}async konStaffIn(t){this.customerOut(!0);const e=Oa(t);return e.position.set(-.35,0,-.6),e.rotation.y=.35,e.scale.setScalar(.01),this.kon.add(e),this.customer=e,this.popIn(e),e}async hotelStaffIn(t,e=!1){this.customerOut(!0);const i=Oa(t);return i.position.set(e?-.6:.55,0,e?1.15:-.75),i.rotation.y=e?2.7:.25,i.scale.setScalar(.01),this.hotel.add(i),this.customer=i,this.popIn(i),i}async trainArrive(t,e,i="#2f9e44"){var a;const s=this.trainBoard.material;(a=s.map)==null||a.dispose(),s.map=xf(t,e,i),s.needsUpdate=!0,this.train.position.x=16,await this.tween(this.train.position,{x:0},2.4),this.shake(.15)}async trainLeave(){await this.tween(this.train.position,{x:-18},2.2,null,"in"),this.train.position.x=16}skyTexture(){const t=document.createElement("canvas");t.width=128,t.height=96;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,96);i.addColorStop(0,"#8fd3ff"),i.addColorStop(1,"#ffe3b0"),e.fillStyle=i,e.fillRect(0,0,128,96),e.fillStyle="#ffffffcc",[[30,30,14],[44,26,12],[90,40,10],[100,36,8]].forEach(([a,o,r])=>{e.beginPath(),e.arc(a,o,r,0,7),e.fill()}),e.fillStyle="#7a9a7a",e.beginPath(),e.moveTo(0,96),e.lineTo(40,60),e.lineTo(70,80),e.lineTo(100,55),e.lineTo(128,75),e.lineTo(128,96),e.fill();const s=new Mi(t);return s.colorSpace=We,s}tagTexture(t){const e=document.createElement("canvas");e.width=80,e.height=256;const i=e.getContext("2d");i.fillStyle="#f3e3c0",i.fillRect(0,0,80,256),i.strokeStyle="#5b3a1e",i.lineWidth=6,i.strokeRect(3,3,74,250),i.fillStyle="#2a1a10",i.font='bold 38px "Noto Serif JP","Yu Mincho",serif',i.textAlign="center";const s=[...t],a=Math.min(48,220/s.length);s.forEach((r,c)=>i.fillText(r==="ー"?"｜":r,40,44+c*a));const o=new Mi(e);return o.colorSpace=We,o}menuTexture(t){const e=document.createElement("canvas");e.width=320,e.height=240;const i=e.getContext("2d");i.fillStyle="#2f3b2f",i.fillRect(0,0,320,240),i.strokeStyle="#8b5a3c",i.lineWidth=14,i.strokeRect(0,0,320,240),i.fillStyle="#fff",i.font='bold 30px "Noto Sans JP",sans-serif',i.textAlign="center",i.fillText("お品書き",160,46),i.font='24px "Noto Sans JP",sans-serif',i.textAlign="left";const s=Math.min(36,145/Math.max(1,t.length));i.font=`${t.length>4?16:24}px "Noto Sans JP",sans-serif`,t.forEach((o,r)=>{i.fillStyle=o.locked?"#889":"#ffeeaa",i.fillText(o.locked?"？？？":o.name,22,82+r*s,205),i.textAlign="right",i.fillText(o.locked?"":o.price+"円",298,82+r*s),i.textAlign="left"});const a=new Mi(e);return a.colorSpace=We,a}setMenu(t){var e;(e=this.menuBoard.material.map)==null||e.dispose(),this.menuBoard.material.map=this.menuTexture(t),this.menuBoard.material.needsUpdate=!0}setView(t,e=!1){var a;const i=this.view;this.view=t,t==="kitchen"&&(this.camTargetPos.set(.2,2.75,5),this.camTargetLook.set(.2,1.55,0)),t==="kon"&&(this.camTargetPos.set(bl+.2,2.75,5),this.camTargetLook.set(bl+.2,1.55,0)),t==="hotel"&&(this.camTargetPos.set(Sl+.2,2.6,5),this.camTargetLook.set(Sl+.1,1.45,0)),t==="cook"&&(this.camTargetPos.set(-.3,2.9,3.6),this.camTargetLook.set(-.4,1.35,-.1)),t==="serve"&&(this.camTargetPos.set(.6,2.5,4.2),this.camTargetLook.set(.5,1.4,.3)),t==="rest"&&(this.camTargetPos.set(Gs-.1,1.95,4),this.camTargetLook.set(Gs-.55,1.15,-.4)),t==="eki"&&(this.camTargetPos.set(wl+.5,2.1,4.4),this.camTargetLook.set(wl+.3,1.2,-.8)),t==="ekiPf"&&(this.camTargetPos.set(El-.2,1.9,4.6),this.camTargetLook.set(El-.2,1.2,-.8));const s=t==="eki"?14083826:t==="ekiPf"?12574965:t==="kon"?15004147:t==="hotel"?15721680:this.themeBg??16180168;this.scene.background.setHex(s),this.scene.fog.color.setHex(s),t==="restTable"&&(this.camTargetPos.set(Gs,2.75,3.1),this.camTargetLook.set(Gs,.75,.3)),this.fitAspect(),e?(this.camPos.copy(this.camTargetPos),this.camLook.copy(this.camTargetLook)):i!==t&&(this.fovKick=7),(a=this.onView)==null||a.call(this,t,e)}fitAspect(){const t=this.camera.aspect||.5;t<.9&&this.view==="cook"&&(this.camTargetPos.x+=.9,this.camTargetLook.x+=.9);const e=Math.max(this.view==="cook"?.45:0,(.9/t-1)*1.15),i=this.camTargetPos.clone().sub(this.camTargetLook);this.camTargetPos.copy(this.camTargetLook).add(i.multiplyScalar(1+e))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,e*.17,t,e),this.camera.updateProjectionMatrix(),this.setView(this.view||"kitchen",!0)}setTheme(t){["sushi","ramen","izakaya","cafe","dark"].includes(t)||(t="home"),this.theme=t;const e={sushi:Fx,ramen:Bx,izakaya:jx,cafe:Hx,dark:Vx};for(const s in e)t===s&&!this.themes[s]&&(this.themes[s]=e[s](),this.kitchen.add(this.themes[s])),this.themes[s]&&(this.themes[s].visible=t===s);this.kitDecor.forEach(s=>{s.visible=t==="home"});const i={home:[7226409,14730138],sushi:[12094034,15785136],ramen:[9116186,2829099],izakaya:[4861468,12094034],cafe:[3103302,15259056],dark:[2829099,4868682]}[t];this.kCounter.material.color.setHex(i[0]),this.kTop.material.color.setHex(i[1]),this.themeBg={home:16180168,sushi:15985884,ramen:9073766,izakaya:2759956,cafe:15984328,dark:1315354}[t],this.stage!=="kon"&&this.stage!=="hotel"&&!["eki","ekiPf"].includes(this.view)&&(this.scene.background.setHex(this.themeBg),this.scene.fog.color.setHex(this.themeBg))}catTo(t){this.cat.root.visible=t!=="konShop",this.stage=t==="kon"||t==="konShop"?"kon":t==="hotel"?"hotel":"kitchen",this.suitcase.visible=t==="eki"||t==="pf",t==="eki"||t==="pf"?((t==="eki"?this.eki:this.pf).add(this.cat.root),this.cat.root.position.copy(t==="eki"?this.ekiCatPos:this.pfCatPos),this.cat.root.rotation.y=t==="eki"?1.25:.9,this.cat.holding(null),this.suitcase.parent||this.cat.root.add(this.suitcase),this.suitcase.position.set(-.55,0,.1)):t==="hotel"?(this.hotel.add(this.cat.root),this.cat.root.position.set(-.6,0,1.15),this.cat.root.rotation.y=2.7,this.cat.holding(null),this.suitcase.visible=!0,this.suitcase.parent||this.cat.root.add(this.suitcase),this.suitcase.position.set(-.55,0,.1)):t==="konShop"?(this.kon.add(this.cat.root),this.cat.root.position.set(1.4,0,.5),this.cat.root.rotation.y=-1.1,this.cat.holding(null)):t==="kon"?(this.kon.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null)):t==="rest"?(this.rest.add(this.cat.root),this.cat.root.position.copy(this.restCatPos),this.cat.root.rotation.y=.6,this.cat.holding("pad")):(this.kitchen.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null))}catFace(t){const e={front:0,stove:-.6,board:.25,customer:.6}[t]??0;this.tween(this.cat.root.rotation,{y:e},.3);const i=t==="stove"?-.75:-.35;this.tween(this.cat.root.position,{x:i},.35)}useStation(t){this.stations.pot.visible=t!=="pan"&&t!=="microwave",this.stations.pan.visible=t==="pan",this.stations.microwave.visible=t==="microwave",this.station=t}clearWork(){this.workItems.clear(),this.stations.pot.userData.liquid.visible=!1,this.stations.pan.userData.liquid.visible=!1,this.flame.visible=!1,this.steamOn=null}placeIngredient(t,e,i){const s=Ix(t),o=this.station==="board"?new D(.05,this.counterY+.04,.05):new D(.05,this.counterY+.04,.05);return s.position.copy(o).add(new D((e-(i-1)/2)*.17,0,e%2*.08-.04)),this.popIn(s),this.workItems.add(s),s}showProp(t){const e={miso_soup:12946250,ramen_boil:15983544,pan_simmer:12089914,oyako_egg:16237873};if(e[t]){const s=this.stations[this.station==="pan"?"pan":"pot"];s.userData.liquid.visible=!0,s.userData.liquid.material.color.setHex(e[t]),this.flame.visible=!0,this.steamOn=s,this.workItems.children.forEach(a=>this.tween(a.scale,{x:.01,y:.01,z:.01},.25));return}const i=Dx(t);i.children.length&&(this.workItems.children.forEach(s=>this.tween(s.scale,{x:.01,y:.01,z:.01},.25)),i.position.set(.05,this.counterY+.04,.05),this.popIn(i),this.workItems.add(i))}heat(t){this.flame.visible=t,t&&(this.steamOn=this.stations[this.station==="pan"?"pan":"pot"])}microwaveLight(t){this.stations.microwave.userData.window.material.emissive.setHex(t?7160869:0)}styleDish(t,e){Lx(this.dish,t,e)}showDish(t){this.clearWork();const e=qh(t);return e.position.copy(this.servePos).add(new D(-.7,0,-.15)),e.scale.setScalar(1.6),this.popIn(e,1.6),this.kitchen.add(e),this.dish=e,this.burst(e.position.clone().add(new D(0,.3,0)),this.texSpark,24,.08),setTimeout(()=>this.punch(e,-.18),350),e}slideDishToCustomer(){this.dish&&(this.tween(this.dish.position,{x:this.servePos.x,z:this.servePos.z+.1},.5),this.tween(this.dish.scale,{x:1.3,y:1.3,z:1.3},.5))}removeDish(){if(!this.dish)return;const t=this.dish;this.dish=null,this.tween(t.scale,{x:.01,y:.01,z:.01},.3).then(()=>{var e;return(e=t.parent)==null?void 0:e.remove(t)})}async customerIn(t){this.customerOut(!0);const e=Oa(t);return e.position.copy(this.customerSpawn),e.rotation.y=-1.2,(this.stage==="kon"?this.kon:this.kitchen).add(e),this.customer=e,await this.walk(e,this.customerPos,1.1),this.punch(e,-.22),this.tween(e.rotation,{y:-.9},.3),e}async customerOut(t=!1){var i,s;const e=this.customer;if(e){if(this.customer=null,t){(i=e.parent)==null||i.remove(e);return}this.tween(e.rotation,{y:1.6},.3),await this.walk(e,this.customerSpawn.clone().add(new D(1,0,.5)),1),(s=e.parent)==null||s.remove(e)}}walk(t,e,i){const s=t.position.clone();return this.tween({k:0},{k:1},i,a=>{t.position.lerpVectors(s,e,a.k),t.position.y=Math.abs(Math.sin(a.k*Math.PI*6))*.06})}customerJump(){const t=this.customer;t&&(this.punch(t,.3),this.tween({k:0},{k:1},.6,e=>{t.position.y=Math.abs(Math.sin(e.k*Math.PI*2))*.25}).then(()=>this.punch(t,-.25)),this.shake(.25),this.burst(t.position.clone().add(new D(0,1.5,0)),this.texHeart,6,.05,.25))}coinsFromCustomer(){this.customer&&this.burst(this.customer.position.clone().add(new D(0,1.2,0)),this.texCoin,10,.06,.2)}setDeco(t){for(const e in this.decoSlots){const i=t.includes(e);if(i&&!this.decoObjs[e]){const s=Yh(e),[a,o]=this.decoSlots[e];s.position.copy(a),o.add(s),this.popIn(s),this.decoObjs[e]=s}else!i&&this.decoObjs[e]&&(this.decoObjs[e].parent.remove(this.decoObjs[e]),delete this.decoObjs[e])}}restClear(){this.tableItems.clear()}restServe(t,e){this.restClear(),t.forEach((i,s)=>{for(let a=0;a<e;a++){const o=qh(i),r=(a-(e-1)/2)*.5+(s?.18:-.05);o.position.set(r,this.tableY,s?.25:.5),s&&o.scale.setScalar(1.1),this.popIn(o,o.scale.x),this.tableItems.add(o)}}),this.burst(new D(Gs,this.tableY+.4,.4),this.texSpark,20,.07)}shake(t=.3){!this.shakeOn||this.reduceMotion||(this.trauma=Math.min(1,this.trauma+t))}punch(t,e=.2){if(!t||this.reduceMotion)return;let i=this.springs.find(s=>s.obj===t);i||(i={obj:t,base:t.scale.clone(),x:0,v:0},this.springs.push(i)),i.v+=e*22}updateSprings(t){for(let e=this.springs.length-1;e>=0;e--){const i=this.springs[e];i.v+=(-180*i.x-12*i.v)*t,i.x+=i.v*t;const s=i.obj;if(Math.abs(i.x)<.001&&Math.abs(i.v)<.01){s.scale.copy(i.base),this.springs.splice(e,1);continue}s.scale.set(i.base.x*(1-i.x*.5),i.base.y*(1+i.x),i.base.z*(1-i.x*.5))}}perfWatch(t){if(t>.05||(this.perfT+=t,this.perfN++,this.perfN<90))return;const e=this.perfT/this.perfN;if(this.perfT=0,this.perfN=0,this.perfCool>0){this.perfCool--;return}e>.026&&this.quality>0&&(this.quality--,this.quality===1?(this.dprMax=Math.max(1,this.dprMax*.75),this.renderer.setPixelRatio(this.dprMax),this.resize()):(this.sun.castShadow=!1,this.renderer.shadowMap.enabled=!1,this.scene.traverse(i=>{i.material&&(i.material.needsUpdate=!0)})),this.perfCool=2)}burst(t,e,i=12,s=.08,a=.35){this.quality<2&&(i=Math.ceil(i/2)),i=Math.min(i,Math.max(0,70-this.particles.length));for(let o=0;o<i;o++){const r=new Sh(new dl({map:e,transparent:!0,depthWrite:!1}));r.position.copy(t),r.scale.setScalar(s*(1.5+Math.random())*(e===this.texSpark?1:2.5));const c=Math.random()*Math.PI*2;r.userData={v:new D(Math.cos(c)*a*Math.random()*2,.5+Math.random()*a*3,Math.sin(c)*a*Math.random()),life:1,g:-2},this.scene.add(r),this.particles.push(r)}}hearts(){const t=new D;this.cat.head.getWorldPosition(t),this.burst(t.add(new D(0,.4,0)),this.texHeart,4,.05,.15)}steamPuff(t){if(this.particles.length>60)return;const e=this._v;t.getWorldPosition(e);const i=new Sh(new dl({map:this.texSteam,transparent:!0,opacity:.5,depthWrite:!1}));i.position.copy(e).add(new D((Math.random()-.5)*.2,.25,(Math.random()-.5)*.2)),i.scale.setScalar(.15),i.userData={v:new D((Math.random()-.5)*.1,.4,0),life:1.4,g:0,grow:.25},this.scene.add(i),this.particles.push(i)}popIn(t,e=1){return t.scale.setScalar(.01),this.tween(t.scale,{x:e,y:e,z:e},.35,null,"back")}tween(t,e,i,s=null,a="out"){const o={};for(const r in e)o[r]=t[r];return new Promise(r=>this.tweens.push({obj:t,from:o,to:e,dur:i,t:0,onUpdate:s,ease:a,res:r}))}tap(t){const e=this.canvas.getBoundingClientRect(),i=new ft((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(i,this.camera),this.raycaster.intersectObject(this.cat.root,!0)[0]&&this.onCatTap&&this.onCatTap()}screenOf(t,e=0){const i=this._v;return t.getWorldPosition(i),i.y+=e,i.project(this.camera),{x:(i.x*.5+.5)*window.innerWidth,y:(-i.y*.5+.5)*window.innerHeight,behind:i.z>1}}anchor(t,e,i){this.anchors.push({el:t,getObj:e,offsetY:i})}unanchor(t){this.anchors=this.anchors.filter(e=>e.el!==t)}frame(){var a,o;const t=this.clock.getDelta(),e=En()?0:Math.min(t,.05),i=1-Math.pow(.02,e);if(this.camPos.lerp(this.camTargetPos,i),this.camLook.lerp(this.camTargetLook,i),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.trauma>0){const r=this.trauma*this.trauma;this.camera.position.x+=(Math.random()-.5)*.16*r,this.camera.position.y+=(Math.random()-.5)*.16*r,this.camera.rotation.z+=(Math.random()-.5)*.035*r,this.trauma=Math.max(0,this.trauma-e*1.8)}this.fovKick>.01?(this.fovKick*=Math.pow(.004,e),this.camera.fov=this.baseFov+this.fovKick,this.camera.updateProjectionMatrix()):this.camera.fov!==this.baseFov&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()),this.sun.position.set(this.camLook.x+3,6,4),this.sun.target.position.set(this.camLook.x,0,0),this.cat.update(e),this.updateSprings(e),this.perfWatch(e);const s=this.clock.elapsedTime;this.customer&&(this.customer.userData.head.rotation.z=Math.sin(s*2)*.08,this.customer.userData.wave&&(this.customer.userData.wave.rotation.z=-.3+Math.sin(s*6)*.4)),(a=this.decoObjs.deco_maneki)!=null&&a.userData.wave&&(this.decoObjs.deco_maneki.userData.wave.rotation.z=-.3+Math.sin(s*4)*.4),this.decoObjs.deco_lantern&&(this.decoObjs.deco_lantern.rotation.z=Math.sin(s*.8)*.05),this.flame.visible&&this.flame.scale.setScalar(1+Math.sin(s*30)*.05),this.steamOn&&Math.random()<e*8&&this.steamPuff(this.steamOn);for(let r=this.tweens.length-1;r>=0;r--){const c=this.tweens[r];c.t+=e;let l=Math.min(c.t/c.dur,1);c.ease==="out"?l=1-Math.pow(1-l,3):c.ease==="back"&&(l=1+(1.70158+1)*Math.pow(l-1,3)+1.70158*Math.pow(l-1,2));for(const u in c.to)c.obj[u]=c.from[u]+(c.to[u]-c.from[u])*l;(o=c.onUpdate)==null||o.call(c,c.obj),c.t>=c.dur&&(this.tweens.splice(r,1),c.res())}for(let r=this.particles.length-1;r>=0;r--){const c=this.particles[r],l=c.userData;l.life-=e,l.v.y+=l.g*e,c.position.addScaledVector(l.v,e),l.grow&&c.scale.addScalar(l.grow*e),c.material.opacity=Math.max(0,Math.min(1,l.life))*(l.grow?.5:1),l.life<=0&&(this.scene.remove(c),c.material.dispose(),this.particles.splice(r,1))}if(this.anchors.length)for(const r of this.anchors){const c=r.getObj();if(!c){r.el.style.opacity=0;continue}const l=this.screenOf(c,r.offsetY),u=r.el.firstElementChild,h=12,m=document.querySelector("#hud.show"),f=document.querySelector("#taskbar.show"),g=Math.max((m==null?void 0:m.getBoundingClientRect().bottom)||0,(f==null?void 0:f.getBoundingClientRect().bottom)||0,h)+12,_=document.querySelector("#panel.show"),p=_==null?void 0:_.getBoundingClientRect(),d=innerWidth>innerHeight&&innerHeight<=500&&p&&!_.classList.contains("hub-panel"),M=d?p.left-h:innerWidth,y=p&&!d?p.top-12:innerHeight-h;u.style.maxWidth=`${Math.min(360,M-h*2)}px`,u.style.maxHeight=`${Math.max(44,y-g)}px`;const b=u.offsetWidth,C=u.offsetHeight,E=Math.max(b/2+h,Math.min(M-b/2-h,l.x)),A=Math.max(g+C,Math.min(y,l.y));u.style.setProperty("--tail-x",`${Math.max(16,Math.min(b-16,l.x-E+b/2))}px`),r.el.style.opacity=l.behind?0:1,r.el.style.transform=`translate(${E}px, ${A}px)`}this.renderer.render(this.scene,this.camera)}}const ru=/([一-鿿々〆ヶ]+)\{([^}]+)\}/g;function i1(n){return n.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function He(n){return i1(n).replace(/\^/g,"").replace(/ /g,"").replace(ru,"<ruby>$1<rt>$2</rt></ruby>")}function s1(n){return n.replace(ru,"$1").replace(/\^/g,"").replace(/ /g,"")}function a1(n,{forSpeech:t=!1}={}){let e=n.replace(ru,"$2");return t&&(e=e.replace(/\^は/g,"わ").replace(/\^へ/g,"え")),e}function Mf(n){return s1(n)}const o1=96;function r1(n){return n.replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-o1))}const Zh={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"o",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ゔ:"vu"},_c={ゃ:"a",ゅ:"u",ょ:"o"},Qh={a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"};function c1(n){let t=r1(a1(n)),e="";for(let i=0;i<t.length;i++){const s=t[i],a=t[i+1];if(s==="^"){const r=t[i+1];if(r==="は"){e+="wa",i++;continue}if(r==="へ"){e+="e",i++;continue}continue}if(s==="っ"){const r=Zh[a];r&&(e+=r.startsWith("ch")?"t":r[0]);continue}if(s==="ー"){const r=e[e.length-1];Qh[r]&&(e=e.slice(0,-1)+Qh[r]);continue}let o=Zh[s];if(o===void 0){e+=s==="、"?", ":s==="。"?". ":s==="？"?"?":s==="！"?"!":s;continue}if(_c[a]){const r=o.slice(0,-1);r==="sh"||r==="ch"||r==="j"?o=r+_c[a]:o=r+"y"+_c[a],i++}s==="ん"&&a&&/[あいうえおやゆよ]/.test(a)&&(o="n'"),e+=o}return e.replace(/\s+/g," ").trim()}function cu(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function bf(n,t){return`${t}_${cu(Mf(n))}`}const Sf="catcook_v1",Al={v:1,started:!1,level:1,xp:0,coins:0,served:0,shifts:0,firstDay:null,lastDay:null,streak:0,daysPlayed:0,lastGift:null,affection:0,lastPet:null,owned:["hat_chef"],wear:{hat:"hat_chef",neck:null},deco:[],stars:{},cooked:{},srs:{},restaurantDone:0,chapter:"home",chapterShifts:{},regularVisits:{},darkSecrets:{},darkRating:3,darkBest:0,settings:{furigana:!0,romaji:!0,yue:!0,subs:"show",bgm:!0,sfx:!0,shake:!0},jpLevel:null,lvStats:{},lvNudgeDismissed:-1,achievements:[]};let be=l1();function l1(){try{const n=localStorage.getItem(Sf);if(n)return wf(structuredClone(Al),JSON.parse(n))}catch{}return structuredClone(Al)}function wf(n,t){for(const e in t)t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&n[e]&&typeof n[e]=="object"?wf(n[e],t[e]):n[e]=t[e];return n}function de(){try{localStorage.setItem(Sf,JSON.stringify(be))}catch{}}function Q(){return be}function u1(){be=structuredClone(Al),de()}function ma(){const n=new Date;return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`}function h1(n,t){const e=n.split("-").map(Number),i=t.split("-").map(Number),s=new Date(e[0],e[1]-1,e[2]),a=new Date(i[0],i[1]-1,i[2]);return Math.round((a-s)/864e5)}function d1(){const n=ma(),t={newDay:!1,streakBroken:!1,gift:0};return be.firstDay||(be.firstDay=n),be.lastDay!==n&&(t.newDay=!0,be.lastDay&&h1(be.lastDay,n)===1?be.streak+=1:(be.lastDay&&be.streak>1&&(t.streakBroken=!0),be.streak=1),be.lastDay=n,be.daysPlayed+=1),be.lastGift!==n&&be.started&&(t.gift=30+Math.min(be.streak,7)*10,be.lastGift=n,be.coins+=t.gift),de(),t}function f1(){const n=new Date;return new Date(n.getFullYear(),n.getMonth(),n.getDate()+1)-n}const td=[0,30,80,160,270,420,620,880,1200,1600,2100];function Rl(n){return td[Math.min(n,td.length-1)]??n*500}function wi(n){be.xp+=n;let t=0;for(;be.xp>=Rl(be.level);)be.level++,t++;return de(),t}const p1=[0,2,10,60*12,60*24*2,60*24*5];function Ye(n){be.srs[n]||(be.srs[n]={box:0,due:Date.now(),seen:0,right:0,wrong:0}),be.srs[n].seen++,de()}function ge(n,t){const e=be.srs[n]||(be.srs[n]={box:0,due:0,seen:1,right:0,wrong:0});t?(e.box=Math.min(e.box+1,5),e.right++):(e.box=0,e.wrong++),e.due=Date.now()+p1[e.box]*6e4,de()}function Ef(n){var i;const t=Date.now(),e=n.map(s=>{const a=be.srs[s];if(!a)return{id:s,s:50+Math.random()*10};const o=(t-a.due)/6e4;return{id:s,s:(o>=0?100+Math.min(o,60):-10)+(5-a.box)*8+a.wrong*3+Math.random()*10}});return e.sort((s,a)=>a.s-s.s),(i=e[0])==null?void 0:i.id}let Wt=null,Ws,Ga,bi,Jo;const vc=new Map;let aa=null;const Tf=.26,m1=.08;let so=null,Zo=null;function g1(n){Zo=n}function _1(){if(Wt){Wt.state==="suspended"&&Wt.resume();return}Wt=new(window.AudioContext||window.webkitAudioContext),Ws=Wt.createGain(),Ws.gain.value=.9,Ws.connect(Wt.destination),Ga=Wt.createGain(),Ga.gain.value=.5,Ga.connect(Ws),bi=Wt.createGain(),bi.gain.value=0,bi.connect(Ws),x1(),Jo=Wt.createGain(),Jo.gain.value=1,Jo.connect(Ws),w1(),document.addEventListener("visibilitychange",()=>{Wt&&(document.hidden?Wt.suspend():Wt.resume())})}async function Af(n){if(vc.has(n))return vc.get(n);const t=fetch(`./audio/${n}.mp3`).then(e=>{if(!e.ok)throw new Error("404");return e.arrayBuffer()}).then(e=>Wt.decodeAudioData(e)).catch(()=>null);return vc.set(n,t),t}function Wa(n,t){return Wt?Af(bf(n,t)):Promise.resolve(null)}async function Ue(n,t="word",e=1){if(!Wt)return;v1();const i=await Af(bf(n,t));if(i){const s=Wt.createBufferSource();return s.buffer=i,s.playbackRate.value=e,s.connect(Jo),ed(!0),s.start(),aa=s,new Promise(a=>{s.onended=()=>{ed(!1),aa===s&&(aa=null),a()}})}if("speechSynthesis"in window){const s=new SpeechSynthesisUtterance(Mf(n));return s.lang="ja-JP",s.rate=.9*e,speechSynthesis.speak(s),new Promise(a=>{s.onend=a,setTimeout(a,4e3)})}}function v1(){if(aa){try{aa.stop()}catch{}aa=null}"speechSynthesis"in window&&speechSynthesis.cancel()}function ed(n){!bi||!Q().settings.bgm||bi.gain.setTargetAtTime(n?m1:Tf,Wt.currentTime,.1)}function Je(n,t,{type:e="sine",vol:i=.3,at:s=0,slide:a=0,out:o=null}={}){const r=Wt.currentTime+s,c=Wt.createOscillator(),l=Wt.createGain();c.type=e,c.frequency.setValueAtTime(n,r),a&&c.frequency.exponentialRampToValueAtTime(n*a,r+t),l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(i,r+.01),l.gain.exponentialRampToValueAtTime(.001,r+t),c.connect(l),l.connect(o||Ga),c.start(r),c.stop(r+t+.05)}function yc(n,{vol:t=.3,freq:e=2e3,q:i=1,at:s=0,type:a="bandpass"}={}){const o=Wt.currentTime+s,r=Math.floor(Wt.sampleRate*n),c=Wt.createBuffer(1,r,Wt.sampleRate),l=c.getChannelData(0);for(let f=0;f<r;f++)l[f]=(Math.random()*2-1)*(1-f/r);const u=Wt.createBufferSource();u.buffer=c;const h=Wt.createBiquadFilter();h.type=a,h.frequency.value=e,h.Q.value=i;const m=Wt.createGain();m.gain.value=t,u.connect(h),h.connect(m),m.connect(Ga),u.start(o)}function J(n){if(Zo==null||Zo(n),!(!Wt||!Q().settings.sfx))switch(n){case"tap":Je(880,.08,{type:"triangle",vol:.2});break;case"good":Je(784,.12,{type:"triangle"}),Je(1175,.2,{type:"triangle",at:.08});break;case"perfect":[784,988,1175,1568].forEach((t,e)=>Je(t,.18,{type:"triangle",vol:.25,at:e*.06}));break;case"bad":Je(220,.25,{type:"square",vol:.12,slide:.7});break;case"coin":Je(1319,.08,{type:"square",vol:.1}),Je(1760,.25,{type:"square",vol:.1,at:.07});break;case"chop":yc(.08,{vol:.6,freq:3e3,q:.8}),Je(140,.06,{vol:.3});break;case"pop":Je(500,.1,{slide:2,vol:.25});break;case"bubble":Je(300+Math.random()*300,.08,{slide:1.8,vol:.12});break;case"whoosh":yc(.3,{vol:.25,freq:800,q:.5});break;case"boil":for(let t=0;t<4;t++)Je(200+Math.random()*200,.1,{slide:2,vol:.1,at:t*.07});break;case"level":[523,659,784,1047,1319,1568].forEach((t,e)=>Je(t,.3,{type:"triangle",vol:.22,at:e*.09}));break;case"meow":Je(700,.35,{type:"sawtooth",vol:.06,slide:1.4}),Je(980,.3,{type:"sine",vol:.1,at:.15,slide:.6});break;case"purr":for(let t=0;t<10;t++)yc(.05,{vol:.25,freq:120,q:2,at:t*.07,type:"lowpass"});break;case"ding":Je(2093,.9,{type:"sine",vol:.22}),Je(2637,.7,{type:"sine",vol:.12,at:.02});break;case"door":Je(1568,.5,{vol:.12}),Je(1975,.6,{vol:.1,at:.15});break;case"rare":[1047,1319,1568,2093,1568,2093].forEach((t,e)=>Je(t,.25,{type:"triangle",vol:.2,at:e*.07}));break}}const Da=n=>440*Math.pow(2,(n-69)/12),y1=[{root:38,chord:[62,66,69,73],mel:[74,76,78,81,73]},{root:35,chord:[59,62,66,69],mel:[74,76,78,81,71]},{root:43,chord:[59,62,67,71],mel:[74,71,76,78,79]},{root:45,chord:[62,64,67,69],mel:[76,74,69,81,79]}],Rf={kitchen:{bpm:78,arp:.55,mel:.5,perc:0,pad:1,oct:0},cook:{bpm:102,arp:.8,mel:.55,perc:1,pad:.6,oct:0},rest:{bpm:68,arp:.35,mel:.6,perc:0,pad:1.2,oct:0}};let nd="kitchen",Cf="kitchen",is=0,xc=0,id=[];function x1(){const n=Wt.createBiquadFilter();n.type="lowpass",n.frequency.value=3400,n.Q.value=.3;const t=Wt.createGain();t.gain.value=.85;const e=Wt.createConvolver(),i=Math.floor(Wt.sampleRate*1.8),s=Wt.createBuffer(2,i,Wt.sampleRate);for(let o=0;o<2;o++){const r=s.getChannelData(o);for(let c=0;c<i;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/i,2.6)}e.buffer=s;const a=Wt.createGain();a.gain.value=.35,n.connect(t),t.connect(bi),n.connect(e),e.connect(a),a.connect(bi),so=n}function sd(n,t,e,i){for(const[s,a,o,r]of[[1,1,"triangle",e],[2,.25,"sine",e*.5],[4,.06,"sine",e*.2]]){const c=Wt.createOscillator(),l=Wt.createGain();c.type=o,c.frequency.value=n*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(i*a,t+.008),l.gain.exponentialRampToValueAtTime(5e-4,t+r),c.connect(l),l.connect(so),c.start(t),c.stop(t+r+.05)}}function M1(n,t,e,i){const s=Wt.createOscillator(),a=Wt.createGain();s.type="sine",s.frequency.value=n,s.detune.value=(Math.random()-.5)*8,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(i,t+e*.35),a.gain.linearRampToValueAtTime(5e-4,t+e),s.connect(a),a.connect(so),s.start(t),s.stop(t+e+.05)}function Mc(n,t,e,i){const s=Wt.createOscillator(),a=Wt.createGain();s.type="sine",s.frequency.value=n,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(i,t+.02),a.gain.exponentialRampToValueAtTime(5e-4,t+e),s.connect(a),a.connect(so),s.start(t),s.stop(t+e+.05)}function b1(n,t,e=!1){const i=Wt.createOscillator(),s=Wt.createGain();i.type="sine",i.frequency.setValueAtTime(e?1500:1e3,n),i.frequency.exponentialRampToValueAtTime(e?900:600,n+.05),s.gain.setValueAtTime(t,n),s.gain.exponentialRampToValueAtTime(5e-4,n+.07),i.connect(s),s.connect(so),i.start(n),i.stop(n+.1)}function S1(n){const t=Rf[nd],e=30/t.bpm,i=Math.floor(xc/8)%4,s=xc%8,a=y1[i];if(s===0&&(nd=Cf,Mc(Da(a.root),n,e*7,.55),a.chord.forEach((r,c)=>M1(Da(r-12),n+c*.03,e*8.5,.07*t.pad))),s===4&&Mc(Da(a.root+7),n,e*3,.35),[0,2,3,5,6,7].includes(s)&&Math.random()<t.arp+(s===0?1:0)){const r=a.chord[(s*3+i)%a.chord.length];sd(Da(r),n,e*4,.16)}if(s%2===0||s===3||s===7){let r=null;i%2===0?((Math.random()<t.mel||s===0)&&(r=a.mel[Math.floor(Math.random()*a.mel.length)]),id[s]=r):(r=id[s]??null,r!=null&&Math.random()<.2&&(r=a.mel[Math.floor(Math.random()*a.mel.length)])),r!=null&&sd(Da(r),n,e*3,.2)}return t.perc&&(s%2===1&&b1(n,.09,s===3||s===7),(s===0||s===4)&&Mc(70,n,.12,.5)),xc++,e}function w1(){is=Wt.currentTime+.2,setInterval(()=>{if(!document.hidden)for(is<Wt.currentTime-.5&&(is=Wt.currentTime+.1);is<Wt.currentTime+.25;)Q().settings.bgm?is+=S1(is):is+=.25},80),Pf(Q().settings.bgm)}function Pf(n){bi&&bi.gain.setTargetAtTime(n?Tf:0,Wt.currentTime,.3)}function E1(n){Rf[n]&&(Cf=n)}const he=(n,t=document)=>t.querySelector(n);function x(n,t={},...e){const i=document.createElement(n);for(const[s,a]of Object.entries(t))s==="class"?i.className=a:s==="html"?i.innerHTML=a:s.startsWith("on")?i.addEventListener(s.slice(2),a):s==="style"?i.style.cssText=a:i.setAttribute(s,a);for(const s of e.flat())s!=null&&i.append(s.nodeType?s:document.createTextNode(s));return dr(i),i}function lu(){const n=Q().settings;document.body.classList.toggle("no-furi",!n.furigana),document.body.classList.toggle("no-roma",!n.romaji),document.body.classList.toggle("no-yue",!n.yue),document.body.classList.toggle("large-text",!!n.largeText)}function fn(n,{yue:t="",voice:e="word",size:i="",hidden:s=!1,autoplay:a=!1}={}){const o=x("div",{class:`jp ${i}`}),r=x("div",{class:"jp-text",html:He(n)}),c=x("div",{class:"jp-roma"},c1(n)),l=t?x("div",{class:"jp-yue"},t):null,u=x("button",{class:"spk","aria-label":"再聽",onclick:m=>{m.stopPropagation(),J("tap"),Ue(n,e)}},"🔊"),h=x("div",{class:"jp-body"},r,c,l);return o.append(h,u),s&&(o.classList.add("veiled"),h.addEventListener("click",()=>o.classList.remove("veiled"),{once:!0})),a&&Ue(n,e),o}function mn(){const n=Q();he("#lv").textContent=n.level;const t=Rl(n.level-1),e=Rl(n.level);he("#xpbar i").style.width=`${Math.max(0,Math.min(1,(n.xp-t)/(e-t)))*100}%`,he("#coins b").textContent=n.coins,he("#streak b").textContent=n.streak,he("#streak").classList.toggle("hot",n.streak>=2)}function kf(n){he("#hud").classList.toggle("show",n)}function Ke(...n){const t=he("#panel");return t.innerHTML="",t.classList.remove("hub-panel","sneak-panel"),t.scrollTop=0,t.append(...n.flat().filter(e=>e!=null&&e!==!1)),t.classList.add("show"),t}function an(){he("#panel").classList.remove("show")}function Fe(n,{title:t=null,cols:e=1,extra:i=null}={}){return new Promise(s=>{const a=x("div",{class:`choices cols${e}`});let o=!1;n.forEach(r=>{const c=x("button",{class:`choice ${r.cls||""}`,type:"button"});r.el?c.append(r.el):(c.innerHTML=r.label,dr(c)),c.addEventListener("click",()=>{o||(o=!0,J("tap"),s({value:r.value,button:c,grid:a}))}),a.append(c)}),Ke(...[t,i,a].filter(Boolean))})}function ii(n="繼續 ▶",...t){return new Promise(e=>{const i=x("button",{class:"btn primary big",onclick:()=>{J("tap"),e()}},n);Ke(...t,i)})}const Cl=new Set;function Ft(n,t,e,i,s,{hidden:a=!1,play:o=!0}={}){kt(t);const r=x("div",{class:`bubble ${t}`});r.append(fn(e,{yue:i,voice:s,hidden:a}));const c=x("div",{class:"bubble-anchor","data-who":t},r);he("#bubbles").append(c),Cl.add(c),c._world=n;const l=t==="cat"?()=>n.cat.head:()=>{var u;return(u=n.customer)==null?void 0:u.userData.head};return n.anchor(c,l,t==="cat"?.75:.5),requestAnimationFrame(()=>r.classList.add("in")),o?(t==="cat"&&n.cat.setMode("talk"),Ue(e,s).then(async()=>{await Jt(),t==="cat"&&n.cat.mode==="talk"&&n.cat.setMode("idle")})):Promise.resolve()}function kt(n){for(const t of[...Cl])(!n||t.dataset.who===n)&&(t._world.unanchor(t),t.remove(),Cl.delete(t))}function Te(n,t=2600){const e=he("#hint");e.textContent=n,e.classList.add("show"),clearTimeout(e._t),t&&(e._t=setTimeout(()=>e.classList.remove("show"),t))}function T1(){he("#hint").classList.remove("show")}function Pe(n,t=2200,e=""){const i=x("div",{class:`toast ${e}`,html:n});he("#toasts").append(i),setTimeout(()=>i.classList.add("out"),t),setTimeout(()=>i.remove(),t+500)}function Se(n,t=""){const e=x("div",{class:`popword ${t}`},n);document.body.append(e),setTimeout(()=>e.remove(),900)}function Vn(n,t={x:innerWidth/2,y:innerHeight*.4}){const e=he("#coins").getBoundingClientRect(),i=Math.min(12,Math.max(3,Math.round(n/15)));for(let s=0;s<i;s++){const a=x("div",{class:"flycoin"},"🪙");a.style.left=t.x+"px",a.style.top=t.y+"px",document.body.append(a);const o=(Math.random()-.5)*120,r=-40-Math.random()*60;a.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${o}px,${r}px) scale(1.3)`,offset:.35},{transform:`translate(${e.x+10-t.x}px,${e.y+8-t.y}px) scale(0.6)`}],{duration:700+s*60,easing:"cubic-bezier(.5,0,.6,1)"}).onfinish=()=>{a.remove(),J("coin"),he("#coins").classList.remove("bump"),he("#coins").offsetWidth,he("#coins").classList.add("bump")}}}function Ei(n,t,{onClose:e=null,wide:i=!1,footer:s=null}={}){const a=he("#modal");tr("modal",!0),a.innerHTML="";let o=!1;const r=()=>{o||(o=!0,a.classList.remove("show"),tr("modal",!1),e==null||e())};a._close=r;const c=x("div",{class:`card ${i?"wide":""}`},x("div",{class:"card-head"},x("h2",{html:n}),x("button",{class:"x","aria-label":"關閉",onclick:()=>{J("tap"),r()}},"✕")),x("div",{class:"card-body"},t),s?x("div",{class:"card-footer"},s):null);return dr(c),a.append(c),a.classList.add("show"),a.onclick=l=>{l.target===a&&r()},{close:r,card:c}}function Lf(){var n,t;(t=(n=he("#modal"))._close)==null||t.call(n)}function If(n,t){const e=he("#taskbar");e.replaceChildren(x("button",{class:"mission-btn",onclick:()=>Ei("📋 今次任務",x("p",{class:"mission-details"},t))},`📋 ${n} · 詳情`)),e.classList.add("show")}function Js(n){const t=he("#fade");return t.classList.add("on"),Jt(520).then(async()=>{await n(),await Jt(80),t.classList.remove("on"),await Jt(520)})}function Zt(n){n=[...n];for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}const De=n=>n[Math.floor(Math.random()*n.length)],Dn=[{id:"onigiri",dish:"onigiri",price:120,unlock:{level:1},station:"board",serves:"2 個",time:"10 分鐘",ingredients:[["gohan","熱白飯 1 碗（約 150g）"],["shio","鹽 少少（一撮）"],["umeboshi","酸梅 1 粒（或三文魚碎）"],["nori","紫菜 1 塊（剪半）"],["mizu","凍水 少少（濕手用）"]],howto:["雙手沾水，再喺手掌抹少少鹽。","攞一半飯放手心，中間整個窿，放酸梅。","用另一半飯蓋住，雙手合埋輕輕揸，轉 3–4 次整成三角形。","唔好揸太實！外實內鬆先好食。","最後包上紫菜。想紫菜脆，食之前先包。"],steps:[{type:"pick",need:["gohan","shio","umeboshi","nori"],decoys:["tofu","tamago","negi"],jp:"まず 材料{ざいりょう}を 選{えら}んでにゃ",yue:"首先揀材料喵",tip:"聽讀音，揀啱嘅材料。"},{type:"mash",taps:10,time:5,anim:"press",verb:"nigiru",add:["onigiri_raw"],jp:"三角{さんかく}に 握{にぎ}って",yue:"揸成三角形",tip:"狂撳！但真係整嘅時候要輕力，外實內鬆。"},{type:"timing",rounds:1,zone:.24,anim:"wrap",verb:"noseru",jp:"海苔{のり}を 巻{ま}いて",yue:"包紫菜",tip:"撳準！紫菜要喺中間。"}]},{id:"misoshiru",dish:"misoshiru",price:150,unlock:{level:2},station:"pot",serves:"2 碗",time:"10 分鐘",ingredients:[["mizu","水 400ml"],["dashi","日式高湯粉 1 茶匙（或昆布 + 木魚自己煲）"],["tofu","豆腐 半盒（約 150g）"],["wakame","乾海帶芽 1 湯匙"],["miso","味噌 2 湯匙"],["negi","蔥 少少"]],howto:["水同高湯粉落煲，中火煮滾。","豆腐切 1.5cm 粒，同海帶芽一齊落，煮 1 分鐘。","熄火！用湯殼盛味噌，喺湯入面慢慢攪溶。","重點：味噌落咗之後唔好再滾，滾咗香味會走晒。","最後灑蔥花。"],steps:[{type:"pick",need:["dashi","tofu","wakame","miso"],decoys:["gohan","shoyu","chashu"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"高湯係日本菜嘅靈魂。"},{type:"timing",rounds:3,zone:.2,anim:"chop",verb:"kiru",add:["tofu_cubes"],jp:"豆腐{とうふ}を 切{き}って",yue:"切豆腐",tip:"撳準綠色位，切 3 刀。"},{type:"hold",zone:[.55,.8],anim:"stir",verb:"tokasu",add:["miso_soup"],jp:"火{ひ}を 止{と}めて、味噌{みそ}を 溶{と}かして",yue:"熄火，溶味噌",tip:"長按加熱，喺綠色位放手。太熱 = 滾瀉，味噌香味會走！"}]},{id:"oyakodon",dish:"oyakodon",price:280,unlock:{level:3},station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["toriniku","雞髀肉 100g"],["tamanegi","洋蔥 1/4 個"],["tamago","雞蛋 2 隻"],["dashi","高湯 60ml"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"],["satou","砂糖 1 茶匙"],["gohan","熱白飯 1 碗"]],howto:["雞肉切一口大小，洋蔥切薄片。","細平底鑊落高湯、豉油、味醂、砂糖，煮滾。","落洋蔥同雞肉，中火煮 5 分鐘至熟。","雞蛋輕輕打散（唔好打太勻），淋 2/3 落去，冚蓋 30 秒。","再淋餘下蛋液，半熟就熄火，即刻滑落飯面。"],steps:[{type:"pick",need:["toriniku","tamanegi","tamago","shoyu"],decoys:["tofu","nori","moyashi"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"親子 = 雞（親）+ 蛋（子），幾得意。"},{type:"timing",rounds:3,zone:.18,anim:"chop",verb:"kiru",add:["chicken_pieces"],jp:"鶏肉{とりにく}を 切{き}って",yue:"切雞肉",tip:"一口大小就啱。"},{type:"stir",turns:3,anim:"stir",verb:"niru",add:["pan_simmer"],jp:"だしで 煮{に}て",yue:"用高湯煮",tip:"手指喺圓圈度轉圈！"},{type:"hold",zone:[.4,.62],anim:"pour",verb:"tamago",add:["oyako_egg"],jp:"卵{たまご}を 入{い}れて、半熟{はんじゅく}に",yue:"落蛋，要半熟",tip:"半熟先好食，唔好煮過龍！"}]},{id:"ramen",dish:"ramen",price:380,unlock:{day:2},station:"pot",serves:"1 碗",time:"20 分鐘（簡易版）",ingredients:[["men","拉麵（新鮮或乾麵）1 份"],["dashi","雞湯 300ml"],["shoyu","豉油 2 湯匙"],["mirin","味醂 1 茶匙"],["ninniku","蒜頭 1 粒（磨蓉）"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥、紫菜 適量"]],howto:["湯底：雞湯加蒜蓉煮滾，熄火。","碗底先落豉油同味醂（呢個叫「タレ」）。","另一煲大滾水烚麵，跟包裝時間（通常 1–2 分鐘）。","熱湯沖入碗攪勻，麵瀝乾放入碗。","鋪叉燒、半隻溏心蛋（滾水 6.5 分鐘再浸冰水）、蔥同紫菜。"],steps:[{type:"pick",need:["men","chashu","tamago","negi"],decoys:["tofu","umeboshi","satou"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"拉麵嘅配料叫「トッピング」。"},{type:"hold",zone:[.6,.85],anim:"stir",verb:"yuderu",add:["ramen_boil"],jp:"麺{めん}を ゆでて",yue:"烚麵",tip:"水要大滾！"},{type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"スープを 混{ま}ぜて",yue:"攪勻湯",tip:"湯同タレ要撈勻。"},{type:"timing",rounds:2,zone:.18,anim:"chop",verb:"noseru",jp:"トッピングを のせて",yue:"放配料",tip:"靚唔靚就睇呢步！"}]}];Dn.push(...nf,...Ks);const ad=[{id:"tempura",emoji:"🍤",jp:"天{てん}ぷら",yue:"天婦羅"},{id:"curry",emoji:"🍛",jp:"カレーライス",yue:"咖喱飯"},{id:"gyoza",emoji:"🥟",jp:"餃子{ぎょうざ}",yue:"餃子"},{id:"tamagoyaki",emoji:"🍳",jp:"卵焼{たまごや}き",yue:"玉子燒"}];function A1(n){return Dn.find(t=>t.id===n)}const si=[{id:0,icon:"🌱",name:"零基礎",desc:"假名都未識",learn:"單字加「ください」，由最簡單開始"},{id:1,icon:"🌿",name:"N5",desc:"識假名、簡單字、基本句型",learn:"完整禮貌句：「〜をお願いします」"},{id:2,icon:"🌳",name:"N4–N3",desc:"想練聽力同實用句子",learn:"委婉有禮貌嘅要求、特急、換房"},{id:3,icon:"🏔️",name:"N1",desc:"敬語、長句、事故廣播",learn:"投訴、交涉、敬語、事故廣播"}],od=["usagi","kuma"],Be=()=>Math.max(0,Math.min(3,Q().jpLevel??0)),Df=n=>od[parseInt(cu(n),36)%od.length],ln=(n,t)=>t.lv>0||t.hi?Df(n):n;function Ms(){const n=Be();return n===0||Math.random()<.6?n:Math.floor(Math.random()*n)}const _s=new Set,uu=()=>_s.clear(),rd=n=>n.key||n.jp;function Fn(n,t=Math.random){const e=Be(),i=n.filter(l=>(l.lv??0)<=e),s=Ms(),a=i.filter(l=>(l.lv??0)===s),o=l=>l.filter(u=>!_s.has(rd(u))),r=[o(a),o(i),a,i].find(l=>l.length)||n,c=r[Math.floor(t()*r.length)];return _s.add(rd(c)),c}function Tn(n,t){var a;if(n!==Be())return;const e=(a=Q()).lvStats||(a.lvStats={}),i=e[n]||(e[n]={right:0,total:0,days:[]});i.total++,t&&i.right++;const s=ma();i.days||(i.days=[]),i.days.includes(s)||i.days.push(s),de()}const hu=[{lv:0,jp:"{dish}を ください",yue:"唔該畀{dishYue}我"},{lv:0,jp:"{dish}を お願{ねが}いします",yue:"麻煩你，{dishYue}"},{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,jp:"すみません、{dish}を ください",yue:"唔好意思，我要{dishYue}"},{lv:1,jp:"すみません、 {dish}は ありますか？",yue:"唔好意思，有冇{dishYue}？"},{lv:1,jp:"{dish}を お願{ねが}いできますか？",yue:"可唔可以幫我整{dishYue}？"},{lv:2,jp:"今日{きょう}は {dish}に しようかな",yue:"今日食{dishYue}好喇"},{lv:2,jp:"{dish}って、 すぐ できますか？",yue:"{dishYue}係咪好快有得食？"},{lv:2,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}];hu.forEach((n,t)=>{n.key=`ord_${t}`});const du=[{lv:0,jp:"{dish}を {num} ください",yue:"唔該{numYue}{dishYue}"},{lv:0,jp:"{dish}、{num} お願{ねが}いします",yue:"{dishYue}，{numYue}，唔該"},{lv:1,jp:"{dish}を {num} お願{ねが}いできますか？",yue:"可唔可以幫我整{numYue}{dishYue}？"},{lv:2,jp:"{dish}は {num}で お願{ねが}いします",yue:"{dishYue}要{numYue}，唔該"}];du.forEach((n,t)=>{n.key=`ordn_${t}`});const Di={great:[{lv:0,jp:"おいしい！",yue:"好好食！"},{lv:0,jp:"すごく おいしいです！",yue:"超好食！"},{lv:0,jp:"最高{さいこう}！",yue:"一流！"},{lv:1,jp:"味{あじ}が ちょうど いいです",yue:"味道啱啱好"},{lv:1,jp:"本当{ほんとう}に おいしいです！",yue:"真係好好食！"},{lv:1,jp:"これ、 大好{だいす}きな 味{あじ}です",yue:"呢個係我最鍾意嘅味道"},{lv:2,jp:"優{やさ}しい 味{あじ}で、 ほっとしますね",yue:"味道好溫和，食完好放鬆"},{lv:2,jp:"見{み}た目{め}も きれいで、 食{た}べるのが もったいないです",yue:"賣相咁靚，食咗好唔捨得"},{lv:2,jp:"一口{ひとくち}食{た}べただけで、 幸{しあわ}せな 気持{きも}ちに なりました",yue:"食一啖已經覺得好幸福"}],ok:[{lv:0,jp:"うん、おいしいです",yue:"嗯，幾好食"},{lv:0,hi:!0,jp:"おいしいです",yue:"好食"},{lv:1,jp:"まあまあ おいしいです",yue:"幾好食，都ok"},{lv:1,jp:"なかなか おいしいです",yue:"相當好食"},{lv:2,jp:"なかなか いけますね",yue:"都幾唔錯喎"},{lv:2,jp:"悪{わる}くない 味{あじ}ですね",yue:"味道唔差喎"}],meh:[{lv:0,hi:!0,jp:"うーん、 ちょっと…",yue:"嗯…有啲…"},{lv:1,jp:"もう ちょっと 味{あじ}が ほしいです",yue:"想味道再濃啲"},{lv:2,jp:"もう 少{すこ}し 味{あじ}が はっきり していると いいですね",yue:"味道再突出啲就好喇"}],wrong:[{lv:0,jp:"あれ？ これじゃないです",yue:"咦？唔係呢個喎"},{lv:1,jp:"これ、 頼{たの}んでいません",yue:"呢個我冇叫"},{lv:2,jp:"すみません、 注文{ちゅうもん}したのは これじゃなかったと 思{おも}うんですが",yue:"唔好意思，我諗我叫嘅唔係呢個"}],bye:[{key:"gochisousama",lv:0,jp:"ごちそうさまでした！",yue:"多謝款待！"},{key:"matta",lv:0,jp:"また 来{き}ます！",yue:"我會再嚟！"},{key:"oishikatta",lv:0,hi:!0,jp:"美味{おい}しかったです！",yue:"好好食呀！"},{key:"arigatou",lv:0,hi:!0,jp:"ありがとうございました！",yue:"多謝晒！"},{key:"okaikei",lv:1,jp:"お会計{かいけい}、 お願{ねが}いします。 ごちそうさまでした",yue:"唔該埋單，多謝款待"},{key:"by_tomodachi",lv:1,jp:"とても おいしかったです。 また 友達{ともだち}と 来{き}ます！",yue:"好好食，下次同朋友嚟！"},{key:"by_mata",lv:1,jp:"また 近{ちか}いうちに 来{き}ますね",yue:"好快會再嚟"},{key:"by_chikaku",lv:2,jp:"この 近{ちか}くに 来{き}たら、 また 寄{よ}らせてもらいます",yue:"之後行經附近，我會再嚟"},{key:"by_tsurete",lv:2,jp:"今度{こんど}は 家族{かぞく}も 連{つ}れて 来{き}ますね",yue:"下次帶埋家人嚟"},{key:"by_gochisou2",lv:2,jp:"今日{きょう}は ごちそうさまでした。 どれも 本当{ほんとう}に おいしかったです",yue:"今日多謝款待，每樣都真係好好食"}]},hn={wake:{jp:"ふわぁ… おはようにゃ！",yue:"呵～早晨喵！"},intro:{jp:"ぼくは クロ。この 店{みせ}の シェフにゃ",yue:"我叫小黑（クロ），係呢間店嘅廚師喵"},irasshai:{jp:"いらっしゃいませ！",yue:"歡迎光臨！"},done:{jp:"できたにゃ！",yue:"整好喇喵！"},purr:{jp:"ごろごろ…",yue:"（呼嚕呼嚕⋯）"},levelup:{jp:"レベルアップにゃ！",yue:"升級喇喵！"},newRecipe:{jp:"新{あたら}しい レシピにゃ！",yue:"新食譜喵！"}},oe=(n,t,e,i,s)=>({key:n,lv:t,ch:e,jp:i,yue:s,hi:!0}),xr=[{key:"oishii",lv:0,ch:"any",jp:"この 店{みせ}、おいしいですね",yue:"呢間店好好食喎"},{key:"atsui",lv:0,ch:"any",jp:"わあ、熱{あつ}い！",yue:"嘩，好熱！"},{key:"sumimasen",lv:0,ch:"any",jp:"すみません！",yue:"唔好意思！"},oe("st_osusume",0,"home","おすすめは？","有咩推介？"),oe("st_nioi",0,"home","いい におい！","好香呀！"),oe("st_mizu",0,"any","お水{みず}、 ください","唔該畀杯水"),oe("st_toire",0,"any","トイレは どこですか？","洗手間喺邊？"),oe("st_kanpai",0,"izakaya","乾杯{かんぱい}！","乾杯！"),oe("st_toriaezu",0,"izakaya","とりあえず ビール！","總之先嚟啤酒！"),oe("st_hot",0,"cafe","ホット、 お願{ねが}いします","要熱嘅，唔該"),oe("st_ice",0,"cafe","アイス、 お願{ねが}いします","要凍嘅，唔該"),oe("st_nani",0,"dark","これ、 なに？","呢個係咩嚟？"),oe("st_tezukuri",0,"dark","手作{てづく}り？","自家製？"),oe("st_shizuka",1,"any","この 店{みせ}、 静{しず}かで いいですね","呢間舖頭好靜，好舒服"),oe("st_hajimete",1,"any","ここは 初{はじ}めてです","我第一次嚟呢度"),oe("st_haitte",1,"any","これには 何{なに}が 入{はい}っていますか？","呢個入面有啲咩？"),oe("st_kyou",1,"any","今日{きょう}は 暑{あつ}いですね","今日好熱呀"),oe("st_suwaru",1,"home","ここ、 座{すわ}っても いいですか？","呢度可以坐嗎？"),oe("st_sukuname",1,"home","ご飯{はん}、 少{すく}なめに できますか？","飯可唔可以少啲？"),oe("st_okawari",1,"home","おかわり、 いいですか？","可以添飯嗎？"),oe("st_dashi",1,"home","この 味噌汁{みそしる}、 何{なん}の だしですか？","呢碗味噌湯用咩熬底？"),oe("st_lastorder",1,"izakaya","ラストオーダーは 何時{なんじ}ですか？","最後落單係幾點？"),oe("st_nama",1,"izakaya","生{なま}ビール、 もう 一杯{いっぱい}","生啤再嚟一杯"),oe("st_satou_nashi",1,"cafe","砂糖{さとう}なしで お願{ねが}いします","唔該走糖"),oe("st_milk_ooi",1,"cafe","ミルクを 多{おお}めに できますか？","可唔可以多奶？"),oe("st_tsukuru",1,"dark","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),oe("st_nikomi",1,"dark","どのくらい 煮込{にこ}みましたか？","燉咗幾耐？"),oe("st_mae",2,"any","この 店{みせ}、 前{まえ}から 来{き}てみたかったんです","呢間舖我想嚟好耐㗎喇"),oe("st_hitori",2,"any","一人{ひとり}でも 入{はい}りやすい お店{みせ}ですね","一個人入嚟都冇壓力"),oe("st_susume",2,"any","友達{ともだち}に すすめられて 来{き}ました","朋友推介我嚟"),oe("st_fun",2,"any","雰囲気{ふんいき}が 落{お}ち着{つ}いていて いいですね","氣氛好舒服，好寧靜"),oe("st_ryou",2,"home","値段{ねだん}の わりに、 量{りょう}が 多{おお}くて 驚{おどろ}きました","價錢計，份量多到嚇親"),oe("st_tezukuri2",2,"home","これ、 全部{ぜんぶ} 手作{てづく}りなんですか？","呢啲全部係自己整？"),oe("st_omakase",2,"izakaya","お任{まか}せで 何品{なんぴん}か 出{だ}してもらえますか？","可唔可以隨你出幾款？"),oe("st_agetate",2,"izakaya","唐揚{からあ}げは 揚{あ}げたてを 食{た}べたいので、 後{あと}で 出{だ}してもらえますか？","唐揚想食啱炸起，可唔可以遲啲先上？"),oe("st_samui",2,"cafe","今日{きょう}は 寒{さむ}いので、 熱{あつ}めに してもらえますか？","今日凍，可唔可以整熱啲？"),oe("st_purin",2,"cafe","プリンは 食後{しょくご}に 出{だ}していただけますか？","布甸可唔可以食完先上？"),oe("st_hachijikan",2,"dark","本当{ほんとう}に 八時間{はちじかん}も 煮込{にこ}んだんですか？","真係燉咗八個鐘咁耐？"),oe("st_genzairyo",2,"dark","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],R1=Object.fromEntries(xr.map(n=>[n.key,n]));function C1(n,t,e=Math.random){const i=Be(),s=xr.filter(d=>d.lv<=i&&(d.ch==="any"||d.ch===n)),a=Ms(),o=s.filter(d=>d.lv===a),r=o.length>=2?o:s,c=r.filter(d=>!_s.has(d.key)),l=c.length?c:r,u=t(l.map(d=>d.key));_s.add(u);const h=R1[u],m=d=>d.filter((M,y)=>d.findIndex(b=>b.yue===M.yue)===y),f=d=>[...d].sort(()=>e()-.5),g=s.filter(d=>d.key!==u&&d.yue!==h.yue&&d.lv===h.lv),_=s.filter(d=>d.key!==u&&d.yue!==h.yue),p=m([...f(g),...f(_)]).slice(0,2);return{st:h,wrongs:p}}const P1=["misoshiru","oyakodon","ramen"],fu=[{key:"oomori",lv:1,hi:!0,jp:"大盛{おおも}りで お願{ねが}いします",yue:"大份，唔該",label:"要大份"},{key:"dt_sukuname",lv:1,hi:!0,jp:"少{すく}なめで お願{ねが}いします",yue:"細份，唔該",label:"要細份"},{key:"dt_koko",lv:1,hi:!0,jp:"ここで 食{た}べます",yue:"喺度食",label:"喺度食"},{key:"dt_mochikaeri",lv:1,hi:!0,jp:"お持{も}ち帰{かえ}りで お願{ねが}いします",yue:"外賣，唔該",label:"外賣"},{key:"dt_negi",lv:2,hi:!0,jp:"ねぎ抜{ぬ}きに してもらえますか？",yue:"可唔可以走蔥？",label:"走蔥",when:n=>P1.includes(n)},{key:"dt_henkou",lv:2,hi:!0,jp:"すみません、 やっぱり 持{も}ち帰{かえ}りに 変更{へんこう}できますか？",yue:"唔好意思，可唔可以改做外賣？",label:"改做外賣"}];function k1(n){const t=Be(),e=fu.filter(u=>u.lv<=t&&(!u.when||u.when(n)));if(!e.length)return null;const i=Ms(),s=e.filter(u=>u.lv===i),a=s.length?s:e,o=a.filter(u=>!_s.has(u.key)),r=o.length?o:a,c=r[Math.floor(Math.random()*r.length)];_s.add(c.key);const l=[...new Set(e.filter(u=>u.label!==c.label).map(u=>u.label))].sort(()=>Math.random()-.5);return{d:c,wrongs:l.slice(0,2)}}const L1=[{lv:0,jp:"売{う}り切{き}れです",yue:"賣晒喇"},{lv:1,jp:"すみません、売{う}り切{き}れです。",yue:"唔好意思，賣晒喇"},{lv:2,jp:"申{もう}し訳{わけ}ございません、 あいにく {dish}は 切{き}らしておりまして…",yue:"好抱歉，啱啱{dishYue}用晒…"}],I1=[{lv:0,hi:!0,jp:"{dish}を ください",yue:"咁要{dishYue}"},{lv:1,jp:"{dish}を お願{ねが}いします",yue:"咁要{dishYue}"},{lv:2,jp:"それなら、 {dish}に します",yue:"咁我要{dishYue}"}],D1=[{lv:0,hi:!0,jp:"追加{ついか}で！",yue:"加單！"},{lv:1,jp:"すみません、もう 一{ひと}つ 追加{ついか}で。",yue:"唔該，再加一份。"},{lv:2,jp:"あ、 すみません、 同{おな}じものを もう 一{ひと}つ 追加{ついか}で お願{ねが}いします",yue:"啊唔好意思，同一款再加一份，唔該"}],U1=[{lv:0,hi:!0,jp:"一{ひと}つ 減{へ}らして ください",yue:"減一份，唔該"},{lv:1,jp:"すみません、 一{ひと}つ 減{へ}らして ください。",yue:"唔好意思，減一份。"},{lv:2,jp:"あ、 すみません、 一{ひと}つ 減{へ}らして もらえますか？",yue:"啊唔好意思，可唔可以減一份？"}],N1=[{lv:0,hi:!0,jp:"{dish}に 変{か}えて ください",yue:"改做{dishYue}，唔該"},{lv:1,jp:"すみません、 {dish}に 変{か}えて ください。",yue:"唔好意思，改做{dishYue}。"},{lv:2,jp:"あ、 すみません、 {dish}に 変{か}えて もらえますか？",yue:"啊唔好意思，可唔可以改做{dishYue}？"}],O1=[{lv:0,hi:!0,jp:"やっぱり キャンセルで！",yue:"算啦，取消！"},{lv:1,jp:"すみません、 やっぱり キャンセルで お願{ねが}いします。",yue:"唔好意思，算啦，唔該取消。"},{lv:2,jp:"あの、 すみません、 やっぱり 注文{ちゅうもん}を キャンセルして もらえますか？",yue:"請問，我想取消啱啱嗰張單，得唔得？"}],F1=[{lv:0,hi:!0,jp:"じゃあ、 やめておきます",yue:"咁就算啦"},{lv:1,jp:"そうですか… じゃあ、 やめておきます。",yue:"係咩…咁就算啦。"},{lv:2,jp:"そうですか… それなら、 今日{きょう}は やめておきます",yue:"係咩…咁今日就唔要喇"}],ds={name:{jp:"定食屋{ていしょくや} くろねこ",yue:"黑貓定食屋"},people:[{n:1,key:"hitori",jp:"一人{ひとり}です",yue:"一位",mei:"一名{いちめい}"},{n:2,key:"futari",jp:"二人{ふたり}です",yue:"兩位",mei:"二名{にめい}"},{n:3,key:"sannin",jp:"三人{さんにん}です",yue:"三位",mei:"三名{さんめい}"}],foods:["onigiri","misoshiru","oyakodon","ramen"],drinks:["ocha","omizu","biiru"],hasNegi:["misoshiru","oyakodon","ramen"],prices:{onigiri:200,misoshiru:150,oyakodon:850,ramen:900,ocha:0,omizu:0,biiru:500},staff:{welcome:{jp:"いらっしゃいませ！ 何名様{なんめいさま}ですか？",yue:"歡迎光臨！請問幾位？"},seat:{jp:"こちらへ どうぞ",yue:"呢邊請"},order:{jp:"ご注文{ちゅうもん}は お決{き}まりですか？",yue:"決定好叫咩未？"},drink:{jp:"お飲{の}み物{もの}は いかがですか？",yue:"想飲啲咩？"},confirm:{jp:"以上{いじょう}で よろしいですか？",yue:"就咁多？"},wait:{jp:"少々{しょうしょう} お待{ま}ちください",yue:"請稍等"},serve:{jp:"お待{ま}たせしました！",yue:"久等喇！"},pay:{jp:"ありがとうございます。{price}円{えん}です",yue:"多謝，{price} 円"},pay2:{jp:"税込{ぜいこ}みで {price}円{えん}に なります",yue:"連稅 {price} 円"},bye:{jp:"ありがとうございました！ また お越{こ}しください",yue:"多謝晒！歡迎再嚟"},sorry:{jp:"大変{たいへん} お待{ま}たせしました！",yue:"等咗好耐，真係唔好意思！"}},you:{order:{jp:"{food}を {num} ください",yue:"唔該畀{numYue}{foodYue}我"},drink:{jp:"{drink}を {num} お願{ねが}いします",yue:"{numYue}{drinkYue}，唔該"},yes:{jp:"はい、お願{ねが}いします",yue:"係，唔該"},itadakimasu:{jp:"いただきます！",yue:"開動！（食之前）"},gochisou:{jp:"ごちそうさまでした",yue:"多謝款待（食完）"},kaikei:{jp:"すみません、お会計{かいけい} お願{ねが}いします",yue:"唔好意思，唔該埋單"},wrongGreet:{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},wrongEat:{jp:"さようなら",yue:"再見（好正式／長時間唔見）"},wrongPay:{jp:"おかわり ください",yue:"唔該再嚟一碗"},no:{jp:"いいえ、大丈夫{だいじょうぶ}です",yue:"唔使喇，冇問題"}}},cd=n=>ds.people[n.ppl.n-1],B1=[{id:"water0",lv:0,phase:"preorder",task:()=>"想要杯水",build:()=>({staff:null,prompt:"（想要杯水）",title:"💧 想要杯水，點講？",options:[{jp:"お水{みず}、 ください",yue:"唔該畀杯水"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"さようなら",yue:"再見（好正式）"}]})},{id:"call0",lv:0,phase:"mid",task:()=>"想叫店員",build:()=>({staff:null,prompt:"（想叫店員過嚟）",title:"✋ 叫店員，點講？",options:[{jp:"すみません！",yue:"唔好意思！"},{jp:"いらっしゃいませ！",yue:"歡迎光臨（店員講）"},{jp:"ごちそうさまでした",yue:"多謝款待（食完）"}]})},{id:"reserve1",lv:1,phase:"enter",init:n=>{n.f.reserved=Math.random()<.5},task:n=>n.f.reserved?"你有訂位":"你冇訂位",build:n=>({staff:{jp:"ご予約{よやく}は されていますか？",yue:"有冇訂位？"},title:"📅 有冇訂位？",options:n.f.reserved?[{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]:[{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"counter1",lv:1,phase:"seat",task:()=>"你唔介意坐吧枱",build:()=>({staff:{jp:"カウンター席{せき}でも よろしいですか？",yue:"坐吧枱得唔得？"},title:"🪑 坐吧枱得唔得？（你唔介意）",options:[{jp:"はい、 大丈夫{だいじょうぶ}です",yue:"得，冇問題"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"recommend1",lv:1,phase:"preorder",task:()=>"唔知食咩，想問推介",build:n=>({staff:null,prompt:"（唔知食咩，想問店員推介）",title:"🤔 想問推介，點講？",options:[{jp:"おすすめは 何{なん}ですか？",yue:"有咩推介？"},{jp:"お会計{かいけい}は いくらですか？",yue:"幾多錢？"},{jp:"ごちそうさまでした",yue:"多謝款待"}],reply:{jp:`本日{ほんじつ}の おすすめは ${z1(n)}です`,yue:`今日推介${j1(n)}`}})},{id:"chopsticks1",lv:1,phase:"mid",task:()=>"冇筷子，想叫店員攞",build:()=>({staff:null,prompt:"（發現冇筷子）",title:"🥢 冇筷子，點講？",options:[{jp:"すみません、 お箸{はし}を ください",yue:"唔好意思，唔該畀對筷子"},{jp:"すみません、 お水{みず}を ください",yue:"唔好意思，唔該畀杯水"},{jp:"すみません、 さようなら",yue:"唔好意思，再見"}]})},{id:"split1",lv:1,phase:"pay",when:n=>n.ppl.n>=2,init:n=>{n.f.split=Math.random()<.5},task:n=>n.f.split?"各自畀錢":"你請客，一齊畀",build:n=>({staff:{jp:"お会計{かいけい}は 別々{べつべつ}ですか？ ご一緒{いっしょ}ですか？",yue:"分開畀定一齊畀？"},title:"💴 點樣畀錢？",options:n.f.split?[{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"いただきます",yue:"開動喇"}]:[{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"いただきます",yue:"開動喇"}]})},{id:"cash1",lv:1,phase:"pay",when:n=>n.ppl.n===1,init:n=>{n.f.card=Math.random()<.5},task:n=>n.f.card?"你想碌卡":"你想畀現金",build:n=>({staff:{jp:"お支払{しはら}いは 現金{げんきん}ですか？ カードですか？",yue:"現金定碌卡？"},title:"💳 現金定碌卡？",options:n.f.card?[{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"おやすみなさい",yue:"晚安"}]:[{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"reserve2",lv:2,phase:"enter",init:n=>{n.f.reserved=Math.random()<.5},task:n=>n.f.reserved?`你七點訂咗位（${cd(n).yue}，姓陳）`:"你冇訂位，但有時間，願意等",build:n=>{const t=cd(n),e=ds.people.find(i=>i.n!==t.n);return n.f.reserved?{staff:{jp:"ご予約の お名前{なまえ}を お願{ねが}いします",yue:"請問訂位姓名？"},title:"📅 報訂位資料（七點、姓陳）",options:[{jp:`七時{しちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${t.yue}`},{jp:`七時{しちじ}に ${e.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${e.yue}`},{jp:`八時{はちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗八點${t.yue}`}]}:{staff:{jp:"ただいま 満席{まんせき}でして、 十分{じゅっぷん}ほど お待{ま}ちいただくことになりますが、 よろしいですか？",yue:"而家滿座，要等十分鐘左右，得唔得？"},title:"⏳ 要等十分鐘（你有時間）",options:[{jp:"はい、 待{ま}ちます",yue:"得，我等"},{jp:"じゃあ、 また 今度{こんど}に します",yue:"咁下次先啦"},{jp:"ごちそうさまでした",yue:"多謝款待"}]}}},{id:"luggage2",lv:2,phase:"seat",task:()=>"行李多，想坐枱",build:()=>({staff:{jp:"お席{せき}は カウンターと テーブルが ございますが…",yue:"有吧枱同枱位，你想坐邊？"},title:"🧳 行李多，想坐枱",options:[{jp:"荷物{にもつ}が 多{おお}いので、 テーブル席{せき}に していただけますか？",yue:"我哋行李多，可唔可以坐枱？"},{jp:"テーブル席{せき}に しろ",yue:"畀張枱我坐（好粗魯）"},{jp:"荷物{にもつ}が 少{すく}ないので、 カウンター席{せき}に してください",yue:"行李少，坐吧枱（同情況唔符）"}]})},{id:"negi2",lv:2,phase:"order",when:n=>ds.hasNegi.includes(n.food),task:()=>"你唔食蔥",build:()=>({staff:null,prompt:"（你唔食蔥）",title:"🙏 想走蔥，點講？",options:[{jp:"ねぎ抜{ぬ}きに していただけますか？",yue:"可唔可以走蔥？"},{jp:"ねぎを 多{おお}めに お願{ねが}いします",yue:"蔥多啲，唔該（相反）"},{jp:"ねぎ抜{ぬ}きに しろ",yue:"走蔥啦（好粗魯）"}]})},{id:"late2",lv:2,phase:"wait",task:()=>"等咗好耐，菜仲未嚟",build:()=>({staff:null,prompt:"（等咗好耐，菜仲未嚟）",title:"⌛ 菜仲未嚟，點講？",reply:ds.staff.sorry,options:[{jp:"注文{ちゅうもん}した 料理{りょうり}が まだ 来{き}ていないんですが…",yue:"我叫咗嘅菜仲未嚟…"},{jp:"早{はや}く しろ",yue:"快啲啦（好粗魯）"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"clear2",lv:2,phase:"after",task:()=>"",build:()=>({staff:{jp:"お下{さ}げしても よろしいですか？",yue:"可唔可以收走碟？"},title:"🍽️ 食晒喇，點答？",options:[{jp:"はい、 お願{ねが}いします",yue:"好，唔該"},{jp:"すみません、 まだ 食{た}べています",yue:"唔好意思，我仲食緊（同情況唔符）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"cashonly2",lv:2,phase:"pay",init:n=>{n.f.cashOnly=!0},task:()=>"你有現金",build:()=>({staff:{jp:"現金{げんきん}のみと なっておりますが…",yue:"我哋只收現金…"},title:"💴 只收現金",options:[{jp:"じゃあ、 現金{げんきん}で 払{はら}います",yue:"咁我畀現金"},{jp:"カードで 払{はら}います",yue:"我碌卡（唔收卡）"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"receipt2",lv:2,phase:"receipt",task:()=>"你想要收據",build:()=>({staff:null,prompt:"（想要張收據，抬頭唔使寫）",title:"🧾 想要收據，點講？",options:[{jp:"領収書{りょうしゅうしょ}を いただけますか？ 宛名{あてな}は なしで 大丈夫{だいじょうぶ}です",yue:"可唔可以畀張收據？抬頭唔使寫"},{jp:"領収書{りょうしゅうしょ}を よこせ",yue:"收據拎嚟（好粗魯）"},{jp:"お箸{はし}を ください",yue:"唔該畀對筷子（唔對題）"}]})}],Uf={onigiri:["おにぎり","飯糰"],misoshiru:["味噌汁{みそしる}","麵豉湯"],oyakodon:["親子丼{おやこどん}","親子丼"],ramen:["ラーメン","拉麵"]};function z1(n){return n.foodJp??Uf[n.food][0]}function j1(n){return n.foodYue??Uf[n.food][1]}function H1(n,t){var o;const e=Be(),i=B1.filter(r=>r.lv<=e&&(!r.when||r.when(n))),s=[],a=new Set;for(;s.length<t;){const r=i.filter(m=>!s.includes(m)&&!a.has(m.phase));if(!r.length)break;const c=r.map(m=>m.lv===e?3:1);let l=Math.random()*c.reduce((m,f)=>m+f,0),u=0;for(let m=0;m<r.length;m++)if(l-=c[m],l<=0){u=m;break}const h=r[u];s.push(h),a.add(h.phase)}for(const r of s)(o=r.init)==null||o.call(r,n);return s}const V1=[1,2,3,3],$s={home:{name:"定食屋",icon:"🍱"},izakaya:{name:"居酒屋",icon:"🏮",drinks:["biiru","ocha","omizu"]},cafe:{name:"喫茶店",icon:"☕",foods:["pudding","thick_toast","pancakes"],drinks:["instant_coffee","black_tea","matcha_latte"]},sushi:{name:"壽司店",icon:"🍣",drinks:["ocha","omizu"]},ramen:{name:"拉麵店",icon:"🍜",drinks:["ocha","omizu","biiru"],negi:!0}};function G1(n){const t=$s[n];if(!t||n==="home")return{...ds,theme:"home"};const e={...ds.prices},i=Dn.filter(a=>a.chapter===n);i.forEach(a=>{e[a.dish]=a.price});const s=t.foods||i.map(a=>a.dish);return{...ds,theme:n,foods:s,drinks:t.drinks,prices:e,hasNegi:t.negi?s:[]}}const W1=[{id:"hat_chef",slot:"hat",price:0,emoji:"👨‍🍳",jp:"コック帽{ぼう}",yue:"廚師帽"},{id:"hat_hachimaki",slot:"hat",price:80,emoji:"🎌",jp:"はちまき",yue:"頭巾（打氣用）"},{id:"hat_straw",slot:"hat",price:180,emoji:"👒",jp:"麦{むぎ}わら帽子{ぼうし}",yue:"草帽"},{id:"neck_bell",slot:"neck",price:60,emoji:"🔔",jp:"鈴{すず}",yue:"鈴鐺"},{id:"neck_scarf",slot:"neck",price:120,emoji:"🧣",jp:"スカーフ",yue:"頸巾"},{id:"deco_lantern",slot:"deco",price:100,emoji:"🏮",jp:"提灯{ちょうちん}",yue:"燈籠"},{id:"deco_noren",slot:"deco",price:150,emoji:"🎏",jp:"のれん",yue:"門簾"},{id:"deco_bonsai",slot:"deco",price:220,emoji:"🪴",jp:"盆栽{ぼんさい}",yue:"盆栽"},{id:"deco_maneki",slot:"deco",price:350,emoji:"🐱",jp:"招{まね}き猫{ねこ}",yue:"招財貓（客人多啲）"}],ga=[{id:"usagi",jp:"うさぎさん",yue:"兔仔",color:16447216,ear:"long",weight:10,tip:1},{id:"kuma",jp:"くまさん",yue:"熊仔",color:9067067,ear:"round",weight:10,tip:1},{id:"kitsune",jp:"きつねさん",yue:"狐狸",color:15041082,ear:"pointy",weight:8,tip:1.2},{id:"tanuki",jp:"たぬきさん",yue:"狸貓",color:8088152,ear:"round",mask:!0,weight:6,tip:1.3},{id:"shiba",jp:"柴犬{しばいぬ}さん",yue:"柴犬",color:14260814,ear:"pointy",weight:4,tip:1.6,rare:!0},{id:"maneki",jp:"招{まね}き猫{ねこ}さま",yue:"招財貓大人",color:16777215,ear:"pointy",weight:1,tip:5,rare:!0,legend:!0}],us=5,Nt={suspicion:0,pot:0,combo:1,persona:null,exposes:0,raid:null,earned:0,active:!1},$1=()=>Object.assign(Nt,{suspicion:0,pot:0,combo:1,persona:null,exposes:0,raid:null,earned:0,active:!0}),zn=n=>{Nt.suspicion=Math.max(0,Math.min(us,Nt.suspicion+n))},Nf=()=>Q().chapterShifts.dark||0,X1=n=>Math.max(1,Math.min(5,Math.round(n*100)/100)),hs=n=>{Q().darkRating=X1((Q().darkRating??3)+n)};let Ua=null;function $i(){const n=he("#darkbar");if(!n)return;if(n.classList.toggle("show",Nt.active),!Nt.active){Ua=null;return}const t=Ua;Ua={sus:Nt.suspicion,pot:Nt.pot};const e=Array.from({length:us},(o,r)=>r<Nt.suspicion?"●":"○").join("");if(n.dataset.sus=Nt.suspicion,n.replaceChildren(x("span",{class:"db-sus",title:"懷疑度：滿 5 食評家突擊"},`👀 ${e}`),x("span",{class:"db-pot",title:"黑錢彩池：收手先落袋"},`💰 ${Nt.pot}`),x("span",{class:"db-combo"},`🔥x${Nt.combo.toFixed(2)}`),x("span",{class:"db-rating"},`⭐${(Q().darkRating??3).toFixed(2)}`)),!t)return;const i=(o,r,c,l)=>{var u;(u=n.querySelector(o))==null||u.classList.add("bump"),n.append(x("span",{class:`db-delta ${c}`,style:`left:${l}`},r))},s=Ua.sus-t.sus,a=Ua.pot-t.pot;s&&i(".db-sus",`👀 ${s>0?"+":""}${s} 懷疑`,s>0?"up":"down","8px"),a&&i(".db-pot",`💰 ${a>0?"+":""}${a}`,a>0?"coin":"up","45%")}function q1(){Nt.active=!1,$i()}function Of(){return{coins:200+30*Math.min(Nf(),5),exposes:1}}async function Y1(){const n=Of();$i(),await new Promise(t=>{const e=x("button",{class:"btn primary big","data-dark":"start",onclick:()=>i.close()},"🔪 開工"),i=Ei("今晚目標",x("div",{class:"dark-goals"},x("p",{},`⭐ 賺到 ${n.coins} 🪙（彩池要收手先計）`),x("p",{},`⭐ 被揭穿最多 ${n.exposes} 次`),x("p",{},"⭐ 冇俾食評家拆穿"),x("div",{class:"sub"},"每次浮誇介紹，紅利會入 💰 彩池；繼續搏有 🔥 combo，被揭穿就冇一半。懷疑度 👀 滿 5，食評家突擊！")),{footer:e,onClose:t})})}function K1(n){const t=Of(),e=[{ok:n.coins>=t.coins,label:`賺 ${n.coins} / ${t.coins} 🪙`},{ok:Nt.exposes<=t.exposes,label:`被揭穿 ${Nt.exposes} 次（≤ ${t.exposes}）`},{ok:Nt.raid!=="lose",label:Nt.raid==="win"?"食評家突擊：頂住咗！":Nt.raid==="lose"?"食評家突擊：被拆穿":Nt.raid==="confess"?"食評家突擊：認錯":"冇被突擊"}],i=e.filter(a=>a.ok).length,s=Q();return s.darkBest=Math.max(s.darkBest||0,i),de(),{stars:i,res:e}}function J1(){const n=Object.entries(df).filter(([,e])=>!e.minShift||Nf()>=e.minShift);let t=Math.random()*n.reduce((e,[,i])=>e+i.weight,0);for(const[e,i]of n)if(t-=i.weight,t<=0)return{id:e,...i};return{id:n[0][0],...n[0][1]}}function Z1(n){Pe(`${n.icon} ${n.name}：${n.hint}`,3600)}const ld=(n,t,e={})=>x("div",{class:"dress-opt",...e},x("b",{class:"jp-inline",html:He(n)}),t?x("small",{},t):null);async function Q1(n,t){var p;const e=Nt.persona,i=Be(),s=ga.find(d=>d.id===Nt.custId)||{id:Nt.custId||"usagi"},a=Tx[e.like],o=a[Math.min(i,a.length-1)];Ft(t,"cust",o.jp,i===0?o.yue:"",ln(s.id,o));const r=await Fe(jo.map(d=>({value:d,el:ld(`${d.icon} ${d.jp}`,i===0?d.yue:"",{"data-dress":`style:${d.id}`})})),{title:x("div",{class:"panel-title"},`${e.icon} 客人想要咩擺盤？`),cols:3}),c=r.value;t.styleDish(c.plate,c.garnish),kt("cust");const u=2-Math.abs(jo.findIndex(d=>d.id===c.id)-jo.findIndex(d=>d.id===e.like)),h=jo.find(d=>d.id===e.like),m=(p=r.grid.querySelector(`[data-dress="style:${h.id}"]`))==null?void 0:p.closest(".choice");r.button.classList.add(u===2?"fb-right":"fb-wrong"),u<2&&(m==null||m.classList.add("fb-answer"));const f=[.85,1,1.25][u];u===2?(zn(-1),Se("⭕ 擺盤正中！懷疑 -1、收入 x1.25","perfect"),J("perfect")):u===1?(Se("🔺 差少少：收入照舊","good"),J("good")):(zn(1),Se("❌ 擺盤唔啱！懷疑 +1、收入 x0.85","miss"),J("bad")),$i(),u<2&&Te(`客人講「${o.yue}」→ 要 ${h.icon} ${h.jp.replace(/\{[^}]*\}/g,"")}（${h.yue}）`,4e3);const g=Ax[u];await Promise.race([Ft(t,"cust",g.jp,g.yue,ln(s.id,g)),Jt(3e3)]),await Jt(500),kt("cust");const{value:_}=await Fe(["honest","mild","grand"].map(d=>({value:d,el:ld(ff(n,d).jp,`${Qa[d].label} · 紅利 x${Qa[d].mult}`,{"data-dress":`pitch:${d}`})})),{title:x("div",{class:"panel-title"},"🍽️ 上菜！點介紹？越浮誇紅利越多，越易被追問")});return{style:c.id,plate:c.plate,garnish:c.garnish,pitch:_,matches:u,lookMult:f}}function tM(n,t,e){return{...Rx(t,e.matches,e.pitch),style:e.style,plate:e.plate,garnish:e.garnish,pitch:e.pitch,matches:e.matches,lookMult:e.lookMult??1,outcome:"none"}}const bc=(n,t,e)=>{const i=e[Math.min(Be(),2)]||e[0];return Ft(n,"cust",i.jp,i.yue,ln(t.id,i))},eM=()=>{const n=Be(),t=Ex.filter(i=>i.lv<=n),e=t.filter(i=>i.lv===n);return De(e.length&&Math.random()<.7?e:t)},nM=(n,t)=>{const e=Object.keys(Va),i=Zt(e.filter(a=>a!==n.kind)).slice(0,t?2:3),s=Zt([n.kind,...i]).map(a=>({value:a,el:x("div",{"data-excuse":a},x("b",{class:"jp-inline",html:He(Va[a].jp)}),x("small",{},Va[a].yue))}));return t&&s.push({value:"honest",el:x("div",{"data-excuse":"honest"},"🙇 老實交代",x("small",{},"收入 x0.8，懷疑度 -1"))}),s};async function Ff(n,t,e,i,s){var u,h;const a=eM();Nt.probe=a;const o=ln(t.id,a);Ye(a.key),Ft(n,"cust",a.jp,"",o,{hidden:e});const r=await Fe(nM(a,i),{title:x("div",{class:"panel-title"},s)});kt("cust");const c=r.value===a.kind;r.value!=="honest"&&(ge(a.key,c),Tn(a.lv,c),r.button.classList.add(c?"fb-right":"fb-wrong"),c||(h=(u=r.grid.querySelector(`[data-excuse="${a.kind}"]`))==null?void 0:u.closest(".choice"))==null||h.classList.add("fb-answer"),Se(c?"⭕ 藉口啱題！":"❌ 答非所問…",c?"good":"miss"),J(c?"good":"bad"),c||Te(`佢問：「${a.yue}」→ 應該答「${Va[a.kind].yue}」`,3500),await Jt(900));const l=r.value==="honest"?Px.honest:Va[r.value];return await Ft(n,"cat",l.jp,l.yue,"cat"),kt("cat"),{answer:r.value,right:c,probe:a}}function iM(n){var t;return n==="honest"?0:Math.max(0,Math.min(1,Qa[n].ask+(((t=Nt.persona)==null?void 0:t.ask)||0)+Nt.suspicion*.08))}async function sM(n,t,e,i){if(e.pitch==="honest")return Se("🙂 如實介紹：冇紅利、冇風險","good"),e.outcome="plain";if(Math.random()>=iM(e.pitch))return Se("😌 客人冇追問！紅利入彩池","perfect"),J("good"),await Jt(700),e.outcome="none";const{answer:s,right:a}=await Ff(n,t,i,!0,"🤨 客人追問！揀啱藉口（聽清楚佢問咩）");let o;return s==="honest"?(o="honest",Se("🙇 老實交代：收入 x0.8、懷疑 -1","good"),await bc(n,t,gc.forgive),J("good")):Math.random()<(a?Math.max(.5,1-Nt.suspicion*.1):.15)?(o="believe",Se("✅ 客人信咗！紅利入彩池","perfect"),await bc(n,t,gc.believe),J("perfect")):(o="expose",Se("💥 被揭穿！冇收入、彩池減半、懷疑 +2","miss"),await bc(n,t,gc.expose),J("bad"),n.shake(.4)),kt("cust"),e.outcome=o}function aM(n,t){const e=Qa[n.pitch],i=n.outcome;let s=t,a=0;return i==="none"||i==="believe"?(a=Math.round(t*(e.mult-1)*Nt.combo),Nt.pot+=a,Nt.combo=Math.min(2,Nt.combo+.25),hs(.05),Pe(De(i==="believe"?Ys.believe:Ys.quiet),2400)):i==="honest"?(s=Math.round(t*.8),zn(-1),Nt.combo=1,hs(.02),Pe(De(Ys.honest),2400)):i==="expose"?(s=0,Nt.pot=Math.floor(Nt.pot/2),zn(2),Nt.combo=1,Nt.exposes++,hs(-.15),Pe(De(Ys.expose),2600,"bad")):hs(.02),n.bonus=a,de(),$i(),s}function pu(){const n=Nt.pot;return n?(Nt.pot=0,Nt.earned+=n,Q().coins+=n,de(),J("coin"),Vn(n),mn(),$i(),n):0}async function oM(){if(Nt.pot<=0||(await Fe([{value:"bank",el:x("div",{"data-bank":"bank"},`💰 收手落袋 +${Nt.pot}`,x("small",{},"懷疑度 -1，combo 歸零"))},{value:"go",el:x("div",{"data-bank":"go"},`🎲 繼續搏（🔥x${Nt.combo.toFixed(2)}）`,x("small",{},"下位客紅利更多；被揭穿彩池冇一半"))}],{title:x("div",{class:"panel-title"},`彩池 💰 ${Nt.pot} · 懷疑度 👀 ${Nt.suspicion}/${us}`)})).value!=="bank")return 0;zn(-1),Nt.combo=1;const t=pu();return Se(`+${t} 落袋！`,"good"),t}const rM=()=>pu();async function cM(n,t){if(Nt.suspicion<us)return 0;const e=ga.find(o=>o.id==="kitsune")||ga[0];J("rare"),n.setView("kitchen"),await n.customerIn(e),Pe("🚨 食評家突擊！懷疑度爆咗",3e3,"bad");const i=await Fe([{value:"fight",el:x("div",{"data-raid":"fight"},"😤 硬撐到底",x("small",{},"連續答啱 2 條：彩池 x1.5"))},{value:"confess",el:x("div",{"data-raid":"confess"},"🙇 認錯",x("small",{},"彩池清零，評分 -0.1"))}],{title:x("div",{class:"panel-title"},`🧐 食評家：「我要睇吓你嘅廚房。」彩池 💰 ${Nt.pot}`)});let s=i.value==="fight";if(s)for(let o=0;o<2&&s;o++)s=(await Ff(n,e,t,!1,`🧐 食評家問題 ${o+1} / 2`)).right;let a=0;return i.value==="confess"?(Nt.pot=0,hs(-.1),zn(-us),zn(1),Nt.raid="confess",Pe("🙇 認咗錯，食評家搖頭離開",2600)):s?(Nt.pot=Math.round(Nt.pot*1.5),hs(.2),zn(-us),zn(1),Nt.raid="win",J("perfect"),Pe(De(Ys.raidWin),3e3,"rare"),a=pu()):(Nt.pot=0,hs(-.3),zn(-us),zn(2),Nt.raid="lose",J("bad"),n.shake(.5),Pe(De(Ys.raidLose),3e3,"bad")),Nt.combo=1,de(),$i(),await Jt(900),n.customerOut(),await Jt(500),a}const Bf={none:"冇人追問，紅利入袋",plain:"如實介紹，冇風險",honest:"老實交代，客人原諒",believe:"藉口成功，蒙混過關",expose:"被揭穿，今餐白做"};function zf(n,t){const e=ff(n,t.pitch);return x("div",{class:"dark-report","data-secret":n.id},x("div",{class:"dark-tag"},`後廚秘密 ${n.number} · ${n.shortcut}`),x("div",{class:"dark-dish-heading"},Zn(`dish_${n.id}`,n.yue),x("h3",{},n.yue)),x("div",{class:"dark-scores"},...[["好味",t.taste],["賣相",t.look],["宣傳誇張度",t.hype]].map(([i,s])=>x("div",{},x("b",{},`${s}`),x("span",{},i)))),x("p",{},`你講嘅菜名：${e.yue}`),x("p",{},`結果：${Bf[t.outcome]||""}`),x("p",{class:"dark-truth"},`真正做法：${n.truth}`),x("p",{},n.gag),fn("中身{なかみ}は？",{yue:n.lesson,voice:"word"}))}async function lM(n,t){const e=Q().darkSecrets[n.id];if(Q().darkSecrets[n.id]={...t,bestTaste:Math.max((e==null?void 0:e.bestTaste)||0,t.taste),visits:((e==null?void 0:e.visits)||0)+1},de(),e){Pe(`🗂️ ${n.yue}：${Bf[t.outcome]||""}`,1800);return}J("rare"),await new Promise(i=>{const s=x("button",{class:"btn primary big dark-control",onclick:()=>a.close()},"收低秘密卡，繼續出餐"),a=Ei("新後廚秘密！",x("div",{},zf(n,t),x("div",{class:"sub"},"圖鑑入面可以再睇。")),{footer:s,onClose:i})})}function bs(n,t=""){const e=n.verb?me(n.verb):null;return x("div",{class:"mg-head"},fn(n.jp,{yue:n.yue,voice:"cat"}),e?x("div",{class:"verb-chip"},ai(e)," 新字 ",x("span",{class:"jp-inline",html:e.jp.replace(/([一-鿿]+)\{([^}]+)\}/g,"<ruby>$1<rt>$2</rt></ruby>")}),` = ${e.yue}`):null,t?x("div",{class:"mg-help"},t):null)}async function uM(n,t){let e=0;const i=Zt([...n.need,...n.decoys]),s=x("div",{class:"ing-grid"}),a=x("div",{class:"pick-prompt"},x("div",{class:"pick-label"},"🐾 聽小黑講…"));i.forEach(o=>{const r=me(o),l=r.textIcon&&r.emoji==="💬"?x("span",{class:"emo ing-jp",html:He(r.jp)}):x("span",{class:"emo"},ai(r)),u=x("button",{class:"ing"},l,x("span",{class:"ing-yue"},r.yue.replace(/（.*?）/g,"")));u.dataset.id=o,s.append(u)}),Ke(bs(n),a,s),await Ue(n.jp,"cat");for(let o=0;o<n.need.length;o++){const r=n.need[o],c=me(r);Ye(r),a.innerHTML="",s.dataset.want=r,a.append(x("div",{class:"pick-label"},`請攞（${o+1}/${n.need.length}）：`),fn(c.jp,{voice:"word",size:"big"})),Ue(c.jp,"word");let l=!1;await new Promise(u=>{const h=m=>{const f=m.target.closest(".ing");if(!(En()||!f||f.classList.contains("used")))if(f.dataset.id===r)J("good"),f.classList.add("used","ok"),t.placeIngredient(r,o,n.need.length),ge(r,!l),s.removeEventListener("click",h),u();else{J("bad"),e++,l=!0,f.classList.remove("shake"),f.offsetWidth,f.classList.add("shake");const g=me(f.dataset.id);Te(`呢個係「${g.yue}」，日文叫 ${g.jp.replace(/\{.*?\}/g,"")}`),Ue(g.jp,"word")}};s.addEventListener("click",h)}),await Jt(250)}return Math.max(.3,1-e*.2)}async function hM(n,t){var u;const e=n.rounds||3,i=x("div",{class:"tbar"}),s=x("div",{class:"tzone"}),a=x("div",{class:"tsweet"}),o=x("div",{class:"tneedle"});s.append(a),i.append(s,o);const r=x("div",{class:"mg-count"}),c=x("button",{class:"btn primary big tapzone"},n.anim==="chop"?"🔪 切！":"👆 撳！");Ke(bs(n,"指針入綠色區時撳掣；深綠色最準！"),r,i,c),Ue(n.jp,"cat"),t.catFace("board"),n.anim==="chop"&&t.cat.holding("knife");let l=0;for(let h=0;h<e;h++){r.textContent=`${h+1} / ${e}`;const m=n.zone*(1-h*.12),f=.15+Math.random()*(.7-m);s.style.left=f*100+"%",s.style.width=m*100+"%";const g=.9+h*.25+Q().level*.03;let _=0,p=1,d=Mn(),M;const y=()=>{const A=Mn(),N=(A-d)/1e3;d=A,_+=p*g*N,_>1&&(_=1,p=-1),_<0&&(_=0,p=1),o.style.left=_*100+"%",M=requestAnimationFrame(y)};M=requestAnimationFrame(y),await new Promise(A=>{c.onclick=()=>{En()||A()}}),cancelAnimationFrame(M),t.cat.play(n.anim||"chop",.25),J(n.anim==="chop"?"chop":"pop");const b=f+m/2,C=Math.abs(_-b);let E;C<m*.17?(E=1,Se("PERFECT!","perfect"),J("perfect")):C<m/2?(E=.7,Se("GOOD","good"),J("good")):(E=.2,Se("MISS","miss")),l+=E,h===0&&n.anim==="chop"&&t.workItems.children.length&&t.showProp((u=n.add)==null?void 0:u[0]),await Jt(380)}return t.cat.holding(null),n.add&&n.anim!=="chop"&&t.showProp(n.add[0]),l/e}async function dM(n,t){const e=n.taps||10,i=n.time||5;let s=0;const a=x("button",{class:"ring","aria-label":`連撳飯糰 ${e} 次`},x("div",{class:"ring-in"},Zn("verb_nigiru"))),o=x("div",{class:"mg-timer"},x("i")),r=x("div",{class:"mg-count","aria-live":"polite"},`0 / ${e}`);Ke(bs(n,`連撳飯糰 ${e} 次！第一下先開始 ${i} 秒倒數。`),r,o,a),Ue(n.jp,"cat"),t.catFace("board");let c=!1,l=!1,u=0;const h=await new Promise(m=>{let f;const g=()=>{if(En()){f=requestAnimationFrame(g);return}const _=(Mn()-u)/1e3;if(o.firstChild.style.width=Math.max(0,1-_/i)*100+"%",_>=i&&!l){l=!0,m(s/e);return}f=requestAnimationFrame(g)};a.addEventListener("pointerdown",_=>{if(_.preventDefault(),!(l||En())&&(c||(c=!0,u=Mn(),f=requestAnimationFrame(g)),s++,r.textContent=`${s} / ${e}`,J("pop"),t.cat.play(n.anim||"press",.18),a.style.setProperty("--p",Math.min(1,s/e)),a.classList.remove("hit"),a.offsetWidth,a.classList.add("hit"),s>=e)){l=!0,cancelAnimationFrame(f);const p=i-(Mn()-u)/1e3;m(p>i*.4?1:.85)}})});return n.add&&t.showProp(n.add[0]),h>=1?(Se("PERFECT!","perfect"),J("perfect")):h>=.7?(Se("GOOD","good"),J("good")):Se("OK","miss"),await Jt(450),Math.max(.3,Math.min(1,h))}async function fM(n,t){const e=n.turns||3,i=x("div",{class:"stirpad"},x("div",{class:"stir-dot"}),x("div",{class:"stir-label"},"🥄 手指轉圈")),s=x("div",{class:"mg-timer prog"},x("i"));Ke(bs(n,`按住圓盤畫 ${e} 個圈，順時針或逆時針都得。`),s,i),Ue(n.jp,"cat"),t.catFace("stove"),t.cat.holding("ladle"),t.heat(!0),n.add&&t.showProp(n.add[0]);let a=0,o=null,r=null,c=0;const l=await new Promise(u=>{const h=m=>{if(En()){o=null;return}const f=i.getBoundingClientRect(),g=m.clientX-(f.left+f.width/2),_=m.clientY-(f.top+f.height/2);if(Math.hypot(g,_)<15)return;const p=Math.atan2(_,g);if(i.querySelector(".stir-dot").style.transform=`rotate(${p}rad) translateX(${f.width*.36}px)`,o!==null){let M=p-o;M>Math.PI&&(M-=Math.PI*2),M<-Math.PI&&(M+=Math.PI*2),a+=Math.abs(M),r||(r=Mn()),t.cat.setMode("stir");const y=Math.floor(a/(Math.PI/2));y>c&&(c=y,J("bubble"))}o=p;const d=a/(e*Math.PI*2);if(s.firstChild.style.width=Math.min(1,d)*100+"%",d>=1){i.removeEventListener("pointermove",h);const M=(Mn()-r)/1e3;u(M<e*1.4?1:M<e*2.5?.8:.6)}};i.addEventListener("pointerdown",m=>{try{i.setPointerCapture(m.pointerId)}catch{}o=null}),i.addEventListener("pointermove",m=>{(m.buttons||m.pointerType==="touch")&&h(m)}),i.addEventListener("pointerup",()=>{o=null,t.cat.setMode("idle")})});return t.cat.setMode("idle"),t.cat.holding(null),t.heat(!1),l>=1?(Se("PERFECT!","perfect"),J("perfect")):(Se("GOOD","good"),J("good")),await Jt(450),l}async function pM(n,t){const[e,i]=n.zone,s=x("div",{class:"gauge"},x("div",{class:"gzone",style:`bottom:${e*100}%;height:${(i-e)*100}%`}),x("div",{class:"gfill"}),x("div",{class:"gtop"},"🔥 滾瀉")),a=x("button",{class:"btn primary big holdbtn"},"🔥 長按加熱"),o=x("div",{class:"hold-wrap"},s,a);Ke(bs(n,"長按加熱，升到綠色區就放手！暫停後要再長按。"),o),Ue(n.jp,"cat"),t.catFace("stove"),n.add&&t.showProp(n.add[0]);let r=0,c=!1,l=Mn(),u,h=0;const m=()=>{c=!1,cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle")};document.addEventListener("gamepause",m);const f=s.querySelector(".gfill"),g=await new Promise(_=>{const p=()=>{const M=Mn(),y=(M-l)/1e3;if(l=M,c&&(r+=y*(.32+r*.35),h+=y,h>.25&&(h=0,J(r>i?"boil":"bubble"))),f.style.height=Math.min(1,r)*100+"%",f.classList.toggle("hot",r>i),r>=1){d();return}u=requestAnimationFrame(p)},d=()=>{cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle");const M=(e+i)/2;r>=e&&r<=i?_(Math.abs(r-M)<(i-e)*.2?1:.75):_(.3)};a.addEventListener("pointerdown",M=>{M.preventDefault();try{a.setPointerCapture(M.pointerId)}catch{}c||En()||(c=!0,l=Mn(),u=requestAnimationFrame(p),t.heat(!0),t.cat.holding(n.anim==="pour"?null:"ladle"),t.cat.setMode(n.anim==="pour"?"idle":"stir"),n.anim==="pour"&&t.cat.play("pour",.8))}),a.addEventListener("pointerup",()=>{c&&(c=!1,d())}),a.addEventListener("pointercancel",()=>{c&&(c=!1,d())})});return document.removeEventListener("gamepause",m),t.cat.holding(null),g>=1?(Se("PERFECT!","perfect"),J("perfect")):g>=.7?(Se("GOOD","good"),J("good")):(Se(r>=1?"滾瀉！":"未夠熱","miss"),J("bad"),Te(n.tip,3e3)),await Jt(500),g}function mM(n){const t=(e,i,s)=>x("div",{class:`demo-row demo-${e}`},x("b",{},i),x("small",{},s));return new Promise(e=>{const i=x("button",{class:"btn primary big","data-demo":"go",onclick:()=>{Q().sneakTap=!0,de(),J("tap"),e()}},"明白，開始！");Ke(x("div",{class:"panel-title"},"🤫 偷偷煮：點玩？"),t("safe","① 🟢 客人傾偈 → 點一下開始","偷偷做嘢，進度條會行"),t("tell","② 🟡 客人講嘢衝住你 → 即刻再點一下停","聽完句嘢有少少時間反應"),t("look","③ 🔴 客人望緊廚房 → 唔好掂","佢轉返去（變返🟢）再點一下開始；被望到 = 懷疑 +1"),i)})}async function gM(n,t){const e=Be(),i=Nt.persona||df.tourist;Q().sneakTap||await mM();const s=n.work||[4.5,5.5,6.5,6.5][e],a=[1500,1150,900,900][e]*i.tell,o=1300*i.look,r=250,c=Math.min(3,e+1+(i.turn>=.5?1:0)),l={1:[.3],2:[.2,.55],3:[.15,.4,.65]}[c].map(At=>At+(Math.random()-.5)*.08),u=n.limit||Math.round(s*2+c*(2.5+(a+o)/1e3)+3),h=Df(Nt.custId||"usagi"),m=At=>wx[At].filter(Dt=>Dt.lv<=e);[...m("safe"),...m("turn")].forEach(At=>Wa(At.jp,h)),n.station&&t.useStation(n.station);const f=x("div",{class:"sneak-face"},"🗣️"),g=x("div",{class:"sneak-state"},`🟢 ${i.icon} ${i.name}同朋友傾緊偈 → 點一下開始`),_=x("div",{class:"sneak-line"}),p=x("div",{class:"sneak-cust","data-phase":"idle","data-cue":"safe"},f,x("div",{class:"sneak-talk"},g,_)),d=x("div",{class:"mg-timer prog"},x("i")),M=x("div",{class:"mg-timer"},x("i")),y=x("div",{class:"sneak-bars"},x("span",{title:"進度"},"🍳"),d,x("span",{title:"時間"},"⏱️"),M),b=x("button",{class:"btn primary big holdbtn sneak-btn","data-sneak":"hold","data-state":"ready"},n.btn);Ke(bs(n,e===0?"🟢 點一下開始 → 🟡 客人講嘢衝你：再點一下停 → 🟢 佢轉返去：再點一下開始":e===1?"傾偈就點一下開始；聽到講嘢衝你就點一下停，佢轉返去再點":"靠耳仔：傾偈就點一下開始；講嘢衝你就點一下停"),p,y,b).classList.add("sneak-panel"),Ue(n.jp,"cat");let E=!1,A=0,N=!1,X=!1,v=0,w=0,O=0,k="away",B=0,L=0,U=0,I=0,F=0,ot=0,ut=0,tt=!1;const Pt=At=>{k=At,p.dataset.phase=At},jt=(At,Dt,Gt)=>{p.dataset.cue=At,Dt&&(g.textContent=Dt),Gt&&(f.textContent=Gt)},K=(At,Dt)=>{b.dataset.state=At,b.textContent=Dt},ct=()=>k==="look"?K("look","🙈 唔好掂！"):k==="tell"&&p.dataset.cue==="tell"?K("tell","✋ 點一下停！"):N?K("stop","⏸ 停咗｜點一下繼續"):K("ready",n.btn),Mt=()=>{E=!1,b.classList.remove("on"),y.classList.remove("on"),ct(),t.cat.setMode("idle"),n.ding&&t.microwaveLight(!1)},_t=()=>Mt();document.addEventListener("gamepause",_t);const Ht=await new Promise(At=>{let Dt;const Gt=mt=>{X||(X=!0,cancelAnimationFrame(Dt),Mt(),K(mt>=.9?"hold":"stop",mt>=.9?"✅ 完成！":"⌛ 時間到"),At(mt))},V=mt=>{O++,tt=!0,Mt(),zn(1),$i(),J("bad"),t.shake(.4),Se("👀 被發現！懷疑度 +1","miss"),jt("caught",`🔴 ${mt}｜被發現！已停手，等佢轉返去再點一下`,"🤨"),K("look","🙈 唔好掂！")},R=()=>{jt("tell","🟡 客人講嘢衝住你！即刻點一下停！","❓"),E||K("tell","✋ 點一下停！")},ht=(mt,vt)=>{const P=De(m(vt?"turn":"safe"));_.replaceChildren(fn(P.jp,{yue:e===0?P.yue:"",voice:h}));const S=Promise.race([Ue(P.jp,h),Jt(4e3)]);vt?(Pt("tell"),I=1/0,e===0?R():jt("safe",`🟢 ${i.icon} 客人講緊嘢…聽清楚`,"🗣️"),S.then(()=>{k!=="tell"||X||(I=Mn()+a,e===1&&R())})):(jt("safe",`🟢 ${i.icon} 同朋友傾緊偈 → 點一下開始`,"🗣️"),U=mt+(1200+Math.random()*1200)*i.gap)},at=()=>{const mt=Mn(),vt=(mt-L)/1e3;if(L=mt,k==="away"&&!ut?v<l.length&&w>=l[v]?(v++,ht(mt,!0)):mt>=U&&ht(mt,!1):k==="tell"?mt>=I&&(Pt("look"),F=mt,ot=mt+o,tt=!1,jt("look","🔴 客人望緊廚房！唔好掂！","👀"),E||K("look","🙈 唔好掂！")):k==="look"&&(E&&!tt&&mt>=F+r&&V(n.caught),mt>=ot&&(Pt("away"),_.replaceChildren(),tt||(Se("😌 冇被發現！","good"),J("good")),jt("safe",`🟢 ${tt?"佢":"冇發現！佢"}轉返去傾偈 → 再點一下開始`,"🗣️"),E||K("ready",n.btn),U=mt+(900+Math.random()*900)*i.gap)),E&&!ut&&(w=Math.min(v<l.length||k!=="away"?.97:1,w+vt/s),w>=1))if(n.ding)ut=mt+450,Mt(),b.disabled=!0,K("stop","⏳ 就嚟「叮」…");else return Gt(O?.9:1);if(ut&&mt>=ut)return J("ding"),k==="look"&&V("「チン♪」——客人聽到晒！"),Gt(O?.9:1);const P=(mt-B)/1e3;if(d.firstChild.style.width=w*100+"%",M.firstChild.style.width=Math.max(0,1-P/u)*100+"%",p.dataset.progress=w.toFixed(2),P>=u)return Gt(Math.max(.3,w*.8));Dt=requestAnimationFrame(at)},st=()=>{k==="look"&&tt||(N||(N=!0,B=L=Mn(),U=B+900+Math.random()*600,Dt=requestAnimationFrame(at)),E=!0,b.classList.add("on"),y.classList.add("on"),K("hold",`🍳 ${n.btn.replace(/^\S*\s*點一下：/,"")}…（點一下停）`),t.cat.setMode("stir"),n.ding&&t.microwaveLight(!0),k==="look"&&!tt&&V(n.caught))},dt=()=>{Mt(),k==="tell"&&(jt(e<2?"tell":"hid",`🫣 ${n.hide}…收埋咗，等佢望完`),K("tell","🫣 收埋咗"))};b.addEventListener("pointerdown",mt=>{if(mt.preventDefault(),X||En()||ut)return;const vt=performance.now();vt-A<150||(A=vt,E?dt():st())})});return document.removeEventListener("gamepause",_t),X&&Ht>=1?(Se("完美！冇俾人發現","perfect"),J("perfect")):Ht>=.9?Se("做完！但俾人發現過","good"):(Se("做唔切！","miss"),J("bad"),Te(`被捉 ${O} 次；時間唔夠，味道會差啲`,3e3)),await Jt(500),Ht}async function _M(n){let t=0;const e=2+Math.floor(Math.random()*2),i=x("div",{class:"season-meter","aria-live":"polite"}),s=x("p",{},"先試味，再決定要唔要補。"),a=x("button",{class:"btn dark-control","data-season":"add"},"加一格調味"),o=x("button",{class:"btn dark-control","data-season":"taste"},"試味"),r=x("button",{class:"btn primary big dark-control","data-season":"serve"},"確認出餐"),c=()=>{i.textContent=`${"●".repeat(t)}${"○".repeat(5-t)}　${t} / 5`,a.disabled=t>=5};c(),a.addEventListener("click",()=>{t<5&&(t++,c(),s.textContent="加咗調味，試一啖先。")}),o.addEventListener("click",()=>{s.textContent=t===e?"啱啱好，仲食到蛋香同飯香！":t<e?"味道仲有啲淡。":"調味過重，蓋過食材味喇。",J("tap")}),Ke(bs(n),i,s,x("div",{class:"dark-actions"},a,o),x("div",{class:"sub"},n.tip),r),await new Promise(u=>r.addEventListener("click",u,{once:!0}));const l=Math.max(.1,1-Math.abs(t-e)*.3);return J(l>=.9?"perfect":"bad"),l}async function vM(n){const t=n.actions||[{id:"hot",icon:"♨️",label:"保持熱飲",detail:"用熱杯盛裝"},{id:"iced",icon:"🧊",label:"加冰做凍飲",detail:"用凍杯盛裝"},{id:"less_sugar",icon:"🥄",label:"減少糖量",detail:"只落半份糖"},{id:"no_sugar",icon:"🚫",label:"唔加糖",detail:"保持無糖"}];let e=0;for(Ye(n.request);;){const i=x("div",{class:"mg-head"},x("div",{class:"panel-title"},n.title||"客人想要點樣嘅飲品？"),fn(n.jp,{yue:Be()===0?n.yue:"",voice:n.voice||"cat",hidden:Be()>0,autoplay:!0}),x("div",{class:"mg-help"},"聽客人要求，揀實際做法。撳喇叭可以再聽。"));if(await new Promise(a=>{Ke(i,x("div",{class:"choices cols2 request-actions"},Zt(t).map(o=>x("button",{class:"choice","data-request":o.id,onclick:()=>{En()||a(o.id)}},x("span",{class:"request-icon"},o.icon),x("b",{},o.label),Be()===0?x("small",{},o.detail):null))))})===n.request){ge(n.request,e===0),J("good");const a=me(n.request);return await ii("做好喇，出餐！",x("div",{class:"panel-title"},"啱喇！客人嘅意思係："),fn(a.jp,{yue:a.yue,voice:"word",autoplay:!0})),Math.max(.3,1-e*.2)}e++,J("bad"),Te(n.retry||"再聽一次：留意客人講緊冷熱，定係甜度。",3500)}}const yM=Object.fromEntries(Object.entries({pick:uM,timing:hM,mash:dM,stir:fM,hold:pM,sneak:gM,season:_M,request:vM}).map(([n,t])=>[n,(...e)=>ip(t,...e)])),xM=2,_a=.9,MM=["eki","hotel"],to={konbini:()=>[...iu,...Object.values(na).flatMap(n=>[n.yes,n.no]).map(n=>({key:n.id,lv:1})),...Fi.map(n=>({key:n.id,lv:1}))],resto:()=>[...xr,...fu,...Di.bye,...hu,...du]},jf=[{id:"eki",label:"🚉 車站"},{id:"hotel",label:"🏨 酒店"},{id:"konbini",label:"🏪 便利店"},{id:"resto",label:"🍱 餐廳"}];function Mr(n,t){if(n==="hotel"){const e=(sa[t]||[]).map((i,s)=>s);return["t:ci","t:rm","t:co",...e.map(i=>`t:rq${i}`),"s:ci","s:co",...e.map(i=>`s:rq${i}`)]}if(to[n])return to[n]().filter(e=>(e.lv??0)===t).map(e=>e.key);if(n==="eki"){const e=["t:ask","t:ann","s:ask"];return t>=1&&e.push("s:os"),t>=2&&e.push("t:kind"),t>=3&&xl.forEach((i,s)=>e.push(`t:inc${s}`)),e}return[]}const Hf={konbini:["簡單道別：「ありがとう」","禮貌道別、讚便利","委婉感謝、深夜營業","敬語慰勞、長句"],resto:["簡單閒聊同道別","基本閒聊、口味評語","實用細節、推介","敬語、較長嘅閒聊"],hotel:["單字加「お願いします」：入住、退房、要毛巾、寄行李","完整禮貌句：報名同人數、問早餐時間、Wi-Fi","有禮貌嘅請求：冷氣壞咗、換房、確認預約、要收據","敬語同交涉：帳單有疑問、房型唔符、刷卡結帳"],eki:["單字：買票、問月台、「何番線ですか」","完整句：「〜行きは 何番線ですか」、搭過站要補票","聽廣播分各停／快速／特急，買特急券","事故廣播、退款、延誤證明、轉乘輸送、敬語交涉"]},Pl=(n,t,e)=>`${n}:${t}:${e}`;function bM(n,t,e,i){var l,u;if(!MM.includes(n)||!i||!Mr(n,t).includes(e))return null;const s=(l=Q()).unitStat||(l.unitStat={}),a=va(n,t);s[Pl(n,t,e)]=(s[Pl(n,t,e)]||0)+1;const o=va(n,t),r=(u=Q()).lvDoneFlags||(u.lvDoneFlags={});let c=null;return!r[`${n}:${t}`]&&o.ratio>=_a&&a.ratio<_a&&(r[`${n}:${t}`]=!0,c="level-done"),de(),c}function va(n,t){const e=Mr(n,t),i=Q().unitStat||{};if(to[n]){const a=e.filter(o=>{var r;return(((r=Q().srs[o])==null?void 0:r.box)||0)>=2}).length;return{done:a,total:e.length,ratio:e.length?a/e.length:1}}const s=e.filter(a=>(i[Pl(n,t,a)]||0)>=xM).length;return{done:s,total:e.length,ratio:e.length?s/e.length:0}}function SM(n,t){return t>=3||to[n]&&!Mr(n,t).length||va(n,t).ratio<_a||(Q().lvDoneDismissed||{})[`${n}:${t}`]?null:{ch:n,from:t,to:t+1}}function wM(n,t){var e;((e=Q()).lvDoneDismissed||(e.lvDoneDismissed={}))[`${n}:${t}`]=!0,de()}function EM(n){return jf.every(t=>va(t.id,n).ratio>=_a)}function TM(){const n=Be();return n>=3||!EM(n)||(Q().lvNudgeDismissed??-1)>=n?null:{from:n,to:n+1}}function AM(n,t){var s;if(!to[n])return!1;const e=(s=Q()).lvDoneFlags||(s.lvDoneFlags={}),i=`${n}:${t}`;return e[i]||va(n,t).ratio<_a||!Mr(n,t).length?!1:(e[i]=!0,de(),!0)}const kl=["hitotsu","futatsu","mittsu"],RM=["ikkan","nikan","sankan"],Ll=["tamago_nigiri","salmon_nigiri"],CM=n=>Ll.includes(n)?RM:kl;function qn(n,t){let e=n.jp,i=n.yue;for(const[s,a]of Object.entries(t))typeof a=="string"&&xn[a]?(e=e.replaceAll(`{${s}}`,xn[a].jp),i=i.replaceAll(`{${s}Yue}`,xn[a].yue.replace(/（.*?）/g,""))):(e=e.replaceAll(`{${s}}`,String(a)),i=i.replaceAll(`{${s}}`,String(a)));return{jp:e,yue:i}}const PM={cat:{id:8,name:"春日部つむぎ"},word:{id:14,name:"冥鳴ひまり"},usagi:{id:10,name:"雨晴はう"},kuma:{id:11,name:"玄野武宏"},kitsune:{id:2,name:"四国めたん"},tanuki:{id:12,name:"白上虎太郎"},shiba:{id:13,name:"青山龍星"},maneki:{id:20,name:"もち子さん"}};function vs(n){const t=Q();return n.unlock.level?t.level>=n.unlock.level:n.unlock.day?t.daysPlayed>=n.unlock.day:n.unlock.darkShift?(t.chapterShifts.dark||0)>=n.unlock.darkShift:!0}function Vf(n){if(n.unlock.level)return`Lv.${n.unlock.level} 解鎖`;if(n.unlock.darkShift)return`暗黑食堂完成 ${n.unlock.darkShift} 更解鎖`;if(n.unlock.day){const t=f1(),e=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4);return Q().daysPlayed+1>=n.unlock.day?`聽日解鎖（仲有 ${e}:${String(i).padStart(2,"0")}）`:`第 ${n.unlock.day} 日解鎖`}return""}function Il(){const n=new Set;for(const[r,c]of Object.entries(xn))(c.cat==="num"||c.cat==="phrase")&&n.add(r);for(const r of Dn.filter(vs))n.add(r.dish),r.ingredients.forEach(([c])=>n.add(c)),r.steps.forEach(c=>{c.verb&&n.add(c.verb),c.request&&n.add(c.request)});const t=Q().srs;Object.keys(t).forEach(r=>{xn[r]&&n.add(r)});const e=[...n].filter(r=>xn[r]),i=e.filter(r=>t[r]&&t[r].box>=2).length,s=e.filter(r=>t[r]&&t[r].box>=5).length,a=e.filter(r=>t[r]).length,o=ea.map(r=>{const c=new Set;if(r.id==="home")for(const[u,h]of Object.entries(xn))(h.cat==="num"||h.cat==="phrase")&&c.add(u);for(const u of Dn.filter(h=>(h.chapter||"home")===r.id&&vs(h)))c.add(u.dish),u.ingredients.forEach(([h])=>c.add(h)),u.steps.forEach(h=>{h.verb&&c.add(h.verb),h.request&&c.add(h.request)});r.id==="konbini"&&ex.forEach(u=>c.add(u)),r.id==="eki"&&px.forEach(u=>c.add(u)),r.id==="hotel"&&xx.forEach(u=>c.add(u));const l=[...c].filter(u=>xn[u]);return{id:r.id,name:r.name.split("・")[0],icon:r.icon,total:l.length,learned:l.filter(u=>t[u]&&t[u].box>=2).length}});return{total:e.length,learned:i,mastered:s,seen:a,unseen:e.length-a,chapters:o}}const Gf=n=>"★".repeat(n)+"☆".repeat(3-n);function Wf(n,{onStart:t=null}={}){const e=me(n.dish),i=x("div",{class:"recipe"},x("div",{class:"recipe-hero"},x("div",{class:"big-emo"},ai(e)),fn(e.jp,{yue:e.yue,voice:"word",size:"big",autoplay:!0})),x("div",{class:"recipe-meta"},`🍽️ ${n.serves}　⏱️ 現實烹調：${n.time}　${Q().stars[n.id]?Gf(Q().stars[n.id]):""}`),x("h3",{},"材料"),x("ul",{class:"ing-list"},n.ingredients.map(([o,r])=>{const c=me(o);return x("li",{},x("button",{class:"mini-spk","aria-label":`再聽：${c.yue}`,onclick:()=>Ue(c.jp,"word")},"🔊"),x("span",{class:"emo"},ai(c)),x("span",{class:"jp-inline",html:He(c.jp)}),x("span",{class:"amt"},r))})),x("h3",{},n.chapter==="dark"?"真正捷徑（浮誇菜名唔代表實際工序）":"做法（真係煮得㗎！）"),x("ol",{class:"howto"},n.howto.map(o=>x("li",{},o))));if(t){const[o,...r]=[...i.children],c={pick:"聽日文揀材料",mash:"連撳搓飯糰",timing:"指針入綠色區時撳掣",stir:"手指畫圈攪拌",hold:"長按加熱，綠色區放手",sneak:"點一下開始偷偷做；客人講嘢衝你就再點一下停",season:"先試味再調味",request:"聽客人要求，揀實際做法"},l=x("details",{class:"real-recipe"},x("summary",{},"📖 睇真實食譜、份量同烹調時間"),...r);i.replaceChildren(o,x("h3",{},"今次遊戲步驟"),x("ol",{class:"howto game-steps"},n.steps.map(u=>x("li",{},c[u.type]))),l)}const s=t?x("button",{class:"btn primary big",onclick:()=>{J("tap"),a.close()}},"🔥 開始煮！"):null,a=Ei("📖 食譜",i,{onClose:t,wide:!0,footer:s});return a}function Dl(n="recipes"){const t=x("div",{class:"tabs"}),e=x("div",{class:"tab-content"}),i={recipes:"🍳 食譜",words:"📝 單詞",phrases:"💬 句子",secrets:"🌙 後廚",stats:"📊 紀錄"},s=a=>{if(t.querySelectorAll("button").forEach(o=>o.classList.toggle("on",o.dataset.t===a)),e.innerHTML="",a==="recipes"){const o=x("div",{class:"book-grid"});Dn.forEach(l=>{const u=me(l.dish),h=vs(l),m=x("div",{class:`book-card ${h?"":"locked"}`},x("div",{class:"big-emo"},h?ai(u):"🔒"),x("div",{class:"jp-inline",html:h?He(u.jp):"？？？"}),x("div",{class:"sub"},ea.find(f=>f.id===(l.chapter||"home")).name),x("div",{class:"sub"},h?Q().stars[l.id]?Gf(Q().stars[l.id]):"未煮過":Vf(l)));h&&(m.onclick=()=>{J("tap"),Wf(l)}),o.append(m)}),ad.forEach(l=>o.append(x("div",{class:"book-card locked soon"},x("div",{class:"big-emo sil"},Zn(`dish_${l.id}`,l.yue)),x("div",{class:"jp-inline",html:He(l.jp)}),x("div",{class:"sub"},"即將推出"))));const r=Dn.length+ad.length,c=Dn.filter(vs).length;e.append(x("div",{class:"progress-line"},`收集 ${c} / ${r}`,x("div",{class:"bar"},x("i",{style:`width:${c/r*100}%`}))),o)}else if(a==="words"){const o=x("div",{class:"word-list"}),r=Object.keys(Q().srs);r.length||o.append(x("p",{class:"muted"},"未學到字，去煮嘢先啦！")),r.sort((l,u)=>Q().srs[u].box-Q().srs[l].box).forEach(l=>{if(!xn[l])return;const u=me(l),h=Q().srs[l],m=["🌱","🌱","🌿","🌿","🌳","🌸"][h.box];o.append(x("div",{class:"word-row",onclick:()=>Ue(u.jp,"word")},x("span",{class:"emo"},ai(u)),x("span",{class:"jp-inline",html:He(u.jp)}),x("span",{class:"yue"},u.yue),x("span",{class:"lvl",title:"熟練度"},m)))});const c=Il();e.append(x("div",{class:"progress-line"},`識咗 ${c.learned} / ${c.total} 個 · 🌸 熟晒 ${c.mastered} 個`,x("div",{class:"bar"},x("i",{style:`width:${c.total?c.learned/c.total*100:0}%`})),x("div",{class:"sub"},`見過 ${c.seen} 個 · 仲有 ${c.unseen} 個未見過　（🌱→🌸 越溫越熟）`),...c.chapters.filter(l=>l.total).map(l=>x("div",{class:"sub"},`${l.icon} ${l.name} ${l.learned} / ${l.total}`,x("div",{class:"bar"},x("i",{style:`width:${l.learned/l.total*100}%`})))),x("div",{class:"lv-grid-title"},"🎓 各章各級進度（學晒 = 90%）"),...jf.map(({id:l,label:u})=>x("div",{class:"lv-grid-row"},x("b",{},u),...si.map(h=>{const m=va(l,h.id),f=m.ratio>=_a;return x("div",{class:`lv-cell ${f?"done":""} ${Be()===h.id?"cur":""}`,title:Hf[l][h.id]},x("span",{},`${f?"✅":h.icon} ${h.name}`),x("small",{},`${m.done} / ${m.total}`),x("div",{class:"bar"},x("i",{style:`width:${m.ratio*100}%`})))})))),o)}else if(a==="phrases"){const o=Be(),r=[...xr,...fu,...Di.bye],c=r.filter(u=>Q().srs[u.key]),l=r.filter(u=>(u.lv??0)<=o).length;e.append(x("div",{class:"progress-line"},`見過 ${c.length} 句 · 你而家嘅程度可以遇到 ${l} 句　（🌱→🌸 越溫越熟）`)),c.length||e.append(x("p",{class:"muted"},"未有句子，開店同客人傾偈先啦！"));for(const u of[0,1,2,3]){const h=c.filter(f=>(f.lv??0)===u).sort((f,g)=>Q().srs[g.key].box-Q().srs[f.key].box);if(!h.length)continue;e.append(x("div",{class:"sub"},`${si[u].icon} ${si[u].name}`));const m=x("div",{class:"word-list"});h.forEach(f=>{const g=Q().srs[f.key],_=["🌱","🌱","🌿","🌿","🌳","🌸"][g.box];m.append(x("div",{class:"word-row",onclick:()=>Ue(f.jp,"usagi")},x("span",{class:"jp-inline",html:He(f.jp)}),x("span",{class:"yue"},f.yue),x("span",{class:"lvl",title:"熟練度"},_)))}),e.append(m)}}else if(a==="secrets"){const o=Ks.filter(c=>Q().darkSecrets[c.id]);e.append(x("p",{class:"sub"},`主廚秘密 ${o.length} / ${Ks.length} · 完成出餐揭曉後收藏`));const r=[...new Set(o.map(c=>c.shortcut))];e.append(x("div",{class:"dark-pantry"},...Ks.map(c=>x("span",{class:r.includes(c.shortcut)?"unlocked":""},r.includes(c.shortcut)?c.shortcut:"🔒 未揭曉")))),Ks.forEach(c=>{const l=Q().darkSecrets[c.id];e.append(l?zf(c,l):x("div",{class:"dark-locked"},`${c.number} · ${c.yue}　🔒`))})}else{const o=Q(),r=[["🔥 連續日數",`${o.streak} 日`],["📅 玩咗",`${o.daysPlayed} 日`],["🐾 招呼客人",`${o.served} 位`],["🏮 去餐廳",`${o.restaurantDone} 次`],["📝 識咗單詞",`${Il().learned} 個`],["💕 小黑好感度",`${o.affection}`]];e.append(x("div",{class:"stats"},r.map(([c,l])=>x("div",{class:"stat"},x("span",{},c),x("b",{},l)))))}};for(const[a,o]of Object.entries(i))t.append(x("button",{"data-t":a,onclick:()=>{J("tap"),s(a)}},o));s(n),Ei("📚 圖鑑",x("div",{},t,e),{wide:!0})}function mu(n){const t=x("div",{class:"shop-grid"}),e=x("div",{class:"shop-coins"}),i=()=>{const s=Q();e.replaceChildren(Zn("ui_coin"),x("b",{},s.coins)),t.innerHTML="",W1.forEach(a=>{const o=s.owned.includes(a.id)||s.deco.includes(a.id),r=a.slot==="deco"?s.deco.includes(a.id):s.wear[a.slot]===a.id;let c;o?a.slot==="deco"?c=x("button",{class:"btn ghost"},"✔ 已擺"):(c=x("button",{class:`btn ${r?"ghost":""}`},r?"除低":"著上"),c.onclick=()=>{J("tap"),s.wear[a.slot]=r?(a.slot==="hat",null):a.id,de(),Ul(n),i(),n.cat.happy()}):(c=x("button",{class:`btn ${s.coins>=a.price?"primary":"disabled"}`},`🪙 ${a.price}`),c.onclick=()=>{if(s.coins<a.price){J("bad"),Pe("金幣唔夠，再招呼多啲客人啦！");return}s.coins-=a.price,J("coin"),J("perfect"),a.slot==="deco"?s.deco.push(a.id):(s.owned.push(a.id),s.wear[a.slot]=a.id),de(),Ul(n),mn(),i(),Ue(a.jp,"word"),Pe(`買咗 ${a.yue}！`)}),t.append(x("div",{class:`shop-item ${r?"worn":""}`},x("div",{class:"big-emo"},Zn(`shop_${a.id}`,a.yue)),x("div",{class:"jp-inline",html:He(a.jp),onclick:()=>Ue(a.jp,"word")}),x("div",{class:"sub"},a.yue),c))})};i(),n.setView("kitchen"),Ei("🛍️ 商店",x("div",{},e,t),{wide:!0})}function Ul(n){const t=Q();n.cat.wear(t.wear),n.setDeco(t.deco)}function kM(n){const t=Q().settings,e=(c,l,u)=>{const h=x("input",{type:"checkbox"});return h.checked=!!t[l],h.onchange=()=>{t[l]=h.checked,de(),lu(),l==="bgm"&&Pf(h.checked),l==="shake"&&(n.shakeOn=h.checked),J("tap")},x("label",{class:"set-row"},x("div",{},x("b",{},c),x("div",{class:"sub"},u)),h)},i=x("input",{type:"checkbox"});i.checked=t.subs==="tap",i.onchange=()=>{t.subs=i.checked?"tap":"show",de(),J("tap")};const s=x("div",{class:"lv-pick"}),a=()=>{s.replaceChildren(...si.map(c=>x("button",{class:`btn ${Be()===c.id?"primary":""}`,onclick:()=>{Q().jpLevel=c.id,de(),J("tap"),a()}},`${c.icon} ${c.name}`,x("small",{},c.learn||c.desc))))};a();const o=Object.values(PM).map(c=>`VOICEVOX:${c.name}`).filter((c,l,u)=>u.indexOf(c)===l).join("、"),r=x("div",{class:"settings"},x("div",{class:"set-row lv-row"},x("div",{},x("b",{},"📚 日文程度"),x("div",{class:"sub"},"決定客人同餐廳對白嘅難度；轉咗之後新句即刻生效")),s),e("振假名 ふりがな","furigana","漢字上面顯示讀音"),e("羅馬字 Romaji","romaji","例：onigiri"),e("廣東話翻譯","yue","每句下面顯示意思"),e("加大文字","largeText","放大對白、翻譯同操作說明"),x("label",{class:"set-row"},x("div",{},x("b",{},"🎧 聽力挑戰"),x("div",{class:"sub"},"客人落單嘅字幕要撳先見，答啱有雙倍貼士")),i),e("背景音樂","bgm",""),e("音效","sfx",""),e("畫面震動","shake","切菜、答錯、升級時鏡頭輕震"),x("button",{class:"btn",onclick:()=>{de(),location.reload()}},"🏠 回到大堂（今次未完嘅單唔計）"),x("p",{class:"credits"},`🎙️ 語音：${o}`),x("button",{class:"btn danger",onclick:()=>{confirm("真係要清除全部進度？")&&(u1(),location.reload())}},"清除進度"));Ei("⚙️ 設定",r)}function LM(n,{onNext:t,onRest:e,onShop:i,firstShift:s}){const a=Q();let o=!1;const r=h=>{o=!0,Lf(),h()},l=Dn.filter(h=>!vs(h))[0],u=x("div",{class:"summary"},x("div",{class:"sum-big"},"🎉"),s?x("div",{class:"panel-title"},"第一道菜完成！想繼續開舖，定去餐廳試吓？"):null,fn("お疲{つか}れ様{さま}でした！",{yue:"辛苦晒！（收工講）",voice:"cat"}),x("div",{class:"sum-grid"},x("div",{},x("b",{},n.served),x("span",{},"位客人")),x("div",{},x("b",{},`+${n.coins}`),x("span",{},"🪙 金幣")),x("div",{},x("b",{},n.perfect),x("span",{},"⭐ 三星")),x("div",{},x("b",{},`${Il().learned}`),x("span",{},"📝 識咗字"))),n.dark?x("div",{class:"dark-stars","data-stars":n.dark.stars},x("div",{class:"stars-big"},...[1,2,3].map(h=>x("span",{class:h<=n.dark.stars?"on":""},"★"))),...n.dark.res.map(h=>x("div",{class:`goal ${h.ok?"ok":""}`},`${h.ok?"✅":"❌"} ${h.label}`)),x("div",{class:"sub"},`店舖評分 ⭐ ${(a.darkRating??3).toFixed(2)}`)):null,x("div",{class:"streak-row"},...Array.from({length:7},(h,m)=>x("div",{class:`sd ${m<Math.min(a.streak,7)?"on":""}`},m<Math.min(a.streak,7)?"🔥":m+1)),x("div",{class:"sub"},`連續 ${a.streak} 日！聽日返嚟，禮物會再大啲`)),l?x("div",{class:"teaser"},x("span",{class:"big-emo"},Zn("ui_lock"),ai(me(l.dish))),x("div",{},x("b",{html:He(me(l.dish).jp)}),x("div",{class:"sub"},Vf(l)))):null,x("div",{class:"sum-btns"},x("button",{class:"btn primary big",onclick:()=>r(t)},s?"🏮 繼續開舖／返大堂":"🏠 返大堂／揀章節"),e?x("button",{class:"btn big",onclick:()=>r(e)},"🏮 同小黑去日本餐廳食飯"):null,x("button",{class:"btn",onclick:()=>r(i)},"🛍️ 商店")));Ei("收工！",u,{onClose:()=>{o||t()}}),Ue("お疲{つか}れ様{さま}でした！","cat")}dr(document.body);he("#start").style.setProperty("--title-bg",`url("${Qo("title_bg")}")`);const j=new n1(he("#c"));let ao=!1;j.shakeOn=Q().settings.shake!==!1;const Sc={chop:()=>{j.shake(.18),j.cat.squash(-.08)},press:()=>j.shake(.15),bad:()=>{j.shake(.4),j.cat.squash(-.12)},good:()=>j.cat.squash(.08),perfect:()=>{j.shake(.25),j.cat.squash(.14)},level:()=>{j.shake(.55),j.cat.squash(.2)},rare:()=>j.shake(.3),door:()=>j.shake(.12),purr:()=>j.cat.squash(-.1),coin:()=>{}};g1(n=>{var t;return(t=Sc[n])==null?void 0:t.call(Sc)});j.onView=n=>E1(n==="cook"?"cook":n.startsWith("rest")?"rest":"kitchen");lu();mn();Ul(j);j.cat.happyEyes=999;j.setView("kitchen",!0);gu();he("#start").addEventListener("click",async()=>{_1(),J("tap"),he("#start").classList.add("gone");const n=d1();Q().started?await DM(n):await IM()},{once:!0});he("#btn-book").onclick=()=>{J("tap"),Dl()};he("#btn-shop").onclick=()=>{if(J("tap"),ao)return Pe("做緊嘢，收工先買啦！");mu(j)};he("#btn-set").onclick=()=>{J("tap"),kM(j)};let ud=0;j.onCatTap=()=>{if(!Q().started)return;J("purr"),j.hearts(),j.cat.happyEyes=.8;const n=Q();n.affection++,ud++,n.lastPet!==ma()?(n.lastPet=ma(),n.coins+=10,Pe("小黑好開心！ 今日第一次掃 ❤️ +10🪙"),Vn(10),mn()):ud%5===0&&(Ft(j,"cat",hn.purr.jp,hn.purr.yue,"cat"),setTimeout(()=>kt("cat"),2e3)),de()};async function IM(){await Jt(500),j.cat.happyEyes=0,j.cat.happy(),J("meow"),await Ft(j,"cat",hn.wake.jp,hn.wake.yue,"cat"),await Jt(300),await Ft(j,"cat",hn.intro.jp,hn.intro.yue,"cat");const n=await Fe([{label:"<b>🌱 零基礎</b><small>假名都未識</small>",value:0},{label:"<b>🌿 N5</b><small>識假名、簡單字、基本句型</small>",value:1},{label:"<b>🌳 N4–N3</b><small>想練聽力同實用句子</small>",value:2},{label:"<b>🏔️ N1</b><small>敬語、長句、事故廣播</small>",value:3}],{title:x("div",{class:"panel-title"},"你嘅日文程度係？（之後可以喺 ⚙️ 改）")}),t=Q().settings;Q().jpLevel=n.value,n.value===0&&Object.assign(t,{furigana:!0,romaji:!0,yue:!0,subs:"show"}),n.value===1&&Object.assign(t,{furigana:!0,romaji:!1,yue:!0,subs:"show"}),n.value>=2&&Object.assign(t,{furigana:!0,romaji:!1,yue:!1,subs:"tap"}),lu(),Q().started=!0,Q().lastGift=ma(),de(),kt(),Te("撳 🔊 可以再聽；撳小黑可以掃佢 🐾",3500),kf(!0),await Nl({tutorial:!0})}async function DM(n){kf(!0),j.cat.happyEyes=0,j.cat.happy(),J("meow");const t=Q(),e=Dn.filter(i=>i.unlock.day&&i.unlock.day===t.daysPlayed&&n.newDay);Ft(j,"cat","おかえりにゃ！","你返嚟喇喵！","cat"),n.gift&&(await new Promise(i=>{Ei("🎁 每日禮物",x("div",{class:"summary"},x("div",{class:"sum-big"},"🎁"),x("div",{class:"gift-amt"},`+${n.gift} 🪙`),x("div",{class:"streak-row"},...Array.from({length:7},(s,a)=>x("div",{class:`sd ${a<Math.min(t.streak,7)?"on":""}`},a<Math.min(t.streak,7)?"🔥":a+1))),x("div",{class:"sub"},n.streakBroken?"連續日數斷咗… 唔緊要，今日重新開始！":`連續 ${t.streak} 日！每日禮物越嚟越大（最多 7 日）`),x("button",{class:"btn primary big",onclick:()=>Lf()},"收！")),{onClose:i})}),Vn(n.gift),mn());for(const i of e)await Kf(i);if(t.jpLevel==null){const i=await Fe(si.map(s=>({label:`<b>${s.icon} ${s.name}</b><small>${s.desc}<br>📖 ${s.learn}</small>`,value:s.id})),{title:x("div",{class:"panel-title"},"新增咗分級對白！揀你嘅日文程度（之後可喺 ⚙️ 改）")});t.jpLevel=i.value,de()}ri()}function $f(){return Dn.filter(n=>(n.chapter||"home")===Q().chapter&&vs(n))}function Xf(){var t;const n=$f();return(t=n[parseInt(cu(ma()),36)%n.length])==null?void 0:t.id}function gu(){j.setMenu(Dn.filter(n=>(n.chapter||"home")===Q().chapter).map(n=>({name:xn[n.dish].jp.replace(/\{.*?\}/g,""),price:n.price,locked:!vs(n)})))}function UM(n){const t=["eki","hotel","konbini"].includes(n)?n:"resto",e=SM(t,Be());if(!e)return null;const i=si[e.to],s={eki:"車站",hotel:"酒店",konbini:"便利店",resto:"餐廳"}[t];return x("div",{class:"special lv-nudge"},`✅ ${si[e.from].name} ${s}學晒喇！試下 ${i.icon} ${i.name}：${Hf[t][e.to]}`,x("button",{class:"btn primary",onclick:()=>{Q().jpLevel=e.to,de(),J("level"),Pe(`轉咗做 ${i.name}`),ri()}},`轉去 ${i.name}`),x("button",{class:"btn",onclick:()=>{wM(t,e.from),ri()}},"遲啲先"))}function NM(){const n=TM();if(!n)return null;const t=si[n.to];return x("div",{class:"special lv-nudge"},`🎉 ${si[n.from].name} 所有場景都學晒！想試吓 ${t.icon} ${t.name} 嗎？（會學：${t.learn}）`,x("button",{class:"btn primary",onclick:()=>{Q().jpLevel=n.to,de(),J("level"),Pe(`轉咗做 ${t.name}`),ri()}},"升一級"),x("button",{class:"btn",onclick:()=>{Q().lvNudgeDismissed=n.from,de(),ri()}},"遲啲先"))}function ri(){ao=!1,kt(),j.setTheme(Q().chapter),j.setView("kitchen"),j.catFace("front");const n=Xf(),t=n?me(A1(n).dish):null,e=Q().shifts>=1;gu();const i=ea.find(a=>a.id===Q().chapter)||ea[0],s=x("div",{class:"hub-btns"},x("button",{class:"btn primary big","data-action":"open-shift",onclick:()=>{J("tap"),Nl(i.id==="hotel"||i.id==="eki"?{role:"guest"}:{})}},i.id==="konbini"?"🏪 開舖（做收銀）":i.id==="hotel"?"🛎️ 入住酒店（做旅客）":i.id==="eki"?"🎫 出發旅行（做旅客）":$s[i.id]?"🏮 開舖（做老闆）":"🏮 開舖"),i.id==="hotel"||i.id==="eki"?x("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{J("tap"),e?Nl({role:"staff"}):Pe("完成第一位客人就解鎖！")}},e?i.id==="hotel"?"🛎️ 上班（做前台）":"🚉 上班（做站務員）":"🔒 上班"):null,i.id==="konbini"?x("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{J("tap"),e?HM():Pe("完成第一位客人就解鎖！")}},e?"🛒 去買嘢（做客人）":"🔒 去買嘢"):null,$s[i.id]?x("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{J("tap"),e?Jf(i.id):Pe("完成第一位客人就解鎖！")}},e?`${$s[i.id].icon} 去${$s[i.id].name}（做客人）`:`🔒 ${$s[i.id].name}`):null,x("button",{class:"btn",onclick:()=>{J("tap"),Dl()}},"📚 圖鑑"),x("button",{class:"btn",onclick:()=>{J("tap"),mu(j)}},"🛍️ 商店"));Ke(x("div",{class:"hub-info"},x("div",{class:"chapter-tabs","aria-label":"選擇章節"},ea.map(a=>x("button",{class:`btn ${a.id===i.id?"primary":""}`,"data-chapter":a.id,"aria-pressed":String(a.id===i.id),onclick:()=>{Q().chapter=a.id,de(),J("tap"),ri()}},a.id==="eki"?"🚉":a.id==="hotel"?"🏨":Zn({home:"ui_open_shop",izakaya:"shop_deco_lantern",cafe:"dish_instant_coffee",sushi:"dish_salmon_nigiri",ramen:"dish_shoyu_ramen",konbini:"goods_bento",dark:"dish_dark_ding"}[a.id]),` ${{home:"食堂",izakaya:"居酒屋",cafe:"喫茶店",sushi:"壽司店",ramen:"拉麵店",konbini:"便利店",eki:"車站",hotel:"酒店",dark:"暗黑"}[a.id]}`))),x("div",{class:"panel-title"},i.name),x("div",{class:"sub"},`${i.intro}　完成 ${Q().chapterShifts[i.id]||0} 更`),i.id==="dark"?x("button",{class:"btn",onclick:()=>Dl("secrets")},`後廚捷徑圖鑑 · ${Object.keys(Q().darkSecrets).length} / 7`):null,t?x("div",{class:"special"},"🌟 今日特價：",x("span",{class:"jp-inline",html:He(t.jp)})," 金幣 x2"):null,UM(i.id),NM()),s).classList.add("hub-panel")}async function Nl({tutorial:n=!1,role:t=null}={}){ao=!0,uu(),j.setTheme(Q().chapter);const e=n?1:["eki","hotel"].includes(Q().chapter)?3:5,i={served:0,coins:0,perfect:0};let s=null;const a=Q().chapter==="izakaya"&&!n?jM(e):Q().chapter==="sushi"&&!n?OM(e):Q().chapter==="ramen"&&!n?BM(e):null,o=Q().chapter==="dark"&&!n;o&&($1(),await Y1());for(let c=0;c<e;c++){he("#shiftinfo").textContent=["eki","hotel"].includes(Q().chapter)?`旅程 ${c+1} / ${e}`:`客人 ${c+1} / ${e}`,he("#shiftinfo").classList.add("show");const l=Q().chapter==="eki"&&!n?await((t?t==="staff":c===1)?GM({index:c}):WM({index:c})):Q().chapter==="hotel"&&!n?await((t?t==="staff":c===1)?$M({index:c}):XM({index:c})):Q().chapter==="konbini"&&!n?await VM({index:c}):await qM({index:c,tutorial:n,forceDish:s,plan:a});if(l.cancelled){await Jt(700);continue}if(s=null,i.served++,i.coins+=l.coins,l.stars===3&&i.perfect++,o&&(i.coins+=await cM(j,Q().settings.subs==="tap"),(c===1||c===3)&&c<e-1&&(i.coins+=await oM()),an()),l.levelUps){const u=await vu();u&&(u.chapter||"home")===Q().chapter&&(s=u.dish)}}he("#shiftinfo").classList.remove("show"),j.catTo("kitchen"),o&&(i.coins+=rM(),i.dark=K1(i),q1()),Q().shifts++,Q().chapterShifts[Q().chapter]=(Q().chapterShifts[Q().chapter]||0)+1,de(),an(),kt(),j.setView("kitchen"),j.cat.happy(),J("level");const r=Q().shifts===1;await new Promise(c=>LM(i,{firstShift:r,onNext:()=>c(()=>ri()),onRest:()=>c(()=>Jf()),onShop:()=>c(()=>{ri(),mu(j)})})).then(c=>c())}function _u(n,t){if(t&&n===0)return ga[0];const e=Q(),i=e.deco.includes("deco_maneki")?3:1,s=ga.filter(r=>!r.legend||e.level>=2),a=s.map(r=>r.weight*(r.rare?i:1));let o=Math.random()*a.reduce((r,c)=>r+c,0);for(let r=0;r<s.length;r++)if(o-=a[r],o<=0)return s[r];return s[0]}function OM(n){const t=[];for(;t.length<n;)t.push(...Zt(["kan","wasabi","soy"]));return t.slice(0,n)}function FM(n,t){const e={kan:Ll.includes(n.dish),wasabi:["salmon_nigiri","tekkamaki"].includes(n.dish),soy:Ll.includes(n.dish)};return t&&e[t]?t:Object.keys(e).find(i=>e[i])||null}function BM(n){const t=[];for(;t.length<n;)t.push(...Zt(["noodle","soup"]));return t.slice(0,n)}function zM(n,t){return n.dish==="chahan"?null:t||"noodle"}function jM(n){const t=Zt([...Zt(["add","less","swap"]).slice(0,2),"cancel"]),e=Zt(["replace","decline"]);return Array.from({length:n},(i,s)=>s%2===0?t[s/2]:e[(s-1)/2])}async function HM(){ao=!0,uu(),an(),kt();const n=_u(0,!1),t=Zt(vl).slice(0,2+Math.floor(Math.random()*2)),e=t.reduce((C,E)=>C+E.price,0),i=["bag"];t.some(C=>C.heat)&&i.push("heat"),t.some(C=>C.cutlery)?i.push("cutlery"):Math.random()<.5&&i.push("point");const s={};i.forEach(C=>{s[C]=Math.random()<.5});const a=De(Fi);let o=0,r=0;const c=Q().settings.subs==="tap",l=[`買：${t.map(C=>C.yue).join("、")}`,...i.map(C=>(s[C]?na[C].yes:na[C].no).label),`付款：${a.label}`];await Js(()=>{j.catTo("konShop"),j.setView("kon",!0)}),If(l.slice(0,2).join("　"),l.join(`
`)),await j.konStaffIn(n),J("door"),Te("今次你做客人！買齊嘢，聽清楚收銀員問咩 🛒",3500),await Ft(j,"cust",zh.jp,zh.yue,"cat"),kt("cust");const u=async(C,E,A,N=null)=>{r++;let X=!0;for(;;){const v=await Fe(Zt(E.map((w,O)=>({value:O,el:fn(w.jp,{yue:w.yue,voice:"word"})}))),{title:x("div",{class:"panel-title"},C)});if(v.value===A)return J("good"),v.button.classList.add("right"),X&&o++,N&&(ge(N,X),ys("konbini",1)),await Ue(E[A].jp,"word"),X;J("bad"),v.button.classList.add("wrong"),X=!1,N&&ge(N,!1),Te(`「${E[v.value].yue}」唔啱，再試吓！`,2800),await Jt(700)}},h=C=>Zt(C).map(E=>({value:E,el:x("div",{class:"dish-opt"},x("span",{class:"jp-inline",html:He(Bi(E))}),x("small",{},`${E} 円`))}));r++,await new Promise(C=>{const E=new Set;let A=!0;const X=Zt([...t,...Zt(vl.filter(v=>!t.includes(v))).slice(0,3)]).map(v=>x("button",{class:"choice scan-item",type:"button",onclick:w=>{if(Ue(v.jp,"word"),!E.has(v.id)){if(!t.includes(v)){J("bad"),A=!1,w.currentTarget.classList.add("wrong"),Te(`「${v.yue}」唔係要買嘅`,2e3);return}E.add(v.id),J("coin"),w.currentTarget.classList.add("right"),E.size===t.length&&(A&&o++,setTimeout(C,500))}}},x("span",{class:"emo"},Zn(v.art,v.yue)),x("span",{class:"jp-inline",html:He(v.jp)}),x("small",{},"點一下聽發音")));Ke(x("div",{class:"panel-title"},`🛒 睇日文揀貨：${t.map(v=>v.yue).join("、")}`),x("div",{class:"choices cols2"},X))}),an();const m=`合計{ごうけい}は ${Bi(e)}です。`;await Ft(j,"cust",m,"（聽吓幾錢？）","cat",{hidden:!0}),r++;const f=Zt([e+100,Math.max(10,e-50),e+30,e-100].filter(C=>C>0&&C!==e)).slice(0,2);let g=!0;for(;;){const C=await Fe(h([e,...f]),{title:x("div",{class:"panel-title"},"💴 總共幾錢？（撳泡泡可以重聽）")});if(C.value===e){J("coin"),C.button.classList.add("right"),g&&o++;break}J("bad"),C.button.classList.add("wrong"),g=!1,Ue(m,"cat"),await Jt(700)}kt("cust");for(const C of i){const E=na[C];Ye((s[C]?E.yes:E.no).id),await Ft(j,"cust",E.ask.jp,E.ask.yue,"cat",{hidden:c}),kt("cust"),await u(`🗣️ ${E.title.replace("客人要唔要","你要唔要")}`,[E.yes,E.no],s[C]?0:1,(s[C]?E.yes:E.no).id)}if(Ye(a.id),await Ft(j,"cust",cr.jp,cr.yue,"cat",{hidden:c}),kt("cust"),await u("💳 點樣付款？",Fi,Fi.indexOf(a),a.id),a.id==="k_genkin"){const C=e<1e3?1e3:e<2e3?2e3:5e3,E=C-e,A=Qy(Bi(E));await Ft(j,"cust",A.jp,"（聽吓找返幾錢？）","cat",{hidden:!0}),r++;const N=Zt([E+100,E+10,E>100?E-100:E+200,E+50].filter(v=>v>0&&v!==E)).slice(0,2);let X=!0;for(;;){const v=await Fe(h([E,...N]),{title:x("div",{class:"panel-title"},`💴 你畀咗 ${C} 円，總共 ${e} 円，找返幾多？`)});if(v.value===E){J("perfect"),v.button.classList.add("right"),X&&o++;break}J("bad"),v.button.classList.add("wrong"),X=!1,Ue(A.jp,"cat"),await Jt(700)}kt("cust")}await Ft(j,"cust",lr.jp,lr.yue,"cat"),kt("cust");const _=Fn(iu);Ye(_.key);const p=await u("👋 離開前講咩？",[_,...Zt(tx).slice(0,2)],0,_.key);ys("konbini",_.lv??0),Tn(_.lv??0,p);const d=r?o/r:1,M=30+Math.round(d*60),y=15+Math.round(d*15);Q().coins+=M;const b=wi(y);de(),mn(),J("level"),await ii("返廚房 🏠",x("div",{class:"unlock"},x("div",{class:"big-emo spin"},d===1?"💮":d>.7?"⭕":"🔺"),x("div",{class:"panel-title"},`買嘢成功！一次答啱 ${o} / ${r}`),x("div",{class:"reward"},`🪙 +${M}　✨ +${y} XP`))),Vn(M),kt(),he("#taskbar").classList.remove("show"),j.customerOut(!0),await Js(()=>{j.catTo("kitchen"),j.setView("kitchen",!0)}),b&&await vu(),ri()}async function VM({index:n}){const t=Q(),e=t.level,i=_u(n,!1),s=t.settings.subs==="tap",a=Zt(vl).slice(0,2+Math.floor(Math.random()*2)),o=a.reduce((p,d)=>p+d.price,0),r=p=>p[Math.floor(Math.random()*p.length)];let c=0;an(),j.catTo("kon"),j.setView("kon",!0),j.catFace("customer"),J("door"),await j.customerIn(i),j.cat.play("wave",.8),await Ft(j,"cat",hn.irasshai.jp,hn.irasshai.yue,"cat"),kt("cat"),await new Promise(p=>{const d=new Set;let M=0;const y=x("div",{class:"scan-total"},"合計：0 円"),b=a.map(C=>x("button",{class:"choice scan-item",type:"button",onclick:E=>{d.has(C.id)||(d.add(C.id),M+=C.price,J("coin"),E.currentTarget.classList.add("right"),y.textContent=`合計：${M} 円`,d.size===a.length&&setTimeout(p,600))}},x("span",{class:"emo"},Zn(C.art,C.yue)),x("span",{class:"jp-inline",html:He(C.jp)}),x("small",{},`${C.price} 円`)));Ke(x("div",{class:"panel-title"},"🧾 逐件掃碼（撳每件貨品）"),x("div",{class:"choices cols2"},b),y)}),an(),await Ft(j,"cat",`合計{ごうけい}は ${Bi(o)}です。`,`總共 ${o} 円`,"cat"),kt("cat");const l=async(p,d,M,y,b,C)=>{let E=!0;for(Ye(b);;){if(Ft(j,"cust",p.jp,p.yue,C,{hidden:s}),(await Fe(Zt(d.map((N,X)=>({label:N,value:X}))),{title:x("div",{class:"panel-title"},y)})).value===M){ge(b,E),ys("konbini",1),J("good"),kt("cust");return}E&&c++,E=!1,ge(b,!1),J("bad"),Te(`佢講：「${p.yue}」— 再聽一次！`,3e3)}},u=["bag"];a.some(p=>p.heat)&&u.push("heat"),a.some(p=>p.cutlery)?u.push("cutlery"):Math.random()<.5&&u.push("point");for(const p of u){const d=na[p],M=Math.random()<.5,y=M?d.yes:d.no;Wa(y.jp,i.id),await Ft(j,"cat",d.ask.jp,d.ask.yue,"cat"),kt("cat"),await l(y,[d.yes.label,d.no.label],M?0:1,d.title,y.id,i.id)}await Ft(j,"cat",cr.jp,cr.yue,"cat"),kt("cat");const h=r(Fi);if(await l(h,Fi.map(p=>`${p.icon} ${p.label}`),Fi.indexOf(h),"客人點樣付款？",h.id,i.id),h.id==="k_genkin"){const p=o<1e3?1e3:o<2e3?2e3:5e3,d=p-o,M=Zt([d+100,d+10,d>100?d-100:d+200,d+50].filter(C=>C>0&&C!==d)).slice(0,2),y=Zt([d,...M]);await Ft(j,"cust",`${Bi(p)}で お願{ねが}いします。`,`用 ${p} 円付款。`,i.id),kt("cust"),Ye("k_otsuri");let b=!0;for(;;){if(await Ft(j,"cat",jh.jp,jh.yue,"cat"),kt("cat"),(await Fe(y.map(E=>({value:E,el:x("div",{class:"dish-opt"},x("span",{class:"jp-inline",html:He(Bi(E))}),x("small",{},`${E} 円`))})),{title:x("div",{class:"panel-title"},`💴 收咗 ${p} 円，總共 ${o} 円，應該找幾多？`)})).value===d){ge("k_otsuri",b),J("perfect");break}b&&c++,b=!1,ge("k_otsuri",!1),J("bad"),Te(`${p} − ${o} = ${d} 円`,3500)}}an(),await Ft(j,"cat",lr.jp,lr.yue,"cat"),kt("cat");const m=c===0?3:c===1?2:1,f=Math.round((40+o/10)*(.6+.4*(m/3))*i.tip),g=10+m*5;Ke(x("div",{class:"sub"},`🏪 ${a.map(p=>p.yue).join("、")}`),x("div",{class:"stars-big"},...[1,2,3].map(p=>x("span",{class:p<=m?"on":""},"★"))),x("div",{class:"reward"},`🪙 +${f}　✨ +${g} XP`)),[1,2,3].forEach(p=>p<=m&&setTimeout(()=>J("good"),p*180)),j.coinsFromCustomer(),Vn(f,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=f,t.served++,wi(g),mn(),await Jt(1600);const _=Fn(iu);return Ye(_.key),ge(_.key,!0),ys("konbini",_.lv),await Ft(j,"cust",_.jp,_.yue,ln(i.id,_)),kt("cust"),j.customerOut(),Ma(),{coins:f,stars:m,levelUps:Q().level-e}}function br(n,t,e,i){bM(n,t,e,i)==="level-done"&&qf(n,t)}function ys(n,t){AM(n,t)&&qf(n,t)}function qf(n,t){Q().coins+=100,de(),mn(),J("level");const e={konbini:"便利店",resto:"餐廳"}[n]||(ea.find(i=>i.id===n)||{}).name||n;Pe(`✅ ${e.split("・")[0]} ${si[t].name} 學晒！獎勵 🪙100`)}async function GM({index:n}){const t=Q(),e=t.level;Be();const i=t.settings.subs==="tap",s=t.settings.yue!==!1,a=De(ja),o={d:a.jp,dy:a.yue,n:ia[a.platform],p:a.platform},r=(C,E=o)=>C.replace(/\{(d|dy|n|p)\}/g,(A,N)=>E[N]),c=Ms(),l=c>=1&&Math.random()<.5;let u=0;an(),kt(),j.catTo("eki"),j.suitcase.visible=!1,j.setView("eki",!0),j.setMachine("きっぷ うりば",""),j.customerOut(!0),J("door"),await j.ekiStaffIn({id:"usagi",color:16447216,ear:"long"},"eki",!1);const h=(C,E)=>x("div",{class:"dish-opt"},x("span",{class:"jp-inline",html:He(C)}),s&&E?x("small",{},E):null),m=l?mc[c].tourist:{jp:r(ur[c].ok.jp),yue:r(ur[c].ok.yue)};await ii("你係駅員 ▶",x("div",{class:"panel-title"},"🧑‍✈️ 今次你做駅員。聽遊客問乜，揀啱嘅答案。")),await Ft(j,"cust",m.jp,m.yue,"usagi",{hidden:i}),kt("cust");let f;if(l)f=[mc[c].ok,...mc[c].bad];else{const C=Zt([1,2,3,4].filter(N=>N!==a.platform))[0],E={...o,n:ia[C],p:C},A=yl[c];f=[{jp:r(A.jp),yue:r(A.yue)},{jp:r(A.jp,E),yue:r(A.yue,E),why:`${a.yue}係 ${a.platform} 號月台，唔係 ${C} 號`},{...fx[c]}]}const g=Zt(f.map((C,E)=>E)),_=g.indexOf(0);let p=!0;const d=x("div",{class:"panel-title"},fn(m.jp,{yue:m.yue,voice:"usagi",hidden:i}),x("div",{class:"sub"},l?"遊客搭過站，你點答？":`📋 案內表：${a.jp.replace(/\{.*?\}/g,"")} → ${ia[a.platform].replace(/\{.*?\}/g,"")}（${a.platform} 號月台）　遊客想去 ${a.yue}，你點答？`));for(;;){const C=await Fe(g.map((E,A)=>({el:h(f[E].jp,f[E].yue),value:A})),{title:d});if(C.value===_){Tn(c,p),br("eki",c,l?"s:os":"s:ask",p),J("good");break}p&&u++,p=!1,Tn(c,!1),J("bad"),Te(f[g[C.value]].why||"再諗吓！",3200)}await Ft(j,"cat",f[0].jp,f[0].yue,"cat"),kt("cat"),j.cat.happy(),await Ft(j,"cust",Gh.jp,Gh.yue,"usagi",{hidden:i}),kt("cust"),j.customerOut(!0);const M=u===0?3:u<=2?2:1,y=Math.round(70*(.6+.4*(M/3))),b=10+M*5;return Ke(x("div",{class:"sub"},`🧑‍✈️ 駅員 · ${l?"乗り過ごし":"問月台"}`),x("div",{class:"stars-big"},...[1,2,3].map(C=>x("span",{class:C<=M?"on":""},"★"))),x("div",{class:"reward"},`🪙 +${y}　✨ +${b} XP`)),[1,2,3].forEach(C=>C<=M&&setTimeout(()=>J("good"),C*180)),Vn(y,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=y,t.served++,wi(b),mn(),await Jt(1600),Ma(),{coins:y,stars:M,levelUps:Q().level-e}}async function WM({index:n}){const t=Q(),e=t.level,i=Be(),s=t.settings.subs==="tap",a=t.settings.yue!==!1,o=De(ja),r=1+Math.floor(Math.random()*3),c=i>=2&&Math.random()<.4,l=o.fare+(c?Hh:0),u=l*r,h=L=>L.replace(/\{.*?\}/g,""),m=(L,U)=>L.replace(/\{(d|dy|n|p)\}/g,(I,F)=>U[F]),f={d:o.jp,dy:o.yue,n:ia[o.platform],p:o.platform};let g=0;const _=(L,U,I)=>x("div",{class:"dish-opt"},x("span",{class:"jp-inline",html:He(L)}),I?x("small",{},I):a&&U?x("small",{},U):null),p=(L,U,I)=>x("div",{class:"panel-title"},L?fn(L.jp,{yue:L.yue,voice:U,hidden:s,autoplay:!0}):null,I?x("div",{class:"sub"},I):null),d=async({line:L=null,voice:U="usagi",options:I,correct:F,caption:ot,word:ut,lv:tt,unit:Pt=null,ulv:jt=null})=>{let K=!0;for(ut&&Ye(ut);;){const ct=await Fe(I.map((Mt,_t)=>({el:Mt.el,value:_t})),{title:p(L,U,ot)});if(ct.value===F)return ut&&ge(ut,K),tt!=null&&Tn(tt,K),Pt&&br("eki",jt??tt??i,Pt,K),J("good"),ct.value;K&&g++,K=!1,ut&&ge(ut,!1),tt!=null&&Tn(tt,!1),J("bad"),Te(I[ct.value].why||(L?`再聽一次：「${L.yue}」`:"再諗吓！"),3200)}},M=L=>{const U=Zt(L.map((I,F)=>F));return{options:U.map(I=>L[I]),correct:U.indexOf(0)}},y={id:"kuma",color:9067067,ear:"round"};an(),kt(),j.catTo("eki"),j.setView("eki",!0),j.setMachine("行き先を えらぶ",""),j.customerOut(!0),J("door"),await j.ekiStaffIn(y,"eki");const b=i>=2?`🎫 今次旅程：去 ${o.yue}，成人 ${r} 位。${c?`你要搭特急，要買特急券（每位加 ${Hh} 円）。`:"你買嘅係普通車票（唔包特急）。"}`:`🎫 今次旅程：去 ${o.yue}，成人 ${r} 位。`;await ii("出發 ▶",x("div",{class:"panel-title"},b));const C=Zt(ja.filter(L=>L.id!==o.id)).slice(0,3);await d({line:ox,caption:`去 ${o.yue}`,word:`eki_d_${o.id}`,...M([o,...C].map(L=>({el:_(L.jp,"",`${L.fare} 円`),why:L.id===o.id?"":`呢個係 ${L.yue}，你要去 ${o.yue}`})))}),j.setMachine(h(o.jp),`${o.fare} 円 × ?`),await d({line:rx,caption:`成人 ${r} 位`,word:"eki_mai",options:[1,2,3].map(L=>({el:_(`大人{おとな} ${ax[L]}`,`${L} 張`),why:`你要買 ${r} 張`})),correct:r-1}),i>=2&&await d({line:lx,caption:c?"你要搭特急":"你只買普通車票",word:"eki_tokkyu",unit:"t:kind",ulv:i,...M((c?[Fo.ltd,Fo.plain]:[Fo.plain,Fo.ltd]).map((L,U)=>({el:_(L.jp,L.yue),why:U===0?"":c?"你要搭特急，要買特急券":"你只買普通車票，唔使特急券"})))}),j.setMachine(h(o.jp),`${l} 円 × ${r}`);const E=[...new Set([l*(r+1),l*(r>1?r-1:r+2),l+10])].filter(L=>L!==u).slice(0,2);await d({line:cx(u),caption:`${l} 円 × ${r} 位 = ?`,word:"eki_kippu",...M([u,...E].map(L=>({el:_(Bi(L),"",`${L} 円`),why:`${l} × ${r} = ${u} 円`})))}),j.setMachine("きっぷ",`${u} 円`),J("coin"),await Ft(j,"cust",Vh.jp,Vh.yue,"kuma",{hidden:s}),kt("cust");const A=Ms(),N=ur.find(L=>L.lv===A)||ur[0],X=yl.find(L=>L.lv===A)||yl[0];await d({caption:"問駅員：去呢個目的地要喺邊個月台上車？",word:"eki_ikisaki",lv:A,unit:"t:ask",...M([N.ok,...N.bad].map(L=>({el:_(m(L.jp,f),m(L.yue,f)),why:L.why})))}),await Ft(j,"cat",m(N.ok.jp,f),m(N.ok.yue,f),"cat"),kt("cat"),await Ft(j,"cust",m(X.jp,f),m(X.yue,f),"kuma",{hidden:s}),kt("cust");const v=Zt([1,2,3,4].filter(L=>L!==o.platform)).slice(0,2);await d({caption:ux.yue,word:"eki_bansen",...M([o.platform,...v].map(L=>({el:_(ia[L],`${L} 號月台`),why:`駅員講咗 ${o.platform} 號月台`})))}),j.customerOut(!0),j.catTo("pf"),j.setView("ekiPf",!0),j.setPlatform(o.platform,[h(o.jp),"各駅停車","快速"]),await Jt(400);const w=async(L,U)=>{const I=hx(i,o.platform,L.type,L.dest),F=j.trainArrive(h(L.dest.jp),L.type.short,L.type.color),ot=i>=2?`你要去 ${o.yue}（${c?"特急券":"普通車票"}）`:`你要去 ${o.yue}`;await d({line:I,voice:"usagi",caption:ot,word:U?"eki_noru":"eki_matsu",unit:"t:ann",ulv:i,options:[{el:_(Bo.ride.jp,Bo.ride.yue),why:L.dest.id!==o.id?`呢班車去 ${L.dest.yue}，唔係 ${o.yue}`:c?`你買咗特急券，要搭特急，${L.type.yue}唔啱`:`${L.type.yue}唔包喺你嘅普通車票`},{el:_(Bo.wait.jp,Bo.wait.yue),why:"呢班就係你要搭嘅！"}],correct:U?0:1}),await F,U?(j.cat.happy(),J("perfect"),await Jt(900)):await Jt(500),await j.trainLeave()};if(i>=3&&Math.random()<.5){const L=De(xl);await j.ekiStaffIn(y,"pf"),await d({line:dx,voice:"usagi",caption:`🚨 ${L.task}`,lv:3,word:"eki_jinshin",unit:`t:inc${xl.indexOf(L)}`,...M([L.ok,...L.bad].map(U=>({el:_(U.jp,U.yue),why:U.why})))}),await Ft(j,"cat",L.ok.jp,L.ok.yue,"cat"),kt("cat"),await Ft(j,"cust",L.reply.jp,L.reply.yue,"kuma",{hidden:s}),kt("cust"),j.customerOut(!0)}else{const L=De(ja.filter(F=>F.id!==o.id)),U=c?[Hs[2]]:Hs.filter(F=>F.ok),I=i>=2&&Math.random()<.5?{dest:o,type:c?De(Hs.filter(F=>F.ok)):Hs[2]}:{dest:L,type:i>=2?De(U):Hs[0]};await w(I,!1),await w({dest:o,type:i>=2?De(U):Hs[0]},!0)}await Ft(j,"cat",Wh.jp,Wh.yue,"cat"),kt("cat");const O=g===0?3:g<=2?2:1,k=Math.round((50+u/10)*(.6+.4*(O/3))),B=10+O*5;return Ke(x("div",{class:"sub"},`🚉 ${o.yue} · 成人 ${r} 位 · ${u} 円`),x("div",{class:"stars-big"},...[1,2,3].map(L=>x("span",{class:L<=O?"on":""},"★"))),x("div",{class:"reward"},`🪙 +${k}　✨ +${B} XP`)),[1,2,3].forEach(L=>L<=O&&setTimeout(()=>J("good"),L*180)),Vn(k,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=k,t.served++,wi(B),mn(),await Jt(1600),Ma(),{coins:k,stars:O,levelUps:Q().level-e}}const Yf=(n,t="cat")=>x("span",{class:"mini-spk",role:"button",tabindex:0,"aria-label":"試聽",onclick:e=>{e.stopPropagation(),e.preventDefault(),J("tap"),Ue(n,t)}},"🔊");async function $M({index:n}){const t=Q(),e=t.level,i=t.settings.subs==="tap",s=t.settings.yue!==!1,a=Ms(),o=De(["req","checkin","checkout"]),r=yx[a],c=[{jp:"一人{ひとり}",yue:"一位"},{jp:"二人{ふたり}",yue:"兩位"}],l=Math.floor(Math.random()*2),u=1+Math.floor(Math.random()*3),h=2+Math.floor(Math.random()*8),m=h*100+1+Math.floor(Math.random()*9),f=(O,k)=>({p:c[l].jp,py:c[l].yue,q:c[1-l].jp,n:of[u],nn:`${u} 晚`,f:Ko(O),fn:String(O),r:Ha(k),rn:String(k)}),g=(O,k)=>O.replace(/\{(py|p|q|nn|n|fn|f|rn|r)\}/g,(B,L)=>k[L]),_=f(h,m);let p=o==="checkin"?"s:ci":"s:co",d;if(o==="req"){const O=De(sa[a]);p=`s:rq${sa[a].indexOf(O)}`;const k=sa.flat().filter(L=>L.reply.jp!==O.reply.jp).map(L=>L.reply),B=Zt(k).slice(0,r?1:2).map(L=>({...L,why:"呢句答咗另一個要求，客人問嘅唔係呢樣"}));d={task:O.task,ok:O.ok,reply:O.reply,items:[O.reply,...B,...r?[r]:[]]}}else if(o==="checkin"){const O=cf[a],k=Zt([2,3,4,5,6,7,8,9]).slice(0,3).sort((tt,Pt)=>tt-Pt),B=tt=>tt*100+1+Math.floor(Math.random()*9);let L,U,I,F,ot={};if(a<=1){const tt=De(k);L=a===0?{jp:`${Ko(tt)}が いいです。`,yue:`我想要 ${tt} 樓。`}:{jp:`${Ko(tt)}の 部屋{へや}を お願{ねが}いします。`,yue:`唔該，我要 ${tt} 樓嘅房。`},U=B(tt),I=k.filter(Pt=>Pt!==tt).slice(0,2).map(B),F=`客人想要 ${tt} 樓`}else if(a===2){const tt=Math.random()<.5;L=tt?{jp:"できるだけ 高{たか}い 階{かい}の 部屋{へや}が いいんですが。",yue:"想盡量要高層嘅房。"}:{jp:"できるだけ 低{ひく}い 階{かい}の 部屋{へや}が いいんですが。",yue:"想盡量要低層嘅房。"};const Pt=tt?k[2]:k[0];U=B(Pt),I=k.filter(jt=>jt!==Pt).map(B),F=tt?"客人要高層，揀最高樓層":"客人要低層，揀最低樓層",[U,...I].forEach(jt=>{ot[jt]=`${Math.floor(jt/100)} 樓`})}else{L={jp:"静{しず}かで、 エレベーターから 遠{とお}い 部屋{へや}を お願{ねが}いできますか。",yue:"可唔可以要安靜、遠離升降機嘅房？"};const Pt=Zt([2,3,4,5,6,7,8,9]).slice(0,3).map(B);U=Pt[0],I=Pt.slice(1),ot[U]="走廊盡頭，遠離升降機・安靜",ot[I[0]]="升降機隔籬",ot[I[1]]="近製冰機・較嘈",F="客人要安靜、遠離升降機嘅房"}const ut=(tt,Pt)=>({jp:Ha(tt),yue:`${tt} 號房`,tag:ot[tt]||"",voice:"word",why:Pt?"":`呢間唔合客人要求：${F}`});d={pre:{jp:g(O.ok.jp,_),yue:g(O.ok.yue,_)},task:"客人入住：聽佢嘅要求，揀合適嘅房間",ok:L,reply:{jp:`${Ha(U)}は いかがでしょうか。`,yue:`${U} 號房可以嗎？`},items:[ut(U,!0),...I.map(tt=>ut(tt,!1))]}}else{const O=uf[a],k=O.reply,B=lf[a],L=[{...rf,why:"客人係離開，唔係剛到"},{jp:g(B.jp,_),yue:g(B.yue,_),why:"呢句係入住時先講"}];d={task:"客人退房",ok:O.ok,reply:k,items:[k,...L.slice(0,r?1:2),...r?[r]:[]]}}const M=d.items;let y=0;an(),kt(),j.catTo("hotel"),j.suitcase.visible=!1,j.cat.root.position.set(.55,0,-.75),j.cat.root.rotation.y=.25,j.setView("hotel",!0),j.customerOut(!0),J("door"),await j.hotelStaffIn({id:"usagi",color:16447216,ear:"long"},!0),await ii("你係前台 ▶",x("div",{class:"panel-title"},"🛎️ 今次你做酒店前台。聽客人講乜，揀啱嘅回答。")),d.pre&&(await Ft(j,"cust",d.pre.jp,d.pre.yue,"usagi",{hidden:i}),kt("cust")),await Ft(j,"cust",d.ok.jp,d.ok.yue,"usagi",{hidden:i}),kt("cust");const b=Zt(M.map((O,k)=>k)),C=b.indexOf(0),E=O=>x("div",{class:"dish-opt"},x("span",{class:"jp-inline",html:He(O.jp)}),O.tag?x("small",{},O.tag):s&&O.yue?x("small",{},O.yue):null,Yf(O.jp,O.voice||"cat")),A=x("div",{class:"panel-title"},fn(d.ok.jp,{yue:d.ok.yue,voice:"usagi",hidden:i}),x("div",{class:"sub"},`客人情況：${d.task}。你點答？`));let N=!0;for(;;){const O=await Fe(b.map((k,B)=>({el:E(M[k]),value:B})),{title:A});if(O.value===C){Tn(a,N),br("hotel",a,p,N),J("good");break}N&&y++,N=!1,Tn(a,!1),J("bad"),Te(M[b[O.value]].why||"再諗吓！",3400)}await Ft(j,"cat",d.reply.jp,d.reply.yue,"cat"),kt("cat"),j.cat.happy(),await Ft(j,"cust",$h.jp,$h.yue,"usagi",{hidden:i}),kt("cust"),j.customerOut(!0);const X=y===0?3:y<=2?2:1,v=Math.round(70*(.6+.4*(X/3))),w=10+X*5;return Ke(x("div",{class:"sub"},"🛎️ 前台 · 回應客人"),x("div",{class:"stars-big"},...[1,2,3].map(O=>x("span",{class:O<=X?"on":""},"★"))),x("div",{class:"reward"},`🪙 +${v}　✨ +${w} XP`)),[1,2,3].forEach(O=>O<=X&&setTimeout(()=>J("good"),O*180)),Vn(v,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=v,t.served++,wi(w),mn(),await Jt(1600),Ma(),{coins:v,stars:X,levelUps:Q().level-e}}async function XM({index:n}){const t=Q(),e=t.level,i=t.settings.subs==="tap",s=t.settings.yue!==!1,a=Ms(),o={id:"kuma",color:9067067,ear:"round"},r=[{jp:"一人{ひとり}",yue:"一位"},{jp:"二人{ふたり}",yue:"兩位"}],c=Math.floor(Math.random()*2),l=1+Math.floor(Math.random()*3),u=2+Math.floor(Math.random()*8),h=u*100+1+Math.floor(Math.random()*9),m={p:r[c].jp,py:r[c].yue,q:r[1-c].jp,n:of[l],nn:`${l} 晚`,f:Ko(u),fn:String(u),r:Ha(h),rn:String(h)},f=(k,B=m)=>k.replace(/\{(py|p|q|nn|n|fn|f|rn|r)\}/g,(L,U)=>B[U]);let g=0;const _=(k,B,L,U="cat")=>x("div",{class:"dish-opt"},x("span",{class:"jp-inline",html:He(k)}),L?x("small",{},L):s&&B?x("small",{},B):null,Yf(k,U)),p=(k,B,L,U=!0)=>x("div",{class:"panel-title"},k?fn(k.jp,{yue:k.yue,voice:B,hidden:i,autoplay:U}):null,L?x("div",{class:"sub"},L):null),d=async({line:k=null,voice:B="kuma",options:L,correct:U,caption:I,word:F,lv:ot,auto:ut=!0,unit:tt=null})=>{let Pt=!0;for(F&&Ye(F);;){const jt=await Fe(L.map((K,ct)=>({el:K.el,value:ct})),{title:p(k,B,I,ut)});if(jt.value===U)return F&&ge(F,Pt),ot!=null&&Tn(ot,Pt),tt&&ot!=null&&br("hotel",ot,tt,Pt),J("good"),jt.value;Pt&&g++,Pt=!1,F&&ge(F,!1),ot!=null&&Tn(ot,!1),J("bad"),Te(L[jt.value].why||"再諗吓！",3600)}},M=k=>{const B=Zt(k.map((L,U)=>U));return{options:B.map(L=>({el:_(f(k[L].jp),f(k[L].yue)),why:k[L].why?f(k[L].why):""})),correct:B.indexOf(0)}},y=async(k,B)=>{const L={jp:f(B.jp),yue:f(B.yue)};await Ft(j,k,L.jp,L.yue,k==="cat"?"cat":"kuma",k==="cat"?{}:{hidden:i}),kt(k)};an(),kt(),j.catTo("hotel"),j.setView("hotel",!0),j.customerOut(!0),J("door"),await j.hotelStaffIn(o),await ii("入去 ▶",x("div",{class:"panel-title"},`🏨 今次住宿：${m.nn}，${m.py}。`)),await y("cust",rf);const b=cf[a];await d({caption:`🧳 ${f(b.task)}`,word:"hotel_checkin",lv:a,unit:"t:ci",...M([b.ok,...b.bad])}),await y("cat",b.ok);const C=lf[a];await y("cust",C);const E=Zt([1,2,3,4,5,6,7,8,9].filter(k=>k!==h%100)).slice(0,2).map((k,B)=>B===0?(u%8+2)*100+k:u*100+k);await d({line:{jp:f(C.jp),yue:f(C.yue)},voice:"kuma",auto:!1,caption:vx.yue,word:"hotel_goshitsu",lv:a,unit:"t:rm",...(()=>{const k=[h,...E],B=Zt(k.map((L,U)=>U));return{options:B.map(L=>({el:_(Ha(k[L]),"",String(k[L]),"word"),why:`前台講嘅係 ${h} 號房`})),correct:B.indexOf(0)}})()}),j.cat.happy();const A=De(sa[a]),N=`t:rq${sa[a].indexOf(A)}`;await ii("入咗房 ▶",x("div",{class:"panel-title"},`🛏️ 你住喺 ${h} 號房。`)),await d({caption:`📞 ${A.task}`,word:a>=2?"hotel_kikanai":"hotel_taoru",lv:a,unit:N,...M([A.ok,...A.bad])}),await y("cat",A.ok),await y("cust",A.reply);const X=uf[a];await ii("第二日 ▶",x("div",{class:"panel-title"},"🌅 住完喇，落去前台退房。")),await d({caption:"🧳 你想退房",word:"hotel_checkout",lv:a,unit:"t:co",...M([X.ok,...X.bad])}),await y("cat",X.ok),await y("cust",X.reply),j.customerOut(!0);const v=g===0?3:g<=2?2:1,w=Math.round(90*(.6+.4*(v/3))),O=12+v*5;return Ke(x("div",{class:"sub"},`🏨 ${m.nn} · ${h} 號房`),x("div",{class:"stars-big"},...[1,2,3].map(k=>x("span",{class:k<=v?"on":""},"★"))),x("div",{class:"reward"},`🪙 +${w}　✨ +${O} XP`)),[1,2,3].forEach(k=>k<=v&&setTimeout(()=>J("good"),k*180)),Vn(w,{x:innerWidth*.7,y:innerHeight*.35}),t.coins+=w,t.served++,wi(O),mn(),await Jt(1600),Ma(),{coins:w,stars:v,levelUps:Q().level-e}}async function qM({index:n,tutorial:t,forceDish:e,plan:i}){var Gt;const s=Q(),a=s.level,o=s.chapter==="cafe"?ga[n%fc.length]:_u(n,t),r=$f(),c=e||Ef(r.map(V=>V.dish));let l=r.find(V=>V.dish===c)||r[0];const u=s.chapter==="izakaya"&&!t?i==null?void 0:i[n]:null,h=s.chapter==="sushi"&&!t?FM(l,i==null?void 0:i[n]):null,m=s.chapter==="ramen"&&!t?zM(l,i==null?void 0:i[n]):null,f=CM(l.dish),g=u==="less"||h==="kan"||s.level>=2&&!t&&l.chapter!=="dark"&&Math.random()<.45;let _=u==="less"?2+Math.floor(Math.random()*2):g?1+Math.floor(Math.random()*3):1;const p=l.chapter==="dark";p&&(_=1,Nt.persona=J1(),Nt.custId=o.id);const d=Fn(p?Cx:g?du:hu),M=p?{jp:d.jp.replace("{dish}",l.jp),yue:d.yue.replace("{dishYue}",l.yue)}:qn(d,g?{dish:l.dish,num:f[_-1]}:{dish:l.dish}),y=ln(o.id,d);Wa(M.jp,y);const b={3:Fn(Di.great),2:Fn(Di.ok),1:Fn(Di.meh)};for(const V of Object.values(b))Wa(V.jp,ln(o.id,V));an(),j.setView("kitchen"),j.catFace("customer"),J("door"),await j.customerIn(o),o.rare&&(J("rare"),Pe(`✨ 稀有客人：${o.yue}！ 貼士 x${o.tip}`,2600,"rare")),p&&(Z1(Nt.persona),$i()),j.cat.play("wave",.8),await Ft(j,"cat",hn.irasshai.jp,hn.irasshai.yue,"cat"),kt("cat");const C=s.settings.subs==="tap";let E=0,A=!1;t&&n===0&&Te("客人講緊要咩，聽完揀啱嘅菜！",3500);const N=s.chapter==="ramen"&&!t;for(;!A;){Ft(j,"cust",M.jp,M.yue,y,{hidden:C});const V=Zt(r).map(at=>{const st=me(at.dish);return{value:at.dish,el:x("div",{class:N?"dish-opt ticket-btn":"dish-opt"},x("span",{class:"emo"},ai(st)),x("span",{class:"jp-inline",html:He(st.jp)}),N?x("span",{class:"ticket-price"},`${at.price}円`):null)}}),R=await Fe(V,{title:x("div",{class:"panel-title"},N?"🎫 食券機：幫客人買券":"🐾 客人要咩？"),cols:Math.min(V.length,2)});N&&J("coin");let ht=1;if(R.value===l.dish&&g&&(ht=(await Fe(f.map((st,dt)=>({value:dt+1,el:x("div",{class:"dish-opt"},x("span",{class:"emo"},ai(me(st))),x("span",{class:"jp-inline",html:He(me(st).jp)}))})),{title:x("div",{class:"panel-title"},"要幾多個？"),cols:3})).value),R.value===l.dish&&ht===_)A=!0,J("good"),ge(l.dish,E===0),g&&ge(f[_-1],E===0),d.key&&!p&&(Ye(d.key),ge(d.key,E===0),ys("resto",d.lv??0));else{E++,J("bad"),j.cat.play("sad",.6);const at=Fn(Di.wrong);await Ft(j,"cust",at.jp,at.yue,ln(o.id,at)),Te(`佢講：「${M.yue}」— 再聽一次！`,3500),ge(l.dish,!1),await Jt(600)}}Ye(l.dish),kt("cust");const X=async(V,R,ht,at,st,dt,mt=y)=>{let vt=!0;for(Ye(st);;){if(Ft(j,"cust",V,R,mt,{hidden:C}),(await Fe(Zt(ht.map((S,$)=>({label:S,value:$}))),{title:x("div",{class:"panel-title"},dt)})).value===at){ge(st,vt),J("good"),kt("cust");return}vt=!1,ge(st,!1),J("bad"),Te(R,3e3)}};if(Q().chapter==="home"&&!t&&Be()>0&&Math.random()<.3){const V=k1(l.dish);if(V){const R=ln(o.id,V.d);Ye(V.d.key);let ht=!0;for(;;){if(Ft(j,"cust",V.d.jp,V.d.yue,R,{hidden:C}),(await Fe(Zt([V.d.label,...V.wrongs].map((st,dt)=>({label:st,value:dt===0?0:-1}))),{title:x("div",{class:"panel-title"},"客人再補一句？")})).value===0){ge(V.d.key,ht),Tn(V.d.lv,ht),J("good"),kt("cust");break}ht=!1,ge(V.d.key,!1),J("bad"),Te(V.d.yue,3e3)}}}const v=()=>(kt("cust"),j.cat.play("sad",.6),Pe("客人取消咗訂單，今次冇收入"),j.customerOut(),{coins:0,stars:0,levelUps:0,cancelled:!0}),w=V=>V[Math.floor(Math.random()*V.length)],O=V=>me(V.dish).yue.replace(/（.*?）/g,"");if(Q().chapter==="izakaya"&&(u?!["replace","decline"].includes(u):n%2===0)){const V=r.filter(bt=>bt.id!==l.id),R=[["add",3],["cancel",1],..._>=2?[["less",2]]:[],...V.length?[["swap",3]]:[]];let ht=Math.random()*R.reduce((bt,[,yt])=>bt+yt,0),at=u||(R.find(([,bt])=>(ht-=bt)<=0)||R[0])[0];(at==="swap"&&!V.length||at==="less"&&_<2)&&(at="add");const st=bt=>`改做${O(bt)}`,dt=at==="swap"?w(V):null,mt={add:D1,less:U1,swap:N1,cancel:O1}[at],vt={add:"tsuika",less:"herasu",swap:"kaeru",cancel:"kyanseru"}[at],P={add:"加一份",less:"減一份",cancel:"取消訂單",swap:dt&&st(dt)}[at],S=Fn(mt),$=dt?qn(S,{dish:dt.dish}):S,et=["加一份","減一份","取消訂單"],rt=V.filter(bt=>bt!==dt);rt.length&&et.push(st(w(rt)));const nt=Zt(et.filter(bt=>bt!==P)).slice(0,2);if(await X($.jp,$.yue,[P,...nt],0,vt,"客人想改張單？",ln(o.id,S)),at==="add")_++,Pe(`加單成功：共 ${_} 份`);else if(at==="less")_--,Pe(`減咗一份：共 ${_} 份`);else if(at==="swap")l=dt,Ye(l.dish),ge(l.dish,!0),Pe(`改做 ${O(l)}`);else return v()}else if(Q().chapter==="izakaya"){const V=r.find(dt=>dt.id!==l.id),R=qn(Fn(L1),{dish:l.dish});if(await Ft(j,"cat",R.jp,R.yue,"cat"),kt("cat"),!V||(u?u==="decline":Math.random()<.25)){const dt=Fn(F1),mt=V?[me(V.dish).yue]:[];return await X(dt.jp,dt.yue,["取消所有訂單",me(l.dish).yue,...mt].slice(0,3),0,"yameru","沽清後，客人點樣話？",ln(o.id,dt)),v()}const ht=me(V.dish),at=Fn(I1),st=qn(at,{dish:V.dish});await X(st.jp,st.yue,[ht.yue,me(l.dish).yue,"取消所有訂單"],0,"urikire","沽清後，客人改要邊款？",ln(o.id,at)),l=V,Ye(l.dish),ge(l.dish,!0)}let k=null,B=null;if(Q().chapter==="cafe"&&["instant_coffee","black_tea","matcha_latte"].includes(l.id)){const V=fc[n%fc.length],R=Q().regularVisits[V.id]||0;k=V.request,B=V.id,l={...l,steps:[...l.steps,{type:"request",request:k,jp:V.jp,yue:V.yue,voice:o.id,title:`${V.name} · ${R?`第 ${R+1} 次到訪`:"初次到訪"}：點樣調製？`}]}}if(h==="wasabi"){const V=dc[Math.floor(Math.random()*dc.length)];k=V.id,l={...l,steps:[...l.steps,{type:"request",request:V.id,jp:V.jp,yue:V.yue,voice:o.id,title:"客人對山葵有要求，點整？",retry:"再聽一次：留意客人想要幾多山葵。",actions:dc.map(R=>({id:R.id,icon:R.icon,label:R.label,detail:R.detail}))}]}}if(m){const V=Jy[m],R=V[Math.floor(Math.random()*V.length)];k=R.id,Pe(`🎫 收到食券：${me(l.dish).yue}`),l={...l,steps:[...l.steps,{type:"request",request:R.id,jp:R.jp,yue:R.yue,voice:o.id,title:m==="noodle"?"客人對麵條有要求，點整？":"客人對湯底有要求，點整？",retry:"再聽一次：留意客人講麵硬度，定係湯濃淡。",actions:V.map(ht=>({id:ht.id,icon:ht.icon,label:ht.label,detail:ht.detail}))}]}}s.cooked[l.id]||await new Promise(V=>Wf(l,{onStart:V}));const L=await YM(l);let U=null;l.chapter==="dark"&&(j.setView("serve"),U=tM(l,L,await Q1(l,j))),k==="iced"&&((Gt=j.dish)==null||Gt.add(pf())),B&&(s.regularVisits[B]=(s.regularVisits[B]||0)+1);const I=L>=.9?3:L>=.65?2:1;s.stars[l.id]=Math.max(s.stars[l.id]||0,I),s.cooked[l.id]=(s.cooked[l.id]||0)+1,j.setView("serve"),j.slideDishToCustomer(),await Jt(500),h==="soy"&&(kt("cust"),await X(Bh.jp,Bh.yue,Zy,0,"shoyu_tsukeru","壽司應該點沾豉油？"));const F=b[I],ot=ln(o.id,F);j.customerJump();const ut=Wa(F.jp,ot),tt=Promise.race([Ft(j,"cust",F.jp,F.yue,ot),ut.then(()=>Jt(6e3),()=>Jt(6e3))]),Pt=Xf()===l.id;let jt=1;U&&(jt=U.lookMult,await tt,await Jt(400),kt("cust"),await sM(j,o,U,C));const K=U?Nt.persona.pay*jt*(.8+(s.darkRating??3)*.08):1;let ct=Math.round(l.price*_*(.6+.4*L)*o.tip*(Pt?2:1)*K/10);C&&E===0&&(ct*=2),U&&(ct=aM(U,ct));const Mt=U?{none:`💰 +${U.bonus} 入彩池`,believe:`💰 +${U.bonus} 入彩池`,honest:"老實 x0.8",expose:"被揭穿",plain:"如實介紹"}[U.outcome]:null,_t=10+I*5;Ke(x("div",{class:"sub"},`${me(l.dish).yue} × ${_}${k?` · ${me(k).yue}`:""}`),x("div",{class:"stars-big"},...[1,2,3].map(V=>x("span",{class:V<=I?"on":""},"★"))),x("div",{class:"reward"},`🪙 +${ct}　✨ +${_t} XP`,Pt?x("span",{class:"tag"},"特價 x2"):null,Mt?x("span",{class:"tag"},Mt):null,C&&E===0?x("span",{class:"tag"},"🎧 x2"):null)),[1,2,3].forEach(V=>V<=I&&setTimeout(()=>J("good"),V*180)),j.coinsFromCustomer(),Vn(ct,{x:innerWidth*.7,y:innerHeight*.35}),s.coins+=ct,s.served++,wi(_t),mn(),await Promise.all([Jt(1600),tt.then(()=>Jt(400))]),U&&(kt(),await lM(l,U)),j.removeDish();const Ht=!(t&&n===0)&&!p;let At=0;Ht&&(At=await KM(o));const Dt=Fn(Di.bye);return Ht&&Dt.key&&Math.random()<1/3?await JM(o,Dt):await Ft(j,"cust",Dt.jp,Dt.yue,ln(o.id,Dt)),kt("cust"),j.customerOut(),Ma(),{coins:ct+At,stars:I,levelUps:Q().level-a}}async function YM(n){an(),j.setView("cook"),j.useStation(n.station),j.clearWork();const t=[];for(const i of n.steps){const s=await yM[i.type](i,j);t.push({score:s,weight:i.weight||1}),i.verb&&(Ye(i.verb),ge(i.verb,s>=.7))}T1();const e=t.reduce((i,s)=>i+s.score*s.weight,0)/t.reduce((i,s)=>i+s.weight,0);return j.showDish(n.dish),j.catFace("front"),j.cat.happy(),J("perfect"),an(),await Ft(j,"cat",hn.done.jp,hn.done.yue,"cat"),kt("cat"),e}async function KM(n){const{st:t,wrongs:e}=C1(Q().chapter,Ef),i=ln(n.id,t);Ye(t.key);const s=Q().settings.subs==="tap";Ft(j,"cust",t.jp,"",i,{hidden:s});const a=Zt([{value:!0,label:t.yue},...e.map(c=>({value:!1,label:c.yue}))]),o=await Fe(a,{title:x("div",{class:"panel-title"},"💬 客人講咩？（答啱有貼士）")});ge(t.key,o.value),Tn(t.lv,o.value),ys("resto",t.lv??0);let r=0;return o.value?(J("perfect"),o.button.classList.add("right"),r=15,Q().coins+=r,wi(5),Vn(r),mn(),Se("+15 🪙","good")):(J("bad"),o.button.classList.add("wrong"),[...o.grid.children].forEach((c,l)=>{a[l].value&&c.classList.add("right")}),Te(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}。之後會再考你！`,3500)),await Jt(1300),kt("cust"),r}async function JM(n,t){const e=Zt(Di.bye.filter(a=>a.key!==t.key&&a.yue!==t.yue&&(a.lv??0)<=Be())).slice(0,2);Ye(t.key);const i=Zt([{value:!0,label:t.yue},...e.map(a=>({value:!1,label:a.yue}))]);Ft(j,"cust",t.jp,"",ln(n.id,t),{hidden:Q().settings.subs==="tap"});const s=await Fe(i,{title:x("div",{class:"panel-title"},"👋 客人走之前講咩？")});ge(t.key,s.value),Tn(t.lv??0,s.value),ys("resto",t.lv??0),s.value?(J("perfect"),Se("+5 🪙","good"),Q().coins+=5,mn()):(J("bad"),Te(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}`,3e3)),await Jt(900)}async function vu(){const n=Q();J("level"),j.cat.happy(),Se(`Lv.${n.level}!`,"level"),await Ft(j,"cat",hn.levelup.jp,hn.levelup.yue,"cat"),kt("cat");const t=Dn.find(e=>e.unlock.level===n.level);return t&&await Kf(t),t}async function Kf(n){gu();const t=me(n.dish);J("rare"),Ft(j,"cat",hn.newRecipe.jp,hn.newRecipe.yue,"cat"),await ii("好嘢！",x("div",{class:"unlock"},x("div",{class:"big-emo spin"},ai(t)),x("div",{class:"panel-title"},"🔓 新食譜解鎖！"),fn(t.jp,{yue:t.yue,voice:"word",size:"big",autoplay:!0}))),kt("cat")}const ZM=[[1,"🎊 第一位客人！"],[5,"🏅 招呼咗 5 位客人"],[10,"🏆 10 位客人！小黑好驕傲"],[25,"👑 25 位！你係人氣店"],[50,"🌸 50 位！傳說級食堂"]];function Ma(){const n=Q();for(const[t,e]of ZM)n.served===t&&!n.achievements.includes("served"+t)&&(n.achievements.push("served"+t),Pe(e,2600,"rare"),J("rare"),de())}async function Jf(n="home"){ao=!0,uu(),an(),kt();const t=G1(n),e=De(t.people),i=De(t.foods),s=De(t.drinks),a=kl[e.n-1],o=(t.prices[i]+t.prices[s])*e.n;let r=0,c=0;const l={ppl:e,food:i,drink:s,num:a,f:{},foodJp:t.theme==="home"?void 0:me(i).jp,foodYue:t.theme==="home"?void 0:me(i).yue.replace(/（.*?）/g,"")},u=H1(l,V1[Be()]),h=[...t.foods,...t.drinks.filter(k=>t.prices[k]>0)].slice(0,5).map(k=>me(k).jp.replace(/\{.*?\}/g,"").slice(0,7));await Js(()=>{j.catTo("rest"),j.setView("rest",!0),j.restTheme(t.theme,h)});const m=`你哋 ${e.n} 個人，每人想食 ${me(i).yue.replace(/（.*?）/g,"")}，飲 ${me(s).yue.replace(/（.*?）/g,"")}${u.map(k=>k.task(l)).filter(Boolean).map(k=>`；${k}`).join("")}`;If(`${e.n} 位 · ${me(i).yue.replace(/（.*?）/g,"")} · ${me(s).yue.replace(/（.*?）/g,"")}`,m),Te("今次你做客人！小黑做店員 🐈‍⬛",3e3);const f=async(k,B,L,U)=>{k.jp?await Ft(j,"cat",k.jp,k.yue,"cat"):(kt("cat"),Te(k.yue,2500)),c++;let I=!0;for(;;){const F=Zt(B.map((ut,tt)=>({value:tt,el:fn(ut.jp,{yue:ut.yue,voice:"word"})}))),ot=await Fe(F,{title:x("div",{class:"panel-title"},U)});if(ot.value===L)return J("good"),ot.button.classList.add("right"),I&&r++,await Ue(B[L].jp,"word"),I;J("bad"),ot.button.classList.add("wrong"),I=!1,Te(`「${B[ot.value].yue}」唔係最啱，再試吓！`,3e3),await Jt(900)}},g=async k=>{for(const B of u.filter(L=>L.phase===k)){const L=B.task(l);L&&Te(`📋 ${L}`,5e3);const U=B.build(l),I=await f(U.staff||{jp:null,yue:U.prompt},U.options,0,U.title);Tn(B.lv,I),U.reply&&await Ft(j,"cat",U.reply.jp,U.reply.yue,"cat")}},_=t.people.map(k=>({jp:k.jp,yue:k.yue}));await f(t.staff.welcome,_,t.people.indexOf(e),"👥 你哋幾多位？"),ge(e.key,!0),await g("enter"),await Ft(j,"cat",t.staff.seat.jp,t.staff.seat.yue,"cat"),await g("seat"),await g("preorder");const p=De(t.foods.filter(k=>k!==i)),d=De(kl.filter(k=>k!==a)),M=[qn(t.you.order,{food:i,num:a}),qn(t.you.order,{food:p,num:a}),qn(t.you.order,{food:i,num:d})];await f(t.staff.order,M,0,"🍽️ 點餐（記住人數！）"),await g("order");const y=De(t.drinks.filter(k=>k!==s)),b=[qn(t.you.drink,{drink:s,num:a}),qn(t.you.drink,{drink:y,num:a}),qn(t.you.drink,{drink:s,num:d})];await f(t.staff.drink,b,0,"🥤 飲品"),await f(t.staff.confirm,[t.you.yes,t.you.wrongPay,t.you.wrongGreet],0,"✅ 就咁多？"),await Ft(j,"cat",t.staff.wait.jp,t.staff.wait.yue,"cat"),await g("wait"),kt(),an(),await Js(()=>{j.setView("restTable",!0),j.restServe([i,s],e.n)}),await Ft(j,"cat",t.staff.serve.jp,t.staff.serve.yue,"cat"),await g("mid"),await f({jp:null,yue:"（食之前講咩？）"},[t.you.itadakimasu,t.you.wrongEat,t.you.gochisou],0,"🙏 開動之前講咩？"),ge("itadakimasu",!0),an(),kt(),Te("😋 食緊… 好好味！",1800),await Jt(1800),await Js(()=>{j.restClear(),j.setView("rest",!0)}),await f({jp:null,yue:"（食完講咩？）"},[t.you.gochisou,t.you.itadakimasu,t.you.wrongGreet],0,"😊 食完講咩？"),ge("gochisousama",!0),await g("after"),await f({jp:null,yue:"（想埋單）"},[t.you.kaikei,t.you.wrongPay,t.you.no],0,"🧾 叫埋單"),ge("okaikei",!0),await g("pay");const C=qn(Be()>0&&Math.random()<.5?t.staff.pay2:t.staff.pay,{price:o});await Ft(j,"cat",C.jp,"（聽吓幾錢？）","cat",{hidden:!0}),c++;const E=Zt([o+100,Math.max(100,o-50),o+500,o*2].filter(k=>k!==o)).slice(0,2);let A=!0;for(;;){const k=await Fe(Zt([o,...E]).map(B=>({value:B,label:`<b>${B}円</b>`})),{title:x("div",{class:"panel-title"},"💴 要畀幾錢？（撳泡泡可以睇字幕）"),cols:3});if(k.value===o){J("coin"),k.button.classList.add("right"),A&&r++;break}J("bad"),k.button.classList.add("wrong"),A=!1,Ue(C.jp,"cat"),await Jt(700)}await g("receipt"),await Ft(j,"cat",t.staff.bye.jp,t.staff.bye.yue,"cat");const N=r/c,X=40+Math.round(N*80),v=20+Math.round(N*20);Q().restaurantDone++,Q().coins+=X;const w=wi(v);de(),mn(),J("level");const O=N===1?"💮":N>.7?"⭕":"🔺";await ii("返廚房 🏠",x("div",{class:"unlock"},x("div",{class:"big-emo spin"},O),x("div",{class:"panel-title"},`點餐成功！一次答啱 ${r} / ${c}`),x("div",{class:"reward"},`🪙 +${X}　✨ +${v} XP　🏮 旅遊印章 x${Q().restaurantDone}`))),Vn(X),kt(),he("#taskbar").classList.remove("show"),await Js(()=>{j.catTo("kitchen"),j.setView("kitchen",!0)}),w&&await vu(),ri()}
