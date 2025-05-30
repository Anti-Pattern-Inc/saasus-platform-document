---
title: "Pricing Plan Overview"
slug: "pricing-plan-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
## 1. The 4 Layers of a Pricing Plan

A pricing plan is defined by combining the following **4 hierarchical layers**:

| Layer             | Role                                 | Example Settings                      |
|------------------|--------------------------------------|----------------------------------------|
| **Metering Unit**     | Counter for measuring usage          | Number of comments / active users...  |
| **Measurement Unit** | The smallest billing logic unit      | Fixed / Usage-Based / Tiered / Tiered Usage |
| **Feature Menu**   | A \"feature package\" bundling multiple units | Free Menu / Pro Menu, etc.             |
| **Pricing Plan**    | Top-level plan assigned to tenants  | Free / Basic / Enterprise...           |

![Pricing Plan Hierarchy](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-05.png)

## 2. Measurement Units – 4 Billing Models

| Type                      | Image                                                 | Typical Use Cases                |
|---------------------------|--------------------------------------------------------|----------------------------------|
| **Fixed Unit**            | Fixed price such as 500 JPY/month                     | Monthly base fee, maintenance cost |
| **Usage Unit**      | 1 API request = 0.1 JPY                               | Simple pay-as-you-go             |
| **Tiered Unit**           | 0–10 = **500 JPY**<br/>11–50 = **1,000 JPY**          | Step-based pricing (like mobile data plans) |
| **Tiered Usage Unit** | 0–10 = **100 JPY/item**<br/>11–20 = **90 JPY/item** | Volume discount pricing          |

:::info
For **detailed calculation patterns**, see  
[The difference in rate calculation between Tiered units and Tiered usage units](/docs/part-4/pricing-and-billing/tiered-unit).
:::

## 3. Relationship Between Meter Units and Measurement Units

| Measurement Unit Type       | Refers to Meter Unit | Typical Billing Logic                                  |
|-----------------------------|----------------------|---------------------------------------------------------|
| Fixed Unit                  | **Does not refer**    | Fixed monthly fee                                       |
| Usage Unit            | Refers (one)          | Usage × unit price                                      |
| Tiered Unit                 | Refers (one)          | Charge based on the **fixed amount for the usage tier** |
| Tiered Usage Unit     | Refers (one)          | **Sum of (unit price × usage) for each tier**           |

:::info
**Fixed Units** do not refer to any meter unit.  
Use this model to define **flat fees unaffected by usage** (e.g., 1,000 JPY/month).
:::

## 4. Model Samples (Free / Basic / Enterprise)

| Plan         | Base Fee | Comment Count Billing |
|--------------|----------|------------------------|
| **Free**        | 0 JPY     | Free up to 10 items      |
| **Basic**       | 500 JPY   | Tiered (0–10 = 500 JPY / 11–50 = 1,000 JPY / 51–100 = 1,500 JPY) |
| **Enterprise**  | 0 JPY     | Tiered usage-based (0–1,000 = 50 JPY/item / 1,001–5,000 = 40 JPY/item / 5,001+ = 30 JPY/item) |

### Free Plan Example  
![Free Plan Structure](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-06.png)

### Basic Plan Example  
![Basic Plan Structure](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-07.png)

### Enterprise Plan Example  
![Enterprise Plan Structure](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-08.png)