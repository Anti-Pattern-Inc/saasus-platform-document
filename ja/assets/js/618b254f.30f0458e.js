"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[4067],{46389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),a=n(28453);const i={title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},s=void 0,o={id:"reference/getting-started-with-your-api",title:"Getting Started",description:"SaaSus API\u3092\u547c\u3076\u306b\u306f\u3001\u7f72\u540d \u304c\u5fc5\u8981\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.6/reference/getting-started-with-your-api.md",sourceDirName:"reference",slug:"/reference/getting-started-with-your-api",permalink:"/saasus-platform-document/ja/docs/reference/getting-started-with-your-api",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"apiDocSidebar",next:{title:"Auth API",permalink:"/saasus-platform-document/ja/docs/reference/auth-api"}},c={},d=[];function u(e){const t={a:"a",br:"br",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"SaaSus API\u3092\u547c\u3076\u306b\u306f\u3001\u7f72\u540d \u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["Authorization Header:",(0,r.jsx)(t.br,{}),"\n","SAASUSSIGV1 Sig=\u7f72\u540d, SaaSID=SaaS ID, APIKey=API Key"]}),"\n",(0,r.jsxs)(t.p,{children:["\u7f72\u540d=\u65e5\u6642\u60c5\u5831+API Key+HTTP\u30e1\u30bd\u30c3\u30c9+URL(Host",":Port","/URI)+Request Body",(0,r.jsx)(t.br,{}),"\n","\u65e5\u6642\u60c5\u5831\uff1a YYYYMMDDHHNN (UTC\u3067\u5206\u307e\u3067\u306e\u60c5\u5831)",(0,r.jsx)(t.br,{}),"\n","\u4e0a\u8a18\u60c5\u5831\u3092 Secret Key \u3067 HMAC-SHA256 \u3092\u6c42\u3081\u3066\u305d\u308c\u3092\u7f72\u540d\u3068\u3059\u308b"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5168\u3066\u306eAPI\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f\u3001 X-Saasus-Trace-Id \u30d8\u30c3\u30c0\u304c\u4ed8\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u5229\u7528\u3057\u3066Amazon EventBridge\u9023\u643a\u6642\u306bAPI\u306e\u30c8\u30ec\u30fc\u30b9\u304c\u53ef\u80fd\u306b\u306a\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,r.jsx)(t.br,{}),"\n","X-Saasus-Trace-Id \u30d8\u30c3\u30c0\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u6307\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e Trace ID \u3092\u5f15\u304d\u7d99\u304e\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["API",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"./auth-api",children:"SaaSus Auth API Schema"}),(0,r.jsx)(t.br,{}),"\n","\u30e6\u30fc\u30b6\u60c5\u5831\u3001\u57fa\u672c\u60c5\u5831\u3001\u8a8d\u8a3c\u60c5\u5831\u3001\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u3001\u5f79\u5272(\u30ed\u30fc\u30eb)\u60c5\u5831\u306a\u3069\u306b\u95a2\u3059\u308bAPI",(0,r.jsx)(t.br,{}),"\n","(APIs related to user information, basic information, authentication information, tenant information, role information, etc.)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"./billing-api",children:"SaaSus Billing API Schema"}),(0,r.jsx)(t.br,{}),"\n","\u8acb\u6c42\u696d\u52d9\u3067\u4f7f\u3046\u5916\u90e8SaaS\u3068\u306e\u9023\u643a\u60c5\u5831\u306e\u53d6\u5f97\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u306b\u95a2\u3059\u308bAPI",(0,r.jsx)(t.br,{}),"\n","(API for acquiring, updating, and deleting information linked with external SaaS used in billing operations)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"./pricing-api",children:"SaaSus Pricing API Schema"}),(0,r.jsx)(t.br,{}),"\n","\u30d7\u30e9\u30a4\u30b7\u30f3\u30b0\u30e6\u30cb\u30c3\u30c8\u3001\u6a5f\u80fd\u30e1\u30cb\u30e5\u30fc\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u3001\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0\u30e6\u30cb\u30c3\u30c8\u30ab\u30a6\u30f3\u30c8\u306a\u3069\u6599\u91d1\u306b\u95a2\u9023\u3059\u308bAPI",(0,r.jsx)(t.br,{}),"\n","(Pricing-related APIs such as pricing units, feature menus, rate plans, metering unit counts, etc.)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"./integration",children:"SaaSus Integration API Schema"}),(0,r.jsx)(t.br,{}),"\n","Amazon EventBridge \u9023\u643a\u306b\u95a2\u9023\u3059\u308bAPI",(0,r.jsx)(t.br,{}),"\n","(APIs related to Amazon EventBridge integration)"]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);