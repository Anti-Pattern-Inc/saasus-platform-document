"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[1673],{49112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),i=n(28453);const a={title:"Tax Rate Setting",slug:"tax-rates",excerpt:"",hidden:!1,createdAt:"Fri Sep 08 2023 02:07:14 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},r=void 0,c={id:"saas-development-console/tax-rates",title:"Tax Rate Setting",description:"Tax rate settings determine the proportion and type of taxes applied to the pricing plan applied to each tenant.",source:"@site/docs/saas-development-console/tax-rates.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/tax-rates",permalink:"/saasus-platform-document/docs/next/saas-development-console/tax-rates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Tax Rate Setting",slug:"tax-rates",excerpt:"",hidden:!1,createdAt:"Fri Sep 08 2023 02:07:14 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"The difference in rate calculation between Tiered units and Tiered usage units",permalink:"/saasus-platform-document/docs/next/saas-development-console/tiered_unit"},next:{title:"Google Tag Manager\u306e\u8a2d\u5b9a",permalink:"/saasus-platform-document/docs/next/saas-development-console/googletagmanagersetting"}},d={},l=[{value:"Tax Rate Setting",id:"tax-rate-setting",level:2},{value:"Setting Pricing Plan (Tax Rate) for Tenants",id:"setting-pricing-plan-tax-rate-for-tenants",level:2},{value:"Tax Rate Setting Linked with Stripe",id:"tax-rate-setting-linked-with-stripe",level:2},{value:"Sample of Invoices Issued with Stripe",id:"sample-of-invoices-issued-with-stripe",level:2}];function o(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Tax rate settings determine the proportion and type of taxes applied to the pricing plan applied to each tenant."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:['Regarding the consumption tax to be displayed on the invoice, the invoice system will start from October 1, 2023. This "invoice" refers to a bill or receipt that is exchanged between businesses and lists the amount of consumption tax, which is necessary when a business calculates the amount of consumption tax to be paid.\n',(0,s.jsx)("a",{href:"https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm",target:"_blank",children:(0,s.jsx)(t.a,{href:"https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm",children:"https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm"})})]})}),"\n",(0,s.jsx)(t.h2,{id:"tax-rate-setting",children:"Tax Rate Setting"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Select Pricing Plan->Tax Rate Settings from the SaaS Development Console"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-1",src:n(75134).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Click on Create Tax Rate"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-2",src:n(11861).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Setup the tax rate in Create Tax Rate\nTax Rate Name: Define a name for identification by the program. Duplicate names cannot be created.\nDisplay Name: Specify the name of the tax rate. It will be displayed on the invoice created in Stripe if connected with Stripe.\nDescription: Define a clear description for humans to understand the tax rate.\nPercentage: Numeric value indicating the tax rate to be collected.\nCountry: Define the country where the tax rate will be applied.\nInclusive/Exclusive: Setting whether the tax rate is included in the amount or not.","\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"Please note that once a tax rate is created, it cannot be changed or deleted."})}),"\n","After setting up the above details, click on the Create button."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-3",src:n(236).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-4",src:n(49635).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsx)(t.h2,{id:"setting-pricing-plan-tax-rate-for-tenants",children:"Setting Pricing Plan (Tax Rate) for Tenants"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Setting up Billing Address"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Input the billing information before setting up the pricing plan for the tenant.\nOpen the tenant management screen and click the edit button for the target tenant."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-5",src:n(59802).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsx)(t.p,{children:"Enter the billing information and save it in Billing Information Edit mode."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-6",src:n(19697).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Select Pricing Plan Settings from the SaaS Operation Console"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-7",src:n(71304).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"In Pricing Plan Setting, click Plan Setup for the tenant"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-8",src:n(34719).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Set Plan/Tax Rate for the tenant"})}),"\nOn the Pricing Plan Settings screen, set up the pricing plan and the consumption tax rate that you set up in the SaaS Development Console, then save it."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-9",src:n(80918).A+"",width:"3360",height:"2100"})}),"\n",(0,s.jsx)(t.h2,{id:"tax-rate-setting-linked-with-stripe",children:"Tax Rate Setting Linked with Stripe"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Setting a tax rate linked with Stripe"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following information set up in SaaS Development Console will be linked to each item in Stripe:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Stripe"}),(0,s.jsx)(t.th,{children:"SaaS Operation Console"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"Tax Rate Name"}),(0,s.jsx)(t.td,{children:"Definition for identification by the program"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:"Display Name"}),(0,s.jsx)(t.td,{children:"Name of the tax rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Description of the rate"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rate"}),(0,s.jsx)(t.td,{children:"Percentage"}),(0,s.jsx)(t.td,{children:"Numeric value indicating the tax rate to be collected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Region"}),(0,s.jsx)(t.td,{children:"Country"}),(0,s.jsx)(t.td,{children:"Country where the tax rate will apply"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rate"}),(0,s.jsx)(t.td,{children:"Inclusive/Exclusive"}),(0,s.jsx)(t.td,{children:"Setting whether the tax rate is included in the amount or not"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-10",src:n(24252).A+"",width:"2394",height:"596"})}),"\n",(0,s.jsx)(t.h2,{id:"sample-of-invoices-issued-with-stripe",children:"Sample of Invoices Issued with Stripe"}),"\n",(0,s.jsx)(t.p,{children:"Here we present samples of invoices for the patterns of inclusive, exclusive, and unset.\nPlease check how the invoices will be generated."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Issued Invoice Inclusive Tax"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"INVOICE"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-11",src:n(76517).A+"",width:"2816",height:"1130"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Invoice PDF"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-12",src:n(48686).A+"",width:"1544",height:"1258"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Issued Invoice Exclusive Tax"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"INVOICE"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-13",src:n(48183).A+"",width:"2808",height:"1070"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Invoice PDF"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-14",src:n(26040).A+"",width:"1534",height:"1298"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Issued Invoice Unset"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"INVOICE"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-15",src:n(47169).A+"",width:"2796",height:"1110"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Invoice PDF"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tax-rates-16",src:n(6090).A+"",width:"1542",height:"1234"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75134:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-1-f5746dfa7340983b58b5b41b97b723c9.png"},24252:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-10-5b7ab5de2dd405fe9f90ae330b5c9c9e.png"},76517:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-11-59343cf69baef463baab077269bcfdc7.png"},48686:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-12-5eb87f9d27e69a43de166309f57fa77d.png"},48183:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-13-56b926c218a93ec09a2858a61539f043.png"},26040:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-14-4ccaeea39730b437eb9634926301b7f0.png"},47169:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-15-7c2b8365fd45639a160241a15d93f470.png"},6090:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-16-0c01495ea6edf99d851dbd2c23b7dc97.png"},11861:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-2-0233d606aa12a8927996189017c2fbab.png"},236:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-3-00f8515a1577d5f7032c5e436ebe516b.png"},49635:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-4-0f9d6db76cc40219123a5d72013f28ef.png"},59802:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-5-457718cbf08589840e3404faec1b9850.png"},19697:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-6-cc80bd3ac5355e191f0e832ba41800e7.png"},71304:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-7-a552d3c9c3ccd0aa247d1f9b6e093962.png"},34719:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-8-348367a3213b24222737b9de773e6f78.png"},80918:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tax-rates-9-e40c83890a5335039bc51df85b702403.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);