---
title: "Basic Pricing"
slug: "basic-charge-preference"
excerpt: ""
hidden: false
createdAt: "Tue May 07 2024 05:17:30 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 07 2024 05:17:30 GMT+0000 (Coordinated Universal Time)"
---

# Basic Pricing

Measurement Unit: Fixed Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount | Reoccurance Period | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :----------------- | :------- |
| individual_base         | Individual Plan Base Fee        | Individual Plan Base Fee       | 3000   | Month              | JPY      |
| enterprise_base       | Enterprise Plan Base Fee      | Enterprise Plan Base Fee     | 50000  | Month              | JPY      |

![01](/img/usecase/about-rate-plans/basic-charge-preference-01.png)

![02](/img/usecase/about-rate-plans/basic-charge-preference-02.png)

## Individual Plan

Unit of Measure: Tiered Usage Unit

| Measurement Unit Name | Measurement Unit Display Name       | Measurement Unit Description        | Target Meter Name | Currency | Range           | Upper Limit |
| :-------------------- | :---------------------------------- | :---------------------------------- | :---------------- | :------- | :-------------- | ----------: |
| individual_comment      | number of comments in Individual plan | number of comments in Individual plan | comment_count     | JPY      | see table below |           0 |

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           5 |            0 |
|        11 |       100 |           2 |            0 |
|       101 |           |           1 |            0 |

![03](/img/usecase/about-rate-plans/basic-charge-preference-03.png)

![04](/img/usecase/about-rate-plans/basic-charge-preference-04.png)

## Enterprise Plan

Measurement Unit: Usage Unit

| Measurement Unit  Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :--------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| enterprise_comment     | Enterprise Plan Comments      | Enterprise Plan Comments     | user_comment      | 0                     | 0     | JPY      |

![05](/img/usecase/about-rate-plans/basic-charge-preference-05.png)

## Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| individual_menu     | Individual Plan Basic Menu   | Individual Plan Basic Menu   | Individual Plan Basic Fee<br/>Individual Plan Comments       |
| enterprise_menu   | Enterprise Plan Basic Menu | Enterprise Plan Basic Menu | Enterprise Plan Basic Fee<br/>Enterprise Plan Comments |

![06](/img/usecase/about-rate-plans/basic-charge-preference-06.png)

Please configure the Enterprise plan in the same way as the Individual plan.

## Pricing Plan

| Pricing plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| individual_plan     | Individual Plan             | Individual Plan            | Individual Plan Basic Menu   |
| enterprise_plan   | Enterprise Plan           | Enterprise Plan          | Enterprise Plan Basic Menu |

![07](/img/usecase/about-rate-plans/basic-charge-preference-07.png)

Please configure the Enterprise plan in the same way as the Individual plan.