---
title: "利用準備"
slug: "getting_started"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

## 利用準備

### 1. アカウント作成とログイン

SaaSus Platform を利用するには、最初にアカウント登録を行います。  
以下はアカウント作成からログインまでの手順です。

#### アカウントの新規作成

1. [https://console.saasus.io](https://console.saasus.io) にアクセスします。
2. 「アカウントを作成」ボタンをクリックします。  
   ![01](/ja/img/part-3/getting_started/getting_started-01.png)
3. 必要事項を入力し、「新規登録」をクリックします。

#### メール認証

登録後、入力したメールアドレス宛に仮パスワードが送信されます。  
届いた仮パスワードと、新たに設定するパスワードを入力し、「新しいパスワードを設定する」ボタンを押下してアカウントを有効化します。

![02](/ja/img/part-3/getting_started/getting_started-02.png)


#### 初回ログイン後の流れ

初めて SaaSus Platform に登録した際には、登録者専用のテナントが作成されます。  
これはお客様専用の AWS アカウントを作成するため、最短で1時間ほどお時間がかかります。  
アカウント作成が完了次第、登録したメールアドレスにご案内が届きます。
![03](/ja/img/part-3/getting_started/getting_started-03.png)

#### テナント作成完了後の初回ログイン

テナント作成が完了し、ログインを行うと、最初に **ユーザー属性（プロフィール情報）** の入力を求められます。

入力が必要な情報：

- 会社名
- 氏名

![04](/ja/img/part-3/getting_started/getting_started-04.png)

これらを入力し、「保存」をクリックすると、**テナントの各コンソールへの遷移画面**が表示されます。

![05](/ja/img/part-3/getting_started/getting_started-05.png)

### 2. 必要なシステム要件・環境要件

SaaSus Platform を快適に利用し、正しく連携するには以下の環境が推奨されます。

#### 推奨ブラウザ

- Google Chrome（最新版）  
※現在、動作保証されているのは **macOS 上の Google Chrome** のみです。

#### ネットワーク環境

- 安定したインターネット接続環境

#### サーバー側要件

- 自社アプリケーションが SaaSus の各種 API にアクセス可能なネットワーク環境で動作している必要があります。

### 3. Stripeアカウントの用意と連携方法

SaaSus Platform では、Stripe を利用した請求機能の自動化に対応しています。必要に応じて、以下の手順で連携設定を行ってください。

- **Stripe アカウントの作成**  
  Stripe 公式サイトよりアカウントを作成し、ダッシュボードから「シークレットキー」を取得します。

- **連携手順**  
  SaaS開発コンソールの「外部連携 > 請求」画面を開き、取得したシークレットキーを登録することで連携が完了します。これにより、料金プランに基づく請求処理が自動化されます。