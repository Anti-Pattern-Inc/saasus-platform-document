---
title: "Stripe Integration"
slug: "stripe-integration"
description: "Learn how to integrate with Stripe to automate billing operations and delegate invoice processing to an external service."
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> Learn how to integrate with Stripe to automate billing operations and delegate invoice processing to an external service.

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