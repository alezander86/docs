"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[99525],{90422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"operator-guide/install-via-civo","title":"Install via Civo Marketplace","description":"This documentation provides detailed instructions on how to install the KubeRocketCI platform via Civo Marketplace.","source":"@site/docs/operator-guide/install-via-civo.md","sourceDirName":"operator-guide","slug":"/operator-guide/install-via-civo","permalink":"/docs/next/operator-guide/install-via-civo","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/install-via-civo.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Install via AWS Marketplace","permalink":"/docs/next/operator-guide/aws-marketplace-install"},"next":{"title":"Advanced Installation Overview: Third-Party Tools","permalink":"/docs/next/operator-guide/advanced-installation/overview"}}');var i=n(74848),l=n(28453);const o={},c="Install via Civo Marketplace",r={},a=[{value:"Launch Cluster",id:"launch-cluster",level:2},{value:"Install KubeRocketCI",id:"install-kuberocketci",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"install-via-civo-marketplace",children:"Install via Civo Marketplace"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/install-via-civo/"})}),"\n",(0,i.jsxs)(t.p,{children:["This documentation provides detailed instructions on how to install the KubeRocketCI platform via ",(0,i.jsx)(t.a,{href:"https://www.civo.com/marketplace/kuberocketci",children:"Civo Marketplace"}),".\nAs a prerequisite, make sure to ",(0,i.jsx)(t.a,{href:"https://dashboard.civo.com/signup",children:"sign up"})," on Civo."]}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QjZoPnIKDtA",title:"Install KubeRocketCI via Civo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)(t.h2,{id:"launch-cluster",children:"Launch Cluster"}),"\n",(0,i.jsxs)(t.p,{children:["The first step of the installation procedure is to launch the cluster. Please refer to the ",(0,i.jsx)(t.a,{href:"https://www.civo.com/docs/kubernetes/create-a-cluster",children:"official instructions"})," that describe this process in detail.\nTo succeed, follow the steps below:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in to your personal Civo account."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a new Kubernetes cluster with the following parameters. Please refer to the ",(0,i.jsx)(t.a,{href:"https://www.civo.com/docs/kubernetes/create-a-cluster",children:"official guidelines"})," for more details:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Name"}),": ",(0,i.jsx)(t.code,{children:"demo"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How many nodes"}),": ",(0,i.jsx)(t.code,{children:"1"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Select size"}),": Type: ",(0,i.jsx)(t.code,{children:"Standard"}),", Size: ",(0,i.jsx)(t.code,{children:"Medium"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network"}),": ",(0,i.jsx)(t.code,{children:"Default"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Firewall"}),": ",(0,i.jsx)(t.code,{children:"Create a new firewall"})," with the ",(0,i.jsx)(t.code,{children:"6443"})," and ",(0,i.jsx)(t.code,{children:"443"})," ports opened"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Advanced options"}),": Kubernetes version: latest (currently 1.28.2)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Marketplace"}),": From the ",(0,i.jsx)(t.code,{children:"CI/CD"})," selection choose ",(0,i.jsx)(t.code,{children:"Argo CD"})," and ",(0,i.jsx)(t.code,{children:"Tekton"})," for pre-installation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Wait till the cluster is created."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The process of deploying the cluster typically takes about two minutes. Following this, an extra five minutes are needed for the deployment of both the Argo CD and Tekton."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"As soon as cluster is deployed, ensure all the marketplace applications are installed, too:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Check applications",src:n(50562).A+"",title:"Check applications",width:"2868",height:"1446"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Download and apply the kubeconfig file:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Download kubeconfig",src:n(89622).A+"",title:"Download kubeconfig",width:"2873",height:"1444"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Ensure all the pods are up and running in both the Tekton and Argo CD namespaces after 5 minutes of waiting. Restart deployments if the pods are failed to deploy:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl get ns\nkubectl get pods -n tekton-pipelines\nkubectl get pods -n argocd\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Verify installation",src:n(52687).A+"",title:"Verify installation",width:"2812",height:"1484"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"install-kuberocketci",children:"Install KubeRocketCI"}),"\n",(0,i.jsx)(t.p,{children:"As soon as the cluster is deployed, it is time to install the KubeRocketCI application."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the Civo portal, navigate to ",(0,i.jsx)(t.strong,{children:"Marketplace"})," -> ",(0,i.jsx)(t.strong,{children:"CI/CD"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Civo Marketplace",src:n(13915).A+"",title:"Civo Marketplace",width:"2868",height:"1444"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.code,{children:"KubeRocketCI"})," and choose which Version Control Systems you would prefer to integrate it with and click the ",(0,i.jsx)(t.strong,{children:"Install Apps"})," button:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add KubeRocketCI",src:n(76426).A+"",title:"Add KubeRocketCI",width:"3207",height:"1580"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Wait till the KubeRocketCI app appears in the ",(0,i.jsx)(t.strong,{children:"Installed applications"})," list:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"KubeRocketCI installed",src:n(68454).A+"",title:"KubeRocketCI installed",width:"3206",height:"1580"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Wait till all the pods are up and running. Use the ",(0,i.jsx)(t.code,{children:"kubectl get pods"})," command to check the status of the pods:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl get pods -n edp\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"KubeRocketCI pods",src:n(6772).A+"",title:"KubeRocketCI pods",width:"1910",height:"517"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["As soon as all the pods are deployed. Navigate to the ",(0,i.jsx)(t.strong,{children:"Cluster Information"})," tab and copy the DNS name:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Getting DNS",src:n(76648).A+"",title:"Getting DNS",width:"2870",height:"1438"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the new browser tab, access the Portal UI by typing the URL according to the ",(0,i.jsx)(t.code,{children:"https://portal-edp.<DNS_name>"})," format."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Accept the security warning and click the ",(0,i.jsx)(t.strong,{children:"service access token"})," link to open the ",(0,i.jsx)(t.a,{href:"/docs/next/quick-start/platform-installation",children:"instructions"})," step 5 on how to get a token to log in to the Portal UI."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["As soon as the token is created, paste it in the ",(0,i.jsx)(t.strong,{children:"ID token"})," field and click the ",(0,i.jsx)(t.strong,{children:"Authenticate"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click the notification in the bottom right corner to open the Account settings menu:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Click notification",src:n(76468).A+"",title:"Click notification",width:"1915",height:"1110"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the Cluster Settings menu, enter ",(0,i.jsx)(t.strong,{children:"edp"})," in both default and allowed namespaces and click the ",(0,i.jsx)(t.strong,{children:"CLOSE"})," button:"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Don't forget to click the ",(0,i.jsx)(t.strong,{children:"+ ADD"})," button to add the allowed namespace."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Account settings menu",src:n(40683).A+"",title:"Account settings menu",width:"1914",height:"1110"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Well done! You've successfully installed the KubeRocketCI platform on the Civo cluster. You're now set to integrate KubeRocketCI with the necessary third-party tools.\nProceed to the ",(0,i.jsx)(t.a,{href:"/docs/next/quick-start/integrate-sonarcloud",children:"SonarQube Integration"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/operator-guide/aws-marketplace-install",children:"Install via AWS Marketplace"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"KubeRocketCI Installation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/quick-start/integrate-sonarcloud",children:"SonarQube Integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/operator-guide/cd/argocd-integration",children:"Argo CD Integration"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},52687:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/check-ns-and-pods-0617e02ce2d222579d21971cb81b2826.png"},76426:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-add-kuberocketci-95feb6ead08bb19fa361305e9957e43a.png"},6772:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-check-kuberocketci-ns-1e1a651bc044eaf90a2c3a4bd811f48b.png"},76468:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-cluster-settings-5d418c9145f3b5aeb817ea2f67e858b9.png"},76648:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-get-dns-d1f9c5ee21181488feda561c0a679dc1.png"},50562:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-installed-applications-eb6ebbacb19a7365d875a08973471bbe.png"},68454:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-kuberocketci-installed-caaf68a1c789051b0ea2e0e0211198f1.png"},40683:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-kuberocketci-portal-cluster-settings-menu-f722a63300cea7d69d3d683a61bfafe1.png"},13915:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/civo-marketplace-dfbdf014b44a7a8c2d4cb6e0e1dd29e3.png"},89622:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/download-kubeconfig-de8a55289df44bba682a8283b378ea4e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},l=s.createContext(i);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);