---
title: "Customizing Authentication Pages such as Login Pages"
slug: "authorization-screen-customize"
excerpt: ""
hidden: false
createdAt: "Thu Apr 04 2024 05:25:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 04 2024 05:25:39 GMT+0000 (Coordinated Universal Time)"
---

# Customizing Authentication Pages such as Login Pages

To customize the login screen, click "Authentication Advanced Settings" from the side menu.

![01](/img/saas-development-console/authorization-screen-customize-01.png)

In the basic information, edit various information used on the authentication screen.

For example, in the login screen above,

- "Welcome to the SaaSus Platform" is the **service name**
- The icon at the top is **icon upload**
- The Terms of Use URL and privacy policy URL are **Terms of Use and Privacy Policy Link**  

becomes.

![02](/img/saas-development-console/authorization-screen-customize-02.png)

Click the "Save" button to apply your changes.

In addition, on the "Screen Settings" tab, you can select whether to display the Terms of Use and Privacy Policy on each screen: new registration screen, login screen, and password change screen.

On the "Authentication Settings" tab, you can configure various detailed authentication settings.

When the settings are complete, a login screen will be generated with the URL that has the domain name you set earlier appended with "auth.". Check if the login screen is displayed.

\* Once you save your changes, a new login screen will be generated. It may take a few minutes to generate, so please visit again after a few minutes to see what you have saved.

For example, if the domain name is set as “sample.saasus.jp”, the login screen will be provided at [https://auth.sample.saasus.jp/](https://auth.sample.saasus.jp/) .
