---
title: "How to Identify Users who Purchased from AWS Marketplace"
slug: "user-judgment-method"
excerpt: ""
hidden: false
metadata:
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 17 2026 03:39:00 GMT+0000 (Coordinated Universal Time)"
---

<!-- aws-mp-freeze-notice -->
:::danger The AWS Marketplace integration feature is currently unavailable

The AWS Marketplace integration specification changed in June 2026. Because this feature (listing on AWS Marketplace) does not yet support the new specification, listing can no longer be completed with this procedure, and new usage has been suspended.

We will let you know the timing of resumption once a plan to support the new specification is in place.

For the latest listing process and procedures, please refer to our new service guide site ([https://docs.deshima.cloud](https://docs.deshima.cloud)).

:::

We will use the SAASUS AWS MARKETPLACE API.

Use the endpoint named [GetCustomers](/docs/reference/awsmarketplace-api#tag/awsMarketplace/operation/GetCustomers). Please refer to the document for details on the specification.

## Flow till Judgment

1. Set the tenant_id obtained by getUserInfo as the parameter tenant_ids for GetCustomers and execute.
2. Check whether the return value is empty.
3. If not empty, you can determine it is a user who purchased from AWS Marketplace.
