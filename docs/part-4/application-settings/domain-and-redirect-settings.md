---
title: "Domain and Redirect Settings"
slug: "domain-and-redirect-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
This page explains how to configure your **custom domain** used for the login screen and the **post-login redirect URL**. Both can be set from the **Basic Settings** screen.

### 1. Domain Settings

Configure the domain used by your SaaS application. This is an important setting used not only for the login screen but also as the sender domain for various notification emails.

#### Setup Steps

1. Log in to the SaaS Development Console.  
2. From the side menu, select **Domain**.  
3. Enter the domain name you want to use and complete the registration.

*Note: Please use a domain for which you can configure DNS settings.*

![Domain Input Screen](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-01.png)

#### DNS Configuration

After registering your domain name, a CNAME record will appear at the bottom of the screen after a few seconds.

This CNAME record is for DNS validation to confirm the domain name you own.

Please register this CNAME record value in your DNS. (GoDaddy, Namecheap, Domain.com, Name.com, AWS Route53, Azure DNS, Cloud DNS, .etc)

![CNAME Display](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-02.png)

After registering with your own DNS, the verification will be completed in a few minutes and the message "The following DNS information has been verified and is working properly." will be displayed.

This completes the preparations for configuring the SaaS Platform.

![03](/img/part-4/application-settings/domain-and-redirect-settings/domain-name-preference-03.png)

SaaSus Platform automatically generates a login screen based on this domain.

### 2. Post-Login Redirect URL Settings

Set the URL where users should be redirected after a successful login—typically the homepage of your SaaS application.

![Redirect URL Settings](/img/part-4/application-settings/domain-and-redirect-settings/authentication-preference-redirect-url.png)

Authentication information (such as tokens) will be passed to this URL.  
You can use the SaaSus SDK to implement a callback handler at this destination to receive and process the authentication result.