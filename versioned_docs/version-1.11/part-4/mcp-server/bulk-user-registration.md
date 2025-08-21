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

**[CSV files exported using the User List CSV Export Procedure](./export-user-info-csv.md) can be used directly.**

### Key Use Cases
This feature is particularly useful for user migration between environments such as:
- **Development → Staging Environment**: Replicate user configurations created and tested in development environment to staging environment
- **Staging → Production Environment**: Deploy verified user configurations from staging environment to production environment
- **Environment Reset**: Migrate existing environment user configurations to another environment for reset

## Prerequisites
- SaaSus API MCP Server must be configured
- CSV file must be prepared in the appropriate format (files exported using [User List CSV Export Procedure](./export-user-info-csv.md) are recommended)

### Important Prerequisites
**The destination environment must have the same resources defined as the CSV export source environment:**
- **Tenant Names**: All tenant names listed in the CSV must exist in the destination environment
- **Environments**: Environment names listed in the CSV must exist in the destination environment
- **Roles**: All role names listed in the CSV must be defined in the destination environment
- **Custom Attributes**: Custom attributes (including name) included in the CSV must be defined in the destination environment

If these resources do not exist, the corresponding rows will be skipped or errors will occur.

## MCP Server Request Statement

### Basic Request Statement
```
Please read the saasus_users.csv file and execute bulk user registration using the SaaSus API MCP Server.

【Important】Please execute all of the following processes automatically:

1. CSV File Reading
   - Email Address: User's email address (required)
   - Tenant Name: Tenant name (required, separate rows for multiple tenants)
   - Environment: Environment name (required, string like prod/dev/test)
   - Role: Role name (required, single role, separate rows for multiple roles)
   - Name: Name (set as attribute, optional)
   - Custom Attributes: All columns to the right of role are treated as custom attributes (optional)

2. Resource Verification and Validation (Optimized Processing)
   - Check if custom attributes (including name) in CSV headers are defined, error at CSV reading time if they don't exist
   - For each row, check in the following order and stop checking other items once skip is determined:
     1. Check if tenant name exists, skip the row if it doesn't exist
     2. Check if role name exists, skip the row if it doesn't exist
     3. Get environment ID from environment name, skip the row if it doesn't exist

3. Bulk User Registration
   - Pre-processing: Read entire CSV file, execute validation, then group data by email address
   - User Creation: Create SaaS users on first occurrence of each email address (no password, email notification)
   - Tenant Processing: Create tenant users on first occurrence of each email address for each tenant and set name attribute
   - Role Processing: Assign specified roles for each row
   - Environment Setting: Get environment ID from environment name specified in CSV environment column and execute role assignment
   - Duplicate Avoidance: Skip creation of existing SaaS users and tenant users, execute only role addition

4. Result Reporting
   - Details of processed CSV rows and success/skip/failure counts
   - Reasons for skipped rows (non-existent tenant, role, environment name)
   - Details of successfully registered users
   - Detailed error information if any errors occurred

Please execute all processes automatically and provide a detailed report at the end.
```

## CSV File Format

### File Structure
```csv
email,tenant_name,environment,role,name
user1@example.com,company_a,prod,admin,John Tanaka
user1@example.com,company_a,prod,user,John Tanaka
user2@example.com,company_a,prod,user,Jane Sato
user3@example.com,company_b,prod,user,Jiro Suzuki
user4@example.com,company_a,prod,user,Saburo Yamada
user4@example.com,company_a,prod,viewer,Saburo Yamada
user5@example.com,company_b,prod,admin,Misaki Takahashi
user5@example.com,company_a,prod,user,Misaki Takahashi
user5@example.com,company_b,prod,user,Misaki Takahashi
```

### Column Descriptions
- **email**: User's email address (required)
- **tenant_name**: Tenant name to belong to (required, separate rows for multiple tenants, skip if doesn't exist)
- **environment**: Environment name (required, string like prod/dev/test, skip if doesn't exist)
- **role**: Role name to assign (required, single role, separate rows for multiple roles, skip if doesn't exist)
- **name**: User's name (set as attribute, optional)
- **Custom Attributes**: All columns to the right of role are treated as custom attributes (optional, error at CSV reading time if attribute doesn't exist)

### Handling Multiple Tenants and Roles
- **Multiple Roles**: When a user has multiple roles, separate them into different rows
- **Multiple Tenants**: When a user belongs to multiple tenants, separate them into different rows
- **Combinations**: For multiple tenants × multiple roles, list all combinations in separate rows

## Integration with Export Function

### CSV File Preparation
CSV files exported using [User List CSV Export Procedure](./export-user-info-csv.md) can be used directly. The CSV exported by the export function is fully compatible with the format expected by this bulk registration function.

**Important**: When using the export function, ensure the following required items for bulk registration are configured to be output:
- Email Address = true
- Tenant Name = true
- Environment = true
- Role = true

If these items are not included, errors may occur during bulk registration processing.

### Recommended Workflow

#### For Environment Migration
1. **CSV Export from Source Environment**: Use [User List CSV Export Procedure](./export-user-info-csv.md) to export user information from the source environment (e.g., development environment) as CSV
2. **Verify Destination Environment Preparation**: Confirm that necessary resources (tenants, roles, custom attributes) are defined in the destination environment (e.g., staging environment)
3. **Edit CSV (if necessary)**: Edit the CSV file if environment-specific adjustments are needed
4. **Execute Bulk Registration**: Use this procedure to execute bulk registration in the destination environment

#### For Adding Users to Existing Environment
1. **Check Existing Users**: Use [User List CSV Export Procedure](./export-user-info-csv.md) to export current user information as CSV
2. **Edit CSV**: Add new users, change roles, etc.
3. **Execute Bulk Registration**: Use this procedure to execute bulk registration with the edited CSV file

## Important Notes

### About Environment Names
- The export function outputs environment names as strings (e.g., prod, dev, test)
- During bulk registration, the corresponding environment ID is automatically retrieved from this environment name for processing
- If a non-existent environment name is specified, the corresponding row will be skipped

### Data Consistency
- When the same user belongs to multiple tenants, they are processed as separate rows for each tenant
- When the same user has multiple roles, they are processed as separate rows for each role
- Existing users and tenant users are not duplicated, only new roles are added

### Error Handling
- Rows with non-existent tenant names, role names, or environment names are automatically skipped
- If custom attributes are not defined, an error occurs at CSV reading time
- Processing results are provided as detailed reports, allowing confirmation of success, skip, and failure details
