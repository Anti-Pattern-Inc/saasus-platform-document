---
title: "Getting Started"
slug: "getting-started-with-your-api"
excerpt: "This page will help you get started with SaaSus API."
hidden: false
createdAt: "Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 05 2026 08:18:08 GMT+0000 (Coordinated Universal Time)"
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
[SaaSus Auth API Schema](/docs/reference/auth-api)  
APIs related to user information, basic information, authentication information, tenant information, role information, etc.

[SaaSus Billing API Schema](/docs/reference/billing-api)  
APIs pertaining to obtaining, updating, and deleting information related to external SaaS used in billing operations.

[SaaSus Pricing API Schema](/docs/reference/pricing-api)  
APIs related to pricing units, feature menus, pricing plans, metering unit count, etc.

[SaaSus Communication API Schema](/docs/reference/communication-api)  
APIs for submitting and retrieving user feedback.

[SaaSus Apilog API Schema](/docs/reference/apilog-api)  
APIs for retrieving and analyzing API execution logs.

[SaaSus Awsmarketplace API Schema](/docs/reference/awsmarketplace-api)  
APIs related to AWS Marketplace integration, customer information management, and plan information management.

[SaaSus Integration API Schema](/docs/reference/integration)  
APIs related to Amazon EventBridge integration.

[SaaSus ApiGateway API Schema](/docs/reference/apigateway-api)  
APIs for configuring, managing, and publishing API Gateway features.

[SaaSus Analysis API Schema](/docs/reference/analysis-api)  
APIs for analyzing user behavior history and data collection.

## SaaSus API Postman  
We publish the Postman collection for SaaSus Platform API.

Please create a fork of [📋 SaaSus API Postman](https://www.postman.com/anti-pattern-inc/saasus-platform) from the public workspace.

### How to use  
1. Fork the collection  
2. Set up authentication information (API Key, SaaS ID, etc.)  
For details, please refer to the SaaSus API Postman Guide published on Postman.

The Postman collection includes all SaaSus API endpoints and enables quick API testing.