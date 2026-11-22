/* Minimal Sudoku service worker — offline caching.
   Strategy: the app shell is pre-cached on install; pages are served network-first
   (so updates arrive) and fall back to the cache when offline; other same-origin
   files are served cache-first and refreshed in the background. */
const VERSION = "2.1.0";
const CACHE = "minimal-sudoku-" + VERSION;
const SHELL = [
  "./",
  "./index.html",
  "./minimal-sudoku.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon.svg"
];

self.addEventListener("install", (event) => {
  // Cache each file separately so one missing file (e.g. the page name you do not use) cannot break install.
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(SHELL.map((url) =>
        fetch(url, { cache: "reload" }).then((res) => { if (res && res.ok) return cache.put(url, res); }).catch(() => {})
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("minimal-sudoku-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match("./") || caches.match("./index.html") || caches.match("./minimal-sudoku.html"))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => {
      const refresh = fetch(req).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}); }
        return res;
      }).catch(() => hit);
      return hit || refresh;
    })
  );
});
