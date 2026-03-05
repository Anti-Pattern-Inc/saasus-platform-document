---
title: "Domain & Email Sending Domain Authentication and Redirect Settings"
slug: "domain-and-redirect-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 05 2026 08:09:59 GMT+0000 (Coordinated Universal Time)"
---

This page explains how to configure your **custom domain** for the login screen and the **post-login redirect URL**. Both settings can be edited from the "Basic Settings" screen.

## 1. Domain & Email Sending Domain Authentication Settings

Configure the domain used by your SaaS application. This is an important setting that is also used as the sender domain for the login screen and various notification emails.  
Email sending domain authentication settings improve the delivery rate of notification emails and help prevent spoofing.

### Setup Steps

1. Log in to the SaaS Development Console.
2. From the side menu, select "Domain".
3. Enter the domain name you want to use and complete the registration.

※ Please use a domain for which DNS configuration is possible.

![Domain Input Screen](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-01.png)

### DNS Configuration

After registering your domain, the following configuration information will be displayed at the bottom of the screen. Please add the specified records using your DNS service.

#### Domain Ownership Verification (CNAME)

Register the displayed CNAME record in your DNS. This verifies ownership of your custom domain and provides a secure authentication screen.

#### Email Sending Domain Authentication (DKIM)

:::warning Note
Email sending domain authentication configuration is required when using Google authentication or invitation features.  
If you only want to set the login screen URL to a custom domain, email sending domain authentication configuration is not necessary.
:::

Please register all email sending CNAME records (there may be multiple) displayed on the screen to your DNS.  

![CNAME Display](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-02.png)

#### DNS Service Example
For Value Domain, configure as follows:

![DNS Configuration Example](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-03.png)

#### Status Verification

When DNS configuration is performed correctly, "Operating normally" will be displayed on the screen.

When email sending domain authentication (DKIM) is completed successfully, "Custom domain authentication email delivery is enabled" will be displayed on the screen.  
However, email sending domain authentication (DKIM) configuration may take 1-2 days for DNS propagation. If it is not reflected immediately after configuration, please wait some time and check again.

![DNS Verification Complete Screen](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-04.png)

#### Login Screen URL
The registered domain will be used as the login screen URL in the format `auth.domain-name`.  
This can be confirmed in the SaaS Development Console under "Authentication & Authorization" → "Authentication Details Settings" screen.

## 2. Post-Authentication Redirect URL Settings

Specify the URL (such as your company's SaaS application homepage) where users should be redirected after login completion.

![Redirect URL Settings Screen](/img/part-4/application-settings/domain-and-redirect-settings/authentication-preference-redirect-url.png)

Authentication information (tokens, etc.) will be passed to this URL.  
You can use the SaaSus SDK to implement callback processing to receive authentication at this URL.