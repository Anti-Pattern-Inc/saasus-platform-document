---
title: "Google Linkage"
slug: "google-linkage"
excerpt: ""
hidden: false
createdAt: "Sun May 21 2023 05:12:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
## Summary Explanation

To incorporate Google linkage, it is necessary to create an OAuth client in your Google Cloud Platform account and set up the linkage with SaaSus. By setting up the linkage with SaaSus, the button 'Sign in with Google' will appear on the sign-in page of SaaSus, and Google linkage can be enabled. It should be noted that to make the app publicly available, it is necessary to apply to Google. It takes about one week to review the application after submission. (If there are any mistakes, guidance will be sent by email, so please take corrective action)

Google linkage procedure consists of:

- Creating OAuth Client in Google Cloud Platform
- Linking Google Cloud Platform and SaaSus account
- Confirmation on Google Authentication Performance
- Application for Usage

## Creating an OAuth Client in Google Cloud Platform

### Confirming the Information for Google Linkage

Sign in to SaaSus management console. Open "Authentication Authorization" > "Advanced Settings". Check the Google linkage in Authentication tab.


![google-linkage-1](/img/saas-development-console/google-linkage-1.png)

Make a note of the following items as they are required when creating an OAuth client in Google:

- Approved JavaScript Origin
- Authorized Redirect URI

![google-linkage-2](/img/saas-development-console/google-linkage-2.png)

### Agreeing to the Use of OAuth

Sign in to Google Cloud Platform account (create a Google Cloud Platform account if you don’t have one) for managing Google linkage.

Create a new project for Google linkage.

Open <a href="https://console.cloud.google.com/projectcreate?previousPage=%2Fprojectselector2%2Fhome%2Fdashboard%3Fhl%3Dja%26organizationId%3D0%26supportedpurview%3Dproject&organizationId=0&hl=ja&supportedpurview=project" target="_blank">New Project</a>, and create a new project.

Project Name: GoogleOAuth (or any other easy-to-understand name)

![google-linkage-3](/img/saas-development-console/google-linkage-3.png)

Open 'APIs & Services' - 'OAuth Consent Screen'

![google-linkage-4](/img/saas-development-console/google-linkage-4.png)

Select 'External' as User Type and press 'Create' button

![google-linkage-5](/img/saas-development-console/google-linkage-5.png)


Input following information and select 'Save and Continue' button

- App Name: GoogleOAuth
- User Support Email: any email address
- Developer Contact Information: any email address

![google-linkage-6](/img/saas-development-console/google-linkage-6.png)


Select 'Save and Continue'

![google-linkage-7](/img/saas-development-console/google-linkage-7.png)


Add test users and select 'Save and Continue'
Only the users set here can login when the public status is 'Testing'

![google-linkage-8](/img/saas-development-console/google-linkage-8.png)


### Creating OAuth Client

Open 'APIs & Services' - 'Credentials'

![google-linkage-9](/img/saas-development-console/google-linkage-9.png)


Select 'Create Credentials' - 'OAuth client ID'

![google-linkage-10](/img/saas-development-console/google-linkage-10.png)


Enter the following information and select 'Create' button:

- Application type: Web Application
- Name: GoogleOAuth (any easy-to-understand name is fine)
- Authorized JavaScript origins: ＜the value confirmed on SaaSus management console＞
- Authorized redirect URIs: ＜the value confirmed on SaaSus management console＞

![google-linkage-11](/img/saas-development-console/google-linkage-11.png)


The OAuth client has been created.
Make a note of the following items for setting up SaaSus management console.  
※ It is recommended to select 'Download JSON' and save the downloaded file.

- Client ID
- Client Secret

![google-linkage-12](/img/saas-development-console/google-linkage-12.png)


## Linking Google Cloud Platform and SaaSus Account

Enter the following and select 'Save' button:

- Client ID: ＜The value confirmed on the screen after creating the OAuth client＞
- Client Secret: ＜The value confirmed on the screen after creating the OAuth client＞

![google-linkage-13](/img/saas-development-console/google-linkage-13.png)


If 'Linked' is displayed, then the operation is completed.

![google-linkage-14](/img/saas-development-console/google-linkage-14.png)


## Confirming Google Authentication Operation

We will confirm the operation of the 'Sign with Google' button displayed on the sign in screen.

![google-linkage-15](/img/saas-development-console/google-linkage-15.png)


About 'Sign in with Google' operation:

- Screen Displayed
  - Sign in screen
  - New registration screen (when self-sign-up is enabled)
- Actions when Sign in with Google
  - If self-sign-up is enabled  
    If the account does not exist, an account will be created automatically and signed in.
  - If self-sign-up is not enabled  
    If the account does not exist, it will not sign in.

## Application for Use

Coming soon.
