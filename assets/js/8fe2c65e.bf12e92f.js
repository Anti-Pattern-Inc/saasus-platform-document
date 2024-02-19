"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[1277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:2,title:"Prepare SaaS Platform",slug:"prepare-saas-platform",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:46:40 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},s=void 0,o={unversionedId:"tutorial/prepare-saasus-platform",id:"tutorial/prepare-saasus-platform",title:"Prepare SaaS Platform",description:"\\*You can also watch the entire process via video.",source:"@site/docs/tutorial/prepare-saasus-platform.md",sourceDirName:"tutorial",slug:"/tutorial/prepare-saas-platform",permalink:"/saasus-platform-document/docs/next/tutorial/prepare-saas-platform",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Prepare SaaS Platform",slug:"prepare-saas-platform",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:46:40 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Prepare a Sample Application",permalink:"/saasus-platform-document/docs/next/tutorial/prepare-the-sample-application"},next:{title:"SaaS Management using the SaaS Operation Console",permalink:"/saasus-platform-document/docs/next/tutorial/saas-management-using-the-saas-operation-console"}},l={},p=[{value:"Preparing the SaaSus Platform",id:"preparing-the-saasus-platform",level:2},{value:"Creating a SaaSus Platform Account",id:"creating-a-saasus-platform-account",level:3},{value:"Logging into the Console",id:"logging-into-the-console",level:3},{value:"Setting the Domain Name",id:"setting-the-domain-name",level:3},{value:"Authentication Redirect URL Setting",id:"authentication-redirect-url-setting",level:3},{value:"SaaS ID and API Key Confirmation",id:"saas-id-and-api-key-confirmation",level:3},{value:"Customizing Authentication Pages such as Login Pages",id:"customizing-authentication-pages-such-as-login-pages",level:3},{value:"Define Additional Attributes for Users",id:"define-additional-attributes-for-users",level:3},{value:"Defining Additional Attributes for a Tenant",id:"defining-additional-attributes-for-a-tenant",level:3},{value:"Role Definition",id:"role-definition",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"*","You can also watch the entire process via video.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=deSkPJ-zTgw"},"https://www.youtube.com/watch?v=deSkPJ-zTgw")),(0,i.kt)("h2",{id:"preparing-the-saasus-platform"},"Preparing the SaaSus Platform"),(0,i.kt)("h3",{id:"creating-a-saasus-platform-account"},"Creating a SaaSus Platform Account"),(0,i.kt)("p",null,"First, let's create a SaaSus Platform account."),(0,i.kt)("p",null,"Access the registration screen and perform new registration using your own email address."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://auth.saasus.io/sign-up"},"https://auth.saasus.io/sign-up")),(0,i.kt)("p",null,"Enter your email address and desired password, read the terms of use and privacy policy, check if you agree, and press the sign up button."),(0,i.kt)("img",{src:"/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-01.png",width:"500"}),(0,i.kt)("p",null,"A verification code will be sent to the email address you entered, enter it to activate your account"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"02",src:a(77989).Z,width:"652",height:"711"})),(0,i.kt)("p",null,"After verification is completed, the login screen will be displayed"),(0,i.kt)("p",null,"Log in with the email address and password you registered with earlier."),(0,i.kt)("img",{src:"/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-03.png",width:"500"}),(0,i.kt)("p",null,"When you register for the SaaSus Platform for the first time, we will create a tenant exclusively for you. This takes at least an hour because we will create a customer-dedicated AWS account. Once your account has been created, you will receive an email to the email address you provided."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"06",src:a(50230).Z,width:"1005",height:"400"})),(0,i.kt)("h3",{id:"logging-into-the-console"},"Logging into the Console"),(0,i.kt)("p",null,"After the tenant is created, when you log in, you will be prompted to enter user attributes like this."),(0,i.kt)("img",{src:"/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-05.png",width:"500"}),(0,i.kt)("p",null,"After filling in the information, the transition page to each console of the tenant is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"06",src:a(76109).Z,width:"1005",height:"400"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SaaS Development Console")," is a console for setting up SaaS construction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SaaS Management Console")," is a console for managing SaaS."),(0,i.kt)("p",null,"Details on registration will be provided later.",(0,i.kt)("br",{parentName:"p"}),"\n","First, in order to set up SaaS creation settings log into the ",(0,i.kt)("strong",{parentName:"p"},"SaaS Development Console"),"."),(0,i.kt)("h3",{id:"setting-the-domain-name"},"Setting the Domain Name"),(0,i.kt)("p",null,"*","If you do not have a domain name, skip this item and click ",(0,i.kt)("a",{parentName:"p",href:"#authentication-redirect-url-setting"},"Next.")),(0,i.kt)("p",null,'After logging in to the SaaS Development Console, register the domain name used for SaaS. Click "Domain" on the side menu to display the domain registration page. This domain name will be used as the base domain for the login page and for emails. After that, you will be asked to create a DNS record, so please register a ',(0,i.kt)("strong",{parentName:"p"},"domain name that you can operate"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"07",src:a(81267).Z,width:"1275",height:"931"})),(0,i.kt)("p",null,"After registering your domain name, a CNAME record will appear at the bottom of the screen after a few seconds for DNS verification (confirming that you do indeed own the domain name). Register this value in your DNS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"08",src:a(67829).Z,width:"3023",height:"1581"})),(0,i.kt)("p",null,"Login to your domain registrar's account, select the domain and edit the CNAME records. (GoDaddy, Namecheap, Domain.com, Name.com, AWS Route53, Azure DNS, Cloud DNS, .etc)"),(0,i.kt)("p",null,'After registering your DNS, the verification will be completed momentarily and "The following DNS information has been verified and is working properly." will be displayed. You are now ready to set up the SaaSus Platform.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"10",src:a(28120).Z,width:"3023",height:"1575"})),(0,i.kt)("p",null,"Based on this domain, the SaaSus Platform automatically generates a login screen."),(0,i.kt)("h3",{id:"authentication-redirect-url-setting"},"Authentication Redirect URL Setting"),(0,i.kt)("p",null,"The SaaSus Platform will generate a login page based on the domain name you just set. After logging in through this login page, the authentication information will be handed over to the SaaS side. It is necessary to register the SaaS redirect URL as the Callback URL."),(0,i.kt)("p",null,'Click "Auth Transition" on the side menu to display the Callback URL setting page.'),(0,i.kt)("p",null,"Normally, set the Callback URL based on the URL that provides SaaS. This time, we will run the sample application locally, so set it as follows."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://localhost/callback"},"http://localhost/callback")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"11",src:a(40105).Z,width:"1275",height:"931"})),(0,i.kt)("h3",{id:"saas-id-and-api-key-confirmation"},"SaaS ID and API Key Confirmation"),(0,i.kt)("p",null,'Next, check the "SaaS ID" and "API key" that will be used when implementing SaaS.'),(0,i.kt)("p",null,'"SaaS ID" is issued by default. You can use it as it is, or you can reissue it by pressing the "Reissue SaaS ID" button.'),(0,i.kt)("p",null,'Since an "API Key" is not issued by default, press "Issue API Key" to issue one.'),(0,i.kt)("p",null,"*","Please note that if you reissue a SaaS ID after the actual SaaS operation has started, you will also need to modify the SaaS ID set on the SaaS application side."),(0,i.kt)("p",null,"At this time you can check this information anytime on this page, however for enhanced security we plan to change it so that the the API key will not be displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"12",src:a(92635).Z,width:"1275",height:"931"})),(0,i.kt)("h3",{id:"customizing-authentication-pages-such-as-login-pages"},"Customizing Authentication Pages such as Login Pages"),(0,i.kt)("p",null,"Next, customize the login pages generated earlier."),(0,i.kt)("p",null,'Click "Authentication Details" on the side menu'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"13",src:a(56462).Z,width:"1275",height:"931"})),(0,i.kt)("p",null,"In Basic Information, edit the various information used on the authentication page."),(0,i.kt)("p",null,"For example, on the previous login page,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Welcome to the SaaSus Platform" is the ',(0,i.kt)("strong",{parentName:"li"},"service name")),(0,i.kt)("li",{parentName:"ul"},"The icon at the top is ",(0,i.kt)("strong",{parentName:"li"},"icon upload")),(0,i.kt)("li",{parentName:"ul"},"The Terms of Use URL and privacy policy URL are ",(0,i.kt)("strong",{parentName:"li"},"Terms of Use and Privacy Policy Link"),(0,i.kt)("br",{parentName:"li"}),"becomes:")),(0,i.kt)("img",{src:"/img/tutorial/prepare-saasus-platform/prepare-saasus-platform-14.png",width:"500"}),(0,i.kt)("p",null,'Click the "Save" button to apply the changes'),(0,i.kt)("p",null,'On the "Page Settings" tab, you can select whether to display the terms of use and privacy policy on the following pages new registration, login, and password change.'),(0,i.kt)("p",null,'On the "Authentication Settings" tab, you can configure various detailed authentication settings.'),(0,i.kt)("p",null,"Once the settings are completed, the login page will be generated at the URL with \u201cauth.\u201d added to the domain name set earlier. Let's check if the login screen can actually be displayed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you save your changes, a new login page will be generated. It will take a few minutes to generate, so please try to access it after a few minutes to see what you last saved.")),(0,i.kt)("p",null,"The login page will be generated with a URL that adds \u201cauth.\u201d to the beginning of the domain name you set earlier."),(0,i.kt)("p",null,"For example, if the domain name is set to \u201csample.saasus.jp\u201d, a login page at ",(0,i.kt)("a",{parentName:"p",href:"https://auth.sample.saasus.jp/"},"https://auth.sample.saasus.jp/")," is provided."),(0,i.kt)("p",null,"After confirming the login page, let's return to the SaaSus console"),(0,i.kt)("h3",{id:"define-additional-attributes-for-users"},"Define Additional Attributes for Users"),(0,i.kt)("p",null,"Next, define user attributes."),(0,i.kt)("p",null,'Click "User Attribute Definition" on the side menu.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"15",src:a(23116).Z,width:"1275",height:"931"})),(0,i.kt)("p",null,"On the default SaaS Platform managed SaaS users only have user IDs (UUIDs) and email addresses. If this is not enough, users can be assigned additional attributes."),(0,i.kt)("p",null,"SaaS designers need to consider which user attributes should be on the SaaS Platform side and which attributes should be on the SaaS side."),(0,i.kt)("p",null,"For example, if you want to manage all user information on the SaaS Platform side, define the required additional attributes in the SaaS Platform. However, there are cases where you do not want to manage important information such as personal information on the SaaS Platform side, or you want to perform various aggregations based on additional user attributes. In that case, it is more flexible to require only authentication on the SaaS Platform side, manage user information on the SaaS side based on the user master, and associate the UUID with the authentication information on the SaaS Platform side."),(0,i.kt)("p",null,'For this example, the sample application requires a username, so let\'s define an attribute called "username".'),(0,i.kt)("p",null,'Click the "+ Create User Attribute" to display the dialog for creating user attributes'),(0,i.kt)("p",null,"The attribute name is used as a key for identification on the SaaS application (code) side. Therefore, it is important to enter in English."),(0,i.kt)("p",null,"Display name is described so that the attribute can be easily understood"),(0,i.kt)("p",null,"Type specifies the data type."),(0,i.kt)("p",null,"For the sample application, set as follows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attribute Name: username"),(0,i.kt)("li",{parentName:"ul"},"Display Name: Username"),(0,i.kt)("li",{parentName:"ul"},"Type: String")),(0,i.kt)("p",null,'After entering, press the "Create" button'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"16",src:a(77109).Z,width:"609",height:"528"})),(0,i.kt)("p",null,"User attributes added."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"17",src:a(74749).Z,width:"1295",height:"940"})),(0,i.kt)("h3",{id:"defining-additional-attributes-for-a-tenant"},"Defining Additional Attributes for a Tenant"),(0,i.kt)("p",null,"Then click \u201cTenant Attribute Definition\u201d to define additional attributes for the tenant."),(0,i.kt)("p",null,'Here "Tenant" refers to the tenants in a multi-tenant SaaS. In other words, the organizational unit (contracting unit) of the SaaS is called a tenant.'),(0,i.kt)("p",null,"Define any additional attributes that may be required for each tenant."),(0,i.kt)("p",null,"Click \u201c+ Create Tenant Attribute\u201d to add it in the same way as for user attributes."),(0,i.kt)("p",null,"This time, let's make it possible to add a memo for the tenant."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attribute Name: memo"),(0,i.kt)("li",{parentName:"ul"},"Display Name: Memo"),(0,i.kt)("li",{parentName:"ul"},"Type: String")),(0,i.kt)("p",null,'After entering, press the "Create" button'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"18",src:a(81424).Z,width:"620",height:"529"})),(0,i.kt)("p",null,"Tenant attribute added."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"19",src:a(55979).Z,width:"1298",height:"939"})),(0,i.kt)("h3",{id:"role-definition"},"Role Definition"),(0,i.kt)("p",null,"Next, we will define the roles."),(0,i.kt)("p",null,"This role becomes a role in various SaaS and is used as the basis for authorization."),(0,i.kt)("p",null,"For example, if you have administrator privileges for each tenant, define a role such as admin, and for general users, assign a role such as user."),(0,i.kt)("p",null,"This time, we will define admin and user for the sample application."),(0,i.kt)("p",null,'Click the "+ Create Role" button to display the Create Role dialog.'),(0,i.kt)("p",null,"The role name is used to identify the role on the SaaS application side."),(0,i.kt)("p",null,"The display name is for easy recognition per role."),(0,i.kt)("p",null,"Enter,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Role Name: admin"),(0,i.kt)("li",{parentName:"ul"},"Display Name: SaaS Admin")),(0,i.kt)("p",null,"and click the Create button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"20",src:a(78220).Z,width:"619",height:"428"})),(0,i.kt)("p",null,"Similarly,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Role Name: user"),(0,i.kt)("li",{parentName:"ul"},"Display Name: General User")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"21",src:a(85112).Z,width:"619",height:"428"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"22",src:a(62905).Z,width:"1300",height:"939"})),(0,i.kt)("p",null,"Now you are ready to create a multi-tenant SaaS."),(0,i.kt)("p",null,"Now let's switch to the ",(0,i.kt)("strong",{parentName:"p"},"SaaS Operation Console")," and create SaaS tenants and users!"))}c.isMDXComponent=!0},77989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-02-4d5aef45ae77089f531a28ea7eb40d82.png"},50230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-04-faa9cee3ac8fa6c21c5d0bff14e14315.png"},76109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-06-d191039094427d87342f6826374afad9.png"},81267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-07-911dbc8bff25c8d540ed7ac104723276.png"},67829:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-08-1e1df10e2da6f654e9665c9fa94b6859.png"},28120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-10-02d45bfe05d1a62efd6d4e7a2e9576cb.png"},40105:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-11-42fdfc6154af5ba332720199a6062189.png"},92635:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-12-bd3541f96d1411e40ba1c2fbdba54814.png"},56462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-13-7fe922465cc790e640ada90c05ccb49e.png"},23116:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-15-844bf439b0e7abedbee0612148874f28.png"},77109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-16-415e8b7d6bb445facb1491875c1eca93.png"},74749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-17-3c798d1872e390b06aa9d76c2fcf9a41.png"},81424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-18-e903351baff8d1ed74b29ff9df000cc7.png"},55979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-19-1982cf8755154369bfd1121adf31af8d.png"},78220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-20-9db86c4dc7e2db60a345bc9bf6ad738b.png"},85112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-21-3279be85b7ed853ad9b15afc100f4738.png"},62905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prepare-saasus-platform-22-eba00b0c4c32f5c2227d07c9b77f515c.png"}}]);