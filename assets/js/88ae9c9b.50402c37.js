"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[6488],{13010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(74848),a=t(28453),r=t(11470),o=t(19365);const s={title:"Implementation Example Using Metering API",slug:"example_implementation_using_metering_api",excerpt:"",hidden:!1,createdAt:"Wed Dec 27 2023 08:53:56 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Dec 27 2023 09:01:38 GMT+0000 (Coordinated Universal Time)"},l=void 0,c={id:"implementation-guide/example_implementation_using_metering_api",title:"Implementation Example Using Metering API",description:"Overview",source:"@site/versioned_docs/version-1.6/implementation-guide/example_implementation_using_metering_api.mdx",sourceDirName:"implementation-guide",slug:"/implementation-guide/example_implementation_using_metering_api",permalink:"/docs/implementation-guide/example_implementation_using_metering_api",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{title:"Implementation Example Using Metering API",slug:"example_implementation_using_metering_api",excerpt:"",hidden:!1,createdAt:"Wed Dec 27 2023 08:53:56 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Dec 27 2023 09:01:38 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"Metering API Implementation Sample and Examples of Use (Laravel)",permalink:"/docs/implementation-guide/metering-api-sample"},next:{title:"About SaaS User Accounts",permalink:"/docs/usecase/about-saas-user-accounts"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating the Pricing Plan",id:"creating-the-pricing-plan",level:2},{value:"Creating Pricing Units",id:"creating-pricing-units",level:3},{value:"Creating Feature Menus",id:"creating-feature-menus",level:3},{value:"Creating the Pricing Plan",id:"creating-the-pricing-plan-1",level:3},{value:"Applying the Pricing Plan",id:"applying-the-pricing-plan",level:2},{value:"Implementation Sample",id:"implementation-sample",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Let's consider a SaaS with plans set up for metered billing based on the number of users and active users."}),"\n",(0,i.jsx)(n.p,{children:"We will create a feature that allows tenant administrators to check the usage based on the date and metering units."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("summary",{children:"Creating the Pricing Plan for This Implementation Example"}),(0,i.jsx)(n.h2,{id:"creating-the-pricing-plan",children:"Creating the Pricing Plan"}),(0,i.jsx)(n.h3,{id:"creating-pricing-units",children:"Creating Pricing Units"}),(0,i.jsx)(n.p,{children:"We will create pricing units for the number of users and active users."}),(0,i.jsx)(n.p,{children:"In this example, we are creating usage units, but when actually operating, consider creating tiered units or tiered usage units as referenced in the link below."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/saas-development-console/tiered_unit",children:"About the Difference in Billing Calculation between Tiered Units and Tiered Usage Units"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go to Pricing Plan -> Pricing Unit Settings from the development console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'In the Pricing Unit Settings screen, click the "\u25bc" next to "Create Fixed Unit Pricing" and select "Create Usage Unit Pricing", then click the "Create Usage Unit Pricing" button.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(27785).A+"",width:"420",height:"410"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the pricing units for the number of users and active users."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(77814).A+"",width:"1478",height:"1388"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(31615).A+"",width:"1482",height:"1390"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"creating-feature-menus",children:"Creating Feature Menus"}),(0,i.jsx)(n.p,{children:"Create feature menus to set the created pricing units."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go to Pricing Plan -> Feature Menu Settings from the development console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click on "Create Feature Menu" at the top right.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a feature menu with the pricing units for the number of users and active users set."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(46340).A+"",width:"1192",height:"1424"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"creating-the-pricing-plan-1",children:"Creating the Pricing Plan"}),(0,i.jsx)(n.p,{children:"Create a pricing plan with the created feature menus set."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go to Pricing Plan -> Pricing Plan Settings from the development console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click on "Create Pricing Plan" at the top right.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a pricing plan with the created feature menus set."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(9581).A+"",width:"1342",height:"1462"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.h2,{id:"applying-the-pricing-plan",children:"Applying the Pricing Plan"}),(0,i.jsx)(n.p,{children:"Apply the pricing plan from the SaaSus operation console."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click on Pricing Plan Settings in the SaaSus operation console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click the "Plan Settings" button in the row of the tenant you want to apply the pricing plan to.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the created pricing plan and save it with the application date set to immediate effect."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(17965).A+"",width:"1496",height:"1246"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"After this, the pricing plan will be applied in 5 minutes."})]}),"\n",(0,i.jsx)(n.h2,{id:"implementation-sample",children:"Implementation Sample"}),"\n",(0,i.jsx)(n.p,{children:"In the Laravel implementation sample, APIs for obtaining login user information and tenant information are omitted."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("summary",{children:"React Implementation Sample"}),(0,i.jsx)(r.A,{children:(0,i.jsx)(o.A,{value:"typescript",label:"App.tsx",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { BrowserRouter, Route, Routes } from "react-router-dom";\n\nimport Auth from "./components/route/Auth.tsx";\nimport Tenant from "./components/route/Tenant.tsx";\nimport Callback from "./pages/Callback";\nimport UsageCheck from "./pages/UsageCheck.tsx";\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <Routes>\n                <Route path="/callback" element={<Callback />} />\n                <Route path="/" element={<Auth />}>\n                    <Route path="/tenants/:tenantId" element={<Tenant />}>\n                        <Route path="usage-check" element={<UsageCheck />} />\n                    </Route>\n                </Route>\n            </Routes>\n        </BrowserRouter>\n    );\n}\n\nexport default App;\n'})})})}),(0,i.jsx)(r.A,{children:(0,i.jsx)(o.A,{value:"typescript",label:"Auth.tsx",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import axios from "axios";\nimport React, { useEffect, useState } from "react";\nimport { Outlet } from "react-router-dom";\n\nconst LOGIN_URL = import.meta.env.VITE_LOGIN_URL;\nconst API_ENDPOINT = import.meta.env.VITE_API_URL;\n\nconst Auth: React.FC = () => {\n    const [authUser, setAuthUser] = useState<User>()\n    const [authUserFetching, setAuthUserFetching] = useState(true);\n    // Fetching information of the logged-in user\n    const getUserInfo = async () => {\n        try {\n            const jwtToken = window.localStorage.getItem("SaaSusIdToken");\n            const res = await axios.get<User>(`${API_ENDPOINT}/api/userinfo`, {\n                headers: {\n                    "X-Requested-With": "XMLHttpRequest",\n                    Authorization: `Bearer ${jwtToken}`,\n                },\n                withCredentials: true,\n            });\n            // If unable to fetch logged-in user information (login not confirmed), redirect to login screen\n            if (!res) {\n                window.location.href = LOGIN_URL;\n            } else {\n                setAuthUser(res.data)\n                setAuthUserFetching(false);\n            }\n        } catch {\n            window.location.href = LOGIN_URL;\n        }\n    };\n\n    useEffect(() => {\n        (async () => {\n            await getUserInfo();\n        })()\n    }, []);\n\n    // Passing logged-in user information and user info update function as Outlet Context\n    return authUserFetching ? <></> : <Outlet context={{ authUser, getUserInfo }} />;\n};\n\nexport default Auth;\n\n'})})})}),(0,i.jsx)(r.A,{children:(0,i.jsx)(o.A,{value:"typescript",label:"UsageCheck.tsx",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import React, { useEffect, useState } from 'react';\nimport axios, { isAxiosError } from \"axios\";\nimport { useOutletContext } from \"react-router-dom\";\nimport { DateTime } from 'luxon';\nimport styled from \"styled-components\";\nimport { SubmitHandler, useForm, useWatch } from \"react-hook-form\";\n\n// Defining interface for usage counts\ninterface UsageCount {\n    count: number;\n    date: string | undefined;\n    month: string | undefined;\n    timestamp: number | undefined;\n    meteringUnitName: 'user_count' | 'active_user_count'; // Target meter names defined in the pricing plan creation\n}\n\n// Defining form schemas for different search types\ninterface MonthSearchFormSchema {\n    type: 'month';\n    month: string;\n    date: null | undefined;\n    meteringUnitName: null | undefined;\n}\n\ninterface MonthMeteringUnitNameSearchFormSchema {\n    type: 'month';\n    month: string;\n    meteringUnitName: string;\n    date: null | undefined;\n}\n\ninterface DateSearchFormSchema {\n    type: 'date';\n    date: string;\n    month: null | undefined;\n    meteringUnitName: null | undefined;\n}\n\ninterface DateMeteringUnitNameSearchFormSchema {\n    type: 'date';\n    date: string;\n    meteringUnitName: string;\n    month: null | undefined;\n}\n\ntype SearchFormSchema = MonthMeteringUnitNameSearchFormSchema | MonthSearchFormSchema | DateMeteringUnitNameSearchFormSchema | DateSearchFormSchema;\n\n// Dictionary for metering unit names\nconst METERING_UNIT_NAME_DICT_ARRAY = [\n    {\n        key: 'user_count', // Target meter name for user count defined in the pricing plan creation\n        displayName: 'Number of Users', // Display name for user count\n    },\n    {\n        key: 'active_user_count', // Target meter name for active user count defined in the pricing plan creation\n        displayName: 'Number of Active Users', // Display name for active user count\n    },\n]\n\nconst LOGIN_URL = import.meta.env.VITE_LOGIN_URL;\nconst API_ENDPOINT = import.meta.env.VITE_API_URL ?? \"\";\n\nconst UsageCheck: React.FC = () => {\n    const { tenant } = useOutletContext<UserRouterContext & TenantRouterContext>();\n    const [meteringUnitCountList, setMeteringUnitCountList] = useState<Array<UsageCount>>([]);\n    const [targetMonthOrDate, setTargetMonthOrDate] = useState('');\n    const jwtToken = window.localStorage.getItem(\"SaaSusIdToken\");\n    const { register, control, handleSubmit, formState: { isDirty, isValid }, getValues } = useForm<SearchFormSchema>();\n    const searchType = useWatch({ control, name: 'type' });\n\n    /**\n     * Retrieve the metering unit count for the specified date\n     * @param date\n     * @param meteringUnitName\n     */\n    const fetchUsageCountOfSpecifiedDate = async (date: string, meteringUnitName: string) => {\n        try {\n            const res = await axios.get<UsageCount>(`${API_ENDPOINT}/api/tenants/${tenant.id}/metering/${meteringUnitName}/date/${date}/count`, {\n                headers: {\n                    \"X-Requested-With\": \"XMLHttpRequest\",\n                    \"Content-Type\": \"application/json\",\n                    Authorization: `Bearer ${jwtToken}`,\n                },\n            })\n            setMeteringUnitCountList([res.data]);\n        } catch (e) {\n            if (isAxiosError<{type: string, message: string}>(e) && e.response && e.response.data.type === 'token_validation_error_expired') {\n                window.location.href = LOGIN_URL;\n            }\n        }\n    }\n\n    /**\n     * Retrieve all metering unit counts for the specified month\n     * @param month\n     */\n    const fetchAllUsageCountOfSpecifiedMonth = async (month: string) => {\n        try {\n            const res = await axios.get<Array<UsageCount>>(`${API_ENDPOINT}/api/tenants/${tenant.id}/metering/month/${month}/count`, {\n                headers: {\n                    \"X-Requested-With\": \"XMLHttpRequest\",\n                    \"Content-Type\": \"application/json\",\n                    Authorization: `Bearer ${jwtToken}`,\n                },\n            })\n            setMeteringUnitCountList(res.data);\n        } catch (e) {\n            if (isAxiosError<{type: string, message: string}>(e) && e.response && e.response.data.type === 'token_validation_error_expired') {\n                window.location.href = LOGIN_URL;\n            }\n        }\n    }\n\n    /**\n     * Retrieve all metering unit counts for the specified date\n     * @param date\n     */\n    const fetchAllUsageCountOfSpecifiedDate = async (date: string) => {\n        try {\n            const res = await axios.get<Array<UsageCount>>(`${API_ENDPOINT}/api/tenants/${tenant.id}/metering/date/${date}/count`, {\n                headers: {\n                    \"X-Requested-With\": \"XMLHttpRequest\",\n                    \"Content-Type\": \"application/json\",\n                    Authorization: `Bearer ${jwtToken}`,\n                },\n            })\n            setMeteringUnitCountList(res.data);\n        } catch (e) {\n            if (isAxiosError<{type: string, message: string}>(e) && e.response && e.response.data.type === 'token_validation_error_expired') {\n                window.location.href = LOGIN_URL;\n            }\n        }\n    }\n\n    /**\n     * Retrieve the metering unit count for the specified month\n     * @param month\n     * @param meteringUnitName\n     */\n    const fetchUsageCountOfSpecifiedMonth = async (month: string, meteringUnitName: string) => {\n        try {\n            const res = await axios.get<UsageCount>(`${API_ENDPOINT}/api/tenants/${tenant.id}/metering/${meteringUnitName}/month/${month}/count`, {\n                headers: {\n                    \"X-Requested-With\": \"XMLHttpRequest\",\n                    \"Content-Type\": \"application/json\",\n                    Authorization: `Bearer ${jwtToken}`,\n                },\n            })\n            setMeteringUnitCountList([res.data]);\n        } catch (e) {\n            if (isAxiosError<{type: string, message: string}>(e) && e.response && e.response.data.type === 'token_validation_error_expired') {\n                window.location.href = LOGIN_URL;\n            }\n        }\n    }\n\n    useEffect(() => {\n        const month = DateTime.now().toFormat('yyyy-MM');\n        setTargetMonthOrDate(month);\n        fetchAllUsageCountOfSpecifiedMonth(month);\n    }, []);\n\n    const onSearchSubmit: SubmitHandler<SearchFormSchema> = async (data) => {\n        if (data.type === 'month') {\n            if (!data.meteringUnitName) {\n                await fetchAllUsageCountOfSpecifiedMonth(data.month);\n            } else {\n                await fetchUsageCountOfSpecifiedMonth(data.month, data.meteringUnitName);\n            }\n            setTargetMonthOrDate(data.month);\n        } else {\n            if (!data.meteringUnitName) {\n                await fetchAllUsageCountOfSpecifiedDate(data.date);\n            } else {\n                await fetchUsageCountOfSpecifiedDate(data.date, data.meteringUnitName);\n            }\n            setTargetMonthOrDate(data.date);\n        }\n    }\n\n    return (\n        <div>\n            <h2>Usage Check</h2>\n            <form onSubmit={handleSubmit(onSearchSubmit)}>\n                <label>Method of Specifying Search Target</label>\n                <select {...register('type', {required: 'Please select.'})}>\n                    <option></option>\n                    <option value=\"month\">Year-Month</option>\n                    <option value=\"date\">Year-Month-Day</option>\n                </select>\n                {searchType && (\n                    <>\n                        <label>{searchType === 'month' ? 'Target Year-Month' : 'Target Year-Month-Day'}</label>\n                        <input {...register(searchType, { required: 'Required' })} />\n                        <label>Metering Unit Name</label>\n                        <select {...register('meteringUnitName')}>\n                            <option></option>\n                            {METERING_UNIT_NAME_DICT_ARRAY.map(({ key, displayName }) => (\n                                <option key={key} value={key}>{displayName}</option>\n                            ))}\n                        </select>\n                    </>\n                )}\n                <button type=\"submit\" disabled={!isDirty || !isValid}>Search</button>\n            </form>\n\n            <h3>Search Target Date: {targetMonthOrDate}</h3>\n            {METERING_UNIT_NAME_DICT_ARRAY.map(({key, displayName}) => {\n                const formMeteringUnitName = getValues('meteringUnitName')\n                return (!formMeteringUnitName || formMeteringUnitName && formMeteringUnitName === key) && (\n                    <UsageCountWrapper key={key}>\n                        <p>{displayName}\uff1a{meteringUnitCountList.find(({meteringUnitName}) => key === meteringUnitName)?.count ?? 0} cases</p>\n                    </UsageCountWrapper>\n                );\n            })}\n        </div>\n    )\n}\n\n\nconst UsageCountWrapper = styled.div`\n    border-bottom: 1px solid #333;\n`\n\nexport default UsageCheck;\n\n"})})})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("summary",{children:"Laravel Implementation Sample"}),(0,i.jsx)(r.A,{children:(0,i.jsx)(o.A,{value:"php",label:"routes/api.php",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"Route::middleware(\\AntiPatternInc\\Saasus\\Laravel\\Middleware\\Auth::class)->group(function () {\n    Route::get('/userinfo', 'App\\Http\\Controllers\\UserinfoController@index')->name('userinfo.index');\n    \n    Route::get('/tenant/{tenantId}', 'App\\Http\\Controllers\\TenantController@show')->name('tenant.index');\n\n    Route::get('/tenants/{tenantId}/metering/{meteringUnitName}/date/{date}/count', 'App\\Http\\Controllers\\MeteringController@getCountOfSpecifiedDate')->name('metering.get-count-of-specified-date');\n    Route::get('/tenants/{tenantId}/metering/{meteringUnitName}/month/{month}/count', 'App\\Http\\Controllers\\MeteringController@getCountOfSpecifiedMonth')->name('metering.get-count-of-specified-month');\n    Route::get('/tenants/{tenantId}/metering/date/{date}/count', 'App\\Http\\Controllers\\MeteringController@getAllMeteringCountOfSpecifiedDate')->name('metering.get-all-unit-count-of-specified-date');\n    Route::get('/tenants/{tenantId}/metering/month/{month}/count', 'App\\Http\\Controllers\\MeteringController@getAllMeteringCountOfSpecifiedMonth')->name('metering.get-all-unit-count-of-specified-month');  \n}\n"})})})}),(0,i.jsx)(r.A,{children:(0,i.jsx)(o.A,{value:"php",label:"MeteringController.php",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\MeteringUnitMonthCount;\n\nclass MeteringController extends Controller\n{\n    /**\n     * Retrieve the unit count for the specified date\n     *\n     * @see https://docs.saasus.io/reference/getmeteringunitdatecountbytenantidandunitnameanddate\n     *\n     * @param string $tenantId\n     * @param string $meteringUnitName\n     * @param string $date\n     * @return array\n     */\n    public function getCountOfSpecifiedDate(string $tenantId, string $meteringUnitName, string $date)\n    {\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $unitCount = $pricingApi->getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(\n            $tenantId,\n            $meteringUnitName,\n            $date\n        );\n\n        return [\n            'count' => $unitCount->getCount(),\n            'date' => $unitCount->getDate(),\n            'meteringUnitName' => $unitCount->getMeteringUnitName(),\n        ];\n    }\n\n    /**\n     * Retrieve the unit count for the specified month\n     *\n     * @see https://docs.saasus.io/reference/getmeteringunitmonthcountbytenantidandunitnameandmonth\n     *\n     * @param string $tenantId\n     * @param string $meteringUnitName\n     * @param string $month\n     * @return array\n     */\n    public function getCountOfSpecifiedMonth(string $tenantId, string $meteringUnitName, string $month)\n    {\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $unitCount = $pricingApi->getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(\n            $tenantId, $meteringUnitName, $month\n        );\n\n        return [\n            'count' => $unitCount->getCount(),\n            'month' => $unitCount->getMonth(),\n            'meteringUnitName' => $unitCount->getMeteringUnitName(),\n        ];\n    }\n\n    /**\n     * Retrieve all unit counts for the specified date\n     *\n     * @param string $tenantId\n     * @param string $date\n     * @return \\AntiPatternInc\\Saasus\\Sdk\\Pricing\\Model\\MeteringUnitDateCount[]\n     */\n    public function getAllMeteringCountOfSpecifiedDate(string $tenantId, string $date)\n    {\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $allMeteringCount = $pricingApi->getMeteringUnitDateCountsByTenantIdAndDate(\n            $tenantId, $date\n        );\n\n        return array_map(function ($unitCount) {\n            return [\n                'count' => $unitCount->getCount(),\n                'date' => $unitCount->getDate(),\n                'meteringUnitName' => $unitCount->getMeteringUnitName(),\n            ];\n        }, $allMeteringCount->getCounts());\n    }\n\n    /**\n     * Retrieve all unit counts for the specified month\n     *\n     * @param string $tenantId\n     * @param string $month\n     * @return MeteringUnitMonthCount[]\n     */\n    public function getAllMeteringCountOfSpecifiedMonth(string $tenantId, string $month)\n    {\n        $client = new \\AntiPatternInc\\Saasus\\Api\\Client();\n        $pricingApi = $client->getPricingClient();\n        $allMeteringCount = $pricingApi->getMeteringUnitMonthCountsByTenantIdAndMonth(\n            $tenantId, $month\n        );\n\n        return array_map(function ($unitCount) {\n            return [\n                'count' => $unitCount->getCount(),\n                'month' => $unitCount->getMonth(),\n                'meteringUnitName' => $unitCount->getMeteringUnitName(),\n            ];\n        }, $allMeteringCount->getCounts());\n    }\n}\n"})})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(96540),a=t(34164),r=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:a}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=c??h;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var C=t(74848);function U(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==i&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function b(e){const n=h(e);return(0,C.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,C.jsx)(U,{...e,...n}),(0,C.jsx)(A,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,C.jsx)(b,{...e,children:d(e.children)},String(n))}},27785:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-03-5f62134394eab11e58bcb987a05f91ce.png"},77814:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-04-c6394c965aa5a75594797e98e4733c32.png"},31615:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-05-cbc881907fc165b07ff8e853f198403f.png"},46340:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-06-ed17e0e5d1d13de81462827622cb9fe7.png"},9581:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-07-8e6400118bf6674399e80f5881a92ba6.png"},17965:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-08-2f769734d924e11269db5ac87c10e5da.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);