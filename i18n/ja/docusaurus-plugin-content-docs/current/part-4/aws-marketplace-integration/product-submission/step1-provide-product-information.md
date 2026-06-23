---
title: "Step1 : Provide product information"
slug: "step1-provide-product-information"
excerpt: ""
hidden: true
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jun 23 2026 03:39:00 GMT+0000 (Coordinated Universal Time)"
---

<!-- aws-mp-freeze-notice -->
:::danger AWS Marketplace 連携機能は現在ご利用いただけません

2026年6月より AWS Marketplace のインテグレーション仕様が変更されました。本機能（AWS Marketplace への出品・掲載）は新しい仕様に未対応のため、現在この手順では出品（掲載）を完了できません。新規のご利用を停止しております。

仕様対応の目処が立ち次第、提供再開の時期について改めてご案内いたします。

最新の出品プロセスや掲載手順については、新しいサービス解説サイト（[https://docs.deshima.cloud](https://docs.deshima.cloud)）をご参照ください。

:::

続いて、SaaS製品を公開するための情報を**英語**で入力していきます。

:::info

入力する情報が多いため、あらかじめ入力情報を用意しておくとスムーズに入力を進めることが出来ます。  
各入力項目の制限やAWS Marketplace上にどのように公開されるかは補足資料を用意していますので、ご確認ください。[公開例](/docs/part-4/aws-marketplace-integration/supplementary/supplementary-1)、[入力項目の詳細](/docs/part-4/aws-marketplace-integration/supplementary/supplementary-2)
:::

入力項目の概要について、以下に列挙しますので確認しながら入力を進めてください。

`Product title`：  
  - テストフェーズ時：**Test Product(お客様SaaSの製品名)**  
  - プロダクションフェーズ時：お客様SaaSの製品名

:::caution

テストフェーズの場合は、Titleを「Test Product(お客様SaaSの製品名)」と入力してください。本番用と区別するために必要です。
:::

`SKU`：AWS Marketplace Management Portal上で製品を区別するための固有文字列  
`Product logo S3 URL`：製品のロゴURL  
`Short description`：製品の概要  
`Long description`：製品の説明  
`Product video URL`：製品の紹介動画などのURL  
`Highlight 1-3`：製品ページに載せる機能や特徴など  
`Support details`：製品に関するサポートについて  
`Product categories`：製品のカテゴリー情報、AWS Marketplaceでカテゴリー検索する際に利用されます  
`Keywords for search results`：製品の検索キーワード情報、AWS Marketplaceで検索する際に利用されます

製品に関する入力が完了した後`Next`を押下して次に進みます。

![](/ja/img/part-4/aws-marketplace-integration/product-submission/step1-provide-product-information/step1-provide-product-information-1.png)

![](/ja/img/part-4/aws-marketplace-integration/product-submission/step1-provide-product-information/step1-provide-product-information-2.png)

![](/ja/img/part-4/aws-marketplace-integration/product-submission/step1-provide-product-information/step1-provide-product-information-3.png)