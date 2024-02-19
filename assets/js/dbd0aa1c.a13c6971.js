"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},o=void 0,p={unversionedId:"reference/getting-started-with-your-api",id:"version-1.6/reference/getting-started-with-your-api",title:"Getting Started",description:"A signature is necessary to call the SaaSus API.",source:"@site/versioned_docs/version-1.6/reference/getting-started-with-your-api.md",sourceDirName:"reference",slug:"/reference/getting-started-with-your-api",permalink:"/docs/reference/getting-started-with-your-api",draft:!1,tags:[],version:"1.6",frontMatter:{title:"Getting Started",slug:"getting-started-with-your-api",excerpt:"This page will help you get started with SaaSus API.",hidden:!1,createdAt:"Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"apiDocSidebar",next:{title:"Auth API",permalink:"/docs/reference/auth-api"}},s={},u=[],c={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A signature is necessary to call the SaaSus API."),(0,a.kt)("p",null,"Authorization Header:",(0,a.kt)("br",{parentName:"p"}),"\n","SAASUSSIGV1 Sig=Signature, SaaSID=SaaS ID, APIKey=API Key  "),(0,a.kt)("p",null,"Signature = date and time information + API Key + HTTP method + URL (Host: Port/URI) + Request Body",(0,a.kt)("br",{parentName:"p"}),"\n","Date and time information: YYYYMMDDHHNN (minute information in UTC)",(0,a.kt)("br",{parentName:"p"}),"\n","Obtain HMAC-SHA256 with the above information as a secret key and use it as a signature  "),(0,a.kt)("p",null,"All API responses have an \u201cX-Saasus-Trace-Id\u201d header. This is used to enable API tracing during Amazon EventBridge integration.",(0,a.kt)("br",{parentName:"p"}),"\n","\u201cX-Saasus-Trace-Id\u201d header can also be specified at request time. If specified at request time, the Trace-Id is inherited."),(0,a.kt)("p",null,"API",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"./auth-api"},"SaaSus Auth API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","APIs related to user information, basic information, authentication information, tenant information, role information, etc."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./billing-api"},"SaaSus Billing API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","APIs pertaining to obtaining, updating, and deleting information related to external SaaS used in billing operations."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./pricing-api"},"SaaSus Pricing API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","APIs related to pricing units, feature menus, pricing plans, metering unit count, etc."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./integration"},"SaaSus Integration API Schema"),(0,a.kt)("br",{parentName:"p"}),"\n","APIs related to Amazon EventBridge integration."))}d.isMDXComponent=!0}}]);