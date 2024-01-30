---
title: "Pricing"
slug: "pricing"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed May 24 2023 07:18:46 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jun 30 2023 03:38:36 GMT+0000 (Coordinated Universal Time)"
---
続いて、SaaS製品の販売するターゲット、販売価格に関して入力していきます。

販売するターゲットについてはお客様の事業内容に応じて、入力を進めてください。

![pricing-1](/img/aws-marketplace-integration/product-submission/pricing-1.png)

`Target Customers`：プロダクトを販売する地域を設定します。`Worldwide`、`Worldwide with some countries excluded`、`Only some countries`を設定し、対象外、対象となる国を個別に設定できます  
`Set Product Tax Code`：製品税コード (PTC) を選択して、この製品に対する米国売上税の徴収を有効にできます  
`Set Target Market`：AWS GovCloud (米国) の顧客のみに独占的に提供できるようにする設定となります

![pricing-2](/img/aws-marketplace-integration/product-submission/pricing-2.png)

## 価格設定(Set Pricing)

:::caution
Set Pricingでは、AWS Marketplace連携機能で出力された指示書に従って入力してください。
:::

`Contract Duration`：製品の契約期間となります。  
`Choose the contract type you want to offer`：提供する契約を選択します。  
　　指示書に従い**Buyer can choose one tier from multiple tiers offered**を選択してください。

![pricing-3](/img/aws-marketplace-integration/product-submission/pricing-3.png)

## 価格表 (Complete fields to customize your pricing chart)

:::caution
価格表も、AWS Marketplace連携機能で出力された指示書に従って入力してください。
:::

`Set the usage unit category for this product`：この製品の使用単位を設定します。  
　　指示書に従い**Units - Units**を選択します。  
`Dimension`：契約の価格帯を設定します。指示書に合わせて１〜Xまで入力してください。  
　`Dimension name`：料金プランの表示名  
　`Description of Dimension`：料金プランの説明  
　`API name for Dimension`：API上で取り扱う料金プラン名  
　`Price/ month`：月額  
　`Price/1 year`：年額

`Allow-list test accounts`：連携確認時のテストに使うAWS アカウント IDを設定します。対象のアカウントのみが商品を参照し購入することが可能となります。

:::info
テスト時に一度購入するとすぐには契約解除できません。テストアカウントの追加をAMMP上で申請できますが反映までに3~5営業日かかるため、新規購入時の再テストに備えてに最低5つ以上はAWSアカウントを登録しておくことをお勧めします。
:::

価格に関する内容を入力が完了後`Next`を押下して次に進みます。

![pricing-4](/img/aws-marketplace-integration/product-submission/pricing-4.png)

![pricing-5](/img/aws-marketplace-integration/product-submission/pricing-5.png)
