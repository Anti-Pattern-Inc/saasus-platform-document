---
title: "Event Samples"
slug: "event-sample"
excerpt: ""
hidden: false
createdAt: "Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 19 2026 02:26:00 GMT+0000 (Coordinated Universal Time)"
---
These event samples are associated with Amazon EventBridge when creating tenants and users. You can check the information of both API request and response.

:::note
Existing fields in event messages will not be removed, renamed, or have their value formats changed as a general rule. However, new fields may be added due to feature enhancements in SaaSus Platform. Please implement your integration with the assumption that new fields may be added.
:::

:::caution
When synchronizing data to your SaaS application's database using the Amazon EventBridge integration, implement processing order control using the `time` field in the event message.  
Because event message integration is asynchronous, even if operations are performed in the order of user creation → role assignment, events may be processed on the SaaS side in the order of role assignment → user creation. Refer to the following implementation example to ensure data is applied in the correct order:

1. Store the `time` field from the event message in your database
2. On subsequent event processing, compare the event's `time` with the stored timestamp and only process the event if its `time` is newer
:::

## create_tenant

The created tenant information is set as `response_body`. API reference: <a href="/docs/reference/auth-api#tag/tenant/operation/CreateTenant" target="_blank">Create Tenant</a>

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

## create_saas_user

The created user information is set as `response_body`. API reference: <a href="/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser" target="_blank">Create SaaS User</a>

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

For the details of each API, please check the <a href="/docs/reference/getting-started-with-your-api" target="_blank">API reference</a>.
