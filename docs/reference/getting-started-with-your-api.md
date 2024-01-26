---
title: "Getting Started"
slug: "getting-started-with-your-api"
excerpt: "This page will help you get started with SaaSus API."
hidden: false
createdAt: "Thu Jul 21 2022 04:42:58 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:43:51 GMT+0000 (Coordinated Universal Time)"
---
SaaSus APIを呼ぶには、署名 が必要です。

Authorization Header:  
SAASUSSIGV1 Sig=署名, SaaSID=SaaS ID, APIKey=API Key 

署名=日時情報+API Key+HTTPメソッド+URL(Host:Port/URI)+Request Body  
日時情報： YYYYMMDDHHNN (UTCで分までの情報)  
上記情報を Secret Key で HMAC-SHA256 を求めてそれを署名とする

全てのAPIレスポンスには、 X-Saasus-Trace-Id ヘッダが付きます。これを利用してAmazon EventBridge連携時にAPIのトレースが可能になるようになっています。  
X-Saasus-Trace-Id ヘッダは、リクエスト時に指定することも出来ます。リクエスト時に指定すると、その Trace ID を引き継ぎます。

A signature is required to call the SaaSus API.

Authorization Header:  
SAASUSSIGV1 Sig=Signature, SaaSID=SaaS ID, APIKey=API Key

Signature = date and time information + API Key + HTTP method + URL (Host: Port/URI) + Request Body  
Date and time information: YYYYMMDDHHNN (minute information in UTC)  
Obtain HMAC-SHA256 with the above information as a secret key and use it as a signature

All API responses have an "X-Saasus-Trace-Id" header. This is used to enable API tracing during Amazon EventBridge integration.  
"X-Saasus-Trace-Id" header can also be specified at request time. If specified at request time, the Trace-Id is inherited.

API  
[SaaSus Auth API Schema](https://docs.saasus.io/reference/getuserinfo)  
ユーザ情報、基本情報、認証情報、テナント情報、役割(ロール)情報などに関するAPI  
(APIs related to user information, basic information, authentication information, tenant information, role information, etc.)

[SaaSus Billing API Schema](https://docs.saasus.io/reference/getstripeinfo)  
請求業務で使う外部SaaSとの連携情報の取得・更新・削除に関するAPI  
(API for acquiring, updating, and deleting information linked with external SaaS used in billing operations)

[SaaSus Pricing API Schema](https://docs.saasus.io/reference/getpricingunits)  
プライシングユニット、機能メニュー、料金プラン、メータリングユニットカウントなど料金に関連するAPI  
(Pricing-related APIs such as pricing units, feature menus, rate plans, metering unit counts, etc.)

[SaaSus Integration API Schema](https://docs.saasus.io/reference/geteventbridgesettings)  
Amazon EventBridge 連携に関連するAPI  
(APIs related to Amazon EventBridge integration)
