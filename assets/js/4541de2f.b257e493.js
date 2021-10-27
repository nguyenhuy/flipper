"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339,7180],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),s=o,f=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52091:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>s});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],i={},p=void 0,u={type:"mdx",permalink:"/docs/plugins/network/protobuf-retrofit",source:"@site/src/embedded-pages/docs/plugins/network/protobuf-retrofit.mdx"},d=[{value:"Gradle Dependencies",id:"gradle-dependencies",children:[],level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",children:[],level:3}],c={toc:d};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,a.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's\n",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n  \n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,a.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,a.mdx)("p",null,"Suppose you have a Retrofit service interface ",(0,a.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types. At the time you create your implementation, call the plugin with your ",(0,a.mdx)("inlineCode",{parentName:"p"},"baseUrl")," and service class:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}s.isMDXComponent=!0},16695:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>s,toc:()=>m,default:()=>v});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=r(55064),i=r(58215),p=r(52091),u=["components"],d={},c=void 0,s={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx"},m=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[],level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",children:[],level:3}],level:2},{value:"iOS",id:"ios",children:[],level:2},{value:"Protobut + Retrofit Setup",id:"protobut--retrofit-setup",children:[],level:2}],f={toc:m};function v(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.mdx)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),(0,a.mdx)("h2",{id:"android"},"Android"),(0,a.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.116.0'\n}\n")),(0,a.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,a.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,a.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,a.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,a.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,a.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,a.mdx)("p",null,"Then call ",(0,a.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,a.mdx)("h2",{id:"ios"},"iOS"),(0,a.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,a.mdx)("p",null,"Initialise the plugin in the following way by updating AppDelegate.m:"),(0,a.mdx)(l.Z,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(i.Z,{value:"objc",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n"))),(0,a.mdx)(i.Z,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))),(0,a.mdx)("h2",{id:"protobut--retrofit-setup"},"Protobut + Retrofit Setup"),(0,a.mdx)(p.default,{mdxType:"ProtobufRetrofitSetup"}))}v.isMDXComponent=!0},58215:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},55064:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(83117),o=r(67294),a=r(72389),l=r(79443);const i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=r(83039),u=r(86010);const d="tabItem_1uMI";function c(e){var t,r,n,a=e.lazy,l=e.block,c=e.defaultValue,s=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,p.duplicates)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=v[0])?void 0:n.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,x=y.setTabGroupChoices,k=(0,o.useState)(h),N=k[0],O=k[1],P=[],T=(0,p.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==N&&b.some((function(e){return e.value===S}))&&O(S)}var F=function(e){var t=e.currentTarget,r=P.indexOf(t),n=b[r].value;n!==N&&(T(t),O(n),null!=m&&x(m,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;r=P[n]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;r=P[o]||P[P.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":l},f)},b.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.default)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:F,onClick:F},null!=r?r:t)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,a.default)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},79443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)}}]);