"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[43994],{35471:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"operator-guide/code-quality/sonarqube","title":"SonarQube Integration","description":"This documentation offers detailed guidance on seamlessly integrating SonarQube into KubeRocketCI.","source":"@site/docs/operator-guide/code-quality/sonarqube.md","sourceDirName":"operator-guide/code-quality","slug":"/operator-guide/code-quality/sonarqube","permalink":"/docs/next/operator-guide/code-quality/sonarqube","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/code-quality/sonarqube.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Nexus Image Registry","permalink":"/docs/next/operator-guide/artifacts-management/nexus-image-registry"},"next":{"title":"Manage Project Visibility","permalink":"/docs/next/operator-guide/code-quality/sonarqube-visibility"}}');var s=r(74848),a=r(28453),i=r(65537),o=r(79329);const l={},c="SonarQube Integration",d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Applying GitOps approach installation changes",id:"applying-gitops-approach-installation-changes",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configuration SonarQube with sonar-operator",id:"configuration-sonarqube-with-sonar-operator",level:2},{value:"SonarQube configuration overview with sonar-operator",id:"sonarqube-configuration-overview-with-sonar-operator",level:2},{value:"Plugin Management",id:"plugin-management",level:3},{value:"Group Permissions",id:"group-permissions",level:3},{value:"Permission Templates",id:"permission-templates",level:3},{value:"Quality Gates",id:"quality-gates",level:3},{value:"Quality Profiles",id:"quality-profiles",level:3},{value:"Configuration SonarQube ci-user without sonar-operator",id:"configuration-sonarqube-ci-user-without-sonar-operator",level:2},{value:"Integration SonarQube with KubeRocketCI",id:"integration-sonarqube-with-kuberocketci",level:2},{value:"Project Analysis Flow",id:"project-analysis-flow",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sonarqube-integration",children:"SonarQube Integration"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/code-quality/sonarqube/"})}),"\n",(0,s.jsx)(n.p,{children:"This documentation offers detailed guidance on seamlessly integrating SonarQube into KubeRocketCI.\nIt covers essential steps to ensure a robust connection between SonarQube's code quality and security\nanalysis capabilities with the platform's continuous delivery ecosystem,\nfacilitating enhanced code inspection and improvement practices within your development workflow."}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0duxqmIKFpQ",title:"SonarQube Integration",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before proceeding, ensure the following prerequisites are in place:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Kubectl version 1.26.0+ is installed. Please refer to the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["To install SonarQube in environment, it's recommended to use the resources provided in the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," repository. This approach involves installing both the sonarqube and the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-sonar-operator",children:"sonar-operator"}),". Leveraging the Cluster Add-Ons simplifies the deployment and management process, providing a streamlined method to integrate SonarQube into infrastructure."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the forked cluster Add-Ons repository and align the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/sonar/values.yaml",children:"sonar values.yaml"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/sonar-operator/values.yaml",children:"sonar-operator values.yaml"})," files. Follow the instructions to deploy sonarqube, ensuring it's correctly configured to serve as artifact repository."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the configuration to enable ",(0,s.jsx)(n.strong,{children:"sonar"})," and ",(0,s.jsx)(n.strong,{children:"sonar-operator"})," in ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml",children:"Add-Ons"})," repository:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/apps/values.yaml"',children:"sonar:\n  createNamespace: true\n  enable: true\n\nsonar-operator:\n  createNamespace: true\n  enable: true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Sync resources and wait till the all ",(0,s.jsx)(n.strong,{children:"sonar"})," and ",(0,s.jsx)(n.strong,{children:"sonar-operator"})," resources is created:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sonarqube ArgoCD applications",src:r(93590).A+"",title:"sonarqube ArgoCD applications",width:"2011",height:"1190"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sign In"})," into ",(0,s.jsx)(n.strong,{children:"sonarqube"})," using the default credentials ",(0,s.jsx)(n.strong,{children:"Username"}),": ",(0,s.jsx)(n.code,{children:"admin"})," and ",(0,s.jsx)(n.strong,{children:"Password"}),": ",(0,s.jsx)(n.code,{children:"admin"})," and update the default password for better security for that click on profile icon in the upper right corner, click on ",(0,s.jsx)(n.strong,{children:"Security"}),", enter a new password and click ",(0,s.jsx)(n.strong,{children:"Update"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sonarqube change password",src:r(51955).A+"",title:"sonarqube change password",width:"1998",height:"1229"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"applying-gitops-approach-installation-changes",children:"Applying GitOps approach installation changes"}),"\n",(0,s.jsx)(n.p,{children:"To update SonarQube configurations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Modify the relevant configuration files in the forked add-ons repository."}),"\n",(0,s.jsx)(n.li,{children:"Commit and push the changes to the forker Git repository."}),"\n",(0,s.jsx)(n.li,{children:"Synchronize the changes with ArgoCD."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["With Add-ons approach add predefined ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/build/0.1.0-SNAPSHOT.236/clusters/core/addons/sonar/values.yaml#L26",children:"SonarQube plugins"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/build/0.1.0-SNAPSHOT.236/clusters/core/addons/sonar-operator/templates/sonar",children:"sonar-operator"})," create the necessary groups, users, permission templates, quality profiles, quality gates automatically by deploy preconfigured custom resources. Manage these configurations centrally through a GitOps-based workflow."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-sonarqube-with-sonar-operator",children:"Configuration SonarQube with sonar-operator"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a Kubernetes Secret that the ",(0,s.jsx)(n.strong,{children:"sonar-operator"})," will use to connect to the ",(0,s.jsx)(n.strong,{children:"sonarqube"})," and create all resources:"]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{defaultValue:"manifests",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,s.jsx)(o.A,{value:"manifests",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: sonar-admin-password\n  namespace: sonar\ntype: Opaque\ndata:\n  user: YWRtaW4=     # base64-encoded value of "admin"\n  password: cGFzcw== # base64-encoded value of "pass"\n'})})}),(0,s.jsx)(o.A,{value:"externalsecret",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"sonarqube":\n{\n  "user": "XXXXXXX",\n  "password": "XXXXXXX"\n}\n'})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create a secret using ",(0,s.jsx)(n.code,{children:"manifests"})," or with ",(0,s.jsx)(n.code,{children:"External Secrets Operator"})," to enable the ",(0,s.jsx)(n.strong,{children:"sonar-operator"})," to connect to the ",(0,s.jsx)(n.strong,{children:"sonarqube"})," for provisioning:"]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{defaultValue:"manifests",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,s.jsx)(o.A,{value:"manifests",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ci-sonar\n  namespace: sonar\ntype: Opaque\nstringData:\n  password: <sonar-ci-password>\n"})})}),(0,s.jsx)(o.A,{value:"externalsecret",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"sonarqube-ci-user":\n{\n  "password": "XXXXXXX"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"sonarqube-configuration-overview-with-sonar-operator",children:"SonarQube configuration overview with sonar-operator"}),"\n",(0,s.jsx)(n.h3,{id:"plugin-management",children:"Plugin Management"}),"\n",(0,s.jsxs)(n.p,{children:["The SonarQube instance includes pre-installed plugins to meet common project needs. Additional plugins, if required, can be installed by updating the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/build/0.1.0-SNAPSHOT.236/clusters/core/addons/sonar/values.yaml#L26",children:"SonarQube values.yaml"})," file in the forked add-ons repository."]}),"\n",(0,s.jsx)(n.h3,{id:"group-permissions",children:"Group Permissions"}),"\n",(0,s.jsx)(n.p,{children:"Access control in SonarQube is organized through predefined groups:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sonar-administrators:"})," System administrators with full access to manage the instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sonar-developers:"})," Developers who can view and edit project settings (managed by the Sonar Operator)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sonar-users:"})," Default group for all authenticated users with basic project viewing rights."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"view-group:"})," Grants browsing access for users requiring read-only permissions."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sonarqube kuberocketci permission template",src:r(66565).A+"",title:"sonarqube kuberocketci permission template",width:"1914",height:"1012"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"permission-templates",children:"Permission Templates"}),"\n",(0,s.jsx)(n.p,{children:"Permissions in SonarQube are associated with projects through permission templates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"edp-default:"})," The default template applied to all projects, ensuring consistent group-level access management across the platform."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"quality-gates",children:"Quality Gates"}),"\n",(0,s.jsx)(n.p,{children:"Quality Gates are used to ensure that code quality standards are met before further development or deployment proceeds:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EDP way (default):"})," KuberocketCI quality gates are defined in the SonarQube instance, specifically tailored for the KubeRocketCI project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sonar way (built-in):"})," These are predefined quality gates available directly in SonarQube, not customized for any specific project but rather standardized for general use."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sonarqube kuberocketci quality gate",src:r(81547).A+"",title:"sonarqube kuberocketci quality gate",width:"1914",height:"1422"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"quality-profiles",children:"Quality Profiles"}),"\n",(0,s.jsx)(n.p,{children:"Quality Profiles define the rules used during code analysis. The Sonar Operator manages quality profiles with the following default setup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"EDP way (default):"})," A Java quality profile based on KubeRocketCI best practices, offering tailored rule sets."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-sonarqube-ci-user-without-sonar-operator",children:"Configuration SonarQube ci-user without sonar-operator"}),"\n",(0,s.jsx)(n.p,{children:"To establish robust authentication and precise access control, generating a SonarQube token is essential. This token is a distinct identifier, enabling effortless integration between SonarQube and KubeRocketCI. To generate the SonarQube token, proceed with the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the SonarQube UI and navigate to ",(0,s.jsx)(n.strong,{children:"Administration"})," -> ",(0,s.jsx)(n.strong,{children:"Security"})," -> ",(0,s.jsx)(n.strong,{children:"User"}),". Create a new user or select an existing one. Click the ",(0,s.jsx)(n.code,{children:"Options List"})," icon to create a token:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SonarQube user settings",src:r(48496).A+"",title:"SonarQube user settings",width:"1906",height:"465"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Type the ",(0,s.jsx)(n.code,{children:"ci-user"})," username, define an expiration period, and click the ",(0,s.jsx)(n.code,{children:"Generate"})," button to create the token:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SonarQube create token",src:r(14151).A+"",title:"SonarQube create token",width:"1276",height:"353"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.code,{children:"Copy"})," button to copy the generated ",(0,s.jsx)(n.code,{children:"<Sonarqube-token>"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SonarQube token",src:r(51729).A+"",title:"SonarQube token",width:"1277",height:"466"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"integration-sonarqube-with-kuberocketci",children:"Integration SonarQube with KubeRocketCI"}),"\n",(0,s.jsx)(n.p,{children:"For provision secret using manifest, KubeRocketCI portal or with the externalSecrets operator:"}),"\n",(0,s.jsxs)(i.A,{defaultValue:"kuberocketci",values:[{label:"KubeRocketCI portal",value:"kuberocketci"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,s.jsxs)(o.A,{value:"kuberocketci",children:[(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.strong,{children:"Portal"})," open ",(0,s.jsx)(n.strong,{children:"Configuration"})," -> ",(0,s.jsx)(n.strong,{children:"CODE QUALITY"})," -> ",(0,s.jsx)(n.strong,{children:"SONARQUBE"}),". Update or click ",(0,s.jsx)(n.strong,{children:"+ ADD INTEGRATION"})," fill in the ",(0,s.jsx)(n.code,{children:"URL"})," and ",(0,s.jsx)(n.code,{children:"Token"})," fields and click the ",(0,s.jsx)(n.code,{children:"Save"})," button:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SonarQube update manual secret",src:r(40898).A+"",title:"SonarQube update manual secret",width:"3584",height:"2016"})})]}),(0,s.jsx)(o.A,{value:"manifests",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: ci-sonarqube\n  namespace: edp\n  labels:\n    app.edp.epam.com/secret-type: sonar\n    app.edp.epam.com/integration-secret: "true"\ntype: Opaque\nstringData:\n  url: https://sonarqube.example.com\n  token: <sonarqube-token>\n'})})}),(0,s.jsxs)(o.A,{value:"externalsecret",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"ci-sonarqube":\n{\n  "url": "https://sonarqube.example.com",\n  "token": "XXXXXXXXXXXX"\n},\n'})}),(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.strong,{children:"Portal"})," open ",(0,s.jsx)(n.strong,{children:"Configuration"})," -> ",(0,s.jsx)(n.strong,{children:"CODE QUALITY"})," -> ",(0,s.jsx)(n.strong,{children:"SONARQUBE"})," and see the ",(0,s.jsx)(n.code,{children:"Managed by External Secret"})," message:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SonarQube managed by external secret operator",src:r(70561).A+"",title:"SonarQube managed by external secret operator",width:"3584",height:"2016"})}),(0,s.jsxs)(n.p,{children:["More details about External Secrets Operator integration can be found in the ",(0,s.jsx)(n.a,{href:"https://epam.github.io/edp-install/operator-guide/code-quality/external-secrets-operator-integration/",children:"External Secrets Operator Integration"})," page."]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"project-analysis-flow",children:"Project Analysis Flow"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"SonarQube analysis is seamlessly integrated into KubeRocketCI pipelines, triggered during both review and build pipelines:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Review Pipeline:"})," Analyzes only the changes made in a pull request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build Pipeline:"})," Analyzes the main branch codebase to ensure overall project quality."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["SonarQube projects are named based on the corresponding KubeRocketCI project names, making it easy to navigate analysis results in the SonarQube UI mode details how to configure repo ",(0,s.jsx)(n.a,{href:"/docs/next/user-guide/application-sonarqube-project-properties",children:"project-project.settings"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SonarQube project",src:r(99839).A+"",title:"[SonarQube project",width:"1716",height:"1214"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/user-guide/application-sonarqube-project-properties",children:"Sonarqube Project Properties for Application"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI With Values File"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/install-external-secrets-operator",children:"Install External Secrets Operator"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79329:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},65537:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),s=r(34164),a=r(65627),i=r(56347),o=r(50372),l=r(30604),c=r(11861),d=r(78749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=g({queryString:r,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function A(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=b(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,m.jsx)(j,{...n,...e}),(0,m.jsx)(A,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,m.jsx)(v,{...e,children:u(e.children)},String(n))}},51729:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonar-copy-token-987269530b1bcd53ab7bd0d93028641d.png"},48496:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonar-create-user-a0a104af98c53bceb91a96dac5f3836c.png"},70561:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonar-externalsecret-password-ede19735ae0aabfb327d763d228701c8.png"},14151:(e,n,r)=>{r.d(n,{A:()=>t});const t="data:image/png;base64,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"},40898:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonar-secret-password-19b3c6bc6495cfb331a278445021b430.png"},93590:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonarqube-addons-deploy-df5e2e399061d6bdc7cb54b182611bcb.png"},51955:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonarqube-change-password-53feddfc2ee5e7db75e359ead1ba3d00.png"},66565:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonarqube-kuberocketci-permission-template-46ebdd0b5a8eb1a13841c4d3d1b7c7a9.png"},81547:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonarqube-kuberocketci-qualitygate-df7c58c26c28ec55c23ba7a977e3cbae.png"},99839:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/sonarqube-project-analysis-9ca16bd3ad5eedc8186031b276869ca3.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);