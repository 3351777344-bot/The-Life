(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},pr=[],Un=()=>{},_f=()=>!1,yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),bo=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wh=Object.prototype.hasOwnProperty,it=(n,e)=>wh.call(n,e),He=Array.isArray,mr=n=>ls(n)==="[object Map]",To=n=>ls(n)==="[object Set]",Tc=n=>ls(n)==="[object Date]",qe=n=>typeof n=="function",vt=n=>typeof n=="string",On=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",vf=n=>(at(n)||qe(n))&&qe(n.then)&&qe(n.catch),xf=Object.prototype.toString,ls=n=>xf.call(n),Rh=n=>ls(n).slice(8,-1),Sf=n=>ls(n)==="[object Object]",kl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ao=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Ch=/-\w/g,Sn=Ao(n=>n.replace(Ch,e=>e.slice(1).toUpperCase())),Ph=/\B([A-Z])/g,$i=Ao(n=>n.replace(Ph,"-$1").toLowerCase()),Mf=Ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yo=Ao(n=>n?`on${Mf(n)}`:""),Pn=(n,e)=>!Object.is(n,e),Zs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},wo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ac;const Ro=()=>Ac||(Ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xt(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?Ih(i):Xt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||at(n))return n}const Dh=/;(?![^(]*\))/g,Lh=/:([^]+)/,Uh=/\/\*[^]*?\*\//g;function Ih(n){const e={};return n.replace(Uh,"").split(Dh).forEach(t=>{if(t){const i=t.split(Lh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qt(n){let e="";if(vt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=qt(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fh=Hl(Nh);function yf(n){return!!n||n===""}function Oh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=cs(n[i],e[i]);return t}function cs(n,e){if(n===e)return!0;let t=Tc(n),i=Tc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=On(n),i=On(e),t||i)return n===e;if(t=He(n),i=He(e),t||i)return t&&i?Oh(n,e):!1;if(t=at(n),i=at(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!cs(n[o],e[o]))return!1}}return String(n)===String(e)}function Bh(n,e){return n.findIndex(t=>cs(t,e))}const bf=n=>!!(n&&n.__v_isRef===!0),je=n=>vt(n)?n:n==null?"":He(n)||at(n)&&(n.toString===xf||!qe(n.toString))?bf(n)?je(n.value):JSON.stringify(n,Tf,2):String(n),Tf=(n,e)=>bf(e)?Tf(n,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[jo(i,s)+" =>"]=r,t),{})}:To(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>jo(t))}:On(e)?jo(e):at(e)&&!He(e)&&!Sf(e)?String(e):e,jo=(n,e="")=>{var t;return On(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class zh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Lt;try{return Lt=this,e()}finally{Lt=t}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){if(this._on>0&&--this._on===0){if(Lt===this)Lt=this.prevScope;else{let e=Lt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hh(){return Lt}let ft;const Ko=new WeakSet;class Af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wc(this),Cf(this);const e=ft,t=Mn;ft=this,Mn=!0;try{return this.fn()}finally{Pf(this),ft=e,Mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let wf=0,Kr,Zr;function Rf(n,e=!1){if(n.flags|=8,e){n.next=Zr,Zr=n;return}n.next=Kr,Kr=n}function Gl(){wf++}function Wl(){if(--wf>0)return;if(Zr){let e=Zr;for(Zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Kr;){let e=Kr;for(Kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Xl(i),Vh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ba(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ns)||(n.globalVersion=ns,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ba(n))))return;n.flags|=2;const e=n.dep,t=ft,i=Mn;ft=n,Mn=!0;try{Cf(n);const r=n.fn(n._value);(e.version===0||Pn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,Mn=i,Pf(n),n.flags&=-3}}function Xl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Xl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Vh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mn=!0;const Lf=[];function ni(){Lf.push(Mn),Mn=!1}function ii(){const n=Lf.pop();Mn=n===void 0?!0:n}function wc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let ns=0;class kh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!Mn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new kh(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,Uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,ns++,this.notify(e)}notify(e){Gl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wl()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const za=new WeakMap,Vi=Symbol(""),Ha=Symbol(""),is=Symbol("");function Ut(n,e,t){if(Mn&&ft){let i=za.get(n);i||za.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ql),r.map=i,r.key=t),r.track()}}function Kn(n,e,t,i,r,s){const o=za.get(n);if(!o){ns++;return}const a=l=>{l&&l.trigger()};if(Gl(),e==="clear")o.forEach(a);else{const l=He(n),u=l&&kl(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===is||!On(h)&&h>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(is)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Vi)),mr(n)&&a(o.get(Ha)));break;case"delete":l||(a(o.get(Vi)),mr(n)&&a(o.get(Ha)));break;case"set":mr(n)&&a(o.get(Vi));break}}Wl()}function ji(n){const e=nt(n);return e===n?e:(Ut(e,"iterate",is),fn(n)?e:e.map(yn))}function Co(n){return Ut(n=nt(n),"iterate",is),n}function wn(n,e){return ri(n)?Er(ki(n)?yn(e):e):yn(e)}const Gh={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,n=>wn(this,n))},concat(...n){return ji(this).concat(...n.map(e=>He(e)?ji(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=wn(this,n[1]),n))},every(n,e){return Hn(this,"every",n,e,void 0,arguments)},filter(n,e){return Hn(this,"filter",n,e,t=>t.map(i=>wn(this,i)),arguments)},find(n,e){return Hn(this,"find",n,e,t=>wn(this,t),arguments)},findIndex(n,e){return Hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Hn(this,"findLast",n,e,t=>wn(this,t),arguments)},findLastIndex(n,e){return Hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return ji(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return Hn(this,"map",n,e,void 0,arguments)},pop(){return Fr(this,"pop")},push(...n){return Fr(this,"push",n)},reduce(n,...e){return Rc(this,"reduce",n,e)},reduceRight(n,...e){return Rc(this,"reduceRight",n,e)},shift(){return Fr(this,"shift")},some(n,e){return Hn(this,"some",n,e,void 0,arguments)},splice(...n){return Fr(this,"splice",n)},toReversed(){return ji(this).toReversed()},toSorted(n){return ji(this).toSorted(n)},toSpliced(...n){return ji(this).toSpliced(...n)},unshift(...n){return Fr(this,"unshift",n)},values(){return Zo(this,"values",n=>wn(this,n))}};function Zo(n,e,t){const i=Co(n),r=i[e]();return i!==n&&!fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Wh=Array.prototype;function Hn(n,e,t,i,r,s){const o=Co(n),a=o!==n&&!fn(n),l=o[e];if(l!==Wh[e]){const f=l.apply(n,s);return a?yn(f):f}let u=t;o!==n&&(a?u=function(f,h){return t.call(this,wn(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Rc(n,e,t,i){const r=Co(n),s=r!==n&&!fn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=wn(n,u)),t.call(this,u,wn(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?wn(n,l):l}function Jo(n,e,t){const i=nt(n);Ut(i,"iterate",is);const r=i[e](...t);return(r===-1||r===!1)&&Kl(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function Fr(n,e,t=[]){ni(),Gl();const i=nt(n)[e].apply(n,t);return Wl(),ii(),i}const Xh=Hl("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function qh(n){On(n)||(n=String(n));const e=nt(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class Nf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?np:zf:s?Bf:Of).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=Gh[t]))return l;if(t==="hasOwnProperty")return qh}const a=Reflect.get(e,t,Nt(e)?e:i);if((On(t)?If.has(t):Xh(t))||(r||Ut(e,"get",t),s))return a;if(Nt(a)){const l=o&&kl(t)?a:a.value;return r&&at(l)?ka(l):l}return at(a)?r?ka(a):Yl(a):a}}class Ff extends Nf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=He(e)&&kl(t);if(!this._isShallow){const u=ri(s);if(!fn(i)&&!ri(i)&&(s=nt(s),i=nt(i)),!o&&Nt(s)&&!Nt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:it(e,t),l=Reflect.set(e,t,i,Nt(e)?e:r);return e===nt(r)&&(a?Pn(i,s)&&Kn(e,"set",t,i):Kn(e,"add",t,i)),l}deleteProperty(e,t){const i=it(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!On(t)||!If.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",He(e)?"length":Vi),Reflect.ownKeys(e)}}class $h extends Nf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yh=new Ff,jh=new $h,Kh=new Ff(!0);const Va=n=>n,bs=n=>Reflect.getPrototypeOf(n);function Zh(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=mr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Va:e?Er:yn;return!e&&Ut(s,"iterate",l?Ha:Vi),Ft(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Ts(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Jh(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);n||(Pn(r,a)&&Ut(o,"get",r),Ut(o,"get",a));const{has:l}=bs(o),u=e?Va:n?Er:yn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(nt(r),"iterate",Vi),r.size},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return n||(Pn(r,a)&&Ut(o,"has",r),Ut(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=nt(a),u=e?Va:n?Er:yn;return!n&&Ut(l,"iterate",Vi),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Ft(t,n?{add:Ts("add"),set:Ts("set"),delete:Ts("delete"),clear:Ts("clear")}:{add(r){const s=nt(this),o=bs(s),a=nt(r),l=!e&&!fn(r)&&!ri(r)?a:r;return o.has.call(s,l)||Pn(r,l)&&o.has.call(s,r)||Pn(a,l)&&o.has.call(s,a)||(s.add(l),Kn(s,"add",l,l)),this},set(r,s){!e&&!fn(s)&&!ri(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=bs(o);let u=a.call(o,r);u||(r=nt(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Pn(s,c)&&Kn(o,"set",r,s):Kn(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=bs(s);let l=o.call(s,r);l||(r=nt(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Kn(s,"delete",r,void 0),u},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&Kn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zh(r,n,e)}),t}function $l(n,e){const t=Jh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(it(t,r)&&r in i?t:i,r,s)}const Qh={get:$l(!1,!1)},ep={get:$l(!1,!0)},tp={get:$l(!0,!1)};const Of=new WeakMap,Bf=new WeakMap,zf=new WeakMap,np=new WeakMap;function ip(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rp(n){return n.__v_skip||!Object.isExtensible(n)?0:ip(Rh(n))}function Yl(n){return ri(n)?n:jl(n,!1,Yh,Qh,Of)}function sp(n){return jl(n,!1,Kh,ep,Bf)}function ka(n){return jl(n,!0,jh,tp,zf)}function jl(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=rp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function ki(n){return ri(n)?ki(n.__v_raw):!!(n&&n.__v_isReactive)}function ri(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function op(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const yn=n=>at(n)?Yl(n):n,Er=n=>at(n)?ka(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function ht(n){return ap(n,!1)}function ap(n,e){return Nt(n)?n:new lp(n,e)}class lp{constructor(e,t){this.dep=new ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||fn(e)||ri(e);e=i?e:nt(e),Pn(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function cp(n){return Nt(n)?n.value:n}const up={get:(n,e,t)=>e==="__v_raw"?n:cp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nt(r)&&!Nt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Hf(n){return ki(n)?n:new Proxy(n,up)}class fp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Rf(this,!0),!0}get value(){const e=this.dep.track();return Df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dp(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new fp(i,r,t)}const As={},uo=new WeakMap;let Li;function hp(n,e=!1,t=Li){if(t){let i=uo.get(t);i||uo.set(t,i=[]),i.push(n)}}function pp(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=y=>r?y:fn(y)||r===!1||r===0?Zn(y,1):Zn(y);let c,f,h,g,_=!1,x=!1;if(Nt(n)?(f=()=>n.value,_=fn(n)):ki(n)?(f=()=>u(n),_=!0):He(n)?(x=!0,_=n.some(y=>ki(y)||fn(y)),f=()=>n.map(y=>{if(Nt(y))return y.value;if(ki(y))return u(y);if(qe(y))return l?l(y,2):y()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ni();try{h()}finally{ii()}}const y=Li;Li=c;try{return l?l(n,3,[g]):n(g)}finally{Li=y}}:f=Un,e&&r){const y=f,I=r===!0?1/0:r;f=()=>Zn(y(),I)}const p=Hh(),d=()=>{c.stop(),p&&p.active&&Vl(p.effects,c)};if(s&&e){const y=e;e=(...I)=>{y(...I),d()}}let C=x?new Array(n.length).fill(As):As;const A=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const I=c.run();if(r||_||(x?I.some((U,D)=>Pn(U,C[D])):Pn(I,C))){h&&h();const U=Li;Li=c;try{const D=[I,C===As?void 0:x&&C[0]===As?[]:C,g];C=I,l?l(e,3,D):e(...D)}finally{Li=U}}}else c.run()};return a&&a(A),c=new Af(f),c.scheduler=o?()=>o(A,!1):A,g=y=>hp(y,!1,c),h=c.onStop=()=>{const y=uo.get(c);if(y){if(l)l(y,4);else for(const I of y)I();uo.delete(c)}},e?i?A(!0):C=c.run():o?o(A.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Zn(n,e=1/0,t){if(e<=0||!at(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nt(n))Zn(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)Zn(n[i],e,t);else if(To(n)||mr(n))n.forEach(i=>{Zn(i,e,t)});else if(Sf(n)){for(const i in n)Zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function us(n,e,t,i){try{return i?n(...i):n()}catch(r){Po(r,e,t)}}function Bn(n,e,t,i){if(qe(n)){const r=us(n,e,t,i);return r&&vf(r)&&r.catch(s=>{Po(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Bn(n[s],e,t,i));return r}}function Po(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ni(),us(s,null,10,[n,l,u]),ii();return}}mp(n,t,r,i,o)}function mp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ht=[];let An=-1;const gr=[];let pi=null,fr=0;const Vf=Promise.resolve();let fo=null;function kf(n){const e=fo||Vf;return n?e.then(this?n.bind(this):n):e}function gp(n){let e=An+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,r=Ht[i],s=rs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Zl(n){if(!(n.flags&1)){const e=rs(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=rs(t)?Ht.push(n):Ht.splice(gp(e),0,n),n.flags|=1,Gf()}}function Gf(){fo||(fo=Vf.then(Xf))}function _p(n){He(n)?gr.push(...n):pi&&n.id===-1?pi.splice(fr+1,0,n):n.flags&1||(gr.push(n),n.flags|=1),Gf()}function Cc(n,e,t=An+1){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wf(n){if(gr.length){const e=[...new Set(gr)].sort((t,i)=>rs(t)-rs(i));if(gr.length=0,pi){pi.push(...e);return}for(pi=e,fr=0;fr<pi.length;fr++){const t=pi[fr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}pi=null,fr=0}}const rs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xf(n){try{for(An=0;An<Ht.length;An++){const e=Ht[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),us(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<Ht.length;An++){const e=Ht[An];e&&(e.flags&=-2)}An=-1,Ht.length=0,Wf(),fo=null,(Ht.length||gr.length)&&Xf()}}let un=null,qf=null;function ho(n){const e=un;return un=n,qf=n&&n.type.__scopeId||null,e}function vp(n,e=un,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Hc(-1);const s=ho(e);let o;try{o=n(...r)}finally{ho(s),i._d&&Hc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Et(n,e){if(un===null)return n;const t=Io(un),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=lt]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Zn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ni(),Bn(l,t,8,[n.el,a,n,e]),ii())}}function xp(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function Js(n,e,t=!1){const i=xm();if(i||_r){let r=_r?_r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Sp=Symbol.for("v-scx"),Mp=()=>Js(Sp);function Qo(n,e,t){return $f(n,e,t)}function $f(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ft({},t),l=e&&i||!e&&s!=="post";let u;if(os){if(s==="sync"){const g=Mp();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Un,g.resume=Un,g.pause=Un,g}}const c=Vt;a.call=(g,_,x)=>Bn(g,c,_,x);let f=!1;s==="post"?a.scheduler=g=>{Wt(g,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():Zl(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const h=pp(n,e,a);return os&&(u?u.push(h):l&&h()),h}function Ep(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?Yf(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=fs(this),a=$f(r,s.bind(i),t);return o(),a}function Yf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const yp=Symbol("_vte"),bp=n=>n.__isTeleport,Tp=Symbol("_leaveCb");function Jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Pc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const po=new WeakMap;function Jr(n,e,t,i,r=!1){if(He(n)){n.forEach((x,p)=>Jr(x,e&&(He(e)?e[p]:e),t,i,r));return}if(Qr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Jr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Io(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===lt?a.refs={}:a.refs,f=a.setupState,h=nt(f),g=f===lt?_f:x=>Pc(c,x)?!1:it(h,x),_=(x,p)=>!(p&&Pc(c,p));if(u!=null&&u!==l){if(Dc(e),vt(u))c[u]=null,g(u)&&(f[u]=null);else if(Nt(u)){const x=e;_(u,x.k)&&(u.value=null),x.k&&(c[x.k]=null)}}if(qe(l))us(l,a,12,[o,c]);else{const x=vt(l),p=Nt(l);if(x||p){const d=()=>{if(n.f){const C=x?g(l)?f[l]:c[l]:_()||!n.k?l.value:c[n.k];if(r)He(C)&&Vl(C,s);else if(He(C))C.includes(s)||C.push(s);else if(x)c[l]=[s],g(l)&&(f[l]=c[l]);else{const A=[s];_(l,n.k)&&(l.value=A),n.k&&(c[n.k]=A)}}else x?(c[l]=o,g(l)&&(f[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const C=()=>{d(),po.delete(n)};C.id=-1,po.set(n,C),Wt(C,t)}else Dc(n),d()}}}function Dc(n){const e=po.get(n);e&&(e.flags|=8,po.delete(n))}Ro().requestIdleCallback;Ro().cancelIdleCallback;const Qr=n=>!!n.type.__asyncLoader,Kf=n=>n.type.__isKeepAlive;function Ap(n,e){Zf(n,"a",e)}function wp(n,e){Zf(n,"da",e)}function Zf(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Do(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Kf(r.parent.vnode)&&Rp(i,e,t,r),r=r.parent}}function Rp(n,e,t,i){const r=Do(e,n,i,!0);Ql(()=>{Vl(i[e],r)},t)}function Do(n,e,t=Vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ni();const a=fs(t),l=Bn(e,t,n,o);return a(),ii(),l});return i?r.unshift(s):r.push(s),s}}const ai=n=>(e,t=Vt)=>{(!os||n==="sp")&&Do(n,(...i)=>e(...i),t)},Cp=ai("bm"),Jf=ai("m"),Pp=ai("bu"),Dp=ai("u"),Lp=ai("bum"),Ql=ai("um"),Up=ai("sp"),Ip=ai("rtg"),Np=ai("rtc");function Fp(n,e=Vt){Do("ec",n,e)}const Op=Symbol.for("v-ndc");function ws(n,e,t,i){let r;const s=t,o=He(n);if(o||vt(n)){const a=o&&ki(n);let l=!1,u=!1;a&&(l=!fn(n),u=ri(n),n=Co(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?Er(yn(n[c])):yn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(at(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Ga=n=>n?xd(n)?Io(n):Ga(n.parent):null,es=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ga(n.parent),$root:n=>Ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ed(n),$forceUpdate:n=>n.f||(n.f=()=>{Zl(n.update)}),$nextTick:n=>n.n||(n.n=kf.bind(n.proxy)),$watch:n=>Ep.bind(n)}),ea=(n,e)=>n!==lt&&!n.__isScriptSetup&&it(n,e),Bp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ea(i,e))return o[e]=1,i[e];if(r!==lt&&it(r,e))return o[e]=2,r[e];if(it(s,e))return o[e]=3,s[e];if(t!==lt&&it(t,e))return o[e]=4,t[e];Wa&&(o[e]=0)}}const u=es[e];let c,f;if(u)return e==="$attrs"&&Ut(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==lt&&it(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,it(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ea(r,e)?(r[e]=t,!0):i!==lt&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==lt&&a[0]!=="$"&&it(n,a)||ea(e,a)||it(s,a)||it(i,a)||it(es,a)||it(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Lc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wa=!0;function zp(n){const e=ed(n),t=n.proxy,i=n.ctx;Wa=!1,e.beforeCreate&&Uc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:x,deactivated:p,beforeDestroy:d,beforeUnmount:C,destroyed:A,unmounted:y,render:I,renderTracked:U,renderTriggered:D,errorCaptured:O,serverPrefetch:w,expose:T,inheritAttrs:N,components:ne,directives:j,filters:re}=e;if(u&&Hp(u,i,null),o)for(const te in o){const H=o[te];qe(H)&&(i[te]=H.bind(t))}if(r){const te=r.call(t,t);at(te)&&(n.data=Yl(te))}if(Wa=!0,s)for(const te in s){const H=s[te],ge=qe(H)?H.bind(t,t):qe(H.get)?H.get.bind(t,t):Un,Ee=!qe(H)&&qe(H.set)?H.set.bind(t):Un,Se=Tm({get:ge,set:Ee});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Pe=>Se.value=Pe})}if(a)for(const te in a)Qf(a[te],i,t,te);if(l){const te=qe(l)?l.call(t):l;Reflect.ownKeys(te).forEach(H=>{xp(H,te[H])})}c&&Uc(c,n,"c");function $(te,H){He(H)?H.forEach(ge=>te(ge.bind(t))):H&&te(H.bind(t))}if($(Cp,f),$(Jf,h),$(Pp,g),$(Dp,_),$(Ap,x),$(wp,p),$(Fp,O),$(Np,U),$(Ip,D),$(Lp,C),$(Ql,y),$(Up,w),He(T))if(T.length){const te=n.exposed||(n.exposed={});T.forEach(H=>{Object.defineProperty(te,H,{get:()=>t[H],set:ge=>t[H]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Un&&(n.render=I),N!=null&&(n.inheritAttrs=N),ne&&(n.components=ne),j&&(n.directives=j),w&&jf(n)}function Hp(n,e,t=Un){He(n)&&(n=Xa(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=Js(r.from||i,r.default,!0):s=Js(r.from||i):s=Js(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Uc(n,e,t){Bn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qf(n,e,t,i){let r=i.includes(".")?Yf(t,i):()=>t[i];if(vt(n)){const s=e[n];qe(s)&&Qo(r,s)}else if(qe(n))Qo(r,n.bind(t));else if(at(n))if(He(n))n.forEach(s=>Qf(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&Qo(r,s,n)}}function ed(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>mo(l,u,o,!0)),mo(l,e,o)),at(e)&&s.set(e,l),l}function mo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&mo(n,s,t,!0),r&&r.forEach(o=>mo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Vp={data:Ic,props:Nc,emits:Nc,methods:Xr,computed:Xr,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Xr,directives:Xr,watch:Gp,provide:Ic,inject:kp};function Ic(n,e){return e?n?function(){return Ft(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function kp(n,e){return Xr(Xa(n),Xa(e))}function Xa(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Xr(n,e){return n?Ft(Object.create(null),n,e):e}function Nc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Ft(Object.create(null),Lc(n),Lc(e??{})):e}function Gp(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Bt(n[i],e[i]);return t}function td(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wp=0;function Xp(n,e){return function(i,r=null){qe(i)||(i=Ft({},i)),r!=null&&!at(r)&&(r=null);const s=td(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Wp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Am,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&qe(c.install)?(o.add(c),c.install(u,...f)):qe(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const g=u._ceVNode||In(i,r);return g.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(g,c,h),l=!0,u._container=c,c.__vue_app__=u,Io(g.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Bn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=_r;_r=u;try{return c()}finally{_r=f}}};return u}}let _r=null;const qp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Sn(e)}Modifiers`]||n[`${$i(e)}Modifiers`];function $p(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&qp(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>vt(c)?c.trim():c)),o.number&&(r=t.map(wo)));let a,l=i[a=Yo(e)]||i[a=Yo(Sn(e))];!l&&s&&(l=i[a=Yo($i(e))]),l&&Bn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(u,n,6,r)}}const Yp=new WeakMap;function nd(n,e,t=!1){const i=t?Yp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=u=>{const c=nd(u,e,!0);c&&(a=!0,Ft(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):Ft(o,s),at(n)&&i.set(n,o),o)}function Lo(n,e){return!n||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,$i(e))||it(n,e))}function Fc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:g,ctx:_,inheritAttrs:x}=n,p=ho(n);let d,C;try{if(t.shapeFlag&4){const y=r||i,I=y;d=Rn(u.call(I,y,c,f,g,h,_)),C=a}else{const y=e;d=Rn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),C=e.props?a:jp(a)}}catch(y){ts.length=0,Po(y,n,1),d=In(vi)}let A=d;if(C&&x!==!1){const y=Object.keys(C),{shapeFlag:I}=A;y.length&&I&7&&(s&&y.some(bo)&&(C=Kp(C,s)),A=yr(A,C,!1,!0))}return t.dirs&&(A=yr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Jl(A,t.transition),d=A,ho(p),d}const jp=n=>{let e;for(const t in n)(t==="class"||t==="style"||yo(t))&&((e||(e={}))[t]=n[t]);return e},Kp=(n,e)=>{const t={};for(const i in n)(!bo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Zp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Oc(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(id(o,i,h)&&!Lo(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Oc(i,o,u):!0:!!o;return!1}function Oc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(id(e,n,s)&&!Lo(t,s))return!0}return!1}function id(n,e,t){const i=n[t],r=e[t];return t==="style"&&at(i)&&at(r)?!cs(i,r):i!==r}function Jp({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const rd={},sd=()=>Object.create(rd),od=n=>Object.getPrototypeOf(n)===rd;function Qp(n,e,t,i=!1){const r={},s=sd();n.propsDefaults=Object.create(null),ad(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:sp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function em(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Lo(n.emitsOptions,h))continue;const g=e[h];if(l)if(it(s,h))g!==s[h]&&(s[h]=g,u=!0);else{const _=Sn(h);r[_]=qa(l,a,_,g,n,!1)}else g!==s[h]&&(s[h]=g,u=!0)}}}else{ad(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!it(e,f)&&((c=$i(f))===f||!it(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=qa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!it(e,f))&&(delete s[f],u=!0)}u&&Kn(n.attrs,"set","")}function ad(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const u=e[l];let c;r&&it(r,c=Sn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:Lo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=nt(t),u=a||lt;for(let c=0;c<s.length;c++){const f=s[c];t[f]=qa(r,l,f,u[f],n,!it(u,f))}}return o}function qa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=fs(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$i(t))&&(i=!0))}return i}const tm=new WeakMap;function ld(n,e,t=!1){const i=t?tm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const c=f=>{l=!0;const[h,g]=ld(f,e,!0);Ft(o,h),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return at(n)&&i.set(n,pr),pr;if(He(s))for(let c=0;c<s.length;c++){const f=Sn(s[c]);Bc(f)&&(o[f]=lt)}else if(s)for(const c in s){const f=Sn(c);if(Bc(f)){const h=s[c],g=o[f]=He(h)||qe(h)?{type:h}:Ft({},h),_=g.type;let x=!1,p=!0;if(He(_))for(let d=0;d<_.length;++d){const C=_[d],A=qe(C)&&C.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(p=!1)}else x=qe(_)&&_.name==="Boolean";g[0]=x,g[1]=p,(x||it(g,"default"))&&a.push(f)}}const u=[o,a];return at(n)&&i.set(n,u),u}function Bc(n){return n[0]!=="$"&&!jr(n)}const ec=n=>n==="_"||n==="_ctx"||n==="$stable",tc=n=>He(n)?n.map(Rn):[Rn(n)],nm=(n,e,t)=>{if(e._n)return e;const i=vp((...r)=>tc(e(...r)),t);return i._c=!1,i},cd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ec(r))continue;const s=n[r];if(qe(s))e[r]=nm(r,s,i);else if(s!=null){const o=tc(s);e[r]=()=>o}}},ud=(n,e)=>{const t=tc(e);n.slots.default=()=>t},fd=(n,e,t)=>{for(const i in e)(t||!ec(i))&&(n[i]=e[i])},im=(n,e,t)=>{const i=n.slots=sd();if(n.vnode.shapeFlag&32){const r=e._;r?(fd(i,e,t),t&&Ef(i,"_",r,!0)):cd(e,i)}else e&&ud(n,e)},rm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:fd(r,e,t):(s=!e.$stable,cd(e,r)),o=e}else e&&(ud(n,e),o={default:1});if(s)for(const a in r)!ec(a)&&o[a]==null&&delete r[a]},Wt=cm;function sm(n){return om(n)}function om(n,e){const t=Ro();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:g=Un,insertStaticContent:_}=n,x=(R,L,E,oe=null,K=null,Y=null,ee=void 0,le=null,Q=!!L.dynamicChildren)=>{if(R===L)return;R&&!Or(R,L)&&(oe=xe(R),Pe(R,K,Y,!0),R=null),L.patchFlag===-2&&(Q=!1,L.dynamicChildren=null);const{type:S,ref:v,shapeFlag:P}=L;switch(S){case Uo:p(R,L,E,oe);break;case vi:d(R,L,E,oe);break;case Qs:R==null&&C(L,E,oe,ee);break;case en:ne(R,L,E,oe,K,Y,ee,le,Q);break;default:P&1?I(R,L,E,oe,K,Y,ee,le,Q):P&6?j(R,L,E,oe,K,Y,ee,le,Q):(P&64||P&128)&&S.process(R,L,E,oe,K,Y,ee,le,Q,Ve)}v!=null&&K?Jr(v,R&&R.ref,Y,L||R,!L):v==null&&R&&R.ref!=null&&Jr(R.ref,null,Y,R,!0)},p=(R,L,E,oe)=>{if(R==null)i(L.el=a(L.children),E,oe);else{const K=L.el=R.el;L.children!==R.children&&u(K,L.children)}},d=(R,L,E,oe)=>{R==null?i(L.el=l(L.children||""),E,oe):L.el=R.el},C=(R,L,E,oe)=>{[R.el,R.anchor]=_(R.children,L,E,oe,R.el,R.anchor)},A=({el:R,anchor:L},E,oe)=>{let K;for(;R&&R!==L;)K=h(R),i(R,E,oe),R=K;i(L,E,oe)},y=({el:R,anchor:L})=>{let E;for(;R&&R!==L;)E=h(R),r(R),R=E;r(L)},I=(R,L,E,oe,K,Y,ee,le,Q)=>{if(L.type==="svg"?ee="svg":L.type==="math"&&(ee="mathml"),R==null)U(L,E,oe,K,Y,ee,le,Q);else{const S=R.el&&R.el._isVueCE?R.el:null;try{S&&S._beginPatch(),w(R,L,K,Y,ee,le,Q)}finally{S&&S._endPatch()}}},U=(R,L,E,oe,K,Y,ee,le)=>{let Q,S;const{props:v,shapeFlag:P,transition:z,dirs:G}=R;if(Q=R.el=o(R.type,Y,v&&v.is,v),P&8?c(Q,R.children):P&16&&O(R.children,Q,null,oe,K,ta(R,Y),ee,le),G&&bi(R,null,oe,"created"),D(Q,R,R.scopeId,ee,oe),v){for(const me in v)me!=="value"&&!jr(me)&&s(Q,me,null,v[me],Y,oe);"value"in v&&s(Q,"value",null,v.value,Y),(S=v.onVnodeBeforeMount)&&Tn(S,oe,R)}G&&bi(R,null,oe,"beforeMount");const W=am(K,z);W&&z.beforeEnter(Q),i(Q,L,E),((S=v&&v.onVnodeMounted)||W||G)&&Wt(()=>{try{S&&Tn(S,oe,R),W&&z.enter(Q),G&&bi(R,null,oe,"mounted")}finally{}},K)},D=(R,L,E,oe,K)=>{if(E&&g(R,E),oe)for(let Y=0;Y<oe.length;Y++)g(R,oe[Y]);if(K){let Y=K.subTree;if(L===Y||md(Y.type)&&(Y.ssContent===L||Y.ssFallback===L)){const ee=K.vnode;D(R,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},O=(R,L,E,oe,K,Y,ee,le,Q=0)=>{for(let S=Q;S<R.length;S++){const v=R[S]=le?jn(R[S]):Rn(R[S]);x(null,v,L,E,oe,K,Y,ee,le)}},w=(R,L,E,oe,K,Y,ee)=>{const le=L.el=R.el;let{patchFlag:Q,dynamicChildren:S,dirs:v}=L;Q|=R.patchFlag&16;const P=R.props||lt,z=L.props||lt;let G;if(E&&Ti(E,!1),(G=z.onVnodeBeforeUpdate)&&Tn(G,E,L,R),v&&bi(L,R,E,"beforeUpdate"),E&&Ti(E,!0),(P.innerHTML&&z.innerHTML==null||P.textContent&&z.textContent==null)&&c(le,""),S?T(R.dynamicChildren,S,le,E,oe,ta(L,K),Y):ee||H(R,L,le,null,E,oe,ta(L,K),Y,!1),Q>0){if(Q&16)N(le,P,z,E,K);else if(Q&2&&P.class!==z.class&&s(le,"class",null,z.class,K),Q&4&&s(le,"style",P.style,z.style,K),Q&8){const W=L.dynamicProps;for(let me=0;me<W.length;me++){const ue=W[me],de=P[ue],Le=z[ue];(Le!==de||ue==="value")&&s(le,ue,de,Le,K,E)}}Q&1&&R.children!==L.children&&c(le,L.children)}else!ee&&S==null&&N(le,P,z,E,K);((G=z.onVnodeUpdated)||v)&&Wt(()=>{G&&Tn(G,E,L,R),v&&bi(L,R,E,"updated")},oe)},T=(R,L,E,oe,K,Y,ee)=>{for(let le=0;le<L.length;le++){const Q=R[le],S=L[le],v=Q.el&&(Q.type===en||!Or(Q,S)||Q.shapeFlag&198)?f(Q.el):E;x(Q,S,v,null,oe,K,Y,ee,!0)}},N=(R,L,E,oe,K)=>{if(L!==E){if(L!==lt)for(const Y in L)!jr(Y)&&!(Y in E)&&s(R,Y,L[Y],null,K,oe);for(const Y in E){if(jr(Y))continue;const ee=E[Y],le=L[Y];ee!==le&&Y!=="value"&&s(R,Y,le,ee,K,oe)}"value"in E&&s(R,"value",L.value,E.value,K)}},ne=(R,L,E,oe,K,Y,ee,le,Q)=>{const S=L.el=R?R.el:a(""),v=L.anchor=R?R.anchor:a("");let{patchFlag:P,dynamicChildren:z,slotScopeIds:G}=L;G&&(le=le?le.concat(G):G),R==null?(i(S,E,oe),i(v,E,oe),O(L.children||[],E,v,K,Y,ee,le,Q)):P>0&&P&64&&z&&R.dynamicChildren&&R.dynamicChildren.length===z.length?(T(R.dynamicChildren,z,E,K,Y,ee,le),(L.key!=null||K&&L===K.subTree)&&dd(R,L,!0)):H(R,L,E,v,K,Y,ee,le,Q)},j=(R,L,E,oe,K,Y,ee,le,Q)=>{L.slotScopeIds=le,R==null?L.shapeFlag&512?K.ctx.activate(L,E,oe,ee,Q):re(L,E,oe,K,Y,ee,Q):ae(R,L,Q)},re=(R,L,E,oe,K,Y,ee)=>{const le=R.component=vm(R,oe,K);if(Kf(R)&&(le.ctx.renderer=Ve),Sm(le,!1,ee),le.asyncDep){if(K&&K.registerDep(le,$,ee),!R.el){const Q=le.subTree=In(vi);d(null,Q,L,E),R.placeholder=Q.el}}else $(le,R,L,E,K,Y,ee)},ae=(R,L,E)=>{const oe=L.component=R.component;if(Zp(R,L,E))if(oe.asyncDep&&!oe.asyncResolved){te(oe,L,E);return}else oe.next=L,oe.update();else L.el=R.el,oe.vnode=L},$=(R,L,E,oe,K,Y,ee)=>{const le=()=>{if(R.isMounted){let{next:P,bu:z,u:G,parent:W,vnode:me}=R;{const _e=hd(R);if(_e){P&&(P.el=me.el,te(R,P,ee)),_e.asyncDep.then(()=>{Wt(()=>{R.isUnmounted||S()},K)});return}}let ue=P,de;Ti(R,!1),P?(P.el=me.el,te(R,P,ee)):P=me,z&&Zs(z),(de=P.props&&P.props.onVnodeBeforeUpdate)&&Tn(de,W,P,me),Ti(R,!0);const Le=Fc(R),ce=R.subTree;R.subTree=Le,x(ce,Le,f(ce.el),xe(ce),R,K,Y),P.el=Le.el,ue===null&&Jp(R,Le.el),G&&Wt(G,K),(de=P.props&&P.props.onVnodeUpdated)&&Wt(()=>Tn(de,W,P,me),K)}else{let P;const{el:z,props:G}=L,{bm:W,m:me,parent:ue,root:de,type:Le}=R,ce=Qr(L);Ti(R,!1),W&&Zs(W),!ce&&(P=G&&G.onVnodeBeforeMount)&&Tn(P,ue,L),Ti(R,!0);{de.ce&&de.ce._hasShadowRoot()&&de.ce._injectChildStyle(Le,R.parent?R.parent.type:void 0);const _e=R.subTree=Fc(R);x(null,_e,E,oe,R,K,Y),L.el=_e.el}if(me&&Wt(me,K),!ce&&(P=G&&G.onVnodeMounted)){const _e=L;Wt(()=>Tn(P,ue,_e),K)}(L.shapeFlag&256||ue&&Qr(ue.vnode)&&ue.vnode.shapeFlag&256)&&R.a&&Wt(R.a,K),R.isMounted=!0,L=E=oe=null}};R.scope.on();const Q=R.effect=new Af(le);R.scope.off();const S=R.update=Q.run.bind(Q),v=R.job=Q.runIfDirty.bind(Q);v.i=R,v.id=R.uid,Q.scheduler=()=>Zl(v),Ti(R,!0),S()},te=(R,L,E)=>{L.component=R;const oe=R.vnode.props;R.vnode=L,R.next=null,em(R,L.props,oe,E),rm(R,L.children,E),ni(),Cc(R),ii()},H=(R,L,E,oe,K,Y,ee,le,Q=!1)=>{const S=R&&R.children,v=R?R.shapeFlag:0,P=L.children,{patchFlag:z,shapeFlag:G}=L;if(z>0){if(z&128){Ee(S,P,E,oe,K,Y,ee,le,Q);return}else if(z&256){ge(S,P,E,oe,K,Y,ee,le,Q);return}}G&8?(v&16&&Te(S,K,Y),P!==S&&c(E,P)):v&16?G&16?Ee(S,P,E,oe,K,Y,ee,le,Q):Te(S,K,Y,!0):(v&8&&c(E,""),G&16&&O(P,E,oe,K,Y,ee,le,Q))},ge=(R,L,E,oe,K,Y,ee,le,Q)=>{R=R||pr,L=L||pr;const S=R.length,v=L.length,P=Math.min(S,v);let z;for(z=0;z<P;z++){const G=L[z]=Q?jn(L[z]):Rn(L[z]);x(R[z],G,E,null,K,Y,ee,le,Q)}S>v?Te(R,K,Y,!0,!1,P):O(L,E,oe,K,Y,ee,le,Q,P)},Ee=(R,L,E,oe,K,Y,ee,le,Q)=>{let S=0;const v=L.length;let P=R.length-1,z=v-1;for(;S<=P&&S<=z;){const G=R[S],W=L[S]=Q?jn(L[S]):Rn(L[S]);if(Or(G,W))x(G,W,E,null,K,Y,ee,le,Q);else break;S++}for(;S<=P&&S<=z;){const G=R[P],W=L[z]=Q?jn(L[z]):Rn(L[z]);if(Or(G,W))x(G,W,E,null,K,Y,ee,le,Q);else break;P--,z--}if(S>P){if(S<=z){const G=z+1,W=G<v?L[G].el:oe;for(;S<=z;)x(null,L[S]=Q?jn(L[S]):Rn(L[S]),E,W,K,Y,ee,le,Q),S++}}else if(S>z)for(;S<=P;)Pe(R[S],K,Y,!0),S++;else{const G=S,W=S,me=new Map;for(S=W;S<=z;S++){const ve=L[S]=Q?jn(L[S]):Rn(L[S]);ve.key!=null&&me.set(ve.key,S)}let ue,de=0;const Le=z-W+1;let ce=!1,_e=0;const Ce=new Array(Le);for(S=0;S<Le;S++)Ce[S]=0;for(S=G;S<=P;S++){const ve=R[S];if(de>=Le){Pe(ve,K,Y,!0);continue}let Be;if(ve.key!=null)Be=me.get(ve.key);else for(ue=W;ue<=z;ue++)if(Ce[ue-W]===0&&Or(ve,L[ue])){Be=ue;break}Be===void 0?Pe(ve,K,Y,!0):(Ce[Be-W]=S+1,Be>=_e?_e=Be:ce=!0,x(ve,L[Be],E,null,K,Y,ee,le,Q),de++)}const Ue=ce?lm(Ce):pr;for(ue=Ue.length-1,S=Le-1;S>=0;S--){const ve=W+S,Be=L[ve],ze=L[ve+1],pe=ve+1<v?ze.el||pd(ze):oe;Ce[S]===0?x(null,Be,E,pe,K,Y,ee,le,Q):ce&&(ue<0||S!==Ue[ue]?Se(Be,E,pe,2):ue--)}}},Se=(R,L,E,oe,K=null)=>{const{el:Y,type:ee,transition:le,children:Q,shapeFlag:S}=R;if(S&6){Se(R.component.subTree,L,E,oe);return}if(S&128){R.suspense.move(L,E,oe);return}if(S&64){ee.move(R,L,E,Ve);return}if(ee===en){i(Y,L,E);for(let P=0;P<Q.length;P++)Se(Q[P],L,E,oe);i(R.anchor,L,E);return}if(ee===Qs){A(R,L,E);return}if(oe!==2&&S&1&&le)if(oe===0)le.beforeEnter(Y),i(Y,L,E),Wt(()=>le.enter(Y),K);else{const{leave:P,delayLeave:z,afterLeave:G}=le,W=()=>{R.ctx.isUnmounted?r(Y):i(Y,L,E)},me=()=>{Y._isLeaving&&Y[Tp](!0),P(Y,()=>{W(),G&&G()})};z?z(Y,W,me):me()}else i(Y,L,E)},Pe=(R,L,E,oe=!1,K=!1)=>{const{type:Y,props:ee,ref:le,children:Q,dynamicChildren:S,shapeFlag:v,patchFlag:P,dirs:z,cacheIndex:G,memo:W}=R;if(P===-2&&(K=!1),le!=null&&(ni(),Jr(le,null,E,R,!0),ii()),G!=null&&(L.renderCache[G]=void 0),v&256){L.ctx.deactivate(R);return}const me=v&1&&z,ue=!Qr(R);let de;if(ue&&(de=ee&&ee.onVnodeBeforeUnmount)&&Tn(de,L,R),v&6)he(R.component,E,oe);else{if(v&128){R.suspense.unmount(E,oe);return}me&&bi(R,null,L,"beforeUnmount"),v&64?R.type.remove(R,L,E,Ve,oe):S&&!S.hasOnce&&(Y!==en||P>0&&P&64)?Te(S,L,E,!1,!0):(Y===en&&P&384||!K&&v&16)&&Te(Q,L,E),oe&&Ye(R)}const Le=W!=null&&G==null;(ue&&(de=ee&&ee.onVnodeUnmounted)||me||Le)&&Wt(()=>{de&&Tn(de,L,R),me&&bi(R,null,L,"unmounted"),Le&&(R.el=null)},E)},Ye=R=>{const{type:L,el:E,anchor:oe,transition:K}=R;if(L===en){ie(E,oe);return}if(L===Qs){y(R);return}const Y=()=>{r(E),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(R.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:le}=K,Q=()=>ee(E,Y);le?le(R.el,Y,Q):Q()}else Y()},ie=(R,L)=>{let E;for(;R!==L;)E=h(R),r(R),R=E;r(L)},he=(R,L,E)=>{const{bum:oe,scope:K,job:Y,subTree:ee,um:le,m:Q,a:S}=R;zc(Q),zc(S),oe&&Zs(oe),K.stop(),Y&&(Y.flags|=8,Pe(ee,R,L,E)),le&&Wt(le,L),Wt(()=>{R.isUnmounted=!0},L)},Te=(R,L,E,oe=!1,K=!1,Y=0)=>{for(let ee=Y;ee<R.length;ee++)Pe(R[ee],L,E,oe,K)},xe=R=>{if(R.shapeFlag&6)return xe(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const L=h(R.anchor||R.el),E=L&&L[yp];return E?h(E):L};let De=!1;const Oe=(R,L,E)=>{let oe;R==null?L._vnode&&(Pe(L._vnode,null,null,!0),oe=L._vnode.component):x(L._vnode||null,R,L,null,null,null,E),L._vnode=R,De||(De=!0,Cc(oe),Wf(),De=!1)},Ve={p:x,um:Pe,m:Se,r:Ye,mt:re,mc:O,pc:H,pbc:T,n:xe,o:n};return{render:Oe,hydrate:void 0,createApp:Xp(Oe)}}function ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function am(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function dd(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&dd(o,a)),a.type===Uo&&(a.patchFlag===-1&&(a=r[s]=jn(a)),a.el=o.el),a.type===vi&&!a.el&&(a.el=o.el)}}function lm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function hd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hd(e)}function zc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function pd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?pd(e.subTree):null}const md=n=>n.__isSuspense;function cm(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):_p(n)}const en=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),vi=Symbol.for("v-cmt"),Qs=Symbol.for("v-stc"),ts=[];let tn=null;function pt(n=!1){ts.push(tn=n?null:[])}function um(){ts.pop(),tn=ts[ts.length-1]||null}let ss=1;function Hc(n,e=!1){ss+=n,n<0&&tn&&e&&(tn.hasOnce=!0)}function gd(n){return n.dynamicChildren=ss>0?tn||pr:null,um(),ss>0&&tn&&tn.push(n),n}function mt(n,e,t,i,r,s){return gd(M(n,e,t,i,r,s,!0))}function fm(n,e,t,i,r){return gd(In(n,e,t,i,r,!0))}function _d(n){return n?n.__v_isVNode===!0:!1}function Or(n,e){return n.type===e.type&&n.key===e.key}const vd=({key:n})=>n??null,eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Nt(n)||qe(n)?{i:un,r:n,k:e,f:!!t}:n:null);function M(n,e=null,t=null,i=0,r=null,s=n===en?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vd(e),ref:e&&eo(e),scopeId:qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return a?(nc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),ss>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const In=dm;function dm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Op)&&(n=vi),_d(n)){const a=yr(n,e,!0);return t&&nc(a,t),ss>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(n)]=a:tn.push(a)),a.patchFlag=-2,a}if(bm(n)&&(n=n.__vccOpts),e){e=hm(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=qt(a)),at(l)&&(Kl(l)&&!He(l)&&(l=Ft({},l)),e.style=Xt(l))}const o=vt(n)?1:md(n)?128:bp(n)?64:at(n)?4:qe(n)?2:0;return M(n,e,t,i,r,o,s,!0)}function hm(n){return n?Kl(n)||od(n)?Ft({},n):n:null}function yr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?mm(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&vd(u),ref:e&&e.ref?t&&s?He(s)?s.concat(eo(e)):[s,eo(e)]:eo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==en?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yr(n.ssContent),ssFallback:n.ssFallback&&yr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jl(c,l.clone(c)),c}function pm(n=" ",e=0){return In(Uo,null,n,e)}function Rs(n,e){const t=In(Qs,null,n);return t.staticCount=e,t}function Br(n="",e=!1){return e?(pt(),fm(vi,null,n)):In(vi,null,n)}function Rn(n){return n==null||typeof n=="boolean"?In(vi):He(n)?In(en,null,n.slice()):_d(n)?jn(n):In(Uo,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yr(n)}function nc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!od(e)?e._ctx=un:r===3&&un&&(un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:un},t=32):(e=String(e),i&64?(t=16,e=[pm(e)]):t=8);n.children=e,n.shapeFlag|=t}function mm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qt([e.class,i.class]));else if(r==="style")e.style=Xt([e.style,i.style]);else if(yo(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!bo(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Tn(n,e,t,i=null){Bn(n,e,7,[t,i])}const gm=td();let _m=0;function vm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||gm,s={uid:_m++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(i,r),emitsOptions:nd(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$p.bind(null,s),n.ce&&n.ce(s),s}let Vt=null;const xm=()=>Vt||un;let go,$a;{const n=Ro(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};go=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),$a=e("__VUE_SSR_SETTERS__",t=>os=t)}const fs=n=>{const e=Vt;return go(n),n.scope.on(),()=>{n.scope.off(),go(e)}},Vc=()=>{Vt&&Vt.scope.off(),go(null)};function xd(n){return n.vnode.shapeFlag&4}let os=!1;function Sm(n,e=!1,t=!1){e&&$a(e);const{props:i,children:r}=n.vnode,s=xd(n);Qp(n,i,s,e),im(n,r,t||e);const o=s?Mm(n,e):void 0;return e&&$a(!1),o}function Mm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Bp);const{setup:i}=t;if(i){ni();const r=n.setupContext=i.length>1?ym(n):null,s=fs(n),o=us(i,n,0,[n.props,r]),a=vf(o);if(ii(),s(),(a||n.sp)&&!Qr(n)&&jf(n),a){if(o.then(Vc,Vc),e)return o.then(l=>{kc(n,l)}).catch(l=>{Po(l,n,0)});n.asyncDep=o}else kc(n,o)}else Sd(n)}function kc(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=Hf(e)),Sd(n)}function Sd(n,e,t){const i=n.type;n.render||(n.render=i.render||Un);{const r=fs(n);ni();try{zp(n)}finally{ii(),r()}}}const Em={get(n,e){return Ut(n,"get",""),n[e]}};function ym(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:e}}function Io(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hf(op(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in es)return es[t](n)},has(e,t){return t in e||t in es}})):n.proxy}function bm(n){return qe(n)&&"__vccOpts"in n}const Tm=(n,e)=>dp(n,e,os),Am="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ya;const Gc=typeof window<"u"&&window.trustedTypes;if(Gc)try{Ya=Gc.createPolicy("vue",{createHTML:n=>n})}catch{}const Md=Ya?n=>Ya.createHTML(n):n=>n,wm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Wc=Yn&&Yn.createElement("template"),Cm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Yn.createElementNS(wm,n):e==="mathml"?Yn.createElementNS(Rm,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Wc.innerHTML=Md(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Wc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pm=Symbol("_vtc");function Dm(n,e,t){const i=n[Pm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xc=Symbol("_vod"),Lm=Symbol("_vsh"),Um=Symbol(""),Im=/(?:^|;)\s*display\s*:/;function Nm(n,e,t){const i=n.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&qr(i,a,"")}else for(const o in e)t[o]==null&&qr(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Om(n,o,!vt(e)&&e?e[o]:void 0,a)||qr(i,o,a):qr(i,o,"")}}else if(r){if(e!==t){const o=i[Um];o&&(t+=";"+o),i.cssText=t,s=Im.test(t)}}else e&&n.removeAttribute("style");Xc in n&&(n[Xc]=s?i.display:"",n[Lm]&&(i.display="none"))}const qc=/\s*!important$/;function qr(n,e,t){if(He(t))t.forEach(i=>qr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fm(n,e);qc.test(t)?n.setProperty($i(i),t.replace(qc,""),"important"):n[i]=t}}const $c=["Webkit","Moz","ms"],na={};function Fm(n,e){const t=na[e];if(t)return t;let i=Sn(e);if(i!=="filter"&&i in n)return na[e]=i;i=Mf(i);for(let r=0;r<$c.length;r++){const s=$c[r]+i;if(s in n)return na[e]=s}return e}function Om(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&vt(i)&&t===i}const Yc="http://www.w3.org/1999/xlink";function jc(n,e,t,i,r,s=Fh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yc,e.slice(6,e.length)):n.setAttributeNS(Yc,e,t):t==null||s&&!yf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":On(t)?String(t):t)}function Kc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Md(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=yf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ni(n,e,t,i){n.addEventListener(e,t,i)}function Bm(n,e,t,i){n.removeEventListener(e,t,i)}const Zc=Symbol("_vei");function zm(n,e,t,i,r=null){const s=n[Zc]||(n[Zc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Hm(e);if(i){const u=s[e]=Gm(i,r);Ni(n,a,u,l)}else o&&(Bm(n,a,o,l),s[e]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function Hm(n){let e;if(Jc.test(n)){e={};let i;for(;i=n.match(Jc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$i(n.slice(2)),e]}let ia=0;const Vm=Promise.resolve(),km=()=>ia||(Vm.then(()=>ia=0),ia=Date.now());function Gm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Bn(Wm(i,t.value),e,5,[i])};return t.value=n,t.attached=km(),t}function Wm(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Dm(n,i,o):e==="style"?Nm(n,t,i):yo(e)?bo(e)||zm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qm(n,e,i,o))?(Kc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jc(n,e,i,o,s,e!=="value")):n._isVueCE&&($m(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(i)))?Kc(n,Sn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jc(n,e,i,o))};function qm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qc(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qc(e)&&vt(t)?!1:e in n}function $m(n,e){const t=n._def.props;if(!t)return!1;const i=Sn(e);return Array.isArray(t)?t.some(r=>Sn(r)===i):Object.keys(t).some(r=>Sn(r)===i)}const _o=n=>{const e=n.props["onUpdate:modelValue"]||!1;return He(e)?t=>Zs(e,t):e};function Ym(n){n.target.composing=!0}function eu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vr=Symbol("_assign");function tu(n,e,t){return e&&(n=n.trim()),t&&(n=wo(n)),n}const pn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[vr]=_o(r);const s=i||r.props&&r.props.type==="number";Ni(n,e?"change":"input",o=>{o.target.composing||n[vr](tu(n.value,t,s))}),(t||s)&&Ni(n,"change",()=>{n.value=tu(n.value,t,s)}),e||(Ni(n,"compositionstart",Ym),Ni(n,"compositionend",eu),Ni(n,"change",eu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[vr]=_o(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?wo(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Vn={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=To(e);Ni(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?wo(vo(o)):vo(o));n[vr](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,kf(()=>{n._assigning=!1})}),n[vr]=_o(i)},mounted(n,{value:e}){nu(n,e)},beforeUpdate(n,e,t){n[vr]=_o(t)},updated(n,{value:e}){n._assigning||nu(n,e)}};function nu(n,e){const t=n.multiple,i=He(e);if(!(t&&!i&&!To(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=vo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Bh(e,a)>-1}else o.selected=e.has(a);else if(cs(vo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function vo(n){return"_value"in n?n._value:n.value}const jm=Ft({patchProp:Xm},Cm);let iu;function Km(){return iu||(iu=sm(jm))}const Zm=((...n)=>{const e=Km().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Qm(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Jm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Jm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qm(n){return vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="172",eg=0,ru=1,tg=2,Ed=1,ng=2,$n=3,xi=0,$t=1,Jn=2,gi=0,xr=1,su=2,ou=3,au=4,ig=5,Fi=100,rg=101,sg=102,og=103,ag=104,lg=200,cg=201,ug=202,fg=203,ja=204,Ka=205,dg=206,hg=207,pg=208,mg=209,gg=210,_g=211,vg=212,xg=213,Sg=214,Za=0,Ja=1,Qa=2,br=3,el=4,tl=5,nl=6,il=7,yd=0,Mg=1,Eg=2,_i=0,yg=1,bg=2,Tg=3,Ag=4,wg=5,Rg=6,Cg=7,bd=300,Tr=301,Ar=302,rl=303,sl=304,No=306,ol=1e3,Bi=1001,al=1002,En=1003,Pg=1004,Cs=1005,Dn=1006,ra=1007,zi=1008,si=1009,Td=1010,Ad=1011,as=1012,rc=1013,Wi=1014,Qn=1015,ds=1016,sc=1017,oc=1018,wr=1020,wd=35902,Rd=1021,Cd=1022,xn=1023,Pd=1024,Dd=1025,Sr=1026,Rr=1027,Ld=1028,ac=1029,Ud=1030,lc=1031,cc=1033,to=33776,no=33777,io=33778,ro=33779,ll=35840,cl=35841,ul=35842,fl=35843,dl=36196,hl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,Sl=37813,Ml=37814,El=37815,yl=37816,bl=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,so=36492,Cl=36494,Pl=36495,Id=36283,Dl=36284,Ll=36285,Ul=36286,Dg=3200,Lg=3201,Ug=0,Ig=1,mi="",ln="srgb",Cr="srgb-linear",xo="linear",st="srgb",Ki=7680,lu=519,Ng=512,Fg=513,Og=514,Nd=515,Bg=516,zg=517,Hg=518,Vg=519,cu=35044,uu="300 es",ei=2e3,So=2001;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,Il=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function kg(n,e){return(n%e+e)%e}function oa(n,e,t){return(1-t)*n+t*e}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],g=i[5],_=i[8],x=r[0],p=r[3],d=r[6],C=r[1],A=r[4],y=r[7],I=r[2],U=r[5],D=r[8];return s[0]=o*x+a*C+l*I,s[3]=o*p+a*A+l*U,s[6]=o*d+a*y+l*D,s[1]=u*x+c*C+f*I,s[4]=u*p+c*A+f*U,s[7]=u*d+c*y+f*D,s[2]=h*x+g*C+_*I,s[5]=h*p+g*A+_*U,s[8]=h*d+g*y+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,g=u*s-o*l,_=t*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(c*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=g*x,e[7]=(i*l-u*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Xe;function Fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){const n=Mo("canvas");return n.style.display="block",n}const fu={};function dr(n){n in fu||(fu[n]=!0,console.warn(n))}function Wg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Xg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const du=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){const n={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mi?xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cr]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:du,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:st,toXYZ:du,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const Qe=$g();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class Yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Mo("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jg=0;class Od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kg=0;class Yt extends Lr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Bi,r=Bi,s=Dn,o=zi,a=xn,l=si,u=Yt.DEFAULT_ANISOTROPY,c=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=hs(),this.name="",this.source=new Od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=bd;Yt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],g=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,y=(g+1)/2,I=(d+1)/2,U=(c+h)/4,D=(f+x)/4,O=(_+p)/4;return A>y&&A>I?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=U/i,s=D/i):y>I?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=U/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=D/s,r=O/s),this.set(i,r,s,t),this}let C=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(C)<.001&&(C=1),this.x=(p-_)/C,this.y=(f-x)/C,this.z=(h-c)/C,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zg extends Lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Zg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bd extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jg extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||u!==g||c!==_){let p=1-a;const d=l*h+u*g+c*_+f*x,C=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const I=Math.sqrt(A),U=Math.atan2(I,d*C);p=Math.sin(p*U)/I,a=Math.sin(a*U)/I}const y=a*C;if(l=l*p+h*y,u=u*p+g*y,c=c*p+_*y,f=f*p+x*y,p===1-a){const I=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=I,u*=I,c*=I,f*=I}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*g-u*h,e[t+1]=l*_+c*h+u*f-a*g,e[t+2]=u*_+c*g+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f-h*g*_;break;case"YXZ":this._x=h*c*f+u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f+h*g*_;break;case"ZXY":this._x=h*c*f-u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f-h*g*_;break;case"ZYX":this._x=h*c*f-u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f+h*g*_;break;case"YZX":this._x=h*c*f+u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f-h*g*_;break;case"XZY":this._x=h*c*f-u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new J,pu=new ps;class ms{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Ds.subVectors(this.max,Hr),Ji.subVectors(e.a,Hr),Qi.subVectors(e.b,Hr),er.subVectors(e.c,Hr),li.subVectors(Qi,Ji),ci.subVectors(er,Qi),Ai.subVectors(Ji,er);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ai.z,Ai.y,li.z,0,-li.x,ci.z,0,-ci.x,Ai.z,0,-Ai.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ai.y,Ai.x,0];return!ua(t,Ji,Qi,er,Ds)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ji,Qi,er,Ds))?!1:(Ls.crossVectors(li,ci),t=[Ls.x,Ls.y,Ls.z],ua(t,Ji,Qi,er,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new J,new J,new J,new J,new J,new J,new J,new J],mn=new J,Ps=new ms,Ji=new J,Qi=new J,er=new J,li=new J,ci=new J,Ai=new J,Hr=new J,Ds=new J,Ls=new J,wi=new J;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wi.fromArray(n,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),u=t.dot(wi),c=i.dot(wi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Qg=new ms,Vr=new J,fa=new J;class uc{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(fa)),this.expandByPoint(Vr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new J,da=new J,Us=new J,ui=new J,ha=new J,Is=new J,pa=new J;class e_{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Us),a=ui.dot(this.direction),l=-ui.dot(Us),u=ui.lengthSq(),c=Math.abs(1-o*o);let f,h,g,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const x=1/c;f*=x,h*=x,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(Us,h),g}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,r,s){ha.subVectors(t,e),Is.subVectors(i,e),pa.crossVectors(ha,Is);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(Is.crossVectors(ui,Is));if(l<0)return null;const u=a*this.direction.dot(ha.cross(ui));if(u<0||l+u>o)return null;const c=-a*ui.dot(pa);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,g,_,x,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,g,_,x,p)}set(e,t,i,r,s,o,a,l,u,c,f,h,g,_,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=g,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,g=o*f,_=a*c,x=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=g+_*u,t[5]=h-x*u,t[9]=-a*l,t[2]=x-h*u,t[6]=_+g*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,g=l*f,_=u*c,x=u*f;t[0]=h+x*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=g*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,g=l*f,_=u*c,x=u*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*c,t[9]=x-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,g=o*f,_=a*c,x=a*f;t[0]=l*c,t[4]=_*u-g,t[8]=h*u+x,t[1]=l*f,t[5]=x*u+h,t[9]=g*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=x-h*f,t[8]=_*f+g,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,g=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+x,t[5]=o*c,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*c,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),fi.crossVectors(i,Jt),fi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),fi.crossVectors(i,Jt)),fi.normalize(),Ns.crossVectors(Jt,fi),r[0]=fi.x,r[4]=Ns.x,r[8]=Jt.x,r[1]=fi.y,r[5]=Ns.y,r[9]=Jt.y,r[2]=fi.z,r[6]=Ns.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],g=i[13],_=i[2],x=i[6],p=i[10],d=i[14],C=i[3],A=i[7],y=i[11],I=i[15],U=r[0],D=r[4],O=r[8],w=r[12],T=r[1],N=r[5],ne=r[9],j=r[13],re=r[2],ae=r[6],$=r[10],te=r[14],H=r[3],ge=r[7],Ee=r[11],Se=r[15];return s[0]=o*U+a*T+l*re+u*H,s[4]=o*D+a*N+l*ae+u*ge,s[8]=o*O+a*ne+l*$+u*Ee,s[12]=o*w+a*j+l*te+u*Se,s[1]=c*U+f*T+h*re+g*H,s[5]=c*D+f*N+h*ae+g*ge,s[9]=c*O+f*ne+h*$+g*Ee,s[13]=c*w+f*j+h*te+g*Se,s[2]=_*U+x*T+p*re+d*H,s[6]=_*D+x*N+p*ae+d*ge,s[10]=_*O+x*ne+p*$+d*Ee,s[14]=_*w+x*j+p*te+d*Se,s[3]=C*U+A*T+y*re+I*H,s[7]=C*D+A*N+y*ae+I*ge,s[11]=C*O+A*ne+y*$+I*Ee,s[15]=C*w+A*j+y*te+I*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],g=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*g-i*l*g)+x*(+t*l*g-t*u*h+s*o*h-r*o*g+r*u*c-s*l*c)+p*(+t*u*f-t*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],g=e[11],_=e[12],x=e[13],p=e[14],d=e[15],C=f*p*u-x*h*u+x*l*g-a*p*g-f*l*d+a*h*d,A=_*h*u-c*p*u-_*l*g+o*p*g+c*l*d-o*h*d,y=c*x*u-_*f*u+_*a*g-o*x*g-c*a*d+o*f*d,I=_*f*l-c*x*l-_*a*h+o*x*h+c*a*p-o*f*p,U=t*C+i*A+r*y+s*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=C*D,e[1]=(x*h*s-f*p*s-x*r*g+i*p*g+f*r*d-i*h*d)*D,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*d+i*l*d)*D,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*g-i*l*g)*D,e[4]=A*D,e[5]=(c*p*s-_*h*s+_*r*g-t*p*g-c*r*d+t*h*d)*D,e[6]=(_*l*s-o*p*s-_*r*u+t*p*u+o*r*d-t*l*d)*D,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*g+t*l*g)*D,e[8]=y*D,e[9]=(_*f*s-c*x*s-_*i*g+t*x*g+c*i*d-t*f*d)*D,e[10]=(o*x*s-_*a*s+_*i*u-t*x*u-o*i*d+t*a*d)*D,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*g-t*a*g)*D,e[12]=I*D,e[13]=(c*x*r-_*f*r+_*i*h-t*x*h-c*i*p+t*f*p)*D,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*p-t*a*p)*D,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,g=s*c,_=s*f,x=o*c,p=o*f,d=a*f,C=l*u,A=l*c,y=l*f,I=i.x,U=i.y,D=i.z;return r[0]=(1-(x+d))*I,r[1]=(g+y)*I,r[2]=(_-A)*I,r[3]=0,r[4]=(g-y)*U,r[5]=(1-(h+d))*U,r[6]=(p+C)*U,r[7]=0,r[8]=(_+A)*D,r[9]=(p-C)*D,r[10]=(1-(h+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const o=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/s,c=1/o,f=1/a;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ei){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(a===ei)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===So)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ei){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,g=(i+r)*c;let _,x;if(a===ei)_=(o+s)*f,x=-2*f;else if(a===So)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new J,gn=new bt,t_=new J(0,0,0),n_=new J(1,1,1),fi=new J,Ns=new J,Jt=new J,mu=new bt,gu=new ps;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i_=0;const _u=new J,nr=new ps,Wn=new bt,Fs=new J,kr=new J,r_=new J,s_=new ps,vu=new J(1,0,0),xu=new J(0,1,0),Su=new J(0,0,1),Mu={type:"added"},o_={type:"removed"},ir={type:"childadded",child:null},ma={type:"childremoved",child:null};class nn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new J,t=new oi,i=new ps,r=new J(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Xe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fs.copy(e):Fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(kr,Fs,this.up):Wn.lookAt(Fs,kr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Wn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o_),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new J(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new J,Xn=new J,ga=new J,qn=new J,rr=new J,sr=new J,Eu=new J,_a=new J,va=new J,xa=new J,Sa=new xt,Ma=new xt,Ea=new xt;class vn{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Xn.subVectors(i,t),ga.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Xn),l=_n.dot(ga),u=Xn.dot(Xn),c=Xn.dot(ga),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Sa.setScalar(0),Ma.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,i),Ea.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sa,s.x),o.addScaledVector(Ma,s.y),o.addScaledVector(Ea,s.z),o}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Xn.subVectors(e,t),_n.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),_n.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,i),sr.subVectors(s,i),_a.subVectors(e,i);const l=rr.dot(_a),u=sr.dot(_a);if(l<=0&&u<=0)return t.copy(i);va.subVectors(e,r);const c=rr.dot(va),f=sr.dot(va);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(rr,o);xa.subVectors(e,s);const g=rr.dot(xa),_=sr.dot(xa);if(_>=0&&g<=_)return t.copy(s);const x=g*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(sr,a);const p=c*_-g*f;if(p<=0&&f-c>=0&&g-_>=0)return Eu.subVectors(s,r),a=(f-c)/(f-c+(g-_)),t.copy(r).addScaledVector(Eu,a);const d=1/(p+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(rr,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Os={h:0,s:0,l:0};function ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=kg(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ya(o,s,e+1/3),this.g=ya(o,s,e),this.b=ya(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=Hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ke(Dt.r*255,0,255))*65536+Math.round(Ke(Dt.g*255,0,255))*256+Math.round(Ke(Dt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=ln){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Os);const i=oa(di.h,Os.h,t),r=oa(di.s,Os.s,t),s=oa(di.l,Os.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new ot;ot.NAMES=Hd;let a_=0;class Fo extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=xr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Ka&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fc extends Fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new J,Bs=new ct;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cu&&(e.usage=this.usage),e}}class Vd extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kd extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fn extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l_=0;const on=new bt,ba=new nn,or=new J,Qt=new ms,Gr=new ms,wt=new J;class Mi extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?kd:Vd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Qt.min,Gr.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,Gr.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(Gr.min),Qt.expandByPoint(Gr.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(or.fromBufferAttribute(e,u),wt.add(or)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new J,l[O]=new J;const u=new J,c=new J,f=new J,h=new ct,g=new ct,_=new ct,x=new J,p=new J;function d(O,w,T){u.fromBufferAttribute(i,O),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,O),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,T),c.sub(u),f.sub(u),g.sub(h),_.sub(h);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(N),p.copy(f).multiplyScalar(g.x).addScaledVector(c,-_.x).multiplyScalar(N),a[O].add(x),a[w].add(x),a[T].add(x),l[O].add(p),l[w].add(p),l[T].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let O=0,w=C.length;O<w;++O){const T=C[O],N=T.start,ne=T.count;for(let j=N,re=N+ne;j<re;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const A=new J,y=new J,I=new J,U=new J;function D(O){I.fromBufferAttribute(r,O),U.copy(I);const w=a[O];A.copy(w),A.sub(I.multiplyScalar(I.dot(w))).normalize(),y.crossVectors(U,w);const N=y.dot(l[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,N)}for(let O=0,w=C.length;O<w;++O){const T=C[O],N=T.start,ne=T.count;for(let j=N,re=N+ne;j<re;j+=3)D(e.getX(j+0)),D(e.getX(j+1)),D(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,u=new J,c=new J,f=new J;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let g=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*c;for(let d=0;d<c;d++)h[_++]=u[g++]}return new Nn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],g=e(h,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,g=f.length;h<g;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new bt,Ri=new e_,zs=new uc,bu=new J,Hs=new J,Vs=new J,ks=new J,Ta=new J,Gs=new J,Tu=new J,Ws=new J;class Ln extends nn{constructor(e=new Mi,t=new fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ta.fromBufferAttribute(f,e),o?Gs.addScaledVector(Ta,c):Gs.addScaledVector(Ta.sub(t),c))}t.add(Gs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(zs.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(zs,bu)===null||Ri.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(yu.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=o[p.materialIndex],C=Math.max(p.start,g.start),A=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=C,I=A;y<I;y+=3){const U=a.getX(y),D=a.getX(y+1),O=a.getX(y+2);r=Xs(this,d,e,i,u,c,f,U,D,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=_,d=x;p<d;p+=3){const C=a.getX(p),A=a.getX(p+1),y=a.getX(p+2);r=Xs(this,o,e,i,u,c,f,C,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=o[p.materialIndex],C=Math.max(p.start,g.start),A=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=C,I=A;y<I;y+=3){const U=y,D=y+1,O=y+2;r=Xs(this,d,e,i,u,c,f,U,D,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=_,d=x;p<d;p+=3){const C=p,A=p+1,y=p+2;r=Xs(this,o,e,i,u,c,f,C,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function c_(n,e,t,i,r,s,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ws);return u<t.near||u>t.far?null:{distance:u,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Hs),n.getVertexPosition(l,Vs),n.getVertexPosition(u,ks);const c=c_(n,e,t,i,Hs,Vs,ks,Tu);if(c){const f=new J;vn.getBarycoord(Tu,Hs,Vs,ks,f),r&&(c.uv=vn.getInterpolatedAttribute(r,a,l,u,f,new ct)),s&&(c.uv1=vn.getInterpolatedAttribute(s,a,l,u,f,new ct)),o&&(c.normal=vn.getInterpolatedAttribute(o,a,l,u,f,new J),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new J,materialIndex:0};vn.getNormal(Hs,Vs,ks,h.normal),c.face=h,c.barycoord=f}return c}class gs extends Mi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(u,3)),this.setAttribute("normal",new Fn(c,3)),this.setAttribute("uv",new Fn(f,2));function _(x,p,d,C,A,y,I,U,D,O,w){const T=y/D,N=I/O,ne=y/2,j=I/2,re=U/2,ae=D+1,$=O+1;let te=0,H=0;const ge=new J;for(let Ee=0;Ee<$;Ee++){const Se=Ee*N-j;for(let Pe=0;Pe<ae;Pe++){const Ye=Pe*T-ne;ge[x]=Ye*C,ge[p]=Se*A,ge[d]=re,u.push(ge.x,ge.y,ge.z),ge[x]=0,ge[p]=0,ge[d]=U>0?1:-1,c.push(ge.x,ge.y,ge.z),f.push(Pe/D),f.push(1-Ee/O),te+=1}}for(let Ee=0;Ee<O;Ee++)for(let Se=0;Se<D;Se++){const Pe=h+Se+ae*Ee,Ye=h+Se+ae*(Ee+1),ie=h+(Se+1)+ae*(Ee+1),he=h+(Se+1)+ae*Ee;l.push(Pe,Ye,he),l.push(Ye,ie,he),H+=6}a.addGroup(g,H,w),g+=H,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function u_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const f_={clone:Pr,merge:zt};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wd extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new J,Au=new ct,wu=new ct;class cn extends Wd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Au,wu),t.subVectors(wu,Au)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class p_ extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(ar,lr,e,t);r.layers=this.layers,this.add(r);const s=new cn(ar,lr,e,t);s.layers=this.layers,this.add(s);const o=new cn(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new cn(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new cn(ar,lr,e,t);l.layers=this.layers,this.add(l);const u=new cn(ar,lr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xd extends Yt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m_ extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:gi});s.uniforms.tEquirect.value=t;const o=new Ln(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Dn),new p_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class g_ extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Aa=new J,__=new J,v_=new Xe;class Ui{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Aa.subVectors(i,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v_.getNormalMatrix(e),r=this.coplanarPoint(Aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new uc,qs=new J;class qd{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],g=r[8],_=r[9],x=r[10],p=r[11],d=r[12],C=r[13],A=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,p-g,y-d).normalize(),i[1].setComponents(l+s,h+u,p+g,y+d).normalize(),i[2].setComponents(l+o,h+c,p+_,y+C).normalize(),i[3].setComponents(l-o,h-c,p-_,y-C).normalize(),i[4].setComponents(l-a,h-f,p-x,y-A).normalize(),t===ei)i[5].setComponents(l+a,h+f,p+x,y+A).normalize();else if(t===So)i[5].setComponents(a,f,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $r extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $d extends Yt{constructor(e,t,i,r,s,o,a,l,u,c=Sr){if(c!==Sr&&c!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Sr&&(i=Wi),i===void 0&&c===Rr&&(i=wr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oo extends Mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,g=[],_=[],x=[],p=[];for(let d=0;d<c;d++){const C=d*h-o;for(let A=0;A<u;A++){const y=A*f-s;_.push(y,-C,0),x.push(0,0,1),p.push(A/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){const A=C+u*d,y=C+u*(d+1),I=C+1+u*(d+1),U=C+1+u*d;g.push(A,y,U),g.push(y,I,U)}this.setIndex(g),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class dc extends Mi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new J,h=new J,g=[],_=[],x=[],p=[];for(let d=0;d<=i;d++){const C=[],A=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){const U=I/t;f.x=-e*Math.cos(r+U*s)*Math.sin(o+A*a),f.y=e*Math.cos(o+A*a),f.z=e*Math.sin(r+U*s)*Math.sin(o+A*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(U+y,1-A),C.push(u++)}c.push(C)}for(let d=0;d<i;d++)for(let C=0;C<t;C++){const A=c[d][C+1],y=c[d][C],I=c[d+1][C],U=c[d+1][C+1];(d!==0||o>0)&&g.push(A,y,U),(d!==i-1||l<Math.PI)&&g.push(y,I,U)}this.setIndex(g),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x_ extends Fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S_ extends Fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class M_ extends Wd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Ru(n,e,t,i){const r=y_(i);switch(t){case Rd:return n*e;case Pd:return n*e;case Dd:return n*e*2;case Ld:return n*e/r.components*r.byteLength;case ac:return n*e/r.components*r.byteLength;case Ud:return n*e*2/r.components*r.byteLength;case lc:return n*e*2/r.components*r.byteLength;case Cd:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case cc:return n*e*4/r.components*r.byteLength;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:case fl:return Math.max(n,16)*Math.max(e,8)/4;case ll:case ul:return Math.max(n,8)*Math.max(e,8)/2;case dl:case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case so:case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Id:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ll:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y_(n){switch(n){case si:case Td:return{byteLength:1,components:1};case as:case Ad:case ds:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case Wi:case rc:case Qn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function b_(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<f.length;g++){const _=f[h],x=f[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let g=0,_=f.length;g<_;g++){const x=f[g];n.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
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
#endif`,L_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,z_=`#ifdef USE_BUMPMAP
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
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Y_=`#define PI 3.141592653589793
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K_=`vec3 transformedNormal = objectNormal;
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
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gv=`uniform bool receiveShadow;
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
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,yv=`struct PhysicalMaterial {
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
}`,bv=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$v=`#ifdef USE_NORMALMAP
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
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,$0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:T_,alphahash_pars_fragment:A_,alphamap_fragment:w_,alphamap_pars_fragment:R_,alphatest_fragment:C_,alphatest_pars_fragment:P_,aomap_fragment:D_,aomap_pars_fragment:L_,batching_pars_vertex:U_,batching_vertex:I_,begin_vertex:N_,beginnormal_vertex:F_,bsdfs:O_,iridescence_fragment:B_,bumpmap_pars_fragment:z_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:G_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:K_,displacementmap_pars_vertex:Z_,displacementmap_vertex:J_,emissivemap_fragment:Q_,emissivemap_pars_fragment:ev,colorspace_fragment:tv,colorspace_pars_fragment:nv,envmap_fragment:iv,envmap_common_pars_fragment:rv,envmap_pars_fragment:sv,envmap_pars_vertex:ov,envmap_physical_pars_fragment:_v,envmap_vertex:av,fog_vertex:lv,fog_pars_vertex:cv,fog_fragment:uv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:hv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:gv,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Mv,lights_physical_fragment:Ev,lights_physical_pars_fragment:yv,lights_fragment_begin:bv,lights_fragment_maps:Tv,lights_fragment_end:Av,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Pv,map_fragment:Dv,map_pars_fragment:Lv,map_particle_fragment:Uv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Ov,morphcolor_vertex:Bv,morphnormal_vertex:zv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Vv,normal_fragment_begin:kv,normal_fragment_maps:Gv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:qv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:Zv,opaque_fragment:Jv,packing:Qv,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:u0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:h0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:S0,uv_pars_vertex:M0,uv_vertex:E0,worldpos_vertex:y0,background_vert:b0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:w0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:D0,distanceRGBA_vert:L0,distanceRGBA_frag:U0,equirect_vert:I0,equirect_frag:N0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:k0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:$0,meshphysical_vert:Y0,meshphysical_frag:j0,meshtoon_vert:K0,meshtoon_frag:Z0,points_vert:J0,points_frag:Q0,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},Me={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Cn={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Cn.physical={uniforms:zt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const $s={r:0,b:0,g:0},Pi=new oi,rx=new bt;function sx(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,u,c,f=null,h=0,g=null;function _(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function x(A){let y=!1;const I=_(A);I===null?d(a,l):I&&I.isColor&&(d(I,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,y){const I=_(y);I&&(I.isCubeTexture||I.mapping===No)?(c===void 0&&(c=new Ln(new gs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Pr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),c.material.uniforms.envMap.value=I,c.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Pi)),c.material.toneMapped=Qe.getTransfer(I.colorSpace)!==st,(f!==I||h!==I.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,g=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new Ln(new Oo(2,2),new Si({name:"BackgroundMaterial",uniforms:Pr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(I.colorSpace)!==st,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,g=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,y){A.getRGB($s,Gd(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,y,o)}function C(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:x,addToRenderList:p,dispose:C}}function ox(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,N,ne,j,re){let ae=!1;const $=f(j,ne,N);s!==$&&(s=$,u(s.object)),ae=g(T,j,ne,re),ae&&_(T,j,ne,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,y(T,N,ne,j),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return n.createVertexArray()}function u(T){return n.bindVertexArray(T)}function c(T){return n.deleteVertexArray(T)}function f(T,N,ne){const j=ne.wireframe===!0;let re=i[T.id];re===void 0&&(re={},i[T.id]=re);let ae=re[N.id];ae===void 0&&(ae={},re[N.id]=ae);let $=ae[j];return $===void 0&&($=h(l()),ae[j]=$),$}function h(T){const N=[],ne=[],j=[];for(let re=0;re<t;re++)N[re]=0,ne[re]=0,j[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ne,attributeDivisors:j,object:T,attributes:{},index:null}}function g(T,N,ne,j){const re=s.attributes,ae=N.attributes;let $=0;const te=ne.getAttributes();for(const H in te)if(te[H].location>=0){const Ee=re[H];let Se=ae[H];if(Se===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor)),Ee===void 0||Ee.attribute!==Se||Se&&Ee.data!==Se.data)return!0;$++}return s.attributesNum!==$||s.index!==j}function _(T,N,ne,j){const re={},ae=N.attributes;let $=0;const te=ne.getAttributes();for(const H in te)if(te[H].location>=0){let Ee=ae[H];Ee===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor));const Se={};Se.attribute=Ee,Ee&&Ee.data&&(Se.data=Ee.data),re[H]=Se,$++}s.attributes=re,s.attributesNum=$,s.index=j}function x(){const T=s.newAttributes;for(let N=0,ne=T.length;N<ne;N++)T[N]=0}function p(T){d(T,0)}function d(T,N){const ne=s.newAttributes,j=s.enabledAttributes,re=s.attributeDivisors;ne[T]=1,j[T]===0&&(n.enableVertexAttribArray(T),j[T]=1),re[T]!==N&&(n.vertexAttribDivisor(T,N),re[T]=N)}function C(){const T=s.newAttributes,N=s.enabledAttributes;for(let ne=0,j=N.length;ne<j;ne++)N[ne]!==T[ne]&&(n.disableVertexAttribArray(ne),N[ne]=0)}function A(T,N,ne,j,re,ae,$){$===!0?n.vertexAttribIPointer(T,N,ne,re,ae):n.vertexAttribPointer(T,N,ne,j,re,ae)}function y(T,N,ne,j){x();const re=j.attributes,ae=ne.getAttributes(),$=N.defaultAttributeValues;for(const te in ae){const H=ae[te];if(H.location>=0){let ge=re[te];if(ge===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),ge!==void 0){const Ee=ge.normalized,Se=ge.itemSize,Pe=e.get(ge);if(Pe===void 0)continue;const Ye=Pe.buffer,ie=Pe.type,he=Pe.bytesPerElement,Te=ie===n.INT||ie===n.UNSIGNED_INT||ge.gpuType===rc;if(ge.isInterleavedBufferAttribute){const xe=ge.data,De=xe.stride,Oe=ge.offset;if(xe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)d(H.location+Ve,xe.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)p(H.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ve=0;Ve<H.locationSize;Ve++)A(H.location+Ve,Se/H.locationSize,ie,Ee,De*he,(Oe+Se/H.locationSize*Ve)*he,Te)}else{if(ge.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)d(H.location+xe,ge.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let xe=0;xe<H.locationSize;xe++)p(H.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let xe=0;xe<H.locationSize;xe++)A(H.location+xe,Se/H.locationSize,ie,Ee,Se*he,Se/H.locationSize*xe*he,Te)}}else if($!==void 0){const Ee=$[te];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(H.location,Ee);break;case 3:n.vertexAttrib3fv(H.location,Ee);break;case 4:n.vertexAttrib4fv(H.location,Ee);break;default:n.vertexAttrib1fv(H.location,Ee)}}}}C()}function I(){O();for(const T in i){const N=i[T];for(const ne in N){const j=N[ne];for(const re in j)c(j[re].object),delete j[re];delete N[ne]}delete i[T]}}function U(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const ne in N){const j=N[ne];for(const re in j)c(j[re].object),delete j[re];delete N[ne]}delete i[T.id]}function D(T){for(const N in i){const ne=i[N];if(ne[T.id]===void 0)continue;const j=ne[T.id];for(const re in j)c(j[re].object),delete j[re];delete ne[T.id]}}function O(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:p,disableUnusedAttributes:C}}function ax(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];t.update(g,i,1)}function l(u,c,f,h){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=c[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==xn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==si&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Qn&&!O)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:I,maxSamples:U}}function cx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const C=s?0:i,A=C*4;let y=d.clippingState||null;l.value=y,y=c(_,h,A,g);for(let I=0;I!==A;++I)y[I]=t[I];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,g,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=g+x*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,y=g;A!==x;++A,y+=4)o.copy(f[A]).applyMatrix4(C,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function ux(n){let e=new WeakMap;function t(o,a){return a===rl?o.mapping=Tr:a===sl&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rl||a===sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new m_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const hr=4,Cu=[.125,.215,.35,.446,.526,.582],Oi=20,wa=new M_,Pu=new ot;let Ra=null,Ca=0,Pa=0,Da=!1;const Ii=(1+Math.sqrt(5))/2,cr=1/Ii,Du=[new J(-Ii,cr,0),new J(Ii,cr,0),new J(-cr,0,Ii),new J(cr,0,Ii),new J(0,Ii,-cr),new J(0,Ii,cr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Da,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ds,format:xn,colorSpace:Cr,depthBuffer:!1},r=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(s)),this._blurMaterial=dx(s,e,t)}return r}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,r){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Pu),c.toneMapping=_i,c.autoClear=!1;const g=new fc({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new Ln(new gs,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Pu),x=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const A=this._cubeSize;Ys(r,C*A,d>2?A:0,A,A),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Tr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Du[(r-s-1)%Du.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ln(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Oi-1),x=s/_,p=isFinite(s)?1+Math.floor(c*x):Oi;p>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const d=[];let C=0;for(let D=0;D<Oi;++D){const O=D/x,w=Math.exp(-O*O/2);d.push(w),D===0?C+=w:D<p&&(C+=2*w)}for(let D=0;D<d.length;D++)d[D]=d[D]/C;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const y=this._sizeLods[r],I=3*y*(r>A-hr?r-A+hr:0),U=4*(this._cubeSize-y);Ys(t,I,U,3*y,2*y),l.setRenderTarget(t),l.render(f,wa)}}function fx(n){const e=[],t=[],i=[];let r=n;const s=n-hr+1+Cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-hr?l=Cu[o-n+hr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,x=3,p=2,d=1,C=new Float32Array(x*_*g),A=new Float32Array(p*_*g),y=new Float32Array(d*_*g);for(let U=0;U<g;U++){const D=U%3*2/3-1,O=U>2?0:-1,w=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];C.set(w,x*_*U),A.set(h,p*_*U);const T=[U,U,U,U,U,U];y.set(T,d*_*U)}const I=new Mi;I.setAttribute("position",new Nn(C,x)),I.setAttribute("uv",new Nn(A,p)),I.setAttribute("faceIndex",new Nn(y,d)),e.push(I),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dx(n,e,t){const i=new Float32Array(Oi),r=new J(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Iu(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Nu(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function hx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===rl||l===sl,c=l===Tr||l===Ar;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lu(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return u&&g&&g.height>0||c&&g&&r(g)?(t===null&&(t=new Lu(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function px(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER)}function u(f){const h=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const C=g.array;x=g.version;for(let A=0,y=C.length;A<y;A+=3){const I=C[A+0],U=C[A+1],D=C[A+2];h.push(I,U,U,D,D,I)}}else if(_!==void 0){const C=_.array;x=_.version;for(let A=0,y=C.length/3-1;A<y;A+=3){const I=A+0,U=A+1,D=A+2;h.push(I,U,U,D,D,I)}}else return;const p=new(Fd(h)?kd:Vd)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function gx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){n.drawElements(i,g,s,h*o),t.update(g,i,1)}function u(h,g,_){_!==0&&(n.drawElementsInstanced(i,g,s,h*o,_),t.update(g,i,_))}function c(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=g[d];t.update(p,i,1)}function f(h,g,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/o,g[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,x,0,_);let d=0;for(let C=0;C<_;C++)d+=g[C]*x[C];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function _x(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vx(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var g=T;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let I=a.attributes.position.count*y,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*U*4*f),O=new Bd(D,I,U,f);O.type=Qn,O.needsUpdate=!0;const w=y*4;for(let N=0;N<f;N++){const ne=d[N],j=C[N],re=A[N],ae=I*U*4*N;for(let $=0;$<ne.count;$++){const te=$*w;_===!0&&(r.fromBufferAttribute(ne,$),D[ae+te+0]=r.x,D[ae+te+1]=r.y,D[ae+te+2]=r.z,D[ae+te+3]=0),x===!0&&(r.fromBufferAttribute(j,$),D[ae+te+4]=r.x,D[ae+te+5]=r.y,D[ae+te+6]=r.z,D[ae+te+7]=0),p===!0&&(r.fromBufferAttribute(re,$),D[ae+te+8]=r.x,D[ae+te+9]=r.y,D[ae+te+10]=r.z,D[ae+te+11]=re.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new ct(I,U)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function xx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const jd=new Yt,Fu=new $d(1,1),Kd=new Bd,Zd=new Jg,Jd=new Xd,Ou=[],Bu=[],zu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ou[r];if(s===void 0&&(s=new Float32Array(r),Ou[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bo(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),At(t,i)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),At(t,i)}}function Ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),At(t,i)}}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fu.compareFunction=Nd,s=Fu):s=jd,t.setTexture2D(e||s,r)}function Fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zd,r)}function Ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jd,r)}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kd,r)}function zx(n){switch(n){case 5126:return Sx;case 35664:return Mx;case 35665:return Ex;case 35666:return yx;case 35674:return bx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return wx;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Dx;case 36294:return Lx;case 36295:return Ux;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}function Hx(n,e){n.uniform1fv(this.addr,e)}function Vx(n,e){const t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function kx(n,e){const t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function Gx(n,e){const t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function Wx(n,e){const t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xx(n,e){const t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qx(n,e){const t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $x(n,e){n.uniform1iv(this.addr,e)}function Yx(n,e){n.uniform2iv(this.addr,e)}function jx(n,e){n.uniform3iv(this.addr,e)}function Kx(n,e){n.uniform4iv(this.addr,e)}function Zx(n,e){n.uniform1uiv(this.addr,e)}function Jx(n,e){n.uniform2uiv(this.addr,e)}function Qx(n,e){n.uniform3uiv(this.addr,e)}function eS(n,e){n.uniform4uiv(this.addr,e)}function tS(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jd,s[o])}function nS(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zd,s[o])}function iS(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jd,s[o])}function rS(n,e,t){const i=this.cache,r=e.length,s=Bo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kd,s[o])}function sS(n){switch(n){case 5126:return Hx;case 35664:return Vx;case 35665:return kx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return $x;case 35667:case 35671:return Yx;case 35668:case 35672:return jx;case 35669:case 35673:return Kx;case 5125:return Zx;case 36294:return Jx;case 36295:return Qx;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zx(t.type)}}class aS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class lS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function ku(n,e){n.seq.push(e),n.map[e.id]=e}function cS(n,e,t){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),o=La.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ku(t,u===void 0?new oS(a,n,e):new aS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lS(a),ku(t,f)),t=f}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uS=37297;let fS=0;function dS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wu=new Xe;function hS(n){Qe._getMatrix(Wu,Qe.workingColorSpace,n);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case xo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dS(n.getShaderSource(e),o)}else return r}function pS(n,e){const t=hS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mS(n,e){let t;switch(e){case yg:t="Linear";break;case bg:t="Reinhard";break;case Tg:t="Cineon";break;case Ag:t="ACESFilmic";break;case Rg:t="AgX";break;case Cg:t="Neutral";break;case wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new J;function gS(){Qe.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function vS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(SS,ES)}const MS=new Map;function ES(n,e){let t=$e[e];if(t===void 0){const i=MS.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(yS,bS)}function bS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ju(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function RS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function CS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TS(t),u=AS(t),c=wS(t),f=RS(t),h=CS(t),g=_S(t),_=vS(s),x=r.createProgram();let p,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),d.length>0&&(d+=`
`)):(p=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),d=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?mS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Nl(o),o=qu(o,t),o=$u(o,t),a=Nl(a),a=qu(a,t),a=$u(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=C+p+o,y=C+d+a,I=Gu(r,r.VERTEX_SHADER,A),U=Gu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,I),r.attachShader(x,U),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(N){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(x).trim(),j=r.getShaderInfoLog(I).trim(),re=r.getShaderInfoLog(U).trim();let ae=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,U);else{const te=Xu(r,I,"vertex"),H=Xu(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ne+`
`+te+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(j===""||re==="")&&($=!1);$&&(N.diagnostics={runnable:ae,programLog:ne,vertexShader:{log:j,prefix:p},fragmentShader:{log:re,prefix:d}})}r.deleteShader(I),r.deleteShader(U),O=new oo(r,x),w=xS(r,x)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,uS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=U,this}let DS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new US(e),t.set(e,i)),i}}class US{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function IS(n,e,t,i,r,s,o){const a=new zd,l=new LS,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,T,N,ne,j){const re=ne.fog,ae=j.geometry,$=w.isMeshStandardMaterial?ne.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),H=te&&te.mapping===No?te.image.height:null,ge=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const Ee=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Se=Ee!==void 0?Ee.length:0;let Pe=0;ae.morphAttributes.position!==void 0&&(Pe=1),ae.morphAttributes.normal!==void 0&&(Pe=2),ae.morphAttributes.color!==void 0&&(Pe=3);let Ye,ie,he,Te;if(ge){const rt=Cn[ge];Ye=rt.vertexShader,ie=rt.fragmentShader}else Ye=w.vertexShader,ie=w.fragmentShader,l.update(w),he=l.getVertexShaderID(w),Te=l.getFragmentShaderID(w);const xe=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Oe=j.isInstancedMesh===!0,Ve=j.isBatchedMesh===!0,ut=!!w.map,R=!!w.matcap,L=!!te,E=!!w.aoMap,oe=!!w.lightMap,K=!!w.bumpMap,Y=!!w.normalMap,ee=!!w.displacementMap,le=!!w.emissiveMap,Q=!!w.metalnessMap,S=!!w.roughnessMap,v=w.anisotropy>0,P=w.clearcoat>0,z=w.dispersion>0,G=w.iridescence>0,W=w.sheen>0,me=w.transmission>0,ue=v&&!!w.anisotropyMap,de=P&&!!w.clearcoatMap,Le=P&&!!w.clearcoatNormalMap,ce=P&&!!w.clearcoatRoughnessMap,_e=G&&!!w.iridescenceMap,Ce=G&&!!w.iridescenceThicknessMap,Ue=W&&!!w.sheenColorMap,ve=W&&!!w.sheenRoughnessMap,Be=!!w.specularMap,ze=!!w.specularColorMap,pe=!!w.specularIntensityMap,m=me&&!!w.transmissionMap,V=me&&!!w.thicknessMap,X=!!w.gradientMap,se=!!w.alphaMap,Ae=w.alphaTest>0,be=!!w.alphaHash,We=!!w.extensions;let gt=_i;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Ct={shaderID:ge,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:ie,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&j._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&j.instanceColor!==null,instancingMorph:Oe&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:R,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:H,aoMap:E,lightMap:oe,bumpMap:K,normalMap:Y,displacementMap:h&&ee,emissiveMap:le,normalMapObjectSpace:Y&&w.normalMapType===Ig,normalMapTangentSpace:Y&&w.normalMapType===Ug,metalnessMap:Q,roughnessMap:S,anisotropy:v,anisotropyMap:ue,clearcoat:P,clearcoatMap:de,clearcoatNormalMap:Le,clearcoatRoughnessMap:ce,dispersion:z,iridescence:G,iridescenceMap:_e,iridescenceThicknessMap:Ce,sheen:W,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:Be,specularColorMap:ze,specularIntensityMap:pe,transmission:me,transmissionMap:m,thicknessMap:V,gradientMap:X,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:se,alphaTest:Ae,alphaHash:be,combine:w.combine,mapUv:ut&&x(w.map.channel),aoMapUv:E&&x(w.aoMap.channel),lightMapUv:oe&&x(w.lightMap.channel),bumpMapUv:K&&x(w.bumpMap.channel),normalMapUv:Y&&x(w.normalMap.channel),displacementMapUv:ee&&x(w.displacementMap.channel),emissiveMapUv:le&&x(w.emissiveMap.channel),metalnessMapUv:Q&&x(w.metalnessMap.channel),roughnessMapUv:S&&x(w.roughnessMap.channel),anisotropyMapUv:ue&&x(w.anisotropyMap.channel),clearcoatMapUv:de&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(w.sheenRoughnessMap.channel),specularMapUv:Be&&x(w.specularMap.channel),specularColorMapUv:ze&&x(w.specularColorMap.channel),specularIntensityMapUv:pe&&x(w.specularIntensityMap.channel),transmissionMapUv:m&&x(w.transmissionMap.channel),thicknessMapUv:V&&x(w.thicknessMap.channel),alphaMapUv:se&&x(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Y||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ae.attributes.uv&&(ut||se),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:De,skinning:j.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:le&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jn,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:We&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ct.vertexUv1s=u.has(1),Ct.vertexUv2s=u.has(2),Ct.vertexUv3s=u.has(3),u.clear(),Ct}function d(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)T.push(N),T.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(C(T,w),A(T,w),T.push(n.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function C(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function A(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const T=_[w.type];let N;if(T){const ne=Cn[T];N=f_.clone(ne.uniforms)}else N=w.uniforms;return N}function I(w,T){let N;for(let ne=0,j=c.length;ne<j;ne++){const re=c[ne];if(re.cacheKey===T){N=re,++N.usedTimes;break}}return N===void 0&&(N=new PS(n,T,w,s),c.push(N)),N}function U(w){if(--w.usedTimes===0){const T=c.indexOf(w);c[T]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:I,releaseProgram:U,releaseShaderCache:D,programs:c,dispose:O}}function NS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,g,_,x,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,g,_,x,p){const d=o(f,h,g,_,x,p);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):t.push(d)}function l(f,h,g,_,x,p){const d=o(f,h,g,_,x,p);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||FS),i.length>1&&i.sort(h||Ku),r.length>1&&r.sort(h||Ku)}function c(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function OS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zu,n.set(i,[o])):r>=s.length?(o=new Zu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new ot};break;case"SpotLight":t={position:new J,direction:new J,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function zS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HS=0;function VS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kS(n){const e=new BS,t=zS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new J);const r=new J,s=new bt,o=new bt;function a(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,_=0,x=0,p=0,d=0,C=0,A=0,y=0,I=0,U=0,D=0;u.sort(VS);for(let w=0,T=u.length;w<T;w++){const N=u[w],ne=N.color,j=N.intensity,re=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=ne.r*j,f+=ne.g*j,h+=ne.b*j;else if(N.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(N.sh.coefficients[$],j);D++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const te=N.shadow,H=t.get(N);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=ae,i.directionalShadowMatrix[g]=N.shadow.matrix,C++}i.directional[g]=$,g++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(ne).multiplyScalar(j),$.distance=re,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,i.spot[x]=$;const te=N.shadow;if(N.map&&(i.spotLightMap[I]=N.map,I++,te.updateMatrices(N),N.castShadow&&U++),i.spotLightMatrix[x]=te.matrix,N.castShadow){const H=t.get(N);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=ae,y++}x++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(ne).multiplyScalar(j),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=$,p++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const te=N.shadow,H=t.get(N);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=N.shadow.matrix,A++}i.point[_]=$,_++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(j),$.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[d]=$,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==g||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==d||O.numDirectionalShadows!==C||O.numPointShadows!==A||O.numSpotShadows!==y||O.numSpotMaps!==I||O.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+I-U,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=D,O.directionalLength=g,O.pointLength=_,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=d,O.numDirectionalShadows=C,O.numPointShadows=A,O.numSpotShadows=y,O.numSpotMaps=I,O.numLightProbes=D,i.version=HS++)}function l(u,c){let f=0,h=0,g=0,_=0,x=0;const p=c.matrixWorldInverse;for(let d=0,C=u.length;d<C;d++){const A=u[d];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(A.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),g++}else if(A.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Ju(n){const e=new kS(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ju(n),e.set(r,[a])):s>=o.length?(a=new Ju(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,e,t){let i=new qd;const r=new ct,s=new ct,o=new xt,a=new x_({depthPacking:Lg}),l=new S_,u={},c=t.maxTextureSize,f={[xi]:$t,[$t]:xi,[Jn]:Jn},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new Mi;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ln(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let d=this.type;this.render=function(U,D,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const w=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(gi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const j=d!==$n&&this.type===$n,re=d===$n&&this.type!==$n;for(let ae=0,$=U.length;ae<$;ae++){const te=U[ae],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ge=H.getFrameExtents();if(r.multiply(ge),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ge.x),r.x=s.x*ge.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ge.y),r.y=s.y*ge.y,H.mapSize.y=s.y)),H.map===null||j===!0||re===!0){const Se=this.type!==$n?{minFilter:En,magFilter:En}:{};H.map!==null&&H.map.dispose(),H.map=new Xi(r.x,r.y,Se),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Ee=H.getViewportCount();for(let Se=0;Se<Ee;Se++){const Pe=H.getViewport(Se);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),ne.viewport(o),H.updateMatrices(te,Se),i=H.getFrustum(),y(D,O,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&C(H,O),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,T,N)};function C(U,D){const O=e.update(x);h.defines.VSM_SAMPLES!==U.blurSamples&&(h.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Xi(r.x,r.y)),h.uniforms.shadow_pass.value=U.map.texture,h.uniforms.resolution.value=U.mapSize,h.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(D,null,O,h,x,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(D,null,O,g,x,null)}function A(U,D,O,w){let T=null;const N=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)T=N;else if(T=O.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ne=T.uuid,j=D.uuid;let re=u[ne];re===void 0&&(re={},u[ne]=re);let ae=re[j];ae===void 0&&(ae=T.clone(),re[j]=ae,D.addEventListener("dispose",I)),T=ae}if(T.visible=D.visible,T.wireframe=D.wireframe,w===$n?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:f[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ne=n.properties.get(T);ne.light=O}return T}function y(U,D,O,w,T){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===$n)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const j=e.update(U),re=U.material;if(Array.isArray(re)){const ae=j.groups;for(let $=0,te=ae.length;$<te;$++){const H=ae[$],ge=re[H.materialIndex];if(ge&&ge.visible){const Ee=A(U,ge,w,T);U.onBeforeShadow(n,U,D,O,j,Ee,H),n.renderBufferDirect(O,null,j,Ee,U,H),U.onAfterShadow(n,U,D,O,j,Ee,H)}}}else if(re.visible){const ae=A(U,re,w,T);U.onBeforeShadow(n,U,D,O,j,ae,null),n.renderBufferDirect(O,null,j,ae,U,null),U.onAfterShadow(n,U,D,O,j,ae,null)}}const ne=U.children;for(let j=0,re=ne.length;j<re;j++)y(ne[j],D,O,w,T)}function I(U){U.target.removeEventListener("dispose",I);for(const O in u){const w=u[O],T=U.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const $S={[Za]:Ja,[Qa]:nl,[el]:il,[br]:tl,[Ja]:Za,[nl]:Qa,[il]:el,[tl]:br};function YS(n,e){function t(){let m=!1;const V=new xt;let X=null;const se=new xt(0,0,0,0);return{setMask:function(Ae){X!==Ae&&!m&&(n.colorMask(Ae,Ae,Ae,Ae),X=Ae)},setLocked:function(Ae){m=Ae},setClear:function(Ae,be,We,gt,Ct){Ct===!0&&(Ae*=gt,be*=gt,We*=gt),V.set(Ae,be,We,gt),se.equals(V)===!1&&(n.clearColor(Ae,be,We,gt),se.copy(V))},reset:function(){m=!1,X=null,se.set(-1,0,0,0)}}}function i(){let m=!1,V=!1,X=null,se=null,Ae=null;return{setReversed:function(be){if(V!==be){const We=e.get("EXT_clip_control");V?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const gt=Ae;Ae=null,this.setClear(gt)}V=be},getReversed:function(){return V},setTest:function(be){be?xe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(be){X!==be&&!m&&(n.depthMask(be),X=be)},setFunc:function(be){if(V&&(be=$S[be]),se!==be){switch(be){case Za:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case el:n.depthFunc(n.EQUAL);break;case tl:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=be}},setLocked:function(be){m=be},setClear:function(be){Ae!==be&&(V&&(be=1-be),n.clearDepth(be),Ae=be)},reset:function(){m=!1,X=null,se=null,Ae=null,V=!1}}}function r(){let m=!1,V=null,X=null,se=null,Ae=null,be=null,We=null,gt=null,Ct=null;return{setTest:function(rt){m||(rt?xe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(rt){V!==rt&&!m&&(n.stencilMask(rt),V=rt)},setFunc:function(rt,dn,zn){(X!==rt||se!==dn||Ae!==zn)&&(n.stencilFunc(rt,dn,zn),X=rt,se=dn,Ae=zn)},setOp:function(rt,dn,zn){(be!==rt||We!==dn||gt!==zn)&&(n.stencilOp(rt,dn,zn),be=rt,We=dn,gt=zn)},setLocked:function(rt){m=rt},setClear:function(rt){Ct!==rt&&(n.clearStencil(rt),Ct=rt)},reset:function(){m=!1,V=null,X=null,se=null,Ae=null,be=null,We=null,gt=null,Ct=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,g=[],_=null,x=!1,p=null,d=null,C=null,A=null,y=null,I=null,U=null,D=new ot(0,0,0),O=0,w=!1,T=null,N=null,ne=null,j=null,re=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=te>=2);let ge=null,Ee={};const Se=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),Ye=new xt().fromArray(Se),ie=new xt().fromArray(Pe);function he(m,V,X,se){const Ae=new Uint8Array(4),be=n.createTexture();n.bindTexture(m,be),n.texParameteri(m,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(m,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<X;We++)m===n.TEXTURE_3D||m===n.TEXTURE_2D_ARRAY?n.texImage3D(V,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(V+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return be}const Te={};Te[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),o.setFunc(br),K(!1),Y(ru),xe(n.CULL_FACE),E(gi);function xe(m){c[m]!==!0&&(n.enable(m),c[m]=!0)}function De(m){c[m]!==!1&&(n.disable(m),c[m]=!1)}function Oe(m,V){return f[m]!==V?(n.bindFramebuffer(m,V),f[m]=V,m===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=V),m===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=V),!0):!1}function Ve(m,V){let X=g,se=!1;if(m){X=h.get(V),X===void 0&&(X=[],h.set(V,X));const Ae=m.textures;if(X.length!==Ae.length||X[0]!==n.COLOR_ATTACHMENT0){for(let be=0,We=Ae.length;be<We;be++)X[be]=n.COLOR_ATTACHMENT0+be;X.length=Ae.length,se=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,se=!0);se&&n.drawBuffers(X)}function ut(m){return _!==m?(n.useProgram(m),_=m,!0):!1}const R={[Fi]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[sg]:n.FUNC_REVERSE_SUBTRACT};R[og]=n.MIN,R[ag]=n.MAX;const L={[lg]:n.ZERO,[cg]:n.ONE,[ug]:n.SRC_COLOR,[ja]:n.SRC_ALPHA,[gg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[dg]:n.DST_ALPHA,[fg]:n.ONE_MINUS_SRC_COLOR,[Ka]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[hg]:n.ONE_MINUS_DST_ALPHA,[_g]:n.CONSTANT_COLOR,[vg]:n.ONE_MINUS_CONSTANT_COLOR,[xg]:n.CONSTANT_ALPHA,[Sg]:n.ONE_MINUS_CONSTANT_ALPHA};function E(m,V,X,se,Ae,be,We,gt,Ct,rt){if(m===gi){x===!0&&(De(n.BLEND),x=!1);return}if(x===!1&&(xe(n.BLEND),x=!0),m!==ig){if(m!==p||rt!==w){if((d!==Fi||y!==Fi)&&(n.blendEquation(n.FUNC_ADD),d=Fi,y=Fi),rt)switch(m){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}else switch(m){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}C=null,A=null,I=null,U=null,D.set(0,0,0),O=0,p=m,w=rt}return}Ae=Ae||V,be=be||X,We=We||se,(V!==d||Ae!==y)&&(n.blendEquationSeparate(R[V],R[Ae]),d=V,y=Ae),(X!==C||se!==A||be!==I||We!==U)&&(n.blendFuncSeparate(L[X],L[se],L[be],L[We]),C=X,A=se,I=be,U=We),(gt.equals(D)===!1||Ct!==O)&&(n.blendColor(gt.r,gt.g,gt.b,Ct),D.copy(gt),O=Ct),p=m,w=!1}function oe(m,V){m.side===Jn?De(n.CULL_FACE):xe(n.CULL_FACE);let X=m.side===$t;V&&(X=!X),K(X),m.blending===xr&&m.transparent===!1?E(gi):E(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),o.setFunc(m.depthFunc),o.setTest(m.depthTest),o.setMask(m.depthWrite),s.setMask(m.colorWrite);const se=m.stencilWrite;a.setTest(se),se&&(a.setMask(m.stencilWriteMask),a.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),a.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),le(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(m){T!==m&&(m?n.frontFace(n.CW):n.frontFace(n.CCW),T=m)}function Y(m){m!==eg?(xe(n.CULL_FACE),m!==N&&(m===ru?n.cullFace(n.BACK):m===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),N=m}function ee(m){m!==ne&&($&&n.lineWidth(m),ne=m)}function le(m,V,X){m?(xe(n.POLYGON_OFFSET_FILL),(j!==V||re!==X)&&(n.polygonOffset(V,X),j=V,re=X)):De(n.POLYGON_OFFSET_FILL)}function Q(m){m?xe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function S(m){m===void 0&&(m=n.TEXTURE0+ae-1),ge!==m&&(n.activeTexture(m),ge=m)}function v(m,V,X){X===void 0&&(ge===null?X=n.TEXTURE0+ae-1:X=ge);let se=Ee[X];se===void 0&&(se={type:void 0,texture:void 0},Ee[X]=se),(se.type!==m||se.texture!==V)&&(ge!==X&&(n.activeTexture(X),ge=X),n.bindTexture(m,V||Te[m]),se.type=m,se.texture=V)}function P(){const m=Ee[ge];m!==void 0&&m.type!==void 0&&(n.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function Ue(m){Ye.equals(m)===!1&&(n.scissor(m.x,m.y,m.z,m.w),Ye.copy(m))}function ve(m){ie.equals(m)===!1&&(n.viewport(m.x,m.y,m.z,m.w),ie.copy(m))}function Be(m,V){let X=u.get(V);X===void 0&&(X=new WeakMap,u.set(V,X));let se=X.get(m);se===void 0&&(se=n.getUniformBlockIndex(V,m.name),X.set(m,se))}function ze(m,V){const se=u.get(V).get(m);l.get(V)!==se&&(n.uniformBlockBinding(V,se,m.__bindingPointIndex),l.set(V,se))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ge=null,Ee={},f={},h=new WeakMap,g=[],_=null,x=!1,p=null,d=null,C=null,A=null,y=null,I=null,U=null,D=new ot(0,0,0),O=0,w=!1,T=null,N=null,ne=null,j=null,re=null,Ye.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:xe,disable:De,bindFramebuffer:Oe,drawBuffers:Ve,useProgram:ut,setBlending:E,setMaterial:oe,setFlipSided:K,setCullFace:Y,setLineWidth:ee,setPolygonOffset:le,setScissorTest:Q,activeTexture:S,bindTexture:v,unbindTexture:P,compressedTexImage2D:z,compressedTexImage3D:G,texImage2D:_e,texImage3D:Ce,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:ce,texSubImage2D:W,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:de,scissor:Ue,viewport:ve,reset:pe}}function jS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ct,c=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return g?new OffscreenCanvas(S,v):Mo("canvas")}function x(S,v,P){let z=1;const G=Q(S);if((G.width>P||G.height>P)&&(z=P/Math.max(G.width,G.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(z*G.width),me=Math.floor(z*G.height);f===void 0&&(f=_(W,me));const ue=v?_(W,me):f;return ue.width=W,ue.height=me,ue.getContext("2d").drawImage(S,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+W+"x"+me+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function p(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(S,v,P,z,G=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=v;if(v===n.RED&&(P===n.FLOAT&&(W=n.R32F),P===n.HALF_FLOAT&&(W=n.R16F),P===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.R8UI),P===n.UNSIGNED_SHORT&&(W=n.R16UI),P===n.UNSIGNED_INT&&(W=n.R32UI),P===n.BYTE&&(W=n.R8I),P===n.SHORT&&(W=n.R16I),P===n.INT&&(W=n.R32I)),v===n.RG&&(P===n.FLOAT&&(W=n.RG32F),P===n.HALF_FLOAT&&(W=n.RG16F),P===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RG8UI),P===n.UNSIGNED_SHORT&&(W=n.RG16UI),P===n.UNSIGNED_INT&&(W=n.RG32UI),P===n.BYTE&&(W=n.RG8I),P===n.SHORT&&(W=n.RG16I),P===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RGB8UI),P===n.UNSIGNED_SHORT&&(W=n.RGB16UI),P===n.UNSIGNED_INT&&(W=n.RGB32UI),P===n.BYTE&&(W=n.RGB8I),P===n.SHORT&&(W=n.RGB16I),P===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),P===n.UNSIGNED_INT&&(W=n.RGBA32UI),P===n.BYTE&&(W=n.RGBA8I),P===n.SHORT&&(W=n.RGBA16I),P===n.INT&&(W=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const me=G?xo:Qe.getTransfer(z);P===n.FLOAT&&(W=n.RGBA32F),P===n.HALF_FLOAT&&(W=n.RGBA16F),P===n.UNSIGNED_BYTE&&(W=me===st?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(S,v){let P;return S?v===null||v===Wi||v===wr?P=n.DEPTH24_STENCIL8:v===Qn?P=n.DEPTH32F_STENCIL8:v===as&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===wr?P=n.DEPTH_COMPONENT24:v===Qn?P=n.DEPTH_COMPONENT32F:v===as&&(P=n.DEPTH_COMPONENT16),P}function I(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function U(S){const v=S.target;v.removeEventListener("dispose",U),O(v),v.isVideoTexture&&c.delete(v)}function D(S){const v=S.target;v.removeEventListener("dispose",D),T(v)}function O(S){const v=i.get(S);if(v.__webglInit===void 0)return;const P=S.source,z=h.get(P);if(z){const G=z[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&w(S),Object.keys(z).length===0&&h.delete(P)}i.remove(S)}function w(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const P=S.source,z=h.get(P);delete z[v.__cacheKey],o.memory.textures--}function T(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let G=0;G<v.__webglFramebuffer[z].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[z][G]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=S.textures;for(let z=0,G=P.length;z<G;z++){const W=i.get(P[z]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(P[z])}i.remove(S)}let N=0;function ne(){N=0}function j(){const S=N;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),N+=1,S}function re(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function ae(S,v){const P=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(P,S,v);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function $(S,v){const P=i.get(S);if(S.version>0&&P.__version!==S.version){ie(P,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function te(S,v){const P=i.get(S);if(S.version>0&&P.__version!==S.version){ie(P,S,v);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function H(S,v){const P=i.get(S);if(S.version>0&&P.__version!==S.version){he(P,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const ge={[ol]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},Ee={[En]:n.NEAREST,[Pg]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Se={[Ng]:n.NEVER,[Vg]:n.ALWAYS,[Fg]:n.LESS,[Nd]:n.LEQUAL,[Og]:n.EQUAL,[Hg]:n.GEQUAL,[Bg]:n.GREATER,[zg]:n.NOTEQUAL};function Pe(S,v){if(v.type===Qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===ra||v.magFilter===Cs||v.magFilter===zi||v.minFilter===Dn||v.minFilter===ra||v.minFilter===Cs||v.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ge[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ge[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ge[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Ee[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Ee[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===En||v.minFilter!==Cs&&v.minFilter!==zi||v.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(S,v){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",U));const z=v.source;let G=h.get(z);G===void 0&&(G={},h.set(z,G));const W=re(v);if(W!==S.__cacheKey){G[W]===void 0&&(G[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),G[W].usedTimes++;const me=G[S.__cacheKey];me!==void 0&&(G[S.__cacheKey].usedTimes--,me.usedTimes===0&&w(v)),S.__cacheKey=W,S.__webglTexture=G[W].texture}return P}function ie(S,v,P){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const G=Ye(S,v),W=v.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+P);const me=i.get(W);if(W.version!==me.__version||G===!0){t.activeTexture(n.TEXTURE0+P);const ue=Qe.getPrimaries(Qe.workingColorSpace),de=v.colorSpace===mi?null:Qe.getPrimaries(v.colorSpace),Le=v.colorSpace===mi||ue===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=x(v.image,!1,r.maxTextureSize);ce=le(v,ce);const _e=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Ue=A(v.internalFormat,_e,Ce,v.colorSpace,v.isVideoTexture);Pe(z,v);let ve;const Be=v.mipmaps,ze=v.isVideoTexture!==!0,pe=me.__version===void 0||G===!0,m=W.dataReady,V=I(v,ce);if(v.isDepthTexture)Ue=y(v.format===Rr,v.type),pe&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ue,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ce.width,ce.height,0,_e,Ce,null));else if(v.isDataTexture)if(Be.length>0){ze&&pe&&t.texStorage2D(n.TEXTURE_2D,V,Ue,Be[0].width,Be[0].height);for(let X=0,se=Be.length;X<se;X++)ve=Be[X],ze?m&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,_e,Ce,ve.data):t.texImage2D(n.TEXTURE_2D,X,Ue,ve.width,ve.height,0,_e,Ce,ve.data);v.generateMipmaps=!1}else ze?(pe&&t.texStorage2D(n.TEXTURE_2D,V,Ue,ce.width,ce.height),m&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,_e,Ce,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ce.width,ce.height,0,_e,Ce,ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,V,Ue,Be[0].width,Be[0].height,ce.depth);for(let X=0,se=Be.length;X<se;X++)if(ve=Be[X],v.format!==xn)if(_e!==null)if(ze){if(m)if(v.layerUpdates.size>0){const Ae=Ru(ve.width,ve.height,v.format,v.type);for(const be of v.layerUpdates){const We=ve.data.subarray(be*Ae/ve.data.BYTES_PER_ELEMENT,(be+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,be,ve.width,ve.height,1,_e,We)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ce.depth,_e,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ue,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?m&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ce.depth,_e,Ce,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ue,ve.width,ve.height,ce.depth,0,_e,Ce,ve.data)}else{ze&&pe&&t.texStorage2D(n.TEXTURE_2D,V,Ue,Be[0].width,Be[0].height);for(let X=0,se=Be.length;X<se;X++)ve=Be[X],v.format!==xn?_e!==null?ze?m&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?m&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,_e,Ce,ve.data):t.texImage2D(n.TEXTURE_2D,X,Ue,ve.width,ve.height,0,_e,Ce,ve.data)}else if(v.isDataArrayTexture)if(ze){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,V,Ue,ce.width,ce.height,ce.depth),m)if(v.layerUpdates.size>0){const X=Ru(ce.width,ce.height,v.format,v.type);for(const se of v.layerUpdates){const Ae=ce.data.subarray(se*X/ce.data.BYTES_PER_ELEMENT,(se+1)*X/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,_e,Ce,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ce,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ce.width,ce.height,ce.depth,0,_e,Ce,ce.data);else if(v.isData3DTexture)ze?(pe&&t.texStorage3D(n.TEXTURE_3D,V,Ue,ce.width,ce.height,ce.depth),m&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ce,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ce.width,ce.height,ce.depth,0,_e,Ce,ce.data);else if(v.isFramebufferTexture){if(pe)if(ze)t.texStorage2D(n.TEXTURE_2D,V,Ue,ce.width,ce.height);else{let X=ce.width,se=ce.height;for(let Ae=0;Ae<V;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ue,X,se,0,_e,Ce,null),X>>=1,se>>=1}}else if(Be.length>0){if(ze&&pe){const X=Q(Be[0]);t.texStorage2D(n.TEXTURE_2D,V,Ue,X.width,X.height)}for(let X=0,se=Be.length;X<se;X++)ve=Be[X],ze?m&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,_e,Ce,ve):t.texImage2D(n.TEXTURE_2D,X,Ue,_e,Ce,ve);v.generateMipmaps=!1}else if(ze){if(pe){const X=Q(ce);t.texStorage2D(n.TEXTURE_2D,V,Ue,X.width,X.height)}m&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ce,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ue,_e,Ce,ce);p(v)&&d(z),me.__version=W.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function he(S,v,P){if(v.image.length!==6)return;const z=Ye(S,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+P);const W=i.get(G);if(G.version!==W.__version||z===!0){t.activeTexture(n.TEXTURE0+P);const me=Qe.getPrimaries(Qe.workingColorSpace),ue=v.colorSpace===mi?null:Qe.getPrimaries(v.colorSpace),de=v.colorSpace===mi||me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!Le&&!ce?_e[se]=x(v.image[se],!0,r.maxCubemapSize):_e[se]=ce?v.image[se].image:v.image[se],_e[se]=le(v,_e[se]);const Ce=_e[0],Ue=s.convert(v.format,v.colorSpace),ve=s.convert(v.type),Be=A(v.internalFormat,Ue,ve,v.colorSpace),ze=v.isVideoTexture!==!0,pe=W.__version===void 0||z===!0,m=G.dataReady;let V=I(v,Ce);Pe(n.TEXTURE_CUBE_MAP,v);let X;if(Le){ze&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,V,Be,Ce.width,Ce.height);for(let se=0;se<6;se++){X=_e[se].mipmaps;for(let Ae=0;Ae<X.length;Ae++){const be=X[Ae];v.format!==xn?Ue!==null?ze?m&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,be.width,be.height,Ue,ve,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,Be,be.width,be.height,0,Ue,ve,be.data)}}}else{if(X=v.mipmaps,ze&&pe){X.length>0&&V++;const se=Q(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,V,Be,se.width,se.height)}for(let se=0;se<6;se++)if(ce){ze?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,Ue,ve,_e[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,_e[se].width,_e[se].height,0,Ue,ve,_e[se].data);for(let Ae=0;Ae<X.length;Ae++){const We=X[Ae].image[se].image;ze?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,We.width,We.height,Ue,ve,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,Be,We.width,We.height,0,Ue,ve,We.data)}}else{ze?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,ve,_e[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Ue,ve,_e[se]);for(let Ae=0;Ae<X.length;Ae++){const be=X[Ae];ze?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,Ue,ve,be.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,Be,Ue,ve,be.image[se])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),W.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Te(S,v,P,z,G,W){const me=s.convert(P.format,P.colorSpace),ue=s.convert(P.type),de=A(P.internalFormat,me,ue,P.colorSpace),Le=i.get(v),ce=i.get(P);if(ce.__renderTarget=v,!Le.__hasExternalTextures){const _e=Math.max(1,v.width>>W),Ce=Math.max(1,v.height>>W);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,W,de,_e,Ce,v.depth,0,me,ue,null):t.texImage2D(G,W,de,_e,Ce,0,me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,G,ce.__webglTexture,0,K(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,G,ce.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(S,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const z=v.depthTexture,G=z&&z.isDepthTexture?z.type:null,W=y(v.stencilBuffer,G),me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=K(v);Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,W,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,S)}else{const z=v.textures;for(let G=0;G<z.length;G++){const W=z[G],me=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),de=A(W.internalFormat,me,ue,W.colorSpace),Le=K(v);P&&Y(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,de,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,de,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,de,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ae(v.depthTexture,0);const G=z.__webglTexture,W=K(v);if(v.depthTexture.format===Sr)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===Rr)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Oe(S){const v=i.get(S),P=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",G)};z.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,S)}else if(P){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),xe(v.__webglDepthbuffer[z],S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),xe(v.__webglDepthbuffer,S,!1);else{const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(S,v,P){const z=i.get(S);v!==void 0&&Te(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Oe(S)}function ut(S){const v=S.texture,P=i.get(S),z=i.get(v);S.addEventListener("dispose",D);const G=S.textures,W=S.isWebGLCubeRenderTarget===!0,me=G.length>1;if(me||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,o.memory.textures++),W){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let de=0;de<v.mipmaps.length;de++)P.__webglFramebuffer[ue][de]=n.createFramebuffer()}else P.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)P.__webglFramebuffer[ue]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(me)for(let ue=0,de=G.length;ue<de;ue++){const Le=i.get(G[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Y(S)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<G.length;ue++){const de=G[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const Le=s.convert(de.format,de.colorSpace),ce=s.convert(de.type),_e=A(de.internalFormat,Le,ce,de.colorSpace,S.isXRRenderTarget===!0),Ce=K(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,_e,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(P.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Te(P.__webglFramebuffer[ue][de],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Te(P.__webglFramebuffer[ue],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ue=0,de=G.length;ue<de;ue++){const Le=G[ue],ce=i.get(Le);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Pe(n.TEXTURE_2D,Le),Te(P.__webglFramebuffer,S,Le,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),p(Le)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ue=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,z.__webglTexture),Pe(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Te(P.__webglFramebuffer[de],S,v,n.COLOR_ATTACHMENT0,ue,de);else Te(P.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ue,0);p(v)&&d(ue),t.unbindTexture()}S.depthBuffer&&Oe(S)}function R(S){const v=S.textures;for(let P=0,z=v.length;P<z;P++){const G=v[P];if(p(G)){const W=C(S),me=i.get(G).__webglTexture;t.bindTexture(W,me),d(W),t.unbindTexture()}}}const L=[],E=[];function oe(S){if(S.samples>0){if(Y(S)===!1){const v=S.textures,P=S.width,z=S.height;let G=n.COLOR_BUFFER_BIT;const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(S),ue=v.length>1;if(ue)for(let de=0;de<v.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<v.length;de++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const Le=i.get(v[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,P,z,0,0,P,z,G,n.NEAREST),l===!0&&(L.length=0,E.length=0,L.push(n.COLOR_ATTACHMENT0+de),S.depthBuffer&&S.resolveDepthBuffer===!1&&(L.push(W),E.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let de=0;de<v.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const Le=i.get(v[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function K(S){return Math.min(r.maxSamples,S.samples)}function Y(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(S){const v=o.render.frame;c.get(S)!==v&&(c.set(S,v),S.update())}function le(S,v){const P=S.colorSpace,z=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==Cr&&P!==mi&&(Qe.getTransfer(P)===st?(z!==xn||G!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function Q(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=Ve,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Y}function KS(n,e){function t(i,r=mi){let s;const o=Qe.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Td)return n.BYTE;if(i===Ad)return n.SHORT;if(i===as)return n.UNSIGNED_SHORT;if(i===rc)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===ds)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Cd)return n.RGB;if(i===xn)return n.RGBA;if(i===Pd)return n.LUMINANCE;if(i===Dd)return n.LUMINANCE_ALPHA;if(i===Sr)return n.DEPTH_COMPONENT;if(i===Rr)return n.DEPTH_STENCIL;if(i===Ld)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Ud)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===to||i===no||i===io||i===ro)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===ul||i===fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===hl||i===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dl||i===hl)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===El||i===yl||i===bl||i===Tl||i===Al||i===wl||i===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ml)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===so||i===Cl||i===Pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===so)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===Dl||i===Ll||i===Ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===so)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZS={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),d=this._getHandJoint(u,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QS=`
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

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:JS,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ln(new Oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends Lr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,g=null,_=null;const x=new eM,p=t.getContextAttributes();let d=null,C=null;const A=[],y=[],I=new ct;let U=null;const D=new cn;D.viewport=new xt;const O=new cn;O.viewport=new xt;const w=[D,O],T=new E_;let N=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=A[ie];return he===void 0&&(he=new Ua,A[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=A[ie];return he===void 0&&(he=new Ua,A[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=A[ie];return he===void 0&&(he=new Ua,A[ie]=he),he.getHandSpace()};function j(ie){const he=y.indexOf(ie.inputSource);if(he===-1)return;const Te=A[he];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,u||o),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function re(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",ae);for(let ie=0;ie<A.length;ie++){const he=y[ie];he!==null&&(y[ie]=null,A[ie].disconnect(he))}N=null,ne=null,x.reset(),e.setRenderTarget(d),g=null,h=null,f=null,r=null,C=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",re),r.addEventListener("inputsourceschange",ae),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Te=null,xe=null,De=null;p.depth&&(De=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=p.stencil?Rr:Sr,xe=p.stencil?wr:Wi);const Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Xi(h.textureWidth,h.textureHeight,{format:xn,type:si,depthTexture:new $d(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Xi(g.framebufferWidth,g.framebufferHeight,{format:xn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}C.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(ie){for(let he=0;he<ie.removed.length;he++){const Te=ie.removed[he],xe=y.indexOf(Te);xe>=0&&(y[xe]=null,A[xe].disconnect(Te))}for(let he=0;he<ie.added.length;he++){const Te=ie.added[he];let xe=y.indexOf(Te);if(xe===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=y.length){y.push(Te),xe=Oe;break}else if(y[Oe]===null){y[Oe]=Te,xe=Oe;break}if(xe===-1)break}const De=A[xe];De&&De.connect(Te)}}const $=new J,te=new J;function H(ie,he,Te){$.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const xe=$.distanceTo(te),De=he.projectionMatrix.elements,Oe=Te.projectionMatrix.elements,Ve=De[14]/(De[10]-1),ut=De[14]/(De[10]+1),R=(De[9]+1)/De[5],L=(De[9]-1)/De[5],E=(De[8]-1)/De[0],oe=(Oe[8]+1)/Oe[0],K=Ve*E,Y=Ve*oe,ee=xe/(-E+oe),le=ee*-E;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(ee),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),De[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Q=Ve+ee,S=ut+ee,v=K-le,P=Y+(xe-le),z=R*ut/S*Q,G=L*ut/S*Q;ie.projectionMatrix.makePerspective(v,P,z,G,Q,S),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let he=ie.near,Te=ie.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),T.near=O.near=D.near=he,T.far=O.far=D.far=Te,(N!==T.near||ne!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,ne=T.far),D.layers.mask=ie.layers.mask|2,O.layers.mask=ie.layers.mask|4,T.layers.mask=D.layers.mask|O.layers.mask;const xe=ie.parent,De=T.cameras;ge(T,xe);for(let Oe=0;Oe<De.length;Oe++)ge(De[Oe],xe);De.length===2?H(T,D,O):T.projectionMatrix.copy(D.projectionMatrix),Ee(ie,T,xe)};function Ee(ie,he,Te){Te===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Il*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)};let Se=null;function Pe(ie,he){if(c=he.getViewerPose(u||o),_=he,c!==null){const Te=c.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let xe=!1;Te.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let Oe=0;Oe<Te.length;Oe++){const Ve=Te[Oe];let ut=null;if(g!==null)ut=g.getViewport(Ve);else{const L=f.getViewSubImage(h,Ve);ut=L.viewport,Oe===0&&(e.setRenderTargetTextures(C,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(C))}let R=w[Oe];R===void 0&&(R=new cn,R.layers.enable(Oe),R.viewport=new xt,w[Oe]=R),R.matrix.fromArray(Ve.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ve.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(ut.x,ut.y,ut.width,ut.height),Oe===0&&(T.matrix.copy(R.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(R)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Oe=f.getDepthInformation(Te[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let Te=0;Te<A.length;Te++){const xe=y[Te],De=A[Te];xe!==null&&De!==void 0&&De.update(xe,he,u||o)}Se&&Se(ie,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Ye=new Yd;Ye.setAnimationLoop(Pe),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const Di=new oi,nM=new bt;function iM(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Gd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,C,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&g(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,C,A):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===$t&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===$t&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=e.get(d),A=C.envMap,y=C.envMapRotation;A&&(p.envMap.value=A,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),p.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Di)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,C,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const C=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){const y=A.program;i.uniformBlockBinding(C,y)}function u(C,A){let y=r[C.id];y===void 0&&(_(C),y=c(C),r[C.id]=y,C.addEventListener("dispose",p));const I=A.program;i.updateUBOMapping(C,I);const U=e.render.frame;s[C.id]!==U&&(h(C),s[C.id]=U)}function c(C){const A=f();C.__bindingPointIndex=A;const y=n.createBuffer(),I=C.__size,U=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const A=r[C.id],y=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let U=0,D=y.length;U<D;U++){const O=Array.isArray(y[U])?y[U]:[y[U]];for(let w=0,T=O.length;w<T;w++){const N=O[w];if(g(N,U,w,I)===!0){const ne=N.__offset,j=Array.isArray(N.value)?N.value:[N.value];let re=0;for(let ae=0;ae<j.length;ae++){const $=j[ae],te=x($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,ne+re,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,re),re+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(C,A,y,I){const U=C.value,D=A+"_"+y;if(I[D]===void 0)return typeof U=="number"||typeof U=="boolean"?I[D]=U:I[D]=U.clone(),!0;{const O=I[D];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return I[D]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function _(C){const A=C.uniforms;let y=0;const I=16;for(let D=0,O=A.length;D<O;D++){const w=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,N=w.length;T<N;T++){const ne=w[T],j=Array.isArray(ne.value)?ne.value:[ne.value];for(let re=0,ae=j.length;re<ae;re++){const $=j[re],te=x($),H=y%I,ge=H%te.boundary,Ee=H+ge;y+=ge,Ee!==0&&I-Ee<te.storage&&(y+=I-Ee),ne.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=y,y+=te.storage}}}const U=y%I;return U>0&&(y+=I-U),C.__size=y,C.__cache={},this}function x(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function p(C){const A=C.target;A.removeEventListener("dispose",p);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class sM{constructor(e={}){const{canvas:t=Gg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const C=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=_i,this.toneMappingExposure=1;const y=this;let I=!1,U=0,D=0,O=null,w=-1,T=null;const N=new xt,ne=new xt;let j=null;const re=new ot(0);let ae=0,$=t.width,te=t.height,H=1,ge=null,Ee=null;const Se=new xt(0,0,$,te),Pe=new xt(0,0,$,te);let Ye=!1;const ie=new qd;let he=!1,Te=!1;this.transmissionResolutionScale=1;const xe=new bt,De=new bt,Oe=new J,Ve=new xt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function L(){return O===null?H:1}let E=i;function oe(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",be,!1),E===null){const F="webgl2";if(E=oe(F,b),E===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let K,Y,ee,le,Q,S,v,P,z,G,W,me,ue,de,Le,ce,_e,Ce,Ue,ve,Be,ze,pe,m;function V(){K=new px(E),K.init(),ze=new KS(E,K),Y=new lx(E,K,e,ze),ee=new YS(E,K),Y.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),le=new _x(E),Q=new NS,S=new jS(E,K,ee,Q,Y,ze,le),v=new ux(y),P=new hx(y),z=new b_(E),pe=new ox(E,z),G=new mx(E,z,le,pe),W=new xx(E,G,z,le),Ue=new vx(E,Y,S),ce=new cx(Q),me=new IS(y,v,P,K,Y,pe,ce),ue=new iM(y,Q),de=new OS,Le=new GS(K),Ce=new sx(y,v,P,ee,W,g,l),_e=new qS(y,W,Y),m=new rM(E,le,Y,ee),ve=new ax(E,K,le),Be=new gx(E,K,le),le.programs=me.programs,y.capabilities=Y,y.extensions=K,y.properties=Q,y.renderLists=de,y.shadowMap=_e,y.state=ee,y.info=le}V();const X=new tM(y,E);this.xr=X,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const b=K.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=K.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize($,te,!1))},this.getSize=function(b){return b.set($,te)},this.setSize=function(b,F,q=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,te=F,t.width=Math.floor(b*H),t.height=Math.floor(F*H),q===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set($*H,te*H).floor()},this.setDrawingBufferSize=function(b,F,q){$=b,te=F,H=q,t.width=Math.floor(b*q),t.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,F,q,Z){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,F,q,Z),ee.viewport(N.copy(Se).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,F,q,Z){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,F,q,Z),ee.scissor(ne.copy(Pe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){ee.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){ge=b},this.setTransparentSort=function(b){Ee=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(b=!0,F=!0,q=!0){let Z=0;if(b){let B=!1;if(O!==null){const fe=O.texture.format;B=fe===cc||fe===lc||fe===ac}if(B){const fe=O.texture.type,ye=fe===si||fe===Wi||fe===as||fe===wr||fe===sc||fe===oc,we=Ce.getClearColor(),Re=Ce.getClearAlpha(),ke=we.r,Ge=we.g,Ie=we.b;ye?(_[0]=ke,_[1]=Ge,_[2]=Ie,_[3]=Re,E.clearBufferuiv(E.COLOR,0,_)):(x[0]=ke,x[1]=Ge,x[2]=Ie,x[3]=Re,E.clearBufferiv(E.COLOR,0,x))}else Z|=E.COLOR_BUFFER_BIT}F&&(Z|=E.DEPTH_BUFFER_BIT),q&&(Z|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ce.dispose(),de.dispose(),Le.dispose(),Q.dispose(),v.dispose(),P.dispose(),W.dispose(),pe.dispose(),m.dispose(),me.dispose(),X.dispose(),X.removeEventListener("sessionstart",vc),X.removeEventListener("sessionend",xc),Ei.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=le.autoReset,F=_e.enabled,q=_e.autoUpdate,Z=_e.needsUpdate,B=_e.type;V(),le.autoReset=b,_e.enabled=F,_e.autoUpdate=q,_e.needsUpdate=Z,_e.type=B}function be(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function We(b){const F=b.target;F.removeEventListener("dispose",We),gt(F)}function gt(b){Ct(b),Q.remove(b)}function Ct(b){const F=Q.get(b).programs;F!==void 0&&(F.forEach(function(q){me.releaseProgram(q)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,Z,B,fe){F===null&&(F=ut);const ye=B.isMesh&&B.matrixWorld.determinant()<0,we=Mh(b,F,q,Z,B);ee.setMaterial(Z,ye);let Re=q.index,ke=1;if(Z.wireframe===!0){if(Re=G.getWireframeAttribute(q),Re===void 0)return;ke=2}const Ge=q.drawRange,Ie=q.attributes.position;let Ze=Ge.start*ke,et=(Ge.start+Ge.count)*ke;fe!==null&&(Ze=Math.max(Ze,fe.start*ke),et=Math.min(et,(fe.start+fe.count)*ke)),Re!==null?(Ze=Math.max(Ze,0),et=Math.min(et,Re.count)):Ie!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,Ie.count));const Mt=et-Ze;if(Mt<0||Mt===1/0)return;pe.setup(B,Z,we,q,Re);let _t,Je=ve;if(Re!==null&&(_t=z.get(Re),Je=Be,Je.setIndex(_t)),B.isMesh)Z.wireframe===!0?(ee.setLineWidth(Z.wireframeLinewidth*L()),Je.setMode(E.LINES)):Je.setMode(E.TRIANGLES);else if(B.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),ee.setLineWidth(Ne*L()),B.isLineSegments?Je.setMode(E.LINES):B.isLineLoop?Je.setMode(E.LINE_LOOP):Je.setMode(E.LINE_STRIP)}else B.isPoints?Je.setMode(E.POINTS):B.isSprite&&Je.setMode(E.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,Rt=B._multiDrawCounts,tt=B._multiDrawCount,hn=Re?z.get(Re).bytesPerElement:1,Yi=Q.get(Z).currentProgram.getUniforms();for(let Zt=0;Zt<tt;Zt++)Yi.setValue(E,"_gl_DrawID",Zt),Je.render(Ne[Zt]/hn,Rt[Zt])}else if(B.isInstancedMesh)Je.renderInstances(Ze,Mt,B.count);else if(q.isInstancedBufferGeometry){const Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,Ne);Je.renderInstances(Ze,Mt,Rt)}else Je.render(Ze,Mt)};function rt(b,F,q){b.transparent===!0&&b.side===Jn&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,ys(b,F,q),b.side=xi,b.needsUpdate=!0,ys(b,F,q),b.side=Jn):ys(b,F,q)}this.compile=function(b,F,q=null){q===null&&(q=b),d=Le.get(q),d.init(F),A.push(d),q.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const Z=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const we=fe[ye];rt(we,q,B),Z.add(we)}else rt(fe,q,B),Z.add(fe)}),A.pop(),d=null,Z},this.compileAsync=function(b,F,q=null){const Z=this.compile(b,F,q);return new Promise(B=>{function fe(){if(Z.forEach(function(ye){Q.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){B(b);return}setTimeout(fe,10)}K.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let dn=null;function zn(b){dn&&dn(b)}function vc(){Ei.stop()}function xc(){Ei.start()}const Ei=new Yd;Ei.setAnimationLoop(zn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){dn=b,X.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},X.addEventListener("sessionstart",vc),X.addEventListener("sessionend",xc),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,O),d=Le.get(b,A.length),d.init(F),A.push(d),De.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ie.setFromProjectionMatrix(De),Te=this.localClippingEnabled,he=ce.init(this.clippingPlanes,Te),p=de.get(b,C.length),p.init(),C.push(p),X.enabled===!0&&X.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&qo(fe,F,-1/0,y.sortObjects)}qo(b,F,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ge,Ee),R=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,R&&Ce.addToRenderList(p,b),this.info.render.frame++,he===!0&&ce.beginShadows();const q=d.state.shadowsArray;_e.render(q,b,F),he===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=p.opaque,B=p.transmissive;if(d.setupLights(),F.isArrayCamera){const fe=F.cameras;if(B.length>0)for(let ye=0,we=fe.length;ye<we;ye++){const Re=fe[ye];Mc(Z,B,b,Re)}R&&Ce.render(b);for(let ye=0,we=fe.length;ye<we;ye++){const Re=fe[ye];Sc(p,b,Re,Re.viewport)}}else B.length>0&&Mc(Z,B,b,F),R&&Ce.render(b),Sc(p,b,F);O!==null&&D===0&&(S.updateMultisampleRenderTarget(O),S.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(y,b,F),pe.resetDefaultState(),w=-1,T=null,A.pop(),A.length>0?(d=A[A.length-1],he===!0&&ce.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function qo(b,F,q,Z){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ie.intersectsSprite(b)){Z&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);const ye=W.update(b),we=b.material;we.visible&&p.push(b,ye,we,q,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ie.intersectsObject(b))){const ye=W.update(b),we=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ve.copy(ye.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(we)){const Re=ye.groups;for(let ke=0,Ge=Re.length;ke<Ge;ke++){const Ie=Re[ke],Ze=we[Ie.materialIndex];Ze&&Ze.visible&&p.push(b,ye,Ze,q,Ve.z,Ie)}}else we.visible&&p.push(b,ye,we,q,Ve.z,null)}}const fe=b.children;for(let ye=0,we=fe.length;ye<we;ye++)qo(fe[ye],F,q,Z)}function Sc(b,F,q,Z){const B=b.opaque,fe=b.transmissive,ye=b.transparent;d.setupLightsView(q),he===!0&&ce.setGlobalState(y.clippingPlanes,q),Z&&ee.viewport(N.copy(Z)),B.length>0&&Es(B,F,q),fe.length>0&&Es(fe,F,q),ye.length>0&&Es(ye,F,q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Mc(b,F,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new Xi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?ds:si,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const fe=d.state.transmissionRenderTarget[Z.id],ye=Z.viewport||N;fe.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);const we=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(re),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),R&&Ce.render(q);const Re=y.toneMapping;y.toneMapping=_i;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),he===!0&&ce.setGlobalState(y.clippingPlanes,Z),Es(b,q,Z),S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ie=0,Ze=F.length;Ie<Ze;Ie++){const et=F[Ie],Mt=et.object,_t=et.geometry,Je=et.material,Ne=et.group;if(Je.side===Jn&&Mt.layers.test(Z.layers)){const Rt=Je.side;Je.side=$t,Je.needsUpdate=!0,Ec(Mt,q,Z,_t,Je,Ne),Je.side=Rt,Je.needsUpdate=!0,Ge=!0}}Ge===!0&&(S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe))}y.setRenderTarget(we),y.setClearColor(re,ae),ke!==void 0&&(Z.viewport=ke),y.toneMapping=Re}function Es(b,F,q){const Z=F.isScene===!0?F.overrideMaterial:null;for(let B=0,fe=b.length;B<fe;B++){const ye=b[B],we=ye.object,Re=ye.geometry,ke=Z===null?ye.material:Z,Ge=ye.group;we.layers.test(q.layers)&&Ec(we,F,q,Re,ke,Ge)}}function Ec(b,F,q,Z,B,fe){b.onBeforeRender(y,F,q,Z,B,fe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,F,q,Z,b,fe),B.transparent===!0&&B.side===Jn&&B.forceSinglePass===!1?(B.side=$t,B.needsUpdate=!0,y.renderBufferDirect(q,F,Z,B,b,fe),B.side=xi,B.needsUpdate=!0,y.renderBufferDirect(q,F,Z,B,b,fe),B.side=Jn):y.renderBufferDirect(q,F,Z,B,b,fe),b.onAfterRender(y,F,q,Z,B,fe)}function ys(b,F,q){F.isScene!==!0&&(F=ut);const Z=Q.get(b),B=d.state.lights,fe=d.state.shadowsArray,ye=B.state.version,we=me.getParameters(b,B.state,fe,F,q),Re=me.getProgramCacheKey(we);let ke=Z.programs;Z.environment=b.isMeshStandardMaterial?F.environment:null,Z.fog=F.fog,Z.envMap=(b.isMeshStandardMaterial?P:v).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",We),ke=new Map,Z.programs=ke);let Ge=ke.get(Re);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===ye)return bc(b,we),Ge}else we.uniforms=me.getUniforms(b),b.onBeforeCompile(we,y),Ge=me.acquireProgram(we,Re),ke.set(Re,Ge),Z.uniforms=we.uniforms;const Ie=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=ce.uniform),bc(b,we),Z.needsLights=yh(b),Z.lightsStateVersion=ye,Z.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function yc(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=oo.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function bc(b,F){const q=Q.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Mh(b,F,q,Z,B){F.isScene!==!0&&(F=ut),S.resetTextureUnits();const fe=F.fog,ye=Z.isMeshStandardMaterial?F.environment:null,we=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Cr,Re=(Z.isMeshStandardMaterial?P:v).get(Z.envMap||ye),ke=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ie=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,et=!!q.morphAttributes.color;let Mt=_i;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=_t!==void 0?_t.length:0,Ne=Q.get(Z),Rt=d.state.lights;if(he===!0&&(Te===!0||b!==T)){const Ot=b===T&&Z.id===w;ce.setState(Z,b,Ot)}let tt=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Rt.state.version||Ne.outputColorSpace!==we||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Re||Z.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Ge||Ne.morphTargets!==Ie||Ne.morphNormals!==Ze||Ne.morphColors!==et||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,Ne.__version=Z.version);let hn=Ne.currentProgram;tt===!0&&(hn=ys(Z,F,B));let Yi=!1,Zt=!1,Nr=!1;const dt=hn.getUniforms(),rn=Ne.uniforms;if(ee.useProgram(hn.program)&&(Yi=!0,Zt=!0,Nr=!0),Z.id!==w&&(w=Z.id,Zt=!0),Yi||T!==b){ee.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),Xg(xe),qg(xe),dt.setValue(E,"projectionMatrix",xe)):dt.setValue(E,"projectionMatrix",b.projectionMatrix),dt.setValue(E,"viewMatrix",b.matrixWorldInverse);const kt=dt.map.cameraPosition;kt!==void 0&&kt.setValue(E,Oe.setFromMatrixPosition(b.matrixWorld)),Y.logarithmicDepthBuffer&&dt.setValue(E,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(E,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,Zt=!0,Nr=!0)}if(B.isSkinnedMesh){dt.setOptional(E,B,"bindMatrix"),dt.setOptional(E,B,"bindMatrixInverse");const Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),dt.setValue(E,"boneTexture",Ot.boneTexture,S))}B.isBatchedMesh&&(dt.setOptional(E,B,"batchingTexture"),dt.setValue(E,"batchingTexture",B._matricesTexture,S),dt.setOptional(E,B,"batchingIdTexture"),dt.setValue(E,"batchingIdTexture",B._indirectTexture,S),dt.setOptional(E,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(E,"batchingColorTexture",B._colorsTexture,S));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Ue.update(B,q,hn),(Zt||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,dt.setValue(E,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(rn.envMap.value=Re,rn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),Zt&&(dt.setValue(E,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Eh(rn,Nr),fe&&Z.fog===!0&&ue.refreshFogUniforms(rn,fe),ue.refreshMaterialUniforms(rn,Z,H,te,d.state.transmissionRenderTarget[b.id]),oo.upload(E,yc(Ne),rn,S)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(oo.upload(E,yc(Ne),rn,S),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(E,"center",B.center),dt.setValue(E,"modelViewMatrix",B.modelViewMatrix),dt.setValue(E,"normalMatrix",B.normalMatrix),dt.setValue(E,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ot=Z.uniformsGroups;for(let kt=0,$o=Ot.length;kt<$o;kt++){const yi=Ot[kt];m.update(yi,hn),m.bind(yi,hn)}}return hn}function Eh(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function yh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,F,q){Q.get(b.texture).__webglTexture=F,Q.get(b.depthTexture).__webglTexture=q;const Z=Q.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const q=Q.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const bh=E.createFramebuffer();this.setRenderTarget=function(b,F=0,q=0){O=b,U=F,D=q;let Z=!0,B=null,fe=!1,ye=!1;if(b){const Re=Q.get(b);if(Re.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(E.FRAMEBUFFER,null),Z=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(Re.__hasExternalTextures)S.rebindTextures(b,Q.get(b.texture).__webglTexture,Q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&Q.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const Ge=Q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?B=Ge[F][q]:B=Ge[F],fe=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?B=Q.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[q]:B=Ge,N.copy(b.viewport),ne.copy(b.scissor),j=b.scissorTest}else N.copy(Se).multiplyScalar(H).floor(),ne.copy(Pe).multiplyScalar(H).floor(),j=Ye;if(q!==0&&(B=bh),ee.bindFramebuffer(E.FRAMEBUFFER,B)&&Z&&ee.drawBuffers(b,B),ee.viewport(N),ee.scissor(ne),ee.setScissorTest(j),fe){const Re=Q.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,q)}else if(ye){const Re=Q.get(b.texture),ke=F;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Re.__webglTexture,q,ke)}else if(b!==null&&q!==0){const Re=Q.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Re.__webglTexture,q)}w=-1},this.readRenderTargetPixels=function(b,F,q,Z,B,fe,ye){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ee.bindFramebuffer(E.FRAMEBUFFER,we);try{const Re=b.texture,ke=Re.format,Ge=Re.type;if(!Y.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Z&&q>=0&&q<=b.height-B&&E.readPixels(F,q,Z,B,ze.convert(ke),ze.convert(Ge),fe)}finally{const Re=O!==null?Q.get(O).__webglFramebuffer:null;ee.bindFramebuffer(E.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,Z,B,fe,ye){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){const Re=b.texture,ke=Re.format,Ge=Re.type;if(!Y.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-Z&&q>=0&&q<=b.height-B){ee.bindFramebuffer(E.FRAMEBUFFER,we);const Ie=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ie),E.bufferData(E.PIXEL_PACK_BUFFER,fe.byteLength,E.STREAM_READ),E.readPixels(F,q,Z,B,ze.convert(ke),ze.convert(Ge),0);const Ze=O!==null?Q.get(O).__webglFramebuffer:null;ee.bindFramebuffer(E.FRAMEBUFFER,Ze);const et=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Wg(E,et,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ie),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,fe),E.deleteBuffer(Ie),E.deleteSync(et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,q=0){b.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const Z=Math.pow(2,-q),B=Math.floor(b.image.width*Z),fe=Math.floor(b.image.height*Z),ye=F!==null?F.x:0,we=F!==null?F.y:0;S.setTexture2D(b,0),E.copyTexSubImage2D(E.TEXTURE_2D,q,0,0,ye,we,B,fe),ee.unbindTexture()};const Th=E.createFramebuffer(),Ah=E.createFramebuffer();this.copyTextureToTexture=function(b,F,q=null,Z=null,B=0,fe=null){b.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1],F=arguments[2],fe=arguments[3]||0,q=null),fe===null&&(B!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let ye,we,Re,ke,Ge,Ie,Ze,et,Mt;const _t=b.isCompressedTexture?b.mipmaps[fe]:b.image;if(q!==null)ye=q.max.x-q.min.x,we=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,Ge=q.min.y,Ie=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-B);ye=Math.floor(_t.width*sn),we=Math.floor(_t.height*sn),b.isDataArrayTexture?Re=_t.depth:b.isData3DTexture?Re=Math.floor(_t.depth*sn):Re=1,ke=0,Ge=0,Ie=0}Z!==null?(Ze=Z.x,et=Z.y,Mt=Z.z):(Ze=0,et=0,Mt=0);const Je=ze.convert(F.format),Ne=ze.convert(F.type);let Rt;F.isData3DTexture?(S.setTexture3D(F,0),Rt=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Rt=E.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Rt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=E.getParameter(E.UNPACK_ROW_LENGTH),hn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Yi=E.getParameter(E.UNPACK_SKIP_PIXELS),Zt=E.getParameter(E.UNPACK_SKIP_ROWS),Nr=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,_t.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,_t.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ie);const dt=b.isDataArrayTexture||b.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const sn=Q.get(b),Ot=Q.get(F),kt=Q.get(sn.__renderTarget),$o=Q.get(Ot.__renderTarget);ee.bindFramebuffer(E.READ_FRAMEBUFFER,kt.__webglFramebuffer),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,$o.__webglFramebuffer);for(let yi=0;yi<Re;yi++)dt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(b).__webglTexture,B,Ie+yi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(F).__webglTexture,fe,Mt+yi)),E.blitFramebuffer(ke,Ge,ye,we,Ze,et,ye,we,E.DEPTH_BUFFER_BIT,E.NEAREST);ee.bindFramebuffer(E.READ_FRAMEBUFFER,null),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Q.has(b)){const sn=Q.get(b),Ot=Q.get(F);ee.bindFramebuffer(E.READ_FRAMEBUFFER,Th),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ah);for(let kt=0;kt<Re;kt++)dt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,sn.__webglTexture,B,Ie+kt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,sn.__webglTexture,B),rn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,Mt+kt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ot.__webglTexture,fe),B!==0?E.blitFramebuffer(ke,Ge,ye,we,Ze,et,ye,we,E.COLOR_BUFFER_BIT,E.NEAREST):rn?E.copyTexSubImage3D(Rt,fe,Ze,et,Mt+kt,ke,Ge,ye,we):E.copyTexSubImage2D(Rt,fe,Ze,et,ke,Ge,ye,we);ee.bindFramebuffer(E.READ_FRAMEBUFFER,null),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else rn?b.isDataTexture||b.isData3DTexture?E.texSubImage3D(Rt,fe,Ze,et,Mt,ye,we,Re,Je,Ne,_t.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(Rt,fe,Ze,et,Mt,ye,we,Re,Je,_t.data):E.texSubImage3D(Rt,fe,Ze,et,Mt,ye,we,Re,Je,Ne,_t):b.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,fe,Ze,et,ye,we,Je,Ne,_t.data):b.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,fe,Ze,et,_t.width,_t.height,Je,_t.data):E.texSubImage2D(E.TEXTURE_2D,fe,Ze,et,ye,we,Je,Ne,_t);E.pixelStorei(E.UNPACK_ROW_LENGTH,tt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,hn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Yi),E.pixelStorei(E.UNPACK_SKIP_ROWS,Zt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Nr),fe===0&&F.generateMipmaps&&E.generateMipmap(Rt),ee.unbindTexture()},this.copyTextureToTexture3D=function(b,F,q=null,Z=null,B=0){return b.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,b=arguments[2],F=arguments[3],B=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,q,Z,B)},this.initRenderTarget=function(b){Q.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),ee.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,ee.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Qd(n,e){return function(){return n.apply(e,arguments)}}const{toString:oM}=Object.prototype,{getPrototypeOf:zo}=Object,{iterator:Ho,toStringTag:eh}=Symbol,Vo=(n=>e=>{const t=oM.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),bn=n=>(n=n.toLowerCase(),e=>Vo(e)===n),ko=n=>e=>typeof e===n,{isArray:Ir}=Array,Dr=ko("undefined");function _s(n){return n!==null&&!Dr(n)&&n.constructor!==null&&!Dr(n.constructor)&&jt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const th=bn("ArrayBuffer");function aM(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&th(n.buffer),e}const lM=ko("string"),jt=ko("function"),nh=ko("number"),vs=n=>n!==null&&typeof n=="object",cM=n=>n===!0||n===!1,ao=n=>{if(Vo(n)!=="object")return!1;const e=zo(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(eh in n)&&!(Ho in n)},uM=n=>{if(!vs(n)||_s(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},fM=bn("Date"),dM=bn("File"),hM=n=>!!(n&&typeof n.uri<"u"),pM=n=>n&&typeof n.getParts<"u",mM=bn("Blob"),gM=bn("FileList"),_M=n=>vs(n)&&jt(n.pipe);function vM(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Qu=vM(),ef=typeof Qu.FormData<"u"?Qu.FormData:void 0,xM=n=>{if(!n)return!1;if(ef&&n instanceof ef)return!0;const e=zo(n);if(!e||e===Object.prototype||!jt(n.append))return!1;const t=Vo(n);return t==="formdata"||t==="object"&&jt(n.toString)&&n.toString()==="[object FormData]"},SM=bn("URLSearchParams"),[MM,EM,yM,bM]=["ReadableStream","Request","Response","Headers"].map(bn),TM=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xs(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Ir(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(_s(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function ih(n,e){if(_s(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,rh=n=>!Dr(n)&&n!==Hi;function Fl(){const{caseless:n,skipUndefined:e}=rh(this)&&this||{},t={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=n&&ih(t,s)||s;ao(t[o])&&ao(r)?t[o]=Fl(t[o],r):ao(r)?t[o]=Fl({},r):Ir(r)?t[o]=r.slice():(!e||!Dr(r))&&(t[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&xs(arguments[r],i);return t}const AM=(n,e,t,{allOwnKeys:i}={})=>(xs(e,(r,s)=>{t&&jt(r)?Object.defineProperty(n,s,{value:Qd(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),wM=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),RM=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},CM=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&zo(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},PM=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},DM=n=>{if(!n)return null;if(Ir(n))return n;let e=n.length;if(!nh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},LM=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&zo(Uint8Array)),UM=(n,e)=>{const i=(n&&n[Ho]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},IM=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},NM=bn("HTMLFormElement"),FM=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),tf=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),OM=bn("RegExp"),sh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};xs(t,(r,s)=>{let o;(o=e(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},BM=n=>{sh(n,(e,t)=>{if(jt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(jt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},zM=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Ir(n)?i(n):i(String(n).split(e)),t},HM=()=>{},VM=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function kM(n){return!!(n&&jt(n.append)&&n[eh]==="FormData"&&n[Ho])}const GM=n=>{const e=new Array(10),t=(i,r)=>{if(vs(i)){if(e.indexOf(i)>=0)return;if(_s(i))return i;if(!("toJSON"in i)){e[r]=i;const s=Ir(i)?[]:{};return xs(i,(o,a)=>{const l=t(o,r+1);!Dr(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return t(n,0)},WM=bn("AsyncFunction"),XM=n=>n&&(vs(n)||jt(n))&&jt(n.then)&&jt(n.catch),oh=((n,e)=>n?setImmediate:e?((t,i)=>(Hi.addEventListener("message",({source:r,data:s})=>{r===Hi&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),Hi.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",jt(Hi.postMessage)),qM=typeof queueMicrotask<"u"?queueMicrotask.bind(Hi):typeof process<"u"&&process.nextTick||oh,$M=n=>n!=null&&jt(n[Ho]),k={isArray:Ir,isArrayBuffer:th,isBuffer:_s,isFormData:xM,isArrayBufferView:aM,isString:lM,isNumber:nh,isBoolean:cM,isObject:vs,isPlainObject:ao,isEmptyObject:uM,isReadableStream:MM,isRequest:EM,isResponse:yM,isHeaders:bM,isUndefined:Dr,isDate:fM,isFile:dM,isReactNativeBlob:hM,isReactNative:pM,isBlob:mM,isRegExp:OM,isFunction:jt,isStream:_M,isURLSearchParams:SM,isTypedArray:LM,isFileList:gM,forEach:xs,merge:Fl,extend:AM,trim:TM,stripBOM:wM,inherits:RM,toFlatObject:CM,kindOf:Vo,kindOfTest:bn,endsWith:PM,toArray:DM,forEachEntry:UM,matchAll:IM,isHTMLForm:NM,hasOwnProperty:tf,hasOwnProp:tf,reduceDescriptors:sh,freezeMethods:BM,toObjectSet:zM,toCamelCase:FM,noop:HM,toFiniteNumber:VM,findKey:ih,global:Hi,isContextDefined:rh,isSpecCompliantForm:kM,toJSONObject:GM,isAsyncFn:WM,isThenable:XM,setImmediate:oh,asap:qM,isIterable:$M};let Fe=class ah extends Error{static from(e,t,i,r,s,o){const a=new ah(e.message,t||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,t,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}};Fe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Fe.ERR_BAD_OPTION="ERR_BAD_OPTION";Fe.ECONNABORTED="ECONNABORTED";Fe.ETIMEDOUT="ETIMEDOUT";Fe.ERR_NETWORK="ERR_NETWORK";Fe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Fe.ERR_DEPRECATED="ERR_DEPRECATED";Fe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Fe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Fe.ERR_CANCELED="ERR_CANCELED";Fe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Fe.ERR_INVALID_URL="ERR_INVALID_URL";Fe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const YM=null;function Ol(n){return k.isPlainObject(n)||k.isArray(n)}function lh(n){return k.endsWith(n,"[]")?n.slice(0,-2):n}function Ia(n,e,t){return n?n.concat(e).map(function(r,s){return r=lh(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function jM(n){return k.isArray(n)&&!n.some(Ol)}const KM=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function Go(n,e,t){if(!k.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,d){return!k.isUndefined(d[p])});const i=t.metaTokens,r=t.visitor||f,s=t.dots,o=t.indexes,a=t.Blob||typeof Blob<"u"&&Blob,l=t.maxDepth===void 0?100:t.maxDepth,u=a&&k.isSpecCompliantForm(e);if(!k.isFunction(r))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if(k.isDate(x))return x.toISOString();if(k.isBoolean(x))return x.toString();if(!u&&k.isBlob(x))throw new Fe("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(x)||k.isTypedArray(x)?u&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function f(x,p,d){let C=x;if(k.isReactNative(e)&&k.isReactNativeBlob(x))return e.append(Ia(d,p,s),c(x)),!1;if(x&&!d&&typeof x=="object"){if(k.endsWith(p,"{}"))p=i?p:p.slice(0,-2),x=JSON.stringify(x);else if(k.isArray(x)&&jM(x)||(k.isFileList(x)||k.endsWith(p,"[]"))&&(C=k.toArray(x)))return p=lh(p),C.forEach(function(y,I){!(k.isUndefined(y)||y===null)&&e.append(o===!0?Ia([p],I,s):o===null?p:p+"[]",c(y))}),!1}return Ol(x)?!0:(e.append(Ia(d,p,s),c(x)),!1)}const h=[],g=Object.assign(KM,{defaultVisitor:f,convertValue:c,isVisitable:Ol});function _(x,p,d=0){if(!k.isUndefined(x)){if(d>l)throw new Fe("Object is too deeply nested ("+d+" levels). Max depth: "+l,Fe.ERR_FORM_DATA_DEPTH_EXCEEDED);if(h.indexOf(x)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(x),k.forEach(x,function(A,y){(!(k.isUndefined(A)||A===null)&&r.call(e,A,k.isString(y)?y.trim():y,p,g))===!0&&_(A,p?p.concat(y):[y],d+1)}),h.pop()}}if(!k.isObject(n))throw new TypeError("data must be an object");return _(n),e}function nf(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return e[i]})}function pc(n,e){this._pairs=[],n&&Go(n,this,e)}const ch=pc.prototype;ch.append=function(e,t){this._pairs.push([e,t])};ch.toString=function(e){const t=e?function(i){return e.call(this,i,nf)}:nf;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function ZM(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function uh(n,e,t){if(!e)return n;const i=t&&t.encode||ZM,r=k.isFunction(t)?{serialize:t}:t,s=r&&r.serialize;let o;if(s?o=s(e,r):o=k.isURLSearchParams(e)?e.toString():new pc(e,r).toString(i),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class rf{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(i){i!==null&&e(i)})}}const mc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},JM=typeof URLSearchParams<"u"?URLSearchParams:pc,QM=typeof FormData<"u"?FormData:null,eE=typeof Blob<"u"?Blob:null,tE={isBrowser:!0,classes:{URLSearchParams:JM,FormData:QM,Blob:eE},protocols:["http","https","file","blob","url","data"]},gc=typeof window<"u"&&typeof document<"u",Bl=typeof navigator=="object"&&navigator||void 0,nE=gc&&(!Bl||["ReactNative","NativeScript","NS"].indexOf(Bl.product)<0),iE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rE=gc&&window.location.href||"http://localhost",sE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gc,hasStandardBrowserEnv:nE,hasStandardBrowserWebWorkerEnv:iE,navigator:Bl,origin:rE},Symbol.toStringTag,{value:"Module"})),It={...sE,...tE};function oE(n,e){return Go(n,new It.classes.URLSearchParams,{visitor:function(t,i,r,s){return It.isNode&&k.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function aE(n){return k.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lE(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function fh(n){function e(t,i,r,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&k.isArray(r)?r.length:o,l?(k.hasOwnProp(r,o)?r[o]=k.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!a):((!r[o]||!k.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&k.isArray(r[o])&&(r[o]=lE(r[o])),!a)}if(k.isFormData(n)&&k.isFunction(n.entries)){const t={};return k.forEachEntry(n,(i,r)=>{e(aE(i),r,t,0)}),t}return null}const ur=(n,e)=>n!=null&&k.hasOwnProp(n,e)?n[e]:void 0;function cE(n,e,t){if(k.isString(n))try{return(e||JSON.parse)(n),k.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Ss={transitional:mc,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=k.isObject(e);if(s&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return r?JSON.stringify(fh(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){const l=ur(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return oE(e,l).toString();if((a=k.isFileList(e))||i.indexOf("multipart/form-data")>-1){const u=ur(this,"env"),c=u&&u.FormData;return Go(a?{"files[]":e}:e,c&&new c,l)}}return s||r?(t.setContentType("application/json",!1),cE(e)):e}],transformResponse:[function(e){const t=ur(this,"transitional")||Ss.transitional,i=t&&t.forcedJSONParsing,r=ur(this,"responseType"),s=r==="json";if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(i&&!r||s)){const a=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,ur(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Fe.from(l,Fe.ERR_BAD_RESPONSE,this,null,ur(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],n=>{Ss.headers[n]={}});const uE=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fE=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&uE[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},sf=Symbol("internals"),dE=/[^\x09\x20-\x7E\x80-\xFF]/g;function hE(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}function Wr(n){return n&&String(n).trim().toLowerCase()}function pE(n){return hE(n.replace(dE,""))}function lo(n){return n===!1||n==null?n:k.isArray(n)?n.map(lo):pE(String(n))}function mE(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const gE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Na(n,e,t,i,r){if(k.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!k.isString(e)){if(k.isString(i))return e.indexOf(i)!==-1;if(k.isRegExp(i))return i.test(e)}}function _E(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function vE(n,e){const t=k.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let Kt=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(a,l,u){const c=Wr(l);if(!c)throw new Error("header name must be a non-empty string");const f=k.findKey(r,c);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||l]=lo(a))}const o=(a,l)=>k.forEach(a,(u,c)=>s(u,c,l));if(k.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(k.isString(e)&&(e=e.trim())&&!gE(e))o(fE(e),t);else if(k.isObject(e)&&k.isIterable(e)){let a={},l,u;for(const c of e){if(!k.isArray(c))throw TypeError("Object iterator must return a key-value pair");a[u=c[0]]=(l=a[u])?k.isArray(l)?[...l,c[1]]:[l,c[1]]:c[1]}o(a,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=Wr(e),e){const i=k.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return mE(r);if(k.isFunction(t))return t.call(this,r,i);if(k.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Wr(e),e){const i=k.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Na(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(o){if(o=Wr(o),o){const a=k.findKey(i,o);a&&(!t||Na(i,i[a],a,t))&&(delete i[a],r=!0)}}return k.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Na(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return k.forEach(this,(r,s)=>{const o=k.findKey(i,s);if(o){t[o]=lo(r),delete t[s];return}const a=e?_E(s):String(s).trim();a!==s&&delete t[s],t[a]=lo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return k.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&k.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[sf]=this[sf]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Wr(o);i[a]||(vE(r,o),i[a]=!0)}return k.isArray(e)?e.forEach(s):s(e),this}};Kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Kt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});k.freezeMethods(Kt);function Fa(n,e){const t=this||Ss,i=e||t,r=Kt.from(i.headers);let s=i.data;return k.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function dh(n){return!!(n&&n.__CANCEL__)}let Ms=class extends Fe{constructor(e,t,i){super(e??"canceled",Fe.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function hh(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Fe("Request failed with status code "+t.status,[Fe.ERR_BAD_REQUEST,Fe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function xE(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function SE(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[s];o||(o=u),t[r]=l,i[r]=u;let f=s,h=0;for(;f!==r;)h+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),u-o<e)return;const g=c&&u-c;return g?Math.round(h*1e3/g):void 0}}function ME(n,e){let t=0,i=1e3/e,r,s;const o=(u,c=Date.now())=>{t=c,r=null,s&&(clearTimeout(s),s=null),n(...u)};return[(...u)=>{const c=Date.now(),f=c-t;f>=i?o(u,c):(r=u,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Eo=(n,e,t=3)=>{let i=0;const r=SE(50,250);return ME(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=a!=null?Math.min(o,a):o,u=Math.max(0,l-i),c=r(u);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a?(a-l)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(f)},t)},of=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},af=n=>(...e)=>k.asap(()=>n(...e)),EE=It.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,It.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(It.origin),It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent)):()=>!0,yE=It.hasStandardBrowserEnv?{write(n,e,t,i,r,s,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(e)}`];k.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),k.isString(i)&&a.push(`path=${i}`),k.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),k.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function bE(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function TE(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function ph(n,e,t){let i=!bE(e);return n&&(i||t===!1)?TE(n,e):e}const lf=n=>n instanceof Kt?{...n}:n;function qi(n,e){e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,c,f,h){return k.isPlainObject(u)&&k.isPlainObject(c)?k.merge.call({caseless:h},u,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function r(u,c,f,h){if(k.isUndefined(c)){if(!k.isUndefined(u))return i(void 0,u,f,h)}else return i(u,c,f,h)}function s(u,c){if(!k.isUndefined(c))return i(void 0,c)}function o(u,c){if(k.isUndefined(c)){if(!k.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function a(u,c,f){if(k.hasOwnProp(e,f))return i(u,c);if(k.hasOwnProp(n,f))return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(u,c,f)=>r(lf(u),lf(c),f,!0)};return k.forEach(Object.keys({...n,...e}),function(c){if(c==="__proto__"||c==="constructor"||c==="prototype")return;const f=k.hasOwnProp(l,c)?l[c]:r,h=k.hasOwnProp(n,c)?n[c]:void 0,g=k.hasOwnProp(e,c)?e[c]:void 0,_=f(h,g,c);k.isUndefined(_)&&f!==a||(t[c]=_)}),t}const mh=n=>{const e=qi({},n),t=h=>k.hasOwnProp(e,h)?e[h]:void 0,i=t("data");let r=t("withXSRFToken");const s=t("xsrfHeaderName"),o=t("xsrfCookieName");let a=t("headers");const l=t("auth"),u=t("baseURL"),c=t("allowAbsoluteUrls"),f=t("url");if(e.headers=a=Kt.from(a),e.url=uh(ph(u,f,c),n.params,n.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),k.isFormData(i)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(k.isFunction(i.getHeaders)){const h=i.getHeaders(),g=["content-type","content-length"];Object.entries(h).forEach(([_,x])=>{g.includes(_.toLowerCase())&&a.set(_,x)})}}if(It.hasStandardBrowserEnv&&(k.isFunction(r)&&(r=r(e)),r===!0||r==null&&EE(e.url))){const g=s&&o&&yE.read(o);g&&a.set(s,g)}return e},AE=typeof XMLHttpRequest<"u",wE=AE&&function(n){return new Promise(function(t,i){const r=mh(n);let s=r.data;const o=Kt.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=r,c,f,h,g,_;function x(){g&&g(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(c),r.signal&&r.signal.removeEventListener("abort",c)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function d(){if(!p)return;const A=Kt.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:A,config:n,request:p};hh(function(D){t(D),x()},function(D){i(D),x()},I),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(d)},p.onabort=function(){p&&(i(new Fe("Request aborted",Fe.ECONNABORTED,n,p)),p=null)},p.onerror=function(y){const I=y&&y.message?y.message:"Network Error",U=new Fe(I,Fe.ERR_NETWORK,n,p);U.event=y||null,i(U),p=null},p.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const I=r.transitional||mc;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new Fe(y,I.clarifyTimeoutError?Fe.ETIMEDOUT:Fe.ECONNABORTED,n,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&k.forEach(o.toJSON(),function(y,I){p.setRequestHeader(I,y)}),k.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),u&&([h,_]=Eo(u,!0),p.addEventListener("progress",h)),l&&p.upload&&([f,g]=Eo(l),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(c=A=>{p&&(i(!A||A.type?new Ms(null,n,p):A),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(c),r.signal&&(r.signal.aborted?c():r.signal.addEventListener("abort",c)));const C=xE(r.url);if(C&&It.protocols.indexOf(C)===-1){i(new Fe("Unsupported protocol "+C+":",Fe.ERR_BAD_REQUEST,n));return}p.send(s||null)})},RE=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(u){if(!r){r=!0,a();const c=u instanceof Error?u:this.reason;i.abort(c instanceof Fe?c:new Ms(c instanceof Error?c.message:c))}};let o=e&&setTimeout(()=>{o=null,s(new Fe(`timeout of ${e}ms exceeded`,Fe.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),n=null)};n.forEach(u=>u.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>k.asap(a),l}},CE=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},PE=async function*(n,e){for await(const t of DE(n))yield*CE(t,e)},DE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},cf=(n,e,t,i)=>{const r=PE(n,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await r.next();if(u){a(),l.close();return}let f=c.byteLength;if(t){let h=s+=f;t(h)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},uf=64*1024,{isFunction:Ks}=k,LE=(({Request:n,Response:e})=>({Request:n,Response:e}))(k.global),{ReadableStream:ff,TextEncoder:df}=k.global,hf=(n,...e)=>{try{return!!n(...e)}catch{return!1}},UE=n=>{n=k.merge.call({skipUndefined:!0},LE,n);const{fetch:e,Request:t,Response:i}=n,r=e?Ks(e):typeof fetch=="function",s=Ks(t),o=Ks(i);if(!r)return!1;const a=r&&Ks(ff),l=r&&(typeof df=="function"?(_=>x=>_.encode(x))(new df):async _=>new Uint8Array(await new t(_).arrayBuffer())),u=s&&a&&hf(()=>{let _=!1;const x=new t(It.origin,{body:new ff,method:"POST",get duplex(){return _=!0,"half"}}),p=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),_&&!p}),c=o&&a&&hf(()=>k.isReadableStream(new i("").body)),f={stream:c&&(_=>_.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!f[_]&&(f[_]=(x,p)=>{let d=x&&x[_];if(d)return d.call(x);throw new Fe(`Response type '${_}' is not supported`,Fe.ERR_NOT_SUPPORT,p)})});const h=async _=>{if(_==null)return 0;if(k.isBlob(_))return _.size;if(k.isSpecCompliantForm(_))return(await new t(It.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(k.isArrayBufferView(_)||k.isArrayBuffer(_))return _.byteLength;if(k.isURLSearchParams(_)&&(_=_+""),k.isString(_))return(await l(_)).byteLength},g=async(_,x)=>{const p=k.toFiniteNumber(_.getContentLength());return p??h(x)};return async _=>{let{url:x,method:p,data:d,signal:C,cancelToken:A,timeout:y,onDownloadProgress:I,onUploadProgress:U,responseType:D,headers:O,withCredentials:w="same-origin",fetchOptions:T}=mh(_),N=e||fetch;D=D?(D+"").toLowerCase():"text";let ne=RE([C,A&&A.toAbortSignal()],y),j=null;const re=ne&&ne.unsubscribe&&(()=>{ne.unsubscribe()});let ae;try{if(U&&u&&p!=="get"&&p!=="head"&&(ae=await g(O,d))!==0){let Se=new t(x,{method:"POST",body:d,duplex:"half"}),Pe;if(k.isFormData(d)&&(Pe=Se.headers.get("content-type"))&&O.setContentType(Pe),Se.body){const[Ye,ie]=of(ae,Eo(af(U)));d=cf(Se.body,uf,Ye,ie)}}k.isString(w)||(w=w?"include":"omit");const $=s&&"credentials"in t.prototype;if(k.isFormData(d)){const Se=O.getContentType();Se&&/^multipart\/form-data/i.test(Se)&&!/boundary=/i.test(Se)&&O.delete("content-type")}const te={...T,signal:ne,method:p.toUpperCase(),headers:O.normalize().toJSON(),body:d,duplex:"half",credentials:$?w:void 0};j=s&&new t(x,te);let H=await(s?N(j,T):N(x,te));const ge=c&&(D==="stream"||D==="response");if(c&&(I||ge&&re)){const Se={};["status","statusText","headers"].forEach(he=>{Se[he]=H[he]});const Pe=k.toFiniteNumber(H.headers.get("content-length")),[Ye,ie]=I&&of(Pe,Eo(af(I),!0))||[];H=new i(cf(H.body,uf,Ye,()=>{ie&&ie(),re&&re()}),Se)}D=D||"text";let Ee=await f[k.findKey(f,D)||"text"](H,_);return!ge&&re&&re(),await new Promise((Se,Pe)=>{hh(Se,Pe,{data:Ee,headers:Kt.from(H.headers),status:H.status,statusText:H.statusText,config:_,request:j})})}catch($){throw re&&re(),$&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)?Object.assign(new Fe("Network Error",Fe.ERR_NETWORK,_,j,$&&$.response),{cause:$.cause||$}):Fe.from($,$&&$.code,_,j,$&&$.response)}}},IE=new Map,gh=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let o=s.length,a=o,l,u,c=IE;for(;a--;)l=s[a],u=c.get(l),u===void 0&&c.set(l,u=a?new Map:UE(e)),c=u;return u};gh();const _c={http:YM,xhr:wE,fetch:{get:gh}};k.forEach(_c,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const pf=n=>`- ${n}`,NE=n=>k.isFunction(n)||n===null||n===!1;function FE(n,e){n=k.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let o=0;o<t;o++){i=n[o];let a;if(r=i,!NE(i)&&(r=_c[(a=String(i)).toLowerCase()],r===void 0))throw new Fe(`Unknown adapter '${a}'`);if(r&&(k.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(pf).join(`
`):" "+pf(o[0]):"as no adapter specified";throw new Fe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const _h={getAdapter:FE,adapters:_c};function Oa(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ms(null,n)}function mf(n){return Oa(n),n.headers=Kt.from(n.headers),n.data=Fa.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),_h.getAdapter(n.adapter||Ss.adapter,n)(n).then(function(i){return Oa(n),i.data=Fa.call(n,n.transformResponse,i),i.headers=Kt.from(i.headers),i},function(i){return dh(i)||(Oa(n),i&&i.response&&(i.response.data=Fa.call(n,n.transformResponse,i.response),i.response.headers=Kt.from(i.response.headers))),Promise.reject(i)})}const vh="1.15.2",Wo={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Wo[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const gf={};Wo.transitional=function(e,t,i){function r(s,o){return"[Axios v"+vh+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Fe(r(o," has been removed"+(t?" in "+t:"")),Fe.ERR_DEPRECATED);return t&&!gf[o]&&(gf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};Wo.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function OE(n,e,t){if(typeof n!="object")throw new Fe("options must be an object",Fe.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new Fe("option "+s+" must be "+l,Fe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Fe("Unknown option "+s,Fe.ERR_BAD_OPTION)}}const co={assertOptions:OE,validators:Wo},an=co.validators;let Gi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new rf,response:new rf}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=s;else if(s){const o=s.indexOf(`
`),a=o===-1?-1:s.indexOf(`
`,o+1),l=a===-1?"":s.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=qi(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&co.assertOptions(i,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean),legacyInterceptorReqResOrdering:an.transitional(an.boolean)},!1),r!=null&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:co.assertOptions(r,{encode:an.function,serialize:an.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),co.assertOptions(t,{baseUrl:an.spelling("baseURL"),withXsrfToken:an.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&k.merge(s.common,s[t.method]);s&&k.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),t.headers=Kt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(t)===!1)return;l=l&&x.synchronous;const p=t.transitional||mc;p&&p.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let c,f=0,h;if(!l){const _=[mf.bind(this),void 0];for(_.unshift(...a),_.push(...u),h=_.length,c=Promise.resolve(t);f<h;)c=c.then(_[f++],_[f++]);return c}h=a.length;let g=t;for(;f<h;){const _=a[f++],x=a[f++];try{g=_(g)}catch(p){x.call(this,p);break}}try{c=mf.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(e){e=qi(this.defaults,e);const t=ph(e.baseURL,e.url,e.allowAbsoluteUrls);return uh(t,e.params,e.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(e){Gi.prototype[e]=function(t,i){return this.request(qi(i||{},{method:e,url:t,data:(i||{}).data}))}});k.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(qi(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Gi.prototype[e]=t(),Gi.prototype[e+"Form"]=t(!0)});let BE=class xh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ms(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new xh(function(r){e=r}),cancel:e}}};function zE(n){return function(t){return n.apply(null,t)}}function HE(n){return k.isObject(n)&&n.isAxiosError===!0}const zl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(zl).forEach(([n,e])=>{zl[e]=n});function Sh(n){const e=new Gi(n),t=Qd(Gi.prototype.request,e);return k.extend(t,Gi.prototype,e,{allOwnKeys:!0}),k.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Sh(qi(n,r))},t}const St=Sh(Ss);St.Axios=Gi;St.CanceledError=Ms;St.CancelToken=BE;St.isCancel=dh;St.VERSION=vh;St.toFormData=Go;St.AxiosError=Fe;St.Cancel=St.CanceledError;St.all=function(e){return Promise.all(e)};St.spread=zE;St.isAxiosError=HE;St.mergeConfig=qi;St.AxiosHeaders=Kt;St.formToJSON=n=>fh(k.isHTMLForm(n)?new FormData(n):n);St.getAdapter=_h.getAdapter;St.HttpStatusCode=zl;St.default=St;const{Axios:_T,AxiosError:vT,CanceledError:xT,isCancel:ST,CancelToken:MT,VERSION:ET,all:yT,Cancel:bT,isAxiosError:TT,spread:AT,toFormData:wT,AxiosHeaders:RT,HttpStatusCode:CT,formToJSON:PT,getAdapter:DT,mergeConfig:LT}=St,Xo=St.create({baseURL:"http://localhost:11434/api",timeout:3e4}),VE=async(n,e)=>{try{return(await Xo.post("/generate",{model:"llama3",prompt:`基于用户信息和当前情境，生成3-5条人生路线建议。

用户信息：${JSON.stringify(n)}
当前情境：${e}

每条路线应包含：
1. 路线名称
2. 详细描述
3. 可行性（0-100%）
4. 难度等级
5. 预期收益
6. 适合的人格类型

请以JSON格式返回结果。`,format:"json",stream:!1})).data}catch(t){return console.error("Error generating route:",t),{routes:[{title:"稳定职业发展",description:"专注于当前职业，通过持续学习和努力工作获得晋升机会。",feasibility:85,difficulty:"中等",benefit:"稳定增长",personality:"风险规避型"},{title:"创业冒险",description:"利用自身技能和资源，创办自己的事业。",feasibility:45,difficulty:"高",benefit:"潜在高回报",personality:"风险偏好型"},{title:"继续教育",description:"回到学校深造，获取更高学历或专业技能。",feasibility:70,difficulty:"中等",benefit:"长期职业竞争力",personality:"学习型"}]}}},kE=async(n,e)=>{try{return(await Xo.post("/generate",{model:"llama3",prompt:`作为人生顾问，回答用户问题：${n}

当前情境：${e}

请提供详细、有深度的建议，结合现实因素和个人发展。`,stream:!1})).data.response}catch(t){return console.error("Error getting AI advice:",t),"感谢你的问题，我会认真思考并给你最适合的建议。"}},GE=async n=>{try{return(await Xo.post("/generate",{model:"llama3",prompt:`基于用户信息生成一个情境化测评场景。

用户信息：${JSON.stringify(n)}

场景应包含：
1. 具体情境描述
2. 3-4个选择选项
3. 每个选项对应的决策风格

请以JSON格式返回结果。`,format:"json",stream:!1})).data}catch(e){return console.error("Error generating scenario:",e),{scenario:"你突然获得了10万元的意外收入，你会如何处理？",options:[{text:"存入银行，作为紧急储备金",style:"风险规避型"},{text:"投资基金，追求稳健增长",style:"平衡型"},{text:"投资股票，追求高回报",style:"风险偏好型"},{text:"用于学习或提升技能",style:"成长型"}]}}},WE=async n=>{try{return(await Xo.post("/generate",{model:"llama3",prompt:`基于用户的人生路径计算后悔值。

人生路径：${JSON.stringify(n)}

请计算后悔指数（0-100）并提供详细分析。

请以JSON格式返回结果，包含：
1. regretLevel: 后悔指数
2. regretText: 后悔评级文本
3. analysis: 详细分析
4. advice: 人生建议`,format:"json",stream:!1})).data}catch(e){return console.error("Error calculating regret:",e),{regretLevel:30,regretText:"略有遗憾",analysis:"你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。",advice:"继续保持当前的平衡状态，同时勇于尝试新的机会。"}}},XE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},qE={class:"app"},$E={class:"main-content"},YE={key:0,class:"genesis-view"},jE={class:"scroll-form glass-container fade-in"},KE={class:"form-section"},ZE={class:"form-row"},JE={class:"form-group"},QE={class:"form-group"},ey={class:"form-row"},ty={class:"form-group"},ny={class:"form-group"},iy={class:"form-row"},ry={class:"form-group"},sy={class:"form-group"},oy={class:"form-row"},ay={class:"form-group"},ly={class:"form-group"},cy={class:"form-section"},uy={class:"form-row"},fy={class:"form-group"},dy={class:"form-group"},hy={class:"form-row"},py={class:"form-group"},my={class:"form-group"},gy={class:"form-row"},_y={class:"form-group full-width"},vy={class:"form-section"},xy={class:"card-front glass-container"},Sy={key:0,class:"card-back glass-container"},My=["onClick"],Ey={key:1,class:"destiny-view"},yy={class:"tree-container"},by={class:"tree-canvas",ref:"treeCanvas"},Ty={class:"tree-nodes"},Ay={class:"node-content"},wy={class:"node-actions"},Ry={class:"node-content"},Cy={class:"node-actions"},Py={class:"node-content"},Dy={class:"node-actions"},Ly={class:"node-content"},Uy={class:"node-actions"},Iy={key:2,class:"divergence-view"},Ny={class:"divergence-container glass-container"},Fy={class:"mode-switch"},Oy={key:0,class:"routes-container"},By={class:"route-header"},zy={class:"route-description"},Hy={class:"route-meta"},Vy={class:"route-actions"},ky=["onClick"],Gy=["onClick"],Wy=["onClick"],Xy=["disabled"],qy={key:1,class:"custom-route"},$y={class:"form-row"},Yy={class:"form-group"},jy={class:"form-group"},Ky={class:"form-row"},Zy={class:"form-group"},Jy={class:"form-group"},Qy={class:"form-group full-width"},eb={class:"form-group full-width"},tb={key:2,class:"multimedia-section"},nb={class:"style-selector"},ib={key:3,class:"reflection-view"},rb={class:"reflection-container"},sb={class:"compass glass-container"},ob={class:"compass-directions"},ab={class:"direction"},lb={class:"attribute-bar"},cb={class:"attribute-narrative"},ub={class:"direction"},fb={class:"attribute-bar"},db={class:"attribute-narrative"},hb={class:"direction"},pb={class:"attribute-bar"},mb={class:"attribute-narrative"},gb={class:"direction"},_b={class:"attribute-bar"},vb={class:"attribute-narrative"},xb={class:"direction"},Sb={class:"attribute-bar"},Mb={class:"attribute-narrative"},Eb={class:"visualization-section glass-container"},yb={class:"chart-container"},bb={key:0,class:"radar-chart"},Tb={key:1,class:"trend-chart"},Ab={key:2,class:"impact-chart"},wb={key:4,class:"mentorship-view"},Rb={class:"mentorship-container glass-container"},Cb={class:"ai-avatar"},Pb={class:"chat-container"},Db={class:"message-content"},Lb={key:0,class:"chat-message ai-message"},Ub={class:"chat-input"},Ib=["disabled"],Nb={class:"ai-role-selector"},Fb={class:"role-options"},Ob={key:5,class:"conclusion-view"},Bb={class:"scroll-report glass-container"},zb={class:"regret-meter"},Hb={class:"regret-bar"},Vb={class:"regret-text"},kb={class:"regret-analysis"},Gb={class:"report-content"},Wb={class:"attribute-comparison"},Xb={class:"attribute-item"},qb={class:"attribute-bar"},$b={class:"attribute-level"},Yb={class:"attribute-item"},jb={class:"attribute-bar"},Kb={class:"attribute-level"},Zb={class:"attribute-item"},Jb={class:"attribute-bar"},Qb={class:"attribute-level"},eT={class:"attribute-item"},tT={class:"attribute-bar"},nT={class:"attribute-level"},iT={class:"attribute-item"},rT={class:"attribute-bar"},sT={class:"attribute-level"},oT={class:"ai-advice"},aT={class:"celebrity-simulation"},lT={class:"celebrity-options"},cT={class:"save-section"},uT={class:"saved-paths"},fT=["onClick"],dT={__name:"App",setup(n){const e=ht("genesis"),t=ht({age:"",education:"",occupation:"",city:"",income:"",family:"",skills:"",investment:"",riskPreference:"",delayGratification:"",stressResistance:"",decisionStyle:"",lifeGoals:""}),i=ht(!1),r=ht("current"),s=ht("ai"),o=ht({title:"",description:"",feasibility:"",difficulty:"",benefit:""}),a=ht({career:75,finance:65,relationship:80,health:70,growth:85}),l=ht(""),u=ht([]),c=ht(30),f=ht("略有遗憾"),h=ht("你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。"),g=ht("基于你的人生轨迹分析，建议你在未来的发展中注重平衡职业与健康，同时保持持续学习的态度。在做出重要决策时，多考虑长期影响而非短期利益。"),_=ht({scenario:"你突然获得了10万元的意外收入，你会如何处理？",options:[{text:"存入银行，作为紧急储备金",style:"风险规避型"},{text:"投资基金，追求稳健增长",style:"平衡型"},{text:"投资股票，追求高回报",style:"风险偏好型"},{text:"用于学习或提升技能",style:"成长型"}]}),x=ht([{title:"技术专家路线",description:"专注于技术领域，通过持续学习和项目经验积累，成为行业专家。",tag:"高可行性",tagColor:"success",feasibility:85,difficulty:"中等",benefit:"高"},{title:"管理路线",description:"转向管理岗位，培养领导力和团队协作能力。",tag:"中等风险",tagColor:"important",feasibility:70,difficulty:"中等",benefit:"中高"},{title:"创业路线",description:"自主创业，追求个人理想和财务自由。",tag:"高风险",tagColor:"warning",feasibility:45,difficulty:"高",benefit:"极高"}]),p=ht(!1),d=ht(null),C=ht("治愈"),A=ht("radar"),y=ht("职场导师"),I=ht("拥有丰富的职场经验，能够为你提供职业发展建议"),U=ht(!1),D=ht([{name:"职业发展路线",date:"2026-04-20"},{name:"创业路线",date:"2026-04-15"}]),O=()=>{e.value="destiny"},w=()=>{e.value="divergence"},T=()=>{e.value="reflection"},N=()=>{e.value="mentorship"},ne=async()=>{const pe=await WE({userInfo:t.value,attributes:a.value,routes:x.value});c.value=pe.regretLevel||30,f.value=pe.regretText||"略有遗憾",h.value=pe.analysis||"你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。",g.value=pe.advice||"基于你的人生轨迹分析，建议你在未来的发展中注重平衡职业与健康，同时保持持续学习的态度。",e.value="conclusion"},j=()=>{e.value="genesis"},re=()=>{i.value=!i.value},ae=pe=>{console.log("Selected option:",pe),t.value.decisionStyle=pe,i.value=!1},$=pe=>{r.value=pe},te=()=>{s.value=s.value==="ai"?"custom":"ai"},H=async()=>{if(l.value.trim()){u.value.push(l.value);const pe=l.value;l.value="",U.value=!0;try{const m=await kE(pe,{userInfo:t.value,currentRole:y.value});u.value.push(m)}catch{u.value.push("感谢你的问题，我会认真思考并给你最适合的建议。")}finally{U.value=!1}}},ge=async()=>{try{const pe=await GE(t.value);_.value=pe}catch(pe){console.error("Error generating scenario:",pe)}},Ee=()=>{console.log("Using default model")},Se=()=>{console.log("Adding node")},Pe=()=>{console.log("Exporting tree")},Ye=()=>{console.log("Resetting tree")},ie=pe=>{console.log("Editing node:",pe)},he=pe=>{console.log("Deleting node:",pe)},Te=pe=>{console.log("Extending branch:",pe)},xe=async()=>{p.value=!0;try{const pe=await VE(t.value,"人生分岔路选择");pe.routes&&(x.value=pe.routes.map(m=>({...m,tag:m.feasibility>70?"高可行性":m.feasibility>40?"中等可行性":"低可行性",tagColor:m.feasibility>70?"success":m.feasibility>40?"important":"warning"})))}catch(pe){console.error("Error generating routes:",pe)}finally{p.value=!1}},De=pe=>{console.log("Refining route:",pe)},Oe=pe=>{console.log("Replacing route:",pe)},Ve=pe=>{d.value=pe,console.log("Selected route:",pe)},ut=()=>{console.log("Adding custom route:",o.value)},R=pe=>{const m=pe.target.files[0];console.log("Uploaded file:",m)},L=()=>{console.log("Generating comic with style:",C.value)},E=()=>{console.log("Generating video with style:",C.value)},oe=()=>{console.log("Generating poster with style:",C.value)},K=pe=>pe>=80?"level-high":pe>=60?"level-medium":"level-low",Y=pe=>pe>=80?"顶尖":pe>=60?"良好":pe>=40?"一般":"初级",ee=(pe,m)=>{const V={career:{high:"你的职业发展前景广阔，有很大的晋升空间。",medium:"你的职业发展稳定，有一定的成长机会。",low:"你的职业发展面临挑战，需要更多努力。"},finance:{high:"你的财务状况良好，有足够的储蓄和投资。",medium:"你的财务状况稳定，能够满足基本需求。",low:"你的财务状况紧张，需要更合理的规划。"},relationship:{high:"你的人际关系和谐，社交网络广泛。",medium:"你的人际关系稳定，有几个知心朋友。",low:"你的人际关系需要改善，建议主动社交。"},health:{high:"你的健康状态良好，充满活力。",medium:"你的健康状态一般，需要注意保养。",low:"你的健康状态不佳，建议加强锻炼。"},growth:{high:"你保持持续学习，个人成长迅速。",medium:"你有一定的学习意识，能够不断进步。",low:"你需要更主动地学习和成长。"}};let X="low";return m>=80?X="high":m>=60&&(X="medium"),V[pe][X]},le=()=>{A.value="radar"},Q=()=>{A.value="trend"},S=()=>{A.value="impact"},v=()=>{console.log("Refreshing social data")},P=()=>{console.log("Toggling voice input")},z=pe=>{y.value=pe;const m={职场导师:"拥有丰富的职场经验，能够为你提供职业发展建议",情感顾问:"擅长人际关系和情感问题分析，给予心理支持",创业前辈:"有成功创业经验，能够分享创业心得和建议",人生规划师:"专注于人生规划和目标设定，帮助你找到人生方向"};I.value=m[pe]},G=()=>{const pe={name:`人生轨迹_${new Date().toISOString().split("T")[0]}`,date:new Date().toISOString().split("T")[0]};D.value.push(pe),console.log("Saved current path:",pe)},W=()=>{console.log("Loading saved path")},me=pe=>{console.log("Loading path:",pe)},ue=()=>{console.log("Exporting report")},de=pe=>{console.log("Simulating celebrity:",pe)},Le=ht(null);let ce,_e,Ce,Ue;const ve=()=>{ce=new g_,_e=new cn(75,window.innerWidth/window.innerHeight,.1,1e3),Ce=new sM({alpha:!0}),Ce.setSize(window.innerWidth,window.innerHeight),Le.value.appendChild(Ce.domElement),Ue=new $r,ce.add(Ue);for(let pe=0;pe<1e3;pe++){const m=new dc(.05,8,8),V=new fc({color:16777215}),X=new Ln(m,V);X.position.x=(Math.random()-.5)*100,X.position.y=(Math.random()-.5)*100,X.position.z=(Math.random()-.5)*100,Ue.add(X)}_e.position.z=30,Be()},Be=()=>{requestAnimationFrame(Be),Ue.rotation.x+=5e-4,Ue.rotation.y+=5e-4,Ce.render(ce,_e)},ze=()=>{_e.aspect=window.innerWidth/window.innerHeight,_e.updateProjectionMatrix(),Ce.setSize(window.innerWidth,window.innerHeight)};return Jf(()=>{ve(),window.addEventListener("resize",ze)}),Ql(()=>{window.removeEventListener("resize",ze),Ce.dispose()}),(pe,m)=>(pt(),mt("div",qE,[M("div",{ref_key:"starfield",ref:Le,class:"starfield"},null,512),M("div",$E,[e.value==="genesis"?(pt(),mt("div",YE,[M("div",jE,[m[66]||(m[66]=M("h1",{class:"title"},"人生基础建模",-1)),M("div",KE,[m[53]||(m[53]=M("h2",null,"基础信息",-1)),M("div",ZE,[M("div",JE,[m[43]||(m[43]=M("label",null,"年龄",-1)),Et(M("input",{type:"number","onUpdate:modelValue":m[0]||(m[0]=V=>t.value.age=V),class:"input",placeholder:"请输入年龄"},null,512),[[pn,t.value.age]])]),M("div",QE,[m[45]||(m[45]=M("label",null,"学历",-1)),Et(M("select",{"onUpdate:modelValue":m[1]||(m[1]=V=>t.value.education=V),class:"input"},[...m[44]||(m[44]=[Rs('<option value="" data-v-f6b7f521>请选择学历</option><option value="high school" data-v-f6b7f521>高中</option><option value="college" data-v-f6b7f521>大专</option><option value="bachelor" data-v-f6b7f521>本科</option><option value="master" data-v-f6b7f521>硕士</option><option value="phd" data-v-f6b7f521>博士</option>',6)])],512),[[Vn,t.value.education]])])]),M("div",ey,[M("div",ty,[m[46]||(m[46]=M("label",null,"职业",-1)),Et(M("input",{type:"text","onUpdate:modelValue":m[2]||(m[2]=V=>t.value.occupation=V),class:"input",placeholder:"请输入职业"},null,512),[[pn,t.value.occupation]])]),M("div",ny,[m[47]||(m[47]=M("label",null,"城市",-1)),Et(M("input",{type:"text","onUpdate:modelValue":m[3]||(m[3]=V=>t.value.city=V),class:"input",placeholder:"请输入城市"},null,512),[[pn,t.value.city]])])]),M("div",iy,[M("div",ry,[m[48]||(m[48]=M("label",null,"月收入",-1)),Et(M("input",{type:"number","onUpdate:modelValue":m[4]||(m[4]=V=>t.value.income=V),class:"input",placeholder:"请输入月收入"},null,512),[[pn,t.value.income]])]),M("div",sy,[m[50]||(m[50]=M("label",null,"家庭状况",-1)),Et(M("select",{"onUpdate:modelValue":m[5]||(m[5]=V=>t.value.family=V),class:"input"},[...m[49]||(m[49]=[M("option",{value:""},"请选择",-1),M("option",{value:"single"},"单身",-1),M("option",{value:"married"},"已婚",-1),M("option",{value:"married_with_children"},"已婚有子女",-1)])],512),[[Vn,t.value.family]])])]),M("div",oy,[M("div",ay,[m[51]||(m[51]=M("label",null,"核心技能",-1)),Et(M("input",{type:"text","onUpdate:modelValue":m[6]||(m[6]=V=>t.value.skills=V),class:"input",placeholder:"请输入核心技能"},null,512),[[pn,t.value.skills]])]),M("div",ly,[m[52]||(m[52]=M("label",null,"可投入成本",-1)),Et(M("input",{type:"number","onUpdate:modelValue":m[7]||(m[7]=V=>t.value.investment=V),class:"input",placeholder:"请输入可投入成本"},null,512),[[pn,t.value.investment]])])])]),M("div",cy,[m[63]||(m[63]=M("h2",null,"人格与偏好建模",-1)),M("div",uy,[M("div",fy,[m[55]||(m[55]=M("label",null,"风险偏好",-1)),Et(M("select",{"onUpdate:modelValue":m[8]||(m[8]=V=>t.value.riskPreference=V),class:"input"},[...m[54]||(m[54]=[M("option",{value:""},"请选择",-1),M("option",{value:"risk-averse"},"风险规避",-1),M("option",{value:"moderate"},"平衡型",-1),M("option",{value:"risk-seeking"},"风险偏好",-1)])],512),[[Vn,t.value.riskPreference]])]),M("div",dy,[m[57]||(m[57]=M("label",null,"延迟满足能力",-1)),Et(M("select",{"onUpdate:modelValue":m[9]||(m[9]=V=>t.value.delayGratification=V),class:"input"},[...m[56]||(m[56]=[M("option",{value:""},"请选择",-1),M("option",{value:"low"},"低",-1),M("option",{value:"medium"},"中",-1),M("option",{value:"high"},"高",-1)])],512),[[Vn,t.value.delayGratification]])])]),M("div",hy,[M("div",py,[m[59]||(m[59]=M("label",null,"抗压能力",-1)),Et(M("select",{"onUpdate:modelValue":m[10]||(m[10]=V=>t.value.stressResistance=V),class:"input"},[...m[58]||(m[58]=[M("option",{value:""},"请选择",-1),M("option",{value:"low"},"低",-1),M("option",{value:"medium"},"中",-1),M("option",{value:"high"},"高",-1)])],512),[[Vn,t.value.stressResistance]])]),M("div",my,[m[61]||(m[61]=M("label",null,"决策风格",-1)),Et(M("select",{"onUpdate:modelValue":m[11]||(m[11]=V=>t.value.decisionStyle=V),class:"input"},[...m[60]||(m[60]=[M("option",{value:""},"请选择",-1),M("option",{value:"analytical"},"分析型",-1),M("option",{value:"intuitive"},"直觉型",-1),M("option",{value:"collaborative"},"协作型",-1)])],512),[[Vn,t.value.decisionStyle]])])]),M("div",gy,[M("div",_y,[m[62]||(m[62]=M("label",null,"人生目标",-1)),Et(M("textarea",{"onUpdate:modelValue":m[12]||(m[12]=V=>t.value.lifeGoals=V),class:"input",rows:"3",placeholder:"请输入短期和长期人生目标"},null,512),[[pn,t.value.lifeGoals]])])])]),M("div",vy,[m[65]||(m[65]=M("h2",null,"情境化测评",-1)),M("div",{class:"card-flip",onClick:re},[M("div",xy,[M("h3",null,je(_.value.scenario),1),m[64]||(m[64]=M("p",null,"点击卡片查看选项",-1))]),i.value?(pt(),mt("div",Sy,[(pt(!0),mt(en,null,ws(_.value.options,(V,X)=>(pt(),mt("div",{class:"option",key:X,onClick:se=>ae(V.style)},[M("span",null,je(V.text),1),M("small",null,je(V.style),1)],8,My))),128))])):Br("",!0)]),M("button",{class:"btn btn-secondary",onClick:ge},"生成新场景"),M("button",{class:"btn btn-secondary",onClick:Ee},"跳过使用默认模型")]),m[67]||(m[67]=Rs('<div class="privacy-section" data-v-f6b7f521><div class="seal" data-v-f6b7f521><span data-v-f6b7f521>数据安全承诺</span><p data-v-f6b7f521>我们将对您的个人信息进行脱敏加密处理，严格遵守《个人信息保护法》</p><div class="privacy-actions" data-v-f6b7f521><button class="btn btn-secondary small" data-v-f6b7f521>修改信息</button><button class="btn btn-secondary small" data-v-f6b7f521>删除数据</button><button class="btn btn-secondary small" data-v-f6b7f521>本地备份</button></div></div></div>',1)),M("button",{class:"btn btn-primary",onClick:O},"开始探索")])])):e.value==="destiny"?(pt(),mt("div",Ey,[M("div",yy,[M("div",{class:"tree-header"},[m[68]||(m[68]=M("h1",{class:"title"},"命轨",-1)),m[69]||(m[69]=M("p",null,"你的人生轨迹",-1)),M("div",{class:"tree-actions"},[M("button",{class:"btn btn-secondary small",onClick:Se},"添加节点"),M("button",{class:"btn btn-secondary small",onClick:Pe},"导出图谱"),M("button",{class:"btn btn-secondary small",onClick:Ye},"重置树状图")])]),M("div",by,[M("div",Ty,[M("div",{class:qt(["node main-node",{active:r.value==="current"}]),onClick:m[15]||(m[15]=V=>$("current"))},[M("div",Ay,[m[70]||(m[70]=M("h3",null,"当前状态",-1)),M("p",null,je(t.value.age)+"岁，"+je(t.value.occupation),1),M("div",wy,[M("button",{class:"btn btn-secondary small",onClick:m[13]||(m[13]=V=>ie("current"))},"编辑"),M("button",{class:"btn btn-secondary small",onClick:m[14]||(m[14]=V=>he("current"))},"删除")])])],2),M("div",{class:qt(["node branch-node",{active:r.value==="career"}]),onClick:m[19]||(m[19]=V=>$("career"))},[M("div",Ry,[m[71]||(m[71]=M("h3",null,"职业发展",-1)),m[72]||(m[72]=M("p",null,"晋升机会",-1)),M("div",Cy,[M("button",{class:"btn btn-secondary small",onClick:m[16]||(m[16]=V=>ie("career"))},"编辑"),M("button",{class:"btn btn-secondary small",onClick:m[17]||(m[17]=V=>he("career"))},"删除"),M("button",{class:"btn btn-secondary small",onClick:m[18]||(m[18]=V=>Te("career"))},"延伸分支")])])],2),M("div",{class:qt(["node branch-node",{active:r.value==="education"}]),onClick:m[23]||(m[23]=V=>$("education"))},[M("div",Py,[m[73]||(m[73]=M("h3",null,"继续教育",-1)),m[74]||(m[74]=M("p",null,"深造学习",-1)),M("div",Dy,[M("button",{class:"btn btn-secondary small",onClick:m[20]||(m[20]=V=>ie("education"))},"编辑"),M("button",{class:"btn btn-secondary small",onClick:m[21]||(m[21]=V=>he("education"))},"删除"),M("button",{class:"btn btn-secondary small",onClick:m[22]||(m[22]=V=>Te("education"))},"延伸分支")])])],2),M("div",{class:qt(["node branch-node",{active:r.value==="relationship"}]),onClick:m[27]||(m[27]=V=>$("relationship"))},[M("div",Ly,[m[75]||(m[75]=M("h3",null,"人际关系",-1)),m[76]||(m[76]=M("p",null,"社交拓展",-1)),M("div",Uy,[M("button",{class:"btn btn-secondary small",onClick:m[24]||(m[24]=V=>ie("relationship"))},"编辑"),M("button",{class:"btn btn-secondary small",onClick:m[25]||(m[25]=V=>he("relationship"))},"删除"),M("button",{class:"btn btn-secondary small",onClick:m[26]||(m[26]=V=>Te("relationship"))},"延伸分支")])])],2)])],512),M("div",{class:"tree-controls"},[M("button",{class:"btn btn-secondary",onClick:j},"返回"),M("button",{class:"btn btn-primary",onClick:w},"衍生路线")])])])):e.value==="divergence"?(pt(),mt("div",Iy,[M("div",Ny,[m[92]||(m[92]=M("h1",{class:"title"},"衍化",-1)),M("div",Fy,[m[78]||(m[78]=M("span",null,"AI智能生成",-1)),M("div",{class:qt(["toggle",{active:s.value==="ai"}]),onClick:te},[...m[77]||(m[77]=[M("div",{class:"toggle-thumb"},null,-1)])],2),m[79]||(m[79]=M("span",null,"玩家自定义",-1))]),s.value==="ai"?(pt(),mt("div",Oy,[(pt(!0),mt(en,null,ws(x.value,(V,X)=>(pt(),mt("div",{class:"route-card glass-container",key:X},[M("div",By,[M("h3",null,je(V.title),1),M("div",{class:qt(["route-tag",V.tagColor])},je(V.tag),3)]),M("p",zy,je(V.description),1),M("div",Hy,[M("span",null,"可行性: "+je(V.feasibility)+"%",1),M("span",null,"难度: "+je(V.difficulty),1),M("span",null,"预期收益: "+je(V.benefit),1)]),M("div",Vy,[M("button",{class:"btn btn-secondary small",onClick:se=>De(X)},"细化路线",8,ky),M("button",{class:"btn btn-secondary small",onClick:se=>Oe(X)},"替换路线",8,Gy),M("button",{class:"btn btn-primary small",onClick:se=>Ve(V)},"选择路线",8,Wy)])]))),128)),M("button",{class:"btn btn-primary",onClick:xe,disabled:p.value},je(p.value?"生成中...":"重新生成路线"),9,Xy)])):(pt(),mt("div",qy,[m[88]||(m[88]=M("h3",null,"自定义路线",-1)),M("div",$y,[M("div",Yy,[m[80]||(m[80]=M("label",null,"路线名称",-1)),Et(M("input",{type:"text","onUpdate:modelValue":m[28]||(m[28]=V=>o.value.title=V),class:"input",placeholder:"路线名称"},null,512),[[pn,o.value.title]])]),M("div",jy,[m[81]||(m[81]=M("label",null,"可行性",-1)),Et(M("input",{type:"number","onUpdate:modelValue":m[29]||(m[29]=V=>o.value.feasibility=V),class:"input",placeholder:"0-100%"},null,512),[[pn,o.value.feasibility]])])]),M("div",Ky,[M("div",Zy,[m[83]||(m[83]=M("label",null,"难度",-1)),Et(M("select",{"onUpdate:modelValue":m[30]||(m[30]=V=>o.value.difficulty=V),class:"input"},[...m[82]||(m[82]=[M("option",{value:""},"请选择",-1),M("option",{value:"低"},"低",-1),M("option",{value:"中等"},"中等",-1),M("option",{value:"高"},"高",-1)])],512),[[Vn,o.value.difficulty]])]),M("div",Jy,[m[85]||(m[85]=M("label",null,"预期收益",-1)),Et(M("select",{"onUpdate:modelValue":m[31]||(m[31]=V=>o.value.benefit=V),class:"input"},[...m[84]||(m[84]=[Rs('<option value="" data-v-f6b7f521>请选择</option><option value="低" data-v-f6b7f521>低</option><option value="中等" data-v-f6b7f521>中等</option><option value="高" data-v-f6b7f521>高</option><option value="极高" data-v-f6b7f521>极高</option>',5)])],512),[[Vn,o.value.benefit]])])]),M("div",Qy,[m[86]||(m[86]=M("label",null,"路线描述",-1)),Et(M("textarea",{"onUpdate:modelValue":m[32]||(m[32]=V=>o.value.description=V),class:"input",rows:"3",placeholder:"路线描述"},null,512),[[pn,o.value.description]])]),M("div",eb,[m[87]||(m[87]=M("label",null,"上传规划文档",-1)),M("input",{type:"file",class:"input",onChange:R},null,32)]),M("button",{class:"btn btn-primary",onClick:ut},"添加路线")])),d.value?(pt(),mt("div",tb,[m[91]||(m[91]=M("h3",null,"多模态素材",-1)),M("div",{class:"multimedia-options"},[M("button",{class:"btn btn-secondary",onClick:L},"生成漫画"),M("button",{class:"btn btn-secondary",onClick:E},"生成短视频"),M("button",{class:"btn btn-secondary",onClick:oe},"生成海报")]),M("div",nb,[m[90]||(m[90]=M("label",null,"风格选择",-1)),Et(M("select",{"onUpdate:modelValue":m[33]||(m[33]=V=>C.value=V),class:"input"},[...m[89]||(m[89]=[M("option",{value:"治愈"},"治愈",-1),M("option",{value:"写实"},"写实",-1),M("option",{value:"科幻"},"科幻",-1)])],512),[[Vn,C.value]])])])):Br("",!0),M("div",{class:"divergence-controls"},[M("button",{class:"btn btn-secondary",onClick:O},"返回"),M("button",{class:"btn btn-primary",onClick:T},"查看属性")])])])):e.value==="reflection"?(pt(),mt("div",ib,[M("div",rb,[m[109]||(m[109]=M("h1",{class:"title"},"观心",-1)),M("div",sb,[m[103]||(m[103]=M("div",{class:"compass-center"},[M("h2",null,"属性罗盘"),M("p",null,"基于你的选择和经历生成")],-1)),M("div",ob,[M("div",ab,[m[93]||(m[93]=M("div",{class:"direction-icon career"},null,-1)),m[94]||(m[94]=M("h3",null,"职业发展",-1)),M("div",{class:qt(["attribute-level",K(a.value.career)])},je(Y(a.value.career)),3),M("div",lb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.career+"%"})},null,4)]),M("p",cb,je(ee("career",a.value.career)),1)]),M("div",ub,[m[95]||(m[95]=M("div",{class:"direction-icon finance"},null,-1)),m[96]||(m[96]=M("h3",null,"财务状况",-1)),M("div",{class:qt(["attribute-level",K(a.value.finance)])},je(Y(a.value.finance)),3),M("div",fb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.finance+"%"})},null,4)]),M("p",db,je(ee("finance",a.value.finance)),1)]),M("div",hb,[m[97]||(m[97]=M("div",{class:"direction-icon relationship"},null,-1)),m[98]||(m[98]=M("h3",null,"人际关系",-1)),M("div",{class:qt(["attribute-level",K(a.value.relationship)])},je(Y(a.value.relationship)),3),M("div",pb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.relationship+"%"})},null,4)]),M("p",mb,je(ee("relationship",a.value.relationship)),1)]),M("div",gb,[m[99]||(m[99]=M("div",{class:"direction-icon health"},null,-1)),m[100]||(m[100]=M("h3",null,"健康状态",-1)),M("div",{class:qt(["attribute-level",K(a.value.health)])},je(Y(a.value.health)),3),M("div",_b,[M("div",{class:"attribute-fill",style:Xt({width:a.value.health+"%"})},null,4)]),M("p",vb,je(ee("health",a.value.health)),1)]),M("div",xb,[m[101]||(m[101]=M("div",{class:"direction-icon growth"},null,-1)),m[102]||(m[102]=M("h3",null,"个人成长",-1)),M("div",{class:qt(["attribute-level",K(a.value.growth)])},je(Y(a.value.growth)),3),M("div",Sb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.growth+"%"})},null,4)]),M("p",Mb,je(ee("growth",a.value.growth)),1)])])]),M("div",Eb,[m[107]||(m[107]=M("h3",null,"属性趋势",-1)),M("div",{class:"visualization-options"},[M("button",{class:"btn btn-secondary small",onClick:le},"雷达图"),M("button",{class:"btn btn-secondary small",onClick:Q},"趋势曲线"),M("button",{class:"btn btn-secondary small",onClick:S},"影响溯源")]),M("div",yb,[A.value==="radar"?(pt(),mt("div",bb,[...m[104]||(m[104]=[M("p",null,"雷达图可视化",-1)])])):A.value==="trend"?(pt(),mt("div",Tb,[...m[105]||(m[105]=[M("p",null,"趋势曲线可视化",-1)])])):A.value==="impact"?(pt(),mt("div",Ab,[...m[106]||(m[106]=[M("p",null,"影响溯源可视化",-1)])])):Br("",!0)])]),M("div",{class:"social-sidebar glass-container"},[m[108]||(m[108]=Rs('<h3 data-v-f6b7f521>天下志</h3><div class="social-item" data-v-f6b7f521><span class="source" data-v-f6b7f521>国家统计局</span><p data-v-f6b7f521>2026年第一季度GDP增长4.5%</p><span class="update-time" data-v-f6b7f521>2026-04-27</span></div><div class="social-item" data-v-f6b7f521><span class="source" data-v-f6b7f521>教育部</span><p data-v-f6b7f521>2026年研究生招生计划公布</p><span class="update-time" data-v-f6b7f521>2026-04-25</span></div><div class="social-item" data-v-f6b7f521><span class="source" data-v-f6b7f521>人社部</span><p data-v-f6b7f521>2026年平均工资水平上涨5.2%</p><span class="update-time" data-v-f6b7f521>2026-04-20</span></div><div class="social-item" data-v-f6b7f521><span class="source" data-v-f6b7f521>住建部</span><p data-v-f6b7f521>2026年全国房价走势分析</p><span class="update-time" data-v-f6b7f521>2026-04-18</span></div>',5)),M("button",{class:"btn btn-secondary small",onClick:v},"刷新数据")]),M("div",{class:"reflection-controls"},[M("button",{class:"btn btn-secondary",onClick:w},"返回"),M("button",{class:"btn btn-primary",onClick:N},"AI顾问")])])])):e.value==="mentorship"?(pt(),mt("div",wb,[M("div",Rb,[m[114]||(m[114]=M("h1",{class:"title"},"论道",-1)),M("div",Cb,[m[110]||(m[110]=M("div",{class:"avatar-placeholder"},[M("div",{class:"avatar-glow"})],-1)),M("h3",null,je(y.value),1),M("p",null,je(I.value),1)]),M("div",Pb,[m[112]||(m[112]=M("div",{class:"chat-message ai-message"},[M("div",{class:"message-content"},[M("p",null,"你好！我是你的专属AI顾问，有什么可以帮助你的吗？")])],-1)),(pt(!0),mt(en,null,ws(u.value,(V,X)=>(pt(),mt("div",{class:"chat-message user-message",key:X},[M("div",Db,[M("p",null,je(V),1)])]))),128)),U.value?(pt(),mt("div",Lb,[...m[111]||(m[111]=[M("div",{class:"message-content"},[M("div",{class:"loading"}),M("p",null,"正在思考...")],-1)])])):Br("",!0)]),M("div",Ub,[Et(M("input",{type:"text","onUpdate:modelValue":m[34]||(m[34]=V=>l.value=V),class:"input",placeholder:"输入你的问题..."},null,512),[[pn,l.value]]),M("button",{class:"btn btn-primary",onClick:H,disabled:U.value},"发送",8,Ib),M("button",{class:"btn btn-secondary",onClick:P},"语音输入")]),M("div",Nb,[m[113]||(m[113]=M("h3",null,"选择AI角色",-1)),M("div",Fb,[M("button",{class:"btn btn-secondary small",onClick:m[35]||(m[35]=V=>z("职场导师"))},"职场导师"),M("button",{class:"btn btn-secondary small",onClick:m[36]||(m[36]=V=>z("情感顾问"))},"情感顾问"),M("button",{class:"btn btn-secondary small",onClick:m[37]||(m[37]=V=>z("创业前辈"))},"创业前辈"),M("button",{class:"btn btn-secondary small",onClick:m[38]||(m[38]=V=>z("人生规划师"))},"人生规划师")])]),M("div",{class:"mentorship-controls"},[M("button",{class:"btn btn-secondary",onClick:T},"返回"),M("button",{class:"btn btn-primary",onClick:ne},"终局报告")])])])):e.value==="conclusion"?(pt(),mt("div",Ob,[M("div",Bb,[m[128]||(m[128]=M("h1",{class:"title"},"归途",-1)),M("div",zb,[m[115]||(m[115]=M("h2",null,"后悔值评级",-1)),M("div",Hb,[M("div",{class:"regret-fill",style:Xt({width:c.value+"%"})},null,4)]),M("p",Vb,je(f.value),1),M("p",kb,je(h.value),1)]),M("div",Gb,[m[122]||(m[122]=M("h3",null,"终局报告",-1)),M("div",Wb,[M("div",Xb,[m[116]||(m[116]=M("span",null,"职业发展",-1)),M("div",qb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.career+"%"})},null,4)]),M("span",$b,je(Y(a.value.career)),1)]),M("div",Yb,[m[117]||(m[117]=M("span",null,"财务状况",-1)),M("div",jb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.finance+"%"})},null,4)]),M("span",Kb,je(Y(a.value.finance)),1)]),M("div",Zb,[m[118]||(m[118]=M("span",null,"人际关系",-1)),M("div",Jb,[M("div",{class:"attribute-fill",style:Xt({width:a.value.relationship+"%"})},null,4)]),M("span",Qb,je(Y(a.value.relationship)),1)]),M("div",eT,[m[119]||(m[119]=M("span",null,"健康状态",-1)),M("div",tT,[M("div",{class:"attribute-fill",style:Xt({width:a.value.health+"%"})},null,4)]),M("span",nT,je(Y(a.value.health)),1)]),M("div",iT,[m[120]||(m[120]=M("span",null,"个人成长",-1)),M("div",rT,[M("div",{class:"attribute-fill",style:Xt({width:a.value.growth+"%"})},null,4)]),M("span",sT,je(Y(a.value.growth)),1)])]),M("div",oT,[m[121]||(m[121]=M("h4",null,"AI定制人生建议",-1)),M("p",null,je(g.value),1)]),m[123]||(m[123]=M("div",{class:"future-letter"},[M("h4",null,"来自未来时空的信件"),M("p",null,"亲爱的自己："),M("p",null,"当你看到这封信时，你已经走过了一段不平凡的人生旅程。无论你现在处于何种状态，请记住，每一个选择都塑造了今天的你。不要后悔过去的决定，因为它们都是你成长的一部分。"),M("p",null,"未来的路还很长，保持初心，勇敢前行。"),M("p",null,"未来的你")],-1))]),M("div",aT,[m[124]||(m[124]=M("h3",null,"名人模拟",-1)),m[125]||(m[125]=M("p",null,"代入名人关键人生节点，生成平行人生并与真实轨迹对比",-1)),M("div",lT,[M("button",{class:"btn btn-secondary small",onClick:m[39]||(m[39]=V=>de("马云"))},"马云"),M("button",{class:"btn btn-secondary small",onClick:m[40]||(m[40]=V=>de("任正非"))},"任正非"),M("button",{class:"btn btn-secondary small",onClick:m[41]||(m[41]=V=>de("比尔·盖茨"))},"比尔·盖茨"),M("button",{class:"btn btn-secondary small",onClick:m[42]||(m[42]=V=>de("乔布斯"))},"乔布斯")])]),M("div",cT,[m[127]||(m[127]=M("h3",null,"人生存档",-1)),M("div",{class:"save-actions"},[M("button",{class:"btn btn-primary",onClick:G},"保存当前轨迹"),M("button",{class:"btn btn-secondary",onClick:W},"加载存档"),M("button",{class:"btn btn-secondary",onClick:ue},"导出报告")]),M("div",uT,[m[126]||(m[126]=M("h4",null,"已保存的轨迹",-1)),(pt(!0),mt(en,null,ws(D.value,(V,X)=>(pt(),mt("div",{class:"saved-path-item",key:X},[M("span",null,je(V.name),1),M("span",null,je(V.date),1),M("button",{class:"btn btn-secondary small",onClick:se=>me(X)},"加载",8,fT)]))),128))])]),M("div",{class:"conclusion-controls"},[M("button",{class:"btn btn-secondary",onClick:N},"返回"),M("button",{class:"btn btn-primary",onClick:j},"重新开始")])])])):Br("",!0)])]))}},hT=XE(dT,[["__scopeId","data-v-f6b7f521"]]);Zm(hT).mount("#app");
