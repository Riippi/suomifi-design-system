(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{409:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return d});var a=n(85),r=n.n(a),o=n(32),i=(n(1),n(442)),c=n.n(i),s=function(e){return Object(o.a)(c.a,r()({},e,{minWidth:992}))},l=function(e){return Object(o.a)(c.a,r()({},e,{maxWidth:991}))},u=function(e){return Object(o.a)(c.a,r()({},e,{minWidth:768,maxWidth:991}))},d=function(e){return Object(o.a)(c.a,r()({},e,{maxWidth:767}))}},413:function(e,t,n){var a;e.exports=(a=n(424))&&a.default||a},416:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h}),n.d(t,"useStaticQuery",function(){return b});var a=n(32),r=n(1),o=n.n(r),i=n(13),c=n.n(i),s=n(83),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"parsePath",function(){return s.parsePath}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(413),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var p=o.a.createContext({}),h=function(e){return Object(a.a)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})},b=function(e){o.a.useContext;var t=o.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},417:function(e,t,n){"use strict";var a=n(32),r=(n(1),n(433)),o=n.n(r),i=n(407);t.a=function(e){var t=e.title,n=e.description,r=e.meta,c=void 0===r?[]:r,s=e.keywords,l=void 0===s?[]:s;return Object(a.a)(i.NamespacesConsumer,null,function(e,r){var i=r.i18n,s=n||e("common:site.description"),u=i.language;return Object(a.a)(o.a,{htmlAttributes:{lang:u},title:t,titleTemplate:"%s | "+e("common:site.title"),meta:[{name:"description",content:s},{property:"og:title",content:t},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e("common:site.author")},{name:"twitter:title",content:t},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(c)})})}},418:function(e,t,n){"use strict";n(84);var a=n(32),r=n(1),o=n.n(r),i=n(407),c=n(425),s=n(47),l=n(61),u=n(408),d=n(85),p=n.n(d),h=n(805),b=n(608),g=n(799),m=function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return Object(a.a)(i.NamespacesConsumer,{ns:["language"]},function(e){return Object(a.a)(h.a.language,{name:e(n+".short"),"aria-label":e("menu.label")},r&&r.map(function(r){return Object(a.a)(b.a.language,{key:r,onSelect:function(){return t(r)},selected:r===n},e(r+".long"))}))})},f=function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return Object(a.a)(i.NamespacesConsumer,{ns:["language"]},function(e){return Object(a.a)("ul",{"aria-label":e("menu.label"),style:{margin:"1rem",padding:0,listStyle:"none",display:"flex",alignItems:"center",justifyContent:"center"}},r&&r.map(function(r){return Object(a.a)("li",{key:r},Object(a.a)(g.a.secondaryNoborder,{onClick:function(){return t(r)},disabled:r===n,lang:r,style:{textTransform:"uppercase"}},e(r+".medium")))}))})},v=function(e,t){var n=e.variant;return Object(a.a)(u.Language,null,function(e){return"menu"===n?Object(a.a)(m,p()({},t,e)):"list"===n?Object(a.a)(f,p()({},t,e)):null})},O={menu:function(e){return Object(a.a)(v,p()({variant:"menu"},e))},list:function(e){return Object(a.a)(v,p()({variant:"list"},e))}};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var j=o.a.createElement("path",{fill:"#003479",d:"M53 0H2C.9 0 0 .9 0 2v51c0 1.1.9 2 2 2h51c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}),x=o.a.createElement("g",{fill:"#FFF"},o.a.createElement("path",{d:"M14 20v-5c0-1.1.9-2 2-2h5v7M14 27h7v14c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1M28 13h13c.5 0 1 .4 1 1v6H28M41 34H28v-7h14v6c0 .6-.4 1-1 1z"})),w=function(e){return o.a.createElement("svg",y({viewBox:"0 0 55 55",preserveAspectRatio:"xMidYMin meet"},e),j,x)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var k=o.a.createElement("path",{fill:"#003479",d:"M53 0H2C.9 0 0 .9 0 2v51c0 1.1.9 2 2 2h51c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}),C=o.a.createElement("g",{fill:"#FFF"},o.a.createElement("path",{d:"M14 20v-5c0-1.1.9-2 2-2h5v7M14 27h7v14c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1M28 13h13c.5 0 1 .4 1 1v6H28M41 34H28v-7h14v6c0 .6-.4 1-1 1z"})),N=o.a.createElement("g",{fill:"#003479"},o.a.createElement("path",{d:"M85.1 42.3c-3.2 0-6-.8-8.1-1.9l.6-4c2 1.3 4.7 2.5 7.6 2.5 3 0 5.2-1.6 5.2-4.4 0-2.6-1.2-3.7-5.5-5.7-5.5-2.5-7.5-4.3-7.5-8.4 0-4.7 3.6-7.6 8.8-7.6 2.8 0 4.9.7 6.6 1.6l-.6 3.9c-1.6-1.2-3.8-2.1-6.1-2.1-3.3 0-4.8 1.8-4.8 3.9 0 2.2 1.1 3.3 5.5 5.3 5.6 2.6 7.6 4.5 7.6 8.9-.1 4.9-3.9 8-9.3 8zM102 22v13.7c0 2.1.9 3.4 3.1 3.4 2 0 4-1.3 5.8-3.2V22h3.7v20h-3l-.5-2.9c-1.9 1.8-4.3 3.3-7.1 3.3-3.8 0-5.8-2.3-5.8-5.9V22h3.8zM127.7 42.4c-5.3 0-9.2-3.8-9.2-10.4 0-6.6 3.9-10.5 9.2-10.5 5.4 0 9.3 3.9 9.3 10.5.1 6.6-3.9 10.4-9.3 10.4zm0-17.7c-3.6 0-5.4 3.2-5.4 7.4 0 4.1 1.9 7.3 5.4 7.3 3.7 0 5.5-3.1 5.5-7.3.1-4.2-1.9-7.4-5.5-7.4zM165.7 42V28.3c0-2.1-.8-3.4-2.9-3.4-2 0-3.9 1.3-5.7 3.2V42h-3.7V28.3c0-2.1-.8-3.4-2.9-3.4-2 0-3.9 1.3-5.7 3.2V42H141V22h3l.5 2.9c1.9-1.7 4.2-3.3 7-3.3 2.9 0 4.5 1.3 5.3 3.3 1.8-1.7 4.2-3.3 7.1-3.3 3.8 0 5.7 2.3 5.7 5.9V42h-3.9zM176.5 17.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM174.6 42V22h3.7v20h-3.7zM200 16.3c-1.7 0-2.8.7-2.8 2.6V22h4l.5 3.2h-4.5V42h-3.7V25.1h-3V22h3v-3.5c0-4 2.6-5.5 6.2-5.5.6 0 1.1 0 1.6.1l.5 3.4c-.3-.1-1.1-.2-1.8-.2zM206.8 17.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM204.9 42V22h3.7v20h-3.7zM185.6 42c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4z"})),B=function(e){return o.a.createElement("svg",S({viewBox:"0 0 220 55",preserveAspectRatio:"xMidYMin meet"},e),k,C,N)},z=n(20),D=n.n(z),L=n(482),M=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).isFrontPage=function(e){return e&&"/"===e},t}return D()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.to,r=t.children;return Object(a.a)(u.Link,{to:n,css:Object(l.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:"1rem",paddingRight:"1rem",borderBottom:"1px solid "+c.a.colors.depthSecondary,color:c.a.colors.highlightBase,textDecoration:"none",whiteSpace:"nowrap","&:hover":{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(t){var a=t.isCurrent,r=t.isPartiallyCurrent;return e.isFrontPage(n)||!r||a?a?{style:{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},r)},t}(r.Component),P=function(e){function t(t){var n;return(n=e.call(this,t)||this).isOpen=function(){return n.state.isOpen},n.toggleOpen=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n.state={isOpen:!1},n}return D()(t,e),t.prototype.render=function(){var e=this,t=this.props.mainNavData;return Object(a.a)(i.NamespacesConsumer,null,function(n){return Object(a.a)("div",{style:{position:"relative"}},Object(a.a)(g.a,{"aria-label":n("common:open.navigation.main"),"aria-expanded":e.isOpen(),"aria-haspopup":!0,style:{background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"24px"},onClick:e.toggleOpen},e.isOpen()?Object(a.a)(L.a,{icon:"close",color:c.a.colors.depthDark27}):Object(a.a)(L.a,{icon:"menu",color:c.a.colors.depthDark27})),e.isOpen()&&Object(a.a)("div",{style:{position:"absolute",top:"50px",right:0,zIndex:c.a.zindexes.focus+1,width:"20rem",background:c.a.colors.whiteBase,border:"1px solid "+c.a.colors.depthLight13,boxShadow:c.a.shadows.menuShadow}},Object(a.a)("nav",{"aria-label":n("common:navigation.main")},Object(a.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},t.items.map(function(e){return Object(a.a)("li",{key:e.to},Object(a.a)(M,{to:e.to},e.label))}))),Object(a.a)(O.list,null)))})},t}(r.Component),T=n(409),E=function(e){return{items:[{to:"/",label:e("home:title")},{to:"/styles/",label:e("styles:title")},{to:"/components/",label:e("components:title")},{to:"/instructions/",label:e("instructions:title")}]}},W=function(){return Object(a.a)(i.NamespacesConsumer,null,function(e){return Object(a.a)("header",{style:{padding:"1rem",borderTop:"4px solid "+c.a.colors.brandBase,boxSizing:"border-box",background:c.a.colors.whiteBase,borderBottom:"1px solid "+c.a.colors.depthLight13,display:"flex",justifyContent:"center",lineHeight:"40px"}},Object(a.a)("div",{style:{width:"100%",maxWidth:1140,display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(a.a)(u.Link,{title:e("common:to.homepage"),to:"/",css:Object(l.a)([{display:"inline-block",height:"32px"},"&:focus { "+c.a.outlines.basic+" }"])},Object(a.a)(T.a,null,Object(a.a)(B,{style:{width:"128px",height:"32px"}})),Object(a.a)(T.c,null,Object(a.a)(w,{style:{width:"32px",height:"32px"}}))),Object(a.a)("div",{style:{flex:1,position:"relative",marginLeft:".5rem"}},Object(a.a)("div",{style:{fontSize:"28px",fontWeight:600,color:c.a.colors.brandBase}},e("common:header.title")),Object(a.a)("div",{style:{position:"absolute",top:"-.2rem",left:"9.5rem",whiteSpace:"nowrap",lineHeight:"16px",fontSize:"16px",fontWeight:600,textTransform:"uppercase",color:c.a.colors.highlightBase}},e("common:header.stamp"))),Object(a.a)(T.a,null,Object(a.a)(O.menu,null)),Object(a.a)(T.c,null,Object(a.a)(P,{mainNavData:E(e)}))))})},F=function(e){var t=e.to,n=e.children;return Object(a.a)(u.Link,{to:t,css:Object(l.a)([{padding:".5rem",lineHeight:"2.8rem",whiteSpace:"nowrap",color:c.a.colors.blackBase,textDecoration:"none","&:hover":{borderBottom:"4px solid "+c.a.colors.highlightBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var n=e.isCurrent,a=e.isPartiallyCurrent;if(n||!function(e){return e&&"/"===e}(t)&&a)return{style:{borderBottom:"4px solid "+c.a.colors.highlightBase}}}},n)},I=function(e){var t=e.mainNavData;return Object(a.a)(i.NamespacesConsumer,null,function(e){return Object(a.a)("nav",{"aria-label":e("common:navigation.main"),style:{padding:0,boxSizing:"border-box",background:""+c.a.colors.whiteBase,borderBottom:"1px solid "+c.a.colors.depthLight13,display:"flex",justifyContent:"center"}},Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",maxWidth:1140,display:"flex",alignItems:"center",flexWrap:"wrap",listStyle:"none"}},t.items.map(function(e){return Object(a.a)("li",{key:e.to,style:{margin:"0 1.2rem"}},Object(a.a)(F,{to:e.to},e.label))})))})},V=(n(176),n(173),n(177),n(119),n(175),n(120),n(804)),H=n(416),R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).toggleOpen=function(e){e.preventDefault();var n=t.props,a=n.to;(0,n.handleToggle)(a)},t.isFrontPage=function(e){return e&&"/"===e},t}return D()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.to,r=t.children,o=t.hasChildren,i=t.isOpen,s=t.level;return Object(a.a)(u.Link,{to:n,css:Object(l.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:s+"rem",paddingRight:".5rem",borderBottom:"1px solid "+c.a.colors.depthSecondary,color:c.a.colors.highlightBase,textDecoration:"none","&:hover":{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(t){var a=t.isCurrent,r=t.isPartiallyCurrent;return e.isFrontPage(n)||!r||a?a?{style:{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},r,o&&Object(a.a)(g.a,{"aria-expanded":i(n),style:{float:"right",background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"16px",transform:i(n)?"rotate(.5turn)":"none"},onClick:this.toggleOpen},Object(a.a)(L.a,{icon:"chevronDown",color:c.a.colors.depthDark27})))},t}(r.Component),A=function(e){function t(t){var n;return(n=e.call(this,t)||this).SIDENAVSTATE_KEY="sideNavState",n.getSessionState=function(){return JSON.parse(sessionStorage.getItem(n.SIDENAVSTATE_KEY))||{}},n.setSessionState=function(e){try{sessionStorage.setItem(n.SIDENAVSTATE_KEY,JSON.stringify(e))}catch(t){}},n.componentDidMount=function(){var e=n.getSessionState(),t=n.getCurrentPath(),a=n.getPathTree(t).map(function(e){var t;return(t={})[e]=!0,t}).reduce(function(e,t){return Object.assign({},e,t)},{});e.isOpen=Object.assign({},e.isOpen,a),n.setState(function(){return n.setSessionState(e),e})},n.getPathTree=function(e,t){if(void 0===t&&(t=[]),e){var a="/"+e.split("/").join("/");a+=a.endsWith("/")?"":"/",t.push(a);var r=e.split("/").slice(0,-1).join("/");n.getPathTree(r,t)}return t},n.getCurrentPath=function(){var e=n.props.location.pathname.match(RegExp(Object(H.withPrefix)("/../(.*)")));return e&&e[1]},n.iscurrent=function(e){var t=n.getCurrentPath();return e&&t&&t.startsWith(e.substr(1))},n.isNavOpen=function(){return n.state.isNavOpen},n.toggleNavOpen=function(){n.setState(function(e){return n.setSessionState(Object.assign({},e,{isNavOpen:!e.isNavOpen})),{isNavOpen:!e.isNavOpen}})},n.isOpen=function(e){return n.state.isOpen[e]},n.toggleOpen=function(e){n.setState(function(t){return t.isOpen[e]=!t.isOpen[e],n.setSessionState(t),{isOpen:t.isOpen}})},n.hasChildren=function(e){return!!e.children&&e.children.length>0},n.Title=function(){var e=n.props.sideNavData;return Object(a.a)("div",{style:{padding:".5rem",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid "+c.a.colors.depthSecondary,textShadow:"none"}},Object(a.a)("div",{style:{display:"flex",alignItems:"center"}},Object(a.a)("div",{style:{fontSize:"40px"}},e.icon),Object(a.a)(V.a.bold,{style:{marginLeft:".5rem"}},e.title)),Object(a.a)(T.c,null,Object(a.a)("div",{style:{float:"right",background:"none",marginRight:".8rem",padding:0,border:0,width:"16px",height:"16px",fontSize:"16px",transform:n.isNavOpen()?"rotate(.5turn)":"none"}},Object(a.a)(L.a,{icon:"chevronDown",color:c.a.colors.depthDark27}))))},n.renderNavItems=function(e,t){return Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",listStyle:"none"}},e.map(function(e){return Object(a.a)("li",{key:e.to,style:{borderLeft:1===t?n.iscurrent(e.to)?"4px solid "+c.a.colors.brandBase:"4px solid transparent":"none"}},Object(a.a)(R,{to:e.to,hasChildren:n.hasChildren(e),isOpen:n.isOpen,handleToggle:n.toggleOpen,level:t},e.label),n.hasChildren(e)&&!!n.state.isOpen[e.to]&&n.renderNavItems(e.children,t+1))}))},n.state={isNavOpen:!1,isOpen:{}},n}return D()(t,e),t.prototype.render=function(){var e=this.props.sideNavData;return Object(a.a)("nav",{"aria-label":e.title,style:{margin:0,padding:0,boxSizing:"border-box",background:""+c.a.colors.whiteBase}},Object(a.a)(T.a,null,Object(a.a)(this.Title,null),this.renderNavItems(e.items,1)),Object(a.a)(T.c,null,Object(a.a)(g.a,{"aria-expanded":this.isNavOpen(),onClick:this.toggleNavOpen,fullWidth:!0,style:{background:"none",padding:0,border:0}},Object(a.a)(this.Title,null)),this.isNavOpen()&&this.renderNavItems(e.items,1)))},t}(r.Component),q=function(e){var t=e.to,n=e.children;return Object(a.a)("a",{href:t,css:Object(l.a)([{position:"absolute",zIndex:c.a.zindexes.focus+1,left:"-100rem",margin:"1rem",padding:".5rem",background:c.a.colors.highlightLight53,border:"1px solid "+c.a.colors.depthLight13,color:c.a.colors.blackBase,textDecoration:"none"},"&:focus { "+c.a.outlines.basic+" }",{"&:focus":{position:"absolute",left:"auto"}}])},n)},Y=(n(443),n(444),function(e){var t=e.hasSideNav;return Object(a.a)(i.NamespacesConsumer,null,function(e){return Object(a.a)(o.a.Fragment,null,Object(a.a)(q,{to:"#main"},e("common:to.main.content")),t&&Object(a.a)(q,{to:"#sidenav"},e("common:to.sidenav")))})}),G=function(e){var t=e.sideNavData,n=e.style;return t?Object(a.a)(s.Location,null,function(e){var r=e.location;return Object(a.a)("div",{id:"sidenav",style:n},Object(a.a)(A,{location:r,sideNavData:t}))}):null},Q=function(e){var t=e.hasFrame,n=void 0===t||t,r=e.children,o=e.style;return Object(a.a)("div",{style:Object.assign({margin:n?"2rem 1rem":0},o)},Object(a.a)("main",{id:"main"},r),Object(a.a)("footer",{style:{margin:"1rem 0 0 0"}},"© ",(new Date).getFullYear()))};t.a=function(e){var t=e.sideNavData,n=e.hasFrame,r=void 0===n||n,o=e.children;return Object(a.a)(i.NamespacesConsumer,null,function(e){return Object(a.a)("div",{style:{fontFamily:c.a.typography.fontFamily+", sans-serif",fontSize:c.a.typography.fontSize.body,lineHeight:"1.5em",color:c.a.colors.blackBase}},Object(a.a)(Y,{hasSideNav:!!t}),Object(a.a)(W,null),Object(a.a)(T.a,null,Object(a.a)(I,{mainNavData:E(e)})),Object(a.a)("div",{style:{background:c.a.colors.depthLight30,paddingTop:r?"1rem":0}},Object(a.a)(T.a,null,Object(a.a)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"nowrap"}},Object(a.a)("div",{style:{margin:r?"1rem 2rem 2rem 2rem":0,width:"100%",maxWidth:r?1140:"initial",display:"flex",flexWrap:"nowrap",background:r?c.a.colors.whiteBase:"none",border:r?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(G,{sideNavData:t,style:{width:"22rem",marginRight:"1rem"}}),Object(a.a)(Q,{hasFrame:r,style:{flex:1}},o)))),Object(a.a)(T.d,null,Object(a.a)(G,{sideNavData:t,style:{margin:"0 2rem",border:"1px solid "+c.a.colors.depthLight13}}),Object(a.a)("div",{style:{margin:r?"1rem 2rem":0,background:r?c.a.colors.whiteBase:"none",border:r?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Q,{hasFrame:r},o))),Object(a.a)(T.b,null,Object(a.a)(G,{sideNavData:t,style:{margin:"0 1rem",border:"1px solid "+c.a.colors.depthLight13}}),Object(a.a)("div",{style:{margin:r?"1rem 0 0 0":0,background:r?c.a.colors.whiteBase:"none",border:r?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Q,{hasFrame:r},o)))))})}},424:function(e,t,n){"use strict";n.r(t);n(84);var a=n(1),r=n.n(a),o=n(13),i=n.n(o),c=n(121),s=n(11),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},438:function(e,t){},439:function(e,t){},440:function(e,t){},441:function(e,t){}}]);
//# sourceMappingURL=3-643af0f412f4fbff7c04.js.map