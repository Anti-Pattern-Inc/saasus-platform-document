---
title: "API Gateway Feature"
slug: "overview"
excerpt: ""
hidden: false
createdAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
---

### API Gateway Feature Overview

The API Gateway feature of the SaaSus Platform is designed to facilitate the publication and management of APIs when transitioning traditional packaged software or standalone applications to SaaS. With the API Gateway, managing API endpoints and delivering them to end-users becomes streamlined. The API Gateway Beta version is available across **all plans** of the SaaSus Platform.

### Prerequisites

- Must be a **Java application**.
- The application must be **running under an Application Load Balancer**.

:::info
Currently, this feature is only available with the Java SDK.<br/>
Support for other SDKs will be gradually provided in the future.
:::

### Important Notes

When using the API Gateway feature, the following AWS resources will be created in your SaaS environment, which will incur additional AWS fees.

- **Network Load Balancer**

  - 1 load balancer x 0.0243 USD x 730 hours (1 month) = 17.74 USD
  - **Additional fees**: LCU-based charges may apply.

- **PrivateLink (VPC Endpoint)**
  - 1 VPC endpoint x 2 ENIs per VPC endpoint x 730 hours (1 month) x 0.014 USD = 20.44 USD (monthly ENI cost per endpoint)
  - **Additional fees**: Data transfer fees may apply depending on the volume.
