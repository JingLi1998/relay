(window.webpackJsonp=window.webpackJsonp||[]).push([[137,1093],{1162:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(1167),i=t(22),r=t(27),o=t(1184),s=t(3),u=t(7),m=t(1178),b=t(1179),d=t(1223),p=t(1229),f=t(1230),h=t(1228),v=t(1180),E=t(1175),O=t(1256),k=function(e){return c.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),c.a.createElement("g",{fill:"#7a7a7a"},c.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),c.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=t(1231),C=t(221),g=t.n(C);var N=function e(a,t){return"link"===a.type?Object(b.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function _(e){var a,t,l,i=e.item,r=e.onItemClick,o=e.collapsible,b=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),p=i.items,f=i.label,h=N(i,b),v=(t=h,l=Object(n.useRef)(t),Object(n.useEffect)((function(){l.current=t}),[t]),l.current),E=Object(n.useState)((function(){return!!o&&(!h&&i.collapsed)})),O=E[0],k=E[1],j=Object(n.useRef)(null),C=Object(n.useState)(void 0),_=C[0],y=C[1],w=function(e){var a;void 0===e&&(e=!0),y(e?(null===(a=j.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){h&&!v&&O&&k(!1)}),[h,v,O]);var I=Object(n.useCallback)((function(e){e.preventDefault(),_||w(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[_]);return 0===p.length?null:c.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:f},c.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&h},a[g.a.menuLinkText]=!o,a)),onClick:o?I:void 0,href:o?"#!":void 0},d),f),c.a.createElement("ul",{className:"menu__list",ref:j,style:{height:_},onTransitionEnd:function(){O||w(!1)}},p.map((function(e){return c.a.createElement(S,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:b})}))))}function y(e){var a=e.item,t=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=a.href,r=a.label,o=N(a,n);return c.a.createElement("li",{className:"menu__list-item",key:r},c.a.createElement(v.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(E.a)(i)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),r))}function S(e){switch(e.item.type){case"category":return c.a.createElement(_,e);case"link":default:return c.a.createElement(y,e)}}var w=function(e){var a,t,l=e.path,i=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,s=e.onCollapse,u=e.isHidden,v=Object(n.useState)(!1),E=v[0],C=v[1],N=Object(b.useThemeConfig)(),_=N.navbar.hideOnScroll,y=N.hideableSidebar,w=Object(d.a)().isAnnouncementBarClosed,I=Object(h.a)().scrollY;Object(p.a)(E);var M=Object(f.a)();return Object(n.useEffect)((function(){M===f.b.desktop&&C(!1)}),[M]),c.a.createElement("div",{className:Object(m.a)(g.a.sidebar,(a={},a[g.a.sidebarWithHideableNavbar]=_,a[g.a.sidebarHidden]=u,a))},_&&c.a.createElement(O.a,{tabIndex:-1,className:g.a.sidebarLogo}),c.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",g.a.menu,(t={"menu--show":E},t[g.a.menuWithAnnouncementBar]=!w&&0===I,t))},c.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){C(!E)}},E?c.a.createElement("span",{className:Object(m.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement(j.a,{className:g.a.sidebarMenuIcon,height:24,width:24})),c.a.createElement("ul",{className:"menu__list"},i.map((function(e){return c.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),C(!1)},collapsible:o,activePath:l})})))),y&&c.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",g.a.collapseSidebarButton),onClick:s},c.a.createElement(k,{className:g.a.collapseSidebarButtonIcon})))},I=t(1199),M=t.n(I),P=t(1219),x=t(1186),T=t(226),H=t.n(T);function L(e){var a,t,r,s,u=e.currentDocRoute,d=e.versionMetadata,p=e.children,f=Object(i.default)(),h=f.siteConfig,v=f.isClient,E=d.pluginId,O=d.permalinkToSidebar,j=d.docsSidebars,C=d.version,g=O[u.path],N=j[g],_=Object(n.useState)(!1),y=_[0],S=_[1],I=Object(n.useState)(!1),P=I[0],x=I[1],T=Object(n.useCallback)((function(){P&&x(!1),S(!y)}),[P]);return c.a.createElement(o.a,{key:v,searchMetadatas:{version:C,tag:Object(b.docVersionSearchTag)(E,C)}},c.a.createElement("div",{className:H.a.docPage},N&&c.a.createElement("div",{className:Object(m.a)(H.a.docSidebarContainer,(a={},a[H.a.docSidebarContainerHidden]=y,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(H.a.docSidebarContainer)&&y&&x(!0)},role:"complementary"},c.a.createElement(w,{key:g,sidebar:N,path:u.path,sidebarCollapsible:null===(t=null===(r=h.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===t||t,onCollapse:T,isHidden:P}),P&&c.a.createElement("div",{className:H.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:T,onClick:T},c.a.createElement(k,null))),c.a.createElement("main",{className:H.a.docMainContainer},c.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",H.a.docItemWrapper,(s={},s[H.a.docItemWrapperEnhanced]=y,s))},c.a.createElement(l.a,{components:M.a},p)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,l=a.find((function(e){return Object(x.matchPath)(n.pathname,e)}));return l?c.a.createElement(L,{currentDocRoute:l,versionMetadata:t},Object(r.a)(a)):c.a.createElement(P.default,e)}},1219:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(1184);a.default=function(){return c.a.createElement(l.a,{title:"Page Not Found"},c.a.createElement("main",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);