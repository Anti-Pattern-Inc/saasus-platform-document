---
title: "User Attributes"
slug: "declare-additional-attribute-to-user"
excerpt: ""
hidden: false
createdAt: "Wed Apr 08 2024 14:34:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Apr 08 2024 14:34:47 GMT+0000 (Coordinated Universal Time)"
---

## Declare Additional Attribute To User

In the SaaSus Platform, initially managed SaaS users only have a user ID (UUID) and an email address. You can set additional attributes for the user if needed.

Select "User Attribute Definition" from the side menu.

![01](/img/part-4/user-authz-settings/declare-additional-attribute-to-user/declare-additional-attribute-to-user-01.png)

SaaS designers need to consider user attributes that are managed on both the SaaSus Platform side and the SaaS side, and consider which attributes should be managed on the SaaSus Platform side and which attributes should be managed on the SaaS side.

For example, if you want to manage all user information on the SaaSus Platform side, define the necessary additional attributes on the SaaSus Platform. However, there are cases where you do not want to manage important information such as personal information on the SaaSus Platform side, or where you want to perform various aggregations based on additional user attributes. In that case, only authentication is required on the SaaSus Platform side, and user information is managed on the SaaS side based on the user master. By linking the UUID with the authentication information on the SaaSus Platform side, you can respond flexibly.

This time, let's define an attribute called "username".

Click the "+Create User Attribute" button to display a popup for creating user attributes.

The attribute name is used as a key for identification on the SaaS application (program) side. Therefore, we recommend that you enter it in alphabetical characters.

Use the display name to help you understand what the attribute is.

Type specifies the data type.

This time, perform the following settings.

- Attribute Name: username
- Display Name: Username
- Type: String

When you have completed your entries, click the "Create" button.

![02](/img/part-4/user-authz-settings/declare-additional-attribute-to-user/declare-additional-attribute-to-user-02.png)

Added user attributes.

![03](/img/part-4/user-authz-settings/declare-additional-attribute-to-user/declare-additional-attribute-to-user-03.png)