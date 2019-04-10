(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(t,e,n){"use strict";var i=n(9),a=(n(0),n(4)),o=n.n(a),l=n(240),r=n.n(l),c=n(205);function s(t){var e=t.description,n=t.meta,a=t.keywords,o=t.title;return Object(i.a)(c.NamespacesConsumer,null,function(t,l){var c=l.i18n,s=e||t("site:description"),d=c.language;return Object(i.a)(r.a,{htmlAttributes:{lang:d},title:o,titleTemplate:"%s | "+t("site:title"),meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t("site:author")},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(n)})})}s.defaultProps={meta:[],keywords:[]},s.propTypes={description:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=s},217:function(t,e,n){"use strict";n(67);var i=n(9),a=n(0),o=n.n(a),l=n(205),r=n(221),c=n(18),s=n(27),d=n(207),u=n(41),p=n.n(u),b=n(591),f=n(594),C=function(t){var e=t.changeLng,n=t.lng,a=t.availableLngs;return Object(i.a)(l.NamespacesConsumer,{ns:["language"]},function(t){return Object(i.a)(b.a.language,{name:t(n+".short"),"aria-label":t("menu.label")},a&&a.map(function(a){return Object(i.a)(b.b.language,{key:a,onSelect:function(){return e(a)},selected:a===n},t(a+".long"))}))})},g=function(t){var e=t.changeLng,n=t.lng,a=t.availableLngs;return Object(i.a)(l.NamespacesConsumer,{ns:["language"]},function(t){return Object(i.a)("ul",{"aria-label":t("menu.label"),style:{margin:"1rem",padding:0,listStyle:"none",display:"flex",alignItems:"center",justifyContent:"center"}},a&&a.map(function(a){return Object(i.a)("li",{key:a},Object(i.a)(f.a.secondaryNoborder,{onClick:function(){return e(a)},disabled:a===n,lang:a,style:{textTransform:"uppercase"}},t(a+".medium")))}))})},h=function(t,e){var n=t.variant;return Object(i.a)(d.Language,null,function(t){return"menu"===n?Object(i.a)(C,p()({},e,t)):"list"===n?Object(i.a)(g,p()({},e,t)):null})},O={menu:function(t){return Object(i.a)(h,p()({variant:"menu"},t))},list:function(t){return Object(i.a)(h,p()({variant:"list"},t))}},j=n(218),m=n(7),L=n.n(m),y=n(259),v=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))||this).isFrontPage=function(t){return t&&"/"===t},e}return L()(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.to,a=e.children;return Object(i.a)(d.Link,{to:n,css:Object(s.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:"1rem",paddingRight:"1rem",borderBottom:"1px solid #EEF5FF",color:r.a.colors.secondaryColor,textDecoration:"none",whiteSpace:"nowrap","&:hover":{background:"#EEF5FF",color:r.a.colors.brandColor}},"&:focus { "+r.a.outlines.basic+" }"]),getProps:function(e){var i=e.isCurrent,a=e.isPartiallyCurrent;return t.isFrontPage(n)||!a||i?i?{style:{background:"#EEF5FF",color:r.a.colors.brandColor,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},a)},e}(a.Component),F=function(t){function e(e){var n;return(n=t.call(this,e)||this).isOpen=function(){return n.state.isOpen},n.toggleOpen=function(){n.setState(function(t){return{isOpen:!t.isOpen}})},n.state={isOpen:!1},n}return L()(e,t),e.prototype.render=function(){var t=this,e=this.props.mainNavData;return Object(i.a)(l.NamespacesConsumer,null,function(n){return Object(i.a)("div",{style:{position:"relative"}},Object(i.a)(f.a,{"aria-label":n("common:open.navigation.main"),"aria-expanded":t.isOpen(),style:{background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"24px"},onClick:t.toggleOpen},t.isOpen()?Object(i.a)(y.a,{icon:"close",color:"#636769"}):Object(i.a)(y.a,{icon:"menu",color:"#636769"})),t.isOpen()&&Object(i.a)("div",{style:{position:"absolute",top:"50px",right:0,zIndex:1e3,width:"20rem",background:r.a.colors.white,border:"1px solid #C9CDCF",boxShadow:r.a.shadows.menuShadow}},Object(i.a)("nav",{"aria-label":n("common:navigation.main")},Object(i.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},e.items.map(function(t){return Object(i.a)("li",{key:t.to},Object(i.a)(v,{to:t.to},t.label))}))),Object(i.a)(O.list,null)))})},e}(a.Component),A=n(284),x=n.n(A),w=function(t){return Object(i.a)(x.a,p()({},t,{minWidth:992}))},k=function(t){return Object(i.a)(x.a,p()({},t,{maxWidth:991}))},B=function(t){return Object(i.a)(x.a,p()({},t,{minWidth:768,maxWidth:991}))},S=function(t){return Object(i.a)(x.a,p()({},t,{maxWidth:767}))},M=function(t){return{items:[{to:"/",label:t("home:title")},{to:"/components/",label:t("components:title")},{to:"/instructions/",label:t("instructions:title")}]}},N=function(){return Object(i.a)(l.NamespacesConsumer,null,function(t){return Object(i.a)("header",{style:{padding:"1rem",borderTop:"4px solid "+r.a.colors.brandColor,boxSizing:"border-box",background:r.a.colors.white,borderBottom:"1px solid #C9CDCF",display:"flex",justifyContent:"center",lineHeight:"40px"}},Object(i.a)("div",{style:{width:"100%",maxWidth:1140,display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(i.a)(d.Link,{title:t("common:to.homepage"),to:"/",css:Object(s.a)([{display:"inline-block",width:"128px",height:"32px"},"&:focus { "+r.a.outlines.basic+" }"])},Object(i.a)(j.a.suomifi,null)),Object(i.a)("div",{style:{flex:1,display:"flex",flexWrap:"wrap",marginLeft:".5rem"}},Object(i.a)("div",{style:{fontSize:"28px",fontWeight:600,color:r.a.colors.brandColor}},t("header:title")),Object(i.a)("div",{style:{whiteSpace:"nowrap",lineHeight:"14px",alignSelf:"start",margin:".5rem",padding:".2rem .5rem",background:r.a.colors.secondaryColor,fontSize:"14px",fontWeight:600,textTransform:"uppercase",color:r.a.colors.invertText}},t("alpharel:title"))),Object(i.a)(w,null,Object(i.a)(O.menu,null)),Object(i.a)(k,null,Object(i.a)(F,{mainNavData:M(t)}))))})},E=function(t){var e=t.to,n=t.children;return Object(i.a)(d.Link,{to:e,css:Object(s.a)([{padding:".5rem",lineHeight:"2.8rem",whiteSpace:"nowrap",color:r.a.colors.text,textDecoration:"none","&:hover":{borderBottom:"4px solid "+r.a.colors.secondaryColor}},"&:focus { "+r.a.outlines.basic+" }"]),getProps:function(t){var n=t.isCurrent,i=t.isPartiallyCurrent;if(n||!function(t){return t&&"/"===t}(e)&&i)return{style:{borderBottom:"4px solid "+r.a.colors.secondaryColor}}}},n)},D=function(t){var e=t.mainNavData;return Object(i.a)(l.NamespacesConsumer,null,function(t){return Object(i.a)("nav",{"aria-label":t("common:navigation.main"),style:{padding:0,boxSizing:"border-box",background:""+r.a.colors.white,borderBottom:"1px solid #C9CDCF",display:"flex",justifyContent:"center"}},Object(i.a)("ul",{style:{margin:0,padding:0,width:"100%",maxWidth:1140,display:"flex",alignItems:"center",flexWrap:"wrap",listStyle:"none"}},e.items.map(function(t){return Object(i.a)("li",{key:t.to,style:{margin:"0 1.2rem"}},Object(i.a)(E,{to:t.to},t.label))})))})},T=(n(285),n(286),n(96),n(287),n(100),n(222)),W=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))||this).toggleOpen=function(t){t.preventDefault();var n=e.props,i=n.to;(0,n.handleToggle)(i)},e.isFrontPage=function(t){return t&&"/"===t},e}return L()(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.to,a=e.children,o=e.hasChildren,l=e.isOpen,c=e.level;return Object(i.a)(d.Link,{to:n,css:Object(s.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:c+"rem",paddingRight:".5rem",borderBottom:"1px solid #EEF5FF",color:r.a.colors.secondaryColor,textDecoration:"none","&:hover":{background:"#EEF5FF",color:r.a.colors.brandColor}},"&:focus { "+r.a.outlines.basic+" }"]),getProps:function(e){var i=e.isCurrent,a=e.isPartiallyCurrent;return t.isFrontPage(n)||!a||i?i?{style:{background:"#EEF5FF",color:r.a.colors.brandColor,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},a,o&&Object(i.a)(f.a,{"aria-expanded":l(n),style:{float:"right",background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"16px",transform:l(n)?"rotate(.5turn)":"none"},onClick:this.toggleOpen},Object(i.a)(y.a,{icon:"chevronDown",color:"#636769"})))},e}(a.Component),P=function(t){function e(e){var n;return(n=t.call(this,e)||this).SIDENAVSTATE_KEY="sideNavState",n.getSessionState=function(){return JSON.parse(sessionStorage.getItem(n.SIDENAVSTATE_KEY))||{}},n.setSessionState=function(t){try{sessionStorage.setItem(n.SIDENAVSTATE_KEY,JSON.stringify(t))}catch(e){}},n.componentDidMount=function(){var t=n.getSessionState(),e=n.getCurrentPath(),i=n.getPathTree(e).map(function(t){var e;return(e={})[t]=!0,e}).reduce(function(t,e){return Object.assign({},t,e)},{});t.isOpen=Object.assign({},t.isOpen,i),n.setState(function(){return n.setSessionState(t),t})},n.getPathTree=function(t,e){if(void 0===e&&(e=[]),t){var i="/"+t.split("/").join("/");i+=i.endsWith("/")?"":"/",e.push(i);var a=t.split("/").slice(0,-1).join("/");n.getPathTree(a,e)}return e},n.getCurrentPath=function(){var t=n.props.location.pathname.match(RegExp(Object(T.withPrefix)("/../(.*)")));return t&&t[1]},n.iscurrent=function(t){var e=n.getCurrentPath();return t&&e&&e.startsWith(t.substr(1))},n.isNavOpen=function(){return n.state.isNavOpen},n.toggleNavOpen=function(){n.setState(function(t){return n.setSessionState(Object.assign({},t,{isNavOpen:!t.isNavOpen})),{isNavOpen:!t.isNavOpen}})},n.isOpen=function(t){return n.state.isOpen[t]},n.toggleOpen=function(t){n.setState(function(e){return e.isOpen[t]=!e.isOpen[t],n.setSessionState(e),{isOpen:e.isOpen}})},n.hasChildren=function(t){return!!t.children&&t.children.length>0},n.Title=function(){var t=n.props.sideNavData;return Object(i.a)("div",{style:Object.assign({},r.a.typography,{color:r.a.colors.text,padding:".5rem",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #EEF5FF",textShadow:"none"})},Object(i.a)("div",{style:{display:"flex",alignItems:"center"}},Object(i.a)("div",{style:{width:"40px",height:"40px"}},t.icon),Object(i.a)("div",{style:{marginLeft:".5rem"}},t.title)),Object(i.a)(k,null,Object(i.a)("div",{style:{float:"right",background:"none",marginRight:".8rem",padding:0,border:0,width:"16px",height:"16px",fontSize:"16px",transform:n.isNavOpen()?"rotate(.5turn)":"none"}},Object(i.a)(y.a,{icon:"chevronDown",color:"#636769"}))))},n.renderNavItems=function(t,e){return Object(i.a)("ul",{style:{margin:0,padding:0,width:"100%",listStyle:"none"}},t.map(function(t){return Object(i.a)("li",{key:t.to,style:{borderLeft:1===e?n.iscurrent(t.to)?"4px solid "+r.a.colors.brandColor:"4px solid transparent":"none"}},Object(i.a)(W,{to:t.to,hasChildren:n.hasChildren(t),isOpen:n.isOpen,handleToggle:n.toggleOpen,level:e},t.label),n.hasChildren(t)&&!!n.state.isOpen[t.to]&&n.renderNavItems(t.children,e+1))}))},n.state={isNavOpen:!1,isOpen:{}},n}return L()(e,t),e.prototype.render=function(){var t=this.props.sideNavData;return Object(i.a)("nav",{"aria-label":t.title,style:{margin:0,padding:0,boxSizing:"border-box",background:""+r.a.colors.white}},Object(i.a)(w,null,Object(i.a)(this.Title,null),this.renderNavItems(t.items,1)),Object(i.a)(k,null,Object(i.a)(f.a,{"aria-expanded":this.isNavOpen(),onClick:this.toggleNavOpen,fullWidth:!0,style:{background:"none",padding:0,border:0}},Object(i.a)(this.Title,null)),this.isNavOpen()&&this.renderNavItems(t.items,1)))},e}(a.Component),z=function(t){var e=t.title,n=t.description;return Object(i.a)("div",{style:{margin:"2rem 0",padding:"20px",borderTop:"1px solid #EA7125",borderBottom:"1px solid #EA7125"}},Object(i.a)("div",{style:{fontSize:"20px",fontWeight:600}},e),n?Object(i.a)("div",{style:{marginTop:"1rem"}},n):null)},I=function(t){var e=t.to,n=t.children;return Object(i.a)("a",{href:e,css:Object(s.a)([{position:"absolute",left:"-100rem",margin:"1rem",padding:".5rem",background:"#F6F6F7",border:"1px solid #C9CDCF",color:r.a.colors.text,textDecoration:"none"},"&:focus { "+r.a.outlines.basic+" }",{"&:focus":{position:"absolute",left:"auto"}}])},n)},V=(n(288),n(289),function(t){var e=t.hasSideNav;return Object(i.a)(l.NamespacesConsumer,null,function(t){return Object(i.a)(o.a.Fragment,null,Object(i.a)(I,{to:"#main"},t("common:to.main.content")),e&&Object(i.a)(I,{to:"#sidenav"},t("common:to.sidenav")))})}),R=function(t){var e=t.sideNavData,n=t.style;return e?Object(i.a)(c.Location,null,function(t){var a=t.location;return Object(i.a)("div",{id:"sidenav",style:n},Object(i.a)(P,{location:a,sideNavData:e}))}):null},H=function(t){var e=t.children,n=t.style;return Object(i.a)(l.NamespacesConsumer,null,function(t){return Object(i.a)("div",{style:Object.assign({margin:"0 1rem"},n)},Object(i.a)(z,{title:t("alpharel:title"),description:t("alpharel:description")}),Object(i.a)("main",{id:"main"},e),Object(i.a)("footer",{style:{margin:"1rem 0"}},"© ",(new Date).getFullYear()))})};e.a=function(t){var e=t.sideNavData,n=t.children;return Object(i.a)(l.NamespacesConsumer,null,function(t){return Object(i.a)("div",{style:Object.assign({},r.a.typography,{color:""+r.a.colors.text})},Object(i.a)(V,{hasSideNav:!!e}),Object(i.a)(N,null),Object(i.a)(w,null,Object(i.a)(D,{mainNavData:M(t)})),Object(i.a)("div",{style:{background:"#F6F6F7",paddingTop:"1rem"}},Object(i.a)(w,null,Object(i.a)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"nowrap"}},Object(i.a)("div",{style:{margin:"1rem 2rem 2rem 2rem",width:"100%",maxWidth:1140,display:"flex",flexWrap:"nowrap",background:r.a.colors.white,border:"1px solid #C9CDCF"}},Object(i.a)(R,{sideNavData:e,style:{width:"22rem",marginRight:"1rem"}}),Object(i.a)(H,{style:{flex:1}},n)))),Object(i.a)(B,null,Object(i.a)(R,{sideNavData:e,style:{margin:"0 2rem",border:"1px solid #C9CDCF"}}),Object(i.a)("div",{style:{margin:"1rem 2rem 1rem 2rem",background:r.a.colors.white,border:"1px solid #C9CDCF"}},Object(i.a)(H,null,n))),Object(i.a)(S,null,Object(i.a)(R,{sideNavData:e,style:{margin:"0 1rem",border:"1px solid #C9CDCF"}}),Object(i.a)("div",{style:{margin:"1rem 0 0 0",background:r.a.colors.white,border:"1px solid #C9CDCF"}},Object(i.a)(H,null,n)))))})}},218:function(t,e,n){"use strict";var i=n(7),a=n.n(i),o=n(9),l=n(0),r=function(){return Object(o.a)("svg",{viewBox:"0 0 220 55",preserveAspectRatio:"xMidYMin meet",id:"beta_suomifi_logo",height:"100%"},Object(o.a)("g",null,Object(o.a)("path",{fill:"#003479",d:"M53,0H2C0.9,0,0,0.9,0,2v51c0,1.1,0.9,2,2,2h51c1.1,0,2-0.9,2-2V2C55,0.9,54.1,0,53,0z"}),Object(o.a)("g",null,Object(o.a)("path",{fill:"#FFFFFF",d:"M14,20v-5c0-1.1,0.9-2,2-2h5v7"}),Object(o.a)("path",{fill:"#FFFFFF",d:"M14,27h7v14c0,0.5-0.4,1-1,1h-5c-0.6,0-1-0.5-1-1"}),Object(o.a)("path",{fill:"#FFFFFF",d:"M28,13h13c0.5,0,1,0.4,1,1v6H28"}),Object(o.a)("path",{fill:"#FFFFFF",d:"M41,34H28v-7h14v6C42,33.6,41.6,34,41,34z"}))),Object(o.a)("g",null,Object(o.a)("path",{fill:"#003479",d:"M85.1,42.3c-3.2,0-6-0.8-8.1-1.9l0.6-4c2,1.3,4.7,2.5,7.6,2.5c3,0,5.2-1.6,5.2-4.4c0-2.6-1.2-3.7-5.5-5.7c-5.5-2.5-7.5-4.3-7.5-8.4c0-4.7,3.6-7.6,8.8-7.6c2.8,0,4.9,0.7,6.6,1.6l-0.6,3.9c-1.6-1.2-3.8-2.1-6.1-2.1c-3.3,0-4.8,1.8-4.8,3.9c0,2.2,1.1,3.3,5.5,5.3c5.6,2.6,7.6,4.5,7.6,8.9C94.3,39.2,90.5,42.3,85.1,42.3z"}),Object(o.a)("path",{fill:"#003479",d:"M102,22v13.7c0,2.1,0.9,3.4,3.1,3.4c2,0,4-1.3,5.8-3.2V22h3.7v20h-3l-0.5-2.9c-1.9,1.8-4.3,3.3-7.1,3.3c-3.8,0-5.8-2.3-5.8-5.9V22H102z"}),Object(o.a)("path",{fill:"#003479",d:"M127.7,42.4c-5.3,0-9.2-3.8-9.2-10.4c0-6.6,3.9-10.5,9.2-10.5c5.4,0,9.3,3.9,9.3,10.5C137.1,38.6,133.1,42.4,127.7,42.4z M127.7,24.7c-3.6,0-5.4,3.2-5.4,7.4c0,4.1,1.9,7.3,5.4,7.3c3.7,0,5.5-3.1,5.5-7.3C133.3,27.9,131.3,24.7,127.7,24.7z"}),Object(o.a)("path",{fill:"#003479",d:"M165.7,42V28.3c0-2.1-0.8-3.4-2.9-3.4c-2,0-3.9,1.3-5.7,3.2V42h-3.7V28.3c0-2.1-0.8-3.4-2.9-3.4c-2,0-3.9,1.3-5.7,3.2V42H141V22h3l0.5,2.9c1.9-1.7,4.2-3.3,7-3.3c2.9,0,4.5,1.3,5.3,3.3c1.8-1.7,4.2-3.3,7.1-3.3c3.8,0,5.7,2.3,5.7,5.9V42H165.7z"}),Object(o.a)("path",{fill:"#003479",d:"M176.5,17.7c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S177.8,17.7,176.5,17.7z M174.6,42V22h3.7v20H174.6z"}),Object(o.a)("path",{fill:"#003479",d:"M200,16.3c-1.7,0-2.8,0.7-2.8,2.6V22h4l0.5,3.2h-4.5V42h-3.7V25.1h-3V22h3v-3.5c0-4,2.6-5.5,6.2-5.5c0.6,0,1.1,0,1.6,0.1l0.5,3.4C201.5,16.4,200.7,16.3,200,16.3z"}),Object(o.a)("path",{fill:"#003479",d:"M206.8,17.7c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S208.1,17.7,206.8,17.7z M204.9,42V22h3.7v20H204.9z"}),Object(o.a)("path",{fill:"#003479",d:"M185.6,42c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S186.9,42,185.6,42z"})))},c=function(){return Object(o.a)("svg",{height:"100%",viewBox:"0 0 80 80",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(o.a)("g",{id:"Ikonit-/-Kuvitukset-/-Ratkaisu",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},Object(o.a)("g",{id:"Group-2",transform:"translate(8.000000, 8.000000)"},Object(o.a)("path",{d:"M31,31 L18,31 L18,28.424 L18.498,28.135 C20.112,27.2 21,25.732 21,24 C21,21.243 18.757,19 16,19 C13.243,19 11,21.243 11,24 C11,25.732 11.888,27.2 13.501,28.135 L14,28.424 L14,31 L0,31 L0,4 C0,1.794 1.794,0 4,0 L31,0 L31,2 L4,2 C2.897,2 2,2.897 2,4 L2,29 L11.287,29 C9.818,27.715 9,25.954 9,24 C9,20.14 12.14,17 16,17 C19.86,17 23,20.14 23,24 C23,25.954 22.182,27.715 20.713,29 L31,29 L31,31",id:"Fill-77",fill:"#EA7125"}),Object(o.a)("path",{d:"M31,64 L4,64 C1.794,64 0,62.206 0,60 L0,33 L2,33 L2,60 C2,61.103 2.897,62 4,62 L29,62 L29,52.713 C27.715,54.182 25.954,55 24,55 C20.14,55 17,51.86 17,48 C17,44.14 20.14,41 24,41 C25.954,41 27.715,41.818 29,43.287 L29,33 L31,33 L31,46 L28.424,46 L28.135,45.501 C27.2,43.888 25.732,43 24,43 C21.243,43 19,45.243 19,48 C19,50.757 21.243,53 24,53 C25.732,53 27.2,52.112 28.135,50.499 L28.424,50 L31,50 L31,64",id:"Fill-78",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M60,64 L33,64 L33,62 L60,62 C61.103,62 62,61.103 62,60 L62,35 L52.79,35 C54.226,36.222 55,37.95 55,40 C55,43.86 51.86,47 48,47 C44.14,47 41,43.86 41,40 C41,37.95 41.774,36.222 43.21,35 L33,35 L33,33 L46,33 L46,35.607 L45.46,35.888 C43.828,36.735 43,38.119 43,40 C43,42.757 45.243,45 48,45 C50.757,45 53,42.757 53,40 C53,38.119 52.172,36.735 50.54,35.888 L50,35.607 L50,33 L64,33 L64,60 C64,62.206 62.206,64 60,64",id:"Fill-79",fill:"#EA7125"}),Object(o.a)("path",{d:"M64,31 L62,31 L62,4 C62,2.897 61.103,2 60,2 L35,2 L35,11.287 C36.285,9.818 38.046,9 40,9 C43.86,9 47,12.14 47,16 C47,19.86 43.86,23 40,23 C38.046,23 36.285,22.182 35,20.713 L35,31 L33,31 L33,18 L35.576,18 L35.865,18.499 C36.8,20.112 38.268,21 40,21 C42.757,21 45,18.757 45,16 C45,13.243 42.757,11 40,11 C38.268,11 36.8,11.888 35.865,13.501 L35.576,14 L33,14 L33,0 L60,0 C62.206,0 64,1.794 64,4 L64,31",id:"Fill-80",fill:"#A5ACB0"}),Object(o.a)("polygon",{id:"Fill-81",fill:"#A5ACB0",points:"29 6 31 6 31 4 29 4"}),Object(o.a)("polygon",{id:"Fill-82",fill:"#A5ACB0",points:"25 6 27 6 27 4 25 4"}),Object(o.a)("polygon",{id:"Fill-83",fill:"#A5ACB0",points:"21 6 23 6 23 4 21 4"}),Object(o.a)("polygon",{id:"Fill-84",fill:"#A5ACB0",points:"41 60 43 60 43 58 41 58"}),Object(o.a)("polygon",{id:"Fill-85",fill:"#A5ACB0",points:"37 60 39 60 39 58 37 58"}),Object(o.a)("polygon",{id:"Fill-86",fill:"#A5ACB0",points:"33 60 35 60 35 58 33 58"}),Object(o.a)("polygon",{id:"Fill-87",fill:"#A5ACB0",points:"4 35 6 35 6 33 4 33"}),Object(o.a)("polygon",{id:"Fill-88",fill:"#A5ACB0",points:"4 39 6 39 6 37 4 37"}),Object(o.a)("polygon",{id:"Fill-89",fill:"#A5ACB0",points:"4 43 6 43 6 41 4 41"}),Object(o.a)("polygon",{id:"Fill-90",fill:"#A5ACB0",points:"58 23 60 23 60 21 58 21"}),Object(o.a)("polygon",{id:"Fill-91",fill:"#A5ACB0",points:"58 27 60 27 60 25 58 25"}),Object(o.a)("polygon",{id:"Fill-92",fill:"#A5ACB0",points:"58 31 60 31 60 29 58 29"})),Object(o.a)("rect",{id:"bounding-box",x:"0",y:"0",width:"80",height:"80"})))},s=function(){return Object(o.a)("svg",{height:"100%",viewBox:"0 0 80 80",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(o.a)("g",{id:"Ikonit-/-Kuvitukset-/-Suositut-artikkelit",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},Object(o.a)("g",{id:"Group-9",transform:"translate(8.000000, 8.000000)"},Object(o.a)("path",{d:"M39.70725,29.707 L38.29325,28.293 L44.58625,22 L42.00025,19.414 L35.70725,25.707 L34.29325,24.293 L41.29325,17.293 C41.68425,16.902 42.31625,16.902 42.70725,17.293 L46.70725,21.293 C47.09825,21.684 47.09825,22.316 46.70725,22.707 L39.70725,29.707",id:"Fill-365",fill:"#EA7125"}),Object(o.a)("path",{d:"M40.92925,50 L43.52925,52.01 C43.85925,52.265 43.99725,52.698 43.87325,53.097 L42.91725,56.186 L45.37525,54.219 C45.74125,53.928 46.25925,53.928 46.62525,54.219 L48.98025,56.104 L48.05125,53.316 C47.91925,52.919 48.04825,52.48 48.37525,52.219 L51.14925,50 L48.00025,50 C47.56925,50 47.18825,49.725 47.05125,49.316 L46.00025,46.162 L44.94925,49.316 C44.81225,49.725 44.43125,50 44.00025,50 L40.92925,50 L40.92925,50 Z M41.00025,60 C40.80425,60 40.60725,59.942 40.43725,59.826 C40.07425,59.579 39.91525,59.124 40.04525,58.704 L41.75825,53.168 L37.38925,49.791 C37.05025,49.529 36.91525,49.082 37.05425,48.677 C37.19225,48.272 37.57225,48 38.00025,48 L43.27925,48 L45.05125,42.684 C45.18825,42.275 45.56925,42 46.00025,42 C46.43125,42 46.81325,42.275 46.94925,42.684 L48.72125,48 L54.00025,48 C54.42525,48 54.80325,48.269 54.94425,48.669 C55.08425,49.069 54.95725,49.516 54.62525,49.781 L50.16925,53.346 L51.94925,58.684 C52.08925,59.104 51.93625,59.566 51.57225,59.82 C51.20925,60.073 50.72125,60.059 50.37525,59.781 L46.00025,56.28 L41.62425,59.781 C41.44325,59.927 41.22225,60 41.00025,60 L41.00025,60 Z",id:"Fill-366",fill:"#EA7125"}),Object(o.a)("path",{d:"M17.92925,8 L20.52925,10.01 C20.85925,10.265 20.99725,10.698 20.87325,11.097 L19.91725,14.186 L22.37625,12.219 C22.74125,11.928 23.25925,11.928 23.62425,12.219 L25.98025,14.104 L25.05125,11.316 C24.91925,10.919 25.04825,10.48 25.37625,10.219 L28.14925,8 L25.00025,8 C24.56925,8 24.18725,7.725 24.05125,7.316 L23.00025,4.162 L21.94925,7.316 C21.81225,7.725 21.43125,8 21.00025,8 L17.92925,8 L17.92925,8 Z M18.00025,18 C17.80425,18 17.60725,17.942 17.43725,17.826 C17.07425,17.579 16.91525,17.124 17.04525,16.704 L18.75825,11.168 L14.38925,7.791 C14.05025,7.529 13.91525,7.082 14.05425,6.677 C14.19225,6.272 14.57225,6 15.00025,6 L20.27925,6 L22.05125,0.684 C22.18725,0.275 22.56925,0 23.00025,0 C23.43125,0 23.81225,0.275 23.94925,0.684 L25.72125,6 L31.00025,6 C31.42525,6 31.80325,6.269 31.94425,6.669 C32.08425,7.069 31.95625,7.516 31.62425,7.781 L27.16925,11.346 L28.94925,16.684 C29.08925,17.104 28.93525,17.566 28.57225,17.82 C28.20925,18.074 27.72125,18.058 27.37525,17.781 L23.00025,14.28 L18.62425,17.781 C18.44325,17.927 18.22225,18 18.00025,18 L18.00025,18 Z",id:"Fill-367",fill:"#EA7125"}),Object(o.a)("path",{d:"M35.00025,58 C28.33525,58 21.82525,55.683 16.67025,51.474 L17.93525,49.925 C22.73425,53.843 28.79425,56 35.00025,56 L35.00025,58",id:"Fill-368",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M58.80225,45.572 L57.16125,44.428 C60.32725,39.89 62.00025,34.555 62.00025,29 C62.00025,14.112 49.88825,2 35.00025,2 L35.00025,0 C50.99125,0 64.00025,13.01 64.00025,29 C64.00025,34.966 62.20325,40.696 58.80225,45.572",id:"Fill-369",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M12.52625,47.33 C8.31825,42.177 6.00025,35.667 6.00025,29 C6.00025,23.034 7.79825,17.304 11.19925,12.428 L12.84025,13.572 C9.67325,18.11 8.00025,23.445 8.00025,29 C8.00025,35.207 10.15825,41.268 14.07525,46.064 L12.52625,47.33",id:"Fill-370",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M50.00025,31 C48.89725,31 48.00025,30.103 48.00025,29 C48.00025,27.897 48.89725,27 50.00025,27 C51.10325,27 52.00025,27.897 52.00025,29 C52.00025,30.103 51.10325,31 50.00025,31",id:"Fill-371",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M39.00025,10 C37.89725,10 37.00025,9.103 37.00025,8 C37.00025,6.897 37.89725,6 39.00025,6 C40.10325,6 41.00025,6.897 41.00025,8 C41.00025,9.103 40.10325,10 39.00025,10",id:"Fill-372",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M23.00025,24 C21.89725,24 21.00025,23.103 21.00025,22 C21.00025,20.897 21.89725,20 23.00025,20 C24.10325,20 25.00025,20.897 25.00025,22 C25.00025,23.103 24.10325,24 23.00025,24",id:"Fill-373",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M37.00025,43 C35.89725,43 35.00025,42.103 35.00025,41 C35.00025,39.897 35.89725,39 37.00025,39 C38.10325,39 39.00025,39.897 39.00025,41 C39.00025,42.103 38.10325,43 37.00025,43",id:"Fill-374",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M54.00025,39 C52.89725,39 52.00025,38.103 52.00025,37 C52.00025,35.897 52.89725,35 54.00025,35 C55.10325,35 56.00025,35.897 56.00025,37 C56.00025,38.103 55.10325,39 54.00025,39",id:"Fill-375",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M50.00025,16 C48.89725,16 48.00025,15.103 48.00025,14 C48.00025,12.897 48.89725,12 50.00025,12 C51.10325,12 52.00025,12.897 52.00025,14 C52.00025,15.103 51.10325,16 50.00025,16",id:"Fill-376",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M16.78525,43.044 C13.65425,38.99 12.00025,34.134 12.00025,29 L14.00025,29 C14.00025,33.688 15.51025,38.121 18.36825,41.821 L16.78525,43.044",id:"Fill-377",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M2.41425,59 L5.00025,61.586 L35.58625,31 L33.00025,28.414 L2.41425,59 L2.41425,59 Z M5.00025,64 C4.74425,64 4.48825,63.902 4.29325,63.707 L0.29325,59.707 C-0.09775,59.316 -0.09775,58.684 0.29325,58.293 L32.29325,26.293 C32.68425,25.902 33.31625,25.902 33.70725,26.293 L37.70725,30.293 C38.09825,30.684 38.09825,31.316 37.70725,31.707 L5.70725,63.707 C5.51225,63.902 5.25625,64 5.00025,64 L5.00025,64 Z",id:"Fill-364",fill:"#EA7125"}),Object(o.a)("path",{d:"M58.00025,29 L56.00025,29 C56.00025,25.311 55.03025,21.682 53.19525,18.506 L54.92625,17.506 C56.93725,20.985 58.00025,24.96 58.00025,29",id:"Fill-378",fill:"#A5ACB0"}),Object(o.a)("polygon",{id:"Fill-379",fill:"#A5ACB0",points:"33.00025 16 35.00025 16 35.00025 14 33.00025 14"}),Object(o.a)("polygon",{id:"Fill-380",fill:"#A5ACB0",points:"22.00025 29 24.00025 29 24.00025 27 22.00025 27"}),Object(o.a)("polygon",{id:"Fill-381",fill:"#A5ACB0",points:"45.00025 39 47.00025 39 47.00025 37 45.00025 37"}),Object(o.a)("polygon",{id:"Fill-382",fill:"#A5ACB0",points:"12.00025 27 14.00025 27 14.00025 25 12.00025 25"}),Object(o.a)("polygon",{id:"Fill-383",fill:"#A5ACB0",points:"31.00025 50 33.00025 50 33.00025 48 31.00025 48"})),Object(o.a)("rect",{id:"bounding-box",x:"0",y:"0",width:"80",height:"80"})))},d=function(){return Object(o.a)("svg",{height:"100%",viewBox:"0 0 80 80",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(o.a)("g",{id:"Ikonit-/-Kuvitukset-/-Kirja",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},Object(o.a)("g",{id:"Opiskelu-ja-koulutus",transform:"translate(8.000000, 14.000000)"},Object(o.a)("path",{d:"M40,52 L1,52 C0.447,52 0,51.552 0,51 L0,5 C0,4.448 0.447,4 1,4 L5,4 L5,6 L2,6 L2,50 L40,50 L40,52",id:"Fill-56",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M64,40 L62,40 L62,6 L59,6 L59,4 L63,4 C63.553,4 64,4.448 64,5 L64,40",id:"Fill-57",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M32,52 C31.744,52 31.488,51.902 31.293,51.707 L27.586,48 L5,48 C4.447,48 4,47.552 4,47 L4,1 C4,0.448 4.447,0 5,0 L28,0 C28.266,0 28.52,0.105 28.707,0.293 L32,3.586 L35.293,0.293 C35.48,0.105 35.734,0 36,0 L59,0 C59.553,0 60,0.448 60,1 L60,40 L58,40 L58,2 L36.414,2 L32.707,5.707 C32.316,6.098 31.684,6.098 31.293,5.707 L27.586,2 L6,2 L6,46 L28,46 C28.266,46 28.52,46.105 28.707,46.293 L32,49.586 L35.293,46.293 C35.48,46.105 35.734,46 36,46 L40,46 L40,48 L36.414,48 L32.707,51.707 C32.512,51.902 32.256,52 32,52",id:"Fill-58",fill:"#A5ACB0"}),Object(o.a)("path",{d:"M64,52 L41,52 C40.447,52 40,51.552 40,51 L40,19 L42,19 L42,50 L64,50",id:"Fill-58-Copy",fill:"#A5ACB0",transform:"translate(52.000000, 35.500000) scale(-1, 1) translate(-52.000000, -35.500000) "}),Object(o.a)("path",{d:"M59.586,48 L37,48 C36.447,48 36,47.552 36,47 L36,15 L38,15 L38,46 L57,46 L60,46",id:"Fill-58-Copy",fill:"#A5ACB0",transform:"translate(48.000000, 31.500000) scale(-1, 1) translate(-48.000000, -31.500000) "}),Object(o.a)("polygon",{id:"Fill-59",fill:"#A5ACB0",points:"31 51 33 51 33 5 31 5"}),Object(o.a)("polygon",{id:"Fill-60",fill:"#A5ACB0",points:"8 26 29 26 29 24 8 24"}),Object(o.a)("polygon",{id:"Fill-61",fill:"#A5ACB0",points:"8 30 29 30 29 28 8 28"}),Object(o.a)("polygon",{id:"Fill-62",fill:"#A5ACB0",points:"8 34 29 34 29 32 8 32"}),Object(o.a)("polygon",{id:"Fill-63",fill:"#A5ACB0",points:"8 38 29 38 29 36 8 36"}),Object(o.a)("polygon",{id:"Fill-64",fill:"#A5ACB0",points:"8 42 29 42 29 40 8 40"}),Object(o.a)("path",{d:"M10,20 L27,20 L27,12 L10,12 L10,20 Z M28,22 L9,22 C8.447,22 8,21.552 8,21 L8,11 C8,10.448 8.447,10 9,10 L28,10 C28.553,10 29,10.448 29,11 L29,21 C29,21.552 28.553,22 28,22 L28,22 Z",id:"Fill-65",fill:"#EA7125"}),Object(o.a)("polygon",{id:"Fill-66",fill:"#A5ACB0",points:"35 8 56 8 56 6 35 6"}),Object(o.a)("polygon",{id:"Fill-67",fill:"#A5ACB0",points:"35 12 56 12 56 10 35 10"}),Object(o.a)("polygon",{id:"Fill-68",fill:"#A5ACB0",points:"35 16 56 16 56 14 35 14"}),Object(o.a)("polygon",{id:"Fill-69",fill:"#A5ACB0",points:"35 32 56 32 56 30 35 30"}),Object(o.a)("polygon",{id:"Fill-70",fill:"#A5ACB0",points:"35 36 56 36 56 34 35 34"}),Object(o.a)("polygon",{id:"Fill-71",fill:"#A5ACB0",points:"35 40 56 40 56 38 35 38"}),Object(o.a)("polygon",{id:"Fill-72",fill:"#EA7125",points:"37 24 39 24 39 22 37 22"}),Object(o.a)("polygon",{id:"Fill-73",fill:"#EA7125",points:"41 24 50 24 50 22 41 22"}),Object(o.a)("polygon",{id:"Fill-74",fill:"#EA7125",points:"52 24 54 24 54 22 52 22"}),Object(o.a)("polygon",{id:"Fill-77",fill:"#A5ACB0",points:"8 8 29 8 29 6 8 6"})),Object(o.a)("rect",{id:"bounding-box",x:"0",y:"0",width:"80",height:"80"})))};n.d(e,"a",function(){return u});var u=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e}(l.Component);u.suomifi=function(){return Object(o.a)(r,null)},u.solution=function(){return Object(o.a)(c,null)},u.favorites=function(){return Object(o.a)(s,null)},u.book=function(){return Object(o.a)(d,null)}},222:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return C}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return b}),n.d(e,"useStaticQuery",function(){return f});var i=n(9),a=n(0),o=n.n(a),l=n(4),r=n.n(l),c=n(40),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"parsePath",function(){return c.parsePath}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var d=n(223),u=n.n(d);n.d(e,"PageRenderer",function(){return u.a});var p=o.a.createContext({}),b=function(t){return Object(i.a)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(i.a)("div",null,"Loading (StaticQuery)")})},f=function(t){o.a.useContext;var e=o.a.useContext(p);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function C(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},223:function(t,e,n){var i;t.exports=(i=n(228))&&i.default||i},228:function(t,e,n){"use strict";n.r(e);n(67);var i=n(0),a=n.n(i),o=n(4),l=n.n(o),r=n(69),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=s},268:function(t,e){},269:function(t,e){},270:function(t,e){},281:function(t,e){}}]);
//# sourceMappingURL=3-17bd4cd41b9d1c6adfc2.js.map