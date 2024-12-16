"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[3858],{78919:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var t=i(74848),s=i(28453);const a={title:"Implementing Authentication Using SaaSus Platform (API Server)",slug:"implementing-authentication-using-saasus-platform-apiserver",excerpt:"",hidden:!1,createdAt:"Sun Aug 06 2023 02:41:08 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Jan 17 2024 08:25:52 GMT+0000 (Coordinated Universal Time)"},l="Process Flow (Login to User List Display)",r={id:"implementation-guide/implementing-authentication-using-saasus-platform-apiserver",title:"Implementing Authentication Using SaaSus Platform (API Server)",description:"When configuring the backend as an API server, the following implementations are necessary:",source:"@site/versioned_docs/version-1.11/implementation-guide/implementing-authentication-using-saasus-platform-apiserver.md",sourceDirName:"implementation-guide",slug:"/implementation-guide/implementing-authentication-using-saasus-platform-apiserver",permalink:"/docs/implementation-guide/implementing-authentication-using-saasus-platform-apiserver",draft:!1,unlisted:!1,tags:[],version:"1.11",frontMatter:{title:"Implementing Authentication Using SaaSus Platform (API Server)",slug:"implementing-authentication-using-saasus-platform-apiserver",excerpt:"",hidden:!1,createdAt:"Sun Aug 06 2023 02:41:08 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Jan 17 2024 08:25:52 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"FAQ",permalink:"/docs/faq-en"},next:{title:"Implementation using SaaSus Platform (Serverless)",permalink:"/docs/implementation-guide/implementing-authentication-using-saasus-serverless"}},o={},m=[{value:"1. Frontend Implementation",id:"1-frontend-implementation",level:2},{value:"1.1. Description of the Implementation Sample",id:"11-description-of-the-implementation-sample",level:3},{value:"1.1.1. Post-Authentication Redirect Screen",id:"111-post-authentication-redirect-screen",level:4},{value:"1.1.2. Self-Signup Screen",id:"112-self-signup-screen",level:4},{value:"1.1.3. User List Screen (Homepage)",id:"113-user-list-screen-homepage",level:4},{value:"1.2. How to Use the Implementation Sample",id:"12-how-to-use-the-implementation-sample",level:3},{value:"2. Backend Implementation",id:"2-backend-implementation",level:2},{value:"2.1. Description of the Implementation Sample",id:"21-description-of-the-implementation-sample",level:3},{value:"2.1.1. JWT Retrieval API",id:"211-jwt-retrieval-api",level:4},{value:"2.1.2. User Information Retrieval API",id:"212-user-information-retrieval-api",level:4},{value:"2.1.3. Self-Signup API",id:"213-self-signup-api",level:4},{value:"2.1.4. User List Retrieval API",id:"214-user-list-retrieval-api",level:4},{value:"2.2. How to use the implementation example",id:"22-how-to-use-the-implementation-example",level:4}];function p(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When configuring the backend as an API server, the following implementations are necessary:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Store the token (JWT), which is the authentication information for the SaaSus Platform, in the browser's local storage."}),"\n",(0,t.jsx)(n.li,{children:"SaaS Platform users authenticate themselves using JWT."}),"\n",(0,t.jsx)(n.li,{children:"The frontend is implemented with React, Vue.js, etc."}),"\n",(0,t.jsx)(n.li,{children:"The backend API server is implemented in PHP / TypeScript / Go / Python / C# / JAVA, etc."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"process-flow-login-to-user-list-display",children:"Process Flow (Login to User List Display)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SaaSus Platform API Process Flow",src:i(19239).A+"",width:"1058",height:"1036"})}),"\n",(0,t.jsx)(n.h1,{id:"implementation-sample",children:"Implementation Sample"}),"\n",(0,t.jsx)(n.h2,{id:"1-frontend-implementation",children:"1. Frontend Implementation"}),"\n",(0,t.jsx)(n.h3,{id:"11-description-of-the-implementation-sample",children:"1.1. Description of the Implementation Sample"}),"\n",(0,t.jsx)(n.h4,{id:"111-post-authentication-redirect-screen",children:"1.1.1. Post-Authentication Redirect Screen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx",children:"React implementation sample"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-vue/blob/main/src/views/Callback.vue",children:"Vue.js implementation sample"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When you log in from the login screen generated by the SaaSus Platform, the URL set as the post-authentication redirect is called."}),"\n",(0,t.jsxs)(n.p,{children:["To perform a test run using this implementation sample, set it as ",(0,t.jsx)(n.code,{children:"http://localhost:3000/callback"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Post-Authentication Redirect",src:i(81751).A+"",width:"2464",height:"736"})}),"\n",(0,t.jsx)(n.p,{children:"At the post-authentication redirect, a temporary code necessary for obtaining authentication information is passed in the query parameter (code=xxxxx). Implement the process to obtain JWT using this temporary code and save it in local storage."}),"\n",(0,t.jsx)(n.h4,{id:"112-self-signup-screen",children:"1.1.2. Self-Signup Screen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"React implementation sample (In preparation)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It is necessary to check if the user is logged in, so call the API to get user information and confirm that the user is logged in.",(0,t.jsx)(n.br,{}),"\n","Use the JWT stored in local storage for the API call.",(0,t.jsx)(n.br,{}),"\n","By being able to obtain user information, you can confirm that the user is logged in."]}),"\n",(0,t.jsxs)(n.p,{children:["The process for self-signup should be implemented according to whether self-signup is used or not.",(0,t.jsx)(n.br,{}),"\n","If self-signup is not used, the screen for self-signup is not needed."]}),"\n",(0,t.jsxs)(n.p,{children:["If self-signup is used, the process for self-signup will only be executed during the first login.",(0,t.jsx)(n.br,{}),"\n","Whether it is the first login can be determined by whether the logging-in user is linked to a tenant."]}),"\n",(0,t.jsx)(n.h4,{id:"113-user-list-screen-homepage",children:"1.1.3. User List Screen (Homepage)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx",children:"React implementation sample"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-vue/blob/main/src/views/UserPage.vue",children:"Vue.js implementation sample"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Regarding the use of user information obtained from the /userinfo endpoint:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tenants array"}),":",(0,t.jsx)(n.br,{}),"\n","In the design of your SaaS,",(0,t.jsx)(n.br,{}),"\n","if it is fixed to 1 tenant per 1 user, use ",(0,t.jsx)(n.code,{children:"tenants[0]"})," fixed.",(0,t.jsx)(n.br,{}),"\n","If a user belongs to multiple tenants, it is necessary to decide which tenant to use.",(0,t.jsx)(n.br,{}),"\n","Example: Users linked to multiple tenants will see a tenant selection screen after logging in to choose a tenant."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"envs array"}),":",(0,t.jsx)(n.br,{}),"\n","id(name)\u30101(dev), 2(stg), 3(prod)\u3011",(0,t.jsx)(n.br,{}),"\n","dev, stg, prod do not refer to your SaaS's environments.",(0,t.jsx)(n.br,{}),"\n","Example: In your SaaS's production environment, if users use test users as a sandbox, use 1(dev), 2(stg). Normally, use 3(prod)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"roles array"}),":",(0,t.jsx)(n.br,{}),"\n","In the design of your SaaS,",(0,t.jsx)(n.br,{}),"\n","if it is fixed to 1 role per 1 user, use ",(0,t.jsx)(n.code,{children:"roles[0]"})," fixed.",(0,t.jsx)(n.br,{}),"\n","If a user has multiple roles, an implementation to check all roles is needed.",(0,t.jsx)(n.br,{}),"\n","Example: If it is possible to assign two permissions such as a general user and administrator,",(0,t.jsx)(n.br,{}),"\n","when displaying an admin-only management screen, an implementation to reference all roles is needed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-how-to-use-the-implementation-sample",children:"1.2. How to Use the Implementation Sample"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md",children:"React"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-vue/blob/main/README.md",children:"Vue.js"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-backend-implementation",children:"2. Backend Implementation"}),"\n",(0,t.jsx)(n.h3,{id:"21-description-of-the-implementation-sample",children:"2.1. Description of the Implementation Sample"}),"\n",(0,t.jsx)(n.h4,{id:"211-jwt-retrieval-api",children:"2.1.1. JWT Retrieval API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go#L82",children:"Go(echo) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'e.GET("/credentials", getCredentials)'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py#L48",children:"Python(FastAPI) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'@app.get("/credentials")'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java#L36",children:"Java(Maven) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'@GetMapping(value = "/credentials", produces = "application/json")'})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"212-user-information-retrieval-api",children:"2.1.2. User Information Retrieval API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go#L144",children:"Go(echo) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'e.GET("/userinfo", getMe, authMiddleware)'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py#L53",children:"Python(FastAPI) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'@app.get("/userinfo")'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java#L82",children:"Java(Maven) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'@GetMapping(value = "/userinfo", produces = "application/json")'})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"213-self-signup-api",children:"2.1.3. Self-Signup API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go(echo) implementation sample (Preparation in progress)"}),"\n",(0,t.jsx)(n.li,{children:"Python implementation sample (Preparation in progress)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In order to confirm that the API request is from the user who logged into the SaaSus Platform, it is always necessary to confirm the login by retrieving the user information. The self-signup process is as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Prerequisite) The user who self-signs up becomes the administrator of the new tenant:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a. Tenant creation"}),"\n",(0,t.jsx)(n.li,{children:"b. Link the logged-in user to the created tenant"}),"\n",(0,t.jsx)(n.li,{children:"c. Set the logged-in user as the admin of the tenant"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"214-user-list-retrieval-api",children:"2.1.4. User List Retrieval API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go#L156",children:"Go(echo) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'e.GET("/users", getUsers, authMiddleware)'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py#L58",children:"Python(FastAPI) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'@app.get("/users")'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java#L82",children:"Java(Maven) implementation sample"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:'@GetMapping(value = "/users", produces = "application/json")'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It is always necessary to confirm the login by retrieving the user information to verify that the API request originates from the user that is logged into SaaSus Platform."}),"\n",(0,t.jsx)(n.h4,{id:"22-how-to-use-the-implementation-example",children:"2.2. How to use the implementation example"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md",children:"Go(echo)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-python",children:"Python(FastAPI)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-api-java",children:"Java(Maven)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19239:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SaaSus_PlatformAPI-3b5185c7651e9035721f720bd05955e0.png"},81751:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-02-6c182132c9826cede4a323a0bfc95320.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);