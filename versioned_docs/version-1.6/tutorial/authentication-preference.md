---
sidebar_position: 3
title: "Authentication Preference"
slug: "authentication-preference"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:46:49 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

## Manage SaaS with SaaS Operation Console

### Create a SaaS Consumer Tenant

First, let's create two tenants for the sample application.

Click "Tenant Management" on the side menu

![03](/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-03.png)

Click the Create Tenant button

First example tenant

- Name: Tenant Sample 1
- Primary Email Address: [saasus-sample-tenant1@example.com](mailto:saasus-sample-tenant1@example.com)
- Representative's password: Temporary password that meets the requirements such as G@2qYPQq

<img src="/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-04.png" width="400">
</img>

Second example tenant

- Name: Sample App Tenant 2
- Primary email address: [saasus-sample-tenant2@example.com](mailto:saasus-sample-tenant2@example.com)
- Representative's password: Temporary password that meets the requirements such as irG_l88r

(There are no rules to these values so others can be input)

![05](/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-05.png)

You have now created a tenant and one user for each tenant that belongs to that tenant.

### Creating SaaS Users

Let's take a look at the user list. Click User Management from the side menu.

The user created earlier is registered as the admin (SaaS administrator) role for each tenant and each environment.

![06](/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-06.png)

- Depending on the SaaS, multiple environments may not be necessary, so if you use a single environment, just take prod into consideration.

Now, let's register one user for each tenant.

Click the "Create User" button on the top right

For now, let's register 4 people.

Email Address: [user1-1@example.com](mailto:user1-1@example.com)  
Password: password that meets the password requirements  
Tenant: Tenant Sample 1  
Username: User 1-1

<img src="/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-07.png" width="400">
</img>

Email Address: [user1-2@example.com](mailto:user1-2@example.com)  
Password: password that meets the password requirements  
Tenant: Tenant sample #1  
Username: User 1-2

Email Address: [user2-1@example.com](mailto:user2-1@example.com)  
Password: password that meets the password requirements  
Tenant: Sample application tenant 2  
Username: User 2-1

Email Address: [user2-2@example.com](mailto:user2-2@example.com)  
Password: password that meets the password requirements  
Tenant: Sample application tenant 2  
Username: User 2-2

![08](/img/tutorial/saas-management-using-the-saas-operation-console/saas-management-using-the-saas-operation-console-08.png)

4 additional users have been registered.

Now let's add roles to these users.
