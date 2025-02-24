"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[43282],{96620:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"api/cd-pipeline","title":"CD Pipeline Operator API","description":"Packages:","source":"@site/versioned_docs/version-3.10/api/cd-pipeline.md","sourceDirName":"api","slug":"/api/cd-pipeline","permalink":"/docs/api/cd-pipeline","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/api/cd-pipeline.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739969251000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Introduction","permalink":"/docs/api/overview"},"next":{"title":"Codebase Operator API","permalink":"/docs/api/codebase"}}');var d=r(74848),n=r(28453);const t={},l="CD Pipeline Operator API",c={},h=[{value:"v2.edp.epam.com/v1",id:"v2edpepamcomv1",level:2},{value:"CDPipeline",id:"cdpipeline",level:2},{value:"CDPipeline.spec",id:"cdpipelinespec",level:3},{value:"CDPipeline.status",id:"cdpipelinestatus",level:3},{value:"Stage",id:"stage",level:2},{value:"Stage.spec",id:"stagespec",level:3},{value:"Stage.spec.qualityGates[index]",id:"stagespecqualitygatesindex",level:3},{value:"Stage.spec.source",id:"stagespecsource",level:3},{value:"Stage.spec.source.library",id:"stagespecsourcelibrary",level:3},{value:"Stage.status",id:"stagestatus",level:3}];function j(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"cd-pipeline-operator-api",children:"CD Pipeline Operator API"})}),"\n",(0,d.jsx)(s.p,{children:"Packages:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#v2edpepamcomv1",children:"v2.edp.epam.com/v1"})}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"v2edpepamcomv1",children:"v2.edp.epam.com/v1"}),"\n",(0,d.jsx)(s.p,{children:"Resource Types:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"#cdpipeline",children:"CDPipeline"})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"#stage",children:"Stage"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"cdpipeline",children:"CDPipeline"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#v2edpepamcomv1",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"CDPipeline is the Schema for the cdpipelines API."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"apiVersion"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:"v2.edp.epam.com/v1"}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"kind"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:"CDPipeline"}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta",children:"metadata"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsxs)("td",{children:["Refer to the Kubernetes API documentation for the fields of the ",(0,d.jsx)(s.code,{children:"metadata"})," field."]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#cdpipelinespec",children:"spec"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["CDPipelineSpec defines the desired state of CDPipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#cdpipelinestatus",children:"status"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["CDPipelineStatus defines the observed state of CDPipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"cdpipelinespec",children:"CDPipeline.spec"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#cdpipeline",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"CDPipelineSpec defines the desired state of CDPipeline."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"applications"})}),(0,d.jsx)("td",{children:"[]string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A list of applications included in CDPipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"deploymentType"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Type of workload to be deployed, e.g., container, custom.",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Default"}),": container",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"inputDockerStreams"})}),(0,d.jsx)("td",{children:"[]string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A list of docker streams",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"name"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Name of CD pipeline",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"applicationsToPromote"})}),(0,d.jsx)("td",{children:"[]string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A list of applications which will promote after successful release.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"description"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Description of CD pipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"cdpipelinestatus",children:"CDPipeline.status"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#cdpipeline",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"CDPipelineStatus defines the observed state of CDPipeline."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"action"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["The last Action was performed.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"available"})}),(0,d.jsx)("td",{children:"boolean"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["This flag indicates neither CDPipeline are initialized and ready to work. Defaults to false.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"last_time_updated"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Information when the last time the action were performed.",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Format"}),": date-time",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"result"})}),(0,d.jsx)("td",{children:"enum"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.p,{children:"A result of an action which were performed."}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:'"success": action where performed successfully;'}),"\n",(0,d.jsxs)(s.li,{children:['"error": error has occurred;',(0,d.jsx)("br",{})]}),"\n"]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Enum"}),": success, error",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"status"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Specifies a current status of CDPipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"username"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Name of user who made a last change.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"value"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Specifies a current state of CDPipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"detailed_message"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Detailed information regarding action result\nwhich were performed",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"stage",children:"Stage"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#v2edpepamcomv1",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"Stage is the Schema for the stages API."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"apiVersion"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:"v2.edp.epam.com/v1"}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"kind"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:"Stage"}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta",children:"metadata"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsxs)("td",{children:["Refer to the Kubernetes API documentation for the fields of the ",(0,d.jsx)(s.code,{children:"metadata"})," field."]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#stagespec",children:"spec"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["StageSpec defines the desired state of Stage.\nNOTE: for deleting the stage use stages order - delete only the latest stage.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#stagestatus",children:"status"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["StageStatus defines the observed state of Stage.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"stagespec",children:"Stage.spec"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#stage",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"StageSpec defines the desired state of Stage.\nNOTE: for deleting the stage use stages order - delete only the latest stage."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"cdPipeline"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Name of CD pipeline which this Stage will be linked to.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"description"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A description of a stage.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"name"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Name of a stage.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"namespace"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Namespace where the application will be deployed.",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Validations"}),":",(0,d.jsx)("li",{children:"self == oldSelf: Value is immutable"})]})]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"order"})}),(0,d.jsx)("td",{children:"integer"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["The order to lay out Stages.\nThe order should start from 0, and the next stages should use +1 for the order.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#stagespecqualitygatesindex",children:"qualityGates"})})}),(0,d.jsx)("td",{children:"[]object"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A list of quality gates to be processed",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"cleanTemplate"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["CleanTemplate specifies the name of Tekton TriggerTemplate used for cleanup environment pipeline.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"clusterName"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:['Specifies a name of cluster where the application will be deployed.\nDefault value is "in-cluster" which means that application will be deployed in the same cluster where CD Pipeline is running.',(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Default"}),": in-cluster",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#stagespecsource",children:"source"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Specifies a source of a pipeline library which will run release",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Default"}),": map[type",":default","]",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"triggerTemplate"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:['Specifies a name of Tekton TriggerTemplate used as a blueprint for deployment pipeline.\nDefault value is "deploy" which means that default TriggerTemplate will be used.\nThe default TriggerTemplate is delivered using edp-tekton helm chart.',(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Default"}),": deploy",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"triggerType"})}),(0,d.jsx)("td",{children:"enum"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Stage deployment trigger type.",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Enum"}),": Auto, Manual, Auto-stable",(0,d.jsx)("br",{}),"\n",(0,d.jsx)("i",{children:"Default"}),": Manual",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"stagespecqualitygatesindex",children:"Stage.spec.qualityGates[index]"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#stagespec",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"QualityGate defines a single quality for a release."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"qualityGateType"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:['A type of quality gate, e.g. "Manual", "Autotests"',(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"stepName"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Specifies a name of particular",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"autotestName"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A name of autotests to run with quality gate",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"branchName"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A branch name to use from autotests repository",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"stagespecsource",children:"Stage.spec.source"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#stagespec",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"Specifies a source of a pipeline library which will run release"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:(0,d.jsx)("a",{href:"#stagespecsourcelibrary",children:"library"})})}),(0,d.jsx)("td",{children:"object"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A reference to a non default source library",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"type"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Type of pipeline library, e.g. default, library",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Default"}),": default",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"stagespecsourcelibrary",children:"Stage.spec.source.library"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#stagespecsource",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"A reference to a non default source library"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"branch"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Branch which should be used for a library",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"name"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["A name of a library",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"stagestatus",children:"Stage.status"}),"\n",(0,d.jsx)("sup",{children:(0,d.jsx)("sup",{children:(0,d.jsx)(s.a,{href:"#stage",children:"\u21a9 Parent"})})}),"\n",(0,d.jsx)(s.p,{children:"StageStatus defines the observed state of Stage."}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Required"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"action"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["The last Action was performed.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"available"})}),(0,d.jsx)("td",{children:"boolean"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["This flag indicates neither Stage are initialized and ready to work. Defaults to false.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"last_time_updated"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(s.p,{children:["Information when  the last time the action were performed.",(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Format"}),": date-time",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"result"})}),(0,d.jsx)("td",{children:"enum"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.p,{children:"A result of an action which were performed."}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:'"success": action where performed successfully;'}),"\n",(0,d.jsxs)(s.li,{children:['"error": error has occurred;',(0,d.jsx)("br",{})]}),"\n"]}),(0,d.jsx)("br",{}),(0,d.jsxs)(s.p,{children:[(0,d.jsx)("i",{children:"Enum"}),": success, error",(0,d.jsx)("br",{})]})]}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"status"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Specifies a current status of Stage.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"username"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Name of user who made a last change.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"value"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Specifies a current state of Stage.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"true"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"detailed_message"})}),(0,d.jsx)("td",{children:"string"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Detailed information regarding action result\nwhich were performed",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"shouldBeHandled"})}),(0,d.jsx)("td",{children:"boolean"}),(0,d.jsx)("td",{children:(0,d.jsxs)(s.p,{children:["Should update of status be handled. Defaults to false.",(0,d.jsx)("br",{})]})}),(0,d.jsx)("td",{children:"false"})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>l});var i=r(96540);const d={},n=i.createContext(d);function t(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);