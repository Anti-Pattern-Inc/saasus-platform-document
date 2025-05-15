---
title: "Cancel the Tenant Pricing Plan"
slug: "price-plan-setting-003"
excerpt: ""
hidden: false
createdAt: "Thu Jan 19 2023 04:38:12 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## Behavior when working with Stripe

Canceling a pricing plan will cancel the corresponding Stripe subscription.  
Please note that no refunds will be given in that case.

## Cancel Pricing Plan Immediately

1. Go to Pricing Plan Settings in the SaaS Operations Console.
2. Click "Release" for the tenant whose pricing plan you want to release.
3. For Reflection Date, select "Reflected immediately".
4. Click Unlock.
5. A confirmation message will be displayed. Check the contents and click "Remove".

**\*When "Reflected immediately" is selected, the pricing plan will take effect about 5 minutes after the operation.**  
_Example, Cancellation setting of pricing plan at 9:00 am on December 28, 2022 → cancellation at 09:05:00 on December 28, 2022_

![plan-setting](/img/part-5/price-plan/price-plan-setting-003/plan-setting.png)
*If the cancellation setting is successful, the text (cancellation of plan under contract) is displayed as shown in the red frame in the image.*


***

## Schedule Cancellation of Pricing Plan

1. Go to Pricing Plan Settings in the SaaS Operations Console.
2. Click "Release" for the tenant whose pricing plan you want to release.
3. For Reflection Date, select "Date and time specification", then specify the desired date and time.
4. Click Unlock.
5. A confirmation message will be displayed. Check the contents and click "Remove".
