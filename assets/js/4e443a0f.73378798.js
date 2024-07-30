"use strict";(self.webpackChunksaasus_platform_document=self.webpackChunksaasus_platform_document||[]).push([[7940],{45469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453);const r={sidebar_position:1,title:"Prepare a Sample Application(EC2)",slug:"prepare-the-sample-application-ec2",excerpt:"Let's turn a simple web chat application into SaaS",hidden:!1,createdAt:"Fri Jul 19 2024 06:12:42 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Jul 19 2024 06:12:42 GMT+0000 (Coordinated Universal Time)"},a=void 0,o={id:"tutorial/prepare-the-sample-application-ec2",title:"Prepare a Sample Application(EC2)",description:"Please follow these steps to create a Blade version operating environment using EC2 or Cloud9.",source:"@site/versioned_docs/version-1.10/tutorial/prepare-the-sample-application-ec2.md",sourceDirName:"tutorial",slug:"/tutorial/prepare-the-sample-application-ec2",permalink:"/docs/tutorial/prepare-the-sample-application-ec2",draft:!1,unlisted:!1,tags:[],version:"1.10",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Prepare a Sample Application(EC2)",slug:"prepare-the-sample-application-ec2",excerpt:"Let's turn a simple web chat application into SaaS",hidden:!1,createdAt:"Fri Jul 19 2024 06:12:42 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Jul 19 2024 06:12:42 GMT+0000 (Coordinated Universal Time)"}},l={},c=[{value:"Preparing the Sample Application",id:"preparing-the-sample-application",level:2}];function d(e){const t={admonition:"admonition",br:"br",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Please follow these steps to create a Blade version operating environment using EC2 or Cloud9."}),"\n",(0,i.jsx)(t.h2,{id:"preparing-the-sample-application",children:"Preparing the Sample Application"}),"\n",(0,i.jsx)(t.p,{children:"EC2 creation parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Item"}),(0,i.jsx)(t.th,{children:"Setting"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AMI"}),(0,i.jsx)(t.td,{children:"Amazon Linux 2023 AMI"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Key pair"}),(0,i.jsx)(t.td,{children:"Create a new key pair for each terminal so that keys can be distributed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Subnet"}),(0,i.jsx)(t.td,{children:"Place in a public subnet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Auto-assign public IP"}),(0,i.jsx)(t.td,{children:"Enable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Allow HTTP traffic from the internet"}),(0,i.jsx)(t.td,{children:"Check this option"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Storage configuration"}),(0,i.jsx)(t.td,{children:"20GB"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"To access EC2 via SSH, inbound SSH (22) must be allowed.\nFor Cloud9, the initial disk capacity will not be sufficient, so additional disk capacity is needed to reach 20G."})}),"\n",(0,i.jsx)(t.p,{children:"Connect to EC2 using Session Manager or SSH\nFor SSH:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"chmod 600 xxx.pem\nssh -i xxx.pem ec2-user@[EC2's global IP]\n"})}),"\n",(0,i.jsx)(t.p,{children:"Commands to execute on EC2:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo su -\n\n# Install docker\ndnf update\ndnf install -y docker\nsystemctl start docker\nsystemctl enable docker\n\n# Install docker compose\nmkdir -p /usr/local/lib/docker/cli-plugins\ncurl -SL https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose\nchmod +x /usr/local/lib/docker/cli-plugins/docker-compose\n\n# Install git\ndnf install -y git\n\n# Get tutorial materials\ngit clone https://github.com/saasus-platform/sampleapp-basic-chat\n\n# Build tutorial materials\ncd sampleapp-basic-chat/php/laravel\n./init.sh\n\n# Address insufficient permissions for storage directory\nchmod -R 777 api/storage/\n"})}),"\n",(0,i.jsx)(t.p,{children:"After executing the above commands, try accessing the following URL"}),"\n",(0,i.jsxs)(t.p,{children:["URL: http",(0,i.jsx)("dummy",{children:"://"}),"[EC2's global IP]/board",(0,i.jsx)(t.br,{}),"\n","Authentication Email: ",(0,i.jsx)("dummy",{children:"user"}),"@example.com",(0,i.jsx)(t.br,{}),"\n","Password: password"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Sample",src:n(59689).A+"",width:"767",height:"852"})}),"\n",(0,i.jsx)(t.p,{children:"In this way, users can freely write messages."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},59689:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/prepare-the-sample-application-01-59518699438dfe127e7ff304b7c79187.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);