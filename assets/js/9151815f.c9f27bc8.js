"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[2355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={title:"How to Customize Notification Email Content",slug:"notifymailcustomize",excerpt:"",hidden:!1,createdAt:"Tue Dec 12 2023 05:46:38 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 02:21:05 GMT+0000 (Coordinated Universal Time)"},i=void 0,s={unversionedId:"saas-development-console/notifymailcustomize",id:"version-1.6/saas-development-console/notifymailcustomize",title:"How to Customize Notification Email Content",description:"In the E-Mail Content tab of the Authentication Authorization > Advanced Settings, you can customize the emails that are sent to users on authentication pages such as the sign in page.",source:"@site/versioned_docs/version-1.6/saas-development-console/notifymailcustomize.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/notifymailcustomize",permalink:"/docs/saas-development-console/notifymailcustomize",draft:!1,tags:[],version:"1.6",frontMatter:{title:"How to Customize Notification Email Content",slug:"notifymailcustomize",excerpt:"",hidden:!1,createdAt:"Tue Dec 12 2023 05:46:38 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 02:21:05 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Linking Google Analytics with Google Tag Manager",permalink:"/docs/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink"},next:{title:"Inviting SaaSus Users",permalink:"/docs/saas-development-console/saasususerinvitation"}},l={},u=[{value:"Email Sent with a Temporary Password at New Registration",id:"email-sent-with-a-temporary-password-at-new-registration",level:2},{value:"Example",id:"example",level:3},{value:"Email Resending Temporary Password at New Registration",id:"email-resending-temporary-password-at-new-registration",level:2},{value:"Example*",id:"example-1",level:3},{value:"Email Sent with Verification Code for Password Reset",id:"email-sent-with-verification-code-for-password-reset",level:2},{value:"Example",id:"example-2",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the E-Mail Content tab of the ",(0,a.kt)("a",{href:"https://settings.console.saasus.io/customize",target:"_blank"},"Authentication Authorization > Advanced Settings"),", you can customize the emails that are sent to users on authentication pages such as the sign in page."),(0,a.kt)("h1",{id:"how-to-customize-email-body"},"How to Customize Email Body"),(0,a.kt)("h2",{id:"email-sent-with-a-temporary-password-at-new-registration"},"Email Sent with a Temporary Password at New Registration"),(0,a.kt)("p",null,"The strings {####} and {username} are required."),(0,a.kt)("p",null,"{####} will be replaced with the temporary password and {username} will be replaced with the user ID when sent."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thank you for your registration.\nWe will notify you of your user ID and temporary password.\n\nUser ID: {username}\nTemporary Password: {####}\n\nPlease input the above temporary password on the following page and complete the sign-up.\nhttps://auth.your.domain/sign-up-confirm\n\nPlease include your user ID when making inquiries.\n")),(0,a.kt)("p",null,"When the above setting is made, the actual sent mail will be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thank you for your registration.\nWe will notify you of your user ID and temporary password.\n\nUser ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\nTemporary Password: xxxxxxxx\n\nPlease input the above temporary password on the following page and complete the sign-up.\nhttps://auth.your.domain/sign-up-confirm\n\nPlease include your user ID when making inquiries.\n")),(0,a.kt)("h2",{id:"email-resending-temporary-password-at-new-registration"},"Email Resending Temporary Password at New Registration"),(0,a.kt)("p",null,"The strings {####} and {username} are required."),(0,a.kt)("p",null,"{####} will be replaced with the temporary password and {username} will be replaced with the user ID when sent."),(0,a.kt)("h3",{id:"example-1"},"Example*"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"We will notify you of your user ID and temporary password.\n\nUser ID: {username}\nTemporary Password: {####}\n\nPlease input the above temporary password on the following page and complete the sign-up.\nhttps://auth.your.domain/sign-up-confirm\n\nPlease include your user ID when making inquiries.\n")),(0,a.kt)("p",null,"When the above setting is made, the actual sent mail will be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"We will notify you of your user ID and temporary password.\n\nUser ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\nTemporary Password: xxxxxxxx\n\nPlease input the above temporary password on the following page and complete the sign-up.\nhttps://auth.your.domain/sign-up-confirm\n\nPlease include your user ID when making inquiries.\n")),(0,a.kt)("h2",{id:"email-sent-with-verification-code-for-password-reset"},"Email Sent with Verification Code for Password Reset"),(0,a.kt)("p",null,"The string {####} is required."),(0,a.kt)("p",null,"{####} will be replaced with the verification code when sent."),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thank you for your registration.\nWe will notify you of your verification code for password reset.\n\nVerification Code: {####}\n\nPlease input the above verification code on the following page and reset your password.\nhttps://auth.your.domain/recover-password-confirm\n")),(0,a.kt)("p",null,"When the above setting is made, the actual sent mail will be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thank you for your registration.\nWe will notify you of your verification code for password reset.\n\nVerification Code: 111111\n\nPlease input the above verification code on the following page and reset your password.\nhttps://auth.your.domain/recover-password-confirm\n")))}c.isMDXComponent=!0}}]);