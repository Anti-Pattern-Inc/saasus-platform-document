"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[6133],{38455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(74848),o=n(28453);const a={title:"\u767b\u9332\u306e\u59cb\u3081\u65b9\u301cProduct Code\u306e\u751f\u6210",slug:"generate-product-code",excerpt:"",hidden:!0,createdAt:"Mon Feb 05 2024 05:00:16 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 06 2024 01:49:55 GMT+0000 (Coordinated Universal Time)"},c=void 0,s={id:"aws-marketplace-integration/product-submission/generate-product-code",title:"\u767b\u9332\u306e\u59cb\u3081\u65b9\u301cProduct Code\u306e\u751f\u6210",description:"SaaS\u88fd\u54c1\u60c5\u5831\u3092\u767b\u9332\u3059\u308b\u306b\u306f\u3001\u307e\u305aAWS Marketplace Management Portal\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u305f\u3060\u304d\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u767b\u9332\u3092\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/aws-marketplace-integration/product-submission/generate-product-code.md",sourceDirName:"aws-marketplace-integration/product-submission",slug:"/aws-marketplace-integration/product-submission/generate-product-code",permalink:"/ja/docs/next/aws-marketplace-integration/product-submission/generate-product-code",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u767b\u9332\u306e\u59cb\u3081\u65b9\u301cProduct Code\u306e\u751f\u6210",slug:"generate-product-code",excerpt:"",hidden:!0,createdAt:"Mon Feb 05 2024 05:00:16 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 06 2024 01:49:55 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"SaaS\u88fd\u54c1\u60c5\u5831\u306e\u767b\u9332",permalink:"/ja/docs/next/aws-marketplace-integration/product-submission"},next:{title:"Step1 : Provide product information",permalink:"/ja/docs/next/aws-marketplace-integration/product-submission/step1-provide-product-information"}},d={},i=[];function p(e){const t={code:"code",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["SaaS\u88fd\u54c1\u60c5\u5831\u3092\u767b\u9332\u3059\u308b\u306b\u306f\u3001\u307e\u305a",(0,r.jsx)("a",{href:"https://aws.amazon.com/marketplace/management/homepage",target:"_blank",children:"AWS Marketplace Management Portal"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u305f\u3060\u304d\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u767b\u9332\u3092\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"AWS Marketplace Management Portal"}),"\u306b\u3066",(0,r.jsx)(t.code,{children:"Product"}),"\u30e1\u30cb\u30e5\u30fc\u304b\u3089",(0,r.jsx)(t.code,{children:"SaaS"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(98255).A+"",width:"1922",height:"1076"})}),"\n",(0,r.jsxs)(t.p,{children:["\u9077\u79fb\u5f8c\u3001\u753b\u9762\u53f3\u5074\u306b\u3042\u308b",(0,r.jsx)(t.code,{children:"Create SaaS product"}),"\u30dc\u30bf\u30f3\u3088\u308a",(0,r.jsx)(t.code,{children:"SaaS product"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(79348).A+"",width:"3562",height:"888"})}),"\n",(0,r.jsxs)(t.p,{children:["\u30d7\u30ed\u30c0\u30af\u30c8ID\u30fb\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306e\u751f\u6210\u3092\u78ba\u8a8d\u3059\u308b\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001",(0,r.jsx)(t.code,{children:"Generate product ID and product code"})," \u3092\u62bc\u4e0b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(477).A+"",width:"3574",height:"1834"})}),"\n",(0,r.jsxs)(t.p,{children:["10\u79d2\u307b\u3069\u7d4c\u3064\u3068\u3001product ID\u3068product code\u304c\u751f\u6210\u3055\u308c\u3001",(0,r.jsx)(t.code,{children:"Continue"})," \u30dc\u30bf\u30f3\u304c\u6d3b\u6027\u5316\u3059\u308b\u306e\u3067\u62bc\u4e0b\u3057\u6b21\u3078\u9032\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(4130).A+"",width:"3570",height:"1924"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},98255:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/generate-product-code-1-751167b7a06114ea89b58345493d5dc2.png"},79348:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/generate-product-code-2-b0c96850c05e925e43ea734d21c5501e.png"},477:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/generate-product-code-3-82356d6235e18bb1e0011950e3f8fed3.png"},4130:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/generate-product-code-4-d5f00b96067086ccd806367b1dd4714a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(96540);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);