---
title: "ドメイン・メール送信ドメイン認証・遷移先の設定"
slug: "domain-and-redirect-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 05 2026 08:10:52 GMT+0000 (Coordinated Universal Time)"
---

このページでは、ログイン画面の表示に使用する **独自ドメイン** および、ログイン後の **遷移先URL** の設定方法について説明します。いずれも「基本設定」画面から編集できます。

## 1. ドメイン・メール送信ドメイン認証設定

SaaSアプリに使用するドメインを設定します。ログイン画面や各種通知メールの送信元ドメインにも使用される重要な設定です。  
メール送信ドメイン認証設定により、通知メールの到達率を高め、なりすましを防ぐことができます。

### 設定手順

1. SaaS開発コンソールにログインします。
2. サイドメニューから「ドメイン」を選択します。
3. 使用するドメイン名を入力し、登録を行います。

※ DNS設定が可能なドメインをご利用ください。

![ドメイン入力画面](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-01.png)

### DNS 設定

ドメインの登録後、画面下部に以下の設定情報が表示されます。ご利用のDNSサービスにて、指定されたレコードを追加してください。

#### ドメイン所有権の確認と（CNAME）

表示された CNAMEレコード をDNSに登録します。これにより、独自ドメインの所有権確認が行われ、安全な認証画面が提供されます。

#### メール送信ドメイン認証（DKIM）

:::warning 注意
Google認証、招待機能を利用する場合、メール送信ドメイン認証の設定が必要になります。  
ログイン画面のURLを独自ドメインに設定するだけの場合は、メール送信ドメイン認証の設定は不要です。
:::

画面に表示されるメール送信用のCNAMEレコード（複数ある場合があります）をすべてDNSに登録してください。  

![CNAME表示](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-02.png)

#### DNSサービス例
Value Domain では、以下のように設定します。

![DNS設定例](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-03.png)

#### 状態の確認

DNS設定が正しく行われると、画面上に「正常に動作中です」と表示されます。

メール送信ドメイン認証（DKIM）が正常に完了すると、画面上に「独自ドメインによる認証メールの配信が有効になっています。」と表示されます。  
ただし、メール送信ドメイン認証（DKIM）設定については、DNSの反映に1〜2日ほど時間を要する場合があります。 設定直後に反映されない場合は、しばらく時間を置いてから再度ご確認ください。

![DNS検証完了画面](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-04.png)

#### ログイン画面URL
登録したドメインは、`auth.ドメイン名` という形式でログイン画面のURLとして利用されます。  
SaaS開発コンソールの「認証認可」→「認証詳細設定」画面で確認できます。

## 2. 認証後の遷移先URLの設定

ログイン完了後に、ユーザーをリダイレクトする先のURL（自社SaaSアプリのトップページなど）を指定します。

![遷移先URL設定画面](/ja/img/part-4/application-settings/domain-and-redirect-settings/authentication-preference-redirect-url.png)

この URL に認証情報（トークンなど）が渡されます。  
SaaSus SDK を使って、このURLでの認証受け取り処理（コールバック）を実装することができます。