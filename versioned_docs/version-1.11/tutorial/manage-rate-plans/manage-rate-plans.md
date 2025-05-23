---
title: "Manage Rate Plans"
slug: "manage-rate-plans"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:46:57 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## Structure and Terminology of Pricing Plans

In SaaSus Platform, pricing plans are organized in the following **hierarchical structure**:

![](/img/tutorial/manage-rate-plans/manage-rate-plans-05.png)

- **Metering Unit**: An item used to measure usage, such as the number of comments or users.
- **Measurement Unit**: The smallest unit that serves as the basis for pricing.
  - **Fixed Unit**: A unit where a fixed fee is charged on a regular basis, such as monthly.
  - **Usage Unit**: A unit where a fixed amount is charged per usage.
  - **Tiered Unit**: A unit where a fixed fee is applied based on usage ranges, similar to tiered data charges in mobile plans.
  - **Tiered Usage Unit**: A unit where the per-unit price decreases as usage increases, similar to volume discount pricing.
- **Feature Menu**: A set of one or more measurement units grouped into a feature. Multiple feature menus can be combined to define a pricing plan.
- **Pricing Plan**: The top-level pricing definition assigned to a tenant.
  - A pricing plan consists of one or more function menus.
  - Each tenant can be assigned a specific pricing plan. You can also create a private pricing plan for individual tenants if needed.

---

## Creating a Pricing Plan Using the SaaS Development Console

SaaSus Platform allows you to define pricing plans that support both subscription-based and usage-based billing models.

In this tutorial, we’ll walk through how to configure two example pricing plans:

### Example Pricing Plans

- **Free plan**
  - Number of comments Max 10
- **Basic plan**
  - Fixed fee 500 yen
  - Number of comments pay-as-you-go
    - Up to 10 comments, 500 yen
    - From 11 comments to 50 comments, 1000 yen
    - From 51 comments to 100 comments, 1500 yen
    - Max 100 comments

| Plan       | Basic Charge | Number of Comments                                                                                         |
| :--------- | -----------: | :--------------------------------------------------------------------------------------------------------- |
| Free       |              | 10                                                                                                         |
| Basic      |      500 yen | Pay-as-you-go<br/> 500 yen: Up to 10 comments<br/> 1000 yen: 11 to 50 comments<br/> 1500 yen: 51 to 100 comments<br/> Up to 100 comments          |

## Structure of the Free Plan

The Free Plan is a simple plan that allows up to 10 comments at no cost.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-06.png)

## Structure of the Basic Plan

The Basic Plan combines a fixed monthly fee with tiered usage-based pricing for comment count.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-07.png)

You can create multiple measurement units, each of which can be linked to a metering unit as needed (not required for fixed unit).

Based on this structure, you can use the SaaS Development Console to configure each component: metering units, measurement units, feature menus, and pricing plans.

For detailed input steps and screenshots, please refer to the following guide:

[See the step-by-step guide here (with screenshots)](./setting-measurement-units-function-menus-and-price-plans)

## Applying Rate Plans to Tenants

Log in to the SaaS Operation Console and click Pricing Plan Settings.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-02.png)

Click plan settings for each tenant to change the rate plan.

Set the free plan for tenant sample 1 and the basic plan for sample app tenant 2.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-03.png)

This will change the pricing plan associated with the tenant. When working with Stripe, customer information is created on Stripe and a subscription is also created.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-04.png)

:::info
For details on how to set up Stripe integration,  
please refer to the following SaaS Development Console documentation:  
[Stripe Integration](/docs/part-4/pricing-and-billing/stripe-integration)
:::

Now, using the pricing plans and metering unit information you've configured, let’s implement the first step of authorization processing in the application.
