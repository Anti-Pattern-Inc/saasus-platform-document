---
title: "ユーザに追加属性を定義する"
slug: "declare-additional-attribute-to-user"
excerpt: ""
hidden: false
createdAt: "Wed Apr 08 2024 14:34:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Apr 08 2024 14:34:47 GMT+0000 (Coordinated Universal Time)"
---

# ユーザに追加属性を定義する

SaaSus Platform では、最初の段階では管理されるSaaSのユーザはユーザID(UUID)とメールアドレスのみを持っています。もし必要があれば、ユーザに追加の属性を設定することができます。

サイドメニューから「ユーザ属性定義」を選択してください。

![01](/ja/img/saas-development-console/declare-additional-attribute-to-user-01.png)

SaaSの設計者は、SaaSus Platform側とSaaS側の両方で管理されるユーザの属性を考慮し、どの属性をSaaSus Platform側で管理し、どの属性をSaaS側で管理するかを検討する必要があります。

例えば、すべてのユーザ情報をSaaSus Platform側で管理したい場合は、必要な追加属性をSaaSus Platformに定義します。しかし、個人情報などの重要な情報はSaaSus Platform側で管理したくない場合や、ユーザの追加属性をもとに各種集計を行いたい場合などがあります。その場合には、SaaSus Platform側には認証のみを求め、ユーザ情報の管理はSaaS側でユーザマスタをベースに行います。そして、UUIDをSaaSus Platform側の認証情報と紐付けることで、柔軟に対応できます。

今回は、「ユーザー名」という属性を定義してみましょう。

「＋ユーザ属性の作成」ボタンをクリックすると、ユーザ属性作成のポップアップが表示されます。

属性名は、SaaSアプリケーション（プログラム）側で識別するためのキーとして使用されます。そのため、英字で入力しておくことをお勧めします。

表示名は、その属性がどのようなものかを理解できるように記述します。

タイプは、データ型を指定します。

今回は、以下の設定を行います。

- 属性名： username
- 表示名： ユーザー名
- タイプ： 文字列

入力が完了したら、「作成」ボタンをクリックします。

![02](/ja/img/saas-development-console/declare-additional-attribute-to-user-02.png)

ユーザー属性が追加されました。

![03](/ja/img/saas-development-console/declare-additional-attribute-to-user-03.png)