(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Br=i=>new URL(`./art/game/${i}.webp`,document.baseURI).href;function wi(i,t="",e=""){const n=document.createElement("img");return n.src=Br(i),n.alt=t,n.className=`art ${e}`,n.draggable=!1,n.decoding="async",n}const An=i=>{if(!i.textIcon)return wi(`${i.cat}_${i.id}`,i.yue);const t=document.createElement("span");return t.className="food-icon",t.setAttribute("role","img"),t.setAttribute("aria-label",i.yue),t.textContent=i.emoji,t},Ic={"🪙":"coin","🔥":"streak","📚":"book","📖":"book","🛍️":"shop","⚙️":"settings","🔊":"speaker","✕":"close","❤️":"heart","💖":"heart","💕":"heart","🐾":"paw","🔒":"lock","⭐":"star_on","★":"star_on","☆":"star_off","🎁":"gift","🎉":"celebrate","🎊":"celebrate","🔓":"unlock","🎧":"listen","🍽️":"serves","⏱️":"timer","🎯":"target","✨":"xp","🌟":"rare","🎙️":"mic","📅":"calendar","📊":"stats","💴":"yen","🧾":"receipt","🌱":"grow_1","🌿":"grow_2","🌳":"grow_3","🌸":"grow_4","💮":"stamp_hanamaru","⭕":"stamp_maru","🔺":"stamp_sankaku","🏅":"medal","🏆":"trophy","👑":"crown","🏮":"open_shop","🐈‍⬛":"@logo_cat"};function qr(i){var s;if((s=i.closest)!=null&&s.call(i,"script,style"))return;const t=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),e=[];for(;t.nextNode();)e.push(t.currentNode);const n=new RegExp(Object.keys(Ic).join("|"),"gu");for(const r of e){if(r.parentElement.closest("script,style"))continue;const a=r.textContent;if(n.lastIndex=0,!n.test(a))continue;n.lastIndex=0;const o=document.createDocumentFragment();let c=0;for(const l of a.matchAll(n)){o.append(a.slice(c,l.index));const h=Ic[l[0]];o.append(wi(h.startsWith("@")?h.slice(1):`ui_${h}`,l[0])),c=l.index+l[0].length}o.append(a.slice(c)),r.replaceWith(o)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="169",Su=0,Uc=1,bu=2,tc=1,ih=2,On=3,ii=0,We=1,Ye=2,ti=0,es=1,Nc=2,Fc=3,Oc=4,Eu=5,vi=100,wu=101,Tu=102,Au=103,Ru=104,Cu=200,Pu=201,Lu=202,Du=203,Ja=204,Za=205,Iu=206,Uu=207,Nu=208,Fu=209,Ou=210,ku=211,Bu=212,zu=213,Hu=214,Qa=0,to=1,eo=2,as=3,no=4,io=5,so=6,ro=7,sh=0,Vu=1,Gu=2,ei=0,Wu=1,Xu=2,ju=3,rh=4,qu=5,Yu=6,$u=7,ah=300,os=301,cs=302,ao=303,oo=304,Yr=306,co=1e3,yi=1001,lo=1002,dn=1003,Ku=1004,Ks=1005,vn=1006,sa=1007,Mi=1008,Wn=1009,oh=1010,ch=1011,Is=1012,ec=1013,Ti=1014,Bn=1015,Vs=1016,nc=1017,ic=1018,ls=1020,lh=35902,hh=1021,uh=1022,xn=1023,dh=1024,fh=1025,ns=1026,hs=1027,ph=1028,sc=1029,mh=1030,rc=1031,ac=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,vo=37808,xo=37809,yo=37810,Mo=37811,So=37812,bo=37813,Eo=37814,wo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Lr=36492,Do=36494,Io=36495,gh=36283,Uo=36284,No=36285,Fo=36286,Ju=3200,Zu=3201,_h=0,Qu=1,Qn="",ke="srgb",oi="srgb-linear",oc="display-p3",$r="display-p3-linear",zr="linear",pe="srgb",Hr="rec709",Vr="p3",Ii=7680,kc=519,td=512,ed=513,nd=514,vh=515,id=516,sd=517,rd=518,ad=519,Oo=35044,Bc="300 es",zn=2e3,Gr=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,ko=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function od(i,t){return(i%t+t)%t}function aa(i,t,e){return(1-e)*i+e*t}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],E=s[1],y=s[4],M=s[7],P=s[2],R=s[5],A=s[8];return r[0]=a*v+o*E+c*P,r[3]=a*m+o*y+c*R,r[6]=a*p+o*M+c*A,r[1]=l*v+h*E+u*P,r[4]=l*m+h*y+u*R,r[7]=l*p+h*M+u*A,r[2]=d*v+f*E+g*P,r[5]=d*m+f*y+g*R,r[8]=d*p+f*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Wt;function xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){const i=Us("canvas");return i.style.display="block",i}const zc={};function Dr(i){i in zc||(zc[i]=!0,console.warn(i))}function ld(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ud(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[oi]:{transfer:zr,primaries:Hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ke]:{transfer:pe,primaries:Hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:zr,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vc),fromReference:i=>i.applyMatrix3(Hc)},[oc]:{transfer:pe,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vc),fromReference:i=>i.applyMatrix3(Hc).convertLinearToSRGB()}},dd=new Set([oi,$r]),re={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=gs[t].toReference,s=gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===Qn?zr:gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(gs[t].luminanceCoefficients)}};function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class fd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Us("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pd=0;class yh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(la(s[a].image)):r.push(la(s[a]))}else r=la(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Be extends fs{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=yi,s=yi,r=vn,a=Mi,o=xn,c=Wn,l=Be.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Hn(),this.name="",this.source=new yh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=ah;Be.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(f+1)/2,P=(p+1)/2,R=(h+d)/4,A=(u+v)/4,L=(g+m)/4;return y>M&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=A/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=L/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mh extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*v,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),R=Math.atan2(P,p*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const M=o*E;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+v*M,m===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new C,Gc=new Gs;class Ws{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Zs.subVectors(this.max,_s),Ni.subVectors(t.a,_s),Fi.subVectors(t.b,_s),Oi.subVectors(t.c,_s),qn.subVectors(Fi,Ni),Yn.subVectors(Oi,Fi),li.subVectors(Ni,Oi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-li.z,li.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-li.y,li.x,0];return!ua(e,Ni,Fi,Oi,Zs)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,Ni,Fi,Oi,Zs))?!1:(Qs.crossVectors(qn,Yn),e=[Qs.x,Qs.y,Qs.z],ua(e,Ni,Fi,Oi,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new C,new C,new C,new C,new C,new C,new C,new C],pn=new C,Js=new Ws,Ni=new C,Fi=new C,Oi=new C,qn=new C,Yn=new C,li=new C,_s=new C,Zs=new C,Qs=new C,hi=new C;function ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);const o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const vd=new Ws,vs=new C,da=new C;class Kr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(da)),this.expandByPoint(vs.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new C,fa=new C,tr=new C,$n=new C,pa=new C,er=new C,ma=new C;class cc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fa.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(fa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=$n.dot(this.direction),c=-$n.dot(tr),l=$n.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fa).addScaledVector(tr,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){pa.subVectors(e,t),er.subVectors(n,t),ma.crossVectors(pa,er);let a=this.direction.dot(ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const c=o*this.direction.dot(er.crossVectors($n,er));if(c<0)return null;const l=o*this.direction.dot(pa.cross($n));if(l<0||c+l>a)return null;const h=-o*$n.dot(ma);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,yd)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Kn.crossVectors(n,Ze),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Kn.crossVectors(n,Ze)),Kn.normalize(),nr.crossVectors(Ze,Kn),s[0]=Kn.x,s[4]=nr.x,s[8]=Ze.x,s[1]=Kn.y,s[5]=nr.y,s[9]=Ze.y,s[2]=Kn.z,s[6]=nr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],y=n[7],M=n[11],P=n[15],R=s[0],A=s[4],L=s[8],K=s[12],_=s[1],S=s[5],F=s[9],O=s[13],H=s[2],X=s[6],B=s[10],$=s[14],G=s[3],ft=s[7],pt=s[11],mt=s[15];return r[0]=a*R+o*_+c*H+l*G,r[4]=a*A+o*S+c*X+l*ft,r[8]=a*L+o*F+c*B+l*pt,r[12]=a*K+o*O+c*$+l*mt,r[1]=h*R+u*_+d*H+f*G,r[5]=h*A+u*S+d*X+f*ft,r[9]=h*L+u*F+d*B+f*pt,r[13]=h*K+u*O+d*$+f*mt,r[2]=g*R+v*_+m*H+p*G,r[6]=g*A+v*S+m*X+p*ft,r[10]=g*L+v*F+m*B+p*pt,r[14]=g*K+v*O+m*$+p*mt,r[3]=E*R+y*_+M*H+P*G,r[7]=E*A+y*S+M*X+P*ft,r[11]=E*L+y*F+M*B+P*pt,r[15]=E*K+y*O+M*$+P*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+v*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,M=h*v*l-g*u*l+g*o*f-a*v*f-h*o*p+a*u*p,P=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,R=e*E+n*y+s*M+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*A,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*A,t[4]=y*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*A,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*A,t[8]=M*A,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*A,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*A,t[12]=P*A,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,E=c*l,y=c*h,M=c*u,P=n.x,R=n.y,A=n.z;return s[0]=(1-(v+p))*P,s[1]=(f+M)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-M)*R,s[5]=(1-(d+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+y)*A,s[9]=(m-E)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const l=1/r,h=1/a,u=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===zn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,v;if(o===zn)g=(a+r)*u,v=-2*u;else if(o===Gr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new C,mn=new le,xd=new C(0,0,0),yd=new C(1,1,1),Kn=new C,nr=new C,Ze=new C,Wc=new le,Xc=new Gs;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Md=0;const jc=new C,Bi=new Gs,In=new le,ir=new C,xs=new C,Sd=new C,bd=new Gs,qc=new C(1,0,0),Yc=new C(0,1,0),$c=new C(0,0,1),Kc={type:"added"},Ed={type:"removed"},zi={type:"childadded",child:null},ga={type:"childremoved",child:null};class Te extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new Rn,n=new Gs,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Wt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(xs,ir,this.up):In.lookAt(ir,xs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(In),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),ga.child=t,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new C,Un=new C,_a=new C,Nn=new C,Hi=new C,Vi=new C,Jc=new C,va=new C,xa=new C,ya=new C,Ma=new ce,Sa=new ce,ba=new ce;class un{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Un.subVectors(n,e),_a.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Un),c=gn.dot(_a),l=Un.dot(Un),h=Un.dot(_a),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ma.setScalar(0),Sa.setScalar(0),ba.setScalar(0),Ma.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(Sa,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Un.subVectors(t,e),gn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),gn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),Vi.subVectors(r,n),va.subVectors(t,n);const c=Hi.dot(va),l=Vi.dot(va);if(c<=0&&l<=0)return e.copy(n);xa.subVectors(t,s);const h=Hi.dot(xa),u=Vi.dot(xa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Hi,a);ya.subVectors(t,r);const f=Hi.dot(ya),g=Vi.dot(ya);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Vi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Jc,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=od(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ea(a,r,t+1/3),this.g=Ea(a,r,t),this.b=Ea(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return re.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ie(Oe.r*255,0,255))*65536+Math.round(Ie(Oe.g*255,0,255))*256+Math.round(Ie(Oe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ke){re.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(sr);const n=aa(Jn.h,sr.h,e),s=aa(Jn.s,sr.s,e),r=aa(Jn.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new qt;qt.NAMES=Sh;let wd=0;class Ci extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=es,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Za,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new C,rr=new nt;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oo&&(t.usage=this.usage),t}}class bh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Td=0;const cn=new le,wa=new Te,Gi=new C,Qe=new Ws,ys=new Ws,Ce=new C;class ze extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Eh:bh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Qe.min,ys.min),Qe.expandByPoint(Ce),Ce.addVectors(Qe.max,ys.max),Qe.expandByPoint(Ce)):(Qe.expandByPoint(ys.min),Qe.expandByPoint(ys.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(t,l),Ce.add(Gi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new C,c[L]=new C;const l=new C,h=new C,u=new C,d=new nt,f=new nt,g=new nt,v=new C,m=new C;function p(L,K,_){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,K),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,K),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[L].add(v),o[K].add(v),o[_].add(v),c[L].add(m),c[K].add(m),c[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,K=E.length;L<K;++L){const _=E[L],S=_.start,F=_.count;for(let O=S,H=S+F;O<H;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new C,M=new C,P=new C,R=new C;function A(L){P.fromBufferAttribute(s,L),R.copy(P);const K=o[L];y.copy(K),y.sub(P.multiplyScalar(P.dot(K))).normalize(),M.crossVectors(R,K);const S=M.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,S)}for(let L=0,K=E.length;L<K;++L){const _=E[L],S=_.start,F=_.count;for(let O=S,H=S+F;O<H;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new le,ui=new cc,ar=new Kr,Qc=new C,or=new C,cr=new C,lr=new C,Ta=new C,hr=new C,tl=new C,ur=new C;class ut extends Te{constructor(t=new ze,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ta.fromBufferAttribute(u,t),a?hr.addScaledVector(Ta,h):hr.addScaledVector(Ta.sub(e),h))}e.add(hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(ar.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ar,Qc)===null||ui.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,P=y;M<P;M+=3){const R=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);s=dr(this,p,t,n,l,h,u,R,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=dr(this,a,t,n,l,h,u,E,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,P=y;M<P;M+=3){const R=M,A=M+1,L=M+2;s=dr(this,p,t,n,l,h,u,R,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=m,y=m+1,M=m+2;s=dr(this,a,t,n,l,h,u,E,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ad(i,t,e,n,s,r,a,o){let c;if(t.side===We?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ii,o),c===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:i}}function dr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,or),i.getVertexPosition(c,cr),i.getVertexPosition(l,lr);const h=Ad(i,t,e,n,or,cr,lr,tl);if(h){const u=new C;un.getBarycoord(tl,or,cr,lr,u),s&&(h.uv=un.getInterpolatedAttribute(s,o,c,l,u,new nt)),r&&(h.uv1=un.getInterpolatedAttribute(r,o,c,l,u,new nt)),a&&(h.normal=un.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};un.getNormal(or,cr,lr,d.normal),h.face=d,h.barycoord=u}return h}class Ee extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(v,m,p,E,y,M,P,R,A,L,K){const _=M/A,S=P/L,F=M/2,O=P/2,H=R/2,X=A+1,B=L+1;let $=0,G=0;const ft=new C;for(let pt=0;pt<B;pt++){const mt=pt*S-O;for(let jt=0;jt<X;jt++){const Qt=jt*_-F;ft[v]=Qt*E,ft[m]=mt*y,ft[p]=H,l.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[p]=R>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(jt/A),u.push(1-pt/L),$+=1}}for(let pt=0;pt<L;pt++)for(let mt=0;mt<A;mt++){const jt=d+mt+X*pt,Qt=d+mt+X*(pt+1),j=d+(mt+1)+X*(pt+1),et=d+(mt+1)+X*pt;c.push(jt,Qt,et),c.push(Qt,j,et),G+=6}o.addGroup(f,G,K),f+=G,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=us(i[e]);for(const s in n)t[s]=n[s]}return t}function Rd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Cd={clone:us,merge:Ve};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Th extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new C,el=new nt,nl=new nt;class nn extends Th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Dd extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new nn(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const a=new nn(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const o=new nn(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const c=new nn(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new nn(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ah extends Be{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Id extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ah(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ti});r.uniforms.tEquirect.value=e;const a=new ut(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=vn),new Dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Aa=new C,Ud=new C,Nd=new Wt;class gi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Kr,fr=new C;class hc{constructor(t=new gi,e=new gi,n=new gi,s=new gi,r=new gi,a=new gi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],E=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+a,d+h,m+g,M+E).normalize(),n[3].setComponents(c-a,d-h,m-g,M-E).normalize(),n[4].setComponents(c-o,d-u,m-v,M-y).normalize(),e===zn)n[5].setComponents(c+o,d+u,m+v,M+y).normalize();else if(e===Gr)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class en extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const E=p*d-a;for(let y=0;y<l;y++){const M=y*u-r;g.push(M,-E,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const y=E+l*p,M=E+l*(p+1),P=E+1+l*(p+1),R=E+1+l*p;f.push(y,M,R),f.push(M,P,R)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.widthSegments,t.heightSegments)}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,of=`#define PI 3.141592653589793
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
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`
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
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cf=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,Of=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qf=`#if defined( USE_POINTS_UV )
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
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,cm=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,hm=`#define TOON
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
}`,um=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Od,alphahash_pars_fragment:kd,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Gd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:jd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:$d,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:of,cube_uv_reflection_fragment:cf,defaultnormal_vertex:lf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:vf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:Sf,fog_fragment:bf,fog_pars_fragment:Ef,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Rf,lights_pars_begin:Cf,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:If,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:kf,lights_fragment_end:Bf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Gf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:jf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Qf,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:lp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:bp,skinning_pars_vertex:Ep,skinning_vertex:wp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Ip,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:kp,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:Hp,cube_frag:Vp,depth_vert:Gp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:jp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:$p,linedashed_frag:Kp,meshbasic_vert:Jp,meshbasic_frag:Zp,meshlambert_vert:Qp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:cm,meshtoon_vert:lm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},ht={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ve([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ve([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ve([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ve([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ve([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ve([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ve([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ve([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ve([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ve([ht.lights,ht.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Sn.physical={uniforms:Ve([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const pr={r:0,b:0,g:0},fi=new Rn,_m=new le;function vm(i,t,e,n,s,r,a){const o=new qt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function v(E){let y=!1;const M=g(E);M===null?p(o,c):M&&M.isColor&&(p(M,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Yr)?(h===void 0&&(h=new ut(new Ee(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:us(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(y.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(fi)),h.material.toneMapped=re.getTransfer(M.colorSpace)!==pe,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ut(new en(2,2),new si({name:"BackgroundMaterial",uniforms:us(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,y){E.getRGB(pr,wh(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:v,addToRenderList:m}}function xm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,S,F,O,H){let X=!1;const B=u(O,F,S);r!==B&&(r=B,l(r.object)),X=f(_,O,F,H),X&&g(_,O,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(_,S,F,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,F){const O=F.wireframe===!0;let H=n[_.id];H===void 0&&(H={},n[_.id]=H);let X=H[S.id];X===void 0&&(X={},H[S.id]=X);let B=X[O];return B===void 0&&(B=d(c()),X[O]=B),B}function d(_){const S=[],F=[],O=[];for(let H=0;H<e;H++)S[H]=0,F[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:O,object:_,attributes:{},index:null}}function f(_,S,F,O){const H=r.attributes,X=S.attributes;let B=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){const pt=H[G];let mt=X[G];if(mt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),pt===void 0||pt.attribute!==mt||mt&&pt.data!==mt.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(_,S,F,O){const H={},X=S.attributes;let B=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){let pt=X[G];pt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));const mt={};mt.attribute=pt,pt&&pt.data&&(mt.data=pt.data),H[G]=mt,B++}r.attributes=H,r.attributesNum=B,r.index=O}function v(){const _=r.newAttributes;for(let S=0,F=_.length;S<F;S++)_[S]=0}function m(_){p(_,0)}function p(_,S){const F=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;F[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),H[_]!==S&&(i.vertexAttribDivisor(_,S),H[_]=S)}function E(){const _=r.newAttributes,S=r.enabledAttributes;for(let F=0,O=S.length;F<O;F++)S[F]!==_[F]&&(i.disableVertexAttribArray(F),S[F]=0)}function y(_,S,F,O,H,X,B){B===!0?i.vertexAttribIPointer(_,S,F,H,X):i.vertexAttribPointer(_,S,F,O,H,X)}function M(_,S,F,O){v();const H=O.attributes,X=F.getAttributes(),B=S.defaultAttributeValues;for(const $ in X){const G=X[$];if(G.location>=0){let ft=H[$];if(ft===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),ft!==void 0){const pt=ft.normalized,mt=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;const Qt=jt.buffer,j=jt.type,et=jt.bytesPerElement,bt=j===i.INT||j===i.UNSIGNED_INT||ft.gpuType===ec;if(ft.isInterleavedBufferAttribute){const dt=ft.data,Ft=dt.stride,Ut=ft.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht,dt.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)m(G.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ht=0;Ht<G.locationSize;Ht++)y(G.location+Ht,mt/G.locationSize,j,pt,Ft*et,(Ut+mt/G.locationSize*Ht)*et,bt)}else{if(ft.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt,ft.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let dt=0;dt<G.locationSize;dt++)m(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let dt=0;dt<G.locationSize;dt++)y(G.location+dt,mt/G.locationSize,j,pt,mt*et,mt/G.locationSize*dt*et,bt)}}else if(B!==void 0){const pt=B[$];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}E()}function P(){L();for(const _ in n){const S=n[_];for(const F in S){const O=S[F];for(const H in O)h(O[H].object),delete O[H];delete S[F]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const F in S){const O=S[F];for(const H in O)h(O[H].object),delete O[H];delete S[F]}delete n[_.id]}function A(_){for(const S in n){const F=n[S];if(F[_.id]===void 0)continue;const O=F[_.id];for(const H in O)h(O[H].object),delete O[H];delete F[_.id]}}function L(){K(),a=!0,r!==s&&(r=s,l(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:K,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function ym(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!L)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}function Sm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new gi,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,y=E*4;let M=p.clippingState||null;c.value=M,M=h(g,d,y,f);for(let P=0;P!==y;++P)M[P]=e[P];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==v;++y,M+=4)a.copy(u[y]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function bm(i){let t=new WeakMap;function e(a,o){return o===ao?a.mapping=os:o===oo&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ao||o===oo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Id(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ch extends Th{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,il=[.125,.215,.35,.446,.526,.582],xi=20,Ra=new Ch,sl=new qt;let Ca=null,Pa=0,La=0,Da=!1;const _i=(1+Math.sqrt(5))/2,ji=1/_i,rl=[new C(-_i,ji,0),new C(_i,ji,0),new C(-ji,0,_i),new C(ji,0,_i),new C(0,_i,-ji),new C(0,_i,ji),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Pa,La),this._renderer.xr.enabled=Da,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Vs,format:xn,colorSpace:oi,depthBuffer:!1},s=ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=wm(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,s){const o=new nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sl),h.toneMapping=ei,h.autoClear=!1;const f=new rn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new ut(new Ee,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(sl),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;mr(s,E*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rl[(s-r-1)%rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let E=0;for(let A=0;A<xi;++A){const L=A/v,K=Math.exp(-L*L/2);p.push(K),A===0?E+=K:A<m&&(E+=2*K)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],P=3*M*(s>y-Qi?s-y+Qi:0),R=4*(this._cubeSize-M);mr(e,P,R,3*M,2*M),c.setRenderTarget(e),c.render(u,Ra)}}function Em(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+il.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Qi?c=il[a-i+Qi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*f),y=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,L=R>2?0:-1,K=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(K,v*g*R),y.set(d,m*g*R);const _=[R,R,R,R,R,R];M.set(_,p*g*R)}const P=new ze;P.setAttribute("position",new Mn(E,v)),P.setAttribute("uv",new Mn(y,m)),P.setAttribute("faceIndex",new Mn(M,p)),t.push(P),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ol(i,t,e){const n=new Ai(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wm(i,t,e){const n=new Float32Array(xi),s=new C(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function cl(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ll(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Tm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ao||c===oo,h=c===os||c===cs;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new al(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new al(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Am(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let y=0,M=E.length;y<M;y+=3){const P=E[y+0],R=E[y+1],A=E[y+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const E=g.array;v=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const P=y+0,R=y+1,A=y+2;d.push(P,R,R,A,A,P)}}else return;const m=new(xh(d)?Eh:bh)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Cm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E];for(let E=0;E<v.length;E++)e.update(p,n,v[E])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let _=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*R*4*u),L=new Mh(A,P,R,u);L.type=Bn,L.needsUpdate=!0;const K=M*4;for(let S=0;S<u;S++){const F=p[S],O=E[S],H=y[S],X=P*R*4*S;for(let B=0;B<F.count;B++){const $=B*K;g===!0&&(s.fromBufferAttribute(F,B),A[X+$+0]=s.x,A[X+$+1]=s.y,A[X+$+2]=s.z,A[X+$+3]=0),v===!0&&(s.fromBufferAttribute(O,B),A[X+$+4]=s.x,A[X+$+5]=s.y,A[X+$+6]=s.z,A[X+$+7]=0),m===!0&&(s.fromBufferAttribute(H,B),A[X+$+8]=s.x,A[X+$+9]=s.y,A[X+$+10]=s.z,A[X+$+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new nt(P,R)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ph extends Be{constructor(t,e,n,s,r,a,o,c,l,h=ns){if(h!==ns&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ti),n===void 0&&h===hs&&(n=ls),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lh=new Be,hl=new Ph(1,1),Dh=new Mh,Ih=new _d,Uh=new Ah,ul=[],dl=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ul[s];if(r===void 0&&(r=new Float32Array(s),ul[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=dl[t];e===void 0&&(e=new Int32Array(t),dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;ml.set(n),i.uniformMatrix2fv(this.addr,!1,ml),Re(e,n)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;pl.set(n),i.uniformMatrix3fv(this.addr,!1,pl),Re(e,n)}}function Bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;fl.set(n),i.uniformMatrix4fv(this.addr,!1,fl),Re(e,n)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hl.compareFunction=vh,r=hl):r=Lh,e.setTexture2D(t||r,s)}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uh,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function Zm(i){switch(i){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return jm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}function Qm(i,t){i.uniform1fv(this.addr,t)}function t0(i,t){const e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function e0(i,t){const e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function n0(i,t){const e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function i0(i,t){const e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s0(i,t){const e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){const e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a0(i,t){i.uniform1iv(this.addr,t)}function o0(i,t){i.uniform2iv(this.addr,t)}function c0(i,t){i.uniform3iv(this.addr,t)}function l0(i,t){i.uniform4iv(this.addr,t)}function h0(i,t){i.uniform1uiv(this.addr,t)}function u0(i,t){i.uniform2uiv(this.addr,t)}function d0(i,t){i.uniform3uiv(this.addr,t)}function f0(i,t){i.uniform4uiv(this.addr,t)}function p0(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Lh,r[a])}function m0(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ih,r[a])}function g0(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uh,r[a])}function _0(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dh,r[a])}function v0(i){switch(i){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return c0;case 35669:case 35673:return l0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}}class y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}}class M0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function gl(i,t){i.seq.push(t),i.map[t.id]=t}function S0(i,t,e){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),a=Ia.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){gl(e,l===void 0?new x0(o,i,t):new y0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new M0(o),gl(e,u)),e=u}}}class Ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);S0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function _l(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const b0=37297;let E0=0;function w0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function T0(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===Vr&&e===Hr?n="LinearDisplayP3ToLinearSRGB":t===Hr&&e===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case oi:case $r:return[n,"LinearTransferOETF"];case ke:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+w0(i.getShaderSource(t),a)}else return s}function A0(i,t){const e=T0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function R0(i,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case ju:e="Cineon";break;case rh:e="ACESFilmic";break;case Yu:e="AgX";break;case $u:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new C;function C0(){re.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function L0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function xl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(I0,N0)}const U0=new Map;function N0(i,t){let e=Gt[t];if(e===void 0){const n=U0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bo(e)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(i){return i.replace(F0,O0)}function O0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function B0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case cs:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function H0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Vu:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function V0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=k0(e),l=B0(e),h=z0(e),u=H0(e),d=V0(e),f=P0(e),g=L0(r),v=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`)):(m=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ei?R0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,A0("linearToOutputTexel",e.outputColorSpace),C0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Bo(a),a=xl(a,e),a=yl(a,e),o=Bo(o),o=xl(o,e),o=yl(o,e),a=Ml(a),o=Ml(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+a,M=E+p+o,P=_l(s,s.VERTEX_SHADER,y),R=_l(s,s.FRAGMENT_SHADER,M);s.attachShader(v,P),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(R).trim();let X=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,R);else{const $=vl(s,P,"vertex"),G=vl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+$+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||H==="")&&(B=!1);B&&(S.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(R),L=new Ir(s,v),K=D0(s,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let K;this.getAttributes=function(){return K===void 0&&A(this),K};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,b0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new j0(t),e.set(t,n)),n}}class j0{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}}function q0(i,t,e,n,s,r,a){const o=new lc,c=new X0,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,F,O,H){const X=O.fog,B=H.geometry,$=_.isMeshStandardMaterial?O.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||$),ft=G&&G.mapping===Yr?G.image.height:null,pt=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,jt=mt!==void 0?mt.length:0;let Qt=0;B.morphAttributes.position!==void 0&&(Qt=1),B.morphAttributes.normal!==void 0&&(Qt=2),B.morphAttributes.color!==void 0&&(Qt=3);let j,et,bt,dt;if(pt){const qe=Sn[pt];j=qe.vertexShader,et=qe.fragmentShader}else j=_.vertexShader,et=_.fragmentShader,c.update(_),bt=c.getVertexShaderID(_),dt=c.getFragmentShaderID(_);const Ft=i.getRenderTarget(),Ut=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,Xt=!!_.map,J=!!_.matcap,T=!!G,ot=!!_.aoMap,at=!!_.lightMap,tt=!!_.bumpMap,ct=!!_.normalMap,Lt=!!_.displacementMap,vt=!!_.emissiveMap,w=!!_.metalnessMap,x=!!_.roughnessMap,k=_.anisotropy>0,q=_.clearcoat>0,Z=_.dispersion>0,Y=_.iridescence>0,At=_.sheen>0,lt=_.transmission>0,Mt=k&&!!_.anisotropyMap,Yt=q&&!!_.clearcoatMap,it=q&&!!_.clearcoatNormalMap,St=q&&!!_.clearcoatRoughnessMap,Bt=Y&&!!_.iridescenceMap,zt=Y&&!!_.iridescenceThicknessMap,Et=At&&!!_.sheenColorMap,$t=At&&!!_.sheenRoughnessMap,Vt=!!_.specularMap,he=!!_.specularColorMap,I=!!_.specularIntensityMap,xt=lt&&!!_.transmissionMap,W=lt&&!!_.thicknessMap,Q=!!_.gradientMap,gt=!!_.alphaMap,yt=_.alphaTest>0,Jt=!!_.alphaHash,Se=!!_.extensions;let je=ei;_.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(je=i.toneMapping);const te={shaderID:pt,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:et,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:dt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:oi,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:J,envMap:T,envMapMode:T&&G.mapping,envMapCubeUVHeight:ft,aoMap:ot,lightMap:at,bumpMap:tt,normalMap:ct,displacementMap:f&&Lt,emissiveMap:vt,normalMapObjectSpace:ct&&_.normalMapType===Qu,normalMapTangentSpace:ct&&_.normalMapType===_h,metalnessMap:w,roughnessMap:x,anisotropy:k,anisotropyMap:Mt,clearcoat:q,clearcoatMap:Yt,clearcoatNormalMap:it,clearcoatRoughnessMap:St,dispersion:Z,iridescence:Y,iridescenceMap:Bt,iridescenceThicknessMap:zt,sheen:At,sheenColorMap:Et,sheenRoughnessMap:$t,specularMap:Vt,specularColorMap:he,specularIntensityMap:I,transmission:lt,transmissionMap:xt,thicknessMap:W,gradientMap:Q,opaque:_.transparent===!1&&_.blending===es&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:Jt,combine:_.combine,mapUv:Xt&&m(_.map.channel),aoMapUv:ot&&m(_.aoMap.channel),lightMapUv:at&&m(_.lightMap.channel),bumpMapUv:tt&&m(_.bumpMap.channel),normalMapUv:ct&&m(_.normalMap.channel),displacementMapUv:Lt&&m(_.displacementMap.channel),emissiveMapUv:vt&&m(_.emissiveMap.channel),metalnessMapUv:w&&m(_.metalnessMap.channel),roughnessMapUv:x&&m(_.roughnessMap.channel),anisotropyMapUv:Mt&&m(_.anisotropyMap.channel),clearcoatMapUv:Yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:$t&&m(_.sheenRoughnessMap.channel),specularMapUv:Vt&&m(_.specularMap.channel),specularColorMapUv:he&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:xt&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:gt&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ct||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(Xt||gt),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:Qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ye,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function E(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)S.push(F),S.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(y(S,_),M(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const S=v[_.type];let F;if(S){const O=Sn[S];F=Cd.clone(O.uniforms)}else F=_.uniforms;return F}function R(_,S){let F;for(let O=0,H=h.length;O<H;O++){const X=h[O];if(X.cacheKey===S){F=X,++F.usedTimes;break}}return F===void 0&&(F=new G0(i,S,_,r),h.push(F)),F}function A(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function L(_){c.remove(_)}function K(){c.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:K}}function Y0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function El(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||$0),n.length>1&&n.sort(d||bl),s.length>1&&s.sort(d||bl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function K0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new El,i.set(n,[a])):s>=r.length?(a=new El,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function J0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new qt};break;case"SpotLight":e={position:new C,direction:new C,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Z0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Q0=0;function tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function eg(i){const t=new J0,e=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new le,a=new le;function o(l){let h=0,u=0,d=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,E=0,y=0,M=0,P=0,R=0,A=0;l.sort(tg);for(let K=0,_=l.length;K<_;K++){const S=l[K],F=S.color,O=S.intensity,H=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],O);A++}else if(S.isDirectionalLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,G=e.get(S);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=S.shadow.matrix,E++}n.directional[f]=B,f++}else if(S.isSpotLight){const B=t.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=H,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[v]=B;const $=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,$.updateMatrices(S),S.castShadow&&R++),n.spotLightMatrix[v]=$.matrix,S.castShadow){const G=e.get(S);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,M++}v++}else if(S.isRectAreaLight){const B=t.get(S);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=B,m++}else if(S.isPointLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){const $=S.shadow,G=e.get(S);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=B,g++}else if(S.isHemisphereLight){const B=t.get(S);B.skyColor.copy(S.color).multiplyScalar(O),B.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==M||L.numSpotMaps!==P||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=M,L.numSpotMaps=P,L.numLightProbes=A,n.version=Q0++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const y=l[p];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function wl(i){const t=new eg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ng(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new wl(i),t.set(s,[o])):r>=a.length?(o=new wl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ig extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,t,e){let n=new hc;const s=new nt,r=new nt,a=new ce,o=new ig({depthPacking:Zu}),c=new sg,l={},h=e.maxTextureSize,u={[ii]:We,[We]:ii,[Ye]:Ye},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let p=this.type;this.render=function(R,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const K=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ti),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==On&&this.type===On,H=p===On&&this.type!==On;for(let X=0,B=R.length;X<B;X++){const $=R[X],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ft=G.getFrameExtents();if(s.multiply(ft),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,G.mapSize.y=r.y)),G.map===null||O===!0||H===!0){const mt=this.type!==On?{minFilter:dn,magFilter:dn}:{};G.map!==null&&G.map.dispose(),G.map=new Ai(s.x,s.y,mt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const pt=G.getViewportCount();for(let mt=0;mt<pt;mt++){const jt=G.getViewport(mt);a.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),F.viewport(a),G.updateMatrices($,mt),n=G.getFrustum(),M(A,L,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===On&&E(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(K,_,S)};function E(R,A){const L=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,L,f,v,null)}function y(R,A,L,K){let _=null;const S=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)_=S;else if(_=L.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=_.uuid,O=A.uuid;let H=l[F];H===void 0&&(H={},l[F]=H);let X=H[O];X===void 0&&(X=_.clone(),H[O]=X,A.addEventListener("dispose",P)),_=X}if(_.visible=A.visible,_.wireframe=A.wireframe,K===On?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=L}return _}function M(R,A,L,K,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const O=t.update(R),H=R.material;if(Array.isArray(H)){const X=O.groups;for(let B=0,$=X.length;B<$;B++){const G=X[B],ft=H[G.materialIndex];if(ft&&ft.visible){const pt=y(R,ft,K,_);R.onBeforeShadow(i,R,A,L,O,pt,G),i.renderBufferDirect(L,null,O,pt,R,G),R.onAfterShadow(i,R,A,L,O,pt,G)}}}else if(H.visible){const X=y(R,H,K,_);R.onBeforeShadow(i,R,A,L,O,X,null),i.renderBufferDirect(L,null,O,X,R,null),R.onAfterShadow(i,R,A,L,O,X,null)}}const F=R.children;for(let O=0,H=F.length;O<H;O++)M(F[O],A,L,K,_)}function P(R){R.target.removeEventListener("dispose",P);for(const L in l){const K=l[L],_=R.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}const cg={[Qa]:to,[eo]:so,[no]:ro,[as]:io,[to]:Qa,[so]:eo,[ro]:no,[io]:as};function lg(i){function t(){let I=!1;const xt=new ce;let W=null;const Q=new ce(0,0,0,0);return{setMask:function(gt){W!==gt&&!I&&(i.colorMask(gt,gt,gt,gt),W=gt)},setLocked:function(gt){I=gt},setClear:function(gt,yt,Jt,Se,je){je===!0&&(gt*=Se,yt*=Se,Jt*=Se),xt.set(gt,yt,Jt,Se),Q.equals(xt)===!1&&(i.clearColor(gt,yt,Jt,Se),Q.copy(xt))},reset:function(){I=!1,W=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,xt=!1,W=null,Q=null,gt=null;return{setReversed:function(yt){xt=yt},setTest:function(yt){yt?bt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(yt){W!==yt&&!I&&(i.depthMask(yt),W=yt)},setFunc:function(yt){if(xt&&(yt=cg[yt]),Q!==yt){switch(yt){case Qa:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=yt}},setLocked:function(yt){I=yt},setClear:function(yt){gt!==yt&&(i.clearDepth(yt),gt=yt)},reset:function(){I=!1,W=null,Q=null,gt=null}}}function n(){let I=!1,xt=null,W=null,Q=null,gt=null,yt=null,Jt=null,Se=null,je=null;return{setTest:function(te){I||(te?bt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(te){xt!==te&&!I&&(i.stencilMask(te),xt=te)},setFunc:function(te,qe,Pn){(W!==te||Q!==qe||gt!==Pn)&&(i.stencilFunc(te,qe,Pn),W=te,Q=qe,gt=Pn)},setOp:function(te,qe,Pn){(yt!==te||Jt!==qe||Se!==Pn)&&(i.stencilOp(te,qe,Pn),yt=te,Jt=qe,Se=Pn)},setLocked:function(te){I=te},setClear:function(te){je!==te&&(i.clearStencil(te),je=te)},reset:function(){I=!1,xt=null,W=null,Q=null,gt=null,yt=null,Jt=null,Se=null,je=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,E=null,y=null,M=null,P=null,R=new qt(0,0,0),A=0,L=!1,K=null,_=null,S=null,F=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),X=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=B>=2);let G=null,ft={};const pt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),jt=new ce().fromArray(pt),Qt=new ce().fromArray(mt);function j(I,xt,W,Q){const gt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(I,yt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<W;Jt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(xt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return yt}const et={};et[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),bt(i.DEPTH_TEST),r.setFunc(as),at(!1),tt(Uc),bt(i.CULL_FACE),T(ti);function bt(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function dt(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Ft(I,xt){return h[I]!==xt?(i.bindFramebuffer(I,xt),h[I]=xt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ut(I,xt){let W=d,Q=!1;if(I){W=u.get(xt),W===void 0&&(W=[],u.set(xt,W));const gt=I.textures;if(W.length!==gt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Jt=gt.length;yt<Jt;yt++)W[yt]=i.COLOR_ATTACHMENT0+yt;W.length=gt.length,Q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Q=!0);Q&&i.drawBuffers(W)}function Ht(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const Xt={[vi]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Xt[Au]=i.MIN,Xt[Ru]=i.MAX;const J={[Cu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function T(I,xt,W,Q,gt,yt,Jt,Se,je,te){if(I===ti){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),I!==Eu){if(I!==v||te!==L){if((m!==vi||y!==vi)&&(i.blendEquation(i.FUNC_ADD),m=vi,y=vi),te)switch(I){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,E=null,M=null,P=null,R.set(0,0,0),A=0,v=I,L=te}return}gt=gt||xt,yt=yt||W,Jt=Jt||Q,(xt!==m||gt!==y)&&(i.blendEquationSeparate(Xt[xt],Xt[gt]),m=xt,y=gt),(W!==p||Q!==E||yt!==M||Jt!==P)&&(i.blendFuncSeparate(J[W],J[Q],J[yt],J[Jt]),p=W,E=Q,M=yt,P=Jt),(Se.equals(R)===!1||je!==A)&&(i.blendColor(Se.r,Se.g,Se.b,je),R.copy(Se),A=je),v=I,L=!1}function ot(I,xt){I.side===Ye?dt(i.CULL_FACE):bt(i.CULL_FACE);let W=I.side===We;xt&&(W=!W),at(W),I.blending===es&&I.transparent===!1?T(ti):T(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(I){K!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),K=I)}function tt(I){I!==Su?(bt(i.CULL_FACE),I!==_&&(I===Uc?i.cullFace(i.BACK):I===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),_=I}function ct(I){I!==S&&(X&&i.lineWidth(I),S=I)}function Lt(I,xt,W){I?(bt(i.POLYGON_OFFSET_FILL),(F!==xt||O!==W)&&(i.polygonOffset(xt,W),F=xt,O=W)):dt(i.POLYGON_OFFSET_FILL)}function vt(I){I?bt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+H-1),G!==I&&(i.activeTexture(I),G=I)}function x(I,xt,W){W===void 0&&(G===null?W=i.TEXTURE0+H-1:W=G);let Q=ft[W];Q===void 0&&(Q={type:void 0,texture:void 0},ft[W]=Q),(Q.type!==I||Q.texture!==xt)&&(G!==W&&(i.activeTexture(W),G=W),i.bindTexture(I,xt||et[I]),Q.type=I,Q.texture=xt)}function k(){const I=ft[G];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(I){jt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),jt.copy(I))}function Et(I){Qt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Qt.copy(I))}function $t(I,xt){let W=c.get(xt);W===void 0&&(W=new WeakMap,c.set(xt,W));let Q=W.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(xt,I.name),W.set(I,Q))}function Vt(I,xt){const Q=c.get(xt).get(I);o.get(xt)!==Q&&(i.uniformBlockBinding(xt,Q,I.__bindingPointIndex),o.set(xt,Q))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,ft={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,E=null,y=null,M=null,P=null,R=new qt(0,0,0),A=0,L=!1,K=null,_=null,S=null,F=null,O=null,jt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:bt,disable:dt,bindFramebuffer:Ft,drawBuffers:Ut,useProgram:Ht,setBlending:T,setMaterial:ot,setFlipSided:at,setCullFace:tt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:vt,activeTexture:w,bindTexture:x,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:St,texImage3D:Bt,updateUBOMapping:$t,uniformBlockBinding:Vt,texStorage2D:Yt,texStorage3D:it,texSubImage2D:Y,texSubImage3D:At,compressedTexSubImage2D:lt,compressedTexSubImage3D:Mt,scissor:zt,viewport:Et,reset:he}}function Tl(i,t,e,n){const s=hg(n);switch(e){case hh:return i*t;case dh:return i*t;case fh:return i*t*2;case ph:return i*t/s.components*s.byteLength;case sc:return i*t/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case uh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(i,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(i,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gh:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(i){switch(i){case Wn:case oh:return{byteLength:1,components:1};case Is:case ch:case Vs:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Ti:case ec:case Bn:return{byteLength:4,components:1};case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):Us("canvas")}function v(w,x,k){let q=1;const Z=vt(w);if((Z.width>k||Z.height>k)&&(q=k/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(q*Z.width),At=Math.floor(q*Z.height);u===void 0&&(u=g(Y,At));const lt=x?g(Y,At):u;return lt.width=Y,lt.height=At,lt.getContext("2d").drawImage(w,0,0,Y,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+At+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==dn&&w.minFilter!==vn}function p(w){i.generateMipmap(w)}function E(w,x,k,q,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=x;if(x===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const At=Z?zr:re.getTransfer(q);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=At===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(w,x){let k;return w?x===null||x===Ti||x===ls?k=i.DEPTH24_STENCIL8:x===Bn?k=i.DEPTH32F_STENCIL8:x===Is&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===ls?k=i.DEPTH_COMPONENT24:x===Bn?k=i.DEPTH_COMPONENT32F:x===Is&&(k=i.DEPTH_COMPONENT16),k}function M(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){const x=w.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&h.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),K(x)}function A(w){const x=n.get(w);if(x.__webglInit===void 0)return;const k=w.source,q=d.get(k);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(w),Object.keys(q).length===0&&d.delete(k)}n.remove(w)}function L(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const k=w.source,q=d.get(k);delete q[x.__cacheKey],a.memory.textures--}function K(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=w.textures;for(let q=0,Z=k.length;q<Z;q++){const Y=n.get(k[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(w)}let _=0;function S(){_=0}function F(){const w=_;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),_+=1,w}function O(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function H(w,x){const k=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(k,w,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function X(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Qt(k,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function B(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Qt(k,w,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function $(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const G={[co]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},ft={[dn]:i.NEAREST,[Ku]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},pt={[td]:i.NEVER,[ad]:i.ALWAYS,[ed]:i.LESS,[vh]:i.LEQUAL,[nd]:i.EQUAL,[rd]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function mt(w,x){if(x.type===Bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===sa||x.magFilter===Ks||x.magFilter===Mi||x.minFilter===vn||x.minFilter===sa||x.minFilter===Ks||x.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==Ks&&x.minFilter!==Mi||x.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",P));const q=x.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const Y=O(x);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[Y].usedTimes++;const At=Z[w.__cacheKey];At!==void 0&&(Z[w.__cacheKey].usedTimes--,At.usedTimes===0&&L(x)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return k}function Qt(w,x,k){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const Z=jt(w,x),Y=x.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+k);const At=n.get(Y);if(Y.version!==At.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const lt=re.getPrimaries(re.workingColorSpace),Mt=x.colorSpace===Qn?null:re.getPrimaries(x.colorSpace),Yt=x.colorSpace===Qn||lt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=v(x.image,!1,s.maxTextureSize);it=Lt(x,it);const St=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type);let zt=E(x.internalFormat,St,Bt,x.colorSpace,x.isVideoTexture);mt(q,x);let Et;const $t=x.mipmaps,Vt=x.isVideoTexture!==!0,he=At.__version===void 0||Z===!0,I=Y.dataReady,xt=M(x,it);if(x.isDepthTexture)zt=y(x.format===hs,x.type),he&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,zt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,St,Bt,null));else if(x.isDataTexture)if($t.length>0){Vt&&he&&e.texStorage2D(i.TEXTURE_2D,xt,zt,$t[0].width,$t[0].height);for(let W=0,Q=$t.length;W<Q;W++)Et=$t[W],Vt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Et.width,Et.height,St,Bt,Et.data):e.texImage2D(i.TEXTURE_2D,W,zt,Et.width,Et.height,0,St,Bt,Et.data);x.generateMipmaps=!1}else Vt?(he&&e.texStorage2D(i.TEXTURE_2D,xt,zt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,St,Bt,it.data)):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,St,Bt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,zt,$t[0].width,$t[0].height,it.depth);for(let W=0,Q=$t.length;W<Q;W++)if(Et=$t[W],x.format!==xn)if(St!==null)if(Vt){if(I)if(x.layerUpdates.size>0){const gt=Tl(Et.width,Et.height,x.format,x.type);for(const yt of x.layerUpdates){const Jt=Et.data.subarray(yt*gt/Et.data.BYTES_PER_ELEMENT,(yt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,yt,Et.width,Et.height,1,St,Jt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Et.width,Et.height,it.depth,St,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,zt,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Et.width,Et.height,it.depth,St,Bt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,zt,Et.width,Et.height,it.depth,0,St,Bt,Et.data)}else{Vt&&he&&e.texStorage2D(i.TEXTURE_2D,xt,zt,$t[0].width,$t[0].height);for(let W=0,Q=$t.length;W<Q;W++)Et=$t[W],x.format!==xn?St!==null?Vt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,W,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Et.width,Et.height,St,Bt,Et.data):e.texImage2D(i.TEXTURE_2D,W,zt,Et.width,Et.height,0,St,Bt,Et.data)}else if(x.isDataArrayTexture)if(Vt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,zt,it.width,it.height,it.depth),I)if(x.layerUpdates.size>0){const W=Tl(it.width,it.height,x.format,x.type);for(const Q of x.layerUpdates){const gt=it.data.subarray(Q*W/it.data.BYTES_PER_ELEMENT,(Q+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,St,Bt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,Bt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,it.width,it.height,it.depth,0,St,Bt,it.data);else if(x.isData3DTexture)Vt?(he&&e.texStorage3D(i.TEXTURE_3D,xt,zt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,Bt,it.data)):e.texImage3D(i.TEXTURE_3D,0,zt,it.width,it.height,it.depth,0,St,Bt,it.data);else if(x.isFramebufferTexture){if(he)if(Vt)e.texStorage2D(i.TEXTURE_2D,xt,zt,it.width,it.height);else{let W=it.width,Q=it.height;for(let gt=0;gt<xt;gt++)e.texImage2D(i.TEXTURE_2D,gt,zt,W,Q,0,St,Bt,null),W>>=1,Q>>=1}}else if($t.length>0){if(Vt&&he){const W=vt($t[0]);e.texStorage2D(i.TEXTURE_2D,xt,zt,W.width,W.height)}for(let W=0,Q=$t.length;W<Q;W++)Et=$t[W],Vt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,St,Bt,Et):e.texImage2D(i.TEXTURE_2D,W,zt,St,Bt,Et);x.generateMipmaps=!1}else if(Vt){if(he){const W=vt(it);e.texStorage2D(i.TEXTURE_2D,xt,zt,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Bt,it)}else e.texImage2D(i.TEXTURE_2D,0,zt,St,Bt,it);m(x)&&p(q),At.__version=Y.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,k){if(x.image.length!==6)return;const q=jt(w,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const Y=n.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+k);const At=re.getPrimaries(re.workingColorSpace),lt=x.colorSpace===Qn?null:re.getPrimaries(x.colorSpace),Mt=x.colorSpace===Qn||At===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Yt&&!it?St[Q]=v(x.image[Q],!0,s.maxCubemapSize):St[Q]=it?x.image[Q].image:x.image[Q],St[Q]=Lt(x,St[Q]);const Bt=St[0],zt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),$t=E(x.internalFormat,zt,Et,x.colorSpace),Vt=x.isVideoTexture!==!0,he=Y.__version===void 0||q===!0,I=Z.dataReady;let xt=M(x,Bt);mt(i.TEXTURE_CUBE_MAP,x);let W;if(Yt){Vt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,$t,Bt.width,Bt.height);for(let Q=0;Q<6;Q++){W=St[Q].mipmaps;for(let gt=0;gt<W.length;gt++){const yt=W[gt];x.format!==xn?zt!==null?Vt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,yt.width,yt.height,zt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,$t,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,yt.width,yt.height,zt,Et,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,$t,yt.width,yt.height,0,zt,Et,yt.data)}}}else{if(W=x.mipmaps,Vt&&he){W.length>0&&xt++;const Q=vt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,$t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,zt,Et,St[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,St[Q].width,St[Q].height,0,zt,Et,St[Q].data);for(let gt=0;gt<W.length;gt++){const Jt=W[gt].image[Q].image;Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Jt.width,Jt.height,zt,Et,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,$t,Jt.width,Jt.height,0,zt,Et,Jt.data)}}else{Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,zt,Et,St[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,zt,Et,St[Q]);for(let gt=0;gt<W.length;gt++){const yt=W[gt];Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,zt,Et,yt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,$t,zt,Et,yt.image[Q])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function et(w,x,k,q,Z,Y){const At=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),Mt=E(k.internalFormat,At,lt,k.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>Y),St=Math.max(1,x.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,Mt,it,St,x.depth,0,At,lt,null):e.texImage2D(Z,Y,Mt,it,St,0,At,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,n.get(k).__webglTexture,0,at(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,n.get(k).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(w,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=y(x.stencilBuffer,Z),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=at(x);tt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,w)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],At=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),Mt=E(Y.internalFormat,At,lt,Y.colorSpace),Yt=at(x);k&&tt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Mt,x.width,x.height):tt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,Z=at(x);if(x.depthTexture.format===ns)tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===hs)tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ft(w){const x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),bt(x.__webglDepthbuffer[q],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),bt(x.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(w,x,k){const q=n.get(w);x!==void 0&&et(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ft(w)}function Ht(w){const x=w.texture,k=n.get(w),q=n.get(x);w.addEventListener("dispose",R);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,At=Z.length>1;if(At||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)k.__webglFramebuffer[lt][Mt]=i.createFramebuffer()}else k.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)k.__webglFramebuffer[lt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(At)for(let lt=0,Mt=Z.length;lt<Mt;lt++){const Yt=n.get(Z[lt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&tt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const Mt=Z[lt];k.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Yt=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),St=E(Mt.internalFormat,Yt,it,Mt.colorSpace,w.isXRRenderTarget===!0),Bt=at(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,St,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),mt(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)et(k.__webglFramebuffer[lt][Mt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Mt);else et(k.__webglFramebuffer[lt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let lt=0,Mt=Z.length;lt<Mt;lt++){const Yt=Z[lt],it=n.get(Yt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),mt(i.TEXTURE_2D,Yt),et(k.__webglFramebuffer,w,Yt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,q.__webglTexture),mt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)et(k.__webglFramebuffer[Mt],w,x,i.COLOR_ATTACHMENT0,lt,Mt);else et(k.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&p(lt),e.unbindTexture()}w.depthBuffer&&Ft(w)}function Xt(w){const x=w.textures;for(let k=0,q=x.length;k<q;k++){const Z=x[k];if(m(Z)){const Y=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(Z).__webglTexture;e.bindTexture(Y,At),p(Y),e.unbindTexture()}}}const J=[],T=[];function ot(w){if(w.samples>0){if(tt(w)===!1){const x=w.textures,k=w.width,q=w.height;let Z=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(w),lt=x.length>1;if(lt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const Yt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,Z,i.NEAREST),c===!0&&(J.length=0,T.length=0,J.push(i.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(Y),T.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const Yt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function at(w){return Math.min(s.maxSamples,w.samples)}function tt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Lt(w,x){const k=w.colorSpace,q=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==oi&&k!==Qn&&(re.getTransfer(k)===pe?(q!==xn||Z!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function vt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=Ut,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=et,this.useMultisampledRTT=tt}function dg(i,t){function e(n,s=Qn){let r;const a=re.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.BYTE;if(n===ch)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===ec)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===xn)return i.RGBA;if(n===dh)return i.LUMINANCE;if(n===fh)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mo||n===go)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===xo||n===yo||n===Mo||n===So||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Do||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===Uo||n===No||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class fg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pg={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:mg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vg extends fs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new _g,m=e.getContextAttributes();let p=null,E=null;const y=[],M=[],P=new nt;let R=null;const A=new nn;A.layers.enable(1),A.viewport=new ce;const L=new nn;L.layers.enable(2),L.viewport=new ce;const K=[A,L],_=new fg;_.layers.enable(1),_.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=y[j];return et===void 0&&(et=new Ua,y[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=y[j];return et===void 0&&(et=new Ua,y[j]=et),et.getGripSpace()},this.getHand=function(j){let et=y[j];return et===void 0&&(et=new Ua,y[j]=et),et.getHandSpace()};function O(j){const et=M.indexOf(j.inputSource);if(et===-1)return;const bt=y[et];bt!==void 0&&(bt.update(j.inputSource,j.frame,l||a),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",X);for(let j=0;j<y.length;j++){const et=M[j];et!==null&&(M[j]=null,y[j].disconnect(et))}S=null,F=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ai(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,bt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?hs:ns,bt=m.stencil?ls:Ti);const Ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ai(d.textureWidth,d.textureHeight,{format:xn,type:Wn,depthTexture:new Ph(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let et=0;et<j.removed.length;et++){const bt=j.removed[et],dt=M.indexOf(bt);dt>=0&&(M[dt]=null,y[dt].disconnect(bt))}for(let et=0;et<j.added.length;et++){const bt=j.added[et];let dt=M.indexOf(bt);if(dt===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=M.length){M.push(bt),dt=Ut;break}else if(M[Ut]===null){M[Ut]=bt,dt=Ut;break}if(dt===-1)break}const Ft=y[dt];Ft&&Ft.connect(bt)}}const B=new C,$=new C;function G(j,et,bt){B.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(bt.matrixWorld);const dt=B.distanceTo($),Ft=et.projectionMatrix.elements,Ut=bt.projectionMatrix.elements,Ht=Ft[14]/(Ft[10]-1),Xt=Ft[14]/(Ft[10]+1),J=(Ft[9]+1)/Ft[5],T=(Ft[9]-1)/Ft[5],ot=(Ft[8]-1)/Ft[0],at=(Ut[8]+1)/Ut[0],tt=Ht*ot,ct=Ht*at,Lt=dt/(-ot+at),vt=Lt*-ot;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(Lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ft[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const w=Ht+Lt,x=Xt+Lt,k=tt-vt,q=ct+(dt-vt),Z=J*Xt/x*w,Y=T*Xt/x*w;j.projectionMatrix.makePerspective(k,q,Z,Y,w,x),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ft(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let et=j.near,bt=j.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),_.near=L.near=A.near=et,_.far=L.far=A.far=bt,(S!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,F=_.far);const dt=j.parent,Ft=_.cameras;ft(_,dt);for(let Ut=0;Ut<Ft.length;Ut++)ft(Ft[Ut],dt);Ft.length===2?G(_,A,L):_.projectionMatrix.copy(A.projectionMatrix),pt(j,_,dt)};function pt(j,et,bt){bt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ko*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let mt=null;function jt(j,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let dt=!1;bt.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let Ut=0;Ut<bt.length;Ut++){const Ht=bt[Ut];let Xt=null;if(f!==null)Xt=f.getViewport(Ht);else{const T=u.getViewSubImage(d,Ht);Xt=T.viewport,Ut===0&&(t.setRenderTargetTextures(E,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(E))}let J=K[Ut];J===void 0&&(J=new nn,J.layers.enable(Ut),J.viewport=new ce,K[Ut]=J),J.matrix.fromArray(Ht.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ht.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ut===0&&(_.matrix.copy(J.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(J)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Ut=u.getDepthInformation(bt[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let bt=0;bt<y.length;bt++){const dt=M[bt],Ft=y[bt];dt!==null&&Ft!==void 0&&Ft.update(dt,et,l||a)}mt&&mt(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Qt=new Rh;Qt.setAnimationLoop(jt),this.setAnimationLoop=function(j){mt=j},this.dispose=function(){}}}const pi=new Rn,xg=new le;function yg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,pi.copy(M),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(pi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const M=y.program;n.uniformBlockBinding(E,M)}function l(E,y){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(E,P);const R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){const y=u();E.__bindingPointIndex=y;const M=i.createBuffer(),P=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],M=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,A=M.length;R<A;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let K=0,_=L.length;K<_;K++){const S=L[K];if(f(S,R,K,P)===!0){const F=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let H=0;for(let X=0;X<O.length;X++){const B=O[X],$=v(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,F+H,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,M,P){const R=E.value,A=y+"_"+M;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const L=P[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return P[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const y=E.uniforms;let M=0;const P=16;for(let A=0,L=y.length;A<L;A++){const K=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,S=K.length;_<S;_++){const F=K[_],O=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=O.length;H<X;H++){const B=O[H],$=v(B),G=M%P,ft=G%$.boundary,pt=G+ft;M+=ft,pt!==0&&P-pt<$.storage&&(M+=P-pt),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=$.storage}}}const R=M%P;return R>0&&(M+=P-R),E.__size=M,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Sg{constructor(t={}){const{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=ei,this.toneMappingExposure=1;const y=this;let M=!1,P=0,R=0,A=null,L=-1,K=null;const _=new ce,S=new ce;let F=null;const O=new qt(0);let H=0,X=e.width,B=e.height,$=1,G=null,ft=null;const pt=new ce(0,0,X,B),mt=new ce(0,0,X,B);let jt=!1;const Qt=new hc;let j=!1,et=!1;const bt=new le,dt=new le,Ft=new C,Ut=new ce,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function J(){return A===null?$:1}let T=n;function ot(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),T===null){const U="webgl2";if(T=ot(U,b),T===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let at,tt,ct,Lt,vt,w,x,k,q,Z,Y,At,lt,Mt,Yt,it,St,Bt,zt,Et,$t,Vt,he,I;function xt(){at=new Am(T),at.init(),Vt=new dg(T,at),tt=new Mm(T,at,t,Vt),ct=new lg(T),tt.reverseDepthBuffer&&ct.buffers.depth.setReversed(!0),Lt=new Pm(T),vt=new Y0,w=new ug(T,at,ct,vt,tt,Vt,Lt),x=new bm(y),k=new Tm(y),q=new Fd(T),he=new xm(T,q),Z=new Rm(T,q,Lt,he),Y=new Dm(T,Z,q,Lt),zt=new Lm(T,tt,w),it=new Sm(vt),At=new q0(y,x,k,at,tt,he,it),lt=new yg(y,vt),Mt=new K0,Yt=new ng(at),Bt=new vm(y,x,k,ct,Y,d,c),St=new og(y,Y,tt),I=new Mg(T,Lt,tt,ct),Et=new ym(T,at,Lt),$t=new Cm(T,at,Lt),Lt.programs=At.programs,y.capabilities=tt,y.extensions=at,y.properties=vt,y.renderLists=Mt,y.shadowMap=St,y.state=ct,y.info=Lt}xt();const W=new vg(y,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=at.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=at.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(X,B,!1))},this.getSize=function(b){return b.set(X,B)},this.setSize=function(b,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,B=U,e.width=Math.floor(b*$),e.height=Math.floor(U*$),z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*$,B*$).floor()},this.setDrawingBufferSize=function(b,U,z){X=b,B=U,$=z,e.width=Math.floor(b*z),e.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,U,z,V){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,U,z,V),ct.viewport(_.copy(pt).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,U,z,V){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,U,z,V),ct.scissor(S.copy(mt).multiplyScalar($).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){ct.setScissorTest(jt=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,U=!0,z=!0){let V=0;if(b){let N=!1;if(A!==null){const st=A.texture.format;N=st===ac||st===rc||st===sc}if(N){const st=A.texture.type,_t=st===Wn||st===Ti||st===Is||st===ls||st===nc||st===ic,wt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),Ot=wt.r,kt=wt.g,Pt=wt.b;_t?(f[0]=Ot,f[1]=kt,f[2]=Pt,f[3]=Rt,T.clearBufferuiv(T.COLOR,0,f)):(g[0]=Ot,g[1]=kt,g[2]=Pt,g[3]=Rt,T.clearBufferiv(T.COLOR,0,g))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Mt.dispose(),Yt.dispose(),vt.dispose(),x.dispose(),k.dispose(),Y.dispose(),he.dispose(),I.dispose(),At.dispose(),W.dispose(),W.removeEventListener("sessionstart",wc),W.removeEventListener("sessionend",Tc),ci.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Lt.autoReset,U=St.enabled,z=St.autoUpdate,V=St.needsUpdate,N=St.type;xt(),Lt.autoReset=b,St.enabled=U,St.autoUpdate=z,St.needsUpdate=V,St.type=N}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const U=b.target;U.removeEventListener("dispose",Jt),Se(U)}function Se(b){je(b),vt.remove(b)}function je(b){const U=vt.get(b).programs;U!==void 0&&(U.forEach(function(z){At.releaseProgram(z)}),b.isShaderMaterial&&At.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,V,N,st){U===null&&(U=Ht);const _t=N.isMesh&&N.matrixWorld.determinant()<0,wt=vu(b,U,z,V,N);ct.setMaterial(V,_t);let Rt=z.index,Ot=1;if(V.wireframe===!0){if(Rt=Z.getWireframeAttribute(z),Rt===void 0)return;Ot=2}const kt=z.drawRange,Pt=z.attributes.position;let ae=kt.start*Ot,de=(kt.start+kt.count)*Ot;st!==null&&(ae=Math.max(ae,st.start*Ot),de=Math.min(de,(st.start+st.count)*Ot)),Rt!==null?(ae=Math.max(ae,0),de=Math.min(de,Rt.count)):Pt!=null&&(ae=Math.max(ae,0),de=Math.min(de,Pt.count));const ve=de-ae;if(ve<0||ve===1/0)return;he.setup(N,V,wt,z,Rt);let Ke,ne=Et;if(Rt!==null&&(Ke=q.get(Rt),ne=$t,ne.setIndex(Ke)),N.isMesh)V.wireframe===!0?(ct.setLineWidth(V.wireframeLinewidth*J()),ne.setMode(T.LINES)):ne.setMode(T.TRIANGLES);else if(N.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*J()),N.isLineSegments?ne.setMode(T.LINES):N.isLineLoop?ne.setMode(T.LINE_LOOP):ne.setMode(T.LINE_STRIP)}else N.isPoints?ne.setMode(T.POINTS):N.isSprite&&ne.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,Le=N._multiDrawCounts,ie=N._multiDrawCount,fn=Rt?q.get(Rt).bytesPerElement:1,Di=vt.get(V).currentProgram.getUniforms();for(let Je=0;Je<ie;Je++)Di.setValue(T,"_gl_DrawID",Je),ne.render(Dt[Je]/fn,Le[Je])}else if(N.isInstancedMesh)ne.renderInstances(ae,ve,N.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Le=Math.min(z.instanceCount,Dt);ne.renderInstances(ae,ve,Le)}else ne.render(ae,ve)};function te(b,U,z){b.transparent===!0&&b.side===Ye&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,$s(b,U,z),b.side=ii,b.needsUpdate=!0,$s(b,U,z),b.side=Ye):$s(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),m=Yt.get(z),m.init(U),E.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){const wt=st[_t];te(wt,z,N),V.add(wt)}else te(st,z,N),V.add(st)}),E.pop(),m=null,V},this.compileAsync=function(b,U,z=null){const V=this.compile(b,U,z);return new Promise(N=>{function st(){if(V.forEach(function(_t){vt.get(_t).currentProgram.isReady()&&V.delete(_t)}),V.size===0){N(b);return}setTimeout(st,10)}at.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let qe=null;function Pn(b){qe&&qe(b)}function wc(){ci.stop()}function Tc(){ci.start()}const ci=new Rh;ci.setAnimationLoop(Pn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(b){qe=b,W.setAnimationLoop(b),b===null?ci.stop():ci.start()},W.addEventListener("sessionstart",wc),W.addEventListener("sessionend",Tc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,A),m=Yt.get(b,E.length),m.init(U),E.push(m),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qt.setFromProjectionMatrix(dt),et=this.localClippingEnabled,j=it.init(this.clippingPlanes,et),v=Mt.get(b,p.length),v.init(),p.push(v),W.enabled===!0&&W.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&ta(st,U,-1/0,y.sortObjects)}ta(b,U,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(G,ft),Xt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xt&&Bt.addToRenderList(v,b),this.info.render.frame++,j===!0&&it.beginShadows();const z=m.state.shadowsArray;St.render(z,b,U),j===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,N=v.transmissive;if(m.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let _t=0,wt=st.length;_t<wt;_t++){const Rt=st[_t];Rc(V,N,b,Rt)}Xt&&Bt.render(b);for(let _t=0,wt=st.length;_t<wt;_t++){const Rt=st[_t];Ac(v,b,Rt,Rt.viewport)}}else N.length>0&&Rc(V,N,b,U),Xt&&Bt.render(b),Ac(v,b,U);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(y,b,U),he.resetDefaultState(),L=-1,K=null,E.pop(),E.length>0?(m=E[E.length-1],j===!0&&it.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ta(b,U,z,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Qt.intersectsSprite(b)){V&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const _t=Y.update(b),wt=b.material;wt.visible&&v.push(b,_t,wt,z,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Qt.intersectsObject(b))){const _t=Y.update(b),wt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ut.copy(_t.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(wt)){const Rt=_t.groups;for(let Ot=0,kt=Rt.length;Ot<kt;Ot++){const Pt=Rt[Ot],ae=wt[Pt.materialIndex];ae&&ae.visible&&v.push(b,_t,ae,z,Ut.z,Pt)}}else wt.visible&&v.push(b,_t,wt,z,Ut.z,null)}}const st=b.children;for(let _t=0,wt=st.length;_t<wt;_t++)ta(st[_t],U,z,V)}function Ac(b,U,z,V){const N=b.opaque,st=b.transmissive,_t=b.transparent;m.setupLightsView(z),j===!0&&it.setGlobalState(y.clippingPlanes,z),V&&ct.viewport(_.copy(V)),N.length>0&&Ys(N,U,z),st.length>0&&Ys(st,U,z),_t.length>0&&Ys(_t,U,z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Rc(b,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Ai(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Vs:Wn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const st=m.state.transmissionRenderTarget[V.id],_t=V.viewport||_;st.setSize(_t.z,_t.w);const wt=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(O),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&Bt.render(z);const Rt=y.toneMapping;y.toneMapping=ei;const Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),j===!0&&it.setGlobalState(y.clippingPlanes,V),Ys(b,z,V),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),at.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Pt=0,ae=U.length;Pt<ae;Pt++){const de=U[Pt],ve=de.object,Ke=de.geometry,ne=de.material,Dt=de.group;if(ne.side===Ye&&ve.layers.test(V.layers)){const Le=ne.side;ne.side=We,ne.needsUpdate=!0,Cc(ve,z,V,Ke,ne,Dt),ne.side=Le,ne.needsUpdate=!0,kt=!0}}kt===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}y.setRenderTarget(wt),y.setClearColor(O,H),Ot!==void 0&&(V.viewport=Ot),y.toneMapping=Rt}function Ys(b,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=b.length;N<st;N++){const _t=b[N],wt=_t.object,Rt=_t.geometry,Ot=V===null?_t.material:V,kt=_t.group;wt.layers.test(z.layers)&&Cc(wt,U,z,Rt,Ot,kt)}}function Cc(b,U,z,V,N,st){b.onBeforeRender(y,U,z,V,N,st),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,z,V,b,st),N.transparent===!0&&N.side===Ye&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,b,st),N.side=ii,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,b,st),N.side=Ye):y.renderBufferDirect(z,U,V,N,b,st),b.onAfterRender(y,U,z,V,N,st)}function $s(b,U,z){U.isScene!==!0&&(U=Ht);const V=vt.get(b),N=m.state.lights,st=m.state.shadowsArray,_t=N.state.version,wt=At.getParameters(b,N.state,st,U,z),Rt=At.getProgramCacheKey(wt);let Ot=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?k:x).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",Jt),Ot=new Map,V.programs=Ot);let kt=Ot.get(Rt);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===_t)return Lc(b,wt),kt}else wt.uniforms=At.getUniforms(b),b.onBeforeCompile(wt,y),kt=At.acquireProgram(wt,Rt),Ot.set(Rt,kt),V.uniforms=wt.uniforms;const Pt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=it.uniform),Lc(b,wt),V.needsLights=yu(b),V.lightsStateVersion=_t,V.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Pc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ir.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Lc(b,U){const z=vt.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function vu(b,U,z,V,N){U.isScene!==!0&&(U=Ht),w.resetTextureUnits();const st=U.fog,_t=V.isMeshStandardMaterial?U.environment:null,wt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:oi,Rt=(V.isMeshStandardMaterial?k:x).get(V.envMap||_t),Ot=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,de=!!z.morphAttributes.color;let ve=ei;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=y.toneMapping);const Ke=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=Ke!==void 0?Ke.length:0,Dt=vt.get(V),Le=m.state.lights;if(j===!0&&(et===!0||b!==K)){const on=b===K&&V.id===L;it.setState(V,b,on)}let ie=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Le.state.version||Dt.outputColorSpace!==wt||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Rt||V.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==kt||Dt.morphTargets!==Pt||Dt.morphNormals!==ae||Dt.morphColors!==de||Dt.toneMapping!==ve||Dt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Dt.__version=V.version);let fn=Dt.currentProgram;ie===!0&&(fn=$s(V,U,N));let Di=!1,Je=!1,ea=!1;const xe=fn.getUniforms(),jn=Dt.uniforms;if(ct.useProgram(fn.program)&&(Di=!0,Je=!0,ea=!0),V.id!==L&&(L=V.id,Je=!0),Di||K!==b){tt.reverseDepthBuffer?(bt.copy(b.projectionMatrix),hd(bt),ud(bt),xe.setValue(T,"projectionMatrix",bt)):xe.setValue(T,"projectionMatrix",b.projectionMatrix),xe.setValue(T,"viewMatrix",b.matrixWorldInverse);const on=xe.map.cameraPosition;on!==void 0&&on.setValue(T,Ft.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&xe.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Je=!0,ea=!0)}if(N.isSkinnedMesh){xe.setOptional(T,N,"bindMatrix"),xe.setOptional(T,N,"bindMatrixInverse");const on=N.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),xe.setValue(T,"boneTexture",on.boneTexture,w))}N.isBatchedMesh&&(xe.setOptional(T,N,"batchingTexture"),xe.setValue(T,"batchingTexture",N._matricesTexture,w),xe.setOptional(T,N,"batchingIdTexture"),xe.setValue(T,"batchingIdTexture",N._indirectTexture,w),xe.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(T,"batchingColorTexture",N._colorsTexture,w));const na=z.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&zt.update(N,z,fn),(Je||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,xe.setValue(T,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(jn.envMap.value=Rt,jn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(jn.envMapIntensity.value=U.environmentIntensity),Je&&(xe.setValue(T,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&xu(jn,ea),st&&V.fog===!0&&lt.refreshFogUniforms(jn,st),lt.refreshMaterialUniforms(jn,V,$,B,m.state.transmissionRenderTarget[b.id]),Ir.upload(T,Pc(Dt),jn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ir.upload(T,Pc(Dt),jn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(T,"center",N.center),xe.setValue(T,"modelViewMatrix",N.modelViewMatrix),xe.setValue(T,"normalMatrix",N.normalMatrix),xe.setValue(T,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let ia=0,Mu=on.length;ia<Mu;ia++){const Dc=on[ia];I.update(Dc,fn),I.bind(Dc,fn)}}return fn}function xu(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function yu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,z){vt.get(b.texture).__webglTexture=U,vt.get(b.depthTexture).__webglTexture=z;const V=vt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=vt.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){A=b,P=U,R=z;let V=!0,N=null,st=!1,_t=!1;if(b){const Rt=vt.get(b);if(Rt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Rt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Rt.__hasExternalTextures)w.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pt=b.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&vt.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(_t=!0);const kt=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?N=kt[U][z]:N=kt[U],st=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[z]:N=kt,_.copy(b.viewport),S.copy(b.scissor),F=b.scissorTest}else _.copy(pt).multiplyScalar($).floor(),S.copy(mt).multiplyScalar($).floor(),F=jt;if(ct.bindFramebuffer(T.FRAMEBUFFER,N)&&V&&ct.drawBuffers(b,N),ct.viewport(_),ct.scissor(S),ct.setScissorTest(F),st){const Rt=vt.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,z)}else if(_t){const Rt=vt.get(b.texture),Ot=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Rt.__webglTexture,z||0,Ot)}L=-1},this.readRenderTargetPixels=function(b,U,z,V,N,st,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){ct.bindFramebuffer(T.FRAMEBUFFER,wt);try{const Rt=b.texture,Ot=Rt.format,kt=Rt.type;if(!tt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&z>=0&&z<=b.height-N&&T.readPixels(U,z,V,N,Vt.convert(Ot),Vt.convert(kt),st)}finally{const Rt=A!==null?vt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(T.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,V,N,st,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){const Rt=b.texture,Ot=Rt.format,kt=Rt.type;if(!tt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&z>=0&&z<=b.height-N){ct.bindFramebuffer(T.FRAMEBUFFER,wt);const Pt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Pt),T.bufferData(T.PIXEL_PACK_BUFFER,st.byteLength,T.STREAM_READ),T.readPixels(U,z,V,N,Vt.convert(Ot),Vt.convert(kt),0);const ae=A!==null?vt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(T.FRAMEBUFFER,ae);const de=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ld(T,de,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Pt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,st),T.deleteBuffer(Pt),T.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-z),N=Math.floor(b.image.width*V),st=Math.floor(b.image.height*V),_t=U!==null?U.x:0,wt=U!==null?U.y:0;w.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,_t,wt,N,st),ct.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,V=null,N=0){b.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let st,_t,wt,Rt,Ot,kt;z!==null?(st=z.max.x-z.min.x,_t=z.max.y-z.min.y,wt=z.min.x,Rt=z.min.y):(st=b.image.width,_t=b.image.height,wt=0,Rt=0),V!==null?(Ot=V.x,kt=V.y):(Ot=0,kt=0);const Pt=Vt.convert(U.format),ae=Vt.convert(U.type);w.setTexture2D(U,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const de=T.getParameter(T.UNPACK_ROW_LENGTH),ve=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ke=T.getParameter(T.UNPACK_SKIP_PIXELS),ne=T.getParameter(T.UNPACK_SKIP_ROWS),Dt=T.getParameter(T.UNPACK_SKIP_IMAGES),Le=b.isCompressedTexture?b.mipmaps[N]:b.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,wt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Rt),b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Ot,kt,st,_t,Pt,ae,Le.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Ot,kt,Le.width,Le.height,Pt,Le.data):T.texSubImage2D(T.TEXTURE_2D,N,Ot,kt,st,_t,Pt,ae,Le),T.pixelStorei(T.UNPACK_ROW_LENGTH,de),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ve),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,ne),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Dt),N===0&&U.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,V=null,N=0){b.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let st,_t,wt,Rt,Ot,kt,Pt,ae,de;const ve=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(st=z.max.x-z.min.x,_t=z.max.y-z.min.y,wt=z.max.z-z.min.z,Rt=z.min.x,Ot=z.min.y,kt=z.min.z):(st=ve.width,_t=ve.height,wt=ve.depth,Rt=0,Ot=0,kt=0),V!==null?(Pt=V.x,ae=V.y,de=V.z):(Pt=0,ae=0,de=0);const Ke=Vt.convert(U.format),ne=Vt.convert(U.type);let Dt;if(U.isData3DTexture)w.setTexture3D(U,0),Dt=T.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)w.setTexture2DArray(U,0),Dt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const Le=T.getParameter(T.UNPACK_ROW_LENGTH),ie=T.getParameter(T.UNPACK_IMAGE_HEIGHT),fn=T.getParameter(T.UNPACK_SKIP_PIXELS),Di=T.getParameter(T.UNPACK_SKIP_ROWS),Je=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ve.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ve.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Rt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ot),T.pixelStorei(T.UNPACK_SKIP_IMAGES,kt),b.isDataTexture||b.isData3DTexture?T.texSubImage3D(Dt,N,Pt,ae,de,st,_t,wt,Ke,ne,ve.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Dt,N,Pt,ae,de,st,_t,wt,Ke,ve.data):T.texSubImage3D(Dt,N,Pt,ae,de,st,_t,wt,Ke,ne,ve),T.pixelStorei(T.UNPACK_ROW_LENGTH,Le),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie),T.pixelStorei(T.UNPACK_SKIP_PIXELS,fn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Di),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Je),N===0&&U.generateMipmaps&&T.generateMipmap(Dt),ct.unbindTexture()},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,ct.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===oc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===$r?"display-p3":"srgb"}}class dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bg extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new C;class Wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zo extends Ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const Ms=new C,Yi=new C,$i=new C,Ki=new nt,Ss=new nt,Nh=new le,_r=new C,bs=new C,vr=new C,Al=new nt,Na=new nt,Rl=new nt;class Cl extends Te{constructor(t=new zo){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eg(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Wr(n,3,0,!1)),qi.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;xr(_r.set(-.5,-.5,0),$i,a,Yi,s,r),xr(bs.set(.5,-.5,0),$i,a,Yi,s,r),xr(vr.set(.5,.5,0),$i,a,Yi,s,r),Al.set(0,0),Na.set(1,0),Rl.set(1,1);let o=t.ray.intersectTriangle(_r,bs,vr,!1,Ms);if(o===null&&(xr(bs.set(-.5,.5,0),$i,a,Yi,s,r),Na.set(0,1),o=t.ray.intersectTriangle(_r,vr,bs,!1,Ms),o===null))return;const c=t.ray.origin.distanceTo(Ms);c<t.near||c>t.far||e.push({distance:c,point:Ms.clone(),uv:un.getInterpolation(Ms,_r,bs,vr,Al,Na,Rl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xr(i,t,e,n,s,r){Ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*Ki.x-s*Ki.y,Ss.y=s*Ki.x+r*Ki.y):Ss.copy(Ki),i.copy(t),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(Nh)}class Fh extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xr=new C,jr=new C,Pl=new le,Es=new cc,yr=new Kr,Fa=new C,Ll=new C;class wg extends Te{constructor(t=new ze,e=new Fh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xr.fromBufferAttribute(e,s-1),jr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xr.distanceTo(jr);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;Pl.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),E=h.getX(v+1),y=Mr(this,t,Es,c,p,E);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Mr(this,t,Es,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Mr(this,t,Es,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Mr(this,t,Es,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Xr.fromBufferAttribute(a,s),jr.fromBufferAttribute(a,r),e.distanceSqToSegment(Xr,jr,Fa,Ll)>n)return;Fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fa);if(!(c<t.near||c>t.far))return{distance:c,point:Ll.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Ur extends Be{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new nt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],a=[],o=new C,c=new le;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fc extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tg extends fc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Sr=new C,Oa=new pc,ka=new pc,Ba=new pc;class Ag extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),l=Sr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Oa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),ka.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Ba.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ka.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ba.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Oa.calc(c),ka.calc(c),Ba.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Rg(i,t){const e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Pg(i,t){return i*i*t}function Rs(i,t,e,n){return Rg(i,t)+Cg(i,e)+Pg(i,n)}function Lg(i,t){const e=1-i;return e*e*e*t}function Dg(i,t){const e=1-i;return 3*e*e*i*t}function Ig(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return Lg(i,t)+Dg(i,e)+Ig(i,n)+Ug(i,s)}class Oh extends Cn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ng extends Cn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y),Cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kh extends Cn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fg extends Cn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Cn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Og extends Cn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y),Rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Dl(o,c.x,l.x,h.x,u.x),Dl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Ho=Object.freeze({__proto__:null,ArcCurve:Tg,CatmullRomCurve3:Ag,CubicBezierCurve:Oh,CubicBezierCurve3:Ng,EllipseCurve:fc,LineCurve:kh,LineCurve3:Fg,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:Og,SplineCurve:zh});class kg extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ho[s.type]().fromJSON(s))}return this}}class Vo extends kg{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Bh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Oh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new fc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ns extends ze{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new C,d=new nt,f=new C,g=new C,v=new C;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let E=0;E<=e;E++){const y=n+E*h*s,M=Math.sin(y),P=Math.cos(y);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*M,u.y=t[R].y,u.z=t[R].x*P,a.push(u.x,u.y,u.z),d.x=E/e,d.y=R/(t.length-1),o.push(d.x,d.y);const A=c[3*R+0]*M,L=c[3*R+1],K=c[3*R+0]*P;l.push(A,L,K)}}for(let E=0;E<e;E++)for(let y=0;y<t.length-1;y++){const M=y+E*t.length,P=M,R=M+t.length,A=M+t.length+1,L=M+1;r.push(P,R,L),r.push(A,L,R)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.points,t.segments,t.phiStart,t.phiLength)}}class mc extends Ns{constructor(t=1,e=1,n=4,s=8){const r=new Vo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new mc(t.radius,t.length,t.capSegments,t.radialSegments)}}class Si extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new C,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hn extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;E(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function E(){const M=new C,P=new C;let R=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const K=[],_=L/r,S=_*(e-t)+t;for(let F=0;F<=s;F++){const O=F/s,H=O*c+o,X=Math.sin(H),B=Math.cos(H);P.x=S*X,P.y=-_*n+m,P.z=S*B,u.push(P.x,P.y,P.z),M.set(X,A,B).normalize(),d.push(M.x,M.y,M.z),f.push(O,1-_),K.push(g++)}v.push(K)}for(let L=0;L<s;L++)for(let K=0;K<r;K++){const _=v[K][L],S=v[K+1][L],F=v[K+1][L+1],O=v[K][L+1];t>0&&(h.push(_,S,O),R+=3),e>0&&(h.push(S,F,O),R+=3)}l.addGroup(p,R,0),p+=R}function y(M){const P=g,R=new nt,A=new C;let L=0;const K=M===!0?t:e,_=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const S=g;for(let F=0;F<=s;F++){const H=F/s*c+o,X=Math.cos(H),B=Math.sin(H);A.x=K*B,A.y=m*_,A.z=K*X,u.push(A.x,A.y,A.z),d.push(0,_,0),R.x=X*.5+.5,R.y=B*.5*_+.5,f.push(R.x,R.y),g++}for(let F=0;F<s;F++){const O=P+F,H=S+F;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),L+=3}l.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends hn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hh extends Vo{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Vo().fromJSON(s))}return this}}const Bg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Wg(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Fs(r,a,e,o,c,f,0),a}};function Vh(i,t,e,n,s){let r,a;if(s===e_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Il(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Il(r,i[r],i[r+1],a);return a&&Zr(a,a.next)&&(ks(a),a=a.next),a}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zr(e,e.next)||_e(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&$g(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Hg(i,n,s,r):zg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ks(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Vg(Ri(i),t,e),Fs(i,t,e,n,s,r,2)):a===2&&Gg(i,t,e,n,s,r):Fs(Ri(i),t,e,n,s,r,1);break}}}function zg(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ts(s,o,r,c,a,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Go(f,g,t,e,n),E=Go(v,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=E;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ts(o,h,c,u,l,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ts(o,h,c,u,l,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ts(o,h,c,u,l,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=E;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ts(o,h,c,u,l,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Zr(s,r)&&Gh(s,n,n.next,r)&&Os(s,r)&&Os(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ks(n),ks(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function Gg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zg(a,o)){let c=Wh(a,o);a=Ri(a,a.next),c=Ri(c,c.next),Fs(a,t,e,n,s,r,0),Fs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Wg(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Vh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Jg(l));for(s.sort(Xg),r=0;r<s.length;r++)e=jg(s[r],e);return e}function Xg(i,t){return i.x-t.x}function jg(i,t){const e=qg(i,t);if(!e)return t;const n=Wh(e,i);return Ri(n,n.next),Ri(e,e.next)}function qg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ts(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Os(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Yg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Yg(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function $g(i,t,e,n){let s=i;do s.z===0&&(s.z=Go(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kg(s)}function Kg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Go(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qg(i,t)&&(Os(i,t)&&Os(t,i)&&t_(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Zr(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zr(i,t){return i.x===t.x&&i.y===t.y}function Gh(i,t,e,n){const s=Er(_e(i,t,e)),r=Er(_e(i,t,n)),a=Er(_e(e,n,i)),o=Er(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&br(i,e,t)||r===0&&br(i,n,t)||a===0&&br(e,i,n)||o===0&&br(e,t,n))}function br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Er(i){return i>0?1:i<0?-1:0}function Qg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function t_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wh(i,t){const e=new Wo(i.i,i.x,i.y),n=new Wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Il(i,t,e,n){const s=new Wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function e_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ps{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ps.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ul(t),Nl(n,t);let a=t.length;e.forEach(Ul);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Nl(n,e[c]);const o=Bg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Ul(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class gc extends ze{constructor(t=new Hh([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:n_;let y,M=!1,P,R,A,L;p&&(y=p.getSpacedPoints(h),M=!0,d=!1,P=p.computeFrenetFrames(h,!1),R=new C,A=new C,L=new C),d||(m=0,f=0,g=0,v=0);const K=o.extractPoints(l);let _=K.shape;const S=K.holes;if(!Ps.isClockWise(_)){_=_.reverse();for(let J=0,T=S.length;J<T;J++){const ot=S[J];Ps.isClockWise(ot)&&(S[J]=ot.reverse())}}const O=Ps.triangulateShape(_,S),H=_;for(let J=0,T=S.length;J<T;J++){const ot=S[J];_=_.concat(ot)}function X(J,T,ot){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(T,ot)}const B=_.length,$=O.length;function G(J,T,ot){let at,tt,ct;const Lt=J.x-T.x,vt=J.y-T.y,w=ot.x-J.x,x=ot.y-J.y,k=Lt*Lt+vt*vt,q=Lt*x-vt*w;if(Math.abs(q)>Number.EPSILON){const Z=Math.sqrt(k),Y=Math.sqrt(w*w+x*x),At=T.x-vt/Z,lt=T.y+Lt/Z,Mt=ot.x-x/Y,Yt=ot.y+w/Y,it=((Mt-At)*x-(Yt-lt)*w)/(Lt*x-vt*w);at=At+Lt*it-J.x,tt=lt+vt*it-J.y;const St=at*at+tt*tt;if(St<=2)return new nt(at,tt);ct=Math.sqrt(St/2)}else{let Z=!1;Lt>Number.EPSILON?w>Number.EPSILON&&(Z=!0):Lt<-Number.EPSILON?w<-Number.EPSILON&&(Z=!0):Math.sign(vt)===Math.sign(x)&&(Z=!0),Z?(at=-vt,tt=Lt,ct=Math.sqrt(k)):(at=Lt,tt=vt,ct=Math.sqrt(k/2))}return new nt(at/ct,tt/ct)}const ft=[];for(let J=0,T=H.length,ot=T-1,at=J+1;J<T;J++,ot++,at++)ot===T&&(ot=0),at===T&&(at=0),ft[J]=G(H[J],H[ot],H[at]);const pt=[];let mt,jt=ft.concat();for(let J=0,T=S.length;J<T;J++){const ot=S[J];mt=[];for(let at=0,tt=ot.length,ct=tt-1,Lt=at+1;at<tt;at++,ct++,Lt++)ct===tt&&(ct=0),Lt===tt&&(Lt=0),mt[at]=G(ot[at],ot[ct],ot[Lt]);pt.push(mt),jt=jt.concat(mt)}for(let J=0;J<m;J++){const T=J/m,ot=f*Math.cos(T*Math.PI/2),at=g*Math.sin(T*Math.PI/2)+v;for(let tt=0,ct=H.length;tt<ct;tt++){const Lt=X(H[tt],ft[tt],at);dt(Lt.x,Lt.y,-ot)}for(let tt=0,ct=S.length;tt<ct;tt++){const Lt=S[tt];mt=pt[tt];for(let vt=0,w=Lt.length;vt<w;vt++){const x=X(Lt[vt],mt[vt],at);dt(x.x,x.y,-ot)}}}const Qt=g+v;for(let J=0;J<B;J++){const T=d?X(_[J],jt[J],Qt):_[J];M?(A.copy(P.normals[0]).multiplyScalar(T.x),R.copy(P.binormals[0]).multiplyScalar(T.y),L.copy(y[0]).add(A).add(R),dt(L.x,L.y,L.z)):dt(T.x,T.y,0)}for(let J=1;J<=h;J++)for(let T=0;T<B;T++){const ot=d?X(_[T],jt[T],Qt):_[T];M?(A.copy(P.normals[J]).multiplyScalar(ot.x),R.copy(P.binormals[J]).multiplyScalar(ot.y),L.copy(y[J]).add(A).add(R),dt(L.x,L.y,L.z)):dt(ot.x,ot.y,u/h*J)}for(let J=m-1;J>=0;J--){const T=J/m,ot=f*Math.cos(T*Math.PI/2),at=g*Math.sin(T*Math.PI/2)+v;for(let tt=0,ct=H.length;tt<ct;tt++){const Lt=X(H[tt],ft[tt],at);dt(Lt.x,Lt.y,u+ot)}for(let tt=0,ct=S.length;tt<ct;tt++){const Lt=S[tt];mt=pt[tt];for(let vt=0,w=Lt.length;vt<w;vt++){const x=X(Lt[vt],mt[vt],at);M?dt(x.x,x.y+y[h-1].y,y[h-1].x+ot):dt(x.x,x.y,u+ot)}}}j(),et();function j(){const J=s.length/3;if(d){let T=0,ot=B*T;for(let at=0;at<$;at++){const tt=O[at];Ft(tt[2]+ot,tt[1]+ot,tt[0]+ot)}T=h+m*2,ot=B*T;for(let at=0;at<$;at++){const tt=O[at];Ft(tt[0]+ot,tt[1]+ot,tt[2]+ot)}}else{for(let T=0;T<$;T++){const ot=O[T];Ft(ot[2],ot[1],ot[0])}for(let T=0;T<$;T++){const ot=O[T];Ft(ot[0]+B*h,ot[1]+B*h,ot[2]+B*h)}}n.addGroup(J,s.length/3-J,0)}function et(){const J=s.length/3;let T=0;bt(H,T),T+=H.length;for(let ot=0,at=S.length;ot<at;ot++){const tt=S[ot];bt(tt,T),T+=tt.length}n.addGroup(J,s.length/3-J,1)}function bt(J,T){let ot=J.length;for(;--ot>=0;){const at=ot;let tt=ot-1;tt<0&&(tt=J.length-1);for(let ct=0,Lt=h+m*2;ct<Lt;ct++){const vt=B*ct,w=B*(ct+1),x=T+at+vt,k=T+tt+vt,q=T+tt+w,Z=T+at+w;Ut(x,k,q,Z)}}}function dt(J,T,ot){c.push(J),c.push(T),c.push(ot)}function Ft(J,T,ot){Ht(J),Ht(T),Ht(ot);const at=s.length/3,tt=E.generateTopUV(n,s,at-3,at-2,at-1);Xt(tt[0]),Xt(tt[1]),Xt(tt[2])}function Ut(J,T,ot,at){Ht(J),Ht(T),Ht(at),Ht(T),Ht(ot),Ht(at);const tt=s.length/3,ct=E.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Xt(ct[0]),Xt(ct[1]),Xt(ct[3]),Xt(ct[1]),Xt(ct[2]),Xt(ct[3])}function Ht(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function Xt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return i_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ho[s.type]().fromJSON(s)),new gc(n,t.options)}}const n_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,c),new nt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-u),new nt(d,1-g),new nt(v,1-p)]:[new nt(o,1-c),new nt(h,1-u),new nt(f,1-g),new nt(m,1-p)]}};function i_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vn extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],y=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const R=P/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+M,1-y),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const y=h[p][E+1],M=h[p][E],P=h[p+1][E],R=h[p+1][E+1];(p!==0||a>0)&&f.push(y,M,R),(p!==n-1||c<Math.PI)&&f.push(M,P,R)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(v,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _c extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Fl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class s_{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const r_=new s_;class vc{constructor(t){this.manager=t!==void 0?t:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vc.DEFAULT_MATERIAL_NAME="__DEFAULT";class a_ extends vc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Fl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Us("img");function c(){h(),Fl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ol extends vc{constructor(t){super(t)}load(t,e,n,s){const r=new Be,a=new a_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class xc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class o_ extends xc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const za=new le,kl=new C,Bl=new C;class Xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zl=new le,ws=new C,Ha=new C;class c_ extends Xh{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),Ha.copy(n.position),Ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ha),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class jh extends xc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new c_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class l_ extends Xh{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hl extends xc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new l_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class h_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vl(){return performance.now()}const Gl=new le;class u_{constructor(t,e,n=0,s=1/0){this.ray=new cc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(t,e=!0,n=[]){return Xo(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xo(t[s],this,n,e);return n.sort(Wl),n}}function Wl(i,t){return i.distance-t.distance}function Xo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Xo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);const d_=1842212,fe=(i,t={})=>new _c({color:i,roughness:.55,metalness:0,...t});function tn(i,t,e=1,n=1,s=1){const r=new ut(new Vn(i,20,14),t);return r.scale.set(e,n,s),r.castShadow=!0,r}class f_{constructor(){this.root=new Kt,this.root.name="cat",this.mBody=fe(d_,{roughness:.45}),this.mDark=fe(3421247),this.parts=[],this.t=0,this.action=null,this.mode="idle",this.blinkT=2,this.sq=0,this.sqV=0,this.happyEyes=0,this.build()}build(){const t=this.root;this.body=new Kt,t.add(this.body);const e=tn(.42,this.mBody,1,1.25,.9);e.position.y=1,this.body.add(e);const n=new Vn(.43,24,16,Math.PI/2-Math.PI*.32,Math.PI*.64,Math.PI*.38,Math.PI*.5),s=new ut(n,fe(16448250,{side:Ye}));s.scale.set(1.02,1.27,.93),s.position.y=1,this.body.add(s);const r=tn(.1,fe(15921906),1,1.3,.5);r.position.set(0,1.36,.33),this.body.add(r),this.head=new Kt,this.head.position.y=1.72,this.body.add(this.head);const a=tn(.42,this.mBody,1.12,.96,1);this.head.add(a);const o=tn(.17,this.mDark,1.35,.85,.8);o.position.set(0,-.12,.31),this.head.add(o);const c=tn(.045,fe(16748456),1.3,.8,1);c.position.set(0,-.06,.44),this.head.add(c);const l=new rn({color:657934});for(const y of[-1,1]){const M=new ut(new Ge(.035,.008,6,12,Math.PI),l);M.position.set(y*.034,-.13,.43),M.rotation.z=Math.PI,this.head.add(M)}this.eyes=[];for(const y of[-1,1]){const M=new Kt;M.position.set(y*.17,.03,.33),M.rotation.y=y*.35;const P=tn(.1,fe(13164618,{emissive:3820032,roughness:.2}),1,1.1,.55),R=tn(.05,new rn({color:328965}),.6,1.5,.5);R.position.z=.04;const A=tn(.022,new rn({color:16777215}));A.position.set(.03,.045,.07),M.add(P,R,A),this.head.add(M),this.eyes.push(M)}this.ears=[];for(const y of[-1,1]){const M=new Kt;M.position.set(y*.26,.3,0),M.rotation.z=-y*.35;const P=new ut(new ds(.15,.32,16),this.mBody);P.position.y=.12,P.scale.z=.6,P.castShadow=!0;const R=new ut(new ds(.09,.22,12),fe(16752565));R.position.set(0,.1,.05),R.scale.z=.4,M.add(P,R),this.head.add(M),this.ears.push(M)}const h=new Fh({color:14540253});for(const y of[-1,1])for(let M=0;M<3;M++){const P=new ze().setFromPoints([new C(y*.15,-.1+M*.03,.4),new C(y*.48,-.06+M*.07-.05,.3)]);this.head.add(new wg(P,h))}this.hatSlot=new Kt,this.hatSlot.position.y=.33,this.head.add(this.hatSlot),this.neckSlot=new Kt,this.neckSlot.position.y=1.42,this.body.add(this.neckSlot),this.arms=[];for(const y of[-1,1]){const M=new Kt;M.position.set(y*.36,1.25,.08);const P=new ut(new mc(.085,.3,6,12),this.mBody);P.position.y=-.2,P.castShadow=!0;const R=tn(.1,fe(16053492),1,.85,1);R.position.y=-.4,M.add(P,R),M.rotation.z=y*.25,M.userData.side=y,this.body.add(M),this.arms.push(M)}this.tools={};const u=new Kt,d=new ut(new Ee(.04,.3,.012),fe(14673646,{metalness:.8,roughness:.2}));d.position.y=-.17;const f=new ut(new hn(.02,.02,.12),fe(7028509));u.add(d,f),u.rotation.x=Math.PI/2,u.position.set(0,-.45,.06);const g=new Kt,v=new ut(new hn(.015,.015,.45),fe(13081179));v.position.y=-.2;const m=new ut(new Vn(.06,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),fe(13081179,{side:Ye}));m.position.y=-.42,g.add(v,m),g.position.set(0,-.42,.04);const p=new ut(new Ee(.16,.2,.02),fe(16775392));p.position.set(0,-.48,.12),p.rotation.x=-.5,this.tools.knife=u,this.tools.ladle=g,this.tools.pad=p;for(const y in this.tools)this.tools[y].visible=!1,this.arms[1].add(this.tools[y]);this.tail=[];let E=new Kt;E.position.set(0,.75,-.32),E.rotation.x=-.9,this.body.add(E);for(let y=0;y<8;y++){const M=new Kt;M.position.y=y===0?0:.11;const P=new ut(new Vn(.065-y*.003,12,8),this.mBody);P.scale.y=1.6,P.castShadow=!0,M.add(P),E.add(M),this.tail.push(M),E=M}this.root.traverse(y=>{y.isMesh&&(y.userData.cat=!0)})}holding(t){for(const e in this.tools)this.tools[e].visible=e===t}wear({hat:t,neck:e}){if(this.hatSlot.clear(),this.neckSlot.clear(),t==="hat_chef"){const n=new ut(new hn(.26,.28,.16,24),fe(16777215));n.position.y=.02;const s=new Kt;[[0,.22,0,.24],[-.14,.18,0,.17],[.14,.18,0,.17],[0,.18,.12,.17],[0,.18,-.12,.17]].forEach(([r,a,o,c])=>{const l=tn(c,fe(16777215));l.position.set(r,a,o),s.add(l)}),this.hatSlot.add(n,s),this.hatSlot.rotation.z=.12}else if(t==="hat_hachimaki"){const n=new ut(new Ge(.43,.04,8,32),fe(16777215));n.rotation.x=Math.PI/2,n.position.y=-.18,n.scale.set(1.08,1,1);const s=tn(.06,fe(14100029),1,1,.3);s.position.set(0,-.18,.45);const r=tn(.06,fe(16777215));r.position.set(.1,-.15,-.44),this.hatSlot.add(n,s,r),this.hatSlot.rotation.z=0}else if(t==="hat_straw"){const n=new ut(new hn(.6,.62,.03,32),fe(15255664)),s=new ut(new hn(.26,.3,.2,24),fe(15255664));s.position.y=.1;const r=new ut(new hn(.305,.305,.05,24),fe(14100029));r.position.y=.04,this.hatSlot.add(n,s,r),this.hatSlot.rotation.z=-.1}if(e==="neck_bell"){const n=new ut(new Ge(.24,.03,8,32),fe(14100029));n.rotation.x=Math.PI/2;const s=tn(.06,fe(16106818,{metalness:.7,roughness:.25}));s.position.set(0,-.07,.25),this.neckSlot.add(n,s)}else if(e==="neck_scarf"){const n=new ut(new Ge(.25,.07,10,32),fe(3832789));n.rotation.x=Math.PI/2;const s=new ut(new Ee(.1,.25,.04),fe(3832789));s.position.set(.12,-.15,.25),s.rotation.z=.2,this.neckSlot.add(n,s)}}play(t,e=.35){this.action={name:t,t:0,dur:e},(t==="chop"||t==="press")&&this.squash(-.1)}squash(t){this.sqV+=t*22}setMode(t){this.mode=t}happy(){this.play("happy",1),this.happyEyes=1.2}update(t){this.t+=t;const e=this.t;this.sqV+=(-170*this.sq-11*this.sqV)*t,this.sq+=this.sqV*t;let n=this.sq;this.body.position.y=0,this.head.rotation.set(Math.sin(e*.7)*.04,Math.sin(e*.5)*.08,Math.sin(e*.9)*.05),this.tail.forEach((l,h)=>{l.rotation.z=Math.sin(e*1.8-h*.5)*.18,l.rotation.x=.12+Math.sin(e*1.1-h*.4)*.05}),this.ears.forEach((l,h)=>{l.rotation.x=Math.max(0,Math.sin(e*3+h*7)-.96)*6}),this.blinkT-=t;let s=1;this.blinkT<0&&(s=.1,this.blinkT<-.12&&(this.blinkT=2+Math.random()*3)),this.happyEyes>0&&(this.happyEyes-=t,s=.15),this.eyes.forEach(l=>l.scale.y=s);const[r,a]=this.arms;r.rotation.set(0,0,-.25+Math.sin(e*2.2)*.03),a.rotation.set(0,0,.25-Math.sin(e*2.2)*.03),this.mode==="stir"&&(a.rotation.x=-1+Math.sin(e*8)*.25,a.rotation.z=.35+Math.cos(e*8)*.25),this.mode==="talk"&&(this.head.rotation.x+=Math.sin(e*14)*.03),this.mode==="pet"&&(this.head.rotation.z=Math.sin(e*2)*.15+.15,this.eyes.forEach(l=>l.scale.y=.15));const o=this.action;if(o){o.t+=t;const l=Math.min(o.t/o.dur,1),h=Math.sin(l*Math.PI);switch(o.name){case"chop":a.rotation.x=-1.4+h*.9,this.body.position.y=-h*.02;break;case"press":r.rotation.x=a.rotation.x=-1.1,r.rotation.z=-.25-h*.5+.6,a.rotation.z=.25+h*.5-.6,this.body.position.y=-h*.03;break;case"wrap":r.rotation.x=a.rotation.x=-1-h*.4;break;case"pour":a.rotation.x=-1.2,a.rotation.y=-h*.6;break;case"wave":a.rotation.z=2.4+Math.sin(o.t*14)*.3;break;case"happy":{const u=Math.abs(Math.sin(l*Math.PI*2));this.body.position.y=u*.18,n+=(u-.35)*.22}r.rotation.z=-2.3,a.rotation.z=2.3;break;case"sad":this.head.rotation.x=.3*h,this.ears.forEach(u=>u.rotation.x=-.6*h);break}l>=1&&(this.action=null)}const c=1+Math.sin(e*2.2)*.012;this.body.scale.set(1-n*.5,c*(1+n),1-n*.5)}}const Nr=[{id:"home",name:"小黑食堂",jp:"食堂{しょくどう}",icon:"🏠",intro:"由飯糰開始，練好基本功。"},{id:"izakaya",name:"居酒屋・夜間營業",jp:"居酒屋{いざかや}",icon:"🏮",intro:"六款新料理，練習加單同沽清應對。"},{id:"cafe",name:"喫茶店・午後小休",jp:"喫茶店{きっさてん}",icon:"☕",intro:"六款餐飲，記住熟客嘅冷熱同甜度喜好。"}],p_=[["edamame_raw","枝豆{えだまめ}","生枝豆","🫛","sphere",7974216],["abura","油{あぶら}","食用油","🫗","cyl",15121748],["katakuriko","片栗粉{かたくりこ}","粟粉／薯仔澱粉","🥣","sphere",16775920],["komugiko","小麦粉{こむぎこ}","麵粉","🥣","sphere",15656401],["kyabetsu","キャベツ","椰菜","🥬","sphere",9812329],["sosu","ソース","日式炒麵／大阪燒醬","🫙","cyl",6501155],["coffee_powder","インスタントコーヒー","即溶咖啡粉","☕","cyl",5781287],["koucha_leaf","紅茶{こうちゃ}","紅茶茶葉","🍂","sphere",7421995],["matcha_powder","抹茶{まっちゃ}","抹茶粉","🍵","sphere",7512395],["milk","牛乳{ぎゅうにゅう}","牛奶","🥛","cyl",16775400],["pan_bread","食{しょく}パン","厚切方包","🍞","box",15516554],["butter","バター","牛油","🧈","box",16177017]],ln=i=>({type:"pick",need:i,decoys:["nori","miso"],jp:"材料{ざいりょう}を 選{えら}んで",yue:"揀啱材料",tip:"聽日文，再揀材料。"}),ye=(i,t,e,n,s)=>({type:i,verb:t,jp:e,yue:n,tip:s,anim:i==="timing"?"wrap":"stir",turns:2,rounds:2,zone:i==="hold"?[.45,.7]:.24}),qh=[{id:"edamame",chapter:"izakaya",jp:"枝豆{えだまめ}",yue:"鹽水枝豆",emoji:"🫛",price:180,station:"pot",serves:"2 人",time:"10 分鐘",ingredients:[["edamame_raw","枝豆 200g"],["shio","鹽 1 茶匙"],["mizu","水 1 公升"]],howto:["枝豆洗淨，用少少鹽搓一搓。","水煮滾，落枝豆煮約 4–5 分鐘，至豆仁熟透。","瀝乾，趁熱拌少少鹽；只食豆仁，豆莢唔食。"],steps:[ln(["edamame_raw","shio","mizu"]),ye("hold","yuderu","枝豆{えだまめ}を ゆでて","烚熟枝豆","長按加熱，綠色位放手。")]},{id:"yakitori",chapter:"izakaya",jp:"焼{や}き鳥{とり}",yue:"焼鳥",emoji:"🍢",price:320,station:"pan",serves:"4 串",time:"20 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["negi","大蔥 1 條"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"]],howto:["雞肉切小件，大蔥切段，交替串上竹籤。","豉油同味醂混合成醬汁。","用平底鑊煎串燒，不時反面，最後掃醬；雞肉中心須達 75°C 並維持至少 1 分鐘。"],steps:[ln(["toriniku","negi","shoyu"]),ye("timing","noseru","串{くし}に のせて","將雞肉同蔥串好","撳準綠色位。"),ye("hold","yaku","鶏肉{とりにく}を 焼{や}いて","燒熟雞肉","控制火候，唔好燒焦。")]},{id:"karaage",chapter:"izakaya",jp:"唐揚{からあ}げ",yue:"唐揚炸雞",emoji:"🍗",price:360,station:"pan",serves:"2 人",time:"25 分鐘",ingredients:[["toriniku","雞髀肉 250g"],["shoyu","豉油 1 湯匙"],["ninniku","蒜蓉 1 茶匙"],["katakuriko","澱粉 3 湯匙"],["abura","炸油 適量"]],howto:["雞肉切件，用豉油同蒜蓉醃 10 分鐘。","逐件薄薄裹上澱粉。","以約 170°C 油炸至金黃；雞肉中心須達 75°C 並維持至少 1 分鐘，瀝油上碟。"],steps:[ln(["toriniku","katakuriko","abura"]),ye("stir","mazeru","衣{ころも}を つけて","拌上薄薄粉衣","轉圈拌勻。"),ye("hold","ageru","鶏肉{とりにく}を 揚{あ}げて","炸熟雞肉","控制油溫。")]},{id:"agedashi",chapter:"izakaya",jp:"揚{あ}げ出{だ}し豆腐{どうふ}",yue:"揚出豆腐",emoji:"⬜",price:280,station:"pan",serves:"2 人",time:"20 分鐘",ingredients:[["tofu","硬豆腐 1 盒"],["katakuriko","澱粉 2 湯匙"],["abura","油 適量"],["dashi","高湯 100ml"],["shoyu","豉油 1 茶匙"],["negi","蔥花 少許"]],howto:["豆腐瀝乾抹乾，切大件，薄薄裹粉。","熱油中小火煎至各面金黃。","高湯加豉油煮熱，沿碗邊淋入，再放蔥花。"],steps:[ln(["tofu","katakuriko","dashi"]),ye("hold","ageru","豆腐{とうふ}を 揚{あ}げて","煎至金黃","綠色位放手。"),ye("timing","noseru","ねぎを のせて","灑上蔥花","最後先放配料。")]},{id:"okonomiyaki",chapter:"izakaya",jp:"お好{この}み焼{や}き",yue:"大阪燒",emoji:"🥞",price:380,station:"pan",serves:"1 塊",time:"20 分鐘",ingredients:[["kyabetsu","椰菜絲 150g"],["komugiko","麵粉 50g"],["tamago","雞蛋 1 隻"],["mizu","水 50ml"],["sosu","大阪燒醬 1 湯匙"],["abura","油 1 茶匙"]],howto:["麵粉、蛋同水拌勻，再拌入椰菜絲。","平底鑊落油，倒入麵糊成厚圓餅，中小火煎約 5 分鐘。","小心反面，冚蓋再煎至中心熟透，上碟搽醬。"],steps:[ln(["kyabetsu","komugiko","tamago"]),ye("stir","mazeru","生地{きじ}を 混{ま}ぜて","拌勻麵糊","轉圈攪勻。"),ye("timing","yaku","裏返{うらがえ}して","反面煎熟","撳準時機反面！")]},{id:"yakisoba",chapter:"izakaya",jp:"焼{や}きそば",yue:"日式炒麵",emoji:"🍝",price:340,station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["men","熟炒麵 1 份"],["kyabetsu","椰菜絲 100g"],["tamanegi","洋蔥 1/4 個"],["sosu","炒麵醬 1–2 湯匙"],["abura","油 1 茶匙"]],howto:["洋蔥切絲，椰菜切細。","鑊落油炒軟蔬菜，加熟麵同一湯匙水炒散。","加醬汁炒勻至熱透。"],steps:[ln(["men","kyabetsu","sosu"]),ye("stir","mazeru","麺{めん}を 炒{いた}めて","炒散麵條","轉圈翻炒。"),ye("timing","noseru","お皿{さら}に のせて","上碟","撳準出餐！")]},{id:"instant_coffee",chapter:"cafe",jp:"インスタントコーヒー",yue:"精品即溶咖啡",emoji:"☕",price:260,station:"board",serves:"1 杯",time:"3 分鐘",ingredients:[["coffee_powder","精品即溶咖啡粉 2g"],["mizu","熱水 150ml"]],howto:["按咖啡粉包裝建議份量放入杯。","加入熱水攪溶，按喜好調整濃淡。","冷飲版先用少量熱水溶粉，再補冷水同冰；加水時計埋融冰份量。"],steps:[ln(["coffee_powder","mizu"]),ye("stir","tokasu","コーヒーを 溶{と}かして","攪溶咖啡粉","轉圈攪至均勻。")]},{id:"black_tea",chapter:"cafe",jp:"紅茶{こうちゃ}",yue:"紅茶",emoji:"🫖",price:220,station:"pot",serves:"1 杯",time:"5 分鐘",ingredients:[["koucha_leaf","紅茶葉 2g"],["mizu","熱水 200ml"]],howto:["暖杯後放入茶葉。","沖入熱水，按茶葉包裝建議浸泡約 3 分鐘，再隔走茶葉。","冷飲版放涼再加冰，調整水量避免過淡。"],steps:[ln(["koucha_leaf","mizu"]),ye("hold","ireru","紅茶{こうちゃ}を 入{い}れて","沖泡紅茶","掌握浸泡時間。")]},{id:"matcha_latte",chapter:"cafe",jp:"抹茶{まっちゃ}ラテ",yue:"抹茶拿鐵",emoji:"🍵",price:320,station:"board",serves:"1 杯",time:"5 分鐘",ingredients:[["matcha_powder","抹茶粉 2g"],["mizu","熱水 30ml"],["milk","牛奶 150ml"],["satou","糖 0–1 茶匙，按客人要求"]],howto:["抹茶粉過篩，用熱水攪成冇粉粒嘅茶液。","按冷熱要求加入暖奶，或凍奶同冰。","按客人要求加糖，攪勻。"],steps:[ln(["matcha_powder","milk","mizu"]),ye("stir","mazeru","抹茶{まっちゃ}を 混{ま}ぜて","攪散抹茶粉","轉圈攪滑。"),ye("timing","ireru","牛乳{ぎゅうにゅう}を 入{い}れて","倒入牛奶","慢慢倒奶。")]},{id:"pudding",chapter:"cafe",jp:"プリン",yue:"雞蛋布甸",emoji:"🍮",price:280,station:"pot",serves:"2 杯",time:"25 分鐘＋冷藏",ingredients:[["tamago","雞蛋 1 隻"],["milk","牛奶 150ml"],["satou","糖 20g"]],howto:["蛋同糖輕輕拌勻，加入微暖牛奶，過篩入耐熱杯。","用蒸鍋小火蒸約 12–15 分鐘，至中心凝固；蛋液須充分煮熟。","放涼後冷藏至少 2 小時。"],steps:[ln(["tamago","milk","satou"]),ye("stir","mazeru","卵液{らんえき}を 混{ま}ぜて","輕輕攪勻蛋液","唔好打入太多氣泡。"),ye("hold","musu","プリンを 蒸{む}して","慢火蒸布甸","小火先滑！")]},{id:"thick_toast",chapter:"cafe",jp:"厚切{あつぎ}りトースト",yue:"牛油厚多士",emoji:"🍞",price:240,station:"pan",serves:"1 份",time:"8 分鐘",ingredients:[["pan_bread","厚切方包 1 片"],["butter","牛油 10g"]],howto:["方包表面劃淺格，唔好切穿。","搽牛油，放多士爐烤至表面金黃；亦可平底鑊小火煎兩面。","趁熱上碟。"],steps:[ln(["pan_bread","butter"]),ye("timing","kiru","パンに 切{き}り込{こ}みを 入{い}れて","喺方包劃淺格","輕力劃，唔好切穿。"),ye("hold","yaku","パンを 焼{や}いて","烘至金黃","控制火候。")]},{id:"pancakes",chapter:"cafe",jp:"ホットケーキ",yue:"熱香餅",emoji:"🥞",price:300,station:"pan",serves:"2 塊",time:"15 分鐘",ingredients:[["komugiko","自發粉 100g（此處取代普通麵粉）"],["tamago","雞蛋 1 隻"],["milk","牛奶 80ml"],["satou","糖 15g"],["butter","牛油 5g"]],howto:["蛋、奶同糖拌勻，加自發粉輕拌至冇乾粉。","平底鑊薄搽牛油，小火倒入麵糊。","表面冒泡、邊緣凝固時反面，再煎至中心熟透。"],steps:[ln(["komugiko","tamago","milk"]),ye("stir","mazeru","生地{きじ}を 混{ま}ぜて","輕拌麵糊","唔好攪過頭。"),ye("timing","yaku","裏返{うらがえ}して","冒泡就反面","等啱時機！")]}].map(i=>({...i,dish:i.id,unlock:{}})),m_=[["yaku","焼{や}く","燒、烘","verb"],["ageru","揚{あ}げる","炸","verb"],["ireru","入{い}れる","倒入、沖泡","verb"],["musu","蒸{む}す","蒸","verb"],["tsuika","追加{ついか}","加單","phrase"],["urikire","売{う}り切{き}れ","沽清","phrase"],["hot","温{あたた}かい","熱飲","phrase"],["iced","冷{つめ}たい","凍飲","phrase"],["less_sugar","甘{あま}さ控{ひか}えめ","少甜","phrase"],["no_sugar","砂糖{さとう}なし","無糖","phrase"]],Va=[{id:"reader",name:"讀書常客",request:"hot",jp:"いつもの、温{あたた}かいので お願{ねが}いします。",yue:"同平時一樣，要熱嘅。"},{id:"walker",name:"散步常客",request:"iced",jp:"冷{つめ}たいので お願{ねが}いします。",yue:"唔該要凍飲。"},{id:"artist",name:"畫畫常客",request:"less_sugar",jp:"甘{あま}さ控{ひか}えめで お願{ねが}いします。",yue:"唔該少甜。"}],En={gohan:{jp:"ご飯{はん}",yue:"白飯",emoji:"🍚",cat:"ing",m:{s:"sphere",c:16645621,sc:[.32,.2,.32]}},shio:{jp:"塩{しお}",yue:"鹽",emoji:"🧂",cat:"ing",m:{s:"cyl",c:15658734,sc:[.08,.2,.08]}},nori:{jp:"海苔{のり}",yue:"紫菜",emoji:"🟩",cat:"ing",m:{s:"box",c:2044706,sc:[.3,.01,.2]}},umeboshi:{jp:"梅干{うめぼ}し",yue:"酸梅",emoji:"🔴",cat:"ing",m:{s:"sphere",c:13117500,sc:[.07,.06,.07]}},sake_fish:{jp:"鮭{さけ}",yue:"三文魚",emoji:"🐟",cat:"ing",m:{s:"box",c:16747622,sc:[.2,.06,.12]}},mizu:{jp:"水{みず}",yue:"水",emoji:"💧",cat:"ing",m:{s:"cyl",c:9425919,sc:[.1,.22,.1]}},dashi:{jp:"だし",yue:"日式高湯",emoji:"🥣",cat:"ing",m:{s:"cyl",c:14263361,sc:[.12,.12,.12]}},tofu:{jp:"豆腐{とうふ}",yue:"豆腐",emoji:"⬜",cat:"ing",m:{s:"box",c:16776168,sc:[.24,.12,.16]}},wakame:{jp:"わかめ",yue:"海帶芽",emoji:"🌿",cat:"ing",m:{s:"sphere",c:3042106,sc:[.12,.04,.12]}},negi:{jp:"ねぎ",yue:"蔥",emoji:"🧅",cat:"ing",m:{s:"cyl",c:7127626,sc:[.03,.35,.03],rz:1.57}},miso:{jp:"味噌{みそ}",yue:"麵豉醬",emoji:"🟫",cat:"ing",m:{s:"cyl",c:11037490,sc:[.14,.1,.14]}},toriniku:{jp:"鶏肉{とりにく}",yue:"雞肉",emoji:"🍗",cat:"ing",m:{s:"box",c:15911328,sc:[.22,.08,.16]}},tamago:{jp:"卵{たまご}",yue:"雞蛋",emoji:"🥚",cat:"ing",m:{s:"sphere",c:16774108,sc:[.08,.1,.08]}},tamanegi:{jp:"玉{たま}ねぎ",yue:"洋蔥",emoji:"🧅",cat:"ing",m:{s:"sphere",c:15253626,sc:[.12,.11,.12]}},shoyu:{jp:"醤油{しょうゆ}",yue:"豉油",emoji:"🫗",cat:"ing",m:{s:"cyl",c:3807756,sc:[.06,.24,.06]}},mirin:{jp:"みりん",yue:"味醂（甜米酒）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:16115368,sc:[.06,.24,.06]}},satou:{jp:"砂糖{さとう}",yue:"砂糖",emoji:"🍬",cat:"ing",m:{s:"box",c:16777215,sc:[.1,.1,.1]}},men:{jp:"麺{めん}",yue:"麵",emoji:"🍜",cat:"ing",m:{s:"sphere",c:15980410,sc:[.22,.08,.22]}},chashu:{jp:"チャーシュー",yue:"叉燒（日式）",emoji:"🥩",cat:"ing",m:{s:"cyl",c:11887930,sc:[.14,.03,.14]}},moyashi:{jp:"もやし",yue:"芽菜",emoji:"🌱",cat:"ing",m:{s:"sphere",c:16249808,sc:[.12,.05,.12]}},ninniku:{jp:"にんにく",yue:"蒜頭",emoji:"🧄",cat:"ing",m:{s:"sphere",c:15986400,sc:[.07,.07,.07]}},sake_drink:{jp:"酒{さけ}",yue:"日本酒（煮食用）",emoji:"🍶",cat:"ing",m:{s:"cyl",c:14741759,sc:[.06,.24,.06]}},kiru:{jp:"切{き}る",yue:"切",emoji:"🔪",cat:"verb"},mazeru:{jp:"混{ま}ぜる",yue:"攪拌、撈勻",emoji:"🥄",cat:"verb"},niru:{jp:"煮{に}る",yue:"煮、燜",emoji:"🍲",cat:"verb"},nigiru:{jp:"握{にぎ}る",yue:"揸實、搓（飯糰）",emoji:"✊",cat:"verb"},tokasu:{jp:"溶{と}かす",yue:"溶開",emoji:"🫧",cat:"verb"},yuderu:{jp:"ゆでる",yue:"烚（落水煮）",emoji:"♨️",cat:"verb"},noseru:{jp:"のせる",yue:"放上面",emoji:"⬆️",cat:"verb"},onigiri:{jp:"おにぎり",yue:"飯糰",emoji:"🍙",cat:"dish"},misoshiru:{jp:"味噌汁{みそしる}",yue:"麵豉湯",emoji:"🥣",cat:"dish"},oyakodon:{jp:"親子丼{おやこどん}",yue:"親子丼（雞肉滑蛋飯）",emoji:"🍛",cat:"dish"},ramen:{jp:"ラーメン",yue:"拉麵",emoji:"🍜",cat:"dish"},ocha:{jp:"お茶{ちゃ}",yue:"茶",emoji:"🍵",cat:"dish"},omizu:{jp:"お水{みず}",yue:"水（禮貌講法）",emoji:"🥛",cat:"dish"},biiru:{jp:"ビール",yue:"啤酒",emoji:"🍺",cat:"dish"},hitotsu:{jp:"一{ひと}つ",yue:"一個",emoji:"1️⃣",cat:"num"},futatsu:{jp:"二{ふた}つ",yue:"兩個",emoji:"2️⃣",cat:"num"},mittsu:{jp:"三{みっ}つ",yue:"三個",emoji:"3️⃣",cat:"num"},hitori:{jp:"一人{ひとり}",yue:"一個人",emoji:"🧍",cat:"num"},futari:{jp:"二人{ふたり}",yue:"兩個人",emoji:"👫",cat:"num"},sannin:{jp:"三人{さんにん}",yue:"三個人",emoji:"👨‍👩‍👧",cat:"num"},irasshaimase:{jp:"いらっしゃいませ",yue:"歡迎光臨",emoji:"🙇",cat:"phrase"},arigatou:{jp:"ありがとうございます",yue:"多謝（禮貌）",emoji:"🙏",cat:"phrase"},oishii:{jp:"おいしい",yue:"好好食",emoji:"😋",cat:"phrase"},itadakimasu:{jp:"いただきます",yue:"開動喇（食之前講）",emoji:"🙏",cat:"phrase"},gochisousama:{jp:"ごちそうさまでした",yue:"多謝款待（食完講）",emoji:"😊",cat:"phrase"},kudasai:{jp:"ください",yue:"請畀我⋯",emoji:"👉",cat:"phrase"},onegaishimasu:{jp:"お願{ねが}いします",yue:"麻煩你、唔該",emoji:"🙇",cat:"phrase"},okaikei:{jp:"お会計{かいけい}",yue:"埋單",emoji:"🧾",cat:"phrase"},sumimasen:{jp:"すみません",yue:"唔好意思（叫人都用得）",emoji:"✋",cat:"phrase"},atsui:{jp:"熱{あつ}い",yue:"好熱、好燙",emoji:"🔥",cat:"phrase"},oomori:{jp:"大盛{おおも}り",yue:"大份",emoji:"⛰️",cat:"phrase"},matta:{jp:"また 来{き}ます",yue:"我會再嚟",emoji:"👋",cat:"phrase"},oishikatta:{jp:"美味{おい}しかった",yue:"好好食呀（過去式）",emoji:"🥰",cat:"phrase"},hai:{jp:"はい",yue:"係／好",emoji:"⭕",cat:"phrase"},iie:{jp:"いいえ",yue:"唔係／唔使",emoji:"❌",cat:"phrase"}};for(const[i,t,e,n,s,r]of p_)En[i]={jp:t,yue:e,emoji:n,cat:"ing",textIcon:!0,m:{s,c:r,sc:[.12,.1,.12]}};for(const i of qh)En[i.id]={jp:i.jp,yue:i.yue,emoji:i.emoji,cat:"dish",textIcon:!0};for(const[i,t,e,n]of m_)En[i]={jp:t,yue:e,cat:n,emoji:n==="verb"?"🥄":"💬",textIcon:!0};function me(i){const t=En[i];if(!t)throw new Error("vocab missing: "+i);return{id:i,...t}}const It=(i,t={})=>new _c({color:i,roughness:.6,...t}),ri=i=>(i.castShadow=!0,i.receiveShadow=!0,i);function se(i,t,e=1,n=1,s=1){const r=ri(new ut(new Vn(i,20,14),typeof t=="number"?It(t):t));return r.scale.set(e,n,s),r}function we(i,t,e,n){return ri(new ut(new Ee(i,t,e),typeof n=="number"?It(n):n))}function ue(i,t,e,n,s=24){return ri(new ut(new hn(i,t,e,s),typeof n=="number"?It(n):n))}function Ga(i=.22,t=.14,e=10165536,n=1708048){const s=[];for(let h=0;h<=10;h++){const u=h/10;s.push(new nt(i*.45+i*.55*Math.sin(u*Math.PI/2),t*u))}const r=new Kt,a=ri(new ut(new Ns(s,32),It(e,{roughness:.3}))),o=s.map(h=>new nt(h.x*.93,h.y+.005)),c=new ut(new Ns(o,32),It(n,{side:We,roughness:.3})),l=ue(i*.38,i*.4,.03,e);return l.position.y=-.01,r.add(a,c,l),r.userData.top=t,r.userData.r=i*.93,r}function Fn(i=.25,t=16052714){const e=ue(i,i*.8,.03,t,32),n=ri(new ut(new Ge(i*.95,.012,6,32),It(3104156)));n.rotation.x=Math.PI/2,n.position.y=.016;const s=new Kt;return s.add(e,n),s}function jo(i=!0){const t=new Kt,e=new Hh,n=.14,s=.05,r=[0,1,2].map(c=>new nt(Math.sin(c*2.094)*n,Math.cos(c*2.094)*n));for(let c=0;c<3;c++){const l=r[c],h=r[(c+1)%3],u=r[(c+2)%3],d=l.clone().lerp(u,s/n*.9),f=l.clone().lerp(h,s/n*.9);c===0?e.moveTo(d.x,d.y):e.lineTo(d.x,d.y),e.quadraticCurveTo(l.x,l.y,f.x,f.y)}e.closePath();const a=new gc(e,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.04,bevelSegments:4,curveSegments:10});a.translate(0,0,-.04);const o=ri(new ut(a,It(16514036,{roughness:.9})));if(o.position.y=.14,t.add(o),i){const c=we(.13,.11,.2,It(1517083,{roughness:.8}));c.position.set(0,.07,0),t.add(c)}return t}function Xl(i){const t=new Kt;if(i==="onigiri"){t.add(Fn(.24));const e=jo();e.position.y=.02,t.add(e);const n=jo();n.position.set(.1,.02,-.06),n.rotation.y=.5,n.scale.setScalar(.85),t.add(n);const s=se(.025,13117500);s.position.set(-.13,.04,.12),t.add(s)}else if(i==="misoshiru"){const e=Ga(.18,.13);t.add(e);const n=new ut(new Si(.15,32),It(12946250,{roughness:.2}));n.rotation.x=-Math.PI/2,n.position.y=.11,t.add(n);for(let s=0;s<6;s++){const r=we(.035,.03,.035,16776168);r.position.set((Math.random()-.5)*.18,.115,(Math.random()-.5)*.18),r.rotation.y=Math.random(),t.add(r)}for(let s=0;s<5;s++){const r=se(.03,3042106,1,.2,.6);r.position.set((Math.random()-.5)*.16,.112,(Math.random()-.5)*.16),t.add(r)}for(let s=0;s<8;s++){const r=ue(.012,.012,.005,8376399,8);r.position.set((Math.random()-.5)*.15,.118,(Math.random()-.5)*.15),t.add(r)}}else if(i==="oyakodon"){const e=Ga(.22,.15,2903951,15921126);t.add(e);const n=se(.19,16514036,1,.3,1);n.position.y=.13,t.add(n);const s=se(.19,It(16237873,{roughness:.35}),1,.16,1);s.position.y=.17,t.add(s);for(let r=0;r<6;r++){const a=se(.05,16775126,1,.25,.8);a.position.set((Math.random()-.5)*.24,.19,(Math.random()-.5)*.24),t.add(a)}for(let r=0;r<6;r++){const a=we(.05,.035,.04,13210202);a.position.set((Math.random()-.5)*.22,.2,(Math.random()-.5)*.22),a.rotation.y=Math.random()*3,t.add(a)}for(let r=0;r<3;r++){const a=se(.03,5025616,1,.15,1.6);a.position.set((Math.random()-.5)*.08,.22,(Math.random()-.5)*.08),a.rotation.y=r*2,t.add(a)}}else if(i==="ramen"){const e=Ga(.27,.17,11740702,1118481);t.add(e);const n=new ut(new Si(.235,32),It(13802331,{roughness:.15}));n.rotation.x=-Math.PI/2,n.position.y=.15,t.add(n);for(let l=0;l<7;l++){const h=new ut(new Ge(.05+Math.random()*.06,.008,6,20),It(15980410));h.rotation.x=Math.PI/2,h.position.set((Math.random()-.5)*.12,.152,(Math.random()-.5)*.12),t.add(h)}for(let l=0;l<2;l++){const h=ue(.07,.07,.02,11887930);h.position.set(-.08+l*.05,.165,-.08),h.rotation.x=.3,t.add(h)}const s=new ut(new Vn(.05,16,10,0,Math.PI*2,0,Math.PI/2),It(16775920));s.scale.set(1,.7,1.3),s.position.set(.1,.15,.05),t.add(s);const r=se(.028,15763994,1,.4,1.2);r.position.set(.1,.183,.05),t.add(r);const a=we(.12,.14,.005,1517083);a.position.set(0,.2,-.18),a.rotation.x=-.25,t.add(a);const o=ue(.035,.035,.012,16777215);o.position.set(.05,.16,.13),t.add(o);const c=new ut(new Ge(.018,.005,6,16),It(16740256));c.rotation.x=Math.PI/2,c.position.set(.05,.167,.13),t.add(c);for(let l=0;l<10;l++){const h=ue(.01,.01,.005,8376399,8);h.position.set(-.1+Math.random()*.1,.158,.05+Math.random()*.1),t.add(h)}}else if(["instant_coffee","black_tea","matcha_latte"].includes(i)){t.add(Fn(.19));const e=ue(.115,.09,.2,16774367);e.position.y=.12,t.add(e);const n=ue(.106,.106,.012,i==="instant_coffee"?4796454:i==="black_tea"?11627820:9350233);n.position.y=.225,t.add(n);const s=new ut(new Ge(.06,.015,8,20),It(16774367));if(s.position.set(.12,.12,0),t.add(s),i==="matcha_latte"){const r=ue(.06,.06,.005,16775647);r.position.y=.235,t.add(r)}}else if(i==="edamame"){t.add(Fn());for(let e=0;e<6;e++){const n=se(.065,7974216,1.7,.45,.55);n.position.set((e%3-1)*.12,.05+Math.floor(e/3)*.035,(Math.floor(e/3)-.5)*.12),n.rotation.y=e*.8,t.add(n)}}else if(i==="yakitori"){t.add(Fn());for(let e=0;e<2;e++){const n=we(.015,.015,.42,13017452);n.position.set(e*.17-.08,.05,0),t.add(n);for(let s=0;s<4;s++){const r=we(.085,.06,.065,s%2?8889940:13009468);r.position.set(e*.17-.08,.08,s*.08-.08),t.add(r)}}}else if(i==="karaage"||i==="agedashi"){t.add(Fn());for(let e=0;e<5;e++){const n=i==="karaage"?se(.07,12945979,1,.8,.9):we(.1,.08,.1,15122813);if(n.position.set(Math.cos(e*1.26)*.13,.07,Math.sin(e*1.26)*.13),t.add(n),i==="agedashi"){const s=se(.02,7185226,1.4,.2,.5);s.position.copy(n.position),s.position.y+=.05,t.add(s)}}}else if(i==="okonomiyaki"||i==="pancakes"){t.add(Fn());for(let e=0;e<(i==="pancakes"?3:1);e++){const n=ue(.2,.2,.045,e%2?14858346:13210700);n.position.y=.045+e*.045,t.add(n)}if(i==="pancakes"){const e=we(.065,.025,.065,16768899);e.position.y=.17,t.add(e)}else for(let e=0;e<4;e++){const n=we(.31,.008,.015,6568748);n.position.set(0,.075,(e-1.5)*.055),t.add(n)}}else if(i==="thick_toast"){t.add(Fn());const e=we(.32,.09,.29,10314292);e.position.y=.065,t.add(e);const n=we(.28,.012,.25,15517065);n.position.y=.116,t.add(n);const s=we(.07,.022,.07,16768899);s.position.y=.135,t.add(s)}else if(i==="pudding"){t.add(Fn());const e=ue(.11,.16,.19,16046470);e.position.y=.11,t.add(e);const n=ue(.112,.112,.012,10178863);n.position.y=.21,t.add(n)}else if(i==="yakisoba"){t.add(Fn());for(let e=0;e<12;e++){const n=new ut(new Ge(.07,.009,6,16),It(12158277));n.rotation.x=Math.PI/2,n.position.set(Math.sin(e*2)*.11,.04+e*.004,Math.cos(e*2)*.1),t.add(n)}for(let e=0;e<5;e++){const n=se(.035,9876576,1.4,.2,1);n.position.set(Math.cos(e)*.12,.1,Math.sin(e)*.12),t.add(n)}}else if(i==="ocha"){const e=ue(.06,.05,.12,6983502);e.position.y=.06,t.add(e);const n=new ut(new Si(.055,20),It(10207050));n.rotation.x=-Math.PI/2,n.position.y=.11,t.add(n)}else if(i==="omizu"){const e=ue(.05,.045,.14,It(13627391,{transparent:!0,opacity:.45,roughness:.05}));e.position.y=.07,t.add(e)}else if(i==="biiru"){const e=ue(.06,.06,.18,It(15905076,{transparent:!0,opacity:.85,roughness:.1}));e.position.y=.09,t.add(e);const n=se(.062,16777215,1,.4,1);n.position.y=.18,t.add(n);const s=new ut(new Ge(.04,.012,6,12,Math.PI),It(15267071,{transparent:!0,opacity:.6}));s.rotation.z=-Math.PI/2,s.position.set(.06,.09,0),t.add(s)}return t}function g_(){const i=new Kt;for(let t=0;t<3;t++){const e=we(.045,.035,.045,It(14086911,{transparent:!0,opacity:.75}));e.position.set((t-1)*.045,.244,t%2*.04-.02),i.add(e)}return i}function __(i){const t=En[i],e=t==null?void 0:t.m,n=new Kt;if(!e)return n;let s;return e.s==="sphere"?s=se(1,e.c):e.s==="box"?s=we(1,1,1,e.c):s=ue(1,1,1,e.c,18),s.scale.set(...e.sc),(e.s==="cyl"||e.s==="box")&&(s.scale.y=e.sc[1]),s.position.y=e.s==="sphere"?e.sc[1]:e.sc[1]/2,e.rz&&(s.rotation.z=e.rz,s.position.y=e.sc[0]),n.add(s),n}function v_(i){const t=new Kt;switch(i){case"onigiri_raw":{const e=jo(!1);t.add(e);break}case"tofu_cubes":for(let e=0;e<9;e++){const n=we(.06,.06,.06,16776168);n.position.set(e%3*.07-.07,.03,Math.floor(e/3)*.07-.07),t.add(n)}break;case"chicken_pieces":for(let e=0;e<8;e++){const n=we(.06,.04,.05,15911328);n.position.set((Math.random()-.5)*.25,.02,(Math.random()-.5)*.15),n.rotation.y=Math.random()*3,t.add(n)}break}return t}function x_(){const i=new Kt,t=we(.7,.04,.42,It(14267530,{roughness:.8}));return t.position.y=.02,i.add(t),i}function y_(){const i=new Kt,t=It(12107463,{metalness:.7,roughness:.3}),e=new ut(new hn(.2,.18,.22,28,1,!0),new _c({color:12107463,metalness:.7,roughness:.3,side:Ye}));e.position.y=.11,e.castShadow=!0;const n=ue(.18,.18,.01,t);n.position.y=.005;const s=new ut(new Si(.19,28),It(15259816,{roughness:.15}));s.rotation.x=-Math.PI/2,s.position.y=.16,s.visible=!1,i.add(e,n,s);for(const r of[-1,1]){const a=we(.08,.02,.04,3355443);a.position.set(r*.24,.19,0),i.add(a)}return i.userData.liquid=s,i}function M_(){const i=new Kt,t=ue(.17,.15,.05,It(2763306,{metalness:.5,roughness:.4}));t.position.y=.025;const e=ue(.015,.015,.35,7028509);e.rotation.z=Math.PI/2,e.position.set(.33,.05,0);const n=new ut(new Si(.15,28),It(12089914,{roughness:.15}));return n.rotation.x=-Math.PI/2,n.position.y=.045,n.visible=!1,i.add(t,e,n),i.userData.liquid=n,i}function Yh(i){const t=new Kt,e=i.color,n=se(.32,e,1,1.15,.9);n.position.y=.55,t.add(n);const s=se(.22,i.id==="maneki"?16777215:16774112,1,1.1,.6);s.position.set(0,.5,.2),t.add(s);const r=new Kt;r.position.y=1.08,t.add(r),r.add(se(.3,e,1.1,1,1));const a=i.id==="kuma"?14267276:i.id==="kitsune"||i.id==="shiba"?16774112:16777215,o=se(.12,a,1.3,.85,.9);o.position.set(0,-.08,.24),r.add(o);const c=se(.035,2236962);c.position.set(0,-.04,.35),r.add(c);for(const l of[-1,1]){const h=se(.04,new rn({color:1118481}),1,1.2,.6);h.position.set(l*.12,.04,.27),r.add(h);const u=se(.012,new rn({color:16777215}));u.position.set(l*.12+.012,.06,.3),r.add(u);const d=se(.04,new rn({color:16752560,transparent:!0,opacity:.6}),1,.6,.3);if(d.position.set(l*.2,-.06,.24),r.add(d),i.mask){const m=se(.08,3813416,1.2,.9,.4);m.position.set(l*.12,.03,.24),r.add(m),h.position.z=.29}let f;i.ear==="long"?(f=se(.07,e,1,3.2,.6),f.position.set(l*.1,.42,0),f.rotation.z=-l*.15):i.ear==="round"?(f=se(.09,e,1,1,.6),f.position.set(l*.22,.24,0)):(f=ri(new ut(new ds(.1,.2,12),It(e))),f.scale.z=.6,f.position.set(l*.18,.3,0),f.rotation.z=-l*.3),r.add(f);const g=se(.08,e,1,1.6,1);g.position.set(l*.3,.6,.1),g.rotation.z=l*.4,t.add(g),i.id==="maneki"&&l===1&&(g.position.set(.3,.95,.1),g.rotation.z=-.3,t.userData.wave=g);const v=se(.09,e,1.2,.6,1.4);v.position.set(l*.14,.05,.08),t.add(v)}if(i.id==="maneki"){const l=ri(new ut(new Ge(.2,.03,8,24),It(14100029)));l.rotation.x=Math.PI/2,l.position.y=.86,t.add(l);const h=se(.05,It(16106818,{metalness:.8,roughness:.2}));h.position.set(0,.8,.2),t.add(h);const u=ue(.12,.12,.02,It(16106818,{metalness:.8,roughness:.2}));u.scale.set(.7,1,1.2),u.rotation.x=Math.PI/2,u.position.set(-.15,.55,.3),t.add(u)}return t.userData.head=r,t}function jl(i){const t=new Kt;if(i==="deco_lantern"){const e=se(.2,It(14694959,{emissive:8392720,emissiveIntensity:.6}),1,1.3,1),n=ue(.1,.1,.05,2236962);n.position.y=.27;const s=ue(.1,.1,.05,2236962);s.position.y=-.27;const r=ue(.005,.005,.5,2236962);r.position.y=.5;const a=new jh(16744512,.8,3);t.add(e,n,s,r,a)}else if(i==="deco_noren"){const e=ue(.015,.015,1.4,7028509);e.rotation.z=Math.PI/2,t.add(e);for(let n=0;n<3;n++){const s=we(.44,.55,.01,It(1914199,{side:Ye}));s.position.set(-.46+n*.46,-.28,0),t.add(s);const r=se(.06,16777215,1,1,.2);r.position.set(-.46+n*.46,-.3,.01),t.add(r)}}else if(i==="deco_bonsai"){const e=ue(.12,.09,.08,3100527);e.position.y=.04,t.add(e);const n=ue(.02,.03,.18,5978654);n.position.y=.17,n.rotation.z=.3,t.add(n),[[0,.3,0,.1],[-.08,.26,.02,.07],[.08,.32,-.02,.07]].forEach(([s,r,a,o])=>{const c=se(o,4165439,1.3,.7,1);c.position.set(s,r,a),t.add(c)})}else if(i==="deco_maneki"){const e=Yh({id:"maneki",color:16777215,ear:"pointy"});e.scale.setScalar(.35),t.add(e),t.userData.wave=e.userData.wave}return t}function ql(i="#fff",t=!0){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,i),s.addColorStop(t?.4:.9,i),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new Ur(e);return r.colorSpace=ke,r}const Ji=40;class S_{constructor(t){this.canvas=t,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.dprMax=Math.min(window.devicePixelRatio||1,this.mobile?1.5:2),this.renderer=new Sg({canvas:t,antialias:!(this.mobile&&window.devicePixelRatio>=2),powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dprMax),this.renderer.outputColorSpace=ke,this.renderer.toneMapping=rh,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.mobile?tc:ih,this.quality=2,this.perfN=0,this.perfT=0,this.perfCool=3,this.trauma=0,this.fovKick=0,this.baseFov=42,this.reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,this.shakeOn=!0,this.springs=[],this._v=new C,this.scene=new bg,this.scene.background=new qt(16180168),this.scene.fog=new dc(16180168,12,30),this.camera=new nn(42,1,.1,100),this.camPos=new C,this.camLook=new C,this.camTargetPos=new C,this.camTargetLook=new C,this.particles=[],this.tweens=[],this.anchors=[],this.clock=new h_,this.onCatTap=null,this.raycaster=new u_,this.lights(),this.buildKitchen(),this.buildRestaurant(),this.cat=new f_,this.cat.root.position.set(-.35,0,-.6),this.kitchen.add(this.cat.root),this.texSteam=ql("rgba(255,255,255,0.9)"),this.texSpark=ql("#ffe680",!1),this.texHeart=new Ol().load(Br("ui_heart")),this.texCoin=new Ol().load(Br("ui_coin")),this.texHeart.colorSpace=this.texCoin.colorSpace=ke,this.steamOn=null,this.setView("kitchen",!0),this.resize(),window.addEventListener("resize",()=>this.resize()),t.addEventListener("pointerdown",e=>this.tap(e)),this.renderer.setAnimationLoop(()=>this.frame()),document.addEventListener("visibilitychange",()=>{document.hidden?this.renderer.setAnimationLoop(null):(this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.frame()))})}lights(){const t=new o_(16774368,9071184,1.1);this.scene.add(t);const e=new Hl(16770752,2);e.position.set(3,6,4),e.castShadow=!0,e.shadow.mapSize.set(this.mobile?512:1024,this.mobile?512:1024),e.shadow.camera.left=-4,e.shadow.camera.right=4,e.shadow.camera.top=4,e.shadow.camera.bottom=-2,e.shadow.bias=-5e-4,e.shadow.radius=4,this.sun=e,this.scene.add(e,e.target);const n=new Hl(12638463,.5);n.position.set(-4,3,2),this.scene.add(n)}buildKitchen(){const t=new Kt;this.kitchen=t,this.scene.add(t);const e=new ut(new en(14,10),It(13016173,{roughness:.9}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let P=-6;P<7;P++){const R=new ut(new en(.02,10),It(10779730));R.rotation.x=-Math.PI/2,R.position.set(P*.6,.002,0),t.add(R)}const n=new ut(new en(14,6),It(16247506,{roughness:1}));n.position.set(0,3,-2.2),n.receiveShadow=!0,t.add(n);const s=new ut(new Ee(14,1,.05),It(9132604));s.position.set(0,.5,-2.17),t.add(s);const r=new ut(new en(1.4,1),new rn({map:this.skyTexture()}));r.position.set(1.4,2.4,-2.14),t.add(r);const a=new ut(new Ee(1.5,1.1,.04),It(7029286));a.position.set(1.4,2.4,-2.17),t.add(a);const o=new ut(new Ee(.04,1,.06),It(7029286));o.position.set(1.4,2.4,-2.1),t.add(o);const c=new ut(new Ee(1.4,.04,.06),It(7029286));c.position.set(1.4,2.4,-2.1),t.add(c),this.menuBoard=new ut(new en(1.2,.9),new rn({map:this.menuTexture([])})),this.menuBoard.position.set(-1.3,2.45,-2.17),t.add(this.menuBoard);const l=new ut(new Ee(1.8,.05,.3),It(9132604));l.position.set(-.2,1.75,-2.05),l.castShadow=!0,t.add(l);const h=[14263361,11037490,3807756,16115368,16777215,7127626];for(let P=0;P<6;P++){const R=new ut(new hn(.07,.07,.16+P%2*.06,14),It(h[P],{roughness:.3}));R.position.set(-.95+P*.22,1.86+P%2*.03,-2),R.castShadow=!0,t.add(R)}const u=new ut(new ds(.3,.25,24,1,!0),It(2894892,{side:Ye}));u.position.set(-.3,3,-.4),t.add(u);const d=new ut(new Vn(.08),new rn({color:16773568}));d.position.set(-.3,2.88,-.4),t.add(d);const f=new jh(16766362,3,5,1.5);f.position.set(-.3,2.8,-.4),t.add(f);const g=new ut(new Ee(3.6,1,.9),It(7226409,{roughness:.7}));g.position.set(0,.5,0),g.castShadow=g.receiveShadow=!0,t.add(g);const v=new ut(new Ee(3.7,.08,1),It(14730138,{roughness:.5}));v.position.set(0,1.04,0),v.receiveShadow=!0,v.castShadow=!0,t.add(v),this.counterY=1.08;const m=new ut(new Ee(.6,.05,.5),It(3355443));m.position.set(-1.1,this.counterY+.02,-.1),t.add(m);const p=new ut(new Ge(.15,.02,6,24),It(1118481));p.rotation.x=Math.PI/2,p.position.set(-1.1,this.counterY+.05,-.1),t.add(p),this.flame=new ut(new Ge(.14,.02,6,24),new rn({color:4891647})),this.flame.rotation.x=Math.PI/2,this.flame.position.set(-1.1,this.counterY+.07,-.1),this.flame.visible=!1,t.add(this.flame),this.stations={};const E=x_();E.position.set(.05,this.counterY,.05),t.add(E);const y=y_();y.position.set(-1.1,this.counterY+.05,-.1),t.add(y);const M=M_();M.position.set(-1.1,this.counterY+.05,-.1),M.visible=!1,t.add(M),this.stations={board:E,pot:y,pan:M},this.workItems=new Kt,t.add(this.workItems),this.servePos=new C(.75,this.counterY,.25),this.customerPos=new C(1.1,0,1),this.customerSpawn=new C(3.5,0,1.6),this.decoSlots={deco_lantern:[new C(1.4,2.9,-.6),t],deco_noren:[new C(-.2,3.35,-2.1),t],deco_bonsai:[new C(1.55,this.counterY,-.25),t],deco_maneki:[new C(.3,1.78,-2),t]},this.decoObjs={}}buildRestaurant(){const t=new Kt;t.position.x=Ji,this.rest=t,this.scene.add(t);const e=new ut(new en(10,10),It(12165754,{roughness:1}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let a=-4;a<5;a++){const o=new ut(new en(.03,10),It(7035450));o.rotation.x=-Math.PI/2,o.position.set(a*.9,.002,0),t.add(o)}const n=new ut(new en(10,6),It(15721156,{roughness:1}));n.position.set(0,3,-2.5),t.add(n);for(let a=-5;a<=5;a++){const o=new ut(new Ee(.08,6,.06),It(5978654));o.position.set(a*.9,3,-2.45),t.add(o)}["おにぎり","味噌汁","親子丼","ラーメン","ビール"].forEach((a,o)=>{const c=new ut(new en(.28,.9),new rn({map:this.tagTexture(a)}));c.position.set(-1.2+o*.4,2.6,-2.4),t.add(c)});for(const a of[-1.8,1.8]){const o=jl("deco_lantern");o.position.set(a,2.6,-1.8),t.add(o)}const r=new ut(new Ee(1.8,.08,1.1),It(8014378,{roughness:.5}));r.position.set(0,.75,.3),r.castShadow=r.receiveShadow=!0,t.add(r);for(const[a,o]of[[-.8,-.15],[.8,-.15],[-.8,.75],[.8,.75]]){const c=new ut(new Ee(.08,.75,.08),It(5978654));c.position.set(a,.375,o),t.add(c)}this.tableY=.79,this.tableItems=new Kt,t.add(this.tableItems),this.restCatPos=new C(-.95,0,-.55)}skyTexture(){const t=document.createElement("canvas");t.width=128,t.height=96;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,96);n.addColorStop(0,"#8fd3ff"),n.addColorStop(1,"#ffe3b0"),e.fillStyle=n,e.fillRect(0,0,128,96),e.fillStyle="#ffffffcc",[[30,30,14],[44,26,12],[90,40,10],[100,36,8]].forEach(([r,a,o])=>{e.beginPath(),e.arc(r,a,o,0,7),e.fill()}),e.fillStyle="#7a9a7a",e.beginPath(),e.moveTo(0,96),e.lineTo(40,60),e.lineTo(70,80),e.lineTo(100,55),e.lineTo(128,75),e.lineTo(128,96),e.fill();const s=new Ur(t);return s.colorSpace=ke,s}tagTexture(t){const e=document.createElement("canvas");e.width=80,e.height=256;const n=e.getContext("2d");n.fillStyle="#f3e3c0",n.fillRect(0,0,80,256),n.strokeStyle="#5b3a1e",n.lineWidth=6,n.strokeRect(3,3,74,250),n.fillStyle="#2a1a10",n.font='bold 38px "Noto Serif JP","Yu Mincho",serif',n.textAlign="center";const s=[...t],r=Math.min(48,220/s.length);s.forEach((o,c)=>n.fillText(o==="ー"?"｜":o,40,44+c*r));const a=new Ur(e);return a.colorSpace=ke,a}menuTexture(t){const e=document.createElement("canvas");e.width=320,e.height=240;const n=e.getContext("2d");n.fillStyle="#2f3b2f",n.fillRect(0,0,320,240),n.strokeStyle="#8b5a3c",n.lineWidth=14,n.strokeRect(0,0,320,240),n.fillStyle="#fff",n.font='bold 30px "Noto Sans JP",sans-serif',n.textAlign="center",n.fillText("お品書き",160,46),n.font='24px "Noto Sans JP",sans-serif',n.textAlign="left";const s=Math.min(36,145/Math.max(1,t.length));n.font=`${t.length>4?16:24}px "Noto Sans JP",sans-serif`,t.forEach((a,o)=>{n.fillStyle=a.locked?"#889":"#ffeeaa",n.fillText(a.locked?"？？？":a.name,22,82+o*s,205),n.textAlign="right",n.fillText(a.locked?"":a.price+"円",298,82+o*s),n.textAlign="left"});const r=new Ur(e);return r.colorSpace=ke,r}setMenu(t){var e;(e=this.menuBoard.material.map)==null||e.dispose(),this.menuBoard.material.map=this.menuTexture(t),this.menuBoard.material.needsUpdate=!0}setView(t,e=!1){var s;const n=this.view;this.view=t,t==="kitchen"&&(this.camTargetPos.set(.2,2.75,5),this.camTargetLook.set(.2,1.55,0)),t==="cook"&&(this.camTargetPos.set(-.3,2.9,3.6),this.camTargetLook.set(-.4,1.35,-.1)),t==="serve"&&(this.camTargetPos.set(.6,2.5,4.2),this.camTargetLook.set(.5,1.4,.3)),t==="rest"&&(this.camTargetPos.set(Ji-.1,1.95,4),this.camTargetLook.set(Ji-.55,1.15,-.4)),t==="restTable"&&(this.camTargetPos.set(Ji,2.75,3.1),this.camTargetLook.set(Ji,.75,.3)),this.fitAspect(),e?(this.camPos.copy(this.camTargetPos),this.camLook.copy(this.camTargetLook)):n!==t&&(this.fovKick=7),(s=this.onView)==null||s.call(this,t,e)}fitAspect(){const t=this.camera.aspect||.5;t<.9&&this.view==="cook"&&(this.camTargetPos.x+=.9,this.camTargetLook.x+=.9);const e=Math.max(this.view==="cook"?.45:0,(.9/t-1)*1.15),n=this.camTargetPos.clone().sub(this.camTargetLook);this.camTargetPos.copy(this.camTargetLook).add(n.multiplyScalar(1+e))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,e*.17,t,e),this.camera.updateProjectionMatrix(),this.setView(this.view||"kitchen",!0)}catTo(t){t==="rest"?(this.rest.add(this.cat.root),this.cat.root.position.copy(this.restCatPos),this.cat.root.rotation.y=.6,this.cat.holding("pad")):(this.kitchen.add(this.cat.root),this.cat.root.position.set(-.35,0,-.6),this.cat.root.rotation.y=0,this.cat.holding(null))}catFace(t){const e={front:0,stove:-.6,board:.25,customer:.6}[t]??0;this.tween(this.cat.root.rotation,{y:e},.3);const n=t==="stove"?-.75:-.35;this.tween(this.cat.root.position,{x:n},.35)}useStation(t){this.stations.pot.visible=t!=="pan",this.stations.pan.visible=t==="pan",this.station=t}clearWork(){this.workItems.clear(),this.stations.pot.userData.liquid.visible=!1,this.stations.pan.userData.liquid.visible=!1,this.flame.visible=!1,this.steamOn=null}placeIngredient(t,e,n){const s=__(t),a=this.station==="board"?new C(.05,this.counterY+.04,.05):new C(.05,this.counterY+.04,.05);return s.position.copy(a).add(new C((e-(n-1)/2)*.17,0,e%2*.08-.04)),this.popIn(s),this.workItems.add(s),s}showProp(t){const e={miso_soup:12946250,ramen_boil:15983544,pan_simmer:12089914,oyako_egg:16237873};if(e[t]){const s=this.stations[this.station==="pan"?"pan":"pot"];s.userData.liquid.visible=!0,s.userData.liquid.material.color.setHex(e[t]),this.flame.visible=!0,this.steamOn=s,this.workItems.children.forEach(r=>this.tween(r.scale,{x:.01,y:.01,z:.01},.25));return}const n=v_(t);n.children.length&&(this.workItems.children.forEach(s=>this.tween(s.scale,{x:.01,y:.01,z:.01},.25)),n.position.set(.05,this.counterY+.04,.05),this.popIn(n),this.workItems.add(n))}heat(t){this.flame.visible=t,t&&(this.steamOn=this.stations[this.station==="pan"?"pan":"pot"])}showDish(t){this.clearWork();const e=Xl(t);return e.position.copy(this.servePos).add(new C(-.7,0,-.15)),e.scale.setScalar(1.6),this.popIn(e,1.6),this.kitchen.add(e),this.dish=e,this.burst(e.position.clone().add(new C(0,.3,0)),this.texSpark,24,.08),setTimeout(()=>this.punch(e,-.18),350),e}slideDishToCustomer(){this.dish&&(this.tween(this.dish.position,{x:this.servePos.x,z:this.servePos.z+.1},.5),this.tween(this.dish.scale,{x:1.3,y:1.3,z:1.3},.5))}removeDish(){if(!this.dish)return;const t=this.dish;this.dish=null,this.tween(t.scale,{x:.01,y:.01,z:.01},.3).then(()=>{var e;return(e=t.parent)==null?void 0:e.remove(t)})}async customerIn(t){this.customerOut(!0);const e=Yh(t);return e.position.copy(this.customerSpawn),e.rotation.y=-1.2,this.kitchen.add(e),this.customer=e,await this.walk(e,this.customerPos,1.1),this.punch(e,-.22),this.tween(e.rotation,{y:-.9},.3),e}async customerOut(t=!1){var n,s;const e=this.customer;if(e){if(this.customer=null,t){(n=e.parent)==null||n.remove(e);return}this.tween(e.rotation,{y:1.6},.3),await this.walk(e,this.customerSpawn.clone().add(new C(1,0,.5)),1),(s=e.parent)==null||s.remove(e)}}walk(t,e,n){const s=t.position.clone();return this.tween({k:0},{k:1},n,r=>{t.position.lerpVectors(s,e,r.k),t.position.y=Math.abs(Math.sin(r.k*Math.PI*6))*.06})}customerJump(){const t=this.customer;t&&(this.punch(t,.3),this.tween({k:0},{k:1},.6,e=>{t.position.y=Math.abs(Math.sin(e.k*Math.PI*2))*.25}).then(()=>this.punch(t,-.25)),this.shake(.25),this.burst(t.position.clone().add(new C(0,1.5,0)),this.texHeart,6,.05,.25))}coinsFromCustomer(){this.customer&&this.burst(this.customer.position.clone().add(new C(0,1.2,0)),this.texCoin,10,.06,.2)}setDeco(t){for(const e in this.decoSlots){const n=t.includes(e);if(n&&!this.decoObjs[e]){const s=jl(e),[r,a]=this.decoSlots[e];s.position.copy(r),a.add(s),this.popIn(s),this.decoObjs[e]=s}else!n&&this.decoObjs[e]&&(this.decoObjs[e].parent.remove(this.decoObjs[e]),delete this.decoObjs[e])}}restClear(){this.tableItems.clear()}restServe(t,e){this.restClear(),t.forEach((n,s)=>{for(let r=0;r<e;r++){const a=Xl(n),o=(r-(e-1)/2)*.5+(s?.18:-.05);a.position.set(o,this.tableY,s?.25:.5),s&&a.scale.setScalar(1.1),this.popIn(a,a.scale.x),this.tableItems.add(a)}}),this.burst(new C(Ji,this.tableY+.4,.4),this.texSpark,20,.07)}shake(t=.3){!this.shakeOn||this.reduceMotion||(this.trauma=Math.min(1,this.trauma+t))}punch(t,e=.2){if(!t||this.reduceMotion)return;let n=this.springs.find(s=>s.obj===t);n||(n={obj:t,base:t.scale.clone(),x:0,v:0},this.springs.push(n)),n.v+=e*22}updateSprings(t){for(let e=this.springs.length-1;e>=0;e--){const n=this.springs[e];n.v+=(-180*n.x-12*n.v)*t,n.x+=n.v*t;const s=n.obj;if(Math.abs(n.x)<.001&&Math.abs(n.v)<.01){s.scale.copy(n.base),this.springs.splice(e,1);continue}s.scale.set(n.base.x*(1-n.x*.5),n.base.y*(1+n.x),n.base.z*(1-n.x*.5))}}perfWatch(t){if(t>.05||(this.perfT+=t,this.perfN++,this.perfN<90))return;const e=this.perfT/this.perfN;if(this.perfT=0,this.perfN=0,this.perfCool>0){this.perfCool--;return}e>.026&&this.quality>0&&(this.quality--,this.quality===1?(this.dprMax=Math.max(1,this.dprMax*.75),this.renderer.setPixelRatio(this.dprMax),this.resize()):(this.sun.castShadow=!1,this.renderer.shadowMap.enabled=!1,this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),this.perfCool=2)}burst(t,e,n=12,s=.08,r=.35){this.quality<2&&(n=Math.ceil(n/2)),n=Math.min(n,Math.max(0,70-this.particles.length));for(let a=0;a<n;a++){const o=new Cl(new zo({map:e,transparent:!0,depthWrite:!1}));o.position.copy(t),o.scale.setScalar(s*(1.5+Math.random())*(e===this.texSpark?1:2.5));const c=Math.random()*Math.PI*2;o.userData={v:new C(Math.cos(c)*r*Math.random()*2,.5+Math.random()*r*3,Math.sin(c)*r*Math.random()),life:1,g:-2},this.scene.add(o),this.particles.push(o)}}hearts(){const t=new C;this.cat.head.getWorldPosition(t),this.burst(t.add(new C(0,.4,0)),this.texHeart,4,.05,.15)}steamPuff(t){if(this.particles.length>60)return;const e=this._v;t.getWorldPosition(e);const n=new Cl(new zo({map:this.texSteam,transparent:!0,opacity:.5,depthWrite:!1}));n.position.copy(e).add(new C((Math.random()-.5)*.2,.25,(Math.random()-.5)*.2)),n.scale.setScalar(.15),n.userData={v:new C((Math.random()-.5)*.1,.4,0),life:1.4,g:0,grow:.25},this.scene.add(n),this.particles.push(n)}popIn(t,e=1){return t.scale.setScalar(.01),this.tween(t.scale,{x:e,y:e,z:e},.35,null,"back")}tween(t,e,n,s=null,r="out"){const a={};for(const o in e)a[o]=t[o];return new Promise(o=>this.tweens.push({obj:t,from:a,to:e,dur:n,t:0,onUpdate:s,ease:r,res:o}))}tap(t){const e=this.canvas.getBoundingClientRect(),n=new nt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(n,this.camera),this.raycaster.intersectObject(this.cat.root,!0)[0]&&this.onCatTap&&this.onCatTap()}screenOf(t,e=0){const n=this._v;return t.getWorldPosition(n),n.y+=e,n.project(this.camera),{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,behind:n.z>1}}anchor(t,e,n){this.anchors.push({el:t,getObj:e,offsetY:n})}unanchor(t){this.anchors=this.anchors.filter(e=>e.el!==t)}frame(){var s,r;const t=Math.min(this.clock.getDelta(),.05),e=1-Math.pow(.02,t);if(this.camPos.lerp(this.camTargetPos,e),this.camLook.lerp(this.camTargetLook,e),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.trauma>0){const a=this.trauma*this.trauma;this.camera.position.x+=(Math.random()-.5)*.16*a,this.camera.position.y+=(Math.random()-.5)*.16*a,this.camera.rotation.z+=(Math.random()-.5)*.035*a,this.trauma=Math.max(0,this.trauma-t*1.8)}this.fovKick>.01?(this.fovKick*=Math.pow(.004,t),this.camera.fov=this.baseFov+this.fovKick,this.camera.updateProjectionMatrix()):this.camera.fov!==this.baseFov&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()),this.sun.position.set(this.camLook.x+3,6,4),this.sun.target.position.set(this.camLook.x,0,0),this.cat.update(t),this.updateSprings(t),this.perfWatch(t);const n=this.clock.elapsedTime;this.customer&&(this.customer.userData.head.rotation.z=Math.sin(n*2)*.08,this.customer.userData.wave&&(this.customer.userData.wave.rotation.z=-.3+Math.sin(n*6)*.4)),(s=this.decoObjs.deco_maneki)!=null&&s.userData.wave&&(this.decoObjs.deco_maneki.userData.wave.rotation.z=-.3+Math.sin(n*4)*.4),this.decoObjs.deco_lantern&&(this.decoObjs.deco_lantern.rotation.z=Math.sin(n*.8)*.05),this.flame.visible&&this.flame.scale.setScalar(1+Math.sin(n*30)*.05),this.steamOn&&Math.random()<t*8&&this.steamPuff(this.steamOn);for(let a=this.tweens.length-1;a>=0;a--){const o=this.tweens[a];o.t+=t;let c=Math.min(o.t/o.dur,1);o.ease==="out"?c=1-Math.pow(1-c,3):o.ease==="back"&&(c=1+(1.70158+1)*Math.pow(c-1,3)+1.70158*Math.pow(c-1,2));for(const l in o.to)o.obj[l]=o.from[l]+(o.to[l]-o.from[l])*c;(r=o.onUpdate)==null||r.call(o,o.obj),o.t>=o.dur&&(this.tweens.splice(a,1),o.res())}for(let a=this.particles.length-1;a>=0;a--){const o=this.particles[a],c=o.userData;c.life-=t,c.v.y+=c.g*t,o.position.addScaledVector(c.v,t),c.grow&&o.scale.addScalar(c.grow*t),o.material.opacity=Math.max(0,Math.min(1,c.life))*(c.grow?.5:1),c.life<=0&&(this.scene.remove(o),o.material.dispose(),this.particles.splice(a,1))}if(this.anchors.length)for(const a of this.anchors){const o=a.getObj();if(!o){a.el.style.opacity=0;continue}const c=this.screenOf(o,a.offsetY),l=a.el.firstElementChild,h=12,u=document.querySelector("#hud.show"),d=u?u.getBoundingClientRect().bottom+12:h,f=document.querySelector("#panel.show"),g=f?f.getBoundingClientRect().top-12:innerHeight-h;l.style.maxHeight=`${Math.max(44,g-d)}px`;const v=l.offsetWidth,m=l.offsetHeight,p=Math.max(v/2+h,Math.min(innerWidth-v/2-h,c.x)),E=Math.max(d+m,Math.min(g,c.y));l.style.setProperty("--tail-x",`${Math.max(16,Math.min(v-16,c.x-p+v/2))}px`),a.el.style.opacity=c.behind?0:1,a.el.style.transform=`translate(${p}px, ${E}px)`}this.renderer.render(this.scene,this.camera)}}const yc=/([一-鿿々〆ヶ]+)\{([^}]+)\}/g;function b_(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function wn(i){return b_(i).replace(/\^/g,"").replace(/ /g,"").replace(yc,"<ruby>$1<rt>$2</rt></ruby>")}function E_(i){return i.replace(yc,"$1").replace(/\^/g,"").replace(/ /g,"")}function w_(i,{forSpeech:t=!1}={}){let e=i.replace(yc,"$2");return t&&(e=e.replace(/\^は/g,"わ").replace(/\^へ/g,"え")),e}function $h(i){return E_(i)}const T_=96;function A_(i){return i.replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-T_))}const Yl={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"o",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ゔ:"vu"},Wa={ゃ:"a",ゅ:"u",ょ:"o"},$l={a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"};function R_(i){let t=A_(w_(i)),e="";for(let n=0;n<t.length;n++){const s=t[n],r=t[n+1];if(s==="^"){const o=t[n+1];if(o==="は"){e+="wa",n++;continue}if(o==="へ"){e+="e",n++;continue}continue}if(s==="っ"){const o=Yl[r];o&&(e+=o.startsWith("ch")?"t":o[0]);continue}if(s==="ー"){const o=e[e.length-1];$l[o]&&(e=e.slice(0,-1)+$l[o]);continue}let a=Yl[s];if(a===void 0){e+=s==="、"?", ":s==="。"?". ":s==="？"?"?":s==="！"?"!":s;continue}if(Wa[r]){const o=a.slice(0,-1);o==="sh"||o==="ch"||o==="j"?a=o+Wa[r]:a=o+"y"+Wa[r],n++}s==="ん"&&r&&/[あいうえおやゆよ]/.test(r)&&(a="n'"),e+=a}return e.replace(/\s+/g," ").trim()}function Kh(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Jh(i,t){return`${t}_${Kh($h(i))}`}const Zh="catcook_v1",qo={v:1,started:!1,level:1,xp:0,coins:0,served:0,shifts:0,firstDay:null,lastDay:null,streak:0,daysPlayed:0,lastGift:null,affection:0,lastPet:null,owned:["hat_chef"],wear:{hat:"hat_chef",neck:null},deco:[],stars:{},cooked:{},srs:{},restaurantDone:0,chapter:"home",chapterShifts:{},regularVisits:{},settings:{furigana:!0,romaji:!0,yue:!0,subs:"show",bgm:!0,sfx:!0,shake:!0},jpLevel:null,achievements:[]};let ee=C_();function C_(){try{const i=localStorage.getItem(Zh);if(i)return Qh(structuredClone(qo),JSON.parse(i))}catch{}return structuredClone(qo)}function Qh(i,t){for(const e in t)t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&i[e]&&typeof i[e]=="object"?Qh(i[e],t[e]):i[e]=t[e];return i}function Xe(){try{localStorage.setItem(Zh,JSON.stringify(ee))}catch{}}function Ct(){return ee}function P_(){ee=structuredClone(qo),Xe()}function Bs(){const i=new Date;return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`}function L_(i,t){const e=i.split("-").map(Number),n=t.split("-").map(Number),s=new Date(e[0],e[1]-1,e[2]),r=new Date(n[0],n[1]-1,n[2]);return Math.round((r-s)/864e5)}function D_(){const i=Bs(),t={newDay:!1,streakBroken:!1,gift:0};return ee.firstDay||(ee.firstDay=i),ee.lastDay!==i&&(t.newDay=!0,ee.lastDay&&L_(ee.lastDay,i)===1?ee.streak+=1:(ee.lastDay&&ee.streak>1&&(t.streakBroken=!0),ee.streak=1),ee.lastDay=i,ee.daysPlayed+=1),ee.lastGift!==i&&ee.started&&(t.gift=30+Math.min(ee.streak,7)*10,ee.lastGift=i,ee.coins+=t.gift),Xe(),t}function I_(){const i=new Date;return new Date(i.getFullYear(),i.getMonth(),i.getDate()+1)-i}const Kl=[0,30,80,160,270,420,620,880,1200,1600,2100];function Yo(i){return Kl[Math.min(i,Kl.length-1)]??i*500}function Mc(i){ee.xp+=i;let t=0;for(;ee.xp>=Yo(ee.level);)ee.level++,t++;return Xe(),t}const U_=[0,2,10,60*12,60*24*2,60*24*5];function ss(i){ee.srs[i]||(ee.srs[i]={box:0,due:Date.now(),seen:0,right:0,wrong:0}),ee.srs[i].seen++,Xe()}function sn(i,t){const e=ee.srs[i]||(ee.srs[i]={box:0,due:0,seen:1,right:0,wrong:0});t?(e.box=Math.min(e.box+1,5),e.right++):(e.box=0,e.wrong++),e.due=Date.now()+U_[e.box]*6e4,Xe()}function tu(i){var n;const t=Date.now(),e=i.map(s=>{const r=ee.srs[s];if(!r)return{id:s,s:50+Math.random()*10};const a=(t-r.due)/6e4;return{id:s,s:(a>=0?100+Math.min(a,60):-10)+(5-r.box)*8+r.wrong*3+Math.random()*10}});return e.sort((s,r)=>r.s-s.s),(n=e[0])==null?void 0:n.id}function $o(){return Object.values(ee.srs).filter(i=>i.box>=2).length}function N_(){return Object.keys(ee.srs).length}let Nt=null,Zi,Ls,Gn,Fr;const Xa=new Map;let rs=null;const eu=.26,F_=.08;let Xs=null,Or=null;function O_(i){Or=i}function k_(){if(Nt){Nt.state==="suspended"&&Nt.resume();return}Nt=new(window.AudioContext||window.webkitAudioContext),Zi=Nt.createGain(),Zi.gain.value=.9,Zi.connect(Nt.destination),Ls=Nt.createGain(),Ls.gain.value=.5,Ls.connect(Zi),Gn=Nt.createGain(),Gn.gain.value=0,Gn.connect(Zi),V_(),Fr=Nt.createGain(),Fr.gain.value=1,Fr.connect(Zi),j_(),document.addEventListener("visibilitychange",()=>{Nt&&(document.hidden?Nt.suspend():Nt.resume())})}async function nu(i){if(Xa.has(i))return Xa.get(i);const t=fetch(`./audio/${i}.mp3`).then(e=>{if(!e.ok)throw new Error("404");return e.arrayBuffer()}).then(e=>Nt.decodeAudioData(e)).catch(()=>null);return Xa.set(i,t),t}function B_(i,t){Nt&&nu(Jh(i,t))}async function Ue(i,t="word",e=1){if(!Nt)return;z_();const n=await nu(Jh(i,t));if(n){const s=Nt.createBufferSource();return s.buffer=n,s.playbackRate.value=e,s.connect(Fr),Jl(!0),s.start(),rs=s,new Promise(r=>{s.onended=()=>{Jl(!1),rs===s&&(rs=null),r()}})}if("speechSynthesis"in window){const s=new SpeechSynthesisUtterance($h(i));return s.lang="ja-JP",s.rate=.9*e,speechSynthesis.speak(s),new Promise(r=>{s.onend=r,setTimeout(r,4e3)})}}function z_(){if(rs){try{rs.stop()}catch{}rs=null}"speechSynthesis"in window&&speechSynthesis.cancel()}function Jl(i){!Gn||!Ct().settings.bgm||Gn.gain.setTargetAtTime(i?F_:eu,Nt.currentTime,.1)}function De(i,t,{type:e="sine",vol:n=.3,at:s=0,slide:r=0,out:a=null}={}){const o=Nt.currentTime+s,c=Nt.createOscillator(),l=Nt.createGain();c.type=e,c.frequency.setValueAtTime(i,o),r&&c.frequency.exponentialRampToValueAtTime(i*r,o+t),l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(.001,o+t),c.connect(l),l.connect(a||Ls),c.start(o),c.stop(o+t+.05)}function ja(i,{vol:t=.3,freq:e=2e3,q:n=1,at:s=0,type:r="bandpass"}={}){const a=Nt.currentTime+s,o=Math.floor(Nt.sampleRate*i),c=Nt.createBuffer(1,o,Nt.sampleRate),l=c.getChannelData(0);for(let f=0;f<o;f++)l[f]=(Math.random()*2-1)*(1-f/o);const h=Nt.createBufferSource();h.buffer=c;const u=Nt.createBiquadFilter();u.type=r,u.frequency.value=e,u.Q.value=n;const d=Nt.createGain();d.gain.value=t,h.connect(u),u.connect(d),d.connect(Ls),h.start(a)}function Tt(i){if(Or==null||Or(i),!(!Nt||!Ct().settings.sfx))switch(i){case"tap":De(880,.08,{type:"triangle",vol:.2});break;case"good":De(784,.12,{type:"triangle"}),De(1175,.2,{type:"triangle",at:.08});break;case"perfect":[784,988,1175,1568].forEach((t,e)=>De(t,.18,{type:"triangle",vol:.25,at:e*.06}));break;case"bad":De(220,.25,{type:"square",vol:.12,slide:.7});break;case"coin":De(1319,.08,{type:"square",vol:.1}),De(1760,.25,{type:"square",vol:.1,at:.07});break;case"chop":ja(.08,{vol:.6,freq:3e3,q:.8}),De(140,.06,{vol:.3});break;case"pop":De(500,.1,{slide:2,vol:.25});break;case"bubble":De(300+Math.random()*300,.08,{slide:1.8,vol:.12});break;case"whoosh":ja(.3,{vol:.25,freq:800,q:.5});break;case"boil":for(let t=0;t<4;t++)De(200+Math.random()*200,.1,{slide:2,vol:.1,at:t*.07});break;case"level":[523,659,784,1047,1319,1568].forEach((t,e)=>De(t,.3,{type:"triangle",vol:.22,at:e*.09}));break;case"meow":De(700,.35,{type:"sawtooth",vol:.06,slide:1.4}),De(980,.3,{type:"sine",vol:.1,at:.15,slide:.6});break;case"purr":for(let t=0;t<10;t++)ja(.05,{vol:.25,freq:120,q:2,at:t*.07,type:"lowpass"});break;case"door":De(1568,.5,{vol:.12}),De(1975,.6,{vol:.1,at:.15});break;case"rare":[1047,1319,1568,2093,1568,2093].forEach((t,e)=>De(t,.25,{type:"triangle",vol:.2,at:e*.07}));break}}const Ts=i=>440*Math.pow(2,(i-69)/12),H_=[{root:38,chord:[62,66,69,73],mel:[74,76,78,81,73]},{root:35,chord:[59,62,66,69],mel:[74,76,78,81,71]},{root:43,chord:[59,62,67,71],mel:[74,71,76,78,79]},{root:45,chord:[62,64,67,69],mel:[76,74,69,81,79]}],iu={kitchen:{bpm:78,arp:.55,mel:.5,perc:0,pad:1,oct:0},cook:{bpm:102,arp:.8,mel:.55,perc:1,pad:.6,oct:0},rest:{bpm:68,arp:.35,mel:.6,perc:0,pad:1.2,oct:0}};let Zl="kitchen",su="kitchen",mi=0,qa=0,Ql=[];function V_(){const i=Nt.createBiquadFilter();i.type="lowpass",i.frequency.value=3400,i.Q.value=.3;const t=Nt.createGain();t.gain.value=.85;const e=Nt.createConvolver(),n=Math.floor(Nt.sampleRate*1.8),s=Nt.createBuffer(2,n,Nt.sampleRate);for(let a=0;a<2;a++){const o=s.getChannelData(a);for(let c=0;c<n;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/n,2.6)}e.buffer=s;const r=Nt.createGain();r.gain.value=.35,i.connect(t),t.connect(Gn),i.connect(e),e.connect(r),r.connect(Gn),Xs=i}function th(i,t,e,n){for(const[s,r,a,o]of[[1,1,"triangle",e],[2,.25,"sine",e*.5],[4,.06,"sine",e*.2]]){const c=Nt.createOscillator(),l=Nt.createGain();c.type=a,c.frequency.value=i*s,l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(n*r,t+.008),l.gain.exponentialRampToValueAtTime(5e-4,t+o),c.connect(l),l.connect(Xs),c.start(t),c.stop(t+o+.05)}}function G_(i,t,e,n){const s=Nt.createOscillator(),r=Nt.createGain();s.type="sine",s.frequency.value=i,s.detune.value=(Math.random()-.5)*8,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(n,t+e*.35),r.gain.linearRampToValueAtTime(5e-4,t+e),s.connect(r),r.connect(Xs),s.start(t),s.stop(t+e+.05)}function Ya(i,t,e,n){const s=Nt.createOscillator(),r=Nt.createGain();s.type="sine",s.frequency.value=i,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(n,t+.02),r.gain.exponentialRampToValueAtTime(5e-4,t+e),s.connect(r),r.connect(Xs),s.start(t),s.stop(t+e+.05)}function W_(i,t,e=!1){const n=Nt.createOscillator(),s=Nt.createGain();n.type="sine",n.frequency.setValueAtTime(e?1500:1e3,i),n.frequency.exponentialRampToValueAtTime(e?900:600,i+.05),s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(5e-4,i+.07),n.connect(s),s.connect(Xs),n.start(i),n.stop(i+.1)}function X_(i){const t=iu[Zl],e=30/t.bpm,n=Math.floor(qa/8)%4,s=qa%8,r=H_[n];if(s===0&&(Zl=su,Ya(Ts(r.root),i,e*7,.55),r.chord.forEach((o,c)=>G_(Ts(o-12),i+c*.03,e*8.5,.07*t.pad))),s===4&&Ya(Ts(r.root+7),i,e*3,.35),[0,2,3,5,6,7].includes(s)&&Math.random()<t.arp+(s===0?1:0)){const o=r.chord[(s*3+n)%r.chord.length];th(Ts(o),i,e*4,.16)}if(s%2===0||s===3||s===7){let o=null;n%2===0?((Math.random()<t.mel||s===0)&&(o=r.mel[Math.floor(Math.random()*r.mel.length)]),Ql[s]=o):(o=Ql[s]??null,o!=null&&Math.random()<.2&&(o=r.mel[Math.floor(Math.random()*r.mel.length)])),o!=null&&th(Ts(o),i,e*3,.2)}return t.perc&&(s%2===1&&W_(i,.09,s===3||s===7),(s===0||s===4)&&Ya(70,i,.12,.5)),qa++,e}function j_(){mi=Nt.currentTime+.2,setInterval(()=>{if(!document.hidden)for(mi<Nt.currentTime-.5&&(mi=Nt.currentTime+.1);mi<Nt.currentTime+.25;)Ct().settings.bgm?mi+=X_(mi):mi+=.25},80),ru(Ct().settings.bgm)}function ru(i){Gn&&Gn.gain.setTargetAtTime(i?eu:0,Nt.currentTime,.3)}function q_(i){iu[i]&&(su=i)}const Zt=(i,t=document)=>t.querySelector(i);function D(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))s==="class"?n.className=r:s==="html"?n.innerHTML=r:s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r);for(const s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return qr(n),n}const Ne=i=>new Promise(t=>setTimeout(t,i));function Sc(){const i=Ct().settings;document.body.classList.toggle("no-furi",!i.furigana),document.body.classList.toggle("no-roma",!i.romaji),document.body.classList.toggle("no-yue",!i.yue)}function Pi(i,{yue:t="",voice:e="word",size:n="",hidden:s=!1,autoplay:r=!1}={}){const a=D("div",{class:`jp ${n}`}),o=D("div",{class:"jp-text",html:wn(i)}),c=D("div",{class:"jp-roma"},R_(i)),l=t?D("div",{class:"jp-yue"},t):null,h=D("button",{class:"spk","aria-label":"再聽",onclick:d=>{d.stopPropagation(),Tt("tap"),Ue(i,e)}},"🔊"),u=D("div",{class:"jp-body"},o,c,l);return a.append(u,h),s&&(a.classList.add("veiled"),u.addEventListener("click",()=>a.classList.remove("veiled"),{once:!0})),r&&Ue(i,e),a}function Li(){const i=Ct();Zt("#lv").textContent=i.level;const t=Yo(i.level-1),e=Yo(i.level);Zt("#xpbar i").style.width=`${Math.max(0,Math.min(1,(i.xp-t)/(e-t)))*100}%`,Zt("#coins b").textContent=i.coins,Zt("#streak b").textContent=i.streak,Zt("#streak").classList.toggle("hot",i.streak>=2)}function au(i){Zt("#hud").classList.toggle("show",i)}function Xn(...i){const t=Zt("#panel");return t.innerHTML="",t.append(...i),t.classList.add("show"),t}function bi(){Zt("#panel").classList.remove("show")}function Ei(i,{title:t=null,cols:e=1,extra:n=null}={}){return new Promise(s=>{const r=D("div",{class:`choices cols${e}`});let a=!1;i.forEach(o=>{const c=D("div",{class:`choice ${o.cls||""}`,role:"button",tabindex:"0"});o.el?c.append(o.el):(c.innerHTML=o.label,qr(c)),c.addEventListener("click",()=>{a||(a=!0,Tt("tap"),s({value:o.value,button:c,grid:r}))}),r.append(c)}),Xn(...[t,n,r].filter(Boolean))})}function ou(i="繼續 ▶",...t){return new Promise(e=>{const n=D("button",{class:"btn primary big",onclick:()=>{Tt("tap"),e()}},i);Xn(...t,n)})}const Ko=new Set;function Me(i,t,e,n,s,{hidden:r=!1,play:a=!0}={}){Pe(t);const o=D("div",{class:`bubble ${t}`});o.append(Pi(e,{yue:n,voice:s,hidden:r}));const c=D("div",{class:"bubble-anchor","data-who":t},o);Zt("#bubbles").append(c),Ko.add(c),c._world=i;const l=t==="cat"?()=>i.cat.head:()=>{var h;return(h=i.customer)==null?void 0:h.userData.head};return i.anchor(c,l,t==="cat"?.75:.5),requestAnimationFrame(()=>o.classList.add("in")),a?(t==="cat"&&i.cat.setMode("talk"),Ue(e,s).then(()=>{t==="cat"&&i.cat.mode==="talk"&&i.cat.setMode("idle")})):Promise.resolve()}function Pe(i){for(const t of[...Ko])(!i||t.dataset.who===i)&&(t._world.unanchor(t),t.remove(),Ko.delete(t))}function yn(i,t=2600){const e=Zt("#hint");e.textContent=i,e.classList.add("show"),clearTimeout(e._t),t&&(e._t=setTimeout(()=>e.classList.remove("show"),t))}function Y_(){Zt("#hint").classList.remove("show")}function ai(i,t=2200,e=""){const n=D("div",{class:`toast ${e}`,html:i});Zt("#toasts").append(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+500)}function an(i,t=""){const e=D("div",{class:`popword ${t}`},i);document.body.append(e),setTimeout(()=>e.remove(),900)}function js(i,t={x:innerWidth/2,y:innerHeight*.4}){const e=Zt("#coins").getBoundingClientRect(),n=Math.min(12,Math.max(3,Math.round(i/15)));for(let s=0;s<n;s++){const r=D("div",{class:"flycoin"},"🪙");r.style.left=t.x+"px",r.style.top=t.y+"px",document.body.append(r);const a=(Math.random()-.5)*120,o=-40-Math.random()*60;r.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${a}px,${o}px) scale(1.3)`,offset:.35},{transform:`translate(${e.x+10-t.x}px,${e.y+8-t.y}px) scale(0.6)`}],{duration:700+s*60,easing:"cubic-bezier(.5,0,.6,1)"}).onfinish=()=>{r.remove(),Tt("coin"),Zt("#coins").classList.remove("bump"),Zt("#coins").offsetWidth,Zt("#coins").classList.add("bump")}}}function ms(i,t,{onClose:e=null,wide:n=!1,footer:s=null}={}){const r=Zt("#modal");r.innerHTML="";const a=()=>{r.classList.remove("show"),e==null||e()},o=D("div",{class:`card ${n?"wide":""}`},D("div",{class:"card-head"},D("h2",{html:i}),D("button",{class:"x",onclick:()=>{Tt("tap"),a()}},"✕")),D("div",{class:"card-body"},t),s?D("div",{class:"card-footer"},s):null);return qr(o),r.append(o),r.classList.add("show"),r.onclick=c=>{c.target===r&&a()},{close:a,card:o}}function kr(){Zt("#modal").classList.remove("show")}function wr(i){const t=Zt("#fade");return t.classList.add("on"),Ne(520).then(async()=>{await i(),await Ne(80),t.classList.remove("on"),await Ne(520)})}function ni(i){i=[...i];for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}const _n=i=>i[Math.floor(Math.random()*i.length)],Tn=[{id:"onigiri",dish:"onigiri",price:120,unlock:{level:1},station:"board",serves:"2 個",time:"10 分鐘",ingredients:[["gohan","熱白飯 1 碗（約 150g）"],["shio","鹽 少少（一撮）"],["umeboshi","酸梅 1 粒（或三文魚碎）"],["nori","紫菜 1 塊（剪半）"],["mizu","凍水 少少（濕手用）"]],howto:["雙手沾水，再喺手掌抹少少鹽。","攞一半飯放手心，中間整個窿，放酸梅。","用另一半飯蓋住，雙手合埋輕輕揸，轉 3–4 次整成三角形。","唔好揸太實！外實內鬆先好食。","最後包上紫菜。想紫菜脆，食之前先包。"],steps:[{type:"pick",need:["gohan","shio","umeboshi","nori"],decoys:["tofu","tamago","negi"],jp:"まず 材料{ざいりょう}を 選{えら}んでにゃ",yue:"首先揀材料喵",tip:"聽讀音，揀啱嘅材料。"},{type:"mash",taps:10,time:5,anim:"press",verb:"nigiru",add:["onigiri_raw"],jp:"三角{さんかく}に 握{にぎ}って",yue:"揸成三角形",tip:"狂撳！但真係整嘅時候要輕力，外實內鬆。"},{type:"timing",rounds:1,zone:.24,anim:"wrap",verb:"noseru",jp:"海苔{のり}を 巻{ま}いて",yue:"包紫菜",tip:"撳準！紫菜要喺中間。"}]},{id:"misoshiru",dish:"misoshiru",price:150,unlock:{level:2},station:"pot",serves:"2 碗",time:"10 分鐘",ingredients:[["mizu","水 400ml"],["dashi","日式高湯粉 1 茶匙（或昆布 + 木魚自己煲）"],["tofu","豆腐 半盒（約 150g）"],["wakame","乾海帶芽 1 湯匙"],["miso","味噌 2 湯匙"],["negi","蔥 少少"]],howto:["水同高湯粉落煲，中火煮滾。","豆腐切 1.5cm 粒，同海帶芽一齊落，煮 1 分鐘。","熄火！用湯殼盛味噌，喺湯入面慢慢攪溶。","重點：味噌落咗之後唔好再滾，滾咗香味會走晒。","最後灑蔥花。"],steps:[{type:"pick",need:["dashi","tofu","wakame","miso"],decoys:["gohan","shoyu","chashu"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"高湯係日本菜嘅靈魂。"},{type:"timing",rounds:3,zone:.2,anim:"chop",verb:"kiru",add:["tofu_cubes"],jp:"豆腐{とうふ}を 切{き}って",yue:"切豆腐",tip:"撳準綠色位，切 3 刀。"},{type:"hold",zone:[.55,.8],anim:"stir",verb:"tokasu",add:["miso_soup"],jp:"火{ひ}を 止{と}めて、味噌{みそ}を 溶{と}かして",yue:"熄火，溶味噌",tip:"長按加熱，喺綠色位放手。太熱 = 滾瀉，味噌香味會走！"}]},{id:"oyakodon",dish:"oyakodon",price:280,unlock:{level:3},station:"pan",serves:"1 人",time:"15 分鐘",ingredients:[["toriniku","雞髀肉 100g"],["tamanegi","洋蔥 1/4 個"],["tamago","雞蛋 2 隻"],["dashi","高湯 60ml"],["shoyu","豉油 1 湯匙"],["mirin","味醂 1 湯匙"],["satou","砂糖 1 茶匙"],["gohan","熱白飯 1 碗"]],howto:["雞肉切一口大小，洋蔥切薄片。","細平底鑊落高湯、豉油、味醂、砂糖，煮滾。","落洋蔥同雞肉，中火煮 5 分鐘至熟。","雞蛋輕輕打散（唔好打太勻），淋 2/3 落去，冚蓋 30 秒。","再淋餘下蛋液，半熟就熄火，即刻滑落飯面。"],steps:[{type:"pick",need:["toriniku","tamanegi","tamago","shoyu"],decoys:["tofu","nori","moyashi"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"親子 = 雞（親）+ 蛋（子），幾得意。"},{type:"timing",rounds:3,zone:.18,anim:"chop",verb:"kiru",add:["chicken_pieces"],jp:"鶏肉{とりにく}を 切{き}って",yue:"切雞肉",tip:"一口大小就啱。"},{type:"stir",turns:3,anim:"stir",verb:"niru",add:["pan_simmer"],jp:"だしで 煮{に}て",yue:"用高湯煮",tip:"手指喺圓圈度轉圈！"},{type:"hold",zone:[.4,.62],anim:"pour",verb:"tamago",add:["oyako_egg"],jp:"卵{たまご}を 入{い}れて、半熟{はんじゅく}に",yue:"落蛋，要半熟",tip:"半熟先好食，唔好煮過龍！"}]},{id:"ramen",dish:"ramen",price:380,unlock:{day:2},station:"pot",serves:"1 碗",time:"20 分鐘（簡易版）",ingredients:[["men","拉麵（新鮮或乾麵）1 份"],["dashi","雞湯 300ml"],["shoyu","豉油 2 湯匙"],["mirin","味醂 1 茶匙"],["ninniku","蒜頭 1 粒（磨蓉）"],["chashu","叉燒 2 片"],["tamago","溏心蛋 半隻"],["negi","蔥、紫菜 適量"]],howto:["湯底：雞湯加蒜蓉煮滾，熄火。","碗底先落豉油同味醂（呢個叫「タレ」）。","另一煲大滾水烚麵，跟包裝時間（通常 1–2 分鐘）。","熱湯沖入碗攪勻，麵瀝乾放入碗。","鋪叉燒、半隻溏心蛋（滾水 6.5 分鐘再浸冰水）、蔥同紫菜。"],steps:[{type:"pick",need:["men","chashu","tamago","negi"],decoys:["tofu","umeboshi","satou"],jp:"材料{ざいりょう}を 選{えら}んでにゃ",yue:"揀材料喵",tip:"拉麵嘅配料叫「トッピング」。"},{type:"hold",zone:[.6,.85],anim:"stir",verb:"yuderu",add:["ramen_boil"],jp:"麺{めん}を ゆでて",yue:"烚麵",tip:"水要大滾！"},{type:"stir",turns:2,anim:"stir",verb:"mazeru",jp:"スープを 混{ま}ぜて",yue:"攪勻湯",tip:"湯同タレ要撈勻。"},{type:"timing",rounds:2,zone:.18,anim:"chop",verb:"noseru",jp:"トッピングを のせて",yue:"放配料",tip:"靚唔靚就睇呢步！"}]}];Tn.push(...qh);const eh=[{id:"tempura",emoji:"🍤",jp:"天{てん}ぷら",yue:"天婦羅"},{id:"sushi",emoji:"🍣",jp:"お寿司{すし}",yue:"壽司"},{id:"curry",emoji:"🍛",jp:"カレーライス",yue:"咖喱飯"},{id:"gyoza",emoji:"🥟",jp:"餃子{ぎょうざ}",yue:"餃子"},{id:"tamagoyaki",emoji:"🍳",jp:"卵焼{たまごや}き",yue:"玉子燒"}];function $_(i){return Tn.find(t=>t.id===i)}const K_=[{jp:"{dish}を ください",yue:"唔該畀{dishYue}我"},{jp:"{dish}を お願{ねが}いします",yue:"麻煩你，{dishYue}"},{jp:"すみません、{dish}を ください",yue:"唔好意思，我要{dishYue}"}],J_=[{jp:"{dish}を {num} ください",yue:"唔該{numYue}{dishYue}"},{jp:"{dish}、{num} お願{ねが}いします",yue:"{dishYue}，{numYue}，唔該"}],Tr={great:[{jp:"おいしい！",yue:"好好食！"},{jp:"すごく おいしいです！",yue:"超好食！"},{jp:"最高{さいこう}！",yue:"一流！"}],ok:[{jp:"うん、おいしいです",yue:"嗯，幾好食"},{jp:"ありがとう",yue:"多謝"}],wrong:[{jp:"あれ？ これじゃないです",yue:"咦？唔係呢個喎"}],bye:[{jp:"ごちそうさまでした！",yue:"多謝款待！"},{jp:"また 来{き}ます！",yue:"我會再嚟！"}]},$e={wake:{jp:"ふわぁ… おはようにゃ！",yue:"呵～早晨喵！"},intro:{jp:"ぼくは クロ。この 店{みせ}の シェフにゃ",yue:"我叫小黑（クロ），係呢間店嘅廚師喵"},irasshai:{jp:"いらっしゃいませ！",yue:"歡迎光臨！"},done:{jp:"できたにゃ！",yue:"整好喇喵！"},purr:{jp:"ごろごろ…",yue:"（呼嚕呼嚕⋯）"},levelup:{jp:"レベルアップにゃ！",yue:"升級喇喵！"},newRecipe:{jp:"新{あたら}しい レシピにゃ！",yue:"新食譜喵！"}},$a={oishii:{jp:"この 店{みせ}、おいしいですね",yue:"呢間店好好食喎",key:"oishii"},atsui:{jp:"わあ、熱{あつ}い！",yue:"嘩，好熱！",key:"atsui"},oomori:{jp:"大盛{おおも}りで お願{ねが}いします",yue:"大份唔該",key:"oomori"},matta:{jp:"また 来{き}ますね",yue:"我會再嚟㗎",key:"matta"},oishikatta:{jp:"美味{おい}しかったです",yue:"好好食呀",key:"oishikatta"},arigatou:{jp:"ありがとうございます",yue:"多謝",key:"arigatou"},sumimasen:{jp:"すみません！",yue:"唔好意思！",key:"sumimasen"},okaikei:{jp:"お会計{かいけい}、お願{ねが}いします",yue:"唔該埋單",key:"okaikei"}},Z_={people:[{n:1,key:"hitori",jp:"一人{ひとり}です",yue:"一位"},{n:2,key:"futari",jp:"二人{ふたり}です",yue:"兩位"},{n:3,key:"sannin",jp:"三人{さんにん}です",yue:"三位"}],foods:["onigiri","misoshiru","oyakodon","ramen"],drinks:["ocha","omizu","biiru"],prices:{onigiri:200,misoshiru:150,oyakodon:850,ramen:900,ocha:0,omizu:0,biiru:500},staff:{welcome:{jp:"いらっしゃいませ！ 何名様{なんめいさま}ですか？",yue:"歡迎光臨！請問幾位？"},seat:{jp:"こちらへ どうぞ",yue:"呢邊請"},order:{jp:"ご注文{ちゅうもん}は お決{き}まりですか？",yue:"決定好叫咩未？"},drink:{jp:"お飲{の}み物{もの}は いかがですか？",yue:"想飲啲咩？"},confirm:{jp:"以上{いじょう}で よろしいですか？",yue:"就咁多？"},wait:{jp:"少々{しょうしょう} お待{ま}ちください",yue:"請稍等"},serve:{jp:"お待{ま}たせしました！",yue:"久等喇！"},pay:{jp:"ありがとうございます。{price}円{えん}です",yue:"多謝，{price} 円"},bye:{jp:"ありがとうございました！ また お越{こ}しください",yue:"多謝晒！歡迎再嚟"}},you:{order:{jp:"{food}を {num} ください",yue:"唔該畀{numYue}{foodYue}我"},drink:{jp:"{drink}を {num} お願{ねが}いします",yue:"{numYue}{drinkYue}，唔該"},yes:{jp:"はい、お願{ねが}いします",yue:"係，唔該"},itadakimasu:{jp:"いただきます！",yue:"開動！（食之前）"},gochisou:{jp:"ごちそうさまでした",yue:"多謝款待（食完）"},kaikei:{jp:"すみません、お会計{かいけい} お願{ねが}いします",yue:"唔好意思，唔該埋單"},wrongGreet:{jp:"おやすみなさい",yue:"晚安（瞓覺前講）"},wrongEat:{jp:"さようなら",yue:"再見（好正式／長時間唔見）"},wrongPay:{jp:"おかわり ください",yue:"唔該再嚟一碗"},no:{jp:"いいえ、大丈夫{だいじょうぶ}です",yue:"唔使喇，冇問題"}}},Q_=[{id:"hat_chef",slot:"hat",price:0,emoji:"👨‍🍳",jp:"コック帽{ぼう}",yue:"廚師帽"},{id:"hat_hachimaki",slot:"hat",price:80,emoji:"🎌",jp:"はちまき",yue:"頭巾（打氣用）"},{id:"hat_straw",slot:"hat",price:180,emoji:"👒",jp:"麦{むぎ}わら帽子{ぼうし}",yue:"草帽"},{id:"neck_bell",slot:"neck",price:60,emoji:"🔔",jp:"鈴{すず}",yue:"鈴鐺"},{id:"neck_scarf",slot:"neck",price:120,emoji:"🧣",jp:"スカーフ",yue:"頸巾"},{id:"deco_lantern",slot:"deco",price:100,emoji:"🏮",jp:"提灯{ちょうちん}",yue:"燈籠"},{id:"deco_noren",slot:"deco",price:150,emoji:"🎏",jp:"のれん",yue:"門簾"},{id:"deco_bonsai",slot:"deco",price:220,emoji:"🪴",jp:"盆栽{ぼんさい}",yue:"盆栽"},{id:"deco_maneki",slot:"deco",price:350,emoji:"🐱",jp:"招{まね}き猫{ねこ}",yue:"招財貓（客人多啲）"}],Jo=[{id:"usagi",jp:"うさぎさん",yue:"兔仔",color:16447216,ear:"long",weight:10,tip:1},{id:"kuma",jp:"くまさん",yue:"熊仔",color:9067067,ear:"round",weight:10,tip:1},{id:"kitsune",jp:"きつねさん",yue:"狐狸",color:15041082,ear:"pointy",weight:8,tip:1.2},{id:"tanuki",jp:"たぬきさん",yue:"狸貓",color:8088152,ear:"round",mask:!0,weight:6,tip:1.3},{id:"shiba",jp:"柴犬{しばいぬ}さん",yue:"柴犬",color:14260814,ear:"pointy",weight:4,tip:1.6,rare:!0},{id:"maneki",jp:"招{まね}き猫{ねこ}さま",yue:"招財貓大人",color:16777215,ear:"pointy",weight:1,tip:5,rare:!0,legend:!0}];function qs(i){const t=i.verb?me(i.verb):null;return D("div",{class:"mg-head"},Pi(i.jp,{yue:i.yue,voice:"cat"}),t?D("div",{class:"verb-chip"},An(t)," 新字 ",D("span",{class:"jp-inline",html:t.jp.replace(/([一-鿿]+)\{([^}]+)\}/g,"<ruby>$1<rt>$2</rt></ruby>")}),` = ${t.yue}`):null)}async function tv(i,t){let e=0;const n=ni([...i.need,...i.decoys]),s=D("div",{class:"ing-grid"}),r=D("div",{class:"pick-prompt"},D("div",{class:"pick-label"},"🐾 聽小黑講…"));n.forEach(a=>{const o=me(a),c=D("button",{class:"ing"},D("span",{class:"emo"},An(o)),D("span",{class:"ing-yue"},o.yue.replace(/（.*?）/g,"")));c.dataset.id=a,s.append(c)}),Xn(qs(i),r,s),await Ue(i.jp,"cat");for(let a=0;a<i.need.length;a++){const o=i.need[a],c=me(o);ss(o),r.innerHTML="",s.dataset.want=o,r.append(D("div",{class:"pick-label"},`請攞（${a+1}/${i.need.length}）：`),Pi(c.jp,{voice:"word",size:"big"})),Ue(c.jp,"word");let l=!1;await new Promise(h=>{const u=d=>{const f=d.target.closest(".ing");if(!(!f||f.classList.contains("used")))if(f.dataset.id===o)Tt("good"),f.classList.add("used","ok"),t.placeIngredient(o,a,i.need.length),sn(o,!l),s.removeEventListener("click",u),h();else{Tt("bad"),e++,l=!0,f.classList.remove("shake"),f.offsetWidth,f.classList.add("shake");const g=me(f.dataset.id);yn(`呢個係「${g.yue}」，日文叫 ${g.jp.replace(/\{.*?\}/g,"")}`),Ue(g.jp,"word")}};s.addEventListener("click",u)}),await Ne(250)}return Math.max(.3,1-e*.2)}async function ev(i,t){var h;const e=i.rounds||3,n=D("div",{class:"tbar"}),s=D("div",{class:"tzone"}),r=D("div",{class:"tsweet"}),a=D("div",{class:"tneedle"});s.append(r),n.append(s,a);const o=D("div",{class:"mg-count"}),c=D("button",{class:"btn primary big tapzone"},i.anim==="chop"?"🔪 切！":"👆 撳！");Xn(qs(i),o,n,c),Ue(i.jp,"cat"),t.catFace("board"),i.anim==="chop"&&t.cat.holding("knife");let l=0;for(let u=0;u<e;u++){o.textContent=`${u+1} / ${e}`;const d=i.zone*(1-u*.12),f=.15+Math.random()*(.7-d);s.style.left=f*100+"%",s.style.width=d*100+"%";const g=.9+u*.25+Ct().level*.03;let v=0,m=1,p=performance.now(),E;const y=A=>{const L=(A-p)/1e3;p=A,v+=m*g*L,v>1&&(v=1,m=-1),v<0&&(v=0,m=1),a.style.left=v*100+"%",E=requestAnimationFrame(y)};E=requestAnimationFrame(y),await new Promise(A=>{c.onclick=A}),cancelAnimationFrame(E),t.cat.play(i.anim||"chop",.25),Tt(i.anim==="chop"?"chop":"pop");const M=f+d/2,P=Math.abs(v-M);let R;P<d*.17?(R=1,an("PERFECT!","perfect"),Tt("perfect")):P<d/2?(R=.7,an("GOOD","good"),Tt("good")):(R=.2,an("MISS","miss")),l+=R,u===0&&i.anim==="chop"&&t.workItems.children.length&&t.showProp((h=i.add)==null?void 0:h[0]),await Ne(380)}return t.cat.holding(null),i.add&&i.anim!=="chop"&&t.showProp(i.add[0]),l/e}async function nv(i,t){const e=i.taps||10,n=i.time||5;let s=0;const r=D("div",{class:"ring"},D("div",{class:"ring-in"},wi("verb_nigiru"))),a=D("div",{class:"mg-timer"},D("i"));Xn(qs(i),a,r),Ue(i.jp,"cat"),t.catFace("board");let o=!1,c=!1,l=0;const h=await new Promise(u=>{let d;const f=()=>{const g=(performance.now()-l)/1e3;if(a.firstChild.style.width=Math.max(0,1-g/n)*100+"%",g>=n&&!c){c=!0,u(s/e);return}d=requestAnimationFrame(f)};r.addEventListener("pointerdown",g=>{if(g.preventDefault(),!c&&(o||(o=!0,l=performance.now(),d=requestAnimationFrame(f)),s++,Tt("pop"),t.cat.play(i.anim||"press",.18),r.style.setProperty("--p",Math.min(1,s/e)),r.classList.remove("hit"),r.offsetWidth,r.classList.add("hit"),s>=e)){c=!0,cancelAnimationFrame(d);const v=n-(performance.now()-l)/1e3;u(v>n*.4?1:.85)}})});return i.add&&t.showProp(i.add[0]),h>=1?(an("PERFECT!","perfect"),Tt("perfect")):h>=.7?(an("GOOD","good"),Tt("good")):an("OK","miss"),await Ne(450),Math.max(.3,Math.min(1,h))}async function iv(i,t){const e=i.turns||3,n=D("div",{class:"stirpad"},D("div",{class:"stir-dot"}),D("div",{class:"stir-label"},"🥄 手指轉圈")),s=D("div",{class:"mg-timer prog"},D("i"));Xn(qs(i),s,n),Ue(i.jp,"cat"),t.catFace("stove"),t.cat.holding("ladle"),t.heat(!0),i.add&&t.showProp(i.add[0]);let r=0,a=null,o=null,c=0;const l=await new Promise(h=>{const u=d=>{const f=n.getBoundingClientRect(),g=d.clientX-(f.left+f.width/2),v=d.clientY-(f.top+f.height/2);if(Math.hypot(g,v)<15)return;const m=Math.atan2(v,g);if(n.querySelector(".stir-dot").style.transform=`rotate(${m}rad) translateX(${f.width*.36}px)`,a!==null){let E=m-a;E>Math.PI&&(E-=Math.PI*2),E<-Math.PI&&(E+=Math.PI*2),r+=Math.abs(E),o||(o=performance.now()),t.cat.setMode("stir");const y=Math.floor(r/(Math.PI/2));y>c&&(c=y,Tt("bubble"))}a=m;const p=r/(e*Math.PI*2);if(s.firstChild.style.width=Math.min(1,p)*100+"%",p>=1){n.removeEventListener("pointermove",u);const E=(performance.now()-o)/1e3;h(E<e*1.4?1:E<e*2.5?.8:.6)}};n.addEventListener("pointerdown",d=>{try{n.setPointerCapture(d.pointerId)}catch{}a=null}),n.addEventListener("pointermove",d=>{(d.buttons||d.pointerType==="touch")&&u(d)}),n.addEventListener("pointerup",()=>{a=null,t.cat.setMode("idle")})});return t.cat.setMode("idle"),t.cat.holding(null),t.heat(!1),l>=1?(an("PERFECT!","perfect"),Tt("perfect")):(an("GOOD","good"),Tt("good")),await Ne(450),l}async function sv(i,t){const[e,n]=i.zone,s=D("div",{class:"gauge"},D("div",{class:"gzone",style:`bottom:${e*100}%;height:${(n-e)*100}%`}),D("div",{class:"gfill"}),D("div",{class:"gtop"},"🔥 滾瀉")),r=D("button",{class:"btn primary big holdbtn"},"🔥 長按加熱"),a=D("div",{class:"hold-wrap"},s,r);Xn(qs(i),a),Ue(i.jp,"cat"),t.catFace("stove"),i.add&&t.showProp(i.add[0]);let o=0,c=!1,l=performance.now(),h,u=0;const d=s.querySelector(".gfill"),f=await new Promise(g=>{const v=p=>{const E=(p-l)/1e3;if(l=p,c&&(o+=E*(.32+o*.35),u+=E,u>.25&&(u=0,Tt(o>n?"boil":"bubble"))),d.style.height=Math.min(1,o)*100+"%",d.classList.toggle("hot",o>n),o>=1){m();return}h=requestAnimationFrame(v)},m=()=>{cancelAnimationFrame(h),t.heat(!1),t.cat.setMode("idle");const p=(e+n)/2;o>=e&&o<=n?g(Math.abs(o-p)<(n-e)*.2?1:.75):g(.3)};r.addEventListener("pointerdown",p=>{p.preventDefault();try{r.setPointerCapture(p.pointerId)}catch{}c||(c=!0,l=performance.now(),h=requestAnimationFrame(v),t.heat(!0),t.cat.holding(i.anim==="pour"?null:"ladle"),t.cat.setMode(i.anim==="pour"?"idle":"stir"),i.anim==="pour"&&t.cat.play("pour",.8))}),r.addEventListener("pointerup",()=>{c&&(c=!1,m())}),r.addEventListener("pointercancel",()=>{c&&(c=!1,m())})});return t.cat.holding(null),f>=1?(an("PERFECT!","perfect"),Tt("perfect")):f>=.7?(an("GOOD","good"),Tt("good")):(an(o>=1?"滾瀉！":"未夠熱","miss"),Tt("bad"),yn(i.tip,3e3)),await Ne(500),f}const rv={pick:tv,timing:ev,mash:nv,stir:iv,hold:sv},Ds=["hitotsu","futatsu","mittsu"];function kn(i,t){let e=i.jp,n=i.yue;for(const[s,r]of Object.entries(t))typeof r=="string"&&En[r]?(e=e.replaceAll(`{${s}}`,En[r].jp),n=n.replaceAll(`{${s}Yue}`,En[r].yue.replace(/（.*?）/g,""))):(e=e.replaceAll(`{${s}}`,String(r)),n=n.replaceAll(`{${s}}`,String(r)));return{jp:e,yue:n}}const av={cat:{id:8,name:"春日部つむぎ"},word:{id:14,name:"冥鳴ひまり"},usagi:{id:10,name:"雨晴はう"},kuma:{id:11,name:"玄野武宏"},kitsune:{id:2,name:"四国めたん"},tanuki:{id:12,name:"白上虎太郎"},shiba:{id:13,name:"青山龍星"},maneki:{id:20,name:"もち子さん"}};function zs(i){const t=Ct();return i.unlock.level?t.level>=i.unlock.level:i.unlock.day?t.daysPlayed>=i.unlock.day:!0}function cu(i){if(i.unlock.level)return`Lv.${i.unlock.level} 解鎖`;if(i.unlock.day){const t=I_(),e=Math.floor(t/36e5),n=Math.floor(t%36e5/6e4);return Ct().daysPlayed+1>=i.unlock.day?`聽日解鎖（仲有 ${e}:${String(n).padStart(2,"0")}）`:`第 ${i.unlock.day} 日解鎖`}return""}const lu=i=>"★".repeat(i)+"☆".repeat(3-i);function hu(i,{onStart:t=null}={}){const e=me(i.dish),n=D("div",{class:"recipe"},D("div",{class:"recipe-hero"},D("div",{class:"big-emo"},An(e)),Pi(e.jp,{yue:e.yue,voice:"word",size:"big",autoplay:!0})),D("div",{class:"recipe-meta"},`🍽️ ${i.serves}　⏱️ ${i.time}　${Ct().stars[i.id]?lu(Ct().stars[i.id]):""}`),D("h3",{},"材料"),D("ul",{class:"ing-list"},i.ingredients.map(([a,o])=>{const c=me(a);return D("li",{},D("button",{class:"mini-spk",onclick:()=>Ue(c.jp,"word")},"🔊"),D("span",{class:"emo"},An(c)),D("span",{class:"jp-inline",html:wn(c.jp)}),D("span",{class:"amt"},o))})),D("h3",{},"做法（真係煮得㗎！）"),D("ol",{class:"howto"},i.howto.map(a=>D("li",{},a)))),s=t?D("button",{class:"btn primary big",onclick:()=>{Tt("tap"),r.close()}},"🔥 開始煮！"):null,r=ms("📖 食譜",n,{onClose:t,wide:!0,footer:s});return r}function uu(i="recipes"){const t=D("div",{class:"tabs"}),e=D("div",{class:"tab-content"}),n={recipes:"🍳 食譜",words:"📝 單詞",stats:"📊 紀錄"},s=r=>{if(t.querySelectorAll("button").forEach(a=>a.classList.toggle("on",a.dataset.t===r)),e.innerHTML="",r==="recipes"){const a=D("div",{class:"book-grid"});Tn.forEach(l=>{const h=me(l.dish),u=zs(l),d=D("div",{class:`book-card ${u?"":"locked"}`},D("div",{class:"big-emo"},u?An(h):"🔒"),D("div",{class:"jp-inline",html:u?wn(h.jp):"？？？"}),D("div",{class:"sub"},Nr.find(f=>f.id===(l.chapter||"home")).name),D("div",{class:"sub"},u?Ct().stars[l.id]?lu(Ct().stars[l.id]):"未煮過":cu(l)));u&&(d.onclick=()=>{Tt("tap"),hu(l)}),a.append(d)}),eh.forEach(l=>a.append(D("div",{class:"book-card locked soon"},D("div",{class:"big-emo sil"},wi(`dish_${l.id}`,l.yue)),D("div",{class:"jp-inline",html:wn(l.jp)}),D("div",{class:"sub"},"即將推出"))));const o=Tn.length+eh.length,c=Tn.filter(zs).length;e.append(D("div",{class:"progress-line"},`收集 ${c} / ${o}`,D("div",{class:"bar"},D("i",{style:`width:${c/o*100}%`}))),a)}else if(r==="words"){const a=D("div",{class:"word-list"}),o=Object.keys(Ct().srs);o.length||a.append(D("p",{class:"muted"},"未學到字，去煮嘢先啦！")),o.sort((c,l)=>Ct().srs[l].box-Ct().srs[c].box).forEach(c=>{if(!En[c])return;const l=me(c),h=Ct().srs[c],u=["🌱","🌱","🌿","🌿","🌳","🌸"][h.box];a.append(D("div",{class:"word-row",onclick:()=>Ue(l.jp,"word")},D("span",{class:"emo"},An(l)),D("span",{class:"jp-inline",html:wn(l.jp)}),D("span",{class:"yue"},l.yue),D("span",{class:"lvl",title:"熟練度"},u)))}),e.append(D("div",{class:"progress-line"},`識咗 ${$o()} 個 · 見過 ${N_()} 個　（🌱→🌸 越溫越熟）`),a)}else{const a=Ct(),o=[["🔥 連續日數",`${a.streak} 日`],["📅 玩咗",`${a.daysPlayed} 日`],["🐾 招呼客人",`${a.served} 位`],["🏮 去餐廳",`${a.restaurantDone} 次`],["📝 識咗單詞",`${$o()} 個`],["💕 小黑好感度",`${a.affection}`]];e.append(D("div",{class:"stats"},o.map(([c,l])=>D("div",{class:"stat"},D("span",{},c),D("b",{},l)))))}};for(const[r,a]of Object.entries(n))t.append(D("button",{"data-t":r,onclick:()=>{Tt("tap"),s(r)}},a));s(i),ms("📚 圖鑑",D("div",{},t,e),{wide:!0})}function bc(i){const t=D("div",{class:"shop-grid"}),e=D("div",{class:"shop-coins"}),n=()=>{const s=Ct();e.replaceChildren(wi("ui_coin"),D("b",{},s.coins)),t.innerHTML="",Q_.forEach(r=>{const a=s.owned.includes(r.id)||s.deco.includes(r.id),o=r.slot==="deco"?s.deco.includes(r.id):s.wear[r.slot]===r.id;let c;a?r.slot==="deco"?c=D("button",{class:"btn ghost"},"✔ 已擺"):(c=D("button",{class:`btn ${o?"ghost":""}`},o?"除低":"著上"),c.onclick=()=>{Tt("tap"),s.wear[r.slot]=o?(r.slot==="hat",null):r.id,Xe(),Zo(i),n(),i.cat.happy()}):(c=D("button",{class:`btn ${s.coins>=r.price?"primary":"disabled"}`},`🪙 ${r.price}`),c.onclick=()=>{if(s.coins<r.price){Tt("bad"),ai("金幣唔夠，再招呼多啲客人啦！");return}s.coins-=r.price,Tt("coin"),Tt("perfect"),r.slot==="deco"?s.deco.push(r.id):(s.owned.push(r.id),s.wear[r.slot]=r.id),Xe(),Zo(i),Li(),n(),Ue(r.jp,"word"),ai(`買咗 ${r.yue}！`)}),t.append(D("div",{class:`shop-item ${o?"worn":""}`},D("div",{class:"big-emo"},wi(`shop_${r.id}`,r.yue)),D("div",{class:"jp-inline",html:wn(r.jp),onclick:()=>Ue(r.jp,"word")}),D("div",{class:"sub"},r.yue),c))})};n(),i.setView("kitchen"),ms("🛍️ 商店",D("div",{},e,t),{wide:!0})}function Zo(i){const t=Ct();i.cat.wear(t.wear),i.setDeco(t.deco)}function ov(i){const t=Ct().settings,e=(a,o,c)=>{const l=D("input",{type:"checkbox"});return l.checked=!!t[o],l.onchange=()=>{t[o]=l.checked,Xe(),Sc(),o==="bgm"&&ru(l.checked),o==="shake"&&(i.shakeOn=l.checked),Tt("tap")},D("label",{class:"set-row"},D("div",{},D("b",{},a),D("div",{class:"sub"},c)),l)},n=D("input",{type:"checkbox"});n.checked=t.subs==="tap",n.onchange=()=>{t.subs=n.checked?"tap":"show",Xe(),Tt("tap")};const s=Object.values(av).map(a=>`VOICEVOX:${a.name}`).filter((a,o,c)=>c.indexOf(a)===o).join("、"),r=D("div",{class:"settings"},e("振假名 ふりがな","furigana","漢字上面顯示讀音"),e("羅馬字 Romaji","romaji","例：onigiri"),e("廣東話翻譯","yue","每句下面顯示意思"),D("label",{class:"set-row"},D("div",{},D("b",{},"🎧 聽力挑戰"),D("div",{class:"sub"},"客人落單嘅字幕要撳先見，答啱有雙倍貼士")),n),e("背景音樂","bgm",""),e("音效","sfx",""),e("畫面震動","shake","切菜、答錯、升級時鏡頭輕震"),D("p",{class:"credits"},`🎙️ 語音：${s}`),D("button",{class:"btn danger",onclick:()=>{confirm("真係要清除全部進度？")&&(P_(),location.reload())}},"清除進度"));ms("⚙️ 設定",r)}function cv(i,{onNext:t,onRest:e,onShop:n,firstShift:s}){const r=Ct(),o=Tn.filter(l=>!zs(l))[0],c=D("div",{class:"summary"},D("div",{class:"sum-big"},"🎉"),Pi("お疲{つか}れ様{さま}でした！",{yue:"辛苦晒！（收工講）",voice:"cat"}),D("div",{class:"sum-grid"},D("div",{},D("b",{},i.served),D("span",{},"位客人")),D("div",{},D("b",{},`+${i.coins}`),D("span",{},"🪙 金幣")),D("div",{},D("b",{},i.perfect),D("span",{},"⭐ 三星")),D("div",{},D("b",{},`${$o()}`),D("span",{},"📝 識咗字"))),D("div",{class:"streak-row"},...Array.from({length:7},(l,h)=>D("div",{class:`sd ${h<Math.min(r.streak,7)?"on":""}`},h<Math.min(r.streak,7)?"🔥":h+1)),D("div",{class:"sub"},`連續 ${r.streak} 日！聽日返嚟，禮物會再大啲`)),o?D("div",{class:"teaser"},D("span",{class:"big-emo"},wi("ui_lock"),An(me(o.dish))),D("div",{},D("b",{html:wn(me(o.dish).jp)}),D("div",{class:"sub"},cu(o)))):null,D("div",{class:"sum-btns"},e?D("button",{class:`btn primary big ${s?"pulse":""}`,onclick:()=>{kr(),e()}},"🏮 同小黑去日本餐廳食飯"):null,D("button",{class:"btn big",onclick:()=>{kr(),t()}},"🏠 返大堂／揀章節"),D("button",{class:"btn",onclick:()=>{kr(),n()}},"🛍️ 商店")));ms("收工！",c),Ue("お疲{つか}れ様{さま}でした！","cat")}qr(document.body);Zt("#start").style.setProperty("--title-bg",`url("${Br("title_bg")}")`);const rt=new S_(Zt("#c"));let Qr=!1;rt.shakeOn=Ct().settings.shake!==!1;const Ka={chop:()=>{rt.shake(.18),rt.cat.squash(-.08)},press:()=>rt.shake(.15),bad:()=>{rt.shake(.4),rt.cat.squash(-.12)},good:()=>rt.cat.squash(.08),perfect:()=>{rt.shake(.25),rt.cat.squash(.14)},level:()=>{rt.shake(.55),rt.cat.squash(.2)},rare:()=>rt.shake(.3),door:()=>rt.shake(.12),purr:()=>rt.cat.squash(-.1),coin:()=>{}};O_(i=>{var t;return(t=Ka[i])==null?void 0:t.call(Ka)});rt.onView=i=>q_(i==="cook"?"cook":i.startsWith("rest")?"rest":"kitchen");Sc();Li();Zo(rt);rt.cat.happyEyes=999;rt.setView("kitchen",!0);Ec();Zt("#start").addEventListener("click",async()=>{k_(),Tt("tap"),Zt("#start").classList.add("gone");const i=D_();Ct().started?await hv(i):await lv()},{once:!0});Zt("#btn-book").onclick=()=>{Tt("tap"),uu()};Zt("#btn-shop").onclick=()=>{if(Tt("tap"),Qr)return ai("做緊嘢，收工先買啦！");bc(rt)};Zt("#btn-set").onclick=()=>{Tt("tap"),ov(rt)};let nh=0;rt.onCatTap=()=>{if(!Ct().started)return;Tt("purr"),rt.hearts(),rt.cat.happyEyes=.8;const i=Ct();i.affection++,nh++,i.lastPet!==Bs()?(i.lastPet=Bs(),i.coins+=10,ai("小黑好開心！ 今日第一次掃 ❤️ +10🪙"),js(10),Li()):nh%5===0&&(Me(rt,"cat",$e.purr.jp,$e.purr.yue,"cat"),setTimeout(()=>Pe("cat"),2e3)),Xe()};async function lv(){await Ne(500),rt.cat.happyEyes=0,rt.cat.happy(),Tt("meow"),await Me(rt,"cat",$e.wake.jp,$e.wake.yue,"cat"),await Ne(300),await Me(rt,"cat",$e.intro.jp,$e.intro.yue,"cat");const i=await Ei([{label:"<b>🌱 零基礎</b><small>假名都未識</small>",value:0},{label:"<b>🌿 識少少</b><small>識假名、簡單字</small>",value:1},{label:"<b>🌳 N3 或以上</b><small>想練聽力同實用句子</small>",value:2}],{title:D("div",{class:"panel-title"},"你嘅日文程度係？（之後可以喺 ⚙️ 改）")}),t=Ct().settings;Ct().jpLevel=i.value,i.value===0&&Object.assign(t,{furigana:!0,romaji:!0,yue:!0,subs:"show"}),i.value===1&&Object.assign(t,{furigana:!0,romaji:!1,yue:!0,subs:"show"}),i.value===2&&Object.assign(t,{furigana:!0,romaji:!1,yue:!1,subs:"tap"}),Sc(),Ct().started=!0,Ct().lastGift=Bs(),Xe(),Pe(),yn("撳 🔊 可以再聽；撳小黑可以掃佢 🐾",3500),au(!0),await pu({tutorial:!0})}async function hv(i){au(!0),rt.cat.happyEyes=0,rt.cat.happy(),Tt("meow");const t=Ct(),e=Tn.filter(n=>n.unlock.day&&n.unlock.day===t.daysPlayed&&i.newDay);Me(rt,"cat","おかえりにゃ！","你返嚟喇喵！","cat"),i.gift&&(await new Promise(n=>{ms("🎁 每日禮物",D("div",{class:"summary"},D("div",{class:"sum-big"},"🎁"),D("div",{class:"gift-amt"},`+${i.gift} 🪙`),D("div",{class:"streak-row"},...Array.from({length:7},(s,r)=>D("div",{class:`sd ${r<Math.min(t.streak,7)?"on":""}`},r<Math.min(t.streak,7)?"🔥":r+1))),D("div",{class:"sub"},i.streakBroken?"連續日數斷咗… 唔緊要，今日重新開始！":`連續 ${t.streak} 日！每日禮物越嚟越大（最多 7 日）`),D("button",{class:"btn primary big",onclick:()=>kr()},"收！")),{onClose:n})}),js(i.gift),Li());for(const n of e)await gu(n);Hs()}function du(){return Tn.filter(i=>(i.chapter||"home")===Ct().chapter&&zs(i))}function fu(){var t;const i=du();return(t=i[parseInt(Kh(Bs()),36)%i.length])==null?void 0:t.id}function Ec(){rt.setMenu(Tn.filter(i=>(i.chapter||"home")===Ct().chapter).map(i=>({name:En[i.dish].jp.replace(/\{.*?\}/g,""),price:i.price,locked:!zs(i)})))}function Hs(){Qr=!1,rt.setView("kitchen"),rt.catFace("front");const i=fu(),t=i?me($_(i).dish):null,e=Ct().shifts>=1;Ec();const n=Nr.find(s=>s.id===Ct().chapter)||Nr[0];Xn(D("div",{class:"chapter-tabs","aria-label":"選擇章節"},Nr.map(s=>D("button",{class:`btn ${s.id===n.id?"primary":""}`,"data-chapter":s.id,"aria-pressed":String(s.id===n.id),onclick:()=>{Ct().chapter=s.id,Xe(),Tt("tap"),Hs()}},`${s.icon} ${s.id==="home"?"食堂":s.id==="izakaya"?"居酒屋":"喫茶店"}`))),D("div",{class:"panel-title"},n.name),D("div",{class:"sub"},`${n.intro}　完成 ${Ct().chapterShifts[n.id]||0} 更`),t?D("div",{class:"special"},"🌟 今日特價：",D("span",{class:"jp-inline",html:wn(t.jp)})," 金幣 x2"):null,D("div",{class:"hub-btns"},D("button",{class:"btn primary big",onclick:()=>{Tt("tap"),pu({})}},"🏮 開舖"),D("button",{class:`btn big ${e?"":"disabled"}`,onclick:()=>{Tt("tap"),e?_u():ai("做完第一更先解鎖！")}},e?"🍱 去日本餐廳":"🔒 日本餐廳"),D("button",{class:"btn",onclick:()=>{Tt("tap"),uu()}},"📚 圖鑑"),D("button",{class:"btn",onclick:()=>{Tt("tap"),bc(rt)}},"🛍️ 商店")))}async function pu({tutorial:i=!1}={}){Qr=!0;const t=i?4:5,e={served:0,coins:0,perfect:0};let n=null;for(let r=0;r<t;r++){Zt("#shiftinfo").textContent=`客人 ${r+1} / ${t}`,Zt("#shiftinfo").classList.add("show");const a=await dv({index:r,tutorial:i,forceDish:n});if(n=null,e.served++,e.coins+=a.coins,a.stars===3&&e.perfect++,a.levelUps){const o=await mu();o&&(o.chapter||"home")===Ct().chapter&&(n=o.dish)}}Zt("#shiftinfo").classList.remove("show"),Ct().shifts++,Ct().chapterShifts[Ct().chapter]=(Ct().chapterShifts[Ct().chapter]||0)+1,Xe(),bi(),Pe(),rt.setView("kitchen"),rt.cat.happy(),Tt("level");const s=Ct().shifts===1;await new Promise(r=>cv(e,{firstShift:s,onNext:()=>r(()=>Hs()),onRest:()=>r(()=>_u()),onShop:()=>r(()=>{Hs(),bc(rt)})})).then(r=>r())}function uv(i,t){if(t&&i===0)return Jo[0];const e=Ct(),n=e.deco.includes("deco_maneki")?3:1,s=Jo.filter(o=>!o.legend||e.level>=2),r=s.map(o=>o.weight*(o.rare?n:1));let a=Math.random()*r.reduce((o,c)=>o+c,0);for(let o=0;o<s.length;o++)if(a-=r[o],a<=0)return s[o];return s[0]}async function dv({index:i,tutorial:t,forceDish:e}){var S;const n=Ct(),s=n.level,r=n.chapter==="cafe"?Jo[i%Va.length]:uv(i,t),a=r.id,o=du(),c=e||tu(o.map(F=>F.dish));let l=o.find(F=>F.dish===c)||o[0];const h=n.level>=2&&!t&&Math.random()<.45;let u=h?1+Math.floor(Math.random()*3):1;const d=h?kn(_n(J_),{dish:l.dish,num:Ds[u-1]}):kn(_n(K_),{dish:l.dish});B_(d.jp,a),bi(),rt.setView("kitchen"),rt.catFace("customer"),Tt("door"),await rt.customerIn(r),r.rare&&(Tt("rare"),ai(`✨ 稀有客人：${r.yue}！ 貼士 x${r.tip}`,2600,"rare")),rt.cat.play("wave",.8),await Me(rt,"cat",$e.irasshai.jp,$e.irasshai.yue,"cat"),Pe("cat");const f=n.settings.subs==="tap";let g=0,v=!1;for(t&&i===0&&yn("客人講緊要咩，聽完揀啱嘅菜！",3500);!v;){Me(rt,"cust",d.jp,d.yue,a,{hidden:f});const F=ni(o).map(X=>{const B=me(X.dish);return{value:X.dish,el:D("div",{class:"dish-opt"},D("span",{class:"emo"},An(B)),D("span",{class:"jp-inline",html:wn(B.jp)}))}}),O=await Ei(F,{title:D("div",{class:"panel-title"},"🐾 客人要咩？"),cols:Math.min(F.length,2)});let H=1;if(O.value===l.dish&&h&&(H=(await Ei(Ds.map((B,$)=>({value:$+1,el:D("div",{class:"dish-opt"},D("span",{class:"emo"},An(me(B))),D("span",{class:"jp-inline",html:wn(me(B).jp)}))})),{title:D("div",{class:"panel-title"},"要幾多個？"),cols:3})).value),O.value===l.dish&&H===u)v=!0,Tt("good"),sn(l.dish,g===0),h&&sn(Ds[u-1],g===0);else{g++,Tt("bad"),rt.cat.play("sad",.6);const X=_n(Tr.wrong);await Me(rt,"cust",X.jp,X.yue,a),yn(`佢講：「${d.yue}」— 再聽一次！`,3500),sn(l.dish,!1),await Ne(600)}}ss(l.dish),Pe("cust");const m=async(F,O,H,X,B,$)=>{let G=!0;for(ss(B);;){if(Me(rt,"cust",F,O,a,{hidden:f}),(await Ei(ni(H.map((pt,mt)=>({label:pt,value:mt}))),{title:D("div",{class:"panel-title"},$)})).value===X){sn(B,G),Tt("good"),Pe("cust");return}G=!1,sn(B,!1),Tt("bad"),yn(O,3e3)}};if(Ct().chapter==="izakaya"&&i%2===0)await m("すみません、もう 一{ひと}つ 追加{ついか}で。","唔該，再加一份。",["加一份","取消訂單","立即埋單"],0,"tsuika","客人想改張單？"),u++,ai(`加單成功：共 ${u} 份`);else if(Ct().chapter==="izakaya"){const F=o.find(H=>H.id!==l.id);await Me(rt,"cat","すみません、売{う}り切{き}れです。",`${me(l.dish).yue}沽清喇。`,"cat"),Pe("cat");const O=me(F.dish);await m(`${O.jp}を お願{ねが}いします。`,`咁要${O.yue}。`,[O.yue,me(l.dish).yue,"取消所有訂單"],0,"urikire","沽清後，客人改要邊款？"),l=F,ss(l.dish),sn(l.dish,!0)}let p=null,E=null;if(Ct().chapter==="cafe"&&["instant_coffee","black_tea","matcha_latte"].includes(l.id)){const F=Va[i%Va.length],O=Ct().regularVisits[F.id]||0,H=["hot","iced","less_sugar","no_sugar"],X=H.map($=>me($).yue);await m(F.jp,F.yue,X,H.indexOf(F.request),F.request,`${F.name} · ${O?`第 ${O+1} 次到訪`:"初次到訪"}：點樣調製？`),p=F.request,E=F.id;const B=me(p);l={...l,steps:[...l.steps,{type:"pick",need:[p],decoys:H.filter($=>$!==p),jp:`${B.jp}で 仕上{しあ}げて`,yue:`最後調整：${B.yue}`,tip:"記住熟客嘅要求。"}]}}n.cooked[l.id]||await new Promise(F=>hu(l,{onStart:F}));const y=await fv(l);p==="iced"&&((S=rt.dish)==null||S.add(g_())),E&&(n.regularVisits[E]=(n.regularVisits[E]||0)+1);const M=y>=.9?3:y>=.65?2:1;n.stars[l.id]=Math.max(n.stars[l.id]||0,M),n.cooked[l.id]=(n.cooked[l.id]||0)+1,rt.setView("serve"),rt.slideDishToCustomer(),await Ne(500);const P=_n(M===3?Tr.great:Tr.ok);rt.customerJump(),Me(rt,"cust",P.jp,P.yue,a);const R=fu()===l.id;let A=Math.round(l.price*u*(.6+.4*y)*r.tip*(R?2:1)/10);f&&g===0&&(A*=2);const L=10+M*5;Xn(D("div",{class:"sub"},`${me(l.dish).yue} × ${u}${p?` · ${me(p).yue}`:""}`),D("div",{class:"stars-big"},...[1,2,3].map(F=>D("span",{class:F<=M?"on":""},"★"))),D("div",{class:"reward"},`🪙 +${A}　✨ +${L} XP`,R?D("span",{class:"tag"},"特價 x2"):null,f&&g===0?D("span",{class:"tag"},"🎧 x2"):null)),[1,2,3].forEach(F=>F<=M&&setTimeout(()=>Tt("good"),F*180)),rt.coinsFromCustomer(),js(A,{x:innerWidth*.7,y:innerHeight*.35}),n.coins+=A,n.served++,Mc(L),Li(),await Ne(1600),rt.removeDish();let K=0;t&&i===0||(K=await pv(r,a));const _=_n(Tr.bye);return await Me(rt,"cust",_.jp,_.yue,a),Pe("cust"),rt.customerOut(),gv(),{coins:A+K,stars:M,levelUps:Ct().level-s}}async function fv(i){bi(),rt.setView("cook"),rt.useStation(i.station),rt.clearWork();const t=[];for(const n of i.steps){const s=await rv[n.type](n,rt);t.push(s),n.verb&&(ss(n.verb),sn(n.verb,s>=.7))}Y_();const e=t.reduce((n,s)=>n+s,0)/t.length;return rt.showDish(i.dish),rt.catFace("front"),rt.cat.happy(),Tt("perfect"),bi(),await Me(rt,"cat",$e.done.jp,$e.done.yue,"cat"),Pe("cat"),e}async function pv(i,t){const e=Object.keys($a),n=tu(e),s=$a[n],r=me(s.key);ss(s.key);const a=Ct().settings.subs==="tap";Me(rt,"cust",s.jp,"",t,{hidden:a});const o=ni(e.filter(u=>u!==n)).slice(0,2).map(u=>$a[u].yue),c=ni([{value:!0,label:s.yue},...o.map(u=>({value:!1,label:u}))]),l=await Ei(c,{title:D("div",{class:"panel-title"},"💬 客人講咩？（答啱有貼士）")});sn(s.key,l.value);let h=0;return l.value?(Tt("perfect"),l.button.classList.add("right"),h=15,Ct().coins+=h,Mc(5),js(h),Li(),an("+15 🪙","good")):(Tt("bad"),l.button.classList.add("wrong"),[...l.grid.children].forEach((u,d)=>{c[d].value&&u.classList.add("right")}),yn(`「${r.jp.replace(/\{.*?\}/g,"")}」= ${r.yue}。之後會再考你！`,3500)),await Ne(1300),Pe("cust"),h}async function mu(){const i=Ct();Tt("level"),rt.cat.happy(),an(`Lv.${i.level}!`,"level"),await Me(rt,"cat",$e.levelup.jp,$e.levelup.yue,"cat"),Pe("cat");const t=Tn.find(e=>e.unlock.level===i.level);return t&&await gu(t),t}async function gu(i){Ec();const t=me(i.dish);Tt("rare"),Me(rt,"cat",$e.newRecipe.jp,$e.newRecipe.yue,"cat"),await ou("好嘢！",D("div",{class:"unlock"},D("div",{class:"big-emo spin"},An(t)),D("div",{class:"panel-title"},"🔓 新食譜解鎖！"),Pi(t.jp,{yue:t.yue,voice:"word",size:"big",autoplay:!0}))),Pe("cat")}const mv=[[1,"🎊 第一位客人！"],[5,"🏅 招呼咗 5 位客人"],[10,"🏆 10 位客人！小黑好驕傲"],[25,"👑 25 位！你係人氣店"],[50,"🌸 50 位！傳說級食堂"]];function gv(){const i=Ct();for(const[t,e]of mv)i.served===t&&!i.achievements.includes("served"+t)&&(i.achievements.push("served"+t),ai(e,2600,"rare"),Tt("rare"),Xe())}async function _u(){Qr=!0,bi(),Pe();const i=Z_,t=_n(i.people),e=_n(i.foods),n=_n(i.drinks),s=Ds[t.n-1],r=(i.prices[e]+i.prices[n])*t.n;let a=0,o=0;await wr(()=>{rt.catTo("rest"),rt.setView("rest",!0)});const c=D("div",{class:"task"},`🎯 任務：你哋 ${t.n} 個人，每人想食 ${me(e).yue.replace(/（.*?）/g,"")}，飲 ${me(n).yue.replace(/（.*?）/g,"")}`);Zt("#taskbar").innerHTML="",Zt("#taskbar").append(c),Zt("#taskbar").classList.add("show"),yn("今次你做客人！小黑做店員 🐈‍⬛",3e3);const l=async(L,K,_,S)=>{L.jp?await Me(rt,"cat",L.jp,L.yue,"cat"):(Pe("cat"),yn(L.yue,2500)),o++;let F=!0;for(;;){const O=ni(K.map((X,B)=>({value:B,el:Pi(X.jp,{yue:X.yue,voice:"word"})}))),H=await Ei(O,{title:D("div",{class:"panel-title"},S)});if(H.value===_){Tt("good"),H.button.classList.add("right"),F&&a++,await Ue(K[_].jp,"word");return}Tt("bad"),H.button.classList.add("wrong"),F=!1,yn(`「${K[H.value].yue}」唔係最啱，再試吓！`,3e3),await Ne(900)}},h=i.people.map(L=>({jp:L.jp,yue:L.yue}));await l(i.staff.welcome,h,i.people.indexOf(t),"👥 你哋幾多位？"),sn(t.key,!0),await Me(rt,"cat",i.staff.seat.jp,i.staff.seat.yue,"cat");const u=_n(i.foods.filter(L=>L!==e)),d=_n(Ds.filter(L=>L!==s)),f=[kn(i.you.order,{food:e,num:s}),kn(i.you.order,{food:u,num:s}),kn(i.you.order,{food:e,num:d})];await l(i.staff.order,f,0,"🍽️ 點餐（記住人數！）");const g=_n(i.drinks.filter(L=>L!==n)),v=[kn(i.you.drink,{drink:n,num:s}),kn(i.you.drink,{drink:g,num:s}),kn(i.you.drink,{drink:n,num:d})];await l(i.staff.drink,v,0,"🥤 飲品"),await l(i.staff.confirm,[i.you.yes,i.you.wrongPay,i.you.wrongGreet],0,"✅ 就咁多？"),await Me(rt,"cat",i.staff.wait.jp,i.staff.wait.yue,"cat"),Pe(),bi(),await wr(()=>{rt.setView("restTable",!0),rt.restServe([e,n],t.n)}),await Me(rt,"cat",i.staff.serve.jp,i.staff.serve.yue,"cat"),await l({jp:null,yue:"（食之前講咩？）"},[i.you.itadakimasu,i.you.wrongEat,i.you.gochisou],0,"🙏 開動之前講咩？"),sn("itadakimasu",!0),bi(),Pe(),yn("😋 食緊… 好好味！",1800),await Ne(1800),await wr(()=>{rt.restClear(),rt.setView("rest",!0)}),await l({jp:null,yue:"（食完講咩？）"},[i.you.gochisou,i.you.itadakimasu,i.you.wrongGreet],0,"😊 食完講咩？"),sn("gochisousama",!0),await l({jp:null,yue:"（想埋單）"},[i.you.kaikei,i.you.wrongPay,i.you.no],0,"🧾 叫埋單"),sn("okaikei",!0);const m=kn(i.staff.pay,{price:r});await Me(rt,"cat",m.jp,"（聽吓幾錢？）","cat",{hidden:!0}),o++;const p=ni([r+100,Math.max(100,r-50),r+500,r*2].filter(L=>L!==r)).slice(0,2);let E=!0;for(;;){const L=await Ei(ni([r,...p]).map(K=>({value:K,label:`<b>${K}円</b>`})),{title:D("div",{class:"panel-title"},"💴 要畀幾錢？（撳泡泡可以睇字幕）"),cols:3});if(L.value===r){Tt("coin"),L.button.classList.add("right"),E&&a++;break}Tt("bad"),L.button.classList.add("wrong"),E=!1,Ue(m.jp,"cat"),await Ne(700)}await Me(rt,"cat",i.staff.bye.jp,i.staff.bye.yue,"cat");const y=a/o,M=40+Math.round(y*80),P=20+Math.round(y*20);Ct().restaurantDone++,Ct().coins+=M;const R=Mc(P);Xe(),Li(),Tt("level");const A=y===1?"💮":y>.7?"⭕":"🔺";await ou("返廚房 🏠",D("div",{class:"unlock"},D("div",{class:"big-emo spin"},A),D("div",{class:"panel-title"},`點餐成功！一次答啱 ${a} / ${o}`),D("div",{class:"reward"},`🪙 +${M}　✨ +${P} XP　🏮 旅遊印章 x${Ct().restaurantDone}`))),js(M),Pe(),Zt("#taskbar").classList.remove("show"),await wr(()=>{rt.catTo("kitchen"),rt.setView("kitchen",!0)}),R&&await mu(),Hs()}
