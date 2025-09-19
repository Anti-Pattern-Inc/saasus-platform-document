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
      <td className="text-left">サポートまで<br />お問い合わせください</td>
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

詳細な手順については[こちら](./aws-marketplace-subscription-procedure)をご参照ください。
