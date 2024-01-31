---
title: "計測単位・機能メニュー・料金プランの設定"
slug: "setting-measurement-units-function-menus-and-price-plans"
excerpt: ""
hidden: false
createdAt: "Wed Jan 18 2023 09:36:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Dec 11 2023 05:50:46 GMT+0000 (Coordinated Universal Time)"
---
# 基本料金設定

計測単位：固定ユニット計測単位

| 計測単位名           | 計測単位の表示名          | 計測単位の説明           | 金額    | 繰り返しの期間 | 通貨  |
| :-------------- | :---------------- | :---------------- | :---- | :------ | :-- |
| basic_base      | Basicプラン基本料金      | Basicプラン基本料金      | 500   | 月       | JPY |
| advanced_base   | Advancedプラン基本料金   | Advancedプラン基本料金   | 3000  | 月       | JPY |
| enterprise_base | Enterpriseプラン基本料金 | Enterpriseプラン基本料金 | 50000 | 月       | JPY |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/02_basic_base.png "02_basic_base.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/02_advanced_base.png "02_advanced_base.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/02_enterprise_base.png "02_ enterprise_base.png")

# Free プラン

計測単位：使用量ユニット計測単位

| 計測単位名        | 計測単位の表示名     | 計測単位の説明      | 対象メーター名       | 単位使用量あたりの金額 | 上限 | 通貨  |
| :----------- | :----------- | :----------- | :------------ | :---------- | :- | :-- |
| free_user    | Freeプランユーザー数 | Freeプランユーザー数 | user_count    | 0           | 2  | JPY |
| free_comment | Freeプランコメント数 | Freeプランコメント数 | comment_count | 0           | 10 | JPY |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_free_user.png "03_free_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_free_comment.png "03_free_comment.png")

# Basic プラン

計測単位：使用量ユニット計測単位

| 計測単位名      | 計測単位の表示名      | 計測単位の説明       | 対象メーター名    | 単位使用量あたりの金額 | 上限 | 通貨  |
| :--------- | :------------ | :------------ | :--------- | :---------- | :- | :-- |
| basic_user | Basicプランユーザー数 | Basicプランユーザー数 | user_count | 0           | 5  | JPY |

計測単位：段階ユニット計測単位

| 計測単位名         | 計測単位の表示名       | 計測単位の説明        | 対象メーター名       | 通貨  | 範囲    |  上限 |
| :------------ | :------------- | :------------- | :------------ | :-- | :---- | --: |
| basic_comment | Basicプランのコメント数 | Basicプランのコメント数 | comment_count | JPY | 以下表参照 | 100 |

範囲

| 以上 | 以下 | 単位金額 | 固定金額 |
| -: | -: | ---: | ---: |
|  0 | 10 |    0 |  500 |
| 11 | 50 |    0 | 1000 |
| 51 |    |    0 | 1500 |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/04_basic_user.png "04_basic_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/image.png)

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/image.png)

# Advenced プラン

計測単位：使用量ユニット計測単位

| 計測単位名         | 計測単位の表示名          | 計測単位の説明           | 対象メーター名    | 単位使用量あたりの金額 | 上限 | 通貨  |
| :------------ | :---------------- | :---------------- | :--------- | :---------- | :- | :-- |
| advanced_user | Advancedプランのユーザー数 | Advancedプランのユーザー数 | user_count | 0           | 10 | JPY |

計測単位：段階的使用量ユニット計測単位

| 計測単位名            | 計測単位の表示名          | 計測単位の説明           | 対象メーター名       | 通貨  | 範囲    | 上限 |
| :--------------- | :---------------- | :---------------- | :------------ | :-- | :---- | -: |
| advanced_comment | Advancedプランのコメント数 | Advancedプランのコメント数 | comment_count | JPY | 以下表参照 |  0 |

|  以上 |  以下 | 単位金額 | 固定金額 |
| --: | --: | ---: | ---: |
|   0 |  10 |    5 |    0 |
|  11 | 100 |    2 |    0 |
| 101 |     |    1 |    0 |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/05_advanced_user.png "05_advanced_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/05_advanced_comment.png "05_advanced_comment.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/05_advanced_comment.png "05_advanced_comment.png")

# Enterprise プラン

計測単位：使用量ユニット計測単位

| 計測単位名              | 計測単位の表示名            | 計測単位の説明             | 対象メーター名      | 単位使用量あたりの金額 | 上限 | 通貨  |
| :----------------- | :------------------ | :------------------ | :----------- | :---------- | :- | :-- |
| enterprise_user    | Enterpriseプランのユーザー数 | Enterpriseプランのユーザー数 | user_count   | 0           | 0  | JPY |
| enterprise_comment | Enterpriseプランコメント数  | Enterpriseプランコメント数  | user_comment | 0           | 0  | JPY |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/06_enterprise_user.png "06_enterprise_user.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/06_enterprise_comment.png "06_enterprise_comment.png")

# 機能メニュー

| 機能メニュー名         | 機能メニューの表示名          | 機能メニューの説明           | 計測単位                                                            |
| :-------------- | :------------------ | :------------------ | :-------------------------------------------------------------- |
| free_menu       | Freeプラン基本メニュー       | Freeプラン基本メニュー       | Freeプランユーザー数<br />Freeプランコメント数                                    |
| basic_menu      | Basicプラン基本メニュー      | Basicプラン基本メニュー      | Basicプラン基本料金<br />Basicプランユーザー数<br />Basicプランのコメント数                 |
| advanced_menu   | Advancedプラン基本メニュー   | Advancedプラン基本メニュー   | Advancedプラン基本料金<br />Advancedプランのユーザー数<br />Advancedプランのコメント数       |
| enterprise_menu | Enterpriseプラン基本メニュー | Enterpriseプラン基本メニュー | Enterpriseプラン基本料金<br />Enterpriseプランのユーザー数<br />Enterpriseプランのコメント数 |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_free_menu.png "07_free_menu.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_basic_menu.png "07_basic_menu.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_advanced_menu.png "07_advanced_menu.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/07_enterprise_menu.png "07_enterprise_menu.png")

# 料金プラン

| 料金プラン名          | 料金プランの表示名     | 料金プランの説明      | 機能メニュー              |
| :-------------- | :------------ | :------------ | :------------------ |
| free_plan       | Freeプラン       | Freeプラン       | Freeプラン基本メニュー       |
| basic_plan      | Basicプラン      | Basicプラン      | Basicプラン基本メニュー      |
| advanced_plan   | Advancedプラン   | Advancedプラン   | Advancedプラン基本メニュー   |
| enterprise_plan | Enterpriseプラン | Enterpriseプラン | Enterpriseプラン基本メニュー |

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_free_plan.png "03_free_plan.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_basic_plan.png "03_basic_plan.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/03_Advanced_plan.png "03_Advanced_plan.png")

![](/img/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans/08_Enterprise_plan.png "08_Enterprise_plan.png")
