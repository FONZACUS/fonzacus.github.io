importScripts('//storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
if(workbox){console.log('ON')};
workbox.precaching.precacheAndRoute(['/home',]);
workbox.routing.registerRoute(/.*(?:htm|css|js|eot|ttf|otf|woff2?|svg)/,new workbox.strategies.StaleWhileRevalidate({cacheName:'asset',cacheExpiration:{maxEntries:20,maxAgeSeconds:999999,}}));
