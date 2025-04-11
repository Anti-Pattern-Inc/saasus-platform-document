---
sidebar_position: 1
title: "Prepare a Sample Application"
slug: "prepare-the-sample-application"
excerpt: "Let's turn a simple web chat application into SaaS"
hidden: false
createdAt: "Fri Jan 20 2023 01:46:32 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

Let's turn a simple web chat application into SaaS

In this tutorial, a simple chat system created as a so-called ordinary web application will be converted to SaaS using the SaaSus Platform.

## Preparing the Sample Application

First, let's start the sample application!

:::info

If you are using AWS EC2 or Cloud9 to create an operating environment for the Blade version, please follow the steps in [Preparing the Sample Application (EC2)](https://docs.saasus.io/docs/tutorial/prepare-the-sample-application-ec2/).

:::

The backend of this simple chat system is PHP8 + Laravel9 + PostgreSQL13.  
There are two types of frontends, one created with Laravel with Blade and one created as an SPA with Next.js.

First of all, let's check the operation!

[https://github.com/saasus-platform/sampleapp-basic-chat](https://github.com/saasus-platform/sampleapp-basic-chat)

In the directory where the above repository is cloned,

- For PHP, under `sampleapp-basic-chat/php/laravel`
- For Next.js, under `sampleapp-basic-chat/node/express`

```shell
./init.sh
```

will start the application locally.

Once it's started, go to the URL below and give it a try.

Blade version

URL: [http://localhost/board](http://localhost/board)  
Authentication  
　Email: [user@example.com](mailto:user@example.com)  
　Password: password

![サンプル](/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

Next.js version

URL: [http://localhost/login/](http://localhost/login/)  
Authentication  
　Email: [user@example.com](mailto:user@example.com)  
　Password: password

- The Next.js version may take several minutes to build. If it doesn't display, wait a few minutes and try to view it again.

![サンプル](/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-02.png)

In this way, users can write whatever they like.

Currently, we use Laravel's standard authentication module to identify users.

However, since it is a Laravel standard authentication module, it is difficult to say that security is strong. Also since it's a simple web application, of course there is no concept of tenants. There is no concept of roles, and there are no pricing plans.

Let's turn this simple web application into SaaS!

\*The difference between the source code at the start of the tutorial and at the end of the tutorial is  
PHP  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

Next.js  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)

Please use the above links as reference.
