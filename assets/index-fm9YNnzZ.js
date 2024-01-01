(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const ct=(e,t)=>e===t,ne=Symbol("solid-proxy"),at=Symbol("solid-track"),re={equals:ct};let je=He;const j=1,se=2,Be={owned:null,cleanups:null,context:null,owner:null};var p=null;let pe=null,v=null,P=null,M=null,ae=0;function G(e,t){const n=v,r=p,s=e.length===0,i=t===void 0?r:t,o=s?Be:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?e:()=>e(()=>O(()=>fe(o)));p=o,v=null;try{return U(l,!0)}finally{v=n,p=r}}function R(e,t){t=t?Object.assign({},re,t):re;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Ve(n,s));return[qe.bind(n),r]}function C(e,t,n){const r=De(e,t,!1,j);z(r)}function Fe(e,t,n){je=pt;const r=De(e,t,!1,j);(!n||!n.render)&&(r.user=!0),M?M.push(r):z(r)}function A(e,t,n){n=n?Object.assign({},re,n):re;const r=De(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),qe.bind(r)}function O(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function Ue(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(i){i=!1;return}const u=O(()=>t(l,s,o));return s=l,u}}function ut(e){Fe(()=>O(e))}function ue(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function ft(){return p}function dt(e,t){const n=p,r=v;p=e,v=null;try{return U(t,!0)}catch(s){Pe(s)}finally{p=n,v=r}}function ht(e){const t=v,n=p;return Promise.resolve().then(()=>{v=t,p=n;let r;return U(e,!1),v=p=null,r?r.done:void 0})}function Ke(e,t){const n=Symbol("context");return{id:n,Provider:wt(n),defaultValue:e}}function _e(e){return p&&p.context&&p.context[e.id]!==void 0?p.context[e.id]:e.defaultValue}function Te(e){const t=A(e),n=A(()=>ve(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function qe(){if(this.sources&&this.state)if(this.state===j)z(this);else{const e=P;P=null,U(()=>oe(this),!1),P=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function Ve(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&U(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=pe&&pe.running;o&&pe.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?P.push(i):M.push(i),i.observers&&Je(i)),o||(i.state=j)}if(P.length>1e6)throw P=[],new Error},!1)),t}function z(e){if(!e.fn)return;fe(e);const t=ae;gt(e,e.value,t)}function gt(e,t,n){let r;const s=p,i=v;v=p=e;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=j,e.owned&&e.owned.forEach(fe),e.owned=null),e.updatedAt=n+1,Pe(o)}finally{v=i,p=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ve(e,r):e.value=r,e.updatedAt=n)}function De(e,t,n,r=j,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return p===null||p!==Be&&(p.owned?p.owned.push(i):p.owned=[i]),i}function ie(e){if(e.state===0)return;if(e.state===se)return oe(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ae);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===j)z(e);else if(e.state===se){const r=P;P=null,U(()=>oe(e,t[0]),!1),P=r}}function U(e,t){if(P)return e();let n=!1;t||(P=[]),M?n=!0:M=[],ae++;try{const r=e();return mt(n),r}catch(r){n||(M=null),P=null,Pe(r)}}function mt(e){if(P&&(He(P),P=null),e)return;const t=M;M=null,t.length&&U(()=>je(t),!1)}function He(e){for(let t=0;t<e.length;t++)ie(e[t])}function pt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ie(r)}for(t=0;t<n;t++)ie(e[t])}function oe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===j?r!==t&&(!r.updatedAt||r.updatedAt<ae)&&ie(r):s===se&&oe(r,t)}}}function Je(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?P.push(n):M.push(n),n.observers&&Je(n))}}function fe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)fe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function yt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Pe(e,t=p){throw yt(e)}function ve(e){if(typeof e=="function"&&!e.length)return ve(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ve(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function wt(e,t){return function(r){let s;return C(()=>s=O(()=>(p.context={...p.context,[e]:r.value},Te(()=>r.children))),void 0),s}}const bt=Symbol("fallback");function Le(e){for(let t=0;t<e.length;t++)e[t]()}function St(e,t,n={}){let r=[],s=[],i=[],o=0,l=t.length>1?[]:null;return ue(()=>Le(i)),()=>{let u=e()||[],a,c;return u[at],O(()=>{let d=u.length,m,g,h,y,b,_,x,D,L;if(d===0)o!==0&&(Le(i),i=[],r=[],s=[],o=0,l&&(l=[])),n.fallback&&(r=[bt],s[0]=G(he=>(i[0]=he,n.fallback())),o=1);else if(o===0){for(s=new Array(d),c=0;c<d;c++)r[c]=u[c],s[c]=G(f);o=d}else{for(h=new Array(d),y=new Array(d),l&&(b=new Array(d)),_=0,x=Math.min(o,d);_<x&&r[_]===u[_];_++);for(x=o-1,D=d-1;x>=_&&D>=_&&r[x]===u[D];x--,D--)h[D]=s[x],y[D]=i[x],l&&(b[D]=l[x]);for(m=new Map,g=new Array(D+1),c=D;c>=_;c--)L=u[c],a=m.get(L),g[c]=a===void 0?-1:a,m.set(L,c);for(a=_;a<=x;a++)L=r[a],c=m.get(L),c!==void 0&&c!==-1?(h[c]=s[a],y[c]=i[a],l&&(b[c]=l[a]),c=g[c],m.set(L,c)):i[a]();for(c=_;c<d;c++)c in h?(s[c]=h[c],i[c]=y[c],l&&(l[c]=b[c],l[c](c))):s[c]=G(f);s=s.slice(0,o=d),r=u.slice(0)}return s});function f(d){if(i[c]=d,l){const[m,g]=R(c);return l[c]=g,t(u[c],m)}return t(u[c])}}}function $(e,t){return O(()=>e(t||{}))}function W(){return!0}const $e={get(e,t,n){return t===ne?n:e.get(t)},has(e,t){return t===ne?!0:e.has(t)},set:W,deleteProperty:W,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:W,deleteProperty:W}},ownKeys(e){return e.keys()}};function ye(e){return(e=typeof e=="function"?e():e)?e:{}}function vt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ae(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&ne in o,e[i]=typeof o=="function"?(t=!0,A(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=ye(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in ye(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(ye(e[o])));return[...new Set(i)]}},$e);const n={},r={},s=new Set;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);for(let u=0,a=l.length;u<a;u++){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(o,c);if(!s.has(c))f.get?(s.add(c),Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:vt.bind(r[c]=[f.get.bind(o)])})):(f.value!==void 0&&s.add(c),n[c]=f.value);else{const d=r[c];d?f.get?d.push(f.get.bind(o)):f.value!==void 0&&d.push(()=>f.value):n[c]===void 0&&(n[c]=f.value)}}}return n}function $t(e,...t){if(ne in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},$e));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},$e)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,u=0;for(const a of t)a.includes(s)&&(l=!0,o?r[u][s]=i.value:Object.defineProperty(r[u],s,i)),++u;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}const At=e=>`Stale read from <${e}>.`;function xt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(St(()=>e.each,e.children,t||void 0))}function Xe(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return A(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?O(()=>s(t?r:()=>{if(!O(n))throw At("Show");return e.when})):s}return e.fallback},void 0,void 0)}const _t=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Tt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",..._t]),Dt=new Set(["innerHTML","textContent","innerText","children"]),Pt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ct=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Et(e,t){const n=Ct[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Lt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Rt(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,u=t[s-1].nextSibling,a=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!a){a=new Map;let f=l;for(;f<i;)a.set(n[f],f++)}const c=a.get(t[o]);if(c!=null)if(l<c&&c<i){let f=o,d=1,m;for(;++f<s&&f<i&&!((m=a.get(t[f]))==null||m!==c+d);)d++;if(d>c-l){const g=t[o];for(;l<c;)e.insertBefore(n[l++],g)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Re="_$DX_DELEGATE";function Yt(e,t,n,r={}){let s;return G(i=>{s=i,t===document?e():w(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function E(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>O(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function Z(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Ft))}}function le(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function It(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function q(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ce(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function Mt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(Ye(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(Ye(e,l,!0),n[l]=u)}return n}function Nt(e,t,n){if(!t)return n?le(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function kt(e,t={},n,r){const s={};return r||C(()=>s.children=V(e,t.children,s.children)),C(()=>t.ref&&t.ref(e)),C(()=>jt(e,t,n,!0,s,!0)),s}function w(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,n);C(s=>V(e,t(),s,n),r)}function jt(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Ie(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||V(e,t.children);continue}const l=t[o];s[o]=Ie(e,o,l,s[o],n,i)}}function Bt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ye(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ie(e,t,n,r,s,i){let o,l,u,a,c;if(t==="style")return Nt(e,n,r);if(t==="classList")return Mt(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=Ot.has(f);if(!d&&r){const m=Array.isArray(r)?r[0]:r;e.removeEventListener(f,m)}(d||n)&&(Ce(e,f,n,d),d&&Z([f]))}else if(t.slice(0,5)==="attr:")le(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(u=Dt.has(t))||!s&&((a=Et(t,e.tagName))||(l=Tt.has(t)))||(o=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?q(e,n):o&&!l&&!u?e[Bt(t)]=n:e[a||t]=n;else{const f=s&&t.indexOf(":")>-1&&Lt[t.split(":")[0]];f?It(e,f,t,n):le(e,Pt[t]||t,n)}return n}function Ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=K(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=K(e,n,r);else{if(i==="function")return C(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(xe(l,t,n,s))return C(()=>n=V(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=K(e,n,r),o)return n}else u?n.length===0?Me(e,l,r):Rt(e,n,l):(n&&K(e),Me(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=K(e,n,r,t);K(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function xe(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[i],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=xe(e,l,u)||s;else if(a==="function")if(r){for(;typeof l=="function";)l=l();s=xe(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else e.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function Me(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function K(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Ut=!1;function Kt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:u=>{u&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const qt=/^(?:[a-z0-9]+:)?\/\//i,Vt=/^\/+|(\/)\/+$/g;function F(e,t=!1){const n=e.replace(Vt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function te(e,t,n){if(qt.test(t))return;const r=F(e),s=n&&F(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+F(t,!i)}function Ht(e,t){if(e==null)throw new Error(t);return e}function Jt(e,t){return F(e).replace(/\/*(\*.*)?$/g,"")+F(t)}function Ge(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Xt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const u=l.split("/").filter(Boolean),a=u.length-o;if(a<0||a>0&&s===void 0&&!t)return null;const c={path:o?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<o;d++){const m=i[d],g=u[d],h=m[0]===":",y=h?m.slice(1):m;if(h&&we(g,f(y)))c.params[y]=g;else if(h||!we(g,m))return null;c.path+=`/${g}`}if(s){const d=a?u.slice(-a).join("/"):"";if(we(d,f(s)))c.params[s]=d;else return null}return c}}function we(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Gt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Qe(e){const t=new Map,n=ft();return new Proxy({},{get(r,s){return t.has(s)||dt(n,()=>t.set(s,A(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ze(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return ze(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const Qt=100,Ze=Ke(),de=Ke(),Ee=()=>Ht(_e(Ze),"Make sure your app is wrapped in a <Router />"),zt=()=>_e(de)||Ee().base,Zt=e=>{const t=zt();return A(()=>t.resolvePath(e()))},Wt=e=>{const t=Ee();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},en=()=>Ee().location;function tn(e,t=""){const{component:n,load:r,children:s,metadata:i}=e,o=!s||Array.isArray(s)&&!s.length,l={key:e,component:n,load:r,metadata:i};return We(e.path).reduce((u,a)=>{for(const c of ze(a)){const f=Jt(t,c),d=o?f:f.split("/*",1)[0];u.push({...l,originalPath:c,pattern:d,matcher:Xt(d,!o,e.matchFilters)})}return u},[])}function nn(e,t=0){return{routes:e,score:Gt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function We(e){return Array.isArray(e)?e:[e]}function et(e,t="",n=[],r=[]){const s=We(e);for(let i=0,o=s.length;i<o;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const u=tn(l,t);for(const a of u){n.push(a);const c=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!c)et(l.children,a.pattern,n,r);else{const f=nn([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((i,o)=>o.score-i.score)}function tt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function rn(e,t){const n=new URL("http://sar"),r=A(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),s=A(()=>r().pathname),i=A(()=>r().search,!0),o=A(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:Qe(Ue(i,()=>Ge(r())))}}let k;function sn(e,t,n={}){const{signal:[r,s],utils:i={}}=e,o=i.parsePath||(S=>S),l=i.renderPath||(S=>S),u=i.beforeLeave||Kt(),a=te("",n.base||"");if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!r().value&&s({value:a,replace:!0,scroll:!1});const[c,f]=R(!1),d=async S=>{f(!0);try{await ht(S)}finally{f(!1)}},[m,g]=R(r().value),[h,y]=R(r().state),b=rn(m,h),_=[],x=R([]),D={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(S){return te(a,S)}};return C(()=>{const{value:S,state:T}=r();O(()=>{S!==m()&&d(()=>{k="native",g(S),y(T),x[1]([])}).then(()=>{k=void 0})})}),{base:D,location:b,isRouting:c,renderPath:l,parsePath:o,navigatorFactory:he,beforeLeave:u,preloadRoute:ot,submissions:x};function L(S,T,N){O(()=>{if(typeof T=="number"){T&&(i.go?u.confirm(T,N)&&i.go(T):console.warn("Router integration does not support relative routing"));return}const{replace:ge,resolve:me,scroll:B,state:J}={replace:!1,resolve:!0,scroll:!0,...N},X=me?S.resolvePath(T):te("",T);if(X===void 0)throw new Error(`Path '${T}' is not a routable path`);if(_.length>=Qt)throw new Error("Too many redirects");const Oe=m();if((X!==Oe||J!==h())&&!Ut){if(u.confirm(X,N)){const lt=_.push({value:Oe,replace:ge,scroll:B,state:h()});d(()=>{k="navigate",g(X),y(J),x[1]([])}).then(()=>{_.length===lt&&(k=void 0,it({value:X,state:J}))})}}})}function he(S){return S=S||_e(de)||D,(T,N)=>L(S,T,N)}function it(S){const T=_[0];T&&((S.value!==T.value||S.state!==T.state)&&s({...S,replace:T.replace,scroll:T.scroll}),_.length=0)}function ot(S,T){const N=tt(t(),S.pathname),ge=k;k="preload";for(let me in N){const{route:B,params:J}=N[me];B.component&&B.component.preload&&B.component.preload(),T&&B.load&&B.load({params:J,location:{pathname:S.pathname,search:S.search,hash:S.hash,query:Ge(S),state:null,key:""},intent:"preload"})}k=ge}}function on(e,t,n,r,s){const{base:i,location:o}=e,{pattern:l,component:u,load:a}=r().route,c=A(()=>r().path);u&&u.preload&&u.preload();const f=a?a({params:s,location:o,intent:k||"initial"}):void 0;return{parent:t,pattern:l,path:c,params:s,outlet:()=>u?$(u,{params:s,location:o,data:f,get children(){return n()}}):n(),resolvePath(m){return te(i.path(),m,c())}}}const ln=e=>t=>{const{base:n}=t,r=Te(()=>t.children),s=A(()=>et(t.root?{component:t.root,children:r()}:r(),t.base||"")),i=sn(e,s,{base:n});return e.create&&e.create(i),$(Ze.Provider,{value:i,get children(){return $(cn,{routerState:i,get branches(){return s()}})}})};function cn(e){const t=A(()=>tt(e.branches,e.routerState.location.pathname)),n=Qe(()=>{const o=t(),l={};for(let u=0;u<o.length;u++)Object.assign(l,o[u].params);return l}),r=[];let s;const i=A(Ue(t,(o,l,u)=>{let a=l&&o.length===l.length;const c=[];for(let f=0,d=o.length;f<d;f++){const m=l&&l[f],g=o[f];u&&m&&g.route.key===m.route.key?c[f]=u[f]:(a=!1,r[f]&&r[f](),G(h=>{r[f]=h,c[f]=on(e.routerState,c[f-1]||e.routerState.base,an(()=>i()[f+1]),()=>t()[f],n)}))}return r.splice(o.length).forEach(f=>f()),u&&a?u:(s=c[0],c)}));return $(Xe,{get when(){return i()&&s},keyed:!0,children:o=>$(de.Provider,{value:o,get children(){return o.outlet()}})})}const an=e=>()=>$(Xe,{get when(){return e()},keyed:!0,children:t=>$(de.Provider,{value:t,get children(){return t.outlet()}})}),be=e=>{const t=Te(()=>e.children);return Ae(e,{get children(){return t()}})};function un([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function fn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function dn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=un(R(n(e.get()),{equals:(s,i)=>s.value===i.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&ue(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),ln({signal:r,create:e.create,utils:e.utils})}function hn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function gn(e,t){const n=fn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const mn=new Map;function pn(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),i=r.navigatorFactory(r.base);let o={};function l(g){return g.namespaceURI==="http://www.w3.org/2000/svg"}function u(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const h=g.composedPath().find(L=>L instanceof Node&&L.nodeName.toUpperCase()==="A");if(!h||t&&!h.getAttribute("link"))return;const y=l(h),b=y?h.href.baseVal:h.href;if((y?h.target.baseVal:h.target)||!b&&!h.hasAttribute("state"))return;const x=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||x&&x.includes("external"))return;const D=y?new URL(b,document.baseURI):new URL(b);if(!(D.origin!==window.location.origin||s&&D.pathname&&!D.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,D]}function a(g){const h=u(g);if(!h)return;const[y,b]=h,_=r.parsePath(b.pathname+b.search+b.hash),x=y.getAttribute("state");g.preventDefault(),i(_,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:x&&JSON.parse(x)})}function c(g){const h=u(g);if(!h)return;const[y,b]=h;o[b.pathname]||r.preloadRoute(b,y.getAttribute("preload")!=="false")}function f(g){const h=u(g);if(!h)return;const[y,b]=h;o[b.pathname]||(o[b.pathname]=setTimeout(()=>{r.preloadRoute(b,y.getAttribute("preload")!=="false"),delete o[b.pathname]},200))}function d(g){const h=u(g);if(!h)return;const[,y]=h;o[y.pathname]&&(clearTimeout(o[y.pathname]),delete o[y.pathname])}function m(g){let h=g.submitter&&g.submitter.hasAttribute("formaction")?g.submitter.formAction:g.target.action;if(!h)return;if(!h.startsWith("action:")){const b=new URL(h);if(h=r.parsePath(b.pathname+b.search),!h.startsWith(n))return}if(g.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=mn.get(h);if(y){g.preventDefault();const b=new FormData(g.target);y.call(r,b)}}Z(["click","submit"]),document.addEventListener("click",a),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",d),document.addEventListener("focusin",c),document.addEventListener("touchstart",c)),document.addEventListener("submit",m),ue(()=>{document.removeEventListener("click",a),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",d),document.removeEventListener("focusin",c),document.removeEventListener("touchstart",c)),document.removeEventListener("submit",m)})}}function yn(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function wn(e){return dn({get:()=>window.location.hash.slice(1),set({value:t,replace:n,scroll:r,state:s}){n?window.history.replaceState(s,"","#"+t):window.location.hash=t;const i=t.indexOf("#"),o=i>=0?t.slice(i+1):"";gn(o,r)},init:t=>hn(window,"hashchange",()=>t()),create:pn(e.preload,e.explicitLinks,e.actionBase),utils:{go:t=>window.history.go(t),renderPath:t=>`#${t}`,parsePath:yn}})(e)}const bn=E("<a>");function ce(e){e=Ae({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=$t(e,["href","state","class","activeClass","inactiveClass","end"]),n=Zt(()=>e.href),r=Wt(n),s=en(),i=A(()=>{const o=n();if(o===void 0)return!1;const l=F(o.split(/[?#]/,1)[0]).toLowerCase(),u=F(s.pathname).toLowerCase();return e.end?l===u:u.startsWith(l)});return(()=>{const o=bn();return kt(o,Ae(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},link:"",get"aria-current"(){return i()?"page":void 0}}),!1,!1),o})()}var H=(e=>(e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday",e))(H||{}),I=(e=>(e[e.TextInput=0]="TextInput",e[e.ButtonInput=1]="ButtonInput",e[e.TextButtonInput=2]="TextButtonInput",e))(I||{}),Y=(e=>(e[e.YYYYMMDD=0]="YYYYMMDD",e[e.DDMMYYYY=1]="DDMMYYYY",e[e.MMDDYYYY=2]="MMDDYYYY",e[e.MonthDDYYYY=3]="MonthDDYYYY",e))(Y||{});function Sn(e,t){const n=e.getTime(),r=t.getTime(),s=n+Math.random()*(r-n);return new Date(s)}function Se(){let n=Sn(new Date("0001-01-01"),new Date("3000-12-31"));return n.setHours(0,0,0,0),{startTime:new Date,endTime:new Date,targetDate:n,givenAnswer:H.Sunday}}function Q(e,t){return(t.getTime()-e.getTime())/1e3}function nt(){let e=window.localStorage.getItem("records");return e?JSON.parse(e).map(r=>({startTime:new Date(r.startTime),endTime:new Date(r.endTime),targetDate:new Date(r.targetDate),givenAnswer:r.givenAnswer})):[]}function rt(){let e=window.localStorage.getItem("options");return e?{inputMode:I.TextInput,dateDisplayMode:Y.YYYYMMDD,blindTime:0,...JSON.parse(e)}:{inputMode:I.TextInput,dateDisplayMode:Y.YYYYMMDD,blindTime:0}}function vn(e,t){console.log(Y[t]);const n=e.toISOString().slice(0,4),r=e.toISOString().slice(5,7),s=e.toISOString().slice(8,10);switch(t){case Y.YYYYMMDD:return n+"-"+r+"-"+s;case Y.DDMMYYYY:return s+"-"+r+"-"+n;case Y.MMDDYYYY:return r+"-"+s+"-"+n;case Y.MonthDDYYYY:return e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}const $n=E("<span>(<!>)<br>");function An(e){return(()=>{const t=$n(),n=t.firstChild,r=n.nextSibling;return r.nextSibling.nextSibling,Ce(t,"click",e.onClick,!0),w(t,()=>e.day,r),w(t,()=>H[e.day],null),t})()}Z(["click"]);const xn="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23e6e6e6'/%3e%3c/svg%3e",_n=E("<h1>Doomsday Rule"),Tn=E("<div class=links>"),Dn=E("<div id=center-thingy><h2></h2>s"),Pn=E('<a class=github-link href=https://github.com/nycrat/doomsday-rule-practice><img alt="Github Repo">'),Cn=E("<div>"),En=E("<div class=input-buttons>");function On(){const[e,t]=R(nt()),[n,r]=R(Se()),[s,i]=R("Day of week (0-6)"),o=rt();function l(){if(s()==="r"){r(Se()),i("Day of week (0-6)");return}let a=parseInt(s());if(isNaN(a)||a<0||a>7)return;a=a%7;let c={...n(),endTime:new Date,givenAnswer:a};a!==c.targetDate.getDay()&&alert("Incorrect, was "+H[c.targetDate.getDay()]),t([c,...e()]),r(Se()),i("Day of week (0-6)"),localStorage.setItem("records",JSON.stringify(e()))}function u(a){o.inputMode!==I.ButtonInput&&(a.key==="Enter"&&l(),parseInt(a.key)>=0&&parseInt(a.key)<=7&&i(a.key),a.key==="r"&&i(a.key))}return ut(()=>{const a=setInterval(()=>{const c={...n(),endTime:new Date};r(c)});addEventListener("keypress",u),ue(()=>{clearInterval(a),removeEventListener("keypress",u)})}),[_n(),(()=>{const a=Tn();return w(a,$(ce,{href:"/stats",children:"Stats"}),null),w(a,$(ce,{href:"/options",children:"Options"}),null),a})(),(()=>{const a=Dn(),c=a.firstChild,f=c.nextSibling;return w(c,(()=>{const d=A(()=>o.blindTime===0||o.blindTime>Q(n().startTime,n().endTime));return()=>d()?vn(n().targetDate,o.dateDisplayMode):"___________"})()),w(a,(()=>{const d=A(()=>o.inputMode===I.TextInput||o.inputMode===I.TextButtonInput);return()=>d()&&(()=>{const m=Cn();return w(m,s),C(()=>q(m,"input"+(s().length!==1?" placeholder":""))),m})()})(),f),w(a,(()=>{const d=A(()=>o.inputMode===I.ButtonInput||o.inputMode===I.TextButtonInput);return()=>d()&&(()=>{const m=En();return w(m,()=>Array.from({length:7},(g,h)=>$(An,{day:h,onClick:()=>{i(String(h)),l()}}))),m})()})(),f),w(a,()=>Q(n().startTime,n().endTime).toFixed(3),f),C(()=>q(c,o.dateDisplayMode===Y.MonthDDYYYY?"full":"")),a})(),(()=>{const a=Pn(),c=a.firstChild;return le(c,"src",xn),a})()]}function st(e){return e.givenAnswer===e.targetDate.getDay()}function Ln(e){let t=0;for(const n of e)st(n)&&t++;return(t/e.length*100).toFixed(2)+"%"}function Ne(e,t){let n=0,r=0;for(const s of e)t?st(s)&&(n+=Q(s.startTime,s.endTime),r++):(n+=Q(s.startTime,s.endTime),r++);return(n/r).toFixed(2)+"s"}const Rn=E("<span class=stat>: <span class=stat-stat>"),Yn=E("<tr><td></td><td></td><td></td><td>s</td><td class=delete-row>X"),In=E("<div><h1>Stats</h1><div class=links></div><div id=stats-page><div class=stats-bar></div><br><div class=records-list><table><thead><tr><th>Target Date</th><th>Actual</th><th>Guess</th><th>Time</th><th>Delete</th></tr></thead><tbody>");function ee(e){return(()=>{const t=Rn(),n=t.firstChild,r=n.nextSibling;return w(t,()=>e.name,n),w(r,()=>e.value),t})()}function Mn(e){const t=e.record;return(()=>{const n=Yn(),r=n.firstChild,s=r.nextSibling,i=s.nextSibling,o=i.nextSibling,l=o.firstChild,u=o.nextSibling;return w(r,()=>t.targetDate.toISOString().slice(0,10)),w(s,()=>H[t.targetDate.getDay()]),w(i,()=>H[t.givenAnswer]),w(o,()=>Q(t.startTime,t.endTime).toFixed(3),l),Ce(u,"click",e.deleteFunction,!0),C(()=>q(n,t.givenAnswer===t.targetDate.getDay()?"correct":"incorrect")),n})()}function Nn(){const[e,t]=R(nt());function n(r){let s=[...e()];s.splice(r,1),t(s),localStorage.setItem("records",JSON.stringify(e()))}return(()=>{const r=In(),s=r.firstChild,i=s.nextSibling,o=i.nextSibling,l=o.firstChild,u=l.nextSibling,a=u.nextSibling,c=a.firstChild,f=c.firstChild,d=f.nextSibling;return w(i,$(ce,{href:"/",children:"Practice"})),w(l,$(ee,{name:"Total",get value(){return e().length.toString()}}),null),w(l,$(ee,{name:"Success Rate",get value(){return Ln(e())}}),null),w(l,$(ee,{name:"Average Time",get value(){return Ne(e())}}),null),w(l,$(ee,{name:"Average Time (Correct)",get value(){return Ne(e(),!0)}}),null),w(d,$(xt,{get each(){return e()},children:(m,g)=>$(Mn,{record:m,deleteFunction:()=>n(g())})})),r})()}Z(["click"]);const kn=E("<div><h1>Options</h1><div class=links></div><div id=options-page><div>Blind Time:<input type=range min=0 max=10 step=0.25> (<!>s)</div><div>Input Mode: </div><div>Date Display Mode: "),ke=E("<button>");function jn(){const[e,t]=R(rt());return Fe(()=>{localStorage.setItem("options",JSON.stringify(e()))},[e]),(()=>{const n=kn(),r=n.firstChild,s=r.nextSibling,i=s.nextSibling,o=i.firstChild,l=o.firstChild,u=l.nextSibling,a=u.nextSibling,c=a.nextSibling;c.nextSibling;const f=o.nextSibling;f.firstChild;const d=f.nextSibling;return d.firstChild,w(s,$(ce,{href:"/",children:"Practice"})),u.$$input=m=>{t({...e(),blindTime:Number(m.target.value)})},w(o,()=>e().blindTime.toFixed(2),c),w(f,()=>Array.from({length:3},(m,g)=>[(()=>{const h=ke();return h.$$click=()=>t({...e(),inputMode:g}),w(h,()=>I[g]),C(()=>q(h,"text-option"+(e().inputMode===g?" selected":""))),h})()," "]),null),w(d,()=>Array.from({length:4},(m,g)=>[(()=>{const h=ke();return h.$$click=()=>t({...e(),dateDisplayMode:g}),w(h,()=>Y[g]),C(()=>q(h,"text-option"+(e().dateDisplayMode===g?" selected":""))),h})()," "]),null),C(()=>u.value=e().blindTime),n})()}Z(["input","click"]);const Bn=document.getElementById("root");Yt(()=>$(wn,{get children(){return[$(be,{path:"/stats",component:Nn}),$(be,{path:"/options",component:jn}),$(be,{path:"*",component:On})]}}),Bn);
