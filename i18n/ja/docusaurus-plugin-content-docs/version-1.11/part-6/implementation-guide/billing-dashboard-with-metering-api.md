---
title: "課金情報ダッシュボード実装ガイド"
slug: "billing-dashboard-with-metering-api"
excerpt: "SaaSus API を活用した課金ダッシュボードの実装例。"
hidden: false
createdAt: "Thu Jul 31 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jul 31 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---
## 概要

本ページでは、サンプルアプリ 課金情報ダッシュボード を題材に、SaaSus Metering API／Pricing API を組み合わせて テナントごとの請求額と使用量をリアルタイムで把握できるダッシュボード の実装方法を解説します。

以下は課金情報ダッシュボードのスクリーンショットです。

![](/ja/img/part-6/implementation-guide/billing-dashboard-with-metering-api/image-01.png)


## バックエンド実装エンドポイント一覧

<div className="table-scroll">
  <table className="nowrap-table">
    <thead>
      <tr>
        <th>種別</th>
        <th>メソッド &amp; パス</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>請求期間候補</td>
        <td><code>GET /billing/plan_periods?tenant_id=</code></td>
        <td>テナントに対して適用されたプラン履歴をもとに 月次/年次 区間を返却します。セレクトボックス生成に使用。</td>
      </tr>
      <tr>
        <td>ダッシュボード集計</td>
        <td><code>GET /billing/dashboard</code></td>
        <td>メータリング集計結果と課金額、プラン情報をまとめて取得。</td>
      </tr>
      <tr>
        <td>メータ更新 (現時刻)</td>
        <td><code>POST /billing/metering/&#123;tenant_id&#125;/&#123;unit&#125;</code></td>
        <td><code>add / sub / direct</code> を指定して即時メータを加減。</td>
      </tr>
      <tr>
        <td>メータ更新 (任意TS)</td>
        <td><code>POST /billing/metering/&#123;tenant_id&#125;/&#123;unit&#125;/&#123;ts&#125;</code></td>
        <td>履歴補正など、任意タイムスタンプで更新。</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
プラン履歴は Auth API の [テナント情報を取得](/docs/reference/auth-api#tag/tenant/operation/GetTenant) のレスポンスに含まれる plan_histories 配列から取得できます。
:::

## 請求期間候補エンドポイント
### 請求期間セレクトボックスの実装

プラン履歴を *月*／*年* 単位に切り分ける処理は **バックエンド** で行い、フロントには区間ラベルと Unix タイムスタンプ（秒）を渡します。

:::info
Auth API の [テナント情報を取得](/docs/reference/auth-api#tag/tenant/operation/GetTenant) レスポンスの plan_histories 配列（plan_id と plan_applied_at）を用いてプラン適用タイミングを取得し、current_plan_period_end を最終境界として扱います。plan_id が空のエントリは除外してください。
:::

:::info
以下の実装フロー概要およびコードサンプルはバックエンドが Go、フロントエンドが React を前提としています。
:::

**実装フロー概要**

1. **テナント情報取得** — Auth API でテナントを取得し、`planHistories` と `currentPlanPeriodEnd` を取得。
2. **境界エッジ作成** — `planAppliedAt` を昇順にソートして境界点 (`edge`) の配列を作成。
3. **最終境界決定** — `currentPlanPeriodEnd` があればその 1 秒前、無ければ「現在」を最終境界に設定。
4. **区間分割** — 区間ごとに月次 / 年次かを判定し、`step()` でループしながら `PlanPeriodOption` を生成。
5. **最新優先ソート** — `Start` をキーに降順ソートしてフロントへ返却。

```go
// ② 境界エッジ作成 & ④ 区間を month/year で分割
type edge struct { PlanID string; Time time.Time }
// ...プラン履歴を Time 昇順で edge 配列に格納...
for cur := periodStart; !cur.After(periodEnd); {
    next := step(cur)        // month なら +1M, year なら +1Y
    end  := next.Add(-1 * time.Second)
    results = append(results, PlanPeriodOption{ Label: label(cur,end), PlanID: e.PlanID, Start: cur.Unix(), End: end.Unix() })
    if end.Equal(periodEnd) { break }
    cur = end.Add(time.Second)
}
```

フロントではこれを **`<select>`** にバインドし、選択が変わるたびに `GET /billing/dashboard` を再フェッチします。

```tsx
// BillingDashboard.tsx (抜粋)
const fetchPeriodOptions = async () => {
  const res = await axios.get<PlanPeriodOption[]>("/billing/plan_periods", { params:{ tenant_id } });
  setPeriodOptions(res.data);
  setSelectedPeriod(toState(res.data[0]));
};
```

より詳細なバックエンド実装については、下記の[言語別サンプルコード一覧](#言語別サンプルコード一覧)セクションをご参照ください。
さい。

## ダッシュボード集計エンドポイント
### aggregate\_usage: **max** と **sum** の違い

| モード           | 典型ユースケース          | 集計方法             |
| ------------- | ----------------- | ---------------- |
| `sum` (デフォルト) | API 呼び出し回数／データ転送量 | 期間内 **合計値** を使用。 |
| `max`         | 同時接続数／アクティブユーザー数  | 期間内 **最大値** を使用。 |

calculateMeteringUnitBillings ではメータの aggregate_usage をチェックし、max の場合は対象期間のレコードの中で最大値を採用します。

```go
if aggUsage == "max" {
    for _, c := range resp.JSON200.Counts {
        if float64(c.Count) > count { count = float64(c.Count) }
    }
} else { // sum
    for _, c := range resp.JSON200.Counts { count += float64(c.Count) }
}
```

:::info
aggregate_usage の設定項目は、Stripe 連携を有効にしている場合のみ UI に表示されます。  
プラットフォーム単体利用時には非表示になります。
:::

### unit_type による課金額の算出ロジック

メータリングユニットには `type` が設定されており、以下のように課金方式が異なります。

| type           | 計測単位                             | 課金ロジック                       |
|----------------|----------------------------------|------------------------------------|
| `fixed`        | 固定ユニット           | 固定単価をそのまま金額に反映        |
| `usage`        | 使用量ユニット                         | 使用量 × 単価                      |
| `tiered`       | 段階ユニット  | 該当段を判定し、その条件に基づいて加算 |
| `tiered_usage` | 段階使用量ユニット                         | 下位段から順に積み上げ式で加算       |

```go
func calculateAmountByUnitType(count float64, u map[string]interface{}) float64 {
  unitType, _ := u["type"].(string)
  price, _ := u["unit_amount"].(float64)

  switch unitType {
  case "fixed":
    return price
  case "usage":
    return count * price
  case "tiered":
    return calcTiered(count, u)
  case "tiered_usage":
    return calcTieredUsage(count, u)
  default:
    // フォールバック: 不明な unit_type は usage とみなして従量課金で計算
    return count * price
  }
}
```
※ tiered / tiered_usage の詳細ロジックは calcTiered, calcTieredUsage を参照

より詳細なバックエンド実装については、下記の[言語別サンプルコード一覧](#言語別サンプルコード一覧)セクションをご参照ください。

## メータ更新

課金ダッシュボード上でのメータ更新は、現在時刻に対して更新するインライン編集ケースと、任意のタイムスタンプで履歴補正するモーダル編集ケースに分かれます。

### インライン編集例

```go
func updateCountOfNow(c echo.Context) error {
    tenantId := c.Param("tenantId")
    unitName := c.Param("unit")

    userInfo, _ := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
    if !hasBillingAccess(userInfo, tenantId) {
        return c.String(http.StatusForbidden, "Insufficient permissions")
    }

    var body struct {
        Method string `json:"method"` // add | sub | direct
        Count  int    `json:"count"`
    }
    if err := c.Bind(&body); err != nil {
        return c.String(http.StatusBadRequest, "invalid JSON body")
    }
    if body.Count < 0 {
        return c.String(http.StatusBadRequest, "count must be >= 0")
    }

    method := pricingapi.UpdateMeteringUnitTimestampCountMethod(body.Method)
    switch method {
    case pricingapi.Add, pricingapi.Sub, pricingapi.Direct:
        // OK
    default:
        return c.String(http.StatusBadRequest, "method must be add, sub, or direct")
    }

    param := pricingapi.UpdateMeteringUnitTimestampCountNowParam{
        Method: method,
        Count:  body.Count,
    }

    resp, err := pricingClient.UpdateMeteringUnitTimestampCountNowWithResponse(
        c.Request().Context(), tenantId, unitName, param,
    )
    if err != nil {
        log.Printf("pricing API error: %v", err)
        return c.String(http.StatusInternalServerError, "pricing API error")
    }
    if resp.JSON200 == nil {
        return c.String(resp.StatusCode(), string(resp.Body))
    }

    return c.JSON(http.StatusOK, resp.JSON200)
}

```

:::info
インラインのプラス/マイナスボタンは、選択中の期間が「現在進行中」の場合のみ表示されます。
:::

### モーダル編集例（任意タイムスタンプで補正）

```go
func updateCountOfSpecifiedTS(c echo.Context) error {
    tenantId := c.Param("tenantId")
    unitName := c.Param("unit")
    tsStr := c.Param("ts")

    userInfo, _ := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
    if !hasBillingAccess(userInfo, tenantId) {
        return c.String(http.StatusForbidden, "Insufficient permissions")
    }

    ts, err := strconv.ParseInt(tsStr, 10, 64)
    if err != nil {
        return c.String(http.StatusBadRequest, "ts must be 10-digit unix seconds")
    }

    var body struct {
        Method string `json:"method"` // add | sub | direct
        Count  int    `json:"count"`
    }
    if err := c.Bind(&body); err != nil {
        return c.String(http.StatusBadRequest, "invalid JSON body")
    }
    if body.Count < 0 {
        return c.String(http.StatusBadRequest, "count must be >= 0")
    }

    method := pricingapi.UpdateMeteringUnitTimestampCountMethod(body.Method)
    switch method {
    case pricingapi.Add, pricingapi.Sub, pricingapi.Direct:
        // OK
    default:
        return c.String(http.StatusBadRequest, "method must be add, sub, or direct")
    }

    param := pricingapi.UpdateMeteringUnitTimestampCountParam{
        Method: method,
        Count:  body.Count,
    }

    resp, err := pricingClient.UpdateMeteringUnitTimestampCountWithResponse(
        c.Request().Context(), tenantId, unitName, int(ts), param,
    )
    if err != nil {
        log.Printf("pricing API error: %v", err)
        return c.String(http.StatusInternalServerError, "pricing API error")
    }
    if resp.JSON200 == nil {
        return c.String(resp.StatusCode(), string(resp.Body))
    }

    return c.JSON(http.StatusOK, resp.JSON200)
}
```

より詳細なバックエンド実装については、次のセクションをご参照ください。

## 言語別サンプルコード一覧

以下は、本ガイドで紹介した各エンドポイントに対応する**バックエンド実装のサンプルコード**です。  
言語ごとにファイルへのリンクと、該当する関数名を記載しています。  
リンク先で **Ctrl+F で関数名を検索**して該当実装をご確認ください。

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>エンドポイント</th>
      <th>Go</th>
      <th>Python</th>
      <th>Java</th>
      <th>C#(.NET 8)</th>
      <th>C#(.NET Framework 4.8)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/billing/plan_periods</code></td>
      <td>
        [billing.go](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)<br />
        関数: <code>getPlanPeriods</code>
      </td>
      <td>
        [billing_router.py](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)<br />
        関数: <code>get_plan_periods</code>
      </td>
      <td>
        [BillingController.java](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)<br />
        関数: <code>getPlanPeriods</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)<br />
        関数: <code>GetPlanPeriods</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)<br />
        関数: <code>GetPlanPeriods</code>
      </td>
    </tr>
    <tr>
      <td><code>/billing/dashboard</code></td>
      <td>
        [billing.go](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)<br />
        関数: <code>getBillingDashboard</code>
      </td>
      <td>
        [billing_router.py](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)<br />
        関数: <code>get_billing_dashboard</code>
      </td>
      <td>
        [BillingController.java](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)<br />
        関数: <code>getBillingDashboard</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)<br />
        関数: <code>GetBillingDashboard</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)<br />
        関数: <code>GetBillingDashboard</code>
      </td>
    </tr>
    <tr>
      <td><code>/billing/metering/&#123;tenant&#125;/&#123;unit&#125;</code></td>
      <td>
        [billing.go](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)<br />
        関数: <code>updateCountOfNow</code>
      </td>
      <td>
        [billing_router.py](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)<br />
        関数: <code>update_count_of_now</code>
      </td>
      <td>
        [BillingController.java](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)<br />
        関数: <code>updateCountOfNow</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)<br />
        関数: <code>UpdateMeteringCountNow</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)<br />
        関数: <code>UpdateMeteringCountNow</code>
      </td>
    </tr>
    <tr>
      <td><code>/billing/metering/&#123;tenant&#125;/&#123;unit&#125;/&#123;ts&#125;</code></td>
      <td>
        [billing.go](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)<br />
        関数: <code>updateCountOfSpecifiedTS</code>
      </td>
      <td>
        [billing_router.py](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)<br />
        関数: <code>update_count_of_specified_timestamp</code>
      </td>
      <td>
        [BillingController.java](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)<br />
        関数: <code>updateCountOfSpecifiedTimestamp</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)<br />
        関数: <code>UpdateMeteringCount</code>
      </td>
      <td>
        [BillingController.cs](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)<br />
        関数: <code>UpdateMeteringCount</code>
      </td>
    </tr>
  </tbody>
</table>
</div>


