(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const at=(e,t)=>e===t,re=Symbol("solid-proxy"),ut=Symbol("solid-track"),se={equals:at};let Be=Je;const j=1,ie=2,Fe={owned:null,cleanups:null,context:null,owner:null};var y=null;let ye=null,v=null,P=null,M=null,ue=0;function G(e,t){const n=v,r=y,s=e.length===0,i=t===void 0?r:t,o=s?Fe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?e:()=>e(()=>O(()=>de(o)));y=o,v=null;try{return U(l,!0)}finally{v=n,y=r}}function R(e,t){t=t?Object.assign({},se,t):se;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),He(n,s));return[Ve.bind(n),r]}function C(e,t,n){const r=De(e,t,!1,j);z(r)}function Ue(e,t,n){Be=yt;const r=De(e,t,!1,j);(!n||!n.render)&&(r.user=!0),M?M.push(r):z(r)}function $(e,t,n){n=n?Object.assign({},se,n):se;const r=De(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),Ve.bind(r)}function O(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function Ke(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i){i=!1;return}const a=O(()=>t(l,s,o));return s=l,a}}function ft(e){Ue(()=>O(e))}function fe(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function dt(){return y}function ht(e,t){const n=y,r=v;y=e,v=null;try{return U(t,!0)}catch(s){Pe(s)}finally{y=n,v=r}}function gt(e){const t=v,n=y;return Promise.resolve().then(()=>{v=t,y=n;let r;return U(e,!1),v=y=null,r?r.done:void 0})}function qe(e,t){const n=Symbol("context");return{id:n,Provider:bt(n),defaultValue:e}}function _e(e){return y&&y.context&&y.context[e.id]!==void 0?y.context[e.id]:e.defaultValue}function Te(e){const t=$(e),n=$(()=>ve(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Ve(){if(this.sources&&this.state)if(this.state===j)z(this);else{const e=P;P=null,U(()=>le(this),!1),P=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function He(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&U(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=ye&&ye.running;o&&ye.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?P.push(i):M.push(i),i.observers&&Xe(i)),o||(i.state=j)}if(P.length>1e6)throw P=[],new Error},!1)),t}function z(e){if(!e.fn)return;de(e);const t=ue;mt(e,e.value,t)}function mt(e,t,n){let r;const s=y,i=v;v=y=e;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=j,e.owned&&e.owned.forEach(de),e.owned=null),e.updatedAt=n+1,Pe(o)}finally{v=i,y=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?He(e,r):e.value=r,e.updatedAt=n)}function De(e,t,n,r=j,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==Fe&&(y.owned?y.owned.push(i):y.owned=[i]),i}function oe(e){if(e.state===0)return;if(e.state===ie)return le(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ue);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===j)z(e);else if(e.state===ie){const r=P;P=null,U(()=>le(e,t[0]),!1),P=r}}function U(e,t){if(P)return e();let n=!1;t||(P=[]),M?n=!0:M=[],ue++;try{const r=e();return pt(n),r}catch(r){n||(M=null),P=null,Pe(r)}}function pt(e){if(P&&(Je(P),P=null),e)return;const t=M;M=null,t.length&&U(()=>Be(t),!1)}function Je(e){for(let t=0;t<e.length;t++)oe(e[t])}function yt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:oe(r)}for(t=0;t<n;t++)oe(e[t])}function le(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===j?r!==t&&(!r.updatedAt||r.updatedAt<ue)&&oe(r):s===ie&&le(r,t)}}}function Xe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ie,n.pure?P.push(n):M.push(n),n.observers&&Xe(n))}}function de(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)de(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function wt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Pe(e,t=y){throw wt(e)}function ve(e){if(typeof e=="function"&&!e.length)return ve(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ve(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function bt(e,t){return function(r){let s;return C(()=>s=O(()=>(y.context={...y.context,[e]:r.value},Te(()=>r.children))),void 0),s}}const St=Symbol("fallback");function Le(e){for(let t=0;t<e.length;t++)e[t]()}function vt(e,t,n={}){let r=[],s=[],i=[],o=0,l=t.length>1?[]:null;return fe(()=>Le(i)),()=>{let a=e()||[],f,c;return a[ut],O(()=>{let h=a.length,m,d,g,p,b,_,x,D,L;if(h===0)o!==0&&(Le(i),i=[],r=[],s=[],o=0,l&&(l=[])),n.fallback&&(r=[St],s[0]=G(ge=>(i[0]=ge,n.fallback())),o=1);else if(o===0){for(s=new Array(h),c=0;c<h;c++)r[c]=a[c],s[c]=G(u);o=h}else{for(g=new Array(h),p=new Array(h),l&&(b=new Array(h)),_=0,x=Math.min(o,h);_<x&&r[_]===a[_];_++);for(x=o-1,D=h-1;x>=_&&D>=_&&r[x]===a[D];x--,D--)g[D]=s[x],p[D]=i[x],l&&(b[D]=l[x]);for(m=new Map,d=new Array(D+1),c=D;c>=_;c--)L=a[c],f=m.get(L),d[c]=f===void 0?-1:f,m.set(L,c);for(f=_;f<=x;f++)L=r[f],c=m.get(L),c!==void 0&&c!==-1?(g[c]=s[f],p[c]=i[f],l&&(b[c]=l[f]),c=d[c],m.set(L,c)):i[f]();for(c=_;c<h;c++)c in g?(s[c]=g[c],i[c]=p[c],l&&(l[c]=b[c],l[c](c))):s[c]=G(u);s=s.slice(0,o=h),r=a.slice(0)}return s});function u(h){if(i[c]=h,l){const[m,d]=R(c);return l[c]=d,t(a[c],m)}return t(a[c])}}}function A(e,t){return O(()=>e(t||{}))}function W(){return!0}const Ae={get(e,t,n){return t===re?n:e.get(t)},has(e,t){return t===re?!0:e.has(t)},set:W,deleteProperty:W,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:W,deleteProperty:W}},ownKeys(e){return e.keys()}};function we(e){return(e=typeof e=="function"?e():e)?e:{}}function At(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function $e(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&re in o,e[i]=typeof o=="function"?(t=!0,$(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=we(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in we(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(we(e[o])));return[...new Set(i)]}},Ae);const n={},r={},s=new Set;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);for(let a=0,f=l.length;a<f;a++){const c=l[a];if(c==="__proto__"||c==="constructor")continue;const u=Object.getOwnPropertyDescriptor(o,c);if(!s.has(c))u.get?(s.add(c),Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:At.bind(r[c]=[u.get.bind(o)])})):(u.value!==void 0&&s.add(c),n[c]=u.value);else{const h=r[c];h?u.get?h.push(u.get.bind(o)):u.value!==void 0&&h.push(()=>u.value):n[c]===void 0&&(n[c]=u.value)}}}return n}function $t(e,...t){if(re in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},Ae));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},Ae)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,a=0;for(const f of t)f.includes(s)&&(l=!0,o?r[a][s]=i.value:Object.defineProperty(r[a],s,i)),++a;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}const xt=e=>`Stale read from <${e}>.`;function _t(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(vt(()=>e.each,e.children,t||void 0))}function Ge(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return $(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?O(()=>s(t?r:()=>{if(!O(n))throw xt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Tt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Dt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Tt]),Pt=new Set(["innerHTML","textContent","innerText","children"]),Ct=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Et=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ot(e,t){const n=Et[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Lt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Rt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Yt(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,a=t[s-1].nextSibling,f=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:a;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!f){f=new Map;let u=l;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[o]);if(c!=null)if(l<c&&c<i){let u=o,h=1,m;for(;++u<s&&u<i&&!((m=f.get(t[u]))==null||m!==c+h);)h++;if(h>c-l){const d=t[o];for(;l<c;)e.insertBefore(n[l++],d)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Re="_$DX_DELEGATE";function It(e,t,n,r={}){let s;return G(i=>{s=i,t===document?e():w(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function E(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>O(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function Z(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Ut))}}function ce(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Mt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function q(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ce(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function Nt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(Ye(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Ye(e,l,!0),n[l]=a)}return n}function kt(e,t,n){if(!t)return n?ce(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function jt(e,t={},n,r){const s={};return r||C(()=>s.children=V(e,t.children,s.children)),C(()=>t.ref&&t.ref(e)),C(()=>Bt(e,t,n,!0,s,!0)),s}function w(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,n);C(s=>V(e,t(),s,n),r)}function Bt(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Ie(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||V(e,t.children);continue}const l=t[o];s[o]=Ie(e,o,l,s[o],n,i)}}function Ft(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ye(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ie(e,t,n,r,s,i){let o,l,a,f,c;if(t==="style")return kt(e,n,r);if(t==="classList")return Nt(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),h=Lt.has(u);if(!h&&r){const m=Array.isArray(r)?r[0]:r;e.removeEventListener(u,m)}(h||n)&&(Ce(e,u,n,h),h&&Z([u]))}else if(t.slice(0,5)==="attr:")ce(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=Pt.has(t))||!s&&((f=Ot(t,e.tagName))||(l=Dt.has(t)))||(o=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?q(e,n):o&&!l&&!a?e[Ft(t)]=n:e[f||t]=n;else{const u=s&&t.indexOf(":")>-1&&Rt[t.split(":")[0]];u?Mt(e,u,t,n):ce(e,Ct[t]||t,n)}return n}function Ut(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=K(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=K(e,n,r);else{if(i==="function")return C(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(xe(l,t,n,s))return C(()=>n=V(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=K(e,n,r),o)return n}else a?n.length===0?Me(e,l,r):Yt(e,n,l):(n&&K(e),Me(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=K(e,n,r,t);K(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function xe(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],a=n&&n[i],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=xe(e,l,a)||s;else if(f==="function")if(r){for(;typeof l=="function";)l=l();s=xe(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||s}else e.push(l),s=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return s}function Me(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function K(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const a=l.parentNode===e;!i&&!o?a?e.replaceChild(s,l):e.insertBefore(s,n):a&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Kt=!1;function qt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:a=>{a&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const Vt=/^(?:[a-z0-9]+:)?\/\//i,Ht=/^\/+|(\/)\/+$/g;function F(e,t=!1){const n=e.replace(Ht,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ne(e,t,n){if(Vt.test(t))return;const r=F(e),s=n&&F(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+F(t,!i)}function Jt(e,t){if(e==null)throw new Error(t);return e}function Xt(e,t){return F(e).replace(/\/*(\*.*)?$/g,"")+F(t)}function Qe(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Gt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const a=l.split("/").filter(Boolean),f=a.length-o;if(f<0||f>0&&s===void 0&&!t)return null;const c={path:o?"":"/",params:{}},u=h=>n===void 0?void 0:n[h];for(let h=0;h<o;h++){const m=i[h],d=a[h],g=m[0]===":",p=g?m.slice(1):m;if(g&&be(d,u(p)))c.params[p]=d;else if(g||!be(d,m))return null;c.path+=`/${d}`}if(s){const h=f?a.slice(-f).join("/"):"";if(be(h,u(s)))c.params[s]=h;else return null}return c}}function be(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Qt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function ze(e){const t=new Map,n=dt();return new Proxy({},{get(r,s){return t.has(s)||ht(n,()=>t.set(s,$(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ze(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Ze(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const zt=100,We=qe(),he=qe(),Ee=()=>Jt(_e(We),"Make sure your app is wrapped in a <Router />"),Zt=()=>_e(he)||Ee().base,Wt=e=>{const t=Zt();return $(()=>t.resolvePath(e()))},en=e=>{const t=Ee();return $(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},tn=()=>Ee().location;function nn(e,t=""){const{component:n,load:r,children:s,metadata:i}=e,o=!s||Array.isArray(s)&&!s.length,l={key:e,component:n,load:r,metadata:i};return et(e.path).reduce((a,f)=>{for(const c of Ze(f)){const u=Xt(t,c),h=o?u:u.split("/*",1)[0];a.push({...l,originalPath:c,pattern:h,matcher:Gt(h,!o,e.matchFilters)})}return a},[])}function rn(e,t=0){return{routes:e,score:Qt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function et(e){return Array.isArray(e)?e:[e]}function tt(e,t="",n=[],r=[]){const s=et(e);for(let i=0,o=s.length;i<o;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const a=nn(l,t);for(const f of a){n.push(f);const c=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!c)tt(l.children,f.pattern,n,r);else{const u=rn([...n],r.length);r.push(u)}n.pop()}}}return n.length?r:r.sort((i,o)=>o.score-i.score)}function nt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function sn(e,t){const n=new URL("http://sar"),r=$(a=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),a}},n,{equals:(a,f)=>a.href===f.href}),s=$(()=>r().pathname),i=$(()=>r().search,!0),o=$(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:ze(Ke(i,()=>Qe(r())))}}let k;function on(e,t,n={}){const{signal:[r,s],utils:i={}}=e,o=i.parsePath||(S=>S),l=i.renderPath||(S=>S),a=i.beforeLeave||qt(),f=ne("",n.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!r().value&&s({value:f,replace:!0,scroll:!1});const[c,u]=R(!1),h=async S=>{u(!0);try{await gt(S)}finally{u(!1)}},[m,d]=R(r().value),[g,p]=R(r().state),b=sn(m,g),_=[],x=R([]),D={pattern:f,params:{},path:()=>f,outlet:()=>null,resolvePath(S){return ne(f,S)}};return C(()=>{const{value:S,state:T}=r();O(()=>{S!==m()&&h(()=>{k="native",d(S),p(T),x[1]([])}).then(()=>{k=void 0})})}),{base:D,location:b,isRouting:c,renderPath:l,parsePath:o,navigatorFactory:ge,beforeLeave:a,preloadRoute:lt,submissions:x};function L(S,T,N){O(()=>{if(typeof T=="number"){T&&(i.go?a.confirm(T,N)&&i.go(T):console.warn("Router integration does not support relative routing"));return}const{replace:me,resolve:pe,scroll:B,state:J}={replace:!1,resolve:!0,scroll:!0,...N},X=pe?S.resolvePath(T):ne("",T);if(X===void 0)throw new Error(`Path '${T}' is not a routable path`);if(_.length>=zt)throw new Error("Too many redirects");const Oe=m();if((X!==Oe||J!==g())&&!Kt){if(a.confirm(X,N)){const ct=_.push({value:Oe,replace:me,scroll:B,state:g()});h(()=>{k="navigate",d(X),p(J),x[1]([])}).then(()=>{_.length===ct&&(k=void 0,ot({value:X,state:J}))})}}})}function ge(S){return S=S||_e(he)||D,(T,N)=>L(S,T,N)}function ot(S){const T=_[0];T&&((S.value!==T.value||S.state!==T.state)&&s({...S,replace:T.replace,scroll:T.scroll}),_.length=0)}function lt(S,T){const N=nt(t(),S.pathname),me=k;k="preload";for(let pe in N){const{route:B,params:J}=N[pe];B.component&&B.component.preload&&B.component.preload(),T&&B.load&&B.load({params:J,location:{pathname:S.pathname,search:S.search,hash:S.hash,query:Qe(S),state:null,key:""},intent:"preload"})}k=me}}function ln(e,t,n,r,s){const{base:i,location:o}=e,{pattern:l,component:a,load:f}=r().route,c=$(()=>r().path);a&&a.preload&&a.preload();const u=f?f({params:s,location:o,intent:k||"initial"}):void 0;return{parent:t,pattern:l,path:c,params:s,outlet:()=>a?A(a,{params:s,location:o,data:u,get children(){return n()}}):n(),resolvePath(m){return ne(i.path(),m,c())}}}const cn=e=>t=>{const{base:n}=t,r=Te(()=>t.children),s=$(()=>tt(t.root?{component:t.root,children:r()}:r(),t.base||"")),i=on(e,s,{base:n});return e.create&&e.create(i),A(We.Provider,{value:i,get children(){return A(an,{routerState:i,get branches(){return s()}})}})};function an(e){const t=$(()=>nt(e.branches,e.routerState.location.pathname)),n=ze(()=>{const o=t(),l={};for(let a=0;a<o.length;a++)Object.assign(l,o[a].params);return l}),r=[];let s;const i=$(Ke(t,(o,l,a)=>{let f=l&&o.length===l.length;const c=[];for(let u=0,h=o.length;u<h;u++){const m=l&&l[u],d=o[u];a&&m&&d.route.key===m.route.key?c[u]=a[u]:(f=!1,r[u]&&r[u](),G(g=>{r[u]=g,c[u]=ln(e.routerState,c[u-1]||e.routerState.base,un(()=>i()[u+1]),()=>t()[u],n)}))}return r.splice(o.length).forEach(u=>u()),a&&f?a:(s=c[0],c)}));return A(Ge,{get when(){return i()&&s},keyed:!0,children:o=>A(he.Provider,{value:o,get children(){return o.outlet()}})})}const un=e=>()=>A(Ge,{get when(){return e()},keyed:!0,children:t=>A(he.Provider,{value:t,get children(){return t.outlet()}})}),Se=e=>{const t=Te(()=>e.children);return $e(e,{get children(){return t()}})};function fn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function dn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function hn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=fn(R(n(e.get()),{equals:(s,i)=>s.value===i.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&fe(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),cn({signal:r,create:e.create,utils:e.utils})}function gn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function mn(e,t){const n=dn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const pn=new Map;function yn(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),i=r.navigatorFactory(r.base);let o={};function l(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function a(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const g=d.composedPath().find(L=>L instanceof Node&&L.nodeName.toUpperCase()==="A");if(!g||t&&!g.getAttribute("link"))return;const p=l(g),b=p?g.href.baseVal:g.href;if((p?g.target.baseVal:g.target)||!b&&!g.hasAttribute("state"))return;const x=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||x&&x.includes("external"))return;const D=p?new URL(b,document.baseURI):new URL(b);if(!(D.origin!==window.location.origin||s&&D.pathname&&!D.pathname.toLowerCase().startsWith(s.toLowerCase())))return[g,D]}function f(d){const g=a(d);if(!g)return;const[p,b]=g,_=r.parsePath(b.pathname+b.search+b.hash),x=p.getAttribute("state");d.preventDefault(),i(_,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:x&&JSON.parse(x)})}function c(d){const g=a(d);if(!g)return;const[p,b]=g;o[b.pathname]||r.preloadRoute(b,p.getAttribute("preload")!=="false")}function u(d){const g=a(d);if(!g)return;const[p,b]=g;o[b.pathname]||(o[b.pathname]=setTimeout(()=>{r.preloadRoute(b,p.getAttribute("preload")!=="false"),delete o[b.pathname]},200))}function h(d){const g=a(d);if(!g)return;const[,p]=g;o[p.pathname]&&(clearTimeout(o[p.pathname]),delete o[p.pathname])}function m(d){let g=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.formAction:d.target.action;if(!g)return;if(!g.startsWith("action:")){const b=new URL(g);if(g=r.parsePath(b.pathname+b.search),!g.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=pn.get(g);if(p){d.preventDefault();const b=new FormData(d.target);p.call(r,b)}}Z(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mouseover",u),document.addEventListener("mouseout",h),document.addEventListener("focusin",c),document.addEventListener("touchstart",c)),document.addEventListener("submit",m),fe(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mouseover",u),document.removeEventListener("mouseout",h),document.removeEventListener("focusin",c),document.removeEventListener("touchstart",c)),document.removeEventListener("submit",m)})}}function wn(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function bn(e){return hn({get:()=>window.location.hash.slice(1),set({value:t,replace:n,scroll:r,state:s}){n?window.history.replaceState(s,"","#"+t):window.location.hash=t;const i=t.indexOf("#"),o=i>=0?t.slice(i+1):"";mn(o,r)},init:t=>gn(window,"hashchange",()=>t()),create:yn(e.preload,e.explicitLinks,e.actionBase),utils:{go:t=>window.history.go(t),renderPath:t=>`#${t}`,parsePath:wn}})(e)}const Sn=E("<a>");function ae(e){e=$e({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=$t(e,["href","state","class","activeClass","inactiveClass","end"]),n=Wt(()=>e.href),r=en(n),s=tn(),i=$(()=>{const o=n();if(o===void 0)return!1;const l=F(o.split(/[?#]/,1)[0]).toLowerCase(),a=F(s.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const o=Sn();return jt(o,$e(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},link:"",get"aria-current"(){return i()?"page":void 0}}),!1,!1),o})()}var H=(e=>(e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday",e))(H||{}),I=(e=>(e[e.TextInput=0]="TextInput",e[e.ButtonInput=1]="ButtonInput",e[e.TextButtonInput=2]="TextButtonInput",e))(I||{}),Y=(e=>(e[e.YYYYMMDD=0]="YYYYMMDD",e[e.DDMMYYYY=1]="DDMMYYYY",e[e.MMDDYYYY=2]="MMDDYYYY",e[e.MonthDDYYYY=3]="MonthDDYYYY",e))(Y||{});function vn(e,t){const n=e.getTime(),r=t.getTime(),s=n+Math.random()*(r-n);return new Date(s)}function ee(){let n=vn(new Date("0001-01-01"),new Date("3000-12-31"));return n.setHours(0,0,0,0),{startTime:new Date,endTime:new Date,targetDate:n,givenAnswer:H.Sunday}}function Q(e,t){return(t.getTime()-e.getTime())/1e3}function rt(){let e=window.localStorage.getItem("records");return e?JSON.parse(e).map(r=>({startTime:new Date(r.startTime),endTime:new Date(r.endTime),targetDate:new Date(r.targetDate),givenAnswer:r.givenAnswer})):[]}function st(){let e=window.localStorage.getItem("options");return e?{inputMode:I.TextInput,dateDisplayMode:Y.YYYYMMDD,blindTime:0,...JSON.parse(e)}:{inputMode:I.TextInput,dateDisplayMode:Y.YYYYMMDD,blindTime:0}}function An(e,t){console.log(Y[t]);const n=e.toISOString().slice(0,4),r=e.toISOString().slice(5,7),s=e.toISOString().slice(8,10);switch(t){case Y.YYYYMMDD:return n+"-"+r+"-"+s;case Y.DDMMYYYY:return s+"-"+r+"-"+n;case Y.MMDDYYYY:return r+"-"+s+"-"+n;case Y.MonthDDYYYY:return e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}const $n=E("<span>");function Ne(e){return(()=>{const t=$n();return Ce(t,"click",e.onClick,!0),w(t,()=>e.text),t})()}Z(["click"]);const xn="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23e6e6e6'/%3e%3c/svg%3e",_n=E("<h1>Doomsday Rule"),Tn=E("<div class=links>"),Dn=E("<div id=center-thingy><h2></h2>s"),Pn=E('<a class=github-link href=https://github.com/nycrat/doomsday-rule-practice><img alt="Github Repo">'),Cn=E("<div>"),En=E("<div class=input-buttons>");function On(){const e="Day of week (0-6)",[t,n]=R(rt()),[r,s]=R(ee()),[i,o]=R(e),l=st();function a(){if(i()==="r"){s(ee()),o(e);return}let c=parseInt(i());if(isNaN(c)||c<0||c>7)return;c=c%7;let u={...r(),endTime:new Date,givenAnswer:c};c!==u.targetDate.getDay()&&alert("Incorrect, was "+H[u.targetDate.getDay()]),n([u,...t()]),s(ee()),o(e),localStorage.setItem("records",JSON.stringify(t()))}function f(c){l.inputMode!==I.ButtonInput&&(c.key==="Enter"&&a(),parseInt(c.key)>=0&&parseInt(c.key)<=7&&o(c.key),c.key==="r"&&o(c.key))}return ft(()=>{const c=setInterval(()=>{const u={...r(),endTime:new Date};s(u)});addEventListener("keypress",f),fe(()=>{clearInterval(c),removeEventListener("keypress",f)})}),[_n(),(()=>{const c=Tn();return w(c,A(ae,{href:"/stats",children:"Stats"}),null),w(c,A(ae,{href:"/options",children:"Options"}),null),c})(),(()=>{const c=Dn(),u=c.firstChild,h=u.nextSibling;return w(u,(()=>{const m=$(()=>l.blindTime===0||l.blindTime>Q(r().startTime,r().endTime));return()=>m()?An(r().targetDate,l.dateDisplayMode):"___________"})()),w(c,(()=>{const m=$(()=>l.inputMode===I.TextInput||l.inputMode===I.TextButtonInput);return()=>m()&&(()=>{const d=Cn();return w(d,i),C(()=>q(d,"input"+(i().length!==1?" placeholder":""))),d})()})(),h),w(c,(()=>{const m=$(()=>l.inputMode===I.ButtonInput||l.inputMode===I.TextButtonInput);return()=>m()&&(()=>{const d=En();return w(d,()=>Array.from({length:7},(g,p)=>A(Ne,{get text(){return H[p]},onClick:()=>{o(String(p)),a()}})),null),w(d,A(Ne,{text:"Reset",onClick:()=>{s(ee()),o(e)}}),null),d})()})(),h),w(c,()=>Q(r().startTime,r().endTime).toFixed(3),h),C(()=>q(u,l.dateDisplayMode===Y.MonthDDYYYY?"full":"")),c})(),(()=>{const c=Pn(),u=c.firstChild;return ce(u,"src",xn),c})()]}function it(e){return e.givenAnswer===e.targetDate.getDay()}function Ln(e){let t=0;for(const n of e)it(n)&&t++;return(t/e.length*100).toFixed(2)+"%"}function ke(e,t){let n=0,r=0;for(const s of e)t?it(s)&&(n+=Q(s.startTime,s.endTime),r++):(n+=Q(s.startTime,s.endTime),r++);return(n/r).toFixed(2)+"s"}const Rn=E("<span class=stat>: <span class=stat-stat>"),Yn=E("<tr><td></td><td></td><td></td><td>s</td><td class=delete-row>X"),In=E("<div><h1>Stats</h1><div class=links></div><div id=stats-page><div class=stats-bar></div><br><div class=records-list><table><thead><tr><th>Target Date</th><th>Actual</th><th>Guess</th><th>Time</th><th>Delete</th></tr></thead><tbody>");function te(e){return(()=>{const t=Rn(),n=t.firstChild,r=n.nextSibling;return w(t,()=>e.name,n),w(r,()=>e.value),t})()}function Mn(e){const t=e.record;return(()=>{const n=Yn(),r=n.firstChild,s=r.nextSibling,i=s.nextSibling,o=i.nextSibling,l=o.firstChild,a=o.nextSibling;return w(r,()=>t.targetDate.toISOString().slice(0,10)),w(s,()=>H[t.targetDate.getDay()]),w(i,()=>H[t.givenAnswer]),w(o,()=>Q(t.startTime,t.endTime).toFixed(3),l),Ce(a,"click",e.deleteFunction,!0),C(()=>q(n,t.givenAnswer===t.targetDate.getDay()?"correct":"incorrect")),n})()}function Nn(){const[e,t]=R(rt());function n(r){let s=[...e()];s.splice(r,1),t(s),localStorage.setItem("records",JSON.stringify(e()))}return(()=>{const r=In(),s=r.firstChild,i=s.nextSibling,o=i.nextSibling,l=o.firstChild,a=l.nextSibling,f=a.nextSibling,c=f.firstChild,u=c.firstChild,h=u.nextSibling;return w(i,A(ae,{href:"/",children:"Practice"})),w(l,A(te,{name:"Total",get value(){return e().length.toString()}}),null),w(l,A(te,{name:"Success Rate",get value(){return Ln(e())}}),null),w(l,A(te,{name:"Average Time",get value(){return ke(e())}}),null),w(l,A(te,{name:"Average Time (Correct)",get value(){return ke(e(),!0)}}),null),w(h,A(_t,{get each(){return e()},children:(m,d)=>A(Mn,{record:m,deleteFunction:()=>n(d())})})),r})()}Z(["click"]);const kn=E("<div><h1>Options</h1><div class=links></div><div id=options-page><div>Blind Time:<input type=range min=0 max=10 step=0.25> (<!>s)</div><div>Input Mode: </div><div>Date Display Mode: "),je=E("<button>");function jn(){const[e,t]=R(st());return Ue(()=>{localStorage.setItem("options",JSON.stringify(e()))},[e]),(()=>{const n=kn(),r=n.firstChild,s=r.nextSibling,i=s.nextSibling,o=i.firstChild,l=o.firstChild,a=l.nextSibling,f=a.nextSibling,c=f.nextSibling;c.nextSibling;const u=o.nextSibling;u.firstChild;const h=u.nextSibling;return h.firstChild,w(s,A(ae,{href:"/",children:"Practice"})),a.$$input=m=>{t({...e(),blindTime:Number(m.target.value)})},w(o,()=>e().blindTime.toFixed(2),c),w(u,()=>Array.from({length:3},(m,d)=>[(()=>{const g=je();return g.$$click=()=>t({...e(),inputMode:d}),w(g,()=>I[d]),C(()=>q(g,"text-option"+(e().inputMode===d?" selected":""))),g})()," "]),null),w(h,()=>Array.from({length:4},(m,d)=>[(()=>{const g=je();return g.$$click=()=>t({...e(),dateDisplayMode:d}),w(g,()=>Y[d]),C(()=>q(g,"text-option"+(e().dateDisplayMode===d?" selected":""))),g})()," "]),null),C(()=>a.value=e().blindTime),n})()}Z(["input","click"]);const Bn=document.getElementById("root");It(()=>A(bn,{get children(){return[A(Se,{path:"/stats",component:Nn}),A(Se,{path:"/options",component:jn}),A(Se,{path:"*",component:On})]}}),Bn);
