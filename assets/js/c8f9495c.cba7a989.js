"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[4672],{32676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=n(74848),s=n(28453);const i={title:"Manage Rate Plans",slug:"manage-rate-plans",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:46:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},r=void 0,d={id:"tutorial/manage-rate-plans/manage-rate-plans",title:"Manage Rate Plans",description:"The first step of pricing, metering, and billing using the SaaSus Platform",source:"@site/versioned_docs/version-1.10/tutorial/manage-rate-plans/manage-rate-plans.md",sourceDirName:"tutorial/manage-rate-plans",slug:"/tutorial/manage-rate-plans/manage-rate-plans",permalink:"/docs/tutorial/manage-rate-plans/manage-rate-plans",draft:!1,unlisted:!1,tags:[],version:"1.10",frontMatter:{title:"Manage Rate Plans",slug:"manage-rate-plans",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:46:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",permalink:"/docs/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant"},next:{title:"Setting measurement units, feature menus, and pricing plans",permalink:"/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans"}},a={},c=[{value:"The first step of pricing, metering, and billing using the SaaSus Platform",id:"the-first-step-of-pricing-metering-and-billing-using-the-saasus-platform",level:2},{value:"Creating a Pricing Plan Using the SaaSus Development Console",id:"creating-a-pricing-plan-using-the-saasus-development-console",level:3},{value:"Measurement Unit",id:"measurement-unit",level:4},{value:"Basic Pricing",id:"basic-pricing",level:5},{value:"Free Plan",id:"free-plan",level:5},{value:"Basic plan",id:"basic-plan",level:5},{value:"Advanced Plan",id:"advanced-plan",level:5},{value:"Enterprise Plan",id:"enterprise-plan",level:5},{value:"Feature Menu",id:"feature-menu",level:4},{value:"Pricing Plan",id:"pricing-plan",level:4},{value:"Linking Billing Using the SaaSus Development Console",id:"linking-billing-using-the-saasus-development-console",level:3},{value:"Applying Rate Plans to Tenants",id:"applying-rate-plans-to-tenants",level:3}];function h(e){const t={a:"a",br:"br",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"the-first-step-of-pricing-metering-and-billing-using-the-saasus-platform",children:"The first step of pricing, metering, and billing using the SaaSus Platform"}),"\n",(0,l.jsx)(t.h3,{id:"creating-a-pricing-plan-using-the-saasus-development-console",children:"Creating a Pricing Plan Using the SaaSus Development Console"}),"\n",(0,l.jsx)(t.p,{children:"Log in to the SaaSus Development Console on the SaaSus Platform and set up a pricing plan."}),"\n",(0,l.jsx)(t.p,{children:"The SaaS Platform allows the creation of pricing plans that support subscription and pay-as-you-go models."}),"\n",(0,l.jsx)(t.p,{children:"For example, create a pricing plan like this:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Free plan","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Number of users Max 2"}),"\n",(0,l.jsx)(t.li,{children:"Number of comments Max 10"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["Basic plan","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Fixed fee 500 yen"}),"\n",(0,l.jsx)(t.li,{children:"Max 5 users"}),"\n",(0,l.jsxs)(t.li,{children:["Number of comments pay-as-you-go","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Up to 10 comments, 0 yen"}),"\n",(0,l.jsx)(t.li,{children:"From 11 comments to 100 comments, 500 yen"}),"\n",(0,l.jsx)(t.li,{children:"Max 100 comments"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["Advanced plan","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Fixed fee 3,000 yen"}),"\n",(0,l.jsx)(t.li,{children:"Number of users Max 10"}),"\n",(0,l.jsxs)(t.li,{children:["Number of comments pay-as-you-go","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Up to 10 comments, 5 yen per comment"}),"\n",(0,l.jsx)(t.li,{children:"From 11 to 100 comments, 2 yen per comment"}),"\n",(0,l.jsx)(t.li,{children:"101 comments ~ 1 yen per comment"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["Enterprise plan","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Fixed fee 50,000 yen"}),"\n",(0,l.jsx)(t.li,{children:"Number of users Free"}),"\n",(0,l.jsx)(t.li,{children:"Number of comments Free"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Plan"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Basic Charge"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Number of Users (MAX)"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Number of Comments"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"2 people"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"10"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"500 yen"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"5 people"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Pay-as-you-go",(0,l.jsx)("br",{})," 0 yen: Up to 10 comments",(0,l.jsx)("br",{})," 500 yen: 11 to 100 comments",(0,l.jsx)("br",{})," Up to 100 comments"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3,000 yen"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"10 people"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Pay-as-you-go (per comment)",(0,l.jsx)("br",{})," 5 yen: 0-10 comments",(0,l.jsx)("br",{})," 2 yen: 11-100 comments ",(0,l.jsx)("br",{})," 1 yen: 101 comments ~"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"50,000 Yen"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Unlimited"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Unlimited"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["*Since this is a tutorial, the price plan is complicated, but unless absolutely necessary a complex pricing plan is not recommended.",(0,l.jsx)(t.br,{}),"\n","SaaS usage fees should not be based on cost, but based on how much value customers can receive.",(0,l.jsx)(t.br,{}),"\n","Therefore, complex pricing imposes complex calculations and forecasts on customers, and while using SaaS reduces the burden on customers, it places a burden on pricing calculations and forecasts.",(0,l.jsx)(t.br,{}),"\n","Therefore, create a pricing plan that is as simple and easy to understand as possible."]}),"\n",(0,l.jsx)(t.p,{children:"To define such a pricing plan in the SaaSus Platform,"}),"\n",(0,l.jsx)(t.p,{children:"Measurement Unit"}),"\n",(0,l.jsx)(t.p,{children:"\u30fbUnit for measuring usage and charging"}),"\n",(0,l.jsx)(t.p,{children:"Feature Menu"}),"\n",(0,l.jsx)(t.p,{children:"\u30fbA unit provided as a feature by combining measurement units"}),"\n",(0,l.jsx)(t.p,{children:"Rate plan"}),"\n",(0,l.jsx)(t.p,{children:"\u30fbPlan units linked to tenants"}),"\n",(0,l.jsx)(t.p,{children:"Create units of"}),"\n",(0,l.jsx)(t.p,{children:"For example,"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Advanced plan","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Fixed fee 3,000 yen"}),"\n",(0,l.jsx)(t.li,{children:"Number of users Max 10"}),"\n",(0,l.jsxs)(t.li,{children:["Number of comments pay-as-you-go","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Up to 10 comments, 5 yen per comment"}),"\n",(0,l.jsx)(t.li,{children:"From 11 to 100 comments, 2 yen per comment"}),"\n",(0,l.jsx)(t.li,{children:"101 comments ~ 1 yen per comment"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"If you set"}),"\n",(0,l.jsx)(t.p,{children:"The measurement unit as"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Advanced fixed unit 3,000 yen"}),"\n",(0,l.jsx)(t.li,{children:"Number of users Max10 Usage unit 0 yen"}),"\n",(0,l.jsxs)(t.li,{children:["Number of comments tiered usage units","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Up to 10 comments, 5 yen per comment"}),"\n",(0,l.jsx)(t.li,{children:"From 11 to 100 comments, 2 yen per comment"}),"\n",(0,l.jsx)(t.li,{children:"101 comments ~ 1 yen per comment"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Create three units called"}),"\n",(0,l.jsx)(t.p,{children:"The feature menu is"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Advanced feature menu","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Include the above three units of measure"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"The price plan is"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Advanced plan","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Include Advanced feature menu"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Use following steps."}),"\n",(0,l.jsxs)(t.p,{children:["Now, create a price plan other than the advanced plan!",(0,l.jsx)(t.br,{}),"\n","The measurement unit, feature menu, and price plan that will be created this time are as follows. Please see the video for details."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://docs.saasus.io/docs/setting-measurement-units-function-menus-and-price-plans",children:"See here for the setting contents (image) of the measurement unit, feature menu, and price plan settings."})}),"\n",(0,l.jsxs)(t.p,{children:["*The only plans required for this tutorial are the ",(0,l.jsx)(t.strong,{children:"Free Plan"})," and ",(0,l.jsx)(t.strong,{children:"Basic Plan"}),".The Advanced Plan and Enterprise Plan are listed as examples of other settings that can be made."]}),"\n",(0,l.jsx)(t.h4,{id:"measurement-unit",children:"Measurement Unit"}),"\n",(0,l.jsx)(t.h5,{id:"basic-pricing",children:"Basic Pricing"}),"\n",(0,l.jsx)(t.p,{children:"Measurement Unit: Fixed Units"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Amount"}),(0,l.jsx)(t.th,{style:{textAlign:"left"}}),(0,l.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"basic_base"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic Plan Base Fee"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic Plan Base Fee"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Month"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"advanced_base"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced Plan Base Fee"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced Plan Base Fee"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"3000"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Month"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"enterprise_base"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise Plan Base Fee"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise Plan Base Fee"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"50000"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Month"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]})]})]}),"\n",(0,l.jsx)(t.h5,{id:"free-plan",children:"Free Plan"}),"\n",(0,l.jsx)(t.p,{children:"Measurement Unit: Usage Unit"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target Meter Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Amount per Unit Usage"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Limit"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Currency"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"free_user"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Free Plan users"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Free Plan users"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"user_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"free_comment"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Free Plan comments"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Free Plan comments"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"comment_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"10"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]})]})]}),"\n",(0,l.jsx)(t.h5,{id:"basic-plan",children:"Basic plan"}),"\n",(0,l.jsx)(t.p,{children:"Measurement Unit: Usage Unit"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target Meter Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Amount per Unit Usage"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Limit"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Currency"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"basic_user"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Basic plan users"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Basic plan users"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"user_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]})})]}),"\n",(0,l.jsx)(t.p,{children:"Unit of Measure: Tiered Unit"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement  Unit Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target Meter Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Range"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Limit"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Currency"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"basic_comment"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of comments for Basic plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of comments for Basic plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"comment_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"See table below"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"100"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"JPY"})]})})]}),"\n",(0,l.jsx)(t.p,{children:"Range"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"More than"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Less than"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Unit amount"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Fixed amount"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"10"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"59"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1000"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"51"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1500"})]})]})]}),"\n",(0,l.jsx)(t.h5,{id:"advanced-plan",children:"Advanced Plan"}),"\n",(0,l.jsxs)(t.p,{children:["Measurement Unit",":Usage"," Unit"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target Meter Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Amount per Unit Usage"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Limit"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Currency"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"advanced_user"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Advanced plan users"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of Advanced plan users"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"user_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"10"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]})})]}),"\n",(0,l.jsx)(t.p,{children:"Measurement Unit: Tiered Usage Unit"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target Meter Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Currency"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Range"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Limit"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"advanced_comment"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"number of comments in Advanced plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"number of comments in Advanced plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"comment_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"see table below"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]})})]}),"\n",(0,l.jsx)(t.p,{children:"Range"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"More than"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Less than"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Unit Amount"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Fixed Amount"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"10"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"100"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"101"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]})]})]}),"\n",(0,l.jsx)(t.h5,{id:"enterprise-plan",children:"Enterprise Plan"}),"\n",(0,l.jsx)(t.p,{children:"Measurement Unit: Usage Unit"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target Meter Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Amount per Unit Usage"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Limit"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Currency"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"enterprise_user"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan user count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan user count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"user_count"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"enterprise_comment"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise Plan Comments"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise Plan Comments"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"user_comment"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"JPY"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"feature-menu",children:"Feature Menu"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Feature Menu Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Feature Menu Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Feature Menu Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement Unit"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"free_menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free plan basic menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free plan basic menu"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Free plan users",(0,l.jsx)("br",{}),"Free plan comments"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"basic_menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic plan basic menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic plan basic menu"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Basic plan basic fee",(0,l.jsx)("br",{}),"Basic plan users",(0,l.jsx)("br",{}),"Basic plan comments"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"advanced_menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced plan basic menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced plan basic menu"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Advanced plan basic fee",(0,l.jsx)("br",{}),"Advanced plan users",(0,l.jsx)("br",{}),"Advanced plan comments"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"enterprise_menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan basic menu"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan basic menu"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Enterprise plan basic fee",(0,l.jsx)("br",{}),"Enterprise plan users",(0,l.jsx)("br",{}),"Enterprise plan comments"]})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"pricing-plan",children:"Pricing Plan"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Pricing Plan Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Pricing Plan Display Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Pricing Plan Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Feature Menu"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Free plan basic menu"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic Plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic Plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic Plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Basic Plan Basic Menu"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced plan basic menu"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise plan basic menu"})]})]})]}),"\n",(0,l.jsx)("iframe",{className:"embedly-embed",src:"https://www.youtube.com/embed/deSkPJ-zTgw?start=257&feature=oembed",width:"854",height:"480",scrolling:"no",title:"YouTube embed",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"true"}),"\n",(0,l.jsx)(t.h3,{id:"linking-billing-using-the-saasus-development-console",children:"Linking Billing Using the SaaSus Development Console"}),"\n",(0,l.jsx)(t.p,{children:"Next, set up billing."}),"\n",(0,l.jsx)(t.p,{children:"It is also possible to implement billing processing independently based on the billing plans and usage information for each tenant."}),"\n",(0,l.jsxs)(t.p,{children:["However, there are already SaaS that exists in the world to make billing easy.",(0,l.jsx)(t.br,{}),"\n","In the same way that you can easily build and operate SaaS using the SaaS Platform, you can offload the effort of building and operating to SaaS by actively using a convenient SaaS.",(0,l.jsx)(t.br,{}),"\n","Therefore, this time we will use Stripe, which is one of the billing SaaS."]}),"\n",(0,l.jsxs)(t.p,{children:["\u3000",(0,l.jsx)(t.strong,{children:"If you do not want to connect  Stripe, you can skip this step"})]}),"\n",(0,l.jsx)(t.p,{children:'From the side menu, click "External linkage"'}),"\n",(0,l.jsx)(t.p,{children:"Enter your Stripe secret key and click the Save button."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(73967).A+"",width:"1292",height:"826"})}),"\n",(0,l.jsxs)(t.p,{children:["You are now ready to integrate with Stripe.",(0,l.jsx)(t.br,{}),"\n","The price plan created above should be linked to Stripe."]}),"\n",(0,l.jsx)(t.p,{children:"Also, if an operation is performed that involves a pricing plan, it will be linked to Stripe."}),"\n",(0,l.jsx)(t.p,{children:"As of now, pricing plan settings are complete."}),"\n",(0,l.jsx)(t.p,{children:"Apply this pricing plan to each tenant."}),"\n",(0,l.jsx)(t.h3,{id:"applying-rate-plans-to-tenants",children:"Applying Rate Plans to Tenants"}),"\n",(0,l.jsx)(t.p,{children:"Log in to the SaaS Operation Console and click Pricing Plan Settings."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(68852).A+"",width:"1554",height:"548"})}),"\n",(0,l.jsx)(t.p,{children:"Click plan settings for each tenant to change the rate plan."}),"\n",(0,l.jsx)(t.p,{children:"Set the free plan for tenant sample 1 and the basic plan for sample app tenant 2."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(89981).A+"",width:"979",height:"539"})}),"\n",(0,l.jsx)(t.p,{children:"This will change the pricing plan associated with the tenant. When working with Stripe, customer information is created on Stripe and a subscription is also created."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(28258).A+"",width:"1663",height:"615"})}),"\n",(0,l.jsx)(t.p,{children:"Now, use the pricing and metering information set up so far to implement the first step of authorization processing in the application."})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},73967:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/manage-rate-plans-01-88812958e17af11106c76ac1cd92784f.png"},68852:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/manage-rate-plans-02-e9d0bc4d101dc7d9e7963fb275913fbd.png"},89981:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/manage-rate-plans-03-433d5d9cfe8cacfe17e21ab5b2a9a966.png"},28258:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/manage-rate-plans-04-65f93dfc3c9d52720eef01bc7e41d25f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var l=n(96540);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);