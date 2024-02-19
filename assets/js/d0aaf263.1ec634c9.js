"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[3452],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(a),g=r,u=m["".concat(o,".").concat(g)]||m[g]||d[g]||i;return a?n.createElement(u,s(s({ref:e},c),{},{components:a})):n.createElement(u,s({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=g;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[m]="string"==typeof t?t:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},94763:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Tax Rate Setting",slug:"tax-rates",excerpt:"",hidden:!1,createdAt:"Fri Sep 08 2023 02:07:14 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},s=void 0,l={unversionedId:"saas-development-console/tax-rates",id:"version-1.6/saas-development-console/tax-rates",title:"Tax Rate Setting",description:"Tax rate settings determine the proportion and type of taxes applied to the pricing plan applied to each tenant.",source:"@site/versioned_docs/version-1.6/saas-development-console/tax-rates.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/tax-rates",permalink:"/docs/saas-development-console/tax-rates",draft:!1,tags:[],version:"1.6",frontMatter:{title:"Tax Rate Setting",slug:"tax-rates",excerpt:"",hidden:!1,createdAt:"Fri Sep 08 2023 02:07:14 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"The difference in rate calculation between Tiered units and Tiered usage units",permalink:"/docs/saas-development-console/tiered_unit"},next:{title:"Google Tag Manager\u306e\u8a2d\u5b9a",permalink:"/docs/saas-development-console/googletagmanagersetting"}},o={},p=[{value:"Tax Rate Setting",id:"tax-rate-setting",level:2},{value:"Setting Pricing Plan (Tax Rate) for Tenants",id:"setting-pricing-plan-tax-rate-for-tenants",level:2},{value:"Tax Rate Setting Linked with Stripe",id:"tax-rate-setting-linked-with-stripe",level:2},{value:"Sample of Invoices Issued with Stripe",id:"sample-of-invoices-issued-with-stripe",level:2}],c={toc:p},m="wrapper";function d(t){let{components:e,...i}=t;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tax rate settings determine the proportion and type of taxes applied to the pricing plan applied to each tenant."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Regarding the consumption tax to be displayed on the invoice, the invoice system will start from October 1, 2023. This "invoice" refers to a bill or receipt that is exchanged between businesses and lists the amount of consumption tax, which is necessary when a business calculates the amount of consumption tax to be paid.'),(0,r.kt)("a",{href:"https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm",target:"_blank"},"https\\://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm")),(0,r.kt)("h2",{id:"tax-rate-setting"},"Tax Rate Setting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Select Pricing Plan->Tax Rate Settings from the SaaS Development Console")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-1",src:a(48115).Z,width:"3360",height:"2100"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Click on Create Tax Rate")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-2",src:a(17041).Z,width:"3360",height:"2100"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Setup the tax rate in Create Tax Rate\nTax Rate Name: Define a name for identification by the program. Duplicate names cannot be created.\nDisplay Name: Specify the name of the tax rate. It will be displayed on the invoice created in Stripe if connected with Stripe.\nDescription: Define a clear description for humans to understand the tax rate.\nPercentage: Numeric value indicating the tax rate to be collected.\nCountry: Define the country where the tax rate will be applied.\nInclusive/Exclusive: Setting whether the tax rate is included in the amount or not.",(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that once a tax rate is created, it cannot be changed or deleted."))," After setting up the above details, click on the Create button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-3",src:a(54597).Z,width:"3360",height:"2100"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-4",src:a(54928).Z,width:"3360",height:"2100"})),(0,r.kt)("h2",{id:"setting-pricing-plan-tax-rate-for-tenants"},"Setting Pricing Plan (Tax Rate) for Tenants"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Setting up Billing Address")))),(0,r.kt)("p",null,"Input the billing information before setting up the pricing plan for the tenant.\nOpen the tenant management screen and click the edit button for the target tenant."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-5",src:a(41821).Z,width:"3360",height:"2100"})),(0,r.kt)("p",null,"Enter the billing information and save it in Billing Information Edit mode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-6",src:a(82922).Z,width:"3360",height:"2100"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Select Pricing Plan Settings from the SaaS Operation Console")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-7",src:a(31691).Z,width:"3360",height:"2100"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"In Pricing Plan Setting, click Plan Setup for the tenant")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-8",src:a(65796).Z,width:"3360",height:"2100"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Set Plan/Tax Rate for the tenant")),"\nOn the Pricing Plan Settings screen, set up the pricing plan and the consumption tax rate that you set up in the SaaS Development Console, then save it.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-9",src:a(49189).Z,width:"3360",height:"2100"})),(0,r.kt)("h2",{id:"tax-rate-setting-linked-with-stripe"},"Tax Rate Setting Linked with Stripe"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Setting a tax rate linked with Stripe")))),(0,r.kt)("p",null,"The following information set up in SaaS Development Console will be linked to each item in Stripe:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stripe"),(0,r.kt)("th",{parentName:"tr",align:null},"SaaS Operation Console"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Tax Rate Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Definition for identification by the program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the tax rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"Numeric value indicating the tax rate to be collected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country where the tax rate will apply")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Inclusive/Exclusive"),(0,r.kt)("td",{parentName:"tr",align:null},"Setting whether the tax rate is included in the amount or not")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-10",src:a(9230).Z,width:"2394",height:"596"})),(0,r.kt)("h2",{id:"sample-of-invoices-issued-with-stripe"},"Sample of Invoices Issued with Stripe"),(0,r.kt)("p",null,"Here we present samples of invoices for the patterns of inclusive, exclusive, and unset.\nPlease check how the invoices will be generated."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Issued Invoice Inclusive Tax")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"INVOICE"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-11",src:a(80190).Z,width:"2816",height:"1130"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Invoice PDF"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-12",src:a(82999).Z,width:"1544",height:"1258"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Issued Invoice Exclusive Tax")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"INVOICE"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-13",src:a(1362).Z,width:"2808",height:"1070"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Invoice PDF"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-14",src:a(99584).Z,width:"1534",height:"1298"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Issued Invoice Unset")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"INVOICE"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-15",src:a(19372).Z,width:"2796",height:"1110"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Invoice PDF"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tax-rates-16",src:a(27785).Z,width:"1542",height:"1234"})))}d.isMDXComponent=!0},48115:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-1-f5746dfa7340983b58b5b41b97b723c9.png"},9230:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-10-5b7ab5de2dd405fe9f90ae330b5c9c9e.png"},80190:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-11-59343cf69baef463baab077269bcfdc7.png"},82999:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-12-5eb87f9d27e69a43de166309f57fa77d.png"},1362:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-13-56b926c218a93ec09a2858a61539f043.png"},99584:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-14-4ccaeea39730b437eb9634926301b7f0.png"},19372:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-15-7c2b8365fd45639a160241a15d93f470.png"},27785:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-16-0c01495ea6edf99d851dbd2c23b7dc97.png"},17041:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-2-0233d606aa12a8927996189017c2fbab.png"},54597:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-3-00f8515a1577d5f7032c5e436ebe516b.png"},54928:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-4-0f9d6db76cc40219123a5d72013f28ef.png"},41821:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-5-457718cbf08589840e3404faec1b9850.png"},82922:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-6-cc80bd3ac5355e191f0e832ba41800e7.png"},31691:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-7-a552d3c9c3ccd0aa247d1f9b6e093962.png"},65796:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-8-348367a3213b24222737b9de773e6f78.png"},49189:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tax-rates-9-e40c83890a5335039bc51df85b702403.png"}}]);