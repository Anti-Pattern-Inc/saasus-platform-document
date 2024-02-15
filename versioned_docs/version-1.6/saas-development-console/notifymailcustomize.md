---
title: "How to Customize Notification Email Content"
slug: "notifymailcustomize"
excerpt: ""
hidden: false
createdAt: "Tue Dec 12 2023 05:46:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 21 2023 02:21:05 GMT+0000 (Coordinated Universal Time)"
---

In the E-Mail Content tab of the <a href="https://settings.console.saasus.io/customize" target="_blank">Authentication Authorization > Advanced Settings</a>, you can customize the emails that are sent to users on authentication pages such as the sign in page.

# How to Customize Email Body

## Email Sent with a Temporary Password at New Registration
The strings {####} and {username} are required.

{####} will be replaced with the temporary password and {username} will be replaced with the user ID when sent.

### Example

```
Thank you for your registration.
We will notify you of your user ID and temporary password.

User ID: {username}
Temporary Password: {####}

Please input the above temporary password on the following page and complete the sign-up.
https://auth.your.domain/sign-up-confirm

Please include your user ID when making inquiries.
```

When the above setting is made, the actual sent mail will be as follows:

```
Thank you for your registration.
We will notify you of your user ID and temporary password.

User ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Temporary Password: xxxxxxxx

Please input the above temporary password on the following page and complete the sign-up.
https://auth.your.domain/sign-up-confirm

Please include your user ID when making inquiries.
```

## Email Resending Temporary Password at New Registration

The strings {####} and {username} are required.

{####} will be replaced with the temporary password and {username} will be replaced with the user ID when sent.

### Example*

```
We will notify you of your user ID and temporary password.

User ID: {username}
Temporary Password: {####}

Please input the above temporary password on the following page and complete the sign-up.
https://auth.your.domain/sign-up-confirm

Please include your user ID when making inquiries.
```

When the above setting is made, the actual sent mail will be as follows:

```
We will notify you of your user ID and temporary password.

User ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Temporary Password: xxxxxxxx

Please input the above temporary password on the following page and complete the sign-up.
https://auth.your.domain/sign-up-confirm

Please include your user ID when making inquiries.
```

## Email Sent with Verification Code for Password Reset

The string {####} is required.

{####} will be replaced with the verification code when sent.

### Example

```
Thank you for your registration.
We will notify you of your verification code for password reset.

Verification Code: {####}

Please input the above verification code on the following page and reset your password.
https://auth.your.domain/recover-password-confirm
```

When the above setting is made, the actual sent mail will be as follows:

```
Thank you for your registration.
We will notify you of your verification code for password reset.

Verification Code: 111111

Please input the above verification code on the following page and reset your password.
https://auth.your.domain/recover-password-confirm
```
