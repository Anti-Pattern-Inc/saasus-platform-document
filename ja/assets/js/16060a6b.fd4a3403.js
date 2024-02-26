"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5145],{51526:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(74848),s=n(28453);const r={title:"\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb",slug:"event-sample",excerpt:"",hidden:!1,createdAt:"Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},o="create_tenant",i={id:"saas-development-console/integrate-with-amazon-eventbridge/event-sample",title:"\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb",description:"\u30c6\u30ca\u30f3\u30c8\u3001\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6642\u306bAmazon EventBridge \u306b\u9023\u643a\u3055\u308c\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u30b5\u30f3\u30d7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/saas-development-console/integrate-with-amazon-eventbridge/event-sample.md",sourceDirName:"saas-development-console/integrate-with-amazon-eventbridge",slug:"/saas-development-console/integrate-with-amazon-eventbridge/event-sample",permalink:"/ja/docs/next/saas-development-console/integrate-with-amazon-eventbridge/event-sample",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb",slug:"event-sample",excerpt:"",hidden:!1,createdAt:"Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Amazon EventBridge \u9023\u643a\u6a5f\u80fd",permalink:"/ja/docs/next/saas-development-console/integrate-with-amazon-eventbridge-jp"},next:{title:"Google\u9023\u643a",permalink:"/ja/docs/next/saas-development-console/google-linkage"}},d={},c=[];function l(t){const e={br:"br",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["\u30c6\u30ca\u30f3\u30c8\u3001\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u6642\u306bAmazon EventBridge \u306b\u9023\u643a\u3055\u308c\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u30b5\u30f3\u30d7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002",(0,a.jsx)(e.br,{}),"\n","API\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u60c5\u5831\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u60c5\u5831\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.h1,{id:"create_tenant",children:"create_tenant"}),"\n",(0,a.jsxs)(e.p,{children:["\u4f5c\u6210\u3057\u305f\u30c6\u30ca\u30f3\u30c8\u60c5\u5831\u304c",(0,a.jsx)(e.code,{children:"response_body"}),"\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,a.jsx)(e.br,{}),"\n","API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9 : ",(0,a.jsx)("a",{href:"/docs/reference/auth-api#tag/tenant/operation/CreateTenant",target:"_blank",children:"Create Tenant"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"version": "0",\n\t"id": "4d7d3c0c-208c-3e57-00a9-77a8d1ad1c3e",\n\t"detail-type": "api_call",\n\t"source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",\n\t"account": "999999999999",\n\t"time": "2023-10-31T02:22:33Z",\n\t"region": "ap-northeast-1",\n\t"resources": [],\n\t"detail": {\n\t\t"event_type": "create_tenant",\n\t\t"event": {\n\t\t\t"log_id": "38601dc1-ceed-4561-8728-eb1f4393b317",\n\t\t\t"date_time": "2023-10-31T02:22:33Z",\n\t\t\t"date": "2023-10-31",\n\t\t\t"ttl": "2023-11-07T02:22:33Z",\n\t\t\t"http_status": "201",\n\t\t\t"uri": "/v1/auth/tenants",\n\t\t\t"ip_address": "127.0.0.1:40800",\n\t\t\t"referer": "https://saasadmin.console.saasus.io/",\n\t\t\t"request_method": "POST",\n\t\t\t"saas_id": "sample_saas_id_sample",\n\t\t\t"api_key": "sample_api_key_sample",\n\t\t\t"request_body": {\n\t\t\t\t"attributes": {},\n\t\t\t\t"back_office_staff_email": "AmazonEventBridgeTest@example.com",\n\t\t\t\t"name": "AmazonEventBridgeTest"\n\t\t\t},\n\t\t\t"response_body": {\n\t\t\t\t"attributes": {},\n\t\t\t\t"back_office_staff_email": "AmazonEventBridgeTest@example.com",\n\t\t\t\t"id": "fe27b501-be9e-424c-9f4a-a199dea81f92",\n\t\t\t\t"name": "AmazonEventBridgeTest",\n\t\t\t\t"plan_histories": []\n\t\t\t}\n\t\t},\n\t\t"trace_id": "45196bec-82b8-474f-956a-066e73da310d"\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.h1,{id:"create_saas_user",children:"create_saas_user"}),"\n",(0,a.jsxs)(e.p,{children:["\u4f5c\u6210\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u304c",(0,a.jsx)(e.code,{children:"response_body"}),"\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,a.jsx)(e.br,{}),"\n","API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9 : ",(0,a.jsx)("a",{href:"/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser",target:"_blank",children:"Create SaaS User"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"version": "0",\n\t"id": "e91fa969-551b-0629-998e-a9980070586c",\n\t"detail-type": "api_call",\n\t"source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",\n\t"account": "999999999999",\n\t"time": "2023-10-31T08:55:46Z",\n\t"region": "ap-northeast-1",\n\t"resources": [],\n\t"detail": {\n\t\t"event_type": "create_saas_user",\n\t\t"event": {\n\t\t\t"log_id": "729ac946-7675-4c52-90d3-3bfcde1656a8",\n\t\t\t"date_time": "2023-10-31T08:55:46Z",\n\t\t\t"date": "2023-10-31",\n\t\t\t"ttl": "2023-11-07T08:55:46Z",\n\t\t\t"http_status": "201",\n\t\t\t"uri": "/v1/auth/users",\n\t\t\t"ip_address": "127.0.0.1:58086",\n\t\t\t"referer": "https://saasadmin.console.saasus.io/",\n\t\t\t"request_method": "POST",\n\t\t\t"saas_id": "sample_saas_id_sample",\n\t\t\t"api_key": "sample_api_key_sample",\n\t\t\t"request_body": {\n\t\t\t\t"email": "AmazonEventBridgeTest_user@example.com",\n\t\t\t\t"password": "xxxxx"\n\t\t\t},\n\t\t\t"response_body": {\n\t\t\t\t"email": "AmazonEventBridgeTest_user@example.com",\n\t\t\t\t"id": "075dbcde-b5c3-4c64-8a04-204fee8b5073"\n\t\t\t}\n\t\t},\n\t\t"trace_id": "629c4bc3-e430-46a0-91bd-1ddf407fe4eb"\n\t}\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5404API\u306e\u5185\u5bb9\u306f\u3001",(0,a.jsx)("a",{href:"/docs/reference/getting-started-with-your-api",target:"_blank",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function o(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);