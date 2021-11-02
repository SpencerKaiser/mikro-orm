"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93089,23343],{78665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(80102),l=a(67294),n=a(86010),i=a(43583),o=a(39960),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",u="sidebarItem_2UVv",g="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",p=a(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,E),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(67294),l=a(52263),n=a(78665),i=a(38561),o=a(39960),s=a(95999);var m=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(o.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=a(89521);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,s=(0,l.Z)().siteConfig.title,u=t.blogDescription,g=t.blogTitle,d="/"===t.permalink?s:g;return r.createElement(n.Z,{title:d,description:u,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m,{metadata:t}))}},38561:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(67294),l=a(86010),n=a(3905),i=a(95999),o=a(39960),s=a(44996),m=a(89521),c=a(67707),u=a(86753),g="blogPostTitle_GeHD",d="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(20062),E="image_1yU8";var v=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:E,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",f),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var _=function(e){var t,a,E,v,f=(E=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,y=e.metadata,w=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,L=y.date,M=y.formattedDate,I=y.permalink,B=y.tags,C=y.readingTime,U=y.title,x=y.editUrl,A=y.authors,R=null!=(t=Z.image)?t:k.image,S=!T&&w,H=B.length>0;return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=T?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:g,itemProp:"headline"},T?U:r.createElement(o.Z,{itemProp:"url",to:I},U)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},M),void 0!==C&&r.createElement(r.Fragment,null," \xb7 ",f(C))),r.createElement(b,{authors:A,assets:Z}))),R&&r.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},N)),(H||w)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=T,a))},H&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":S})},r.createElement(h.Z,{tags:B})),T&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),S&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":H})},r.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+U},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(67294),l=a(95999),n=a(83117),i=a(80102),o=a(86010),s="iconEdit_2_ui",m=["className"],c=function(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(89521);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),l=a(86010),n=a(39960),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(i,(t={},t[o]=!c,t[s]=c,t))},m,c&&r.createElement("span",null,c))}},20062:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),l=a(86010),n=a(95999),i=a(7774),o="tags_2ga9",s="tag_11ep";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{name:t,permalink:a}))}))))}},75643:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(83117),l=a(80102),n=a(67294),i=a(94184),o=a.n(i),s=a(39960),m=a(52263),c=a(44996),u="footerLogoLink_qW4Z",g=["to","href","label"];function d(e){var t=e.to,a=e.href,i=e.label,o=(0,l.Z)(e,g),m=(0,c.Z)(t);return n.createElement(s.Z,(0,r.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:m},o),i)}var p=function(e){var t=e.url,a=e.alt;return n.createElement("img",{className:"footer__logo",alt:a,src:t})};var h=function(){var e=(0,m.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},l=r.copyright,i=r.links,s=void 0===i?[]:i,g=r.logo,h=void 0===g?{}:g,E=(0,c.Z)(h.src);return a?n.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===a.style})},n.createElement("div",{className:"container"},s&&s.length>0&&n.createElement("div",{className:"row footer__links"},s.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?n.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(d,e))}))):null)}))),(h||l)&&n.createElement("div",{className:"text--center"},h&&h.src&&n.createElement("div",{className:"margin-bottom--sm"},h.href?n.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:u},n.createElement(p,{alt:h.alt,url:E})):n.createElement(p,{alt:h.alt,url:E})),l,"Icons made by ",n.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",n.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);