"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[49091],{84161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton","title":"Migrate CI Pipelines From Jenkins to Tekton","description":"Step-by-step guide on migrating CI pipelines for a codebase from Jenkins to Tekton within KubeRocketCI, including disabling Jenkins triggers and managing Tekton triggers.","source":"@site/docs/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton","permalink":"/docs/next/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Migrate CI Pipelines From Jenkins to Tekton","description":"Step-by-step guide on migrating CI pipelines for a codebase from Jenkins to Tekton within KubeRocketCI, including disabling Jenkins triggers and managing Tekton triggers.","sidebar_label":"Migrate Jenkins to Tekton"},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade Keycloak to 19.0","permalink":"/docs/next/operator-guide/upgrade/upgrade-keycloak-19.0"},"next":{"title":"Troubleshooting Guide","permalink":"/docs/next/operator-guide/troubleshooting/overview"}}');var o=i(74848),r=i(28453);const s={title:"Migrate CI Pipelines From Jenkins to Tekton",description:"Step-by-step guide on migrating CI pipelines for a codebase from Jenkins to Tekton within KubeRocketCI, including disabling Jenkins triggers and managing Tekton triggers.",sidebar_label:"Migrate Jenkins to Tekton"},a="Migrate CI Pipelines From Jenkins to Tekton",l={},c=[{value:"Deploy a Custom EDP Scenario With Tekton and Jenkins CI Tools",id:"deploy-a-custom-edp-scenario-with-tekton-and-jenkins-ci-tools",level:2},{value:"Disable Jenkins Triggers",id:"disable-jenkins-triggers",level:2},{value:"Manage Tekton Triggers the Codebase(s)",id:"manage-tekton-triggers-the-codebases",level:2},{value:"Switch CI Tool for Codebase(s)",id:"switch-ci-tool-for-codebases",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"migrate-ci-pipelines-from-jenkins-to-tekton",children:"Migrate CI Pipelines From Jenkins to Tekton"})}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton"})}),"\n",(0,o.jsx)(n.p,{children:"To migrate the CI pipelines for a codebase from Jenkins to Tekton, follow the steps below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Migrate CI Pipelines From Jenkins to Tekton"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#deploy-a-custom-edp-scenario-with-tekton-and-jenkins-ci-tools",children:"Deploy a Custom EDP Scenario With Tekton and Jenkins CI Tools"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#disable-jenkins-triggers",children:"Disable Jenkins Triggers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#manage-tekton-triggers-the-codebases",children:"Manage Tekton Triggers the Codebase(s)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#switch-ci-tool-for-codebases",children:"Switch CI Tool for Codebase(s)"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-a-custom-edp-scenario-with-tekton-and-jenkins-ci-tools",children:"Deploy a Custom EDP Scenario With Tekton and Jenkins CI Tools"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure that Tekton stack is deployed according to the ",(0,o.jsx)(n.a,{href:"/docs/next/operator-guide/prerequisites",children:"documentation"}),".\nEnable Tekton as sub component during platform installation:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"edp-tekton:\n  enabled: true\n"})}),"\n",(0,o.jsx)(n.h2,{id:"disable-jenkins-triggers",children:"Disable Jenkins Triggers"}),"\n",(0,o.jsx)(n.p,{children:"To disable Jenkins Triggers for the codebase, add the following code to the provisioner:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",metastring:'title="job-provisioner"',children:'def tektonCodebaseList = ["<codebase_name>"]\nif (!tektonCodebaseList.contains(codebaseName.toString())){\n    triggers {\n        gerrit {\n            events {\n                if (pipelineName.contains("Build"))\n                    changeMerged()\n                else\n                    patchsetCreated()\n            }\n            project("plain:${codebaseName}", ["plain:${watchBranch}"])\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The sample above shows the usage of Gerrit VCS where the ",(0,o.jsx)(n.code,{children:"<codebase_name>"})," value is your codebase name."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If using GitHub or GitLab, additionally remove the webhook from the relevant repository."}),"\n",(0,o.jsx)(n.li,{children:"If webhooks generation for new codebase(s) is not required, correct the code above so that it creates a webhook in the job-provisioner."}),"\n",(0,o.jsx)(n.li,{children:"To recreate the pipeline in Jenkins, trigger the job-provisioner."}),"\n",(0,o.jsx)(n.li,{children:"Check that the new pipeline is created without triggering Gerrit events."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"manage-tekton-triggers-the-codebases",children:"Manage Tekton Triggers the Codebase(s)"}),"\n",(0,o.jsxs)(n.p,{children:["By default, each Gerrit project inherits configuration from the ",(0,o.jsx)(n.strong,{children:"All-Projects"})," repository."]}),"\n",(0,o.jsxs)(n.p,{children:["To exclude triggering in Jenkins and Tekton CI tools simultaneously, edit the configuration in the ",(0,o.jsx)(n.strong,{children:"All-Projects"})," repository or in the project which inherits rights from your project."]}),"\n",(0,o.jsxs)(n.p,{children:["Edit the ",(0,o.jsx)(n.strong,{children:"webhooks.config"})," file in the ",(0,o.jsx)(n.strong,{children:"refs/meta/config"})," and remove all context from this configuration."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["The clearance of the ",(0,o.jsx)(n.strong,{children:"webhooks.config"})," file will disable the pipeline trigger in Tekton."]})}),"\n",(0,o.jsxs)(n.p,{children:["To use Tekton pipelines, add the configuration to the corresponding Gerrit project (",(0,o.jsx)(n.strong,{children:"webhooks.config"})," file in the ",(0,o.jsx)(n.strong,{children:"refs/meta/config"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="webhooks.config"',children:'[remote "changemerged"]\n  url = http://el-gerrit-listener:8080\n  event = change-merged\n[remote "patchsetcreated"]\n  url = http://el-gerrit-listener:8080\n  event = patchset-created\n[remote "commentadded"]\n  url = http://el-gerrit-listener:8080\n  event = comment-added\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Configure webhooks plugin in Gerrit configuration (typically located at  ",(0,o.jsx)(n.strong,{children:"/var/gerrit/review_site/etc/gerrit.config"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="gerrit.config"',children:'[plugin "webhooks"]\n        connectionTimeout = 3000\n        socketTimeout = 2500\n        maxTries = 1\n        retryInterval = 5000\n        threadPoolSize = 3\n'})}),"\n",(0,o.jsx)(n.h2,{id:"switch-ci-tool-for-codebases",children:"Switch CI Tool for Codebase(s)"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the codebase Custom Resource and change the ",(0,o.jsx)(n.code,{children:"spec.ciTool"})," field from ",(0,o.jsx)(n.code,{children:"jenkins"})," to ",(0,o.jsx)(n.code,{children:"tekton"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/next/operator-guide/install-tekton",children:"Install Tekton"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);