import{a3 as y,i as m,r as p,w as F,v as D}from"./index-45a33175.js";var c=(e=>(e.XS="XS",e.SM="SM",e.MD="MD",e.LG="LG",e.XL="XL",e.XXL="XXL",e))(c||{}),T=(e=>(e[e.XS=768]="XS",e[e.SM=768]="SM",e[e.MD=992]="MD",e[e.LG=1200]="LG",e[e.XL=1920]="XL",e))(T||{});const d=new Map;d.set("XS",768);d.set("SM",768);d.set("MD",992);d.set("LG",1200);d.set("XL",1920);function G(e){return typeof e=="function"?e():m(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const M=()=>{};function x(e,t){function r(...n){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(i).catch(o)})}return r}function j(e,t={}){let r,n,i=M;const o=l=>{clearTimeout(l),i(),i=M};return l=>{const a=G(e),s=G(t.maxWait);return r&&o(r),a<=0||s!==void 0&&s<=0?(n&&(o(n),n=null),Promise.resolve(l())):new Promise((h,v)=>{i=t.rejectOnCancel?v:h,s&&!n&&(n=setTimeout(()=>{r&&o(r),n=null,h(l())},s)),r=setTimeout(()=>{n&&o(n),n=null,h(l())},a)})}}function P(...e){let t=0,r,n=!0,i=M,o,u,l,a,s;!y(e[0])&&typeof e[0]=="object"?{delay:u,trailing:l=!0,leading:a=!0,rejectOnCancel:s=!1}=e[0]:[u,l=!0,a=!0,s=!1]=e;const h=()=>{r&&(clearTimeout(r),r=void 0,i(),i=M)};return w=>{const L=G(u),X=Date.now()-t,f=()=>o=w();return h(),L<=0?(t=Date.now(),f()):(X>L&&(a||!n)?(t=Date.now(),f()):l&&(o=new Promise((S,W)=>{i=s?W:S,r=setTimeout(()=>{t=Date.now(),n=!0,S(f()),h()},Math.max(0,L-X))})),!a&&!r&&(r=setTimeout(()=>n=!0,L)),n=!1,o)}}function k(e,t=200,r={}){return x(j(t,r),e)}function A(e,t=200,r=!1,n=!0,i=!1){return x(P(t,r,n,i),e)}function C({el:e=window,name:t,listener:r,options:n,autoRemove:i=!0,isDebounce:o=!0,wait:u=80}){let l=()=>{};const a=p(!1);if(e){const s=p(e),h=o?k(r,u):A(r,u),v=u?h:r,w=f=>{a.value=!0,f.removeEventListener(t,v,n)},L=f=>f.addEventListener(t,v,n),X=F(s,(f,S,W)=>{f&&(!m(a)&&L(f),W(()=>{i&&w(f)}))},{immediate:!0});l=()=>{w(s.value),X()}}return{removeEvent:l}}let R,g,b;function V(e){const t=p(c.XL),r=p(window.innerWidth);function n(){const o=document.body.clientWidth,u=d.get(c.XS),l=d.get(c.SM),a=d.get(c.MD),s=d.get(c.LG);o<u?t.value=c.XS:o>u&&o<=l?t.value=c.SM:o>l&&o<=a?t.value=c.MD:o>a&&o<=s?t.value=c.LG:t.value=c.XL,r.value=o}C({el:window,name:"resize",listener:()=>{n(),i()}}),n(),R=D(()=>m(t)),g=D(()=>d.get(m(t))),b=D(()=>m(r));function i(){e==null||e({screen:R,width:g,realWidth:b,screenEnum:T,screenMap:d,sizeEnum:c})}return i(),{screenRef:R,screenEnum:T,widthRef:g,realWidthRef:b}}export{V as c,c as s};
