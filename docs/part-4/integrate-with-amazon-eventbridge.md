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

![01](/img/part-4/integrate-with-amazon-eventbridge/image-01.png)

In the AWS Account ID section, enter the AWS account ID (the 12-digit ID of the AWS account on which the SaaS is built) to which the event is sent. Also, select the AWS region where you would like to receive notifications. Then press the Save button.

![02](/img/part-4/integrate-with-amazon-eventbridge/image-02.png)

A partner event path will be created on the AWS account configured above. After logging into the relevant AWS account, open the [Amazon EventBridge Partner Event Source Console](https://ap-northeast-1.console.aws.amazon.com/events/home#/partners) and verify that the Partner Event Source has been created.

![03](/img/part-4/integrate-with-amazon-eventbridge/image-03.png)

Select the created partner event source and "Associate with event bus". It will then be available for use on the Event Bus just like any other event source.

![04](/img/part-4/integrate-with-amazon-eventbridge/image-04.png)

Next, let's try sending an event. Open the [Amazon EventBridge Bus Rules page](https://ap-northeast-1.console.aws.amazon.com/events/home#/rules). On this screen, you should be able to select the partner event source from earlier as an event bus.

![05](/img/part-4/integrate-with-amazon-eventbridge/image-05.png)

Create rules based on this event bus. Let's set it up as shown in the following page.  
First, select the SaaSus Platform event bus and click Create rule. On each page, try to enter the information referring to the following page.

![06](/img/part-4/integrate-with-amazon-eventbridge/image-06.png)

![07](/img/part-4/integrate-with-amazon-eventbridge/image-07.png)

![08](/img/part-4/integrate-with-amazon-eventbridge/image-08.png)

In the event pattern section, first describe the following pattern to get all SaaSus Platform events. Click on the "Edit pattern" button and enter the following JSON directly.

![09](/img/part-4/integrate-with-amazon-eventbridge/image-09.png)

![10](/img/part-4/integrate-with-amazon-eventbridge/image-10.png)

```json
{
  "source": [{
    "prefix": "aws.partner/saasus.io"
  }]
}
```

In this case, all events are retrieved, but you can filter events to retrieve only those for specific API calls.

In this case, let's output all events to CloudWatch Logs to see what kind of events are delivered.

![11](/img/part-4/integrate-with-amazon-eventbridge/image-11.png)

![12](/img/part-4/integrate-with-amazon-eventbridge/image-12.png)

After all settings are complete, click Create rule and confirm that the rule has been created.

![13](/img/part-4/integrate-with-amazon-eventbridge/image-13.png)

![14](/img/part-4/integrate-with-amazon-eventbridge/image-14.png)

Now that we are ready to link events. Send a test event by returning to the SaaSus development console and clicking the Send Test button.

![15](/img/part-4/integrate-with-amazon-eventbridge/image-15.png)

If the event arrives successfully, the event should be recorded in CloudWatch Logs. Let's check.

![16](/img/part-4/integrate-with-amazon-eventbridge/image-16.png)

We are now able to retrieve events in this manner.

In this case, we linked to CloudWatch Logs, but it is possible to link events to various targets such as Lambda and other APIs. This allows us to apply an event-driven architecture, separating where the SaaSus API was called from and when it was called, and what should be done as a result and when.

The "detail" entry contains a "trace_id". This is the same as the one specified at the time of the SaaSus API request or the one generated automatically, so you can trace which API call caused the event.
