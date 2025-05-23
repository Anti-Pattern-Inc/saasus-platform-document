---
title: "Stripeとの連携設定"
slug: "stripe-integration"
description: "Stripeと連携し、課金処理や請求情報の管理を外部サービスに委ねる方法を説明します。"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> Stripeと連携し、課金処理や請求情報の管理を外部サービスに委ねる方法を説明します。

このページでは、SaaS開発コンソールを用いて Stripe との外部連携を行い、課金処理や請求書発行を効率化する方法について説明します。  
SaaSus Platform で作成した料金プランや税率設定の情報は、Stripe 側にも連携され、請求処理に活用されます。

:::info
Stripeを使用しない場合、本設定は不要です。
:::

## Stripeシークレットキーの登録

Stripe連携を有効にするには、Stripeの**シークレットキー**を SaaSus Platform に登録します。

1. SaaS開発コンソールのサイドメニューから「外部連携」を選択  
2. Stripeの**シークレットキー**を入力  
3. 「保存」をクリック  

![stripe-secret](/ja/img/part-4/pricing-and-billing/stripe-integration/saasus-development-console-used-billing-with-association-01.png)

これにより、料金プラン作成や税率設定の際に自動的に Stripe 側へ情報が送信されるようになります。

## Stripeに連携される税率情報

SaaS開発コンソールで設定した税率は、以下のように Stripe 側へ反映されます。

| Stripe | SaaS 開発コンソール | 説明                     |
| ------ | ------------ | ---------------------- |
| -      | 税率名          | プログラムで識別するための定義        |
| タイプ    | 表示名          | 税率の名前                  |
| 説明     | 説明           | 率の説明                   |
| 率      | パーセント        | 徴収する税率を示す数値            |
| 地域     | 国            | 税率が適用される国              |
| 率      | 内税／外税        | 設定した税率が金額に含まれるか、含まれないか |

![stripe-tax-setting](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-10.png)

## Stripe請求書の表示例
 
設定した税率に応じて、**内税**・**外税**・**未設定** それぞれのStripeで発行した請求書の例は以下の通りです。

### 内税請求書

**インボイス画面**  
![invoice-tax-included](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-11.png)
**請求書 PDF**  
![invoice-tax-included-pdf](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-12.png)

### 外税請求書

**インボイス画面**  
![invoice-tax-excluded](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-13.png)
**請求書 PDF**  
![invoice-tax-excluded-pdf](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-14.png)

### 税率未設定の請求書

**インボイス画面**  
![invoice-no-tax](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-15.png)
**請求書 PDF**  
![invoice-no-tax-pdf](/ja/img/part-4/pricing-and-billing/stripe-integration/tax-rates-16.png)
