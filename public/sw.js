if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let o={};const r=e=>s(e,c),t={module:{uri:c},exports:o,require:r};a[c]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8zuujwLKiJyhLB2qO_Jkt/_buildManifest.js",revision:"4bffdcd338ead6d5db4a4b52e645f1d6"},{url:"/_next/static/8zuujwLKiJyhLB2qO_Jkt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/817-e499b746c94077f1.js",revision:"e499b746c94077f1"},{url:"/_next/static/chunks/framework-6200bcbda95f1603.js",revision:"6200bcbda95f1603"},{url:"/_next/static/chunks/main-d4685869e8d4dc1f.js",revision:"d4685869e8d4dc1f"},{url:"/_next/static/chunks/pages/_app-bd847da40cbf5c3f.js",revision:"bd847da40cbf5c3f"},{url:"/_next/static/chunks/pages/_error-fb68742d3cf986b6.js",revision:"fb68742d3cf986b6"},{url:"/_next/static/chunks/pages/about-2eb091d13abf6afc.js",revision:"2eb091d13abf6afc"},{url:"/_next/static/chunks/pages/contact-232ea17a0a6228df.js",revision:"232ea17a0a6228df"},{url:"/_next/static/chunks/pages/features-384907e3958495b1.js",revision:"384907e3958495b1"},{url:"/_next/static/chunks/pages/index-24a2f88221165b0d.js",revision:"24a2f88221165b0d"},{url:"/_next/static/chunks/pages/services-e1f5b39140f19b14.js",revision:"e1f5b39140f19b14"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cc9c69bc14c8e1bc.js",revision:"cc9c69bc14c8e1bc"},{url:"/_next/static/css/c92bed94bbe2cc40.css",revision:"c92bed94bbe2cc40"},{url:"/adsleads.svg",revision:"6daa35458c5861d010f128bba99bfa07"},{url:"/android-chrome-192x192.png",revision:"4903b372b6c7fb11d20fd75f4bfedb89"},{url:"/android-chrome-512x512.png",revision:"48b1ca01d82f800bafdb435aae380918"},{url:"/apple-touch-icon.png",revision:"6724e3645eaa6412d80578900808ae5b"},{url:"/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"/favicon-16x16.png",revision:"6b2a5ef3b9ad0cdd2792d410e528a60c"},{url:"/favicon-32x32.png",revision:"7979869b7e496c66d4b01e2ca3cacde3"},{url:"/favicon.ico",revision:"b6fd0ed68813a32a433de22a4bbe2b27"},{url:"/fonts/Calibre/Calibre-Black.woff2",revision:"36ffd75d821e3d35f0260e7ee71f2294"},{url:"/fonts/Calibre/Calibre-BlackItalic.woff2",revision:"57442766c282f7f2243c7123d0fc0b33"},{url:"/fonts/Calibre/Calibre-Bold.woff2",revision:"87cc6590c65275a830c12acc9817874c"},{url:"/fonts/Calibre/Calibre-BoldItalic.woff2",revision:"2efc6f2bac2d3c720aab0a3dca82463a"},{url:"/fonts/Calibre/Calibre-Light.woff2",revision:"183de736efe789394f26ed013b0b5cdd"},{url:"/fonts/Calibre/Calibre-LightItalic.woff2",revision:"f34c1430353885b55d271d473235eb6a"},{url:"/fonts/Calibre/Calibre-Medium.woff2",revision:"46b36969c7bb1d7ed4c8253e8f274788"},{url:"/fonts/Calibre/Calibre-MediumItalic.woff2",revision:"3df14639dd2cb07c83bd39707d70910f"},{url:"/fonts/Calibre/Calibre-Regular.woff2",revision:"b63c62e591d0c8fbe2c8f009883346d5"},{url:"/fonts/Calibre/Calibre-RegularItalic.woff2",revision:"35657aa2d12ff78e3d8a8a5ba28c2c35"},{url:"/fonts/Calibre/Calibre-Semibold.woff2",revision:"d8b856473a51d7eec2a9bccf2fbea54c"},{url:"/fonts/Calibre/Calibre-SemiboldItalic.woff2",revision:"8f3e4b3eaed73e67bbc4fc81f308a35f"},{url:"/fonts/Calibre/Calibre-Thin.woff2",revision:"7d7d9bd8558b1df58d4682d2b1be7d9e"},{url:"/fonts/Calibre/Calibre-ThinItalic.woff2",revision:"dd10d58f7aa26b4de8c8ab98f984f030"},{url:"/fonts/Calibre/_Calibre.scss",revision:"13d7ac7b4637c7d768818ac6b894615b"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",revision:"63a1019d2b51b21694f850aeb9bc1018"},{url:"/fonts/JetBrainsMono/JetBrainsMono-BoldItalic.woff2",revision:"2ae6bcd7881599d63204b10fa5a341d1"},{url:"/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2",revision:"8e7024a8af502c88f27b14f5b908d2a1"},{url:"/fonts/JetBrainsMono/JetBrainsMono-ExtraBoldItalic.woff2",revision:"2f5619c1232f40a3db6c0f9e969bd7cc"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",revision:"25d08cca52c3530b9dfb8cb9f50a06d6"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",revision:"cb46fdd3d9a6162984ee0840fb84bdfe"},{url:"/fonts/JetBrainsMono/JetBrainsMono-MediumItalic.woff2",revision:"f1a3a53b5aa2bb3ddea185f16b8085cf"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",revision:"29db71a58086c177f6e2332206ec4e9c"},{url:"/fonts/JetBrainsMono/_JetBrainsMono.scss",revision:"c385191fdf97402b3dc94caea7b204dc"},{url:"/landing.svg",revision:"e96af5bcab4d48c97ab5186187d5fe99"},{url:"/logo.svg",revision:"05a859a80bf42ee5219496ca25a4497e"},{url:"/lottie/lottie.json",revision:"bb9b0a2100af2e6e3ece5f06222c7dca"},{url:"/mastercard.svg",revision:"ee947da40d2dafd56c18e75033edcea0"},{url:"/mstile-150x150.png",revision:"c49702ba690ec2c3df0e9fd761c284a7"},{url:"/payment.png",revision:"c16d4cfa13ac480d3543d0ff3ef34c1c"},{url:"/safari-pinned-tab.svg",revision:"242dc1be4af612f61426d0c7fe40e3ee"},{url:"/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/stats.png",revision:"8a6dc00505a264bc1abdaf5ee526cf23"},{url:"/stats.svg",revision:"6ef9f55eed6278280a331e206e2e6df5"},{url:"/visa.svg",revision:"8dfe8c1480b7ec2d218fce3ba7a2940b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
