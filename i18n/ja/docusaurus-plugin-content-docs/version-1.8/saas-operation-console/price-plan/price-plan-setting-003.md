---
title: "テナントの料金プラン設定を解除する"
slug: "price-plan-setting-003"
excerpt: ""
hidden: false
createdAt: "Wed Dec 28 2022 01:37:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## Stripe連携時の挙動について

料金プランを解除すると、それに対応するStripeのサブスクリプションがキャンセルされますが  
その際に返金は発生いたしませんので、ご承知おきください。

## 当日に料金プランを解除したい場合

1. SaaS 運用コンソールの料金プラン設定に移動します。
2. 料金プランを解除したいテナントの「解除」をクリックします。
3. 反映日には、当日の日付を設定します。
4. 「解除」をクリックします。
5. 確認メッセージが表示されるので、内容を確認して「解除」をクリックします。

**※反映日を当日にした場合、操作日時の約5分後から料金プランが解除されます。**  
_例,  2022年12月28日午前9時0分に料金プランの解除設定→2022/12/28 09:05:00に解除_

![](/ja/img/saas-operation-console/price-plan/price-plan-setting-003/plan-setting.png)
*解除設定に成功した場合は、画像の赤枠内のように、(契約中のプラン解除)というテキストが表示されます。*


***

## 翌日以降の日付で、料金プランが解除されるようにしたい場合

1. SaaS 運用コンソールの料金プラン設定に移動します。
2. 料金プランを解除したいテナントの「解除」をクリックします。
3. 反映日には、翌日以降の日付を設定します。
4. 「解除」をクリックします。
5. 確認メッセージが表示されるので、内容を確認して「解除」をクリックします。

**※反映日を翌日以降にした場合、指定した日付の午前0時に料金プランの設定が解除されます。**  
_例,  2023年2月1日の日付を指定→2023/02/01 00:00:00の解除予定を作成_