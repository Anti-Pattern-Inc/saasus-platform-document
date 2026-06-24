---
title: "SaaSus Platformログイン画面・メイン画面の全体イメージ"
slug: "login-and-main-screen-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

## 1. ログイン画面

SaaSus Platform にアクセスすると、まずログイン画面が表示されます。  
メールアドレスとパスワードでログイン、または Google アカウントによる認証を選択できます。

![ログイン画面](/ja/img/part-3/login-and-main-screen-overview/login.png)

## 2. テナントとコンソール選択画面

初回ログイン後、所属するテナントを選択し、SaaS開発コンソールまたはSaaS運用コンソールのどちらに進むかを選択する画面が表示されます。

![テナントとコンソール選択画面](/ja/img/part-3/login-and-main-screen-overview/select-environment.png)

この画面から、目的に応じたコンソールに遷移できます：

- SaaS開発コンソール：SaaS機能の構成・設定
- SaaS運用コンソール：ユーザー・テナント・請求情報の確認と管理


## 3. SaaS開発コンソール画面

SaaS開発コンソールでは、SaaSアプリケーションの基本構成、認証設定、料金プラン作成、外部連携の設定などを行います。

![開発コンソール画面_1](/ja/img/part-3/login-and-main-screen-overview/saas-development-console-01.png)
![開発コンソール画面_2](/ja/img/part-3/login-and-main-screen-overview/saas-development-console-02.png)


## 4. SaaS運用コンソール画面

SaaS運用コンソールでは、テナントのユーザー管理、請求関連情報の確認、ロールの割り当てなど、日々の運用業務に必要な操作が行えます。

![運用コンソール画面](/ja/img/part-3/login-and-main-screen-overview/saas-operation-console.png)

## 5. コンソールの切り替え方法

SaaSus Platformでは、画面左上に表示されるセレクトボックスから、SaaS開発コンソールとSaaS運用コンソールを簡単に切り替えることができます。

![コンソール切り替え](/ja/img/part-3/login-and-main-screen-overview/console-switching.png)

この切り替えにより、目的に応じて必要な操作画面へ即座に遷移できます。

## 6. SaaSus Platformアカウントへの多要素認証の設定手順

1. SaaS開発コンソールまたはSaaS運用コンソールの右上にあるユーザーメニューをクリックします。
2. `多要素認証の設定`をクリックします。
3. `デバイスを追加`ボタンをクリックします。  
   ![multi-factor-authentication-1](/ja/img/part-3/login-and-main-screen-overview/multi-factor-authentication-1.png)

4. `QRコードを表示する`をクリックして、QRコードを表示します。  
   ![multi-factor-authentication-2](/ja/img/part-3/login-and-main-screen-overview/multi-factor-authentication-2.png)

5. 表示されたQRコードを、Google Authenticator、またはAuthyアプリでスキャンします。

6. アプリで生成された6桁のコードを入力し、`認証`をクリックします。

7. 多要素認証が有効になると、次回以降のログイン時に認証コードの入力が求められます。