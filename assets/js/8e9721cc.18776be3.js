"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[8639],{36191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(74848),i=t(28453),r=t(11470),s=t(19365);const o={title:"Implementation using SaaSus Platform (Serverless)",slug:"implementing-authentication-using-saasus-serverless",excerpt:"",hidden:!1,createdAt:"Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l="Flow (JWT Acquisition ~ Tenant Onboarding)",c={id:"implementation-guide/implementing-authentication-using-saasus-serverless",title:"Implementation using SaaSus Platform (Serverless)",description:"When configuring the backend as serverless, the following implementations are required:",source:"@site/docs/implementation-guide/implementing-authentication-using-saasus-serverless.md",sourceDirName:"implementation-guide",slug:"/implementation-guide/implementing-authentication-using-saasus-serverless",permalink:"/docs/next/implementation-guide/implementing-authentication-using-saasus-serverless",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Implementation using SaaSus Platform (Serverless)",slug:"implementing-authentication-using-saasus-serverless",excerpt:"",hidden:!1,createdAt:"Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Implementing Authentication Using SaaSus Platform (API Server)",permalink:"/docs/next/implementation-guide/implementing-authentication-using-saasus-platform-apiserver"},next:{title:"Metering API Implementation Sample and Examples of Use (Laravel)",permalink:"/docs/next/implementation-guide/metering-api-sample"}},u={},d=[{value:"1. Frontend Implementation",id:"1-frontend-implementation",level:2},{value:"1.1. Explanation of the Implementation Sample",id:"11-explanation-of-the-implementation-sample",level:3},{value:"1.1.1. Post-Authentication Transition Destination Screen",id:"111-post-authentication-transition-destination-screen",level:4},{value:"1.1.2. Tenant Onboarding Screen",id:"112-tenant-onboarding-screen",level:4},{value:"1.1.3. User List Screen (Top Page)",id:"113-user-list-screen-top-page",level:4},{value:"1.2. How to Use the Implementation Sample",id:"12-how-to-use-the-implementation-sample",level:3},{value:"2. Backend Implementation",id:"2-backend-implementation",level:2},{value:"2.1. Explanation of the Implementation Sample",id:"21-explanation-of-the-implementation-sample",level:3},{value:"2.1.1. JWT Retrieval API",id:"211-jwt-retrieval-api",level:4},{value:"2.1.2. User Information Retrieval API",id:"212-user-information-retrieval-api",level:4},{value:"2.1.3. Tenant Onboarding API",id:"213-tenant-onboarding-api",level:4},{value:"2.1.4. User List Retrieval API",id:"214-user-list-retrieval-api",level:4},{value:"2.2. Implementation Sample",id:"22-implementation-sample",level:3}];function m(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"When configuring the backend as serverless, the following implementations are required:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Store the token (JWT), which is the authentication information for SaaSus, in the browser's local storage."}),"\n",(0,a.jsx)(n.li,{children:"SaaS users authenticate themselves using the JWT."}),"\n",(0,a.jsx)(n.li,{children:"The frontend is implemented with React, Vue.js, etc."}),"\n",(0,a.jsx)(n.li,{children:"The backend is implemented using serverless services such as Lambda."}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"flow-jwt-acquisition--tenant-onboarding",children:"Flow (JWT Acquisition ~ Tenant Onboarding)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(58253).A+"",width:"1100",height:"821"})}),"\n",(0,a.jsx)(n.h1,{id:"implementation-samples",children:"Implementation Samples"}),"\n",(0,a.jsx)(n.h2,{id:"1-frontend-implementation",children:"1. Frontend Implementation"}),"\n",(0,a.jsx)(n.h3,{id:"11-explanation-of-the-implementation-sample",children:"1.1. Explanation of the Implementation Sample"}),"\n",(0,a.jsx)(n.h4,{id:"111-post-authentication-transition-destination-screen",children:"1.1.1. Post-Authentication Transition Destination Screen"}),"\n",(0,a.jsx)(n.p,{children:"After logging in from the login screen generated by SaaSus, the URL set as the post-authentication redirect will be called."}),"\n",(0,a.jsxs)(n.p,{children:["To test using this implementation sample, please set the redirect to ",(0,a.jsx)(n.code,{children:"http://localhost:3000/callback"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(27926).A+"",width:"2464",height:"736"})}),"\n",(0,a.jsx)(n.p,{children:"After authentication, a temporary code (code=xxxxx) necessary for retrieving authentication information is passed in the query parameters of the redirect URL. Please implement a process to retrieve the JWT using this temporary code and save the JWT to local storage."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx",children:"React implementation sample"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"112-tenant-onboarding-screen",children:"1.1.2. Tenant Onboarding Screen"}),"\n",(0,a.jsxs)(n.p,{children:["It is necessary to check if the user is logged in. Therefore, implement as follows:\nSet ",(0,a.jsx)(n.code,{children:"jwttoken"})," to the JWT stored in local storage.\nYou can confirm that the user is logged in if data is retrievable."]}),"\n",(0,a.jsx)(n.p,{children:"After login confirmation, implement the screen according to whether self-signup is used or not."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"With self-signup: Implement a screen for tenant onboarding."}),"\n",(0,a.jsx)(n.li,{children:"Without self-signup: Implement a screen to display after login."}),"\n"]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"jsx",label:"React",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"try {\n  const jwtToken = window.localStorage.getItem('SaaSusIdToken');\n  const apiConfig = new Configuration({\n    accessToken: jwtToken || 'dummyToken',\n    basePath: 'https://xxxxx.lambda-url.ap-northeast-1.on.aws',\n  });\n\n  const userInfoApi = new UserInfoApi(apiConfig);\n  const { data } = await userInfoApi.getLoginUser();\n  return data;\n} catch (e: any) {\n  return thunkAPI.rejectWithValue(e);\n}\n"})})})}),"\n",(0,a.jsx)(n.h4,{id:"113-user-list-screen-top-page",children:"1.1.3. User List Screen (Top Page)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx",children:"React Implementation Sample"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"12-how-to-use-the-implementation-sample",children:"1.2. How to Use the Implementation Sample"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md",children:"React"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"2-backend-implementation",children:"2. Backend Implementation"}),"\n",(0,a.jsx)(n.h3,{id:"21-explanation-of-the-implementation-sample",children:"2.1. Explanation of the Implementation Sample"}),"\n",(0,a.jsx)(n.h4,{id:"211-jwt-retrieval-api",children:"2.1.1. JWT Retrieval API"}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { AuthClient } from "saasus-sdk";\n\nexport const handler = async (event: any): Promise<any> => {\n  const authClient = new AuthClient();\n\n  const code = event.queryStringParameters.code;\n\n  const res = await authClient.credentialApi.getAuthCredentials(code);\n  const token = res.data.id_token;\n\n  return {\n    statusCode: res.status,\n    body: JSON.stringify({\n      id_token: await token,\n    }),\n  };\n};\n'})})})}),"\n",(0,a.jsx)(n.h4,{id:"212-user-information-retrieval-api",children:"2.1.2. User Information Retrieval API"}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { AuthClient } from "saasus-sdk";\n\nexport const handler = async (event: any): Promise<any> => {\n  const authClient = new AuthClient();\n\n  const token = event.headers.authorization.replace("Bearer ", "");\n  const userinfo = await authClient.userInfoApi.getUserInfo(token);\n\n  let response = "";\n  if (userinfo.data.tenants.length == 0) {\n    response = JSON.stringify({\n      id: await userinfo.data.id,\n      email: await userinfo.data.email,\n      completed_sign_up: false,\n    });\n  } else {\n    response = JSON.stringify({\n      completed_sign_up: true,\n    });\n  }\n\n  return {\n    statusCode: userinfo.status,\n    body: response,\n  };\n};\n'})})})}),"\n",(0,a.jsx)(n.h4,{id:"213-tenant-onboarding-api",children:"2.1.3. Tenant Onboarding API"}),"\n",(0,a.jsx)(n.p,{children:"To confirm that the API request comes from a user logged into the SaaSus Platform, always confirm login by retrieving user information."}),"\n",(0,a.jsx)(n.p,{children:"The self-signup process is as follows:"}),"\n",(0,a.jsx)(n.p,{children:"Prerequisite) The self-signup user becomes the administrator of the new tenant:\na. Create a tenant.\nb. Link the logged-in user to the created tenant.\nc. Set the logged-in user as the administrator of the tenant."}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { AuthClient } from "saasus-sdk";\n\nexport const handler = async (event: any): Promise<any> => {\n  const body = JSON.parse(event.body);\n\n  const authClient = new AuthClient();\n\n  const token = event.headers.authorization.replace("Bearer ", "");\n  const userinfo = await authClient.userInfoApi.getUserInfo(token);\n\n  // Create tenant\n  // Tenant name: Tenant name entered on screen\n  // Back office staff email: Email of the person logged in\n  // Connect instance ID: Connect instance ID entered on screen\n  // AWS account ID: AWS account ID entered on screen\n  // IAM role ARN: IAM role ARN entered on screen\n  const tenantProps: TenantProps = {\n    name: body.tenant_name,\n    back_office_staff_email: userinfo.data.email,\n    attributes: {\n      connect_instance_id: body.connect_instance_id,\n      aws_account_id: body.aws_account_id,\n      iam_role_arn_for_cdk: body.iam_role_arn_for_cdk,\n    },\n  };\n  const createTenant = await authClient.tenantApi.createTenant(tenantProps);\n\n  // Link tenant to user\n  // Connect user ID: Connect user ID entered on screen\n  const createTenantUserParam: CreateTenantUserParam = {\n    attributes: { connect_user_id: body.connect_user_id },\n    email: userinfo.data.email,\n  };\n  await authClient.tenantUserApi.createTenantUser(\n    createTenant.data.id,\n    createTenantUserParam\n  );\n\n  // Set roles\n  const createTenantUserRolesParam: CreateTenantUserRolesParam = {\n    role_names: ["admin"],\n  };\n  await authClient.tenantUserApi.createTenantUserRoles(\n    createTenant.data.id,\n    userinfo.data.id,\n    3,\n    createTenantUserRolesParam\n  );\n\n  return {\n    statusCode: userinfo.status,\n    body: "",\n  };\n};\n'})})})}),"\n",(0,a.jsx)(n.h4,{id:"214-user-list-retrieval-api",children:"2.1.4. User List Retrieval API"}),"\n",(0,a.jsxs)(n.p,{children:["To confirm that the API request is from a user logged into the SaaSus Platform,",(0,a.jsx)(n.br,{}),"\n","please always perform a login check by retrieving user information."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"React Implementation Sample (In Preparation)"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"22-implementation-sample",children:"2.2. Implementation Sample"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"React (In Preparation)"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var a=t(96540),i=t(34164),r=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=h({queryString:t,groupId:i}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),b=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function I(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function T(e){const n=(0,g.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},58253:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/image-01-1b49cc3a8770cf500a965bca64b35b16.png"},27926:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/image-02-6c182132c9826cede4a323a0bfc95320.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);