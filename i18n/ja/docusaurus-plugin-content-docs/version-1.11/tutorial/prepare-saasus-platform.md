---
sidebar_position: 2
title: "SaaSus Platformの準備"
slug: "prepare-saas-platform"
excerpt: ""
hidden: false
createdAt: "Wed Jan 11 2023 03:12:50 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

### SaaSus Platform アカウントの作成

まずは、SaaSus Platform のアカウントを作成しましょう。

新規登録画面を表示し、ご自身のメールアドレスを使用して新規登録を行います。

[https://auth.saasus.io/sign-up](https://auth.saasus.io/sign-up)

メールアドレスを入力し、利用規約とプライバシーポリシーをお読みいただき、同意いただける場合はチェックを入れてください。その後、新規登録ボタンをクリックしてください。

![01](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-01.png)

入力したメールアドレスに仮パスワードが届きます。届いた仮パスワードと、新たに登録するパスワードを入力します。「新しいパスワードを設定する」ボタンを押下し、アカウントを有効化します。

![02](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-02.png)

はじめて SaaSus Platform に登録した時には、登録していただいた方専用のテナントを作成します。これは、お客様専用の AWS アカウントを作成しているため、最短で１時間ほどお時間がかかります。アカウント作成が完了次第、先ほどのメールアドレスにご案内が届きます。

![03](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-03.png)

### コンソールへのログイン

テナントが作成されたのちに、ログインを行うと、このようにユーザ属性の入力が求められますので、会社名、名前を入力してください。

![04](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-04.png)

入力後テナントの各コンソールへの遷移画面が表示されます。

![05](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-05.png)

**SaaS 開発コンソール**は、SaaS 構築のための設定を行うコンソールで、

**SaaS 管理コンソール**は、SaaS を運用していくためのコンソールになります。

:::info ドメイン設定について
SaaSus Platformではドメインを設定することで、ログイン画面の自動生成やメール送信の際のベースドメインに設定することができます。<br/>
ドメインの設定方法に関しては、[ドメイン・遷移先の設定](/docs/part-4/application-settings/domain-and-redirect-settings)で確認してください。
:::

:::info ログイン画面のカスタマイズについて
自動生成されたログイン画面はサービス名やアイコンを表示したり、利用規約やプライバシーポリシーのリンクを設定することができます。<br/>
設定方法は、[基本情報の設定](/docs/part-4/application-settings/basic-app-settings)で確認してください。
:::

### 認証後の遷移先 URL の設定

設定したドメイン名をベースにして、SaaSus Platform はログイン画面を生成します。<br/>
ログイン後、SaaS 側に認証情報を引き継ぎます。この引き継ぎ先の SaaS の URL を、Callback URL として登録する必要があります。

サイドメニューから「認証後遷移先」をクリックし、Callback URL 設定画面を表示します。

通常は、提供している SaaS の URL をベースに Callback URL を設定します。<br/>
ただし、今回はサンプルアプリケーションをローカルで動かすため、以下のように設定します。

- Laravel の場合: [http://localhost/callback](http://localhost/callback)
- Express の場合: [http://localhost:3000/callback](http://localhost:3000/callback)

![06](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-06.png)

このように Callback URL を設定した後は、引き続きチュートリアルを進めるために、以下の追加設定が必要です。

:::caution チュートリアルを進める前に必要な設定です
このあとのチュートリアルをスムーズに進めるためには、ユーザやテナントに関する追加情報の定義が **必須** です。

以下の設定を事前に行ってください：

- [ユーザー属性定義](/docs/part-4/user-authz-settings/declare-additional-attribute-to-user)
- [テナント属性定義](/docs/part-4/application-settings/declare-additional-attribute-to-tenant)
- [役割定義](/docs/part-4/user-authz-settings/role-definition)

以降の手順は、これらの設定が完了していることを前提として進行します。
:::

SaaSus Platformの準備ができたら、サンプルアプリケーションに組み込みを行います。