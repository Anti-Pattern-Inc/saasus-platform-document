"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[171],{54874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(74848),r=n(28453),s=n(11470),i=n(19365);const l={title:"Creating a Tenant",slug:"create-tenant",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 06:48:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:57 GMT+0000 (Coordinated Universal Time)"},o=void 0,u={id:"usecase/about-saas-user-accounts/create-tenant",title:"Creating a Tenant",description:"Once self-signup is complete, the next step is to create a tenant.",source:"@site/versioned_docs/version-1.6/usecase/about-saas-user-accounts/create-tenant.mdx",sourceDirName:"usecase/about-saas-user-accounts",slug:"/usecase/about-saas-user-accounts/create-tenant",permalink:"/docs/usecase/about-saas-user-accounts/create-tenant",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{title:"Creating a Tenant",slug:"create-tenant",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 06:48:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:57 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"About SaaS User Accounts",permalink:"/docs/usecase/about-saas-user-accounts"},next:{title:"Assigning Users to Tenants and Setting Roles",permalink:"/docs/usecase/about-saas-user-accounts/add-tenant-user"}},c={},d=[];function p(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Once self-signup is complete, the next step is to create a tenant."}),"\n",(0,a.jsxs)(t.p,{children:["In this case, the ",(0,a.jsx)("a",{href:"/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans#free-plan",target:"_blank",children:"Free Plan"})," created in the tutorial will be automatically applied when creating a tenant."]}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"php",label:"PHP",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"        // Retrieving validated data\n        $validated = $request->validated();\n\n        // Using the SaaSusSDK\n        $client = new ApiClient();\n        $auth_api_client = $client->getAuthClient();\n        $pricing_api_client = $client->getPricingClient();\n\n        // Searching for pricing plans\n        $pricing_plans = $pricing_api_client->getPricingPlans();\n        $next_plan_id = \"\";\n        foreach ($pricing_plans->getPricingPlans() as $pricing_plan) {\n            if ($pricing_plan['display_name'] == 'Free Plan') {\n                $next_plan_id = $pricing_plan['id'];\n            }\n        }\n\n        // Raise an error if the plan id could not be obtained\n        if (empty($next_plan_id)) {\n            redirect('Specify the redirect destination')->with('flash_message', 'Registration failed.');\n        }\n\n        // To get the UnixTime of the first day of the month\n        // Because when changing the plan, specifying the UnixTime of the first day of the month updates immediately\n        $unixtime_of_first_day_of_current_month = Carbon::now()->startOfMonth()->timestamp;\n\n        // Creating the tenant\n        // Tenant Name: The name entered on the screen\n        // Pricing Plan: Free Plan\n        // Back Office Staff Email: The email of the logged-in user\n        $tenant = $auth_api_client->createTenant((object)array(\n            \"name\" => $validated['tenant_name'],\n            \"next_plan_id\" => $next_plan_id,\n            \"using_next_plan_from\" => $unixtime_of_first_day_of_current_month,\n            \"back_office_staff_email\" => $request['userinfo']['email'],\n        ));\n"})})})}),"\n",(0,a.jsx)(t.p,{children:'You can check if the tenant was created successfully using the API by visiting "SaaS Operation Console > Tenant Management".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"tenant",src:n(69258).A+"",width:"2876",height:"792"})})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(96540),r=n(34164),s=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=u??m;return f({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function _(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(_,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function T(e){const t=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},69258:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/tenant-8400c0f155fe16a0a7c36bc55b294379.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);