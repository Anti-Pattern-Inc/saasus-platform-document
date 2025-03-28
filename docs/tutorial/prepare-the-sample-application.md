---
sidebar_position: 1
title: "Prepare a Sample Application"
slug: "prepare-the-sample-application"
excerpt: "Let's turn a simple web chat application into SaaS"
hidden: false
createdAt: "Fri Jan 20 2023 01:46:32 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

In this tutorial, we will use SaaSus Platform to turn a simple chat system created as a web application that can post strings into SaaS (Software as a Service).

## Preparing the Sample Application

First, start this sample application.

:::info

If you are using AWS EC2 or Cloud9 to create an operating environment for the Blade version, please follow the steps in [Preparing the Sample Application (EC2)](https://docs.saasus.io/docs/tutorial/prepare-the-sample-application-ec2/).

:::

This simple chat system comes with two configuration options:

1. Laravel + Blade (PHP 8 / Laravel 9 / PostgreSQL 13)  
2. Express + EJS (Node.js / Express 4.16.x / PostgreSQL 13)

In either setup, it is possible to use Next.js as the frontend with additional configuration.  
However, Next.js is not used in this tutorial.

### Prerequisites
- PHP 8 must be installed (for Laravel + Blade).
- Composer must be installed (for Laravel + Blade).
- PostgreSQL 13 must be installed and properly configured.
- Node.js and npm must be installed (for Express + EJS).

First, clone the sample application from the repository below.

```git
git clone https://github.com/saasus-platform/sampleapp-basic-chat
```

After cloning the repository, move to the appropriate application directory and perform the initial setup.

- **Laravel + Blade**: `sampleapp-basic-chat/php/laravel`
- **Express + EJS**: `sampleapp-basic-chat/node/express`

```shell
./init.sh
```

The application was launched locally.

Once launched, try it out by accessing the URL below.

### Laravel + Blade Version

- URL: [http://localhost/board](http://localhost/board<br/>)
- Authentication Email: [user@example.com](mailto:user@example.com)
- Password: password

![サンプル](/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

### Express + EJS Version

- URL: [http://localhost/login/](http://localhost/login/)
- Authentication Email: [user@example.com](mailto:user@example.com)
- Password: password

:::caution
The Express + EJS version may take several minutes to build. If it doesn't display, wait a few minutes and try to view it again.
:::

![サンプル](/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-02.png)

To allow users to post freely, the Laravel version uses Laravel's standard authentication module, while the Express version uses a custom authentication mechanism to identify users.

By integrating the SaaSus Platform and handling user authentication through it, you can easily identify users and retrieve tenant information associated with them.

There is no need for the SaaS application to design tenant data or manage information.

Additionally, once you set up your pricing plan on the SaaSus Platform, you can start using it right away.

Information held by the SaaSus Platform can be registered, acquired, and updated by SaaS applications via API.

Let's turn this simple web application into SaaS.

\*Please refer to the following for the difference between the source code at the start and end of the tutorial.

**Laravel + Blade**    
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

**Express + EJS**  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)

* These differences also include changes required when using Next.js.
