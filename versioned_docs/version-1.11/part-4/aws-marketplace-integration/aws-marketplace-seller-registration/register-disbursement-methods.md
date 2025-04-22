---
title: "Setting Up Disbursement Methods"
slug: "register-disbursement-methods"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

:::caution
Please ensure that your bank account setup is complete beforehand. If you haven't done this yet, refer to [Bank Account Setup](/docs/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account).
:::

Click `Add disbursement method` under `Payment Information`.  

![new-register-disbursement-methods-1](/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-1.png)

First, select the currency in which disbursements will be made. For available currencies, refer to the [official documentation](https://docs.aws.amazon.com/marketplace/latest/userguide/disbursement.html#currency).

![new-register-disbursement-methods-2](/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-2.png)

Next, select the bank account to receive disbursements. Among the bank accounts added in [Bank Account Setup](/docs/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account), only the accounts corresponding to the previously selected currency will be available as options.

![new-register-disbursement-methods-3](/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-3.png)

Finally, set the disbursement schedule. This will be the schedule on which AWS disburses funds to the seller’s bank account. The following screenshot shows a setting where disbursements are made on the 1st of every month. If you select `Daily`, sellers must have a positive balance to receive disbursements.

![new-register-disbursement-methods-4](/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-4.png)

Once you have finished entering all the information, click `Add disbursement method`.

![new-register-disbursement-methods-5](/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-5.png)

If everything is correct, you can check the added disbursement method under `Payment Information`.

![new-register-disbursement-methods-6](/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-6.png)

:::warning
Public Offers only support USD; therefore, it is required to set up a disbursement method in USD. Even if you plan to create a Private Offer in Japanese Yen only, ensure that both USD and JPY disbursement methods are set.
:::

With this, the necessary settings to start the listing process are complete.