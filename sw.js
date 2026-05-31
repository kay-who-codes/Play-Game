const CACHE_NAME = "PlayGameApp";
const urlsToCache = [
  "/",
  "/index.html",
  "/sw.js",
  "/App Files/manifest.json",
  "/App Files/click.mp3",
  "/App Files/Logos/Game Logo - 192px.png",
  "/App Files/Logos/Game Logo - 512px.png",
];

// Install: cache all files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch: serve from cache, fallback to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
