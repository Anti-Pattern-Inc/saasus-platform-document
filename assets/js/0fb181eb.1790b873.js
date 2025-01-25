"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5670],{58462:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(74848),t=s(28453);const r={sidebar_position:3,title:"SaaS Management using the SaaS Operation Console",slug:"saas-management-using-the-saas-operation-console",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:46:49 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},o=void 0,i={id:"tutorial/saas-management-using-the-saas-operation-console",title:"SaaS Management using the SaaS Operation Console",description:"Manage SaaS with SaaS Operation Console",source:"@site/versioned_docs/version-1.11/tutorial/saas-management-using-the-saas-operation-console.md",sourceDirName:"tutorial",slug:"/tutorial/saas-management-using-the-saas-operation-console",permalink:"/docs/tutorial/saas-management-using-the-saas-operation-console",draft:!1,unlisted:!1,tags:[],version:"1.11",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SaaS Management using the SaaS Operation Console",slug:"saas-management-using-the-saas-operation-console",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:46:49 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Prepare SaaS Platform",permalink:"/docs/tutorial/prepare-saas-platform"},next:{title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",permalink:"/docs/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant"}},l={},c=[{value:"Manage SaaS with SaaS Operation Console",id:"manage-saas-with-saas-operation-console",level:2},{value:"Switch Consoles",id:"switch-consoles",level:3},{value:"Create a SaaS Consumer Tenant",id:"create-a-saas-consumer-tenant",level:3},{value:"Creating SaaS Users",id:"creating-saas-users",level:3},{value:"Add Role to User",id:"add-role-to-user",level:3}];function d(e){const a={a:"a",br:"br",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"manage-saas-with-saas-operation-console",children:"Manage SaaS with SaaS Operation Console"}),"\n",(0,n.jsx)(a.h3,{id:"switch-consoles",children:"Switch Consoles"}),"\n",(0,n.jsx)(a.p,{children:"The SaaS operations console allows you to use functions for SaaS operations such as tenant management and user management."}),"\n",(0,n.jsx)(a.p,{children:'When you click "SaaS Development Console" on the left menu bar, the option of "SaaS Operation Console" will be displayed.'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"01",src:s(2657).A+"",width:"1440",height:"231"})}),"\n",(0,n.jsx)(a.p,{children:'Up until now, I believe you were logged in to the SaaS Development Console, so click "SaaS Operations Console" to switch to the SaaS Operations Console.'}),"\n",(0,n.jsx)(a.h3,{id:"create-a-saas-consumer-tenant",children:"Create a SaaS Consumer Tenant"}),"\n",(0,n.jsx)(a.p,{children:"First, let's create two tenants for the sample application."}),"\n",(0,n.jsx)(a.p,{children:'Click "Tenant Management" on the side menu'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"03",src:s(92531).A+"",width:"2996",height:"932"})}),"\n",(0,n.jsx)(a.p,{children:"Click the Create Tenant button"}),"\n",(0,n.jsx)(a.p,{children:"First example tenant"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Name: Tenant Sample 1"}),"\n",(0,n.jsxs)(a.li,{children:["Primary Email Address: ",(0,n.jsx)(a.a,{href:"mailto:saasus-sample-tenant1@example.com",children:"saasus-sample-tenant1@example.com"})]}),"\n",(0,n.jsx)(a.li,{children:"Representative's password: Temporary password that meets the requirements such as G@2qYPQq"}),"\n"]}),"\n",(0,n.jsx)("img",{src:"/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-04.png",width:"400"}),"\n",(0,n.jsx)(a.p,{children:"Second example tenant"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Name: Sample App Tenant 2"}),"\n",(0,n.jsxs)(a.li,{children:["Primary email address: ",(0,n.jsx)(a.a,{href:"mailto:saasus-sample-tenant2@example.com",children:"saasus-sample-tenant2@example.com"})]}),"\n",(0,n.jsx)(a.li,{children:"Representative's password: Temporary password that meets the requirements such as irG_l88r"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"(There are no rules to these values so others can be input)"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"05",src:s(38341).A+"",width:"2996",height:"932"})}),"\n",(0,n.jsx)(a.p,{children:"You have now created a tenant and one user for each tenant that belongs to that tenant."}),"\n",(0,n.jsx)(a.h3,{id:"creating-saas-users",children:"Creating SaaS Users"}),"\n",(0,n.jsx)(a.p,{children:"Let's take a look at the user list. Click User Management from the side menu."}),"\n",(0,n.jsx)(a.p,{children:"The user created earlier is registered as the admin (SaaS administrator) role for each tenant and each environment."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"06",src:s(50190).A+"",width:"3072",height:"1276"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Depending on the SaaS, multiple environments may not be necessary, so if you use a single environment, just take prod into consideration."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Now, let's register one user for each tenant."}),"\n",(0,n.jsx)(a.p,{children:'Click the "Create User" button on the top right'}),"\n",(0,n.jsx)(a.p,{children:"For now, let's register 4 people."}),"\n",(0,n.jsxs)(a.p,{children:["Email Address: ",(0,n.jsx)(a.a,{href:"mailto:user1-1@example.com",children:"user1-1@example.com"}),(0,n.jsx)(a.br,{}),"\n","Password: password that meets the password requirements",(0,n.jsx)(a.br,{}),"\n","Tenant: Tenant Sample 1",(0,n.jsx)(a.br,{}),"\n","Username: User 1-1"]}),"\n",(0,n.jsx)("img",{src:"/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-07.png",width:"400"}),"\n",(0,n.jsxs)(a.p,{children:["Email Address: ",(0,n.jsx)(a.a,{href:"mailto:user1-2@example.com",children:"user1-2@example.com"}),(0,n.jsx)(a.br,{}),"\n","Password: password that meets the password requirements",(0,n.jsx)(a.br,{}),"\n","Tenant: Tenant sample #1",(0,n.jsx)(a.br,{}),"\n","Username: User 1-2"]}),"\n",(0,n.jsxs)(a.p,{children:["Email Address: ",(0,n.jsx)(a.a,{href:"mailto:user2-1@example.com",children:"user2-1@example.com"}),(0,n.jsx)(a.br,{}),"\n","Password: password that meets the password requirements",(0,n.jsx)(a.br,{}),"\n","Tenant: Sample application tenant 2",(0,n.jsx)(a.br,{}),"\n","Username: User 2-1"]}),"\n",(0,n.jsxs)(a.p,{children:["Email Address: ",(0,n.jsx)(a.a,{href:"mailto:user2-2@example.com",children:"user2-2@example.com"}),(0,n.jsx)(a.br,{}),"\n","Password: password that meets the password requirements",(0,n.jsx)(a.br,{}),"\n","Tenant: Sample application tenant 2",(0,n.jsx)(a.br,{}),"\n","Username: User 2-2"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"08",src:s(42672).A+"",width:"2384",height:"472"})}),"\n",(0,n.jsx)(a.p,{children:"4 additional users have been registered."}),"\n",(0,n.jsx)(a.p,{children:"Now let's add roles to these users."}),"\n",(0,n.jsx)(a.h3,{id:"add-role-to-user",children:"Add Role to User"}),"\n",(0,n.jsx)(a.p,{children:'Click "Role Management" on the side menu'}),"\n",(0,n.jsx)(a.p,{children:"Search for the role you want to add."}),"\n",(0,n.jsx)(a.p,{children:'First, let\'s give user 1-1 and user 1-2 the role of "general user" for "development" on "tenant sample 1".'}),"\n",(0,n.jsx)(a.p,{children:"Enter the above conditions and click Search."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"09",src:s(39577).A+"",width:"3007",height:"1111"})}),"\n",(0,n.jsx)(a.p,{children:"None are displayed because there are no users with this role yet."}),"\n",(0,n.jsx)(a.p,{children:'Now, assign roles by clicking "Grant Roles to Users" on the upper right.'}),"\n",(0,n.jsx)(a.p,{children:"Select the email addresses of User 1-1 and User 1-2 and click Add"}),"\n",(0,n.jsx)("img",{src:"/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-10.png",width:"400"}),"\n",(0,n.jsx)(a.p,{children:"Role added to user"}),"\n",(0,n.jsx)(a.p,{children:'In the same way, give user 2-1 and user 2-2 the role of "general user" for "development" on "sample application tenant 2".'}),"\n",(0,n.jsx)(a.p,{children:'Let\'s check whether the role has been granted on the user management screen as well. Click "User Management" in the side menu to confirm.'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"11",src:s(50714).A+"",width:"3023",height:"1562"})}),"\n",(0,n.jsx)(a.p,{children:"Preparations for SaaS operation are now complete."}),"\n",(0,n.jsx)(a.p,{children:"Now let's turn your web application into SaaS!"})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2657:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-01-e3038a2c94ef93a4af6a9acb54eac2b0.png"},92531:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-03-b32e5973180a59e7a1765026efb7039e.png"},38341:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-05-48557a13d23f8229dba27cfe2de03184.png"},50190:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-06-625fe13ad62e420c0583dcf818bf2abb.png"},42672:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-08-a587e71a9cd526b756c027a979e2f7c4.png"},39577:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-09-7e83b212199ad50fd8c20c0fd5ed7b43.png"},50714:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/saas-management-using-the-saas-operation-console-11-5176c87e97a93084ac7b595ca7fb8378.png"},28453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>i});var n=s(96540);const t={},r=n.createContext(t);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);