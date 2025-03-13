---
sidebar_position: 2
title: "Prepare SaaS Platform"
slug: "prepare-saas-platform"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:46:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

\*You can also watch the entire process via video.  
[https://www.youtube.com/watch?v=deSkPJ-zTgw](https://www.youtube.com/watch?v=deSkPJ-zTgw)

## Preparing the SaaSus Platform

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

:::info
By setting a domain on SaaSus Platform, you can set it as the base domain for automatically generating the login screen and sending emails.<br/>
For information on how to set up your domain, please see [Domain Name Preference](../saas-development-console/domain-name-preference).
:::

### Define Additional Attributes for Users

Next, define user attributes.

Click "User Attribute Definition" on the side menu.

![06](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-06.png)

On the default SaaS Platform managed SaaS users only have user IDs (UUIDs) and email addresses. If this is not enough, users can be assigned additional attributes.

SaaS designers need to consider which user attributes should be on the SaaS Platform side and which attributes should be on the SaaS side.

For example, if you want to manage all user information on the SaaS Platform side, define the required additional attributes in the SaaS Platform. However, there are cases where you do not want to manage important information such as personal information on the SaaS Platform side, or you want to perform various aggregations based on additional user attributes. In that case, it is more flexible to require only authentication on the SaaS Platform side, manage user information on the SaaS side based on the user master, and associate the UUID with the authentication information on the SaaS Platform side.

For this example, the sample application requires a username, so let's define an attribute called "username".

Click the "+ Create User Attribute" to display the dialog for creating user attributes

The attribute name is used as a key for identification on the SaaS application (code) side. Therefore, it is important to enter in English.

Display name is described so that the attribute can be easily understood

Type specifies the data type.

For the sample application, set as follows

- Attribute Name: username
- Display Name: Username
- Type: String

After entering, press the "Create" button

![07](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-07.png)

User attributes added.

![08](/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-08.png)

:::info
Please refer to the following page for the main registration settings required when actually developing a SaaS application.<br/>
[Declare Additional Attribute To User](../saas-development-console/declare-additional-attribute-to-user)<br/>
[Declare Additional Attribute To Tenant](../saas-development-console/declare-additional-attribute-to-tenant)<br/>
[Role Definition](../saas-development-console/role-definition)
:::

Once the SaaSus Platform is ready, we will incorporate it into the sample application.