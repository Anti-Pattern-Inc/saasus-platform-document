---
title: "Amazon EventBridge 連携機能"
slug: "integrate-with-amazon-eventbridge"
excerpt: ""
hidden: false
createdAt: "Sat Jan 21 2023 09:57:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
SaaSus Platform は、 Amazon EventBridge と統合されています。 SaaSus Platform で起こった各種イベントをパートナーイベントソースとして、 SaaS 側 AWS アカウントの Amazon EventBridge に送信することができます。これを活用することにより、 SaaSus Platform と連携したイベント駆動のアーキテクチャを採用し SaaS を構築することができます。

例えば、SaaSのテナントが作成されたときにテナントオンボーディング処理をトリガーする、ユーザが削除されたときに付随するデータを削除する処理をトリガーするなどに活用できます。現在は、全ての SaaSus API のイベントを取得することができます。各APIの内容は、<a href="/ja/docs/reference/getting-started-with-your-api" target="_blank">APIリファレンス</a>を確認してください。

また、イベントメッセージの内容は<a href="/ja/docs/part-4/integrate-with-amazon-eventbridge/event-sample" target="_blank">イベントサンプル</a>でご確認ください。

## 設定と動作の確認

<a href="https://settings.console.saasus.io/integrations/event" target="_blank">SaaS 開発コンソールのイベント連携画面</a>を開きます。

![01](/ja/img/part-4/integrate-with-amazon-eventbridge/image-01.png)

AWSアカウントID の部分には、イベント送信先のAWSアカウントID(SaaSを構築しているAWSアカウントの12桁のID)を入力します。また、通知を受け取るAWSリージョンも選択します。そして保存ボタンを押します。

![02](/ja/img/part-4/integrate-with-amazon-eventbridge/image-02.png)

上記で設定したAWSアカウント上に、パートナーイベントパスが作成されます。該当AWSアカウントにログインした後に、<a href="https://ap-northeast-1.console.aws.amazon.com/events/home#/partners" target="_blank">Amazon EventBridgeのパートナーイベントソースのコンソール</a>を開き、パートナーイベントソースが作成されていることを確認してください。

![03](/ja/img/part-4/integrate-with-amazon-eventbridge/image-03.png)

作成されたパートナーイベントソースを選択し、「イベントバスと関連付ける」を行ってください。すると、他のイベントソースと同様にイベントバスで利用することができるようになります。

![04](/ja/img/part-4/integrate-with-amazon-eventbridge/image-04.png)

次に、イベントの送信を試してみましょう。<a href="https://ap-northeast-1.console.aws.amazon.com/events/home#/rules" target="_blank">Amazon EventBridgeのバスのルールのページ</a>を開きます。ここ画面で、先ほどのパートナーイベントソースがイベントバスとして選択できる状態になっているはずです。

![05](/ja/img/part-4/integrate-with-amazon-eventbridge/image-05.png)

このイベントバスをベースにルールを作成します。以下の画面のように設定していきましょう。  
まずは、SaaSus Platformのイベントバスを選択し、ルールを作成をクリックします。各画面では、以下の画面を参考に入力してみてください。

![06](/ja/img/part-4/integrate-with-amazon-eventbridge/image-06.png)

![07](/ja/img/part-4/integrate-with-amazon-eventbridge/image-07.png)

![08](/ja/img/part-4/integrate-with-amazon-eventbridge/image-08.png)

イベントパターンの部分には、まずは全てのSaaSus Platformのイベントを取得するために、以下のパターンを記載します。「パターンを編集」ボタンをクリックし、以下のJSONを直接記載します。

![09](/ja/img/part-4/integrate-with-amazon-eventbridge/image-09.png)

![10](/ja/img/part-4/integrate-with-amazon-eventbridge/image-10.png)

```json
{
  "source": [{
    "prefix": "aws.partner/saasus.io"
  }]
}
```

今回は全てのイベントを取得していますが、もちろん特定のAPIコールに対するイベントのみの取得するようなフィルターをかけることも出来ます。

今回はどのようなイベントが届くのかを確認するために、全てのイベントを CloudWatch Logs に出力してみましょう。

![11](/ja/img/part-4/integrate-with-amazon-eventbridge/image-11.png)

![12](/ja/img/part-4/integrate-with-amazon-eventbridge/image-12.png)

全ての設定が終わったら、ルールの作成をクリックし、ルールが作成されたことを確認してください。

![13](/ja/img/part-4/integrate-with-amazon-eventbridge/image-13.png)

![14](/ja/img/part-4/integrate-with-amazon-eventbridge/image-14.png)

これでイベントを連携する準備ができましたので、テストイベントを送信してみましょう。SaaS開発コンソールに戻り、テスト送信ボタンをクリックします。

![15](/ja/img/part-4/integrate-with-amazon-eventbridge/image-15.png)

イベントが正常に届くと、CloudWatch Logsにイベントの内容が記録されているはずです。確認してみましょう。

![16](/ja/img/part-4/integrate-with-amazon-eventbridge/image-16.png)

このような形でイベントが取得できることができました。

今回はCloudWatch Logsに連携していますが、Lambdaや他のAPIなどいろいろなターゲットにイベント連携することができます。これを活用することにより、イベント駆動のアーキテクチャを適用することができるようになり、どこからSaaSus APIが呼ばれたか・いつ呼ばれたかということと、その結果何をいつすべきか、ということを分離することができます。

"detail" 項目には "trace_id" が含まれています。 これは、 SaaSus API のリクエスト時に指定したもの、もしくは自動的に生成されたものと同一なので、どのAPIコールによるイベントなのか？をトレースすることができます。
