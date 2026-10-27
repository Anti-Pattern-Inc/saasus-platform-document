---
title: "Features"
slug: "saasus-platform-features"
excerpt: "An overview of SaaSus Platform features and the consoles and APIs used to configure and integrate them."
hidden: true
createdAt: "Tue Oct 20 2026 06:43:54 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Oct 27 2026 01:08:45 GMT+0000 (Coordinated Universal Time)"
---

SaaSus Platform provides features for SaaS development and operations, including authentication, tenant management, and pricing plan management.  
Browse the descriptions to find the features you need. Follow each feature link for feature details, related APIs, and configuration and implementation guides.

## [Authentication and sign-in](/docs/part-3/saasus-platform-features/authentication)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Sign-in and sign-up](/docs/part-3/saasus-platform-features/authentication#sign-in-and-sign-up) | Let SaaS users register new accounts and sign in to existing accounts.<br />Use the login pages or integrate SaaSus API into custom sign-in pages. The login pages also support resending temporary passwords and recovering forgotten passwords. |
| [External identity providers](/docs/part-3/saasus-platform-features/authentication#external-identity-providers) | Sign in using Google or an external identity provider that supports SAML.<br />Google sign-in starts on the regular login page, while SAML sign-in starts at a tenant-specific login URL.<br />In both cases, authentication takes place with the connected identity provider. |
| [Multi-factor authentication (MFA)](/docs/part-3/saasus-platform-features/authentication#multi-factor-authentication-mfa) | Verify users with codes from an authenticator app or email in addition to their passwords.<br />Implement authenticator registration and MFA settings pages in your SaaS application; users can enter verification codes on the login pages when signing in. |
| [Device authentication](/docs/part-3/saasus-platform-features/authentication#device-authentication) | Remember trusted devices so users can skip MFA code entry on subsequent sign-ins.<br />In the SaaS Development Console, choose “Always remember,” “User opt-in” (remember only when the user chooses to), or “Do not remember.” |
| [Tokens and credentials](/docs/part-3/saasus-platform-features/authentication#tokens-and-credentials) | Obtain credentials for signed-in users and manage their sign-in state.<br />Exchange temporary codes received from the login pages for tokens. You can also refresh tokens or revoke refresh tokens. |

</div>

## [User management](/docs/part-3/saasus-platform-features/user-management)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [SaaS users](/docs/part-3/saasus-platform-features/user-management#saas-users) | Manage sign-in information and attributes for users registered with your service.<br />Use the SaaS Operations Console for daily administration, and integrate APIs when building your own administration pages or user-facing information change features.<br />Users register themselves through login page self-sign-up, while administrators use the user creation feature. |
| [Add and remove SaaS users from tenants](/docs/part-3/saasus-platform-features/user-management#add-and-remove-saas-users-from-tenants) | Add registered SaaS users to tenants and manage user information for each tenant.<br />Add users to or remove them from tenants in the SaaS Operations Console, or integrate APIs to provide administration features in your own application.<br />Your application implements access decisions for its pages and features using the retrieved tenant memberships and roles. |

</div>

## [Tenant management](/docs/part-3/saasus-platform-features/tenant-management)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Tenants](/docs/part-3/saasus-platform-features/tenant-management#tenants) | Create tenants and manage their basic details, attributes, and billing information.<br />Use the SaaS Operations Console to manage basic details, additional attributes, and billing information; integrate APIs to automate tasks such as tenant creation during subscription sign-up. |
| [Invitations](/docs/part-3/saasus-platform-features/tenant-management#invitations) | Invite users to a tenant.<br />Integrate invitation management such as creation and listing into your application; invited users can use the login pages to register, sign in, and accept.<br />Your application controls who can create invitations and which roles they can assign. |

</div>

## [Role, attribute, and environment definitions](/docs/part-3/saasus-platform-features/authorization)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Role definitions](/docs/part-3/saasus-platform-features/authorization#role-definitions) | Define roles such as administrator or regular user and assign them per tenant and environment.<br />Define roles in the SaaS Development Console and assign or remove them in the SaaS Operations Console.<br />Your application implements access control for its pages and features based on those roles. |
| [Attribute definitions](/docs/part-3/saasus-platform-features/authorization#attribute-definitions) | Define fields for additional user or tenant information, such as names, departments, or notes.<br />Define tenant user and tenant attributes in the SaaS Development Console; define SaaS user attributes through SaaSus API.<br />Defining attribute fields is separate from updating values for individual users or tenants. |
| [User environment definitions](/docs/part-3/saasus-platform-features/authorization#user-environment-definitions) | Define the environments users can access and their roles in each environment. For example, assign a user the administrator role for testing and the regular user role for production, and have your SaaS application determine which operations are allowed.<br />These definitions are separate from the environments you switch between in the SaaSus Platform Console. |

</div>

## [SaaS settings](/docs/part-3/saasus-platform-features/authentication-settings)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Basic settings](/docs/part-3/saasus-platform-features/authentication-settings#basic-settings) | Configure the domains used for login pages and notification emails, the redirect URL after sign-in, and credentials for calling SaaSus APIs.<br />Use the SaaS Development Console to configure domains and redirect URLs, and to view and manage the SaaS ID, API keys, and client secret. |
| [Advanced authentication settings](/docs/part-3/saasus-platform-features/authentication-settings#advanced-authentication-settings) | Configure login page appearance and links, password requirements, self-sign-up permissions, and notification emails.<br />Appearance settings apply to the login pages; password requirements and sign-up permissions also apply to authentication and registration processing.<br />Configure the sender and reply-to addresses and the subject and message for each email type, including registration, password recovery, and MFA. |

</div>

## [Pricing plans, usage, and billing](/docs/part-3/saasus-platform-features/pricing-billing)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Pricing structure design](/docs/part-3/saasus-platform-features/pricing-billing#pricing-structure-design) | Create pricing plans that combine fixed monthly charges with usage-based charges such as API call counts.<br />Build plans using meter units to record usage, pricing units to define charges, and feature menus to group pricing units. Apply the resulting plan and tax rate to a tenant. |
| [Record and retrieve usage](/docs/part-3/saasus-platform-features/pricing-billing#record-and-retrieve-usage) | Record usage for each tenant by meter unit and retrieve it by day, month, or time range.<br />Call the recording APIs when the measured activity occurs in your SaaS application, and use the results to display usage or calculate charges. |
| [Tenant subscriptions](/docs/part-3/saasus-platform-features/pricing-billing#tenant-subscriptions) | Manage the pricing plan, tax rate, and effective time for each tenant.<br />Configure subscriptions in the SaaS Operations Console, or implement plan selection and changes in your application. |

</div>

## [External service integrations](/docs/part-3/saasus-platform-features/external-integrations)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Stripe integration](/docs/part-3/saasus-platform-features/external-integrations#stripe-integration) | Synchronize pricing plans, tax rates, tenants, and usage managed in SaaSus Platform with Stripe for billing.<br />Configure the connection in the SaaS Development Console; synchronization then follows plan application and usage recording.<br />If you do not use Stripe, implement billing using the pricing, subscription, and usage information you retrieve. |
| [Amazon EventBridge](/docs/part-3/saasus-platform-features/external-integrations#amazon-eventbridge) | Deliver events such as user and tenant creation to your AWS account.<br />Configure the destination in the SaaS Development Console, then set up an event bus, rules, and targets in Amazon EventBridge. |
| [AWS Marketplace](/docs/part-3/saasus-platform-features/external-integrations#aws-marketplace) | Associate AWS Marketplace selling plans and customers with tenants.<br />Login pages handle new customer registration; implement the association with an existing tenant in your application. |

</div>

:::caution New use is suspended

The existing guide states that new use is suspended because the integration does not support changes to AWS Marketplace specifications.  
See [AWS Marketplace Integration](/docs/part-4/aws-marketplace-integration/aws-marketplace-integration) for availability.

:::

## [Logs, analytics, and feedback](/docs/part-3/saasus-platform-features/logs-analytics-feedback)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [API execution logs](/docs/part-3/saasus-platform-features/logs-analytics-feedback#api-execution-logs) | Inspect SaaSus API calls and their details.<br />Use the logs to investigate API errors and check request details. |
| [Usage analytics](/docs/part-3/saasus-platform-features/logs-analytics-feedback#usage-analytics) | Retrieve user activity history, user counts, metrics over time, and per-page statistics.<br />Use this information to monitor SaaS application usage and understand user activity. |
| [Feedback](/docs/part-3/saasus-platform-features/logs-analytics-feedback#feedback) | Collect questions and requests from SaaS users, and manage status, votes, and comments.<br />Implement user-facing submission and viewing pages in your application, and review and respond through the SaaS Operations Console. |

</div>

## [Smart API Gateway and Smart MCP Server](/docs/part-3/saasus-platform-features/smart-api-gateway)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [API publication settings](/docs/part-3/saasus-platform-features/smart-api-gateway#api-publication-settings) | Configure the connected SaaS application and the operations to expose, then publish APIs.<br />Configure and publish APIs in the SaaS Development Console, and integrate the SDK and annotations into your application following the reference guide. |
| [Access control](/docs/part-3/saasus-platform-features/smart-api-gateway#access-control) | Restrict which users and tenants can access published APIs, how often they can call them, and which source IP addresses are allowed.<br />Use API keys and roles assigned to users to control access to each published operation. |
| [Smart MCP Server](/docs/part-3/saasus-platform-features/smart-api-gateway#smart-mcp-server) | Expose APIs published through Smart API Gateway as MCP tools.<br />Publishing the APIs also makes the MCP server available automatically. Configure its endpoint and authentication credentials in an AI client to call the tools. |

</div>

## [SaaS infrastructure management](/docs/part-3/saasus-platform-features/saas-infrastructure)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [Provisioning settings](/docs/part-3/saasus-platform-features/saas-infrastructure#provisioning-settings) | Manage whether automatic provisioning is enabled, permissions for AWS access, and the files used for provisioning and initialization.<br />Prepare AWS CloudFormation templates and initialization SQL for your SaaS architecture. |
| [Tenant onboarding](/docs/part-3/saasus-platform-features/saas-infrastructure#tenant-onboarding) | Provision a dedicated application environment for a tenant and initialize its database when the tenant is created.<br />Check provisioning status through the `TenantOnboardingStatus` tenant attribute on the tenant management page in the SaaS Operations Console. |

</div>

## [SaaSus Platform administration](/docs/part-3/saasus-platform-features/development-administration)

<div className="feature-overview-table">

| Feature | Description |
| --- | --- |
| [SaaSus Platform administration](/docs/part-3/saasus-platform-features/development-administration) | Manage users of SaaSus Platform, your own account, and your SaaSus Platform subscription.<br />Use the account settings page in the SaaS Development Console and the user menus in both consoles. |

</div>
