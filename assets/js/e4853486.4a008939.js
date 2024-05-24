"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5826],{99868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(74848),l=n(28453);const i={title:"Single Tenant Management",slug:"single-tenant-management",excerpt:"",hidden:!1,createdAt:"Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"},a=void 0,r={id:"saas-development-console/single-tenant-management",title:"Single Tenant Management",description:"Overview",source:"@site/versioned_docs/version-1.10/saas-development-console/single-tenant-management.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/single-tenant-management",permalink:"/docs/saas-development-console/single-tenant-management",draft:!1,unlisted:!1,tags:[],version:"1.10",frontMatter:{title:"Single Tenant Management",slug:"single-tenant-management",excerpt:"",hidden:!1,createdAt:"Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"},sidebar:"guideSidebar",previous:{title:"Using User Environment Definitions",permalink:"/docs/saas-development-console/user-env-definition"},next:{title:"Pricing Plan Setting",permalink:"/docs/saas-operation-console/price-plan"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Setup Method",id:"setup-method",level:2},{value:"Permission from SaaSus Platform",id:"permission-from-saasus-platform",level:3},{value:"Cloud Formation Template",id:"cloud-formation-template",level:3},{value:"SQL File",id:"sql-file",level:3},{value:"How to check the progress",id:"how-to-check-the-progress",level:3},{value:"Note",id:"note",level:3}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:'In SaaS architecture, there are "single-tenant" and "multi-tenant" models.'}),"\n",(0,s.jsx)(t.p,{children:"A single-tenant architecture means that each customer (tenant) using the SaaS has a separate server and database. Each tenant maintains a completely isolated environment."}),"\n",(0,s.jsx)(t.p,{children:"A multi-tenant architecture involves multiple tenants sharing common servers and databases. Data is partitioned by tenant, but physical resources are shared."}),"\n",(0,s.jsx)(t.p,{children:"The single-tenant management feature is a functionality on the SaaSus Platform that supports the construction of SaaS with a single-tenant architecture."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The single-tenant management feature is only available to customers on the Advanced plan or higher."})}),"\n",(0,s.jsx)(t.p,{children:"In a single-tenant architecture, each tenant's data is physically isolated, reducing the risk of data leakage among other benefits. However, there is a disadvantage of increased management cost as servers and databases need to be prepared for each tenant."}),"\n",(0,s.jsx)(t.p,{children:"The single-tenant management feature automatically prepares servers and databases in your AWS environment when you create a tenant on SaaSus. This can reduce the costs of management and operations."}),"\n",(0,s.jsx)(t.h2,{id:"setup-method",children:"Setup Method"}),"\n",(0,s.jsx)(t.h3,{id:"permission-from-saasus-platform",children:"Permission from SaaSus Platform"}),"\n",(0,s.jsx)(t.p,{children:"When onboarding a tenant, since SaaSus needs to access your AWS environment, you must grant these permissions to SaaSus."}),"\n",(0,s.jsx)(t.p,{children:"Follow the instructions on the screen to create an IAM Role and register the details of the created role."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"settings-role",src:n(42448).A+"",width:"2374",height:"1258"})}),"\n",(0,s.jsx)(t.h3,{id:"cloud-formation-template",children:"Cloud Formation Template"}),"\n",(0,s.jsx)("a",{download:"singletenant-cf-sample.yml",href:"/file/singletenant-cf-sample.yml",children:" Cloud Formation Template Sample "}),"\n",(0,s.jsx)(t.p,{children:"When you create a tenant on SaaSus, a Cloud Formation is executed in your AWS environment to create an environment for each tenant. You need to register the Cloud Formation template that will be used at this time."}),"\n",(0,s.jsx)(t.p,{children:"The Cloud Formation's Outputs should specify the following items:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Logical ID"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AccountId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AWS account where Cloud Formation is executed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SubnetIds"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"IDs of the subnets set for the DB instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SecurityGroupIds"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"IDs of the security groups set for the DB instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DbUser"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"User for connecting to the DB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DbPass"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Password for connecting to the DB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DbHost"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Host (IP address) for connecting to the DB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DbPort"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Port number for connecting to the DB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DbName"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the DB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DbType"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Type of the DB (",(0,s.jsx)(t.code,{children:"mysql"})," or ",(0,s.jsx)(t.code,{children:"postgres"}),")"]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"sql-file",children:"SQL File"}),"\n",(0,s.jsx)("a",{download:"singletenant-sample.sql",href:"/file/singletenant-sample.sql",children:" SQL File Sample "}),"\n",(0,s.jsx)(t.p,{children:"You will need to register SQL file that will be executed against the DB created by the Cloud Formation. Register the SQL for the table definitions and initial data of the DB."}),"\n",(0,s.jsx)(t.h3,{id:"how-to-check-the-progress",children:"How to check the progress"}),"\n",(0,s.jsx)(t.p,{children:"In the SaaS operations console - Tenant Management screen, display the target tenant, and you can check the progress information by the value of TenantOnboardingStatus."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"TenantOnboardingStatus"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Situation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"setup_cfn_in_progress"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Preparing to run Cloud Formation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"setup_cfn_db_ready"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DB instance created by Cloud Formation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"setup_cfn_completed"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cloud Formation completed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"setup_db_in_progress"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Executing SQL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"all_completed"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"All processes completed normally"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"error"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Abnormal termination (please contact support)"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,s.jsx)(t.p,{children:"Tenant offboarding process is not supported."})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},42448:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings-role-9bf13806ab66dab9ce5b509e8761e778.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const l={},i=s.createContext(l);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);