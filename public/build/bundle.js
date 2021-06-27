var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,s=!1;function c(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function u(t,e){s?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let t=0;t<e.length;t++){const o=c(1,i+1,t=>e[n[t]].claim_order,e[t].claim_order)-1;r[t]=n[o]+1;const a=o+1;n[a]=t,i=Math.max(a,i)}const o=[],a=[];let s=e.length-1;for(let t=n[i]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);s>=t;s--)a.push(e[s]);s--}for(;s>=0;s--)a.push(e[s]);o.reverse(),a.sort((t,e)=>t.claim_order-e.claim_order);for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(a[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function h(t,e,n){s&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function g(){return f("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){t.value=null==e?"":e}function w(t){a=t}function _(t){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(t)}const b=[],x=[],$=[],E=[],k=Promise.resolve();let L=!1;function T(t){$.push(t)}let C=!1;const R=new Set;function U(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];w(e),A(e.$$)}for(w(null),b.length=0;x.length;)x.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];R.has(e)||(R.add(e),e())}$.length=0}while(b.length);for(;E.length;)E.pop()();L=!1,C=!1,R.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const O=new Set;let j;function S(){j={r:0,c:[],p:j}}function N(){j.r||r(j.c),j=j.p}function P(t,e){t&&t.i&&(O.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(O.has(t))return;O.add(t),j.c.push(()=>{O.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function H(t){t&&t.c()}function B(t,n,o,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:h}=t.$$;s&&s.m(n,o),a||T(()=>{const n=c.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]}),h.forEach(T)}function q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(b.push(t),L||(L=!0,k.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,i,o,c,u,h,p=[-1]){const f=a;w(e);const d=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:i.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let g=!1;if(d.ctx=o?o(e,i.props||{},(t,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),g&&D(e,t)),n}):[],d.update(),g=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),i.target){if(i.hydrate){s=!0;const t=function(t){return Array.from(t.childNodes)}(i.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();i.intro&&P(e.$$.fragment),B(e,i.target,i.anchor,i.customElement),s=!1,U()}w(f)}class z{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function K(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var V=K((function(t){var e,n,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var s,c=[],u=!1,h=-1;function l(){u&&s&&(u=!1,s.length?c=s.concat(c):h=-1,c.length&&p())}function p(){if(!u){var t=a(l);u=!0;for(var e=c.length;e;){for(s=c,c=[];++h<e;)s&&s[h].run();h=-1,e=c.length}s=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new f(t,e)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),F=K((function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=d,n=s,r=function(t){return c(s(t))},i=c,o=f,a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(t){for(var e,n=[],r=0,i=0,o="";null!=(e=a.exec(t));){var s=e[0],c=e[1],u=e.index;if(o+=t.slice(i,u),i=u+s.length,c)o+=c[1];else{o&&(n.push(o),o="");var l=e[2],p=e[3],f=e[4],d=e[5],g=e[6],m=e[7],v="+"===g||"*"===g,y="?"===g||"*"===g,w=l||"/",_=f||d||(m?".*":"[^"+w+"]+?");n.push({name:p||r++,prefix:l||"",delimiter:w,optional:y,repeat:v,pattern:h(_)})}}return i<t.length&&(o+=t.substr(i)),o&&n.push(o),n}function c(e){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^"+e[r].pattern+"$"));return function(r){for(var i="",o=r||{},a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,u=o[s.name];if(null==u){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(t(u)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+u+'"');if(0===u.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<u.length;h++){if(c=encodeURIComponent(u[h]),!n[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else{if(c=encodeURIComponent(u),!n[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function p(t){return t.sensitive?"":"i"}function f(t,e){for(var n=(e=e||{}).strict,r=!1!==e.end,i="",o=t[t.length-1],a="string"==typeof o&&/\/$/.test(o),s=0;s<t.length;s++){var c=t[s];if("string"==typeof c)i+=u(c);else{var h=u(c.prefix),l=c.pattern;c.repeat&&(l+="(?:"+h+l+")*"),i+=l=c.optional?h?"(?:"+h+"("+l+"))?":"("+l+")?":h+"("+l+")"}}return n||(i=(a?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=r?"$":n&&a?"":"(?=\\/|$)",new RegExp("^"+i,p(e))}function d(e,n,r){return t(n=n||[])?r||(r={}):(r=n,n=[]),e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return l(t,e)}(e,n):t(e)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(d(t[i],e,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),e)}(e,n,r):function(t,e,n){for(var r=s(t),i=f(r,n),o=0;o<r.length;o++)"string"!=typeof r[o]&&e.push(r[o]);return l(i,e)}(e,n,r)}e.parse=n,e.compile=r,e.tokensToFunction=i,e.tokensToRegExp=o;var g,m="undefined"!=typeof document,v="undefined"!=typeof window,y="undefined"!=typeof history,w=void 0!==V,_=m&&document.ontouchstart?"touchstart":"click",b=v&&!(!window.history.location&&!window.location);function x(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function $(t,e){if("function"==typeof t)return $.call(this,"*",t);if("function"==typeof e)for(var n=new L(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function E(t){if(!t.handled){var e=this._window;(this._hashbang?b&&this._getBase()+e.location.hash.replace("#!",""):b&&e.location.pathname+e.location.search)!==t.canonicalPath&&(this.stop(),t.handled=!1,b&&(e.location.href=t.canonicalPath))}}function k(t,e,n){var r=this.page=n||$,i=r._window,o=r._hashbang,a=r._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(o?"#!":"")+t);var s=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+a.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=t.replace(c,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=m&&i.document.title,this.state=e||{},this.state.path=t,this.querystring=~s?r._decodeURLEncodedURIComponent(t.slice(s+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~s?t.slice(0,s):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var u=this.path.split("#");this.path=this.pathname=u[0],this.hash=r._decodeURLEncodedURIComponent(u[1])||"",this.querystring=this.querystring.split("#")[0]}}function L(t,n,r){var i=this.page=r||T,o=n||{};o.strict=o.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],o)}x.prototype.configure=function(t){var e=t||{};this._window=e.window||v&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&v,this._click=!1!==e.click&&m,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):v&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(_,this.clickHandler,!1):m&&n.document.removeEventListener(_,this.clickHandler,!1),this._hashbang&&v&&!y?n.addEventListener("hashchange",this._onpopstate,!1):v&&n.removeEventListener("hashchange",this._onpopstate,!1)},x.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},x.prototype._getBase=function(){var t=this._base;if(t)return t;var e=v&&this._window&&this._window.location;return v&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},x.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},x.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,b){var r=this._window.location;n=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,e.dispatch)}},x.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(_,this.clickHandler,!1),v&&t.removeEventListener("popstate",this._onpopstate,!1),v&&t.removeEventListener("hashchange",this._onpopstate,!1)}},x.prototype.show=function(t,e,n,r){var i=new k(t,e,this),o=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,o),!1!==i.handled&&!1!==r&&i.pushState(),i},x.prototype.back=function(t,e){var n=this;if(this.len>0){var r=this._window;y&&r.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},x.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&$.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},x.prototype.replace=function(t,e,n,r){var i=new k(t,e,this),o=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==r&&this.dispatch(i,o),i},x.prototype.dispatch=function(t,e){var n=0,r=0,i=this;function o(){var e=i.callbacks[n++];if(t.path===i.current)return e?void e(t,o):E.call(i,t);t.handled=!1}e?function t(){var n=i.exits[r++];if(!n)return o();n(e,t)}():o()},x.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new L(t,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))},x.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var r=0;r<n.length;r++)if(n[r].nodeName&&"A"===n[r].nodeName.toUpperCase()&&n[r].href){e=n[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var i="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&!(i?e.target.baseVal:e.target)&&(i||this.sameOrigin(e.href))){var a=i?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,w&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var s=a,c=this._getBase();0===a.indexOf(c)&&(a=a.substr(c.length)),this._hashbang&&(a=a.replace("#!","")),(!c||s!==a||b&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(s))}}}}},x.prototype._onpopstate=(g=!1,v?(m&&"complete"===document.readyState?g=!0:window.addEventListener("load",(function(){setTimeout((function(){g=!0}),0)})),function(t){if(g)if(t.state){var e=t.state.path;this.replace(e,t.state)}else if(b){var n=this._window.location;this.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}):function(){}),x.prototype._which=function(t){return null==(t=t||v&&this._window.event).which?t.button:t.which},x.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&b)return new URL(t,e.location.toString());if(m){var n=e.document.createElement("a");return n.href=t,n}},x.prototype.sameOrigin=function(t){if(!t||!b)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},x.prototype._samePath=function(t){if(!b)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},x.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},k.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,y&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},k.prototype.save=function(){var t=this.page;y&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},L.prototype.middleware=function(t){var e=this;return function(n,r){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,r);r()}},L.prototype.match=function(t,e){var n=this.keys,r=t.indexOf("?"),i=~r?t.slice(0,r):t,o=this.regexp.exec(decodeURIComponent(i));if(!o)return!1;delete e[0];for(var a=1,s=o.length;a<s;++a){var c=n[a-1],u=this.page._decodeURLEncodedURIComponent(o[a]);void 0===u&&hasOwnProperty.call(e,c.name)||(e[c.name]=u)}return!0};var T=function t(){var e=new x;function n(){return $.apply(e,arguments)}return n.callbacks=e.callbacks,n.exits=e.exits,n.base=e.base.bind(e),n.strict=e.strict.bind(e),n.start=e.start.bind(e),n.stop=e.stop.bind(e),n.show=e.show.bind(e),n.back=e.back.bind(e),n.redirect=e.redirect.bind(e),n.replace=e.replace.bind(e),n.dispatch=e.dispatch.bind(e),n.exit=e.exit.bind(e),n.configure=e.configure.bind(e),n.sameOrigin=e.sameOrigin.bind(e),n.clickHandler=e.clickHandler.bind(e),n.create=t,Object.defineProperty(n,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(n,"current",{get:function(){return e.current},set:function(t){e.current=t}}),n.Context=k,n.Route=L,n}(),C=T,R=T;return C.default=R,C}()}));const G=[];const J=function(e,n=t){let r;const i=[];function a(t){if(o(e,t)&&(e=t,r)){const t=!G.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),G.push(n,e)}if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,s=t){const c=[o,s];return i.push(c),1===i.length&&(r=n(a)||t),o(e),()=>{const t=i.indexOf(c);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}({transactions:[]});function Z(e){let n,r,i,o,a,s,c;return{c(){n=p("li"),r=p("img"),r.src!==(i=e[0].src)&&v(r,"src",i),v(r,"id",o=e[0].id),v(r,"alt",a=e[0].name)},m(t,i){h(t,n,i),u(n,r),s||(c=m(r,"click",e[1]),s=!0)},p(t,[e]){1&e&&r.src!==(i=t[0].src)&&v(r,"src",i),1&e&&o!==(o=t[0].id)&&v(r,"id",o),1&e&&a!==(a=t[0].name)&&v(r,"alt",a)},i:t,o:t,d(t){t&&l(n),s=!1,c()}}}function Q(t,e,n){let{image:r}=e;return t.$$set=t=>{"image"in t&&n(0,r=t.image)},[r,t=>{t.preventDefault();let e=t.target.id;J.update(t=>({...t,imageId:e}))}]}class W extends z{constructor(t){super(),M(this,t,Q,Z,o,{image:0})}}function X(t,e,n){const r=t.slice();return r[1]=e[n],r}function Y(e){let n,r;return n=new W({props:{image:e[1]}}),{c(){H(n.$$.fragment)},m(t,e){B(n,t,e),r=!0},p:t,i(t){r||(P(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){q(n,t)}}}function tt(t){let e,n,r,i,o,a=t[0],s=[];for(let e=0;e<a.length;e+=1)s[e]=Y(X(t,a,e));const c=t=>I(s[t],1,1,()=>{s[t]=null});return{c(){e=p("h4"),e.textContent="Please select an image",n=d(),r=p("div"),i=p("ul");for(let t=0;t<s.length;t+=1)s[t].c();v(i,"class","list")},m(t,a){h(t,e,a),h(t,n,a),h(t,r,a),u(r,i);for(let t=0;t<s.length;t+=1)s[t].m(i,null);o=!0},p(t,[e]){if(1&e){let n;for(a=t[0],n=0;n<a.length;n+=1){const r=X(t,a,n);s[n]?(s[n].p(r,e),P(s[n],1)):(s[n]=Y(r),s[n].c(),P(s[n],1),s[n].m(i,null))}for(S(),n=a.length;n<s.length;n+=1)c(n);N()}},i(t){if(!o){for(let t=0;t<a.length;t+=1)P(s[t]);o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)I(s[t]);o=!1},d(t){t&&l(e),t&&l(n),t&&l(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function et(t){return[[{id:1,name:"one",src:"./images/1.jpg"},{id:2,name:"two",src:"./images/2.jpg"},{id:3,name:"three",src:"./images/3.jpg"},{id:4,name:"four",src:"./images/4.jpg"},{id:5,name:"five",src:"./images/5.jpg"}]]}class nt extends z{constructor(t){super(),M(this,t,et,tt,o,{})}}function rt(e){let n;return{c(){n=p("h3"),n.textContent="An image based authentication"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class it extends z{constructor(t){super(),M(this,t,null,rt,o,{})}}function ot(t){let e,n,i,o,a,s,c,f,g,w,_,b,x,$,E;return e=new it({}),{c(){H(e.$$.fragment),n=d(),i=p("div"),o=p("h2"),o.textContent="Signup",a=d(),s=p("form"),c=p("div"),f=p("input"),g=d(),w=p("button"),w.textContent="Continue",_=d(),b=p("div"),b.innerHTML='<span>Already have an account?</span><a href="/login">Login</a>',v(f,"type","email"),v(f,"placeholder","Enter email address to signup"),v(w,"class","btn"),v(i,"class","container")},m(r,l){B(e,r,l),h(r,n,l),h(r,i,l),u(i,o),u(i,a),u(i,s),u(s,c),u(c,f),y(f,t[1]),u(s,g),u(s,w),u(i,_),u(i,b),x=!0,$||(E=[m(f,"input",t[4]),m(f,"change",t[3]),m(f,"focus",ct),m(f,"blur",t[5]),m(s,"submit",t[2])],$=!0)},p(t,e){2&e&&f.value!==t[1]&&y(f,t[1])},i(t){x||(P(e.$$.fragment,t),x=!0)},o(t){I(e.$$.fragment,t),x=!1},d(t){q(e,t),t&&l(n),t&&l(i),$=!1,r(E)}}}function at(e){let n;return{c(){n=p("div"),n.innerHTML="<p>Loading...</p>"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function st(t){let e,n,r,i;const o=[at,ot],a=[];function s(t,e){return t[0]?0:1}return e=s(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},m(t,n){a[e].m(t,n),h(t,r,n),i=!0},p(t,[i]){let c=e;e=s(t),e===c?a[e].p(t,i):(S(),I(a[c],1,1,()=>{a[c]=null}),N(),n=a[e],n?n.p(t,i):(n=a[e]=o[e](t),n.c()),P(n,1),n.m(r.parentNode,r))},i(t){i||(P(n),i=!0)},o(t){I(n),i=!1},d(t){a[e].d(t),t&&l(r)}}}const ct=t=>t.target.value="";function ut(t,e,n){let r=!1,i="";return[r,i,t=>{t.preventDefault(),""!==i&&(n(0,r=!0),(async t=>{try{fetch("/.netlify/functions/express",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){n(0,r=!1),F("/images")}))}catch(t){console.log("===error while creating an ===",t)}})({email:i}),n(1,i=""))},t=>{n(1,i=t.target.value)},function(){i=this.value,n(1,i)},t=>t.target.value=i]}class ht extends z{constructor(t){super(),M(this,t,ut,st,o,{})}}function lt(t){let e,n,i,o,a,s,c,f,g,w;return{c(){e=p("div"),n=p("h2"),n.textContent="Signin",i=d(),o=p("form"),a=p("div"),s=p("input"),c=d(),f=p("button"),f.textContent="Login Continue",v(s,"type","email"),v(s,"placeholder","Enter email address to signin"),v(f,"class","btn"),v(e,"class","container")},m(r,l){h(r,e,l),u(e,n),u(e,i),u(e,o),u(o,a),u(a,s),y(s,t[0]),u(o,c),u(o,f),g||(w=[m(s,"input",t[4]),m(s,"change",t[3]),m(s,"focus",dt),m(s,"blur",t[5]),m(o,"submit",t[2])],g=!0)},p(t,e){1&e&&s.value!==t[0]&&y(s,t[0])},d(t){t&&l(e),g=!1,r(w)}}}function pt(e){let n;return{c(){n=p("p"),n.textContent="Loading the images..."},m(t,e){h(t,n,e)},p:t,d(t){t&&l(n)}}}function ft(e){let n;function r(t,e){return t[1]?pt:lt}let i=r(e),o=i(e);return{c(){o.c(),n=g()},m(t,e){o.m(t,e),h(t,n,e)},p(t,[e]){i===(i=r(t))&&o?o.p(t,e):(o.d(1),o=i(t),o&&(o.c(),o.m(n.parentNode,n)))},i:t,o:t,d(t){o.d(t),t&&l(n)}}}const dt=t=>t.target.value="";function gt(t,e,n){let r="",i="";return[r,i,t=>{t.preventDefault(),""!==r&&(n(1,i=!0),(async t=>{try{fetch("/.netlify/functions/express",{method:"post",body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){console.log("=====data====",t),F("/images")}))}catch(t){console.log("===error while creating an ===",t)}})(r),n(0,r=""))},t=>{n(0,r=t.target.value)},function(){r=this.value,n(0,r)},t=>t.target.value=r]}class mt extends z{constructor(t){super(),M(this,t,gt,ft,o,{})}}function vt(t){let e,n,r;var i=t[0];return i&&(e=new i({})),{c(){e&&H(e.$$.fragment),n=g()},m(t,i){e&&B(e,t,i),h(t,n,i),r=!0},p(t,[r]){if(i!==(i=t[0])){if(e){S();const t=e;I(t.$$.fragment,1,0,()=>{q(t,1)}),N()}i?(e=new i({}),H(e.$$.fragment),P(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}},i(t){r||(e&&P(e.$$.fragment,t),r=!0)},o(t){e&&I(e.$$.fragment,t),r=!1},d(t){t&&l(n),e&&q(e,t)}}}function yt(t,e,n){let r,i;return F("/",()=>n(0,r=ht)),F("/login",()=>n(0,r=mt)),F("/signup",()=>n(0,r=ht)),F("/images",()=>n(0,r=nt)),F.start(),_(async()=>{try{const t=await fetch.get("/.netlify/functions/express"),e=await t.json();J.set({images:e}),J.subscribe(t=>{i=t.images})}catch(t){i=[{}]}}),[r]}return new class extends z{constructor(t){super(),M(this,t,yt,vt,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
