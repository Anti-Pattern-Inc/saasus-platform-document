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

## CSV File Format

### File Structure
```csv
email,tenant_name,role,name
user1@example.com,company_a,admin,John Tanaka
user1@example.com,company_a,user,John Tanaka
user2@example.com,company_a,user,Jane Sato
user3@example.com,company_b,user,Jiro Suzuki
user4@example.com,company_a,user,Saburo Yamada
user4@example.com,company_a,viewer,Saburo Yamada
user5@example.com,company_b,admin,Misaki Takahashi
user5@example.com,company_a,user,Misaki Takahashi
user5@example.com,company_b,user,Misaki Takahashi
```

### Column Descriptions
- **email**: User's email address (required)
- **tenant_name**: Tenant name to belong to (required, separate rows for multiple tenants)
- **role**: Role to assign (single role, separate rows for multiple roles)
- **name**: User's name (set as attribute)

### Handling Multiple Tenants and Roles
- **Multiple Roles**: When a user has multiple roles, separate them into different rows
- **Multiple Tenants**: When a user belongs to multiple tenants, separate them into different rows
- **Combinations**: For multiple tenants × multiple roles, list all combinations in separate rows

## MCP Server Request Statement

### Basic Request Statement
```
Please read the users.csv file and execute bulk user registration using the SaaSus MCP server.

【Important】Please execute all of the following processes automatically:

1. CSV File Reading
   - email: Email address
   - tenant_name: Tenant name (separate rows for multiple tenants)
   - role: Role (single role, separate rows for multiple roles)
   - name: Name (set as attribute)

2. Resource Verification and Automatic Creation
   - Check if tenant names listed in CSV exist, create new ones if they don't exist
   - Check if roles listed in CSV exist, create new ones if they don't exist
   - Check if user attribute "name" is defined, create new one if it doesn't exist

3. Bulk User Registration (Revised Version)
   - Pre-processing: Read entire CSV file and group data by email
   - User Creation: Create SaaS users on first occurrence of each email (no password, email notification)
   - Tenant Processing: Create tenant users on first occurrence of each email for each tenant and set name attribute
   - Role Processing: Assign specified roles for each row (using env_id=3)
   - Duplicate Avoidance: Skip creation of existing SaaS users and tenant users, execute only role addition

4. Result Reporting
   - List of created tenants, roles, and attributes
   - Details of successfully/failed registered users
   - Detailed error information if any errors occurred

Please execute all processes automatically and provide a detailed report at the end.
```
