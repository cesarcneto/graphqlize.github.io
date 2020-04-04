/*! For license information please see ff474c8c.f79cac84.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(1),n=a(6),i=(a(0),a(150)),o=a(154),s=a(153),p={id:"springboot",title:"Spring Boot",sidebar_label:"Spring Boot"},l={id:"getting_started/java/springboot",title:"Spring Boot",description:"Getting started with GraphQLize in Spring-Boot is simple and straight forward.",source:"@site/docs/getting_started/java/springboot.mdx",permalink:"/docs/getting_started/java/springboot",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/java/springboot.mdx",sidebar_label:"Spring Boot",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/graphqlize/intro"},next:{title:"Spark Java",permalink:"/docs/getting_started/java/sparkjava"}},c=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Initializing GraphQLizeResolver",id:"initializing-graphqlizeresolver",children:[{value:"Configuring DataSource",id:"configuring-datasource",children:[]}]},{value:"Adding GraphQL Endpoint",id:"adding-graphql-endpoint",children:[{value:"Test Drive",id:"test-drive",children:[]}]},{value:"GraphQL Playground and Voyager",id:"graphql-playground-and-voyager",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Getting started with GraphQLize in Spring-Boot is simple and straight forward."),Object(i.b)("p",null,"As we typically do, let's go to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://start.spring.io/"}),"Spring Initializr")," and create a Java project with Web & JPA as dependencies. This documentation uses this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.2.5.RELEASE&packaging=jar&jvmVersion=1.8&groupId=org.graphqlize.java&artifactId=spring-boot&name=spring-boot&description=Demo%20project%20for%20Spring%20Boot%20and%20GraphQLize&packageName=org.graphqlize.java.spring-boot&dependencies=web,data-jpa"}),"Spring Initializr template"),"."),Object(i.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(i.b)("p",null,"The first step is to add the ",Object(i.b)("inlineCode",{parentName:"p"},"graphqlize-java")," & the JDBC driver dependencies."),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://clojars.org/org.graphqlize/graphqlize-java"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/org.graphqlize/graphqlize-java.svg",alt:"Clojars Project"})))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy",metastring:"{4,8}","{4,8}":!0}),"// ...\nrepositories {\n    // ...\n    maven { url \"https://clojars.org/repo\" }\n}\n\ndependencies {\n  implementation 'org.graphqlize:graphqlize-java:0.1.0-alpha6'\n\n  // For Postgres\n  implementation 'org.postgresql:postgresql:42.2.10'\n\n  // For MySQL\n  implementation 'mysql:mysql-connector-java:8.0.19'\n\n  // ...\n}\n")),Object(i.b)("h2",{id:"initializing-graphqlizeresolver"},"Initializing GraphQLizeResolver"),Object(i.b)("p",null,"The next step is initializing ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver"),". To do it, let's a create new file ",Object(i.b)("em",{parentName:"p"},"GraphQLizeResolverProvider.java")," and add the following code to expose the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," spring-boot bean."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:"{9,16,19-22}","{9,16,19-22}":!0}),"package org.graphqlize.java.springboot;\n\nimport org.graphqlize.java.GraphQLizeResolver;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.stereotype.Component;\n\nimport javax.sql.DataSource;\n\n@Component\npublic class GraphQLizeResolverProvider {\n  private final DataSource dataSource;\n  private final GraphQLizeResolver graphQLizeResolver;\n\n  public GraphQLizeResolverProvider(DataSource dataSource) {\n    this.dataSource = dataSource;\n    graphQLizeResolver = new GraphQLizeResolver(dataSource);\n  }\n\n  @Bean\n  public GraphQLizeResolver graphQLizeResolver() {\n    return this.graphQLizeResolver;\n  }\n}\n")),Object(i.b)("p",null,"During initialization (via ",Object(i.b)("inlineCode",{parentName:"p"},"constructor"),"), the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," reads the metadata of the database using the JDBC metadata APIs and keeps an in-memory representation of them."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently, it takes around 8 to 12 seconds to initialize. I am planning to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/48"}),"work on it")," in a future release."))),Object(i.b)("h3",{id:"configuring-datasource"},"Configuring DataSource"),Object(i.b)("p",null,"To configure the ",Object(i.b)("inlineCode",{parentName:"p"},"DataSource"),", let's add the following properties in the ",Object(i.b)("em",{parentName:"p"},"application.properties")," file."),Object(i.b)(o.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"postgres",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"spring.datasource.url=jdbc:postgresql://localhost:5432/sakila\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n"))),Object(i.b)(s.a,{value:"mysql",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"spring.datasource.url=jdbc:mysql://localhost:3306/sakila\nspring.datasource.username=root\nspring.datasource.password=mysql\n")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database connection. The above example assumes that you are using the ",Object(i.b)("em",{parentName:"p"},"sakila")," database created from this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(i.b)("h2",{id:"adding-graphql-endpoint"},"Adding GraphQL Endpoint"),Object(i.b)("p",null,"The final step is exposing an API endpoint for handling the GraphQL request. To do it, let's create a new file ",Object(i.b)("em",{parentName:"p"},"GraphQLController.java")," and do the following "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a POJO ",Object(i.b)("inlineCode",{parentName:"li"},"GraphQLRequest")," for deserializing GraphQL request from the client."),Object(i.b)("li",{parentName:"ul"},"Create a Controller class with a ",Object(i.b)("inlineCode",{parentName:"li"},"GraphQLResolver")," dependency. "),Object(i.b)("li",{parentName:"ul"},"Create a method inside this class to handle the GraphQL request. ")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:"{25-28}","{25-28}":!0}),'package org.graphqlize.java.springboot;\n\nimport org.graphqlize.java.GraphQLResolver;\nimport org.springframework.http.*;\nimport org.springframework.web.bind.annotation.*;\nimport java.util.Map;\n\nclass GraphQLRequest {\n  private String query;\n  private Map<String, Object> variables;\n\n  // ... Getters & Setters are ignored for brevity\n}\n\n@RestController\npublic class GraphQLController {\n  private final GraphQLResolver graphQLResolver;\n\n  public GraphQLController(GraphQLResolver graphQLResolver) {\n    this.graphQLResolver = graphQLResolver;\n  }\n\n  @PostMapping("/graphql")\n  public ResponseEntity handle(@RequestBody GraphQLRequest graphQLRequest) {\n    String result = \n      graphQLResolver.resolve(\n        graphQLRequest.getQuery(), \n        graphQLRequest.getVariables());\n\n    return ResponseEntity.ok()\n            .header(HttpHeaders.CONTENT_TYPE, "application/json")\n            .body(result);\n  }\n}\n')),Object(i.b)("p",null,"Handling the GraphQL request is as simple as highlighted above. "),Object(i.b)("p",null,"Get the query & the variables from the request and invoke the ",Object(i.b)("inlineCode",{parentName:"p"},"resolve")," method on the initialized instance of ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver"),". "),Object(i.b)("p",null,"It returns the ",Object(i.b)("inlineCode",{parentName:"p"},"result")," as stringified JSON, and we are sending it as response body with the content type as ",Object(i.b)("inlineCode",{parentName:"p"},"application/json"),". "),Object(i.b)("h3",{id:"test-drive"},"Test Drive"),Object(i.b)("p",null,"To a test drive of this implementation, start the server and hit the endpoint via curl."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'> curl -X POST \\\n  --data \'{"query": "query { actorByActorId(actorId: 1){firstName}}"}\' \\\n  -H "Content-Type: application/json" \\\n  http://localhost:8080/graphql\n')),Object(i.b)("p",null,"You'll get a response like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "actorByActorId": {\n      "firstName": "PENELOPE"\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"graphql-playground-and-voyager"},"GraphQL Playground and Voyager"),Object(i.b)("p",null,"With the GraphQL endpoint up and running, the next step is introspecting the GraphQL schema and try out some more queries. "),Object(i.b)("p",null,"To introspect, we are going to make use of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/APIs-guru/graphql-voyager"}),"Voyager"),", a tool to visualize GraphQL API as an interactive graph. Adding it to our project is easy thanks to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://spring.io/blog/2013/12/19/serving-static-web-content-with-spring-boot"}),"static content serve capability")," of Spring Boot. "),Object(i.b)("p",null,"All you need to do is download this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/java/spring-boot/src/main/resources/static/voyager.html"}),"voyager.html")," file and put it under the ",Object(i.b)("em",{parentName:"p"},"src/main/resources/static")," directory. "),Object(i.b)("p",null,"When you restart the server, the Voyager will be available at ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"http://localhost:8080/voyager.html"}),"http://localhost:8080/voyager.html")),". A sample output would look like ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphqlize.org/html/sakila-voyager.html"}),"this"),"."),Object(i.b)("p",null,"Then to interact with the GraphQL API, let's add the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/prisma-labs/graphql-playground"}),"GraphQL Playground"),". Like Voyager, download this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/java/spring-boot/src/main/resources/static/playground.html"}),"playground.html")," file and put in the ",Object(i.b)("em",{parentName:"p"},"static")," directory. "),Object(i.b)("p",null,"This GraphQL playground will be available at ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"http://localhost:8080/playground.html"}),"http://localhost:8080/playground.html"))," after server restart. "),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/graphql-playground.png",alt:null}))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Congrats! You are on course to build impressive applications using GraphQLize in less time. To save yourself some more time, do refer ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/graphql_schema/types-and-fields"}),"this documentation")," to know more about how GraphQLize generates the GraphQL schema and the queries. "),Object(i.b)("p",null,"The sample code is available in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/tree/master/java/spring-boot"}),"this GitHub Repository"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can also customize certain default behaviours of GraphQLize in future releases."))))}d.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(a),h=r,u=b["".concat(o,".").concat(h)]||b[h]||d[h]||i;return a?n.a.createElement(u,s({ref:t},l,{components:a})):n.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},151:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},152:function(e,t,a){"use strict";var r=a(0);const n=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=n},153:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}},154:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(152);var o=function(){return Object(r.useContext)(i.a)},s=a(151),p=a.n(s),l=a(95),c=a.n(l);const b=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:i,values:s,groupId:l}=e,{tabGroupChoices:h,setTabGroupChoices:u}=o(),[g,m]=Object(r.useState)(i);if(null!=l){const e=h[l];null!=e&&e!==g&&m(e)}const j=e=>{m(e),null!=l&&u(l,e)},v=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:p()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:p()("tab-item",c.a.tabItem,{"tab-item--active":g===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter(e=>e.props.value===g)[0]))}}}]);