"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42252],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13858:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={title:"Read Replica Connections"},s=void 0,l={unversionedId:"read-connections",id:"version-3.6/read-connections",isDocsHomePage:!1,title:"Read Replica Connections",description:"Users can specify multiple read connections via replicas option. You can provide only fields",source:"@site/versioned_docs/version-3.6/read-connections.md",sourceDirName:".",slug:"/read-connections",permalink:"/docs/3.6/read-connections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/read-connections.md",tags:[],version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1635879772,formattedLastUpdatedAt:"11/2/2021",frontMatter:{title:"Read Replica Connections"},sidebar:"version-3.6/docs",previous:{title:"Migrations",permalink:"/docs/3.6/migrations"},next:{title:"Advanced Configuration",permalink:"/docs/3.6/configuration"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Users can specify multiple read connections via ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," option. You can provide only fields\nthat differ from master connection, rest will be taken from it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, ...],\n  dbName: `my_database`,\n  type: 'mysql',\n  user: 'master_user',\n  host: 'master_host',\n  replicas: [\n    { name: 'read-1', host: 'read_host_1', user: 'read_user' },\n    { name: 'read-2', host: 'read_host_2' }, // user omitted, will be taken from master connection\n  ],\n});\n")),(0,i.kt)("p",null,"By default select queries will use random read connection if not inside transaction. You can\nspecify connection type manually in ",(0,i.kt)("inlineCode",{parentName:"p"},"em.getConnection(type: 'read' | 'write')"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const connection = orm.em.getConnection(); // write connection\nconst readConnection = orm.em.getConnection('read'); // random read connection\n\nconst qb1 = orm.em.createQueryBuilder(Author);\nconst res1 = await qb1.select('*').execute(); // random read connection\n\nconst qb2 = orm.em.createQueryBuilder(Author, 'a', 'write');\nconst res2 = await qb2.select('*').execute(); // write connection\n\nconst qb3 = orm.em.createQueryBuilder(Author);\nconst res3 = await qb3.update(...).where(...).execute(); // write connection\n\n// all queries inside a transaction will use write connection\nawait orm.em.transactional(async em => {\n  const a = await em.findOne(Author, 1); // write connection\n  a.name = 'test'; // will trigger update on write connection once flushed\n});\n")))}d.isMDXComponent=!0}}]);