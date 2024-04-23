---
title: "Tax Rate Setting"
slug: "tax-rates"
excerpt: ""
hidden: false
createdAt: "Fri Sep 08 2023 02:07:14 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
Tax rate settings determine the proportion and type of taxes applied to the pricing plan applied to each tenant.

:::info
Regarding the consumption tax to be displayed on the invoice, the invoice system will start from October 1, 2023. This "invoice" refers to a bill or receipt that is exchanged between businesses and lists the amount of consumption tax, which is necessary when a business calculates the amount of consumption tax to be paid.
<a href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm" target="_blank">https\://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm</a>
:::

## Tax Rate Setting

1. ***Select Pricing Plan->Tax Rate Settings from the SaaS Development Console***

![tax-rates-1](/img/saas-development-console/tax-rates-1.png)

2. ***Click on Create Tax Rate***

![tax-rates-2](/img/saas-development-console/tax-rates-2.png)

3. Setup the tax rate in Create Tax Rate
    Tax Rate Name: Define a name for identification by the program. Duplicate names cannot be created.
    Display Name: Specify the name of the tax rate. It will be displayed on the invoice created in Stripe if connected with Stripe.
    Description: Define a clear description for humans to understand the tax rate.
    Percentage: Numeric value indicating the tax rate to be collected.
    Country: Define the country where the tax rate will be applied.
    Inclusive/Exclusive: Setting whether the tax rate is included in the amount or not.
   :::caution
   Please note that once a tax rate is created, it cannot be changed or deleted.
   :::
    After setting up the above details, click on the Create button.

![tax-rates-3](/img/saas-development-console/tax-rates-3.png)

![tax-rates-4](/img/saas-development-console/tax-rates-4.png)

## Setting Pricing Plan (Tax Rate) for Tenants

1. ***Setting up Billing Address***

Input the billing information before setting up the pricing plan for the tenant.
Open the tenant management screen and click the edit button for the target tenant.

![tax-rates-5](/img/saas-development-console/tax-rates-5.png)

Enter the billing information and save it in Billing Information Edit mode.

![tax-rates-6](/img/saas-development-console/tax-rates-6.png)

2. ***Select Pricing Plan Settings from the SaaS Operation Console***

![tax-rates-7](/img/saas-development-console/tax-rates-7.png)

3. ***In Pricing Plan Setting, click Plan Setup for the tenant***

![tax-rates-8](/img/saas-development-console/tax-rates-8.png)

4. ***Set Plan/Tax Rate for the tenant***
   On the Pricing Plan Settings screen, set up the pricing plan and the consumption tax rate that you set up in the SaaS Development Console, then save it.

![tax-rates-9](/img/saas-development-console/tax-rates-9.png)

## Tax Rate Setting Linked with Stripe

1. ***Setting a tax rate linked with Stripe***

The following information set up in SaaS Development Console will be linked to each item in Stripe:

| Stripe | SaaS Operation Console | Description|
| ------ | ------------ | ---------------------- |
| -      | Tax Rate Name          | Definition for identification by the program |
| Type   | Display Name          | Name of the tax rate |
| Description | Description | Description of the rate |
| Rate   | Percentage | Numeric value indicating the tax rate to be collected |
| Region | Country | Country where the tax rate will apply |
| Rate   | Inclusive/Exclusive | Setting whether the tax rate is included in the amount or not |

![tax-rates-10](/img/saas-development-console/tax-rates-10.png)

## Sample of Invoices Issued with Stripe

Here we present samples of invoices for the patterns of inclusive, exclusive, and unset.
Please check how the invoices will be generated.

1. ***Issued Invoice Inclusive Tax***

***INVOICE***

![tax-rates-11](/img/saas-development-console/tax-rates-11.png)

***Invoice PDF***

![tax-rates-12](/img/saas-development-console/tax-rates-12.png)

1. ***Issued Invoice Exclusive Tax***

***INVOICE***

![tax-rates-13](/img/saas-development-console/tax-rates-13.png)

***Invoice PDF***

![tax-rates-14](/img/saas-development-console/tax-rates-14.png)

1. ***Issued Invoice Unset***

***INVOICE***

![tax-rates-15](/img/saas-development-console/tax-rates-15.png)

***Invoice PDF***

![tax-rates-16](/img/saas-development-console/tax-rates-16.png)
