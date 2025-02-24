"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[53793],{1424:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator-guide/disaster-recovery/velero-irsa","title":"IAM Roles for Velero Kubernetes Service Accounts","description":"Make sure that IRSA is enabled and amazon-eks-pod-identity-webhook is deployed according to the Associate IAM Roles With Service Accounts documentation.","source":"@site/docs/operator-guide/disaster-recovery/velero-irsa.md","sourceDirName":"operator-guide/disaster-recovery","slug":"/operator-guide/disaster-recovery/velero-irsa","permalink":"/docs/next/operator-guide/disaster-recovery/velero-irsa","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/disaster-recovery/velero-irsa.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Velero","permalink":"/docs/next/operator-guide/disaster-recovery/install-velero"},"next":{"title":"Restore KubeRocketCI Tenant With Velero","permalink":"/docs/next/operator-guide/disaster-recovery/velero-restore-platform"}}');var o=n(74848),s=n(28453);const i={},c="IAM Roles for Velero Kubernetes Service Accounts",a={},l=[{value:"Related Articles",id:"related-articles",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"iam-roles-for-velero-kubernetes-service-accounts",children:"IAM Roles for Velero Kubernetes Service Accounts"})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/disaster-recovery/velero-irsa/"})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["Make sure that IRSA is enabled and ",(0,o.jsx)(r.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master",children:"amazon-eks-pod-identity-webhook"})," is deployed according to the ",(0,o.jsx)(r.a,{href:"/docs/next/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})," documentation."]})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/vmware-tanzu/velero-plugin-for-aws",children:"Velero AWS plugin"})," requires access to AWS resources. Follow the steps below to create a required role:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Create AWS IAM Policy ",(0,o.jsx)(r.code,{children:"AWSIRSA<CLUSTER_NAME><VELERO_NAMESPACE>Velero_policy"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'  {\n      "Version": "2012-10-17",\n      "Statement": [\n          {\n              "Effect": "Allow",\n              "Action": [\n                  "ec2:DescribeVolumes",\n                  "ec2:DescribeSnapshots",\n                  "ec2:CreateTags",\n                  "ec2:CreateVolume",\n                  "ec2:CreateSnapshot",\n                  "ec2:DeleteSnapshot"\n              ],\n              "Resource": "*"\n          },\n          {\n              "Effect": "Allow",\n              "Action": [\n                  "s3:GetObject",\n                  "s3:DeleteObject",\n                  "s3:PutObject",\n                  "s3:AbortMultipartUpload",\n                  "s3:ListMultipartUploadParts"\n              ],\n              "Resource": [\n                  "arn:aws:s3:::velero-*/*"\n              ]\n          },\n          {\n              "Effect": "Allow",\n              "Action": [\n                  "s3:ListBucket"\n              ],\n              "Resource": [\n                  "arn:aws:s3:::velero-*"\n              ]\n          }\n      ]\n  }\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Create AWS IAM Role ",(0,o.jsx)(r.code,{children:"AWSIRSA<CLUSTER_NAME><VELERO_NAMESPACE>Velero"})," with trust relationships:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'  {\n    "Version": "2012-10-17",\n    "Statement": [\n      {\n        "Effect": "Allow",\n        "Principal": {\n          "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"\n        },\n        "Action": "sts:AssumeRoleWithWebIdentity",\n        "Condition": {\n          "StringEquals": {\n            "<OIDC_PROVIDER>:sub": "system:serviceaccount:<VELERO_NAMESPACE>:edp-velero"\n         }\n       }\n     }\n   ]\n  }\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Attach the ",(0,o.jsx)(r.code,{children:"AWSIRSA<CLUSTER_NAME><VELERO_NAMESPACE>Velero_policy"})," policy to the ",(0,o.jsx)(r.code,{children:"AWSIRSA<CLUSTER_NAME><VELERO_NAMESPACE>Velero"})," role."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Make sure that ",(0,o.jsx)(r.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"})," bucket with name ",(0,o.jsx)(r.code,{children:"velero-<CLUSTER_NAME>"})," exists."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Provide key value ",(0,o.jsxs)(r.strong,{children:['eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>',":role",'/AWSIRSA\u2039CLUSTER_NAME\u203a\u2039VELERO_NAMESPACE\u203aVelero"']})," into the ",(0,o.jsx)(r.strong,{children:"serviceAccount.server.annotations"})," parameter in ",(0,o.jsx)(r.em,{children:"values.yaml"})," during the ",(0,o.jsx)(r.a,{href:"/docs/next/operator-guide/disaster-recovery/install-velero#installation",children:"Velero Installation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/next/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/next/operator-guide/disaster-recovery/install-velero",children:"Install Velero"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);