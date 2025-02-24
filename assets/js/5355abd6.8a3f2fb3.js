"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[686],{6978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"operator-guide/project-management-and-reporting/install-reportportal","title":"Install ReportPortal","description":"Inspect the prerequisites and the main steps to perform for installing ReportPortal.","source":"@site/docs/operator-guide/project-management-and-reporting/install-reportportal.md","sourceDirName":"operator-guide/project-management-and-reporting","slug":"/operator-guide/project-management-and-reporting/install-reportportal","permalink":"/docs/next/operator-guide/project-management-and-reporting/install-reportportal","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/project-management-and-reporting/install-reportportal.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1738923070000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Jira Integration","permalink":"/docs/next/operator-guide/project-management-and-reporting/jira-integration"},"next":{"title":"Integrating ReportPortal with Keycloak: A Step-by-Step Guide","permalink":"/docs/next/operator-guide/project-management-and-reporting/reportportal-keycloak"}}');var t=r(74848),a=r(28453);const l={},i="Install ReportPortal",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"MinIO Installation",id:"minio-installation",level:2},{value:"RabbitMQ Installation",id:"rabbitmq-installation",level:2},{value:"Elasticsearch Installation",id:"elasticsearch-installation",level:2},{value:"PostgreSQL Installation",id:"postgresql-installation",level:2},{value:"ReportPortal Installation",id:"reportportal-installation",level:2},{value:"Related Articles",id:"related-articles",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:r,Head:s}=n;return r||h("Details",!0),s||h("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-reportportal",children:"Install ReportPortal"})}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/project-management-and-reporting/install-reportportal/"})}),"\n",(0,t.jsx)(n.p,{children:"Inspect the prerequisites and the main steps to perform for installing ReportPortal."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kubectl version 1.29.0+ is installed. Please refer to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/kubernetes/tree/develop/reportportal",children:"ReportPortal Helm Chart"})," section for details."]})}),"\n",(0,t.jsx)(n.h2,{id:"minio-installation",children:"MinIO Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install MinIO, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check that ",(0,t.jsx)(n.code,{children:"edp"})," namespace is created. If not, run the following command to create it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace edp\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"For the OpenShift users",type:"warning",children:(0,t.jsxs)(n.p,{children:["When using the OpenShift platform, install the ",(0,t.jsx)(n.code,{children:"SecurityContextConstraints"})," resources.",(0,t.jsx)("br",{}),"\nIn case of using a custom namespace for the ",(0,t.jsx)(n.code,{children:"reportportal"}),", change the namespace in the ",(0,t.jsx)(n.code,{children:"users"})," section."]})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: report-portal-third-party-resources-scc.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: security.openshift.io/v1\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n    "helm.sh/hook": "pre-install"\n  name: report-portal-minio-rabbitmq-postgresql\nallowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegeEscalation: true\nallowPrivilegedContainer: false\nallowedCapabilities: null\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - min: 999\n      max: 65543\ngroups: []\npriority: 1\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities:\n  - KILL\n  - MKNOD\n  - SETUID\n  - SETGID\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMin: 1\n  uidRangeMax: 65543\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nusers:\n  - system:serviceaccount:report-portal:minio\n  - system:serviceaccount:report-portal:rabbitmq\n  - system:serviceaccount:report-portal:postgresql\nvolumes:\n  - configMap\n  - downwardAPI\n  - emptyDir\n  - persistentVolumeClaim\n  - projected\n  - secret\n'})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: report-portal-elasticsearch-scc.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: security.openshift.io/v1\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n    "helm.sh/hook": "pre-install"\n  name: report-portal-elasticsearch\nallowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegedContainer: true\nallowedCapabilities: []\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - max: 1000\n      min: 1000\ngroups: []\npriority: 0\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities: []\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMax: 1000\n  uidRangeMin: 0\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nusers:\n  - system:serviceaccount:report-portal:elasticsearch-master\nvolumes:\n  - configMap\n  - downwardAPI\n  - emptyDir\n  - persistentVolumeClaim\n  - projected\n  - secret\n'})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create MinIO admin secret:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp create secret generic reportportal-minio-creds \\\n--from-literal=root-password=<root_password> \\\n--from-literal=root-user=<root_user>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install MinIO v.11.10.3 using ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/bitnami/minio",children:"bitnami/minio"})," Helm chart v.11.10.3:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install minio bitnami/minio \\\n--version 11.10.3 \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the MinIO customization:"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"auth:\n  existingSecret: reportportal-minio-creds\npersistence:\n  size: 1Gi\n"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rabbitmq-installation",children:"RabbitMQ Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install RabbitMQ, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"edp"})," namespace from the MinIO installation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"bitnami"})," chart repository from the MinIO installation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create RabbitMQ admin secret:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp create secret generic reportportal-rabbitmq-creds \\\n--from-literal=rabbitmq-password=<rabbitmq_password> \\\n--from-literal=rabbitmq-erlang-cookie=<rabbitmq_erlang_cookie>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"rabbitmq_password"})," password must be 10 characters long.",(0,t.jsx)("br",{}),"\nThe ",(0,t.jsx)(n.code,{children:"rabbitmq_erlang_cookie"})," password must be 32 characters long."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install RabbitMQ v.10.3.8 using ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/bitnami/rabbitmq",children:"bitnami/rabbitmq"})," Helm chart v.10.3.8:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install rabbitmq bitnami/rabbitmq \\\n--version 10.3.8 \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the RabbitMQ customization:"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"auth:\n  existingPasswordSecret: reportportal-rabbitmq-creds\n  existingErlangSecret: reportportal-rabbitmq-creds\npersistence:\n  size: 1Gi\n"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After the rabbitmq pod gets the status Running, you need to configure the RabbitMQ memory threshold"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp exec -it rabbitmq-0 -- rabbitmqctl set_vm_memory_high_watermark 0.8\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"elasticsearch-installation",children:"Elasticsearch Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install Elasticsearch, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"edp"})," namespace from the MinIO installation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add elastic https://helm.elastic.co\nhelm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install Elasticsearch v.7.17.3 using ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/elastic/elasticsearch",children:"elastic/elasticsearch"})," Helm chart v.7.17.3:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install elasticsearch elastic/elasticsearch \\\n--version 7.17.3 \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the Elasticsearch customization:"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'replicas: 1\n\nextraEnvs:\n  - name: discovery.type\n    value: single-node\n  - name: cluster.initial_master_nodes\n    value: ""\n\nrbac:\n  create: true\n\nresources:\n  requests:\n    cpu: "100m"\n    memory: "2Gi"\n\nvolumeClaimTemplate:\n  resources:\n    requests:\n      storage: 3Gi\n'})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"postgresql-installation",children:"PostgreSQL Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install PostgreSQL, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"edp"})," namespace from the MinIO installation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add bitnami-archive https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami\nhelm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create PostgreSQL admin secret:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp create secret generic reportportal-postgresql-creds \\\n--from-literal=postgresql-password=<postgresql_password> \\\n--from-literal=postgresql-postgres-password=<postgresql_postgres_password>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"postgresql_password"})," and ",(0,t.jsx)(n.code,{children:"postgresql_postgres_password"})," passwords must be 16 characters long."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install PostgreSQL v.10.9.4 using Helm chart v.10.9.4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install postgresql bitnami-archive/postgresql \\\n--version 10.9.4 \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the PostgreSQL customization:"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'persistence:\n  size: 1Gi\nresources:\n  requests:\n    cpu: "100m"\nserviceAccount:\n  enabled: true\npostgresqlUsername: "rpuser"\npostgresqlDatabase: "reportportal"\nexistingSecret: "reportportal-postgresql-creds"\ninitdbScripts:\n  init_postgres.sh: |\n    #!/bin/sh\n    /opt/bitnami/postgresql/bin/psql -U postgres -d ${POSTGRES_DB} -c \'CREATE EXTENSION IF NOT EXISTS ltree; CREATE EXTENSION IF NOT EXISTS pgcrypto; CREATE EXTENSION IF NOT EXISTS pg_trgm;\'\n'})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reportportal-installation",children:"ReportPortal Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install ReportPortal, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"edp"})," namespace from the MinIO installation."]}),"\n",(0,t.jsx)(n.admonition,{title:"For the OpenShift users",type:"warning",children:(0,t.jsxs)(n.p,{children:["When using the OpenShift platform, install the ",(0,t.jsx)(n.code,{children:"SecurityContextConstraints"})," resource.",(0,t.jsx)("br",{}),"\nIn case of using a custom namespace for the ",(0,t.jsx)(n.code,{children:"reportportal"}),", change the namespace in the ",(0,t.jsx)(n.code,{children:"users"})," section."]})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: report-portal-reportportal-scc.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: security.openshift.io/v1\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n    "helm.sh/hook": "pre-install"\n  name: report-portal\nallowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegedContainer: true\nallowedCapabilities: []\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - max: 1000\n      min: 1000\ngroups: []\npriority: 0\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities: []\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMax: 1000\n  uidRangeMin: 0\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nusers:\n  - system:serviceaccount:report-portal:reportportal\nvolumes:\n  - configMap\n  - downwardAPI\n  - emptyDir\n  - persistentVolumeClaim\n  - projected\n  - secret\n'})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm repo add report-portal "https://reportportal.github.io/kubernetes"\nhelm repo update\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install ReportPortal v.5.8.0 using Helm chart v.5.8.0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install report-portal report-portal/reportportal \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the ReportPortal customization:"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'serviceindex:\n  resources:\n    requests:\n      cpu: 50m\nuat:\n  resources:\n    requests:\n      cpu: 50m\nserviceui:\n  resources:\n    requests:\n      cpu: 50m\n  serviceAccountName: "reportportal"\n  securityContext:\n    runAsUser: 0\nserviceapi:\n  resources:\n    requests:\n      cpu: 50m\nserviceanalyzer:\n  resources:\n    requests:\n      cpu: 50m\nserviceanalyzertrain:\n  resources:\n    requests:\n      cpu: 50m\n\nrabbitmq:\n  SecretName: "reportportal-rabbitmq-creds"\n  endpoint:\n    address: rabbitmq.<EDP_PROJECT>.svc.cluster.local\n    user: user\n    apiuser: user\n\npostgresql:\n  SecretName: "reportportal-postgresql-creds"\n  endpoint:\n    address: postgresql.<EDP_PROJECT>.svc.cluster.local\n\nelasticsearch:\nendpoint: http://elasticsearch-master.<EDP_PROJECT>.svc.cluster.local:9200\n\nminio:\n  secretName: "reportportal-minio-creds"\n  endpoint: http://minio.<EDP_PROJECT>.svc.cluster.local:9000\n  endpointshort: minio.<EDP_PROJECT>.svc.cluster.local:9000\n  accesskeyName: "root-user"\n  secretkeyName: "root-password"\n\ningress:\n  # IF YOU HAVE SOME DOMAIN NAME SET INGRESS.USEDOMAINNAME to true\n  usedomainname: true\n  hosts:\n    - report-portal-<EDP_PROJECT>.<ROOT_DOMAIN>\n'})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For the OpenShift platform, install a Gateway with Route:"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: gateway-config-cm.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: ConfigMap\nmetadata:\n  name: gateway-config\n  namespace: report-portal\napiVersion: v1\ndata:\n  traefik-dynamic-config.yml: |\n    http:\n        middlewares:\n          strip-ui:\n            stripPrefix:\n              prefixes:\n                - "/ui"\n              forceSlash: false\n          strip-api:\n            stripPrefix:\n              prefixes:\n                - "/api"\n              forceSlash: false\n          strip-uat:\n            stripPrefix:\n              prefixes:\n                - "/uat"\n              forceSlash: false\n\n        routers:\n          index-router:\n            rule: "Path(`/`)"\n            service: "index"\n          ui-router:\n            rule: "PathPrefix(`/ui`)"\n            middlewares:\n            - strip-ui\n            service: "ui"\n          uat-router:\n            rule: "PathPrefix(`/uat`)"\n            middlewares:\n            - strip-uat\n            service: "uat"\n          api-router:\n            rule: "PathPrefix(`/api`)"\n            middlewares:\n            - strip-api\n            service: "api"\n\n        services:\n          uat:\n            loadBalancer:\n              servers:\n              - url: "http://report-portal-reportportal-uat:9999/"\n\n          index:\n            loadBalancer:\n              servers:\n              - url: "http://report-portal-reportportal-index:8080/"\n\n          api:\n            loadBalancer:\n              servers:\n              - url: "http://report-portal-reportportal-api:8585/"\n\n          ui:\n            loadBalancer:\n              servers:\n              - url: "http://report-portal-reportportal-ui:8080/"\n  traefik.yml: |\n    entryPoints:\n      http:\n      address: ":8081"\n      metrics:\n      address: ":8082"\n\n    metrics:\n      prometheus:\n        entryPoint: metrics\n        addEntryPointsLabels: true\n        addServicesLabels: true\n        buckets:\n          - 0.1\n          - 0.3\n          - 1.2\n          - 5.0\n    providers:\n      file:\n        filename: /etc/traefik/traefik-dynamic-config.yml\n'})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: gateway-deployment.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: reportportal\n  name: gateway\n  namespace: report-portal\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      component: gateway\n  template:\n    metadata:\n      labels:\n        component: gateway\n    spec:\n      containers:\n        - image: quay.io/waynesun09/traefik:2.3.6\n          name: traefik\n          ports:\n            - containerPort: 8080\n              protocol: TCP\n          resources: {}\n          volumeMounts:\n            - mountPath: /etc/traefik/\n              name: config\n              readOnly: true\n      volumes:\n        - name: config\n          configMap:\n            defaultMode: 420\n            name: gateway-config\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: gateway-route.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: Route\napiVersion: route.openshift.io/v1\nmetadata:\n  labels:\n    app: reportportal\n  name: reportportal\n  namespace: report-portal\nspec:\n  host: report-portal.<CLUSTER_DOMAIN>\n  port:\n    targetPort: http\n  tls:\n    insecureEdgeTerminationPolicy: Redirect\n    termination: edge\n  to:\n    kind: Service\n    name: gateway\n    weight: 100\n  wildcardPolicy: None\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: gateway-service.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: reportportal\n    component: gateway\n  name: gateway\n  namespace: report-portal\nspec:\n  ports:\n    # use 8081 to allow for usage of the dashboard which is on port 8080\n    - name: http\n      port: 8081\n      protocol: TCP\n      targetPort: 8081\n  selector:\n    component:  gateway\n  sessionAffinity: None\n  type: ClusterIP\n"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For user access: default/1q2w3e",(0,t.jsx)("br",{}),"\nFor admin access: superadmin/erebus",(0,t.jsx)("br",{}),"\nPlease refer to the ",(0,t.jsx)(n.a,{href:"https://reportportal.io/installation/",children:"ReportPortal.io"})," page for details."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is also possible to install ReportPortal via cluster add-ons. For details, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/aws-marketplace-install",children:"Install via AWS Marketplace"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/install-via-civo",children:"Install via Civo Marketplace"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);