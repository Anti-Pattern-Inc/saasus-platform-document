"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[2543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),i=n(86010),s=n(12466),o=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=l??p;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),l(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},s,{className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},90753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),s=n(85162);const o={title:"Creating a Tenant",slug:"create-tenant",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 06:48:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:57 GMT+0000 (Coordinated Universal Time)"},l=void 0,u={unversionedId:"usecase/about-saas-user-accounts/create-tenant",id:"version-1.6/usecase/about-saas-user-accounts/create-tenant",title:"Creating a Tenant",description:"Once self-signup is complete, the next step is to create a tenant.",source:"@site/versioned_docs/version-1.6/usecase/about-saas-user-accounts/create-tenant.mdx",sourceDirName:"usecase/about-saas-user-accounts",slug:"/usecase/about-saas-user-accounts/create-tenant",permalink:"/docs/usecase/about-saas-user-accounts/create-tenant",draft:!1,tags:[],version:"1.6",frontMatter:{title:"Creating a Tenant",slug:"create-tenant",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 06:48:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:57 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"About SaaS User Accounts",permalink:"/docs/usecase/about-saas-user-accounts"},next:{title:"Assigning Users to Tenants and Setting Roles",permalink:"/docs/usecase/about-saas-user-accounts/add-tenant-user"}},c={},p=[],d={toc:p},f="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once self-signup is complete, the next step is to create a tenant."),(0,r.kt)("p",null,"In this case, the ",(0,r.kt)("a",{href:"/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans#free-plan",target:"_blank"},"Free Plan")," created in the tutorial will be automatically applied when creating a tenant."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"        // Retrieving validated data\n        $validated = $request->validated();\n\n        // Using the SaaSusSDK\n        $client = new ApiClient();\n        $auth_api_client = $client->getAuthClient();\n        $pricing_api_client = $client->getPricingClient();\n\n        // Searching for pricing plans\n        $pricing_plans = $pricing_api_client->getPricingPlans();\n        $next_plan_id = \"\";\n        foreach ($pricing_plans->getPricingPlans() as $pricing_plan) {\n            if ($pricing_plan['display_name'] == 'Free Plan') {\n                $next_plan_id = $pricing_plan['id'];\n            }\n        }\n\n        // Raise an error if the plan id could not be obtained\n        if (empty($next_plan_id)) {\n            redirect('Specify the redirect destination')->with('flash_message', 'Registration failed.');\n        }\n\n        // To get the UnixTime of the first day of the month\n        // Because when changing the plan, specifying the UnixTime of the first day of the month updates immediately\n        $unixtime_of_first_day_of_current_month = Carbon::now()->startOfMonth()->timestamp;\n\n        // Creating the tenant\n        // Tenant Name: The name entered on the screen\n        // Pricing Plan: Free Plan\n        // Back Office Staff Email: The email of the logged-in user\n        $tenant = $auth_api_client->createTenant((object)array(\n            \"name\" => $validated['tenant_name'],\n            \"next_plan_id\" => $next_plan_id,\n            \"using_next_plan_from\" => $unixtime_of_first_day_of_current_month,\n            \"back_office_staff_email\" => $request['userinfo']['email'],\n        ));\n")))),(0,r.kt)("p",null,'You can check if the tenant was created successfully using the API by visiting "SaaS Operation Console > Tenant Management".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tenant",src:n(96153).Z,width:"2876",height:"792"})))}m.isMDXComponent=!0},96153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tenant-8400c0f155fe16a0a7c36bc55b294379.png"}}]);