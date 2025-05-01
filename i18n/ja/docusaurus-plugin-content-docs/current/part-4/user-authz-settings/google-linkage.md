---
title: "Google連携"
slug: "google-linkage"
excerpt: ""
hidden: false
createdAt: "Sun May 21 2023 05:12:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## 概要説明

Google連携を行うためには、Google Cloud PlatformのアカウントにOAuthクライアントを作成し、SaaSusと連携する設定を実施する必要があります。  
SaaSusとの連携設定を行うことで、SaaSusのログイン画面に「Googleでログイン」のボタンが表示され、Google連携を利用することが出来るようになります  
注意点として、一般公開するためにはGoogleに利用申請を行う必要があります。申請後の審査に1週間程度の時間を要します。（不備がある場合はメールで連絡があるので、対応を実施してください）

Google連携の手順

- Google Cloud PlatformのOAuthクライアント作成
- Google Cloud PlatformとSaaSusアカウントの連携
- Google認証の動作確認
- 利用申請

### Google Cloud PlatformのOAuthクライアント作成

#### Google連携用の情報を確認

SaaSus管理コンソールにログイン  
認証詳細設定画面を開く  
認証設定タブのGoogle連携を確認する

![google-linkage-1](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-1.png)

以下の項目がGoogleのOAuthクライアント作成時に必要なのでメモします

- 承認済みの JavaScript 生成元
- 承認済みのリダイレクト URI

![google-linkage-2](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-2.png)

#### OAuthの利用に同意

Google連携を管理するための、Google Cloud Platformアカウントにログイン（Google Cloud Platformがない場合は作成してください）

Google連携用に新しいプロジェクトを作成

<a href="https://console.cloud.google.com/projectcreate?previousPage=%2Fprojectselector2%2Fhome%2Fdashboard%3Fhl%3Dja%26organizationId%3D0%26supportedpurview%3Dproject&organizationId=0&hl=ja&supportedpurview=project" target="_blank">新しいプロジェクト</a>を開いて、新規プロジェクトを作成します  
プロジェクト名：GoogleOAuth（任意のわかりやすいもので大丈夫です）

![google-linkage-3](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-3.png)


「APIとサービス」 - 「OAuth同意画面」を開く

![google-linkage-4](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-4.png)


User Typeで「外部」を選択し、「作成」ボタンを押す

![google-linkage-5](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-5.png)


以下のとおり入力し、「保存して次へ」ボタンを選択

- アプリ名：GoogleOAuth
- ユーザーサポートメール：任意のメールアドレス
- デベロッパーの連絡先情報：任意のメールアドレス

![google-linkage-6](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-6.png)


「保存して次へ」を選択

![google-linkage-7](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-7.png)


テストユーザーを追加し、「保存して次へ」を選択  
公開ステータスが「テスト中」の場合は、ここで設定したユーザのみでログインすることが可能です

![google-linkage-8](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-8.png)


#### OAuthクライアントの作成

「APIとサービス」 - 「認証情報」を開く

![google-linkage-9](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-9.png)


「認証情報を作成」 - 「OAuthクライアントID」を選択

![google-linkage-10](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-10.png)


以下のとおり入力し、「作成」ボタンを選択

- アプリケーションの種類：ウェブアプリケーション
- 名前：GoogleOAuth（任意のわかりやすいもので大丈夫です）
- 承認済みのJavaScript生成元：＜SaaSus管理コンソールで確認した値＞
- 承認済みのリダイレクトURI：＜SaaSus管理コンソールで確認した値＞

![google-linkage-11](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-11.png)


OAuthクライアントが作成されました  
以下の項目をSaaSus管理コンソールに設定するのでメモします  
※「JSONをダウンロード」を選択し、ダウンロードして保管することをおすすめします

- クライアントID
- クライアントシークレット

![google-linkage-12](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-12.png)


### Google Cloud PlatformとSaaSusアカウントの連携

以下のとおり入力し、「保存」ボタンを選択

- クライアントID：＜OAuthクライアント作成後に画面で確認した値＞
- クライアントシークレット：＜OAuthクライアント作成後に画面で確認した値＞

![google-linkage-13](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-13.png)


「連携済み」と表示されていれば完了です

![google-linkage-14](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-14.png)


### Google認証の動作確認

ログイン画面に表示される「Googleでログイン」ボタンの動作確認をしていきます

![google-linkage-15](/ja/img/part-4/user-authz-settings/google-linkage/google-linkage-15.png)


「Googleでログイン」の動作について

- 表示される画面
  - ログイン画面
  - 新規登録画面（セルフサインアップを有効にしている場合）
- Googleでログイン時の動作
  - セルフサインアップを有効にしている場合  
    アカウントが存在しない場合はアカウントが自動的に作成され、ログインされます
  - セルフサインアップを有効にしていない場合  
    アカウントが存在しない場合はログインされません

### 利用申請

準備中
