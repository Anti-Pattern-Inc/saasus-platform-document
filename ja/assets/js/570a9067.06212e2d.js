"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[370],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,u(u({ref:t},c),{},{components:a})):r.createElement(b,u({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var i=2;i<l;i++)u[i]=a[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),u=a(12466),s=a(16550),o=a(91980),i=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[u,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,i]=b({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var k=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==s&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function S(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return n.createElement(S,(0,r.Z)({key:String(t)},e))}},90704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),u=a(85162);const s={title:"SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3064\u3044\u3066",slug:"about-saas-user-accounts",excerpt:"",hidden:!1,createdAt:"Tue Aug 15 2023 16:10:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:51 GMT+0000 (Coordinated Universal Time)"},o=void 0,i={unversionedId:"usecase/about-saas-user-accounts",id:"usecase/about-saas-user-accounts",title:"SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3064\u3044\u3066",description:"SaaSus Platform\u306b\u304a\u3051\u308b\u3001SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6271\u3044\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/usecase/about-saas-user-accounts.mdx",sourceDirName:"usecase",slug:"/usecase/about-saas-user-accounts",permalink:"/ja/docs/next/usecase/about-saas-user-accounts",draft:!1,tags:[],version:"current",frontMatter:{title:"SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3064\u3044\u3066",slug:"about-saas-user-accounts",excerpt:"",hidden:!1,createdAt:"Tue Aug 15 2023 16:10:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:58:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0API\u3092\u5229\u7528\u3057\u305f\u5b9f\u88c5\u4f8b",permalink:"/ja/docs/next/implementation-guide/example_implementation_using_metering_api"},next:{title:"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210",permalink:"/ja/docs/next/usecase/about-saas-user-accounts/create-tenant"}},c={},p=[{value:"\uff11\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20",id:"\uff11\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20",level:2},{value:"\uff12\uff0e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",id:"\uff12\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",level:2},{value:"\uff13\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066",id:"\uff13\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066",level:2},{value:"\uff13\uff0e\uff11\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",id:"\uff13\uff11\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",level:3},{value:"\uff13\uff0e\uff11\uff0e\uff11\uff0e\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059",id:"\uff13\uff11\uff11\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059",level:4},{value:"\uff13\uff0e\uff11\uff0e\uff12\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",id:"\uff13\uff11\uff12\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",level:4},{value:"\uff13\uff0e\uff11\uff0e\uff13\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",id:"\uff13\uff11\uff13\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",level:4},{value:"\uff13\uff0e\uff12\uff0eSaaS\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",id:"\uff13\uff12saas\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",level:3},{value:"\uff13\uff0e\uff13\uff0eSaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",id:"\uff13\uff13saas\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5",level:3}],d={toc:p},m="wrapper";function b(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SaaSus Platform\u306b\u304a\u3051\u308b\u3001SaaS\u5229\u7528\u8005\uff08\u30e6\u30fc\u30b6\u30fc\uff09\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6271\u3044\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\uff11\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20"},"\uff11\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20"),(0,n.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u4ee5\u4e0b\u306e\u8981\u7d20\u3067\u69cb\u6210\u3055\u308c\u3066\u304a\u308a\u3001\u5168\u3066\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SaaS\u30e6\u30fc\u30b6\u30fc",(0,n.kt)("br",{parentName:"li"}),"SaaS\u306b\u5bfe\u3059\u308b\u8a8d\u8a3c\u60c5\u5831\uff08ID\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\uff09\u3092\u4fdd\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc",(0,n.kt)("br",{parentName:"li"}),"SaaS\u30e6\u30fc\u30b6\u30fc\u304c\u3069\u306e\u30c6\u30ca\u30f3\u30c8\u306b\u6240\u5c5e\u3059\u308b\u304b\u3092\u4fdd\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u5f79\u5272\uff08\u30ed\u30fc\u30eb\uff09",(0,n.kt)("br",{parentName:"li"}),"\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u3069\u306e\u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3092\u4fdd\u6301")),(0,n.kt)("h2",{id:"\uff12\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066"},"\uff12\uff0e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"SaaS\u30e6\u30fc\u30b6\u30fc\u306f\u8907\u6570\u306e\u30c6\u30ca\u30f3\u30c8\u306b\u6240\u5c5e\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001\u30c6\u30ca\u30f3\u30c8\u306e\u4e2d\u3067\u8907\u6570\u306e\u5f79\u5272\u3092\u6301\u3064\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4f8b\uff09",(0,n.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b6\u30fcA\u306f\u30c6\u30ca\u30f3\u30c8A\u306b\u6240\u5c5e\u3057\u3066\u304a\u308a\u3001\u7ba1\u7406\u8005\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b6\u30fcA\u306f\u30c6\u30ca\u30f3\u30c8B\u306b\u3082\u6240\u5c5e\u3057\u3066\u304a\u308a\u3001\u7ba1\u7406\u8005\u3068\u4e00\u822c\u30e6\u30fc\u30b6\u30fc\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u56f3\u3067\u8868\u73fe\u3059\u308b\u3068\u4ee5\u4e0b\u3068\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"relation",src:a(31377).Z,width:"578",height:"341"})),(0,n.kt)("h2",{id:"\uff13\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066"},"\uff13\uff0e\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9",(0,n.kt)("br",{parentName:"li"}),"\u4f8b\uff09",(0,n.kt)("br",{parentName:"li"}),"SaaS\u3092\u5229\u7528\u3057\u305f\u3044\u3068\u601d\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u304c\u3001\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u753b\u9762\u304b\u3089\u81ea\u5206\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002",(0,n.kt)("br",{parentName:"li"}),"\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u6642\u306b\u30c6\u30ca\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30c6\u30ca\u30f3\u30c8\u306e\u7ba1\u7406\u8005\u3068\u306a\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"SaaS\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9",(0,n.kt)("br",{parentName:"li"}),"\u4f8b\uff09",(0,n.kt)("br",{parentName:"li"}),"\u30c6\u30ca\u30f3\u30c8\u306e\u7ba1\u7406\u8005\u304c\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u3092\u5229\u7528\u3057\u3001\u5f79\u5272\u3010\u7ba1\u7406\u8005\u3001\u4e00\u822c\u30e6\u30fc\u30b6\u30fc\u3011\u3092\u4f5c\u6210\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"SaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9",(0,n.kt)("br",{parentName:"li"}),"\u4f8b\uff09",(0,n.kt)("br",{parentName:"li"}),"\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u7533\u8acb\u3092\u53d7\u3051\u3066\u3001SaaS\u7ba1\u7406\u8005\u304cSaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3002",(0,n.kt)("br",{parentName:"li"}),"\u30e1\u30fc\u30eb\u3084EventBridge\u9023\u643a\u306a\u3069\u3067\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u901a\u77e5\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u3092\u958b\u59cb\u3059\u308b\u3002")),(0,n.kt)("h3",{id:"\uff13\uff11\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"},"\uff13\uff0e\uff11\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"),(0,n.kt)("h4",{id:"\uff13\uff11\uff11\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059"},"\uff13\uff0e\uff11\uff0e\uff11\uff0e\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u307e\u3059"),(0,n.kt)("p",null,"SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb - \u8a8d\u8a3c\u8a73\u7d30\u8a2d\u5b9a - \u8a8d\u8a3c\u8a2d\u5b9a\u30bf\u30d6 - \u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\uff08\u30e6\u30fc\u30b6\u30fc\u81ea\u8eab\u306b\u3088\u308b\u65b0\u898f\u767b\u9332\uff09\u306e\u53ef\u5426",(0,n.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b6\u30fc\u304c\u81ea\u5206\u3067\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u53ef\u80fd\u306b\u3092\u6709\u52b9\u306b\u3057\u307e\u3059"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"self-sign-up-setting",src:a(84090).Z,width:"1916",height:"794"})),(0,n.kt)("p",null,"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3059\u308b\u3068\u3001SaaSus Platform\u304c\u751f\u6210\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u300c\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"self-sign-up",src:a(10665).Z,width:"582",height:"470"})),(0,n.kt)("p",null,"\u3053\u306e\u30ea\u30f3\u30af\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u3092\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u3053\u3067\u4f5c\u6210\u3055\u308c\u308b\u306e\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u69cb\u6210\u8981\u7d20\u306b\u304a\u3051\u308b\u3001SaaS\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\uff13\uff11\uff12\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b"},"\uff13\uff0e\uff11\uff0e\uff12\uff0e\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b"),(0,n.kt)("p",null,"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u3067\u304a\u5ba2\u69d8\u306eSaaS\u306b\u9077\u79fb\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u203b\u9077\u79fb\u5148\u306e\u753b\u9762",(0,n.kt)("br",{parentName:"p"}),"\n","SaaS \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb - \u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148 - Callback URL"),(0,n.kt)("p",null,"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a31\u53ef\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001Callback URL\u3067\u4ee5\u4e0b\u306e\u5224\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u5224\u65ad\u306b\u306f$request->userinfo\u3067\u53d6\u5f97\u3067\u304d\u308b\u914d\u5217\u306btenants\u60c5\u5831\u304c\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"        // \u30c6\u30ca\u30f3\u30c8\u767b\u9332\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u51e6\u7406\u3092\u5b9f\u65bd\n        if (empty($request->userinfo['tenants']))\n")))),(0,n.kt)("h4",{id:"\uff13\uff11\uff13\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"},"\uff13\uff0e\uff11\uff0e\uff13\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"),(0,n.kt)("a",{href:"/docs/usecase/about-saas-user-accounts/create-tenant",target:"blank"},"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210"),"\u3092\u53c2\u8003\u306b\u3001\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u767b\u9332\u3067\u304d\u308b\u3088\u3046\u4fee\u6b63\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,n.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u767b\u9332\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3089\u3001",(0,n.kt)("a",{href:"/docs/usecase/about-saas-user-accounts/add-tenant-user",target:"_blank"},"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a"),"\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210\u3068\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e\u4f5c\u6210\u304c\u3067\u304d\u305f\u3089\u3001$request->userinfo","['tenants']","\u306b\u8a2d\u5b9a\u3057\u305f\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u51fa\u529b\u3055\u308c\u308b\u304b\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"dd($request->userinfo['tenants']);\n")))),(0,n.kt)("p",null,"\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u3001\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3089\u3001\u901a\u5e38\u306e\u30ed\u30b0\u30a4\u30f3\u30d5\u30ed\u30fc\u3067\u30ed\u30b0\u30a4\u30f3\u304c\u3067\u304d\u308b\u304b\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("h3",{id:"\uff13\uff12saas\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"},"\uff13\uff0e\uff12\uff0eSaaS\u306b\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"),(0,n.kt)("p",null,"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u305f\u7ba1\u7406\u8005\u304c\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"\u307e\u305a\u306fSaaS\u306b\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u884c\u3044\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"        $client = new ApiClient();\n        $authApiClient = $client->getAuthClient();       \n\n        $createSaasUserParam = new CreateSaasUserParam();\n        $createSaasUserParam\n            ->setEmail($inputs['email'])\n            ->setPassword($inputs['password']);\n\n        $authApiClient->createSaasUser($createSaasUserParam);\n")))),(0,n.kt)("p",null,"SaaS\u306b\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u3067\u304d\u305f\u3089\u3001\u767b\u9332\u8005\u306e$request->userinfo","['tenants']","\u304b\u3089\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001",(0,n.kt)("a",{href:"/docs/usecase/about-saas-user-accounts/add-tenant-user",target:"_blank"},"\u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u7d10\u3065\u3051\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a"),"\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("h3",{id:"\uff13\uff13saas\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"},"\uff13\uff0e\uff13\uff0eSaaS\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3059\u308b\u30b1\u30fc\u30b9\u306e\u5b9f\u88c5"),(0,n.kt)("p",null,"\u6e96\u5099\u4e2d"))}b.isMDXComponent=!0},31377:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/relation-07a734de409f0f244a0b9e6bb2e3f80d.svg"},84090:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/self-sign-up-setting-51d4d7221f469476b56874f6a7c70ee0.png"},10665:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/self-sign-up-68a808a5fac7365278b9ec45c464506d.png"}}]);