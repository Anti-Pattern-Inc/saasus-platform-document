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
| advanced_base         | Advanced Plan Base Fee        | Advanced Plan Base Fee       | 3000   | Month              | JPY      |
| enterprise_base       | Enterprise Plan Base Fee      | Enterprise Plan Base Fee     | 50000  | Month              | JPY      |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/02_basic_base.png "02_basic_base.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/02_advanced_base.png "02_advanced_base.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/02_enterprise_base.png "02_ enterprise_base.png")

## Free Plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| free_user             | Number of Free Plan Users     | Number of Free Plan Users    | user_count        | 0                     | 2     | JPY      |
| free_comment          | Number of Free Plan Comments  | Number of Free Plan Comments | comment_count     | 0                     | 10    | JPY      |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_free_user.png "03_free_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_free_comment.png "03_free_comment.png")

## Basic plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| basic_user            | Number of Basic plan users    | Number of Basic plan users   | user_count        | 0                     | 5     | JPY      |

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

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/04_basic_user.png "04_basic_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/04_basic_comment-1.png "04_basic_comment-1.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/04_basic_comment-2.png "04_basic_comment-2.png")

## Advanced Plan

Measurement Unit: Usage Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description  | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :---------------------------- | :---------------- | :-------------------- | :---- | :------- |
| advanced_user         | Number of Advanced plan users | Number of Advanced plan users | user_count        | 0                     | 10    | JPY      |

Unit of Measure: Tiered Usage Unit

| Measurement Unit Name | Measurement Unit Display Name       | Measurement Unit Description        | Target Meter Name | Currency | Range           | Upper Limit |
| :-------------------- | :---------------------------------- | :---------------------------------- | :---------------- | :------- | :-------------- | ----------: |
| advanced_comment      | number of comments in Advanced plan | number of comments in Advanced plan | comment_count     | JPY      | see table below |           0 |

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           5 |            0 |
|        11 |       100 |           2 |            0 |
|       101 |           |           1 |            0 |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/05_advanced_user.png "05_advanced_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/05_advanced_comment-1.png "05_advanced_comment-1.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/05_advanced_comment-2.png "05_advanced_comment-2.png")

## Enterprise Plan

Measurement Unit: Usage Unit

| Measurement Unit  Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :--------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| enterprise_user        | Enterprise plan user count    | Enterprise plan user count   | user_count        | 0                     | 0     | JPY      |
| enterprise_comment     | Enterprise Plan Comments      | Enterprise Plan Comments     | user_comment      | 0                     | 0     | JPY      |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/06_enterprise_user.png "06_enterprise_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/06_enterprise_comment.png "06_enterprise_comment.png")

## Feature Menu

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| free_menu         | Free Plan Basic Menu       | Free Plan Basic Menu       | Number of Free Plan Users<br/>Number of Free Plan Comments                      |
| basic_menu        | Basic Plan Basic Menu      | Basic Plan Basic Menu      | Basic Plan Basic Fee<br/>Basic Plan Users<br/>Basic Plan Comments                |
| advanced_menu     | Advanced Plan Basic Menu   | Advanced Plan Basic Menu   | Advanced Plan Basic Fee<br/>Advanced Plan Users<br/>Advanced Plan Comments       |
| enterprise_menu   | Enterprise Plan Basic Menu | Enterprise Plan Basic Menu | Enterprise Plan Basic Fee<br/>Enterprise Plan Users<br/>Enterprise Plan Comments |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_free_menu.png "07_free_menu.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_basic_menu.png "07_basic_menu.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_advanced_menu.png "07_advanced_menu.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_enterprise_menu.png "07_enterprise_menu.png")

## Pricing Plan

| Pricing plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| Free Plan         | Free Plan                 | Free Plan                | Free Plan Basic Menu       |
| Basic Plan        | Basic Plan                | Basic Plan               | Basic Plan Basic Menu      |
| Advanced Plan     | Advanced Plan             | Advanced Plan            | Advanced Plan Basic Menu   |
| Enterprise Plan   | Enterprise Plan           | Enterprise Plan          | Enterprise Plan Basic Menu |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_free_plan.png "03_free_plan.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_basic_plan.png "03_basic_plan.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_Advanced_plan.png "03_Advanced_plan.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/08_Enterprise_plan.png "08_Enterprise_plan.png")
