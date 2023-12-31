(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const rt=(e,t)=>e===t,Y=Symbol("solid-proxy"),st=Symbol("solid-track"),Z={equals:rt};let it=Ue;const B=1,z=2,Ne={owned:null,cleanups:null,context:null,owner:null};var m=null;let ae=null,S=null,C=null,k=null,ne=0;function H(e,t){const n=S,r=m,s=e.length===0,i=t===void 0?r:t,o=s?Ne:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?e:()=>e(()=>O(()=>se(o)));m=o,S=null;try{return M(l,!0)}finally{S=n,m=r}}function R(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Fe(n,s));return[ke.bind(n),r]}function D(e,t,n){const r=Be(e,t,!1,B);re(r)}function T(e,t,n){n=n?Object.assign({},Z,n):Z;const r=Be(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,re(r),ke.bind(r)}function O(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function Ie(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(i){i=!1;return}const c=O(()=>t(l,s,o));return s=l,c}}function Se(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function ot(){return m}function lt(e,t){const n=m,r=S;m=e,S=null;try{return M(t,!0)}catch(s){Pe(s)}finally{m=n,S=r}}function ct(e){const t=S,n=m;return Promise.resolve().then(()=>{S=t,m=n;let r;return M(e,!1),S=m=null,r?r.done:void 0})}function je(e,t){const n=Symbol("context");return{id:n,Provider:dt(n),defaultValue:e}}function Ae(e){return m&&m.context&&m.context[e.id]!==void 0?m.context[e.id]:e.defaultValue}function ve(e){const t=T(e),n=T(()=>ge(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function ke(){if(this.sources&&this.state)if(this.state===B)re(this);else{const e=C;C=null,M(()=>W(this),!1),C=e}if(S){const e=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(e)):(S.sources=[this],S.sourceSlots=[e]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function Fe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=ae&&ae.running;o&&ae.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?C.push(i):k.push(i),i.observers&&qe(i)),o||(i.state=B)}if(C.length>1e6)throw C=[],new Error},!1)),t}function re(e){if(!e.fn)return;se(e);const t=ne;at(e,e.value,t)}function at(e,t,n){let r;const s=m,i=S;S=m=e;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(se),e.owned=null),e.updatedAt=n+1,Pe(o)}finally{S=i,m=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Fe(e,r):e.value=r,e.updatedAt=n)}function Be(e,t,n,r=B,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==Ne&&(m.owned?m.owned.push(i):m.owned=[i]),i}function Me(e){if(e.state===0)return;if(e.state===z)return W(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===B)re(e);else if(e.state===z){const r=C;C=null,M(()=>W(e,t[0]),!1),C=r}}function M(e,t){if(C)return e();let n=!1;t||(C=[]),k?n=!0:k=[],ne++;try{const r=e();return ut(n),r}catch(r){n||(k=null),C=null,Pe(r)}}function ut(e){if(C&&(Ue(C),C=null),e)return;const t=k;k=null,t.length&&M(()=>it(t),!1)}function Ue(e){for(let t=0;t<e.length;t++)Me(e[t])}function W(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===B?r!==t&&(!r.updatedAt||r.updatedAt<ne)&&Me(r):s===z&&W(r,t)}}}function qe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=z,n.pure?C.push(n):k.push(n),n.observers&&qe(n))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ft(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Pe(e,t=m){throw ft(e)}function ge(e){if(typeof e=="function"&&!e.length)return ge(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ge(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function dt(e,t){return function(r){let s;return D(()=>s=O(()=>(m.context={...m.context,[e]:r.value},ve(()=>r.children))),void 0),s}}const ht=Symbol("fallback");function Ce(e){for(let t=0;t<e.length;t++)e[t]()}function gt(e,t,n={}){let r=[],s=[],i=[],o=0,l=t.length>1?[]:null;return Se(()=>Ce(i)),()=>{let c=e()||[],u,a;return c[st],O(()=>{let d=c.length,y,h,g,p,w,x,v,E,L;if(d===0)o!==0&&(Ce(i),i=[],r=[],s=[],o=0,l&&(l=[])),n.fallback&&(r=[ht],s[0]=H(oe=>(i[0]=oe,n.fallback())),o=1);else if(o===0){for(s=new Array(d),a=0;a<d;a++)r[a]=c[a],s[a]=H(f);o=d}else{for(g=new Array(d),p=new Array(d),l&&(w=new Array(d)),x=0,v=Math.min(o,d);x<v&&r[x]===c[x];x++);for(v=o-1,E=d-1;v>=x&&E>=x&&r[v]===c[E];v--,E--)g[E]=s[v],p[E]=i[v],l&&(w[E]=l[v]);for(y=new Map,h=new Array(E+1),a=E;a>=x;a--)L=c[a],u=y.get(L),h[a]=u===void 0?-1:u,y.set(L,a);for(u=x;u<=v;u++)L=r[u],a=y.get(L),a!==void 0&&a!==-1?(g[a]=s[u],p[a]=i[u],l&&(w[a]=l[u]),a=h[a],y.set(L,a)):i[u]();for(a=x;a<d;a++)a in g?(s[a]=g[a],i[a]=p[a],l&&(l[a]=w[a],l[a](a))):s[a]=H(f);s=s.slice(0,o=d),r=c.slice(0)}return s});function f(d){if(i[a]=d,l){const[y,h]=R(a);return l[a]=h,t(c[a],y)}return t(c[a])}}}function A(e,t){return O(()=>e(t||{}))}function J(){return!0}const me={get(e,t,n){return t===Y?n:e.get(t)},has(e,t){return t===Y?!0:e.has(t)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function ue(e){return(e=typeof e=="function"?e():e)?e:{}}function mt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ye(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&Y in o,e[i]=typeof o=="function"?(t=!0,T(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=ue(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in ue(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(ue(e[o])));return[...new Set(i)]}},me);const n={},r={},s=new Set;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);for(let c=0,u=l.length;c<u;c++){const a=l[c];if(a==="__proto__"||a==="constructor")continue;const f=Object.getOwnPropertyDescriptor(o,a);if(!s.has(a))f.get?(s.add(a),Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:mt.bind(r[a]=[f.get.bind(o)])})):(f.value!==void 0&&s.add(a),n[a]=f.value);else{const d=r[a];d?f.get?d.push(f.get.bind(o)):f.value!==void 0&&d.push(()=>f.value):n[a]===void 0&&(n[a]=f.value)}}}return n}function yt(e,...t){if(Y in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},me));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},me)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,c=0;for(const u of t)u.includes(s)&&(l=!0,o?r[c][s]=i.value:Object.defineProperty(r[c],s,i)),++c;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}const pt=e=>`Stale read from <${e}>.`;function wt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return T(gt(()=>e.each,e.children,t||void 0))}function Ke(e){const t=e.keyed,n=T(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return T(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?O(()=>s(t?r:()=>{if(!O(n))throw pt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const bt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],St=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...bt]),At=new Set(["innerHTML","textContent","innerText","children"]),vt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Pt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function xt(e,t){const n=Pt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const $t=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Et(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,c=t[s-1].nextSibling,u=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const a=i<r?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],a)}else if(i===l)for(;o<s;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!u){u=new Map;let f=l;for(;f<i;)u.set(n[f],f++)}const a=u.get(t[o]);if(a!=null)if(l<a&&a<i){let f=o,d=1,y;for(;++f<s&&f<i&&!((y=u.get(t[f]))==null||y!==a+d);)d++;if(d>a-l){const h=t[o];for(;l<a;)e.insertBefore(n[l++],h)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Le="_$DX_DELEGATE";function Ct(e,t,n,r={}){let s;return H(i=>{s=i,t===document?e():P(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function _(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>O(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function xe(e,t=window.document){const n=t[Le]||(t[Le]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,It))}}function pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Lt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function $e(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ve(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function Ot(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(Oe(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(Oe(e,l,!0),n[l]=c)}return n}function Rt(e,t,n){if(!t)return n?pe(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function Dt(e,t={},n,r){const s={};return r||D(()=>s.children=q(e,t.children,s.children)),D(()=>t.ref&&t.ref(e)),D(()=>_t(e,t,n,!0,s,!0)),s}function P(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return q(e,t,r,n);D(s=>q(e,t(),s,n),r)}function _t(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Re(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||q(e,t.children);continue}const l=t[o];s[o]=Re(e,o,l,s[o],n,i)}}function Nt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Oe(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Re(e,t,n,r,s,i){let o,l,c,u,a;if(t==="style")return Rt(e,n,r);if(t==="classList")return Ot(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=$t.has(f);if(!d&&r){const y=Array.isArray(r)?r[0]:r;e.removeEventListener(f,y)}(d||n)&&(Ve(e,f,n,d),d&&xe([f]))}else if(t.slice(0,5)==="attr:")pe(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=At.has(t))||!s&&((u=xt(t,e.tagName))||(l=St.has(t)))||(o=e.nodeName.includes("-")))a&&(t=t.slice(5),l=!0),t==="class"||t==="className"?$e(e,n):o&&!l&&!c?e[Nt(t)]=n:e[u||t]=n;else{const f=s&&t.indexOf(":")>-1&&Tt[t.split(":")[0]];f?Lt(e,f,t,n):pe(e,vt[t]||t,n)}return n}function It(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function q(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=U(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=U(e,n,r);else{if(i==="function")return D(()=>{let l=t();for(;typeof l=="function";)l=l();n=q(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(we(l,t,n,s))return D(()=>n=q(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=U(e,n,r),o)return n}else c?n.length===0?De(e,l,r):Et(e,n,l):(n&&U(e),De(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=U(e,n,r,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function we(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],c=n&&n[i],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=we(e,l,c)||s;else if(u==="function")if(r){for(;typeof l=="function";)l=l();s=we(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else e.push(l),s=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return s}function De(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function U(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const c=l.parentNode===e;!i&&!o?c?e.replaceChild(s,l):e.insertBefore(s,n):c&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const jt=!1;function kt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:c=>{c&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const Ft=/^(?:[a-z0-9]+:)?\/\//i,Bt=/^\/+|(\/)\/+$/g;function F(e,t=!1){const n=e.replace(Bt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Q(e,t,n){if(Ft.test(t))return;const r=F(e),s=n&&F(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+F(t,!i)}function Mt(e,t){if(e==null)throw new Error(t);return e}function Ut(e,t){return F(e).replace(/\/*(\*.*)?$/g,"")+F(t)}function He(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function qt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const c=l.split("/").filter(Boolean),u=c.length-o;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:o?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<o;d++){const y=i[d],h=c[d],g=y[0]===":",p=g?y.slice(1):y;if(g&&fe(h,f(p)))a.params[p]=h;else if(g||!fe(h,y))return null;a.path+=`/${h}`}if(s){const d=u?c.slice(-u).join("/"):"";if(fe(d,f(s)))a.params[s]=d;else return null}return a}}function fe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Kt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Xe(e){const t=new Map,n=ot();return new Proxy({},{get(r,s){return t.has(s)||lt(n,()=>t.set(s,T(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Je(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Je(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const Vt=100,Ge=je(),ie=je(),Te=()=>Mt(Ae(Ge),"Make sure your app is wrapped in a <Router />"),Ht=()=>Ae(ie)||Te().base,Xt=e=>{const t=Ht();return T(()=>t.resolvePath(e()))},Jt=e=>{const t=Te();return T(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Gt=()=>Te().location;function Qt(e,t=""){const{component:n,load:r,children:s,metadata:i}=e,o=!s||Array.isArray(s)&&!s.length,l={key:e,component:n,load:r,metadata:i};return Qe(e.path).reduce((c,u)=>{for(const a of Je(u)){const f=Ut(t,a),d=o?f:f.split("/*",1)[0];c.push({...l,originalPath:a,pattern:d,matcher:qt(d,!o,e.matchFilters)})}return c},[])}function Yt(e,t=0){return{routes:e,score:Kt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function Qe(e){return Array.isArray(e)?e:[e]}function Ye(e,t="",n=[],r=[]){const s=Qe(e);for(let i=0,o=s.length;i<o;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const c=Qt(l,t);for(const u of c){n.push(u);const a=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!a)Ye(l.children,u.pattern,n,r);else{const f=Yt([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((i,o)=>o.score-i.score)}function Ze(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Zt(e,t){const n=new URL("http://sar"),r=T(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=T(()=>r().pathname),i=T(()=>r().search,!0),o=T(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:Xe(Ie(i,()=>He(r())))}}let I;function zt(e,t,n={}){const{signal:[r,s],utils:i={}}=e,o=i.parsePath||(b=>b),l=i.renderPath||(b=>b),c=i.beforeLeave||kt(),u=Q("",n.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&s({value:u,replace:!0,scroll:!1});const[a,f]=R(!1),d=async b=>{f(!0);try{await ct(b)}finally{f(!1)}},[y,h]=R(r().value),[g,p]=R(r().state),w=Zt(y,g),x=[],v=R([]),E={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(b){return Q(u,b)}};return D(()=>{const{value:b,state:$}=r();O(()=>{b!==y()&&d(()=>{I="native",h(b),p($),v[1]([])}).then(()=>{I=void 0})})}),{base:E,location:w,isRouting:a,renderPath:l,parsePath:o,navigatorFactory:oe,beforeLeave:c,preloadRoute:tt,submissions:v};function L(b,$,N){O(()=>{if(typeof $=="number"){$&&(i.go?c.confirm($,N)&&i.go($):console.warn("Router integration does not support relative routing"));return}const{replace:le,resolve:ce,scroll:j,state:K}={replace:!1,resolve:!0,scroll:!0,...N},V=ce?b.resolvePath($):Q("",$);if(V===void 0)throw new Error(`Path '${$}' is not a routable path`);if(x.length>=Vt)throw new Error("Too many redirects");const Ee=y();if((V!==Ee||K!==g())&&!jt){if(c.confirm(V,N)){const nt=x.push({value:Ee,replace:le,scroll:j,state:g()});d(()=>{I="navigate",h(V),p(K),v[1]([])}).then(()=>{x.length===nt&&(I=void 0,et({value:V,state:K}))})}}})}function oe(b){return b=b||Ae(ie)||E,($,N)=>L(b,$,N)}function et(b){const $=x[0];$&&((b.value!==$.value||b.state!==$.state)&&s({...b,replace:$.replace,scroll:$.scroll}),x.length=0)}function tt(b,$){const N=Ze(t(),b.pathname),le=I;I="preload";for(let ce in N){const{route:j,params:K}=N[ce];j.component&&j.component.preload&&j.component.preload(),$&&j.load&&j.load({params:K,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:He(b),state:null,key:""},intent:"preload"})}I=le}}function Wt(e,t,n,r,s){const{base:i,location:o}=e,{pattern:l,component:c,load:u}=r().route,a=T(()=>r().path);c&&c.preload&&c.preload();const f=u?u({params:s,location:o,intent:I||"initial"}):void 0;return{parent:t,pattern:l,path:a,params:s,outlet:()=>c?A(c,{params:s,location:o,data:f,get children(){return n()}}):n(),resolvePath(y){return Q(i.path(),y,a())}}}const en=e=>t=>{const{base:n}=t,r=ve(()=>t.children),s=T(()=>Ye(t.root?{component:t.root,children:r()}:r(),t.base||"")),i=zt(e,s,{base:n});return e.create&&e.create(i),A(Ge.Provider,{value:i,get children(){return A(tn,{routerState:i,get branches(){return s()}})}})};function tn(e){const t=T(()=>Ze(e.branches,e.routerState.location.pathname)),n=Xe(()=>{const o=t(),l={};for(let c=0;c<o.length;c++)Object.assign(l,o[c].params);return l}),r=[];let s;const i=T(Ie(t,(o,l,c)=>{let u=l&&o.length===l.length;const a=[];for(let f=0,d=o.length;f<d;f++){const y=l&&l[f],h=o[f];c&&y&&h.route.key===y.route.key?a[f]=c[f]:(u=!1,r[f]&&r[f](),H(g=>{r[f]=g,a[f]=Wt(e.routerState,a[f-1]||e.routerState.base,nn(()=>i()[f+1]),()=>t()[f],n)}))}return r.splice(o.length).forEach(f=>f()),c&&u?c:(s=a[0],a)}));return A(Ke,{get when(){return i()&&s},keyed:!0,children:o=>A(ie.Provider,{value:o,get children(){return o.outlet()}})})}const nn=e=>()=>A(Ke,{get when(){return e()},keyed:!0,children:t=>A(ie.Provider,{value:t,get children(){return t.outlet()}})}),de=e=>{const t=ve(()=>e.children);return ye(e,{get children(){return t()}})};function rn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function sn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function on(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=rn(R(n(e.get()),{equals:(s,i)=>s.value===i.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&Se(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),en({signal:r,create:e.create,utils:e.utils})}function ln(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function cn(e,t){const n=sn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const an=new Map;function un(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),i=r.navigatorFactory(r.base);let o={};function l(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function c(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const g=h.composedPath().find(L=>L instanceof Node&&L.nodeName.toUpperCase()==="A");if(!g||t&&!g.getAttribute("link"))return;const p=l(g),w=p?g.href.baseVal:g.href;if((p?g.target.baseVal:g.target)||!w&&!g.hasAttribute("state"))return;const v=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||v&&v.includes("external"))return;const E=p?new URL(w,document.baseURI):new URL(w);if(!(E.origin!==window.location.origin||s&&E.pathname&&!E.pathname.toLowerCase().startsWith(s.toLowerCase())))return[g,E]}function u(h){const g=c(h);if(!g)return;const[p,w]=g,x=r.parsePath(w.pathname+w.search+w.hash),v=p.getAttribute("state");h.preventDefault(),i(x,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function a(h){const g=c(h);if(!g)return;const[p,w]=g;o[w.pathname]||r.preloadRoute(w,p.getAttribute("preload")!=="false")}function f(h){const g=c(h);if(!g)return;const[p,w]=g;o[w.pathname]||(o[w.pathname]=setTimeout(()=>{r.preloadRoute(w,p.getAttribute("preload")!=="false"),delete o[w.pathname]},200))}function d(h){const g=c(h);if(!g)return;const[,p]=g;o[p.pathname]&&(clearTimeout(o[p.pathname]),delete o[p.pathname])}function y(h){let g=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.formAction:h.target.action;if(!g)return;if(!g.startsWith("action:")){const w=new URL(g);if(g=r.parsePath(w.pathname+w.search),!g.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=an.get(g);if(p){h.preventDefault();const w=new FormData(h.target);p.call(r,w)}}xe(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",d),document.addEventListener("focusin",a),document.addEventListener("touchstart",a)),document.addEventListener("submit",y),Se(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",d),document.removeEventListener("focusin",a),document.removeEventListener("touchstart",a)),document.removeEventListener("submit",y)})}}function fn(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function dn(e){return on({get:()=>window.location.hash.slice(1),set({value:t,replace:n,scroll:r,state:s}){n?window.history.replaceState(s,"","#"+t):window.location.hash=t;const i=t.indexOf("#"),o=i>=0?t.slice(i+1):"";cn(o,r)},init:t=>ln(window,"hashchange",()=>t()),create:un(e.preload,e.explicitLinks,e.actionBase),utils:{go:t=>window.history.go(t),renderPath:t=>`#${t}`,parsePath:fn}})(e)}const hn=_("<a>");function ee(e){e=ye({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=yt(e,["href","state","class","activeClass","inactiveClass","end"]),n=Xt(()=>e.href),r=Jt(n),s=Gt(),i=T(()=>{const o=n();if(o===void 0)return!1;const l=F(o.split(/[?#]/,1)[0]).toLowerCase(),c=F(s.pathname).toLowerCase();return e.end?l===c:c.startsWith(l)});return(()=>{const o=hn();return Dt(o,ye(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},link:"",get"aria-current"(){return i()?"page":void 0}}),!1,!1),o})()}var X=(e=>(e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday",e))(X||{}),be=(e=>(e[e.TextInput=0]="TextInput",e[e.ButtonInput=1]="ButtonInput",e))(be||{});function gn(e,t){const n=e.getTime(),r=t.getTime(),s=n+Math.random()*(r-n);return new Date(s)}function he(){let n=gn(new Date("0001-01-01"),new Date("3000-12-31"));return n.setHours(0,0,0,0),{startTime:new Date,endTime:new Date,targetDate:n,givenAnswer:X.Sunday}}function te(e,t){return(t.getTime()-e.getTime())/1e3}function ze(){let e=window.localStorage.getItem("records");return e?JSON.parse(e).map(r=>({startTime:new Date(r.startTime),endTime:new Date(r.endTime),targetDate:new Date(r.targetDate),givenAnswer:r.givenAnswer})):[]}const mn=_("<h1>Doomsday Rule"),yn=_("<div class=links>"),pn=_("<div id=center-thingy><h2></h2>s"),wn=_("<div>");function bn(){const[e,t]=R(ze()),[n,r]=R(he()),[s,i]=R("Day of week (0-6)"),o={inputMode:be.TextInput,blindTime:0};function l(){if(s()==="r"){r(he()),i("");return}let c=parseInt(s());if(isNaN(c)||c<0||c>7)return;c=c%7;let u={...n(),endTime:new Date,givenAnswer:c};c!==u.targetDate.getDay()&&alert("Incorrect, was "+X[u.targetDate.getDay()]),t([u,...e()]),r(he()),i("Day of week (0-6)"),localStorage.setItem("records",JSON.stringify(e()))}return setInterval(()=>{r({...n(),endTime:new Date})},1),addEventListener("keypress",c=>{c.key==="Enter"&&l(),parseInt(c.key)>=0&&parseInt(c.key)<=7&&i(c.key),c.key==="r"&&i(c.key)}),[mn(),(()=>{const c=yn();return P(c,A(ee,{href:"/stats",children:"Stats"}),null),P(c,A(ee,{href:"/options",children:"Options"}),null),c})(),(()=>{const c=pn(),u=c.firstChild,a=u.nextSibling;return P(u,()=>n().targetDate.toISOString().slice(0,10)),P(c,(()=>{const f=T(()=>o.inputMode===be.TextInput);return()=>f()&&(()=>{const d=wn();return P(d,s),D(()=>$e(d,"input"+(s().length!==1?" placeholder":""))),d})()})(),a),P(c,()=>te(n().startTime,n().endTime).toFixed(3),a),c})()]}function We(e){return e.givenAnswer===e.targetDate.getDay()}function Sn(e){let t=0;for(const n of e)We(n)&&t++;return(t/e.length*100).toFixed(2)+"%"}function _e(e,t){let n=0,r=0;for(const s of e)t?We(s)&&(n+=te(s.startTime,s.endTime),r++):(n+=te(s.startTime,s.endTime),r++);return(n/r).toFixed(2)+"s"}const An=_("<span class=stat>: <span class=stat-stat>"),vn=_("<tr><td></td><td></td><td></td><td>s</td><td class=delete-row>X"),Pn=_("<div><h1>Stats</h1><div class=links></div><div id=stats-page><div class=stats-bar></div><br><div class=records-list><table><thead><tr><th>Target Date</th><th>Actual</th><th>Guess</th><th>Time</th><th>Delete</th></tr></thead><tbody>");function G(e){return(()=>{const t=An(),n=t.firstChild,r=n.nextSibling;return P(t,()=>e.name,n),P(r,()=>e.value),t})()}function xn(e){const t=e.record;return(()=>{const n=vn(),r=n.firstChild,s=r.nextSibling,i=s.nextSibling,o=i.nextSibling,l=o.firstChild,c=o.nextSibling;return P(r,()=>t.targetDate.toISOString().slice(0,10)),P(s,()=>X[t.targetDate.getDay()]),P(i,()=>X[t.givenAnswer]),P(o,()=>te(t.startTime,t.endTime).toFixed(3),l),Ve(c,"click",e.deleteFunction,!0),D(()=>$e(n,t.givenAnswer===t.targetDate.getDay()?"correct":"incorrect")),n})()}function $n(){const[e,t]=R(ze());function n(r){let s=[...e()];s.splice(r,1),t(s),localStorage.setItem("records",JSON.stringify(e()))}return(()=>{const r=Pn(),s=r.firstChild,i=s.nextSibling,o=i.nextSibling,l=o.firstChild,c=l.nextSibling,u=c.nextSibling,a=u.firstChild,f=a.firstChild,d=f.nextSibling;return P(i,A(ee,{href:"/",children:"Practice"})),P(l,A(G,{name:"Total",get value(){return e().length.toString()}}),null),P(l,A(G,{name:"Success Rate",get value(){return Sn(e())}}),null),P(l,A(G,{name:"Average Time",get value(){return _e(e())}}),null),P(l,A(G,{name:"Average Time (Correct Only)",get value(){return _e(e(),!0)}}),null),P(d,A(wt,{get each(){return e()},children:(y,h)=>A(xn,{record:y,deleteFunction:()=>n(h())})})),r})()}xe(["click"]);const Tn=_("<div><h1>Options</h1><div class=links>");function En(){return(()=>{const e=Tn(),t=e.firstChild,n=t.nextSibling;return P(n,A(ee,{href:"/",children:"Practice"})),e})()}const Cn=document.getElementById("root");Ct(()=>A(dn,{get children(){return[A(de,{path:"/stats",component:$n}),A(de,{path:"/options",component:En}),A(de,{path:"*",component:bn})]}}),Cn);
