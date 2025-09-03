---
title: "行動履歴ログの実装"
slug: "implementing-activity-history-log"
excerpt: "行動履歴ログを効果的に活用するための実装パターンと実装方法"
hidden: false
createdAt: "Wed Sep 03 2025 05:28:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Sep 03 2025 05:28:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

行動履歴ログを効果的に活用するための実装パターンと実装方法について説明します。

行動履歴ログは、`Referer` または `X-SaaSus-Referer` ヘッダーを付与して`GetUserInfo`を呼び出した履歴です。フロントエンドでこのヘッダーを適切に設定することで、ログの価値を高めることができます。

## 実装のポイントと推奨パターン

### `X-SaaSus-Referer`ヘッダーの利用

ブラウザが自動で設定する`Referer`ヘッダーは、プライバシー設定などによってURLのパス部分が省略される場合があります。期待した値が設定されない場合は、フロントエンドから手動で`X-SaaSus-Referer`ヘッダーを設定することを推奨します。

```js
await fetch(url, {
  headers: {
    'Authorization': `Bearer ${jwtToken}`,
    'X-SaaSus-Referer': window.location.pathname
  }
});
```

### フロントエンドでの実装のポイント

フロントエンドで行動履歴ログを効果的に活用するための実装パターンを紹介します。ここではReactのサンプルコードを使用していますが、他のフレームワークや従来のマルチページアプリケーションでも同様の考え方が適用できます。

なお、行動履歴ログは GetUserInfo 実行時に記録されるため、各エンドポイントで GetUserInfo を実行していることを確認してください。

#### 基本：ページ表示の記録

SPAでは、1つのページを表示するために複数のAPIリクエストを送信することがよくあります。その際、すべてのAPIリクエストで `X-SaaSus-Referer` には同じページのパスを設定することで、行動履歴ログが「ユーザーがアクセスしたページ」として正しく記録され、非常に分かりやすくなります。

`react-router-dom`の`useLocation`フックを使って、以下のように共通のヘッダーを定義し、ページ表示のためのAPIリクエストで使い回すのが基本です。

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const location = useLocation();
  const pagePath = location.pathname; // 例: "/users"
  const jwtToken = localStorage.getItem("SaaSusIdToken");

  // ページ内で共通して使用するヘッダーを定義
  const commonHeaders = {
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `Bearer ${jwtToken}`,
    "X-SaaSus-Referer": pagePath,
  };

  // ページ表示時に実行される各APIリクエストでは、この共通ヘッダーを使用する
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

このように実装することで、`UserPage`の表示に関連するすべてのAPIリクエストが、ログ上で`/users`へのアクセスとして一貫して記録されます。ページ表示時に複数のAPIが呼び出されるため、ログには同じパスが短時間に複数記録されますが、これは意図された正常な動作です。これにより、「ユーザーがこの時刻にこのページでアクティブであった」ことが記録されます。

#### 応用：ページ内アクションの記録

ページ表示だけでなく、「どのボタンが押されたか」といったページ内の具体的なアクションも記録すると、ログの価値がさらに高まります。

その場合、`X-SaaSus-Referer`に設定するURLに、`?action=...` のようなクエリパラメータを追加して文脈を表現するのがおすすめの方法です。

```tsx
// UserPageコンポーネントの続き

const handleDeleteUser = async (userId: string) => {
  // この削除アクション専用のヘッダーを定義
  const actionHeaders = {
    ...commonHeaders, // commonHeadersをコピーし、
    // Refererにアクション情報を追加して上書き
    "X-SaaSus-Referer": `${pagePath}?action=delete_user`, 
  };

  try {
    await axios.delete(`/users/${userId}`, {
      headers: actionHeaders, // アクション用のヘッダーを使用
    });
    // ...成功時の処理
  } catch (error) {
    // ...エラー処理
  }
};
```

これにより、「ユーザーがユーザー一覧ページを開き（複数ログ）、その後、削除を実行した（アクションログ）」という一連の流れが明確にわかる、分析しやすいログになります。
