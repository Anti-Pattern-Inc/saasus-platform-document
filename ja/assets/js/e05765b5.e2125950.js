"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[6808],{27823:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorial/configuring-sdk-for-saasus-platform","title":"SaaSus Platform\u306eSDK\u306e\u8a2d\u5b9a","description":"SaaS ID \u3068 API \u30ad\u30fc\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u78ba\u8a8d","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.11/tutorial/configuring-sdk-for-saasus-platform.mdx","sourceDirName":"tutorial","slug":"/tutorial/configuring-sdk-for-saasus-platform","permalink":"/ja/docs/tutorial/configuring-sdk-for-saasus-platform","draft":false,"unlisted":false,"tags":[],"version":"1.11","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"SaaSus Platform\u306eSDK\u306e\u8a2d\u5b9a","slug":"configuring-sdk-for-saasus-platform"},"sidebar":"tutorialSidebar","previous":{"title":"SaaSus Platform\u306e\u6e96\u5099","permalink":"/ja/docs/tutorial/prepare-saas-platform"},"next":{"title":"\u8a8d\u8a3c\u306e\u8a2d\u5b9a","permalink":"/ja/docs/tutorial/authentication-preference"}}');var s=n(74848),t=n(28453),l=n(65537),o=n(79329);const i={sidebar_position:3,title:"SaaSus Platform\u306eSDK\u306e\u8a2d\u5b9a",slug:"configuring-sdk-for-saasus-platform"},c=void 0,u={},d=[{value:"SaaS ID \u3068 API \u30ad\u30fc\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u78ba\u8a8d",id:"saas-id-\u3068-api-\u30ad\u30fc\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u78ba\u8a8d",level:3},{value:"SaaSus SDK \u5229\u7528\u306e\u6e96\u5099",id:"saasus-sdk-\u5229\u7528\u306e\u6e96\u5099",level:3},{value:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",level:2},{value:"SaaSus Platform \u7528\u306e\u74b0\u5883\u5909\u6570",id:"saasus-platform-\u7528\u306e\u74b0\u5883\u5909\u6570",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h3,{id:"saas-id-\u3068-api-\u30ad\u30fc\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u78ba\u8a8d",children:"SaaS ID \u3068 API \u30ad\u30fc\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u78ba\u8a8d"}),"\n",(0,s.jsxs)(a.p,{children:["\u307e\u305a\u3001",(0,s.jsx)(a.strong,{children:"SaaSus \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3067 API \u30ad\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u30ad\u30fc\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"\u300cSaaS ID\u300d\u306f\u901a\u5e38\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u65e2\u5b58\u306e\u300cSaaS ID\u300d\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u300cSaaS ID \u306e\u518d\u767a\u884c\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u65b0\u3057\u3044ID\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u521d\u671f\u72b6\u614b\u3067\u306f\u3001\u300cAPI\u30ad\u30fc\u300d\u306f\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u307e\u305b\u3093\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u300cAPI\u30ad\u30fc\u306e\u767a\u884c\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u65b0\u3057\u3044\u30ad\u30fc\u30921\u3064\u767a\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"\u5b9f\u969b\u306bSaaS\u306e\u904b\u7528\u304c\u958b\u59cb\u3055\u308c\u305f\u5f8c\u3001\u300cSaaS ID \u306e\u518d\u767a\u884c\u300d\u3092\u884c\u3063\u305f\u5834\u5408\u3001SaaS\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b SaaS ID \u3082\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"}),(0,s.jsx)(a.p,{children:"\u307e\u305f\u3001\u5916\u90e8\u306b API \u30ad\u30fc\u304c\u6f0f\u6d29\u3057\u306a\u3044\u3088\u3046\u3001\u7d30\u5fc3\u306e\u6ce8\u610f\u3092\u6255\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u8868\u793a\u3055\u308c\u3066\u3044\u308b API \u30ad\u30fc\u306f\u3059\u3067\u306b\u4f7f\u7528\u3067\u304d\u306a\u3044\u72b6\u614b\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"01",src:n(70421).A+"",width:"2880",height:"1128"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"02",src:n(84670).A+"",width:"2880",height:"626"})}),"\n",(0,s.jsx)(a.h3,{id:"saasus-sdk-\u5229\u7528\u306e\u6e96\u5099",children:"SaaSus SDK \u5229\u7528\u306e\u6e96\u5099"}),"\n",(0,s.jsx)(a.p,{children:"\u3067\u306f\u3001\u3055\u304d\u307b\u3069\u6e96\u5099\u3057\u305f\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u74b0\u5883\u3067\u958b\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsxs)(a.p,{children:["\u5192\u982d\u3067\u884c\u3063\u305f\u3068\u304a\u308a\u3001 ",(0,s.jsx)(a.code,{children:"init.sh"})," \u3092\u5229\u7528\u3057\u3066 Docker \u30b3\u30f3\u30c6\u30ca\u304c\u7acb\u3061\u4e0a\u304c\u3063\u3066\u304a\u308a\u3001"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Laravel"})," \u306a\u3089 ",(0,s.jsx)(a.a,{href:"http://localhost/board",children:"http://localhost/board"})," \u3067\u3001"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Express"})," \u306a\u3089 ",(0,s.jsx)(a.a,{href:"http://localhost/login/",children:"http://localhost/login/"})," \u3067\u3001"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u52d5\u3044\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u307e\u305a\u3001 SaaSus Platform \u3092\u4f7f\u3046\u305f\u3081\u306b\u306f\u3001 SaaSus SDK \u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u307f\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Laravel \u306a\u3089 ",(0,s.jsx)(a.strong,{children:"Composer"})]}),"\n",(0,s.jsxs)(a.li,{children:["Express \u306a\u3089 ",(0,s.jsx)(a.strong,{children:"npm"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"\u3092\u4f7f\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u304d\u3001SDK\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"laravel-bash",label:"Laravel (Bash)",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"repo$ docker compose exec php bash\nroot@xxx:/var/www# cd api\nroot@xxx:/var/www/api# composer require saasus-platform/saasus-sdk-php\n"})})}),(0,s.jsx)(o.A,{value:"express-bash",label:"Express (Bash)",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"repo$ docker compose exec node bash\nroot@xxx:/app# npm install saasus-sdk\nroot@xxx:/app# exit\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",children:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(a.p,{children:"SaaSus SDK \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3001\u5229\u7528\u306b\u5fc5\u8981\u306a\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(a.p,{children:["\u307e\u305a\u3001",(0,s.jsx)(a.code,{children:"api"})," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u3042\u308b ",(0,s.jsx)(a.code,{children:".env.example"})," \u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc\u3057\u3066 ",(0,s.jsx)(a.code,{children:".env"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"cp api/.env.example api/.env\n"})}),"\n",(0,s.jsxs)(a.p,{children:["\u4f5c\u6210\u3057\u305f ",(0,s.jsx)(a.code,{children:".env"})," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u3066\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h3,{id:"saasus-platform-\u7528\u306e\u74b0\u5883\u5909\u6570",children:"SaaSus Platform \u7528\u306e\u74b0\u5883\u5909\u6570"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-env",children:'SAASUS_SAAS_ID="\u3042\u306a\u305f\u306e SaaS ID \u3092\u5165\u529b"\nSAASUS_API_KEY="\u3042\u306a\u305f\u306e API \u30ad\u30fc\u3092\u5165\u529b"\nSAASUS_SECRET_KEY="\u3042\u306a\u305f\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u5165\u529b"\nSAASUS_LOGIN_URL="\u3042\u306a\u305f\u306e\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e URL \u3092\u5165\u529b"\n'})}),"\n",(0,s.jsx)(a.p,{children:"\u5404\u5024\u306f\u3001SaaSus \u958b\u767a\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u4ee5\u4e0b\u306e\u753b\u9762\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"\u57fa\u672c\u8a2d\u5b9a > API\u30ad\u30fc"})," \u753b\u9762\uff1a",(0,s.jsx)(a.code,{children:"SAASUS_SAAS_ID"}),"\u3001",(0,s.jsx)(a.code,{children:"SAASUS_API_KEY"}),"\u3001",(0,s.jsx)(a.code,{children:"SAASUS_SECRET_KEY"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"\u8a8d\u8a3c\u8a8d\u53ef > \u8a8d\u8a3c\u8a73\u7d30\u8a2d\u5b9a"})," \u753b\u9762\uff1a",(0,s.jsx)(a.code,{children:"SAASUS_LOGIN_URL"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"\u3053\u308c\u3067 SDK \u306e\u57fa\u672c\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002"})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>o});var r=n(96540);const s={},t=r.createContext(s);function l(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:a},e.children)}},65537:(e,a,n)=>{n.d(a,{A:()=>A});var r=n(96540),s=n(34164),t=n(65627),l=n(56347),o=n(50372),i=n(30604),c=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:r,default:s}}=e;return{value:a,label:n,attributes:r,default:s}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:n}=e;const s=(0,l.W6)(),t=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})}),[t,s])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,t=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:t}))),[c,d]=f({queryString:n,groupId:s}),[x,m]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,t]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),S=(()=>{const e=c??x;return p({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{S&&i(S)}),[S]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,t]),tabValues:t}}var m=n(9136);const S={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:a,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const a=e.currentTarget,n=i.indexOf(a),s=o[n].value;s!==r&&(c(a),l(s))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},a),children:o.map((e=>{let{value:a,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...t,className:(0,s.A)("tabs__item",S.tabItem,t?.className,{"tabs__item--active":r===a}),children:n??a},a)}))})}function g(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function v(e){const a=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",S.tabList),children:[(0,b.jsx)(j,{...a,...e}),(0,b.jsx)(g,{...a,...e})]})}function A(e){const a=(0,m.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(a))}},70421:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/configuring-sdk-for-saasus-platform-01-4d4c4199cfc797b714cc9cdb804dc4ab.png"},79329:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var t=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:a})}},84670:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/configuring-sdk-for-saasus-platform-02-12123c5cbbeb556574a293228b5bdda2.png"}}]);