/*! For license information please see 5b1ff037.a78016e0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(1),r=(t(0),t(136)),i=t(138),c=t(139);const o={id:"vanilla",title:"Vanilla Clojure",sidebar_label:"Vanilla"},l={id:"getting_started/clojure/vanilla",title:"Vanilla Clojure",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/getting_started/clojure/vanilla.mdx",permalink:"/docs/getting_started/clojure/vanilla",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/clojure/vanilla.mdx",sidebar_label:"Vanilla",sidebar:"docs",previous:{title:"Ring",permalink:"/docs/getting_started/clojure/ring"},next:{title:"Types & Fields",permalink:"/docs/graphql_schema/types-and-fields"}},s=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Configuring DataSource",id:"configuring-datasource",children:[]},{value:"Creating Lacinia Schema",id:"creating-lacinia-schema",children:[]},{value:"Querying Database",id:"querying-database",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:s};function b({components:e,...a}){return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"One of the core design goals of GraphQLize is not to tie to any web development library/framework and remain as a drop-in Clojure library. GraphQLize built on top of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://lacinia.readthedocs.io/en/latest/"}),"Lacinia"),", a de-facto library for implementing GraphQL APIs in Clojure."),Object(r.b)("p",null,"Getting started with GraphQLize in vanilla Clojure is straight-forward and involves only three steps."),Object(r.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(r.b)("p",null,"Create a new Clojure project using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/seancorfield/clj-new"}),"deps")," (or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://leiningen.org/"}),"leiningen"),") and add the GraphQLize and other dependencies."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://clojars.org/org.graphqlize/graphqlize"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/org.graphqlize/graphqlize.svg",alt:"Clojars Project"})))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{4}","{4}":!0}),';; deps.edn\n{:paths ["src" "resources"]\n :deps  {org.clojure/clojure              {:mvn/version "1.10.1"}\n         org.graphqlize/graphqlize        {:mvn/version "0.1.0-alpha5"}\n         ;; db connection pool\n         hikari-cp                        {:mvn/version "2.10.0"}\n         ;; for postgres\n         org.postgresql/postgresql        {:mvn/version "42.2.8"}\n         ;; for MySQL\n         mysql/mysql-connector-java       {:mvn/version "8.0.19"}}}\n')),Object(r.b)("h2",{id:"configuring-datasource"},"Configuring DataSource"),Object(r.b)("p",null,"The next step is configuring the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"DataSource"),". In this example, we are going to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/brettwooldridge/HikariCP"}),"Hikari Connection Pool")," to manage the database connection."),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For brevity, this sample uses ",Object(r.b)("inlineCode",{parentName:"p"},"def")," to define the states. In a real-world project, you can replace it with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stuartsierra/component"}),"Component"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tolitius/mount"}),"Mount"),", or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/weavejester/integrant"}),"Integrant"),"."))),Object(r.b)(i.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"postgres",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),';; src/core.clj\n(ns core\n  (:require [hikari-cp.core :as hikari]))\n\n(def db-spec (hikari/make-datasource {:adapter           "postgresql"\n                                      :database-name     "sakila"\n                                      :server-name       "localhost"\n                                      :port-number       5432\n                                      :maximum-pool-size 1\n                                      :username          "postgres"\n                                      :password          "postgres"}))\n'))),Object(r.b)(c.a,{value:"mysql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),';; src/core.clj\n(ns core\n  (:require [hikari-cp.core :as hikari]))\n\n(def db-spec (hikari/make-datasource {:server-name       "localhost"\n                                      :maximum-pool-size 1\n                                      :jdbc-url          "jdbc:mysql://localhost:3306/sakila"\n                                      :driver-class-name "com.mysql.cj.jdbc.MysqlDataSource"\n                                      :username          "root"\n                                      :password          "mysql123"}))\n')))),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database connection. The above example assumes that you are using the ",Object(r.b)("em",{parentName:"p"},"sakila")," database created from this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(r.b)("h2",{id:"creating-lacinia-schema"},"Creating Lacinia Schema"),Object(r.b)("p",null,"Then create a lacinia schema from the data source using GraphQLize."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{3,7}","{3,7}":!0}),"(ns core\n  (:require ; ...\n            [graphqlize.lacinia.core :as l]))\n\n(def db-spec ...)\n\n(def lacinia-schema (l/schema db-spec))\n")),Object(r.b)("h2",{id:"querying-database"},"Querying Database"),Object(r.b)("p",null,"With the ",Object(r.b)("inlineCode",{parentName:"p"},"lacinia-schema")," in place, we can query the underlying database using GraphQL by invoking the Lacinia's ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://walmartlabs.github.io/apidocs/lacinia/com.walmartlabs.lacinia.html#var-execute"}),"execute")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{8,10}","{8,10}":!0}),"(ns core\n  (:require ;...\n            [com.walmartlabs.lacinia :as lacinia]))\n; ...\n\n(defn execute\n  ([query]\n   (lacinia/execute lacinia-schema query nil nil))\n  ([query variables]\n   (lacinia/execute lacinia-schema query variables nil)))\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'=> (execute "query { actorByActorId(actorId: 1) { firstName, lastName } }")\n;; {:data { :actorByActorId { :firstName "PENELOPE" :lastName "GUINESS" } } }\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," function has an overload to support ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#variables"}),"GraphQL variables")," as well. The above example can be re-written using variables as below."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'=> (execute \n     "query($actorId: Int!) { actorByActorId(actorId: $actorId) { firstName, lastName } }" \n     {:actorId 1})\n{:data { :actorByActorId { :firstName "PENELOPE" :lastName "GUINESS" } } }\n')),Object(r.b)("p",null,"We can also run the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/introspection/"}),"introspection queries")," to know what types and queries the ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," supports. "),Object(r.b)("p",null,"To know all the types generated by the GraphQLize. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'=> (execute "{__schema {types {name}}}")\n{:data\n {:__schema\n  {:types\n   ({:name "Actor"}\n    {:name "ActorInfo"}\n    {:name "Address"} ...)}}}\n')),Object(r.b)("p",null,"To know more the fields of a given type, we can run the following introspection query."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'=> (execute "{__type(name: \\"Actor\\") { fields { name type { name kind ofType { name kind }}}}}")\n{:data\n {:__type\n  {:fields\n   ({:name "actorId" \n     :type {:name nil :kind :NON_NULL :ofType {:name "Int" :kind :SCALAR}}}\n    {:name "filmActors" \n     :type {:name nil :kind :NON_NULL :ofType {:name nil :kind :LIST}}}\n    {:name "films" \n     :type {:name nil :kind :NON_NULL :ofType {:name nil :kind :LIST}}}\n    {:name "firstName" \n     :type {:name nil :kind :NON_NULL :ofType {:name "String" :kind :SCALAR}}}\n    {:name "lastName" \n     :type {:name nil :kind :NON_NULL :ofType {:name "String" :kind :SCALAR}}}\n    {:name "lastUpdate" \n     :type {:name nil :kind :NON_NULL :ofType {:name "String" :kind :SCALAR}}})}}}\n')),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Congrats! You are on course to build impressive applications using GraphQLize in less time. To save yourself some more time, do refer ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/graphql_schema/types-and-fields"}),"this documentation")," to know more about how GraphQLize generates the GraphQL schema and the queries. "),Object(r.b)("p",null,"The sample code is available in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/tree/master/clojure/vanilla"}),"this GitHub Repository"),"."))}b.isMDXComponent=!0},136:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o({},a,{},e)),t},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return t?r.a.createElement(d,o({ref:a},s,{components:t})):r.a.createElement(d,o({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},137:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===i)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},138:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(137),c=t.n(i),o=t(86),l=t.n(o);const s=37,p=39;a.a=function(e){const{block:a,children:t,defaultValue:i,values:o}=e,[b,m]=Object(n.useState)(i),u=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":a})},o.map(({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:c()("tab-item",l.a.tabItem,{"tab-item--active":b===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case p:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case s:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(u,e.target,e),onFocus:()=>m(e),onClick:()=>m(e)},a))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===b)[0]))}},139:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);