---
title: "Feedback Management"
slug: "user-feedback"
excerpt: ""
hidden: false
createdAt: "Tue Mar 12 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 12 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
---

## Overview
This feature allows you to obtain feedback from users. By collecting opinions such as questions and requests for additional features from users who are actually using the SaaS, you can use this to improve your service.

## Comments
The SaaS administrator can reply to comments on the feedback.

## Votes
Users can vote on feedback. This allows to see the features that are most in demand by users.

## Status
You can set the status. This allows to communicate the progress of the development to the user.  
0: New  
1: Under consideration  
2: In progress  
3: Implemented  

## Usage
In order to use this feature, you need to implement a feedback manipulation function into your SaaS using the [Communication API](/docs/reference/communication-api).

For example, you would use APIs such as:

* [CreateFeedback](/docs/reference/communication-api#tag/feedback/operation/CreateFeedback)
  * Creates feedback
* [GetFeedbacks](/docs/reference/communication-api#tag/feedback/operation/GetFeedbacks)
  * Retrieves created feedback
* [CreateVoteUser](/docs/reference/communication-api#tag/feedback/operation/CreateVoteUser)
  * Allows other users to vote on feedback

You would use these APIs to implement the feedback function.

The collected feedback can be checked in the SaaS operation console.
![feedback-list](/img/part-5/user-feedback/feedback-list.png)

You can change the status and add comments.
![feedback-edit](/img/part-5/user-feedback/feedback-edit.png)
