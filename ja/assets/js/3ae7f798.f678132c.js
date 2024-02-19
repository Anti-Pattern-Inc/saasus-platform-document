"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>$});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),u=n(91980),s=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var g=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==l&&(c(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function $(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"\u30c6\u30ca\u30f3\u30c8\u306e\u60c5\u5831\u3092\u3082\u3068\u306b\u3057\u305f\u8a8d\u53ef\u306e\u5b9f\u88c5",slug:"implementation-of-authorization-based-on-tenant-information",excerpt:"",hidden:!1,createdAt:"Wed Jan 11 2023 03:13:22 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},u=void 0,s={unversionedId:"tutorial/implementation-of-authorization-based-on-tenant-information",id:"version-1.6/tutorial/implementation-of-authorization-based-on-tenant-information",title:"\u30c6\u30ca\u30f3\u30c8\u306e\u60c5\u5831\u3092\u3082\u3068\u306b\u3057\u305f\u8a8d\u53ef\u306e\u5b9f\u88c5",description:"\u8a8d\u53ef\u306e\u5b9f\u88c5",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.6/tutorial/implementation-of-authorization-based-on-tenant-information.mdx",sourceDirName:"tutorial",slug:"/tutorial/implementation-of-authorization-based-on-tenant-information",permalink:"/saasus-platform-document/ja/docs/tutorial/implementation-of-authorization-based-on-tenant-information",draft:!1,tags:[],version:"1.6",frontMatter:{title:"\u30c6\u30ca\u30f3\u30c8\u306e\u60c5\u5831\u3092\u3082\u3068\u306b\u3057\u305f\u8a8d\u53ef\u306e\u5b9f\u88c5",slug:"implementation-of-authorization-based-on-tenant-information",excerpt:"",hidden:!1,createdAt:"Wed Jan 11 2023 03:13:22 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u8a08\u6e2c\u5358\u4f4d\u30fb\u6a5f\u80fd\u30e1\u30cb\u30e5\u30fc\u30fb\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u8a2d\u5b9a",permalink:"/saasus-platform-document/ja/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans"},next:{title:"Next.js(SPA)\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",permalink:"/saasus-platform-document/ja/docs/tutorial/implementation-to-nextjs-spa-based-application"}},p={},c=[{value:"\u8a8d\u53ef\u306e\u5b9f\u88c5",id:"\u8a8d\u53ef\u306e\u5b9f\u88c5",level:2},{value:"\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u8a08\u6e2c\u5358\u4f4d\u306b\u57fa\u3065\u3044\u305f\u30b3\u30e1\u30f3\u30c8\u4e0a\u9650\u306e\u5b9f\u88c5",id:"\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u8a08\u6e2c\u5358\u4f4d\u306b\u57fa\u3065\u3044\u305f\u30b3\u30e1\u30f3\u30c8\u4e0a\u9650\u306e\u5b9f\u88c5",level:3}],m={toc:c},d="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8a8d\u53ef\u306e\u5b9f\u88c5"},"\u8a8d\u53ef\u306e\u5b9f\u88c5"),(0,r.kt)("h3",{id:"\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u8a08\u6e2c\u5358\u4f4d\u306b\u57fa\u3065\u3044\u305f\u30b3\u30e1\u30f3\u30c8\u4e0a\u9650\u306e\u5b9f\u88c5"},"\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u8a08\u6e2c\u5358\u4f4d\u306b\u57fa\u3065\u3044\u305f\u30b3\u30e1\u30f3\u30c8\u4e0a\u9650\u306e\u5b9f\u88c5"),(0,r.kt)("p",null,"\u3055\u304d\u307b\u3069\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3055\u3089\u306b\u624b\u3092\u52a0\u3048\u3066\u3044\u304d\u3001\u8a8d\u53ef\u306e\u4e00\u6b69\u76ee\u3092\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u306eSaaSus Platform\u306e\u8a2d\u5b9a\u3067\u3001\u3069\u306e\u30e6\u30fc\u30b6\u304c\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u3066\u3001\u305d\u306e\u30e6\u30fc\u30b6\u306f\u3069\u306e\u30c6\u30ca\u30f3\u30c8\u306b\u5c5e\u3057\u3066\u3044\u3066\u3069\u3093\u306a\u5f79\u5272\u3067\u3001\u305d\u306e\u30c6\u30ca\u30f3\u30c8\u304c\u3069\u306e\u6599\u91d1\u30d7\u30e9\u30f3\u3092\u9078\u629e\u3057\u3066\u3044\u3066\u3001\u3069\u3093\u306a\u30e1\u30cb\u30e5\u30fc\u304c\u4f7f\u3048\u308b\u306e\u304b\uff1f\u3068\u3044\u3046\u306e\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u53d6\u5f97\u3067\u304d\u308b\u72b6\u614b\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u60c5\u5831\u3092\u4f7f\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5236\u9650\u3092\u304b\u3051\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u4e2d\u306e\u8a08\u6e2c\u5358\u4f4d\u306e\u4e00\u90e8\u3067\u3042\u308b\u300c\u30b3\u30e1\u30f3\u30c8\u6570\u300d\u306b\u6ce8\u76ee\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u3055\u304d\u307b\u3069\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u3054\u3068\u306b\u30b3\u30e1\u30f3\u30c8\u6570\u306e\u4e0a\u9650\u5024\u304c\u7570\u306a\u3063\u3066\u3044\u308b\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Free \u30d7\u30e9\u30f3\u3067\u306f\u3001\u30b3\u30e1\u30f3\u30c8\u6570\u4e0a\u9650 10"),(0,r.kt)("li",{parentName:"ul"},"Basic \u30d7\u30e9\u30f3\u3067\u306f\u3001\u30b3\u30e1\u30f3\u30c8\u6570\u4e0a\u9650 100"),(0,r.kt)("li",{parentName:"ul"},"Advanced \u30d7\u30e9\u30f3\u4ee5\u4e0a\u3067\u306f\u3001\u4e0a\u9650\u306a\u3057")),(0,r.kt)("p",null,"\u3068\u3044\u3046\u8a2d\u5b9a\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u3001\u3053\u306e\u6599\u91d1\u30d7\u30e9\u30f3\u306b\u7d10\u4ed8\u3044\u305f\u4e0a\u9650\u6570\u3092\u30c6\u30ca\u30f3\u30c8\u3054\u3068\u306b\u53d6\u5f97\u3057\u3066\u3001\u5236\u9650\u3092\u304b\u3051\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u3001\u5148\u307b\u3069\u66f8\u304d\u63db\u3048\u305f\u3001 api/app/Http/Controllers/MessageController.php \u306epost\u30e1\u30bd\u30c3\u30c9\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304d\u63db\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"   public function post(Request $request)\n   {\n        $validated = $request->validate([\n            'message' => 'required|max:255'\n        ]);\n\n        $tenant_id = $request->userinfo['tenants'][0]['id'];\n        $plan_id = $request->userinfo['tenants'][0]['plan_id'];\n\n        // SaaSus SDK\u3092\u4f7f\u3063\u3066SaaSus API\u3092\u53e9\u3044\u3066\u3001\u5404\u7a2e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u5224\u65ad\u306b\u4f7f\u3046\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $res = $pricingApi->getPricingPlan($plan_id, $pricingApi::FETCH_RESPONSE);\n        $plan = json_decode($res->getBody(), true);\n\n        // \u30e1\u30fc\u30bf\u30ea\u30f3\u30b0\u306e\u30e1\u30fc\u30bf\u3001comment_count(\u30b3\u30e1\u30f3\u30c8\u6570)\u3092\u4f7f\u3046\n        $meteringUnitName = \"comment_count\";\n        $res = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday($tenant_id, $meteringUnitName, $pricingApi::FETCH_RESPONSE);\n        // \u4eca\u56de\u306f\u3001\uff11\u65e5\u3054\u3068\u306e\u4e0a\u9650\u30b3\u30e1\u30f3\u30c8\u6570\u3068\u3057\u3066\u6271\u3046\n        $count = json_decode($res->getBody(), true);\n\n                // \u30e1\u30fc\u30bf\u30ea\u30f3\u30b0\u306e\u4e0a\u9650\u30b3\u30e1\u30f3\u30c8\u6570\u3092\u53d6\u5f97\n            $upper = \\AntiPatternInc\\Saasus\\Api\\Lib::findUpperCountByMeteringUnitName($plan, $meteringUnitName);\n\n        // \u73fe\u5728\u5951\u7d04\u4e2d\u306e\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u4e0a\u9650\u30b3\u30e1\u30f3\u30c8\u6570\u3092\u8d85\u3048\u3066\u3044\u305f\u3089\u3001\u6295\u7a3f\u3067\u304d\u306a\u304f\u3059\u308b\n        if ($count['count'] < $upper || $upper === 0) {\n            $message = Message::create([\n                'tenant_id' => $tenant_id,\n                'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n                'message' => $request->message,\n            ]);\n            // \u30e1\u30fc\u30bf\u30ea\u30f3\u30b0API\u3067\u3001\u30b3\u30e1\u30f3\u30c8\u6570\u306b\uff11\u3092\u8db3\u3059\n            $param = new \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\UpdateMeteringUnitTimestampCountNowParam();\n            $param->setMethod('add');\n            $param->setCount(1);\n            $res = $pricingApi->updateMeteringUnitTimestampCountNow($request->userinfo['tenants'][0]['id'], $meteringUnitName, $param, $pricingApi::FETCH_RESPONSE);\n        }\n\n        $request->session()->regenerateToken();\n        return redirect()->route('board');\n   }\n")))),(0,r.kt)("p",null,"\u5148\u307b\u3069\u306e\u30b3\u30fc\u30c9\u306b\u52a0\u3048\u3066\u3001\u30b3\u30e1\u30f3\u30c8\u6570\u306e\u5bfe\u8c61\u30e1\u30fc\u30bf\u30fc \u201ccomment_count\u201d \u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u30b3\u30e1\u30f3\u30c8\u6570\u306e\u4e0a\u9650\u3092\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5148\u307b\u3069\u3001\u8a08\u6e2c\u5358\u4f4d\u306f\u4ee5\u4e0b\u306e\u753b\u9762\u306e\u3088\u3046\u306b\u3069\u306e\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u8a08\u6e2c\u5358\u4f4d\u3067\u3082  \u201ccomment_count\u201d \u3092\u30d9\u30fc\u30b9\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(21318).Z,width:"1990",height:"1388"})),(0,r.kt)("p",null,"\u305d\u3053\u3067\u30b3\u30fc\u30c9\u4e0a\u3067\u306f\u3001"),(0,r.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u306b\u7d10\u4ed8\u3044\u3066\u3044\u308b",(0,r.kt)("strong",{parentName:"p"},"\u6599\u91d1\u30d7\u30e9\u30f3"),"\u3092\u53d6\u5f97\u3057\u3001"),(0,r.kt)("p",null,"\u5bfe\u8c61\u30e1\u30fc\u30bf\u30fc \u201ccomment_count\u201d \u306e",(0,r.kt)("strong",{parentName:"p"},"\u73fe\u5728\u306e\u5024"),"\u3092\u53d6\u5f97\u3057\u3001"),(0,r.kt)("p",null,"\u6599\u91d1\u30d7\u30e9\u30f3\u306b\u7d10\u4ed8\u3044\u3066\u3044\u308b\u4e0a\u9650\u5024 \u201ccomment_count\u201d \u306e ",(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u9650\u5024"),"\u3092\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059"),(0,r.kt)("p",null,"\u305d\u3057\u3066\u3001\u3082\u3057\u73fe\u5728\u306e\u5024\u304c\u4e0a\u9650\u5024\u3092\u8d85\u3048\u3066\u3044\u306a\u3051\u308c\u3070\u3001"),(0,r.kt)("p",null,"\u30b3\u30e1\u30f3\u30c8\u66f8\u304d\u8fbc\u307f\u51e6\u7406\u3092\u901a\u5e38\u901a\u308a\u884c\u3044\u3001"),(0,r.kt)("p",null,"\u5bfe\u8c61\u30e1\u30fc\u30bf\u30fc \u201ccomment_count\u201d \u306e",(0,r.kt)("strong",{parentName:"p"},"\u73fe\u5728\u306e\u5024"),"\u306b\uff11\u3092\u8db3\u3057\u3066\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u3054\u3068\u306e\u4e0a\u9650\u5024\u3092\u8d85\u3048\u305f\u5834\u5408\u306b\u306f\u66f8\u304d\u8fbc\u307f\u3092\u884c\u308f\u305b\u306a\u3044\u3001\u3068\u3044\u3046\u3053\u3068\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u51e6\u7406\u3092\u30b7\u30f3\u30d7\u30eb\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u66f8\u304d\u8fbc\u307f\u304c\u884c\u3048\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u306b\u3068\u3069\u3081\u3066\u3044\u307e\u3059\u304c\u3001\u5b9f\u969b\u306f\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u51fa\u3057\u305f\u308a\u3001\u30a2\u30c3\u30d7\u30bb\u30eb\u3092\u4fc3\u3059\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u51fa\u3059\u3053\u3068\u306b\u306a\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3001\u6a5f\u80fd\u306b\u3088\u3063\u3066\u306f\u4e0a\u9650\u5024\u3067\u5b8c\u5168\u306b\u6b62\u3081\u3066\u3057\u307e\u3046\u3068SaaS\u306e\u4fa1\u5024\u304c\u640d\u306a\u308f\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305f\u3068\u3048\u3070\u3001\u4eca\u56de\u306e\u3088\u3046\u306b\u30b3\u30e1\u30f3\u30c8\u306b\u4e0a\u9650\u3092\u3082\u3046\u3051\u3066\u3001\u305d\u3053\u3067\u5b8c\u5168\u306b\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u3068\u3001\u3053\u308c\u306f\u30c1\u30e3\u30c3\u30c8\u3068\u3057\u3066\u6210\u308a\u7acb\u305f\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u3046\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30e1\u30fc\u30bf\u30fc\u304c\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u308b\u307e\u3067\u3001\u3053\u306eSaaS\u306f\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u5f8c\u3001\u305a\u3063\u3068\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u3082\u3082\u3061\u308d\u3093\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001\u5b8c\u5168\u306b\u6b62\u3081\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u66f8\u304d\u8fbc\u307f\u306f\u3067\u304d\u308b\u304c\u8b66\u544a\u3092\u51fa\u3057\u305f\u308a\u3001\u4fdd\u5b58\u671f\u9593\u3092\u8abf\u6574\u3059\u308b\u306a\u3069\u3053\u306eSaaS\u81ea\u4f53\u306e\u4fa1\u5024\u304c\u5931\u308f\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u3059\u306e\u3067\u3001\u7121\u60c5\u306b\u3082\u5b8c\u5168\u306b\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u306a\u3044\u72b6\u614b\u306b\u3057\u307e\u3057\u305f\u3002\u3067\u306f\u3001\u3061\u3083\u3093\u3068\u4e0a\u9650\u3067\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3044\u308b\u304b\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,r.kt)("p",null,"\u307e\u305a\u3001\u6700\u521d\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u521d\u671f\u5316\u3057\u305f\u3068\u304d\u306e\u3088\u3046\u306b\u3001 init.sh \u3092\u5b9f\u884c\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u307e\u3063\u3055\u3089\u306a\u72b6\u614b\u306b\u623b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u305d\u3057\u3066\u3001\u30c6\u30ca\u30f3\u30c8\uff11\u306e\u65b9\u306b\u306fFree\u30d7\u30e9\u30f3\u3092\u8a2d\u5b9a\u3057\u3001",(0,r.kt)("a",{parentName:"p",href:"mailto:user1-1@example.com"},"user1-1@example.com")," \u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3001\uff11\uff10\u4ef6\u4ee5\u4e0a\u306e\u66f8\u304d\u8fbc\u307f\u3092\u884c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30d5\u30ea\u30fc\u30d7\u30e9\u30f3\u8a2d\u5b9a\u5f8c\u306e\u66f8\u304d\u8fbc\u307f\u304c\u3001\uff11\uff10\u4ef6\u307e\u3067\u3057\u304b\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u305f\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u203b \u4eca\u56de\u306f\u30e1\u30fc\u30bf\u30fc\u8a2d\u5b9a\u5f8c\u306e\u66f8\u304d\u8fbc\u307f\u306e\u307f\u3092\u30ab\u30a6\u30f3\u30c8\u3059\u308b\u5b9f\u88c5\u3068\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("br",null),"\u3000\u8a2d\u5b9a\u524d\u306e\u66f8\u304d\u8fbc\u307f\u3082\u8003\u616e\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u3092\u76f4\u63a5\u66f4\u65b0\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38474).Z,width:"2306",height:"1536"})),(0,r.kt)("p",null,"\u3067\u306f\u3001\u6b21\u306b\u30c6\u30ca\u30f3\u30c8\uff12\u306e\u30e6\u30fc\u30b6\u30fc ",(0,r.kt)("a",{parentName:"p",href:"mailto:user2-1@example.com"},"user2-1@example.com")," \u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3001\uff11\uff10\u4ef6\u4ee5\u4e0a\u306e\u66f8\u304d\u8fbc\u307f\u3092\u884c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u3053\u3061\u3089\u306f\u4e0a\u9650\u304c100\u4ef6\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3001\uff11\uff10\u4ef6\u4ee5\u4e0a\u306e\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u305f\u306f\u305a\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46530).Z,width:"2140",height:"1534"})),(0,r.kt)("p",null,"\u3055\u3089\u306b\u3001\u30c6\u30ca\u30f3\u30c8\uff11\u306e\u65b9\u304c\u30d7\u30e9\u30f3\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3057\u305f\u60f3\u5b9a\u3067\u3001Free\u30d7\u30e9\u30f3\u304b\u3089Basic\u30d7\u30e9\u30f3\u306b\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3066\u3001\u518d\u5ea6 ",(0,r.kt)("a",{parentName:"p",href:"mailto:user1-1@example.com"},"user1-1@example.com")," \u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3001\uff11\uff10\u4ef6\u4ee5\u4e0a\u306e\u66f8\u304d\u8fbc\u307f\u3092\u884c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","(\u8a2d\u5b9a\u5909\u66f4\u5f8c\u53cd\u6620\u306b\u306f\uff15\u5206\u307b\u3069\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82055).Z,width:"2308",height:"1542"})),(0,r.kt)("p",null,"\u4eca\u5ea6\u306f\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20258).Z,width:"1535",height:"935"})),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u5f62\u3067\u3001\u6599\u91d1\u30d7\u30e9\u30f3\u306b\u5fdc\u3058\u305f\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0\u3084\u5236\u9650\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,r.kt)("p",null,"\u5236\u9650\u306fSaaSus\u3068\u9023\u643a\u5f8c\u304b\u30891\u4ef6\u3068\u30ab\u30a6\u30f3\u30c8\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","API\u3068\u3057\u3066\u30ab\u30a6\u30f3\u30c8\u306e\u5236\u9650\u5024\u3092\u5909\u66f4\u3059\u308b\u6a5f\u80fd\u306a\u3069\u63d0\u4f9b\u3057\u3066\u304a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u306f\u3001Blade\u30d9\u30fc\u30b9\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5\u3067\u3057\u305f\u304c\u3001\u6700\u5f8c\u306b Next.js(API\u30d9\u30fc\u30b9\u3067\u306eSPA)\u3078\u306e\u5b9f\u88c5\u306e\u5834\u5408\u306f\u3069\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3088\u3044\u304b\uff1f\u78ba\u8a8d\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"))}f.isMDXComponent=!0},21318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-1-2f5322e5cc0b205a6ad469a3283821eb.png"},38474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-2-a04b368f244d8a65a4dc0e36615a2df0.png"},46530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-3-b05b960112597cfc4c8efd91008bd6d5.png"},82055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-4-29e9fdf68b24fec04ea719d82da33e85.png"},20258:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-5-69d268df7e44377926f85777a99722cf.png"}}]);