"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[88252],{2951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"developer-guide/kubernetes-deployment","title":"Kubernetes Deployment","description":"Explore the deployment approach of KubeRocketCI on Kubernetes, highlighting the operator pattern approach, component overview, and platform\'s core functionalities.","source":"@site/versioned_docs/version-3.10/developer-guide/kubernetes-deployment.md","sourceDirName":"developer-guide","slug":"/developer-guide/kubernetes-deployment","permalink":"/docs/developer-guide/kubernetes-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/kubernetes-deployment.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Kubernetes Deployment","description":"Explore the deployment approach of KubeRocketCI on Kubernetes, highlighting the operator pattern approach, component overview, and platform\'s core functionalities.","sidebar_label":"Kubernetes Deployment"},"sidebar":"developerGuideSidebar","previous":{"title":"Reference Architecture","permalink":"/docs/developer-guide/reference-architecture"},"next":{"title":"Reference CI/CD Pipeline","permalink":"/docs/developer-guide/reference-cicd-pipeline"}}');var r=n(74848),s=n(28453);const i={title:"Kubernetes Deployment",description:"Explore the deployment approach of KubeRocketCI on Kubernetes, highlighting the operator pattern approach, component overview, and platform's core functionalities.",sidebar_label:"Kubernetes Deployment"},l="Kubernetes Deployment",a={},p=[];function c(e){const t={a:"a",h1:"h1",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kubernetes-deployment",children:"Kubernetes Deployment"})}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/kubernetes-deployment"})}),"\n",(0,r.jsx)(t.p,{children:"This section provides a comprehensive overview of the KubeRocketCI deployment approach on a Kubernetes cluster. KubeRocketCI is designed and functions based on a set of key guiding principles:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Operator Pattern Approach:"})," ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"Approach"})," is used for deployment and configuration, ensuring that the platform aligns with Kubernetes native methodologies (see schema below)."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Loosely Coupling:"})," KubeRocketCI comprises several loosely coupled operators responsible for different platform parts. These operators can be deployed independently, enabling the most straightforward platform customization and delivery approach."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Kubernetes Operator",src:n(43974).A+"",width:"3234",height:"2832"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The following deployment diagram illustrates the platform's core components, which provide the minimum functional capabilities required for the platform operation: build, push, deploy, and run applications. The platform relies on several mandatory dependencies:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ingress:"})," An ingress controller responsible for routing traffic to the platform."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tekton Stack:"})," Includes Tekton pipelines, triggers, dashboard, chains, etc."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ArgoCD:"})," Responsible for GitOps deployment."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"KubeRocketCI Deployment Diagram",src:n(363).A+"",width:"2586",height:"2013"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Codebase Operator:"})," Responsible for managing git repositories, versioning, and branching. It also implements Jira integration controller."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"CD Pipeline Operator:"})," Manages Continuous Delivery (CD) pipelines and CD stages (which is an abstraction of Kubernetes Namespace). Operator acts as the bridge between the artifact and deployment tools, like Argo CD. It defines the CD pipeline structure, artifacts promotion logic and triggers the pipeline execution."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tekton Pipelines:"})," Manages Tekton pipelines and processes events (EventListener, Interceptor) from Version Control Systems. The pipelines are integrated with external tools like SonarQube, Nexus, etc."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"KubeRocketCI:"})," This is the User Interface (UI) component, built on top of Headlamp."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Business applications"})," are deployed on the platform using the CD Pipeline Operator and Argo CD. By default, the CD Pipeline Operator uses Argo CD as a deployment tool. However, it can be replaced with any other tool, like FluxCD, Spinnaker, etc. The target environment for the application deployment is a Kubernetes cluster where KubeRocketCI is deployed, but it can be any other Kubernetes cluster."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},363:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/deployment-diagram-851033ed9be72097384bbbb2d38e3456.png"},43974:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/operator-pattern-approach-d3c4101a7343e0b7574f95fe25d50692.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);