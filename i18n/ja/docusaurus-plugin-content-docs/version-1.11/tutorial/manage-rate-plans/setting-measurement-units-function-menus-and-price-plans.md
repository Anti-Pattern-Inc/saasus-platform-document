---
title: "料金プラン設定の手順"
slug: "setting-measurement-units-function-menus-and-price-plans"
excerpt: ""
hidden: false
createdAt: "Wed Jan 18 2023 09:36:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Dec 11 2023 05:50:46 GMT+0000 (Coordinated Universal Time)"
---
# 料金プラン設定の手順

このページでは、SaaSus 開発コンソールを使って以下の要素を順番に設定していく方法を説明します。

- メーター単位
- 計測単位
- 機能メニュー
- 料金プラン

---

## メーター単位の作成

まずは、アプリケーション内で利用量を計測するための「メーター単位」を作成します。

### 設定内容（コメント数）

| メーター単位名    | メーター単位の表示名   | メーター単位の説明 |
|:-----------|:-------------|:----------|
| comment_count | コメント数 | コメント数     |

![07](/ja/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-07.png)

---

## 計測単位の作成

### 基本料金（Basicプラン）

「Basicプラン」の月額基本料金を固定で設定するための計測単位です。

計測単位：固定ユニット計測単位

| 計測単位名           | 計測単位の表示名          | 計測単位の説明           | 金額    | 繰り返しの期間 | 通貨  |
| :-------------- | :---------------- | :---------------- | :---- | :------ | :-- |
| basic_base      | Basicプラン基本料金      | Basicプラン基本料金      | 500   | 月       | JPY |

![01](/ja/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-01.png)

---

### Freeプラン用の計測単位

コメント数が10件まで無料で利用できる設定です。

計測単位：使用量ユニット計測単位

| 計測単位名        | 計測単位の表示名     | 計測単位の説明      | 対象メーター名       | 単位使用量あたりの金額 | 上限 | 通貨  |
| :----------- | :----------- | :----------- | :------------ | :---------- | :- | :-- |
| free_comment | Freeプランコメント数 | Freeプランコメント数 | コメント数 | 0           | 10 | JPY |

![02](/ja/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-02.png)

---

### Basicプラン用の計測単位（段階課金）

コメント数に応じて金額が変動する「段階ユニット」の設定です。

計測単位：段階ユニット計測単位

| 計測単位名         | 計測単位の表示名       | 計測単位の説明        | 対象メーター名       | 通貨  | 範囲    |  上限 |
| :------------ | :------------- | :------------- | :------------ | :-- | :---- | --: |
| basic_comment | Basicプランのコメント数 | Basicプランのコメント数 | コメント数 | JPY | 以下表参照 | 100 |

**段階別の料金設定：**

| 以上 | 以下 | 単位金額 | 固定金額 |
| -: | -: | ---: | ---: |
|  0 | 10 |    0 |  500 |
| 11 | 50 |    0 | 1000 |
| 51 |    |    0 | 1500 |

![03](/ja/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-03.png)

---

## 機能メニューの作成

各プランに対して提供する機能を設定します。

| 機能メニュー名         | 機能メニューの表示名          | 機能メニューの説明           | 計測単位                                                            |
| :-------------- | :------------------ | :------------------ | :-------------------------------------------------------------- |
| free_menu       | Freeプラン基本メニュー       | Freeプラン基本メニュー       | Freeプランコメント数                                    |
| basic_menu      | Basicプラン基本メニュー      | Basicプラン基本メニュー      | Basicプラン基本料金<br />Basicプランのコメント数                 |

![05](/ja/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-05.png)

BasicプランもFreeプランと同様に設定を行なってください。

---

## 料金プランの作成

最後に、機能メニューを料金プランとして定義します。

| 料金プラン名          | 料金プランの表示名     | 料金プランの説明      | 機能メニュー              |
| :-------------- | :------------ | :------------ | :------------------ |
| free_plan       | Freeプラン       | Freeプラン       | Freeプラン基本メニュー       |
| basic_plan      | Basicプラン      | Basicプラン      | Basicプラン基本メニュー      |

![06](/ja/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/setting-measurement-units-function-menus-and-price-plans-06.png)

BasicプランもFreeプランと同様に設定を行なってください。