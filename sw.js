!function(){"use strict";self.CACHE_BUSTER="1548936973267|0.5065272112782329",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()});var e=function(e,n){return caches.keys().then(function(t){t.forEach(function(t){0===t.indexOf(e)&&t!==n&&caches.delete(t)})})},n="".concat("esw-asset-cache","-").concat("1"),t=["assets/vendor-1b75cd366fe71bdad3e665e4aac7003b.css","assets/vendor-2fad33bee7f159b9b04b67027102f63b.js","assets/webmarks-0c01f183b151f78fb4b9d30ec4b14570.css","assets/webmarks-b4bedc49ed803d8780681eb639236acd.js","icon_x128.png","icon_x144.png","icon_x192-2f8b9cce6fc0a4c1146db21ee427493f.png","icon_x256.png","icon_x64.png"].map(function(e){return new URL(e,self.location).toString()});self.addEventListener("install",function(e){e.waitUntil(caches.open(n).then(function(e){return Promise.all(t.map(function(n){var t=new Request(n,{mode:"cors"});return fetch(t).then(function(t){if(t.status>=400){var c=new Error("Request for ".concat(n," failed with status ").concat(t.statusText));throw c}return e.put(n,t)}).catch(function(e){console.error("Not caching ".concat(n," due to ").concat(e))})}))}))}),self.addEventListener("activate",function(c){c.waitUntil(Promise.all([e("esw-asset-cache",n),void caches.open(n).then(function(e){return e.keys().then(function(n){n.forEach(function(n){-1===t.indexOf(n.url)&&e.delete(n)})})})]))}),self.addEventListener("fetch",function(e){var c="GET"===e.request.method,s=-1!==t.indexOf(e.request.url);c&&s&&e.respondWith(caches.match(e.request,{cacheName:n}).then(function(n){return n||fetch(e.request.url,{mode:"cors"})}))});var c=[],s=[];function i(e,n){return!!n.find(function(n){return n.test(decodeURI(e))})}self.INDEX_FILE_HASH="87edfb5c87a391e7eb39b9fb4d86ff9b";var r="".concat("esw-index","-").concat("1"),a=new URL("index.html",self.location).toString();self.addEventListener("install",function(e){e.waitUntil(fetch(a,{credentials:"include"}).then(function(e){return caches.open(r).then(function(n){return n.put(a,e)})}))}),self.addEventListener("activate",function(n){n.waitUntil(e("esw-index",r))}),self.addEventListener("fetch",function(e){var n=e.request,t=new URL(n.url),o="GET"===n.method,u=-1!==n.headers.get("accept").indexOf("text/html"),f=t.origin===location.origin,l=i(n.url,c),d=!s.length||i(n.url,s);!("/tests"===t.pathname&&!1)&&o&&u&&f&&d&&!l&&e.respondWith(caches.match(a,{cacheName:r}).then(function(e){return e||fetch(a,{credentials:"include"}).then(function(e){return caches.open(r).then(function(n){return n.put(a,e)}),e.clone()})}))})}();
//# sourceMappingURL=sw-1c81fa9bca6c04cdb99c17b948da6034.map