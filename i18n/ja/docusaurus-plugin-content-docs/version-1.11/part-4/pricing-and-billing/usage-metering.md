---
title: "メーター単位設定"
slug: "usage-metering"
excerpt: ""
hidden: false
createdAt: "Mon Mar 11 2024 13:45:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 11 2024 13:45:00 GMT+0000 (Coordinated Universal Time)"
---
計測単位に設定するメーター単位を定義します。


## メーター単位設定

1. **SaaS 開発コンソールから`メーター単位設定`を選択**

![usage-metering-1](/ja/img/part-4/pricing-and-billing/usage-matering/usage-metering-1.png)

1. **`メーター単位の作成`をクリック**

![usage-metering-2](/ja/img/part-4/pricing-and-billing/usage-matering/usage-metering-2.png)

2. `メーター単位の作成`でメーター単位を設定  

| 項目名              | 説明    |
|-----------------  |----------------------- |
| メーター単位名   | プログラムで識別するための定義を決めます。重複した名前は作成できません。 |
| メーター単位の表示名　 | メーターの名前を決めます。 |
| メーター単位の説明       | 人がわかりやすいメーターの説明を設定します。 |
| 使用量の集計        | sum（期間中の使用量の値の合計)／max（期間中の最大の使用量の値）の何れかを設定します。 |

:::info
この「使用量の集計」項目は、**Stripe連携を有効にしている場合のみ表示**されます。

ここでは、メーター単位の使用量をどのように集計して課金に利用するかを設定します。  
`sum`（合計）や `max`（最大）などの方式を、**メーター単位ごとに個別に指定可能**です。

この設定は、Stripe連携時の課金条件として利用されます。

なお、SaaSus単体での利用時にはこの設定は不要なため、UI上には表示されません。
:::

上記内容を設定し保存ボタンをクリックします。

## 計測単位へメーター単位を設定
計測単位を作成する際に、メーター単位を設定することができます。
既に登録されているメーター単位が選択可能です。

![usage-metering-3](/ja/img/part-4/pricing-and-billing/usage-matering/usage-metering-3.png)


## メーター単位の更新、削除
計測単位に設定されているメーター単位は削除することができません。  
メーター単位の表示名、メーター単位の説明のみ更新することができます。

![usage-metering-4](/ja/img/part-4/pricing-and-billing/usage-matering/usage-metering-4.png)



