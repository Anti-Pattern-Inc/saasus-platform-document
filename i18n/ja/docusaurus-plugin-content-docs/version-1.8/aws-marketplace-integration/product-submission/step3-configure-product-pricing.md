---
title: "Step3 : Configure product pricing"
slug: "step3-configure-product-pricing"
excerpt: ""
hidden: true
createdAt: "Mon Feb 05 2024 18:29:06 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Feb 08 2024 04:59:45 GMT+0000 (Coordinated Universal Time)"
---
続いて、AWS Marketplace上で販売する料金モデルとその種類を入力していきます。

まず、料金モデルは`Contract-based pricing`を選択します。

:::caution

他の料金モデルには対応していないため、必ず`Contract-based pricing`を選択してください。
:::

![](/ja/img/aws-marketplace-integration/product-submission/step3-configure-product-pricing/step3-configure-product-pricing-1.png)


次にSaaS製品の利用単位、契約の種類を入力していきます。

`Dimension unit type`は`Units`を選択します。

契約の種類はAWS Marketplace連携機能で出力された指示書に従って、`Contract dimensions` に対して指示書に合わせて１〜Xまで入力してください。

`API identifier`：API上で取り扱う料金プラン識別子  
`Display name`：料金プランの表示名  
`Description`：料金プランの説明

:::caution

必ず指示書に従って入力してください。

[AWS Marketplace連携機能ページ](https://settings.console.saasus.io/integrations/aws-marketplace)から出品手続きを開始していただき、`ステップ1-4:SaaS製品情報の登録`まで進めていだたくと指示書を確認できるようになります。

![](/ja/img/aws-marketplace-integration/product-submission/step3-configure-product-pricing/step3-configure-product-pricing-2.png)
:::

![](/ja/img/aws-marketplace-integration/product-submission/step3-configure-product-pricing/step3-configure-product-pricing-3.png)


入力が完了した後`Next`を押下して次に進みます。
