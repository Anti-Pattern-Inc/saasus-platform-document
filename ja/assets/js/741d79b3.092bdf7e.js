"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[4756],{44445:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var n=s(74848),t=s(28453);const d={title:"Amazon EventBridge \u9023\u643a\u6a5f\u80fd",slug:"integrate-with-amazon-eventbridge-jp",excerpt:"",hidden:!1,createdAt:"Sat Jan 21 2023 09:57:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},i=void 0,r={id:"saas-development-console/integrate-with-amazon-eventbridge",title:"Amazon EventBridge \u9023\u643a\u6a5f\u80fd",description:"SaaSus Platform \u306f\u3001 Amazon EventBridge \u3068\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002 SaaSus Platform \u3067\u8d77\u3053\u3063\u305f\u5404\u7a2e\u30a4\u30d9\u30f3\u30c8\u3092\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u3068\u3057\u3066\u3001 SaaS \u5074 AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306e Amazon EventBridge \u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u6d3b\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001 SaaSus Platform \u3068\u9023\u643a\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u63a1\u7528\u3057 SaaS \u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.6/saas-development-console/integrate-with-amazon-eventbridge.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/integrate-with-amazon-eventbridge-jp",permalink:"/ja/docs/saas-development-console/integrate-with-amazon-eventbridge-jp",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{title:"Amazon EventBridge \u9023\u643a\u6a5f\u80fd",slug:"integrate-with-amazon-eventbridge-jp",excerpt:"",hidden:!1,createdAt:"Sat Jan 21 2023 09:57:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f\u624b\u9806",permalink:"/ja/docs/saas-development-console/procedure-for-applying-for-a-paid-plan"},next:{title:"\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb",permalink:"/ja/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample"}},c={},o=[{value:"\u8a2d\u5b9a\u3068\u52d5\u4f5c\u306e\u78ba\u8a8d",id:"\u8a2d\u5b9a\u3068\u52d5\u4f5c\u306e\u78ba\u8a8d",level:2}];function l(e){const a={br:"br",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"SaaSus Platform \u306f\u3001 Amazon EventBridge \u3068\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002 SaaSus Platform \u3067\u8d77\u3053\u3063\u305f\u5404\u7a2e\u30a4\u30d9\u30f3\u30c8\u3092\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u3068\u3057\u3066\u3001 SaaS \u5074 AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306e Amazon EventBridge \u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u6d3b\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001 SaaSus Platform \u3068\u9023\u643a\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u63a1\u7528\u3057 SaaS \u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u4f8b\u3048\u3070\u3001SaaS\u306e\u30c6\u30ca\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u305f\u3068\u304d\u306b\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u51e6\u7406\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u3001\u30e6\u30fc\u30b6\u304c\u524a\u9664\u3055\u308c\u305f\u3068\u304d\u306b\u4ed8\u968f\u3059\u308b\u30c7\u30fc\u30bf\u3092\u524a\u9664\u3059\u308b\u51e6\u7406\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u306a\u3069\u306b\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\u73fe\u5728\u306f\u3001\u5168\u3066\u306e SaaSus API \u306e\u30a4\u30d9\u30f3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5404API\u306e\u5185\u5bb9\u306f\u3001",(0,n.jsx)("a",{href:"/docs/reference/getting-started-with-your-api",target:"_blank",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u307e\u305f\u3001\u30a4\u30d9\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5185\u5bb9\u306f",(0,n.jsx)("a",{href:"/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample",target:"_blank",children:"\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb"}),"\u3067\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u8a2d\u5b9a\u3068\u52d5\u4f5c\u306e\u78ba\u8a8d",children:"\u8a2d\u5b9a\u3068\u52d5\u4f5c\u306e\u78ba\u8a8d"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)("a",{href:"https://settings.console.saasus.io/integrations/event",target:"_blank",children:"SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30a4\u30d9\u30f3\u30c8\u9023\u643a\u753b\u9762"}),"\u3092\u958b\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"664155d-_2023-01-21_19.02.26",src:s(29700).A+"",width:"2860",height:"1572"})}),"\n",(0,n.jsx)(a.p,{children:"AWS\u30a2\u30ab\u30a6\u30f3\u30c8ID \u306e\u90e8\u5206\u306b\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u9001\u4fe1\u5148\u306eAWS\u30a2\u30ab\u30a6\u30f3\u30c8ID(SaaS\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308bAWS\u30a2\u30ab\u30a6\u30f3\u30c8\u306e12\u6841\u306eID)\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u901a\u77e5\u3092\u53d7\u3051\u53d6\u308bAWS\u30ea\u30fc\u30b8\u30e7\u30f3\u3082\u9078\u629e\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u4fdd\u5b58\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"b625f39-_2023-01-21_23.55.59",src:s(52175).A+"",width:"2648",height:"1510"})}),"\n",(0,n.jsxs)(a.p,{children:["\u4e0a\u8a18\u3067\u8a2d\u5b9a\u3057\u305fAWS\u30a2\u30ab\u30a6\u30f3\u30c8\u4e0a\u306b\u3001\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30d1\u30b9\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u8a72\u5f53AWS\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u5f8c\u306b\u3001",(0,n.jsx)("a",{href:"https://ap-northeast-1.console.aws.amazon.com/events/home#/partners",target:"_blank",children:"Amazon EventBridge\u306e\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u306e\u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3092\u958b\u304d\u3001\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"11c56cb-_2023-01-21_23.57.06",src:s(9821).A+"",width:"2372",height:"864"})}),"\n",(0,n.jsx)(a.p,{children:"\u4f5c\u6210\u3055\u308c\u305f\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u3092\u9078\u629e\u3057\u3001\u300c\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u3068\u95a2\u9023\u4ed8\u3051\u308b\u300d\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u3059\u308b\u3068\u3001\u4ed6\u306e\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u3068\u540c\u69d8\u306b\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u3067\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"22a9b2d-_2023-01-21_23.58.05",src:s(1480).A+"",width:"2190",height:"1016"})}),"\n",(0,n.jsxs)(a.p,{children:["\u6b21\u306b\u3001\u30a4\u30d9\u30f3\u30c8\u306e\u9001\u4fe1\u3092\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,n.jsx)("a",{href:"https://ap-northeast-1.console.aws.amazon.com/events/home#/rules",target:"_blank",children:"Amazon EventBridge\u306e\u30d0\u30b9\u306e\u30eb\u30fc\u30eb\u306e\u30da\u30fc\u30b8"}),"\u3092\u958b\u304d\u307e\u3059\u3002\u3053\u3053\u753b\u9762\u3067\u3001\u5148\u307b\u3069\u306e\u30d1\u30fc\u30c8\u30ca\u30fc\u30a4\u30d9\u30f3\u30c8\u30bd\u30fc\u30b9\u304c\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u3068\u3057\u3066\u9078\u629e\u3067\u304d\u308b\u72b6\u614b\u306b\u306a\u3063\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"234abaa-_2023-01-22_18.59.46",src:s(56209).A+"",width:"2812",height:"1382"})}),"\n",(0,n.jsxs)(a.p,{children:["\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u3092\u30d9\u30fc\u30b9\u306b\u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u753b\u9762\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002",(0,n.jsx)(a.br,{}),"\n","\u307e\u305a\u306f\u3001SaaSus Platform\u306e\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u3092\u9078\u629e\u3057\u3001\u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u5404\u753b\u9762\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u753b\u9762\u3092\u53c2\u8003\u306b\u5165\u529b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"288246d-_2023-01-22_19.19.22",src:s(18364).A+"",width:"2818",height:"1374"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"eefcee6-_2023-01-22_19.20.13",src:s(74849).A+"",width:"2072",height:"1464"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"d1e7c0d-_2023-01-22_19.20.25",src:s(58353).A+"",width:"2042",height:"1280"})}),"\n",(0,n.jsx)(a.p,{children:"\u30a4\u30d9\u30f3\u30c8\u30d1\u30bf\u30fc\u30f3\u306e\u90e8\u5206\u306b\u306f\u3001\u307e\u305a\u306f\u5168\u3066\u306eSaaSus Platform\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002\u300c\u30d1\u30bf\u30fc\u30f3\u3092\u7de8\u96c6\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u4ee5\u4e0b\u306eJSON\u3092\u76f4\u63a5\u8a18\u8f09\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"0867394-_2023-01-22_19.20.34",src:s(66910).A+"",width:"1550",height:"1004"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"4d3ea03-_2023-01-22_19.20.51",src:s(81382).A+"",width:"1584",height:"1220"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "source": [{\n    "prefix": "aws.partner/saasus.io"\n  }]\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"\u4eca\u56de\u306f\u5168\u3066\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3082\u3061\u308d\u3093\u7279\u5b9a\u306eAPI\u30b3\u30fc\u30eb\u306b\u5bfe\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u307f\u306e\u53d6\u5f97\u3059\u308b\u3088\u3046\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u304b\u3051\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u4eca\u56de\u306f\u3069\u306e\u3088\u3046\u306a\u30a4\u30d9\u30f3\u30c8\u304c\u5c4a\u304f\u306e\u304b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u3001\u5168\u3066\u306e\u30a4\u30d9\u30f3\u30c8\u3092 CloudWatch Logs \u306b\u51fa\u529b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"7d74d3b-_2023-01-22_19.21.19",src:s(74426).A+"",width:"2076",height:"1498"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"b260840-_2023-01-22_19.21.33",src:s(9573).A+"",width:"2086",height:"846"})}),"\n",(0,n.jsx)(a.p,{children:"\u5168\u3066\u306e\u8a2d\u5b9a\u304c\u7d42\u308f\u3063\u305f\u3089\u3001\u30eb\u30fc\u30eb\u306e\u4f5c\u6210\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30eb\u30fc\u30eb\u304c\u4f5c\u6210\u3055\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"9b4be62-_2023-01-22_19.21.43",src:s(36822).A+"",width:"1886",height:"1520"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"ddda235-_2023-01-22_19.21.53",src:s(2954).A+"",width:"2812",height:"1160"})}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u308c\u3067\u30a4\u30d9\u30f3\u30c8\u3092\u9023\u643a\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f\u306e\u3067\u3001\u30c6\u30b9\u30c8\u30a4\u30d9\u30f3\u30c8\u3092\u9001\u4fe1\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002SaaSus \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u623b\u308a\u3001\u30c6\u30b9\u30c8\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"128194b-_2023-01-21_23.55.59",src:s(96987).A+"",width:"2648",height:"1510"})}),"\n",(0,n.jsx)(a.p,{children:"\u30a4\u30d9\u30f3\u30c8\u304c\u6b63\u5e38\u306b\u5c4a\u304f\u3068\u3001CloudWatch Logs\u306b\u30a4\u30d9\u30f3\u30c8\u306e\u5185\u5bb9\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"b93fff7-_2023-01-22_19.24.48",src:s(51079).A+"",width:"2710",height:"1222"})}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u306e\u3088\u3046\u306a\u5f62\u3067\u30a4\u30d9\u30f3\u30c8\u304c\u53d6\u5f97\u3067\u304d\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u4eca\u56de\u306fCloudWatch Logs\u306b\u9023\u643a\u3057\u3066\u3044\u307e\u3059\u304c\u3001Lambda\u3084\u4ed6\u306eAPI\u306a\u3069\u3044\u308d\u3044\u308d\u306a\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u30a4\u30d9\u30f3\u30c8\u9023\u643a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u6d3b\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u3069\u3053\u304b\u3089SaaSus API\u304c\u547c\u3070\u308c\u305f\u304b\u30fb\u3044\u3064\u547c\u3070\u308c\u305f\u304b\u3068\u3044\u3046\u3053\u3068\u3068\u3001\u305d\u306e\u7d50\u679c\u4f55\u3092\u3044\u3064\u3059\u3079\u304d\u304b\u3001\u3068\u3044\u3046\u3053\u3068\u3092\u5206\u96e2\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:'"detail" \u9805\u76ee\u306b\u306f "trace_id" \u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306f\u3001 SaaSus API \u306e\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u6307\u5b9a\u3057\u305f\u3082\u306e\u3001\u3082\u3057\u304f\u306f\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u305f\u3082\u306e\u3068\u540c\u4e00\u306a\u306e\u3067\u3001\u3069\u306eAPI\u30b3\u30fc\u30eb\u306b\u3088\u308b\u30a4\u30d9\u30f3\u30c8\u306a\u306e\u304b\uff1f\u3092\u30c8\u30ec\u30fc\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},66910:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/0867394-_2023-01-22_19.20.34-bd7adb349fbda0566a147333fee08038.png"},9821:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/11c56cb-_2023-01-21_23.57.06-6fea626dd2f0f8c1e7c7d6d9b249953a.png"},96987:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/128194b-_2023-01-21_23.55.59-0d830aeda5a91bfd1248ddb8b21008e7.png"},1480:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/22a9b2d-_2023-01-21_23.58.05-92de6c7b9cee0257ed612f3b8c011967.png"},56209:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/234abaa-_2023-01-22_18.59.46-fd7736cbc635ff36994e421fec9441af.png"},18364:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/288246d-_2023-01-22_19.19.22-3957ea5e77cf15a936155d54ebdcfeef.png"},81382:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/4d3ea03-_2023-01-22_19.20.51-56a4e98ca8341f301aa37a4484122373.png"},29700:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/664155d-_2023-01-21_19.02.26-e6c41eb0ae7e32918dbdd528e7575822.png"},74426:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/7d74d3b-_2023-01-22_19.21.19-782ee9a118768239764106ebdf9b9c86.png"},36822:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/9b4be62-_2023-01-22_19.21.43-4ec070de098c319d8172bf6eec78f4f3.png"},9573:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/b260840-_2023-01-22_19.21.33-bad685ed3305e79152b3cdca9e591f7e.png"},52175:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/b625f39-_2023-01-21_23.55.59-0d830aeda5a91bfd1248ddb8b21008e7.png"},51079:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/b93fff7-_2023-01-22_19.24.48-45ba7e6f64654051901d6a645944c05a.png"},58353:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/d1e7c0d-_2023-01-22_19.20.25-4b5d2ce255b2a089385361736a259a98.png"},2954:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/ddda235-_2023-01-22_19.21.53-90804d336f3c68e3536eb0ed62361b09.png"},74849:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/eefcee6-_2023-01-22_19.20.13-e81683f8916281c62ef956d177f4fb46.png"},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var n=s(96540);const t={},d=n.createContext(t);function i(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);