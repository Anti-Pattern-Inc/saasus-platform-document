"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5200],{3905:(a,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>d});var l=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,l)}return e}function p(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function n(a,t){if(null==a)return{};var e,l,r=function(a,t){if(null==a)return{};var e,l,r={},s=Object.keys(a);for(l=0;l<s.length;l++)e=s[l],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(l=0;l<s.length;l++)e=s[l],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var u=l.createContext({}),i=function(a){var t=l.useContext(u),e=t;return a&&(e="function"==typeof a?a(t):p(p({},t),a)),e},o=function(a){var t=i(a.components);return l.createElement(u.Provider,{value:t},a.children)},c="mdxType",m={inlineCode:"code",wrapper:function(a){var t=a.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(a,t){var e=a.components,r=a.mdxType,s=a.originalType,u=a.parentName,o=n(a,["components","mdxType","originalType","parentName"]),c=i(e),k=r,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||s;return e?l.createElement(d,p(p({ref:t},o),{},{components:e})):l.createElement(d,p({ref:t},o))}));function d(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var s=e.length,p=new Array(s);p[0]=k;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=a,n[c]="string"==typeof a?a:r,p[1]=n;for(var i=2;i<s;i++)p[i]=e[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,e)}k.displayName="MDXCreateElement"},96998:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>i});var l=e(87462),r=(e(67294),e(3905));const s={sidebar_position:2,title:"SaaSus Platform\u306e\u6e96\u5099",slug:"prepare-saas-platform",excerpt:"",hidden:!1,createdAt:"Wed Jan 11 2023 03:12:50 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},p=void 0,n={unversionedId:"tutorial/prepare-saasus-platform",id:"tutorial/prepare-saasus-platform",title:"SaaSus Platform\u306e\u6e96\u5099",description:"\u203b\u5168\u4f53\u306e\u6d41\u308c\u3092\u52d5\u753b\u3067\u3054\u89a7\u306b\u306a\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorial/prepare-saasus-platform.md",sourceDirName:"tutorial",slug:"/tutorial/prepare-saas-platform",permalink:"/ja/docs/next/tutorial/prepare-saas-platform",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"SaaSus Platform\u306e\u6e96\u5099",slug:"prepare-saas-platform",excerpt:"",hidden:!1,createdAt:"Wed Jan 11 2023 03:12:50 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",permalink:"/ja/docs/next/tutorial/prepare-the-sample-application"},next:{title:"SaaS \u904b\u7528\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u5229\u7528\u3057\u305f SaaS \u306e\u7ba1\u7406",permalink:"/ja/docs/next/tutorial/saas-management-using-the-saas-operation-console"}},u={},i=[{value:"SaaSus Platform \u306e\u6e96\u5099",id:"saasus-platform-\u306e\u6e96\u5099",level:2},{value:"SaaSus Platform \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210",id:"saasus-platform-\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210",level:3},{value:"\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u30ed\u30b0\u30a4\u30f3",id:"\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u30ed\u30b0\u30a4\u30f3",level:3},{value:"\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u8a2d\u5b9a",id:"\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u8a2d\u5b9a",level:3},{value:"\u8a8d\u8a3c\u5f8c\u306e\u9077\u79fb\u5148 URL \u306e\u8a2d\u5b9a",id:"\u8a8d\u8a3c\u5f8c\u306e\u9077\u79fb\u5148-url-\u306e\u8a2d\u5b9a",level:3},{value:"SaaS ID, API \u30ad\u30fc\u306e\u78ba\u8a8d",id:"saas-id-api-\u30ad\u30fc\u306e\u78ba\u8a8d",level:3},{value:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306a\u3069\u8a8d\u8a3c\u7cfb\u753b\u9762\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306a\u3069\u8a8d\u8a3c\u7cfb\u753b\u9762\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:3},{value:"\u30e6\u30fc\u30b6\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b",id:"\u30e6\u30fc\u30b6\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b",level:3},{value:"\u30c6\u30ca\u30f3\u30c8\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b",id:"\u30c6\u30ca\u30f3\u30c8\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b",level:3},{value:"\u5f79\u5272\u306e\u5b9a\u7fa9",id:"\u5f79\u5272\u306e\u5b9a\u7fa9",level:3}],o={toc:i},c="wrapper";function m(a){let{components:t,...s}=a;return(0,r.kt)(c,(0,l.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u203b\u5168\u4f53\u306e\u6d41\u308c\u3092\u52d5\u753b\u3067\u3054\u89a7\u306b\u306a\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=deSkPJ-zTgw"},"https://www.youtube.com/watch?v=deSkPJ-zTgw")),(0,r.kt)("h2",{id:"saasus-platform-\u306e\u6e96\u5099"},"SaaSus Platform \u306e\u6e96\u5099"),(0,r.kt)("h3",{id:"saasus-platform-\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210"},"SaaSus Platform \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210"),(0,r.kt)("p",null,"\u307e\u305a\u306f SaaSus Platform \u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u65b0\u898f\u767b\u9332\u753b\u9762\u3092\u8868\u793a\u3057\u3001\u3054\u81ea\u8eab\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u7528\u3044\u3066\u65b0\u898f\u767b\u9332\u3092\u884c\u3044\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://auth.saasus.io/sign-up"},"https://auth.saasus.io/sign-up")),(0,r.kt)("p",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u5e0c\u671b\u3059\u308b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3001\u5229\u7528\u898f\u7d04\u3068\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3092\u8aad\u3093\u3067\u3044\u305f\u3060\u304d\u540c\u610f\u3057\u3066\u3044\u305f\u3060\u3051\u308b\u5834\u5408\u306f\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3001\u65b0\u898f\u767b\u9332\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01",src:e(9884).Z,width:"689",height:"710"})),(0,r.kt)("p",null,"\u5165\u529b\u3057\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u691c\u8a3c\u30b3\u30fc\u30c9\u304c\u5c4a\u304f\u306e\u3067\u3001\u305d\u308c\u3092\u5165\u529b\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6709\u52b9\u5316\u3057\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"02",src:e(85034).Z,width:"689",height:"710"})),(0,r.kt)("p",null,"\u691c\u8a3c\u304c\u5b8c\u4e86\u3059\u308b\u3068\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059"),(0,r.kt)("p",null,"\u5148\u307b\u3069\u767b\u9332\u3057\u3066\u3044\u305f\u3060\u3044\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u308c\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"03",src:e(7995).Z,width:"689",height:"710"})),(0,r.kt)("p",null,"\u306f\u3058\u3081\u3066 SaaSus Platform \u306b\u767b\u9332\u3057\u305f\u6642\u306b\u306f\u3001\u767b\u9332\u3057\u3066\u3044\u305f\u3060\u3044\u305f\u65b9\u5c02\u7528\u306e\u30c6\u30ca\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u304a\u5ba2\u69d8\u5c02\u7528\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u6700\u77ed\u3067\uff11\u6642\u9593\u307b\u3069\u304a\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u304c\u5b8c\u4e86\u6b21\u7b2c\u3001\u5148\u307b\u3069\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3054\u6848\u5185\u304c\u5c4a\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"04",src:e(63348).Z,width:"1003",height:"395"})),(0,r.kt)("h3",{id:"\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u30ed\u30b0\u30a4\u30f3"},"\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u30ed\u30b0\u30a4\u30f3"),(0,r.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u305f\u306e\u3061\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u3092\u884c\u3046\u3068\u3001\u3053\u306e\u3088\u3046\u306b\u30e6\u30fc\u30b6\u5c5e\u6027\u306e\u5165\u529b\u304c\u6c42\u3081\u3089\u308c\u307e\u3059\u306e\u3067\u3001\u4f1a\u793e\u540d\u3001\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"05",src:e(87308).Z,width:"792",height:"651"})),(0,r.kt)("p",null,"\u5165\u529b\u5f8c\u30c6\u30ca\u30f3\u30c8\u306e\u5404\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u9077\u79fb\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"06",src:e(72741).Z,width:"1003",height:"395"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306f\u3001SaaS \u69cb\u7bc9\u306e\u305f\u3081\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u3001"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SaaS \u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306f\u3001SaaS \u3092\u904b\u7528\u3057\u3066\u3044\u304f\u305f\u3081\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8a73\u7d30\u306f\u5f8c\u307b\u3069\u8aac\u660e\u3057\u307e\u3059\u304c\u3001\u307e\u305a\u306f SaaS \u4f5c\u6210\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u305f\u3044\u306e\u3067\u3001",(0,r.kt)("strong",{parentName:"p"},"SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u8a2d\u5b9a"},"\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u203b\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u304a\u6301\u3061\u3067\u7121\u3044\u65b9\u306f\u3001\u3053\u306e\u9805\u76ee\u306f\u30b9\u30ad\u30c3\u30d7\u3057\u3066",(0,r.kt)("a",{parentName:"p",href:"#%E8%AA%8D%E8%A8%BC%E5%BE%8C%E3%81%AE%E9%81%B7%E7%A7%BB%E5%85%88-url-%E3%81%AE%E8%A8%AD%E5%AE%9A"},"\u6b21\u306b\u884c\u3063\u3066\u3044\u305f\u3060\u3044\u3066\u5927\u4e08\u592b\u3067\u3059\u3002")),(0,r.kt)("p",null,"SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u307e\u305a\u306f SaaS \u3067\u4f7f\u3046\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u767b\u9332\u3057\u307e\u3059\u3002\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u30c9\u30e1\u30a4\u30f3\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c9\u30e1\u30a4\u30f3\u767b\u9332\u753b\u9762\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u30c9\u30e1\u30a4\u30f3\u540d\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3084\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u30d9\u30fc\u30b9\u30c9\u30e1\u30a4\u30f3\u3068\u3057\u3066\u5229\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u3042\u3068 DNS \u30ec\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3066\u3044\u305f\u3060\u304f\u306e\u3067\u3001",(0,r.kt)("strong",{parentName:"p"},"\u3054\u81ea\u8eab\u3067\u64cd\u4f5c\u53ef\u80fd\u306a\u30c9\u30e1\u30a4\u30f3\u540d"),"\u3092\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"07",src:e(63773).Z,width:"1445",height:"818"})),(0,r.kt)("p",null,"\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u767b\u9332\u3057\u3066\u3044\u305f\u3060\u304f\u3068\u3001\u6570\u79d2\u5f8c\u753b\u9762\u4e0b\u90e8\u306b DNS \u691c\u8a3c\uff08\u78ba\u304b\u306b\u305d\u306e\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u6240\u6709\u3057\u3066\u3044\u308b\u3068\u3044\u3046\u3053\u3068\u306e\u78ba\u8a8d\uff09\u3092\u884c\u3046\u305f\u3081\u306b\u3001CNAME \u30ec\u30b3\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u3061\u3089\u306e\u5024\u3092\u3054\u81ea\u8eab\u306e DNS \u306b\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"08",src:e(96655).Z,width:"1445",height:"818"})),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001Value Domain \u306b\u3066\u30c9\u30e1\u30a4\u30f3\u3092\u7ba1\u7406\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"09",src:e(75734).Z,width:"1380",height:"914"})),(0,r.kt)("p",null,"\u3054\u81ea\u8eab\u306e DNS \u306b\u767b\u9332\u3057\u3066\u3044\u305f\u3060\u3044\u305f\u5f8c\u306b\u3001\u6570\u5206\u7d4c\u3064\u3068\u691c\u8a3c\u304c\u5b8c\u4e86\u3057\u3001\u300c\u4ee5\u4e0b\u306e DNS \u60c5\u5831\u304c\u691c\u8a3c\u3055\u308c\u3001\u6b63\u5e38\u306b\u52d5\u4f5c\u4e2d\u3067\u3059\u3002\u300d\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3067 SaaSus Platform \u306e\u8a2d\u5b9a\u3092\u3059\u308b\u305f\u3081\u306e\u524d\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"10",src:e(54554).Z,width:"1445",height:"818"})),(0,r.kt)("p",null,"\u3053\u306e\u30c9\u30e1\u30a4\u30f3\u3092\u30d9\u30fc\u30b9\u306b\u3001SaaSus Platform \u304c\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u81ea\u52d5\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u8a8d\u8a3c\u5f8c\u306e\u9077\u79fb\u5148-url-\u306e\u8a2d\u5b9a"},"\u8a8d\u8a3c\u5f8c\u306e\u9077\u79fb\u5148 URL \u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u3044\u307e\u8a2d\u5b9a\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u30d9\u30fc\u30b9\u306b SaaSus Platform \u306f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u7d4c\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u306e\u3061\u306b\u3001SaaS \u5074\u306b\u8a8d\u8a3c\u60c5\u5831\u3092\u5f15\u304d\u7d99\u304e\u307e\u3059\u3002\u3053\u306e\u5f15\u304d\u7d99\u304e\u5148\u306e SaaS \u306e URL \u3092 Callback URL \u3068\u3057\u3066\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Callback URL \u8a2d\u5b9a\u753b\u9762\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u306f SaaS \u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b URL \u3092\u30d9\u30fc\u30b9\u306b Callback URL \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u4eca\u56de\u306f\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u52d5\u304b\u3057\u3066\u307f\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://localhost/callback"},"http://localhost/callback")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"11",src:e(18056).Z,width:"1445",height:"729"})),(0,r.kt)("h3",{id:"saas-id-api-\u30ad\u30fc\u306e\u78ba\u8a8d"},"SaaS ID, API \u30ad\u30fc\u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u6b21\u306b\u3001SaaS \u5b9f\u88c5\u6642\u306b\u5229\u7528\u3059\u308b\u3001\u300cSaaS ID\u300d\u3068\u300cAPI \u30ad\u30fc\u300d\u3092\u78ba\u8a8d\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u300cSaaS ID\u300d\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u767a\u884c\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u307e\u307e\u5229\u7528\u3057\u3066\u3082\u826f\u3044\u3067\u3059\u3057\u3001\u300cSaaS ID \u306e\u518d\u767a\u884c\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u518d\u767a\u884c\u3057\u3066\u4f7f\u3063\u3066\u3044\u305f\u3060\u304f\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u300cAPI \u30ad\u30fc\u300d\u306f\u521d\u671f\u3067\u306f\u767a\u884c\u3055\u308c\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u300cAPI \u30ad\u30fc\u306e\u767a\u884c\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\uff11\u3064\u767a\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u203b\u5b9f\u969b\u306b SaaS \u904b\u7528\u304c\u59cb\u307e\u3063\u305f\u3042\u3068\u306b\u3001\u300cSaaS ID \u306e\u518d\u767a\u884c\u300d\u3092\u884c\u3063\u305f\u5834\u5408\u306f\u3001SaaS \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5074\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u308b SaaS ID \u3082\u4fee\u6b63\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u60c5\u5831\u306f\u3001\u3042\u3068\u304b\u3089\u3082\u3053\u306e\u753b\u9762\u3067\u78ba\u8a8d\u53ef\u80fd\u3067\u3059\u306e\u3067\u3001\u3044\u307e\u899a\u3048\u3066\u3044\u305f\u3060\u304b\u306a\u304f\u3066\u3082\u5927\u4e08\u592b\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","(\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u3001API \u30ad\u30fc\u306f\u3042\u3068\u304b\u3089\u78ba\u8a8d\u3067\u304d\u306a\u304f\u306a\u308b\u4e88\u5b9a\u3067\u3059)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"12",src:e(38306).Z,width:"1445",height:"795"})),(0,r.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306a\u3069\u8a8d\u8a3c\u7cfb\u753b\u9762\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306a\u3069\u8a8d\u8a3c\u7cfb\u753b\u9762\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u5148\u307b\u3069\u751f\u6210\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u985e\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u8a8d\u8a3c\u8a73\u7d30\u8a2d\u5b9a\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"13",src:e(55407).Z,width:"1445",height:"813"})),(0,r.kt)("p",null,"\u57fa\u672c\u60c5\u5831\u3067\u306f\u3001\u8a8d\u8a3c\u7cfb\u753b\u9762\u3067\u5229\u7528\u3055\u308c\u308b\u5404\u7a2e\u60c5\u5831\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u5148\u307b\u3069\u306e\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3067\u3044\u3046\u3068\u3001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300cSaaSus Platform \u3078\u3088\u3046\u3053\u305d\u300d\u306e\u90e8\u5206\u304c",(0,r.kt)("strong",{parentName:"li"},"\u30b5\u30fc\u30d3\u30b9\u540d")),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u90e8\u306e\u30a2\u30a4\u30b3\u30f3\u304c",(0,r.kt)("strong",{parentName:"li"},"\u30a2\u30a4\u30b3\u30f3\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9")),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u898f\u7d04 URL\u3001\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc URL \u304c",(0,r.kt)("strong",{parentName:"li"},"\u5229\u7528\u898f\u7d04\u3001\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306e\u30ea\u30f3\u30af\u5148"),(0,r.kt)("br",{parentName:"li"}),"\u3068\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"14",src:e(78889).Z,width:"581",height:"655"})),(0,r.kt)("p",null,"\u5909\u66f4\u3092\u9069\u7528\u3059\u308b\u305f\u3081\u306b\u300c\u4fdd\u5b58\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059"),(0,r.kt)("p",null,"\u300c\u753b\u9762\u8a2d\u5b9a\u300d\u30bf\u30d6\u3067\u306f\u3001\u65b0\u898f\u767b\u9332\u753b\u9762\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u753b\u9762\u306e\u5404\u753b\u9762\u306b\u3001\u5229\u7528\u898f\u7d04\u3068\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3092\u8868\u793a\u3059\u308b\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u300c\u8a8d\u8a3c\u8a2d\u5b9a\u300d\u30bf\u30d6\u3067\u306f\u3001\u5404\u7a2e\u8a73\u7d30\u306a\u8a8d\u8a3c\u8a2d\u5b9a\u304c\u884c\u306a\u3048\u307e\u3059"),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u5148\u307b\u3069\u8a2d\u5b9a\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u540d\u306b \u201cauth.\u201d \u3092\u3064\u3051\u305f URL \u306b\u3066\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u5b9f\u969b\u306b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u8868\u793a\u3067\u304d\u308b\u304b\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046"),(0,r.kt)("p",null,"\u203b\u5909\u66f4\u3092\u4fdd\u5b58\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u751f\u6210\u306b\u306f\u6570\u5206\u304b\u304b\u308a\u307e\u3059\u306e\u3067\u3001\u6700\u5f8c\u306b\u4fdd\u5b58\u3057\u305f\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u306f\u6570\u5206\u5f8c\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306f\u3001\u3055\u304d\u307b\u3069\u8a2d\u5b9a\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u982d\u306b \u201cauth.\u201d \u3092\u3064\u3051\u305f URL \u3067\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u30c9\u30e1\u30a4\u30f3\u540d\u3092 \u201csample.saasus.jp\u201d \u3067\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001 ",(0,r.kt)("a",{parentName:"p",href:"https://auth.sample.saasus.jp/"},"https://auth.sample.saasus.jp/"),"\u306b\u3066\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u78ba\u8a8d\u3067\u304d\u305f\u3089\u3001SaaSus \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u623b\u308a\u307e\u3057\u3087\u3046"),(0,r.kt)("h3",{id:"\u30e6\u30fc\u30b6\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b"},"\u30e6\u30fc\u30b6\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u30e6\u30fc\u30b6\u5c5e\u6027\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u30e6\u30fc\u30b6\u5c5e\u6027\u5b9a\u7fa9\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"15",src:e(11566).Z,width:"1445",height:"813"})),(0,r.kt)("p",null,"SaaSus Platform \u4e0a\u3067\u306f\u3001\u521d\u671f\u72b6\u614b\u3067\u306f\u7ba1\u7406\u3059\u308b SaaS \u306e\u30e6\u30fc\u30b6\u306f\u30e6\u30fc\u30b6 ID(UUID)\u3068\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3057\u304b\u6301\u3063\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u308c\u3067\u8db3\u308a\u306a\u3044\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u306b\u8ffd\u52a0\u306e\u5c5e\u6027\u3092\u6301\u305f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"SaaS \u8a2d\u8a08\u8005\u306f\u3001\u30e6\u30fc\u30b6\u306b\u95a2\u3059\u308b\u3069\u306e\u5c5e\u6027\u3092 SaaSus Platform \u5074\u3067\u3082\u3061\u3001\u3069\u306e\u5c5e\u6027\u3092 SaaS \u5074\u3067\u6301\u3064\u304b\u306e\u5206\u62c5\u3092\u8003\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u60c5\u5831\u3092 SaaSus Platform \u5074\u3067\u7ba1\u7406\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u5fc5\u8981\u306a\u8ffd\u52a0\u5c5e\u6027\u3092 SaaSus Platform \u306b\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u500b\u4eba\u60c5\u5831\u306a\u3069\u306e\u91cd\u8981\u306a\u60c5\u5831\u306f SaaSus Platform \u5074\u3067\u7ba1\u7406\u3057\u305f\u304f\u306a\u304b\u3063\u305f\u308a\u3001\u30e6\u30fc\u30b6\u306e\u8ffd\u52a0\u5c5e\u6027\u3092\u3082\u3068\u306b\u5404\u7a2e\u96c6\u8a08\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306b\u306f\u3001SaaSus Platform \u5074\u306b\u306f\u8a8d\u8a3c\u3060\u3051\u3092\u6c42\u3081\u3001\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u7ba1\u7406\u306f SaaS \u5074\u3067\u30e6\u30fc\u30b6\u30de\u30b9\u30bf\u3092\u30d9\u30fc\u30b9\u306b\u884c\u3044\u3001UUID \u3092 SaaSus Platform \u5074\u306e\u8a8d\u8a3c\u60c5\u5831\u3068\u7d10\u4ed8\u3051\u308b\u65b9\u304c\u67d4\u8edf\u306b\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30e6\u30fc\u30b6\u540d\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u3067\u3001\u300c\u30e6\u30fc\u30b6\u30fc\u540d\u300d\u3068\u3044\u3046\u5c5e\u6027\u3092\u5b9a\u7fa9\u3057\u3066\u307f\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u300c\uff0b\u30e6\u30fc\u30b6\u5c5e\u6027\u306e\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u5c5e\u6027\u4f5c\u6210\u306e\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059"),(0,r.kt)("p",null,"\u5c5e\u6027\u540d\u306f\u3001SaaS \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3(\u30d7\u30ed\u30b0\u30e9\u30e0)\u5074\u3067\u8b58\u5225\u3059\u308b\u305f\u3081\u306e\u30ad\u30fc\u3068\u3057\u3066\u4f7f\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u82f1\u5b57\u3067\u5165\u529b\u3057\u3066\u304a\u304f\u306e\u304c\u7121\u96e3\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u8868\u793a\u540d\u306f\u3001\u305d\u306e\u5c5e\u6027\u304c\u3069\u3046\u3044\u3046\u3082\u306e\u304b\uff1f\u3092\u308f\u304b\u308b\u3088\u3046\u306b\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bf\u30a4\u30d7\u306f\u3001\u30c7\u30fc\u30bf\u578b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u3067\u8a2d\u5b9a\u3057\u307e\u3059"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u540d\uff1a username"),(0,r.kt)("li",{parentName:"ul"},"\u8868\u793a\u540d\uff1a \u30e6\u30fc\u30b6\u30fc\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1a \u6587\u5b57\u5217")),(0,r.kt)("p",null,"\u5165\u529b\u3057\u305f\u3089\u3001\u300c\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"16",src:e(21726).Z,width:"610",height:"523"})),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"17",src:e(54433).Z,width:"1435",height:"817"})),(0,r.kt)("h3",{id:"\u30c6\u30ca\u30f3\u30c8\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b"},"\u30c6\u30ca\u30f3\u30c8\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b"),(0,r.kt)("p",null,"\u6b21\u306b\u300c\u30c6\u30ca\u30f3\u30c8\u5c5e\u6027\u5b9a\u7fa9\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30c6\u30ca\u30f3\u30c8\u306e\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u8a00\u3046\u30c6\u30ca\u30f3\u30c8\u3068\u306f\u3001\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8 SaaS \u306b\u304a\u3051\u308b\u30c6\u30ca\u30f3\u30c8\u306e\u610f\u5473\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001SaaS \u5229\u7528\u8005\u306e\u7d44\u7e54\u306e\u5358\u4f4d\uff08\u5951\u7d04\u306e\u5358\u4f4d\uff09\u3092\u30c6\u30ca\u30f3\u30c8\u3068\u547c\u3073\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5404\u30c6\u30ca\u30f3\u30c8\u3067\u5fc5\u8981\u306b\u306a\u308a\u305d\u3046\u306a\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u306e\u6642\u3068\u540c\u3058\u3088\u3046\u306b\u3001\u300c\uff0b\u30c6\u30ca\u30f3\u30c8\u5c5e\u6027\u306e\u4f5c\u6210\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u3001\u305d\u306e\u30c6\u30ca\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u30e1\u30e2\u3092\u66f8\u3051\u308b\u3088\u3046\u306b\u3057\u3066\u307f\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u540d\uff1a memo"),(0,r.kt)("li",{parentName:"ul"},"\u8868\u793a\u540d\uff1a \u30e1\u30e2"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1a \u6587\u5b57\u5217")),(0,r.kt)("p",null,"\u5165\u529b\u3057\u305f\u3089\u3001\u300c\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"18",src:e(98448).Z,width:"1300",height:"1138"})),(0,r.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u5c5e\u6027\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"19",src:e(9701).Z,width:"1435",height:"817"})),(0,r.kt)("h3",{id:"\u5f79\u5272\u306e\u5b9a\u7fa9"},"\u5f79\u5272\u306e\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u5f79\u5272\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u5f79\u5272\u306f\u3001\u5404\u7a2e SaaS \u306b\u304a\u3051\u308b\u5f79\u5272\uff08\u30ed\u30fc\u30eb\uff09\u306b\u306a\u308a\u3001\u8a8d\u53ef\u306e\u30d9\u30fc\u30b9\u3068\u3057\u3066\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u30c6\u30ca\u30f3\u30c8\u3054\u3068\u306e\u7ba1\u7406\u8005\u6a29\u9650\u3092\u6301\u3064\u5834\u5408\u306b\u306f\u3001admin \u306e\u3088\u3046\u306a\u5f79\u5272\u3092\u5b9a\u7fa9\u3057\u3001\u4e00\u822c\u5229\u7528\u8005\u306e\u5834\u5408\u306f user \u306e\u3088\u3046\u306a\u5f79\u5272\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306b\u3001admin, user \u3092\u5b9a\u7fa9\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u300c\uff0b\u5f79\u5272\u306e\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u5f79\u5272\u306e\u4f5c\u6210\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5f79\u5272\u540d\u306f\u3001SaaS \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5074\u3067\u5f79\u5272\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8868\u793a\u540d\u306f\u3001\u305d\u306e\u5f79\u5272\u304c\u3069\u3046\u3044\u3046\u3082\u306e\u304b\uff1f\u3092\u308f\u304b\u308b\u3088\u3046\u306b\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u306f\u4e00\u822c\u5229\u7528\u8005\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f79\u5272\u540d: user"),(0,r.kt)("li",{parentName:"ul"},"\u8868\u793a\u540d: \u4e00\u822c\u5229\u7528\u8005")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"21",src:e(99513).Z,width:"1535",height:"935"})),(0,r.kt)("p",null,"\u3053\u308c\u3067\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8 SaaS \u3092\u4f5c\u308b\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u3001\u6b21\u306b",(0,r.kt)("strong",{parentName:"p"},"SaaS \u904b\u7528\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306b\u5207\u308a\u66ff\u3048\u3066\u3001SaaS \u306e\u30c6\u30ca\u30f3\u30c8\u3084\u30e6\u30fc\u30b6\u4f5c\u6210\u3092\u884c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\uff01"))}m.isMDXComponent=!0},9884:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-01-dcfae891b00da11811e3b4db49435f07.png"},85034:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-02-eb94911598ceb56aef1224537d66b528.png"},7995:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-03-e96b55e50e5e367d24ecb017041113f0.png"},63348:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-04-4d9ced5ff03ef7b917bdea356b73eff7.png"},87308:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-05-963f2ca0d8ff43a3855ebde5f31c4086.png"},72741:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-06-50586eb0b115cbd1a033af8e07eb3d32.png"},63773:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-07-995458274fcd5765db7e0a013d5209ed.png"},96655:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-08-3a4fa8ea33a74bf52ded4f9d9fe44f43.png"},75734:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-09-9244ac3072975565db4b868677f92f71.png"},54554:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-10-ab5011f6f772cf16214817f92bad9c2d.png"},18056:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-11-c35c93de440739b53692cd58aa101805.png"},38306:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-12-64dda4cbc1f8e25c61e1e8fb02432088.png"},55407:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-13-a5898a08abcdcc95ae23ea4bd69fa637.png"},78889:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-14-8fa12c7ecb79d6a87959ebce32826f92.png"},11566:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-15-36edf0d384705a3f6d426c70188b2416.png"},21726:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-16-353cfe7ef92cc3e995a3649a1f9a95d9.png"},54433:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-17-3cf9760b7a298e606dd0a12533fc6e11.png"},98448:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-18-4562ac10279b4b9f38c542c358b4b316.png"},9701:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-19-a955c815faa5e226dc70b060d0bf0f95.png"},99513:(a,t,e)=>{e.d(t,{Z:()=>l});const l=e.p+"assets/images/prepare-saasus-platform-21-dc96604084c56c741789d121f4ebab38.png"}}]);