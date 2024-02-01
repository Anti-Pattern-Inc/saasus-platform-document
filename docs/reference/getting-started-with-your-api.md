---
title: "Getting Started"
slug: "getting-started-with-your-api"
excerpt: "This page will help you get started with SaaSus API."
hidden: false
createdAt: "Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"
---
A signature is necessary to call the SaaSus API.

Authorization Header:
SAASUSSIGV1 Sig=Signature, SaaSID=SaaS ID, APIKey=API Key

Signature = date and time information + API Key + HTTP method + URL (Host: Port/URI) + Request Body
Date and time information: YYYYMMDDHHNN (minute information in UTC)
Obtain HMAC-SHA256 with the above information as a secret key and use it as a signature

All API responses have an “X-Saasus-Trace-Id” header. This is used to enable API tracing during Amazon EventBridge integration.
“X-Saasus-Trace-Id” header can also be specified at request time. If specified at request time, the Trace-Id is inherited.

API  
[SaaSus Auth API Schema](./auth-api)  
APIs related to user information, basic information, authentication information, tenant information, role information, etc.

[SaaSus Billing API Schema](./billing-api)  
APIs pertaining to obtaining, updating, and deleting information related to external SaaS used in billing operations.

[SaaSus Pricing API Schema](./pricing-api)  
APIs related to pricing units, feature menus, pricing plans, metering unit count, etc.

[SaaSus Integration API Schema](./integration)  
APIs related to Amazon EventBridge integration.