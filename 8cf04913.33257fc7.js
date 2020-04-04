/*! For license information please see 8cf04913.33257fc7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(6),b=(a(0),a(154)),c=a(158),l=a(157),i={id:"types-and-fields",title:"Types & Fields",sidebar_label:"Types & Fields"},p={id:"graphql_schema/types-and-fields",title:"Types & Fields",description:"The crux of GraphQLize is generating the GraphQL types and queries by making use of [JDBC metadata](https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html). This page documents the conventions and assumptions behind this automatic generation.",source:"@site/docs/graphql_schema/types_and_fields.mdx",permalink:"/docs/graphql_schema/types-and-fields",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/graphql_schema/types_and_fields.mdx",sidebar_label:"Types & Fields",sidebar:"docs",previous:{title:"Scalatra",permalink:"/docs/getting_started/scala/scalatra"},next:{title:"Relationships",permalink:"/docs/graphql_schema/relationships"}},d=[{value:"Type name",id:"type-name",children:[]},{value:"Field name",id:"field-name",children:[]},{value:"Field type",id:"field-type",children:[]}],o={rightToc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The crux of GraphQLize is generating the GraphQL types and queries by making use of ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html"}),"JDBC metadata"),". This page documents the conventions and assumptions behind this automatic generation."),Object(b.b)("h2",{id:"type-name"},"Type name"),Object(b.b)("p",null,"For every tables and views in the database, GraphQLize generates a GraphQL type. The name of the GraphQL type is the singularized, ",Object(b.b)("em",{parentName:"p"},"PascalCase")," version of the corresponding table or view name."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table/View Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GraphQL Type Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"actor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actor")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"film_actor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FilmActor")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"comments"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comment")))),Object(b.b)("p",null,"GraphQlize supports Postgres ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/current/ddl-schemas.html"}),"schema"),". If the schema in question is not default schema (",Object(b.b)("inlineCode",{parentName:"p"},"public"),"), then it will be used as a prefix in the GraphQL type name."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table/View Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GraphQL Type Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"person"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state_province"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PersonStateProvince")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"human_resources"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"employee"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HumanResourcesEmployee")))),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The table name is alone singularized and not the schema name."))),Object(b.b)("h2",{id:"field-name"},"Field name"),Object(b.b)("p",null,"The Field names of a generated GraphQL Type represent the column names of the corresponding database table or view. GraphQLize generates the field name by converting the column name to its ",Object(b.b)("em",{parentName:"p"},"camelCase")," version."),Object(b.b)("p",null,"For a table like below,"),Object(b.b)(c.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(b.b)(l.a,{value:"postgres",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE actor (\n  actor_id SERIAL PRIMARY KEY,\n  first_name character varying(45) NOT NULL,\n  last_name character varying(45) NOT NULL\n);\n"))),Object(b.b)(l.a,{value:"mysql",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE actor (\n  actor_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(45) NOT NULL,\n  last_name VARCHAR(45) NOT NULL,\n  PRIMARY KEY  (actor_id)\n)\n")))),Object(b.b)("p",null,"GraphQLize generates a GraphQL type as "),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Actor {\n  actorId: Int!\n  firstName: String!\n  lastName: String!\n}\n")),Object(b.b)("h2",{id:"field-type"},"Field type"),Object(b.b)("p",null,"GraphQLize supports the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/schema/#scalar-types"}),"standard GraphQL scalar types")," and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/graphql_schema/custom-scalar-types"}),"some custom scalar types"),"."),Object(b.b)("p",null,"During the schema generation, GraphQLize checks the column's database type and convert it to a GraphQL scalar type. Refer the table below for the type conversion mapping."),Object(b.b)(c.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(b.b)(l.a,{value:"postgres",mdxType:"TabItem"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GraphQL Scalar Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type(s)"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"integer"),", ",Object(b.b)("inlineCode",{parentName:"td"},"int"),", ",Object(b.b)("inlineCode",{parentName:"td"},"int2"),"  ",Object(b.b)("inlineCode",{parentName:"td"},"int4"),", ",Object(b.b)("inlineCode",{parentName:"td"},"smallint"),", ",Object(b.b)("inlineCode",{parentName:"td"},"smallserial"),", ",Object(b.b)("inlineCode",{parentName:"td"},"serial"),", ",Object(b.b)("inlineCode",{parentName:"td"},"serial2"),", ",Object(b.b)("inlineCode",{parentName:"td"},"serial4"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Float"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"real"),", ",Object(b.b)("inlineCode",{parentName:"td"},"float4"),", ",Object(b.b)("inlineCode",{parentName:"td"},"float8"),", ",Object(b.b)("inlineCode",{parentName:"td"},"double precision"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bit"),", ",Object(b.b)("inlineCode",{parentName:"td"},"bit varying"),", ",Object(b.b)("inlineCode",{parentName:"td"},"char"),", ",Object(b.b)("inlineCode",{parentName:"td"},"character varying"),", ",Object(b.b)("inlineCode",{parentName:"td"},"varchar"),", ",Object(b.b)("inlineCode",{parentName:"td"},"citext"),", ",Object(b.b)("inlineCode",{parentName:"td"},"bpchar"),", ",Object(b.b)("inlineCode",{parentName:"td"},"macaddr8"),", ",Object(b.b)("inlineCode",{parentName:"td"},"text"),", ",Object(b.b)("inlineCode",{parentName:"td"},"money"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"td"},"bool"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#uuid"}),"UUID")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"uuid"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#long"}),"Long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bigint"),",",Object(b.b)("inlineCode",{parentName:"td"},"int8"),",",Object(b.b)("inlineCode",{parentName:"td"},"bigserial"),",",Object(b.b)("inlineCode",{parentName:"td"},"serial8"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#bigdecimal"}),"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"numeric"),",",Object(b.b)("inlineCode",{parentName:"td"},"decimal"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#date"}),"Date")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#time"}),"Time")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time"),", ",Object(b.b)("inlineCode",{parentName:"td"},"time without time zone"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#timewithtimezone"}),"TimeWithTimeZone")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timetz"),", ",Object(b.b)("inlineCode",{parentName:"td"},"time with time zone"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#datetime"}),"DateTime")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamp"),",",Object(b.b)("inlineCode",{parentName:"td"},"timestamp without time zone"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#datetimwithtimezone"}),"DateTimeWithTimeZone")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamptz"),",",Object(b.b)("inlineCode",{parentName:"td"},"timestamp with time zone")))))),Object(b.b)(l.a,{value:"mysql",mdxType:"TabItem"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GraphQL Scalar Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type(s)"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"SMALLINT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"MEDIUMINT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"INT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TINYINT UNSIGNED"),", ",Object(b.b)("inlineCode",{parentName:"td"},"SMALLINT UNSIGNED"),", ",Object(b.b)("inlineCode",{parentName:"td"},"MEDIUMINT UNSIGNED"),", ",Object(b.b)("inlineCode",{parentName:"td"},"YEAR"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Float"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DECIMAL"),", ",Object(b.b)("inlineCode",{parentName:"td"},"NUMERIC"),", ",Object(b.b)("inlineCode",{parentName:"td"},"REAL"),", ",Object(b.b)("inlineCode",{parentName:"td"},"FLOAT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"DOUBLE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"CHAR"),", ",Object(b.b)("inlineCode",{parentName:"td"},"VARCHAR"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TINYTEXT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TEXT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"MEDIUMTEXT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LONGTEXT"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ENUM"),", ",Object(b.b)("inlineCode",{parentName:"td"},"SET"),", ",Object(b.b)("inlineCode",{parentName:"td"},"BINARY"),", ",Object(b.b)("inlineCode",{parentName:"td"},"VARBINARY"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TINYBLOB,")," ",Object(b.b)("inlineCode",{parentName:"td"},"BLOB"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LONGBLOB"),", ",Object(b.b)("inlineCode",{parentName:"td"},"BIT"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/graphqlize/graphqlize/issues/10"}),"Yet to support"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UUID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/graphqlize/graphqlize/issues/11"}),"Yet to support"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#long"}),"Long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"INT UNSIGNED"),",",Object(b.b)("inlineCode",{parentName:"td"},"BIGINT"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#bigdecimal"}),"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"numeric"),",",Object(b.b)("inlineCode",{parentName:"td"},"decimal"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#biginteger"}),"BigInteger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BIGINT UNSIGNED"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#date"}),"Date")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#time"}),"Time")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/graphql_schema/custom-scalar-types#datetime"}),"DateTime")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DATETIME"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TIMESTAMP"))))))),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"If a column's database type is not available in the above table, GraphQLize assumes ",Object(b.b)("inlineCode",{parentName:"p"},"String")," as the default scalar data type for the corresponding GraphQL field."))))}m.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},o=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=d(a),s=n,O=o["".concat(c,".").concat(s)]||o[s]||m[s]||b;return a?r.a.createElement(O,l({ref:t},p,{components:a})):r.a.createElement(O,l({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},155:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var b=typeof n;if("string"===b||"number"===b)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===b)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},156:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),b=a(156);var c=function(){return Object(n.useContext)(b.a)},l=a(155),i=a.n(l),p=a(95),d=a.n(p);const o=37,m=39;t.a=function(e){const{block:t,children:a,defaultValue:b,values:l,groupId:p}=e,{tabGroupChoices:s,setTabGroupChoices:O}=c(),[j,N]=Object(n.useState)(b);if(null!=p){const e=s[p];null!=e&&e!==j&&N(e)}const u=e=>{N(e),null!=p&&O(p,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===e,className:i()("tab-item",d.a.tabItem,{"tab-item--active":j===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===j)[0]))}}}]);