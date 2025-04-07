"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[92],{36887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var r=a(74848),n=a(28453),s=a(11470),i=a(19365);const u={title:"Assigning Users to Tenants and Setting Roles",slug:"add-tenant-user",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 22:00:34 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:59:04 GMT+0000 (Coordinated Universal Time)"},l=void 0,o={id:"usecase/about-saas-user-accounts/add-tenant-user",title:"Assigning Users to Tenants and Setting Roles",description:"After a tenant has been created, you can then associate the self-signed up user with the tenant.",source:"@site/versioned_docs/version-1.11/usecase/about-saas-user-accounts/add-tenant-user.mdx",sourceDirName:"usecase/about-saas-user-accounts",slug:"/usecase/about-saas-user-accounts/add-tenant-user",permalink:"/docs/usecase/about-saas-user-accounts/add-tenant-user",draft:!1,unlisted:!1,tags:[],version:"1.11",frontMatter:{title:"Assigning Users to Tenants and Setting Roles",slug:"add-tenant-user",excerpt:"",hidden:!1,createdAt:"Wed Nov 01 2023 22:00:34 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 21 2023 22:59:04 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"Creating a Tenant",permalink:"/docs/usecase/about-saas-user-accounts/create-tenant"},next:{title:"Authentication Methods",permalink:"/docs/usecase/authentication-methods"}},c={},d=[];function b(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"After a tenant has been created, you can then associate the self-signed up user with the tenant."}),"\n",(0,r.jsx)(t.p,{children:"Please append the following to the tenant creation source code:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"php",label:"PHP",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"    // Retrieve user attribute information\n    $userAttributesResponse = $authClient->getUserAttributes();\n    $userAttributes = $userAttributesResponse->getUserAttributes();\n    foreach ($userAttributes as $attribute) {\n        $attributeName = $attribute->getAttributeName();\n        $attributeType = $attribute->getAttributeType();\n\n        // Replace if a number type is defined in the user attribute information\n        if (isset($userAttributeValues[$attributeName]) && $attributeType === 'number') {\n            $userAttributeValues[$attributeName] = (int) $userAttributeValues[$attributeName];\n        }\n    }\n\n    // Create parameters for tenant user registration\n    $createTenantUserParam = new CreateTenantUserParam();\n    $createTenantUserParam\n        ->setEmail($email)\n        ->setAttributes($userAttributeValues);\n\n    // Add a SaaS user to the tenant users\n    $tenantUser = $authClient->createTenantUser($tenantId, $createTenantUserParam);\n"})})}),(0,r.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"    // Retrieve user attribute information\n    const userAttributesObj = (await client.userAttributeApi.getUserAttributes()).data\n    const userAttributes = userAttributesObj.user_attributes\n    let userAttributeValuesCopy = userAttributeValues || {}\n\n    // Replace if a number type is defined in the user attribute information\n    userAttributes.forEach((attribute) => {\n      const attributeName = attribute.attribute_name\n      const attributeType = attribute.attribute_type\n\n      if (userAttributeValuesCopy[attributeName] && attributeType === 'number') {\n        userAttributeValuesCopy[attributeName] = parseInt(userAttributeValuesCopy[attributeName], 10);\n      }\n    });\n\n    // Create parameters for tenant user registration\n    const createTenantUserParam: CreateTenantUserParam = {\n      email: userInfo.email,\n      attributes: userAttributeValuesCopy\n    }\n\n    // Add a SaaS user to the tenant users\n    const tenantUser = (await client.tenantUserApi.createTenantUser(tenantId, createTenantUserParam)).data\n"})})}),(0,r.jsx)(i.A,{value:"go",label:"Go",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'    // Retrieve user attribute information\n    userAttributesResp, err := authClient.GetUserAttributesWithResponse(context.Background())\n    if err != nil {\n        c.Logger().Errorf("Failed to retrieve user attributes: %v", err)\n        return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Failed to retrieve user attributes"})\n    }\n\n    userAttributes := userAttributesResp.JSON200\n    if userAttributeValues == nil {\n        userAttributeValues = make(map[string]interface{})\n    }\n\n    // Replace if a number type is defined in the user attribute information\n    if userAttributes != nil {\n        for _, attribute := range userAttributes.UserAttributes {\n            attributeName := attribute.AttributeName\n            attributeType := attribute.AttributeType\n            if value, ok := userAttributeValues[attributeName]; ok && attributeType == "number" {\n                userAttributeValues[attributeName], err = strconv.Atoi(value.(string))\n                if err != nil {\n                    c.Logger().Errorf("Invalid user attribute value: %v", err)\n                    return c.JSON(http.StatusBadRequest, echo.Map{"error": "Invalid user attribute value"})\n                }\n            }\n        }\n    }\n\n    // Create parameters for tenant user registration\n    createTenantUserParam := authapi.CreateTenantUserParam{\n        Email:      userInfo.Email,\n        Attributes: userAttributeValues,\n    }\n\n    // Add a SaaS user to the tenant users\n    tenantUserResp, err := authClient.CreateTenantUserWithResponse(context.Background(), tenantID, createTenantUserParam)\n'})})}),(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'        # Retrieve user attribute information\n        user_attributes_obj = UserAttributeApi(api_client=api_client).get_user_attributes()\n\n        # Replace if a number type is defined in the user attribute information\n        if user_attribute_values is None:\n            user_attribute_values = {}\n        else:\n            user_attributes = user_attributes_obj.user_attributes\n            for attribute in user_attributes:\n                attribute_name = attribute.attribute_name\n                attribute_type = attribute.attribute_type.value\n\n                if attribute_name in user_attribute_values:\n                    if attribute_type == "number":\n                        user_attribute_values[attribute_name] = int(user_attribute_values[attribute_name])\n\n        # Create parameters for tenant user registration\n        create_tenant_user_param = CreateTenantUserParam(\n            email=auth_user.email,  # \u767b\u9332\u8005\u81ea\u8eab\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\n            attributes=user_attribute_values\n        )\n\n        # Add a SaaS user to the tenant users\n        tenant_user = TenantUserApi(api_client=api_client).create_tenant_user(\n            tenant_id=tenant_id,\n            create_tenant_user_param=create_tenant_user_param\n        )\n'})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'        // Retrieve user attribute information\n        UserAttributeApi userAttributeApi = new UserAttributeApi(apiClient);\n        UserAttributes userAttributes = userAttributeApi.getUserAttributes();\n\n        // Replace if a number type is defined in the user attribute information\n        for (Attribute attribute : userAttributes.getUserAttributes()) {\n            String attributeName = attribute.getAttributeName();\n            String attributeType = attribute.getAttributeType().getValue();\n\n            if (userAttributeValues.containsKey(attributeName)) {\n                Object attributeValue = userAttributeValues.get(attributeName);\n\n                if ("number".equalsIgnoreCase(attributeType)) {\n                    try {\n                        int numericValue = Integer.parseInt(attributeValue.toString());\n                        userAttributeValues.put(attributeName, numericValue);\n                    } catch (NumberFormatException e) {\n                        System.err.println("Invalid value for user attribute: " + attributeName);\n                        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,\n                                "Invalid value for user attribute: " + attributeName);\n                    }\n                }\n            }\n        }\n\n        // Create parameters for tenant user registration\n        CreateTenantUserParam createTenantUserParam = new CreateTenantUserParam()\n                .email(userInfo.getEmail())\n                .attributes(userAttributeValues);\n\n        // Add a SaaS user to the tenant users\n        TenantUserApi tenantUserApi = new TenantUserApi(apiClient);\n        User tenantUser = tenantUserApi.createTenantUser(tenantId, createTenantUserParam);\n'})})}),(0,r.jsx)(i.A,{value:"csharp",label:"C#(.Net8)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"        // Retrieve user attribute information\n        var userAttributeApi = new UserAttributeApi(authApiClientConfig);\n        var userAttributes = await userAttributeApi.GetUserAttributesAsync();\n\n        // Replace if a number type is defined in the user attribute information\n        foreach (var attribute in userAttributes.VarUserAttributes)\n        {\n            var attributeName = attribute.AttributeName;\n            var attributeType = attribute.AttributeType.ToString();\n\n            if (userAttributeValues.ContainsKey(attributeName))\n            {\n                userAttributeValues[attributeName] = ConvertToExpectedType(userAttributeValues[attributeName], attributeType);\n            }\n        }\n\n        // Create parameters for tenant user registration\n        var createTenantUserParam = new CreateTenantUserParam(userInfo.Email, userAttributeValues);\n\n        // Add a SaaS user to the tenant users\n        var tenantUserApi = new TenantUserApi(authApiClientConfig);\n        var tenantUser = await tenantUserApi.CreateTenantUserAsync(tenantId, createTenantUserParam);\n"})})}),(0,r.jsx)(i.A,{value:"csharp(.Netfw4.8)",label:"C#(.Netfw4.8)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'        // Retrieve user attribute information\n        var userAttributeApi = new UserAttributeApi(authApiClientConfig);\n        var userAttributes = await userAttributeApi.GetUserAttributesAsync();\n\n        // Replace if a number type is defined in the user attribute information\n        foreach (var attribute in userAttributes.VarUserAttributes)\n        {\n            var attributeName = attribute.AttributeName;\n            var attributeType = attribute.AttributeType.ToString();\n\n            if (userAttributeValues.ContainsKey(attributeName) && attributeType.ToLower() == "number")\n            {\n                if (int.TryParse(userAttributeValues[attributeName]?.ToString(), out int numericValue))\n                {\n                    userAttributeValues[attributeName] = numericValue;\n                }\n                else\n                {\n                    return BadRequest("Invalid attribute value");\n                }\n            }\n        }\n\n        // Create parameters for tenant user registration\n        var createTenantUserParam = new CreateTenantUserParam(userInfo.Email, userAttributeValues);\n\n        // Add a SaaS user to the tenant users\n        var tenantUserApi = new TenantUserApi(authApiClientConfig);\n        var tenantUser = await tenantUserApi.CreateTenantUserAsync(tenantId, createTenantUserParam);\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"Please use the CreateTenantUserParam object."}),"\n",(0,r.jsxs)(t.p,{children:["setAttributes sets the attribute information of the tenant defined in ",(0,r.jsx)("a",{href:"/docs/tutorial/prepare-saas-platform#defining-additional-attributes-for-a-tenant",target:"_blank",children:"Defining Additional Attributes for a Tenant"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Next, set the role."}),"\n",(0,r.jsx)(t.p,{children:"Please append the following code:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"php",label:"PHP",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"    // Create parameters for role configuration\n    $create_tenant_user_roles_param = new CreateTenantUserRolesParam();\n    $create_tenant_user_roles_param->setRoleNames(['admin']);\n\n    // Assign a role to the created tenant user\n    $auth_api_client->createTenantUserRoles($tenant->getId(), $request['userinfo']['id'], getenv('DEFAULT_SAASUSER_ENV'), $create_tenant_user_roles_param);\n"})})}),(0,r.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"    // Create parameters for role configuration\n    const createTenantUserRolesParam: CreateTenantUserRolesParam = {\n      role_names: ['admin']\n    }\n\n    // Assign a role to the created tenant user\n    await client.tenantUserApi.createTenantUserRoles(tenantId, tenantUser.id, 3, createTenantUserRolesParam)\n"})})}),(0,r.jsx)(i.A,{value:"go",label:"Go",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'    // Create parameters for role configuration\n    createTenantUserRolesParam := authapi.CreateTenantUserRolesParam{\n        RoleNames: []string{"admin"},\n    }\n\n    // Assign a role to the created tenant user\n    _, err = authClient.CreateTenantUserRolesWithResponse(context.Background(), tenantID, tenantUserResp.JSON201.Id, 3, createTenantUserRolesParam)\n'})})}),(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'        # Create parameters for role configuration\n        create_tenant_user_roles_param = CreateTenantUserRolesParam(role_names=["admin"])\n\n        # Assign a role to the created tenant user\n        TenantUserApi(api_client=api_client).create_tenant_user_roles(tenant_id=tenant_id, user_id=tenant_user.id, env_id=3, create_tenant_user_roles_param=create_tenant_user_roles_param)\n'})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'        // Create parameters for role configuration\n        CreateTenantUserRolesParam createTenantUserRolesParam = new CreateTenantUserRolesParam();\n        createTenantUserRolesParam.setRoleNames(Arrays.asList("admin"));\n\n        // Assign a role to the created tenant user\n        tenantUserApi.createTenantUserRoles(tenantId, tenantUser.getId(), 3, createTenantUserRolesParam);\n'})})}),(0,r.jsx)(i.A,{value:"csharp",label:"C#(.Net8)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'        // Create parameters for role configuration\n        var createTenantUserRolesParam = new CreateTenantUserRolesParam(new List<string> { "admin" });\n\n        // Assign a role to the created tenant user\n        await tenantUserApi.CreateTenantUserRolesAsync(tenantId, tenantUser.Id, 3, createTenantUserRolesParam);\n'})})}),(0,r.jsx)(i.A,{value:"csharp(.Netfw4.8)",label:"C#(.Netfw4.8)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'        // Create parameters for role configuration\n        var createTenantUserRolesParam = new CreateTenantUserRolesParam(new List<string> { "admin" });\n\n        // Assign a role to the created tenant user\n        await tenantUserApi.CreateTenantUserRolesAsync(tenantId, tenantUser.Id, 3, createTenantUserRolesParam);\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"Please use the CreateTenantUserRolesParam object."}),"\n",(0,r.jsx)(t.p,{children:"setRoleNames allows you to specify multiple roles."}),"\n",(0,r.jsxs)(t.p,{children:['The values that can be specified are the "Role Name" that you created in ',(0,r.jsx)("a",{href:"/docs/tutorial/prepare-saas-platform#role-definition",target:"_blank",children:"Role Definition"}),"."]}),"\n",(0,r.jsx)(t.p,{children:'You can check whether the tenant user was registered via API in "SaaS Operation Console > User Management".'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"user",src:a(33001).A+"",width:"2868",height:"1324"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(96540),n=a(34164),s=a(23104),i=a(56347),u=a(205),l=a(57485),o=a(31682),c=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=b(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,d]=m({queryString:a,groupId:n}),[h,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),A=(()=>{const e=o??h;return p({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{A&&l(A)}),[A]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(92303);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=u[a].value;n!==r&&(o(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function T(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function U(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",A.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(T,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,g.jsx)(U,{...e,children:d(e.children)},String(t))}},33001:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/user-10cb88e602699ccf0af90fd58b57f536.png"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>u});var r=a(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);