---
title: "複雑な料金プラン設定の手順"
slug: "basic-charge-preference"
excerpt: ""
hidden: false
createdAt: "Tue May 07 2024 05:17:30 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 07 2024 05:17:30 GMT+0000 (Coordinated Universal Time)"
---

# 複雑な料金プラン設定の手順

## メーター単位

### 設定内容（コメント数）
| メーター単位名    | メーター単位の表示名   | メーター単位の説明 |
|:-----------|:-------------|:----------|
| comment_count | コメント数 | コメント数     |

![08](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-08.png)

## 計測単位

### 基本料金設定

計測単位：固定ユニット計測単位

| 計測単位名           | 計測単位の表示名          | 計測単位の説明           | 金額    | 繰り返しの期間 | 通貨  |
| :-------------- | :---------------- | :---------------- | :---- | :------ | :-- |
| individual_base   | Individualプラン基本料金   | Individualプラン基本料金   | 3000  | 月       | JPY |
| enterprise_base | Enterpriseプラン基本料金 | Enterpriseプラン基本料金 | 50000 | 月       | JPY |

![01](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-01.png)

![02](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-02.png)

### Individual プラン用の計測単位

計測単位：段階的使用量ユニット計測単位

| 計測単位名            | 計測単位の表示名          | 計測単位の説明           | 対象メーター名       | 通貨  | 範囲    | 上限 |
| :--------------- | :---------------- | :---------------- | :------------ | :-- | :---- | -: |
| individual_comment | Individualプランのコメント数 | Individualプランのコメント数 | コメント数 | JPY | 以下表参照 |  0 |

|  以上 |  以下 | 単位金額 | 固定金額 |
| --: | --: | ---: | ---: |
|   0 |  10 |    5 |    0 |
|  11 | 100 |    2 |    0 |
| 101 |     |    1 |    0 |

![03](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-03.png)

### Enterprise プラン用の計測単位

計測単位：使用量ユニット計測単位

| 計測単位名              | 計測単位の表示名            | 計測単位の説明             | 対象メーター名      | 単位使用量あたりの金額 | 上限 | 通貨  |
| :----------------- | :------------------ | :------------------ | :----------- | :---------- | :- | :-- |
| enterprise_comment | Enterpriseプランコメント数  | Enterpriseプランコメント数  | コメント数 | 0           | 0  | JPY |

![05](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-05.png)

## 機能メニュー

| 機能メニュー名         | 機能メニューの表示名          | 機能メニューの説明           | 計測単位                                                            |
| :-------------- | :------------------ | :------------------ | :-------------------------------------------------------------- |
| individual_menu   | Individualプラン基本メニュー   | Individualプラン基本メニュー   | Individualプラン基本料金<br />Individualプランのコメント数       |
| enterprise_menu | Enterpriseプラン基本メニュー | Enterpriseプラン基本メニュー | Enterpriseプラン基本料金<br />Enterpriseプランのコメント数 |

![06](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-06.png)

EnterpriseプランもIndividualプランと同様に設定を行なってください。

## 料金プラン

| 料金プラン名          | 料金プランの表示名     | 料金プランの説明      | 機能メニュー              |
| :-------------- | :------------ | :------------ | :------------------ |
| individual_plan   | Individualプラン   | Individualプラン   | Individualプラン基本メニュー   |
| enterprise_plan | Enterpriseプラン | Enterpriseプラン | Enterpriseプラン基本メニュー |

![07](/ja/img/part-6/usecase/about-rate-plans/basic-charge-preference-07.png)

EnterpriseプランもIndividualプランと同様に設定を行なってください。