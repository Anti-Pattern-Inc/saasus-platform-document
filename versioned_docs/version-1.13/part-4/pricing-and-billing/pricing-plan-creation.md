---
title: "Creating Pricing Plans"
slug: "pricing-plan-creation"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

This page walks you through how to configure the **4 key elements** required in the SaaS Development Console—**Meter Unit → Measurement Unit → Function Menu → Pricing Plan**—using **Free / Basic / Enterprise** as examples.

---

## 1. Create a Meter Unit

First, register a **meter unit** to track usage.

| Meter Unit Key | Display Name | Description     |
|----------------|--------------|-----------------|
| `comment_count` | Comment Count | Comment Count |

![Meter Unit Settings](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-07.png)

:::info
If Stripe integration is enabled, you can choose `sum` or `max` for usage aggregation.  
Details → [Meter Unit Settings](/docs/part-4/pricing-and-billing/usage-metering)
:::

---

## 2. Create Measurement Units

### 2-1. For Free Plan (Usage Unit)

| Key             | Display Name           | Type                | Meter         | Unit Price | Cap | Currency |
|----------------|------------------------|---------------------|---------------|------------|-----|----------|
| `free_comment` | Number of Free Plan Comments | **Usage Unit** | Comment Count | 0          | 10  | JPY      |

![Free Measurement Unit](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-02.png)

---

### 2-2. For Basic Plan (Fixed + Tiered Units)

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Display Name</th>
      <th>Type</th>
      <th>Meter</th>
      <th>Pricing</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>basic_base</code></td>
      <td>Basic Plan Basic Fee</td>
      <td><strong>Fixed Unit</strong></td>
      <td className="text-center">—</td>
      <td className="text-right">500 / month</td>
      <td className="text-right">JPY</td>
    </tr>
    <tr>
      <td><code>basic_comment</code></td>
      <td>Number of comments for Basic plan</td>
      <td><strong>Tiered Unit</strong></td>
      <td>Comment Count</td>
      <td className="text-right no-p-margin">
        0-10=500<br />
        11-50=1,000<br />
        51-100=1,500
      </td>
      <td className="text-right">JPY</td>
    </tr>
  </tbody>
</table>
</div>

![Basic Fixed Unit](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-01.png)  
![Basic Tiered Unit](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-03.png)

---

### 2-3. For Enterprise Plan (Tiered Usage Unit)

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Display Name</th>
      <th>Type</th>
      <th>Meter</th>
      <th>Tiered Pricing</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterprise_comment</code></td>
      <td>Number of comments for Enterprise plan</td>
      <td><strong>Tiered Usage Unit</strong></td>
      <td>Comment Count</td>
      <td className="text-right no-p-margin">
    0-1,000=50 / item<br />
    1,001-5,000=40 / item<br />
    5,001〜=30 / item
      </td>
      <td className="text-right">JPY</td>
    </tr>
  </tbody>
</table>
</div>

![Enterprise Measurement Unit](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-08.png)

---

## 3. Create Function Menus

| Menu Key        | Display Name               | Included Units                          |
|-----------------|----------------------------|------------------------------------------|
| `free_menu`     | Free Plan Basic Menu             | Comment Count for Free                  |
| `basic_menu`    | Basic Plan Basic Menu            | Basic Plan Basic Fee<br />Number of comments for Basic plan |
| `enterprise_menu` | Enterprise Plan Basic Menu      | Number of comments for Enterprise plan            |

![Function Menu Settings](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-05.png)

Repeat the same process for Basic and Enterprise plans as you did for Free.

---

## 4. Create Pricing Plans

| Plan Key         | Display Name   | Function Menu         |
|------------------|----------------|------------------------|
| `free_plan`      | Free Plan      | Free Plan Basic Menu         |
| `basic_plan`     | Basic Plan     | Basic Plan Basic Menu        |
| `enterprise_plan`| Enterprise Plan| Enterprise Plan  Basic Menu   |

![Pricing Plan Settings](/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-06.png)

Repeat the same setup steps for Basic and Enterprise as you did for Free.

---

You’ve now completed setup for the **Free / Basic / Enterprise** pricing plans.