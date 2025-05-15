---
title: "税率設定"
slug: "tax-rate-settings"
description: "各テナントに適用する税率を設定する方法を説明します。"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> 各テナントに適用する税率を設定する方法を説明します。

税率設定では、**テナントごとに料金プランに適用される税率（消費税など）の種類や比率を定義**します。  
SaaS運用コンソールで**テナントに料金プランを設定する際、あわせて税率を指定**できます。

:::info
請求書に表示する消費税について
2023年10月1日からインボイス制度が始まります。この「インボイス」とは、事業者間でやり取りされる消費税額等が記載された請求書や領収書のことで、事業者が消費税の納税額を計算する際に必要となるものです。  
<a href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm" target="_blank">https\://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm</a>
:::

## 税率設定

1. **SaaS 開発コンソールから`料金プランｰ>税率設定`を選択**

![tax-rates-1](/ja/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-1.png)

2. **`税率の作成`をクリック**

![tax-rates-2](/ja/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-2.png)

3. `税率の作成`で税率を設定

| 項目         | 説明                                                         |
|--------------|-------------------------------------------------------------|
| 税率名        | プログラムで識別するための定義を決めます。重複した名前は作成できません  |
| 表示名        | 税率の名称（Stripe連携時は請求書に表示されます）                   |
| 説明         | 人がわかりやすい税率の説明を設定                                  |
| パーセント    | 徴収する税率を示す数値                                          |
| 国           | 税率が適用される国を設定します                                   |
| 内税／外税    | 設定した税率が金額に含まれるか、含まれないかを設定します              |

   :::caution
   税率は一度作成すると変更・削除ができませんのでご注意ください。
   :::

    上記内容を設定し作成ボタンをクリックします。

![tax-rates-3](/ja/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-3.png)

![tax-rates-4](/ja/img/part-4/pricing-and-billing/tax-rate-settings/tax-rates-4.png)