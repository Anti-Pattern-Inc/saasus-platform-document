---
title: "SaaSus Platform FAQ"
slug: "saasus-platform"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

## Frequently Asked Questions

**Q. What countermeasures are in place in case the service goes down?  
Is it possible to switch and continue operations?**  
A. The Tokyo region has three Availability Zones, and the service will not go down unless all AZs experience failure simultaneously.  
There has never been a case where all AZs in an AWS region went down, so we consider the risk extremely low.  
Multi-region DR using the Osaka region is possible, but due to cost and operational overhead, we recommend evaluating it based on your specific requirements.

---

**Q. Can I customize the design of the login screen?**  
A. Currently, only the "Service Name" and "Icon" can be customized via the SaaS Development Console.  
We may support CSS customization in the future.  
You can also implement a custom frontend, but it is not recommended as it requires ongoing updates for version compatibility.

---

**Q. What is the relationship between user IDs and tenants?**  
A.  
- One user can belong to multiple tenants  
- A tenant can have multiple users  
- Roles can be assigned per tenant, allowing different permissions per tenant

---

**Q. Are there any browser limitations?**  
A. At present, only Chrome on macOS is officially supported.  
However, we’ve tested on the latest versions of Firefox, Edge, and Safari, and there are no known issues.

---

**Q. Can I use SaaSus Platform in an intranet-only (offline) environment?**  
A. No, the service requires an internet connection. Intranet-only environments are not supported.

---

**Q. How is security (e.g. vulnerabilities) handled?**  
A.  
- **Infrastructure**: Protected by AWS-managed services at the OS and below  
- **Application**: Dependencies are continuously scanned and updated using vulnerability detection tools

---

**Q. Can I back up and restore data from the SaaSus Platform Console?**  
A. The console does not currently offer manual backup or point-in-time restore features.  
Please consider using the API for backup purposes.

---

**Q. Are there any performance concerns in unlimited-user plans?**  
A. Each customer has a dedicated data store, and the compute layer auto-scales based on load.  
Even large-scale user counts are supported. If you provide specific requirements (e.g. user count, peak access), we can run performance tests and provide a proposal.

---

**Q. Is there an SLA (Service Level Agreement)?**  
A. Enterprise plans offer an SLA with 99.99% uptime guarantee. Pricing is available upon request.  
Please [contact us](https://saasus.io/pricing#support) for more information.

---

**Q. Can SaaSus Platform run on infrastructure other than AWS?**  
A. Core features are cloud-agnostic.  
However, integration features such as Amazon EventBridge and AWS Marketplace are AWS-only.

---

**Q. Are there any UI/UX restrictions?**  
A. No. Frameworks like React, Vue.js, and server-side rendering are supported.
Please [contact us](https://saasus.io/pricing#support) if you have specific frontend requirements.

---

**Q. Are there any microservice adoption examples?**  
A. No public examples are available yet. However, services like WMS (Warehouse Management Systems) can benefit from microservice-based architecture. We’re happy to discuss use cases.

---

**Q. Can the SaaSus Platform Console be transparently displayed under a custom domain?**  
A. The end-user will not notice the use of SaaSus Platform.  
However, network requests to SaaSus Platform may be visible via browser developer tools.

---

**Q. Are users shared across multiple environments (production/staging)?**  
A. No, each environment has an isolated user base. Users are not shared across production and staging.

---

**Q. Can you share practical use cases for role management?**  
A. Example:  
- Define roles such as Shipper / Admin / Worker  
- Control menu visibility and permissions per role  
- Combine with location info, such as:  
  - Show "Worker activity in Location A" to Admins of Location A  
  - Allow workers in Location A to access only their own data  
  - Restrict access to other locations

---

**Q. Can my SaaS app retrieve tenant info for display (e.g. company name, address on reports)?**  
A. Yes.  
By default, detailed info like address or phone is not included, but you can define custom tenant attributes (e.g. address, contact person) in the SaaS Development Console.  
These can be retrieved via the API or displayed in the UI for report generation.
