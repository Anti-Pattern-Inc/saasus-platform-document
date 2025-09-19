---
title: "Tenant Contract Information Retrieval Guide"
slug: "export-tenant-contract-info"
excerpt: ""
hidden: false
createdAt: "Tue May 28 2024 02:12:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue May 28 2024 02:12:00 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform Tenant Contract Information Retrieval Guide

## Overview
This guide provides procedures for comprehensively retrieving tenant contract information registered in the SaaSus Platform and outputting it in table format.

## Prerequisites
- SaaSus API MCP Server must be configured

## MCP Server Request Statement

### Basic Request Statement
```
Please compile tenant contract information.

Lines starting with (;) are commented out and excluded from processing

[Output Settings]
Output format = CSV format (JSON format, table format, YAML format are also selectable)
No intermediate deliverables required
Script or program creation prohibited
Output only result information
Do not use cache, always retrieve latest information

[Field Settings]
Company Name = true
Tenant Name = true
Current Plan = true
Payment Method = true
Payment Amount = true
Currency = true
Contract Start Date = true
Tenant ID = true
Representative Email = true

[Output Conditions]
; Current Plan = Plan1
; Payment Method = Stripe

[Field Descriptions]
Company Name: Tenant name listed on invoices, output tenant name if not configured
Tenant Name: Tenant name on SaaSus Platform
Current Plan: Currently contracted pricing plan name, "Not Contracted" if no plan is contracted
Payment Method: "AWS Marketplace" for tenants included in Awsmarketplace API GetCustomers, "Stripe" for others
Payment Amount: Monthly fee
Currency: Currency of the fee, "ー" if no plan
Contract Start Date: Plan contract start date, "ー" if no plan
Tenant ID: Tenant ID on SaaSus Platform
Representative Email: Tenant representative email address, "ー" if no representative configured

```

## Retrieved Information

### Tenant Basic Information
- **Tenant Name**: Tenant name managed on SaaSus Platform
- **Tenant ID**: Unique tenant identifier
- **Representative Email**: Tenant administrator email address

### Contract and Pricing Information
- **Current Plan**: Currently applied pricing plan
- **Payment Method**: Determination of Stripe integration or AWS Marketplace integration
- **Payment Amount**: Monthly fee
- **Currency**: Currency of the fee
- **Contract Start Date**: Plan application start date

## Notes

- Output data is the latest information at execution time
- Tenants without pricing plans configured will display "Not Contracted"
- Tenants not included in AWS Marketplace API GetCustomers will display "Stripe" as payment method
- If billing information is not configured, company name will display the same value as tenant name
- Contract start date is converted from Unix timestamp to date format
- If no plan is configured, contract start date, payment amount, and currency will display "ー"

## Customization

### Adding Filter Conditions
To filter tenants by specific conditions, add conditions to the request statement.

Example:
```
[Output Conditions]
Current Plan = Plan1
Payment Method = Stripe
```

### Retrieving Additional Information
To include tenant attribute information or custom settings, add them to the field settings.