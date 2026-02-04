---
title: "Authentication Method Settings"
slug: "authentication-method-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

This page describes how to configure the following authentication-related features in the **Authentication** tab of the **Advanced Settings** screen in the SaaSus Platform:

- Password requirements  
- Enabling Google login  
- Allowing self-signup  
- Remembering trusted devices  

## Configuring Password Requirements

You can configure password requirements such as minimum length and required character types (numbers, symbols, uppercase, lowercase).

### Configuration Screen

![Password Requirement Settings](/img/part-4/user-authz-settings/authentication-method-settings/auth-password-policy.png)

## Enabling Google Login

To enable Google login, you must first configure settings in **Google Cloud Console** and register the OAuth client information in the SaaSus Platform.

For detailed steps, see [Google Linkage](/docs/part-4/user-authz-settings/google-linkage).

Once setup is complete, you can enable Google login from the **Authentication Settings** tab.

## Allowing Self Signup

You can choose whether users can register themselves from the login screen.

- **Enabled**: A “Sign Up” link appears on the login screen.  
- **Disabled**: Users must be invited by an administrator.

## Remembering Trusted Devices

:::info
This feature is only valid when **multi-factor authentication (MFA)** is implemented in your SaaS application.  
For details on API usage and implementation examples, see [Metering API Implementation Samples](/docs/part-6/implementation-guide/sample-application/multi-factor-authentication).
:::

You can configure whether to remember a user’s trusted device.  
If MFA is enabled and the device is remembered, the user can skip MFA on subsequent logins.

### Configuration Screen

![remember-trusted-devices](/img/part-4/user-authz-settings/authentication-method-settings/remember-trusted-devices.png)

**Available options are as follows:**  

| Option                  | Description |
|------------------------|------------------------------------------------------|
| **Always Remember**     | Automatically remembers **all user devices**, skipping MFA for subsequent logins. |
| **User Opt-in**         | Displays a **"Remember this device"** checkbox on the login screen.<ul><li>Only devices for which users select this option will be remembered.</li><li>MFA verification will be skipped for subsequent logins on those devices.</li></ul> |
| **Don't Remember**     | **MFA is required for every login.** |

