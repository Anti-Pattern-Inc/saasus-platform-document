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
<https://www.youtube.com/watch?v=deSkPJ-zTgw>

## SaaSus Platform の準備

### SaaSus Platform アカウントの作成

まずは SaaSus Platform のアカウントを作成しましょう。

新規登録画面を表示し、ご自身のメールアドレスを用いて新規登録を行います

<https://auth.saasus.io/sign-up>

メールアドレスと希望するパスワードを入力し、利用規約とプライバシーポリシーを読んでいただき同意していただける場合はチェックを入れ、新規登録ボタンを押します

![01](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-01.png)

入力したメールアドレスに検証コードが届くので、それを入力してアカウントを有効化します

![02](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-02.png)

検証が完了するとログイン画面が表示されます

先ほど登録していただいたメールアドレスとパスワードを入れてログインします。

![03](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-03.png)

はじめて SaaSus Platform に登録した時には、登録していただいた方専用のテナントを作成します。これは、お客様専用の AWS アカウントを作成しているため、最短で１時間ほどお時間がかかります。アカウント作成が完了次第、先ほどのメールアドレスにご案内が届きます。

![04](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-04.png)

### コンソールへのログイン

テナントが作成されたのちに、ログインを行うと、このようにユーザ属性の入力が求められますので、会社名、名前を入力してください。

![05](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-05.png)

入力後テナントの各コンソールへの遷移画面が表示されます。

![06](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-06.png)

**SaaS 開発コンソール**は、SaaS 構築のための設定を行うコンソールで、

**SaaS 管理コンソール**は、SaaS を運用していくためのコンソールになります。

詳細は後ほど説明しますが、まずは SaaS 作成の設定を行いたいので、**SaaS 開発コンソール**にログインします。

### ドメイン名の設定

※ドメイン名をお持ちで無い方は、この項目はスキップして[次に行っていただいて大丈夫です。](#認証後の遷移先-url-の設定)

SaaS 開発コンソールにログインしたら、まずは SaaS で使うドメイン名を登録します。サイドメニューの「ドメイン」をクリックし、ドメイン登録画面を表示します。このドメイン名は、ログイン画面やメール送信のベースドメインとして利用します。このあと DNS レコードを作成していただくので、**ご自身で操作可能なドメイン名**を登録してください。

![07](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-07.png)

ドメイン名を登録していただくと、数秒後画面下部に DNS 検証（確かにそのドメイン名を所有しているということの確認）を行うために、CNAME レコードが表示されます。こちらの値をご自身の DNS に登録してください。

![08](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-08.png)

例えば、Value Domain にてドメインを管理している場合は、以下のような設定を行います。

![09](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-09.png)

ご自身の DNS に登録していただいた後に、数分経つと検証が完了し、「以下の DNS 情報が検証され、正常に動作中です。」と表示されます。これで SaaSus Platform の設定をするための前準備が整いました。

![10](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-10.png)

このドメインをベースに、SaaSus Platform がログイン画面を自動生成します。

### 認証後の遷移先 URL の設定

いま設定したドメイン名をベースに SaaSus Platform はログイン画面を生成します。このログイン画面を経てログインしたのちに、SaaS 側に認証情報を引き継ぎます。この引き継ぎ先の SaaS の URL を Callback URL として登録する必要があります。

サイドメニューの「認証後遷移先」をクリックし、Callback URL 設定画面を表示します。

通常は SaaS を提供している URL をベースに Callback URL を設定します。今回はサンプルアプリケーションをローカルで動かしてみますので、以下のように設定します。

<http://localhost/callback>

![11](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-11.png)

### SaaS ID, API キーの確認

次に、SaaS 実装時に利用する、「SaaS ID」と「API キー」を確認しておきます。

「SaaS ID」は、デフォルトで発行されています。このまま利用しても良いですし、「SaaS ID の再発行」ボタンを押して再発行して使っていただくことも可能です。

「API キー」は初期では発行されていないので、「API キーの発行」ボタンを押して１つ発行します。

※実際に SaaS 運用が始まったあとに、「SaaS ID の再発行」を行った場合は、SaaS アプリケーション側に設定している SaaS ID も修正が必要になりますので注意してください。

これらの情報は、あとからもこの画面で確認可能ですので、いま覚えていただかなくても大丈夫です。  
(セキュリティ強化のため、API キーはあとから確認できなくなる予定です)

![12](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-12.png)

### ログイン画面など認証系画面のカスタマイズ

次に、先ほど生成されたログイン画面類のカスタマイズを行います。

サイドメニューの「認証詳細設定」をクリックします

![13](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-13.png)

基本情報では、認証系画面で利用される各種情報を編集します。

たとえば、先ほどのログイン画面でいうと、

- 「SaaSus Platform へようこそ」の部分が**サービス名**
- 上部のアイコンが**アイコンアップロード**
- 利用規約 URL、プライバシーポリシー URL が**利用規約、プライバシーポリシーのリンク先**  
  となります。

![14](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-14.png)

変更を適用するために「保存」ボタンをクリックします

「画面設定」タブでは、新規登録画面、ログイン画面、パスワード変更画面の各画面に、利用規約とプライバシーポリシーを表示するかを選択できます。

「認証設定」タブでは、各種詳細な認証設定が行なえます

ここまで設定が完了すると、先ほど設定したドメイン名に “auth.” をつけた URL にてログイン画面が生成されます。実際にログイン画面が表示できるか確認してみましょう

※変更を保存すると、新しいログイン画面が生成されます。生成には数分かかりますので、最後に保存した内容を確認するためには数分後にアクセスしてみてください。

ログイン画面は、さきほど設定したドメイン名の頭に “auth.” をつけた URL で生成されます。

たとえば、ドメイン名を “sample.saasus.jp” で設定した場合は、 <https://auth.sample.saasus.jp/>にてログイン画面が提供されます。

ログイン画面が確認できたら、SaaSus コンソールに戻りましょう

### ユーザに追加属性を定義する

次に、ユーザ属性を定義します。

サイドメニューの「ユーザ属性定義」をクリックします。

![15](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-15.png)

SaaSus Platform 上では、初期状態では管理する SaaS のユーザはユーザ ID(UUID)とメールアドレスしか持っていません。これで足りない場合は、ユーザに追加の属性を持たせることができます。

SaaS 設計者は、ユーザに関するどの属性を SaaSus Platform 側でもち、どの属性を SaaS 側で持つかの分担を考える必要があります。

たとえば、すべてのユーザ情報を SaaSus Platform 側で管理したい場合は、必要な追加属性を SaaSus Platform に定義します。しかし、個人情報などの重要な情報は SaaSus Platform 側で管理したくなかったり、ユーザの追加属性をもとに各種集計を行いたい場合などがあります。その場合には、SaaSus Platform 側には認証だけを求め、ユーザ情報の管理は SaaS 側でユーザマスタをベースに行い、UUID を SaaSus Platform 側の認証情報と紐付ける方が柔軟に対応できます。

今回はサンプルアプリケーションでユーザ名が必要になるので、「ユーザー名」という属性を定義してみます。

「＋ユーザ属性の作成」ボタンをクリックすると、ユーザ属性作成のポップアップが表示されます

属性名は、SaaS アプリケーション(プログラム)側で識別するためのキーとして使います。そのため、英字で入力しておくのが無難です。

表示名は、その属性がどういうものか？をわかるように記載します。

タイプは、データ型を指定します。

今回はサンプルアプリケーションのために、以下で設定します

- 属性名： username
- 表示名： ユーザー名
- タイプ： 文字列

入力したら、「作成」ボタンを押します

![16](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-16.png)

ユーザー属性が追加されました。

![17](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-17.png)

### テナントに追加属性を定義する

次に「テナント属性定義」をクリックして、テナントの追加属性を定義します。

ここで言うテナントとは、マルチテナント SaaS におけるテナントの意味を表しています。つまり、SaaS 利用者の組織の単位（契約の単位）をテナントと呼びます。

各テナントで必要になりそうな追加属性を定義しておきます。

ユーザー属性の時と同じように、「＋テナント属性の作成」をクリックして追加します。

今回は、そのテナントに対するメモを書けるようにしてみます。

- 属性名： memo
- 表示名： メモ
- タイプ： 文字列

入力したら、「作成」ボタンを押します

![18](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-18.png)

テナント属性が追加されました。

![19](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-19.png)

### 役割の定義

次に、役割を定義していきます。

この役割は、各種 SaaS における役割（ロール）になり、認可のベースとして利用します。

たとえば、テナントごとの管理者権限を持つ場合には、admin のような役割を定義し、一般利用者の場合は user のような役割を付与します。

今回は、サンプルアプリケーションのために、admin, user を定義していきます。

「＋役割の作成」ボタンをクリックして、役割の作成ポップアップを表示します。

役割名は、SaaS アプリケーション側で役割を識別するために使います。

表示名は、その役割がどういうものか？をわかるように記載します。

まずは一般利用者を追加しましょう。

- 役割名: user
- 表示名: 一般利用者


![21](/ja/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-21.png)

これでマルチテナント SaaS を作る準備ができました。

では、次に**SaaS 運用コンソール**に切り替えて、SaaS のテナントやユーザ作成を行ってみましょう！
