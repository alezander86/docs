"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[61949],{48411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator-guide/microsoft-entra/awx-operator-authentication","title":"Guide: Microsoft Entra SSO integration with Ansible AWX","description":"This guide provides instructions on how to configure Ansible AWX with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP).","source":"@site/versioned_docs/version-3.10/operator-guide/microsoft-entra/awx-operator-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/awx-operator-authentication","permalink":"/docs/operator-guide/microsoft-entra/awx-operator-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/awx-operator-authentication.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{"id":"awx-operator-authentication","sidebar_label":"Ansible AWX"},"sidebar":"operatorGuideSidebar","previous":{"title":"Argo CD","permalink":"/docs/operator-guide/microsoft-entra/argo-cd-authentication"},"next":{"title":"AWS EKS & KubeRocketCI Portal","permalink":"/docs/operator-guide/microsoft-entra/aws-eks-portal-authentication"}}');var s=n(74848),r=n(28453);const o={id:"awx-operator-authentication",sidebar_label:"Ansible AWX"},c="Guide: Microsoft Entra SSO integration with Ansible AWX",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Configuring Ansible AWX",id:"configuring-ansible-awx",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"guide-microsoft-entra-sso-integration-with-ansible-awx",children:"Guide: Microsoft Entra SSO integration with Ansible AWX"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/awx-operator-authentication/"})}),"\n",(0,s.jsx)(t.p,{children:"This guide provides instructions on how to configure Ansible AWX with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP)."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Access to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,s.jsx)(t.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,s.jsxs)(t.li,{children:["Installed Ansible AWX using the ",(0,s.jsx)(t.a,{href:"https://github.com/ansible-community/awx-operator-helm",children:"AWX Operator"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,s.jsx)(t.p,{children:"To configure Microsoft Entra as the Identity Provider for the Ansible AWX, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(74410).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and click ",(0,s.jsx)(t.strong,{children:"App registrations"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"App registrations",src:n(99395).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"New registration"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"New registration",src:n(86039).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Fill in the required fields, such as ",(0,s.jsx)(t.strong,{children:"Name"}),", ",(0,s.jsx)(t.strong,{children:"Supported account types"})," and ",(0,s.jsx)(t.strong,{children:"Redirect URI"}),". Click ",(0,s.jsx)(t.strong,{children:"Register"})," to create the application."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Redirect URI"})," should be in the format ",(0,s.jsx)(t.code,{children:"https://<Ansible AWX URL>/sso/complete/azuread-oauth2/"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Register application",src:n(17885).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the created application, navigate to the ",(0,s.jsx)(t.strong,{children:"Certificates & secrets"})," section from the left sidebar menu. In the ",(0,s.jsx)(t.strong,{children:"Client secrets"})," tab, click on the ",(0,s.jsx)(t.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,s.jsx)(t.strong,{children:"Add"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Client secrets",src:n(67379).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Copy the generated Client secret value and store it securely."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Client secret",src:n(22530).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the ",(0,s.jsx)(t.strong,{children:"API permissions"})," section. Ensure that the ",(0,s.jsx)(t.strong,{children:"User.Read"})," permission is added under the ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"})," API. If not, click on the ",(0,s.jsx)(t.strong,{children:"Add a permission"})," button, select ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"}),", and add the ",(0,s.jsx)(t.strong,{children:"User.Read"})," permission. After adding the permission, click on the ",(0,s.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"API permissions",src:n(54099).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuring-ansible-awx",children:"Configuring Ansible AWX"}),"\n",(0,s.jsx)(t.p,{children:"To integrate Ansible AWX with the configured Microsoft Entra Application, it is necessary to configure the Ansible AWX to use OIDC authentication."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open the Ansible AWX web interface and log in as an administrator."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWX Login",src:n(39395).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, navigate to ",(0,s.jsx)(t.strong,{children:"Settings"})," section. In the ",(0,s.jsx)(t.strong,{children:"Authentication"})," tab, click on the ",(0,s.jsx)(t.strong,{children:"Azure AD settings"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWX Settings",src:n(85305).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Fill in the required fields, such as ",(0,s.jsx)(t.strong,{children:"Azure AD OAuth2 Key"})," and ",(0,s.jsx)(t.strong,{children:"Azure AD OAuth2 Secret"}),". Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Azure AD OAuth2 Key"})," refers to the ",(0,s.jsx)(t.strong,{children:"Application (client) ID"})," of your Microsoft Entra Application."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Azure AD OAuth2 Secret"})," refers to the ",(0,s.jsx)(t.strong,{children:"Application Client Secret"})," value of your Microsoft Entra Application."]}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWX Azure AD Settings",src:n(87220).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Verify that the OIDC authentication is configured correctly by logging in to the AWX using ",(0,s.jsx)(t.strong,{children:"Sign in with Azure AD"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWX Login with Azure AD",src:n(6856).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After completing these steps, the Ansible AWX will be configured to use OIDC authentication with Microsoft Entra as the Identity Provider."}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect (OIDC) Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},99395:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},54099:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-api-permissions-a9dcfdd0d089edf4b860a80cd7b0c2df.png"},22530:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-client-secret-f41209731e0d2182034062f97f40c46a.png"},67379:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-client-secrets-3f5a1749cbe0afa666272aaa1f86b46c.png"},87220:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-entra-settings-20c1c76982d97f89934639c4a713ed79.png"},6856:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-login-entra-d4b9e8726327130ec9d14b717c7e7ec2.png"},39395:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-login-778ad04c3fa39253f1032dd29eb34430.png"},85305:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/awx-settings-edc74bf1bbcb48e48cc9f6f270fc4ed0.png"},74410:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},86039:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},17885:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);