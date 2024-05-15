---
title: "Manage Rate Plans"
slug: "manage-rate-plans"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:46:57 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## The first step of pricing, metering, and billing using the SaaSus Platform

### Creating a Pricing Plan Using the SaaSus Development Console

Log in to the SaaSus Development Console on the SaaSus Platform and set up a pricing plan.

The SaaS Platform allows the creation of pricing plans that support subscription and pay-as-you-go models.

For example, create a pricing plan like this:

- Free plan
  - Number of comments Max 10
- Basic plan
  - Fixed fee 500 yen
  - Number of comments pay-as-you-go
    - Up to 10 comments, 0 yen
    - From 11 comments to 100 comments, 500 yen
    - Max 100 comments

| Plan       | Basic Charge | Number of Comments                                                                                         |
| :--------- | -----------: | :--------------------------------------------------------------------------------------------------------- |
| Free       |              | 10                                                                                                         |
| Basic      |      500 yen | Pay-as-you-go<br/> 0 yen: Up to 10 comments<br/> 500 yen: 11 to 100 comments<br/> Up to 100 comments          |

To define such a pricing plan in the SaaSus Platform,

Measurement Unit

・Unit for measuring usage and charging

Feature Menu

・A unit provided as a feature by combining measurement units

Rate plan

・Plan units linked to tenants

Create units of

For example,

- Basic plan
  - Fixed fee 500 yen
  - Number of comments pay-as-you-go
    - Up to 10 comments, 500 yen
    - From 11 to 50 comments, 1,000 yen
    - 51 to 100 comments, 1,500 yen

If you set

The measurement unit as

- Basic fixed unit 500 yen
- Number of comments tiered usage units
  - Up to 10 comments, 500 yen
  - From 11 to 50 comments, 1,000 yen
  - 51 to 100 comments, 1,500 yen

Create three units and set the upper limit to 100.

The feature menu is

- Basic feature menu
  - Include the above three units of measure

The price plan is

- Basic plan
  - Include Basic feature menu

Use following steps.

Now, let's create a price plan other than the Free plan!
The measurement unit, feature menu, and price plan that will be created this time are as follows. Please see the video for details.

[See here for the setting contents (image) of the measurement unit, feature menu, and price plan settings.](https://docs.saasus.io/docs/setting-measurement-units-function-menus-and-price-plans) 

#### Measurement Unit

##### Basic Pricing

Measurement Unit: Fixed Units

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount |       |     |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :---- | :-- |
| basic_base            | Basic Plan Base Fee           | Basic Plan Base Fee          | 500    | Month | JPY |

##### Free Plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| free_comment          | Number of Free Plan comments  | Number of Free Plan comments | comment_count     | 0                     | 10    | JPY      |

##### Basic plan

Unit of Measure: Tiered Unit

| Measurement  Unit Name | Measurement Unit Display Name     | Measurement Unit Description      | Target Meter Name | Range           | Limit | Currency |
| :--------------------- | :-------------------------------- | :-------------------------------- | :---------------- | :-------------- | :---- | -------: |
| basic_comment          | Number of comments for Basic plan | Number of comments for Basic plan | comment_count     | See table below | 100   |      JPY |

Range

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           0 |            0 |
|        11 |        59 |           0 |         1000 |
|        51 |       100 |           0 |         1500 |


#### Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| free_menu         | Free plan basic menu       | Free plan basic menu       | Free plan users<br/>Free plan comments                                          |
| basic_menu        | Basic plan basic menu      | Basic plan basic menu      | Basic plan basic fee<br/>Basic plan users<br/>Basic plan comments                |

#### Pricing Plan

| Pricing Plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| Free plan         | Free plan                 | Free plan                | Free plan basic menu       |
| Basic Plan        | Basic Plan                | Basic Plan               | Basic Plan Basic Menu      |

<iframe
  className="embedly-embed"
  src="https://www.youtube.com/embed/deSkPJ-zTgw?start=257&feature=oembed"
  width="854"
  height="480"
  scrolling="no"
  title="YouTube embed"
  frameborder="0"
  allow="autoplay; fullscreen"
  allowfullscreen="true">
</iframe>

### Applying Rate Plans to Tenants

Log in to the SaaS Operation Console and click Pricing Plan Settings.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-02.png)

Click plan settings for each tenant to change the rate plan.

Set the free plan for tenant sample 1 and the basic plan for sample app tenant 2.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-03.png)

This will change the pricing plan associated with the tenant. When working with Stripe, customer information is created on Stripe and a subscription is also created.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-04.png)

Now, use the pricing and metering information set up so far to implement the first step of authorization processing in the application.
