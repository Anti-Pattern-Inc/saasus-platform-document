"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[1443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},47150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={title:"Implementation to Next.js (SPA) based application",slug:"implementation-to-nextjs-spa-based-application",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:47:39 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,p={unversionedId:"tutorial/implementation-to-nextjs-spa-based-application",id:"version-1.6/tutorial/implementation-to-nextjs-spa-based-application",title:"Implementation to Next.js (SPA) based application",description:"Implementation in SPA based application",source:"@site/versioned_docs/version-1.6/tutorial/implementation-to-nextjs-spa-based-application.mdx",sourceDirName:"tutorial",slug:"/tutorial/implementation-to-nextjs-spa-based-application",permalink:"/saasus-platform-document/docs/tutorial/implementation-to-nextjs-spa-based-application",draft:!1,tags:[],version:"1.6",frontMatter:{title:"Implementation to Next.js (SPA) based application",slug:"implementation-to-nextjs-spa-based-application",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:47:39 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Implementation of authorization based on tenant information",permalink:"/saasus-platform-document/docs/tutorial/implementation-of-authorization-based-on-tenant-information"},next:{title:"Summary",permalink:"/saasus-platform-document/docs/tutorial/summarize"}},u={},c=[{value:"Implementation in SPA based application",id:"implementation-in-spa-based-application",level:2},{value:"Preparation of Next.js (SPA) based sample application",id:"preparation-of-nextjs-spa-based-sample-application",level:3},{value:"Adjust the front end",id:"adjust-the-front-end",level:3},{value:"Tweaking the backend",id:"tweaking-the-backend",level:3}],d={toc:c},m="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"implementation-in-spa-based-application"},"Implementation in SPA based application"),(0,r.kt)("h3",{id:"preparation-of-nextjs-spa-based-sample-application"},"Preparation of Next.js (SPA) based sample application"),(0,r.kt)("p",null,"Let's implement the same functionality in a Next.js-based application that we implemented in a Blade-based application. A Next.js based application is under the front directory."),(0,r.kt)("p",null,"In the case of SPA, the API is called from the front end to update the page. Therefore, it is necessary to make calls with a Bearer token when calling the API."),(0,r.kt)("p",null,"This time we use axios for API calls, but the mechanism is the same even when using fetch or ajax."),(0,r.kt)("p",null,"Since it is a local environment, check the operation of the Next.js-based application by logging in as follows."),(0,r.kt)("p",null,"URL: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:80/login"},"http://localhost:80/login"),(0,r.kt)("br",{parentName:"p"}),"\n","Authentication Email: ",(0,r.kt)("a",{parentName:"p",href:"mailto:user@example.com"},"user@example.com"),(0,r.kt)("br",{parentName:"p"}),"\n","Password: password"),(0,r.kt)("p",null,"Operations are the same as the blade-based one, but first access the above URL and check the operation."),(0,r.kt)("img",{src:"/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-1.png",width:"400"}),(0,r.kt)("p",null,"After confirming the operation, first, point the callback after login to the Next.js-based application. Change the callback URL to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/callback"},"http://localhost:3000/callback")," in the SaaSus console."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(71812).Z,width:"1279",height:"862"})),(0,r.kt)("p",null,"*","Since the login screen will be rebuilt, it will take a few minutes for the callback destination URL to be reflected."),(0,r.kt)("h3",{id:"adjust-the-front-end"},"Adjust the front end"),(0,r.kt)("p",null,"Now let's incorporate it into our application.",(0,r.kt)("br",{parentName:"p"}),"\n","First, create a page to receive the modified callback."),(0,r.kt)("p",null,"front/src/pages/callback/index.tsx"),(0,r.kt)("p",null,"and do the following:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import Container from '@mui/material/Container'\nimport { useRouter } from 'next/router'\nimport { useEffect } from 'react'\nimport axios from '@/lib/axios'\n\nconst Callback = () => {\n  const router = useRouter()\n  const query = router.query\n  const code = query.code as string\n\n  const fetchAuthCredentials = async () => {\n    const res = await axios.get(`/api/callback?code=${code}`)\n    // Save the passed JWT in Local Storage\n    const idToken = res.data.id_token as string\n    localStorage.setItem('SaaSusIdToken', idToken)\n    router.replace('/board')\n  }\n\n  useEffect(() => {\n    if (router.isReady) {\n      if (code) {\n        fetchAuthCredentials()\n      }\n    }\n  }, [query, router])\n\n  return <Container disableGutters></Container>\n}\n\nexport default Callback\n")))),(0,r.kt)("p",null,"Here, the authentication information is obtained from the API based on the passed temporary code, the id_token is stored in the browser's local storage, and redirected to the board page."),(0,r.kt)("p",null,"Next, we will attach this saved token to the header later when calling the API."),(0,r.kt)("p",null,"Edit front/src/pages/board/index.tsx."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MessageBoard } from '@/components/MessageBoard'\nimport { formValueFormat } from '@/const/formTemplate'\nimport Container from '@mui/material/Container'\nimport useSWR, { useSWRConfig } from 'swr'\nimport axios from '@/lib/axios'\n\nconst Board = () => {\n const { mutate } = useSWRConfig()\n const fetcher = (url: string) => {\n   // Get JWT from Local Storage, attach it to header as Bearer token and call API\n   const token = localStorage.getItem('SaaSusIdToken')\n   if (!token) return ''\n   return axios\n     .get(url, {\n       headers: {\n         Authorization: `Bearer ${token}`,\n       },\n     })\n     .then((res) => res.data)\n }\n const { data: tenant_name, error: tenant_error } = useSWR(\n   `/api/tenant`,\n   fetcher\n )\n const { data: messages, error } = useSWR(`/api/board`, fetcher, {\n   refreshInterval: 5000,\n })\n if (error || tenant_error) return <div>failed to load</div>\n if (!messages || !tenant_name) return <div>loading...</div>\n\n const handleSubmit = async (value: string) => {\n   const formValue = { ...formValueFormat, message: value }\n   // Update local data immediately without revalidation\n   mutate('/api/board', [...messages, formValue], false)\n   // Send a request to the API to update\n   // Get JWT from Local Storage, attach it to header as Bearer token and call API\n   const token = localStorage.getItem('SaaSusIdToken')\n   await axios.post('/api/post', formValue, {\n     headers: {\n       Authorization: `Bearer ${token}`,\n     },\n   })\n }\n\n return (\n   <Container disableGutters>\n     <MessageBoard\n       messages={messages}\n       tenant_name={tenant_name}\n       onSubmit={handleSubmit}\n     />\n   </Container>\n )\n}\n\nexport default Board\n")))),(0,r.kt)("p",null,"Since there are few API calls this time, it is simply specified directly when calling axios, however it would be better to standardize the implementation using middleware."),(0,r.kt)("p",null,"The front side is now complete."),(0,r.kt)("h3",{id:"tweaking-the-backend"},"Tweaking the backend"),(0,r.kt)("p",null,"Next is the API side. In this sample, the API is also based on Laravel, so what you do is almost the same as the Blade version."),(0,r.kt)("p",null,"First, set the environment variables in .env that will be used by the API this time. This will force the middleware to return an API response on failure."),(0,r.kt)("p",null,"api/.env"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SAASUS_AUTH_MODE="api"\n')),(0,r.kt)("p",null,"then api/routes/api.php",(0,r.kt)("br",{parentName:"p"}),"\n","to use the SaaSus SDK middleware and CallbackApiController."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Register a controller that retrieves authentication information such as ID tokens from temporary code\nRoute::get('/callback', 'AntiPatternInc\\Saasus\\Laravel\\Controllers\\CallbackApiController@index');\n\n// Use SaaSus SDK standard Auth Middleware\nRoute::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n   Route::get('/board', 'App\\Http\\Controllers\\MessageApiController@index');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageApiController@post');\n   Route::get('/plan', 'App\\Http\\Controllers\\PlanApiController@index');\n   Route::get('/tenant', 'App\\Http\\Controllers\\TenantApiController@index');\n});\n")))),(0,r.kt)("p",null,"api/app/Http/Controllers/MessageApiController.php"),(0,r.kt)("p",null,"On the controller side, the implementation is similar to the Blade version."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\DB;\nuse App\\Models\\Message;\n\nclass MessageApiController extends Controller\n{\n   public function index(Request $request)\n   {\n       // The idea is the same for SPA\n       // Refer to MessageController for processing\n       $tenantid = $request->userinfo['tenants'][0]['id'];\n\n       $messages = DB::table('messages')\n           ->select('messages.*')\n           ->where('tenant_id', $tenantid)\n           ->get();\n       return response()->json($messages);\n   }\n\n   public function post(Request $request)\n   {\n        $tenant_id = $request->userinfo['tenants'][0]['id'];\n        $plan_id = $request->userinfo['tenants'][0]['plan_id'];\n\n        // Use the SaaSus SDK to hit the SaaSus API, acquire various information, and use it for judgment\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $res = $pricingApi->getPricingPlan($plan_id, $pricingApi::FETCH_RESPONSE);\n        $plan = json_decode($res->getBody(), true);\n\n        $meteringUnitName = \"comment_count\";\n        $res = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday($tenant_id, $meteringUnitName, $pricingApi::FETCH_RESPONSE);\n        $count = json_decode($res->getBody(), true);\n\n        $upper = \\AntiPatternInc\\Saasus\\Api\\Lib::findUpperCountByMeteringUnitName($plan, $meteringUnitName);\n\n        $result = '';\n        // Disable posting if the number of comments exceeds the maximum number of comments for the current contracted price plan\n        if ($count['count'] < $upper || $upper === 0) {\n            $result = Message::create([\n                'tenant_id' => $tenant_id,\n                'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n                'message' => $request->message,\n            ]);\n            // add 1 to the number of comments in the metering API\n            $param = new \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\UpdateMeteringUnitTimestampCountNowParam();\n            $param->setMethod('add');\n            $param->setCount(1);\n            $res = $pricingApi->updateMeteringUnitTimestampCountNow($request->userinfo['tenants'][0]['id'], $meteringUnitName, $param, $pricingApi::FETCH_RESPONSE);\n        }\n\n        return response()->json($result);\n   }\n}\n")))),(0,r.kt)("p",null,"Now we have implemented the same functionality as the Blade version."),(0,r.kt)("p",null,"When you log in from the login page, a callback is made to the Next.js version and the page is displayed.",(0,r.kt)("br",{parentName:"p"}),"\n","Let's check if it behaves the same as the Blade version."),(0,r.kt)("img",{src:"/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-3.png",width:"400"}),(0,r.kt)("p",null,"This is the end of the tutorial, lastly a summary is provided."))}h.isMDXComponent=!0},71812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/implementation-to-nextjs-spa-based-application-2-10563e10ac61cabaa2fb6c9e13556ba3.png"}}]);