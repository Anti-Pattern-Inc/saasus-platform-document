---
title: "Pricing Plan Overview"
slug: "pricing-plan-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Oct 26 2026 02:35:42 GMT+0000 (UTC)"
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

## 5. Using Measurement Units to Determine Feature Availability and Limits

When your application determines feature availability or usage limits, we recommend referring to the measurement units included in the pricing plan.
Branching on each pricing plan ID requires adding conditions and redeploying your application even when a new plan provides the same feature.

```js
// Define a comment limit for each pricing plan ID
let commentLimit = 0;
if (pricingPlanId === "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") {
  commentLimit = 10;
}
```

The pricing plan retrieval API (`GetPricingPlan`) returns a `pricing_menus` array of feature menus, each containing a `units` array of measurement units.
For usage units and other units linked to a metering unit, `metering_unit_name` identifies the metering unit and `upper_count` specifies the upper limit.
The following example assumes that `comment_count` is the metering unit for counting comments and that the plan contains exactly one measurement unit linked to it.
Here, `plan` is the retrieved pricing plan used by the tenant.

```js
// Read the comment limit from the measurement units included in the plan
const commentUnit = plan.pricing_menus
  .flatMap((menu) => menu.units)
  .find((unit) => unit.metering_unit_name === "comment_count");

// This example disables comments when the matching measurement unit is absent
const commentLimit = commentUnit?.upper_count ?? 0;
const canUseComments = commentLimit > 0;
```

With this structure, including a measurement unit linked to the same metering unit in a new pricing plan lets your application determine comment availability and limits without adding a pricing plan ID condition.
A feature menu groups measurement units, while a metering unit counts usage.
Fixed units have neither `metering_unit_name` nor `upper_count`, so they are excluded from this example's lookup.

:::info
To apply these settings, implement application logic that retrieves the tenant's pricing plan and determines feature availability and limits.
If you cache the result, refresh it when the tenant switches plans or the settings change.
Your application must also implement the logic that rejects operations exceeding the limit.
:::
