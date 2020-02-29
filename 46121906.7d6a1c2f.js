(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(1),n=(a(0),a(137));const i={id:"intro",title:"Introduction",sidebar_label:"Introduction"},o={id:"graphqlize/intro",title:"Introduction",description:"## What is GraphQLize?",source:"@site/docs/graphqlize/intro.md",permalink:"/docs/graphqlize/intro",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/graphqlize/intro.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Pedestal",permalink:"/docs/getting_started/clojure/pedestal"}},l=[{value:"What is GraphQLize?",id:"what-is-graphqlize",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]},{value:"License",id:"license",children:[]}],c={rightToc:l};function b({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"what-is-graphqlize"},"What is GraphQLize?"),Object(n.b)("p",null,"GraphQLize is a JVM library for developing GraphQL API from your existing PostgreSQL and MySQL databases. It aims to simplify the effort required to expose GraphQL APIs over relational databases with a developer-centric approach. It is written in Clojure with Java interoperability."),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("p",null,"Getting started with GraphQLize is simple and involves only few steps."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Add the GraphQLize dependency in your (exisitng) project."),Object(n.b)("li",{parentName:"ol"},"Initialize GraphQLize Resolver by providing the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"datasource"),"."),Object(n.b)("li",{parentName:"ol"},"Add a GraphQL API endpoint and use the initialized GraphQlize Resolver in the previous step.")),Object(n.b)("p",null,"The actual implementation of these steps will vary based on which language (Java, Clojure) and framework (Spring Boot, Spark Java, Pedestal, etc.,). Please refer the below links for more details."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Java"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:""}),"Spring Boot")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:""}),"Spark Java")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:""}),"Vanilla Java")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clojure"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:""}),"Pedestal")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/getting_started/clojure/ring"}),"Ring")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:""}),"Vanilla Clojure"))))),Object(n.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(n.b)("p",null,"GraphQLize is inspired by ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://postgrest.org"}),"PostgREST"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphile.org/postgraphile/"}),"PostGraphile"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.keystonejs.com/"}),"KeyStoneJs")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hasura.io/"}),"Hasura"),"."),Object(n.b)("p",null,"GraphQLize is not possible without the following awesome Clojure libraries."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jkk/honeysql"}),"HoneySQL")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/walmartlabs/lacinia"}),"Lacinia")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/seancorfield/next-jdbc"}),"next-jdbc")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/r0man/inflections-clj"}),"inflections")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/clojure/data.json"}),"data-json"))),Object(n.b)("h2",{id:"license"},"License"),Object(n.b)("p",null,"The use and distribution terms for this software are covered by the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.eclipse.org/legal/epl-2.0"}),"Eclipse Public License - v 2.0")," which can be found in the file LICENSE at the root of this distribution. By using this software in any fashion, you are agreeing to be bound by the terms of this license. You must not remove this notice, or any other, from this software."))}b.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),h=r,d=s["".concat(o,".").concat(h)]||s[h]||u[h]||i;return a?n.a.createElement(d,l({ref:t},b,{components:a})):n.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);