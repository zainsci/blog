(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8282:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var n=a(7294),r=a(9008),l=a(5660),i=a.n(l),o=(a(2356),a(366),a(767),a(2447),a(5154)),s=a(6187),c=a(4849),m=n.createElement,h=function(){var e="zainsci";return m("footer",{className:"footer"},m("div",null,"Copyright \xa9 ",(new Date).getFullYear()," zainsci"),m("div",null,"Built with Next.js by"," ",m("a",{href:"https://zainsci.github.io",target:"_blank",rel:"noopener noreferrer"},"zainsci")),m("div",null,m("div",{className:"social__icons"},m("a",{href:"https://twitter.com/".concat(e),target:"_blank",rel:"noreferrer noopener",className:"icon__button"},m(o.Z,null)),m("a",{href:"https://instagram.com/".concat(e),target:"_blank",rel:"noreferrer noopener",className:"icon__button"},m(s.Z,null)),m("a",{href:"https://github.com/".concat(e),target:"_blank",rel:"noreferrer noopener",className:"icon__button"},m(c.Z,null)))))},u=a(1664),d=n.createElement,g=function(){var e;e=window.localStorage.getItem("theme");var t=(0,n.useState)(e),a=t[0],r=t[1],l=d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",className:"feather feather-moon"},d("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})),i=d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-sun"},d("circle",{cx:"12",cy:"12",r:"5"}),d("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),d("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),d("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),d("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),d("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),d("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),d("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),d("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}));return d("div",{className:"toggler"},d("a",{onClick:function(){"light"===a?(document.body.className="dark",localStorage.setItem("theme","dark"),r("dark")):(document.body.className="light",localStorage.setItem("theme","light"),r("light"))}},"light"===a?l:i))},f=n.createElement,p=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return f("header",{className:"header"},f("div",null,f("h3",{className:"logo"},"zainsci-blog"),f("div",{className:"nav__toggler",onClick:function(){return a(!t)}},f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-menu"},f("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f("line",{x1:"3",y1:"18",x2:"21",y2:"18"})))),f("nav",{className:"nav"},f("ul",{className:"nav__list"+(t?" nav__open":"")},f("li",{className:"nav__item"},f(u.default,{href:"/"},f("a",{className:"nav__link"},"Home"))),f("li",{className:"nav__item"},f("a",{href:"https://zainsci.github.io",className:"nav__link",target:"_blank",rel:"noopener noreferrer"},"Portfolio")),f("li",{className:"nav__item"},f(u.default,{href:"/about"},f("a",{className:"nav__link"},"About"))),f("li",{className:"nav__item"},f(u.default,{href:"/contact"},f("a",{className:"nav__link"},"Contact"))),f("li",{className:"nav__item"},f(g,null)))))},_=n.createElement,v=function(e){var t=e.title,a=e.children;return"undefined"!==typeof document&&(document.documentElement.lang="en-us"),(0,n.useEffect)((function(){var e=localStorage.getItem("theme");e?document.body.className=e:(window.localStorage.setItem("theme","light"),document.body.className="light"),i().highlightAll()}),[]),_(n.Fragment,null,_(r.default,null,_("link",{rel:"preload",href:"fonts.googleapis.com"}),_("title",null,t," - zainsci-blog"),_("meta",{charset:"UTF-8"}),_("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),_("meta",{name:"description",content:"A place for me, zainsci, to share what I learn about computers and programming."}),_("meta",{property:"og:title",content:"zainsci-blog"}),_("meta",{property:"og:description",content:"A place for me, zainsci, to share what I learn about computers and programming."}),_("meta",{property:"og:image",content:"https://zainsci.github.io/potrait.jpg"}),_("meta",{property:"og:url",content:"https://zainsci.github.io/blog"}),_("meta",{name:"twitter:card",content:"summary_large_image"}),_("meta",{property:"og:site_name",content:"zainsci-blog"}),_("meta",{name:"twitter:image:alt",content:"zainsci's portrait"})),_(p,null),_("a",{class:"skip-link",href:"#main"},"Skip to main"),_("main",{id:"main"},a),_(h,null))}},4776:function(e,t,a){"use strict";var n=a(7294).createElement;t.Z=function(e){var t=e.post,a=e.title;return n("div",{key:t.slug,className:"card"},n("a",{href:"/blog/posts/"+t.slug,itemProp:"url",className:"card__link"},n("article",{itemScope:!0,itemType:"http://schema.org/Article"},n("header",{className:"card__header"},n("h2",{className:"card__headline",itemProp:"headline"},a),n("section",null,n("p",{dangerouslySetInnerHTML:{__html:(t.description||t.excerpt)+"..."},itemProp:"description",className:"card__description"}))),n("footer",{className:"card__footer"},n("small",{className:"card__date"},n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-calendar"},n("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),t.date),n("small",{className:"card__readtime"},t.readtime," Min Read")))))}},4849:function(e,t,a){"use strict";var n=a(7294).createElement;t.Z=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-github"},n("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}},6187:function(e,t,a){"use strict";var n=a(7294).createElement;t.Z=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-instagram"},n("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),n("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),n("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))}},5154:function(e,t,a){"use strict";var n=a(7294).createElement;t.Z=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-twitter"},n("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}},4634:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m},default:function(){return h}});var n=a(7294),r=a(8282),l=a(1664),i=n.createElement,o=function(e){var t=e.post,a=e.title;return a=a.split(" - "),a=i(n.Fragment,null,a[0]," ",i("br",null)," ",a[1]),i(l.default,{href:"/posts/"+t.slug},i("a",{className:"hero"},i("article",{itemScope:!0,itemType:"http://schema.org/Article"},i("header",{className:"hero__header"},i("h2",{className:"hero__headline"},i("span",{itemProp:"headline"},a)),i("small",{className:"hero__date"},t.date)),i("section",{className:"hero__body"},i("p",{dangerouslySetInnerHTML:{__html:(t.description||t.excerpt)+"..."},itemProp:"description",className:"hero__description"})))))},s=a(4776),c=n.createElement,m=!0,h=function(e){e.location;var t="All Posts",a=e.allPosts,n=a[0];return 0===(a=a.slice(1,a.lenght)).length?c(r.Z,{title:t},c("p",null,"No blog posts found.")):c(r.Z,{title:t},c("div",{className:"container"},c(o,{post:n,title:n.title||n.fields.slug}),c("div",{className:"card__grid"},a.map((function(e,t){var a=e.title||e.fields.slug;return c(s.Z,{post:e,title:a,key:t})})))))}},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4634)}])}},function(e){e.O(0,[362,888,774,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);