import{Z as Pe,$ as je,J as Le,o as D,Q as ze,a0 as Ae,a1 as Y,I as b,a2 as K,r as S,a3 as le,l as U,d as W,y as pe,b as h,W as P,c as j,n as I,X as Ee,w as F,Y as O,a4 as se,a5 as ue,O as T,a6 as Te,e as G,P as qe,a7 as Me,E as Re,a8 as Ne,a9 as _,aa as Z,R as De,G as ce,a as ye,ab as N,ac as J,ad as me,ae as X,f as E,t as We,F as de,af as fe}from"./DNwy3Cg4.js";const Fe=window.setInterval;function he(e){return Pe()?(je(e),!0):!1}function C(e){return typeof e=="function"?e():Le(e)}const Ge=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ue=Object.prototype.toString,He=e=>Ue.call(e)==="[object Object]",q=()=>{};function ke(e,n){function t(...a){return new Promise((o,r)=>{Promise.resolve(e(()=>n.apply(this,a),{fn:n,thisArg:this,args:a})).then(o).catch(r)})}return t}function Ve(e,n={}){let t,a,o=q;const r=l=>{clearTimeout(l),o(),o=q};return l=>{const d=C(e),u=C(n.maxWait);return t&&r(t),d<=0||u!==void 0&&u<=0?(a&&(r(a),a=null),Promise.resolve(l())):new Promise((f,s)=>{o=n.rejectOnCancel?s:f,u&&!a&&(a=setTimeout(()=>{t&&r(t),a=null,f(l())},u)),t=setTimeout(()=>{a&&r(a),a=null,f(l())},d)})}}function _e(...e){let n=0,t,a=!0,o=q,r,i,l,d,u;!Ae(e[0])&&typeof e[0]=="object"?{delay:i,trailing:l=!0,leading:d=!0,rejectOnCancel:u=!1}=e[0]:[i,l=!0,d=!0,u=!1]=e;const f=()=>{t&&(clearTimeout(t),t=void 0,o(),o=q)};return c=>{const v=C(i),p=Date.now()-n,y=()=>r=c();return f(),v<=0?(n=Date.now(),y()):(p>v&&(d||!a)?(n=Date.now(),y()):l&&(r=new Promise((k,m)=>{o=u?m:k,t=setTimeout(()=>{n=Date.now(),a=!0,k(y()),f()},Math.max(0,v-p))})),!d&&!t&&(t=setTimeout(()=>a=!0,v)),a=!1,r)}}function Xe(e){return Y()}function Qe(e,n=200,t={}){return ke(Ve(n,t),e)}function Je(e,n=200,t=!1,a=!0,o=!1){return ke(_e(n,t,a,o),e)}function we(e,n=!0,t){Xe()?D(e,t):n?e():ze(e)}function L(e){var n;const t=C(e);return(n=t==null?void 0:t.$el)!=null?n:t}const H=Ge?window:void 0;function ge(...e){let n,t,a,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,a,o]=e,n=H):[n,t,a,o]=e,!n)return q;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const r=[],i=()=>{r.forEach(f=>f()),r.length=0},l=(f,s,c,v)=>(f.addEventListener(s,c,v),()=>f.removeEventListener(s,c,v)),d=K(()=>[L(n),C(o)],([f,s])=>{if(i(),!f)return;const c=He(s)?{...s}:s;r.push(...t.flatMap(v=>a.map(p=>l(f,v,p,c))))},{immediate:!0,flush:"post"}),u=()=>{d(),i()};return he(u),u}function Ye(){const e=S(!1),n=Y();return n&&D(()=>{e.value=!0},n),e}function Ke(e){const n=Ye();return b(()=>(n.value,!!e()))}function xe(e,n,t={}){const{window:a=H,...o}=t;let r;const i=Ke(()=>a&&"ResizeObserver"in a),l=()=>{r&&(r.disconnect(),r=void 0)},d=b(()=>Array.isArray(e)?e.map(s=>L(s)):[L(e)]),u=K(d,s=>{if(l(),i.value&&a){r=new ResizeObserver(n);for(const c of s)c&&r.observe(c,o)}},{immediate:!0,flush:"post"}),f=()=>{l(),u()};return he(f),{isSupported:i,stop:f}}function Ze(e,n={width:0,height:0},t={}){const{window:a=H,box:o="content-box"}=t,r=b(()=>{var s,c;return(c=(s=L(e))==null?void 0:s.namespaceURI)==null?void 0:c.includes("svg")}),i=S(n.width),l=S(n.height),{stop:d}=xe(e,([s])=>{const c=o==="border-box"?s.borderBoxSize:o==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(a&&r.value){const v=L(e);if(v){const p=a.getComputedStyle(v);i.value=Number.parseFloat(p.width),l.value=Number.parseFloat(p.height)}}else if(c){const v=Array.isArray(c)?c:[c];i.value=v.reduce((p,{inlineSize:y})=>p+y,0),l.value=v.reduce((p,{blockSize:y})=>p+y,0)}else i.value=s.contentRect.width,l.value=s.contentRect.height},t);we(()=>{const s=L(e);s&&(i.value="offsetWidth"in s?s.offsetWidth:n.width,l.value="offsetHeight"in s?s.offsetHeight:n.height)});const u=K(()=>L(e),s=>{i.value=s?n.width:0,l.value=s?n.height:0});function f(){d(),u()}return{width:i,height:l,stop:f}}const ve=1;function et(e,n={}){const{throttle:t=0,idle:a=200,onStop:o=q,onScroll:r=q,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:l={capture:!1,passive:!0},behavior:d="auto",window:u=H,onError:f=g=>{console.error(g)}}=n,s=S(0),c=S(0),v=b({get(){return s.value},set(g){y(g,void 0)}}),p=b({get(){return c.value},set(g){y(void 0,g)}});function y(g,z){var x,M,R;if(!u)return;const B=C(e);B&&((R=B instanceof Document?u.document.body:B)==null||R.scrollTo({top:(x=C(z))!=null?x:p.value,left:(M=C(g))!=null?M:v.value,behavior:C(d)}))}const k=S(!1),m=le({left:!0,right:!1,top:!0,bottom:!1}),w=le({left:!1,right:!1,top:!1,bottom:!1}),te=g=>{k.value&&(k.value=!1,w.left=!1,w.right=!1,w.top=!1,w.bottom=!1,o(g))},Oe=Qe(te,t+a),V=g=>{var z;if(!u)return;const x=((z=g==null?void 0:g.document)==null?void 0:z.documentElement)||(g==null?void 0:g.documentElement)||L(g),{display:M,flexDirection:R}=getComputedStyle(x),B=x.scrollLeft;w.left=B<s.value,w.right=B>s.value;const ne=Math.abs(B)<=(i.left||0),ae=Math.abs(B)+x.clientWidth>=x.scrollWidth-(i.right||0)-ve;M==="flex"&&R==="row-reverse"?(m.left=ae,m.right=ne):(m.left=ne,m.right=ae),s.value=B;let A=x.scrollTop;g===u.document&&!A&&(A=u.document.body.scrollTop),w.top=A<c.value,w.bottom=A>c.value;const oe=Math.abs(A)<=(i.top||0),ie=Math.abs(A)+x.clientHeight>=x.scrollHeight-(i.bottom||0)-ve;M==="flex"&&R==="column-reverse"?(m.top=ie,m.bottom=oe):(m.top=oe,m.bottom=ie),c.value=A},re=g=>{var z;if(!u)return;const x=(z=g.target.documentElement)!=null?z:g.target;V(x),k.value=!0,Oe(g),r(g)};return ge(e,"scroll",t?Je(re,t,!0,!1):re,l),we(()=>{try{const g=C(e);if(!g)return;V(g)}catch(g){f(g)}}),ge(e,"scrollend",te,l),{x:v,y:p,isScrolling:k,arrivedState:m,directions:w,measure(){const g=C(e);u&&g&&V(g)}}}function tt(e,n){const t={...e};for(const a of n)delete t[a];return t}function rt(e,n,t){typeof n=="string"&&(n=n.split(".").map(o=>{const r=Number(o);return isNaN(r)?o:r}));let a=e;for(const o of n){if(a==null)return t;a=a[o]}return a!==void 0?a:t}const ee={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},nt=e=>Object.keys(ee).reduce((t,a)=>(e[a]!==void 0&&(t[a]=e[a]),t),{}),at=W({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const n=pe();return{dynamic:b(()=>{var a,o;return e.dynamic||((o=(a=n.ui)==null?void 0:a.icons)==null?void 0:o.dynamic)})}}});function ot(e,n,t,a,o,r){const i=Ee;return e.dynamic?(h(),P(i,{key:0,name:e.name},null,8,["name"])):(h(),j("span",{key:1,class:I(e.name)},null,2))}const Ce=U(at,[["render",ot]]),it=W({inheritAttrs:!1,props:{...ee,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(t,a,{isActive:o,isExactActive:r}){return e.exactQuery&&!Me(t.query,a.query)||e.exactHash&&t.hash!==a.hash?e.inactiveClass:e.exact&&r||!e.exact&&o?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),lt=["href","aria-disabled","role","rel","target","onClick"];function st(e,n,t,a,o,r){const i=Re;return e.to?(h(),P(i,T({key:1},e.$props,{custom:""}),{default:F(({route:l,href:d,target:u,rel:f,navigate:s,isActive:c,isExactActive:v,isExternal:p})=>[G("a",T(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:f,target:u,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(l,e._.provides[qe]||e.$route,{isActive:c,isExactActive:v}),onClick:y=>!p&&!e.disabled&&s(y)}),[O(e.$slots,"default",se(ue({isActive:e.active!==void 0?e.active:e.exact?v:c})))],16,lt)]),_:3},16)):(h(),P(Te(e.as),T({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:F(()=>[O(e.$slots,"default",se(ue({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Se=U(it,[["render",st]]),Be=(e,n,t,a,o=!1)=>{const r=Ne(),i=pe(),l=b(()=>{var c;const u=_(n),f=_(t),s=_(a);return Z((u==null?void 0:u.strategy)||((c=i.ui)==null?void 0:c.strategy),s?{wrapper:s}:{},u||{},o?rt(i.ui,e,{}):{},f||{})}),d=b(()=>tt(r,["class"]));return{ui:l,attrs:d}};function ut({ui:e,props:n}){const t=Y();if(De("ButtonGroupContextConsumer",!0),ce("ButtonGroupContextConsumer",!1))return{size:b(()=>n.size),rounded:b(()=>e.value.rounded)};let o=t.parent,r;for(;o&&!r;){if(o.type.name==="ButtonGroup"){r=ce(`group-${o.uid}`);break}o=o.parent}const i=b(()=>r==null?void 0:r.value.children.indexOf(t));return D(()=>{r==null||r.value.register(t)}),ye(()=>{r==null||r.value.unregister(t)}),{size:b(()=>(r==null?void 0:r.value.size)||n.size),rounded:b(()=>!r||i.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:i.value===0?r.value.rounded.start:i.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const ct={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},$e={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},dt={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},be={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...$e,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...be,option:{...be.option},arrow:{...$e}});const $=Z(N.ui.strategy,N.ui.button,ct),ft=W({components:{UIcon:Ce,ULink:Se},inheritAttrs:!1,props:{...ee,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>$.default.size,validator(e){return Object.keys($.size).includes(e)}},color:{type:String,default:()=>$.default.color,validator(e){return[...N.ui.colors,...Object.keys($.color)].includes(e)}},variant:{type:String,default:()=>$.default.variant,validator(e){return[...Object.keys($.variant),...Object.values($.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>$.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:t,attrs:a}=Be("button",J(e,"ui"),$),{size:o,rounded:r}=ut({ui:t,props:e}),i=b(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),l=b(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=b(()=>e.square||!n.default&&!e.label),u=b(()=>{var k,m;const y=((m=(k=t.value.color)==null?void 0:k[e.color])==null?void 0:m[e.variant])||t.value.variant[e.variant];return me(X(t.value.base,t.value.font,r.value,t.value.size[o.value],t.value.gap[o.value],e.padded&&t.value[d.value?"square":"padding"][o.value],y==null?void 0:y.replaceAll("{color}",e.color),e.block?t.value.block:t.value.inline),e.class)}),f=b(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),s=b(()=>e.loading&&!i.value?e.loadingIcon:e.trailingIcon||e.icon),c=b(()=>X(t.value.icon.base,t.value.icon.size[o.value],e.loading&&t.value.icon.loading)),v=b(()=>X(t.value.icon.base,t.value.icon.size[o.value],e.loading&&!i.value&&t.value.icon.loading)),p=b(()=>nt(e));return{ui:t,attrs:a,isLeading:i,isTrailing:l,isSquare:d,buttonClass:u,leadingIconName:f,trailingIconName:s,leadingIconClass:c,trailingIconClass:v,linkProps:p}}});function gt(e,n,t,a,o,r){const i=Ce,l=Se;return h(),P(l,T({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:F(()=>[O(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(h(),P(i,{key:0,name:e.leadingIconName,class:I(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):E("",!0)]),O(e.$slots,"default",{},()=>[e.label?(h(),j("span",{key:0,class:I([e.truncate?e.ui.truncate:""])},We(e.label),3)):E("",!0)]),O(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(h(),P(i,{key:0,name:e.trailingIconName,class:I(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):E("",!0)])]),_:3},16,["type","disabled","class"])}const Ie=U(ft,[["render",gt]]),vt=e=>{const n=S(0);function t(r){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=r.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)}function a(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)}function o(r){r.preventDefault();const i=r.pageX-n.value;n.value=r.pageX,e.value.scrollBy(-i,0)}D(()=>{e.value&&e.value.addEventListener("mousedown",t)}),ye(()=>{e.value&&e.value.removeEventListener("mousedown",t)})},Q=Z(N.ui.strategy,N.ui.carousel,dt),bt=W({components:{UButton:Ie},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>Q.default.prevButton},nextButton:{type:Object,default:()=>Q.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:t,attrs:a}=Be("carousel",J(e,"ui"),Q,J(e,"class")),o=S(),r=S(0),{x:i}=et(o,{behavior:"smooth"}),{width:l}=Ze(o);vt(o),xe(o,y=>{var m,w;const[k]=y;r.value=((w=(m=k==null?void 0:k.target)==null?void 0:m.firstElementChild)==null?void 0:w.clientWidth)||0});const d=b(()=>r.value?Math.round(i.value/r.value)+1:0),u=b(()=>r.value?e.items.length-Math.round(l.value/r.value)+1:0),f=b(()=>d.value<=1),s=b(()=>d.value===u.value);function c(){i.value+=r.value}function v(){i.value-=r.value}function p(y){i.value=(y-1)*r.value}return n({pages:u,page:d,prev:v,next:c,select:p}),{ui:t,attrs:a,isFirst:f,isLast:s,carouselRef:o,pages:u,currentPage:d,onClickNext:c,onClickPrev:v,onClick:p,twMerge:me}}}),pt=["role"],yt=["aria-selected","aria-label","onClick"];function mt(e,n,t,a,o,r){const i=Ie;return h(),j("div",T({class:e.ui.wrapper},e.attrs),[G("div",{ref:"carouselRef",class:I([e.ui.container,"no-scrollbar"])},[(h(!0),j(de,null,fe(e.items,(l,d)=>(h(),j("div",{key:d,class:I(e.ui.item),role:e.indicators?"tabpanel":null},[O(e.$slots,"default",{item:l,index:d},void 0,!0)],10,pt))),128))],2),e.arrows?(h(),j("div",{key:0,class:I(e.ui.arrows.wrapper)},[O(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var l;return[e.prevButton?(h(),P(i,T({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(l=e.prevButton)==null?void 0:l.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):E("",!0)]},!0),O(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var l;return[e.nextButton?(h(),P(i,T({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(l=e.nextButton)==null?void 0:l.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):E("",!0)]},!0)],2)):E("",!0),e.indicators?(h(),j("div",{key:1,role:"tablist",class:I(e.ui.indicators.wrapper)},[(h(!0),j(de,null,fe(e.pages,l=>O(e.$slots,"indicator",{key:l,onClick:e.onClick,active:l===e.currentPage,page:l},()=>[G("button",{type:"button",role:"tab","aria-selected":l===e.currentPage,class:I([e.ui.indicators.base,l===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${l}`,onClick:d=>e.onClick(l)},null,10,yt)],!0)),128))],2)):E("",!0)],16)}const ht=U(bt,[["render",mt],["__scopeId","data-v-cd490bd1"]]),kt=["src"],xt=W({__name:"swiper",setup(e){const n=["https://picsum.photos/1920/1080?random=1","https://picsum.photos/1920/1080?random=2","https://picsum.photos/1920/1080?random=3","https://picsum.photos/1920/1080?random=4","https://picsum.photos/1920/1080?random=5","https://picsum.photos/1920/1080?random=6"],t=S();return D(()=>{Fe(()=>{if(t.value){if(t.value.page===t.value.pages)return t.value.select(0);t.value.next()}},3e3)}),(a,o)=>{const r=ht;return h(),P(r,{ref_key:"carouselRef",ref:t,items:n,ui:{item:"basis-full"},class:"rounded-lg overflow-hidden",indicators:""},{default:F(({item:i})=>[G("img",{src:i,class:"w-full",draggable:"false"},null,8,kt)]),_:1},512)}}});export{xt as default};
