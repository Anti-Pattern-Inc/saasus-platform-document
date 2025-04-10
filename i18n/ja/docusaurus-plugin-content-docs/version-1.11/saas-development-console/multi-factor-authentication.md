---
title: "多要素認証の設定"
slug: "multi-factor-authentication"
excerpt: ""
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
---

SaaSus PlatformおよびSaaSアプリケーションでの多要素認証（MFA）の設定手順について説明します。

# SaaSus Platformアカウントへの多要素認証の設定手順

1. 開発コンソールのヘッダー右にあるユーザーメニューをクリックします。
2. `多要素認証の設定`をクリックします。
3. `デバイスを追加`ボタンをクリックします。  
   ![multi-factor-authentication-1](/ja/img/saas-development-console/multi-factor-authentication-1.png)

4. `QRコードを表示する`をクリックして、QRコードを表示します。  
   ![multi-factor-authentication-2](/ja/img/saas-development-console/multi-factor-authentication-2.png)

5. 表示されたQRコードを、Google Authenticator、またはAuthyアプリでスキャンします。

6. アプリで生成された6桁のコードを入力し、`認証`をクリックします。

7. 多要素認証が有効になると、次回以降のログイン時に認証コードの入力が求められます。

---

# SaaSアプリケーションへの多要素認証の実装

SaaSアプリケーションに多要素認証を導入するには、以下の手順が必要です。

**多要素認証の実装**  
SaaSアプリケーションで多要素認証を有効にするには、多要素認証の追加プロセスを組み込む必要があります。
具体的なAPIの利用方法やコードの実装については、<a href="/ja/docs/implementation-guide/implementing-mfa-apiserver" target="_blank">多要素認証の実装（APIサーバ）</a>ページをご参照ください。

**信頼済みデバイスの記憶**  
ユーザーの信頼済みデバイスを記憶するかどうかを設定します。  
多要素認証を設定しているユーザーの信頼済みデバイスが記憶されていると、2回目以降のログイン時に多要素認証をスキップすることができます。

> **設定方法**  
> 信頼済みデバイスの記憶は、**開発コンソールの認証詳細設定メニューの認証設定タブ** で変更できます。  
> ![multi-factor-authentication-3](/ja/img/saas-development-console/multi-factor-authentication-3.png)

**利用可能な設定オプションは以下の通りです。**  

| オプション               | 動作概要 |
|------------------------|------------------------------------------------------|
| **常に記憶する**     | ユーザーのデバイスは**すべて自動的に記憶**され、2回目以降のログイン時には多要素認証の入力がスキップされます。 |
| **ユーザーオプトイン** | ログイン画面で **「記憶する」** のチェックボックスを選択できるようになります。<ul><li>チェックを入れたデバイスのみ記憶されます。</li><li>次回以降のログイン時に多要素認証の入力がスキップされます。</li></ul> |
| **記憶しない**       | **毎回のログイン時に多要素認証の入力が必要** となります。 |
