---
title: "(New Screen) Search, Edit, Create, or Assign Users to Tenants"
slug: "user-management-new-ui"
excerpt: ""
hidden: false
createdAt: "Tue Jul 21 2026 01:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jul 21 2026 01:00:00 GMT+0000 (Coordinated Universal Time)"
---

:::info Switching Screens
User Management has two modes: "Old Screen" and "New Screen".  
You can switch between them using the toggle next to the page heading.  
For old screen operations, see [(Old Screen) Search, Edit, Create, or Assign Users to Tenants](/docs/part-5/user-management/user-crud).
:::

## Overview

The user list is split into two tabs: "Tenant Users" and "SaaS Users".  
Search is performed server-side, providing fast results even with a large number of users.

<!-- Target: The state immediately after switching to the new screen. The toggle switch next to the heading is ON, and the Tenant Users tab is displayed. -->
![Overview](/img/part-5/user-management/user-management-new-ui/overview.png)

## Switching Screens

A toggle switch appears next to the "User Management" page heading.

- OFF (default): Displays the old screen. Label reads "Use new screen".
- ON: Displays the new screen. Label reads "Use old screen".

A confirmation dialog appears only on the first switch.  
Your selection is saved in the browser and persists across sessions.

<!-- Target: The toggle switch to the right of the "User Management" heading. OFF state with "Use new screen" label visible. -->
![Screen Toggle](/img/part-5/user-management/user-management-new-ui/screen-toggle.png)

<!-- Target: The "Switch to new user management screen?" dialog. The subtitle explaining Role Management changes should be visible. -->
![Toggle Confirm Dialog](/img/part-5/user-management/user-management-new-ui/toggle-confirm-dialog.png)

:::warning Role Management Menu Change
When the new screen is enabled, the "Role Management" menu is hidden from the sidebar.  
Role assignment is performed within the user detail drawer.
:::

## Tenant Users Tab

Displays users who belong to a tenant.

### Search and Filters

You can filter users by the following criteria:

| Field | Input Type | Search Method |
|-------|-----------|---------------|
| Email / Login ID | Text input | Prefix match |
| User ID | Text input | Exact match |
| Tenant | Autocomplete | Selection |
| Environment | Select box | Selection |
| Role | Select box | Selection |

Selecting a tenant enables the Environment and Role filters.

<!-- Target: The full filter area of the Tenant Users tab. The email input, user ID input, and tenant/environment/role selectors should be visible. -->
![Tenant User Filter](/img/part-5/user-management/user-management-new-ui/overview.png)

### List and Pagination

Search results are displayed in a table format.  
You can change the number of rows per page and navigate using "Previous" and "Next" buttons.

### Editing Users

Click the edit icon on a row to open a side drawer on the right.  
The side drawer allows the following operations:

**Editable fields:**

- Basic information (email or login ID)
- User attributes (username, department, etc.)
- Environment and role assignments

**Available actions:**

- Password reset
- MFA removal

<!-- Target: The tenant user edit drawer showing the basic information section, user attributes section, and environment/roles section. -->
![Edit Drawer](/img/part-5/user-management/user-management-new-ui/edit-drawer.png)

### Deleting Users

Click the delete icon on a row to display a confirmation dialog.  
You can choose from two deletion methods:

- **Remove from tenant**: Removes the user from the selected tenant only.
- **Remove from SaaS**: Permanently deletes the user from SaaSus Platform and removes them from all tenants.

## SaaS Users Tab

Displays all users registered in SaaS, regardless of tenant membership.  
This allows SaaS-level user management.

### Search and Filters

| Field | Input Type | Search Method |
|-------|-----------|---------------|
| Email / Login ID | Text input | Prefix match |
| User ID | Text input | Exact match |

<!-- Target: The full SaaS Users tab showing the filter area and user list table. -->
![SaaS User Tab](/img/part-5/user-management/user-management-new-ui/saas-user-tab.png)

### Editing Users

Editing works the same as the Tenant Users tab, using a side drawer.  
In the SaaS Users tab drawer, you can view all tenants the user belongs to.

### Deleting Users

Click the delete icon to display a confirmation dialog for SaaS deletion.  
Only "Remove from SaaS" is available in the SaaS Users tab.

## Creating New Users

Click the "Create New User" button at the top right of the screen to open the creation dialog.

The input fields are the same as the old screen.  
For details, see [(Old Screen) Search, Edit, Create, or Assign Users to Tenants > Create a New User](/docs/part-5/user-management/user-crud#create-a-new-user).
