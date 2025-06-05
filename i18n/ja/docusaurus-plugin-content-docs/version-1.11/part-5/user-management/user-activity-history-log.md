---
title: "行動履歴ログ"
slug: "user-activity-history-log"
excerpt: ""
hidden: false
createdAt: "Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jun 11 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## 概要

行動履歴ログでは、ユーザーがSaaSを操作した履歴を確認することができます。

:::warning
「行動履歴ログ」は、旧スタータープランおよび旧スタンダードプランをご契約中の場合、ご利用いただけません。  
本機能をご利用いただくには、プランのアップデートが必要です。
:::
SaaS運用コンソール > ユーザー管理 のActions内にある「行動履歴ログ」から閲覧することができます。


![users](/ja/img/part-5/user-management/user-activity-history-log/users.png)
![activity-history-log](/ja/img/part-5/user-management/user-activity-history-log/activity-history-log.png)

ユーザーがSaaSの画面を遷移した履歴が時系列順に表示されます。
ログの保持期間は最大1ヶ月です。

## 設定方法

`GetUserInfo` を実行する際に `Referer` または `X-SaaSus-Referer` ヘッダーを設定します。
両方とも設定した場合は `X-SaaSus-Referer` が優先されます。

言語毎のSDKの実装例は以下になります。

```mdx-code-block
<Tabs>
<TabItem value="php" label="PHP" default>
```

例えば [`Laravel`](https://github.com/laravel/laravel) を使用する場合、以下のようになります。

`AntiPatternInc\Saasus\Laravel\Middleware\Auth` を使用します。

```php
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Middleware\Auth 内で GetUserInfo を実行する
// リクエストヘッダーの"Referer","X-SaaSus-Referer"を取得し、 GetUserInfo の実行時にヘッダーとして付与する
Route::middleware(\AntiPatternInc\Saasus\Laravel\Middleware\Auth::class)->group(function () {
  Route::get('/users', 'App\Http\Controllers\UserApiController@index');
});
```

```mdx-code-block
</TabItem>
<TabItem value="nodejs" label="Node.js">
```

例えば [`Express`](https://github.com/expressjs/express) を使用する場合、以下のようになります。

`saasus-sdk.AuthMiddleware` を使用します。

```js
import express from "express";

import { AuthMiddleware } from "saasus-sdk";

const app = express();

app.use(
  // AuthMiddleware 内で GetUserInfo を実行する
  // リクエストヘッダーの"Referer","X-SaaSus-Referer"を取得し、 GetUserInfo の実行時にヘッダーとして付与する
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
        apiClient.setReferer(request.getHeader("Referer")); // Refererヘッダーを設定する

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

例えば [`Echo`](https://github.com/labstack/echo) を使用する場合、以下のようになります。

`middleware.ExtractReferer` を使用します。

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

	// リクエストヘッダーの"Referer","X-SaaSus-Referer"を取得し、contextに保持する
	// middleware.ExtractReferer は GetUserInfo より先に実行する必要がある
	e.Use(echo.WrapMiddleware(middleware.ExtractReferer))

	e.GET("/users", getUsers, authMiddleware)
	return e.Start(":80")
}

func authMiddlewareEcho(getter middleware.IDTokenGetter) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			// middleware.Authenticate 内で GetUserInfo を実行する
			// context が Referer を保持している場合、GetUserInfo の実行時にヘッダーとして付与する
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

例えば [`FastAPI`](https://github.com/tiangolo/fastapi) を使用する場合、以下のようになります。

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
    # auth.authenticate 内で GetUserInfo を実行する
    # 引数としてrefererを設定することができる
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

SaaSの画面からSaaSへHTTPリクエストを送信する際に `Referer` または `X-SaaSus-Referer` ヘッダーを設定します。

`Referer` ヘッダーはブラウザが自動で設定しますが、URLのパス部分が省略されている場合があります。
期待した値が設定されない場合は `X-SaaSus-Referer` ヘッダーを手動で設定します。

```js
await fetch(url, {
  headers: {
    'X-SaaSus-Referer': window.location.href.split('?')[0]
  }
});
```

行動履歴ログで表示されるのは `Referer` または `X-SaaSus-Referer` ヘッダーを付与して実行した `GetUserInfo` の履歴になります。そのため、ある画面に遷移した時、SaaSへHTTPリクエストを送信しない場合や `GetUserInfo` を実行しないHTTPリクエストのみを送信する場合、その画面への遷移は記録されません。
