if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>s(e,r),f={module:{uri:r},exports:c,require:l};i[r]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-f279ae30"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.091b6925.css",revision:null},{url:"assets/index.36666434.js",revision:null},{url:"assets/vendor.7e6f9954.js",revision:null},{url:"assets/vendor.a6296e4f.css",revision:null},{url:"assets/webfontloader.cd097671.js",revision:null},{url:"index.html",revision:"b71d85cf0b67eabae6d8edc9d5d7055f"},{url:"kislovodsk_files/bootstrap.css",revision:"8b8af6196b825f8f59ae1d4c60617cd3"},{url:"kislovodsk_files/page_popular_resolutions.css",revision:"7a76d8e4cf7c7d0a2fe341feb48e0d20"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/icon-72x72.png",revision:"d46a32147e143e065041bc715cbf12ee"},{url:"img/icons/icon-96x96.png",revision:"421030b72aaef83038d48f15cae79a0d"},{url:"img/icons/icon-128x128.png",revision:"90e79abc6f2da7b9bad582ac594a6e12"},{url:"img/icons/icon-144x144.png",revision:"b1944bf474f6089174764fb4decdde0b"},{url:"img/icons/icon-152x152.png",revision:"1b5e90892cfbb067545581d859551717"},{url:"img/icons/icon-192x192.png",revision:"9377b4996a6be95184f67c0fc9a636d0"},{url:"img/icons/icon-384x384.png",revision:"623dc8b02a6075e69bf1bfae96d33613"},{url:"img/icons/icon-512x512.png",revision:"ee877dc180e2fce66759bacf8f4b4fe9"},{url:"manifest.webmanifest",revision:"e3e9d2cf5f4e9e7308f917a49f0f228b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
