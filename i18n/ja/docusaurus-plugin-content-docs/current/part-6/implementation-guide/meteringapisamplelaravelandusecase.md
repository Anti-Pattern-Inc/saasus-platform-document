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

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 指定した日付のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
// date: yyyy-MM-dd形式の日付
// returns: {"count": int, "date": string, "meteringUnitName": string}
func getCountOfSpecifiedDate(c echo.Context) error {
    tenantId := c.Param("tenantId")
    unit := c.Param("unit")
    date := c.Param("date")

    resp, err := pricingClient.
        GetMeteringUnitDateCountByTenantIdAndUnitNameAndDateWithResponse(
            c.Request().Context(), tenantId, unit, date,
        )
    if err != nil || resp.JSON200 == nil {
        return c.String(http.StatusInternalServerError, "pricing API error")
    }

    return c.JSON(http.StatusOK, echo.Map{
        "count":            resp.JSON200.Count,
        "date":             resp.JSON200.Date,
        "meteringUnitName": resp.JSON200.MeteringUnitName,
    })
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 指定した日付のメータリングユニットカウントを取得
# tenant_id: テナントID
# unit: メータリングユニット名
# date: yyyy-MM-dd形式の日付
# returns: {"count": int, "date": str, "meteringUnitName": str}
def get_count_of_specified_date(tenant_id: str, unit: str, date: str) -> Dict:
    metering_api = MeteringApi(api_client=pricing_api_client)
    cnt = metering_api.get_metering_unit_date_count_by_tenant_id_and_unit_name_and_date(
        tenant_id=tenant_id,
        metering_unit_name=unit,
        var_date=date,
    )
    return {
        "count": cnt.count,
        "date": cnt.var_date,
        "meteringUnitName": cnt.metering_unit_name,
    }
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 指定した日付のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
// date: yyyy-MM-dd形式の日付
@GetMapping("/tenants/{tenant_id}/metering/{unit:^(?!date$|month$).+}/date/{date}/count")
public ResponseEntity<?> getUnitDateCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit,
        @PathVariable String date
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        MeteringUnitDateCount cnt = meteringApi
            .getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, unit, date);

        Map<String, Object> resp = new HashMap<>();
        resp.put("count", cnt.getCount());
        resp.put("date", cnt.getDate());
        resp.put("meteringUnitName", cnt.getMeteringUnitName());
        return ResponseEntity.ok(resp);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>指定した日付のメータリングユニットカウントを取得</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="date">日付 (yyyy-MM-dd)</param>
/// <returns>JSON { count:int, date:string, meteringUnitName:string }</returns>
app.MapGet("/tenants/{tenant_id}/metering/{unit}/date/{date}/count",
    async (HttpContext context, string tenant_id, string unit, string date) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitDateCountByTenantIdAndUnitNameAndDateAsync(
            tenant_id, unit, date);
        return Results.Json(new {
            count            = cnt.Count,
            date             = cnt.Date,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// 指定した日付のメータリングユニットカウントを取得
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="date">日付 (yyyy-MM-dd)</param>
/// <returns>JSON { count:int, date:string, meteringUnitName:string }</returns>
[HttpGet]
[Route("tenants/{tenant_id}/metering/{unit}/date/{date}/count")]
public async Task<IHttpActionResult> GetUnitDateCount(
    string tenant_id,
    string unit,
    string date)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitDateCountByTenantIdAndUnitNameAndDateAsync(
            tenant_id, unit, date);
        return Ok(new
        {
            count            = cnt.Count,
            date             = cnt.Date,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 指定したタイムスタンプのメータリングユニットカウントを更新

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCount" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 指定したタイムスタンプのメータリングユニットカウントを更新
// tenantId: テナントID
// unit: メータリングユニット名
// ts: 秒までのタイムスタンプ
// body: {"method": "add|sub|direct", "count": int}
// returns: {"count": int, "timestamp": int, "meteringUnitName": string}
func updateCountOfSpecifiedTS(c echo.Context) error {
	tenantId := c.Param("tenantId")
	unit := c.Param("unit")
	ts, err := strconv.ParseInt(c.Param("ts"), 10, 64)
	if err != nil {
		return c.String(http.StatusBadRequest, "timestamp must be int")
	}

	var body struct {
		Method string `json:"method"` // add | sub | direct
		Count  int    `json:"count"`
	}
	if err := c.Bind(&body); err != nil {
		return c.String(http.StatusBadRequest, "invalid body")
	}

	method := pricingapi.UpdateMeteringUnitTimestampCountMethod(body.Method)
	switch method {
	case pricingapi.Add, pricingapi.Sub, pricingapi.Direct:
	default:
		return c.String(http.StatusBadRequest, "method must be add/sub/direct")
	}

	param := pricingapi.UpdateMeteringUnitTimestampCountParam{Method: method, Count: body.Count}

	resp, err := pricingClient.
		UpdateMeteringUnitTimestampCountWithResponse(
			c.Request().Context(), tenantId, unit, int(ts), param)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}
	return c.JSON(http.StatusOK, resp.JSON200)
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 指定したタイムスタンプのメータリングユニットカウントを更新
# tenant_id: テナントID
# unit: メータリングユニット名
# ts: timestamp (秒)
# req: UpdateCountRequest(method="add|sub|direct", count=int)
# returns: UpdateMeteringUnitTimestampCountParam response model
def update_count_of_specified_ts(tenant_id: str, unit: str, ts: int, req: UpdateCountRequest):
    metering_api = MeteringApi(api_client=pricing_api_client)
    param = UpdateMeteringUnitTimestampCountParam(
        method=UpdateMeteringUnitTimestampCountMethod(req.method),
        count=req.count,
    )
    return metering_api.update_metering_unit_timestamp_count(
        tenant_id=tenant_id,
        metering_unit_name=unit,
        timestamp=ts,
        update_metering_unit_timestamp_count_param=param,
    )
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 指定したタイムスタンプのメータリングユニットカウントを更新
// tenantId: テナントID
// unit: メータリングユニット名
// ts: タイムスタンプ（秒）
// body: {"method":"add|sub|direct","count":int}
@PutMapping("/tenants/{tenant_id}/metering/{unit}/timestamp/{ts}/count")
public ResponseEntity<?> updateUnitTimestampCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit,
        @PathVariable long ts,
        @RequestBody Map<String,Object> body
) {
    String method = (String) body.get("method");
    Object cntVal = body.get("count");
    if (!Arrays.asList("add","sub","direct").contains(method) || !(cntVal instanceof Number)) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
            "request body must include method(add/sub/direct) & count(int)");
    }

    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        UpdateMeteringUnitTimestampCountParam param = new UpdateMeteringUnitTimestampCountParam()
            .method(UpdateMeteringUnitTimestampCountMethod.fromValue(method))
            .count(((Number)cntVal).intValue());

        MeteringUnitTimestampCount res = meteringApi
            .updateMeteringUnitTimestampCount(tenantId, unit, (int) ts, param);

        return ResponseEntity.ok(res.toJson());
    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>タイムスタンプ指定でユニットカウントを更新</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="ts">タイムスタンプ (秒)</param>
/// <param name="body">{"method":"add|sub|direct","count":int}</param>
/// <returns>更新後の MeteringUnitTimestampCount オブジェクト</returns>
app.MapPut("/tenants/{tenant_id}/metering/{unit}/timestamp/{ts}/count",
    async (HttpContext context, string tenant_id, string unit, int ts, JsonElement body) =>
{
    try
    {
        var method = body.GetProperty("method").GetString()!;
        var count  = body.GetProperty("count").GetInt32();
        if (!new[] { "add", "sub", "direct" }.Contains(method))
            return Results.BadRequest("method は add|sub|direct のいずれか。");

        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var param = new UpdateMeteringUnitTimestampCountParam(
            method: Enum.Parse<UpdateMeteringUnitTimestampCountMethod>(method, true),
            count:  count
        );
        var res = await metering.UpdateMeteringUnitTimestampCountAsync(
            tenant_id, unit, ts, param);
        return Results.Json(res);
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// タイムスタンプ指定でユニットカウントを更新
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="ts">タイムスタンプ (秒)</param>
/// <param name="body">{"method":"add|sub|direct","count":int}</param>
/// <returns>更新後の MeteringUnitTimestampCount オブジェクト</returns>
[HttpPut]
[Route("tenants/{tenant_id}/metering/{unit}/timestamp/{ts}/count")]
public async Task<IHttpActionResult> UpdateUnitTimestampCount(
    string tenant_id,
    string unit,
    int ts,
    [FromBody] UpdateRequestBody body)
{
    if (body == null || !new[] { "add", "sub", "direct" }.Contains(body.method))
        return BadRequest("body must include method(add/sub/direct) & count(int)");

    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var param = new UpdateMeteringUnitTimestampCountParam(
            method: (UpdateMeteringUnitTimestampCountMethod)Enum.Parse(
                typeof(UpdateMeteringUnitTimestampCountMethod), body.method, true),
            count: body.count
        );
        var res = await metering.UpdateMeteringUnitTimestampCountAsync(
            tenant_id, unit, ts, param);
        return Ok(res);
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 指定したタイムスタンプのメータリングユニットカウントを削除

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/DeleteMeteringUnitTimestampCount" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 指定したタイムスタンプのメータリングユニットカウントを削除
// tenantId: テナントID
// unit: メータリングユニット名
// ts: 秒までのタイムスタンプ
// returns: {"status":"success"}
func deleteCountOfSpecifiedTS(c echo.Context) error {
	tenantId := c.Param("tenantId")
	unit := c.Param("unit")
	ts, err := strconv.ParseInt(c.Param("ts"), 10, 64)
	if err != nil {
		return c.String(http.StatusBadRequest, "timestamp must be int")
	}

	_, err = pricingClient.
		DeleteMeteringUnitTimestampCountWithResponse(
			c.Request().Context(), tenantId, unit, int(ts))
	if err != nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}
	return c.JSON(http.StatusOK, echo.Map{"status": "success"})
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 指定したタイムスタンプのメータリングユニットカウントを削除
# tenant_id: テナントID
# unit: メータリングユニット名
# ts: timestamp (秒)
# returns: {"status": "success"}
def delete_count_of_specified_ts(tenant_id: str, unit: str, ts: int) -> Dict:
    metering_api = MeteringApi(api_client=pricing_api_client)
    metering_api.delete_metering_unit_timestamp_count(
        tenant_id=tenant_id,
        metering_unit_name=unit,
        timestamp=ts,
    )
    return {"status": "success"}
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 指定したタイムスタンプのメータリングユニットカウントを削除
// tenantId: テナントID
// unit: メータリングユニット名
// ts: タイムスタンプ（秒）
@DeleteMapping("/tenants/{tenant_id}/metering/{unit}/timestamp/{ts}/count")
public ResponseEntity<?> deleteUnitTimestampCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit,
        @PathVariable long ts
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        meteringApi.deleteMeteringUnitTimestampCount(tenantId, unit, (int) ts);

        Map<String,String> resp = new HashMap<>();
        resp.put("status", "success");
        return ResponseEntity.ok(resp);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>タイムスタンプ指定でユニットカウントを削除</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="ts">タイムスタンプ (秒)</param>
/// <returns>{ "status":"success" }</returns>
app.MapDelete("/tenants/{tenant_id}/metering/{unit}/timestamp/{ts}/count",
    async (HttpContext context, string tenant_id, string unit, int ts) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        await metering.DeleteMeteringUnitTimestampCountAsync(tenant_id, unit, ts);
        return Results.Json(new { status = "success" });
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// タイムスタンプ指定でユニットカウントを削除
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="ts">タイムスタンプ (秒)</param>
/// <returns>{ "status":"success" }</returns>
[HttpDelete]
[Route("tenants/{tenant_id}/metering/{unit}/timestamp/{ts}/count")]
public async Task<IHttpActionResult> DeleteUnitTimestampCount(
    string tenant_id,
    string unit,
    int ts)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        await metering.DeleteMeteringUnitTimestampCountAsync(tenant_id, unit, ts);
        return Ok(new { status = "success" });
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 当日のメータリングユニットカウントを取得

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 当日のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
// returns: {"count": int, "date": string, "meteringUnitName": string}
func getCountOfCurrentDay(c echo.Context) error {
	tenantId := c.Param("tenantId")
	unit := c.Param("unit")

	resp, err := pricingClient.
		GetMeteringUnitDateCountByTenantIdAndUnitNameTodayWithResponse(
			c.Request().Context(), tenantId, unit)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}
	return c.JSON(http.StatusOK, echo.Map{
		"count":            resp.JSON200.Count,
		"date":             resp.JSON200.Date,
		"meteringUnitName": resp.JSON200.MeteringUnitName,
	})
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 当日のメータリングユニットカウントを取得
# tenant_id: テナントID
# unit: メータリングユニット名
# returns: {"count": int, "date": str, "meteringUnitName": str}
def get_count_of_current_day(tenant_id: str, unit: str) -> Dict:
    metering_api = MeteringApi(api_client=pricing_api_client)
    cnt = metering_api.get_metering_unit_date_count_by_tenant_id_and_unit_name_today(
      tenant_id=tenant_id,
      metering_unit_name=unit,
    )
    return {
        "count": cnt.count,
        "date": cnt.var_date,
        "meteringUnitName": cnt.metering_unit_name,
    }
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 当日のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
@GetMapping("/tenants/{tenant_id}/metering/{unit:^(?!date$|month$).+}/date/today/count")
public ResponseEntity<?> getUnitTodayCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        MeteringUnitDateCount cnt = meteringApi
            .getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, unit);

        Map<String, Object> resp = new HashMap<>();
        resp.put("count", cnt.getCount());
        resp.put("date", cnt.getDate());
        resp.put("meteringUnitName", cnt.getMeteringUnitName());
        return ResponseEntity.ok(resp);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>当日のメータリングユニットカウントを取得</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <returns>JSON { count:int, date:string, meteringUnitName:string }</returns>
app.MapGet("/tenants/{tenant_id}/metering/{unit}/date/today/count",
    async (HttpContext context, string tenant_id, string unit) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitDateCountByTenantIdAndUnitNameTodayAsync(
            tenant_id, unit);
        return Results.Json(new {
            count            = cnt.Count,
            date             = cnt.Date,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// 当日のメータリングユニットカウントを取得
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <returns>JSON { count:int, date:string, meteringUnitName:string }</returns>
[HttpGet]
[Route("tenants/{tenant_id}/metering/{unit}/date/today/count")]
public async Task<IHttpActionResult> GetUnitTodayCount(
    string tenant_id,
    string unit)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitDateCountByTenantIdAndUnitNameTodayAsync(
            tenant_id, unit);
        return Ok(new
        {
            count            = cnt.Count,
            date             = cnt.Date,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 現在時刻のメータリングユニットカウントを更新

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCountNow" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 現在時刻のメータリングユニットカウントを更新
// tenantId: テナントID
// unit: メータリングユニット名
// body: {"method": "add|sub|direct", "count": int}
// returns: {"count": int, "timestamp": int, "meteringUnitName": string}
func updateCountOfNow(c echo.Context) error {
	tenantId := c.Param("tenantId")
	unit := c.Param("unit")

	var body struct {
		Method string `json:"method"`
		Count  int    `json:"count"`
	}
	if err := c.Bind(&body); err != nil {
		return c.String(http.StatusBadRequest, "invalid body")
	}

	method := pricingapi.UpdateMeteringUnitTimestampCountMethod(body.Method)
	switch method {
	case pricingapi.Add, pricingapi.Sub, pricingapi.Direct:
	default:
		return c.String(http.StatusBadRequest, "method must be add/sub/direct")
	}

	param := pricingapi.UpdateMeteringUnitTimestampCountNowParam{Method: method, Count: body.Count}

	resp, err := pricingClient.
		UpdateMeteringUnitTimestampCountNowWithResponse(
			c.Request().Context(), tenantId, unit, param)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}
	return c.JSON(http.StatusOK, resp.JSON200)
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 現在時刻のメータリングユニットカウントを更新
# tenant_id: テナントID
# unit: メータリングユニット名
# req: UpdateCountRequest(method="add|sub|direct", count=int)
# returns: UpdateMeteringUnitTimestampCountNowParam response model
def update_count_of_now(tenant_id: str, unit: str, req: UpdateCountRequest):
    metering_api = MeteringApi(api_client=pricing_api_client)
    param = UpdateMeteringUnitTimestampCountNowParam(
        method=UpdateMeteringUnitTimestampCountMethod(req.method),
        count=req.count,
    )
    return metering_api.update_metering_unit_timestamp_count_now(
        tenant_id=tenant_id,
        metering_unit_name=unit,
        update_metering_unit_timestamp_count_now_param=param,
    )
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 現在時刻のメータリングユニットカウントを更新
// tenantId: テナントID
// unit: メータリングユニット名
// body: {"method":"add|sub|direct","count":int}
@PutMapping("/tenants/{tenant_id}/metering/{unit}/timestamp/now/count")
public ResponseEntity<?> updateUnitNowCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit,
        @RequestBody Map<String,Object> body
) {
    String method = (String) body.get("method");
    Object cntVal = body.get("count");
    if (!Arrays.asList("add","sub","direct").contains(method) || !(cntVal instanceof Number)) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
            "request body must include method(add/sub/direct) & count(int)");
    }

    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        UpdateMeteringUnitTimestampCountNowParam param = new UpdateMeteringUnitTimestampCountNowParam()
            .method(UpdateMeteringUnitTimestampCountMethod.fromValue(method))
            .count(((Number)cntVal).intValue());

        MeteringUnitTimestampCount res = meteringApi
            .updateMeteringUnitTimestampCountNow(tenantId, unit, param);

        return ResponseEntity.ok(res.toJson());
    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>“now” 指定でユニットカウントを更新</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="body">{"method":"add|sub|direct","count":int}</param>
/// <returns>更新後の MeteringUnitTimestampCount オブジェクト</returns>
app.MapPut("/tenants/{tenant_id}/metering/{unit}/timestamp/now/count",
    async (HttpContext context, string tenant_id, string unit, JsonElement body) =>
{
    try
    {
        var method = body.GetProperty("method").GetString()!;
        var count  = body.GetProperty("count").GetInt32();
        if (!new[] { "add", "sub", "direct" }.Contains(method))
            return Results.BadRequest("method は add|sub|direct のいずれか。");

        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var param = new UpdateMeteringUnitTimestampCountNowParam(
            method: Enum.Parse<UpdateMeteringUnitTimestampCountMethod>(method, true),
            count:  count
        );
        var res = await metering.UpdateMeteringUnitTimestampCountNowAsync(
            tenant_id, unit, param);
        return Results.Json(res);
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// “now” 指定でユニットカウントを更新
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="body">{"method":"add|sub|direct","count":int}</param>
/// <returns>更新後の MeteringUnitTimestampCount オブジェクト</returns>
[HttpPut]
[Route("tenants/{tenant_id}/metering/{unit}/timestamp/now/count")]
public async Task<IHttpActionResult> UpdateUnitNowCount(
    string tenant_id,
    string unit,
    [FromBody] UpdateRequestBody body)
{
    if (body == null || !new[] { "add", "sub", "direct" }.Contains(body.method))
        return BadRequest("body must include method(add/sub/direct) & count(int)");

    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var param = new UpdateMeteringUnitTimestampCountNowParam(
            method: (UpdateMeteringUnitTimestampCountMethod)Enum.Parse(
                typeof(UpdateMeteringUnitTimestampCountMethod), body.method, true),
            count: body.count
        );
        var res = await metering.UpdateMeteringUnitTimestampCountNowAsync(
            tenant_id, unit, param);
        return Ok(res);
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 当月のメータリングユニットカウントを取得

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 当月のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
// returns: {"count": int, "month": string, "meteringUnitName": string}
func getCountOfCurrentMonth(c echo.Context) error {
	tenantId := c.Param("tenantId")
	unit := c.Param("unit")

	resp, err := pricingClient.
		GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonthWithResponse(
			c.Request().Context(), tenantId, unit)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}
	return c.JSON(http.StatusOK, echo.Map{
		"count":            resp.JSON200.Count,
		"month":            resp.JSON200.Month,
		"meteringUnitName": resp.JSON200.MeteringUnitName,
	})
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 当月のメータリングユニットカウントを取得
# tenant_id: テナントID
# unit: メータリングユニット名
# returns: {"count": int, "month": str, "meteringUnitName": str}
def get_count_of_current_month(tenant_id: str, unit: str) -> Dict:
    metering_api = MeteringApi(api_client=pricing_api_client)
    cnt = metering_api.get_metering_unit_month_count_by_tenant_id_and_unit_name_this_month(
      tenant_id=tenant_id,
      metering_unit_name=unit,
    )
    return {
        "count": cnt.count,
        "month": cnt.month,
        "meteringUnitName": cnt.metering_unit_name,
    }
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 当月のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
@GetMapping("/tenants/{tenant_id}/metering/{unit:^(?!date$|month$).+}/month/this/count")
public ResponseEntity<?> getUnitThisMonthCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        MeteringUnitMonthCount cnt = meteringApi
            .getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, unit);

        Map<String, Object> resp = new HashMap<>();
        resp.put("count", cnt.getCount());
        resp.put("month", cnt.getMonth());
        resp.put("meteringUnitName", cnt.getMeteringUnitName());
        return ResponseEntity.ok(resp);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>当月のメータリングユニットカウントを取得</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <returns>JSON { count:int, month:string, meteringUnitName:string }</returns>
app.MapGet("/tenants/{tenant_id}/metering/{unit}/month/this/count",
    async (HttpContext context, string tenant_id, string unit) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonthAsync(
            tenant_id, unit);
        return Results.Json(new {
            count            = cnt.Count,
            month            = cnt.Month,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// 当月のメータリングユニットカウントを取得
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <returns>JSON { count:int, month:string, meteringUnitName:string }</returns>
[HttpGet]
[Route("tenants/{tenant_id}/metering/{unit}/month/this/count")]
public async Task<IHttpActionResult> GetUnitThisMonthCount(
    string tenant_id,
    string unit)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonthAsync(
            tenant_id, unit);
        return Ok(new
        {
            count            = cnt.Count,
            month            = cnt.Month,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 指定月のメータリングユニットカウントを取得

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 指定月のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
// month: yyyy-MM形式の月
// returns: {"count": int, "month": string, "meteringUnitName": string}
func getCountOfSpecifiedMonth(c echo.Context) error {
	tenantId := c.Param("tenantId")
	unit := c.Param("unit")
	month := c.Param("month") // yyyy-MM

	resp, err := pricingClient.
		GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonthWithResponse(
			c.Request().Context(), tenantId, unit, month)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}

	return c.JSON(http.StatusOK, echo.Map{
		"count":            resp.JSON200.Count,
		"month":            resp.JSON200.Month,
		"meteringUnitName": resp.JSON200.MeteringUnitName,
	})
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 指定月のメータリングユニットカウントを取得
# tenant_id: テナントID
# unit: メータリングユニット名
# month: yyyy-MM形式の月
# returns: {"count": int, "month": str, "meteringUnitName": str}
def get_count_of_specified_month(tenant_id: str, unit: str, month: str) -> Dict:
    metering_api = MeteringApi(api_client=pricing_api_client)
    cnt = metering_api.get_metering_unit_month_count_by_tenant_id_and_unit_name_and_month(
        tenant_id=tenant_id,
        metering_unit_name=unit,
        month=month,
    )
    return {
        "count": cnt.count,
        "month": cnt.month,
        "meteringUnitName": cnt.metering_unit_name,
    }
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 指定月のメータリングユニットカウントを取得
// tenantId: テナントID
// unit: メータリングユニット名
// month: yyyy-MM形式の月
@GetMapping("/tenants/{tenant_id}/metering/{unit:^(?!date$|month$).+}/month/{month}/count")
public ResponseEntity<?> getUnitMonthCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String unit,
        @PathVariable String month
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        MeteringUnitMonthCount cnt = meteringApi
            .getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, unit, month);

        Map<String, Object> resp = new HashMap<>();
        resp.put("count", cnt.getCount());
        resp.put("month", cnt.getMonth());
        resp.put("meteringUnitName", cnt.getMeteringUnitName());
        return ResponseEntity.ok(resp);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>指定月のメータリングユニットカウントを取得</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="month">月 (yyyy-MM)</param>
/// <returns>JSON { count:int, month:string, meteringUnitName:string }</returns>
app.MapGet("/tenants/{tenant_id}/metering/{unit}/month/{month}/count",
    async (HttpContext context, string tenant_id, string unit, string month) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonthAsync(
            tenant_id, unit, month);
        return Results.Json(new {
            count            = cnt.Count,
            month            = cnt.Month,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// 指定月のメータリングユニットカウントを取得
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="unit">メータリングユニット名</param>
/// <param name="month">月 (yyyy-MM)</param>
/// <returns>JSON { count:int, month:string, meteringUnitName:string }</returns>
[HttpGet]
[Route("tenants/{tenant_id}/metering/{unit}/month/{month}/count")]
public async Task<IHttpActionResult> GetUnitMonthCount(
    string tenant_id,
    string unit,
    string month)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var cnt = await metering.GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonthAsync(
            tenant_id, unit, month);
        return Ok(new
        {
            count            = cnt.Count,
            month            = cnt.Month,
            meteringUnitName = cnt.MeteringUnitName
        });
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 指定日の全メータリングユニットカウントを取得

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 指定日の全メータリングユニットカウントを取得
// tenantId: テナントID
// date: yyyy-MM-dd形式の日付
// returns: []{"count": int, "date": string, "meteringUnitName": string}
func getAllCountsOfSpecifiedDate(c echo.Context) error {
	tenantId := c.Param("tenantId")
	date := c.Param("date")

	resp, err := pricingClient.
		GetMeteringUnitDateCountsByTenantIdAndDateWithResponse(
			c.Request().Context(), tenantId, date)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}

	out := make([]map[string]interface{}, len(resp.JSON200.Counts))
	for i, v := range resp.JSON200.Counts {
		out[i] = map[string]interface{}{
			"count":            v.Count,
			"date":             v.Date,
			"meteringUnitName": v.MeteringUnitName,
		}
	}
	return c.JSON(http.StatusOK, out)
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 指定日の全メータリングユニットカウントを取得
# tenant_id: テナントID
# date: yyyy-MM-dd形式の日付
# returns: List[{"count": int, "date": str, "meteringUnitName": str}]
def get_all_counts_of_specified_date(tenant_id: str, date: str) -> List[Dict]:
    metering_api = MeteringApi(api_client=pricing_api_client)
    all_counts = metering_api.get_metering_unit_date_counts_by_tenant_id_and_date(
        tenant_id=tenant_id,
        date=date,
    )
    return [
        {"count": v.count, "date": v.date, "meteringUnitName": v.metering_unit_name}
        for v in all_counts.counts
    ]
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 指定日の全メータリングユニットカウントを取得
// tenantId: テナントID
// date: yyyy-MM-dd形式の日付
@GetMapping("/tenants/{tenant_id}/metering/date/{date}/count")
public ResponseEntity<?> getAllUnitsDateCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String date
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        MeteringUnitDateCounts all = meteringApi
            .getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date);

        List<Map<String,Object>> list = new ArrayList<>();
        for (MeteringUnitDateCount e : all.getCounts()) {
            Map<String,Object> m = new HashMap<>();
            m.put("count", e.getCount());
            m.put("date",  e.getDate());
            m.put("meteringUnitName", e.getMeteringUnitName());
            list.add(m);
        }
        return ResponseEntity.ok(list);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>指定日の全ユニットカウントを取得</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="date">日付 (yyyy-MM-dd)</param>
/// <returns>JSON[] of { count:int, date:string, meteringUnitName:string }</returns>
app.MapGet("/tenants/{tenant_id}/metering/date/{date}/count",
    async (HttpContext context, string tenant_id, string date) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var all = await metering.GetMeteringUnitDateCountsByTenantIdAndDateAsync(
            tenant_id, date);
        var list = all.Counts.Select(v => new {
            count            = v.Count,
            date             = v.Date,
            meteringUnitName = v.MeteringUnitName
        });
        return Results.Json(list);
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// 指定日の全メータリングユニットカウントを取得
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="date">日付 (yyyy-MM-dd)</param>
/// <returns>JSON[] of { count:int, date:string, meteringUnitName:string }</returns>
[HttpGet]
[Route("tenants/{tenant_id}/metering/date/{date}/count")]
public async Task<IHttpActionResult> GetAllUnitsDateCount(
    string tenant_id,
    string date)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var all = await metering.GetMeteringUnitDateCountsByTenantIdAndDateAsync(
            tenant_id, date);
        var list = all.Counts
            .Select(v => new
            {
                count            = v.Count,
                date             = v.Date,
                meteringUnitName = v.MeteringUnitName
            })
            .ToList();
        return Ok(list);
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>

## 指定月の全メータリングユニットカウントを取得

<a href="/ja/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth" target="_blank">APIドキュメント</a>

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
<TabItem value="go" label="Go">

```go
// 指定月の全メータリングユニットカウントを取得
// tenantId: テナントID
// month: yyyy-MM形式の月
// returns: []{"count": int, "month": string, "meteringUnitName": string}
func getAllCountsOfSpecifiedMonth(c echo.Context) error {
	tenantId := c.Param("tenantId")
	month := c.Param("month")

	resp, err := pricingClient.
		GetMeteringUnitMonthCountsByTenantIdAndMonthWithResponse(
			c.Request().Context(), tenantId, month)
	if err != nil || resp.JSON200 == nil {
		return c.String(http.StatusInternalServerError, "pricing API error")
	}

	out := make([]map[string]interface{}, len(resp.JSON200.Counts))
	for i, v := range resp.JSON200.Counts {
		out[i] = map[string]interface{}{
			"count":            v.Count,
			"month":            v.Month,
			"meteringUnitName": v.MeteringUnitName,
		}
	}
	return c.JSON(http.StatusOK, out)
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# 指定月の全メータリングユニットカウントを取得
# tenant_id: テナントID
# month: yyyy-MM形式の月
# returns: List[{"count": int, "month": str, "meteringUnitName": str}]
def get_all_counts_of_specified_month(tenant_id: str, month: str) -> List[Dict]:
    metering_api = MeteringApi(api_client=pricing_api_client)
    all_counts = metering_api.get_metering_unit_month_counts_by_tenant_id_and_month(
        tenant_id=tenant_id,
        month=month,
    )
    return [
        {"count": v.count, "month": v.month, "meteringUnitName": v.metering_unit_name}
        for v in all_counts.counts
    ]
```

</TabItem>
<TabItem value="java" label="Java">

```java
// 指定月の全メータリングユニットカウントを取得
// tenantId: テナントID
// month: yyyy-MM形式の月
@GetMapping("/tenants/{tenant_id}/metering/month/{month}/count")
public ResponseEntity<?> getAllUnitsMonthCount(
        HttpServletRequest request,
        @PathVariable("tenant_id") String tenantId,
        @PathVariable String month
) {
    try {
        PricingApiClient pricingClient = new Configuration().getPricingApiClient();
        pricingClient.setReferer(request.getHeader("X-Saasus-Referer"));
        MeteringApi meteringApi = new MeteringApi(pricingClient);

        MeteringUnitMonthCounts all = meteringApi
            .getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month);

        List<Map<String,Object>> list = new ArrayList<>();
        for (MeteringUnitMonthCount e : all.getCounts()) {
            Map<String,Object> m = new HashMap<>();
            m.put("count", e.getCount());
            m.put("month",  e.getMonth());
            m.put("meteringUnitName", e.getMeteringUnitName());
            list.add(m);
        }
        return ResponseEntity.ok(list);

    } catch (saasus.sdk.pricing.ApiException e) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "Pricing API error: " + e.getMessage(), e
        );
    }
}
```

</TabItem>
<TabItem value="csharp" label="C#(.Net8)">

```csharp
/// <summary>指定月の全ユニットカウントを取得</summary>
/// <param name="context">HTTP コンテキスト</param>
/// <param name="tenant_id">テナントID</param>
/// <param name="month">月 (yyyy-MM)</param>
/// <returns>JSON[] of { count:int, month:string, meteringUnitName:string }</returns>
app.MapGet("/tenants/{tenant_id}/metering/month/{month}/count",
    async (HttpContext context, string tenant_id, string month) =>
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig(), context);
        var metering = new MeteringApi(cfg);
        var all = await metering.GetMeteringUnitMonthCountsByTenantIdAndMonthAsync(
            tenant_id, month);
        var list = all.Counts.Select(v => new {
            count            = v.Count,
            month            = v.Month,
            meteringUnitName = v.MeteringUnitName
        });
        return Results.Json(list);
    }
    catch (Exception ex) { return HandleApiException(ex); }
});
```

</TabItem>
<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

```csharp
/// <summary>
/// 指定月の全メータリングユニットカウントを取得
/// </summary>
/// <param name="tenant_id">テナントID</param>
/// <param name="month">月 (yyyy-MM)</param>
/// <returns>JSON[] of { count:int, month:string, meteringUnitName:string }</returns>
[HttpGet]
[Route("tenants/{tenant_id}/metering/month/{month}/count")]
public async Task<IHttpActionResult> GetAllUnitsMonthCount(
    string tenant_id,
    string month)
{
    try
    {
        var cfg = CreateClientConfiguration(c => c.GetPricingApiClientConfig());
        var metering = new MeteringApi(cfg);
        var all = await metering.GetMeteringUnitMonthCountsByTenantIdAndMonthAsync(
            tenant_id, month);
        var list = all.Counts
            .Select(v => new
            {
                count            = v.Count,
                month            = v.Month,
                meteringUnitName = v.MeteringUnitName
            })
            .ToList();
        return Ok(list);
    }
    catch (Exception ex) { return HandleApiException(ex); }
}
```

</TabItem>
</Tabs>
