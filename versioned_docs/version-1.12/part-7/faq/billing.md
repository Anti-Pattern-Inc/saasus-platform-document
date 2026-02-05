---
title: "Billing FAQ"
slug: "billing"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Feb 05 2026 10:18:42 GMT+0000 (Coordinated Universal Time)"
---

**Q. What is the "Calculation Method" setting (sum/max) for meter units?**  
A. The "Calculation Method" setting for meter units is a function that specifies how metering data is aggregated.

When Stripe integration is enabled, the "Calculation Method" (sum or max) that can be configured in the UI not only calculates billing amounts to Stripe but also determines how the count values are calculated in metering-related APIs.

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

---

**Q. What is the role division between SaaSus Platform and Stripe?**  
A. SaaSus Platform manages "usage plans" while Stripe handles "payment and billing operations." The extent to which SaaSus Platform features can be utilized depends on the sales model (self-serve vs sales-led).

- **Self-serve (automation recommended)**: Subscription creation and updates can be automatically executed based on SaaSus Platform pricing plan definitions.
- **Sales-led (manual handling)**: SaaSus Platform only handles customer ID (Stripe Customer) linking, while specific invoice creation and complex pricing configurations are done directly from the Stripe dashboard.

---

**Q. How should billing information (company name and address) be registered and managed?**  
A. The registration path varies depending on the sales model, but information is synchronized to Stripe via SaaSus Platform. To minimize security risks, credit card information is not stored on the SaaSus Platform side but is entered directly on Stripe screens.

- **Self-serve**: End users register through input screens in the app.
- **Sales-led**: Sales representatives enter information on behalf of customers from the "SaaS Operations Console."

---

**Q. Are payment screens such as 3D Secure (authentication) provided by SaaSus Platform?**  
A. No, SaaSus Platform does not have functionality to display payment authentication screens (popups, etc.). While backend payment creation instructions are performed, when browser authentication is required, you need to integrate Stripe-provided features (such as Hosted Invoice Page).

---

**Q. We want to send thank-you emails when payments are completed. Does SaaSus Platform send webhook notifications?**  
A. No, SaaSus Platform does not relay Stripe webhook events. For real-time processing such as immediate email sending upon payment completion or refund detection, you need to implement direct Stripe Webhook reception on your own server.

---

**Q. Can refund processing, invoice reissuing, and coupon application be done from the console?**  
A. No, these irregular operations and individual responses need to be handled directly from the Stripe dashboard.

- **Refunds and invoice reissuing**: Since SaaSus Platform does not have these features, please handle them directly on the Stripe side.
- **Invoice payments**: Invoice sending for non-credit card payments (bank transfers, etc.) also needs to be done on the Stripe side.
- **Coupons (discounts)**: Individual discounts for specific tenants should be linked to the target Customer or subscription from the Stripe dashboard.

---