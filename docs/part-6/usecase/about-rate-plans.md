---
title: "About Rate Plans"
slug: "about-rate-plans"
excerpt: ""
hidden: false
createdAt: "Fri Apr 26 2023 10:25:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Apr 26 2023 10:25:55 GMT+0000 (Coordinated Universal Time)"
---

# About complicated pricing plans

The SaaSus Platform also allows for complex pricing plans using subscription and pay-as-you-go models.

- Individual plan
  - Fixed fee 3,000 yen
  - Number of comments pay-as-you-go
    - Up to 10 comments, 5 yen per comment
    - From 11 to 100 comments, 2 yen per comment
    - 101 comments ~ 1 yen per comment
- Enterprise plan
  - Fixed fee 50,000 yen
  - Number of comments Free

| Plan       | Basic Charge | Number of Comments                                                                                         |
| :--------- | -----------: | :--------------------------------------------------------------------------------------------------------- |
| Individual   |    3,000 yen | Pay-as-you-go (per comment)<br/> 5 yen: 0-10 comments<br/> 2 yen: 11-100 comments <br/> 1 yen: 101 comments ~ |
| Enterprise |   50,000 Yen | Unlimited                                                                                                  |

\*This time we will use a complicated rate plan as an example, but please do not set up such a complicated rate plan unless there is a deep reason.
SaaS usage fees should not be considered based on cost, but rather on how much value the customer will receive.
Therefore, complex pricing will force customers to make complex calculations and forecasts, and while using SaaS will reduce the burden on customers, it will place a burden on them for pricing calculations and forecasts.
You should create a pricing plan that is as simple and easy to understand as possible.

[Click here for settings (images) of metering units, measurement units, function menus, and price plan settings for Individual and Enterprise plans.](./about-rate-plans/basic-charge-preference)

## Metering Units

### Example: Comment Count

| Unit Name    | Unit Display Name   | Unit Description |
|:-----------|:-------------|:-----------------|
| comment_count | Comment Count | Comment Count    |

## Measurement Unit

### Basic Pricing

Measurement Unit: Fixed Units

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount |       |     |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :---- | :-- |
| individual_base         | Individual Plan Base Fee        | Individual Plan Base Fee       | 3000   | Month | JPY |
| enterprise_base       | Enterprise Plan Base Fee      | Enterprise Plan Base Fee     | 50000  | Month | JPY |

#### Individual Plan – Tiered Usage Unit

Measurement Unit: Tiered Usage Unit

| Measurement Unit Name | Measurement Unit Display Name       | Measurement Unit Description        | Target Meter Name | Currency | Range           | Limit |
| :-------------------- | :---------------------------------- | :---------------------------------- | :---------------- | :------- | :-------------- | ----: |
| individual_comment      | number of comments in Individual plan | number of comments in Individual plan | Comment Count     | JPY      | see table below |     0 |

Range

| More than | Less than | Unit Amount | Fixed Amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           5 |            0 |
|        11 |       100 |           2 |            0 |
|       101 |           |           1 |            0 |

#### Enterprise Plan – Usage Unit

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| enterprise_comment    | number of comments in Enterprise plan      | number of comments in Enterprise plan     | Comment Count      | 0                     | 0     | JPY      |

## Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| individual_menu     | Individual plan basic menu   | Individual plan basic menu   | Individual plan basic fee<br/>Individual plan comments       |
| enterprise_menu   | Enterprise plan basic menu | Enterprise plan basic menu | Enterprise plan basic fee<br/>Enterprise plan comments |

## Pricing Plan

| Pricing Plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| Individual plan     | Individual plan             | Individual plan            | Individual plan basic menu   |
| Enterprise plan   | Enterprise plan           | Enterprise plan          | Enterprise plan basic menu |