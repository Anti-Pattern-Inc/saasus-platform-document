---
title: "Bulk User Registration Procedure"
slug: "bulk-user-registration"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform Bulk User Registration Procedure

## Overview
A procedure guide for efficiently registering multiple users in bulk from CSV files. Supports multiple tenant and role combinations with fully automated resource creation.

## Prerequisites
- SaaSus API MCP Server must be configured

## MCP Server Request Statement

### Basic Request Statement
```
Please read the users.csv file and execute bulk user registration using the SaaSus API MCP Server.

【Important】Please execute all of the following processes automatically:

1. CSV File Reading
   - email: Email address (required)
   - tenant_name: Tenant name (required, separate rows for multiple tenants)
   - role: Role (required, single role, separate rows for multiple roles)
   - env: Environment ID (required)
   - name: Name (set as attribute, optional)
   - Custom attributes: All columns to the right of env are treated as custom attributes (optional)

2. Resource Verification and Validation (Optimized Processing)
   - Check if custom attributes (including name) in CSV headers are defined, error at CSV reading time if they don't exist
   - For each row, check in the following order and stop checking other items once skip is determined:
     1. Check if tenant name exists, skip the row if it doesn't exist
     2. Check if role exists, skip the row if it doesn't exist
     3. Check if environment ID exists, skip the row if it doesn't exist

3. Bulk User Registration
   - Pre-processing: Read entire CSV file, execute validation, then group data by email
   - User Creation: Create SaaS users on first occurrence of each email (no password, email notification)
   - Tenant Processing: Create tenant users on first occurrence of each email for each tenant and set name attribute
   - Role Processing: Assign specified roles for each row
   - Environment Setting: Execute role assignment in the environment specified by CSV env column
   - Duplicate Avoidance: Skip creation of existing SaaS users and tenant users, execute only role addition

4. Result Reporting
   - Details of processed CSV rows and success/skip/failure counts
   - Reasons for skipped rows (non-existent tenant, role, environment ID)
   - Details of successfully registered users
   - Detailed error information if any errors occurred

Please execute all processes automatically and provide a detailed report at the end.
```

## CSV File Format

### File Structure
```csv
email,tenant_name,role,env,name
user1@example.com,company_a,admin,3,John Tanaka
user1@example.com,company_a,user,3,John Tanaka
user2@example.com,company_a,user,3,Jane Sato
user3@example.com,company_b,user,3,Jiro Suzuki
user4@example.com,company_a,user,3,Saburo Yamada
user4@example.com,company_a,viewer,3,Saburo Yamada
user5@example.com,company_b,admin,3,Misaki Takahashi
user5@example.com,company_a,user,3,Misaki Takahashi
user5@example.com,company_b,user,3,Misaki Takahashi
```

### Column Descriptions
- **email**: User's email address (required)
- **tenant_name**: Tenant name to belong to (required, separate rows for multiple tenants, skip if doesn't exist)
- **role**: Role to assign (required, single role, separate rows for multiple roles, skip if doesn't exist)
- **env**: Environment ID (required, skip if doesn't exist)
- **name**: User's name (set as attribute, optional)
- **Custom attributes**: All columns to the right of env are treated as custom attributes (optional, error at CSV reading time if attribute doesn't exist)

### Handling Multiple Tenants and Roles
- **Multiple Roles**: When a user has multiple roles, separate them into different rows
- **Multiple Tenants**: When a user belongs to multiple tenants, separate them into different rows
- **Combinations**: For multiple tenants × multiple roles, list all combinations in separate rows
