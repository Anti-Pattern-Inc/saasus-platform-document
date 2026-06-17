---
title: "生成したAWSリソースのコピー手順"
slug: "supplementary-3"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 17 2026 03:39:00 GMT+0000 (Coordinated Universal Time)"
---

<!-- aws-mp-freeze-notice -->
:::danger AWS Marketplace 連携機能は現在ご利用いただけません

2026年6月より AWS Marketplace のインテグレーション仕様が変更されました。本機能（AWS Marketplace への出品・掲載）は新しい仕様に未対応のため、現在この手順では出品（掲載）を完了できません。新規のご利用を停止しております。

仕様対応の目処が立ち次第、提供再開の時期について改めてご案内いたします。

最新の出品プロセスや掲載手順については、新しいサービス解説サイト（[https://docs.deshima.cloud](https://docs.deshima.cloud)）をご参照ください。

:::

1. AWS マネジメントコンソールへログインします。
2. こちらの<a href="https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks?filteringText=&filteringStatus=active&viewNested=true" target="_blank">リンク</a> へアクセスしてください。
3. 以下のページが表示されますので、スタック「AWS-Marketplace-seller-Resource」を選択してください。
   1. ![supplementary-3-1](/ja/img/part-4/aws-marketplace-integration/supplementary/supplementary-3-1.png)
4. 画面右側に表示されるタブのうち、「出力」を選んでください。
5. エクスポート名に表示されている名前を確認して、その値をコピーしてください。
   1. ![supplementary-3-2](/ja/img/part-4/aws-marketplace-integration/supplementary/supplementary-3-2.png)
6. コピーしてきた値のエクスポート名と同じフォーム項目にペーストしてください。
   1. ![supplementary-3-3](/ja/img/part-4/aws-marketplace-integration/supplementary/supplementary-3-3.png)
