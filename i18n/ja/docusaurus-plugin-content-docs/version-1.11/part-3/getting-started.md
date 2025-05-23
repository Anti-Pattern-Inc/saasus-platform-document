---
title: "利用準備"
slug: "getting-started"
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

1. [https://auth.saasus.io/sign-up](https://auth.saasus.io/sign-up)にアクセスします。
2. 「アカウントを作成」ボタンをクリックします。  
   ![01](/ja/img/part-3/getting-started/getting_started-01.png)
3. 必要事項を入力し、「新規登録」をクリックします。

#### メール認証

登録後、入力したメールアドレス宛に仮パスワードが送信されます。  
届いた仮パスワードと、新たに設定するパスワードを入力し、「新しいパスワードを設定する」ボタンを押下してアカウントを有効化します。

![02](/ja/img/part-3/getting-started/getting_started-02.png)


#### 初回ログイン後の流れ

初めて SaaSus Platform に登録した際には、登録者専用のテナントが作成されます。  
これはお客様専用の AWS アカウントを作成するため、最短で1時間ほどお時間がかかります。  
アカウント作成が完了次第、登録したメールアドレスにご案内が届きます。
![03](/ja/img/part-3/getting-started/getting_started-03.png)

#### テナント作成完了後の初回ログイン

テナント作成が完了し、ログインを行うと、最初に **ユーザー属性（プロフィール情報）** の入力を求められます。

入力が必要な情報：

- 会社名
- 氏名

![04](/ja/img/part-3/getting-started/getting_started-04.png)

これらを入力し、「保存」をクリックすると、**テナントの各コンソールへの遷移画面**が表示されます。

![05](/ja/img/part-3/getting-started/getting_started-05.png)

### 2. 必要なシステム要件・環境要件

SaaSus Platformコンソールの利用と、API 経由での連携実行にはそれぞれ以下の環境が必要です。

#### 2.1 SaaSus Platformコンソール利用の要件

- **ブラウザ**  
  - Google Chrome（最新版）  
    ※現状、動作保証は macOS 上の Chrome のみです。  
- **ネットワーク**  
  - 安定したインターネット接続  

#### 2.2 API 利用の要件

- **ネットワーク**  
  - 自社アプリケーションサーバーから `https://api.saasus.io` への HTTPS 接続（ポート443）が可能であること  

### 3. Stripeアカウントの用意と連携方法

SaaSus Platform では、Stripe を利用した請求機能の自動化に対応しています。必要に応じて、以下の手順で連携設定を行ってください。

- **Stripe アカウントの作成**  
  Stripe 公式サイトよりアカウントを作成し、ダッシュボードから「シークレットキー」を取得します。

- **連携手順**  
  SaaS開発コンソールの「外部連携 > 請求」画面を開き、取得したシークレットキーを登録することで連携が完了します。これにより、料金プランに基づく請求処理が自動化されます。

### 4. 運用開始までの基本フロー

以下の 4 ステップで、SaaSus Platform の導入完了後から本番運用開始までに必要な動作確認を行います。

1. **アカウント作成と初期ログインを行う**  
   本ページ前半で解説した手順で、アカウント登録とテナント作成を完了し、SaaSus Platformコンソールにログインします。

2. **SaaS アプリの基本情報を設定する**  
   アプリ名やドメイン、リダイレクト URL、利用規約リンクなどを  
   [基本情報の設定](/ja/docs/part-4/application-settings/basic-app-settings) で登録します。  
   料金プランや属性設定などもSaaS開発コンソールから行えます。

3. **SDK 組み込みとリソース作成テストを行う**  
   [開発者向けSDK/API概要](/ja/docs/part-6/developer-sdk-api-overview) を参考に、  
   認証、テナント作成、ユーザー作成 などの動作確認します。

4. **SaaS運用コンソールで設定を検証する**  
   [SaaS運用コンソール概要](/ja/docs/part-5/operations-console-overview) を参考に、  
   テナント管理やユーザー・テナント属性設定、料金プラン設定などが  
   正しく反映されていることを確認します。

 上記手順がご不明な場合は、[チュートリアル](/ja/docs/tutorial/tutorial-introduction) をご覧ください。