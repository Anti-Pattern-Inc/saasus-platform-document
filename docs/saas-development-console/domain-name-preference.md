---
title: "Domain Name Preference"
slug: "domain-name-preference"
excerpt: ""
hidden: false
createdAt: "Wed Apr 03 2024 14:18:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Apr 03 2024 14:18:38 GMT+0000 (Coordinated Universal Time)"
---

# Setting the Domain Name

\*If you do not have a domain name, please set it up after acquiring the domain.

1. Log in to the SaaS development console.
1. Select "Domains" from the side menu.
1. The domain registration screen will be displayed, where you can register the domain name you want to use. This domain name will be used as the base domain on the login screen and when sending emails.<br/>
After registration, you will need to create a DNS record, so please register a **domain name that you can operate** yourself.

![01](/img/saas-development-console/domain-name-preference-01.png)

These are the steps to register a domain name.

After registering your domain name, a CNAME record will appear at the bottom of the screen after a few seconds.

This CNAME record is for DNS validation to confirm the domain name you own.

Please register this CNAME record value in your DNS. (GoDaddy, Namecheap, Domain.com, Name.com, AWS Route53, Azure DNS, Cloud DNS, .etc)

![02](/img/saas-development-console/domain-name-preference-02.png)

After registering with your own DNS, the verification will be completed in a few minutes and the message "The following DNS information has been verified and is working properly." will be displayed.

This completes the preparations for configuring the SaaS Platform.

![03](/img/saas-development-console/domain-name-preference-03.png)

SaaSus Platform automatically generates a login screen based on this domain.