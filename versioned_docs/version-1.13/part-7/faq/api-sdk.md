---
title: "API / SDK FAQ"
slug: "api-sdk"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

**Q. When I execute the invitation API, I get an error "Both DNS and SES must be validated...". What is the cause?**  
A. This is caused by incomplete domain configuration or the domain not being validated (verified) for sending authentication emails (invitation emails).

To send invitation emails to users, DKIM authentication with a domain owned by the customer is mandatory from the perspective of security and deliverability.

**Solution**  
Please enable the domain by following these steps:

1. **Domain Registration**  
   Register the domain to be used as the sender from "Common Settings" > "Domain" in the SaaS Development Console.

2. **Obtain and Configure DNS Records**  
   Configure the DKIM record information (CNAME, etc.) displayed after registration to your DNS server (Route 53, Cloudflare, etc.).

3. **Verify Completion**  
   After configuration, the system will verify the domain. It may take up to 2-3 days for the changes to be reflected.

**Ready to Use Status**  
When the status "Authentication email delivery by custom domain is enabled." is displayed on the domain configuration page of the SaaS Development Console, the invitation function will work properly through the API.

---