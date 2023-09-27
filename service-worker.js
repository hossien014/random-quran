self.addEventListener('install', function (event)
{
      event.waitUntil(
            caches.open('my-app-cache').then(function (cache)
            {
                  return cache.addAll([
                        '/',
                        '/index.html',
                        '/script.js',
                        '/style.css',
                        // Add other assets to cache
                  ]);
            })
      );
});

self.addEventListener('fetch', function (event)
{
      event.respondWith(
            caches.match(event.request).then(function (response)
            {
                  return response || fetch(event.request);
            })
      );
});

if (!navigator.onLine)
{
      console.log("offline")
}