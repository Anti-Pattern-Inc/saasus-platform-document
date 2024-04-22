---
title: "ログイン画面など認証系画面のカスタマイズ"
slug: "authorization-screen-customize"
excerpt: ""
hidden: false
createdAt: "Thu Apr 04 2024 05:25:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 04 2024 05:25:39 GMT+0000 (Coordinated Universal Time)"
---

# ログイン画面など認証系画面のカスタマイズ

ログイン画面のカスタマイズを行うには、サイドメニューから「認証詳細設定」をクリックします。

![01](/ja/img/saas-development-console/authorization-screen-customize-01.png)

基本情報では、認証系画面で利用される各種情報を編集します。

例えば、先ほどのログイン画面でいうと、

- 「SaaSus Platform へようこそ」の部分が**サービス名**
- 上部のアイコンが**アイコンアップロード**
- 利用規約 URL、プライバシーポリシー URL が**利用規約、プライバシーポリシーのリンク先** 

となります。
![02](/ja/img/saas-development-console/authorization-screen-customize-02.png)

変更を適用するためには、「保存」ボタンをクリックします。

また、「画面設定」タブでは、新規登録画面、ログイン画面、パスワード変更画面の各画面に、利用規約とプライバシーポリシーを表示するかを選択できます。

「認証設定」タブでは、各種詳細な認証設定が行なえます。

設定が完了すると、先ほど設定したドメイン名に "auth." をつけたURLにてログイン画面が生成されます。ログイン画面が表示されるかどうかを確認してください。

※変更を保存すると、新しいログイン画面が生成されます。生成には数分かかる場合がありますので、保存した内容を確認するには数分後にアクセスしてください。

例えば、ドメイン名を “sample.saasus.jp” で設定した場合、ログイン画面は [https://auth.sample.saasus.jp/](https://auth.sample.saasus.jp/) にて提供されます。
