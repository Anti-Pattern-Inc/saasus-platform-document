---
title: "SaaSus 開発コンソール を使った請求との紐付け"
slug: "saasus-development-console-used-billing-with-association"
excerpt: ""
hidden: false
createdAt: "Fri Apr 26 2024 15:15:48 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Apr 26 2024 15:15:48 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus 開発コンソール を使った請求との紐付け

請求の設定を行います。

これらのテナントごとの料金プランや使用量の情報をベースに、自前で請求処理を実装することももちろん可能です。

SaaSus Platformを利用して簡単にSaaSを構築、運用を行うのと同様に、便利なSaaSを積極的に使うことにより、構築、運用の労力をSaaSにオフロードすることができます。
そのため、今回は課金SaaSの一つであるStripeと連携をしてみます。

　**※Stripe連携を行わない場合は、こちらの作業は未実施で構いません。**

サイドメニューから、「外部連携」をクリックします。

Stripeのシークレットキーを入力し、保存ボタンをクリックしてください。

![01](/ja/img/saas-development-console/saasus-development-console-used-billing-with-association-01.png)

これでStripeとの連携が完了しました。
上記で作成した料金プランがStripeに連携されているはずです。

料金プランに関連する操作を行うと、自動的にStripeに連携されるようになります。
