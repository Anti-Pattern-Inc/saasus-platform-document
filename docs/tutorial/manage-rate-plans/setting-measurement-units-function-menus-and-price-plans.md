---
title: "Step-by-Step Guide to Setting Up Pricing Plans"
slug: "setting-measurement-units-function-menus-and-price-plans"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:13 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

# Step-by-Step Guide to Setting Up Pricing Plans

This page explains how to configure the following items step by step using the SaaSus Developer Console:

- Metering Units
- Measurement Units
- Feature Menus
- Pricing Plans

---

## Metering Units

First, create a metering unit that represents what to measure within your application.

### Example: Comment Count

| Unit Name    | Unit Display Name   | Unit Description |
|:-----------|:-------------|:-----------------|
| comment_count | Comment Count | Comment Count    |


![07](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-07.png)

---

## Measurement Units

### Basic Plan – Fixed Monthly Fee

Measurement Unit Type: Fixed Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Amount | Reoccurance Period | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :----- | :----------------- | :------- |
| basic_base            | Basic Plan Basic Fee          | Basic Plan Basic Fee         | 500    | Month              | JPY      |

![01](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-01.png)

---

### Free Plan – Tiered Usage Unit

Allows up to 10 comments free of charge.

Measurement Unit Type: Usage-Based Unit

| Measurement Unit Name | Measurement Unit Display Name | Measurement Unit Description | Target Meter Name | Amount per Unit Usage | Limit | Currency |
| :-------------------- | :---------------------------- | :--------------------------- | :---------------- | :-------------------- | :---- | :------- |
| free_comment          | Number of Free Plan Comments  | Number of Free Plan Comments | Comment Count     | 0                     | 10    | JPY      |

![02](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-02.png)

---

### Basic Plan – Tiered Pricing

Charges vary by number of comments.

Measurement Unit Type: Tiered Unit

| Measurement Unit Name | Measurement Unit Display Name     | Measurement Unit Description      | Target Meter Name | Currency | Range           | Upper Limit |
| :-------------------- | :-------------------------------- | :-------------------------------- | :---------------- | :------- | :-------------- | ----------: |
| basic_comment         | Number of comments for Basic plan | Number of comments for Basic plan | Comment Count     | JPY      | See table below |         100 |


#### Tiered Pricing:

| More than | Less than | Unit amount | Fixed amount |
| --------: | --------: | ----------: | -----------: |
|         0 |        10 |           0 |          500 |
|        11 |        50 |           0 |         1000 |
|        51 |           |           0 |         1500 |

![03](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-03.png)

---

## Feature Menus

Define which features (composed of measurement units) are included in each plan.

| Feature Menu Name | Feature Menu Display Name  | Feature Menu Description   | Measurement Unit                                                               |
| :---------------- | :------------------------- | :------------------------- | :----------------------------------------------------------------------------- |
| free_menu         | Free Plan Basic Menu       | Free Plan Basic Menu       | Number of Free Plan Comments                                                   |
| basic_menu        | Basic Plan Basic Menu      | Basic Plan Basic Menu      | Basic Plan Basic Fee<br/>Number of comments for Basic plan                     |

![05](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-05.png)

Please configure the Basic Plan in the same way as the Free Plan.

---

## Pricing Plans

Finally, define pricing plans by combining feature menus.

| Pricing plan Name | Pricing Plan Display Name | Pricing Plan Description | Feature Menu               |
| :---------------- | :------------------------ | :----------------------- | :------------------------- |
| free_plan         | Free Plan                 | Free Plan                | Free Plan Basic Menu       |
| basic_plan        | Basic Plan                | Basic Plan               | Basic Plan Basic Menu      |

![06](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-06.png)

Please configure the Basic Plan in the same way as the Free Plan.

