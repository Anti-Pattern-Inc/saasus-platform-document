---
title: "基本情報の設定"
slug: "basic-app-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

このページでは、ログイン画面など認証関連画面で使用される情報（サービス名、アイコン、利用規約URL など）を設定します。

サイドメニューの「認証詳細設定」から編集を行います。

![認証詳細設定メニュー](/ja/img/part-4/application-settings/basic-app-settings/authorization-screen-customize-01.png)


以下の項目が編集可能です：

| 項目 | 説明 |
|------|------|
| **サービス名** | ログイン画面上部に表示されるテキストです（例：SaaSus Platform へようこそ） |
| **アイコン** | ログイン画面左上に表示されるアプリのアイコン画像（推奨サイズ：128px以上の正方形） |
| **利用規約URL** | ログイン画面下部に表示される「利用規約」リンク先 |
| **プライバシーポリシーURL** | 同様に「プライバシーポリシー」へのリンク先 |

![編集画面例](/ja/img/part-4/application-settings/basic-app-settings/authorization-screen-customize-02.png)

「保存」ボタンを押すことで変更内容が反映されます。画面が生成されるまで数分かかることがあります。

ログイン画面のURLは、設定したドメイン名に `auth.` を付けたものになります。  
例：ドメイン名を `sample.saasus.jp` と設定した場合、ログイン画面は `https://auth.sample.saasus.jp/` になります。

:::info
- 「**画面設定**」タブでは、新規登録／ログイン／パスワード変更画面に、利用規約とプライバシーポリシーのリンクを表示するかを設定できます。
- 「**認証設定**」タブでは、ログイン方式やパスワードリセットに関する詳細設定を行うことができます。
:::