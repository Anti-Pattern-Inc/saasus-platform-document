---
title: "利用量計測メーター設定"
slug: "usage-metering"
excerpt: ""
hidden: false
createdAt: "Mon Mar 11 2024 13:45:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 11 2024 13:45:00 GMT+0000 (Coordinated Universal Time)"
---
利用量計測単位設定は各計測単位に適用する名称や集計方法を設定します。


## 利用量計測メーター設定

1. **SaaS 開発コンソールよりから`メーター単位設定`を選択**

![usage-metering-ja-4](/ja/img/saas-development-console/usage-metering-ja-4.png)

1. **`メーター単位の作成`をクリック**

![usage-metering-ja-1](/ja/img/saas-development-console/usage-metering-ja-1.png)

2. `メーター単位の作成`で利用量計測メーターを設定  
    メーター単位名　　　　　　：プログラムで識別するための定義を決めます。重複した名前は作成できません。  
    メーター単位の表示名　　　：メーターの名前を決めます。  
    メーター単位の説明　　　　：人がわかりやすいメーターの説明を設定します。  
    使用量の集計　　　　　　　：sum（期間中の使用量の値の合計)／max（期間中の最大の使用量の値）の何れかを設定します。  

    上記内容を設定し保存ボタンをクリックします。

## 計測単位へ利用量計測メーターを設定
計測単位を作成する際に、利用量計測メーターを設定することができます。
既に登録されている利用量計測メータが選択可能です。

![usage-metering-ja-2](/ja/img/saas-development-console/usage-metering-ja-2.png)


## 利用量計測メーターの更新、削除
計測単位に設定されている利用量計測メーターは削除することができません。  
メーター単位の表示名、メーター単位の説明のみ更新することができます。

![usage-metering-ja-1](/ja/img/saas-development-console/usage-metering-ja-1.png)



