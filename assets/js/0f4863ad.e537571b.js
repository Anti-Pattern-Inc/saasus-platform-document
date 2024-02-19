"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Registering SaaS Product Information",slug:"product-submission",excerpt:"",hidden:!1,metadata:{image:[],robots:"index"},createdAt:"Wed May 24 2023 07:19:23 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Jun 30 2023 03:38:36 GMT+0000 (Coordinated Universal Time)"},i=void 0,l={unversionedId:"aws-marketplace-integration/product-submission",id:"version-1.6/aws-marketplace-integration/product-submission",title:"Registering SaaS Product Information",description:"You will register the SaaS product information on the AWS Marketplace Management Portal.",source:"@site/versioned_docs/version-1.6/aws-marketplace-integration/product-submission.md",sourceDirName:"aws-marketplace-integration",slug:"/aws-marketplace-integration/product-submission",permalink:"/saasus-platform-document/docs/aws-marketplace-integration/product-submission",draft:!1,tags:[],version:"1.6",frontMatter:{title:"Registering SaaS Product Information",slug:"product-submission",excerpt:"",hidden:!1,metadata:{image:[],robots:"index"},createdAt:"Wed May 24 2023 07:19:23 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Jun 30 2023 03:38:36 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Hyperwallet Registration",permalink:"/saasus-platform-document/docs/aws-marketplace-integration/aws-marketplace-seller-registration/hyperwallet-registration"},next:{title:"Getting Started with Registration - Generating Product Code",permalink:"/saasus-platform-document/docs/aws-marketplace-integration/product-submission/generate-product-code"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You will register the SaaS product information on the AWS Marketplace Management Portal."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Before carrying out these procedures, please make sure that you have completed the ",(0,a.kt)("a",{parentName:"p",href:"/docs/aws-marketplace-integration/aws-marketplace-seller-registration"},"Seller Registration and Bank Account Setup")," procedure.")),(0,a.kt)("p",null,"You will need to prepare the following for this procedure. Please prepare them in advance."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Publisher information, product description/overview, etc."),(0,a.kt)("li",{parentName:"ul"},"End User License Agreement (EULA): You will choose whether to use the terms defined in the AWS Marketplace or your own custom terms. If you are using your own terms, you will need to specify the ",(0,a.kt)("inlineCode",{parentName:"li"},"EULA URL"),"."),(0,a.kt)("li",{parentName:"ul"},"Product support information: You will need to prepare the method for providing support, such as email, support form, etc."),(0,a.kt)("li",{parentName:"ul"},"Refund policy information: You will need to prepare the content of the refund policy, URL of the page where written, etc.")),(0,a.kt)("p",null,"There are also the following restrictions related to the registration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The only pricing model supported by SaaSus is SaaS contract. The contract period will be either 1 month or 1 year."),(0,a.kt)("li",{parentName:"ul"},"The currency for the listing price must be in USD."),(0,a.kt)("li",{parentName:"ul"},"The product information must be registered in English."),(0,a.kt)("li",{parentName:"ul"},"You will need to undergo a review by the AWS Marketplace support team 2-3 times, each review will take around 3-5 business days.")),(0,a.kt)("p",null,"The input content etc. will be published on the ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS Marketplace"),". Please check the input content and display examples ",(0,a.kt)("a",{parentName:"p",href:"/docs/aws-marketplace-integration/supplementary/supplementary-1"},"here")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/aws-marketplace-integration/supplementary/supplementary-1"},"Supplementary 1"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/aws-marketplace-integration/supplementary/supplementary-2"},"Supplementary 2"),")."))}m.isMDXComponent=!0}}]);