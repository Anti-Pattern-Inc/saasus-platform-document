"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[9455],{61520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(74848),s=t(28453),r=t(11470),o=t(19365);const i={title:"About SaaS User Accounts",slug:"about-saas-user-accounts",excerpt:"",hidden:!1,createdAt:"Tue Aug 15 2023 16:10:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:51 GMT+0000 (Coordinated Universal Time)"},l=void 0,u={id:"usecase/about-saas-user-accounts",title:"About SaaS User Accounts",description:"This document will explain how SaaS user accounts are managed on the SaaSus Platform.",source:"@site/versioned_docs/version-1.11/usecase/about-saas-user-accounts.mdx",sourceDirName:"usecase",slug:"/usecase/about-saas-user-accounts",permalink:"/docs/usecase/about-saas-user-accounts",draft:!1,unlisted:!1,tags:[],version:"1.11",frontMatter:{title:"About SaaS User Accounts",slug:"about-saas-user-accounts",excerpt:"",hidden:!1,createdAt:"Tue Aug 15 2023 16:10:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"Implementation Example Using Metering API",permalink:"/docs/implementation-guide/example_implementation_using_metering_api"},next:{title:"Creating a Tenant",permalink:"/docs/usecase/about-saas-user-accounts/create-tenant"}},c={},d=[{value:"1. Components of an Account",id:"1-components-of-an-account",level:2},{value:"2. About Relations",id:"2-about-relations",level:2},{value:"3. About Account Creation Patterns",id:"3-about-account-creation-patterns",level:2},{value:"3.1. Implementation for Self-Signup Case",id:"31-implementation-for-self-signup-case",level:3},{value:"3.1.1. Allow User Self-Signup",id:"311-allow-user-self-signup",level:4},{value:"3.1.2. Implement Handling of Post-Self-Signup Process",id:"312-implement-handling-of-post-self-signup-process",level:4},{value:"3.1.3. Implementation Sample",id:"313-implementation-sample",level:4},{value:"3.2. Implementation for the Case where SaaS have User Creation Feature",id:"32-implementation-for-the-case-where-saas-have-user-creation-feature",level:3},{value:"3.3. Implementation for the Case where Account Creation is done from SaaS Operation Console",id:"33-implementation-for-the-case-where-account-creation-is-done-from-saas-operation-console",level:3}];function h(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document will explain how SaaS user accounts are managed on the SaaSus Platform."}),"\n",(0,a.jsx)(n.h2,{id:"1-components-of-an-account",children:"1. Components of an Account"}),"\n",(0,a.jsx)(n.p,{children:"An account consist of the following elements, which must all be set to allow usage:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["SaaS User",(0,a.jsx)(n.br,{}),"\n","Stores the authentication data (ID, Password) for the SaaS"]}),"\n",(0,a.jsxs)(n.li,{children:["Tenant User",(0,a.jsx)(n.br,{}),"\n","Stores which tenant the SaaS user belongs to"]}),"\n",(0,a.jsxs)(n.li,{children:["Role",(0,a.jsx)(n.br,{}),"\n","Stores which permissions the tenant user has"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"2-about-relations",children:"2. About Relations"}),"\n",(0,a.jsxs)(n.p,{children:["A SaaS user can belong to multiple tenants.",(0,a.jsx)(n.br,{}),"\n","Also, a user can have multiple roles within a tenant."]}),"\n",(0,a.jsxs)(n.p,{children:["Example)",(0,a.jsx)(n.br,{}),"\n","User A belongs to tenant A and has the role of Administrator.",(0,a.jsx)(n.br,{}),"\n","User A also belongs to tenant B and has roles of both Administrator and Regular User.",(0,a.jsx)(n.br,{}),"\n","It can be expressed diagrammatically as follows:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"relation",src:t(7211).A+""})}),"\n",(0,a.jsx)(n.h2,{id:"3-about-account-creation-patterns",children:"3. About Account Creation Patterns"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Case of Self-Signup",(0,a.jsx)(n.br,{}),"\n","Example)",(0,a.jsx)(n.br,{}),"\n","The user who wants to use the SaaS creates their own account from a self-signup page.",(0,a.jsx)(n.br,{}),"\n","The tenant is created at the time of account creation, and the user becomes the administrator of that tenant."]}),"\n",(0,a.jsxs)(n.li,{children:["Case where the SaaS has a User Creation Function Implemented",(0,a.jsx)(n.br,{}),"\n","Example)",(0,a.jsx)(n.br,{}),"\n",'The tenant\'s administrator creates roles of "Administrator" and "Regular User" using the user creation function.']}),"\n",(0,a.jsxs)(n.li,{children:["Case where an Account is Created from the SaaS Operation Console",(0,a.jsx)(n.br,{}),"\n","Example)",(0,a.jsx)(n.br,{}),"\n","Upon request from a user, the SaaS administrator creates an account from the SaaS Operation Console.",(0,a.jsx)(n.br,{}),"\n","sign in information is notified to the user via email or EventBridge integration, and the user starts using the account."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"31-implementation-for-self-signup-case",children:"3.1. Implementation for Self-Signup Case"}),"\n",(0,a.jsx)(n.h4,{id:"311-allow-user-self-signup",children:"3.1.1. Allow User Self-Signup"}),"\n",(0,a.jsxs)(n.p,{children:["SaaS Development Console - Authentication Authorization - Advanced Settings - Authentication Tab - Self-Signup (new registration by the user)",(0,a.jsx)(n.br,{}),"\n",'Enable "Users can register themselves".']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"self-sign-up-setting",src:t(57497).A+"",width:"2878",height:"1372"})}),"\n",(0,a.jsx)(n.p,{children:'When allowing self-signup, "Sign up here" will be displayed on the sign in page generated by the SaaSus Platform.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"self-sign-up",src:t(9074).A+"",width:"1168",height:"914"})}),"\n",(0,a.jsxs)(n.p,{children:["The users can create accounts from this link.",(0,a.jsx)(n.br,{}),"\n","What gets created here is the 'SaaS User' in the components of an account."]}),"\n",(0,a.jsx)(n.h4,{id:"312-implement-handling-of-post-self-signup-process",children:"3.1.2. Implement Handling of Post-Self-Signup Process"}),"\n",(0,a.jsxs)(n.p,{children:["When self-signup is completed, the user transitions to your SaaS in a sign in state.\nThe transition page can be set at:",(0,a.jsx)(n.br,{}),"\n","SaaS Development Console - Basics - Auth Transition - Callback URL"]}),"\n",(0,a.jsxs)(n.p,{children:["When self-signup is enabled, the following judgement needs to be made at the Callback URL.",(0,a.jsx)(n.br,{}),"\n","You can verify this by checking the presence of 'tenants' information in the array obtained through ",(0,a.jsx)(n.code,{children:"$request->userinfo"}),"."]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(o.A,{value:"php",label:"PHP",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"        // Implement self-signup process if tenant registration isn't done\n        if (empty($request->userinfo['tenants']))\n"})})})}),"\n",(0,a.jsx)(n.h4,{id:"313-implementation-sample",children:"3.1.3. Implementation Sample"}),"\n",(0,a.jsxs)(n.p,{children:["Try modifying the ",(0,a.jsx)("a",{href:"/docs/usecase/about-saas-user-accounts/create-tenant",target:"blank",children:"Creating a Tenant"}),", so that tenant registration can be done."]}),"\n",(0,a.jsxs)(n.p,{children:["Once tenant registration can be done, let's ",(0,a.jsx)("a",{href:"/docs/usecase/about-saas-user-accounts/add-tenant-user",target:"_blank",children:"assign a user to a tenant and set a role"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Once tenant creation and tenant user creation is done, confirm whether the tenant information set in ",(0,a.jsx)(n.code,{children:"$request->userinfo['tenants']"})," is output or not."]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(o.A,{value:"php",label:"PHP",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"dd($request->userinfo['tenants']);\n"})})})}),"\n",(0,a.jsx)(n.p,{children:"Once the tenant information can be obtained, and the tenant user has been created, try to sign in through a normal sign in flow to verify if it works."}),"\n",(0,a.jsx)(n.h3,{id:"32-implementation-for-the-case-where-saas-have-user-creation-feature",children:"3.2. Implementation for the Case where SaaS have User Creation Feature"}),"\n",(0,a.jsx)(n.p,{children:"Let's implement the case where the administrator, who self-signed up, creates a new user."}),"\n",(0,a.jsx)(n.p,{children:"Firstly, register a new user on SaaS."}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(o.A,{value:"php",label:"PHP",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"        $client = new ApiClient();\n        $authApiClient = $client->getAuthClient();\n\n        $createSaasUserParam = new CreateSaasUserParam();\n        $createSaasUserParam\n            ->setEmail($inputs['email'])\n            ->setPassword($inputs['password']);\n\n        $authApiClient->createSaasUser($createSaasUserParam);\n"})})})}),"\n",(0,a.jsxs)(n.p,{children:["Once user registration is successful on SaaS, retrieve the tenant information from the registrant's ",(0,a.jsx)(n.code,{children:"request->userinfo['tenants']"}),", and ",(0,a.jsx)("a",{href:"/docs/usecase/about-saas-user-accounts/add-tenant-user",target:"_blank",children:"assign a user to a tenant and set a role"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"33-implementation-for-the-case-where-account-creation-is-done-from-saas-operation-console",children:"3.3. Implementation for the Case where Account Creation is done from SaaS Operation Console"}),"\n",(0,a.jsx)(n.p,{children:"Coming soon."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(96540),s=t(34164),r=t(23104),o=t(56347),i=t(205),l=t(57485),u=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=u??f;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function S(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==a&&(u(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(S,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function A(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},7211:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/relation-12178a96c37cc2760f66607d713de499.svg"},57497:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/self-sign-up-setting-355b7357e77de423b501e68e481f276d.png"},9074:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/self-sign-up-081ca478ff0dc80c94202c907a91983e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);