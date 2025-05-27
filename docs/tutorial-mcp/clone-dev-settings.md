---
title: "Environment Information Acquisition Procedure"
slug: "clone-dev-settings"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform Environment Information Acquisition Procedure

## Overview
This is a procedure document for comprehensively retrieving various configuration information from SaaSus Platform and outputting it in JSON format.

## Prerequisites
- SaaSus API MCP Server must be configured

## Request Text for MCP Server

### Basic Request Text
```
Please retrieve SaaSus settings and output them to a single file in JSON format.

Please include the following information:
- Domain settings
- Post-authentication redirect destination
- Authentication detailed settings (basic settings)
- Authentication detailed settings (screen settings)
- Authentication detailed settings (authentication settings)
- Authentication detailed settings (email notification content)
- User attribute definitions
- Tenant attribute definitions
- User environment definitions
- Role definitions
- Meter unit settings
- Measurement unit settings
- Feature menu settings
- Pricing plan settings
- Tax rate settings
- Billing information
- Event integration
- AWS Marketplace information
```
## Output File Structure

```json
{
  "domain": { ... },
  "callback_url": "...",
  "auth_basic_settings": { ... },
  "auth_page_settings": { ... },
  "auth_identity_providers": { ... },
  "notification_messages": { ... },
  "user_attributes": [ ... ],
  "tenant_attributes": [ ... ],
  "environments": [ ... ],
  "roles": [ ... ],
  "metering_units": [ ... ],
  "pricing_units": [ ... ],
  "pricing_menus": [ ... ],
  "pricing_plans": [ ... ],
  "tax_rates": [ ... ],
  "billing_info": { ... },
  "event_bridge_settings": { ... },
  "aws_marketplace": { ... }
}
