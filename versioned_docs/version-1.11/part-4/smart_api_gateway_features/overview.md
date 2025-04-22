---
title: "Smart API Gateway Feature"
slug: "overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

### Smart API Gateway Feature Overview

In API development, there are typically many considerations beyond implementing business logic, such as authentication and authorization, throttling, protection against external attacks, API schema management, and publishing and updating API documentation. Additionally, maintaining and operating endpoints for API exposure becomes necessary. The Smart API Gateway feature of the SaaSus Platform is designed to enable easy development and construction of APIs with minimal knowledge and expertise in API building, especially when converting existing web-based packaged software or standalone web applications into SaaS solutions. With Smart API Gateway, management of API endpoints and provision to end-users becomes simplified. Note that the Smart API Gateway feature is available across **all plans** of the SaaSus Platform.

:::info
If you wish to watch the sample demo video, see a demonstration of the Smart API Gateway feature, get support for tutorials, gather information for adoption, or discuss any technical queries regarding implementation, please contact us through the following support request form:

[Smart API Gateway by SaaSus Platform Support Request Form](https://forms.gle/XhFD9fCQv1zVGyRT9)<br/>
:::

### Image When Not Using the Smart API Gateway

When the Smart API Gateway is not used, you have to define the necessary APIs, handle authentication and authorization, implement throttling, and develop the APIs themselves.

![api-gateway-function/api-gateway-function-2](/ja/img/part-4/smart_api_gateway_features/api-gateway-function-2.png)

### Smart API Gateway Architecture

It provides the necessary features for APIs and securely exposes your existing processes as APIs with minimal changes.

![api-gateway-function/api-gateway-function-1](/ja/img/part-4/smart_api_gateway_features/api-gateway-function-1.png)

### Prerequisites

- The application targeted for API implementation must be a **Java Web Application running on AWS**
- The application must be **operating under an Application Load Balancer**

:::info
Currently, this feature is only available with the Java SDK.<br/>
Support for other SDKs will be gradually provided in the future.
:::

### Important Notes

When using the Smart API Gateway feature, the following AWS resources will be created in your SaaS environment, which will incur additional AWS fees.

- **Network Load Balancer**

  - 1 load balancer x 0.0243 USD x 730 hours (1 month) = 17.74 USD
  - **Additional fees**: LCU-based charges may apply.

- **PrivateLink (VPC Endpoint)**
  - 1 VPC endpoint x 2 ENIs per VPC endpoint x 730 hours (1 month) x 0.014 USD = 20.44 USD (monthly ENI cost per endpoint)
  - **Additional fees**: Data transfer fees may apply depending on the volume.
