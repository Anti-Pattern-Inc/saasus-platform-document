---
sidebar_position: 3
title: "認証の設定"
slug: "authentication-preference"
---

### SaaS 利用者テナントの作成

ではまず、サンプルアプリケーション用に、テナントを２つ作成してみましょう

サイドメニューの「テナント管理」をクリックします

![03](/ja/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-03.png)

「テナント作成」ボタンをクリックしてポップアップを表示します

テナント名・代表者ユーザーの追加・代表者メールアドレス・代表者の仮パスワード、その他に[チュートリアル＞SaaSusPlatformの準備＞テナントに追加属性を定義する」](./prepare-saas-platform#ユーザに追加属性を定義する)に追加したテナント属性が表示されます


１つ目

- 名前：テナントサンプルその１
- メモ：テナント属性で定義した属性情報となり、自由に設定可能となります
- 代表ユーザーの追加：新規でユーザーを作成
- 代表者メールアドレス： [saasus-sample-tenant1@example.com](mailto:saasus-sample-tenant1@example.com)
- 代表者のパスワード： G@2qYPQq などパスワード要件を満たすもの

![04](/ja/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-04.png)

２つ目

- 名前：サンプルアプリテナント２
- メモ：テナント属性で定義した属性情報となり、自由に設定可能となります
- 代表ユーザーの追加：新規でユーザーを作成
- 代表者メールアドレス： [saasus-sample-tenant2@example.com](mailto:saasus-sample-tenant2@example.com)
- 代表者のパスワード： irG_l88r などパスワード要件を満たすもの

（特に決まりではないので、他の値を入れていただいても OK です）

![05](/ja/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-05.png)

これで、テナントの作成と、そのテナントに属する各１名のユーザーが作成されました。

### SaaS 利用ユーザーの作成

では、ユーザー一覧を見てみましょう。サイドメニューから「ユーザー管理」をクリックします。

先ほど作成したユーザーが、各テナント、各環境の admin（SaaS 管理者）の役割として登録されています。

![06](/ja/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-06.png)

SaaSus Platform では、SaaS 利用者のテナントに「環境」という概念が利用できます。

たとえば、Stripe のように API をメインで使う SaaS では、SaaS 利用者は連携のテストや開発時用の環境が必要になります。これらを行うために dev という環境を使い、実際の運用では prod という環境を使うというように SaaS 管理者は複数の環境を定義することができるようになっています。

※もちろん SaaS によっては、複数環境が不要な場合もありますので、単一環境を使う場合は prod だけ意識していただければ大丈夫です。

では、各テナントごとに１名づつユーザーを登録してみましょう

右上の「ユーザ作成」ボタンをクリックし、ポップアップを出します

とりあえず、4 名登録してみましょう

メールアドレス: [user1-1@example.com](mailto:user1-1@example.com)  
パスワード： パスワード要件を満たすもの  
テナント： テナントサンプルその１  
ユーザ名： ユーザ 1-1

![07](/ja/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-07.png)

メールアドレス: [user1-2@example.com](mailto:user1-2@example.com)  
パスワード： パスワード要件を満たすもの  
テナント： テナントサンプルその１  
ユーザ名： ユーザ 1-2

メールアドレス: [user2-1@example.com](mailto:user2-1@example.com)  
パスワード： パスワード要件を満たすもの  
テナント： サンプルアプリテナント２  
ユーザ名： ユーザ 2-1

メールアドレス: [user2-2@example.com](mailto:user2-2@example.com)  
パスワード： パスワード要件を満たすもの  
テナント： サンプルアプリテナント２  
ユーザ名： ユーザ 2-2

![08](/ja/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-08.png)

4 名追加でユーザ登録できました。

では、これらのユーザーに役割を追加してみましょう。
