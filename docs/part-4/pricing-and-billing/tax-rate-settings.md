---
title: "Tax Rate Settings"
slug: "tax-rate-settings"
description: "Explains how to configure tax rates to be applied to each tenant's pricing plan."
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> Explains how to configure tax rates to be applied to each tenant's pricing plan.

Tax rate settings define the type and percentage of taxes (such as consumption tax) applied to each tenant's pricing plan.  
When configuring a pricing plan for a tenant in the SaaS Operation Console, you can select a tax rate along with the plan.

:::info
**About consumption tax displayed on invoices**  
Japan’s qualified invoice system began on October 1, 2023.  
A “qualified invoice” is a receipt or invoice that includes consumption tax details, required for calculating tax amounts when filing taxes.  
<a href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm" target="_blank">https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm</a>
:::

## Creating a Tax Rate

1. **Go to `Pricing Plan -> Tax Rate Settings` in the SaaS Development Console**

![tax-rates-1](/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-1.png)

2. **Click on `Create Tax Rate`**

![tax-rates-2](/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-2.png)

3. Fill in the required fields in the tax rate creation form:

| Field        | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| Tax Rate Name | Unique identifier used in the system (must be unique)                      |
| Display Name  | Name shown on invoices (if integrated with Stripe)                         |
| Description   | Human-readable explanation of the tax rate                                 |
| Percentage    | The tax rate to apply (e.g., 10 for 10%)                                   |
| Country       | Country where the tax applies                                               |
| Inclusive/Exclusive | Whether the tax is included in the price or added on top              |

:::caution
Once created, tax rates cannot be modified or deleted. Please review carefully before saving.
:::

After completing the form, click **Create** to save the tax rate.

![tax-rates-3](/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-3.png)

![tax-rates-4](/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-4.png)