(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{396:function(e,t,i){"use strict";i.r(t),i.d(t,"query",function(){return c});var a=i(32),r=(i(1),i(405)),s=i(406),n=i(417),l=i(416),o=i(452),d=i(407),u=i(428);t.default=Object(s.withI18next)()(function(){return Object(a.a)(r.NamespacesConsumer,{ns:["designers"]},function(e){return Object(a.a)(n.a,{sideNavData:Object(o.a)(e)},Object(a.a)(l.a,{title:e("title")}),Object(a.a)(d.a.h1,null,e("title")),Object(a.a)("p",null,Object(a.a)(d.b.lead,null,e("intro"))),e("sections").map(function(e,t){return Object(a.a)(u.a,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})}))})});var c="2520468691"},424:function(e,t,i){"use strict";var a=i(32),r=(i(1),i(411)),s=function(e){return e&&!!e.text&&!!e.url};t.a=function(e){var t=e.links,i=void 0===t?[]:t;if(1===(i=function(e){return e.filter(s)}(i)).length){var n=i[0];return Object(a.a)(r.a,{text:n.text,url:n.url})}return i.length>1?Object(a.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},i.map(function(e,t){return Object(a.a)("li",{key:t,style:{margin:"1rem 0"}},Object(a.a)(r.a,{text:e.text,url:e.url}))})):null}},425:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB2klEQVQoz2P4//8/AxAwmpqZcx0/fd7g4vW7Jheu3TE+f+Wm2ZnzF0UZoEA9c0swEM8wyN/WY1y4vc+wYHufCZDWztnaCxSfqJG1RRmsEGggI5Bibe/qq/jw4cP/V69e/Xn69NmvH9+//X/1+s0muIFp6zJUU9ftMSvYuNahbMsG29LNGxzLt2zQy96wXiV13Wb19HXaMANBFE9Nc++sTSef/t959snfA5ee/zly4/3/m4/eHINayPDv//8cIPvI1x9/trz88HP7uy+/tr/48GM7UAyEd3/89lsX2YW8PROnzzh5693/nWce/dl3/vHvQ9fe/L/77P1xoDwzSN2zt19DX3/8PvPl+++9z99963/x/ls/iH754Xv/qw/fJ91/8RnFy7yTp86YAWT///Xt45+vn979AbF/fP9+Ytu5FywgdU/e/Sp6+Obn+fMPPu8D4oMXgPj03U8Hrz35ehAod/Txu1/6yAbydfdNnAoy5NvXb38+ffwINvDb9x+HYGG46+DR2J0HjqzYe/jEbCCeC8J7gBgoPhcovnDngaNqKAb2TpgMNvDF289/Xr//DDPwML+KNjgM12zamrF645a9G7ftXLd+644N67ZsB+M1m7duWL1p6xagPDhSAETuVsS/070NAAAAAElFTkSuQmCC",aspectRatio:2.8260869565217392,src:"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/bb341/buttonsMobileFI.png",srcSet:"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/7c0ed/buttonsMobileFI.png 200w,\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/647de/buttonsMobileFI.png 400w,\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/bb341/buttonsMobileFI.png 715w",sizes:"(max-width: 715px) 100vw, 715px"}}}}}},426:function(e,t,i){"use strict";var a=i(28);t.__esModule=!0,t.default=void 0;var r,s=a(i(20)),n=a(i(86)),l=a(i(172)),o=a(i(85)),d=a(i(1)),u=a(i(13)),c=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),i=t.fluid?t.fluid.src:t.fixed.src;return f[i]||!1},b=new WeakMap;var g=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),r);return i&&(i.observe(e),b.set(e,t)),function(){i.unobserve(e),b.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+a+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+i+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,s=e.style,n=e.onLoad,u=e.onError,c=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({sizes:i,srcSet:a,src:r},c,{onLoad:n,onError:u,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});m.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var i;i=e.call(this,t)||this;var a=!0,r=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var o=!(t.critical&&!t.fadeIn);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:o,seenBefore:l},i.imageRef=d.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)((0,n.default)(i))),i.handleRef=i.handleRef.bind((0,n.default)((0,n.default)(i))),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),i=t.fluid?t.fluid.src:t.fixed.src,f[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,b=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,w=e.itemProp,O=this.state.imgLoaded||!1===this.state.fadeIn,A=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,o.default)({opacity:O?1:0,transition:A?"opacity "+v+"ms":"none"},l),I="boolean"==typeof y?"lightgray":y,E={transitionDelay:v+"ms"},L=(0,o.default)({opacity:this.state.imgLoaded?0:1},A&&E,l,f),z={title:t,alt:this.state.isVisible?"":i,style:L,className:p};if(b){var x=b;return d.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),I&&d.default.createElement(S,{title:t,style:(0,o.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&E)}),x.base64&&d.default.createElement(m,(0,o.default)({src:x.base64},z)),x.tracedSVG&&d.default.createElement(m,(0,o.default)({src:x.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(m,{alt:i,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:i,title:t},x))}}))}if(g){var N=g,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},s);return"inherit"===s.display&&delete R.display,d.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},I&&d.default.createElement(S,{title:t,style:(0,o.default)({backgroundColor:I,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},A&&E)}),N.base64&&d.default.createElement(m,(0,o.default)({src:N.base64},z)),N.tracedSVG&&d.default.createElement(m,(0,o.default)({src:N.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(m,{alt:i,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:i,title:t},N))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var w=y;t.default=w},428:function(e,t,i){"use strict";var a=i(32),r=i(1),s=i(172),n=i.n(s),l=i(20),o=i.n(l),d=i(85),u=i.n(d),c=i(425),f=i(409),p=i(426),b=i.n(p),g=function(e){return Object(a.a)(f.StaticQuery,{query:"3539101165",render:function(t){return Object(a.a)(b.a,u()({fluid:t.image.childImageSharp.fluid},e))},data:c})},h=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).images={ButtonsMobileFI:g},t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.imgKey,i=n()(e,["imgKey"]),r=this.images[t];return Object(a.a)(r,i)},t}(r.Component),m=i(407),y=i(424),v=function(e){return e&&!!e.text},S=function(e){var t=e.items,i=void 0===t?[]:t;return(i=function(e){return e.filter(v)}(i)).length>0?Object(a.a)("ul",null,i.map(function(e,t){return Object(a.a)("li",{key:t},Object(a.a)(m.b,null,e.text))})):null};t.a=function(e){var t=e.mainTitle,i=e.title,r=e.paragraphs,s=e.links;return Object(a.a)("section",null,!!t&&Object(a.a)(m.a.h2,null,t),!!i&&Object(a.a)(m.a.h3,null,i),r.map(function(e,t){return Object(a.a)("div",{key:t},!!e["image.key"]&&Object(a.a)("div",{"aria-hidden":!0},Object(a.a)(h,{imgKey:e["image.key"],alt:e["image.alt"]})),!!e.text&&Object(a.a)("p",null,Object(a.a)(m.b,null,e.text)),Object(a.a)("div",{style:{margin:"1rem 0"}},Object(a.a)(S,{items:e.listItems})))}),Object(a.a)("div",{style:{margin:"1rem 0 2rem"}},Object(a.a)(y.a,{links:s})))}},452:function(e,t,i){"use strict";var a=i(32),r=(i(1),i(480));t.a=function(e){return{title:e("info:title"),icon:Object(a.a)(r.a,{icon:"staticIllustrationBook"}),items:[{to:"/info/",showAsTo:"/info/general/",label:e("info:info.title")},{to:"/info/accessibility/",label:e("accessibility:title")},{to:"/info/designers/",label:e("designers:title")}]}}}}]);
//# sourceMappingURL=component---src-pages-info-designers-tsx-0136ea6732ad0b13974e.js.map