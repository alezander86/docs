"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[19434],{51451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"operator-guide/code-quality/sonarqube-visibility","title":"Manage Project Visibility","description":"This manual offers detailed guidance on configuring permissions for SonarQube projects, ensuring that only authorized personnel can access and interact with the data on the SonarQube platform. It caters to both new and existing SonarQube projects, providing a clear pathway to refine visibility settings for enhanced security.","source":"@site/versioned_docs/version-3.10/operator-guide/code-quality/sonarqube-visibility.md","sourceDirName":"operator-guide/code-quality","slug":"/operator-guide/code-quality/sonarqube-visibility","permalink":"/docs/operator-guide/code-quality/sonarqube-visibility","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/code-quality/sonarqube-visibility.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"SonarQube Integration","permalink":"/docs/operator-guide/code-quality/sonarqube"},"next":{"title":"Jira Integration","permalink":"/docs/operator-guide/project-management-and-reporting/jira-integration"}}');var i=n(74848),r=n(28453);const o={},a="Manage Project Visibility",c={},l=[{value:"Restrict Access for New Projects",id:"restrict-access-for-new-projects",level:2},{value:"Configure Access for Existing Projects",id:"configure-access-for-existing-projects",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"manage-project-visibility",children:"Manage Project Visibility"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/code-quality/sonarqube-visibility/"})}),"\n",(0,i.jsx)(t.p,{children:"This manual offers detailed guidance on configuring permissions for SonarQube projects, ensuring that only authorized personnel can access and interact with the data on the SonarQube platform. It caters to both new and existing SonarQube projects, providing a clear pathway to refine visibility settings for enhanced security."}),"\n",(0,i.jsxs)(t.p,{children:["By leveraging the OpenID Connect mechanism for login, users are automatically assigned to the ",(0,i.jsx)(t.code,{children:"sonar-users"})," group, granting them access to all projects by default. This document outlines methods to alter these default permissions, enhancing the platform's security and data confidentiality. It is structured into two main sections: one focusing on ",(0,i.jsx)(t.a,{href:"#restrict-access-for-new-projects",children:"restricting access to new projects"}),", and the other on ",(0,i.jsx)(t.a,{href:"#configure-access-for-existing-projects",children:"reconfiguring access settings for existing projects"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"restrict-access-for-new-projects",children:"Restrict Access for New Projects"}),"\n",(0,i.jsx)(t.p,{children:"In its default configuration, SonarQube does not restrict access to newly created projects, making them accessible to all instance users. To modify this behavior and set new projects to private by default, follow these instructions:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open the SonarQube UI in the browser."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.code,{children:"Administration"})," tab:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SonarQube user settings",src:n(47638).A+"",title:"SonarQube user settings",width:"1904",height:"936"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Ensure you have admin rights to see the ",(0,i.jsx)(t.code,{children:"Administration"})," section."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"Projects"})," button and select ",(0,i.jsx)(t.code,{children:"Management"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SonarQube user settings",src:n(17706).A+"",title:"SonarQube user settings",width:"1899",height:"912"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"On the project management page, click pencil icon at the top-right corner::"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SonarQube user settings",src:n(12199).A+"",title:"SonarQube user settings",width:"1898",height:"934"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.strong,{children:"Private"})," and click ",(0,i.jsx)(t.strong,{children:"Change Default Visibility"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SonarQube user settings",src:n(72448).A+"",title:"SonarQube user settings",width:"1921",height:"927"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configure-access-for-existing-projects",children:"Configure Access for Existing Projects"}),"\n",(0,i.jsx)(t.p,{children:"To make all the current projects private, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Projects"})," tab, enter the project you want to make private."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the project page, click the ",(0,i.jsx)(t.strong,{children:"Project Settings"})," button and select ",(0,i.jsx)(t.strong,{children:"Permissions"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SonarQube user settings",src:n(58708).A+"",title:"SonarQube user settings",width:"1897",height:"911"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the project permissions page, select ",(0,i.jsx)(t.strong,{children:"Private"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SonarQube user settings",src:n(8756).A+"",title:"SonarQube user settings",width:"1897",height:"932"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Repeat the procedure for all of the projects you want to make private."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/operator-guide/code-quality/sonarqube",children:"SonarQube Integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus Sonatype Integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/quick-start/integrate-sonarcloud",children:"Integrate SonarQube"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},47638:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_administration-2442fa0a0747515a81eaa606813a0b9d.png"},12199:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_pencil-b0d210c680ebc9a118f318bea1ccb713.png"},72448:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_private_visibility-3839d7323000e46e74ee62fcfb6fd977.png"},58708:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_project_permissions-15f38846341aa11f112abdd9cc1f7b00.png"},8756:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_project_private_permissions-ab0e2e46802f8c62d5ce453a804c574c.png"},17706:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_projects_management-6d3d5b089f179462e39c0b5167983172.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);