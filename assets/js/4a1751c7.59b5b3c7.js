"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7158],{83421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),a=n(28453);const r={title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},s=void 0,o={id:"reference/getting-started-with-your-api",title:"Getting Started",description:"A signature is necessary to call the SaaSus API.",source:"@site/versioned_docs/version-1.8/reference/getting-started-with-your-api.md",sourceDirName:"reference",slug:"/reference/getting-started-with-your-api",permalink:"/docs/reference/getting-started-with-your-api",draft:!1,unlisted:!1,tags:[],version:"1.8",frontMatter:{title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"apiDocSidebar",next:{title:"Auth API",permalink:"/docs/reference/auth-api"}},d={},c=[];function u(e){const t={a:"a",br:"br",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A signature is necessary to call the SaaSus API."}),"\n",(0,i.jsxs)(t.p,{children:["Authorization Header:",(0,i.jsx)(t.br,{}),"\n","SAASUSSIGV1 Sig=Signature, SaaSID=SaaS ID, APIKey=API Key"]}),"\n",(0,i.jsxs)(t.p,{children:["Signature = date and time information + API Key + HTTP method + URL (Host: Port/URI) + Request Body",(0,i.jsx)(t.br,{}),"\n","Date and time information: YYYYMMDDHHNN (minute information in UTC)",(0,i.jsx)(t.br,{}),"\n","Obtain HMAC-SHA256 with the above information as a secret key and use it as a signature"]}),"\n",(0,i.jsxs)(t.p,{children:["All API responses have an \u201cX-Saasus-Trace-Id\u201d header. This is used to enable API tracing during Amazon EventBridge integration.",(0,i.jsx)(t.br,{}),"\n","\u201cX-Saasus-Trace-Id\u201d header can also be specified at request time. If specified at request time, the Trace-Id is inherited."]}),"\n",(0,i.jsxs)(t.p,{children:["API",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"./auth-api",children:"SaaSus Auth API Schema"}),(0,i.jsx)(t.br,{}),"\n","APIs related to user information, basic information, authentication information, tenant information, role information, etc."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"./billing-api",children:"SaaSus Billing API Schema"}),(0,i.jsx)(t.br,{}),"\n","APIs pertaining to obtaining, updating, and deleting information related to external SaaS used in billing operations."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"./pricing-api",children:"SaaSus Pricing API Schema"}),(0,i.jsx)(t.br,{}),"\n","APIs related to pricing units, feature menus, pricing plans, metering unit count, etc."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"./integration",children:"SaaSus Integration API Schema"}),(0,i.jsx)(t.br,{}),"\n","APIs related to Amazon EventBridge integration."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);