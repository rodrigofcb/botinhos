// Botinhos: service worker
// O jogo funciona offline depois da primeira abertura. HTML: rede primeiro (para receber atualizações);
// ícones e fontes: cache primeiro.
const VERSION = "botinhos-v5";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./sons/gurl.mp3", "./sons/yay.mp3"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(req){
  const cache = await caches.open(VERSION);
  try{
    const res = await fetch(req, { cache: "no-store" });
    if(res.ok) cache.put(req, res.clone());
    return res;
  }catch(err){
    const hit = await cache.match(req, { ignoreSearch: true });
    if(hit) return hit;
    if(req.mode === "navigate") return cache.match("./index.html");
    throw err;
  }
}

async function cacheFirst(req){
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req);
  if(hit) return hit;
  const res = await fetch(req);
  if(res.ok || res.type === "opaque") cache.put(req, res.clone());
  return res;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.origin === self.location.origin){
    e.respondWith(/\.(png|webmanifest|mp3)$/.test(url.pathname) ? cacheFirst(req) : networkFirst(req));
    return;
  }
  if(url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") e.respondWith(cacheFirst(req));
});
