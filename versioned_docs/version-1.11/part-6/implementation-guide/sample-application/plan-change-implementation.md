---
title: "Plan Change Implementation"
slug: "plan-change-implementation"
excerpt: "Implementation guide for tenant pricing plan change functionality using SaaSus Auth and Pricing APIs"
hidden: false
createdAt: "Sun Oct 06 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Overview

This page explains how to implement tenant pricing plan change functionality by combining SaaSus Auth API and Pricing API, using the plan change feature of the sample application as an example.

Below is a screenshot of the plan settings screen.

![](/img/part-6/implementation-guide/plan-change-implementation/image-01.png)

The plan change functionality provides the following features:

- Display current plan information
- Display plan change reservation information
- Execute plan changes

## Frontend Implementation

### Example Implementations

The following links point to repositories that include implementations of the frontend.

- **React**: [`PlanSettings.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/PlanSettings.tsx)

## Backend Implementation

### Endpoint Summary

<div className="table-scroll">
  <table className="nowrap-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Method &amp; Path</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Current Plan Information</td>
        <td><code>GET /tenants/&#123;tenantId&#125;/plan</code></td>
        <td>Retrieves the tenant's current plan information and history.</td>
      </tr>
      <tr>
        <td>Plan List</td>
        <td><code>GET /pricing_plans</code></td>
        <td>Retrieves a list of all pricing plans.</td>
      </tr>
      <tr>
        <td>Tax Rate List</td>
        <td><code>GET /tax_rates</code></td>
        <td>Retrieves a list of available tax rates.</td>
      </tr>
      <tr>
        <td>Plan Change Execution</td>
        <td><code>PUT /tenants/&#123;tenantId&#125;/plan</code></td>
        <td>Changes the tenant's pricing plan.</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
The following code samples assume Go for the backend.
:::

### Current Plan Information Retrieval Endpoint

#### Implementation Example (Retrieving Current Tax Rate Settings from History)

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

    // Check admin permissions
    if !hasBillingAccess(userInfo, tenantId) {
        return c.JSON(http.StatusForbidden, echo.Map{"error": "Insufficient permissions"})
    }

    // Retrieve tenant detail information
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

    // Get current tax rate settings (from the latest entry in plan history)
    var currentTaxRateId *string
    if len(tenantDetailResp.JSON200.PlanHistories) > 0 {
        latestPlanHistory := tenantDetailResp.JSON200.PlanHistories[len(tenantDetailResp.JSON200.PlanHistories)-1]
        if latestPlanHistory.TaxRateId != nil {
            taxRateIdStr := string(*latestPlanHistory.TaxRateId)
            currentTaxRateId = &taxRateIdStr
        }
    }

    // Build response
    response := echo.Map{
        "id":               tenantDetailResp.JSON200.Id,
        "name":             tenantDetailResp.JSON200.Name,
        "plan_id":          tenantDetailResp.JSON200.PlanId,
        "tax_rate_id":      currentTaxRateId,
        "plan_reservation": nil,
    }

    // Add reservation information if available
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

#### Example Implementations

The following links point to repositories that include implementations of this endpoint.
Search by function name to locate the relevant code.

- **Go (Echo)**: [`getTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`get_tenant_plan_info`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`getTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`GetTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`GetTenantPlanInfo`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

### Plan List Retrieval Endpoint

#### Plan Change Select Box Implementation

Display plans that users can select in a select box.  
Use the plan list retrieved from this endpoint to build the UI.

#### Example Implementations

The following links point to repositories that include implementations of this endpoint.
Search by function name to locate the relevant code.

- **Go (Echo)**: [`getPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`get_pricing_plans`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`getPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`GetPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`GetPricingPlans`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

### Tax Rate List Retrieval Endpoint

#### Tax Rate Selection Select Box Implementation

Display available tax rates in a select box so users can select the tax rate to apply when changing plans.  
Use the tax rate list retrieved from this endpoint to build the UI.

#### Example Implementations

The following links point to repositories that include implementations of this endpoint.
Search by function name to locate the relevant code.

- **Go (Echo)**: [`getTaxRates`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`get_tax_rates`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`getTaxRates`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`GetTaxRates`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`GetTaxRates`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

### Plan Change Execution Endpoint

#### Operations by Request Parameters

The following operations are possible with the same endpoint `PUT /tenants/{tenantId}/plan`:

#### Plan Change Reservation
```json
{
  "nextPlanId": "plan-id",
  "taxRateId": "tax-rate-id",
  "usingNextPlanFrom": 1640995200
}
```

#### Plan Cancellation
```json
{
  "nextPlanId": "",
  "usingNextPlanFrom": 1640995200
}
```

#### Reservation Cancellation
```json
{}
```

#### Backend Processing Logic

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

    // Check admin permissions
    if !hasBillingAccess(userInfo, tenantId) {
        return c.String(http.StatusForbidden, "Insufficient permissions")
    }

    // Update tenant plan
    updateTenantPlanParam := authapi.UpdateTenantPlanParam{
        NextPlanId: (*authapi.Uuid)(&nextPlanId),
    }

    // Set tax rate ID only if specified
    if taxRateId != nil && *taxRateId != "" {
        updateTenantPlanParam.NextPlanTaxRateId = (*authapi.Uuid)(taxRateId)
    }

    // Set using_next_plan_from only if specified
    if usingNextPlanFrom != nil && *usingNextPlanFrom > 0 {
        usingNextPlanFromInt := int(*usingNextPlanFrom)
        updateTenantPlanParam.UsingNextPlanFrom = &usingNextPlanFromInt
    }

    resp, err := authClient.UpdateTenantPlanWithResponse(context.Background(), tenantId, updateTenantPlanParam)
    if err != nil {
        c.Logger().Errorf("failed to update tenant plan: %v", err)
        return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Failed to update tenant plan"})
    }

    // Check response status code
    if resp.StatusCode() != http.StatusOK {
        c.Logger().Errorf("tenant plan update failed with status %d: %s", resp.StatusCode(), string(resp.Body))
        return c.JSON(resp.StatusCode(), echo.Map{"error": "Failed to update tenant plan"})
    }

    return c.JSON(http.StatusOK, echo.Map{"message": "Tenant plan updated successfully"})
}
```

</TabItem>
</Tabs>

#### Example Implementations

The following links point to repositories that include implementations of this endpoint.
Search by function name to locate the relevant code.

- **Go (Echo)**: [`updateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/billing.go)
- **Python (FastAPI)**: [`update_tenant_plan`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/billing_router.py)
- **Java (Spring)**: [`updateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/BillingController.java)
- **C# (.NET 8)**: [`UpdateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Controllers/BillingController.cs)
- **C# (.NET Framework 4.8)**: [`UpdateTenantPlan`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/BillingController.cs)

