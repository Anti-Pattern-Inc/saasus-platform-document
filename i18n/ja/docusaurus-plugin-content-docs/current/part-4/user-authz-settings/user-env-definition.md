---
title: "ユーザー環境定義の利用"
slug: "user-env-definition"
description: "開発・テスト・本番など、ユーザーが利用可能な環境を定義・管理します。"
excerpt: ""
hidden: false
createdAt: "Mon Mar 25 2024 18:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 25 2024 18:00:00 GMT+0000 (Coordinated Universal Time)"
---
> 開発・テスト・本番など、ユーザーが利用可能な環境を定義・管理します。

SaaSus Platformにて保持するユーザーの環境定義をすることができます。ここで定義する環境とは、SaaS（お客様）で構築している開発環境、テスト環境などを意味します。SaaSのフェーズに合わせてテスト環境の属性を持つことを検討してください。


## ユーザー環境定義の確認

**SaaS開発コンソールから`ユーザー環境定義`を選択**

![user-env-definition-1](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-1.png)

システムで登録した環境とユーザー自身で登録した環境が表示されます。以前はシステムが自動で環境名が"dev"または、"stg"の環境が登録されましたが、現在は環境名が"prod"のみ自動で登録されます。

## ユーザー環境定義の登録

**`環境の作成`をクリック**

![user-env-definition-2](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-2.png)

ID、環境名、表示名を設定します。IDは一意となるように設定してください。

![user-env-definition-3](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-3.png)

登録した環境が表示されます。

## ユーザー環境定義の更新と削除

![user-env-definition-4](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-4.png)

環境名、表示名が変更することができます。

![user-env-definition-5](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-5.png)

環境を削除することができますが、システムで登録した環境名"prod"は削除できません。

## ユーザー環境定義をユーザーに設定

**SaaS 運用コンソールから`役割管理`を選択**
![user-env-definition-6](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-6.png)

先程、SaaS開発コンソールで作成した”テスト環境"を条件に検索してみます。まだ、ユーザーに付与していないため検索結果に表示されません。SaaS側の"テスト環境"を利用可能なユーザーはSaaSusPlatformに登録されていない状態です。

**`ユーザーへの役割付与`をクリック**

![user-env-definition-7](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-7.png)

SaaS側の"テスト環境"を利用可能とするユーザーのメールアドレスを設定して追加ボタンをクリックします。

## ユーザー環境定義を設定したユーザーの確認

**SaaS運用コンソールから`ユーザー管理`を選択**

![user-env-definition-8](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-8.png)

テスト環境ユーザーも表示するチェックボックスをONにすると、SaaS側の"テスト環境"を利用可能とするユーザーが表示されます。

![user-env-definition-9](/ja/img/part-4/user-authz-settings/user-env-definition/user-env-definition-9.png)

テスト環境ユーザーも表示するチェックボックスをOFFにすると、SaaS側の"テスト環境"を利用可能とするユーザーが表示されません。これは、このユーザーがテスト環境のみ利用できるユーザーとして登録しているためです。

