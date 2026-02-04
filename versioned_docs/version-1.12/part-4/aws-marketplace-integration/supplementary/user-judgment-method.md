---
title: "How to Identify Users who Purchased from AWS Marketplace"
slug: "user-judgment-method"
excerpt: ""
hidden: false
metadata:
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
We will use the SAASUS AWS MARKETPLACE API.

Use the endpoint named [GetCustomers](/docs/reference/awsmarketplace-api#tag/awsMarketplace/operation/GetCustomers). Please refer to the document for details on the specification.

## Flow till Judgment

1. Set the tenant_id obtained by getUserInfo as the parameter tenant_ids for GetCustomers and execute.
2. Check whether the return value is empty.
3. If not empty, you can determine it is a user who purchased from AWS Marketplace.
