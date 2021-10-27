"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3911],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>s});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){return function(r){var t=p(r.components);return n.createElement(e,i({},r,{components:t}))}},p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,v=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return t?n.createElement(v,u(u({ref:r},l),{},{components:t})):n.createElement(v,u({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},93556:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>v});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),a=t(44996),u=t(36742),c=["components"],l={},s=void 0,p={type:"mdx",permalink:"/docs/plugins/crash-reporter/setup",source:"@site/src/embedded-pages/docs/plugins/crash-reporter/setup.mdx"},d=[{value:"Android",id:"android",children:[],level:2}],f={toc:d};function v(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"You do not have to instantiate it in your app in order to use its basic functionality mentioned ",(0,i.mdx)(u.default,{to:(0,a.default)("/docs/features/plugins/crash-reporter"),mdxType:"Link"},"here"),". You can also use crash reporter plugin to send the notifications for the exception which you suppress in your Android application. You could even use it to send the notifications when the ",(0,i.mdx)("a",{parentName:"p",href:"https://fblitho.com/docs/error-boundaries"},"Litho Error Boundary")," is triggered. In order to send your custom notification you will have to follow the following steps."),(0,i.mdx)("h2",{id:"android"},"Android"),(0,i.mdx)("p",null,"Instantiate and add the plugin in ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperClient"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;\n\nclient.addPlugin(CrashReporterPlugin.getInstance());\n")),(0,i.mdx)("p",null,"Use the following API to trigger your custom crash notification."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;\nCrashReporterPlugin.getInstance().sendExceptionMessage(Thread.currentThread(), error);\n")))}v.isMDXComponent=!0},36742:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var n=t(80102),o=t(67294),i=t(73727),a=t(52263),u=t(13919),c=t(10412),l=(0,o.createContext)({collectLink:function(){}}),s=t(44996),p=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var r,t,f=e.isNavLink,v=e.to,m=e.href,h=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,O=void 0===b||b,w=(0,n.Z)(e,d),x=(0,a.default)().siteConfig,j=x.trailingSlash,P=x.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,k=(0,o.useContext)(l),E=v||m,U=(0,u.Z)(E),T=null==E?void 0:E.replace("pathname://",""),M=void 0!==T?(t=T,O&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0;M&&U&&(M=(0,p.applyTrailingSlash)(M,{trailingSlash:j,baseUrl:P}));var N=(0,o.useRef)(!1),D=f?i.OL:i.rU,A=c.default.canUseIntersectionObserver,B=(0,o.useRef)();(0,o.useEffect)((function(){return!A&&U&&null!=M&&window.docusaurus.prefetch(M),function(){A&&B.current&&B.current.disconnect()}}),[B,M,A,U]);var S=null!==(r=null==M?void 0:M.startsWith("#"))&&void 0!==r&&r,_=!M||!U||S;return M&&U&&!S&&!y&&k.collectLink(M),_?o.createElement("a",Object.assign({href:M},E&&!U&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(D,Object.assign({},w,{onMouseEnter:function(){N.current||null==M||(window.docusaurus.preload(M),N.current=!0)},innerRef:function(e){var r,t;A&&e&&U&&(r=e,t=function(){null!=M&&window.docusaurus.prefetch(M)},B.current=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.current.unobserve(r),B.current.disconnect(),t())}))})),B.current.observe(r))},to:M||""},f&&{isActive:g,activeClassName:h}))}},13919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>o})},44996:(e,r,t)=>{t.r(r),t.d(r,{useBaseUrlUtils:()=>i,default:()=>a});var n=t(52263),o=t(13919);function i(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(u)return r+t;var s=t.startsWith(r)?t:r+t.replace(/^\//,"");return l?e+s:s}(i,t,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},8802:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t=r.trailingSlash,n=r.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===n?i:(o=i,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},18780:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.uniq=r.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(r,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=t(29964);Object.defineProperty(r,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Array.from(new Set(e))}}}]);