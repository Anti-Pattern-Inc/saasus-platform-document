---
title: "Search, Edit, Create, or Assign Users to Tenants"
slug: "user-crud"
description: "You can search for users, edit or delete their information, create new users, and assign existing users to specific tenants."
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> You can search for users, edit or delete their information, create new users, and assign existing users to specific tenants.

## Search Users

You can filter and search users using the following criteria:

**Available search filters:**

- **ID, Email Address, or Tenant Name**: Text input
- **Tenant**: Text box with autocomplete
- **Environment**: Select box
- **Role**: Select box
- **Display users who do not belong to a tenant**: Checkbox

![Search screen](/img/part-5/user-management/user-crud/user-search.png)

## Create a New User

Click the "Add User" button at the top right of the screen to open the user registration window.  
This button is implemented as a select box that allows you to choose from the following actions:

- **Add User**: Register a new user in the SaaSus Platform
- **Add to Tenant**: Assign an already registered user to an additional tenant

This section explains the input fields when using the **Add User** option.

**Input fields:**

| Field           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| E-mail Address  | Used as the user's login ID                                                 |
| Password        | Password for login                                                          |
| Tenant          | Select the tenant to associate the user with                                |
| User Attributes | Fill in predefined user attributes (e.g., Username, Department, Role, etc.) |

![Create form](/img/part-5/user-management/user-crud/user-create.png)


## Add Existing User to Tenant

Select **"Add to Tenant"** from the dropdown on the "Add User" button to open the tenant assignment window.

This allows you to associate an already registered user with another tenant.

**Input fields:**

| Field           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| E-mail Address  | Email address of the existing user to be added                            |
| Tenant          | Select the tenant to assign the user to                                   |
| User Attributes | Fill in predefined user attributes (e.g., Username, etc.)                 |

![Add to tenant](/img/part-5/user-management/user-crud/add-tenant-to-user.png)

## Edit or Delete a User

Click the "Edit" or "Delete" icon from the user list to perform the operation.

### Edit

Clicking the edit icon opens a window where user information can be modified.

**Editable fields:**

- E-mail Address  
- Password (re-entry)
- User Attributes (e.g., Username, Department, etc.)

![Edit screen](/img/part-5/user-management/user-crud/user-edit.png)

### Delete

Clicking the delete icon opens a confirmation window with two deletion options.

**Deletion options:**

- **Delete from Tenant**  
  The user will be removed only from the tenant associated with the selected row. Other tenant associations remain unaffected.

- **Delete from SaaSus**  
  The user will be completely removed from the SaaSus Platform and disassociated from all tenants.

![Delete window](/img/part-5/user-management/user-crud/user-delete.png)

**Notes:**

- If "Delete from SaaSus" is selected, the user is removed from all associated tenants.


## Related Links

To view user activity history,  
see [User Activity History Log](/docs/part-5/user-management/user-activity-history-log).