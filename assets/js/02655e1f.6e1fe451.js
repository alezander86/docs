"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[41037],{59e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"operator-guide/secrets-management/install-external-secrets-operator","title":"Install External Secrets Operator","description":"Inspect the prerequisites and the main steps to perform for enabling External Secrets Operator in KubeRocketCI.","source":"@site/versioned_docs/version-3.9/operator-guide/secrets-management/install-external-secrets-operator.md","sourceDirName":"operator-guide/secrets-management","slug":"/operator-guide/secrets-management/install-external-secrets-operator","permalink":"/docs/3.9/operator-guide/secrets-management/install-external-secrets-operator","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/secrets-management/install-external-secrets-operator.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Scaling with Karpenter and KEDA","permalink":"/docs/3.9/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling"},"next":{"title":"External Secrets Operator Integration","permalink":"/docs/3.9/operator-guide/secrets-management/external-secrets-operator-integration"}}');var s=r(74848),a=r(28453);const o={},i="Install External Secrets Operator",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"install-external-secrets-operator",children:"Install External Secrets Operator"})}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/secrets-management/install-external-secrets-operator/"})}),"\n",(0,s.jsxs)(t.p,{children:["Inspect the prerequisites and the main steps to perform for enabling ",(0,s.jsx)(t.a,{href:"https://external-secrets.io/",children:"External Secrets Operator"})," in KubeRocketCI."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Kubectl version 1.26.0+ is installed. Please refer to the ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,s.jsx)(t.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["To install ",(0,s.jsx)(t.code,{children:"External Secrets Operator"})," with Helm, run the following commands:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"helm repo add external-secrets https://charts.external-secrets.io\n\nhelm install external-secrets \\\n   external-secrets/external-secrets \\\n    --version 0.9.9 \\\n    -n external-secrets \\\n    --create-namespace\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["It is also possible to install External Secrets Operator using the ",(0,s.jsx)(t.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"Cluster Add-Ons"})," or ",(0,s.jsx)(t.a,{href:"https://operatorhub.io/operator/external-secrets-operator",children:"Operator Lifecycle Manager (OLM)"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/3.9/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);