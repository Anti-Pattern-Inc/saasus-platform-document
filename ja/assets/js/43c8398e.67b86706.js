"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5068],{58028:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var s=n(74848),t=n(28453),r=n(11470),l=n(19365);const u={title:"SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3064\u3044\u3066",slug:"about-saas-user-accounts",excerpt:"",hidden:!1,createdAt:"Tue Aug 15 2023 16:10:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:51 GMT+0000 (Coordinated Universal Time)"},i=void 0,c={id:"usecase/about-saas-user-accounts",title:"SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3064\u3044\u3066",description:"SaaSus Platform\u306b\u304a\u3051\u308b\u3001SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6271\u3044\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.6/usecase/about-saas-user-accounts.mdx",sourceDirName:"usecase",slug:"/usecase/about-saas-user-accounts",permalink:"/saasus-platform-document/ja/docs/usecase/about-saas-user-accounts",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{title:"SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3064\u3044\u3066",slug:"about-saas-user-accounts",excerpt:"",hidden:!1,createdAt:"Tue Aug 15 2023 16:10:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0API\u3092\u5229\u7528\u3057\u305f\u5b9f\u88c5\u4f8b",permalink:"/saasus-platform-document/ja/docs/implementation-guide/example_implementation_using_metering_api"},next:{title:"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210",permalink:"/saasus-platform-document/ja/docs/usecase/about-saas-user-accounts/create-tenant"}},o={},d=[{value:"\uff11\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20",id:"\uff11\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20",level:2},{value:"\uff12\uff0e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",id:"\uff12\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",level:2},{value:"\uff13\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066",id:"\uff13\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066",level:2},{value:"\uff13\uff0e\uff11\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",id:"\uff13\uff11\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",level:3},{value:"\uff13\uff0e\uff11\uff0e\uff11\uff0e\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059",id:"\uff13\uff11\uff11\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059",level:4},{value:"\uff13\uff0e\uff11\uff0e\uff12\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",id:"\uff13\uff11\uff12\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",level:4},{value:"\uff13\uff0e\uff11\uff0e\uff13\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",id:"\uff13\uff11\uff13\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",level:4},{value:"\uff13\uff0e\uff12\uff0eSaaS\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",id:"\uff13\uff12saas\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",level:3},{value:"\uff13\uff0e\uff13\uff0eSaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",id:"\uff13\uff13saas\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",level:3}];function h(e){const a={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"SaaSus Platform\u306b\u304a\u3051\u308b\u3001SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6271\u3044\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.h2,{id:"\uff11\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20",children:"\uff11\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20"}),"\n",(0,s.jsx)(a.p,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u4ee5\u4e0b\u306e\u8981\u7d20\u3067\u69cb\u6210\u3055\u308c\u3066\u304a\u308a\u3001\u5168\u3066\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["SaaS\u30e6\u30fc\u30b6\u30fc",(0,s.jsx)(a.br,{}),"\n","SaaS\u306b\u5bfe\u3059\u308b\u8a8d\u8a3c\u60c5\u5831\uff08ID\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\uff09\u3092\u4fdd\u6301"]}),"\n",(0,s.jsxs)(a.li,{children:["\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc",(0,s.jsx)(a.br,{}),"\n","SaaS\u30e6\u30fc\u30b6\u30fc\u304c\u3069\u306e\u30c6\u30ca\u30f3\u30c8\u306b\u6240\u5c5e\u3059\u308b\u304b\u3092\u4fdd\u6301"]}),"\n",(0,s.jsxs)(a.li,{children:["\u5f79\u5272\uff08\u30ed\u30fc\u30eb\uff09",(0,s.jsx)(a.br,{}),"\n","\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u3069\u306e\u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3092\u4fdd\u6301"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"\uff12\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",children:"\uff12\uff0e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(a.p,{children:["SaaS\u30e6\u30fc\u30b6\u30fc\u306f\u8907\u6570\u306e\u30c6\u30ca\u30f3\u30c8\u306b\u6240\u5c5e\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002",(0,s.jsx)(a.br,{}),"\n","\u307e\u305f\u3001\u30c6\u30ca\u30f3\u30c8\u306e\u4e2d\u3067\u8907\u6570\u306e\u5f79\u5272\u3092\u6301\u3064\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u4f8b\uff09",(0,s.jsx)(a.br,{}),"\n","\u30e6\u30fc\u30b6\u30fcA\u306f\u30c6\u30ca\u30f3\u30c8A\u306b\u6240\u5c5e\u3057\u3066\u304a\u308a\u3001\u7ba1\u7406\u8005\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b\u3002",(0,s.jsx)(a.br,{}),"\n","\u30e6\u30fc\u30b6\u30fcA\u306f\u30c6\u30ca\u30f3\u30c8B\u306b\u3082\u6240\u5c5e\u3057\u3066\u304a\u308a\u3001\u7ba1\u7406\u8005\u3068\u4e00\u822c\u30e6\u30fc\u30b6\u30fc\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b\u3002",(0,s.jsx)(a.br,{}),"\n","\u56f3\u3067\u8868\u73fe\u3059\u308b\u3068\u4ee5\u4e0b\u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"relation",src:n(70693).A+""})}),"\n",(0,s.jsx)(a.h2,{id:"\uff13\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066",children:"\uff13\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9",(0,s.jsx)(a.br,{}),"\n","\u4f8b\uff09",(0,s.jsx)(a.br,{}),"\n","SaaS\u3092\u5229\u7528\u3057\u305f\u3044\u3068\u601d\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u304c\u3001\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u753b\u9762\u304b\u3089\u81ea\u5206\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002",(0,s.jsx)(a.br,{}),"\n","\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u6642\u306b\u30c6\u30ca\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30c6\u30ca\u30f3\u30c8\u306e\u7ba1\u7406\u8005\u3068\u306a\u308b\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:["SaaS\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9",(0,s.jsx)(a.br,{}),"\n","\u4f8b\uff09",(0,s.jsx)(a.br,{}),"\n","\u30c6\u30ca\u30f3\u30c8\u306e\u7ba1\u7406\u8005\u304c\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u3092\u5229\u7528\u3057\u3001\u5f79\u5272\u3010\u7ba1\u7406\u8005\u3001\u4e00\u822c\u30e6\u30fc\u30b6\u30fc\u3011\u3092\u4f5c\u6210\u3059\u308b\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:["SaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9",(0,s.jsx)(a.br,{}),"\n","\u4f8b\uff09",(0,s.jsx)(a.br,{}),"\n","\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u7533\u8acb\u3092\u53d7\u3051\u3066\u3001SaaS\u7ba1\u7406\u8005\u304cSaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3002",(0,s.jsx)(a.br,{}),"\n","\u30e1\u30fc\u30eb\u3084EventBridge\u9023\u643a\u306a\u3069\u3067\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u901a\u77e5\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u3092\u958b\u59cb\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"\uff13\uff11\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",children:"\uff13\uff0e\uff11\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"}),"\n",(0,s.jsx)(a.h4,{id:"\uff13\uff11\uff11\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059",children:"\uff13\uff0e\uff11\uff0e\uff11\uff0e\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059"}),"\n",(0,s.jsxs)(a.p,{children:["SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb - \u8a8d\u8a3c\u8a73\u7d30\u8a2d\u5b9a - \u8a8d\u8a3c\u8a2d\u5b9a\u30bf\u30d6 - \u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\uff08\u30e6\u30fc\u30b6\u30fc\u81ea\u8eab\u306b\u3088\u308b\u65b0\u898f\u767b\u9332\uff09\u306e\u53ef\u5426",(0,s.jsx)(a.br,{}),"\n","\u30e6\u30fc\u30b6\u30fc\u304c\u81ea\u5206\u3067\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u53ef\u80fd\u306b\u3092\u6709\u52b9\u306b\u3057\u307e\u3059"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"self-sign-up-setting",src:n(75355).A+"",width:"1916",height:"794"})}),"\n",(0,s.jsx)(a.p,{children:"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3059\u308b\u3068\u3001SaaSus Platform\u304c\u751f\u6210\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u300c\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"self-sign-up",src:n(63608).A+"",width:"582",height:"470"})}),"\n",(0,s.jsxs)(a.p,{children:["\u3053\u306e\u30ea\u30f3\u30af\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3092\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002",(0,s.jsx)(a.br,{}),"\n","\u3053\u3053\u3067\u4f5c\u6210\u3055\u308c\u308b\u306e\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20\u306b\u304a\u3051\u308b\u3001SaaS\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.h4,{id:"\uff13\uff11\uff12\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",children:"\uff13\uff0e\uff11\uff0e\uff12\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b"}),"\n",(0,s.jsxs)(a.p,{children:["\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u3067\u304a\u5ba2\u69d8\u306eSaaS\u306b\u9077\u79fb\u3057\u307e\u3059\u3002",(0,s.jsx)(a.br,{}),"\n","\u203b\u9077\u79fb\u5148\u306e\u753b\u9762",(0,s.jsx)(a.br,{}),"\n","SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb - \u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148 - Callback URL"]}),"\n",(0,s.jsxs)(a.p,{children:["\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001Callback URL\u3067\u4ee5\u4e0b\u306e\u5224\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.jsx)(a.br,{}),"\n","\u3053\u306e\u5224\u65ad\u306b\u306f$request->userinfo\u3067\u53d6\u5f97\u3067\u304d\u308b\u914d\u5217\u306btenants\u60c5\u5831\u304c\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(l.A,{value:"php",label:"PHP",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-php",children:"        // \u30c6\u30ca\u30f3\u30c8\u767b\u9332\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u51e6\u7406\u3092\u5b9f\u65bd\n        if (empty($request->userinfo['tenants']))\n"})})})}),"\n",(0,s.jsx)(a.h4,{id:"\uff13\uff11\uff13\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",children:"\uff13\uff0e\uff11\uff0e\uff13\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)("a",{href:"/docs/usecase/about-saas-user-accounts/create-tenant",target:"blank",children:"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210"}),"\u3092\u53c2\u8003\u306b\u3001\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u767b\u9332\u3067\u304d\u308b\u3088\u3046\u4fee\u6b63\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u767b\u9332\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3089\u3001",(0,s.jsx)("a",{href:"/docs/usecase/about-saas-user-accounts/add-tenant-user",target:"_blank",children:"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a"}),"\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210\u3068\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e\u4f5c\u6210\u304c\u3067\u304d\u305f\u3089\u3001$request->userinfo['tenants']\u306b\u8a2d\u5b9a\u3057\u305f\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u51fa\u529b\u3055\u308c\u308b\u304b\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(l.A,{value:"php",label:"PHP",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-php",children:"dd($request->userinfo['tenants']);\n"})})})}),"\n",(0,s.jsx)(a.p,{children:"\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u3001\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3089\u3001\u901a\u5e38\u306e\u30ed\u30b0\u30a4\u30f3\u30d5\u30ed\u30fc\u3067\u30ed\u30b0\u30a4\u30f3\u304c\u3067\u304d\u308b\u304b\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(a.h3,{id:"\uff13\uff12saas\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",children:"\uff13\uff0e\uff12\uff0eSaaS\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"}),"\n",(0,s.jsx)(a.p,{children:"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u305f\u7ba1\u7406\u8005\u304c\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u307e\u305a\u306fSaaS\u306b\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(l.A,{value:"php",label:"PHP",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-php",children:"        $client = new ApiClient();\n        $authApiClient = $client->getAuthClient();       \n\n        $createSaasUserParam = new CreateSaasUserParam();\n        $createSaasUserParam\n            ->setEmail($inputs['email'])\n            ->setPassword($inputs['password']);\n\n        $authApiClient->createSaasUser($createSaasUserParam);\n"})})})}),"\n",(0,s.jsxs)(a.p,{children:["SaaS\u306b\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u3067\u304d\u305f\u3089\u3001\u767b\u9332\u8005\u306e$request->userinfo['tenants']\u304b\u3089\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001",(0,s.jsx)("a",{href:"/docs/usecase/about-saas-user-accounts/add-tenant-user",target:"_blank",children:"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a"}),"\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(a.h3,{id:"\uff13\uff13saas\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",children:"\uff13\uff0e\uff13\uff0eSaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"}),"\n",(0,s.jsx)(a.p,{children:"\u6e96\u5099\u4e2d"})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>A});var s=n(96540),t=n(34164),r=n(23104),l=n(56347),u=n(205),i=n(57485),c=n(31682),o=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:n}=e;const t=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[c,d]=b({queryString:n,groupId:t}),[m,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,o.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),f=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:a,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),o=e=>{const a=e.currentTarget,n=i.indexOf(a),t=u[n].value;t!==s&&(c(a),l(t))},d=e=>{let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:u.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>i.push(e),onKeyDown:d,onClick:o,...r,className:(0,t.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function S(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function g(e){const a=m(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...a}),(0,j.jsx)(S,{...e,...a})]})}function A(e){const a=(0,x.A)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(a))}},70693:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/relation-07a734de409f0f244a0b9e6bb2e3f80d.svg"},75355:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/self-sign-up-setting-51d4d7221f469476b56874f6a7c70ee0.png"},63608:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/self-sign-up-68a808a5fac7365278b9ec45c464506d.png"},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>u});var s=n(96540);const t={},r=s.createContext(t);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function u(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);