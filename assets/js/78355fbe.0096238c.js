"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[92],{36887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(74848),r=a(28453),s=a(11470),o=a(19365);const l={title:"Assigning Users to Tenants and Setting Roles",slug:"add-tenant-user",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 22:00:34 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:59:04 GMT+0000 (Coordinated Universal Time)"},u=void 0,i={id:"usecase/about-saas-user-accounts/add-tenant-user",title:"Assigning Users to Tenants and Setting Roles",description:"After a tenant has been created, you can then associate the self-signed up user with the tenant.",source:"@site/versioned_docs/version-1.11/usecase/about-saas-user-accounts/add-tenant-user.mdx",sourceDirName:"usecase/about-saas-user-accounts",slug:"/usecase/about-saas-user-accounts/add-tenant-user",permalink:"/docs/usecase/about-saas-user-accounts/add-tenant-user",draft:!1,unlisted:!1,tags:[],version:"1.11",frontMatter:{title:"Assigning Users to Tenants and Setting Roles",slug:"add-tenant-user",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 22:00:34 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:59:04 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"Creating a Tenant",permalink:"/docs/usecase/about-saas-user-accounts/create-tenant"},next:{title:"Procedure for Applying for a Paid Plan",permalink:"/docs/saas-development-console/procedure-for-applying-for-a-paid-plan"}},c={},d=[];function p(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"After a tenant has been created, you can then associate the self-signed up user with the tenant."}),"\n",(0,n.jsx)(t.p,{children:"Please append the following to the tenant creation source code:"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(o.A,{value:"php",label:"PHP",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"        // Tenant user association\n        // Last name: the 'lastname' entered on the page\n        // First name: the 'firstname' entered on the page\n        $create_tenant_user_param = new CreateTenantUserParam();\n        $create_tenant_user_param->setEmail($request['userinfo']['email']);\n        $create_tenant_user_param->setAttributes([\n            'memo' => $validated['memo'],\n        ]);\n        $auth_api_client->createTenantUser($tenant->getId(), $create_tenant_user_param, $auth_api_client::FETCH_RESPONSE);\n"})})})}),"\n",(0,n.jsx)(t.p,{children:"Please use the CreateTenantUserParam object."}),"\n",(0,n.jsxs)(t.p,{children:["setAttributes sets the attribute information of the tenant defined in ",(0,n.jsx)("a",{href:"/docs/tutorial/prepare-saas-platform#defining-additional-attributes-for-a-tenant",target:"_blank",children:"Defining Additional Attributes for a Tenant"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Next, set the role."}),"\n",(0,n.jsx)(t.p,{children:"Please append the following code:"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(o.A,{value:"php",label:"PHP",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"        // Role setting\n        $create_tenant_user_roles_param = new CreateTenantUserRolesParam();\n        $create_tenant_user_roles_param->setRoleNames(['admin']);\n        $auth_api_client->createTenantUserRoles($tenant->getId(), $request['userinfo']['id'], getenv('DEFAULT_SAASUSER_ENV'), $create_tenant_user_roles_param);\n"})})})}),"\n",(0,n.jsx)(t.p,{children:"Please use the CreateTenantUserRolesParam object."}),"\n",(0,n.jsx)(t.p,{children:"setRoleNames allows you to specify multiple roles."}),"\n",(0,n.jsxs)(t.p,{children:['The values that can be specified are the "Role Name" that you created in ',(0,n.jsx)("a",{href:"/docs/tutorial/prepare-saas-platform#role-definition",target:"_blank",children:"Role Definition"}),"."]}),"\n",(0,n.jsx)(t.p,{children:'You can check whether the tenant user was registered via API in "SaaS Operation Console > User Management".'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"user",src:a(63268).A+"",width:"2868",height:"1324"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(34164),s=a(23104),o=a(56347),l=a(205),u=a(57485),i=a(31682),c=a(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=m({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),g=(()=>{const e=i??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function T(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(_,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(T,{...e,children:d(e.children)},String(t))}},63268:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/user-10cb88e602699ccf0af90fd58b57f536.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var n=a(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);