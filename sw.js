const C='trajet-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png']))));
self.addEventListener('fetch',e=>{if(new URL(e.request.url).origin===location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
