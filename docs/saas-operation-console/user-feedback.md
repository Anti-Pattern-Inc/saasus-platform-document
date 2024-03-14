---
title: "User Feedback"
slug: "user-feedback"
excerpt: ""
hidden: false
createdAt: "Tue Mar 12 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 12 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
---

## Overview
This feature allows feedback collection from users.  
By collecting opinions from users who are actually using the SaaS, it can be used to improve the service.

## Usage
In order to use this feature, you need to implement a feedback manipulation function into your SaaS using the [Communication API](/docs/reference/communication-api).

For example, you would use APIs such as:

* [CreateFeedback](/docs/reference/communication-api#tag/feedback/operation/CreateFeedback)
  * Creates feedback
* [GetFeedbacks](/docs/reference/communication-api#tag/feedback/operation/GetFeedbacks)
  * Retrieves created feedback
* [CreateVoteUser](/docs/reference/communication-api#tag/feedback/operation/CreateVoteUser)
  * Allows other users to vote on feedback

You would implement the feedback feature using these APIs.

Feedback holds the following statuses:  
0: New  
1: Under consideration  
2: In progress  
3: Implemented  

The collected feedback can be checked in the SaaS operation console.
![feedback-list](/img/saas-operation-console/user-feedback/feedback-list.png)

You can change the status and add comments.
![feedback-edit](/img/saas-operation-console/user-feedback/feedback-edit.png)
