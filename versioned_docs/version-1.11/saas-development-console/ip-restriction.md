---
title: "IP Restriction"
slug: "ip-restriction"
excerpt: ""
hidden: false
createdAt: "Mon Mar 25 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 25 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
---

The IP restriction feature limits access to the SaaSus console and API requests by IP address.

:::warning
The IP Restriction feature is not available for customers on the legacy Starter or Standard plans.  
To use this feature, please upgrade your subscription plan.
:::

## Applying for IP Restriction

### How to Apply

Please contact us via Intercom.

### Application Details

Send us the CIDR list of IP addresses that you would like to allow for both the SaaSus console and the API.

  SaaSus console
  ```
  xxx.xxx.xxx.xxx/32, yyy.yyy.yyy.yyy/24
  ```
  API
  ```
  aaa.aaa.aaa.aaa/32, bbb.bbb.bbb.bbb/24
  ```

## Behavior After IP Restriction Is Set

After setting up IP restrictions, access will be limited as follows:

1. **If you attempt to log in from an IP address that is not on the list**

   ![ip-restriction-1](/img/saas-development-console/ip-restriction-1.png)

2. **If you attempt to access the API from an IP address that is not on the list**

   The API response body will be as follows:
   ```
   {
       "message": "IP address: xxx.xxx.xxx.xxx is not allowed",
       "type": "ip_restricted"
   }
   ```