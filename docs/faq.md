---
title: "FAQ"
slug: "faq-en"
excerpt: ""
hidden: false
createdAt: "Thu Jan 19 2023 08:19:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
■ Frequently Asked Questions

Q: What can I do with the SaaSus Platform?  
A: You can use the web console to configure basic SaaS functions. By incorporating the SaaS SDK/API into the web application built by the customer, the basic functions of SaaS will be incorporated into the customer's SaaS based on the settings made on the web console. This reduces development and ongoing operating costs for basic SaaS functionality.

Q: What are the basic functions of SaaS?  
A: As of January 2023, you can use the following functions tenant management, user management, login screen creation, role management, billing plan, and billing (Stripe linkage) for multi-tenant SaaS.

Q: What kind of features will be implemented in the future?  
A: Please refer to [public roadmap here](https://github.com/orgs/saasus-platform/projects/1).

Q: Are the contents of the web console in Japanese?  
A: Currently, only available in Japanese. We are planning to release an English version in the near future.

Q: This is my first time creating SaaS, is that okay?  
A: If you can create a general web application, you can start using it without any knowledge of SaaS. For SaaS-specific parts, we have designed it so that you can understand it better by reading the web console and operation manual.

Q:What programming languages is the SDK available?  
A: The ones currently provided are for PHP (Laravel) and TypeScript (Node.js). In the future, we plan to provide SDKs for Ruby (Ruby on Rails), Java (Spring), and Go (Echo).

Q: How do you use the SDK and incorporate it into your own SaaS?  
A: [This demo video](https://www.youtube.com/watch?v=deSkPJ-zTgw) and [Tutorial](./tutorial/prepare-the-sample-application). In the tutorial, you can actually incorporate the SaaSus SDK code into a normal web chat application and experience multi-tenant SaaS using the SaaSus Platform.

Q: What kind of APIs are available?  
A: Please refer to [this API manual](./reference/getting-started-with-your-api).

Q: How should I send feature development requests?  
A: You can now access the feature development request form from the web console. Please send it through there.

Q: Is the SaaSus Platform multi-tenant?  
A: Yes. The SaaSus Platform itself is created using the SaaSus Platform.

Q: How does the SaaSus Platform protect data?  
A: The SaaS Platform uses the Amazon Web Services (AWS) Japan region as its infrastructure. Customer accounts using the SaaS Platform are designed to be fully separate AWS accounts, with data segregation at the AWS account level. In addition, data is encrypted when stored. Therefore, when you self-sign up for the SaaSus Platform, it takes at least one hour to prepare your AWS account automatically. If self-signup is crowded, it may take longer to prepare.

Q: Is it possible to use separate accounts for development and production?  
A: In the free plan, only one account for development is accounted. In the standard plan, three environments, development, staging, and production, are accounted for on each SaaSus Platform account.

Q: What should I do if I want to cancel the SaaSus Platform?  
A: Cancellation is completed by completing and sending the cancellation form from the web console. AWS accounts for canceled customer accounts will be closed.

Q: Can I withdraw my data when I cancel my SaaSus Platform?  
A: It is possible to withdraw the data using the SaaSus API. Also, as a SaaS Platform cancelation plan, we are considering a plan to transfer the ownership of the AWS account for the customer account to the customer with the data still included. Therefore, if the growth rate of customer SaaS is much faster than the growth rate of SaaSus Platform, it will be possible to switch the part covered by SaaSus Platform to your own implementation.
