---
title: "Integrate with Amazon EventBridge"
slug: "integrate-with-amazon-eventbridge"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Sun Jan 22 2023 11:54:20 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sun Apr 02 2023 10:07:18 GMT+0000 (Coordinated Universal Time)"
---
SaaSus Platform is integrated with Amazon EventBridge. Various events that occur on the SaaSus Platform can be sent to Amazon EventBridge in the SaaS-side AWS account as a partner event source. By leveraging this, SaaS can be built with an event-driven architecture that works in conjunction with SaaSus Platform.

For example, it can be used to trigger a tenant onboarding process when a SaaS tenant is created, or to trigger the deletion of accompanying data when a user is deleted. Currently, you can retrieve events for all SaaSus APIs. Please check [API Reference](/docs/reference/getting-started-with-your-api) for the contents of each API.

## How to integrate with Amazon EventBridge

Open the [Event Integration Page of the SaaS Development Console](https://settings.console.saasus.io/integrations/event).

![ee89669-10_event_001](/img/saas-development-console/ee89669-10_event_001.png)

In the AWS Account ID section, enter the AWS account ID (the 12-digit ID of the AWS account on which the SaaS is built) to which the event is sent. Also, select the AWS region where you would like to receive notifications. Then press the Save button.

![b92426e-10_event_002](/img/saas-development-console/b92426e-10_event_002.png)

A partner event path will be created on the AWS account configured above. After logging into the relevant AWS account, open the [Amazon EventBridge Partner Event Source Console](https://ap-northeast-1.console.aws.amazon.com/events/home#/partners) and verify that the Partner Event Source has been created.

![11c56cb-_2023-01-21_23.57.06](/img/saas-development-console/11c56cb-_2023-01-21_23.57.06.png)

Select the created partner event source and "Associate with event bus". It will then be available for use on the Event Bus just like any other event source.

![22a9b2d-_2023-01-21_23.58.05](/img/saas-development-console/22a9b2d-_2023-01-21_23.58.05.png)

Next, let's try sending an event. Open the [Amazon EventBridge Bus Rules page](https://ap-northeast-1.console.aws.amazon.com/events/home#/rules). On this screen, you should be able to select the partner event source from earlier as an event bus.

![234abaa-_2023-01-22_18.59.46](/img/saas-development-console/234abaa-_2023-01-22_18.59.46.png)

Create rules based on this event bus. Let's set it up as shown in the following page.  
First, select the SaaSus Platform event bus and click Create rule. On each page, try to enter the information referring to the following page.

![288246d-_2023-01-22_19.19.22](/img/saas-development-console/288246d-_2023-01-22_19.19.22.png)

![eefcee6-_2023-01-22_19.20.13](/img/saas-development-console/eefcee6-_2023-01-22_19.20.13.png)

![d1e7c0d-_2023-01-22_19.20.25](/img/saas-development-console/d1e7c0d-_2023-01-22_19.20.25.png)

In the event pattern section, first describe the following pattern to get all SaaSus Platform events. Click on the "Edit pattern" button and enter the following JSON directly.

![0867394-_2023-01-22_19.20.34](/img/saas-development-console/0867394-_2023-01-22_19.20.34.png)

![4d3ea03-_2023-01-22_19.20.51](/img/saas-development-console/4d3ea03-_2023-01-22_19.20.51.png)

```json
{
  "source": [{
    "prefix": "aws.partner/saasus.io"
  }]
}
```

In this case, all events are retrieved, but you can filter events to retrieve only those for specific API calls.

In this case, let's output all events to CloudWatch Logs to see what kind of events are delivered.

![7d74d3b-_2023-01-22_19.21.19](/img/saas-development-console/7d74d3b-_2023-01-22_19.21.19.png)

![b260840-_2023-01-22_19.21.33](/img/saas-development-console/b260840-_2023-01-22_19.21.33.png)

After all settings are complete, click Create rule and confirm that the rule has been created.

![9b4be62-_2023-01-22_19.21.43](/img/saas-development-console/9b4be62-_2023-01-22_19.21.43.png)

![ddda235-_2023-01-22_19.21.53](/img/saas-development-console/ddda235-_2023-01-22_19.21.53.png)

Now that we are ready to link events. Send a test event by returning to the SaaSus development console and clicking the Send Test button.

![128194b-_2023-01-21_23.55.59](/img/saas-development-console/128194b-_2023-01-21_23.55.59.png)

If the event arrives successfully, the event should be recorded in CloudWatch Logs. Let's check.

![b93fff7-_2023-01-22_19.24.48](/img/saas-development-console/b93fff7-_2023-01-22_19.24.48.png)

We are now able to retrieve events in this manner.

In this case, we linked to CloudWatch Logs, but it is possible to link events to various targets such as Lambda and other APIs. This allows us to apply an event-driven architecture, separating where the SaaSus API was called from and when it was called, and what should be done as a result and when.

The "detail" entry contains a "trace_id". This is the same as the one specified at the time of the SaaSus API request or the one generated automatically, so you can trace which API call caused the event.
