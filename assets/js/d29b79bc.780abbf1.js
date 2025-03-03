"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[7645],{33970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling","title":"Efficient Kubernetes Autoscaling with Karpenter and KEDA: A Comprehensive Guide","description":"Step-by-step guide on configuring pod and cluster autoscaling in Kubernetes with Karpenter and KEDA for cost-effective, scalable, and efficient infrastructure.","source":"@site/versioned_docs/version-3.10/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling.md","sourceDirName":"operator-guide/kubernetes-cluster-scaling","slug":"/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling","permalink":"/docs/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Efficient Kubernetes Autoscaling with Karpenter and KEDA: A Comprehensive Guide","description":"Step-by-step guide on configuring pod and cluster autoscaling in Kubernetes with Karpenter and KEDA for cost-effective, scalable, and efficient infrastructure.","sidebar_label":"Scaling with Karpenter and KEDA"},"sidebar":"operatorGuideSidebar","previous":{"title":"Overview","permalink":"/docs/operator-guide/kubernetes-cluster-scaling/overview"},"next":{"title":"Install External Secrets Operator","permalink":"/docs/operator-guide/secrets-management/install-external-secrets-operator"}}');var t=s(74848),i=s(28453);const a={title:"Efficient Kubernetes Autoscaling with Karpenter and KEDA: A Comprehensive Guide",description:"Step-by-step guide on configuring pod and cluster autoscaling in Kubernetes with Karpenter and KEDA for cost-effective, scalable, and efficient infrastructure.",sidebar_label:"Scaling with Karpenter and KEDA"},l="Efficient Kubernetes Autoscaling with Karpenter and KEDA: A Comprehensive Guide",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Karpenter",id:"karpenter",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Install Karpenter",id:"install-karpenter",level:3},{value:"Install Karpenter Resources",id:"install-karpenter-resources",level:3},{value:"Verify Karpenter Functionality",id:"verify-karpenter-functionality",level:3},{value:"Keda",id:"keda",level:2},{value:"Install Keda",id:"install-keda",level:3},{value:"Install Keda Resources",id:"install-keda-resources",level:3},{value:"Verify Keda Functionality",id:"verify-keda-functionality",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"efficient-kubernetes-autoscaling-with-karpenter-and-keda-a-comprehensive-guide",children:"Efficient Kubernetes Autoscaling with Karpenter and KEDA: A Comprehensive Guide"})}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling"})}),"\n",(0,t.jsxs)(n.p,{children:["In modern cloud environments, efficient resource management is essential to maintain performance while minimizing costs. This documentation provides a step-by-step guide to configuring ",(0,t.jsx)(n.strong,{children:"pods and cluster autoscaling"})," in a Kubernetes environment using ",(0,t.jsx)(n.strong,{children:"Karpenter"})," and ",(0,t.jsx)(n.strong,{children:"KEDA"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Karpenter dynamically provisions and removes nodes based on real-time demand, ensuring that the cluster has just the right amount of capacity. KEDA, on the other hand, scales workloads by adjusting pod replicas based on key metrics, such as pipeline activity and user requests."}),"\n",(0,t.jsxs)(n.p,{children:["By implementing this approach, the cluster remains responsive to workload fluctuations, preventing over-provisioning and reducing unnecessary resource usage. This results in a ",(0,t.jsx)(n.strong,{children:"cost-effective, scalable, and efficient"})," infrastructure that adapts to real-time demands without manual intervention."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before setting up AutoScaling, ensure the following requirements are met:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/prometheus-operator",children:(0,t.jsx)(n.strong,{children:"Prometheus is installed"})})," and exporting cluster metrics."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/ingress-nginx",children:(0,t.jsx)(n.strong,{children:"Nginx Ingress is installed"})})," and configured to export its ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/ingress-nginx/values.yaml#L38",children:"metrics"})," to Prometheus."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"karpenter",children:"Karpenter"}),"\n",(0,t.jsx)(n.p,{children:"The configuration and installation of Karpenter involve several steps, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Setting up resources in the AWS provider"})," \u2013 configuring IAM roles, permissions, and networking."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Installing the Karpenter Helm chart"})," \u2013 deploying Karpenter controller in the Kubernetes cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configuring essential components"})," \u2013 setting up ",(0,t.jsx)(n.code,{children:"Node Pools"})," and ",(0,t.jsx)(n.code,{children:"Node Class"}),", and integrating with cluster resources."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"aws-configuration",children:"AWS Configuration"}),"\n",(0,t.jsx)(n.p,{children:"To ensure Karpenter can properly manage node provisioning, it is essential to configure AWS resources correctly. This includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Creating IAM roles and policies"})," \u2013 Karpenter requires specific permissions to provision and manage EC2 instances."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tagging VPC Subnets and Security Groups"})," \u2013 Karpenter uses these tags to determine which network subnets and security groups to apply when creating new nodes."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Karpenter does not use Auto Scaling Groups (ASG) when creating new nodes. Instead, it provisions EC2 instances directly and registers them with the cluster."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"IRSA Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To allow Karpenter to interact with AWS services securely, configure IAM Roles for Service Accounts (IRSA). This configuration can be done automatically during cluster installation using a ",(0,t.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/eks/irsa.tf#L143",children:"terraform-aws-platform"})," template or ",(0,t.jsx)(n.strong,{children:"manually"})," after the cluster is deployed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Network and Security Groups Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that the required tags are added to VPC ",(0,t.jsx)(n.code,{children:"subnets"})," and ",(0,t.jsx)(n.code,{children:"security group"})," so Karpenter can use them for provisioning new nodes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'module "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "5.1.2"\n\n  private_subnet_tags = merge(var.tags, tomap({ "karpenter.sh/discovery" = "${var.cluster_name}" }))\n  default_security_group_tags = merge(var.tags, tomap({ "karpenter.sh/discovery" = "${var.cluster_name}" }))\n  tags = var.tags\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This method will add tags to all private subnets created during cluster initialization. If your cluster operates in a single-subnet zone, you must manually add the required tags to the appropriate subnets, as Terraform does not support tagging individual subnets."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-karpenter",children:"Install Karpenter"}),"\n",(0,t.jsxs)(n.p,{children:["Install and configure Karpenter using the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/karpenter",children:"add-ons approach"})," or manually. Specify the controller role that was created in AWS, and configure ",(0,t.jsx)(n.strong,{children:"tolerations"})," and ",(0,t.jsx)(n.strong,{children:"nodeSelector"})," if necessary:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'karpenter:\n  # tolerations:\n  # - key: "type"\n  #   operator: "Equal"\n  #   value: "system"\n  #   effect: "NoSchedule"\n  # nodeSelector:\n  #   type: system\n\n  # -- Karpenter IAM role to manage cluster nodes\n  serviceAccount:\n    annotations:\n      eks.amazonaws.com/role-arn: arn:aws:iam::0123456789:role/KarpenterControllerRole-eks\n'})}),"\n",(0,t.jsx)(n.p,{children:"Since Karpenter is installed in a separate namespace, you need to update the configuration of its CRD used for Webhook Validation resources."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node Pools"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl patch crd nodepools.karpenter.sh --type=merge -p \'{\n  "spec": {\n    "conversion": {\n      "webhook": {\n        "clientConfig": {\n          "service": {\n            "namespace": "karpenter"\n          }\n        }\n      }\n    }\n  }\n}\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node Class"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl patch crd ec2nodeclasses.karpenter.k8s.aws --type=merge -p \'{\n  "spec": {\n    "conversion": {\n      "webhook": {\n        "clientConfig": {\n          "service": {\n            "namespace": "karpenter"\n          }\n        }\n      }\n    }\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"install-karpenter-resources",children:"Install Karpenter Resources"}),"\n",(0,t.jsx)(n.p,{children:"Karpenter uses its own custom resources to manage node provisioning logic in a Kubernetes cluster. Proper configuration and installation of these resources ensure system stability."}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to set up the ",(0,t.jsx)(n.strong,{children:"values"})," file. Here, you must specify:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"AMI"})," that will be used for nodes."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"cluster name"})," (also used in AWS resource tags)."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"instance settings"}),", such as instance types, limits, and constraints."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'karpenter:\n# -- AMI that used by nodes in EKS cluster\namiID: ami-XXXXXXXXXXXXXXXXX\n\n# -- EKS cluster name, must be the same as in Karpenter configuration\nclusterName: "eks"\n\ninstanceType:\n  category: ["m", "c", "r"]\n  family: ["m5", "c5", "r5"]\n  size: ["xlarge", "2xlarge", "4xlarge"]\n  type: ["on-demand", "spot"]\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"By default, Karpenter does not have a built-in mechanism to operate on a cron schedule. If your ASG uses scheduled scaling, keep in mind that once the node running Karpenter shuts down, the nodes it provisioned will remain active."}),(0,t.jsxs)(n.p,{children:["This Helm chart includes a custom feature that manages resources based on a schedule. To enable it, ",(0,t.jsx)(n.strong,{children:"turn on scheduling"})," and set the correct time."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'karpenter:\n  # Set the same as Karpenter configuration\n  # Used for cron job node assignment\n  tolerations: []\n  # - key: "type"\n  #   operator: "Equal"\n  #   value: "system"\n  #   effect: "NoSchedule"\n  nodeSelector: {}\n  #   type: system\n\n# -- This block enable CronJob to create and delete nodepool\ncronjob:\n  enabled: true\n  startTime: "00 9 * * *"\n  endTime: "00 18 * * *"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"verify-karpenter-functionality",children:"Verify Karpenter Functionality"}),"\n",(0,t.jsx)(n.p,{children:"To verify the functionality of Karpenter, you can create a pod and adjust the number of replicas in its configuration."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a deployment with the zero replicas:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: inflate\nspec:\n  replicas: 0\n  selector:\n    matchLabels:\n      app: inflate\n  template:\n    metadata:\n      labels:\n        app: inflate\n    spec:\n      terminationGracePeriodSeconds: 0\n      securityContext:\n        runAsUser: 1000\n        runAsGroup: 3000\n        fsGroup: 2000\n      containers:\n      - name: inflate\n        image: public.ecr.aws/eks-distro/kubernetes/pause:3.7\n        resources:\n          requests:\n            cpu: 1\n        securityContext:\n          allowPrivilegeEscalation: false\nEOF\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scale the deployment to 5 replicas to see how Karpenter responds:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl scale deployment inflate --replicas 5\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check Karpenter logs to confirm it is provisioning nodes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl logs -f -n karpenter -l app.kubernetes.io/name=karpenter -c controller\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clean up resources after testing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl delete deployment inflate\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keda",children:"Keda"}),"\n",(0,t.jsx)(n.p,{children:"The configuration and installation of Keda involve several steps, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Installing the Keda Helm chart"})," \u2013 deploying Keda controller in the Kubernetes cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configuring essential components"})," \u2013 setting up ",(0,t.jsx)(n.code,{children:"Scaled Object"}),", and integrating with cluster resources."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-keda",children:"Install Keda"}),"\n",(0,t.jsxs)(n.p,{children:["Install and configure Keda using the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/keda",children:"add-ons approach"})," or manually. Specify ",(0,t.jsx)(n.strong,{children:"tolerations"})," and ",(0,t.jsx)(n.strong,{children:"nodeSelector"})," if necessary:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'keda:\n  # tolerations:\n  # - key: "type"\n  #   operator: "Equal"\n  #   value: "system"\n  #   effect: "NoSchedule"\n  # nodeSelector:\n  #   type: system\n'})}),"\n",(0,t.jsx)(n.h3,{id:"install-keda-resources",children:"Install Keda Resources"}),"\n",(0,t.jsxs)(n.p,{children:["KEDA operates based on configurations stored in its Custom Resources. It supports multiple data sources to determine the appropriate number of replicas for a deployment. In this setup, the scaling decisions are based on ",(0,t.jsx)(n.strong,{children:"Prometheus metrics"}),", which have been selected based on the behavior of the KRCI platform."]}),"\n",(0,t.jsx)(n.p,{children:"Below are the key metrics used for scaling analysis:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Number of created pods in the last N minutes"})," (excluding cron jobs for old pipeline cleanup). This metric ensures the platform remains active if users are continuously running pipelines."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Number of HTTP requests to the KRCI portal in the last N minutes"}),", indicating user activity on the platform."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These metrics help maintain an optimal balance between performance and resource efficiency."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install and configure Keda-tenant using the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/keda-tenants",children:"add-ons approach"})," or manually."]}),"\n",(0,t.jsxs)(n.p,{children:["Before installing, ensure that you have set the correct values in the ",(0,t.jsx)(n.strong,{children:"KEDA Tenants"})," configuration. The following parameters should be customized according to your setup:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"namespaces"})})," \u2013 List of namespaces where the KRCI platform is installed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"timeInterval"})})," \u2013 Idle time after which the platform will automatically scale down to ",(0,t.jsx)(n.strong,{children:"0 replicas"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"gitProviders"})})," \u2013 List of Git providers configured to work with the platform (this list must match the configuration set during the installation of the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/master/deploy-templates/values.yaml#L26",children:(0,t.jsx)(n.code,{children:"edp-install"})})," Helm chart)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below are the key parameters for configuring the KEDA Tenants Helm chart:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"kedaTenants:\n  # -- This value specifies the namespaces where KubeRocketCI deployed.\n  namespaces:\n  - krci\n# -- Interval in seconds to scale resources.\ntimeInterval: '7200'\n\n# -- This parameter specifies which Git servers are installed in KubeRocketCI.\n# -- https://github.com/epam/edp-install/blob/master/deploy-templates/values.yaml#L2\ngitProviders:\n  - github\n  # - gitlab\n  # - bitbucket\n  # - gerrit\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"verify-keda-functionality",children:"Verify Keda Functionality"}),"\n",(0,t.jsx)(n.p,{children:"Steps to Verify"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Access Prometheus"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.strong,{children:"Ingress"})," or ",(0,t.jsx)(n.strong,{children:"port-forwarding"})," to access the Prometheus UI:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Expected Results"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the metric values are ",(0,t.jsx)(n.strong,{children:"greater than 0"}),", KEDA will keep the deployments running."]}),"\n",(0,t.jsxs)(n.li,{children:["If the metric values drop ",(0,t.jsx)(n.strong,{children:"below 0"}),", KEDA will scale the deployments down to ",(0,t.jsx)(n.strong,{children:"0 replicas"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"This image"})," shows a query for the number of new nodes."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture diagram",src:s(79235).A+"",title:"Architecture diagram",width:"1919",height:"1038"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"This image"})," shows a query for the number of new requests."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture diagram",src:s(8171).A+"",title:"Architecture diagram",width:"1918",height:"1037"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By following the steps in this documentation, we have set up a flexible cluster configuration that dynamically adjusts computing resources based on the current workload."}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.strong,{children:"Karpenter"}),", the cluster automatically scales nodes when additional capacity is needed and removes unused ones when the load decreases.\nWith ",(0,t.jsx)(n.strong,{children:"KEDA"}),", workloads scale up or down based on real-time metrics, ensuring efficient resource utilization."]}),"\n",(0,t.jsxs)(n.p,{children:["This approach helps maintain ",(0,t.jsx)(n.strong,{children:"high performance"}),", ",(0,t.jsx)(n.strong,{children:"cost efficiency"}),", and ",(0,t.jsx)(n.strong,{children:"automatic resource management"})," without manual intervention."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},79235:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/prom-pods-f808b371dd12fd28054daf4731230843.png"},8171:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/prom-protal-b4e36f3e124c7ac977248746154f760b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);