"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[13158],{94423:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"operator-guide/monitoring-and-observability/install-loki","title":"Install Grafana Loki","description":"KubeRocketCI configures the logging with the help of Grafana Loki aggregation system.","source":"@site/docs/operator-guide/monitoring-and-observability/install-loki.md","sourceDirName":"operator-guide/monitoring-and-observability","slug":"/operator-guide/monitoring-and-observability/install-loki","permalink":"/docs/next/operator-guide/monitoring-and-observability/install-loki","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/monitoring-and-observability/install-loki.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Integrate DefectDojo","permalink":"/docs/next/operator-guide/devsecops/defectdojo"},"next":{"title":"IAM Roles for Loki Service Accounts","permalink":"/docs/next/operator-guide/monitoring-and-observability/loki-irsa"}}');var t=o(74848),a=o(28453);const s={},r="Install Grafana Loki",l={},c=[{value:"Installation",id:"installation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:o,Head:i}=n;return o||p("Details",!0),i||p("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-grafana-loki",children:"Install Grafana Loki"})}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/monitoring-and-observability/install-loki/"})}),"\n",(0,t.jsxs)(n.p,{children:["KubeRocketCI configures the logging with the help of ",(0,t.jsx)(n.a,{href:"https://grafana.com/oss/loki/",children:"Grafana Loki"})," aggregation system."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install Loki, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.strong,{children:"logging"})," namespace:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace logging\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add grafana https://grafana.github.io/helm-charts\nhelm repo update\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is possible to use Amazon Simple Storage Service ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"})," as an object storage for Loki.\nTo configure access, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/monitoring-and-observability/loki-irsa",children:"IRSA for Loki"})," documentation."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.strong,{children:"Loki v.2.6.0"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install loki grafana/loki \\\n  --version 2.6.0 \\\n  --values values.yaml \\\n  --namespace logging\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the Loki customization:"]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'image:\n  repository: grafana/loki\n  tag: 2.3.0\nconfig:\n  auth_enabled: false\n  schema_config:\n    configs:\n    - from: 2021-06-01\n      store: boltdb-shipper\n      object_store: s3\n      schema: v11\n      index:\n        prefix: loki_index_\n        period: 24h\n  storage_config:\n    aws:\n      s3: s3://<AWS_REGION>/loki-<CLUSTER_NAME>\n    boltdb_shipper:\n      active_index_directory: /data/loki/index\n      cache_location: /data/loki/boltdb-cache\n      shared_store: s3\n  chunk_store_config:\n    max_look_back_period: 24h\nresources:\n  limits:\n    memory: "128Mi"\n  requests:\n    cpu: "50m"\n    memory: "128Mi"\nserviceAccount:\n  create: true\n  name: edp-loki\n  annotations:\n    eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>:role/AWSIRSA\u2039CLUSTER_NAME\u203a\u2039LOKI_NAMESPACE\u203aLoki\npersistence:\n  enabled: false\n'})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html",children:"custom bucket policy"})," to delete the old data."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var i=o(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);