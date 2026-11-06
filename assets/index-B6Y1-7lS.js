(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const od=new Set(["ui_lock","ui_unlock","ui_settings","ui_coin","ui_timer","ui_serves"]),sa=i=>new URL(`./art/game/${i}.${od.has(i)?"svg":"webp"}`,document.baseURI).href;function ti(i,t="",e=""){const n=document.createElement("img");return n.src=sa(i),n.alt=t,n.className=`art ${e}`,n.draggable=!1,n.decoding="async",n}const Fn=i=>{if(!i.textIcon)return ti(`${i.cat}_${i.id}`,i.yue);const t=document.createElement("span");return t.className="food-icon",t.setAttribute("role","img"),t.setAttribute("aria-label",i.yue),t.textContent=i.emoji,t},ll={"🪙":"coin","🔥":"streak","📚":"book","📖":"book","🛍️":"shop","⚙️":"settings","🔊":"speaker","✕":"close","❤️":"heart","💖":"heart","💕":"heart","🐾":"paw","🔒":"lock","⭐":"star_on","★":"star_on","☆":"star_off","🎁":"gift","🎉":"celebrate","🎊":"celebrate","🔓":"unlock","🎧":"listen","🍽️":"serves","⏱️":"timer","🎯":"target","✨":"xp","🌟":"rare","🎙️":"mic","📅":"calendar","📊":"stats","💴":"yen","🧾":"receipt","🌱":"grow_1","🌿":"grow_2","🌳":"grow_3","🌸":"grow_4","💮":"stamp_hanamaru","⭕":"stamp_maru","🔺":"stamp_sankaku","🏅":"medal","🏆":"trophy","👑":"crown","🏮":"open_shop","🐈‍⬛":"@logo_cat"};function pa(i){var s;if((s=i.closest)!=null&&s.call(i,"script,style"))return;const t=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);const n=new RegExp(Object.keys(ll).join("|"),"gu");for(const r of e){if(r.parentElement.closest("script,style"))continue;const a=r.textContent;if(n.lastIndex=0,!n.test(a))continue;n.lastIndex=0;const o=document.createDocumentFragment();let c=0;for(const l of a.matchAll(n)){o.append(a.slice(c,l.index));const u=ll[l[0]];o.append(ti(u.startsWith("@")?u.slice(1):`ui_${u}`,l[0])),c=l.index+l[0].length}o.append(a.slice(c)),r.replaceWith(o)}}const Zs=new Set;let Xr=null,Fu=0,Mo=0,Ta;const hn=()=>Zs.size>0,Sn=()=>(Xr??performance.now())-Fu;function Ds(i,t){const e=hn();t?Zs.add(i):Zs.delete(i),!e&&hn()?(Xr=performance.now(),document.dispatchEvent(new Event("gamepause"))):e&&!hn()&&(Fu+=performance.now()-Xr,Xr=null),document.body.classList.toggle("game-paused",hn())}function ra(i,t){var e;if(t)Ds(i,!0),clearInterval(Ta),Ds("resume",!1),(e=document.querySelector("#resume-countdown"))==null||e.remove();else{if(Zs.has(i)&&Zs.size===1&&Mo){Ds("resume",!0);let n=3;const s=document.createElement("div");s.id="resume-countdown",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=`準備繼續 · ${n}`,document.body.append(s),Ta=setInterval(()=>{--n?s.textContent=`準備繼續 · ${n}`:(clearInterval(Ta),s.remove(),Ds("resume",!1))},1e3)}Ds(i,!1)}}function le(i=0){const t=Sn()+i;return new Promise(e=>{const n=()=>!hn()&&Sn()>=t?e():setTimeout(n,25);n()})}async function cd(i,...t){Mo++;try{return await le(),await i(...t)}finally{Mo--}}document.addEventListener("visibilitychange",()=>ra("hidden",document.hidden));document.hidden&&ra("hidden",!0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="169",ld=0,ul=1,ud=2,Ec=1,Ou=2,$n=3,fi=0,Ye=1,Ze=2,hi=0,_s=1,hl=2,dl=3,fl=4,hd=5,Ii=100,dd=101,fd=102,pd=103,md=104,gd=200,_d=201,vd=202,xd=203,So=204,bo=205,yd=206,Md=207,Sd=208,bd=209,wd=210,Ed=211,Td=212,Ad=213,Rd=214,wo=0,Eo=1,To=2,Ms=3,Ao=4,Ro=5,Co=6,Po=7,Bu=0,Cd=1,Pd=2,di=0,Ld=1,Dd=2,Id=3,zu=4,Ud=5,Nd=6,kd=7,Hu=300,Ss=301,bs=302,Lo=303,Do=304,ma=306,Io=1e3,ki=1001,Uo=1002,Mn=1003,Fd=1004,pr=1005,Rn=1006,Aa=1007,Fi=1008,ei=1009,Vu=1010,Gu=1011,Qs=1012,Tc=1013,zi=1014,Yn=1015,ar=1016,Ac=1017,Rc=1018,ws=1020,Wu=35902,ju=1021,Xu=1022,Cn=1023,qu=1024,$u=1025,vs=1026,Es=1027,Yu=1028,Cc=1029,Ku=1030,Pc=1031,Lc=1033,qr=33776,$r=33777,Yr=33778,Kr=33779,No=35840,ko=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,Ho=37496,Vo=37808,Go=37809,Wo=37810,jo=37811,Xo=37812,qo=37813,$o=37814,Yo=37815,Ko=37816,Jo=37817,Zo=37818,Qo=37819,tc=37820,ec=37821,Jr=36492,nc=36494,ic=36495,Ju=36283,sc=36284,rc=36285,ac=36286,Od=3200,Bd=3201,Zu=0,zd=1,ui="",Ve="srgb",gi="srgb-linear",Dc="display-p3",ga="display-p3-linear",aa="linear",_e="srgb",oa="rec709",ca="p3",qi=7680,pl=519,Hd=512,Vd=513,Gd=514,Qu=515,Wd=516,jd=517,Xd=518,qd=519,oc=35044,ml="300 es",Kn=2e3,la=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,cc=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function $d(i,t){return(i%t+t)%t}function Ca(i,t,e){return(1-e)*i+e*t}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],w=s[1],x=s[4],S=s[7],L=s[2],C=s[5],R=s[8];return r[0]=a*v+o*w+c*L,r[3]=a*m+o*x+c*C,r[6]=a*p+o*S+c*R,r[1]=l*v+u*w+h*L,r[4]=l*m+u*x+h*C,r[7]=l*p+u*S+h*R,r[2]=d*v+f*w+g*L,r[5]=d*m+f*x+g*C,r[8]=d*p+f*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Xt;function th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){const i=tr("canvas");return i.style.display="block",i}const gl={};function Zr(i){i in gl||(gl[i]=!0,console.warn(i))}function Kd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _l=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[gi]:{transfer:aa,primaries:oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:_e,primaries:oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ga]:{transfer:aa,primaries:ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vl),fromReference:i=>i.applyMatrix3(_l)},[Dc]:{transfer:_e,primaries:ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vl),fromReference:i=>i.applyMatrix3(_l).convertLinearToSRGB()}},Qd=new Set([gi,ga]),oe={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Is[t].toReference,s=Is[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Is[i].primaries},getTransfer:function(i){return i===ui?aa:Is[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Is[t].luminanceCoefficients)}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class tf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=tr("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ef=0;class eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Da(s[a].image)):r.push(Da(s[a]))}else r=Da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class We extends Ps{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ki,s=ki,r=Rn,a=Fi,o=Cn,c=ei,l=We.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Jn(),this.name="",this.source=new eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Io:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Io:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Hu;We.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(f+1)/2,L=(p+1)/2,C=(u+d)/4,R=(h+v)/4,I=(g+m)/4;return x>S&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=R/n):S>L?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sf extends Ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends sf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*v,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,p*w);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const S=o*w;if(c=c*m+d*S,l=l*m+f*S,u=u*m+g*S,h=h*m+v*S,m===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-o*f,t[e+2]=l*g+u*f+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new P,xl=new or;class cr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),gr.subVectors(this.max,Us),Yi.subVectors(t.a,Us),Ki.subVectors(t.b,Us),Ji.subVectors(t.c,Us),si.subVectors(Ki,Yi),ri.subVectors(Ji,Ki),Mi.subVectors(Yi,Ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Mi.z,Mi.y,si.z,0,-si.x,ri.z,0,-ri.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-Mi.y,Mi.x,0];return!Ua(e,Yi,Ki,Ji,gr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Yi,Ki,Ji,gr))?!1:(_r.crossVectors(si,ri),e=[_r.x,_r.y,_r.z],Ua(e,Yi,Ki,Ji,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new P,new P,new P,new P,new P,new P,new P,new P],wn=new P,mr=new cr,Yi=new P,Ki=new P,Ji=new P,si=new P,ri=new P,Mi=new P,Us=new P,gr=new P,_r=new P,Si=new P;function Ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const af=new cr,Ns=new P,Na=new P;class _a{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):af.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Na)),this.expandByPoint(Ns.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new P,ka=new P,vr=new P,ai=new P,Fa=new P,xr=new P,Oa=new P;class Ic{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,a=-this.direction.dot(vr),o=ai.dot(this.direction),c=-ai.dot(vr),l=ai.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ka).addScaledVector(vr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Fa.subVectors(e,t),xr.subVectors(n,t),Oa.crossVectors(Fa,xr);let a=this.direction.dot(Oa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);const c=o*this.direction.dot(xr.crossVectors(ai,xr));if(c<0)return null;const l=o*this.direction.dot(Fa.cross(ai));if(l<0||c+l>a)return null;const u=-o*ai.dot(Oa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,a,o,c,l,u,h,d,f,g,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;e[0]=d-v*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,cf)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),oi.crossVectors(n,rn),oi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),oi.crossVectors(n,rn)),oi.normalize(),yr.crossVectors(rn,oi),s[0]=oi.x,s[4]=yr.x,s[8]=rn.x,s[1]=oi.y,s[5]=yr.y,s[9]=rn.y,s[2]=oi.z,s[6]=yr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],x=n[7],S=n[11],L=n[15],C=s[0],R=s[4],I=s[8],J=s[12],_=s[1],M=s[5],O=s[9],F=s[13],z=s[2],X=s[6],H=s[10],K=s[14],G=s[3],_t=s[7],q=s[11],ot=s[15];return r[0]=a*C+o*_+c*z+l*G,r[4]=a*R+o*M+c*X+l*_t,r[8]=a*I+o*O+c*H+l*q,r[12]=a*J+o*F+c*K+l*ot,r[1]=u*C+h*_+d*z+f*G,r[5]=u*R+h*M+d*X+f*_t,r[9]=u*I+h*O+d*H+f*q,r[13]=u*J+h*F+d*K+f*ot,r[2]=g*C+v*_+m*z+p*G,r[6]=g*R+v*M+m*X+p*_t,r[10]=g*I+v*O+m*H+p*q,r[14]=g*J+v*F+m*K+p*ot,r[3]=w*C+x*_+S*z+L*G,r[7]=w*R+x*M+S*X+L*_t,r[11]=w*I+x*O+S*H+L*q,r[15]=w*J+x*F+S*K+L*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+v*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+e*l*h-e*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],w=h*m*l-v*d*l+v*c*f-o*m*f-h*c*p+o*d*p,x=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,S=u*v*l-g*h*l+g*o*f-a*v*f-u*o*p+a*h*p,L=g*h*c-u*v*c-g*o*d+a*v*d+u*o*m-a*h*m,C=e*w+n*x+s*S+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=w*R,t[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*R,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*R,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*R,t[4]=x*R,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*R,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*f+e*c*f)*R,t[8]=S*R,t[9]=(g*h*r-u*v*r-g*n*f+e*v*f+u*n*p-e*h*p)*R,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*R,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*f-e*o*f)*R,t[12]=L*R,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*m+e*h*m)*R,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*R,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,v=a*u,m=a*h,p=o*h,w=c*l,x=c*u,S=c*h,L=n.x,C=n.y,R=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+S)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(f-S)*C,s[5]=(1-(d+p))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+x)*R,s[9]=(m-w)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const l=1/r,u=1/a,h=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Kn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Kn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===la)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Kn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,f=(n+s)*u;let g,v;if(o===Kn)g=(a+r)*h,v=-2*h;else if(o===la)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new P,En=new fe,of=new P(0,0,0),cf=new P(1,1,1),oi=new P,yr=new P,rn=new P,yl=new fe,Ml=new or;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lf=0;const Sl=new P,Qi=new or,Wn=new fe,Mr=new P,ks=new P,uf=new P,hf=new or,bl=new P(1,0,0),wl=new P(0,1,0),El=new P(0,0,1),Tl={type:"added"},df={type:"removed"},ts={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Pe extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new P,e=new On,n=new or,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Xt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(ks,Mr,this.up):Wn.lookAt(Mr,ks,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(df),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new P(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new P,jn=new P,za=new P,Xn=new P,es=new P,ns=new P,Al=new P,Ha=new P,Va=new P,Ga=new P,Wa=new he,ja=new he,Xa=new he;class yn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),jn.subVectors(n,e),za.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(jn),c=Tn.dot(za),l=jn.dot(jn),u=jn.dot(za),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wa.setScalar(0),ja.setScalar(0),Xa.setScalar(0),Wa.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(Xa,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),jn.subVectors(t,e),Tn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ns.subVectors(r,n),Ha.subVectors(t,n);const c=es.dot(Ha),l=ns.dot(Ha);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,s);const u=es.dot(Va),h=ns.dot(Va);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(es,a);Ga.subVectors(t,r);const f=es.dot(Ga),g=ns.dot(Ga);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ns,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Al.subVectors(r,s),o=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Al,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=$d(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qa(a,r,t+1/3),this.g=qa(a,r,t),this.b=qa(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return oe.fromWorkingColorSpace(He.copy(this),t),Math.round(Be(He.r*255,0,255))*65536+Math.round(Be(He.g*255,0,255))*256+Math.round(Be(He.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ve){oe.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Sr);const n=Ca(ci.h,Sr.h,e),s=Ca(ci.s,Sr.s,e),r=Ca(ci.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Kt;Kt.NAMES=ih;let ff=0;class ji extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=_s,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=bo,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class un extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new P,br=new st;class Ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}}class sh extends Ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rh extends Ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pf=0;const gn=new fe,$a=new Pe,is=new P,an=new cr,Fs=new cr,Ie=new P;class je extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?rh:sh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(an.min,Fs.min),an.expandByPoint(Ie),Ie.addVectors(an.max,Fs.max),an.expandByPoint(Ie)):(an.expandByPoint(Fs.min),an.expandByPoint(Fs.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ie.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),Ie.add(is)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;const l=new P,u=new P,h=new P,d=new st,f=new st,g=new st,v=new P,m=new P;function p(I,J,_){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,J),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,J),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(M),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(M),o[I].add(v),o[J].add(v),o[_].add(v),c[I].add(m),c[J].add(m),c[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,J=w.length;I<J;++I){const _=w[I],M=_.start,O=_.count;for(let F=M,z=M+O;F<z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new P,S=new P,L=new P,C=new P;function R(I){L.fromBufferAttribute(s,I),C.copy(L);const J=o[I];x.copy(J),x.sub(L.multiplyScalar(L.dot(J))).normalize(),S.crossVectors(C,J);const M=S.dot(c[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,M)}for(let I=0,J=w.length;I<J;++I){const _=w[I],M=_.start,O=_.count;for(let F=M,z=M+O;F<z;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new fe,bi=new Ic,wr=new _a,Cl=new P,Er=new P,Tr=new P,Ar=new P,Ya=new P,Rr=new P,Pl=new P,Cr=new P;class gt extends Pe{constructor(t=new je,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ya.fromBufferAttribute(h,t),a?Rr.addScaledVector(Ya,u):Rr.addScaledVector(Ya.sub(e),u))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(wr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(wr,Cl)===null||bi.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,L=x;S<L;S+=3){const C=o.getX(S),R=o.getX(S+1),I=o.getX(S+2);s=Pr(this,p,t,n,l,u,h,C,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=Pr(this,a,t,n,l,u,h,w,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,L=x;S<L;S+=3){const C=S,R=S+1,I=S+2;s=Pr(this,p,t,n,l,u,h,C,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,x=m+1,S=m+2;s=Pr(this,a,t,n,l,u,h,w,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mf(i,t,e,n,s,r,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===fi,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:i}}function Pr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Er),i.getVertexPosition(c,Tr),i.getVertexPosition(l,Ar);const u=mf(i,t,e,n,Er,Tr,Ar,Pl);if(u){const h=new P;yn.getBarycoord(Pl,Er,Tr,Ar,h),s&&(u.uv=yn.getInterpolatedAttribute(s,o,c,l,h,new st)),r&&(u.uv1=yn.getInterpolatedAttribute(r,o,c,l,h,new st)),a&&(u.normal=yn.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};yn.getNormal(Er,Tr,Ar,d.normal),u.face=d,u.barycoord=h}return u}class Ce extends je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(h,2));function g(v,m,p,w,x,S,L,C,R,I,J){const _=S/R,M=L/I,O=S/2,F=L/2,z=C/2,X=R+1,H=I+1;let K=0,G=0;const _t=new P;for(let q=0;q<H;q++){const ot=q*M-F;for(let Ft=0;Ft<X;Ft++){const Bt=Ft*_-O;_t[v]=Bt*w,_t[m]=ot*x,_t[p]=z,l.push(_t.x,_t.y,_t.z),_t[v]=0,_t[m]=0,_t[p]=C>0?1:-1,u.push(_t.x,_t.y,_t.z),h.push(Ft/R),h.push(1-q/I),K+=1}}for(let q=0;q<I;q++)for(let ot=0;ot<R;ot++){const Ft=d+ot+X*q,Bt=d+ot+X*(q+1),W=d+(ot+1)+X*(q+1),et=d+(ot+1)+X*q;c.push(Ft,Bt,et),c.push(Bt,W,et),G+=6}o.addGroup(f,G,J),f+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const _f={clone:Ts,merge:qe};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new P,Ll=new st,Dl=new st;class ln extends oh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Dl),e.subVectors(Dl,Ll)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,rs=1;class yf extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new ln(ss,rs,t,e);r.layers=this.layers,this.add(r);const a=new ln(ss,rs,t,e);a.layers=this.layers,this.add(a);const o=new ln(ss,rs,t,e);o.layers=this.layers,this.add(o);const c=new ln(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new ln(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ch extends We{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mf extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ch(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ce(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:hi});r.uniforms.tEquirect.value=e;const a=new gt(s,r),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Rn),new yf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ka=new P,Sf=new P,bf=new Xt;class Li{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ka.subVectors(n,e).cross(Sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bf.getNormalMatrix(t),s=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new _a,Lr=new P;class Nc{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],w=s[13],x=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,m-f,S-p).normalize(),n[1].setComponents(c+r,d+l,m+f,S+p).normalize(),n[2].setComponents(c+a,d+u,m+g,S+w).normalize(),n[3].setComponents(c-a,d-u,m-g,S-w).normalize(),n[4].setComponents(c-o,d-h,m-v,S-x).normalize(),e===Kn)n[5].setComponents(c+o,d+h,m+v,S+x).normalize();else if(e===la)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wf(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class cn extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let x=0;x<l;x++){const S=x*h-r;g.push(S,-w,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const x=w+l*p,S=w+l*(p+1),L=w+1+l*(p+1),C=w+1+l*p;f.push(x,S,C),f.push(S,L,C)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,Bf=`#ifdef USE_BUMPMAP
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`
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
}`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,wp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,e0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
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
}`,i0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:If,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:kf,bsdfs:Ff,iridescence_fragment:Of,bumpmap_pars_fragment:Bf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:jf,color_pars_vertex:Xf,color_vertex:qf,common:$f,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Zf,emissivemap_fragment:Qf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:op,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:up,fog_pars_fragment:hp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:yp,lights_phong_pars_fragment:Mp,lights_physical_fragment:Sp,lights_physical_pars_fragment:bp,lights_fragment_begin:wp,lights_fragment_maps:Ep,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Ip,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:kp,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:jp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Jp,opaque_fragment:Zp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:om,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:um,skinning_pars_vertex:hm,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:wm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Im,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:km,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:zm,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:jm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:$m,meshphysical_frag:Ym,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:Zm,points_frag:Qm,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},In={basic:{uniforms:qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:qe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:qe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:qe([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:qe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:qe([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:qe([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:qe([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:qe([mt.lights,mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};In.physical={uniforms:qe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Dr={r:0,b:0,g:0},Ei=new On,s0=new fe;function r0(i,t,e,n,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function v(w){let x=!1;const S=g(w);S===null?p(o,c):S&&S.isColor&&(p(S,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===ma)?(u===void 0&&(u=new gt(new Ce(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ts(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ei.copy(x.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(Ei)),u.material.toneMapped=oe.getTransfer(S.colorSpace)!==_e,(h!==S||d!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new gt(new cn(2,2),new pi({name:"BackgroundMaterial",uniforms:Ts(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=oe.getTransfer(S.colorSpace)!==_e,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(Dr,ah(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:v,addToRenderList:m}}function a0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,M,O,F,z){let X=!1;const H=h(F,O,M);r!==H&&(r=H,l(r.object)),X=f(_,F,O,z),X&&g(_,F,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(_,M,O,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,M,O){const F=O.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let X=z[M.id];X===void 0&&(X={},z[M.id]=X);let H=X[F];return H===void 0&&(H=d(c()),X[F]=H),H}function d(_){const M=[],O=[],F=[];for(let z=0;z<e;z++)M[z]=0,O[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:O,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,M,O,F){const z=r.attributes,X=M.attributes;let H=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){const q=z[G];let ot=X[G];if(ot===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),q===void 0||q.attribute!==ot||ot&&q.data!==ot.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(_,M,O,F){const z={},X=M.attributes;let H=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){let q=X[G];q===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(q=_.instanceColor));const ot={};ot.attribute=q,q&&q.data&&(ot.data=q.data),z[G]=ot,H++}r.attributes=z,r.attributesNum=H,r.index=F}function v(){const _=r.newAttributes;for(let M=0,O=_.length;M<O;M++)_[M]=0}function m(_){p(_,0)}function p(_,M){const O=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;O[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),z[_]!==M&&(i.vertexAttribDivisor(_,M),z[_]=M)}function w(){const _=r.newAttributes,M=r.enabledAttributes;for(let O=0,F=M.length;O<F;O++)M[O]!==_[O]&&(i.disableVertexAttribArray(O),M[O]=0)}function x(_,M,O,F,z,X,H){H===!0?i.vertexAttribIPointer(_,M,O,z,X):i.vertexAttribPointer(_,M,O,F,z,X)}function S(_,M,O,F){v();const z=F.attributes,X=O.getAttributes(),H=M.defaultAttributeValues;for(const K in X){const G=X[K];if(G.location>=0){let _t=z[K];if(_t===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),_t!==void 0){const q=_t.normalized,ot=_t.itemSize,Ft=t.get(_t);if(Ft===void 0)continue;const Bt=Ft.buffer,W=Ft.type,et=Ft.bytesPerElement,Et=W===i.INT||W===i.UNSIGNED_INT||_t.gpuType===Tc;if(_t.isInterleavedBufferAttribute){const ht=_t.data,Nt=ht.stride,Ut=_t.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht,ht.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)m(G.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Ht=0;Ht<G.locationSize;Ht++)x(G.location+Ht,ot/G.locationSize,W,q,Nt*et,(Ut+ot/G.locationSize*Ht)*et,Et)}else{if(_t.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht,_t.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let ht=0;ht<G.locationSize;ht++)x(G.location+ht,ot/G.locationSize,W,q,ot*et,ot/G.locationSize*ht*et,Et)}}else if(H!==void 0){const q=H[K];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(G.location,q);break;case 3:i.vertexAttrib3fv(G.location,q);break;case 4:i.vertexAttrib4fv(G.location,q);break;default:i.vertexAttrib1fv(G.location,q)}}}}w()}function L(){I();for(const _ in n){const M=n[_];for(const O in M){const F=M[O];for(const z in F)u(F[z].object),delete F[z];delete M[O]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const O in M){const F=M[O];for(const z in F)u(F[z].object),delete F[z];delete M[O]}delete n[_.id]}function R(_){for(const M in n){const O=n[M];if(O[_.id]===void 0)continue;const F=O[_.id];for(const z in F)u(F[z].object),delete F[z];delete O[_.id]}}function I(){J(),a=!0,r!==s&&(r=s,l(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:J,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function o0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ei&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:L,maxSamples:C}}function l0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Li,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,x=w*4;let S=p.clippingState||null;c.value=S,S=u(g,d,x,f);for(let L=0;L!==x;++L)S[L]=e[L];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==v;++x,S+=4)a.copy(h[x]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(a,o){return o===Lo?a.mapping=Ss:o===Do&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lo||o===Do)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uh extends oh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,Il=[.125,.215,.35,.446,.526,.582],Ui=20,Ja=new uh,Ul=new Kt;let Za=null,Qa=0,to=0,eo=!1;const Di=(1+Math.sqrt(5))/2,as=1/Di,Nl=[new P(-Di,as,0),new P(Di,as,0),new P(-as,0,Di),new P(as,0,Di),new P(0,Di,-as),new P(0,Di,as),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Qa,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ar,format:Cn,colorSpace:gi,depthBuffer:!1},s=Fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(r)),this._blurMaterial=d0(r,t,e)}return s}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,s){const o=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ul),u.toneMapping=di,u.autoClear=!1;const f=new un({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new gt(new Ce,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ul),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;Ir(s,w*x,p>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nl[(s-r-1)%Nl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let w=0;for(let R=0;R<Ui;++R){const I=R/v,J=Math.exp(-I*I/2);p.push(J),R===0?w+=J:R<m&&(w+=2*J)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[s],L=3*S*(s>x-ps?s-x+ps:0),C=4*(this._cubeSize-S);Ir(e,L,C,3*S,2*S),c.setRenderTarget(e),c.render(h,Ja)}}function h0(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+Il.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ps?c=Il[a-i+ps-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,I=C>2?0:-1,J=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];w.set(J,v*g*C),x.set(d,m*g*C);const _=[C,C,C,C,C,C];S.set(_,p*g*C)}const L=new je;L.setAttribute("position",new Ln(w,v)),L.setAttribute("uv",new Ln(x,m)),L.setAttribute("faceIndex",new Ln(S,p)),t.push(L),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fl(i,t,e){const n=new Hi(i,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function d0(i,t,e){const n=new Float32Array(Ui),s=new P(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ol(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bl(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function f0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lo||c===Do,u=c===Ss||c===bs;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new kl(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new kl(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function p0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m0(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let x=0,S=w.length;x<S;x+=3){const L=w[x+0],C=w[x+1],R=w[x+2];d.push(L,C,C,R,R,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,S=w.length/3-1;x<S;x+=3){const L=x+0,C=x+1,R=x+2;d.push(L,C,C,R,R,L)}}else return;const m=new(th(d)?rh:sh)(d,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function g0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<v.length;w++)e.update(p,n,v[w])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function v0(i,t,e){const n=new WeakMap,s=new he;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let _=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let L=o.attributes.position.count*S,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*C*4*h),I=new nh(R,L,C,h);I.type=Yn,I.needsUpdate=!0;const J=S*4;for(let M=0;M<h;M++){const O=p[M],F=w[M],z=x[M],X=L*C*4*M;for(let H=0;H<O.count;H++){const K=H*J;g===!0&&(s.fromBufferAttribute(O,H),R[X+K+0]=s.x,R[X+K+1]=s.y,R[X+K+2]=s.z,R[X+K+3]=0),v===!0&&(s.fromBufferAttribute(F,H),R[X+K+4]=s.x,R[X+K+5]=s.y,R[X+K+6]=s.z,R[X+K+7]=0),m===!0&&(s.fromBufferAttribute(z,H),R[X+K+8]=s.x,R[X+K+9]=s.y,R[X+K+10]=s.z,R[X+K+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new st(L,C)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function x0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class hh extends We{constructor(t,e,n,s,r,a,o,c,l,u=vs){if(u!==vs&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=zi),n===void 0&&u===Es&&(n=ws),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dh=new We,zl=new hh(1,1),fh=new nh,ph=new rf,mh=new ch,Hl=[],Vl=[],Gl=new Float32Array(16),Wl=new Float32Array(9),jl=new Float32Array(4);function Ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=Vl[t];e===void 0&&(e=new Int32Array(t),Vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function w0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),De(e,n)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Wl.set(n),i.uniformMatrix3fv(this.addr,!1,Wl),De(e,n)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Gl.set(n),i.uniformMatrix4fv(this.addr,!1,Gl),De(e,n)}}function A0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function N0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=Qu,r=zl):r=dh,e.setTexture2D(t||r,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ph,s)}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mh,s)}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function B0(i){switch(i){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return b0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return D0;case 36295:return I0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}function z0(i,t){i.uniform1fv(this.addr,t)}function H0(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function V0(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function W0(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function j0(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function X0(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q0(i,t){i.uniform1iv(this.addr,t)}function $0(i,t){i.uniform2iv(this.addr,t)}function Y0(i,t){i.uniform3iv(this.addr,t)}function K0(i,t){i.uniform4iv(this.addr,t)}function J0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function Q0(i,t){i.uniform3uiv(this.addr,t)}function tg(i,t){i.uniform4uiv(this.addr,t)}function eg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||dh,r[a])}function ng(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ph,r[a])}function ig(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mh,r[a])}function sg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fh,r[a])}function rg(i){switch(i){case 5126:return z0;case 35664:return H0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return j0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return $0;case 35668:case 35672:return Y0;case 35669:case 35673:return K0;case 5125:return J0;case 36294:return Z0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B0(e.type)}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Xl(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){const n=i.name,s=n.length;for(no.lastIndex=0;;){const r=no.exec(n),a=no.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xl(e,l===void 0?new ag(o,i,t):new og(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new cg(o),Xl(e,h)),e=h}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);lg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let hg=0;function dg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function fg(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===ca&&e===oa?n="LinearDisplayP3ToLinearSRGB":t===oa&&e===ca&&(n="LinearSRGBToLinearDisplayP3"),i){case gi:case ga:return[n,"LinearTransferOETF"];case Ve:case Dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dg(i.getShaderSource(t),a)}else return s}function pg(i,t){const e=fg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mg(i,t){let e;switch(t){case Ld:e="Linear";break;case Dd:e="Reinhard";break;case Id:e="Cineon";break;case zu:e="ACESFilmic";break;case Nd:e="AgX";break;case kd:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new P;function gg(){oe.getLuminanceCoefficients(Ur);const i=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function vg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function js(i){return i!==""}function Yl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(yg,Sg)}const Mg=new Map;function Sg(i,t){let e=jt[t];if(e===void 0){const n=Mg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(bg,wg)}function wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Eg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bu:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case Pd:t="ENVMAP_BLENDING_ADD";break}return t}function Cg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Eg(e),l=Tg(e),u=Ag(e),h=Rg(e),d=Cg(e),f=_g(e),g=vg(r),v=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?jt.tonemapping_pars_fragment:"",e.toneMapping!==di?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=lc(a),a=Yl(a,e),a=Kl(a,e),o=lc(o),o=Yl(o,e),o=Kl(o,e),a=Jl(a),o=Jl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+a,S=w+p+o,L=ql(s,s.VERTEX_SHADER,x),C=ql(s,s.FRAGMENT_SHADER,S);s.attachShader(v,L),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(M){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(C).trim();let X=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,C);else{const K=$l(s,L,"vertex"),G=$l(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+O+`
`+K+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||z==="")&&(H=!1);H&&(M.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(C),I=new Qr(s,v),J=xg(s,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let J;this.getAttributes=function(){return J===void 0&&R(this),J};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,ug)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let Lg=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ig(t),e.set(t,n)),n}}class Ig{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Ug(i,t,e,n,s,r,a){const o=new Uc,c=new Dg,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,O,F,z){const X=F.fog,H=z.geometry,K=_.isMeshStandardMaterial?F.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||K),_t=G&&G.mapping===ma?G.image.height:null,q=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ft=ot!==void 0?ot.length:0;let Bt=0;H.morphAttributes.position!==void 0&&(Bt=1),H.morphAttributes.normal!==void 0&&(Bt=2),H.morphAttributes.color!==void 0&&(Bt=3);let W,et,Et,ht;if(q){const Je=In[q];W=Je.vertexShader,et=Je.fragmentShader}else W=_.vertexShader,et=_.fragmentShader,c.update(_),Et=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);const Nt=i.getRenderTarget(),Ut=z.isInstancedMesh===!0,Ht=z.isBatchedMesh===!0,qt=!!_.map,Z=!!_.matcap,A=!!G,dt=!!_.aoMap,ct=!!_.lightMap,it=!!_.bumpMap,ft=!!_.normalMap,Lt=!!_.displacementMap,yt=!!_.emissiveMap,T=!!_.metalnessMap,y=!!_.roughnessMap,k=_.anisotropy>0,$=_.clearcoat>0,Q=_.dispersion>0,Y=_.iridescence>0,Rt=_.sheen>0,pt=_.transmission>0,bt=k&&!!_.anisotropyMap,Zt=$&&!!_.clearcoatMap,rt=$&&!!_.clearcoatNormalMap,wt=$&&!!_.clearcoatRoughnessMap,Vt=Y&&!!_.iridescenceMap,Gt=Y&&!!_.iridescenceThicknessMap,Tt=Rt&&!!_.sheenColorMap,Qt=Rt&&!!_.sheenRoughnessMap,Wt=!!_.specularMap,pe=!!_.specularColorMap,D=!!_.specularIntensityMap,Mt=pt&&!!_.transmissionMap,j=pt&&!!_.thicknessMap,tt=!!_.gradientMap,vt=!!_.alphaMap,St=_.alphaTest>0,te=!!_.alphaHash,Ae=!!_.extensions;let Ke=di;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const ne={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:et,defines:_.defines,customVertexShaderID:Et,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:gi,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:Z,envMap:A,envMapMode:A&&G.mapping,envMapCubeUVHeight:_t,aoMap:dt,lightMap:ct,bumpMap:it,normalMap:ft,displacementMap:f&&Lt,emissiveMap:yt,normalMapObjectSpace:ft&&_.normalMapType===zd,normalMapTangentSpace:ft&&_.normalMapType===Zu,metalnessMap:T,roughnessMap:y,anisotropy:k,anisotropyMap:bt,clearcoat:$,clearcoatMap:Zt,clearcoatNormalMap:rt,clearcoatRoughnessMap:wt,dispersion:Q,iridescence:Y,iridescenceMap:Vt,iridescenceThicknessMap:Gt,sheen:Rt,sheenColorMap:Tt,sheenRoughnessMap:Qt,specularMap:Wt,specularColorMap:pe,specularIntensityMap:D,transmission:pt,transmissionMap:Mt,thicknessMap:j,gradientMap:tt,opaque:_.transparent===!1&&_.blending===_s&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:St,alphaHash:te,combine:_.combine,mapUv:qt&&m(_.map.channel),aoMapUv:dt&&m(_.aoMap.channel),lightMapUv:ct&&m(_.lightMap.channel),bumpMapUv:it&&m(_.bumpMap.channel),normalMapUv:ft&&m(_.normalMap.channel),displacementMapUv:Lt&&m(_.displacementMap.channel),emissiveMapUv:yt&&m(_.emissiveMap.channel),metalnessMapUv:T&&m(_.metalnessMap.channel),roughnessMapUv:y&&m(_.roughnessMap.channel),anisotropyMapUv:bt&&m(_.anisotropyMap.channel),clearcoatMapUv:Zt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&m(_.sheenRoughnessMap.channel),specularMapUv:Wt&&m(_.specularMap.channel),specularColorMapUv:pe&&m(_.specularColorMap.channel),specularIntensityMapUv:D&&m(_.specularIntensityMap.channel),transmissionMapUv:Mt&&m(_.transmissionMap.channel),thicknessMapUv:j&&m(_.thicknessMap.channel),alphaMapUv:vt&&m(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ft||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(qt||vt),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function w(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)M.push(O),M.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(x(M,_),S(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const M=v[_.type];let O;if(M){const F=In[M];O=_f.clone(F.uniforms)}else O=_.uniforms;return O}function C(_,M){let O;for(let F=0,z=u.length;F<z;F++){const X=u[F];if(X.cacheKey===M){O=X,++O.usedTimes;break}}return O===void 0&&(O=new Pg(i,M,_,r),u.push(O)),O}function R(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function I(_){c.remove(_)}function J(){c.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:L,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:J}}function Ng(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||kg),n.length>1&&n.sort(d||Ql),s.length>1&&s.sort(d||Ql)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Fg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new tu,i.set(n,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Kt};break;case"SpotLight":e={position:new P,direction:new P,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vg(i){const t=new Og,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new fe,a=new fe;function o(l){let u=0,h=0,d=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,x=0,S=0,L=0,C=0,R=0;l.sort(Hg);for(let J=0,_=l.length;J<_;J++){const M=l[J],O=M.color,F=M.intensity,z=M.distance,X=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=O.r*F,h+=O.g*F,d+=O.b*F;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],F);R++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const K=M.shadow,G=e.get(M);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=M.shadow.matrix,w++}n.directional[f]=H,f++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(O).multiplyScalar(F),H.distance=z,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[v]=H;const K=M.shadow;if(M.map&&(n.spotLightMap[L]=M.map,L++,K.updateMatrices(M),M.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,M.castShadow){const G=e.get(M);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,S++}v++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=H,m++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const K=M.shadow,G=e.get(M);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=M.shadow.matrix,x++}n.point[g]=H,g++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(F),H.groundColor.copy(M.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==x||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=x,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=R,n.version=zg++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const x=l[p];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function eu(i){const t=new Vg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Gg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new eu(i),t.set(s,[o])):r>=a.length?(o=new eu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Wg extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jg extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`;function $g(i,t,e){let n=new Nc;const s=new st,r=new st,a=new he,o=new Wg({depthPacking:Bd}),c=new jg,l={},u=e.maxTextureSize,h={[fi]:Ye,[Ye]:fi,[Ze]:Ze},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(C,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const J=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),O=i.state;O.setBlending(hi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==$n&&this.type===$n,z=p===$n&&this.type!==$n;for(let X=0,H=C.length;X<H;X++){const K=C[X],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const _t=G.getFrameExtents();if(s.multiply(_t),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,G.mapSize.y=r.y)),G.map===null||F===!0||z===!0){const ot=this.type!==$n?{minFilter:Mn,magFilter:Mn}:{};G.map!==null&&G.map.dispose(),G.map=new Hi(s.x,s.y,ot),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const q=G.getViewportCount();for(let ot=0;ot<q;ot++){const Ft=G.getViewport(ot);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(a),G.updateMatrices(K,ot),n=G.getFrustum(),S(R,I,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&w(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(J,_,M)};function w(C,R){const I=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Hi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,I,f,v,null)}function x(C,R,I,J){let _=null;const M=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)_=M;else if(_=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=_.uuid,F=R.uuid;let z=l[O];z===void 0&&(z={},l[O]=z);let X=z[F];X===void 0&&(X=_.clone(),z[F]=X,R.addEventListener("dispose",L)),_=X}if(_.visible=R.visible,_.wireframe=R.wireframe,J===$n?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:h[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=I}return _}function S(C,R,I,J,_){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===$n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const F=t.update(C),z=C.material;if(Array.isArray(z)){const X=F.groups;for(let H=0,K=X.length;H<K;H++){const G=X[H],_t=z[G.materialIndex];if(_t&&_t.visible){const q=x(C,_t,J,_);C.onBeforeShadow(i,C,R,I,F,q,G),i.renderBufferDirect(I,null,F,q,C,G),C.onAfterShadow(i,C,R,I,F,q,G)}}}else if(z.visible){const X=x(C,z,J,_);C.onBeforeShadow(i,C,R,I,F,X,null),i.renderBufferDirect(I,null,F,X,C,null),C.onAfterShadow(i,C,R,I,F,X,null)}}const O=C.children;for(let F=0,z=O.length;F<z;F++)S(O[F],R,I,J,_)}function L(C){C.target.removeEventListener("dispose",L);for(const I in l){const J=l[I],_=C.target.uuid;_ in J&&(J[_].dispose(),delete J[_])}}}const Yg={[wo]:Eo,[To]:Co,[Ao]:Po,[Ms]:Ro,[Eo]:wo,[Co]:To,[Po]:Ao,[Ro]:Ms};function Kg(i){function t(){let D=!1;const Mt=new he;let j=null;const tt=new he(0,0,0,0);return{setMask:function(vt){j!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){D=vt},setClear:function(vt,St,te,Ae,Ke){Ke===!0&&(vt*=Ae,St*=Ae,te*=Ae),Mt.set(vt,St,te,Ae),tt.equals(Mt)===!1&&(i.clearColor(vt,St,te,Ae),tt.copy(Mt))},reset:function(){D=!1,j=null,tt.set(-1,0,0,0)}}}function e(){let D=!1,Mt=!1,j=null,tt=null,vt=null;return{setReversed:function(St){Mt=St},setTest:function(St){St?Et(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(St){j!==St&&!D&&(i.depthMask(St),j=St)},setFunc:function(St){if(Mt&&(St=Yg[St]),tt!==St){switch(St){case wo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=St}},setLocked:function(St){D=St},setClear:function(St){vt!==St&&(i.clearDepth(St),vt=St)},reset:function(){D=!1,j=null,tt=null,vt=null}}}function n(){let D=!1,Mt=null,j=null,tt=null,vt=null,St=null,te=null,Ae=null,Ke=null;return{setTest:function(ne){D||(ne?Et(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ne){Mt!==ne&&!D&&(i.stencilMask(ne),Mt=ne)},setFunc:function(ne,Je,Hn){(j!==ne||tt!==Je||vt!==Hn)&&(i.stencilFunc(ne,Je,Hn),j=ne,tt=Je,vt=Hn)},setOp:function(ne,Je,Hn){(St!==ne||te!==Je||Ae!==Hn)&&(i.stencilOp(ne,Je,Hn),St=ne,te=Je,Ae=Hn)},setLocked:function(ne){D=ne},setClear:function(ne){Ke!==ne&&(i.clearStencil(ne),Ke=ne)},reset:function(){D=!1,Mt=null,j=null,tt=null,vt=null,St=null,te=null,Ae=null,Ke=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,w=null,x=null,S=null,L=null,C=new Kt(0,0,0),R=0,I=!1,J=null,_=null,M=null,O=null,F=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=H>=2);let G=null,_t={};const q=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Ft=new he().fromArray(q),Bt=new he().fromArray(ot);function W(D,Mt,j,tt){const vt=new Uint8Array(4),St=i.createTexture();i.bindTexture(D,St),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<j;te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(Mt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return St}const et={};et[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Et(i.DEPTH_TEST),r.setFunc(Ms),ct(!1),it(ul),Et(i.CULL_FACE),A(hi);function Et(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function ht(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Nt(D,Mt){return u[D]!==Mt?(i.bindFramebuffer(D,Mt),u[D]=Mt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ut(D,Mt){let j=d,tt=!1;if(D){j=h.get(Mt),j===void 0&&(j=[],h.set(Mt,j));const vt=D.textures;if(j.length!==vt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let St=0,te=vt.length;St<te;St++)j[St]=i.COLOR_ATTACHMENT0+St;j.length=vt.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function Ht(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const qt={[Ii]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};qt[pd]=i.MIN,qt[md]=i.MAX;const Z={[gd]:i.ZERO,[_d]:i.ONE,[vd]:i.SRC_COLOR,[So]:i.SRC_ALPHA,[wd]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[yd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function A(D,Mt,j,tt,vt,St,te,Ae,Ke,ne){if(D===hi){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(Et(i.BLEND),g=!0),D!==hd){if(D!==v||ne!==I){if((m!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,x=Ii),ne)switch(D){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,w=null,S=null,L=null,C.set(0,0,0),R=0,v=D,I=ne}return}vt=vt||Mt,St=St||j,te=te||tt,(Mt!==m||vt!==x)&&(i.blendEquationSeparate(qt[Mt],qt[vt]),m=Mt,x=vt),(j!==p||tt!==w||St!==S||te!==L)&&(i.blendFuncSeparate(Z[j],Z[tt],Z[St],Z[te]),p=j,w=tt,S=St,L=te),(Ae.equals(C)===!1||Ke!==R)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ke),C.copy(Ae),R=Ke),v=D,I=!1}function dt(D,Mt){D.side===Ze?ht(i.CULL_FACE):Et(i.CULL_FACE);let j=D.side===Ye;Mt&&(j=!j),ct(j),D.blending===_s&&D.transparent===!1?A(hi):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const tt=D.stencilWrite;a.setTest(tt),tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(D){J!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),J=D)}function it(D){D!==ld?(Et(i.CULL_FACE),D!==_&&(D===ul?i.cullFace(i.BACK):D===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),_=D}function ft(D){D!==M&&(X&&i.lineWidth(D),M=D)}function Lt(D,Mt,j){D?(Et(i.POLYGON_OFFSET_FILL),(O!==Mt||F!==j)&&(i.polygonOffset(Mt,j),O=Mt,F=j)):ht(i.POLYGON_OFFSET_FILL)}function yt(D){D?Et(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+z-1),G!==D&&(i.activeTexture(D),G=D)}function y(D,Mt,j){j===void 0&&(G===null?j=i.TEXTURE0+z-1:j=G);let tt=_t[j];tt===void 0&&(tt={type:void 0,texture:void 0},_t[j]=tt),(tt.type!==D||tt.texture!==Mt)&&(G!==j&&(i.activeTexture(j),G=j),i.bindTexture(D,Mt||et[D]),tt.type=D,tt.texture=Mt)}function k(){const D=_t[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){Ft.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ft.copy(D))}function Tt(D){Bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function Qt(D,Mt){let j=c.get(Mt);j===void 0&&(j=new WeakMap,c.set(Mt,j));let tt=j.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(Mt,D.name),j.set(D,tt))}function Wt(D,Mt){const tt=c.get(Mt).get(D);o.get(Mt)!==tt&&(i.uniformBlockBinding(Mt,tt,D.__bindingPointIndex),o.set(Mt,tt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,_t={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,w=null,x=null,S=null,L=null,C=new Kt(0,0,0),R=0,I=!1,J=null,_=null,M=null,O=null,F=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Et,disable:ht,bindFramebuffer:Nt,drawBuffers:Ut,useProgram:Ht,setBlending:A,setMaterial:dt,setFlipSided:ct,setCullFace:it,setLineWidth:ft,setPolygonOffset:Lt,setScissorTest:yt,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:wt,texImage3D:Vt,updateUBOMapping:Qt,uniformBlockBinding:Wt,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:Y,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:bt,scissor:Gt,viewport:Tt,reset:pe}}function nu(i,t,e,n){const s=Jg(n);switch(e){case ju:return i*t;case qu:return i*t;case $u:return i*t*2;case Yu:return i*t/s.components*s.byteLength;case Cc:return i*t/s.components*s.byteLength;case Ku:return i*t*2/s.components*s.byteLength;case Pc:return i*t*2/s.components*s.byteLength;case Xu:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Lc:return i*t*4/s.components*s.byteLength;case qr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:case Oo:return Math.max(i,16)*Math.max(t,8)/4;case No:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ju:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jg(i){switch(i){case ei:case Vu:return{byteLength:1,components:1};case Qs:case Gu:case ar:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case zi:case Tc:case Yn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):tr("canvas")}function v(T,y,k){let $=1;const Q=yt(T);if((Q.width>k||Q.height>k)&&($=k/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor($*Q.width),Rt=Math.floor($*Q.height);h===void 0&&(h=g(Y,Rt));const pt=y?g(Y,Rt):h;return pt.width=Y,pt.height=Rt,pt.getContext("2d").drawImage(T,0,0,Y,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Rt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Mn&&T.minFilter!==Rn}function p(T){i.generateMipmap(T)}function w(T,y,k,$,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=y;if(y===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const Rt=Q?aa:oe.getTransfer($);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Rt===_e?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(T,y){let k;return T?y===null||y===zi||y===ws?k=i.DEPTH24_STENCIL8:y===Yn?k=i.DEPTH32F_STENCIL8:y===Qs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===ws?k=i.DEPTH_COMPONENT24:y===Yn?k=i.DEPTH_COMPONENT32F:y===Qs&&(k=i.DEPTH_COMPONENT16),k}function S(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mn&&T.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function L(T){const y=T.target;y.removeEventListener("dispose",L),R(y),y.isVideoTexture&&u.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),J(y)}function R(T){const y=n.get(T);if(y.__webglInit===void 0)return;const k=T.source,$=d.get(k);if($){const Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(T),Object.keys($).length===0&&d.delete(k)}n.remove(T)}function I(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const k=T.source,$=d.get(k);delete $[y.__cacheKey],a.memory.textures--}function J(T){const y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let $=0,Q=k.length;$<Q;$++){const Y=n.get(k[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[$])}n.remove(T)}let _=0;function M(){_=0}function O(){const T=_;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),_+=1,T}function F(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function z(T,y){const k=n.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(k,T,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function X(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Bt(k,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function H(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Bt(k,T,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function K(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){W(k,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const G={[Io]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},_t={[Mn]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},q={[Hd]:i.NEVER,[qd]:i.ALWAYS,[Vd]:i.LESS,[Qu]:i.LEQUAL,[Gd]:i.EQUAL,[Xd]:i.GEQUAL,[Wd]:i.GREATER,[jd]:i.NOTEQUAL};function ot(T,y){if(y.type===Yn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===Aa||y.magFilter===pr||y.magFilter===Fi||y.minFilter===Rn||y.minFilter===Aa||y.minFilter===pr||y.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,_t[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,q[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mn||y.minFilter!==pr&&y.minFilter!==Fi||y.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",L));const $=y.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const Y=F(y);if(Y!==T.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[Y].usedTimes++;const Rt=Q[T.__cacheKey];Rt!==void 0&&(Q[T.__cacheKey].usedTimes--,Rt.usedTimes===0&&I(y)),T.__cacheKey=Y,T.__webglTexture=Q[Y].texture}return k}function Bt(T,y,k){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const Q=Ft(T,y),Y=y.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+k);const Rt=n.get(Y);if(Y.version!==Rt.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const pt=oe.getPrimaries(oe.workingColorSpace),bt=y.colorSpace===ui?null:oe.getPrimaries(y.colorSpace),Zt=y.colorSpace===ui||pt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=v(y.image,!1,s.maxTextureSize);rt=Lt(y,rt);const wt=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type);let Gt=w(y.internalFormat,wt,Vt,y.colorSpace,y.isVideoTexture);ot($,y);let Tt;const Qt=y.mipmaps,Wt=y.isVideoTexture!==!0,pe=Rt.__version===void 0||Q===!0,D=Y.dataReady,Mt=S(y,rt);if(y.isDepthTexture)Gt=x(y.format===Es,y.type),pe&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Gt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,rt.width,rt.height,0,wt,Vt,null));else if(y.isDataTexture)if(Qt.length>0){Wt&&pe&&e.texStorage2D(i.TEXTURE_2D,Mt,Gt,Qt[0].width,Qt[0].height);for(let j=0,tt=Qt.length;j<tt;j++)Tt=Qt[j],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,j,Gt,Tt.width,Tt.height,0,wt,Vt,Tt.data);y.generateMipmaps=!1}else Wt?(pe&&e.texStorage2D(i.TEXTURE_2D,Mt,Gt,rt.width,rt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,wt,Vt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,rt.width,rt.height,0,wt,Vt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Gt,Qt[0].width,Qt[0].height,rt.depth);for(let j=0,tt=Qt.length;j<tt;j++)if(Tt=Qt[j],y.format!==Cn)if(wt!==null)if(Wt){if(D)if(y.layerUpdates.size>0){const vt=nu(Tt.width,Tt.height,y.format,y.type);for(const St of y.layerUpdates){const te=Tt.data.subarray(St*vt/Tt.data.BYTES_PER_ELEMENT,(St+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,St,Tt.width,Tt.height,1,wt,te,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,rt.depth,wt,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Gt,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,rt.depth,wt,Vt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Gt,Tt.width,Tt.height,rt.depth,0,wt,Vt,Tt.data)}else{Wt&&pe&&e.texStorage2D(i.TEXTURE_2D,Mt,Gt,Qt[0].width,Qt[0].height);for(let j=0,tt=Qt.length;j<tt;j++)Tt=Qt[j],y.format!==Cn?wt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Gt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,j,Gt,Tt.width,Tt.height,0,wt,Vt,Tt.data)}else if(y.isDataArrayTexture)if(Wt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Gt,rt.width,rt.height,rt.depth),D)if(y.layerUpdates.size>0){const j=nu(rt.width,rt.height,y.format,y.type);for(const tt of y.layerUpdates){const vt=rt.data.subarray(tt*j/rt.data.BYTES_PER_ELEMENT,(tt+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,wt,Vt,vt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,wt,Vt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,rt.width,rt.height,rt.depth,0,wt,Vt,rt.data);else if(y.isData3DTexture)Wt?(pe&&e.texStorage3D(i.TEXTURE_3D,Mt,Gt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,wt,Vt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,rt.width,rt.height,rt.depth,0,wt,Vt,rt.data);else if(y.isFramebufferTexture){if(pe)if(Wt)e.texStorage2D(i.TEXTURE_2D,Mt,Gt,rt.width,rt.height);else{let j=rt.width,tt=rt.height;for(let vt=0;vt<Mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Gt,j,tt,0,wt,Vt,null),j>>=1,tt>>=1}}else if(Qt.length>0){if(Wt&&pe){const j=yt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Gt,j.width,j.height)}for(let j=0,tt=Qt.length;j<tt;j++)Tt=Qt[j],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt,Vt,Tt):e.texImage2D(i.TEXTURE_2D,j,Gt,wt,Vt,Tt);y.generateMipmaps=!1}else if(Wt){if(pe){const j=yt(rt);e.texStorage2D(i.TEXTURE_2D,Mt,Gt,j.width,j.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Vt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,Vt,rt);m(y)&&p($),Rt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function W(T,y,k){if(y.image.length!==6)return;const $=Ft(T,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const Y=n.get(Q);if(Q.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+k);const Rt=oe.getPrimaries(oe.workingColorSpace),pt=y.colorSpace===ui?null:oe.getPrimaries(y.colorSpace),bt=y.colorSpace===ui||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,wt=[];for(let tt=0;tt<6;tt++)!Zt&&!rt?wt[tt]=v(y.image[tt],!0,s.maxCubemapSize):wt[tt]=rt?y.image[tt].image:y.image[tt],wt[tt]=Lt(y,wt[tt]);const Vt=wt[0],Gt=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),Qt=w(y.internalFormat,Gt,Tt,y.colorSpace),Wt=y.isVideoTexture!==!0,pe=Y.__version===void 0||$===!0,D=Q.dataReady;let Mt=S(y,Vt);ot(i.TEXTURE_CUBE_MAP,y);let j;if(Zt){Wt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Qt,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){j=wt[tt].mipmaps;for(let vt=0;vt<j.length;vt++){const St=j[vt];y.format!==Cn?Gt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,St.width,St.height,Gt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Qt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,St.width,St.height,Gt,Tt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Qt,St.width,St.height,0,Gt,Tt,St.data)}}}else{if(j=y.mipmaps,Wt&&pe){j.length>0&&Mt++;const tt=yt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt[tt].width,wt[tt].height,Gt,Tt,wt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,wt[tt].width,wt[tt].height,0,Gt,Tt,wt[tt].data);for(let vt=0;vt<j.length;vt++){const te=j[vt].image[tt].image;Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,te.width,te.height,Gt,Tt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Qt,te.width,te.height,0,Gt,Tt,te.data)}}else{Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,Tt,wt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Gt,Tt,wt[tt]);for(let vt=0;vt<j.length;vt++){const St=j[vt];Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,Gt,Tt,St.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Qt,Gt,Tt,St.image[tt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,k,$,Q,Y){const Rt=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),bt=w(k.internalFormat,Rt,pt,k.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>Y),wt=Math.max(1,y.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,bt,rt,wt,y.depth,0,Rt,pt,null):e.texImage2D(Q,Y,bt,rt,wt,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,n.get(k).__webglTexture,0,ct(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,n.get(k).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(T,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=x(y.stencilBuffer,Q),Rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ct(y);it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Y,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,T)}else{const $=y.textures;for(let Q=0;Q<$.length;Q++){const Y=$[Q],Rt=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),bt=w(Y.internalFormat,Rt,pt,Y.colorSpace),Zt=ct(y);k&&it(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,bt,y.width,y.height):it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,bt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,bt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,Q=ct(y);if(y.depthTexture.format===vs)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===Es)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ht(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),Et(y.__webglDepthbuffer[$],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Et(y.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,y,k){const $=n.get(T);y!==void 0&&et($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Nt(T)}function Ht(T){const y=T.texture,k=n.get(T),$=n.get(y);T.addEventListener("dispose",C);const Q=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let bt=0;bt<y.mipmaps.length;bt++)k.__webglFramebuffer[pt][bt]=i.createFramebuffer()}else k.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[pt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,bt=Q.length;pt<bt;pt++){const Zt=n.get(Q[pt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&it(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){const bt=Q[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);const Zt=r.convert(bt.format,bt.colorSpace),rt=r.convert(bt.type),wt=w(bt.internalFormat,Zt,rt,bt.colorSpace,T.isXRRenderTarget===!0),Vt=ct(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,wt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ot(i.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)et(k.__webglFramebuffer[pt][bt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt);else et(k.__webglFramebuffer[pt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,bt=Q.length;pt<bt;pt++){const Zt=Q[pt],rt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),ot(i.TEXTURE_2D,Zt),et(k.__webglFramebuffer,T,Zt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),ot(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)et(k.__webglFramebuffer[bt],T,y,i.COLOR_ATTACHMENT0,pt,bt);else et(k.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,pt,0);m(y)&&p(pt),e.unbindTexture()}T.depthBuffer&&Nt(T)}function qt(T){const y=T.textures;for(let k=0,$=y.length;k<$;k++){const Q=y[k];if(m(Q)){const Y=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(Q).__webglTexture;e.bindTexture(Y,Rt),p(Y),e.unbindTexture()}}}const Z=[],A=[];function dt(T){if(T.samples>0){if(it(T)===!1){const y=T.textures,k=T.width,$=T.height;let Q=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(T),pt=y.length>1;if(pt)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Zt=n.get(y[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,Q,i.NEAREST),c===!0&&(Z.length=0,A.length=0,Z.push(i.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Z.push(Y),A.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Zt=n.get(y[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ct(T){return Math.min(s.maxSamples,T.samples)}function it(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ft(T){const y=a.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Lt(T,y){const k=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==gi&&k!==ui&&(oe.getTransfer(k)===_e?($!==Cn||Q!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=M,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Ut,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=it}function Qg(i,t){function e(n,s=ui){let r;const a=oe.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Tc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===Xu)return i.RGB;if(n===Cn)return i.RGBA;if(n===qu)return i.LUMINANCE;if(n===$u)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===Ku)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===qr||n===$r||n===Yr||n===Kr)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===ko||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===zo)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ho)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Go||n===Wo||n===jo||n===Xo||n===qo||n===$o||n===Yo||n===Ko||n===Jo||n===Zo||n===Qo||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===nc||n===ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ju||n===sc||n===rc||n===ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class t_ extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`;class s_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Ps{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new s_,m=e.getContextAttributes();let p=null,w=null;const x=[],S=[],L=new st;let C=null;const R=new ln;R.layers.enable(1),R.viewport=new he;const I=new ln;I.layers.enable(2),I.viewport=new he;const J=[R,I],_=new t_;_.layers.enable(1),_.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=x[W];return et===void 0&&(et=new io,x[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=x[W];return et===void 0&&(et=new io,x[W]=et),et.getGripSpace()},this.getHand=function(W){let et=x[W];return et===void 0&&(et=new io,x[W]=et),et.getHandSpace()};function F(W){const et=S.indexOf(W.inputSource);if(et===-1)return;const Et=x[et];Et!==void 0&&(Et.update(W.inputSource,W.frame,l||a),Et.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let W=0;W<x.length;W++){const et=S[W];et!==null&&(S[W]=null,x[W].disconnect(et))}M=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Hi(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,Et=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Es:vs,Et=m.stencil?ws:zi);const Nt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Hi(d.textureWidth,d.textureHeight,{format:Cn,type:ei,depthTexture:new hh(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(W){for(let et=0;et<W.removed.length;et++){const Et=W.removed[et],ht=S.indexOf(Et);ht>=0&&(S[ht]=null,x[ht].disconnect(Et))}for(let et=0;et<W.added.length;et++){const Et=W.added[et];let ht=S.indexOf(Et);if(ht===-1){for(let Ut=0;Ut<x.length;Ut++)if(Ut>=S.length){S.push(Et),ht=Ut;break}else if(S[Ut]===null){S[Ut]=Et,ht=Ut;break}if(ht===-1)break}const Nt=x[ht];Nt&&Nt.connect(Et)}}const H=new P,K=new P;function G(W,et,Et){H.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const ht=H.distanceTo(K),Nt=et.projectionMatrix.elements,Ut=Et.projectionMatrix.elements,Ht=Nt[14]/(Nt[10]-1),qt=Nt[14]/(Nt[10]+1),Z=(Nt[9]+1)/Nt[5],A=(Nt[9]-1)/Nt[5],dt=(Nt[8]-1)/Nt[0],ct=(Ut[8]+1)/Ut[0],it=Ht*dt,ft=Ht*ct,Lt=ht/(-dt+ct),yt=Lt*-dt;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(yt),W.translateZ(Lt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Nt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const T=Ht+Lt,y=qt+Lt,k=it-yt,$=ft+(ht-yt),Q=Z*qt/y*T,Y=A*qt/y*T;W.projectionMatrix.makePerspective(k,$,Q,Y,T,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function _t(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let et=W.near,Et=W.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),_.near=I.near=R.near=et,_.far=I.far=R.far=Et,(M!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,O=_.far);const ht=W.parent,Nt=_.cameras;_t(_,ht);for(let Ut=0;Ut<Nt.length;Ut++)_t(Nt[Ut],ht);Nt.length===2?G(_,R,I):_.projectionMatrix.copy(R.projectionMatrix),q(W,_,ht)};function q(W,et,Et){Et===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(Et.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ot=null;function Ft(W,et){if(u=et.getViewerPose(l||a),g=et,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ht=!1;Et.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Ut=0;Ut<Et.length;Ut++){const Ht=Et[Ut];let qt=null;if(f!==null)qt=f.getViewport(Ht);else{const A=h.getViewSubImage(d,Ht);qt=A.viewport,Ut===0&&(t.setRenderTargetTextures(w,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(w))}let Z=J[Ut];Z===void 0&&(Z=new ln,Z.layers.enable(Ut),Z.viewport=new he,J[Ut]=Z),Z.matrix.fromArray(Ht.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ht.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(qt.x,qt.y,qt.width,qt.height),Ut===0&&(_.matrix.copy(Z.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Z)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ut=h.getDepthInformation(Et[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let Et=0;Et<x.length;Et++){const ht=S[Et],Nt=x[Et];ht!==null&&Nt!==void 0&&Nt.update(ht,et,l||a)}ot&&ot(W,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Bt=new lh;Bt.setAnimationLoop(Ft),this.setAnimationLoop=function(W){ot=W},this.dispose=function(){}}}const Ti=new On,a_=new fe;function o_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),x=w.envMap,S=w.envMapRotation;x&&(m.envMap.value=x,Ti.copy(S),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(Ti)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const S=x.program;n.uniformBlockBinding(w,S)}function l(w,x){let S=s[w.id];S===void 0&&(g(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(w,L);const C=t.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function u(w){const x=h();w.__bindingPointIndex=x;const S=i.createBuffer(),L=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],S=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,R=S.length;C<R;C++){const I=Array.isArray(S[C])?S[C]:[S[C]];for(let J=0,_=I.length;J<_;J++){const M=I[J];if(f(M,C,J,L)===!0){const O=M.__offset,F=Array.isArray(M.value)?M.value:[M.value];let z=0;for(let X=0;X<F.length;X++){const H=F[X],K=v(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+z,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,x,S,L){const C=w.value,R=x+"_"+S;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const I=L[R];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return L[R]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){const x=w.uniforms;let S=0;const L=16;for(let R=0,I=x.length;R<I;R++){const J=Array.isArray(x[R])?x[R]:[x[R]];for(let _=0,M=J.length;_<M;_++){const O=J[_],F=Array.isArray(O.value)?O.value:[O.value];for(let z=0,X=F.length;z<X;z++){const H=F[z],K=v(H),G=S%L,_t=G%K.boundary,q=G+_t;S+=_t,q!==0&&L-q<K.storage&&(S+=L-q),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=K.storage}}}const C=S%L;return C>0&&(S+=L-C),w.__size=S,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class l_{constructor(t={}){const{canvas:e=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let S=!1,L=0,C=0,R=null,I=-1,J=null;const _=new he,M=new he;let O=null;const F=new Kt(0);let z=0,X=e.width,H=e.height,K=1,G=null,_t=null;const q=new he(0,0,X,H),ot=new he(0,0,X,H);let Ft=!1;const Bt=new Nc;let W=!1,et=!1;const Et=new fe,ht=new fe,Nt=new P,Ut=new he,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Z(){return R===null?K:1}let A=n;function dt(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",St,!1),A===null){const U="webgl2";if(A=dt(U,b),A===null)throw dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,it,ft,Lt,yt,T,y,k,$,Q,Y,Rt,pt,bt,Zt,rt,wt,Vt,Gt,Tt,Qt,Wt,pe,D;function Mt(){ct=new p0(A),ct.init(),Wt=new Qg(A,ct),it=new c0(A,ct,t,Wt),ft=new Kg(A),it.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Lt=new _0(A),yt=new Ng,T=new Zg(A,ct,ft,yt,it,Wt,Lt),y=new u0(x),k=new f0(x),$=new wf(A),pe=new a0(A,$),Q=new m0(A,$,Lt,pe),Y=new x0(A,Q,$,Lt),Gt=new v0(A,it,T),rt=new l0(yt),Rt=new Ug(x,y,k,ct,it,pe,rt),pt=new o_(x,yt),bt=new Fg,Zt=new Gg(ct),Vt=new r0(x,y,k,ft,Y,d,c),wt=new $g(x,Y,it),D=new c_(A,Lt,it,ft),Tt=new o0(A,ct,Lt),Qt=new g0(A,ct,Lt),Lt.programs=Rt.programs,x.capabilities=it,x.extensions=ct,x.properties=yt,x.renderLists=bt,x.shadowMap=wt,x.state=ft,x.info=Lt}Mt();const j=new r_(x,A);this.xr=j,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(X,H,!1))},this.getSize=function(b){return b.set(X,H)},this.setSize=function(b,U,B=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,H=U,e.width=Math.floor(b*K),e.height=Math.floor(U*K),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*K,H*K).floor()},this.setDrawingBufferSize=function(b,U,B){X=b,H=U,K=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,U,B,V){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,U,B,V),ft.viewport(_.copy(q).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,U,B,V){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,U,B,V),ft.scissor(M.copy(ot).multiplyScalar(K).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){ft.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(b=!0,U=!0,B=!0){let V=0;if(b){let N=!1;if(R!==null){const at=R.texture.format;N=at===Lc||at===Pc||at===Cc}if(N){const at=R.texture.type,xt=at===ei||at===zi||at===Qs||at===ws||at===Ac||at===Rc,At=Vt.getClearColor(),Ct=Vt.getClearAlpha(),Ot=At.r,zt=At.g,Pt=At.b;xt?(f[0]=Ot,f[1]=zt,f[2]=Pt,f[3]=Ct,A.clearBufferuiv(A.COLOR,0,f)):(g[0]=Ot,g[1]=zt,g[2]=Pt,g[3]=Ct,A.clearBufferiv(A.COLOR,0,g))}else V|=A.COLOR_BUFFER_BIT}U&&(V|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),bt.dispose(),Zt.dispose(),yt.dispose(),y.dispose(),k.dispose(),Y.dispose(),pe.dispose(),D.dispose(),Rt.dispose(),j.dispose(),j.removeEventListener("sessionstart",el),j.removeEventListener("sessionend",nl),yi.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Lt.autoReset,U=wt.enabled,B=wt.autoUpdate,V=wt.needsUpdate,N=wt.type;Mt(),Lt.autoReset=b,wt.enabled=U,wt.autoUpdate=B,wt.needsUpdate=V,wt.type=N}function St(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const U=b.target;U.removeEventListener("dispose",te),Ae(U)}function Ae(b){Ke(b),yt.remove(b)}function Ke(b){const U=yt.get(b).programs;U!==void 0&&(U.forEach(function(B){Rt.releaseProgram(B)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,V,N,at){U===null&&(U=Ht);const xt=N.isMesh&&N.matrixWorld.determinant()<0,At=id(b,U,B,V,N);ft.setMaterial(V,xt);let Ct=B.index,Ot=1;if(V.wireframe===!0){if(Ct=Q.getWireframeAttribute(B),Ct===void 0)return;Ot=2}const zt=B.drawRange,Pt=B.attributes.position;let ce=zt.start*Ot,me=(zt.start+zt.count)*Ot;at!==null&&(ce=Math.max(ce,at.start*Ot),me=Math.min(me,(at.start+at.count)*Ot)),Ct!==null?(ce=Math.max(ce,0),me=Math.min(me,Ct.count)):Pt!=null&&(ce=Math.max(ce,0),me=Math.min(me,Pt.count));const be=me-ce;if(be<0||be===1/0)return;pe.setup(N,V,At,B,Ct);let nn,re=Tt;if(Ct!==null&&(nn=$.get(Ct),re=Qt,re.setIndex(nn)),N.isMesh)V.wireframe===!0?(ft.setLineWidth(V.wireframeLinewidth*Z()),re.setMode(A.LINES)):re.setMode(A.TRIANGLES);else if(N.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),ft.setLineWidth(Dt*Z()),N.isLineSegments?re.setMode(A.LINES):N.isLineLoop?re.setMode(A.LINE_LOOP):re.setMode(A.LINE_STRIP)}else N.isPoints?re.setMode(A.POINTS):N.isSprite&&re.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)re.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))re.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,Fe=N._multiDrawCounts,ae=N._multiDrawCount,bn=Ct?$.get(Ct).bytesPerElement:1,Xi=yt.get(V).currentProgram.getUniforms();for(let sn=0;sn<ae;sn++)Xi.setValue(A,"_gl_DrawID",sn),re.render(Dt[sn]/bn,Fe[sn])}else if(N.isInstancedMesh)re.renderInstances(ce,be,N.count);else if(B.isInstancedBufferGeometry){const Dt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Fe=Math.min(B.instanceCount,Dt);re.renderInstances(ce,be,Fe)}else re.render(ce,be)};function ne(b,U,B){b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,fr(b,U,B),b.side=fi,b.needsUpdate=!0,fr(b,U,B),b.side=Ze):fr(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),m=Zt.get(B),m.init(U),w.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const At=at[xt];ne(At,B,N),V.add(At)}else ne(at,B,N),V.add(at)}),w.pop(),m=null,V},this.compileAsync=function(b,U,B=null){const V=this.compile(b,U,B);return new Promise(N=>{function at(){if(V.forEach(function(xt){yt.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){N(b);return}setTimeout(at,10)}ct.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Je=null;function Hn(b){Je&&Je(b)}function el(){yi.stop()}function nl(){yi.start()}const yi=new lh;yi.setAnimationLoop(Hn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){Je=b,j.setAnimationLoop(b),b===null?yi.stop():yi.start()},j.addEventListener("sessionstart",el),j.addEventListener("sessionend",nl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,R),m=Zt.get(b,w.length),m.init(U),w.push(m),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(ht),et=this.localClippingEnabled,W=rt.init(this.clippingPlanes,et),v=bt.get(b,p.length),v.init(),p.push(v),j.enabled===!0&&j.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Sa(at,U,-1/0,x.sortObjects)}Sa(b,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,_t),qt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,qt&&Vt.addToRenderList(v,b),this.info.render.frame++,W===!0&&rt.beginShadows();const B=m.state.shadowsArray;wt.render(B,b,U),W===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,N=v.transmissive;if(m.setupLights(),U.isArrayCamera){const at=U.cameras;if(N.length>0)for(let xt=0,At=at.length;xt<At;xt++){const Ct=at[xt];sl(V,N,b,Ct)}qt&&Vt.render(b);for(let xt=0,At=at.length;xt<At;xt++){const Ct=at[xt];il(v,b,Ct,Ct.viewport)}}else N.length>0&&sl(V,N,b,U),qt&&Vt.render(b),il(v,b,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,U),pe.resetDefaultState(),I=-1,J=null,w.pop(),w.length>0?(m=w[w.length-1],W===!0&&rt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Sa(b,U,B,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Bt.intersectsSprite(b)){V&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const xt=Y.update(b),At=b.material;At.visible&&v.push(b,xt,At,B,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Bt.intersectsObject(b))){const xt=Y.update(b),At=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ut.copy(xt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const Ct=xt.groups;for(let Ot=0,zt=Ct.length;Ot<zt;Ot++){const Pt=Ct[Ot],ce=At[Pt.materialIndex];ce&&ce.visible&&v.push(b,xt,ce,B,Ut.z,Pt)}}else At.visible&&v.push(b,xt,At,B,Ut.z,null)}}const at=b.children;for(let xt=0,At=at.length;xt<At;xt++)Sa(at[xt],U,B,V)}function il(b,U,B,V){const N=b.opaque,at=b.transmissive,xt=b.transparent;m.setupLightsView(B),W===!0&&rt.setGlobalState(x.clippingPlanes,B),V&&ft.viewport(_.copy(V)),N.length>0&&dr(N,U,B),at.length>0&&dr(at,U,B),xt.length>0&&dr(xt,U,B),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function sl(b,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Hi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ar:ei,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const at=m.state.transmissionRenderTarget[V.id],xt=V.viewport||_;at.setSize(xt.z,xt.w);const At=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(F),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),qt&&Vt.render(B);const Ct=x.toneMapping;x.toneMapping=di;const Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&rt.setGlobalState(x.clippingPlanes,V),dr(b,B,V),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),ct.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Pt=0,ce=U.length;Pt<ce;Pt++){const me=U[Pt],be=me.object,nn=me.geometry,re=me.material,Dt=me.group;if(re.side===Ze&&be.layers.test(V.layers)){const Fe=re.side;re.side=Ye,re.needsUpdate=!0,rl(be,B,V,nn,re,Dt),re.side=Fe,re.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}x.setRenderTarget(At),x.setClearColor(F,z),Ot!==void 0&&(V.viewport=Ot),x.toneMapping=Ct}function dr(b,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=b.length;N<at;N++){const xt=b[N],At=xt.object,Ct=xt.geometry,Ot=V===null?xt.material:V,zt=xt.group;At.layers.test(B.layers)&&rl(At,U,B,Ct,Ot,zt)}}function rl(b,U,B,V,N,at){b.onBeforeRender(x,U,B,V,N,at),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,B,V,b,at),N.transparent===!0&&N.side===Ze&&N.forceSinglePass===!1?(N.side=Ye,N.needsUpdate=!0,x.renderBufferDirect(B,U,V,N,b,at),N.side=fi,N.needsUpdate=!0,x.renderBufferDirect(B,U,V,N,b,at),N.side=Ze):x.renderBufferDirect(B,U,V,N,b,at),b.onAfterRender(x,U,B,V,N,at)}function fr(b,U,B){U.isScene!==!0&&(U=Ht);const V=yt.get(b),N=m.state.lights,at=m.state.shadowsArray,xt=N.state.version,At=Rt.getParameters(b,N.state,at,U,B),Ct=Rt.getProgramCacheKey(At);let Ot=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",te),Ot=new Map,V.programs=Ot);let zt=Ot.get(Ct);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===xt)return ol(b,At),zt}else At.uniforms=Rt.getUniforms(b),b.onBeforeCompile(At,x),zt=Rt.acquireProgram(At,Ct),Ot.set(Ct,zt),V.uniforms=At.uniforms;const Pt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),ol(b,At),V.needsLights=rd(b),V.lightsStateVersion=xt,V.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=zt,V.uniformsList=null,zt}function al(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Qr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ol(b,U){const B=yt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function id(b,U,B,V,N){U.isScene!==!0&&(U=Ht),T.resetTextureUnits();const at=U.fog,xt=V.isMeshStandardMaterial?U.environment:null,At=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gi,Ct=(V.isMeshStandardMaterial?k:y).get(V.envMap||xt),Ot=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,zt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!B.morphAttributes.position,ce=!!B.morphAttributes.normal,me=!!B.morphAttributes.color;let be=di;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=x.toneMapping);const nn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=nn!==void 0?nn.length:0,Dt=yt.get(V),Fe=m.state.lights;if(W===!0&&(et===!0||b!==J)){const mn=b===J&&V.id===I;rt.setState(V,b,mn)}let ae=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Fe.state.version||Dt.outputColorSpace!==At||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Ct||V.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==zt||Dt.morphTargets!==Pt||Dt.morphNormals!==ce||Dt.morphColors!==me||Dt.toneMapping!==be||Dt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Dt.__version=V.version);let bn=Dt.currentProgram;ae===!0&&(bn=fr(V,U,N));let Xi=!1,sn=!1,ba=!1;const we=bn.getUniforms(),ii=Dt.uniforms;if(ft.useProgram(bn.program)&&(Xi=!0,sn=!0,ba=!0),V.id!==I&&(I=V.id,sn=!0),Xi||J!==b){it.reverseDepthBuffer?(Et.copy(b.projectionMatrix),Jd(Et),Zd(Et),we.setValue(A,"projectionMatrix",Et)):we.setValue(A,"projectionMatrix",b.projectionMatrix),we.setValue(A,"viewMatrix",b.matrixWorldInverse);const mn=we.map.cameraPosition;mn!==void 0&&mn.setValue(A,Nt.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&we.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&we.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,sn=!0,ba=!0)}if(N.isSkinnedMesh){we.setOptional(A,N,"bindMatrix"),we.setOptional(A,N,"bindMatrixInverse");const mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),we.setValue(A,"boneTexture",mn.boneTexture,T))}N.isBatchedMesh&&(we.setOptional(A,N,"batchingTexture"),we.setValue(A,"batchingTexture",N._matricesTexture,T),we.setOptional(A,N,"batchingIdTexture"),we.setValue(A,"batchingIdTexture",N._indirectTexture,T),we.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&we.setValue(A,"batchingColorTexture",N._colorsTexture,T));const wa=B.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0)&&Gt.update(N,B,bn),(sn||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,we.setValue(A,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ii.envMap.value=Ct,ii.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(ii.envMapIntensity.value=U.environmentIntensity),sn&&(we.setValue(A,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&sd(ii,ba),at&&V.fog===!0&&pt.refreshFogUniforms(ii,at),pt.refreshMaterialUniforms(ii,V,K,H,m.state.transmissionRenderTarget[b.id]),Qr.upload(A,al(Dt),ii,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Qr.upload(A,al(Dt),ii,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&we.setValue(A,"center",N.center),we.setValue(A,"modelViewMatrix",N.modelViewMatrix),we.setValue(A,"normalMatrix",N.normalMatrix),we.setValue(A,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const mn=V.uniformsGroups;for(let Ea=0,ad=mn.length;Ea<ad;Ea++){const cl=mn[Ea];D.update(cl,bn),D.bind(cl,bn)}}return bn}function sd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function rd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,B){yt.get(b.texture).__webglTexture=U,yt.get(b.depthTexture).__webglTexture=B;const V=yt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=yt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){R=b,L=U,C=B;let V=!0,N=null,at=!1,xt=!1;if(b){const Ct=yt.get(b);if(Ct.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ct.__hasExternalTextures)T.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pt=b.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&yt.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(xt=!0);const zt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?N=zt[U][B]:N=zt[U],at=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[B]:N=zt,_.copy(b.viewport),M.copy(b.scissor),O=b.scissorTest}else _.copy(q).multiplyScalar(K).floor(),M.copy(ot).multiplyScalar(K).floor(),O=Ft;if(ft.bindFramebuffer(A.FRAMEBUFFER,N)&&V&&ft.drawBuffers(b,N),ft.viewport(_),ft.scissor(M),ft.setScissorTest(O),at){const Ct=yt.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,B)}else if(xt){const Ct=yt.get(b.texture),Ot=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.__webglTexture,B||0,Ot)}I=-1},this.readRenderTargetPixels=function(b,U,B,V,N,at,xt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){ft.bindFramebuffer(A.FRAMEBUFFER,At);try{const Ct=b.texture,Ot=Ct.format,zt=Ct.type;if(!it.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&B>=0&&B<=b.height-N&&A.readPixels(U,B,V,N,Wt.convert(Ot),Wt.convert(zt),at)}finally{const Ct=R!==null?yt.get(R).__webglFramebuffer:null;ft.bindFramebuffer(A.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,V,N,at,xt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){const Ct=b.texture,Ot=Ct.format,zt=Ct.type;if(!it.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&B>=0&&B<=b.height-N){ft.bindFramebuffer(A.FRAMEBUFFER,At);const Pt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Pt),A.bufferData(A.PIXEL_PACK_BUFFER,at.byteLength,A.STREAM_READ),A.readPixels(U,B,V,N,Wt.convert(Ot),Wt.convert(zt),0);const ce=R!==null?yt.get(R).__webglFramebuffer:null;ft.bindFramebuffer(A.FRAMEBUFFER,ce);const me=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Kd(A,me,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Pt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,at),A.deleteBuffer(Pt),A.deleteSync(me),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-B),N=Math.floor(b.image.width*V),at=Math.floor(b.image.height*V),xt=U!==null?U.x:0,At=U!==null?U.y:0;T.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,xt,At,N,at),ft.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,V=null,N=0){b.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let at,xt,At,Ct,Ot,zt;B!==null?(at=B.max.x-B.min.x,xt=B.max.y-B.min.y,At=B.min.x,Ct=B.min.y):(at=b.image.width,xt=b.image.height,At=0,Ct=0),V!==null?(Ot=V.x,zt=V.y):(Ot=0,zt=0);const Pt=Wt.convert(U.format),ce=Wt.convert(U.type);T.setTexture2D(U,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const me=A.getParameter(A.UNPACK_ROW_LENGTH),be=A.getParameter(A.UNPACK_IMAGE_HEIGHT),nn=A.getParameter(A.UNPACK_SKIP_PIXELS),re=A.getParameter(A.UNPACK_SKIP_ROWS),Dt=A.getParameter(A.UNPACK_SKIP_IMAGES),Fe=b.isCompressedTexture?b.mipmaps[N]:b.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Fe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Fe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,At),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ct),b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,N,Ot,zt,at,xt,Pt,ce,Fe.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,N,Ot,zt,Fe.width,Fe.height,Pt,Fe.data):A.texSubImage2D(A.TEXTURE_2D,N,Ot,zt,at,xt,Pt,ce,Fe),A.pixelStorei(A.UNPACK_ROW_LENGTH,me),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,be),A.pixelStorei(A.UNPACK_SKIP_PIXELS,nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,re),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dt),N===0&&U.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,V=null,N=0){b.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let at,xt,At,Ct,Ot,zt,Pt,ce,me;const be=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(at=B.max.x-B.min.x,xt=B.max.y-B.min.y,At=B.max.z-B.min.z,Ct=B.min.x,Ot=B.min.y,zt=B.min.z):(at=be.width,xt=be.height,At=be.depth,Ct=0,Ot=0,zt=0),V!==null?(Pt=V.x,ce=V.y,me=V.z):(Pt=0,ce=0,me=0);const nn=Wt.convert(U.format),re=Wt.convert(U.type);let Dt;if(U.isData3DTexture)T.setTexture3D(U,0),Dt=A.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)T.setTexture2DArray(U,0),Dt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Fe=A.getParameter(A.UNPACK_ROW_LENGTH),ae=A.getParameter(A.UNPACK_IMAGE_HEIGHT),bn=A.getParameter(A.UNPACK_SKIP_PIXELS),Xi=A.getParameter(A.UNPACK_SKIP_ROWS),sn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,be.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,be.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ct),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ot),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt),b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Dt,N,Pt,ce,me,at,xt,At,nn,re,be.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Dt,N,Pt,ce,me,at,xt,At,nn,be.data):A.texSubImage3D(Dt,N,Pt,ce,me,at,xt,At,nn,re,be),A.pixelStorei(A.UNPACK_ROW_LENGTH,Fe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ae),A.pixelStorei(A.UNPACK_SKIP_PIXELS,bn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,sn),N===0&&U.generateMipmaps&&A.generateMipmap(Dt),ft.unbindTexture()},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){L=0,C=0,R=null,ft.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Dc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===ga?"display-p3":"srgb"}}class Fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class u_ extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new P;class ua{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uc extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let os;const Os=new P,cs=new P,ls=new P,us=new st,Bs=new st,gh=new fe,Nr=new P,zs=new P,kr=new P,iu=new st,so=new st,su=new st;class ru extends Pe{constructor(t=new uc){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new h_(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new ua(n,3,0,!1)),os.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),gh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Fr(Nr.set(-.5,-.5,0),ls,a,cs,s,r),Fr(zs.set(.5,-.5,0),ls,a,cs,s,r),Fr(kr.set(.5,.5,0),ls,a,cs,s,r),iu.set(0,0),so.set(1,0),su.set(1,1);let o=t.ray.intersectTriangle(Nr,zs,kr,!1,Os);if(o===null&&(Fr(zs.set(-.5,.5,0),ls,a,cs,s,r),so.set(0,1),o=t.ray.intersectTriangle(Nr,kr,zs,!1,Os),o===null))return;const c=t.ray.origin.distanceTo(Os);c<t.near||c>t.far||e.push({distance:c,point:Os.clone(),uv:yn.getInterpolation(Os,Nr,zs,kr,iu,so,su,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fr(i,t,e,n,s,r){us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Bs.x=r*us.x-s*us.y,Bs.y=s*us.x+r*us.y):Bs.copy(us),i.copy(t),i.x+=Bs.x,i.y+=Bs.y,i.applyMatrix4(gh)}class _h extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new P,da=new P,au=new fe,Hs=new Ic,Or=new _a,ro=new P,ou=new P;class d_ extends Pe{constructor(t=new je,e=new _h){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ha.distanceTo(da);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;au.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),w=u.getX(v+1),x=Br(this,t,Hs,c,p,w);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Br(this,t,Hs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Br(this,t,Hs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Br(this,t,Hs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Br(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),da.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,da,ro,ou)>n)return;ro.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ro);if(!(c<t.near||c>t.far))return{distance:c,point:ou.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class ta extends We{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new st:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new fe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oc extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class f_ extends Oc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const zr=new P,ao=new Bc,oo=new Bc,co=new Bc;class p_ extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),l=zr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ao.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),oo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),co.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),oo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),co.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ao.calc(c),oo.calc(c),co.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function m_(i,t){const e=1-i;return e*e*t}function g_(i,t){return 2*(1-i)*i*t}function __(i,t){return i*i*t}function Xs(i,t,e,n){return m_(i,t)+g_(i,e)+__(i,n)}function v_(i,t){const e=1-i;return e*e*e*t}function x_(i,t){const e=1-i;return 3*e*e*i*t}function y_(i,t){return 3*(1-i)*i*i*t}function M_(i,t){return i*i*i*t}function qs(i,t,e,n,s){return v_(i,t)+x_(i,e)+y_(i,n)+M_(i,s)}class vh extends zn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class S_ extends zn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y),qs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xh extends zn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b_ extends zn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends zn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w_ extends zn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y),Xs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(cu(o,c.x,l.x,u.x,h.x),cu(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var hc=Object.freeze({__proto__:null,ArcCurve:f_,CatmullRomCurve3:p_,CubicBezierCurve:vh,CubicBezierCurve3:S_,EllipseCurve:Oc,LineCurve:xh,LineCurve3:b_,QuadraticBezierCurve:yh,QuadraticBezierCurve3:w_,SplineCurve:Mh});class E_ extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new hc[s.type]().fromJSON(s))}return this}}class dc extends E_{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new yh(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new vh(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Oc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class er extends je{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new P,d=new st,f=new P,g=new P,v=new P;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let w=0;w<=e;w++){const x=n+w*u*s,S=Math.sin(x),L=Math.cos(x);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*S,h.y=t[C].y,h.z=t[C].x*L,a.push(h.x,h.y,h.z),d.x=w/e,d.y=C/(t.length-1),o.push(d.x,d.y);const R=c[3*C+0]*S,I=c[3*C+1],J=c[3*C+0]*L;l.push(R,I,J)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){const S=x+w*t.length,L=S,C=S+t.length,R=S+t.length+1,I=S+1;r.push(L,C,I),r.push(R,I,C)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.points,t.segments,t.phiStart,t.phiLength)}}class zc extends er{constructor(t=1,e=1,n=4,s=8){const r=new dc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new zc(t.radius,t.length,t.capSegments,t.radialSegments)}}class Oi extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,u=new st;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xn extends je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;w(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function w(){const S=new P,L=new P;let C=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const J=[],_=I/r,M=_*(e-t)+t;for(let O=0;O<=s;O++){const F=O/s,z=F*c+o,X=Math.sin(z),H=Math.cos(z);L.x=M*X,L.y=-_*n+m,L.z=M*H,h.push(L.x,L.y,L.z),S.set(X,R,H).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-_),J.push(g++)}v.push(J)}for(let I=0;I<s;I++)for(let J=0;J<r;J++){const _=v[J][I],M=v[J+1][I],O=v[J+1][I+1],F=v[J][I+1];t>0&&(u.push(_,M,F),C+=3),e>0&&(u.push(M,O,F),C+=3)}l.addGroup(p,C,0),p+=C}function x(S){const L=g,C=new st,R=new P;let I=0;const J=S===!0?t:e,_=S===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const M=g;for(let O=0;O<=s;O++){const z=O/s*c+o,X=Math.cos(z),H=Math.sin(z);R.x=J*H,R.y=m*_,R.z=J*X,h.push(R.x,R.y,R.z),d.push(0,_,0),C.x=X*.5+.5,C.y=H*.5*_+.5,f.push(C.x,C.y),g++}for(let O=0;O<s;O++){const F=L+O,z=M+O;S===!0?u.push(z,z+1,F):u.push(z+1,z,F),I+=3}l.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class As extends xn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new As(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sh extends dc{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new dc().fromJSON(s))}return this}}const T_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=bh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,f;if(n&&(r=L_(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return nr(r,a,e,o,c,f,0),a}};function bh(i,t,e,n,s){let r,a;if(s===V_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=lu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=lu(r,i[r],i[r+1],a);return a&&xa(a,a.next)&&(sr(a),a=a.next),a}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xa(e,e.next)||Se(e.prev,e,e.next)===0)){if(sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function nr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&k_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?R_(i,n,s,r):A_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),sr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=C_(Vi(i),t,e),nr(i,t,e,n,s,r,2)):a===2&&P_(i,t,e,n,s,r):nr(Vi(i),t,e,n,s,r,1);break}}}function A_(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ms(s,o,r,c,a,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=fc(f,g,t,e,n),w=fc(v,m,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=p&&S&&S.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ms(o,u,c,h,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ms(o,u,c,h,l,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ms(o,u,c,h,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=w;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ms(o,u,c,h,l,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function C_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!xa(s,r)&&wh(s,n,n.next,r)&&ir(s,r)&&ir(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),sr(n),sr(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function P_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&B_(a,o)){let c=Eh(a,o);a=Vi(a,a.next),c=Vi(c,c.next),nr(a,t,e,n,s,r,0),nr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function L_(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=bh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(O_(l));for(s.sort(D_),r=0;r<s.length;r++)e=I_(s[r],e);return e}function D_(i,t){return i.x-t.x}function I_(i,t){const e=U_(i,t);if(!e)return t;const n=Eh(e,i);return Vi(n,n.next),Vi(e,e.next)}function U_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ms(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),ir(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&N_(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function N_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function k_(i,t,e,n){let s=i;do s.z===0&&(s.z=fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,F_(s)}function F_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ms(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function B_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!z_(i,t)&&(ir(i,t)&&ir(t,i)&&H_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||xa(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xa(i,t){return i.x===t.x&&i.y===t.y}function wh(i,t,e,n){const s=Vr(Se(i,t,e)),r=Vr(Se(i,t,n)),a=Vr(Se(e,n,i)),o=Vr(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||a===0&&Hr(e,i,n)||o===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vr(i){return i>0?1:i<0?-1:0}function z_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ir(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function H_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Eh(i,t){const e=new pc(i.i,i.x,i.y),n=new pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lu(i,t,e,n){const s=new pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class $s{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return $s.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uu(t),hu(n,t);let a=t.length;e.forEach(uu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,hu(n,e[c]);const o=T_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function uu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Hc extends je{constructor(t=new Sh([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:G_;let x,S=!1,L,C,R,I;p&&(x=p.getSpacedPoints(u),S=!0,d=!1,L=p.computeFrenetFrames(u,!1),C=new P,R=new P,I=new P),d||(m=0,f=0,g=0,v=0);const J=o.extractPoints(l);let _=J.shape;const M=J.holes;if(!$s.isClockWise(_)){_=_.reverse();for(let Z=0,A=M.length;Z<A;Z++){const dt=M[Z];$s.isClockWise(dt)&&(M[Z]=dt.reverse())}}const F=$s.triangulateShape(_,M),z=_;for(let Z=0,A=M.length;Z<A;Z++){const dt=M[Z];_=_.concat(dt)}function X(Z,A,dt){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(A,dt)}const H=_.length,K=F.length;function G(Z,A,dt){let ct,it,ft;const Lt=Z.x-A.x,yt=Z.y-A.y,T=dt.x-Z.x,y=dt.y-Z.y,k=Lt*Lt+yt*yt,$=Lt*y-yt*T;if(Math.abs($)>Number.EPSILON){const Q=Math.sqrt(k),Y=Math.sqrt(T*T+y*y),Rt=A.x-yt/Q,pt=A.y+Lt/Q,bt=dt.x-y/Y,Zt=dt.y+T/Y,rt=((bt-Rt)*y-(Zt-pt)*T)/(Lt*y-yt*T);ct=Rt+Lt*rt-Z.x,it=pt+yt*rt-Z.y;const wt=ct*ct+it*it;if(wt<=2)return new st(ct,it);ft=Math.sqrt(wt/2)}else{let Q=!1;Lt>Number.EPSILON?T>Number.EPSILON&&(Q=!0):Lt<-Number.EPSILON?T<-Number.EPSILON&&(Q=!0):Math.sign(yt)===Math.sign(y)&&(Q=!0),Q?(ct=-yt,it=Lt,ft=Math.sqrt(k)):(ct=Lt,it=yt,ft=Math.sqrt(k/2))}return new st(ct/ft,it/ft)}const _t=[];for(let Z=0,A=z.length,dt=A-1,ct=Z+1;Z<A;Z++,dt++,ct++)dt===A&&(dt=0),ct===A&&(ct=0),_t[Z]=G(z[Z],z[dt],z[ct]);const q=[];let ot,Ft=_t.concat();for(let Z=0,A=M.length;Z<A;Z++){const dt=M[Z];ot=[];for(let ct=0,it=dt.length,ft=it-1,Lt=ct+1;ct<it;ct++,ft++,Lt++)ft===it&&(ft=0),Lt===it&&(Lt=0),ot[ct]=G(dt[ct],dt[ft],dt[Lt]);q.push(ot),Ft=Ft.concat(ot)}for(let Z=0;Z<m;Z++){const A=Z/m,dt=f*Math.cos(A*Math.PI/2),ct=g*Math.sin(A*Math.PI/2)+v;for(let it=0,ft=z.length;it<ft;it++){const Lt=X(z[it],_t[it],ct);ht(Lt.x,Lt.y,-dt)}for(let it=0,ft=M.length;it<ft;it++){const Lt=M[it];ot=q[it];for(let yt=0,T=Lt.length;yt<T;yt++){const y=X(Lt[yt],ot[yt],ct);ht(y.x,y.y,-dt)}}}const Bt=g+v;for(let Z=0;Z<H;Z++){const A=d?X(_[Z],Ft[Z],Bt):_[Z];S?(R.copy(L.normals[0]).multiplyScalar(A.x),C.copy(L.binormals[0]).multiplyScalar(A.y),I.copy(x[0]).add(R).add(C),ht(I.x,I.y,I.z)):ht(A.x,A.y,0)}for(let Z=1;Z<=u;Z++)for(let A=0;A<H;A++){const dt=d?X(_[A],Ft[A],Bt):_[A];S?(R.copy(L.normals[Z]).multiplyScalar(dt.x),C.copy(L.binormals[Z]).multiplyScalar(dt.y),I.copy(x[Z]).add(R).add(C),ht(I.x,I.y,I.z)):ht(dt.x,dt.y,h/u*Z)}for(let Z=m-1;Z>=0;Z--){const A=Z/m,dt=f*Math.cos(A*Math.PI/2),ct=g*Math.sin(A*Math.PI/2)+v;for(let it=0,ft=z.length;it<ft;it++){const Lt=X(z[it],_t[it],ct);ht(Lt.x,Lt.y,h+dt)}for(let it=0,ft=M.length;it<ft;it++){const Lt=M[it];ot=q[it];for(let yt=0,T=Lt.length;yt<T;yt++){const y=X(Lt[yt],ot[yt],ct);S?ht(y.x,y.y+x[u-1].y,x[u-1].x+dt):ht(y.x,y.y,h+dt)}}}W(),et();function W(){const Z=s.length/3;if(d){let A=0,dt=H*A;for(let ct=0;ct<K;ct++){const it=F[ct];Nt(it[2]+dt,it[1]+dt,it[0]+dt)}A=u+m*2,dt=H*A;for(let ct=0;ct<K;ct++){const it=F[ct];Nt(it[0]+dt,it[1]+dt,it[2]+dt)}}else{for(let A=0;A<K;A++){const dt=F[A];Nt(dt[2],dt[1],dt[0])}for(let A=0;A<K;A++){const dt=F[A];Nt(dt[0]+H*u,dt[1]+H*u,dt[2]+H*u)}}n.addGroup(Z,s.length/3-Z,0)}function et(){const Z=s.length/3;let A=0;Et(z,A),A+=z.length;for(let dt=0,ct=M.length;dt<ct;dt++){const it=M[dt];Et(it,A),A+=it.length}n.addGroup(Z,s.length/3-Z,1)}function Et(Z,A){let dt=Z.length;for(;--dt>=0;){const ct=dt;let it=dt-1;it<0&&(it=Z.length-1);for(let ft=0,Lt=u+m*2;ft<Lt;ft++){const yt=H*ft,T=H*(ft+1),y=A+ct+yt,k=A+it+yt,$=A+it+T,Q=A+ct+T;Ut(y,k,$,Q)}}}function ht(Z,A,dt){c.push(Z),c.push(A),c.push(dt)}function Nt(Z,A,dt){Ht(Z),Ht(A),Ht(dt);const ct=s.length/3,it=w.generateTopUV(n,s,ct-3,ct-2,ct-1);qt(it[0]),qt(it[1]),qt(it[2])}function Ut(Z,A,dt,ct){Ht(Z),Ht(A),Ht(ct),Ht(A),Ht(dt),Ht(ct);const it=s.length/3,ft=w.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);qt(ft[0]),qt(ft[1]),qt(ft[3]),qt(ft[1]),qt(ft[2]),qt(ft[3])}function Ht(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function qt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return W_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hc[s.type]().fromJSON(s)),new Hc(n,t.options)}}const G_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new st(r,a),new st(o,c),new st(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new st(a,1-c),new st(l,1-h),new st(d,1-g),new st(v,1-p)]:[new st(o,1-c),new st(u,1-h),new st(f,1-g),new st(m,1-p)]}};function W_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zn extends je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,d=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],x=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(s+C*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+C*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(C+S,1-x),w.push(l++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const x=u[p][w+1],S=u[p][w],L=u[p+1][w],C=u[p+1][w+1];(p!==0||a>0)&&f.push(x,S,C),(p!==n-1||c<Math.PI)&&f.push(S,L,C)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $e extends je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(v,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vc extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const du={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class j_{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const X_=new j_;class Gc{constructor(t){this.manager=t!==void 0?t:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class q_ extends Gc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=du.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=tr("img");function c(){u(),du.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class fu extends Gc{constructor(t){super(t)}load(t,e,n,s){const r=new We,a=new q_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Wc extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $_ extends Wc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lo=new fe,pu=new P,mu=new P;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const gu=new fe,Vs=new P,uo=new P;class Y_ extends Th{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),uo.copy(n.position),uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uo),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}}class Ah extends Wc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class K_ extends Th{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _u extends Wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new K_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vu(){return performance.now()}const xu=new fe;class Z_{constructor(t,e,n=0,s=1/0){this.ray=new Ic(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(t,e=!0,n=[]){return mc(t,this,n,e),n.sort(yu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mc(t[s],this,n,e);return n.sort(yu),n}}function yu(i,t){return i.distance-t.distance}function mc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)mc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const Q_=1842212,ge=(i,t={})=>new Vc({color:i,roughness:.55,metalness:0,...t});function on(i,t,e=1,n=1,s=1){const r=new gt(new Zn(i,20,14),t);return r.scale.set(e,n,s),r.castShadow=!0,r}class tv{constructor(){this.root=new Jt,this.root.name="cat",this.mBody=ge(Q_,{roughness:.45}),this.mDark=ge(3421247),this.parts=[],this.t=0,this.action=null,this.mode="idle",this.blinkT=2,this.sq=0,this.sqV=0,this.happyEyes=0,this.build()}build(){const t=this.root;this.body=new Jt,t.add(this.body);const e=on(.42,this.mBody,1,1.25,.9);e.position.y=1,this.body.add(e);const n=new Zn(.43,24,16,Math.PI/2-Math.PI*.32,Math.PI*.64,Math.PI*.38,Math.PI*.5),s=new gt(n,ge(16448250,{side:Ze}));s.scale.set(1.02,1.27,.93),s.position.y=1,this.body.add(s);const r=on(.1,ge(15921906),1,1.3,.5);r.position.set(0,1.36,.33),this.body.add(r),this.head=new Jt,this.head.position.y=1.72,this.body.add(this.head);const a=on(.42,this.mBody,1.12,.96,1);this.head.add(a);const o=on(.17,this.mDark,1.35,.85,.8);o.position.set(0,-.12,.31),this.head.add(o);const c=on(.045,ge(16748456),1.3,.8,1);c.position.set(0,-.06,.44),this.head.add(c);const l=new un({color:657934});for(const x of[-1,1]){const S=new gt(new $e(.035,.008,6,12,Math.PI),l);S.position.set(x*.034,-.13,.43),S.rotation.z=Math.PI,this.head.add(S)}this.eyes=[];for(const x of[-1,1]){const S=new Jt;S.position.set(x*.17,.03,.33),S.rotation.y=x*.35;const L=on(.1,ge(13164618,{emissive:3820032,roughness:.2}),1,1.1,.55),C=on(.05,new un({color:328965}),.6,1.5,.5);C.position.z=.04;const R=on(.022,new un({color:16777215}));R.position.set(.03,.045,.07),S.add(L,C,R),this.head.add(S),this.eyes.push(S)}this.ears=[];for(const x of[-1,1]){const S=new Jt;S.position.set(x*.26,.3,0),S.rotation.z=-x*.35;const L=new gt(new As(.15,.32,16),this.mBody);L.position.y=.12,L.scale.z=.6,L.castShadow=!0;const C=new gt(new As(.09,.22,12),ge(16752565));C.position.set(0,.1,.05),C.scale.z=.4,S.add(L,C),this.head.add(S),this.ears.push(S)}const u=new _h({color:14540253});for(const x of[-1,1])for(let S=0;S<3;S++){const L=new je().setFromPoints([new P(x*.15,-.1+S*.03,.4),new P(x*.48,-.06+S*.07-.05,.3)]);this.head.add(new d_(L,u))}this.hatSlot=new Jt,this.hatSlot.position.y=.33,this.head.add(this.hatSlot),this.neckSlot=new Jt,this.neckSlot.position.y=1.42,this.body.add(this.neckSlot),this.arms=[];for(const x of[-1,1]){const S=new Jt;S.position.set(x*.36,1.25,.08);const L=new gt(new zc(.085,.3,6,12),this.mBody);L.position.y=-.2,L.castShadow=!0;const C=on(.1,ge(16053492),1,.85,1);C.position.y=-.4,S.add(L,C),S.rotation.z=x*.25,S.userData.side=x,this.body.add(S),this.arms.push(S)}this.tools={};const h=new Jt,d=new gt(new Ce(.04,.3,.012),ge(14673646,{metalness:.8,roughness:.2}));d.position.y=-.17;const f=new gt(new xn(.02,.02,.12),ge(7028509));h.add(d,f),h.rotation.x=Math.PI/2,h.position.set(0,-.45,.06);const g=new Jt,v=new gt(new xn(.015,.015,.45),ge(13081179));v.position.y=-.2;const m=new gt(new Zn(.06,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),ge(13081179,{side:Ze}));m.position.y=-.42,g.add(v,m),g.position.set(0,-.42,.04);const p=new gt(new Ce(.16,.2,.02),ge(16775392));p.position.set(0,-.48,.12),p.rotation.x=-.5,this.tools.knife=h,this.tools.ladle=g,this.tools.pad=p;for(const x in this.tools)this.tools[x].visible=!1,this.arms[1].add(this.tools[x]);this.tail=[];let w=new Jt;w.position.set(0,.75,-.32),w.rotation.x=-.9,this.body.add(w);for(let x=0;x<8;x++){const S=new Jt;S.position.y=x===0?0:.11;const L=new gt(new Zn(.065-x*.003,12,8),this.mBody);L.scale.y=1.6,L.castShadow=!0,S.add(L),w.add(S),this.tail.push(S),w=S}this.root.traverse(x=>{x.isMesh&&(x.userData.cat=!0)})}holding(t){for(const e in this.tools)this.tools[e].visible=e===t}wear({hat:t,neck:e}){if(this.hatSlot.clear(),this.neckSlot.clear(),t==="hat_chef"){const n=new gt(new xn(.26,.28,.16,24),ge(16777215));n.position.y=.02;const s=new Jt;[[0,.22,0,.24],[-.14,.18,0,.17],[.14,.18,0,.17],[0,.18,.12,.17],[0,.18,-.12,.17]].forEach(([r,a,o,c])=>{const l=on(c,ge(16777215));l.position.set(r,a,o),s.add(l)}),this.hatSlot.add(n,s),this.hatSlot.rotation.z=.12}else if(t==="hat_hachimaki"){const n=new gt(new $e(.43,.04,8,32),ge(16777215));n.rotation.x=Math.PI/2,n.position.y=-.18,n.scale.set(1.08,1,1);const s=on(.06,ge(14100029),1,1,.3);s.position.set(0,-.18,.45);const r=on(.06,ge(16777215));r.position.set(.1,-.15,-.44),this.hatSlot.add(n,s,r),this.hatSlot.rotation.z=0}else if(t==="hat_straw"){const n=new gt(new xn(.6,.62,.03,32),ge(15255664)),s=new gt(new xn(.26,.3,.2,24),ge(15255664));s.position.y=.1;const r=new gt(new xn(.305,.305,.05,24),ge(14100029));r.position.y=.04,this.hatSlot.add(n,s,r),this.hatSlot.rotation.z=-.1}if(e==="neck_bell"){const n=new gt(new $e(.24,.03,8,32),ge(14100029));n.rotation.x=Math.PI/2;const s=on(.06,ge(16106818,{metalness:.7,roughness:.25}));s.position.set(0,-.07,.25),this.neckSlot.add(n,s)}else if(e==="neck_scarf"){const n=new gt(new $e(.25,.07,10,32),ge(3832789));n.rotation.x=Math.PI/2;const s=new gt(new Ce(.1,.25,.04),ge(3832789));s.position.set(.12,-.15,.25),s.rotation.z=.2,this.neckSlot.add(n,s)}}play(t,e=.35){this.action={name:t,t:0,dur:e},(t==="chop"||t==="press")&&this.squash(-.1)}squash(t){this.sqV+=t*22}setMode(t){this.mode=t}happy(){this.play("happy",1),this.happyEyes=1.2}update(t){this.t+=t;const e=this.t;this.sqV+=(-170*this.sq-11*this.sqV)*t,this.sq+=this.sqV*t;let n=this.sq;this.body.position.y=0,this.head.rotation.set(Math.sin(e*.7)*.04,Math.sin(e*.5)*.08,Math.sin(e*.9)*.05),this.tail.forEach((l,u)=>{l.rotation.z=Math.sin(e*1.8-u*.5)*.18,l.rotation.x=.12+Math.sin(e*1.1-u*.4)*.05}),this.ears.forEach((l,u)=>{l.rotation.x=Math.max(0,Math.sin(e*3+u*7)-.96)*6}),this.blinkT-=t;let s=1;this.blinkT<0&&(s=.1,this.blinkT<-.12&&(this.blinkT=2+Math.random()*3)),this.happyEyes>0&&(this.happyEyes-=t,s=.15),this.eyes.forEach(l=>l.scale.y=s);const[r,a]=this.arms;r.rotation.set(0,0,-.25+Math.sin(e*2.2)*.03),a.rotation.set(0,0,.25-Math.sin(e*2.2)*.03),this.mode==="stir"&&(a.rotation.x=-1+Math.sin(e*8)*.25,a.rotation.z=.35+Math.cos(e*8)*.25),this.mode==="talk"&&(this.head.rotation.x+=Math.sin(e*14)*.03),this.mode==="pet"&&(this.head.rotation.z=Math.sin(e*2)*.15+.15,this.eyes.forEach(l=>l.scale.y=.15));const o=this.action;if(o){o.t+=t;const l=Math.min(o.t/o.dur,1),u=Math.sin(l*Math.PI);switch(o.name){case"chop":a.rotation.x=-1.4+u*.9,this.body.position.y=-u*.02;break;case"press":r.rotation.x=a.rotation.x=-1.1,r.rotation.z=-.25-u*.5+.6,a.rotation.z=.25+u*.5-.6,this.body.position.y=-u*.03;break;case"wrap":r.rotation.x=a.rotation.x=-1-u*.4;break;case"pour":a.rotation.x=-1.2,a.rotation.y=-u*.6;break;case"wave":a.rotation.z=2.4+Math.sin(o.t*14)*.3;break;case"happy":{const h=Math.abs(Math.sin(l*Math.PI*2));this.body.position.y=h*.18,n+=(h-.35)*.22}r.rotation.z=-2.3,a.rotation.z=2.3;break;case"sad":this.head.rotation.x=.3*u,this.ears.forEach(h=>h.rotation.x=-.6*u);break}l>=1&&(this.action=null)}const c=1+Math.sin(e*2.2)*.012;this.body.scale.set(1-n*.5,c*(1+n),1-n*.5)}}const ea=[{id:"home",name:"小黑食堂",jp:"食堂{しょくどう}",icon:"🏠",intro:"由飯糰開始，練好基本功。"},{id:"izakaya",name:"居酒屋・夜間營業",jp:"居酒屋{いざかや}",icon:"🏮",intro:"六款新料理，練習加單同沽清應對。"},{id:"cafe",name:"喫茶店・午後小休",jp:"喫茶店{きっさてん}",icon:"☕",intro:"六款餐飲，記住熟客嘅冷熱同甜度喜好。"},{id:"dark",name:"暗黑食堂・主廚，叮好喇！",jp:"裏{うら}メニュー",icon:"🌙",intro:"七款捷徑料理，擺盤、改名，再揭開後廚秘密。"}],ev=[["edamame_raw","枝豆{えだまめ}","生枝豆","🫛","sphere",7974216],["abura","油{あぶら}","食用油","🫗","cyl",15121748],["katakuriko","片栗粉{かたくりこ}","粟粉／薯仔澱粉","🥣","sphere",16775920],["komugiko","小麦粉{こむぎこ}","麵粉","🥣","sphere",15656401],["kyabetsu","キャベツ","椰菜","🥬","sphere",9812329],["sosu","ソース","日式炒麵／大阪燒醬","🫙","cyl",6501155],["coffee_powder","インスタントコーヒー","即溶咖啡粉","☕","cyl",5781287],["koucha_leaf","紅茶{こうちゃ}","紅茶茶葉","🍂","sphere",7421995],["matcha_powder","抹茶{まっちゃ}","抹茶粉","🍵","sphere",7512395],["milk","牛乳{ぎゅうにゅう}","牛奶","🥛","cyl",16775400],["pan_bread","食{しょく}パン","厚切方包","🍞","box",15516554],["butter","バター","牛油","🧈","box",16177017]],_n=i=>({type:"pick",need:i,decoys:["nori","miso"],jp:"材料{ざいりょう}を 選{えら}んで",yue:"揀啱材料",tip:"聽日文，再揀材料。"}),Ee=(i,t,e,n,s)=>({type:i,verb:t,jp:e,yue:n,tip:s,anim:i==="timing"?"wrap":"stir",turns:2,rounds:2,zone:i==="hold"?[.45,.7]:.24}),Rh=[{id:"edamame",chapter:"izakaya",jp:"枝豆{えだまめ}",yue:"鹽水枝豆",emoji:"🫛",price:180,station:"pot",serves:"2 人",time:"10 分鐘",ingredients:[["edamame_raw","枝豆 200g"],["shio","鹽 1 茶匙"],["mizu","水 1 公升"]],howto:["枝豆洗淨，用少少鹽搓一搓。","水煮滾，落枝豆煮約 4–5 分鐘，至豆仁熟透。","瀝乾，趁熱拌少少鹽；只食豆仁，豆莢唔食。"],steps:[_n(["edamame_raw","shio","mizu"]),Ee("hold","yuderu","枝豆{えだまめ}を ゆでて","烚熟枝豆","長按加熱，綠色位放手。")]},{id:"yakitori",chapter:"izakaya",jp:"焼{や}き鳥{とり}",yue:"焼鳥",emoji:"🍢",price:320,station:"pan",serves:"4 串",time:"20 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["negi","大蔥 1 條"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"]],howto:["雞肉切小件，大蔥切段，交替串上竹籤。","豉油同味醂混合成醬汁。","用平底鑊煎串燒，不時反面，最後掃醬；雞肉中心須達 75°C 並維持至少 1 分鐘。"],steps:[_n(["toriniku","negi","shoyu"]),Ee("timing","noseru","串{くし}に のせて","將雞肉同蔥串好","撳準綠色位。"),Ee("hold","yaku","鶏肉{とりにく}を 焼{や}いて","燒熟雞肉","控制火候，唔好燒焦。")]},{id:"karaage",chapter:"izakaya",jp:"唐揚{からあ}げ",yue:"唐揚炸雞",emoji:"🍗",price:360,station:"pan",serves:"2 人",time:"25 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["shoyu","豉油 1 湯匙"],["ninniku","蒜蓉 1 茶匙"],["katakuriko","澱粉 3 湯匙"],["abura","炸油 適量"]],howto:["雞肉切件，用豉油同蒜蓉醃 10 分鐘。","逐件薄薄裹上澱粉。","以約 170°C 油炸至金黃；雞肉中心須達 75°C 並維持至少 1 分鐘，瀝油上碟。"],steps:[_n(["toriniku","katakuriko","abura"]),Ee("stir","mazeru","衣{ころも}を つけて","拌上薄薄粉衣","轉圈拌勻。"),Ee("hold","ageru","鶏肉{とりにく}を 揚{あ}げて","炸熟雞肉","控制油溫。")]},{id:"agedashi",chapter:"izakaya",jp:"揚{あ}げ出{だ}し豆腐{どうふ}",yue:"揚出豆腐",emoji:"⬜",price:280,station:"pan",serves:"2 人",time:"20 分鐘",ingredients:[["tofu","硬豆腐 1 盒"],["katakuriko","澱粉 2 湯匙"],["abura","油 適量"],["dashi","高湯 100ml"],["shoyu","豉油 1 茶匙"],["negi","蔥花 少許"]],howto:["豆腐瀝乾抹乾，切大件，薄薄裹粉。","熱油中小火煎至各面金黃。","高湯加豉油煮熱，沿碗邊淋入，再放蔥花。"],steps:[_n(["tofu","katakuriko","dashi"]),Ee("hold","ageru","豆腐{とうふ}を 揚{あ}げて","煎至金黃","綠色位放手。"),Ee("timing","noseru","ねぎを のせて","灑上蔥花","最後先放配料。")]},{id:"okonomiyaki",chapter:"izakaya",jp:"お好{この}み焼{や}き",yue:"大阪燒",emoji:"🥞",price:380,station:"pan",serves:"1 塊",time:"20 分鐘",ingredients:[["kyabetsu","椰菜絲 150g"],["komugiko","麵粉 50g"],["tamago","雞蛋 1 隻"],["mizu","水 50ml"],["sosu","大阪燒醬 1 湯匙"],["abura","油 1 茶匙"]],howto:["麵粉、蛋同水拌勻，再拌入椰菜絲。","平底鑊落油，倒入麵糊成厚圓餅，中小火煎約 5 分鐘。","小心反面，冚蓋再煎至中心熟透，上碟搽醬。"],steps:[_n(["kyabetsu","komugiko","tamago"]),Ee("stir","mazeru","生地{きじ}を 混{ま}ぜて","拌勻麵糊","轉圈攪勻。"),Ee("timing","yaku","裏返{うらがえ}して","反面煎熟","撳準時機反面！")]},{id:"yakisoba",chapter:"izakaya",jp:"焼{や}きそば",yue:"日式炒麵",emoji:"🍝",price:340,station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["men","熟炒麵 1 份"],["kyabetsu","椰菜絲 100g"],["tamanegi","洋蔥 1/4 個"],["sosu","炒麵醬 1–2 湯匙"],["abura","油 1 茶匙"]],howto:["洋蔥切絲，椰菜切細。","鑊落油炒軟蔬菜，加熟麵同一湯匙水炒散。","加醬汁炒勻至熱透。"],steps:[_n(["men","kyabetsu","sosu"]),Ee("stir","mazeru","麺{めん}を 炒{いた}めて","炒散麵條","轉圈翻炒。"),Ee("timing","noseru","お皿{さら}に のせて","上碟","撳準出餐！")]},{id:"instant_coffee",chapter:"cafe",jp:"インスタントコーヒー",yue:"精品即溶咖啡",emoji:"☕",price:260,station:"board",serves:"1 杯",time:"3 分鐘",ingredients:[["coffee_powder","精品即溶咖啡粉 2g"],["mizu","熱水 150ml"]],howto:["按咖啡粉包裝建議份量放入杯。","加入熱水攪溶，按喜好調整濃淡。","冷飲版先用少量熱水溶粉，再補冷水同冰；加水時計埋融冰份量。"],steps:[_n(["coffee_powder","mizu"]),Ee("stir","tokasu","コーヒーを 溶{と}かして","攪溶咖啡粉","轉圈攪至均勻。")]},{id:"black_tea",chapter:"cafe",jp:"紅茶{こうちゃ}",yue:"紅茶",emoji:"🫖",price:220,station:"pot",serves:"1 杯",time:"5 分鐘",ingredients:[["koucha_leaf","紅茶葉 2g"],["mizu","熱水 200ml"]],howto:["暖杯後放入茶葉。","沖入熱水，按茶葉包裝建議浸泡約 3 分鐘，再隔走茶葉。","冷飲版放涼再加冰，調整水量避免過淡。"],steps:[_n(["koucha_leaf","mizu"]),Ee("hold","ireru","紅茶{こうちゃ}を 入{い}れて","沖泡紅茶","掌握浸泡時間。")]},{id:"matcha_latte",chapter:"cafe",jp:"抹茶{まっちゃ}ラテ",yue:"抹茶拿鐵",emoji:"🍵",price:320,station:"board",serves:"1 杯",time:"5 分鐘",ingredients:[["matcha_powder","抹茶粉 2g"],["mizu","熱水 30ml"],["milk","牛奶 150ml"],["satou","糖 0–1 茶匙，按客人要求"]],howto:["抹茶粉過篩，用熱水攪成冇粉粒嘅茶液。","按冷熱要求加入暖奶，或凍奶同冰。","按客人要求加糖，攪勻。"],steps:[_n(["matcha_powder","milk","mizu"]),Ee("stir","mazeru","抹茶{まっちゃ}を 混{ま}ぜて","攪散抹茶粉","轉圈攪滑。"),Ee("timing","ireru","牛乳{ぎゅうにゅう}を 入{い}れて","倒入牛奶","慢慢倒奶。")]},{id:"pudding",chapter:"cafe",jp:"プリン",yue:"雞蛋布甸",emoji:"🍮",price:280,station:"pot",serves:"2 杯",time:"25 分鐘＋冷藏",ingredients:[["tamago","雞蛋 1 隻"],["milk","牛奶 150ml"],["satou","糖 20g"]],howto:["蛋同糖輕輕拌勻，加入微暖牛奶，過篩入耐熱杯。","用蒸鍋小火蒸約 12–15 分鐘，至中心凝固；蛋液須充分煮熟。","放涼後冷藏至少 2 小時。"],steps:[_n(["tamago","milk","satou"]),Ee("stir","mazeru","卵液{らんえき}を 混{ま}ぜて","輕輕攪勻蛋液","唔好打入太多氣泡。"),Ee("hold","musu","プリンを 蒸{む}して","慢火蒸布甸","小火先滑！")]},{id:"thick_toast",chapter:"cafe",jp:"厚切{あつぎ}りトースト",yue:"牛油厚多士",emoji:"🍞",price:240,station:"pan",serves:"1 份",time:"8 分鐘",ingredients:[["pan_bread","厚切方包 1 片"],["butter","牛油 10g"]],howto:["方包表面劃淺格，唔好切穿。","搽牛油，放多士爐烤至表面金黃；亦可平底鑊小火煎兩面。","趁熱上碟。"],steps:[_n(["pan_bread","butter"]),Ee("timing","kiru","パンに 切{き}り込{こ}みを 入{い}れて","喺方包劃淺格","輕力劃，唔好切穿。"),Ee("hold","yaku","パンを 焼{や}いて","烘至金黃","控制火候。")]},{id:"pancakes",chapter:"cafe",jp:"ホットケーキ",yue:"熱香餅",emoji:"🥞",price:300,station:"pan",serves:"2 塊",time:"15 分鐘",ingredients:[["komugiko","自發粉 100g（此處取代普通麵粉）"],["tamago","雞蛋 1 隻"],["milk","牛奶 80ml"],["satou","糖 15g"],["butter","牛油 5g"]],howto:["蛋、奶同糖拌勻，加自發粉輕拌至冇乾粉。","平底鑊薄搽牛油，小火倒入麵糊。","表面冒泡、邊緣凝固時反面，再煎至中心熟透。"],steps:[_n(["komugiko","tamago","milk"]),Ee("stir","mazeru","生地{きじ}を 混{ま}ぜて","輕拌麵糊","唔好攪過頭。"),Ee("timing","yaku","裏返{うらがえ}して","冒泡就反面","等啱時機！")]}].map(i=>({...i,dish:i.id,unlock:{}})),nv=[["yaku","焼{や}く","燒、烘","verb"],["ageru","揚{あ}げる","炸","verb"],["ireru","入{い}れる","倒入、沖泡","verb"],["musu","蒸{む}す","蒸","verb"],["tsuika","追加{ついか}","加單","phrase"],["urikire","売{う}り切{き}れ","沽清","phrase"],["hot","温{あたた}かい","熱飲","phrase"],["iced","冷{つめ}たい","凍飲","phrase"],["less_sugar","甘{あま}さ控{ひか}えめ","少甜","phrase"],["no_sugar","砂糖{さとう}なし","無糖","phrase"]],ho=[{id:"reader",name:"讀書常客",request:"hot",jp:"いつもの、温{あたた}かいので お願{ねが}いします。",yue:"同平時一樣，要熱嘅。"},{id:"walker",name:"散步常客",request:"iced",jp:"冷{つめ}たいので お願{ねが}いします。",yue:"唔該要凍飲。"},{id:"artist",name:"畫畫常客",request:"less_sugar",jp:"甘{あま}さ控{ひか}えめで お願{ねが}いします。",yue:"唔該少甜。"}],iv=[["meal_patty","調理済{ちょうりず}みハンバーグ","預製熟肉餅","🥩","box",8868663],["mash_potato","マッシュポテト","即食薯蓉","🥔","sphere",15588263],["frozen_veg","冷凍野菜{れいとうやさい}","冷凍蔬菜","🥦","sphere",7972940],["beef_pouch","レトルトビーフシチュー","預製燉牛肉包","🥘","box",10113846],["herb","ハーブ","裝飾香草","🌿","sphere",6068286],["bottled_tea","ペットボトルの緑茶{りょくちゃ}","樽裝綠茶","🍵","cyl",9743971],["ice","氷{こおり}","冰塊","🧊","box",12576499],["caramel_syrup","キャラメルシロップ","焦糖糖漿","🍯","cyl",12286268],["fruit_syrup","フルーツシロップ","果味糖漿","🍓","cyl",14904167],["soda_water","炭酸水{たんさんすい}","梳打水","🫧","cyl",12970223],["fruit_slice","果物{くだもの}のスライス","裝飾水果片","🍋","sphere",15979606],["stock_powder","鶏{とり}ガラスープの素{もと}","雞湯粉","🥣","cyl",14334835],["stock_concentrate","濃縮{のうしゅく}スープ","濃縮高湯","🫙","cyl",10779196],["msg","うま味調味料{みちょうみりょう}","味精 MSG","🧂","cyl",16183009],["oyster_sauce","オイスターソース","蠔油","🫗","cyl",5451809]],sv=[["atatameru","温{あたた}める","翻熱","verb"],["moritsukeru","盛{も}り付{つ}ける","擺盤","verb"],["nakami","中身{なかみ}","真正內容","phrase"]],Ai={ding:{jp:"冷凍{れいとう}を 三{みっ}つ チンして",yue:"冷凍食品叮三份"},beef:{jp:"レトルトを 温{あたた}めて",yue:"翻熱料理包"},tea:{jp:"お茶{ちゃ}に 牛乳{ぎゅうにゅう}を 入{い}れて",yue:"茶加奶"},coffee:{jp:"インスタントに シロップを 入{い}れて",yue:"即溶咖啡加糖漿"},soda:{jp:"シロップを 炭酸{たんさん}で 割{わ}って",yue:"糖漿兌梳打"},soup:{jp:"スープの素{もと}を お湯{ゆ}で 溶{と}いて",yue:"湯粉用熱水沖"},rice:{jp:"うま味{み}調味料{ちょうみりょう}を 少{すこ}しだけ",yue:"只落少少味精"}},Ch={cough:{jp:"チンの 音{おと}を ごまかして！",yue:"叮一刻，撳掣咳嗽蓋聲",btn:"🤧 咳嗽",ok:"客人：「風邪ですか？」",bad:"客人聽到「チン♪」，頭頂出咗個「？」"},bottle:{jp:"ペットボトルを 隠{かく}して！",yue:"客人望過嚟前收起膠樽",btn:"🫙 收埋膠樽",ok:"膠樽已經藏入櫃底",bad:"膠樽企喺枱面，客人：「…ペットボトル？」"},grinder:{jp:"ミルの 音{おと}で ごまかして！",yue:"撕包聲太大，開磨豆機蓋住",btn:"⚙️ 開磨豆機",ok:"磨豆機嗡嗡聲——其實入面係空嘅",bad:"客人聽到撕即溶包嘅「嘶」一聲"},glass:{jp:"果物{くだもの}の 側{がわ}を 向{む}けて！",yue:"轉杯，令唯一嗰片生果對住客人",btn:"🍋 轉杯",ok:"生果片企得好威風",bad:"客人只見到糖漿同冰，冇生果"},steam:{jp:"湯気{ゆげ}を 出{だ}して！",yue:"空煲都要冒煙，扮緊熬湯",btn:"♨️ 出蒸氣",ok:"好大一煲「老火湯」蒸氣",bad:"煲停咗冒煙，客人：「火、消{き}えてますよ？」"},hand:{jp:"調味料{ちょうみりょう}は 控{ひか}えめに！",yue:"撥開小黑伸去攞雞粉嘅手",btn:"✋ 撥開手",ok:"小黑嘅手被擋返出嚟",bad:"客人望見小黑隻手撈緊雞粉"}};Object.values(Ch).map(i=>i.jp);const Ri=(i,t,e)=>({type:"pick",need:i,decoys:t,jp:e.jp,yue:e.yue,tip:"聽清楚真正用咩材料。"}),Ci=i=>({type:"cover",kind:i,weight:.5,...Ch[i]}),Mu={type:"microwave",verb:"atatameru",jp:"電子{でんし}レンジで 温{あたた}めて",yue:"放入微波爐翻熱",tip:"遊戲倒數係縮時演出；現實請跟包裝翻熱指示。"},Gs={type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"よく 混{ま}ぜて",yue:"攪勻就出得",tip:"轉圈攪勻。"},gs=[{id:"dark_ding",number:"01",jp:"シェフおまかせ 三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"主廚精選三拼大餐",emoji:"🍽️",price:480,station:"board",time:"縮時翻熱",ingredients:[["meal_patty","預製熟肉餅 1 份"],["mash_potato","即食薯蓉 1 份"],["frozen_veg","冷凍蔬菜 1 份"]],howto:["按各款包裝指示，用適合微波爐嘅容器分別翻熱至熱透。","肉餅、薯蓉、蔬菜分區擺好，加幾點醬汁。"],steps:[Ri(["meal_patty","mash_potato","frozen_veg"],["stock_powder","herb"],Ai.ding),Mu,Ci("cough")],names:{honest:{jp:"冷凍{れいとう}・レトルトの 盛{も}り合{あ}わせ",yue:"冷凍同預製拼盤"},mild:{jp:"三種{さんしゅ}の 盛{も}り合{あ}わせ",yue:"三拼盤"}},truth:"肉餅、薯蓉、蔬菜預先煮好，出餐前翻熱。",gag:"客人：「層次好豐富！」後廚：「叮——！」",shortcut:"預製餐",lesson:"おまかせ = 交畀師傅決定；擺盤可以花心思，製作來源照樣講清楚。"},{id:"dark_beef",number:"02",jp:"八時間{はちじかん}煮込{にこ}んだ 特製{とくせい}ビーフシチュー",yue:"八小時慢燉特製牛肉",emoji:"🥘",price:520,station:"board",time:"縮時翻熱",ingredients:[["beef_pouch","預製燉牛肉包 1 包"],["herb","裝飾香草 1 條"]],howto:["按料理包指示翻熱；包裝未標明可微波，就先倒入適用容器。","倒入小砂鍋，放上香草。三分鐘係關卡名，實際時間跟包裝。"],steps:[Ri(["beef_pouch","herb"],["mash_potato","msg"],Ai.beef),Mu,Ci("cough")],names:{honest:{jp:"レトルトの ビーフシチュー",yue:"料理包燉牛肉"},mild:{jp:"特製{とくせい}ビーフシチュー",yue:"特製燉牛肉"}},truth:"牛肉已經喺料理包入面燉好，小黑只負責翻熱同換鍋。",gag:"「慢燉八小時」招牌跌低，後面係一疊料理包。",shortcut:"料理包",lesson:"煮込{にこ}む = 燉；レトルト = 預製料理包；換咗砂鍋，唔代表由零開始燉。"},{id:"dark_milk_tea",number:"07",jp:"職人{しょくにん}仕立{じた}ての 緑茶{りょくちゃ}ラテ",yue:"職人特調鮮奶綠",emoji:"🥛",price:300,station:"board",time:"1 分鐘",ingredients:[["bottled_tea","樽裝綠茶 1 份"],["milk","牛奶 適量"],["ice","冰塊 適量"]],howto:["透明杯加冰，倒入樽裝綠茶。","加牛奶攪勻，按口味調整比例。"],steps:[Ri(["bottled_tea","milk","ice"],["fruit_syrup","soda_water"],Ai.tea),Gs,Ci("bottle")],names:{honest:{jp:"ペットボトルの 緑茶{りょくちゃ}ラテ",yue:"樽裝綠茶加奶"},mild:{jp:"緑茶{りょくちゃ}ラテ",yue:"綠茶拿鐵"}},truth:"樽裝綠茶加牛奶同冰，冇煲茶，連茶隔都唔使洗。",gag:"客人問茶葉產地，小黑將膠樽慢慢推入櫃底。",shortcut:"瓶裝茶",lesson:"仕立{した}て = 度身製作嘅講法；緑茶 = 綠茶；特調可以係比例調配，未必係現泡茶。"},{id:"dark_coffee",number:"08",jp:"自家製{じかせい}キャラメルの 特製{とくせい}ラテ",yue:"自家製焦糖特製拿鐵",emoji:"☕",price:380,station:"board",time:"2 分鐘",ingredients:[["coffee_powder","即溶咖啡粉 1 份"],["mizu","熱水 少量"],["milk","牛奶 適量"],["ice","冰塊 適量"],["caramel_syrup","焦糖糖漿 少量"]],howto:["即溶咖啡粉用少量熱水溶開。","杯內加冰、牛奶同少量焦糖糖漿，再倒入咖啡。"],steps:[Ri(["coffee_powder","milk","caramel_syrup","ice"],["bottled_tea","fruit_syrup"],Ai.coffee),Gs,Ci("grinder")],names:{honest:{jp:"インスタントの キャラメルラテ",yue:"即溶焦糖拿鐵"},mild:{jp:"特製{とくせい}キャラメルラテ",yue:"特製焦糖拿鐵"}},truth:"即溶粉沖開，加奶、冰同焦糖，靚杯係最大排場。",gag:"製作三十秒，介紹風味講足三分鐘。",shortcut:"即溶粉",lesson:"自家製{じかせい} = 自己店內製作；呢個詞喺菜單好重要，講大話就係問題。"},{id:"dark_soda",number:"09",jp:"季節{きせつ}の フルーツソーダ",yue:"季節鮮果梳打",emoji:"🍹",price:320,station:"board",time:"1 分鐘",ingredients:[["fruit_syrup","果味糖漿 少量"],["soda_water","梳打水 1 份"],["ice","冰塊 適量"],["fruit_slice","水果片 1 片（裝飾）"]],howto:["杯中加冰、果味糖漿同梳打水，輕輕拌勻。","杯邊放一片水果；飲品主體嘅果味來自糖漿。"],steps:[Ri(["fruit_syrup","soda_water","ice","fruit_slice"],["bottled_tea","caramel_syrup"],Ai.soda),Gs,Ci("glass")],names:{honest:{jp:"シロップの ソーダ割{わ}り",yue:"糖漿梳打"},mild:{jp:"フルーツソーダ",yue:"果味梳打"}},truth:"果味主要來自糖漿；真正水果得杯邊裝飾嗰一片。",gag:"全杯唯一鮮果，今日負責企喺杯邊返工。",shortcut:"糖漿",lesson:"季節{きせつ}の = 時令；〜風 = 某種風味；フルーツソーダ唔等於鮮果汁。"},{id:"dark_soup",number:"26",jp:"じっくり 煮出{にだ}した 自家製{じかせい}スープ",yue:"慢火熬製自家湯",emoji:"🥣",price:280,station:"board",time:"1 分鐘",ingredients:[["stock_powder","雞湯粉 按包裝份量"],["stock_concentrate","濃縮高湯 少量，按鹹度調整"],["mizu","熱水 適量"]],howto:["按產品標示用熱水稀釋湯底，先試味。","兩款湯底唔好各落足一份，以免過鹹；唔夠味先逐少調整。"],steps:[Ri(["stock_powder","stock_concentrate","mizu"],["msg","oyster_sauce"],Ai.soup),Gs,Ci("steam")],names:{honest:{jp:"粉末{ふんまつ}スープ",yue:"粉末湯"},mild:{jp:"自家製{じかせい}スープ",yue:"自家湯"}},truth:"湯粉、濃縮高湯同熱水沖成，冇喺店內熬八小時。",gag:"客人問熬咗幾耐，小黑望住秒錶，扮睇唔到。",shortcut:"濃縮高湯",lesson:"じっくり = 慢慢、用心；濃縮 = concentrated；稀釋比例同鹹度比落得多更重要。"},{id:"dark_rice",number:"25",jp:"黄金{おうごん}の 特製{とくせい}チャーハン",yue:"黃金特製炒飯",emoji:"🍚",price:360,station:"pan",time:"5 分鐘",ingredients:[["gohan","熟飯 1 碗"],["tamago","雞蛋 1 隻"],["msg","味精 少量"],["stock_powder","雞粉 少量"],["oyster_sauce","蠔油 少量"],["abura","油 適量"]],howto:["鑊落油炒熟雞蛋，加熟飯炒散至熱透。","味精、雞粉、蠔油會疊加味道；先少量試味，再決定使唔使補。"],steps:[Ri(["gohan","tamago","msg","stock_powder","oyster_sauce"],["stock_concentrate","herb"],Ai.rice),Gs,Ci("hand"),{type:"season",weight:3,jp:"味{あじ}を 調{ととの}えて",yue:"主廚，仲差少少？試味先！",tip:"呢個係遊戲調味格數，唔係現實用量。"}],names:{honest:{jp:"うま味{み}調味料{ちょうみりょう}の チャーハン",yue:"味精炒飯"},mild:{jp:"特製{とくせい}チャーハン",yue:"特製炒飯"}},truth:"鮮味靠調味配搭；亂落大量調味，會蓋過蛋香同飯香。",gag:"「仲差少少！」大廚伸手再攞雞粉，客人即刻遞杯水。",shortcut:"増鮮調味",lesson:"うま味 = 鮮味。MSG 本身唔係笑柄；唔試味、亂落先係。"}].map(i=>({...i,chapter:"dark",dish:i.id,serves:"1 份",unlock:{}})),rv=[{id:"plain",label:"家常餐具",icon:"🍽️",score:.55},{id:"bistro",label:"小館靚碟／靚杯",icon:"✨",score:.85},{id:"grand",label:"超大留白餐具",icon:"👑",score:1}],av=[{id:"none",label:"乾淨俐落",icon:"🍽️",score:.7},{id:"accent",label:"一點裝飾",icon:"🌿",score:1},{id:"tower",label:"裝飾堆成山",icon:"⛰️",score:.4}],fa={honest:{label:"如實介紹",hype:15,mult:1,ask:0},mild:{label:"小誇張",hype:55,mult:1.5,ask:.5},grand:{label:"極度浮誇",hype:100,mult:2.5,ask:1}},Ph=(i,t)=>t==="grand"?{jp:i.jp,yue:i.yue}:i.names[t];function ov(i,t,e,n){return{taste:Math.round(i*100),look:Math.round((t.score+e.score)*50),hype:fa[n].hype}}const cv=[{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,hi:!0,jp:"すみません、 {dish}を お願{ねが}いします",yue:"唔好意思，我要{dishYue}"},{lv:2,hi:!0,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],Gr={honest:{jp:"すみません、 実{じつ}は 温{あたた}めただけです",yue:"唔好意思，其實只係翻熱"},bluff:{jp:"はい、 全部{ぜんぶ} 手作{てづく}りです！",yue:"係，全部自己整！"},deflect:{jp:"今日{きょう}は いい 天気{てんき}ですね！",yue:"今日天氣好好呀！"}},fo={forgive:[{lv:0,hi:!0,jp:"そうですか。 おいしいです",yue:"係咩。都好食"},{lv:1,hi:!0,jp:"正直{しょうじき}ですね。 でも おいしいから いいです",yue:"你好老實。不過好食就得喇"},{lv:2,hi:!0,jp:"冷凍{れいとう}だとしても、 おいしければ 気{き}にしません",yue:"就算係急凍，好食我都唔介意"}],believe:[{lv:0,hi:!0,jp:"へえ、 すごい！",yue:"嘩，好叻！"},{lv:1,hi:!0,jp:"さすが プロですね！",yue:"真係專業！"},{lv:2,hi:!0,jp:"やっぱり 職人{しょくにん}の 技{わざ}は 違{ちが}いますね",yue:"果然師傅手藝唔同"}],expose:[{lv:0,hi:!0,jp:"あれ？ これ、 レトルト？",yue:"咦？呢個係料理包？"},{lv:1,hi:!0,jp:"えっ、 これ、 レトルトじゃないですか！",yue:"咩話，呢個唔係料理包咩！"},{lv:2,hi:!0,jp:"…これ、 市販{しはん}の 商品{しょうひん}ですよね？",yue:"…呢個係街外賣嘅現成貨，啱唔啱？"}]},Nn={gohan:{jp:"ご飯{はん}",yue:"白飯",emoji:"🍚",cat:"ing",m:{s:"sphere",c:16645621,sc:[.32,.2,.32]}},shio:{jp:"塩{しお}",yue:"鹽",emoji:"🧂",cat:"ing",m:{s:"cyl",c:15658734,sc:[.08,.2,.08]}},nori:{jp:"海苔{のり}",yue:"紫菜",emoji:"🟩",cat:"ing",m:{s:"box",c:2044706,sc:[.3,.01,.2]}},umeboshi:{jp:"梅干{うめぼ}し",yue:"酸梅",emoji:"🔴",cat:"ing",m:{s:"sphere",c:13117500,sc:[.07,.06,.07]}},sake_fish:{jp:"鮭{さけ}",yue:"三文魚",emoji:"🐟",cat:"ing",m:{s:"box",c:16747622,sc:[.2,.06,.12]}},mizu:{jp:"水{みず}",yue:"水",emoji:"💧",cat:"ing",m:{s:"cyl",c:9425919,sc:[.1,.22,.1]}},dashi:{jp:"だし",yue:"日式高湯",emoji:"🥣",cat:"ing",m:{s:"cyl",c:14263361,sc:[.12,.12,.12]}},tofu:{jp:"豆腐{とうふ}",yue:"豆腐",emoji:"⬜",cat:"ing",m:{s:"box",c:16776168,sc:[.24,.12,.16]}},wakame:{jp:"わかめ",yue:"海帶芽",emoji:"🌿",cat:"ing",m:{s:"sphere",c:3042106,sc:[.12,.04,.12]}},negi:{jp:"ねぎ",yue:"蔥",emoji:"🧅",cat:"ing",m:{s:"cyl",c:7127626,sc:[.03,.35,.03],rz:1.57}},miso:{jp:"味噌{みそ}",yue:"麵豉醬",emoji:"🟫",cat:"ing",m:{s:"cyl",c:11037490,sc:[.14,.1,.14]}},toriniku:{jp:"鶏肉{とりにく}",yue:"雞肉",emoji:"🍗",cat:"ing",m:{s:"box",c:15911328,sc:[.22,.08,.16]}},tamago:{jp:"卵{たまご}",yue:"雞蛋",emoji:"🥚",cat:"ing",m:{s:"sphere",c:16774108,sc:[.08,.1,.08]}},tamanegi:{jp:"玉{たま}ねぎ",yue:"洋蔥",emoji:"🧅",cat:"ing",m:{s:"sphere",c:15253626,sc:[.12,.11,.12]}},shoyu:{jp:"醤油{しょうゆ}",yue:"豉油",emoji:"🫗",cat:"ing",m:{s:"cyl",c:3807756,sc:[.06,.24,.06]}},mirin:{jp:"みりん",yue:"味醂（甜米酒）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:16115368,sc:[.06,.24,.06]}},satou:{jp:"砂糖{さとう}",yue:"砂糖",emoji:"🍬",cat:"ing",m:{s:"box",c:16777215,sc:[.1,.1,.1]}},men:{jp:"麺{めん}",yue:"麵",emoji:"🍜",cat:"ing",m:{s:"sphere",c:15980410,sc:[.22,.08,.22]}},chashu:{jp:"チャーシュー",yue:"叉燒（日式）",emoji:"🥩",cat:"ing",m:{s:"cyl",c:11887930,sc:[.14,.03,.14]}},moyashi:{jp:"もやし",yue:"芽菜",emoji:"🌱",cat:"ing",m:{s:"sphere",c:16249808,sc:[.12,.05,.12]}},ninniku:{jp:"にんにく",yue:"蒜頭",emoji:"🧄",cat:"ing",m:{s:"sphere",c:15986400,sc:[.07,.07,.07]}},sake_drink:{jp:"酒{さけ}",yue:"日本酒（煮食用）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:14741759,sc:[.06,.24,.06]}},kiru:{jp:"切{き}る",yue:"切",emoji:"🔪",cat:"verb"},mazeru:{jp:"混{ま}ぜる",yue:"攪拌、撈勻",emoji:"🥄",cat:"verb"},niru:{jp:"煮{に}る",yue:"煮、燜",emoji:"🍲",cat:"verb"},nigiru:{jp:"握{にぎ}る",yue:"揸實、搓（飯糰）",emoji:"✊",cat:"verb"},tokasu:{jp:"溶{と}かす",yue:"溶開",emoji:"🫧",cat:"verb"},yuderu:{jp:"ゆでる",yue:"烚（落水煮）",emoji:"♨️",cat:"verb"},noseru:{jp:"のせる",yue:"放上面",emoji:"⬆️",cat:"verb"},onigiri:{jp:"おにぎり",yue:"飯糰",emoji:"🍙",cat:"dish"},misoshiru:{jp:"味噌汁{みそしる}",yue:"麵豉湯",emoji:"🥣",cat:"dish"},oyakodon:{jp:"親子丼{おやこどん}",yue:"親子丼（雞肉滑蛋飯）",emoji:"🍛",cat:"dish"},ramen:{jp:"ラーメン",yue:"拉麵",emoji:"🍜",cat:"dish"},ocha:{jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",cat:"dish"},omizu:{jp:"お水{みず}",yue:"水（禮貌講法）",emoji:"🥛",cat:"dish"},biiru:{jp:"ビール",yue:"啤酒",emoji:"🍺",cat:"dish"},hitotsu:{jp:"一{ひと}つ",yue:"一個",emoji:"1️⃣",cat:"num"},futatsu:{jp:"二{ふた}つ",yue:"兩個",emoji:"2️⃣",cat:"num"},mittsu:{jp:"三{みっ}つ",yue:"三個",emoji:"3️⃣",cat:"num"},hitori:{jp:"一人{ひとり}",yue:"一個人",emoji:"🧍",cat:"num"},futari:{jp:"二人{ふたり}",yue:"兩個人",emoji:"👫",cat:"num"},sannin:{jp:"三人{さんにん}",yue:"三個人",emoji:"👨‍👩‍👧",cat:"num"},irasshaimase:{jp:"いらっしゃいませ",yue:"歡迎光臨",emoji:"🙇",cat:"phrase"},arigatou:{jp:"ありがとうございます",yue:"多謝（禮貌）",emoji:"🙏",cat:"phrase"},oishii:{jp:"おいしい",yue:"好好食",emoji:"😋",cat:"phrase"},itadakimasu:{jp:"いただきます",yue:"開動喇（食之前講）",emoji:"🙏",cat:"phrase"},gochisousama:{jp:"ごちそうさまでした",yue:"多謝款待（食完講）",emoji:"😊",cat:"phrase"},kudasai:{jp:"ください",yue:"請畀我⋯",emoji:"👉",cat:"phrase"},onegaishimasu:{jp:"お願{ねが}いします",yue:"麻煩你、唔該",emoji:"🙇",cat:"phrase"},okaikei:{jp:"お会計{かいけい}",yue:"埋單",emoji:"🧾",cat:"phrase"},sumimasen:{jp:"すみません",yue:"唔好意思（叫人都用得）",emoji:"✋",cat:"phrase"},atsui:{jp:"熱{あつ}い",yue:"好熱、好燙",emoji:"🔥",cat:"phrase"},oomori:{jp:"大盛{おおも}り",yue:"大份",emoji:"⛰️",cat:"phrase"},matta:{jp:"また 来{き}ます",yue:"我會再嚟",emoji:"👋",cat:"phrase"},oishikatta:{jp:"美味{おい}しかった",yue:"好好食呀（過去式）",emoji:"🥰",cat:"phrase"},hai:{jp:"はい",yue:"係／好",emoji:"⭕",cat:"phrase"},iie:{jp:"いいえ",yue:"唔係／唔使",emoji:"❌",cat:"phrase"}};for(const[i,t,e,n,s,r]of[...ev,...iv])Nn[i]={jp:t,yue:e,emoji:n,cat:"ing",m:{s,c:r,sc:[.12,.1,.12]}};for(const i of[...Rh,...gs])Nn[i.id]={jp:i.jp,yue:i.yue,emoji:i.emoji,cat:"dish"};for(const[i,t,e,n]of[...nv,...sv])Nn[i]={jp:t,yue:e,cat:n,emoji:n==="verb"?"🥄":"💬",textIcon:!0};function Me(i){const t=Nn[i];if(!t)throw new Error("vocab missing: "+i);return{id:i,...t}}const It=(i,t={})=>new Vc({color:i,roughness:.6,...t}),mi=i=>(i.castShadow=!0,i.receiveShadow=!0,i);function Yt(i,t,e=1,n=1,s=1){const r=mi(new gt(new Zn(i,20,14),typeof t=="number"?It(t):t));return r.scale.set(e,n,s),r}function ye(i,t,e,n){return mi(new gt(new Ce(i,t,e),typeof n=="number"?It(n):n))}function ee(i,t,e,n,s=24){return mi(new gt(new xn(i,t,e,s),typeof n=="number"?It(n):n))}function Wr(i=.22,t=.14,e=10165536,n=1708048){const s=[];for(let u=0;u<=10;u++){const h=u/10;s.push(new st(i*.45+i*.55*Math.sin(h*Math.PI/2),t*h))}const r=new Jt,a=mi(new gt(new er(s,32),It(e,{roughness:.3}))),o=s.map(u=>new st(u.x*.93,u.y+.005)),c=new gt(new er(o,32),It(n,{side:Ye,roughness:.3})),l=ee(i*.38,i*.4,.03,e);return l.position.y=-.01,r.add(a,c,l),r.userData.top=t,r.userData.r=i*.93,r}function An(i=.25,t=16052714){const e=ee(i,i*.8,.03,t,32),n=mi(new gt(new $e(i*.95,.012,6,32),It(3104156)));n.rotation.x=Math.PI/2,n.position.y=.016;const s=new Jt;return s.add(e,n),s}function gc(i=!0){const t=new Jt,e=new Sh,n=.14,s=.05,r=[0,1,2].map(c=>new st(Math.sin(c*2.094)*n,Math.cos(c*2.094)*n));for(let c=0;c<3;c++){const l=r[c],u=r[(c+1)%3],h=r[(c+2)%3],d=l.clone().lerp(h,s/n*.9),f=l.clone().lerp(u,s/n*.9);c===0?e.moveTo(d.x,d.y):e.lineTo(d.x,d.y),e.quadraticCurveTo(l.x,l.y,f.x,f.y)}e.closePath();const a=new Hc(e,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.04,bevelSegments:4,curveSegments:10});a.translate(0,0,-.04);const o=mi(new gt(a,It(16514036,{roughness:.9})));if(o.position.y=.14,t.add(o),i){const c=ye(.13,.11,.2,It(1517083,{roughness:.8}));c.position.set(0,.07,0),t.add(c)}return t}function Su(i){const t=new Jt;if(["dark_milk_tea","dark_coffee","dark_soda"].includes(i)){const e=ee(.11,.09,.3,It(14874362,{transparent:!0,opacity:.35}));e.position.y=.17,t.add(e);const n=ee(.098,.083,.25,i==="dark_coffee"?10383697:i==="dark_soda"?15308175:11846026);n.position.y=.15,t.add(n);const s=Lh();if(s.position.y=.04,t.add(s),i==="dark_soda"){const r=ee(.065,.065,.014,16243299);r.rotation.x=Math.PI/2,r.position.set(.09,.3,0),t.add(r)}if(i==="dark_coffee"){const r=ee(.096,.096,.045,14995373);r.position.y=.255,t.add(r)}}else if(i==="dark_ding"){t.add(An(.3));const e=Yt(.12,8868663,1.1,.4,.8);e.position.set(-.1,.07,0),t.add(e);const n=Yt(.09,15785896,1,.8,1);n.position.set(.12,.08,.08),t.add(n);for(let s=0;s<3;s++){const r=Yt(.04,7382346);r.position.set(s*.06,.06,-.13),t.add(r)}}else if(i==="dark_beef"||i==="dark_soup"){t.add(Wr(.23,.15,i==="dark_beef"?8671289:15787471,16182751));const e=ee(.205,.205,.025,i==="dark_beef"?8536360:14004830);if(e.position.y=.12,t.add(e),i==="dark_beef")for(let s=0;s<5;s++){const r=ye(.065,.045,.06,9524274);r.position.set(Math.sin(s*2)*.12,.15,Math.cos(s*2)*.12),t.add(r)}const n=Yt(.04,6524477,1.5,.2,.5);n.position.set(0,.17,0),t.add(n)}else if(i==="dark_rice"){t.add(An(.28));const e=Yt(.21,14858078,1,.6,1);e.position.y=.045,t.add(e);for(let n=0;n<12;n++){const s=ye(.035,.018,.025,n%3?16372556:7382346);s.position.set(Math.sin(n*2)*.15,.13,Math.cos(n*2)*.12),t.add(s)}}else if(i==="onigiri"){t.add(An(.24));const e=gc();e.position.y=.02,t.add(e);const n=gc();n.position.set(.1,.02,-.06),n.rotation.y=.5,n.scale.setScalar(.85),t.add(n);const s=Yt(.025,13117500);s.position.set(-.13,.04,.12),t.add(s)}else if(i==="misoshiru"){const e=Wr(.18,.13);t.add(e);const n=new gt(new Oi(.15,32),It(12946250,{roughness:.2}));n.rotation.x=-Math.PI/2,n.position.y=.11,t.add(n);for(let s=0;s<6;s++){const r=ye(.035,.03,.035,16776168);r.position.set((Math.random()-.5)*.18,.115,(Math.random()-.5)*.18),r.rotation.y=Math.random(),t.add(r)}for(let s=0;s<5;s++){const r=Yt(.03,3042106,1,.2,.6);r.position.set((Math.random()-.5)*.16,.112,(Math.random()-.5)*.16),t.add(r)}for(let s=0;s<8;s++){const r=ee(.012,.012,.005,8376399,8);r.position.set((Math.random()-.5)*.15,.118,(Math.random()-.5)*.15),t.add(r)}}else if(i==="oyakodon"){const e=Wr(.22,.15,2903951,15921126);t.add(e);const n=Yt(.19,16514036,1,.3,1);n.position.y=.13,t.add(n);const s=Yt(.19,It(16237873,{roughness:.35}),1,.16,1);s.position.y=.17,t.add(s);for(let r=0;r<6;r++){const a=Yt(.05,16775126,1,.25,.8);a.position.set((Math.random()-.5)*.24,.19,(Math.random()-.5)*.24),t.add(a)}for(let r=0;r<6;r++){const a=ye(.05,.035,.04,13210202);a.position.set((Math.random()-.5)*.22,.2,(Math.random()-.5)*.22),a.rotation.y=Math.random()*3,t.add(a)}for(let r=0;r<3;r++){const a=Yt(.03,5025616,1,.15,1.6);a.position.set((Math.random()-.5)*.08,.22,(Math.random()-.5)*.08),a.rotation.y=r*2,t.add(a)}}else if(i==="ramen"){const e=Wr(.27,.17,11740702,1118481);t.add(e);const n=new gt(new Oi(.235,32),It(13802331,{roughness:.15}));n.rotation.x=-Math.PI/2,n.position.y=.15,t.add(n);for(let l=0;l<7;l++){const u=new gt(new $e(.05+Math.random()*.06,.008,6,20),It(15980410));u.rotation.x=Math.PI/2,u.position.set((Math.random()-.5)*.12,.152,(Math.random()-.5)*.12),t.add(u)}for(let l=0;l<2;l++){const u=ee(.07,.07,.02,11887930);u.position.set(-.08+l*.05,.165,-.08),u.rotation.x=.3,t.add(u)}const s=new gt(new Zn(.05,16,10,0,Math.PI*2,0,Math.PI/2),It(16775920));s.scale.set(1,.7,1.3),s.position.set(.1,.15,.05),t.add(s);const r=Yt(.028,15763994,1,.4,1.2);r.position.set(.1,.183,.05),t.add(r);const a=ye(.12,.14,.005,1517083);a.position.set(0,.2,-.18),a.rotation.x=-.25,t.add(a);const o=ee(.035,.035,.012,16777215);o.position.set(.05,.16,.13),t.add(o);const c=new gt(new $e(.018,.005,6,16),It(16740256));c.rotation.x=Math.PI/2,c.position.set(.05,.167,.13),t.add(c);for(let l=0;l<10;l++){const u=ee(.01,.01,.005,8376399,8);u.position.set(-.1+Math.random()*.1,.158,.05+Math.random()*.1),t.add(u)}}else if(["instant_coffee","black_tea","matcha_latte"].includes(i)){t.add(An(.19));const e=ee(.115,.09,.2,16774367);e.position.y=.12,t.add(e);const n=ee(.106,.106,.012,i==="instant_coffee"?4796454:i==="black_tea"?11627820:9350233);n.position.y=.225,t.add(n);const s=new gt(new $e(.06,.015,8,20),It(16774367));if(s.position.set(.12,.12,0),t.add(s),i==="matcha_latte"){const r=ee(.06,.06,.005,16775647);r.position.y=.235,t.add(r)}}else if(i==="edamame"){t.add(An());for(let e=0;e<6;e++){const n=Yt(.065,7974216,1.7,.45,.55);n.position.set((e%3-1)*.12,.05+Math.floor(e/3)*.035,(Math.floor(e/3)-.5)*.12),n.rotation.y=e*.8,t.add(n)}}else if(i==="yakitori"){t.add(An());for(let e=0;e<2;e++){const n=ye(.015,.015,.42,13017452);n.position.set(e*.17-.08,.05,0),t.add(n);for(let s=0;s<4;s++){const r=ye(.085,.06,.065,s%2?8889940:13009468);r.position.set(e*.17-.08,.08,s*.08-.08),t.add(r)}}}else if(i==="karaage"||i==="agedashi"){t.add(An());for(let e=0;e<5;e++){const n=i==="karaage"?Yt(.07,12945979,1,.8,.9):ye(.1,.08,.1,15122813);if(n.position.set(Math.cos(e*1.26)*.13,.07,Math.sin(e*1.26)*.13),t.add(n),i==="agedashi"){const s=Yt(.02,7185226,1.4,.2,.5);s.position.copy(n.position),s.position.y+=.05,t.add(s)}}}else if(i==="okonomiyaki"||i==="pancakes"){t.add(An());for(let e=0;e<(i==="pancakes"?3:1);e++){const n=ee(.2,.2,.045,e%2?14858346:13210700);n.position.y=.045+e*.045,t.add(n)}if(i==="pancakes"){const e=ye(.065,.025,.065,16768899);e.position.y=.17,t.add(e)}else for(let e=0;e<4;e++){const n=ye(.31,.008,.015,6568748);n.position.set(0,.075,(e-1.5)*.055),t.add(n)}}else if(i==="thick_toast"){t.add(An());const e=ye(.32,.09,.29,10314292);e.position.y=.065,t.add(e);const n=ye(.28,.012,.25,15517065);n.position.y=.116,t.add(n);const s=ye(.07,.022,.07,16768899);s.position.y=.135,t.add(s)}else if(i==="pudding"){t.add(An());const e=ee(.11,.16,.19,16046470);e.position.y=.11,t.add(e);const n=ee(.112,.112,.012,10178863);n.position.y=.21,t.add(n)}else if(i==="yakisoba"){t.add(An());for(let e=0;e<12;e++){const n=new gt(new $e(.07,.009,6,16),It(12158277));n.rotation.x=Math.PI/2,n.position.set(Math.sin(e*2)*.11,.04+e*.004,Math.cos(e*2)*.1),t.add(n)}for(let e=0;e<5;e++){const n=Yt(.035,9876576,1.4,.2,1);n.position.set(Math.cos(e)*.12,.1,Math.sin(e)*.12),t.add(n)}}else if(i==="ocha"){const e=ee(.06,.05,.12,6983502);e.position.y=.06,t.add(e);const n=new gt(new Oi(.055,20),It(10207050));n.rotation.x=-Math.PI/2,n.position.y=.11,t.add(n)}else if(i==="omizu"){const e=ee(.05,.045,.14,It(13627391,{transparent:!0,opacity:.45,roughness:.05}));e.position.y=.07,t.add(e)}else if(i==="biiru"){const e=ee(.06,.06,.18,It(15905076,{transparent:!0,opacity:.85,roughness:.1}));e.position.y=.09,t.add(e);const n=Yt(.062,16777215,1,.4,1);n.position.y=.18,t.add(n);const s=new gt(new $e(.04,.012,6,12,Math.PI),It(15267071,{transparent:!0,opacity:.6}));s.rotation.z=-Math.PI/2,s.position.set(.06,.09,0),t.add(s)}return t}function Lh(){const i=new Jt;for(let t=0;t<3;t++){const e=ye(.045,.035,.045,It(14086911,{transparent:!0,opacity:.75}));e.position.set((t-1)*.045,.244,t%2*.04-.02),i.add(e)}return i}function lv(){const i=new Jt,t=ye(.62,.35,.4,14012875);t.position.y=.175,i.add(t);const e=ye(.42,.24,.012,It(3157048,{emissive:0}));e.position.set(-.055,.18,.207),i.add(e);const n=ye(.025,.17,.03,7827836);n.position.set(.13,.18,.225),i.add(n);for(let s=0;s<2;s++){const r=ee(.035,.035,.025,6839152);r.rotation.x=Math.PI/2,r.position.set(.235,.12+s*.13,.22),i.add(r)}return i.userData.window=e,i}function uv(i,t,e){if(!i)return;if(t!=="plain"){const s=ee(t==="grand"?.39:.3,.28,.02,t==="grand"?3420222:15262940);s.position.y=-.025,i.add(s)}const n=e==="tower"?7:e==="accent"?1:0;for(let s=0;s<n;s++){const r=Yt(.04,6329916,1.5,.25,.5);r.position.set(.035*Math.sin(s),.32+s*.025,0),r.rotation.y=s,i.add(r)}}function hv(i){const t=Nn[i],e=t==null?void 0:t.m,n=new Jt;if(!e)return n;let s;return e.s==="sphere"?s=Yt(1,e.c):e.s==="box"?s=ye(1,1,1,e.c):s=ee(1,1,1,e.c,18),s.scale.set(...e.sc),(e.s==="cyl"||e.s==="box")&&(s.scale.y=e.sc[1]),s.position.y=e.s==="sphere"?e.sc[1]:e.sc[1]/2,e.rz&&(s.rotation.z=e.rz,s.position.y=e.sc[0]),n.add(s),n}function dv(i){const t=new Jt;switch(i){case"onigiri_raw":{const e=gc(!1);t.add(e);break}case"tofu_cubes":for(let e=0;e<9;e++){const n=ye(.06,.06,.06,16776168);n.position.set(e%3*.07-.07,.03,Math.floor(e/3)*.07-.07),t.add(n)}break;case"chicken_pieces":for(let e=0;e<8;e++){const n=ye(.06,.04,.05,15911328);n.position.set((Math.random()-.5)*.25,.02,(Math.random()-.5)*.15),n.rotation.y=Math.random()*3,t.add(n)}break}return t}function fv(){const i=new Jt,t=ye(.7,.04,.42,It(14267530,{roughness:.8}));return t.position.y=.02,i.add(t),i}function pv(){const i=new Jt,t=It(12107463,{metalness:.7,roughness:.3}),e=new gt(new xn(.2,.18,.22,28,1,!0),new Vc({color:12107463,metalness:.7,roughness:.3,side:Ze}));e.position.y=.11,e.castShadow=!0;const n=ee(.18,.18,.01,t);n.position.y=.005;const s=new gt(new Oi(.19,28),It(15259816,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.16,s.visible=!1,i.add(e,n,s);for(const r of[-1,1]){const a=ye(.08,.02,.04,3355443);a.position.set(r*.24,.19,0),i.add(a)}return i.userData.liquid=s,i}function mv(){const i=new Jt,t=ee(.17,.15,.05,It(2763306,{metalness:.5,roughness:.4}));t.position.y=.025;const e=ee(.015,.015,.35,7028509);e.rotation.z=Math.PI/2,e.position.set(.33,.05,0);const n=new gt(new Oi(.15,28),It(12089914,{roughness:.15}));return n.rotation.x=-Math.PI/2,n.position.y=.045,n.visible=!1,i.add(t,e,n),i.userData.liquid=n,i}function Dh(i){const t=new Jt,e=i.color,n=Yt(.32,e,1,1.15,.9);n.position.y=.55,t.add(n);const s=Yt(.22,i.id==="maneki"?16777215:16774112,1,1.1,.6);s.position.set(0,.5,.2),t.add(s);const r=new Jt;r.position.y=1.08,t.add(r),r.add(Yt(.3,e,1.1,1,1));const a=i.id==="kuma"?14267276:i.id==="kitsune"||i.id==="shiba"?16774112:16777215,o=Yt(.12,a,1.3,.85,.9);o.position.set(0,-.08,.24),r.add(o);const c=Yt(.035,2236962);c.position.set(0,-.04,.35),r.add(c);for(const l of[-1,1]){const u=Yt(.04,new un({color:1118481}),1,1.2,.6);u.position.set(l*.12,.04,.27),r.add(u);const h=Yt(.012,new un({color:16777215}));h.position.set(l*.12+.012,.06,.3),r.add(h);const d=Yt(.04,new un({color:16752560,transparent:!0,opacity:.6}),1,.6,.3);if(d.position.set(l*.2,-.06,.24),r.add(d),i.mask){const m=Yt(.08,3813416,1.2,.9,.4);m.position.set(l*.12,.03,.24),r.add(m),u.position.z=.29}let f;i.ear==="long"?(f=Yt(.07,e,1,3.2,.6),f.position.set(l*.1,.42,0),f.rotation.z=-l*.15):i.ear==="round"?(f=Yt(.09,e,1,1,.6),f.position.set(l*.22,.24,0)):(f=mi(new gt(new As(.1,.2,12),It(e))),f.scale.z=.6,f.position.set(l*.18,.3,0),f.rotation.z=-l*.3),r.add(f);const g=Yt(.08,e,1,1.6,1);g.position.set(l*.3,.6,.1),g.rotation.z=l*.4,t.add(g),i.id==="maneki"&&l===1&&(g.position.set(.3,.95,.1),g.rotation.z=-.3,t.userData.wave=g);const v=Yt(.09,e,1.2,.6,1.4);v.position.set(l*.14,.05,.08),t.add(v)}if(i.id==="maneki"){const l=mi(new gt(new $e(.2,.03,8,24),It(14100029)));l.rotation.x=Math.PI/2,l.position.y=.86,t.add(l);const u=Yt(.05,It(16106818,{metalness:.8,roughness:.2}));u.position.set(0,.8,.2),t.add(u);const h=ee(.12,.12,.02,It(16106818,{metalness:.8,roughness:.2}));h.scale.set(.7,1,1.2),h.rotation.x=Math.PI/2,h.position.set(-.15,.55,.3),t.add(h)}return t.userData.head=r,t}function bu(i){const t=new Jt;if(i==="deco_lantern"){const e=Yt(.2,It(14694959,{emissive:8392720,emissiveIntensity:.6}),1,1.3,1),n=ee(.1,.1,.05,2236962);n.position.y=.27;const s=ee(.1,.1,.05,2236962);s.position.y=-.27;const r=ee(.005,.005,.5,2236962);r.position.y=.5;const a=new Ah(16744512,.8,3);t.add(e,n,s,r,a)}else if(i==="deco_noren"){const e=ee(.015,.015,1.4,7028509);e.rotation.z=Math.PI/2,t.add(e);for(let n=0;n<3;n++){const s=ye(.44,.55,.01,It(1914199,{side:Ze}));s.position.set(-.46+n*.46,-.28,0),t.add(s);const r=Yt(.06,16777215,1,1,.2);r.position.set(-.46+n*.46,-.3,.01),t.add(r)}}else if(i==="deco_bonsai"){const e=ee(.12,.09,.08,3100527);e.position.y=.04,t.add(e);const n=ee(.02,.03,.18,5978654);n.position.y=.17,n.rotation.z=.3,t.add(n),[[0,.3,0,.1],[-.08,.26,.02,.07],[.08,.32,-.02,.07]].forEach(([s,r,a,o])=>{const c=Yt(o,4165439,1.3,.7,1);c.position.set(s,r,a),t.add(c)})}else if(i==="deco_maneki"){const e=Dh({id:"maneki",color:16777215,ear:"pointy"});e.scale.setScalar(.35),t.add(e),t.userData.wave=e.userData.wave}return t}function wu(i="#fff",t=!0){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,i),s.addColorStop(t?.4:.9,i),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new ta(e);return r.colorSpace=Ve,r}const hs=40;class gv{constructor(t){this.canvas=t,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.dprMax=Math.min(window.devicePixelRatio||1,this.mobile?1.5:2),this.renderer=new l_({canvas:t,antialias:!(this.mobile&&window.devicePixelRatio>=2),powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dprMax),this.renderer.outputColorSpace=Ve,this.renderer.toneMapping=zu,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.mobile?Ec:Ou,this.quality=2,this.perfN=0,this.perfT=0,this.perfCool=3,this.trauma=0,this.fovKick=0,this.baseFov=42,this.reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,this.shakeOn=!0,this.springs=[],this._v=new P,this.scene=new u_,this.scene.background=new Kt(16180168),this.scene.fog=new Fc(16180168,12,30),this.camera=new ln(42,1,.1,100),this.camPos=new P,this.camLook=new P,this.camTargetPos=new P,this.camTargetLook=new P,this.particles=[],this.tweens=[],this.anchors=[],this.clock=new J_,this.onCatTap=null,this.raycaster=new Z_,this.lights(),this.buildKitchen(),this.buildRestaurant(),this.cat=new tv,this.cat.root.position.set(-.35,0,-.6),this.kitchen.add(this.cat.root),this.texSteam=wu("rgba(255,255,255,0.9)"),this.texSpark=wu("#ffe680",!1),this.texHeart=new fu().load(sa("ui_heart")),this.texCoin=new fu().load(sa("ui_coin")),this.texHeart.colorSpace=this.texCoin.colorSpace=Ve,this.steamOn=null,this.setView("kitchen",!0),this.resize(),window.addEventListener("resize",()=>this.resize()),t.addEventListener("pointerdown",e=>this.tap(e)),this.renderer.setAnimationLoop(()=>this.frame()),document.addEventListener("visibilitychange",()=>{document.hidden?this.renderer.setAnimationLoop(null):(this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.frame()))})}lights(){const t=new $_(16774368,9071184,1.1);this.scene.add(t);const e=new _u(16770752,2);e.position.set(3,6,4),e.castShadow=!0,e.shadow.mapSize.set(this.mobile?512:1024,this.mobile?512:1024),e.shadow.camera.left=-4,e.shadow.camera.right=4,e.shadow.camera.top=4,e.shadow.camera.bottom=-2,e.shadow.bias=-5e-4,e.shadow.radius=4,this.sun=e,this.scene.add(e,e.target);const n=new _u(12638463,.5);n.position.set(-4,3,2),this.scene.add(n)}buildKitchen(){const t=new Jt;this.kitchen=t,this.scene.add(t);const e=new gt(new cn(14,10),It(13016173,{roughness:.9}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let C=-6;C<7;C++){const R=new gt(new cn(.02,10),It(10779730));R.rotation.x=-Math.PI/2,R.position.set(C*.6,.002,0),t.add(R)}const n=new gt(new cn(14,6),It(16247506,{roughness:1}));n.position.set(0,3,-2.2),n.receiveShadow=!0,t.add(n);const s=new gt(new Ce(14,1,.05),It(9132604));s.position.set(0,.5,-2.17),t.add(s);const r=new gt(new cn(1.4,1),new un({map:this.skyTexture()}));r.position.set(1.4,2.4,-2.14),t.add(r);const a=new gt(new Ce(1.5,1.1,.04),It(7029286));a.position.set(1.4,2.4,-2.17),t.add(a);const o=new gt(new Ce(.04,1,.06),It(7029286));o.position.set(1.4,2.4,-2.1),t.add(o);const c=new gt(new Ce(1.4,.04,.06),It(7029286));c.position.set(1.4,2.4,-2.1),t.add(c),this.menuBoard=new gt(new cn(1.2,.9),new un({map:this.menuTexture([])})),this.menuBoard.position.set(-1.3,2.45,-2.17),t.add(this.menuBoard);const l=new gt(new Ce(1.8,.05,.3),It(9132604));l.position.set(-.2,1.75,-2.05),l.castShadow=!0,t.add(l);const u=[14263361,11037490,3807756,16115368,16777215,7127626];for(let C=0;C<6;C++){const R=new gt(new xn(.07,.07,.16+C%2*.06,14),It(u[C],{roughness:.3}));R.position.set(-.95+C*.22,1.86+C%2*.03,-2),R.castShadow=!0,t.add(R)}const h=new gt(new As(.3,.25,24,1,!0),It(2894892,{side:Ze}));h.position.set(-.3,3,-.4),t.add(h);const d=new gt(new Zn(.08),new un({color:16773568}));d.position.set(-.3,2.88,-.4),t.add(d);const f=new Ah(16766362,3,5,1.5);f.position.set(-.3,2.8,-.4),t.add(f);const g=new gt(new Ce(3.6,1,.9),It(7226409,{roughness:.7}));g.position.set(0,.5,0),g.castShadow=g.receiveShadow=!0,t.add(g);const v=new gt(new Ce(3.7,.08,1),It(14730138,{roughness:.5}));v.position.set(0,1.04,0),v.receiveShadow=!0,v.castShadow=!0,t.add(v),this.counterY=1.08;const m=new gt(new Ce(.6,.05,.5),It(3355443));m.position.set(-1.1,this.counterY+.02,-.1),t.add(m);const p=new gt(new $e(.15,.02,6,24),It(1118481));p.rotation.x=Math.PI/2,p.position.set(-1.1,this.counterY+.05,-.1),t.add(p),this.flame=new gt(new $e(.14,.02,6,24),new un({color:4891647})),this.flame.rotation.x=Math.PI/2,this.flame.position.set(-1.1,this.counterY+.07,-.1),this.flame.visible=!1,t.add(this.flame),this.stations={};const w=fv();w.position.set(.05,this.counterY,.05),t.add(w);const x=pv();x.position.set(-1.1,this.counterY+.05,-.1),t.add(x);const S=mv();S.position.set(-1.1,this.counterY+.05,-.1),S.visible=!1,t.add(S);const L=lv();L.position.set(-1.1,this.counterY+.05,-.1),L.visible=!1,t.add(L),this.stations={board:w,pot:x,pan:S,microwave:L},this.workItems=new Jt,t.add(this.workItems),this.servePos=new P(.75,this.counterY,.25),this.customerPos=new P(1.1,0,1),this.customerSpawn=new P(3.5,0,1.6),this.decoSlots={deco_lantern:[new P(1.4,2.9,-.6),t],deco_noren:[new P(-.2,3.35,-2.1),t],deco_bonsai:[new P(1.55,this.counterY,-.25),t],deco_maneki:[new P(.3,1.78,-2),t]},this.decoObjs={}}buildRestaurant(){const t=new Jt;t.position.x=hs,this.rest=t,this.scene.add(t);const e=new gt(new cn(10,10),It(12165754,{roughness:1}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let a=-4;a<5;a++){const o=new gt(new cn(.03,10),It(7035450));o.rotation.x=-Math.PI/2,o.position.set(a*.9,.002,0),t.add(o)}const n=new gt(new cn(10,6),It(15721156,{roughness:1}));n.position.set(0,3,-2.5),t.add(n);for(let a=-5;a<=5;a++){const o=new gt(new Ce(.08,6,.06),It(5978654));o.position.set(a*.9,3,-2.45),t.add(o)}["おにぎり","味噌汁","親子丼","ラーメン","ビール"].forEach((a,o)=>{const c=new gt(new cn(.28,.9),new un({map:this.tagTexture(a)}));c.position.set(-1.2+o*.4,2.6,-2.4),t.add(c)});for(const a of[-1.8,1.8]){const o=bu("deco_lantern");o.position.set(a,2.6,-1.8),t.add(o)}const r=new gt(new Ce(1.8,.08,1.1),It(8014378,{roughness:.5}));r.position.set(0,.75,.3),r.castShadow=r.receiveShadow=!0,t.add(r);for(const[a,o]of[[-.8,-.15],[.8,-.15],[-.8,.75],[.8,.75]]){const c=new gt(new Ce(.08,.75,.08),It(5978654));c.position.set(a,.375,o),t.add(c)}this.tableY=.79,this.tableItems=new Jt,t.add(this.tableItems),this.restCatPos=new P(-.95,0,-.55)}skyTexture(){const t=document.createElement("canvas");t.width=128,t.height=96;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,96);n.addColorStop(0,"#8fd3ff"),n.addColorStop(1,"#ffe3b0"),e.fillStyle=n,e.fillRect(0,0,128,96),e.fillStyle="#ffffffcc",[[30,30,14],[44,26,12],[90,40,10],[100,36,8]].forEach(([r,a,o])=>{e.beginPath(),e.arc(r,a,o,0,7),e.fill()}),e.fillStyle="#7a9a7a",e.beginPath(),e.moveTo(0,96),e.lineTo(40,60),e.lineTo(70,80),e.lineTo(100,55),e.lineTo(128,75),e.lineTo(128,96),e.fill();const s=new ta(t);return s.colorSpace=Ve,s}tagTexture(t){const e=document.createElement("canvas");e.width=80,e.height=256;const n=e.getContext("2d");n.fillStyle="#f3e3c0",n.fillRect(0,0,80,256),n.strokeStyle="#5b3a1e",n.lineWidth=6,n.strokeRect(3,3,74,250),n.fillStyle="#2a1a10",n.font='bold 38px "Noto Serif JP","Yu Mincho",serif',n.textAlign="center";const s=[...t],r=Math.min(48,220/s.length);s.forEach((o,c)=>n.fillText(o==="ー"?"｜":o,40,44+c*r));const a=new ta(e);return a.colorSpace=Ve,a}menuTexture(t){const e=document.createElement("canvas");e.width=320,e.height=240;const n=e.getContext("2d");n.fillStyle="#2f3b2f",n.fillRect(0,0,320,240),n.strokeStyle="#8b5a3c",n.lineWidth=14,n.strokeRect(0,0,320,240),n.fillStyle="#fff",n.font='bold 30px "Noto Sans JP",sans-serif',n.textAlign="center",n.fillText("お品書き",160,46),n.font='24px "Noto Sans JP",sans-serif',n.textAlign="left";const s=Math.min(36,145/Math.max(1,t.length));n.font=`${t.length>4?16:24}px "Noto Sans JP",sans-serif`,t.forEach((a,o)=>{n.fillStyle=a.locked?"#889":"#ffeeaa",n.fillText(a.locked?"？？？":a.name,22,82+o*s,205),n.textAlign="right",n.fillText(a.locked?"":a.price+"円",298,82+o*s),n.textAlign="left"});const r=new ta(e);return r.colorSpace=Ve,r}setMenu(t){var e;(e=this.menuBoard.material.map)==null||e.dispose(),this.menuBoard.material.map=this.menuTexture(t),this.menuBoard.material.needsUpdate=!0}setView(t,e=!1){var s;const n=this.view;this.view=t,t==="kitchen"&&(this.camTargetPos.set(.2,2.75,5),this.camTargetLook.set(.2,1.55,0)),t==="cook"&&(this.camTargetPos.set(-.3,2.9,3.6),this.camTargetLook.set(-.4,1.35,-.1)),t==="serve"&&(this.camTargetPos.set(.6,2.5,4.2),this.camTargetLook.set(.5,1.4,.3)),t==="rest"&&(this.camTargetPos.set(hs-.1,1.95,4),this.camTargetLook.set(hs-.55,1.15,-.4)),t==="restTable"&&(this.camTargetPos.set(hs,2.75,3.1),this.camTargetLook.set(hs,.75,.3)),this.fitAspect(),e?(this.camPos.copy(this.camTargetPos),this.camLook.copy(this.camTargetLook)):n!==t&&(this.fovKick=7),(s=this.onView)==null||s.call(this,t,e)}fitAspect(){const t=this.camera.aspect||.5;t<.9&&this.view==="cook"&&(this.camTargetPos.x+=.9,this.camTargetLook.x+=.9);const e=Math.max(this.view==="cook"?.45:0,(.9/t-1)*1.15),n=this.camTargetPos.clone().sub(this.camTargetLook);this.camTargetPos.copy(this.camTargetLook).add(n.multiplyScalar(1+e))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,e*.17,t,e),this.camera.updateProjectionMatrix(),this.setView(this.view||"kitchen",!0)}catTo(t){t==="rest"?(this.rest.add(this.cat.root),this.cat.root.position.copy(this.restCatPos),this.cat.root.rotation.y=.6,this.cat.holding("pad")):(this.kitchen.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null))}catFace(t){const e={front:0,stove:-.6,board:.25,customer:.6}[t]??0;this.tween(this.cat.root.rotation,{y:e},.3);const n=t==="stove"?-.75:-.35;this.tween(this.cat.root.position,{x:n},.35)}useStation(t){this.stations.pot.visible=t!=="pan"&&t!=="microwave",this.stations.pan.visible=t==="pan",this.stations.microwave.visible=t==="microwave",this.station=t}clearWork(){this.workItems.clear(),this.stations.pot.userData.liquid.visible=!1,this.stations.pan.userData.liquid.visible=!1,this.flame.visible=!1,this.steamOn=null}placeIngredient(t,e,n){const s=hv(t),a=this.station==="board"?new P(.05,this.counterY+.04,.05):new P(.05,this.counterY+.04,.05);return s.position.copy(a).add(new P((e-(n-1)/2)*.17,0,e%2*.08-.04)),this.popIn(s),this.workItems.add(s),s}showProp(t){const e={miso_soup:12946250,ramen_boil:15983544,pan_simmer:12089914,oyako_egg:16237873};if(e[t]){const s=this.stations[this.station==="pan"?"pan":"pot"];s.userData.liquid.visible=!0,s.userData.liquid.material.color.setHex(e[t]),this.flame.visible=!0,this.steamOn=s,this.workItems.children.forEach(r=>this.tween(r.scale,{x:.01,y:.01,z:.01},.25));return}const n=dv(t);n.children.length&&(this.workItems.children.forEach(s=>this.tween(s.scale,{x:.01,y:.01,z:.01},.25)),n.position.set(.05,this.counterY+.04,.05),this.popIn(n),this.workItems.add(n))}heat(t){this.flame.visible=t,t&&(this.steamOn=this.stations[this.station==="pan"?"pan":"pot"])}microwaveLight(t){this.stations.microwave.userData.window.material.emissive.setHex(t?7160869:0)}styleDish(t,e){uv(this.dish,t,e)}showDish(t){this.clearWork();const e=Su(t);return e.position.copy(this.servePos).add(new P(-.7,0,-.15)),e.scale.setScalar(1.6),this.popIn(e,1.6),this.kitchen.add(e),this.dish=e,this.burst(e.position.clone().add(new P(0,.3,0)),this.texSpark,24,.08),setTimeout(()=>this.punch(e,-.18),350),e}slideDishToCustomer(){this.dish&&(this.tween(this.dish.position,{x:this.servePos.x,z:this.servePos.z+.1},.5),this.tween(this.dish.scale,{x:1.3,y:1.3,z:1.3},.5))}removeDish(){if(!this.dish)return;const t=this.dish;this.dish=null,this.tween(t.scale,{x:.01,y:.01,z:.01},.3).then(()=>{var e;return(e=t.parent)==null?void 0:e.remove(t)})}async customerIn(t){this.customerOut(!0);const e=Dh(t);return e.position.copy(this.customerSpawn),e.rotation.y=-1.2,this.kitchen.add(e),this.customer=e,await this.walk(e,this.customerPos,1.1),this.punch(e,-.22),this.tween(e.rotation,{y:-.9},.3),e}async customerOut(t=!1){var n,s;const e=this.customer;if(e){if(this.customer=null,t){(n=e.parent)==null||n.remove(e);return}this.tween(e.rotation,{y:1.6},.3),await this.walk(e,this.customerSpawn.clone().add(new P(1,0,.5)),1),(s=e.parent)==null||s.remove(e)}}walk(t,e,n){const s=t.position.clone();return this.tween({k:0},{k:1},n,r=>{t.position.lerpVectors(s,e,r.k),t.position.y=Math.abs(Math.sin(r.k*Math.PI*6))*.06})}customerJump(){const t=this.customer;t&&(this.punch(t,.3),this.tween({k:0},{k:1},.6,e=>{t.position.y=Math.abs(Math.sin(e.k*Math.PI*2))*.25}).then(()=>this.punch(t,-.25)),this.shake(.25),this.burst(t.position.clone().add(new P(0,1.5,0)),this.texHeart,6,.05,.25))}coinsFromCustomer(){this.customer&&this.burst(this.customer.position.clone().add(new P(0,1.2,0)),this.texCoin,10,.06,.2)}setDeco(t){for(const e in this.decoSlots){const n=t.includes(e);if(n&&!this.decoObjs[e]){const s=bu(e),[r,a]=this.decoSlots[e];s.position.copy(r),a.add(s),this.popIn(s),this.decoObjs[e]=s}else!n&&this.decoObjs[e]&&(this.decoObjs[e].parent.remove(this.decoObjs[e]),delete this.decoObjs[e])}}restClear(){this.tableItems.clear()}restServe(t,e){this.restClear(),t.forEach((n,s)=>{for(let r=0;r<e;r++){const a=Su(n),o=(r-(e-1)/2)*.5+(s?.18:-.05);a.position.set(o,this.tableY,s?.25:.5),s&&a.scale.setScalar(1.1),this.popIn(a,a.scale.x),this.tableItems.add(a)}}),this.burst(new P(hs,this.tableY+.4,.4),this.texSpark,20,.07)}shake(t=.3){!this.shakeOn||this.reduceMotion||(this.trauma=Math.min(1,this.trauma+t))}punch(t,e=.2){if(!t||this.reduceMotion)return;let n=this.springs.find(s=>s.obj===t);n||(n={obj:t,base:t.scale.clone(),x:0,v:0},this.springs.push(n)),n.v+=e*22}updateSprings(t){for(let e=this.springs.length-1;e>=0;e--){const n=this.springs[e];n.v+=(-180*n.x-12*n.v)*t,n.x+=n.v*t;const s=n.obj;if(Math.abs(n.x)<.001&&Math.abs(n.v)<.01){s.scale.copy(n.base),this.springs.splice(e,1);continue}s.scale.set(n.base.x*(1-n.x*.5),n.base.y*(1+n.x),n.base.z*(1-n.x*.5))}}perfWatch(t){if(t>.05||(this.perfT+=t,this.perfN++,this.perfN<90))return;const e=this.perfT/this.perfN;if(this.perfT=0,this.perfN=0,this.perfCool>0){this.perfCool--;return}e>.026&&this.quality>0&&(this.quality--,this.quality===1?(this.dprMax=Math.max(1,this.dprMax*.75),this.renderer.setPixelRatio(this.dprMax),this.resize()):(this.sun.castShadow=!1,this.renderer.shadowMap.enabled=!1,this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),this.perfCool=2)}burst(t,e,n=12,s=.08,r=.35){this.quality<2&&(n=Math.ceil(n/2)),n=Math.min(n,Math.max(0,70-this.particles.length));for(let a=0;a<n;a++){const o=new ru(new uc({map:e,transparent:!0,depthWrite:!1}));o.position.copy(t),o.scale.setScalar(s*(1.5+Math.random())*(e===this.texSpark?1:2.5));const c=Math.random()*Math.PI*2;o.userData={v:new P(Math.cos(c)*r*Math.random()*2,.5+Math.random()*r*3,Math.sin(c)*r*Math.random()),life:1,g:-2},this.scene.add(o),this.particles.push(o)}}hearts(){const t=new P;this.cat.head.getWorldPosition(t),this.burst(t.add(new P(0,.4,0)),this.texHeart,4,.05,.15)}steamPuff(t){if(this.particles.length>60)return;const e=this._v;t.getWorldPosition(e);const n=new ru(new uc({map:this.texSteam,transparent:!0,opacity:.5,depthWrite:!1}));n.position.copy(e).add(new P((Math.random()-.5)*.2,.25,(Math.random()-.5)*.2)),n.scale.setScalar(.15),n.userData={v:new P((Math.random()-.5)*.1,.4,0),life:1.4,g:0,grow:.25},this.scene.add(n),this.particles.push(n)}popIn(t,e=1){return t.scale.setScalar(.01),this.tween(t.scale,{x:e,y:e,z:e},.35,null,"back")}tween(t,e,n,s=null,r="out"){const a={};for(const o in e)a[o]=t[o];return new Promise(o=>this.tweens.push({obj:t,from:a,to:e,dur:n,t:0,onUpdate:s,ease:r,res:o}))}tap(t){const e=this.canvas.getBoundingClientRect(),n=new st((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(n,this.camera),this.raycaster.intersectObject(this.cat.root,!0)[0]&&this.onCatTap&&this.onCatTap()}screenOf(t,e=0){const n=this._v;return t.getWorldPosition(n),n.y+=e,n.project(this.camera),{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,behind:n.z>1}}anchor(t,e,n){this.anchors.push({el:t,getObj:e,offsetY:n})}unanchor(t){this.anchors=this.anchors.filter(e=>e.el!==t)}frame(){var r,a;const t=this.clock.getDelta(),e=hn()?0:Math.min(t,.05),n=1-Math.pow(.02,e);if(this.camPos.lerp(this.camTargetPos,n),this.camLook.lerp(this.camTargetLook,n),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.trauma>0){const o=this.trauma*this.trauma;this.camera.position.x+=(Math.random()-.5)*.16*o,this.camera.position.y+=(Math.random()-.5)*.16*o,this.camera.rotation.z+=(Math.random()-.5)*.035*o,this.trauma=Math.max(0,this.trauma-e*1.8)}this.fovKick>.01?(this.fovKick*=Math.pow(.004,e),this.camera.fov=this.baseFov+this.fovKick,this.camera.updateProjectionMatrix()):this.camera.fov!==this.baseFov&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()),this.sun.position.set(this.camLook.x+3,6,4),this.sun.target.position.set(this.camLook.x,0,0),this.cat.update(e),this.updateSprings(e),this.perfWatch(e);const s=this.clock.elapsedTime;this.customer&&(this.customer.userData.head.rotation.z=Math.sin(s*2)*.08,this.customer.userData.wave&&(this.customer.userData.wave.rotation.z=-.3+Math.sin(s*6)*.4)),(r=this.decoObjs.deco_maneki)!=null&&r.userData.wave&&(this.decoObjs.deco_maneki.userData.wave.rotation.z=-.3+Math.sin(s*4)*.4),this.decoObjs.deco_lantern&&(this.decoObjs.deco_lantern.rotation.z=Math.sin(s*.8)*.05),this.flame.visible&&this.flame.scale.setScalar(1+Math.sin(s*30)*.05),this.steamOn&&Math.random()<e*8&&this.steamPuff(this.steamOn);for(let o=this.tweens.length-1;o>=0;o--){const c=this.tweens[o];c.t+=e;let l=Math.min(c.t/c.dur,1);c.ease==="out"?l=1-Math.pow(1-l,3):c.ease==="back"&&(l=1+(1.70158+1)*Math.pow(l-1,3)+1.70158*Math.pow(l-1,2));for(const u in c.to)c.obj[u]=c.from[u]+(c.to[u]-c.from[u])*l;(a=c.onUpdate)==null||a.call(c,c.obj),c.t>=c.dur&&(this.tweens.splice(o,1),c.res())}for(let o=this.particles.length-1;o>=0;o--){const c=this.particles[o],l=c.userData;l.life-=e,l.v.y+=l.g*e,c.position.addScaledVector(l.v,e),l.grow&&c.scale.addScalar(l.grow*e),c.material.opacity=Math.max(0,Math.min(1,l.life))*(l.grow?.5:1),l.life<=0&&(this.scene.remove(c),c.material.dispose(),this.particles.splice(o,1))}if(this.anchors.length)for(const o of this.anchors){const c=o.getObj();if(!c){o.el.style.opacity=0;continue}const l=this.screenOf(c,o.offsetY),u=o.el.firstElementChild,h=12,d=document.querySelector("#hud.show"),f=document.querySelector("#taskbar.show"),g=Math.max((d==null?void 0:d.getBoundingClientRect().bottom)||0,(f==null?void 0:f.getBoundingClientRect().bottom)||0,h)+12,v=document.querySelector("#panel.show"),m=v==null?void 0:v.getBoundingClientRect(),p=innerWidth>innerHeight&&innerHeight<=500&&m&&!v.classList.contains("hub-panel"),w=p?m.left-h:innerWidth,x=m&&!p?m.top-12:innerHeight-h;u.style.maxWidth=`${Math.min(360,w-h*2)}px`,u.style.maxHeight=`${Math.max(44,x-g)}px`;const S=u.offsetWidth,L=u.offsetHeight,C=Math.max(S/2+h,Math.min(w-S/2-h,l.x)),R=Math.max(g+L,Math.min(x,l.y));u.style.setProperty("--tail-x",`${Math.max(16,Math.min(S-16,l.x-C+S/2))}px`),o.el.style.opacity=l.behind?0:1,o.el.style.transform=`translate(${C}px, ${R}px)`}this.renderer.render(this.scene,this.camera)}}const jc=/([一-鿿々〆ヶ]+)\{([^}]+)\}/g;function _v(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function dn(i){return _v(i).replace(/\^/g,"").replace(/ /g,"").replace(jc,"<ruby>$1<rt>$2</rt></ruby>")}function vv(i){return i.replace(jc,"$1").replace(/\^/g,"").replace(/ /g,"")}function xv(i,{forSpeech:t=!1}={}){let e=i.replace(jc,"$2");return t&&(e=e.replace(/\^は/g,"わ").replace(/\^へ/g,"え")),e}function Ih(i){return vv(i)}const yv=96;function Mv(i){return i.replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-yv))}const Eu={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"o",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ゔ:"vu"},po={ゃ:"a",ゅ:"u",ょ:"o"},Tu={a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"};function Sv(i){let t=Mv(xv(i)),e="";for(let n=0;n<t.length;n++){const s=t[n],r=t[n+1];if(s==="^"){const o=t[n+1];if(o==="は"){e+="wa",n++;continue}if(o==="へ"){e+="e",n++;continue}continue}if(s==="っ"){const o=Eu[r];o&&(e+=o.startsWith("ch")?"t":o[0]);continue}if(s==="ー"){const o=e[e.length-1];Tu[o]&&(e=e.slice(0,-1)+Tu[o]);continue}let a=Eu[s];if(a===void 0){e+=s==="、"?", ":s==="。"?". ":s==="？"?"?":s==="！"?"!":s;continue}if(po[r]){const o=a.slice(0,-1);o==="sh"||o==="ch"||o==="j"?a=o+po[r]:a=o+"y"+po[r],n++}s==="ん"&&r&&/[あいうえおやゆよ]/.test(r)&&(a="n'"),e+=a}return e.replace(/\s+/g," ").trim()}function Xc(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Uh(i,t){return`${t}_${Xc(Ih(i))}`}const Nh="catcook_v1",_c={v:1,started:!1,level:1,xp:0,coins:0,served:0,shifts:0,firstDay:null,lastDay:null,streak:0,daysPlayed:0,lastGift:null,affection:0,lastPet:null,owned:["hat_chef"],wear:{hat:"hat_chef",neck:null},deco:[],stars:{},cooked:{},srs:{},restaurantDone:0,chapter:"home",chapterShifts:{},regularVisits:{},darkSecrets:{},settings:{furigana:!0,romaji:!0,yue:!0,subs:"show",bgm:!0,sfx:!0,shake:!0},jpLevel:null,lvStats:{},lvNudgeDismissed:-1,achievements:[]};let ie=bv();function bv(){try{const i=localStorage.getItem(Nh);if(i)return kh(structuredClone(_c),JSON.parse(i))}catch{}return structuredClone(_c)}function kh(i,t){for(const e in t)t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&i[e]&&typeof i[e]=="object"?kh(i[e],t[e]):i[e]=t[e];return i}function Te(){try{localStorage.setItem(Nh,JSON.stringify(ie))}catch{}}function lt(){return ie}function wv(){ie=structuredClone(_c),Te()}function Rs(){const i=new Date;return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`}function Ev(i,t){const e=i.split("-").map(Number),n=t.split("-").map(Number),s=new Date(e[0],e[1]-1,e[2]),r=new Date(n[0],n[1]-1,n[2]);return Math.round((r-s)/864e5)}function Tv(){const i=Rs(),t={newDay:!1,streakBroken:!1,gift:0};return ie.firstDay||(ie.firstDay=i),ie.lastDay!==i&&(t.newDay=!0,ie.lastDay&&Ev(ie.lastDay,i)===1?ie.streak+=1:(ie.lastDay&&ie.streak>1&&(t.streakBroken=!0),ie.streak=1),ie.lastDay=i,ie.daysPlayed+=1),ie.lastGift!==i&&ie.started&&(t.gift=30+Math.min(ie.streak,7)*10,ie.lastGift=i,ie.coins+=t.gift),Te(),t}function Av(){const i=new Date;return new Date(i.getFullYear(),i.getMonth(),i.getDate()+1)-i}const Au=[0,30,80,160,270,420,620,880,1200,1600,2100];function vc(i){return Au[Math.min(i,Au.length-1)]??i*500}function qc(i){ie.xp+=i;let t=0;for(;ie.xp>=vc(ie.level);)ie.level++,t++;return Te(),t}const Rv=[0,2,10,60*12,60*24*2,60*24*5];function Pn(i){ie.srs[i]||(ie.srs[i]={box:0,due:Date.now(),seen:0,right:0,wrong:0}),ie.srs[i].seen++,Te()}function Ue(i,t){const e=ie.srs[i]||(ie.srs[i]={box:0,due:0,seen:1,right:0,wrong:0});t?(e.box=Math.min(e.box+1,5),e.right++):(e.box=0,e.wrong++),e.due=Date.now()+Rv[e.box]*6e4,Te()}function $c(i){var n;const t=Date.now(),e=i.map(s=>{const r=ie.srs[s];if(!r)return{id:s,s:50+Math.random()*10};const a=(t-r.due)/6e4;return{id:s,s:(a>=0?100+Math.min(a,60):-10)+(5-r.box)*8+r.wrong*3+Math.random()*10}});return e.sort((s,r)=>r.s-s.s),(n=e[0])==null?void 0:n.id}function xc(){return Object.values(ie.srs).filter(i=>i.box>=2).length}function Cv(){return Object.keys(ie.srs).length}let kt=null,ds,Ys,Qn,na;const mo=new Map;let ys=null;const Fh=.26,Pv=.08;let lr=null,ia=null;function Lv(i){ia=i}function Dv(){if(kt){kt.state==="suspended"&&kt.resume();return}kt=new(window.AudioContext||window.webkitAudioContext),ds=kt.createGain(),ds.gain.value=.9,ds.connect(kt.destination),Ys=kt.createGain(),Ys.gain.value=.5,Ys.connect(ds),Qn=kt.createGain(),Qn.gain.value=0,Qn.connect(ds),Nv(),na=kt.createGain(),na.gain.value=1,na.connect(ds),Bv(),document.addEventListener("visibilitychange",()=>{kt&&(document.hidden?kt.suspend():kt.resume())})}async function Oh(i){if(mo.has(i))return mo.get(i);const t=fetch(`./audio/${i}.mp3`).then(e=>{if(!e.ok)throw new Error("404");return e.arrayBuffer()}).then(e=>kt.decodeAudioData(e)).catch(()=>null);return mo.set(i,t),t}function go(i,t){return kt?Oh(Uh(i,t)):Promise.resolve(null)}async function Ne(i,t="word",e=1){if(!kt)return;Iv();const n=await Oh(Uh(i,t));if(n){const s=kt.createBufferSource();return s.buffer=n,s.playbackRate.value=e,s.connect(na),Ru(!0),s.start(),ys=s,new Promise(r=>{s.onended=()=>{Ru(!1),ys===s&&(ys=null),r()}})}if("speechSynthesis"in window){const s=new SpeechSynthesisUtterance(Ih(i));return s.lang="ja-JP",s.rate=.9*e,speechSynthesis.speak(s),new Promise(r=>{s.onend=r,setTimeout(r,4e3)})}}function Iv(){if(ys){try{ys.stop()}catch{}ys=null}"speechSynthesis"in window&&speechSynthesis.cancel()}function Ru(i){!Qn||!lt().settings.bgm||Qn.gain.setTargetAtTime(i?Pv:Fh,kt.currentTime,.1)}function Oe(i,t,{type:e="sine",vol:n=.3,at:s=0,slide:r=0,out:a=null}={}){const o=kt.currentTime+s,c=kt.createOscillator(),l=kt.createGain();c.type=e,c.frequency.setValueAtTime(i,o),r&&c.frequency.exponentialRampToValueAtTime(i*r,o+t),l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(.001,o+t),c.connect(l),l.connect(a||Ys),c.start(o),c.stop(o+t+.05)}function _o(i,{vol:t=.3,freq:e=2e3,q:n=1,at:s=0,type:r="bandpass"}={}){const a=kt.currentTime+s,o=Math.floor(kt.sampleRate*i),c=kt.createBuffer(1,o,kt.sampleRate),l=c.getChannelData(0);for(let f=0;f<o;f++)l[f]=(Math.random()*2-1)*(1-f/o);const u=kt.createBufferSource();u.buffer=c;const h=kt.createBiquadFilter();h.type=r,h.frequency.value=e,h.Q.value=n;const d=kt.createGain();d.gain.value=t,u.connect(h),h.connect(d),d.connect(Ys),u.start(a)}function ut(i){if(ia==null||ia(i),!(!kt||!lt().settings.sfx))switch(i){case"tap":Oe(880,.08,{type:"triangle",vol:.2});break;case"good":Oe(784,.12,{type:"triangle"}),Oe(1175,.2,{type:"triangle",at:.08});break;case"perfect":[784,988,1175,1568].forEach((t,e)=>Oe(t,.18,{type:"triangle",vol:.25,at:e*.06}));break;case"bad":Oe(220,.25,{type:"square",vol:.12,slide:.7});break;case"coin":Oe(1319,.08,{type:"square",vol:.1}),Oe(1760,.25,{type:"square",vol:.1,at:.07});break;case"chop":_o(.08,{vol:.6,freq:3e3,q:.8}),Oe(140,.06,{vol:.3});break;case"pop":Oe(500,.1,{slide:2,vol:.25});break;case"bubble":Oe(300+Math.random()*300,.08,{slide:1.8,vol:.12});break;case"whoosh":_o(.3,{vol:.25,freq:800,q:.5});break;case"boil":for(let t=0;t<4;t++)Oe(200+Math.random()*200,.1,{slide:2,vol:.1,at:t*.07});break;case"level":[523,659,784,1047,1319,1568].forEach((t,e)=>Oe(t,.3,{type:"triangle",vol:.22,at:e*.09}));break;case"meow":Oe(700,.35,{type:"sawtooth",vol:.06,slide:1.4}),Oe(980,.3,{type:"sine",vol:.1,at:.15,slide:.6});break;case"purr":for(let t=0;t<10;t++)_o(.05,{vol:.25,freq:120,q:2,at:t*.07,type:"lowpass"});break;case"door":Oe(1568,.5,{vol:.12}),Oe(1975,.6,{vol:.1,at:.15});break;case"rare":[1047,1319,1568,2093,1568,2093].forEach((t,e)=>Oe(t,.25,{type:"triangle",vol:.2,at:e*.07}));break}}const Ws=i=>440*Math.pow(2,(i-69)/12),Uv=[{root:38,chord:[62,66,69,73],mel:[74,76,78,81,73]},{root:35,chord:[59,62,66,69],mel:[74,76,78,81,71]},{root:43,chord:[59,62,67,71],mel:[74,71,76,78,79]},{root:45,chord:[62,64,67,69],mel:[76,74,69,81,79]}],Bh={kitchen:{bpm:78,arp:.55,mel:.5,perc:0,pad:1,oct:0},cook:{bpm:102,arp:.8,mel:.55,perc:1,pad:.6,oct:0},rest:{bpm:68,arp:.35,mel:.6,perc:0,pad:1.2,oct:0}};let Cu="kitchen",zh="kitchen",Pi=0,vo=0,Pu=[];function Nv(){const i=kt.createBiquadFilter();i.type="lowpass",i.frequency.value=3400,i.Q.value=.3;const t=kt.createGain();t.gain.value=.85;const e=kt.createConvolver(),n=Math.floor(kt.sampleRate*1.8),s=kt.createBuffer(2,n,kt.sampleRate);for(let a=0;a<2;a++){const o=s.getChannelData(a);for(let c=0;c<n;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/n,2.6)}e.buffer=s;const r=kt.createGain();r.gain.value=.35,i.connect(t),t.connect(Qn),i.connect(e),e.connect(r),r.connect(Qn),lr=i}function Lu(i,t,e,n){for(const[s,r,a,o]of[[1,1,"triangle",e],[2,.25,"sine",e*.5],[4,.06,"sine",e*.2]]){const c=kt.createOscillator(),l=kt.createGain();c.type=a,c.frequency.value=i*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(n*r,t+.008),l.gain.exponentialRampToValueAtTime(5e-4,t+o),c.connect(l),l.connect(lr),c.start(t),c.stop(t+o+.05)}}function kv(i,t,e,n){const s=kt.createOscillator(),r=kt.createGain();s.type="sine",s.frequency.value=i,s.detune.value=(Math.random()-.5)*8,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(n,t+e*.35),r.gain.linearRampToValueAtTime(5e-4,t+e),s.connect(r),r.connect(lr),s.start(t),s.stop(t+e+.05)}function xo(i,t,e,n){const s=kt.createOscillator(),r=kt.createGain();s.type="sine",s.frequency.value=i,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(n,t+.02),r.gain.exponentialRampToValueAtTime(5e-4,t+e),s.connect(r),r.connect(lr),s.start(t),s.stop(t+e+.05)}function Fv(i,t,e=!1){const n=kt.createOscillator(),s=kt.createGain();n.type="sine",n.frequency.setValueAtTime(e?1500:1e3,i),n.frequency.exponentialRampToValueAtTime(e?900:600,i+.05),s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(5e-4,i+.07),n.connect(s),s.connect(lr),n.start(i),n.stop(i+.1)}function Ov(i){const t=Bh[Cu],e=30/t.bpm,n=Math.floor(vo/8)%4,s=vo%8,r=Uv[n];if(s===0&&(Cu=zh,xo(Ws(r.root),i,e*7,.55),r.chord.forEach((o,c)=>kv(Ws(o-12),i+c*.03,e*8.5,.07*t.pad))),s===4&&xo(Ws(r.root+7),i,e*3,.35),[0,2,3,5,6,7].includes(s)&&Math.random()<t.arp+(s===0?1:0)){const o=r.chord[(s*3+n)%r.chord.length];Lu(Ws(o),i,e*4,.16)}if(s%2===0||s===3||s===7){let o=null;n%2===0?((Math.random()<t.mel||s===0)&&(o=r.mel[Math.floor(Math.random()*r.mel.length)]),Pu[s]=o):(o=Pu[s]??null,o!=null&&Math.random()<.2&&(o=r.mel[Math.floor(Math.random()*r.mel.length)])),o!=null&&Lu(Ws(o),i,e*3,.2)}return t.perc&&(s%2===1&&Fv(i,.09,s===3||s===7),(s===0||s===4)&&xo(70,i,.12,.5)),vo++,e}function Bv(){Pi=kt.currentTime+.2,setInterval(()=>{if(!document.hidden)for(Pi<kt.currentTime-.5&&(Pi=kt.currentTime+.1);Pi<kt.currentTime+.25;)lt().settings.bgm?Pi+=Ov(Pi):Pi+=.25},80),Hh(lt().settings.bgm)}function Hh(i){Qn&&Qn.gain.setTargetAtTime(i?Fh:0,kt.currentTime,.3)}function zv(i){Bh[i]&&(zh=i)}const se=(i,t=document)=>t.querySelector(i);function E(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))s==="class"?n.className=r:s==="html"?n.innerHTML=r:s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r);for(const s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return pa(n),n}function Yc(){const i=lt().settings;document.body.classList.toggle("no-furi",!i.furigana),document.body.classList.toggle("no-roma",!i.romaji),document.body.classList.toggle("no-yue",!i.yue),document.body.classList.toggle("large-text",!!i.largeText)}function Bn(i,{yue:t="",voice:e="word",size:n="",hidden:s=!1,autoplay:r=!1}={}){const a=E("div",{class:`jp ${n}`}),o=E("div",{class:"jp-text",html:dn(i)}),c=E("div",{class:"jp-roma"},Sv(i)),l=t?E("div",{class:"jp-yue"},t):null,u=E("button",{class:"spk","aria-label":"再聽",onclick:d=>{d.stopPropagation(),ut("tap"),Ne(i,e)}},"🔊"),h=E("div",{class:"jp-body"},o,c,l);return a.append(h,u),s&&(a.classList.add("veiled"),h.addEventListener("click",()=>a.classList.remove("veiled"),{once:!0})),r&&Ne(i,e),a}function _i(){const i=lt();se("#lv").textContent=i.level;const t=vc(i.level-1),e=vc(i.level);se("#xpbar i").style.width=`${Math.max(0,Math.min(1,(i.xp-t)/(e-t)))*100}%`,se("#coins b").textContent=i.coins,se("#streak b").textContent=i.streak,se("#streak").classList.toggle("hot",i.streak>=2)}function Vh(i){se("#hud").classList.toggle("show",i)}function pn(...i){const t=se("#panel");return t.innerHTML="",t.classList.remove("hub-panel"),t.scrollTop=0,t.append(...i.flat().filter(e=>e!=null&&e!==!1)),t.classList.add("show"),t}function Bi(){se("#panel").classList.remove("show")}function Qe(i,{title:t=null,cols:e=1,extra:n=null}={}){return new Promise(s=>{const r=E("div",{class:`choices cols${e}`});let a=!1;i.forEach(o=>{const c=E("button",{class:`choice ${o.cls||""}`,type:"button"});o.el?c.append(o.el):(c.innerHTML=o.label,pa(c)),c.addEventListener("click",()=>{a||(a=!0,ut("tap"),s({value:o.value,button:c,grid:r}))}),r.append(c)}),pn(...[t,n,r].filter(Boolean))})}function Kc(i="繼續 ▶",...t){return new Promise(e=>{const n=E("button",{class:"btn primary big",onclick:()=>{ut("tap"),e()}},i);pn(...t,n)})}const yc=new Set;function de(i,t,e,n,s,{hidden:r=!1,play:a=!0}={}){ve(t);const o=E("div",{class:`bubble ${t}`});o.append(Bn(e,{yue:n,voice:s,hidden:r}));const c=E("div",{class:"bubble-anchor","data-who":t},o);se("#bubbles").append(c),yc.add(c),c._world=i;const l=t==="cat"?()=>i.cat.head:()=>{var u;return(u=i.customer)==null?void 0:u.userData.head};return i.anchor(c,l,t==="cat"?.75:.5),requestAnimationFrame(()=>o.classList.add("in")),a?(t==="cat"&&i.cat.setMode("talk"),Ne(e,s).then(async()=>{await le(),t==="cat"&&i.cat.mode==="talk"&&i.cat.setMode("idle")})):Promise.resolve()}function ve(i){for(const t of[...yc])(!i||t.dataset.who===i)&&(t._world.unanchor(t),t.remove(),yc.delete(t))}function Ge(i,t=2600){const e=se("#hint");e.textContent=i,e.classList.add("show"),clearTimeout(e._t),t&&(e._t=setTimeout(()=>e.classList.remove("show"),t))}function Hv(){se("#hint").classList.remove("show")}function ni(i,t=2200,e=""){const n=E("div",{class:`toast ${e}`,html:i});se("#toasts").append(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+500)}function en(i,t=""){const e=E("div",{class:`popword ${t}`},i);document.body.append(e),setTimeout(()=>e.remove(),900)}function ur(i,t={x:innerWidth/2,y:innerHeight*.4}){const e=se("#coins").getBoundingClientRect(),n=Math.min(12,Math.max(3,Math.round(i/15)));for(let s=0;s<n;s++){const r=E("div",{class:"flycoin"},"🪙");r.style.left=t.x+"px",r.style.top=t.y+"px",document.body.append(r);const a=(Math.random()-.5)*120,o=-40-Math.random()*60;r.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${a}px,${o}px) scale(1.3)`,offset:.35},{transform:`translate(${e.x+10-t.x}px,${e.y+8-t.y}px) scale(0.6)`}],{duration:700+s*60,easing:"cubic-bezier(.5,0,.6,1)"}).onfinish=()=>{r.remove(),ut("coin"),se("#coins").classList.remove("bump"),se("#coins").offsetWidth,se("#coins").classList.add("bump")}}}function vi(i,t,{onClose:e=null,wide:n=!1,footer:s=null}={}){const r=se("#modal");ra("modal",!0),r.innerHTML="";let a=!1;const o=()=>{a||(a=!0,r.classList.remove("show"),ra("modal",!1),e==null||e())};r._close=o;const c=E("div",{class:`card ${n?"wide":""}`},E("div",{class:"card-head"},E("h2",{html:i}),E("button",{class:"x","aria-label":"關閉",onclick:()=>{ut("tap"),o()}},"✕")),E("div",{class:"card-body"},t),s?E("div",{class:"card-footer"},s):null);return pa(c),r.append(c),r.classList.add("show"),r.onclick=l=>{l.target===r&&o()},{close:o,card:c}}function Gh(){var i,t;(t=(i=se("#modal"))._close)==null||t.call(i)}function Vv(i,t){const e=se("#taskbar");e.replaceChildren(E("button",{class:"mission-btn",onclick:()=>vi("📋 今次任務",E("p",{class:"mission-details"},t))},`📋 ${i} · 詳情`)),e.classList.add("show")}function jr(i){const t=se("#fade");return t.classList.add("on"),le(520).then(async()=>{await i(),await le(80),t.classList.remove("on"),await le(520)})}function fn(i){i=[...i];for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}const fs=i=>i[Math.floor(Math.random()*i.length)],kn=[{id:"onigiri",dish:"onigiri",price:120,unlock:{level:1},station:"board",serves:"2 個",time:"10 分鐘",ingredients:[["gohan","熱白飯 1 碗（約 150g）"],["shio","鹽 少少（一撮）"],["umeboshi","酸梅 1 粒（或三文魚碎）"],["nori","紫菜 1 塊（剪半）"],["mizu","凍水 少少（濕手用）"]],howto:["雙手沾水，再喺手掌抹少少鹽。","攞一半飯放手心，中間整個窿，放酸梅。","用另一半飯蓋住，雙手合埋輕輕揸，轉 3–4 次整成三角形。","唔好揸太實！外實內鬆先好食。","最後包上紫菜。想紫菜脆，食之前先包。"],steps:[{type:"pick",need:["gohan","shio","umeboshi","nori"],decoys:["tofu","tamago","negi"],jp:"まず 材料{ざいりょう}を 選{えら}んでにゃ",yue:"首先揀材料喵",tip:"聽讀音，揀啱嘅材料。"},{type:"mash",taps:10,time:5,anim:"press",verb:"nigiru",add:["onigiri_raw"],jp:"三角{さんかく}に 握{にぎ}って",yue:"揸成三角形",tip:"狂撳！但真係整嘅時候要輕力，外實內鬆。"},{type:"timing",rounds:1,zone:.24,anim:"wrap",verb:"noseru",jp:"海苔{のり}を 巻{ま}いて",yue:"包紫菜",tip:"撳準！紫菜要喺中間。"}]},{id:"misoshiru",dish:"misoshiru",price:150,unlock:{level:2},station:"pot",serves:"2 碗",time:"10 分鐘",ingredients:[["mizu","水 400ml"],["dashi","日式高湯粉 1 茶匙（或昆布 + 木魚自己煲）"],["tofu","豆腐 半盒（約 150g）"],["wakame","乾海帶芽 1 湯匙"],["miso","味噌 2 湯匙"],["negi","蔥 少少"]],howto:["水同高湯粉落煲，中火煮滾。","豆腐切 1.5cm 粒，同海帶芽一齊落，煮 1 分鐘。","熄火！用湯殼盛味噌，喺湯入面慢慢攪溶。","重點：味噌落咗之後唔好再滾，滾咗香味會走晒。","最後灑蔥花。"],steps:[{type:"pick",need:["dashi","tofu","wakame","miso"],decoys:["gohan","shoyu","chashu"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"高湯係日本菜嘅靈魂。"},{type:"timing",rounds:3,zone:.2,anim:"chop",verb:"kiru",add:["tofu_cubes"],jp:"豆腐{とうふ}を 切{き}って",yue:"切豆腐",tip:"撳準綠色位，切 3 刀。"},{type:"hold",zone:[.55,.8],anim:"stir",verb:"tokasu",add:["miso_soup"],jp:"火{ひ}を 止{と}めて、味噌{みそ}を 溶{と}かして",yue:"熄火，溶味噌",tip:"長按加熱，喺綠色位放手。太熱 = 滾瀉，味噌香味會走！"}]},{id:"oyakodon",dish:"oyakodon",price:280,unlock:{level:3},station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["toriniku","雞髀肉 100g"],["tamanegi","洋蔥 1/4 個"],["tamago","雞蛋 2 隻"],["dashi","高湯 60ml"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"],["satou","砂糖 1 茶匙"],["gohan","熱白飯 1 碗"]],howto:["雞肉切一口大小，洋蔥切薄片。","細平底鑊落高湯、豉油、味醂、砂糖，煮滾。","落洋蔥同雞肉，中火煮 5 分鐘至熟。","雞蛋輕輕打散（唔好打太勻），淋 2/3 落去，冚蓋 30 秒。","再淋餘下蛋液，半熟就熄火，即刻滑落飯面。"],steps:[{type:"pick",need:["toriniku","tamanegi","tamago","shoyu"],decoys:["tofu","nori","moyashi"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"親子 = 雞（親）+ 蛋（子），幾得意。"},{type:"timing",rounds:3,zone:.18,anim:"chop",verb:"kiru",add:["chicken_pieces"],jp:"鶏肉{とりにく}を 切{き}って",yue:"切雞肉",tip:"一口大小就啱。"},{type:"stir",turns:3,anim:"stir",verb:"niru",add:["pan_simmer"],jp:"だしで 煮{に}て",yue:"用高湯煮",tip:"手指喺圓圈度轉圈！"},{type:"hold",zone:[.4,.62],anim:"pour",verb:"tamago",add:["oyako_egg"],jp:"卵{たまご}を 入{い}れて、半熟{はんじゅく}に",yue:"落蛋，要半熟",tip:"半熟先好食，唔好煮過龍！"}]},{id:"ramen",dish:"ramen",price:380,unlock:{day:2},station:"pot",serves:"1 碗",time:"20 分鐘（簡易版）",ingredients:[["men","拉麵（新鮮或乾麵）1 份"],["dashi","雞湯 300ml"],["shoyu","豉油 2 湯匙"],["mirin","味醂 1 茶匙"],["ninniku","蒜頭 1 粒（磨蓉）"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥、紫菜 適量"]],howto:["湯底：雞湯加蒜蓉煮滾，熄火。","碗底先落豉油同味醂（呢個叫「タレ」）。","另一煲大滾水烚麵，跟包裝時間（通常 1–2 分鐘）。","熱湯沖入碗攪勻，麵瀝乾放入碗。","鋪叉燒、半隻溏心蛋（滾水 6.5 分鐘再浸冰水）、蔥同紫菜。"],steps:[{type:"pick",need:["men","chashu","tamago","negi"],decoys:["tofu","umeboshi","satou"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"拉麵嘅配料叫「トッピング」。"},{type:"hold",zone:[.6,.85],anim:"stir",verb:"yuderu",add:["ramen_boil"],jp:"麺{めん}を ゆでて",yue:"烚麵",tip:"水要大滾！"},{type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"スープを 混{ま}ぜて",yue:"攪勻湯",tip:"湯同タレ要撈勻。"},{type:"timing",rounds:2,zone:.18,anim:"chop",verb:"noseru",jp:"トッピングを のせて",yue:"放配料",tip:"靚唔靚就睇呢步！"}]}];kn.push(...Rh,...gs);const Du=[{id:"tempura",emoji:"🍤",jp:"天{てん}ぷら",yue:"天婦羅"},{id:"sushi",emoji:"🍣",jp:"お寿司{すし}",yue:"壽司"},{id:"curry",emoji:"🍛",jp:"カレーライス",yue:"咖喱飯"},{id:"gyoza",emoji:"🥟",jp:"餃子{ぎょうざ}",yue:"餃子"},{id:"tamagoyaki",emoji:"🍳",jp:"卵焼{たまごや}き",yue:"玉子燒"}];function Gv(i){return kn.find(t=>t.id===i)}async function Wv(i,t){const e=(o,c)=>Qe(o.map(l=>({value:l,label:`${l.icon} ${l.label}`})),{title:E("div",{class:"panel-title"},c)}),n=(await e(rv,"① 揀餐具：排場由呢度開始")).value,s=(await e(av,"② 擺盤：最後一點點綴")).value;t.styleDish(n.id,s.id);const r=["honest","mild","grand"].map(o=>{const c=Ph(i,o);return{value:o,el:E("div",{},E("b",{class:"jp-inline",html:dn(c.jp)}),E("small",{},`${fa[o].label} · 收入 x${fa[o].mult}`))}}),a=(await Qe(r,{title:E("div",{class:"panel-title"},"③ 跟客人點介紹？（客人照你講嘅名睇）")})).value;return{plate:n,garnish:s,pitch:a}}function jv(i,t,e){return{...ov(t,e.plate,e.garnish,e.pitch),plate:e.plate.id,garnish:e.garnish.id,pitch:e.pitch,outcome:"none"}}function Xv(i,t,e){return Math.max(.05,(e==="bluff"?.8:.45)-t*.25-(i==="grand"?.15:0))}const qv={none:"冇人追問",honest:"老實交代，客人原諒",believe:"成功蒙混過關",expose:"被揭穿，今晚白做"};function Wh(i,t){const e=Ph(i,t.pitch);return E("div",{class:"dark-report","data-secret":i.id},E("div",{class:"dark-tag"},`後廚秘密 ${i.number} · ${i.shortcut}`),E("div",{class:"dark-dish-heading"},ti(`dish_${i.id}`,i.yue),E("h3",{},i.yue)),E("div",{class:"dark-scores"},...[["好味",t.taste],["賣相",t.look],["宣傳誇張度",t.hype]].map(([n,s])=>E("div",{},E("b",{},`${s}`),E("span",{},n)))),E("p",{},`你講嘅菜名：${e.yue}`),E("p",{},`結果：${qv[t.outcome]||""}`),E("p",{class:"dark-truth"},`真正做法：${i.truth}`),E("p",{},i.gag),Bn("中身{なかみ}は？",{yue:i.lesson,voice:"word"}))}async function $v(i,t){ut("rare");const e=lt().darkSecrets[i.id];lt().darkSecrets[i.id]={...t,bestTaste:Math.max((e==null?void 0:e.bestTaste)||0,t.taste),visits:((e==null?void 0:e.visits)||0)+1},Te(),await new Promise(n=>{const s=E("button",{class:"btn primary big dark-control",onclick:()=>r.close()},"收低秘密卡，繼續出餐"),r=vi("主廚秘密揭曉",E("div",{},Wh(i,t),E("div",{class:"sub"},"越浮誇收入越高，但被揭穿就一毫都冇。")),{footer:s,onClose:n})})}const Jc={suspicion:0},Yv=()=>{Jc.suspicion=0},Cs=[{id:0,icon:"🌱",name:"零基礎",desc:"假名都未識"},{id:1,icon:"🌿",name:"初學",desc:"識假名、簡單字（N5–N4）"},{id:2,icon:"🌳",name:"N3 或以上",desc:"想練聽力同實用句子"}],Iu=["usagi","kuma"],ke=()=>Math.max(0,Math.min(2,lt().jpLevel??0)),Kv=i=>Iu[parseInt(Xc(i),36)%Iu.length],vn=(i,t)=>t.lv>0||t.hi?Kv(i):i;function Zc(){const i=ke();return i===0||Math.random()<.6?i:Math.floor(Math.random()*i)}const Gi=new Set,jh=()=>Gi.clear(),Uu=i=>i.key||i.jp;function qn(i,t=Math.random){const e=ke(),n=i.filter(l=>(l.lv??0)<=e),s=Zc(),r=n.filter(l=>(l.lv??0)===s),a=l=>l.filter(u=>!Gi.has(Uu(u))),o=[a(r),a(n),r,n].find(l=>l.length)||i,c=o[Math.floor(t()*o.length)];return Gi.add(Uu(c)),c}function hr(i,t){var r;if(i!==ke())return;const e=(r=lt()).lvStats||(r.lvStats={}),n=e[i]||(e[i]={right:0,total:0,days:[]});n.total++,t&&n.right++;const s=Rs();n.days||(n.days=[]),n.days.includes(s)||n.days.push(s),Te()}function Jv(){var e,n;const i=ke();if(i>=2)return null;const t=(e=lt().lvStats)==null?void 0:e[i];return!t||t.total<15||t.right/t.total<.8||(((n=t.days)==null?void 0:n.length)??0)<2||(lt().lvNudgeDismissed??-1)>=i?null:{from:i,to:i+1,rate:Math.round(t.right/t.total*100),total:t.total}}const Zv=[{lv:0,jp:"{dish}を ください",yue:"唔該畀{dishYue}我"},{lv:0,jp:"{dish}を お願{ねが}いします",yue:"麻煩你，{dishYue}"},{lv:0,hi:!0,jp:"{dish}、 ください",yue:"唔該，{dishYue}"},{lv:1,jp:"すみません、{dish}を ください",yue:"唔好意思，我要{dishYue}"},{lv:1,jp:"すみません、 {dish}は ありますか？",yue:"唔好意思，有冇{dishYue}？"},{lv:1,jp:"{dish}を お願{ねが}いできますか？",yue:"可唔可以幫我整{dishYue}？"},{lv:2,jp:"今日{きょう}は {dish}に しようかな",yue:"今日食{dishYue}好喇"},{lv:2,jp:"{dish}って、 すぐ できますか？",yue:"{dishYue}係咪好快有得食？"},{lv:2,jp:"メニューを 見{み}て… {dish}に します",yue:"睇完餐牌…我要{dishYue}"}],Qv=[{lv:0,jp:"{dish}を {num} ください",yue:"唔該{numYue}{dishYue}"},{lv:0,jp:"{dish}、{num} お願{ねが}いします",yue:"{dishYue}，{numYue}，唔該"},{lv:1,jp:"{dish}を {num} お願{ねが}いできますか？",yue:"可唔可以幫我整{numYue}{dishYue}？"},{lv:2,jp:"{dish}は {num}で お願{ねが}いします",yue:"{dishYue}要{numYue}，唔該"}],Ni={great:[{lv:0,jp:"おいしい！",yue:"好好食！"},{lv:0,jp:"すごく おいしいです！",yue:"超好食！"},{lv:0,jp:"最高{さいこう}！",yue:"一流！"},{lv:1,jp:"味{あじ}が ちょうど いいです",yue:"味道啱啱好"},{lv:1,jp:"本当{ほんとう}に おいしいです！",yue:"真係好好食！"},{lv:1,jp:"これ、 大好{だいす}きな 味{あじ}です",yue:"呢個係我最鍾意嘅味道"},{lv:2,jp:"優{やさ}しい 味{あじ}で、 ほっとしますね",yue:"味道好溫和，食完好放鬆"},{lv:2,jp:"見{み}た目{め}も きれいで、 食{た}べるのが もったいないです",yue:"賣相咁靚，食咗好唔捨得"},{lv:2,jp:"一口{ひとくち}食{た}べただけで、 幸{しあわ}せな 気持{きも}ちに なりました",yue:"食一啖已經覺得好幸福"}],ok:[{lv:0,jp:"うん、おいしいです",yue:"嗯，幾好食"},{lv:0,hi:!0,jp:"おいしいです",yue:"好食"},{lv:1,jp:"まあまあ おいしいです",yue:"幾好食，都ok"},{lv:1,jp:"なかなか おいしいです",yue:"相當好食"},{lv:2,jp:"なかなか いけますね",yue:"都幾唔錯喎"},{lv:2,jp:"悪{わる}くない 味{あじ}ですね",yue:"味道唔差喎"}],meh:[{lv:0,hi:!0,jp:"うーん、 ちょっと…",yue:"嗯…有啲…"},{lv:1,jp:"もう ちょっと 味{あじ}が ほしいです",yue:"想味道再濃啲"},{lv:2,jp:"もう 少{すこ}し 味{あじ}が はっきり していると いいですね",yue:"味道再突出啲就好喇"}],wrong:[{lv:0,jp:"あれ？ これじゃないです",yue:"咦？唔係呢個喎"},{lv:1,jp:"これ、 頼{たの}んでいません",yue:"呢個我冇叫"},{lv:2,jp:"すみません、 注文{ちゅうもん}したのは これじゃなかったと 思{おも}うんですが",yue:"唔好意思，我諗我叫嘅唔係呢個"}],bye:[{key:"gochisousama",lv:0,jp:"ごちそうさまでした！",yue:"多謝款待！"},{key:"matta",lv:0,jp:"また 来{き}ます！",yue:"我會再嚟！"},{key:"oishikatta",lv:0,hi:!0,jp:"美味{おい}しかったです！",yue:"好好食呀！"},{key:"arigatou",lv:0,hi:!0,jp:"ありがとうございました！",yue:"多謝晒！"},{key:"okaikei",lv:1,jp:"お会計{かいけい}、 お願{ねが}いします。 ごちそうさまでした",yue:"唔該埋單，多謝款待"},{key:"by_tomodachi",lv:1,jp:"とても おいしかったです。 また 友達{ともだち}と 来{き}ます！",yue:"好好食，下次同朋友嚟！"},{key:"by_mata",lv:1,jp:"また 近{ちか}いうちに 来{き}ますね",yue:"好快會再嚟"},{key:"by_chikaku",lv:2,jp:"この 近{ちか}くに 来{き}たら、 また 寄{よ}らせてもらいます",yue:"之後行經附近，我會再嚟"},{key:"by_tsurete",lv:2,jp:"今度{こんど}は 家族{かぞく}も 連{つ}れて 来{き}ますね",yue:"下次帶埋家人嚟"},{key:"by_gochisou2",lv:2,jp:"今日{きょう}は ごちそうさまでした。 どれも 本当{ほんとう}に おいしかったです",yue:"今日多謝款待，每樣都真係好好食"}]},tn={wake:{jp:"ふわぁ… おはようにゃ！",yue:"呵～早晨喵！"},intro:{jp:"ぼくは クロ。この 店{みせ}の シェフにゃ",yue:"我叫小黑（クロ），係呢間店嘅廚師喵"},irasshai:{jp:"いらっしゃいませ！",yue:"歡迎光臨！"},done:{jp:"できたにゃ！",yue:"整好喇喵！"},purr:{jp:"ごろごろ…",yue:"（呼嚕呼嚕⋯）"},levelup:{jp:"レベルアップにゃ！",yue:"升級喇喵！"},newRecipe:{jp:"新{あたら}しい レシピにゃ！",yue:"新食譜喵！"}},$t=(i,t,e,n,s)=>({key:i,lv:t,ch:e,jp:n,yue:s,hi:!0}),ya=[{key:"oishii",lv:0,ch:"any",jp:"この 店{みせ}、おいしいですね",yue:"呢間店好好食喎"},{key:"atsui",lv:0,ch:"any",jp:"わあ、熱{あつ}い！",yue:"嘩，好熱！"},{key:"sumimasen",lv:0,ch:"any",jp:"すみません！",yue:"唔好意思！"},$t("st_osusume",0,"home","おすすめは？","有咩推介？"),$t("st_nioi",0,"home","いい におい！","好香呀！"),$t("st_mizu",0,"any","お水{みず}、 ください","唔該畀杯水"),$t("st_toire",0,"any","トイレは どこですか？","洗手間喺邊？"),$t("st_kanpai",0,"izakaya","乾杯{かんぱい}！","乾杯！"),$t("st_toriaezu",0,"izakaya","とりあえず ビール！","總之先嚟啤酒！"),$t("st_hot",0,"cafe","ホット、 お願{ねが}いします","要熱嘅，唔該"),$t("st_ice",0,"cafe","アイス、 お願{ねが}いします","要凍嘅，唔該"),$t("st_nani",0,"dark","これ、 なに？","呢個係咩嚟？"),$t("st_tezukuri",0,"dark","手作{てづく}り？","自家製？"),$t("st_shizuka",1,"any","この 店{みせ}、 静{しず}かで いいですね","呢間舖頭好靜，好舒服"),$t("st_hajimete",1,"any","ここは 初{はじ}めてです","我第一次嚟呢度"),$t("st_haitte",1,"any","これには 何{なに}が 入{はい}っていますか？","呢個入面有啲咩？"),$t("st_kyou",1,"any","今日{きょう}は 暑{あつ}いですね","今日好熱呀"),$t("st_suwaru",1,"home","ここ、 座{すわ}っても いいですか？","呢度可以坐嗎？"),$t("st_sukuname",1,"home","ご飯{はん}、 少{すく}なめに できますか？","飯可唔可以少啲？"),$t("st_okawari",1,"home","おかわり、 いいですか？","可以添飯嗎？"),$t("st_dashi",1,"home","この 味噌汁{みそしる}、 何{なん}の だしですか？","呢碗味噌湯用咩熬底？"),$t("st_lastorder",1,"izakaya","ラストオーダーは 何時{なんじ}ですか？","最後落單係幾點？"),$t("st_nama",1,"izakaya","生{なま}ビール、 もう 一杯{いっぱい}","生啤再嚟一杯"),$t("st_satou_nashi",1,"cafe","砂糖{さとう}なしで お願{ねが}いします","唔該走糖"),$t("st_milk_ooi",1,"cafe","ミルクを 多{おお}めに できますか？","可唔可以多奶？"),$t("st_tsukuru",1,"dark","これは お店{みせ}で 作{つく}りましたか？","呢個係咪舖頭自己整？"),$t("st_nikomi",1,"dark","どのくらい 煮込{にこ}みましたか？","燉咗幾耐？"),$t("st_mae",2,"any","この 店{みせ}、 前{まえ}から 来{き}てみたかったんです","呢間舖我想嚟好耐㗎喇"),$t("st_hitori",2,"any","一人{ひとり}でも 入{はい}りやすい お店{みせ}ですね","一個人入嚟都冇壓力"),$t("st_susume",2,"any","友達{ともだち}に すすめられて 来{き}ました","朋友推介我嚟"),$t("st_fun",2,"any","雰囲気{ふんいき}が 落{お}ち着{つ}いていて いいですね","氣氛好舒服，好寧靜"),$t("st_ryou",2,"home","値段{ねだん}の わりに、 量{りょう}が 多{おお}くて 驚{おどろ}きました","價錢計，份量多到嚇親"),$t("st_tezukuri2",2,"home","これ、 全部{ぜんぶ} 手作{てづく}りなんですか？","呢啲全部係自己整？"),$t("st_omakase",2,"izakaya","お任{まか}せで 何品{なんぴん}か 出{だ}してもらえますか？","可唔可以隨你出幾款？"),$t("st_agetate",2,"izakaya","唐揚{からあ}げは 揚{あ}げたてを 食{た}べたいので、 後{あと}で 出{だ}してもらえますか？","唐揚想食啱炸起，可唔可以遲啲先上？"),$t("st_samui",2,"cafe","今日{きょう}は 寒{さむ}いので、 熱{あつ}めに してもらえますか？","今日凍，可唔可以整熱啲？"),$t("st_purin",2,"cafe","プリンは 食後{しょくご}に 出{だ}していただけますか？","布甸可唔可以食完先上？"),$t("st_hachijikan",2,"dark","本当{ほんとう}に 八時間{はちじかん}も 煮込{にこ}んだんですか？","真係燉咗八個鐘咁耐？"),$t("st_genzairyo",2,"dark","原材料{げんざいりょう}を 見{み}せてもらえますか？","可唔可以睇吓成分表？")],tx=Object.fromEntries(ya.map(i=>[i.key,i]));function ex(i,t,e=Math.random){const n=ke(),s=ya.filter(p=>p.lv<=n&&(p.ch==="any"||p.ch===i)),r=Zc(),a=s.filter(p=>p.lv===r),o=a.length>=2?a:s,c=o.filter(p=>!Gi.has(p.key)),l=c.length?c:o,u=t(l.map(p=>p.key));Gi.add(u);const h=tx[u],d=p=>p.filter((w,x)=>p.findIndex(S=>S.yue===w.yue)===x),f=p=>[...p].sort(()=>e()-.5),g=s.filter(p=>p.key!==u&&p.yue!==h.yue&&p.lv===h.lv),v=s.filter(p=>p.key!==u&&p.yue!==h.yue),m=d([...f(g),...f(v)]).slice(0,2);return{st:h,wrongs:m}}const nx=["misoshiru","oyakodon","ramen"],Xh=[{key:"oomori",lv:1,hi:!0,jp:"大盛{おおも}りで お願{ねが}いします",yue:"大份，唔該",label:"要大份"},{key:"dt_sukuname",lv:1,hi:!0,jp:"少{すく}なめで お願{ねが}いします",yue:"細份，唔該",label:"要細份"},{key:"dt_koko",lv:1,hi:!0,jp:"ここで 食{た}べます",yue:"喺度食",label:"喺度食"},{key:"dt_mochikaeri",lv:1,hi:!0,jp:"お持{も}ち帰{かえ}りで お願{ねが}いします",yue:"外賣，唔該",label:"外賣"},{key:"dt_negi",lv:2,hi:!0,jp:"ねぎ抜{ぬ}きに してもらえますか？",yue:"可唔可以走蔥？",label:"走蔥",when:i=>nx.includes(i)},{key:"dt_henkou",lv:2,hi:!0,jp:"すみません、 やっぱり 持{も}ち帰{かえ}りに 変更{へんこう}できますか？",yue:"唔好意思，可唔可以改做外賣？",label:"改做外賣"}];function ix(i){const t=ke(),e=Xh.filter(u=>u.lv<=t&&(!u.when||u.when(i)));if(!e.length)return null;const n=Zc(),s=e.filter(u=>u.lv===n),r=s.length?s:e,a=r.filter(u=>!Gi.has(u.key)),o=a.length?a:r,c=o[Math.floor(Math.random()*o.length)];Gi.add(c.key);const l=[...new Set(e.filter(u=>u.label!==c.label).map(u=>u.label))].sort(()=>Math.random()-.5);return{d:c,wrongs:l.slice(0,2)}}const sx=[{lv:0,jp:"売{う}り切{き}れです",yue:"賣晒喇"},{lv:1,jp:"すみません、売{う}り切{き}れです。",yue:"唔好意思，賣晒喇"},{lv:2,jp:"申{もう}し訳{わけ}ございません、 あいにく {dish}は 切{き}らしておりまして…",yue:"好抱歉，啱啱{dishYue}用晒…"}],rx=[{lv:0,hi:!0,jp:"{dish}を ください",yue:"咁要{dishYue}"},{lv:1,jp:"{dish}を お願{ねが}いします",yue:"咁要{dishYue}"},{lv:2,jp:"それなら、 {dish}に します",yue:"咁我要{dishYue}"}],ax=[{lv:0,hi:!0,jp:"追加{ついか}で！",yue:"加單！"},{lv:1,jp:"すみません、もう 一{ひと}つ 追加{ついか}で。",yue:"唔該，再加一份。"},{lv:2,jp:"あ、 すみません、 同{おな}じものを もう 一{ひと}つ 追加{ついか}で お願{ねが}いします",yue:"啊唔好意思，同一款再加一份，唔該"}],Ks={people:[{n:1,key:"hitori",jp:"一人{ひとり}です",yue:"一位",mei:"一名{いちめい}"},{n:2,key:"futari",jp:"二人{ふたり}です",yue:"兩位",mei:"二名{にめい}"},{n:3,key:"sannin",jp:"三人{さんにん}です",yue:"三位",mei:"三名{さんめい}"}],foods:["onigiri","misoshiru","oyakodon","ramen"],drinks:["ocha","omizu","biiru"],hasNegi:["misoshiru","oyakodon","ramen"],prices:{onigiri:200,misoshiru:150,oyakodon:850,ramen:900,ocha:0,omizu:0,biiru:500},staff:{welcome:{jp:"いらっしゃいませ！ 何名様{なんめいさま}ですか？",yue:"歡迎光臨！請問幾位？"},seat:{jp:"こちらへ どうぞ",yue:"呢邊請"},order:{jp:"ご注文{ちゅうもん}は お決{き}まりですか？",yue:"決定好叫咩未？"},drink:{jp:"お飲{の}み物{もの}は いかがですか？",yue:"想飲啲咩？"},confirm:{jp:"以上{いじょう}で よろしいですか？",yue:"就咁多？"},wait:{jp:"少々{しょうしょう} お待{ま}ちください",yue:"請稍等"},serve:{jp:"お待{ま}たせしました！",yue:"久等喇！"},pay:{jp:"ありがとうございます。{price}円{えん}です",yue:"多謝，{price} 円"},pay2:{jp:"税込{ぜいこ}みで {price}円{えん}に なります",yue:"連稅 {price} 円"},bye:{jp:"ありがとうございました！ また お越{こ}しください",yue:"多謝晒！歡迎再嚟"},sorry:{jp:"大変{たいへん} お待{ま}たせしました！",yue:"等咗好耐，真係唔好意思！"}},you:{order:{jp:"{food}を {num} ください",yue:"唔該畀{numYue}{foodYue}我"},drink:{jp:"{drink}を {num} お願{ねが}いします",yue:"{numYue}{drinkYue}，唔該"},yes:{jp:"はい、お願{ねが}いします",yue:"係，唔該"},itadakimasu:{jp:"いただきます！",yue:"開動！（食之前）"},gochisou:{jp:"ごちそうさまでした",yue:"多謝款待（食完）"},kaikei:{jp:"すみません、お会計{かいけい} お願{ねが}いします",yue:"唔好意思，唔該埋單"},wrongGreet:{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},wrongEat:{jp:"さようなら",yue:"再見（好正式／長時間唔見）"},wrongPay:{jp:"おかわり ください",yue:"唔該再嚟一碗"},no:{jp:"いいえ、大丈夫{だいじょうぶ}です",yue:"唔使喇，冇問題"}}},Nu=i=>Ks.people[i.ppl.n-1],ox=[{id:"water0",lv:0,phase:"preorder",task:()=>"想要杯水",build:()=>({staff:null,prompt:"（想要杯水）",title:"💧 想要杯水，點講？",options:[{jp:"お水{みず}、 ください",yue:"唔該畀杯水"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"さようなら",yue:"再見（好正式）"}]})},{id:"call0",lv:0,phase:"mid",task:()=>"想叫店員",build:()=>({staff:null,prompt:"（想叫店員過嚟）",title:"✋ 叫店員，點講？",options:[{jp:"すみません！",yue:"唔好意思！"},{jp:"いらっしゃいませ！",yue:"歡迎光臨（店員講）"},{jp:"ごちそうさまでした",yue:"多謝款待（食完）"}]})},{id:"reserve1",lv:1,phase:"enter",init:i=>{i.f.reserved=Math.random()<.5},task:i=>i.f.reserved?"你有訂位":"你冇訂位",build:i=>({staff:{jp:"ご予約{よやく}は されていますか？",yue:"有冇訂位？"},title:"📅 有冇訂位？",options:i.f.reserved?[{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]:[{jp:"いいえ、 予約{よやく}していません",yue:"冇訂位"},{jp:"はい、 予約{よやく}しました",yue:"有，訂咗位"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"counter1",lv:1,phase:"seat",task:()=>"你唔介意坐吧枱",build:()=>({staff:{jp:"カウンター席{せき}でも よろしいですか？",yue:"坐吧枱得唔得？"},title:"🪑 坐吧枱得唔得？（你唔介意）",options:[{jp:"はい、 大丈夫{だいじょうぶ}です",yue:"得，冇問題"},{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"recommend1",lv:1,phase:"preorder",task:()=>"唔知食咩，想問推介",build:i=>({staff:null,prompt:"（唔知食咩，想問店員推介）",title:"🤔 想問推介，點講？",options:[{jp:"おすすめは 何{なん}ですか？",yue:"有咩推介？"},{jp:"お会計{かいけい}は いくらですか？",yue:"幾多錢？"},{jp:"ごちそうさまでした",yue:"多謝款待"}],reply:{jp:`本日{ほんじつ}の おすすめは ${cx(i.food)}です`,yue:`今日推介${lx(i.food)}`}})},{id:"chopsticks1",lv:1,phase:"mid",task:()=>"冇筷子，想叫店員攞",build:()=>({staff:null,prompt:"（發現冇筷子）",title:"🥢 冇筷子，點講？",options:[{jp:"すみません、 お箸{はし}を ください",yue:"唔好意思，唔該畀對筷子"},{jp:"すみません、 お水{みず}を ください",yue:"唔好意思，唔該畀杯水"},{jp:"すみません、 さようなら",yue:"唔好意思，再見"}]})},{id:"split1",lv:1,phase:"pay",when:i=>i.ppl.n>=2,init:i=>{i.f.split=Math.random()<.5},task:i=>i.f.split?"各自畀錢":"你請客，一齊畀",build:i=>({staff:{jp:"お会計{かいけい}は 別々{べつべつ}ですか？ ご一緒{いっしょ}ですか？",yue:"分開畀定一齊畀？"},title:"💴 點樣畀錢？",options:i.f.split?[{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"いただきます",yue:"開動喇"}]:[{jp:"一緒{いっしょ}で お願{ねが}いします",yue:"一齊畀，唔該"},{jp:"別々{べつべつ}で お願{ねが}いします",yue:"分開畀，唔該"},{jp:"いただきます",yue:"開動喇"}]})},{id:"cash1",lv:1,phase:"pay",when:i=>i.ppl.n===1,init:i=>{i.f.card=Math.random()<.5},task:i=>i.f.card?"你想碌卡":"你想畀現金",build:i=>({staff:{jp:"お支払{しはら}いは 現金{げんきん}ですか？ カードですか？",yue:"現金定碌卡？"},title:"💳 現金定碌卡？",options:i.f.card?[{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"おやすみなさい",yue:"晚安"}]:[{jp:"現金{げんきん}で お願{ねが}いします",yue:"現金，唔該"},{jp:"カードで お願{ねが}いします",yue:"碌卡，唔該"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"reserve2",lv:2,phase:"enter",init:i=>{i.f.reserved=Math.random()<.5},task:i=>i.f.reserved?`你七點訂咗位（${Nu(i).yue}，姓陳）`:"你冇訂位，但有時間，願意等",build:i=>{const t=Nu(i),e=Ks.people.find(n=>n.n!==t.n);return i.f.reserved?{staff:{jp:"ご予約の お名前{なまえ}を お願{ねが}いします",yue:"請問訂位姓名？"},title:"📅 報訂位資料（七點、姓陳）",options:[{jp:`七時{しちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${t.yue}`},{jp:`七時{しちじ}に ${e.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗七點${e.yue}`},{jp:`八時{はちじ}に ${t.mei}で 予約{よやく}した チャンです`,yue:`我姓陳，訂咗八點${t.yue}`}]}:{staff:{jp:"ただいま 満席{まんせき}でして、 十分{じゅっぷん}ほど お待{ま}ちいただくことになりますが、 よろしいですか？",yue:"而家滿座，要等十分鐘左右，得唔得？"},title:"⏳ 要等十分鐘（你有時間）",options:[{jp:"はい、 待{ま}ちます",yue:"得，我等"},{jp:"じゃあ、 また 今度{こんど}に します",yue:"咁下次先啦"},{jp:"ごちそうさまでした",yue:"多謝款待"}]}}},{id:"luggage2",lv:2,phase:"seat",task:()=>"行李多，想坐枱",build:()=>({staff:{jp:"お席{せき}は カウンターと テーブルが ございますが…",yue:"有吧枱同枱位，你想坐邊？"},title:"🧳 行李多，想坐枱",options:[{jp:"荷物{にもつ}が 多{おお}いので、 テーブル席{せき}に していただけますか？",yue:"我哋行李多，可唔可以坐枱？"},{jp:"テーブル席{せき}に しろ",yue:"畀張枱我坐（好粗魯）"},{jp:"荷物{にもつ}が 少{すく}ないので、 カウンター席{せき}に してください",yue:"行李少，坐吧枱（同情況唔符）"}]})},{id:"negi2",lv:2,phase:"order",when:i=>Ks.hasNegi.includes(i.food),task:()=>"你唔食蔥",build:()=>({staff:null,prompt:"（你唔食蔥）",title:"🙏 想走蔥，點講？",options:[{jp:"ねぎ抜{ぬ}きに していただけますか？",yue:"可唔可以走蔥？"},{jp:"ねぎを 多{おお}めに お願{ねが}いします",yue:"蔥多啲，唔該（相反）"},{jp:"ねぎ抜{ぬ}きに しろ",yue:"走蔥啦（好粗魯）"}]})},{id:"late2",lv:2,phase:"wait",task:()=>"等咗好耐，菜仲未嚟",build:()=>({staff:null,prompt:"（等咗好耐，菜仲未嚟）",title:"⌛ 菜仲未嚟，點講？",reply:Ks.staff.sorry,options:[{jp:"注文{ちゅうもん}した 料理{りょうり}が まだ 来{き}ていないんですが…",yue:"我叫咗嘅菜仲未嚟…"},{jp:"早{はや}く しろ",yue:"快啲啦（好粗魯）"},{jp:"ごちそうさまでした",yue:"多謝款待"}]})},{id:"clear2",lv:2,phase:"after",task:()=>"",build:()=>({staff:{jp:"お下{さ}げしても よろしいですか？",yue:"可唔可以收走碟？"},title:"🍽️ 食晒喇，點答？",options:[{jp:"はい、 お願{ねが}いします",yue:"好，唔該"},{jp:"すみません、 まだ 食{た}べています",yue:"唔好意思，我仲食緊（同情況唔符）"},{jp:"おかわり ください",yue:"唔該再嚟一碗"}]})},{id:"cashonly2",lv:2,phase:"pay",init:i=>{i.f.cashOnly=!0},task:()=>"你有現金",build:()=>({staff:{jp:"現金{げんきん}のみと なっておりますが…",yue:"我哋只收現金…"},title:"💴 只收現金",options:[{jp:"じゃあ、 現金{げんきん}で 払{はら}います",yue:"咁我畀現金"},{jp:"カードで 払{はら}います",yue:"我碌卡（唔收卡）"},{jp:"おやすみなさい",yue:"晚安"}]})},{id:"receipt2",lv:2,phase:"receipt",task:()=>"你想要收據",build:()=>({staff:null,prompt:"（想要張收據，抬頭唔使寫）",title:"🧾 想要收據，點講？",options:[{jp:"領収書{りょうしゅうしょ}を いただけますか？ 宛名{あてな}は なしで 大丈夫{だいじょうぶ}です",yue:"可唔可以畀張收據？抬頭唔使寫"},{jp:"領収書{りょうしゅうしょ}を よこせ",yue:"收據拎嚟（好粗魯）"},{jp:"お箸{はし}を ください",yue:"唔該畀對筷子（唔對題）"}]})}],qh={onigiri:["おにぎり","飯糰"],misoshiru:["味噌汁{みそしる}","麵豉湯"],oyakodon:["親子丼{おやこどん}","親子丼"],ramen:["ラーメン","拉麵"]};function cx(i){return qh[i][0]}function lx(i){return qh[i][1]}function ux(i,t){var a;const e=ke(),n=ox.filter(o=>o.lv<=e&&(!o.when||o.when(i))),s=[],r=new Set;for(;s.length<t;){const o=n.filter(d=>!s.includes(d)&&!r.has(d.phase));if(!o.length)break;const c=o.map(d=>d.lv===e?3:1);let l=Math.random()*c.reduce((d,f)=>d+f,0),u=0;for(let d=0;d<o.length;d++)if(l-=c[d],l<=0){u=d;break}const h=o[u];s.push(h),r.add(h.phase)}for(const o of s)(a=o.init)==null||a.call(o,i);return s}const hx=[1,2,3],dx=[{id:"hat_chef",slot:"hat",price:0,emoji:"👨‍🍳",jp:"コック帽{ぼう}",yue:"廚師帽"},{id:"hat_hachimaki",slot:"hat",price:80,emoji:"🎌",jp:"はちまき",yue:"頭巾（打氣用）"},{id:"hat_straw",slot:"hat",price:180,emoji:"👒",jp:"麦{むぎ}わら帽子{ぼうし}",yue:"草帽"},{id:"neck_bell",slot:"neck",price:60,emoji:"🔔",jp:"鈴{すず}",yue:"鈴鐺"},{id:"neck_scarf",slot:"neck",price:120,emoji:"🧣",jp:"スカーフ",yue:"頸巾"},{id:"deco_lantern",slot:"deco",price:100,emoji:"🏮",jp:"提灯{ちょうちん}",yue:"燈籠"},{id:"deco_noren",slot:"deco",price:150,emoji:"🎏",jp:"のれん",yue:"門簾"},{id:"deco_bonsai",slot:"deco",price:220,emoji:"🪴",jp:"盆栽{ぼんさい}",yue:"盆栽"},{id:"deco_maneki",slot:"deco",price:350,emoji:"🐱",jp:"招{まね}き猫{ねこ}",yue:"招財貓（客人多啲）"}],Mc=[{id:"usagi",jp:"うさぎさん",yue:"兔仔",color:16447216,ear:"long",weight:10,tip:1},{id:"kuma",jp:"くまさん",yue:"熊仔",color:9067067,ear:"round",weight:10,tip:1},{id:"kitsune",jp:"きつねさん",yue:"狐狸",color:15041082,ear:"pointy",weight:8,tip:1.2},{id:"tanuki",jp:"たぬきさん",yue:"狸貓",color:8088152,ear:"round",mask:!0,weight:6,tip:1.3},{id:"shiba",jp:"柴犬{しばいぬ}さん",yue:"柴犬",color:14260814,ear:"pointy",weight:4,tip:1.6,rare:!0},{id:"maneki",jp:"招{まね}き猫{ねこ}さま",yue:"招財貓大人",color:16777215,ear:"pointy",weight:1,tip:5,rare:!0,legend:!0}];function xi(i,t=""){const e=i.verb?Me(i.verb):null;return E("div",{class:"mg-head"},Bn(i.jp,{yue:i.yue,voice:"cat"}),e?E("div",{class:"verb-chip"},Fn(e)," 新字 ",E("span",{class:"jp-inline",html:e.jp.replace(/([一-鿿]+)\{([^}]+)\}/g,"<ruby>$1<rt>$2</rt></ruby>")}),` = ${e.yue}`):null,t?E("div",{class:"mg-help"},t):null)}async function fx(i,t){let e=0;const n=fn([...i.need,...i.decoys]),s=E("div",{class:"ing-grid"}),r=E("div",{class:"pick-prompt"},E("div",{class:"pick-label"},"🐾 聽小黑講…"));n.forEach(a=>{const o=Me(a),l=o.textIcon&&o.emoji==="💬"?E("span",{class:"emo ing-jp",html:dn(o.jp)}):E("span",{class:"emo"},Fn(o)),u=E("button",{class:"ing"},l,E("span",{class:"ing-yue"},o.yue.replace(/（.*?）/g,"")));u.dataset.id=a,s.append(u)}),pn(xi(i),r,s),await Ne(i.jp,"cat");for(let a=0;a<i.need.length;a++){const o=i.need[a],c=Me(o);Pn(o),r.innerHTML="",s.dataset.want=o,r.append(E("div",{class:"pick-label"},`請攞（${a+1}/${i.need.length}）：`),Bn(c.jp,{voice:"word",size:"big"})),Ne(c.jp,"word");let l=!1;await new Promise(u=>{const h=d=>{const f=d.target.closest(".ing");if(!(hn()||!f||f.classList.contains("used")))if(f.dataset.id===o)ut("good"),f.classList.add("used","ok"),t.placeIngredient(o,a,i.need.length),Ue(o,!l),s.removeEventListener("click",h),u();else{ut("bad"),e++,l=!0,f.classList.remove("shake"),f.offsetWidth,f.classList.add("shake");const g=Me(f.dataset.id);Ge(`呢個係「${g.yue}」，日文叫 ${g.jp.replace(/\{.*?\}/g,"")}`),Ne(g.jp,"word")}};s.addEventListener("click",h)}),await le(250)}return Math.max(.3,1-e*.2)}async function px(i,t){var u;const e=i.rounds||3,n=E("div",{class:"tbar"}),s=E("div",{class:"tzone"}),r=E("div",{class:"tsweet"}),a=E("div",{class:"tneedle"});s.append(r),n.append(s,a);const o=E("div",{class:"mg-count"}),c=E("button",{class:"btn primary big tapzone"},i.anim==="chop"?"🔪 切！":"👆 撳！");pn(xi(i,"指針入綠色區時撳掣；深綠色最準！"),o,n,c),Ne(i.jp,"cat"),t.catFace("board"),i.anim==="chop"&&t.cat.holding("knife");let l=0;for(let h=0;h<e;h++){o.textContent=`${h+1} / ${e}`;const d=i.zone*(1-h*.12),f=.15+Math.random()*(.7-d);s.style.left=f*100+"%",s.style.width=d*100+"%";const g=.9+h*.25+lt().level*.03;let v=0,m=1,p=Sn(),w;const x=()=>{const R=Sn(),I=(R-p)/1e3;p=R,v+=m*g*I,v>1&&(v=1,m=-1),v<0&&(v=0,m=1),a.style.left=v*100+"%",w=requestAnimationFrame(x)};w=requestAnimationFrame(x),await new Promise(R=>{c.onclick=()=>{hn()||R()}}),cancelAnimationFrame(w),t.cat.play(i.anim||"chop",.25),ut(i.anim==="chop"?"chop":"pop");const S=f+d/2,L=Math.abs(v-S);let C;L<d*.17?(C=1,en("PERFECT!","perfect"),ut("perfect")):L<d/2?(C=.7,en("GOOD","good"),ut("good")):(C=.2,en("MISS","miss")),l+=C,h===0&&i.anim==="chop"&&t.workItems.children.length&&t.showProp((u=i.add)==null?void 0:u[0]),await le(380)}return t.cat.holding(null),i.add&&i.anim!=="chop"&&t.showProp(i.add[0]),l/e}async function mx(i,t){const e=i.taps||10,n=i.time||5;let s=0;const r=E("button",{class:"ring","aria-label":`連撳飯糰 ${e} 次`},E("div",{class:"ring-in"},ti("verb_nigiru"))),a=E("div",{class:"mg-timer"},E("i")),o=E("div",{class:"mg-count","aria-live":"polite"},`0 / ${e}`);pn(xi(i,`連撳飯糰 ${e} 次！第一下先開始 ${n} 秒倒數。`),o,a,r),Ne(i.jp,"cat"),t.catFace("board");let c=!1,l=!1,u=0;const h=await new Promise(d=>{let f;const g=()=>{if(hn()){f=requestAnimationFrame(g);return}const v=(Sn()-u)/1e3;if(a.firstChild.style.width=Math.max(0,1-v/n)*100+"%",v>=n&&!l){l=!0,d(s/e);return}f=requestAnimationFrame(g)};r.addEventListener("pointerdown",v=>{if(v.preventDefault(),!(l||hn())&&(c||(c=!0,u=Sn(),f=requestAnimationFrame(g)),s++,o.textContent=`${s} / ${e}`,ut("pop"),t.cat.play(i.anim||"press",.18),r.style.setProperty("--p",Math.min(1,s/e)),r.classList.remove("hit"),r.offsetWidth,r.classList.add("hit"),s>=e)){l=!0,cancelAnimationFrame(f);const m=n-(Sn()-u)/1e3;d(m>n*.4?1:.85)}})});return i.add&&t.showProp(i.add[0]),h>=1?(en("PERFECT!","perfect"),ut("perfect")):h>=.7?(en("GOOD","good"),ut("good")):en("OK","miss"),await le(450),Math.max(.3,Math.min(1,h))}async function gx(i,t){const e=i.turns||3,n=E("div",{class:"stirpad"},E("div",{class:"stir-dot"}),E("div",{class:"stir-label"},"🥄 手指轉圈")),s=E("div",{class:"mg-timer prog"},E("i"));pn(xi(i,`按住圓盤畫 ${e} 個圈，順時針或逆時針都得。`),s,n),Ne(i.jp,"cat"),t.catFace("stove"),t.cat.holding("ladle"),t.heat(!0),i.add&&t.showProp(i.add[0]);let r=0,a=null,o=null,c=0;const l=await new Promise(u=>{const h=d=>{if(hn()){a=null;return}const f=n.getBoundingClientRect(),g=d.clientX-(f.left+f.width/2),v=d.clientY-(f.top+f.height/2);if(Math.hypot(g,v)<15)return;const m=Math.atan2(v,g);if(n.querySelector(".stir-dot").style.transform=`rotate(${m}rad) translateX(${f.width*.36}px)`,a!==null){let w=m-a;w>Math.PI&&(w-=Math.PI*2),w<-Math.PI&&(w+=Math.PI*2),r+=Math.abs(w),o||(o=Sn()),t.cat.setMode("stir");const x=Math.floor(r/(Math.PI/2));x>c&&(c=x,ut("bubble"))}a=m;const p=r/(e*Math.PI*2);if(s.firstChild.style.width=Math.min(1,p)*100+"%",p>=1){n.removeEventListener("pointermove",h);const w=(Sn()-o)/1e3;u(w<e*1.4?1:w<e*2.5?.8:.6)}};n.addEventListener("pointerdown",d=>{try{n.setPointerCapture(d.pointerId)}catch{}a=null}),n.addEventListener("pointermove",d=>{(d.buttons||d.pointerType==="touch")&&h(d)}),n.addEventListener("pointerup",()=>{a=null,t.cat.setMode("idle")})});return t.cat.setMode("idle"),t.cat.holding(null),t.heat(!1),l>=1?(en("PERFECT!","perfect"),ut("perfect")):(en("GOOD","good"),ut("good")),await le(450),l}async function _x(i,t){const[e,n]=i.zone,s=E("div",{class:"gauge"},E("div",{class:"gzone",style:`bottom:${e*100}%;height:${(n-e)*100}%`}),E("div",{class:"gfill"}),E("div",{class:"gtop"},"🔥 滾瀉")),r=E("button",{class:"btn primary big holdbtn"},"🔥 長按加熱"),a=E("div",{class:"hold-wrap"},s,r);pn(xi(i,"長按加熱，升到綠色區就放手！暫停後要再長按。"),a),Ne(i.jp,"cat"),t.catFace("stove"),i.add&&t.showProp(i.add[0]);let o=0,c=!1,l=Sn(),u,h=0;const d=()=>{c=!1,cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle")};document.addEventListener("gamepause",d);const f=s.querySelector(".gfill"),g=await new Promise(v=>{const m=()=>{const w=Sn(),x=(w-l)/1e3;if(l=w,c&&(o+=x*(.32+o*.35),h+=x,h>.25&&(h=0,ut(o>n?"boil":"bubble"))),f.style.height=Math.min(1,o)*100+"%",f.classList.toggle("hot",o>n),o>=1){p();return}u=requestAnimationFrame(m)},p=()=>{cancelAnimationFrame(u),t.heat(!1),t.cat.setMode("idle");const w=(e+n)/2;o>=e&&o<=n?v(Math.abs(o-w)<(n-e)*.2?1:.75):v(.3)};r.addEventListener("pointerdown",w=>{w.preventDefault();try{r.setPointerCapture(w.pointerId)}catch{}c||hn()||(c=!0,l=Sn(),u=requestAnimationFrame(m),t.heat(!0),t.cat.holding(i.anim==="pour"?null:"ladle"),t.cat.setMode(i.anim==="pour"?"idle":"stir"),i.anim==="pour"&&t.cat.play("pour",.8))}),r.addEventListener("pointerup",()=>{c&&(c=!1,p())}),r.addEventListener("pointercancel",()=>{c&&(c=!1,p())})});return document.removeEventListener("gamepause",d),t.cat.holding(null),g>=1?(en("PERFECT!","perfect"),ut("perfect")):g>=.7?(en("GOOD","good"),ut("good")):(en(o>=1?"滾瀉！":"未夠熱","miss"),ut("bad"),Ge(i.tip,3e3)),await le(500),g}async function vx(i,t){t.useStation("microwave");const e=E("div",{class:"micro-display","aria-live":"polite"},"00:03"),n=E("button",{class:"btn primary big dark-control"},"放好食物，開始翻熱");pn(xi(i),E("div",{class:"micro-panel"},E("div",{class:"micro-window"},"▤",e),E("div",{class:"sub"},i.tip)),n),await new Promise(s=>n.addEventListener("click",s,{once:!0})),n.disabled=!0;for(let s=3;s>0;s--)e.textContent=`00:0${s}`,t.microwaveLight(!0),await le(650);return t.microwaveLight(!1),e.textContent="叮！",ut("good"),await le(300),1}async function xx(i){const t=[1100,850,650][ke()]||1100,e=E("div",{class:"cover-eye"},"😺"),n=E("p",{},"客人偷望前會出現「？」，即刻撳掣！"),s=E("button",{class:"btn primary big dark-control","data-cover":"btn"},i.btn);let r=!1,a=!1;s.addEventListener("click",()=>{r&&!a?(a=!0,ut("good")):ut("tap")}),pn(xi(i),e,n,s);let o=0;for(let c=0;c<3;c++)await le(700+Math.random()*900),r=!0,a=!1,e.textContent="😳❓",await le(t),r=!1,a?(o++,n.textContent=i.ok):(Jc.suspicion++,e.textContent="🤨",n.textContent=i.bad,ut("bad")),await le(600),e.textContent="😺";return o===3?1:o===2?.8:o===1?.6:.4}async function yx(i){let t=0;const e=2+Math.floor(Math.random()*2),n=E("div",{class:"season-meter","aria-live":"polite"}),s=E("p",{},"先試味，再決定要唔要補。"),r=E("button",{class:"btn dark-control","data-season":"add"},"加一格調味"),a=E("button",{class:"btn dark-control","data-season":"taste"},"試味"),o=E("button",{class:"btn primary big dark-control","data-season":"serve"},"確認出餐"),c=()=>{n.textContent=`${"●".repeat(t)}${"○".repeat(5-t)}　${t} / 5`,r.disabled=t>=5};c(),r.addEventListener("click",()=>{t<5&&(t++,c(),s.textContent="加咗調味，試一啖先。")}),a.addEventListener("click",()=>{s.textContent=t===e?"啱啱好，仲食到蛋香同飯香！":t<e?"味道仲有啲淡。":"調味過重，蓋過食材味喇。",ut("tap")}),pn(xi(i),n,s,E("div",{class:"dark-actions"},r,a),E("div",{class:"sub"},i.tip),o),await new Promise(u=>o.addEventListener("click",u,{once:!0}));const l=Math.max(.1,1-Math.abs(t-e)*.3);return ut(l>=.9?"perfect":"bad"),l}async function Mx(i){const t=[{id:"hot",icon:"♨️",label:"保持熱飲",detail:"用熱杯盛裝"},{id:"iced",icon:"🧊",label:"加冰做凍飲",detail:"用凍杯盛裝"},{id:"less_sugar",icon:"🥄",label:"減少糖量",detail:"只落半份糖"},{id:"no_sugar",icon:"🚫",label:"唔加糖",detail:"保持無糖"}];let e=0;for(Pn(i.request);;){const n=E("div",{class:"mg-head"},E("div",{class:"panel-title"},i.title||"客人想要點樣嘅飲品？"),Bn(i.jp,{yue:ke()===0?i.yue:"",voice:i.voice||"cat",hidden:ke()>0,autoplay:!0}),E("div",{class:"mg-help"},"聽客人要求，揀實際做法。撳喇叭可以再聽。"));if(await new Promise(r=>{pn(n,E("div",{class:"choices cols2 request-actions"},fn(t).map(a=>E("button",{class:"choice","data-request":a.id,onclick:()=>{hn()||r(a.id)}},E("span",{class:"request-icon"},a.icon),E("b",{},a.label),ke()===0?E("small",{},a.detail):null))))})===i.request){Ue(i.request,e===0),ut("good");const r=Me(i.request);return await Kc("做好喇，出餐！",E("div",{class:"panel-title"},"啱喇！客人嘅意思係："),Bn(r.jp,{yue:r.yue,voice:"word",autoplay:!0})),Math.max(.3,1-e*.2)}e++,ut("bad"),Ge("再聽一次：留意客人講緊冷熱，定係甜度。",3500)}}const Sx=Object.fromEntries(Object.entries({pick:fx,timing:px,mash:mx,stir:gx,hold:_x,microwave:vx,season:yx,cover:xx,request:Mx}).map(([i,t])=>[i,(...e)=>cd(t,...e)])),Js=["hitotsu","futatsu","mittsu"];function Dn(i,t){let e=i.jp,n=i.yue;for(const[s,r]of Object.entries(t))typeof r=="string"&&Nn[r]?(e=e.replaceAll(`{${s}}`,Nn[r].jp),n=n.replaceAll(`{${s}Yue}`,Nn[r].yue.replace(/（.*?）/g,""))):(e=e.replaceAll(`{${s}}`,String(r)),n=n.replaceAll(`{${s}}`,String(r)));return{jp:e,yue:n}}const bx={cat:{id:8,name:"春日部つむぎ"},word:{id:14,name:"冥鳴ひまり"},usagi:{id:10,name:"雨晴はう"},kuma:{id:11,name:"玄野武宏"},kitsune:{id:2,name:"四国めたん"},tanuki:{id:12,name:"白上虎太郎"},shiba:{id:13,name:"青山龍星"},maneki:{id:20,name:"もち子さん"}};function rr(i){const t=lt();return i.unlock.level?t.level>=i.unlock.level:i.unlock.day?t.daysPlayed>=i.unlock.day:!0}function $h(i){if(i.unlock.level)return`Lv.${i.unlock.level} 解鎖`;if(i.unlock.day){const t=Av(),e=Math.floor(t/36e5),n=Math.floor(t%36e5/6e4);return lt().daysPlayed+1>=i.unlock.day?`聽日解鎖（仲有 ${e}:${String(n).padStart(2,"0")}）`:`第 ${i.unlock.day} 日解鎖`}return""}const Yh=i=>"★".repeat(i)+"☆".repeat(3-i);function Kh(i,{onStart:t=null}={}){const e=Me(i.dish),n=E("div",{class:"recipe"},E("div",{class:"recipe-hero"},E("div",{class:"big-emo"},Fn(e)),Bn(e.jp,{yue:e.yue,voice:"word",size:"big",autoplay:!0})),E("div",{class:"recipe-meta"},`🍽️ ${i.serves}　⏱️ 現實烹調：${i.time}　${lt().stars[i.id]?Yh(lt().stars[i.id]):""}`),E("h3",{},"材料"),E("ul",{class:"ing-list"},i.ingredients.map(([a,o])=>{const c=Me(a);return E("li",{},E("button",{class:"mini-spk","aria-label":`再聽：${c.yue}`,onclick:()=>Ne(c.jp,"word")},"🔊"),E("span",{class:"emo"},Fn(c)),E("span",{class:"jp-inline",html:dn(c.jp)}),E("span",{class:"amt"},o))})),E("h3",{},i.chapter==="dark"?"真正捷徑（浮誇菜名唔代表實際工序）":"做法（真係煮得㗎！）"),E("ol",{class:"howto"},i.howto.map(a=>E("li",{},a))));if(t){const[a,...o]=[...n.children],c={pick:"聽日文揀材料",mash:"連撳搓飯糰",timing:"指針入綠色區時撳掣",stir:"手指畫圈攪拌",hold:"長按加熱，綠色區放手",microwave:"撳掣翻熱",cover:"見到「？」即刻撳掣",season:"先試味再調味",request:"聽客人要求，揀實際做法"},l=E("details",{class:"real-recipe"},E("summary",{},"📖 睇真實食譜、份量同烹調時間"),...o);n.replaceChildren(a,E("h3",{},"今次遊戲步驟"),E("ol",{class:"howto game-steps"},i.steps.map(u=>E("li",{},c[u.type]))),l)}const s=t?E("button",{class:"btn primary big",onclick:()=>{ut("tap"),r.close()}},"🔥 開始煮！"):null,r=vi("📖 食譜",n,{onClose:t,wide:!0,footer:s});return r}function Sc(i="recipes"){const t=E("div",{class:"tabs"}),e=E("div",{class:"tab-content"}),n={recipes:"🍳 食譜",words:"📝 單詞",phrases:"💬 句子",secrets:"🌙 後廚",stats:"📊 紀錄"},s=r=>{if(t.querySelectorAll("button").forEach(a=>a.classList.toggle("on",a.dataset.t===r)),e.innerHTML="",r==="recipes"){const a=E("div",{class:"book-grid"});kn.forEach(l=>{const u=Me(l.dish),h=rr(l),d=E("div",{class:`book-card ${h?"":"locked"}`},E("div",{class:"big-emo"},h?Fn(u):"🔒"),E("div",{class:"jp-inline",html:h?dn(u.jp):"？？？"}),E("div",{class:"sub"},ea.find(f=>f.id===(l.chapter||"home")).name),E("div",{class:"sub"},h?lt().stars[l.id]?Yh(lt().stars[l.id]):"未煮過":$h(l)));h&&(d.onclick=()=>{ut("tap"),Kh(l)}),a.append(d)}),Du.forEach(l=>a.append(E("div",{class:"book-card locked soon"},E("div",{class:"big-emo sil"},ti(`dish_${l.id}`,l.yue)),E("div",{class:"jp-inline",html:dn(l.jp)}),E("div",{class:"sub"},"即將推出"))));const o=kn.length+Du.length,c=kn.filter(rr).length;e.append(E("div",{class:"progress-line"},`收集 ${c} / ${o}`,E("div",{class:"bar"},E("i",{style:`width:${c/o*100}%`}))),a)}else if(r==="words"){const a=E("div",{class:"word-list"}),o=Object.keys(lt().srs);o.length||a.append(E("p",{class:"muted"},"未學到字，去煮嘢先啦！")),o.sort((c,l)=>lt().srs[l].box-lt().srs[c].box).forEach(c=>{if(!Nn[c])return;const l=Me(c),u=lt().srs[c],h=["🌱","🌱","🌿","🌿","🌳","🌸"][u.box];a.append(E("div",{class:"word-row",onclick:()=>Ne(l.jp,"word")},E("span",{class:"emo"},Fn(l)),E("span",{class:"jp-inline",html:dn(l.jp)}),E("span",{class:"yue"},l.yue),E("span",{class:"lvl",title:"熟練度"},h)))}),e.append(E("div",{class:"progress-line"},`識咗 ${xc()} 個 · 見過 ${Cv()} 個　（🌱→🌸 越溫越熟）`),a)}else if(r==="phrases"){const a=ke(),o=[...ya,...Xh,...Ni.bye],c=o.filter(u=>lt().srs[u.key]),l=o.filter(u=>(u.lv??0)<=a).length;e.append(E("div",{class:"progress-line"},`見過 ${c.length} 句 · 你而家嘅程度可以遇到 ${l} 句　（🌱→🌸 越溫越熟）`)),c.length||e.append(E("p",{class:"muted"},"未有句子，開店同客人傾偈先啦！"));for(const u of[0,1,2]){const h=c.filter(f=>(f.lv??0)===u).sort((f,g)=>lt().srs[g.key].box-lt().srs[f.key].box);if(!h.length)continue;e.append(E("div",{class:"sub"},`${Cs[u].icon} ${Cs[u].name}`));const d=E("div",{class:"word-list"});h.forEach(f=>{const g=lt().srs[f.key],v=["🌱","🌱","🌿","🌿","🌳","🌸"][g.box];d.append(E("div",{class:"word-row",onclick:()=>Ne(f.jp,"usagi")},E("span",{class:"jp-inline",html:dn(f.jp)}),E("span",{class:"yue"},f.yue),E("span",{class:"lvl",title:"熟練度"},v)))}),e.append(d)}}else if(r==="secrets"){const a=gs.filter(c=>lt().darkSecrets[c.id]);e.append(E("p",{class:"sub"},`主廚秘密 ${a.length} / ${gs.length} · 完成出餐揭曉後收藏`));const o=[...new Set(a.map(c=>c.shortcut))];e.append(E("div",{class:"dark-pantry"},...gs.map(c=>E("span",{class:o.includes(c.shortcut)?"unlocked":""},o.includes(c.shortcut)?c.shortcut:"🔒 未揭曉")))),gs.forEach(c=>{const l=lt().darkSecrets[c.id];e.append(l?Wh(c,l):E("div",{class:"dark-locked"},`${c.number} · ${c.yue}　🔒`))})}else{const a=lt(),o=[["🔥 連續日數",`${a.streak} 日`],["📅 玩咗",`${a.daysPlayed} 日`],["🐾 招呼客人",`${a.served} 位`],["🏮 去餐廳",`${a.restaurantDone} 次`],["📝 識咗單詞",`${xc()} 個`],["💕 小黑好感度",`${a.affection}`]];e.append(E("div",{class:"stats"},o.map(([c,l])=>E("div",{class:"stat"},E("span",{},c),E("b",{},l)))))}};for(const[r,a]of Object.entries(n))t.append(E("button",{"data-t":r,onclick:()=>{ut("tap"),s(r)}},a));s(i),vi("📚 圖鑑",E("div",{},t,e),{wide:!0})}function Qc(i){const t=E("div",{class:"shop-grid"}),e=E("div",{class:"shop-coins"}),n=()=>{const s=lt();e.replaceChildren(ti("ui_coin"),E("b",{},s.coins)),t.innerHTML="",dx.forEach(r=>{const a=s.owned.includes(r.id)||s.deco.includes(r.id),o=r.slot==="deco"?s.deco.includes(r.id):s.wear[r.slot]===r.id;let c;a?r.slot==="deco"?c=E("button",{class:"btn ghost"},"✔ 已擺"):(c=E("button",{class:`btn ${o?"ghost":""}`},o?"除低":"著上"),c.onclick=()=>{ut("tap"),s.wear[r.slot]=o?(r.slot==="hat",null):r.id,Te(),bc(i),n(),i.cat.happy()}):(c=E("button",{class:`btn ${s.coins>=r.price?"primary":"disabled"}`},`🪙 ${r.price}`),c.onclick=()=>{if(s.coins<r.price){ut("bad"),ni("金幣唔夠，再招呼多啲客人啦！");return}s.coins-=r.price,ut("coin"),ut("perfect"),r.slot==="deco"?s.deco.push(r.id):(s.owned.push(r.id),s.wear[r.slot]=r.id),Te(),bc(i),_i(),n(),Ne(r.jp,"word"),ni(`買咗 ${r.yue}！`)}),t.append(E("div",{class:`shop-item ${o?"worn":""}`},E("div",{class:"big-emo"},ti(`shop_${r.id}`,r.yue)),E("div",{class:"jp-inline",html:dn(r.jp),onclick:()=>Ne(r.jp,"word")}),E("div",{class:"sub"},r.yue),c))})};n(),i.setView("kitchen"),vi("🛍️ 商店",E("div",{},e,t),{wide:!0})}function bc(i){const t=lt();i.cat.wear(t.wear),i.setDeco(t.deco)}function wx(i){const t=lt().settings,e=(c,l,u)=>{const h=E("input",{type:"checkbox"});return h.checked=!!t[l],h.onchange=()=>{t[l]=h.checked,Te(),Yc(),l==="bgm"&&Hh(h.checked),l==="shake"&&(i.shakeOn=h.checked),ut("tap")},E("label",{class:"set-row"},E("div",{},E("b",{},c),E("div",{class:"sub"},u)),h)},n=E("input",{type:"checkbox"});n.checked=t.subs==="tap",n.onchange=()=>{t.subs=n.checked?"tap":"show",Te(),ut("tap")};const s=E("div",{class:"lv-pick"}),r=()=>{s.replaceChildren(...Cs.map(c=>E("button",{class:`btn ${ke()===c.id?"primary":""}`,onclick:()=>{lt().jpLevel=c.id,Te(),ut("tap"),r()}},`${c.icon} ${c.name}`,E("small",{},c.desc))))};r();const a=Object.values(bx).map(c=>`VOICEVOX:${c.name}`).filter((c,l,u)=>u.indexOf(c)===l).join("、"),o=E("div",{class:"settings"},E("div",{class:"set-row lv-row"},E("div",{},E("b",{},"📚 日文程度"),E("div",{class:"sub"},"決定客人同餐廳對白嘅難度；轉咗之後新句即刻生效")),s),e("振假名 ふりがな","furigana","漢字上面顯示讀音"),e("羅馬字 Romaji","romaji","例：onigiri"),e("廣東話翻譯","yue","每句下面顯示意思"),e("加大文字","largeText","放大對白、翻譯同操作說明"),E("label",{class:"set-row"},E("div",{},E("b",{},"🎧 聽力挑戰"),E("div",{class:"sub"},"客人落單嘅字幕要撳先見，答啱有雙倍貼士")),n),e("背景音樂","bgm",""),e("音效","sfx",""),e("畫面震動","shake","切菜、答錯、升級時鏡頭輕震"),E("p",{class:"credits"},`🎙️ 語音：${a}`),E("button",{class:"btn danger",onclick:()=>{confirm("真係要清除全部進度？")&&(wv(),location.reload())}},"清除進度"));vi("⚙️ 設定",o)}function Ex(i,{onNext:t,onRest:e,onShop:n,firstShift:s}){const r=lt();let a=!1;const o=h=>{a=!0,Gh(),h()},l=kn.filter(h=>!rr(h))[0],u=E("div",{class:"summary"},E("div",{class:"sum-big"},"🎉"),s?E("div",{class:"panel-title"},"第一道菜完成！想繼續開舖，定去餐廳試吓？"):null,Bn("お疲{つか}れ様{さま}でした！",{yue:"辛苦晒！（收工講）",voice:"cat"}),E("div",{class:"sum-grid"},E("div",{},E("b",{},i.served),E("span",{},"位客人")),E("div",{},E("b",{},`+${i.coins}`),E("span",{},"🪙 金幣")),E("div",{},E("b",{},i.perfect),E("span",{},"⭐ 三星")),E("div",{},E("b",{},`${xc()}`),E("span",{},"📝 識咗字"))),E("div",{class:"streak-row"},...Array.from({length:7},(h,d)=>E("div",{class:`sd ${d<Math.min(r.streak,7)?"on":""}`},d<Math.min(r.streak,7)?"🔥":d+1)),E("div",{class:"sub"},`連續 ${r.streak} 日！聽日返嚟，禮物會再大啲`)),l?E("div",{class:"teaser"},E("span",{class:"big-emo"},ti("ui_lock"),Fn(Me(l.dish))),E("div",{},E("b",{html:dn(Me(l.dish).jp)}),E("div",{class:"sub"},$h(l)))):null,E("div",{class:"sum-btns"},E("button",{class:"btn primary big",onclick:()=>o(t)},s?"🏮 繼續開舖／返大堂":"🏠 返大堂／揀章節"),e?E("button",{class:"btn big",onclick:()=>o(e)},"🏮 同小黑去日本餐廳食飯"):null,E("button",{class:"btn",onclick:()=>o(n)},"🛍️ 商店")));vi("收工！",u,{onClose:()=>{a||t()}}),Ne("お疲{つか}れ様{さま}でした！","cat")}pa(document.body);se("#start").style.setProperty("--title-bg",`url("${sa("title_bg")}")`);const nt=new gv(se("#c"));let Ma=!1;nt.shakeOn=lt().settings.shake!==!1;const yo={chop:()=>{nt.shake(.18),nt.cat.squash(-.08)},press:()=>nt.shake(.15),bad:()=>{nt.shake(.4),nt.cat.squash(-.12)},good:()=>nt.cat.squash(.08),perfect:()=>{nt.shake(.25),nt.cat.squash(.14)},level:()=>{nt.shake(.55),nt.cat.squash(.2)},rare:()=>nt.shake(.3),door:()=>nt.shake(.12),purr:()=>nt.cat.squash(-.1),coin:()=>{}};Lv(i=>{var t;return(t=yo[i])==null?void 0:t.call(yo)});nt.onView=i=>zv(i==="cook"?"cook":i.startsWith("rest")?"rest":"kitchen");Yc();_i();bc(nt);nt.cat.happyEyes=999;nt.setView("kitchen",!0);tl();se("#start").addEventListener("click",async()=>{Dv(),ut("tap"),se("#start").classList.add("gone");const i=Tv();lt().started?await Ax(i):await Tx()},{once:!0});se("#btn-book").onclick=()=>{ut("tap"),Sc()};se("#btn-shop").onclick=()=>{if(ut("tap"),Ma)return ni("做緊嘢，收工先買啦！");Qc(nt)};se("#btn-set").onclick=()=>{ut("tap"),wx(nt)};let ku=0;nt.onCatTap=()=>{if(!lt().started)return;ut("purr"),nt.hearts(),nt.cat.happyEyes=.8;const i=lt();i.affection++,ku++,i.lastPet!==Rs()?(i.lastPet=Rs(),i.coins+=10,ni("小黑好開心！ 今日第一次掃 ❤️ +10🪙"),ur(10),_i()):ku%5===0&&(de(nt,"cat",tn.purr.jp,tn.purr.yue,"cat"),setTimeout(()=>ve("cat"),2e3)),Te()};async function Tx(){await le(500),nt.cat.happyEyes=0,nt.cat.happy(),ut("meow"),await de(nt,"cat",tn.wake.jp,tn.wake.yue,"cat"),await le(300),await de(nt,"cat",tn.intro.jp,tn.intro.yue,"cat");const i=await Qe([{label:"<b>🌱 零基礎</b><small>假名都未識</small>",value:0},{label:"<b>🌿 識少少</b><small>識假名、簡單字</small>",value:1},{label:"<b>🌳 N3 或以上</b><small>想練聽力同實用句子</small>",value:2}],{title:E("div",{class:"panel-title"},"你嘅日文程度係？（之後可以喺 ⚙️ 改）")}),t=lt().settings;lt().jpLevel=i.value,i.value===0&&Object.assign(t,{furigana:!0,romaji:!0,yue:!0,subs:"show"}),i.value===1&&Object.assign(t,{furigana:!0,romaji:!1,yue:!0,subs:"show"}),i.value===2&&Object.assign(t,{furigana:!0,romaji:!1,yue:!1,subs:"tap"}),Yc(),lt().started=!0,lt().lastGift=Rs(),Te(),ve(),Ge("撳 🔊 可以再聽；撳小黑可以掃佢 🐾",3500),Vh(!0),await Qh({tutorial:!0})}async function Ax(i){Vh(!0),nt.cat.happyEyes=0,nt.cat.happy(),ut("meow");const t=lt(),e=kn.filter(n=>n.unlock.day&&n.unlock.day===t.daysPlayed&&i.newDay);de(nt,"cat","おかえりにゃ！","你返嚟喇喵！","cat"),i.gift&&(await new Promise(n=>{vi("🎁 每日禮物",E("div",{class:"summary"},E("div",{class:"sum-big"},"🎁"),E("div",{class:"gift-amt"},`+${i.gift} 🪙`),E("div",{class:"streak-row"},...Array.from({length:7},(s,r)=>E("div",{class:`sd ${r<Math.min(t.streak,7)?"on":""}`},r<Math.min(t.streak,7)?"🔥":r+1))),E("div",{class:"sub"},i.streakBroken?"連續日數斷咗… 唔緊要，今日重新開始！":`連續 ${t.streak} 日！每日禮物越嚟越大（最多 7 日）`),E("button",{class:"btn primary big",onclick:()=>Gh()},"收！")),{onClose:n})}),ur(i.gift),_i());for(const n of e)await ed(n);if(t.jpLevel==null){const n=await Qe(Cs.map(s=>({label:`<b>${s.icon} ${s.name}</b><small>${s.desc}</small>`,value:s.id})),{title:E("div",{class:"panel-title"},"新增咗分級對白！揀你嘅日文程度（之後可喺 ⚙️ 改）")});t.jpLevel=n.value,Te()}Wi()}function Jh(){return kn.filter(i=>(i.chapter||"home")===lt().chapter&&rr(i))}function Zh(){var t;const i=Jh();return(t=i[parseInt(Xc(Rs()),36)%i.length])==null?void 0:t.id}function tl(){nt.setMenu(kn.filter(i=>(i.chapter||"home")===lt().chapter).map(i=>({name:Nn[i.dish].jp.replace(/\{.*?\}/g,""),price:i.price,locked:!rr(i)})))}function Rx(){const i=Jv();if(!i)return null;const t=Cs[i.to];return E("div",{class:"special lv-nudge"},`${Cs[i.from].icon} 呢級答啱率 ${i.rate}%（${i.total} 題）！想試吓 ${t.icon} ${t.name} 嗎？`,E("button",{class:"btn primary",onclick:()=>{lt().jpLevel=i.to,Te(),ut("level"),ni(`轉咗做 ${t.name}`),Wi()}},"升一級"),E("button",{class:"btn",onclick:()=>{lt().lvNudgeDismissed=i.from,Te(),Wi()}},"遲啲先"))}function Wi(){Ma=!1,ve(),nt.setView("kitchen"),nt.catFace("front");const i=Zh(),t=i?Me(Gv(i).dish):null,e=lt().shifts>=1;tl();const n=ea.find(r=>r.id===lt().chapter)||ea[0],s=E("div",{class:"hub-btns"},E("button",{class:"btn primary big","data-action":"open-shift",onclick:()=>{ut("tap"),Qh({})}},"🏮 開舖"),E("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{ut("tap"),e?nd():ni("完成第一位客人就解鎖！")}},e?"🍱 去日本餐廳":"🔒 日本餐廳"),E("button",{class:"btn",onclick:()=>{ut("tap"),Sc()}},"📚 圖鑑"),E("button",{class:"btn",onclick:()=>{ut("tap"),Qc(nt)}},"🛍️ 商店"));pn(E("div",{class:"hub-info"},E("div",{class:"chapter-tabs","aria-label":"選擇章節"},ea.map(r=>E("button",{class:`btn ${r.id===n.id?"primary":""}`,"data-chapter":r.id,"aria-pressed":String(r.id===n.id),onclick:()=>{lt().chapter=r.id,Te(),ut("tap"),Wi()}},ti({home:"ui_open_shop",izakaya:"shop_deco_lantern",cafe:"dish_instant_coffee",dark:"dish_dark_ding"}[r.id]),` ${{home:"食堂",izakaya:"居酒屋",cafe:"喫茶店",dark:"暗黑"}[r.id]}`))),E("div",{class:"panel-title"},n.name),E("div",{class:"sub"},`${n.intro}　完成 ${lt().chapterShifts[n.id]||0} 更`),n.id==="dark"?E("button",{class:"btn",onclick:()=>Sc("secrets")},`後廚捷徑圖鑑 · ${Object.keys(lt().darkSecrets).length} / 7`):null,t?E("div",{class:"special"},"🌟 今日特價：",E("span",{class:"jp-inline",html:dn(t.jp)})," 金幣 x2"):null,Rx()),s).classList.add("hub-panel")}async function Qh({tutorial:i=!1}={}){Ma=!0,jh();const t=i?1:5,e={served:0,coins:0,perfect:0};let n=null;for(let r=0;r<t;r++){se("#shiftinfo").textContent=`客人 ${r+1} / ${t}`,se("#shiftinfo").classList.add("show");const a=await Px({index:r,tutorial:i,forceDish:n});if(n=null,e.served++,e.coins+=a.coins,a.stars===3&&e.perfect++,a.levelUps){const o=await td();o&&(o.chapter||"home")===lt().chapter&&(n=o.dish)}}se("#shiftinfo").classList.remove("show"),lt().shifts++,lt().chapterShifts[lt().chapter]=(lt().chapterShifts[lt().chapter]||0)+1,Te(),Bi(),ve(),nt.setView("kitchen"),nt.cat.happy(),ut("level");const s=lt().shifts===1;await new Promise(r=>Ex(e,{firstShift:s,onNext:()=>r(()=>Wi()),onRest:()=>r(()=>nd()),onShop:()=>r(()=>{Wi(),Qc(nt)})})).then(r=>r())}function Cx(i,t){if(t&&i===0)return Mc[0];const e=lt(),n=e.deco.includes("deco_maneki")?3:1,s=Mc.filter(o=>!o.legend||e.level>=2),r=s.map(o=>o.weight*(o.rare?n:1));let a=Math.random()*r.reduce((o,c)=>o+c,0);for(let o=0;o<s.length;o++)if(a-=r[o],a<=0)return s[o];return s[0]}async function Px({index:i,tutorial:t,forceDish:e}){var _t;const n=lt(),s=n.level,r=n.chapter==="cafe"?Mc[i%ho.length]:Cx(i,t),a=Jh(),o=e||$c(a.map(q=>q.dish));let c=a.find(q=>q.dish===o)||a[0];const l=n.level>=2&&!t&&c.chapter!=="dark"&&Math.random()<.45;let u=l?1+Math.floor(Math.random()*3):1;const h=c.chapter==="dark";h&&(u=1);const d=qn(h?cv:l?Qv:Zv),f=h?{jp:d.jp.replace("{dish}",c.jp),yue:d.yue.replace("{dishYue}",c.yue)}:Dn(d,l?{dish:c.dish,num:Js[u-1]}:{dish:c.dish}),g=vn(r.id,d);go(f.jp,g);const v={3:qn(Ni.great),2:qn(Ni.ok),1:qn(Ni.meh)};for(const q of Object.values(v))go(q.jp,vn(r.id,q));Bi(),nt.setView("kitchen"),nt.catFace("customer"),ut("door"),await nt.customerIn(r),r.rare&&(ut("rare"),ni(`✨ 稀有客人：${r.yue}！ 貼士 x${r.tip}`,2600,"rare")),nt.cat.play("wave",.8),await de(nt,"cat",tn.irasshai.jp,tn.irasshai.yue,"cat"),ve("cat");const m=n.settings.subs==="tap";let p=0,w=!1;for(t&&i===0&&Ge("客人講緊要咩，聽完揀啱嘅菜！",3500);!w;){de(nt,"cust",f.jp,f.yue,g,{hidden:m});const q=fn(a).map(Bt=>{const W=Me(Bt.dish);return{value:Bt.dish,el:E("div",{class:"dish-opt"},E("span",{class:"emo"},Fn(W)),E("span",{class:"jp-inline",html:dn(W.jp)}))}}),ot=await Qe(q,{title:E("div",{class:"panel-title"},"🐾 客人要咩？"),cols:Math.min(q.length,2)});let Ft=1;if(ot.value===c.dish&&l&&(Ft=(await Qe(Js.map((W,et)=>({value:et+1,el:E("div",{class:"dish-opt"},E("span",{class:"emo"},Fn(Me(W))),E("span",{class:"jp-inline",html:dn(Me(W).jp)}))})),{title:E("div",{class:"panel-title"},"要幾多個？"),cols:3})).value),ot.value===c.dish&&Ft===u)w=!0,ut("good"),Ue(c.dish,p===0),l&&Ue(Js[u-1],p===0);else{p++,ut("bad"),nt.cat.play("sad",.6);const Bt=qn(Ni.wrong);await de(nt,"cust",Bt.jp,Bt.yue,vn(r.id,Bt)),Ge(`佢講：「${f.yue}」— 再聽一次！`,3500),Ue(c.dish,!1),await le(600)}}Pn(c.dish),ve("cust");const x=async(q,ot,Ft,Bt,W,et,Et=g)=>{let ht=!0;for(Pn(W);;){if(de(nt,"cust",q,ot,Et,{hidden:m}),(await Qe(fn(Ft.map((Ut,Ht)=>({label:Ut,value:Ht}))),{title:E("div",{class:"panel-title"},et)})).value===Bt){Ue(W,ht),ut("good"),ve("cust");return}ht=!1,Ue(W,!1),ut("bad"),Ge(ot,3e3)}};if(lt().chapter==="home"&&!t&&ke()>0&&Math.random()<.3){const q=ix(c.dish);if(q){const ot=vn(r.id,q.d);Pn(q.d.key);let Ft=!0;for(;;){if(de(nt,"cust",q.d.jp,q.d.yue,ot,{hidden:m}),(await Qe(fn([q.d.label,...q.wrongs].map((W,et)=>({label:W,value:et===0?0:-1}))),{title:E("div",{class:"panel-title"},"客人再補一句？")})).value===0){Ue(q.d.key,Ft),hr(q.d.lv,Ft),ut("good"),ve("cust");break}Ft=!1,Ue(q.d.key,!1),ut("bad"),Ge(q.d.yue,3e3)}}}if(lt().chapter==="izakaya"&&i%2===0){const q=qn(ax);await x(q.jp,q.yue,["加一份","取消訂單","立即埋單"],0,"tsuika","客人想改張單？",vn(r.id,q)),u++,ni(`加單成功：共 ${u} 份`)}else if(lt().chapter==="izakaya"){const q=a.find(et=>et.id!==c.id),ot=Dn(qn(sx),{dish:c.dish});await de(nt,"cat",ot.jp,ot.yue,"cat"),ve("cat");const Ft=Me(q.dish),Bt=qn(rx),W=Dn(Bt,{dish:q.dish});await x(W.jp,W.yue,[Ft.yue,Me(c.dish).yue,"取消所有訂單"],0,"urikire","沽清後，客人改要邊款？",vn(r.id,Bt)),c=q,Pn(c.dish),Ue(c.dish,!0)}let S=null,L=null;if(lt().chapter==="cafe"&&["instant_coffee","black_tea","matcha_latte"].includes(c.id)){const q=ho[i%ho.length],ot=lt().regularVisits[q.id]||0;S=q.request,L=q.id,c={...c,steps:[...c.steps,{type:"request",request:S,jp:q.jp,yue:q.yue,voice:r.id,title:`${q.name} · ${ot?`第 ${ot+1} 次到訪`:"初次到訪"}：點樣調製？`}]}}n.cooked[c.id]||await new Promise(q=>Kh(c,{onStart:q})),c.chapter==="dark"&&Yv();const C=await Lx(c);let R=null;c.chapter==="dark"&&(nt.setView("serve"),R=jv(c,C,await Wv(c,nt))),S==="iced"&&((_t=nt.dish)==null||_t.add(Lh())),L&&(n.regularVisits[L]=(n.regularVisits[L]||0)+1);const I=C>=.9?3:C>=.65?2:1;n.stars[c.id]=Math.max(n.stars[c.id]||0,I),n.cooked[c.id]=(n.cooked[c.id]||0)+1,nt.setView("serve"),nt.slideDishToCustomer(),await le(500);const J=v[I],_=vn(r.id,J);nt.customerJump();const M=go(J.jp,_),O=Promise.race([de(nt,"cust",J.jp,J.yue,_,{hidden:m}),M.then(()=>le(6e3),()=>le(6e3))]),F=Zh()===c.id;let z=1;R&&(await O,await le(400),ve("cust"),z=await Ix(r,c,R,m));let X=Math.round(c.price*u*(.6+.4*C)*r.tip*(F?2:1)*z/10);m&&p===0&&(X*=2);const H=10+I*5;pn(E("div",{class:"sub"},`${Me(c.dish).yue} × ${u}${S?` · ${Me(S).yue}`:""}`),E("div",{class:"stars-big"},...[1,2,3].map(q=>E("span",{class:q<=I?"on":""},"★"))),E("div",{class:"reward"},`🪙 +${X}　✨ +${H} XP`,F?E("span",{class:"tag"},"特價 x2"):null,R&&z!==1?E("span",{class:"tag"},z?`浮誇 x${z}`:"被揭穿"):null,m&&p===0?E("span",{class:"tag"},"🎧 x2"):null)),[1,2,3].forEach(q=>q<=I&&setTimeout(()=>ut("good"),q*180)),nt.coinsFromCustomer(),ur(X,{x:innerWidth*.7,y:innerHeight*.35}),n.coins+=X,n.served++,qc(H),_i(),await Promise.all([le(1600),O.then(()=>le(400))]),R&&(ve(),await $v(c,R)),nt.removeDish();let K=0;t&&i===0||(K=await Dx(r));const G=qn(Ni.bye);return!(t&&i===0)&&G.key&&Math.random()<1/3?await Ux(r,G):await de(nt,"cust",G.jp,G.yue,vn(r.id,G)),ve("cust"),nt.customerOut(),kx(),{coins:X+K,stars:I,levelUps:lt().level-s}}async function Lx(i){Bi(),nt.setView("cook"),nt.useStation(i.station),nt.clearWork();const t=[];for(const n of i.steps){const s=await Sx[n.type](n,nt);t.push({score:s,weight:n.weight||1}),n.verb&&(Pn(n.verb),Ue(n.verb,s>=.7))}Hv();const e=t.reduce((n,s)=>n+s.score*s.weight,0)/t.reduce((n,s)=>n+s.weight,0);return nt.showDish(i.dish),nt.catFace("front"),nt.cat.happy(),ut("perfect"),Bi(),await de(nt,"cat",tn.done.jp,tn.done.yue,"cat"),ve("cat"),e}async function Dx(i){const{st:t,wrongs:e}=ex(lt().chapter,$c),n=vn(i.id,t);Pn(t.key);const s=lt().settings.subs==="tap";de(nt,"cust",t.jp,"",n,{hidden:s});const r=fn([{value:!0,label:t.yue},...e.map(c=>({value:!1,label:c.yue}))]),a=await Qe(r,{title:E("div",{class:"panel-title"},"💬 客人講咩？（答啱有貼士）")});Ue(t.key,a.value),hr(t.lv,a.value);let o=0;return a.value?(ut("perfect"),a.button.classList.add("right"),o=15,lt().coins+=o,qc(5),ur(o),_i(),en("+15 🪙","good")):(ut("bad"),a.button.classList.add("wrong"),[...a.grid.children].forEach((c,l)=>{r[l].value&&c.classList.add("right")}),Ge(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}。之後會再考你！`,3500)),await le(1300),ve("cust"),o}async function Ix(i,t,e,n){const s=e.pitch,r=fa[s];if(Math.random()>=r.ask)return e.outcome="none",r.mult;const a=ke(),o=ya.filter(x=>x.ch==="dark"&&x.lv<=a),c=$c(o.map(x=>x.key)),l=o.find(x=>x.key===c)||o[0],u=fn(o.filter(x=>x.key!==l.key&&x.yue!==l.yue)).slice(0,2),h=vn(i.id,l);Pn(l.key),de(nt,"cust",l.jp,"",h,{hidden:n});const d=await Qe(fn([{value:!0,label:l.yue},...u.map(x=>({value:!1,label:x.yue}))]),{title:E("div",{class:"panel-title"},"🤨 客人追問緊咩？（聽明先知點答）")});Ue(l.key,d.value),hr(l.lv,d.value),ve("cust"),d.value||Ge(`佢問：「${l.yue}」`,2500);const f=(await Qe([{value:"honest",el:E("div",{},"老實交代",E("small",{},Gr.honest.yue))},{value:"bluff",el:E("div",{},"硬撐到底",E("small",{},Gr.bluff.yue))},{value:"deflect",el:E("div",{},"轉移話題",E("small",{},Gr.deflect.yue))}],{title:E("div",{class:"panel-title"},"你點答？")})).value,g=Gr[f];Pn("nakami"),await de(nt,"cat",g.jp,g.yue,"cat"),ve("cat");const v=Math.min(a,2),m=x=>{const S=x[v]||x[0];return de(nt,"cust",S.jp,S.yue,vn(i.id,S))};let p,w;return f==="honest"?(p=1,w="honest",await m(fo.forgive),lt().coins+=0,ut("good")):Math.random()<Xv(s,Jc.suspicion,f)?(p=r.mult,w="believe",await m(fo.believe),ut("perfect")):(p=0,w="expose",await m(fo.expose),ut("bad"),nt.shake(.4)),e.outcome=w,ve("cust"),p}async function Ux(i,t){const e=fn(Ni.bye.filter(r=>r.key!==t.key&&r.yue!==t.yue&&(r.lv??0)<=ke())).slice(0,2);Pn(t.key);const n=fn([{value:!0,label:t.yue},...e.map(r=>({value:!1,label:r.yue}))]);de(nt,"cust",t.jp,"",vn(i.id,t),{hidden:lt().settings.subs==="tap"});const s=await Qe(n,{title:E("div",{class:"panel-title"},"👋 客人走之前講咩？")});Ue(t.key,s.value),hr(t.lv??0,s.value),s.value?(ut("perfect"),en("+5 🪙","good"),lt().coins+=5,_i()):(ut("bad"),Ge(`「${t.jp.replace(/\{.*?\}/g,"")}」= ${t.yue}`,3e3)),await le(900)}async function td(){const i=lt();ut("level"),nt.cat.happy(),en(`Lv.${i.level}!`,"level"),await de(nt,"cat",tn.levelup.jp,tn.levelup.yue,"cat"),ve("cat");const t=kn.find(e=>e.unlock.level===i.level);return t&&await ed(t),t}async function ed(i){tl();const t=Me(i.dish);ut("rare"),de(nt,"cat",tn.newRecipe.jp,tn.newRecipe.yue,"cat"),await Kc("好嘢！",E("div",{class:"unlock"},E("div",{class:"big-emo spin"},Fn(t)),E("div",{class:"panel-title"},"🔓 新食譜解鎖！"),Bn(t.jp,{yue:t.yue,voice:"word",size:"big",autoplay:!0}))),ve("cat")}const Nx=[[1,"🎊 第一位客人！"],[5,"🏅 招呼咗 5 位客人"],[10,"🏆 10 位客人！小黑好驕傲"],[25,"👑 25 位！你係人氣店"],[50,"🌸 50 位！傳說級食堂"]];function kx(){const i=lt();for(const[t,e]of Nx)i.served===t&&!i.achievements.includes("served"+t)&&(i.achievements.push("served"+t),ni(e,2600,"rare"),ut("rare"),Te())}async function nd(){Ma=!0,jh(),Bi(),ve();const i=Ks,t=fs(i.people),e=fs(i.foods),n=fs(i.drinks),s=Js[t.n-1],r=(i.prices[e]+i.prices[n])*t.n;let a=0,o=0;const c={ppl:t,food:e,drink:n,num:s,f:{}},l=ux(c,hx[ke()]);await jr(()=>{nt.catTo("rest"),nt.setView("rest",!0)});const u=`你哋 ${t.n} 個人，每人想食 ${Me(e).yue.replace(/（.*?）/g,"")}，飲 ${Me(n).yue.replace(/（.*?）/g,"")}${l.map(M=>M.task(c)).filter(Boolean).map(M=>`；${M}`).join("")}`;Vv(`${t.n} 位 · ${Me(e).yue.replace(/（.*?）/g,"")} · ${Me(n).yue.replace(/（.*?）/g,"")}`,u),Ge("今次你做客人！小黑做店員 🐈‍⬛",3e3);const h=async(M,O,F,z)=>{M.jp?await de(nt,"cat",M.jp,M.yue,"cat"):(ve("cat"),Ge(M.yue,2500)),o++;let X=!0;for(;;){const H=fn(O.map((G,_t)=>({value:_t,el:Bn(G.jp,{yue:G.yue,voice:"word"})}))),K=await Qe(H,{title:E("div",{class:"panel-title"},z)});if(K.value===F)return ut("good"),K.button.classList.add("right"),X&&a++,await Ne(O[F].jp,"word"),X;ut("bad"),K.button.classList.add("wrong"),X=!1,Ge(`「${O[K.value].yue}」唔係最啱，再試吓！`,3e3),await le(900)}},d=async M=>{for(const O of l.filter(F=>F.phase===M)){const F=O.task(c);F&&Ge(`📋 ${F}`,5e3);const z=O.build(c),X=await h(z.staff||{jp:null,yue:z.prompt},z.options,0,z.title);hr(O.lv,X),z.reply&&await de(nt,"cat",z.reply.jp,z.reply.yue,"cat")}},f=i.people.map(M=>({jp:M.jp,yue:M.yue}));await h(i.staff.welcome,f,i.people.indexOf(t),"👥 你哋幾多位？"),Ue(t.key,!0),await d("enter"),await de(nt,"cat",i.staff.seat.jp,i.staff.seat.yue,"cat"),await d("seat"),await d("preorder");const g=fs(i.foods.filter(M=>M!==e)),v=fs(Js.filter(M=>M!==s)),m=[Dn(i.you.order,{food:e,num:s}),Dn(i.you.order,{food:g,num:s}),Dn(i.you.order,{food:e,num:v})];await h(i.staff.order,m,0,"🍽️ 點餐（記住人數！）"),await d("order");const p=fs(i.drinks.filter(M=>M!==n)),w=[Dn(i.you.drink,{drink:n,num:s}),Dn(i.you.drink,{drink:p,num:s}),Dn(i.you.drink,{drink:n,num:v})];await h(i.staff.drink,w,0,"🥤 飲品"),await h(i.staff.confirm,[i.you.yes,i.you.wrongPay,i.you.wrongGreet],0,"✅ 就咁多？"),await de(nt,"cat",i.staff.wait.jp,i.staff.wait.yue,"cat"),await d("wait"),ve(),Bi(),await jr(()=>{nt.setView("restTable",!0),nt.restServe([e,n],t.n)}),await de(nt,"cat",i.staff.serve.jp,i.staff.serve.yue,"cat"),await d("mid"),await h({jp:null,yue:"（食之前講咩？）"},[i.you.itadakimasu,i.you.wrongEat,i.you.gochisou],0,"🙏 開動之前講咩？"),Ue("itadakimasu",!0),Bi(),ve(),Ge("😋 食緊… 好好味！",1800),await le(1800),await jr(()=>{nt.restClear(),nt.setView("rest",!0)}),await h({jp:null,yue:"（食完講咩？）"},[i.you.gochisou,i.you.itadakimasu,i.you.wrongGreet],0,"😊 食完講咩？"),Ue("gochisousama",!0),await d("after"),await h({jp:null,yue:"（想埋單）"},[i.you.kaikei,i.you.wrongPay,i.you.no],0,"🧾 叫埋單"),Ue("okaikei",!0),await d("pay");const x=Dn(ke()>0&&Math.random()<.5?i.staff.pay2:i.staff.pay,{price:r});await de(nt,"cat",x.jp,"（聽吓幾錢？）","cat",{hidden:!0}),o++;const S=fn([r+100,Math.max(100,r-50),r+500,r*2].filter(M=>M!==r)).slice(0,2);let L=!0;for(;;){const M=await Qe(fn([r,...S]).map(O=>({value:O,label:`<b>${O}円</b>`})),{title:E("div",{class:"panel-title"},"💴 要畀幾錢？（撳泡泡可以睇字幕）"),cols:3});if(M.value===r){ut("coin"),M.button.classList.add("right"),L&&a++;break}ut("bad"),M.button.classList.add("wrong"),L=!1,Ne(x.jp,"cat"),await le(700)}await d("receipt"),await de(nt,"cat",i.staff.bye.jp,i.staff.bye.yue,"cat");const C=a/o,R=40+Math.round(C*80),I=20+Math.round(C*20);lt().restaurantDone++,lt().coins+=R;const J=qc(I);Te(),_i(),ut("level");const _=C===1?"💮":C>.7?"⭕":"🔺";await Kc("返廚房 🏠",E("div",{class:"unlock"},E("div",{class:"big-emo spin"},_),E("div",{class:"panel-title"},`點餐成功！一次答啱 ${a} / ${o}`),E("div",{class:"reward"},`🪙 +${R}　✨ +${I} XP　🏮 旅遊印章 x${lt().restaurantDone}`))),ur(R),ve(),se("#taskbar").classList.remove("show"),await jr(()=>{nt.catTo("kitchen"),nt.setView("kitchen",!0)}),J&&await td(),Wi()}
