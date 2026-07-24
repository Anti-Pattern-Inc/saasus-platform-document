---
title: "Activity History Log Implementation"
slug: "activity-history-log"
excerpt: "Implementation patterns and methods for effectively utilizing activity history logs in your application"
hidden: false
createdAt: "Wed Sep 03 2025 05:28:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This guide explains implementation patterns and methods for effectively utilizing activity history logs.

Activity history logs are records of calls to `GetUserInfo` with `Referer` or `X-SaaSus-Referer` headers. By properly setting these headers in the frontend, you can enhance the value of the logs.

## Implementation Points and Recommended Patterns

### Using the `X-SaaSus-Referer` Header

The `Referer` header automatically set by browsers may omit URL path portions due to privacy settings. When the expected value is not set, we recommend manually setting the `X-SaaSus-Referer` header from the frontend.

<Tabs>
<TabItem value="typescript" label="TypeScript" default>

```js
await fetch(url, {
  headers: {
    'Authorization': `Bearer ${jwtToken}`,
    'X-SaaSus-Referer': window.location.pathname
  }
});
```

</TabItem>
</Tabs>

### Implementation Points for Frontend

Here are the recommended implementation patterns for effectively utilizing activity history logs in frontend applications. We use React sample code here, but the same concepts can be applied to other frameworks and traditional multi-page applications.

Note that activity history logs are recorded when GetUserInfo is executed, so please ensure that GetUserInfo is executed at each endpoint.

#### Basic: Recording Page Views

In SPAs, it's common to send multiple API requests to display a single page. In such cases, setting the same page path in `X-SaaSus-Referer` for all API requests ensures that activity history logs are correctly recorded as "pages the user accessed," making them easy to understand.

Using the `useLocation` hook from `react-router-dom`, define common headers as shown below and reuse them for API requests related to page display.

<Tabs>
<TabItem value="typescript" label="TypeScript" default>

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const location = useLocation();
  const pagePath = location.pathname; // Example: "/users"
  const jwtToken = localStorage.getItem("SaaSusIdToken");

  // Define headers to be used commonly within the page
  const commonHeaders = {
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `Bearer ${jwtToken}`,
    "X-SaaSus-Referer": pagePath,
  };

  // Use these common headers for each API request executed when displaying the page
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/users', { headers: commonHeaders });
      await axios.get('/user_attributes', { headers: commonHeaders });
    };
    fetchData();
  }, []);

  // ...
};
```

</TabItem>
</Tabs>

By implementing this way, all API requests related to displaying `UserPage` will be consistently recorded in the logs as access to `/users`. Since multiple APIs are called when displaying a page, the same path will be recorded multiple times in a short period in the logs, but this is intended normal behavior. This ensures that "the user was active on this page at this time" is recorded.

#### Advanced: Recording Page Actions

Beyond page views, recording specific actions within pages such as "which button was pressed" further increases the value of the logs.

In such cases, we recommend adding query parameters like `?action=...` to the URL set in `X-SaaSus-Referer` to express context.

<Tabs>
<TabItem value="typescript" label="TypeScript" default>

```tsx
// Continuation of UserPage component

const handleDeleteUser = async (userId: string) => {
  // Define headers specific to this delete action
  const actionHeaders = {
    ...commonHeaders, // Copy commonHeaders and
    // Overwrite Referer with action information
    "X-SaaSus-Referer": `${pagePath}?action=delete_user`,
  };

  try {
    await axios.delete(`/users/${userId}`, {
      headers: actionHeaders, // Use action-specific headers
    });
    // ... Success handling
  } catch (error) {
    // ... Error handling
  }
};
```

</TabItem>
</Tabs>

This approach creates logs that clearly show the flow: "user opened the user list page (multiple logs), then executed deletion (action log)," making them easy to analyze.

## Output Example

The following shows an example of activity history logs recorded by the above implementation:

![Activity History Log Output Example](/img/part-6/implementation-guide/implementing-activity-history-log/image-01.png)
