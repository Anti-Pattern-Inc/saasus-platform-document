"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[6824],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"About AWS Marketplace Integration Function",slug:"aws-marketplace-integration",excerpt:"",hidden:!1,createdAt:"Wed Jun 07 2023 06:12:07 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},o=void 0,l={unversionedId:"aws-marketplace-integration/aws-marketplace-integration",id:"aws-marketplace-integration/aws-marketplace-integration",title:"About AWS Marketplace Integration Function",description:'The AWS Marketplace integration function supports the "AWS Marketplace listing process" carried out by the "SaaS created using the SaaSus Platform".',source:"@site/docs/aws-marketplace-integration/aws-marketplace-integration.md",sourceDirName:"aws-marketplace-integration",slug:"/aws-marketplace-integration/aws-marketplace-integration",permalink:"/saasus-platform-document/docs/next/aws-marketplace-integration/aws-marketplace-integration",draft:!1,tags:[],version:"current",frontMatter:{title:"About AWS Marketplace Integration Function",slug:"aws-marketplace-integration",excerpt:"",hidden:!1,createdAt:"Wed Jun 07 2023 06:12:07 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Canceling a Scheduled Change",permalink:"/saasus-platform-document/docs/next/saas-operation-console/price-plan/price-plan-setting-004"},next:{title:"Setting Up Bank Account From Seller Registration",permalink:"/saasus-platform-document/docs/next/aws-marketplace-integration/aws-marketplace-seller-registration"}},s={},p=[{value:"Entire Flow of Listing Procedure",id:"entire-flow-of-listing-procedure",level:3},{value:"SaaSus Platform&#39;s Check",id:"saasus-platforms-check",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'The AWS Marketplace integration function supports the "AWS Marketplace listing process" carried out by the "SaaS created using the SaaSus Platform".'),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please note that listing cannot be completed solely by operating within the SaaSus Platform.")),(0,n.kt)("h1",{id:"listing-process-by-saasus-platform"},"Listing Process by SaaSus Platform"),(0,n.kt)("p",null,"Screen operations are required in three services in the listing procedure. Please proceed while paying attention to which service to process."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS"),(0,n.kt)("li",{parentName:"ul"},"AWS Marketplace Management Portal"),(0,n.kt)("li",{parentName:"ul"},"SaaSus Platform")),(0,n.kt)("p",null,"First, perform a procedure called seller registration on AWS. Please prepare your AWS account in advance for seller registration.\nAfter registration, you will be able to access the AWS Marketplace Management Portal (AMMP), where you will set up your public profile and bank account for transfer.\nWhen these procedures are completed, you will proceed with the listing process using the AWS Marketplace integration function on the SaaSus Platform.\nFrom here on, the procedure will be through the staging environment and the production environment provided by the SaaSus Platform.\nBecause it's hard to imagine from text, we will introduce the flow to listing in an overall diagram and related documents from here."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"the whole picture",src:a(89508).Z,width:"2622",height:"934"})),(0,n.kt)("h3",{id:"entire-flow-of-listing-procedure"},"Entire Flow of Listing Procedure"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Seller registration (AWS)"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/aws-marketplace-seller-registration/aws-marketplace-seller-registration"},"Seller Registration Guide")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Setting of Public profile and bank account (AMMP)"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/aws-marketplace-seller-registration/public-profile-settings"},"Guide to setting the Public profile")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/aws-marketplace-seller-registration/tax-information-interview"},"How to start setting the bank account"))),(0,n.kt)("hr",{parentName:"li"}),(0,n.kt)("p",{parentName:"li"},"===",(0,n.kt)("strong",{parentName:"p"},"Start of Test Phase"),"===")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Preparation of SaaS product for testing (SaaSus Platform:: Staging environment)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Registration of SaaS product for testing (AMMP)"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/product-submission"},"How to start registration")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Preparation of API integration (SaaSus Platform:: Staging environment)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirmation of  integration with AWS Marketplace"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/supplementary/integration-test"},"Example of integration confirmation"))),(0,n.kt)("p",{parentName:"li"},"===",(0,n.kt)("strong",{parentName:"p"},"End of Test Phase"),"==="),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"During the test phase, you will create an environment for integration confirmation just before listing.\nYou will also create a similar environment in the production phase, but this environment can be used for testing even after the listing process is complete, so you can use it for additional feature development and troubleshooting when a malfunction occurs.")),(0,n.kt)("hr",{parentName:"li"}),(0,n.kt)("p",{parentName:"li"},"===",(0,n.kt)("strong",{parentName:"p"},"Start of Production Phase"),"===")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Preparation of SaaS product for production (SaaSus Platform:: Production environment)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Registration of SaaS product for production (AMMP)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Preparation of API integration (SaaSus Platform:: Production environment)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirmation of integration with AWS Marketplace"),(0,n.kt)("p",{parentName:"li"},"===",(0,n.kt)("strong",{parentName:"p"},"End of Production Phase"),"==="),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The production phase involves creating the environment necessary for listing in the production environment. If you have finished the integration check in the test phase, you can proceed smoothly. Once the listing process is complete, charges will actually be incurred, so if you want to check the operation in the production environment, you need to make the SaaS product private.")),(0,n.kt)("hr",{parentName:"li"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Final review request for SaaS product for production"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/supplementary/final-review-request"},"How torequest")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Public release request for SaaS product for production"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/supplementary/public-request"},"Request Method"))))),(0,n.kt)("h1",{id:"criteria-for-saas-products-in-listing"},"Criteria for SaaS Products in Listing"),(0,n.kt)("p",null,"There are criteria for listing SaaS products on the AWS Marketplace, which are published in the official documents. Please make sure to check them in advance."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/marketplace/latest/userguide/saas-guidelines.html"},"SaaS Product Guidelines")),(0,n.kt)("h2",{id:"saasus-platforms-check"},"SaaSus Platform's Check"),(0,n.kt)("p",null,"Based on the SaaS product guidelines, we will check from the SaaSus Platform whether the standards are met. We check it when using the AWS Marketplace integration function, but we will also post it in the document so please check it."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Self sign-up is enabled in SaaSus's authentication detail setting (",(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/supplementary/self-up-setting"},"Reference"),")  "),(0,n.kt)("li",{parentName:"ul"},"Users can check the plan they have contracted for on SaaS themselves  "),(0,n.kt)("li",{parentName:"ul"},"There is a mechanism for users to contact support on SaaS  "),(0,n.kt)("li",{parentName:"ul"},"Consideration of multitenancy is implemented when a user who already has an account purchases SaaS (",(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/embedding-products"},"Reference"),")  "),(0,n.kt)("li",{parentName:"ul"},"Users who purchased from the AWS Marketplace cannot change the plan or withdraw on SaaS (",(0,n.kt)("a",{parentName:"li",href:"/docs/aws-marketplace-integration/supplementary/user-judgment-method"},"Reference"),")")))}m.isMDXComponent=!0},89508:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/the-whole-picture-222035933da917b38d16e809e053075c.png"}}]);