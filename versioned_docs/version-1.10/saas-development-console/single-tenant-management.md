---
title: "Single Tenant Management"
slug: "single-tenant-management"
excerpt: ""
hidden: false
createdAt: "Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
---

## Overview

In SaaS architecture, there are "single-tenant" and "multi-tenant" models.

A single-tenant architecture means that each customer (tenant) using the SaaS has a separate server and database. Each tenant maintains a completely isolated environment.

A multi-tenant architecture involves multiple tenants sharing common servers and databases. Data is partitioned by tenant, but physical resources are shared.

The single-tenant management feature is a functionality on the SaaSus Platform that supports the construction of SaaS with a single-tenant architecture.

:::info
The single-tenant management feature is only available to customers on the Advanced plan or higher.
:::

In a single-tenant architecture, each tenant's data is physically isolated, reducing the risk of data leakage among other benefits. However, there is a disadvantage of increased management cost as servers and databases need to be prepared for each tenant.

The single-tenant management feature automatically prepares servers and databases in your AWS environment when you create a tenant on SaaSus. This can reduce the costs of management and operations.

## Setup Method

### Permission from SaaSus Platform

When onboarding a tenant, since SaaSus needs to access your AWS environment, you must grant these permissions to SaaSus.

Follow the instructions on the screen to create an IAM Role and register the details of the created role.

![settings-role](/img/saas-development-console/single-tenant-management/settings-role.png)

### Cloud Formation Template

<a download="singletenant-cf-sample.yml" href="/file/singletenant-cf-sample.yml"> Cloud Formation Template Sample </a>

When you create a tenant on SaaSus, a Cloud Formation is executed in your AWS environment to create an environment for each tenant. You need to register the Cloud Formation template that will be used at this time.

The Cloud Formation's Outputs should specify the following items:

| Logical ID       | Value                                              |
| :--------------- | :------------------------------------------------- |
| AccountId        | AWS account where Cloud Formation is executed        |
| SubnetIds        | IDs of the subnets set for the DB instance         |
| SecurityGroupIds | IDs of the security groups set for the DB instance |
| DbUser           | User for connecting to the DB                      |
| DbPass           | Password for connecting to the DB                  |
| DbHost           | Host (IP address) for connecting to the DB         |
| DbPort           | Port number for connecting to the DB               |
| DbName           | Name of the DB                                     |
| DbType           | Type of the DB (`mysql` or `postgres`)             |

### SQL File

<a download="singletenant-sample.sql" href="/file/singletenant-sample.sql"> SQL File Sample </a>

You will need to register SQL file that will be executed against the DB created by the Cloud Formation. Register the SQL for the table definitions and initial data of the DB.

### How to check the progress

In the SaaS operations console - Tenant Management screen, display the target tenant, and you can check the progress information by the value of TenantOnboardingStatus.

| TenantOnboardingStatus | Situation                                     |
| :--------------------- | :-------------------------------------------- |
| setup_cfn_in_progress  | Preparing to run Cloud Formation              |
| setup_cfn_db_ready     | DB instance created by Cloud Formation        |
| setup_cfn_completed    | Cloud Formation completed                     |
| setup_db_in_progress   | Executing SQL                                 |
| all_completed          | All processes completed normally              |
| error                  | Abnormal termination (please contact support) |

### Note

Tenant offboarding process is not supported.
