---
title: "Next.js(SPA)ベースのアプリケーションへの実装"
slug: "implementation-to-nextjs-spa-based-application"
excerpt: ""
hidden: false
createdAt: "Wed Jan 11 2023 03:13:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## SPAベースのアプリケーションへの実装

### Next.js(SPA)ベースのサンプルアプリケーションの準備

Bladeベースのアプリケーションへの実装と同じ機能をNext.jsベースへのアプリケーションにも実装してみましょう。Next.jsベースのアプリケーションは front ディレクトリ配下に入っています。

SPAの場合は、フロントエンドからAPIをコールして画面の更新を行います。そのため、APIコール時にBearerトークンをつけてコールする必要があります。

今回はAPIコールにaxiosを利用していますが、fetchやajaxを利用する場合でも仕組みは同じです。

ローカル環境なので、Next.jsベースのアプリケーションは以下でログインして動作確認できます。

URL: <http://localhost:80/login>  
認証用Email: [user@example.com](mailto:user@example.com)  
Password: password

できることはbladeベースのものと同じですが、まずは上記URLにアクセスして動作確認をしておきましょう。

![](/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-1.png)

動作確認ができたら、まずログイン後のCallbackをNext.jsベースのアプリケーションの方に向けます。SaaSusコンソールにて、コールバック先のURLを http\://localhost:3000/callback に変更しましょう。

![](/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-2.png)

※ログイン画面の再ビルドが行われるため、コールバック先のURLの反映までに数分かかります

### フロントエンドを調整する

ではアプリケーションに組み込んでいきましょう。  
まず、変更したコールバックを受けるページを作成します。

front/src/pages/callback/index.tsx

を作成し、以下のようにします。


<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from '@/lib/axios'

const Callback = () => {
  const router = useRouter()
  const query = router.query
  const code = query.code as string

  const fetchAuthCredentials = async () => {
    const res = await axios.get(`/api/callback?code=${code}`)
    // 渡ってきたJWTをLocal Storageに保存する
    const idToken = res.data.id_token as string
    localStorage.setItem('SaaSusIdToken', idToken)
    router.replace('/board')
  }

  useEffect(() => {
    if (router.isReady) {
      if (code) {
        fetchAuthCredentials()
      }
    }
  }, [query, router])

  return <Container disableGutters></Container>
}

export default Callback
```

</TabItem>
</Tabs>

ここでは、渡ってきた一時コードを元にAPIから認証情報を取得し、id_token をブラウザのlocal storageに格納して、boardページにリダイレクトしています。

次に、この保存したトークンを後ほどAPIコール時にヘッダにつけるようにします。

front/src/pages/board/index.tsx を編集していきます。


<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
import { MessageBoard } from '@/components/MessageBoard'
import { formValueFormat } from '@/const/formTemplate'
import Container from '@mui/material/Container'
import useSWR, { useSWRConfig } from 'swr'
import axios from '@/lib/axios'

const Board = () => {
 const { mutate } = useSWRConfig()
 const fetcher = (url: string) => {
   // Local StorageからJWTを取得し、Bearer tokenとしてヘッダにつけてAPIコールする
   const token = localStorage.getItem('SaaSusIdToken')
   if (!token) return ''
   return axios
     .get(url, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then((res) => res.data)
 }
 const { data: tenant_name, error: tenant_error } = useSWR(
   `/api/tenant`,
   fetcher
 )
 const { data: messages, error } = useSWR(`/api/board`, fetcher, {
   refreshInterval: 5000,
 })
 if (error || tenant_error) return <div>failed to load</div>
 if (!messages || !tenant_name) return <div>loading...</div>

 const handleSubmit = async (value: string) => {
   const formValue = { ...formValueFormat, message: value }
   // 再検証をせずに直ちにローカルデータを更新
   mutate('/api/board', [...messages, formValue], false)
   // 更新するために API にリクエストを送信
   // Local StorageからJWTを取得し、Bearer tokenとしてヘッダにつけてAPIコールする
   const token = localStorage.getItem('SaaSusIdToken')
   await axios.post('/api/post', formValue, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   })
 }

 return (
   <Container disableGutters>
     <MessageBoard
       messages={messages}
       tenant_name={tenant_name}
       onSubmit={handleSubmit}
     />
   </Container>
 )
}

export default Board
```

</TabItem>
</Tabs>

今回はAPIコールしている部分が少ないので簡易的にaxiosのコール時に直接指定してますが、実施にはミドルウェアを使うなどで共通化するのが良いかと思います。

これでフロント側は完了です。

### バックエンドを調整する

つぎにAPI側になります。このサンプルではAPIもLaravelをベースに作成していますので、やることはほとんどBlade版と同じになります。

まず、 .env に今回は API で利用するという環境変数を設定します。これにより、ミドルウェアは失敗時にAPIレスポンスを返すようになります。

api/.env

```
SAASUS_AUTH_MODE="api"
```

次に api/routes/api.php  
でSaaSus SDKのミドルウェアとCallbackApiControllerを利用するようにします。


<Tabs>
<TabItem value="php" label="PHP">

```php
// 一時コードからIDトークンなどの認証情報を取得するコントローラを登録
Route::get('/callback', 'AntiPatternInc\Saasus\Laravel\Controllers\CallbackApiController@index');

// SaaSus SDK標準のAuth Middlewareを利用する
Route::middleware(\AntiPatternInc\Saasus\Laravel\Middleware\Auth::class)->group(function () {
   Route::get('/board', 'App\Http\Controllers\MessageApiController@index');
   Route::post('/post', 'App\Http\Controllers\MessageApiController@post');
   Route::get('/plan', 'App\Http\Controllers\PlanApiController@index');
   Route::get('/tenant', 'App\Http\Controllers\TenantApiController@index');
});
```

</TabItem>
</Tabs>

api/app/Http/Controllers/MessageApiController.php

コントローラの方では、Blade版と同じような実装を行います。

<Tabs>
<TabItem value="php" label="PHP">

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Message;

class MessageApiController extends Controller
{
   public function index(Request $request)
   {
       // SPAの場合でも考え方は同じ
       // 処理は、 MessageController を参照
       $tenantid = $request->userinfo['tenants'][0]['id'];

       $messages = DB::table('messages')
           ->select('messages.*')
           ->where('tenant_id', $tenantid)
           ->get();
       return response()->json($messages);
   }

   public function post(Request $request)
   {
        $tenant_id = $request->userinfo['tenants'][0]['id'];
        $plan_id = $request->userinfo['tenants'][0]['plan_id'];

        // SaaSus SDKを使ってSaaSus APIを叩いて、各種情報を取得し、判断に使う
        $client = new \AntiPatternInc\Saasus\Api\Client();
        $pricingApi = $client->getPricingClient();
        $res = $pricingApi->getPricingPlan($plan_id, $pricingApi::FETCH_RESPONSE);
        $plan = json_decode($res->getBody(), true);

        $meteringUnitName = "comment_count";
        $res = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday($tenant_id, $meteringUnitName, $pricingApi::FETCH_RESPONSE);
        $count = json_decode($res->getBody(), true);

        $upper = \AntiPatternInc\Saasus\Api\Lib::findUpperCountByMeteringUnitName($plan, $meteringUnitName);

        $result = '';
        // 現在契約中の料金プランの上限コメント数を超えていたら、投稿できなくする
        if ($count['count'] < $upper || $upper === 0) {
            $result = Message::create([
                'tenant_id' => $tenant_id,
                'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],
                'message' => $request->message,
            ]);
            // メータリングAPIで、コメント数に１を足す
            $param = new \AntiPatternInc\Saasus\Sdk\Pricing\Model\UpdateMeteringUnitTimestampCountNowParam();
            $param->setMethod('add');
            $param->setCount(1);
            $res = $pricingApi->updateMeteringUnitTimestampCountNow($request->userinfo['tenants'][0]['id'], $meteringUnitName, $param, $pricingApi::FETCH_RESPONSE);
        }

        return response()->json($result);
   }
}
```

</TabItem>
</Tabs>

これでBlade版と同じ機能を実装できました。

ログイン画面からログインすると、Next.js版の方にコールバックされて画面が表示されます。  
Blade版と同じ動きをするか確認してみましょう。

![](/img/tutorial/implementation-to-nextjs-spa-based-application/implementation-to-nextjs-spa-based-application-3.png)

これでチュートリアルは以上になります。

最後にまとめです。
