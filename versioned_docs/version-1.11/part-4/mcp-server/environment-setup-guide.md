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
Before using the SaaSus API MCP Server, you need to configure the appropriate environment settings. This guide provides the procedure for creating basic SaaSus Platform settings using the SaaSus API MCP Server.

This procedure creates the necessary items for [Settings Required Before Proceeding with the Tutorial](https://docs.saasus.io/docs/tutorial/prepare-saas-platform), [Creating SaaS User Tenants](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-user-tenants), [Creating SaaS Users](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-users), [Pricing Plan Configuration Procedures](https://docs.saasus.io/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans), and [Applying Rate Plans to Tenants](https://docs.saasus.io/docs/tutorial/manage-rate-plans/manage-rate-plans#applying-rate-plans-to-tenants).

Additionally, registration content can also be registered via CSV. This procedure uses the following expressions for clarity.

## Prerequisites
- SaaSus Platform account
- Appropriate API key and secret key
- Node.js environment (v16 or higher)
- SaaSus API MCP Server setup completed

## Environment Creation
This procedure is based on [Settings Required Before Proceeding with the Tutorial](https://docs.saasus.io/docs/tutorial/prepare-saas-platform).

#### Request Message to MCP Server
```
Please create the following information in SaaSus Platform.
If an error occurs, stop creating subsequent items and output the executed content and error information.

[User Attributes]
Attribute Name: username
Display Name: User Name
Type: string

[Tenant Attributes]
Attribute Name: memo
Display Name: Memo
Type: string

[Role]
Role Name: user
Display Name: General User
```

## Tenant Creation
This procedure is based on [Creating SaaS User Tenants](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-user-tenants).

#### Request Message to MCP Server

```
Please create the following tenant information in SaaSus Platform.
If an error occurs, stop creating subsequent items and output the executed content and error information.

Name: Tenant Sample 1
Memo: This is attribute information defined by tenant attributes and can be set freely
Add Representative User: Create new user
Representative Email Address: saasus-sample-tenant1@example.com
Representative Password: Passw0rd!!

Name: Sample App Tenant 2
Memo: This is attribute information defined by tenant attributes and can be set freely
Add Representative User: Create new user
Representative Email Address: saasus-sample-tenant2@example.com
Representative Password: Passw0rd!!
```

## User Creation
This procedure is based on [Creating SaaS Users](https://docs.saasus.io/docs/tutorial/authentication-preference#creating-saas-users).

#### Request Message to MCP Server

```
Please create the following user information in SaaSus Platform.
If an error occurs, stop creating subsequent items and output the executed content and error information.

Email Address: user1-1@example.com
Password: Passw0rd!!
Name: User 1-1
Tenant: Tenant Sample 1

Email Address: user1-2@example.com
Password: Passw0rd!!
Name: User 1-2
Tenant: Tenant Sample 1

Email Address: user2-1@example.com
Password: Passw0rd!!
Name: User 2-1
Tenant: Sample App Tenant 2

Email Address: user2-2@example.com
Password: Passw0rd!!
Name: User 2-2
Tenant: Sample App Tenant 2
```

## Role Configuration
This procedure is based on [Role Management](https://docs.saasus.io/docs/part-5/adding-role-to-user).

#### Request Message to MCP Server

```
Please create the following information in SaaSus Platform.
If an error occurs, stop creating subsequent items and output the executed content and error information.
When setting multiple roles, they can be set separated by ",".

Tenant: Tenant Sample 1
Email Address: user1-1@example.com
Role: user

Tenant: Tenant Sample 1
Email Address: user1-2@example.com
Role: user

Tenant: Sample App Tenant 2
Email Address: user2-1@example.com
Role: user

Tenant: Sample App Tenant 2
Email Address: user2-2@example.com
Role: user
```

## Pricing Plan
This procedure is based on [Pricing Plan Configuration Procedures](https://docs.saasus.io/docs/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans) and [Applying Rate Plans to Tenants](https://docs.saasus.io/docs/tutorial/manage-rate-plans/manage-rate-plans#applying-rate-plans-to-tenants).

### Meter
#### Request Message to MCP Server
```
Please create the following meter units in SaaSus Platform.
If an error occurs, stop creating subsequent items and output the executed content and error information.

Meter Unit Name: comment_count
Meter Unit Display Name: Comment Count
Meter Unit Description: Comment Count
```

### Pricing Unit
#### Request Message to MCP Server
```
Please create the following pricing units in SaaSus Platform.
Specify unit as fixed: Fixed Unit, usage: Usage Unit, tiered: Tiered Unit, tiered_usage: Tiered Usage Unit
If an error occurs, stop creating subsequent items and output the executed content and error information.

Unit: fixed
Pricing Unit Name: basic_base
Pricing Unit Display Name: Basic Plan Base Fee
Pricing Unit Description: Basic Plan Base Fee
Amount: 500
Recurring Period: month
Currency: JPY

Unit: usage
Pricing Unit Name: free_comment
Pricing Unit Display Name: Free Plan Comment Count
Pricing Unit Description: Free Plan Comment Count
Target Meter Name: comment_count
Upper Limit: 10
Currency: JPY

Unit: tiered_usage
Pricing Unit Name: basic_comment
Pricing Unit Display Name: Basic Plan Comment Count
Pricing Unit Description: Basic Plan Comment Count
Target Meter Name: comment_count
Amount per Unit Usage: 0
Upper Limit: 100
Currency: JPY
Upper Limit: 10
Unit Amount: 0
Fixed Amount: 500
Upper Limit: 50
Unit Amount: 0
Fixed Amount: 1000
Upper Limit: -
Unit Amount: 0
Fixed Amount: 1500
```

### Feature Menu
#### Request Message to MCP Server
```
Please create the following feature menus in SaaSus Platform.
Pricing units can be set multiple times separated by commas.
If an error occurs, stop creating subsequent items and output the executed content and error information.

Feature Menu Name: basic_menu
Feature Menu Display Name: Basic Plan Basic Menu
Feature Menu Description: Basic Plan Basic Menu
Pricing Units: basic_base, basic_comment

Feature Menu Name: free_menu
Feature Menu Display Name: Free Plan Basic Menu
Feature Menu Description: Free Plan Basic Menu
Pricing Units: free_comment
```

### Pricing Plan
#### Request Message to MCP Server
```
Please create the following plans in SaaSus Platform.
Feature menus can be set multiple times separated by commas.
If an error occurs, stop creating subsequent items and output the executed content and error information.

Pricing Plan Name: basic_plan
Pricing Plan Display Name: Basic Plan
Pricing Plan Description: Basic Plan
Feature Menu: basic_menu

Pricing Plan Name: free_plan
Pricing Plan Display Name: Free Plan
Pricing Plan Description: Free Plan
Feature Menu: free_menu
```

### Applying Rate Plans to Tenants
#### Request Message to MCP Server
```
Please create the following tax rate in SaaSus Platform.
If an error occurs, stop creating subsequent items and output the executed content and error information.

Tenant: Tenant Sample 1
Pricing Plan: free_plan
Effective Date: 6 minutes from the current time

Tenant: Sample App Tenant 2
Pricing Plan: basic_plan
Effective Date: 6 minutes from the current time

Instructions:
First, retrieve the tenant and pricing plan information. Then, calculate the UTC timestamp for 6 minutes from the current time (with seconds reset to 0) and update the tenant's pricing plan accordingly.
```

## Deletion
### User and Tenant Deletion
#### Request Message to MCP Server
```
Please delete the following items.
Also, when deleting a tenant, if the tenant's representative user is not assigned to other tenants,
please delete the representative user at the same time.
If an error occurs, stop creating subsequent items and output the executed content and error information.

[User Attributes]
Attribute Name: username

[Tenant Attributes]
Attribute Name: memo

[Role]
Role Name: user

[Tenant]
Name: Tenant Sample 1
Name: Sample App Tenant 2

[User]
Email Address: user1-1@example.com
Email Address: user1-2@example.com
Email Address: user2-1@example.com
Email Address: user2-2@example.com
```

## Troubleshooting

### Common Issues

#### Attribute Creation Errors
- Check if the attribute name contains invalid characters
- Check if the same attribute name already exists

#### API Key Errors
- Verify that the SaaSus Platform API key is correctly configured
- Verify that the API key permissions are properly set

#### SaaSus API MCP Server Connection Errors
- Verify that the SaaSus API MCP Server is running correctly
- Verify that environment variables are correctly configured
