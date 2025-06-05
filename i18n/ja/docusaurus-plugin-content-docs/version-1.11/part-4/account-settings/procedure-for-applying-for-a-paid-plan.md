---
title: "有料プランの申し込み手順"
slug: "procedure-for-applying-for-a-paid-plan"
excerpt: ""
hidden: false
createdAt: "Thu Jul 20 2023 04:44:09 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 09 2024 10:27:04 GMT+0000 (Coordinated Universal Time)"
---

SaaSus Platformでは以下プランを現在用意しております。  
有料プランを申し込むには、SaaSus Platform コンソールでの申し込みと、AWS Marketplace で申し込む方法がございます。

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th rowspan="2">プラン</th>
      <th rowspan="2">月額料金<br />（税別）</th>
      <th rowspan="2">環境数</th>
      <th rowspan="2">ユーザー数</th>
      <th rowspan="2">テナント数</th>
      <th rowspan="2">ログの<br />保持期間</th>
      <th rowspan="2">IP制限<br />設定数</th>
      <th colspan="2">Smart API Gateway</th>
      <th rowspan="2">サポート連絡手段</th>
      <th rowspan="2">サポート対応範囲</th>
      <th rowspan="2">サポートレベル</th>
    </tr>
    <tr>
      <th>呼び出しあたりの料金</th>
      <th>アップロード回数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>フリー</td>
      <td className="text-right">¥0</td>
      <td className="text-right">1</td>
      <td className="text-right">5</td>
      <td className="text-right">5</td>
      <td className="text-right">7 日</td>
      <td className="text-right">1 個</td>
      <td>無料</td>
      <td>3/week</td>
      <td>問い合わせ<br />管理画面</td>
      <td>SaaSus Platformの機能についての<br />一般的な回答</td>
      <td>ベストエフォート<br />製品に関するサポートのみ</td>
    </tr>
    <tr>
      <td>スターター</td>
      <td className="text-right">¥5,500<br />MAU1人あたり¥800</td>
      <td className="text-right">3</td>
      <td className="text-right">無制限</td>
      <td className="text-right">5</td>
      <td className="text-right">7 日</td>
      <td className="text-right">1 個</td>
      <td>1万コールまでは無料<br />それ以降20円/1万コール</td>
      <td>7/week</td>
      <td>問い合わせ<br />管理画面</td>
      <td>SaaSus Platformの機能についての<br />一般的な回答</td>
      <td>ベストエフォート<br />製品に関するサポートのみ</td>
    </tr>
    <tr>
      <td>スタンダード</td>
      <td className="text-right">¥100,000</td>
      <td className="text-right">3</td>
      <td className="text-right">300</td>
      <td className="text-right">20</td>
      <td className="text-right">90 日</td>
      <td className="text-right">1 個</td>
      <td>1万コールまでは無料<br />それ以降15円/1万コール</td>
      <td>7/day までは無料<br />それ以降50円/1回</td>
      <td>Slack Connect</td>
      <td>SaaS固有の事情を考慮した、<br />SaaSus Platform活用方法の相談事項への回答</td>
      <td>ベストエフォート<br />製品に関するサポートのみ</td>
    </tr>
    <tr>
      <td>スタンダードプラス</td>
      <td className="text-right">¥600,000</td>
      <td className="text-right">3</td>
      <td className="text-right">300</td>
      <td className="text-right">20</td>
      <td className="text-right">90 日</td>
      <td className="text-right">1 個</td>
      <td>1万コールまでは無料<br />それ以降15円/1万コール</td>
      <td>7/dayまでは無料<br />それ以降50円/1回</td>
      <td>Slack Connect<br />オンラインmeeting</td>
      <td>SaaS固有の事情を考慮した、<br />SaaSus Platform活用方法の相談事項への回答<br />サンプル等を用いた設計・実装支援</td>
      <td>ベストエフォート<br />アーキテクチャ設計支援など含む</td>
   </tr>
    <tr>
      <td>アドバンスド</td>
      <td className="text-right">¥300,000</td>
      <td className="text-right">3</td>
      <td className="text-right">300,000</td>
      <td className="text-right">100</td>
      <td className="text-right">5 年</td>
      <td className="text-right">50 個</td>
      <td>1万コールまでは無料<br />それ以降10円/1万コール</td>
      <td>20/dayまでは無料<br />それ以降30円/1回</td>
      <td>Slack Connect</td>
      <td>SaaS固有の事情を考慮した、<br />SaaSus Platform活用方法の相談事項への回答</td>
      <td>ベストエフォート<br />製品に関するサポートのみ</td>
    </tr>
    <tr>
      <td>アドバンスドプラス</td>
      <td className="text-right">¥800,000</td>
      <td className="text-right">3</td>
      <td className="text-right">300,000</td>
      <td className="text-right">100</td>
      <td className="text-right">5 年</td>
      <td className="text-right">50 個</td>
      <td>1万コールまでは無料<br />それ以降10円/1万コール</td>
      <td>20/dayまでは無料<br />それ以降30円/1回</td>
      <td>Slack Connect<br />オンラインmeeting</td>
      <td>SaaS固有の事情を考慮した、<br />SaaSus Platform活用方法の相談事項への回答<br />サンプル等を用いた設計・実装支援</td>
      <td>ベストエフォート<br />アーキテクチャ設計支援など含む</td>
    </tr>
    <tr>
      <td>エンタープライズ</td>
      <td className="text-right">¥1,200,000円<br />or<br />MRRの3.7%の高い方</td>
      <td className="text-right">3</td>
      <td className="text-right">無制限</td>
      <td className="text-right">無制限</td>
      <td className="text-right">7 年</td>
      <td className="text-right">5,000 個</td>
      <td>1万コールまでは無料<br />それ以降7円/1万コール</td>
      <td>20/dayまでは無料<br />それ以降20円/1回</td>
      <td>Slack Connect<br />オンラインmeeting</td>
      <td>SaaS固有の事情を考慮した、<br />SaaSus Platform活用方法の相談事項への回答<br />サンプル等を用いた設計・実装支援</td>
      <td>ベストエフォート<br />アーキテクチャ設計支援など含む</td>
    </tr>
  </tbody>
</table>
</div>

***

## SaaS開発コンソールから有料プランの申し込み

SaaSus Platformコンソールにログインいただき、SaaS開発コンソール、アカウント設定->料金プランをページにて有料プランの申し込みとなります。  
期間は本日から１ヶ月単位となりStripeにて請求書を送付いたします。  
本プランは１ヶ月単位の自動継続となります。

![0558e63-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/0558e63-image.png)



## AWS Marketplaceから有料プランの申し込み

:::warning
AWS Marketplaceにて購入を希望される方は、Private Offerでのご契約となります。サポートまでお問い合わせください
:::

AWS Marketplaceに製品を出品しており、そちらでも申し込みが可能です。もしAWS Marketplaceで申し込まれた場合、AWSの利用料と一緒に請求されることになります。  
<a href="https://aws.amazon.com/marketplace/pp/prodview-2gr3qw7kp5qx6?sr=0-1&ref_=beagle&applicationId=AWSMPContess" target="_blank">SaaSus Platform</a>

### 1.AWS Marketplaceの製品ページより`View purchase options`をクリックします

![f0ffc78-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/f0ffc78-image.png)

### 2.ソフトウェアの契約内容を設定します

①  契約期間を選択  
　１ヶ月/１年を選択可能

② 契約の更新設定  
　Yes:自動的に契約を更新 / No: 自動的に更新しない

③ 契約のオプション  
　Standard Planを選択

④ 契約書の作成  
　Create contract をクリック

![b2e6294-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/b2e6294-image.png)

### 3.確認ダイアログ

確認ダイアログが表示されますので`Pay now`をクリックしてください

![50544ef-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/50544ef-image.png)

### 4.契約の完了ダイアログ

契約が正常に終了すると以下のダイアログが表示されますので、`Set up your account`をクリックして次に進んでください。

![8b0f660-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/8b0f660-image.png)

**新規アカウントを作成する場合と既存アカウントに対して有料化を行う場合で手順が異なります**

新規アカウントを作成する場合、手順5-1-1  
既存アカウントを有料化する場合、手順5-2-1 を参照してください

### 5-1-1.SaaSus Platform のログイン (新規アカウントを作成)

`Set up your account`をクリック後はAWS Marketplace経由 新規登録画面に遷移します、SaaSus Platform にアカウントが存在しない場合はそのまま、アカウント名、メールアドレスを入力して新規お登録を行い画面の指示に従いアカウントを作成してください。

![915e21a-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/915e21a-image.png)

***

### 5-2-1.SaaSus Platform のログイン (既存アカウントの有料化)

`Set up your account`をクリック後はAWS Marketplace経由 新規登録画面に遷移します、SaaSus Platform にアカウントが存在する場合、`すでに登録済みでログインする方はこちら`をクリックして AWS Marketplac経由 ログイン画面へ遷移して既存のアカウントでログインします。

![a677094-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/a677094-image.png)

![f3eaabf-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/f3eaabf-image.png)

### 5-2-1.有料化を行うアカウントの選択

有料化するアカウントを選択し`このアカウントで利用を開始する`をクリックします

![e15cc67-image](/ja/img/part-4/account-settings/procedure-for-applying-for-a-paid-plan/e15cc67-image.png)
