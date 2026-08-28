---
title: "Stripe Integration"
slug: "stripe-integration"
description: "Learn how to integrate with Stripe to automate billing operations and delegate invoice processing to an external service."
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Aug 28 2026 01:30:00 GMT+0000 (Coordinated Universal Time)"
---

This page explains how to integrate Stripe with the SaaS Development Console to streamline billing and invoice management.  
Information such as pricing plans and tax rates configured in the SaaSus Platform will be automatically synced to Stripe and used in the invoicing process.

:::info
If you do not use Stripe, this configuration is not required.
:::

## Registering the Stripe Secret Key

To enable Stripe integration, register your **Stripe secret key** in the SaaSus Platform.

1. Go to the **External Integrations** menu from the SaaS Development Console  
2. Enter your **Stripe Secret Key**  
3. Click **Save**

![stripe-secret](/img/part-4/pricing-and-billing/stripe-integration/saasus-development-console-used-billing-with-association-01.png)

Once completed, future pricing plan and tax rate configurations will automatically be sent to Stripe.

## Tax Rate Mapping to Stripe

Tax rates configured in the SaaS Development Console will be reflected in Stripe as follows:

| Stripe Column        | SaaS Development Console Field | Description                                                  |
|----------------------|----------------------|--------------------------------------------------------------|
| -                    | Tax Rate Name        | Internal identifier (must be unique)                         |
| Type                 | Display Name         | Displayed on Stripe invoices (if integrated)                 |
| Description          | Description          | Human-readable label for the tax rate                        |
| Rate (%)             | Percentage           | Numeric value of the tax rate                                |
| Region               | Country              | Country where the tax applies                                |
| Inclusive/Exclusive  | Inclusive/Exclusive  | Indicates whether the tax is included in the amount or not   |

![stripe-tax-setting](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-10.png)

## Example: Invoices Issued with Stripe

Based on the configured tax settings, Stripe will generate invoices accordingly — here are examples for **inclusive**, **exclusive**, and **no tax** cases.

### Invoice with Inclusive Tax

**Invoice View**  
![invoice-tax-included](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-11.png)

**PDF Version**  
![invoice-tax-included-pdf](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-12.png)

### Invoice with Exclusive Tax

**Invoice View**  
![invoice-tax-excluded](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-13.png)

**PDF Version**  
![invoice-tax-excluded-pdf](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-14.png)

### Invoice without Tax Settings

**Invoice View**  
![invoice-no-tax](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-15.png)

**PDF Version**  
![invoice-no-tax-pdf](/img/part-4/pricing-and-billing/stripe-integration/tax-rates-16.png)

## Note on Automatic Cancellation in the Test Environment

In the Stripe **test environment, by specification, subscriptions are automatically canceled 90 days after creation**. Subscriptions created via SaaSus Platform are also subject to this, so during testing only the Stripe side may become canceled, causing a state inconsistency between SaaSus Platform and Stripe.

If you need to continue testing over a long period, exclude the target subscription from automatic cancellation.

**How to exclude**  
Open the target subscription in the Stripe dashboard, and from the "..." menu to the right of "Update subscription", select **"Exclude from auto-cancellation"**.

![Exclude a subscription from auto-cancellation in the Stripe dashboard](/img/part-4/pricing-and-billing/stripe-integration/stripe-exclude-auto-cancellation.png)

:::info
This is behavior specific to the Stripe test environment and does not occur in the production environment. The names and locations of setting items may change due to Stripe specification changes, so please also refer to the latest Stripe documentation.
:::
