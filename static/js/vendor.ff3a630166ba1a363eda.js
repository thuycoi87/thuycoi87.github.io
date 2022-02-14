webpackJsonp([0],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"+tPU":function(t,e,n){n("xGkn");for(var r=n("7KvD"),i=n("hJx8"),o=n("/bQp"),s=n("dSzd")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var u=a[c],l=r[u],h=l&&l.prototype;h&&!h[s]&&i(h,s,u),o[u]=o.Array}},"//Fk":function(t,e,n){t.exports={default:n("U5ju"),__esModule:!0}},"/bQp":function(t,e){t.exports={}},"/ocq":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(t){0}return t}var u=function(t){return null==t||"object"==typeof t?t:String(t)};function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}),e):e}function h(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))}),r.join("&")}return a(e)+"="+a(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function d(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=p(o)}catch(t){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:m(e,i),matched:t?function(t){var e=[];for(;t;)e.unshift(t),t=t.parent;return e}(t):[]};return n&&(s.redirectedFrom=m(n,i)),Object.freeze(s)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=p(t[n]);return e}return t}var v=d(null,{path:"/"});function m(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;return void 0===i&&(i=""),(n||"/")+(e||h)(r)+i}function g(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&y(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&y(t.query,e.query)&&y(t.params,e.params))))}function y(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every(function(n,i){var o=t[n];if(r[i]!==n)return!1;var s=e[n];return null==o||null==s?o===s:"object"==typeof o&&"object"==typeof s?y(o,s):String(o)===String(s)})}function b(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var w={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;for(var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],v=p&&p.component;return v?(p.configProps&&_(v,s,p.route,p.configProps),a(v,s,i)):a()}var m=u.matched[h],g=m&&m.components[c];if(!m||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),b(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),_(g,s,u,y)),a(g,s,i)}};function _(t,e,n,i){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function E(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function T(t){return t.replace(/\/+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},S=F,k=D,x=function(t,e){return R(D(t,e),e)},C=R,O=M,I=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t,e){for(var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";null!=(n=I.exec(t));){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],v=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,b="+"===m||"*"===m,w="?"===m||"*"===m,_=n[2]||a,E=p||v;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!g,pattern:E?P(E):g?".*":"[^"+L(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function N(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",j(e)));return function(e,r){for(var i="",o=e||{},s=(r||{}).pretty?N:encodeURIComponent,a=0;a<t.length;a++){var c=t[a];if("string"!=typeof c){var u,l=o[c.name];if(null==l){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(A(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(u=s(l[h]),!n[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===h?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!n[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function P(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function $(t,e){return t.keys=e,t}function j(t){return t&&t.sensitive?"":"i"}function M(t,e,n){A(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"==typeof a)o+=L(a);else{var c=L(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),o+=u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var l=L(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",$(new RegExp("^"+o,j(n)),e)}function F(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return $(t,e)}(t,e):A(t)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(F(t[i],e,n).source);return $(new RegExp("(?:"+r.join("|")+")",j(n)),e)}(t,e,n):function(t,e,n){return M(D(t,n),e,n)}(t,e,n)}S.parse=k,S.compile=x,S.tokensToFunction=C,S.tokensToRegExp=O;var V=Object.create(null);function U(t,e,n){e=e||{};try{var r=V[t]||(V[t]=S.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function B(t,e,n,i){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var s=(o=r({},t)).params;return s&&"object"==typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){(o=r({},o))._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=U(c,a,e.path)}else 0;return o}var h=function(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}(o.path||""),f=e&&e.path||"/",d=h.path?E(h.path,f,n||o.append):f,p=function(t,e,n){void 0===e&&(e={});var r,i=n||l;try{r=i(t||"")}catch(t){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(u):u(s)}return r}(h.query,o.query,i&&i.options.parseQuery),v=o.hash||h.hash;return v&&"#"!==v.charAt(0)&&(v="#"+v),{_normalized:!0,path:d,query:p,hash:v}}var q,H=[String,Object],z=[String,Array],K=function(){},G={name:"RouterLink",props:{to:{type:H,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:z,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,p=null==l?"router-link-active":l,v=null==h?"router-link-exact-active":h,m=null==this.activeClass?p:this.activeClass,y=null==this.exactActiveClass?v:this.exactActiveClass,b=a.redirectedFrom?d(null,B(a.redirectedFrom),null,n):a;u[y]=g(i,b,this.exactPath),u[m]=this.exact||this.exactPath?u[y]:function(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var n in e)if(!(n in t))return!1;return!0}(t.query,e.query)}(i,b);var w=u[y]?this.ariaCurrentValue:null,_=function(t){W(t)&&(e.replace?n.replace(s,K):n.push(s,K))},E={click:W};Array.isArray(this.event)?this.event.forEach(function(t){E[t]=_}):E[this.event]=_;var T={class:u},A=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[y]});if(A){if(1===A.length)return A[0];if(A.length>1||!A.length)return 0===A.length?t():t("span",{},A)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":w};else{var S=function t(e){if(e)for(var n,r=0;r<e.length;r++){if("a"===(n=e[r]).tag)return n;if(n.children&&(n=t(n.children)))return n}}(this.$slots.default);if(S){S.isStatic=!1;var k=S.data=r({},S.data);for(var x in k.on=k.on||{},k.on){var C=k.on[x];x in E&&(k.on[x]=Array.isArray(C)?C:[C])}for(var O in E)O in k.on?k.on[O].push(E[O]):k.on[O]=_;var I=S.data.attrs=r({},S.data.attrs);I.href=c,I["aria-current"]=w}else T.on=E}return t(this.tag,T,this.$slots.default)}};function W(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function X(t){if(!X.installed||q!==t){X.installed=!0,q=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",w),t.component("RouterLink",G);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var J="undefined"!=typeof window;function Y(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){!function t(e,n,r,i,o,s){var a=i.path;var c=i.name;0;var u=i.pathToRegexpOptions||{};var l=function(t,e,n){n||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return T(e.path+"/"+t)}(a,o,u.strict);"boolean"==typeof i.caseSensitive&&(u.sensitive=i.caseSensitive);var h={path:l,regex:function(t,e){var n=S(t,[],e);return n}(l,u),components:i.components||{default:i.component},alias:i.alias?"string"==typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:c,parent:o,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&i.children.forEach(function(i){var o=s?T(s+"/"+i.path):void 0;t(e,n,r,i,h,o)});n[h.path]||(e.push(h.path),n[h.path]=h);if(void 0!==i.alias)for(var f=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<f.length;++d){var p=f[d];0;var v={path:p,children:i.children};t(e,n,r,v,o,h.path||"/")}c&&(r[c]||(r[c]=h))}(o,s,a,t,i)});for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function Q(t,e){var n=Y(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t,n,s){var a=B(t,n,!1,e),u=a.name;if(u){var l=o[u];if(!l)return c(null,a);var h=l.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof a.params&&(a.params={}),n&&"object"==typeof n.params)for(var f in n.params)!(f in a.params)&&h.indexOf(f)>-1&&(a.params[f]=n.params[f]);return a.path=U(l.path,a.params),c(l,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],v=i[p];if(Z(v.regex,a.path,a.params))return c(v,a,s)}}return c(null,a)}function a(t,n){var r=t.redirect,i="function"==typeof r?r(d(t,n,null,e)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return c(null,n);var a=i,u=a.name,l=a.path,h=n.query,f=n.hash,p=n.params;if(h=a.hasOwnProperty("query")?a.query:h,f=a.hasOwnProperty("hash")?a.hash:f,p=a.hasOwnProperty("params")?a.params:p,u){o[u];return s({_normalized:!0,name:u,query:h,hash:f,params:p},void 0,n)}if(l){var v=function(t,e){return E(t,e.parent?e.parent.path:"/",!0)}(l,t);return s({_normalized:!0,path:U(v,p),query:h,hash:f},void 0,n)}return c(null,n)}function c(t,n,r){return t&&t.redirect?a(t,r||n):t&&t.matchAs?function(t,e,n){var r=s({_normalized:!0,path:U(n,e.params)});if(r){var i=r.matched,o=i[i.length-1];return e.params=r.params,c(o,e)}return c(null,e)}(0,n,t.matchAs):d(t,n,r,e)}return{match:s,addRoute:function(t,e){var n="object"!=typeof t?o[t]:void 0;Y([e||t],r,i,o,n),n&&n.alias.length&&Y(n.alias.map(function(t){return{path:t,children:[e]}}),r,i,o,n)},getRoutes:function(){return r.map(function(t){return i[t]})},addRoutes:function(t){Y(t,r,i,o)}}}function Z(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"==typeof r[i]?c(r[i]):r[i])}return!0}var tt=J&&window.performance&&window.performance.now?window.performance:Date;function et(){return tt.now().toFixed(3)}var nt=et();function rt(){return nt}function it(t){return nt=t}var ot=Object.create(null);function st(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=rt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",ut),function(){window.removeEventListener("popstate",ut)}}function at(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick(function(){var o=function(){var t=rt();if(t)return ot[t]}(),s=i.call(t,e,n,r?o:null);s&&("function"==typeof s.then?s.then(function(t){pt(t,o)}).catch(function(t){0}):pt(s,o))})}}function ct(){var t=rt();t&&(ot[t]={x:window.pageXOffset,y:window.pageYOffset})}function ut(t){ct(),t.state&&t.state.key&&it(t.state.key)}function lt(t){return ft(t.x)||ft(t.y)}function ht(t){return{x:ft(t.x)?t.x:window.pageXOffset,y:ft(t.y)?t.y:window.pageYOffset}}function ft(t){return"number"==typeof t}var dt=/^#\d/;function pt(t,e){var n,r="object"==typeof t;if(r&&"string"==typeof t.selector){var i=dt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}(i,o={x:ft((n=o).x)?n.x:0,y:ft(n.y)?n.y:0})}else lt(t)&&(e=ht(t))}else r&&lt(t)&&(e=ht(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var vt,mt=J&&((-1===(vt=window.navigator.userAgent).indexOf("Android 2.")&&-1===vt.indexOf("Android 4.0")||-1===vt.indexOf("Mobile Safari")||-1!==vt.indexOf("Chrome")||-1!==vt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function gt(t,e){ct();var n=window.history;try{if(e){var i=r({},n.state);i.key=rt(),n.replaceState(i,"",t)}else n.pushState({key:it(et())},"",t)}catch(n){window.location[e?"replace":"assign"](t)}}function yt(t){gt(t,!0)}function bt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],function(){r(i+1)}):r(i+1)};r(0)}var wt={redirected:2,aborted:4,cancelled:8,duplicated:16};function _t(t,e){return Tt(t,e,wt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return At.forEach(function(n){n in t&&(e[n]=t[n])}),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function Et(t,e){return Tt(t,e,wt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Tt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var At=["params","query","hash"];function St(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function kt(t,e){return St(t)&&t._isRouter&&(null==e||t.type===e)}function xt(t){return function(e,n,r){var i=!1,o=0,s=null;Ct(t,function(t,e,n,a){if("function"==typeof t&&void 0===t.cid){i=!0,o++;var c,u=Dt(function(e){var i;((i=e).__esModule||It&&"Module"===i[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:q.extend(e),n.components[a]=e,--o<=0&&r()}),l=Dt(function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=St(t)?t:new Error(e),r(s))});try{c=t(u,l)}catch(t){l(t)}if(c)if("function"==typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"==typeof h.then&&h.then(u,l)}}}),i||r()}}function Ct(t,e){return Ot(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function Ot(t){return Array.prototype.concat.apply([],t)}var It="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Dt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Nt=function(t,e){this.router=t,this.base=function(t){if(!t)if(J){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Rt(t,e,n,r){var i=Ct(t,function(t,r,i,o){var s=function(t,e){"function"!=typeof t&&(t=q.extend(t));return t.options[e]}(t,e);if(s)return Array.isArray(s)?s.map(function(t){return n(t,r,i,o)}):n(s,r,i,o)});return Ot(r?i.reverse():i)}function Lt(t,e){if(e)return function(){return t.apply(e,arguments)}}Nt.prototype.listen=function(t){this.cb=t},Nt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Nt.prototype.onError=function(t){this.errorCbs.push(t)},Nt.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach(function(e){e(t)}),t}var o=this.current;this.confirmTransition(r,function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach(function(t){t&&t(r,o)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(t){t(r)}))},function(t){n&&n(t),t&&!i.ready&&(kt(t,wt.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach(function(e){e(t)})))})},Nt.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o,s,a=function(t){!kt(t)&&St(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):console.error(t)),n&&n(t)},c=t.matched.length-1,u=i.matched.length-1;if(g(t,i)&&c===u&&t.matched[c]===i.matched[u])return this.ensureURL(),t.hash&&at(this.router,i,t,!1),a(((s=Tt(o=i,t,wt.duplicated,'Avoided redundant navigation to current location: "'+o.fullPath+'".')).name="NavigationDuplicated",s));var l=function(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}(this.current.matched,t.matched),h=l.updated,f=l.deactivated,d=l.activated,p=function(e,n){if(r.pending!==t)return a(Et(i,t));try{e(t,i,function(e){!1===e?(r.ensureURL(!0),a(function(t,e){return Tt(t,e,wt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(i,t))):St(e)?(r.ensureURL(!0),a(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(a(_t(i,t)),"object"==typeof e&&e.replace?r.replace(e):r.push(e)):n(e)})}catch(t){a(t)}};bt([].concat(function(t){return Rt(t,"beforeRouteLeave",Lt,!0)}(f),this.router.beforeHooks,function(t){return Rt(t,"beforeRouteUpdate",Lt)}(h),d.map(function(t){return t.beforeEnter}),xt(d)),p,function(){bt(function(t){return Rt(t,"beforeRouteEnter",function(t,e,n,r){return function(t,e,n){return function(r,i,o){return t(r,i,function(t){"function"==typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)})}}(t,n,r)})}(d).concat(r.router.resolveHooks),p,function(){if(r.pending!==t)return a(Et(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){b(t)})})})},Nt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Nt.prototype.setupListeners=function(){},Nt.prototype.teardown=function(){this.listeners.forEach(function(t){t()}),this.listeners=[],this.current=v,this.pending=null};var Pt=function(t){function e(e,n){t.call(this,e,n),this._startLocation=$t(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=mt&&n;r&&this.listeners.push(st());var i=function(){var n=t.current,i=$t(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,function(t){r&&at(e,t,n,!0)})};window.addEventListener("popstate",i),this.listeners.push(function(){window.removeEventListener("popstate",i)})}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){gt(T(r.base+t.fullPath)),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){yt(T(r.base+t.fullPath)),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if($t(this.base)!==this.current.fullPath){var e=T(this.base+this.current.fullPath);t?gt(e):yt(e)}},e.prototype.getCurrentLocation=function(){return $t(this.base)},e}(Nt);function $t(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(T(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var jt=function(t){function e(e,n,r){t.call(this,e,n),r&&function(t){var e=$t(t);if(!/^\/#/.test(e))return window.location.replace(T(t+"/#"+e)),!0}(this.base)||Mt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,n=mt&&e;n&&this.listeners.push(st());var r=function(){var e=t.current;Mt()&&t.transitionTo(Ft(),function(r){n&&at(t.router,r,e,!0),mt||Bt(r.fullPath)})},i=mt?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push(function(){window.removeEventListener(i,r)})}},e.prototype.push=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){Ut(t.fullPath),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){Bt(t.fullPath),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ft()!==e&&(t?Ut(e):Bt(e))},e.prototype.getCurrentLocation=function(){return Ft()},e}(Nt);function Mt(){var t=Ft();return"/"===t.charAt(0)||(Bt("/"+t),!1)}function Ft(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function Vt(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function Ut(t){mt?gt(Vt(t)):window.location.hash=t}function Bt(t){mt?yt(Vt(t)):window.location.replace(Vt(t))}var qt=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach(function(e){e&&e(r,t)})},function(t){kt(t,wt.duplicated)&&(e.index=n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Nt),Ht=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Q(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!mt&&!1!==t.fallback,this.fallback&&(e="hash"),J||(e="abstract"),this.mode=e,e){case"history":this.history=new Pt(this,t.base);break;case"hash":this.history=new jt(this,t.base,this.fallback);break;case"abstract":this.history=new qt(this,t.base);break;default:0}},zt={currentRoute:{configurable:!0}};function Kt(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}Ht.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},zt.currentRoute.get=function(){return this.history&&this.history.current},Ht.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()}),!this.app){this.app=t;var n=this.history;if(n instanceof Pt||n instanceof jt){var r=function(t){n.setupListeners(),function(t){var r=n.current,i=e.options.scrollBehavior;mt&&i&&"fullPath"in t&&at(e,t,r,!1)}(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},Ht.prototype.beforeEach=function(t){return Kt(this.beforeHooks,t)},Ht.prototype.beforeResolve=function(t){return Kt(this.resolveHooks,t)},Ht.prototype.afterEach=function(t){return Kt(this.afterHooks,t)},Ht.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ht.prototype.onError=function(t){this.history.onError(t)},Ht.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!=typeof Promise)return new Promise(function(e,n){r.history.push(t,e,n)});this.history.push(t,e,n)},Ht.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!=typeof Promise)return new Promise(function(e,n){r.history.replace(t,e,n)});this.history.replace(t,e,n)},Ht.prototype.go=function(t){this.history.go(t)},Ht.prototype.back=function(){this.go(-1)},Ht.prototype.forward=function(){this.go(1)},Ht.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Ht.prototype.resolve=function(t,e,n){var r=B(t,e=e||this.history.current,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(t,e,n){var r="hash"===n?"#"+e:e;return t?T(t+"/"+r):r}(this.history.base,o,this.mode),normalizedTo:r,resolved:i}},Ht.prototype.getRoutes=function(){return this.matcher.getRoutes()},Ht.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Ht.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ht.prototype,zt),Ht.install=X,Ht.version="3.5.3",Ht.isNavigationFailure=kt,Ht.NavigationFailureType=wt,Ht.START_LOCATION=v,J&&window.Vue&&window.Vue.use(Ht),e.a=Ht},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"28tl":function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a}),n.d(e,"b",function(){return _}),n.d(e,"c",function(){return w}),n.d(e,"d",function(){return T}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return k}),n.d(e,"g",function(){return A}),n.d(e,"h",function(){return s}),n.d(e,"i",function(){return O}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return f}),n.d(e,"m",function(){return p}),n.d(e,"n",function(){return v}),n.d(e,"o",function(){return y}),n.d(e,"p",function(){return l}),n.d(e,"q",function(){return d}),n.d(e,"r",function(){return g}),n.d(e,"s",function(){return m});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0,s=++e<t.length?n[t.charAt(e)]:64,a=++e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==o||null==s||null==a)throw Error();const c=i<<2|o>>4;if(r.push(c),64!==s){const t=o<<4&240|s>>2;if(r.push(t),64!==a){const t=s<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=r(t);return i.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=s(t[n],e[n]));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){return"object"==typeof self&&self.self===self}function f(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function d(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return u().indexOf("Electron/")>=0}function v(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function g(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y(){return"object"==typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?function(t,e){return t.replace(E,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new w(r,s,n)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(S(n)&&S(o)){if(!A(n,o))return!1}else if(n!==o)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function S(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){const n=new x(t,e);return n.subscribe.bind(n)}class x{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=C),void 0===r.error&&(r.error=C),void 0===r.complete&&(r.complete=C);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){return t&&t._delegate?t._delegate:t}}).call(e,n("DuR2"))},"2KxR":function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"3fs2":function(t,e,n){var r=n("RY/4"),i=n("dSzd")("iterator"),o=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"4mcu":function(t,e){t.exports=function(){}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"7+uW":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function a(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var m=v("slot,component",!0),g=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var E=/-(\w)/g,T=_(function(t){return t.replace(E,function(t,e){return e?e.toUpperCase():""})}),A=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,k=_(function(t){return t.replace(S,"-$1").toLowerCase()});var x=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function C(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function I(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function D(t,e,n){}var N=function(t,e,n){return!1},R=function(t){return t};function L(t,e){if(t===e)return!0;var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),c=Object.keys(e);return s.length===c.length&&s.every(function(n){return L(t[n],e[n])})}catch(t){return!1}}function P(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var j="data-server-rendered",M=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:D,parsePlatformTagName:R,mustUseProp:N,async:!0,_lifecycleHooks:F},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+U.source+".$_\\d]");var z,K="__proto__"in{},G="undefined"!=typeof window,W="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,X=W&&WXEnvironment.platform.toLowerCase(),J=G&&window.navigator.userAgent.toLowerCase(),Y=J&&/msie|trident/.test(J),Q=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,tt=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===X),et=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),nt={}.watch,rt=!1;if(G)try{var it={};Object.defineProperty(it,"passive",{get:function(){rt=!0}}),window.addEventListener("test-passive",null,it)}catch(t){}var ot=function(){return void 0===z&&(z=!G&&!W&&void 0!==t&&(t.process&&"server"===t.process.env.VUE_ENV)),z},st=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"==typeof t&&/native code/.test(t.toString())}var ct,ut="undefined"!=typeof Symbol&&at(Symbol)&&"undefined"!=typeof Reflect&&at(Reflect.ownKeys);ct="undefined"!=typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=D,ht=0,ft=function(){this.id=ht++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){y(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var dt=[];function pt(t){dt.push(t),ft.target=t}function vt(){dt.pop(),ft.target=dt[dt.length-1]}var mt=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(mt.prototype,gt);var yt=function(t){void 0===t&&(t="");var e=new mt;return e.text=t,e.isComment=!0,e};function bt(t){return new mt(void 0,void 0,void 0,String(t))}function wt(t){var e=new mt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,Et=Object.create(_t);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=_t[t];q(Et,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&s.observeArray(i),s.dep.notify(),o})});var Tt=Object.getOwnPropertyNames(Et),At=!0;function St(t){At=t}var kt=function(t){var e;this.value=t,this.dep=new ft,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(K?(e=Et,t.__proto__=e):function(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];q(t,o,e[o])}}(t,Et,Tt),this.observeArray(t)):this.walk(t)};function xt(t,e){var n;if(a(t)&&!(t instanceof mt))return w(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:At&&!ot()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,r,i){var o=new ft,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return ft.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,i=e.length;r<i;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!=e&&r!=r||a&&!c||(c?c.call(t,e):n=e,u=!i&&xt(e),o.notify())}})}}function Ot(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Ct(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function It(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ct(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Dt=V.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,r,i,o=ut?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)"__ob__"!==(n=o[s])&&(r=t[n],i=e[n],w(t,n)?r!==i&&u(r)&&u(i)&&Nt(r,i):Ot(t,n,i));return t}function Rt(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return r?Nt(r,i):i}:e?t?function(){return Nt("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function Pt(t,e,n,r){var i=Object.create(t||null);return e?O(i,e):i}Dt.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!=typeof e?t:Rt(t,e)},F.forEach(function(t){Dt[t]=Lt}),M.forEach(function(t){Dt[t+"s"]=Pt}),Dt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in O(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return O(i,t),e&&O(i,e),i},Dt.provide=Rt;var $t=function(t,e){return void 0===e?t:e};function jt(t,e,n){if("function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[T(i)]={type:null});else if(u(n))for(var s in n)i=n[s],o[T(s)]=u(i)?i:{type:i};t.props=o}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var o in n){var s=n[o];r[o]=u(s)?O({from:o},s):{from:s}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e),!e._base&&(e.extends&&(t=jt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=jt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)w(t,o)||a(o);function a(r){var i=Dt[r]||$t;s[r]=i(t[r],e[r],n,r)}return s}function Mt(t,e,n,r){if("string"==typeof n){var i=t[e];if(w(i,n))return i[n];var o=T(n);if(w(i,o))return i[o];var s=A(o);return w(i,s)?i[s]:i[n]||i[o]||i[s]}}function Ft(t,e,n,r){var i=e[t],o=!w(n,t),s=n[t],a=qt(Boolean,i.type);if(a>-1)if(o&&!w(i,"default"))s=!1;else if(""===s||s===k(t)){var c=qt(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=function(t,e,n){if(!w(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==Ut(e.type)?r.call(t):r}(r,i,t);var u=At;St(!0),xt(s),St(u)}return s}var Vt=/^\s*function (\w+)/;function Ut(t){var e=t&&t.toString().match(Vt);return e?e[1]:""}function Bt(t,e){return Ut(t)===Ut(e)}function qt(t,e){if(!Array.isArray(e))return Bt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Bt(e[n],t))return n;return-1}function Ht(t,e,n){pt();try{if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){Kt(t,r,"errorCaptured hook")}}Kt(t,e,n)}finally{vt()}}function zt(t,e,n,r,i){var o;try{(o=n?t.apply(e,n):t.call(e))&&!o._isVue&&f(o)&&!o._handled&&(o.catch(function(t){return Ht(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(t){Ht(t,r,i)}return o}function Kt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(e){e!==t&&Gt(e,null,"config.errorHandler")}Gt(t,e,n)}function Gt(t,e,n){if(!G&&!W||"undefined"==typeof console)throw t;console.error(t)}var Wt,Xt=!1,Jt=[],Yt=!1;function Qt(){Yt=!1;var t=Jt.slice(0);Jt.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&at(Promise)){var Zt=Promise.resolve();Wt=function(){Zt.then(Qt),tt&&setTimeout(D)},Xt=!0}else if(Y||"undefined"==typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Wt="undefined"!=typeof setImmediate&&at(setImmediate)?function(){setImmediate(Qt)}:function(){setTimeout(Qt,0)};else{var te=1,ee=new MutationObserver(Qt),ne=document.createTextNode(String(te));ee.observe(ne,{characterData:!0}),Wt=function(){te=(te+1)%2,ne.data=String(te)},Xt=!0}function re(t,e){var n;if(Jt.push(function(){if(t)try{t.call(e)}catch(t){Ht(t,e,"nextTick")}else n&&n(e)}),Yt||(Yt=!0,Wt()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}var ie=new ct;function oe(t){!function t(e,n){var r,i;var o=Array.isArray(e);if(!o&&!a(e)||Object.isFrozen(e)||e instanceof mt)return;if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(o)for(r=e.length;r--;)t(e[r],n);else for(i=Object.keys(e),r=i.length;r--;)t(e[i[r]],n)}(t,ie),ie.clear()}var se=_(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function ae(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return zt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)zt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function ce(t,e,n,i,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=se(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=ae(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&i((h=se(c)).name,e[c],h.capture)}function ue(t,e,n){var s;t instanceof mt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(s.fns,c)}r(a)?s=ae([c]):i(a.fns)&&o(a.merged)?(s=a).fns.push(c):s=ae([a,c]),s.merged=!0,t[e]=s}function le(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function he(t){return s(t)?[bt(t)]:Array.isArray(t)?function t(e,n){var a=[];var c,u,l,h;for(c=0;c<e.length;c++)r(u=e[c])||"boolean"==typeof u||(l=a.length-1,h=a[l],Array.isArray(u)?u.length>0&&(fe((u=t(u,(n||"")+"_"+c))[0])&&fe(h)&&(a[l]=bt(h.text+u[0].text),u.shift()),a.push.apply(a,u)):s(u)?fe(h)?a[l]=bt(h.text+u):""!==u&&a.push(bt(u)):fe(u)&&fe(h)?a[l]=bt(h.text+u.text):(o(e._isVList)&&i(u.tag)&&r(u.key)&&i(n)&&(u.key="__vlist"+n+"_"+c+"__"),a.push(u)));return a}(t):void 0}function fe(t){return i(t)&&i(t.text)&&!1===t.isComment}function de(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var s=t[o].from,a=e;a;){if(a._provided&&w(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"==typeof c?c.call(e):c}else 0}}return n}}function pe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ve)&&delete n[u];return n}function ve(t){return t.isComment&&!t.asyncFactory||" "===t.text}function me(t){return t.isComment&&t.asyncFactory}function ge(t,e,r){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=ye(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=be(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),q(i,"$stable",s),q(i,"$key",a),q(i,"$hasNormal",o),i}function ye(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({}),e=(t=t&&"object"==typeof t&&!Array.isArray(t)?[t]:he(t))&&t[0];return t&&(!e||1===t.length&&e.isComment&&!me(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function be(t,e){return function(){return t[e]}}function we(t,e){var n,r,o,s,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(a(t))if(ut&&t[Symbol.iterator]){n=[];for(var u=t[Symbol.iterator](),l=u.next();!l.done;)n.push(e(l.value,n.length)),l=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)c=s[r],n[r]=e(t[c],c,r);return i(n)||(n=[]),n._isVList=!0,n}function _e(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=O(O({},r),n)),i=o(n)||("function"==typeof e?e():e)):i=this.$slots[t]||("function"==typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ee(t){return Mt(this.$options,"filters",t)||R}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ae(t,e,n,r,i){var o=V.keyCodes[e]||n;return i&&r&&!V.keyCodes[e]?Te(i,r):o?Te(o,t):r?k(r)!==e:void 0===t}function Se(t,e,n,r,i){if(n)if(a(n)){var o;Array.isArray(n)&&(n=I(n));var s=function(s){if("class"===s||"style"===s||g(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||V.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(s),u=k(s);c in o||u in o||(o[s]=n[s],i&&((t.on||(t.on={}))["update:"+s]=function(t){n[s]=t}))};for(var c in n)s(c)}else;return t}function ke(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(Ce(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r)}function xe(t,e,n){return Ce(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ce(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Oe(t[r],e+"_"+r,n);else Oe(t,e,n)}function Oe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ie(t,e){if(e)if(u(e)){var n=t.on=t.on?O({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function De(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?De(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Ne(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Re(t,e){return"string"==typeof t?e+t:t}function Le(t){t._o=xe,t._n=p,t._s=d,t._l=we,t._t=_e,t._q=L,t._i=P,t._m=ke,t._f=Ee,t._k=Ae,t._b=Se,t._v=bt,t._e=yt,t._u=De,t._g=Ie,t._d=Ne,t._p=Re}function Pe(t,e,r,i,s){var a,c=this,u=s.options;w(i,"_uid")?(a=Object.create(i))._original=i:(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=de(u.inject,i),this.slots=function(){return c.$slots||ge(t.scopedSlots,c.$slots=pe(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ge(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ge(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=He(a,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return He(a,t,e,n,r,h)}}function $e(t,e,n,r,i){var o=wt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function je(t,e){for(var n in e)t[T(n)]=e[n]}Le(Pe.prototype);var Me={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Me.prepatch(n,n)}else{(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,Ze)).$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var r=e.componentOptions;!function(t,e,r,i,o){0;var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var l=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;l[d]=Ft(d,p,e,t)}St(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,Qe(t,r,v),u&&(t.$slots=pe(o,i.context),t.$forceUpdate());0}(e.componentInstance=t.componentInstance,r.propsData,r.listeners,e,r.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,rn(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,sn.push(e)):nn(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(n&&(e._directInactive=!0,en(e)))return;if(!e._inactive){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);rn(e,"deactivated")}}(e,!0):e.$destroy())}},Fe=Object.keys(Me);function Ve(t,e,s,c,u){if(!r(t)){var l=s.$options._base;if(a(t)&&(t=l.extend(t)),"function"==typeof t){var h;if(r(t.cid)&&void 0===(t=function(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=Ke;n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n);if(o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],c=!0,u=null,l=null;n.$on("hook:destroyed",function(){return y(s,n)});var h=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=$(function(n){t.resolved=Ge(n,e),c?s.length=0:h(!0)}),p=$(function(e){i(t.errorComp)&&(t.error=!0,h(!0))}),v=t(d,p);return a(v)&&(f(v)?r(t.resolved)&&v.then(d,p):f(v.component)&&(v.component.then(d,p),i(v.error)&&(t.errorComp=Ge(v.error,e)),i(v.loading)&&(t.loadingComp=Ge(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),i(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&p(null)},v.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}(h=t,l)))return function(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}(h,e,s,c,u);e=e||{},kn(t),i(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),s=o[r],a=e.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}(t.options,e);var d=function(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in o){var l=k(u);le(s,c,u,l,!0)||le(s,a,u,l,!1)}return s}}(e,t);if(o(t.options.functional))return function(t,e,r,o,s){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Ft(l,u,e||n);else i(r.attrs)&&je(c,r.attrs),i(r.props)&&je(c,r.props);var h=new Pe(r,c,s,o,t),f=a.render.call(null,h._c,h);if(f instanceof mt)return $e(f,r,h.parent,a);if(Array.isArray(f)){for(var d=he(f)||[],p=new Array(d.length),v=0;v<d.length;v++)p[v]=$e(d[v],r,h.parent,a);return p}}(t,d,e,s,c);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var v=e.slot;e={},v&&(e.slot=v)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<Fe.length;n++){var r=Fe[n],i=e[r],o=Me[r];i===o||i&&i._merged||(e[r]=i?Ue(o,i):o)}}(e);var m=t.options.name||u;return new mt("vue-component-"+t.cid+(m?"-"+m:""),e,void 0,void 0,void 0,s,{Ctor:t,propsData:d,listeners:p,tag:u,children:c},h)}}}function Ue(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}var Be=1,qe=2;function He(t,e,n,c,u,l){return(Array.isArray(n)||s(n))&&(u=c,c=n,n=void 0),o(l)&&(u=qe),function(t,e,n,s,c){if(i(n)&&i(n.__ob__))return yt();i(n)&&i(n.is)&&(e=n.is);if(!e)return yt();0;Array.isArray(s)&&"function"==typeof s[0]&&((n=n||{}).scopedSlots={default:s[0]},s.length=0);c===qe?s=he(s):c===Be&&(s=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(s));var u,l;if("string"==typeof e){var h;l=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),u=V.isReservedTag(e)?new mt(V.parsePlatformTagName(e),n,s,void 0,void 0,t):n&&n.pre||!i(h=Mt(t.$options,"components",e))?new mt(e,n,s,void 0,void 0,t):Ve(h,n,t,s,e)}else u=Ve(e,n,t,s);return Array.isArray(u)?u:i(u)?(i(l)&&function t(e,n,s){e.ns=n;"foreignObject"===e.tag&&(n=void 0,s=!0);if(i(e.children))for(var a=0,c=e.children.length;a<c;a++){var u=e.children[a];i(u.tag)&&(r(u.ns)||o(s)&&"svg"!==u.tag)&&t(u,n,s)}}(u,l),i(n)&&function(t){a(t.style)&&oe(t.style);a(t.class)&&oe(t.class)}(n),u):yt()}(t,e,n,c,u)}var ze,Ke=null;function Ge(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),a(t)?e.extend(t):t}function We(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||me(n)))return n}}function Xe(t,e){ze.$on(t,e)}function Je(t,e){ze.$off(t,e)}function Ye(t,e){var n=ze;return function r(){null!==e.apply(null,arguments)&&n.$off(t,r)}}function Qe(t,e,n){ze=t,ce(e,n||{},Xe,Je,Ye,t),ze=void 0}var Ze=null;function tn(t){var e=Ze;return Ze=t,function(){Ze=e}}function en(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function nn(t,e){if(e){if(t._directInactive=!1,en(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)nn(t.$children[n]);rn(t,"activated")}}function rn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)zt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),vt()}var on=[],sn=[],an={},cn=!1,un=!1,ln=0;var hn=0,fn=Date.now;if(G&&!Y){var dn=window.performance;dn&&"function"==typeof dn.now&&fn()>document.createEvent("Event").timeStamp&&(fn=function(){return dn.now()})}function pn(){var t,e;for(hn=fn(),un=!0,on.sort(function(t,e){return t.id-e.id}),ln=0;ln<on.length;ln++)(t=on[ln]).before&&t.before(),e=t.id,an[e]=null,t.run();var n=sn.slice(),r=on.slice();ln=on.length=sn.length=0,an={},cn=un=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,nn(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&rn(r,"updated")}}(r),st&&V.devtools&&st.emit("flush")}var vn=0,mn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ct,this.newDepIds=new ct,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};mn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;Ht(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&oe(t),vt(),this.cleanupDeps()}return t},mn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},mn.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},mn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==an[e]){if(an[e]=!0,un){for(var n=on.length-1;n>ln&&on[n].id>t.id;)n--;on.splice(n+1,0,t)}else on.push(t);cn||(cn=!0,re(pn))}}(this)},mn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';zt(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},mn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},mn.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},mn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var gn={enumerable:!0,configurable:!0,get:D,set:D};function yn(t,e,n){gn.get=function(){return this[e][n]},gn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,gn)}function bn(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||St(!1);var s=function(o){i.push(o);var s=Ft(o,e,n,t);Ct(r,o,s),o in t||yn(t,"_props",o)};for(var a in e)s(a);St(!0)}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]="function"!=typeof e[n]?D:x(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;u(e=t._data="function"==typeof e?function(t,e){pt();try{return t.call(e,e)}catch(t){return Ht(t,e,"data()"),{}}finally{vt()}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&w(r,o)||B(o)||yn(t,"_data",o)}xt(e,!0)}(t):xt(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var i in e){var o=e[i],s="function"==typeof o?o:o.get;0,r||(n[i]=new mn(t,s||D,D,wn)),i in t||_n(t,i,o)}}(t,e.computed),e.watch&&e.watch!==nt&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)An(t,n,r[i]);else An(t,n,r)}}(t,e.watch)}var wn={lazy:!0};function _n(t,e,n){var r=!ot();"function"==typeof n?(gn.get=r?En(e):Tn(n),gn.set=D):(gn.get=n.get?r&&!1!==n.cache?En(e):Tn(n.get):D,gn.set=n.set||D),Object.defineProperty(t,e,gn)}function En(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function Tn(t){return function(){return t.call(this,this)}}function An(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}var Sn=0;function kn(t){var e=t.options;if(t.super){var n=kn(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}(t);r&&O(t.extendOptions,r),(e=t.options=jt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function xn(t){this._init(t)}function Cn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return(s.prototype=Object.create(n.prototype)).constructor=s,s.cid=e++,s.options=jt(n.options,t),s.super=n,s.options.props&&function(t){var e=t.options.props;for(var n in e)yn(t.prototype,"_props",n)}(s),s.options.computed&&function(t){var e=t.options.computed;for(var n in e)_n(t.prototype,n,e[n])}(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,M.forEach(function(t){s[t]=n[t]}),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=O({},s.options),i[r]=s,s}}function On(t){return t&&(t.Ctor.options.name||t.tag)}function In(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Dn(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Nn(n,o,r,i)}}}function Nn(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}!function(t){t.prototype._init=function(t){var e=this;e._uid=Sn++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=jt(kn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Qe(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=pe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return He(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return He(t,e,n,r,i,!0)};var o=r&&r.data;Ct(t,"$attrs",o&&o.attrs||n,null,!0),Ct(t,"$listeners",e._parentListeners||n,null,!0)}(e),rn(e,"beforeCreate"),function(t){var e=de(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Ct(t,n,e[n])}),St(!0))}(e),bn(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),rn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(xn),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ot,t.prototype.$delete=It,t.prototype.$watch=function(t,e,n){if(u(e))return An(this,t,e,n);(n=n||{}).user=!0;var r=new mn(this,t,e,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';pt(),zt(e,this,[r.value],this,i),vt()}return function(){r.teardown()}}}(xn),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;for(var a=s.length;a--;)if((o=s[a])===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?C(n):n;for(var r=C(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)zt(n[o],e,r,e,i)}return e}}(xn),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=tn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){rn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),rn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(xn),function(t){Le(t.prototype),t.prototype.$nextTick=function(t){return re(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=ge(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{Ke=e,t=r.call(e._renderProxy,e.$createElement)}catch(n){Ht(n,e,"render"),t=e._vnode}finally{Ke=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof mt||(t=yt()),t.parent=i,t}}(xn);var Rn=[String,RegExp,Array],Ln={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Rn,exclude:Rn,max:[String,Number]},methods:{cacheVNode:function(){var t=this.cache,e=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,s=n.componentOptions;t[r]={name:On(s),tag:i,componentInstance:o},e.push(r),this.max&&e.length>parseInt(this.max)&&Nn(t,e[0],e,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Nn(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",function(e){Dn(t,function(t){return In(e,t)})}),this.$watch("exclude",function(e){Dn(t,function(t){return!In(e,t)})})},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=We(t),n=e&&e.componentOptions;if(n){var r=On(n),i=this.include,o=this.exclude;if(i&&(!r||!In(i,r))||o&&r&&In(o,r))return e;var s=this.cache,a=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;s[c]?(e.componentInstance=s[c].componentInstance,y(a,c),a.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:lt,extend:O,mergeOptions:jt,defineReactive:Ct},t.set=Ot,t.delete=It,t.nextTick=re,t.observable=function(t){return xt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,Ln),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=C(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=jt(this.options,t),this}}(t),Cn(t),function(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(xn),Object.defineProperty(xn.prototype,"$isServer",{get:ot}),Object.defineProperty(xn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(xn,"FunctionalRenderContext",{value:Pe}),xn.version="2.6.14";var Pn=v("style,class"),$n=v("input,textarea,option,select,progress"),jn=function(t,e,n){return"value"===n&&$n(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Mn=v("contenteditable,draggable,spellcheck"),Fn=v("events,caret,typing,plaintext-only"),Vn=function(t,e){return zn(e)||"false"===e?"false":"contenteditable"===t&&Fn(e)?e:"true"},Un=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Bn="http://www.w3.org/1999/xlink",qn=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Hn=function(t){return qn(t)?t.slice(6,t.length):""},zn=function(t){return null==t||!1===t};function Kn(t){for(var e=t.data,n=t,r=t;i(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=Gn(r.data,e));for(;i(n=n.parent);)n&&n.data&&(e=Gn(e,n.data));return function(t,e){if(i(t)||i(e))return Wn(t,Xn(e));return""}(e.staticClass,e.class)}function Gn(t,e){return{staticClass:Wn(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Wn(t,e){return t?e?t+" "+e:t:e||""}function Xn(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Xn(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):a(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var Jn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Yn=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Qn=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zn=function(t){return Yn(t)||Qn(t)};function tr(t){return Qn(t)?"svg":"math"===t?"math":void 0}var er=Object.create(null);var nr=v("text,number,password,search,email,tel,url");function rr(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var ir=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Jn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),or={create:function(t,e){sr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(sr(t,!0),sr(e))},destroy:function(t){sr(t,!0)}};function sr(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?y(s[n],o):s[n]===o&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var ar=new mt("",{},[]),cr=["create","activate","update","remove","destroy"];function ur(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||nr(r)&&nr(o)}(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function lr(t,e,n){var r,o,s={};for(r=e;r<=n;++r)i(o=t[r].key)&&(s[o]=r);return s}var hr={create:fr,update:fr,destroy:function(t){fr(t,ar)}};function fr(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===ar,s=e===ar,a=pr(t.data.directives,t.context),c=pr(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,mr(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(mr(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)mr(u[n],"inserted",e,t)};o?ue(e,"insert",h):h()}l.length&&ue(e,"postpatch",function(){for(var n=0;n<l.length;n++)mr(l[n],"componentUpdated",e,t)});if(!o)for(n in a)c[n]||mr(a[n],"unbind",t,t,s)}(t,e)}var dr=Object.create(null);function pr(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)(r=t[n]).modifiers||(r.modifiers=dr),i[vr(r)]=r,r.def=Mt(e.$options,"directives",r.name);return i}function vr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function mr(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){Ht(r,n.context,"directive "+t.name+" "+e+" hook")}}var gr=[or,hr];function yr(t,e){var n=e.componentOptions;if(!(i(n)&&!1===n.Ctor.options.inheritAttrs||r(t.data.attrs)&&r(e.data.attrs))){var o,s,a=e.elm,c=t.data.attrs||{},u=e.data.attrs||{};for(o in i(u.__ob__)&&(u=e.data.attrs=O({},u)),u)s=u[o],c[o]!==s&&br(a,o,s,e.data.pre);for(o in(Y||Z)&&u.value!==c.value&&br(a,"value",u.value),c)r(u[o])&&(qn(o)?a.removeAttributeNS(Bn,Hn(o)):Mn(o)||a.removeAttribute(o))}}function br(t,e,n,r){r||t.tagName.indexOf("-")>-1?wr(t,e,n):Un(e)?zn(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Mn(e)?t.setAttribute(e,Vn(e,n)):qn(e)?zn(n)?t.removeAttributeNS(Bn,Hn(e)):t.setAttributeNS(Bn,e,n):wr(t,e,n)}function wr(t,e,n){if(zn(n))t.removeAttribute(e);else{if(Y&&!Q&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var _r={create:yr,update:yr};function Er(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Kn(e),c=n._transitionClasses;i(c)&&(a=Wn(a,Xn(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Tr,Ar,Sr,kr,xr,Cr,Or={create:Er,update:Er},Ir=/[\w).+\-_$\]]/;function Dr(t){var e,n,r,i,o,s=!1,a=!1,c=!1,u=!1,l=0,h=0,f=0,d=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),s)39===e&&92!==n&&(s=!1);else if(a)34===e&&92!==n&&(a=!1);else if(c)96===e&&92!==n&&(c=!1);else if(u)47===e&&92!==n&&(u=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||h||f){switch(e){case 34:a=!0;break;case 39:s=!0;break;case 96:c=!0;break;case 40:f++;break;case 41:f--;break;case 91:h++;break;case 93:h--;break;case 123:l++;break;case 125:l--}if(47===e){for(var p=r-1,v=void 0;p>=0&&" "===(v=t.charAt(p));p--);v&&Ir.test(v)||(u=!0)}}else void 0===i?(d=r+1,i=t.slice(0,r).trim()):m();function m(){(o||(o=[])).push(t.slice(d,r).trim()),d=r+1}if(void 0===i?i=t.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Nr(i,o[r]);return i}function Nr(t,e){var n=e.indexOf("(");if(n<0)return'_f("'+e+'")('+t+")";var r=e.slice(0,n),i=e.slice(n+1);return'_f("'+r+'")('+t+(")"!==i?","+i:i)}function Rr(t,e){console.error("[Vue compiler]: "+t)}function Lr(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function Pr(t,e,n,r,i){(t.props||(t.props=[])).push(zr({name:e,value:n,dynamic:i},r)),t.plain=!1}function $r(t,e,n,r,i){(i?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[])).push(zr({name:e,value:n,dynamic:i},r)),t.plain=!1}function jr(t,e,n,r){t.attrsMap[e]=n,t.attrsList.push(zr({name:e,value:n},r))}function Mr(t,e,n,r,i,o,s,a){(t.directives||(t.directives=[])).push(zr({name:e,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:s},a)),t.plain=!1}function Fr(t,e,n){return n?"_p("+e+',"'+t+'")':t+e}function Vr(t,e,r,i,o,s,a,c){var u;(i=i||n).right?c?e="("+e+")==='click'?'contextmenu':("+e+")":"click"===e&&(e="contextmenu",delete i.right):i.middle&&(c?e="("+e+")==='click'?'mouseup':("+e+")":"click"===e&&(e="mouseup")),i.capture&&(delete i.capture,e=Fr("!",e,c)),i.once&&(delete i.once,e=Fr("~",e,c)),i.passive&&(delete i.passive,e=Fr("&",e,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=zr({value:r.trim(),dynamic:c},a);i!==n&&(l.modifiers=i);var h=u[e];Array.isArray(h)?o?h.unshift(l):h.push(l):u[e]=h?o?[l,h]:[h,l]:l,t.plain=!1}function Ur(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}function Br(t,e,n){var r=qr(t,":"+e)||qr(t,"v-bind:"+e);if(null!=r)return Dr(r);if(!1!==n){var i=qr(t,e);if(null!=i)return JSON.stringify(i)}}function qr(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,s=i.length;o<s;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function Hr(t,e){for(var n=t.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(e.test(o.name))return n.splice(r,1),o}}function zr(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function Kr(t,e,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var s=Gr(e,o);t.model={value:"("+e+")",expression:JSON.stringify(e),callback:"function ($$v) {"+s+"}"}}function Gr(t,e){var n=function(t){if(t=t.trim(),Tr=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<Tr-1)return(kr=t.lastIndexOf("."))>-1?{exp:t.slice(0,kr),key:'"'+t.slice(kr+1)+'"'}:{exp:t,key:null};Ar=t,kr=xr=Cr=0;for(;!Xr();)Jr(Sr=Wr())?Qr(Sr):91===Sr&&Yr(Sr);return{exp:t.slice(0,xr),key:t.slice(xr+1,Cr)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function Wr(){return Ar.charCodeAt(++kr)}function Xr(){return kr>=Tr}function Jr(t){return 34===t||39===t}function Yr(t){var e=1;for(xr=kr;!Xr();)if(Jr(t=Wr()))Qr(t);else if(91===t&&e++,93===t&&e--,0===e){Cr=kr;break}}function Qr(t){for(var e=t;!Xr()&&(t=Wr())!==e;);}var Zr,ti="__r",ei="__c";function ni(t,e,n){var r=Zr;return function i(){null!==e.apply(null,arguments)&&oi(t,i,n,r)}}var ri=Xt&&!(et&&Number(et[1])<=53);function ii(t,e,n,r){if(ri){var i=hn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Zr.addEventListener(t,e,rt?{capture:n,passive:r}:n)}function oi(t,e,n,r){(r||Zr).removeEventListener(t,e._wrapper||e,n)}function si(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},o=t.data.on||{};Zr=e.elm,function(t){if(i(t[ti])){var e=Y?"change":"input";t[e]=[].concat(t[ti],t[e]||[]),delete t[ti]}i(t[ei])&&(t.change=[].concat(t[ei],t.change||[]),delete t[ei])}(n),ce(n,o,ii,oi,ni,e.context),Zr=void 0}}var ai,ci={create:si,update:si};function ui(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=O({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);li(s,u)&&(s.value=u)}else if("innerHTML"===n&&Qn(s.tagName)&&r(s.innerHTML)){(ai=ai||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=ai.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;l.firstChild;)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(t){}}}}function li(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return p(n)!==p(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var hi={create:ui,update:ui},fi=_(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e});function di(t){var e=pi(t.style);return t.staticStyle?O(t.staticStyle,e):e}function pi(t){return Array.isArray(t)?I(t):"string"==typeof t?fi(t):t}var vi,mi=/^--/,gi=/\s*!important$/,yi=function(t,e,n){if(mi.test(e))t.style.setProperty(e,n);else if(gi.test(n))t.style.setProperty(k(e),n.replace(gi,""),"important");else{var r=wi(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},bi=["Webkit","Moz","ms"],wi=_(function(t){if(vi=vi||document.createElement("div").style,"filter"!==(t=T(t))&&t in vi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bi.length;n++){var r=bi[n]+e;if(r in vi)return r}});function _i(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,f=pi(e.data.style)||{};e.data.normalizedStyle=i(f.__ob__)?O({},f):f;var d=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=di(i.data))&&O(r,n);(n=di(t.data))&&O(r,n);for(var o=t;o=o.parent;)o.data&&(n=di(o.data))&&O(r,n);return r}(e,!0);for(a in h)r(d[a])&&yi(c,a,"");for(a in d)(s=d[a])!==h[a]&&yi(c,a,null==s?"":s)}}var Ei={create:_i,update:_i},Ti=/\s+/;function Ai(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ti).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Si(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ti).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function ki(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&O(e,xi(t.name||"v")),O(e,t),e}return"string"==typeof t?xi(t):void 0}}var xi=_(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Ci=G&&!Q,Oi="transition",Ii="animation",Di="transition",Ni="transitionend",Ri="animation",Li="animationend";Ci&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Di="WebkitTransition",Ni="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ri="WebkitAnimation",Li="webkitAnimationEnd"));var Pi=G?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function $i(t){Pi(function(){Pi(t)})}function ji(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ai(t,e))}function Mi(t,e){t._transitionClasses&&y(t._transitionClasses,e),Si(t,e)}function Fi(t,e,n){var r=Ui(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Oi?Ni:Li,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout(function(){c<s&&u()},o+1),t.addEventListener(a,l)}var Vi=/\b(transform|all)(,|$)/;function Ui(t,e){var n,r=window.getComputedStyle(t),i=(r[Di+"Delay"]||"").split(", "),o=(r[Di+"Duration"]||"").split(", "),s=Bi(i,o),a=(r[Ri+"Delay"]||"").split(", "),c=(r[Ri+"Duration"]||"").split(", "),u=Bi(a,c),l=0,h=0;return e===Oi?s>0&&(n=Oi,l=s,h=o.length):e===Ii?u>0&&(n=Ii,l=u,h=c.length):h=(n=(l=Math.max(s,u))>0?s>u?Oi:Ii:null)?n===Oi?o.length:c.length:0,{type:n,timeout:l,propCount:h,hasTransform:n===Oi&&Vi.test(r[Di+"Property"])}}function Bi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return qi(e)+qi(t[n])}))}function qi(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Hi(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=ki(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){for(var s=o.css,c=o.type,u=o.enterClass,l=o.enterToClass,h=o.enterActiveClass,f=o.appearClass,d=o.appearToClass,v=o.appearActiveClass,m=o.beforeEnter,g=o.enter,y=o.afterEnter,b=o.enterCancelled,w=o.beforeAppear,_=o.appear,E=o.afterAppear,T=o.appearCancelled,A=o.duration,S=Ze,k=Ze.$vnode;k&&k.parent;)S=k.context,k=k.parent;var x=!S._isMounted||!t.isRootInsert;if(!x||_||""===_){var C=x&&f?f:u,O=x&&v?v:h,I=x&&d?d:l,D=x&&w||m,N=x&&"function"==typeof _?_:g,R=x&&E||y,L=x&&T||b,P=p(a(A)?A.enter:A);0;var j=!1!==s&&!Q,M=Gi(N),F=n._enterCb=$(function(){j&&(Mi(n,I),Mi(n,O)),F.cancelled?(j&&Mi(n,C),L&&L(n)):R&&R(n),n._enterCb=null});t.data.show||ue(t,"insert",function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,F)}),D&&D(n),j&&(ji(n,C),ji(n,O),$i(function(){Mi(n,C),F.cancelled||(ji(n,I),M||(Ki(P)?setTimeout(F,P):Fi(n,c,F)))})),t.data.show&&(e&&e(),N&&N(n,F)),j||M||F()}}}function zi(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=ki(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,c=o.type,u=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,f=o.beforeLeave,d=o.leave,v=o.afterLeave,m=o.leaveCancelled,g=o.delayLeave,y=o.duration,b=!1!==s&&!Q,w=Gi(d),_=p(a(y)?y.leave:y);0;var E=n._leaveCb=$(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Mi(n,l),Mi(n,h)),E.cancelled?(b&&Mi(n,u),m&&m(n)):(e(),v&&v(n)),n._leaveCb=null});g?g(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),b&&(ji(n,u),ji(n,h),$i(function(){Mi(n,u),E.cancelled||(ji(n,l),w||(Ki(_)?setTimeout(E,_):Fi(n,c,E)))})),d&&d(n,E),b||w||E())}}function Ki(t){return"number"==typeof t&&!isNaN(t)}function Gi(t){if(r(t))return!1;var e=t.fns;return i(e)?Gi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wi(t,e){!0!==e.data.show&&Hi(e)}var Xi=function(t){var e,n,a={},c=t.modules,u=t.nodeOps;for(e=0;e<cr.length;++e)for(a[cr[e]]=[],n=0;n<c.length;++n)i(c[n][cr[e]])&&a[cr[e]].push(c[n][cr[e]]);function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,r,s,c,l){if(i(t.elm)&&i(c)&&(t=c[l]=wt(t)),t.isRootInsert=!s,!function(t,e,n,r){var s=t.data;if(i(s)){var c=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return f(t,e),d(n,t.elm,r),o(c)&&function(t,e,n,r){for(var o,s=t;s.componentInstance;)if(s=s.componentInstance._vnode,i(o=s.data)&&i(o=o.transition)){for(o=0;o<a.activate.length;++o)a.activate[o](ar,s);e.push(s);break}d(n,t.elm,r)}(t,e,n,r),!0}}(t,e,n,r)){var h=t.data,v=t.children,m=t.tag;i(m)?(t.elm=t.ns?u.createElementNS(t.ns,m):u.createElement(m,t),y(t),p(t,v,e),i(h)&&g(t,e),d(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),d(n,t.elm,r)):(t.elm=u.createTextNode(t.text),d(n,t.elm,r))}}function f(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,m(t)?(g(t,e),y(t)):(sr(t),e.push(t))}function d(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function p(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)h(e[r],n,t.elm,null,!0,e,r);else s(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function m(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return i(t.tag)}function g(t,n){for(var r=0;r<a.create.length;++r)a.create[r](ar,t);i(e=t.data.hook)&&(i(e.create)&&e.create(ar,t),i(e.insert)&&n.push(t))}function y(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else for(var n=t;n;)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent;i(e=Ze)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function b(t,e,n,r,i,o){for(;r<=i;++r)h(n[r],o,t,e,!1,n,r)}function w(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)w(t.children[n])}function _(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(E(r),w(r)):l(r.elm))}}function E(t,e){if(i(e)||i(t.data)){var n,r=a.remove.length+1;for(i(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&l(t)}return n.listeners=e,n}(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&E(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function T(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&ur(t,s))return o}}function A(t,e,n,s,c,l){if(t!==e){i(e.elm)&&i(s)&&(e=s[c]=wt(e));var f=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?x(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;i(p)&&i(d=p.hook)&&i(d=d.prepatch)&&d(t,e);var v=t.children,g=e.children;if(i(p)&&m(e)){for(d=0;d<a.update.length;++d)a.update[d](t,e);i(d=p.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(v)&&i(g)?v!==g&&function(t,e,n,o,s){for(var a,c,l,f=0,d=0,p=e.length-1,v=e[0],m=e[p],g=n.length-1,y=n[0],w=n[g],E=!s;f<=p&&d<=g;)r(v)?v=e[++f]:r(m)?m=e[--p]:ur(v,y)?(A(v,y,o,n,d),v=e[++f],y=n[++d]):ur(m,w)?(A(m,w,o,n,g),m=e[--p],w=n[--g]):ur(v,w)?(A(v,w,o,n,g),E&&u.insertBefore(t,v.elm,u.nextSibling(m.elm)),v=e[++f],w=n[--g]):ur(m,y)?(A(m,y,o,n,d),E&&u.insertBefore(t,m.elm,v.elm),m=e[--p],y=n[++d]):(r(a)&&(a=lr(e,f,p)),r(c=i(y.key)?a[y.key]:T(y,e,f,p))?h(y,o,t,v.elm,!1,n,d):ur(l=e[c],y)?(A(l,y,o,n,d),e[c]=void 0,E&&u.insertBefore(t,l.elm,v.elm)):h(y,o,t,v.elm,!1,n,d),y=n[++d]);f>p?b(t,r(n[g+1])?null:n[g+1].elm,n,d,g,o):d>g&&_(e,f,p)}(f,v,g,n,l):i(g)?(i(t.text)&&u.setTextContent(f,""),b(f,null,g,0,g.length-1,n)):i(v)?_(v,0,v.length-1):i(t.text)&&u.setTextContent(f,""):t.text!==e.text&&u.setTextContent(f,e.text),i(p)&&i(d=p.hook)&&i(d=d.postpatch)&&d(t,e)}}}function S(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var k=v("attrs,class,staticClass,staticStyle,key");function x(t,e,n,r){var s,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return f(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!x(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else p(e,u,n);if(i(c)){var v=!1;for(var m in c)if(!k(m)){v=!0,g(e,n);break}!v&&c.class&&oe(c.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!r(e)){var c,l=!1,f=[];if(r(t))l=!0,h(e,f);else{var d=i(t.nodeType);if(!d&&ur(t,e))A(t,e,f,null,null,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(j)&&(t.removeAttribute(j),n=!0),o(n)&&x(t,e,f))return S(e,f,!0),t;c=t,t=new mt(u.tagName(c).toLowerCase(),{},[],void 0,c)}var p=t.elm,v=u.parentNode(p);if(h(e,f,p._leaveCb?null:v,u.nextSibling(p)),i(e.parent))for(var g=e.parent,y=m(e);g;){for(var b=0;b<a.destroy.length;++b)a.destroy[b](g);if(g.elm=e.elm,y){for(var E=0;E<a.create.length;++E)a.create[E](ar,g);var T=g.data.hook.insert;if(T.merged)for(var k=1;k<T.fns.length;k++)T.fns[k]()}else sr(g);g=g.parent}i(v)?_([t],0,0):i(t.tag)&&w(t)}}return S(e,f,l),e.elm}i(t)&&w(t)}}({nodeOps:ir,modules:[_r,Or,ci,hi,Ei,G?{create:Wi,activate:Wi,remove:function(t,e){!0!==t.data.show?zi(t,e):e()}}:{}].concat(gr)});Q&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&ro(t,"input")});var Ji={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ue(n,"postpatch",function(){Ji.componentUpdated(t,e,n)}):Yi(t,e,n.context),t._vOptions=[].map.call(t.options,to)):("textarea"===n.tag||nr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",eo),t.addEventListener("compositionend",no),t.addEventListener("change",no),Q&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Yi(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,to);if(i.some(function(t,e){return!L(t,r[e])}))(t.multiple?e.value.some(function(t){return Zi(t,i)}):e.value!==e.oldValue&&Zi(e.value,i))&&ro(t,"change")}}};function Yi(t,e,n){Qi(t,e,n),(Y||Z)&&setTimeout(function(){Qi(t,e,n)},0)}function Qi(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=P(r,to(s))>-1,s.selected!==o&&(s.selected=o);else if(L(to(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Zi(t,e){return e.every(function(e){return!L(e,t)})}function to(t){return"_value"in t?t._value:t.value}function eo(t){t.target.composing=!0}function no(t){t.target.composing&&(t.target.composing=!1,ro(t.target,"input"))}function ro(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function io(t){return!t.componentInstance||t.data&&t.data.transition?t:io(t.componentInstance._vnode)}var oo={model:Ji,show:{bind:function(t,e,n){var r=e.value,i=(n=io(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Hi(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=io(n)).data&&n.data.transition?(n.data.show=!0,r?Hi(n,function(){t.style.display=t.__vOriginalDisplay}):zi(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},so={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ao(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?ao(We(e.children)):t}function co(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[T(o)]=i[o];return e}function uo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var lo=function(t){return t.tag||me(t)},ho=function(t){return"show"===t.name},fo={name:"transition",props:so,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(lo)).length){0;var r=this.mode;0;var i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return i;var o=ao(i);if(!o)return i;if(this._leaving)return uo(t,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=co(this),u=this._vnode,l=ao(u);if(o.data.directives&&o.data.directives.some(ho)&&(o.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(o,l)&&!me(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=O({},c);if("out-in"===r)return this._leaving=!0,ue(h,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),uo(t,i);if("in-out"===r){if(me(o))return u;var f,d=function(){f()};ue(c,"afterEnter",d),ue(c,"enterCancelled",d),ue(h,"delayLeave",function(t){f=t})}}return i}}},po=O({tag:String,moveClass:String},so);function vo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function mo(t){t.data.newPos=t.elm.getBoundingClientRect()}function go(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete po.mode;var yo={Transition:fo,TransitionGroup:{props:po,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=tn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=co(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var f=r[h];f.data.transition=s,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(vo),t.forEach(mo),t.forEach(go),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;ji(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ni,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ni,t),n._moveCb=null,Mi(n,e))})}}))},methods:{hasMove:function(t,e){if(!Ci)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Si(n,t)}),Ai(n,e),n.style.display="none",this.$el.appendChild(n);var r=Ui(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};xn.config.mustUseProp=jn,xn.config.isReservedTag=Zn,xn.config.isReservedAttr=Pn,xn.config.getTagNamespace=tr,xn.config.isUnknownElement=function(t){if(!G)return!0;if(Zn(t))return!1;if(t=t.toLowerCase(),null!=er[t])return er[t];var e=document.createElement(t);return t.indexOf("-")>-1?er[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:er[t]=/HTMLUnknownElement/.test(e.toString())},O(xn.options.directives,oo),O(xn.options.components,yo),xn.prototype.__patch__=G?Xi:D,xn.prototype.$mount=function(t,e){return function(t,e,n){return t.$el=e,t.$options.render||(t.$options.render=yt),rn(t,"beforeMount"),new mn(t,function(){t._update(t._render(),n)},D,{before:function(){t._isMounted&&!t._isDestroyed&&rn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,rn(t,"mounted")),t}(this,t=t&&G?rr(t):void 0,e)},G&&setTimeout(function(){V.devtools&&st&&st.emit("init",xn)},0);var bo=/\{\{((?:.|\r?\n)+?)\}\}/g,wo=/[-.*+?^${}()|[\]\/\\]/g,_o=_(function(t){var e=t[0].replace(wo,"\\$&"),n=t[1].replace(wo,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")});function Eo(t,e){var n=e?_o(e):bo;if(n.test(t)){for(var r,i,o,s=[],a=[],c=n.lastIndex=0;r=n.exec(t);){(i=r.index)>c&&(a.push(o=t.slice(c,i)),s.push(JSON.stringify(o)));var u=Dr(r[1].trim());s.push("_s("+u+")"),a.push({"@binding":u}),c=i+r[0].length}return c<t.length&&(a.push(o=t.slice(c)),s.push(JSON.stringify(o))),{expression:s.join("+"),tokens:a}}}var To={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=qr(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=Br(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}};var Ao,So={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=qr(t,"style");n&&(t.staticStyle=JSON.stringify(fi(n)));var r=Br(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},ko=function(t){return(Ao=Ao||document.createElement("div")).innerHTML=t,Ao.textContent},xo=v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Co=v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Oo=v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Io=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Do=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,No="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+U.source+"]*",Ro="((?:"+No+"\\:)?"+No+")",Lo=new RegExp("^<"+Ro),Po=/^\s*(\/?)>/,$o=new RegExp("^<\\/"+Ro+"[^>]*>"),jo=/^<!DOCTYPE [^>]+>/i,Mo=/^<!\--/,Fo=/^<!\[/,Vo=v("script,style,textarea",!0),Uo={},Bo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},qo=/&(?:lt|gt|quot|amp|#39);/g,Ho=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,zo=v("pre,textarea",!0),Ko=function(t,e){return t&&zo(t)&&"\n"===e[0]};function Go(t,e){var n=e?Ho:qo;return t.replace(n,function(t){return Bo[t]})}var Wo,Xo,Jo,Yo,Qo,Zo,ts,es,ns=/^@|^v-on:/,rs=/^v-|^@|^:|^#/,is=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,os=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ss=/^\(|\)$/g,as=/^\[.*\]$/,cs=/:(.*)$/,us=/^:|^\.|^v-bind:/,ls=/\.[^.\]]+(?=[^\]]*$)/g,hs=/^v-slot(:|$)|^#/,fs=/[\r\n]/,ds=/[ \f\t\r\n]+/g,ps=_(ko),vs="_empty_";function ms(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),rawAttrsMap:{},parent:n,children:[]}}function gs(t,e){Wo=e.warn||Rr,Zo=e.isPreTag||N,ts=e.mustUseProp||N,es=e.getTagNamespace||N;var n=e.isReservedTag||N;(function(t){return!(!(t.component||t.attrsMap[":is"]||t.attrsMap["v-bind:is"])&&(t.attrsMap.is?n(t.attrsMap.is):n(t.tag)))}),Jo=Lr(e.modules,"transformNode"),Yo=Lr(e.modules,"preTransformNode"),Qo=Lr(e.modules,"postTransformNode"),Xo=e.delimiters;var r,i,o=[],s=!1!==e.preserveWhitespace,a=e.whitespace,c=!1,u=!1;function l(t){if(h(t),c||t.processed||(t=ys(t,e)),o.length||t===r||r.if&&(t.elseif||t.else)&&ws(r,{exp:t.elseif,block:t}),i&&!t.forbidden)if(t.elseif||t.else)s=t,(a=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(i.children))&&a.if&&ws(a,{exp:s.elseif,block:s});else{if(t.slotScope){var n=t.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[n]=t}i.children.push(t),t.parent=i}var s,a;t.children=t.children.filter(function(t){return!t.slotScope}),h(t),t.pre&&(c=!1),Zo(t.tag)&&(u=!1);for(var l=0;l<Qo.length;l++)Qo[l](t,e)}function h(t){if(!u)for(var e;(e=t.children[t.children.length-1])&&3===e.type&&" "===e.text;)t.children.pop()}return function(t,e){for(var n,r,i=[],o=e.expectHTML,s=e.isUnaryTag||N,a=e.canBeLeftOpenTag||N,c=0;t;){if(n=t,r&&Vo(r)){var u=0,l=r.toLowerCase(),h=Uo[l]||(Uo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),f=t.replace(h,function(t,n,r){return u=r.length,Vo(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ko(l,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});c+=t.length-f.length,t=f,k(l,c-u,c)}else{var d=t.indexOf("<");if(0===d){if(Mo.test(t)){var p=t.indexOf("--\x3e");if(p>=0){e.shouldKeepComment&&e.comment(t.substring(4,p),c,c+p+3),T(p+3);continue}}if(Fo.test(t)){var v=t.indexOf("]>");if(v>=0){T(v+2);continue}}var m=t.match(jo);if(m){T(m[0].length);continue}var g=t.match($o);if(g){var y=c;T(g[0].length),k(g[1],y,c);continue}var b=A();if(b){S(b),Ko(b.tagName,t)&&T(1);continue}}var w=void 0,_=void 0,E=void 0;if(d>=0){for(_=t.slice(d);!($o.test(_)||Lo.test(_)||Mo.test(_)||Fo.test(_)||(E=_.indexOf("<",1))<0);)d+=E,_=t.slice(d);w=t.substring(0,d)}d<0&&(w=t),w&&T(w.length),e.chars&&w&&e.chars(w,c-w.length,c)}if(t===n){e.chars&&e.chars(t);break}}function T(e){c+=e,t=t.substring(e)}function A(){var e=t.match(Lo);if(e){var n,r,i={tagName:e[1],attrs:[],start:c};for(T(e[0].length);!(n=t.match(Po))&&(r=t.match(Do)||t.match(Io));)r.start=c,T(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],T(n[0].length),i.end=c,i}}function S(t){var n=t.tagName,c=t.unarySlash;o&&("p"===r&&Oo(n)&&k(r),a(n)&&r===n&&k(n));for(var u=s(n)||!!c,l=t.attrs.length,h=new Array(l),f=0;f<l;f++){var d=t.attrs[f],p=d[3]||d[4]||d[5]||"",v="a"===n&&"href"===d[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;h[f]={name:d[1],value:Go(p,v)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:h,start:t.start,end:t.end}),r=n),e.start&&e.start(n,h,u,t.start,t.end)}function k(t,n,o){var s,a;if(null==n&&(n=c),null==o&&(o=c),t)for(a=t.toLowerCase(),s=i.length-1;s>=0&&i[s].lowerCasedTag!==a;s--);else s=0;if(s>=0){for(var u=i.length-1;u>=s;u--)e.end&&e.end(i[u].tag,n,o);i.length=s,r=s&&i[s-1].tag}else"br"===a?e.start&&e.start(t,[],!0,n,o):"p"===a&&(e.start&&e.start(t,[],!1,n,o),e.end&&e.end(t,n,o))}k()}(t,{warn:Wo,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start:function(t,n,s,a,h){var f=i&&i.ns||es(t);Y&&"svg"===f&&(n=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Ts.test(r.name)||(r.name=r.name.replace(As,""),e.push(r))}return e}(n));var d,p=ms(t,n,i);f&&(p.ns=f),"style"!==(d=p).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||ot()||(p.forbidden=!0);for(var v=0;v<Yo.length;v++)p=Yo[v](p,e)||p;c||(!function(t){null!=qr(t,"v-pre")&&(t.pre=!0)}(p),p.pre&&(c=!0)),Zo(p.tag)&&(u=!0),c?function(t){var e=t.attrsList,n=e.length;if(n)for(var r=t.attrs=new Array(n),i=0;i<n;i++)r[i]={name:e[i].name,value:JSON.stringify(e[i].value)},null!=e[i].start&&(r[i].start=e[i].start,r[i].end=e[i].end);else t.pre||(t.plain=!0)}(p):p.processed||(bs(p),function(t){var e=qr(t,"v-if");if(e)t.if=e,ws(t,{exp:e,block:t});else{null!=qr(t,"v-else")&&(t.else=!0);var n=qr(t,"v-else-if");n&&(t.elseif=n)}}(p),function(t){null!=qr(t,"v-once")&&(t.once=!0)}(p)),r||(r=p),s?l(p):(i=p,o.push(p))},end:function(t,e,n){var r=o[o.length-1];o.length-=1,i=o[o.length-1],l(r)},chars:function(t,e,n){if(i&&(!Y||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var r,o,l,h=i.children;if(t=u||t.trim()?"script"===(r=i).tag||"style"===r.tag?t:ps(t):h.length?a?"condense"===a&&fs.test(t)?"":" ":s?" ":"":"")u||"condense"!==a||(t=t.replace(ds," ")),!c&&" "!==t&&(o=Eo(t,Xo))?l={type:2,expression:o.expression,tokens:o.tokens,text:t}:" "===t&&h.length&&" "===h[h.length-1].text||(l={type:3,text:t}),l&&h.push(l)}},comment:function(t,e,n){if(i){var r={type:3,text:t,isComment:!0};0,i.children.push(r)}}}),r}function ys(t,e){var n,r;!function(t){var e=Br(t,"key");if(e){t.key=e}}(t),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,(r=Br(n=t,"ref"))&&(n.ref=r,n.refInFor=function(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(n)),function(t){var e;"template"===t.tag?(e=qr(t,"scope"),t.slotScope=e||qr(t,"slot-scope")):(e=qr(t,"slot-scope"))&&(t.slotScope=e);var n=Br(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||$r(t,"slot",n,Ur(t,"slot")));if("template"===t.tag){var r=Hr(t,hs);if(r){0;var i=_s(r),o=i.name,s=i.dynamic;t.slotTarget=o,t.slotTargetDynamic=s,t.slotScope=r.value||vs}}else{var a=Hr(t,hs);if(a){0;var c=t.scopedSlots||(t.scopedSlots={}),u=_s(a),l=u.name,h=u.dynamic,f=c[l]=ms("template",[],t);f.slotTarget=l,f.slotTargetDynamic=h,f.children=t.children.filter(function(t){if(!t.slotScope)return t.parent=f,!0}),f.slotScope=a.value||vs,t.children=[],t.plain=!1}}}(t),function(t){"slot"===t.tag&&(t.slotName=Br(t,"name"))}(t),function(t){var e;(e=Br(t,"is"))&&(t.component=e);null!=qr(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var i=0;i<Jo.length;i++)t=Jo[i](t,e)||t;return function(t){var e,n,r,i,o,s,a,c,u=t.attrsList;for(e=0,n=u.length;e<n;e++){if(r=i=u[e].name,o=u[e].value,rs.test(r))if(t.hasBindings=!0,(s=Es(r.replace(rs,"")))&&(r=r.replace(ls,"")),us.test(r))r=r.replace(us,""),o=Dr(o),(c=as.test(r))&&(r=r.slice(1,-1)),s&&(s.prop&&!c&&"innerHtml"===(r=T(r))&&(r="innerHTML"),s.camel&&!c&&(r=T(r)),s.sync&&(a=Gr(o,"$event"),c?Vr(t,'"update:"+('+r+")",a,null,!1,0,u[e],!0):(Vr(t,"update:"+T(r),a,null,!1,0,u[e]),k(r)!==T(r)&&Vr(t,"update:"+k(r),a,null,!1,0,u[e])))),s&&s.prop||!t.component&&ts(t.tag,t.attrsMap.type,r)?Pr(t,r,o,u[e],c):$r(t,r,o,u[e],c);else if(ns.test(r))r=r.replace(ns,""),(c=as.test(r))&&(r=r.slice(1,-1)),Vr(t,r,o,s,!1,0,u[e],c);else{var l=(r=r.replace(rs,"")).match(cs),h=l&&l[1];c=!1,h&&(r=r.slice(0,-(h.length+1)),as.test(h)&&(h=h.slice(1,-1),c=!0)),Mr(t,r,i,o,h,c,s,u[e])}else $r(t,r,JSON.stringify(o),u[e]),!t.component&&"muted"===r&&ts(t.tag,t.attrsMap.type,r)&&Pr(t,r,"true",u[e])}}(t),t}function bs(t){var e;if(e=qr(t,"v-for")){var n=function(t){var e=t.match(is);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(ss,""),i=r.match(os);i?(n.alias=r.replace(os,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(e);n&&O(t,n)}}function ws(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function _s(t){var e=t.name.replace(hs,"");return e||"#"!==t.name[0]&&(e="default"),as.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:'"'+e+'"',dynamic:!1}}function Es(t){var e=t.match(ls);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}var Ts=/^xmlns:NS\d+/,As=/^NS\d+:/;function Ss(t){return ms(t.tag,t.attrsList.slice(),t.parent)}var ks=[To,So,{preTransformNode:function(t,e){if("input"===t.tag){var n,r=t.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Br(t,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=qr(t,"v-if",!0),o=i?"&&("+i+")":"",s=null!=qr(t,"v-else",!0),a=qr(t,"v-else-if",!0),c=Ss(t);bs(c),jr(c,"type","checkbox"),ys(c,e),c.processed=!0,c.if="("+n+")==='checkbox'"+o,ws(c,{exp:c.if,block:c});var u=Ss(t);qr(u,"v-for",!0),jr(u,"type","radio"),ys(u,e),ws(c,{exp:"("+n+")==='radio'"+o,block:u});var l=Ss(t);return qr(l,"v-for",!0),jr(l,":type",n),ys(l,e),ws(c,{exp:i,block:l}),s?c.else=!0:a&&(c.elseif=a),c}}}}];var xs,Cs,Os={expectHTML:!0,modules:ks,directives:{model:function(t,e,n){n;var r=e.value,i=e.modifiers,o=t.tag,s=t.attrsMap.type;if(t.component)return Kr(t,r,i),!1;if("select"===o)!function(t,e,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Gr(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Vr(t,"change",r,null,!0)}(t,r,i);else if("input"===o&&"checkbox"===s)!function(t,e,n){var r=n&&n.number,i=Br(t,"value")||"null",o=Br(t,"true-value")||"true",s=Br(t,"false-value")||"false";Pr(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===o?":("+e+")":":_q("+e+","+o+")")),Vr(t,"change","var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+s+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Gr(e,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Gr(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Gr(e,"$$c")+"}",null,!0)}(t,r,i);else if("input"===o&&"radio"===s)!function(t,e,n){var r=n&&n.number,i=Br(t,"value")||"null";Pr(t,"checked","_q("+e+","+(i=r?"_n("+i+")":i)+")"),Vr(t,"change",Gr(e,i),null,!0)}(t,r,i);else if("input"===o||"textarea"===o)!function(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,s=i.number,a=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ti:"input",l="$event.target.value";a&&(l="$event.target.value.trim()"),s&&(l="_n("+l+")");var h=Gr(e,l);c&&(h="if($event.target.composing)return;"+h),Pr(t,"value","("+e+")"),Vr(t,u,h,null,!0),(a||s)&&Vr(t,"blur","$forceUpdate()")}(t,r,i);else if(!V.isReservedTag(o))return Kr(t,r,i),!1;return!0},text:function(t,e){e.value&&Pr(t,"textContent","_s("+e.value+")",e)},html:function(t,e){e.value&&Pr(t,"innerHTML","_s("+e.value+")",e)}},isPreTag:function(t){return"pre"===t},isUnaryTag:xo,mustUseProp:jn,canBeLeftOpenTag:Co,isReservedTag:Zn,getTagNamespace:tr,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(ks)},Is=_(function(t){return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))});function Ds(t,e){t&&(xs=Is(e.staticKeys||""),Cs=e.isReservedTag||N,function t(e){e.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||m(t.tag)||!Cs(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(xs)))}(e);if(1===e.type){if(!Cs(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];t(i),i.static||(e.static=!1)}if(e.ifConditions)for(var o=1,s=e.ifConditions.length;o<s;o++){var a=e.ifConditions[o].block;t(a),a.static||(e.static=!1)}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var r=0,i=e.children.length;r<i;r++)t(e.children[r],n||!!e.for);if(e.ifConditions)for(var o=1,s=e.ifConditions.length;o<s;o++)t(e.ifConditions[o].block,n)}}(t,!1))}var Ns=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Rs=/\([^)]*?\);*$/,Ls=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Ps={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},$s={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},js=function(t){return"if("+t+")return null;"},Ms={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:js("$event.target !== $event.currentTarget"),ctrl:js("!$event.ctrlKey"),shift:js("!$event.shiftKey"),alt:js("!$event.altKey"),meta:js("!$event.metaKey"),left:js("'button' in $event && $event.button !== 0"),middle:js("'button' in $event && $event.button !== 1"),right:js("'button' in $event && $event.button !== 2")};function Fs(t,e){var n=e?"nativeOn:":"on:",r="",i="";for(var o in t){var s=Vs(t[o]);t[o]&&t[o].dynamic?i+=o+","+s+",":r+='"'+o+'":'+s+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Vs(t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Vs(t)}).join(",")+"]";var e=Ls.test(t.value),n=Ns.test(t.value),r=Ls.test(t.value.replace(Rs,""));if(t.modifiers){var i="",o="",s=[];for(var a in t.modifiers)if(Ms[a])o+=Ms[a],Ps[a]&&s.push(a);else if("exact"===a){var c=t.modifiers;o+=js(["ctrl","shift","alt","meta"].filter(function(t){return!c[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else s.push(a);return s.length&&(i+=function(t){return"if(!$event.type.indexOf('key')&&"+t.map(Us).join("&&")+")return null;"}(s)),o&&(i+=o),"function($event){"+i+(e?"return "+t.value+".apply(null, arguments)":n?"return ("+t.value+").apply(null, arguments)":r?"return "+t.value:t.value)+"}"}return e||n?t.value:"function($event){"+(r?"return "+t.value:t.value)+"}"}function Us(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=Ps[t],r=$s[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Bs={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:D},qs=function(t){this.options=t,this.warn=t.warn||Rr,this.transforms=Lr(t.modules,"transformCode"),this.dataGenFns=Lr(t.modules,"genData"),this.directives=O(O({},Bs),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!!t.component||!e(t.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Hs(t,e){var n=new qs(e);return{render:"with(this){return "+(t?"script"===t.tag?"null":zs(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function zs(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return Ks(t,e);if(t.once&&!t.onceProcessed)return Gs(t,e);if(t.for&&!t.forProcessed)return Xs(t,e);if(t.if&&!t.ifProcessed)return Ws(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=Zs(t,e),i="_t("+n+(r?",function(){return "+r+"}":""),o=t.attrs||t.dynamicAttrs?na((t.attrs||[]).concat(t.dynamicAttrs||[]).map(function(t){return{name:T(t.name),value:t.value,dynamic:t.dynamic}})):null,s=t.attrsMap["v-bind"];!o&&!s||r||(i+=",null");o&&(i+=","+o);s&&(i+=(o?"":",null")+","+s);return i+")"}(t,e);var n;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:Zs(e,n,!0);return"_c("+t+","+Js(e,n)+(r?","+r:"")+")"}(t.component,t,e);else{var r;(!t.plain||t.pre&&e.maybeComponent(t))&&(r=Js(t,e));var i=t.inlineTemplate?null:Zs(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return Zs(t,e)||"void 0"}function Ks(t,e){t.staticProcessed=!0;var n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push("with(this){return "+zs(t,e)+"}"),e.pre=n,"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function Gs(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return Ws(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+zs(t,e)+","+e.onceId+++","+n+")":zs(t,e)}return Ks(t,e)}function Ws(t,e,n,r){return t.ifProcessed=!0,function t(e,n,r,i){if(!e.length)return i||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+s(o.block)+":"+t(e,n,r,i):""+s(o.block);function s(t){return r?r(t,n):t.once?Gs(t,n):zs(t,n)}}(t.ifConditions.slice(),e,n,r)}function Xs(t,e,n,r){var i=t.for,o=t.alias,s=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+s+a+"){return "+(n||zs)(t,e)+"})"}function Js(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,i,o,s,a="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],s=!0;var u=e.directives[o.name];u&&(s=!!u(t,o,e.warn)),s&&(c=!0,a+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return a.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:"+na(t.attrs)+","),t.props&&(n+="domProps:"+na(t.props)+","),t.events&&(n+=Fs(t.events,!1)+","),t.nativeEvents&&(n+=Fs(t.nativeEvents,!0)+","),t.slotTarget&&!t.slotScope&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=function(t,e,n){var r=t.for||Object.keys(e).some(function(t){var n=e[t];return n.slotTargetDynamic||n.if||n.for||Ys(n)}),i=!!t.if;if(!r)for(var o=t.parent;o;){if(o.slotScope&&o.slotScope!==vs||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var s=Object.keys(e).map(function(t){return Qs(e[t],n)}).join(",");return"scopedSlots:_u(["+s+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(t){var e=5381,n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(s):"")+")"}(t,t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var o=function(t,e){var n=t.children[0];0;if(n&&1===n.type){var r=Hs(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n="_b("+n+',"'+t.tag+'",'+na(t.dynamicAttrs)+")"),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function Ys(t){return 1===t.type&&("slot"===t.tag||t.children.some(Ys))}function Qs(t,e){var n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return Ws(t,e,Qs,"null");if(t.for&&!t.forProcessed)return Xs(t,e,Qs);var r=t.slotScope===vs?"":String(t.slotScope),i="function("+r+"){return "+("template"===t.tag?t.if&&n?"("+t.if+")?"+(Zs(t,e)||"undefined")+":undefined":Zs(t,e)||"undefined":zs(t,e))+"}",o=r?"":",proxy:true";return"{key:"+(t.slotTarget||'"default"')+",fn:"+i+o+"}"}function Zs(t,e,n,r,i){var o=t.children;if(o.length){var s=o[0];if(1===o.length&&s.for&&"template"!==s.tag&&"slot"!==s.tag){var a=n?e.maybeComponent(s)?",1":",0":"";return""+(r||zs)(s,e)+a}var c=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(ta(i)||i.ifConditions&&i.ifConditions.some(function(t){return ta(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(o,e.maybeComponent):0,u=i||ea;return"["+o.map(function(t){return u(t,e)}).join(",")+"]"+(c?","+c:"")}}function ta(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function ea(t,e){return 1===t.type?zs(t,e):3===t.type&&t.isComment?(r=t,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=t).type?n.expression:ra(JSON.stringify(n.text)))+")";var n,r}function na(t){for(var e="",n="",r=0;r<t.length;r++){var i=t[r],o=ra(i.value);i.dynamic?n+=i.name+","+o+",":e+='"'+i.name+'":'+o+","}return e="{"+e.slice(0,-1)+"}",n?"_d("+e+",["+n.slice(0,-1)+"])":e}function ra(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function ia(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),D}}function oa(t){var e=Object.create(null);return function(n,r,i){(r=O({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(e[o])return e[o];var s=t(n,r);var a={},c=[];return a.render=ia(s.render,c),a.staticRenderFns=s.staticRenderFns.map(function(t){return ia(t,c)}),e[o]=a}}var sa,aa,ca=(sa=function(t,e){var n=gs(t.trim(),e);!1!==e.optimize&&Ds(n,e);var r=Hs(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),i=[],o=[],s=function(t,e,n){(n?o:i).push(t)};if(n)for(var a in n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=O(Object.create(t.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=s;var c=sa(e.trim(),r);return c.errors=i,c.tips=o,c}return{compile:e,compileToFunctions:oa(e)}})(Os),ua=(ca.compile,ca.compileToFunctions);function la(t){return(aa=aa||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',aa.innerHTML.indexOf("&#10;")>0}var ha=!!G&&la(!1),fa=!!G&&la(!0),da=_(function(t){var e=rr(t);return e&&e.innerHTML}),pa=xn.prototype.$mount;xn.prototype.$mount=function(t,e){if((t=t&&rr(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=da(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){0;var i=ua(r,{outputSourceRange:!1,shouldDecodeNewlines:ha,shouldDecodeNewlinesForHref:fa,delimiters:n.delimiters,comments:n.comments},this),o=i.render,s=i.staticRenderFns;n.render=o,n.staticRenderFns=s}}return pa.call(this,t,e)},xn.compile=ua,e.a=xn}).call(e,n("DuR2"))},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"82Mu":function(t,e,n){var r=n("7KvD"),i=n("L42u").set,o=r.MutationObserver||r.WebKitMutationObserver,s=r.process,a=r.Promise,c="process"==n("R9M2")(s);t.exports=function(){var t,e,n,u=function(){var r,i;for(c&&(r=s.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){s.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var l=a.resolve(void 0);n=function(){l.then(u)}}else n=function(){i.call(r,u)};else{var h=!0,f=document.createTextNode("");new o(u).observe(f,{characterData:!0}),n=function(){f.data=h=!h}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},"880/":function(t,e,n){t.exports=n("hJx8")},"881v":function(t,e,n){"use strict";n("fQOS")},"94VQ":function(t,e,n){"use strict";var r=n("Yobk"),i=n("X8DO"),o=n("e6n0"),s={};n("hJx8")(s,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},CXw9:function(t,e,n){"use strict";var r,i,o,s,a=n("O4g8"),c=n("7KvD"),u=n("+ZMJ"),l=n("RY/4"),h=n("kM2E"),f=n("EqjI"),d=n("lOnJ"),p=n("2KxR"),v=n("NWt+"),m=n("t8x9"),g=n("L42u").set,y=n("82Mu")(),b=n("qARP"),w=n("dNDb"),_=n("iUbK"),E=n("fJUb"),T=c.TypeError,A=c.process,S=A&&A.versions,k=S&&S.v8||"",x=c.Promise,C="process"==l(A),O=function(){},I=i=b.f,D=!!function(){try{var t=x.resolve(1),e=(t.constructor={})[n("dSzd")("species")]=function(t){t(O,O)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==k.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,i=1==t._s,o=0,s=function(e){var n,o,s,a=i?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(i||(2==t._h&&$(t),t._h=1),!0===a?n=r:(l&&l.enter(),n=a(r),l&&(l.exit(),s=!0)),n===e.promise?u(T("Promise-chain cycle")):(o=N(n))?o.call(n,c,u):c(n)):u(r)}catch(t){l&&!s&&l.exit(),u(t)}};n.length>o;)s(n[o++]);t._c=[],t._n=!1,e&&!t._h&&L(t)})}},L=function(t){g.call(c,function(){var e,n,r,i=t._v,o=P(t);if(o&&(e=w(function(){C?A.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=C||P(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},P=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){g.call(c,function(){var e;C?A.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},j=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw T("Promise can't be resolved itself");(e=N(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,u(M,r,1),u(j,r,1))}catch(t){j.call(r,t)}}):(n._v=t,n._s=1,R(n,!1))}catch(t){j.call({_w:n,_d:!1},t)}}};D||(x=function(t){p(this,x,"Promise","_h"),d(t),r.call(this);try{t(u(M,this,1),u(j,this,1))}catch(t){j.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("xH/j")(x.prototype,{then:function(t,e){var n=I(m(this,x));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=C?A.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&R(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(M,t,1),this.reject=u(j,t,1)},b.f=I=function(t){return t===x||t===s?new o(t):i(t)}),h(h.G+h.W+h.F*!D,{Promise:x}),n("e6n0")(x,"Promise"),n("bRrM")("Promise"),s=n("FeBl").Promise,h(h.S+h.F*!D,"Promise",{reject:function(t){var e=I(this);return(0,e.reject)(t),e.promise}}),h(h.S+h.F*(a||!D),"Promise",{resolve:function(t){return E(a&&this===s?x:this,t)}}),h(h.S+h.F*!(D&&n("dY0y")(function(t){x.all(t).catch(O)})),"Promise",{all:function(t){var e=this,n=I(e),r=n.resolve,i=n.reject,o=w(function(){var n=[],o=0,s=1;v(t,!1,function(t){var a=o++,c=!1;n.push(void 0),s++,e.resolve(t).then(function(t){c||(c=!0,n[a]=t,--s||r(n))},i)}),--s||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=I(e),r=n.reject,i=w(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("woOf"),o=(r=i)&&r.__esModule?r:{default:r};e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},"E/LO":function(t,e,n){"use strict";var r=n("28tl"),i=n("xq9A"),o=n("a7sP"),s=n("gZMR");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(o._addComponent)(t,new i.a("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o.deleteApp)(this._delegate)))}_getService(t,e=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(o._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){Object(o._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.b("app-compat","Firebase",c);const l=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function t(){const e=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){const e={},n={__esModule:!0,initializeApp:function(i,s={}){const a=o.initializeApp(i,s);if(Object(r.d)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c},app:i,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(e){const s=e.name,a=s.replace("-compat","");if(o._registerComponent(e)&&"PUBLIC"===e.type){const o=(t=i())=>{if("function"!=typeof t[a])throw u.create("invalid-app-argument",{appName:s});return t[a]()};void 0!==e.serviceProps&&Object(r.h)(o,e.serviceProps),n[a]=o,t.prototype[a]=function(...t){const n=this._getService.bind(this,s);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null},removeApp:function(t){delete e[t]},useAsService:function(t,e){return"serverAuth"===e?null:e},modularAPIs:o}};function i(t){if(t=t||o._DEFAULT_ENTRY_NAME,!Object(r.d)(e,t))throw u.create("no-app",{appName:t});return e[t]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(e).map(t=>e[t])}}),i.App=t,n}(a);return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:t,extendNamespace:function(t){Object(r.h)(e,t)},createSubscribe:r.f,ErrorFactory:r.b,deepExtend:r.h}),e}(),h=new s.b("@firebase/app-compat"),f="@firebase/app-compat",d="0.1.17";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(r.k)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const p=l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var v;Object(o.registerVersion)(f,d,v),n.d(e,"a",function(){return p});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
p.registerVersion("firebase","9.6.6","app-compat")},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},EqBC:function(t,e,n){"use strict";var r=n("kM2E"),i=n("FeBl"),o=n("7KvD"),s=n("t8x9"),a=n("fJUb");r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),o=n("vFc/")(!1),s=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},L42u:function(t,e,n){var r,i,o,s=n("+ZMJ"),a=n("knuC"),c=n("RPLV"),u=n("ON07"),l=n("7KvD"),h=l.process,f=l.setImmediate,d=l.clearImmediate,p=l.MessageChannel,v=l.Dispatch,m=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){y.call(t.data)};f&&d||(f=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},d=function(t){delete g[t]},"process"==n("R9M2")(h)?r=function(t){h.nextTick(s(y,t,1))}:v&&v.now?r=function(t){v.now(s(y,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=b,r=s(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",b,!1)):r="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:f,clear:d}},M6a0:function(t,e){},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mhyx:function(t,e,n){var r=n("/bQp"),i=n("dSzd")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"NWt+":function(t,e,n){var r=n("+ZMJ"),i=n("msXi"),o=n("Mhyx"),s=n("77Pl"),a=n("QRG4"),c=n("3fs2"),u={},l={};(e=t.exports=function(t,e,n,h,f){var d,p,v,m,g=f?function(){return t}:c(t),y=r(n,h,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(d=a(t.length);d>b;b++)if((m=e?y(s(p=t[b])[0],p[1]):y(t[b]))===u||m===l)return m}else for(v=g.call(t);!(p=v.next()).done;)if((m=i(v,y,p.value,e))===u||m===l)return m}).BREAK=u,e.RETURN=l},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),i=n("7KvD").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},PzxK:function(t,e,n){var r=n("D2L2"),i=n("sB3e"),o=n("ax3d")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},RPLV:function(t,e,n){var r=n("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,e,n){var r=n("R9M2"),i=n("dSzd")("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=w;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},m={};m[s]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(D([])));y&&y!==r&&i.call(y,s)&&(m=y);var b=A.prototype=E.prototype=Object.create(m);T.prototype=b.constructor=A,A.constructor=T,A[c]=T.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===T||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[a]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var i=new k(w(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(b),b[c]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=D,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var i=e&&e.prototype instanceof E?e:E,o=Object.create(i.prototype),s=new I(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=x(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=_(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function E(){}function T(){}function A(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,s){var a=_(t[n],t,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},s)}s(a.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function D(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},To3L:function(t,e,n){"use strict";var r=n("+E39"),i=n("lktj"),o=n("1kS7"),s=n("NpIQ"),a=n("sB3e"),c=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,l=1,h=o.f,f=s.f;u>l;)for(var d,p=c(arguments[l++]),v=h?i(p).concat(h(p)):i(p),m=v.length,g=0;m>g;)d=v[g++],r&&!f.call(p,d)||(n[d]=p[d]);return n}:u},U5ju:function(t,e,n){n("M6a0"),n("zQR9"),n("+tPU"),n("CXw9"),n("EqBC"),n("jKW+"),t.exports=n("FeBl").Promise},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},"VU/8":function(t,e){t.exports=function(t,e,n,r,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var h=l.functional,f=h?l.render:l.beforeCreate;h?(l._injectStyles=u,l.render=function(t,e){return u.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:a,options:l}}},W2nU:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],l=!1,h=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&d())}function d(){if(!l){var t=a(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Xxa5:function(t,e,n){t.exports=n("jyFz")},Yobk:function(t,e,n){var r=n("77Pl"),i=n("qio6"),o=n("xnc9"),s=n("ax3d")("IE_PROTO"),a=function(){},c=function(){var t,e=n("ON07")("iframe"),r=o.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=c(),void 0===e?n:i(n,e)}},a7sP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SDK_VERSION",function(){return T}),n.d(e,"_DEFAULT_ENTRY_NAME",function(){return l}),n.d(e,"_addComponent",function(){return p}),n.d(e,"_addOrOverwriteComponent",function(){return v}),n.d(e,"_apps",function(){return f}),n.d(e,"_clearComponents",function(){return b}),n.d(e,"_components",function(){return d}),n.d(e,"_getProvider",function(){return g}),n.d(e,"_registerComponent",function(){return m}),n.d(e,"_removeServiceInstance",function(){return y}),n.d(e,"deleteApp",function(){return x}),n.d(e,"getApp",function(){return S}),n.d(e,"getApps",function(){return k}),n.d(e,"initializeApp",function(){return A}),n.d(e,"onLog",function(){return O}),n.d(e,"registerVersion",function(){return C}),n.d(e,"setLogLevel",function(){return I});var r=n("xq9A"),i=n("gZMR"),o=n("28tl");n.d(e,"FirebaseError",function(){return o.c});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const a="@firebase/app",c="0.7.16",u=new i.b("@firebase/app"),l="[DEFAULT]",h={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,d=new Map;function p(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function v(t,e){t.container.addOrOverwriteComponent(e)}function m(t){const e=t.name;if(d.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;d.set(e,t);for(const e of f.values())p(e,t);return!0}function g(t,e){return t.container.getProvider(e)}function y(t,e,n=l){g(t,e).clearInstance(n)}function b(){d.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},_=new o.b("app","Firebase",w);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="9.6.6";function A(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:l,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw _.create("bad-app-name",{appName:String(i)});const s=f.get(i);if(s){if(Object(o.g)(t,s.options)&&Object(o.g)(n,s.config))return s;throw _.create("duplicate-app",{appName:i})}const a=new r.b(i);for(const t of d.values())a.addComponent(t);const c=new E(t,n,a);return f.set(i,c),c}function S(t=l){const e=f.get(t);if(!e)throw _.create("no-app",{appName:t});return e}function k(){return Array.from(f.values())}async function x(t){const e=t.name;f.has(e)&&(f.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function C(t,e,n){var i;let o=null!==(i=h[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}m(new r.a(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function O(t,e){if(null!==t&&"function"!=typeof t)throw _.create("invalid-log-argument");Object(i.d)(t,e)}function I(t){Object(i.c)(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;D="",m(new r.a("platform-logger",t=>new s(t),"PRIVATE")),C(a,c,D),C(a,c,"esm2017"),C("fire-js","")},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},bRrM:function(t,e,n){"use strict";var r=n("7KvD"),i=n("FeBl"),o=n("evD5"),s=n("+E39"),a=n("dSzd")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];s&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},dSzd:function(t,e,n){var r=n("e8AB")("wks"),i=n("3Eo+"),o=n("7KvD").Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},dY0y:function(t,e,n){var r=n("dSzd")("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},e6n0:function(t,e,n){var r=n("evD5").f,i=n("D2L2"),o=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},e8AB:function(t,e,n){var r=n("FeBl"),i=n("7KvD"),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var r=n("77Pl"),i=n("SfB7"),o=n("MmMw"),s=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("//Fk"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function r(i,s){try{var a=e[i](s),c=a.value}catch(t){return void n(t)}if(!a.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},fJUb:function(t,e,n){var r=n("77Pl"),i=n("EqjI"),o=n("qARP");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},fQOS:function(t,e,n){"use strict";(function(t){var e=n("a7sP"),r=n("xq9A"),i=n("gZMR"),o=n("28tl");n("zBsV");const s="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new i.b("@firebase/firestore");function l(t,...e){if(u.logLevel<=i.a.DEBUG){const n=e.map(f);u.debug(`Firestore (${c}): ${t}`,...n)}}function h(t,...e){if(u.logLevel<=i.a.ERROR){const n=e.map(f);u.error(`Firestore (${c}): ${t}`,...n)}}function f(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw h(e),new Error(e)}function p(t,e){t||d()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends o.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(a.UNAUTHENTICATED))}shutdown(){}}class w{constructor(t,e,n){this.type="FirstParty",this.user=a.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class _{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new w(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(a.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=(t=>this.p(t)),this.T=(t=>e.writeSequenceNumber(t)))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */T.I=-1;class S{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=A(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function k(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e,n){void 0===e?e=0:e>t.length&&d(),void 0===n?n=t.length-e:n>t.length-e&&d(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===x.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof x?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class C extends x{construct(t,e,n){return new C(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new m(v.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new C(e)}static emptyPath(){return new C([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new O(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new O(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}O.EMPTY_BYTE_STRING=new O("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(t){this.path=t}static fromPath(t){return new I(C.fromString(t))}static fromName(t){return new I(C.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===C.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return C.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new C(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var D,N;(N=D||(D={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){this.comparator=t,this.root=e||P.EMPTY}insert(t,e){return new R(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,P.BLACK,null,null))}remove(t){return new R(this.comparator,this.root.remove(t,this.comparator).copy(null,null,P.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new L(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new L(this.root,t,this.comparator,!1)}getReverseIterator(){return new L(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new L(this.root,t,this.comparator,!0)}}class L{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class P{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:P.RED,this.left=null!=r?r:P.EMPTY,this.right=null!=i?i:P.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new P(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return P.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return P.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){const t=this.copy(null,null,P.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,P.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw d();if(this.right.isRed())throw d();const t=this.left.check();if(t!==this.right.check())throw d();return t+(this.isRed()?0:1)}}P.EMPTY=null,P.RED=!0,P.BLACK=!1,P.EMPTY=new class{constructor(){this.size=0}get key(){throw d()}get value(){throw d()}get color(){throw d()}get left(){throw d()}get right(){throw d()}copy(t,e,n,r,i){return this}insert(t,e,n){return new P(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(t){this.comparator=t,this.data=new R(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new j(this.data.getIterator())}getIteratorFrom(t){return new j(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof $))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $(this.comparator);return e.data=t,e}}class j{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new R(I.comparator);new R(I.comparator);new R(I.comparator);new $(I.comparator);new $(k);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=V(e)),e=F(t.get(n),e);return V(e)}function F(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function V(t){return t+""}class U{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}U.store="owner",U.key="owner";class B{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}B.store="mutationQueues",B.keyPath="userId";class q{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}q.store="mutations",q.keyPath="batchId",q.userMutationsIndex="userMutationsIndex",q.userMutationsKeyPath=["userId","batchId"];class H{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,M(e)]}static key(t,e,n){return[t,M(e),n]}}H.store="documentMutations",H.PLACEHOLDER=new H;class z{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}z.store="remoteDocuments",z.readTimeIndex="readTimeIndex",z.readTimeIndexPath="readTime",z.collectionReadTimeIndex="collectionReadTimeIndex",z.collectionReadTimeIndexPath=["parentPath","readTime"];class K{constructor(t){this.byteSize=t}}K.store="remoteDocumentGlobal",K.key="remoteDocumentGlobalKey";class G{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}G.store="targets",G.keyPath="targetId",G.queryTargetsIndexName="queryTargetsIndex",G.queryTargetsKeyPath=["canonicalId","targetId"];class W{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}W.store="targetDocuments",W.keyPath=["targetId","path"],W.documentTargetsIndex="documentTargetsIndex",W.documentTargetsKeyPath=["path","targetId"];class X{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}X.key="targetGlobalKey",X.store="targetGlobal";class J{constructor(t,e){this.collectionId=t,this.parent=e}}J.store="collectionParents",J.keyPath=["collectionId","parent"];class Y{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Y.store="clientMetadata",Y.keyPath="clientId";class Q{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Q.store="bundles",Q.keyPath="bundleId";class Z{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Z.store="namedQueries",Z.keyPath="name";B.store,q.store,H.store,z.store,G.store,U.store,X.store,W.store,Y.store,K.store,J.store,Q.store,Z.store;function tt(t){return"IndexedDbTransactionError"===t.name}class et{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new et(t,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.DEFAULT_COLLECTION_PERCENTILE=10,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,et.DEFAULT=new et(41943040,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),et.DISABLED=new et(-1,0,0);function nt(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&l("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new g,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new it(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new m(v.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ot(t,e){if(h("AsyncQueue",`${e}: ${t}`),tt(t))return new m(v.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=a.UNAUTHENTICATED,this.clientId=S.A(),this.authCredentialListener=(()=>Promise.resolve()),this.appCheckCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(n,async t=>{l("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(l("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new g;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ot(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}class at{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class ct{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ct&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new m(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new m(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new m(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lt({}),this._settingsFrozen=!1,t instanceof ct?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new m(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ct(t.options.projectId)}(t))}get app(){if(!this._app)throw new m(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new m(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lt(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new b;switch(t.type){case"gapi":const e=t.client;return p(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new _(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new m(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ut.get(t);e&&(l("ComponentProvider","Removing Datastore"),ut.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new rt(this,"async_queue_retry"),this.bc=(()=>{const t=nt();t&&l("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()});const t=nt();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=nt();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const e=new g;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!tt(t))throw t;l("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const e=this.mc.then(()=>(this.Ic=!0,t().catch(t=>{throw this.Ec=t,this.Ic=!1,h("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.Ic=!1,t))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const r=it.createAndSchedule(this,t,e,n,t=>this.Sc(t));return this.Tc.push(r),r}Pc(){this.Ec&&d()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}class dt extends ht{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ft,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pt(this),this._firestoreClient.terminate()}}function pt(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new at(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new st(t._authCredentials,t._appCheckCredentials,t._queue,r)}new RegExp("[~\\*/\\[\\]]");!function(t,n=!0){!function(t){c=t}(e.SDK_VERSION),Object(e._registerComponent)(new r.a("firestore",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=new dt(r,new class{constructor(t){this.t=t,this.currentUser=a.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new g;this.o=(()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new g,t.enqueueRetryable(()=>r(this.currentUser))});const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{l("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(l("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new g)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(l("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(p("string"==typeof e.accessToken),new y(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return p(null===t||"string"==typeof t),new a(t)}}(t.getProvider("auth-internal")),new class{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=(n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&l("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n))});const n=t=>{l("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):l("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(p("string"==typeof t.token),new E(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(t.getProvider("app-check-internal")));return e=Object.assign({useFetchStreams:n},e),i._setSettings(e),i},"PUBLIC")),Object(e.registerVersion)(s,"3.4.4",void 0),Object(e.registerVersion)(s,"3.4.4","esm2017")}()}).call(e,n("W2nU"))},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},gZMR:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},h65t:function(t,e,n){var r=n("UuGF"),i=n("52gC");t.exports=function(t){return function(e,n){var o,s,a=String(i(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},hJx8:function(t,e,n){var r=n("evD5"),i=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},hnaQ:function(t,e,n){"use strict";
/*!
  * vuefire v2.2.5
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */
function r(t,e){return e.split(".").reduce(function(t,e){return t[e]},t)}function i(t,e,n){var r=(""+e).split("."),i=r.pop(),o=r.reduce(function(t,e){return t[e]},t);return Array.isArray(o)?o.splice(Number(i),1,n):o[i]=n}function o(t){return t&&"object"==typeof t}function s(t){return t&&t.onSnapshot}n.d(e,"a",function(){return m});var a={reset:!0,serialize:function(t){var e=t.val(),n=o(e)?e:Object.defineProperty({},".value",{value:e});return Object.defineProperty(n,".key",{value:t.key}),n},wait:!1};function c(t,e,n){var r=[{},{}],i=Object.keys(n).reduce(function(t,e){var r=n[e];return t[r.path]=r.data(),t},{});return function t(e,n,r,a){n=n||{};var c=a[0],u=a[1];for(var l in Object.getOwnPropertyNames(e).forEach(function(t){var n=Object.getOwnPropertyDescriptor(e,t);n&&!n.enumerable&&Object.defineProperty(c,t,n)}),e){var h=e[l];if(null==h||h instanceof Date||h.toDate||h.longitude&&h.latitude)c[l]=h;else if(s(h))c[l]="object"==typeof n&&l in n&&"string"!=typeof n[l]?n[l]:h.path,u[r+l]=h;else if(Array.isArray(h)){c[l]=Array(h.length);for(var f=0;f<h.length;f++){var d=h[f];d&&d.path in i&&(c[l][f]=i[d.path])}t(h,n[l]||c[l],r+l+".",[c[l],u])}else o(h)?(c[l]={},t(h,n[l],r+l+".",[c[l],u])):c[l]=h}}(t,e,"",r),r}var u={maxRefDepth:2,reset:!0,serialize:function(t){return Object.defineProperty(t.data()||{},"id",{value:t.id})},wait:!1};function l(t){for(var e in t)t[e].unsub()}function h(t,e,n,i,o,s,a,u){var l=c(t.serialize(i),r(e,n),o),h=l[0],d=l[1];s.set(e,n,h),f(t,e,n,o,d,s,a,u)}function f(t,e,n,i,o,s,a,c){var u=Object.keys(o);if(Object.keys(i).filter(function(t){return u.indexOf(t)<0}).forEach(function(t){i[t].unsub(),delete i[t]}),!u.length||++a>t.maxRefDepth)return c(n);var f=0,d=u.length,p=Object.create(null);u.forEach(function(u){var v=i[u],m=o[u],g=n+"."+u;if(p[g]=!0,v){if(v.path===m.path)return;v.unsub()}i[u]={data:function(){return r(e,g)},unsub:function(t,e){var n=t.ref,r=t.target,i=t.path,o=t.depth,s=t.resolve,a=t.ops,c=Object.create(null),u=n.onSnapshot(function(t){t.exists?h(e,r,i,t,c,a,o,s):(a.set(r,i,null),s())});return function(){u(),l(c)}}({ref:m,target:e,path:g,depth:a,ops:s,resolve:function(t){t in p&&++f>=d&&c(n)}.bind(null,g)},t),path:m.path}})}a.serialize,a.reset,a.wait;var d={set:function(t,e,n){return i(t,e,n)},add:function(t,e,n){return t.splice(e,0,n)},remove:function(t,e){return t.splice(e,1)}};function p(t,e,n,i,o){return new Promise(function(s,a){var d;d="where"in n?function(t,e){var n=t.vm,r=t.key,i=t.collection,o=t.ops,s=t.resolve,a=t.reject;void 0===e&&(e=u);var h,d=Object.assign({},u,e),p=d.wait?[]:o.set(n,r,[]),v=s,m=[],g={added:function(t){var e=t.newIndex,n=t.doc;m.splice(e,0,Object.create(null));var r=m[e],i=c(d.serialize(n),void 0,r),a=i[0],u=i[1];o.add(p,e,a),f(d,p,e,r,u,o,0,s.bind(null,n))},modified:function(t){var e=t.oldIndex,n=t.newIndex,r=t.doc,i=m[e],a=p[e],u=c(d.serialize(r),a,i),l=u[0],h=u[1];m.splice(n,0,i),o.remove(p,e),o.add(p,n,l),f(d,p,n,i,h,o,0,s)},removed:function(t){var e=t.oldIndex;o.remove(p,e),l(m.splice(e,1)[0])}},y=i.onSnapshot(function(t){var e="function"==typeof t.docChanges?t.docChanges():t.docChanges;if(!h&&e.length){h=!0;for(var i=0,a=e.length,c=Object.create(null),u=0;u<a;u++)c[e[u].doc.id]=!0;s=function(t){t.id in c&&++i>=a&&(d.wait&&o.set(n,r,p),v(n[r]),s=function(){})}}e.forEach(function(t){g[t.type](t)}),e.length||(d.wait&&o.set(n,r,p),s(p))},a);return function(t){if(y(),!1!==t){var e="function"==typeof t?t():[];o.set(n,r,e)}m.forEach(l)}}({vm:t,key:e,ops:i,collection:n,resolve:s,reject:a},o):function(t,e){var n=t.vm,i=t.key,o=t.document,s=t.resolve,a=t.reject,c=t.ops;void 0===e&&(e=u);var f,d,p,v=Object.assign({},u,e),m=Object.create(null);f=s,d=function(){return r(n,i)},p=!1,s=function(){if(!p)return p=!0,f(d())};var g=o.onSnapshot(function(t){t.exists?h(v,n,i,t,m,c,0,s):(c.set(n,i,null),s(null))},a);return function(t){if(g(),!1!==t){var e="function"==typeof t?t():null;c.set(n,i,e)}l(m)}}({vm:t,key:e,ops:i,document:n,resolve:s,reject:a},o),t._firestoreUnbinds[e]=d})}var v={bindName:"$bind",unbindName:"$unbind",serialize:u.serialize,reset:u.reset,wait:u.wait},m=function(t,e){void 0===e&&(e=v);var n=t.config.optionMergeStrategies;n.firestore=n.provide;var r=Object.assign({},v,e),i=r.bindName,o=r.unbindName;t.prototype[o]=function(t,e){this._firestoreUnbinds[t](e),delete this._firestoreUnbinds[t],delete this.$firestoreRefs[t]},t.prototype[i]=function(t,e,n){var i=Object.assign({},r,n);this._firestoreUnbinds[t]&&this[o](t,i.wait?"function"==typeof i.reset&&i.reset:i.reset);var s=p(this,t,e,d,i);return this.$firestoreRefs[t]=e,s},t.mixin({beforeCreate:function(){this._firestoreUnbinds=Object.create(null),this.$firestoreRefs=Object.create(null)},created:function(){var t=this.$options.firestore,e="function"==typeof t?t.call(this):t;if(e)for(var n in e)this[i](n,e[n],r)},beforeDestroy:function(){for(var t in this._firestoreUnbinds)this._firestoreUnbinds[t]();this._firestoreUnbinds=null,this.$firestoreRefs=null}})}},iUbK:function(t,e,n){var r=n("7KvD").navigator;t.exports=r&&r.userAgent||""},"jKW+":function(t,e,n){"use strict";var r=n("kM2E"),i=n("qARP"),o=n("dNDb");r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},kM2E:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("+ZMJ"),s=n("hJx8"),a=n("D2L2"),c=function(t,e,n){var u,l,h,f=t&c.F,d=t&c.G,p=t&c.S,v=t&c.P,m=t&c.B,g=t&c.W,y=d?i:i[e]||(i[e]={}),b=y.prototype,w=d?r:p?r[e]:(r[e]||{}).prototype;for(u in d&&(n=e),n)(l=!f&&w&&void 0!==w[u])&&a(y,u)||(h=l?w[u]:n[u],y[u]=d&&"function"!=typeof w[u]?n[u]:m&&l?o(h,r):g&&w[u]==h?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):v&&"function"==typeof h?o(Function.call,h):h,v&&((y.virtual||(y.virtual={}))[u]=h,t&c.R&&b&&!b[u]&&s(b,u,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},knuC:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},msXi:function(t,e,n){var r=n("77Pl");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},qARP:function(t,e,n){"use strict";var r=n("lOnJ");t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},qio6:function(t,e,n){var r=n("evD5"),i=n("77Pl"),o=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),a=s.length,c=0;a>c;)r.f(t,n=s[c++],e[n]);return t}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},t6Iv:function(t,e,n){"use strict";var r=n("a7sP"),i=n("xq9A"),o=n("gZMR"),s=n("28tl");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new o.b("@firebase/firestore");function l(t){u.setLogLevel(t)}function h(t,...e){if(u.logLevel<=o.a.DEBUG){const n=e.map(p);u.debug(`Firestore (${c}): ${t}`,...n)}}function f(t,...e){if(u.logLevel<=o.a.ERROR){const n=e.map(p);u.error(`Firestore (${c}): ${t}`,...n)}}function d(t,...e){if(u.logLevel<=o.a.WARN){const n=e.map(p);u.warn(`Firestore (${c}): ${t}`,...n)}}function p(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw f(e),new Error(e)}function m(t,e){t||v()}function g(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y="ok",b="cancelled",w="unknown",_="invalid-argument",E="deadline-exceeded",T="not-found",A="already-exists",S="permission-denied",k="unauthenticated",x="resource-exhausted",C="failed-precondition",O="aborted",I="out-of-range",D="unimplemented",N="internal",R="unavailable",L="data-loss";class P extends s.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class M{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(a.UNAUTHENTICATED))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class V{constructor(t,e,n){this.type="FirstParty",this.user=a.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class U{constructor(t,e,n){this.t=t,this.i=e,this.o=n}getToken(){return Promise.resolve(new V(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable(()=>e(a.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class B{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class H{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof H&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===z.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof z?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class K extends z{construct(t,e,n){return new K(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(_,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new K(e)}static emptyPath(){return new K([])}}const G=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends z{construct(t,e,n){return new W(t,e,n)}static isValidIdentifier(t){return G.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(_,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(_,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(_,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new P(_,"Unterminated ` in path: "+t);return new W(e)}static emptyPath(){return new W([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.path=t}static fromPath(t){return new X(K.fromString(t))}static fromName(t){return new X(K.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===K.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return K.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new X(new K(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){if(!n)throw new P(_,`Function ${t}() cannot be called with an empty ${e}.`)}function Y(t){if(!X.isDocumentKey(t))throw new P(_,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Q(t){if(X.isDocumentKey(t))throw new P(_,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Z(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(_,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Z(t);throw new P(_,`Expected type '${e.name}', but it was: ${n}`)}}return t}function et(t,e){if(e<=0)throw new P(_,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return null==t}function rt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,st;function at(t){if(void 0===t)return f("RPC_ERROR","HTTP error has no status"),w;switch(t){case 200:return y;case 400:return C;case 401:return k;case 403:return S;case 404:return T;case 409:return O;case 416:return I;case 429:return x;case 499:return b;case 500:return w;case 501:return D;case 503:return R;case 504:return E;default:return t>=200&&t<300?y:t>=400&&t<500?C:t>=500&&t<600?N:w}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(st=ot||(ot={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";class ct extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.h=e+"://"+t.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(t,e,n,r,i){const o=this.p(t,e);h("RestConnection","Sending: ",o,n);const s={};return this.g(s,r,i),this.v(t,o,s,n).then(t=>(h("RestConnection","Received: ",t),t),e=>{throw d("RestConnection",`${t} failed with error: `,e,"url: ",o,"request:",n),e})}T(t,e,n,r,i){return this.m(t,e,n,r,i)}g(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+c,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}p(t,e){const n=it[t];return`${this.h}/v1/${e}:${n}`}}{constructor(t,e){super(t),this.I=e}A(t,e){throw new Error("Not supported by FetchConnection")}async v(t,e,n,r){const i=JSON.stringify(r);let o;try{o=await this.I(e,{method:"POST",headers:n,body:i})}catch(t){throw new P(at(t.status),"Request failed with error: "+t.statusText)}if(!o.ok)throw new P(at(o.status),"Request failed with error: "+o.statusText);return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ut(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ht(t,e){return t<e?-1:t>e?1:0}function ft(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(_,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(_,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new P(_,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(_,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new dt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ht(this.nanoseconds,t.nanoseconds):ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new pt(t)}static min(){return new pt(new dt(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.fields=t,t.sort(W.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ft(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new yt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const bt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(t){if(m(!!t),"string"==typeof t){let e=0;const n=bt.exec(t);if(m(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Et(t){return"string"==typeof t?yt.fromBase64String(t):yt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function At(t){const e=wt(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tt(t)?4:10:v()}function kt(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return At(t).isEqual(At(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=wt(t.timestampValue),r=wt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Et(t.bytesValue).isEqual(Et(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _t(t.geoPointValue.latitude)===_t(e.geoPointValue.latitude)&&_t(t.geoPointValue.longitude)===_t(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _t(t.integerValue)===_t(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_t(t.doubleValue),r=_t(e.doubleValue);return n===r?rt(n)===rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ft(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(vt(n)!==vt(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!kt(n[t],r[t])))return!1;return!0}(t,e);default:return v()}}function xt(t,e){return void 0!==(t.values||[]).find(t=>kt(t,e))}function Ct(t,e){if(t===e)return 0;const n=St(t),r=St(e);if(n!==r)return ht(n,r);switch(n){case 0:return 0;case 1:return ht(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_t(t.integerValue||t.doubleValue),r=_t(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ot(t.timestampValue,e.timestampValue);case 4:return Ot(At(t),At(e));case 5:return ht(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Et(t),r=Et(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=ht(n[t],r[t]);if(0!==e)return e}return ht(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ht(_t(t.latitude),_t(e.latitude));return 0!==n?n:ht(_t(t.longitude),_t(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Ct(n[t],r[t]);if(e)return e}return ht(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let t=0;t<r.length&&t<o.length;++t){const e=ht(r[t],o[t]);if(0!==e)return e;const s=Ct(n[r[t]],i[o[t]]);if(0!==s)return s}return ht(r.length,o.length)}(t.mapValue,e.mapValue);default:throw v()}}function Ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ht(t,e);const n=wt(t),r=wt(e),i=ht(n.seconds,r.seconds);return 0!==i?i:ht(n.nanos,r.nanos)}function It(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dt(t){return!!t&&"arrayValue"in t}function Nt(t){return!!t&&"nullValue"in t}function Rt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lt(t){return!!t&&"mapValue"in t}function Pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Pt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!Lt(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pt(e)}setAll(t){let e=W.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Pt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Lt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Lt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){mt(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new $t(Pt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new jt(t,0,pt.min(),$t.empty(),0)}static newFoundDocument(t,e,n){return new jt(t,1,e,n,0)}static newNoDocument(t,e){return new jt(t,2,e,$t.empty(),0)}static newUnknownDocument(t,e){return new jt(t,3,e,$t.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function Ft(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Mt(t,e,n,r,i,o,s)}class Vt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Ut(t,e,n):"array-contains"===e?new zt(t,n):"in"===e?new Kt(t,n):"not-in"===e?new Gt(t,n):"array-contains-any"===e?new Wt(t,n):new Vt(t,e,n)}static V(t,e,n){return"in"===e?new Bt(t,n):new qt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.D(Ct(e,this.value)):null!==e&&St(this.value)===St(e)&&this.D(Ct(e,this.value))}D(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ut extends Vt{constructor(t,e,n){super(t,e,n),this.key=X.fromName(n.referenceValue)}matches(t){const e=X.comparator(t.key,this.key);return this.D(e)}}class Bt extends Vt{constructor(t,e){super(t,"in",e),this.keys=Ht("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qt extends Vt{constructor(t,e){super(t,"not-in",e),this.keys=Ht("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ht(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>X.fromName(t.referenceValue))}class zt extends Vt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dt(e)&&xt(e.arrayValue,this.value)}}class Kt extends Vt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xt(this.value.arrayValue,e)}}class Gt extends Vt{constructor(t,e){super(t,"not-in",e)}matches(t){if(xt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xt(this.value.arrayValue,e)}}class Wt extends Vt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>xt(this.value.arrayValue,t))}}class Xt{constructor(t,e){this.position=t,this.before=e}}class Jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Qt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.$=null,this.S=null,this.startAt,this.endAt}}function te(t){return!nt(t.limit)&&"L"===t.limitType}function ee(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ne(t){for(const e of t.filters)if(e.N())return e.field;return null}function re(t){return null!==t.collectionGroup}function ie(t){const e=g(t);if(null===e.$){e.$=[];const t=ne(e),n=ee(e);if(null!==t&&null===n)t.isKeyField()||e.$.push(new Jt(t)),e.$.push(new Jt(W.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.$.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new Jt(W.keyField(),t))}}}return e.$}function oe(t){const e=g(t);if(!e.S)if("F"===e.limitType)e.S=Ft(e.path,e.collectionGroup,ie(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ie(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Jt(n.field,e))}const n=e.endAt?new Xt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Xt(e.startAt.position,!e.startAt.before):null;e.S=Ft(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?{integerValue:""+e}:function(t,e){if(t.F){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rt(e)?"-0":e}}(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this._=void 0}}class ce extends ae{}class ue extends ae{constructor(t){super(),this.elements=t}}class le extends ae{constructor(t){super(),this.elements=t}}class he extends ae{constructor(t,e){super(),this.q=t,this.O=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.field=t,this.transform=e}}class de{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new de}static exists(t){return new de(void 0,t)}static updateTime(t){return new de(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class pe{}class ve extends pe{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class me extends pe{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class ge extends pe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class ye extends pe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={asc:"ASCENDING",desc:"DESCENDING"},we={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class _e{constructor(t,e){this.databaseId=t,this.F=e}}function Ee(t,e){return t.F?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Te(t){return m(!!t),pt.fromTimestamp(function(t){const e=wt(t);return new dt(e.seconds,e.nanos)}(t))}function Ae(t,e){return function(t){return new K(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Se(t,e){return Ae(t.databaseId,e.path)}function ke(t,e){const n=function(t){const e=K.fromString(t);return m(Le(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new P(_,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(_,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function xe(t,e){return Ae(t.databaseId,e)}function Ce(t){return new K(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oe(t,e,n){return{name:Se(t,e),fields:n.value.mapValue.fields}}function Ie(t,e){let n;if(e instanceof ve)n={update:Oe(t,e.key,e.value)};else if(e instanceof ge)n={delete:Se(t,e.key)};else if(e instanceof me)n={update:Oe(t,e.key,e.data),updateMask:function(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof ye))return v();n={verify:Se(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){const n=e.transform;if(n instanceof ce)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ue)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof le)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof he)return{fieldPath:e.field.canonicalString(),increment:n.O};throw v()})(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:function(t,e){return Ee(t,e.toTimestamp())}(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function De(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=xe(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xe(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>(function(t){if("=="===t.op){if(Rt(t.value))return{unaryFilter:{field:Re(t.field),op:"IS_NAN"}};if(Nt(t.value))return{unaryFilter:{field:Re(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Rt(t.value))return{unaryFilter:{field:Re(t.field),op:"IS_NOT_NAN"}};if(Nt(t.value))return{unaryFilter:{field:Re(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(t.field),op:function(t){return we[t]}(t.op),value:t.value}}})(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>(function(t){return{field:Re(t.field),direction:function(t){return be[t]}(t.dir)}})(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.F||nt(e)?e:{value:e}}(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=Ne(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ne(e.endAt)),n}function Ne(t){return{before:t.before,values:t.position}}function Re(t){return{fieldPath:t.canonicalString()}}function Le(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return new _e(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e,n=1e3,r=1.5,i=6e4){this.C=t,this.timerId=e,this.L=n,this.U=r,this.k=i,this.j=0,this.M=null,this.B=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.k}W(t){this.cancel();const e=Math.floor(this.j+this.Y()),n=Math.max(0,Date.now()-this.B),r=Math.max(0,e-n);r>0&&h("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.j} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.M=this.C.enqueueAfterDelay(this.timerId,r,()=>(this.B=Date.now(),t())),this.j*=this.U,this.j<this.L&&(this.j=this.L),this.j>this.k&&(this.j=this.k)}H(){null!==this.M&&(this.M.skipDelay(),this.M=null)}cancel(){null!==this.M&&(this.M.cancel(),this.M=null)}Y(){return(Math.random()-.5)*this.j}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.K=n,this.q=r,this.J=!1}X(){if(this.J)throw new P(C,"The client has already been terminated.")}m(t,e,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.K.m(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===k&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(w,t.toString())})}T(t,e,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.K.T(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===k&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(w,t.toString())})}terminate(){this.J=!0}}async function Me(t,e){const n=g(t),r=Ce(n.q)+"/documents",i={writes:e.map(t=>Ie(n.q,t))};await n.m("Commit",r,i)}async function Fe(t,e){const n=g(t),r=Ce(n.q)+"/documents",i={documents:e.map(t=>Se(n.q,t))},o=await n.T("BatchGetDocuments",r,i),s=new Map;o.forEach(t=>{const e=function(t,e){return"found"in e?function(t,e){m(!!e.found),e.found.name,e.found.updateTime;const n=ke(t,e.found.name),r=Te(e.found.updateTime),i=new $t({mapValue:{fields:e.found.fields}});return jt.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){m(!!e.missing),m(!!e.readTime);const n=ke(t,e.missing),r=Te(e.readTime);return jt.newNoDocument(n,r)}(t,e):v()}(n.q,t);s.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=s.get(t.toString());m(!!e),a.push(e)}),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=new Map;function Ue(t){if(t._terminated)throw new P(C,"The client has already been terminated.");if(!Ve.has(t)){h("ComponentProvider","Initializing Datastore");const o=function(t){return new ct(t,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new q(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=Pe(t._databaseId),a=function(t,e,n,r){return new je(t,e,o,s)}(t._authCredentials,t._appCheckCredentials);Ve.set(t,a)}var e,n,r,i;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return Ve.get(t)}class Be{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new P(_,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new P(_,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new P(_,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Be({}),this._settingsFrozen=!1,t instanceof H?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(_,'"projectId" not provided in firebase.initializeApp.');return new H(t.options.projectId)}(t))}get app(){if(!this._app)throw new P(C,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(C,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Be(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new M;switch(t.type){case"gapi":const e=t.client;return m(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new U(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new P(_,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ve.get(t);e&&(h("ComponentProvider","Removing Datastore"),Ve.delete(t),e.terminate())}(this),Promise.resolve()}}function He(t,e){const n=Object(r._getProvider)(t,"firestore/lite");if(n.isInitialized())throw new P(C,"Firestore can only be initialized once per app.");return n.initialize({options:e})}function ze(t=Object(r.getApp)()){return Object(r._getProvider)(t,"firestore/lite").getImmediate()}function Ke(t,e,n,r={}){var i;const o=(t=tt(t,qe))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&d("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=a.MOCK_USER;else{e=Object(s.e)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new P(_,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(o)}t._authCredentials=new F(new j(e,n))}}function Ge(t){return t=tt(t,qe),Object(r._removeServiceInstance)(t.app,"firestore/lite"),t._delete()
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class We{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Je(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new We(this.firestore,t,this._key)}}class Xe{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Xe(this.firestore,t,this._query)}}class Je extends Xe{constructor(t,e,n){super(t,e,new Zt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new We(this.firestore,null,new X(t))}withConverter(t){return new Je(this.firestore,t,this._path)}}function Ye(t,e,...n){if(t=Object(s.i)(t),J("collection","path",e),t instanceof qe){const r=K.fromString(e,...n);return Q(r),new Je(t,null,r)}{if(!(t instanceof We||t instanceof Je))throw new P(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(K.fromString(e,...n));return Q(r),new Je(t.firestore,null,r)}}function Qe(t,e){if(t=tt(t,qe),J("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new P(_,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Xe(t,null,function(t){return new Zt(K.emptyPath(),t)}(e))}function Ze(t,e,...n){if(t=Object(s.i)(t),1===arguments.length&&(e=lt.R()),J("doc","path",e),t instanceof qe){const r=K.fromString(e,...n);return Y(r),new We(t,null,new X(r))}{if(!(t instanceof We||t instanceof Je))throw new P(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(K.fromString(e,...n));return Y(r),new We(t.firestore,t instanceof Je?t.converter:null,new X(r))}}function tn(t,e){return t=Object(s.i)(t),e=Object(s.i)(e),(t instanceof We||t instanceof Je)&&(e instanceof We||e instanceof Je)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function en(t,e){return t=Object(s.i)(t),e=Object(s.i)(e),t instanceof Xe&&e instanceof Xe&&t.firestore===e.firestore&&function(t,e){return function(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!kt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qt(t.startAt,e.startAt)&&Qt(t.endAt,e.endAt)}(oe(t),oe(e))&&t.limitType===e.limitType}(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class nn{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(_,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function rn(){return new nn("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(yt.fromBase64String(t))}catch(t){throw new P(_,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new on(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(_,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(_,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ht(this._lat,t._lat)||ht(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=/^__.*__$/;class un{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new me(t,this.data,this.fieldMask,e,this.fieldTransforms):new ve(t,this.data,e,this.fieldTransforms)}}class ln{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new me(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hn(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class fn{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.q=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(t){return new fn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nt({path:n,rt:!1});return r.st(t),r}it(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nt({path:n,rt:!1});return r.Z(),r}ot(t){return this.nt({path:void 0,rt:!0})}ut(t){return Nn(t,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Z(){if(this.path)for(let t=0;t<this.path.length;t++)this.st(this.path.get(t))}st(t){if(0===t.length)throw this.ut("Document fields must not be empty");if(hn(this.tt)&&cn.test(t))throw this.ut('Document fields cannot begin and end with "__"')}}class dn{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.q=n||Pe(t)}ht(t,e,n,r=!1){return new fn({tt:t,methodName:e,at:n,path:W.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function pn(t){const e=t._freezeSettings(),n=Pe(t._databaseId);return new dn(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vn(t,e,n,r,i,o={}){const s=t.ht(o.merge||o.mergeFields?2:0,e,n,i);Cn("Data must be an object, but it was:",s,r);const a=kn(r,s);let c,u;if(o.merge)c=new gt(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=On(e,r,n);if(!s.contains(i))throw new P(_,`Field '${i}' is specified in your field mask but missing from your input data.`);Rn(t,i)||t.push(i)}c=new gt(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new un(new $t(a),c,u)}class mn extends sn{_toFieldTransform(t){if(2!==t.tt)throw 1===t.tt?t.ut(`${this._methodName}() can only appear at the top level of your update data`):t.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mn}}function gn(t,e,n){return new fn({tt:3,at:e.settings.at,methodName:t._methodName,rt:n},e.databaseId,e.q,e.ignoreUndefinedProperties)}class yn extends sn{_toFieldTransform(t){return new fe(t.path,new ce)}isEqual(t){return t instanceof yn}}class bn extends sn{constructor(t,e){super(t),this.lt=e}_toFieldTransform(t){const e=gn(this,t,!0),n=this.lt.map(t=>Sn(t,e)),r=new ue(n);return new fe(t.path,r)}isEqual(t){return this===t}}class wn extends sn{constructor(t,e){super(t),this.lt=e}_toFieldTransform(t){const e=gn(this,t,!0),n=this.lt.map(t=>Sn(t,e)),r=new le(n);return new fe(t.path,r)}isEqual(t){return this===t}}class _n extends sn{constructor(t,e){super(t),this.ft=e}_toFieldTransform(t){const e=new he(t.q,se(t.q,this.ft));return new fe(t.path,e)}isEqual(t){return this===t}}function En(t,e,n,r){const i=t.ht(1,e,n);Cn("Data must be an object, but it was:",i,r);const o=[],a=$t.empty();mt(r,(t,r)=>{const c=Dn(e,t,n);r=Object(s.i)(r);const u=i.it(c);if(r instanceof mn)o.push(c);else{const t=Sn(r,u);null!=t&&(o.push(c),a.set(c,t))}});const c=new gt(o);return new ln(a,c,i.fieldTransforms)}function Tn(t,e,n,r,i,o){const a=t.ht(1,e,n),c=[On(e,r,n)],u=[i];if(o.length%2!=0)throw new P(_,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<o.length;t+=2)c.push(On(e,o[t])),u.push(o[t+1]);const l=[],h=$t.empty();for(let t=c.length-1;t>=0;--t)if(!Rn(l,c[t])){const e=c[t];let n=u[t];n=Object(s.i)(n);const r=a.it(e);if(n instanceof mn)l.push(e);else{const t=Sn(n,r);null!=t&&(l.push(e),h.set(e,t))}}const f=new gt(l);return new ln(h,f,a.fieldTransforms)}function An(t,e,n,r=!1){return Sn(n,t.ht(r?4:3,e))}function Sn(t,e){if(xn(t=Object(s.i)(t)))return Cn("Unsupported field value:",e,t),kn(t,e);if(t instanceof sn)return function(t,e){if(!hn(e.tt))throw e.ut(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ut(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.rt&&4!==e.tt)throw e.ut("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Sn(i,e.ot(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s.i)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return se(e.q,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=dt.fromDate(t);return{timestampValue:Ee(e.q,n)}}if(t instanceof dt){const n=new dt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ee(e.q,n)}}if(t instanceof an)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof on)return{bytesValue:function(t,e){return t.F?e.toBase64():e.toUint8Array()}(e.q,t._byteString)};if(t instanceof We){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ae(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ut(`Unsupported field value: ${Z(t)}`)}(t,e)}function kn(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mt(t,(t,r)=>{const i=Sn(r,e.et(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function xn(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof an||t instanceof on||t instanceof We||t instanceof sn)}function Cn(t,e,n){if(!xn(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Z(n);throw"an object"===r?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function On(t,e,n){if((e=Object(s.i)(e))instanceof nn)return e._internalPath;if("string"==typeof e)return Dn(t,e);throw Nn("Field path arguments must be of type string or ",t,!1,void 0,n)}const In=new RegExp("[~\\*/\\[\\]]");function Dn(t,e,n){if(e.search(In)>=0)throw Nn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nn(...e.split("."))._internalPath}catch(r){throw Nn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nn(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new P(_,a+t+c)}function Rn(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Pn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mn("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Pn extends Ln{data(){return super.data()}}class $n{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}function jn(t,e){return t=Object(s.i)(t),e=Object(s.i)(e),t instanceof Ln&&e instanceof Ln?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof $n&&e instanceof $n&&en(t.query,e.query)&&ft(t.docs,e.docs,jn)}function Mn(t,e){return"string"==typeof e?Dn(t,e):e instanceof nn?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{}function Vn(t,...e){for(const n of e)t=n._apply(t);return t}class Un extends Fn{constructor(t,e,n){super(),this.dt=t,this.wt=e,this.yt=n,this.type="where"}_apply(t){const e=pn(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new P(_,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){nr(s,o);const e=[];for(const n of s)e.push(er(r,t,n));a={arrayValue:{values:e}}}else a=er(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||nr(s,o),a=An(n,"where",s,"in"===o||"not-in"===o);const c=Vt.create(i,o,a);return function(t,e){if(e.N()){const n=ne(t);if(null!==n&&!n.isEqual(e.field))throw new P(_,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=ee(t);null!==r&&rr(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(e.op){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}());if(null!==n)throw n===e.op?new P(_,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(_,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.dt,this.wt,this.yt);return new Xe(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Zt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Bn(t,e,n){const r=e,i=Mn("where",t);return new Un(i,r,n)}class qn extends Fn{constructor(t,e){super(),this.dt=t,this._t=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new P(_,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new P(_,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Jt(e,n);return function(t,e){if(null===ee(t)){const n=ne(t);null!==n&&rr(t,n,e.field)}}(t,r),r}(t._query,this.dt,this._t);return new Xe(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Zt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Hn(t,e="asc"){const n=e,r=Mn("orderBy",t);return new qn(r,n)}class zn extends Fn{constructor(t,e,n){super(),this.type=t,this.gt=e,this.vt=n}_apply(t){return new Xe(t.firestore,t.converter,function(t,e,n){return new Zt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(t._query,this.gt,this.vt))}}function Kn(t){return et("limit",t),new zn("limit",t,"F")}function Gn(t){return et("limitToLast",t),new zn("limitToLast",t,"L")}class Wn extends Fn{constructor(t,e,n){super(),this.type=t,this.bt=e,this.Et=n}_apply(t){const e=tr(t,this.type,this.bt,this.Et);return new Xe(t.firestore,t.converter,function(t,e){return new Zt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Xn(...t){return new Wn("startAt",t,!0)}function Jn(...t){return new Wn("startAfter",t,!1)}class Yn extends Fn{constructor(t,e,n){super(),this.type=t,this.bt=e,this.Et=n}_apply(t){const e=tr(t,this.type,this.bt,this.Et);return new Xe(t.firestore,t.converter,function(t,e){return new Zt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Qn(...t){return new Yn("endBefore",t,!0)}function Zn(...t){return new Yn("endAt",t,!1)}function tr(t,e,n,r){if(n[0]=Object(s.i)(n[0]),n[0]instanceof Ln)return function(t,e,n,r,i){if(!r)throw new P(T,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const n of ie(t))if(n.field.isKeyField())o.push(It(e,r.key));else{const t=r.data.field(n.field);if(Tt(t))throw new P(_,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=n.field.canonicalString();throw new P(_,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}o.push(t)}return new Xt(o,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=pn(t.firestore);return function(t,e,n,r,i,o){const s=t.explicitOrderBy;if(i.length>s.length)throw new P(_,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let o=0;o<i.length;o++){const c=i[o];if(s[o].field.isKeyField()){if("string"!=typeof c)throw new P(_,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!re(t)&&-1!==c.indexOf("/"))throw new P(_,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=t.path.child(K.fromString(c));if(!X.isDocumentKey(n))throw new P(_,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new X(n);a.push(It(e,i))}else{const t=An(n,r,c);a.push(t)}}return new Xt(a,o)}(t._query,t.firestore._databaseId,i,e,n,r)}}function er(t,e,n){if("string"==typeof(n=Object(s.i)(n))){if(""===n)throw new P(_,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!re(e)&&-1!==n.indexOf("/"))throw new P(_,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(K.fromString(n));if(!X.isDocumentKey(r))throw new P(_,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return It(t,new X(r))}if(n instanceof We)return It(t,n._key);throw new P(_,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Z(n)}.`)}function nr(t,e){if(!Array.isArray(t)||0===t.length)throw new P(_,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(_,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function rr(t,e,n){if(!n.isEqual(e))throw new P(_,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}class or extends class{convertValue(t,e="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Et(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return mt(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new an(_t(t.latitude),_t(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function t(e){const n=e.mapValue.fields.__previous_value__;return Tt(n)?t(n):n}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(At(t));default:return null}}convertTimestamp(t){const e=wt(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=K.fromString(t);m(Le(n));const r=new H(n.get(1),n.get(3)),i=new X(n.popFirst(5));return r.isEqual(e)||f(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new We(this.firestore,null,e)}}function sr(t){const e=Ue((t=tt(t,We)).firestore),n=new or(t.firestore);return Fe(e,[t._key]).then(e=>{m(1===e.length);const r=e[0];return new Ln(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)})}function ar(t){!function(t){if(te(t)&&0===t.explicitOrderBy.length)throw new P(D,"limitToLast() queries require specifying at least one orderBy() clause")}((t=tt(t,Xe))._query);const e=Ue(t.firestore),n=new or(t.firestore);return async function(t,e){const n=g(t),r=De(n.q,oe(e));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(t=>!!t.document).map(t=>(function(t,e,n){const r=ke(t,e.name),i=Te(e.updateTime),o=new $t({mapValue:{fields:e.fields}}),s=jt.newFoundDocument(r,i,o);return s})(n.q,t.document))}(e,t._query).then(e=>{const r=e.map(e=>new Pn(t.firestore,n,e.key,e,t.converter));return te(t._query)&&r.reverse(),new $n(t,r)})}function cr(t,e,n){const r=ir((t=tt(t,We)).converter,e,n),i=vn(pn(t.firestore),"setDoc",t._key,r,null!==t.converter,n);return Me(Ue(t.firestore),[i.toMutation(t._key,de.none())])}function ur(t,e,n,...r){const i=pn((t=tt(t,We)).firestore);let o;return o="string"==typeof(e=Object(s.i)(e))||e instanceof nn?Tn(i,"updateDoc",t._key,e,n,r):En(i,"updateDoc",t._key,e),Me(Ue(t.firestore),[o.toMutation(t._key,de.exists(!0))])}function lr(t){return Me(Ue((t=tt(t,We)).firestore),[new ge(t._key,de.none())])}function hr(t,e){const n=Ze(t=tt(t,Je)),r=ir(t.converter,e),i=vn(pn(t.firestore),"addDoc",n._key,r,null!==n.converter,{});return Me(Ue(t.firestore),[i.toMutation(n._key,de.exists(!1))]).then(()=>n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return new mn("deleteField")}function dr(){return new yn("serverTimestamp")}function pr(...t){return new bn("arrayUnion",t)}function vr(...t){return new wn("arrayRemove",t)}function mr(t){return new _n("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=pn(t)}set(t,e,n){this._verifyNotCommitted();const r=yr(t,this._firestore),i=ir(r.converter,e,n),o=vn(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,de.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=yr(t,this._firestore);let o;return o="string"==typeof(e=Object(s.i)(e))||e instanceof nn?Tn(this._dataReader,"WriteBatch.update",i._key,e,n,r):En(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,de.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=yr(t,this._firestore);return this._mutations=this._mutations.concat(new ge(e._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(C,"A write batch can no longer be used after commit() has been called.")}}function yr(t,e){if((t=Object(s.i)(t)).firestore!==e)throw new P(_,"Provided document reference is from a different Firestore instance.");return t}function br(t){const e=Ue(t=tt(t,qe));return new gr(t,t=>Me(e,t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new P(_,"Firestore transactions require all reads to be executed before all writes.");const e=await Fe(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new ge(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=X.fromPath(e);this.mutations.push(new ye(n,this.precondition(n)))}),await Me(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=pt.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new P(O,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?de.updateTime(e):de.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(pt.min()))throw new P(_,"Can't update a document that doesn't exist.");return de.updateTime(e)}return de.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.Tt=5,this.It=new $e(this.asyncQueue,"transaction_retry")}run(){this.Tt-=1,this.At()}At(){this.It.W(async()=>{const t=new wr(this.datastore),e=this.Rt(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.Pt(t)}))}).catch(t=>{this.Pt(t)})})}Rt(t){try{const e=this.updateFunction(t);return!nt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pt(t){this.Tt>0&&this.Vt(t)?(this.Tt-=1,this.asyncQueue.enqueueAndForget(()=>(this.At(),Promise.resolve()))):this.deferred.reject(t)}Vt(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!function(t){switch(e){default:return v();case b:case w:case E:case x:case N:case R:case k:return!1;case _:case T:case A:case S:case C:case O:case I:case D:case L:return!0}}()}return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new $,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Tr(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(b,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.Dt=Promise.resolve(),this.Nt=[],this.$t=!1,this.St=[],this.Ft=null,this.xt=!1,this.qt=!1,this.Ot=[],this.It=new $e(this,"async_queue_retry"),this.Ct=(()=>{const t=Er();t&&h("AsyncQueue","Visibility state changed to "+t.visibilityState),this.It.H()});const t=Er();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ct)}get isShuttingDown(){return this.$t}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Lt(),this.Ut(t)}enterRestrictedMode(t){if(!this.$t){this.$t=!0,this.qt=t||!1;const e=Er();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ct)}}enqueue(t){if(this.Lt(),this.$t)return new Promise(()=>{});const e=new $;return this.Ut(()=>this.$t&&this.qt?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Nt.push(t),this.kt()))}async kt(){if(0!==this.Nt.length){try{await this.Nt[0](),this.Nt.shift(),this.It.reset()}catch(t){if(!
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))throw t;h("AsyncQueue","Operation failed with retryable error: "+t)}this.Nt.length>0&&this.It.W(()=>this.kt())}}Ut(t){const e=this.Dt.then(()=>(this.xt=!0,t().catch(t=>{throw this.Ft=t,this.xt=!1,f("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.xt=!1,t))));return this.Dt=e,e}enqueueAfterDelay(t,e,n){this.Lt(),this.Ot.indexOf(t)>-1&&(e=0);const r=Tr.createAndSchedule(this,t,e,n,t=>this.jt(t));return this.St.push(r),r}Lt(){this.Ft&&v()}verifyOperationInProgress(){}async Mt(){let t;do{t=this.Dt,await t}while(t!==this.Dt)}Bt(t){for(const e of this.St)if(e.timerId===t)return!0;return!1}zt(t){return this.Mt().then(()=>{this.St.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.St)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Mt()})}Gt(t){this.Ot.push(t)}jt(t){const e=this.St.indexOf(t);this.St.splice(e,1)}}class Sr{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=pn(t)}get(t){const e=yr(t,this._firestore),n=new or(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return v();const r=t[0];if(r.isFoundDocument())return new Ln(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Ln(this._firestore,n,e._key,null,e.converter);throw v()})}set(t,e,n){const r=yr(t,this._firestore),i=ir(r.converter,e,n),o=vn(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,o),this}update(t,e,n,...r){const i=yr(t,this._firestore);let o;return o="string"==typeof(e=Object(s.i)(e))||e instanceof nn?Tn(this._dataReader,"Transaction.update",i._key,e,n,r):En(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=yr(t,this._firestore);return this._transaction.delete(e._key),this}}function kr(t,e){const n=Ue(t=tt(t,qe)),r=new $;return new _r(new Ar,n,n=>e(new Sr(t,n)),r).run(),r.promise}var xr;xr=`${r.SDK_VERSION}_lite`,c=xr,Object(r._registerComponent)(new i.a("firestore/lite",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new qe(n,new class{constructor(t){this.auth=null,t.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(m("string"==typeof t.accessToken),new j(t.accessToken,new a(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}(t.getProvider("auth-internal")),new class{constructor(t){this.u=t,this.appCheck=null,t.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(m("string"==typeof t.token),new B(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}(t.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),Object(r.registerVersion)("firestore-lite","3.4.4",""),Object(r.registerVersion)("firestore-lite","3.4.4","esm2017"),n.d(e,!1,function(){return on}),n.d(e,!1,function(){return Je}),n.d(e,!1,function(){return We}),n.d(e,!1,function(){return Ln}),n.d(e,!1,function(){return nn}),n.d(e,!1,function(){return sn}),n.d(e,!1,function(){return qe}),n.d(e,!1,function(){return P}),n.d(e,!1,function(){return an}),n.d(e,!1,function(){return Xe}),n.d(e,!1,function(){return Fn}),n.d(e,!1,function(){return Pn}),n.d(e,!1,function(){return $n}),n.d(e,!1,function(){return dt}),n.d(e,!1,function(){return Sr}),n.d(e,!1,function(){return gr}),n.d(e,!1,function(){return hr}),n.d(e,!1,function(){return vr}),n.d(e,!1,function(){return pr}),n.d(e,"a",function(){return Ye}),n.d(e,!1,function(){return Qe}),n.d(e,!1,function(){return Ke}),n.d(e,!1,function(){return lr}),n.d(e,!1,function(){return fr}),n.d(e,!1,function(){return Ze}),n.d(e,!1,function(){return rn}),n.d(e,!1,function(){return Zn}),n.d(e,!1,function(){return Qn}),n.d(e,!1,function(){return sr}),n.d(e,"b",function(){return ar}),n.d(e,"c",function(){return ze}),n.d(e,!1,function(){return mr}),n.d(e,!1,function(){return He}),n.d(e,!1,function(){return Kn}),n.d(e,!1,function(){return Gn}),n.d(e,!1,function(){return Hn}),n.d(e,!1,function(){return Vn}),n.d(e,!1,function(){return en}),n.d(e,!1,function(){return tn}),n.d(e,!1,function(){return kr}),n.d(e,!1,function(){return dr}),n.d(e,!1,function(){return cr}),n.d(e,!1,function(){return l}),n.d(e,!1,function(){return jn}),n.d(e,!1,function(){return Jn}),n.d(e,!1,function(){return Xn}),n.d(e,!1,function(){return Ge}),n.d(e,!1,function(){return ur}),n.d(e,!1,function(){return Bn}),n.d(e,!1,function(){return br})},t8x9:function(t,e,n){var r=n("77Pl"),i=n("lOnJ"),o=n("dSzd")("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},"vIB/":function(t,e,n){"use strict";var r=n("O4g8"),i=n("kM2E"),o=n("880/"),s=n("hJx8"),a=n("/bQp"),c=n("94VQ"),u=n("e6n0"),l=n("PzxK"),h=n("dSzd")("iterator"),f=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,p,v,m,g){c(n,e,p);var y,b,w,_=function(t){if(!f&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",T="values"==v,A=!1,S=t.prototype,k=S[h]||S["@@iterator"]||v&&S[v],x=k||_(v),C=v?T?_("entries"):x:void 0,O="Array"==e&&S.entries||k;if(O&&(w=l(O.call(new t)))!==Object.prototype&&w.next&&(u(w,E,!0),r||"function"==typeof w[h]||s(w,h,d)),T&&k&&"values"!==k.name&&(A=!0,x=function(){return k.call(this)}),r&&!g||!f&&!A&&S[h]||s(S,h,x),a[e]=x,a[E]=d,v)if(y={values:T?x:_("values"),keys:m?x:_("keys"),entries:C},g)for(b in y)b in S||o(S,b,y[b]);else i(i.P+i.F*(f||A),e,y);return y}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xGkn:function(t,e,n){"use strict";var r=n("4mcu"),i=n("EGZi"),o=n("/bQp"),s=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},"xH/j":function(t,e,n){var r=n("hJx8");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},xq9A:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var r=n("28tl");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},zBsV:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return rr}),n.d(e,"b",function(){return or}),n.d(e,"c",function(){return ir}),n.d(e,"d",function(){return ar}),n.d(e,"e",function(){return sr}),n.d(e,"f",function(){return cr}),n.d(e,"g",function(){return ur}),n.d(e,"h",function(){return er}),n.d(e,"i",function(){return nr});var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var h="closure_uid_"+(1e9*Math.random()>>>0),f=0;function d(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function v(t,e,n){return(v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:p).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function g(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function y(){this.s=this.s,this.o=this.o}var b={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,h)&&t[h]||(t[h]=++f)}(this);delete b[t]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"==typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function E(t){return Array.prototype.concat.apply([],arguments)}function T(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var S,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function C(t,e){return t<e?-1:t>e?1:0}t:{var O=a.navigator;if(O){var I=O.userAgent;if(I){S=I;break t}}S=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function N(t){const e={};for(const n in t)e[n]=t[n];return e}var R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e])t[n]=r[n];for(let e=0;e<R.length;e++)n=R[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function P(t){return P[" "](t),t}P[" "]=c;var $,j,M=x(S,"Opera"),F=x(S,"Trident")||x(S,"MSIE"),V=x(S,"Edge"),U=V||F,B=x(S,"Gecko")&&!(x(S.toLowerCase(),"webkit")&&!x(S,"Edge"))&&!(x(S,"Trident")||x(S,"MSIE"))&&!x(S,"Edge"),q=x(S.toLowerCase(),"webkit")&&!x(S,"Edge");function H(){var t=a.document;return t?t.documentMode:void 0}t:{var z="",K=(j=S,B?/rv:([^\);]+)(\)|;)/.exec(j):V?/Edge\/([\d\.]+)/.exec(j):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j):q?/WebKit\/(\S+)/.exec(j):M?/(?:Version)[ \/]?(\S+)/.exec(j):void 0);if(K&&(z=K?K[1]:""),F){var G=H();if(null!=G&&G>parseFloat(z)){$=String(G);break t}}$=z}var W,X={};function J(){return t=function(){let t=0;const e=k(String($)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=C(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||C(0==i[2].length,0==o[2].length)||C(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t},e=X,Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9);var t,e}if(a.document&&F){var Y=H();W=Y||(parseInt($,10)||void 0)}else W=void 0;var Q=W,Z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(t){}return t}();function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function et(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{P(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:nt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.Z.h.call(this)}}tt.prototype.h=function(){this.defaultPrevented=!0},g(et,tt);var nt={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),it=0;function ot(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function st(t){this.src=t,this.g={},this.h=0}function at(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=w(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ot(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ct(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=ct(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):((e=new function(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++it,this.ca=this.fa=!1}(e,this.src,o,!!r,i)).fa=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),lt={};function ht(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)t(e,n[s],r,i,o);return null}r=yt(r);return e&&e[rt]?e.O(n,r,l(i)?!!i.capture:!!i,o):ft(e,n,r,!0,i,o)}(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)ht(t,e[o],n,r,i);return null}return n=yt(n),t&&t[rt]?t.N(e,n,l(r)?!!r.capture:!!r,i):ft(t,e,n,!1,r,i)}function ft(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=mt(t);if(a||(t[ut]=a=new st(t)),(n=a.add(e,n,r,s,o)).proxy)return n;if(r=function(){var t=vt;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Z||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function dt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[rt])at(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mt(e))?(at(n,t),0==n.h&&(n.src=null,e[ut]=null)):ot(t)}}}function pt(t){return t in lt?lt[t]:lt[t]="on"+t}function vt(t,e){if(t.ca)t=!0;else{e=new et(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&dt(t),t=n.call(r,e)}return t}function mt(t){return(t=t[ut])instanceof st?t:null}var gt="__closure_events_fn_"+(1e9*Math.random()>>>0);function yt(t){return"function"==typeof t?t:(t[gt]||(t[gt]=function(e){return t.handleEvent(e)}),t[gt])}function bt(){y.call(this),this.i=new st(this),this.P=this,this.I=null}function wt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;L(e=new tt(r,t),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=_t(s,r,!0,e)&&i}if(i=_t(s=e.g=t,r,!0,e)&&i,i=_t(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)i=_t(s=e.g=n[o],r,!1,e)&&i}function _t(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&at(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}g(bt,y),bt.prototype[rt]=!0,bt.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)t(e,n[s],r,i,o);else i=l(i)?!!i.capture:!!i,r=yt(r),e&&e[rt]?(e=e.i,(n=String(n).toString())in e.g&&-1<(r=ct(s=e.g[n],r,i,o))&&(ot(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete e.g[n],e.h--))):e&&(e=mt(e))&&(n=e.g[n.toString()],e=-1,n&&(e=ct(n,r,i,o)),(r=-1<e?n[e]:null)&&dt(r))}(this,t,e,n,r)},bt.prototype.M=function(){if(bt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ot(n[r]);delete e.g[t],e.h--}}this.I=null},bt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Et=a.JSON.stringify;function Tt(){var t=Ot;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var At,St=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new class{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}},t=>t.reset());function kt(t){a.setTimeout(()=>{throw t},0)}function xt(t,e){At||function(){var t=a.Promise.resolve(void 0);At=function(){t.then(It)}}(),Ct||(At(),Ct=!0),Ot.add(t,e)}var Ct=!1,Ot=new class{constructor(){this.h=this.g=null}add(t,e){const n=St.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function It(){for(var t;t=Tt();){try{t.h.call(t.g)}catch(t){kt(t)}var e=St;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ct=!1}function Dt(t,e){bt.call(this),this.h=t||1,this.g=e||a,this.j=v(this.kb,this),this.l=Date.now()}function Nt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Rt(t,e,n){if("function"==typeof t)n&&(t=v(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=v(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}g(Dt,bt),(r=Dt.prototype).da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),wt(this,"tick"),this.da&&(Nt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Dt.Z.M.call(this),Nt(this),delete this.g};class Lt extends y{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=Rt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(t){y.call(this),this.h=t,this.g={}}g(Pt,y);var $t=[];function jt(t,e,n,r){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var i=0;i<n.length;i++){var o=ht(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Mt(t){D(t.g,function(t,e){this.g.hasOwnProperty(e)&&dt(t)},t),t.g={}}function Ft(){this.g=!0}function Vt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Et(n)}catch(t){return e}}(t,n)+(r?" "+r:"")})}Pt.prototype.M=function(){Pt.Z.M.call(this),Mt(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ft.prototype.Aa=function(){this.g=!1},Ft.prototype.info=function(){};var Ut={},Bt=null;function qt(){return Bt=Bt||new bt}function Ht(t){tt.call(this,Ut.Ma,t)}function zt(t){const e=qt();wt(e,new Ht(e,t))}function Kt(t,e){tt.call(this,Ut.STAT_EVENT,t),this.stat=e}function Gt(t){const e=qt();wt(e,new Kt(e,t))}function Wt(t,e){tt.call(this,Ut.Na,t),this.size=e}function Xt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){t()},e)}Ut.Ma="serverreachability",g(Ht,tt),Ut.STAT_EVENT="statevent",g(Kt,tt),Ut.Na="timingevent",g(Wt,tt);var Jt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qt(){}function Zt(t){return t.h||(t.h=t.i())}function te(){}Qt.prototype.h=null;var ee,ne={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function re(){tt.call(this,"d")}function ie(){tt.call(this,"c")}function oe(){}function se(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Pt(this),this.P=ce,t=U?125:void 0,this.W=new Dt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ae}function ae(){this.i=null,this.g="",this.h=!1}g(re,tt),g(ie,tt),g(oe,Qt),oe.prototype.g=function(){return new XMLHttpRequest},oe.prototype.i=function(){return{}},ee=new oe;var ce=45e3,ue={},le={};function he(t,e,n){t.K=1,t.v=Le(Ce(e)),t.s=n,t.U=!0,fe(t,null)}function fe(t,e){t.F=Date.now(),me(t),t.A=Ce(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ge(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ae,t.g=Wn(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Lt(v(t.Ia,t,t.g),t.O)),jt(t.V,t.g,"readystatechange",t.gb),e=t.H?N(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),zt(1),function(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s})}(t.j,t.u,t.A,t.m,t.X,t.s)}function de(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function pe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if((r=ve(t,n))==le){4==e&&(t.o=4,Gt(14),i=!1),Vt(t.j,t.m,null,"[Incomplete Response]");break}if(r==ue){t.o=4,Gt(15),Vt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Vt(t.j,t.m,r,null),_e(t,r)}de(t)&&r!=le&&r!=ue&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Gt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vn(e),e.L=!0,Gt(11))):(Vt(t.j,t.m,n,"[Invalid Chunked Response]"),we(t),be(t))}function ve(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?le:(n=Number(e.substring(n,r)),isNaN(n)?ue:(r+=1)+n>e.length?le:(e=e.substr(r,n),t.C=r+n,e))}function me(t){t.Y=Date.now()+t.P,ge(t,t.P)}function ge(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Xt(v(t.eb,t),e)}function ye(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function be(t){0==t.l.G||t.I||qn(t.l,t)}function we(t){ye(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Nt(t.W),Mt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _e(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||tn(n.i,t)))if(n.I=t.N,!t.J&&tn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Bn(n),Dn(n)}Fn(n),Gt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Xt(v(n.ab,n),6e3));if(1>=Ze(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else zn(n,11)}else if((t.J||n.g==t)&&Bn(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(en(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Re(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var s=t;if((r=n).oa=Gn(r,r.H?r.la:null,r.W),s.J){nn(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(ye(a),me(a)),r.g=s}else Mn(r);0<n.l.length&&Ln(n)}else"stop"!=u[0]&&"close"!=u[0]||zn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?zn(n,7):In(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}zt(4)}catch(t){}}function Ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)_(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Te(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Te)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ae(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Se(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Se(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Se(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(r=se.prototype).setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Sn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Sn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||U||this.g&&(this.h.h||this.g.ga()||kn(this.g)))){this.I||4!=h||7==e||zt(8==e||0>=f?3:2),ye(this);var n=this.g.ba();this.N=n;e:if(de(this)){var r=kn(this.g);t="";var i=r.length,o=4==Sn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){we(this),be(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,function(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s})}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Gt(12),we(this),be(this);break t}Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_e(this,n)}this.U?(pe(this,h,s),U&&this.i&&3==h&&(jt(this.V,this.W,"tick",this.fb),this.W.start())):(Vt(this.j,this.m,s,null),_e(this,s)),4==h&&we(this),this.i&&!this.I&&(4==h?qn(this.l,this):(this.i=!1,me(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),we(this),be(this)}}}catch(t){}},r.fb=function(){if(this.g){var t=Sn(this.g),e=this.g.ga();this.C<e.length&&(ye(this),pe(this,t,e),this.i&&4!=t&&me(this))}},r.cancel=function(){this.I=!0,we(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.K&&(zt(3),Gt(17)),we(this),this.o=2,be(this)):ge(this,this.Y-t)},(r=Te.prototype).R=function(){Ae(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ae(this),this.g.concat()},r.get=function(t,e){return Se(this.h,t)?this.h[t]:e},r.set=function(t,e){Se(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var ke=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xe){this.g=void 0!==e?e:t.g,Oe(this,t.j),this.s=t.s,Ie(this,t.i),De(this,t.m),this.l=t.l,e=t.h;var n=new qe;n.i=e.i,e.g&&(n.g=new Te(e.g),n.h=e.h),Ne(this,n),this.o=t.o}else t&&(n=String(t).match(ke))?(this.g=!!e,Oe(this,n[1]||"",!0),this.s=Pe(n[2]||""),Ie(this,n[3]||"",!0),De(this,n[4]),this.l=Pe(n[5]||"",!0),Ne(this,n[6]||"",!0),this.o=Pe(n[7]||"")):(this.g=!!e,this.h=new qe(null,this.g))}function Ce(t){return new xe(t)}function Oe(t,e,n){t.j=n?Pe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ie(t,e,n){t.i=n?Pe(e,!0):e}function De(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ne(t,e,n){e instanceof qe?(t.h=e,function(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(ze(this,e),Ge(this,n,t))},t)),t.j=e}(t.h,t.g)):(n||(e=$e(e,Ue)),t.h=new qe(e,t.g))}function Re(t,e,n){t.h.set(e,n)}function Le(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $e(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function je(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push($e(e,Me,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push($e(e,Me,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push($e(n,"/"==n.charAt(0)?Ve:Fe,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$e(n,Be)),t.join("")};var Me=/[#\/\?@]/g,Fe=/[#\?:]/g,Ve=/[#\?]/g,Ue=/[#\?@]/g,Be=/#/g;function qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new Te,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function ze(t,e){He(t),e=We(t,e),Se(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Se((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ae(t)))}function Ke(t,e){return He(t),e=We(t,e),Se(t.g.h,e)}function Ge(t,e,n){ze(t,e),0<n.length&&(t.i=null,t.g.set(We(t,e),T(n)),t.h+=n.length)}function We(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=qe.prototype).add=function(t,e){He(this),this.i=null,t=We(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){He(this),this.g.forEach(function(n,r){_(n,function(n){t.call(e,n,r,this)},this)},this)},r.T=function(){He(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){He(this);var e=[];if("string"==typeof t)Ke(this,t)&&(e=E(e,this.g.get(We(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=E(e,t[n])}return e},r.set=function(t,e){return He(this),this.i=null,Ke(this,t=We(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var Xe=class{constructor(t,e){this.h=t,this.g=e}};function Je(t){this.l=t||Ye,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ye=10;function Qe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ze(t){return t.h?1:t.g?t.g.size:0}function tn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function en(t,e){t.g?t.g.add(e):t.h=e}function nn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function rn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return T(t.i)}function on(){}function sn(t,e,n){const r=n||"";try{Ee(t,function(t,n){let i=t;l(t)&&(i=Et(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function an(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function cn(t){this.l=t.$b||null,this.j=t.ib||!1}function un(t,e){bt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je.prototype.cancel=function(){if(this.i=rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},on.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},on.prototype.parse=function(t){return a.JSON.parse(t,void 0)},g(cn,Qt),cn.prototype.g=function(){return new un(this.l,this.j)},cn.prototype.i=function(t){return function(){return t}}({}),g(un,bt);var ln=0;function hn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dn(t)}function dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=un.prototype).open=function(t,e){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,fn(this)),this.readyState=ln},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fn(this):dn(this),3==this.readyState&&hn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,fn(this))},r.Ta=function(t){this.g&&(this.response=t,fn(this))},r.ha=function(){this.g&&fn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(un.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var pn=a.JSON.parse;function vn(t){bt.call(this),this.headers=new Te,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mn,this.K=this.L=!1}g(vn,bt);var mn="",gn=/^https?$/i,yn=["POST","PUT"];function bn(t){return"content-type"==t.toLowerCase()}function wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_n(t),Tn(t)}function _n(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}function En(t){if(t.h&&void 0!==s&&(!t.C[1]||4!=Sn(t)||2!=t.ba()))if(t.v&&4==Sn(t))Rt(t.Fa,0,t);else if(wt(t,"readystatechange"),4==Sn(t)){t.h=!1;try{const s=t.ba();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.H).match(ke)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!gn.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var c=2<Sn(t)?t.g.statusText:""}catch(t){c=""}t.j=c+" ["+t.ba()+"]",_n(t)}}finally{Tn(t)}}}function Tn(t,e){if(t.g){An(t);const n=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function An(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Sn(t){return t.g?t.g.readyState:0}function kn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case mn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return D(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function Cn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function On(t){this.za=0,this.l=[],this.h=new Ft,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cn("baseRetryDelayMs",5e3,t),this.$a=Cn("retryDelaySeedMs",1e4,t),this.Ya=Cn("forwardChannelMaxRetries",2,t),this.ra=Cn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Je(t&&t.concurrentRequestLimit),this.Ca=new function(){this.g=new on},this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function In(t){if(Nn(t),3==t.G){var e=t.V++,n=Ce(t.F);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),$n(t,n),(e=new se(t,t.h,e,void 0)).K=2,e.v=Le(Ce(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Wn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),me(e)}Kn(t)}function Dn(t){t.g&&(Vn(t),t.g.cancel(),t.g=null)}function Nn(t){Dn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Bn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Rn(t,e){t.l.push(new Xe(t.Za++,e)),3==t.G&&Ln(t)}function Ln(t){Qe(t.i)||t.m||(t.m=!0,xt(t.Ha,t),t.C=0)}function Pn(t,e){var n;n=e?e.m:t.V++;const r=Ce(t.F);Re(r,"SID",t.J),Re(r,"RID",n),Re(r,"AID",t.U),$n(t,r),t.o&&t.s&&xn(r,t.o,t.s),n=new se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=jn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),en(t.i,n),he(n,r,e)}function $n(t,e){t.j&&Ee({},function(t,n){Re(e,n,t)})}function jn(t,e,n){n=Math.min(t.l.length,n);var r=t.j?v(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(0>(n-=e))e=Math.max(0,i[s].h-100),o=!1;else try{sn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function Mn(t){t.g||t.u||(t.Y=1,xt(t.Ga,t),t.A=0)}function Fn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Xt(v(t.Ga,t),Hn(t,t.A)),t.A++,!0)}function Vn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function Un(t){t.g=new se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ce(t.oa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.N?"0":"1"),Re(e,"AID",t.U),$n(t,e),Re(e,"TYPE","xmlhttp"),t.o&&t.s&&xn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Le(Ce(e)),n.s=null,n.U=!0,fe(n,t)}function Bn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function qn(t,e){var n=null;if(t.g==e){Bn(t),Vn(t),t.g=null;var r=2}else{if(!tn(t.i,e))return;n=e.D,nn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;wt(r=qt(),new Wt(r,n,e,i)),Ln(t)}else Mn(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Ze(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Xt(v(t.Ha,t,e),Hn(t,t.C)),t.C++,0)))}(t,e)||2==r&&Fn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)}}function Hn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function zn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=v(t.jb,t);n||(n=new xe("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Oe(n,"https"),Le(n)),function(t,e){const n=new Ft;if(a.Image){const r=new Image;r.onload=m(an,n,r,"TestLoadImage: loaded",!0,e),r.onerror=m(an,n,r,"TestLoadImage: error",!1,e),r.onabort=m(an,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=m(an,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else Gt(2);t.G=0,t.j&&t.j.va(e),Kn(t),Nn(t)}function Kn(t){t.G=0,t.I=-1,t.j&&(0==rn(t.i).length&&0==t.l.length||(t.i.i.length=0,T(t.l),t.l.length=0),t.j.ua())}function Gn(t,e,n){let r=function(t){return t instanceof xe?Ce(t):new xe(t,void 0)}(n);if(""!=r.i)e&&Ie(r,e+"."+r.i),De(r,r.m);else{const t=a.location;r=function(t,e,n,r){var i=new xe(null,void 0);return t&&Oe(i,t),e&&Ie(i,e),n&&De(i,n),r&&(i.l=r),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,function(t,e){Re(r,e,t)}),e=t.D,n=t.sa,e&&n&&Re(r,e,n),Re(r,"VER",t.ma),$n(t,r),r}function Wn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new vn(new cn({ib:!0})):new vn(t.qa)).L=t.H,e}function Xn(){}function Jn(){if(F&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function Yn(t,e){bt.call(this),this.g=new On(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new tr(this)}function Qn(t){re.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Zn(){ie.call(this),this.status=1}function tr(t){this.g=t}(r=vn.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ee.g(),this.C=this.u?Zt(this.u):Zt(ee),this.g.onreadystatechange=v(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void wn(this,t)}t=n||"";const i=new Te(this.headers);r&&Ee(r,function(t,e){i.set(e,t)}),r=function(t){t:{var e=bn;const n=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=w(yn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,e){this.g.setRequestHeader(e,t)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{An(this),0<this.B&&((this.K=function(t){return F&&J()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v(this.pa,this)):this.A=Rt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){wn(this,t)}},r.pa=function(){void 0!==s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Tn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),vn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?En(this):this.cb())},r.cb=function(){En(this)},r.ba=function(){try{return 2<Sn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=On.prototype).ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new se(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?L(o=N(o),this.P):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=jn(this,i,e),Re(n=Ce(this.F),"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),$n(this,n),this.o&&o&&xn(n,this.o,o),en(this.i,i),this.Ra&&Re(n,"TYPE","init"),this.ja?(Re(n,"$req",e),Re(n,"SID","null"),i.$=!0,he(i,n,null)):he(i,n,e),this.G=2}}else 3==this.G&&(t?Pn(this,t):0==this.l.length||Qe(this.i)||Pn(this))},r.Ga=function(){if(this.u=null,Un(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Xt(v(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Gt(10),Dn(this),Un(this))},r.ab=function(){null!=this.v&&(this.v=null,Dn(this),Fn(this),Gt(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Gt(2)):(this.h.info("Failed to ping google.com"),Gt(1))},(r=Xn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Jn.prototype.g=function(t,e){return new Yn(t,e)},g(Yn,bt),Yn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),xt(v(t.hb,t,e))),Gt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Gn(t,null,t.W),Ln(t)},Yn.prototype.close=function(){In(this.g)},Yn.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Rn(this.g,e)}else this.v?((e={}).__data__=Et(t),Rn(this.g,e)):Rn(this.g,t)},Yn.prototype.M=function(){this.g.j=null,delete this.j,In(this.g),delete this.g,Yn.Z.M.call(this)},g(Qn,re),g(Zn,ie),g(tr,Xn),tr.prototype.xa=function(){wt(this.g,"a")},tr.prototype.wa=function(t){wt(this.g,new Qn(t))},tr.prototype.va=function(t){wt(this.g,new Zn(t))},tr.prototype.ua=function(){wt(this.g,"b")},Jn.prototype.createWebChannel=Jn.prototype.g,Yn.prototype.send=Yn.prototype.u,Yn.prototype.open=Yn.prototype.m,Yn.prototype.close=Yn.prototype.close,Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,Yt.COMPLETE="complete",te.EventType=ne,ne.OPEN="a",ne.CLOSE="b",ne.ERROR="c",ne.MESSAGE="d",bt.prototype.listen=bt.prototype.N,vn.prototype.listenOnce=vn.prototype.O,vn.prototype.getLastError=vn.prototype.La,vn.prototype.getLastErrorCode=vn.prototype.Da,vn.prototype.getStatus=vn.prototype.ba,vn.prototype.getResponseJson=vn.prototype.Qa,vn.prototype.getResponseText=vn.prototype.ga,vn.prototype.send=vn.prototype.ea;var er=o.createWebChannelTransport=function(){return new Jn},nr=o.getStatEventTarget=function(){return qt()},rr=o.ErrorCode=Jt,ir=o.EventType=Yt,or=o.Event=Ut,sr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ar=o.FetchXmlHttpFactory=cn,cr=o.WebChannel=te,ur=o.XhrIo=vn}).call(e,n("DuR2"))},zQR9:function(t,e,n){"use strict";var r=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})}});
//# sourceMappingURL=vendor.ff3a630166ba1a363eda.js.map