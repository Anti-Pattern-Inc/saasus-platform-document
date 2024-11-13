---
title: "How to Identify Users who Purchased from AWS Marketplace"
slug: "user-judgment-method"
excerpt: ""
hidden: false
metadata:
  image: []
  robots: "index"
createdAt: "Tue Jun 20 2023 11:31:59 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jun 30 2023 03:39:08 GMT+0000 (Coordinated Universal Time)"
---
We will use the SAASUS AWS MARKETPLACE API.

Use the endpoint named [GetCustomers](/docs/reference/awsmarketplace-api#tag/awsMarketplace/operation/GetCustomers). Please refer to the document for details on the specification.

## Flow till Judgment

1. Set the tenant_id obtained by getUserInfo as the parameter tenant_ids for GetCustomers and execute.
2. Check whether the return value is empty.
3. If not empty, you can determine it is a user who purchased from AWS Marketplace.
