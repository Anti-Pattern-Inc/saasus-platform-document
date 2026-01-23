---
title: "Examples of Integration Confirmation to be Done After API Integration"
slug: "integration-test"
excerpt: ""
hidden: false
metadata:
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
Please check the URL of the product page that is privately published on AWS Marketplace in advance.

### How to Check the Product Page URL

1. Sign in to AWS Marketplace Management Portal.
2. Follow this <a href="https://aws.amazon.com/marketplace/management/products/saas?#" target="_blank">link</a>.
3. A list of SaaS products in private publication will be displayed, so select the SaaS product you want to check.
4. On the detail page shown, you can check the product page URL from the button `View on AWS Marketplace` at the top right of the page.

![integration-test-1](/img/part-4/aws-marketplace-integration/supplementary/integration-test-1.png)

## About Integration Confirmation Methods

To confirm the integration with AWS Marketplace, you need to implement three use cases in total.

### When a New Account is Created by Signup After Purchase

After signing up, please make sure that the created account is correctly synchronized with the purchased contract.

Confirmation Example

1. Access the product page on AWS Marketplace with a test account.
2. Select and purchase a particular contract.

<!----->

1. After the purchase, follow the prompts to the sign-up page of the SaaS service.
2. After signing up, sign in to the SaaS service with that account.
3. Move to the page where you can check the contract information and inspect the contract details.

### When an Existing User Sign-In After Purchase

Please ensure that a user who already has an account on the SaaS service is correctly synchronized with the contract after purchase.

Confirmation Example

1. With a test account that already possesses an account on the SaaS service, access the product page on AWS Marketplace.
2. Choose a specific contract and purchase it.
3. After the purchase, follow the prompts to the sign-up page of the SaaS service, then move on to the sign-in page.
4. After signing in, sign in to the SaaS with that account.
5. Move to the page where you can check the contract information and inspect the contract details.

### When Changing a Contract on the AWS Marketplace Product Contract Page After Purchase

If you already have a contract on AWS Marketplace, when you update the contract on the product contract page, please ensure that the contract is correctly synchronized.

Confirmation Example

1. Access the product contract page on AWS Marketplace.
2. Choose a specific contract and update the contract.
3. Sign in to SaaS.
4. Move to the page where you can check the contract information and inspect the contract details.
