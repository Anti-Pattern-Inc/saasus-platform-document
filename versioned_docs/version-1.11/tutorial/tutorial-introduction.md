---
sidebar_position: 1
title: "Introduction"
slug: "tutorial-introduction"
excerpt: "About the flow of this tutorial"
hidden: false
createdAt: "Wed Mar 11 2024 03:12:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 07 2024 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

This tutorial consists of five steps.

By following the procedures from Step 1 to Step 5, the basic chat system will undergo a transformation into a Software as a Service (SaaS) model, supporting multi-tenancy and enabling control through pricing plans. The specific details applied at each step will be incorporated into the application in the order depicted in the following diagram.

![サンプル](/img/tutorial/tutorial-introduction/tutorial-introduction-01.png)

This process will result in the development of an enhanced chat system, capable of accommodating diverse user needs through the support of multi-tenancy and flexible control via pricing plans.

Check the diagram to see the difference between the architecture before and after the tutorial.

Before the tutorial
![サンプル](/img/tutorial/tutorial-introduction/tutorial-introduction-02.png)

After the tutorial
![サンプル](/img/tutorial/tutorial-introduction/tutorial-introduction-03.png)

Migration of User and Tenant Information:<br/>
SaaSus Platform manages user information and the tenant information associated with it. Therefore, there is no need for the chat system to maintain this information.

External Delegation of User Authentication:<br/>
User authentication is delegated to SaaSus Platform. The chat system only needs to receive callbacks from SaaSus Platform and perform necessary processing to implement the login functionality.

Changes to Data Model:<br/>
A tenant_id column will be added to the data model previously maintained by the chat system. This enables multi-tenancy support.

By following these steps, the chat system can be SaaS-enabled using SaaSus Platform.