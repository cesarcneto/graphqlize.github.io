(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(1),i=(a(0),a(136));const n={id:"intro",title:"Introduction",sidebar_label:"Introduction"},o={id:"graphqlize/intro",title:"Introduction",description:"[GraphQLize](https://www.graphqlize.org), an open-source JVM library for developing GraphQL API instantly from your existing PostgreSQL and MySQL databases.",source:"@site/docs/graphqlize/intro.md",permalink:"/docs/graphqlize/intro",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/graphqlize/intro.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Spring Boot",permalink:"/docs/getting_started/java/springboot"}},l=[{value:"Rationale",id:"rationale",children:[]},{value:"What is GraphQLize?",id:"what-is-graphqlize",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Is It Production Ready?",id:"is-it-production-ready",children:[]},{value:"How can I contribute?",id:"how-can-i-contribute",children:[]},{value:"Oracle &amp; SQL Server Support",id:"oracle--sql-server-support",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]},{value:"License",id:"license",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphqlize.org"}),"GraphQLize"),", an open-source JVM library for developing GraphQL API instantly from your existing PostgreSQL and MySQL databases."),Object(i.b)("p",null,"It aims to simplify the effort required to expose GraphQL APIs over relational databases."),Object(i.b)("div",{className:"admonition admonition-caution"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"GraphQLize is at its early stages now. The objective of this early release is to get early feedback from the community. It is not production-ready yet!"))),Object(i.b)("h2",{id:"rationale"},"Rationale"),Object(i.b)("p",null,"In the JVM ecosystem, developing GraphQL APIs to expose the data from the relational databases requires a lot of manual work. Right from defining the GraphQL schemas (either code-first or schema-first) to wiring them with resolvers and the database access logic, we spend a significant amount of our development time."),Object(i.b)("p",null,"In addition to this, we also need to take care of optimizing the underlying SQL queries to avoid problems like N+1 queries. We have to account the maintenance of the resulting codebase as well!"),Object(i.b)("p",null,"GraphQLize will help you to overcome all these shortcomings. It provides you with an efficient GraphQL implementation in just few lines of code."),Object(i.b)("h2",{id:"what-is-graphqlize"},"What is GraphQLize?"),Object(i.b)("p",null,"GraphQLize is a JVM library written in Clojure with Java interoperability. The crux of GraphQLize is generating the GraphQL schema and resolving the queries by making use of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html"}),"JDBC metadata")," provided by the JDBC drivers."),Object(i.b)("p",null,"It currently supports Postgres (9.4 & above) and MySQL (8.0 & above)."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Getting started with GraphQLize is simple and involves only a few steps."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the GraphQLize dependency in your project."),Object(i.b)("li",{parentName:"ol"},"Initialize GraphQLize Resolver by providing the Java SQL ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"data source"),"."),Object(i.b)("li",{parentName:"ol"},"Add a GraphQL API endpoint and use the initialized GraphQlize Resolver in the previous step.")),Object(i.b)("p",null,"The actual implementation of these steps will vary based on which language (Java, Clojure) and framework (Spring Boot, Spark Java, Pedestal, etc.). Please refer the below links for more details."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Java"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://graphqlize.org/docs/getting_started/java/springboot"}),"Spring Boot")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://graphqlize.org/docs/getting_started/java/sparkjava"}),"Spark Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.graphqlize.org/docs/getting_started/java/vanilla"}),"Vanilla Java")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clojure"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.graphqlize.org/docs/getting_started/clojure/pedestal"}),"Pedestal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.graphqlize.org/docs/getting_started/clojure/ring"}),"Ring")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.graphqlize.org/docs/getting_started/clojure/vanilla"}),"Vanilla Clojure"))))),Object(i.b)("h2",{id:"is-it-production-ready"},"Is It Production Ready?"),Object(i.b)("p",null,"It will be in a few months."),Object(i.b)("p",null,"The objective of this alpha release is to get early feedback from the community."),Object(i.b)("p",null,"There are close to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc"}),"forty issues")," that I am planning to work on in the upcoming months to make it production ready."),Object(i.b)("p",null,"You can keep track of the progress by"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Following the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/orgs/graphqlize/projects/1"}),"GitHub project board")),Object(i.b)("li",{parentName:"ul"},"Subscribing to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://tinyletter.com/graphqlize-org"}),"GraphQLize's newsletter"),"."),Object(i.b)("li",{parentName:"ul"},"Joining ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://discord.gg/akkdPqf"}),"GraphQLize's Discord"),".")),Object(i.b)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),Object(i.b)("p",null,"GraphQLize is at its early stage now, and the codebase and the APIs are not stable yet."),Object(i.b)("p",null,"So, at this instant, the best way to contribute is to initiate a chat in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/akkdPqf"}),"GraphQLize's Discord")," channel or raise ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/new"}),"a GitHub issue")," with all the relevant details, and we'll take it from there."),Object(i.b)("h2",{id:"oracle--sql-server-support"},"Oracle & SQL Server Support"),Object(i.b)("p",null,"One of the design goal of GraphQLize from day one is to support Postgres, MySQL, Oracle & MS SQL Server. To start with, I am focussing on getting it to a production ready state for Postgres & MySQL. After accomplishing this, I will be focusing on the other two."),Object(i.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://postgrest.org"}),"PostgREST"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphile.org/postgraphile/"}),"PostGraphile"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.keystonejs.com/"}),"KeyStoneJs")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hasura.io/"}),"Hasura")," are the inspiration behind GraphQLize."),Object(i.b)("p",null,"GraphQLize is not possible without the following excellent Clojure libraries."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jkk/honeysql"}),"HoneySQL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/walmartlabs/lacinia"}),"Lacinia")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/seancorfield/next-jdbc"}),"next-jdbc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/r0man/inflections-clj"}),"inflections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/clojure/data.json"}),"data-json"))),Object(i.b)("p",null,"The samples in the documentation of GraphQLize uses the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jooq.org/sakila"}),"Sakila")," database from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jooq.org"}),"JOOQ")," extensively."),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"The use and distribution terms for this software are covered by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.eclipse.org/legal/epl-2.0"}),"Eclipse Public License - v 2.0"),". By using this software in any fashion, you are agreeing to be bound by the terms of this license."))}s.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,d=p["".concat(o,".").concat(u)]||p[u]||h[u]||n;return a?i.a.createElement(d,l({ref:t},s,{components:a})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);