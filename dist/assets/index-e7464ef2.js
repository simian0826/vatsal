import{H as z}from"./HeroSection-210f3963.js";import{d as D,r as b,l as f,b as t,c as n,f as e,t as v,e as l,h as a,j as C,D as A,n as E,_ as I,E as R,u as H,o as V,G as X,H as j,i as d,m as F,F as h,k,y as L}from"./index-45a33175.js";import{c as U,s as S}from"./useBreakpoint-b48bf7bd.js";const G={class:"collapsed-container"},M={class:"header"},P={class:"title"},T=D({__name:"Collapse",props:{title:{type:String},collapsed:{type:Boolean,default:!1}},setup(B){const r=B,i=b(r.collapsed);return(x,g)=>{const u=f("ArrowDown"),s=f("ArrowUp"),p=f("el-icon");return t(),n("div",G,[e("div",M,[e("div",P,v(r.title),1),l(p,{size:26,onClick:g[0]||(g[0]=N=>i.value=!i.value)},{default:a(()=>[i.value?(t(),C(s,{key:1})):(t(),C(u,{key:0}))]),_:1})]),e("div",{class:"content",style:E({height:i.value?"0":"auto"})},[A(x.$slots,"default",{},void 0,!0)],4)])}}});const $=I(T,[["__scopeId","data-v-494d45ea"]]),q={class:"project-container"},J={class:"main-info-container"},K={class:"main-block"},O=["src"],Q=["onClick","src"],W={class:"category-block"},Y={class:"header"},Z={class:"description-container"},ee={class:"section-container"},te={key:0,class:"section"},se={class:"item-container"},oe={class:"iso-container"},ae=["src"],ne=D({__name:"index",setup(B){const{screenRef:r}=U(),i=R(),x=H(),g=i.params.id,u=b(0),s=b();return V(async()=>{try{const p=await X(Number(g));s.value=p}catch(p){j({title:"Error",message:"Could not find product",type:"error"}),x.go(-1)}}),(p,N)=>{const y=f("el-col"),w=f("el-row");return t(),n("div",q,[l(z,{module:"product"}),e("div",J,[e("div",K,[l(w,{gutter:d(r)!==d(S).XS?80:0},{default:a(()=>[l(y,{xs:24,sm:12},{default:a(()=>{var o;return[e("img",{class:"main-img",src:(o=s.value)==null?void 0:o.imgs[u.value]},null,8,O),l(w,{style:E({marginTop:(d(r)!==d(S).XS,20)}),gutter:d(r)!==d(S).XS?0:10},{default:a(()=>{var c;return[(t(!0),n(h,null,k((c=s.value)==null?void 0:c.imgs,(_,m)=>(t(),C(y,{key:m,span:8},{default:a(()=>[e("img",{onClick:le=>u.value=m,class:L(["list-img",{active:u.value==m}]),src:_},null,10,Q)]),_:2},1024))),128))]}),_:1},8,["style","gutter"])]}),_:1}),l(y,{xs:24,sm:12},{default:a(()=>{var o,c,_;return[e("div",W,v((o=s.value)==null?void 0:o.category),1),e("div",Y,v((c=s.value)==null?void 0:c.name),1),e("div",Z,[e("p",null,v((_=s.value)==null?void 0:_.description),1)])]}),_:1})]),_:1},8,["gutter"])])]),e("div",ee,[s.value?(t(),n("div",te,[l(w,null,{default:a(()=>[l(y,{xs:24,sm:24,class:"left-container"},{default:a(()=>[(t(!0),n(h,null,k(s.value.properties,(o,c)=>(t(),C($,{style:{"margin-bottom":"20px"},key:c,title:o.name},{default:a(()=>[e("div",se,[(t(!0),n(h,null,k(o.items,(_,m)=>(t(),n("div",{class:"property-item",key:m},v(_.label),1))),128))])]),_:2},1032,["title"]))),128)),l($,{title:"Certificate"},{default:a(()=>[e("div",oe,[(t(!0),n(h,null,k(s.value.certificate,o=>(t(),n("img",{key:o,src:o},null,8,ae))),128))])]),_:1})]),_:1})]),_:1})])):F("",!0)])])}}});const _e=I(ne,[["__scopeId","data-v-efcd9685"]]);export{_e as default};
