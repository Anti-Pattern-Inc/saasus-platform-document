"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5727],{8943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453),i=n(11470),s=n(19365);const o={title:"Implementation to Next.js (SPA) based application",slug:"implementation-to-nextjs-spa-based-application",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:47:39 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,c={id:"tutorial/implementation-to-nextjs-spa-based-application",title:"Implementation to Next.js (SPA) based application",description:"Implementation in SPA based application",source:"@site/versioned_docs/version-1.6/tutorial/implementation-to-nextjs-spa-based-application.mdx",sourceDirName:"tutorial",slug:"/tutorial/implementation-to-nextjs-spa-based-application",permalink:"/docs/tutorial/implementation-to-nextjs-spa-based-application",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{title:"Implementation to Next.js (SPA) based application",slug:"implementation-to-nextjs-spa-based-application",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:47:39 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Implementation of authorization based on tenant information",permalink:"/docs/tutorial/implementation-of-authorization-based-on-tenant-information"},next:{title:"Summary",permalink:"/docs/tutorial/summarize"}},u={},d=[{value:"Implementation in SPA based application",id:"implementation-in-spa-based-application",level:2},{value:"Preparation of Next.js (SPA) based sample application",id:"preparation-of-nextjs-spa-based-sample-application",level:3},{value:"Adjust the front end",id:"adjust-the-front-end",level:3},{value:"Tweaking the backend",id:"tweaking-the-backend",level:3}];function p(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"implementation-in-spa-based-application",children:"Implementation in SPA based application"}),"\n",(0,a.jsx)(t.h3,{id:"preparation-of-nextjs-spa-based-sample-application",children:"Preparation of Next.js (SPA) based sample application"}),"\n",(0,a.jsx)(t.p,{children:"Let's implement the same functionality in a Next.js-based application that we implemented in a Blade-based application. A Next.js based application is under the front directory."}),"\n",(0,a.jsx)(t.p,{children:"In the case of SPA, the API is called from the front end to update the page. Therefore, it is necessary to make calls with a Bearer token when calling the API."}),"\n",(0,a.jsx)(t.p,{children:"This time we use axios for API calls, but the mechanism is the same even when using fetch or ajax."}),"\n",(0,a.jsx)(t.p,{children:"Since it is a local environment, check the operation of the Next.js-based application by logging in as follows."}),"\n",(0,a.jsxs)(t.p,{children:["URL: ",(0,a.jsx)(t.a,{href:"http://localhost:80/login",children:"http://localhost:80/login"}),"\nAuthentication Email: ",(0,a.jsx)(t.a,{href:"mailto:user@example.com",children:"user@example.com"}),(0,a.jsx)(t.br,{}),"\n","Password: password"]}),"\n",(0,a.jsx)(t.p,{children:"Operations are the same as the blade-based one, but first access the above URL and check the operation."}),"\n",(0,a.jsx)("img",{src:"/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-1.png",width:"400"}),"\n",(0,a.jsxs)(t.p,{children:["After confirming the operation, first, point the callback after login to the Next.js-based application. Change the callback URL to ",(0,a.jsx)(t.a,{href:"http://localhost:3000/callback",children:"http://localhost:3000/callback"})," in the SaaSus console."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(24490).A+"",width:"1279",height:"862"})}),"\n",(0,a.jsx)(t.p,{children:"*Since the login screen will be rebuilt, it will take a few minutes for the callback destination URL to be reflected."}),"\n",(0,a.jsx)(t.h3,{id:"adjust-the-front-end",children:"Adjust the front end"}),"\n",(0,a.jsxs)(t.p,{children:["Now let's incorporate it into our application.",(0,a.jsx)(t.br,{}),"\n","First, create a page to receive the modified callback."]}),"\n",(0,a.jsx)(t.p,{children:"front/src/pages/callback/index.tsx"}),"\n",(0,a.jsx)(t.p,{children:"and do the following:"}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{value:"typescript",label:"Typescript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import Container from '@mui/material/Container'\nimport { useRouter } from 'next/router'\nimport { useEffect } from 'react'\nimport axios from '@/lib/axios'\n\nconst Callback = () => {\n  const router = useRouter()\n  const query = router.query\n  const code = query.code as string\n\n  const fetchAuthCredentials = async () => {\n    const res = await axios.get(`/api/callback?code=${code}`)\n    // Save the passed JWT in Local Storage\n    const idToken = res.data.id_token as string\n    localStorage.setItem('SaaSusIdToken', idToken)\n    router.replace('/board')\n  }\n\n  useEffect(() => {\n    if (router.isReady) {\n      if (code) {\n        fetchAuthCredentials()\n      }\n    }\n  }, [query, router])\n\n  return <Container disableGutters></Container>\n}\n\nexport default Callback\n"})})})}),"\n",(0,a.jsx)(t.p,{children:"Here, the authentication information is obtained from the API based on the passed temporary code, the id_token is stored in the browser's local storage, and redirected to the board page."}),"\n",(0,a.jsx)(t.p,{children:"Next, we will attach this saved token to the header later when calling the API."}),"\n",(0,a.jsx)(t.p,{children:"Edit front/src/pages/board/index.tsx."}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{value:"typescript",label:"Typescript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { MessageBoard } from '@/components/MessageBoard'\nimport { formValueFormat } from '@/const/formTemplate'\nimport Container from '@mui/material/Container'\nimport useSWR, { useSWRConfig } from 'swr'\nimport axios from '@/lib/axios'\n\nconst Board = () => {\n const { mutate } = useSWRConfig()\n const fetcher = (url: string) => {\n   // Get JWT from Local Storage, attach it to header as Bearer token and call API\n   const token = localStorage.getItem('SaaSusIdToken')\n   if (!token) return ''\n   return axios\n     .get(url, {\n       headers: {\n         Authorization: `Bearer ${token}`,\n       },\n     })\n     .then((res) => res.data)\n }\n const { data: tenant_name, error: tenant_error } = useSWR(\n   `/api/tenant`,\n   fetcher\n )\n const { data: messages, error } = useSWR(`/api/board`, fetcher, {\n   refreshInterval: 5000,\n })\n if (error || tenant_error) return <div>failed to load</div>\n if (!messages || !tenant_name) return <div>loading...</div>\n\n const handleSubmit = async (value: string) => {\n   const formValue = { ...formValueFormat, message: value }\n   // Update local data immediately without revalidation\n   mutate('/api/board', [...messages, formValue], false)\n   // Send a request to the API to update\n   // Get JWT from Local Storage, attach it to header as Bearer token and call API\n   const token = localStorage.getItem('SaaSusIdToken')\n   await axios.post('/api/post', formValue, {\n     headers: {\n       Authorization: `Bearer ${token}`,\n     },\n   })\n }\n\n return (\n   <Container disableGutters>\n     <MessageBoard\n       messages={messages}\n       tenant_name={tenant_name}\n       onSubmit={handleSubmit}\n     />\n   </Container>\n )\n}\n\nexport default Board\n"})})})}),"\n",(0,a.jsx)(t.p,{children:"Since there are few API calls this time, it is simply specified directly when calling axios, however it would be better to standardize the implementation using middleware."}),"\n",(0,a.jsx)(t.p,{children:"The front side is now complete."}),"\n",(0,a.jsx)(t.h3,{id:"tweaking-the-backend",children:"Tweaking the backend"}),"\n",(0,a.jsx)(t.p,{children:"Next is the API side. In this sample, the API is also based on Laravel, so what you do is almost the same as the Blade version."}),"\n",(0,a.jsx)(t.p,{children:"First, set the environment variables in .env that will be used by the API this time. This will force the middleware to return an API response on failure."}),"\n",(0,a.jsx)(t.p,{children:"api/.env"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'SAASUS_AUTH_MODE="api"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["then api/routes/api.php",(0,a.jsx)(t.br,{}),"\n","to use the SaaSus SDK middleware and CallbackApiController."]}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{value:"php",label:"PHP",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"// Register a controller that retrieves authentication information such as ID tokens from temporary code\nRoute::get('/callback', 'AntiPatternInc\\Saasus\\Laravel\\Controllers\\CallbackApiController@index');\n\n// Use SaaSus SDK standard Auth Middleware\nRoute::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n   Route::get('/board', 'App\\Http\\Controllers\\MessageApiController@index');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageApiController@post');\n   Route::get('/plan', 'App\\Http\\Controllers\\PlanApiController@index');\n   Route::get('/tenant', 'App\\Http\\Controllers\\TenantApiController@index');\n});\n"})})})}),"\n",(0,a.jsx)(t.p,{children:"api/app/Http/Controllers/MessageApiController.php"}),"\n",(0,a.jsx)(t.p,{children:"On the controller side, the implementation is similar to the Blade version."}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{value:"php",label:"PHP",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\DB;\nuse App\\Models\\Message;\n\nclass MessageApiController extends Controller\n{\n   public function index(Request $request)\n   {\n       // The idea is the same for SPA\n       // Refer to MessageController for processing\n       $tenantid = $request->userinfo['tenants'][0]['id'];\n\n       $messages = DB::table('messages')\n           ->select('messages.*')\n           ->where('tenant_id', $tenantid)\n           ->get();\n       return response()->json($messages);\n   }\n\n   public function post(Request $request)\n   {\n        $tenant_id = $request->userinfo['tenants'][0]['id'];\n        $plan_id = $request->userinfo['tenants'][0]['plan_id'];\n\n        // Use the SaaSus SDK to hit the SaaSus API, acquire various information, and use it for judgment\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $res = $pricingApi->getPricingPlan($plan_id, $pricingApi::FETCH_RESPONSE);\n        $plan = json_decode($res->getBody(), true);\n\n        $meteringUnitName = \"comment_count\";\n        $res = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday($tenant_id, $meteringUnitName, $pricingApi::FETCH_RESPONSE);\n        $count = json_decode($res->getBody(), true);\n\n        $upper = \\AntiPatternInc\\Saasus\\Api\\Lib::findUpperCountByMeteringUnitName($plan, $meteringUnitName);\n\n        $result = '';\n        // Disable posting if the number of comments exceeds the maximum number of comments for the current contracted price plan\n        if ($count['count'] < $upper || $upper === 0) {\n            $result = Message::create([\n                'tenant_id' => $tenant_id,\n                'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n                'message' => $request->message,\n            ]);\n            // add 1 to the number of comments in the metering API\n            $param = new \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\UpdateMeteringUnitTimestampCountNowParam();\n            $param->setMethod('add');\n            $param->setCount(1);\n            $res = $pricingApi->updateMeteringUnitTimestampCountNow($request->userinfo['tenants'][0]['id'], $meteringUnitName, $param, $pricingApi::FETCH_RESPONSE);\n        }\n\n        return response()->json($result);\n   }\n}\n"})})})}),"\n",(0,a.jsx)(t.p,{children:"Now we have implemented the same functionality as the Blade version."}),"\n",(0,a.jsxs)(t.p,{children:["When you log in from the login page, a callback is made to the Next.js version and the page is displayed.",(0,a.jsx)(t.br,{}),"\n","Let's check if it behaves the same as the Blade version."]}),"\n",(0,a.jsx)("img",{src:"/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-3.png",width:"400"}),"\n",(0,a.jsx)(t.p,{children:"This is the end of the tutorial, lastly a summary is provided."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var a=n(96540),r=n(34164),i=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=h({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function A(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function S(e){const t=(0,b.A)();return(0,x.jsx)(A,{...e,children:d(e.children)},String(t))}},24490:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/implementation-to-nextjs-spa-based-application-2-10563e10ac61cabaa2fb6c9e13556ba3.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);