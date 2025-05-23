---
title: "Multi-factor Authentication Setting"
slug: "multi-factor-authentication"
excerpt: ""
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
---

This document explains how to configure **Multi-Factor Authentication (MFA)** for both **SaaSus Platform** and **SaaS applications**.

# Configuring Multi-Factor Authentication (MFA) for a SaaSus Platform Account

1. Click the user menu in the top-right header of the **Development Console**.
2. Click `Multi-factor Authentication Setting`.
3. Click the `Add Device` button.  
   ![multi-factor-authentication-1](/img/saas-development-console/multi-factor-authentication-1.png)

4. Click `Show QR Code` to display the QR code.  
   ![multi-factor-authentication-2](/img/saas-development-console/multi-factor-authentication-2.png)

5. Scan the displayed QR code using **Google Authenticator** or **Authy**.

6. Enter the **6-digit code** generated by the app and click `Certification`.

7. Once MFA is enabled, you will be required to enter a verification code upon login.

---

# Implementing Multi-Factor Authentication in a SaaS Application

To enable MFA in a SaaS application, follow the steps below.

**MFA Implementation**  
To enable MFA in a SaaS application, you need to integrate an additional authentication step into your login flow.
For details on API usage and implementation, please refer to the <a href="/docs/implementation-guide/implementing-multi-factor-authentication-apiserver" target="_blank">MFA Implementation (API Server)</a> page.

**Remember Trusted Devices**  
You can configure whether users' trusted devices should be remembered.  
If a trusted device is remembered, users can **skip MFA verification for subsequent logins**.

> **How to Configure**  
> The **Remember Trusted Devices** can be changed in the **Authentication  tab** under the **Advanced Settings** in the **Development Console**.  
> ![multi-factor-authentication-3](/img/saas-development-console/multi-factor-authentication-3.png)

**Available Configuration Options**  

| Option                  | Description |
|------------------------|------------------------------------------------------|
| **Always Remember**     | Automatically remembers **all user devices**, skipping MFA for subsequent logins. |
| **User Opt-in**         | Displays a **"Remember this device"** checkbox on the login screen.<ul><li>Only devices for which users select this option will be remembered.</li><li>MFA verification will be skipped for subsequent logins on those devices.</li></ul> |
| **Don't Remember**     | **MFA is required for every login.** |

