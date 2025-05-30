---
title: "SaaSus Platform Architecture"
slug: "saasus-platform-architecture"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---


## 1. Role and Components of the Control Plane

Operating a SaaS application requires tenant management, user authentication & authorization, rate‑plan configuration, billing, and other complex shared capabilities. Building and maintaining these for every application incurs significant development effort and operational cost.

SaaSus Platform offers a **control plane** that centralizes these common features and provides SaaS‑specific best practices in a standardized form.

:::info
In this document, the consoles for configuring and operating a SaaS application—the **“SaaS Development Console”** and **“SaaS Operation Console”**—are collectively referred to as the **“SaaSus Platform Console.”**
:::

### Role

- Tenant‑scoped user management with role‑based access control  
- Automated authorization and billing that honor the subscribed rate plan  
- Flexible integration via web console and SDK/API  
- Event notifications for integrating with external services  

These capabilities let developers focus on their domain logic and user experience instead of re‑implementing common SaaS infrastructure.

### Components

The control plane is composed of the following modules.

| Module                     | Description                                                                                       |
|---------------------------|---------------------------------------------------------------------------------------------------|
| **SaaS Development Console** | Developer‑facing console for initial app setup, authentication settings, and rate‑plan definition. |
| **SaaS Operation Console**   | Operator‑facing console for tenant & user administration, billing review, and audit‑log access.     |
| **SaaSus SDK / API**         | Interfaces that embed authentication, tenant, and billing functionality into your own application.  |
| **Event‑Integration Feature**| Sends user actions and state‑change events to services such as Amazon EventBridge.                |

:::info
SaaSus Platform offers a simple way to integrate with Stripe. By registering your Stripe secret key in the SaaS Development Console, billing and subscription updates are automatically handled based on your pricing data in Stripe. This greatly improves operational efficiency in billing management for SaaS businesses.
:::

## 2. Overview of the SaaS Development Console / SaaS Operation Console / SDK/API

SaaSus Platform provides all configuration and management functions needed to build and operate a SaaS application through the **SaaS Development Console**, **SaaS Operation Console**, and **SDK/API**.  
Engineers, business owners, and operators each access only the information appropriate to their roles.

### System Overview

| Role            | Component(s) Used                    | Typical Tasks                                                                                                                                      |
|-----------------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Engineer**       | SaaS Development Console / SDK/API | Develop core product features, integrate with SaaSus Platform via the SDK/API, and handle initial setup such as login screens and authentication. |
| **Business Manager** | SaaS Development Console           | Define pricing plans, user permissions (roles), and security policies.                                                                             |
| **Operations Manager**       | SaaS Operation Console             | Manage customer tenants, handle user accounts, and monitor usage.                                                                                  |
| **End User**       | Your SaaS application              | Log in and use the service in accordance with the subscribed plan and permissions.                                                                 |

### Example Workflow

1. **Engineer** implements authentication, billing, and tenant‑management integration using the SaaSus SDK/API.  
2. **Business Manager** defines rate plans and access roles in the SaaS Development Console.  
3. **Operations Manager** manages customer tenants and their users in the SaaS Operation Console.  
4. **End User** logs in to the service and uses the features provided under their plan.

### System Diagram

![01](/img/part-3/saasus-platform-architecture/saasus_platform_architecture-01.png)

## 3. Mechanism for Authentication, Tenant Management, and Rate‑Plan Management

SaaSus Platform lets you configure and manage universally required SaaS capabilities—**user authentication**, **tenant (contract) management**, and **rate‑plan & billing management**—through a web console, and integrate them into your own application via SDK or API.

### Authentication & Authorization

Secure access control to your SaaS application.

- **Token‑based authentication**  
  When a user logs in, ID, access, and refresh tokens are issued. Subsequent API requests include these tokens for authentication.

- **Selectable login methods**  
  Standard email/password login and Google social login are available.

- **Role‑based user permissions**  
  Define roles (e.g., administrator, general user) so only authorized users can perform privileged actions.

### Tenant Management

Manage the contract unit called a **tenant**.

- **Tenant‑scoped user administration**  
  Register, edit, or delete users on a per‑tenant basis.

- **Contract status insight**  
  View each tenant’s subscribed plan and usage from the SaaS Operation Console.

### Rate‑Plan Management

Essential for SaaS monetization—**rate‑plan definition** and **billing processing**.

- **Create and edit rate plans**  
  Configure pricing models such as flat‑rate monthly or usage‑based.

- **Stripe integration**  
  Register your Stripe secret key to fully automate subscription, billing, and payment‑status management.
