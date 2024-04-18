---
sidebar_position: 2
title: "SaaSus Platformの準備"
slug: "prepare-saas-platform"
excerpt: ""
hidden: false
createdAt: "Wed Jan 11 2023 03:12:50 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

※全体の流れを動画でご覧になることもできます。  
[https://www.youtube.com/watch?v=deSkPJ-zTgw](https://www.youtube.com/watch?v=deSkPJ-zTgw)

## SaaSus Platform の準備

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

:::info
SaaSus Platformではドメインを設定することで、ログイン画面の自動生成やメール送信の際のベースドメインに設定することができます。<br/>
ドメインの設定方法に関しては、[ドメイン名の設定](../saas-development-console/domain-name-preference)で確認してください。
:::

:::info
SaaS アプリケーションに必要となる主な登録情報の設定方法は、下記ページを確認してください。<br/>
[ユーザに追加属性を定義する](../saas-development-console/declare-additional-attribute-to-user)<br/>
[テナントに追加属性を定義する](../saas-development-console/declare-additional-attribute-to-tenant)<br/>
[役割の定義](../saas-development-console/role-definition)
:::

SaaSus Platformの準備ができたら、サンプルアプリケーションに組み込みを行います。