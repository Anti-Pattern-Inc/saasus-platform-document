"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[9661],{34737:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=a(74848),s=a(28453),r=a(11470),i=a(19365);const o={sidebar_position:4,title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",slug:"embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",excerpt:"",hidden:!1,createdAt:"Thu Jan 26 2023 02:07:21 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,c={id:"tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant",title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",description:"Embed the SaaSus SDK in your web application",source:"@site/versioned_docs/version-1.10/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant.mdx",sourceDirName:"tutorial",slug:"/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",permalink:"/docs/tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",draft:!1,unlisted:!1,tags:[],version:"1.10",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Embed the SaaSus SDK into your Web Application and make it multi-tenant",slug:"embed-the-saasus-sdk-into-your-web-application-and-make-it-multi-tenant",excerpt:"",hidden:!1,createdAt:"Thu Jan 26 2023 02:07:21 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"SaaS Management using the SaaS Operation Console",permalink:"/docs/tutorial/saas-management-using-the-saas-operation-console"},next:{title:"Manage Rate Plans",permalink:"/docs/tutorial/manage-rate-plans/manage-rate-plans"}},d={},u=[{value:"Embed the SaaSus SDK in your web application",id:"embed-the-saasus-sdk-in-your-web-application",level:2},{value:"Reconfirm SaaS ID, API Key and Client Secret",id:"reconfirm-saas-id-api-key-and-client-secret",level:3},{value:"Prepare to use the SaaSus SDK",id:"prepare-to-use-the-saasus-sdk",level:3},{value:"Include Authentication Module",id:"include-authentication-module",level:3},{value:"Confirmation of SaaSus SDK Integration",id:"confirmation-of-saasus-sdk-integration",level:3},{value:"Making the Sample Application Multi-Tenant",id:"making-the-sample-application-multi-tenant",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"embed-the-saasus-sdk-in-your-web-application",children:"Embed the SaaSus SDK in your web application"}),"\n",(0,t.jsx)(n.p,{children:"*Programming knowledge is required"}),"\n",(0,t.jsx)(n.h3,{id:"reconfirm-saas-id-api-key-and-client-secret",children:"Reconfirm SaaS ID, API Key and Client Secret"}),"\n",(0,t.jsxs)(n.p,{children:["First, check the API key on the ",(0,t.jsx)(n.strong,{children:"SaaSus Development Console"}),". Use this in your application settings",(0,t.jsx)(n.br,{}),"\n","(Be careful not to expose your API key to other people. The API key displayed in this tutorial has already been deactivated.)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"01",src:a(5137).A+"",width:"1295",height:"896"})}),"\n",(0,t.jsx)(n.h3,{id:"prepare-to-use-the-saasus-sdk",children:"Prepare to use the SaaSus SDK"}),"\n",(0,t.jsx)(n.p,{children:"Open the sample application we prepared earlier in the development environment."}),"\n",(0,t.jsxs)(n.p,{children:["As we did at the beginning, make sure that the docker container is started using init.sh and the sample application is running on ",(0,t.jsx)(n.a,{href:"http://localhost/board",children:"http://localhost/board"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"First, to easily use the SaaSus Platform, embed the SaaSus SDK into your application."}),"\n",(0,t.jsx)(n.p,{children:"In this setup the SDK is PHP based, the next step is using Composer."}),"\n",(0,t.jsx)(n.p,{children:"Enter the php container and setup using composer."}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"repo$ docker compose exec php bash\nroot@xxx:/var/www# cd api\nroot@xxx:/var/www/api# composer config repositories.saasus-platform/saasus-sdk-php vcs https://github.com/saasus-platform/saasus-sdk-php\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"repo$ docker compose exec node bash\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"In the api directory add the SDK using the following composer command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"root@xxx:/var/www/api# composer require saasus-platform/saasus-sdk-php\n"})}),"\n",(0,t.jsx)(n.p,{children:"After installing the SaaSus SDK, define the environment variables necessary for using the SaaSus SDK."}),"\n",(0,t.jsx)(n.p,{children:"Create a .env file by copying the .env.example file in the api directory and edit the following part at the bottom of the .env file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-.env",children:'### for SaaS Platform\nSAASUS_SAAS_ID="saasid_98tjo3wifaoua (SaaS ID of the screen)"\nSAASUS_API_KEY="apikey_kjntowjfoasnkjntwonsflajsno4as (Screen API KEY)"\nSAASUS_SECRET_KEY=" (screen client secret)"\nSAASUS_LOGIN_URL="https://auth.sample.saasus.jp/ (Login screen URL)"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["SAASUS_SAAS_ID, SAASUS_API_KEY, SAASUS_SECRET_KEY are the SaaS ID, API Key, and client secret displayed on the console page,",(0,t.jsx)(n.br,{}),"\n","SAASUS_LOGIN_URL sets the URL of the login page created on the SaaSus development console."]}),"\n",(0,t.jsx)(n.h3,{id:"include-authentication-module",children:"Include Authentication Module"}),"\n",(0,t.jsx)(n.p,{children:"Next, include the SaaSus Platform's authentication module."}),"\n",(0,t.jsx)(n.p,{children:"In this application, authentication is required at the root of all URIs. If not authenticated, the application cannot be used. The SaaSus authentication function is incorporated as middleware through Laravel."}),"\n",(0,t.jsx)(n.p,{children:"As default in"}),"\n",(0,t.jsx)(n.p,{children:"api/routes/web.php"}),"\n",(0,t.jsx)(n.p,{children:", the Laravel standard authentication function is used, replace it with the SaaSus authentication function."}),"\n",(0,t.jsx)(n.p,{children:"Default code"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"Route::middleware('auth')->group(function () {\n   Route::get('/', function () {\n       return view('welcome');\n   });\n   Route::get('/dispatch', 'App\\Http\\Controllers\\DispatchController@index')->name('dispatch');\n   Route::get('/board', 'App\\Http\\Controllers\\MessageController@index')->name('board');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageController@post')->name('post');\n});\n\nrequire __DIR__ . '/auth.php';\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'app.use(\n  session({\n    secret: "secret",\n    resave: false,\n    saveUninitialized: false,\n  })\n);\napp.use(passport.initialize());\napp.use(passport.session());\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Change to the following in order to incorporate the SaaSus authentication function"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"// Route::middleware('auth')->group(function () {\n//     Route::get('/', function () {\n//         return view('welcome');\n//     });\n// Use SaaSus SDK standard Auth Middleware\nRoute::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n   Route::get('/dispatch', 'App\\Http\\Controllers\\DispatchController@index')->name('dispatch');\n   Route::get('/board', 'App\\Http\\Controllers\\MessageController@index')->name('board');\n   Route::post('/post', 'App\\Http\\Controllers\\MessageController@post')->name('post');\n\n   Route::redirect('/', '/board');\n});\n\n// require __DIR__ . '/auth.php';\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { AuthMiddleware } from "saasus-sdk";\n...\n// app.use(\n//   session({\n//     secret: "secret",\n//     resave: false,\n//     saveUninitialized: false,\n//   })\n// );\napp.use(\n  ["/chat", "/api/board", "/api/post", "/api/plan", "/api/tenant"],\n  AuthMiddleware\n);\n// app.use(passport.initialize());\n// app.use(passport.session());\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Next prepare a receiver for callback from the authentication screen. Earlier in the set up on the SaaSus development console, the callback destination is defined as ",(0,t.jsx)(n.a,{href:"http://localhost/callback",children:"http://localhost/callback"}),", thus receivable it at /callback ."]}),"\n",(0,t.jsx)(n.p,{children:"In order to set up the callback, add the following to the last line of api/routes/web.php:"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"// Use the SaaS SDK standard Callback Controller to store JWT in Cookie or Local Storage\nRoute::get('/callback', 'AntiPatternInc\\Saasus\\Laravel\\Controllers\\CallbackController@index');\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { CallbackRouter } from "saasus-sdk";\n...\napp.use("/callback", callbackRouter);\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"In addition, add the path to api/config/view.php so that the views provided by the SaaSus SDK can be used"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"   'paths' => [\n      resource_path('views'),\n      # \u2193Add this line: View directory provided by SaaSus SDK\n      resource_path('../vendor/saasus-platform/saasus-sdk-php/src/Laravel/Views'),\n   ],\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <title>Auth Callback</title>\n  </head>\n\n  <body>\n    <script>\n      location.href = "/chat";\n    <\/script>\n  </body>\n</html>\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"With this setup, the authentication information set in the SaaSus Platform will be passed as part of the request when the controller of the application is reached."}),"\n",(0,t.jsx)(n.p,{children:"Add a request argument to the index function of api/app/Http/Controllers/MessageController.php and use dd to check if $request contains userinfo"}),"\n",(0,t.jsx)(n.p,{children:"Change the following 4 lines."}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"   public function index(Request $request)\n   {\n       // Check if user information is passed from SaaSus Platform\n       dd($request->userinfo);\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const getChats = async (req: Request, res: Response) => {\n  // Check if user information is passed from SaaSus Platform\n  console.log(req.userinfo);\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Once this step is completed the basic SDK setup is complete."}),"\n",(0,t.jsx)(n.p,{children:"Now, log in from the SaaSus Platform and check the operation."}),"\n",(0,t.jsx)(n.h3,{id:"confirmation-of-saasus-sdk-integration",children:"Confirmation of SaaSus SDK Integration"}),"\n",(0,t.jsx)(n.p,{children:"Access the login page created on the SaaSus Platform."}),"\n",(0,t.jsxs)(n.p,{children:["Access the login page on the domain set on the console, such as ",(0,t.jsx)(n.a,{href:"https://auth.sample.saasus.jp",children:"https://auth.sample.saasus.jp"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"02",src:a(84026).A+"",width:"644",height:"572"})}),"\n",(0,t.jsx)(n.p,{children:"Log in with the email address and password of the user created earlier, then the page will be redirected to the URL set in the Callback URL along with the authentication information."}),"\n",(0,t.jsxs)(n.p,{children:["For example, log in with ",(0,t.jsx)(n.a,{href:"mailto:user1-1@example.com",children:"user1-1@example.com"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If there are no problems with the previous code, the following should be displayed after login."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'array:3 [\u25bc\n  "email" => "user1-1@example.com"\n  "id" => "f6a02019-1306-431f-b93d-3a756b312481"\n  "tenants" => array:1 [\u25bc\n    0 => array:7 [\u25bc\n      "back_office_staff_email" => "saasus-sample-tenant1@example.com"\n      "completed_sign_up" => true\n      "envs" => array:1 [\u25bc\n        0 => array:3 [\u25bc\n          "id" => 1\n          "name" => "dev"\n          "roles" => array:1 [\u25bc\n            0 => array:2 [\u25bc\n              "display_name" => "\u4e00\u822c\u5229\u7528\u8005"\n              "role_name" => "user"\n            ]\n          ]\n        ]\n      ]\n      "id" => "7b639774-6fba-4b26-b580-f3d755876a4b"\n      "name" => "\u30c6\u30ca\u30f3\u30c8\u306e\u30b5\u30f3\u30d7\u30eb\u305d\u306e\uff11"\n      "plan_id" => "bc011444-a9f1-41c0-8251-bc8928b09ee7"\n      "user_attribute" => array:1 [\u25bc\n        "username" => "user1-1"\n      ]\n    ]\n  ]\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"On the application side, you can see that the user information and tenant information set earlier on the SaaSus Platform."}),"\n",(0,t.jsxs)(n.p,{children:["The redirect URL is received by the Callback processing of the SaaS SDK standard (",(0,t.jsx)(n.a,{href:"http://localhost/callback",children:"http://localhost/callback"}),"), and in that process the authentication information is stored in the browser's local storage and cookies."]}),"\n",(0,t.jsx)(n.p,{children:"Then, with the Auth Middleware of the SaaSus SDK, use the SaaSus Platform to validate the authentication information, get the user information, and put in the Request object."}),"\n",(0,t.jsx)(n.p,{children:"After that, the application's controller will take over, so at this point the application already has the logged-in person's information."}),"\n",(0,t.jsx)(n.p,{children:"Now let's use this information to make the sample bulletin board application multi-tenant ready!"}),"\n",(0,t.jsx)(n.h3,{id:"making-the-sample-application-multi-tenant",children:"Making the Sample Application Multi-Tenant"}),"\n",(0,t.jsx)(n.p,{children:"As api/app/Http/Controllers/MessageController.php contains the main process, the processing for multi-tenant support will be put here."}),"\n",(0,t.jsxs)(n.p,{children:["First, change the display part.",(0,t.jsx)(n.br,{}),"\n","Rewrite the whole public function index."]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"   public function index(Request $request)\n   {\n      // $request->userinfo contains various user information and tenant information, so use it\n      $messages = Message::where('tenant_id', $request->userinfo['tenants'][0]['id'])->get();\n      return view('messageBoard.index', ['messages' => $messages, 'plans' => $this::PLANS, 'tenant_name' => $request->userinfo['tenants'][0]['name']]);\n   }\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const getChats = async (req: Request, res: Response) => {\n  try {\n    const messages = await db.Messages.findAll({\n      where: {\n        tenant_id: req.userInfo?.tenants[0].id,\n      },\n    });\n    res.render("chat", {\n      messages: messages,\n      plans: PLANS,\n      tenant_name: TENANT_NAME,\n    });\n  } catch (error) {\n    console.error(error);\n    res.redirect("/chat");\n  }\n};\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"In this way, search the DB based on the passed tenant ID."}),"\n",(0,t.jsx)(n.p,{children:"Below is the post function."}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"php",label:"PHP",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"   public function post(Request $request)\n   {\n      $validated = $request->validate([\n          'message' => 'required|max:255'\n      ]);\n\n      // Acquire various information from userinfo of $request and use it for judgment\n      $message = Message::create([\n          'tenant_id' => $request->userinfo['tenants'][0]['id'],\n          'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n          'message' => $request->message,\n      ]);\n\n      $request->session()->regenerateToken();\n      return redirect()->route('board');\n   }\n"})})}),(0,t.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const postChats = async (req: Request, res: Response) => {\n  const mes = req.body.message;\n  // Acquire various information from userinfo of $request and use it for judgment\n  const tenantId = req.userInfo?.tenants[0].id || "";\n  const userName =\n    req.userInfo?.tenants[0].user_attribute.username || "\u30c6\u30b9\u30c8\u30e6\u30fc\u30b6\u30fc";\n  try {\n    await db.Messages.create({\n      tenant_id: tenantId,\n      user_id: userName,\n      message: mes,\n    });\n  } catch (error) {\n    console.error(error);\n  }\n  res.redirect("/chat");\n};\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Store tenant ID and user name as a set based on the passed user attributes."}),"\n",(0,t.jsx)(n.p,{children:"Next, display the user ID on the page display."}),"\n",(0,t.jsx)(n.p,{children:"Edit api/resources/views/messageBoard/index.blade.php."}),"\n",(0,t.jsx)(n.p,{children:"Change this $message->user->name part to $message->user_id around line 32."}),"\n",(0,t.jsx)(n.p,{children:"Before change:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-blade",children:'                   <div class="mt-4">\n                       <p>\n                           {{ $message->user->name }}\n                           <span class="text-xs text-gray-500">\n                               {{ $message->created_at->format(\'Y/m/d H:i\') }}\n                           </span>\n                       </p>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Revised:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-blade",children:'                   <div class="mt-4">\n                       <p>\n                           {{ $message->user_id }}\n                           <span class="text-xs text-gray-500">\n                               {{ $message->created_at->format(\'Y/m/d H:i\') }}\n                           </span>\n                       </p>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Multi-tenant support is now available!"}),"\n",(0,t.jsx)(n.p,{children:"Now log in and try it out."}),"\n",(0,t.jsx)(n.p,{children:"As before, log in from the login page created on the SaaSus Platform."}),"\n",(0,t.jsx)(n.p,{children:"When you log in, you can see that the tenant name has changed to what was set in the SaaS development console earlier."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"03",src:a(31779).A+"",width:"940",height:"344"})}),"\n",(0,t.jsx)(n.p,{children:"There isn't any data yet, so let's post some."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"04",src:a(71884).A+"",width:"979",height:"585"})}),"\n",(0,t.jsx)(n.p,{children:"The user name is also displayed."}),"\n",(0,t.jsxs)(n.p,{children:["Go back to the login screen, and log in as ",(0,t.jsx)(n.a,{href:"mailto:user1-2@example.com",children:"user1-2@example.com"}),", and make some posts."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"05",src:a(7797).A+"",width:"965",height:"743"})}),"\n",(0,t.jsx)(n.p,{children:"It will be reflected on the page."}),"\n",(0,t.jsxs)(n.p,{children:["Next log in with another tenant's user, ",(0,t.jsx)(n.a,{href:"mailto:user2-1@example.com",children:"user2-1@example.com"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"06",src:a(22046).A+"",width:"971",height:"327"})}),"\n",(0,t.jsx)(n.p,{children:"The displayed tenant name has changed, and the content is empty."}),"\n",(0,t.jsx)(n.p,{children:"This shows that displayed information is limited to each specific tenant."}),"\n",(0,t.jsxs)(n.p,{children:["Now, after posting several posts in the same way, log in with ",(0,t.jsx)(n.a,{href:"mailto:user2-2@example.com",children:"user2-2@example.com"})," and confirm that the information of the same tenant can be displayed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"07",src:a(74535).A+"",width:"971",height:"740"})}),"\n",(0,t.jsx)(n.p,{children:"Thus, per-tenant isolation is complete."}),"\n",(0,t.jsx)(n.p,{children:"As for the current separation method, a pool model to separate tenants within the same DB and separated tenants using a simple method. Even if a different tenant separation method per your requirements, such as schema separation or database separation, you can also use the SaaSus SDK to acquire tenant information and implement it."}),"\n",(0,t.jsx)(n.p,{children:"Now that the tenants are separated, next is the implementation of billing-related functions."}),"\n",(0,t.jsx)(n.p,{children:"Let's implement the first steps of pricing, metering, and billing. For billing, we use a billing SaaS called Stripe. If you don't use Stripe, skip the billing part."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(34164);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),s=a(34164),r=a(23104),i=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:a,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),x=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function j(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),s=o[a].value;s!==t&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function S(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(S,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(n))}},5137:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-01-2ef31540932770e159d1171aa0ce9211.png"},84026:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-02-c7d8cea8669155518f6e9af4ab8ab8d7.png"},31779:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-03-e9c6ab68bcf17262b3a80ac25d1d3171.png"},71884:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-04-2f2929ae136ac035bbeb7b194ff57ee6.png"},7797:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-05-78845443352407f1aa192200d8514c80.png"},22046:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-06-20a01174936edab7169e50ac04dc28ee.png"},74535:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant-07-98e8a77dd2c20795a3eaa64cf52a9536.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);