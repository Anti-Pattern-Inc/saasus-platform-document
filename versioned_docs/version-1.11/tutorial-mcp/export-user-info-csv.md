---
title: "User List CSV Export Procedure"
slug: "export-user-info-csv"
excerpt: ""
hidden: false
createdAt: "Mon May 27 2024 08:41:59 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon May 27 2024 08:41:59 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform User List CSV Export Procedure

## Overview
This is a procedure document for comprehensively retrieving user information registered in SaaSus Platform and outputting it in CSV format.

## Prerequisites
- SaaSus API MCP Server must be configured

## Request Text for MCP Server

### Basic Request Text
```
Please export the SaaSus user list to CSV.

[Output Settings]
Output format = CSV
File name = saasus_users.csv
No intermediate artifacts required
Output the resulting CSV file directly
If the same user has multiple tenants or roles, output as separate rows
Do not use cache, always retrieve the latest information

[Field Settings]
Email address = true
Tenant name = true
Environment = true
Role = true
; If there are other custom attributes, add them below
; Name = true
; Custom attribute 1 = true
; Custom attribute 2 = true

[Field Descriptions]
Email address: User's email address
Tenant name: Name of the tenant the user belongs to
Environment: Environment the user is using (e.g., production, development, test, etc.)
Role: Role assigned to the user (e.g., administrator, user, guest, etc.)
; Name: User's full name
; Custom attribute 1: Description of any custom attribute 1
; Custom attribute 2: Description of any custom attribute 2

[Output Conditions]
; Set filter conditions when outputting the user list
; Example: To output only users belonging to a specific tenant, set as follows
; Tenant name = Specific tenant name
; Example: To output users only in a specific environment, set as follows
; Environment = production
; Example: To output only users with specific roles, set as follows
; Role = administrator, user
; Example: To output only users with a specific name, set as follows
; Name = John Doe
Tenant name = Tenant2

[Output Example]
; The following is an example of the output CSV
; Email address,Tenant name,Environment,Role,Name
; user1-1@example.com,Tenant1,prod,administrator,User1-1
; user1-1@example.com,Tenant1,prod,general user,User1-1
; user1-2@example.com,Tenant1,prod,administrator,User1-2
; user2-1@example.com,Tenant2,prod,administrator,User2-1
```

## Output File Format

### CSV Header
```csv
Email address,Tenant name,Environment,Role
```

### Example Data Rows
```csv
user2-1@example.com,Tenant2,prod,administrator
user2-2@example.com,Tenant2,prod,general user
user2-3@example.com,Tenant2,dev,administrator
user2-3@example.com,Tenant2,dev,general user
```

## Notes

- If the same user belongs to multiple tenants, they will be output as separate rows for each tenant
- If the same user has multiple roles, they will be output as separate rows for each role
- If filter conditions are specified, only users matching the conditions will be output
- The output data is the latest information at the time of execution (cache is not used)

## Customization

### Adding Fields
If you want to include user names or custom attributes in the output, set the corresponding items to `true` in the [Field Settings] section.

### Changing Filter Conditions
If you want to filter users by specific conditions, specify the conditions in the [Output Conditions] section. Multiple conditions can be combined.
