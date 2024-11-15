"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[285],{69585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),s=n(11470),o=n(19365);const i={title:"User Activity History Log",slug:"user-activity-history-log",excerpt:"",hidden:!1,createdAt:"Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"},l=void 0,u={id:"saas-operation-console/user-activity-history-log",title:"User Activity History Log",description:"Overview",source:"@site/versioned_docs/version-1.11/saas-operation-console/user-activity-history-log.md",sourceDirName:"saas-operation-console",slug:"/saas-operation-console/user-activity-history-log",permalink:"/docs/saas-operation-console/user-activity-history-log",draft:!1,unlisted:!1,tags:[],version:"1.11",frontMatter:{title:"User Activity History Log",slug:"user-activity-history-log",excerpt:"",hidden:!1,createdAt:"Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"User Feedback",permalink:"/docs/saas-operation-console/user-feedback"},next:{title:"About AWS Marketplace Integration Function",permalink:"/docs/aws-marketplace-integration/aws-marketplace-integration"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"The user activity history log enables you to check the history of user operations on the SaaS."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"The user activity history log is only available to customers on the Advanced plan or higher."})}),"\n",(0,r.jsx)(t.p,{children:'You can view the "action history log" in the Actions column of the SaaS Operations Console > User Management.'}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"users",src:n(96981).A+"",width:"2874",height:"1250"}),"\n",(0,r.jsx)(t.img,{alt:"activity-history-log",src:n(95460).A+"",width:"2870",height:"1420"})]}),"\n",(0,r.jsx)(t.p,{children:"The history of the screen transitions by users on the SaaS is displayed in chronological order.\nThe log retention period is up to one month."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(t.p,{children:["When executing ",(0,r.jsx)(t.code,{children:"GetUserInfo"}),", set the ",(0,r.jsx)(t.code,{children:"Referer"})," or ",(0,r.jsx)(t.code,{children:"X-SaaSus-Referer"})," header.\nIf both are set, ",(0,r.jsx)(t.code,{children:"X-SaaSus-Referer"})," takes precedence."]}),"\n",(0,r.jsx)(t.p,{children:"Examples of SDK implementations for each language are as follows."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(o.A,{value:"php",label:"PHP",default:!0,children:[(0,r.jsxs)(t.p,{children:["For example, if you are using ",(0,r.jsx)(t.a,{href:"https://github.com/laravel/laravel",children:"Laravel"}),", it would look like this."]}),(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"<?php\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Auth;\nuse Illuminate\\Support\\Facades\\Route;\n\n// Run GetUserInfo inside Middleware\\Auth\n// Retrieve the \"Referer\" and \"X-SaaSus-Referer\" from the request headers and add them as headers when executing\nRoute::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n  Route::get('/users', 'App\\Http\\Controllers\\UserApiController@index');\n});\n"})})]}),(0,r.jsxs)(o.A,{value:"nodejs",label:"Node.js",children:[(0,r.jsxs)(t.p,{children:["For example, if you are using ",(0,r.jsx)(t.a,{href:"https://github.com/expressjs/express",children:(0,r.jsx)(t.code,{children:"Express"})}),", it would look like this."]}),(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"saasus-sdk.AuthMiddleware"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import express from "express";\n\nimport { AuthMiddleware } from "saasus-sdk";\n\nconst app = express();\n\napp.use(\n  // Run GetUserInfo inside AuthMiddleware\n  // Retrieve the "Referer" and "X-SaaSus-Referer" from the request headers and add them as headers when executing\n  ["/users"],\n  AuthMiddleware\n);\n\napp.use(["/users"], usersRouter);\n'})})]}),(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'    @GetMapping(value = "/users", produces = "application/json")\n    public ResponseEntity<?> getUsers(HttpSession session, HttpServletRequest request) throws Exception {\n        AuthApiClient apiClient = new Configuration().getAuthApiClient();\n        apiClient.setReferer(request.getHeader("Referer")); // Set the Referer header\n\n        UserInfoApi userInfoApi = new UserInfoApi(apiClient);\n        UserInfo userInfo = null;\n        try {\n            userInfo = userInfoApi.getUserInfo(getIDToken(request));\n            System.out.println(userInfo);\n        } catch (ApiException e) {\n            e.printStackTrace();\n            throw e;\n        }\n        System.out.println(userInfo.getTenants());\n\n        String tenantId = userInfo.getTenants().get(0).getId();\n        TenantUserApi tenantUserApi = new TenantUserApi(apiClient);\n        Users users = null;\n        try {\n            users = tenantUserApi.getTenantUsers(tenantId);\n            System.out.println(users);\n        } catch (ApiException e) {\n            e.printStackTrace();\n            throw e;\n        }\n\n        return ResponseEntity.ok(users.getUsers());\n    }\n'})})}),(0,r.jsxs)(o.A,{value:"go",label:"Go",children:[(0,r.jsxs)(t.p,{children:["For example, if you are using ",(0,r.jsx)(t.a,{href:"https://github.com/labstack/echo",children:(0,r.jsx)(t.code,{children:"Echo"})}),", it would look like this."]}),(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"middleware.ExtractReferer"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"log"\n\t"net/http"\n\n\t"github.com/joho/godotenv"\n\t"github.com/labstack/echo/v4"\n\t"github.com/saasus-platform/saasus-sdk-go/ctxlib"\n\t"github.com/saasus-platform/saasus-sdk-go/generated/authapi"\n\t"github.com/saasus-platform/saasus-sdk-go/middleware"\n\t"github.com/saasus-platform/saasus-sdk-go/modules/auth"\n)\n\nfunc main() {\n\tif err := run(); err != nil {\n\t\tlog.Fatal(err)\n\t}\n}\n\nvar authClient *authapi.ClientWithResponses\n\nfunc run() error {\n\terr := godotenv.Load()\n\tif err != nil {\n\t\tlog.Fatal("Error loading .env file")\n\t}\n\n\tauthClient, err = auth.AuthWithResponse()\n\tif err != nil {\n\t\treturn fmt.Errorf("failed to create auth client: %w", err)\n\t}\n\n\tidTokenGetter := &middleware.IdTokenGetterFromAuthHeader{}\n\tauthMiddleware := authMiddlewareEcho(idTokenGetter)\n\n\te := echo.New()\n\n\t// Retrieve the "Referer" and "X-SaaSus-Referer" from the request headers and store in context\n\t// middleware.ExtractReferer must be executed before GetUserInfo\n\te.Use(echo.WrapMiddleware(middleware.ExtractReferer))\n\n\te.GET("/users", getUsers, authMiddleware)\n\treturn e.Start(":80")\n}\n\nfunc authMiddlewareEcho(getter middleware.IDTokenGetter) echo.MiddlewareFunc {\n\treturn func(next echo.HandlerFunc) echo.HandlerFunc {\n\t\treturn func(c echo.Context) error {\n\t\t\t// Execute GetUserInfo inside middleware.Authenticate\n\t\t\t// If the context holds Referer, add it as a header when executing GetUserInfo\n\t\t\tuserInfo, err := middleware.Authenticate(c.Request().Context(), getter.GetIDToken(c.Request()))\n\t\t\tif err != nil {\n\t\t\t\thttp.Error(c.Response().Writer, "Unauthorized "+err.Error(), http.StatusUnauthorized)\n\t\t\t\treturn nil\n\t\t\t}\n\n\t\t\tc.Set(string(ctxlib.UserInfoKey), userInfo)\n\t\t\treturn next(c)\n\t\t}\n\t}\n}\n\n'})})]}),(0,r.jsxs)(o.A,{value:"python",label:"Python",children:[(0,r.jsxs)(t.p,{children:["For example, if you are using ",(0,r.jsx)(t.a,{href:"https://github.com/tiangolo/fastapi",children:(0,r.jsx)(t.code,{children:"FastAPI"})}),", it would look like this."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import uvicorn\nfrom typing import Union\nfrom fastapi import FastAPI, Request, Depends, HTTPException, Header\n\nfrom saasus_sdk_python import TenantUserApi\nfrom saasus_sdk_python.callback.callback import Callback\nfrom saasus_sdk_python.middleware.middleware import Authenticate\nfrom saasus_sdk_python.client.client import SignedApiClient\n\nfrom dotenv import load_dotenv\n\nload_dotenv()\napp = FastAPI()\nauth = Authenticate()\ncallback = Callback()\napi_client = SignedApiClient()\n\ndef fastapi_auth(request: Request) -> Union[dict, HTTPException]:\n    auth_header = request.headers.get("Authorization", "")\n    token = auth_header.replace("Bearer ", "") if "Bearer " in auth_header else ""\n    referer = request.headers.get("Referer", "")\n    # Execute GetUserInfo inside auth.authenticate\n    # You can set the referer as an argument\n    user_info, error = auth.authenticate(id_token=token, referer=referer)\n    if error:\n        raise HTTPException(status_code=401, detail=str(error))\n    return user_info\n\n@app.get("/users")\ndef get_tenant_users(auth_user: dict = Depends(fastapi_auth)):\n    if not auth_user.tenants:\n        raise HTTPException(status_code=400, detail="No tenants found for the user")\n\n    tenant_id = auth_user.tenants[0].id\n\n    try:\n        tenant_user_info = TenantUserApi(api_client=api_client).get_tenant_users(tenant_id=tenant_id,\n                                                                                 _headers=api_client.configuration.default_headers)\n\n        return tenant_user_info.users\n    except Exception as e:\n        raise HTTPException(status_code=500, detail=str(e))\n\n\nif __name__ == "__main__":\n    uvicorn.run(app, host="0.0.0.0", port=80)\n'})})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:["When sending HTTP requests from the SaaS screen to the SaaS, set the ",(0,r.jsx)(t.code,{children:"Referer"})," or ",(0,r.jsx)(t.code,{children:"X-SaaSus-Referer"})," header."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Referer"})," header is automatically set by the browser, but the path part of the URL may be omitted.\nIf the expected value is not set, manually set the ",(0,r.jsx)(t.code,{children:"X-SaaSus-Referer"})," header."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"await fetch(url, {\n  headers: {\n    'X-SaaSus-Referer': window.location.href.split('?')[0]\n  }\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The activity history log displays the history of ",(0,r.jsx)(t.code,{children:"GetUserInfo"})," executed with ",(0,r.jsx)(t.code,{children:"Referer"})," or ",(0,r.jsx)(t.code,{children:"X-SaaSus-Referer"})," headers. Therefore if a HTTP request is not sent to the SaaS or only HTTP requests that do not execute ",(0,r.jsx)(t.code,{children:"GetUserInfo"})," are sent when navigating to a certain screen, the transition to that screen will not be recorded."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(23104),o=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},95460:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/activity-history-log-b9b993205335ba004bdefe6c74b9dea2.png"},96981:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/users-539cfddfc0f3fcf57dd9139bff10d48b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);