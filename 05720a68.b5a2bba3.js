/*! For license information please see 05720a68.b5a2bba3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(o,".").concat(m)]||p[m]||b[m]||l;return r?n.a.createElement(y,c({ref:t},s,{components:r})):n.a.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},136:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var o=n.apply(null,a);o&&e.push(o)}else if("object"===l)for(var c in a)r.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},142:function(e,t,r){"use strict";var a=r(0),n=r.n(a),l=r(136),o=r.n(l),c=r(86),i=r.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:r,defaultValue:l,values:c}=e,[p,b]=Object(a.useState)(l),m=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:o()("tab-item",i.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,r)=>{switch(r.keyCode){case u:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(r).filter(e=>e.props.value===p)[0]))}},143:function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=function(e){return n.a.createElement("div",null,e.children)}},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(6),l=(r(0),r(135)),o=r(142),c=r(143),i={id:"query-by-primary-key",title:"Querying tables by its primary key",sidebar_label:"Query Tables By Primary Key(s)"},s={id:"queries/query-by-primary-key",title:"Querying tables by its primary key",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/queries/query_by_primary_key.mdx",permalink:"/docs/queries/query-by-primary-key",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/query_by_primary_key.mdx",sidebar_label:"Query Tables By Primary Key(s)",sidebar:"docs",previous:{title:"Custom Scalar Types",permalink:"/docs/graphql_schema/custom-scalar-types"},next:{title:"Querying Tables & Views",permalink:"/docs/queries/query-table-and-view"}},u=[{value:"Sample Queries",id:"sample-queries",children:[]}],p={rightToc:u};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"For every table that has primary key(s), GraphQLize generates a corresponding GraphQL query to enable querying the table by its primary keys."),Object(l.b)("p",null,"For a table like below,"),Object(l.b)(o.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"postgres",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE actor (\n  actor_id SERIAL PRIMARY KEY,\n  first_name character varying(45) NOT NULL,\n  last_name character varying(45) NOT NULL\n);\n"))),Object(l.b)(c.a,{value:"mysql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE actor (\n  actor_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(45) NOT NULL,\n  last_name VARCHAR(45) NOT NULL,\n  PRIMARY KEY  (actor_id)\n)\n")))),Object(l.b)("p",null,"GraphQLize generates the following query"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type QueryRoot {\n  actorByActorId(actorId: Int!): Actor\n  # ...\n}\n\nschema {\n  query: QueryRoot\n}\n")),Object(l.b)("p",null,"The query name ",Object(l.b)("inlineCode",{parentName:"p"},"actorByActorId")," is created using the following convention. "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"{camel-case(table-name)}"),Object(l.b)("em",{parentName:"p"},"By"),Object(l.b)("inlineCode",{parentName:"p"},"{pascal-case(primary-key-column-name)}")),Object(l.b)("p",null,"If a table has multiple primary keys like below"),Object(l.b)(o.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"postgres",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE film_actor (\n  actor_id smallint REFERENCES actor(actor_id),\n  film_id smallint REFERENCES film(film_id)\n  CONSTRAINT film_actor_pkey PRIMARY KEY (actor_id, film_id)\n);\n"))),Object(l.b)(c.a,{value:"mysql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE film_actor (\n  actor_id SMALLINT UNSIGNED NOT NULL,\n  film_id SMALLINT UNSIGNED NOT NULL,\n  PRIMARY KEY (actor_id,film_id)\n);\n")))),Object(l.b)("p",null,"GraphQLize generates the following query"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type QueryRoot {\n  filmActorByActorIdAndFilmId(actorId: Int!, filmId: Int!): FilmActor \n  # ...\n}\n")),Object(l.b)("p",null,"The convention followed for generating the query name is same as above except that primary key columns are sorted by their names and concatenated with ",Object(l.b)("inlineCode",{parentName:"p"},"And"),". "),Object(l.b)("h2",{id:"sample-queries"},"Sample Queries"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"# Table Name: employee \n# Primary Key Column Name: id\n\nquery {\n  employeeById(id: 1) {\n    # Column Name: `first_name`\n    firstName\n    # Column Name: `last_name`\n    lastName\n    # Column Name: `employee_reports_to_id`\n    employeeReportsToId\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\n# Table Name: `country` \n# Primary Key Column Name: `country_id`\n\nquery {\n  countryByCountryId(countryId: 1) {\n    # Column Name: `country`\n    country\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'# Query by UUID primary key is also supported.\n# Limited to Postgres alone.\n\n# Table Name: `customer` \n# Primary Key Column Name: `id` (of type `UUID`)\n\nquery {\n  customerById(id: "847f09a7-39d1-4021-b43d-18ceb7ada8f6") {\n    # Column Name: `id`\n    id\n    # Column Name: `first_name`\n    firstName\n  }\n}\n')))}b.isMDXComponent=!0}}]);