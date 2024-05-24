"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[272],{89284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(74848),o=a(28453);const s={title:"FAQ",slug:"faq-en",excerpt:"",hidden:!1,createdAt:"Thu Jan 19 2023 08:19:39 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},r=void 0,i={id:"faq",title:"FAQ",description:"\u25a0 Frequently Asked Questions",source:"@site/versioned_docs/version-1.10/faq.md",sourceDirName:".",slug:"/faq-en",permalink:"/docs/faq-en",draft:!1,unlisted:!1,tags:[],version:"1.10",frontMatter:{title:"FAQ",slug:"faq-en",excerpt:"",hidden:!1,createdAt:"Thu Jan 19 2023 08:19:39 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"SaaSus Platform Document",permalink:"/docs/saasus-platform-document"},next:{title:"Implementing Authentication Using SaaSus Platform (API Server)",permalink:"/docs/implementation-guide/implementing-authentication-using-saasus-platform-apiserver"}},c={},l=[];function u(e){const t={a:"a",br:"br",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u25a0 Frequently Asked Questions"}),"\n",(0,n.jsxs)(t.p,{children:["Q: What can I do with the SaaSus Platform?",(0,n.jsx)(t.br,{}),"\n","A: You can use the web console to configure basic SaaS functions. By incorporating the SaaS SDK/API into the web application built by the customer, the basic functions of SaaS will be incorporated into the customer's SaaS based on the settings made on the web console. This reduces development and ongoing operating costs for basic SaaS functionality."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: What are the basic functions of SaaS?",(0,n.jsx)(t.br,{}),"\n","A: As of January 2023, you can use the following functions tenant management, user management, login screen creation, role management, billing plan, and billing (Stripe linkage) for multi-tenant SaaS."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: What kind of features will be implemented in the future?",(0,n.jsx)(t.br,{}),"\n","A: Please refer to ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/saasus-platform/projects/1",children:"public roadmap here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: Are the contents of the web console in Japanese?",(0,n.jsx)(t.br,{}),"\n","A: Currently, only available in Japanese. We are planning to release an English version in the near future."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: This is my first time creating SaaS, is that okay?",(0,n.jsx)(t.br,{}),"\n","A: If you can create a general web application, you can start using it without any knowledge of SaaS. For SaaS-specific parts, we have designed it so that you can understand it better by reading the web console and operation manual."]}),"\n",(0,n.jsxs)(t.p,{children:["Q",":What"," programming languages is the SDK available?",(0,n.jsx)(t.br,{}),"\n","A: The ones currently provided are for PHP (Laravel) and TypeScript (Node.js). In the future, we plan to provide SDKs for Ruby (Ruby on Rails), Java (Spring), and Go (Echo)."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: How do you use the SDK and incorporate it into your own SaaS?",(0,n.jsx)(t.br,{}),"\n","A: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=deSkPJ-zTgw",children:"This demo video"})," and ",(0,n.jsx)(t.a,{href:"./tutorial/prepare-the-sample-application",children:"Tutorial"}),". In the tutorial, you can actually incorporate the SaaSus SDK code into a normal web chat application and experience multi-tenant SaaS using the SaaSus Platform."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: What kind of APIs are available?",(0,n.jsx)(t.br,{}),"\n","A: Please refer to ",(0,n.jsx)(t.a,{href:"./reference/getting-started-with-your-api",children:"this API manual"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: How should I send feature development requests?",(0,n.jsx)(t.br,{}),"\n","A: You can now access the feature development request form from the web console. Please send it through there."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: Is the SaaSus Platform multi-tenant?",(0,n.jsx)(t.br,{}),"\n","A: Yes. The SaaSus Platform itself is created using the SaaSus Platform."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: How does the SaaSus Platform protect data?",(0,n.jsx)(t.br,{}),"\n","A: The SaaS Platform uses the Amazon Web Services (AWS) Japan region as its infrastructure. Customer accounts using the SaaS Platform are designed to be fully separate AWS accounts, with data segregation at the AWS account level. In addition, data is encrypted when stored. Therefore, when you self-sign up for the SaaSus Platform, it takes at least one hour to prepare your AWS account automatically. If self-signup is crowded, it may take longer to prepare."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: Is it possible to use separate accounts for development and production?",(0,n.jsx)(t.br,{}),"\n","A: In the free plan, only one account for development is accounted. In the standard plan, three environments, development, staging, and production, are accounted for on each SaaSus Platform account."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: What should I do if I want to cancel the SaaSus Platform?",(0,n.jsx)(t.br,{}),"\n","A: Cancellation is completed by completing and sending the cancellation form from the web console. AWS accounts for canceled customer accounts will be closed."]}),"\n",(0,n.jsxs)(t.p,{children:["Q: Can I withdraw my data when I cancel my SaaSus Platform?",(0,n.jsx)(t.br,{}),"\n","A: It is possible to withdraw the data using the SaaSus API. Also, as a SaaS Platform cancelation plan, we are considering a plan to transfer the ownership of the AWS account for the customer account to the customer with the data still included. Therefore, if the growth rate of customer SaaS is much faster than the growth rate of SaaSus Platform, it will be possible to switch the part covered by SaaSus Platform to your own implementation."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(96540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);