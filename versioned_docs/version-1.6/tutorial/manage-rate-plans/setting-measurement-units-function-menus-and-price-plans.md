---
title: "Setting measurement units, feature menus, and pricing plans"
slug: "setting-measurement-units-function-menus-and-price-plans"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:13 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## Basic Pricing

Measurement Unit: Fixed Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount | Reoccurance Period | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :----------------- | :------- |
| basic_base            | Basic Plan Basic Fee          | Basic Plan Basic Fee         | 500    | Month              | JPY      |

![01](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-01.png)

## Free Plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| free_comment          | Number of Free Plan Comments  | Number of Free Plan Comments | comment_count     | 0                     | 10    | JPY      |

![02](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-02.png)

## Basic plan

Measurement Unit: Tiered Usage Unit

| Measurement Unit Name | Measurement Unit Display Name     | Measurement Unit Description      | Target Meter Name | Currency | Range           | Upper Limit |
| :-------------------- | :-------------------------------- | :-------------------------------- | :---------------- | :------- | :-------------- | ----------: |
| basic_comment         | Number of comments for Basic plan | Number of comments for Basic plan | comment_count     | JPY      | See table below |         100 |

Range

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           0 |            0 |
|        11 |        50 |           0 |         1000 |
|        51 |           |           0 |         1500 |

![03](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-03.png)

![04](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-04.png)

## Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| free_menu         | Free Plan Basic Menu       | Free Plan Basic Menu       | Number of Free Plan Users<br/>Number of Free Plan Comments                      |
| basic_menu        | Basic Plan Basic Menu      | Basic Plan Basic Menu      | Basic Plan Basic Fee<br/>Basic Plan Users<br/>Basic Plan Comments                |

![05](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-05.png)

Please configure the Basic plan in the same way as the Free plan.

## Pricing Plan

| Pricing plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| free_plan         | Free Plan                 | Free Plan                | Free Plan Basic Menu       |
| basic_plan        | Basic Plan                | Basic Plan               | Basic Plan Basic Menu      |

![06](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-06.png)

Please configure the Basic plan in the same way as the Free plan.