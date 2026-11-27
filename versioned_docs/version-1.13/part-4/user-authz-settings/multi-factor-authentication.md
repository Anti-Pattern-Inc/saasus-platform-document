---
title: "Multi-Factor Authentication (MFA)"
slug: "multi-factor-authentication"
excerpt: "Behavior and limitations of multi-factor authentication for SaaS users"
hidden: false
createdAt: "Fri Nov 27 2026 05:35:28 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Nov 27 2026 05:44:04 GMT+0000 (Coordinated Universal Time)"
---

SaaSus Platform supports an authenticator app (TOTP) or email for multi-factor authentication (MFA) for SaaS users.
Either method can be configured for each user.

Using MFA requires implementation in the SaaS application.
For API usage and sample code, see [Implementing Multi-Factor Authentication](/docs/part-6/implementation-guide/sample-application/multi-factor-authentication).
For trusted device settings, see [Authentication Method Settings](/docs/part-4/user-authz-settings/authentication-method-settings#remembering-trusted-devices).

## Registering an authenticator app

When registering an authenticator app for the first time, verify the code after displaying the QR code, then enable MFA.
You cannot enable authenticator app MFA before an authenticator app has been registered.

Both secret generation and registration code verification require the specified user ID to match the user associated with the access token.
The API rejects the request if they do not match.

## Reauthentication and MFA status

The MFA settings API returns the enabled or disabled status and the configured authentication method.
It does not return the time of the most recent MFA authentication or the method used for that authentication.
There is no dedicated feature for requiring a signed-in user to reauthenticate with their registered TOTP.
Registration code verification cannot be used for this reauthentication.

There is no administrator feature to remove a specified user's trusted devices.
An API is available to change a device's status using the user's own access token and device key.

## Errors and attempt limits

There is no published specification for an application to distinguish an incorrect code, an expired access token, and an attempt limit during authenticator app registration.
The attempt limit and reset conditions for registration are also not published.

## Administrator MFA removal

If a user loses the device used for their authenticator app, an administrator can remove MFA from the [user management screen in the SaaS operation console](/docs/part-5/user-management/user-crud#edit).
This disables MFA but does not delete the authenticator app registration itself.

The operation console does not provide an MFA removal history showing the time, operator, and affected user.
There is also no administrator feature to invalidate all existing sessions for a specified user.
An API is available to invalidate an individual refresh token.
The operation console roles required for MFA removal and a method for verifying the user's identity are not defined in the published specifications.
