---
title: "請求関連のFAQ"
slug: "billing"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

**Q. メータ単位の「使用量の集計」設定（sum/max）は、APIで取得できるメータリング情報に影響しますか？**  
A. はい、影響します。

Stripe連携を有効にしている場合にUI上で設定できる「使用量の集計」方法（sumまたはmax）は、Stripeへの請求額を計算するだけでなく、メータリング関連APIで取得できるcountの値の計算方法も決定します。

なお、Stripe連携を有効にしていない場合、この設定項目はUI上に表示されませんが、集計方法はデフォルトでsum（合計）となります。

具体的には、以下のAPIで返されるcountの値が集計設定に応じて変わります。

- [指定した日付のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate)  
- [当日のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday)  
- [当月のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth)  
- [指定月のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth)  
- [指定日の全メータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate)  
- [指定月の全メータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth)  

**集計方法によるcountの値の違い**

**sum（合計）を設定した場合:**  
APIは、指定された期間内（日次または月次）に記録されたメータリングの値を合計したcountを返します。

**max（最大）を設定した場合:**  
APIは、指定された期間内（日次または月次）に記録されたメータリングの値の最大値をcountとして返します。
