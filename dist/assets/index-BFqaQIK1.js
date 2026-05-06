(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},Ds=[],Yn=()=>{},Jd=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ea=n=>n.startsWith("onUpdate:"),qt=Object.assign,bc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sp=Object.prototype.hasOwnProperty,pt=(n,e)=>sp.call(n,e),qe=Array.isArray,Ls=n=>Rr(n)==="[object Map]",ta=n=>Rr(n)==="[object Set]",nu=n=>Rr(n)==="[object Date]",tt=n=>typeof n=="function",Et=n=>typeof n=="string",Kn=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Qd=n=>(gt(n)||tt(n))&&tt(n.then)&&tt(n.catch),ef=Object.prototype.toString,Rr=n=>ef.call(n),rp=n=>Rr(n).slice(8,-1),tf=n=>Rr(n)==="[object Object]",Ec=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pr=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},op=/-\w/g,Qt=na(n=>n.replace(op,e=>e.slice(1).toUpperCase())),ap=/\B([A-Z])/g,Fi=na(n=>n.replace(ap,"-$1").toLowerCase()),ia=na(n=>n.charAt(0).toUpperCase()+n.slice(1)),Aa=na(n=>n?`on${ia(n)}`:""),Xn=(n,e)=>!Object.is(n,e),To=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},sa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let iu;const ra=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ut(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Et(i)?dp(i):Ut(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Et(n)||gt(n))return n}const lp=/;(?![^(]*\))/g,cp=/:([^]+)/,up=/\/\*[^]*?\*\//g;function dp(n){const e={};return n.replace(up,"").split(lp).forEach(t=>{if(t){const i=t.split(cp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ye(n){let e="";if(Et(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Ye(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hp=Mc(fp);function sf(n){return!!n||n===""}function pp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Cr(n[i],e[i]);return t}function Cr(n,e){if(n===e)return!0;let t=nu(n),i=nu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Kn(n),i=Kn(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?pp(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Cr(n[o],e[o]))return!1}}return String(n)===String(e)}function mp(n,e){return n.findIndex(t=>Cr(t,e))}const rf=n=>!!(n&&n.__v_isRef===!0),oe=n=>Et(n)?n:n==null?"":qe(n)||gt(n)&&(n.toString===ef||!tt(n.toString))?rf(n)?oe(n.value):JSON.stringify(n,of,2):String(n),of=(n,e)=>rf(e)?of(n,e.value):Ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[wa(i,r)+" =>"]=s,t),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>wa(t))}:Kn(e)?wa(e):gt(e)&&!qe(e)&&!tf(e)?String(e):e,wa=(n,e="")=>{var t;return Kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class gp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Gt;try{return Gt=this,e()}finally{Gt=t}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){if(this._on>0&&--this._on===0){if(Gt===this)Gt=this.prevScope;else{let e=Gt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function _p(){return Gt}let yt;const Ra=new WeakSet;class af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),uf(this);const e=yt,t=Nn;yt=this,Nn=!0;try{return this.fn()}finally{df(this),yt=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wc(e);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let lf=0,mr,gr;function cf(n,e=!1){if(n.flags|=8,e){n.next=gr,gr=n;return}n.next=mr,mr=n}function Tc(){lf++}function Ac(){if(--lf>0)return;if(gr){let e=gr;for(gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;mr;){let e=mr;for(mr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function df(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),wc(i),vp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function gl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mr)||(n.globalVersion=Mr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!gl(n))))return;n.flags|=2;const e=n.dep,t=yt,i=Nn;yt=n,Nn=!0;try{uf(n);const s=n.fn(n._value);(e.version===0||Xn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{yt=t,Nn=i,df(n),n.flags&=-3}}function wc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)wc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function vp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const hf=[];function mi(){hf.push(Nn),Nn=!1}function gi(){const n=hf.pop();Nn=n===void 0?!0:n}function su(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=yt;yt=void 0;try{e()}finally{yt=t}}}let Mr=0;class xp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!yt||!Nn||yt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==yt)t=this.activeLink=new xp(yt,this),yt.deps?(t.prevDep=yt.depsTail,yt.depsTail.nextDep=t,yt.depsTail=t):yt.deps=yt.depsTail=t,pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=yt.depsTail,t.nextDep=void 0,yt.depsTail.nextDep=t,yt.depsTail=t,yt.deps===t&&(yt.deps=i)}return t}trigger(e){this.version++,Mr++,this.notify(e)}notify(e){Tc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ac()}}}function pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _l=new WeakMap,ns=Symbol(""),vl=Symbol(""),br=Symbol("");function Wt(n,e,t){if(Nn&&yt){let i=_l.get(n);i||_l.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Rc),s.map=i,s.key=t),s.track()}}function ci(n,e,t,i,s,r){const o=_l.get(n);if(!o){Mr++;return}const a=l=>{l&&l.trigger()};if(Tc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&Ec(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,p)=>{(p==="length"||p===br||!Kn(p)&&p>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ns)),Ls(n)&&a(o.get(vl)));break;case"delete":l||(a(o.get(ns)),Ls(n)&&a(o.get(vl)));break;case"set":Ls(n)&&a(o.get(ns));break}}Ac()}function fs(n){const e=ht(n);return e===n?e:(Wt(e,"iterate",br),An(n)?e:e.map(On))}function oa(n){return Wt(n=ht(n),"iterate",br),n}function Gn(n,e){return _i(n)?zs(is(n)?On(e):e):On(e)}const yp={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return fs(this).concat(...n.map(e=>qe(e)?fs(e):e))},entries(){return Ca(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,e){return Qn(this,"every",n,e,void 0,arguments)},filter(n,e){return Qn(this,"filter",n,e,t=>t.map(i=>Gn(this,i)),arguments)},find(n,e){return Qn(this,"find",n,e,t=>Gn(this,t),arguments)},findIndex(n,e){return Qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qn(this,"findLast",n,e,t=>Gn(this,t),arguments)},findLastIndex(n,e){return Qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Pa(this,"includes",n)},indexOf(...n){return Pa(this,"indexOf",n)},join(n){return fs(this).join(n)},lastIndexOf(...n){return Pa(this,"lastIndexOf",n)},map(n,e){return Qn(this,"map",n,e,void 0,arguments)},pop(){return tr(this,"pop")},push(...n){return tr(this,"push",n)},reduce(n,...e){return ru(this,"reduce",n,e)},reduceRight(n,...e){return ru(this,"reduceRight",n,e)},shift(){return tr(this,"shift")},some(n,e){return Qn(this,"some",n,e,void 0,arguments)},splice(...n){return tr(this,"splice",n)},toReversed(){return fs(this).toReversed()},toSorted(n){return fs(this).toSorted(n)},toSpliced(...n){return fs(this).toSpliced(...n)},unshift(...n){return tr(this,"unshift",n)},values(){return Ca(this,"values",n=>Gn(this,n))}};function Ca(n,e,t){const i=oa(n),s=i[e]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Sp=Array.prototype;function Qn(n,e,t,i,s,r){const o=oa(n),a=o!==n&&!An(n),l=o[e];if(l!==Sp[e]){const d=l.apply(n,r);return a?On(d):d}let c=t;o!==n&&(a?c=function(d,p){return t.call(this,Gn(n,d),p,n)}:t.length>2&&(c=function(d,p){return t.call(this,d,p,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function ru(n,e,t,i){const s=oa(n),r=s!==n&&!An(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Gn(n,c)),t.call(this,c,Gn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?Gn(n,l):l}function Pa(n,e,t){const i=ht(n);Wt(i,"iterate",br);const s=i[e](...t);return(s===-1||s===!1)&&Dc(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function tr(n,e,t=[]){mi(),Tc();const i=ht(n)[e].apply(n,t);return Ac(),gi(),i}const Mp=Mc("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kn));function bp(n){Kn(n)||(n=String(n));const e=ht(this);return Wt(e,"has",n),e.hasOwnProperty(n)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Ip:yf:r?xf:vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=yp[t]))return l;if(t==="hasOwnProperty")return bp}const a=Reflect.get(e,t,zt(e)?e:i);if((Kn(t)?mf.has(t):Mp(t))||(s||Wt(e,"get",t),r))return a;if(zt(a)){const l=o&&Ec(t)?a:a.value;return s&&gt(l)?yl(l):l}return gt(a)?s?yl(a):ks(a):a}}class _f extends gf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=qe(e)&&Ec(t);if(!this._isShallow){const c=_i(r);if(!An(i)&&!_i(i)&&(r=ht(r),i=ht(i)),!o&&zt(r)&&!zt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,zt(e)?e:s);return e===ht(s)&&(a?Xn(i,r)&&ci(e,"set",t,i):ci(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Kn(t)||!mf.has(t))&&Wt(e,"has",t),i}ownKeys(e){return Wt(e,"iterate",qe(e)?"length":ns),Reflect.ownKeys(e)}}class Ep extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Tp=new _f,Ap=new Ep,wp=new _f(!0);const xl=n=>n,jr=n=>Reflect.getPrototypeOf(n);function Rp(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),o=Ls(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?xl:e?zs:On;return!e&&Wt(r,"iterate",l?vl:ns),qt(Object.create(c),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}}})}}function Kr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Cp(n,e){const t={get(s){const r=this.__v_raw,o=ht(r),a=ht(s);n||(Xn(s,a)&&Wt(o,"get",s),Wt(o,"get",a));const{has:l}=jr(o),c=e?xl:n?zs:On;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Wt(ht(s),"iterate",ns),s.size},has(s){const r=this.__v_raw,o=ht(r),a=ht(s);return n||(Xn(s,a)&&Wt(o,"has",s),Wt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ht(a),c=e?xl:n?zs:On;return!n&&Wt(l,"iterate",ns),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return qt(t,n?{add:Kr("add"),set:Kr("set"),delete:Kr("delete"),clear:Kr("clear")}:{add(s){const r=ht(this),o=jr(r),a=ht(s),l=!e&&!An(s)&&!_i(s)?a:s;return o.has.call(r,l)||Xn(s,l)&&o.has.call(r,s)||Xn(a,l)&&o.has.call(r,a)||(r.add(l),ci(r,"add",l,l)),this},set(s,r){!e&&!An(r)&&!_i(r)&&(r=ht(r));const o=ht(this),{has:a,get:l}=jr(o);let c=a.call(o,s);c||(s=ht(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Xn(r,u)&&ci(o,"set",s,r):ci(o,"add",s,r),this},delete(s){const r=ht(this),{has:o,get:a}=jr(r);let l=o.call(r,s);l||(s=ht(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,o=s.clear();return r&&ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Rp(s,n,e)}),t}function Cc(n,e){const t=Cp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const Pp={get:Cc(!1,!1)},Dp={get:Cc(!1,!0)},Lp={get:Cc(!0,!1)};const vf=new WeakMap,xf=new WeakMap,yf=new WeakMap,Ip=new WeakMap;function Up(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Np(n){return n.__v_skip||!Object.isExtensible(n)?0:Up(rp(n))}function ks(n){return _i(n)?n:Pc(n,!1,Tp,Pp,vf)}function Fp(n){return Pc(n,!1,wp,Dp,xf)}function yl(n){return Pc(n,!0,Ap,Lp,yf)}function Pc(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Np(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function is(n){return _i(n)?is(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function Dc(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function Op(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&nf(n,"__v_skip",!0),n}const On=n=>gt(n)?ks(n):n,zs=n=>gt(n)?yl(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function $e(n){return Bp(n,!1)}function Bp(n,e){return zt(n)?n:new kp(n,e)}class kp{constructor(e,t){this.dep=new Rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:On(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||_i(e);e=i?e:ht(e),Xn(e,t)&&(this._rawValue=e,this._value=i?e:On(e),this.dep.trigger())}}function Sf(n){return zt(n)?n.value:n}const zp={get:(n,e,t)=>e==="__v_raw"?n:Sf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return zt(s)&&!zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return is(n)?n:new Proxy(n,zp)}class Hp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return cf(this,!0),!0}get value(){const e=this.dep.track();return ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vp(n,e,t=!1){let i,s;return tt(n)?i=n:(i=n.get,s=n.set),new Hp(i,s,t)}const Zr={},Bo=new WeakMap;let Xi;function Gp(n,e=!1,t=Xi){if(t){let i=Bo.get(t);i||Bo.set(t,i=[]),i.push(n)}}function Wp(n,e,t=xt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:An(M)||s===!1||s===0?ui(M,1):ui(M);let u,d,p,_,v=!1,g=!1;if(zt(n)?(d=()=>n.value,v=An(n)):is(n)?(d=()=>c(n),v=!0):qe(n)?(g=!0,v=n.some(M=>is(M)||An(M)),d=()=>n.map(M=>{if(zt(M))return M.value;if(is(M))return c(M);if(tt(M))return l?l(M,2):M()})):tt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(p){mi();try{p()}finally{gi()}}const M=Xi;Xi=u;try{return l?l(n,3,[_]):n(_)}finally{Xi=M}}:d=Yn,e&&s){const M=d,L=s===!0?1/0:s;d=()=>ui(M(),L)}const m=_p(),h=()=>{u.stop(),m&&m.active&&bc(m.effects,u)};if(r&&e){const M=e;e=(...L)=>{M(...L),h()}}let b=g?new Array(n.length).fill(Zr):Zr;const R=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const L=u.run();if(s||v||(g?L.some((I,C)=>Xn(I,b[C])):Xn(L,b))){p&&p();const I=Xi;Xi=u;try{const C=[L,b===Zr?void 0:g&&b[0]===Zr?[]:b,_];b=L,l?l(e,3,C):e(...C)}finally{Xi=I}}}else u.run()};return a&&a(R),u=new af(d),u.scheduler=o?()=>o(R,!1):R,_=M=>Gp(M,!1,u),p=u.onStop=()=>{const M=Bo.get(u);if(M){if(l)l(M,4);else for(const L of M)L();Bo.delete(u)}},e?i?R(!0):b=u.run():o?o(R.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ui(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))ui(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(ta(n)||Ls(n))n.forEach(i=>{ui(i,e,t)});else if(tf(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pr(n,e,t,i){try{return i?n(...i):n()}catch(s){aa(s,e,t)}}function Zn(n,e,t,i){if(tt(n)){const s=Pr(n,e,t,i);return s&&Qd(s)&&s.catch(r=>{aa(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Zn(n[r],e,t,i));return s}}function aa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){mi(),Pr(r,null,10,[n,l,c]),gi();return}}$p(n,t,s,i,o)}function $p(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Jt=[];let Vn=-1;const Is=[];let Ri=null,Rs=0;const bf=Promise.resolve();let ko=null;function Lc(n){const e=ko||bf;return n?e.then(this?n.bind(this):n):e}function Xp(n){let e=Vn+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=Er(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ic(n){if(!(n.flags&1)){const e=Er(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=Er(t)?Jt.push(n):Jt.splice(Xp(e),0,n),n.flags|=1,Ef()}}function Ef(){ko||(ko=bf.then(Af))}function qp(n){qe(n)?Is.push(...n):Ri&&n.id===-1?Ri.splice(Rs+1,0,n):n.flags&1||(Is.push(n),n.flags|=1),Ef()}function ou(n,e,t=Vn+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Tf(n){if(Is.length){const e=[...new Set(Is)].sort((t,i)=>Er(t)-Er(i));if(Is.length=0,Ri){Ri.push(...e);return}for(Ri=e,Rs=0;Rs<Ri.length;Rs++){const t=Ri[Rs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ri=null,Rs=0}}const Er=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Af(n){try{for(Vn=0;Vn<Jt.length;Vn++){const e=Jt[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Pr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<Jt.length;Vn++){const e=Jt[Vn];e&&(e.flags&=-2)}Vn=-1,Jt.length=0,Tf(),ko=null,(Jt.length||Is.length)&&Af()}}let mn=null,wf=null;function zo(n){const e=mn;return mn=n,wf=n&&n.type.__scopeId||null,e}function Yp(n,e=mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Go(-1);const r=zo(e);let o;try{o=n(...s)}finally{zo(r),i._d&&Go(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function At(n,e){if(mn===null)return n;const t=da(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=xt]=e[s];r&&(tt(r)&&(r={mounted:r,updated:r}),r.deep&&ui(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Bi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(mi(),Zn(l,t,8,[n.el,a,n,e]),gi())}}function jp(n,e){if($t){let t=$t.provides;const i=$t.parent&&$t.parent.provides;i===t&&(t=$t.provides=Object.create(i)),t[n]=e}}function Ao(n,e,t=!1){const i=Jm();if(i||Us){let s=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}const Kp=Symbol.for("v-scx"),Zp=()=>Ao(Kp);function jn(n,e,t){return Rf(n,e,t)}function Rf(n,e,t=xt){const{immediate:i,deep:s,flush:r,once:o}=t,a=qt({},t),l=e&&i||!e&&r!=="post";let c;if(Ar){if(r==="sync"){const _=Zp();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Yn,_.resume=Yn,_.pause=Yn,_}}const u=$t;a.call=(_,v,g)=>Zn(_,u,v,g);let d=!1;r==="post"?a.scheduler=_=>{Zt(_,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,v)=>{v?_():Ic(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const p=Wp(n,e,a);return Ar&&(c?c.push(p):l&&p()),p}function Jp(n,e,t){const i=this.proxy,s=Et(n)?n.includes(".")?Cf(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const o=Dr(this),a=Rf(s,r.bind(i),t);return o(),a}function Cf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const wi=new WeakMap,Pf=Symbol("_vte"),Qp=n=>n.__isTeleport,ji=n=>n&&(n.disabled||n.disabled===""),em=n=>n&&(n.defer||n.defer===""),au=n=>typeof SVGElement<"u"&&n instanceof SVGElement,lu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Sl=(n,e)=>{const t=n&&n.to;return Et(t)?e?e(t):null:t},tm={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:p,o:{insert:_,querySelector:v,createText:g,createComment:m,parentNode:h}}=c,b=ji(e.props);let{dynamicChildren:R}=e;const M=(C,w,A)=>{C.shapeFlag&16&&u(C.children,w,A,s,r,o,a,l)},L=(C=e)=>{const w=ji(C.props),A=C.target=Sl(C.props,v),E=Ml(A,C,g,_);A&&(o!=="svg"&&au(A)?o="svg":o!=="mathml"&&lu(A)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(A),w||(M(C,A,E),cr(C,!1)))},I=C=>{const w=()=>{if(wi.get(C)===w){if(wi.delete(C),ji(C.props)){const A=h(C.el)||t;M(C,A,C.anchor),cr(C,!0)}L(C)}};wi.set(C,w),Zt(w,r)};if(n==null){const C=e.el=g(""),w=e.anchor=g("");if(_(C,t,i),_(w,t,i),em(e.props)||r&&r.pendingBranch){I(e);return}b&&(M(e,t,w),cr(e,!0)),L()}else{e.el=n.el;const C=e.anchor=n.anchor,w=wi.get(n);if(w){w.flags|=8,wi.delete(n),I(e);return}e.targetStart=n.targetStart;const A=e.target=n.target,E=e.targetAnchor=n.targetAnchor,D=ji(n.props),X=D?t:A,k=D?C:E;if(o==="svg"||au(A)?o="svg":(o==="mathml"||lu(A))&&(o="mathml"),R?(p(n.dynamicChildren,R,X,s,r,o,a),kc(n,e,!0)):l||d(n,e,X,k,s,r,o,a,!1),b)D?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Jr(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const V=e.target=Sl(e.props,v);V&&Jr(e,V,null,c,0)}else D&&Jr(e,A,E,c,1);cr(e,b)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:p}=n;let _=r||!ji(p);const v=wi.get(n);if(v&&(v.flags|=8,wi.delete(n),_=!1),d&&(s(c),s(u)),r&&s(l),o&16)for(let g=0;g<a.length;g++){const m=a[g];i(m,e,t,_,!!m.dynamicChildren)}},move:Jr,hydrate:nm};function Jr(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,d=r===2;if(d&&i(o,e,t),!wi.has(n)&&(!d||ji(u))&&l&16)for(let p=0;p<c.length;p++)s(c[p],e,t,2);d&&i(a,e,t)}function nm(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function p(m,h){let b=h;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}}function _(m,h){h.anchor=d(o(m),h,a(m),t,i,s,r)}const v=e.target=Sl(e.props,l),g=ji(e.props);if(v){const m=v._lpa||v.firstChild;e.shapeFlag&16&&(g?(_(n,e),p(v,m),e.targetAnchor||Ml(v,e,u,c,a(n)===v?n:null)):(e.anchor=o(n),p(v,m),e.targetAnchor||Ml(v,e,u,c),d(m&&o(m),e,v,t,i,s,r))),cr(e,g)}else g&&e.shapeFlag&16&&(_(n,e),e.targetStart=n,e.targetAnchor=o(n));return e.anchor&&o(e.anchor)}const im=tm;function cr(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Ml(n,e,t,i,s=null){const r=e.targetStart=t(""),o=e.targetAnchor=t("");return r[Pf]=o,n&&(i(r,n,s),i(o,n,s)),o}const sm=Symbol("_leaveCb");function Uc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Uc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Df(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function cu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ho=new WeakMap;function _r(n,e,t,i,s=!1){if(qe(n)){n.forEach((g,m)=>_r(g,e&&(qe(e)?e[m]:e),t,i,s));return}if(vr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_r(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,d=a.setupState,p=ht(d),_=d===xt?Jd:g=>cu(u,g)?!1:pt(p,g),v=(g,m)=>!(m&&cu(u,m));if(c!=null&&c!==l){if(uu(e),Et(c))u[c]=null,_(c)&&(d[c]=null);else if(zt(c)){const g=e;v(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(tt(l))Pr(l,a,12,[o,u]);else{const g=Et(l),m=zt(l);if(g||m){const h=()=>{if(n.f){const b=g?_(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)qe(b)&&bc(b,r);else if(qe(b))b.includes(r)||b.push(r);else if(g)u[l]=[r],_(l)&&(d[l]=u[l]);else{const R=[r];v(l,n.k)&&(l.value=R),n.k&&(u[n.k]=R)}}else g?(u[l]=o,_(l)&&(d[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{h(),Ho.delete(n)};b.id=-1,Ho.set(n,b),Zt(b,t)}else uu(n),h()}}}function uu(n){const e=Ho.get(n);e&&(e.flags|=8,Ho.delete(n))}ra().requestIdleCallback;ra().cancelIdleCallback;const vr=n=>!!n.type.__asyncLoader,Lf=n=>n.type.__isKeepAlive;function rm(n,e){If(n,"a",e)}function om(n,e){If(n,"da",e)}function If(n,e,t=$t){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(la(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Lf(s.parent.vnode)&&am(i,e,t,s),s=s.parent}}function am(n,e,t,i){const s=la(e,n,i,!0);Fc(()=>{bc(i[e],s)},t)}function la(n,e,t=$t,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{mi();const a=Dr(t),l=Zn(e,t,n,o);return a(),gi(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(e,t=$t)=>{(!Ar||n==="sp")&&la(n,(...i)=>e(...i),t)},lm=yi("bm"),Nc=yi("m"),cm=yi("bu"),um=yi("u"),dm=yi("bum"),Fc=yi("um"),fm=yi("sp"),hm=yi("rtg"),pm=yi("rtc");function mm(n,e=$t){la("ec",n,e)}const gm="components",Uf=Symbol.for("v-ndc");function _m(n){return Et(n)?vm(gm,n,!1)||n:n||Uf}function vm(n,e,t=!0,i=!1){const s=mn||$t;if(s){const r=s.type;{const a=ig(r,!1);if(a&&(a===e||a===Qt(e)||a===ia(Qt(e))))return r}const o=du(s[n]||r[n],e)||du(s.appContext[n],e);return!o&&i?r:o}}function du(n,e){return n&&(n[e]||n[Qt(e)]||n[ia(Qt(e))])}function ot(n,e,t,i){let s;const r=t,o=qe(n);if(o||Et(n)){const a=o&&is(n);let l=!1,c=!1;a&&(l=!An(n),c=_i(n),n=oa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?zs(On(n[u])):On(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const bl=n=>n?Qf(n)?da(n):bl(n.parent):null,xr=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bl(n.parent),$root:n=>bl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ff(n),$forceUpdate:n=>n.f||(n.f=()=>{Ic(n.update)}),$nextTick:n=>n.n||(n.n=Lc.bind(n.proxy)),$watch:n=>Jp.bind(n)}),Da=(n,e)=>n!==xt&&!n.__isScriptSetup&&pt(n,e),xm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Da(i,e))return o[e]=1,i[e];if(s!==xt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==xt&&pt(t,e))return o[e]=4,t[e];El&&(o[e]=0)}}const c=xr[e];let u,d;if(c)return e==="$attrs"&&Wt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==xt&&pt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Da(s,e)?(s[e]=t,!0):i!==xt&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==xt&&a[0]!=="$"&&pt(n,a)||Da(e,a)||pt(r,a)||pt(i,a)||pt(xr,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function fu(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let El=!0;function ym(n){const e=Ff(n),t=n.proxy,i=n.ctx;El=!1,e.beforeCreate&&hu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:_,updated:v,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:b,destroyed:R,unmounted:M,render:L,renderTracked:I,renderTriggered:C,errorCaptured:w,serverPrefetch:A,expose:E,inheritAttrs:D,components:X,directives:k,filters:V}=e;if(c&&Sm(c,i,null),o)for(const te in o){const z=o[te];tt(z)&&(i[te]=z.bind(t))}if(s){const te=s.call(t,t);gt(te)&&(n.data=ks(te))}if(El=!0,r)for(const te in r){const z=r[te],_e=tt(z)?z.bind(t,t):tt(z.get)?z.get.bind(t,t):Yn,Me=!tt(z)&&tt(z.set)?z.set.bind(t):Yn,ve=Rt({get:_e,set:Me});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>ve.value,set:we=>ve.value=we})}if(a)for(const te in a)Nf(a[te],i,t,te);if(l){const te=tt(l)?l.call(t):l;Reflect.ownKeys(te).forEach(z=>{jp(z,te[z])})}u&&hu(u,n,"c");function G(te,z){qe(z)?z.forEach(_e=>te(_e.bind(t))):z&&te(z.bind(t))}if(G(lm,d),G(Nc,p),G(cm,_),G(um,v),G(rm,g),G(om,m),G(mm,w),G(pm,I),G(hm,C),G(dm,b),G(Fc,M),G(fm,A),qe(E))if(E.length){const te=n.exposed||(n.exposed={});E.forEach(z=>{Object.defineProperty(te,z,{get:()=>t[z],set:_e=>t[z]=_e,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Yn&&(n.render=L),D!=null&&(n.inheritAttrs=D),X&&(n.components=X),k&&(n.directives=k),A&&Df(n)}function Sm(n,e,t=Yn){qe(n)&&(n=Tl(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=Ao(s.from||i,s.default,!0):r=Ao(s.from||i):r=Ao(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function hu(n,e,t){Zn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nf(n,e,t,i){let s=i.includes(".")?Cf(t,i):()=>t[i];if(Et(n)){const r=e[n];tt(r)&&jn(s,r)}else if(tt(n))jn(s,n.bind(t));else if(gt(n))if(qe(n))n.forEach(r=>Nf(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&jn(s,r,n)}}function Ff(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Vo(l,c,o,!0)),Vo(l,e,o)),gt(e)&&r.set(e,l),l}function Vo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Vo(n,r,t,!0),s&&s.forEach(o=>Vo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Mm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Mm={data:pu,props:mu,emits:mu,methods:ur,computed:ur,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:ur,directives:ur,watch:Em,provide:pu,inject:bm};function pu(n,e){return e?n?function(){return qt(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function bm(n,e){return ur(Tl(n),Tl(e))}function Tl(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function ur(n,e){return n?qt(Object.create(null),n,e):e}function mu(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:qt(Object.create(null),fu(n),fu(e??{})):e}function Em(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function Of(){return{app:null,config:{isNativeTag:Jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tm=0;function Am(n,e){return function(i,s=null){tt(i)||(i=qt({},i)),s!=null&&!gt(s)&&(s=null);const r=Of(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Tm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:rg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...d)):tt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,p){if(!l){const _=c._ceVNode||bt(i,s);return _.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),n(_,u,p),l=!0,c._container=u,u.__vue_app__=c,da(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Us;Us=c;try{return u()}finally{Us=d}}};return c}}let Us=null;const wm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Qt(e)}Modifiers`]||n[`${Fi(e)}Modifiers`];function Rm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let s=t;const r=e.startsWith("update:"),o=r&&wm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Et(u)?u.trim():u)),o.number&&(s=t.map(sa)));let a,l=i[a=Aa(e)]||i[a=Aa(Qt(e))];!l&&r&&(l=i[a=Aa(Fi(e))]),l&&Zn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Zn(c,n,6,s)}}const Cm=new WeakMap;function Bf(n,e,t=!1){const i=t?Cm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!tt(n)){const l=c=>{const u=Bf(c,e,!0);u&&(a=!0,qt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(gt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>o[l]=null):qt(o,r),gt(n)&&i.set(n,o),o)}function ca(n,e){return!n||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Fi(e))||pt(n,e))}function gu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:p,setupState:_,ctx:v,inheritAttrs:g}=n,m=zo(n);let h,b;try{if(t.shapeFlag&4){const M=s||i,L=M;h=Wn(c.call(L,M,u,d,_,p,v)),b=a}else{const M=e;h=Wn(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),b=e.props?a:Pm(a)}}catch(M){yr.length=0,aa(M,n,1),h=bt(Ii)}let R=h;if(b&&g!==!1){const M=Object.keys(b),{shapeFlag:L}=R;M.length&&L&7&&(r&&M.some(ea)&&(b=Dm(b,r)),R=Hs(R,b,!1,!0))}return t.dirs&&(R=Hs(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&Uc(R,t.transition),h=R,zo(m),h}const Pm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qo(t))&&((e||(e={}))[t]=n[t]);return e},Dm=(n,e)=>{const t={};for(const i in n)(!ea(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Lm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_u(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(kf(o,i,p)&&!ca(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?_u(i,o,c):!0:!!o;return!1}function _u(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(kf(e,n,r)&&!ca(t,r))return!0}return!1}function kf(n,e,t){const i=n[t],s=e[t];return t==="style"&&gt(i)&&gt(s)?!Cr(i,s):i!==s}function Im({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const zf={},Hf=()=>Object.create(zf),Vf=n=>Object.getPrototypeOf(n)===zf;function Um(n,e,t,i=!1){const s={},r=Hf();n.propsDefaults=Object.create(null),Gf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Fp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Nm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ht(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ca(n.emitsOptions,p))continue;const _=e[p];if(l)if(pt(r,p))_!==r[p]&&(r[p]=_,c=!0);else{const v=Qt(p);s[v]=Al(l,a,v,_,n,!1)}else _!==r[p]&&(r[p]=_,c=!0)}}}else{Gf(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!pt(e,d)&&((u=Fi(d))===d||!pt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=Al(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!pt(e,d))&&(delete r[d],c=!0)}c&&ci(n.attrs,"set","")}function Gf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;s&&pt(s,u=Qt(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(t),c=a||xt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Al(s,l,d,c[d],n,!pt(c,d))}}return o}function Al(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Dr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fi(t))&&(i=!0))}return i}const Fm=new WeakMap;function Wf(n,e,t=!1){const i=t?Fm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!tt(n)){const u=d=>{l=!0;const[p,_]=Wf(d,e,!0);qt(o,p),_&&a.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,Ds),Ds;if(qe(r))for(let u=0;u<r.length;u++){const d=Qt(r[u]);vu(d)&&(o[d]=xt)}else if(r)for(const u in r){const d=Qt(u);if(vu(d)){const p=r[u],_=o[d]=qe(p)||tt(p)?{type:p}:qt({},p),v=_.type;let g=!1,m=!0;if(qe(v))for(let h=0;h<v.length;++h){const b=v[h],R=tt(b)&&b.name;if(R==="Boolean"){g=!0;break}else R==="String"&&(m=!1)}else g=tt(v)&&v.name==="Boolean";_[0]=g,_[1]=m,(g||pt(_,"default"))&&a.push(d)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function vu(n){return n[0]!=="$"&&!pr(n)}const Oc=n=>n==="_"||n==="_ctx"||n==="$stable",Bc=n=>qe(n)?n.map(Wn):[Wn(n)],Om=(n,e,t)=>{if(e._n)return e;const i=Yp((...s)=>Bc(e(...s)),t);return i._c=!1,i},$f=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Oc(s))continue;const r=n[s];if(tt(r))e[s]=Om(s,r,i);else if(r!=null){const o=Bc(r);e[s]=()=>o}}},Xf=(n,e)=>{const t=Bc(e);n.slots.default=()=>t},qf=(n,e,t)=>{for(const i in e)(t||!Oc(i))&&(n[i]=e[i])},Bm=(n,e,t)=>{const i=n.slots=Hf();if(n.vnode.shapeFlag&32){const s=e._;s?(qf(i,e,t),t&&nf(i,"_",s,!0)):$f(e,i)}else e&&Xf(n,e)},km=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:qf(s,e,t):(r=!e.$stable,$f(e,s)),o=e}else e&&(Xf(n,e),o={default:1});if(r)for(const a in s)!Oc(a)&&o[a]==null&&delete s[a]},Zt=Wm;function zm(n){return Hm(n)}function Hm(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:_=Yn,insertStaticContent:v}=n,g=(P,N,T,ue=null,J=null,ee=null,se=void 0,fe=null,Q=!!N.dynamicChildren)=>{if(P===N)return;P&&!nr(P,N)&&(ue=ie(P),we(P,J,ee,!0),P=null),N.patchFlag===-2&&(Q=!1,N.dynamicChildren=null);const{type:S,ref:x,shapeFlag:U}=N;switch(S){case ua:m(P,N,T,ue);break;case Ii:h(P,N,T,ue);break;case wo:P==null&&b(N,T,ue,se);break;case et:X(P,N,T,ue,J,ee,se,fe,Q);break;default:U&1?L(P,N,T,ue,J,ee,se,fe,Q):U&6?k(P,N,T,ue,J,ee,se,fe,Q):(U&64||U&128)&&S.process(P,N,T,ue,J,ee,se,fe,Q,je)}x!=null&&J?_r(x,P&&P.ref,ee,N||P,!N):x==null&&P&&P.ref!=null&&_r(P.ref,null,ee,P,!0)},m=(P,N,T,ue)=>{if(P==null)i(N.el=a(N.children),T,ue);else{const J=N.el=P.el;N.children!==P.children&&c(J,N.children)}},h=(P,N,T,ue)=>{P==null?i(N.el=l(N.children||""),T,ue):N.el=P.el},b=(P,N,T,ue)=>{[P.el,P.anchor]=v(P.children,N,T,ue,P.el,P.anchor)},R=({el:P,anchor:N},T,ue)=>{let J;for(;P&&P!==N;)J=p(P),i(P,T,ue),P=J;i(N,T,ue)},M=({el:P,anchor:N})=>{let T;for(;P&&P!==N;)T=p(P),s(P),P=T;s(N)},L=(P,N,T,ue,J,ee,se,fe,Q)=>{if(N.type==="svg"?se="svg":N.type==="math"&&(se="mathml"),P==null)I(N,T,ue,J,ee,se,fe,Q);else{const S=P.el&&P.el._isVueCE?P.el:null;try{S&&S._beginPatch(),A(P,N,J,ee,se,fe,Q)}finally{S&&S._endPatch()}}},I=(P,N,T,ue,J,ee,se,fe)=>{let Q,S;const{props:x,shapeFlag:U,transition:$,dirs:Y}=P;if(Q=P.el=o(P.type,ee,x&&x.is,x),U&8?u(Q,P.children):U&16&&w(P.children,Q,null,ue,J,La(P,ee),se,fe),Y&&Bi(P,null,ue,"created"),C(Q,P,P.scopeId,se,ue),x){for(const Se in x)Se!=="value"&&!pr(Se)&&r(Q,Se,null,x[Se],ee,ue);"value"in x&&r(Q,"value",null,x.value,ee),(S=x.onVnodeBeforeMount)&&Hn(S,ue,P)}Y&&Bi(P,null,ue,"beforeMount");const j=Vm(J,$);j&&$.beforeEnter(Q),i(Q,N,T),((S=x&&x.onVnodeMounted)||j||Y)&&Zt(()=>{try{S&&Hn(S,ue,P),j&&$.enter(Q),Y&&Bi(P,null,ue,"mounted")}finally{}},J)},C=(P,N,T,ue,J)=>{if(T&&_(P,T),ue)for(let ee=0;ee<ue.length;ee++)_(P,ue[ee]);if(J){let ee=J.subTree;if(N===ee||Kf(ee.type)&&(ee.ssContent===N||ee.ssFallback===N)){const se=J.vnode;C(P,se,se.scopeId,se.slotScopeIds,J.parent)}}},w=(P,N,T,ue,J,ee,se,fe,Q=0)=>{for(let S=Q;S<P.length;S++){const x=P[S]=fe?ai(P[S]):Wn(P[S]);g(null,x,N,T,ue,J,ee,se,fe)}},A=(P,N,T,ue,J,ee,se)=>{const fe=N.el=P.el;let{patchFlag:Q,dynamicChildren:S,dirs:x}=N;Q|=P.patchFlag&16;const U=P.props||xt,$=N.props||xt;let Y;if(T&&ki(T,!1),(Y=$.onVnodeBeforeUpdate)&&Hn(Y,T,N,P),x&&Bi(N,P,T,"beforeUpdate"),T&&ki(T,!0),(U.innerHTML&&$.innerHTML==null||U.textContent&&$.textContent==null)&&u(fe,""),S?E(P.dynamicChildren,S,fe,T,ue,La(N,J),ee):se||z(P,N,fe,null,T,ue,La(N,J),ee,!1),Q>0){if(Q&16)D(fe,U,$,T,J);else if(Q&2&&U.class!==$.class&&r(fe,"class",null,$.class,J),Q&4&&r(fe,"style",U.style,$.style,J),Q&8){const j=N.dynamicProps;for(let Se=0;Se<j.length;Se++){const he=j[Se],ye=U[he],Be=$[he];(Be!==ye||he==="value")&&r(fe,he,ye,Be,J,T)}}Q&1&&P.children!==N.children&&u(fe,N.children)}else!se&&S==null&&D(fe,U,$,T,J);((Y=$.onVnodeUpdated)||x)&&Zt(()=>{Y&&Hn(Y,T,N,P),x&&Bi(N,P,T,"updated")},ue)},E=(P,N,T,ue,J,ee,se)=>{for(let fe=0;fe<N.length;fe++){const Q=P[fe],S=N[fe],x=Q.el&&(Q.type===et||!nr(Q,S)||Q.shapeFlag&198)?d(Q.el):T;g(Q,S,x,null,ue,J,ee,se,!0)}},D=(P,N,T,ue,J)=>{if(N!==T){if(N!==xt)for(const ee in N)!pr(ee)&&!(ee in T)&&r(P,ee,N[ee],null,J,ue);for(const ee in T){if(pr(ee))continue;const se=T[ee],fe=N[ee];se!==fe&&ee!=="value"&&r(P,ee,fe,se,J,ue)}"value"in T&&r(P,"value",N.value,T.value,J)}},X=(P,N,T,ue,J,ee,se,fe,Q)=>{const S=N.el=P?P.el:a(""),x=N.anchor=P?P.anchor:a("");let{patchFlag:U,dynamicChildren:$,slotScopeIds:Y}=N;Y&&(fe=fe?fe.concat(Y):Y),P==null?(i(S,T,ue),i(x,T,ue),w(N.children||[],T,x,J,ee,se,fe,Q)):U>0&&U&64&&$&&P.dynamicChildren&&P.dynamicChildren.length===$.length?(E(P.dynamicChildren,$,T,J,ee,se,fe),(N.key!=null||J&&N===J.subTree)&&kc(P,N,!0)):z(P,N,T,x,J,ee,se,fe,Q)},k=(P,N,T,ue,J,ee,se,fe,Q)=>{N.slotScopeIds=fe,P==null?N.shapeFlag&512?J.ctx.activate(N,T,ue,se,Q):V(N,T,ue,J,ee,se,Q):Z(P,N,Q)},V=(P,N,T,ue,J,ee,se)=>{const fe=P.component=Zm(P,ue,J);if(Lf(P)&&(fe.ctx.renderer=je),Qm(fe,!1,se),fe.asyncDep){if(J&&J.registerDep(fe,G,se),!P.el){const Q=fe.subTree=bt(Ii);h(null,Q,N,T),P.placeholder=Q.el}}else G(fe,P,N,T,J,ee,se)},Z=(P,N,T)=>{const ue=N.component=P.component;if(Lm(P,N,T))if(ue.asyncDep&&!ue.asyncResolved){te(ue,N,T);return}else ue.next=N,ue.update();else N.el=P.el,ue.vnode=N},G=(P,N,T,ue,J,ee,se)=>{const fe=()=>{if(P.isMounted){let{next:U,bu:$,u:Y,parent:j,vnode:Se}=P;{const Ae=Yf(P);if(Ae){U&&(U.el=Se.el,te(P,U,se)),Ae.asyncDep.then(()=>{Zt(()=>{P.isUnmounted||S()},J)});return}}let he=U,ye;ki(P,!1),U?(U.el=Se.el,te(P,U,se)):U=Se,$&&To($),(ye=U.props&&U.props.onVnodeBeforeUpdate)&&Hn(ye,j,U,Se),ki(P,!0);const Be=gu(P),pe=P.subTree;P.subTree=Be,g(pe,Be,d(pe.el),ie(pe),P,J,ee),U.el=Be.el,he===null&&Im(P,Be.el),Y&&Zt(Y,J),(ye=U.props&&U.props.onVnodeUpdated)&&Zt(()=>Hn(ye,j,U,Se),J)}else{let U;const{el:$,props:Y}=N,{bm:j,m:Se,parent:he,root:ye,type:Be}=P,pe=vr(N);ki(P,!1),j&&To(j),!pe&&(U=Y&&Y.onVnodeBeforeMount)&&Hn(U,he,N),ki(P,!0);{ye.ce&&ye.ce._hasShadowRoot()&&ye.ce._injectChildStyle(Be,P.parent?P.parent.type:void 0);const Ae=P.subTree=gu(P);g(null,Ae,T,ue,P,J,ee),N.el=Ae.el}if(Se&&Zt(Se,J),!pe&&(U=Y&&Y.onVnodeMounted)){const Ae=N;Zt(()=>Hn(U,he,Ae),J)}(N.shapeFlag&256||he&&vr(he.vnode)&&he.vnode.shapeFlag&256)&&P.a&&Zt(P.a,J),P.isMounted=!0,N=T=ue=null}};P.scope.on();const Q=P.effect=new af(fe);P.scope.off();const S=P.update=Q.run.bind(Q),x=P.job=Q.runIfDirty.bind(Q);x.i=P,x.id=P.uid,Q.scheduler=()=>Ic(x),ki(P,!0),S()},te=(P,N,T)=>{N.component=P;const ue=P.vnode.props;P.vnode=N,P.next=null,Nm(P,N.props,ue,T),km(P,N.children,T),mi(),ou(P),gi()},z=(P,N,T,ue,J,ee,se,fe,Q=!1)=>{const S=P&&P.children,x=P?P.shapeFlag:0,U=N.children,{patchFlag:$,shapeFlag:Y}=N;if($>0){if($&128){Me(S,U,T,ue,J,ee,se,fe,Q);return}else if($&256){_e(S,U,T,ue,J,ee,se,fe,Q);return}}Y&8?(x&16&&Ee(S,J,ee),U!==S&&u(T,U)):x&16?Y&16?Me(S,U,T,ue,J,ee,se,fe,Q):Ee(S,J,ee,!0):(x&8&&u(T,""),Y&16&&w(U,T,ue,J,ee,se,fe,Q))},_e=(P,N,T,ue,J,ee,se,fe,Q)=>{P=P||Ds,N=N||Ds;const S=P.length,x=N.length,U=Math.min(S,x);let $;for($=0;$<U;$++){const Y=N[$]=Q?ai(N[$]):Wn(N[$]);g(P[$],Y,T,null,J,ee,se,fe,Q)}S>x?Ee(P,J,ee,!0,!1,U):w(N,T,ue,J,ee,se,fe,Q,U)},Me=(P,N,T,ue,J,ee,se,fe,Q)=>{let S=0;const x=N.length;let U=P.length-1,$=x-1;for(;S<=U&&S<=$;){const Y=P[S],j=N[S]=Q?ai(N[S]):Wn(N[S]);if(nr(Y,j))g(Y,j,T,null,J,ee,se,fe,Q);else break;S++}for(;S<=U&&S<=$;){const Y=P[U],j=N[$]=Q?ai(N[$]):Wn(N[$]);if(nr(Y,j))g(Y,j,T,null,J,ee,se,fe,Q);else break;U--,$--}if(S>U){if(S<=$){const Y=$+1,j=Y<x?N[Y].el:ue;for(;S<=$;)g(null,N[S]=Q?ai(N[S]):Wn(N[S]),T,j,J,ee,se,fe,Q),S++}}else if(S>$)for(;S<=U;)we(P[S],J,ee,!0),S++;else{const Y=S,j=S,Se=new Map;for(S=j;S<=$;S++){const be=N[S]=Q?ai(N[S]):Wn(N[S]);be.key!=null&&Se.set(be.key,S)}let he,ye=0;const Be=$-j+1;let pe=!1,Ae=0;const Ne=new Array(Be);for(S=0;S<Be;S++)Ne[S]=0;for(S=Y;S<=U;S++){const be=P[S];if(ye>=Be){we(be,J,ee,!0);continue}let Xe;if(be.key!=null)Xe=Se.get(be.key);else for(he=j;he<=$;he++)if(Ne[he-j]===0&&nr(be,N[he])){Xe=he;break}Xe===void 0?we(be,J,ee,!0):(Ne[Xe-j]=S+1,Xe>=Ae?Ae=Xe:pe=!0,g(be,N[Xe],T,null,J,ee,se,fe,Q),ye++)}const We=pe?Gm(Ne):Ds;for(he=We.length-1,S=Be-1;S>=0;S--){const be=j+S,Xe=N[be],Ke=N[be+1],ut=be+1<x?Ke.el||jf(Ke):ue;Ne[S]===0?g(null,Xe,T,ut,J,ee,se,fe,Q):pe&&(he<0||S!==We[he]?ve(Xe,T,ut,2):he--)}}},ve=(P,N,T,ue,J=null)=>{const{el:ee,type:se,transition:fe,children:Q,shapeFlag:S}=P;if(S&6){ve(P.component.subTree,N,T,ue);return}if(S&128){P.suspense.move(N,T,ue);return}if(S&64){se.move(P,N,T,je);return}if(se===et){i(ee,N,T);for(let U=0;U<Q.length;U++)ve(Q[U],N,T,ue);i(P.anchor,N,T);return}if(se===wo){R(P,N,T);return}if(ue!==2&&S&1&&fe)if(ue===0)fe.beforeEnter(ee),i(ee,N,T),Zt(()=>fe.enter(ee),J);else{const{leave:U,delayLeave:$,afterLeave:Y}=fe,j=()=>{P.ctx.isUnmounted?s(ee):i(ee,N,T)},Se=()=>{ee._isLeaving&&ee[sm](!0),U(ee,()=>{j(),Y&&Y()})};$?$(ee,j,Se):Se()}else i(ee,N,T)},we=(P,N,T,ue=!1,J=!1)=>{const{type:ee,props:se,ref:fe,children:Q,dynamicChildren:S,shapeFlag:x,patchFlag:U,dirs:$,cacheIndex:Y,memo:j}=P;if(U===-2&&(J=!1),fe!=null&&(mi(),_r(fe,null,T,P,!0),gi()),Y!=null&&(N.renderCache[Y]=void 0),x&256){N.ctx.deactivate(P);return}const Se=x&1&&$,he=!vr(P);let ye;if(he&&(ye=se&&se.onVnodeBeforeUnmount)&&Hn(ye,N,P),x&6)ge(P.component,T,ue);else{if(x&128){P.suspense.unmount(T,ue);return}Se&&Bi(P,null,N,"beforeUnmount"),x&64?P.type.remove(P,N,T,je,ue):S&&!S.hasOnce&&(ee!==et||U>0&&U&64)?Ee(S,N,T,!1,!0):(ee===et&&U&384||!J&&x&16)&&Ee(Q,N,T),ue&&Oe(P)}const Be=j!=null&&Y==null;(he&&(ye=se&&se.onVnodeUnmounted)||Se||Be)&&Zt(()=>{ye&&Hn(ye,N,P),Se&&Bi(P,null,N,"unmounted"),Be&&(P.el=null)},T)},Oe=P=>{const{type:N,el:T,anchor:ue,transition:J}=P;if(N===et){ne(T,ue);return}if(N===wo){M(P);return}const ee=()=>{s(T),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:se,delayLeave:fe}=J,Q=()=>se(T,ee);fe?fe(P.el,ee,Q):Q()}else ee()},ne=(P,N)=>{let T;for(;P!==N;)T=p(P),s(P),P=T;s(N)},ge=(P,N,T)=>{const{bum:ue,scope:J,job:ee,subTree:se,um:fe,m:Q,a:S}=P;xu(Q),xu(S),ue&&To(ue),J.stop(),ee&&(ee.flags|=8,we(se,P,N,T)),fe&&Zt(fe,N),Zt(()=>{P.isUnmounted=!0},N)},Ee=(P,N,T,ue=!1,J=!1,ee=0)=>{for(let se=ee;se<P.length;se++)we(P[se],N,T,ue,J)},ie=P=>{if(P.shapeFlag&6)return ie(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const N=p(P.anchor||P.el),T=N&&N[Pf];return T?p(T):N};let Le=!1;const He=(P,N,T)=>{let ue;P==null?N._vnode&&(we(N._vnode,null,null,!0),ue=N._vnode.component):g(N._vnode||null,P,N,null,null,null,T),N._vnode=P,Le||(Le=!0,ou(ue),Tf(),Le=!1)},je={p:g,um:we,m:ve,r:Oe,mt:V,mc:w,pc:z,pbc:E,n:ie,o:n};return{render:He,hydrate:void 0,createApp:Am(He)}}function La({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ki({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Vm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kc(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ai(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&kc(o,a)),a.type===ua&&(a.patchFlag===-1&&(a=s[r]=ai(a)),a.el=o.el),a.type===Ii&&!a.el&&(a.el=o.el)}}function Gm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yf(e)}function xu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function jf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?jf(e.subTree):null}const Kf=n=>n.__isSuspense;function Wm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):qp(n)}const et=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Ii=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),yr=[];let gn=null;function le(n=!1){yr.push(gn=n?null:[])}function $m(){yr.pop(),gn=yr[yr.length-1]||null}let Tr=1;function Go(n,e=!1){Tr+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function Zf(n){return n.dynamicChildren=Tr>0?gn||Ds:null,$m(),Tr>0&&gn&&gn.push(n),n}function ce(n,e,t,i,s,r){return Zf(f(n,e,t,i,s,r,!0))}function zc(n,e,t,i,s){return Zf(bt(n,e,t,i,s,!0))}function Wo(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const Jf=({key:n})=>n??null,Ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||zt(n)||tt(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function f(n,e=null,t=null,i=0,s=null,r=n===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jf(e),ref:e&&Ro(e),scopeId:wf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(Hc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Tr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const bt=Xm;function Xm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Uf)&&(n=Ii),Wo(n)){const a=Hs(n,e,!0);return t&&Hc(a,t),Tr>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(sg(n)&&(n=n.__vccOpts),e){e=qm(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Ye(a)),gt(l)&&(Dc(l)&&!qe(l)&&(l=qt({},l)),e.style=Ut(l))}const o=Et(n)?1:Kf(n)?128:Qp(n)?64:gt(n)?4:tt(n)?2:0;return f(n,e,t,i,s,o,r,!0)}function qm(n){return n?Dc(n)||Vf(n)?qt({},n):n:null}function Hs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ym(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Jf(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(Ro(e)):[r,Ro(e)]:Ro(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==et?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hs(n.ssContent),ssFallback:n.ssFallback&&Hs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Uc(u,l.clone(u)),u}function sn(n=" ",e=0){return bt(ua,null,n,e)}function en(n,e){const t=bt(wo,null,n);return t.staticCount=e,t}function wt(n="",e=!1){return e?(le(),zc(Ii,null,n)):bt(Ii,null,n)}function Wn(n){return n==null||typeof n=="boolean"?bt(Ii):qe(n)?bt(et,null,n.slice()):Wo(n)?ai(n):bt(ua,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hs(n)}function Hc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Hc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Vf(e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),i&64?(t=16,e=[sn(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ym(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ye([e.class,i.class]));else if(s==="style")e.style=Ut([e.style,i.style]);else if(Qo(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ea(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Hn(n,e,t,i=null){Zn(n,e,7,[t,i])}const jm=Of();let Km=0;function Zm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||jm,r={uid:Km++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(i,s),emitsOptions:Bf(i,s),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Rm.bind(null,r),n.ce&&n.ce(r),r}let $t=null;const Jm=()=>$t||mn;let $o,wl;{const n=ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};$o=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),wl=e("__VUE_SSR_SETTERS__",t=>Ar=t)}const Dr=n=>{const e=$t;return $o(n),n.scope.on(),()=>{n.scope.off(),$o(e)}},yu=()=>{$t&&$t.scope.off(),$o(null)};function Qf(n){return n.vnode.shapeFlag&4}let Ar=!1;function Qm(n,e=!1,t=!1){e&&wl(e);const{props:i,children:s}=n.vnode,r=Qf(n);Um(n,i,r,e),Bm(n,s,t||e);const o=r?eg(n,e):void 0;return e&&wl(!1),o}function eg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,xm);const{setup:i}=t;if(i){mi();const s=n.setupContext=i.length>1?ng(n):null,r=Dr(n),o=Pr(i,n,0,[n.props,s]),a=Qd(o);if(gi(),r(),(a||n.sp)&&!vr(n)&&Df(n),a){if(o.then(yu,yu),e)return o.then(l=>{Su(n,l)}).catch(l=>{aa(l,n,0)});n.asyncDep=o}else Su(n,o)}else eh(n)}function Su(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Mf(e)),eh(n)}function eh(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const s=Dr(n);mi();try{ym(n)}finally{gi(),s()}}}const tg={get(n,e){return Wt(n,"get",""),n[e]}};function ng(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,tg),slots:n.slots,emit:n.emit,expose:e}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(Op(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xr)return xr[t](n)},has(e,t){return t in e||t in xr}})):n.proxy}function ig(n,e=!0){return tt(n)?n.displayName||n.name:n.name||e&&n.__name}function sg(n){return tt(n)&&"__vccOpts"in n}const Rt=(n,e)=>Vp(n,e,Ar);function yn(n,e,t){try{Go(-1);const i=arguments.length;return i===2?gt(e)&&!qe(e)?Wo(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Wo(t)&&(t=[t]),bt(n,e,t))}finally{Go(1)}}const rg="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{Rl=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const th=Rl?n=>Rl.createHTML(n):n=>n,og="http://www.w3.org/2000/svg",ag="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,bu=oi&&oi.createElement("template"),lg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?oi.createElementNS(og,n):e==="mathml"?oi.createElementNS(ag,n):t?oi.createElement(n,{is:t}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{bu.innerHTML=th(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=bu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cg=Symbol("_vtc");function ug(n,e,t){const i=n[cg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eu=Symbol("_vod"),dg=Symbol("_vsh"),fg=Symbol(""),hg=/(?:^|;)\s*display\s*:/;function pg(n,e,t){const i=n.style,s=Et(t);let r=!1;if(t&&!s){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&dr(i,a,"")}else for(const o in e)t[o]==null&&dr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?gg(n,o,!Et(e)&&e?e[o]:void 0,a)||dr(i,o,a):dr(i,o,"")}}else if(s){if(e!==t){const o=i[fg];o&&(t+=";"+o),i.cssText=t,r=hg.test(t)}}else e&&n.removeAttribute("style");Eu in n&&(n[Eu]=r?i.display:"",n[dg]&&(i.display="none"))}const Tu=/\s*!important$/;function dr(n,e,t){if(qe(t))t.forEach(i=>dr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=mg(n,e);Tu.test(t)?n.setProperty(Fi(i),t.replace(Tu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],Ia={};function mg(n,e){const t=Ia[e];if(t)return t;let i=Qt(e);if(i!=="filter"&&i in n)return Ia[e]=i;i=ia(i);for(let s=0;s<Au.length;s++){const r=Au[s]+i;if(r in n)return Ia[e]=r}return e}function gg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Et(i)&&t===i}const wu="http://www.w3.org/1999/xlink";function Ru(n,e,t,i,s,r=hp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wu,e.slice(6,e.length)):n.setAttributeNS(wu,e,t):t==null||r&&!sf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Kn(t)?String(t):t)}function Cu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?th(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=sf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ki(n,e,t,i){n.addEventListener(e,t,i)}function _g(n,e,t,i){n.removeEventListener(e,t,i)}const Pu=Symbol("_vei");function vg(n,e,t,i,s=null){const r=n[Pu]||(n[Pu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=xg(e);if(i){const c=r[e]=Mg(i,s);Ki(n,a,c,l)}else o&&(_g(n,a,o,l),r[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function xg(n){let e;if(Du.test(n)){e={};let i;for(;i=n.match(Du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fi(n.slice(2)),e]}let Ua=0;const yg=Promise.resolve(),Sg=()=>Ua||(yg.then(()=>Ua=0),Ua=Date.now());function Mg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Zn(bg(i,t.value),e,5,[i])};return t.value=n,t.attached=Sg(),t}function bg(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Eg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?ug(n,i,o):e==="style"?pg(n,t,i):Qo(e)?ea(e)||vg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tg(n,e,i,o))?(Cu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ru(n,e,i,o,r,e!=="value")):n._isVueCE&&(Ag(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Et(i)))?Cu(n,Qt(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ru(n,e,i,o))};function Tg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lu(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lu(e)&&Et(t)?!1:e in n}function Ag(n,e){const t=n._def.props;if(!t)return!1;const i=Qt(e);return Array.isArray(t)?t.some(s=>Qt(s)===i):Object.keys(t).some(s=>Qt(s)===i)}const Xo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>To(e,t):e};function wg(n){n.target.composing=!0}function Iu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ns=Symbol("_assign");function Uu(n,e,t){return e&&(n=n.trim()),t&&(n=sa(n)),n}const pn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ns]=Xo(s);const r=i||s.props&&s.props.type==="number";Ki(n,e?"change":"input",o=>{o.target.composing||n[Ns](Uu(n.value,t,r))}),(t||r)&&Ki(n,"change",()=>{n.value=Uu(n.value,t,r)}),e||(Ki(n,"compositionstart",wg),Ki(n,"compositionend",Iu),Ki(n,"change",Iu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ns]=Xo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?sa(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},li={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=ta(e);Ki(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?sa(qo(o)):qo(o));n[Ns](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Lc(()=>{n._assigning=!1})}),n[Ns]=Xo(i)},mounted(n,{value:e}){Nu(n,e)},beforeUpdate(n,e,t){n[Ns]=Xo(t)},updated(n,{value:e}){n._assigning||Nu(n,e)}};function Nu(n,e){const t=n.multiple,i=qe(e);if(!(t&&!i&&!ta(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=qo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=mp(e,a)>-1}else o.selected=e.has(a);else if(Cr(qo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function qo(n){return"_value"in n?n._value:n.value}const Rg=["ctrl","shift","alt","meta"],Cg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Rg.some(t=>n[`${t}Key`]&&!e.includes(t))},Pi=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Cg[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Pg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Fi(s.key);if(e.some(o=>o===r||Pg[o]===r))return n(s)}))},Dg=qt({patchProp:Eg},lg);let Fu;function Lg(){return Fu||(Fu=zm(Dg))}const Ig=((...n)=>{const e=Lg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ng(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ug(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Ug(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ng(n){return Et(n)?document.querySelector(n):n}const Bn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Fg={class:"view-nav glass-container"},Og={class:"nav-track"},Bg=["onClick"],kg={key:0,class:"step-connector"},zg={class:"step-orb"},Hg={class:"step-index"},Vg={class:"step-content"},Gg={class:"step-particles"},Wg={__name:"ViewNav",props:{currentView:{type:String,required:!0}},emits:["navigate"],setup(n){const e=n,t=[{id:"genesis",title:"入局",subtitle:"基础建模"},{id:"destiny",title:"命轨",subtitle:"树状分支"},{id:"divergence",title:"衍化",subtitle:"路线生成"},{id:"comparison",title:"对比",subtitle:"双窗分析"},{id:"reflection",title:"观心",subtitle:"属性画像"},{id:"mentorship",title:"论道",subtitle:"顾问互动"},{id:"conclusion",title:"归途",subtitle:"终局报告"}],i=["genesis","destiny","divergence","comparison","reflection","mentorship","conclusion"],s=r=>{const o=i.indexOf(e.currentView);return i.indexOf(r)<o};return(r,o)=>(le(),ce("div",Fg,[f("div",Og,[(le(),ce(et,null,ot(t,(a,l)=>f("div",{key:a.id,class:Ye(["view-step",{active:n.currentView===a.id,completed:s(a.id)}]),onClick:c=>r.$emit("navigate",a.id)},[l>0?(le(),ce("div",kg)):wt("",!0),f("div",zg,[f("span",Hg,oe(String(l+1).padStart(2,"0")),1),o[0]||(o[0]=f("div",{class:"step-glow"},null,-1))]),f("div",Vg,[f("strong",null,oe(a.title),1),f("small",null,oe(a.subtitle),1)]),f("div",Gg,[(le(),ce(et,null,ot(3,c=>f("span",{class:"particle",key:c})),64))])],10,Bg)),64))])]))}},$g=Bn(Wg,[["__scopeId","data-v-059c77af"]]),Xg={key:0,class:"genesis-view"},qg={class:"scroll-form glass-container fade-in"},Yg={class:"form-section"},jg={class:"form-row"},Kg={class:"form-group"},Zg={class:"form-group"},Jg={class:"form-row"},Qg={class:"form-group"},e_={class:"form-group"},t_={class:"form-row"},n_={class:"form-group"},i_={class:"form-group"},s_={class:"form-row"},r_={class:"form-group"},o_={class:"form-group"},a_={class:"form-section"},l_={class:"form-row"},c_={class:"form-group"},u_={class:"form-group"},d_={class:"form-row"},f_={class:"form-group"},h_={class:"form-group"},p_={class:"form-row"},m_={class:"form-group full-width"},g_={class:"form-section"},__={class:"card-front glass-container"},v_={key:0,class:"card-back glass-container"},x_=["onClick"],y_={__name:"GenesisView",props:["userInfo","isCardFlipped","currentScenario","statusMessage"],emits:["update:userInfo","fetch-scenario","flip-card","select-option","skip-scenario","mark-edit","backup","clear","start-destiny"],setup(n,{emit:e}){const t=n,i=e,s=ks({...t.userInfo});return jn(()=>t.userInfo,r=>{Object.assign(s,r||{})},{deep:!0}),jn(s,r=>{i("update:userInfo",{...r})},{deep:!0}),(r,o)=>(le(),ce("div",Xg,[f("div",qg,[o[40]||(o[40]=f("h1",{class:"title"},"人生基础建模",-1)),f("div",Yg,[o[27]||(o[27]=f("h2",null,"基础信息",-1)),f("div",jg,[f("div",Kg,[o[17]||(o[17]=f("label",null,"年龄",-1)),At(f("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=a=>s.age=a),class:"input",placeholder:"请输入年龄"},null,512),[[pn,s.age]])]),f("div",Zg,[o[19]||(o[19]=f("label",null,"学历",-1)),At(f("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.education=a),class:"input"},[...o[18]||(o[18]=[en('<option value="" data-v-9a395f21>请选择学历</option><option value="high school" data-v-9a395f21>高中</option><option value="college" data-v-9a395f21>大专</option><option value="bachelor" data-v-9a395f21>本科</option><option value="master" data-v-9a395f21>硕士</option><option value="phd" data-v-9a395f21>博士</option>',6)])],512),[[li,s.education]])])]),f("div",Jg,[f("div",Qg,[o[20]||(o[20]=f("label",null,"职业",-1)),At(f("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=a=>s.occupation=a),class:"input",placeholder:"请输入职业"},null,512),[[pn,s.occupation]])]),f("div",e_,[o[21]||(o[21]=f("label",null,"城市",-1)),At(f("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=a=>s.city=a),class:"input",placeholder:"请输入城市"},null,512),[[pn,s.city]])])]),f("div",t_,[f("div",n_,[o[22]||(o[22]=f("label",null,"月收入",-1)),At(f("input",{type:"number","onUpdate:modelValue":o[4]||(o[4]=a=>s.income=a),class:"input",placeholder:"请输入月收入"},null,512),[[pn,s.income]])]),f("div",i_,[o[24]||(o[24]=f("label",null,"家庭状况",-1)),At(f("select",{"onUpdate:modelValue":o[5]||(o[5]=a=>s.family=a),class:"input"},[...o[23]||(o[23]=[f("option",{value:""},"请选择",-1),f("option",{value:"single"},"单身",-1),f("option",{value:"married"},"已婚",-1),f("option",{value:"married_with_children"},"已婚有子女",-1)])],512),[[li,s.family]])])]),f("div",s_,[f("div",r_,[o[25]||(o[25]=f("label",null,"核心技能",-1)),At(f("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=a=>s.skills=a),class:"input",placeholder:"请输入核心技能"},null,512),[[pn,s.skills]])]),f("div",o_,[o[26]||(o[26]=f("label",null,"可投入成本",-1)),At(f("input",{type:"number","onUpdate:modelValue":o[7]||(o[7]=a=>s.investment=a),class:"input",placeholder:"请输入可投入成本"},null,512),[[pn,s.investment]])])])]),f("div",a_,[o[37]||(o[37]=f("h2",null,"人格与偏好建模",-1)),f("div",l_,[f("div",c_,[o[29]||(o[29]=f("label",null,"风险偏好",-1)),At(f("select",{"onUpdate:modelValue":o[8]||(o[8]=a=>s.riskPreference=a),class:"input"},[...o[28]||(o[28]=[f("option",{value:""},"请选择",-1),f("option",{value:"risk-averse"},"风险规避",-1),f("option",{value:"moderate"},"平衡型",-1),f("option",{value:"risk-seeking"},"风险偏好",-1)])],512),[[li,s.riskPreference]])]),f("div",u_,[o[31]||(o[31]=f("label",null,"延迟满足能力",-1)),At(f("select",{"onUpdate:modelValue":o[9]||(o[9]=a=>s.delayGratification=a),class:"input"},[...o[30]||(o[30]=[f("option",{value:""},"请选择",-1),f("option",{value:"low"},"低",-1),f("option",{value:"medium"},"中",-1),f("option",{value:"high"},"高",-1)])],512),[[li,s.delayGratification]])])]),f("div",d_,[f("div",f_,[o[33]||(o[33]=f("label",null,"抗压能力",-1)),At(f("select",{"onUpdate:modelValue":o[10]||(o[10]=a=>s.stressResistance=a),class:"input"},[...o[32]||(o[32]=[f("option",{value:""},"请选择",-1),f("option",{value:"low"},"低",-1),f("option",{value:"medium"},"中",-1),f("option",{value:"high"},"高",-1)])],512),[[li,s.stressResistance]])]),f("div",h_,[o[35]||(o[35]=f("label",null,"决策风格",-1)),At(f("select",{"onUpdate:modelValue":o[11]||(o[11]=a=>s.decisionStyle=a),class:"input"},[...o[34]||(o[34]=[f("option",{value:""},"请选择",-1),f("option",{value:"analytical"},"分析型",-1),f("option",{value:"intuitive"},"直觉型",-1),f("option",{value:"collaborative"},"协作型",-1)])],512),[[li,s.decisionStyle]])])]),f("div",p_,[f("div",m_,[o[36]||(o[36]=f("label",null,"人生目标",-1)),At(f("textarea",{"onUpdate:modelValue":o[12]||(o[12]=a=>s.lifeGoals=a),class:"input",rows:"3",placeholder:"请输入短期和长期人生目标"},null,512),[[pn,s.lifeGoals]])])])]),f("div",g_,[o[39]||(o[39]=f("h2",null,"情境化测评",-1)),f("div",{class:"card-flip",onClick:o[13]||(o[13]=a=>r.$emit("flip-card"))},[f("div",__,[f("h3",null,oe(n.currentScenario.scenario),1),o[38]||(o[38]=f("p",null,"点击卡片查看选项",-1))]),n.isCardFlipped?(le(),ce("div",v_,[(le(!0),ce(et,null,ot(n.currentScenario.options,(a,l)=>(le(),ce("div",{class:"option",key:l,onClick:c=>r.$emit("select-option",a.style)},[f("span",null,oe(a.text),1),f("small",null,oe(a.style),1)],8,x_))),128))])):wt("",!0)]),f("button",{class:"btn btn-secondary",onClick:o[14]||(o[14]=a=>r.$emit("fetch-scenario"))},"生成新场景"),f("button",{class:"btn btn-secondary",onClick:o[15]||(o[15]=a=>r.$emit("skip-scenario"))},"跳过使用默认模型")]),f("button",{class:"btn btn-primary",onClick:o[16]||(o[16]=a=>r.$emit("start-destiny"))},"开始探索")])]))}},S_=Bn(y_,[["__scopeId","data-v-9a395f21"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="172",M_=0,Ou=1,b_=2,ih=1,E_=2,ri=3,Ui=0,rn=1,di=2,Di=0,Fs=1,Cl=2,Bu=3,ku=4,T_=5,Zi=100,A_=101,w_=102,R_=103,C_=104,P_=200,D_=201,L_=202,I_=203,Pl=204,Dl=205,U_=206,N_=207,F_=208,O_=209,B_=210,k_=211,z_=212,H_=213,V_=214,Ll=0,Il=1,Ul=2,Vs=3,Nl=4,Fl=5,Ol=6,Bl=7,sh=0,G_=1,W_=2,Li=0,$_=1,X_=2,q_=3,Y_=4,j_=5,K_=6,Z_=7,rh=300,Gs=301,Ws=302,kl=303,zl=304,fa=306,Hl=1e3,Qi=1001,Vl=1002,Fn=1003,J_=1004,Qr=1005,qn=1006,Na=1007,es=1008,vi=1009,oh=1010,ah=1011,wr=1012,Gc=1013,rs=1014,fi=1015,Lr=1016,Wc=1017,$c=1018,$s=1020,lh=35902,ch=1021,uh=1022,Un=1023,dh=1024,fh=1025,Os=1026,Xs=1027,hh=1028,Xc=1029,ph=1030,qc=1031,Yc=1033,Co=33776,Po=33777,Do=33778,Lo=33779,Gl=35840,Wl=35841,$l=35842,Xl=35843,ql=36196,Yl=37492,jl=37496,Kl=37808,Zl=37809,Jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,Io=36492,uc=36494,dc=36495,mh=36283,fc=36284,hc=36285,pc=36286,Q_=3200,ev=3201,tv=0,nv=1,Ci="",bn="srgb",qs="srgb-linear",Yo="linear",_t="srgb",hs=7680,zu=519,iv=512,sv=513,rv=514,gh=515,ov=516,av=517,lv=518,cv=519,Hu=35044,Vu="300 es",hi=2e3,jo=2001;class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,mc=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function uv(n,e){return(n%e+e)%e}function Oa(n,e,t){return(1-t)*n+t*e}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,s,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],_=i[5],v=i[8],g=s[0],m=s[3],h=s[6],b=s[1],R=s[4],M=s[7],L=s[2],I=s[5],C=s[8];return r[0]=o*g+a*b+l*L,r[3]=o*m+a*R+l*I,r[6]=o*h+a*M+l*C,r[1]=c*g+u*b+d*L,r[4]=c*m+u*R+d*I,r[7]=c*h+u*M+d*C,r[2]=p*g+_*b+v*L,r[5]=p*m+_*R+v*I,r[8]=p*h+_*M+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*r,_=c*r-o*l,v=t*d+i*p+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=p*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=_*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new nt;function _h(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dv(){const n=Ko("canvas");return n.style.display="block",n}const Gu={};function Cs(n){n in Gu||(Gu[n]=!0,console.warn(n))}function fv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function hv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mv(){const n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Yo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:e,whitePoint:i,transfer:Yo,toXYZ:Wu,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Wu,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const ct=mv();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ps;class gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Ko("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ka(s[o].image)):r.push(ka(s[o]))}else r=ka(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vv=0;class on extends Ks{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=Qi,s=Qi,r=qn,o=es,a=Un,l=vi,c=on.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Ir(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=rh;on.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,s=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],_=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(_+1)/2,L=(h+1)/2,I=(u+p)/4,C=(d+g)/4,w=(v+m)/4;return R>M&&R>L?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=I/i,r=C/i):M>L?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=I/s,r=w/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-g)/b,this.z=(p-u)/b,this.w=Math.acos((c+_+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xv extends Ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xh extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const p=r[o+0],_=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==p||c!==_||u!==v){let m=1-a;const h=l*p+c*_+u*v+d*g,b=h>=0?1:-1,R=1-h*h;if(R>Number.EPSILON){const L=Math.sqrt(R),I=Math.atan2(L,h*b);m=Math.sin(m*I)/L,a=Math.sin(a*I)/L}const M=a*b;if(l=l*m+p*M,c=c*m+_*M,u=u*m+v*M,d=d*m+g*M,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],p=r[o+1],_=r[o+2],v=r[o+3];return e[t]=a*v+u*d+l*_-c*p,e[t+1]=l*v+u*p+c*d-a*_,e[t+2]=c*v+u*_+a*p-l*d,e[t+3]=u*v-a*d-l*p-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),p=l(i/2),_=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*u*d+c*_*v,this._y=c*_*d-p*u*v,this._z=c*u*v+p*_*d,this._w=c*u*d-p*_*v;break;case"YXZ":this._x=p*u*d+c*_*v,this._y=c*_*d-p*u*v,this._z=c*u*v-p*_*d,this._w=c*u*d+p*_*v;break;case"ZXY":this._x=p*u*d-c*_*v,this._y=c*_*d+p*u*v,this._z=c*u*v+p*_*d,this._w=c*u*d-p*_*v;break;case"ZYX":this._x=p*u*d-c*_*v,this._y=c*_*d+p*u*v,this._z=c*u*v-p*_*d,this._w=c*u*d+p*_*v;break;case"YZX":this._x=p*u*d+c*_*v,this._y=c*_*d+p*u*v,this._z=c*u*v-p*_*d,this._w=c*u*d-p*_*v;break;case"XZY":this._x=p*u*d-c*_*v,this._y=c*_*d-p*u*v,this._z=c*u*v+p*_*d,this._w=c*u*d+p*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-l)*_,this._y=(r-c)*_,this._z=(o-s)*_}else if(i>a&&i>d){const _=2*Math.sqrt(1+i-a-d);this._w=(u-l)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+c)/_}else if(a>d){const _=2*Math.sqrt(1+a-i-d);this._w=(r-c)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-i-a);this._w=(o-s)/_,this._x=(r+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*i+t*this._x,this._y=_*s+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new K,Xu=new Ur;class Nr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),to.subVectors(this.max,sr),ms.subVectors(e.a,sr),gs.subVectors(e.b,sr),_s.subVectors(e.c,sr),Si.subVectors(gs,ms),Mi.subVectors(_s,gs),zi.subVectors(ms,_s);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!Ha(t,ms,gs,_s,to)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,ms,gs,_s,to))?!1:(no.crossVectors(Si,Mi),t=[no.x,no.y,no.z],Ha(t,ms,gs,_s,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new K,new K,new K,new K,new K,new K,new K,new K],Pn=new K,eo=new Nr,ms=new K,gs=new K,_s=new K,Si=new K,Mi=new K,zi=new K,sr=new K,to=new K,no=new K,Hi=new K;function Ha(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sv=new Nr,rr=new K,Va=new K;class ha{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Va)),this.expandByPoint(rr.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new K,Ga=new K,io=new K,bi=new K,Wa=new K,so=new K,$a=new K;class yh{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ga.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=bi.dot(this.direction),l=-bi.dot(io),c=bi.lengthSq(),u=Math.abs(1-o*o);let d,p,_,v;if(u>0)if(d=o*l-a,p=o*a-l,v=r*u,d>=0)if(p>=-v)if(p<=v){const g=1/u;d*=g,p*=g,_=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),_=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),_=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-r,-l),r),_=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),_=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ga).addScaledVector(io,p),_}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){Wa.subVectors(t,e),so.subVectors(i,e),$a.crossVectors(Wa,so);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(bi,so));if(l<0)return null;const c=a*this.direction.dot(Wa.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot($a);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,s,r,o,a,l,c,u,d,p,_,v,g,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,p,_,v,g,m)}set(e,t,i,s,r,o,a,l,c,u,d,p,_,v,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=_,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=o*u,_=o*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+v*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,_=l*d,v=c*u,g=c*d;t[0]=p+g*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,_=l*d,v=c*u,g=c*d;t[0]=p-g*a,t[4]=-o*d,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,_=o*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-_,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-p*d,t[8]=v*d+_,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*d+v,t[10]=p-g*d}else if(e.order==="XZY"){const p=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+g,t[5]=o*u,t[9]=_*d-v,t[2]=v*d-_,t[6]=a*u,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mv,e,bv)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ei.crossVectors(i,fn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ei.crossVectors(i,fn)),Ei.normalize(),ro.crossVectors(fn,Ei),s[0]=Ei.x,s[4]=ro.x,s[8]=fn.x,s[1]=Ei.y,s[5]=ro.y,s[9]=fn.y,s[2]=Ei.z,s[6]=ro.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],_=i[13],v=i[2],g=i[6],m=i[10],h=i[14],b=i[3],R=i[7],M=i[11],L=i[15],I=s[0],C=s[4],w=s[8],A=s[12],E=s[1],D=s[5],X=s[9],k=s[13],V=s[2],Z=s[6],G=s[10],te=s[14],z=s[3],_e=s[7],Me=s[11],ve=s[15];return r[0]=o*I+a*E+l*V+c*z,r[4]=o*C+a*D+l*Z+c*_e,r[8]=o*w+a*X+l*G+c*Me,r[12]=o*A+a*k+l*te+c*ve,r[1]=u*I+d*E+p*V+_*z,r[5]=u*C+d*D+p*Z+_*_e,r[9]=u*w+d*X+p*G+_*Me,r[13]=u*A+d*k+p*te+_*ve,r[2]=v*I+g*E+m*V+h*z,r[6]=v*C+g*D+m*Z+h*_e,r[10]=v*w+g*X+m*G+h*Me,r[14]=v*A+g*k+m*te+h*ve,r[3]=b*I+R*E+M*V+L*z,r[7]=b*C+R*D+M*Z+L*_e,r[11]=b*w+R*X+M*G+L*Me,r[15]=b*A+R*k+M*te+L*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],_=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+r*l*d-s*c*d-r*a*p+i*c*p+s*a*_-i*l*_)+g*(+t*l*_-t*c*p+r*o*p-s*o*_+s*c*u-r*l*u)+m*(+t*c*d-t*a*_-r*o*d+i*o*_+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*p+s*o*d-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],_=e[11],v=e[12],g=e[13],m=e[14],h=e[15],b=d*m*c-g*p*c+g*l*_-a*m*_-d*l*h+a*p*h,R=v*p*c-u*m*c-v*l*_+o*m*_+u*l*h-o*p*h,M=u*g*c-v*d*c+v*a*_-o*g*_-u*a*h+o*d*h,L=v*d*l-u*g*l-v*a*p+o*g*p+u*a*m-o*d*m,I=t*b+i*R+s*M+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=b*C,e[1]=(g*p*r-d*m*r-g*s*_+i*m*_+d*s*h-i*p*h)*C,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*h+i*l*h)*C,e[3]=(d*l*r-a*p*r-d*s*c+i*p*c+a*s*_-i*l*_)*C,e[4]=R*C,e[5]=(u*m*r-v*p*r+v*s*_-t*m*_-u*s*h+t*p*h)*C,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*h-t*l*h)*C,e[7]=(o*p*r-u*l*r+u*s*c-t*p*c-o*s*_+t*l*_)*C,e[8]=M*C,e[9]=(v*d*r-u*g*r-v*i*_+t*g*_+u*i*h-t*d*h)*C,e[10]=(o*g*r-v*a*r+v*i*c-t*g*c-o*i*h+t*a*h)*C,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*_-t*a*_)*C,e[12]=L*C,e[13]=(u*g*s-v*d*s+v*i*p-t*g*p-u*i*m+t*d*m)*C,e[14]=(v*a*s-o*g*s-v*i*l+t*g*l+o*i*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,p=r*c,_=r*u,v=r*d,g=o*u,m=o*d,h=a*d,b=l*c,R=l*u,M=l*d,L=i.x,I=i.y,C=i.z;return s[0]=(1-(g+h))*L,s[1]=(_+M)*L,s[2]=(v-R)*L,s[3]=0,s[4]=(_-M)*I,s[5]=(1-(p+h))*I,s[6]=(m+b)*I,s[7]=0,s[8]=(v+R)*C,s[9]=(m-b)*C,s[10]=(1-(p+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const c=1/r,u=1/o,d=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=hi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let _,v;if(a===hi)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===jo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=hi){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),p=(t+e)*c,_=(i+s)*u;let v,g;if(a===hi)v=(o+r)*d,g=-2*d;else if(a===jo)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new K,Dn=new Pt,Mv=new K(0,0,0),bv=new K(1,1,1),Ei=new K,ro=new K,fn=new K,qu=new Pt,Yu=new Ur;class xi{constructor(e=0,t=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const ju=new K,xs=new Ur,ni=new Pt,oo=new K,or=new K,Tv=new K,Av=new Ur,Ku=new K(1,0,0),Zu=new K(0,1,0),Ju=new K(0,0,1),Qu={type:"added"},wv={type:"removed"},ys={type:"childadded",child:null},Xa={type:"childremoved",child:null};class an extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new K,t=new xi,i=new Ur,s=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(or,oo,this.up):ni.lookAt(oo,or,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ni),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wv),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}an.DEFAULT_UP=new K(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new K,ii=new K,qa=new K,si=new K,Ss=new K,Ms=new K,ed=new K,Ya=new K,ja=new K,Ka=new K,Za=new Ct,Ja=new Ct,Qa=new Ct;class In{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),ii.subVectors(i,t),qa.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(ii),l=Ln.dot(qa),c=ii.dot(ii),u=ii.dot(qa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const p=1/d,_=(c*l-a*u)*p,v=(o*u-a*l)*p;return r.set(1-_-v,v,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),ii.subVectors(e,t),Ln.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,i),Ms.subVectors(r,i),Ya.subVectors(e,i);const l=Ss.dot(Ya),c=Ms.dot(Ya);if(l<=0&&c<=0)return t.copy(i);ja.subVectors(e,s);const u=Ss.dot(ja),d=Ms.dot(ja);if(u>=0&&d<=u)return t.copy(s);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ss,o);Ka.subVectors(e,r);const _=Ss.dot(Ka),v=Ms.dot(Ka);if(v>=0&&_<=v)return t.copy(r);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Ms,a);const m=u*v-_*d;if(m<=0&&d-u>=0&&_-v>=0)return ed.subVectors(r,s),a=(d-u)/(d-u+(_-v)),t.copy(s).addScaledVector(ed,a);const h=1/(m+g+p);return o=g*h,a=p*h,t.copy(i).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ao={h:0,s:0,l:0};function el(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=uv(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=el(o,r,e+1/3),this.g=el(o,r,e),this.b=el(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=Mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return ct.fromWorkingColorSpace(Vt.copy(this),e),Math.round(st(Vt.r*255,0,255))*65536+Math.round(st(Vt.g*255,0,255))*256+Math.round(st(Vt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=bn){ct.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(ao);const i=Oa(Ti.h,ao.h,t),s=Oa(Ti.s,ao.s,t),r=Oa(Ti.l,ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new mt;mt.NAMES=Mh;let Rv=0;class Fr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Fs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Dl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Dl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sr extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new K,lo=new vt;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),e}}class bh extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eh extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cv=0;const Sn=new Pt,tl=new an,bs=new K,hn=new Nr,ar=new Nr,Bt=new K;class kn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?Eh:bh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(hn.min,ar.min),hn.expandByPoint(Bt),Bt.addVectors(hn.max,ar.max),hn.expandByPoint(Bt)):(hn.expandByPoint(ar.min),hn.expandByPoint(ar.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Bt.add(bs)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new K,l[w]=new K;const c=new K,u=new K,d=new K,p=new vt,_=new vt,v=new vt,g=new K,m=new K;function h(w,A,E){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,E),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,A),v.fromBufferAttribute(r,E),u.sub(c),d.sub(c),_.sub(p),v.sub(p);const D=1/(_.x*v.y-v.x*_.y);isFinite(D)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(D),m.copy(d).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(D),a[w].add(g),a[A].add(g),a[E].add(g),l[w].add(m),l[A].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,A=b.length;w<A;++w){const E=b[w],D=E.start,X=E.count;for(let k=D,V=D+X;k<V;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const R=new K,M=new K,L=new K,I=new K;function C(w){L.fromBufferAttribute(s,w),I.copy(L);const A=a[w];R.copy(A),R.sub(L.multiplyScalar(L.dot(A))).normalize(),M.crossVectors(I,A);const D=M.dot(l[w])<0?-1:1;o.setXYZW(w,R.x,R.y,R.z,D)}for(let w=0,A=b.length;w<A;++w){const E=b[w],D=E.start,X=E.count;for(let k=D,V=D+X;k<V;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const s=new K,r=new K,o=new K,a=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let p=0,_=e.count;p<_;p+=3){const v=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,_=t.count;p<_;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?_=l[g]*a.data.stride+a.offset:_=l[g]*u;for(let h=0;h<u;h++)p[v++]=c[_++]}return new wn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],_=e(p,i);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let p=0,_=d.length;p<_;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new Pt,Vi=new yh,co=new ha,nd=new K,uo=new K,fo=new K,ho=new K,nl=new K,po=new K,id=new K,mo=new K;class Tn extends an{constructor(e=new kn,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(nl.fromBufferAttribute(d,e),o?po.addScaledVector(nl,u):po.addScaledVector(nl.sub(t),u))}t.add(po)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(co.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(co,nd)===null||Vi.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],b=Math.max(m.start,_.start),R=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let M=b,L=R;M<L;M+=3){const I=a.getX(M),C=a.getX(M+1),w=a.getX(M+2);s=go(this,h,e,i,c,u,d,I,C,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),g=Math.min(a.count,_.start+_.count);for(let m=v,h=g;m<h;m+=3){const b=a.getX(m),R=a.getX(m+1),M=a.getX(m+2);s=go(this,o,e,i,c,u,d,b,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],b=Math.max(m.start,_.start),R=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=b,L=R;M<L;M+=3){const I=M,C=M+1,w=M+2;s=go(this,h,e,i,c,u,d,I,C,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=v,h=g;m<h;m+=3){const b=m,R=m+1,M=m+2;s=go(this,o,e,i,c,u,d,b,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Pv(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;mo.copy(a),mo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,uo),n.getVertexPosition(l,fo),n.getVertexPosition(c,ho);const u=Pv(n,e,t,i,uo,fo,ho,id);if(u){const d=new K;In.getBarycoord(id,uo,fo,ho,d),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,d,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new K,materialIndex:0};In.getNormal(uo,fo,ho,p.normal),u.face=p,u.barycoord=d}return u}class Or extends kn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,_=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function v(g,m,h,b,R,M,L,I,C,w,A){const E=M/C,D=L/w,X=M/2,k=L/2,V=I/2,Z=C+1,G=w+1;let te=0,z=0;const _e=new K;for(let Me=0;Me<G;Me++){const ve=Me*D-k;for(let we=0;we<Z;we++){const Oe=we*E-X;_e[g]=Oe*b,_e[m]=ve*R,_e[h]=V,c.push(_e.x,_e.y,_e.z),_e[g]=0,_e[m]=0,_e[h]=I>0?1:-1,u.push(_e.x,_e.y,_e.z),d.push(we/C),d.push(1-Me/w),te+=1}}for(let Me=0;Me<w;Me++)for(let ve=0;ve<C;ve++){const we=p+ve+Z*Me,Oe=p+ve+Z*(Me+1),ne=p+(ve+1)+Z*(Me+1),ge=p+(ve+1)+Z*Me;l.push(we,Oe,ge),l.push(Oe,ne,ge),z+=6}a.addGroup(_,z,A),_+=z,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Ys(n[t]);for(const s in i)e[s]=i[s]}return e}function Dv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Lv={clone:Ys,merge:Kt};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ah extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new K,sd=new vt,rd=new vt;class En extends Ah{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Nv extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Es,Ts,e,t);s.layers=this.layers,this.add(s);const r=new En(Es,Ts,e,t);r.layers=this.layers,this.add(r);const o=new En(Es,Ts,e,t);o.layers=this.layers,this.add(o);const a=new En(Es,Ts,e,t);a.layers=this.layers,this.add(a);const l=new En(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new En(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,p,_),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wh extends on{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fv extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Or(5,5,5),r=new Ni({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Di});r.uniforms.tEquirect.value=t;const o=new Tn(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=qn),new Nv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ov extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const il=new K,Bv=new K,kv=new nt;class qi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=il.subVectors(i,t).cross(Bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kv.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ha,_o=new K;class Rh{constructor(e=new qi,t=new qi,i=new qi,s=new qi,r=new qi,o=new qi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],_=s[8],v=s[9],g=s[10],m=s[11],h=s[12],b=s[13],R=s[14],M=s[15];if(i[0].setComponents(l-r,p-c,m-_,M-h).normalize(),i[1].setComponents(l+r,p+c,m+_,M+h).normalize(),i[2].setComponents(l+o,p+u,m+v,M+b).normalize(),i[3].setComponents(l-o,p-u,m-v,M-b).normalize(),i[4].setComponents(l-a,p-d,m-g,M-R).normalize(),t===hi)i[5].setComponents(l+a,p+d,m+g,M+R).normalize();else if(t===jo)i[5].setComponents(a,d,g,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_o.x=s.normal.x>0?e.max.x:e.min.x,_o.y=s.normal.y>0?e.max.y:e.min.y,_o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const od=new Pt,gc=new yh,vo=new ha,xo=new K;class zv extends an{constructor(e=new kn,t=new Ch){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;od.copy(s).invert(),gc.copy(e.ray).applyMatrix4(od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let v=p,g=_;v<g;v++){const m=c.getX(v);xo.fromBufferAttribute(d,m),ad(xo,m,l,s,e,t,this)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,g=_;v<g;v++)xo.fromBufferAttribute(d,v),ad(xo,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ad(n,e,t,i,s,r,o){const a=gc.distanceSqToPoint(n);if(a<t){const l=new K;gc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fr extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ph extends on{constructor(e,t,i,s,r,o,a,l,c,u=Os){if(u!==Os&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Os&&(i=rs),i===void 0&&u===Xs&&(i=$s),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jc extends kn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],p=[],_=[];let v=0;const g=[],m=i/2;let h=0;b(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new _n(d,3)),this.setAttribute("normal",new _n(p,3)),this.setAttribute("uv",new _n(_,2));function b(){const M=new K,L=new K;let I=0;const C=(t-e)/i;for(let w=0;w<=r;w++){const A=[],E=w/r,D=E*(t-e)+e;for(let X=0;X<=s;X++){const k=X/s,V=k*l+a,Z=Math.sin(V),G=Math.cos(V);L.x=D*Z,L.y=-E*i+m,L.z=D*G,d.push(L.x,L.y,L.z),M.set(Z,C,G).normalize(),p.push(M.x,M.y,M.z),_.push(k,1-E),A.push(v++)}g.push(A)}for(let w=0;w<s;w++)for(let A=0;A<r;A++){const E=g[A][w],D=g[A+1][w],X=g[A+1][w+1],k=g[A][w+1];(e>0||A!==0)&&(u.push(E,D,k),I+=3),(t>0||A!==r-1)&&(u.push(D,X,k),I+=3)}c.addGroup(h,I,0),h+=I}function R(M){const L=v,I=new vt,C=new K;let w=0;const A=M===!0?e:t,E=M===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,m*E,0),p.push(0,E,0),_.push(.5,.5),v++;const D=v;for(let X=0;X<=s;X++){const V=X/s*l+a,Z=Math.cos(V),G=Math.sin(V);C.x=A*G,C.y=m*E,C.z=A*Z,d.push(C.x,C.y,C.z),p.push(0,E,0),I.x=Z*.5+.5,I.y=G*.5*E+.5,_.push(I.x,I.y),v++}for(let X=0;X<s;X++){const k=L+X,V=D+X;M===!0?u.push(V,V+1,k):u.push(V+1,V,k),w+=3}c.addGroup(h,w,M===!0?1:2),h+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,p=t/l,_=[],v=[],g=[],m=[];for(let h=0;h<u;h++){const b=h*p-o;for(let R=0;R<c;R++){const M=R*d-r;v.push(M,-b,0),g.push(0,0,1),m.push(R/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const R=b+c*h,M=b+c*(h+1),L=b+1+c*(h+1),I=b+1+c*h;_.push(R,M,I),_.push(M,L,I)}this.setIndex(_),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zo extends kn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new K,p=new K,_=[],v=[],g=[],m=[];for(let h=0;h<=i;h++){const b=[],R=h/i;let M=0;h===0&&o===0?M=.5/t:h===i&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const I=L/t;d.x=-e*Math.cos(s+I*r)*Math.sin(o+R*a),d.y=e*Math.cos(o+R*a),d.z=e*Math.sin(s+I*r)*Math.sin(o+R*a),v.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(I+M,1-R),b.push(c++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<t;b++){const R=u[h][b+1],M=u[h][b],L=u[h+1][b],I=u[h+1][b+1];(h!==0||o>0)&&_.push(R,M,I),(h!==i-1||l<Math.PI)&&_.push(M,L,I)}this.setIndex(_),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hv extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vv extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gv extends Ah{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wv extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function ld(n,e,t,i){const s=$v(i);switch(t){case ch:return n*e;case dh:return n*e;case fh:return n*e*2;case hh:return n*e/s.components*s.byteLength;case Xc:return n*e/s.components*s.byteLength;case ph:return n*e*2/s.components*s.byteLength;case qc:return n*e*2/s.components*s.byteLength;case uh:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Yc:return n*e*4/s.components*s.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Gl:case $l:return Math.max(n,8)*Math.max(e,8)/2;case ql:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case uc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mh:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $v(n){switch(n){case vi:case oh:return{byteLength:1,components:1};case wr:case ah:case Lr:return{byteLength:2,components:1};case Wc:case $c:return{byteLength:2,components:4};case rs:case Gc:case fi:return{byteLength:4,components:1};case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((_,v)=>_.start-v.start);let p=0;for(let _=1;_<d.length;_++){const v=d[p],g=d[_];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++p,d[p]=g)}d.length=p+1;for(let _=0,v=d.length;_<v;_++){const g=d[_];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qv=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,$0=`struct PhysicalMaterial {
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
}`,X0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dx=`float getShadowMask() {
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,ey=`#define DISTANCE
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
}`,ty=`#define DISTANCE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`uniform float scale;
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
}`,ry=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ay=`uniform vec3 diffuse;
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
}`,ly=`#define LAMBERT
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
}`,cy=`#define LAMBERT
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
}`,uy=`#define MATCAP
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
}`,dy=`#define MATCAP
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
}`,fy=`#define NORMAL
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
}`,hy=`#define NORMAL
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
}`,py=`#define PHONG
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
}`,my=`#define PHONG
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
}`,gy=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,vy=`#define TOON
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
}`,xy=`#define TOON
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
}`,yy=`uniform float size;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,by=`uniform vec3 color;
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
}`,Ey=`uniform float rotation;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:qv,alphahash_pars_fragment:Yv,alphamap_fragment:jv,alphamap_pars_fragment:Kv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:Qv,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:h0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:v0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:S0,emissivemap_pars_fragment:M0,colorspace_fragment:b0,colorspace_pars_fragment:E0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:w0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:D0,fog_fragment:L0,fog_pars_fragment:I0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:N0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:z0,lights_toon_pars_fragment:H0,lights_phong_fragment:V0,lights_phong_pars_fragment:G0,lights_physical_fragment:W0,lights_physical_pars_fragment:$0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:dx,normal_pars_fragment:fx,normal_pars_vertex:hx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:vx,iridescence_pars_fragment:xx,opaque_fragment:yx,packing:Sx,premultiplied_alpha_fragment:Mx,project_vertex:bx,dithering_fragment:Ex,dithering_pars_fragment:Tx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Dx,skinbase_vertex:Lx,skinning_pars_vertex:Ix,skinning_vertex:Ux,skinnormal_vertex:Nx,specularmap_fragment:Fx,specularmap_pars_fragment:Ox,tonemapping_fragment:Bx,tonemapping_pars_fragment:kx,transmission_fragment:zx,transmission_pars_fragment:Hx,uv_pars_fragment:Vx,uv_pars_vertex:Gx,uv_vertex:Wx,worldpos_vertex:$x,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:jx,cube_vert:Kx,cube_frag:Zx,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:sy,linedashed_frag:ry,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:cy,meshmatcap_vert:uy,meshmatcap_frag:dy,meshnormal_vert:fy,meshnormal_frag:hy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:_y,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:yy,points_frag:Sy,shadow_vert:My,shadow_frag:by,sprite_vert:Ey,sprite_frag:Ty},Re={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},$n={basic:{uniforms:Kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Kt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Kt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Kt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Kt([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Kt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Kt([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Kt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Kt([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Kt([Re.common,Re.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Kt([Re.lights,Re.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};$n.physical={uniforms:Kt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const yo={r:0,b:0,g:0},Wi=new xi,Ay=new Pt;function wy(n,e,t,i,s,r,o){const a=new mt(0);let l=r===!0?0:1,c,u,d=null,p=0,_=null;function v(R){let M=R.isScene===!0?R.background:null;return M&&M.isTexture&&(M=(R.backgroundBlurriness>0?t:e).get(M)),M}function g(R){let M=!1;const L=v(R);L===null?h(a,l):L&&L.isColor&&(h(L,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,M){const L=v(M);L&&(L.isCubeTexture||L.mapping===fa)?(u===void 0&&(u=new Tn(new Or(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ys($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Wi.copy(M.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(Wi)),u.material.toneMapped=ct.getTransfer(L.colorSpace)!==_t,(d!==L||p!==L.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,p=L.version,_=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Tn(new pa(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ys($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(L.colorSpace)!==_t,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||p!==L.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,d=L,p=L.version,_=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function h(R,M){R.getRGB(yo,Th(n)),i.buffers.color.setClear(yo.r,yo.g,yo.b,M,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(R,M=1){a.set(R),l=M,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,h(a,l)},render:g,addToRenderList:m,dispose:b}}function Ry(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(E,D,X,k,V){let Z=!1;const G=d(k,X,D);r!==G&&(r=G,c(r.object)),Z=_(E,k,X,V),Z&&v(E,k,X,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(E,D,X,k),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,D,X){const k=X.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let Z=V[D.id];Z===void 0&&(Z={},V[D.id]=Z);let G=Z[k];return G===void 0&&(G=p(l()),Z[k]=G),G}function p(E){const D=[],X=[],k=[];for(let V=0;V<t;V++)D[V]=0,X[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:k,object:E,attributes:{},index:null}}function _(E,D,X,k){const V=r.attributes,Z=D.attributes;let G=0;const te=X.getAttributes();for(const z in te)if(te[z].location>=0){const Me=V[z];let ve=Z[z];if(ve===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),Me===void 0||Me.attribute!==ve||ve&&Me.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function v(E,D,X,k){const V={},Z=D.attributes;let G=0;const te=X.getAttributes();for(const z in te)if(te[z].location>=0){let Me=Z[z];Me===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor));const ve={};ve.attribute=Me,Me&&Me.data&&(ve.data=Me.data),V[z]=ve,G++}r.attributes=V,r.attributesNum=G,r.index=k}function g(){const E=r.newAttributes;for(let D=0,X=E.length;D<X;D++)E[D]=0}function m(E){h(E,0)}function h(E,D){const X=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;X[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),V[E]!==D&&(n.vertexAttribDivisor(E,D),V[E]=D)}function b(){const E=r.newAttributes,D=r.enabledAttributes;for(let X=0,k=D.length;X<k;X++)D[X]!==E[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function R(E,D,X,k,V,Z,G){G===!0?n.vertexAttribIPointer(E,D,X,V,Z):n.vertexAttribPointer(E,D,X,k,V,Z)}function M(E,D,X,k){g();const V=k.attributes,Z=X.getAttributes(),G=D.defaultAttributeValues;for(const te in Z){const z=Z[te];if(z.location>=0){let _e=V[te];if(_e===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor)),_e!==void 0){const Me=_e.normalized,ve=_e.itemSize,we=e.get(_e);if(we===void 0)continue;const Oe=we.buffer,ne=we.type,ge=we.bytesPerElement,Ee=ne===n.INT||ne===n.UNSIGNED_INT||_e.gpuType===Gc;if(_e.isInterleavedBufferAttribute){const ie=_e.data,Le=ie.stride,He=_e.offset;if(ie.isInstancedInterleavedBuffer){for(let je=0;je<z.locationSize;je++)h(z.location+je,ie.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let je=0;je<z.locationSize;je++)m(z.location+je);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let je=0;je<z.locationSize;je++)R(z.location+je,ve/z.locationSize,ne,Me,Le*ge,(He+ve/z.locationSize*je)*ge,Ee)}else{if(_e.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)h(z.location+ie,_e.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ie=0;ie<z.locationSize;ie++)m(z.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ie=0;ie<z.locationSize;ie++)R(z.location+ie,ve/z.locationSize,ne,Me,ve*ge,ve/z.locationSize*ie*ge,Ee)}}else if(G!==void 0){const Me=G[te];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(z.location,Me);break;case 3:n.vertexAttrib3fv(z.location,Me);break;case 4:n.vertexAttrib4fv(z.location,Me);break;default:n.vertexAttrib1fv(z.location,Me)}}}}b()}function L(){w();for(const E in i){const D=i[E];for(const X in D){const k=D[X];for(const V in k)u(k[V].object),delete k[V];delete D[X]}delete i[E]}}function I(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const X in D){const k=D[X];for(const V in k)u(k[V].object),delete k[V];delete D[X]}delete i[E.id]}function C(E){for(const D in i){const X=i[D];if(X[E.id]===void 0)continue;const k=X[E.id];for(const V in k)u(k[V].object),delete k[V];delete X[E.id]}}function w(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Cy(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,i,1)}function l(c,u,d,p){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],u[v],p[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*p[g];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Py(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!w)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,vertexTextures:L,maxSamples:I}}function Dy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new qi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const _=d.length!==0||p||i!==0||s;return s=p,i=d.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,_){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,R=b*4;let M=h.clippingState||null;l.value=M,M=u(v,p,R,_);for(let L=0;L!==R;++L)M[L]=t[L];h.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,_,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=_+g*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let R=0,M=_;R!==g;++R,M+=4)o.copy(d[R]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ly(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Gs:a===zl&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===zl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ps=4,cd=[.125,.215,.35,.446,.526,.582],Ji=20,sl=new Gv,ud=new mt;let rl=null,ol=0,al=0,ll=!1;const Yi=(1+Math.sqrt(5))/2,As=1/Yi,dd=[new K(-Yi,As,0),new K(Yi,As,0),new K(-As,0,Yi),new K(As,0,Yi),new K(0,Yi,-As),new K(0,Yi,As),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=ll,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Lr,format:Un,colorSpace:qs,depthBuffer:!1},s=hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Uy(r,e,t)}return s}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,s){const a=new En(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ud),u.toneMapping=Li,u.autoClear=!1;const _=new Sr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Tn(new Or,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(ud),g=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):b===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const R=this._cubeSize;So(s,b*R,h>2?R:0,R,R),u.setRenderTarget(s),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Gs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;So(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dd[(s-r-1)%dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Tn(this._lodPlanes[s],c),p=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Ji-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const h=[];let b=0;for(let C=0;C<Ji;++C){const w=C/g,A=Math.exp(-w*w/2);h.push(A),C===0?b+=A:C<m&&(b+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:R}=this;p.dTheta.value=v,p.mipInt.value=R-i;const M=this._sizeLods[s],L=3*M*(s>R-Ps?s-R+Ps:0),I=4*(this._cubeSize-M);So(t,L,I,3*M,2*M),l.setRenderTarget(t),l.render(d,sl)}}function Iy(n){const e=[],t=[],i=[];let s=n;const r=n-Ps+1+cd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ps?l=cd[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,v=6,g=3,m=2,h=1,b=new Float32Array(g*v*_),R=new Float32Array(m*v*_),M=new Float32Array(h*v*_);for(let I=0;I<_;I++){const C=I%3*2/3-1,w=I>2?0:-1,A=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];b.set(A,g*v*I),R.set(p,m*v*I);const E=[I,I,I,I,I,I];M.set(E,h*v*I)}const L=new kn;L.setAttribute("position",new wn(b,g)),L.setAttribute("uv",new wn(R,m)),L.setAttribute("faceIndex",new wn(M,h)),e.push(L),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hd(n,e,t){const i=new os(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Uy(n,e,t){const i=new Float32Array(Ji),s=new K(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function pd(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function md(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function Ny(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===zl,u=l===Gs||l===Ws;if(c||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new fd(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const _=a.image;return c&&_&&_.height>0||u&&_&&s(_)?(t===null&&(t=new fd(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Cs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Oy(n,e,t,i){const s={},r=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete s[p.id];const _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER)}function c(d){const p=[],_=d.index,v=d.attributes.position;let g=0;if(_!==null){const b=_.array;g=_.version;for(let R=0,M=b.length;R<M;R+=3){const L=b[R+0],I=b[R+1],C=b[R+2];p.push(L,I,I,C,C,L)}}else if(v!==void 0){const b=v.array;g=v.version;for(let R=0,M=b.length/3-1;R<M;R+=3){const L=R+0,I=R+1,C=R+2;p.push(L,I,I,C,C,L)}}else return;const m=new(_h(p)?Eh:bh)(p,1);m.version=g;const h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){const p=r.get(d);if(p){const _=d.index;_!==null&&p.version<_.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function By(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,_){n.drawElements(i,_,r,p*o),t.update(_,i,1)}function c(p,_,v){v!==0&&(n.drawElementsInstanced(i,_,r,p*o,v),t.update(_,i,v))}function u(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,r,p,0,v);let m=0;for(let h=0;h<v;h++)m+=_[h];t.update(m,i,1)}function d(p,_,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/o,_[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,r,p,0,g,0,v);let h=0;for(let b=0;b<v;b++)h+=_[b]*g[b];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ky(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function zy(n,e,t){const i=new WeakMap,s=new Ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let E=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var _=E;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let L=a.attributes.position.count*M,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*I*4*d),w=new xh(C,L,I,d);w.type=fi,w.needsUpdate=!0;const A=M*4;for(let D=0;D<d;D++){const X=h[D],k=b[D],V=R[D],Z=L*I*4*D;for(let G=0;G<X.count;G++){const te=G*A;v===!0&&(s.fromBufferAttribute(X,G),C[Z+te+0]=s.x,C[Z+te+1]=s.y,C[Z+te+2]=s.z,C[Z+te+3]=0),g===!0&&(s.fromBufferAttribute(k,G),C[Z+te+4]=s.x,C[Z+te+5]=s.y,C[Z+te+6]=s.z,C[Z+te+7]=0),m===!0&&(s.fromBufferAttribute(V,G),C[Z+te+8]=s.x,C[Z+te+9]=s.y,C[Z+te+10]=s.z,C[Z+te+11]=V.itemSize===4?s.w:1)}}p={count:d,texture:w,size:new vt(L,I)},i.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Hy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Lh=new on,gd=new Ph(1,1),Ih=new xh,Uh=new yv,Nh=new wh,_d=[],vd=[],xd=new Float32Array(16),yd=new Float32Array(9),Sd=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function Xy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),Ft(t,i)}}function qy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;yd.set(i),n.uniformMatrix3fv(this.addr,!1,yd),Ft(t,i)}}function Yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;xd.set(i),n.uniformMatrix4fv(this.addr,!1,xd),Ft(t,i)}}function jy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function Qy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function iS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gd.compareFunction=gh,r=gd):r=Lh,t.setTexture2D(e||r,s)}function sS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uh,s)}function rS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nh,s)}function oS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ih,s)}function aS(n){switch(n){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return $y;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return jy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}function lS(n,e){n.uniform1fv(this.addr,e)}function cS(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function uS(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function dS(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function fS(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hS(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pS(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mS(n,e){n.uniform1iv(this.addr,e)}function gS(n,e){n.uniform2iv(this.addr,e)}function _S(n,e){n.uniform3iv(this.addr,e)}function vS(n,e){n.uniform4iv(this.addr,e)}function xS(n,e){n.uniform1uiv(this.addr,e)}function yS(n,e){n.uniform2uiv(this.addr,e)}function SS(n,e){n.uniform3uiv(this.addr,e)}function MS(n,e){n.uniform4uiv(this.addr,e)}function bS(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lh,r[o])}function ES(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Uh,r[o])}function TS(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Nh,r[o])}function AS(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ih,r[o])}function wS(n){switch(n){case 5126:return lS;case 35664:return cS;case 35665:return uS;case 35666:return dS;case 35674:return fS;case 35675:return hS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return vS;case 5125:return xS;case 36294:return yS;case 36295:return SS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return AS}}class RS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aS(t.type)}}class CS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wS(t.type)}}class PS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Md(n,e){n.seq.push(e),n.map[e.id]=e}function DS(n,e,t){const i=n.name,s=i.length;for(cl.lastIndex=0;;){const r=cl.exec(i),o=cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Md(t,c===void 0?new RS(a,n,e):new CS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new PS(a),Md(t,d)),t=d}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);DS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function bd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LS=37297;let IS=0;function US(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ed=new nt;function NS(n){ct._getMatrix(Ed,ct.workingColorSpace,n);const e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Yo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Td(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+US(n.getShaderSource(e),o)}else return s}function FS(n,e){const t=NS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function OS(n,e){let t;switch(e){case $_:t="Linear";break;case X_:t="Reinhard";break;case q_:t="Cineon";break;case Y_:t="ACESFilmic";break;case K_:t="AgX";break;case Z_:t="Neutral";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new K;function BS(){ct.getLuminanceCoefficients(Mo);const n=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function zS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hr(n){return n!==""}function Ad(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(n){return n.replace(VS,WS)}const GS=new Map;function WS(n,e){let t=it[e];if(t===void 0){const i=GS.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}const $S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace($S,XS)}function XS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function YS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function KS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case G_:e="ENVMAP_BLENDING_MIX";break;case W_:e="ENVMAP_BLENDING_ADD";break}return e}function ZS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function JS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qS(t),c=YS(t),u=jS(t),d=KS(t),p=ZS(t),_=kS(t),v=zS(r),g=s.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(hr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(hr).join(`
`),h.length>0&&(h+=`
`)):(m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),h=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?it.tonemapping_pars_fragment:"",t.toneMapping!==Li?OS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),BS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=_c(o),o=Ad(o,t),o=wd(o,t),a=_c(a),a=Ad(a,t),a=wd(a,t),o=Rd(o),a=Rd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=b+m+o,M=b+h+a,L=bd(s,s.VERTEX_SHADER,R),I=bd(s,s.FRAGMENT_SHADER,M);s.attachShader(g,L),s.attachShader(g,I),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(D){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(I).trim();let Z=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,L,I);else{const te=Td(s,L,"vertex"),z=Td(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+te+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||V==="")&&(G=!1);G&&(D.diagnostics={runnable:Z,programLog:X,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:h}})}s.deleteShader(L),s.deleteShader(I),w=new Uo(s,g),A=HS(s,g)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(g,LS)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=I,this}let QS=0;class eM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tM(e),t.set(e,i)),i}}class tM{constructor(e){this.id=QS++,this.code=e,this.usedTimes=0}}function nM(n,e,t,i,s,r,o){const a=new Sh,l=new eM,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let _=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,D,X,k){const V=X.fog,Z=k.geometry,G=A.isMeshStandardMaterial?X.environment:null,te=(A.isMeshStandardMaterial?t:e).get(A.envMap||G),z=te&&te.mapping===fa?te.image.height:null,_e=v[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=Me!==void 0?Me.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let Oe,ne,ge,Ee;if(_e){const at=$n[_e];Oe=at.vertexShader,ne=at.fragmentShader}else Oe=A.vertexShader,ne=A.fragmentShader,l.update(A),ge=l.getVertexShaderID(A),Ee=l.getFragmentShaderID(A);const ie=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,je=k.isBatchedMesh===!0,ke=!!A.map,P=!!A.matcap,N=!!te,T=!!A.aoMap,ue=!!A.lightMap,J=!!A.bumpMap,ee=!!A.normalMap,se=!!A.displacementMap,fe=!!A.emissiveMap,Q=!!A.metalnessMap,S=!!A.roughnessMap,x=A.anisotropy>0,U=A.clearcoat>0,$=A.dispersion>0,Y=A.iridescence>0,j=A.sheen>0,Se=A.transmission>0,he=x&&!!A.anisotropyMap,ye=U&&!!A.clearcoatMap,Be=U&&!!A.clearcoatNormalMap,pe=U&&!!A.clearcoatRoughnessMap,Ae=Y&&!!A.iridescenceMap,Ne=Y&&!!A.iridescenceThicknessMap,We=j&&!!A.sheenColorMap,be=j&&!!A.sheenRoughnessMap,Xe=!!A.specularMap,Ke=!!A.specularColorMap,ut=!!A.specularIntensityMap,B=Se&&!!A.transmissionMap,Ce=Se&&!!A.thicknessMap,re=!!A.gradientMap,de=!!A.alphaMap,De=A.alphaTest>0,Pe=!!A.alphaHash,Qe=!!A.extensions;let St=Li;A.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=n.toneMapping);const Ot={shaderID:_e,shaderType:A.type,shaderName:A.name,vertexShader:Oe,fragmentShader:ne,defines:A.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:je,batchingColor:je&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:qs,alphaToCoverage:!!A.alphaToCoverage,map:ke,matcap:P,envMap:N,envMapMode:N&&te.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:ue,bumpMap:J,normalMap:ee,displacementMap:p&&se,emissiveMap:fe,normalMapObjectSpace:ee&&A.normalMapType===nv,normalMapTangentSpace:ee&&A.normalMapType===tv,metalnessMap:Q,roughnessMap:S,anisotropy:x,anisotropyMap:he,clearcoat:U,clearcoatMap:ye,clearcoatNormalMap:Be,clearcoatRoughnessMap:pe,dispersion:$,iridescence:Y,iridescenceMap:Ae,iridescenceThicknessMap:Ne,sheen:j,sheenColorMap:We,sheenRoughnessMap:be,specularMap:Xe,specularColorMap:Ke,specularIntensityMap:ut,transmission:Se,transmissionMap:B,thicknessMap:Ce,gradientMap:re,opaque:A.transparent===!1&&A.blending===Fs&&A.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:Pe,combine:A.combine,mapUv:ke&&g(A.map.channel),aoMapUv:T&&g(A.aoMap.channel),lightMapUv:ue&&g(A.lightMap.channel),bumpMapUv:J&&g(A.bumpMap.channel),normalMapUv:ee&&g(A.normalMap.channel),displacementMapUv:se&&g(A.displacementMap.channel),emissiveMapUv:fe&&g(A.emissiveMap.channel),metalnessMapUv:Q&&g(A.metalnessMap.channel),roughnessMapUv:S&&g(A.roughnessMap.channel),anisotropyMapUv:he&&g(A.anisotropyMap.channel),clearcoatMapUv:ye&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(A.sheenRoughnessMap.channel),specularMapUv:Xe&&g(A.specularMap.channel),specularColorMapUv:Ke&&g(A.specularColorMap.channel),specularIntensityMapUv:ut&&g(A.specularIntensityMap.channel),transmissionMapUv:B&&g(A.transmissionMap.channel),thicknessMapUv:Ce&&g(A.thicknessMap.channel),alphaMapUv:de&&g(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ee||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(ke||de),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Le,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:ke&&A.map.isVideoTexture===!0&&ct.getTransfer(A.map.colorSpace)===_t,decodeVideoTextureEmissive:fe&&A.emissiveMap.isVideoTexture===!0&&ct.getTransfer(A.emissiveMap.colorSpace)===_t,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===di,flipSided:A.side===rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Qe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&A.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function h(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)E.push(D),E.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(b(E,A),R(E,A),E.push(n.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function b(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function R(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const E=v[A.type];let D;if(E){const X=$n[E];D=Lv.clone(X.uniforms)}else D=A.uniforms;return D}function L(A,E){let D;for(let X=0,k=u.length;X<k;X++){const V=u[X];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new JS(n,E,A,r),u.push(D)),D}function I(A){if(--A.usedTimes===0){const E=u.indexOf(A);u[E]=u[u.length-1],u.pop(),A.destroy()}}function C(A){l.remove(A)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:L,releaseProgram:I,releaseShaderCache:C,programs:u,dispose:w}}function iM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function sM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,p,_,v,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:_,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=_,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,p,_,v,g,m){const h=o(d,p,_,v,g,m);_.transmission>0?i.push(h):_.transparent===!0?s.push(h):t.push(h)}function l(d,p,_,v,g,m){const h=o(d,p,_,v,g,m);_.transmission>0?i.unshift(h):_.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||sM),i.length>1&&i.sort(p||Pd),s.length>1&&s.sort(p||Pd)}function u(){for(let d=e,p=n.length;d<p;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function rM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Dd,n.set(i,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function oM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new mt};break;case"SpotLight":t={position:new K,direction:new K,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function aM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lM=0;function cM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uM(n){const e=new oM,t=aM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,r=new Pt,o=new Pt;function a(c){let u=0,d=0,p=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let _=0,v=0,g=0,m=0,h=0,b=0,R=0,M=0,L=0,I=0,C=0;c.sort(cM);for(let A=0,E=c.length;A<E;A++){const D=c[A],X=D.color,k=D.intensity,V=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*k,d+=X.g*k,p+=X.b*k;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],k);C++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,i.directionalShadow[_]=z,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=D.shadow.matrix,b++}i.directional[_]=G,_++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(X).multiplyScalar(k),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[g]=G;const te=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,te.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[g]=te.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,i.spotShadow[g]=z,i.spotShadowMap[g]=Z,M++}g++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(X).multiplyScalar(k),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=D.shadow.matrix,R++}i.point[v]=G,v++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(k),G.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const w=i.hash;(w.directionalLength!==_||w.pointLength!==v||w.spotLength!==g||w.rectAreaLength!==m||w.hemiLength!==h||w.numDirectionalShadows!==b||w.numPointShadows!==R||w.numSpotShadows!==M||w.numSpotMaps!==L||w.numLightProbes!==C)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=M+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,w.directionalLength=_,w.pointLength=v,w.spotLength=g,w.rectAreaLength=m,w.hemiLength=h,w.numDirectionalShadows=b,w.numPointShadows=R,w.numSpotShadows=M,w.numSpotMaps=L,w.numLightProbes=C,i.version=lM++)}function l(c,u){let d=0,p=0,_=0,v=0,g=0;const m=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const R=c[h];if(R.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(R.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(R.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(R.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),p++}else if(R.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Ld(n){const e=new uM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ld(n),e.set(s,[a])):r>=o.length?(a=new Ld(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`;function pM(n,e,t){let i=new Rh;const s=new vt,r=new vt,o=new Ct,a=new Hv({depthPacking:ev}),l=new Vv,c={},u=t.maxTextureSize,d={[Ui]:rn,[rn]:Ui,[di]:di},p=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:fM,fragmentShader:hM}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tn(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let h=this.type;this.render=function(I,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const A=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Di),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=h!==ri&&this.type===ri,V=h===ri&&this.type!==ri;for(let Z=0,G=I.length;Z<G;Z++){const te=I[Z],z=te.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const _e=z.getFrameExtents();if(s.multiply(_e),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,z.mapSize.y=r.y)),z.map===null||k===!0||V===!0){const ve=this.type!==ri?{minFilter:Fn,magFilter:Fn}:{};z.map!==null&&z.map.dispose(),z.map=new os(s.x,s.y,ve),z.map.texture.name=te.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Me=z.getViewportCount();for(let ve=0;ve<Me;ve++){const we=z.getViewport(ve);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),X.viewport(o),z.updateMatrices(te,ve),i=z.getFrustum(),M(C,w,z.camera,te,this.type)}z.isPointLightShadow!==!0&&this.type===ri&&b(z,w),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(A,E,D)};function b(I,C){const w=e.update(g);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new os(s.x,s.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(C,null,w,p,g,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(C,null,w,_,g,null)}function R(I,C,w,A){let E=null;const D=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)E=D;else if(E=w.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=E.uuid,k=C.uuid;let V=c[X];V===void 0&&(V={},c[X]=V);let Z=V[k];Z===void 0&&(Z=E.clone(),V[k]=Z,C.addEventListener("dispose",L)),E=Z}if(E.visible=C.visible,E.wireframe=C.wireframe,A===ri?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=n.properties.get(E);X.light=w}return E}function M(I,C,w,A,E){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===ri)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const k=e.update(I),V=I.material;if(Array.isArray(V)){const Z=k.groups;for(let G=0,te=Z.length;G<te;G++){const z=Z[G],_e=V[z.materialIndex];if(_e&&_e.visible){const Me=R(I,_e,A,E);I.onBeforeShadow(n,I,C,w,k,Me,z),n.renderBufferDirect(w,null,k,Me,I,z),I.onAfterShadow(n,I,C,w,k,Me,z)}}}else if(V.visible){const Z=R(I,V,A,E);I.onBeforeShadow(n,I,C,w,k,Z,null),n.renderBufferDirect(w,null,k,Z,I,null),I.onAfterShadow(n,I,C,w,k,Z,null)}}const X=I.children;for(let k=0,V=X.length;k<V;k++)M(X[k],C,w,A,E)}function L(I){I.target.removeEventListener("dispose",L);for(const w in c){const A=c[w],E=I.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const mM={[Ll]:Il,[Ul]:Ol,[Nl]:Bl,[Vs]:Fl,[Il]:Ll,[Ol]:Ul,[Bl]:Nl,[Fl]:Vs};function gM(n,e){function t(){let B=!1;const Ce=new Ct;let re=null;const de=new Ct(0,0,0,0);return{setMask:function(De){re!==De&&!B&&(n.colorMask(De,De,De,De),re=De)},setLocked:function(De){B=De},setClear:function(De,Pe,Qe,St,Ot){Ot===!0&&(De*=St,Pe*=St,Qe*=St),Ce.set(De,Pe,Qe,St),de.equals(Ce)===!1&&(n.clearColor(De,Pe,Qe,St),de.copy(Ce))},reset:function(){B=!1,re=null,de.set(-1,0,0,0)}}}function i(){let B=!1,Ce=!1,re=null,de=null,De=null;return{setReversed:function(Pe){if(Ce!==Pe){const Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const St=De;De=null,this.setClear(St)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?ie(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!B&&(n.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(Ce&&(Pe=mM[Pe]),de!==Pe){switch(Pe){case Ll:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case Nl:n.depthFunc(n.EQUAL);break;case Fl:n.depthFunc(n.GEQUAL);break;case Ol:n.depthFunc(n.GREATER);break;case Bl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Pe}},setLocked:function(Pe){B=Pe},setClear:function(Pe){De!==Pe&&(Ce&&(Pe=1-Pe),n.clearDepth(Pe),De=Pe)},reset:function(){B=!1,re=null,de=null,De=null,Ce=!1}}}function s(){let B=!1,Ce=null,re=null,de=null,De=null,Pe=null,Qe=null,St=null,Ot=null;return{setTest:function(at){B||(at?ie(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(at){Ce!==at&&!B&&(n.stencilMask(at),Ce=at)},setFunc:function(at,un,Rn){(re!==at||de!==un||De!==Rn)&&(n.stencilFunc(at,un,Rn),re=at,de=un,De=Rn)},setOp:function(at,un,Rn){(Pe!==at||Qe!==un||St!==Rn)&&(n.stencilOp(at,un,Rn),Pe=at,Qe=un,St=Rn)},setLocked:function(at){B=at},setClear:function(at){Ot!==at&&(n.clearStencil(at),Ot=at)},reset:function(){B=!1,Ce=null,re=null,de=null,De=null,Pe=null,Qe=null,St=null,Ot=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,_=[],v=null,g=!1,m=null,h=null,b=null,R=null,M=null,L=null,I=null,C=new mt(0,0,0),w=0,A=!1,E=null,D=null,X=null,k=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=te>=1):z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=te>=2);let _e=null,Me={};const ve=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Oe=new Ct().fromArray(ve),ne=new Ct().fromArray(we);function ge(B,Ce,re,de){const De=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(B,Pe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<re;Qe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Pe}const Ee={};Ee[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Vs),J(!1),ee(Ou),ie(n.CULL_FACE),T(Di);function ie(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Le(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function He(B,Ce){return d[B]!==Ce?(n.bindFramebuffer(B,Ce),d[B]=Ce,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function je(B,Ce){let re=_,de=!1;if(B){re=p.get(Ce),re===void 0&&(re=[],p.set(Ce,re));const De=B.textures;if(re.length!==De.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Qe=De.length;Pe<Qe;Pe++)re[Pe]=n.COLOR_ATTACHMENT0+Pe;re.length=De.length,de=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,de=!0);de&&n.drawBuffers(re)}function ke(B){return v!==B?(n.useProgram(B),v=B,!0):!1}const P={[Zi]:n.FUNC_ADD,[A_]:n.FUNC_SUBTRACT,[w_]:n.FUNC_REVERSE_SUBTRACT};P[R_]=n.MIN,P[C_]=n.MAX;const N={[P_]:n.ZERO,[D_]:n.ONE,[L_]:n.SRC_COLOR,[Pl]:n.SRC_ALPHA,[B_]:n.SRC_ALPHA_SATURATE,[F_]:n.DST_COLOR,[U_]:n.DST_ALPHA,[I_]:n.ONE_MINUS_SRC_COLOR,[Dl]:n.ONE_MINUS_SRC_ALPHA,[O_]:n.ONE_MINUS_DST_COLOR,[N_]:n.ONE_MINUS_DST_ALPHA,[k_]:n.CONSTANT_COLOR,[z_]:n.ONE_MINUS_CONSTANT_COLOR,[H_]:n.CONSTANT_ALPHA,[V_]:n.ONE_MINUS_CONSTANT_ALPHA};function T(B,Ce,re,de,De,Pe,Qe,St,Ot,at){if(B===Di){g===!0&&(Le(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),B!==T_){if(B!==m||at!==A){if((h!==Zi||M!==Zi)&&(n.blendEquation(n.FUNC_ADD),h=Zi,M=Zi),at)switch(B){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.ONE,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ku:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,R=null,L=null,I=null,C.set(0,0,0),w=0,m=B,A=at}return}De=De||Ce,Pe=Pe||re,Qe=Qe||de,(Ce!==h||De!==M)&&(n.blendEquationSeparate(P[Ce],P[De]),h=Ce,M=De),(re!==b||de!==R||Pe!==L||Qe!==I)&&(n.blendFuncSeparate(N[re],N[de],N[Pe],N[Qe]),b=re,R=de,L=Pe,I=Qe),(St.equals(C)===!1||Ot!==w)&&(n.blendColor(St.r,St.g,St.b,Ot),C.copy(St),w=Ot),m=B,A=!1}function ue(B,Ce){B.side===di?Le(n.CULL_FACE):ie(n.CULL_FACE);let re=B.side===rn;Ce&&(re=!re),J(re),B.blending===Fs&&B.transparent===!1?T(Di):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const de=B.stencilWrite;a.setTest(de),de&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){E!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),E=B)}function ee(B){B!==M_?(ie(n.CULL_FACE),B!==D&&(B===Ou?n.cullFace(n.BACK):B===b_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),D=B}function se(B){B!==X&&(G&&n.lineWidth(B),X=B)}function fe(B,Ce,re){B?(ie(n.POLYGON_OFFSET_FILL),(k!==Ce||V!==re)&&(n.polygonOffset(Ce,re),k=Ce,V=re)):Le(n.POLYGON_OFFSET_FILL)}function Q(B){B?ie(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function S(B){B===void 0&&(B=n.TEXTURE0+Z-1),_e!==B&&(n.activeTexture(B),_e=B)}function x(B,Ce,re){re===void 0&&(_e===null?re=n.TEXTURE0+Z-1:re=_e);let de=Me[re];de===void 0&&(de={type:void 0,texture:void 0},Me[re]=de),(de.type!==B||de.texture!==Ce)&&(_e!==re&&(n.activeTexture(re),_e=re),n.bindTexture(B,Ce||Ee[B]),de.type=B,de.texture=Ce)}function U(){const B=Me[_e];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(B){Oe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Oe.copy(B))}function be(B){ne.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function Xe(B,Ce){let re=c.get(Ce);re===void 0&&(re=new WeakMap,c.set(Ce,re));let de=re.get(B);de===void 0&&(de=n.getUniformBlockIndex(Ce,B.name),re.set(B,de))}function Ke(B,Ce){const de=c.get(Ce).get(B);l.get(Ce)!==de&&(n.uniformBlockBinding(Ce,de,B.__bindingPointIndex),l.set(Ce,de))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_e=null,Me={},d={},p=new WeakMap,_=[],v=null,g=!1,m=null,h=null,b=null,R=null,M=null,L=null,I=null,C=new mt(0,0,0),w=0,A=!1,E=null,D=null,X=null,k=null,V=null,Oe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Le,bindFramebuffer:He,drawBuffers:je,useProgram:ke,setBlending:T,setMaterial:ue,setFlipSided:J,setCullFace:ee,setLineWidth:se,setPolygonOffset:fe,setScissorTest:Q,activeTexture:S,bindTexture:x,unbindTexture:U,compressedTexImage2D:$,compressedTexImage3D:Y,texImage2D:Ae,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:Ke,texStorage2D:Be,texStorage3D:pe,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:We,viewport:be,reset:ut}}function _M(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return _?new OffscreenCanvas(S,x):Ko("canvas")}function g(S,x,U){let $=1;const Y=Q(S);if((Y.width>U||Y.height>U)&&($=U/Math.max(Y.width,Y.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const j=Math.floor($*Y.width),Se=Math.floor($*Y.height);d===void 0&&(d=v(j,Se));const he=x?v(j,Se):d;return he.width=j,he.height=Se,he.getContext("2d").drawImage(S,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+j+"x"+Se+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(S,x,U,$,Y=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=x;if(x===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),x===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RG8UI),U===n.UNSIGNED_SHORT&&(j=n.RG16UI),U===n.UNSIGNED_INT&&(j=n.RG32UI),U===n.BYTE&&(j=n.RG8I),U===n.SHORT&&(j=n.RG16I),U===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGB8UI),U===n.UNSIGNED_SHORT&&(j=n.RGB16UI),U===n.UNSIGNED_INT&&(j=n.RGB32UI),U===n.BYTE&&(j=n.RGB8I),U===n.SHORT&&(j=n.RGB16I),U===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),U===n.UNSIGNED_INT&&(j=n.RGBA32UI),U===n.BYTE&&(j=n.RGBA8I),U===n.SHORT&&(j=n.RGBA16I),U===n.INT&&(j=n.RGBA32I)),x===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),x===n.RGBA){const Se=Y?Yo:ct.getTransfer($);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=Se===_t?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(S,x){let U;return S?x===null||x===rs||x===$s?U=n.DEPTH24_STENCIL8:x===fi?U=n.DEPTH32F_STENCIL8:x===wr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===rs||x===$s?U=n.DEPTH_COMPONENT24:x===fi?U=n.DEPTH_COMPONENT32F:x===wr&&(U=n.DEPTH_COMPONENT16),U}function L(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Fn&&S.minFilter!==qn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function I(S){const x=S.target;x.removeEventListener("dispose",I),w(x),x.isVideoTexture&&u.delete(x)}function C(S){const x=S.target;x.removeEventListener("dispose",C),E(x)}function w(S){const x=i.get(S);if(x.__webglInit===void 0)return;const U=S.source,$=p.get(U);if($){const Y=$[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&A(S),Object.keys($).length===0&&p.delete(U)}i.remove(S)}function A(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const U=S.source,$=p.get(U);delete $[x.__cacheKey],o.memory.textures--}function E(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Y=0;Y<x.__webglFramebuffer[$].length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[$][Y]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=S.textures;for(let $=0,Y=U.length;$<Y;$++){const j=i.get(U[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(U[$])}i.remove(S)}let D=0;function X(){D=0}function k(){const S=D;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),D+=1,S}function V(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function Z(S,x){const U=i.get(S);if(S.isVideoTexture&&se(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(U,S,x);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function G(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){ne(U,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function te(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){ne(U,S,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function z(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){ge(U,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const _e={[Hl]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},Me={[Fn]:n.NEAREST,[J_]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},ve={[iv]:n.NEVER,[cv]:n.ALWAYS,[sv]:n.LESS,[gh]:n.LEQUAL,[rv]:n.EQUAL,[lv]:n.GEQUAL,[ov]:n.GREATER,[av]:n.NOTEQUAL};function we(S,x){if(x.type===fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qn||x.magFilter===Na||x.magFilter===Qr||x.magFilter===es||x.minFilter===qn||x.minFilter===Na||x.minFilter===Qr||x.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,_e[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,_e[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,_e[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Me[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fn||x.minFilter!==Qr&&x.minFilter!==es||x.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(S,x){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",I));const $=x.source;let Y=p.get($);Y===void 0&&(Y={},p.set($,Y));const j=V(x);if(j!==S.__cacheKey){Y[j]===void 0&&(Y[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[j].usedTimes++;const Se=Y[S.__cacheKey];Se!==void 0&&(Y[S.__cacheKey].usedTimes--,Se.usedTimes===0&&A(x)),S.__cacheKey=j,S.__webglTexture=Y[j].texture}return U}function ne(S,x,U){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const Y=Oe(S,x),j=x.source;t.bindTexture($,S.__webglTexture,n.TEXTURE0+U);const Se=i.get(j);if(j.version!==Se.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);const he=ct.getPrimaries(ct.workingColorSpace),ye=x.colorSpace===Ci?null:ct.getPrimaries(x.colorSpace),Be=x.colorSpace===Ci||he===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let pe=g(x.image,!1,s.maxTextureSize);pe=fe(x,pe);const Ae=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type);let We=R(x.internalFormat,Ae,Ne,x.colorSpace,x.isVideoTexture);we($,x);let be;const Xe=x.mipmaps,Ke=x.isVideoTexture!==!0,ut=Se.__version===void 0||Y===!0,B=j.dataReady,Ce=L(x,pe);if(x.isDepthTexture)We=M(x.format===Xs,x.type),ut&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,We,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,We,pe.width,pe.height,0,Ae,Ne,null));else if(x.isDataTexture)if(Xe.length>0){Ke&&ut&&t.texStorage2D(n.TEXTURE_2D,Ce,We,Xe[0].width,Xe[0].height);for(let re=0,de=Xe.length;re<de;re++)be=Xe[re],Ke?B&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Ae,Ne,be.data):t.texImage2D(n.TEXTURE_2D,re,We,be.width,be.height,0,Ae,Ne,be.data);x.generateMipmaps=!1}else Ke?(ut&&t.texStorage2D(n.TEXTURE_2D,Ce,We,pe.width,pe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Ae,Ne,pe.data)):t.texImage2D(n.TEXTURE_2D,0,We,pe.width,pe.height,0,Ae,Ne,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,We,Xe[0].width,Xe[0].height,pe.depth);for(let re=0,de=Xe.length;re<de;re++)if(be=Xe[re],x.format!==Un)if(Ae!==null)if(Ke){if(B)if(x.layerUpdates.size>0){const De=ld(be.width,be.height,x.format,x.type);for(const Pe of x.layerUpdates){const Qe=be.data.subarray(Pe*De/be.data.BYTES_PER_ELEMENT,(Pe+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Pe,be.width,be.height,1,Ae,Qe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,pe.depth,Ae,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,We,be.width,be.height,pe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,pe.depth,Ae,Ne,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,We,be.width,be.height,pe.depth,0,Ae,Ne,be.data)}else{Ke&&ut&&t.texStorage2D(n.TEXTURE_2D,Ce,We,Xe[0].width,Xe[0].height);for(let re=0,de=Xe.length;re<de;re++)be=Xe[re],x.format!==Un?Ae!==null?Ke?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(n.TEXTURE_2D,re,We,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?B&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Ae,Ne,be.data):t.texImage2D(n.TEXTURE_2D,re,We,be.width,be.height,0,Ae,Ne,be.data)}else if(x.isDataArrayTexture)if(Ke){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,We,pe.width,pe.height,pe.depth),B)if(x.layerUpdates.size>0){const re=ld(pe.width,pe.height,x.format,x.type);for(const de of x.layerUpdates){const De=pe.data.subarray(de*re/pe.data.BYTES_PER_ELEMENT,(de+1)*re/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,pe.width,pe.height,1,Ae,Ne,De)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ne,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,Ae,Ne,pe.data);else if(x.isData3DTexture)Ke?(ut&&t.texStorage3D(n.TEXTURE_3D,Ce,We,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ne,pe.data)):t.texImage3D(n.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,Ae,Ne,pe.data);else if(x.isFramebufferTexture){if(ut)if(Ke)t.texStorage2D(n.TEXTURE_2D,Ce,We,pe.width,pe.height);else{let re=pe.width,de=pe.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,We,re,de,0,Ae,Ne,null),re>>=1,de>>=1}}else if(Xe.length>0){if(Ke&&ut){const re=Q(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,We,re.width,re.height)}for(let re=0,de=Xe.length;re<de;re++)be=Xe[re],Ke?B&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ae,Ne,be):t.texImage2D(n.TEXTURE_2D,re,We,Ae,Ne,be);x.generateMipmaps=!1}else if(Ke){if(ut){const re=Q(pe);t.texStorage2D(n.TEXTURE_2D,Ce,We,re.width,re.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ne,pe)}else t.texImage2D(n.TEXTURE_2D,0,We,Ae,Ne,pe);m(x)&&h($),Se.__version=j.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ge(S,x,U){if(x.image.length!==6)return;const $=Oe(S,x),Y=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const j=i.get(Y);if(Y.version!==j.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const Se=ct.getPrimaries(ct.workingColorSpace),he=x.colorSpace===Ci?null:ct.getPrimaries(x.colorSpace),ye=x.colorSpace===Ci||Se===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Be=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!Be&&!pe?Ae[de]=g(x.image[de],!0,s.maxCubemapSize):Ae[de]=pe?x.image[de].image:x.image[de],Ae[de]=fe(x,Ae[de]);const Ne=Ae[0],We=r.convert(x.format,x.colorSpace),be=r.convert(x.type),Xe=R(x.internalFormat,We,be,x.colorSpace),Ke=x.isVideoTexture!==!0,ut=j.__version===void 0||$===!0,B=Y.dataReady;let Ce=L(x,Ne);we(n.TEXTURE_CUBE_MAP,x);let re;if(Be){Ke&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Xe,Ne.width,Ne.height);for(let de=0;de<6;de++){re=Ae[de].mipmaps;for(let De=0;De<re.length;De++){const Pe=re[De];x.format!==Un?We!==null?Ke?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,Pe.width,Pe.height,We,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,Pe.width,Pe.height,We,be,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,Xe,Pe.width,Pe.height,0,We,be,Pe.data)}}}else{if(re=x.mipmaps,Ke&&ut){re.length>0&&Ce++;const de=Q(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Xe,de.width,de.height)}for(let de=0;de<6;de++)if(pe){Ke?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,We,be,Ae[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,Ae[de].width,Ae[de].height,0,We,be,Ae[de].data);for(let De=0;De<re.length;De++){const Qe=re[De].image[de].image;Ke?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,Qe.width,Qe.height,We,be,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,Xe,Qe.width,Qe.height,0,We,be,Qe.data)}}else{Ke?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,We,be,Ae[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,We,be,Ae[de]);for(let De=0;De<re.length;De++){const Pe=re[De];Ke?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,We,be,Pe.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,Xe,We,be,Pe.image[de])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),j.__version=Y.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Ee(S,x,U,$,Y,j){const Se=r.convert(U.format,U.colorSpace),he=r.convert(U.type),ye=R(U.internalFormat,Se,he,U.colorSpace),Be=i.get(x),pe=i.get(U);if(pe.__renderTarget=x,!Be.__hasExternalTextures){const Ae=Math.max(1,x.width>>j),Ne=Math.max(1,x.height>>j);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,j,ye,Ae,Ne,x.depth,0,Se,he,null):t.texImage2D(Y,j,ye,Ae,Ne,0,Se,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Y,pe.__webglTexture,0,J(x)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Y,pe.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(S,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const $=x.depthTexture,Y=$&&$.isDepthTexture?$.type:null,j=M(x.stencilBuffer,Y),Se=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=J(x);ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,j,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,S)}else{const $=x.textures;for(let Y=0;Y<$.length;Y++){const j=$[Y],Se=r.convert(j.format,j.colorSpace),he=r.convert(j.type),ye=R(j.internalFormat,Se,he,j.colorSpace),Be=J(x);U&&ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ye,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,ye,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ye,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const Y=$.__webglTexture,j=J(x);if(x.depthTexture.format===Os)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Xs)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function He(S){const x=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const $=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Y)};$.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=$}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Le(x.__webglFramebuffer,S)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),ie(x.__webglDepthbuffer[$],S,!1);else{const Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ie(x.__webglDepthbuffer,S,!1);else{const $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(S,x,U){const $=i.get(S);x!==void 0&&Ee($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&He(S)}function ke(S){const x=S.texture,U=i.get(S),$=i.get(x);S.addEventListener("dispose",C);const Y=S.textures,j=S.isWebGLCubeRenderTarget===!0,Se=Y.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let ye=0;ye<x.mipmaps.length;ye++)U.__webglFramebuffer[he][ye]=n.createFramebuffer()}else U.__webglFramebuffer[he]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)U.__webglFramebuffer[he]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Se)for(let he=0,ye=Y.length;he<ye;he++){const Be=i.get(Y[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ee(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<Y.length;he++){const ye=Y[he];U.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[he]);const Be=r.convert(ye.format,ye.colorSpace),pe=r.convert(ye.type),Ae=R(ye.internalFormat,Be,pe,ye.colorSpace,S.isXRRenderTarget===!0),Ne=J(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ae,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,U.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),we(n.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)Ee(U.__webglFramebuffer[he][ye],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else Ee(U.__webglFramebuffer[he],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,ye=Y.length;he<ye;he++){const Be=Y[he],pe=i.get(Be);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),we(n.TEXTURE_2D,Be),Ee(U.__webglFramebuffer,S,Be,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Be)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),we(he,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)Ee(U.__webglFramebuffer[ye],S,x,n.COLOR_ATTACHMENT0,he,ye);else Ee(U.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,he,0);m(x)&&h(he),t.unbindTexture()}S.depthBuffer&&He(S)}function P(S){const x=S.textures;for(let U=0,$=x.length;U<$;U++){const Y=x[U];if(m(Y)){const j=b(S),Se=i.get(Y).__webglTexture;t.bindTexture(j,Se),h(j),t.unbindTexture()}}}const N=[],T=[];function ue(S){if(S.samples>0){if(ee(S)===!1){const x=S.textures,U=S.width,$=S.height;let Y=n.COLOR_BUFFER_BIT;const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(S),he=x.length>1;if(he)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const Be=i.get(x[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,Y,n.NEAREST),l===!0&&(N.length=0,T.length=0,N.push(n.COLOR_ATTACHMENT0+ye),S.depthBuffer&&S.resolveDepthBuffer===!1&&(N.push(j),T.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const Be=i.get(x[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function J(S){return Math.min(s.maxSamples,S.samples)}function ee(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function fe(S,x){const U=S.colorSpace,$=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==qs&&U!==Ci&&(ct.getTransfer(U)===_t?($!==Un||Y!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Q(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=je,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ee}function vM(n,e){function t(i,s=Ci){let r;const o=ct.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===wr)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Lr)return n.HALF_FLOAT;if(i===ch)return n.ALPHA;if(i===uh)return n.RGB;if(i===Un)return n.RGBA;if(i===dh)return n.LUMINANCE;if(i===fh)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===ph)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Do||i===Lo)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Wl||i===$l||i===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===Yl||i===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ql||i===Yl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===uc||i===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===fc||i===hc||i===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xM={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),_=.02,v=.005;c.inputState.pinching&&p>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`;class MM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:yM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bM extends Ks{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,_=null,v=null;const g=new MM,m=t.getContextAttributes();let h=null,b=null;const R=[],M=[],L=new vt;let I=null;const C=new En;C.viewport=new Ct;const w=new En;w.viewport=new Ct;const A=[C,w],E=new Wv;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=R[ne];return ge===void 0&&(ge=new ul,R[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=R[ne];return ge===void 0&&(ge=new ul,R[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=R[ne];return ge===void 0&&(ge=new ul,R[ne]=ge),ge.getHandSpace()};function k(ne){const ge=M.indexOf(ne.inputSource);if(ge===-1)return;const Ee=R[ge];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,c||o),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<R.length;ne++){const ge=M[ne];ge!==null&&(M[ne]=null,R[ne].disconnect(ge))}D=null,X=null,g.reset(),e.setRenderTarget(h),_=null,p=null,d=null,s=null,b=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Ee=null,ie=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=m.stencil?Xs:Os,ie=m.stencil?$s:rs);const He={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new os(p.textureWidth,p.textureHeight,{format:Un,type:vi,depthTexture:new Ph(p.textureWidth,p.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const Ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new os(_.framebufferWidth,_.framebufferHeight,{format:Un,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(ne){for(let ge=0;ge<ne.removed.length;ge++){const Ee=ne.removed[ge],ie=M.indexOf(Ee);ie>=0&&(M[ie]=null,R[ie].disconnect(Ee))}for(let ge=0;ge<ne.added.length;ge++){const Ee=ne.added[ge];let ie=M.indexOf(Ee);if(ie===-1){for(let He=0;He<R.length;He++)if(He>=M.length){M.push(Ee),ie=He;break}else if(M[He]===null){M[He]=Ee,ie=He;break}if(ie===-1)break}const Le=R[ie];Le&&Le.connect(Ee)}}const G=new K,te=new K;function z(ne,ge,Ee){G.setFromMatrixPosition(ge.matrixWorld),te.setFromMatrixPosition(Ee.matrixWorld);const ie=G.distanceTo(te),Le=ge.projectionMatrix.elements,He=Ee.projectionMatrix.elements,je=Le[14]/(Le[10]-1),ke=Le[14]/(Le[10]+1),P=(Le[9]+1)/Le[5],N=(Le[9]-1)/Le[5],T=(Le[8]-1)/Le[0],ue=(He[8]+1)/He[0],J=je*T,ee=je*ue,se=ie/(-T+ue),fe=se*-T;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(fe),ne.translateZ(se),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Le[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Q=je+se,S=ke+se,x=J-fe,U=ee+(ie-fe),$=P*ke/S*Q,Y=N*ke/S*Q;ne.projectionMatrix.makePerspective(x,U,$,Y,Q,S),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function _e(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,Ee=ne.far;g.texture!==null&&(g.depthNear>0&&(ge=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),E.near=w.near=C.near=ge,E.far=w.far=C.far=Ee,(D!==E.near||X!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,X=E.far),C.layers.mask=ne.layers.mask|2,w.layers.mask=ne.layers.mask|4,E.layers.mask=C.layers.mask|w.layers.mask;const ie=ne.parent,Le=E.cameras;_e(E,ie);for(let He=0;He<Le.length;He++)_e(Le[He],ie);Le.length===2?z(E,C,w):E.projectionMatrix.copy(C.projectionMatrix),Me(ne,E,ie)};function Me(ne,ge,Ee){Ee===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=mc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&_===null))return l},this.setFoveation=function(ne){l=ne,p!==null&&(p.fixedFoveation=ne),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let ve=null;function we(ne,ge){if(u=ge.getViewerPose(c||o),v=ge,u!==null){const Ee=u.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let ie=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,ie=!0);for(let He=0;He<Ee.length;He++){const je=Ee[He];let ke=null;if(_!==null)ke=_.getViewport(je);else{const N=d.getViewSubImage(p,je);ke=N.viewport,He===0&&(e.setRenderTargetTextures(b,N.colorTexture,p.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(b))}let P=A[He];P===void 0&&(P=new En,P.layers.enable(He),P.viewport=new Ct,A[He]=P),P.matrix.fromArray(je.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(je.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ke.x,ke.y,ke.width,ke.height),He===0&&(E.matrix.copy(P.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ie===!0&&E.cameras.push(P)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const He=d.getDepthInformation(Ee[0]);He&&He.isValid&&He.texture&&g.init(e,He,s.renderState)}}for(let Ee=0;Ee<R.length;Ee++){const ie=M[Ee],Le=R[Ee];ie!==null&&Le!==void 0&&Le.update(ie,ge,c||o)}ve&&ve(ne,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),v=null}const Oe=new Dh;Oe.setAnimationLoop(we),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const $i=new xi,EM=new Pt;function TM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Th(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,R,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),p(m,h),h.isMeshPhysicalMaterial&&_(m,h,M)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,b,R):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h),R=b.envMap,M=b.envMapRotation;R&&(m.envMap.value=R,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler($i)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,R){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=R*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function _(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function AM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,R){const M=R.program;i.uniformBlockBinding(b,M)}function c(b,R){let M=s[b.id];M===void 0&&(v(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",m));const L=R.program;i.updateUBOMapping(b,L);const I=e.render.frame;r[b.id]!==I&&(p(b),r[b.id]=I)}function u(b){const R=d();b.__bindingPointIndex=R;const M=n.createBuffer(),L=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,M),M}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const R=s[b.id],M=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let I=0,C=M.length;I<C;I++){const w=Array.isArray(M[I])?M[I]:[M[I]];for(let A=0,E=w.length;A<E;A++){const D=w[A];if(_(D,I,A,L)===!0){const X=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let Z=0;Z<k.length;Z++){const G=k[Z],te=g(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,X+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(b,R,M,L){const I=b.value,C=R+"_"+M;if(L[C]===void 0)return typeof I=="number"||typeof I=="boolean"?L[C]=I:L[C]=I.clone(),!0;{const w=L[C];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return L[C]=I,!0}else if(w.equals(I)===!1)return w.copy(I),!0}return!1}function v(b){const R=b.uniforms;let M=0;const L=16;for(let C=0,w=R.length;C<w;C++){const A=Array.isArray(R[C])?R[C]:[R[C]];for(let E=0,D=A.length;E<D;E++){const X=A[E],k=Array.isArray(X.value)?X.value:[X.value];for(let V=0,Z=k.length;V<Z;V++){const G=k[V],te=g(G),z=M%L,_e=z%te.boundary,Me=z+_e;M+=_e,Me!==0&&L-Me<te.storage&&(M+=L-Me),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=te.storage}}}const I=M%L;return I>0&&(M+=L-I),b.__size=M,b.__cache={},this}function g(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function m(b){const R=b.target;R.removeEventListener("dispose",m);const M=o.indexOf(R.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function h(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class wM{constructor(e={}){const{canvas:t=dv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Li,this.toneMappingExposure=1;const M=this;let L=!1,I=0,C=0,w=null,A=-1,E=null;const D=new Ct,X=new Ct;let k=null;const V=new mt(0);let Z=0,G=t.width,te=t.height,z=1,_e=null,Me=null;const ve=new Ct(0,0,G,te),we=new Ct(0,0,G,te);let Oe=!1;const ne=new Rh;let ge=!1,Ee=!1;this.transmissionResolutionScale=1;const ie=new Pt,Le=new Pt,He=new K,je=new Ct,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function N(){return w===null?z:1}let T=i;function ue(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),T===null){const F="webgl2";if(T=ue(F,y),T===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let J,ee,se,fe,Q,S,x,U,$,Y,j,Se,he,ye,Be,pe,Ae,Ne,We,be,Xe,Ke,ut,B;function Ce(){J=new Fy(T),J.init(),Ke=new vM(T,J),ee=new Py(T,J,e,Ke),se=new gM(T,J),ee.reverseDepthBuffer&&p&&se.buffers.depth.setReversed(!0),fe=new ky(T),Q=new iM,S=new _M(T,J,se,Q,ee,Ke,fe),x=new Ly(M),U=new Ny(M),$=new Xv(T),ut=new Ry(T,$),Y=new Oy(T,$,fe,ut),j=new Hy(T,Y,$,fe),We=new zy(T,ee,S),pe=new Dy(Q),Se=new nM(M,x,U,J,ee,ut,pe),he=new TM(M,Q),ye=new rM,Be=new dM(J),Ne=new wy(M,x,U,se,j,_,l),Ae=new pM(M,j,ee),B=new AM(T,fe,ee,se),be=new Cy(T,J,fe),Xe=new By(T,J,fe),fe.programs=Se.programs,M.capabilities=ee,M.extensions=J,M.properties=Q,M.renderLists=ye,M.shadowMap=Ae,M.state=se,M.info=fe}Ce();const re=new bM(M,T);this.xr=re,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=J.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=J.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(G,te,!1))},this.getSize=function(y){return y.set(G,te)},this.setSize=function(y,F,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,te=F,t.width=Math.floor(y*z),t.height=Math.floor(F*z),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(G*z,te*z).floor()},this.setDrawingBufferSize=function(y,F,W){G=y,te=F,z=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,F,W,H){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,F,W,H),se.viewport(D.copy(ve).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(we)},this.setScissor=function(y,F,W,H){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,F,W,H),se.scissor(X.copy(we).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(y){se.setScissorTest(Oe=y)},this.setOpaqueSort=function(y){_e=y},this.setTransparentSort=function(y){Me=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,F=!0,W=!0){let H=0;if(y){let O=!1;if(w!==null){const me=w.texture.format;O=me===Yc||me===qc||me===Xc}if(O){const me=w.texture.type,Te=me===vi||me===rs||me===wr||me===$s||me===Wc||me===$c,Ie=Ne.getClearColor(),Ue=Ne.getClearAlpha(),Ze=Ie.r,Je=Ie.g,ze=Ie.b;Te?(v[0]=Ze,v[1]=Je,v[2]=ze,v[3]=Ue,T.clearBufferuiv(T.COLOR,0,v)):(g[0]=Ze,g[1]=Je,g[2]=ze,g[3]=Ue,T.clearBufferiv(T.COLOR,0,g))}else H|=T.COLOR_BUFFER_BIT}F&&(H|=T.DEPTH_BUFFER_BIT),W&&(H|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ne.dispose(),ye.dispose(),Be.dispose(),Q.dispose(),x.dispose(),U.dispose(),j.dispose(),ut.dispose(),B.dispose(),Se.dispose(),re.dispose(),re.removeEventListener("sessionstart",Gr),re.removeEventListener("sessionend",Wr),Jn.stop()};function de(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=fe.autoReset,F=Ae.enabled,W=Ae.autoUpdate,H=Ae.needsUpdate,O=Ae.type;Ce(),fe.autoReset=y,Ae.enabled=F,Ae.autoUpdate=W,Ae.needsUpdate=H,Ae.type=O}function Pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Qe(y){const F=y.target;F.removeEventListener("dispose",Qe),St(F)}function St(y){Ot(y),Q.remove(y)}function Ot(y){const F=Q.get(y).programs;F!==void 0&&(F.forEach(function(W){Se.releaseProgram(W)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,H,O,me){F===null&&(F=ke);const Te=O.isMesh&&O.matrixWorld.determinant()<0,Ie=Ma(y,F,W,H,O);se.setMaterial(H,Te);let Ue=W.index,Ze=1;if(H.wireframe===!0){if(Ue=Y.getWireframeAttribute(W),Ue===void 0)return;Ze=2}const Je=W.drawRange,ze=W.attributes.position;let rt=Je.start*Ze,dt=(Je.start+Je.count)*Ze;me!==null&&(rt=Math.max(rt,me.start*Ze),dt=Math.min(dt,(me.start+me.count)*Ze)),Ue!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Ue.count)):ze!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,ze.count));const Lt=dt-rt;if(Lt<0||Lt===1/0)return;ut.setup(O,H,Ie,W,Ue);let Tt,lt=be;if(Ue!==null&&(Tt=$.get(Ue),lt=Xe,lt.setIndex(Tt)),O.isMesh)H.wireframe===!0?(se.setLineWidth(H.wireframeLinewidth*N()),lt.setMode(T.LINES)):lt.setMode(T.TRIANGLES);else if(O.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),se.setLineWidth(Ve*N()),O.isLineSegments?lt.setMode(T.LINES):O.isLineLoop?lt.setMode(T.LINE_LOOP):lt.setMode(T.LINE_STRIP)}else O.isPoints?lt.setMode(T.POINTS):O.isSprite&&lt.setMode(T.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ve=O._multiDrawStarts,kt=O._multiDrawCounts,ft=O._multiDrawCount,Cn=Ue?$.get(Ue).bytesPerElement:1,ds=Q.get(H).currentProgram.getUniforms();for(let dn=0;dn<ft;dn++)ds.setValue(T,"_gl_DrawID",dn),lt.render(Ve[dn]/Cn,kt[dn])}else if(O.isInstancedMesh)lt.renderInstances(rt,Lt,O.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kt=Math.min(W.instanceCount,Ve);lt.renderInstances(rt,Lt,kt)}else lt.render(rt,Lt)};function at(y,F,W){y.transparent===!0&&y.side===di&&y.forceSinglePass===!1?(y.side=rn,y.needsUpdate=!0,us(y,F,W),y.side=Ui,y.needsUpdate=!0,us(y,F,W),y.side=di):us(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),h=Be.get(W),h.init(F),R.push(h),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),y!==W&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const me=O.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Ie=me[Te];at(Ie,W,O),H.add(Ie)}else at(me,W,O),H.add(me)}),R.pop(),h=null,H},this.compileAsync=function(y,F,W=null){const H=this.compile(y,F,W);return new Promise(O=>{function me(){if(H.forEach(function(Te){Q.get(Te).currentProgram.isReady()&&H.delete(Te)}),H.size===0){O(y);return}setTimeout(me,10)}J.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let un=null;function Rn(y){un&&un(y)}function Gr(){Jn.stop()}function Wr(){Jn.start()}const Jn=new Dh;Jn.setAnimationLoop(Rn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(y){un=y,re.setAnimationLoop(y),y===null?Jn.stop():Jn.start()},re.addEventListener("sessionstart",Gr),re.addEventListener("sessionend",Wr),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,w),h=Be.get(y,R.length),h.init(F),R.push(h),Le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,ge=pe.init(this.clippingPlanes,Ee),m=ye.get(y,b.length),m.init(),b.push(m),re.enabled===!0&&re.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&Qs(me,F,-1/0,M.sortObjects)}Qs(y,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(_e,Me),P=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,P&&Ne.addToRenderList(m,y),this.info.render.frame++,ge===!0&&pe.beginShadows();const W=h.state.shadowsArray;Ae.render(W,y,F),ge===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(h.setupLights(),F.isArrayCamera){const me=F.cameras;if(O.length>0)for(let Te=0,Ie=me.length;Te<Ie;Te++){const Ue=me[Te];ls(H,O,y,Ue)}P&&Ne.render(y);for(let Te=0,Ie=me.length;Te<Ie;Te++){const Ue=me[Te];$r(m,y,Ue,Ue.viewport)}}else O.length>0&&ls(H,O,y,F),P&&Ne.render(y),$r(m,y,F);w!==null&&C===0&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(M,y,F),ut.resetDefaultState(),A=-1,E=null,R.pop(),R.length>0?(h=R[R.length-1],ge===!0&&pe.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Qs(y,F,W,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ne.intersectsSprite(y)){H&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);const Te=j.update(y),Ie=y.material;Ie.visible&&m.push(y,Te,Ie,W,je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ne.intersectsObject(y))){const Te=j.update(y),Ie=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),je.copy(Te.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(Ie)){const Ue=Te.groups;for(let Ze=0,Je=Ue.length;Ze<Je;Ze++){const ze=Ue[Ze],rt=Ie[ze.materialIndex];rt&&rt.visible&&m.push(y,Te,rt,W,je.z,ze)}}else Ie.visible&&m.push(y,Te,Ie,W,je.z,null)}}const me=y.children;for(let Te=0,Ie=me.length;Te<Ie;Te++)Qs(me[Te],F,W,H)}function $r(y,F,W,H){const O=y.opaque,me=y.transmissive,Te=y.transparent;h.setupLightsView(W),ge===!0&&pe.setGlobalState(M.clippingPlanes,W),H&&se.viewport(D.copy(H)),O.length>0&&cs(O,F,W),me.length>0&&cs(me,F,W),Te.length>0&&cs(Te,F,W),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ls(y,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new os(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Lr:vi,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const me=h.state.transmissionRenderTarget[H.id],Te=H.viewport||D;me.setSize(Te.z*M.transmissionResolutionScale,Te.w*M.transmissionResolutionScale);const Ie=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(V),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),P&&Ne.render(W);const Ue=M.toneMapping;M.toneMapping=Li;const Ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),ge===!0&&pe.setGlobalState(M.clippingPlanes,H),cs(y,W,H),S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me),J.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,rt=F.length;ze<rt;ze++){const dt=F[ze],Lt=dt.object,Tt=dt.geometry,lt=dt.material,Ve=dt.group;if(lt.side===di&&Lt.layers.test(H.layers)){const kt=lt.side;lt.side=rn,lt.needsUpdate=!0,Xr(Lt,W,H,Tt,lt,Ve),lt.side=kt,lt.needsUpdate=!0,Je=!0}}Je===!0&&(S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me))}M.setRenderTarget(Ie),M.setClearColor(V,Z),Ze!==void 0&&(H.viewport=Ze),M.toneMapping=Ue}function cs(y,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,me=y.length;O<me;O++){const Te=y[O],Ie=Te.object,Ue=Te.geometry,Ze=H===null?Te.material:H,Je=Te.group;Ie.layers.test(W.layers)&&Xr(Ie,F,W,Ue,Ze,Je)}}function Xr(y,F,W,H,O,me){y.onBeforeRender(M,F,W,H,O,me),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,F,W,H,y,me),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,M.renderBufferDirect(W,F,H,O,y,me),O.side=Ui,O.needsUpdate=!0,M.renderBufferDirect(W,F,H,O,y,me),O.side=di):M.renderBufferDirect(W,F,H,O,y,me),y.onAfterRender(M,F,W,H,O,me)}function us(y,F,W){F.isScene!==!0&&(F=ke);const H=Q.get(y),O=h.state.lights,me=h.state.shadowsArray,Te=O.state.version,Ie=Se.getParameters(y,O.state,me,F,W),Ue=Se.getProgramCacheKey(Ie);let Ze=H.programs;H.environment=y.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(y.isMeshStandardMaterial?U:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ze===void 0&&(y.addEventListener("dispose",Qe),Ze=new Map,H.programs=Ze);let Je=Ze.get(Ue);if(Je!==void 0){if(H.currentProgram===Je&&H.lightsStateVersion===Te)return Yr(y,Ie),Je}else Ie.uniforms=Se.getUniforms(y),y.onBeforeCompile(Ie,M),Je=Se.acquireProgram(Ie,Ue),Ze.set(Ue,Je),H.uniforms=Ie.uniforms;const ze=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=pe.uniform),Yr(y,Ie),H.needsLights=Ea(y),H.lightsStateVersion=Te,H.needsLights&&(ze.ambientLightColor.value=O.state.ambient,ze.lightProbe.value=O.state.probe,ze.directionalLights.value=O.state.directional,ze.directionalLightShadows.value=O.state.directionalShadow,ze.spotLights.value=O.state.spot,ze.spotLightShadows.value=O.state.spotShadow,ze.rectAreaLights.value=O.state.rectArea,ze.ltc_1.value=O.state.rectAreaLTC1,ze.ltc_2.value=O.state.rectAreaLTC2,ze.pointLights.value=O.state.point,ze.pointLightShadows.value=O.state.pointShadow,ze.hemisphereLights.value=O.state.hemi,ze.directionalShadowMap.value=O.state.directionalShadowMap,ze.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ze.spotShadowMap.value=O.state.spotShadowMap,ze.spotLightMatrix.value=O.state.spotLightMatrix,ze.spotLightMap.value=O.state.spotLightMap,ze.pointShadowMap.value=O.state.pointShadowMap,ze.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Je,H.uniformsList=null,Je}function qr(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Uo.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Yr(y,F){const W=Q.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ma(y,F,W,H,O){F.isScene!==!0&&(F=ke),S.resetTextureUnits();const me=F.fog,Te=H.isMeshStandardMaterial?F.environment:null,Ie=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qs,Ue=(H.isMeshStandardMaterial?U:x).get(H.envMap||Te),Ze=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Je=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let Lt=Li;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=M.toneMapping);const Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=Tt!==void 0?Tt.length:0,Ve=Q.get(H),kt=h.state.lights;if(ge===!0&&(Ee===!0||y!==E)){const Yt=y===E&&H.id===A;pe.setState(H,y,Yt)}let ft=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==kt.state.version||Ve.outputColorSpace!==Ie||O.isBatchedMesh&&Ve.batching===!1||!O.isBatchedMesh&&Ve.batching===!0||O.isBatchedMesh&&Ve.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ve.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ve.instancing===!1||!O.isInstancedMesh&&Ve.instancing===!0||O.isSkinnedMesh&&Ve.skinning===!1||!O.isSkinnedMesh&&Ve.skinning===!0||O.isInstancedMesh&&Ve.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ve.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ve.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ve.instancingMorph===!1&&O.morphTexture!==null||Ve.envMap!==Ue||H.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Ze||Ve.vertexTangents!==Je||Ve.morphTargets!==ze||Ve.morphNormals!==rt||Ve.morphColors!==dt||Ve.toneMapping!==Lt||Ve.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,Ve.__version=H.version);let Cn=Ve.currentProgram;ft===!0&&(Cn=us(H,F,O));let ds=!1,dn=!1,er=!1;const Mt=Cn.getUniforms(),vn=Ve.uniforms;if(se.useProgram(Cn.program)&&(ds=!0,dn=!0,er=!0),H.id!==A&&(A=H.id,dn=!0),ds||E!==y){se.buffers.depth.getReversed()?(ie.copy(y.projectionMatrix),hv(ie),pv(ie),Mt.setValue(T,"projectionMatrix",ie)):Mt.setValue(T,"projectionMatrix",y.projectionMatrix),Mt.setValue(T,"viewMatrix",y.matrixWorldInverse);const tn=Mt.map.cameraPosition;tn!==void 0&&tn.setValue(T,He.setFromMatrixPosition(y.matrixWorld)),ee.logarithmicDepthBuffer&&Mt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,dn=!0,er=!0)}if(O.isSkinnedMesh){Mt.setOptional(T,O,"bindMatrix"),Mt.setOptional(T,O,"bindMatrixInverse");const Yt=O.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Mt.setValue(T,"boneTexture",Yt.boneTexture,S))}O.isBatchedMesh&&(Mt.setOptional(T,O,"batchingTexture"),Mt.setValue(T,"batchingTexture",O._matricesTexture,S),Mt.setOptional(T,O,"batchingIdTexture"),Mt.setValue(T,"batchingIdTexture",O._indirectTexture,S),Mt.setOptional(T,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(T,"batchingColorTexture",O._colorsTexture,S));const xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&We.update(O,W,Cn),(dn||Ve.receiveShadow!==O.receiveShadow)&&(Ve.receiveShadow=O.receiveShadow,Mt.setValue(T,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(vn.envMap.value=Ue,vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(vn.envMapIntensity.value=F.environmentIntensity),dn&&(Mt.setValue(T,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&ba(vn,er),me&&H.fog===!0&&he.refreshFogUniforms(vn,me),he.refreshMaterialUniforms(vn,H,z,te,h.state.transmissionRenderTarget[y.id]),Uo.upload(T,qr(Ve),vn,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Uo.upload(T,qr(Ve),vn,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(T,"center",O.center),Mt.setValue(T,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(T,"normalMatrix",O.normalMatrix),Mt.setValue(T,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let tn=0,Ta=Yt.length;tn<Ta;tn++){const Oi=Yt[tn];B.update(Oi,Cn),B.bind(Oi,Cn)}}return Cn}function ba(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Ea(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,F,W){Q.get(y.texture).__webglTexture=F,Q.get(y.depthTexture).__webglTexture=W;const H=Q.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const W=Q.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const ae=T.createFramebuffer();this.setRenderTarget=function(y,F=0,W=0){w=y,I=F,C=W;let H=!0,O=null,me=!1,Te=!1;if(y){const Ue=Q.get(y);if(Ue.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(T.FRAMEBUFFER,null),H=!1;else if(Ue.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(Ue.__hasExternalTextures)S.rebindTextures(y,Q.get(y.texture).__webglTexture,Q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ze=y.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&Q.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}const Ze=y.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const Je=Q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Je[F])?O=Je[F][W]:O=Je[F],me=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?O=Q.get(y).__webglMultisampledFramebuffer:Array.isArray(Je)?O=Je[W]:O=Je,D.copy(y.viewport),X.copy(y.scissor),k=y.scissorTest}else D.copy(ve).multiplyScalar(z).floor(),X.copy(we).multiplyScalar(z).floor(),k=Oe;if(W!==0&&(O=ae),se.bindFramebuffer(T.FRAMEBUFFER,O)&&H&&se.drawBuffers(y,O),se.viewport(D),se.scissor(X),se.setScissorTest(k),me){const Ue=Q.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,W)}else if(Te){const Ue=Q.get(y.texture),Ze=F;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ue.__webglTexture,W,Ze)}else if(y!==null&&W!==0){const Ue=Q.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ue.__webglTexture,W)}A=-1},this.readRenderTargetPixels=function(y,F,W,H,O,me,Te){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){se.bindFramebuffer(T.FRAMEBUFFER,Ie);try{const Ue=y.texture,Ze=Ue.format,Je=Ue.type;if(!ee.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&W>=0&&W<=y.height-O&&T.readPixels(F,W,H,O,Ke.convert(Ze),Ke.convert(Je),me)}finally{const Ue=w!==null?Q.get(w).__webglFramebuffer:null;se.bindFramebuffer(T.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,H,O,me,Te){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){const Ue=y.texture,Ze=Ue.format,Je=Ue.type;if(!ee.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-H&&W>=0&&W<=y.height-O){se.bindFramebuffer(T.FRAMEBUFFER,Ie);const ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,me.byteLength,T.STREAM_READ),T.readPixels(F,W,H,O,Ke.convert(Ze),Ke.convert(Je),0);const rt=w!==null?Q.get(w).__webglFramebuffer:null;se.bindFramebuffer(T.FRAMEBUFFER,rt);const dt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await fv(T,dt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,me),T.deleteBuffer(ze),T.deleteSync(dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,W=0){y.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-W),O=Math.floor(y.image.width*H),me=Math.floor(y.image.height*H),Te=F!==null?F.x:0,Ie=F!==null?F.y:0;S.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,W,0,0,Te,Ie,O,me),se.unbindTexture()};const xe=T.createFramebuffer(),Fe=T.createFramebuffer();this.copyTextureToTexture=function(y,F,W=null,H=null,O=0,me=null){y.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],F=arguments[2],me=arguments[3]||0,W=null),me===null&&(O!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=O,O=0):me=0);let Te,Ie,Ue,Ze,Je,ze,rt,dt,Lt;const Tt=y.isCompressedTexture?y.mipmaps[me]:y.image;if(W!==null)Te=W.max.x-W.min.x,Ie=W.max.y-W.min.y,Ue=W.isBox3?W.max.z-W.min.z:1,Ze=W.min.x,Je=W.min.y,ze=W.isBox3?W.min.z:0;else{const xn=Math.pow(2,-O);Te=Math.floor(Tt.width*xn),Ie=Math.floor(Tt.height*xn),y.isDataArrayTexture?Ue=Tt.depth:y.isData3DTexture?Ue=Math.floor(Tt.depth*xn):Ue=1,Ze=0,Je=0,ze=0}H!==null?(rt=H.x,dt=H.y,Lt=H.z):(rt=0,dt=0,Lt=0);const lt=Ke.convert(F.format),Ve=Ke.convert(F.type);let kt;F.isData3DTexture?(S.setTexture3D(F,0),kt=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),kt=T.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),kt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);const ft=T.getParameter(T.UNPACK_ROW_LENGTH),Cn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ds=T.getParameter(T.UNPACK_SKIP_PIXELS),dn=T.getParameter(T.UNPACK_SKIP_ROWS),er=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Tt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Tt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ze),T.pixelStorei(T.UNPACK_SKIP_ROWS,Je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ze);const Mt=y.isDataArrayTexture||y.isData3DTexture,vn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const xn=Q.get(y),Yt=Q.get(F),tn=Q.get(xn.__renderTarget),Ta=Q.get(Yt.__renderTarget);se.bindFramebuffer(T.READ_FRAMEBUFFER,tn.__webglFramebuffer),se.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ta.__webglFramebuffer);for(let Oi=0;Oi<Ue;Oi++)Mt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(y).__webglTexture,O,ze+Oi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(F).__webglTexture,me,Lt+Oi)),T.blitFramebuffer(Ze,Je,Te,Ie,rt,dt,Te,Ie,T.DEPTH_BUFFER_BIT,T.NEAREST);se.bindFramebuffer(T.READ_FRAMEBUFFER,null),se.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Q.has(y)){const xn=Q.get(y),Yt=Q.get(F);se.bindFramebuffer(T.READ_FRAMEBUFFER,xe),se.bindFramebuffer(T.DRAW_FRAMEBUFFER,Fe);for(let tn=0;tn<Ue;tn++)Mt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,O,ze+tn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,O),vn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yt.__webglTexture,me,Lt+tn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yt.__webglTexture,me),O!==0?T.blitFramebuffer(Ze,Je,Te,Ie,rt,dt,Te,Ie,T.COLOR_BUFFER_BIT,T.NEAREST):vn?T.copyTexSubImage3D(kt,me,rt,dt,Lt+tn,Ze,Je,Te,Ie):T.copyTexSubImage2D(kt,me,rt,dt,Ze,Je,Te,Ie);se.bindFramebuffer(T.READ_FRAMEBUFFER,null),se.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else vn?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(kt,me,rt,dt,Lt,Te,Ie,Ue,lt,Ve,Tt.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(kt,me,rt,dt,Lt,Te,Ie,Ue,lt,Tt.data):T.texSubImage3D(kt,me,rt,dt,Lt,Te,Ie,Ue,lt,Ve,Tt):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,me,rt,dt,Te,Ie,lt,Ve,Tt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,me,rt,dt,Tt.width,Tt.height,lt,Tt.data):T.texSubImage2D(T.TEXTURE_2D,me,rt,dt,Te,Ie,lt,Ve,Tt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ft),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Cn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ds),T.pixelStorei(T.UNPACK_SKIP_ROWS,dn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,er),me===0&&F.generateMipmaps&&T.generateMipmap(kt),se.unbindTexture()},this.copyTextureToTexture3D=function(y,F,W=null,H=null,O=0){return y.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,H=arguments[1]||null,y=arguments[2],F=arguments[3],O=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,W,H,O)},this.initRenderTarget=function(y){Q.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),se.unbindTexture()},this.resetState=function(){I=0,C=0,w=null,se.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const RM={class:"destiny-view"},CM={class:"tree-layout"},PM={class:"tree-container"},DM={class:"tree-header"},LM={class:"tree-actions"},IM={class:"tree-canvas"},UM=["viewBox"],NM=["d"],FM=["cx","cy"],OM=["onClick"],BM=["onClick","title"],kM={class:"graph-node-frame"},zM={key:0,class:"node-branch-count"},HM={class:"tree-controls"},VM={class:"tree-aside"},GM={class:"node-preview"},WM={class:"node-stats"},$M={class:"stat-card"},XM={class:"stat-card"},qM={class:"stat-card"},YM={class:"node-quick"},jM=["disabled"],dl=110,Id=130,KM=100,Ud=80,bo=50,ZM={__name:"DestinyView",props:{treeNodes:{type:Array,required:!0},selectedNode:{type:[String,Number],required:!0},selectedNodeData:{type:Object,required:!1},nodeCount:{type:Number,required:!0},leafCount:{type:Number,required:!0},selectedDepth:{type:Number,required:!0},treeTransformStyle:{type:Object,required:!0},isPanning:{type:Boolean,required:!0}},emits:["add-node","zoom-in","zoom-out","reset-view","export-tree","reset-tree","wheel","start-pan","pan-move","end-pan","touch-start","touch-move","select-node","edit-node","delete-node","extend-branch","go-to-genesis","go-to-divergence"],setup(n){const e=n,t=$e(null);let i=null,s,r,o,a,l;const c=()=>{if(t.value)try{const v=t.value,g=window.innerWidth,m=window.innerHeight;v.width=g,v.height=m,s=new Ov,r=new En(75,g/m,.1,1e3),r.position.z=50,o=new wM({canvas:v,alpha:!0,antialias:!0}),o.setSize(g,m),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),a=new fr,s.add(a);const h=new Sr({color:16766720,transparent:!0,opacity:.6}),b=new Sr({color:13935988,transparent:!0,opacity:.6}),R=new Sr({color:13467442,transparent:!0,opacity:.3}),M=200,L=15,I=4,C=20;for(let k=0;k<I*C;k++){const V=k/(I*C),Z=V*Math.PI*2*I,G=(V-.5)*M,te=Math.cos(Z)*L,z=Math.sin(Z)*L,_e=new Tn(new Zo(1.5,16,16),h);_e.position.set(te,G,z),a.add(_e);const Me=Math.cos(Z+Math.PI)*L,ve=Math.sin(Z+Math.PI)*L,we=new Tn(new Zo(1.5,16,16),b);if(we.position.set(Me,G,ve),a.add(we),k%3===0){const Oe=new jc(.3,.3,L*2,8),ne=new Tn(Oe,R);ne.position.set(0,G,0),ne.rotation.z=Math.PI/2,ne.rotation.y=-Z,a.add(ne)}}const w=500,A=new kn,E=new Float32Array(w*3),D=new Float32Array(w*3);for(let k=0;k<w;k++){E[k*3]=(Math.random()-.5)*200,E[k*3+1]=(Math.random()-.5)*200,E[k*3+2]=(Math.random()-.5)*200;const V=Math.random();V<.33?(D[k*3]=1,D[k*3+1]=.84,D[k*3+2]=0):V<.66?(D[k*3]=.83,D[k*3+1]=.65,D[k*3+2]=.45):(D[k*3]=.8,D[k*3+1]=.5,D[k*3+2]=.2)}A.setAttribute("position",new wn(E,3)),A.setAttribute("color",new wn(D,3));const X=new Ch({size:1.5,vertexColors:!0,transparent:!0,opacity:.6,blending:Cl});l=new zv(A,X),s.add(l),u()}catch(v){console.warn("DNA helix initialization failed:",v),o&&o.dispose()}},u=()=>{if(i=requestAnimationFrame(u),a&&(a.rotation.y+=.002,a.rotation.x=Math.sin(Date.now()*3e-4)*.1),l){l.rotation.y+=5e-4;const v=l.geometry.attributes.position.array;for(let g=0;g<v.length;g+=3)v[g+1]+=Math.sin(Date.now()*.001+g)*.02;l.geometry.attributes.position.needsUpdate=!0}o.render(s,r)},d=()=>{if(!t.value||!o||!r)return;const v=window.innerWidth,g=window.innerHeight;r.aspect=v/g,r.updateProjectionMatrix(),o.setSize(v,g)};Nc(()=>{t.value&&(c(),window.addEventListener("resize",d))}),Fc(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",d),o&&o.dispose()});const p=Rt(()=>{const v=Array.isArray(e.treeNodes)?e.treeNodes:[];if(!v.length)return{nodes:[],edges:[],width:1200,height:720};const g=new Map(v.map(V=>[V.id,V])),m=new Map;v.forEach(V=>{const Z=Array.isArray(V.children)?V.children.map(G=>g.get(G)).filter(Boolean):[];m.set(V.id,Z)});const h=new Map,b=[];let R=0,M=bo;const L=V=>{const Z=m.get(V.id)||[];Z.length?Z.forEach(G=>L(G)):(h.set(V.id,{y:M,isLeaf:!0}),M+=KM)},I=(V,Z)=>{const G=m.get(V.id)||[],te=Ud+Z*Id;if(R=Math.max(R,Z),G.length){const z=[],_e=ve=>{const we=m.get(ve.id)||[];if(we.length)we.forEach(Oe=>_e(Oe));else{const Oe=h.get(ve.id);Oe&&Oe.isLeaf&&z.push(Oe.y)}};_e(V);const Me=z.length?z.reduce((ve,we)=>ve+we,0)/z.length:bo;h.set(V.id,{x:te,y:Me,depth:Z}),G.forEach(ve=>I(ve,Z+1)),G.forEach(ve=>{const we=h.get(ve.id);if(!we)return;const Oe=te+dl/2,ne=Me,ge=we.x-dl/2,Ee=we.y,ie=Math.max(60,(ge-Oe)*.35);b.push({from:V.id,to:ve.id,depth:Z+1,targetX:ge,targetY:Ee,path:`M ${Oe} ${ne} C ${Oe+ie} ${ne}, ${ge-ie} ${Ee}, ${ge} ${Ee}`})})}else{const z=h.get(V.id);h.set(V.id,{...z,x:te,depth:Z})}},C=v.filter(V=>!V.parentId);C.forEach(V=>L(V)),C.forEach(V=>I(V,0));const w=v.map(V=>{const Z=h.get(V.id);if(!Z)return null;const G=V.parentId?g.get(V.parentId):null;return{...V,x:Z.x,y:Z.y,depth:Z.depth+1,parentTitle:(G==null?void 0:G.title)||"",childrenCount:(m.get(V.id)||[]).length}}).filter(Boolean),A=Ud+R*Id+dl+100,E=w.map(V=>V.y),D=Math.min(...E,bo),k=Math.max(...E,bo)+80-D;return{nodes:w,edges:b,width:Math.max(800,A),height:Math.max(600,k+140)}}),_=Rt(()=>({width:`${p.value.width}px`,height:`${p.value.height}px`}));return(v,g)=>{var m,h;return le(),ce("div",RM,[f("canvas",{ref_key:"dnaCanvas",ref:t,class:"dna-helix-bg"},null,512),g[31]||(g[31]=f("div",{class:"dna-particles"},null,-1)),f("div",CM,[f("div",PM,[f("div",DM,[g[20]||(g[20]=en('<div class="header-content" data-v-a069dc89><div class="header-icon" data-v-a069dc89><svg width="28" height="28" viewBox="0 0 24 24" fill="none" data-v-a069dc89><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a069dc89></path><defs data-v-a069dc89><linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%" data-v-a069dc89><stop offset="0%" stop-color="#ffd700" data-v-a069dc89></stop><stop offset="50%" stop-color="#d4a574" data-v-a069dc89></stop><stop offset="100%" stop-color="#cd7f32" data-v-a069dc89></stop></linearGradient></defs></svg></div><div class="header-text" data-v-a069dc89><h1 class="title" data-v-a069dc89>命轨</h1><p data-v-a069dc89>以图谱方式展开你的命轨分支</p></div></div>',1)),f("div",LM,[f("button",{class:"btn btn-secondary small",onClick:g[0]||(g[0]=b=>v.$emit("add-node"))},[...g[19]||(g[19]=[f("span",{class:"btn-icon"},"+",-1),sn("添加节点",-1)])]),f("button",{class:"btn btn-secondary small",onClick:g[1]||(g[1]=b=>v.$emit("zoom-in"))},"放大"),f("button",{class:"btn btn-secondary small",onClick:g[2]||(g[2]=b=>v.$emit("zoom-out"))},"缩小"),f("button",{class:"btn btn-secondary small",onClick:g[3]||(g[3]=b=>v.$emit("reset-view"))},"重置视图"),f("button",{class:"btn btn-secondary small",onClick:g[4]||(g[4]=b=>v.$emit("export-tree"))},"导出图谱"),f("button",{class:"btn btn-secondary small",onClick:g[5]||(g[5]=b=>v.$emit("reset-tree"))},"重置图谱")])]),f("div",IM,[f("div",{class:Ye(["tree-viewport",{dragging:n.isPanning}]),onWheel:g[6]||(g[6]=b=>v.$emit("wheel",b)),onMousedown:g[7]||(g[7]=b=>v.$emit("start-pan",b)),onMousemove:g[8]||(g[8]=b=>v.$emit("pan-move",b)),onMouseup:g[9]||(g[9]=b=>v.$emit("end-pan")),onMouseleave:g[10]||(g[10]=b=>v.$emit("end-pan")),onTouchstart:g[11]||(g[11]=Pi(b=>v.$emit("touch-start",b),["prevent"])),onTouchmove:g[12]||(g[12]=Pi(b=>v.$emit("touch-move",b),["prevent"])),onTouchend:g[13]||(g[13]=b=>v.$emit("end-pan"))},[f("div",{class:"tree-transform",style:Ut(n.treeTransformStyle)},[f("div",{class:"tree-graph",style:Ut(_.value)},[(le(),ce("svg",{class:"graph-links",viewBox:`0 0 ${p.value.width} ${p.value.height}`,preserveAspectRatio:"none"},[g[21]||(g[21]=en('<defs data-v-a069dc89><linearGradient id="edgeGrad1" x1="0%" y1="0%" x2="100%" y2="0%" data-v-a069dc89><stop offset="0%" stop-color="#d4a574" data-v-a069dc89></stop><stop offset="100%" stop-color="#e8c49a" data-v-a069dc89></stop></linearGradient><linearGradient id="edgeGrad2" x1="0%" y1="0%" x2="100%" y2="0%" data-v-a069dc89><stop offset="0%" stop-color="#cd7f32" data-v-a069dc89></stop><stop offset="100%" stop-color="#d4a574" data-v-a069dc89></stop></linearGradient><filter id="glow" data-v-a069dc89><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-a069dc89></feGaussianBlur><feMerge data-v-a069dc89><feMergeNode in="coloredBlur" data-v-a069dc89></feMergeNode><feMergeNode in="SourceGraphic" data-v-a069dc89></feMergeNode></feMerge></filter></defs>',1)),(le(!0),ce(et,null,ot(p.value.edges,b=>(le(),ce("path",{key:`${b.from}-${b.to}`,d:b.path,class:Ye(["graph-edge",`depth-${Math.min(b.depth,6)}`]),filter:"url(#glow)"},null,10,NM))),128)),(le(!0),ce(et,null,ot(p.value.edges,b=>(le(),ce("circle",{key:`${b.from}-${b.to}-dot`,cx:b.targetX,cy:b.targetY,r:"4",class:"graph-edge-dot"},null,8,FM))),128))],8,UM)),(le(!0),ce(et,null,ot(p.value.nodes,b=>(le(),ce("div",{key:b.id,class:Ye(["graph-node",[{active:n.selectedNode===b.id,root:!b.parentId},`depth-${Math.min(b.depth,6)}`]]),style:Ut({left:`${b.x}px`,top:`${b.y}px`}),onClick:Pi(R=>v.$emit("select-node",b.id),["stop"])},[g[24]||(g[24]=en('<div class="crystal-shard crystal-shard-1" data-v-a069dc89></div><div class="crystal-shard crystal-shard-2" data-v-a069dc89></div><div class="crystal-shard crystal-shard-3" data-v-a069dc89></div><div class="graph-node-glow" data-v-a069dc89></div><div class="node-hologram-ring" data-v-a069dc89></div>',5)),f("button",{class:"node-delete-btn",onClick:Pi(R=>v.$emit("delete-node",b.id),["stop"]),title:`删除 ${b.title}`},"×",8,BM),f("div",kM,[g[22]||(g[22]=f("div",{class:"crystal-inner"},null,-1)),f("h3",null,oe(b.title),1),b.childrenCount>0?(le(),ce("span",zM,oe(b.childrenCount),1)):wt("",!0),g[23]||(g[23]=f("div",{class:"node-scan-line"},null,-1))])],14,OM))),128))],4)],4)],34),g[25]||(g[25]=f("div",{class:"tree-scroll-hint"},"拖动画布浏览完整图谱，缩放后可查看更远层级",-1))]),f("div",HM,[f("button",{class:"btn btn-secondary",onClick:g[14]||(g[14]=b=>v.$emit("go-to-genesis"))},"返回"),f("button",{class:"btn btn-primary",onClick:g[15]||(g[15]=b=>v.$emit("go-to-divergence"))},"衍生路线")])]),f("aside",VM,[g[29]||(g[29]=f("div",{class:"tree-aside-header"},[f("h2",null,"节点面板"),f("span",{class:"badge"},"已选")],-1)),f("div",GM,[f("strong",null,oe(((m=n.selectedNodeData)==null?void 0:m.title)||"未选择节点"),1),f("p",null,oe(((h=n.selectedNodeData)==null?void 0:h.description)||"请在图谱上选择节点，查看详情与操作"),1)]),f("div",WM,[f("div",$M,[g[26]||(g[26]=f("span",null,"节点总数",-1)),f("strong",null,oe(n.nodeCount),1)]),f("div",XM,[g[27]||(g[27]=f("span",null,"叶子节点",-1)),f("strong",null,oe(n.leafCount),1)]),f("div",qM,[g[28]||(g[28]=f("span",null,"当前层级",-1)),f("strong",null,oe(n.selectedDepth),1)])]),f("div",YM,[f("button",{class:"btn btn-secondary small",onClick:g[16]||(g[16]=b=>v.$emit("add-node"))},"快速添加"),f("button",{class:"btn btn-secondary small",onClick:g[17]||(g[17]=b=>v.$emit("extend-branch",n.selectedNode))},"快速延伸"),f("button",{class:"btn btn-secondary small btn-danger",onClick:g[18]||(g[18]=b=>v.$emit("delete-node",n.selectedNode)),disabled:!n.selectedNode||n.selectedNode==="root"},"删除",8,jM)]),g[30]||(g[30]=f("div",{class:"tree-hints"},[f("h4",null,"查看提示"),f("p",null,"图谱会根据父子关系自动展开，节点越深，位置越向右推进。"),f("p",null,"建议从主节点向外扩散，逐层细化关键选择。")],-1))])])])}}},JM=Bn(ZM,[["__scopeId","data-v-a069dc89"]]),QM={class:"divergence-view"},eb={class:"divergence-container glass-container"},tb={class:"mode-switch"},nb={key:0,class:"routes-container"},ib={class:"route-header"},sb={class:"route-description"},rb={class:"route-meta"},ob={class:"meta-item"},ab={class:"meta-bar"},lb={class:"meta-value"},cb={class:"meta-tags"},ub={class:"meta-tag difficulty"},db={class:"meta-tag benefit"},fb={class:"route-actions"},hb=["onClick"],pb=["onClick"],mb=["onClick"],gb=["onClick"],_b=["disabled"],vb={key:1,class:"custom-route"},xb={class:"form-row"},yb={class:"form-group"},Sb={class:"form-group"},Mb={class:"form-row"},bb={class:"form-group"},Eb={class:"form-group"},Tb={class:"form-group full-width"},Ab={class:"form-group full-width"},wb={key:0,class:"custom-route-list"},Rb={class:"custom-route-main"},Cb={class:"custom-route-meta"},Pb={class:"custom-route-actions"},Db=["onClick"],Lb=["onClick"],Ib={key:2,class:"multimedia-section glass-card"},Ub={class:"multimedia-options"},Nb={class:"style-selector"},Fb={key:0,class:"media-gallery"},Ob={class:"media-info"},Bb={class:"divergence-controls"},kb={__name:"DivergenceView",props:{aiRoutes:{type:Array,required:!0},isGenerating:{type:Boolean,required:!0},compareRoutes:{type:Array,required:!0},customRoutes:{type:Array,required:!0},selectedRoute:{type:Object,required:!1},generatedMedia:{type:Array,required:!0},mode:{type:String,required:!0}},emits:["generate-ai-routes","refine-route","replace-route","toggle-compare","select-route","add-custom-route","remove-custom-route","file-upload","generate-comic","generate-video","generate-poster","go-to-destiny","go-to-comparison","go-to-reflection","toggle-mode"],setup(n,{emit:e}){const t=ks({title:"",description:"",feasibility:"",difficulty:"",benefit:""});let i=ks("治愈");return jn(()=>t,s=>{},{deep:!0}),(s,r)=>(le(),ce("div",QM,[r[36]||(r[36]=f("div",{class:"light-beam beam-1"},null,-1)),r[37]||(r[37]=f("div",{class:"light-beam beam-2"},null,-1)),r[38]||(r[38]=f("div",{class:"light-beam beam-3"},null,-1)),f("div",eb,[r[35]||(r[35]=en('<div class="beam-accent top-left" data-v-8983e465></div><div class="beam-accent top-right" data-v-8983e465></div><div class="divergence-header" data-v-8983e465><div class="header-icon" data-v-8983e465><svg width="36" height="36" viewBox="0 0 24 24" fill="none" data-v-8983e465><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#divGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8983e465></path><defs data-v-8983e465><linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="100%" data-v-8983e465><stop offset="0%" stop-color="#ffd700" data-v-8983e465></stop><stop offset="50%" stop-color="#d4a574" data-v-8983e465></stop><stop offset="100%" stop-color="#cd7f32" data-v-8983e465></stop></linearGradient></defs></svg></div><h1 class="title" data-v-8983e465>衍化</h1><p class="subtitle" data-v-8983e465>探索命运的无限可能</p></div>',3)),f("div",tb,[f("span",{class:Ye(["mode-label",{active:n.mode==="ai"}])},"AI智能生成",2),f("div",{class:Ye(["toggle",{active:n.mode==="ai"}]),onClick:r[0]||(r[0]=o=>s.$emit("toggle-mode"))},[...r[16]||(r[16]=[f("div",{class:"toggle-thumb"},null,-1)])],2),f("span",{class:Ye(["mode-label",{active:n.mode!=="ai"}])},"玩家自定义",2)]),n.mode==="ai"?(le(),ce("div",nb,[(le(!0),ce(et,null,ot(n.aiRoutes,(o,a)=>(le(),ce("div",{class:"route-card glass-card fade-in-up",key:a,style:Ut({animationDelay:a*.1+"s"})},[r[18]||(r[18]=f("div",{class:"route-glow"},null,-1)),f("div",ib,[f("h3",null,oe(o.title),1),f("div",{class:Ye(["route-tag",o.tagColor])},oe(o.tag),3)]),f("p",sb,oe(o.description),1),f("div",rb,[f("div",ob,[r[17]||(r[17]=f("span",{class:"meta-label"},"可行性",-1)),f("div",ab,[f("div",{class:"meta-fill",style:Ut({width:o.feasibility+"%"})},null,4)]),f("span",lb,oe(o.feasibility)+"%",1)]),f("div",cb,[f("span",ub,oe(o.difficulty),1),f("span",db,oe(o.benefit),1)])]),f("div",fb,[f("button",{class:"btn btn-secondary small",onClick:l=>s.$emit("refine-route",a)},"细化路线",8,hb),f("button",{class:"btn btn-secondary small",onClick:l=>s.$emit("replace-route",a)},"替换路线",8,pb),f("button",{class:Ye(["btn btn-secondary small",{selected:n.compareRoutes.includes(o)}]),onClick:l=>s.$emit("toggle-compare",o)},oe(n.compareRoutes.includes(o)?"取消对比":"加入对比"),11,mb),f("button",{class:"btn btn-primary small",onClick:l=>s.$emit("select-route",o)},"选择路线",8,gb)])],4))),128)),f("button",{class:"btn btn-primary generate-btn",onClick:r[1]||(r[1]=o=>s.$emit("generate-ai-routes")),disabled:n.isGenerating},[r[19]||(r[19]=f("span",{class:"btn-glow"},null,-1)),sn(" "+oe(n.isGenerating?"生成中...":"重新生成路线"),1)],8,_b)])):(le(),ce("div",vb,[r[29]||(r[29]=f("div",{class:"custom-route-header"},[f("h3",null,"自定义路线")],-1)),f("div",xb,[f("div",yb,[r[20]||(r[20]=f("label",null,"路线名称",-1)),At(f("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=o=>t.title=o),class:"input",placeholder:"路线名称"},null,512),[[pn,t.title]])]),f("div",Sb,[r[21]||(r[21]=f("label",null,"可行性",-1)),At(f("input",{type:"number","onUpdate:modelValue":r[3]||(r[3]=o=>t.feasibility=o),class:"input",placeholder:"0-100%"},null,512),[[pn,t.feasibility]])])]),f("div",Mb,[f("div",bb,[r[23]||(r[23]=f("label",null,"难度",-1)),At(f("select",{"onUpdate:modelValue":r[4]||(r[4]=o=>t.difficulty=o),class:"input"},[...r[22]||(r[22]=[f("option",{value:""},"请选择",-1),f("option",{value:"低"},"低",-1),f("option",{value:"中等"},"中等",-1),f("option",{value:"高"},"高",-1)])],512),[[li,t.difficulty]])]),f("div",Eb,[r[25]||(r[25]=f("label",null,"预期收益",-1)),At(f("select",{"onUpdate:modelValue":r[5]||(r[5]=o=>t.benefit=o),class:"input"},[...r[24]||(r[24]=[en('<option value="" data-v-8983e465>请选择</option><option value="低" data-v-8983e465>低</option><option value="中等" data-v-8983e465>中等</option><option value="高" data-v-8983e465>高</option><option value="极高" data-v-8983e465>极高</option>',5)])],512),[[li,t.benefit]])])]),f("div",Tb,[r[26]||(r[26]=f("label",null,"路线描述",-1)),At(f("textarea",{"onUpdate:modelValue":r[6]||(r[6]=o=>t.description=o),class:"input",rows:"3",placeholder:"路线描述"},null,512),[[pn,t.description]])]),f("div",Ab,[r[27]||(r[27]=f("label",null,"上传规划文档",-1)),f("input",{type:"file",class:"input",onChange:r[7]||(r[7]=o=>s.$emit("file-upload",o))},null,32)]),f("button",{class:"btn btn-primary",onClick:r[8]||(r[8]=o=>s.$emit("add-custom-route",t))},"添加路线"),n.customRoutes.length?(le(),ce("div",wb,[r[28]||(r[28]=f("h4",null,"我的路线",-1)),(le(!0),ce(et,null,ot(n.customRoutes,(o,a)=>(le(),ce("div",{class:"custom-route-card glass-card",key:o.id},[f("div",Rb,[f("div",null,[f("strong",null,oe(o.title),1),f("p",null,oe(o.description),1)]),f("div",Cb,[f("span",null,"可行性 "+oe(o.feasibility)+"%",1),f("span",null,"难度 "+oe(o.difficulty),1),f("span",null,"收益 "+oe(o.benefit),1)])]),f("div",Pb,[f("button",{class:"btn btn-secondary small",onClick:l=>s.$emit("select-route",o)},"选择",8,Db),f("button",{class:"btn btn-secondary small",onClick:l=>s.$emit("remove-custom-route",a)},"删除",8,Lb)])]))),128))])):wt("",!0)])),n.selectedRoute?(le(),ce("div",Ib,[r[32]||(r[32]=f("div",{class:"multimedia-header"},[f("h3",null,"多模态素材")],-1)),f("div",Ub,[f("button",{class:"btn btn-secondary",onClick:r[9]||(r[9]=o=>s.$emit("generate-comic"))},"生成漫画"),f("button",{class:"btn btn-secondary",onClick:r[10]||(r[10]=o=>s.$emit("generate-video"))},"生成短视频"),f("button",{class:"btn btn-secondary",onClick:r[11]||(r[11]=o=>s.$emit("generate-poster"))},"生成海报")]),f("div",Nb,[r[31]||(r[31]=f("label",null,"风格选择",-1)),At(f("select",{"onUpdate:modelValue":r[12]||(r[12]=o=>zt(i)?i.value=o:i=o),class:"input"},[...r[30]||(r[30]=[f("option",{value:"治愈"},"治愈",-1),f("option",{value:"写实"},"写实",-1),f("option",{value:"科幻"},"科幻",-1)])],512),[[li,Sf(i)]])]),n.generatedMedia.length?(le(),ce("div",Fb,[(le(!0),ce(et,null,ot(n.generatedMedia,o=>(le(),ce("div",{class:"media-card glass-card",key:o.id},[f("div",{class:Ye(["media-thumb",o.type])},null,2),f("div",Ob,[f("strong",null,oe(o.title),1),f("p",null,oe(o.description),1),f("span",null,oe(o.time),1)])]))),128))])):wt("",!0)])):wt("",!0),f("div",Bb,[f("button",{class:"btn btn-secondary",onClick:r[13]||(r[13]=o=>s.$emit("go-to-destiny"))},"返回"),n.compareRoutes.length>=2?(le(),ce("button",{key:0,class:"btn btn-primary",onClick:r[14]||(r[14]=o=>s.$emit("go-to-comparison"))},[...r[33]||(r[33]=[f("span",{class:"btn-icon"},"🔄",-1),sn("开启双窗对比 ",-1)])])):wt("",!0),f("button",{class:"btn btn-primary",onClick:r[15]||(r[15]=o=>s.$emit("go-to-reflection"))},[...r[34]||(r[34]=[f("span",{class:"btn-icon"},"📊",-1),sn("查看属性 ",-1)])])])])]))}},zb=Bn(kb,[["__scopeId","data-v-8983e465"]]),Hb={class:"attributes-sidebar glass-container"},Vb={class:"sidebar-header"},Gb={key:0,class:"sidebar-content"},Wb={class:"attributes-grid"},$b={class:"attribute-header"},Xb={class:"attribute-label"},qb={class:"attribute-bar"},Yb={class:"quick-stats"},jb={class:"stat-card"},Kb={class:"stat-value"},Zb={class:"stat-card"},Jb={class:"stat-value high"},Qb={class:"stat-card"},eE={class:"stat-value low"},tE={class:"ai-mentor glass-card"},nE={class:"mentor-advice"},iE={key:0,class:"trend-preview"},sE={class:"trend-items"},rE={class:"trend-attr"},oE={class:"trend-value"},aE={key:1,class:"sidebar-collapsed"},lE={class:"collapsed-values"},cE=["title"],uE={class:"collapsed-label"},dE={class:"collapsed-value"},fE={__name:"AttributesSidebar",props:{attributes:{type:Object,default:()=>({职业发展:65,财务状况:55,人际关系:70,健康状态:60,个人成长:75})},predictedImpacts:{type:Object,default:()=>({})},showTrendPreview:{type:Boolean,default:!0}},setup(n){const e=n,t=$e(!0),i={career:"职业发展",finance:"财务状况",relationship:"人际关系",health:"健康状态",growth:"个人成长"},s=Rt(()=>{const d=Object.values(e.attributes),p=d.reduce((_,v)=>_+v,0);return Math.round(p/d.length)}),r=Rt(()=>Math.max(...Object.values(e.attributes))),o=Rt(()=>Math.min(...Object.values(e.attributes))),a=$e('根据你的当前属性分布，建议在接下来的选择中重点关注"财务状况"的提升。'),l=d=>d>=80?"high":d>=50?"medium":"low",c=d=>d>=80?"bar-high":d>=60?"bar-medium":d>=40?"bar-low":"bar-critical",u=()=>{const d=["关注财务状况的提升，这是长期稳定的基础。","投入更多时间到人际关系维护，社交资本同样重要。","健康是革命的本钱，建议增加运动频率。","个人成长是持续进步的引擎，不要忽视学习投入。","职业发展需要多维度支撑，不能单点突破。"],p=d[Math.floor(Math.random()*d.length)];a.value=p};return(d,p)=>(le(),ce("div",Hb,[f("div",Vb,[p[1]||(p[1]=f("h3",{class:"sidebar-title"},"动态属性系统",-1)),f("button",{class:Ye(["sidebar-toggle",{expanded:t.value}]),onClick:p[0]||(p[0]=_=>t.value=!t.value)}," ▸ ",2)]),t.value?(le(),ce("div",Gb,[f("div",Wb,[(le(!0),ce(et,null,ot(n.attributes,(_,v)=>(le(),ce("div",{key:v,class:"attribute-item"},[f("div",$b,[f("span",Xb,oe(i[v]||v),1),f("span",{class:Ye(["attribute-value",l(_)])},oe(_),3)]),f("div",qb,[f("div",{class:Ye(["attribute-fill",c(_)]),style:Ut({width:_+"%"})},[...p[2]||(p[2]=[f("div",{class:"fill-shine"},null,-1)])],6),p[3]||(p[3]=f("div",{class:"attribute-threshold threshold-low"},null,-1)),p[4]||(p[4]=f("div",{class:"attribute-threshold threshold-mid"},null,-1)),f("div",{class:Ye(["attribute-glow",c(_)])},null,2)]),p[5]||(p[5]=en('<div class="attribute-markers" data-v-57b18c5d><span class="marker" data-v-57b18c5d>0</span><span class="marker text-center" data-v-57b18c5d>低</span><span class="marker text-center" data-v-57b18c5d>中</span><span class="marker text-center" data-v-57b18c5d>高</span><span class="marker" data-v-57b18c5d>100</span></div>',1))]))),128))]),f("div",Yb,[f("div",jb,[p[6]||(p[6]=f("span",{class:"stat-label"},"平均值",-1)),f("span",Kb,oe(s.value)+"%",1)]),f("div",Zb,[p[7]||(p[7]=f("span",{class:"stat-label"},"最高值",-1)),f("span",Jb,oe(r.value)+"%",1)]),f("div",Qb,[p[8]||(p[8]=f("span",{class:"stat-label"},"最低值",-1)),f("span",eE,oe(o.value)+"%",1)])]),f("div",tE,[p[9]||(p[9]=f("div",{class:"mentor-header"},[f("span",{class:"mentor-avatar"},"🤖"),f("h4",{class:"mentor-title"},"AI顾问建议")],-1)),f("p",nE,oe(a.value),1),f("button",{class:"btn btn-refresh",onClick:u}," 🔄 刷新建议 ")]),n.showTrendPreview?(le(),ce("div",iE,[p[10]||(p[10]=f("h4",null,"预期影响趋势",-1)),f("div",sE,[(le(!0),ce(et,null,ot(n.predictedImpacts,(_,v)=>(le(),ce("div",{key:v,class:Ye(["trend-item",{positive:_>0,negative:_<0}])},[f("span",rE,oe(i[v]),1),f("span",oE,oe(_>0?"+":"")+oe(_),1)],2))),128))])])):wt("",!0),p[11]||(p[11]=f("div",{class:"expansion-guide"},[f("small",null,'点击上方"▸"可折叠此面板')],-1))])):(le(),ce("div",aE,[p[12]||(p[12]=f("div",{class:"collapsed-icon"},"📊",-1)),f("div",lE,[(le(!0),ce(et,null,ot(n.attributes,(_,v)=>{var g;return le(),ce("div",{key:v,class:"collapsed-item",title:i[v]},[f("span",uE,oe((g=i[v])==null?void 0:g.slice(0,2)),1),f("span",dE,oe(_),1)],8,cE)}),128))])]))]))}},hE=Bn(fE,[["__scopeId","data-v-57b18c5d"]]),pE={class:"comparison-view"},mE={class:"comparison-container glass-container"},gE={class:"comparison-main"},_E={class:"left-sidebar"},vE={class:"comparison-area"},xE={class:"comparison-header"},yE={class:"comparison-controls"},SE={key:0,class:"route-selector glass-card"},ME={class:"selector-grid"},bE=["onClick"],EE={class:"route-name"},TE={class:"route-feasibility"},AE={key:1,class:"comparison-content side-by-side"},wE={class:"route-window left-window"},RE={class:"route-title"},CE={class:"route-description"},PE={class:"metrics"},DE={class:"metric-item"},LE={class:"metric-bar"},IE={class:"metric-value"},UE={class:"metric-item"},NE={class:"metric-item"},FE={class:"metric-badge benefit"},OE={class:"attribute-impact"},BE={class:"impact-list"},kE={class:"route-window right-window"},zE={class:"route-title"},HE={class:"route-description"},VE={class:"metrics"},GE={class:"metric-item"},WE={class:"metric-bar"},$E={class:"metric-value"},XE={class:"metric-item"},qE={class:"metric-item"},YE={class:"metric-badge benefit"},jE={class:"attribute-impact"},KE={class:"impact-list"},ZE={key:2,class:"comparison-content slider-mode"},JE={class:"slider-container glass-card"},QE={class:"slider-content"},e1={key:0,class:"route-card glass-card"},t1={class:"route-title"},n1={class:"route-description"},i1={key:0,class:"route-card glass-card"},s1={class:"route-title"},r1={class:"route-description"},o1={key:3,class:"comparison-content blend-mode"},a1={class:"blend-container"},l1={class:"route-card glass-card"},c1={class:"route-title"},u1={class:"metrics"},d1={class:"metric-item"},f1={class:"metric-bar"},h1={key:4,class:"comparison-analysis glass-card"},p1={class:"analysis-grid"},m1={class:"analysis-item"},g1={class:"analysis-item"},_1={class:"analysis-value"},v1={class:"analysis-item"},x1={class:"analysis-value"},y1={class:"right-sidebar"},S1={class:"social-dynamics glass-card"},M1={class:"social-text"},b1={class:"policy-info glass-card"},E1={class:"policy-title"},T1={class:"policy-text"},A1={class:"policy-date"},w1={class:"comparison-footer"},R1={class:"expanded-header"},C1={class:"expanded-title"},P1={class:"expanded-description"},D1={class:"expanded-metrics"},L1={class:"expanded-metric"},I1={class:"metric-bar large"},U1={class:"metric-value"},N1={class:"expanded-metric"},F1={class:"expanded-metric"},O1={class:"metric-badge benefit large"},B1={class:"expanded-impacts"},k1={class:"impact-list"},z1={__name:"ComparisonView",props:{routes:{type:Array,default:()=>[]},attributes:{type:Object,default:()=>({})}},emits:["go-back","confirm-selection","route-selected"],setup(n,{emit:e}){const t=n,i=e,s=$e("side-by-side"),r=$e([]),o=$e(50);let a=!1;const l=$e(null);jn(()=>t.routes,C=>{C&&C.length>=2?r.value=[C[0],C[1]]:C&&C.length===1&&(r.value=[C[0]])},{immediate:!0,deep:!0});const c=C=>{C&&(l.value=C)},u=()=>{l.value=null},d={career:"职业发展",finance:"财务状况",relationship:"人际关系",health:"健康状态",growth:"个人成长"},p=C=>C?C.impacts?C.impacts:{career:C.feasibility||0,finance:C.feasibility*.8||0,relationship:50,health:60,growth:C.feasibility*.9||0}:{},_=[{id:1,category:"行业",text:"2025年AI行业增速预计20.3%，投融资超6000亿"},{id:2,category:"政策",text:"国家发布《十四五数字经济发展规划》支持新兴产业"},{id:3,category:"数据",text:"互联网行业平均薪资同比增长22.3%"}],v=[{id:1,title:"教育支持政策",description:"国家继续教育计划支持职业技能提升",date:"2025年1月"},{id:2,title:"创业扶持政策",description:"创新创业基金增加到100亿元规模",date:"2025年1月"}],g=C=>({低:"easy",中等:"medium",高:"hard"})[C]||"medium",m=()=>{if(r.value.length<2)return 0;const C=r.value[0].feasibility||0,w=r.value[1].feasibility||0;return C-w},h=()=>{if(r.value.length>=2){const C=r.value[0];r.value[0]=r.value[1],r.value[1]=C}},b=C=>{r.value.length<2?r.value.push(C):r.value[1]=C},R=C=>{i("route-selected",C)},M=C=>{a=!0,document.addEventListener("mousemove",L),document.addEventListener("mouseup",I)},L=C=>{if(!a)return;const w=document.querySelector(".slider-container");if(!w)return;const A=w.getBoundingClientRect(),E=(C.clientX-A.left)/A.width*100;o.value=Math.max(0,Math.min(100,E))},I=()=>{a=!1,document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",I)};return(C,w)=>{var A,E,D,X,k,V,Z,G,te,z,_e,Me,ve,we,Oe,ne,ge,Ee;return le(),ce("div",pE,[w[42]||(w[42]=f("div",{class:"light-beam beam-1"},null,-1)),w[43]||(w[43]=f("div",{class:"light-beam beam-2"},null,-1)),w[44]||(w[44]=f("div",{class:"light-beam beam-3"},null,-1)),f("div",mE,[w[41]||(w[41]=en('<div class="beam-accent top-left" data-v-d306c8dc></div><div class="beam-accent top-right" data-v-d306c8dc></div><div class="beam-accent bottom-left" data-v-d306c8dc></div><div class="beam-accent bottom-right" data-v-d306c8dc></div><div class="header-section" data-v-d306c8dc><div class="header-icon" data-v-d306c8dc><svg width="40" height="40" viewBox="0 0 24 24" fill="none" data-v-d306c8dc><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#compGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d306c8dc></path><polyline points="22 4 12 14.01 9 11.01" stroke="url(#compGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d306c8dc></polyline><defs data-v-d306c8dc><linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="100%" data-v-d306c8dc><stop offset="0%" stop-color="#ffd700" data-v-d306c8dc></stop><stop offset="50%" stop-color="#d4a574" data-v-d306c8dc></stop><stop offset="100%" stop-color="#cd7f32" data-v-d306c8dc></stop></linearGradient></defs></svg></div><h1 class="main-title" data-v-d306c8dc>人生分岔路</h1><p class="subtitle" data-v-d306c8dc>AIGC人生规划与决策辅助互动产品</p></div>',5)),f("div",gE,[f("aside",_E,[bt(hE,{attributes:n.attributes,showTrendPreview:!0},null,8,["attributes"])]),f("main",vE,[f("div",xE,[w[12]||(w[12]=f("h2",{class:"comparison-title"},"平行空间双窗对比",-1)),f("div",yE,[f("button",{class:Ye(["btn btn-small",{active:s.value==="side-by-side"}]),onClick:w[0]||(w[0]=ie=>s.value="side-by-side")}," ▭▭ 并排 ",2),f("button",{class:Ye(["btn btn-small",{active:s.value==="slider"}]),onClick:w[1]||(w[1]=ie=>s.value="slider")}," ⇄ 滑块 ",2),f("button",{class:Ye(["btn btn-small",{active:s.value==="blend"}]),onClick:w[2]||(w[2]=ie=>s.value="blend")}," ◐ 融合 ",2),r.value.length>=2?(le(),ce("button",{key:0,class:"btn btn-small",onClick:h}," ⇅ 交换 ")):wt("",!0)])]),n.routes.length>2?(le(),ce("div",SE,[w[13]||(w[13]=f("div",{class:"selector-header"},[f("h4",null,"🔄 切换对比路线")],-1)),f("div",ME,[(le(!0),ce(et,null,ot(n.routes,(ie,Le)=>(le(),ce("div",{key:Le,class:"route-option"},[f("button",{class:Ye(["route-btn",{selected:r.value.includes(ie)}]),onClick:He=>b(ie)},[f("span",EE,oe(ie.title),1),f("span",TE,oe(ie.feasibility)+"%",1)],10,bE)]))),128))])])):wt("",!0),s.value==="side-by-side"?(le(),ce("div",AE,[f("div",wE,[f("div",{class:"route-card glass-card",onClick:w[4]||(w[4]=ie=>c(r.value[0]))},[w[18]||(w[18]=f("div",{class:"expand-hint"},"点击放大",-1)),w[19]||(w[19]=f("div",{class:"route-glow"},null,-1)),f("div",{class:Ye(["route-type",(A=r.value[0])==null?void 0:A.type])},oe((E=r.value[0])==null?void 0:E.type),3),f("h3",RE,oe((D=r.value[0])==null?void 0:D.title),1),f("p",CE,oe((X=r.value[0])==null?void 0:X.description),1),f("div",PE,[f("div",DE,[w[14]||(w[14]=f("span",{class:"metric-label"},"可行性",-1)),f("div",LE,[f("div",{class:"metric-fill",style:Ut({width:((k=r.value[0])==null?void 0:k.feasibility)+"%"})},null,4)]),f("span",IE,oe((V=r.value[0])==null?void 0:V.feasibility)+"%",1)]),f("div",UE,[w[15]||(w[15]=f("span",{class:"metric-label"},"难度",-1)),f("span",{class:Ye(["metric-badge",g((Z=r.value[0])==null?void 0:Z.difficulty)])},oe((G=r.value[0])==null?void 0:G.difficulty),3)]),f("div",NE,[w[16]||(w[16]=f("span",{class:"metric-label"},"预期收益",-1)),f("span",FE,oe((te=r.value[0])==null?void 0:te.benefit),1)])]),f("div",OE,[w[17]||(w[17]=f("h4",null,"属性影响",-1)),f("div",BE,[(le(!0),ce(et,null,ot(p(r.value[0]),(ie,Le)=>(le(),ce("div",{key:Le,class:Ye(["impact-tag",{positive:ie>=0,negative:ie<0}])},oe(d[Le])+" "+oe(ie>0?"+":"")+oe(ie),3))),128))])]),f("button",{class:"btn btn-primary full-width",onClick:w[3]||(w[3]=Pi(ie=>R(r.value[0]),["stop"]))}," 选择此路线 ")])]),f("div",kE,[f("div",{class:"route-card glass-card",onClick:w[6]||(w[6]=ie=>c(r.value[1]))},[w[24]||(w[24]=f("div",{class:"expand-hint"},"点击放大",-1)),w[25]||(w[25]=f("div",{class:"route-glow"},null,-1)),f("div",{class:Ye(["route-type",(z=r.value[1])==null?void 0:z.type])},oe((_e=r.value[1])==null?void 0:_e.type),3),f("h3",zE,oe((Me=r.value[1])==null?void 0:Me.title),1),f("p",HE,oe((ve=r.value[1])==null?void 0:ve.description),1),f("div",VE,[f("div",GE,[w[20]||(w[20]=f("span",{class:"metric-label"},"可行性",-1)),f("div",WE,[f("div",{class:"metric-fill",style:Ut({width:((we=r.value[1])==null?void 0:we.feasibility)+"%"})},null,4)]),f("span",$E,oe((Oe=r.value[1])==null?void 0:Oe.feasibility)+"%",1)]),f("div",XE,[w[21]||(w[21]=f("span",{class:"metric-label"},"难度",-1)),f("span",{class:Ye(["metric-badge",g((ne=r.value[1])==null?void 0:ne.difficulty)])},oe((ge=r.value[1])==null?void 0:ge.difficulty),3)]),f("div",qE,[w[22]||(w[22]=f("span",{class:"metric-label"},"预期收益",-1)),f("span",YE,oe((Ee=r.value[1])==null?void 0:Ee.benefit),1)])]),f("div",jE,[w[23]||(w[23]=f("h4",null,"属性影响",-1)),f("div",KE,[(le(!0),ce(et,null,ot(p(r.value[1]),(ie,Le)=>(le(),ce("div",{key:Le,class:Ye(["impact-tag",{positive:ie>=0,negative:ie<0}])},oe(d[Le])+" "+oe(ie>0?"+":"")+oe(ie),3))),128))])]),f("button",{class:"btn btn-primary full-width",onClick:w[5]||(w[5]=Pi(ie=>R(r.value[1]),["stop"]))}," 选择此路线 ")])])])):s.value==="slider"?(le(),ce("div",ZE,[f("div",JE,[f("div",QE,[f("div",{class:"slider-left",style:Ut({width:o.value+"%"})},[r.value[0]?(le(),ce("div",e1,[w[26]||(w[26]=f("div",{class:"route-glow"},null,-1)),f("div",{class:Ye(["route-type",r.value[0].type])},oe(r.value[0].type),3),f("h3",t1,oe(r.value[0].title),1),f("p",n1,oe(r.value[0].description),1)])):wt("",!0)],4),f("div",{class:"slider-right",style:Ut({width:100-o.value+"%"})},[r.value[1]?(le(),ce("div",i1,[w[27]||(w[27]=f("div",{class:"route-glow"},null,-1)),f("div",{class:Ye(["route-type",r.value[1].type])},oe(r.value[1].type),3),f("h3",s1,oe(r.value[1].title),1),f("p",r1,oe(r.value[1].description),1)])):wt("",!0)],4),f("div",{class:"slider-handle",style:Ut({left:o.value+"%"}),onMousedown:M,onTouchstart:M},[...w[28]||(w[28]=[f("span",{class:"slider-arrow"},"⇄",-1)])],36)]),At(f("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":w[7]||(w[7]=ie=>o.value=ie),class:"slider-input"},null,512),[[pn,o.value]])])])):s.value==="blend"?(le(),ce("div",o1,[f("div",a1,[(le(!0),ce(et,null,ot(r.value,(ie,Le)=>(le(),ce("div",{key:Le,class:"blend-layer",style:{opacity:.5}},[f("div",l1,[w[30]||(w[30]=f("div",{class:"route-glow"},null,-1)),f("div",{class:Ye(["route-type",ie.type])},oe(ie.type),3),f("h3",c1,oe(ie.title),1),f("div",u1,[f("div",d1,[w[29]||(w[29]=f("span",{class:"metric-label"},"可行性",-1)),f("div",f1,[f("div",{class:"metric-fill",style:Ut({width:ie.feasibility+"%"})},null,4)])])])])]))),128))])])):wt("",!0),r.value.length===2?(le(),ce("div",h1,[w[34]||(w[34]=f("div",{class:"analysis-header"},[f("h4",null,"对比分析")],-1)),f("div",p1,[f("div",m1,[w[31]||(w[31]=f("span",{class:"analysis-label"},"综合评分差异",-1)),f("span",{class:Ye(["analysis-value",m()>=0?"positive":"negative"])},oe(m()>0?"+":"")+oe(m()),3)]),f("div",g1,[w[32]||(w[32]=f("span",{class:"analysis-label"},"难度对比",-1)),f("span",_1,oe(r.value[0].difficulty)+" vs "+oe(r.value[1].difficulty),1)]),f("div",v1,[w[33]||(w[33]=f("span",{class:"analysis-label"},"收益期望",-1)),f("span",x1,oe(r.value[0].benefit)+" vs "+oe(r.value[1].benefit),1)])])])):wt("",!0)]),f("aside",y1,[f("div",S1,[w[35]||(w[35]=f("div",{class:"panel-header"},[f("h3",{class:"panel-title"},"社会现实联动")],-1)),(le(),ce(et,null,ot(_,ie=>f("div",{class:"social-item",key:ie.id},[f("span",{class:Ye(["social-tag",ie.category])},oe(ie.category),3),f("p",M1,oe(ie.text),1)])),64))]),f("div",b1,[w[36]||(w[36]=f("div",{class:"panel-header"},[f("h3",{class:"panel-title"},"教育/共聚政策")],-1)),(le(),ce(et,null,ot(v,ie=>f("div",{class:"policy-item",key:ie.id},[f("h4",E1,oe(ie.title),1),f("p",T1,oe(ie.description),1),f("span",A1,oe(ie.date),1)])),64))])])]),f("div",w1,[f("button",{class:"btn btn-secondary",onClick:w[8]||(w[8]=ie=>C.$emit("go-back"))},"← 返回"),f("button",{class:"btn btn-primary",onClick:w[9]||(w[9]=ie=>C.$emit("confirm-selection"))},"确认选择")]),(le(),zc(im,{to:"body"},[l.value?(le(),ce("div",{key:0,class:"expanded-modal",onClick:u},[f("div",{class:"expanded-content glass-container",onClick:w[11]||(w[11]=Pi(()=>{},["stop"]))},[f("button",{class:"expanded-close",onClick:u},"×"),f("div",R1,[f("div",{class:Ye(["route-type",l.value.type])},oe(l.value.type),3),f("h2",C1,oe(l.value.title),1),f("p",P1,oe(l.value.description),1)]),f("div",D1,[f("div",L1,[w[37]||(w[37]=f("span",{class:"metric-label"},"可行性",-1)),f("div",I1,[f("div",{class:"metric-fill",style:Ut({width:l.value.feasibility+"%"})},null,4)]),f("span",U1,oe(l.value.feasibility)+"%",1)]),f("div",N1,[w[38]||(w[38]=f("span",{class:"metric-label"},"难度",-1)),f("span",{class:Ye(["metric-badge large",g(l.value.difficulty)])},oe(l.value.difficulty),3)]),f("div",F1,[w[39]||(w[39]=f("span",{class:"metric-label"},"预期收益",-1)),f("span",O1,oe(l.value.benefit),1)])]),f("div",B1,[w[40]||(w[40]=f("h4",null,"属性影响",-1)),f("div",k1,[(le(!0),ce(et,null,ot(p(l.value),(ie,Le)=>(le(),ce("div",{key:Le,class:Ye(["impact-tag large",{positive:ie>=0,negative:ie<0}])},oe(d[Le])+" "+oe(ie>0?"+":"")+oe(ie),3))),128))])]),f("button",{class:"btn btn-primary full-width",onClick:w[10]||(w[10]=ie=>R(l.value))}," 选择此路线 ")])])):wt("",!0)]))])])}}},H1=Bn(z1,[["__scopeId","data-v-d306c8dc"]]),V1={class:"reflection-view"},G1={class:"reflection-container"},W1={class:"compass glass-container"},$1={class:"compass-directions"},X1={class:"attribute-bar"},q1={class:"attribute-narrative"},Y1={class:"visualization-section glass-container"},j1={class:"visualization-options"},K1={class:"chart-container"},Z1={key:0,class:"radar-chart"},J1={class:"radar-svg",viewBox:"0 0 240 240","aria-hidden":"true"},Q1={class:"radar-axes"},eT=["x2","y2"],tT=["points"],nT={class:"radar-labels"},iT=["x","y"],sT={class:"radar-legend"},rT={key:1,class:"trend-chart"},oT={class:"trend-svg",viewBox:"0 0 440 220","aria-hidden":"true"},aT=["d"],lT={class:"trend-legend"},cT={key:2,class:"impact-chart"},uT={key:0,class:"impact-list"},dT={class:"impact-title"},fT={class:"impact-meta"},hT={class:"impact-tags"},pT={key:1,class:"impact-empty"},mT={class:"social-sidebar glass-container"},gT={class:"source"},_T={class:"update-time"},vT={class:"reflection-controls"},xT={__name:"ReflectionView",props:{attributes:{type:Object,required:!0},attributeHistory:{type:Array,required:!0},impactHistory:{type:Array,required:!0},currentChart:{type:String,required:!0},radarAxes:{type:Array,required:!0},radarAxisPoints:{type:Array,required:!0},radarPolygon:{type:String,required:!0},axisLabelMap:{type:Object,required:!0},socialFeed:{type:Array,required:!0}},emits:["show-radar","show-trend","show-impact","refresh-social","go-to-divergence","go-to-mentorship"],setup(n,{emit:e}){const t=n,i=a=>{const l=t.attributeHistory||[];if(!l.length)return"";const c=400,u=180,d=l.length>1?c/(l.length-1):c;return l.map((p,_)=>{const v=Math.max(0,Math.min(100,Number((p==null?void 0:p[a])??0))),g=20+_*d,m=200-v/100*u;return`${_===0?"M":"L"}${g},${m}`}).join(" ")},s=a=>a>=80?"level-high":a>=60?"level-medium":"level-low",r=a=>a>=80?"顶尖":a>=60?"良好":a>=40?"一般":"初级",o=(a,l)=>{const c={career:{high:"你的职业发展前景广阔，有很大的晋升空间。",medium:"你的职业发展稳定，有一定的成长机会。",low:"你的职业发展面临挑战，需要更多努力。"},finance:{high:"你的财务状况良好，有足够的储蓄和投资。",medium:"你的财务状况稳定，能够满足基本需求。",low:"你的财务状况紧张，需要更合理的规划。"},relationship:{high:"你的人际关系和谐，社交网络广泛。",medium:"你的人际关系稳定，有几个知心朋友。",low:"你的人际关系需要改善，建议主动社交。"},health:{high:"你的健康状态良好，充满活力。",medium:"你的健康状态一般，需要注意保养。",low:"你的健康状态不佳，建议加强锻炼。"},growth:{high:"你保持持续学习，个人成长迅速。",medium:"你有一定的学习意识，能够不断进步。",low:"你需要更主动地学习和成长。"}};let u="low";return l>=80?u="high":l>=60&&(u="medium"),c[a][u]};return(a,l)=>(le(),ce("div",V1,[f("div",G1,[l[11]||(l[11]=f("h1",{class:"title"},"观心",-1)),f("div",W1,[l[6]||(l[6]=f("div",{class:"compass-center"},[f("h2",null,"属性罗盘"),f("p",null,"基于你的选择和经历生成")],-1)),f("div",$1,[(le(!0),ce(et,null,ot(n.radarAxes,c=>(le(),ce("div",{class:"direction",key:c.key},[f("div",{class:Ye(["direction-icon",c.key])},null,2),f("h3",null,oe(c.label),1),f("div",{class:Ye(["attribute-level",s(n.attributes[c.key])])},oe(r(n.attributes[c.key])),3),f("div",X1,[f("div",{class:"attribute-fill",style:Ut({width:n.attributes[c.key]+"%"})},null,4)]),f("p",q1,oe(o(c.key,n.attributes[c.key])),1)]))),128))])]),f("div",Y1,[l[9]||(l[9]=f("h3",null,"属性趋势",-1)),f("div",j1,[f("button",{class:"btn btn-secondary small",onClick:l[0]||(l[0]=c=>a.$emit("show-radar"))},"雷达图"),f("button",{class:"btn btn-secondary small",onClick:l[1]||(l[1]=c=>a.$emit("show-trend"))},"趋势曲线"),f("button",{class:"btn btn-secondary small",onClick:l[2]||(l[2]=c=>a.$emit("show-impact"))},"影响溯源")]),f("div",K1,[n.currentChart==="radar"?(le(),ce("div",Z1,[(le(),ce("svg",J1,[l[7]||(l[7]=f("g",{class:"radar-grid"},[f("circle",{cx:"120",cy:"120",r:"90"}),f("circle",{cx:"120",cy:"120",r:"60"}),f("circle",{cx:"120",cy:"120",r:"30"})],-1)),f("g",Q1,[(le(!0),ce(et,null,ot(n.radarAxes,(c,u)=>(le(),ce("line",{key:c.key,x1:120,y1:120,x2:n.radarAxisPoints[u].x,y2:n.radarAxisPoints[u].y},null,8,eT))),128))]),f("polygon",{class:"radar-shape",points:n.radarPolygon},null,8,tT),f("g",nT,[(le(!0),ce(et,null,ot(n.radarAxes,(c,u)=>(le(),ce("text",{key:c.key,x:n.radarAxisPoints[u].lx,y:n.radarAxisPoints[u].ly},oe(c.label),9,iT))),128))])])),f("div",sT,[(le(!0),ce(et,null,ot(n.radarAxes,c=>(le(),ce("span",{key:c.key},oe(c.label)+" "+oe(n.attributes[c.key])+"%",1))),128))])])):n.currentChart==="trend"?(le(),ce("div",rT,[(le(),ce("svg",oT,[l[8]||(l[8]=en('<g class="trend-grid" data-v-743dc28d><line x1="20" y1="20" x2="20" y2="200" data-v-743dc28d></line><line x1="20" y1="200" x2="420" y2="200" data-v-743dc28d></line><line x1="20" y1="80" x2="420" y2="80" data-v-743dc28d></line><line x1="20" y1="140" x2="420" y2="140" data-v-743dc28d></line></g>',1)),(le(!0),ce(et,null,ot(n.radarAxes,c=>(le(),ce("path",{key:c.key,d:i(c.key),class:Ye(["trend-line",c.key])},null,10,aT))),128))])),f("div",lT,[(le(!0),ce(et,null,ot(n.radarAxes,c=>(le(),ce("span",{key:c.key,class:Ye(["legend-item",c.key])},oe(c.label),3))),128))])])):n.currentChart==="impact"?(le(),ce("div",cT,[n.impactHistory.length?(le(),ce("div",uT,[(le(!0),ce(et,null,ot(n.impactHistory,c=>(le(),ce("div",{class:"impact-item",key:c.id},[f("div",dT,oe(c.title),1),f("div",fT,oe(c.time),1),f("div",hT,[(le(!0),ce(et,null,ot(c.changes,(u,d)=>(le(),ce("span",{key:d,class:Ye(["impact-tag",u>=0?"positive":"negative"])},oe(n.axisLabelMap[d])+" "+oe(u>0?"+":"")+oe(u),3))),128))])]))),128))])):(le(),ce("p",pT,"尚未生成溯源记录，先选择一条路线。"))])):wt("",!0)])]),f("div",mT,[l[10]||(l[10]=f("h3",null,"天下志",-1)),(le(!0),ce(et,null,ot(n.socialFeed,c=>(le(),ce("div",{class:"social-item",key:c.id},[f("span",gT,oe(c.source),1),f("p",null,oe(c.text),1),f("span",_T,oe(c.date),1)]))),128)),f("button",{class:"btn btn-secondary small",onClick:l[3]||(l[3]=c=>a.$emit("refresh-social"))},"刷新数据")]),f("div",vT,[f("button",{class:"btn btn-secondary",onClick:l[4]||(l[4]=c=>a.$emit("go-to-divergence"))},"返回"),f("button",{class:"btn btn-primary",onClick:l[5]||(l[5]=c=>a.$emit("go-to-mentorship"))},"AI顾问")])])]))}},yT=Bn(xT,[["__scopeId","data-v-743dc28d"]]),ST={class:"mentorship-view"},MT={class:"mentorship-layout"},bT={class:"mentorship-main"},ET={class:"crystal-avatar-section"},TT={class:"ai-info"},AT={class:"ai-name-row"},wT={class:"ai-name"},RT={class:"status-text"},CT={class:"ai-description"},PT={class:"ai-tags"},DT={class:"chat-section"},LT={class:"chat-messages"},IT={class:"message-bubble"},UT={class:"message-content"},NT={class:"message-time"},FT={key:0,class:"chat-message ai-message"},OT={class:"chat-input-bar"},BT={class:"input-wrapper"},kT=["disabled"],zT={class:"mentorship-sidebar"},HT={class:"role-selection-card"},VT={class:"role-grid"},GT=["onClick"],WT={class:"role-icon"},$T={class:"role-name"},XT={class:"role-desc"},qT={class:"quick-prompts-card"},YT={class:"prompt-list"},jT=["onClick"],KT={class:"mentorship-footer"},ZT={__name:"MentorshipView",props:["chatMessages","isGeneratingAIResponse","chatInput","currentAI角色","currentAIDescription","isListening"],emits:["send-message","select-ai-role","toggle-voice","go-to-reflection","go-to-conclusion"],setup(n,{emit:e}){const t=n,i=e,s=$e(t.chatInput||""),r=$e(null);jn(()=>t.chatInput,m=>{s.value=m||""}),jn(()=>t.chatMessages,()=>{Lc(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0});const o=()=>{const m=String(s.value||"").trim();m&&(i("send-message",m),s.value="")},a=m=>{s.value=m},l=Rt(()=>t.currentAI角色||"AI顾问"),c=[{id:1,name:"职场导师",shortDesc:"职业发展",iconComponent:{render:()=>yn("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2},[yn("rect",{x:2,y:7,width:20,height:14}),yn("path",{d:"M16 3H8a2 2 0 0 0-2 2v2"})])}},{id:2,name:"情感顾问",shortDesc:"人际关系",iconComponent:{render:()=>yn("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2},[yn("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})])}},{id:3,name:"创业前辈",shortDesc:"创业指导",iconComponent:{render:()=>yn("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2},[yn("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),yn("polyline",{points:"2 17 12 22 22 17"}),yn("polyline",{points:"2 12 12 17 22 12"})])}},{id:4,name:"人生规划师",shortDesc:"长期规划",iconComponent:{render:()=>yn("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2},[yn("circle",{cx:12,cy:12,r:10}),yn("polyline",{points:"12 6 12 12 16 14"})])}}],u={职场导师:["职业规划","职场沟通","晋升策略","技能提升"],情感顾问:["情感疏导","关系修复","沟通技巧","心理建设"],创业前辈:["商业模式","融资策略","团队管理","市场拓展"],人生规划师:["目标设定","时间管理","决策优化","长期视野"]},d=Rt(()=>u[l.value]||["智能顾问","随时响应"]),p=Rt(()=>({"status-online":!t.isGeneratingAIResponse&&!t.isListening,"status-thinking":t.isGeneratingAIResponse,"status-listening":t.isListening})),_=Rt(()=>t.isListening?"聆听中":t.isGeneratingAIResponse?"思考中":"在线"),v=Rt(()=>(Array.isArray(t.chatMessages)?[...t.chatMessages]:[]).map((h,b)=>({role:b%2===0?"ai":"user",content:h,time:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})}))),g=["我最近对职业发展很迷茫","如何平衡工作和生活？","想听听你对我人生选择的建议","有哪些容易被忽略的人生选择？"];return(m,h)=>(le(),ce("div",ST,[h[14]||(h[14]=en('<div class="dna-particles-mentorship" data-v-43c52d20></div><div class="mentorship-header" data-v-43c52d20><div class="header-icon" data-v-43c52d20><svg width="32" height="32" viewBox="0 0 24 24" fill="none" data-v-43c52d20><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43c52d20></path><defs data-v-43c52d20><linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%" data-v-43c52d20><stop offset="0%" stop-color="#ffd700" data-v-43c52d20></stop><stop offset="50%" stop-color="#d4a574" data-v-43c52d20></stop><stop offset="100%" stop-color="#cd7f32" data-v-43c52d20></stop></linearGradient></defs></svg></div><h1 class="title" data-v-43c52d20>论道</h1><p class="subtitle" data-v-43c52d20>与AI顾问深度对话，探索人生更多可能</p></div>',2)),f("div",MT,[f("div",bT,[f("div",ET,[h[5]||(h[5]=en('<div class="crystal-avatar-container" data-v-43c52d20><div class="crystal-halo-ring halo-ring-1" data-v-43c52d20></div><div class="crystal-halo-ring halo-ring-2" data-v-43c52d20></div><div class="crystal-halo-ring halo-ring-3" data-v-43c52d20></div><div class="crystal-avatar" data-v-43c52d20><div class="crystal-core" data-v-43c52d20></div><div class="crystal-shine" data-v-43c52d20></div><div class="floating-particle p1" data-v-43c52d20></div><div class="floating-particle p2" data-v-43c52d20></div><div class="floating-particle p3" data-v-43c52d20></div><div class="floating-particle p4" data-v-43c52d20></div><div class="floating-particle p5" data-v-43c52d20></div></div><div class="avatar-ring-glow" data-v-43c52d20></div></div>',1)),f("div",TT,[f("div",AT,[f("h2",wT,oe(l.value),1),f("div",{class:Ye(["status-indicator",p.value])},[h[4]||(h[4]=f("span",{class:"status-dot"},null,-1)),f("span",RT,oe(_.value),1)],2)]),f("p",CT,oe(n.currentAIDescription),1),f("div",PT,[(le(!0),ce(et,null,ot(d.value,b=>(le(),ce("span",{class:"ai-tag",key:b},oe(b),1))),128))])])]),f("div",DT,[f("div",{class:"chat-container",ref_key:"chatContainer",ref:r},[f("div",LT,[(le(!0),ce(et,null,ot(v.value,(b,R)=>(le(),ce("div",{key:R,class:Ye(["chat-message",b.role==="ai"?"ai-message":"user-message"])},[f("div",IT,[f("div",UT,[f("p",null,oe(b.content),1)]),f("div",NT,oe(b.time),1)])],2))),128)),n.isGeneratingAIResponse?(le(),ce("div",FT,[...h[6]||(h[6]=[f("div",{class:"message-bubble"},[f("div",{class:"message-content typing-content"},[f("div",{class:"typing-indicator"},[f("span"),f("span"),f("span")])]),f("div",{class:"message-time"},"思考中...")],-1)])])):wt("",!0)])],512),f("div",OT,[f("div",BT,[At(f("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=b=>s.value=b),class:"chat-input",placeholder:"输入你的问题...",onKeyup:nh(o,["enter"])},null,544),[[pn,s.value]]),f("button",{class:Ye(["voice-btn",{active:n.isListening}]),onClick:h[1]||(h[1]=b=>m.$emit("toggle-voice"))},[...h[7]||(h[7]=[en('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-43c52d20><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" data-v-43c52d20></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" data-v-43c52d20></path><line x1="12" y1="19" x2="12" y2="23" data-v-43c52d20></line><line x1="8" y1="23" x2="16" y2="23" data-v-43c52d20></line></svg>',1)])],2)]),f("button",{class:"send-btn",onClick:o,disabled:n.isGeneratingAIResponse},[...h[8]||(h[8]=[f("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),f("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})],-1)])],8,kT)])])]),f("aside",zT,[f("div",HT,[h[10]||(h[10]=f("h3",{class:"sidebar-title"},"选择AI角色",-1)),f("div",VT,[(le(),ce(et,null,ot(c,b=>f("button",{key:b.id,class:Ye(["role-card",{selected:n.currentAI角色===b.name}]),onClick:R=>m.$emit("select-ai-role",b.name)},[f("div",WT,[(le(),zc(_m(b.iconComponent)))]),f("span",$T,oe(b.name),1),f("span",XT,oe(b.shortDesc),1),h[9]||(h[9]=f("div",{class:"role-selected-indicator"},null,-1))],10,GT)),64))])]),f("div",qT,[h[11]||(h[11]=f("h3",{class:"sidebar-title"},"快捷提示",-1)),f("div",YT,[(le(),ce(et,null,ot(g,b=>f("button",{class:"prompt-btn",onClick:R=>a(b),key:b},oe(b),9,jT)),64))])])])]),f("div",KT,[f("button",{class:"btn btn-secondary",onClick:h[2]||(h[2]=b=>m.$emit("go-to-reflection"))},[...h[12]||(h[12]=[f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f("polyline",{points:"12 19 5 12 12 5"})],-1),sn(" 返回 ",-1)])]),f("button",{class:"btn btn-primary",onClick:h[3]||(h[3]=b=>m.$emit("go-to-conclusion"))},[...h[13]||(h[13]=[sn(" 终局报告 ",-1),f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),f("polyline",{points:"12 5 19 12 12 19"})],-1)])])])]))}},JT=Bn(ZT,[["__scopeId","data-v-43c52d20"]]),QT={class:"conclusion-view"},eA={class:"conclusion-layout"},tA={class:"conclusion-main"},nA={class:"regret-index-card glass-card"},iA={class:"regret-display"},sA={class:"regret-progress"},rA={class:"progress-track"},oA={class:"regret-text"},aA={class:"ai-advice-card glass-card"},lA={class:"advice-content"},cA={class:"analysis-card glass-card"},uA={class:"analysis-box"},dA={class:"conclusion-sidebar"},fA={class:"saved-paths-card glass-card"},hA={class:"paths-list"},pA={class:"path-number"},mA={class:"path-info"},gA={class:"path-title"},_A={key:0,class:"path-date"},vA={key:0,class:"no-paths"},xA={class:"stats-card glass-card"},yA={class:"stats-grid"},SA={class:"stat-item"},MA={class:"stat-value"},bA={class:"stat-item"},EA={class:"stat-value"},TA={class:"stat-item"},AA={class:"stat-value"},wA={class:"stat-item"},RA={class:"stat-value"},CA={class:"conclusion-footer"},PA={class:"footer-actions"},DA={__name:"ConclusionView",props:{savedPaths:{type:Array,default:()=>[]},regretLevel:{type:Number,default:0},regretText:{type:String,default:""},regretAnalysis:{type:String,default:""},aiAdvice:{type:String,default:""},totalSelections:{type:Number,default:0},explorationTime:{type:String,default:"0分钟"},achievementsUnlocked:{type:Number,default:0},restartCount:{type:Number,default:0}},emits:["restart","go-to-mentorship"],setup(n){const e=n,t=Rt(()=>!e.savedPaths||e.savedPaths.length===0?[]:e.savedPaths.slice(0,10)),i=Rt(()=>e.regretLevel<30?"level-low":e.regretLevel<60?"level-medium":"level-high"),s=Rt(()=>e.regretLevel<30?"linear-gradient(90deg, #00d084, #00a854)":e.regretLevel<60?"linear-gradient(90deg, #ffbf00, #ff9500)":"linear-gradient(90deg, #ff6b6b, #ff4444)"),r=()=>{const o={regretLevel:e.regretLevel,regretText:e.regretText,regretAnalysis:e.regretAnalysis,aiAdvice:e.aiAdvice,savedPaths:e.savedPaths,stats:{totalSelections:e.totalSelections,explorationTime:e.explorationTime,achievementsUnlocked:e.achievementsUnlocked,restartCount:e.restartCount}},a=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download="life_journey_report.json",c.click(),URL.revokeObjectURL(l)};return(o,a)=>(le(),ce("div",QT,[a[21]||(a[21]=en('<div class="dna-particles-conclusion" data-v-f85b6af6></div><div class="conclusion-header" data-v-f85b6af6><div class="header-icon" data-v-f85b6af6><svg width="32" height="32" viewBox="0 0 24 24" fill="none" data-v-f85b6af6><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f85b6af6></path><polyline points="22 4 12 14.01 9 11.01" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f85b6af6></polyline><defs data-v-f85b6af6><linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%" data-v-f85b6af6><stop offset="0%" stop-color="#ffd700" data-v-f85b6af6></stop><stop offset="50%" stop-color="#d4a574" data-v-f85b6af6></stop><stop offset="100%" stop-color="#cd7f32" data-v-f85b6af6></stop></linearGradient></defs></svg></div><h1 class="title" data-v-f85b6af6>归途</h1><p class="subtitle" data-v-f85b6af6>终局报告 · 回顾你的人生旅程</p></div>',2)),f("div",eA,[f("div",tA,[f("div",nA,[a[4]||(a[4]=en('<div class="card-header" data-v-f85b6af6><h3 class="card-title" data-v-f85b6af6><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-f85b6af6><circle cx="12" cy="12" r="10" data-v-f85b6af6></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-f85b6af6></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-f85b6af6></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-f85b6af6></line></svg> 后悔指数 </h3></div>',1)),f("div",iA,[f("div",{class:Ye(["regret-number",i.value])},[sn(oe(n.regretLevel)+" ",1),a[2]||(a[2]=f("span",{class:"regret-max"},"/100",-1))],2),f("div",sA,[f("div",rA,[f("div",{class:"progress-fill",style:Ut({width:n.regretLevel+"%",background:s.value})},null,4)]),a[3]||(a[3]=f("div",{class:"progress-labels"},[f("span",null,"无憾"),f("span",null,"微憾"),f("span",null,"遗憾")],-1))])]),f("p",oA,oe(n.regretText),1)]),f("div",aA,[a[5]||(a[5]=f("div",{class:"card-header"},[f("h3",{class:"card-title"},[f("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})]),sn(" AI 人生建议 ")])],-1)),f("div",lA,[f("p",null,oe(n.aiAdvice),1)])]),f("div",cA,[a[6]||(a[6]=f("div",{class:"card-header"},[f("h3",{class:"card-title"},[f("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),sn(" 分析摘要 ")])],-1)),f("pre",uA,oe(n.regretAnalysis),1)])]),f("aside",dA,[f("div",fA,[a[8]||(a[8]=f("div",{class:"card-header"},[f("h3",{class:"card-title"},[f("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})]),sn(" 已保存路径 ")])],-1)),f("div",hA,[(le(!0),ce(et,null,ot(t.value,(l,c)=>(le(),ce("div",{class:"path-item",key:l.id||c,style:Ut({animationDelay:c*.1+"s"})},[f("span",pA,oe(c+1),1),f("div",mA,[f("span",gA,oe(l.title||l.id),1),l.date?(le(),ce("span",_A,oe(l.date),1)):wt("",!0)])],4))),128)),!t.value||t.value.length===0?(le(),ce("div",vA,[...a[7]||(a[7]=[f("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1"},[f("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),f("polyline",{points:"13 2 13 9 20 9"})],-1),f("p",null,"暂无已保存路径",-1)])])):wt("",!0)])]),f("div",xA,[a[17]||(a[17]=en('<div class="card-header" data-v-f85b6af6><h3 class="card-title" data-v-f85b6af6><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-f85b6af6><line x1="18" y1="20" x2="18" y2="10" data-v-f85b6af6></line><line x1="12" y1="20" x2="12" y2="4" data-v-f85b6af6></line><line x1="6" y1="20" x2="6" y2="14" data-v-f85b6af6></line></svg> 旅程统计 </h3></div>',1)),f("div",yA,[f("div",SA,[a[9]||(a[9]=f("div",{class:"stat-icon"},[f("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("polyline",{points:"9 11 12 14 22 4"}),f("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})])],-1)),f("div",MA,oe(n.totalSelections),1),a[10]||(a[10]=f("div",{class:"stat-label"},"总选择数",-1))]),f("div",bA,[a[11]||(a[11]=f("div",{class:"stat-icon"},[f("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("circle",{cx:"12",cy:"12",r:"10"}),f("polyline",{points:"12 6 12 12 16 14"})])],-1)),f("div",EA,oe(n.explorationTime),1),a[12]||(a[12]=f("div",{class:"stat-label"},"探索时长",-1))]),f("div",TA,[a[13]||(a[13]=f("div",{class:"stat-icon"},[f("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})])],-1)),f("div",AA,oe(n.achievementsUnlocked),1),a[14]||(a[14]=f("div",{class:"stat-label"},"成就解锁",-1))]),f("div",wA,[a[15]||(a[15]=f("div",{class:"stat-icon"},[f("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("polyline",{points:"1 4 1 10 7 10"}),f("path",{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"})])],-1)),f("div",RA,oe(n.restartCount),1),a[16]||(a[16]=f("div",{class:"stat-label"},"重新开始",-1))])])])])]),f("div",CA,[f("button",{class:"btn btn-secondary",onClick:a[0]||(a[0]=l=>o.$emit("go-to-mentorship"))},[...a[18]||(a[18]=[f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})],-1),sn(" 继续论道 ",-1)])]),f("div",PA,[f("button",{class:"btn btn-outline",onClick:a[1]||(a[1]=l=>o.$emit("restart"))},[...a[19]||(a[19]=[f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("polyline",{points:"1 4 1 10 7 10"}),f("path",{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"})],-1),sn(" 重新开始 ",-1)])]),f("button",{class:"btn btn-primary",onClick:r},[...a[20]||(a[20]=[f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f("polyline",{points:"7 10 12 15 17 10"}),f("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),sn(" 导出报告 ",-1)])])])])]))}},LA=Bn(DA,[["__scopeId","data-v-f85b6af6"]]),IA={class:"dialog-box"},UA={class:"dialog-header"},NA={class:"dialog-body"},FA=["placeholder"],OA={__name:"InputDialog",props:{show:{type:Boolean,required:!0},title:{type:String,default:"输入信息"},message:{type:String,required:!0},placeholder:{type:String,default:""},defaultValue:{type:String,default:""}},emits:["confirm","cancel"],setup(n,{emit:e}){const t=n,i=e,s=$e(t.defaultValue);jn(()=>t.show,a=>{a&&(s.value=t.defaultValue)});const r=()=>{i("confirm",s.value),s.value=""},o=()=>{i("cancel"),s.value=""};return(a,l)=>n.show?(le(),ce("div",{key:0,class:"dialog-overlay",onClick:Pi(o,["self"])},[f("div",IA,[f("div",UA,[f("h3",null,oe(n.title),1),f("button",{class:"close-btn",onClick:o},"×")]),f("div",NA,[f("p",null,oe(n.message),1),At(f("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),type:"number",class:"dialog-input",placeholder:n.placeholder,onKeydown:nh(r,["enter"]),autoFocus:""},null,40,FA),[[pn,s.value]])]),f("div",{class:"dialog-actions"},[f("button",{class:"btn btn-secondary",onClick:o},"取消"),f("button",{class:"btn btn-primary",onClick:r},"确认")])])])):wt("",!0)}},BA=Bn(OA,[["__scopeId","data-v-d294a030"]]);function Fh(n,e){return function(){return n.apply(e,arguments)}}const{toString:kA}=Object.prototype,{getPrototypeOf:ga}=Object,{iterator:_a,toStringTag:Oh}=Symbol,va=(n=>e=>{const t=kA.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),zn=n=>(n=n.toLowerCase(),e=>va(e)===n),xa=n=>e=>typeof e===n,{isArray:Js}=Array,js=xa("undefined");function Br(n){return n!==null&&!js(n)&&n.constructor!==null&&!js(n.constructor)&&ln(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Bh=zn("ArrayBuffer");function zA(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Bh(n.buffer),e}const HA=xa("string"),ln=xa("function"),kh=xa("number"),kr=n=>n!==null&&typeof n=="object",VA=n=>n===!0||n===!1,No=n=>{if(va(n)!=="object")return!1;const e=ga(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Oh in n)&&!(_a in n)},GA=n=>{if(!kr(n)||Br(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},WA=zn("Date"),$A=zn("File"),XA=n=>!!(n&&typeof n.uri<"u"),qA=n=>n&&typeof n.getParts<"u",YA=zn("Blob"),jA=zn("FileList"),KA=n=>kr(n)&&ln(n.pipe);function ZA(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Nd=ZA(),Fd=typeof Nd.FormData<"u"?Nd.FormData:void 0,JA=n=>{if(!n)return!1;if(Fd&&n instanceof Fd)return!0;const e=ga(n);if(!e||e===Object.prototype||!ln(n.append))return!1;const t=va(n);return t==="formdata"||t==="object"&&ln(n.toString)&&n.toString()==="[object FormData]"},QA=zn("URLSearchParams"),[ew,tw,nw,iw]=["ReadableStream","Request","Response","Headers"].map(zn),sw=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zr(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),Js(n))for(i=0,s=n.length;i<s;i++)e.call(null,n[i],i,n);else{if(Br(n))return;const r=t?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,n[a],a,n)}}function zh(n,e){if(Br(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,s;for(;i-- >0;)if(s=t[i],e===s.toLowerCase())return s;return null}const ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hh=n=>!js(n)&&n!==ts;function vc(){const{caseless:n,skipUndefined:e}=Hh(this)&&this||{},t={},i=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=n&&zh(t,r)||r;No(t[o])&&No(s)?t[o]=vc(t[o],s):No(s)?t[o]=vc({},s):Js(s)?t[o]=s.slice():(!e||!js(s))&&(t[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&zr(arguments[s],i);return t}const rw=(n,e,t,{allOwnKeys:i}={})=>(zr(e,(s,r)=>{t&&ln(s)?Object.defineProperty(n,r,{value:Fh(s,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),ow=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),aw=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},lw=(n,e,t,i)=>{let s,r,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&ga(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},cw=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},uw=n=>{if(!n)return null;if(Js(n))return n;let e=n.length;if(!kh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},dw=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&ga(Uint8Array)),fw=(n,e)=>{const i=(n&&n[_a]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(n,r[0],r[1])}},hw=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},pw=zn("HTMLFormElement"),mw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,s){return i.toUpperCase()+s}),Od=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),gw=zn("RegExp"),Vh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};zr(t,(s,r)=>{let o;(o=e(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},_w=n=>{Vh(n,(e,t)=>{if(ln(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(ln(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},vw=(n,e)=>{const t={},i=s=>{s.forEach(r=>{t[r]=!0})};return Js(n)?i(n):i(String(n).split(e)),t},xw=()=>{},yw=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Sw(n){return!!(n&&ln(n.append)&&n[Oh]==="FormData"&&n[_a])}const Mw=n=>{const e=new Array(10),t=(i,s)=>{if(kr(i)){if(e.indexOf(i)>=0)return;if(Br(i))return i;if(!("toJSON"in i)){e[s]=i;const r=Js(i)?[]:{};return zr(i,(o,a)=>{const l=t(o,s+1);!js(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return t(n,0)},bw=zn("AsyncFunction"),Ew=n=>n&&(kr(n)||ln(n))&&ln(n.then)&&ln(n.catch),Gh=((n,e)=>n?setImmediate:e?((t,i)=>(ts.addEventListener("message",({source:s,data:r})=>{s===ts&&r===t&&i.length&&i.shift()()},!1),s=>{i.push(s),ts.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ln(ts.postMessage)),Tw=typeof queueMicrotask<"u"?queueMicrotask.bind(ts):typeof process<"u"&&process.nextTick||Gh,Aw=n=>n!=null&&ln(n[_a]),q={isArray:Js,isArrayBuffer:Bh,isBuffer:Br,isFormData:JA,isArrayBufferView:zA,isString:HA,isNumber:kh,isBoolean:VA,isObject:kr,isPlainObject:No,isEmptyObject:GA,isReadableStream:ew,isRequest:tw,isResponse:nw,isHeaders:iw,isUndefined:js,isDate:WA,isFile:$A,isReactNativeBlob:XA,isReactNative:qA,isBlob:YA,isRegExp:gw,isFunction:ln,isStream:KA,isURLSearchParams:QA,isTypedArray:dw,isFileList:jA,forEach:zr,merge:vc,extend:rw,trim:sw,stripBOM:ow,inherits:aw,toFlatObject:lw,kindOf:va,kindOfTest:zn,endsWith:cw,toArray:uw,forEachEntry:fw,matchAll:hw,isHTMLForm:pw,hasOwnProperty:Od,hasOwnProp:Od,reduceDescriptors:Vh,freezeMethods:_w,toObjectSet:vw,toCamelCase:mw,noop:xw,toFiniteNumber:yw,findKey:zh,global:ts,isContextDefined:Hh,isSpecCompliantForm:Sw,toJSONObject:Mw,isAsyncFn:bw,isThenable:Ew,setImmediate:Gh,asap:Tw,isIterable:Aw};let Ge=class Wh extends Error{static from(e,t,i,s,r,o){const a=new Wh(e.message,t||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,t,i,s,r){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};Ge.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ge.ERR_BAD_OPTION="ERR_BAD_OPTION";Ge.ECONNABORTED="ECONNABORTED";Ge.ETIMEDOUT="ETIMEDOUT";Ge.ERR_NETWORK="ERR_NETWORK";Ge.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ge.ERR_DEPRECATED="ERR_DEPRECATED";Ge.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ge.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ge.ERR_CANCELED="ERR_CANCELED";Ge.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ge.ERR_INVALID_URL="ERR_INVALID_URL";Ge.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const ww=null;function xc(n){return q.isPlainObject(n)||q.isArray(n)}function $h(n){return q.endsWith(n,"[]")?n.slice(0,-2):n}function fl(n,e,t){return n?n.concat(e).map(function(s,r){return s=$h(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function Rw(n){return q.isArray(n)&&!n.some(xc)}const Cw=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function ya(n,e,t){if(!q.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=q.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!q.isUndefined(h[m])});const i=t.metaTokens,s=t.visitor||d,r=t.dots,o=t.indexes,a=t.Blob||typeof Blob<"u"&&Blob,l=t.maxDepth===void 0?100:t.maxDepth,c=a&&q.isSpecCompliantForm(e);if(!q.isFunction(s))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(q.isDate(g))return g.toISOString();if(q.isBoolean(g))return g.toString();if(!c&&q.isBlob(g))throw new Ge("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(g)||q.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,m,h){let b=g;if(q.isReactNative(e)&&q.isReactNativeBlob(g))return e.append(fl(h,m,r),u(g)),!1;if(g&&!h&&typeof g=="object"){if(q.endsWith(m,"{}"))m=i?m:m.slice(0,-2),g=JSON.stringify(g);else if(q.isArray(g)&&Rw(g)||(q.isFileList(g)||q.endsWith(m,"[]"))&&(b=q.toArray(g)))return m=$h(m),b.forEach(function(M,L){!(q.isUndefined(M)||M===null)&&e.append(o===!0?fl([m],L,r):o===null?m:m+"[]",u(M))}),!1}return xc(g)?!0:(e.append(fl(h,m,r),u(g)),!1)}const p=[],_=Object.assign(Cw,{defaultVisitor:d,convertValue:u,isVisitable:xc});function v(g,m,h=0){if(!q.isUndefined(g)){if(h>l)throw new Ge("Object is too deeply nested ("+h+" levels). Max depth: "+l,Ge.ERR_FORM_DATA_DEPTH_EXCEEDED);if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(g),q.forEach(g,function(R,M){(!(q.isUndefined(R)||R===null)&&s.call(e,R,q.isString(M)?M.trim():M,m,_))===!0&&v(R,m?m.concat(M):[M],h+1)}),p.pop()}}if(!q.isObject(n))throw new TypeError("data must be an object");return v(n),e}function Bd(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Zc(n,e){this._pairs=[],n&&ya(n,this,e)}const Xh=Zc.prototype;Xh.append=function(e,t){this._pairs.push([e,t])};Xh.toString=function(e){const t=e?function(i){return e.call(this,i,Bd)}:Bd;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function Pw(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function qh(n,e,t){if(!e)return n;const i=t&&t.encode||Pw,s=q.isFunction(t)?{serialize:t}:t,r=s&&s.serialize;let o;if(r?o=r(e,s):o=q.isURLSearchParams(e)?e.toString():new Zc(e,s).toString(i),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class kd{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Jc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Dw=typeof URLSearchParams<"u"?URLSearchParams:Zc,Lw=typeof FormData<"u"?FormData:null,Iw=typeof Blob<"u"?Blob:null,Uw={isBrowser:!0,classes:{URLSearchParams:Dw,FormData:Lw,Blob:Iw},protocols:["http","https","file","blob","url","data"]},Qc=typeof window<"u"&&typeof document<"u",yc=typeof navigator=="object"&&navigator||void 0,Nw=Qc&&(!yc||["ReactNative","NativeScript","NS"].indexOf(yc.product)<0),Fw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ow=Qc&&window.location.href||"http://localhost",Bw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qc,hasStandardBrowserEnv:Nw,hasStandardBrowserWebWorkerEnv:Fw,navigator:yc,origin:Ow},Symbol.toStringTag,{value:"Module"})),Xt={...Bw,...Uw};function kw(n,e){return ya(n,new Xt.classes.URLSearchParams,{visitor:function(t,i,s,r){return Xt.isNode&&q.isBuffer(t)?(this.append(i,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function zw(n){return q.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Hw(n){const e={},t=Object.keys(n);let i;const s=t.length;let r;for(i=0;i<s;i++)r=t[i],e[r]=n[r];return e}function Yh(n){function e(t,i,s,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&q.isArray(s)?s.length:o,l?(q.hasOwnProp(s,o)?s[o]=q.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!s[o]||!q.isObject(s[o]))&&(s[o]=[]),e(t,i,s[o],r)&&q.isArray(s[o])&&(s[o]=Hw(s[o])),!a)}if(q.isFormData(n)&&q.isFunction(n.entries)){const t={};return q.forEachEntry(n,(i,s)=>{e(zw(i),s,t,0)}),t}return null}const ws=(n,e)=>n!=null&&q.hasOwnProp(n,e)?n[e]:void 0;function Vw(n,e,t){if(q.isString(n))try{return(e||JSON.parse)(n),q.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Hr={transitional:Jc,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",s=i.indexOf("application/json")>-1,r=q.isObject(e);if(r&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return s?JSON.stringify(Yh(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=ws(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return kw(e,l).toString();if((a=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=ws(this,"env"),u=c&&c.FormData;return ya(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(t.setContentType("application/json",!1),Vw(e)):e}],transformResponse:[function(e){const t=ws(this,"transitional")||Hr.transitional,i=t&&t.forcedJSONParsing,s=ws(this,"responseType"),r=s==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!s||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,ws(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Ge.from(l,Ge.ERR_BAD_RESPONSE,this,null,ws(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],n=>{Hr.headers[n]={}});const Gw=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ww=n=>{const e={};let t,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!t||e[t]&&Gw[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},zd=Symbol("internals"),$w=/[^\x09\x20-\x7E\x80-\xFF]/g;function Xw(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}function lr(n){return n&&String(n).trim().toLowerCase()}function qw(n){return Xw(n.replace($w,""))}function Fo(n){return n===!1||n==null?n:q.isArray(n)?n.map(Fo):qw(String(n))}function Yw(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const jw=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function hl(n,e,t,i,s){if(q.isFunction(i))return i.call(this,e,t);if(s&&(e=t),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function Kw(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Zw(n,e){const t=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let cn=class{constructor(e){e&&this.set(e)}set(e,t,i){const s=this;function r(a,l,c){const u=lr(l);if(!u)throw new Error("header name must be a non-empty string");const d=q.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||l]=Fo(a))}const o=(a,l)=>q.forEach(a,(c,u)=>r(c,u,l));if(q.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(q.isString(e)&&(e=e.trim())&&!jw(e))o(Ww(e),t);else if(q.isObject(e)&&q.isIterable(e)){let a={},l,c;for(const u of e){if(!q.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?q.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,t)}else e!=null&&r(t,e,i);return this}get(e,t){if(e=lr(e),e){const i=q.findKey(this,e);if(i){const s=this[i];if(!t)return s;if(t===!0)return Yw(s);if(q.isFunction(t))return t.call(this,s,i);if(q.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=lr(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||hl(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let s=!1;function r(o){if(o=lr(o),o){const a=q.findKey(i,o);a&&(!t||hl(i,i[a],a,t))&&(delete i[a],s=!0)}}return q.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let i=t.length,s=!1;for(;i--;){const r=t[i];(!e||hl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,i={};return q.forEach(this,(s,r)=>{const o=q.findKey(i,r);if(o){t[o]=Fo(s),delete t[r];return}const a=e?Kw(r):String(r).trim();a!==r&&delete t[r],t[a]=Fo(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,(i,s)=>{i!=null&&i!==!1&&(t[s]=e&&q.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[zd]=this[zd]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=lr(o);i[a]||(Zw(s,o),i[a]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}};cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(cn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});q.freezeMethods(cn);function pl(n,e){const t=this||Hr,i=e||t,s=cn.from(i.headers);let r=i.data;return q.forEach(n,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function jh(n){return!!(n&&n.__CANCEL__)}let Vr=class extends Ge{constructor(e,t,i){super(e??"canceled",Ge.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function Kh(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Ge("Request failed with status code "+t.status,[Ge.ERR_BAD_REQUEST,Ge.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Jw(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Qw(n,e){n=n||10;const t=new Array(n),i=new Array(n);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),t[s]=l,i[s]=c;let d=r,p=0;for(;d!==s;)p+=t[d++],d=d%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<e)return;const _=u&&c-u;return _?Math.round(p*1e3/_):void 0}}function eR(n,e){let t=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{t=u,s=null,r&&(clearTimeout(r),r=null),n(...c)};return[(...c)=>{const u=Date.now(),d=u-t;d>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const Jo=(n,e,t=3)=>{let i=0;const s=Qw(50,250);return eR(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const d={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(d)},t)},Hd=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},Vd=n=>(...e)=>q.asap(()=>n(...e)),tR=Xt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Xt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Xt.origin),Xt.navigator&&/(msie|trident)/i.test(Xt.navigator.userAgent)):()=>!0,nR=Xt.hasStandardBrowserEnv?{write(n,e,t,i,s,r,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(e)}`];q.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),q.isString(i)&&a.push(`path=${i}`),q.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),q.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function iR(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function sR(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Zh(n,e,t){let i=!iR(e);return n&&(i||t===!1)?sR(n,e):e}const Gd=n=>n instanceof cn?{...n}:n;function as(n,e){e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,u,d,p){return q.isPlainObject(c)&&q.isPlainObject(u)?q.merge.call({caseless:p},c,u):q.isPlainObject(u)?q.merge({},u):q.isArray(u)?u.slice():u}function s(c,u,d,p){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c,d,p)}else return i(c,u,d,p)}function r(c,u){if(!q.isUndefined(u))return i(void 0,u)}function o(c,u){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(q.hasOwnProp(e,d))return i(c,u);if(q.hasOwnProp(n,d))return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>s(Gd(c),Gd(u),d,!0)};return q.forEach(Object.keys({...n,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=q.hasOwnProp(l,u)?l[u]:s,p=q.hasOwnProp(n,u)?n[u]:void 0,_=q.hasOwnProp(e,u)?e[u]:void 0,v=d(p,_,u);q.isUndefined(v)&&d!==a||(t[u]=v)}),t}const Jh=n=>{const e=as({},n),t=p=>q.hasOwnProp(e,p)?e[p]:void 0,i=t("data");let s=t("withXSRFToken");const r=t("xsrfHeaderName"),o=t("xsrfCookieName");let a=t("headers");const l=t("auth"),c=t("baseURL"),u=t("allowAbsoluteUrls"),d=t("url");if(e.headers=a=cn.from(a),e.url=qh(Zh(c,d,u),n.params,n.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),q.isFormData(i)){if(Xt.hasStandardBrowserEnv||Xt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(q.isFunction(i.getHeaders)){const p=i.getHeaders(),_=["content-type","content-length"];Object.entries(p).forEach(([v,g])=>{_.includes(v.toLowerCase())&&a.set(v,g)})}}if(Xt.hasStandardBrowserEnv&&(q.isFunction(s)&&(s=s(e)),s===!0||s==null&&tR(e.url))){const _=r&&o&&nR.read(o);_&&a.set(r,_)}return e},rR=typeof XMLHttpRequest<"u",oR=rR&&function(n){return new Promise(function(t,i){const s=Jh(n);let r=s.data;const o=cn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,d,p,_,v;function g(){_&&_(),v&&v(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function h(){if(!m)return;const R=cn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:R,config:n,request:m};Kh(function(C){t(C),g()},function(C){i(C),g()},L),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Ge("Request aborted",Ge.ECONNABORTED,n,m)),m=null)},m.onerror=function(M){const L=M&&M.message?M.message:"Network Error",I=new Ge(L,Ge.ERR_NETWORK,n,m);I.event=M||null,i(I),m=null},m.ontimeout=function(){let M=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||Jc;s.timeoutErrorMessage&&(M=s.timeoutErrorMessage),i(new Ge(M,L.clarifyTimeoutError?Ge.ETIMEDOUT:Ge.ECONNABORTED,n,m)),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&q.forEach(o.toJSON(),function(M,L){m.setRequestHeader(L,M)}),q.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([p,v]=Jo(c,!0),m.addEventListener("progress",p)),l&&m.upload&&([d,_]=Jo(l),m.upload.addEventListener("progress",d),m.upload.addEventListener("loadend",_)),(s.cancelToken||s.signal)&&(u=R=>{m&&(i(!R||R.type?new Vr(null,n,m):R),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const b=Jw(s.url);if(b&&Xt.protocols.indexOf(b)===-1){i(new Ge("Unsupported protocol "+b+":",Ge.ERR_BAD_REQUEST,n));return}m.send(r||null)})},aR=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ge?u:new Vr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Ge(`timeout of ${e}ms exceeded`,Ge.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),n=null)};n.forEach(c=>c.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>q.asap(a),l}},lR=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,s;for(;i<t;)s=i+e,yield n.slice(i,s),i=s},cR=async function*(n,e){for await(const t of uR(n))yield*lR(t,e)},uR=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},Wd=(n,e,t,i)=>{const s=cR(n,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let d=u.byteLength;if(t){let p=r+=d;t(p)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},$d=64*1024,{isFunction:Eo}=q,dR=(({Request:n,Response:e})=>({Request:n,Response:e}))(q.global),{ReadableStream:Xd,TextEncoder:qd}=q.global,Yd=(n,...e)=>{try{return!!n(...e)}catch{return!1}},fR=n=>{n=q.merge.call({skipUndefined:!0},dR,n);const{fetch:e,Request:t,Response:i}=n,s=e?Eo(e):typeof fetch=="function",r=Eo(t),o=Eo(i);if(!s)return!1;const a=s&&Eo(Xd),l=s&&(typeof qd=="function"?(v=>g=>v.encode(g))(new qd):async v=>new Uint8Array(await new t(v).arrayBuffer())),c=r&&a&&Yd(()=>{let v=!1;const g=new t(Xt.origin,{body:new Xd,method:"POST",get duplex(){return v=!0,"half"}}),m=g.headers.has("Content-Type");return g.body!=null&&g.body.cancel(),v&&!m}),u=o&&a&&Yd(()=>q.isReadableStream(new i("").body)),d={stream:u&&(v=>v.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!d[v]&&(d[v]=(g,m)=>{let h=g&&g[v];if(h)return h.call(g);throw new Ge(`Response type '${v}' is not supported`,Ge.ERR_NOT_SUPPORT,m)})});const p=async v=>{if(v==null)return 0;if(q.isBlob(v))return v.size;if(q.isSpecCompliantForm(v))return(await new t(Xt.origin,{method:"POST",body:v}).arrayBuffer()).byteLength;if(q.isArrayBufferView(v)||q.isArrayBuffer(v))return v.byteLength;if(q.isURLSearchParams(v)&&(v=v+""),q.isString(v))return(await l(v)).byteLength},_=async(v,g)=>{const m=q.toFiniteNumber(v.getContentLength());return m??p(g)};return async v=>{let{url:g,method:m,data:h,signal:b,cancelToken:R,timeout:M,onDownloadProgress:L,onUploadProgress:I,responseType:C,headers:w,withCredentials:A="same-origin",fetchOptions:E}=Jh(v),D=e||fetch;C=C?(C+"").toLowerCase():"text";let X=aR([b,R&&R.toAbortSignal()],M),k=null;const V=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let Z;try{if(I&&c&&m!=="get"&&m!=="head"&&(Z=await _(w,h))!==0){let ve=new t(g,{method:"POST",body:h,duplex:"half"}),we;if(q.isFormData(h)&&(we=ve.headers.get("content-type"))&&w.setContentType(we),ve.body){const[Oe,ne]=Hd(Z,Jo(Vd(I)));h=Wd(ve.body,$d,Oe,ne)}}q.isString(A)||(A=A?"include":"omit");const G=r&&"credentials"in t.prototype;if(q.isFormData(h)){const ve=w.getContentType();ve&&/^multipart\/form-data/i.test(ve)&&!/boundary=/i.test(ve)&&w.delete("content-type")}const te={...E,signal:X,method:m.toUpperCase(),headers:w.normalize().toJSON(),body:h,duplex:"half",credentials:G?A:void 0};k=r&&new t(g,te);let z=await(r?D(k,E):D(g,te));const _e=u&&(C==="stream"||C==="response");if(u&&(L||_e&&V)){const ve={};["status","statusText","headers"].forEach(ge=>{ve[ge]=z[ge]});const we=q.toFiniteNumber(z.headers.get("content-length")),[Oe,ne]=L&&Hd(we,Jo(Vd(L),!0))||[];z=new i(Wd(z.body,$d,Oe,()=>{ne&&ne(),V&&V()}),ve)}C=C||"text";let Me=await d[q.findKey(d,C)||"text"](z,v);return!_e&&V&&V(),await new Promise((ve,we)=>{Kh(ve,we,{data:Me,headers:cn.from(z.headers),status:z.status,statusText:z.statusText,config:v,request:k})})}catch(G){throw V&&V(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new Ge("Network Error",Ge.ERR_NETWORK,v,k,G&&G.response),{cause:G.cause||G}):Ge.from(G,G&&G.code,v,k,G&&G.response)}}},hR=new Map,Qh=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:s}=e,r=[i,s,t];let o=r.length,a=o,l,c,u=hR;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:fR(e)),u=c;return c};Qh();const eu={http:ww,xhr:oR,fetch:{get:Qh}};q.forEach(eu,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const jd=n=>`- ${n}`,pR=n=>q.isFunction(n)||n===null||n===!1;function mR(n,e){n=q.isArray(n)?n:[n];const{length:t}=n;let i,s;const r={};for(let o=0;o<t;o++){i=n[o];let a;if(s=i,!pR(i)&&(s=eu[(a=String(i)).toLowerCase()],s===void 0))throw new Ge(`Unknown adapter '${a}'`);if(s&&(q.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(jd).join(`
`):" "+jd(o[0]):"as no adapter specified";throw new Ge("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const ep={getAdapter:mR,adapters:eu};function ml(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Vr(null,n)}function Kd(n){return ml(n),n.headers=cn.from(n.headers),n.data=pl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),ep.getAdapter(n.adapter||Hr.adapter,n)(n).then(function(i){return ml(n),i.data=pl.call(n,n.transformResponse,i),i.headers=cn.from(i.headers),i},function(i){return jh(i)||(ml(n),i&&i.response&&(i.response.data=pl.call(n,n.transformResponse,i.response),i.response.headers=cn.from(i.response.headers))),Promise.reject(i)})}const tp="1.15.2",Sa={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Sa[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Zd={};Sa.transitional=function(e,t,i){function s(r,o){return"[Axios v"+tp+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ge(s(o," has been removed"+(t?" in "+t:"")),Ge.ERR_DEPRECATED);return t&&!Zd[o]&&(Zd[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};Sa.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function gR(n,e,t){if(typeof n!="object")throw new Ge("options must be an object",Ge.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new Ge("option "+r+" must be "+l,Ge.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ge("Unknown option "+r,Ge.ERR_BAD_OPTION)}}const Oo={assertOptions:gR,validators:Sa},Mn=Oo.validators;let ss=class{constructor(e){this.defaults=e||{},this.interceptors={request:new kd,response:new kd}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=as(this.defaults,t);const{transitional:i,paramsSerializer:s,headers:r}=t;i!==void 0&&Oo.assertOptions(i,{silentJSONParsing:Mn.transitional(Mn.boolean),forcedJSONParsing:Mn.transitional(Mn.boolean),clarifyTimeoutError:Mn.transitional(Mn.boolean),legacyInterceptorReqResOrdering:Mn.transitional(Mn.boolean)},!1),s!=null&&(q.isFunction(s)?t.paramsSerializer={serialize:s}:Oo.assertOptions(s,{encode:Mn.function,serialize:Mn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Oo.assertOptions(t,{baseUrl:Mn.spelling("baseURL"),withXsrfToken:Mn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&q.merge(r.common,r[t.method]);r&&q.forEach(["delete","get","head","post","put","patch","common"],v=>{delete r[v]}),t.headers=cn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(g){if(typeof g.runWhen=="function"&&g.runWhen(t)===!1)return;l=l&&g.synchronous;const m=t.transitional||Jc;m&&m.legacyInterceptorReqResOrdering?a.unshift(g.fulfilled,g.rejected):a.push(g.fulfilled,g.rejected)});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,d=0,p;if(!l){const v=[Kd.bind(this),void 0];for(v.unshift(...a),v.push(...c),p=v.length,u=Promise.resolve(t);d<p;)u=u.then(v[d++],v[d++]);return u}p=a.length;let _=t;for(;d<p;){const v=a[d++],g=a[d++];try{_=v(_)}catch(m){g.call(this,m);break}}try{u=Kd.call(this,_)}catch(v){return Promise.reject(v)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=as(this.defaults,e);const t=Zh(e.baseURL,e.url,e.allowAbsoluteUrls);return qh(t,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){ss.prototype[e]=function(t,i){return this.request(as(i||{},{method:e,url:t,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function t(i){return function(r,o,a){return this.request(as(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ss.prototype[e]=t(),ss.prototype[e+"Form"]=t(!0)});let _R=class np{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Vr(r,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new np(function(s){e=s}),cancel:e}}};function vR(n){return function(t){return n.apply(null,t)}}function xR(n){return q.isObject(n)&&n.isAxiosError===!0}const Sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Sc).forEach(([n,e])=>{Sc[e]=n});function ip(n){const e=new ss(n),t=Fh(ss.prototype.request,e);return q.extend(t,ss.prototype,e,{allOwnKeys:!0}),q.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return ip(as(n,s))},t}const Dt=ip(Hr);Dt.Axios=ss;Dt.CanceledError=Vr;Dt.CancelToken=_R;Dt.isCancel=jh;Dt.VERSION=tp;Dt.toFormData=ya;Dt.AxiosError=Ge;Dt.Cancel=Dt.CanceledError;Dt.all=function(e){return Promise.all(e)};Dt.spread=vR;Dt.isAxiosError=xR;Dt.mergeConfig=as;Dt.AxiosHeaders=cn;Dt.formToJSON=n=>Yh(q.isHTMLForm(n)?new FormData(n):n);Dt.getAdapter=ep.getAdapter;Dt.HttpStatusCode=Sc;Dt.default=Dt;const{Axios:BR,AxiosError:kR,CanceledError:zR,isCancel:HR,CancelToken:VR,VERSION:GR,all:WR,Cancel:$R,isAxiosError:XR,spread:qR,toFormData:YR,AxiosHeaders:jR,HttpStatusCode:KR,formToJSON:ZR,getAdapter:JR,mergeConfig:QR}=Dt,tu=Dt.create({baseURL:"http://localhost:11434/api",timeout:3e4}),yR=async(n,e)=>{try{return(await tu.post("/generate",{model:"llama3",prompt:`基于用户信息和当前情境，生成3-5条人生路线建议。

用户信息：${JSON.stringify(n)}
当前情境：${e}

每条路线应包含：
1. 路线名称
2. 详细描述
3. 可行性（0-100%）
4. 难度等级
5. 预期收益
6. 适合的人格类型

请以JSON格式返回结果。`,format:"json",stream:!1})).data}catch(t){return console.error("Error generating route:",t),{routes:[{title:"稳定职业发展",description:"专注于当前职业，通过持续学习和努力工作获得晋升机会。",feasibility:85,difficulty:"中等",benefit:"稳定增长",personality:"风险规避型"},{title:"创业冒险",description:"利用自身技能和资源，创办自己的事业。",feasibility:45,difficulty:"高",benefit:"潜在高回报",personality:"风险偏好型"},{title:"继续教育",description:"回到学校深造，获取更高学历或专业技能。",feasibility:70,difficulty:"中等",benefit:"长期职业竞争力",personality:"学习型"}]}}},SR=async(n,e)=>{try{return(await tu.post("/generate",{model:"llama3",prompt:`作为人生顾问，回答用户问题：${n}

当前情境：${e}

请提供详细、有深度的建议，结合现实因素和个人发展。`,stream:!1})).data.response}catch(t){return console.error("Error getting AI advice:",t),"感谢你的问题，我会认真思考并给你最适合的建议。"}},MR=async n=>{try{return(await tu.post("/generate",{model:"llama3",prompt:`基于用户信息生成一个情境化测评场景。

用户信息：${JSON.stringify(n)}

场景应包含：
1. 具体情境描述
2. 3-4个选择选项
3. 每个选项对应的决策风格

请以JSON格式返回结果。`,format:"json",stream:!1})).data}catch(e){return console.error("Error generating scenario:",e),{scenario:"你突然获得了10万元的意外收入，你会如何处理？",options:[{text:"存入银行，作为紧急储备金",style:"风险规避型"},{text:"投资基金，追求稳健增长",style:"平衡型"},{text:"投资股票，追求高回报",style:"风险偏好型"},{text:"用于学习或提升技能",style:"成长型"}]}}},bR={class:"app"},ER={class:"main-content"},TR={key:0,class:"status-toast"},AR={key:1},wR={key:2},RR={key:3},CR={key:4},PR={key:5},DR={key:6},LR={key:7},IR={__name:"App",setup(n){const e=$e("genesis"),t=$e(""),i=$e(!1),s=$e({title:"输入信息",message:"请输入",placeholder:"",defaultValue:"",onConfirm:null}),r=$e({age:"28",education:"bachelor",occupation:"互联网产品经理",city:"北京",income:"15000",family:"single",skills:"产品设计、数据分析、团队管理",investment:"50000",riskPreference:"moderate",delayGratification:"high",stressResistance:"medium",decisionStyle:"analytical",lifeGoals:"在5年内成为资深产品负责人，建立个人品牌；长期实现财务自由和生活灵活性"}),o=$e(!1),a=$e({scenario:"你收到一个外地高薪 offer，但当前城市已有稳定生活基础，你会怎么选？",options:[{text:"立即转岗追求更高成长",style:"风险偏好型"},{text:"暂时不动，优先稳住基本盘",style:"风险规避型"},{text:"先谈远程或试用期再决定",style:"平衡型"}]}),l=$e([{id:"current",parentId:null,title:"当前人生节点",description:"从你的基础建模出发，展开关键选择。",depth:1,timeline:new Date().toISOString(),children:["branch-stay","branch-jump","branch-startup"]},{id:"branch-stay",parentId:"current",title:"在现公司继续深耕",description:"稳定发展路线，逐步积累管理经验和行业影响力",depth:2,timeline:new Date(Date.now()-10080*60*1e3).toISOString(),children:["stay-promote","stay-transfer"]},{id:"branch-jump",parentId:"current",title:"跳槽到大厂或创业公司",description:"追求更大平台或更大挑战，快速成长",depth:2,timeline:new Date(Date.now()-7200*60*1e3).toISOString(),children:["jump-tech","jump-startup"]},{id:"branch-startup",parentId:"current",title:"独立创业或自由职业",description:"创造个人品牌，获得更高的上升潜力和收入",depth:2,timeline:new Date(Date.now()-4320*60*1e3).toISOString(),children:["startup-own","startup-invest"]},{id:"stay-promote",parentId:"branch-stay",title:"争取晋升为总监",description:"专注于团队建设和战略规划",depth:3,timeline:new Date().toISOString(),children:[]},{id:"stay-transfer",parentId:"branch-stay",title:"转向策略或运营方向",description:"拓宽职业边界，增强竞争力",depth:3,timeline:new Date().toISOString(),children:[]},{id:"jump-tech",parentId:"branch-jump",title:"加入科技大厂（BAT）",description:"获得更优的薪资和平台机会",depth:3,timeline:new Date().toISOString(),children:[]},{id:"jump-startup",parentId:"branch-jump",title:"加入高成长创业公司",description:"获得期权和更多话语权",depth:3,timeline:new Date().toISOString(),children:[]},{id:"startup-own",parentId:"branch-startup",title:"创办自己的公司",description:"打造产品和团队",depth:3,timeline:new Date().toISOString(),children:[]},{id:"startup-invest",parentId:"branch-startup",title:"成为天使投资人/顾问",description:"通过投资和咨询获得收益",depth:3,timeline:new Date().toISOString(),children:[]}]),c=$e("current"),u=Rt(()=>l.value.find(ae=>ae.id===c.value)),d=Rt(()=>l.value.length),p=Rt(()=>l.value.filter(ae=>!ae.children||ae.children.length===0).length),_=Rt(()=>{const ae=u.value;return(ae==null?void 0:ae.depth)||1}),v=$e(1),g=$e({x:0,y:0}),m=$e({x:0,y:0}),h=Rt(()=>({transform:`translate(${g.value.x}px, ${g.value.y}px) scale(${v.value})`,transformOrigin:"center top"})),b=$e(!1),R=$e([{id:"route-growth",title:"快速成长路线",description:"在3-5年内成为行业资深专家，追求职业高度",keyMilestones:["6个月：确定方向","1年：升任主管","3年：升任总监","5年：成为行业专家"],requiredCapital:"50000-100000",riskLevel:"medium",impactFactors:{career:85,growth:90,health:60,relationship:65,finance:75}},{id:"route-balanced",title:"平衡发展路线",description:"在保持工作稳定性的同时，发展副业和个人品牌",keyMilestones:["3个月：启动副业","1年：月收入5000","3年：客户突破100","5年：年收入翻倍"],requiredCapital:"20000-50000",riskLevel:"low",impactFactors:{career:70,growth:75,health:80,relationship:85,finance:65}},{id:"route-entrepreneurship",title:"创业突破路线",description:"在2年内启动创业项目，争取融资和高估值",keyMilestones:["3个月：确定赛道","6个月：产品上线","1年：天使融资","2年：A轮融资"],requiredCapital:"200000-500000",riskLevel:"high",impactFactors:{career:100,growth:100,health:50,relationship:60,finance:90}},{id:"route-freedom",title:"自由职业路线",description:"逐步建立个人品牌，成为行业顾问和讲师",keyMilestones:["6个月：积累1000粉丝","1年：首次付费课程","2年：月收入稳定","3年：成为行业KOL"],requiredCapital:"10000-30000",riskLevel:"medium",impactFactors:{career:80,growth:85,health:85,relationship:75,finance:70}}]),M=$e(!1),L=$e([]),I=$e([]),C=$e(null),w=$e([]),A=$e("ai"),E=$e(""),D=$e({career:70,finance:65,relationship:75,health:68,growth:72}),X=$e([{career:60,finance:55,relationship:70,health:65,growth:60,time:new Date(Date.now()-1440*60*60*1e3).toISOString()},{career:65,finance:60,relationship:72,health:66,growth:65,time:new Date(Date.now()-720*60*60*1e3).toISOString()},{career:68,finance:63,relationship:74,health:67,growth:70,time:new Date(Date.now()-10080*60*1e3).toISOString()},{career:70,finance:65,relationship:75,health:68,growth:72,time:new Date().toISOString()}]),k=$e([{id:"impact_1",title:"完成大型项目交付",changes:{career:5,growth:10},time:new Date(Date.now()-720*60*60*1e3).toLocaleString()},{id:"impact_2",title:"获得年度奖金",changes:{finance:8,relationship:3},time:new Date(Date.now()-360*60*60*1e3).toLocaleString()},{id:"impact_3",title:"带队参加行业大会",changes:{career:3,growth:5},time:new Date(Date.now()-10080*60*1e3).toLocaleString()}]),V=$e("radar"),Z=$e([{key:"career",label:"职业"},{key:"finance",label:"财务"},{key:"relationship",label:"人际"},{key:"health",label:"健康"},{key:"growth",label:"成长"}]),G=Rt(()=>{const y=Z.value.length;return Z.value.map((F,W)=>{const H=Math.PI*2*W/y-Math.PI/2;return{x:120+Math.cos(H)*90,y:120+Math.sin(H)*90,lx:120+Math.cos(H)*108,ly:120+Math.sin(H)*108}})}),te=Rt(()=>{const y=Z.value.length;return Z.value.map((F,W)=>{const H=Math.max(0,Math.min(100,D.value[F.key]||0))/100,O=Math.PI*2*W/y-Math.PI/2,me=90*H,Te=120+Math.cos(O)*me,Ie=120+Math.sin(O)*me;return`${Te},${Ie}`}).join(" ")}),z=$e({career:"职业",finance:"财务",relationship:"人际",health:"健康",growth:"成长"}),_e=$e([{id:"feed_1",source:"国家统计局",text:"青年就业市场回暖，数字服务类岗位增长明显。",date:new Date().toLocaleDateString()},{id:"feed_2",source:"人社公开数据",text:"一线城市生活成本继续上升，择业需同步评估净收益。",date:new Date().toLocaleDateString()},{id:"feed_3",source:"行业观察",text:"AI 应用岗位对跨学科能力需求增强。",date:new Date().toLocaleDateString()}]),Me=$e([]),ve=$e(""),we=$e(!1),Oe=$e("人生规划师"),ne=$e("擅长把你的现实约束和长期目标转成可执行建议。"),ge=$e([]),Ee=$e(20),ie=$e("暂无"),Le=$e("暂无"),He=$e(""),je={职场导师:"聚焦职业路径、能力成长和岗位决策。",情感顾问:"关注关系边界、沟通方式与情绪支持。",创业前辈:"强调资源配置、风险管理和验证节奏。",人生规划师:"平衡职业、财务、关系、健康与成长。"},ke=ae=>{t.value=ae,ae&&setTimeout(()=>t.value="",2500)},P=()=>{X.value.push({...D.value,time:new Date().toISOString()}),X.value.length>24&&X.value.shift(),ue()},N=(ae,xe)=>{k.value.unshift({id:`impact_${Date.now()}`,title:ae,changes:xe,time:new Date().toLocaleString()}),k.value.length>12&&k.value.pop()},T=ae=>{i.value=!1,s.value.onConfirm&&s.value.onConfirm(ae)},ue=()=>{if(!X.value.length){Ee.value=5,ie.value="未开始模拟",Le.value="无历史数据";return}const ae=X.value[X.value.length-1],xe=X.value[X.value.length-2]||ae;let Fe=0;Object.keys(D.value).forEach(H=>{const O=Math.abs((ae[H]||0)-(xe[H]||0));Fe+=O});const y=Object.values(ae).filter(H=>typeof H=="number").reduce((H,O)=>H+O,0)/Object.keys(D.value).length,F=Math.max(0,100-Math.round(y)),W=Math.min(100,Math.round(F+Fe));Ee.value=W,ie.value=W>60?"存在较高后悔风险":"后悔风险可控",Le.value=`最近波动总和 ${Math.round(Fe)}, 属性平均值 ${Math.round(y)}。建议关注降低短期波动，平衡长期目标。`,He.value=Ee.value>60?"建议分散投入、提升抗压能力与延迟满足训练。":"保持当前节奏，逐步验证小规模决策。"},J=ae=>l.value.find(xe=>xe.id===ae),ee=(ae,xe=[])=>{xe.push(ae);const Fe=J(ae);return((Fe==null?void 0:Fe.children)||[]).forEach(y=>ee(y,xe)),xe},se=()=>e.value="destiny",fe=()=>e.value="divergence",Q=()=>e.value="comparison",S=()=>e.value="reflection",x=()=>e.value="mentorship",U=()=>e.value="conclusion",$=()=>e.value="genesis",Y=async()=>{const ae=await MR(r.value);ae!=null&&ae.scenario&&Array.isArray(ae==null?void 0:ae.options)&&(a.value=ae)},j=()=>o.value=!o.value,Se=ae=>{r.value.decisionStyle=ae,o.value=!1;const Fe={风险偏好型:{career:10,finance:5,growth:15,health:-5},风险规避型:{career:0,finance:5,health:10,relationship:5},平衡型:{career:5,finance:8,relationship:5,growth:5,health:5}}[ae]||{};N(`选择决策风格：${ae}`,Fe),P(),ke(`决策风格已记录：${ae}`)},he=()=>ke("已跳过场景"),ye=()=>ke("可以修改信息"),Be=()=>{localStorage.setItem("life_local_backup",JSON.stringify({userInfo:r.value})),ke("已备份")},pe=()=>{localStorage.removeItem("life_local_backup"),ke("已清除")},Ae=ae=>{var Fe,y;if(!ae)return;Me.value.push(ae),M.value=!0;const xe={role:Oe.value,selectedRoute:((Fe=C.value)==null?void 0:Fe.title)||"未选择路线",selectedNode:((y=u.value)==null?void 0:y.title)||"当前人生节点",attributes:D.value,recentImpacts:k.value.slice(0,3)};SR(ae,xe).then(F=>{Me.value.push(`AI(${Oe.value})：${F||"建议暂不可用，请稍后重试。"}`)}).catch(()=>{Me.value.push(`AI(${Oe.value})：建议暂不可用，请稍后重试。`)}).finally(()=>{M.value=!1})},Ne=ae=>{Oe.value=ae,ne.value=je[ae]||"为你提供基于当前节点的决策建议。"},We=()=>{we.value=!we.value,ke(we.value?"开始语音":"停止语音")},be=()=>{var y;const ae=c.value||"current",xe=J(ae);if(!xe)return;const Fe=`分支-${(((y=xe.children)==null?void 0:y.length)||0)+1}`;s.value={title:"新增节点",message:"请输入节点标题：",placeholder:"例如：考虑创业",defaultValue:Fe,onConfirm:F=>{if(!F){ke("已取消");return}s.value={title:"新增节点",message:"请输入节点描述：",placeholder:"例如：在现有工作基础上探索新方向",defaultValue:"一次新的关键选择",onConfirm:W=>{const H=`node_${Date.now()}`,O={id:H,parentId:ae,title:F,description:W||"一次新的关键选择",depth:(xe.depth||1)+1,timeline:new Date().toISOString(),children:[]};xe.children=[...xe.children||[],H],l.value.push(O),c.value=H,P(),ke("已新增节点")}},i.value=!0}},i.value=!0},Xe=()=>{v.value=Math.min(2,+(v.value+.1).toFixed(2))},Ke=()=>{v.value=Math.max(.6,+(v.value-.1).toFixed(2))},ut=()=>{v.value=1,g.value={x:0,y:0}},B=()=>{const ae={exportedAt:new Date().toISOString(),userInfo:r.value,treeNodes:l.value,attributes:D.value,savedPaths:ge.value},xe=new Blob([JSON.stringify(ae,null,2)],{type:"application/json"}),Fe=URL.createObjectURL(xe),y=document.createElement("a");y.href=Fe,y.download="life_tree_export.json",y.click(),URL.revokeObjectURL(Fe),ke("已导出图谱")},Ce=()=>{l.value=[{id:"current",parentId:null,title:"当前人生节点",description:"从你的基础建模出发，展开关键选择。",depth:1,timeline:new Date().toISOString(),children:[]}],c.value="current",ke("树状图已重置")},re=ae=>{b.value=!0,m.value={x:ae.clientX-g.value.x,y:ae.clientY-g.value.y}},de=ae=>{b.value&&(g.value={x:ae.clientX-m.value.x,y:ae.clientY-m.value.y})},De=()=>{b.value=!1},Pe=ae=>{c.value=ae},Qe=ae=>{const xe=J(ae);if(!xe)return;const Fe=window.prompt("编辑节点标题：",xe.title);if(!Fe)return;const y=window.prompt("编辑节点描述：",xe.description||"");xe.title=Fe,xe.description=y||"",ke("节点已更新")},St=ae=>{if(ae==="current"){ke("根节点不可删除");return}const xe=J(ae);if(!xe)return;const Fe=ee(ae);l.value=l.value.filter(F=>!Fe.includes(F.id));const y=J(xe.parentId);y&&(y.children=(y.children||[]).filter(F=>F!==ae)),c.value===ae&&(c.value=(y==null?void 0:y.id)||"current"),ke("节点及其子分支已删除")},Ot=ae=>{const xe=J(ae);xe&&(s.value={title:"延伸分支",message:"请输入要生成的分支数量（2-5）：",placeholder:"输入数字",defaultValue:"2",onConfirm:Fe=>{const y=Number(Fe||2),F=Number.isFinite(y)?Math.max(2,Math.min(5,y)):2,W=[];for(let H=1;H<=F;H+=1){const O=`node_${Date.now()}_${H}`,me={id:O,parentId:ae,title:`${xe.title}-分支${H}`,description:`基于 ${xe.title} 的分支方案 ${H}`,depth:(xe.depth||1)+1,timeline:new Date().toISOString(),children:[]};l.value.push(me),W.push(O)}xe.children=[...xe.children||[],...W],P(),ke(`已延伸 ${F} 个分支`)}},i.value=!0)},at=async()=>{M.value=!0;try{const ae={selectedNode:u.value,city:r.value.city,goals:r.value.lifeGoals,attributes:D.value},xe=await yR(r.value,ae),Fe=Array.isArray(xe==null?void 0:xe.routes)?xe.routes:[];R.value=Fe.slice(0,5).map((y,F)=>({id:y.id||`ai_route_${Date.now()}_${F}`,title:y.title||y.name||`AI路线${F+1}`,description:y.description||"暂无描述",feasibility:Number(y.feasibility??60),difficulty:y.difficulty||"中等",benefit:y.benefit||"中",tag:y.personality||"推荐",tagColor:Number(y.feasibility??60)>=75?"high":Number(y.feasibility??60)>=55?"mid":"low",impacts:{career:Math.round(Math.random()*16-4),finance:Math.round(Math.random()*16-4),relationship:Math.round(Math.random()*12-3),health:Math.round(Math.random()*10-3),growth:Math.round(Math.random()*16-4)}})),ke("AI 路线已生成")}finally{M.value=!1}},un=ae=>{if(!ae)return;C.value=ae,ge.value.unshift({id:ae.id||`path_${Date.now()}`,title:ae.title,route:ae}),ge.value.length>12&&ge.value.pop();const xe=ae.impactFactors||{},Fe={};Object.keys(xe).forEach(y=>{const F=Number(xe[y])||0,W=D.value[y]||0,H=Math.round(F-W),O=Math.max(0,Math.min(100,W+H));D.value[y]=O,Fe[y]=H}),Object.keys(Fe).length&&(N(`选择路线：${ae.title}`,Fe),P()),ke(`已选择路线：${ae.title}`)},Rn=ae=>{const xe=R.value[ae];xe&&(xe.description=`${xe.description}（细化：拆解为季度行动里程碑，并设置可验证指标。）`,xe.feasibility=Math.min(100,Number(xe.feasibility||60)+5),ke(`已细化路线：${xe.title}`))},Gr=ae=>{const xe=R.value[ae];if(!xe)return;const Fe={id:`ai_route_replace_${Date.now()}`,title:`${xe.title}-替代方案`,description:"以更低风险执行同类目标，分阶段验证后再扩大投入。",feasibility:Math.max(45,Number(xe.feasibility||60)-8),difficulty:"中等",benefit:xe.benefit||"中",tag:"替代",tagColor:"mid",impacts:{career:Math.round(Math.random()*12-2),finance:Math.round(Math.random()*10-2),relationship:Math.round(Math.random()*10-2),health:Math.round(Math.random()*10-2),growth:Math.round(Math.random()*12-2)}};R.value.splice(ae,1,Fe),ke("路线已替换")},Wr=ae=>{const xe=L.value.findIndex(Fe=>Fe.id===ae.id);if(xe>=0?L.value.splice(xe,1):(L.value.length<2||L.value.shift(),L.value.push(ae)),L.value.length===2){const[Fe,y]=L.value,F=Object.keys(D.value).map(W=>{var me,Te;const H=Number(((me=Fe.impacts)==null?void 0:me[W])||0),O=Number(((Te=y.impacts)==null?void 0:Te[W])||0);return`${z.value[W]}:${H>=O?`${Fe.title}优(+${H-O})`:`${y.title}优(+${O-H})`}`});ke(`双路径对比：${F.join(" / ")}`)}},Jn=ae=>{const xe=String((ae==null?void 0:ae.title)||"").trim();if(!xe){ke("请先填写路线名称");return}const Fe=String((ae==null?void 0:ae.description)||"").trim(),y=Math.max(0,Math.min(100,Number((ae==null?void 0:ae.feasibility)||50))),F={id:`custom_${Date.now()}`,title:xe,description:Fe||(E.value?`文档摘要：${E.value.slice(0,80)}...`:"自定义路线"),feasibility:y,difficulty:(ae==null?void 0:ae.difficulty)||"中等",benefit:(ae==null?void 0:ae.benefit)||"中等",impacts:{career:Math.round((y-50)/8),finance:Math.round((y-50)/10),relationship:Math.round(Math.random()*10-3),health:Math.round(Math.random()*8-2),growth:Math.round(Math.random()*14-3)}};I.value.unshift(F),ke("自定义路线已添加")},Qs=ae=>{I.value.splice(ae,1),ke("已删除自定义路线")},$r=ae=>{var y,F;const xe=(F=(y=ae==null?void 0:ae.target)==null?void 0:y.files)==null?void 0:F[0];if(!xe)return;const Fe=new FileReader;Fe.onload=W=>{var H;E.value=String(((H=W.target)==null?void 0:H.result)||"").replace(/\s+/g," ").trim(),ke(`已读取文档：${xe.name}`)},Fe.readAsText(xe,"utf-8")},ls=(ae,xe)=>{var Fe;return{id:`${ae}_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,type:ae,title:xe,description:`基于「${((Fe=C.value)==null?void 0:Fe.title)||"当前路线"}」生成`,time:new Date().toLocaleString()}},cs=()=>{w.value.unshift(ls("comic","人生分支漫画")),ke("漫画素材已生成")},Xr=()=>{w.value.unshift(ls("video","15秒分支短视频")),ke("短视频素材已生成")},us=()=>{w.value.unshift(ls("poster","时间轴海报")),ke("海报素材已生成")},qr=()=>{A.value=A.value==="ai"?"custom":"ai"},Yr=()=>{V.value="radar"},Ma=()=>{V.value="trend"},ba=()=>{V.value="impact"},Ea=()=>{const ae=[{source:"教育部公开数据",text:"研究生招生结构持续调整，应用型方向名额增加。"},{source:"招聘平台样本",text:"AI 产品、数据分析、复合型岗位需求增加。"},{source:"城市发展动态",text:`${r.value.city||"目标城市"} 新增人才补贴政策，适合长期规划。`}];_e.value=ae.map((xe,Fe)=>({id:`feed_refresh_${Date.now()}_${Fe}`,...xe,date:new Date().toLocaleDateString()})),ke("社会数据已刷新")};return Nc(()=>{const ae=localStorage.getItem("life_local_backup");if(ae)try{const xe=JSON.parse(ae);xe!=null&&xe.userInfo&&(r.value={...r.value,...xe.userInfo})}catch{}at(),P()}),(ae,xe)=>(le(),ce("div",bR,[xe[4]||(xe[4]=f("div",{class:"starfield","aria-hidden":"true"},null,-1)),f("div",ER,[bt($g,{currentView:e.value,onNavigate:xe[0]||(xe[0]=Fe=>e.value=Fe)},null,8,["currentView"]),t.value?(le(),ce("div",TR,oe(t.value),1)):wt("",!0),bt(BA,{show:i.value,title:s.value.title,message:s.value.message,placeholder:s.value.placeholder,defaultValue:s.value.defaultValue,onConfirm:T,onCancel:xe[1]||(xe[1]=Fe=>i.value=!1)},null,8,["show","title","message","placeholder","defaultValue"]),e.value==="genesis"?(le(),ce("div",AR,[bt(S_,{userInfo:r.value,isCardFlipped:o.value,currentScenario:a.value,statusMessage:t.value,"onUpdate:userInfo":xe[2]||(xe[2]=Fe=>r.value=Fe),onFetchScenario:Y,onFlipCard:j,onSelectOption:Se,onSkipScenario:he,onMarkEdit:ye,onBackup:Be,onClear:pe,onStartDestiny:se},null,8,["userInfo","isCardFlipped","currentScenario","statusMessage"])])):e.value==="destiny"?(le(),ce("div",wR,[bt(JM,{treeNodes:l.value,selectedNode:c.value,selectedNodeData:u.value,nodeCount:d.value,leafCount:p.value,selectedDepth:_.value,treeTransformStyle:h.value,isPanning:b.value,onAddNode:be,onZoomIn:Xe,onZoomOut:Ke,onResetView:ut,onExportTree:B,onResetTree:Ce,onStartPan:re,onPanMove:de,onEndPan:De,onSelectNode:Pe,onEditNode:Qe,onDeleteNode:St,onExtendBranch:Ot,onGoToGenesis:$,onGoToDivergence:fe},null,8,["treeNodes","selectedNode","selectedNodeData","nodeCount","leafCount","selectedDepth","treeTransformStyle","isPanning"])])):e.value==="divergence"?(le(),ce("div",RR,[bt(zb,{aiRoutes:R.value,isGenerating:M.value,compareRoutes:L.value,customRoutes:I.value,selectedRoute:C.value,generatedMedia:w.value,mode:A.value,onGenerateAiRoutes:at,onRefineRoute:Rn,onReplaceRoute:Gr,onToggleCompare:Wr,onSelectRoute:un,onAddCustomRoute:Jn,onRemoveCustomRoute:Qs,onFileUpload:$r,onGenerateComic:cs,onGenerateVideo:Xr,onGeneratePoster:us,onGoToDestiny:se,onGoToComparison:Q,onGoToReflection:S,onToggleMode:qr},null,8,["aiRoutes","isGenerating","compareRoutes","customRoutes","selectedRoute","generatedMedia","mode"])])):e.value==="comparison"?(le(),ce("div",CR,[bt(H1,{routes:L.value,attributes:D.value,onGoBack:xe[3]||(xe[3]=()=>e.value="divergence"),onConfirmSelection:S},null,8,["routes","attributes"])])):e.value==="reflection"?(le(),ce("div",PR,[bt(yT,{attributes:D.value,attributeHistory:X.value,impactHistory:k.value,currentChart:V.value,radarAxes:Z.value,radarAxisPoints:G.value,radarPolygon:te.value,axisLabelMap:z.value,socialFeed:_e.value,onShowRadar:Yr,onShowTrend:Ma,onShowImpact:ba,onRefreshSocial:Ea,onGoToDivergence:fe,onGoToMentorship:x},null,8,["attributes","attributeHistory","impactHistory","currentChart","radarAxes","radarAxisPoints","radarPolygon","axisLabelMap","socialFeed"])])):e.value==="mentorship"?(le(),ce("div",DR,[bt(JT,{chatMessages:Me.value,isGeneratingAIResponse:M.value,chatInput:ve.value,currentAI角色:Oe.value,currentAIDescription:ne.value,isListening:we.value,onSendMessage:Ae,onSelectAiRole:Ne,onToggleVoice:We,onGoToReflection:S,onGoToConclusion:U},null,8,["chatMessages","isGeneratingAIResponse","chatInput","currentAI角色","currentAIDescription","isListening"])])):e.value==="conclusion"?(le(),ce("div",LR,[bt(LA,{savedPaths:ge.value,regretLevel:Ee.value,regretText:ie.value,regretAnalysis:Le.value,aiAdvice:He.value,onRestart:$},null,8,["savedPaths","regretLevel","regretText","regretAnalysis","aiAdvice"])])):wt("",!0)])]))}},UR=Bn(IR,[["__scopeId","data-v-6391ca63"]]);Ig(UR).mount("#app");
