"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[2432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),s=n(16550),o=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=o??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},16504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162);const s={title:"SaaSus Platform\u3092\u4f7f\u3063\u305f\u5b9f\u88c5\uff08\u30b5\u30fc\u30d0\u30ec\u30b9\uff09",slug:"implementing-authentication-using-saasus-serverless",excerpt:"",hidden:!1,createdAt:"Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},o=void 0,u={unversionedId:"implementation-guide/implementing-authentication-using-saasus-serverless",id:"implementation-guide/implementing-authentication-using-saasus-serverless",title:"SaaSus Platform\u3092\u4f7f\u3063\u305f\u5b9f\u88c5\uff08\u30b5\u30fc\u30d0\u30ec\u30b9\uff09",description:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u30b5\u30fc\u30d0\u30ec\u30b9\u3067\u69cb\u6210\u3059\u308b\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/implementation-guide/implementing-authentication-using-saasus-serverless.md",sourceDirName:"implementation-guide",slug:"/implementation-guide/implementing-authentication-using-saasus-serverless",permalink:"/ja/docs/next/implementation-guide/implementing-authentication-using-saasus-serverless",draft:!1,tags:[],version:"current",frontMatter:{title:"SaaSus Platform\u3092\u4f7f\u3063\u305f\u5b9f\u88c5\uff08\u30b5\u30fc\u30d0\u30ec\u30b9\uff09",slug:"implementing-authentication-using-saasus-serverless",excerpt:"",hidden:!1,createdAt:"Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"SaaSus Platform\u3092\u4f7f\u3063\u305f\u5b9f\u88c5\uff08API\u30b5\u30fc\u30d0\uff09",permalink:"/ja/docs/next/implementation-guide/implementing-authentication-using-saasus-platform-apiserver"},next:{title:"\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0API\u306e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u3068\u4f7f\u7528\u4f8b(Laravel)",permalink:"/ja/docs/next/implementation-guide/metering-api-sample"}},c={},p=[{value:"\uff11\uff0e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5b9f\u88c5",id:"\uff11\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5b9f\u88c5",level:2},{value:"\uff11\uff0e\uff11\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e",id:"\uff11\uff11\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e",level:3},{value:"\uff11\uff0e\uff11\uff0e\uff11\uff0e\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u753b\u9762",id:"\uff11\uff11\uff11\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u753b\u9762",level:4},{value:"\uff11\uff0e\uff11\uff0e\uff12\uff0e\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762",id:"\uff11\uff11\uff12\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762",level:4},{value:"\uff11\uff0e\uff11\uff0e\uff13\uff0e\u30e6\u30fc\u30b6\u4e00\u89a7\u753b\u9762\uff08\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\uff09",id:"\uff11\uff11\uff13\u30e6\u30fc\u30b6\u4e00\u89a7\u753b\u9762\u30c8\u30c3\u30d7\u30da\u30fc\u30b8",level:4},{value:"\uff11\uff0e\uff12\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u4f7f\u3044\u65b9",id:"\uff11\uff12\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u4f7f\u3044\u65b9",level:3},{value:"\uff12\uff0e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5b9f\u88c5",id:"\uff12\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5b9f\u88c5",level:2},{value:"\uff12\uff0e\uff11\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e",id:"\uff12\uff11\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e",level:3},{value:"\uff12\uff0e\uff11\uff0e\uff11\uff0eJWT\u53d6\u5f97API",id:"\uff12\uff11\uff11jwt\u53d6\u5f97api",level:4},{value:"\uff12\uff0e\uff11\uff0e\uff12\uff0e\u30e6\u30fc\u30b6\u60c5\u5831\u53d6\u5f97API",id:"\uff12\uff11\uff12\u30e6\u30fc\u30b6\u60c5\u5831\u53d6\u5f97api",level:3},{value:"\uff12\uff0e\uff11\uff0e\uff13\uff0e\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0API",id:"\uff12\uff11\uff13\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0api",level:3},{value:"\uff12\uff0e\uff11\uff0e\uff14\uff0e\u30e6\u30fc\u30b6\u4e00\u89a7\u53d6\u5f97API",id:"\uff12\uff11\uff14\u30e6\u30fc\u30b6\u4e00\u89a7\u53d6\u5f97api",level:4},{value:"\uff12\uff0e\uff12\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",id:"\uff12\uff12\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb",level:3}],m={toc:p},d="wrapper";function f(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u30b5\u30fc\u30d0\u30ec\u30b9\u3067\u69cb\u6210\u3059\u308b\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059",(0,r.kt)("br",{parentName:"p"}),"\n","\u30fbSaaSus\u306e\u8a8d\u8a3c\u60c5\u5831\u3068\u306a\u308b\u30c8\u30fc\u30af\u30f3\uff08JWT\uff09\u3092\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u7ba1",(0,r.kt)("br",{parentName:"p"}),"\n","\u30fbSaaS\u5229\u7528\u8005\u306fJWT\u3092\u4f7f\u3063\u3066\u672c\u4eba\u78ba\u8a8d\u3092\u884c\u3046",(0,r.kt)("br",{parentName:"p"}),"\n","\u30fb\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306fReact\u3001Vue.js\u306a\u3069\u3067\u5b9f\u88c5",(0,r.kt)("br",{parentName:"p"}),"\n","\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306fLambda\u306a\u3069\u306e\u30b5\u30fc\u30d0\u30ec\u30b9\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u5b9f\u88c5"),(0,r.kt)("h1",{id:"\u30d5\u30ed\u30fcjwt\u53d6\u5f97\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0"},"\u30d5\u30ed\u30fc\uff08JWT\u53d6\u5f97\u301c\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65621).Z,width:"1066",height:"800"})),(0,r.kt)("h1",{id:"\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"},"\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"),(0,r.kt)("h2",{id:"\uff11\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5b9f\u88c5"},"\uff11\uff0e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5b9f\u88c5"),(0,r.kt)("h3",{id:"\uff11\uff11\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e"},"\uff11\uff0e\uff11\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e"),(0,r.kt)("h4",{id:"\uff11\uff11\uff11\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u753b\u9762"},"\uff11\uff0e\uff11\uff0e\uff11\uff0e\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u753b\u9762"),(0,r.kt)("p",null,"SaaSus\u304c\u751f\u6210\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3092\u5b9f\u65bd\u3059\u308b\u3068\u3001\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u3067\u8a2d\u5b9a\u3057\u305fURL\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u672c\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u3092\u4f7f\u3063\u3066\u52d5\u4f5c\u78ba\u8a8d\u3092\u884c\u3046\u305f\u3081\u306b\u306f\u3001",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/callback"),"\u3000\u3068\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57611).Z,width:"1258",height:"392"})),(0,r.kt)("p",null,"\u8a8d\u8a3c\u5f8c\u9077\u79fb\u5148\u306b\u306f\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf(code=xxxxx)\u3067\u3001\u8a8d\u8a3c\u60c5\u5831\u53d6\u5f97\u306b\u5fc5\u8981\u306a\u4e00\u6642\u30b3\u30fc\u30c9\u304c\u6e21\u3055\u308c\u308b\u4ed5\u69d8\u3068\u306a\u3063\u3066\u307e\u3059\u3002\u4e00\u6642\u30b3\u30fc\u30c9\u3092\u4f7f\u3063\u3066JWT\u3092\u53d6\u5f97\u3001\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3059\u308b\u5b9f\u88c5\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx",target:"_blank"},"React\u306e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"))),(0,r.kt)("h4",{id:"\uff11\uff11\uff12\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762"},"\uff11\uff0e\uff11\uff0e\uff12\uff0e\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u304c\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u3053\u3068\u306e\u30c1\u30a7\u30c3\u30af\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"jwttoken"),"\u306b\u306f\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3057\u305fJWT\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","data\u304c\u53d6\u5f97\u51fa\u6765\u308b\u3053\u3068\u3067\u30e6\u30fc\u30b6\u304c\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u304c\u78ba\u8a8d\u3067\u304d\u305f\u3089\u3001\u753b\u9762\u81ea\u4f53\u306f\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306e\u8981\u5426\u306b\u5408\u308f\u305b\u3066\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6709\u52b9\uff1a\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u7528\u306e\u753b\u9762\u3092\u5b9f\u88c5",(0,r.kt)("br",{parentName:"p"}),"\n","\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u7121\u52b9\uff1a\u30ed\u30b0\u30a4\u30f3\u5f8c\u306b\u8868\u793a\u3059\u308b\u753b\u9762\u3092\u5b9f\u88c5"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"jsx",label:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"try {\n  const jwtToken = window.localStorage.getItem('SaaSusIdToken');\n  const apiConfig = new Configuration({\n    accessToken: jwtToken || 'dummyToken',\n    basePath: 'https://xxxxx.lambda-url.ap-northeast-1.on.aws',\n  });\n\n  const userInfoApi = new UserInfoApi(apiConfig);\n  const { data } = await userInfoApi.getLoginUser();\n  return data;\n} catch (e: any) {\n  return thunkAPI.rejectWithValue(e);\n}\n\n")))),(0,r.kt)("h4",{id:"\uff11\uff11\uff13\u30e6\u30fc\u30b6\u4e00\u89a7\u753b\u9762\u30c8\u30c3\u30d7\u30da\u30fc\u30b8"},"\uff11\uff0e\uff11\uff0e\uff13\uff0e\u30e6\u30fc\u30b6\u4e00\u89a7\u753b\u9762\uff08\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx",target:"_blank"},"React\u306e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"))),(0,r.kt)("h3",{id:"\uff11\uff12\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u4f7f\u3044\u65b9"},"\uff11\uff0e\uff12\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u4f7f\u3044\u65b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md",target:"_blank"},"React"))),(0,r.kt)("h2",{id:"\uff12\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5b9f\u88c5"},"\uff12\uff0e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u5b9f\u88c5"),(0,r.kt)("h3",{id:"\uff12\uff11\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e"},"\uff12\uff0e\uff11\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\u306e\u8aac\u660e"),(0,r.kt)("h4",{id:"\uff12\uff11\uff11jwt\u53d6\u5f97api"},"\uff12\uff0e\uff11\uff0e\uff11\uff0eJWT\u53d6\u5f97API"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AuthClient } from "saasus-sdk";\n\nexport const handler = async (event: any): Promise<any> => {\n  const authClient = new AuthClient();\n\n  const code = event.queryStringParameters.code;\n\n  const res = await authClient.credentialApi.getAuthCredentials(code);\n  const token = res.data.id_token;\n\n  return {\n    statusCode: res.status,\n    body: JSON.stringify({\n      id_token: await token,\n    }),\n  };\n};\n')))),(0,r.kt)("h3",{id:"\uff12\uff11\uff12\u30e6\u30fc\u30b6\u60c5\u5831\u53d6\u5f97api"},"\uff12\uff0e\uff11\uff0e\uff12\uff0e\u30e6\u30fc\u30b6\u60c5\u5831\u53d6\u5f97API"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AuthClient } from "saasus-sdk";\n\nexport const handler = async (event: any): Promise<any> => {\n  const authClient = new AuthClient();\n\n  const token = event.headers.authorization.replace("Bearer ", "");\n  const userinfo = await authClient.userInfoApi.getUserInfo(token);\n\n  let response = "";\n  if (userinfo.data.tenants.length == 0) {\n    response = JSON.stringify({\n      id: await userinfo.data.id,\n      email: await userinfo.data.email,\n      completed_sign_up: false,\n    });\n  } else {\n    response = JSON.stringify({\n      completed_sign_up: true,\n    });\n  }\n\n  return {\n    statusCode: userinfo.status,\n    body: response,\n  };\n};\n')))),(0,r.kt)("h3",{id:"\uff12\uff11\uff13\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0api"},"\uff12\uff0e\uff11\uff0e\uff13\uff0e\u30c6\u30ca\u30f3\u30c8\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0API"),(0,r.kt)("p",null,"API\u30ea\u30af\u30a8\u30b9\u30c8\u304cSaaSus Platform\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30e6\u30fc\u30b6\u304b\u3089\u306e\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001",(0,r.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b6\u60c5\u5831\u53d6\u5f97\u3092\u5b9f\u65bd\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u78ba\u8a8d\u3092\u5fc5\u305a\u884c\u3063\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("p",null,"\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u51e6\u7406\u306f\u4ee5\u4e0b\u306e\u6d41\u308c\u306b\u306a\u308a\u307e\u3059",(0,r.kt)("br",{parentName:"p"}),"\n","\u524d\u63d0\uff09\u30bb\u30eb\u30d5\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u305f\u30e6\u30fc\u30b6\u304c\u65b0\u898f\u30c6\u30ca\u30f3\u30c8\u306e\u7ba1\u7406\u8005\u3068\u306a\u308b\u5834\u5408"),(0,r.kt)("p",null,"a. \u30c6\u30ca\u30f3\u30c8\u4f5c\u6210",(0,r.kt)("br",{parentName:"p"}),"\n","b. \u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u3092\u4f5c\u6210\u3057\u305f\u30c6\u30ca\u30f3\u30c8\u306b\u7d10\u3065\u3051",(0,r.kt)("br",{parentName:"p"}),"\n","c. \u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u3092\u30c6\u30ca\u30f3\u30c8\u306e\u7ba1\u7406\u8005\u306b\u8a2d\u5b9a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AuthClient } from "saasus-sdk";\n\nexport const handler = async (event: any): Promise<any> => {\n  const body = JSON.parse(event.body);\n\n  const authClient = new AuthClient();\n\n  const token = event.headers.authorization.replace("Bearer ", "");\n  const userinfo = await authClient.userInfoApi.getUserInfo(token);\n\n  // \u30c6\u30ca\u30f3\u30c8\u4f5c\u6210\n  // \u30c6\u30ca\u30f3\u30c8\u540d\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305f\u30c6\u30ca\u30f3\u30c8\u540d\n  // \u30d0\u30c3\u30af\u30aa\u30d5\u30a3\u30b9\u30b9\u30bf\u30c3\u30d5email\uff1a\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u4eba\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\n  // Connect\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9ID\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305fConnect\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9ID\n  // AWS\u30a2\u30ab\u30a6\u30f3\u30c8ID\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305fAWS\u30a2\u30ab\u30a6\u30f3\u30c8ID\n  // IAM\u30ed\u30fc\u30ebARN\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305fIAM\u30ed\u30fc\u30ebARN\n  const tenantProps: TenantProps = {\n    name: body.tenant_name,\n    back_office_staff_email: userinfo.data.email,\n    attributes: {\n      connect_instance_id: body.connect_instance_id,\n      aws_account_id: body.aws_account_id,\n      iam_role_arn_for_cdk: body.iam_role_arn_for_cdk,\n    },\n  };\n  const createTenant = await authClient.tenantApi.createTenant(tenantProps);\n\n  // \u30c6\u30ca\u30f3\u30c8\u306b\u30e6\u30fc\u30b6\u7d10\u4ed8\u3051\n  // Connect\u30e6\u30fc\u30b6ID\uff1a\u753b\u9762\u3067\u5165\u529b\u3055\u308c\u305fConnect\u30e6\u30fc\u30b6ID\n  const createTenantUserParam: CreateTenantUserParam = {\n    attributes: { connect_user_id: body.connect_user_id },\n    email: userinfo.data.email,\n  };\n  await authClient.tenantUserApi.createTenantUser(\n    createTenant.data.id,\n    createTenantUserParam\n  );\n\n  // \u30ed\u30fc\u30eb\u8a2d\u5b9a\n  const createTenantUserRolesParam: CreateTenantUserRolesParam = {\n    role_names: ["admin"],\n  };\n  await authClient.tenantUserApi.createTenantUserRoles(\n    createTenant.data.id,\n    userinfo.data.id,\n    3,\n    createTenantUserRolesParam\n  );\n\n  return {\n    statusCode: userinfo.status,\n    body: "",\n  };\n};\n')))),(0,r.kt)("h4",{id:"\uff12\uff11\uff14\u30e6\u30fc\u30b6\u4e00\u89a7\u53d6\u5f97api"},"\uff12\uff0e\uff11\uff0e\uff14\uff0e\u30e6\u30fc\u30b6\u4e00\u89a7\u53d6\u5f97API"),(0,r.kt)("p",null,"API\u30ea\u30af\u30a8\u30b9\u30c8\u304cSaaSus Platform\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30e6\u30fc\u30b6\u304b\u3089\u306e\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001",(0,r.kt)("br",{parentName:"p"}),"\n","\u30e6\u30fc\u30b6\u60c5\u5831\u53d6\u5f97\u3092\u5b9f\u65bd\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u78ba\u8a8d\u3092\u5fc5\u305a\u884c\u3063\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React\u306e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb\uff08\u6e96\u5099\u4e2d\uff09")),(0,r.kt)("h3",{id:"\uff12\uff12\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"},"\uff12\uff0e\uff12\uff0e\u5b9f\u88c5\u30b5\u30f3\u30d7\u30eb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React\uff08\u6e96\u5099\u4e2d\uff09")))}f.isMDXComponent=!0},65621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-01-a1fc7e27d326c8a20259e6efeb8af34d.png"},57611:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-02-aec381b21312b0988bb44a929bbe0310.png"}}]);