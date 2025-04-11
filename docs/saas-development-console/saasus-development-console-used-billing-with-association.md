---
title: "SaaSus Development Console Used Billing With Association"
slug: "saasus-development-console-used-billing-with-association"
excerpt: ""
hidden: false
createdAt: "Fri Apr 26 2024 15:15:48 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Apr 26 2024 15:15:48 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Development Console Used Billing With Association

Set up billing.

Of course, it is also possible to implement billing processing on your own based on the rate plan and usage information for each tenant.

Just as you can easily build and operate SaaS using the SaaSus Platform, you can offload the labor of building and operating to SaaS by actively using convenient SaaS.
Therefore, this time we will try integrating with Stripe, which is a billing SaaS.

　**※ If you do not want to integrate with Stripe, you can leave this step unperformed.**

Click "Billing" from the side menu.

Enter your Stripe secret key and click the Save button.

![01](/img/saas-development-console/saasus-development-console-used-billing-with-association-01.png)

The integration with Stripe is now complete.
The pricing plan created above should now be linked to Stripe.

When you perform operations related to your pricing plan, it will be automatically linked to Stripe.
