(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1142:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1159:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/store-explorer-0a5595b3de2f554959305069dcf6082e.png"},1160:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mutations-view-c5ab060209093a52fd4b2a236e09a08f.png"},453:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),a=(r(0),r(1142)),i={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},c={unversionedId:"relay-debugging",id:"version-v1.4.1/relay-debugging",isDocsHomePage:!1,title:"Debugging",description:"When problems arise developers would need an insight into Relay's store. Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v1.4.1/Modern-Debugging.md",slug:"/relay-debugging",permalink:"/docs/v1.4.1/relay-debugging",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.4.1/Modern-Debugging.md",version:"v1.4.1",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1620919370,sidebar:"version-v1.4.1/docs",previous:{title:"Routing",permalink:"/docs/v1.4.1/routing"},next:{title:"GraphQL Server Specification",permalink:"/docs/v1.4.1/graphql-server-specification"}},s=[],l={toc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When problems arise developers would need an insight into Relay's store. Relay provides a couple of tools to inspect the store and its records."),Object(a.b)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/relay-devtools/oppikflppfjfdpjimpdadhelffjpciba"}),"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/relay-devtools"}),"Electron App")," that connects to React Native apps running Relay")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Store Explorer",src:r(1159).default}),"\n",Object(a.b)("img",{alt:"Mutations View",src:r(1160).default})))}p.isMDXComponent=!0}}]);