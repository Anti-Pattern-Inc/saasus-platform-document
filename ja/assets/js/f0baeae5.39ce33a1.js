"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[3978],{296:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>g,contentTitle:()=>a,default:()=>r,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=l(74848),o=l(28453);const i={title:"Google\u9023\u643a",slug:"google-linkage",excerpt:"",hidden:!1,createdAt:"Sun May 21 2023 05:12:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},a="\u6982\u8981\u8aac\u660e",t={id:"saas-development-console/google-linkage",title:"Google\u9023\u643a",description:"Google\u9023\u643a\u3092\u884c\u3046\u305f\u3081\u306b\u306f\u3001Google Cloud Platform\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306bOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001SaaSus\u3068\u9023\u643a\u3059\u308b\u8a2d\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/saas-development-console/google-linkage.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/google-linkage",permalink:"/saasus-platform-document/ja/docs/next/saas-development-console/google-linkage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Google\u9023\u643a",slug:"google-linkage",excerpt:"",hidden:!1,createdAt:"Sun May 21 2023 05:12:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb",permalink:"/saasus-platform-document/ja/docs/next/saas-development-console/integrate-with-amazon-eventbridge/event-sample"},next:{title:"\u6bb5\u968e\u30e6\u30cb\u30c3\u30c8\u3001\u6bb5\u968e\u7684\u4f7f\u7528\u91cf\u30e6\u30cb\u30c3\u30c8\u306e\u6599\u91d1\u8a08\u7b97\u306e\u9055\u3044\u306b\u3064\u3044\u3066",permalink:"/saasus-platform-document/ja/docs/next/saas-development-console/tiered_unit"}},g={},d=[{value:"Google Cloud Platform\u306eOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210",id:"google-cloud-platform\u306eoauth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210",level:2},{value:"Google\u9023\u643a\u7528\u306e\u60c5\u5831\u3092\u78ba\u8a8d",id:"google\u9023\u643a\u7528\u306e\u60c5\u5831\u3092\u78ba\u8a8d",level:3},{value:"OAuth\u306e\u5229\u7528\u306b\u540c\u610f",id:"oauth\u306e\u5229\u7528\u306b\u540c\u610f",level:3},{value:"OAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",id:"oauth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",level:3},{value:"Google Cloud Platform\u3068SaaSus\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9023\u643a",id:"google-cloud-platform\u3068saasus\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9023\u643a",level:2},{value:"Google\u8a8d\u8a3c\u306e\u52d5\u4f5c\u78ba\u8a8d",id:"google\u8a8d\u8a3c\u306e\u52d5\u4f5c\u78ba\u8a8d",level:2},{value:"\u5229\u7528\u7533\u8acb",id:"\u5229\u7528\u7533\u8acb",level:2}];function c(e){const n={br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6982\u8981\u8aac\u660e",children:"\u6982\u8981\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["Google\u9023\u643a\u3092\u884c\u3046\u305f\u3081\u306b\u306f\u3001Google Cloud Platform\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306bOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001SaaSus\u3068\u9023\u643a\u3059\u308b\u8a2d\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.jsx)(n.br,{}),"\n","SaaSus\u3068\u306e\u9023\u643a\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u3067\u3001SaaSus\u306e\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u300cGoogle\u3067\u30ed\u30b0\u30a4\u30f3\u300d\u306e\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u3001Google\u9023\u643a\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059",(0,s.jsx)(n.br,{}),"\n","\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u4e00\u822c\u516c\u958b\u3059\u308b\u305f\u3081\u306b\u306fGoogle\u306b\u5229\u7528\u7533\u8acb\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u7533\u8acb\u5f8c\u306e\u5be9\u67fb\u306b1\u9031\u9593\u7a0b\u5ea6\u306e\u6642\u9593\u3092\u8981\u3057\u307e\u3059\u3002\uff08\u4e0d\u5099\u304c\u3042\u308b\u5834\u5408\u306f\u30e1\u30fc\u30eb\u3067\u9023\u7d61\u304c\u3042\u308b\u306e\u3067\u3001\u5bfe\u5fdc\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\uff09"]}),"\n",(0,s.jsx)(n.p,{children:"Google\u9023\u643a\u306e\u624b\u9806"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Google Cloud Platform\u306eOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210"}),"\n",(0,s.jsx)(n.li,{children:"Google Cloud Platform\u3068SaaSus\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9023\u643a"}),"\n",(0,s.jsx)(n.li,{children:"Google\u8a8d\u8a3c\u306e\u52d5\u4f5c\u78ba\u8a8d"}),"\n",(0,s.jsx)(n.li,{children:"\u5229\u7528\u7533\u8acb"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"google-cloud-platform\u306eoauth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210",children:"Google Cloud Platform\u306eOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210"}),"\n",(0,s.jsx)(n.h3,{id:"google\u9023\u643a\u7528\u306e\u60c5\u5831\u3092\u78ba\u8a8d",children:"Google\u9023\u643a\u7528\u306e\u60c5\u5831\u3092\u78ba\u8a8d"}),"\n",(0,s.jsxs)(n.p,{children:["SaaSus\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3",(0,s.jsx)(n.br,{}),"\n","\u8a8d\u8a3c\u8a73\u7d30\u8a2d\u5b9a\u753b\u9762\u3092\u958b\u304f",(0,s.jsx)(n.br,{}),"\n","\u8a8d\u8a3c\u8a2d\u5b9a\u30bf\u30d6\u306eGoogle\u9023\u643a\u3092\u78ba\u8a8d\u3059\u308b"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-1",src:l(41016).A+"",width:"1384",height:"888"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u9805\u76ee\u304cGoogle\u306eOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210\u6642\u306b\u5fc5\u8981\u306a\u306e\u3067\u30e1\u30e2\u3057\u307e\u3059"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u627f\u8a8d\u6e08\u307f\u306e JavaScript \u751f\u6210\u5143"}),"\n",(0,s.jsx)(n.li,{children:"\u627f\u8a8d\u6e08\u307f\u306e\u30ea\u30c0\u30a4\u30ec\u30af\u30c8 URI"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-2",src:l(15507).A+"",width:"1233",height:"679"})}),"\n",(0,s.jsx)(n.h3,{id:"oauth\u306e\u5229\u7528\u306b\u540c\u610f",children:"OAuth\u306e\u5229\u7528\u306b\u540c\u610f"}),"\n",(0,s.jsx)(n.p,{children:"Google\u9023\u643a\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u3001Google Cloud Platform\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\uff08Google Cloud Platform\u304c\u306a\u3044\u5834\u5408\u306f\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\uff09"}),"\n",(0,s.jsx)(n.p,{children:"Google\u9023\u643a\u7528\u306b\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("a",{href:"https://console.cloud.google.com/projectcreate?previousPage=%2Fprojectselector2%2Fhome%2Fdashboard%3Fhl%3Dja%26organizationId%3D0%26supportedpurview%3Dproject&organizationId=0&hl=ja&supportedpurview=project",target:"_blank",children:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u958b\u3044\u3066\u3001\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059",(0,s.jsx)(n.br,{}),"\n","\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\uff1aGoogleOAuth\uff08\u4efb\u610f\u306e\u308f\u304b\u308a\u3084\u3059\u3044\u3082\u306e\u3067\u5927\u4e08\u592b\u3067\u3059\uff09"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-3",src:l(64746).A+"",width:"1908",height:"477"})}),"\n",(0,s.jsx)(n.p,{children:"\u300cAPI\u3068\u30b5\u30fc\u30d3\u30b9\u300d - \u300cOAuth\u540c\u610f\u753b\u9762\u300d\u3092\u958b\u304f"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-4",src:l(49413).A+"",width:"1911",height:"406"})}),"\n",(0,s.jsx)(n.p,{children:"User Type\u3067\u300c\u5916\u90e8\u300d\u3092\u9078\u629e\u3057\u3001\u300c\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3059"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-5",src:l(31900).A+"",width:"1910",height:"553"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u5165\u529b\u3057\u3001\u300c\u4fdd\u5b58\u3057\u3066\u6b21\u3078\u300d\u30dc\u30bf\u30f3\u3092\u9078\u629e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u540d\uff1aGoogleOAuth"}),"\n",(0,s.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30b5\u30dd\u30fc\u30c8\u30e1\u30fc\u30eb\uff1a\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),"\n",(0,s.jsx)(n.li,{children:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u306e\u9023\u7d61\u5148\u60c5\u5831\uff1a\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-6",src:l(20631).A+"",width:"1911",height:"859"})}),"\n",(0,s.jsx)(n.p,{children:"\u300c\u4fdd\u5b58\u3057\u3066\u6b21\u3078\u300d\u3092\u9078\u629e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-7",src:l(46990).A+"",width:"1909",height:"883"})}),"\n",(0,s.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u30e6\u30fc\u30b6\u30fc\u3092\u8ffd\u52a0\u3057\u3001\u300c\u4fdd\u5b58\u3057\u3066\u6b21\u3078\u300d\u3092\u9078\u629e",(0,s.jsx)(n.br,{}),"\n","\u516c\u958b\u30b9\u30c6\u30fc\u30bf\u30b9\u304c\u300c\u30c6\u30b9\u30c8\u4e2d\u300d\u306e\u5834\u5408\u306f\u3001\u3053\u3053\u3067\u8a2d\u5b9a\u3057\u305f\u30e6\u30fc\u30b6\u306e\u307f\u3067\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-8",src:l(62553).A+"",width:"1907",height:"563"})}),"\n",(0,s.jsx)(n.h3,{id:"oauth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",children:"OAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u300cAPI\u3068\u30b5\u30fc\u30d3\u30b9\u300d - \u300c\u8a8d\u8a3c\u60c5\u5831\u300d\u3092\u958b\u304f"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-9",src:l(46800).A+"",width:"1908",height:"597"})}),"\n",(0,s.jsx)(n.p,{children:"\u300c\u8a8d\u8a3c\u60c5\u5831\u3092\u4f5c\u6210\u300d - \u300cOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID\u300d\u3092\u9078\u629e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-10",src:l(54634).A+"",width:"1913",height:"595"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u5165\u529b\u3057\u3001\u300c\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u9078\u629e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\uff1a\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,s.jsx)(n.li,{children:"\u540d\u524d\uff1aGoogleOAuth\uff08\u4efb\u610f\u306e\u308f\u304b\u308a\u3084\u3059\u3044\u3082\u306e\u3067\u5927\u4e08\u592b\u3067\u3059\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u627f\u8a8d\u6e08\u307f\u306eJavaScript\u751f\u6210\u5143\uff1a\uff1cSaaSus\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u78ba\u8a8d\u3057\u305f\u5024\uff1e"}),"\n",(0,s.jsx)(n.li,{children:"\u627f\u8a8d\u6e08\u307f\u306e\u30ea\u30c0\u30a4\u30ec\u30af\u30c8URI\uff1a\uff1cSaaSus\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u78ba\u8a8d\u3057\u305f\u5024\uff1e"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-11",src:l(9843).A+"",width:"1906",height:"962"})}),"\n",(0,s.jsxs)(n.p,{children:["OAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f",(0,s.jsx)(n.br,{}),"\n","\u4ee5\u4e0b\u306e\u9805\u76ee\u3092SaaSus\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u3067\u30e1\u30e2\u3057\u307e\u3059",(0,s.jsx)(n.br,{}),"\n","\u203b\u300cJSON\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u3092\u9078\u629e\u3057\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u4fdd\u7ba1\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"}),"\n",(0,s.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-12",src:l(64088).A+"",width:"1455",height:"751"})}),"\n",(0,s.jsx)(n.h2,{id:"google-cloud-platform\u3068saasus\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9023\u643a",children:"Google Cloud Platform\u3068SaaSus\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9023\u643a"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u5165\u529b\u3057\u3001\u300c\u4fdd\u5b58\u300d\u30dc\u30bf\u30f3\u3092\u9078\u629e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID\uff1a\uff1cOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210\u5f8c\u306b\u753b\u9762\u3067\u78ba\u8a8d\u3057\u305f\u5024\uff1e"}),"\n",(0,s.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\uff1a\uff1cOAuth\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4f5c\u6210\u5f8c\u306b\u753b\u9762\u3067\u78ba\u8a8d\u3057\u305f\u5024\uff1e"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-13",src:l(85217).A+"",width:"1904",height:"715"})}),"\n",(0,s.jsx)(n.p,{children:"\u300c\u9023\u643a\u6e08\u307f\u300d\u3068\u8868\u793a\u3055\u308c\u3066\u3044\u308c\u3070\u5b8c\u4e86\u3067\u3059"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-14",src:l(67502).A+"",width:"1907",height:"797"})}),"\n",(0,s.jsx)(n.h2,{id:"google\u8a8d\u8a3c\u306e\u52d5\u4f5c\u78ba\u8a8d",children:"Google\u8a8d\u8a3c\u306e\u52d5\u4f5c\u78ba\u8a8d"}),"\n",(0,s.jsx)(n.p,{children:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u308b\u300cGoogle\u3067\u30ed\u30b0\u30a4\u30f3\u300d\u30dc\u30bf\u30f3\u306e\u52d5\u4f5c\u78ba\u8a8d\u3092\u3057\u3066\u3044\u304d\u307e\u3059"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"google-linkage-15",src:l(96727).A+"",width:"1361",height:"675"})}),"\n",(0,s.jsx)(n.p,{children:"\u300cGoogle\u3067\u30ed\u30b0\u30a4\u30f3\u300d\u306e\u52d5\u4f5c\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8868\u793a\u3055\u308c\u308b\u753b\u9762","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762"}),"\n",(0,s.jsx)(n.li,{children:"\u65b0\u898f\u767b\u9332\u753b\u9762\uff08\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u6709\u52b9\u306b\u3057\u3066\u3044\u308b\u5834\u5408\uff09"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Google\u3067\u30ed\u30b0\u30a4\u30f3\u6642\u306e\u52d5\u4f5c","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u6709\u52b9\u306b\u3057\u3066\u3044\u308b\u5834\u5408",(0,s.jsx)(n.br,{}),"\n","\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u3001\u30ed\u30b0\u30a4\u30f3\u3055\u308c\u307e\u3059"]}),"\n",(0,s.jsxs)(n.li,{children:["\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u6709\u52b9\u306b\u3057\u3066\u3044\u306a\u3044\u5834\u5408",(0,s.jsx)(n.br,{}),"\n","\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30ed\u30b0\u30a4\u30f3\u3055\u308c\u307e\u305b\u3093"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5229\u7528\u7533\u8acb",children:"\u5229\u7528\u7533\u8acb"}),"\n",(0,s.jsx)(n.p,{children:"\u6e96\u5099\u4e2d"})]})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},41016:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-1-b8f662f8bb1053dbedf7e4a122e076b6.png"},54634:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-10-d0a84632903360da8257823a590a8656.png"},9843:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-11-5405dd22ac8c896e0c8d41fa309cb7b7.png"},64088:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-12-79e2b8fe61f3a96a1d1a20ac1ff5723b.png"},85217:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-13-861562543880161f5191b849235f5800.png"},67502:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-14-d29328986f3d4491dcb46058eacb4494.png"},96727:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-15-5ef27acc53dffbb22ea0c523fc0d565f.png"},15507:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-2-17085977d53cde064191cc03cbd28134.png"},64746:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-3-60c8bc25c242694578b3ce4261d53c56.png"},49413:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-4-46f5b2f4fcc239dcb9af79a5f61c04ea.png"},31900:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-5-eb5cc628964af7c27725e7e3d24f5632.png"},20631:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-6-3463cca2c0ae3fd01bd4019a398a2a89.png"},46990:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-7-7b4213029fc7dd255d9f9a2ee1e31e69.png"},62553:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-8-eb7a8af381b4e9f17019e502b235fc21.png"},46800:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/google-linkage-9-c6e45402e66fe11e79d878c3647892ed.png"},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>t});var s=l(96540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);