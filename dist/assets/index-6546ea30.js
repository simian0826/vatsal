import{H as N}from"./HeroSection-468f827c.js";import{b as D,r as C,f as y,o as s,c as n,j as e,t as _,e as o,w as a,k,A as $,n as R,_ as j,S as A,h as P,B as U,u as d,q as E,D as F,x as V,F as T,l as z,z as X,p as H,m as W}from"./index-df14bcea.js";/* empty css                  */import{c as q,s as B}from"./useBreakpoint-2283a2df.js";const G=""+new URL("iso9001.png",import.meta.url).href,J=""+new URL("iso.png",import.meta.url).href,K=""+new URL("iso17025.png",import.meta.url).href,M={class:"collapsed-container"},O={class:"header"},Q={class:"title"},Y=D({__name:"Collapse",props:{title:{type:String},collapsed:{type:Boolean,default:!1}},setup(u){const b=u,m=C(b.collapsed);return(S,v)=>{const f=y("ArrowDown"),t=y("ArrowUp"),h=y("el-icon");return s(),n("div",M,[e("div",O,[e("div",Q,_(b.title),1),o(h,{size:26,onClick:v[0]||(v[0]=I=>m.value=!m.value)},{default:a(()=>[m.value?(s(),k(t,{key:1})):(s(),k(f,{key:0}))]),_:1})]),e("div",{class:"content",style:R({height:m.value?"0":"auto"})},[$(S.$slots,"default",{},void 0,!0)],4)])}}});const L=j(Y,[["__scopeId","data-v-9567f7be"]]),Z=[{id:"1",mainInfo:{title:"Brightness,texture and  mattesilk",categoty:"tile",desc:"This is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary.uct's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of .summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative types.",imgs:["./assets/1.jpg","./assets/2.jpg","./assets/3.jpg"]},productName:"Product Name",productInfoImg:"./assets/15.jpg",properties:[{name:"Surfaces",items:[{label:"Naturale",value:"Naturale"},{label:"Full lappato",value:"Full lappato"},{label:"Lappato matt",value:"Lappato matt"},{label:"Spazzolato",value:"Spazzolato"},{label:"Lucido opaco",value:"Lucido opaco"},{label:"Rigato",value:"Rigato"},{label:"Bocciardato",value:"Bocciardato"},{label:"Pettinato",value:"Pettinato"}]},{name:"Color",items:[{label:"White",value:"White"},{label:"Black",value:"Black"},{label:"Lappato matt",value:"Lappato matt"},{label:"Spazzolato",value:"Spazzolato"},{label:"Lucido opaco",value:"Lucido opaco"},{label:"Rigato",value:"Rigato"},{label:"Bocciardato",value:"Bocciardato"},{label:"Pettinato",value:"Pettinato"}]},{name:"Thickness",items:[{label:"20mm",value:"20mm"},{label:"30mm",value:"30mm"},{label:"40mm",value:"40mm"}]},{name:"Size",items:[{label:"120x240cm",value:"120x240cm"},{label:"80x160cm",value:"80x160cm"},{label:"120x120cm",value:"120x120cm"},{label:"120x160cm",value:"120x160cm"}]}],certificate:["./assets/logo.jpg","./assets/logo.jpg","./assets/logo.jpg"]}],ee=Z,te=u=>(H("data-v-6cef197e"),u=u(),W(),u),ae={class:"project-container"},se={class:"main-info-container"},oe={class:"main-block"},le=["src"],ie=["onClick","src"],re={class:"category-block"},ce={class:"header"},ne={class:"description-container"},ue={class:"section-container"},me={key:0,class:"section"},pe={class:"product-name"},de={class:"item-container"},_e=te(()=>e("div",{class:"iso-container"},[e("img",{src:G}),e("img",{src:J}),e("img",{src:K})],-1)),ve=["src"],fe=D({__name:"index",setup(u){A.use([P]);const b=F(),m=V(),S=b.params.id,v=ee.find(I=>I.id==S);v||(U({title:"Error",message:"Could not find product",type:"error"}),m.go(-1));const f=C(0),t=C(v),{screenRef:h}=q();return(I,he)=>{const g=y("el-col"),w=y("el-row");return s(),n("div",ae,[o(N),e("div",se,[e("div",oe,[o(w,{gutter:d(h)!==d(B).XS?80:0},{default:a(()=>[o(g,{xs:24,sm:12},{default:a(()=>{var l,i;return[e("img",{class:"main-img",src:(i=(l=t.value)==null?void 0:l.mainInfo)==null?void 0:i.imgs[f.value]},null,8,le),o(w,{style:R({marginTop:(d(h)!==d(B).XS,20)}),gutter:d(h)!==d(B).XS?0:10},{default:a(()=>{var r,c;return[(s(!0),n(T,null,z((c=(r=t.value)==null?void 0:r.mainInfo)==null?void 0:c.imgs,(x,p)=>(s(),k(g,{key:p,span:8},{default:a(()=>[e("img",{onClick:ge=>f.value=p,class:X(["list-img",{active:f.value==p}]),src:x},null,10,ie)]),_:2},1024))),128))]}),_:1},8,["style","gutter"])]}),_:1}),o(g,{xs:24,sm:12},{default:a(()=>{var l,i,r,c,x,p;return[e("div",re,_((i=(l=t.value)==null?void 0:l.mainInfo)==null?void 0:i.categoty),1),e("div",ce,_((c=(r=t.value)==null?void 0:r.mainInfo)==null?void 0:c.title),1),e("div",ne,[e("p",null,_((p=(x=t.value)==null?void 0:x.mainInfo)==null?void 0:p.desc),1)])]}),_:1})]),_:1},8,["gutter"])])]),e("div",ue,[t.value?(s(),n("div",me,[o(w,null,{default:a(()=>[o(g,{xs:24,sm:16,class:"left-container"},{default:a(()=>[e("div",pe,_(t.value.productName),1),(s(!0),n(T,null,z(t.value.properties,(l,i)=>(s(),k(L,{style:{"margin-bottom":"20px"},key:i,title:l.name},{default:a(()=>[e("div",de,[(s(!0),n(T,null,z(l.items,(r,c)=>(s(),n("div",{class:"property-item",key:c},_(r.label),1))),128))])]),_:2},1032,["title"]))),128)),o(L,{title:"Certificate"},{default:a(()=>[_e]),_:1})]),_:1}),o(g,{class:"hidden-xs-only",xs:12,sm:8},{default:a(()=>[e("img",{class:"product-info-img",src:t.value.productInfoImg},null,8,ve)]),_:1})]),_:1})])):E("",!0)])])}}});const Se=j(fe,[["__scopeId","data-v-6cef197e"]]);export{Se as default};
