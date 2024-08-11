import{a9 as l,aa as m,ab as u,ac as E,ad as g,ae as h,af as a}from"./@vue-26c81de9.js";/**
* vue v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const f=new WeakMap;function C(e){let n=f.get(e??a);return n||(n=Object.create(null),f.set(e??a,n)),n}function T(e,n){if(!m(e))if(e.nodeType)e=e.innerHTML;else return u;const o=e,t=C(n),s=t[o];if(s)return s;if(e[0]==="#"){const c=document.querySelector(e);e=c?c.innerHTML:""}const r=E({hoistStatic:!0,onError:void 0,onWarn:u},n);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=c=>!!customElements.get(c));const{code:d}=g(e,r),i=new Function("Vue",d)(h);return i._rc=!0,t[o]=i}l(T);
