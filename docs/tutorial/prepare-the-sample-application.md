---
sidebar_position: 1
title: "Prepare a Sample Application"
slug: "prepare-the-sample-application"
excerpt: "Let's turn a simple web chat application into SaaS"
hidden: false
createdAt: "Fri Jan 20 2023 01:46:32 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

In this tutorial, we will use SaaSus Platform to turn a simple chat system created as a regular web application into SaaS (Software as a Service).

## Preparing the Sample Application

First, start this sample application.

This simple chat system uses PHP 8, Laravel 9, and PostgreSQL 13 as the backend.

The front end includes two SPA (Single Page Application) created with Laravel with Blade and Next.js.

Prerequisites<br/>
- PHP 8 must be installed.<br/>
- Composer must be installed.<br/>
- PostgreSQL 13 is installed and properly configured.<br/>
- Node.js and npm must be installed.

First, clone the sample application from the repository below.

[https://github.com/saasus-platform/sampleapp-basic-chat](https://github.com/saasus-platform/sampleapp-basic-chat)

After cloning, move to the directory below and execute the command.

- For PHP, under `sampleapp-basic-chat/php/laravel`
- For Next.js, under `sampleapp-basic-chat/node/express`

```shell
./init.sh
```

The application was launched locally.

Once launched, try it out by accessing the URL below.

Blade version

URL: [http://localhost/board](http://localhost/board)
Authentication Email: [user@example.com](mailto:user@example.com)  
Password: password

![サンプル](/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

Next.js version

URL: [http://localhost:80/login/](http://localhost:80/login/)
Authentication Email: [user@example.com](mailto:user@example.com)  
Password: password

- The Next.js version may take several minutes to build. If it doesn't display, wait a few minutes and try to view it again.

![サンプル](/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-02.png)

To allow users to post freely, we currently use Laravel's standard authentication module to identify users.

However, Laravel's standard authentication module cannot be said to have strong security, and this simple web application has no concept of tenants, roles, or even pricing plans.

Let's turn this simple web application into SaaS.

\*The difference between the source code at the start of the tutorial and at the end of the tutorial is  
PHP  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

Next.js  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)

Please use this as a reference.
