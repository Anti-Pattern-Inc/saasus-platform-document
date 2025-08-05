---
title: "SaaSus Platform FAQ"
slug: "saasus-platform"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

**Q. What countermeasures are available when the service goes down?  
Is it possible to switch and continue business operations?**  
A. The Tokyo region has 3 Availability Zones, and the service will not stop unless all of them experience simultaneous failures.  
AWS has never had a case where all AZs in a region stopped simultaneously, so we consider the risk extremely low.  
A multi-region DR configuration using the Osaka region is also possible, but please consider human resource downtime and cost factors when making decisions based on your requirements.

---

**Q. Can the login screen design be changed?**  
A. Currently, only the "Service Name" and "Icon" can be changed from the SaaS Development Console.  
We may consider CSS customization support in the future.  
Implementation with a custom frontend is also possible, but it is not recommended due to the effort required to keep up with version updates.

---

**Q. What is the relationship between user IDs and tenants?**  
A.  
- One user can belong to multiple tenants  
- One tenant can have multiple users registered  
- Roles can be assigned per tenant, allowing different permission settings for each tenant

---

**Q. Are there any browser restrictions?**  
A. Currently, only Chrome on macOS is guaranteed to work.  
However, we have confirmed operation on the latest versions of major browsers such as Firefox, Edge, and Safari, and there are no special restrictions.

---

**Q. Is it possible to use in an internet-disconnected (intranet-only) environment?**  
A. Currently, the service is premised on internet connection, so it cannot be used in intranet-only environments.

---

**Q. How is security (vulnerability) guaranteed?**  
A.  
- Infrastructure layer: Protected by AWS managed services at the OS level and below  
- Application layer: Dependencies are continuously scanned and updated using vulnerability detection tools  

---

**Q. Is backup and restore possible from the SaaSus Platform console?**  
A. The SaaSus Platform console does not provide arbitrary backup/point-in-time restore functions, so please consider backup via API if needed.

---

**Q. Plans have user number restrictions, but are there no performance issues even with unlimited plans?**  
A. We provide dedicated data stores for each customer as standard, and computational processing auto-scales according to load conditions, so unlimited plans can handle large-scale user numbers.  
If you provide specific performance requirements (user count, access trends, peaks, etc.), we can conduct performance tests and make proposals.

---

**Q. Is there an SLA (availability guarantee)?**  
A. Enterprise plans provide an SLA (Service Quality Guarantee) with 99.99% uptime.  
Pricing is based on individual estimates, so please [contact us](https://saasus.io/pricing#support).

---

**Q. Can it be used on infrastructure other than AWS?**  
A. Basic functions can be used cloud-independently.  
However, Amazon EventBridge and AWS Marketplace integration functions are only supported in AWS environments.

---

**Q. Are there any UI/UX constraints?**  
A. There are no particular constraints. It supports React, Vue.js and other frontend implementations as well as server-side rendering.  
Please [contact us](https://saasus.io/pricing#support) if you have specific requirements.

---

**Q. Are there any microservice adoption examples?**  
A. There are no public examples at this time, but microservicing specific functions such as WMS can be expected to improve scalability. Discussion is possible upon consultation.

---

**Q. Can the SaaSus Platform console be displayed transparently from a specified domain URL?**  
A. It is designed so that customers cannot see through the use of SaaSus Platform.  
However, requests to SaaSus Platform can be confirmed by checking communication content with browser developer tools.

---

**Q. Is user management shared across multiple environments (production/staging)?**  
A. User management is independent for each environment, and users will not be mixed between production and staging.

---

**Q. Please tell me specific use cases for the role management function.**  
A. For example, the following operations are possible:  
- Define roles such as shipper/administrator/worker and control display menus and operation permissions for each role  
- By combining with location information,  
  - Display "worker operation status at location A" to administrators of location A  
  - Allow workers at location A to access only their own location's data  
  - No access to information from other locations  

---

**Q. Can tenant information be referenced on the SaaS side? (Want to use for printing company names and addresses on reports)**  
A. Yes, it is possible.  
By default, detailed information such as addresses and phone numbers is not included,  
but you can add necessary fields (e.g., address, phone number, contact person name, etc.) from "Tenant Attribute Definition" in the SaaS Development Console.  
Added attributes can be retrieved via API or screen display, so they can be used as data for report printing.

---

**Q. Are there limits on the number of tenants and users?**  
A. Upper limits are set according to your plan.  
For specific upper limits, please check the [plan details](https://saasus.io/pricing).  
When the limit is reached, warnings will be displayed on the SaaS Operation Console.
Notifications will also be sent to your registered email address, so please consider upgrading to a higher plan.
