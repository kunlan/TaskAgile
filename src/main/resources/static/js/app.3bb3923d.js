(function(e){function n(n){for(var t,a,c=n[0],u=n[1],l=n[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);s&&s(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,n=0;n<i.length;n++){for(var r=i[n],t=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(t=!1)}t&&(i.splice(n--,1),e=a(a.s=r[0]))}return e}var t={},o={app:0},i=[];function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(r,t,function(n){return e[n]}.bind(null,t));return r},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var s=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"56d7":function(e,n,r){"use strict";r.r(n);r("cadf"),r("551c"),r("f751"),r("097d");var t=r("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],a={name:"App"},c=a,u=r("2877"),l=Object(u["a"])(c,o,i,!1,null,null,null),s=l.exports,f=r("8c4f"),p=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("h1",[e._v("TaskAgile")])])}],g={name:"LoginPage"},v=g,h=Object(u["a"])(v,p,d,!1,null,null,null),b=h.exports;t["a"].use(f["a"]);var w=new f["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"LoginPage",component:b}]}),m=r("2f62");t["a"].use(m["a"]);var y=new m["a"].Store({state:{},mutations:{},actions:{}}),O=r("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({router:w,store:y,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.3bb3923d.js.map