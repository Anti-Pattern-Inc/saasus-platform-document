"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[3138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||s;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"Event Samples",slug:"event-sample",excerpt:"",hidden:!1,createdAt:"Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},o=void 0,i={unversionedId:"saas-development-console/integrate-with-amazon-eventbridge/event-sample",id:"saas-development-console/integrate-with-amazon-eventbridge/event-sample",title:"Event Samples",description:"These event samples are associated with Amazon EventBridge when creating tenants and users. You can check the information of both API request and response.",source:"@site/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample.md",sourceDirName:"saas-development-console/integrate-with-amazon-eventbridge",slug:"/saas-development-console/integrate-with-amazon-eventbridge/event-sample",permalink:"/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample.md",tags:[],version:"current",frontMatter:{title:"Event Samples",slug:"event-sample",excerpt:"",hidden:!1,createdAt:"Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Integrate with Amazon EventBridge",permalink:"/docs/saas-development-console/integrate-with-amazon-eventbridge"},next:{title:"Google Linkage",permalink:"/docs/saas-development-console/google-linkage"}},c={},l=[{value:"create_tenant",id:"create_tenant",level:2},{value:"create_saas_user",id:"create_saas_user",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These event samples are associated with Amazon EventBridge when creating tenants and users. You can check the information of both API request and response."),(0,r.kt)("h2",{id:"create_tenant"},"create_tenant"),(0,r.kt)("p",null,"The created tenant information is set as ",(0,r.kt)("inlineCode",{parentName:"p"},"response_body"),". API reference: ",(0,r.kt)("a",{href:"/docs/reference/auth-api#tag/tenant/operation/CreateTenant",target:"_blank"},"Create Tenant")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0",\n    "id": "4d7d3c0c-208c-3e57-00a9-77a8d1ad1c3e",\n    "detail-type": "api_call",\n    "source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",\n    "account": "999999999999",\n    "time": "2023-10-31T02:22:33Z",\n    "region": "ap-northeast-1",\n    "resources": [],\n    "detail": {\n        "event_type": "create_tenant",\n        "event": {\n            "log_id": "38601dc1-ceed-4561-8728-eb1f4393b317",\n            "date_time": "2023-10-31T02:22:33Z",\n            "date": "2023-10-31",\n            "ttl": "2023-11-07T02:22:33Z",\n            "http_status": "201",\n            "uri": "/v1/auth/tenants",\n            "ip_address": "127.0.0.1:40800",\n            "referer": "https://saasadmin.console.saasus.io/",\n            "request_method": "POST",\n            "saas_id": "sample_saas_id_sample",\n            "api_key": "sample_api_key_sample",\n            "request_body": {\n                "attributes": {},\n                "back_office_staff_email": "AmazonEventBridgeTest@example.com",\n                "name": "AmazonEventBridgeTest"\n            },\n            "response_body": {\n                "attributes": {},\n                "back_office_staff_email": "AmazonEventBridgeTest@example.com",\n                "id": "fe27b501-be9e-424c-9f4a-a199dea81f92",\n                "name": "AmazonEventBridgeTest",\n                "plan_histories": []\n            }\n        },\n        "trace_id": "45196bec-82b8-474f-956a-066e73da310d"\n    }\n}\n')),(0,r.kt)("h2",{id:"create_saas_user"},"create_saas_user"),(0,r.kt)("p",null,"The created user information is set as ",(0,r.kt)("inlineCode",{parentName:"p"},"response_body"),". API reference: ",(0,r.kt)("a",{href:"/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser",target:"_blank"},"Create SaaS User")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0",\n    "id": "e91fa969-551b-0629-998e-a9980070586c",\n    "detail-type": "api_call",\n    "source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",\n    "account": "999999999999",\n    "time": "2023-10-31T08:55:46Z",\n    "region": "ap-northeast-1",\n    "resources": [],\n    "detail": {\n        "event_type": "create_saas_user",\n        "event": {\n            "log_id": "729ac946-7675-4c52-90d3-3bfcde1656a8",\n            "date_time": "2023-10-31T08:55:46Z",\n            "date": "2023-10-31",\n            "ttl": "2023-11-07T08:55:46Z",\n            "http_status": "201",\n            "uri": "/v1/auth/users",\n            "ip_address": "127.0.0.1:58086",\n            "referer": "https://saasadmin.console.saasus.io/",\n            "request_method": "POST",\n            "saas_id": "sample_saas_id_sample",\n            "api_key": "sample_api_key_sample",\n            "request_body": {\n                "email": "AmazonEventBridgeTest_user@example.com",\n                "password": "xxxxx"\n            },\n            "response_body": {\n                "email": "AmazonEventBridgeTest_user@example.com",\n                "id": "075dbcde-b5c3-4c64-8a04-204fee8b5073"\n            }\n        },\n        "trace_id": "629c4bc3-e430-46a0-91bd-1ddf407fe4eb"\n    }\n}\n')),(0,r.kt)("p",null,"For the details of each API, please check the ",(0,r.kt)("a",{href:"/docs/reference/getting-started-with-your-api",target:"_blank"},"API reference"),"."))}m.isMDXComponent=!0}}]);