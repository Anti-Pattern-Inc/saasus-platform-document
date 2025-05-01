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
3. Set the current date for the reflection date.
4. Click Unlock.
5. A confirmation message will be displayed. Check the contents and click "Remove".

**\*If you set the reflection date to the current day, the pricing plan will be canceled about 5 minutes after the operation date and time. **  
_Example, Cancellation setting of pricing plan at 9:00 am on December 28, 2022 → cancellation at 09:05:00 on December 28, 2022_

![plan-setting](/img/part-5/price-plan/price-plan-setting-003/plan-setting.png)
*If the cancellation setting is successful, the text (cancellation of plan under contract) is displayed as shown in the red frame in the image.*


***

## Schedule pricing plan schedule for later date

1. Go to Pricing Plan Settings in the SaaS Operations Console.
2. Click "Release" for the tenant whose pricing plan you want to release.
3. For the reflection date, set the date after the next day.
4. Click Unlock.
5. A confirmation message will be displayed. Check the contents and click "Remove".

**\*If you set the reflection date to the next day or later, the pricing plan settings will be canceled at midnight on the specified date. **  
_Example, Specify a date of February 1, 2023 → Create a release schedule for 2023/02/01 00:00:00_
