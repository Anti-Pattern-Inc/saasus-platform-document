---
title: "プラン変更の実装"
slug: "plan-change-implementation"
excerpt: "SaaSアプリケーションでのプラン変更機能の実装サンプル"
hidden: false
createdAt: "Sun Oct 06 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

サンプルアプリのプラン設定変更機能を題材に、SaaSus Auth API と Pricing API を組み合わせて、テナントの料金プラン変更機能を実装する方法を解説します。

以下はプラン設定画面のスクリーンショットです。

![](/ja/img/part-6/implementation-guide/sample-application/plan-change-implementation/image-01.png)

プラン設定変更機能では以下の機能を提供します：

- 現在のプラン情報の表示
- プラン変更予約情報の表示
- プラン変更の実行

## フロントエンド実装

### 実装例リンク

以下のリンク先に、フロントエンドの実装が含まれています。

- **React**: [`PlanSettings.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/PlanSettings.tsx)

## バックエンド実装

### エンドポイント一覧

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
        <td>現在のプラン情報</td>
        <td><code>GET /tenants/&#123;tenantId&#125;/plan</code></td>
        <td>テナントの現在のプラン情報と履歴を取得します。</td>
      </tr>
      <tr>
        <td>プラン一覧</td>
        <td><code>GET /pricing_plans</code></td>
        <td>全料金プランの一覧を取得します。</td>
      </tr>
      <tr>
        <td>税率一覧</td>
        <td><code>GET /tax_rates</code></td>
        <td>利用可能な税率の一覧を取得します。</td>
      </tr>
      <tr>
        <td>プラン変更実行</td>
        <td><code>PUT /tenants/&#123;tenantId&#125;/plan</code></td>
        <td>テナントの料金プランを変更します。</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
以下のコードサンプルはバックエンドが Go を前提としています。
:::

### 現在のプラン情報取得エンドポイント

#### 実装例（履歴から現在の税率設定を取得）

<Tabs>
<TabItem value="go" label="Go" default>

```go
func getTenantPlanInfo(c echo.Context) error {
    tenantId := c.Param("tenant_id")
    if tenantId == "" {
        return c.JSON(http.StatusBadRequest, echo.Map{"error": "tenant_id is required"})
    }

    userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
    if !ok {
        c.Logger().Error("failed to get user info")
        return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Internal server error"})
    }

    // 管理者権限チェック
    if !hasBillingAccess(userInfo, tenantId) {
        return c.JSON(http.StatusForbidden, echo.Map{"error": "Insufficient permissions"})
    }

    // テナント詳細情報を取得
    tenantDetailResp, err := authClient.GetTenantWithResponse(context.Background(), authapi.TenantId(tenantId))
    if err != nil {
        c.Logger().Errorf("Failed to retrieve tenant detail: %v", err)
        return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Failed to retrieve tenant detail"})
    }

    if tenantDetailResp.StatusCode() != http.StatusOK {
        c.Logger().Errorf("Failed to retrieve tenant detail: status %d", tenantDetailResp.StatusCode())
        return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Failed to retrieve tenant detail"})
    }

    if tenantDetailResp.JSON200 == nil {
        return c.JSON(http.StatusNotFound, echo.Map{"error": "Tenant not found"})
    }

    // 現在の税率設定を取得（プラン履歴の最新エントリから）
    var currentTaxRateId *string
    if len(tenantDetailResp.JSON200.PlanHistories) > 0 {
        latestPlanHistory := tenantDetailResp.JSON200.PlanHistories[len(tenantDetailResp.JSON200.PlanHistories)-1]
        if latestPlanHistory.TaxRateId != nil {
            taxRateIdStr := string(*latestPlanHistory.TaxRateId)
            currentTaxRateId = &taxRateIdStr
        }
    }

    // レスポンスを構築
    response := echo.Map{
        "id":               tenantDetailResp.JSON200.Id,
        "name":             tenantDetailResp.JSON200.Name,
        "plan_id":          tenantDetailResp.JSON200.PlanId,
        "tax_rate_id":      currentTaxRateId,
        "plan_reservation": nil,
    }

    // 予約情報がある場合は追加
    if tenantDetailResp.JSON200.NextPlanId != nil {
        planReservation := echo.Map{
            "next_plan_id":          *tenantDetailResp.JSON200.NextPlanId,
            "using_next_plan_from":  tenantDetailResp.JSON200.UsingNextPlanFrom,
            "next_plan_tax_rate_id": tenantDetailResp.JSON200.NextPlanTaxRateId,
        }
        response["plan_reservation"] = planReservation
    }

    return c.JSON(http.StatusOK, response)
}
```

</TabItem>
</Tabs>

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`getTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`get_tenant_plan_info`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`getTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`GetTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`GetTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

### プラン一覧取得エンドポイント

#### プラン変更セレクトボックスの実装

ユーザーが選択可能なプランをセレクトボックスで表示します。  
このエンドポイントで取得したプラン一覧を使用してUIを構築します。

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`getPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`get_pricing_plans`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`getPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`GetPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`GetPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

### 税率一覧取得エンドポイント

#### 税率選択セレクトボックスの実装

プラン変更時に適用する税率をユーザーが選択できるよう、利用可能な税率一覧をセレクトボックスで表示します。  
このエンドポイントで取得した税率一覧を使用してUIを構築します。

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`getTaxRates`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`get_tax_rates`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`getTaxRates`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`GetTaxRates`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`GetTaxRates`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

### プラン変更実行エンドポイント

#### リクエストパラメータによる操作

同一エンドポイント `PUT /tenants/{tenantId}/plan` で以下の操作が可能です：

#### プラン変更予約
```json
{
  "nextPlanId": "plan-id",
  "taxRateId": "tax-rate-id",
  "usingNextPlanFrom": 1640995200
}
```

#### プラン解約
```json
{
  "nextPlanId": "",
  "usingNextPlanFrom": 1640995200
}
```

#### 予約取り消し
```json
{}
```

#### バックエンドでの処理ロジック

<Tabs>
<TabItem value="go" label="Go" default>

```go
func updateTenantPlan(c echo.Context) error {
    tenantId := c.Param("tenant_id")
    if tenantId == "" {
        return c.JSON(http.StatusBadRequest, echo.Map{"error": "tenant_id is required"})
    }

    var request UpdateTenantPlanRequest
    if err := c.Bind(&request); err != nil {
        return c.JSON(http.StatusBadRequest, echo.Map{"error": "Invalid request"})
    }
    nextPlanId := request.NextPlanId
    taxRateId := request.TaxRateId
    usingNextPlanFrom := request.UsingNextPlanFrom

    userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
    if !ok {
        c.Logger().Error("failed to get user info")
        return c.String(http.StatusInternalServerError, "internal server error")
    }

    // 管理者権限チェック
    if !hasBillingAccess(userInfo, tenantId) {
        return c.String(http.StatusForbidden, "Insufficient permissions")
    }

    // テナントプランを更新
    updateTenantPlanParam := authapi.UpdateTenantPlanParam{
        NextPlanId: (*authapi.Uuid)(&nextPlanId),
    }

    // 税率IDが指定されている場合のみ設定
    if taxRateId != nil && *taxRateId != "" {
        updateTenantPlanParam.NextPlanTaxRateId = (*authapi.Uuid)(taxRateId)
    }

    // using_next_plan_fromが指定されている場合のみ設定
    if usingNextPlanFrom != nil && *usingNextPlanFrom > 0 {
        usingNextPlanFromInt := int(*usingNextPlanFrom)
        updateTenantPlanParam.UsingNextPlanFrom = &usingNextPlanFromInt
    }

    resp, err := authClient.UpdateTenantPlanWithResponse(context.Background(), tenantId, updateTenantPlanParam)
    if err != nil {
        c.Logger().Errorf("failed to update tenant plan: %v", err)
        return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Failed to update tenant plan"})
    }

    // レスポンスのステータスコードをチェック
    if resp.StatusCode() != http.StatusOK {
        c.Logger().Errorf("tenant plan update failed with status %d: %s", resp.StatusCode(), string(resp.Body))
        return c.JSON(resp.StatusCode(), echo.Map{"error": "Failed to update tenant plan"})
    }

    return c.JSON(http.StatusOK, echo.Map{"message": "Tenant plan updated successfully"})
}
```

</TabItem>
</Tabs>

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`updateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`update_tenant_plan`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`updateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`UpdateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`UpdateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

