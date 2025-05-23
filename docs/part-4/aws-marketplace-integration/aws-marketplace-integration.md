---
title: "About AWS Marketplace Integration Function"
slug: "aws-marketplace-integration"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
The AWS Marketplace integration function supports the "AWS Marketplace listing process" carried out by the "SaaS created using the SaaSus Platform".

:::caution
Please note that listing cannot be completed solely by operating within the SaaSus Platform.
:::

# Listing Process by SaaSus Platform

Screen operations are required in three services in the listing procedure. Please proceed while paying attention to which service to process.
- AWS
- AWS Marketplace Management Portal
- SaaSus Platform

First, perform a procedure called seller registration on AWS. Please prepare your AWS account in advance for seller registration. 
After registration, you will be able to access the AWS Marketplace Management Portal (AMMP), where you will set up your public profile and bank account for transfer. 
When these procedures are completed, you will proceed with the listing process using the AWS Marketplace integration function on the SaaSus Platform.
From here on, the procedure will be through the staging environment and the production environment provided by the SaaSus Platform. 
Because it's hard to imagine from text, we will introduce the flow to listing in an overall diagram and related documents from here.

![the whole picture](/img/part-4/aws-marketplace-integration/the-whole-picture.png)

### Entire Flow of Listing Procedure

1. Seller registration (AWS)
   1. [Seller Registration Guide](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/aws-marketplace-seller-registration)

2. Setting of Public profile and disbursement methods (AMMP)
   1. [Guide to setting the Public profile](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/public-profile-settings)
   2. [How to start setting the bank account and disbursement methods](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/tax-information-interview)

   ***
   ===**Start of Test Phase**===

3. Preparation of SaaS product for testing (SaaSus Platform:: Staging environment)

4. Registration of SaaS product for testing (AMMP)
   1. [How to start registration](/docs/part-4/aws-marketplace-integration/product-submission)

5. Preparation of API integration (SaaSus Platform:: Staging environment)

6. Confirmation of  integration with AWS Marketplace

   1. [Example of integration confirmation](/docs/part-4/aws-marketplace-integration/supplementary/integration-test)
   
   ===**End of Test Phase**===
   
   :::info
   During the test phase, you will create an environment for integration confirmation just before listing. 
   You will also create a similar environment in the production phase, but this environment can be used for testing even after the listing process is complete, so you can use it for additional feature development and troubleshooting when a malfunction occurs.
   :::
   ***

   ===**Start of Production Phase**===

7. Preparation of SaaS product for production (SaaSus Platform:: Production environment)

8. Registration of SaaS product for production (AMMP)

9.  Preparation of API integration (SaaSus Platform:: Production environment)

10. Confirmation of integration with AWS Marketplace
   
   ===**End of Production Phase**===
   :::info
   The production phase involves creating the environment necessary for listing in the production environment. If you have finished the integration check in the test phase, you can proceed smoothly. Once the listing process is complete, charges will actually be incurred, so if you want to check the operation in the production environment, you need to make the SaaS product private.
   :::
   ***

11. Final review request for SaaS product for production
    1. [How torequest](/docs/part-4/aws-marketplace-integration/supplementary/final-review-request)

12.  Public release request for SaaS product for production
     1. [Request Method](/docs/part-4/aws-marketplace-integration/supplementary/public-request)

# Criteria for SaaS Products in Listing

There are criteria for listing SaaS products on the AWS Marketplace, which are published in the official documents. Please make sure to check them in advance.

[SaaS Product Guidelines](https://docs.aws.amazon.com/ja_jp/marketplace/latest/userguide/saas-guidelines.html)

## SaaSus Platform's Check

Based on the SaaS product guidelines, we will check from the SaaSus Platform whether the standards are met. We check it when using the AWS Marketplace integration function, but we will also post it in the document so please check it.

- Self sign-up is enabled in the authentication settings of the SaaSus Platform ([Reference](/docs/part-4/aws-marketplace-integration/supplementary/self-up-setting))  
- Users can check the plan they have contracted for on SaaS themselves  
- There is a mechanism for users to contact support on SaaS  
- Consideration of multitenancy is implemented when a user who already has an account purchases SaaS ([Reference](/docs/part-4/aws-marketplace-integration/embedding-products))  
- Users who purchased from the AWS Marketplace cannot change the plan or withdraw on SaaS ([Reference](/docs/part-4/aws-marketplace-integration/supplementary/user-judgment-method))