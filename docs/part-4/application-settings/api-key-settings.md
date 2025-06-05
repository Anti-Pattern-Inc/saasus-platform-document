---
title: "API Key Settings"
slug: "api-key-settings"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

This page explains how to check and reissue the **SaaS ID**, **API keys**, and **Client Secret**, which are required when using the SaaSus SDK or API.  
These items can be accessed from the **API Key** section in the side menu.

## Checking or Reissuing the SaaS ID

The **SaaS ID** is a unique identifier for your SaaS.

- The SaaS ID generally does not need to be changed.
- You can reissue the ID by clicking the **Regenerate** button if necessary.

## Viewing and Generating API Keys

**API Key** is used to authenticate requests made via the SDK or API.

- Up to **two** keys can be issued.
- It is **recommended to rotate keys** periodically for enhanced security.
- Click the **Generate** button to create a new key.
- Be sure to **keep your keys confidential** to avoid leakage or misuse.

## Reissuing the Client Secret

The **Client Secret** is used to sign API requests. It is **never transmitted over the network**.

- Used for generating request signatures.
- Click the **Regenerate** button to obtain a new secret.

![API Key screen](/img/part-4/application-settings/api-key-settings/api-key.png)