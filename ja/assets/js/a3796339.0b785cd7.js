"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[9303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},o=void 0,p={unversionedId:"reference/getting-started-with-your-api",id:"reference/getting-started-with-your-api",title:"Getting Started",description:"SaaSus API\u3092\u547c\u3076\u306b\u306f\u3001\u7f72\u540d \u304c\u5fc5\u8981\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reference/getting-started-with-your-api.md",sourceDirName:"reference",slug:"/reference/getting-started-with-your-api",permalink:"/ja/docs/next/reference/getting-started-with-your-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"apiDocSidebar",next:{title:"Auth API",permalink:"/ja/docs/next/reference/auth-api"}},u={},c=[],l={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SaaSus API\u3092\u547c\u3076\u306b\u306f\u3001\u7f72\u540d \u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)("p",null,"Authorization Header:",(0,a.kt)("br",{parentName:"p"}),"\n","SAASUSSIGV1 Sig=\u7f72\u540d, SaaSID=SaaS ID, APIKey=API Key "),(0,a.kt)("p",null,"\u7f72\u540d=\u65e5\u6642\u60c5\u5831+API Key+HTTP\u30e1\u30bd\u30c3\u30c9+URL(Host:Port/URI)+Request Body",(0,a.kt)("br",{parentName:"p"}),"\n","\u65e5\u6642\u60c5\u5831\uff1a YYYYMMDDHHNN (UTC\u3067\u5206\u307e\u3067\u306e\u60c5\u5831)",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e0a\u8a18\u60c5\u5831\u3092 Secret Key \u3067 HMAC-SHA256 \u3092\u6c42\u3081\u3066\u305d\u308c\u3092\u7f72\u540d\u3068\u3059\u308b"),(0,a.kt)("p",null,"\u5168\u3066\u306eAPI\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f\u3001 X-Saasus-Trace-Id \u30d8\u30c3\u30c0\u304c\u4ed8\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u5229\u7528\u3057\u3066Amazon EventBridge\u9023\u643a\u6642\u306bAPI\u306e\u30c8\u30ec\u30fc\u30b9\u304c\u53ef\u80fd\u306b\u306a\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","X-Saasus-Trace-Id \u30d8\u30c3\u30c0\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u6307\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e Trace ID \u3092\u5f15\u304d\u7d99\u304e\u307e\u3059\u3002"),(0,a.kt)("p",null,"API",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"./auth-api"},"SaaSus Auth API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b6\u60c5\u5831\u3001\u57fa\u672c\u60c5\u5831\u3001\u8a8d\u8a3c\u60c5\u5831\u3001\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u3001\u5f79\u5272(\u30ed\u30fc\u30eb)\u60c5\u5831\u306a\u3069\u306b\u95a2\u3059\u308bAPI",(0,a.kt)("br",{parentName:"p"}),"\n","(APIs related to user information, basic information, authentication information, tenant information, role information, etc.)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./billing-api"},"SaaSus Billing API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","\u8acb\u6c42\u696d\u52d9\u3067\u4f7f\u3046\u5916\u90e8SaaS\u3068\u306e\u9023\u643a\u60c5\u5831\u306e\u53d6\u5f97\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u306b\u95a2\u3059\u308bAPI",(0,a.kt)("br",{parentName:"p"}),"\n","(API for acquiring, updating, and deleting information linked with external SaaS used in billing operations)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./pricing-api"},"SaaSus Pricing API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","\u30d7\u30e9\u30a4\u30b7\u30f3\u30b0\u30e6\u30cb\u30c3\u30c8\u3001\u6a5f\u80fd\u30e1\u30cb\u30e5\u30fc\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u3001\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0\u30e6\u30cb\u30c3\u30c8\u30ab\u30a6\u30f3\u30c8\u306a\u3069\u6599\u91d1\u306b\u95a2\u9023\u3059\u308bAPI",(0,a.kt)("br",{parentName:"p"}),"\n","(Pricing-related APIs such as pricing units, feature menus, rate plans, metering unit counts, etc.)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./integration"},"SaaSus Integration API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","Amazon EventBridge \u9023\u643a\u306b\u95a2\u9023\u3059\u308bAPI",(0,a.kt)("br",{parentName:"p"}),"\n","(APIs related to Amazon EventBridge integration)"))}d.isMDXComponent=!0}}]);