/*! For license information please see ff474c8c.dc840100.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),i=(a(0),a(135)),o=a(149),c=a(150),s={id:"springboot",title:"Spring Boot",sidebar_label:"Spring Boot"},p={id:"getting_started/java/springboot",title:"Spring Boot",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/getting_started/java/springboot.mdx",permalink:"/docs/getting_started/java/springboot",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/java/springboot.mdx",sidebar_label:"Spring Boot",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/graphqlize/intro"},next:{title:"Spark Java",permalink:"/docs/getting_started/java/sparkjava"}},l=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Initializing GraphQLizeResolver",id:"initializing-graphqlizeresolver",children:[{value:"Configuring DataSource",id:"configuring-datasource",children:[]}]},{value:"Adding GraphQL Endpoint",id:"adding-graphql-endpoint",children:[]}],d={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Getting started with GraphQLize in Spring-Boot is simple and straight forward."),Object(i.b)("p",null,"As we typically do, let's go to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.spring.io/"}),"Spring Initializr")," and create a Java project with Web & JPA as dependencies. This documentation uses this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.2.5.RELEASE&packaging=jar&jvmVersion=1.8&groupId=org.graphqlize.java&artifactId=spring-boot&name=spring-boot&description=Demo%20project%20for%20Spring%20Boot%20and%20GraphQLize&packageName=org.graphqlize.java.spring-boot&dependencies=web,data-jpa"}),"Spring Initializr")," template."),Object(i.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(i.b)("p",null,"The first step is to add the ",Object(i.b)("inlineCode",{parentName:"p"},"graphqlize-java")," & the jdbc driver dependencies."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy",metastring:"{3,6,9}","{3,6,9}":!0}),"// ...\ndependencies {\n  implementation 'org.graphqlize:graphqlize-java:0.1.0-alpha4'\n\n  // For Postgres\n  implementation 'org.postgresql:postgresql:42.2.10'\n\n  // For MySQL\n  implementation 'mysql:mysql-connector-java:8.0.19'\n\n  // ...\n}\n")),Object(i.b)("h2",{id:"initializing-graphqlizeresolver"},"Initializing GraphQLizeResolver"),Object(i.b)("p",null,"The next step is initializing ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver"),". To do it, let's a create new file ",Object(i.b)("em",{parentName:"p"},"GraphQLizeResolverProvider.java")," and add the following code."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{9,16,19-22}","{9,16,19-22}":!0}),"package org.graphqlize.java.springboot;\n\nimport org.graphqlize.java.GraphQLizeResolver;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.stereotype.Component;\n\nimport javax.sql.DataSource;\n\n@Component\npublic class GraphQLizeResolverProvider {\n  private final DataSource dataSource;\n  private final GraphQLizeResolver graphQLizeResolver;\n\n  public GraphQLizeResolverProvider(DataSource dataSource) {\n    this.dataSource = dataSource;\n    graphQLizeResolver = new GraphQLizeResolver(dataSource);\n  }\n\n  @Bean\n  public GraphQLizeResolver graphQLizeResolver() {\n    return this.graphQLizeResolver;\n  }\n}\n")),Object(i.b)("p",null,"During initialization (via ",Object(i.b)("inlineCode",{parentName:"p"},"constructor"),"), the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," reads the metadata of the database using the JDBC metadata APIs and keeps an in-memory representation of them."),Object(i.b)("div",{className:"admonition admonition-note"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently, it takes around 8 to 12 seconds to initialize. I am planning to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/48"}),"reduce")," it in a feature release."))),Object(i.b)("h3",{id:"configuring-datasource"},"Configuring DataSource"),Object(i.b)("p",null,"To configure the ",Object(i.b)("inlineCode",{parentName:"p"},"DataSource"),", let's add the following properties in the ",Object(i.b)("em",{parentName:"p"},"application.properties")," file"),Object(i.b)(o.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"postgres",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"spring.datasource.url=jdbc:postgresql://localhost:5432/sakila\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n"))),Object(i.b)(c.a,{value:"mysql",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"spring.datasource.url=jdbc:mysql://localhost:3306/sakila\nspring.datasource.username=root\nspring.datasource.password=mysql123\n")))),Object(i.b)("div",{className:"admonition admonition-note"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database credentails. The above example assumes that you are using the ",Object(i.b)("em",{parentName:"p"},"sakila")," database which can be created using the scripts from this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(i.b)("h2",{id:"adding-graphql-endpoint"},"Adding GraphQL Endpoint"))}b.isMDXComponent=!0},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,g=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(g,c({ref:t},p,{components:a})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},136:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(136),o=a.n(i),c=a(90),s=a.n(c);const p=37,l=39;t.a=function(e){const{block:t,children:a,defaultValue:i,values:c}=e,[d,b]=Object(n.useState)(i),u=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:o()("tab-item",s.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case l:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);