function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.IQQi95CS.js","../chunks/scheduler.BvLojk_z.js","../chunks/index.CE9Sogl3.js","../chunks/paths.B3CzIrCi.js","../assets/0.BI2GGfwI.css","../nodes/1.DJQKDcML.js","../chunks/entry.CUkFQOQH.js","../nodes/2.I82q3C0R.js","../assets/2.D3ITOVCJ.css","../nodes/3.BRc4oWuL.js","../assets/3.DzdUp0j8.css","../nodes/4.DMPerTLi.js","../assets/4.BSP2RMCR.css","../nodes/5.BbEOx_VC.js","../assets/5.nTuguxQY.css","../nodes/6.DK-PLG6N.js","../assets/6.CcWF-5cM.css","../nodes/7.BQSqjKR4.js","../assets/7.8Df7iEpJ.css","../nodes/8.DRPVvunc.js","../assets/8.DaOY73rv.css","../nodes/9.DJbNNNlh.js","../assets/9.DIxVakGY.css","../nodes/10.CYtsKh4X.js","../assets/10.9Gdew6a1.css","../nodes/11.ADUlss58.js","../assets/11.CNhO-rnS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as U,d as j,o as z,e as I,t as W}from"../chunks/scheduler.BvLojk_z.js";import{S as F,i as G,s as H,p,a as J,h as b,j as d,q as A,t as h,d as g,e as K,c as Q,b as X,f as T,r as P,k as Y,l as Z,n as M,u as y,v as E,w as k,x as O,y as v,z as R}from"../chunks/index.CE9Sogl3.js";const x="modulepreload",ee=function(a,e){return new URL(a,e).href},V={},w=function(e,n,o){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=ee(i,o),i in V)return;V[i]=!0;const c=i.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!o)for(let L=_.length-1;L>=0;L--){const D=_[L];if(D.href===i&&(!c||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":x,c||(u.as="script",u.crossOrigin=""),u.href=i,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((L,D)=>{u.addEventListener("load",L),u.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},_e={};function te(a){let e,n,o;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=E(r,_(a)),a[15](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const i=e;d(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,_(t)),t[15](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&h(e.$$.fragment,t),o=!0)},o(t){e&&d(e.$$.fragment,t),o=!1},d(t){t&&g(n),a[15](null),e&&R(e,t)}}}function ne(a){let e,n,o;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[se]},$$scope:{ctx:t}}}}return r&&(e=E(r,_(a)),a[14](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const i=e;d(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,_(t)),t[14](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&65591&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){o||(e&&h(e.$$.fragment,t),o=!0)},o(t){e&&d(e.$$.fragment,t),o=!1},d(t){t&&g(n),a[14](null),e&&R(e,t)}}}function ie(a){let e,n,o;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=E(r,_(a)),a[13](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){y();const i=e;d(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,_(t)),t[13](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&h(e.$$.fragment,t),o=!0)},o(t){e&&d(e.$$.fragment,t),o=!1},d(t){t&&g(n),a[13](null),e&&R(e,t)}}}function re(a){let e,n,o;var r=a[1][1];function _(t,s){return{props:{data:t[4],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return r&&(e=E(r,_(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){y();const i=e;d(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,_(t)),t[12](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&65575&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){o||(e&&h(e.$$.fragment,t),o=!0)},o(t){e&&d(e.$$.fragment,t),o=!1},d(t){t&&g(n),a[12](null),e&&R(e,t)}}}function oe(a){let e,n,o;var r=a[1][2];function _(t,s){return{props:{data:t[5],form:t[2]}}}return r&&(e=E(r,_(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][2])){if(e){y();const i=e;d(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,_(t)),t[11](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&32&&(i.data=t[5]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&h(e.$$.fragment,t),o=!0)},o(t){e&&d(e.$$.fragment,t),o=!1},d(t){t&&g(n),a[11](null),e&&R(e,t)}}}function se(a){let e,n,o,r;const _=[re,ie],t=[];function s(i,c){return i[1][2]?0:1}return e=s(a),n=t[e]=_[e](a),{c(){n.c(),o=p()},l(i){n.l(i),o=p()},m(i,c){t[e].m(i,c),b(i,o,c),r=!0},p(i,c){let l=e;e=s(i),e===l?t[e].p(i,c):(y(),d(t[l],1,1,()=>{t[l]=null}),A(),n=t[e],n?n.p(i,c):(n=t[e]=_[e](i),n.c()),h(n,1),n.m(o.parentNode,o))},i(i){r||(h(n),r=!0)},o(i){d(n),r=!1},d(i){i&&g(o),t[e].d(i)}}}function $(a){let e,n=a[7]&&N(a);return{c(){e=K("div"),n&&n.c(),this.h()},l(o){e=Q(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=X(e);n&&n.l(r),r.forEach(g),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),P(e,"position","absolute"),P(e,"left","0"),P(e,"top","0"),P(e,"clip","rect(0 0 0 0)"),P(e,"clip-path","inset(50%)"),P(e,"overflow","hidden"),P(e,"white-space","nowrap"),P(e,"width","1px"),P(e,"height","1px")},m(o,r){b(o,e,r),n&&n.m(e,null)},p(o,r){o[7]?n?n.p(o,r):(n=N(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&g(e),n&&n.d()}}}function N(a){let e;return{c(){e=Y(a[8])},l(n){e=Z(n,a[8])},m(n,o){b(n,e,o)},p(n,o){o&256&&M(e,n[8])},d(n){n&&g(e)}}}function ae(a){let e,n,o,r,_;const t=[ne,te],s=[];function i(l,m){return l[1][1]?0:1}e=i(a),n=s[e]=t[e](a);let c=a[6]&&$(a);return{c(){n.c(),o=H(),c&&c.c(),r=p()},l(l){n.l(l),o=J(l),c&&c.l(l),r=p()},m(l,m){s[e].m(l,m),b(l,o,m),c&&c.m(l,m),b(l,r,m),_=!0},p(l,[m]){let u=e;e=i(l),e===u?s[e].p(l,m):(y(),d(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),h(n,1),n.m(o.parentNode,o)),l[6]?c?c.p(l,m):(c=$(l),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(l){_||(h(n),_=!0)},o(l){d(n),_=!1},d(l){l&&(g(o),g(r)),s[e].d(l),c&&c.d(l)}}}function le(a,e,n){let{stores:o}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:i=null}=e,{data_1:c=null}=e,{data_2:l=null}=e;j(o.page.notify);let m=!1,u=!1,L=null;z(()=>{const f=o.page.subscribe(()=>{m&&(n(7,u=!0),W().then(()=>{n(8,L=document.title||"untitled page")}))});return n(6,m=!0),f});function D(f){I[f?"unshift":"push"](()=>{t[2]=f,n(0,t)})}function S(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function q(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function C(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(9,o=f.stores),"page"in f&&n(10,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,i=f.data_0),"data_1"in f&&n(4,c=f.data_1),"data_2"in f&&n(5,l=f.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&o.page.set(r)},[t,_,s,i,c,l,m,u,L,o,r,D,S,q,C,B]}class ue extends F{constructor(e){super(),G(this,e,le,ae,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>w(()=>import("../nodes/0.IQQi95CS.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>w(()=>import("../nodes/1.DJQKDcML.js"),__vite__mapDeps([5,1,2,6,3]),import.meta.url),()=>w(()=>import("../nodes/2.I82q3C0R.js"),__vite__mapDeps([7,1,2,8]),import.meta.url),()=>w(()=>import("../nodes/3.BRc4oWuL.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),()=>w(()=>import("../nodes/4.DMPerTLi.js"),__vite__mapDeps([11,1,2,12]),import.meta.url),()=>w(()=>import("../nodes/5.BbEOx_VC.js"),__vite__mapDeps([13,1,2,14]),import.meta.url),()=>w(()=>import("../nodes/6.DK-PLG6N.js"),__vite__mapDeps([15,1,2,16]),import.meta.url),()=>w(()=>import("../nodes/7.BQSqjKR4.js"),__vite__mapDeps([17,1,2,3,18]),import.meta.url),()=>w(()=>import("../nodes/8.DRPVvunc.js"),__vite__mapDeps([19,1,2,20]),import.meta.url),()=>w(()=>import("../nodes/9.DJbNNNlh.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),()=>w(()=>import("../nodes/10.CYtsKh4X.js"),__vite__mapDeps([23,1,2,24]),import.meta.url),()=>w(()=>import("../nodes/11.ADUlss58.js"),__vite__mapDeps([25,1,2,26]),import.meta.url)],pe=[],de={"/":[3],"/(common)/ahorcado":[4,[2]],"/(common)/practica1":[5,[2]],"/(common)/practica2":[6,[2]],"/(common)/practica3":[7,[2]],"/(common)/practica4":[8,[2]],"/(common)/practica5":[9,[2]],"/(common)/practica6":[10,[2]],"/(common)/practica8":[11,[2]]},he={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{de as dictionary,he as hooks,_e as matchers,me as nodes,ue as root,pe as server_loads};
