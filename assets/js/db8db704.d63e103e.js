"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7349],{99662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(85893),i=n(3905);const o={sidebar_position:1,description:"What should be in this section."},s="Design Document - Part II API",a={id:"api-specification/design-api-intro",title:"Design Document - Part II API",description:"What should be in this section.",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/project-instructors/docs/api-specification/design-api-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-instructors/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"Ian Tyler Applebaum",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"What should be in this section."},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-instructors/docs/category/api-specification"},next:{title:"API 1 - Swagger Petstore",permalink:"/project-instructors/docs/api-specification/openapi-spec"}},c={},p=[];function d(e){const t={a:"a",h1:"h1",p:"p",strong:"strong",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"design-document---part-ii-api",children:"Design Document - Part II API"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Purpose"})}),"\n",(0,r.jsx)(t.p,{children:"This Design Document gives the complete design of the software implementation. This information should be in structured comments (e.g. Javadoc) in the source files. We encourage the use of a documentation generation tool to generate a draft of your API that you can augment to include the following details."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Requirements"})}),"\n",(0,r.jsx)(t.p,{children:"In addition to the general documentation requirements the Design Document - Part II API will contain:"}),"\n",(0,r.jsx)(t.p,{children:"General review of the software architecture for each module specified in Design Document - Part I Architecture. Please include your class diagram as an important reference."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"For each class define the data fields, methods."})}),"\n",(0,r.jsx)(t.p,{children:"The purpose of the class."}),"\n",(0,r.jsx)(t.p,{children:"The purpose of each data field."}),"\n",(0,r.jsx)(t.p,{children:"The purpose of each method"}),"\n",(0,r.jsx)(t.p,{children:"Pre-conditions if any."}),"\n",(0,r.jsx)(t.p,{children:"Post-conditions if any."}),"\n",(0,r.jsx)(t.p,{children:"Parameters and data types"}),"\n",(0,r.jsx)(t.p,{children:"Return value and output variables"}),"\n",(0,r.jsx)(t.p,{children:"Exceptions thrown* (PLEASE see note below for details)."}),"\n",(0,r.jsxs)(t.p,{children:["An example of an auto-generated and then augmented API specification is here (",(0,r.jsx)(t.a,{href:"https://templeu.instructure.com/courses/106563/files/16928898?wrap=1",title:"Fiscal Design Document 2_API.docx",children:"Fiscal Design Document 2_API.docx"})," )"]}),"\n",(0,r.jsxs)(t.p,{children:["This group developed their API documentation by hand (",(0,r.jsx)(t.a,{href:"https://templeu.instructure.com/courses/106563/files/16928899?wrap=1",title:"Design Document Part 2 API-1_MovieMatch.docx",children:"Design Document Part 2 API-1_MovieMatch.docx"})," )"]}),"\n",(0,r.jsx)(t.p,{children:'*At the top level, or where appropriate, all exceptions should be caught and an error message that is meaningful to the user generated. It is not OK to say ("xxxx has encountered a problem and will now close (OK?)". Error messages and recovery procedures should be documented in the User\u2019s Manual.'})]})}function l(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));l.displayName="MDXCreateElement"}}]);