---
title: "イベントサンプル"
slug: "event-sample"
excerpt: ""
hidden: false
createdAt: "Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 19 2026 02:26:00 GMT+0000 (Coordinated Universal Time)"
---
テナント、ユーザー作成時にAmazon EventBridge に連携されたイベントのサンプルとなります。  
APIのリクエストの情報とレスポンスの情報を確認することができます。

:::note
イベントメッセージの項目について、既存項目の削除や項目名の変更、値の形式変更は基本的に実施しませんが、SaaSus Platformの機能追加などにより項目が追加される場合があります。項目の追加が発生することを前提とした実装を行ってください。
:::

:::caution
Amazon EventBridge 連携機能を利用してSaaS側のDBにデータ連携を行う場合、イベントメッセージの `time` 項目を用いた処理順序の制御を実装してください。  
イベントメッセージ連携による非同期処理のため、例えばユーザー作成→ロール付与という順序で操作を行った場合でも、SaaS側でロール付与→ユーザー作成の順にイベントが処理される可能性があります。以下の実装イメージを参考に、正しい順序でデータが反映されるよう制御してください。

1. イベント連携の `time` 項目をデータベースに保管する
2. 次回のイベント処理時に、イベント連携の `time` とデータベースに保管した日時を比較し、イベント連携の日時が新しい場合のみ処理を行う
:::

# create_tenant

作成したテナント情報が`response_body`に設定されます。  
APIリファレンス : <a href="/ja/docs/reference/auth-api#tag/tenant/operation/CreateTenant" target="_blank">Create Tenant</a>

```json
{
    "version": "0",
    "id": "71e793dd-3177-ac6b-7baf-ae54615a3bb3",
    "detail-type": "api_call",
    "source": "aws.partner/saasus.io/d8753ef8-8604-4b7d-8a44-cf9a64433209-1/event",
    "account": "899411123005",
    "time": "2026-05-19T02:22:58Z",
    "region": "ap-northeast-1",
    "resources": [],
    "detail": {
        "event_type": "create_tenant",
        "event": "{\"log_id\":\"5270362b-fb34-4b71-bb4c-f5bfaf24415d\",\"date_time\":\"2026-05-19T02:22:58Z\",\"date\":\"2026-05-19\",\"ttl\":\"2033-05-19T02:22:58Z\",\"http_status\":\"201\",\"uri\":\"/v1/auth/tenants\",\"ip_address\":\"127.0.0.1:44896\",\"referer\":\"https://saasadmin.console.saasus.io/tenants\",\"request_method\":\"POST\",\"saas_id\":\"sample_saas_id_sample\",\"api_key\":\"sample_api_key_sample\",\"request_body\":\"{\\\"attributes\\\":{\\\"memo\\\":\\\"AmazonEventBridgeTest\\\"},\\\"back_office_staff_email\\\":\\\"AmazonEventBridgeTest@example.com\\\",\\\"name\\\":\\\"AmazonEventBridgeTest\\\"}\",\"response_body\":\"{\\\"attributes\\\":{\\\"memo\\\":\\\"AmazonEventBridgeTest\\\"},\\\"back_office_staff_email\\\":\\\"AmazonEventBridgeTest@example.com\\\",\\\"id\\\":\\\"fc84307d-e285-4854-8c16-21a6871a2a13\\\",\\\"name\\\":\\\"AmazonEventBridgeTest\\\",\\\"plan_histories\\\":[]}\"}",
        "trace_id": "6aae5af4-7ee4-4de3-bd1d-5ebf13767cbf"
    }
}
```

# create_saas_user

作成したユーザー情報が`response_body`に設定されます。  
APIリファレンス : <a href="/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser" target="_blank">Create SaaS User</a>

```json
{
    "version": "0",
    "id": "ef78f744-c0b6-1328-990a-cb3c7a389f29",
    "detail-type": "api_call",
    "source": "aws.partner/saasus.io/d8753ef8-8604-4b7d-8a44-cf9a64433209-1/event",
    "account": "899411123005",
    "time": "2026-05-19T01:55:23Z",
    "region": "ap-northeast-1",
    "resources": [],
    "detail": {
        "event_type": "create_saas_user",
        "event": "{\"log_id\":\"1e925d22-f84e-4f49-871d-b793d3005535\",\"date_time\":\"2026-05-19T01:55:23Z\",\"date\":\"2026-05-19\",\"ttl\":\"2033-05-19T01:55:23Z\",\"http_status\":\"201\",\"uri\":\"/v1/auth/users\",\"ip_address\":\"127.0.0.1:48282\",\"referer\":\"https://saasadmin.console.saasus.io/users\",\"request_method\":\"POST\",\"saas_id\":\"sample_saas_id_sample\",\"api_key\":\"sample_api_key_sample\",\"request_body\":\"{\\\"email\\\":\\\"AmazonEventBridgeTest@example.com\\\",\\\"password\\\":\\\"xxxxx\\\"}\",\"response_body\":\"{\\\"attributes\\\":{},\\\"email\\\":\\\"AmazonEventBridgeTest@example.com\\\",\\\"id\\\":\\\"66ccc133-67ea-4be4-9c1d-7bddf325a790\\\",\\\"sign_in_id\\\":\\\"\\\"}\"}",
        "trace_id": "e6295edf-039f-4296-bdad-6d2409d1ad0d"
    }
}
```

各APIの内容は、<a href="/ja/docs/reference/getting-started-with-your-api" target="_blank">APIリファレンス</a>を確認してください。
