(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const Q=(e,n)=>e===n,L={equals:Q};let X=U;const y=1,b=2,F={owned:null,cleanups:null,context:null,owner:null};var d=null;let T=null,u=null,a=null,g=null,D=0;function J(e,n){const t=u,i=d,s=e.length===0,l=n===void 0?i:n,r=s?F:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=s?e:()=>e(()=>v(()=>C(r)));d=r,u=null;try{return m(o,!0)}finally{u=t,d=i}}function O(e,n){n=n?Object.assign({},L,n):L;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},i=s=>(typeof s=="function"&&(s=s(t.value)),I(t,s));return[Y.bind(t),i]}function S(e,n,t){const i=z(e,n,!1,y);$(i)}function v(e){if(u===null)return e();const n=u;u=null;try{return e()}finally{u=n}}function Y(){if(this.sources&&this.state)if(this.state===y)$(this);else{const e=a;a=null,m(()=>A(this),!1),a=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function I(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&m(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=T&&T.running;r&&T.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?a.push(l):g.push(l),l.observers&&j(l)),r||(l.state=y)}if(a.length>1e6)throw a=[],new Error},!1)),n}function $(e){if(!e.fn)return;C(e);const n=D;Z(e,e.value,n)}function Z(e,n,t){let i;const s=d,l=u;u=d=e;try{i=e.fn(n)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(C),e.owned=null),e.updatedAt=t+1,q(r)}finally{u=l,d=s}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?I(e,i):e.value=i,e.updatedAt=t)}function z(e,n,t,i=y,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return d===null||d!==F&&(d.owned?d.owned.push(l):d.owned=[l]),l}function M(e){if(e.state===0)return;if(e.state===b)return A(e);if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===y)$(e);else if(e.state===b){const i=a;a=null,m(()=>A(e,n[0]),!1),a=i}}function m(e,n){if(a)return e();let t=!1;n||(a=[]),g?t=!0:g=[],D++;try{const i=e();return W(t),i}catch(i){t||(g=null),a=null,q(i)}}function W(e){if(a&&(U(a),a=null),e)return;const n=g;g=null,n.length&&m(()=>X(n),!1)}function U(e){for(let n=0;n<e.length;n++)M(e[n])}function A(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const i=e.sources[t];if(i.sources){const s=i.state;s===y?i!==n&&(!i.updatedAt||i.updatedAt<D)&&M(i):s===b&&A(i,n)}}}function j(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=b,t.pure?a.push(t):g.push(t),t.observers&&j(t))}}function C(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const l=s.pop(),r=t.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,t.observerSlots[i]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)C(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function k(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function q(e,n=d){throw k(e)}function ee(e,n){return v(()=>e(n||{}))}function te(e,n,t){let i=t.length,s=n.length,l=i,r=0,o=0,f=n[s-1].nextSibling,h=null;for(;r<s||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[s-1]===t[l-1];)s--,l--;if(s===r){const c=l<i?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],c)}else if(l===o)for(;r<s;)(!h||!h.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[s-1]){const c=n[--s].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],c),n[s]=t[l]}else{if(!h){h=new Map;let p=o;for(;p<l;)h.set(t[p],p++)}const c=h.get(n[r]);if(c!=null)if(o<c&&c<l){let p=r,x=1,N;for(;++p<s&&p<l&&!((N=h.get(n[p]))==null||N!==c+x);)x++;if(x>c-o){const K=n[r];for(;o<c;)e.insertBefore(t[o++],K)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const P="_$DX_DELEGATE";function ne(e,n,t,i={}){let s;return J(l=>{s=l,n===document?e():G(n,e(),n.firstChild?null:void 0,t)},i.owner),()=>{s(),n.textContent=""}}function V(e,n,t){let i;const s=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},l=n?()=>v(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return l.cloneNode=l,l}function se(e,n=window.document){const t=n[P]||(n[P]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];t.has(l)||(t.add(l),n.addEventListener(l,ie))}}function G(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return E(e,n,i,t);S(s=>E(e,n(),s,t),i)}function ie(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const i=t[n];if(i&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?i.call(t,s,e):i.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function E(e,n,t,i,s){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=i!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=w(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||l==="boolean")t=w(e,t,i);else{if(l==="function")return S(()=>{let o=n();for(;typeof o=="function";)o=o();t=E(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(_(o,n,t,s))return S(()=>t=E(e,o,t,i,!0)),()=>t;if(o.length===0){if(t=w(e,t,i),r)return t}else f?t.length===0?B(e,o,i):te(e,t,o):(t&&w(e),B(e,o));t=o}else if(n.nodeType){if(Array.isArray(t)){if(r)return t=w(e,t,i,n);w(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function _(e,n,t,i){let s=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=_(e,o,f)||s;else if(h==="function")if(i){for(;typeof o=="function";)o=o();s=_(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||s}else e.push(o),s=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return s}function B(e,n,t=null){for(let i=0,s=n.length;i<s;i++)e.insertBefore(n[i],t)}function w(e,n,t,i){if(t===void 0)return e.textContent="";const s=i||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(s!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(s,o):e.insertBefore(s,t):f&&o.remove()}else l=!0}}else e.insertBefore(s,t);return[s]}function le(e,n){const t=e.getTime(),i=n.getTime(),s=t+Math.random()*(i-t);return new Date(s)}const oe=V("<h1>Doomsday Rule"),re=V("<div id=center-thingy><h2></h2><form><label>Answer:<input type=text>");var H=function(e){return e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday",e}(H||{});function R(){const t=le(new Date("0000-01-01"),new Date("3000-12-31"));return console.log(t),{start_time:new Date,end_time:new Date,target_date:t,given_answer:H.Sunday}}function ue(){const[e,n]=O(R()),[t,i]=O("");function s(l){l.preventDefault();let r=parseInt(t());r==e().target_date.getDay()?(console.log(r),alert("correct")):alert(`incorrect was ${e().target_date.getDay()}`),n(R()),i("")}return[oe(),(()=>{const l=re(),r=l.firstChild,o=r.nextSibling,f=o.firstChild,h=f.firstChild,c=h.nextSibling;return G(r,()=>e().target_date.toLocaleDateString()),o.addEventListener("submit",s),c.$$input=p=>i(p.target.value),S(()=>c.value=t()),l})()]}se(["input"]);const fe=document.getElementById("root");ne(()=>ee(ue,{}),fe);
