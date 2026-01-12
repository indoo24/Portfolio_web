'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eedbf152e1b68490b2d82682ade3a28f",
"assets/AssetManifest.bin.json": "aaad63228e4843a8623ec2cc50b8bdaf",
"assets/AssetManifest.json": "c32a49d417f17a03f989c7df3cc54cc3",
"assets/assets/images/add_sheet.png": "cbd027a24a7352ea289febde9647a546",
"assets/assets/images/add_sheet_arabic_dark.png": "a567fe7ef2d592b943464f26822013d4",
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
"assets/assets/images/cs_degree.png": "93ec1eb7be754a744d78dfb4779b5836",
"assets/assets/images/depi.png": "cda090d044bbb249073aab9d3bbf746f",
"assets/assets/images/edit%2520task.png": "12414503ef2fc8ff558a5f206f058422",
"assets/assets/images/flutter.jpg": "66f88a2d297313e07f5cc104f587d66d",
"assets/assets/images/flutter2.jpg": "840fb087b7344fd83d9789707e2060e1",
"assets/assets/images/flutter3.jpg": "a344facf5220fd7ea6f0ed8c0f0afbcf",
"assets/assets/images/flutter_diploma.png": "d6daf9234fac77e5be299d1bad7dedb3",
"assets/assets/images/hero_bg.jpg": "db98acdd22c943f166ee65bbf12299e0",
"assets/assets/images/home.png": "6ca11a223e313611b5a6fa479fcb3548",
"assets/assets/images/home_screen_dark.png": "79759b3fcbca79088173283b710c57cb",
"assets/assets/images/home_screen_light.png": "c81c4da085ed321a3572775b211efa80",
"assets/assets/images/movie1.png": "d4deb22f1b370a95956fb58d1af14c65",
"assets/assets/images/movie2.png": "634f5f50828e257a95e90cc341b76be0",
"assets/assets/images/movie3.png": "195075b62de3945820dfd71ea539d22b",
"assets/assets/images/pos/pos1.png": "603e6ba2186a49a2d2716d5206d5a072",
"assets/assets/images/pos/pos2.png": "eda37d812d309ce5517c18118491110d",
"assets/assets/images/pos/pos3.png": "bbaef6bd6ed4379438475e0dec71bcbf",
"assets/assets/images/pos/pos4.png": "e28ed5e1926e2306dbc6a8e101242b90",
"assets/assets/images/pos/pos5.png": "ee190d69ee278b038c31c7923c97490e",
"assets/assets/images/pos/pos6.png": "be9fccc15600942c036649d48f3073a0",
"assets/assets/images/pos/pos7.png": "e27e2e9c03501ca3562f28141a262e48",
"assets/assets/images/pos/pos8.png": "ce9b421bd5be0500e9c6dfee209e585b",
"assets/assets/images/route1.png": "973b641e0f2fcd0cdd8be0968b7bf422",
"assets/assets/images/route2.png": "536c3f414d79644da8e661f1ed1f1764",
"assets/assets/images/route3.png": "62a00c63a794122164948e34eb542dd8",
"assets/assets/images/route4.png": "c70252ffb04735b5791195c80a788788",
"assets/assets/images/settings_arabic_dark.png": "ad1b908dfc16ab2f0ede5d6ed6d27912",
"assets/assets/images/settings_light.png": "532fcf75bb16f3318035e10038bfc482",
"assets/assets/images/sign_in.png": "cdac96cdbf538c3ac085b4fcf08b362d",
"assets/assets/images/sign_up.png": "c57f91443b4f59a1d3bfadc3db00bd13",
"assets/assets/images/splash.png": "a82248de8abc666d70cb8f861866a059",
"assets/assets/images/splash2.png": "946888f42e8613d17e698c4be386012e",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/fonts/MaterialIcons-Regular.otf": "3ed436b5b7570969c4a64f68d4ee659a",
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
"flutter_bootstrap.js": "64149750276f97efa93dd5a55124ded3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59e43752dda3595b2d7d6fa5ee24d50b",
"/": "59e43752dda3595b2d7d6fa5ee24d50b",
"main.dart.js": "133bd9ccae858143e225c6caab501af0",
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
