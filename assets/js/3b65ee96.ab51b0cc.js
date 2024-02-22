"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[5716],{9922:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=i(74848),o=i(28453);const a={title:"Google Linkage",slug:"google-linkage",excerpt:"",hidden:!1,createdAt:"Sun May 21 2023 05:12:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},l=void 0,s={id:"saas-development-console/google-linkage",title:"Google Linkage",description:"Summary Explanation",source:"@site/docs/saas-development-console/google-linkage.md",sourceDirName:"saas-development-console",slug:"/saas-development-console/google-linkage",permalink:"/saasus-platform-document/docs/next/saas-development-console/google-linkage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Google Linkage",slug:"google-linkage",excerpt:"",hidden:!1,createdAt:"Sun May 21 2023 05:12:10 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Event Samples",permalink:"/saasus-platform-document/docs/next/saas-development-console/integrate-with-amazon-eventbridge/event-sample"},next:{title:"The difference in rate calculation between Tiered units and Tiered usage units",permalink:"/saasus-platform-document/docs/next/saas-development-console/tiered_unit"}},r={},c=[{value:"Summary Explanation",id:"summary-explanation",level:2},{value:"Creating an OAuth Client in Google Cloud Platform",id:"creating-an-oauth-client-in-google-cloud-platform",level:2},{value:"Confirming the Information for Google Linkage",id:"confirming-the-information-for-google-linkage",level:3},{value:"Agreeing to the Use of OAuth",id:"agreeing-to-the-use-of-oauth",level:3},{value:"Creating OAuth Client",id:"creating-oauth-client",level:3},{value:"Linking Google Cloud Platform and SaaSus Account",id:"linking-google-cloud-platform-and-saasus-account",level:2},{value:"Confirming Google Authentication Operation",id:"confirming-google-authentication-operation",level:2},{value:"Application for Use",id:"application-for-use",level:2}];function g(e){const n={br:"br",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"summary-explanation",children:"Summary Explanation"}),"\n",(0,t.jsx)(n.p,{children:"To incorporate Google linkage, it is necessary to create an OAuth client in your Google Cloud Platform account and set up the linkage with SaaSus. By setting up the linkage with SaaSus, the button 'Sign in with Google' will appear on the sign-in page of SaaSus, and Google linkage can be enabled. It should be noted that to make the app publicly available, it is necessary to apply to Google. It takes about one week to review the application after submission. (If there are any mistakes, guidance will be sent by email, so please take corrective action)"}),"\n",(0,t.jsx)(n.p,{children:"Google linkage procedure consists of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating OAuth Client in Google Cloud Platform"}),"\n",(0,t.jsx)(n.li,{children:"Linking Google Cloud Platform and SaaSus account"}),"\n",(0,t.jsx)(n.li,{children:"Confirmation on Google Authentication Performance"}),"\n",(0,t.jsx)(n.li,{children:"Application for Usage"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-oauth-client-in-google-cloud-platform",children:"Creating an OAuth Client in Google Cloud Platform"}),"\n",(0,t.jsx)(n.h3,{id:"confirming-the-information-for-google-linkage",children:"Confirming the Information for Google Linkage"}),"\n",(0,t.jsx)(n.p,{children:'Sign in to SaaSus management console. Open "Authentication Authorization" > "Advanced Settings". Check the Google linkage in Authentication tab.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-1",src:i(25740).A+"",width:"2878",height:"1472"})}),"\n",(0,t.jsx)(n.p,{children:"Make a note of the following items as they are required when creating an OAuth client in Google:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Approved JavaScript Origin"}),"\n",(0,t.jsx)(n.li,{children:"Authorized Redirect URI"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-2",src:i(76423).A+"",width:"2376",height:"1378"})}),"\n",(0,t.jsx)(n.h3,{id:"agreeing-to-the-use-of-oauth",children:"Agreeing to the Use of OAuth"}),"\n",(0,t.jsx)(n.p,{children:"Sign in to Google Cloud Platform account (create a Google Cloud Platform account if you don\u2019t have one) for managing Google linkage."}),"\n",(0,t.jsx)(n.p,{children:"Create a new project for Google linkage."}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)("a",{href:"https://console.cloud.google.com/projectcreate?previousPage=%2Fprojectselector2%2Fhome%2Fdashboard%3Fhl%3Dja%26organizationId%3D0%26supportedpurview%3Dproject&organizationId=0&hl=ja&supportedpurview=project",target:"_blank",children:"New Project"}),", and create a new project."]}),"\n",(0,t.jsx)(n.p,{children:"Project Name: GoogleOAuth (or any other easy-to-understand name)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-3",src:i(638).A+"",width:"1196",height:"1018"})}),"\n",(0,t.jsx)(n.p,{children:"Open 'APIs & Services' - 'OAuth Consent Screen'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-4",src:i(45201).A+"",width:"2874",height:"1082"})}),"\n",(0,t.jsx)(n.p,{children:"Select 'External' as User Type and press 'Create' button"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-5",src:i(96808).A+"",width:"1756",height:"1120"})}),"\n",(0,t.jsx)(n.p,{children:"Input following information and select 'Save and Continue' button"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"App Name: GoogleOAuth"}),"\n",(0,t.jsx)(n.li,{children:"User Support Email: any email address"}),"\n",(0,t.jsx)(n.li,{children:"Developer Contact Information: any email address"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-6",src:i(58787).A+"",width:"1926",height:"1070"})}),"\n",(0,t.jsx)(n.p,{children:"Select 'Save and Continue'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-7",src:i(68954).A+"",width:"1930",height:"1232"})}),"\n",(0,t.jsx)(n.p,{children:"Add test users and select 'Save and Continue'\nOnly the users set here can login when the public status is 'Testing'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-8",src:i(38189).A+"",width:"1940",height:"1178"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-oauth-client",children:"Creating OAuth Client"}),"\n",(0,t.jsx)(n.p,{children:"Open 'APIs & Services' - 'Credentials'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-9",src:i(74948).A+"",width:"2868",height:"1140"})}),"\n",(0,t.jsx)(n.p,{children:"Select 'Create Credentials' - 'OAuth client ID'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-10",src:i(96342).A+"",width:"2004",height:"614"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the following information and select 'Create' button:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Application type: Web Application"}),"\n",(0,t.jsx)(n.li,{children:"Name: GoogleOAuth (any easy-to-understand name is fine)"}),"\n",(0,t.jsx)(n.li,{children:"Authorized JavaScript origins: \uff1cthe value confirmed on SaaSus management console\uff1e"}),"\n",(0,t.jsx)(n.li,{children:"Authorized redirect URIs: \uff1cthe value confirmed on SaaSus management console\uff1e"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-11",src:i(74431).A+"",width:"1886",height:"1998"})}),"\n",(0,t.jsxs)(n.p,{children:["The OAuth client has been created.\nMake a note of the following items for setting up SaaSus management console.",(0,t.jsx)(n.br,{}),"\n","\u203b It is recommended to select 'Download JSON' and save the downloaded file."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Client ID"}),"\n",(0,t.jsx)(n.li,{children:"Client Secret"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-12",src:i(60868).A+"",width:"1162",height:"1240"})}),"\n",(0,t.jsx)(n.h2,{id:"linking-google-cloud-platform-and-saasus-account",children:"Linking Google Cloud Platform and SaaSus Account"}),"\n",(0,t.jsx)(n.p,{children:"Enter the following and select 'Save' button:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Client ID: \uff1cThe value confirmed on the screen after creating the OAuth client\uff1e"}),"\n",(0,t.jsx)(n.li,{children:"Client Secret: \uff1cThe value confirmed on the screen after creating the OAuth client\uff1e"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-13",src:i(87021).A+"",width:"2870",height:"1470"})}),"\n",(0,t.jsx)(n.p,{children:"If 'Linked' is displayed, then the operation is completed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-14",src:i(5458).A+"",width:"2868",height:"1480"})}),"\n",(0,t.jsx)(n.h2,{id:"confirming-google-authentication-operation",children:"Confirming Google Authentication Operation"}),"\n",(0,t.jsx)(n.p,{children:"We will confirm the operation of the 'Sign with Google' button displayed on the sign in screen."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"google-linkage-15",src:i(70811).A+"",width:"1300",height:"1118"})}),"\n",(0,t.jsx)(n.p,{children:"About 'Sign in with Google' operation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Screen Displayed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sign in screen"}),"\n",(0,t.jsx)(n.li,{children:"New registration screen (when self-sign-up is enabled)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Actions when Sign in with Google","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If self-sign-up is enabled",(0,t.jsx)(n.br,{}),"\n","If the account does not exist, an account will be created automatically and signed in."]}),"\n",(0,t.jsxs)(n.li,{children:["If self-sign-up is not enabled",(0,t.jsx)(n.br,{}),"\n","If the account does not exist, it will not sign in."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"application-for-use",children:"Application for Use"}),"\n",(0,t.jsx)(n.p,{children:"Coming soon."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},25740:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-1-9e369e225e320553637fd5aba7b2aea0.png"},96342:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-10-2150a1046a44963d7f3b6bc27d384698.png"},74431:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-11-4a965008d873a2b33e737922f0d7a4c8.png"},60868:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-12-60c0d863ef963e5dc230adf98dc4bb31.png"},87021:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-13-df0cb9a1353570f9f6ded369b19c9a89.png"},5458:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-14-4c25a8469619f624ce607f2754c3cacb.png"},70811:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-15-46d9d36c8931adcf2d7582acaf02a01b.png"},76423:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-2-ade7a997bf8dfc49435f28101bf575a4.png"},638:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-3-327061167796af087efb87d8034cb335.png"},45201:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-4-06ee37a976ac149a0e4b111d44dd9594.png"},96808:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-5-bd5e3870937acfed73601daf9f9e965c.png"},58787:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-6-10b4d168687910d0a53392060e9674af.png"},68954:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-7-a9901cfef22c3632a1a66178664b3538.png"},38189:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-8-dbca29ea04be60571768859d2b31526b.png"},74948:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/google-linkage-9-e6958cfba1651e80d8ddabf0b38f6db6.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var t=i(96540);const o={},a=t.createContext(o);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);