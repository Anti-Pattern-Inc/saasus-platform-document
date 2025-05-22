---
sidebar_position: 2
title: "Prepare SaaS Platform"
slug: "prepare-saas-platform"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:46:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

### Creating a SaaSus Platform Account

First, let's create an account on SaaSus Platform.

Display the new registration screen and register using your email address.

[https://auth.saasus.io/sign-up](https://auth.saasus.io/sign-up)

Please enter your email address, read the terms of use and privacy policy, and check the box if you agree. Then click the new registration button.

![01](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-01.png)

A temporary password will be sent to the email address you entered. Enter the temporary password you received and the new password you want to register. Press the "Set new password" button to activate your account.

![02](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-02.png)

When you register with SaaSus Platform for the first time, we will create a tenant exclusively for you. This will take at least an hour as we are creating an AWS account specifically for you. Once your account creation is complete, you will receive instructions at the email address you provided earlier.

![03](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-03.png)

### Logging into the Console

When you log in after the tenant is created, you will be asked to enter user attributes as shown above, so please enter your company name and name.

![04](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-04.png)

After entering the information, a transition screen to each console of the tenant will be displayed.

![05](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-05.png)

**SaaS Development Console** is a console for setting up SaaS construction.

**SaaS Management Console** is a console for managing SaaS.

:::info About Domain Settings
By setting a domain on the SaaSus Platform, you can define the base domain used for automatically generating the login screen and for sending emails.  
For details on how to set a domain, please see [Domain and Redirect Settings](/docs/part-4/application-settings/domain-and-redirect-settings).
:::

:::info About Customizing the Login Screen
The automatically generated login screen can display your service name and icon, and also include links to your terms of use and privacy policy.  
For customization instructions, please refer to [Basic App Settings](/docs/part-4/application-settings/basic-app-settings).
:::

### Setting destination URL after authentication

Based on the domain name you configured, SaaSus Platform generates a login screen. After logging in, the authentication information is transferred to the SaaS side.<br/>
The URL of the SaaS to be taken over must be registered as the Callback URL.

Click "Transition destination after authentication" from the side menu to display the Callback URL setting screen.

Typically, you set the Callback URL based on the URL of the SaaS offering.<br/>
However, since we will be running the sample application locally this time, we will configure it as follows.

- For Laravel: [http://localhost/callback](http://localhost/callback)
- For Express: [http://localhost:3000/callback](http://localhost:3000/callback)

![06](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-06.png)

Once you have configured the Callback URL, there are a few additional settings that must be completed before continuing with the tutorial.

:::caution Required Setup Before Starting the Tutorial
To proceed smoothly with the upcoming tutorial steps, it is **essential** to define additional attributes for users and tenants, and to configure roles in advance.

Please complete the following setup beforehand:

- [User Attributes](/docs/part-4/user-authz-settings/declare-additional-attribute-to-user)
- [Tenant Attributes](/docs/part-4/application-settings/declare-additional-attribute-to-tenant)
- [Roles](/docs/part-4/user-authz-settings/role-definition)

The following steps assume that these configurations have already been completed.
:::

Once the SaaSus Platform is ready, we will incorporate it into the sample application.