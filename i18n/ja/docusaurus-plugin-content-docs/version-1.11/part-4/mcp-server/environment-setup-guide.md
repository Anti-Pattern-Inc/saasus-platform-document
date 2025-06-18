---
title: "環境設定ガイド"
slug: "environment-setup-guide"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# 環境設定ガイド

## 概要
SaaSus API MCP Serverを使用する前に、適切な環境設定を行う必要があります。このガイドでは、SaaSus Platformの基本設定をSaaSus API MCP Serverを利用して作成する手順となります。

本手順は [チュートリアルを進める前に必要な設定](https://docs.saasus.io/ja/docs/tutorial/prepare-saas-platform) 、 [SaaS 利用者テナントの作成](https://docs.saasus.io/ja/docs/tutorial/authentication-preference#saas-%E5%88%A9%E7%94%A8%E8%80%85%E3%83%86%E3%83%8A%E3%83%B3%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90)、[SaaS 利用ユーザーの作成](https://docs.saasus.io/ja/docs/tutorial/authentication-preference#saas-%E5%88%A9%E7%94%A8%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90) 、[料金プラン設定の手順](https://docs.saasus.io/ja/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans) で必要な項目を作成しています。

また、登録内容はCSVでも登録可能です。本手順は分かりやすくするため以下の表現を利用しています。


## 前提条件
- SaaSus Platform のアカウント
- 適切なAPIキーとシークレットキー
- Node.js環境（v16以上）
- SaaSus API MCP Serverのセットアップ完了

## 環境作成
本手順は [チュートリアルを進める前に必要な設定](https://docs.saasus.io/ja/docs/tutorial/prepare-saas-platform) を元に行なっております。

#### MCP Serverへの依頼文言
```
SaaSus Platform に以下の情報を作成してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

[ユーザー属性]
属性名:username
表示名:ユーザー名
タイプ:文字列

[テナント属性]
属性名: memo
表示名: メモ
タイプ: 文字列

[役割]
役割名: user
表示名: 一般ユーザー
```

## テナント作成
本手順は [SaaS 利用者テナントの作成](https://docs.saasus.io/ja/docs/tutorial/authentication-preference#saas-%E5%88%A9%E7%94%A8%E8%80%85%E3%83%86%E3%83%8A%E3%83%B3%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90)を元に行なっております。

#### MCP Serverへの依頼文言

```
SaaSus Platform に以下のテナント情報を作成してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

名前: テナントサンプルその１
メモ: テナント属性で定義した属性情報となり、自由に設定可能となります
代表ユーザーの追加:新規でユーザーを作成
代表者メールアドレス: saasus-sample-tenant1@example.com
代表者のパスワード: Passw0rd!!

名前: サンプルアプリテナント２
メモ: テナント属性で定義した属性情報となり、自由に設定可能となります
代表ユーザーの追加:新規でユーザーを作成
代表者メールアドレス: saasus-sample-tenant2@example.com
代表者のパスワード: Passw0rd!!
```

## ユーザー作成
本手順は [SaaS 利用ユーザーの作成](https://docs.saasus.io/ja/docs/tutorial/authentication-preference#saas-%E5%88%A9%E7%94%A8%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90) を元に行なっております。

#### MCP Serverへの依頼文言

```
SaaSus Platform に以下のユーザー情報を作成してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

メールアドレス: user1-1@example.com
パスワード:Passw0rd!!
名前:ユーザー１−１
テナント:テナントサンプルその１

メールアドレス: user1-2@example.com
パスワード:Passw0rd!!
名前:ユーザー１−２
テナント:テナントサンプルその１

メールアドレス: user2-1@example.com
パスワード:Passw0rd!!
名前:ユーザー１−１
テナント:サンプルアプリテナント２

メールアドレス: user2-2@example.com
パスワード:Passw0rd!!
名前:ユーザー１−２
テナント:サンプルアプリテナント２
```

## 役割設定
本手順は [役割管理](https://docs.saasus.io/ja/docs/part-5/adding-role-to-user) を元に行なっております。

#### MCP Serverへの依頼文言

```
SaaSus Platform に以下の情報を作成してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。
役割 を複数設定する場合、「,」で区切って設定可能です。

テナント:テナントサンプルその１
メールアドレス: user1-1@example.com
役割:user

テナント:テナントサンプルその１
メールアドレス: user1-2@example.com
役割:user

テナント:サンプルアプリテナント２
メールアドレス: user2-1@example.com
役割:user

テナント:サンプルアプリテナント２
メールアドレス: user2-2@example.com
役割:user
```

## 料金プラン
本手順は [料金プラン設定の手順](https://docs.saasus.io/ja/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans) を元に行なっております。

### メーター
#### MCP Serverへの依頼文言
```
SaaSus Platform に以下のメーター単位を作成してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

メーター単位名:comment_count
メーター単位の表示名:コメント数
メーター単位の説明:コメント数
```

### 計測単位
#### MCP Serverへの依頼文言
```
SaaSus Platform に以下の計測単位を作成してください。
ユニットはfixed: 固定ユニット、usage: 使用量ユニット、tiered: 段階ユニット、tiered_usage: 段階的使用量ユニット を指定
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

ユニット: fixed
計測単位名:basic_base
計測単位の表示名:Basicプラン基本料金
計測単位の説明:Basicプラン基本料金
金額:500
繰り返しの期間:月
通貨:JPY

ユニット: usage
計測単位名:free_comment
計測単位の表示名:Freeプランのコメント数
計測単位の説明:Freeプランのコメント数
対象メーター名:comment_count
上限:10
通貨:JPY

ユニット: tiered_usage
計測単位名:basic_comment
計測単位の表示名: Basicプランコメント数
計測単位の説明: Basicプランコメント数
対象メーター名:comment_count
単位使用量あたりの金額:0
上限:100
通貨:JPY
上限:10
単位金額:0
固定金額:500
上限:50
単位金額:0
固定金額:1000
上限:-
単位金額:0
固定金額:1500
```

### 機能メニュー
#### MCP Serverへの依頼文言
```
SaaSus Platform に以下の機能メニューを作成してください。
計測単位は,区切りで複数設定可能です。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

機能メニュー名:basic_menu
機能メニューの表示名:Basicプラン基本メニュー
機能メニューの説明:Basicプラン基本メニュー
計測単位:basic_base, basic_comment

機能メニュー名: free_menu
機能メニューの表示名:Freeプラン基本メニュー
機能メニューの説明:Freeプラン基本メニュー
計測単位: free_comment
```

### 料金プラン
#### MCP Serverへの依頼文言
```
SaaSus Platform に以下のプランを作成してください。
機能メニューは,区切りで複数設定可能です。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

料金プラン名:basic_plan
料金プランの表示名:Basicプラン
料金プランの説明:Basicプラン
機能メニュー: basic_menu

料金プラン名:free_plan
料金プランの表示名:Freeプラン
料金プランの説明:Freeプラン
機能メニュー: free_menu
```

### 税率
#### MCP Serverへの依頼文言
```
SaaSus Platform に以下の税率を作成してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

税率名:tax-exclusive-10
表示名:消費税 10% 外税
説明:消費税 10% 外税
パーセント:10
国:日本
内税/外税:外税
```

## 削除
### ユーザー、テナントの削除
#### MCP Serverへの依頼文言
```
以下を削除してください
また、テナントの削除時にテナントの代表ユーザーが他のテナントのユーザーに割り当てられていな場合、
同時に代表ユーザー削除してください。
エラーが発生した場合、それ以降の作成は中止して、実行した内容とエラーの情報を出力してください。

[ユーザー属性]
属性名:username

[テナント属性]
属性名： memo

[役割]
役割名： user

[テナント]
名前: テナントサンプルその１
名前: サンプルアプリテナント２

[ユーザー]
メールアドレス: user1-1@example.com
メールアドレス: user1-2@example.com
メールアドレス: user2-1@example.com
メールアドレス: user2-2@example.com
```


## トラブルシューティング

### よくある問題

#### 属性作成時のエラー
- 属性名に使用できない文字が含まれていないか確認してください
- 同じ属性名が既に存在していないか確認してください

#### APIキーエラー
- SaaSus Platform のAPIキーが正しく設定されているか確認してください
- APIキーの権限が適切に設定されているか確認してください

#### SaaSus API MCP Server接続エラー
- SaaSus API MCP Serverが正しく起動しているか確認してください
- 環境変数が正しく設定されているか確認してください