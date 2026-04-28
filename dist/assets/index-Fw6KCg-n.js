(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},xr=[],On=()=>{},_f=()=>!1,wo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ro=n=>n.startsWith("onUpdate:"),zt=Object.assign,Wl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wh=Object.prototype.hasOwnProperty,lt=(n,e)=>wh.call(n,e),Ge=Array.isArray,Sr=n=>hs(n)==="[object Map]",Co=n=>hs(n)==="[object Set]",Tc=n=>hs(n)==="[object Date]",je=n=>typeof n=="function",St=n=>typeof n=="string",Vn=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",vf=n=>(ft(n)||je(n))&&je(n.then)&&je(n.catch),xf=Object.prototype.toString,hs=n=>xf.call(n),Rh=n=>hs(n).slice(8,-1),Sf=n=>hs(n)==="[object Object]",Xl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,es=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Ch=/-\w/g,En=Po(n=>n.replace(Ch,e=>e.slice(1).toUpperCase())),Ph=/\B([A-Z])/g,Zi=Po(n=>n.replace(Ph,"-$1").toLowerCase()),Mf=Po(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zo=Po(n=>n?`on${Mf(n)}`:""),In=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Do=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ac;const Lo=()=>Ac||(Ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ut(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?Ih(i):Ut(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||ft(n))return n}const Dh=/;(?![^(]*\))/g,Lh=/:([^]+)/,Uh=/\/\*[^]*?\*\//g;function Ih(n){const e={};return n.replace(Uh,"").split(Dh).forEach(t=>{if(t){const i=t.split(Lh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function jt(n){let e="";if(St(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=jt(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fh=Gl(Nh);function yf(n){return!!n||n===""}function Oh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ps(n[i],e[i]);return t}function ps(n,e){if(n===e)return!0;let t=Tc(n),i=Tc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Vn(n),i=Vn(e),t||i)return n===e;if(t=Ge(n),i=Ge(e),t||i)return t&&i?Oh(n,e):!1;if(t=ft(n),i=ft(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ps(n[o],e[o]))return!1}}return String(n)===String(e)}function Bh(n,e){return n.findIndex(t=>ps(t,e))}const bf=n=>!!(n&&n.__v_isRef===!0),ke=n=>St(n)?n:n==null?"":Ge(n)||ft(n)&&(n.toString===xf||!je(n.toString))?bf(n)?ke(n.value):JSON.stringify(n,Tf,2):String(n),Tf=(n,e)=>bf(e)?Tf(n,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Jo(i,s)+" =>"]=r,t),{})}:Co(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Jo(t))}:Vn(e)?Jo(e):ft(e)&&!Ge(e)&&!Sf(e)?String(e):e,Jo=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class zh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){if(this._on>0&&--this._on===0){if(It===this)It=this.prevScope;else{let e=It;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hh(){return It}let gt;const Qo=new WeakSet;class Af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qo.has(this)&&(Qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wc(this),Cf(this);const e=gt,t=yn;gt=this,yn=!0;try{return this.fn()}finally{Pf(this),gt=e,yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Va(this)&&this.run()}get dirty(){return Va(this)}}let wf=0,ts,ns;function Rf(n,e=!1){if(n.flags|=8,e){n.next=ns,ns=n;return}n.next=ts,ts=n}function ql(){wf++}function $l(){if(--wf>0)return;if(ns){let e=ns;for(ns=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ts;){let e=ts;for(ts=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Yl(i),Vh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Va(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===as)||(n.globalVersion=as,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Va(n))))return;n.flags|=2;const e=n.dep,t=gt,i=yn;gt=n,yn=!0;try{Cf(n);const r=n.fn(n._value);(e.version===0||In(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=t,yn=i,Pf(n),n.flags&=-3}}function Yl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Yl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Vh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let yn=!0;const Lf=[];function si(){Lf.push(yn),yn=!1}function oi(){const n=Lf.pop();yn=n===void 0?!0:n}function wc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let as=0;class kh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!yn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new kh(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,Uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,as++,this.notify(e)}notify(e){ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$l()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ka=new WeakMap,Xi=Symbol(""),Ga=Symbol(""),ls=Symbol("");function Ft(n,e,t){if(yn&&gt){let i=ka.get(n);i||ka.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new jl),r.map=i,r.key=t),r.track()}}function Qn(n,e,t,i,r,s){const o=ka.get(n);if(!o){as++;return}const a=l=>{l&&l.trigger()};if(ql(),e==="clear")o.forEach(a);else{const l=Ge(n),u=l&&Xl(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===ls||!Vn(h)&&h>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(ls)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Xi)),Sr(n)&&a(o.get(Ga)));break;case"delete":l||(a(o.get(Xi)),Sr(n)&&a(o.get(Ga)));break;case"set":Sr(n)&&a(o.get(Xi));break}}$l()}function er(n){const e=at(n);return e===n?e:(Ft(e,"iterate",ls),pn(n)?e:e.map(Tn))}function Uo(n){return Ft(n=at(n),"iterate",ls),n}function Dn(n,e){return ai(n)?wr(qi(n)?Tn(e):e):Tn(e)}const Gh={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,n=>Dn(this,n))},concat(...n){return er(this).concat(...n.map(e=>Ge(e)?er(e):e))},entries(){return ea(this,"entries",n=>(n[1]=Dn(this,n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(i=>Dn(this,i)),arguments)},find(n,e){return Gn(this,"find",n,e,t=>Dn(this,t),arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,t=>Dn(this,t),arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ta(this,"includes",n)},indexOf(...n){return ta(this,"indexOf",n)},join(n){return er(this).join(n)},lastIndexOf(...n){return ta(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return kr(this,"pop")},push(...n){return kr(this,"push",n)},reduce(n,...e){return Rc(this,"reduce",n,e)},reduceRight(n,...e){return Rc(this,"reduceRight",n,e)},shift(){return kr(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return kr(this,"splice",n)},toReversed(){return er(this).toReversed()},toSorted(n){return er(this).toSorted(n)},toSpliced(...n){return er(this).toSpliced(...n)},unshift(...n){return kr(this,"unshift",n)},values(){return ea(this,"values",n=>Dn(this,n))}};function ea(n,e,t){const i=Uo(n),r=i[e]();return i!==n&&!pn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Wh=Array.prototype;function Gn(n,e,t,i,r,s){const o=Uo(n),a=o!==n&&!pn(n),l=o[e];if(l!==Wh[e]){const f=l.apply(n,s);return a?Tn(f):f}let u=t;o!==n&&(a?u=function(f,h){return t.call(this,Dn(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Rc(n,e,t,i){const r=Uo(n),s=r!==n&&!pn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=Dn(n,u)),t.call(this,u,Dn(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?Dn(n,l):l}function ta(n,e,t){const i=at(n);Ft(i,"iterate",ls);const r=i[e](...t);return(r===-1||r===!1)&&Ql(t[0])?(t[0]=at(t[0]),i[e](...t)):r}function kr(n,e,t=[]){si(),ql();const i=at(n)[e].apply(n,t);return $l(),oi(),i}const Xh=Gl("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function qh(n){Vn(n)||(n=String(n));const e=at(this);return Ft(e,"has",n),e.hasOwnProperty(n)}class Nf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?np:zf:s?Bf:Of).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!r){let l;if(o&&(l=Gh[t]))return l;if(t==="hasOwnProperty")return qh}const a=Reflect.get(e,t,Bt(e)?e:i);if((Vn(t)?If.has(t):Xh(t))||(r||Ft(e,"get",t),s))return a;if(Bt(a)){const l=o&&Xl(t)?a:a.value;return r&&ft(l)?Xa(l):l}return ft(a)?r?Xa(a):Zl(a):a}}class Ff extends Nf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ge(e)&&Xl(t);if(!this._isShallow){const u=ai(s);if(!pn(i)&&!ai(i)&&(s=at(s),i=at(i)),!o&&Bt(s)&&!Bt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:lt(e,t),l=Reflect.set(e,t,i,Bt(e)?e:r);return e===at(r)&&(a?In(i,s)&&Qn(e,"set",t,i):Qn(e,"add",t,i)),l}deleteProperty(e,t){const i=lt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Vn(t)||!If.has(t))&&Ft(e,"has",t),i}ownKeys(e){return Ft(e,"iterate",Ge(e)?"length":Xi),Reflect.ownKeys(e)}}class $h extends Nf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yh=new Ff,jh=new $h,Kh=new Ff(!0);const Wa=n=>n,Cs=n=>Reflect.getPrototypeOf(n);function Zh(n,e,t){return function(...i){const r=this.__v_raw,s=at(r),o=Sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Wa:e?wr:Tn;return!e&&Ft(s,"iterate",l?Ga:Xi),zt(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Ps(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Jh(n,e){const t={get(r){const s=this.__v_raw,o=at(s),a=at(r);n||(In(r,a)&&Ft(o,"get",r),Ft(o,"get",a));const{has:l}=Cs(o),u=e?Wa:n?wr:Tn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ft(at(r),"iterate",Xi),r.size},has(r){const s=this.__v_raw,o=at(s),a=at(r);return n||(In(r,a)&&Ft(o,"has",r),Ft(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),u=e?Wa:n?wr:Tn;return!n&&Ft(l,"iterate",Xi),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return zt(t,n?{add:Ps("add"),set:Ps("set"),delete:Ps("delete"),clear:Ps("clear")}:{add(r){const s=at(this),o=Cs(s),a=at(r),l=!e&&!pn(r)&&!ai(r)?a:r;return o.has.call(s,l)||In(r,l)&&o.has.call(s,r)||In(a,l)&&o.has.call(s,a)||(s.add(l),Qn(s,"add",l,l)),this},set(r,s){!e&&!pn(s)&&!ai(s)&&(s=at(s));const o=at(this),{has:a,get:l}=Cs(o);let u=a.call(o,r);u||(r=at(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?In(s,c)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=Cs(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Qn(s,"delete",r,void 0),u},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zh(r,n,e)}),t}function Kl(n,e){const t=Jh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(lt(t,r)&&r in i?t:i,r,s)}const Qh={get:Kl(!1,!1)},ep={get:Kl(!1,!0)},tp={get:Kl(!0,!1)};const Of=new WeakMap,Bf=new WeakMap,zf=new WeakMap,np=new WeakMap;function ip(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rp(n){return n.__v_skip||!Object.isExtensible(n)?0:ip(Rh(n))}function Zl(n){return ai(n)?n:Jl(n,!1,Yh,Qh,Of)}function sp(n){return Jl(n,!1,Kh,ep,Bf)}function Xa(n){return Jl(n,!0,jh,tp,zf)}function Jl(n,e,t,i,r){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=rp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function qi(n){return ai(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Ql(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function op(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const Tn=n=>ft(n)?Zl(n):n,wr=n=>ft(n)?Xa(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function mt(n){return ap(n,!1)}function ap(n,e){return Bt(n)?n:new lp(n,e)}class lp{constructor(e,t){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||ai(e);e=i?e:at(e),In(e,t)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function cp(n){return Bt(n)?n.value:n}const up={get:(n,e,t)=>e==="__v_raw"?n:cp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Bt(r)&&!Bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Hf(n){return qi(n)?n:new Proxy(n,up)}class fp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=as-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Rf(this,!0),!0}get value(){const e=this.dep.track();return Df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dp(n,e,t=!1){let i,r;return je(n)?i=n:(i=n.get,r=n.set),new fp(i,r,t)}const Ds={},mo=new WeakMap;let Fi;function hp(n,e=!1,t=Fi){if(t){let i=mo.get(t);i||mo.set(t,i=[]),i.push(n)}}function pp(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=E=>r?E:pn(E)||r===!1||r===0?ei(E,1):ei(E);let c,f,h,m,g=!1,v=!1;if(Bt(n)?(f=()=>n.value,g=pn(n)):qi(n)?(f=()=>u(n),g=!0):Ge(n)?(v=!0,g=n.some(E=>qi(E)||pn(E)),f=()=>n.map(E=>{if(Bt(E))return E.value;if(qi(E))return u(E);if(je(E))return l?l(E,2):E()})):je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){si();try{h()}finally{oi()}}const E=Fi;Fi=c;try{return l?l(n,3,[m]):n(m)}finally{Fi=E}}:f=On,e&&r){const E=f,I=r===!0?1/0:r;f=()=>ei(E(),I)}const p=Hh(),d=()=>{c.stop(),p&&p.active&&Wl(p.effects,c)};if(s&&e){const E=e;e=(...I)=>{E(...I),d()}}let C=v?new Array(n.length).fill(Ds):Ds;const A=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const I=c.run();if(r||g||(v?I.some((N,D)=>In(N,C[D])):In(I,C))){h&&h();const N=Fi;Fi=c;try{const D=[I,C===Ds?void 0:v&&C[0]===Ds?[]:C,m];C=I,l?l(e,3,D):e(...D)}finally{Fi=N}}}else c.run()};return a&&a(A),c=new Af(f),c.scheduler=o?()=>o(A,!1):A,m=E=>hp(E,!1,c),h=c.onStop=()=>{const E=mo.get(c);if(E){if(l)l(E,4);else for(const I of E)I();mo.delete(c)}},e?i?A(!0):C=c.run():o?o(A.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function ei(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Bt(n))ei(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)ei(n[i],e,t);else if(Co(n)||Sr(n))n.forEach(i=>{ei(i,e,t)});else if(Sf(n)){for(const i in n)ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(n,e,t,i){try{return i?n(...i):n()}catch(r){Io(r,e,t)}}function kn(n,e,t,i){if(je(n)){const r=ms(n,e,t,i);return r&&vf(r)&&r.catch(s=>{Io(s,e,t)}),r}if(Ge(n)){const r=[];for(let s=0;s<n.length;s++)r.push(kn(n[s],e,t,i));return r}}function Io(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){si(),ms(s,null,10,[n,l,u]),oi();return}}mp(n,t,r,i,o)}function mp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Gt=[];let Pn=-1;const Mr=[];let _i=null,gr=0;const Vf=Promise.resolve();let go=null;function kf(n){const e=go||Vf;return n?e.then(this?n.bind(this):n):e}function gp(n){let e=Pn+1,t=Gt.length;for(;e<t;){const i=e+t>>>1,r=Gt[i],s=cs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ec(n){if(!(n.flags&1)){const e=cs(n),t=Gt[Gt.length-1];!t||!(n.flags&2)&&e>=cs(t)?Gt.push(n):Gt.splice(gp(e),0,n),n.flags|=1,Gf()}}function Gf(){go||(go=Vf.then(Xf))}function _p(n){Ge(n)?Mr.push(...n):_i&&n.id===-1?_i.splice(gr+1,0,n):n.flags&1||(Mr.push(n),n.flags|=1),Gf()}function Cc(n,e,t=Pn+1){for(;t<Gt.length;t++){const i=Gt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Gt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wf(n){if(Mr.length){const e=[...new Set(Mr)].sort((t,i)=>cs(t)-cs(i));if(Mr.length=0,_i){_i.push(...e);return}for(_i=e,gr=0;gr<_i.length;gr++){const t=_i[gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_i=null,gr=0}}const cs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xf(n){try{for(Pn=0;Pn<Gt.length;Pn++){const e=Gt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Gt.length;Pn++){const e=Gt[Pn];e&&(e.flags&=-2)}Pn=-1,Gt.length=0,Wf(),go=null,(Gt.length||Mr.length)&&Xf()}}let hn=null,qf=null;function _o(n){const e=hn;return hn=n,qf=n&&n.type.__scopeId||null,e}function vp(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Hc(-1);const s=_o(e);let o;try{o=n(...r)}finally{_o(s),i._d&&Hc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function bt(n,e){if(hn===null)return n;const t=Bo(hn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=dt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&ei(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(si(),kn(l,t,8,[n.el,a,n,e]),oi())}}function xp(n,e){if(Wt){let t=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===t&&(t=Wt.provides=Object.create(i)),t[n]=e}}function no(n,e,t=!1){const i=xm();if(i||Er){let r=Er?Er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Sp=Symbol.for("v-scx"),Mp=()=>no(Sp);function na(n,e,t){return $f(n,e,t)}function $f(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=zt({},t),l=e&&i||!e&&s!=="post";let u;if(fs){if(s==="sync"){const m=Mp();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=On,m.resume=On,m.pause=On,m}}const c=Wt;a.call=(m,g,v)=>kn(m,c,g,v);let f=!1;s==="post"?a.scheduler=m=>{Yt(m,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():ec(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=pp(n,e,a);return fs&&(u?u.push(h):l&&h()),h}function Ep(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Yf(i,n):()=>i[n]:n.bind(i,i);let s;je(e)?s=e:(s=e.handler,t=e);const o=gs(this),a=$f(r,s.bind(i),t);return o(),a}function Yf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const yp=Symbol("_vte"),bp=n=>n.__isTeleport,Tp=Symbol("_leaveCb");function tc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,tc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Pc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const vo=new WeakMap;function is(n,e,t,i,r=!1){if(Ge(n)){n.forEach((v,p)=>is(v,e&&(Ge(e)?e[p]:e),t,i,r));return}if(rs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&is(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Bo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===dt?a.refs={}:a.refs,f=a.setupState,h=at(f),m=f===dt?_f:v=>Pc(c,v)?!1:lt(h,v),g=(v,p)=>!(p&&Pc(c,p));if(u!=null&&u!==l){if(Dc(e),St(u))c[u]=null,m(u)&&(f[u]=null);else if(Bt(u)){const v=e;g(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(je(l))ms(l,a,12,[o,c]);else{const v=St(l),p=Bt(l);if(v||p){const d=()=>{if(n.f){const C=v?m(l)?f[l]:c[l]:g()||!n.k?l.value:c[n.k];if(r)Ge(C)&&Wl(C,s);else if(Ge(C))C.includes(s)||C.push(s);else if(v)c[l]=[s],m(l)&&(f[l]=c[l]);else{const A=[s];g(l,n.k)&&(l.value=A),n.k&&(c[n.k]=A)}}else v?(c[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const C=()=>{d(),vo.delete(n)};C.id=-1,vo.set(n,C),Yt(C,t)}else Dc(n),d()}}}function Dc(n){const e=vo.get(n);e&&(e.flags|=8,vo.delete(n))}Lo().requestIdleCallback;Lo().cancelIdleCallback;const rs=n=>!!n.type.__asyncLoader,Kf=n=>n.type.__isKeepAlive;function Ap(n,e){Zf(n,"a",e)}function wp(n,e){Zf(n,"da",e)}function Zf(n,e,t=Wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(No(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Kf(r.parent.vnode)&&Rp(i,e,t,r),r=r.parent}}function Rp(n,e,t,i){const r=No(e,n,i,!0);nc(()=>{Wl(i[e],r)},t)}function No(n,e,t=Wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{si();const a=gs(t),l=kn(e,t,n,o);return a(),oi(),l});return i?r.unshift(s):r.push(s),s}}const ui=n=>(e,t=Wt)=>{(!fs||n==="sp")&&No(n,(...i)=>e(...i),t)},Cp=ui("bm"),Jf=ui("m"),Pp=ui("bu"),Dp=ui("u"),Lp=ui("bum"),nc=ui("um"),Up=ui("sp"),Ip=ui("rtg"),Np=ui("rtc");function Fp(n,e=Wt){No("ec",n,e)}const Op=Symbol.for("v-ndc");function wi(n,e,t,i){let r;const s=t,o=Ge(n);if(o||St(n)){const a=o&&qi(n);let l=!1,u=!1;a&&(l=!pn(n),u=ai(n),n=Uo(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?wr(Tn(n[c])):Tn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ft(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const qa=n=>n?xd(n)?Bo(n):qa(n.parent):null,ss=zt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qa(n.parent),$root:n=>qa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ed(n),$forceUpdate:n=>n.f||(n.f=()=>{ec(n.update)}),$nextTick:n=>n.n||(n.n=kf.bind(n.proxy)),$watch:n=>Ep.bind(n)}),ia=(n,e)=>n!==dt&&!n.__isScriptSetup&&lt(n,e),Bp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ia(i,e))return o[e]=1,i[e];if(r!==dt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(t!==dt&&lt(t,e))return o[e]=4,t[e];$a&&(o[e]=0)}}const u=ss[e];let c,f;if(u)return e==="$attrs"&&Ft(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==dt&&lt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ia(r,e)?(r[e]=t,!0):i!==dt&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==dt&&a[0]!=="$"&&lt(n,a)||ia(e,a)||lt(s,a)||lt(i,a)||lt(ss,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Lc(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $a=!0;function zp(n){const e=ed(n),t=n.proxy,i=n.ctx;$a=!1,e.beforeCreate&&Uc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:C,destroyed:A,unmounted:E,render:I,renderTracked:N,renderTriggered:D,errorCaptured:z,serverPrefetch:w,expose:T,inheritAttrs:F,components:ie,directives:Y,filters:se}=e;if(u&&Hp(u,i,null),o)for(const ne in o){const V=o[ne];je(V)&&(i[ne]=V.bind(t))}if(r){const ne=r.call(t,t);ft(ne)&&(n.data=Zl(ne))}if($a=!0,s)for(const ne in s){const V=s[ne],_e=je(V)?V.bind(t,t):je(V.get)?V.get.bind(t,t):On,be=!je(V)&&je(V.set)?V.set.bind(t):On,Me=Tm({get:_e,set:be});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Le=>Me.value=Le})}if(a)for(const ne in a)Qf(a[ne],i,t,ne);if(l){const ne=je(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(V=>{xp(V,ne[V])})}c&&Uc(c,n,"c");function j(ne,V){Ge(V)?V.forEach(_e=>ne(_e.bind(t))):V&&ne(V.bind(t))}if(j(Cp,f),j(Jf,h),j(Pp,m),j(Dp,g),j(Ap,v),j(wp,p),j(Fp,z),j(Np,N),j(Ip,D),j(Lp,C),j(nc,E),j(Up,w),Ge(T))if(T.length){const ne=n.exposed||(n.exposed={});T.forEach(V=>{Object.defineProperty(ne,V,{get:()=>t[V],set:_e=>t[V]=_e,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===On&&(n.render=I),F!=null&&(n.inheritAttrs=F),ie&&(n.components=ie),Y&&(n.directives=Y),w&&jf(n)}function Hp(n,e,t=On){Ge(n)&&(n=Ya(n));for(const i in n){const r=n[i];let s;ft(r)?"default"in r?s=no(r.from||i,r.default,!0):s=no(r.from||i):s=no(r),Bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Uc(n,e,t){kn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qf(n,e,t,i){let r=i.includes(".")?Yf(t,i):()=>t[i];if(St(n)){const s=e[n];je(s)&&na(r,s)}else if(je(n))na(r,n.bind(t));else if(ft(n))if(Ge(n))n.forEach(s=>Qf(s,e,t,i));else{const s=je(n.handler)?n.handler.bind(t):e[n.handler];je(s)&&na(r,s,n)}}function ed(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>xo(l,u,o,!0)),xo(l,e,o)),ft(e)&&s.set(e,l),l}function xo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&xo(n,s,t,!0),r&&r.forEach(o=>xo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Vp={data:Ic,props:Nc,emits:Nc,methods:Kr,computed:Kr,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Kr,directives:Kr,watch:Gp,provide:Ic,inject:kp};function Ic(n,e){return e?n?function(){return zt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function kp(n,e){return Kr(Ya(n),Ya(e))}function Ya(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function Kr(n,e){return n?zt(Object.create(null),n,e):e}function Nc(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:zt(Object.create(null),Lc(n),Lc(e??{})):e}function Gp(n,e){if(!n)return e;if(!e)return n;const t=zt(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function td(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wp=0;function Xp(n,e){return function(i,r=null){je(i)||(i=zt({},i)),r!=null&&!ft(r)&&(r=null);const s=td(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Wp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Am,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(u,...f)):je(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const m=u._ceVNode||Bn(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,c,h),l=!0,u._container=c,c.__vue_app__=u,Bo(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(kn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Er;Er=u;try{return c()}finally{Er=f}}};return u}}let Er=null;const qp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${En(e)}Modifiers`]||n[`${Zi(e)}Modifiers`];function $p(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&qp(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>St(c)?c.trim():c)),o.number&&(r=t.map(Do)));let a,l=i[a=Zo(e)]||i[a=Zo(En(e))];!l&&s&&(l=i[a=Zo(Zi(e))]),l&&kn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,kn(u,n,6,r)}}const Yp=new WeakMap;function nd(n,e,t=!1){const i=t?Yp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!je(n)){const l=u=>{const c=nd(u,e,!0);c&&(a=!0,zt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ft(n)&&i.set(n,null),null):(Ge(s)?s.forEach(l=>o[l]=null):zt(o,s),ft(n)&&i.set(n,o),o)}function Fo(n,e){return!n||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,Zi(e))||lt(n,e))}function Fc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:g,inheritAttrs:v}=n,p=_o(n);let d,C;try{if(t.shapeFlag&4){const E=r||i,I=E;d=Ln(u.call(I,E,c,f,m,h,g)),C=a}else{const E=e;d=Ln(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),C=e.props?a:jp(a)}}catch(E){os.length=0,Io(E,n,1),d=Bn(Mi)}let A=d;if(C&&v!==!1){const E=Object.keys(C),{shapeFlag:I}=A;E.length&&I&7&&(s&&E.some(Ro)&&(C=Kp(C,s)),A=Rr(A,C,!1,!0))}return t.dirs&&(A=Rr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&tc(A,t.transition),d=A,_o(p),d}const jp=n=>{let e;for(const t in n)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=n[t]);return e},Kp=(n,e)=>{const t={};for(const i in n)(!Ro(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Zp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Oc(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(id(o,i,h)&&!Fo(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Oc(i,o,u):!0:!!o;return!1}function Oc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(id(e,n,s)&&!Fo(t,s))return!0}return!1}function id(n,e,t){const i=n[t],r=e[t];return t==="style"&&ft(i)&&ft(r)?!ps(i,r):i!==r}function Jp({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const rd={},sd=()=>Object.create(rd),od=n=>Object.getPrototypeOf(n)===rd;function Qp(n,e,t,i=!1){const r={},s=sd();n.propsDefaults=Object.create(null),ad(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:sp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function em(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=at(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Fo(n.emitsOptions,h))continue;const m=e[h];if(l)if(lt(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const g=En(h);r[g]=ja(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{ad(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!lt(e,f)&&((c=Zi(f))===f||!lt(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=ja(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],u=!0)}u&&Qn(n.attrs,"set","")}function ad(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(es(l))continue;const u=e[l];let c;r&&lt(r,c=En(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:Fo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=at(t),u=a||dt;for(let c=0;c<s.length;c++){const f=s[c];t[f]=ja(r,l,f,u[f],n,!lt(u,f))}}return o}function ja(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=gs(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Zi(t))&&(i=!0))}return i}const tm=new WeakMap;function ld(n,e,t=!1){const i=t?tm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!je(n)){const c=f=>{l=!0;const[h,m]=ld(f,e,!0);zt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ft(n)&&i.set(n,xr),xr;if(Ge(s))for(let c=0;c<s.length;c++){const f=En(s[c]);Bc(f)&&(o[f]=dt)}else if(s)for(const c in s){const f=En(c);if(Bc(f)){const h=s[c],m=o[f]=Ge(h)||je(h)?{type:h}:zt({},h),g=m.type;let v=!1,p=!0;if(Ge(g))for(let d=0;d<g.length;++d){const C=g[d],A=je(C)&&C.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(p=!1)}else v=je(g)&&g.name==="Boolean";m[0]=v,m[1]=p,(v||lt(m,"default"))&&a.push(f)}}const u=[o,a];return ft(n)&&i.set(n,u),u}function Bc(n){return n[0]!=="$"&&!es(n)}const ic=n=>n==="_"||n==="_ctx"||n==="$stable",rc=n=>Ge(n)?n.map(Ln):[Ln(n)],nm=(n,e,t)=>{if(e._n)return e;const i=vp((...r)=>rc(e(...r)),t);return i._c=!1,i},cd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ic(r))continue;const s=n[r];if(je(s))e[r]=nm(r,s,i);else if(s!=null){const o=rc(s);e[r]=()=>o}}},ud=(n,e)=>{const t=rc(e);n.slots.default=()=>t},fd=(n,e,t)=>{for(const i in e)(t||!ic(i))&&(n[i]=e[i])},im=(n,e,t)=>{const i=n.slots=sd();if(n.vnode.shapeFlag&32){const r=e._;r?(fd(i,e,t),t&&Ef(i,"_",r,!0)):cd(e,i)}else e&&ud(n,e)},rm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:fd(r,e,t):(s=!e.$stable,cd(e,r)),o=e}else e&&(ud(n,e),o={default:1});if(s)for(const a in r)!ic(a)&&o[a]==null&&delete r[a]},Yt=cm;function sm(n){return om(n)}function om(n,e){const t=Lo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=On,insertStaticContent:g}=n,v=(R,U,y,oe=null,J=null,ee=null,te=void 0,ae=null,W=!!U.dynamicChildren)=>{if(R===U)return;R&&!Gr(R,U)&&(oe=xe(R),Le(R,J,ee,!0),R=null),U.patchFlag===-2&&(W=!1,U.dynamicChildren=null);const{type:S,ref:_,shapeFlag:P}=U;switch(S){case Oo:p(R,U,y,oe);break;case Mi:d(R,U,y,oe);break;case io:R==null&&C(U,y,oe,te);break;case Nt:ie(R,U,y,oe,J,ee,te,ae,W);break;default:P&1?I(R,U,y,oe,J,ee,te,ae,W):P&6?Y(R,U,y,oe,J,ee,te,ae,W):(P&64||P&128)&&S.process(R,U,y,oe,J,ee,te,ae,W,We)}_!=null&&J?is(_,R&&R.ref,ee,U||R,!U):_==null&&R&&R.ref!=null&&is(R.ref,null,ee,R,!0)},p=(R,U,y,oe)=>{if(R==null)i(U.el=a(U.children),y,oe);else{const J=U.el=R.el;U.children!==R.children&&u(J,U.children)}},d=(R,U,y,oe)=>{R==null?i(U.el=l(U.children||""),y,oe):U.el=R.el},C=(R,U,y,oe)=>{[R.el,R.anchor]=g(R.children,U,y,oe,R.el,R.anchor)},A=({el:R,anchor:U},y,oe)=>{let J;for(;R&&R!==U;)J=h(R),i(R,y,oe),R=J;i(U,y,oe)},E=({el:R,anchor:U})=>{let y;for(;R&&R!==U;)y=h(R),r(R),R=y;r(U)},I=(R,U,y,oe,J,ee,te,ae,W)=>{if(U.type==="svg"?te="svg":U.type==="math"&&(te="mathml"),R==null)N(U,y,oe,J,ee,te,ae,W);else{const S=R.el&&R.el._isVueCE?R.el:null;try{S&&S._beginPatch(),w(R,U,J,ee,te,ae,W)}finally{S&&S._endPatch()}}},N=(R,U,y,oe,J,ee,te,ae)=>{let W,S;const{props:_,shapeFlag:P,transition:k,dirs:X}=R;if(W=R.el=o(R.type,ee,_&&_.is,_),P&8?c(W,R.children):P&16&&z(R.children,W,null,oe,J,ra(R,ee),te,ae),X&&Ai(R,null,oe,"created"),D(W,R,R.scopeId,te,oe),_){for(const pe in _)pe!=="value"&&!es(pe)&&s(W,pe,null,_[pe],ee,oe);"value"in _&&s(W,"value",null,_.value,ee),(S=_.onVnodeBeforeMount)&&Cn(S,oe,R)}X&&Ai(R,null,oe,"beforeMount");const q=am(J,k);q&&k.beforeEnter(W),i(W,U,y),((S=_&&_.onVnodeMounted)||q||X)&&Yt(()=>{try{S&&Cn(S,oe,R),q&&k.enter(W),X&&Ai(R,null,oe,"mounted")}finally{}},J)},D=(R,U,y,oe,J)=>{if(y&&m(R,y),oe)for(let ee=0;ee<oe.length;ee++)m(R,oe[ee]);if(J){let ee=J.subTree;if(U===ee||md(ee.type)&&(ee.ssContent===U||ee.ssFallback===U)){const te=J.vnode;D(R,te,te.scopeId,te.slotScopeIds,J.parent)}}},z=(R,U,y,oe,J,ee,te,ae,W=0)=>{for(let S=W;S<R.length;S++){const _=R[S]=ae?Jn(R[S]):Ln(R[S]);v(null,_,U,y,oe,J,ee,te,ae)}},w=(R,U,y,oe,J,ee,te)=>{const ae=U.el=R.el;let{patchFlag:W,dynamicChildren:S,dirs:_}=U;W|=R.patchFlag&16;const P=R.props||dt,k=U.props||dt;let X;if(y&&Ri(y,!1),(X=k.onVnodeBeforeUpdate)&&Cn(X,y,U,R),_&&Ai(U,R,y,"beforeUpdate"),y&&Ri(y,!0),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&c(ae,""),S?T(R.dynamicChildren,S,ae,y,oe,ra(U,J),ee):te||V(R,U,ae,null,y,oe,ra(U,J),ee,!1),W>0){if(W&16)F(ae,P,k,y,J);else if(W&2&&P.class!==k.class&&s(ae,"class",null,k.class,J),W&4&&s(ae,"style",P.style,k.style,J),W&8){const q=U.dynamicProps;for(let pe=0;pe<q.length;pe++){const fe=q[pe],me=P[fe],Ie=k[fe];(Ie!==me||fe==="value")&&s(ae,fe,me,Ie,J,y)}}W&1&&R.children!==U.children&&c(ae,U.children)}else!te&&S==null&&F(ae,P,k,y,J);((X=k.onVnodeUpdated)||_)&&Yt(()=>{X&&Cn(X,y,U,R),_&&Ai(U,R,y,"updated")},oe)},T=(R,U,y,oe,J,ee,te)=>{for(let ae=0;ae<U.length;ae++){const W=R[ae],S=U[ae],_=W.el&&(W.type===Nt||!Gr(W,S)||W.shapeFlag&198)?f(W.el):y;v(W,S,_,null,oe,J,ee,te,!0)}},F=(R,U,y,oe,J)=>{if(U!==y){if(U!==dt)for(const ee in U)!es(ee)&&!(ee in y)&&s(R,ee,U[ee],null,J,oe);for(const ee in y){if(es(ee))continue;const te=y[ee],ae=U[ee];te!==ae&&ee!=="value"&&s(R,ee,ae,te,J,oe)}"value"in y&&s(R,"value",U.value,y.value,J)}},ie=(R,U,y,oe,J,ee,te,ae,W)=>{const S=U.el=R?R.el:a(""),_=U.anchor=R?R.anchor:a("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:X}=U;X&&(ae=ae?ae.concat(X):X),R==null?(i(S,y,oe),i(_,y,oe),z(U.children||[],y,_,J,ee,te,ae,W)):P>0&&P&64&&k&&R.dynamicChildren&&R.dynamicChildren.length===k.length?(T(R.dynamicChildren,k,y,J,ee,te,ae),(U.key!=null||J&&U===J.subTree)&&dd(R,U,!0)):V(R,U,y,_,J,ee,te,ae,W)},Y=(R,U,y,oe,J,ee,te,ae,W)=>{U.slotScopeIds=ae,R==null?U.shapeFlag&512?J.ctx.activate(U,y,oe,te,W):se(U,y,oe,J,ee,te,W):le(R,U,W)},se=(R,U,y,oe,J,ee,te)=>{const ae=R.component=vm(R,oe,J);if(Kf(R)&&(ae.ctx.renderer=We),Sm(ae,!1,te),ae.asyncDep){if(J&&J.registerDep(ae,j,te),!R.el){const W=ae.subTree=Bn(Mi);d(null,W,U,y),R.placeholder=W.el}}else j(ae,R,U,y,J,ee,te)},le=(R,U,y)=>{const oe=U.component=R.component;if(Zp(R,U,y))if(oe.asyncDep&&!oe.asyncResolved){ne(oe,U,y);return}else oe.next=U,oe.update();else U.el=R.el,oe.vnode=U},j=(R,U,y,oe,J,ee,te)=>{const ae=()=>{if(R.isMounted){let{next:P,bu:k,u:X,parent:q,vnode:pe}=R;{const Se=hd(R);if(Se){P&&(P.el=pe.el,ne(R,P,te)),Se.asyncDep.then(()=>{Yt(()=>{R.isUnmounted||S()},J)});return}}let fe=P,me;Ri(R,!1),P?(P.el=pe.el,ne(R,P,te)):P=pe,k&&to(k),(me=P.props&&P.props.onVnodeBeforeUpdate)&&Cn(me,q,P,pe),Ri(R,!0);const Ie=Fc(R),de=R.subTree;R.subTree=Ie,v(de,Ie,f(de.el),xe(de),R,J,ee),P.el=Ie.el,fe===null&&Jp(R,Ie.el),X&&Yt(X,J),(me=P.props&&P.props.onVnodeUpdated)&&Yt(()=>Cn(me,q,P,pe),J)}else{let P;const{el:k,props:X}=U,{bm:q,m:pe,parent:fe,root:me,type:Ie}=R,de=rs(U);Ri(R,!1),q&&to(q),!de&&(P=X&&X.onVnodeBeforeMount)&&Cn(P,fe,U),Ri(R,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(Ie,R.parent?R.parent.type:void 0);const Se=R.subTree=Fc(R);v(null,Se,y,oe,R,J,ee),U.el=Se.el}if(pe&&Yt(pe,J),!de&&(P=X&&X.onVnodeMounted)){const Se=U;Yt(()=>Cn(P,fe,Se),J)}(U.shapeFlag&256||fe&&rs(fe.vnode)&&fe.vnode.shapeFlag&256)&&R.a&&Yt(R.a,J),R.isMounted=!0,U=y=oe=null}};R.scope.on();const W=R.effect=new Af(ae);R.scope.off();const S=R.update=W.run.bind(W),_=R.job=W.runIfDirty.bind(W);_.i=R,_.id=R.uid,W.scheduler=()=>ec(_),Ri(R,!0),S()},ne=(R,U,y)=>{U.component=R;const oe=R.vnode.props;R.vnode=U,R.next=null,em(R,U.props,oe,y),rm(R,U.children,y),si(),Cc(R),oi()},V=(R,U,y,oe,J,ee,te,ae,W=!1)=>{const S=R&&R.children,_=R?R.shapeFlag:0,P=U.children,{patchFlag:k,shapeFlag:X}=U;if(k>0){if(k&128){be(S,P,y,oe,J,ee,te,ae,W);return}else if(k&256){_e(S,P,y,oe,J,ee,te,ae,W);return}}X&8?(_&16&&Ae(S,J,ee),P!==S&&c(y,P)):_&16?X&16?be(S,P,y,oe,J,ee,te,ae,W):Ae(S,J,ee,!0):(_&8&&c(y,""),X&16&&z(P,y,oe,J,ee,te,ae,W))},_e=(R,U,y,oe,J,ee,te,ae,W)=>{R=R||xr,U=U||xr;const S=R.length,_=U.length,P=Math.min(S,_);let k;for(k=0;k<P;k++){const X=U[k]=W?Jn(U[k]):Ln(U[k]);v(R[k],X,y,null,J,ee,te,ae,W)}S>_?Ae(R,J,ee,!0,!1,P):z(U,y,oe,J,ee,te,ae,W,P)},be=(R,U,y,oe,J,ee,te,ae,W)=>{let S=0;const _=U.length;let P=R.length-1,k=_-1;for(;S<=P&&S<=k;){const X=R[S],q=U[S]=W?Jn(U[S]):Ln(U[S]);if(Gr(X,q))v(X,q,y,null,J,ee,te,ae,W);else break;S++}for(;S<=P&&S<=k;){const X=R[P],q=U[k]=W?Jn(U[k]):Ln(U[k]);if(Gr(X,q))v(X,q,y,null,J,ee,te,ae,W);else break;P--,k--}if(S>P){if(S<=k){const X=k+1,q=X<_?U[X].el:oe;for(;S<=k;)v(null,U[S]=W?Jn(U[S]):Ln(U[S]),y,q,J,ee,te,ae,W),S++}}else if(S>k)for(;S<=P;)Le(R[S],J,ee,!0),S++;else{const X=S,q=S,pe=new Map;for(S=q;S<=k;S++){const ve=U[S]=W?Jn(U[S]):Ln(U[S]);ve.key!=null&&pe.set(ve.key,S)}let fe,me=0;const Ie=k-q+1;let de=!1,Se=0;const De=new Array(Ie);for(S=0;S<Ie;S++)De[S]=0;for(S=X;S<=P;S++){const ve=R[S];if(me>=Ie){Le(ve,J,ee,!0);continue}let Fe;if(ve.key!=null)Fe=pe.get(ve.key);else for(fe=q;fe<=k;fe++)if(De[fe-q]===0&&Gr(ve,U[fe])){Fe=fe;break}Fe===void 0?Le(ve,J,ee,!0):(De[Fe-q]=S+1,Fe>=Se?Se=Fe:de=!0,v(ve,U[Fe],y,null,J,ee,te,ae,W),me++)}const Ne=de?lm(De):xr;for(fe=Ne.length-1,S=Ie-1;S>=0;S--){const ve=q+S,Fe=U[ve],Ve=U[ve+1],it=ve+1<_?Ve.el||pd(Ve):oe;De[S]===0?v(null,Fe,y,it,J,ee,te,ae,W):de&&(fe<0||S!==Ne[fe]?Me(Fe,y,it,2):fe--)}}},Me=(R,U,y,oe,J=null)=>{const{el:ee,type:te,transition:ae,children:W,shapeFlag:S}=R;if(S&6){Me(R.component.subTree,U,y,oe);return}if(S&128){R.suspense.move(U,y,oe);return}if(S&64){te.move(R,U,y,We);return}if(te===Nt){i(ee,U,y);for(let P=0;P<W.length;P++)Me(W[P],U,y,oe);i(R.anchor,U,y);return}if(te===io){A(R,U,y);return}if(oe!==2&&S&1&&ae)if(oe===0)ae.beforeEnter(ee),i(ee,U,y),Yt(()=>ae.enter(ee),J);else{const{leave:P,delayLeave:k,afterLeave:X}=ae,q=()=>{R.ctx.isUnmounted?r(ee):i(ee,U,y)},pe=()=>{ee._isLeaving&&ee[Tp](!0),P(ee,()=>{q(),X&&X()})};k?k(ee,q,pe):pe()}else i(ee,U,y)},Le=(R,U,y,oe=!1,J=!1)=>{const{type:ee,props:te,ref:ae,children:W,dynamicChildren:S,shapeFlag:_,patchFlag:P,dirs:k,cacheIndex:X,memo:q}=R;if(P===-2&&(J=!1),ae!=null&&(si(),is(ae,null,y,R,!0),oi()),X!=null&&(U.renderCache[X]=void 0),_&256){U.ctx.deactivate(R);return}const pe=_&1&&k,fe=!rs(R);let me;if(fe&&(me=te&&te.onVnodeBeforeUnmount)&&Cn(me,U,R),_&6)ge(R.component,y,oe);else{if(_&128){R.suspense.unmount(y,oe);return}pe&&Ai(R,null,U,"beforeUnmount"),_&64?R.type.remove(R,U,y,We,oe):S&&!S.hasOnce&&(ee!==Nt||P>0&&P&64)?Ae(S,U,y,!1,!0):(ee===Nt&&P&384||!J&&_&16)&&Ae(W,U,y),oe&&Ce(R)}const Ie=q!=null&&X==null;(fe&&(me=te&&te.onVnodeUnmounted)||pe||Ie)&&Yt(()=>{me&&Cn(me,U,R),pe&&Ai(R,null,U,"unmounted"),Ie&&(R.el=null)},y)},Ce=R=>{const{type:U,el:y,anchor:oe,transition:J}=R;if(U===Nt){re(y,oe);return}if(U===io){E(R);return}const ee=()=>{r(y),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:te,delayLeave:ae}=J,W=()=>te(y,ee);ae?ae(R.el,ee,W):W()}else ee()},re=(R,U)=>{let y;for(;R!==U;)y=h(R),r(R),R=y;r(U)},ge=(R,U,y)=>{const{bum:oe,scope:J,job:ee,subTree:te,um:ae,m:W,a:S}=R;zc(W),zc(S),oe&&to(oe),J.stop(),ee&&(ee.flags|=8,Le(te,R,U,y)),ae&&Yt(ae,U),Yt(()=>{R.isUnmounted=!0},U)},Ae=(R,U,y,oe=!1,J=!1,ee=0)=>{for(let te=ee;te<R.length;te++)Le(R[te],U,y,oe,J)},xe=R=>{if(R.shapeFlag&6)return xe(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=h(R.anchor||R.el),y=U&&U[yp];return y?h(y):U};let Ue=!1;const Be=(R,U,y)=>{let oe;R==null?U._vnode&&(Le(U._vnode,null,null,!0),oe=U._vnode.component):v(U._vnode||null,R,U,null,null,null,y),U._vnode=R,Ue||(Ue=!0,Cc(oe),Wf(),Ue=!1)},We={p:v,um:Le,m:Me,r:Ce,mt:se,mc:z,pc:V,pbc:T,n:xe,o:n};return{render:Be,hydrate:void 0,createApp:Xp(Be)}}function ra({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ri({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function am(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function dd(n,e,t=!1){const i=n.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Jn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&dd(o,a)),a.type===Oo&&(a.patchFlag===-1&&(a=r[s]=Jn(a)),a.el=o.el),a.type===Mi&&!a.el&&(a.el=o.el)}}function lm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function hd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hd(e)}function zc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function pd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?pd(e.subTree):null}const md=n=>n.__isSuspense;function cm(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):_p(n)}const Nt=Symbol.for("v-fgt"),Oo=Symbol.for("v-txt"),Mi=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),os=[];let rn=null;function tt(n=!1){os.push(rn=n?null:[])}function um(){os.pop(),rn=os[os.length-1]||null}let us=1;function Hc(n,e=!1){us+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function gd(n){return n.dynamicChildren=us>0?rn||xr:null,um(),us>0&&rn&&rn.push(n),n}function rt(n,e,t,i,r,s){return gd(M(n,e,t,i,r,s,!0))}function fm(n,e,t,i,r){return gd(Bn(n,e,t,i,r,!0))}function _d(n){return n?n.__v_isVNode===!0:!1}function Gr(n,e){return n.type===e.type&&n.key===e.key}const vd=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Bt(n)||je(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function M(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vd(e),ref:e&&ro(e),scopeId:qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(sc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),us>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const Bn=dm;function dm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Op)&&(n=Mi),_d(n)){const a=Rr(n,e,!0);return t&&sc(a,t),us>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(bm(n)&&(n=n.__vccOpts),e){e=hm(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=jt(a)),ft(l)&&(Ql(l)&&!Ge(l)&&(l=zt({},l)),e.style=Ut(l))}const o=St(n)?1:md(n)?128:bp(n)?64:ft(n)?4:je(n)?2:0;return M(n,e,t,i,r,o,s,!0)}function hm(n){return n?Ql(n)||od(n)?zt({},n):n:null}function Rr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?mm(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&vd(u),ref:e&&e.ref?t&&s?Ge(s)?s.concat(ro(e)):[s,ro(e)]:ro(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Rr(n.ssContent),ssFallback:n.ssFallback&&Rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&tc(c,l.clone(c)),c}function pm(n=" ",e=0){return Bn(Oo,null,n,e)}function Ls(n,e){const t=Bn(io,null,n);return t.staticCount=e,t}function Ci(n="",e=!1){return e?(tt(),fm(Mi,null,n)):Bn(Mi,null,n)}function Ln(n){return n==null||typeof n=="boolean"?Bn(Mi):Ge(n)?Bn(Nt,null,n.slice()):_d(n)?Jn(n):Bn(Oo,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Rr(n)}function sc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),sc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!od(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[pm(e)]):t=8);n.children=e,n.shapeFlag|=t}function mm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=jt([e.class,i.class]));else if(r==="style")e.style=Ut([e.style,i.style]);else if(wo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ge(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ro(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Cn(n,e,t,i=null){kn(n,e,7,[t,i])}const gm=td();let _m=0;function vm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||gm,s={uid:_m++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(i,r),emitsOptions:nd(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$p.bind(null,s),n.ce&&n.ce(s),s}let Wt=null;const xm=()=>Wt||hn;let So,Ka;{const n=Lo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};So=e("__VUE_INSTANCE_SETTERS__",t=>Wt=t),Ka=e("__VUE_SSR_SETTERS__",t=>fs=t)}const gs=n=>{const e=Wt;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},Vc=()=>{Wt&&Wt.scope.off(),So(null)};function xd(n){return n.vnode.shapeFlag&4}let fs=!1;function Sm(n,e=!1,t=!1){e&&Ka(e);const{props:i,children:r}=n.vnode,s=xd(n);Qp(n,i,s,e),im(n,r,t||e);const o=s?Mm(n,e):void 0;return e&&Ka(!1),o}function Mm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Bp);const{setup:i}=t;if(i){si();const r=n.setupContext=i.length>1?ym(n):null,s=gs(n),o=ms(i,n,0,[n.props,r]),a=vf(o);if(oi(),s(),(a||n.sp)&&!rs(n)&&jf(n),a){if(o.then(Vc,Vc),e)return o.then(l=>{kc(n,l)}).catch(l=>{Io(l,n,0)});n.asyncDep=o}else kc(n,o)}else Sd(n)}function kc(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=Hf(e)),Sd(n)}function Sd(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const r=gs(n);si();try{zp(n)}finally{oi(),r()}}}const Em={get(n,e){return Ft(n,"get",""),n[e]}};function ym(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:e}}function Bo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hf(op(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ss)return ss[t](n)},has(e,t){return t in e||t in ss}})):n.proxy}function bm(n){return je(n)&&"__vccOpts"in n}const Tm=(n,e)=>dp(n,e,fs),Am="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Za;const Gc=typeof window<"u"&&window.trustedTypes;if(Gc)try{Za=Gc.createPolicy("vue",{createHTML:n=>n})}catch{}const Md=Za?n=>Za.createHTML(n):n=>n,wm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,Wc=Zn&&Zn.createElement("template"),Cm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Zn.createElementNS(wm,n):e==="mathml"?Zn.createElementNS(Rm,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Wc.innerHTML=Md(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Wc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pm=Symbol("_vtc");function Dm(n,e,t){const i=n[Pm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xc=Symbol("_vod"),Lm=Symbol("_vsh"),Um=Symbol(""),Im=/(?:^|;)\s*display\s*:/;function Nm(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Zr(i,a,"")}else for(const o in e)t[o]==null&&Zr(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Om(n,o,!St(e)&&e?e[o]:void 0,a)||Zr(i,o,a):Zr(i,o,"")}}else if(r){if(e!==t){const o=i[Um];o&&(t+=";"+o),i.cssText=t,s=Im.test(t)}}else e&&n.removeAttribute("style");Xc in n&&(n[Xc]=s?i.display:"",n[Lm]&&(i.display="none"))}const qc=/\s*!important$/;function Zr(n,e,t){if(Ge(t))t.forEach(i=>Zr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fm(n,e);qc.test(t)?n.setProperty(Zi(i),t.replace(qc,""),"important"):n[i]=t}}const $c=["Webkit","Moz","ms"],sa={};function Fm(n,e){const t=sa[e];if(t)return t;let i=En(e);if(i!=="filter"&&i in n)return sa[e]=i;i=Mf(i);for(let r=0;r<$c.length;r++){const s=$c[r]+i;if(s in n)return sa[e]=s}return e}function Om(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&St(i)&&t===i}const Yc="http://www.w3.org/1999/xlink";function jc(n,e,t,i,r,s=Fh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yc,e.slice(6,e.length)):n.setAttributeNS(Yc,e,t):t==null||s&&!yf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Vn(t)?String(t):t)}function Kc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Md(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=yf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function zi(n,e,t,i){n.addEventListener(e,t,i)}function Bm(n,e,t,i){n.removeEventListener(e,t,i)}const Zc=Symbol("_vei");function zm(n,e,t,i,r=null){const s=n[Zc]||(n[Zc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Hm(e);if(i){const u=s[e]=Gm(i,r);zi(n,a,u,l)}else o&&(Bm(n,a,o,l),s[e]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function Hm(n){let e;if(Jc.test(n)){e={};let i;for(;i=n.match(Jc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Zi(n.slice(2)),e]}let oa=0;const Vm=Promise.resolve(),km=()=>oa||(Vm.then(()=>oa=0),oa=Date.now());function Gm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;kn(Wm(i,t.value),e,5,[i])};return t.value=n,t.attached=km(),t}function Wm(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Dm(n,i,o):e==="style"?Nm(n,t,i):wo(e)?Ro(e)||zm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qm(n,e,i,o))?(Kc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jc(n,e,i,o,s,e!=="value")):n._isVueCE&&($m(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!St(i)))?Kc(n,En(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jc(n,e,i,o))};function qm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qc(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qc(e)&&St(t)?!1:e in n}function $m(n,e){const t=n._def.props;if(!t)return!1;const i=En(e);return Array.isArray(t)?t.some(r=>En(r)===i):Object.keys(t).some(r=>En(r)===i)}const Mo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ge(e)?t=>to(e,t):e};function Ym(n){n.target.composing=!0}function eu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yr=Symbol("_assign");function tu(n,e,t){return e&&(n=n.trim()),t&&(n=Do(n)),n}const gn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[yr]=Mo(r);const s=i||r.props&&r.props.type==="number";zi(n,e?"change":"input",o=>{o.target.composing||n[yr](tu(n.value,t,s))}),(t||s)&&zi(n,"change",()=>{n.value=tu(n.value,t,s)}),e||(zi(n,"compositionstart",Ym),zi(n,"compositionend",eu),zi(n,"change",eu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[yr]=Mo(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Do(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Wn={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Co(e);zi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Do(Eo(o)):Eo(o));n[yr](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,kf(()=>{n._assigning=!1})}),n[yr]=Mo(i)},mounted(n,{value:e}){nu(n,e)},beforeUpdate(n,e,t){n[yr]=Mo(t)},updated(n,{value:e}){n._assigning||nu(n,e)}};function nu(n,e){const t=n.multiple,i=Ge(e);if(!(t&&!i&&!Co(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Eo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Bh(e,a)>-1}else o.selected=e.has(a);else if(ps(Eo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Eo(n){return"_value"in n?n._value:n.value}const jm=zt({patchProp:Xm},Cm);let iu;function Km(){return iu||(iu=sm(jm))}const Zm=((...n)=>{const e=Km().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Qm(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Jm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Jm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qm(n){return St(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="172",eg=0,ru=1,tg=2,Ed=1,ng=2,Kn=3,Ei=0,Kt=1,ti=2,xi=0,br=1,su=2,ou=3,au=4,ig=5,Hi=100,rg=101,sg=102,og=103,ag=104,lg=200,cg=201,ug=202,fg=203,Ja=204,Qa=205,dg=206,hg=207,pg=208,mg=209,gg=210,_g=211,vg=212,xg=213,Sg=214,el=0,tl=1,nl=2,Cr=3,il=4,rl=5,sl=6,ol=7,yd=0,Mg=1,Eg=2,Si=0,yg=1,bg=2,Tg=3,Ag=4,wg=5,Rg=6,Cg=7,bd=300,Pr=301,Dr=302,al=303,ll=304,zo=306,cl=1e3,ki=1001,ul=1002,bn=1003,Pg=1004,Us=1005,Nn=1006,aa=1007,Gi=1008,li=1009,Td=1010,Ad=1011,ds=1012,ac=1013,Yi=1014,ni=1015,_s=1016,lc=1017,cc=1018,Lr=1020,wd=35902,Rd=1021,Cd=1022,Mn=1023,Pd=1024,Dd=1025,Tr=1026,Ur=1027,Ld=1028,uc=1029,Ud=1030,fc=1031,dc=1033,so=33776,oo=33777,ao=33778,lo=33779,fl=35840,dl=35841,hl=35842,pl=35843,ml=36196,gl=37492,_l=37496,vl=37808,xl=37809,Sl=37810,Ml=37811,El=37812,yl=37813,bl=37814,Tl=37815,Al=37816,wl=37817,Rl=37818,Cl=37819,Pl=37820,Dl=37821,co=36492,Ll=36494,Ul=36495,Id=36283,Il=36284,Nl=36285,Fl=36286,Dg=3200,Lg=3201,Ug=0,Ig=1,vi="",fn="srgb",Ir="srgb-linear",yo="linear",ct="srgb",tr=7680,lu=519,Ng=512,Fg=513,Og=514,Nd=515,Bg=516,zg=517,Hg=518,Vg=519,cu=35044,uu="300 es",ii=2e3,bo=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Ol=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function kg(n,e){return(n%e+e)%e}function ca(n,e,t){return(1-t)*n+t*e}function Wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],d=r[6],C=r[1],A=r[4],E=r[7],I=r[2],N=r[5],D=r[8];return s[0]=o*v+a*C+l*I,s[3]=o*p+a*A+l*N,s[6]=o*d+a*E+l*D,s[1]=u*v+c*C+f*I,s[4]=u*p+c*A+f*N,s[7]=u*d+c*E+f*D,s[2]=h*v+m*C+g*I,s[5]=h*p+m*A+g*N,s[8]=h*d+m*E+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Ye;function Fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){const n=To("canvas");return n.style.display="block",n}const fu={};function _r(n){n in fu||(fu[n]=!0,console.warn(n))}function Wg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Xg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const du=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){const n={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?yo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ir]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:du,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:du,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const nt=$g();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let nr;class Yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=To("canvas")),nr.width=e.width,nr.height=e.height;const i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jg=0;class Od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fa(r[o].image)):s.push(fa(r[o]))}else s=fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kg=0;class Zt extends Or{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=ki,r=ki,s=Nn,o=Gi,a=Mn,l=li,u=Zt.DEFAULT_ANISOTROPY,c=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=vs(),this.name="",this.source=new Od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cl:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cl:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=bd;Zt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,E=(m+1)/2,I=(d+1)/2,N=(c+h)/4,D=(f+v)/4,z=(g+p)/4;return A>E&&A>I?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=N/i,s=D/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=N/r,s=z/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=D/s,r=z/s),this.set(i,r,s,t),this}let C=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(f-v)/C,this.z=(h-c)/C,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zg extends Or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Zg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bd extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jg extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||u!==m||c!==g){let p=1-a;const d=l*h+u*m+c*g+f*v,C=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const I=Math.sqrt(A),N=Math.atan2(I,d*C);p=Math.sin(p*N)/I,a=Math.sin(a*N)/I}const E=a*C;if(l=l*p+h*E,u=u*p+m*E,c=c*p+g*E,f=f*p+v*E,p===1-a){const I=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=I,u*=I,c*=I,f*=I}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*m-u*h,e[t+1]=l*g+c*h+u*f-a*m,e[t+2]=u*g+c*m+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"YXZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"ZXY":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"ZYX":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"YZX":this._x=h*c*f+u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f-h*m*g;break;case"XZY":this._x=h*c*f-u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new Z,pu=new xs;class Ss{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Ns.subVectors(this.max,Xr),ir.subVectors(e.a,Xr),rr.subVectors(e.b,Xr),sr.subVectors(e.c,Xr),fi.subVectors(rr,ir),di.subVectors(sr,rr),Pi.subVectors(ir,sr);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,di.z,0,-di.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Pi.y,Pi.x,0];return!ha(t,ir,rr,sr,Ns)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,ir,rr,sr,Ns))?!1:(Fs.crossVectors(fi,di),t=[Fs.x,Fs.y,Fs.z],ha(t,ir,rr,sr,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],_n=new Z,Is=new Ss,ir=new Z,rr=new Z,sr=new Z,fi=new Z,di=new Z,Pi=new Z,Xr=new Z,Ns=new Z,Fs=new Z,Di=new Z;function ha(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Di.fromArray(n,s);const a=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),u=t.dot(Di),c=i.dot(Di);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Qg=new Ss,qr=new Z,pa=new Z;class hc{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(pa)),this.expandByPoint(qr.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new Z,ma=new Z,Os=new Z,hi=new Z,ga=new Z,Bs=new Z,_a=new Z;class e_{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ma.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=hi.dot(this.direction),l=-hi.dot(Os),u=hi.lengthSq(),c=Math.abs(1-o*o);let f,h,m,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const v=1/c;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ma).addScaledVector(Os,h),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){ga.subVectors(t,e),Bs.subVectors(i,e),_a.crossVectors(ga,Bs);let o=this.direction.dot(_a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Bs.crossVectors(hi,Bs));if(l<0)return null;const u=a*this.direction.dot(ga.cross(hi));if(u<0||l+u>o)return null;const c=-a*hi.dot(_a);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,s,o,a,l,u,c,f,h,m,g,v,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,m,g,v,p)}set(e,t,i,r,s,o,a,l,u,c,f,h,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+g*u,t[5]=h-v*u,t[9]=-a*l,t[2]=v-h*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,g=u*c,v=u*f;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,g=u*c,v=u*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=v-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=g*u-m,t[8]=h*u+v,t[1]=l*f,t[5]=v*u+h,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,m=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+v,t[5]=o*c,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*c,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),pi.crossVectors(i,tn),pi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),pi.crossVectors(i,tn)),pi.normalize(),zs.crossVectors(tn,pi),r[0]=pi.x,r[4]=zs.x,r[8]=tn.x,r[1]=pi.y,r[5]=zs.y,r[9]=tn.y,r[2]=pi.z,r[6]=zs.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],C=i[3],A=i[7],E=i[11],I=i[15],N=r[0],D=r[4],z=r[8],w=r[12],T=r[1],F=r[5],ie=r[9],Y=r[13],se=r[2],le=r[6],j=r[10],ne=r[14],V=r[3],_e=r[7],be=r[11],Me=r[15];return s[0]=o*N+a*T+l*se+u*V,s[4]=o*D+a*F+l*le+u*_e,s[8]=o*z+a*ie+l*j+u*be,s[12]=o*w+a*Y+l*ne+u*Me,s[1]=c*N+f*T+h*se+m*V,s[5]=c*D+f*F+h*le+m*_e,s[9]=c*z+f*ie+h*j+m*be,s[13]=c*w+f*Y+h*ne+m*Me,s[2]=g*N+v*T+p*se+d*V,s[6]=g*D+v*F+p*le+d*_e,s[10]=g*z+v*ie+p*j+d*be,s[14]=g*w+v*Y+p*ne+d*Me,s[3]=C*N+A*T+E*se+I*V,s[7]=C*D+A*F+E*le+I*_e,s[11]=C*z+A*ie+E*j+I*be,s[15]=C*w+A*Y+E*ne+I*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+v*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],C=f*p*u-v*h*u+v*l*m-a*p*m-f*l*d+a*h*d,A=g*h*u-c*p*u-g*l*m+o*p*m+c*l*d-o*h*d,E=c*v*u-g*f*u+g*a*m-o*v*m-c*a*d+o*f*d,I=g*f*l-c*v*l-g*a*h+o*v*h+c*a*p-o*f*p,N=t*C+i*A+r*E+s*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=C*D,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*D,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*d+i*l*d)*D,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*D,e[4]=A*D,e[5]=(c*p*s-g*h*s+g*r*m-t*p*m-c*r*d+t*h*d)*D,e[6]=(g*l*s-o*p*s-g*r*u+t*p*u+o*r*d-t*l*d)*D,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*D,e[8]=E*D,e[9]=(g*f*s-c*v*s-g*i*m+t*v*m+c*i*d-t*f*d)*D,e[10]=(o*v*s-g*a*s+g*i*u-t*v*u-o*i*d+t*a*d)*D,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*D,e[12]=I*D,e[13]=(c*v*r-g*f*r+g*i*h-t*v*h-c*i*p+t*f*p)*D,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*p-t*a*p)*D,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,g=s*f,v=o*c,p=o*f,d=a*f,C=l*u,A=l*c,E=l*f,I=i.x,N=i.y,D=i.z;return r[0]=(1-(v+d))*I,r[1]=(m+E)*I,r[2]=(g-A)*I,r[3]=0,r[4]=(m-E)*N,r[5]=(1-(h+d))*N,r[6]=(p+C)*N,r[7]=0,r[8]=(g+A)*D,r[9]=(p-C)*D,r[10]=(1-(h+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),a=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const u=1/s,c=1/o,f=1/a;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ii){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(a===ii)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===bo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ii){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,m=(i+r)*c;let g,v;if(a===ii)g=(o+s)*f,v=-2*f;else if(a===bo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new Z,vn=new At,t_=new Z(0,0,0),n_=new Z(1,1,1),pi=new Z,zs=new Z,tn=new Z,mu=new At,gu=new xs;class ci{constructor(e=0,t=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i_=0;const _u=new Z,ar=new xs,$n=new At,Hs=new Z,$r=new Z,r_=new Z,s_=new xs,vu=new Z(1,0,0),xu=new Z(0,1,0),Su=new Z(0,0,1),Mu={type:"added"},o_={type:"removed"},lr={type:"childadded",child:null},va={type:"childremoved",child:null};class sn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new Z,t=new ci,i=new xs,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ye}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($r,Hs,this.up):$n.lookAt(Hs,$r,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),ar.setFromRotationMatrix($n),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o_),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new Z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new Z,Yn=new Z,xa=new Z,jn=new Z,cr=new Z,ur=new Z,Eu=new Z,Sa=new Z,Ma=new Z,Ea=new Z,ya=new Mt,ba=new Mt,Ta=new Mt;class Sn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xn.subVectors(r,t),Yn.subVectors(i,t),xa.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Yn),l=xn.dot(xa),u=Yn.dot(Yn),c=Yn.dot(xa),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ya.setScalar(0),ba.setScalar(0),Ta.setScalar(0),ya.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ya,s.x),o.addScaledVector(ba,s.y),o.addScaledVector(Ta,s.z),o}static isFrontFacing(e,t,i,r){return xn.subVectors(i,t),Yn.subVectors(e,t),xn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),xn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;cr.subVectors(r,i),ur.subVectors(s,i),Sa.subVectors(e,i);const l=cr.dot(Sa),u=ur.dot(Sa);if(l<=0&&u<=0)return t.copy(i);Ma.subVectors(e,r);const c=cr.dot(Ma),f=ur.dot(Ma);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(cr,o);Ea.subVectors(e,s);const m=cr.dot(Ea),g=ur.dot(Ea);if(g>=0&&m<=g)return t.copy(s);const v=m*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ur,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return Eu.subVectors(s,r),a=(f-c)/(f-c+(m-g)),t.copy(r).addScaledVector(Eu,a);const d=1/(p+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(cr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=kg(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Aa(o,s,e+1/3),this.g=Aa(o,s,e),this.b=Aa(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=Hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return nt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Je(Lt.r*255,0,255))*65536+Math.round(Je(Lt.g*255,0,255))*256+Math.round(Je(Lt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=fn){nt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Vs);const i=ca(mi.h,Vs.h,t),r=ca(mi.s,Vs.s,t),s=ca(mi.l,Vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ut;ut.NAMES=Hd;let a_=0;class Ho extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=br,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Qa&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pc extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new Z,ks=new ht;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cu&&(e.usage=this.usage),e}}class Vd extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kd extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hn extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l_=0;const cn=new At,wa=new sn,fr=new Z,nn=new Ss,Yr=new Ss,Ct=new Z;class bi extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?kd:Vd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,Yr.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,Yr.max),nn.expandByPoint(Ct)):(nn.expandByPoint(Yr.min),nn.expandByPoint(Yr.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ct.fromBufferAttribute(a,u),l&&(fr.fromBufferAttribute(e,u),Ct.add(fr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new Z,l[z]=new Z;const u=new Z,c=new Z,f=new Z,h=new ht,m=new ht,g=new ht,v=new Z,p=new Z;function d(z,w,T){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,z),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,T),c.sub(u),f.sub(u),m.sub(h),g.sub(h);const F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(F),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(F),a[z].add(v),a[w].add(v),a[T].add(v),l[z].add(p),l[w].add(p),l[T].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,w=C.length;z<w;++z){const T=C[z],F=T.start,ie=T.count;for(let Y=F,se=F+ie;Y<se;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const A=new Z,E=new Z,I=new Z,N=new Z;function D(z){I.fromBufferAttribute(r,z),N.copy(I);const w=a[z];A.copy(w),A.sub(I.multiplyScalar(I.dot(w))).normalize(),E.crossVectors(N,w);const F=E.dot(l[z])<0?-1:1;o.setXYZW(z,A.x,A.y,A.z,F)}for(let z=0,w=C.length;z<w;++z){const T=C[z],F=T.start,ie=T.count;for(let Y=F,se=F+ie;Y<se;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,u=new Z,c=new Z,f=new Z;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*c;for(let d=0;d<c;d++)h[g++]=u[m++]}return new zn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new At,Li=new e_,Gs=new hc,bu=new Z,Ws=new Z,Xs=new Z,qs=new Z,Ra=new Z,$s=new Z,Tu=new Z,Ys=new Z;class Fn extends sn{constructor(e=new bi,t=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ra.fromBufferAttribute(f,e),o?$s.addScaledVector(Ra,c):$s.addScaledVector(Ra.sub(t),c))}t.add($s)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Gs.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Gs,bu)===null||Li.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(yu.copy(s).invert(),Li.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],C=Math.max(p.start,m.start),A=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=C,I=A;E<I;E+=3){const N=a.getX(E),D=a.getX(E+1),z=a.getX(E+2);r=js(this,d,e,i,u,c,f,N,D,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const C=a.getX(p),A=a.getX(p+1),E=a.getX(p+2);r=js(this,o,e,i,u,c,f,C,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],C=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=C,I=A;E<I;E+=3){const N=E,D=E+1,z=E+2;r=js(this,d,e,i,u,c,f,N,D,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const C=p,A=p+1,E=p+2;r=js(this,o,e,i,u,c,f,C,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function c_(n,e,t,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ei,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ys);return u<t.near||u>t.far?null:{distance:u,point:Ys.clone(),object:n}}function js(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ws),n.getVertexPosition(l,Xs),n.getVertexPosition(u,qs);const c=c_(n,e,t,i,Ws,Xs,qs,Tu);if(c){const f=new Z;Sn.getBarycoord(Tu,Ws,Xs,qs,f),r&&(c.uv=Sn.getInterpolatedAttribute(r,a,l,u,f,new ht)),s&&(c.uv1=Sn.getInterpolatedAttribute(s,a,l,u,f,new ht)),o&&(c.normal=Sn.getInterpolatedAttribute(o,a,l,u,f,new Z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new Z,materialIndex:0};Sn.getNormal(Ws,Xs,qs,h.normal),c.face=h,c.barycoord=f}return c}class Ms extends bi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(c,3)),this.setAttribute("uv",new Hn(f,2));function g(v,p,d,C,A,E,I,N,D,z,w){const T=E/D,F=I/z,ie=E/2,Y=I/2,se=N/2,le=D+1,j=z+1;let ne=0,V=0;const _e=new Z;for(let be=0;be<j;be++){const Me=be*F-Y;for(let Le=0;Le<le;Le++){const Ce=Le*T-ie;_e[v]=Ce*C,_e[p]=Me*A,_e[d]=se,u.push(_e.x,_e.y,_e.z),_e[v]=0,_e[p]=0,_e[d]=N>0?1:-1,c.push(_e.x,_e.y,_e.z),f.push(Le/D),f.push(1-be/z),ne+=1}}for(let be=0;be<z;be++)for(let Me=0;Me<D;Me++){const Le=h+Me+le*be,Ce=h+Me+le*(be+1),re=h+(Me+1)+le*(be+1),ge=h+(Me+1)+le*be;l.push(Le,Ce,ge),l.push(Ce,re,ge),V+=6}a.addGroup(m,V,w),m+=V,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Nr(n[t]);for(const r in i)e[r]=i[r]}return e}function u_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const f_={clone:Nr,merge:kt};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wd extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new Z,Au=new ht,wu=new ht;class dn extends Wd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Au,wu),t.subVectors(wu,Au)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,hr=1;class p_ extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(dr,hr,e,t);r.layers=this.layers,this.add(r);const s=new dn(dr,hr,e,t);s.layers=this.layers,this.add(s);const o=new dn(dr,hr,e,t);o.layers=this.layers,this.add(o);const a=new dn(dr,hr,e,t);a.layers=this.layers,this.add(a);const l=new dn(dr,hr,e,t);l.layers=this.layers,this.add(l);const u=new dn(dr,hr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xd extends Zt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m_ extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ms(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:xi});s.uniforms.tEquirect.value=t;const o=new Fn(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Nn),new p_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class g_ extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ca=new Z,__=new Z,v_=new Ye;class Oi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ca.subVectors(i,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v_.getNormalMatrix(e),r=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new hc,Ks=new Z;class qd{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],d=r[12],C=r[13],A=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,p-m,E-d).normalize(),i[1].setComponents(l+s,h+u,p+m,E+d).normalize(),i[2].setComponents(l+o,h+c,p+g,E+C).normalize(),i[3].setComponents(l-o,h-c,p-g,E-C).normalize(),i[4].setComponents(l-a,h-f,p-v,E-A).normalize(),t===ii)i[5].setComponents(l+a,h+f,p+v,E+A).normalize();else if(t===bo)i[5].setComponents(a,f,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ks.x=r.normal.x>0?e.max.x:e.min.x,Ks.y=r.normal.y>0?e.max.y:e.min.y,Ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jr extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $d extends Zt{constructor(e,t,i,r,s,o,a,l,u,c=Tr){if(c!==Tr&&c!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Tr&&(i=Yi),i===void 0&&c===Ur&&(i=Lr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vo extends bi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<c;d++){const C=d*h-o;for(let A=0;A<u;A++){const E=A*f-s;g.push(E,-C,0),v.push(0,0,1),p.push(A/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){const A=C+u*d,E=C+u*(d+1),I=C+1+u*(d+1),N=C+1+u*d;m.push(A,E,N),m.push(E,I,N)}this.setIndex(m),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(v,3)),this.setAttribute("uv",new Hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class mc extends bi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new Z,h=new Z,m=[],g=[],v=[],p=[];for(let d=0;d<=i;d++){const C=[],A=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const N=I/t;f.x=-e*Math.cos(r+N*s)*Math.sin(o+A*a),f.y=e*Math.cos(o+A*a),f.z=e*Math.sin(r+N*s)*Math.sin(o+A*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(N+E,1-A),C.push(u++)}c.push(C)}for(let d=0;d<i;d++)for(let C=0;C<t;C++){const A=c[d][C+1],E=c[d][C],I=c[d+1][C],N=c[d+1][C+1];(d!==0||o>0)&&m.push(A,E,N),(d!==i-1||l<Math.PI)&&m.push(E,I,N)}this.setIndex(m),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(v,3)),this.setAttribute("uv",new Hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x_ extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S_ extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class M_ extends Wd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E_ extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Ru(n,e,t,i){const r=y_(i);switch(t){case Rd:return n*e;case Pd:return n*e;case Dd:return n*e*2;case Ld:return n*e/r.components*r.byteLength;case uc:return n*e/r.components*r.byteLength;case Ud:return n*e*2/r.components*r.byteLength;case fc:return n*e*2/r.components*r.byteLength;case Cd:return n*e*3/r.components*r.byteLength;case Mn:return n*e*4/r.components*r.byteLength;case dc:return n*e*4/r.components*r.byteLength;case so:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:case pl:return Math.max(n,16)*Math.max(e,8)/4;case fl:case hl:return Math.max(n,8)*Math.max(e,8)/2;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case co:case Ll:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Id:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nl:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y_(n){switch(n){case li:case Td:return{byteLength:1,components:1};case ds:case Ad:case _s:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case Yi:case ac:case ni:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function b_(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var T_=`#ifdef USE_ALPHAHASH
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
}`,Ke={alphahash_fragment:T_,alphahash_pars_fragment:A_,alphamap_fragment:w_,alphamap_pars_fragment:R_,alphatest_fragment:C_,alphatest_pars_fragment:P_,aomap_fragment:D_,aomap_pars_fragment:L_,batching_pars_vertex:U_,batching_vertex:I_,begin_vertex:N_,beginnormal_vertex:F_,bsdfs:O_,iridescence_fragment:B_,bumpmap_pars_fragment:z_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:G_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:K_,displacementmap_pars_vertex:Z_,displacementmap_vertex:J_,emissivemap_fragment:Q_,emissivemap_pars_fragment:ev,colorspace_fragment:tv,colorspace_pars_fragment:nv,envmap_fragment:iv,envmap_common_pars_fragment:rv,envmap_pars_fragment:sv,envmap_pars_vertex:ov,envmap_physical_pars_fragment:_v,envmap_vertex:av,fog_vertex:lv,fog_pars_vertex:cv,fog_fragment:uv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:hv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:gv,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Mv,lights_physical_fragment:Ev,lights_physical_pars_fragment:yv,lights_fragment_begin:bv,lights_fragment_maps:Tv,lights_fragment_end:Av,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Pv,map_fragment:Dv,map_pars_fragment:Lv,map_particle_fragment:Uv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Ov,morphcolor_vertex:Bv,morphnormal_vertex:zv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Vv,normal_fragment_begin:kv,normal_fragment_maps:Gv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:qv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:Zv,opaque_fragment:Jv,packing:Qv,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:u0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:h0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:S0,uv_pars_vertex:M0,uv_vertex:E0,worldpos_vertex:y0,background_vert:b0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:w0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:D0,distanceRGBA_vert:L0,distanceRGBA_frag:U0,equirect_vert:I0,equirect_frag:N0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:k0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:$0,meshphysical_vert:Y0,meshphysical_frag:j0,meshtoon_vert:K0,meshtoon_frag:Z0,points_vert:J0,points_frag:Q0,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},ye={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Un={basic:{uniforms:kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:kt([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:kt([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:kt([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:kt([ye.common,ye.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:kt([ye.lights,ye.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Un.physical={uniforms:kt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Zs={r:0,b:0,g:0},Ii=new ci,rx=new At;function sx(n,e,t,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const I=g(A);I===null?d(a,l):I&&I.isColor&&(d(I,1),E=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,E){const I=g(E);I&&(I.isCubeTexture||I.mapping===zo)?(c===void 0&&(c=new Fn(new Ms(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Nr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(N,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ii.copy(E.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),c.material.uniforms.envMap.value=I,c.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Ii)),c.material.toneMapped=nt.getTransfer(I.colorSpace)!==ct,(f!==I||h!==I.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new Fn(new Vo(2,2),new yi({name:"BackgroundMaterial",uniforms:Nr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=nt.getTransfer(I.colorSpace)!==ct,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,E){A.getRGB(Zs,Gd(n)),i.buffers.color.setClear(Zs.r,Zs.g,Zs.b,E,o)}function C(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:p,dispose:C}}function ox(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,F,ie,Y,se){let le=!1;const j=f(Y,ie,F);s!==j&&(s=j,u(s.object)),le=m(T,Y,ie,se),le&&g(T,Y,ie,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,E(T,F,ie,Y),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function u(T){return n.bindVertexArray(T)}function c(T){return n.deleteVertexArray(T)}function f(T,F,ie){const Y=ie.wireframe===!0;let se=i[T.id];se===void 0&&(se={},i[T.id]=se);let le=se[F.id];le===void 0&&(le={},se[F.id]=le);let j=le[Y];return j===void 0&&(j=h(l()),le[Y]=j),j}function h(T){const F=[],ie=[],Y=[];for(let se=0;se<t;se++)F[se]=0,ie[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ie,attributeDivisors:Y,object:T,attributes:{},index:null}}function m(T,F,ie,Y){const se=s.attributes,le=F.attributes;let j=0;const ne=ie.getAttributes();for(const V in ne)if(ne[V].location>=0){const be=se[V];let Me=le[V];if(Me===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),be===void 0||be.attribute!==Me||Me&&be.data!==Me.data)return!0;j++}return s.attributesNum!==j||s.index!==Y}function g(T,F,ie,Y){const se={},le=F.attributes;let j=0;const ne=ie.getAttributes();for(const V in ne)if(ne[V].location>=0){let be=le[V];be===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(be=T.instanceColor));const Me={};Me.attribute=be,be&&be.data&&(Me.data=be.data),se[V]=Me,j++}s.attributes=se,s.attributesNum=j,s.index=Y}function v(){const T=s.newAttributes;for(let F=0,ie=T.length;F<ie;F++)T[F]=0}function p(T){d(T,0)}function d(T,F){const ie=s.newAttributes,Y=s.enabledAttributes,se=s.attributeDivisors;ie[T]=1,Y[T]===0&&(n.enableVertexAttribArray(T),Y[T]=1),se[T]!==F&&(n.vertexAttribDivisor(T,F),se[T]=F)}function C(){const T=s.newAttributes,F=s.enabledAttributes;for(let ie=0,Y=F.length;ie<Y;ie++)F[ie]!==T[ie]&&(n.disableVertexAttribArray(ie),F[ie]=0)}function A(T,F,ie,Y,se,le,j){j===!0?n.vertexAttribIPointer(T,F,ie,se,le):n.vertexAttribPointer(T,F,ie,Y,se,le)}function E(T,F,ie,Y){v();const se=Y.attributes,le=ie.getAttributes(),j=F.defaultAttributeValues;for(const ne in le){const V=le[ne];if(V.location>=0){let _e=se[ne];if(_e===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor)),_e!==void 0){const be=_e.normalized,Me=_e.itemSize,Le=e.get(_e);if(Le===void 0)continue;const Ce=Le.buffer,re=Le.type,ge=Le.bytesPerElement,Ae=re===n.INT||re===n.UNSIGNED_INT||_e.gpuType===ac;if(_e.isInterleavedBufferAttribute){const xe=_e.data,Ue=xe.stride,Be=_e.offset;if(xe.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)d(V.location+We,xe.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let We=0;We<V.locationSize;We++)p(V.location+We);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let We=0;We<V.locationSize;We++)A(V.location+We,Me/V.locationSize,re,be,Ue*ge,(Be+Me/V.locationSize*We)*ge,Ae)}else{if(_e.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)d(V.location+xe,_e.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let xe=0;xe<V.locationSize;xe++)p(V.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let xe=0;xe<V.locationSize;xe++)A(V.location+xe,Me/V.locationSize,re,be,Me*ge,Me/V.locationSize*xe*ge,Ae)}}else if(j!==void 0){const be=j[ne];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(V.location,be);break;case 3:n.vertexAttrib3fv(V.location,be);break;case 4:n.vertexAttrib4fv(V.location,be);break;default:n.vertexAttrib1fv(V.location,be)}}}}C()}function I(){z();for(const T in i){const F=i[T];for(const ie in F){const Y=F[ie];for(const se in Y)c(Y[se].object),delete Y[se];delete F[ie]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const F=i[T.id];for(const ie in F){const Y=F[ie];for(const se in Y)c(Y[se].object),delete Y[se];delete F[ie]}delete i[T.id]}function D(T){for(const F in i){const ie=i[F];if(ie[T.id]===void 0)continue;const Y=ie[T.id];for(const se in Y)c(Y[se].object),delete Y[se];delete ie[T.id]}}function z(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:p,disableUnusedAttributes:C}}function ax(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];t.update(m,i,1)}function l(u,c,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Mn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const z=D===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==li&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ni&&!z)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:I,maxSamples:N}}function cx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Oi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const C=s?0:i,A=C*4;let E=d.clippingState||null;l.value=E,E=c(g,h,A,m);for(let I=0;I!==A;++I)E[I]=t[I];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,E=m;A!==v;++A,E+=4)o.copy(f[A]).applyMatrix4(C,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function ux(n){let e=new WeakMap;function t(o,a){return a===al?o.mapping=Pr:a===ll&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===al||a===ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new m_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vr=4,Cu=[.125,.215,.35,.446,.526,.582],Vi=20,Pa=new M_,Pu=new ut;let Da=null,La=0,Ua=0,Ia=!1;const Bi=(1+Math.sqrt(5))/2,pr=1/Bi,Du=[new Z(-Bi,pr,0),new Z(Bi,pr,0),new Z(-pr,0,Bi),new Z(pr,0,Bi),new Z(0,Bi,-pr),new Z(0,Bi,pr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,La,Ua),this._renderer.xr.enabled=Ia,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:_s,format:Mn,colorSpace:Ir,depthBuffer:!1},r=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(s)),this._blurMaterial=dx(s,e,t)}return r}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r){const a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Pu),c.toneMapping=Si,c.autoClear=!1;const m=new pc({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Fn(new Ms,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Pu),v=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const A=this._cubeSize;Js(r,C*A,d>2?A:0,A,A),c.setRenderTarget(r),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Du[(r-s-1)%Du.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Fn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),v=s/g,p=isFinite(s)?1+Math.floor(c*v):Vi;p>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const d=[];let C=0;for(let D=0;D<Vi;++D){const z=D/v,w=Math.exp(-z*z/2);d.push(w),D===0?C+=w:D<p&&(C+=2*w)}for(let D=0;D<d.length;D++)d[D]=d[D]/C;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const E=this._sizeLods[r],I=3*E*(r>A-vr?r-A+vr:0),N=4*(this._cubeSize-E);Js(t,I,N,3*E,2*E),l.setRenderTarget(t),l.render(f,Pa)}}function fx(n){const e=[],t=[],i=[];let r=n;const s=n-vr+1+Cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vr?l=Cu[o-n+vr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,v=3,p=2,d=1,C=new Float32Array(v*g*m),A=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let N=0;N<m;N++){const D=N%3*2/3-1,z=N>2?0:-1,w=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];C.set(w,v*g*N),A.set(h,p*g*N);const T=[N,N,N,N,N,N];E.set(T,d*g*N)}const I=new bi;I.setAttribute("position",new zn(C,v)),I.setAttribute("uv",new zn(A,p)),I.setAttribute("faceIndex",new zn(E,d)),e.push(I),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dx(n,e,t){const i=new Float32Array(Vi),r=new Z(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Iu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nu(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function hx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===al||l===ll,c=l===Pr||l===Dr;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lu(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new Lu(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function px(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function u(f){const h=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const C=m.array;v=m.version;for(let A=0,E=C.length;A<E;A+=3){const I=C[A+0],N=C[A+1],D=C[A+2];h.push(I,N,N,D,D,I)}}else if(g!==void 0){const C=g.array;v=g.version;for(let A=0,E=C.length/3-1;A<E;A+=3){const I=A+0,N=A+1,D=A+2;h.push(I,N,N,D,D,I)}}else return;const p=new(Fd(h)?kd:Vd)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function gx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function u(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*o,g),t.update(m,i,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function f(h,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,g);let d=0;for(let C=0;C<g;C++)d+=m[C]*v[C];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function _x(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vx(n,e,t){const i=new WeakMap,r=new Mt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var m=T;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let I=a.attributes.position.count*E,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*N*4*f),z=new Bd(D,I,N,f);z.type=ni,z.needsUpdate=!0;const w=E*4;for(let F=0;F<f;F++){const ie=d[F],Y=C[F],se=A[F],le=I*N*4*F;for(let j=0;j<ie.count;j++){const ne=j*w;g===!0&&(r.fromBufferAttribute(ie,j),D[le+ne+0]=r.x,D[le+ne+1]=r.y,D[le+ne+2]=r.z,D[le+ne+3]=0),v===!0&&(r.fromBufferAttribute(Y,j),D[le+ne+4]=r.x,D[le+ne+5]=r.y,D[le+ne+6]=r.z,D[le+ne+7]=0),p===!0&&(r.fromBufferAttribute(se,j),D[le+ne+8]=r.x,D[le+ne+9]=r.y,D[le+ne+10]=r.z,D[le+ne+11]=se.itemSize===4?r.w:1)}}h={count:f,texture:z,size:new ht(I,N)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function xx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const jd=new Zt,Fu=new $d(1,1),Kd=new Bd,Zd=new Jg,Jd=new Xd,Ou=[],Bu=[],zu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ou[r];if(s===void 0&&(s=new Float32Array(r),Ou[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ko(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),Rt(t,i)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Rt(t,i)}}function Ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),Rt(t,i)}}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function Nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fu.compareFunction=Nd,s=Fu):s=jd,t.setTexture2D(e||s,r)}function Fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zd,r)}function Ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jd,r)}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kd,r)}function zx(n){switch(n){case 5126:return Sx;case 35664:return Mx;case 35665:return Ex;case 35666:return yx;case 35674:return bx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return wx;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Dx;case 36294:return Lx;case 36295:return Ux;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}function Hx(n,e){n.uniform1fv(this.addr,e)}function Vx(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function kx(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function Gx(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function Wx(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xx(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qx(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $x(n,e){n.uniform1iv(this.addr,e)}function Yx(n,e){n.uniform2iv(this.addr,e)}function jx(n,e){n.uniform3iv(this.addr,e)}function Kx(n,e){n.uniform4iv(this.addr,e)}function Zx(n,e){n.uniform1uiv(this.addr,e)}function Jx(n,e){n.uniform2uiv(this.addr,e)}function Qx(n,e){n.uniform3uiv(this.addr,e)}function eS(n,e){n.uniform4uiv(this.addr,e)}function tS(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jd,s[o])}function nS(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zd,s[o])}function iS(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jd,s[o])}function rS(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kd,s[o])}function sS(n){switch(n){case 5126:return Hx;case 35664:return Vx;case 35665:return kx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return $x;case 35667:case 35671:return Yx;case 35668:case 35672:return jx;case 35669:case 35673:return Kx;case 5125:return Zx;case 36294:return Jx;case 36295:return Qx;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zx(t.type)}}class aS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class lS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function ku(n,e){n.seq.push(e),n.map[e.id]=e}function cS(n,e,t){const i=n.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),o=Na.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ku(t,u===void 0?new oS(a,n,e):new aS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lS(a),ku(t,f)),t=f}}}class uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uS=37297;let fS=0;function dS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wu=new Ye;function hS(n){nt._getMatrix(Wu,nt.workingColorSpace,n);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case yo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dS(n.getShaderSource(e),o)}else return r}function pS(n,e){const t=hS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mS(n,e){let t;switch(e){case yg:t="Linear";break;case bg:t="Reinhard";break;case Tg:t="Cineon";break;case Ag:t="ACESFilmic";break;case Rg:t="AgX";break;case Cg:t="Neutral";break;case wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new Z;function gS(){nt.getLuminanceCoefficients(Qs);const n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function vS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(n){return n.replace(SS,ES)}const MS=new Map;function ES(n,e){let t=Ke[e];if(t===void 0){const i=MS.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bl(t)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(yS,bS)}function bS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ju(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function TS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Dr:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function RS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function CS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TS(t),u=AS(t),c=wS(t),f=RS(t),h=CS(t),m=_S(t),g=vS(s),v=r.createProgram();let p,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),d.length>0&&(d+=`
`)):(p=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),d=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Si?mS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Bl(o),o=qu(o,t),o=$u(o,t),a=Bl(a),a=qu(a,t),a=$u(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=C+p+o,E=C+d+a,I=Gu(r,r.VERTEX_SHADER,A),N=Gu(r,r.FRAGMENT_SHADER,E);r.attachShader(v,I),r.attachShader(v,N),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(F){if(n.debug.checkShaderErrors){const ie=r.getProgramInfoLog(v).trim(),Y=r.getShaderInfoLog(I).trim(),se=r.getShaderInfoLog(N).trim();let le=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,N);else{const ne=Xu(r,I,"vertex"),V=Xu(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ie+`
`+ne+`
`+V)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Y===""||se==="")&&(j=!1);j&&(F.diagnostics={runnable:le,programLog:ie,vertexShader:{log:Y,prefix:p},fragmentShader:{log:se,prefix:d}})}r.deleteShader(I),r.deleteShader(N),z=new uo(r,v),w=xS(r,v)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,uS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=N,this}let DS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new US(e),t.set(e,i)),i}}class US{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function IS(n,e,t,i,r,s,o){const a=new zd,l=new LS,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,T,F,ie,Y){const se=ie.fog,le=Y.geometry,j=w.isMeshStandardMaterial?ie.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||j),V=ne&&ne.mapping===zo?ne.image.height:null,_e=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const be=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Me=be!==void 0?be.length:0;let Le=0;le.morphAttributes.position!==void 0&&(Le=1),le.morphAttributes.normal!==void 0&&(Le=2),le.morphAttributes.color!==void 0&&(Le=3);let Ce,re,ge,Ae;if(_e){const Ze=Un[_e];Ce=Ze.vertexShader,re=Ze.fragmentShader}else Ce=w.vertexShader,re=w.fragmentShader,l.update(w),ge=l.getVertexShaderID(w),Ae=l.getFragmentShaderID(w);const xe=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Be=Y.isInstancedMesh===!0,We=Y.isBatchedMesh===!0,pt=!!w.map,R=!!w.matcap,U=!!ne,y=!!w.aoMap,oe=!!w.lightMap,J=!!w.bumpMap,ee=!!w.normalMap,te=!!w.displacementMap,ae=!!w.emissiveMap,W=!!w.metalnessMap,S=!!w.roughnessMap,_=w.anisotropy>0,P=w.clearcoat>0,k=w.dispersion>0,X=w.iridescence>0,q=w.sheen>0,pe=w.transmission>0,fe=_&&!!w.anisotropyMap,me=P&&!!w.clearcoatMap,Ie=P&&!!w.clearcoatNormalMap,de=P&&!!w.clearcoatRoughnessMap,Se=X&&!!w.iridescenceMap,De=X&&!!w.iridescenceThicknessMap,Ne=q&&!!w.sheenColorMap,ve=q&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,Ve=!!w.specularColorMap,it=!!w.specularIntensityMap,O=pe&&!!w.transmissionMap,Ee=pe&&!!w.thicknessMap,L=!!w.gradientMap,x=!!w.alphaMap,ce=w.alphaTest>0,ue=!!w.alphaHash,Pe=!!w.extensions;let Q=Si;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Q=n.toneMapping);const $e={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:re,defines:w.defines,customVertexShaderID:ge,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:We,batchingColor:We&&Y._colorsTexture!==null,instancing:Be,instancingColor:Be&&Y.instanceColor!==null,instancingMorph:Be&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ir,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:R,envMap:U,envMapMode:U&&ne.mapping,envMapCubeUVHeight:V,aoMap:y,lightMap:oe,bumpMap:J,normalMap:ee,displacementMap:h&&te,emissiveMap:ae,normalMapObjectSpace:ee&&w.normalMapType===Ig,normalMapTangentSpace:ee&&w.normalMapType===Ug,metalnessMap:W,roughnessMap:S,anisotropy:_,anisotropyMap:fe,clearcoat:P,clearcoatMap:me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:de,dispersion:k,iridescence:X,iridescenceMap:Se,iridescenceThicknessMap:De,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:Fe,specularColorMap:Ve,specularIntensityMap:it,transmission:pe,transmissionMap:O,thicknessMap:Ee,gradientMap:L,opaque:w.transparent===!1&&w.blending===br&&w.alphaToCoverage===!1,alphaMap:x,alphaTest:ce,alphaHash:ue,combine:w.combine,mapUv:pt&&v(w.map.channel),aoMapUv:y&&v(w.aoMap.channel),lightMapUv:oe&&v(w.lightMap.channel),bumpMapUv:J&&v(w.bumpMap.channel),normalMapUv:ee&&v(w.normalMap.channel),displacementMapUv:te&&v(w.displacementMap.channel),emissiveMapUv:ae&&v(w.emissiveMap.channel),metalnessMapUv:W&&v(w.metalnessMap.channel),roughnessMapUv:S&&v(w.roughnessMap.channel),anisotropyMapUv:fe&&v(w.anisotropyMap.channel),clearcoatMapUv:me&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(w.sheenRoughnessMap.channel),specularMapUv:Fe&&v(w.specularMap.channel),specularColorMapUv:Ve&&v(w.specularColorMap.channel),specularIntensityMapUv:it&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:Ee&&v(w.thicknessMap.channel),alphaMapUv:x&&v(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(ee||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(pt||x),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:ae&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ti,flipSided:w.side===Kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function d(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)T.push(F),T.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(C(T,w),A(T,w),T.push(n.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function C(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function A(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function E(w){const T=g[w.type];let F;if(T){const ie=Un[T];F=f_.clone(ie.uniforms)}else F=w.uniforms;return F}function I(w,T){let F;for(let ie=0,Y=c.length;ie<Y;ie++){const se=c[ie];if(se.cacheKey===T){F=se,++F.usedTimes;break}}return F===void 0&&(F=new PS(n,T,w,s),c.push(F)),F}function N(w){if(--w.usedTimes===0){const T=c.indexOf(w);c[T]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:I,releaseProgram:N,releaseShaderCache:D,programs:c,dispose:z}}function NS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function a(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||FS),i.length>1&&i.sort(h||Ku),r.length>1&&r.sort(h||Ku)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function OS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zu,n.set(i,[o])):r>=s.length?(o=new Zu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new ut};break;case"SpotLight":t={position:new Z,direction:new Z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function zS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HS=0;function VS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kS(n){const e=new BS,t=zS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Z);const r=new Z,s=new At,o=new At;function a(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,C=0,A=0,E=0,I=0,N=0,D=0;u.sort(VS);for(let w=0,T=u.length;w<T;w++){const F=u[w],ie=F.color,Y=F.intensity,se=F.distance,le=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)c+=ie.r*Y,f+=ie.g*Y,h+=ie.b*Y;else if(F.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],Y);D++}else if(F.isDirectionalLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ne=F.shadow,V=t.get(F);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=le,i.directionalShadowMatrix[m]=F.shadow.matrix,C++}i.directional[m]=j,m++}else if(F.isSpotLight){const j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(ie).multiplyScalar(Y),j.distance=se,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[v]=j;const ne=F.shadow;if(F.map&&(i.spotLightMap[I]=F.map,I++,ne.updateMatrices(F),F.castShadow&&N++),i.spotLightMatrix[v]=ne.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=le,E++}v++}else if(F.isRectAreaLight){const j=e.get(F);j.color.copy(ie).multiplyScalar(Y),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[p]=j,p++}else if(F.isPointLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){const ne=F.shadow,V=t.get(F);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=le,i.pointShadowMatrix[g]=F.shadow.matrix,A++}i.point[g]=j,g++}else if(F.isHemisphereLight){const j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(Y),j.groundColor.copy(F.groundColor).multiplyScalar(Y),i.hemi[d]=j,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const z=i.hash;(z.directionalLength!==m||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==p||z.hemiLength!==d||z.numDirectionalShadows!==C||z.numPointShadows!==A||z.numSpotShadows!==E||z.numSpotMaps!==I||z.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+I-N,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=D,z.directionalLength=m,z.pointLength=g,z.spotLength=v,z.rectAreaLength=p,z.hemiLength=d,z.numDirectionalShadows=C,z.numPointShadows=A,z.numSpotShadows=E,z.numSpotMaps=I,z.numLightProbes=D,i.version=HS++)}function l(u,c){let f=0,h=0,m=0,g=0,v=0;const p=c.matrixWorldInverse;for(let d=0,C=u.length;d<C;d++){const A=u[d];if(A.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(A.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Ju(n){const e=new kS(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ju(n),e.set(r,[a])):s>=o.length?(a=new Ju(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const WS=`void main() {
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
}`;function qS(n,e,t){let i=new qd;const r=new ht,s=new ht,o=new Mt,a=new x_({depthPacking:Lg}),l=new S_,u={},c=t.maxTextureSize,f={[Ei]:Kt,[Kt]:Ei,[ti]:ti},h=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let d=this.type;this.render=function(N,D,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||N.length===0)return;const w=n.getRenderTarget(),T=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(xi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Y=d!==Kn&&this.type===Kn,se=d===Kn&&this.type!==Kn;for(let le=0,j=N.length;le<j;le++){const ne=N[le],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const _e=V.getFrameExtents();if(r.multiply(_e),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/_e.x),r.x=s.x*_e.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/_e.y),r.y=s.y*_e.y,V.mapSize.y=s.y)),V.map===null||Y===!0||se===!0){const Me=this.type!==Kn?{minFilter:bn,magFilter:bn}:{};V.map!==null&&V.map.dispose(),V.map=new ji(r.x,r.y,Me),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const be=V.getViewportCount();for(let Me=0;Me<be;Me++){const Le=V.getViewport(Me);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),ie.viewport(o),V.updateMatrices(ne,Me),i=V.getFrustum(),E(D,z,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Kn&&C(V,z),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,T,F)};function C(N,D){const z=e.update(v);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ji(r.x,r.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(D,null,z,h,v,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(D,null,z,m,v,null)}function A(N,D,z,w){let T=null;const F=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)T=F;else if(T=z.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=T.uuid,Y=D.uuid;let se=u[ie];se===void 0&&(se={},u[ie]=se);let le=se[Y];le===void 0&&(le=T.clone(),se[Y]=le,D.addEventListener("dispose",I)),T=le}if(T.visible=D.visible,T.wireframe=D.wireframe,w===Kn?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:f[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ie=n.properties.get(T);ie.light=z}return T}function E(N,D,z,w,T){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Kn)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const Y=e.update(N),se=N.material;if(Array.isArray(se)){const le=Y.groups;for(let j=0,ne=le.length;j<ne;j++){const V=le[j],_e=se[V.materialIndex];if(_e&&_e.visible){const be=A(N,_e,w,T);N.onBeforeShadow(n,N,D,z,Y,be,V),n.renderBufferDirect(z,null,Y,be,N,V),N.onAfterShadow(n,N,D,z,Y,be,V)}}}else if(se.visible){const le=A(N,se,w,T);N.onBeforeShadow(n,N,D,z,Y,le,null),n.renderBufferDirect(z,null,Y,le,N,null),N.onAfterShadow(n,N,D,z,Y,le,null)}}const ie=N.children;for(let Y=0,se=ie.length;Y<se;Y++)E(ie[Y],D,z,w,T)}function I(N){N.target.removeEventListener("dispose",I);for(const z in u){const w=u[z],T=N.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const $S={[el]:tl,[nl]:sl,[il]:ol,[Cr]:rl,[tl]:el,[sl]:nl,[ol]:il,[rl]:Cr};function YS(n,e){function t(){let O=!1;const Ee=new Mt;let L=null;const x=new Mt(0,0,0,0);return{setMask:function(ce){L!==ce&&!O&&(n.colorMask(ce,ce,ce,ce),L=ce)},setLocked:function(ce){O=ce},setClear:function(ce,ue,Pe,Q,$e){$e===!0&&(ce*=Q,ue*=Q,Pe*=Q),Ee.set(ce,ue,Pe,Q),x.equals(Ee)===!1&&(n.clearColor(ce,ue,Pe,Q),x.copy(Ee))},reset:function(){O=!1,L=null,x.set(-1,0,0,0)}}}function i(){let O=!1,Ee=!1,L=null,x=null,ce=null;return{setReversed:function(ue){if(Ee!==ue){const Pe=e.get("EXT_clip_control");Ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const Q=ce;ce=null,this.setClear(Q)}Ee=ue},getReversed:function(){return Ee},setTest:function(ue){ue?xe(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(ue){L!==ue&&!O&&(n.depthMask(ue),L=ue)},setFunc:function(ue){if(Ee&&(ue=$S[ue]),x!==ue){switch(ue){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}x=ue}},setLocked:function(ue){O=ue},setClear:function(ue){ce!==ue&&(Ee&&(ue=1-ue),n.clearDepth(ue),ce=ue)},reset:function(){O=!1,L=null,x=null,ce=null,Ee=!1}}}function r(){let O=!1,Ee=null,L=null,x=null,ce=null,ue=null,Pe=null,Q=null,$e=null;return{setTest:function(Ze){O||(Ze?xe(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Ze){Ee!==Ze&&!O&&(n.stencilMask(Ze),Ee=Ze)},setFunc:function(Ze,Xt,on){(L!==Ze||x!==Xt||ce!==on)&&(n.stencilFunc(Ze,Xt,on),L=Ze,x=Xt,ce=on)},setOp:function(Ze,Xt,on){(ue!==Ze||Pe!==Xt||Q!==on)&&(n.stencilOp(Ze,Xt,on),ue=Ze,Pe=Xt,Q=on)},setLocked:function(Ze){O=Ze},setClear:function(Ze){$e!==Ze&&(n.clearStencil(Ze),$e=Ze)},reset:function(){O=!1,Ee=null,L=null,x=null,ce=null,ue=null,Pe=null,Q=null,$e=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,m=[],g=null,v=!1,p=null,d=null,C=null,A=null,E=null,I=null,N=null,D=new ut(0,0,0),z=0,w=!1,T=null,F=null,ie=null,Y=null,se=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ne=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=ne>=2);let _e=null,be={};const Me=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Ce=new Mt().fromArray(Me),re=new Mt().fromArray(Le);function ge(O,Ee,L,x){const ce=new Uint8Array(4),ue=n.createTexture();n.bindTexture(O,ue),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<L;Pe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,x,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(Ee+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ue}const Ae={};Ae[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),o.setFunc(Cr),J(!1),ee(ru),xe(n.CULL_FACE),y(xi);function xe(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function Ue(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function Be(O,Ee){return f[O]!==Ee?(n.bindFramebuffer(O,Ee),f[O]=Ee,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function We(O,Ee){let L=m,x=!1;if(O){L=h.get(Ee),L===void 0&&(L=[],h.set(Ee,L));const ce=O.textures;if(L.length!==ce.length||L[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Pe=ce.length;ue<Pe;ue++)L[ue]=n.COLOR_ATTACHMENT0+ue;L.length=ce.length,x=!0}}else L[0]!==n.BACK&&(L[0]=n.BACK,x=!0);x&&n.drawBuffers(L)}function pt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const R={[Hi]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[sg]:n.FUNC_REVERSE_SUBTRACT};R[og]=n.MIN,R[ag]=n.MAX;const U={[lg]:n.ZERO,[cg]:n.ONE,[ug]:n.SRC_COLOR,[Ja]:n.SRC_ALPHA,[gg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[dg]:n.DST_ALPHA,[fg]:n.ONE_MINUS_SRC_COLOR,[Qa]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[hg]:n.ONE_MINUS_DST_ALPHA,[_g]:n.CONSTANT_COLOR,[vg]:n.ONE_MINUS_CONSTANT_COLOR,[xg]:n.CONSTANT_ALPHA,[Sg]:n.ONE_MINUS_CONSTANT_ALPHA};function y(O,Ee,L,x,ce,ue,Pe,Q,$e,Ze){if(O===xi){v===!0&&(Ue(n.BLEND),v=!1);return}if(v===!1&&(xe(n.BLEND),v=!0),O!==ig){if(O!==p||Ze!==w){if((d!==Hi||E!==Hi)&&(n.blendEquation(n.FUNC_ADD),d=Hi,E=Hi),Ze)switch(O){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,A=null,I=null,N=null,D.set(0,0,0),z=0,p=O,w=Ze}return}ce=ce||Ee,ue=ue||L,Pe=Pe||x,(Ee!==d||ce!==E)&&(n.blendEquationSeparate(R[Ee],R[ce]),d=Ee,E=ce),(L!==C||x!==A||ue!==I||Pe!==N)&&(n.blendFuncSeparate(U[L],U[x],U[ue],U[Pe]),C=L,A=x,I=ue,N=Pe),(Q.equals(D)===!1||$e!==z)&&(n.blendColor(Q.r,Q.g,Q.b,$e),D.copy(Q),z=$e),p=O,w=!1}function oe(O,Ee){O.side===ti?Ue(n.CULL_FACE):xe(n.CULL_FACE);let L=O.side===Kt;Ee&&(L=!L),J(L),O.blending===br&&O.transparent===!1?y(xi):y(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const x=O.stencilWrite;a.setTest(x),x&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function ee(O){O!==eg?(xe(n.CULL_FACE),O!==F&&(O===ru?n.cullFace(n.BACK):O===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),F=O}function te(O){O!==ie&&(j&&n.lineWidth(O),ie=O)}function ae(O,Ee,L){O?(xe(n.POLYGON_OFFSET_FILL),(Y!==Ee||se!==L)&&(n.polygonOffset(Ee,L),Y=Ee,se=L)):Ue(n.POLYGON_OFFSET_FILL)}function W(O){O?xe(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+le-1),_e!==O&&(n.activeTexture(O),_e=O)}function _(O,Ee,L){L===void 0&&(_e===null?L=n.TEXTURE0+le-1:L=_e);let x=be[L];x===void 0&&(x={type:void 0,texture:void 0},be[L]=x),(x.type!==O||x.texture!==Ee)&&(_e!==L&&(n.activeTexture(L),_e=L),n.bindTexture(O,Ee||Ae[O]),x.type=O,x.texture=Ee)}function P(){const O=be[_e];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Ce.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ce.copy(O))}function ve(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Fe(O,Ee){let L=u.get(Ee);L===void 0&&(L=new WeakMap,u.set(Ee,L));let x=L.get(O);x===void 0&&(x=n.getUniformBlockIndex(Ee,O.name),L.set(O,x))}function Ve(O,Ee){const x=u.get(Ee).get(O);l.get(Ee)!==x&&(n.uniformBlockBinding(Ee,x,O.__bindingPointIndex),l.set(Ee,x))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},_e=null,be={},f={},h=new WeakMap,m=[],g=null,v=!1,p=null,d=null,C=null,A=null,E=null,I=null,N=null,D=new ut(0,0,0),z=0,w=!1,T=null,F=null,ie=null,Y=null,se=null,Ce.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:xe,disable:Ue,bindFramebuffer:Be,drawBuffers:We,useProgram:pt,setBlending:y,setMaterial:oe,setFlipSided:J,setCullFace:ee,setLineWidth:te,setPolygonOffset:ae,setScissorTest:W,activeTexture:S,bindTexture:_,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:X,texImage2D:Se,texImage3D:De,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:Ie,texStorage3D:de,texSubImage2D:q,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Ne,viewport:ve,reset:it}}function jS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):To("canvas")}function v(S,_,P){let k=1;const X=W(S);if((X.width>P||X.height>P)&&(k=P/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const q=Math.floor(k*X.width),pe=Math.floor(k*X.height);f===void 0&&(f=g(q,pe));const fe=_?g(q,pe):f;return fe.width=q,fe.height=pe,fe.getContext("2d").drawImage(S,0,0,q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+q+"x"+pe+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),S;return S}function p(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(S,_,P,k,X=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let q=_;if(_===n.RED&&(P===n.FLOAT&&(q=n.R32F),P===n.HALF_FLOAT&&(q=n.R16F),P===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.R8UI),P===n.UNSIGNED_SHORT&&(q=n.R16UI),P===n.UNSIGNED_INT&&(q=n.R32UI),P===n.BYTE&&(q=n.R8I),P===n.SHORT&&(q=n.R16I),P===n.INT&&(q=n.R32I)),_===n.RG&&(P===n.FLOAT&&(q=n.RG32F),P===n.HALF_FLOAT&&(q=n.RG16F),P===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.RG8UI),P===n.UNSIGNED_SHORT&&(q=n.RG16UI),P===n.UNSIGNED_INT&&(q=n.RG32UI),P===n.BYTE&&(q=n.RG8I),P===n.SHORT&&(q=n.RG16I),P===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.RGB8UI),P===n.UNSIGNED_SHORT&&(q=n.RGB16UI),P===n.UNSIGNED_INT&&(q=n.RGB32UI),P===n.BYTE&&(q=n.RGB8I),P===n.SHORT&&(q=n.RGB16I),P===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),P===n.UNSIGNED_INT&&(q=n.RGBA32UI),P===n.BYTE&&(q=n.RGBA8I),P===n.SHORT&&(q=n.RGBA16I),P===n.INT&&(q=n.RGBA32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){const pe=X?yo:nt.getTransfer(k);P===n.FLOAT&&(q=n.RGBA32F),P===n.HALF_FLOAT&&(q=n.RGBA16F),P===n.UNSIGNED_BYTE&&(q=pe===ct?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(S,_){let P;return S?_===null||_===Yi||_===Lr?P=n.DEPTH24_STENCIL8:_===ni?P=n.DEPTH32F_STENCIL8:_===ds&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yi||_===Lr?P=n.DEPTH_COMPONENT24:_===ni?P=n.DEPTH_COMPONENT32F:_===ds&&(P=n.DEPTH_COMPONENT16),P}function I(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==bn&&S.minFilter!==Nn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function N(S){const _=S.target;_.removeEventListener("dispose",N),z(_),_.isVideoTexture&&c.delete(_)}function D(S){const _=S.target;_.removeEventListener("dispose",D),T(_)}function z(S){const _=i.get(S);if(_.__webglInit===void 0)return;const P=S.source,k=h.get(P);if(k){const X=k[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&w(S),Object.keys(k).length===0&&h.delete(P)}i.remove(S)}function w(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const P=S.source,k=h.get(P);delete k[_.__cacheKey],o.memory.textures--}function T(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let X=0;X<_.__webglFramebuffer[k].length;X++)n.deleteFramebuffer(_.__webglFramebuffer[k][X]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=S.textures;for(let k=0,X=P.length;k<X;k++){const q=i.get(P[k]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(P[k])}i.remove(S)}let F=0;function ie(){F=0}function Y(){const S=F;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),F+=1,S}function se(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function le(S,_){const P=i.get(S);if(S.isVideoTexture&&te(S),S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){const k=S.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(P,S,_);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function j(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){re(P,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function ne(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){re(P,S,_);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function V(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){ge(P,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const _e={[cl]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},be={[bn]:n.NEAREST,[Pg]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Me={[Ng]:n.NEVER,[Vg]:n.ALWAYS,[Fg]:n.LESS,[Nd]:n.LEQUAL,[Og]:n.EQUAL,[Hg]:n.GEQUAL,[Bg]:n.GREATER,[zg]:n.NOTEQUAL};function Le(S,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Nn||_.magFilter===aa||_.magFilter===Us||_.magFilter===Gi||_.minFilter===Nn||_.minFilter===aa||_.minFilter===Us||_.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,_e[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,_e[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,_e[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,be[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,be[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bn||_.minFilter!==Us&&_.minFilter!==Gi||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(S,_){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",N));const k=_.source;let X=h.get(k);X===void 0&&(X={},h.set(k,X));const q=se(_);if(q!==S.__cacheKey){X[q]===void 0&&(X[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),X[q].usedTimes++;const pe=X[S.__cacheKey];pe!==void 0&&(X[S.__cacheKey].usedTimes--,pe.usedTimes===0&&w(_)),S.__cacheKey=q,S.__webglTexture=X[q].texture}return P}function re(S,_,P){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);const X=Ce(S,_),q=_.source;t.bindTexture(k,S.__webglTexture,n.TEXTURE0+P);const pe=i.get(q);if(q.version!==pe.__version||X===!0){t.activeTexture(n.TEXTURE0+P);const fe=nt.getPrimaries(nt.workingColorSpace),me=_.colorSpace===vi?null:nt.getPrimaries(_.colorSpace),Ie=_.colorSpace===vi||fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let de=v(_.image,!1,r.maxTextureSize);de=ae(_,de);const Se=s.convert(_.format,_.colorSpace),De=s.convert(_.type);let Ne=A(_.internalFormat,Se,De,_.colorSpace,_.isVideoTexture);Le(k,_);let ve;const Fe=_.mipmaps,Ve=_.isVideoTexture!==!0,it=pe.__version===void 0||X===!0,O=q.dataReady,Ee=I(_,de);if(_.isDepthTexture)Ne=E(_.format===Ur,_.type),it&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ne,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ne,de.width,de.height,0,Se,De,null));else if(_.isDataTexture)if(Fe.length>0){Ve&&it&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Fe[0].width,Fe[0].height);for(let L=0,x=Fe.length;L<x;L++)ve=Fe[L],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,ve.width,ve.height,Se,De,ve.data):t.texImage2D(n.TEXTURE_2D,L,Ne,ve.width,ve.height,0,Se,De,ve.data);_.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,de.width,de.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Se,De,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,de.width,de.height,0,Se,De,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,Fe[0].width,Fe[0].height,de.depth);for(let L=0,x=Fe.length;L<x;L++)if(ve=Fe[L],_.format!==Mn)if(Se!==null)if(Ve){if(O)if(_.layerUpdates.size>0){const ce=Ru(ve.width,ve.height,_.format,_.type);for(const ue of _.layerUpdates){const Pe=ve.data.subarray(ue*ce/ve.data.BYTES_PER_ELEMENT,(ue+1)*ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,ue,ve.width,ve.height,1,Se,Pe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,ve.width,ve.height,de.depth,Se,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,L,Ne,ve.width,ve.height,de.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,ve.width,ve.height,de.depth,Se,De,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,L,Ne,ve.width,ve.height,de.depth,0,Se,De,ve.data)}else{Ve&&it&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Fe[0].width,Fe[0].height);for(let L=0,x=Fe.length;L<x;L++)ve=Fe[L],_.format!==Mn?Se!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,L,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,L,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,ve.width,ve.height,Se,De,ve.data):t.texImage2D(n.TEXTURE_2D,L,Ne,ve.width,ve.height,0,Se,De,ve.data)}else if(_.isDataArrayTexture)if(Ve){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,de.width,de.height,de.depth),O)if(_.layerUpdates.size>0){const L=Ru(de.width,de.height,_.format,_.type);for(const x of _.layerUpdates){const ce=de.data.subarray(x*L/de.data.BYTES_PER_ELEMENT,(x+1)*L/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,x,de.width,de.height,1,Se,De,ce)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,De,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Se,De,de.data);else if(_.isData3DTexture)Ve?(it&&t.texStorage3D(n.TEXTURE_3D,Ee,Ne,de.width,de.height,de.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,De,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Se,De,de.data);else if(_.isFramebufferTexture){if(it)if(Ve)t.texStorage2D(n.TEXTURE_2D,Ee,Ne,de.width,de.height);else{let L=de.width,x=de.height;for(let ce=0;ce<Ee;ce++)t.texImage2D(n.TEXTURE_2D,ce,Ne,L,x,0,Se,De,null),L>>=1,x>>=1}}else if(Fe.length>0){if(Ve&&it){const L=W(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,L.width,L.height)}for(let L=0,x=Fe.length;L<x;L++)ve=Fe[L],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,Se,De,ve):t.texImage2D(n.TEXTURE_2D,L,Ne,Se,De,ve);_.generateMipmaps=!1}else if(Ve){if(it){const L=W(de);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,L.width,L.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,De,de)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Se,De,de);p(_)&&d(k),pe.__version=q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ge(S,_,P){if(_.image.length!==6)return;const k=Ce(S,_),X=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+P);const q=i.get(X);if(X.version!==q.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const pe=nt.getPrimaries(nt.workingColorSpace),fe=_.colorSpace===vi?null:nt.getPrimaries(_.colorSpace),me=_.colorSpace===vi||pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let x=0;x<6;x++)!Ie&&!de?Se[x]=v(_.image[x],!0,r.maxCubemapSize):Se[x]=de?_.image[x].image:_.image[x],Se[x]=ae(_,Se[x]);const De=Se[0],Ne=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),Fe=A(_.internalFormat,Ne,ve,_.colorSpace),Ve=_.isVideoTexture!==!0,it=q.__version===void 0||k===!0,O=X.dataReady;let Ee=I(_,De);Le(n.TEXTURE_CUBE_MAP,_);let L;if(Ie){Ve&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,De.width,De.height);for(let x=0;x<6;x++){L=Se[x].mipmaps;for(let ce=0;ce<L.length;ce++){const ue=L[ce];_.format!==Mn?Ne!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce,0,0,ue.width,ue.height,Ne,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce,Fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce,0,0,ue.width,ue.height,Ne,ve,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce,Fe,ue.width,ue.height,0,Ne,ve,ue.data)}}}else{if(L=_.mipmaps,Ve&&it){L.length>0&&Ee++;const x=W(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,x.width,x.height)}for(let x=0;x<6;x++)if(de){Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,Se[x].width,Se[x].height,Ne,ve,Se[x].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,Fe,Se[x].width,Se[x].height,0,Ne,ve,Se[x].data);for(let ce=0;ce<L.length;ce++){const Pe=L[ce].image[x].image;Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce+1,0,0,Pe.width,Pe.height,Ne,ve,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce+1,Fe,Pe.width,Pe.height,0,Ne,ve,Pe.data)}}else{Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,Ne,ve,Se[x]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,Fe,Ne,ve,Se[x]);for(let ce=0;ce<L.length;ce++){const ue=L[ce];Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce+1,0,0,Ne,ve,ue.image[x]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+x,ce+1,Fe,Ne,ve,ue.image[x])}}}p(_)&&d(n.TEXTURE_CUBE_MAP),q.__version=X.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ae(S,_,P,k,X,q){const pe=s.convert(P.format,P.colorSpace),fe=s.convert(P.type),me=A(P.internalFormat,pe,fe,P.colorSpace),Ie=i.get(_),de=i.get(P);if(de.__renderTarget=_,!Ie.__hasExternalTextures){const Se=Math.max(1,_.width>>q),De=Math.max(1,_.height>>q);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,q,me,Se,De,_.depth,0,pe,fe,null):t.texImage2D(X,q,me,Se,De,0,pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,X,de.__webglTexture,0,J(_)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,X,de.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(S,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const k=_.depthTexture,X=k&&k.isDepthTexture?k.type:null,q=E(_.stencilBuffer,X),pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=J(_);ee(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,q,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,S)}else{const k=_.textures;for(let X=0;X<k.length;X++){const q=k[X],pe=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),me=A(q.internalFormat,pe,fe,q.colorSpace),Ie=J(_);P&&ee(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,me,_.width,_.height):ee(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),le(_.depthTexture,0);const X=k.__webglTexture,q=J(_);if(_.depthTexture.format===Tr)ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(_.depthTexture.format===Ur)ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Be(S){const _=i.get(S),P=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const k=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=k}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ue(_.__webglFramebuffer,S)}else if(P){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),xe(_.__webglDepthbuffer[k],S,!1);else{const X=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),xe(_.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,X)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(S,_,P){const k=i.get(S);_!==void 0&&Ae(k.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Be(S)}function pt(S){const _=S.texture,P=i.get(S),k=i.get(_);S.addEventListener("dispose",D);const X=S.textures,q=S.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,o.memory.textures++),q){P.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[fe]=[];for(let me=0;me<_.mipmaps.length;me++)P.__webglFramebuffer[fe][me]=n.createFramebuffer()}else P.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)P.__webglFramebuffer[fe]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(pe)for(let fe=0,me=X.length;fe<me;fe++){const Ie=i.get(X[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ee(S)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let fe=0;fe<X.length;fe++){const me=X[fe];P.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[fe]);const Ie=s.convert(me.format,me.colorSpace),de=s.convert(me.type),Se=A(me.internalFormat,Ie,de,me.colorSpace,S.isXRRenderTarget===!0),De=J(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,P.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(P.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Le(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Ae(P.__webglFramebuffer[fe][me],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Ae(P.__webglFramebuffer[fe],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,me=X.length;fe<me;fe++){const Ie=X[fe],de=i.get(Ie);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Le(n.TEXTURE_2D,Ie),Ae(P.__webglFramebuffer,S,Ie,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),p(Ie)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,k.__webglTexture),Le(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Ae(P.__webglFramebuffer[me],S,_,n.COLOR_ATTACHMENT0,fe,me);else Ae(P.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,fe,0);p(_)&&d(fe),t.unbindTexture()}S.depthBuffer&&Be(S)}function R(S){const _=S.textures;for(let P=0,k=_.length;P<k;P++){const X=_[P];if(p(X)){const q=C(S),pe=i.get(X).__webglTexture;t.bindTexture(q,pe),d(q),t.unbindTexture()}}}const U=[],y=[];function oe(S){if(S.samples>0){if(ee(S)===!1){const _=S.textures,P=S.width,k=S.height;let X=n.COLOR_BUFFER_BIT;const q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(S),fe=_.length>1;if(fe)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<_.length;me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ie=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,P,k,0,0,P,k,X,n.NEAREST),l===!0&&(U.length=0,y.length=0,U.push(n.COLOR_ATTACHMENT0+me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(U.push(q),y.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ie=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function J(S){return Math.min(r.maxSamples,S.samples)}function ee(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function te(S){const _=o.render.frame;c.get(S)!==_&&(c.set(S,_),S.update())}function ae(S,_){const P=S.colorSpace,k=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==Ir&&P!==vi&&(nt.getTransfer(P)===ct?(k!==Mn||X!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function W(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=ie,this.setTexture2D=le,this.setTexture2DArray=j,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ee}function KS(n,e){function t(i,r=vi){let s;const o=nt.getTransfer(r);if(i===li)return n.UNSIGNED_BYTE;if(i===lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Td)return n.BYTE;if(i===Ad)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===ac)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===_s)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Cd)return n.RGB;if(i===Mn)return n.RGBA;if(i===Pd)return n.LUMINANCE;if(i===Dd)return n.LUMINANCE_ALPHA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===Ld)return n.RED;if(i===uc)return n.RED_INTEGER;if(i===Ud)return n.RG;if(i===fc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===so||i===oo||i===ao||i===lo)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===so)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===so)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===dl||i===hl||i===pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===_l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ml||i===gl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===xl||i===Sl||i===Ml||i===El||i===yl||i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===Ll||i===Ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===co)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===Il||i===Nl||i===Fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===co)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZS={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(u,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&h>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const JS=`
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

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:JS,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new Vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends Or{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,g=null;const v=new eM,p=t.getContextAttributes();let d=null,C=null;const A=[],E=[],I=new ht;let N=null;const D=new dn;D.viewport=new Mt;const z=new dn;z.viewport=new Mt;const w=[D,z],T=new E_;let F=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=A[re];return ge===void 0&&(ge=new Fa,A[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=A[re];return ge===void 0&&(ge=new Fa,A[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=A[re];return ge===void 0&&(ge=new Fa,A[re]=ge),ge.getHandSpace()};function Y(re){const ge=E.indexOf(re.inputSource);if(ge===-1)return;const Ae=A[ge];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,u||o),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function se(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",le);for(let re=0;re<A.length;re++){const ge=E[re];ge!==null&&(E[re]=null,A[re].disconnect(ge))}F=null,ie=null,v.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,C=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(re){u=re},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",se),r.addEventListener("inputsourceschange",le),p.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Ae=null,xe=null,Ue=null;p.depth&&(Ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=p.stencil?Ur:Tr,xe=p.stencil?Lr:Yi);const Be={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new ji(h.textureWidth,h.textureHeight,{format:Mn,type:li,depthTexture:new $d(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new ji(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}C.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(re){for(let ge=0;ge<re.removed.length;ge++){const Ae=re.removed[ge],xe=E.indexOf(Ae);xe>=0&&(E[xe]=null,A[xe].disconnect(Ae))}for(let ge=0;ge<re.added.length;ge++){const Ae=re.added[ge];let xe=E.indexOf(Ae);if(xe===-1){for(let Be=0;Be<A.length;Be++)if(Be>=E.length){E.push(Ae),xe=Be;break}else if(E[Be]===null){E[Be]=Ae,xe=Be;break}if(xe===-1)break}const Ue=A[xe];Ue&&Ue.connect(Ae)}}const j=new Z,ne=new Z;function V(re,ge,Ae){j.setFromMatrixPosition(ge.matrixWorld),ne.setFromMatrixPosition(Ae.matrixWorld);const xe=j.distanceTo(ne),Ue=ge.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,We=Ue[14]/(Ue[10]-1),pt=Ue[14]/(Ue[10]+1),R=(Ue[9]+1)/Ue[5],U=(Ue[9]-1)/Ue[5],y=(Ue[8]-1)/Ue[0],oe=(Be[8]+1)/Be[0],J=We*y,ee=We*oe,te=xe/(-y+oe),ae=te*-y;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ae),re.translateZ(te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ue[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const W=We+te,S=pt+te,_=J-ae,P=ee+(xe-ae),k=R*pt/S*W,X=U*pt/S*W;re.projectionMatrix.makePerspective(_,P,k,X,W,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function _e(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ge=re.near,Ae=re.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),T.near=z.near=D.near=ge,T.far=z.far=D.far=Ae,(F!==T.near||ie!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,ie=T.far),D.layers.mask=re.layers.mask|2,z.layers.mask=re.layers.mask|4,T.layers.mask=D.layers.mask|z.layers.mask;const xe=re.parent,Ue=T.cameras;_e(T,xe);for(let Be=0;Be<Ue.length;Be++)_e(Ue[Be],xe);Ue.length===2?V(T,D,z):T.projectionMatrix.copy(D.projectionMatrix),be(re,T,xe)};function be(re,ge,Ae){Ae===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ol*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let Me=null;function Le(re,ge){if(c=ge.getViewerPose(u||o),g=ge,c!==null){const Ae=c.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let xe=!1;Ae.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let Be=0;Be<Ae.length;Be++){const We=Ae[Be];let pt=null;if(m!==null)pt=m.getViewport(We);else{const U=f.getViewSubImage(h,We);pt=U.viewport,Be===0&&(e.setRenderTargetTextures(C,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(C))}let R=w[Be];R===void 0&&(R=new dn,R.layers.enable(Be),R.viewport=new Mt,w[Be]=R),R.matrix.fromArray(We.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(We.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(pt.x,pt.y,pt.width,pt.height),Be===0&&(T.matrix.copy(R.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(R)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Be=f.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,r.renderState)}}for(let Ae=0;Ae<A.length;Ae++){const xe=E[Ae],Ue=A[Ae];xe!==null&&Ue!==void 0&&Ue.update(xe,ge,u||o)}Me&&Me(re,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Ce=new Yd;Ce.setAnimationLoop(Le),this.setAnimationLoop=function(re){Me=re},this.dispose=function(){}}}const Ni=new ci,nM=new At;function iM(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Gd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,C,A,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,C,A):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Kt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Kt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=e.get(d),A=C.envMap,E=C.envMapRotation;A&&(p.envMap.value=A,Ni.copy(E),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Ni)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,C,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const C=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){const E=A.program;i.uniformBlockBinding(C,E)}function u(C,A){let E=r[C.id];E===void 0&&(g(C),E=c(C),r[C.id]=E,C.addEventListener("dispose",p));const I=A.program;i.updateUBOMapping(C,I);const N=e.render.frame;s[C.id]!==N&&(h(C),s[C.id]=N)}function c(C){const A=f();C.__bindingPointIndex=A;const E=n.createBuffer(),I=C.__size,N=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const A=r[C.id],E=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let N=0,D=E.length;N<D;N++){const z=Array.isArray(E[N])?E[N]:[E[N]];for(let w=0,T=z.length;w<T;w++){const F=z[w];if(m(F,N,w,I)===!0){const ie=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let se=0;for(let le=0;le<Y.length;le++){const j=Y[le],ne=v(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,ie+se,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,se),se+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,A,E,I){const N=C.value,D=A+"_"+E;if(I[D]===void 0)return typeof N=="number"||typeof N=="boolean"?I[D]=N:I[D]=N.clone(),!0;{const z=I[D];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return I[D]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function g(C){const A=C.uniforms;let E=0;const I=16;for(let D=0,z=A.length;D<z;D++){const w=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,F=w.length;T<F;T++){const ie=w[T],Y=Array.isArray(ie.value)?ie.value:[ie.value];for(let se=0,le=Y.length;se<le;se++){const j=Y[se],ne=v(j),V=E%I,_e=V%ne.boundary,be=V+_e;E+=_e,be!==0&&I-be<ne.storage&&(E+=I-be),ie.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=E,E+=ne.storage}}}const N=E%I;return N>0&&(E+=I-N),C.__size=E,C.__cache={},this}function v(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function p(C){const A=C.target;A.removeEventListener("dispose",p);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class sM{constructor(e={}){const{canvas:t=Gg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const C=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Si,this.toneMappingExposure=1;const E=this;let I=!1,N=0,D=0,z=null,w=-1,T=null;const F=new Mt,ie=new Mt;let Y=null;const se=new ut(0);let le=0,j=t.width,ne=t.height,V=1,_e=null,be=null;const Me=new Mt(0,0,j,ne),Le=new Mt(0,0,j,ne);let Ce=!1;const re=new qd;let ge=!1,Ae=!1;this.transmissionResolutionScale=1;const xe=new At,Ue=new At,Be=new Z,We=new Mt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function U(){return z===null?V:1}let y=i;function oe(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",x,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ue,!1),y===null){const B="webgl2";if(y=oe(B,b),y===null)throw oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,ee,te,ae,W,S,_,P,k,X,q,pe,fe,me,Ie,de,Se,De,Ne,ve,Fe,Ve,it,O;function Ee(){J=new px(y),J.init(),Ve=new KS(y,J),ee=new lx(y,J,e,Ve),te=new YS(y,J),ee.reverseDepthBuffer&&h&&te.buffers.depth.setReversed(!0),ae=new _x(y),W=new NS,S=new jS(y,J,te,W,ee,Ve,ae),_=new ux(E),P=new hx(E),k=new b_(y),it=new ox(y,k),X=new mx(y,k,ae,it),q=new xx(y,X,k,ae),Ne=new vx(y,ee,S),de=new cx(W),pe=new IS(E,_,P,J,ee,it,de),fe=new iM(E,W),me=new OS,Ie=new GS(J),De=new sx(E,_,P,te,q,m,l),Se=new qS(E,q,ee),O=new rM(y,ae,ee,te),ve=new ax(y,J,ae),Fe=new gx(y,J,ae),ae.programs=pe.programs,E.capabilities=ee,E.extensions=J,E.properties=W,E.renderLists=me,E.shadowMap=Se,E.state=te,E.info=ae}Ee();const L=new tM(E,y);this.xr=L,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(j,ne,!1))},this.getSize=function(b){return b.set(j,ne)},this.setSize=function(b,B,$=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ne=B,t.width=Math.floor(b*V),t.height=Math.floor(B*V),$===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(j*V,ne*V).floor()},this.setDrawingBufferSize=function(b,B,$){j=b,ne=B,V=$,t.width=Math.floor(b*$),t.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,B,$,K){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,B,$,K),te.viewport(F.copy(Me).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Le)},this.setScissor=function(b,B,$,K){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,B,$,K),te.scissor(ie.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(b){te.setScissorTest(Ce=b)},this.setOpaqueSort=function(b){_e=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,B=!0,$=!0){let K=0;if(b){let H=!1;if(z!==null){const he=z.texture.format;H=he===dc||he===fc||he===uc}if(H){const he=z.texture.type,Te=he===li||he===Yi||he===ds||he===Lr||he===lc||he===cc,we=De.getClearColor(),Re=De.getClearAlpha(),Xe=we.r,qe=we.g,Oe=we.b;Te?(g[0]=Xe,g[1]=qe,g[2]=Oe,g[3]=Re,y.clearBufferuiv(y.COLOR,0,g)):(v[0]=Xe,v[1]=qe,v[2]=Oe,v[3]=Re,y.clearBufferiv(y.COLOR,0,v))}else K|=y.COLOR_BUFFER_BIT}B&&(K|=y.DEPTH_BUFFER_BIT),$&&(K|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",x,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),De.dispose(),me.dispose(),Ie.dispose(),W.dispose(),_.dispose(),P.dispose(),q.dispose(),it.dispose(),O.dispose(),pe.dispose(),L.dispose(),L.removeEventListener("sessionstart",Hr),L.removeEventListener("sessionend",_t),wn.stop()};function x(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=ae.autoReset,B=Se.enabled,$=Se.autoUpdate,K=Se.needsUpdate,H=Se.type;Ee(),ae.autoReset=b,Se.enabled=B,Se.autoUpdate=$,Se.needsUpdate=K,Se.type=H}function ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const B=b.target;B.removeEventListener("dispose",Pe),Q(B)}function Q(b){$e(b),W.remove(b)}function $e(b){const B=W.get(b).programs;B!==void 0&&(B.forEach(function($){pe.releaseProgram($)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,K,H,he){B===null&&(B=pt);const Te=H.isMesh&&H.matrixWorld.determinant()<0,we=Mh(b,B,$,K,H);te.setMaterial(K,Te);let Re=$.index,Xe=1;if(K.wireframe===!0){if(Re=X.getWireframeAttribute($),Re===void 0)return;Xe=2}const qe=$.drawRange,Oe=$.attributes.position;let Qe=qe.start*Xe,st=(qe.start+qe.count)*Xe;he!==null&&(Qe=Math.max(Qe,he.start*Xe),st=Math.min(st,(he.start+he.count)*Xe)),Re!==null?(Qe=Math.max(Qe,0),st=Math.min(st,Re.count)):Oe!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Oe.count));const yt=st-Qe;if(yt<0||yt===1/0)return;it.setup(H,K,we,$,Re);let xt,et=ve;if(Re!==null&&(xt=k.get(Re),et=Fe,et.setIndex(xt)),H.isMesh)K.wireframe===!0?(te.setLineWidth(K.wireframeLinewidth*U()),et.setMode(y.LINES)):et.setMode(y.TRIANGLES);else if(H.isLine){let ze=K.linewidth;ze===void 0&&(ze=1),te.setLineWidth(ze*U()),H.isLineSegments?et.setMode(y.LINES):H.isLineLoop?et.setMode(y.LINE_LOOP):et.setMode(y.LINE_STRIP)}else H.isPoints?et.setMode(y.POINTS):H.isSprite&&et.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ze=H._multiDrawStarts,Pt=H._multiDrawCounts,ot=H._multiDrawCount,mn=Re?k.get(Re).bytesPerElement:1,Qi=W.get(K).currentProgram.getUniforms();for(let en=0;en<ot;en++)Qi.setValue(y,"_gl_DrawID",en),et.render(ze[en]/mn,Pt[en])}else if(H.isInstancedMesh)et.renderInstances(Qe,yt,H.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pt=Math.min($.instanceCount,ze);et.renderInstances(Qe,yt,Pt)}else et.render(Qe,yt)};function Ze(b,B,$){b.transparent===!0&&b.side===ti&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,Rs(b,B,$),b.side=Ei,b.needsUpdate=!0,Rs(b,B,$),b.side=ti):Rs(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),d=Ie.get($),d.init(B),A.push(d),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),b!==$&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const K=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let Te=0;Te<he.length;Te++){const we=he[Te];Ze(we,$,H),K.add(we)}else Ze(he,$,H),K.add(he)}),A.pop(),d=null,K},this.compileAsync=function(b,B,$=null){const K=this.compile(b,B,$);return new Promise(H=>{function he(){if(K.forEach(function(Te){W.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){H(b);return}setTimeout(he,10)}J.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xt=null;function on(b){Xt&&Xt(b)}function Hr(){wn.stop()}function _t(){wn.start()}const wn=new Yd;wn.setAnimationLoop(on),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(b){Xt=b,L.setAnimationLoop(b),b===null?wn.stop():wn.start()},L.addEventListener("sessionstart",Hr),L.addEventListener("sessionend",_t),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,B,z),d=Ie.get(b,A.length),d.init(B),A.push(d),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),re.setFromProjectionMatrix(Ue),Ae=this.localClippingEnabled,ge=de.init(this.clippingPlanes,Ae),p=me.get(b,C.length),p.init(),C.push(p),L.enabled===!0&&L.isPresenting===!0){const he=E.xr.getDepthSensingMesh();he!==null&&Ji(he,B,-1/0,E.sortObjects)}Ji(b,B,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(_e,be),R=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,R&&De.addToRenderList(p,b),this.info.render.frame++,ge===!0&&de.beginShadows();const $=d.state.shadowsArray;Se.render($,b,B),ge===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,H=p.transmissive;if(d.setupLights(),B.isArrayCamera){const he=B.cameras;if(H.length>0)for(let Te=0,we=he.length;Te<we;Te++){const Re=he[Te];Mc(K,H,b,Re)}R&&De.render(b);for(let Te=0,we=he.length;Te<we;Te++){const Re=he[Te];Rn(p,b,Re,Re.viewport)}}else H.length>0&&Mc(K,H,b,B),R&&De.render(b),Rn(p,b,B);z!==null&&D===0&&(S.updateMultisampleRenderTarget(z),S.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(E,b,B),it.resetDefaultState(),w=-1,T=null,A.pop(),A.length>0?(d=A[A.length-1],ge===!0&&de.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function Ji(b,B,$,K){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||re.intersectsSprite(b)){K&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ue);const Te=q.update(b),we=b.material;we.visible&&p.push(b,Te,we,$,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||re.intersectsObject(b))){const Te=q.update(b),we=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),We.copy(Te.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(Ue)),Array.isArray(we)){const Re=Te.groups;for(let Xe=0,qe=Re.length;Xe<qe;Xe++){const Oe=Re[Xe],Qe=we[Oe.materialIndex];Qe&&Qe.visible&&p.push(b,Te,Qe,$,We.z,Oe)}}else we.visible&&p.push(b,Te,we,$,We.z,null)}}const he=b.children;for(let Te=0,we=he.length;Te<we;Te++)Ji(he[Te],B,$,K)}function Rn(b,B,$,K){const H=b.opaque,he=b.transmissive,Te=b.transparent;d.setupLightsView($),ge===!0&&de.setGlobalState(E.clippingPlanes,$),K&&te.viewport(F.copy(K)),H.length>0&&ws(H,B,$),he.length>0&&ws(he,B,$),Te.length>0&&ws(Te,B,$),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Mc(b,B,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new ji(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?_s:li,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const he=d.state.transmissionRenderTarget[K.id],Te=K.viewport||F;he.setSize(Te.z*E.transmissionResolutionScale,Te.w*E.transmissionResolutionScale);const we=E.getRenderTarget();E.setRenderTarget(he),E.getClearColor(se),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),R&&De.render($);const Re=E.toneMapping;E.toneMapping=Si;const Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),ge===!0&&de.setGlobalState(E.clippingPlanes,K),ws(b,$,K),S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he),J.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Oe=0,Qe=B.length;Oe<Qe;Oe++){const st=B[Oe],yt=st.object,xt=st.geometry,et=st.material,ze=st.group;if(et.side===ti&&yt.layers.test(K.layers)){const Pt=et.side;et.side=Kt,et.needsUpdate=!0,Ec(yt,$,K,xt,et,ze),et.side=Pt,et.needsUpdate=!0,qe=!0}}qe===!0&&(S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he))}E.setRenderTarget(we),E.setClearColor(se,le),Xe!==void 0&&(K.viewport=Xe),E.toneMapping=Re}function ws(b,B,$){const K=B.isScene===!0?B.overrideMaterial:null;for(let H=0,he=b.length;H<he;H++){const Te=b[H],we=Te.object,Re=Te.geometry,Xe=K===null?Te.material:K,qe=Te.group;we.layers.test($.layers)&&Ec(we,B,$,Re,Xe,qe)}}function Ec(b,B,$,K,H,he){b.onBeforeRender(E,B,$,K,H,he),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(E,B,$,K,b,he),H.transparent===!0&&H.side===ti&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,E.renderBufferDirect($,B,K,H,b,he),H.side=Ei,H.needsUpdate=!0,E.renderBufferDirect($,B,K,H,b,he),H.side=ti):E.renderBufferDirect($,B,K,H,b,he),b.onAfterRender(E,B,$,K,H,he)}function Rs(b,B,$){B.isScene!==!0&&(B=pt);const K=W.get(b),H=d.state.lights,he=d.state.shadowsArray,Te=H.state.version,we=pe.getParameters(b,H.state,he,B,$),Re=pe.getProgramCacheKey(we);let Xe=K.programs;K.environment=b.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(b.isMeshStandardMaterial?P:_).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",Pe),Xe=new Map,K.programs=Xe);let qe=Xe.get(Re);if(qe!==void 0){if(K.currentProgram===qe&&K.lightsStateVersion===Te)return bc(b,we),qe}else we.uniforms=pe.getUniforms(b),b.onBeforeCompile(we,E),qe=pe.acquireProgram(we,Re),Xe.set(Re,qe),K.uniforms=we.uniforms;const Oe=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=de.uniform),bc(b,we),K.needsLights=yh(b),K.lightsStateVersion=Te,K.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=qe,K.uniformsList=null,qe}function yc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=uo.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function bc(b,B){const $=W.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Mh(b,B,$,K,H){B.isScene!==!0&&(B=pt),S.resetTextureUnits();const he=B.fog,Te=K.isMeshStandardMaterial?B.environment:null,we=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ir,Re=(K.isMeshStandardMaterial?P:_).get(K.envMap||Te),Xe=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!$.morphAttributes.position,Qe=!!$.morphAttributes.normal,st=!!$.morphAttributes.color;let yt=Si;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(yt=E.toneMapping);const xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,et=xt!==void 0?xt.length:0,ze=W.get(K),Pt=d.state.lights;if(ge===!0&&(Ae===!0||b!==T)){const Ht=b===T&&K.id===w;de.setState(K,b,Ht)}let ot=!1;K.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Pt.state.version||ze.outputColorSpace!==we||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isBatchedMesh&&ze.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ze.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Re||K.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==de.numPlanes||ze.numIntersection!==de.numIntersection)||ze.vertexAlphas!==Xe||ze.vertexTangents!==qe||ze.morphTargets!==Oe||ze.morphNormals!==Qe||ze.morphColors!==st||ze.toneMapping!==yt||ze.morphTargetsCount!==et)&&(ot=!0):(ot=!0,ze.__version=K.version);let mn=ze.currentProgram;ot===!0&&(mn=Rs(K,B,H));let Qi=!1,en=!1,Vr=!1;const vt=mn.getUniforms(),an=ze.uniforms;if(te.useProgram(mn.program)&&(Qi=!0,en=!0,Vr=!0),K.id!==w&&(w=K.id,en=!0),Qi||T!==b){te.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),Xg(xe),qg(xe),vt.setValue(y,"projectionMatrix",xe)):vt.setValue(y,"projectionMatrix",b.projectionMatrix),vt.setValue(y,"viewMatrix",b.matrixWorldInverse);const qt=vt.map.cameraPosition;qt!==void 0&&qt.setValue(y,Be.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&vt.setValue(y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(y,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,en=!0,Vr=!0)}if(H.isSkinnedMesh){vt.setOptional(y,H,"bindMatrix"),vt.setOptional(y,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(y,"boneTexture",Ht.boneTexture,S))}H.isBatchedMesh&&(vt.setOptional(y,H,"batchingTexture"),vt.setValue(y,"batchingTexture",H._matricesTexture,S),vt.setOptional(y,H,"batchingIdTexture"),vt.setValue(y,"batchingIdTexture",H._indirectTexture,S),vt.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(y,"batchingColorTexture",H._colorsTexture,S));const ln=$.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ne.update(H,$,mn),(en||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,vt.setValue(y,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(an.envMap.value=Re,an.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(an.envMapIntensity.value=B.environmentIntensity),en&&(vt.setValue(y,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&Eh(an,Vr),he&&K.fog===!0&&fe.refreshFogUniforms(an,he),fe.refreshMaterialUniforms(an,K,V,ne,d.state.transmissionRenderTarget[b.id]),uo.upload(y,yc(ze),an,S)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(uo.upload(y,yc(ze),an,S),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(y,"center",H.center),vt.setValue(y,"modelViewMatrix",H.modelViewMatrix),vt.setValue(y,"normalMatrix",H.normalMatrix),vt.setValue(y,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ht=K.uniformsGroups;for(let qt=0,Ko=Ht.length;qt<Ko;qt++){const Ti=Ht[qt];O.update(Ti,mn),O.bind(Ti,mn)}}return mn}function Eh(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function yh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,B,$){W.get(b.texture).__webglTexture=B,W.get(b.depthTexture).__webglTexture=$;const K=W.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const $=W.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const bh=y.createFramebuffer();this.setRenderTarget=function(b,B=0,$=0){z=b,N=B,D=$;let K=!0,H=null,he=!1,Te=!1;if(b){const Re=W.get(b);if(Re.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(y.FRAMEBUFFER,null),K=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(Re.__hasExternalTextures)S.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(Re.__boundDepthTexture!==Oe){if(Oe!==null&&W.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Te=!0);const qe=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?H=qe[B][$]:H=qe[B],he=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?H=W.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[$]:H=qe,F.copy(b.viewport),ie.copy(b.scissor),Y=b.scissorTest}else F.copy(Me).multiplyScalar(V).floor(),ie.copy(Le).multiplyScalar(V).floor(),Y=Ce;if($!==0&&(H=bh),te.bindFramebuffer(y.FRAMEBUFFER,H)&&K&&te.drawBuffers(b,H),te.viewport(F),te.scissor(ie),te.setScissorTest(Y),he){const Re=W.get(b.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,$)}else if(Te){const Re=W.get(b.texture),Xe=B;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Re.__webglTexture,$,Xe)}else if(b!==null&&$!==0){const Re=W.get(b.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Re.__webglTexture,$)}w=-1},this.readRenderTargetPixels=function(b,B,$,K,H,he,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){te.bindFramebuffer(y.FRAMEBUFFER,we);try{const Re=b.texture,Xe=Re.format,qe=Re.type;if(!ee.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-K&&$>=0&&$<=b.height-H&&y.readPixels(B,$,K,H,Ve.convert(Xe),Ve.convert(qe),he)}finally{const Re=z!==null?W.get(z).__webglFramebuffer:null;te.bindFramebuffer(y.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,K,H,he,Te){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){const Re=b.texture,Xe=Re.format,qe=Re.type;if(!ee.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-K&&$>=0&&$<=b.height-H){te.bindFramebuffer(y.FRAMEBUFFER,we);const Oe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Oe),y.bufferData(y.PIXEL_PACK_BUFFER,he.byteLength,y.STREAM_READ),y.readPixels(B,$,K,H,Ve.convert(Xe),Ve.convert(qe),0);const Qe=z!==null?W.get(z).__webglFramebuffer:null;te.bindFramebuffer(y.FRAMEBUFFER,Qe);const st=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Wg(y,st,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Oe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,he),y.deleteBuffer(Oe),y.deleteSync(st),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,$=0){b.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-$),H=Math.floor(b.image.width*K),he=Math.floor(b.image.height*K),Te=B!==null?B.x:0,we=B!==null?B.y:0;S.setTexture2D(b,0),y.copyTexSubImage2D(y.TEXTURE_2D,$,0,0,Te,we,H,he),te.unbindTexture()};const Th=y.createFramebuffer(),Ah=y.createFramebuffer();this.copyTextureToTexture=function(b,B,$=null,K=null,H=0,he=null){b.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],B=arguments[2],he=arguments[3]||0,$=null),he===null&&(H!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let Te,we,Re,Xe,qe,Oe,Qe,st,yt;const xt=b.isCompressedTexture?b.mipmaps[he]:b.image;if($!==null)Te=$.max.x-$.min.x,we=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,Xe=$.min.x,qe=$.min.y,Oe=$.isBox3?$.min.z:0;else{const ln=Math.pow(2,-H);Te=Math.floor(xt.width*ln),we=Math.floor(xt.height*ln),b.isDataArrayTexture?Re=xt.depth:b.isData3DTexture?Re=Math.floor(xt.depth*ln):Re=1,Xe=0,qe=0,Oe=0}K!==null?(Qe=K.x,st=K.y,yt=K.z):(Qe=0,st=0,yt=0);const et=Ve.convert(B.format),ze=Ve.convert(B.type);let Pt;B.isData3DTexture?(S.setTexture3D(B,0),Pt=y.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(S.setTexture2DArray(B,0),Pt=y.TEXTURE_2D_ARRAY):(S.setTexture2D(B,0),Pt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,B.unpackAlignment);const ot=y.getParameter(y.UNPACK_ROW_LENGTH),mn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Qi=y.getParameter(y.UNPACK_SKIP_PIXELS),en=y.getParameter(y.UNPACK_SKIP_ROWS),Vr=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,xt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,xt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(y.UNPACK_SKIP_ROWS,qe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Oe);const vt=b.isDataArrayTexture||b.isData3DTexture,an=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const ln=W.get(b),Ht=W.get(B),qt=W.get(ln.__renderTarget),Ko=W.get(Ht.__renderTarget);te.bindFramebuffer(y.READ_FRAMEBUFFER,qt.__webglFramebuffer),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let Ti=0;Ti<Re;Ti++)vt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,W.get(b).__webglTexture,H,Oe+Ti),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,W.get(B).__webglTexture,he,yt+Ti)),y.blitFramebuffer(Xe,qe,Te,we,Qe,st,Te,we,y.DEPTH_BUFFER_BIT,y.NEAREST);te.bindFramebuffer(y.READ_FRAMEBUFFER,null),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||W.has(b)){const ln=W.get(b),Ht=W.get(B);te.bindFramebuffer(y.READ_FRAMEBUFFER,Th),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ah);for(let qt=0;qt<Re;qt++)vt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ln.__webglTexture,H,Oe+qt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ln.__webglTexture,H),an?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ht.__webglTexture,he,yt+qt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ht.__webglTexture,he),H!==0?y.blitFramebuffer(Xe,qe,Te,we,Qe,st,Te,we,y.COLOR_BUFFER_BIT,y.NEAREST):an?y.copyTexSubImage3D(Pt,he,Qe,st,yt+qt,Xe,qe,Te,we):y.copyTexSubImage2D(Pt,he,Qe,st,Xe,qe,Te,we);te.bindFramebuffer(y.READ_FRAMEBUFFER,null),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else an?b.isDataTexture||b.isData3DTexture?y.texSubImage3D(Pt,he,Qe,st,yt,Te,we,Re,et,ze,xt.data):B.isCompressedArrayTexture?y.compressedTexSubImage3D(Pt,he,Qe,st,yt,Te,we,Re,et,xt.data):y.texSubImage3D(Pt,he,Qe,st,yt,Te,we,Re,et,ze,xt):b.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,he,Qe,st,Te,we,et,ze,xt.data):b.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,he,Qe,st,xt.width,xt.height,et,xt.data):y.texSubImage2D(y.TEXTURE_2D,he,Qe,st,Te,we,et,ze,xt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ot),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,mn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Qi),y.pixelStorei(y.UNPACK_SKIP_ROWS,en),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Vr),he===0&&B.generateMipmaps&&y.generateMipmap(Pt),te.unbindTexture()},this.copyTextureToTexture3D=function(b,B,$=null,K=null,H=0){return b.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,b=arguments[2],B=arguments[3],H=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,$,K,H)},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){N=0,D=0,z=null,te.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function Qd(n,e){return function(){return n.apply(e,arguments)}}const{toString:oM}=Object.prototype,{getPrototypeOf:Go}=Object,{iterator:Wo,toStringTag:eh}=Symbol,Xo=(n=>e=>{const t=oM.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),An=n=>(n=n.toLowerCase(),e=>Xo(e)===n),qo=n=>e=>typeof e===n,{isArray:zr}=Array,Fr=qo("undefined");function Es(n){return n!==null&&!Fr(n)&&n.constructor!==null&&!Fr(n.constructor)&&Jt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const th=An("ArrayBuffer");function aM(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&th(n.buffer),e}const lM=qo("string"),Jt=qo("function"),nh=qo("number"),ys=n=>n!==null&&typeof n=="object",cM=n=>n===!0||n===!1,fo=n=>{if(Xo(n)!=="object")return!1;const e=Go(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(eh in n)&&!(Wo in n)},uM=n=>{if(!ys(n)||Es(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},fM=An("Date"),dM=An("File"),hM=n=>!!(n&&typeof n.uri<"u"),pM=n=>n&&typeof n.getParts<"u",mM=An("Blob"),gM=An("FileList"),_M=n=>ys(n)&&Jt(n.pipe);function vM(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Qu=vM(),ef=typeof Qu.FormData<"u"?Qu.FormData:void 0,xM=n=>{if(!n)return!1;if(ef&&n instanceof ef)return!0;const e=Go(n);if(!e||e===Object.prototype||!Jt(n.append))return!1;const t=Xo(n);return t==="formdata"||t==="object"&&Jt(n.toString)&&n.toString()==="[object FormData]"},SM=An("URLSearchParams"),[MM,EM,yM,bM]=["ReadableStream","Request","Response","Headers"].map(An),TM=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bs(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),zr(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(Es(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function ih(n,e){if(Es(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,rh=n=>!Fr(n)&&n!==Wi;function zl(){const{caseless:n,skipUndefined:e}=rh(this)&&this||{},t={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=n&&ih(t,s)||s;fo(t[o])&&fo(r)?t[o]=zl(t[o],r):fo(r)?t[o]=zl({},r):zr(r)?t[o]=r.slice():(!e||!Fr(r))&&(t[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&bs(arguments[r],i);return t}const AM=(n,e,t,{allOwnKeys:i}={})=>(bs(e,(r,s)=>{t&&Jt(r)?Object.defineProperty(n,s,{value:Qd(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),wM=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),RM=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},CM=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&Go(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},PM=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},DM=n=>{if(!n)return null;if(zr(n))return n;let e=n.length;if(!nh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},LM=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Go(Uint8Array)),UM=(n,e)=>{const i=(n&&n[Wo]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},IM=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},NM=An("HTMLFormElement"),FM=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),tf=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),OM=An("RegExp"),sh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};bs(t,(r,s)=>{let o;(o=e(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},BM=n=>{sh(n,(e,t)=>{if(Jt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Jt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},zM=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return zr(n)?i(n):i(String(n).split(e)),t},HM=()=>{},VM=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function kM(n){return!!(n&&Jt(n.append)&&n[eh]==="FormData"&&n[Wo])}const GM=n=>{const e=new Array(10),t=(i,r)=>{if(ys(i)){if(e.indexOf(i)>=0)return;if(Es(i))return i;if(!("toJSON"in i)){e[r]=i;const s=zr(i)?[]:{};return bs(i,(o,a)=>{const l=t(o,r+1);!Fr(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return t(n,0)},WM=An("AsyncFunction"),XM=n=>n&&(ys(n)||Jt(n))&&Jt(n.then)&&Jt(n.catch),oh=((n,e)=>n?setImmediate:e?((t,i)=>(Wi.addEventListener("message",({source:r,data:s})=>{r===Wi&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),Wi.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Jt(Wi.postMessage)),qM=typeof queueMicrotask<"u"?queueMicrotask.bind(Wi):typeof process<"u"&&process.nextTick||oh,$M=n=>n!=null&&Jt(n[Wo]),G={isArray:zr,isArrayBuffer:th,isBuffer:Es,isFormData:xM,isArrayBufferView:aM,isString:lM,isNumber:nh,isBoolean:cM,isObject:ys,isPlainObject:fo,isEmptyObject:uM,isReadableStream:MM,isRequest:EM,isResponse:yM,isHeaders:bM,isUndefined:Fr,isDate:fM,isFile:dM,isReactNativeBlob:hM,isReactNative:pM,isBlob:mM,isRegExp:OM,isFunction:Jt,isStream:_M,isURLSearchParams:SM,isTypedArray:LM,isFileList:gM,forEach:bs,merge:zl,extend:AM,trim:TM,stripBOM:wM,inherits:RM,toFlatObject:CM,kindOf:Xo,kindOfTest:An,endsWith:PM,toArray:DM,forEachEntry:UM,matchAll:IM,isHTMLForm:NM,hasOwnProperty:tf,hasOwnProp:tf,reduceDescriptors:sh,freezeMethods:BM,toObjectSet:zM,toCamelCase:FM,noop:HM,toFiniteNumber:VM,findKey:ih,global:Wi,isContextDefined:rh,isSpecCompliantForm:kM,toJSONObject:GM,isAsyncFn:WM,isThenable:XM,setImmediate:oh,asap:qM,isIterable:$M};let He=class ah extends Error{static from(e,t,i,r,s,o){const a=new ah(e.message,t||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,t,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.status}}};He.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";He.ERR_BAD_OPTION="ERR_BAD_OPTION";He.ECONNABORTED="ECONNABORTED";He.ETIMEDOUT="ETIMEDOUT";He.ERR_NETWORK="ERR_NETWORK";He.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";He.ERR_DEPRECATED="ERR_DEPRECATED";He.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";He.ERR_BAD_REQUEST="ERR_BAD_REQUEST";He.ERR_CANCELED="ERR_CANCELED";He.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";He.ERR_INVALID_URL="ERR_INVALID_URL";He.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const YM=null;function Hl(n){return G.isPlainObject(n)||G.isArray(n)}function lh(n){return G.endsWith(n,"[]")?n.slice(0,-2):n}function Oa(n,e,t){return n?n.concat(e).map(function(r,s){return r=lh(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function jM(n){return G.isArray(n)&&!n.some(Hl)}const KM=G.toFlatObject(G,{},null,function(e){return/^is[A-Z]/.test(e)});function $o(n,e,t){if(!G.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=G.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,d){return!G.isUndefined(d[p])});const i=t.metaTokens,r=t.visitor||f,s=t.dots,o=t.indexes,a=t.Blob||typeof Blob<"u"&&Blob,l=t.maxDepth===void 0?100:t.maxDepth,u=a&&G.isSpecCompliantForm(e);if(!G.isFunction(r))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(G.isDate(v))return v.toISOString();if(G.isBoolean(v))return v.toString();if(!u&&G.isBlob(v))throw new He("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(v)||G.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,p,d){let C=v;if(G.isReactNative(e)&&G.isReactNativeBlob(v))return e.append(Oa(d,p,s),c(v)),!1;if(v&&!d&&typeof v=="object"){if(G.endsWith(p,"{}"))p=i?p:p.slice(0,-2),v=JSON.stringify(v);else if(G.isArray(v)&&jM(v)||(G.isFileList(v)||G.endsWith(p,"[]"))&&(C=G.toArray(v)))return p=lh(p),C.forEach(function(E,I){!(G.isUndefined(E)||E===null)&&e.append(o===!0?Oa([p],I,s):o===null?p:p+"[]",c(E))}),!1}return Hl(v)?!0:(e.append(Oa(d,p,s),c(v)),!1)}const h=[],m=Object.assign(KM,{defaultVisitor:f,convertValue:c,isVisitable:Hl});function g(v,p,d=0){if(!G.isUndefined(v)){if(d>l)throw new He("Object is too deeply nested ("+d+" levels). Max depth: "+l,He.ERR_FORM_DATA_DEPTH_EXCEEDED);if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(v),G.forEach(v,function(A,E){(!(G.isUndefined(A)||A===null)&&r.call(e,A,G.isString(E)?E.trim():E,p,m))===!0&&g(A,p?p.concat(E):[E],d+1)}),h.pop()}}if(!G.isObject(n))throw new TypeError("data must be an object");return g(n),e}function nf(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return e[i]})}function _c(n,e){this._pairs=[],n&&$o(n,this,e)}const ch=_c.prototype;ch.append=function(e,t){this._pairs.push([e,t])};ch.toString=function(e){const t=e?function(i){return e.call(this,i,nf)}:nf;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function ZM(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function uh(n,e,t){if(!e)return n;const i=t&&t.encode||ZM,r=G.isFunction(t)?{serialize:t}:t,s=r&&r.serialize;let o;if(s?o=s(e,r):o=G.isURLSearchParams(e)?e.toString():new _c(e,r).toString(i),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class rf{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,function(i){i!==null&&e(i)})}}const vc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},JM=typeof URLSearchParams<"u"?URLSearchParams:_c,QM=typeof FormData<"u"?FormData:null,eE=typeof Blob<"u"?Blob:null,tE={isBrowser:!0,classes:{URLSearchParams:JM,FormData:QM,Blob:eE},protocols:["http","https","file","blob","url","data"]},xc=typeof window<"u"&&typeof document<"u",Vl=typeof navigator=="object"&&navigator||void 0,nE=xc&&(!Vl||["ReactNative","NativeScript","NS"].indexOf(Vl.product)<0),iE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rE=xc&&window.location.href||"http://localhost",sE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xc,hasStandardBrowserEnv:nE,hasStandardBrowserWebWorkerEnv:iE,navigator:Vl,origin:rE},Symbol.toStringTag,{value:"Module"})),Ot={...sE,...tE};function oE(n,e){return $o(n,new Ot.classes.URLSearchParams,{visitor:function(t,i,r,s){return Ot.isNode&&G.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function aE(n){return G.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lE(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function fh(n){function e(t,i,r,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&G.isArray(r)?r.length:o,l?(G.hasOwnProp(r,o)?r[o]=G.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!a):((!r[o]||!G.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&G.isArray(r[o])&&(r[o]=lE(r[o])),!a)}if(G.isFormData(n)&&G.isFunction(n.entries)){const t={};return G.forEachEntry(n,(i,r)=>{e(aE(i),r,t,0)}),t}return null}const mr=(n,e)=>n!=null&&G.hasOwnProp(n,e)?n[e]:void 0;function cE(n,e,t){if(G.isString(n))try{return(e||JSON.parse)(n),G.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Ts={transitional:vc,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=G.isObject(e);if(s&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return r?JSON.stringify(fh(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){const l=mr(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return oE(e,l).toString();if((a=G.isFileList(e))||i.indexOf("multipart/form-data")>-1){const u=mr(this,"env"),c=u&&u.FormData;return $o(a?{"files[]":e}:e,c&&new c,l)}}return s||r?(t.setContentType("application/json",!1),cE(e)):e}],transformResponse:[function(e){const t=mr(this,"transitional")||Ts.transitional,i=t&&t.forcedJSONParsing,r=mr(this,"responseType"),s=r==="json";if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(i&&!r||s)){const a=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,mr(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?He.from(l,He.ERR_BAD_RESPONSE,this,null,mr(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ot.classes.FormData,Blob:Ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],n=>{Ts.headers[n]={}});const uE=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fE=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&uE[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},sf=Symbol("internals"),dE=/[^\x09\x20-\x7E\x80-\xFF]/g;function hE(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}function jr(n){return n&&String(n).trim().toLowerCase()}function pE(n){return hE(n.replace(dE,""))}function ho(n){return n===!1||n==null?n:G.isArray(n)?n.map(ho):pE(String(n))}function mE(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const gE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Ba(n,e,t,i,r){if(G.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!G.isString(e)){if(G.isString(i))return e.indexOf(i)!==-1;if(G.isRegExp(i))return i.test(e)}}function _E(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function vE(n,e){const t=G.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let Qt=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(a,l,u){const c=jr(l);if(!c)throw new Error("header name must be a non-empty string");const f=G.findKey(r,c);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||l]=ho(a))}const o=(a,l)=>G.forEach(a,(u,c)=>s(u,c,l));if(G.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(G.isString(e)&&(e=e.trim())&&!gE(e))o(fE(e),t);else if(G.isObject(e)&&G.isIterable(e)){let a={},l,u;for(const c of e){if(!G.isArray(c))throw TypeError("Object iterator must return a key-value pair");a[u=c[0]]=(l=a[u])?G.isArray(l)?[...l,c[1]]:[l,c[1]]:c[1]}o(a,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=jr(e),e){const i=G.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return mE(r);if(G.isFunction(t))return t.call(this,r,i);if(G.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=jr(e),e){const i=G.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Ba(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(o){if(o=jr(o),o){const a=G.findKey(i,o);a&&(!t||Ba(i,i[a],a,t))&&(delete i[a],r=!0)}}return G.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Ba(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return G.forEach(this,(r,s)=>{const o=G.findKey(i,s);if(o){t[o]=ho(r),delete t[s];return}const a=e?_E(s):String(s).trim();a!==s&&delete t[s],t[a]=ho(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return G.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&G.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[sf]=this[sf]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=jr(o);i[a]||(vE(r,o),i[a]=!0)}return G.isArray(e)?e.forEach(s):s(e),this}};Qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(Qt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});G.freezeMethods(Qt);function za(n,e){const t=this||Ts,i=e||t,r=Qt.from(i.headers);let s=i.data;return G.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function dh(n){return!!(n&&n.__CANCEL__)}let As=class extends He{constructor(e,t,i){super(e??"canceled",He.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function hh(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new He("Request failed with status code "+t.status,[He.ERR_BAD_REQUEST,He.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function xE(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function SE(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[s];o||(o=u),t[r]=l,i[r]=u;let f=s,h=0;for(;f!==r;)h+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),u-o<e)return;const m=c&&u-c;return m?Math.round(h*1e3/m):void 0}}function ME(n,e){let t=0,i=1e3/e,r,s;const o=(u,c=Date.now())=>{t=c,r=null,s&&(clearTimeout(s),s=null),n(...u)};return[(...u)=>{const c=Date.now(),f=c-t;f>=i?o(u,c):(r=u,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Ao=(n,e,t=3)=>{let i=0;const r=SE(50,250);return ME(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=a!=null?Math.min(o,a):o,u=Math.max(0,l-i),c=r(u);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a?(a-l)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(f)},t)},of=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},af=n=>(...e)=>G.asap(()=>n(...e)),EE=Ot.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Ot.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Ot.origin),Ot.navigator&&/(msie|trident)/i.test(Ot.navigator.userAgent)):()=>!0,yE=Ot.hasStandardBrowserEnv?{write(n,e,t,i,r,s,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(e)}`];G.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),G.isString(i)&&a.push(`path=${i}`),G.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),G.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function bE(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function TE(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function ph(n,e,t){let i=!bE(e);return n&&(i||t===!1)?TE(n,e):e}const lf=n=>n instanceof Qt?{...n}:n;function Ki(n,e){e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,c,f,h){return G.isPlainObject(u)&&G.isPlainObject(c)?G.merge.call({caseless:h},u,c):G.isPlainObject(c)?G.merge({},c):G.isArray(c)?c.slice():c}function r(u,c,f,h){if(G.isUndefined(c)){if(!G.isUndefined(u))return i(void 0,u,f,h)}else return i(u,c,f,h)}function s(u,c){if(!G.isUndefined(c))return i(void 0,c)}function o(u,c){if(G.isUndefined(c)){if(!G.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function a(u,c,f){if(G.hasOwnProp(e,f))return i(u,c);if(G.hasOwnProp(n,f))return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(u,c,f)=>r(lf(u),lf(c),f,!0)};return G.forEach(Object.keys({...n,...e}),function(c){if(c==="__proto__"||c==="constructor"||c==="prototype")return;const f=G.hasOwnProp(l,c)?l[c]:r,h=G.hasOwnProp(n,c)?n[c]:void 0,m=G.hasOwnProp(e,c)?e[c]:void 0,g=f(h,m,c);G.isUndefined(g)&&f!==a||(t[c]=g)}),t}const mh=n=>{const e=Ki({},n),t=h=>G.hasOwnProp(e,h)?e[h]:void 0,i=t("data");let r=t("withXSRFToken");const s=t("xsrfHeaderName"),o=t("xsrfCookieName");let a=t("headers");const l=t("auth"),u=t("baseURL"),c=t("allowAbsoluteUrls"),f=t("url");if(e.headers=a=Qt.from(a),e.url=uh(ph(u,f,c),n.params,n.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),G.isFormData(i)){if(Ot.hasStandardBrowserEnv||Ot.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(G.isFunction(i.getHeaders)){const h=i.getHeaders(),m=["content-type","content-length"];Object.entries(h).forEach(([g,v])=>{m.includes(g.toLowerCase())&&a.set(g,v)})}}if(Ot.hasStandardBrowserEnv&&(G.isFunction(r)&&(r=r(e)),r===!0||r==null&&EE(e.url))){const m=s&&o&&yE.read(o);m&&a.set(s,m)}return e},AE=typeof XMLHttpRequest<"u",wE=AE&&function(n){return new Promise(function(t,i){const r=mh(n);let s=r.data;const o=Qt.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=r,c,f,h,m,g;function v(){m&&m(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(c),r.signal&&r.signal.removeEventListener("abort",c)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function d(){if(!p)return;const A=Qt.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:A,config:n,request:p};hh(function(D){t(D),v()},function(D){i(D),v()},I),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(d)},p.onabort=function(){p&&(i(new He("Request aborted",He.ECONNABORTED,n,p)),p=null)},p.onerror=function(E){const I=E&&E.message?E.message:"Network Error",N=new He(I,He.ERR_NETWORK,n,p);N.event=E||null,i(N),p=null},p.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const I=r.transitional||vc;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new He(E,I.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,n,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&G.forEach(o.toJSON(),function(E,I){p.setRequestHeader(I,E)}),G.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),u&&([h,g]=Ao(u,!0),p.addEventListener("progress",h)),l&&p.upload&&([f,m]=Ao(l),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(c=A=>{p&&(i(!A||A.type?new As(null,n,p):A),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(c),r.signal&&(r.signal.aborted?c():r.signal.addEventListener("abort",c)));const C=xE(r.url);if(C&&Ot.protocols.indexOf(C)===-1){i(new He("Unsupported protocol "+C+":",He.ERR_BAD_REQUEST,n));return}p.send(s||null)})},RE=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(u){if(!r){r=!0,a();const c=u instanceof Error?u:this.reason;i.abort(c instanceof He?c:new As(c instanceof Error?c.message:c))}};let o=e&&setTimeout(()=>{o=null,s(new He(`timeout of ${e}ms exceeded`,He.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),n=null)};n.forEach(u=>u.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>G.asap(a),l}},CE=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},PE=async function*(n,e){for await(const t of DE(n))yield*CE(t,e)},DE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},cf=(n,e,t,i)=>{const r=PE(n,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await r.next();if(u){a(),l.close();return}let f=c.byteLength;if(t){let h=s+=f;t(h)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},uf=64*1024,{isFunction:eo}=G,LE=(({Request:n,Response:e})=>({Request:n,Response:e}))(G.global),{ReadableStream:ff,TextEncoder:df}=G.global,hf=(n,...e)=>{try{return!!n(...e)}catch{return!1}},UE=n=>{n=G.merge.call({skipUndefined:!0},LE,n);const{fetch:e,Request:t,Response:i}=n,r=e?eo(e):typeof fetch=="function",s=eo(t),o=eo(i);if(!r)return!1;const a=r&&eo(ff),l=r&&(typeof df=="function"?(g=>v=>g.encode(v))(new df):async g=>new Uint8Array(await new t(g).arrayBuffer())),u=s&&a&&hf(()=>{let g=!1;const v=new t(Ot.origin,{body:new ff,method:"POST",get duplex(){return g=!0,"half"}}),p=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),g&&!p}),c=o&&a&&hf(()=>G.isReadableStream(new i("").body)),f={stream:c&&(g=>g.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(v,p)=>{let d=v&&v[g];if(d)return d.call(v);throw new He(`Response type '${g}' is not supported`,He.ERR_NOT_SUPPORT,p)})});const h=async g=>{if(g==null)return 0;if(G.isBlob(g))return g.size;if(G.isSpecCompliantForm(g))return(await new t(Ot.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(G.isArrayBufferView(g)||G.isArrayBuffer(g))return g.byteLength;if(G.isURLSearchParams(g)&&(g=g+""),G.isString(g))return(await l(g)).byteLength},m=async(g,v)=>{const p=G.toFiniteNumber(g.getContentLength());return p??h(v)};return async g=>{let{url:v,method:p,data:d,signal:C,cancelToken:A,timeout:E,onDownloadProgress:I,onUploadProgress:N,responseType:D,headers:z,withCredentials:w="same-origin",fetchOptions:T}=mh(g),F=e||fetch;D=D?(D+"").toLowerCase():"text";let ie=RE([C,A&&A.toAbortSignal()],E),Y=null;const se=ie&&ie.unsubscribe&&(()=>{ie.unsubscribe()});let le;try{if(N&&u&&p!=="get"&&p!=="head"&&(le=await m(z,d))!==0){let Me=new t(v,{method:"POST",body:d,duplex:"half"}),Le;if(G.isFormData(d)&&(Le=Me.headers.get("content-type"))&&z.setContentType(Le),Me.body){const[Ce,re]=of(le,Ao(af(N)));d=cf(Me.body,uf,Ce,re)}}G.isString(w)||(w=w?"include":"omit");const j=s&&"credentials"in t.prototype;if(G.isFormData(d)){const Me=z.getContentType();Me&&/^multipart\/form-data/i.test(Me)&&!/boundary=/i.test(Me)&&z.delete("content-type")}const ne={...T,signal:ie,method:p.toUpperCase(),headers:z.normalize().toJSON(),body:d,duplex:"half",credentials:j?w:void 0};Y=s&&new t(v,ne);let V=await(s?F(Y,T):F(v,ne));const _e=c&&(D==="stream"||D==="response");if(c&&(I||_e&&se)){const Me={};["status","statusText","headers"].forEach(ge=>{Me[ge]=V[ge]});const Le=G.toFiniteNumber(V.headers.get("content-length")),[Ce,re]=I&&of(Le,Ao(af(I),!0))||[];V=new i(cf(V.body,uf,Ce,()=>{re&&re(),se&&se()}),Me)}D=D||"text";let be=await f[G.findKey(f,D)||"text"](V,g);return!_e&&se&&se(),await new Promise((Me,Le)=>{hh(Me,Le,{data:be,headers:Qt.from(V.headers),status:V.status,statusText:V.statusText,config:g,request:Y})})}catch(j){throw se&&se(),j&&j.name==="TypeError"&&/Load failed|fetch/i.test(j.message)?Object.assign(new He("Network Error",He.ERR_NETWORK,g,Y,j&&j.response),{cause:j.cause||j}):He.from(j,j&&j.code,g,Y,j&&j.response)}}},IE=new Map,gh=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let o=s.length,a=o,l,u,c=IE;for(;a--;)l=s[a],u=c.get(l),u===void 0&&c.set(l,u=a?new Map:UE(e)),c=u;return u};gh();const Sc={http:YM,xhr:wE,fetch:{get:gh}};G.forEach(Sc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const pf=n=>`- ${n}`,NE=n=>G.isFunction(n)||n===null||n===!1;function FE(n,e){n=G.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let o=0;o<t;o++){i=n[o];let a;if(r=i,!NE(i)&&(r=Sc[(a=String(i)).toLowerCase()],r===void 0))throw new He(`Unknown adapter '${a}'`);if(r&&(G.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(pf).join(`
`):" "+pf(o[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const _h={getAdapter:FE,adapters:Sc};function Ha(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new As(null,n)}function mf(n){return Ha(n),n.headers=Qt.from(n.headers),n.data=za.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),_h.getAdapter(n.adapter||Ts.adapter,n)(n).then(function(i){return Ha(n),i.data=za.call(n,n.transformResponse,i),i.headers=Qt.from(i.headers),i},function(i){return dh(i)||(Ha(n),i&&i.response&&(i.response.data=za.call(n,n.transformResponse,i.response),i.response.headers=Qt.from(i.response.headers))),Promise.reject(i)})}const vh="1.15.2",Yo={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Yo[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const gf={};Yo.transitional=function(e,t,i){function r(s,o){return"[Axios v"+vh+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new He(r(o," has been removed"+(t?" in "+t:"")),He.ERR_DEPRECATED);return t&&!gf[o]&&(gf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};Yo.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function OE(n,e,t){if(typeof n!="object")throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new He("option "+s+" must be "+l,He.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new He("Unknown option "+s,He.ERR_BAD_OPTION)}}const po={assertOptions:OE,validators:Yo},un=po.validators;let $i=class{constructor(e){this.defaults=e||{},this.interceptors={request:new rf,response:new rf}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=s;else if(s){const o=s.indexOf(`
`),a=o===-1?-1:s.indexOf(`
`,o+1),l=a===-1?"":s.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ki(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&po.assertOptions(i,{silentJSONParsing:un.transitional(un.boolean),forcedJSONParsing:un.transitional(un.boolean),clarifyTimeoutError:un.transitional(un.boolean),legacyInterceptorReqResOrdering:un.transitional(un.boolean)},!1),r!=null&&(G.isFunction(r)?t.paramsSerializer={serialize:r}:po.assertOptions(r,{encode:un.function,serialize:un.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),po.assertOptions(t,{baseUrl:un.spelling("baseURL"),withXsrfToken:un.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&G.merge(s.common,s[t.method]);s&&G.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),t.headers=Qt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(t)===!1)return;l=l&&v.synchronous;const p=t.transitional||vc;p&&p.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,f=0,h;if(!l){const g=[mf.bind(this),void 0];for(g.unshift(...a),g.push(...u),h=g.length,c=Promise.resolve(t);f<h;)c=c.then(g[f++],g[f++]);return c}h=a.length;let m=t;for(;f<h;){const g=a[f++],v=a[f++];try{m=g(m)}catch(p){v.call(this,p);break}}try{c=mf.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(e){e=Ki(this.defaults,e);const t=ph(e.baseURL,e.url,e.allowAbsoluteUrls);return uh(t,e.params,e.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(e){$i.prototype[e]=function(t,i){return this.request(Ki(i||{},{method:e,url:t,data:(i||{}).data}))}});G.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(Ki(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}$i.prototype[e]=t(),$i.prototype[e+"Form"]=t(!0)});let BE=class xh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new As(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new xh(function(r){e=r}),cancel:e}}};function zE(n){return function(t){return n.apply(null,t)}}function HE(n){return G.isObject(n)&&n.isAxiosError===!0}const kl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(kl).forEach(([n,e])=>{kl[e]=n});function Sh(n){const e=new $i(n),t=Qd($i.prototype.request,e);return G.extend(t,$i.prototype,e,{allOwnKeys:!0}),G.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Sh(Ki(n,r))},t}const Et=Sh(Ts);Et.Axios=$i;Et.CanceledError=As;Et.CancelToken=BE;Et.isCancel=dh;Et.VERSION=vh;Et.toFormData=$o;Et.AxiosError=He;Et.Cancel=Et.CanceledError;Et.all=function(e){return Promise.all(e)};Et.spread=zE;Et.isAxiosError=HE;Et.mergeConfig=Ki;Et.AxiosHeaders=Qt;Et.formToJSON=n=>fh(G.isHTMLForm(n)?new FormData(n):n);Et.getAdapter=_h.getAdapter;Et.HttpStatusCode=kl;Et.default=Et;const{Axios:zT,AxiosError:HT,CanceledError:VT,isCancel:kT,CancelToken:GT,VERSION:WT,all:XT,Cancel:qT,isAxiosError:$T,spread:YT,toFormData:jT,AxiosHeaders:KT,HttpStatusCode:ZT,formToJSON:JT,getAdapter:QT,mergeConfig:eA}=Et,jo=Et.create({baseURL:"http://localhost:11434/api",timeout:3e4}),VE=async(n,e)=>{try{return(await jo.post("/generate",{model:"llama3",prompt:`基于用户信息和当前情境，生成3-5条人生路线建议。

用户信息：${JSON.stringify(n)}
当前情境：${e}

每条路线应包含：
1. 路线名称
2. 详细描述
3. 可行性（0-100%）
4. 难度等级
5. 预期收益
6. 适合的人格类型

请以JSON格式返回结果。`,format:"json",stream:!1})).data}catch(t){return console.error("Error generating route:",t),{routes:[{title:"稳定职业发展",description:"专注于当前职业，通过持续学习和努力工作获得晋升机会。",feasibility:85,difficulty:"中等",benefit:"稳定增长",personality:"风险规避型"},{title:"创业冒险",description:"利用自身技能和资源，创办自己的事业。",feasibility:45,difficulty:"高",benefit:"潜在高回报",personality:"风险偏好型"},{title:"继续教育",description:"回到学校深造，获取更高学历或专业技能。",feasibility:70,difficulty:"中等",benefit:"长期职业竞争力",personality:"学习型"}]}}},kE=async(n,e)=>{try{return(await jo.post("/generate",{model:"llama3",prompt:`作为人生顾问，回答用户问题：${n}

当前情境：${e}

请提供详细、有深度的建议，结合现实因素和个人发展。`,stream:!1})).data.response}catch(t){return console.error("Error getting AI advice:",t),"感谢你的问题，我会认真思考并给你最适合的建议。"}},GE=async n=>{try{return(await jo.post("/generate",{model:"llama3",prompt:`基于用户信息生成一个情境化测评场景。

用户信息：${JSON.stringify(n)}

场景应包含：
1. 具体情境描述
2. 3-4个选择选项
3. 每个选项对应的决策风格

请以JSON格式返回结果。`,format:"json",stream:!1})).data}catch(e){return console.error("Error generating scenario:",e),{scenario:"你突然获得了10万元的意外收入，你会如何处理？",options:[{text:"存入银行，作为紧急储备金",style:"风险规避型"},{text:"投资基金，追求稳健增长",style:"平衡型"},{text:"投资股票，追求高回报",style:"风险偏好型"},{text:"用于学习或提升技能",style:"成长型"}]}}},WE=async n=>{try{return(await jo.post("/generate",{model:"llama3",prompt:`基于用户的人生路径计算后悔值。

人生路径：${JSON.stringify(n)}

请计算后悔指数（0-100）并提供详细分析。

请以JSON格式返回结果，包含：
1. regretLevel: 后悔指数
2. regretText: 后悔评级文本
3. analysis: 详细分析
4. advice: 人生建议`,format:"json",stream:!1})).data}catch(e){return console.error("Error calculating regret:",e),{regretLevel:30,regretText:"略有遗憾",analysis:"你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。",advice:"继续保持当前的平衡状态，同时勇于尝试新的机会。"}}},XE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},qE={class:"app"},$E={class:"main-content"},YE={key:0,class:"genesis-view"},jE={class:"scroll-form glass-container fade-in"},KE={class:"form-section"},ZE={class:"form-row"},JE={class:"form-group"},QE={class:"form-group"},ey={class:"form-row"},ty={class:"form-group"},ny={class:"form-group"},iy={class:"form-row"},ry={class:"form-group"},sy={class:"form-group"},oy={class:"form-row"},ay={class:"form-group"},ly={class:"form-group"},cy={class:"form-section"},uy={class:"form-row"},fy={class:"form-group"},dy={class:"form-group"},hy={class:"form-row"},py={class:"form-group"},my={class:"form-group"},gy={class:"form-row"},_y={class:"form-group full-width"},vy={class:"form-section"},xy={class:"card-front glass-container"},Sy={key:0,class:"card-back glass-container"},My=["onClick"],Ey={key:1,class:"destiny-view"},yy={class:"tree-container"},by={class:"tree-canvas",ref:"treeCanvas"},Ty={class:"tree-nodes"},Ay={class:"node-content"},wy={class:"node-actions"},Ry={class:"first-level-children"},Cy=["onClick"],Py={class:"node-content"},Dy={class:"node-actions"},Ly=["onClick"],Uy=["onClick"],Iy=["onClick"],Ny={key:0,class:"second-level-children"},Fy=["onClick"],Oy={class:"node-content"},By={class:"node-actions"},zy=["onClick"],Hy=["onClick"],Vy=["onClick"],ky={key:2,class:"divergence-view"},Gy={class:"divergence-container glass-container"},Wy={class:"mode-switch"},Xy={key:0,class:"routes-container"},qy={class:"route-header"},$y={class:"route-description"},Yy={class:"route-meta"},jy={class:"route-actions"},Ky=["onClick"],Zy=["onClick"],Jy=["onClick"],Qy=["onClick"],eb=["disabled"],tb={key:1,class:"parallel-compare-modal"},nb={class:"compare-content glass-container"},ib={class:"compare-panes"},rb={class:"pane-body"},sb={class:"desc"},ob={class:"compare-stat"},ab={class:"stat-bar"},lb={class:"compare-stat"},cb={class:"text-val"},ub={class:"compare-stat"},fb={class:"text-val"},db={class:"pane-footer"},hb=["onClick"],pb={key:2,class:"custom-route"},mb={class:"form-row"},gb={class:"form-group"},_b={class:"form-group"},vb={class:"form-row"},xb={class:"form-group"},Sb={class:"form-group"},Mb={class:"form-group full-width"},Eb={class:"form-group full-width"},yb={key:3,class:"multimedia-section"},bb={class:"style-selector"},Tb={key:3,class:"reflection-view"},Ab={class:"reflection-container"},wb={class:"compass glass-container"},Rb={class:"compass-directions"},Cb={class:"direction"},Pb={class:"attribute-bar"},Db={class:"attribute-narrative"},Lb={class:"direction"},Ub={class:"attribute-bar"},Ib={class:"attribute-narrative"},Nb={class:"direction"},Fb={class:"attribute-bar"},Ob={class:"attribute-narrative"},Bb={class:"direction"},zb={class:"attribute-bar"},Hb={class:"attribute-narrative"},Vb={class:"direction"},kb={class:"attribute-bar"},Gb={class:"attribute-narrative"},Wb={class:"visualization-section glass-container"},Xb={class:"chart-container"},qb={key:0,class:"radar-chart"},$b={key:1,class:"trend-chart"},Yb={key:2,class:"impact-chart"},jb={key:4,class:"mentorship-view"},Kb={class:"mentorship-container glass-container"},Zb={class:"ai-avatar"},Jb={class:"chat-container"},Qb={class:"message-content"},eT={key:0,class:"chat-message ai-message"},tT={class:"chat-input"},nT=["disabled"],iT={class:"ai-role-selector"},rT={class:"role-options"},sT={key:5,class:"conclusion-view"},oT={class:"scroll-report glass-container"},aT={class:"regret-meter"},lT={class:"regret-bar"},cT={class:"regret-text"},uT={class:"regret-analysis"},fT={class:"report-content"},dT={class:"attribute-comparison"},hT={class:"attribute-item"},pT={class:"attribute-bar"},mT={class:"attribute-level"},gT={class:"attribute-item"},_T={class:"attribute-bar"},vT={class:"attribute-level"},xT={class:"attribute-item"},ST={class:"attribute-bar"},MT={class:"attribute-level"},ET={class:"attribute-item"},yT={class:"attribute-bar"},bT={class:"attribute-level"},TT={class:"attribute-item"},AT={class:"attribute-bar"},wT={class:"attribute-level"},RT={class:"ai-advice"},CT={class:"celebrity-simulation"},PT={class:"celebrity-options"},DT={class:"save-section"},LT={class:"saved-paths"},UT=["onClick"],IT={__name:"App",setup(n){const e=mt("genesis"),t=mt([]),i=mt({age:"",education:"",occupation:"",city:"",income:"",family:"",skills:"",investment:"",riskPreference:"",delayGratification:"",stressResistance:"",decisionStyle:"",lifeGoals:""}),r=mt(!1),s=mt("current"),o=mt("ai"),a=mt({title:"",description:"",feasibility:"",difficulty:"",benefit:""}),l=mt({career:75,finance:65,relationship:80,health:70,growth:85}),u=mt(""),c=mt([]),f=mt(30),h=mt("略有遗憾"),m=mt("你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。"),g=mt("基于你的人生轨迹分析，建议你在未来的发展中注重平衡职业与健康，同时保持持续学习的态度。在做出重要决策时，多考虑长期影响而非短期利益。"),v=mt({scenario:"你突然获得了10万元的意外收入，你会如何处理？",options:[{text:"存入银行，作为紧急储备金",style:"风险规避型"},{text:"投资基金，追求稳健增长",style:"平衡型"},{text:"投资股票，追求高回报",style:"风险偏好型"},{text:"用于学习或提升技能",style:"成长型"}]}),p=mt([{title:"技术专家路线",description:"专注于技术领域，通过持续学习和项目经验积累，成为行业专家。",tag:"高可行性",tagColor:"success",feasibility:85,difficulty:"中等",benefit:"高"},{title:"管理路线",description:"转向管理岗位，培养领导力和团队协作能力。",tag:"中等风险",tagColor:"important",feasibility:70,difficulty:"中等",benefit:"中高"},{title:"创业路线",description:"自主创业，追求个人理想和财务自由。",tag:"高风险",tagColor:"warning",feasibility:45,difficulty:"高",benefit:"极高"}]),d=mt(!1),C=mt(null),A=mt("治愈"),E=mt("radar"),I=mt("职场导师"),N=mt("拥有丰富的职场经验，能够为你提供职业发展建议"),D=mt(!1),z=mt([{name:"职业发展路线",date:"2026-04-20"},{name:"创业路线",date:"2026-04-15"}]),w=()=>{const L=Ce.value.find(x=>x.id==="current");L&&(i.value.age&&i.value.occupation?L.description=`${i.value.age}岁，${i.value.occupation}`:i.value.age?L.description=`${i.value.age}岁`:i.value.occupation?L.description=i.value.occupation:L.description="请填写基础信息"),e.value="destiny"},T=()=>{e.value="divergence"},F=()=>{e.value="reflection"},ie=()=>{e.value="mentorship"},Y=async()=>{const L=await WE({userInfo:i.value,attributes:l.value,routes:p.value});f.value=L.regretLevel||30,h.value=L.regretText||"略有遗憾",m.value=L.analysis||"你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。",g.value=L.advice||"基于你的人生轨迹分析，建议你在未来的发展中注重平衡职业与健康，同时保持持续学习的态度。",e.value="conclusion"},se=()=>{e.value="genesis"},le=()=>{r.value=!r.value},j=L=>{console.log("Selected option:",L),i.value.decisionStyle=L,r.value=!1},ne=L=>{const x=t.value.findIndex(ce=>ce.title===L.title);x!==-1?t.value.splice(x,1):(t.value.length>=2&&t.value.shift(),t.value.push(L))},V=L=>{s.value=L},_e=()=>{o.value=o.value==="ai"?"custom":"ai"},be=async()=>{if(u.value.trim()){c.value.push(u.value);const L=u.value;u.value="",D.value=!0;try{const x=await kE(L,{userInfo:i.value,currentRole:I.value});c.value.push(x)}catch{c.value.push("感谢你的问题，我会认真思考并给你最适合的建议。")}finally{D.value=!1}}},Me=async()=>{try{const L=await GE(i.value);v.value=L}catch(L){console.error("Error generating scenario:",L)}},Le=()=>{console.log("Using default model")},Ce=mt([{id:"current",title:"当前状态",description:"请填写基础信息",children:["career","education","relationship"]},{id:"career",title:"职业发展",description:"晋升机会",parent:"current",children:[]},{id:"education",title:"继续教育",description:"深造学习",parent:"current",children:[]},{id:"relationship",title:"人际关系",description:"社交拓展",parent:"current",children:[]}]),re=()=>{const L={id:`node_${Date.now()}`,title:"新节点",description:"请编辑节点内容",parent:s.value,children:[]};Ce.value.push(L);const x=Ce.value.find(ce=>ce.id===s.value);x&&x.children.push(L.id),s.value=L.id,console.log("Added new node:",L)},ge=()=>{const L=JSON.stringify(Ce.value,null,2),x=new Blob([L],{type:"application/json"}),ce=URL.createObjectURL(x),ue=document.createElement("a");ue.href=ce,ue.download="life_tree.json",ue.click(),URL.revokeObjectURL(ce),console.log("Exported tree data")},Ae=()=>{Ce.value=[{id:"current",title:"当前状态",description:`${i.value.age}岁，${i.value.occupation}`,children:["career","education","relationship"]},{id:"career",title:"职业发展",description:"晋升机会",parent:"current",children:[]},{id:"education",title:"继续教育",description:"深造学习",parent:"current",children:[]},{id:"relationship",title:"人际关系",description:"社交拓展",parent:"current",children:[]}],s.value="current",console.log("Reset tree to initial state")},xe=L=>{var ue,Pe;const x=prompt("请输入节点标题:",(ue=Ce.value.find(Q=>Q.id===L))==null?void 0:ue.title),ce=prompt("请输入节点描述:",(Pe=Ce.value.find(Q=>Q.id===L))==null?void 0:Pe.description);if(x){const Q=Ce.value.find($e=>$e.id===L);Q&&(Q.title=x,ce&&(Q.description=ce),console.log("Edited node:",L))}},Ue=L=>{if(L==="current"){alert("不能删除当前状态节点");return}const x=ue=>{const Pe=Ce.value.find($e=>$e.id===ue);Pe!=null&&Pe.children&&Pe.children.forEach($e=>{x($e)});const Q=Ce.value.findIndex($e=>$e.id===ue);Q>-1&&Ce.value.splice(Q,1)},ce=Ce.value.find(ue=>ue.id===L);if(ce!=null&&ce.parent){const ue=Ce.value.find(Pe=>Pe.id===ce.parent);ue&&(ue.children=ue.children.filter(Pe=>Pe!==L))}x(L),s.value="current",console.log("Deleted node:",L)},Be=L=>{const x=Math.floor(Math.random()*4)+2;for(let ce=0;ce<x;ce++){const ue={id:`branch_${Date.now()}_${ce}`,title:`分支 ${ce+1}`,description:`分支描述 ${ce+1}`,parent:L,children:[]};Ce.value.push(ue);const Pe=Ce.value.find(Q=>Q.id===L);Pe&&Pe.children.push(ue.id)}console.log("Extended branch:",L)},We=async()=>{d.value=!0;try{const L=await VE(i.value,"人生分岔路选择");L.routes&&(p.value=L.routes.map(x=>({...x,tag:x.feasibility>70?"高可行性":x.feasibility>40?"中等可行性":"低可行性",tagColor:x.feasibility>70?"success":x.feasibility>40?"important":"warning"})))}catch(L){console.error("Error generating routes:",L)}finally{d.value=!1}},pt=L=>{console.log("Refining route:",L)},R=L=>{console.log("Replacing route:",L)},U=L=>{C.value=L;const x={career:Math.floor(Math.random()*20)-5,finance:Math.floor(Math.random()*20)-5,relationship:Math.floor(Math.random()*20)-5,health:Math.floor(Math.random()*20)-5,growth:Math.floor(Math.random()*20)-5};Object.keys(x).forEach(ce=>{l.value[ce]=Math.max(0,Math.min(100,l.value[ce]+x[ce]))}),console.log("Selected route:",L),console.log("Attribute changes:",x),console.log("Updated attributes:",l.value)},y=()=>{console.log("Adding custom route:",a.value)},oe=L=>{const x=L.target.files[0];console.log("Uploaded file:",x)},J=()=>{console.log("Generating comic with style:",A.value)},ee=()=>{console.log("Generating video with style:",A.value)},te=()=>{console.log("Generating poster with style:",A.value)},ae=L=>L>=80?"level-high":L>=60?"level-medium":"level-low",W=L=>L>=80?"顶尖":L>=60?"良好":L>=40?"一般":"初级",S=(L,x)=>{const ce={career:{high:"你的职业发展前景广阔，有很大的晋升空间。",medium:"你的职业发展稳定，有一定的成长机会。",low:"你的职业发展面临挑战，需要更多努力。"},finance:{high:"你的财务状况良好，有足够的储蓄和投资。",medium:"你的财务状况稳定，能够满足基本需求。",low:"你的财务状况紧张，需要更合理的规划。"},relationship:{high:"你的人际关系和谐，社交网络广泛。",medium:"你的人际关系稳定，有几个知心朋友。",low:"你的人际关系需要改善，建议主动社交。"},health:{high:"你的健康状态良好，充满活力。",medium:"你的健康状态一般，需要注意保养。",low:"你的健康状态不佳，建议加强锻炼。"},growth:{high:"你保持持续学习，个人成长迅速。",medium:"你有一定的学习意识，能够不断进步。",low:"你需要更主动地学习和成长。"}};let ue="low";return x>=80?ue="high":x>=60&&(ue="medium"),ce[L][ue]},_=()=>{E.value="radar"},P=()=>{E.value="trend"},k=()=>{E.value="impact"},X=()=>{console.log("Refreshing social data")},q=()=>{console.log("Toggling voice input")},pe=L=>{I.value=L;const x={职场导师:"拥有丰富的职场经验，能够为你提供职业发展建议",情感顾问:"擅长人际关系和情感问题分析，给予心理支持",创业前辈:"有成功创业经验，能够分享创业心得和建议",人生规划师:"专注于人生规划和目标设定，帮助你找到人生方向"};N.value=x[L]},fe=()=>{const L={name:`人生轨迹_${new Date().toISOString().split("T")[0]}`,date:new Date().toISOString().split("T")[0]};z.value.push(L),console.log("Saved current path:",L)},me=()=>{console.log("Loading saved path")},Ie=L=>{console.log("Loading path:",L)},de=()=>{console.log("Exporting report")},Se=L=>{console.log("Simulating celebrity:",L)},De=mt(null);let Ne,ve,Fe,Ve;const it=()=>{Ne=new g_,ve=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),Fe=new sM({alpha:!0}),Fe.setSize(window.innerWidth,window.innerHeight),De.value.appendChild(Fe.domElement),Ve=new Jr,Ne.add(Ve);for(let L=0;L<1e3;L++){const x=new mc(.05,8,8),ce=new pc({color:13940870}),ue=new Fn(x,ce);ue.position.x=(Math.random()-.5)*100,ue.position.y=(Math.random()-.5)*100,ue.position.z=(Math.random()-.5)*100,Ve.add(ue)}ve.position.z=30,O()},O=()=>{requestAnimationFrame(O),Ve.rotation.x+=5e-4,Ve.rotation.y+=5e-4,Fe.render(Ne,ve)},Ee=()=>{ve.aspect=window.innerWidth/window.innerHeight,ve.updateProjectionMatrix(),Fe.setSize(window.innerWidth,window.innerHeight)};return Jf(()=>{it(),window.addEventListener("resize",Ee)}),nc(()=>{window.removeEventListener("resize",Ee),Fe.dispose()}),(L,x)=>{var ce,ue,Pe;return tt(),rt("div",qE,[M("div",{ref_key:"starfield",ref:De,class:"starfield"},null,512),M("div",$E,[e.value==="genesis"?(tt(),rt("div",YE,[M("div",jE,[x[57]||(x[57]=M("h1",{class:"title"},"人生基础建模",-1)),M("div",KE,[x[44]||(x[44]=M("h2",null,"基础信息",-1)),M("div",ZE,[M("div",JE,[x[34]||(x[34]=M("label",null,"年龄",-1)),bt(M("input",{type:"number","onUpdate:modelValue":x[0]||(x[0]=Q=>i.value.age=Q),class:"input",placeholder:"请输入年龄"},null,512),[[gn,i.value.age]])]),M("div",QE,[x[36]||(x[36]=M("label",null,"学历",-1)),bt(M("select",{"onUpdate:modelValue":x[1]||(x[1]=Q=>i.value.education=Q),class:"input"},[...x[35]||(x[35]=[Ls('<option value="" data-v-c4832059>请选择学历</option><option value="high school" data-v-c4832059>高中</option><option value="college" data-v-c4832059>大专</option><option value="bachelor" data-v-c4832059>本科</option><option value="master" data-v-c4832059>硕士</option><option value="phd" data-v-c4832059>博士</option>',6)])],512),[[Wn,i.value.education]])])]),M("div",ey,[M("div",ty,[x[37]||(x[37]=M("label",null,"职业",-1)),bt(M("input",{type:"text","onUpdate:modelValue":x[2]||(x[2]=Q=>i.value.occupation=Q),class:"input",placeholder:"请输入职业"},null,512),[[gn,i.value.occupation]])]),M("div",ny,[x[38]||(x[38]=M("label",null,"城市",-1)),bt(M("input",{type:"text","onUpdate:modelValue":x[3]||(x[3]=Q=>i.value.city=Q),class:"input",placeholder:"请输入城市"},null,512),[[gn,i.value.city]])])]),M("div",iy,[M("div",ry,[x[39]||(x[39]=M("label",null,"月收入",-1)),bt(M("input",{type:"number","onUpdate:modelValue":x[4]||(x[4]=Q=>i.value.income=Q),class:"input",placeholder:"请输入月收入"},null,512),[[gn,i.value.income]])]),M("div",sy,[x[41]||(x[41]=M("label",null,"家庭状况",-1)),bt(M("select",{"onUpdate:modelValue":x[5]||(x[5]=Q=>i.value.family=Q),class:"input"},[...x[40]||(x[40]=[M("option",{value:""},"请选择",-1),M("option",{value:"single"},"单身",-1),M("option",{value:"married"},"已婚",-1),M("option",{value:"married_with_children"},"已婚有子女",-1)])],512),[[Wn,i.value.family]])])]),M("div",oy,[M("div",ay,[x[42]||(x[42]=M("label",null,"核心技能",-1)),bt(M("input",{type:"text","onUpdate:modelValue":x[6]||(x[6]=Q=>i.value.skills=Q),class:"input",placeholder:"请输入核心技能"},null,512),[[gn,i.value.skills]])]),M("div",ly,[x[43]||(x[43]=M("label",null,"可投入成本",-1)),bt(M("input",{type:"number","onUpdate:modelValue":x[7]||(x[7]=Q=>i.value.investment=Q),class:"input",placeholder:"请输入可投入成本"},null,512),[[gn,i.value.investment]])])])]),M("div",cy,[x[54]||(x[54]=M("h2",null,"人格与偏好建模",-1)),M("div",uy,[M("div",fy,[x[46]||(x[46]=M("label",null,"风险偏好",-1)),bt(M("select",{"onUpdate:modelValue":x[8]||(x[8]=Q=>i.value.riskPreference=Q),class:"input"},[...x[45]||(x[45]=[M("option",{value:""},"请选择",-1),M("option",{value:"risk-averse"},"风险规避",-1),M("option",{value:"moderate"},"平衡型",-1),M("option",{value:"risk-seeking"},"风险偏好",-1)])],512),[[Wn,i.value.riskPreference]])]),M("div",dy,[x[48]||(x[48]=M("label",null,"延迟满足能力",-1)),bt(M("select",{"onUpdate:modelValue":x[9]||(x[9]=Q=>i.value.delayGratification=Q),class:"input"},[...x[47]||(x[47]=[M("option",{value:""},"请选择",-1),M("option",{value:"low"},"低",-1),M("option",{value:"medium"},"中",-1),M("option",{value:"high"},"高",-1)])],512),[[Wn,i.value.delayGratification]])])]),M("div",hy,[M("div",py,[x[50]||(x[50]=M("label",null,"抗压能力",-1)),bt(M("select",{"onUpdate:modelValue":x[10]||(x[10]=Q=>i.value.stressResistance=Q),class:"input"},[...x[49]||(x[49]=[M("option",{value:""},"请选择",-1),M("option",{value:"low"},"低",-1),M("option",{value:"medium"},"中",-1),M("option",{value:"high"},"高",-1)])],512),[[Wn,i.value.stressResistance]])]),M("div",my,[x[52]||(x[52]=M("label",null,"决策风格",-1)),bt(M("select",{"onUpdate:modelValue":x[11]||(x[11]=Q=>i.value.decisionStyle=Q),class:"input"},[...x[51]||(x[51]=[M("option",{value:""},"请选择",-1),M("option",{value:"analytical"},"分析型",-1),M("option",{value:"intuitive"},"直觉型",-1),M("option",{value:"collaborative"},"协作型",-1)])],512),[[Wn,i.value.decisionStyle]])])]),M("div",gy,[M("div",_y,[x[53]||(x[53]=M("label",null,"人生目标",-1)),bt(M("textarea",{"onUpdate:modelValue":x[12]||(x[12]=Q=>i.value.lifeGoals=Q),class:"input",rows:"3",placeholder:"请输入短期和长期人生目标"},null,512),[[gn,i.value.lifeGoals]])])])]),M("div",vy,[x[56]||(x[56]=M("h2",null,"情境化测评",-1)),M("div",{class:"card-flip",onClick:le},[M("div",xy,[M("h3",null,ke(v.value.scenario),1),x[55]||(x[55]=M("p",null,"点击卡片查看选项",-1))]),r.value?(tt(),rt("div",Sy,[(tt(!0),rt(Nt,null,wi(v.value.options,(Q,$e)=>(tt(),rt("div",{class:"option",key:$e,onClick:Ze=>j(Q.style)},[M("span",null,ke(Q.text),1),M("small",null,ke(Q.style),1)],8,My))),128))])):Ci("",!0)]),M("button",{class:"btn btn-secondary",onClick:Me},"生成新场景"),M("button",{class:"btn btn-secondary",onClick:Le},"跳过使用默认模型")]),x[58]||(x[58]=Ls('<div class="privacy-section" data-v-c4832059><div class="seal" data-v-c4832059><span data-v-c4832059>数据安全承诺</span><p data-v-c4832059>我们将对您的个人信息进行脱敏加密处理，严格遵守《个人信息保护法》</p><div class="privacy-actions" data-v-c4832059><button class="btn btn-secondary small" data-v-c4832059>修改信息</button><button class="btn btn-secondary small" data-v-c4832059>删除数据</button><button class="btn btn-secondary small" data-v-c4832059>本地备份</button></div></div></div>',1)),M("button",{class:"btn btn-primary",onClick:w},"开始探索")])])):e.value==="destiny"?(tt(),rt("div",Ey,[M("div",yy,[M("div",{class:"tree-header"},[x[59]||(x[59]=M("h1",{class:"title"},"命轨",-1)),x[60]||(x[60]=M("p",null,"你的人生轨迹",-1)),M("div",{class:"tree-actions"},[M("button",{class:"btn btn-secondary small",onClick:re},"添加节点"),M("button",{class:"btn btn-secondary small",onClick:ge},"导出图谱"),M("button",{class:"btn btn-secondary small",onClick:Ae},"重置树状图")])]),M("div",by,[M("div",Ty,[M("div",{class:jt(["node main-node",{active:s.value==="current"}]),onClick:x[16]||(x[16]=Q=>V("current"))},[M("div",Ay,[M("h3",null,ke((ce=Ce.value.find(Q=>Q.id==="current"))==null?void 0:ce.title),1),M("p",null,ke((ue=Ce.value.find(Q=>Q.id==="current"))==null?void 0:ue.description),1),M("div",wy,[M("button",{class:"btn btn-secondary small",onClick:x[13]||(x[13]=Q=>xe("current"))},"编辑"),M("button",{class:"btn btn-secondary small",onClick:x[14]||(x[14]=Q=>Ue("current"))},"删除"),M("button",{class:"btn btn-secondary small",onClick:x[15]||(x[15]=Q=>Be("current"))},"延伸分支")])])],2),M("div",Ry,[(tt(!0),rt(Nt,null,wi((Pe=Ce.value.find(Q=>Q.id==="current"))==null?void 0:Pe.children,Q=>{var $e,Ze,Xt,on,Hr;return tt(),rt("div",{key:Q,class:jt(["node branch-node",{active:s.value===Q}]),onClick:_t=>V(Q)},[M("div",Py,[M("h3",null,ke(($e=Ce.value.find(_t=>_t.id===Q))==null?void 0:$e.title),1),M("p",null,ke((Ze=Ce.value.find(_t=>_t.id===Q))==null?void 0:Ze.description),1),M("div",Dy,[M("button",{class:"btn btn-secondary small",onClick:_t=>xe(Q)},"编辑",8,Ly),M("button",{class:"btn btn-secondary small",onClick:_t=>Ue(Q)},"删除",8,Uy),M("button",{class:"btn btn-secondary small",onClick:_t=>Be(Q)},"延伸分支",8,Iy)])]),(Xt=Ce.value.find(_t=>_t.id===Q))!=null&&Xt.children&&((on=Ce.value.find(_t=>_t.id===Q))==null?void 0:on.children.length)>0?(tt(),rt("div",Ny,[(tt(!0),rt(Nt,null,wi((Hr=Ce.value.find(_t=>_t.id===Q))==null?void 0:Hr.children,_t=>{var wn,Ji;return tt(),rt("div",{key:_t,class:jt(["node branch-node small-node",{active:s.value===_t}]),onClick:Rn=>V(_t)},[M("div",Oy,[M("h3",null,ke((wn=Ce.value.find(Rn=>Rn.id===_t))==null?void 0:wn.title),1),M("p",null,ke((Ji=Ce.value.find(Rn=>Rn.id===_t))==null?void 0:Ji.description),1),M("div",By,[M("button",{class:"btn btn-secondary small",onClick:Rn=>xe(_t)},"编辑",8,zy),M("button",{class:"btn btn-secondary small",onClick:Rn=>Ue(_t)},"删除",8,Hy),M("button",{class:"btn btn-secondary small",onClick:Rn=>Be(_t)},"延伸分支",8,Vy)])])],10,Fy)}),128))])):Ci("",!0)],10,Cy)}),128))])])],512),M("div",{class:"tree-controls"},[M("button",{class:"btn btn-secondary",onClick:se},"返回"),M("button",{class:"btn btn-primary",onClick:T},"衍生路线")])])])):e.value==="divergence"?(tt(),rt("div",ky,[M("div",Gy,[x[80]||(x[80]=M("h1",{class:"title"},"衍化",-1)),M("div",Wy,[x[62]||(x[62]=M("span",null,"AI智能生成",-1)),M("div",{class:jt(["toggle",{active:o.value==="ai"}]),onClick:_e},[...x[61]||(x[61]=[M("div",{class:"toggle-thumb"},null,-1)])],2),x[63]||(x[63]=M("span",null,"玩家自定义",-1))]),o.value==="ai"?(tt(),rt("div",Xy,[(tt(!0),rt(Nt,null,wi(p.value,(Q,$e)=>(tt(),rt("div",{class:"route-card glass-container",key:$e},[M("div",qy,[M("h3",null,ke(Q.title),1),M("div",{class:jt(["route-tag",Q.tagColor])},ke(Q.tag),3)]),M("p",$y,ke(Q.description),1),M("div",Yy,[M("span",null,"可行性: "+ke(Q.feasibility)+"%",1),M("span",null,"难度: "+ke(Q.difficulty),1),M("span",null,"预期收益: "+ke(Q.benefit),1)]),M("div",jy,[M("button",{class:"btn btn-secondary small",onClick:Ze=>pt($e)},"细化路线",8,Ky),M("button",{class:"btn btn-secondary small",onClick:Ze=>R($e)},"替换路线",8,Zy),M("button",{class:"btn btn-secondary small",onClick:Ze=>ne(Q)},ke(t.value.includes(Q)?"取消对比":"加入对比"),9,Jy),M("button",{class:"btn btn-primary small",onClick:Ze=>U(Q)},"选择路线",8,Qy)])]))),128)),M("button",{class:"btn btn-primary",onClick:We,disabled:d.value},ke(d.value?"生成中...":"重新生成路线"),9,eb)])):Ci("",!0),t.value.length===2?(tt(),rt("div",tb,[M("div",{class:"compare-overlay",onClick:x[17]||(x[17]=Q=>t.value=[])}),M("div",nb,[x[67]||(x[67]=M("h2",null,"平行时空双窗对比",-1)),M("button",{class:"btn btn-secondary close-compare",onClick:x[18]||(x[18]=Q=>t.value=[])},"✖"),M("div",ib,[(tt(!0),rt(Nt,null,wi(t.value,(Q,$e)=>(tt(),rt("div",{class:"compare-pane",key:$e},[M("div",{class:"pane-header",style:Ut({borderBottomColor:$e===0?"var(--color-important)":"var(--color-success)"})},[M("h3",null,ke(Q.title),1),M("div",{class:jt(["route-tag",Q.tagColor])},ke(Q.tag),3)],4),M("div",rb,[M("p",sb,ke(Q.description),1),M("div",ob,[x[64]||(x[64]=M("label",null,"可行性",-1)),M("div",ab,[M("div",{class:"stat-fill",style:Ut({width:Q.feasibility+"%",background:$e===0?"var(--color-important)":"var(--color-success)"})},null,4)]),M("span",null,ke(Q.feasibility)+"%",1)]),M("div",lb,[x[65]||(x[65]=M("label",null,"难度评级",-1)),M("span",cb,ke(Q.difficulty),1)]),M("div",ub,[x[66]||(x[66]=M("label",null,"预期收益",-1)),M("span",fb,ke(Q.benefit),1)])]),M("div",db,[M("button",{class:"btn btn-primary",onClick:Ze=>{U(Q),t.value=[]}},"选择此轨道",8,hb)])]))),128))])])])):(tt(),rt("div",pb,[x[76]||(x[76]=M("h3",null,"自定义路线",-1)),M("div",mb,[M("div",gb,[x[68]||(x[68]=M("label",null,"路线名称",-1)),bt(M("input",{type:"text","onUpdate:modelValue":x[19]||(x[19]=Q=>a.value.title=Q),class:"input",placeholder:"路线名称"},null,512),[[gn,a.value.title]])]),M("div",_b,[x[69]||(x[69]=M("label",null,"可行性",-1)),bt(M("input",{type:"number","onUpdate:modelValue":x[20]||(x[20]=Q=>a.value.feasibility=Q),class:"input",placeholder:"0-100%"},null,512),[[gn,a.value.feasibility]])])]),M("div",vb,[M("div",xb,[x[71]||(x[71]=M("label",null,"难度",-1)),bt(M("select",{"onUpdate:modelValue":x[21]||(x[21]=Q=>a.value.difficulty=Q),class:"input"},[...x[70]||(x[70]=[M("option",{value:""},"请选择",-1),M("option",{value:"低"},"低",-1),M("option",{value:"中等"},"中等",-1),M("option",{value:"高"},"高",-1)])],512),[[Wn,a.value.difficulty]])]),M("div",Sb,[x[73]||(x[73]=M("label",null,"预期收益",-1)),bt(M("select",{"onUpdate:modelValue":x[22]||(x[22]=Q=>a.value.benefit=Q),class:"input"},[...x[72]||(x[72]=[Ls('<option value="" data-v-c4832059>请选择</option><option value="低" data-v-c4832059>低</option><option value="中等" data-v-c4832059>中等</option><option value="高" data-v-c4832059>高</option><option value="极高" data-v-c4832059>极高</option>',5)])],512),[[Wn,a.value.benefit]])])]),M("div",Mb,[x[74]||(x[74]=M("label",null,"路线描述",-1)),bt(M("textarea",{"onUpdate:modelValue":x[23]||(x[23]=Q=>a.value.description=Q),class:"input",rows:"3",placeholder:"路线描述"},null,512),[[gn,a.value.description]])]),M("div",Eb,[x[75]||(x[75]=M("label",null,"上传规划文档",-1)),M("input",{type:"file",class:"input",onChange:oe},null,32)]),M("button",{class:"btn btn-primary",onClick:y},"添加路线")])),C.value?(tt(),rt("div",yb,[x[79]||(x[79]=M("h3",null,"多模态素材",-1)),M("div",{class:"multimedia-options"},[M("button",{class:"btn btn-secondary",onClick:J},"生成漫画"),M("button",{class:"btn btn-secondary",onClick:ee},"生成短视频"),M("button",{class:"btn btn-secondary",onClick:te},"生成海报")]),M("div",bb,[x[78]||(x[78]=M("label",null,"风格选择",-1)),bt(M("select",{"onUpdate:modelValue":x[24]||(x[24]=Q=>A.value=Q),class:"input"},[...x[77]||(x[77]=[M("option",{value:"治愈"},"治愈",-1),M("option",{value:"写实"},"写实",-1),M("option",{value:"科幻"},"科幻",-1)])],512),[[Wn,A.value]])])])):Ci("",!0),M("div",{class:"divergence-controls"},[M("button",{class:"btn btn-secondary",onClick:w},"返回"),M("button",{class:"btn btn-primary",onClick:F},"查看属性")])])])):e.value==="reflection"?(tt(),rt("div",Tb,[M("div",Ab,[x[97]||(x[97]=M("h1",{class:"title"},"观心",-1)),M("div",wb,[x[91]||(x[91]=M("div",{class:"compass-center"},[M("h2",null,"属性罗盘"),M("p",null,"基于你的选择和经历生成")],-1)),M("div",Rb,[M("div",Cb,[x[81]||(x[81]=M("div",{class:"direction-icon career"},null,-1)),x[82]||(x[82]=M("h3",null,"职业发展",-1)),M("div",{class:jt(["attribute-level",ae(l.value.career)])},ke(W(l.value.career)),3),M("div",Pb,[M("div",{class:"attribute-fill",style:Ut({width:l.value.career+"%"})},null,4)]),M("p",Db,ke(S("career",l.value.career)),1)]),M("div",Lb,[x[83]||(x[83]=M("div",{class:"direction-icon finance"},null,-1)),x[84]||(x[84]=M("h3",null,"财务状况",-1)),M("div",{class:jt(["attribute-level",ae(l.value.finance)])},ke(W(l.value.finance)),3),M("div",Ub,[M("div",{class:"attribute-fill",style:Ut({width:l.value.finance+"%"})},null,4)]),M("p",Ib,ke(S("finance",l.value.finance)),1)]),M("div",Nb,[x[85]||(x[85]=M("div",{class:"direction-icon relationship"},null,-1)),x[86]||(x[86]=M("h3",null,"人际关系",-1)),M("div",{class:jt(["attribute-level",ae(l.value.relationship)])},ke(W(l.value.relationship)),3),M("div",Fb,[M("div",{class:"attribute-fill",style:Ut({width:l.value.relationship+"%"})},null,4)]),M("p",Ob,ke(S("relationship",l.value.relationship)),1)]),M("div",Bb,[x[87]||(x[87]=M("div",{class:"direction-icon health"},null,-1)),x[88]||(x[88]=M("h3",null,"健康状态",-1)),M("div",{class:jt(["attribute-level",ae(l.value.health)])},ke(W(l.value.health)),3),M("div",zb,[M("div",{class:"attribute-fill",style:Ut({width:l.value.health+"%"})},null,4)]),M("p",Hb,ke(S("health",l.value.health)),1)]),M("div",Vb,[x[89]||(x[89]=M("div",{class:"direction-icon growth"},null,-1)),x[90]||(x[90]=M("h3",null,"个人成长",-1)),M("div",{class:jt(["attribute-level",ae(l.value.growth)])},ke(W(l.value.growth)),3),M("div",kb,[M("div",{class:"attribute-fill",style:Ut({width:l.value.growth+"%"})},null,4)]),M("p",Gb,ke(S("growth",l.value.growth)),1)])])]),M("div",Wb,[x[95]||(x[95]=M("h3",null,"属性趋势",-1)),M("div",{class:"visualization-options"},[M("button",{class:"btn btn-secondary small",onClick:_},"雷达图"),M("button",{class:"btn btn-secondary small",onClick:P},"趋势曲线"),M("button",{class:"btn btn-secondary small",onClick:k},"影响溯源")]),M("div",Xb,[E.value==="radar"?(tt(),rt("div",qb,[...x[92]||(x[92]=[M("p",null,"雷达图可视化",-1)])])):E.value==="trend"?(tt(),rt("div",$b,[...x[93]||(x[93]=[M("p",null,"趋势曲线可视化",-1)])])):E.value==="impact"?(tt(),rt("div",Yb,[...x[94]||(x[94]=[M("p",null,"影响溯源可视化",-1)])])):Ci("",!0)])]),M("div",{class:"social-sidebar glass-container"},[x[96]||(x[96]=Ls('<h3 data-v-c4832059>天下志</h3><div class="social-item" data-v-c4832059><span class="source" data-v-c4832059>国家统计局</span><p data-v-c4832059>2026年第一季度GDP增长4.5%</p><span class="update-time" data-v-c4832059>2026-04-27</span></div><div class="social-item" data-v-c4832059><span class="source" data-v-c4832059>教育部</span><p data-v-c4832059>2026年研究生招生计划公布</p><span class="update-time" data-v-c4832059>2026-04-25</span></div><div class="social-item" data-v-c4832059><span class="source" data-v-c4832059>人社部</span><p data-v-c4832059>2026年平均工资水平上涨5.2%</p><span class="update-time" data-v-c4832059>2026-04-20</span></div><div class="social-item" data-v-c4832059><span class="source" data-v-c4832059>住建部</span><p data-v-c4832059>2026年全国房价走势分析</p><span class="update-time" data-v-c4832059>2026-04-18</span></div>',5)),M("button",{class:"btn btn-secondary small",onClick:X},"刷新数据")]),M("div",{class:"reflection-controls"},[M("button",{class:"btn btn-secondary",onClick:T},"返回"),M("button",{class:"btn btn-primary",onClick:ie},"AI顾问")])])])):e.value==="mentorship"?(tt(),rt("div",jb,[M("div",Kb,[x[102]||(x[102]=M("h1",{class:"title"},"论道",-1)),M("div",Zb,[x[98]||(x[98]=M("div",{class:"avatar-placeholder"},[M("div",{class:"avatar-glow"})],-1)),M("h3",null,ke(I.value),1),M("p",null,ke(N.value),1)]),M("div",Jb,[x[100]||(x[100]=M("div",{class:"chat-message ai-message"},[M("div",{class:"message-content"},[M("p",null,"你好！我是你的专属AI顾问，有什么可以帮助你的吗？")])],-1)),(tt(!0),rt(Nt,null,wi(c.value,(Q,$e)=>(tt(),rt("div",{class:"chat-message user-message",key:$e},[M("div",Qb,[M("p",null,ke(Q),1)])]))),128)),D.value?(tt(),rt("div",eT,[...x[99]||(x[99]=[M("div",{class:"message-content"},[M("div",{class:"loading"}),M("p",null,"正在思考...")],-1)])])):Ci("",!0)]),M("div",tT,[bt(M("input",{type:"text","onUpdate:modelValue":x[25]||(x[25]=Q=>u.value=Q),class:"input",placeholder:"输入你的问题..."},null,512),[[gn,u.value]]),M("button",{class:"btn btn-primary",onClick:be,disabled:D.value},"发送",8,nT),M("button",{class:"btn btn-secondary",onClick:q},"语音输入")]),M("div",iT,[x[101]||(x[101]=M("h3",null,"选择AI角色",-1)),M("div",rT,[M("button",{class:"btn btn-secondary small",onClick:x[26]||(x[26]=Q=>pe("职场导师"))},"职场导师"),M("button",{class:"btn btn-secondary small",onClick:x[27]||(x[27]=Q=>pe("情感顾问"))},"情感顾问"),M("button",{class:"btn btn-secondary small",onClick:x[28]||(x[28]=Q=>pe("创业前辈"))},"创业前辈"),M("button",{class:"btn btn-secondary small",onClick:x[29]||(x[29]=Q=>pe("人生规划师"))},"人生规划师")])]),M("div",{class:"mentorship-controls"},[M("button",{class:"btn btn-secondary",onClick:F},"返回"),M("button",{class:"btn btn-primary",onClick:Y},"终局报告")])])])):e.value==="conclusion"?(tt(),rt("div",sT,[M("div",oT,[x[116]||(x[116]=M("h1",{class:"title"},"归途",-1)),M("div",aT,[x[103]||(x[103]=M("h2",null,"后悔值评级",-1)),M("div",lT,[M("div",{class:"regret-fill",style:Ut({width:f.value+"%"})},null,4)]),M("p",cT,ke(h.value),1),M("p",uT,ke(m.value),1)]),M("div",fT,[x[110]||(x[110]=M("h3",null,"终局报告",-1)),M("div",dT,[M("div",hT,[x[104]||(x[104]=M("span",null,"职业发展",-1)),M("div",pT,[M("div",{class:"attribute-fill",style:Ut({width:l.value.career+"%"})},null,4)]),M("span",mT,ke(W(l.value.career)),1)]),M("div",gT,[x[105]||(x[105]=M("span",null,"财务状况",-1)),M("div",_T,[M("div",{class:"attribute-fill",style:Ut({width:l.value.finance+"%"})},null,4)]),M("span",vT,ke(W(l.value.finance)),1)]),M("div",xT,[x[106]||(x[106]=M("span",null,"人际关系",-1)),M("div",ST,[M("div",{class:"attribute-fill",style:Ut({width:l.value.relationship+"%"})},null,4)]),M("span",MT,ke(W(l.value.relationship)),1)]),M("div",ET,[x[107]||(x[107]=M("span",null,"健康状态",-1)),M("div",yT,[M("div",{class:"attribute-fill",style:Ut({width:l.value.health+"%"})},null,4)]),M("span",bT,ke(W(l.value.health)),1)]),M("div",TT,[x[108]||(x[108]=M("span",null,"个人成长",-1)),M("div",AT,[M("div",{class:"attribute-fill",style:Ut({width:l.value.growth+"%"})},null,4)]),M("span",wT,ke(W(l.value.growth)),1)])]),M("div",RT,[x[109]||(x[109]=M("h4",null,"AI定制人生建议",-1)),M("p",null,ke(g.value),1)]),x[111]||(x[111]=M("div",{class:"future-letter"},[M("h4",null,"来自未来时空的信件"),M("p",null,"亲爱的自己："),M("p",null,"当你看到这封信时，你已经走过了一段不平凡的人生旅程。无论你现在处于何种状态，请记住，每一个选择都塑造了今天的你。不要后悔过去的决定，因为它们都是你成长的一部分。"),M("p",null,"未来的路还很长，保持初心，勇敢前行。"),M("p",null,"未来的你")],-1))]),M("div",CT,[x[112]||(x[112]=M("h3",null,"名人模拟",-1)),x[113]||(x[113]=M("p",null,"代入名人关键人生节点，生成平行人生并与真实轨迹对比",-1)),M("div",PT,[M("button",{class:"btn btn-secondary small",onClick:x[30]||(x[30]=Q=>Se("马云"))},"马云"),M("button",{class:"btn btn-secondary small",onClick:x[31]||(x[31]=Q=>Se("任正非"))},"任正非"),M("button",{class:"btn btn-secondary small",onClick:x[32]||(x[32]=Q=>Se("比尔·盖茨"))},"比尔·盖茨"),M("button",{class:"btn btn-secondary small",onClick:x[33]||(x[33]=Q=>Se("乔布斯"))},"乔布斯")])]),M("div",DT,[x[115]||(x[115]=M("h3",null,"人生存档",-1)),M("div",{class:"save-actions"},[M("button",{class:"btn btn-primary",onClick:fe},"保存当前轨迹"),M("button",{class:"btn btn-secondary",onClick:me},"加载存档"),M("button",{class:"btn btn-secondary",onClick:de},"导出报告")]),M("div",LT,[x[114]||(x[114]=M("h4",null,"已保存的轨迹",-1)),(tt(!0),rt(Nt,null,wi(z.value,(Q,$e)=>(tt(),rt("div",{class:"saved-path-item",key:$e},[M("span",null,ke(Q.name),1),M("span",null,ke(Q.date),1),M("button",{class:"btn btn-secondary small",onClick:Ze=>Ie($e)},"加载",8,UT)]))),128))])]),M("div",{class:"conclusion-controls"},[M("button",{class:"btn btn-secondary",onClick:ie},"返回"),M("button",{class:"btn btn-primary",onClick:se},"重新开始")])])])):Ci("",!0)])])}}},NT=XE(IT,[["__scopeId","data-v-c4832059"]]);Zm(NT).mount("#app");
