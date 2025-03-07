"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[28180],{52426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.5","title":"Upgrade EDP v3.4 to 3.5","description":"Guide on upgrading EDP to version 3.5, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","source":"@site/docs/operator-guide/upgrade/upgrade-edp-3.5.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.5","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.5","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.5.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741021682000,"frontMatter":{"title":"Upgrade EDP v3.4 to 3.5","description":"Guide on upgrading EDP to version 3.5, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","sidebar_label":"v3.4 to 3.5"},"sidebar":"operatorGuideSidebar","previous":{"title":"v3.5 to 3.6","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.6"},"next":{"title":"v3.3 to 3.4","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.4"}}');var s=n(74848),l=n(28453),a=n(65537),x=n(79329);const i={title:"Upgrade EDP v3.4 to 3.5",description:"Guide on upgrading EDP to version 3.5, including steps for updating Custom Resource Definitions and performing the upgrade procedure.",sidebar_label:"v3.4 to 3.5"},c="Upgrade EDP v3.4 to 3.5",o={},d=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"upgrade-edp-v34-to-35",children:"Upgrade EDP v3.4 to 3.5"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.5"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"We suggest making a backup of the EDP environment before starting the upgrade procedure."})}),"\n",(0,s.jsx)(t.p,{children:"This section provides detailed instructions for upgrading EPAM Delivery Platform to version 3.5.3. Follow the steps and requirements outlined below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.19.0/deploy-templates/crds/v2.edp.epam.com_gitservers.yaml\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["Codebase-operator v2.19.0 is not compatible with the previous versions. Please become familiar with the ",(0,s.jsx)(t.a,{href:"https://github.com/epam/edp-codebase-operator/commit/67ed1e336b7b185aba03992fd1c4fbebcd33941d",children:"breaking change"})," in Git Server Custom Resource Definition."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Familiarize yourself with the updated file structure of the ",(0,s.jsx)(t.a,{href:"https://raw.githubusercontent.com/epam/edp-install/v3.5.3/deploy-templates/values.yaml",children:"values.yaml"})," file and adjust your values.yaml file accordingly:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["By default, the deployment of sub components such as ",(0,s.jsx)(t.code,{children:"edp-sonar-operator"}),", ",(0,s.jsx)(t.code,{children:"edp-nexus-operator"}),", ",(0,s.jsx)(t.code,{children:"edp-gerrit-operator"}),", and ",(0,s.jsx)(t.code,{children:"keycloak-operator"}),", have been disabled. Set them back to ",(0,s.jsx)(t.code,{children:"true"})," in case they are needed or manually deploy external tools, such as SonarQube, Nexus, Gerrit and integrate them with the EPAM Delivery Platform."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The default Git provider has been changed from Gerrit to GitHub:"}),"\n",(0,s.jsx)(t.p,{children:"Old format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'global:\n  gitProvider: gerrit\n  gerritSSHPort: "22"\n'})}),"\n",(0,s.jsx)(t.p,{children:"New format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'global:\n  gitProvider: github\n  #gerritSSHPort: "22"\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"sonarUrl"})," and ",(0,s.jsx)(t.strong,{children:"nexusUrl"})," parameters have been deprecated. All the URLs from external components are stored in integration secrets:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'global:\n  # -- Optional parameter. Link to use custom sonarqube. Format: http://<service-name>.<sonarqube-namespace>:9000 or http://<ip-address>:9000\n  sonarUrl: ""\n  # -- Optional parameter. Link to use custom nexus. Format: http://<service-name>.<nexus-namespace>:8081 or http://<ip-address>:<port>\n  nexusUrl: ""\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Keycloak"})," integration has been moved from the ",(0,s.jsx)(t.strong,{children:"global"})," section to the ",(0,s.jsx)(t.strong,{children:"sso"})," section. Update the parameters accordingly:"]}),"\n",(0,s.jsx)(t.p,{children:"Old format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'global:\n  # -- Keycloak URL\n  keycloakUrl: https://keycloak.example.com\n  # -- Administrators of your tenant\n  admins:\n    - "stub_user_one@example.com"\n  # -- Developers of your tenant\n  developers:\n    - "stub_user_one@example.com"\n    - "stub_user_two@example.com"\n'})}),"\n",(0,s.jsx)(t.p,{children:"New format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'sso:\n  enabled: true\n  # -- Keycloak URL\n  keycloakUrl: https://keycloak.example.com\n  # -- Administrators of your tenant\n  admins:\n    - "stub_user_one@example.com"\n  # -- Developers of your tenant\n  developers:\n    - "stub_user_one@example.com"\n    - "stub_user_two@example.com"\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) The default secret name for Jira integration has been changed from ",(0,s.jsx)(t.code,{children:"jira-user"})," to ",(0,s.jsx)(t.code,{children:"ci-jira"}),". Please adjust the secret name in the parameters accordingly:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'codebase-operator:\n  jira:\n    credentialName: "ci-jira"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The secret naming and format have been refactored. Below are patterns of the changes for various components:"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"sonarqube",values:[{label:"SonarQube",value:"sonarqube"},{label:"Dependency-Track",value:"dependencytrack"},{label:"DefectDojo",value:"defectdojo"},{label:"Jira",value:"jira"},{label:"GitLab",value:"gitlab"},{label:"GitHub",value:"github"},{label:"Nexus",value:"nexus"}],children:[(0,s.jsxs)(x.A,{value:"sonarqube",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"sonar-ciuser-token": {\n  "username": "xxxxx",\n  "secret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-sonarqube": {\n  "token": "xxxxxxxxxxxxxxxxxxxxxxx",\n  "url":"https://sonar.example.com"\n  }\n'})})]}),(0,s.jsxs)(x.A,{value:"dependencytrack",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-dependency-track": {\n  "token": "xxxxxxxxxxxxxxxxxx"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-dependency-track": {\n  "token": "xxxxxxxxxxxxxxxxxx",\n  "url": "http://dependency-track.example.com"}\n'})})]}),(0,s.jsxs)(x.A,{value:"defectdojo",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"defectdojo-ciuser-token": {\n  "token": "xxxxxxxxxxxxxxxxxx"\n  "url": "http://defectdojo.example.com"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-defectdojo": {\n  "token": "xxxxxxxxxxxxxxxxxx",\n  "url": "http://defectdojo.example.com"\n  }\n'})})]}),(0,s.jsxs)(x.A,{value:"jira",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"jira-user": {\n  "username": "xxxxx",\n  "password": "xxxxx"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-jira": {\n  "username": "xxxxx",\n  "password": "xxxxx"\n}\n'})})]}),(0,s.jsxs)(x.A,{value:"gitlab",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"gitlab": {\n  "id_rsa": "xxxxxxxxxxxxxx",\n  "token": "xxxxxxxxxxxxxx",\n  "secretString": "xxxxxxxxxxxxxx"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-gitlab": {\n  "id_rsa": "xxxxxxxxxxxxxx",\n  "token": "xxxxxxxxxxxxxx",\n  "secretString": "xxxxxxxxxxxxxx"\n  }\n\n'})})]}),(0,s.jsxs)(x.A,{value:"github",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"github": {\n  "id_rsa": "xxxxxxxxxxxxxx",\n  "token": "xxxxxxxxxxxxxx",\n  "secretString": "xxxxxxxxxxxxxx"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-github": {\n  "id_rsa": "xxxxxxxxxxxxxx",\n  "token": "xxxxxxxxxxxxxx",\n  "secretString": "xxxxxxxxxxxxxx"\n  }\n\n'})})]}),(0,s.jsxs)(x.A,{value:"nexus",children:[(0,s.jsx)(t.p,{children:"Old format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"nexus-ci-user": {\n  "username": "xxxxx",\n  "password": "xxxxxxxxxxxxxxxxxx"\n  }\n'})}),(0,s.jsx)(t.p,{children:"New format:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"ci-nexus": {\n  "username": "xxxxx",\n  "password": "xxxxx",\n  "url": "http://nexus.example.com"\n  }\n'})})]})]}),"\n",(0,s.jsx)(t.p,{children:"The tables below illustrate the difference between the old and new format:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Old format"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Secret Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Username"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Password"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Token"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Secret"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"jira-user"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"nexus-ci.user"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sonar-ciuser-token"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"defectdojo-ciuser-token"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ci-dependency-track"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"New format"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Secret Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Username"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Password"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Token"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ci-jira"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ci-nexus"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ci-sonarqube"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ci-defectdojo"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ci-dependency-track"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To upgrade EDP to the v3.5.3, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.5.3\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,s.jsx)(t.code,{children:"--dry-run"})," tag:",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.5.3 --dry-run"})]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(96540),s=n(34164),l=n(65627),a=n(56347),x=n(50372),i=n(30604),c=n(11861),o=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=u(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=p({queryString:n,groupId:s}),[g,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),m=(()=>{const e=c??g;return h({value:e,tabValues:l})?e:null})();(0,x.A)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,l]),tabValues:l}}var j=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:x}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),o=e=>{const t=e.currentTarget,n=i.indexOf(t),s=x[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:x.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:o,...l,className:(0,s.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function v(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function A(e){const t=(0,j.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>x});var r=n(96540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function x(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);