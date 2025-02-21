const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/src/',
  '/src/index.html',
  '/src/css/styles.css',
  '/src/js/script.js',
  '/src/img/icon-128x128.png',
  '/src/img/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});