---
title: "Metering API Implementation Sample and Examples of Use (Laravel)"
slug: "metering-api-sample"
excerpt: ""
hidden: false
createdAt: "Tue Nov 14 2023 06:22:12 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Dec 27 2023 09:00:19 GMT+0000 (Coordinated Universal Time)"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We will describe Laravel implementation samples for each Metering API using SDK and an example of a feature using the Metering API.

Please check the API documentation for details of each API.

# Laravel Implementation Sample

## Get the Metering Unit Count for a Specified Date

[API Documentation](../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate)

### Use Case

Please use this when you want to show usage to tenants.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php PHP
/**
 * Get the Metering Unit Count for a Specified Date
 *
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @param string $date Date in yyyy-mm-dd format
 * @return array
 */
public function getCountOfSpecifiedDate(string $tenantId, string $meteringUnitName, string $date)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $unitCount = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(
        $tenantId,
        $meteringUnitName,
        $date
    );
  
    return [
        'count' => $unitCount->getCount(),
        'date' => $unitCount->getDate(),
        'meteringUnitName' => $unitCount->getMeteringUnitName(),
    ];
}
```

</TabItem>
</Tabs>
## Update the Metering Unit Count for a Specified Timestamp

[API Documentation](../reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCount)

### Use Case

Please use this for adjustments in case of mistakes in usage updates in past data.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Update the Metering Unit Count for a Specified Timestamp
 *
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @param int $timestamp Timestamp in seconds
 * @param Request $request
 * @return array
 */
public function updateCountOfSpecifiedTimestamp(string $tenantId, string $meteringUnitName, int $timestamp, Request $request)
{
    // Retrieve the update method and count from the request
    ['method' => $method, 'count' => $count] = $request->only(['method', 'count']);
    $updateMeteringUnitTimeStampParam = new UpdateMeteringUnitTimestampCountParam();
    $updateMeteringUnitTimeStampParam->setMethod($method)
        ->setCount($count);
    $unitCount = $this->saasusClient->getPricingClient()->updateMeteringUnitTimestampCount(
        $tenantId, $meteringUnitName, $timestamp,
        $updateMeteringUnitTimeStampParam
    );
  
    return [
        'count' => $unitCount->getCount(),
        'timestamp' => $unitCount->getTimestamp(),
        'meteringUnitName' => $unitCount->getMeteringUnitName(),
     ];
}
```

</TabItem>
</Tabs>
## Delete the Metering Unit Count for a Specified Timestamp

[API Documentation](../reference/pricing-api#tag/metering/operation/DeleteMeteringUnitTimestampCount)

### Use Case

Please use this for adjustments in case of mistakes in usage updates in past data.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Delete the Metering Unit Count for a Specified Timestamp
 *
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @param int $timestamp Timestamp in seconds
 * @return array
 */
public function deleteCountOfSpecifiedTimestamp(string $tenantId, string $meteringUnitName, int $timestamp)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $pricingApi->deleteMeteringUnitTimestampCount(
        $tenantId, $meteringUnitName, $timestamp
    );

    return ['status' => 'success'];
}
```

</TabItem>
</Tabs>

## Get the Metering Unit Count for Today

[API Documentation](../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday)

### Use Case

Please use this when you want to show the usage to tenants.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Get the Metering Unit Count for Today
 *
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @return array
 */
public function getCountOfCurrentDay(string $tenantId, string $meteringUnitName)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $unitCount = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday(
        $tenantId, $meteringUnitName
    );

    return [
        'count' => $unitCount->getCount(),
        'date' => $unitCount->getDate(),
        'meteringUnitName' => $unitCount->getMeteringUnitName(),
    ];
}
```

</TabItem>
</Tabs>

## Update the Current Time Metering Unit Count

[API Documentation](../reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCountNow)

### Use Case

Please use this when updating the unit count, such as at times of changes in usage like the number of users.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Update the Current Time Metering Unit Count
 * 
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @param Request $request
 * @return array
 */
public function updateCountOfNow(string $tenantId, string $meteringUnitName, Request $request)
{
    // Retrieve the update method and count from the request
    ['method' => $method, 'count' => $count] = $request->only(['method', 'count']);
    $updateMeteringUnitTimeStampNowParam = new UpdateMeteringUnitTimestampCountNowParam();
    $updateMeteringUnitTimeStampNowParam->setMethod($method)
        ->setCount($count);

    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $count = $pricingApi->updateMeteringUnitTimestampCountNow(
        $tenantId, $meteringUnitName, $updateMeteringUnitTimeStampNowParam
    );

    return [
        'count' => $count->getCount(),
        'timestamp' => $count->getTimestamp(),
        'meteringUnitName' => $count->getMeteringUnitName(),
    ];
}
```

</TabItem>
</Tabs>

## Get the Metering Unit Count for the Current Month

[API Documentation](../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth)

### Use Case

Please use this when you want to show usage to tenants.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Get the Metering Unit Count for the Current Month
 *
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @return array
 */
public function getCountOfCurrentMonth(string $tenantId, string $meteringUnitName)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $unitCount = $pricingApi->getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth($tenantId, $meteringUnitName);

    return [
        'count' => $unitCount->getCount(),
        'month' => $unitCount->getMonth(),
        'meteringUnitName' => $unitCount->getMeteringUnitName(),
    ];
}
```

</TabItem>
</Tabs>

## Get the Metering Unit Count for a Specified Month

[API Documentation](../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth)

### Use Case

Please use this when you want to show usage to tenants.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Get the Metering Unit Count for a Specified Month
 *
 * @param string $tenantId Tenant ID
 * @param string $meteringUnitName Metering Unit Name
 * @param string $month Month in yyyy-mm format
 * @return array
 */
public function getCountOfSpecifiedMonth(string $tenantId, string $meteringUnitName, string $month)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $unitCount = $pricingApi->getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(
        $tenantId, $meteringUnitName, $month
    );

    return [
        'count' => $unitCount->getCount(),
        'month' => $unitCount->getMonth(),
        'meteringUnitName' => $unitCount->getMeteringUnitName(),
    ];
}
```

</TabItem>
</Tabs>

## Get All Metering Unit Counts for a Specified Date

[API Documentation](../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate)

### Use Case

Please use this when you want to show usage to tenants.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Get All Metering Unit Counts for a Specified Date
 *
 * @param string $tenantId Tenant ID
 * @param string $date Date in yyyy-mm-dd format
 * @return \AntiPatternInc\Saasus\Sdk\Pricing\Model\MeteringUnitDateCount[]
 */
public function getAllMeteringCountOfSpecifiedDate(string $tenantId, string $date)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $allMeteringCount = $pricingApi->getMeteringUnitDateCountsByTenantIdAndDate(
        $tenantId, $date
    );

    return array_map(function ($count) {
        return [
            'count' => $unitCount->getCount(),
            'date' => $unitCount->getDate(),
            'meteringUnitName' => $unitCount->getMeteringUnitName(),
        ];
    }, $allMeteringCount->getCounts());
}
```

</TabItem>
</Tabs>
## Get All Metering Unit Counts for a Specified Month

[API Documentation](../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth)

### Use Case

Please use this when you want to show usage to tenants.

### Implementation Sample

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * Get All Metering Unit Counts for a Specified Month
 *
 * @param string $tenantId Tenant ID
 * @param string $month Month in yyyy-mm format
 * @return MeteringUnitMonthCount[]
 */
public function getAllMeteringCountOfSpecifiedMonth(string $tenantId, string $month)
{
    $client = new \AntiPatternInc\Saasus\Api\Client();
    $pricingApi = $client->getPricingClient();
    $allMeteringCount = $pricingApi->getMeteringUnitMonthCountsByTenantIdAndMonth(
        $tenantId, $month
    );

    return array_map(function ($unitCount) {
        return [
            'count' => $unitCount->getCount(),
            'month' => $unitCount->getMonth(),
            'meteringUnitName' => $unitCount->getMeteringUnitName(),
        ];
    }, $allMeteringCount->getCounts());
}
```

</TabItem>
</Tabs>
