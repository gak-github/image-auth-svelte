var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,s=!1;function u(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function c(e,t){s?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const i=u(1,o+1,e=>t[n[e]].claim_order,t[e].claim_order)-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const i=[],a=[];let s=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(i.push(t[e-1]);s>=e;s--)a.push(t[s]);s--}for(;s>=0;s--)a.push(t[s]);i.reverse(),a.sort((e,t)=>e.claim_order-t.claim_order);for(let t=0,n=0;t<a.length;t++){for(;n<i.length&&a[t].claim_order>=i[n].claim_order;)n++;const r=n<i.length?i[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function f(e,t,n){s&&!n?c(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function p(){return e=" ",document.createTextNode(e);var e}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e){a=e}function g(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const y=[],v=[],b=[],w=[],x=Promise.resolve();let E=!1;function _(e){b.push(e)}let $=!1;const T=new Set;function S(){if(!$){$=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];m(t),C(t.$$)}for(m(null),y.length=0;v.length;)v.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];T.has(t)||(T.add(t),t())}b.length=0}while(y.length);for(;w.length;)w.pop()();E=!1,$=!1,T.clear()}}function C(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const A=new Set;function j(e,t){e&&e.i&&(A.delete(e),e.i(t))}function N(e,n,i,a){const{fragment:s,on_mount:u,on_destroy:c,after_update:f}=e.$$;s&&s.m(n,i),a||_(()=>{const n=u.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]}),f.forEach(_)}function R(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,t){-1===e.$$.dirty[0]&&(y.push(e),E||(E=!0,x.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function k(t,o,i,u,c,f,d=[-1]){const p=a;m(t);const h=t.$$={fragment:null,ctx:null,props:f,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:o.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(h.ctx=i?i(t,o.props||{},(e,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),g&&O(t,e)),n}):[],h.update(),g=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){s=!0;const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&j(t.$$.fragment),N(t,o.target,o.anchor,o.customElement),s=!1,S()}m(p)}class B{$destroy(){R(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function L(t){let n,r,o;return{c(){n=d("h3"),n.textContent="An image based based authentication demo",r=p(),o=d("h2"),o.textContent="SignUp/SignIn",h(n,"classname","top-head")},m(e,t){f(e,n,t),f(e,r,t),f(e,o,t)},p:e,i:e,o:e,d(e){e&&l(n),e&&l(r),e&&l(o)}}}class U extends B{constructor(e){super(),k(this,e,null,L,i,{})}}const q=[];const P=function(t,n=e){let r;const o=[];function a(e){if(i(t,e)&&(t=e,r)){const e=!q.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),q.push(n,t)}if(e){for(let e=0;e<q.length;e+=2)q[e][0](q[e+1]);q.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(i,s=e){const u=[i,s];return o.push(u),1===o.length&&(r=n(a)||e),i(t),()=>{const e=o.indexOf(u);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}({transactions:[]});var D=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},F=Object.prototype.toString;function M(e){return"[object Array]"===F.call(e)}function z(e){return void 0===e}function H(e){return null!==e&&"object"==typeof e}function I(e){return"[object Function]"===F.call(e)}function X(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),M(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var J={isArray:M,isArrayBuffer:function(e){return"[object ArrayBuffer]"===F.call(e)},isBuffer:function(e){return null!==e&&!z(e)&&null!==e.constructor&&!z(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:H,isUndefined:z,isDate:function(e){return"[object Date]"===F.call(e)},isFile:function(e){return"[object File]"===F.call(e)},isBlob:function(e){return"[object Blob]"===F.call(e)},isFunction:I,isStream:function(e){return H(e)&&I(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:X,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)X(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)X(arguments[r],n);return t},extend:function(e,t,n){return X(t,(function(t,r){e[r]=n&&"function"==typeof t?D(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};function V(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var K=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(J.isURLSearchParams(t))r=t.toString();else{var o=[];J.forEach(t,(function(e,t){null!=e&&(J.isArray(e)?t+="[]":e=[e],J.forEach(e,(function(e){J.isDate(e)?e=e.toISOString():J.isObject(e)&&(e=JSON.stringify(e)),o.push(V(t)+"="+V(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function G(){this.handlers=[]}G.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},G.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},G.prototype.forEach=function(e){J.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var Q=G,W=function(e,t,n){return J.forEach(n,(function(n){e=n(e,t)})),e},Y=function(e){return!(!e||!e.__CANCEL__)};var Z=function(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}((function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,u=[],c=!1,f=-1;function l(){c&&s&&(c=!1,s.length?u=s.concat(u):f=-1,u.length&&d())}function d(){if(!c){var e=a(l);c=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),ee=function(e,t){J.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},te=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},ne=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],re=J.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=J.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},oe=J.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),J.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),J.isString(r)&&a.push("path="+r),J.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ie=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;J.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password||"";o.Authorization="Basic "+btoa(a+":"+s)}var u,c,f=(u=e.baseURL,c=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,c):c);if(i.open(e.method.toUpperCase(),K(f,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,u,c="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),u={},r?(J.forEach(r.split("\n"),(function(e){if(s=e.indexOf(":"),o=J.trim(e.substr(0,s)).toLowerCase(),a=J.trim(e.substr(s+1)),o){if(u[o]&&ne.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([a]):u[o]?u[o]+", "+a:a}})),u):u):null,f={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:c,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(te("Request failed with status code "+n.status,n.config,null,n.request,n))}(t,n,f),i=null}},i.onabort=function(){i&&(n(te("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(te("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(te(t,e,"ECONNABORTED",i)),i=null},J.isStandardBrowserEnv()){var l=oe,d=(e.withCredentials||re(f))&&e.xsrfCookieName?l.read(e.xsrfCookieName):void 0;d&&(o[e.xsrfHeaderName]=d)}if("setRequestHeader"in i&&J.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),J.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),void 0===r&&(r=null),i.send(r)}))},ae={"Content-Type":"application/x-www-form-urlencoded"};function se(e,t){!J.isUndefined(e)&&J.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ue,ce={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==Z&&"[object process]"===Object.prototype.toString.call(Z))&&(ue=ie),ue),transformRequest:[function(e,t){return ee(t,"Accept"),ee(t,"Content-Type"),J.isFormData(e)||J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)?e:J.isArrayBufferView(e)?e.buffer:J.isURLSearchParams(e)?(se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):J.isObject(e)?(se(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};ce.headers={common:{Accept:"application/json, text/plain, */*"}},J.forEach(["delete","get","head"],(function(e){ce.headers[e]={}})),J.forEach(["post","put","patch"],(function(e){ce.headers[e]=J.merge(ae)}));var fe=ce;function le(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var de=function(e){return le(e),e.headers=e.headers||{},e.data=W(e.data,e.headers,e.transformRequest),e.headers=J.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),J.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||fe.adapter)(e).then((function(t){return le(e),t.data=W(t.data,t.headers,e.transformResponse),t}),(function(t){return Y(t)||(le(e),t&&t.response&&(t.response.data=W(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},pe=function(e,t){t=t||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];J.forEach(r,(function(e){void 0!==t[e]&&(n[e]=t[e])})),J.forEach(o,(function(r){J.isObject(t[r])?n[r]=J.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:J.isObject(e[r])?n[r]=J.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])})),J.forEach(i,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var a=r.concat(o).concat(i),s=Object.keys(t).filter((function(e){return-1===a.indexOf(e)}));return J.forEach(s,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n};function he(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}he.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=pe(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[de,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},he.prototype.getUri=function(e){return e=pe(this.defaults,e),K(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},J.forEach(["delete","get","head","options"],(function(e){he.prototype[e]=function(t,n){return this.request(J.merge(n||{},{method:e,url:t}))}})),J.forEach(["post","put","patch"],(function(e){he.prototype[e]=function(t,n,r){return this.request(J.merge(r||{},{method:e,url:t,data:n}))}}));var me=he;function ge(e){this.message=e}ge.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ge.prototype.__CANCEL__=!0;var ye=ge;function ve(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new ye(e),t(n.reason))}))}ve.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ve.source=function(){var e;return{token:new ve((function(t){e=t})),cancel:e}};var be=ve;function we(e){var t=new me(e),n=D(me.prototype.request,t);return J.extend(n,me.prototype,t),J.extend(n,t),n}var xe=we(fe);xe.Axios=me,xe.create=function(e){return we(pe(xe.defaults,e))},xe.Cancel=ye,xe.CancelToken=be,xe.isCancel=Y,xe.all=function(e){return Promise.all(e)},xe.spread=function(e){return function(t){return e.apply(null,t)}};var Ee=xe,_e=xe;Ee.default=_e;var $e=Ee;function Te(t){let n,r,o,i;return n=new U({}),{c(){var e;(e=n.$$.fragment)&&e.c(),r=p(),o=d("div"),h(o,"class","container")},m(e,t){N(n,e,t),f(e,r,t),f(e,o,t),i=!0},p:e,i(e){i||(j(n.$$.fragment,e),i=!0)},o(e){!function(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),(void 0).c.push(()=>{A.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}(n.$$.fragment,e),i=!1},d(e){R(n,e),e&&l(r),e&&l(o)}}}function Se(e){return g(async()=>{try{await $e.get("/.netlify/functions/express");P.set({}),P.subscribe(e=>{})}catch(e){}}),[]}return new class extends B{constructor(e){super(),k(this,e,Se,Te,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
