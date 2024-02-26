"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7255],{3852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(74848),s=n(28453);const r={title:"Event Samples",slug:"event-sample",excerpt:"",hidden:!1,createdAt:"Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},o=void 0,i={id:"saas-development-console/integrate-with-amazon-eventbridge/event-sample",title:"Event Samples",description:"These event samples are associated with Amazon EventBridge when creating tenants and users. You can check the information of both API request and response.",source:"@site/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample.md",sourceDirName:"saas-development-console/integrate-with-amazon-eventbridge",slug:"/saas-development-console/integrate-with-amazon-eventbridge/event-sample",permalink:"/docs/next/saas-development-console/integrate-with-amazon-eventbridge/event-sample",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Event Samples",slug:"event-sample",excerpt:"",hidden:!1,createdAt:"Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Integrate with Amazon EventBridge",permalink:"/docs/next/saas-development-console/integrate-with-amazon-eventbridge"},next:{title:"Google Linkage",permalink:"/docs/next/saas-development-console/google-linkage"}},c={},d=[{value:"create_tenant",id:"create_tenant",level:2},{value:"create_saas_user",id:"create_saas_user",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"These event samples are associated with Amazon EventBridge when creating tenants and users. You can check the information of both API request and response."}),"\n",(0,a.jsx)(t.h2,{id:"create_tenant",children:"create_tenant"}),"\n",(0,a.jsxs)(t.p,{children:["The created tenant information is set as ",(0,a.jsx)(t.code,{children:"response_body"}),". API reference: ",(0,a.jsx)("a",{href:"/docs/reference/auth-api#tag/tenant/operation/CreateTenant",target:"_blank",children:"Create Tenant"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"version": "0",\n\t"id": "4d7d3c0c-208c-3e57-00a9-77a8d1ad1c3e",\n\t"detail-type": "api_call",\n\t"source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",\n\t"account": "999999999999",\n\t"time": "2023-10-31T02:22:33Z",\n\t"region": "ap-northeast-1",\n\t"resources": [],\n\t"detail": {\n\t\t"event_type": "create_tenant",\n\t\t"event": {\n\t\t\t"log_id": "38601dc1-ceed-4561-8728-eb1f4393b317",\n\t\t\t"date_time": "2023-10-31T02:22:33Z",\n\t\t\t"date": "2023-10-31",\n\t\t\t"ttl": "2023-11-07T02:22:33Z",\n\t\t\t"http_status": "201",\n\t\t\t"uri": "/v1/auth/tenants",\n\t\t\t"ip_address": "127.0.0.1:40800",\n\t\t\t"referer": "https://saasadmin.console.saasus.io/",\n\t\t\t"request_method": "POST",\n\t\t\t"saas_id": "sample_saas_id_sample",\n\t\t\t"api_key": "sample_api_key_sample",\n\t\t\t"request_body": {\n\t\t\t\t"attributes": {},\n\t\t\t\t"back_office_staff_email": "AmazonEventBridgeTest@example.com",\n\t\t\t\t"name": "AmazonEventBridgeTest"\n\t\t\t},\n\t\t\t"response_body": {\n\t\t\t\t"attributes": {},\n\t\t\t\t"back_office_staff_email": "AmazonEventBridgeTest@example.com",\n\t\t\t\t"id": "fe27b501-be9e-424c-9f4a-a199dea81f92",\n\t\t\t\t"name": "AmazonEventBridgeTest",\n\t\t\t\t"plan_histories": []\n\t\t\t}\n\t\t},\n\t\t"trace_id": "45196bec-82b8-474f-956a-066e73da310d"\n\t}\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"create_saas_user",children:"create_saas_user"}),"\n",(0,a.jsxs)(t.p,{children:["The created user information is set as ",(0,a.jsx)(t.code,{children:"response_body"}),". API reference: ",(0,a.jsx)("a",{href:"/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser",target:"_blank",children:"Create SaaS User"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"version": "0",\n\t"id": "e91fa969-551b-0629-998e-a9980070586c",\n\t"detail-type": "api_call",\n\t"source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",\n\t"account": "999999999999",\n\t"time": "2023-10-31T08:55:46Z",\n\t"region": "ap-northeast-1",\n\t"resources": [],\n\t"detail": {\n\t\t"event_type": "create_saas_user",\n\t\t"event": {\n\t\t\t"log_id": "729ac946-7675-4c52-90d3-3bfcde1656a8",\n\t\t\t"date_time": "2023-10-31T08:55:46Z",\n\t\t\t"date": "2023-10-31",\n\t\t\t"ttl": "2023-11-07T08:55:46Z",\n\t\t\t"http_status": "201",\n\t\t\t"uri": "/v1/auth/users",\n\t\t\t"ip_address": "127.0.0.1:58086",\n\t\t\t"referer": "https://saasadmin.console.saasus.io/",\n\t\t\t"request_method": "POST",\n\t\t\t"saas_id": "sample_saas_id_sample",\n\t\t\t"api_key": "sample_api_key_sample",\n\t\t\t"request_body": {\n\t\t\t\t"email": "AmazonEventBridgeTest_user@example.com",\n\t\t\t\t"password": "xxxxx"\n\t\t\t},\n\t\t\t"response_body": {\n\t\t\t\t"email": "AmazonEventBridgeTest_user@example.com",\n\t\t\t\t"id": "075dbcde-b5c3-4c64-8a04-204fee8b5073"\n\t\t\t}\n\t\t},\n\t\t"trace_id": "629c4bc3-e430-46a0-91bd-1ddf407fe4eb"\n\t}\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["For the details of each API, please check the ",(0,a.jsx)("a",{href:"/docs/reference/getting-started-with-your-api",target:"_blank",children:"API reference"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);