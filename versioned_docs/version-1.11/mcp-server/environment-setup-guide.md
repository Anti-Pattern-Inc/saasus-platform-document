---
title: "Environment Setup Guide"
slug: "environment-setup-guide"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# Environment Setup Guide

## Overview
Before using the SaaSus API MCP Server, you need to configure the appropriate environment settings. This guide provides the steps to create basic SaaSus Platform configurations using the SaaSus API MCP Server.

This procedure covers the necessary settings for [Tutorial Prerequisites](https://docs.saasus.io/docs/tutorial/prepare-saas-platform), [Creating SaaS User Tenants](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-user-tenants), and [Creating SaaS Users](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-users).

## Prerequisites
- SaaSus Platform account
- Appropriate API key and secret key
- Node.js environment (v16 or higher)
- SaaSus API MCP Server setup completed

## MCP Server Request Instructions

### Request Text

#### Environment Creation
This procedure is based on [Tutorial Prerequisites](https://docs.saasus.io/docs/tutorial/prepare-saas-platform).

```
Please create the following information in SaaSus Platform.
If an error occurs, output the executed content and error information.
Lines starting with ";" are notes and comments.

[User Attributes]
Attribute Name: username
Display Name: User Name
Type: string

[Tenant Attributes]
Attribute Name: memo
Display Name: Memo
Type: string

[Roles]
Role Name: user
Display Name: General User
```

#### Tenant and User Creation
This procedure is based on [Creating SaaS User Tenants](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-user-tenants) and [Creating SaaS Users](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-users).

```
Please create the following information in SaaSus Platform.
If an error occurs, output the executed content and error information.
Lines starting with ";" are notes and comments.

[Tenants]
Name: Sample Tenant 1
Memo: This is attribute information defined by tenant attributes and can be set freely
Add Representative User: Create new user
Representative Email Address: saasus-sample-tenant1@example.com
Representative Password: Passw0rd!!

Name: Sample App Tenant 2
Memo: This is attribute information defined by tenant attributes and can be set freely
Add Representative User: Create new user
Representative Email Address: saasus-sample-tenant2@example.com
Representative Password: Passw0rd!!

[Users]
Email Address: user1-1@example.com
Password: Passw0rd!!
Name: User 1-1
Tenant: Sample Tenant 1

Email Address: user1-2@example.com
Password: Passw0rd!!
Name: User 1-2
Tenant: Sample Tenant 1

Email Address: user2-1@example.com
Password: Passw0rd!!
Name: User 1-1
Tenant: Sample App Tenant 2

Email Address: user2-2@example.com
Password: Passw0rd!!
Name: User 1-2
Tenant: Sample App Tenant 2

[Role Settings]
; When setting multiple roles, they can be separated by commas.
Tenant: Sample Tenant 1
Email Address: user1-1@example.com
Role: General User

Tenant: Sample Tenant 1
Email Address: user1-2@example.com
Role: General User

Tenant: Sample App Tenant 2
Email Address: user2-1@example.com
Role: General User

Tenant: Sample App Tenant 2
Email Address: user2-2@example.com
Role: General User, SaaS Administrator
```


```
Please delete the following items.
Also, when deleting tenants, if the tenant's representative user is not assigned to other tenants,
delete the representative user at the same time.

[User Attributes]
Attribute Name: username

[Tenant Attributes]
Attribute Name: memo

[Roles]
Role Name: user

[Tenants]
Name: Sample Tenant 1
Name: Sample App Tenant 2

[Users]
Email Address: user1-1@example.com
Email Address: user1-2@example.com
Email Address: user2-1@example.com
Email Address: user2-2@example.com
```


## Troubleshooting

### Common Issues

#### Attribute Creation Errors
- Check if the attribute name contains invalid characters
- Verify that the same attribute name doesn't already exist

#### API Key Errors
- Verify that the SaaSus Platform API key is correctly configured
- Check if the API key permissions are properly set

#### SaaSus API MCP Server Connection Errors
- Verify that the SaaSus API MCP Server is running correctly
- Check if environment variables are properly configured