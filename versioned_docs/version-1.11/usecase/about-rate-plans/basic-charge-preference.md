---
title: "Step-by-Step Guide to Setting Up Complicated Pricing Plans"
slug: "basic-charge-preference"
excerpt: ""
hidden: false
createdAt: "Tue May 07 2024 05:17:30 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 07 2024 05:17:30 GMT+0000 (Coordinated Universal Time)"
---
# Step-by-Step Guide to Setting Up Complicated Pricing Plans

## Metering Units

### Example: Comment Count

| Unit Name    | Unit Display Name   | Unit Description |
|:-----------|:-------------|:-----------------|
| comment_count | Comment Count | Comment Count    |

![08](/img/usecase/about-rate-plans/basic-charge-preference-08.png)

## Measurement Unit

### Basic Pricing

Measurement Unit: Fixed Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount | Reoccurance Period | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :----------------- | :------- |
| individual_base         | Individual Plan Base Fee        | Individual Plan Base Fee       | 3000   | Month              | JPY      |
| enterprise_base       | Enterprise Plan Base Fee      | Enterprise Plan Base Fee     | 50000  | Month              | JPY      |

![01](/img/usecase/about-rate-plans/basic-charge-preference-01.png)

![02](/img/usecase/about-rate-plans/basic-charge-preference-02.png)

#### Individual Plan – Tiered Usage Unit

Unit of Measure: Tiered Usage Unit

| Measurement Unit Name | Measurement Unit Display Name       | Measurement Unit Description        | Target Meter Name | Currency | Range           | Upper Limit |
| :-------------------- | :---------------------------------- | :---------------------------------- | :---------------- | :------- | :-------------- | ----------: |
| individual_comment      | number of comments in Individual plan | number of comments in Individual plan | Comment Count     | JPY      | see table below |           0 |

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           5 |            0 |
|        11 |       100 |           2 |            0 |
|       101 |           |           1 |            0 |

![03](/img/usecase/about-rate-plans/basic-charge-preference-03.png)

#### Enterprise Plan – Usage Unit

Measurement Unit: Usage Unit

| Measurement Unit  Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :--------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| enterprise_comment     | number of comments in Enterprise plan      | number of comments in Enterprise plan     | Comment Count      | 0                     | 0     | JPY      |

![05](/img/usecase/about-rate-plans/basic-charge-preference-05.png)

## Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| individual_menu     | Individual Plan Basic Menu   | Individual Plan Basic Menu   | Individual Plan Base Fee<br/>number of comments in Individual plan       |
| enterprise_menu   | Enterprise Plan Basic Menu | Enterprise Plan Basic Menu | Enterprise Plan Base Fee<br/>number of comments in Enterprise plan |

![06](/img/usecase/about-rate-plans/basic-charge-preference-06.png)

Please configure the Enterprise plan in the same way as the Individual plan.

## Pricing Plan

| Pricing plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| individual_plan     | Individual Plan             | Individual Plan            | Individual Plan Basic Menu   |
| enterprise_plan   | Enterprise Plan           | Enterprise Plan          | Enterprise Plan Basic Menu |

![07](/img/usecase/about-rate-plans/basic-charge-preference-07.png)

Please configure the Enterprise plan in the same way as the Individual plan.