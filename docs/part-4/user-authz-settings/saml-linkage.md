---
title: "SAML Integration"
slug: "saml-linkage"
excerpt: ""
hidden: false
createdAt: "2025-01-24T05:25:00.000Z"
updatedAt: "2025-01-24T05:25:00.000Z"
---

# SAML Integration Feature

## Overview

The SAML (Security Assertion Markup Language) integration feature allows your SaaS application to authenticate users through external identity providers.  
This enables tenants to use single sign-on (SSO) functionality and leverage their existing identity management systems.

## Configuration Steps

To integrate SaaSus Platform with Microsoft Entra ID, follow these steps:

### 1. Obtain Entity ID/Reply URL
Execute the API to obtain **Entity ID** (`identity_provider_configuration.entity_id`) and **Reply URL** (`identity_provider_configuration.reply_url`)  
https://docs.saasus.io/docs/reference/auth-api#tag/authInfo/operation/GetSignInSettings

```json
{
    "identity_provider_configuration": {
        "domain": "xxxxxxxxxxxx.auth.ap-northeast-1.amazoncognito.com",
        "entity_id": "urn:amazon:cognito:sp:ap-northeast-1_xxxxxxxxxxxx",
        "redirect_url": "https://xxxxxxxxxxxx.auth.ap-northeast-1.amazoncognito.com/oauth2/idpresponse",
        "reply_url": "https://xxxxxxxxxxxx.auth.ap-northeast-1.amazoncognito.com/saml2/idpresponse"
    }
}
```
### 2. Microsoft Entra ID Configuration
Configure Microsoft Entra ID for SAML integration. Follow these steps:
1. Log in to Microsoft Entra ID
[Microsoft Entra Admin Center](https://entra.microsoft.com/#home)

2. Create a new application  
    Go to Entra ID > Enterprise Apps and click `New application`  
    ![saml-linkage-image-1](/img/part-4/saml-linkage/saml-linkage-image-1.png)


3. Set the application name and click `Create`.
    ![saml-linkage-image-2](/img/part-4/saml-linkage/saml-linkage-image-2.png)

4. Select Single sign-on.
    ![saml-linkage-image-3](/img/part-4/saml-linkage/saml-linkage-image-3.png)

5. Select SAML.
    ![saml-linkage-image-4](/img/part-4/saml-linkage/saml-linkage-image-4.png)

6. Edit Basic SAML Configuration and enter the following information
   - **Identifier (Entity ID)**: Enter the Entity ID obtained earlier.
   - **Reply URL**: Enter the Reply URL obtained earlier.

    ![saml-linkage-image-5](/img/part-4/saml-linkage/saml-linkage-image-5.png)


7. In Attributes & Claims settings, note the claim name set for `user.mail`.
    ![saml-linkage-image-6](/img/part-4/saml-linkage/saml-linkage-image-6.png)

8. Note the `App Federation Metadata URL` from the SAML Certificate section.
    ![saml-linkage-image-9](/img/part-4/saml-linkage/saml-linkage-image-9.png)

### 3. SaaSus Platform Configuration
Configure SAML integration using the SaaSus API.  
Pass the following information to the API to set up SAML integration:

- **provider_type**: "SAML"
- **metadata_url**: App Federation Metadata URL from Microsoft Entra ID
- **email_attribute**: Claim name noted from Microsoft Entra ID (e.g., `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`)

**API:** https://docs.saasus.io/docs/reference/auth-api#tag/tenant/operation/UpdateTenantIdentityProvider

```json
{
  "provider_type": "SAML",
  "identity_provider_props": {
    "metadata_url": "https://login.microsoftonline.com/xxxx-xxxx-xxxxx-xxxx-xxxx/federationmetadata/2007-06/federationmetadata.xml?appid=xxxx-xxxx-xxxxx-xxxx-xxxx",
    "email_attribute": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
  }
}
```

### 4. Testing SAML Integration
1. Create login user in SaaSus  
    Create a user for the tenant that will use SAML integration from the SaaS operation console and assign roles.  
    The user's email address must match the email address set in Microsoft Entra ID.  

2. Verify sign_in_url  
    Use the SaaSus API to obtain the sign_in_url.  

**API:** https://docs.saasus.io/docs/reference/auth-api#tag/tenant/operation/GetTenantIdentityProviders
```json
{
    "saml": {
        "email_attribute": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
        "metadata_url": "https://login.microsoftonline.com/xxxx-xxxx-xxxxx-xxxx-xxxx/federationmetadata/2007-06/federationmetadata.xml?appid=xxxx-xxxx-xxxxx-xxxx-xxxx",
        "sign_in_url": "https://auth.implementation-sample2.sandbox.dev.saasus.io/sign-in/saml/6PcH3PYyte8ZTDZ65ul5jE"
    }
}
```
3. External account login screen  
    Access the obtained sign_in_url.  
    ![saml-linkage-image-7](/img/part-4/saml-linkage/saml-linkage-image-7.png)

4. Login with Microsoft Entra ID  
    On the Microsoft Entra ID login screen, enter your username and password to log in.  
    Upon successful login, you will be redirected to the SaaS.  
    ![saml-linkage-image-8](/img/part-4/saml-linkage/saml-linkage-image-8.png)

## Notes

### User Group Configuration  
In Microsoft Entra ID, you can use the Users and Groups feature to assign users who will use SAML authentication to groups.  
This allows you to control access so that only users belonging to specific groups can access the SaaS application.  

From Microsoft Entra Admin Center > Enterprise Apps > `Created Application` > Users and Groups, assign users who will access SaaSus Platform to groups.