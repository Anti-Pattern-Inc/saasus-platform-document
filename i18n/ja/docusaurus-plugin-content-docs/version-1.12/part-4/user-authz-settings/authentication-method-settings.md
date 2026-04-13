---
title: "認証方式の設定"
slug: "authentication-method-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

このページでは、SaaSus Platform の「認証詳細設定」画面の「認証設定」タブで行える以下の認証関連機能の設定について説明します。

- パスワード要件の設定
- Google ログインの有効化
- セルフサインアップ（ユーザー自身による新規登録）の可否
- 信頼済みデバイスの記憶設定

## パスワード要件の設定

パスワードの最小文字数や文字種（数字・特殊文字・大文字・小文字など）の要件を設定できます。

### 設定画面

![パスワード要件設定画面](/ja/img/part-4/user-authz-settings/authentication-method-settings/auth-password-policy.png)


## Googleログインの有効化

Googleログインを有効にするには、事前に Google Cloud Console での設定と SaaSus Platform への登録が必要です。  
詳しい手順は、[Google連携の設定手順](/ja/docs/part-4/user-authz-settings/google-linkage) を参照してください。

設定が完了すると、「認証詳細設定」画面の「認証設定」タブで Googleログインを有効化できるようになります。


## セルフサインアップの許可

ユーザーがログイン画面から自ら新規登録を行えるかどうかを設定します。

- 有効：ログイン画面に「新規登録はこちら」リンクが表示されます。
- 無効：管理者による招待が必要になります。

## 信頼済みデバイスの記憶

:::info
この機能は、SaaSアプリケーションに**多要素認証（MFA）機能を実装している場合**にのみ有効です。  
具体的なAPIの使い方や実装例は、[多要素認証の実装](/ja/docs/part-6/implementation-guide/sample-application/multi-factor-authentication) を参照してください。
:::

ユーザーの信頼済みデバイスを記憶するかどうかを設定します。  
多要素認証を設定しているユーザーの信頼済みデバイスが記憶されていると、2回目以降のログイン時に多要素認証をスキップすることができます。

### 設定画面
![remember-trusted-devices](/ja/img/part-4/user-authz-settings/authentication-method-settings/remember-trusted-devices.png)

**利用可能な設定オプションは以下の通りです。**  

| オプション               | 動作概要 |
|------------------------|------------------------------------------------------|
| **常に記憶する**     | ユーザーのデバイスは**すべて自動的に記憶**され、2回目以降のログイン時には多要素認証の入力がスキップされます。 |
| **ユーザーオプトイン** | ログイン画面で **「記憶する」** のチェックボックスを選択できるようになります。<ul><li>チェックを入れたデバイスのみ記憶されます。</li><li>次回以降のログイン時に多要素認証の入力がスキップされます。</li></ul> |
| **記憶しない**       | **毎回のログイン時に多要素認証の入力が必要** となります。 |
