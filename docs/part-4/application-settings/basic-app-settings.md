---
title: "Basic App Settings"
slug: "basic-app-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

This page allows you to configure information used in authentication-related screens, such as the login screen (e.g., service name, icon, and terms of use URL).

You can edit these settings from the **“Authorization Details”** item in the side menu.

![Authorization Details Menu](/img/part-4/application-settings/basic-app-settings/authorization-screen-customize-01.png)

The following items can be edited:

| Item                     | Description |
|--------------------------|-------------|
| **Service Name**         | Text displayed at the top of the login screen (e.g., \"Welcome to SaaSus Platform\") |
| **Icon**                 | App icon displayed in the top-left of the login screen (recommended size: square, at least 128px) |
| **Terms of Use URL**     | URL linked from the “Terms of Use” text at the bottom of the login screen |
| **Privacy Policy URL**   | URL linked from the “Privacy Policy” text at the bottom of the login screen |

![Example Edit Screen](/img/part-4/application-settings/basic-app-settings/authorization-screen-customize-02.png)

Clicking the **Save** button will apply your changes. It may take a few minutes for the updated screen to be generated.

The login screen URL will be your configured domain name with `auth.` prefixed.  
Example: If your domain is `sample.saasus.jp`, the login screen will be `https://auth.sample.saasus.jp/`.

:::info
- Under the **“Pages”** tab, you can choose whether to show links to the Terms of Use and Privacy Policy on the registration, login, and password change screens.
- Under the **“Authentication Settings”** tab, you can configure login methods and password reset options.
:::