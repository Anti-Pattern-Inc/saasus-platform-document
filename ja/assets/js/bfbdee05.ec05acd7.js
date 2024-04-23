"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5942],{73385:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(74848),n=s(28453);const i={title:"\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f\u624b\u9806",slug:"procedure-for-applying-for-a-paid-plan",excerpt:"",hidden:!1,createdAt:"Thu Jul 20 2023 04:44:09 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Jan 09 2024 10:27:04 GMT+0000 (Coordinated Universal Time)"},r=void 0,l={id:"saas-development-console/procedure-for-applying-for-a-paid-plan",title:"\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f\u624b\u9806",description:"SaaSus Platform\u3067\u306f\u4ee5\u4e0b\u30d7\u30e9\u30f3\u3092\u73fe\u5728\u7528\u610f\u3057\u3066\u304a\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.8/saas-development-console/procedure-for-applying-for-a-paid-plan.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/procedure-for-applying-for-a-paid-plan",permalink:"/ja/docs/saas-development-console/procedure-for-applying-for-a-paid-plan",draft:!1,unlisted:!1,tags:[],version:"1.8",frontMatter:{title:"\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f\u624b\u9806",slug:"procedure-for-applying-for-a-paid-plan",excerpt:"",hidden:!1,createdAt:"Thu Jul 20 2023 04:44:09 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Jan 09 2024 10:27:04 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b",permalink:"/ja/docs/usecase/about-saas-user-accounts/add-tenant-user"},next:{title:"Amazon EventBridge \u9023\u643a\u6a5f\u80fd",permalink:"/ja/docs/saas-development-console/integrate-with-amazon-eventbridge-jp"}},d={},c=[{value:"SaaS\u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f",id:"saas\u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f",level:2},{value:"AWS Marketplace\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f",id:"aws-marketplace\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f",level:2},{value:"1.AWS Marketplace\u306e\u88fd\u54c1\u30da\u30fc\u30b8\u3088\u308a<code>View purchase options</code>\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059",id:"1aws-marketplace\u306e\u88fd\u54c1\u30da\u30fc\u30b8\u3088\u308aview-purchase-options\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059",level:3},{value:"2.\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u5951\u7d04\u5185\u5bb9\u3092\u8a2d\u5b9a\u3057\u307e\u3059",id:"2\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u5951\u7d04\u5185\u5bb9\u3092\u8a2d\u5b9a\u3057\u307e\u3059",level:3},{value:"3.\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",id:"3\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",level:3},{value:"4.\u5951\u7d04\u306e\u5b8c\u4e86\u30c0\u30a4\u30a2\u30ed\u30b0",id:"4\u5951\u7d04\u306e\u5b8c\u4e86\u30c0\u30a4\u30a2\u30ed\u30b0",level:3},{value:"5-1-1.SaaSus Platform \u306e\u30ed\u30b0\u30a4\u30f3 (\u65b0\u898f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210)",id:"5-1-1saasus-platform-\u306e\u30ed\u30b0\u30a4\u30f3-\u65b0\u898f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210",level:3},{value:"5-2-1.SaaSus Platform \u306e\u30ed\u30b0\u30a4\u30f3 (\u65e2\u5b58\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u6599\u5316)",id:"5-2-1saasus-platform-\u306e\u30ed\u30b0\u30a4\u30f3-\u65e2\u5b58\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u6599\u5316",level:3},{value:"5-2-1.\u6709\u6599\u5316\u3092\u884c\u3046\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9078\u629e",id:"5-2-1\u6709\u6599\u5316\u3092\u884c\u3046\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9078\u629e",level:3}];function h(e){const t={br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["SaaSus Platform\u3067\u306f\u4ee5\u4e0b\u30d7\u30e9\u30f3\u3092\u73fe\u5728\u7528\u610f\u3057\u3066\u304a\u308a\u307e\u3059\u3002",(0,a.jsx)(t.br,{}),"\n","\u6709\u6599\u30d7\u30e9\u30f3\u3092\u7533\u3057\u8fbc\u3080\u306b\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306e\u7533\u3057\u8fbc\u307f\u3068\u3001AWS Marketplace \u3067\u7533\u3057\u8fbc\u3080\u65b9\u6cd5\u304c\u3054\u3056\u3044\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"\u30d7\u30e9\u30f3"}),(0,a.jsx)(t.th,{style:{textAlign:"right"},children:"\u6599\u91d1"}),(0,a.jsx)(t.th,{style:{textAlign:"right"},children:"\u74b0\u5883\u6570"}),(0,a.jsx)(t.th,{style:{textAlign:"right"},children:"\u30e6\u30fc\u30b6\u30fc\u6570"}),(0,a.jsx)(t.th,{style:{textAlign:"right"},children:"SaaSus\u30b5\u30dd\u30fc\u30c8"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30d5\u30ea\u30fc\u30d7\u30e9\u30f3"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\xa50/\u6708"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"5"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u306a\u3057"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30b9\u30bf\u30fc\u30bf\u30fc"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\xa55,000/\u6708\u3001MAU1\u4eba\u3042\u305f\u308a\xa5800/\u6708"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u7121\u5236\u9650"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u3042\u308a"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9\u30d7\u30e9\u30f3"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\xa5100,000/\u6708"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u7121\u5236\u9650"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u3042\u308a"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30d7\u30e9\u30f3"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\xa5300,000/\u6708"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u7121\u5236\u9650"}),(0,a.jsx)(t.td,{style:{textAlign:"right"},children:"\u3042\u308a"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"saas\u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f",children:"SaaS\u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f"}),"\n",(0,a.jsxs)(t.p,{children:["SaaSus Platform\u306b\u30ed\u30b0\u30a4\u30f3\u3044\u305f\u3060\u304d\u3001SaaS\u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a->\u6599\u91d1\u30d7\u30e9\u30f3\u3092\u30da\u30fc\u30b8\u306b\u3066\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f\u3068\u306a\u308a\u307e\u3059\u3002",(0,a.jsx)(t.br,{}),"\n","\u671f\u9593\u306f\u672c\u65e5\u304b\u3089\uff11\u30f6\u6708\u5358\u4f4d\u3068\u306a\u308aStripe\u306b\u3066\u8acb\u6c42\u66f8\u3092\u9001\u4ed8\u3044\u305f\u3057\u307e\u3059\u3002",(0,a.jsx)(t.br,{}),"\n","\u672c\u30d7\u30e9\u30f3\u306f\uff11\u30f6\u6708\u5358\u4f4d\u306e\u81ea\u52d5\u7d99\u7d9a\u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"0558e63-image",src:s(28729).A+"",width:"2880",height:"1596"})}),"\n",(0,a.jsx)(t.h2,{id:"aws-marketplace\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f",children:"AWS Marketplace\u304b\u3089\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f"}),"\n",(0,a.jsxs)(t.p,{children:["AWS Marketplace\u306b\u88fd\u54c1\u3092\u51fa\u54c1\u3057\u3066\u304a\u308a\u3001\u305d\u3061\u3089\u3067\u3082\u7533\u3057\u8fbc\u307f\u304c\u53ef\u80fd\u3067\u3059\u3002\u3082\u3057AWS Marketplace\u3067\u7533\u3057\u8fbc\u307e\u308c\u305f\u5834\u5408\u3001AWS\u306e\u5229\u7528\u6599\u3068\u4e00\u7dd2\u306b\u8acb\u6c42\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)("a",{href:"https://aws.amazon.com/marketplace/pp/prodview-2gr3qw7kp5qx6?sr=0-1&ref_=beagle&applicationId=AWSMPContess",target:"_blank",children:"SaaSus Platform"})]}),"\n",(0,a.jsxs)(t.h3,{id:"1aws-marketplace\u306e\u88fd\u54c1\u30da\u30fc\u30b8\u3088\u308aview-purchase-options\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059",children:["1.AWS Marketplace\u306e\u88fd\u54c1\u30da\u30fc\u30b8\u3088\u308a",(0,a.jsx)(t.code,{children:"View purchase options"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"f0ffc78-image",src:s(57611).A+"",width:"983",height:"1016"})}),"\n",(0,a.jsx)(t.h3,{id:"2\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u5951\u7d04\u5185\u5bb9\u3092\u8a2d\u5b9a\u3057\u307e\u3059",children:"2.\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u5951\u7d04\u5185\u5bb9\u3092\u8a2d\u5b9a\u3057\u307e\u3059"}),"\n",(0,a.jsxs)(t.p,{children:["\u2460  \u5951\u7d04\u671f\u9593\u3092\u9078\u629e",(0,a.jsx)(t.br,{}),"\n","\u3000\uff11\u30f6\u6708/\uff11\u5e74\u3092\u9078\u629e\u53ef\u80fd"]}),"\n",(0,a.jsxs)(t.p,{children:["\u2461 \u5951\u7d04\u306e\u66f4\u65b0\u8a2d\u5b9a",(0,a.jsx)(t.br,{}),"\n","\u3000Yes:\u81ea\u52d5\u7684\u306b\u5951\u7d04\u3092\u66f4\u65b0 / No: \u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3057\u306a\u3044"]}),"\n",(0,a.jsxs)(t.p,{children:["\u2462 \u5951\u7d04\u306e\u30aa\u30d7\u30b7\u30e7\u30f3",(0,a.jsx)(t.br,{}),"\n","\u3000Standard Plan\u3092\u9078\u629e"]}),"\n",(0,a.jsxs)(t.p,{children:["\u2463 \u5951\u7d04\u66f8\u306e\u4f5c\u6210",(0,a.jsx)(t.br,{}),"\n","\u3000Create contract \u3092\u30af\u30ea\u30c3\u30af"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"b2e6294-image",src:s(85045).A+"",width:"991",height:"1008"})}),"\n",(0,a.jsx)(t.h3,{id:"3\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0",children:"3.\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0"}),"\n",(0,a.jsxs)(t.p,{children:["\u78ba\u8a8d\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067",(0,a.jsx)(t.code,{children:"Pay now"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"50544ef-image",src:s(67646).A+"",width:"2262",height:"1028"})}),"\n",(0,a.jsx)(t.h3,{id:"4\u5951\u7d04\u306e\u5b8c\u4e86\u30c0\u30a4\u30a2\u30ed\u30b0",children:"4.\u5951\u7d04\u306e\u5b8c\u4e86\u30c0\u30a4\u30a2\u30ed\u30b0"}),"\n",(0,a.jsxs)(t.p,{children:["\u5951\u7d04\u304c\u6b63\u5e38\u306b\u7d42\u4e86\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001",(0,a.jsx)(t.code,{children:"Set up your account"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u6b21\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"8b0f660-image",src:s(8183).A+"",width:"801",height:"357"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"\u65b0\u898f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3068\u65e2\u5b58\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u6709\u6599\u5316\u3092\u884c\u3046\u5834\u5408\u3067\u624b\u9806\u304c\u7570\u306a\u308a\u307e\u3059"})}),"\n",(0,a.jsxs)(t.p,{children:["\u65b0\u898f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001\u624b\u98065-1-1",(0,a.jsx)(t.br,{}),"\n","\u65e2\u5b58\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6709\u6599\u5316\u3059\u308b\u5834\u5408\u3001\u624b\u98065-2-1 \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"]}),"\n",(0,a.jsx)(t.h3,{id:"5-1-1saasus-platform-\u306e\u30ed\u30b0\u30a4\u30f3-\u65b0\u898f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210",children:"5-1-1.SaaSus Platform \u306e\u30ed\u30b0\u30a4\u30f3 (\u65b0\u898f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210)"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Set up your account"}),"\u3092\u30af\u30ea\u30c3\u30af\u5f8c\u306fAWS Marketplace\u7d4c\u7531 \u65b0\u898f\u767b\u9332\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3001SaaSus Platform \u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u305d\u306e\u307e\u307e\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u540d\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u65b0\u898f\u304a\u767b\u9332\u3092\u884c\u3044\u753b\u9762\u306e\u6307\u793a\u306b\u5f93\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"915e21a-image",src:s(19135).A+"",width:"1394",height:"717"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"5-2-1saasus-platform-\u306e\u30ed\u30b0\u30a4\u30f3-\u65e2\u5b58\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u6599\u5316",children:"5-2-1.SaaSus Platform \u306e\u30ed\u30b0\u30a4\u30f3 (\u65e2\u5b58\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u6599\u5316)"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Set up your account"}),"\u3092\u30af\u30ea\u30c3\u30af\u5f8c\u306fAWS Marketplace\u7d4c\u7531 \u65b0\u898f\u767b\u9332\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3001SaaSus Platform \u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3001",(0,a.jsx)(t.code,{children:"\u3059\u3067\u306b\u767b\u9332\u6e08\u307f\u3067\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u65b9\u306f\u3053\u3061\u3089"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 AWS Marketplac\u7d4c\u7531 \u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3078\u9077\u79fb\u3057\u3066\u65e2\u5b58\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"a677094-image",src:s(29029).A+"",width:"1394",height:"717"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"f3eaabf-image",src:s(13423).A+"",width:"1322",height:"756"})}),"\n",(0,a.jsx)(t.h3,{id:"5-2-1\u6709\u6599\u5316\u3092\u884c\u3046\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9078\u629e",children:"5-2-1.\u6709\u6599\u5316\u3092\u884c\u3046\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9078\u629e"}),"\n",(0,a.jsxs)(t.p,{children:["\u6709\u6599\u5316\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057",(0,a.jsx)(t.code,{children:"\u3053\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u5229\u7528\u3092\u958b\u59cb\u3059\u308b"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"e15cc67-image",src:s(74991).A+"",width:"1497",height:"667"})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28729:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/0558e63-image-740b668036baf92bae11016e47ffc459.png"},67646:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/50544ef-image-3e1cd986d0ab2c70f8499c1ab76e532e.png"},8183:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/8b0f660-image-0c07ea978d5a3e9bee26c9471e117dae.png"},19135:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/915e21a-image-d9fc03312ee9f43305c43215627142e9.png"},29029:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/a677094-image-d9fc03312ee9f43305c43215627142e9.png"},85045:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/b2e6294-image-f87c732fa8b4b8c2ba042dbb11fa6e35.png"},74991:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/e15cc67-image-a6332db23ad517f654779d483d6a0f7a.png"},57611:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/f0ffc78-image-645bd2789f33b079cb42bc63dd211a50.png"},13423:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/f3eaabf-image-57bca9403d974bc8d7d26ab48e8e9652.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var a=s(96540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);