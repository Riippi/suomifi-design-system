(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"92lQ":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("/Wrt"),s=a("nQb1"),l=function(e){return e&&!!e.text&&!!e.url};t.a=function(e){var t=e.links,a=void 0===t?[]:t;if(1===(a=function(e){return e.filter(l)}(a)).length){var i=a[0];return r.a.createElement(s.a,{text:i.text,url:i.url})}return a.length>1?r.a.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"}},a.map((function(e,t){return r.a.createElement("li",{key:t,style:{margin:n.suomifiDesignTokens.spacing.s+" 0"}},r.a.createElement(s.a,{text:e.text,url:e.url}))}))):null}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),l=i(a("8OQS")),o=i(a("pVnL")),d=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function z(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+s+l+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(O,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?d.default.createElement("picture",null,r(i),l):l})),O=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,z=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:L?1:0,transition:k?"opacity "+y+"ms":"none"},l),N="boolean"==typeof b?"lightgray":b,V={transitionDelay:y+"ms"},q=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&V,{},l,{},f),C={title:t,alt:this.state.isVisible?"":a,style:q,className:g,itemProp:S};if(m){var P=m,M=p(m);return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&V)}),M.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:P,generateSources:I}),M.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:P,generateSources:A}),this.state.isVisible&&d.default.createElement("picture",null,E(P),d.default.createElement(O,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:P}))}}))}if(h){var H=h,j=p(h),W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},N&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},k&&V)}),j.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:C,imageVariants:H,generateSources:I}),j.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:C,imageVariants:H,generateSources:A}),this.state.isVisible&&d.default.createElement("picture",null,E(H),d.default.createElement(O,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},j,{imageVariants:H}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});k.propTypes={resolutions:T,sizes:N,fixed:u.default.oneOfType([T,u.default.arrayOf(T)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var V=k;t.default=V},GuFS:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));var i=a("q1tI"),r=a.n(i),n=a("9kay"),s=a("qpCF"),l=a("9Dj+"),o=a("H8eV"),d=a("bqxW"),u=a("FZSV"),c=a("nrjT");t.default=Object(s.withI18next)()((function(){return r.a.createElement(n.NamespacesConsumer,{ns:["accessibility"]},(function(e){return r.a.createElement(l.a,{sideNavData:Object(d.a)(e)},r.a.createElement(o.a,{title:e("title")}),r.a.createElement(u.a.h1,null,e("title")),r.a.createElement(u.b.lead,null,r.a.createElement(u.c.lead,null,e("intro"))),e("sections").map((function(e,t){return r.a.createElement(c.a,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})})))}))}));var f="2520468691"},Ol5z:function(e){e.exports=JSON.parse('{"data":{"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB2klEQVQoz2P4//8/AxAwmpqZcx0/fd7g4vW7Jheu3TE+f+Wm2ZnzF0UZoEA9c0swEM8wyN/WY1y4vc+wYHufCZDWztnaCxSfqJG1RRmsEGggI5Bibe/qq/jw4cP/V69e/Xn69NmvH9+//X/1+s0muIFp6zJUU9ftMSvYuNahbMsG29LNGxzLt2zQy96wXiV13Wb19HXaMANBFE9Nc++sTSef/t959snfA5ee/zly4/3/m4/eHINayPDv//8cIPvI1x9/trz88HP7uy+/tr/48GM7UAyEd3/89lsX2YW8PROnzzh5693/nWce/dl3/vHvQ9fe/L/77P1xoDwzSN2zt19DX3/8PvPl+++9z99963/x/ls/iH754Xv/qw/fJ91/8RnFy7yTp86YAWT///Xt45+vn979AbF/fP9+Ytu5FywgdU/e/Sp6+Obn+fMPPu8D4oMXgPj03U8Hrz35ehAod/Txu1/6yAbydfdNnAoy5NvXb38+ffwINvDb9x+HYGG46+DR2J0HjqzYe/jEbCCeC8J7gBgoPhcovnDngaNqKAb2TpgMNvDF289/Xr//DDPwML+KNjgM12zamrF645a9G7ftXLd+644N67ZsB+M1m7duWL1p6xagPDhSAETuVsS/070NAAAAAElFTkSuQmCC","aspectRatio":2.816901408450704,"src":"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/4823b/buttonsMobileFI.png","srcSet":"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/69585/buttonsMobileFI.png 200w,\\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/497c6/buttonsMobileFI.png 400w,\\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/4823b/buttonsMobileFI.png 715w","sizes":"(max-width: 715px) 100vw, 715px"}}}}}')},bqxW:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("kq7u");t.a=function(e){return{title:e("info:title"),icon:r.a.createElement(n.m,{icon:"book"}),items:[{to:"/info/",showAsTo:"/info/general/",label:e("info:info.title")},{to:"/info/accessibility/",label:e("accessibility:title")},{to:"/info/designers/",label:e("designers:title")},{to:"/info/developers/",label:e("developers:title")}]}}},nrjT:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("/Wrt"),s=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("Ol5z")),l=a("Wbzz"),o=a("9eSz"),d=a.n(o),u=function(e){return r.a.createElement(l.StaticQuery,{query:"3539101165",render:function(t){return r.a.createElement(d.a,Object.assign({fluid:t.image.childImageSharp.fluid},e))},data:s})};var c=function(e){var t,a;function i(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).images={ButtonsMobileFI:u},t}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.imgKey,a=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["imgKey"]),i=this.images[t];return r.a.createElement(i,a)},i}(i.Component),f=a("FZSV"),g=a("92lQ"),p=function(e){return e&&!!e.text},m=function(e){var t=e.items,a=void 0===t?[]:t;return(a=function(e){return e.filter(p)}(a)).length>0?r.a.createElement("ul",{style:{margin:0,padding:"0 0 0 "+n.suomifiDesignTokens.spacing.xl}},a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(f.c,null,e.text))}))):null};t.a=function(e){var t=e.mainTitle,a=e.title,i=e.paragraphs,s=e.links;return r.a.createElement("section",null,!!t&&r.a.createElement(f.a.h2,null,t),!!a&&r.a.createElement(f.a.h3,null,a),i.map((function(e,t){return r.a.createElement("div",{key:t},!!e["image.key"]&&r.a.createElement("div",{"aria-hidden":!0},r.a.createElement(c,{imgKey:e["image.key"],alt:e["image.alt"]})),!!e.text&&r.a.createElement(f.b,null,r.a.createElement(f.c,null,e.text)),r.a.createElement("div",{style:{margin:n.suomifiDesignTokens.spacing.xl+" 0"}},r.a.createElement(m,{items:e.listItems})))})),r.a.createElement("div",{style:{margin:n.suomifiDesignTokens.spacing.xl+" 0"}},r.a.createElement(g.a,{links:s})))}}}]);
//# sourceMappingURL=component---src-pages-info-accessibility-tsx-1593796b1b371f8eacce.js.map