// TrendForge AI - Safe Service Worker (No caching, no interference)

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// We DO NOT intercept fetch requests to avoid breaking Flask routes
self.addEventListener("fetch", () => {
  // Intentionally empty
});
