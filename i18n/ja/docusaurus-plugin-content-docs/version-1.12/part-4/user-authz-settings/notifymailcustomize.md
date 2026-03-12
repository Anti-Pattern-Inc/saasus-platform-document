---
title: "通知メール内容"
slug: "notifymailcustomize"
excerpt: ""
hidden: false
createdAt: "Tue Dec 12 2023 05:46:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 12 2026 12:26:00 GMT+0000 (Coordinated Universal Time)"
---

<a href="https://settings.console.saasus.io/customize" target="_blank">認証詳細設定画面</a>の通知メール内容タブでは、ログイン画面などの認証系ページでユーザーに送信するメールをカスタマイズすることができます。
:::warning 警告
メッセージに設定する文字列に全角空白は設定できません。
:::

## カスタマイズ可能なメール・予約語一覧

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>No</th>
      <th>メールタイプ</th>
      <th>名前</th>
      <th>送信条件(API等)</th>
      <th>Message で使用可能</th>
      <th>Subject で使用可能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><strong>signUp</strong></td>
      <td>ユーザー登録通知</td>
      <td>`SignUp`<br />`createUser`</td>
      <td>`{username}` ユーザーID<br />`{####}` 仮パスワード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td><strong>createUser</strong></td>
      <td>(利用不可)ユーザー作成通知</td>
      <td></td>
      <td>`{username}` ユーザーID<br />`{####}` 一時パスワード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td><strong>resendCode</strong></td>
      <td>ユーザー登録再送信通知</td>
      <td>`ResendSignUpConfirmationEmail`</td>
      <td>`{username}` ユーザーID<br />`{####}` 仮パスワード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td><strong>forgotPassword</strong></td>
      <td>パスワードリセット通知</td>
      <td>ログイン画面からパスワードを忘れた方はこちら</td>
      <td>`{####}` リセットコード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td><strong>verifyUserAttribute</strong></td>
      <td>(利用不可)ユーザー属性検証通知</td>
      <td></td>
      <td>`{username}` ユーザーID<br />`{####}` 検証コード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td><strong>authenticationMfa</strong></td>
      <td>MFA認証通知</td>
      <td>`UpdateUserMfaPreference` を利用して<br />"method"="email" に設定後ログインする</td>
      <td>`{username}` ユーザーID<br />`{####}` 認証コード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td><strong>updateUserAttribute</strong></td>
      <td>ユーザー属性更新通知</td>
      <td>`RequestEmailUpdate`</td>
      <td>`{####}` 確認コード</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td><strong>inviteTenantUser</strong></td>
      <td>テナントユーザー招待通知</td>
      <td>`CreateTenantInvitation`</td>
      <td>`{tenant_name}` テナント名<br />`{invitation_url}` 招待URL</td>
      <td>`{tenant_name}` テナント名</td>
    </tr>
    <tr>
      <td>9</td>
      <td><strong>verifyExternalUser</strong></td>
      <td>外部ユーザー検証通知</td>
      <td>`RequestExternalUserLink`</td>
      <td>`{####}` 検証コード</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>

## メール本文のカスタマイズ方法

### ユーザー登録通知メール (signUp)

`{####}` と `{username}` という文字列が必要になります。

`{####}` は仮パスワードに、`{username}` はユーザーIDに置き換えられて送信されます。

#### 設定例

```
ユーザー登録のお知らせ

この度は会員登録いただき、ありがとうございます。
アカウントの確認を完了するために、下記の仮パスワードをご入力ください。

仮パスワード: {####}
ユーザーID: {username}

確認画面: https://auth.your.domain/sign-up-confirm

```

#### 送信例

```
ユーザー登録のお知らせ

この度は会員登録いただき、ありがとうございます。
アカウントの確認を完了するために、下記の仮パスワードをご入力ください。

仮パスワード: 123456
ユーザーID: 12345678-1234-1234-1234-123456789abc

確認画面: https://auth.your.domain/sign-up-confirm

```

### ユーザー登録再送信メール (resendCode)

`{####}` と `{username}` という文字列が必要になります。

`{####}` は仮パスワードに、`{username}` はユーザーIDに置き換えられて送信されます。

#### 設定例

```
仮パスワードを再送いたします

ご依頼いただいた仮パスワードを再送いたします。

仮パスワード: {####}
ユーザーID: {username}

確認画面: https://auth.your.domain/sign-up-confirm

※このメールは自動送信されています。
```

#### 送信例

```
仮パスワードを再送いたします

ご依頼いただいた仮パスワードを再送いたします。

仮パスワード: 654321
ユーザーID: 12345678-1234-1234-1234-123456789abc

確認画面: https://auth.your.domain/sign-up-confirm

※このメールは自動送信されています。
```

### パスワードリセットメール (forgotPassword)

`{####}` と `{username}` という文字列が必要になります。

`{####}` はリセットコードに、`{username}` はユーザーIDに置き換えられて送信されます。

#### 設定例

```
パスワードリセットのご依頼

パスワードのリセット依頼を受け付けました。
下記のリセットコードを使用して、新しいパスワードを設定してください。

リセットコード: {####}

リセット画面: https://auth.your.domain/recover-password-confirm
```

#### 送信例

```
パスワードリセットのご依頼

パスワードのリセット依頼を受け付けました。
下記のリセットコードを使用して、新しいパスワードを設定してください。

リセットコード: 789012

リセット画面: https://auth.your.domain/recover-password-confirm
```

### MFA認証メール (authenticationMfa)

`{####}` と `{username}` という文字列が必要になります。

`{####}` はMFA認証コードに、`{username}` はユーザーIDに置き換えられて送信されます。

#### 設定例

```
ログイン認証コード

ログイン時の認証コードをお知らせします。

認証コード: {####}
ユーザーID: {username}

※このコードを他人に教えないでください
```

#### 送信例

```
ログイン認証コード

ログイン時の認証コードをお知らせします。

認証コード: 345678
ユーザーID: 12345678-1234-1234-1234-123456789abc

※このコードを他人に教えないでください
```

### ユーザー属性更新確認メール (updateUserAttribute)

`{####}` という文字列が必要になります。

`{####}` は確認コードに置き換えられて送信されます。

#### 設定例

```
アカウント情報変更の確認

お客様のアカウント情報に変更依頼がありました。
変更を確定するために、下記の確認コードをご入力ください。

確認コード: {####}

変更内容を確認し、アプリケーション画面でコードを入力してください。

■ 変更内容
・メールアドレスの変更
```

#### 送信例

```
アカウント情報変更の確認

お客様のアカウント情報に変更依頼がありました。
変更を確定するために、下記の検証コードをご入力ください。

検証コード: 901234

変更内容を確認し、アプリケーション画面でコードを入力してください。

■ 変更内容
・メールアドレスの変更
```

### テナントユーザー招待メール (inviteTenantUser)

`{tenant_name}` と `{invitation_url}` という文字列が必要になります。また、件名では `{tenant_name}` が使用可能です。

`{tenant_name}` はテナント名に、`{invitation_url}` は招待URLに置き換えられて送信されます。

#### 件名例

```
{tenant_name}へのご招待
```

#### 設定例

```
{tenant_name} への招待

{tenant_name} のメンバーとしてあなたをお招きいたします。

下記のリンクをクリックして招待を承諾してください。

招待を承諾する: {invitation_url}

■ 招待の詳細
・組織名：{tenant_name}
・有効期限：7日間

ご質問がございましたら、招待者またはサポートまでお問い合わせください。
```

#### 送信例

**件名：** ABC株式会社へのご招待

**本文：**
```
ABC株式会社 への招待

ABC株式会社 のメンバーとしてあなたをお招きいたします。

下記のリンクをクリックして招待を承諾してください。

招待を承諾する: https://auth.your.domain/invitation/accept?token=abc123def456

■ 招待の詳細
・組織名：ABC株式会社
・有効期限：7日間

ご質問がございましたら、招待者またはサポートまでお問い合わせください。
```

### 外部ユーザー検証メール (verifyExternalUser)

`{####}` という文字列が必要になります。

`{####}` は検証コードに置き換えられて送信されます。

#### 設定例

```
外部アカウント連携の認証

外部アカウントとの連携を安全に行うため、認証コードによる確認をお願いします。

認証コード: {####}

【連携手順】
1. アプリケーションの連携画面で上記コードを入力
2. 「認証する」ボタンをクリック
3. 連携完了
```

#### 送信例

```
外部アカウント連携の認証

外部アカウントとの連携を安全に行うため、認証コードによる確認をお願いします。

認証コード: 567890

【連携手順】
1. アプリケーションの連携画面で上記コードを入力
2. 「認証する」ボタンをクリック
3. 連携完了
