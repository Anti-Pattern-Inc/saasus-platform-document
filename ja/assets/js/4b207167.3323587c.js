"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[2034],{28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>l});var t=s(96540);const n={},r=t.createContext(n);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:a},e.children)}},59689:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/prepare-the-sample-application-01-59518699438dfe127e7ff304b7c79187.png"},60132:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorial/prepare-the-sample-application","title":"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099","description":"\u30b7\u30f3\u30d7\u30eb\u306a Web \u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 SaaS \u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.11/tutorial/prepare-the-sample-application.md","sourceDirName":"tutorial","slug":"/tutorial/prepare-the-sample-application","permalink":"/ja/docs/tutorial/prepare-the-sample-application","draft":false,"unlisted":false,"tags":[],"version":"1.11","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099","slug":"prepare-the-sample-application","excerpt":"\u30b7\u30f3\u30d7\u30eb\u306aWeb\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092SaaS\u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046","hidden":false,"createdAt":"Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)","updatedAt":"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},"sidebar":"tutorialSidebar","next":{"title":"SaaSus Platform\u306e\u6e96\u5099","permalink":"/ja/docs/tutorial/prepare-saas-platform"}}');var n=s(74848),r=s(28453);const i={sidebar_position:1,title:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",slug:"prepare-the-sample-application",excerpt:"\u30b7\u30f3\u30d7\u30eb\u306aWeb\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092SaaS\u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046",hidden:!1,createdAt:"Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,p={},c=[{value:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",id:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",level:2}];function o(e){const a={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"\u30b7\u30f3\u30d7\u30eb\u306a Web \u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 SaaS \u5316\u3057\u3066\u307f\u307e\u3057\u3087\u3046"}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3044\u308f\u3086\u308b\u666e\u901a\u306e Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u7c21\u6613\u30c1\u30e3\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u3092\u3001SaaSus Platform \u3092\u5229\u7528\u3057\u3066 SaaS \u5316\u3057\u3066\u3044\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.h2,{id:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",children:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099"}),"\n",(0,n.jsx)(a.p,{children:"\u307e\u305a\u3001\u4eca\u56de\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["AWS \u306e EC2 \u3084 Cloud9 \u3092\u5229\u7528\u3057\u3066\u3001Blade \u7248\u306e\u52d5\u4f5c\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001",(0,n.jsx)(a.a,{href:"https://docs.saasus.io/ja/docs/tutorial/prepare-the-sample-application-ec2/",children:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099(EC2)"}),"\u306e\u624b\u9806\u3067\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,n.jsxs)(a.p,{children:["\u3053\u306e\u7c21\u6613\u30c1\u30e3\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f PHP8 + Laravel9 + PostgreSQL13 \u306b\u3066\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,n.jsx)(a.br,{}),"\n","\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306f Laravel with Blade \u306b\u3066\u4f5c\u6210\u3055\u308c\u305f\u3082\u306e\u3068\u3001 Next.js \u306b\u3066 SPA \u3068\u3057\u3066\u4f5c\u6210\u3055\u308c\u305f\u3082\u306e\u306e\uff12\u7a2e\u985e\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\u307e\u305a\u306f\u3001\u3053\u3061\u3089\u3092\u52d5\u4f5c\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://github.com/saasus-platform/sampleapp-basic-chat",children:"https://github.com/saasus-platform/sampleapp-basic-chat"})}),"\n",(0,n.jsxs)(a.p,{children:["\u4e0a\u8a18\u30ea\u30dd\u30b8\u30c8\u30ea\u3092 clone \u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3066\u3001",(0,n.jsx)(a.br,{}),"\n","\u203b PHP \u306e\u5834\u5408",(0,n.jsx)(a.code,{children:"sampleapp-basic-chat/php/laravel"}),"\u914d\u4e0b",(0,n.jsx)(a.br,{}),"\n","\u203b Next.js \u306e\u5834\u5408",(0,n.jsx)(a.code,{children:"sampleapp-basic-chat/node/express"}),"\u914d\u4e0b"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"./init.sh\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u8d77\u52d5\u3057\u305f\u3089\u3001\u4ee5\u4e0b\u306e URL \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(a.p,{children:"Blade \u7248"}),"\n",(0,n.jsxs)(a.p,{children:["URL: ",(0,n.jsx)(a.a,{href:"http://localhost/board",children:"http://localhost/board"}),(0,n.jsx)(a.br,{}),"\n","\u8a8d\u8a3c\u60c5\u5831",(0,n.jsx)(a.br,{}),"\n","\u3000Email: ",(0,n.jsx)(a.a,{href:"mailto:user@example.com",children:"user@example.com"}),(0,n.jsx)(a.br,{}),"\n","\u3000Password: password"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"\u30b5\u30f3\u30d7\u30eb",src:s(59689).A+"",width:"767",height:"852"})}),"\n",(0,n.jsx)(a.p,{children:"Next.js \u7248"}),"\n",(0,n.jsxs)(a.p,{children:["URL: ",(0,n.jsx)(a.a,{href:"http://localhost/login/",children:"http://localhost/login/"}),(0,n.jsx)(a.br,{}),"\n","\u8a8d\u8a3c\u60c5\u5831",(0,n.jsx)(a.br,{}),"\n","\u3000Email: ",(0,n.jsx)(a.a,{href:"mailto:user@example.com",children:"user@example.com"}),(0,n.jsx)(a.br,{}),"\n","\u3000Password: password"]}),"\n",(0,n.jsx)(a.p,{children:"\u203b Next.js \u7248\u306f\u3001\u30d3\u30eb\u30c9\u306b\u6570\u5206\u639b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u8868\u793a\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u6570\u5206\u5f85\u3063\u3066\u304b\u3089\u518d\u5ea6\u8868\u793a\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"\u30b5\u30f3\u30d7\u30eb",src:s(94546).A+"",width:"767",height:"852"})}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u306e\u3088\u3046\u306a\u5f62\u3067\u3001\u30e6\u30fc\u30b6\u304c\u597d\u304d\u306b\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u73fe\u72b6\u3067\u306f\u3001\u30e6\u30fc\u30b6\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b Laravel \u6a19\u6e96\u306e\u8a8d\u8a3c\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u3057\u304b\u3057\u3001Laravel \u6a19\u6e96\u306e\u8a8d\u8a3c\u30e2\u30b8\u30e5\u30fc\u30eb\u306a\u306e\u3067\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u5f37\u529b\u3068\u306f\u8a00\u3044\u3065\u3089\u3044\u3067\u3059\u3002\u305d\u3057\u3066\u3001\u30b7\u30f3\u30d7\u30eb\u306a Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u306e\u3067\u3001\u3082\u3061\u308d\u3093\u30c6\u30ca\u30f3\u30c8\u306e\u6982\u5ff5\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u5f79\u5272(\u30ed\u30fc\u30eb)\u306e\u6982\u5ff5\u3082\u3042\u308a\u307e\u305b\u3093\u3057\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u306a\u3069\u306f\u3082\u3061\u308d\u3093\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u306e\u72b6\u614b\u306e\u30b7\u30f3\u30d7\u30eb\u306a Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 SaaS \u5316\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\uff01"}),"\n",(0,n.jsxs)(a.p,{children:["\u203b\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u958b\u59cb\u6642\u70b9\u3068\u5b8c\u4e86\u6642\u70b9\u3067\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u5dee\u5206\u306f",(0,n.jsx)(a.br,{}),"\n","PHP",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files",children:"https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files"})]}),"\n",(0,n.jsxs)(a.p,{children:["Next.js",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files",children:"https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files"})]}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u3061\u3089\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001\u53c2\u8003\u306b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044"})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},94546:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/prepare-the-sample-application-02-b7aeb61c59fcdd7ce9c3f566612831ad.png"}}]);