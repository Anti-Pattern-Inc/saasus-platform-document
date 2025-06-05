---
title: "Overview of SaaS Development Console"
slug: "saas-development-console-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

## 1. Role of the SaaS Development Console

The SaaS Development Console is used in the following situations:

- Initial setup before integrating authentication, billing, and pricing features into your own application  
- Creating the foundational configuration for a new service launch  
- Defining access control policies such as login methods and roles  
- Testing operations and verifying settings prior to production launch  

## 2. Screen Layout and Key Menus

When you log in to the SaaS Development Console, a navigation menu appears on the left side of the screen. From here, you can access various configuration sections.

![01](/img/part-4/saas-development-console-overview/saas_development_console_overview-01.png)  
![02](/img/part-4/saas-development-console-overview/saas_development_console_overview-02.png)

### Main Menu Structure

| Menu                   | Description                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------|
| **Dashboard**          | View release information and platform updates.                                               |
| **Basics**     | Configure your SaaS app’s domain, redirect URL after authentication, and check your API key. |
| **Authentication Authorization** | Set app details, login methods (password/Google), user attributes, and role definitions. |
| **Pricing Plans**      | Flexibly create, edit, and manage pricing plans combining flat-rate and usage-based tiers.    |
| **Integration** | Automate billing by registering your Stripe secret key via the \"Integration > Billing\" screen. |

:::info
- You can switch between the SaaS Development Console and SaaS Operation Console using the selector at the top of the navigation menu.  
- A chat support feature (Intercom) is available at the bottom-right of the screen.  
- The SaaS Development Console groups multiple configuration functions under single menu items like \"Authentication & Authorization\" and \"Pricing Plans.\"  
- In contrast, the SaaS Operation Console presents each function as a separate menu item.  
:::

## 3. Frequently Used Menus and Basic Operations

### Dashboard

- Check announcements and update notifications from the SaaSus Platform.

### Authentication Authorization Menu

- **Service Name**: Set the name displayed on login and redirect screens.  
- **Icon Upload**: Upload a service icon (shown on the login screen, etc.).  
- **Terms of Use URL / Privacy Policy URL**: Define the links shown on the login screen.  
- **Login Method**: Choose whether to allow Google login in addition to password login.  
- **Role Definitions**: Define and manage access permissions by user role (e.g., Admin, General User).  

### Basics Menu

- **Domain Configuration**: Specify a custom domain for your SaaS app.  
- **Post-login Redirect URL**: Set the URL to redirect users to after successful login (e.g., application homepage).  
- **API Key Access**: View keys required for SaaSus SDK and API integrations.