(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function d(){u=e(c.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){c.push(this),d()},l.componentDidUpdate=function(){d()},l.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),d()},l.render=function(){return i.createElement(n,this.props)},a}(a.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(f,"canUseDOM",s),f}}},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),u=n(r("q1tI")),c=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=T(t||r||[]);return n&&n.src},T=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),E=function(e){var t=d(e),r=p(t);return m[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,A=g&&window.IntersectionObserver,S=new WeakMap;function b(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function y(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function _(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var w=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+u+o+l+r+n+t+i+a+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=u.default.createElement(I,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),l):l})),I=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,T=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},T,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var M=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=g&&E(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&A&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||g&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:g}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,(function(){var e=E(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,E=e.fixed,h=e.backgroundColor,g=e.durationFadeIn,A=e.Tag,S=e.itemProp,y=e.loading,R=e.draggable,w=m||E;if(!w)return null;var M=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,s.default)({opacity:M?1:0,transition:N?"opacity "+g+"ms":"none"},l),C="boolean"==typeof h?"lightgray":h,G={transitionDelay:g+"ms"},H=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&G,l,f),j={title:t,alt:this.state.isVisible?"":r,style:H,className:p,itemProp:S},k=this.state.isHydrated?T(w):w[0];if(m)return u.default.createElement(A,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},u.default.createElement(A,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),C&&u.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&G)}),k.base64&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:j,imageVariants:w,generateSources:_}),k.tracedSVG&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:j,imageVariants:w,generateSources:v}),this.state.isVisible&&u.default.createElement("picture",null,b(w),u.default.createElement(I,{alt:r,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:R})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:r,title:t,loading:y},k,{imageVariants:w}))}}));if(E){var x=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete x.display,u.default.createElement(A,{className:(n||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},C&&u.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},N&&G)}),k.base64&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:j,imageVariants:w,generateSources:_}),k.tracedSVG&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:j,imageVariants:w,generateSources:v}),this.state.isVisible&&u.default.createElement("picture",null,b(w),u.default.createElement(I,{alt:r,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:R})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:r,title:t,loading:y},k,{imageVariants:w}))}}))}return null},t}(u.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");c.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}M.propTypes={resolutions:N,sizes:L,fixed:C(c.default.oneOfType([N,c.default.arrayOf(N)])),fluid:C(c.default.oneOfType([L,c.default.arrayOf(L)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var G=M;t.default=G},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=r("9eSz"),l=r.n(o),s=function(e){var t,r,n,o,l=e.direction,s=Object(i.useStaticQuery)("290055352"),u=null===(t=s.site.siteMetadata)||void 0===t||null===(r=t.social)||void 0===r?void 0:r.twitter,c=null===(n=s.site.siteMetadata)||void 0===n||null===(o=n.social)||void 0===o?void 0:o.github;return a.a.createElement("div",null,a.a.createElement("div",{className:"social__icons "+l},a.a.createElement("a",{href:"https://twitter.com/"+(u||""),target:"_blank",rel:"noreferrer"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-twitter",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))),a.a.createElement("a",{href:"https://github.com/"+(c||""),target:"_blank",rel:"noreferrer"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))))},u=function(){var e,t,r,n=Object(i.useStaticQuery)("1578995489"),o=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,u=null==n||null===(t=n.avatar)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.fixed;return a.a.createElement("div",{className:"bio"},a.a.createElement("div",null,a.a.createElement("div",{className:"bio__wrapper"},a.a.createElement("div",{className:"bio__meta"},u&&a.a.createElement(l.a,{fixed:u,alt:(null==o?void 0:o.name)||"",className:"bio__avatar"}),(null==o?void 0:o.name)&&a.a.createElement("strong",null,o.name)),a.a.createElement(s,{direction:"row"})),a.a.createElement("div",{className:"bio__summary"},(null==o?void 0:o.summary)||null)))},c=function(){var e=Object(i.useStaticQuery)("3894407297").tagsGroup.group;return a.a.createElement("div",{className:"tags"},e.map((function(e,t){return a.a.createElement(i.Link,{to:"/tag/"+e.fieldValue.toLowerCase().replace(" ","-"),key:t},a.a.createElement("span",{className:"tag",key:e.fieldValue},e.fieldValue))})))},d=function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"footer__left"},a.a.createElement(u,null)),a.a.createElement("div",{className:"footer__right"},a.a.createElement(c,null)))},f=function(e){var t,r=e.title;return t=e.isRootPath?a.a.createElement("div",{className:"logo"},a.a.createElement("div",{className:"logo__border"},a.a.createElement("h1",{className:"logo__main"},a.a.createElement(i.Link,{to:"/"},r)))):a.a.createElement("div",{className:"logo__link"},a.a.createElement("div",{className:"logo__link__border"},a.a.createElement(i.Link,{className:"logo__link__main",to:"/"},r))),a.a.createElement("header",{className:"global__header"},t)};t.a=function(e){var t=e.location,r=e.title,n=e.children,i="/blog/"===t.pathname;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{title:r,isRootPath:i}),a.a.createElement("main",{className:"container"},n),a.a.createElement(d,null))}},Gytx:function(e,t){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=r?r.call(n,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),l=d(r("8+s/")),s=d(r("bmMU")),u=r("v1p5"),c=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,h,g=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),A=(m=g,h=E=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(a.type){case c.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=l,t.titleAttributes=n({},o),t));case c.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case c.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var l,s,u,c=n(t),d=n(r);if(c&&d){if((s=t.length)!=r.length)return!1;for(l=s;0!=l--;)if(!e(t[l],r[l]))return!1;return!0}if(c!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,m=r instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==r.toString();var E=a(t);if((s=E.length)!==a(r).length)return!1;for(l=s;0!=l--;)if(!i.call(r,E[l]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(l=s;0!=l--;)if(!("_owner"===(u=E[l])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r("q1tI")),o=s(r("YVoz")),l=r("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var u,c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,l.TAG_NAMES.TITLE),r=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},m=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],u=s.toLowerCase();-1===t.indexOf(u)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(s)||s!==l.TAG_PROPERTIES.INNER_HTML&&s!==l.TAG_PROPERTIES.CSS_TEXT&&s!==l.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),s=0;s<i.length;s++){var u=i[s],c=(0,o.default)({},a[u],n[u]);a[u]=c}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),g=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;w(l.TAG_NAMES.BODY,n),w(l.TAG_NAMES.HTML,a),R(f,p);var T={baseTag:O(l.TAG_NAMES.BASE,r),linkTags:O(l.TAG_NAMES.LINK,i),metaTags:O(l.TAG_NAMES.META,o),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,s),scriptTags:O(l.TAG_NAMES.SCRIPT,c),styleTags:O(l.TAG_NAMES.STYLE,d)},m={},E={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(E[e]=T[e].oldTags)})),t&&t(),u(e,m,E)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var u=o[s],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===a.indexOf(u)&&a.push(u);var d=i.indexOf(u);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},O=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,a=I(r,n),[i.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),i=_(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+c(i,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+c(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+c(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){y&&S(y),e.defer?y=A((function(){v(e,(function(){y=null}))})):(v(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:M(l.TAG_NAMES.BASE,t,n),bodyAttributes:M(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(l.ATTRIBUTE_NAMES.HTML,a,n),link:M(l.TAG_NAMES.LINK,i,n),meta:M(l.TAG_NAMES.META,o,n),noscript:M(l.TAG_NAMES.NOSCRIPT,s,n),script:M(l.TAG_NAMES.SCRIPT,u,n),style:M(l.TAG_NAMES.STYLE,c,n),title:M(l.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([l.TAG_PROPERTIES.HREF],e),bodyAttributes:p(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("TJpk"),o=r("Wbzz"),l=function(e){var t,r,n,l=e.description,s=e.lang,u=e.meta,c=e.title,d=Object(o.useStaticQuery)("3347749741").site,f=l||d.siteMetadata.description,p=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(i.Helmet,{htmlAttributes:{lang:s},title:c,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:c},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=d.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:f},{name:"description",content:"zainsci's personal blog where I post what I learn in that day about programming and language"}].concat(u)})};l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=commons-85e6025a538db5f3e2a3.js.map