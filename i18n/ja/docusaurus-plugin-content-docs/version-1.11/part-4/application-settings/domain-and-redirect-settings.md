---
title: "ドメイン・遷移先の設定"
slug: "domain-and-redirect-settings"
description: "SaaSアプリで使用するドメインや、ログイン後の遷移先URLを設定します。"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> ログイン画面に表示されるサービス名やアイコン、利用規約リンクなどを設定します。

このページでは、ログイン画面の表示に使用する **独自ドメイン** および、ログイン後の **遷移先URL** の設定方法について説明します。いずれも「基本設定」画面から編集できます。

### 1. ドメインの設定

SaaSアプリに使用するドメインを設定します。ログイン画面や各種通知メールの送信元ドメインにも使用される重要な設定です。

#### 設定手順

1. SaaS開発コンソールにログインします。
2. サイドメニューから「ドメイン」を選択します。
3. 使用するドメイン名を入力し、登録を行います。

※ DNS設定が可能なドメインをご利用ください。

![ドメイン入力画面](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-01.png)

#### DNS 設定

登録後、画面下部に表示される CNAMEレコードを使用し、所有ドメインのDNS設定に追加します。

![CNAME表示](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-02.png)

DNSサービス例（Value Domainなど）では、以下のように設定します。

![DNS設定例](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-03.png)

設定が正しく行われると、画面上に「正常に動作中です」と表示されます。

![DNS検証完了画面](/ja/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-04.png)

登録したドメインは、`auth.ドメイン名` という形式でログイン画面のURLとして利用されます。

### 2. 認証後の遷移先URLの設定

ログイン完了後に、ユーザーをリダイレクトする先のURL（自社SaaSアプリのトップページなど）を指定します。

![遷移先URL設定画面](/ja/img/part-4/application-settings/domain-and-redirect-settings/authentication-preference-redirect-url.png)

この URL に認証情報（トークンなど）が渡されます。  
SaaSus SDK を使って、このURLでの認証受け取り処理（コールバック）を実装することができます。