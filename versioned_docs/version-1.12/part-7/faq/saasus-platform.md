---
title: "SaaSus Platform FAQ"
slug: "saasus-platform"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 31 2026 11:08:50 GMT+0000 (Coordinated Universal Time)"
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

**Q. Is the login screen using a DV certificate? Is the security adequate?**  
A. Yes, we use a DV (Domain Validation) certificate.  
Communication is encrypted, so the security of login information is ensured.  
There is no difference in encryption strength compared to OV certificates.

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

**Q. Can SaaSus Platform run on platforms other than AWS?**  
A. Core features can be used without depending on cloud platforms.  
However, the following features are only supported on AWS environments:  
    - Amazon EventBridge integration
    - AWS Marketplace integration
    - SaaS infrastructure management
    - Smart API Gateway features (Smart MCP Server features)

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
When the limit is reached, warnings will be displayed on the SaaS Operation Console and notifications will be sent to your registered email address. You can continue using the service for a certain period, but please consider upgrading to a higher plan.

---

**Q. I received a notification about scheduled SaaSus Platform account deletion. What should I do?**  
A. This email is sent when SaaS users have not logged in for more than one month.  
To avoid account deletion, please log in to SaaSus Platform or  
log in from the SaaS login screen created by SaaSus Platform.  
The SaaS login URL can be found in the "Authentication Settings" section of the SaaSus Platform Development Console.  

---

**Q. What happens to my account if I enter the wrong password multiple times?**  
A. For enhanced security, accounts are temporarily locked when passwords are entered incorrectly multiple times in succession.

 - **When the password is incorrect**
The authentication request returns "Incorrect username or password." At this point, the account is not yet locked.

 - **When password attempt limit is exceeded**  
When authentication failures continue for a certain number of times, the account is locked for security reasons. In this state, authentication requests return "Password attempts exceeded" and sign-in becomes impossible.

The specific number of attempts is not disclosed, but the lockout period is automatically adjusted according to the number of unauthorized attempts, and is usually automatically released after a certain period of time.
To prevent long-term lockouts, please use the password reset function if you are unsure of the correct password.

---

**Q. I set up integration with an external ID provider such as Google, but an error occurs during login.**

A. To use authentication via an external ID provider, both **"Domain Settings"** and **"Email Sending Settings (SES)"** must be verified for security and reliability. Please check the following settings:

 - **Domain Verification Status**  
In the [Basic Settings] > [Domain] screen, please check if the status of the registered domain is **"Valid (Verified)"** and **"Authentication email delivery via custom domain is enabled."**
If not verified, you need to correctly set the displayed DNS records in your DNS server (such as AWS Route 53) and complete the verification.

 - **Wait Time for Settings to Take Effect**  
DNS settings and enabling authentication email delivery via custom domain may take up to 2-3 days for processing within the system and propagation across the network.
Please wait until **"Authentication email delivery via custom domain is enabled"** is displayed in the console.

---

**Q. Can I test Google login and other operations in a local development environment (localhost)?**

A. Yes, you can. You can verify operations by specifying a local environment URL (such as http://localhost:3000/callback) as the post-authentication redirect destination.
When performing verification, please note the following:

 - **Domain Verification Status**
In the [Basic Settings] > [Domain] screen, please check if the status of the registered domain is **"Valid (Verified)"** and **"Authentication email delivery via custom domain is enabled."**

---

**Q. Please tell me the recommended configuration for improving API response speed.**  
A. SaaSus Platform currently provides services in **ap-northeast-1 (Tokyo Region)**. To maximize performance, we recommend deploying your application servers in the same Tokyo region.

 - **Optimization through region matching**  
 By placing your application servers and SaaSus Platform in the same Tokyo region, you can minimize network latency (communication delay) due to physical distance and achieve high-speed responses.

 - **About connections from overseas regions**  
 When calling SaaSus APIs from overseas regions such as us-west-2 (US West), delays due to geographical distance may occur and affect user experience.  
 For services targeting users in Japan, please consider operating in the Tokyo region.

---

**Q. Are there any precautions when implementing a feature to unlink integration with external services?**

A. To unlink external integrations, use the [Unlink Provider API](https://docs.saasus.io/docs/reference/auth-api#tag/saasUser/operation/UnlinkProvider). We recommend implementing a screen where users can request unlinking themselves, determining the current integration status from the ID token, and toggling button display/hide accordingly.

---

**Q. How can I determine whether a logged-in user is already linked with an external service such as Google?**

A. You can check the linked external provider information by decoding the ID token (idToken) obtained during authentication.
The identities field in the decoded ID token contains the integration information.
If the providerName field contains a provider name such as "Google", you can determine that the account is linked with an external service.

---

**Q. Is there a setting to extend the expiration time of ID tokens to improve development efficiency?**

A. For security reasons, we do not provide a setting to directly extend the expiration time of ID tokens themselves.
To compensate for the characteristic of ID tokens becoming invalid in a short period and save the trouble of re-login, we recommend implementing automatic renewal using refresh tokens.

 - **Role of Refresh Tokens**  
When an ID token expires, it is possible to re-obtain a new ID token in the background without displaying the login screen to the user again.
This allows you to significantly improve convenience during development and use while maintaining a secure state.

 - **Implementation Method Reference**  
For specific procedures on using refresh tokens, please refer to [Updating Authentication Information Using Refresh Tokens](https://docs.saasus.io/docs/part-6/usecase/authentication-methods#%E3%83%AA%E3%83%95%E3%83%AC%E3%83%83%E3%82%B7%E3%83%A5%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3) in the official documentation.

 - **Operational Tips**  
When tokens are frequently needed for API development, you can build an environment where developers can continue using valid tokens without being aware of it by incorporating refresh token renewal processing into a common authentication library or middleware.

---

**Q. Can I check the usage status of metering items for each tenant and daily trends?**

A. SaaSus Platform allows you to check the current metering values for each tenant from the console or API. We are also currently planning to provide a dashboard function that visualizes detailed usage trends.

 - **Checking Current Usage Status**  
The latest metering values for each tenant can be referenced in real-time through the "Tenant Details" screen in the SaaSus Development Console or through the SaaSus SDK/API.

 - **Checking via Stripe Console**  
If you are using Stripe integration, you can also check metering status and billing-related usage statistics linked to each customer (tenant) from the Stripe management console.

 - **Analysis Using Amazon EventBridge Integration**  
By utilizing the Amazon EventBridge integration feature, metering update events can be notified to your AWS environment in real-time. By accumulating the notified data in a database and combining it with BI tools, you can flexibly visualize detailed change history such as "how much usage increased or decreased on which day" and create custom analysis reports.

 - **Dashboard Function Provision Plan**  
We are currently planning to develop a dashboard function and statistical function that can graphically display usage status in a list. Please look forward to further feature enhancements in future updates.

---

**Q. Can I customize the color scheme of the login screen to match my company's brand color or freely customize the design?**

A. The login screen provided as standard by SaaSus Platform does not currently support color customization or applying custom designs.

 - **Method to Achieve Free Design**  
If you want to achieve a custom design login screen that matches the worldview of your SaaS, we recommend custom implementation of login functionality using the authentication API provided by SaaSus Platform.

 - **Secure Custom Implementation with SRP Authentication**  
SaaSus Platform's authentication API adopts SRP (Secure Remote Password) authentication with an extremely secure design.
By using this mechanism that performs authentication without sending passwords to the server, even when building a custom login screen, you can achieve free styling with HTML/CSS while maintaining the highest level of security.

---

**Q. Can I display maintenance information or system announcements on the login screen?**

A. The login screen provided as standard by SaaSus Platform does not currently support adding or editing text or announcements arbitrarily.

 - **Method to Display Announcements**  
If you want to freely display available hours, maintenance information, etc., we recommend custom implementation of login functionality using the authentication API provided by SaaSus Platform.

 - **Flexible Information Dissemination Through Custom Implementation**  
By building a custom login screen using the authentication API, free layout with HTML/CSS becomes possible. This allows you to post maintenance announcement banners, urgent notices, etc. in the optimal form that matches your service design.

 - **Secure Foundation with SRP Authentication**  
Even when performing custom implementation, SaaSus Platform's authentication API adopts SRP (Secure Remote Password) authentication, so it is possible to enhance operational convenience while maintaining the highest level of security.

---

**Q. I want to limit the service provision range to within Japan. Can I set geographic restrictions (geo-blocking) on the standard login screen of SaaSus?**

A. Currently, we do not provide a function for customers to directly set "Geographic Restrictions" on the login screen (CloudFront) provided as standard by SaaSus Platform.

 - **Method to Achieve Japan-Only Access**  
If you want to limit access origins to within Japan, we recommend a configuration where you build and distribute the login screen via your own CloudFront using the authentication API of SaaSus Platform.

---

**Q. Is it possible to issue an initial password for new users and prompt them to change it to an arbitrary password on first login?**

A. Yes, SaaSus Platform offers two main methods to enable users to set their own passwords, eliminating the need for administrators to issue initial passwords.

1. **Using the "Tenant Invitation Feature"**
You can invite users using the [Tenant Invitation Feature](https://docs.saasus.io/docs/reference/auth-api#tag/invitation). This feature also provides functionality to manage the status of users being invited. Users can set their own passwords through the link in the invitation email.

   - **Behavior**
When an administrator sends an invitation by specifying an email address, the user receives an "invitation email." At this point, user creation is not yet complete, and the user is managed with an "invited" status on the SaaSus Platform.

   - **Login Flow**
Users access a dedicated screen from the link in the email and set their password. Account creation and login are completed the moment they set their password.
This flow sets the actual password from the beginning, without going through a temporary password.

   - **Benefits**
Since SaaSus Platform manages user states such as "invited," "accepted," and "expired," it is ideal for organizational operations.
Additionally, since you can assign "roles" at the time of invitation, you can automate permission settings after login.

2. Using the User Creation API
When calling the [CreateUser API](https://docs.saasus.io/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser), please make the request with the password unset (empty).

   - **Behavior**
When a user is created with an empty password, the system automatically sends a "password setup email" to the target user.

   - **Login Flow**
Users log in to the service using the temporary password in the email.
After login is complete, a password change screen is automatically displayed, forcing them to change to an arbitrary password.

   - **Benefits and Considerations**
Eliminates the effort for administrators to issue and manage (notify) temporary passwords.
Since users set the temporary password from the email, they can start using the service securely from their first login.
However, unlike the invitation feature, you need to independently implement "role assignment" and "tenant allocation" by combining additional APIs.

---

**Q. Can I perform bulk user registration via CSV upload on the user list screen, etc.?**

A. Currently, the SaaSus Platform development console does not provide a function to upload files directly from the screen for bulk user registration.

 - **Method to Efficiently Register Large Numbers of Users**  
When you need to register hundreds to thousands of users, we recommend batch processing using scripts that utilize the user creation API ([CreateUser API](https://docs.saasus.io/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser)) provided by SaaSus Platform.

 - **Benefits of Automation Using API**  
By using the API, you can easily create programs that read user information from existing system databases or CSV files and automatically import it into SaaSus Platform. This not only prevents manual input errors but also allows smooth future automation of user additions (such as integration with member registration functions on your own service side).

 - **Combination with Initial Password Settings**  
When performing bulk registration, by calling the API with the password unset (empty), it is possible to send password setup emails to all users at once. This minimizes the effort for administrators to issue individual passwords.

---

**Q. Can SaaSus Platform be used as an IDP (Identity Provider)?**  
A. SaaSus Platform is an authentication and authorization platform specialized for SaaS development and operations, and plays a role in integrating authentication by linking with external IDPs.  
Therefore, SaaSus itself does not have the function to provide authentication information to other services as an IDP, but it is possible to implement single sign-on (SSO) by linking with external IDPs such as Microsoft Entra ID (formerly Azure AD).

 - **External IDP integration features**  
Microsoft Entra ID and Google can be connected using SAML integration or OIDC (OpenID Connect) to provide end users with a secure and seamless login experience.
