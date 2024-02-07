---
title: "Event Samples"
slug: "event-sample"
excerpt: ""
hidden: false
createdAt: "Tue Oct 31 2023 07:46:13 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
These event samples are associated with Amazon EventBridge when creating tenants and users. You can check the information of both API request and response.

## create_tenant

The created tenant information is set as `response_body`. API reference: <a href="/docs/reference/auth-api#tag/tenant/operation/CreateTenant" target="_blank">Create Tenant</a>

```json
{
	"version": "0",
	"id": "4d7d3c0c-208c-3e57-00a9-77a8d1ad1c3e",
	"detail-type": "api_call",
	"source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",
	"account": "999999999999",
	"time": "2023-10-31T02:22:33Z",
	"region": "ap-northeast-1",
	"resources": [],
	"detail": {
		"event_type": "create_tenant",
		"event": {
			"log_id": "38601dc1-ceed-4561-8728-eb1f4393b317",
			"date_time": "2023-10-31T02:22:33Z",
			"date": "2023-10-31",
			"ttl": "2023-11-07T02:22:33Z",
			"http_status": "201",
			"uri": "/v1/auth/tenants",
			"ip_address": "127.0.0.1:40800",
			"referer": "https://saasadmin.console.saasus.io/",
			"request_method": "POST",
			"saas_id": "sample_saas_id_sample",
			"api_key": "sample_api_key_sample",
			"request_body": {
				"attributes": {},
				"back_office_staff_email": "AmazonEventBridgeTest@example.com",
				"name": "AmazonEventBridgeTest"
			},
			"response_body": {
				"attributes": {},
				"back_office_staff_email": "AmazonEventBridgeTest@example.com",
				"id": "fe27b501-be9e-424c-9f4a-a199dea81f92",
				"name": "AmazonEventBridgeTest",
				"plan_histories": []
			}
		},
		"trace_id": "45196bec-82b8-474f-956a-066e73da310d"
	}
}
```

## create_saas_user

The created user information is set as `response_body`. API reference: <a href="/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser" target="_blank">Create SaaS User</a>

```json
{
	"version": "0",
	"id": "e91fa969-551b-0629-998e-a9980070586c",
	"detail-type": "api_call",
	"source": "aws.partner/saasus.io/5b4297ce-bdb3-43e2-bf99-d605cac044c8-1/event",
	"account": "999999999999",
	"time": "2023-10-31T08:55:46Z",
	"region": "ap-northeast-1",
	"resources": [],
	"detail": {
		"event_type": "create_saas_user",
		"event": {
			"log_id": "729ac946-7675-4c52-90d3-3bfcde1656a8",
			"date_time": "2023-10-31T08:55:46Z",
			"date": "2023-10-31",
			"ttl": "2023-11-07T08:55:46Z",
			"http_status": "201",
			"uri": "/v1/auth/users",
			"ip_address": "127.0.0.1:58086",
			"referer": "https://saasadmin.console.saasus.io/",
			"request_method": "POST",
			"saas_id": "sample_saas_id_sample",
			"api_key": "sample_api_key_sample",
			"request_body": {
				"email": "AmazonEventBridgeTest_user@example.com",
				"password": "xxxxx"
			},
			"response_body": {
				"email": "AmazonEventBridgeTest_user@example.com",
				"id": "075dbcde-b5c3-4c64-8a04-204fee8b5073"
			}
		},
		"trace_id": "629c4bc3-e430-46a0-91bd-1ddf407fe4eb"
	}
}
```

For the details of each API, please check the <a href="/docs/reference/getting-started-with-your-api" target="_blank">API reference</a>.
