"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[1161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=s,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),r=a(86010),o=a(12466),l=a(16550),i=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function d(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,u]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=i??c;return m({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==l&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=f(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},s.createElement(g,(0,n.Z)({},e,t)),s.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return s.createElement(S,(0,n.Z)({key:String(t)},e))}},22948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(87462),s=(a(67294),a(3905)),r=a(74866),o=a(85162);const l={sidebar_position:4,title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",slug:"embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",excerpt:"",hidden:!1,createdAt:"Thu Jan 26 2023 02:07:21 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},i=void 0,u={unversionedId:"tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant",id:"version-1.6/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant",title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",description:"Embed the SaaSus SDK in your web application",source:"@site/versioned_docs/version-1.6/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant.mdx",sourceDirName:"tutorial",slug:"/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",permalink:"/docs/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",draft:!1,tags:[],version:"1.6",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",slug:"embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",excerpt:"",hidden:!1,createdAt:"Thu Jan 26 2023 02:07:21 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"SaaS Management using the SaaS Operation Console",permalink:"/docs/tutorial/saas-management-using-the-saas-operation-console"},next:{title:"Manage Rate Plans",permalink:"/docs/tutorial/manage-rate-plans/manage-rate-plans"}},p={},c=[{value:"Embed the SaaSus SDK in your web application",id:"embed-the-saasus-sdk-in-your-web-application",level:2},{value:"Reconfirm SaaS ID, API Key and Client Secret",id:"reconfirm-saas-id-api-key-and-client-secret",level:3},{value:"Prepare to use the SaaSus SDK",id:"prepare-to-use-the-saasus-sdk",level:3},{value:"Include Authentication Module",id:"include-authentication-module",level:3},{value:"Confirmation of SaaSus SDK Integration",id:"confirmation-of-saasus-sdk-integration",level:3},{value:"Making the Sample Application Multi-Tenant",id:"making-the-sample-application-multi-tenant",level:3}],d={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,s.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"embed-the-saasus-sdk-in-your-web-application"},"Embed the SaaSus SDK in your web application"),(0,s.kt)("p",null,"*","Programming knowledge is required"),(0,s.kt)("h3",{id:"reconfirm-saas-id-api-key-and-client-secret"},"Reconfirm SaaS ID, API Key and Client Secret"),(0,s.kt)("p",null,"First, check the API key on the ",(0,s.kt)("strong",{parentName:"p"},"SaaSus Development Console"),". Use this in your application settings",(0,s.kt)("br",{parentName:"p"}),"\n","(Be careful not to expose your API key to other people. The API key displayed in this tutorial has already been deactivated.)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"01",src:a(19764).Z,width:"1295",height:"896"})),(0,s.kt)("h3",{id:"prepare-to-use-the-saasus-sdk"},"Prepare to use the SaaSus SDK"),(0,s.kt)("p",null,"Open the sample application we prepared earlier in the development environment."),(0,s.kt)("p",null,"As we did at the beginning, make sure that the docker container is started using init.sh and the sample application is running on ",(0,s.kt)("a",{parentName:"p",href:"http://localhost/board"},"http://localhost/board"),"."),(0,s.kt)("p",null,"First, to easily use the SaaSus Platform, embed the SaaSus SDK into your application."),(0,s.kt)("p",null,"In this setup the SDK is PHP based, the next step is using Composer."),(0,s.kt)("p",null,"Enter the php container and setup using composer."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"repo$ docker compose exec php bash\nroot@xxx:/var/www# cd api\nroot@xxx:/var/www/api# composer config repositories.saasus-platform/saasus-sdk-php vcs https://github.com/saasus-platform/saasus-sdk-php\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"repo$ docker compose exec node bash\n")))),(0,s.kt)("p",null,"In the api directory add the SDK using the following composer command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"root@xxx:/var/www/api# composer require saasus-platform/saasus-sdk-php\n")),(0,s.kt)("p",null,"After installing the SaaSus SDK, define the environment variables necessary for using the SaaSus SDK."),(0,s.kt)("p",null,"Create a .env file by copying the .env.example file in the api directory and edit the following part at the bottom of the .env file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-.env"},'### for SaaS Platform\nSAASUS_SAAS_ID="saasid_98tjo3wifaoua (SaaS ID of the screen)"\nSAASUS_API_KEY="apikey_kjntowjfoasnkjntwonsflajsno4as (Screen API KEY)"\nSAASUS_SECRET_KEY=" (screen client secret)"\nSAASUS_LOGIN_URL="https://auth.sample.saasus.jp/ (Login screen URL)"\n')),(0,s.kt)("p",null,"SAASUS_SAAS_ID, SAASUS_API_KEY, SAASUS_SECRET_KEY are the SaaS ID, API Key, and client secret displayed on the console page,",(0,s.kt)("br",{parentName:"p"}),"\n","SAASUS_LOGIN_URL sets the URL of the login page created on the SaaSus development console."),(0,s.kt)("h3",{id:"include-authentication-module"},"Include Authentication Module"),(0,s.kt)("p",null,"Next, include the SaaSus Platform's authentication module."),(0,s.kt)("p",null,"In this application, authentication is required at the root of all URIs. If not authenticated, the application cannot be used. The SaaSus authentication function is incorporated as middleware through Laravel."),(0,s.kt)("p",null,"As default in"),(0,s.kt)("p",null,"api/routes/web.php"),(0,s.kt)("p",null,", the Laravel standard authentication function is used, replace it with the SaaSus authentication function."),(0,s.kt)("p",null,"Default code"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"Route::middleware('auth')->group(function () {\n   Route::get('/', function () {\n       return view('welcome');\n   });\n   Route::get('/dispatch', 'App\\Http\\Controllers\\DispatchController@index')->name('dispatch');\n   Route::get('/board', 'App\\Http\\Controllers\\MessageController@index')->name('board');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageController@post')->name('post');\n});\n\nrequire __DIR__ . '/auth.php';\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'app.use(\n  session({\n    secret: "secret",\n    resave: false,\n    saveUninitialized: false,\n  })\n);\napp.use(passport.initialize());\napp.use(passport.session());\n')))),(0,s.kt)("p",null,"Change to the following in order to incorporate the SaaSus authentication function"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"// Route::middleware('auth')->group(function () {\n//     Route::get('/', function () {\n//         return view('welcome');\n//     });\n// Use SaaSus SDK standard Auth Middleware\nRoute::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n   Route::get('/dispatch', 'App\\Http\\Controllers\\DispatchController@index')->name('dispatch');\n   Route::get('/board', 'App\\Http\\Controllers\\MessageController@index')->name('board');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageController@post')->name('post');\n\n   Route::redirect('/', '/board');\n});\n\n// require __DIR__ . '/auth.php';\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { AuthMiddleware } from "saasus-sdk";\n...\n// app.use(\n//   session({\n//     secret: "secret",\n//     resave: false,\n//     saveUninitialized: false,\n//   })\n// );\napp.use(\n  ["/chat", "/api/board", "/api/post", "/api/plan", "/api/tenant"],\n  AuthMiddleware\n);\n// app.use(passport.initialize());\n// app.use(passport.session());\n')))),(0,s.kt)("p",null,"Next prepare a receiver for callback from the authentication screen. Earlier in the set up on the SaaSus development console, the callback destination is defined as ",(0,s.kt)("a",{parentName:"p",href:"http://localhost/callback"},"http://localhost/callback"),", thus receivable it at /callback ."),(0,s.kt)("p",null,"In order to set up the callback, add the following to the last line of api/routes/web.php:"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"// Use the SaaS SDK standard Callback Controller to store JWT in Cookie or Local Storage\nRoute::get('/callback', 'AntiPatternInc\\Saasus\\Laravel\\Controllers\\CallbackController@index');\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { CallbackRouter } from "saasus-sdk";\n...\napp.use("/callback", callbackRouter);\n')))),(0,s.kt)("p",null,"In addition, add the path to api/config/view.php so that the views provided by the SaaSus SDK can be used"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"   'paths' => [\n      resource_path('views'),\n      # \u2193Add this line: View directory provided by SaaSus SDK\n      resource_path('../vendor/saasus-platform/saasus-sdk-php/src/Laravel/Views'),\n   ],\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <title>Auth Callback</title>\n  </head>\n\n  <body>\n    <script>\n      location.href = "/chat";\n    <\/script>\n  </body>\n</html>\n')))),(0,s.kt)("p",null,"With this setup, the authentication information set in the SaaSus Platform will be passed as part of the request when the controller of the application is reached."),(0,s.kt)("p",null,"Add a request argument to the index function of api/app/Http/Controllers/MessageController.php and use dd to check if $request contains userinfo"),(0,s.kt)("p",null,"Change the following 4 lines."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"   public function index(Request $request)\n   {\n       // Check if user information is passed from SaaSus Platform\n       dd($request->userinfo);\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const getChats = async (req: Request, res: Response) => {\n  // Check if user information is passed from SaaSus Platform\n  console.log(req.userinfo);\n")))),(0,s.kt)("p",null,"Once this step is completed the basic SDK setup is complete."),(0,s.kt)("p",null,"Now, log in from the SaaSus Platform and check the operation."),(0,s.kt)("h3",{id:"confirmation-of-saasus-sdk-integration"},"Confirmation of SaaSus SDK Integration"),(0,s.kt)("p",null,"Access the login page created on the SaaSus Platform."),(0,s.kt)("p",null,"Access the login page on the domain set on the console, such as ",(0,s.kt)("a",{parentName:"p",href:"https://auth.sample.saasus.jp"},"https://auth.sample.saasus.jp"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"02",src:a(94023).Z,width:"644",height:"572"})),(0,s.kt)("p",null,"Log in with the email address and password of the user created earlier, then the page will be redirected to the URL set in the Callback URL along with the authentication information."),(0,s.kt)("p",null,"For example, log in with ",(0,s.kt)("a",{parentName:"p",href:"mailto:user1-1@example.com"},"user1-1@example.com"),"."),(0,s.kt)("p",null,"If there are no problems with the previous code, the following should be displayed after login."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'array:3 [\u25bc\n  "email" => "user1-1@example.com"\n  "id" => "f6a02019-1306-431f-b93d-3a756b312481"\n  "tenants" => array:1 [\u25bc\n    0 => array:7 [\u25bc\n      "back_office_staff_email" => "saasus-sample-tenant1@example.com"\n      "completed_sign_up" => true\n      "envs" => array:1 [\u25bc\n        0 => array:3 [\u25bc\n          "id" => 1\n          "name" => "dev"\n          "roles" => array:1 [\u25bc\n            0 => array:2 [\u25bc\n              "display_name" => "\u4e00\u822c\u5229\u7528\u8005"\n              "role_name" => "user"\n            ]\n          ]\n        ]\n      ]\n      "id" => "7b639774-6fba-4b26-b580-f3d755876a4b"\n      "name" => "\u30c6\u30ca\u30f3\u30c8\u306e\u30b5\u30f3\u30d7\u30eb\u305d\u306e\uff11"\n      "plan_id" => "bc011444-a9f1-41c0-8251-bc8928b09ee7"\n      "user_attribute" => array:1 [\u25bc\n        "username" => "user1-1"\n      ]\n    ]\n  ]\n]\n')),(0,s.kt)("p",null,"On the application side, you can see that the user information and tenant information set earlier on the SaaSus Platform."),(0,s.kt)("p",null,"The redirect URL is received by the Callback processing of the SaaS SDK standard (",(0,s.kt)("a",{parentName:"p",href:"http://localhost/callback"},"http://localhost/callback"),"), and in that process the authentication information is stored in the browser's local storage and cookies."),(0,s.kt)("p",null,"Then, with the Auth Middleware of the SaaSus SDK, use the SaaSus Platform to validate the authentication information, get the user information, and put in the Request object."),(0,s.kt)("p",null,"After that, the application's controller will take over, so at this point the application already has the logged-in person's information."),(0,s.kt)("p",null,"Now let's use this information to make the sample bulletin board application multi-tenant ready!"),(0,s.kt)("h3",{id:"making-the-sample-application-multi-tenant"},"Making the Sample Application Multi-Tenant"),(0,s.kt)("p",null,"As api/app/Http/Controllers/MessageController.php contains the main process, the processing for multi-tenant support will be put here."),(0,s.kt)("p",null,"First, change the display part.",(0,s.kt)("br",{parentName:"p"}),"\n","Rewrite the whole public function index."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"   public function index(Request $request)\n   {\n      // $request->userinfo contains various user information and tenant information, so use it\n      $messages = Message::where('tenant_id', $request->userinfo['tenants'][0]['id'])->get();\n      return view('messageBoard.index', ['messages' => $messages, 'plans' => $this::PLANS, 'tenant_name' => $request->userinfo['tenants'][0]['name']]);\n   }\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const getChats = async (req: Request, res: Response) => {\n  try {\n    const messages = await db.Messages.findAll({\n      where: {\n        tenant_id: req.userInfo?.tenants[0].id,\n      },\n    });\n    res.render("chat", {\n      messages: messages,\n      plans: PLANS,\n      tenant_name: TENANT_NAME,\n    });\n  } catch (error) {\n    console.error(error);\n    res.redirect("/chat");\n  }\n};\n')))),(0,s.kt)("p",null,"In this way, search the DB based on the passed tenant ID."),(0,s.kt)("p",null,"Below is the post function."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"   public function post(Request $request)\n   {\n      $validated = $request->validate([\n          'message' => 'required|max:255'\n      ]);\n\n      // Acquire various information from userinfo of $request and use it for judgment\n      $message = Message::create([\n          'tenant_id' => $request->userinfo['tenants'][0]['id'],\n          'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n          'message' => $request->message,\n      ]);\n\n      $request->session()->regenerateToken();\n      return redirect()->route('board');\n   }\n"))),(0,s.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const postChats = async (req: Request, res: Response) => {\n  const mes = req.body.message;\n  // Acquire various information from userinfo of $request and use it for judgment\n  const tenantId = req.userInfo?.tenants[0].id || "";\n  const userName =\n    req.userInfo?.tenants[0].user_attribute.username || "\u30c6\u30b9\u30c8\u30e6\u30fc\u30b6\u30fc";\n  try {\n    await db.Messages.create({\n      tenant_id: tenantId,\n      user_id: userName,\n      message: mes,\n    });\n  } catch (error) {\n    console.error(error);\n  }\n  res.redirect("/chat");\n};\n')))),(0,s.kt)("p",null,"Store tenant ID and user name as a set based on the passed user attributes."),(0,s.kt)("p",null,"Next, display the user ID on the page display."),(0,s.kt)("p",null,"Edit api/resources/views/messageBoard/index.blade.php."),(0,s.kt)("p",null,"Change this $message->user->name part to $message->user_id around line 32."),(0,s.kt)("p",null,"Before change:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-blade"},'                   <div class="mt-4">\n                       <p>\n                           {{ $message->user->name }}\n                           <span class="text-xs text-gray-500">\n                               {{ $message->created_at->format(\'Y/m/d H:i\') }}\n                           </span>\n                       </p>\n')),(0,s.kt)("p",null,"Revised:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-blade"},'                   <div class="mt-4">\n                       <p>\n                           {{ $message->user_id }}\n                           <span class="text-xs text-gray-500">\n                               {{ $message->created_at->format(\'Y/m/d H:i\') }}\n                           </span>\n                       </p>\n')),(0,s.kt)("p",null,"Multi-tenant support is now available!"),(0,s.kt)("p",null,"Now log in and try it out."),(0,s.kt)("p",null,"As before, log in from the login page created on the SaaSus Platform."),(0,s.kt)("p",null,"When you log in, you can see that the tenant name has changed to what was set in the SaaS development console earlier."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"03",src:a(83503).Z,width:"940",height:"344"})),(0,s.kt)("p",null,"There isn't any data yet, so let's post some."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"04",src:a(82810).Z,width:"979",height:"585"})),(0,s.kt)("p",null,"The user name is also displayed."),(0,s.kt)("p",null,"Go back to the login screen, and log in as ",(0,s.kt)("a",{parentName:"p",href:"mailto:user1-2@example.com"},"user1-2@example.com"),", and make some posts."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"05",src:a(40210).Z,width:"965",height:"743"})),(0,s.kt)("p",null,"It will be reflected on the page."),(0,s.kt)("p",null,"Next log in with another tenant's user, ",(0,s.kt)("a",{parentName:"p",href:"mailto:user2-1@example.com"},"user2-1@example.com")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"06",src:a(10713).Z,width:"971",height:"327"})),(0,s.kt)("p",null,"The displayed tenant name has changed, and the content is empty."),(0,s.kt)("p",null,"This shows that displayed information is limited to each specific tenant."),(0,s.kt)("p",null,"Now, after posting several posts in the same way, log in with ",(0,s.kt)("a",{parentName:"p",href:"mailto:user2-2@example.com"},"user2-2@example.com")," and confirm that the information of the same tenant can be displayed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"07",src:a(29527).Z,width:"971",height:"740"})),(0,s.kt)("p",null,"Thus, per-tenant isolation is complete."),(0,s.kt)("p",null,"As for the current separation method, a pool model to separate tenants within the same DB and separated tenants using a simple method. Even if a different tenant separation method per your requirements, such as schema separation or database separation, you can also use the SaaSus SDK to acquire tenant information and implement it."),(0,s.kt)("p",null,"Now that the tenants are separated, next is the implementation of billing-related functions."),(0,s.kt)("p",null,"Let's implement the first steps of pricing, metering, and billing. For billing, we use a billing SaaS called Stripe. If you don't use Stripe, skip the billing part."))}h.isMDXComponent=!0},19764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-01-2ef31540932770e159d1171aa0ce9211.png"},94023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-02-c7d8cea8669155518f6e9af4ab8ab8d7.png"},83503:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-03-e9c6ab68bcf17262b3a80ac25d1d3171.png"},82810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-04-2f2929ae136ac035bbeb7b194ff57ee6.png"},40210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-05-78845443352407f1aa192200d8514c80.png"},10713:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-06-20a01174936edab7169e50ac04dc28ee.png"},29527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-07-98e8a77dd2c20795a3eaa64cf52a9536.png"}}]);