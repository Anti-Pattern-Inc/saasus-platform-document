"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[8960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(a),d=p,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:p,l[1]=o;for(var i=2;i<n;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var r=a(87462),p=(a(67294),a(3905));const n={sidebar_position:1,title:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",slug:"prepare-the-sample-application",excerpt:"\u30b7\u30f3\u30d7\u30eb\u306aWeb\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092SaaS\u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046",hidden:!1,createdAt:"Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,o={unversionedId:"tutorial/prepare-the-sample-application",id:"tutorial/prepare-the-sample-application",title:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",description:"\u30b7\u30f3\u30d7\u30eb\u306a Web \u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 SaaS \u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorial/prepare-the-sample-application.md",sourceDirName:"tutorial",slug:"/tutorial/prepare-the-sample-application",permalink:"/ja/docs/tutorial/prepare-the-sample-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/prepare-the-sample-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",slug:"prepare-the-sample-application",excerpt:"\u30b7\u30f3\u30d7\u30eb\u306aWeb\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092SaaS\u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046",hidden:!1,createdAt:"Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30d3\u30b8\u30cd\u30b9\u30e6\u30fc\u30b6\u30fc\u5411\u3051\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",permalink:"/ja/docs/tutorials-for-business-users"},next:{title:"SaaSus Platform\u306e\u6e96\u5099",permalink:"/ja/docs/tutorial/prepare-saas-platform"}},s={},i=[{value:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",id:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,p.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u30b7\u30f3\u30d7\u30eb\u306a Web \u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 SaaS \u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046"),(0,p.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3044\u308f\u3086\u308b\u666e\u901a\u306e Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u7c21\u6613\u30c1\u30e3\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u3092\u3001SaaSus Platform \u3092\u5229\u7528\u3057\u3066 SaaS \u5316\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099"},"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099"),(0,p.kt)("p",null,"\u307e\u305a\u3001\u4eca\u56de\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,p.kt)("p",null,"\u3053\u306e\u7c21\u6613\u30c1\u30e3\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f PHP8 + Laravel9 + PostgreSQL13 \u306b\u3066\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,p.kt)("br",{parentName:"p"}),"\n","\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306f Laravel with Blade \u306b\u3066\u4f5c\u6210\u3055\u308c\u305f\u3082\u306e\u3068\u3001 Next.js \u306b\u3066 SPA \u3068\u3057\u3066\u4f5c\u6210\u3055\u308c\u305f\u3082\u306e\u306e\uff12\u7a2e\u985e\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u307e\u305a\u306f\u3001\u3053\u3061\u3089\u3092\u52d5\u4f5c\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/saasus-platform/sampleapp-basic-chat"},"https://github.com/saasus-platform/sampleapp-basic-chat")),(0,p.kt)("p",null,"\u4e0a\u8a18\u30ea\u30dd\u30b8\u30c8\u30ea\u3092 clone \u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3066\u3001",(0,p.kt)("br",{parentName:"p"}),"\n","\u203b PHP \u306e\u5834\u5408",(0,p.kt)("inlineCode",{parentName:"p"},"sampleapp-basic-chat/php/laravel"),"\u914d\u4e0b",(0,p.kt)("br",{parentName:"p"}),"\n","\u203b Next.js \u306e\u5834\u5408",(0,p.kt)("inlineCode",{parentName:"p"},"sampleapp-basic-chat/node/express"),"\u914d\u4e0b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"./init.sh\n")),(0,p.kt)("p",null,"\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u8d77\u52d5\u3057\u305f\u3089\u3001\u4ee5\u4e0b\u306e URL \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,p.kt)("p",null,"Blade \u7248"),(0,p.kt)("p",null,"URL: ",(0,p.kt)("a",{parentName:"p",href:"http://localhost/board"},"http://localhost/board"),(0,p.kt)("br",{parentName:"p"}),"\n","\u8a8d\u8a3c\u7528 Email: ",(0,p.kt)("a",{parentName:"p",href:"mailto:user@example.com"},"user@example.com"),(0,p.kt)("br",{parentName:"p"}),"\n","Password: password"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u30b5\u30f3\u30d7\u30eb",src:a(78888).Z,width:"767",height:"852"})),(0,p.kt)("p",null,"Next.js \u7248"),(0,p.kt)("p",null,"URL: ",(0,p.kt)("a",{parentName:"p",href:"http://localhost:80/login/"},"http://localhost:80/login/"),(0,p.kt)("br",{parentName:"p"}),"\n","\u8a8d\u8a3c\u7528 Email: ",(0,p.kt)("a",{parentName:"p",href:"mailto:user@example.com"},"user@example.com"),(0,p.kt)("br",{parentName:"p"}),"\n","Password: password"),(0,p.kt)("p",null,"\u203b Next.js \u7248\u306f\u3001\u30d3\u30eb\u30c9\u306b\u6570\u5206\u639b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u8868\u793a\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u6570\u5206\u5f85\u3063\u3066\u304b\u3089\u518d\u5ea6\u8868\u793a\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u30b5\u30f3\u30d7\u30eb",src:a(41787).Z,width:"767",height:"852"})),(0,p.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u5f62\u3067\u3001\u30e6\u30fc\u30b6\u304c\u597d\u304d\u306b\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u73fe\u72b6\u3067\u306f\u3001\u30e6\u30fc\u30b6\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b Laravel \u6a19\u6e96\u306e\u8a8d\u8a3c\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u3057\u304b\u3057\u3001Laravel \u6a19\u6e96\u306e\u8a8d\u8a3c\u30e2\u30b8\u30e5\u30fc\u30eb\u306a\u306e\u3067\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u5f37\u529b\u3068\u306f\u8a00\u3044\u3065\u3089\u3044\u3067\u3059\u3002\u305d\u3057\u3066\u3001\u30b7\u30f3\u30d7\u30eb\u306a Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u306e\u3067\u3001\u3082\u3061\u308d\u3093\u30c6\u30ca\u30f3\u30c8\u306e\u6982\u5ff5\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u5f79\u5272(\u30ed\u30fc\u30eb)\u306e\u6982\u5ff5\u3082\u3042\u308a\u307e\u305b\u3093\u3057\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u306a\u3069\u306f\u3082\u3061\u308d\u3093\u3042\u308a\u307e\u305b\u3093\u3002"),(0,p.kt)("p",null,"\u3053\u306e\u72b6\u614b\u306e\u30b7\u30f3\u30d7\u30eb\u306a Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 SaaS \u5316\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\uff01"),(0,p.kt)("p",null,"\u203b\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u958b\u59cb\u6642\u70b9\u3068\u5b8c\u4e86\u6642\u70b9\u3067\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u5dee\u5206\u306f",(0,p.kt)("br",{parentName:"p"}),"\n","PHP",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files"},"https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files")),(0,p.kt)("p",null,"Next.js",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files"},"https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files")),(0,p.kt)("p",null,"\u3053\u3061\u3089\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001\u53c2\u8003\u306b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044"))}m.isMDXComponent=!0},78888:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prepare-the-sample-application-01-59518699438dfe127e7ff304b7c79187.png"},41787:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prepare-the-sample-application-02-b7aeb61c59fcdd7ce9c3f566612831ad.png"}}]);