self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tv-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./favicon.ico",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});