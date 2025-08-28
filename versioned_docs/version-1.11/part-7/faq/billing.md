---
title: "Billing FAQ"
slug: "billing"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

**Q. Does the "Usage Aggregation" setting (sum/max) for meter units affect the metering information that can be retrieved via API?**  
A. Yes, it does.

When Stripe integration is enabled, the "Usage Aggregation" method (sum or max) that can be configured in the UI not only calculates billing amounts to Stripe but also determines how the count values are calculated in metering-related APIs.

Note that when Stripe integration is not enabled, this setting item is not displayed in the UI, but the aggregation method defaults to sum (total).

Specifically, the count values returned by the following APIs change according to the aggregation settings:

- [Get Metering Unit Count for Specific Date](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate)  
- [Get Metering Unit Count for the Current Day](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday)  
- [Get Metering Unit Count for the Current Month](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth)  
- [Get the Metering Unit Count for the Specified Month](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth)  
- [Get All Metering Unit Counts for a Specified Date](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate)  
- [Get All Metering Unit Counts for the Specified Month](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth)  

**Differences in count values based on aggregation method**

**When sum (total) is set:**  
The API returns a count that is the sum of metering values recorded within the specified period (daily or monthly).

**When max (maximum) is set:**  
The API returns a count that is the maximum value of metering values recorded within the specified period (daily or monthly).