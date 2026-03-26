'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "98dd744de7ad9521213068eb20ad8625",
"assets/AssetManifest.bin.json": "5af845a67412091fa7218d36a88af7a1",
"assets/AssetManifest.json": "46309e521793c318b5f0078692745f75",
"assets/assets/images/baha/baha1.png": "1e43e771c5f899705522373c16b49d76",
"assets/assets/images/baha/baha10.png": "fe22ac2030f5837a8b76e0a655096785",
"assets/assets/images/baha/baha11.png": "09dc61434a470a3109a4604ecbdc9cf0",
"assets/assets/images/baha/baha12.png": "90afc2487956d5085fdad29ac58f5fb8",
"assets/assets/images/baha/baha2.png": "692887e2799a7c12c296423a8fc4c2b8",
"assets/assets/images/baha/baha3.png": "6f32e3facc78ae91c040f719f0f61f07",
"assets/assets/images/baha/baha4.png": "b513b076a444a2d7345516af90fc4e31",
"assets/assets/images/baha/baha5.png": "214b8e4a41ca3168db118371239ec137",
"assets/assets/images/baha/baha6.png": "5dac9de188e992a3a66f203a5ba71dcb",
"assets/assets/images/baha/baha7.png": "813f7292e90e3af6a9047d2213a8d838",
"assets/assets/images/baha/baha8.png": "2b1714267ae0a2c51771dca03744bd5b",
"assets/assets/images/baha/baha9.png": "a7ca7bf8ca64915ae3c826370d67b5ca",
"assets/assets/images/flutter.jpg": "66f88a2d297313e07f5cc104f587d66d",
"assets/assets/images/flutter2.jpg": "840fb087b7344fd83d9789707e2060e1",
"assets/assets/images/flutter3.jpg": "a344facf5220fd7ea6f0ed8c0f0afbcf",
"assets/assets/images/hero_bg.jpg": "db98acdd22c943f166ee65bbf12299e0",
"assets/assets/images/islami/islami.png": "2d0a75e39098ff98e24e1b18f9a09a62",
"assets/assets/images/islami/islami1.png": "aa8d2dee4d2048004f1d838ab7d2cd1e",
"assets/assets/images/islami/islami2.png": "28fa79f85ca792b0bba0ce74e45e99a1",
"assets/assets/images/islami/islami3.png": "edc9ba9c946a0434a0b0ac93751025ad",
"assets/assets/images/islami/islami4.png": "b9c0483db07e9d67f8fdcae8297a40bd",
"assets/assets/images/islami/islami5.png": "48d84f27a7c23f08ce077a852eeb334d",
"assets/assets/images/movie/movies.png": "2e56aa4e53bb186c31ead0e6b4584cbe",
"assets/assets/images/movie/movies1.png": "e55a6f51aae00c1cb1cfc9a9348a617d",
"assets/assets/images/movie/movies2.png": "baad1781d10647aed95221364f55c81f",
"assets/assets/images/movie/movies3.png": "ef061a058b436879aa83d98f085f3425",
"assets/assets/images/movie/movies4.png": "7898074ad5bef173059f5175e3064577",
"assets/assets/images/movie/movies5.png": "007da5947be69923d3272df6150e9f96",
"assets/assets/images/news/news.png": "44591acb45a38648918d3742289a71e9",
"assets/assets/images/news/news1.png": "10c35e70f82bc1fc89ff6f877dc5a7d6",
"assets/assets/images/news/news2.png": "173b80292522ea31f3b5eaa4d949eef1",
"assets/assets/images/news/news3.png": "800c210448dcbed7132229902ea62efd",
"assets/assets/images/news/news4.png": "a4c5cbd26d40f1908006e81f7eaacb50",
"assets/assets/images/pos/pos1.png": "603e6ba2186a49a2d2716d5206d5a072",
"assets/assets/images/pos/pos2.png": "eda37d812d309ce5517c18118491110d",
"assets/assets/images/pos/pos3.png": "bbaef6bd6ed4379438475e0dec71bcbf",
"assets/assets/images/pos/pos4.png": "e28ed5e1926e2306dbc6a8e101242b90",
"assets/assets/images/pos/pos5.png": "ee190d69ee278b038c31c7923c97490e",
"assets/assets/images/pos/pos6.png": "be9fccc15600942c036649d48f3073a0",
"assets/assets/images/pos/pos7.png": "e27e2e9c03501ca3562f28141a262e48",
"assets/assets/images/pos/pos8.png": "ce9b421bd5be0500e9c6dfee209e585b",
"assets/assets/images/route/route1.png": "973b641e0f2fcd0cdd8be0968b7bf422",
"assets/assets/images/route/route2.png": "536c3f414d79644da8e661f1ed1f1764",
"assets/assets/images/route/route3.png": "62a00c63a794122164948e34eb542dd8",
"assets/assets/images/route/route4.png": "c70252ffb04735b5791195c80a788788",
"assets/assets/images/todo/todo1.png": "cbd027a24a7352ea289febde9647a546",
"assets/assets/images/todo/todo2.png": "a567fe7ef2d592b943464f26822013d4",
"assets/assets/images/todo/todo3.png": "12414503ef2fc8ff558a5f206f058422",
"assets/assets/images/todo/todo4.png": "79759b3fcbca79088173283b710c57cb",
"assets/assets/images/todo/todo5.png": "c81c4da085ed321a3572775b211efa80",
"assets/assets/images/todo/todo6.png": "ad1b908dfc16ab2f0ede5d6ed6d27912",
"assets/assets/images/todo/todo7.png": "532fcf75bb16f3318035e10038bfc482",
"assets/assets/images/todo/todo8.png": "cdac96cdbf538c3ac085b4fcf08b362d",
"assets/assets/images/todo/todo9.png": "c57f91443b4f59a1d3bfadc3db00bd13",
"assets/assets/images/weather/weather.png": "8a98c6cfdf7685509520e91b55187c7e",
"assets/assets/images/weather/weather2.png": "09ea013b7e09536c7bde485f2ca5af95",
"assets/assets/images/weather/weather3.png": "c0bdf8b1ffbf0215ffd87cd23ea69516",
"assets/assets/images/weather/weather4.png": "058d35ef067f1112ed5d93cd8d284ba2",
"assets/assets/images/weather/weather6.png": "bd521c23da834425606e0f95cecb8adf",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/fonts/MaterialIcons-Regular.otf": "2c4f7d582a2d9e695014f0b6c554c79a",
"assets/NOTICES": "127eea87aed2b389e045dd0d1dab963f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "6baab9a379eaf2a0201afa2f785dee42",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "5cf8641acd10a8780d6acd9f18516185",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "878de7988ffe4d82635f3a5c55d6950e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "197a9d3800a911e690c58f988044aa32",
"/": "197a9d3800a911e690c58f988044aa32",
"main.dart.js": "39640d48e9bbdb7ed2c5a83ea0b9b33a",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
