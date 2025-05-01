---
title: "User Activity History Log"
slug: "user-activity-history-log"
description: "The user activity log allows you to view the history of user actions within your SaaS application."
excerpt: ""
hidden: false
createdAt: "Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

> The user activity log allows you to view the history of user actions within your SaaS application.

:::info
The user activity history log is only available to customers on the Advanced plan or higher.
:::

You can view the "action history log" in the Actions column of the SaaS Operations Console > User Management.

![users](/img/part-5/user-management/user-activity-history-log/users.png)
![activity-history-log](/img/part-5/user-management/user-activity-history-log/activity-history-log.png)

The history of the screen transitions by users on the SaaS is displayed in chronological order.
The log retention period is up to one month.

## Setup

When executing `GetUserInfo`, set the `Referer` or `X-SaaSus-Referer` header.
If both are set, `X-SaaSus-Referer` takes precedence.

Examples of SDK implementations for each language are as follows.

```mdx-code-block
<Tabs>
<TabItem value="php" label="PHP" default>
```

For example, if you are using [Laravel](https://github.com/laravel/laravel), it would look like this.

Use `AntiPatternInc\Saasus\Laravel\Middleware\Auth`.

```php
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Run GetUserInfo inside Middleware\Auth
// Retrieve the "Referer" and "X-SaaSus-Referer" from the request headers and add them as headers when executing
Route::middleware(\AntiPatternInc\Saasus\Laravel\Middleware\Auth::class)->group(function () {
  Route::get('/users', 'App\Http\Controllers\UserApiController@index');
});
```

```mdx-code-block
</TabItem>
<TabItem value="nodejs" label="Node.js">
```

For example, if you are using [`Express`](https://github.com/expressjs/express), it would look like this.

Use `saasus-sdk.AuthMiddleware`.

```js
import express from "express";

import { AuthMiddleware } from "saasus-sdk";

const app = express();

app.use(
  // Run GetUserInfo inside AuthMiddleware
  // Retrieve the "Referer" and "X-SaaSus-Referer" from the request headers and add them as headers when executing
  ["/users"],
  AuthMiddleware
);

app.use(["/users"], usersRouter);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
    @GetMapping(value = "/users", produces = "application/json")
    public ResponseEntity<?> getUsers(HttpSession session, HttpServletRequest request) throws Exception {
        AuthApiClient apiClient = new Configuration().getAuthApiClient();
        apiClient.setReferer(request.getHeader("Referer")); // Set the Referer header

        UserInfoApi userInfoApi = new UserInfoApi(apiClient);
        UserInfo userInfo = null;
        try {
            userInfo = userInfoApi.getUserInfo(getIDToken(request));
            System.out.println(userInfo);
        } catch (ApiException e) {
            e.printStackTrace();
            throw e;
        }
        System.out.println(userInfo.getTenants());

        String tenantId = userInfo.getTenants().get(0).getId();
        TenantUserApi tenantUserApi = new TenantUserApi(apiClient);
        Users users = null;
        try {
            users = tenantUserApi.getTenantUsers(tenantId);
            System.out.println(users);
        } catch (ApiException e) {
            e.printStackTrace();
            throw e;
        }

        return ResponseEntity.ok(users.getUsers());
    }
```

```mdx-code-block
</TabItem>
<TabItem value="go" label="Go">
```

For example, if you are using [`Echo`](https://github.com/labstack/echo), it would look like this.

Use `middleware.ExtractReferer`.

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/saasus-platform/saasus-sdk-go/ctxlib"
	"github.com/saasus-platform/saasus-sdk-go/generated/authapi"
	"github.com/saasus-platform/saasus-sdk-go/middleware"
	"github.com/saasus-platform/saasus-sdk-go/modules/auth"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

var authClient *authapi.ClientWithResponses

func run() error {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	authClient, err = auth.AuthWithResponse()
	if err != nil {
		return fmt.Errorf("failed to create auth client: %w", err)
	}

	idTokenGetter := &middleware.IdTokenGetterFromAuthHeader{}
	authMiddleware := authMiddlewareEcho(idTokenGetter)

	e := echo.New()

	// Retrieve the "Referer" and "X-SaaSus-Referer" from the request headers and store in context
	// middleware.ExtractReferer must be executed before GetUserInfo
	e.Use(echo.WrapMiddleware(middleware.ExtractReferer))

	e.GET("/users", getUsers, authMiddleware)
	return e.Start(":80")
}

func authMiddlewareEcho(getter middleware.IDTokenGetter) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			// Execute GetUserInfo inside middleware.Authenticate
			// If the context holds Referer, add it as a header when executing GetUserInfo
			userInfo, err := middleware.Authenticate(c.Request().Context(), getter.GetIDToken(c.Request()))
			if err != nil {
				http.Error(c.Response().Writer, "Unauthorized "+err.Error(), http.StatusUnauthorized)
				return nil
			}

			c.Set(string(ctxlib.UserInfoKey), userInfo)
			return next(c)
		}
	}
}

```

```mdx-code-block
</TabItem>
<TabItem value="python" label="Python">
```

For example, if you are using [`FastAPI`](https://github.com/tiangolo/fastapi), it would look like this.

```python
import uvicorn
from typing import Union
from fastapi import FastAPI, Request, Depends, HTTPException, Header

from saasus_sdk_python import TenantUserApi
from saasus_sdk_python.callback.callback import Callback
from saasus_sdk_python.middleware.middleware import Authenticate
from saasus_sdk_python.client.client import SignedApiClient

from dotenv import load_dotenv

load_dotenv()
app = FastAPI()
auth = Authenticate()
callback = Callback()
api_client = SignedApiClient()

def fastapi_auth(request: Request) -> Union[dict, HTTPException]:
    auth_header = request.headers.get("Authorization", "")
    token = auth_header.replace("Bearer ", "") if "Bearer " in auth_header else ""
    referer = request.headers.get("Referer", "")
    # Execute GetUserInfo inside auth.authenticate
    # You can set the referer as an argument
    user_info, error = auth.authenticate(id_token=token, referer=referer)
    if error:
        raise HTTPException(status_code=401, detail=str(error))
    return user_info

@app.get("/users")
def get_tenant_users(auth_user: dict = Depends(fastapi_auth)):
    if not auth_user.tenants:
        raise HTTPException(status_code=400, detail="No tenants found for the user")

    tenant_id = auth_user.tenants[0].id

    try:
        tenant_user_info = TenantUserApi(api_client=api_client).get_tenant_users(tenant_id=tenant_id,
                                                                                 _headers=api_client.configuration.default_headers)

        return tenant_user_info.users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=80)
```
```mdx-code-block
</TabItem>
</Tabs>
```
---

When sending HTTP requests from the SaaS screen to the SaaS, set the `Referer` or `X-SaaSus-Referer` header.

The `Referer` header is automatically set by the browser, but the path part of the URL may be omitted.
If the expected value is not set, manually set the `X-SaaSus-Referer` header.

```js
await fetch(url, {
  headers: {
    'X-SaaSus-Referer': window.location.href.split('?')[0]
  }
});
```

The activity history log displays the history of `GetUserInfo` executed with `Referer` or `X-SaaSus-Referer` headers. Therefore if a HTTP request is not sent to the SaaS or only HTTP requests that do not execute `GetUserInfo` are sent when navigating to a certain screen, the transition to that screen will not be recorded.