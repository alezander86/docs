"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[83421],{72502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"user-guide/manage-container-registries","title":"Manage Container Registries","description":"Step-by-step guide on integrating and managing container registries within KubeRocketCI, enhancing artifact storage and deployment processes.","source":"@site/versioned_docs/version-3.10/user-guide/manage-container-registries.md","sourceDirName":"user-guide","slug":"/user-guide/manage-container-registries","permalink":"/docs/user-guide/manage-container-registries","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/manage-container-registries.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Manage Container Registries","description":"Step-by-step guide on integrating and managing container registries within KubeRocketCI, enhancing artifact storage and deployment processes.","sidebar_label":"Manage Container Registries"},"sidebar":"userGuideSidebar","previous":{"title":"Manage Clusters","permalink":"/docs/user-guide/gitops"},"next":{"title":"Change Container Registry","permalink":"/docs/user-guide/change-container-registry"}}');var s=r(74848),i=r(28453),l=r(65537),c=r(79329);const a={title:"Manage Container Registries",description:"Step-by-step guide on integrating and managing container registries within KubeRocketCI, enhancing artifact storage and deployment processes.",sidebar_label:"Manage Container Registries"},o="Manage Container Registries",d={},h=[{value:"Supported Registry Providers",id:"supported-registry-providers",level:2},{value:"Add Container Registry",id:"add-container-registry",level:2},{value:"Remove Container Registry",id:"remove-container-registry",level:2},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"manage-container-registries",children:"Manage Container Registries"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/manage-container-registries/"})}),"\n",(0,s.jsx)(t.p,{children:"This guide provides instructions on integrating the container registry with the KubeRocketCI."}),"\n",(0,s.jsx)(t.h2,{id:"supported-registry-providers",children:"Supported Registry Providers"}),"\n",(0,s.jsx)(t.p,{children:"The following table displays the registry services supported for both OpenShift and Kubernetes clusters."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Container Registry"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"OpenShift"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Kubernetes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"AWS ECR"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"DockerHub"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Harbor"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Nexus"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"GitHub (GHCR)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"add-container-registry",children:"Add Container Registry"}),"\n",(0,s.jsx)(t.p,{children:"Follow a three-step process to integrate a container registry in KubeRocketCI:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Configuration"})," -> ",(0,s.jsx)(t.strong,{children:"Artifacts storage"})," -> ",(0,s.jsx)(t.strong,{children:"Registry"})," click the ",(0,s.jsx)(t.strong,{children:"+ Add Registry"})," button:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Registry settings",src:r(50578).A+"",title:"Registry settings",width:"1923",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Registry Provider"})," and enter the required details."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Confirm settings by clicking the ",(0,s.jsx)(t.strong,{children:"Save"})," button."]}),"\n",(0,s.jsx)(t.p,{children:"The required fields vary depending on which container registry is chosen:"}),"\n",(0,s.jsxs)(l.A,{defaultValue:"ecr",values:[{label:"AWS ECR",value:"ecr"},{label:"DockerHub",value:"docker"},{label:"Harbor",value:"harbor"},{label:"Nexus",value:"nexus"},{label:"GitHub",value:"github"}],children:[(0,s.jsxs)(c.A,{value:"ecr",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS ECR settings",src:r(394).A+"",title:"AWS ECR settings",width:"1920",height:"1112"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Fields"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Endpoint"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Format for the (AWS) Elastic Container Registry endpoint: xxxxxxxxxxxx.dkr.ecr.<region>.amazonaws.com. Where ",(0,s.jsx)(t.code,{children:"xxxxxxxxxxxx"})," is your AWS account ID and ",(0,s.jsx)(t.code,{children:"\\<region\\>"})," is where your ECR is hosted."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Space"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The suffix project name in registry."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AWS Region"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The geographic area where the (AWS) Elastic Container Registry repository is hosted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Authentication/IRSA Role ARN"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Specify the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html",children:"IAM role"})," with a policy for interacting with ECR with your Kubernetes cluster."]})]})]})]})]}),(0,s.jsxs)(c.A,{value:"docker",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DockerHub settings",src:r(86749).A+"",title:"DockerHub settings",width:"1919",height:"1111"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Fields"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Space"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The unique identifier/name of the user or company linked to your DockerHub account."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"User"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The user account ID or community user account ID with push permission."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Password/Token"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Provide the ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/security/for-developers/access-tokens/",children:"Password/Token"})," corresponding to your DockerHub account. It is recommended to use Token for security purposes."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Checkbox/Use the Push Account's credentials"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Check this to use the same account for pulling and pushing operations. If unchecked, please enter the user account ID and Password/Token for your DockerHub account or community user account ID with pull permission."})]})]})]})]}),(0,s.jsxs)(c.A,{value:"harbor",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Harbor settings",src:r(44072).A+"",title:"Harbor settings",width:"1919",height:"1112"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Fields"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Endpoint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enter Harbor registry endpoint URL, for example, registry.example.com."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Space"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The project name in registry."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"User"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Provide the ",(0,s.jsx)(t.a,{href:"/docs/operator-guide/artifacts-management/harbor-integration#set-up-robot-account",children:"robot account"})," name with push permissions."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Password/Token"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Provide the ",(0,s.jsx)(t.a,{href:"/docs/operator-guide/artifacts-management/harbor-integration#set-up-robot-account",children:"secret"})," corresponding to your harbor account."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Checkbox/Use the Push Account's credentials"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Check this to use the same account for pulling and pushing operations. Provide the account name with pull permissions."})]})]})]})]}),(0,s.jsxs)(c.A,{value:"nexus",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Nexus settings",src:r(61381).A+"",title:"Nexus settings",width:"1922",height:"1114"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Fields"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Endpoint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Nexus service registry endpoint URL (e.g., image-registry.nexus-image-registry.svc:5000)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Repository"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Specify the Nexus repository that corresponds to your project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"User"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Provide the username with push permissions."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Password/Token"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enter the confidential combination used for authenticating your access to the container registry."})]})]})]})]}),(0,s.jsxs)(c.A,{value:"github",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GitHub container registry settings",src:r(79651).A+"",title:"GitHub container registry settings",width:"1920",height:"1113"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Fields"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Registry Space"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The unique identifier/name of the user or company linked to your GitHub account."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"User"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The user account ID or community user account ID with push permission."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Password/Token"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Provide the ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens",children:"Token"})," corresponding to your  GitHub account. The minimal set of permissions required for the token is described in the ",(0,s.jsx)(t.a,{href:"/docs/user-guide/add-git-server",children:"Manage Git Providers"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Checkbox/Use the Push Account's credentials"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Check this to use the same account for pulling and pushing operations. If unchecked, please enter the user account ID and Token for your GitHub account or community user account ID with pull permission."})]})]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"remove-container-registry",children:"Remove Container Registry"}),"\n",(0,s.jsx)(t.p,{children:"To remove container registry integration from KubeRocketCI, follow the steps below:"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Proceed with caution, removing registry settings might disrupt your CI/CD process. All new components created after changing the registry such as Components and Environments will start working out of the box. To work with existing codebases and pipelines familiarize with the ",(0,s.jsx)(t.a,{href:"/docs/user-guide/change-container-registry",children:"change container registry guide"}),"."]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Configuration"})," -> ",(0,s.jsx)(t.strong,{children:"Artifacts storage"})," -> ",(0,s.jsx)(t.strong,{children:"Registry"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Reset registry"})," button, type the ",(0,s.jsx)(t.code,{children:"confirm"})," word and then click ",(0,s.jsx)(t.strong,{children:"Confirm"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Registry settings",src:r(75581).A+"",title:"Registry settings",width:"1919",height:"1112"})}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/operator-guide/artifacts-management/harbor-installation",children:"Install Harbor"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/user-guide/change-container-registry",children:"Change Container Registry"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},79329:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},65537:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),s=r(34164),i=r(65627),l=r(56347),c=r(50372),a=r(30604),o=r(11861),d=r(78749);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,h]=x({queryString:r,groupId:s}),[p,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),y=(()=>{const e=o??p;return g({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{y&&a(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=r(9136);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=a.indexOf(t),s=c[r].value;s!==n&&(o(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{a.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function m(e){let{lazy:t,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function A(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(m,{...t,...e})]})}function v(e){const t=(0,j.A)();return(0,f.jsx)(A,{...e,children:h(e.children)},String(t))}},86749:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-dockerhub-1182b69f6b42b3270b5ca28c192680fe.png"},394:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-ecr-1f909b127809828a628f96e3f19e85cf.png"},79651:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-github-80ab5c7333044e3f06e371df7f2fc5b4.png"},44072:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-harbor-06758d73646e6473f776c1b59fe21c34.png"},50578:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-list-ccd2e3c75c9498512159f4007d491df3.png"},61381:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-nexus-eaaa13636e6ed0aa8efc3793ad062a83.png"},75581:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/container-registry-reset-90c2e6c20dc0df5cfaab9bcdb1c0f10e.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);