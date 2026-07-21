---
title: "User Environment Definitions"
slug: "user-env-definition"
excerpt: ""
hidden: false
createdAt: "Mon Mar 25 2024 18:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 25 2024 18:00:00 GMT+0000 (Coordinated Universal Time)"
---

On SaaSus Platform, it is possible to set up user environment definitions. The environments defined here refer to the development, testing, and other environments that you have set up in your SaaS (customer) environment. Consider assigning attributes to the test environment that are in line with your SaaS phase.


## Checking User Environment Definitions

**Select `Environments` from the SaaS Development Console**

![user-env-definition-1](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-1.png)

Both system-registered environments and user-registered environments will be displayed. In the past, the system automatically registered environments with the names "dev" or "stg", but now only environments named "prod" are automatically registered.  

## Registering User Environment Definitions

**Click `Create Environment`**

![user-env-definition-2](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-2.png)

Set the ID, Environment Name, and Display Name. Please set the ID to be unique.

![user-env-definition-3](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-3.png)

The registered environment will be displayed.

## Updating and Deleting User Environment Definitions

![user-env-definition-4](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-4.png)

You can change the Environment Name and Display Name.

![user-env-definition-5](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-5.png)

You can delete an environment, but you cannot delete the system-registered environment named "prod".

## Assigning User Environment Definitions to Users

**Select `Roles` from the SaaS Operations Console**

![user-env-definition-6](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-6.png)

In the SaaS Development Console, we'll try searching based on the "Test Environment" that we created earlier. Since it hasn't been assigned to any users yet, it won't appear in the search results. This means that the users who can use the "Test Environment" on your SaaS are not yet registered on the SaaSus Platform.

**Click on `Assign Roles`**

![user-env-definition-7](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-7.png)

Enter the email address of the user who will be able to use the "Test Environment" on the SaaS side and click the Add button.

## Checking Users Who Have Been Assigned Environment Definitions

**Select `Users` from the SaaS Operations Console**

![user-env-definition-8](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-8.png)

By turning on the checkbox for "Show Test Environment Users", users who can use the "Test Environment" on the SaaS side will be displayed.

![user-env-definition-9](/img/part-4/user-authz-settings/user-env-definition/user-env-definition-9.png)

If you turn off the "Show Test Environment Users" checkbox, users who can use the "Test Environment" on the SaaS side will not be displayed. This is because this user is registered as a user who can use only the test environment.
