"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[42198],{58059:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-guide/cd-pipeline-details","title":"CD Pipeline Details","description":"CD Pipeline (Continuous Delivery Pipeline) - KubeRocketCI business entity that describes the whole delivery process of the selected application set via the respective stages.","source":"@site/versioned_docs/version-3.10/user-guide/cd-pipeline-details.md","sourceDirName":"user-guide","slug":"/user-guide/cd-pipeline-details","permalink":"/docs/user-guide/cd-pipeline-details","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/cd-pipeline-details.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{}}');var s=t(74848),o=t(28453);const a={},r="CD Pipeline Details",l={},d=[{value:"Deploy Pipeline",id:"deploy-pipeline",level:2},{value:"Related Articles",id:"related-articles",level:3}];function c(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"cd-pipeline-details",children:"CD Pipeline Details"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/cd-pipeline-details/"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"CD Pipeline (Continuous Delivery Pipeline)"})," - KubeRocketCI business entity that describes the whole delivery process of the selected application set via the respective stages.\nThe main idea of the CD pipeline is to promote the application build version between the stages by applying the sequential verification (i.e. the second stage will be available if the verification on the first stage is successfully completed).\nThe CD pipeline can include the essential set of applications with its specific stages as well."]}),"\n",(0,s.jsx)(i.p,{children:"In other words, the CD pipeline allows the selected image stream (Docker container in Kubernetes terms) to pass a set of stages for the verification process (SIT - system integration testing with the automatic type of a quality gate, QA - quality assurance, UAT - user acceptance testing with the manual testing)."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["It is possible to change the image stream for the application in the CD pipeline. Please refer to the ",(0,s.jsx)(i.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Edit CD Pipeline"})," section for the details."]})}),"\n",(0,s.jsxs)(i.p,{children:["A CI/CD pipeline helps to automate steps in a software delivery process, such as the code build initialization, automated tests running, and deploying to a staging or production environment.\nAutomated pipelines remove manual errors, provide standardized development feedback cycle, and enable the fast product iterations. To get more information on the CI pipeline, please refer to the ",(0,s.jsx)(i.a,{href:"/docs/user-guide/ci-pipeline-details",children:"CI Pipeline Details"})," chapter."]}),"\n",(0,s.jsx)(i.p,{children:"The codebase stream is used as a holder for the output of the stage, i.e. after the Docker container (or an image stream in OpenShift terms) passes the stage verification, it will be placed to the new codebase stream.\nEvery codebase has a branch that has its own codebase stream - a Docker container that is an output of the build for the corresponding branch."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["For more information on the main terms used in KubeRocketCI, please refer to the ",(0,s.jsx)(i.a,{href:"/docs/glossary",children:"KubeRocketCI Glossary"})]})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"KubeRocketCI CD pipeline",src:t(41249).A+"",title:"KubeRocketCI CD pipeline",width:"935",height:"414"})}),"\n",(0,s.jsx)(i.p,{children:"Explore the details of the CD pipeline below."}),"\n",(0,s.jsx)(i.h2,{id:"deploy-pipeline",children:"Deploy Pipeline"}),"\n",(0,s.jsx)(i.p,{children:"The Deploy pipeline is used by default on any stage of the Continuous Delivery pipeline. It addresses the following concerns:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Deploying the application(s) to the main STAGE (SIT, QA, UAT) environment in order to run autotests and to promote image build versions to the next environments afterwards."}),"\n",(0,s.jsx)(i.li,{children:"Deploying the application(s) to a custom STAGE environment in order to run autotests and check manually that everything is ok with the application."}),"\n",(0,s.jsx)(i.li,{children:"Deploying the latest or a stable and some particular numeric version of an image build that exists in Docker registry."}),"\n",(0,s.jsx)(i.li,{children:"Promoting the image build versions from the main STAGE (SIT, QA, UAT) environment."}),"\n",(0,s.jsx)(i.li,{children:"Auto deploying the application(s) version from the passed payload (using the CODEBASE_VERSION job parameter)."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Find below the functional diagram of the Deploy pipeline with the default stages:"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"The input for a CD pipeline depends on the Trigger Type for a deploy stage and can be either Manual or Auto."})}),"\n",(0,s.jsx)(i.h3,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/user-guide/add-library",children:"Add Library"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/user-guide/ci-pipeline-details",children:"CI Pipeline Details"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/glossary",children:"KubeRocketCI Glossary"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},41249:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/edp-cd-pipeline-156a7c7b137dda2b5dfd42fbd101b443.png"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var n=t(96540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);