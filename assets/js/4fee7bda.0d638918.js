"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[54795,27950,43218,98275],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(39960),i=n(44256),a=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var c=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return a.createElement(s,null,a.createElement(l,null),a.createElement(c,null),a.createElement(d,null))},u=function(){return a.createElement(s,null,a.createElement(c,null),a.createElement(d,null))};const m=function(){return(0,i.fbContent)({internal:a.createElement(p,null),external:a.createElement(u,null)})}},15794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(68629),s=n(44256),c=n(15461),l=["components"],d={id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/"},p=void 0,u={unversionedId:"api-reference/hooks/use-subscription",id:"version-v11.0.0/api-reference/hooks/use-subscription",title:"useSubscription",description:"useSubscription",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/use-subscription.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-subscription/",permalink:"/docs/v11.0.0/api-reference/use-subscription/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/hooks/use-subscription.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Cathy Zhang",lastUpdatedAt:1660524796,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/"},sidebar:"version-v11.0.0/docs",previous:{title:"useMutation",permalink:"/docs/v11.0.0/api-reference/use-mutation/"},next:{title:"useEntryPointLoader",permalink:"/docs/v11.0.0/api-reference/use-entrypoint-loader/"}},m={},f=[{value:"<code>useSubscription</code>",id:"usesubscription",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Behavior",id:"behavior",level:3}],h={toc:f};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"usesubscription"},(0,a.mdx)("inlineCode",{parentName:"h2"},"useSubscription")),(0,a.mdx)("p",null,"Hook used to subscribe and unsubscribe to a subscription."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {graphql, useSubscription} from 'react-relay';\nimport {useMemo} from 'react';\n\nconst subscription = graphql`\n  subscription UserDataSubscription($input: InputData!) {\n    # ...\n  }\n`;\n\nfunction UserComponent({ id }) {\n  // IMPORTANT: your config should be memoized.\n  // Otherwise, useSubscription will re-render too frequently.\n  const config = useMemo(() => ({\n    variables: {id},\n    subscription,\n  }), [id, subscription]);\n\n  useSubscription(config);\n\n  return (/* ... */);\n}\n")),(0,a.mdx)("h3",{id:"arguments"},"Arguments"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"config"),": a config of type ",(0,a.mdx)("a",{parentName:"li",href:"#type-graphqlsubscriptionconfigtsubscriptionpayload"},(0,a.mdx)("inlineCode",{parentName:"a"},"GraphQLSubscriptionConfig"))," passed to ",(0,a.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"requestSubscription"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscriptionFn"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"?<TSubscriptionPayload>(IEnvironment, GraphQLSubscriptionConfig<TSubscriptionPayload>) => Disposable"),". An optional function with the same signature as ",(0,a.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"requestSubscription")),", which will be called in its stead. Defaults to ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscription"),".")),(0,a.mdx)(c.default,{mdxType:"GraphQLSubscriptionConfig"}),(0,a.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"TSubscriptionPayload"),": The type of the payloads vended by the subscription. You should pass the flow type imported from the auto-generated ",(0,a.mdx)("inlineCode",{parentName:"li"},".graphql")," file corresponding to the subscription, e.g. use ",(0,a.mdx)("inlineCode",{parentName:"li"},"UserDataSubscription")," as the type parameter, from ",(0,a.mdx)("inlineCode",{parentName:"li"},"import type {UserDataSubscription} from './__generated__/UserDataSubscription.graphql'"),";")),(0,a.mdx)("h3",{id:"behavior"},"Behavior"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"This is only a thin wrapper around the ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscription")," API. It will:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Subscribe when the component is mounted with the given config"),(0,a.mdx)("li",{parentName:"ul"},"Unsubscribe when the component is unmounted"),(0,a.mdx)("li",{parentName:"ul"},"Unsubscribe and resubscribe with new values if the environment, config or ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscriptionFn")," changes."))),(0,a.mdx)("li",{parentName:"ul"},"If you have the need to do something more complicated, such as imperatively requesting a subscription, please use the ",(0,a.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"requestSubscription"))," API directly."),(0,a.mdx)("li",{parentName:"ul"},"See the ",(0,a.mdx)("a",{parentName:"li",href:"../../guided-tour/updating-data/graphql-subscriptions/"},"GraphQL Subscriptions Guide")," for a more detailed explanation of how to work with subscriptions.")),(0,a.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},(0,a.mdx)("inlineCode",{parentName:"p"},"useSubscription")," doesn't automatically add ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_subscription_id"),". You may need to provide an arbitrary ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_subscription_id")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.variables.input"))))),(0,a.mdx)(o.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0},13394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={},c=void 0,l={unversionedId:"api-reference/types/CacheConfig",id:"version-v11.0.0/api-reference/types/CacheConfig",title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/v11.0.0/api-reference/types/CacheConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Cathy Zhang",lastUpdatedAt:1660524796,formattedLastUpdatedAt:"8/15/2022",frontMatter:{}},d={},p=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,a.mdx)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}m.isMDXComponent=!0},15461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(77193),s=n(13394),c=["components"],l={},d=void 0,p={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"version-v11.0.0/api-reference/types/GraphQLSubscriptionConfig",title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/GraphQLSubscriptionConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/docs/v11.0.0/api-reference/types/GraphQLSubscriptionConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/types/GraphQLSubscriptionConfig.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Cathy Zhang",lastUpdatedAt:1660524796,formattedLastUpdatedAt:"8/15/2022",frontMatter:{}},u={},m=[{value:"Type <code>GraphQLSubscriptionConfig&lt;TSubscriptionPayload&gt;</code>",id:"type-graphqlsubscriptionconfigtsubscriptionpayload",level:4}],f={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,a.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"subscription"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",(0,a.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onNext"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,a.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),(0,a.mdx)(s.default,{mdxType:"CacheConfig"}),(0,a.mdx)(o.default,{mdxType:"SelectorStoreUpdater"}))}h.isMDXComponent=!0},77193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(44996),s=["components"],c={},l=void 0,d={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v11.0.0/api-reference/types/SelectorStoreUpdater",title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/v11.0.0/api-reference/types/SelectorStoreUpdater",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Cathy Zhang",lastUpdatedAt:1660524796,formattedLastUpdatedAt:"8/15/2022",frontMatter:{}},p={},u=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",level:4}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A function with signature ",(0,a.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,a.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,a.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,a.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,a.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,a.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}f.isMDXComponent=!0},47596:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(11737);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const a={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in a||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?a[t].resolve(e.data.response):a[t].reject(new Error(e.data.error)),delete a[t]})));const t=i++,n=new Promise(((e,n)=>{a[t]={resolve:e,reject:n}})),o={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,s),n}))}},24855:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const i=n(11737);t.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(r){}}))}},44256:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=a(n(47596)),t.uidocs=a(n(17483)),t.feedback=a(n(24855)),t.inpageeditor=a(n(27312));const o=["internal","external"];function s(e){return l(e),d()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function p(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=l,t.isInternal=d,t.hasEphemeralDiffNumber=function(){return Boolean(p())},t.getEphemeralDiffNumber=p,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}},27312:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const i=n(11737);t.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:r,diff_number:a}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:r,diff_number:a}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const i=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:r}})}))}}}]);