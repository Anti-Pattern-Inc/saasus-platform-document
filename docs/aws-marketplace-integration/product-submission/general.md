---
title: "General"
slug: "general"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed May 24 2023 07:18:25 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jun 30 2023 03:38:36 GMT+0000 (Coordinated Universal Time)"
---
続いて、SaaS製品を公開するための情報を**英語**で入力していきます。

:::info
入力する情報が多いため、あらかじめ入力情報を用意しておくとスムーズに入力を進めることが出来ます。  
各入力項目の制限やAWS Marketplace上にどのように公開されるかは補足資料を用意していますので、ご確認ください。[公開例](https://docs.saasus.io/docs/supplementary-1-jp)、[入力項目の詳細](https://docs.saasus.io/docs/supplementary-2-jp)
:::

入力項目の概要について、以下に列挙しますので確認しながら入力を進めてください。

***

`SKU`：AWS Marketplace Management Portal上で製品を区別するための固有文字列  
`Software by`：ソフトウェアを作成した会社名  
`Title`：  
　　テストフェーズ時：**Test Product**  
　　プロダクションフェーズ時：お客様SaaSの製品名

:::caution
テストフェーズの場合は、Titleを「Test Product」と入力してください。本番用と区別するために必要です。
:::

`Product Description`：製品の説明  
`Short Product Description`：製品の概要  
`Product Logo URL`：製品のロゴ  
`Product Video Link`：製品の紹介動画など  
`EULA`：エンドユーザー使用許諾契約についての質問となります、AWS Marketplaceで定義してる規約を利用するか、独自で作成した規約を利用するかを選択します。  
独自で用意した規約を利用する場合`ELUA URL`を指定する必要があります。  
`Highlight 1-3`：製品ページに載せる特徴などを設定します  
`Product Category 1-3`：製品のカテゴリー情報、AWS Marketplaceでカテゴリー検索する際に利用されます  
`Search Keywords`：製品の検索キーワード情報、AWS Marketplaceで検索する際に利用されます  
`Resource Name 1-3`：製品に関する付加情報の名前を設定します。URLと合わせて入力  
`Resource URL 1-3`：製品に関する付加情報に関するURLを設定  
`AWS PrivateLink Enabled`： No (SaaSusでは提供していないため)  
`VPC Endpoint Service Name`： (SaaSusでは提供していないため未入力)  
`VPC Endpoint User-Friendly Service Name (DNS Override)`：(SaaSusでは提供していないため未入力)  
`Interface VPC Endpoint Private DNS Name (Split Horizon DNS)`：(SaaSusでは提供していないため未入力)  
`Support Offered`：製品に関して、サポートの有無になります。こちらは`Yes`を設定  
`Support Contacts`：製品に関して、サポートのコンタクト方法  
`Support Resources`：製品に関して、サポートの方法  
`Refund Policy`：返金ポリシーに関しての情報を入力します。ご用意いただいたページのリンク等になります  
`SaaS URL`：AWS Marketplace上で商品を購入した際にリダイレクトされるURLになります  
      テストフェーズ時：**指示書に表示されたURL**  
　  プロダクションフェーズ時：**指示書に表示されたURL**

:::caution
SaaS URLはAWS Marketplace連携機能で出力された指示書に従って入力してください。
:::

製品に関する入力が完了した後`Next`を押下して次に進みます。

![general-1](/img/aws-marketplace-integration/product-submission/general-1.png)

![general-2](/img/aws-marketplace-integration/product-submission/general-2.png)

![general-3](/img/aws-marketplace-integration/product-submission/general-3.png)
