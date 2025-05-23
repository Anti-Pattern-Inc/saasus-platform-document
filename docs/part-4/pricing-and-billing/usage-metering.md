---
title: "Meter Unit Setting"
slug: "usage-metering"
excerpt: ""
hidden: false
createdAt: "Mon Mar 11 2024 13:45:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 11 2024 13:45:00 GMT+0000 (Coordinated Universal Time)"
---
Define the meter unit that will be used as the measurement unit.

## Meter Unit Setting

1. From the **SaaS Development Console, select `Metering Units`**

![usage-metering-1](/img/part-4/pricing-and-billing/usage-matering/usage-metering-1.png)

1. **Click on `Metering Unit`**

![usage-metering-2](/img/part-4/pricing-and-billing/usage-matering/usage-metering-2.png)

2. Set the meter unit with `Metering Unit`  

| Keyword               | Description    |
|---------------------  |--------------- |
| Unit Name             | Define for programmatic identification. Duplicate names cannot be created.  |
| Unit Display Name     | Decide on a name for the meter.  |
| Unit Description      | Set up a description of the meter that people can easily understand.  |
| Calculation Method    | Set any of the following. sum（Total value of usage during the period) or max（Maximum usage value during the period） | 

:::info
The **"Calculation Method"** field only appears when **Stripe integration is enabled**.

This setting specifies how the usage amount of the metering unit should be aggregated for billing,  
such as `sum` (total usage during the period) or `max` (maximum daily usage during the period).  
You can configure a different aggregation method for each metering unit.

This setting is used as part of the billing configuration when integrated with Stripe.

It is not required and will not appear when using the SaaSus Platform without Stripe integration.
:::

Set the above information and click the Save button.

## Set the meter unit to the measurement unit.
When creating a measurement unit, you can set a meter unit.
You can select a meter unit that is already registered.

![usage-metering-3](/img/part-4/pricing-and-billing/usage-matering/usage-metering-3.png)

## Updating and deleting meter units
Meter units that have been set as measurement units cannot be deleted.  
Only the meter unit display name and meter unit description can be updated.

![usage-metering-4](/img/part-4/pricing-and-billing/usage-matering/usage-metering-4.png)


