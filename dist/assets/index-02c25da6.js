import{b as y,x as I,r as d,c as v,e,j as s,F as g,k as m,q as P,s as S,o as c,u as b,t,f as i,w as x,_ as D}from"./index-196d3898.js";import{p as _}from"./projectList-6b26e94a.js";const a=n=>(P("data-v-c29d11bb"),n=n(),S(),n),E={class:"project-list-container"},L={class:"hero-container"},O=["src"],R={class:"ongoing-container",id:"ongoing"},N=a(()=>s("div",{class:"header"},"ONGOING PROJECTS",-1)),w={class:"list-content"},B=["onClick"],G={class:"block"},T=["src"],$=a(()=>s("div",{class:"mask-container"},[s("div",{class:"explore-btn"},"explore")],-1)),F={class:"sub-title"},J={class:"title"},U={class:"location-container"},V={class:"completed-container",id:"completed"},q=a(()=>s("div",{class:"header"},"COMPLETED PROJECTS",-1)),M={class:"list-content"},z={class:"block"},A=["src"],H=a(()=>s("div",{class:"mask-container"},[s("div",{class:"explore-btn"},"explore")],-1)),K={class:"sub-title"},Q={class:"title"},W={class:"location-container"},X=y({__name:"index",setup(n){const r=I(),k=d(_.heroImgUrl),f=d(_.ongoingProjects),j=d(_.completedProjects);return(Y,p)=>{const h=v("Location"),u=v("el-icon");return c(),e("div",E,[s("div",L,[s("img",{class:"hero-image",src:k.value},null,8,O)]),s("div",R,[N,s("div",w,[(c(!0),e(g,null,m(f.value,(o,l)=>(c(),e("div",{class:"block-container",key:l,onClick:C=>b(r).push({path:"/projectDetail/".concat(o.id)})},[s("div",G,[s("img",{class:"bg-image",src:o.image},null,8,T),$]),s("div",F,t(o.subtitle),1),s("div",J,t(o.title),1),s("div",U,[i(u,{color:"#005482",style:{marginRight:"6px"}},{default:x(()=>[i(h)]),_:1}),s("span",null,t(o.location),1)])],8,B))),128))])]),s("div",V,[q,s("div",M,[(c(!0),e(g,null,m(j.value,(o,l)=>(c(),e("div",{class:"block-container",key:l,onClick:p[0]||(p[0]=C=>b(r).push({path:"/projectDetail"}))},[s("div",z,[s("img",{class:"bg-image",src:o.image},null,8,A),H]),s("div",K,t(o.subtitle),1),s("div",Q,t(o.title),1),s("div",W,[i(u,{color:"#005482",style:{marginRight:"6px"}},{default:x(()=>[i(h)]),_:1}),s("span",null,t(o.location),1)])]))),128))])])])}}});const os=D(X,[["__scopeId","data-v-c29d11bb"]]);export{os as default};
