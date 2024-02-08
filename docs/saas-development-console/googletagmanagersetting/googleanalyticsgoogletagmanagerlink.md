---
title: "Linking Google Analytics with Google Tag Manager"
slug: "googleanalyticsgoogletagmanagerlink"
excerpt: ""
hidden: false
createdAt: "Mon Dec 11 2023 02:34:11 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Dec 22 2023 06:01:24 GMT+0000 (Coordinated Universal Time)"
---
This guide covers setting up Google Analytics tags in Google Tag Manager to analyze users accessing the login screen.

## 1. Confirm the Google Analytics Measurement ID

1. Access [Google Analytics](https://analytics.google.com/analytics/web)
2. Go to the "Admin" screen from the gear icon at the bottom left
3. Click on "Data Streams" under "Data Collection and Correction"
4. Select the relevant stream
5. Confirm the Measurement ID displayed

   ![googleanalyticsgoogletagmanagerlink-1](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-1.png)

## 2. Set up Google Analytics in Google Tag Manager

1. Access the [Google Tag Manager homepage](https://tagmanager.google.com/)
2. Click on "Add a new tag"

   ![googleanalyticsgoogletagmanagerlink-2](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-2.png)
3. Select "Google Analytics" > "Google Analytics: GA4 Configuration" from "Tag Configuration"

   ![googleanalyticsgoogletagmanagerlink-3](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-3.png)
4. Enter the Google Analytics Measurement ID for the tag ID

   ![googleanalyticsgoogletagmanagerlink-4](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-4.png)
5. Choose "Initialization - All Pages" for the trigger

   ![googleanalyticsgoogletagmanagerlink-5](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-5.png)
6. Enter a name for the tag at the top left input field and click save
7. Click on "Submit" at the top right of the container page

   ![googleanalyticsgoogletagmanagerlink-6](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-6.png)
8. Enter details for version publication and creation, then click on submit

   ![googleanalyticsgoogletagmanagerlink-7](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-7.png)

   - Version name: Optional (can be left blank)
   - Version description: Optional (can be left blank)

With these steps, Google Analytics and Google Tag Manager are now linked. Accessing the login screen will reflect the information in Google Analytics.

Please note that it may take 24-48 hours for the data to appear in Google Analytics. For more details, refer to the [Google Analytics documentation](https://support.google.com/analytics/answer/7084038?hl=ja&sjid=9555982415879226311-AP#zippy=%2C%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%81%AE%E5%86%85%E5%AE%B9).
