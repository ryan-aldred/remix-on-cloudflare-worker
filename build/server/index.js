var g=Object.defineProperty;var x=(e,n,a)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a;var u=(e,n,a)=>x(e,typeof n!="symbol"?n+"":n,a);import{jsx as t,jsxs as s}from"react/jsx-runtime";import{RemixServer as y,NavLink as h,Outlet as m,Meta as b,Links as v,ScrollRestoration as S,Scripts as _,useLoaderData as k,Link as j,Form as w,useActionData as A}from"@remix-run/react";import{isbot as R}from"isbot";import{renderToReadableStream as L}from"react-dom/server";import{redirect as N}from"@remix-run/server-runtime";const f=5e3;async function T(e,n,a,o,l){const r=new AbortController,d=setTimeout(()=>r.abort(),f),i=await L(t(y,{context:o,url:e.url,abortDelay:f}),{signal:r.signal,onError(c){r.signal.aborted||console.error(c),n=500}});return i.allReady.then(()=>clearTimeout(d)),R(e.headers.get("user-agent")||"")&&await i.allReady,a.set("Content-Type","text/html"),new Response(i,{headers:a,status:n})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));function B(){return t("header",{className:"px-20 py-10 shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)]",children:s("div",{className:"flex justify-between",children:[t(h,{to:"/",className:"text-3xl hover:text-pink-500",children:"Ryan Aldred"}),t("nav",{children:t("ul",{className:"flex gap-3",children:I.map(({to:e,name:n})=>t("li",{children:t(h,{to:e,className:({isActive:a})=>`hover:text-pink-500 ${a?"text-pink-300":""}`,children:n})},e))})})]})})}const I=[{name:"1) What",to:"/about"},{name:"2) Something I built",to:"/tokens"}],C=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function O({children:e}){return s("html",{lang:"en",children:[s("head",{children:[t("meta",{charSet:"utf-8"}),t("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t(b,{}),t(v,{})]}),s("body",{children:[t(B,{}),e,t(S,{}),t(_,{})]})]})}function G(){return t(m,{})}const P=Object.freeze(Object.defineProperty({__proto__:null,Layout:O,default:G,links:C},Symbol.toStringTag,{value:"Module"}));class p{static async chartData({token:n,type:a,fromTime:o,toTime:l},r){const d=`chart/${n}`,i=o?this.timeInSeconds(o).toString():void 0,c=l?this.timeInSeconds(l).toString():void 0;return(await this.fetchData(r,d,{type:a,time_from:i,time_to:c})).oclhv}static async fetchData(n,a,o){if(!n)throw new Error("SOLANA_TRACKER_API_KEY is missing");const l=new URL(this.baseUrl);l.pathname=a,o&&Object.entries(o).map(([d,i])=>i&&l.searchParams.append(d,i));const r=await fetch(l.toString(),{headers:{"x-api-key":n}});if(!r.ok)throw new Error("Solana Tracker Request failed",{cause:{status:r.status,msg:r.statusText}});return await r.json()}static timeInSeconds(n){return Math.floor(n.getTime()/1e3)}}u(p,"baseUrl","https://data.solanatracker.io");const z=async({params:e,context:n})=>{if(!e.id)throw new Error("no params.id");return{chartData:await p.chartData({token:e.id,type:"1h",fromTime:new Date(Date.now()-1e3*60*60*24)},n.cloudflare.env.SOLANA_TRACKER_API_KEY)}};function M(){const e=k();return s("div",{children:["Tokens",t("div",{children:e==null?void 0:e.chartData[0].high})]})}const E=Object.freeze(Object.defineProperty({__proto__:null,default:M,loader:z},Symbol.toStringTag,{value:"Module"})),W=()=>[{title:"Ryan Aldred"},{name:"description",content:"Welcome to Ryan Aldred's Remix blog running on Cloudflare Workers!"}];function $(){const e=new Date(Date.now()).getHours(),n=F(e);return s("div",{className:"flex flex-col h-screen items-center justify-center",children:[s("div",{className:"flex",children:[t("h1",{className:"leading text-7xl font-bold text-pink-500",children:n.msg}),t("div",{className:"h-[144px] w-[434px]"})]}),s("div",{className:"flex flex-col items-start",children:[t("h2",{className:"text-sky-400 text-4xl",children:"1) What"}),t("span",{children:"Learn more about Ryan and this webiste"}),t("button",{children:t(j,{to:"/about",children:"Learn more"})})]})]})}function F(e){return e>17||e<4?{msg:"Good evening",url:""}:e>=4&&e<12?{msg:"Good morning",url:""}:{msg:"Good afternoon",url:""}}const Q=Object.freeze(Object.defineProperty({__proto__:null,default:$,meta:W},Symbol.toStringTag,{value:"Module"}));function Y({fields:e,fieldErrors:n}){return s(w,{action:"/tokens",method:"post",children:[s("div",{children:[s("label",{children:["SPL",t("input",{name:"spl",defaultValue:e==null?void 0:e.spl,type:"text",placeholder:"Enter an SPL token address","aria-invalid":!!(n!=null&&n.spl),"aria-errormessage":n!=null&&n.spl?"spl-error":""})]}),(n==null?void 0:n.spl)&&t("p",{id:"spl-error",role:"alert",children:n.spl})]}),t("button",{type:"submit",children:"Search"})]})}async function K({request:e,context:n}){const o=(await e.formData()).get("spl");return console.log(o,o.length,o.length<4),o.length<1||typeof o!="string"?{success:!1,fieldErrors:{spl:"Invalid SPL"},fields:{spl:o},formError:null,data:null}:N(`/tokens/${o}`)}function U(){const e=A();return t("div",{className:"flex items-center",children:s("div",{className:"container",children:[s("div",{children:[t("h1",{className:"text-pink-500 text-5xl",children:"Enter an SPL token address"}),t(Y,{fields:e==null?void 0:e.fields,fieldErrors:e==null?void 0:e.fieldErrors})]}),t("div",{children:t(m,{})})]})})}const q=Object.freeze(Object.defineProperty({__proto__:null,action:K,default:U},Symbol.toStringTag,{value:"Module"}));function H(){return s("div",{className:"flex flex-col items-center",children:[s("div",{className:"py-20 flex flex-col",children:[t("h2",{className:"text-pink-500",children:"1) What"}),t("span",{children:"Ryan built this website using Remix, a full stack version of React and deployed it to a Cloudflare worker"}),t("span",{children:"Since it gets so little traffic, it's running on the free tier"}),t("span",{children:"That's right"}),t("span",{children:"You're looking at a fullstack React app, running on a globably distrutributed system with sub second page loads"}),t("span",{children:"That's running for free"}),t("h3",{className:"text-xl",children:"You can expect Ryan to employ this kind of ingenuity in everything he does"})]}),s("div",{className:"flex flex-col",children:[t("h2",{className:"text-3xl text-pink-500",children:"Ryan's specialty"}),s("ul",{children:[t("li",{children:"Typescript"}),t("li",{children:"React"})]})]})]})}const V=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),ae={entry:{module:"/assets/entry.client-COo3PeSn.js",imports:["/assets/jsx-runtime-56DGgGmo.js","/assets/components-BSelQfzB.js"],css:[]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1,module:"/assets/root-BtlCf1rT.js",imports:["/assets/jsx-runtime-56DGgGmo.js","/assets/components-BSelQfzB.js"],css:["/assets/root-CT5tWN7E.css"]},"routes/tokens.$id":{id:"routes/tokens.$id",parentId:"routes/tokens",path:":id",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1,module:"/assets/route-B1hmvIMl.js",imports:["/assets/jsx-runtime-56DGgGmo.js","/assets/components-BSelQfzB.js"],css:[]},"routes/_index":{id:"routes/_index",parentId:"root",path:void 0,index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1,module:"/assets/_index-BAFMkEeG.js",imports:["/assets/jsx-runtime-56DGgGmo.js","/assets/components-BSelQfzB.js"],css:[]},"routes/tokens":{id:"routes/tokens",parentId:"root",path:"tokens",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1,module:"/assets/route-AjF5uD4E.js",imports:["/assets/jsx-runtime-56DGgGmo.js","/assets/components-BSelQfzB.js"],css:[]},"routes/about":{id:"routes/about",parentId:"root",path:"about",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1,module:"/assets/route-BsOtWf25.js",imports:["/assets/jsx-runtime-56DGgGmo.js"],css:[]}},url:"/assets/manifest-5c79a8a5.js",version:"5c79a8a5"},oe="production",re="build/client",ie="/",le={v3_fetcherPersist:!0,v3_relativeSplatPath:!0,v3_throwAbortReason:!0,v3_singleFetch:!0,v3_lazyRouteDiscovery:!0,unstable_optimizeDeps:!1,unstable_routeConfig:!1},de=!1,ce="/",ue={module:D},he={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:P},"routes/tokens.$id":{id:"routes/tokens.$id",parentId:"routes/tokens",path:":id",index:void 0,caseSensitive:void 0,module:E},"routes/_index":{id:"routes/_index",parentId:"root",path:void 0,index:!0,caseSensitive:void 0,module:Q},"routes/tokens":{id:"routes/tokens",parentId:"root",path:"tokens",index:void 0,caseSensitive:void 0,module:q},"routes/about":{id:"routes/about",parentId:"root",path:"about",index:void 0,caseSensitive:void 0,module:V}};export{ae as assets,re as assetsBuildDirectory,ie as basename,ue as entry,le as future,de as isSpaMode,oe as mode,ce as publicPath,he as routes};
