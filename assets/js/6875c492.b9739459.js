"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[84813],{17448:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(50539),a=n(11865),r=n(74848);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.A,{permalink:n,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(a.A,{permalink:i,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},18189:(e,t,n)=>{n.d(t,{A:()=>B});n(96540);var s=n(34164),a=n(83750),r=n(74848);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var o=n(56289);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.e7)(),{permalink:c,title:d}=n,u=i?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.A)(l.title,t),children:i?d:(0,r.jsx)(o.A,{to:c,children:d})})}var d=n(50539),u=n(81430),h=n(98569);const g={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.e7)(),{date:i,readingTime:o}=n,l=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,l.format(new Date(c)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(m,{readingTime:o})]})]});var c}var b=n(95921);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",o?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!o&&(l?"col col--12":"col col--6"),o?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(b.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function T(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(A,{})]})}var v=n(30099),w=n(57409);function N(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,a.e7)();return(0,r.jsx)("div",{id:i?v.LU:void 0,className:(0,s.A)("markdown",n),children:(0,r.jsx)(w.A,{children:t})})}var y=n(204),P=n(5783),k=n(56239);function U(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function _(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(U,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:i,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&l,h=n.length>0;if(!(h||u||o))return null;if(t){const e=!!(o||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.A,{tags:n})})}),e&&(0,r.jsx)(P.A,{className:(0,s.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,r.jsx)(k.A,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":h}),children:(0,r.jsx)(_,{blogPostTitle:i,to:e.permalink})})]})}function B(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.A)(o,n),children:[(0,r.jsx)(T,{}),(0,r.jsx)(N,{children:t}),(0,r.jsx)(R,{})]})}},14005:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(83750),a=n(18189),r=n(74848);function i(e){let{items:t,component:n=a.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},26956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(96540);var s=n(34164),a=n(50539),r=n(68207),i=n(204),o=n(11926),l=n(56289),c=n(60569),d=n(17448),u=n(37220),h=n(14005),g=n(40665),m=n(9303),p=n(74848);function x(e){let{tag:t}=e;const n=(0,o.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:n,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:r}=e;const i=(0,o.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(g.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(m.A,{as:"h1",children:i}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(l.A,{href:t.allTagsPath,children:(0,p.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(h.A,{items:n}),(0,p.jsx)(d.A,{metadata:r})]})}function b(e){return(0,p.jsxs)(r.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},40665:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164),a=n(27289),r=n(204),i=n(52362),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(i.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,s.A)(t,r.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(l,{...e})]})}},11926:(e,t,n)=>{n.d(t,{Y4:()=>u,ZD:()=>o,np:()=>d,uz:()=>c,wI:()=>l});n(96540);var s=n(50539),a=n(81430),r=n(74848);function i(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){const t=i();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function l(e){const t=i();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,r.jsx)(s.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},27289:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>i,TT:()=>d,Uh:()=>o,Yh:()=>c});n(96540);var s=n(50539),a=n(27143),r=n(74848);function i(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,r.jsx)(a.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);