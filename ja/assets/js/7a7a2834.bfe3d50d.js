"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||u;return a?r.createElement(f,s(s({ref:t},i),{},{components:a})):r.createElement(f,s({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,s=new Array(u);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<u;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const u={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(u.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(87462),n=a(67294),u=a(86010),s=a(12466),l=a(16550),o=a(91980),c=a(67392),i=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),u=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(r.location.search);t.set(u,e),r.replace({...r.location,search:t.toString()})}),[u,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,u=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:u}))),[o,c]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,u]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&u.set(e)}),[a,u])]}({groupId:r}),v=(()=>{const e=o??p;return m({value:e,tabValues:u})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,u]),tabValues:u}}var v=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),r=c[a].value;r!==l&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},s,{className:(0,u.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const u=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,u.Z)("tabs-container",h.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},19118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),u=a(74866),s=a(85162);const l={title:"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b",slug:"add-tenant-user",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 22:00:34 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:59:04 GMT+0000 (Coordinated Universal Time)"},o=void 0,c={unversionedId:"usecase/about-saas-user-accounts/add-tenant-user",id:"usecase/about-saas-user-accounts/add-tenant-user",title:"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b",description:"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210\u304c\u3067\u304d\u305f\u3089\u3001\u30c6\u30ca\u30f3\u30c8\u306b\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u4ed8\u3051\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/usecase/about-saas-user-accounts/add-tenant-user.mdx",sourceDirName:"usecase/about-saas-user-accounts",slug:"/usecase/about-saas-user-accounts/add-tenant-user",permalink:"/ja/docs/next/usecase/about-saas-user-accounts/add-tenant-user",draft:!1,tags:[],version:"current",frontMatter:{title:"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b",slug:"add-tenant-user",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 22:00:34 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:59:04 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210",permalink:"/ja/docs/next/usecase/about-saas-user-accounts/create-tenant"},next:{title:"\u6709\u6599\u30d7\u30e9\u30f3\u306e\u7533\u3057\u8fbc\u307f\u624b\u9806",permalink:"/ja/docs/next/saas-development-console/procedure-for-applying-for-a-paid-plan"}},i={},p=[],d={toc:p},m="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210\u304c\u3067\u304d\u305f\u3089\u3001\u30c6\u30ca\u30f3\u30c8\u306b\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u4ed8\u3051\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u4f5c\u6210\u306e\u30bd\u30fc\u30b9\u306b\u4e0b\u8a18\u3092\u8ffd\u8a18\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"        // \u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u7d10\u4ed8\u3051\n        // \u59d3\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305flastname\n        // \u540d\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305ffirstname\n        $create_tenant_user_param = new CreateTenantUserParam();\n        $create_tenant_user_param->setEmail($request['userinfo']['email']);\n        $create_tenant_user_param->setAttributes([\n            'memo' => $validated['memo'],\n        ]);\n        $auth_api_client->createTenantUser($tenant->getId(), $create_tenant_user_param, $auth_api_client::FETCH_RESPONSE);\n")))),(0,n.kt)("p",null,"CreateTenantUserParam\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"setAttributes\u306f",(0,n.kt)("a",{href:"/docs/tutorial/prepare-saas-platform#\u30c6\u30ca\u30f3\u30c8\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b",target:"_blank"},"\u30c6\u30ca\u30f3\u30c8\u306b\u8ffd\u52a0\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b"),"\u3067\u5b9a\u7fa9\u3057\u305f\u30c6\u30ca\u30f3\u30c8\u306e\u5c5e\u6027\u60c5\u5831\u3092\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u7d9a\u3044\u3066\u3001\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4e0b\u8a18\u30b3\u30fc\u30c9\u3092\u8ffd\u8a18\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"        // \u30ed\u30fc\u30eb\u8a2d\u5b9a\n        $create_tenant_user_roles_param = new CreateTenantUserRolesParam();\n        $create_tenant_user_roles_param->setRoleNames(['admin']);\n        $auth_api_client->createTenantUserRoles($tenant->getId(), $request['userinfo']['id'], getenv('DEFAULT_SAASUSER_ENV'), $create_tenant_user_roles_param);\n")))),(0,n.kt)("p",null,"CreateTenantUserRolesParam\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"setRoleNames\u306f\u8907\u6570\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u5024\u306f\u3001",(0,n.kt)("a",{href:"/docs/tutorial/prepare-saas-platform#\u5f79\u5272\u306e\u5b9a\u7fa9",target:"_blank"},"\u5f79\u5272\u306e\u5b9a\u7fa9"),"\u3067\u4f5c\u6210\u3057\u305f\u300c\u5f79\u5272\u540d\u300d\u304c\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"API\u7d4c\u7531\u3067\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u767b\u9332\u3067\u304d\u305f\u304b\u3069\u3046\u304b\u306e\u78ba\u8a8d\u306f\u3001\u300cSaaSus\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\uff1eSaaS \u904b\u7528\u30b3\u30f3\u30bd\u30fc\u30eb\uff1e\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u300d\u3088\u308a\u3054\u78ba\u8a8d\u9802\u3051\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"user",src:a(21081).Z,width:"1476",height:"743"})))}f.isMDXComponent=!0},21081:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-b23868168ffcf25d4216de860dcda27e.png"}}]);