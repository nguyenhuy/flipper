"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7636],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>s});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){return function(n){var t=u(n.components);return i.createElement(e,a({},n,{components:t}))}},u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(t),c=r,f=s["".concat(o,".").concat(c)]||s[c]||m[c]||a;return t?i.createElement(f,l(l({ref:n},d),{},{components:t})):i.createElement(f,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13919:(e,n,t)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}t.d(n,{b:()=>i,Z:()=>r})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>a,default:()=>o});var i=t(52263),r=t(13919);function a(){var e=(0,i.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,p=a.absolute,d=void 0!==p&&p;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+s:s}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},19795:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>h});var i,r=t(83117),a=t(80102),o=(t(67294),t(3905)),l=t(44996),p=["components"],d={id:"android",title:"Building an Android Plugin"},s=void 0,u={unversionedId:"tutorial/android",id:"tutorial/android",isDocsHomePage:!1,title:"Building an Android Plugin",description:"For the purpose of the tutorial, we will assume you already have an existing",source:"@site/../docs/tutorial/android.mdx",sourceDirName:"tutorial",slug:"/tutorial/android",permalink:"/docs/tutorial/android",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/android.mdx",tags:[],version:"current",frontMatter:{id:"android",title:"Building an Android Plugin"},sidebar:"extending",previous:{title:"Building an iOS Plugin",permalink:"/docs/tutorial/ios"},next:{title:"Building a React Native Plugin",permalink:"/docs/tutorial/react-native"}},c=[{value:"Creating a Plugin",id:"creating-a-plugin",children:[],level:2},{value:"Registering your Plugin",id:"registering-your-plugin",children:[],level:2},{value:"What next",id:"what-next",children:[],level:2}],m=(i="FbInternalOnly",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),f={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("img",{alt:"Android Tutorial App",src:(0,l.default)("img/android-tutorial-app.png")}),(0,o.mdx)("p",null,"For the purpose of the tutorial, we will assume you already have an existing\nAndroid application in which you have a feed or list of items. As the Flipper\nteam, we obviously concern ourselves mostly with sea mammals, so this is what\nour app displays. The actual display logic is not what's interesting here,\nbut how we can make this data available in our Flipper desktop app."),(0,o.mdx)("p",null,"Part of what makes Flipper so useful is allowing users to inspect the\ninternals of their app. In this case, we'd like to see the specific\nsea mammal data the app is handling, so let's write a plugin to make that\neasy."),(0,o.mdx)("p",null,"You can find the source code of the project ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/7dae5771d96ea76b75796d3b3a2c78746e581e3f/android/tutorial"},"on GitHub"),"."),(0,o.mdx)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),(0,o.mdx)(m,{mdxType:"FbInternalOnly"},(0,o.mdx)("div",{class:"warning"},"[FB-Only] Depending the options selected during scaffolding (see intro), some of the following code might already have been generated by `scarf`.")),(0,o.mdx)("p",null,"On Android, a Flipper plugin is a class that implements the\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/android/src/main/java/com/facebook/flipper/core/FlipperPlugin.java"},(0,o.mdx)("inlineCode",{parentName:"a"},"FlipperPlugin")),"\ninterface."),(0,o.mdx)("p",null,"The interface is rather small and only comprises four methods:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"getId() -> String"),": Specify a unique string so the JavaScript side knows where to talk to. This must match the name attribute in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json")," we will look into later in this tutorial."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onConnect(FlipperConnection)"),": This method is called when the desktop app connects to the mobile client and is ready to receive or send data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onDisconnect()"),": We're sure you can figure this one out."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"runInBackground() -> Boolean"),": Unless this is true, only the currently selected plugin in the Flipper UI can communicate with the device.")),(0,o.mdx)("p",null,"Let's implement these methods for our sealife app:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.core.FlipperConnection\nimport com.facebook.flipper.core.FlipperObject\nimport com.facebook.flipper.core.FlipperPlugin\nimport com.facebook.flipper.sample.tutorial.MarineMammals\n\nclass SeaMammalFlipperPlugin : FlipperPlugin {\n    private var connection: FlipperConnection? = null\n\n    override fun getId(): String = "sea-mammals"\n\n    override fun onConnect(connection: FlipperConnection?) {\n        this.connection = connection\n\n        MarineMammals.list.mapIndexed { index, (title, picture_url) ->\n            FlipperObject.Builder()\n                    .put("id", index)\n                    .put("title", title)\n                    .put("url", picture_url).build()\n        }.forEach(this::newRow)\n    }\n\n    override fun onDisconnect() {\n        connection = null\n    }\n\n    override fun runInBackground(): Boolean = false\n\n    private fun newRow(row: FlipperObject) {\n        connection?.send("newRow", row)\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"See ",(0,o.mdx)("a",{parentName:"em",href:"https://github.com/facebook/flipper/blob/5afb148ffa9e267e5b24e0dfae198d1cf46cc396/android/tutorial/src/main/java/com/facebook/flipper/sample/tutorial/plugin/SeaMammalFlipperPlugin.kt"},"SeaMammalFlipperPlugin.kt"))),(0,o.mdx)("p",null,"The two interesting bits here are ",(0,o.mdx)("inlineCode",{parentName:"p"},"onConnect")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"newRow"),". ",(0,o.mdx)("inlineCode",{parentName:"p"},"newRow"),' sends a message\nto the desktop app and is identified with the same name "newRow".'),(0,o.mdx)("p",null,"For our sample app, we're dealing with a static data source. However, in real\nlife, you will likely dynamically receive new data as the user interacts with\nthe app. So while we just send all the data we have at once in ",(0,o.mdx)("inlineCode",{parentName:"p"},"onConnect"),",\nyou would normally set up a listener here to instead call ",(0,o.mdx)("inlineCode",{parentName:"p"},"newRow")," as new data\narrives."),(0,o.mdx)("p",null,"You may have noticed that we don't just send random ",(0,o.mdx)("inlineCode",{parentName:"p"},"Object"),"s over the wire but\nuse ",(0,o.mdx)("inlineCode",{parentName:"p"},"FlipperObject"),"s instead. What are they? A ",(0,o.mdx)("inlineCode",{parentName:"p"},"FlipperObject")," works similar\nto a JSON dictionary and has a limited set of supported types like strings,\nintegers and arrays. Before sending an object from your native app to the\ndesktop, you first need to break it down into ",(0,o.mdx)("inlineCode",{parentName:"p"},"FlipperObject"),"-serializable parts."),(0,o.mdx)("h2",{id:"registering-your-plugin"},"Registering your Plugin"),(0,o.mdx)("p",null,"Now all you need to do is let Flipper know about your new plugin. You do this\nby calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"addPlugin")," on your ",(0,o.mdx)("inlineCode",{parentName:"p"},"FlipperClient"),", which is normally created\nat application startup."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val flipperClient = AndroidFlipperClient.getInstance(this)\n// Add all sorts of other amazing plugins here ...\nflipperClient.addPlugin(SeaMammalFlipperPlugin())\nflipperClient.start()\n")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"See ",(0,o.mdx)("a",{parentName:"em",href:"https://github.com/facebook/flipper/blob/5afb148ffa9e267e5b24e0dfae198d1cf46cc396/android/tutorial/src/main/java/com/facebook/flipper/sample/tutorial/TutorialApplication.kt"},(0,o.mdx)("inlineCode",{parentName:"a"},"TutorialApplication.kt")))),(0,o.mdx)("h2",{id:"what-next"},"What next"),(0,o.mdx)("p",null,'When starting your application now, Flipper will tell the desktop application\nabout the plugin it supports, including "sea-mammals" and will look for a\ncorresponding JavaScript plugin by that name. Let\'s build that next.'))}h.isMDXComponent=!0}}]);