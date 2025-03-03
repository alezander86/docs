"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[28973],{11016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"use-cases/autotest-as-quality-gate","title":"Autotest as a Quality Gate","description":"Explore how to integrate autotests as quality gates in CD pipelines with KubeRocketCI to ensure only stable and functional application versions are promoted.","source":"@site/docs/use-cases/autotest-as-quality-gate.md","sourceDirName":"use-cases","slug":"/use-cases/autotest-as-quality-gate","permalink":"/docs/next/use-cases/autotest-as-quality-gate","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/autotest-as-quality-gate.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Autotest as a Quality Gate","description":"Explore how to integrate autotests as quality gates in CD pipelines with KubeRocketCI to ensure only stable and functional application versions are promoted.","sidebar_label":"Autotest as a Quality Gate"},"sidebar":"useCasesSidebar","previous":{"title":"Secured Secrets Management for Application Deployment","permalink":"/docs/next/use-cases/external-secrets"},"next":{"title":"Create and Use Custom Tekton Pipelines","permalink":"/docs/next/use-cases/custom-pipelines-flow"}}');var i=t(74848),l=t(28453);const a={title:"Autotest as a Quality Gate",description:"Explore how to integrate autotests as quality gates in CD pipelines with KubeRocketCI to ensure only stable and functional application versions are promoted.",sidebar_label:"Autotest as a Quality Gate"},c="Autotest as a Quality Gate",d={},r=[{value:"Roles",id:"roles",level:2},{value:"Goals",id:"goals",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Create Applications",id:"create-applications",level:3},{value:"Create Autotests",id:"create-autotests",level:3},{value:"Create CD Pipeline",id:"create-cd-pipeline",level:3},{value:"Run Autotests",id:"run-autotests",level:3},{value:"Related Articles",id:"related-articles",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"autotest-as-a-quality-gate",children:"Autotest as a Quality Gate"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/use-cases/autotest-as-quality-gate"})}),"\n",(0,i.jsx)(n.p,{children:"This use case outlines the process of integrating an autotest as a quality gate into a newly created CD pipeline. The CD pipeline includes a selected build version of an application that needs to be promoted. The purpose of incorporating autotests is to ensure that the application meets predefined criteria for stability and functionality, guaranteeing that only reliable versions are promoted. By implementing this feature, users can perform comprehensive testing, thereby enhancing the overall stability of the application."}),"\n",(0,i.jsx)(n.p,{children:"In the KubeRocketCI platform, users can seamlessly add autotests as quality gates to their CD pipelines, enabling them to validate the application's stability and functionality before promoting it to the next stage. This ensures that only reliable versions of the application are deployed, improving the overall quality and reliability of the software."}),"\n",(0,i.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,i.jsx)(n.p,{children:"This documentation is tailored for the Developers and Quality Assurance specialists."}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create several applications and autotests quickly."}),"\n",(0,i.jsx)(n.li,{children:"Create a pipeline for Continuous Deployment."}),"\n",(0,i.jsx)(n.li,{children:"Perform testing."}),"\n",(0,i.jsx)(n.li,{children:"Update delivery by deploying the new version."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["KubeRocketCI instance is ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/prerequisites",children:"configured"})," with GitHub, Tekton and ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/cd/argocd-integration",children:"Argo CD"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Developer has access to the platform using the Single-Sign-On approach."}),"\n",(0,i.jsxs)(n.li,{children:["Developer has the ",(0,i.jsx)(n.strong,{children:"Administrator"})," role (to perform merge in GitHub)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-applications",children:"Create Applications"}),"\n",(0,i.jsx)(n.p,{children:"To implement autotests as Quality Gates, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure the namespace is specified in the cluster settings. Click the ",(0,i.jsx)(n.strong,{children:"Settings"})," icon in the top right corner and select ",(0,i.jsx)(n.strong,{children:"Cluster settings"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cluster settings",src:t(16951).A+"",title:"Cluster settings",width:"1917",height:"1045"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter the name of the default namespace, then enter your default namespace in the ",(0,i.jsx)(n.strong,{children:"Allowed namespaces"})," field and click the ",(0,i.jsx)(n.strong,{children:"+ ADD"})," button. You can also add other namespaces to the ",(0,i.jsx)(n.strong,{children:"Allowed namespaces"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Specify namespace",src:t(3837).A+"",title:"Specify namespace",width:"1916",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create several applications using the ",(0,i.jsx)(n.strong,{children:"Create"})," strategy. Navigate to the ",(0,i.jsx)(n.strong,{children:"Components"})," tab and click the ",(0,i.jsx)(n.strong,{children:"+ CREATE COMPONENT"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add application",src:t(4533).A+"",title:"Add application",width:"1916",height:"1080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Application"})," and click ",(0,i.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Application create",src:t(7754).A+"",title:"Application create",width:"1915",height:"1077"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Create from template"})," and click ",(0,i.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create new component menu",src:t(17036).A+"",title:"Create new component menu",width:"1915",height:"1079"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Please refer to the ",(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})," section for details."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Codebase info"})," tab, define the following values and press the ",(0,i.jsx)(n.strong,{children:"Next"})," button:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/js-application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"js-application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"js application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application code language: ",(0,i.jsx)(n.code,{children:"JavaScript"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/Provider: ",(0,i.jsx)(n.code,{children:"Vue"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build tool: ",(0,i.jsx)(n.code,{children:"NPM"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Codebase info tab",src:t(2776).A+"",title:"Codebase info tab",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Advanced settings"})," tab, define the below values and push the ",(0,i.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Advanced settings tab",src:t(56725).A+"",title:"Advanced settings tab",width:"1915",height:"1078"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Repeat the procedure twice to create the ",(0,i.jsx)(n.strong,{children:"go-application"})," and ",(0,i.jsx)(n.strong,{children:"python-application"})," applications. These applications will have the following parameters:"]}),"\n",(0,i.jsx)(n.p,{children:"go-application:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/go-application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"go-application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"go application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application code language: ",(0,i.jsx)(n.code,{children:"Go"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/Provider: ",(0,i.jsx)(n.code,{children:"Gin"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build tool: ",(0,i.jsx)(n.code,{children:"Go"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"python-application:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/python-application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"python-application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"python application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application code language: ",(0,i.jsx)(n.code,{children:"Python"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/Provider: ",(0,i.jsx)(n.code,{children:"FastAPI"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build tool: ",(0,i.jsx)(n.code,{children:"Python"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Components"})," tab, click one of the applications name to enter the application menu:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Components list",src:t(94207).A+"",title:"Components list",width:"1916",height:"1078"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Trigger build pipeline run"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Build Application",src:t(77268).A+"",title:"Build Application",width:"1902",height:"1078"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the application run name to watch the building logs:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Application building",src:t(8119).A+"",title:"Application building",width:"1915",height:"1077"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"On the pipeline details page, you can find information about each step, pipeline status, view logs."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"KubeRocketCI pipeline run",src:t(76119).A+"",title:"KubeRocketCI pipeline run",width:"1901",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wait till the build is successful:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Successful build",src:t(7235).A+"",title:"Successful build",width:"1915",height:"1076"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat steps 9-13 for the rest of the applications."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-autotests",children:"Create Autotests"}),"\n",(0,i.jsx)(n.p,{children:"The steps below instruct how to create autotests in KubeRocketCI:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a couple of autotests using the ",(0,i.jsx)(n.strong,{children:"Clone"})," strategy. Navigate to the ",(0,i.jsx)(n.strong,{children:"Components"})," tab, click on the ",(0,i.jsx)(n.strong,{children:"+CREATE COMPONENT"})," button. Select ",(0,i.jsx)(n.strong,{children:"Autotest"})," and click ",(0,i.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add autotest",src:t(4422).A+"",title:"Add autotest",width:"1917",height:"1079"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Please refer to the ",(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-autotest",children:"Add Autotest"})," section for details."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Clone project"})," and click ",(0,i.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add autotest",src:t(454).A+"",title:"Add autotest",width:"1916",height:"1081"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Codebase info"})," tab, define the following values and press the ",(0,i.jsx)(n.strong,{children:"Proceed"})," button:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Repository URL: ",(0,i.jsx)(n.code,{children:"https://github.com/SergK/autotests.git"})]}),"\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/demo-autotest-gradle"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"demo-autotest-gradle"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"demo-autotest-gradle"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest code language: ",(0,i.jsx)(n.code,{children:"Java"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/framework: ",(0,i.jsx)(n.code,{children:"Java11"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build tool: ",(0,i.jsx)(n.code,{children:"Gradle"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest report framework: ",(0,i.jsx)(n.code,{children:"Allure"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Codebase info tab for autotests",src:t(38750).A+"",title:"Codebase info tab for autotests",width:"1916",height:"1076"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Advanced settings"})," tab define the below values and push the ",(0,i.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Advanced settings tab for autotests",src:t(59721).A+"",title:"Advanced settings tab for autotests",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat the steps 1-4 to create one more autotest with the parameters below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Repository URL: ",(0,i.jsx)(n.code,{children:"https://github.com/Rolika4/autotests.git"})]}),"\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/demo-autotest-maven"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"demo-autotest-maven"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"demo-autotest-maven"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest code language: ",(0,i.jsx)(n.code,{children:"Java"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/framework: ",(0,i.jsx)(n.code,{children:"Java11"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build tool: ",(0,i.jsx)(n.code,{children:"Maven"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest report framework: ",(0,i.jsx)(n.code,{children:"Allure"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-cd-pipeline",children:"Create CD Pipeline"}),"\n",(0,i.jsx)(n.p,{children:"Now that applications and autotests are created, create pipeline for them by following the steps below:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"To utilize and manage various environments through the KubeRocketCI platform, the initial step is to onboard a new GitOps repository."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Environments"})," tab and click the corresponding button to create new GitOps repository:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CD pipelines tab",src:t(37108).A+"",title:"CD pipelines tab",width:"1916",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click to the ",(0,i.jsx)(n.strong,{children:"ADD GITOPS REPOSITORY"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Onboard gitops repository",src:t(79143).A+"",title:"Onboard GitOps repository",width:"1917",height:"1080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.code,{children:"github"})," server, enter GitHub account name and click ",(0,i.jsx)(n.strong,{children:"SAVE"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure gitops repository",src:t(12884).A+"",title:"Configure gitops repository",width:"1915",height:"1078"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Return to the ",(0,i.jsx)(n.strong,{children:"Environments"})," tab and click ",(0,i.jsx)(n.strong,{children:"CREATE ENVIRONMENT"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create new environment",src:t(15490).A+"",title:"Create new environment",width:"1914",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"demo-pipeline"})," and click the ",(0,i.jsx)(n.strong,{children:"NEXT"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pipeline tab",src:t(5013).A+"",title:"Pipeline tab",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Applications"})," tab, add all the three applications, specify the ",(0,i.jsx)(n.strong,{children:"main"})," branch for all for them and check ",(0,i.jsx)(n.strong,{children:"Promote in pipeline"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Applications tab",src:t(86606).A+"",title:"Applications tab",width:"1916",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once all the steps have been completed, you may begin creating stages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment created",src:t(22513).A+"",title:"Environment created",width:"1916",height:"1080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Stages"})," menu click to the ",(0,i.jsx)(n.strong,{children:"CREATE STAGE"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add new stage",src:t(35714).A+"",title:"Add new stage",width:"1916",height:"1080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create stage"})," menu, define the following values and click ",(0,i.jsx)(n.strong,{children:"NEXT"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cluster: ",(0,i.jsx)(n.code,{children:"In cluster"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stage name: ",(0,i.jsx)(n.code,{children:"dev"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"dev"})]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pipeline template: ",(0,i.jsx)(n.code,{children:"deploy-with-autotests"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure stage",src:t(89808).A+"",title:"Configure stage",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Add quality gates"})," menu click ",(0,i.jsx)(n.strong,{children:"+"})," button. Specify the following parameters and click ",(0,i.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"First Quality Gate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Quality gate type: ",(0,i.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Step name: ",(0,i.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest: ",(0,i.jsx)(n.code,{children:"demo-autotest-gradle"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Second Quality Gate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Quality gate type: ",(0,i.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Step name: ",(0,i.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest: ",(0,i.jsx)(n.code,{children:"demo-autotest-maven"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Quality gates tab",src:t(85945).A+"",title:"Quality gates tab",width:"1917",height:"1077"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat the steps 8-10 to create one more stage with the parameters below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cluster: ",(0,i.jsx)(n.code,{children:"In cluster"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stage name: ",(0,i.jsx)(n.code,{children:"sit"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"sit"})]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger type: ",(0,i.jsx)(n.code,{children:"manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pipeline template: ",(0,i.jsx)(n.code,{children:"deploy"})]}),"\n",(0,i.jsxs)(n.li,{children:["Quality gate type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"run-autotests",children:"Run Autotests"}),"\n",(0,i.jsx)(n.p,{children:"After the CD pipeline is created, deploy applications and run autotests by following the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"dev"})," stage name to expand its details:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deploy applications",src:t(73794).A+"",title:"Deploy applications",width:"1902",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate ",(0,i.jsx)(n.strong,{children:"Applications"})," and click ",(0,i.jsx)(n.strong,{children:"CONFIGURE DEPLOY"}),". Then select latest versions of all applications and click ",(0,i.jsx)(n.strong,{children:"START DEPLOY"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Run deploy pipeline",src:t(48603).A+"",title:"Run deploy pipeline",width:"1915",height:"1080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To find information about running deploy pipeline navigate ",(0,i.jsx)(n.strong,{children:"PIPELINES"})," and click on pipeline name:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deploy pipeline information",src:t(26045).A+"",title:"Deploy pipeline information",width:"1914",height:"1079"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once promotion procedure is finished, the promoted applications will become available in the ",(0,i.jsx)(n.strong,{children:"Sit"})," stage. You will be able to select image stream versions for the promoted applications:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sit stage",src:t(74120).A+"",title:"Sit stage",width:"1915",height:"1076"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-quality-gate",children:"Add Quality Gate"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},94207:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/3-apps-063524f4cd021a21671297692a45fb26.png"},4533:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add_application-567aad0e0136cb22f70b2841edac3c20.png"},4422:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add_autotest-6ad97f6719af72fe0cb0ae3f42aeb453.png"},12884:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add_gitops_repository-2141dcdf1718ecbf95755e6a9ae3b080.png"},35714:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add_new_stage-999eae5de23f291822e9064cec6a7063.png"},56725:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/advanced_settings-87c382ea2522c53d3ad90fb941cda3e2.png"},8119:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/app_built-c2f0122ba02f14e1f9818d8a03c03e47.png"},7754:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/application_create-9db6995d641cffbfdf19c12cde4a70bd.png"},86606:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/applications_tab-ae3f5095db6f9df0613b25982226c9ba.png"},59721:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/autotest_advanced_settings-a20eae721936f7900914baa8acda7c59.png"},77268:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/build_application-3e7cf0a2b004935b0bd221c834d70cde.png"},454:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/clone_project-35383fe63135ef5322f19d9c65b1614f.png"},2776:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/codebase_info_menu-af2682b17d60a96b130a4a923abe8e2b.png"},89808:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/configure_stage-85fa8f494eb5677c7c7566c45067d51a.png"},37108:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create_cd_pipeline-d32ccf5fb5cf90b6a4720ba6282c3a13.png"},17036:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create_new_component-74b7ad6c0c7097fb1dabb3fa792f0b68.png"},15490:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create_new_environment-68c8c2d3c8888d87f2c03ebaf53ca877.png"},38750:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/demo_autotest_gradle-fb5fe33f779df764c37868dae7a3f764.png"},73794:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deploy_applications-9c9695c53978a5371dd9e9c270857ec8.png"},26045:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deploy_pipeline-d8f60ddaf71948ea49728aa1fb80dc55.png"},74120:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deploy_promoted_stage-0b348e370afb58949335131e845754d1.png"},22513:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/environment_created-337eec1307fb1729d6d62c66248ba548.png"},16951:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kuberocketci_cluster_settings-2233687f75e9d294a3e3c4e7da3e4663.png"},76119:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kuberocketci_pipeline-a1891af49b486398c0dd5f2c2c0e8bdd.png"},3837:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kuberocketci_set_namespace-d2b7d9a1ccd81145621c3b621d877ef8.png"},79143:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/onboard_gitops-7a4221b8cd793a17a443cd0f5e57cc98.png"},5013:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pipeline_tab-beb2de915ebb005014a3c46c0a408d05.png"},85945:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/quality_gates_tab-f21021de03347b1c33f73641e7776a39.png"},48603:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/run_deploy_pipeline-5200928f3fd4fe5a7b1c603cddfb8528.png"},7235:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/wait_application-9680fb1697a7476a96b325ae7c021ead.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);