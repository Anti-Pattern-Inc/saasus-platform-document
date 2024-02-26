"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7210],{65695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var i=n(74848),a=n(28453),r=n(11470),o=n(19365);const s={title:"Implementation of authorization based on tenant information",slug:"implementation-of-authorization-based-on-tenant-information",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:47:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,u={id:"tutorial/implementation-of-authorization-based-on-tenant-information",title:"Implementation of authorization based on tenant information",description:"Implementation of Authorization",source:"@site/docs/tutorial/implementation-of-authorization-based-on-tenant-information.mdx",sourceDirName:"tutorial",slug:"/tutorial/implementation-of-authorization-based-on-tenant-information",permalink:"/docs/next/tutorial/implementation-of-authorization-based-on-tenant-information",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Implementation of authorization based on tenant information",slug:"implementation-of-authorization-based-on-tenant-information",excerpt:"",hidden:!1,createdAt:"Fri Jan 20 2023 01:47:33 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Setting measurement units, feature menus, and pricing plans",permalink:"/docs/next/tutorial/manage-rate-plans/setting-measurement-units-function-menus-and-price-plans"},next:{title:"Implementation to Next.js (SPA) based application",permalink:"/docs/next/tutorial/implementation-to-nextjs-spa-based-application"}},c={},m=[{value:"Implementation of Authorization",id:"implementation-of-authorization",level:2},{value:"Implementation of comment limits based on pricing plan measurement unit",id:"implementation-of-comment-limits-based-on-pricing-plan-measurement-unit",level:3}];function p(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"implementation-of-authorization",children:"Implementation of Authorization"}),"\n",(0,i.jsx)(t.h3,{id:"implementation-of-comment-limits-based-on-pricing-plan-measurement-unit",children:"Implementation of comment limits based on pricing plan measurement unit"}),"\n",(0,i.jsx)(t.p,{children:"Let's modify the previous sample application and implement the first step of authorization."}),"\n",(0,i.jsx)(t.p,{children:"With the SaaS Platform settings so far, which user is logged in, which tenant the user belongs to, what role the user has, which price plan is selected by that tenant, and what menu can be used? can be obtained from the application. We will use that information to limit the application."}),"\n",(0,i.jsx)(t.p,{children:'For now, focus on "Comments", which is one of the measurement units in the pricing plans.'}),"\n",(0,i.jsx)(t.p,{children:"Earlier, we set a different upper limit for the number of comments for each price plan."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"10 comments limit on Free plan"}),"\n",(0,i.jsx)(t.li,{children:"100 comments limit on Basic plan"}),"\n",(0,i.jsx)(t.li,{children:"No limit on Advanced plan and above"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now, get the maximum number associated with this pricing plan for each tenant and set a limit."}),"\n",(0,i.jsx)(t.p,{children:"Rewrite the post method of api/app/Http/Controllers/MessageController.php as follows."}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(o.A,{value:"php",label:"PHP",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"   public function post(Request $request)\n   {\n        $validated = $request->validate([\n            'message' => 'required|max:255'\n        ]);\n\n        $tenant_id = $request->userinfo['tenants'][0]['id'];\n        $plan_id = $request->userinfo['tenants'][0]['plan_id'];\n\n        // Use the SaaSus SDK to hit the SaaSus API, acquire various information, and use it for judgment\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $res = $pricingApi->getPricingPlan($plan_id, $pricingApi::FETCH_RESPONSE);\n        $plan = json_decode($res->getBody(), true);\n\n        // use metering meter, comment_count\n        $meteringUnitName = \"comment_count\";\n        $res = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday($tenant_id, $meteringUnitName, $pricingApi::FETCH_RESPONSE);\n        // This time, treat it as the maximum number of comments per day\n        $count = json_decode($res->getBody(), true);\n\n        $upper = \\AntiPatternInc\\Saasus\\Api\\Lib::findUpperCountByMeteringUnitName($plan, $meteringUnitName);\n\n        // Disable posting if the number of comments exceeds the maximum number of comments for the current contracted price plan\n        if ($count['count'] < $upper || $upper === 0) {\n            $message = Message::create([\n                'tenant_id' => $tenant_id,\n                'user_id' => $request->userinfo['tenants'][0]['user_attribute']['username'],\n                'message' => $request->message,\n            ]);\n            // add 1 to the number of comments in the metering API\n            $param = new \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\UpdateMeteringUnitTimestampCountNowParam();\n            $param->setMethod('add');\n            $param->setCount(1);\n            $res = $pricingApi->updateMeteringUnitTimestampCountNow($request->userinfo['tenants'][0]['id'], $meteringUnitName, $param, $pricingApi::FETCH_RESPONSE);\n        }\n\n        $request->session()->regenerateToken();\n        return redirect()->route('board');\n   }\n"})})})}),"\n",(0,i.jsx)(t.p,{children:"In addition to the previous code, check the maximum number of comments based on the comment count target meter \u201ccomment_count\u201d."}),"\n",(0,i.jsx)(t.p,{children:"Earlier, the measurement unit is set based on \u201ccomment_count\u201d in any price plan measurement unit as shown in the screen below."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(75692).A+"",width:"975",height:"760"})}),"\n",(0,i.jsx)(t.p,{children:"In the function,"}),"\n",(0,i.jsxs)(t.p,{children:["Get the ",(0,i.jsx)(t.strong,{children:"price plan"})," associated with the tenant,"]}),"\n",(0,i.jsxs)(t.p,{children:["Get the ",(0,i.jsx)(t.strong,{children:"current value"})," of the target meter \u201ccomment_count\u201d,"]}),"\n",(0,i.jsxs)(t.p,{children:["Checking the ",(0,i.jsx)(t.strong,{children:"upper limit"}),' of the upper limit "comment_count" associated with the pricing plan']}),"\n",(0,i.jsx)(t.p,{children:"and if the current value does not exceed the upper limit,"}),"\n",(0,i.jsx)(t.p,{children:"Do the comment writing process as usual,"}),"\n",(0,i.jsxs)(t.p,{children:["Add 1 to the ",(0,i.jsx)(t.strong,{children:"current value"}),' of the target meter "comment_count" and update.']}),"\n",(0,i.jsx)(t.p,{children:"By doing this, it is possible to prevent writing when the upper limit for each pricing plan is exceeded."}),"\n",(0,i.jsx)(t.p,{children:"In order to simplify the process this time, the program will be limited to stopping additional comments once the maximum number is reached. However, in a real case scenario an error message or a message prompting an upsell should be displayed."}),"\n",(0,i.jsxs)(t.p,{children:["Depending on the function, if it is completely stopped at the upper limit, the value of SaaS may be impaired.",(0,i.jsx)(t.br,{}),"\n","For example, if we put an upper limit on comments, and it becomes impossible to write completely there, this will not work as a chat application.",(0,i.jsx)(t.br,{}),"\n","Resulting in this SaaS may going unused until this meter is reset, also taking the risk that there is also the possibility that it will never be used again.",(0,i.jsx)(t.br,{}),"\n","Therefore, instead of stopping comments completely, it is important to prevent the value of this SaaS itself from being lost, such as issuing a warning about the limit, or adjusting the storage period."]}),"\n",(0,i.jsx)(t.p,{children:"Since this is a tutorial, it is completely unwritable. Now, check to see if writing is not possible at the upper limit!"}),"\n",(0,i.jsx)(t.p,{children:"First, run init.sh to clean up the application, just like when we first initialized the application."}),"\n",(0,i.jsxs)(t.p,{children:["Then, set the Free plan for Tenant 1, log in with ",(0,i.jsx)(t.a,{href:"mailto:user1-1@example.com",children:"user1-1@example.com"}),", and write 10 or more items."]}),"\n",(0,i.jsx)(t.p,{children:"This shows that tenant 1 can write a maximum of 10 records."}),"\n",(0,i.jsx)("img",{src:"/img/tutorial/implementation-of-authorization-based-on-tenant-information/implementation-of-authorization-based-on-tenant-information-2.png",width:"400"}),"\n",(0,i.jsxs)(t.p,{children:["Next, log in with user ",(0,i.jsx)(t.a,{href:"mailto:user2-1@example.com",children:"user2-1@example.com"})," in tenant 2 and write 10 or more items."]}),"\n",(0,i.jsx)(t.p,{children:"Since the upper limit is 100 here, you should have been able to write more than 10."}),"\n",(0,i.jsx)("img",{src:"/img/tutorial/implementation-of-authorization-based-on-tenant-information/implementation-of-authorization-based-on-tenant-information-3.png",width:"400"}),"\n",(0,i.jsxs)(t.p,{children:["Furthermore, assuming that tenant 1 has upgraded the plan, change the setting from the Free plan to the Basic plan, log in again with ",(0,i.jsx)(t.a,{href:"mailto:user1-1@example.com",children:"user1-1@example.com"}),", and write 10 or more items. prize.",(0,i.jsx)(t.br,{}),"\n","(It takes about 5 minutes to reflect the changed settings.)"]}),"\n",(0,i.jsx)("img",{src:"/img/tutorial/implementation-of-authorization-based-on-tenant-information/implementation-of-authorization-based-on-tenant-information-4.png",width:"400"}),"\n",(0,i.jsx)(t.p,{children:"This shows that user1-1 can write more than ten items."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(52648).A+"",width:"2995",height:"1313"})}),"\n",(0,i.jsx)(t.p,{children:"Using this method it is now possible to meter and limit according to the pricing plan!"}),"\n",(0,i.jsx)(t.p,{children:"Up to this point, we have implemented Blade-based applications, but finally, how should we implement Next.js (API-based SPA)? Let's continue."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(34164);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>$});var i=n(96540),a=n(34164),r=n(23104),o=n(56347),s=n(205),l=n(57485),u=n(31682),c=n(89466);function m(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[u,m]=h({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=u??f;return d({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),g(e)}),[m,g,r]),tabValues:r}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function w(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==i&&(u(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:m,onClick:c,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(w,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function $(e){const t=(0,g.A)();return(0,x.jsx)(v,{...e,children:m(e.children)},String(t))}},75692:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-1-60719708c7281c8dbfcd9d1f3819c26b.png"},52648:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/implementation-of-authorization-based-on-tenant-information-5-7c98e325564d98456ff7152ce4b2f3e0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);