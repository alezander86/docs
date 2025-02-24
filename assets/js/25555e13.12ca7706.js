"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[72452],{31625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.1","title":"Upgrade EDP v3.0 to 3.1","description":"We suggest making a backup of the EDP environment before starting the upgrade procedure.","source":"@site/versioned_docs/version-3.10/operator-guide/upgrade/upgrade-edp-3.1.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.1","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.1","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.1.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade EDP v3.1 to 3.2","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.2"},"next":{"title":"Upgrade EDP v2.12 to 3.0","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.0"}}');var o=r(74848),a=r(28453);const d={},s="Upgrade EDP v3.0 to 3.1",p={},i=[];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"upgrade-edp-v30-to-31",children:"Upgrade EDP v3.0 to 3.1"})}),"\n",(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.1/"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"We suggest making a backup of the EDP environment before starting the upgrade procedure."})}),"\n",(0,o.jsx)(t.p,{children:"This section provides the details on the EDP upgrade to v3.1. Explore the actions and requirements below."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.13.2/deploy-templates/crds/v2.edp.epam.com_jenkins.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.13.4/deploy-templates/crds/v2.edp.epam.com_gerrits.yaml\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"To upgrade EDP to the v3.1, run the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"  helm upgrade edp epamedp/edp-install -n <edp-namespace> --values values.yaml --version=3.1.0\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the following command:",(0,o.jsx)("br",{})]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n <edp-namespace> --values values.yaml --version=3.1.0  --dry-run\n"})}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>s});var n=r(96540);const o={},a=n.createContext(o);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);