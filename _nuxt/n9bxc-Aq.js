import{u as d}from"./-ktUDlPb.js";import{d as l,ai as f,I as v,q as p,V as m,aj as g,ag as h,ak as y,N as i,E as _}from"./Bl1swyg1.js";const q=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:t}=f(r),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(r){const t=h(),{navigation:n}=r,o=e=>i(_,{to:e._path},()=>e.title),a=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(s=>s.children?i("li",null,[o(s),a(s.children,u+1)]):i("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),j=q;export{j as default};
