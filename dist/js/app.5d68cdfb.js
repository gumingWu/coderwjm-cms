(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-03bec34e":"ee8f64a1","chunk-122aaad0":"05bd1bc3","chunk-13f384de":"18f0cbd7","chunk-18baa941":"7732aaeb","chunk-2a44824e":"51e58952","chunk-2d0f0de0":"0b656a5c","chunk-70b88e1d":"4a6294cd","chunk-7cdf50b3":"02e2f205","chunk-9c82402e":"ffef09dc","chunk-f9277480":"b2fa65fb","chunk-fdbd9dc2":"f0e1f3ff","chunk-686360fa":"fab2a005","chunk-0d54c02c":"dbebbdd6","chunk-e47a1246":"66cb167e","chunk-0e1cf808":"701c2fa3","chunk-50e8be2f":"a33782f1"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-03bec34e":1,"chunk-122aaad0":1,"chunk-13f384de":1,"chunk-18baa941":1,"chunk-2a44824e":1,"chunk-70b88e1d":1,"chunk-7cdf50b3":1,"chunk-9c82402e":1,"chunk-f9277480":1,"chunk-fdbd9dc2":1,"chunk-686360fa":1,"chunk-0d54c02c":1,"chunk-e47a1246":1,"chunk-0e1cf808":1,"chunk-50e8be2f":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-03bec34e":"0e433876","chunk-122aaad0":"0e433876","chunk-13f384de":"0e433876","chunk-18baa941":"0e433876","chunk-2a44824e":"0e433876","chunk-2d0f0de0":"31d6cfe0","chunk-70b88e1d":"0e433876","chunk-7cdf50b3":"0e433876","chunk-9c82402e":"0e433876","chunk-f9277480":"0e433876","chunk-fdbd9dc2":"c5723a18","chunk-686360fa":"74ac9908","chunk-0d54c02c":"b61bcb17","chunk-e47a1246":"76d82f1a","chunk-0e1cf808":"7f9703c9","chunk-50e8be2f":"b7ccfff1"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"09e6":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o}));var r=t("b85c");t("d3b7"),t("159b"),t("ddb0"),t("ac1f"),t("1276"),t("7db0"),t("2ca0"),t("b0c0");function a(e){var n=[],a=[],c=t("d1d0");c.keys().forEach((function(e){var n=t("b4c1")("./main"+e.split(".")[1]);a.push(n.default)}));var o=function e(t){var c,o=Object(r["a"])(t);try{var u=function(){var t=c.value;if(2===t.type){var r=a.find((function(e){return e.path===t.url}));r&&n.push(r)}else e(t.children)};for(o.s();!(c=o.n()).done;)u()}catch(i){o.e(i)}finally{o.f()}};return o(e),n}var c=function(e,n,t){var r=e.find((function(e){return n.startsWith(e.url)}));if(r){var a=r.children.find((function(e){return e.url===n}));return null===t||void 0===t||t.push({name:r.name}),null===t||void 0===t||t.push({name:a.name}),a.id+""}return"a"},o=function(e,n){var t=[];return c(e,n,t),t}},"141b":function(e,n,t){},"1ee4":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"dashboard",path:"/main/analysis/dashboard",component:function(){return t.e("chunk-70b88e1d").then(t.bind(null,"70d4"))}}},"2ed6":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"department",path:"/main/system/department",component:function(){return t.e("chunk-f9277480").then(t.bind(null,"c909"))}}},4500:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"goods",path:"/main/product/goods",component:function(){return t.e("chunk-03bec34e").then(t.bind(null,"de23"))}}},6022:function(e,n,t){"use strict";var r=t("5530"),a=t("d4ec"),c=t("bee2"),o=(t("d3b7"),t("bc3a")),u=t.n(o),i=t("90b1"),s=t("857c"),d=Object({NODE_ENV:"production",VUE_APP_BASE_URL:"/api",VUE_APP_TIMEOUT:"50000",BASE_URL:""}).VUE_APP_SHOWLOADING,f=function(){function e(n){var t,r,c,o,f=this;Object(a["a"])(this,e),this.instance=u.a.create(n),this.showLoading=n.showLoading||Boolean(d),this.instance.interceptors.request.use(null===(t=n.interceptors)||void 0===t?void 0:t.requestInterceptor,null===(r=n.interceptors)||void 0===r?void 0:r.requestInterceptorCatch),this.instance.interceptors.response.use(null===(c=n.interceptors)||void 0===c?void 0:c.responseInterceptor,null===(o=n.interceptors)||void 0===o?void 0:o.responseInterceptorCatch),this.instance.interceptors.request.use((function(e){f.showLoading&&(f.loading=i["a"].service({fullscreen:!0,text:"请稍等",lock:!0}));var n=s["a"].get("token");return n&&(e.headers={Authorization:n}),e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){var n;null===(n=f.loading)||void 0===n||n.close();var t=e.status,r=e.data;return 200===t?r:(alert("出错了:"+e.statusText),null)}),(function(e){var n;return null===(n=f.loading)||void 0===n||n.close(),e}))}return Object(c["a"])(e,[{key:"request",value:function(e,n,t){var a=this;return!1===(null===t||void 0===t?void 0:t.showLoading)&&(this.showLoading=!1),new Promise((function(c,o){a.instance.request(Object(r["a"])({url:e,method:n},t)).then((function(e){c(e)})).catch((function(e){return o(e),e}))}))}},{key:"get",value:function(e,n){return this.request(e,"get",n)}},{key:"post",value:function(e,n){return this.request(e,"post",n)}},{key:"put",value:function(e,n){return this.request(e,"put",n)}},{key:"delete",value:function(e,n){return this.request(e,"delete",n)}}]),e}(),l=f,h=Object({NODE_ENV:"production",VUE_APP_BASE_URL:"/api",VUE_APP_TIMEOUT:"50000",BASE_URL:""}),m=h.VUE_APP_BASE_URL,b=h.VUE_APP_TIMEOUT,p=new l({baseURL:m,timeout:parseInt(b),interceptors:{requestInterceptor:function(e){return console.log("实例请求拦截器"),e},responseInterceptor:function(e){return console.log("实例响应拦截器"),e}}});n["a"]=p},"63c2":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"user",path:"/main/system/user",component:function(){return Promise.all([t.e("chunk-fdbd9dc2"),t.e("chunk-686360fa"),t.e("chunk-e47a1246"),t.e("chunk-0e1cf808")]).then(t.bind(null,"40ba"))}}},"658c":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"category",path:"/main/product/category",component:function(){return t.e("chunk-122aaad0").then(t.bind(null,"e35b"))}}},"7fa9":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"list",path:"/main/story/list",component:function(){return t.e("chunk-2a44824e").then(t.bind(null,"c3c9"))}}},"857c":function(e,n,t){"use strict";var r=t("d4ec"),a=t("bee2"),c=(t("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"set",value:function(e,n){window.localStorage.setItem(e,JSON.stringify(n))}},{key:"get",value:function(e){var n=window.localStorage.getItem(e);return n?JSON.parse(n):null}},{key:"delete",value:function(e){window.localStorage.removeItem(e)}},{key:"clear",value:function(){window.localStorage.clear()}}]),e}());n["a"]=new c},"9dba":function(e,n,t){"use strict";var r=t("1da1"),a=(t("96cf"),t("d3b7"),t("159b"),t("6022")),c=function(e){return a["a"].post("/login",{data:e})},o=function(e){return a["a"].get("/users/".concat(e),{showLoading:!1})},u=function(e){return a["a"].get("/role/".concat(e,"/menu"),{showLoading:!1})},i=t("be92"),s=t("afbc"),d=t("857c"),f=t("09e6");n["a"]=Object(i["b"])("user",{state:function(){return{token:"",userInfo:{},userMenu:[]}},actions:{setToken:function(e){this.token=e},setUserInfo:function(e){this.userInfo=e},setUserMenu:function(e){this.userMenu=e;var n=Object(f["a"])(e);n.forEach((function(e){s["a"].addRoute("main",e)}))},accountLogin:function(e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,a,i,f,l,h,m,b,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c(e);case 2:return r=t.sent,a=r.data,i=a.id,f=a.token,d["a"].set("token",f),n.setToken(f),t.next=8,o(i);case 8:return l=t.sent,h=l.data,d["a"].set("userInfo",h),n.setUserInfo(h),m=h.role.id,t.next=15,u(m);case 15:b=t.sent,p=b.data,d["a"].set("userMenus",p),n.setUserMenu(p),s["a"].push("/main");case 20:case"end":return t.stop()}}),t)})))()},loadLocalLogin:function(){var e=d["a"].get("token");e&&this.setToken(e);var n=d["a"].get("userInfo");n&&this.setUserInfo(n);var t=d["a"].get("userMenus");t&&this.setUserMenu(t)}}})},a0f6:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"chat",path:"/main/story/chat",component:function(){return t.e("chunk-9c82402e").then(t.bind(null,"3411"))}}},abcd:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"role",path:"/main/system/role",component:function(){return t.e("chunk-13f384de").then(t.bind(null,"e7af"))}}},afbc:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0");var r=t("6c02"),a=t("857c"),c=t("9dba"),o=[{path:"/",redirect:"/main"},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-fdbd9dc2"),t.e("chunk-e47a1246"),t.e("chunk-50e8be2f")]).then(t.bind(null,"9ed6"))}},{path:"/main",name:"main",component:function(){return Promise.all([t.e("chunk-fdbd9dc2"),t.e("chunk-686360fa"),t.e("chunk-0d54c02c")]).then(t.bind(null,"50f9"))}},{path:"/not-found",name:"not-found",component:function(){return t.e("chunk-2d0f0de0").then(t.bind(null,"9dcb"))}}],u=function(){var e=Object(c["a"])(),n=e.userMenu;if(0===n.length)return"/login";var t=n[0];if(1===t.type){var r=t.children[0];return r.url}},i=Object(r["a"])({history:Object(r["b"])(""),routes:o});i.beforeEach((function(e){if("/login"!==e.path){var n=a["a"].get("token");if(!n)return"/login"}if("/main"===e.path)return u()})),n["a"]=i},b4c1:function(e,n,t){var r={"./main/analysis/dashboard":"1ee4","./main/analysis/dashboard/":"1ee4","./main/analysis/dashboard/index":"1ee4","./main/analysis/dashboard/index.ts":"1ee4","./main/analysis/overview":"d756","./main/analysis/overview/":"d756","./main/analysis/overview/index":"d756","./main/analysis/overview/index.ts":"d756","./main/product/category":"658c","./main/product/category/":"658c","./main/product/category/index":"658c","./main/product/category/index.ts":"658c","./main/product/goods":"4500","./main/product/goods/":"4500","./main/product/goods/index":"4500","./main/product/goods/index.ts":"4500","./main/story/chat":"a0f6","./main/story/chat/":"a0f6","./main/story/chat/index":"a0f6","./main/story/chat/index.ts":"a0f6","./main/story/list":"7fa9","./main/story/list/":"7fa9","./main/story/list/index":"7fa9","./main/story/list/index.ts":"7fa9","./main/system/department":"2ed6","./main/system/department/":"2ed6","./main/system/department/index":"2ed6","./main/system/department/index.ts":"2ed6","./main/system/menu":"e2c1","./main/system/menu/":"e2c1","./main/system/menu/index":"e2c1","./main/system/menu/index.ts":"e2c1","./main/system/role":"abcd","./main/system/role/":"abcd","./main/system/role/index":"abcd","./main/system/role/index.ts":"abcd","./main/system/user":"63c2","./main/system/user/":"63c2","./main/system/user/index":"63c2","./main/system/user/index.ts":"63c2"};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="b4c1"},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,n,t,a,c,o){var u=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(u)}var c={},o=(t("ea42"),t("6b0d")),u=t.n(o);const i=u()(c,[["render",a]]);var s=i,d=t("afbc"),f=t("be92"),l=Object(f["a"])(),h=t("9dba");t("f5df1"),t("7437");function m(){var e=Object(h["a"])();e.loadLocalLogin()}var b=Object(r["createApp"])(s);b.use(l),m(),b.use(d["a"]).mount("#app")},d1d0:function(e,n,t){var r={"./analysis/dashboard/index.ts":"1ee4","./analysis/overview/index.ts":"d756","./product/category/index.ts":"658c","./product/goods/index.ts":"4500","./story/chat/index.ts":"a0f6","./story/list/index.ts":"7fa9","./system/department/index.ts":"2ed6","./system/menu/index.ts":"e2c1","./system/role/index.ts":"abcd","./system/user/index.ts":"63c2"};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="d1d0"},d756:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"overview",path:"/main/analysis/overview",component:function(){return t.e("chunk-7cdf50b3").then(t.bind(null,"7d44"))}}},e2c1:function(e,n,t){"use strict";t.r(n);t("d3b7"),t("3ca3"),t("ddb0");n["default"]={name:"menu",path:"/main/system/menu",component:function(){return t.e("chunk-18baa941").then(t.bind(null,"1ed3"))}}},ea42:function(e,n,t){"use strict";t("141b")}});
//# sourceMappingURL=app.5d68cdfb.js.map