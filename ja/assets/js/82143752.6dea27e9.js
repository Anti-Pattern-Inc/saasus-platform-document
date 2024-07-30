"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[1513],{48694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=t(74848),r=t(28453),s=t(11470),i=t(19365);const o={title:"Next.js(SPA)\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",slug:"implementation-to-nextjs-spa-based-application",excerpt:"",hidden:!1,createdAt:"Wed Jan 11 2023 03:13:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,u={id:"tutorial/implementation-to-nextjs-spa-based-application",title:"Next.js(SPA)\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",description:"SPA\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.10/tutorial/implementation-to-nextjs-spa-based-application.mdx",sourceDirName:"tutorial",slug:"/tutorial/implementation-to-nextjs-spa-based-application",permalink:"/ja/docs/tutorial/implementation-to-nextjs-spa-based-application",draft:!1,unlisted:!1,tags:[],version:"1.10",frontMatter:{title:"Next.js(SPA)\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",slug:"implementation-to-nextjs-spa-based-application",excerpt:"",hidden:!1,createdAt:"Wed Jan 11 2023 03:13:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"\u30c6\u30ca\u30f3\u30c8\u306e\u60c5\u5831\u3092\u3082\u3068\u306b\u3057\u305f\u8a8d\u53ef\u306e\u5b9f\u88c5",permalink:"/ja/docs/tutorial/implementation-of-authorization-based-on-tenant-information"},next:{title:"\u307e\u3068\u3081",permalink:"/ja/docs/tutorial/summarize"}},c={},d=[{value:"SPA\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",id:"spa\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",level:2},{value:"Next.js(SPA)\u30d9\u30fc\u30b9\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",id:"nextjsspa\u30d9\u30fc\u30b9\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",level:3},{value:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b",id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b",level:3},{value:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b",id:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"spa\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5",children:"SPA\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5"}),"\n",(0,a.jsx)(n.h3,{id:"nextjsspa\u30d9\u30fc\u30b9\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099",children:"Next.js(SPA)\u30d9\u30fc\u30b9\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099"}),"\n",(0,a.jsx)(n.p,{children:"Blade\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u5b9f\u88c5\u3068\u540c\u3058\u6a5f\u80fd\u3092Next.js\u30d9\u30fc\u30b9\u3078\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3082\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002Next.js\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f front \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u914d\u4e0b\u306b\u5165\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"SPA\u306e\u5834\u5408\u306f\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u304b\u3089API\u3092\u30b3\u30fc\u30eb\u3057\u3066\u753b\u9762\u306e\u66f4\u65b0\u3092\u884c\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001API\u30b3\u30fc\u30eb\u6642\u306bBearer\u30c8\u30fc\u30af\u30f3\u3092\u3064\u3051\u3066\u30b3\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4eca\u56de\u306fAPI\u30b3\u30fc\u30eb\u306baxios\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001fetch\u3084ajax\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3067\u3082\u4ed5\u7d44\u307f\u306f\u540c\u3058\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306a\u306e\u3067\u3001Next.js\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u4ee5\u4e0b\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["URL: ",(0,a.jsx)(n.a,{href:"http://localhost:80/login",children:"http://localhost:80/login"}),"\n\u8a8d\u8a3c\u7528Email: ",(0,a.jsx)(n.a,{href:"mailto:user@example.com",children:"user@example.com"}),(0,a.jsx)(n.br,{}),"\n","Password: password"]}),"\n",(0,a.jsx)(n.p,{children:"\u3067\u304d\u308b\u3053\u3068\u306fblade\u30d9\u30fc\u30b9\u306e\u3082\u306e\u3068\u540c\u3058\u3067\u3059\u304c\u3001\u307e\u305a\u306f\u4e0a\u8a18URL\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u3092\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(24163).A+"",width:"689",height:"757"})}),"\n",(0,a.jsxs)(n.p,{children:["\u52d5\u4f5c\u78ba\u8a8d\u304c\u3067\u304d\u305f\u3089\u3001\u307e\u305a\u30ed\u30b0\u30a4\u30f3\u5f8c\u306eCallback\u3092Next.js\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u65b9\u306b\u5411\u3051\u307e\u3059\u3002SaaSus\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u3066\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u5148\u306eURL\u3092 ",(0,a.jsx)(n.a,{href:"http://localhost:3000/callback",children:"http://localhost:3000/callback"})," \u306b\u5909\u66f4\u3057\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(38888).A+"",width:"1531",height:"665"})}),"\n",(0,a.jsx)(n.p,{children:"\u203b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u518d\u30d3\u30eb\u30c9\u304c\u884c\u308f\u308c\u308b\u305f\u3081\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u5148\u306eURL\u306e\u53cd\u6620\u307e\u3067\u306b\u6570\u5206\u304b\u304b\u308a\u307e\u3059"}),"\n",(0,a.jsx)(n.h3,{id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b",children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u3093\u3067\u3044\u304d\u307e\u3057\u3087\u3046\u3002",(0,a.jsx)(n.br,{}),"\n","\u307e\u305a\u3001\u5909\u66f4\u3057\u305f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u53d7\u3051\u308b\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"front/src/pages/callback/index.tsx"}),"\n",(0,a.jsx)(n.p,{children:"\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"typescript",label:"Typescript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import Container from '@mui/material/Container'\nimport { useRouter } from 'next/router'\nimport { useEffect } from 'react'\nimport axios from '@/lib/axios'\n\nconst Callback = () => {\n  const router = useRouter()\n  const query = router.query\n  const code = query.code as string\n\n  const fetchAuthCredentials = async () => {\n    const res = await axios.get(`/api/callback?code=${code}`)\n    // \u6e21\u3063\u3066\u304d\u305fJWT\u3092Local Storage\u306b\u4fdd\u5b58\u3059\u308b\n    const idToken = res.data.id_token as string\n    localStorage.setItem('SaaSusIdToken', idToken)\n    router.replace('/board')\n  }\n\n  useEffect(() => {\n    if (router.isReady) {\n      if (code) {\n        fetchAuthCredentials()\n      }\n    }\n  }, [query, router])\n\n  return <Container disableGutters></Container>\n}\n\nexport default Callback\n"})})})}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u3053\u3067\u306f\u3001\u6e21\u3063\u3066\u304d\u305f\u4e00\u6642\u30b3\u30fc\u30c9\u3092\u5143\u306bAPI\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001id_token \u3092\u30d6\u30e9\u30a6\u30b6\u306elocal storage\u306b\u683c\u7d0d\u3057\u3066\u3001board\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6b21\u306b\u3001\u3053\u306e\u4fdd\u5b58\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3092\u5f8c\u307b\u3069API\u30b3\u30fc\u30eb\u6642\u306b\u30d8\u30c3\u30c0\u306b\u3064\u3051\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"front/src/pages/board/index.tsx \u3092\u7de8\u96c6\u3057\u3066\u3044\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"typescript",label:"Typescript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { MessageBoard } from '@/components/MessageBoard'\nimport { formValueFormat } from '@/const/formTemplate'\nimport Container from '@mui/material/Container'\nimport useSWR, { useSWRConfig } from 'swr'\nimport axios from '@/lib/axios'\n\nconst Board = () => {\n const { mutate } = useSWRConfig()\n const fetcher = (url: string) => {\n   // Local Storage\u304b\u3089JWT\u3092\u53d6\u5f97\u3057\u3001Bearer token\u3068\u3057\u3066\u30d8\u30c3\u30c0\u306b\u3064\u3051\u3066API\u30b3\u30fc\u30eb\u3059\u308b\n   const token = localStorage.getItem('SaaSusIdToken')\n   if (!token) return ''\n   return axios\n     .get(url, {\n       headers: {\n         Authorization: `Bearer ${token}`,\n       },\n     })\n     .then((res) => res.data)\n }\n const { data: tenant_name, error: tenant_error } = useSWR(\n   `/api/tenant`,\n   fetcher\n )\n const { data: messages, error } = useSWR(`/api/board`, fetcher, {\n   refreshInterval: 5000,\n })\n if (error || tenant_error) return <div>failed to load</div>\n if (!messages || !tenant_name) return <div>loading...</div>\n\n const handleSubmit = async (value: string) => {\n   const formValue = { ...formValueFormat, message: value }\n   // \u518d\u691c\u8a3c\u3092\u305b\u305a\u306b\u76f4\u3061\u306b\u30ed\u30fc\u30ab\u30eb\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\n   mutate('/api/board', [...messages, formValue], false)\n   // \u66f4\u65b0\u3059\u308b\u305f\u3081\u306b API \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\n   // Local Storage\u304b\u3089JWT\u3092\u53d6\u5f97\u3057\u3001Bearer token\u3068\u3057\u3066\u30d8\u30c3\u30c0\u306b\u3064\u3051\u3066API\u30b3\u30fc\u30eb\u3059\u308b\n   const token = localStorage.getItem('SaaSusIdToken')\n   await axios.post('/api/post', formValue, {\n     headers: {\n       Authorization: `Bearer ${token}`,\n     },\n   })\n }\n\n return (\n   <Container disableGutters>\n     <MessageBoard\n       messages={messages}\n       tenant_name={tenant_name}\n       onSubmit={handleSubmit}\n     />\n   </Container>\n )\n}\n\nexport default Board\n"})})})}),"\n",(0,a.jsx)(n.p,{children:"\u4eca\u56de\u306fAPI\u30b3\u30fc\u30eb\u3057\u3066\u3044\u308b\u90e8\u5206\u304c\u5c11\u306a\u3044\u306e\u3067\u7c21\u6613\u7684\u306baxios\u306e\u30b3\u30fc\u30eb\u6642\u306b\u76f4\u63a5\u6307\u5b9a\u3057\u3066\u307e\u3059\u304c\u3001\u5b9f\u65bd\u306b\u306f\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u4f7f\u3046\u306a\u3069\u3067\u5171\u901a\u5316\u3059\u308b\u306e\u304c\u826f\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u308c\u3067\u30d5\u30ed\u30f3\u30c8\u5074\u306f\u5b8c\u4e86\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b",children:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u8abf\u6574\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u3064\u304e\u306bAPI\u5074\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u306fAPI\u3082Laravel\u3092\u30d9\u30fc\u30b9\u306b\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u3084\u308b\u3053\u3068\u306f\u307b\u3068\u3093\u3069Blade\u7248\u3068\u540c\u3058\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u307e\u305a\u3001 .env \u306b\u4eca\u56de\u306f API \u3067\u5229\u7528\u3059\u308b\u3068\u3044\u3046\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306f\u5931\u6557\u6642\u306bAPI\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"api/.env"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'SAASUS_AUTH_MODE="api"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u6b21\u306b api/routes/api.php",(0,a.jsx)(n.br,{}),"\n","\u3067SaaSus SDK\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3068CallbackApiController\u3092\u5229\u7528\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"php",label:"PHP",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// \u4e00\u6642\u30b3\u30fc\u30c9\u304b\u3089ID\u30c8\u30fc\u30af\u30f3\u306a\u3069\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u767b\u9332\nRoute::get('/callback', 'AntiPatternInc\\Saasus\\Laravel\\Controllers\\CallbackApiController@index');\n\n// SaaSus SDK\u6a19\u6e96\u306eAuth Middleware\u3092\u5229\u7528\u3059\u308b\nRoute::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n   Route::get('/board', 'App\\Http\\Controllers\\MessageApiController@index');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageApiController@post');\n   Route::get('/plan', 'App\\Http\\Controllers\\PlanApiController@index');\n   Route::get('/tenant', 'App\\Http\\Controllers\\TenantApiController@index');\n});\n"})})})}),"\n",(0,a.jsx)(n.p,{children:"api/app/Http/Controllers/MessageApiController.php"}),"\n",(0,a.jsx)(n.p,{children:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u65b9\u3067\u306f\u3001Blade\u7248\u3068\u540c\u3058\u3088\u3046\u306a\u5b9f\u88c5\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"php",label:"PHP",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\DB;\nuse App\\Models\\Message;\n\nclass MessageApiController extends Controller\n{\n   public function index(Request $request)\n   {\n       // SPA\u306e\u5834\u5408\u3067\u3082\u8003\u3048\u65b9\u306f\u540c\u3058\n       // \u51e6\u7406\u306f\u3001 MessageController \u3092\u53c2\u7167\n       $tenantid = $request->userinfo['tenants'][0]['id'];\n\n       $messages = DB::table('messages')\n           ->select('messages.*')\n           ->where('tenant_id', $tenantid)\n           ->get();\n       return response()->json($messages);\n   }\n\n   public function post(Request $request)\n   {\n        $tenant_id = $request->userinfo['tenants'][0]['id'];\n        $plan_id = $request->userinfo['tenants'][0]['plan_id'];\n\n        // SaaSus SDK\u3092\u4f7f\u3063\u3066SaaSus API\u3092\u53e9\u3044\u3066\u3001\u5404\u7a2e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u5224\u65ad\u306b\u4f7f\u3046\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $res = $pricingApi->getPricingPlan($plan_id, $pricingApi::FETCH_RESPONSE);\n        $plan = json_decode($res->getBody(), true);\n\n        $meteringUnitName = \"comment_count\";\n        $res = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday($tenant_id, $meteringUnitName, $pricingApi::FETCH_RESPONSE);\n        $count = json_decode($res->getBody(), true);\n\n        $upper = \\AntiPatternInc\\Saasus\\Api\\Lib::findUpperCountByMeteringUnitName($plan, $meteringUnitName);\n\n        $result = '';\n        // \u73fe\u5728\u5951\u7d04\u4e2d\u306e\u6599\u91d1\u30d7\u30e9\u30f3\u306e\u4e0a\u9650\u30b3\u30e1\u30f3\u30c8\u6570\u3092\u8d85\u3048\u3066\u3044\u305f\u3089\u3001\u6295\u7a3f\u3067\u304d\u306a\u304f\u3059\u308b\n        if ($count['count'] < $upper || $upper === 0) {\n            $result = Message::create([\n                'tenant_id' => $tenant_id,\n                'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n                'message' => $request->message,\n            ]);\n            // \u30e1\u30fc\u30bf\u30ea\u30f3\u30b0API\u3067\u3001\u30b3\u30e1\u30f3\u30c8\u6570\u306b\uff11\u3092\u8db3\u3059\n            $param = new \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\UpdateMeteringUnitTimestampCountNowParam();\n            $param->setMethod('add');\n            $param->setCount(1);\n            $res = $pricingApi->updateMeteringUnitTimestampCountNow($request->userinfo['tenants'][0]['id'], $meteringUnitName, $param, $pricingApi::FETCH_RESPONSE);\n        }\n\n        return response()->json($result);\n   }\n}\n"})})})}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u308c\u3067Blade\u7248\u3068\u540c\u3058\u6a5f\u80fd\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3057\u305f\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u3001Next.js\u7248\u306e\u65b9\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3055\u308c\u3066\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,a.jsx)(n.br,{}),"\n","Blade\u7248\u3068\u540c\u3058\u52d5\u304d\u3092\u3059\u308b\u304b\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(36753).A+"",width:"2340",height:"1638"})}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u308c\u3067\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u4ee5\u4e0a\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u5f8c\u306b\u307e\u3068\u3081\u3067\u3059\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var a=t(96540),r=t(34164),s=t(23104),i=t(56347),o=t(205),l=t(57485),u=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(A,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}},24163:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/implementation-to-nextjs-spa-based-application-1-7ac5e34a739c5af2625ccac7818f4715.png"},38888:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/implementation-to-nextjs-spa-based-application-2-915fb1da3df495ed91f0e0197086dd55.png"},36753:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/implementation-to-nextjs-spa-based-application-3-2a00531b03d07dc91996c3af8394c9f4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);