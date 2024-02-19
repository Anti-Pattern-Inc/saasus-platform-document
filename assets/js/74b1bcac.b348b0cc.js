"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"Integrate with Amazon EventBridge",slug:"integrate-with-amazon-eventbridge",excerpt:"",hidden:!1,metadata:{image:[],robots:"index"},createdAt:"Sun Jan 22 2023 11:54:20 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sun Apr 02 2023 10:07:18 GMT+0000 (Coordinated Universal Time)"},o=void 0,i={unversionedId:"saas-development-console/integrate-with-amazon-eventbridge",id:"version-1.6/saas-development-console/integrate-with-amazon-eventbridge",title:"Integrate with Amazon EventBridge",description:"SaaSus Platform is integrated with Amazon EventBridge. Various events that occur on the SaaSus Platform can be sent to Amazon EventBridge in the SaaS-side AWS account as a partner event source. By leveraging this, SaaS can be built with an event-driven architecture that works in conjunction with SaaSus Platform.",source:"@site/versioned_docs/version-1.6/saas-development-console/integrate-with-amazon-eventbridge.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/integrate-with-amazon-eventbridge",permalink:"/saasus-platform-document/docs/saas-development-console/integrate-with-amazon-eventbridge",draft:!1,tags:[],version:"1.6",frontMatter:{title:"Integrate with Amazon EventBridge",slug:"integrate-with-amazon-eventbridge",excerpt:"",hidden:!1,metadata:{image:[],robots:"index"},createdAt:"Sun Jan 22 2023 11:54:20 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sun Apr 02 2023 10:07:18 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Procedure for Applying for a Paid Plan",permalink:"/saasus-platform-document/docs/saas-development-console/procedure-for-applying-for-a-paid-plan"},next:{title:"Event Samples",permalink:"/saasus-platform-document/docs/saas-development-console/integrate-with-amazon-eventbridge/event-sample"}},c={},l=[{value:"How to integrate with Amazon EventBridge",id:"how-to-integrate-with-amazon-eventbridge",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SaaSus Platform is integrated with Amazon EventBridge. Various events that occur on the SaaSus Platform can be sent to Amazon EventBridge in the SaaS-side AWS account as a partner event source. By leveraging this, SaaS can be built with an event-driven architecture that works in conjunction with SaaSus Platform."),(0,r.kt)("p",null,"For example, it can be used to trigger a tenant onboarding process when a SaaS tenant is created, or to trigger the deletion of accompanying data when a user is deleted. Currently, you can retrieve events for all SaaSus APIs. Please check ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/getting-started-with-your-api"},"API Reference")," for the contents of each API."),(0,r.kt)("h2",{id:"how-to-integrate-with-amazon-eventbridge"},"How to integrate with Amazon EventBridge"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://settings.console.saasus.io/integrations/event"},"Event Integration Page of the SaaS Development Console"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ee89669-10_event_001",src:n(17610).Z,width:"1274",height:"938"})),(0,r.kt)("p",null,"In the AWS Account ID section, enter the AWS account ID (the 12-digit ID of the AWS account on which the SaaS is built) to which the event is sent. Also, select the AWS region where you would like to receive notifications. Then press the Save button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"b92426e-10_event_002",src:n(61804).Z,width:"1274",height:"938"})),(0,r.kt)("p",null,"A partner event path will be created on the AWS account configured above. After logging into the relevant AWS account, open the ",(0,r.kt)("a",{parentName:"p",href:"https://ap-northeast-1.console.aws.amazon.com/events/home#/partners"},"Amazon EventBridge Partner Event Source Console")," and verify that the Partner Event Source has been created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"11c56cb-_2023-01-21_23.57.06",src:n(50777).Z,width:"2790",height:"870"})),(0,r.kt)("p",null,'Select the created partner event source and "Associate with event bus". It will then be available for use on the Event Bus just like any other event source.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"22a9b2d-_2023-01-21_23.58.05",src:n(19431).Z,width:"1828",height:"1086"})),(0,r.kt)("p",null,"Next, let's try sending an event. Open the ",(0,r.kt)("a",{parentName:"p",href:"https://ap-northeast-1.console.aws.amazon.com/events/home#/rules"},"Amazon EventBridge Bus Rules page"),". On this screen, you should be able to select the partner event source from earlier as an event bus."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"234abaa-_2023-01-22_18.59.46",src:n(47369).Z,width:"2786",height:"1090"})),(0,r.kt)("p",null,"Create rules based on this event bus. Let's set it up as shown in the following page.",(0,r.kt)("br",{parentName:"p"}),"\n","First, select the SaaSus Platform event bus and click Create rule. On each page, try to enter the information referring to the following page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"288246d-_2023-01-22_19.19.22",src:n(30795).Z,width:"2788",height:"1096"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eefcee6-_2023-01-22_19.20.13",src:n(52043).Z,width:"2354",height:"1618"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"d1e7c0d-_2023-01-22_19.20.25",src:n(12464).Z,width:"2284",height:"1430"})),(0,r.kt)("p",null,'In the event pattern section, first describe the following pattern to get all SaaSus Platform events. Click on the "Edit pattern" button and enter the following JSON directly.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"0867394-_2023-01-22_19.20.34",src:n(13112).Z,width:"1674",height:"1020"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"4d3ea03-_2023-01-22_19.20.51",src:n(62370).Z,width:"1678",height:"1294"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": [{\n    "prefix": "aws.partner/saasus.io"\n  }]\n}\n')),(0,r.kt)("p",null,"In this case, all events are retrieved, but you can filter events to retrieve only those for specific API calls."),(0,r.kt)("p",null,"In this case, let's output all events to CloudWatch Logs to see what kind of events are delivered."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"7d74d3b-_2023-01-22_19.21.19",src:n(62952).Z,width:"2314",height:"1652"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"b260840-_2023-01-22_19.21.33",src:n(87683).Z,width:"2318",height:"930"})),(0,r.kt)("p",null,"After all settings are complete, click Create rule and confirm that the rule has been created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"9b4be62-_2023-01-22_19.21.43",src:n(71788).Z,width:"1884",height:"1758"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ddda235-_2023-01-22_19.21.53",src:n(47181).Z,width:"2798",height:"1240"})),(0,r.kt)("p",null,"Now that we are ready to link events. Send a test event by returning to the SaaSus development console and clicking the Send Test button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"128194b-_2023-01-21_23.55.59",src:n(87162).Z,width:"2860",height:"1252"})),(0,r.kt)("p",null,"If the event arrives successfully, the event should be recorded in CloudWatch Logs. Let's check."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"b93fff7-_2023-01-22_19.24.48",src:n(55952).Z,width:"2830",height:"1426"})),(0,r.kt)("p",null,"We are now able to retrieve events in this manner."),(0,r.kt)("p",null,"In this case, we linked to CloudWatch Logs, but it is possible to link events to various targets such as Lambda and other APIs. This allows us to apply an event-driven architecture, separating where the SaaSus API was called from and when it was called, and what should be done as a result and when."),(0,r.kt)("p",null,'The "detail" entry contains a "trace_id". This is the same as the one specified at the time of the SaaSus API request or the one generated automatically, so you can trace which API call caused the event.'))}u.isMDXComponent=!0},13112:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/0867394-_2023-01-22_19.20.34-0cfaf8616c077668875c1b3c3866b190.png"},50777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/11c56cb-_2023-01-21_23.57.06-a55c14541a2c71935dc360f3ead24bc8.png"},87162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/128194b-_2023-01-21_23.55.59-5cac8b68e4cc4605fa266545e608a244.png"},19431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/22a9b2d-_2023-01-21_23.58.05-ad3fba23fd50a5e28f48477efc67afb0.png"},47369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/234abaa-_2023-01-22_18.59.46-ceb5acd434a45a60537617c7f0328dbe.png"},30795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/288246d-_2023-01-22_19.19.22-51e0af6e8073d3276f59f3c39e60cc62.png"},62370:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4d3ea03-_2023-01-22_19.20.51-b6adcadbc9a182d21069794a517f0b0a.png"},62952:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7d74d3b-_2023-01-22_19.21.19-d456d2567b4ff4f6f2cd72de24f8bee2.png"},71788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/9b4be62-_2023-01-22_19.21.43-3d3113aa6a0f2da1cf857ec65c4c528c.png"},87683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b260840-_2023-01-22_19.21.33-d4412958384f9685ffc28ff23af71bf7.png"},61804:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b92426e-10_event_002-4bcdd393919e8872bb57cddd20ffcee3.png"},55952:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b93fff7-_2023-01-22_19.24.48-6103db65504c11278ac9c197b13f3447.png"},12464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/d1e7c0d-_2023-01-22_19.20.25-95b31d51813536bad543d10105c7a820.png"},47181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ddda235-_2023-01-22_19.21.53-126b4325efd33477de6244f8bc89528a.png"},17610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ee89669-10_event_001-fced658c65dd1a673f1c5ff159fb921a.png"},52043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eefcee6-_2023-01-22_19.20.13-92b378f9ba2df297cc42ab032d99e601.png"}}]);