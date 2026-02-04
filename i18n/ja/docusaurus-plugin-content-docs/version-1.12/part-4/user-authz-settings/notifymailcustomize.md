---
title: "通知メール内容"
slug: "notifymailcustomize"
excerpt: ""
hidden: false
createdAt: "Tue Dec 12 2023 05:46:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 21 2023 02:21:05 GMT+0000 (Coordinated Universal Time)"
---

<a href="https://settings.console.saasus.io/customize" target="_blank">認証詳細設定画面</a>の通知メール内容タブでは、ログイン画面などの認証系ページでユーザーに送信するメールをカスタマイズすることができます。

## メール本文のカスタマイズ方法

### 新規登録時の仮パスワード送信メール

`{####}` と `{username}`という文字列が必要になります。

`{####}` は仮パスワードに、`{username}` はユーザーIDに置き換えられて送信されます。

#### 例

```
会員登録いただきありがとうございます。
ユーザーIDと仮パスワードをお知らせいたします。

ユーザーID: {username}
仮パスワード: {####}

下記画面にて上記仮パスワードを入力し、サインアップを完了してください。
https://auth.your.domain/sign-up-confirm

お問い合わせの際には、ユーザーIDを添えてお問い合わせください。
```

上記のように設定すると、実際に送信されるメールは以下のようになります。

```
会員登録いただきありがとうございます。
ユーザーIDと仮パスワードをお知らせいたします。

ユーザーID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
仮パスワード: xxxxxxxx

下記画面にて上記仮パスワードを入力し、サインアップを完了してください。
https://auth.your.domain/sign-up-confirm

お問い合わせの際には、ユーザーIDを添えてお問い合わせください。
```

### 新規登録時の仮パスワード再送メール

`{####}` と `{username}` という文字列が必要になります。

`{####}` は仮パスワードに、`{username}` はユーザーIDに置き換えられて送信されます。

#### 例

```
ユーザーIDと仮パスワードをお知らせいたします。

ユーザーID: {username}
仮パスワード: {####}

下記画面にて上記仮パスワードを入力し、サインアップを完了してください。
https://auth.your.domain/sign-up-confirm

お問い合わせの際には、ユーザーIDを添えてお問い合わせください。
```

上記のように設定すると、実際に送信されるメールは以下のようになります。

```
ユーザーIDと仮パスワードをお知らせいたします。

ユーザーID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
仮パスワード: xxxxxxxx

下記画面にて上記仮パスワードを入力し、サインアップを完了してください。
https://auth.your.domain/sign-up-confirm

お問い合わせの際には、ユーザーIDを添えてお問い合わせください。
```

### パスワードリセット用の検証コード送信メール

`{####}` という文字列が必要になります。

`{####}` は、検証コードに置き換えられて送信されます。

#### 例

```
会員登録いただきありがとうございます。
パスワードリセット用検証コードをお知らせいたします。

検証コード: {####}

下記画面にて上記検証コードを入力し、パスワードをリセットしてください。
https://auth.your.domain/recover-password-confirm
```

上記のように設定すると、実際に送信されるメールは以下のようになります。

```
会員登録いただきありがとうございます。
パスワードリセット用検証コードをお知らせいたします。

検証コード:111111

下記画面にて上記検証コードを入力し、パスワードをリセットしてください。
https://auth.your.domain/recover-password-confirm
```
