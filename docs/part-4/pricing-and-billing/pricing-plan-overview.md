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

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Image</th>
      <th>Main Use Cases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Fixed Unit</strong></td>
      <td>Fixed price such as 500 JPY per month</td>
      <td>Monthly base fee, maintenance cost</td>
    </tr>
    <tr>
      <td><strong>Usage Unit</strong></td>
      <td>1 API request = 0.1 JPY</td>
      <td>Simple pay-as-you-go</td>
    </tr>
    <tr>
      <td><strong>Tiered Unit</strong></td>
      <td className="no-p-margin">
        0–10 items = 500 JPY<br />
        11–50 items = 1,000 JPY<br />
        etc.
      </td>
      <td>Step-based pricing (like mobile data plans)</td>
    </tr>
    <tr>
      <td><strong>Tiered Usage Unit</strong></td>
      <td className="no-p-margin">
        0–10 items = 100 JPY/item<br />
        11–20 items = 90 JPY/item<br />
        etc.
      </td>
      <td>Volume discount pricing</td>
    </tr>
  </tbody>
</table>
</div>

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

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>Plan</th>
      <th>Base Fee</th>
      <th>Comment Count Billing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Free</strong></td>
      <td className="text-right">0 JPY</td>
      <td>Free up to 10 items</td>
    </tr>
    <tr>
      <td><strong>Basic</strong></td>
      <td className="text-right">500 JPY</td>
      <td className="no-p-margin">
        Tiered pricing<br />
        0–10 items = 500 JPY<br />
        11–50 items = 1,000 JPY<br />
        51–100 items = 1,500 JPY
      </td>
    </tr>
    <tr>
      <td><strong>Enterprise</strong></td>
      <td className="text-right">0 JPY</td>
      <td className="no-p-margin">
        Tiered usage-based<br />
        0–1,000 items = 50 JPY/item<br />
        1,001–5,000 items = 40 JPY/item<br />
        5,001〜 = 30 JPY/item
      </td>
    </tr>
  </tbody>
</table>
</div>

### Free Plan Example  
![Free Plan Structure](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-06.png)

### Basic Plan Example  
![Basic Plan Structure](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-07.png)

### Enterprise Plan Example  
![Enterprise Plan Structure](/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-08.png)

## 5. Implementation Tip: Base Feature Decisions on Measurement Units

When your application decides "which features are available," "what the limits are," or "how many days of logs can be viewed," we recommend basing the decision on the **measurement units (metering units and feature menus) tied to the pricing plan** rather than on the pricing plan ID itself.

If you branch directly on the pricing plan ID, you need to modify and redeploy your application code every time you add or change a pricing plan.

```js
// Branching on the pricing plan ID
if (pricingPlanId === "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") {
  // Only this plan can use this feature
  enableFeatureX();
  logRetentionDays = 30;
}
```

By contrast, if you decide based on the measurement units tied to the plan, you can adjust the behavior from the settings without changing your code.

```js
// Deciding based on the measurement units tied to the plan
// Example) Gate a feature by whether the "feature_x" measurement unit is included
if (hasMeteringUnit(plan, "feature_x")) {
  enableFeatureX();
}

// Example) Use the value of the "log_retention_days" measurement unit as the limit
logRetentionDays = getMeteringUnitValue(plan, "log_retention_days");
```

:::info
When your implementation refers to measurement units, adding a new pricing plan lets you switch the application's behavior simply by changing the measurement unit (metering unit or feature menu) settings in the SaaS Development Console. You no longer need to modify your code every time you add or change a pricing plan.
:::