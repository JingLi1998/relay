(self.webpackChunk=self.webpackChunk||[]).push([[91327],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),s=function(e){return function(n){var t=u(n.components);return a.createElement(e,r({},n,{components:t}))}},u=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=u(t),c=i,h=s["".concat(l,".").concat(c)]||s[c]||p[c]||r;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var a=t(79973),i=t(67294),r=t(73727),l=t(52263),o=t(13919),d=t(10412),m=(0,i.createContext)({collectLink:function(){}}),s=t(44996),u=t(18780),c=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var n,t,p=e.isNavLink,h=e.to,f=e.href,g=e.activeClassName,x=e.isActive,N=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,b=void 0===y||y,w=(0,a.Z)(e,c),v=(0,l.default)().siteConfig,C=v.trailingSlash,k=v.baseUrl,P=(0,s.useBaseUrlUtils)().withBaseUrl,q=(0,i.useContext)(m),O=h||f,F=(0,o.Z)(O),j=null==O?void 0:O.replace("pathname://",""),T=void 0!==j?(t=j,b&&function(e){return e.startsWith("/")}(t)?P(t):t):void 0;T&&F&&(T=(0,u.applyTrailingSlash)(T,{trailingSlash:C,baseUrl:k}));var E=(0,i.useRef)(!1),L=p?r.OL:r.rU,R=d.default.canUseIntersectionObserver,_=(0,i.useRef)();(0,i.useEffect)((function(){return!R&&F&&null!=T&&window.docusaurus.prefetch(T),function(){R&&_.current&&_.current.disconnect()}}),[_,T,R,F]);var U=null!==(n=null==T?void 0:T.startsWith("#"))&&void 0!==n&&n,B=!T||!F||U;return T&&F&&!U&&!N&&q.collectLink(T),B?i.createElement("a",Object.assign({href:T},O&&!F&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(L,Object.assign({},w,{onMouseEnter:function(){E.current||null==T||(window.docusaurus.preload(T),E.current=!0)},innerRef:function(e){var n,t;R&&e&&F&&(n=e,t=function(){null!=T&&window.docusaurus.prefetch(T)},_.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(n),_.current.disconnect(),t())}))})),_.current.observe(n))},to:T||""},p&&{isActive:x,activeClassName:g}))}},13919:(e,n,t)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>i})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>r,default:()=>l});var a=t(52263),i=t(13919);function r(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var r=void 0===a?{}:a,l=r.forcePrependBaseUrl,o=void 0!==l&&l,d=r.absolute,m=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(o)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return m?e+s:s}(r,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,a=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,r=e.split(/[#?]/)[0],l="/"===r||r===a?r:(i=r,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,l)}},18780:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(r).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(36742),i=t(44256),r=t(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var d=function(){var e=r.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},m=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},s=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return r.createElement(o,null,r.createElement(m,null),r.createElement(d,null),r.createElement(s,null))},c=function(){return r.createElement(o,null,r.createElement(d,null),r.createElement(s,null))};const p=function(){return(0,i.fbContent)({internal:r.createElement(u,null),external:r.createElement(c,null)})}},13293:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>c,toc:()=>p,default:()=>g});var a,i=t(74034),r=t(79973),l=(t(67294),t(3905)),o=t(68629),d=t(44256),m=["components"],s={id:"use-pagination-fragment",title:"usePaginationFragment",slug:"/api-reference/use-pagination-fragment/",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",keywords:["pagination","connection"]},u=void 0,c={unversionedId:"api-reference/hooks/use-pagination-fragment",id:"api-reference/hooks/use-pagination-fragment",isDocsHomePage:!1,title:"usePaginationFragment",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",source:"@site/docs/api-reference/hooks/use-pagination-fragment.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-pagination-fragment/",permalink:"/docs/next/api-reference/use-pagination-fragment/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/hooks/use-pagination-fragment.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1645143416,formattedLastUpdatedAt:"2/18/2022",frontMatter:{id:"use-pagination-fragment",title:"usePaginationFragment",slug:"/api-reference/use-pagination-fragment/",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",keywords:["pagination","connection"]},sidebar:"docs",previous:{title:"useRefetchableFragment",permalink:"/docs/next/api-reference/use-refetchable-fragment/"},next:{title:"useMutation",permalink:"/docs/next/api-reference/use-mutation/"}},p=[{value:"<code>usePaginationFragment</code>",id:"usepaginationfragment",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Behavior",id:"behavior",children:[],level:3},{value:"Differences with <code>PaginationContainer</code>",id:"differences-with-paginationcontainer",children:[],level:3}],level:2}],h=(a="FbUsePaginationFragmentReturnValue",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),f={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,m);return(0,l.mdx)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"usepaginationfragment"},(0,l.mdx)("inlineCode",{parentName:"h2"},"usePaginationFragment")),(0,l.mdx)("p",null,"You can use ",(0,l.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," to render a fragment that uses a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@connection")," and paginate over it:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsList_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsList_user$key,\n};\n\nfunction FriendsList(props: Props) {\n  const {\n    data,\n    loadNext,\n    loadPrevious,\n    hasNext,\n    hasPrevious,\n    isLoadingNext,\n    isLoadingPrevious,\n    refetch, // For refetching connection\n  } = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n\n      <List items={data.friends?.edges.map(edge => edge.node)}>\n        {node => {\n          return (\n            <div>\n              {node.name} - {node.age}\n            </div>\n          );\n        }}\n      </List>\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n\nmodule.exports = FriendsList;\n")),(0,l.mdx)("h3",{id:"arguments"},"Arguments"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fragment"),": GraphQL fragment specified using a ",(0,l.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"This fragment must have an ",(0,l.mdx)("inlineCode",{parentName:"li"},"@connection")," directive on a connection field, otherwise using it will throw an error."),(0,l.mdx)("li",{parentName:"ul"},"This fragment must have a ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive, otherwise using it will throw an error. The ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are declared on ',(0,l.mdx)("inlineCode",{parentName:"li"},"Viewer")," or  ",(0,l.mdx)("inlineCode",{parentName:"li"},"Query")," types, or on a type that implements ",(0,l.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,l.mdx)("inlineCode",{parentName:"li"},"id"),").",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Note that you ",(0,l.mdx)("em",{parentName:"li"},"do not")," need to manually specify a pagination query yourself. The ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive will autogenerate a query with the specified ",(0,l.mdx)("inlineCode",{parentName:"li"},"queryName"),". This will also generate Flow types for the query, available to import from the generated file: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fragmentReference"),": The ",(0,l.mdx)("em",{parentName:"li"},"fragment reference")," is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The type of the fragment reference can be imported from the generated Flow types, from the file ",(0,l.mdx)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),", and can be used to declare the type of your ",(0,l.mdx)("inlineCode",{parentName:"li"},"Props"),". The name of the fragment reference type will be: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<fragment_name>$key"),". We use our ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/relayjs/eslint-plugin-relay"},"lint rule")," to enforce that the type of the fragment reference prop is correctly declared.")))),(0,l.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should corresponds the Flow type for the ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," pagination query. This type is available to import from the the auto-generated file: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"TFragmentRef"),": Type parameter corresponds to the type of the fragment reference argument (i.e. ",(0,l.mdx)("inlineCode",{parentName:"li"},"<fragment_name>$key"),"). This type usually does not need to be explicitly specified, and can be passed as ",(0,l.mdx)("inlineCode",{parentName:"li"},"_")," to let Flow infer the concrete type.")),(0,l.mdx)("h3",{id:"return-value"},"Return Value"),(0,l.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)(h,{mdxType:"FbUsePaginationFragmentReturnValue"})),(0,l.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("p",null,"Object containing the following properties:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified fragment.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingNext"),": Boolean value which indicates if a pagination request for the ",(0,l.mdx)("em",{parentName:"li"},"next")," items in the connection is currently in flight, including any incremental data payloads."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingPrevious"),": Boolean value which indicates if a pagination request for the ",(0,l.mdx)("em",{parentName:"li"},"previous")," items in the connection is currently in flight, including any incremental data payloads."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"hasNext"),': Boolean value which indicates if the end of the connection has been reached in the "forward" direction. It will be true if there are more items to query for available in that direction, or false otherwise.'),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"hasPrevious"),': Boolean value which indicates if the end of the connection has been reached in the "backward" direction. It will be true if there are more items to query for available in that direction, or false otherwise.'),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext"),': Function used to fetch more items in the connection in the "forward" direction.',(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Arguments:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"count"),(0,l.mdx)("em",{parentName:"li"},":")," Number that indicates how many items to query for in the pagination request."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads. If an error occurs during the request, ",(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete")," will be called with an ",(0,l.mdx)("inlineCode",{parentName:"li"},"Error")," object as the first parameter."))))),(0,l.mdx)("li",{parentName:"ul"},"Return Value:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the pagination request."))),(0,l.mdx)("li",{parentName:"ul"},"Behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext"),"  ",(0,l.mdx)("em",{parentName:"li"},"will not")," cause the component to suspend. Instead, the ",(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingNext")," value will be set to true while the request is in flight, and the new items from the pagination request will be added to the connection, causing the component to re-render."),(0,l.mdx)("li",{parentName:"ul"},"Pagination requests initiated from calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext")," will ",(0,l.mdx)("em",{parentName:"li"},"always")," use the same variables that were originally used to fetch the connection, ",(0,l.mdx)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious"),': Function used to fetch more items in the connection in the "backward" direction.',(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Arguments:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"count"),(0,l.mdx)("em",{parentName:"li"},":")," Number that indicates how many items to query for in the pagination request."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads. If an error occurs during the request, ",(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete")," will be called with an ",(0,l.mdx)("inlineCode",{parentName:"li"},"Error")," object as the first parameter."))))),(0,l.mdx)("li",{parentName:"ul"},"Return Value:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the pagination request."))),(0,l.mdx)("li",{parentName:"ul"},"Behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious"),"  ",(0,l.mdx)("em",{parentName:"li"},"will not")," cause the component to suspend. Instead, the ",(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingPrevious")," value will be set to true while the request is in flight, and the new items from the pagination request will be added to the connection, causing the component to re-render."),(0,l.mdx)("li",{parentName:"ul"},"Pagination requests initiated from calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious")," will ",(0,l.mdx)("em",{parentName:"li"},"always")," use the same variables that were originally used to fetch the connection, ",(0,l.mdx)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"refetch"),": Function used to refetch the connection fragment with a potentially new set of variables.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Arguments:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the new set of variable values to be used to fetch the ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," query.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"These variables need to match GraphQL variables referenced inside the fragment."),(0,l.mdx)("li",{parentName:"ul"},"However, only the variables that are intended to change for the refetch request need to be specified; any variables referenced by the fragment that are omitted from this input will fall back to using the value specified in the original parent query. So for example, to refetch the fragment with the exact same variables as it was originally fetched, you can call ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetch({})"),"."),(0,l.mdx)("li",{parentName:"ul"},"Similarly, passing an ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")," value for the ",(0,l.mdx)("inlineCode",{parentName:"li"},"$id")," variable is ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"optional")),", unless the fragment wants to be refetched with a different ",(0,l.mdx)("inlineCode",{parentName:"li"},"id"),". When refetching a ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," fragment, Relay will already know the id of the rendered object."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on cached data that is available. See the ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies/"},"Fetch Policies")," section for full specification."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads."))))),(0,l.mdx)("li",{parentName:"ul"},"Return value:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the refetch request."))),(0,l.mdx)("li",{parentName:"ul"},"Behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetch")," with a new set of variables will fetch the fragment again ",(0,l.mdx)("em",{parentName:"li"},"with the newly provided variables"),". Note that the variables you need to provide are only the ones referenced inside the fragment. In this example, it means fetching the translated body of the currently rendered Comment, by passing a new value to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"lang")," variable."),(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetch")," will re-render your component and may cause it to ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("a",{parentName:"em",href:"../../guided-tour/rendering/loading-states"},"suspend")),", depending on the specified ",(0,l.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," and whether cached data is available or if it needs to send and wait for a network request. If refetch causes the component to suspend, you'll need to make sure that there's a ",(0,l.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component."),(0,l.mdx)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))))))),(0,l.mdx)("h3",{id:"behavior"},"Behavior"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the fragment data: if the data for this particular ",(0,l.mdx)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),(0,l.mdx)("li",{parentName:"ul"},"The component will suspend if any data for that specific fragment is missing, and the data is currently being fetched by a parent query.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))),(0,l.mdx)("li",{parentName:"ul"},"Note that pagination (",(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious"),"), ",(0,l.mdx)("em",{parentName:"li"},"will not")," cause the component to suspend.")),(0,l.mdx)("h3",{id:"differences-with-paginationcontainer"},"Differences with ",(0,l.mdx)("inlineCode",{parentName:"h3"},"PaginationContainer")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A pagination query no longer needs to be specified in this api, since it will be automatically generated by Relay by using a ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," fragment."),(0,l.mdx)("li",{parentName:"ul"},"This api supports simultaneous bi-directional pagination out of the box."),(0,l.mdx)("li",{parentName:"ul"},"This api no longer requires passing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"getVariables")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"getFragmentVariables")," configuration functions, like the ",(0,l.mdx)("inlineCode",{parentName:"li"},"PaginationContainer")," does.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"This implies that pagination no longer has a between ",(0,l.mdx)("inlineCode",{parentName:"li"},"variables")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"fragmentVariables"),", which were previously vaguely defined concepts. Pagination requests will always use the same variables that were originally used to fetch the connection, ",(0,l.mdx)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))),(0,l.mdx)("li",{parentName:"ul"},"This api no longer takes additional configuration like ",(0,l.mdx)("inlineCode",{parentName:"li"},"direction")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"getConnectionFromProps")," function (like Pagination Container does). These values will be automatically determined by Relay."),(0,l.mdx)("li",{parentName:"ul"},"Refetching no longer has a distinction between ",(0,l.mdx)("inlineCode",{parentName:"li"},"variables")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"fragmentVariables"),", which were previously vaguely defined concepts. Refetching will always correctly refetch and render the fragment with the variables you provide (any variables omitted in the input will fallback to using the original values in the parent query)."),(0,l.mdx)("li",{parentName:"ul"},"Refetching will unequivocally update the component, which was not always true when calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetchConnection")," from ",(0,l.mdx)("inlineCode",{parentName:"li"},"PaginationContainer")," (it would depend on what you were querying for in the refetch query and if your fragment was defined on the right object type).")),(0,l.mdx)(o.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);