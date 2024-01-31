---
sidebar_position: 3
---

# SaaS 運用コンソールを利用した SaaS の管理

## SaaS 運用コンソールを利用した SaaS の管理

### コンソールの切り替え

SaaS 運用コンソールでは、テナントの管理、ユーザの管理など、SaaS 運用のための機能が利用できます。

先ほどまでは、SaaSus コンソールにログインていたと思いますので、画面上部の環境ボタン(開発環境 > と書いてあるところ)をクリックして、ログイン環境選択画面に戻りましょう

![01](/ja/img/tutorial/saas-management-using-the-saas-operation-console-01.png)

そして、改めて「SaaS 運用コンソール」をクリックして、コンソールを切り替えます。

![02](/ja/img/tutorial/saas-management-using-the-saas-operation-console-02.png)

### SaaS 利用者テナントの作成

ではまず、サンプルアプリケーション用に、テナントを２つ作成してみましょう

サイドメニューの「テナント管理」をクリックします

![03](/ja/img/tutorial/saas-management-using-the-saas-operation-console-03.png)

「テナント作成」ボタンをクリックしてポップアップを表示します

テナント名・代表者ユーザーの追加・代表者メールアドレス・代表者の仮パスワード、その他に[チュートリアル＞SaaSusPlatformの準備＞テナントに追加属性を定義する」](./prepare-saas-platform#ユーザに追加属性を定義する)に追加したテナント属性が表示されます


１つ目

- 名前：テナントサンプルその１
- メモ：テナント属性で定義した属性情報となり、自由に設定可能となります
- 代表ユーザーの追加：新規でユーザーを作成
- 代表者メールアドレス： [saasus-sample-tenant1@example.com](mailto:saasus-sample-tenant1@example.com)
- 代表者のパスワード： G@2qYPQq などパスワード要件を満たすもの

![04](/ja/img/tutorial/saas-management-using-the-saas-operation-console-04.png)

２つ目

- 名前：サンプルアプリテナント２
- メモ：テナント属性で定義した属性情報となり、自由に設定可能となります
- 代表ユーザーの追加：新規でユーザーを作成
- 代表者メールアドレス： [saasus-sample-tenant2@example.com](mailto:saasus-sample-tenant2@example.com)
- 代表者のパスワード： irG_l88r などパスワード要件を満たすもの

（特に決まりではないので、他の値を入れていただいても OK です）

![05](/ja/img/tutorial/saas-management-using-the-saas-operation-console-05.png)

これで、テナントの作成と、そのテナントに属する各１名のユーザーが作成されました。

### SaaS 利用ユーザーの作成

では、ユーザー一覧を見てみましょう。サイドメニューから「ユーザー管理」をクリックします。

先ほど作成したユーザーが、各テナント、各環境の admin（SaaS 管理者）の役割として登録されています。

![06](/ja/img/tutorial/saas-management-using-the-saas-operation-console-06.png)

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

![07](/ja/img/tutorial/saas-management-using-the-saas-operation-console-07.png)

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

![08](/ja/img/tutorial/saas-management-using-the-saas-operation-console-08.png)

4 名追加でユーザ登録できました。

では、これらのユーザーに役割を追加してみましょう。

### ユーザーに役割を追加

サイドメニューの「役割管理」をクリックします

ここの画面で追加したい役割を検索します。

まずは、ユーザ 1-1, ユーザ 1-2 に「テナントサンプルその１」の「開発」の「一般利用者」の役割を付与してみましょう。

上記条件を入れて検索をクリックします。

![09](/ja/img/tutorial/saas-management-using-the-saas-operation-console-09.png)

この役割に該当するユーザがまだいないため、誰も表示されません。

では、右上の「ユーザへ役割の付与」をクリックして、役割を付与していきましょう

ユーザ 1-1, ユーザ 1-2 のメールアドレスを選択して、追加をクリックします

![10](/ja/img/tutorial/saas-management-using-the-saas-operation-console-10.png)

ユーザに役割が追加されました

同じように、ユーザ 2-1, ユーザ 2-2 に「サンプルアプリテナント２」の「開発」の「一般利用者」の役割を付与してみましょう。

ユーザ管理画面でも役割が付与されているか確認してみましょう。サイドメニューの「ユーザー管理」をクリックして確認します。

![11](/ja/img/tutorial/saas-management-using-the-saas-operation-console-11.png)

ここまでで、SaaS 運用の準備ができました。

では、いよいよ Web アプリケーションを SaaS 化していきましょう！
