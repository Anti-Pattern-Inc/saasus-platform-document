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
  - Number of users Max 2
  - Number of comments Max 10
- Basic plan
  - Fixed fee 500 yen
  - Max 5 users
  - Number of comments pay-as-you-go
    - Up to 10 comments, 0 yen
    - From 11 comments to 100 comments, 500 yen
    - Max 100 comments
- Advanced plan
  - Fixed fee 3,000 yen
  - Number of users Max 10
  - Number of comments pay-as-you-go
    - Up to 10 comments, 5 yen per comment
    - From 11 to 100 comments, 2 yen per comment
    - 101 comments ~ 1 yen per comment
- Enterprise plan
  - Fixed fee 50,000 yen
  - Number of users Free
  - Number of comments Free

| Plan       | Basic Charge | Number of Users (MAX) | Number of Comments                                                                                         |
| :--------- | -----------: | --------------------: | :--------------------------------------------------------------------------------------------------------- |
| Free       |              |              2 people | 10                                                                                                         |
| Basic      |      500 yen |              5 people | Pay-as-you-go<br/> 0 yen: Up to 10 comments<br/> 500 yen: 11 to 100 comments<br/> Up to 100 comments          |
| Advanced   |    3,000 yen |             10 people | Pay-as-you-go (per comment)<br/> 5 yen: 0-10 comments<br/> 2 yen: 11-100 comments <br/> 1 yen: 101 comments ~ |
| Enterprise |   50,000 Yen |             Unlimited | Unlimited                                                                                                  |

\*Since this is a tutorial, the price plan is complicated, but unless absolutely necessary a complex pricing plan is not recommended.  
SaaS usage fees should not be based on cost, but based on how much value customers can receive.  
Therefore, complex pricing imposes complex calculations and forecasts on customers, and while using SaaS reduces the burden on customers, it places a burden on pricing calculations and forecasts.  
Therefore, create a pricing plan that is as simple and easy to understand as possible.

To define such a pricing plan in the SaaSus Platform,

Measurement Unit

・Unit for measuring usage and charging

Feature Menu

・A unit provided as a feature by combining measurement units

Rate plan

・Plan units linked to tenants

Create units of

For example,

- Advanced plan
  - Fixed fee 3,000 yen
  - Number of users Max 10
  - Number of comments pay-as-you-go
    - Up to 10 comments, 5 yen per comment
    - From 11 to 100 comments, 2 yen per comment
    - 101 comments ~ 1 yen per comment

If you set

The measurement unit as

- Advanced fixed unit 3,000 yen
- Number of users Max10 Usage unit 0 yen
- Number of comments tiered usage units
  - Up to 10 comments, 5 yen per comment
  - From 11 to 100 comments, 2 yen per comment
  - 101 comments ~ 1 yen per comment

Create three units called

The feature menu is

- Advanced feature menu
  - Include the above three units of measure

The price plan is

- Advanced plan
  - Include Advanced feature menu

Use following steps.

Now, create a price plan other than the advanced plan!  
The measurement unit, feature menu, and price plan that will be created this time are as follows. Please see the video for details.

[See here for the setting contents (image) of the measurement unit, feature menu, and price plan settings.](https://docs.saasus.io/docs/setting-measurement-units-function-menus-and-price-plans) 

\*The only plans required for this tutorial are the **Free Plan** and **Basic Plan**.The Advanced Plan and Enterprise Plan are listed as examples of other settings that can be made.

#### Measurement Unit

##### Basic Pricing

Measurement Unit: Fixed Units

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount |       |     |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :---- | :-- |
| basic_base            | Basic Plan Base Fee           | Basic Plan Base Fee          | 500    | Month | JPY |
| advanced_base         | Advanced Plan Base Fee        | Advanced Plan Base Fee       | 3000   | Month | JPY |
| enterprise_base       | Enterprise Plan Base Fee      | Enterprise Plan Base Fee     | 50000  | Month | JPY |

##### Free Plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| free_user             | Number of Free Plan users     | Number of Free Plan users    | user_count        | 0                     | 2     | JPY      |
| free_comment          | Number of Free Plan comments  | Number of Free Plan comments | comment_count     | 0                     | 10    | JPY      |

##### Basic plan

Measurement Unit: Usage Unit

| Measurement Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :--------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| basic_user       | Number of Basic plan users    | Number of Basic plan users   | user_count        | 0                     | 5     | JPY      |

Unit of Measure: Tiered Unit

| Measurement  Unit Name | Measurement Unit Display Name     | Measurement Unit Description      | Target Meter Name | Range           | Limit | Currency |
| :--------------------- | :-------------------------------- | :-------------------------------- | :---------------- | :-------------- | :---- | -------: |
| basic_comment          | Number of comments for Basic plan | Number of comments for Basic plan | comment_count     | See table below | 100   |      JPY |

Range

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           0 |            0 |
|        11 |        59 |           0 |         1000 |
|        51 |           |           0 |         1500 |

##### Advanced Plan

Measurement Unit:Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description  | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :---------------------------- | :---------------- | :-------------------- | :---- | :------- |
| advanced_user         | Number of Advanced plan users | Number of Advanced plan users | user_count        | 0                     | 10    | JPY      |

Measurement Unit: Tiered Usage Unit

| Measurement Unit Name | Measurement Unit Display Name       | Measurement Unit Description        | Target Meter Name | Currency | Range           | Limit |
| :-------------------- | :---------------------------------- | :---------------------------------- | :---------------- | :------- | :-------------- | ----: |
| advanced_comment      | number of comments in Advanced plan | number of comments in Advanced plan | comment_count     | JPY      | see table below |     0 |

Range

| More than | Less than | Unit Amount | Fixed Amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           5 |            0 |
|        11 |       100 |           2 |            0 |
|       101 |           |           1 |            0 |

##### Enterprise Plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| enterprise_user       | Enterprise plan user count    | Enterprise plan user count   | user_count        | 0                     | 0     | JPY      |
| enterprise_comment    | Enterprise Plan Comments      | Enterprise Plan Comments     | user_comment      | 0                     | 0     | JPY      |

#### Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| free_menu         | Free plan basic menu       | Free plan basic menu       | Free plan users<br/>Free plan comments                                          |
| basic_menu        | Basic plan basic menu      | Basic plan basic menu      | Basic plan basic fee<br/>Basic plan users<br/>Basic plan comments                |
| advanced_menu     | Advanced plan basic menu   | Advanced plan basic menu   | Advanced plan basic fee<br/>Advanced plan users<br/>Advanced plan comments       |
| enterprise_menu   | Enterprise plan basic menu | Enterprise plan basic menu | Enterprise plan basic fee<br/>Enterprise plan users<br/>Enterprise plan comments |

#### Pricing Plan

| Pricing Plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| Free plan         | Free plan                 | Free plan                | Free plan basic menu       |
| Basic Plan        | Basic Plan                | Basic Plan               | Basic Plan Basic Menu      |
| Advanced plan     | Advanced plan             | Advanced plan            | Advanced plan basic menu   |
| Enterprise plan   | Enterprise plan           | Enterprise plan          | Enterprise plan basic menu |


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



### Linking Billing Using the SaaSus Development Console

Next, set up billing.

It is also possible to implement billing processing independently based on the billing plans and usage information for each tenant.

However, there are already SaaS that exists in the world to make billing easy.  
In the same way that you can easily build and operate SaaS using the SaaS Platform, you can offload the effort of building and operating to SaaS by actively using a convenient SaaS.  
Therefore, this time we will use Stripe, which is one of the billing SaaS.

　**If you do not want to connect  Stripe, you can skip this step**

From the side menu, click "External linkage"

Enter your Stripe secret key and click the Save button.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-01.png)

You are now ready to integrate with Stripe.  
The price plan created above should be linked to Stripe.

Also, if an operation is performed that involves a pricing plan, it will be linked to Stripe.

As of now, pricing plan settings are complete.

Apply this pricing plan to each tenant.

### Applying Rate Plans to Tenants

Log in to the SaaS Operation Console and click Pricing Plan Settings.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-02.png)

Click plan settings for each tenant to change the rate plan.

Set the free plan for tenant sample 1 and the basic plan for sample app tenant 2.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-03.png)

This will change the pricing plan associated with the tenant. When working with Stripe, customer information is created on Stripe and a subscription is also created.

![](/img/tutorial/manage-rate-plans/manage-rate-plans-04.png)

Now, use the pricing and metering information set up so far to implement the first step of authorization processing in the application.
