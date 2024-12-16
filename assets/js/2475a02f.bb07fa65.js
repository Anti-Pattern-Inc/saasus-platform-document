"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[3310],{77375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var i=t(74848),a=t(28453),r=t(11470),s=t(19365);const o={title:"Metering API Implementation Sample and Examples of Use (Laravel)",slug:"metering-api-sample",excerpt:"",hidden:!1,createdAt:"Tue Nov 14 2023 06:22:12 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Dec 27 2023 09:00:19 GMT+0000 (Coordinated Universal Time)"},l="Laravel Implementation Sample",u={id:"implementation-guide/meteringapisamplelaravelandusecase",title:"Metering API Implementation Sample and Examples of Use (Laravel)",description:"We will describe Laravel implementation samples for each Metering API using SDK and an example of a feature using the Metering API.",source:"@site/versioned_docs/version-1.11/implementation-guide/meteringapisamplelaravelandusecase.md",sourceDirName:"implementation-guide",slug:"/implementation-guide/metering-api-sample",permalink:"/docs/implementation-guide/metering-api-sample",draft:!1,unlisted:!1,tags:[],version:"1.11",frontMatter:{title:"Metering API Implementation Sample and Examples of Use (Laravel)",slug:"metering-api-sample",excerpt:"",hidden:!1,createdAt:"Tue Nov 14 2023 06:22:12 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Dec 27 2023 09:00:19 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"Implementation using SaaSus Platform (Serverless)",permalink:"/docs/implementation-guide/implementing-authentication-using-saasus-serverless"},next:{title:"Implementation Example Using Metering API",permalink:"/docs/implementation-guide/example_implementation_using_metering_api"}},m={},c=[{value:"Get the Metering Unit Count for a Specified Date",id:"get-the-metering-unit-count-for-a-specified-date",level:2},{value:"Use Case",id:"use-case",level:3},{value:"Implementation Sample",id:"implementation-sample",level:3},{value:"Update the Metering Unit Count for a Specified Timestamp",id:"update-the-metering-unit-count-for-a-specified-timestamp",level:2},{value:"Use Case",id:"use-case-1",level:3},{value:"Implementation Sample",id:"implementation-sample-1",level:3},{value:"Delete the Metering Unit Count for a Specified Timestamp",id:"delete-the-metering-unit-count-for-a-specified-timestamp",level:2},{value:"Use Case",id:"use-case-2",level:3},{value:"Implementation Sample",id:"implementation-sample-2",level:3},{value:"Get the Metering Unit Count for Today",id:"get-the-metering-unit-count-for-today",level:2},{value:"Use Case",id:"use-case-3",level:3},{value:"Implementation Sample",id:"implementation-sample-3",level:3},{value:"Update the Current Time Metering Unit Count",id:"update-the-current-time-metering-unit-count",level:2},{value:"Use Case",id:"use-case-4",level:3},{value:"Implementation Sample",id:"implementation-sample-4",level:3},{value:"Get the Metering Unit Count for the Current Month",id:"get-the-metering-unit-count-for-the-current-month",level:2},{value:"Use Case",id:"use-case-5",level:3},{value:"Implementation Sample",id:"implementation-sample-5",level:3},{value:"Get the Metering Unit Count for a Specified Month",id:"get-the-metering-unit-count-for-a-specified-month",level:2},{value:"Use Case",id:"use-case-6",level:3},{value:"Implementation Sample",id:"implementation-sample-6",level:3},{value:"Get All Metering Unit Counts for a Specified Date",id:"get-all-metering-unit-counts-for-a-specified-date",level:2},{value:"Use Case",id:"use-case-7",level:3},{value:"Implementation Sample",id:"implementation-sample-7",level:3},{value:"Get All Metering Unit Counts for a Specified Month",id:"get-all-metering-unit-counts-for-a-specified-month",level:2},{value:"Use Case",id:"use-case-8",level:3},{value:"Implementation Sample",id:"implementation-sample-8",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We will describe Laravel implementation samples for each Metering API using SDK and an example of a feature using the Metering API."}),"\n",(0,i.jsx)(n.p,{children:"Please check the API documentation for details of each API."}),"\n",(0,i.jsx)(n.h1,{id:"laravel-implementation-sample",children:"Laravel Implementation Sample"}),"\n",(0,i.jsx)(n.h2,{id:"get-the-metering-unit-count-for-a-specified-date",children:"Get the Metering Unit Count for a Specified Date"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when you want to show usage to tenants."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:"PHP",children:"/**\n * Get the Metering Unit Count for a Specified Date\n *\n * @see https://docs.saasus.io/reference/getmeteringunitdatecountbytenantidandunitnameanddate\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @param string $date Date in yyyy-mm-dd format\n * @return array\n */\npublic function getCountOfSpecifiedDate(string $tenantId, string $meteringUnitName, string $date)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $unitCount = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(\n        $tenantId,\n        $meteringUnitName,\n        $date\n    );\n  \n    return [\n        'count' => $unitCount->getCount(),\n        'date' => $unitCount->getDate(),\n        'meteringUnitName' => $unitCount->getMeteringUnitName(),\n    ];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"update-the-metering-unit-count-for-a-specified-timestamp",children:"Update the Metering Unit Count for a Specified Timestamp"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCount",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-1",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this for adjustments in case of mistakes in usage updates in past data."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-1",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Update the Metering Unit Count for a Specified Timestamp\n *\n * @see https://docs.saasus.io/reference/updatemeteringunittimestampcount\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @param int $timestamp Timestamp in seconds\n * @param Request $request\n * @return array\n */\npublic function updateCountOfSpecifiedTimestamp(string $tenantId, string $meteringUnitName, int $timestamp, Request $request)\n{\n    // Retrieve the update method and count from the request\n    ['method' => $method, 'count' => $count] = $request->only(['method', 'count']);\n    $updateMeteringUnitTimeStampParam = new UpdateMeteringUnitTimestampCountParam();\n    $updateMeteringUnitTimeStampParam->setMethod($method)\n        ->setCount($count);\n    $unitCount = $this->saasusClient->getPricingClient()->updateMeteringUnitTimestampCount(\n        $tenantId, $meteringUnitName, $timestamp,\n        $updateMeteringUnitTimeStampParam\n    );\n  \n    return [\n        'count' => $unitCount->getCount(),\n        'timestamp' => $unitCount->getTimestamp(),\n        'meteringUnitName' => $unitCount->getMeteringUnitName(),\n     ];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"delete-the-metering-unit-count-for-a-specified-timestamp",children:"Delete the Metering Unit Count for a Specified Timestamp"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/DeleteMeteringUnitTimestampCount",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-2",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this for adjustments in case of mistakes in usage updates in past data."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-2",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Delete the Metering Unit Count for a Specified Timestamp\n *\n * @see https://docs.saasus.io/reference/deletemeteringunittimestampcount\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @param int $timestamp Timestamp in seconds\n * @return array\n */\npublic function deleteCountOfSpecifiedTimestamp(string $tenantId, string $meteringUnitName, int $timestamp)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $pricingApi->deleteMeteringUnitTimestampCount(\n        $tenantId, $meteringUnitName, $timestamp\n    );\n\n    return ['status' => 'success'];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"get-the-metering-unit-count-for-today",children:"Get the Metering Unit Count for Today"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-3",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when you want to show the usage to tenants."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-3",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Get the Metering Unit Count for Today\n *\n * @see https://docs.saasus.io/reference/getmeteringunitdatecountbytenantidandunitnametoday\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @return array\n */\npublic function getCountOfCurrentDay(string $tenantId, string $meteringUnitName)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $unitCount = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameToday(\n        $tenantId, $meteringUnitName\n    );\n\n    return [\n        'count' => $unitCount->getCount(),\n        'date' => $unitCount->getDate(),\n        'meteringUnitName' => $unitCount->getMeteringUnitName(),\n    ];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"update-the-current-time-metering-unit-count",children:"Update the Current Time Metering Unit Count"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/UpdateMeteringUnitTimestampCountNow",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-4",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when updating the unit count, such as at times of changes in usage like the number of users."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-4",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Update the Current Time Metering Unit Count\n * \n * @see https://docs.saasus.io/reference/updatemeteringunittimestampcountnow\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @param Request $request\n * @return array\n */\npublic function updateCountOfNow(string $tenantId, string $meteringUnitName, Request $request)\n{\n    // Retrieve the update method and count from the request\n    ['method' => $method, 'count' => $count] = $request->only(['method', 'count']);\n    $updateMeteringUnitTimeStampNowParam = new UpdateMeteringUnitTimestampCountNowParam();\n    $updateMeteringUnitTimeStampNowParam->setMethod($method)\n        ->setCount($count);\n\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $count = $pricingApi->updateMeteringUnitTimestampCountNow(\n        $tenantId, $meteringUnitName, $updateMeteringUnitTimeStampNowParam\n    );\n\n    return [\n        'count' => $count->getCount(),\n        'timestamp' => $count->getTimestamp(),\n        'meteringUnitName' => $count->getMeteringUnitName(),\n    ];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"get-the-metering-unit-count-for-the-current-month",children:"Get the Metering Unit Count for the Current Month"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-5",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when you want to show usage to tenants."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-5",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Get the Metering Unit Count for the Current Month\n *\n * @see https://docs.saasus.io/reference/getmeteringunitmonthcountbytenantidandunitnamethismonth\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @return array\n */\npublic function getCountOfCurrentMonth(string $tenantId, string $meteringUnitName)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $unitCount = $pricingApi->getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth($tenantId, $meteringUnitName);\n\n    return [\n        'count' => $unitCount->getCount(),\n        'month' => $unitCount->getMonth(),\n        'meteringUnitName' => $unitCount->getMeteringUnitName(),\n    ];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"get-the-metering-unit-count-for-a-specified-month",children:"Get the Metering Unit Count for a Specified Month"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-6",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when you want to show usage to tenants."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-6",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Get the Metering Unit Count for a Specified Month\n *\n * @see https://docs.saasus.io/reference/getmeteringunitmonthcountbytenantidandunitnameandmonth\n *\n * @param string $tenantId Tenant ID\n * @param string $meteringUnitName Metering Unit Name\n * @param string $month Month in yyyy-mm format\n * @return array\n */\npublic function getCountOfSpecifiedMonth(string $tenantId, string $meteringUnitName, string $month)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $unitCount = $pricingApi->getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(\n        $tenantId, $meteringUnitName, $month\n    );\n\n    return [\n        'count' => $unitCount->getCount(),\n        'month' => $unitCount->getMonth(),\n        'meteringUnitName' => $unitCount->getMeteringUnitName(),\n    ];\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"get-all-metering-unit-counts-for-a-specified-date",children:"Get All Metering Unit Counts for a Specified Date"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-7",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when you want to show usage to tenants."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-7",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Get All Metering Unit Counts for a Specified Date\n *\n * @see https://docs.saasus.io/reference/getmeteringunitdatecountsbytenantidanddate\n *\n * @param string $tenantId Tenant ID\n * @param string $date Date in yyyy-mm-dd format\n * @return \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\MeteringUnitDateCount[]\n */\npublic function getAllMeteringCountOfSpecifiedDate(string $tenantId, string $date)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $allMeteringCount = $pricingApi->getMeteringUnitDateCountsByTenantIdAndDate(\n        $tenantId, $date\n    );\n\n    return array_map(function ($count) {\n        return [\n            'count' => $unitCount->getCount(),\n            'date' => $unitCount->getDate(),\n            'meteringUnitName' => $unitCount->getMeteringUnitName(),\n        ];\n    }, $allMeteringCount->getCounts());\n}\n"})})})}),"\n",(0,i.jsx)(n.h2,{id:"get-all-metering-unit-counts-for-a-specified-month",children:"Get All Metering Unit Counts for a Specified Month"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth",children:"API Documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"use-case-8",children:"Use Case"}),"\n",(0,i.jsx)(n.p,{children:"Please use this when you want to show usage to tenants."}),"\n",(0,i.jsx)(n.h3,{id:"implementation-sample-8",children:"Implementation Sample"}),"\n",(0,i.jsx)(r.A,{children:(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Get All Metering Unit Counts for a Specified Month\n *\n * @see https://docs.saasus.io/reference/getmeteringunitmonthcountsbytenantidandmonth\n *\n * @param string $tenantId Tenant ID\n * @param string $month Month in yyyy-mm format\n * @return MeteringUnitMonthCount[]\n */\npublic function getAllMeteringCountOfSpecifiedMonth(string $tenantId, string $month)\n{\n    $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n    $pricingApi = $client->getPricingClient();\n    $allMeteringCount = $pricingApi->getMeteringUnitMonthCountsByTenantIdAndMonth(\n        $tenantId, $month\n    );\n\n    return array_map(function ($unitCount) {\n        return [\n            'count' => $unitCount->getCount(),\n            'month' => $unitCount->getMonth(),\n            'meteringUnitName' => $unitCount->getMeteringUnitName(),\n        ];\n    }, $allMeteringCount->getCounts());\n}\n"})})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>M});var i=t(96540),a=t(34164),r=t(23104),s=t(56347),o=t(205),l=t(57485),u=t(31682),m=t(89466);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[u,c]=g({queryString:t,groupId:a}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,m.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),C=(()=>{const e=u??h;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{C&&l(C)}),[C]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var f=t(92303);const C={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var $=t(74848);function U(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),m=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==i&&(u(n),s(a))},c=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,$.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,$.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:c,onClick:m,...r,className:(0,a.A)("tabs__item",C.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,$.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=h(e);return(0,$.jsxs)("div",{className:(0,a.A)("tabs-container",C.tabList),children:[(0,$.jsx)(U,{...e,...n}),(0,$.jsx)(v,{...e,...n})]})}function M(e){const n=(0,f.A)();return(0,$.jsx)(x,{...e,children:c(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);