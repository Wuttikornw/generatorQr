self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('qr-gen-cache').then((cache) =>
      cache.addAll(['./', './index.html', './app.js', './manifest.json'])
    )
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}