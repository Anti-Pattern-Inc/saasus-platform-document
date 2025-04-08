---
title: "メータリングAPIの実装サンプルと使用例(Laravel)"
slug: "metering-api-sample"
excerpt: ""
hidden: false
createdAt: "Tue Nov 14 2023 06:22:12 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Dec 27 2023 09:00:19 GMT+0000 (Coordinated Universal Time)"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SDKを使用した各メータリングAPIのLaravel実装サンプルとメータリングAPIを利用した機能の一例を記載します。

それぞれのAPIの詳細はAPIドキュメントをご確認ください。

# Laravel実装サンプル

## 指定した日付のメータリングユニットカウントを取得

<a href="../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate" target="_blank">APIドキュメント</a>

### ユースケース

テナント向けに使用量を見せたい場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php PHP
/**
 * 指定した日付のメータリングユニットカウントを取得
 *
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
 * @param string $date 日付 yyyy-mm-dd形式
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

## 指定したタイムスタンプのメータリングユニットカウントを更新

<a href="../reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCount" target="_blank">APIドキュメント</a>

### ユースケース

過去のデータで使用量の更新ミスがあった場合に調整する場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 指定したタイムスタンプのメータリングユニットカウントを更新
 *
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
 * @param int $timestamp タイムスタンプ 秒までのタイムスタンプ
 * @param Request $request
 * @return array
 */
public function updateCountOfSpecifiedTimestamp(string $tenantId, string $meteringUnitName, int $timestamp, Request $request)
{
    // リクエストから更新方法と件数を取得
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

## 指定したタイムスタンプのメータリングユニットカウントを削除

<a href="../reference/pricing-api#tag/metering/operation/DeleteMeteringUnitTimestampCount" target="_blank">APIドキュメント</a>

### ユースケース

過去のデータで使用量の更新ミスがあった場合に調整する場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 指定したタイムスタンプのメータリングユニットカウントを削除
 *
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
 * @param int $timestamp タイムスタンプ 秒までのタイムスタンプ
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

## 当日のメータリングユニットカウントを取得

<a href="../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday" target="_blank">APIドキュメント</a>

### ユースケース

テナント向けに使用量を見せたい場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 当日のメータリングユニットのカウントを取得
 *
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
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

## 現在時刻のメータリングユニットカウントを更新

<a href="../reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCountNow" target="_blank">APIドキュメント</a>

### ユースケース

ユーザー数等の使用量の変更が発生したタイミング等、ユニットカウントを更新する場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 現在時刻のメータリングユニットカウントを更新
 * 
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
 * @param Request $request
 * @return array
 */
public function updateCountOfNow(string $tenantId, string $meteringUnitName, Request $request)
{
    // リクエストから更新方法と件数を取得
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

## 当月のメータリングユニットカウントを取得

<a href="../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth" target="_blank">APIドキュメント</a>

### ユースケース

テナント向けに使用量を見せたい場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 当月のメータリングユニットのカウントを取得
 *
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
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

## 指定月のメータリングユニットカウントを取得

<a href="../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth" target="_blank">APIドキュメント</a>

### ユースケース

テナント向けに使用量を見せたい場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 指定月のメータリングユニットカウントを取得
 *
 * @param string $tenantId テナントID
 * @param string $meteringUnitName メータリングユニット名
 * @param string $month 月 yyyy-mm形式
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

## 指定日の全メータリングユニットカウントを取得

<a href="../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate" target="_blank">APIドキュメント</a>

### ユースケース

テナント向けに使用量を見せたい場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 指定日の全メータリングユニットカウントを取得
 *
 * @param string $tenantId テナントID
 * @param string $date 日付 yyyy-mm-dd形式
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

## 指定月の全メータリングユニットカウントを取得

<a href="../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth" target="_blank">APIドキュメント</a>

### ユースケース

テナント向けに使用量を見せたい場合などに使用してください。

### 実装サンプル

<Tabs>
<TabItem value="php" label="PHP">

```php
/**
 * 指定月の全メータリングユニットカウントを取得
 *
 * @param string $tenantId テナントID
 * @param string $month 月 yyyy-mm形式
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
