---
title: "Notification Email Content"
slug: "notifymailcustomize"
excerpt: ""
hidden: false
createdAt: "Tue Dec 12 2023 05:46:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 27 2026 07:02:00 GMT+0000 (Coordinated Universal Time)"
---

In the E-Mail Content tab of the <a href="https://settings.console.saasus.io/customize" target="_blank">Authentication Authorization > Advanced Settings</a>, you can customize the emails that are sent to users on authentication pages such as the sign in page.
:::warning Warning
Full-width spaces cannot be set in the strings configured for messages.
:::

## List of Customizable Emails and Reserved Words

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>No</th>
      <th>※ 1</th>
      <th>Email Type</th>
      <th>Name</th>
      <th>Trigger Condition (API etc.)</th>
      <th>Available in Message</th>
      <th>Available in Subject</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>⚪︎</td>
      <td><strong>signUp</strong></td>
      <td>Temporary Password Email for New Registration<br />(signUp)</td>
      <td>`SignUp`<br />`createUser`</td>
      <td>`{username}` User ID<br />`{####}` Temporary Password</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>×</td>
      <td><strong>createUser</strong></td>
      <td>(Unavailable) User Creation Notification</td>
      <td></td>
      <td>`{username}` User ID<br />`{####}` Temporary Password</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>⚪︎</td>
      <td><strong>resendCode</strong></td>
      <td>Temporary Password Resend Email for New Registration<br />(resendCode)</td>
      <td>`ResendSignUpConfirmationEmail`</td>
      <td>`{username}` User ID<br />`{####}` Temporary Password</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>⚪︎</td>
      <td><strong>forgotPassword</strong></td>
      <td>Password Reset Verification Code Email<br />(forgotPassword)</td>
      <td>Click "Forgot Password" from login screen</td>
      <td>`{####}` Reset Code</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>×</td>
      <td><strong>verifyUserAttribute</strong></td>
      <td>(Unavailable) User Attribute Verification Notification</td>
      <td></td>
      <td>`{username}` User ID<br />`{####}` Verification Code</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>×</td>
      <td><strong>authenticationMfa</strong></td>
      <td>MFA Authentication Notification</td>
      <td>After setting "method"="email" using<br />`UpdateUserMfaPreference` and logging in</td>
      <td>`{username}` User ID<br />`{####}` Authentication Code</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>×</td>
      <td><strong>updateUserAttribute</strong></td>
      <td>User Attribute Update Notification</td>
      <td>`RequestEmailUpdate`</td>
      <td>`{####}` Confirmation Code</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>×</td>
      <td><strong>inviteTenantUser</strong></td>
      <td>Tenant User Invitation Notification</td>
      <td>`CreateTenantInvitation`</td>
      <td>`{tenant_name}` Tenant Name<br />`{invitation_url}` Invitation URL</td>
      <td>`{tenant_name}` Tenant Name</td>
    </tr>
    <tr>
      <td>9</td>
      <td>×</td>
      <td><strong>verifyExternalUser</strong></td>
      <td>External User Verification Notification</td>
      <td>`RequestExternalUserLink`</td>
      <td>`{####}` Verification Code</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
※ 1: ⚪︎ indicates that the subject and body can be edited in the E-Mail Content tab of the <a href="https://settings.console.saasus.io/customize" target="_blank">Authentication Authorization > Advanced Settings</a>.<br />
　　 × indicates that direct changes must be made using the <a href="https://docs.saasus.io/docs/reference/auth-api#tag/basicInfo/operation/UpdateNotificationMessages" target="_blank">Update Notification Email Template API</a>.<br />
</div>

## How to Customize Email Body

### Temporary Password Email for New Registration (signUp)

:::info Information
This item can be customized in the SaaS Operations Console. For details on customization methods, please check the E-Mail Content tab of the <a href="https://settings.console.saasus.io/customize" target="_blank">Authentication Authorization > Advanced Settings</a>.
:::

The strings `{####}` and `{username}` are required.

`{####}` will be replaced with the temporary password and `{username}` will be replaced with the user ID when sent.

#### Configuration Example

```
User Registration Notice

Thank you for registering with us.
Please enter the temporary password below to complete your account verification.

Temporary Password: {####}
User ID: {username}

Verification Page: https://auth.your.domain/sign-up-confirm

```

#### Sent Example

```
User Registration Notice

Thank you for registering with us.
Please enter the temporary password below to complete your account verification.

Temporary Password: 123456
User ID: 12345678-1234-1234-1234-123456789abc

Verification Page: https://auth.your.domain/sign-up-confirm

```

### Temporary Password Resend Email for New Registration (resendCode)

:::info Information
This item can be customized in the SaaS Operations Console. For details on customization methods, please check the E-Mail Content tab of the <a href="https://settings.console.saasus.io/customize" target="_blank">Authentication Authorization > Advanced Settings</a>.
:::

The strings `{####}` and `{username}` are required.

`{####}` will be replaced with the temporary password and `{username}` will be replaced with the user ID when sent.

#### Configuration Example

```
Resending Temporary Password

We are resending your temporary password as requested.

Temporary Password: {####}
User ID: {username}

Verification Page: https://auth.your.domain/sign-up-confirm

※This email is sent automatically.
```

#### Sent Example

```
Resending Temporary Password

We are resending your temporary password as requested.

Temporary Password: 654321
User ID: 12345678-1234-1234-1234-123456789abc

Verification Page: https://auth.your.domain/sign-up-confirm

※This email is sent automatically.
```

### Password Reset Verification Code Email (forgotPassword)

:::info Information
This item can be customized in the SaaS Operations Console. For details on customization methods, please check the E-Mail Content tab of the <a href="https://settings.console.saasus.io/customize" target="_blank">Authentication Authorization > Advanced Settings</a>.
:::

The strings `{####}` and `{username}` are required.

`{####}` will be replaced with the reset code and `{username}` will be replaced with the user ID when sent.

#### Configuration Example

```
Password Reset Request

We have received your password reset request.
Please use the reset code below to set a new password.

Reset Code: {####}

Reset Page: https://auth.your.domain/recover-password-confirm
```

#### Sent Example

```
Password Reset Request

We have received your password reset request.
Please use the reset code below to set a new password.

Reset Code: 789012

Reset Page: https://auth.your.domain/recover-password-confirm
```

### MFA Authentication Notification (authenticationMfa)

:::warning Warning
To configure this setting, you must update directly using the <a href="https://docs.saasus.io/docs/reference/auth-api#tag/basicInfo/operation/UpdateNotificationMessages" target="_blank">Update Notification Email Template API</a>.

The strings `{####}` and `{username}` are required.

`{####}` will be replaced with the MFA authentication code and `{username}` will be replaced with the user ID when sent.

#### Configuration Example

```
Login Authentication Code

We are sending you the authentication code for login.

Authentication Code: {####}
User ID: {username}

※Do not share this code with others
```

#### Sent Example

```
Login Authentication Code

We are sending you the authentication code for login.

Authentication Code: 345678
User ID: 12345678-1234-1234-1234-123456789abc

※Do not share this code with others
```

### User Attribute Update Notification (updateUserAttribute)

:::warning Warning
To configure this setting, you must update directly using the <a href="https://docs.saasus.io/docs/reference/auth-api#tag/basicInfo/operation/UpdateNotificationMessages" target="_blank">Update Notification Email Template API</a>.

The string `{####}` is required.

`{####}` will be replaced with the confirmation code when sent.

#### Configuration Example

```
Account Information Change Confirmation

There has been a request to change your account information.
Please enter the confirmation code below to finalize the change.

Confirmation Code: {####}

Please verify the changes and enter the code in the application screen.

■ Changes
・Email address change
```

#### Sent Example

```
Account Information Change Confirmation

There has been a request to change your account information.
Please enter the verification code below to finalize the change.

Verification Code: 901234

Please verify the changes and enter the code in the application screen.

■ Changes
・Email address change
```

### Tenant User Invitation Notification (inviteTenantUser)

:::warning Warning
To configure this setting, you must update directly using the <a href="https://docs.saasus.io/docs/reference/auth-api#tag/basicInfo/operation/UpdateNotificationMessages" target="_blank">Update Notification Email Template API</a>.

The strings `{tenant_name}` and `{invitation_url}` are required. Also, `{tenant_name}` is available in the subject.

`{tenant_name}` will be replaced with the tenant name and `{invitation_url}` will be replaced with the invitation URL when sent.

#### Subject Example

```
Invitation to {tenant_name}
```

#### Configuration Example

```
Invitation to {tenant_name}

You are invited to join {tenant_name} as a member.

Please click the link below to accept the invitation.

Accept Invitation: {invitation_url}

■ Invitation Details
・Organization Name: {tenant_name}
・Valid for: 7 days

If you have any questions, please contact the inviter or support.
```

#### Sent Example

**Subject:** Invitation to ABC Corporation

**Body:**
```
Invitation to ABC Corporation

You are invited to join ABC Corporation as a member.

Please click the link below to accept the invitation.

Accept Invitation: https://auth.your.domain/invitation/accept?token=abc123def456

■ Invitation Details
・Organization Name: ABC Corporation
・Valid for: 7 days

If you have any questions, please contact the inviter or support.
```

### External User Verification Notification (verifyExternalUser)

:::warning Warning
To configure this setting, you must update directly using the <a href="https://docs.saasus.io/docs/reference/auth-api#tag/basicInfo/operation/UpdateNotificationMessages" target="_blank">Update Notification Email Template API</a>.

The string `{####}` is required.

`{####}` will be replaced with the verification code when sent.

#### Configuration Example

```
External Account Link Authentication

To safely link your external account, we require verification with an authentication code.

Authentication Code: {####}

【Linking Steps】
1. Enter the above code in the application's linking screen
2. Click the "Authenticate" button
3. Linking complete
```

#### Sent Example

```
External Account Link Authentication

To safely link your external account, we require verification with an authentication code.

Authentication Code: 567890

【Linking Steps】
1. Enter the above code in the application's linking screen
2. Click the "Authenticate" button
3. Linking complete
