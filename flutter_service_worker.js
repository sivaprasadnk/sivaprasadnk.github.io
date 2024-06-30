'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a2ea0ef8ecd49f51224383dc9c441b37",
"assets/AssetManifest.bin.json": "5d761451f6228827e5d7c97fe5a684b8",
"assets/AssetManifest.json": "45b574f7e173591b712737a87b71d220",
"assets/assets/fonts/Courgette-Regular.ttf": "59c3685a73f0f1b7c302dd2d6dabd628",
"assets/assets/fonts/Gugi-Regular.ttf": "c9e52a059afc82ec754b631fde8ad987",
"assets/assets/fonts/PatuaOne-Regular.ttf": "53290205673345c24884f0eac68f3b74",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "d27b6b12d96d9cf68f493c78113ce390",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "b3721ba3bde34e5b38b0e1523cccfd7f",
"assets/assets/fonts/Rajdhani-Regular.ttf": "06b5e336b0842925676af9cb04dffe43",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Vollkorn-Italic-VariableFont_wght.ttf": "cf6621540a829faa7ddafe6ed8d70e8d",
"assets/assets/fonts/Zina-Regular.ttf": "f3e461df9d2ab2837718d8d13c1a3d9e",
"assets/assets/images/bot.png": "ea553f71a6c83c4bdac044d65436248a",
"assets/assets/images/dash/dash1.png": "ac9d3e804bfc692c064b9647e3ebff5b",
"assets/assets/images/dash/dash2.png": "a0459b08ca3f7039919146638e47919c",
"assets/assets/images/dash/dash3.png": "ef3e42c031cd355e8377a4598b6c41b5",
"assets/assets/images/dash/dash4.png": "af9e4add653abc8b7d88658d40891253",
"assets/assets/images/exp_icon.png": "493d26849e047df3499d382ba6c82c8c",
"assets/assets/images/google-play.png": "dc6d34239efe6e011b684db3a8376c9b",
"assets/assets/images/mesh1.jpg": "9c32f9d5fb93a7d10db0ed22bf75fccf",
"assets/assets/images/picWithBlob.png": "43a197bb071c8a61c61d8c6667939b37",
"assets/assets/images/propic.jpg": "305d34fb0c4330319dd229bbfa80980e",
"assets/assets/images/propic1.jpg": "305d34fb0c4330319dd229bbfa80980e",
"assets/assets/images/propic2.jpg": "8c6411797d21b671a2585421893d6ed4",
"assets/assets/images/propic3.jpg": "672618b77912ae0392cc5e728a4d5ba7",
"assets/assets/images/propic3.png": "11cf43083c086a6822d0d71a849a78d7",
"assets/assets/images/propic4.jpg": "83dfd2d15e6db0f516c469e79b004864",
"assets/assets/images/propiccc.png": "cd5e09e69ec9e3e6cf6c406f9021d261",
"assets/assets/images/quizApp/design1.png": "9ba4480bfeaa127a686d7d62e6f7db73",
"assets/assets/images/quizApp/screen1.png": "7f5999b1b06980d86f2798a131476125",
"assets/assets/images/quizApp/screen2.png": "efecfdd4154bf72f2300792b643616d9",
"assets/assets/images/quizApp/screen3.png": "4ee4783a2c333bfddec210f619fceab7",
"assets/assets/images/quizApp/shotsnapp-1650783036.899.png": "5c7aade614823c1ed5a3a40da6fd146c",
"assets/assets/images/quotesApp/screen1.png": "e369054cc081a18fa4151ae6464dc028",
"assets/assets/images/quotesApp/screen2.png": "e00209d2ba8ff19fc15acd907603513b",
"assets/assets/images/spquotes.jpeg": "bf01c431758d4a06f9f94eb096f30468",
"assets/assets/images/website/screen.png": "d3b70e84ca729d603815134a65d8305c",
"assets/assets/images/website/screen2.jpg": "fa66be9bfdd95dc25c253bd2b0f7f7f8",
"assets/assets/images/website/screen3.png": "7179762bf51deb83b5645b29efcd8982",
"assets/assets/images/website/screen4.png": "9ade3ecfc7948f58415f713bdcc714a2",
"assets/assets/lotties/astronaut-laptop.json": "dd11b7c0d305b8da5f1c186aa98d089f",
"assets/assets/lotties/blob.json": "80a66d660631ee601dbb8fb529d4970c",
"assets/assets/lotties/congrats.json": "8548414b64b30e977b48fae293b4f9e7",
"assets/assets/lotties/contact.json": "b95891a4a65d362cf26a88a3f8af8457",
"assets/assets/lotties/contact1.json": "cf15a7c5a19fa16f1cf391ff92f0fe8c",
"assets/assets/lotties/contactme.json": "b95891a4a65d362cf26a88a3f8af8457",
"assets/assets/lotties/dev1.json": "65fd4a188420243954d3e380882e1381",
"assets/assets/lotties/dev2.json": "5f4f88c41bcba76afc37d1ab152e1757",
"assets/assets/lotties/dev3.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lotties/dev4.json": "44160bee5d16cd64ea65b21f3942b925",
"assets/assets/lotties/dev5.json": "065288262feb544b685d11f0ec106221",
"assets/assets/lotties/dev7.json": "b5a838f23c4d639499ce76f43f8e349a",
"assets/assets/lotties/dev8.json": "37288e86cd82762d09a66e4787c7b487",
"assets/assets/lotties/feedback.json": "5c8b7bf954f36495bbafb4b12c497a84",
"assets/assets/lotties/hand.json": "2d27b677f9e5cda3a91bd25f9f788cc0",
"assets/assets/lotties/loading.json": "a8484818735d2511604f84c6e3a47fdc",
"assets/assets/lotties/mobile-app-process.json": "7f9565fd3a92b9069f7f07faca971b0f",
"assets/assets/lotties/network-error.json": "93be19a200d0f5696f94f926b9f8b83a",
"assets/assets/lotties/online-work.json": "b35181376b1cd01fb214816b7b88c6c9",
"assets/assets/lotties/reindeer.json": "045d51168f12e1f2b01f1b2ba4bf129d",
"assets/assets/lotties/robot_hello.json": "d5a14aa8e9b168c84856f599f6b45f2e",
"assets/assets/lotties/success.json": "324854e9301dc1edee1ccd87127d403d",
"assets/assets/lotties/tree.json": "d2d8d8ede17559c5de97d251c974a3a8",
"assets/assets/lotties/work.json": "8f8cc664f6bf737bbcd573fe8229580e",
"assets/assets/lotties/xmas.json": "9213d75257ba1a19c569643aa06581e0",
"assets/assets/svg/blob1.svg": "433bc2cb4f7132d9612cc18551a2be08",
"assets/assets/svg/blob2.svg": "401c1754be3453b85d23a91425ddd304",
"assets/assets/svg/blob3.svg": "3bff0b40aa1600792f3aa80aa58ba2c7",
"assets/assets/svg/blob4.svg": "c25aa692b8419c9fe9d157122c7d808e",
"assets/assets/svg/facebook_1.svg": "e39f66046aa444abeedc54602a6d2944",
"assets/assets/svg/facebook_2.svg": "04dd28cc4ae2e324b8fd5ba79cda261f",
"assets/assets/svg/instagram_1.png": "6a223be08541c86ea36ec1e61f0f01d0",
"assets/assets/svg/instagram_1.svg": "9749c0be10c90f618efaaa9483a503d4",
"assets/assets/svg/linkedin_1.svg": "3b7b5dada6c060f7b8ebb005ee4878fc",
"assets/assets/svg/telegram_1.svg": "068d75c4f3f3bb8f5f39ba52e5136fd3",
"assets/assets/svg/wave.svg": "3d51290de60d7a2c910570f524050ef2",
"assets/assets/svg/whatsapp_1.svg": "5042039fd0a06b7e17f062345977658f",
"assets/FontManifest.json": "5514cfca37424a7b7712fc8ebe834d43",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bfd4b224508c6eeb8a8f9d0f0bdaa4f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "1975f000d822abd1f269ca742db33e63",
"canvaskit/canvaskit.wasm": "c109b708145a04614d235f44f08f0c4f",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "d1f125ac731e83b4e3c69d7acff5b7d0",
"canvaskit/chromium/canvaskit.wasm": "dd35c385333b6ab30ab6256c81a2b937",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "019ce15725b662107018065e47e5e7fc",
"canvaskit/skwasm.wasm": "dc95323b43faaace3b9fb210bf617b61",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "dfb36ef6f61a0cbf1632c858cf9bd139",
"icons/Icon-192.png": "11cf43083c086a6822d0d71a849a78d7",
"icons/Icon-192a.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "30bfcdf1e56bee90b03aa8ddcd1fa7de",
"/": "30bfcdf1e56bee90b03aa8ddcd1fa7de",
"main.dart.js": "af1678e7e64210c2f954f024a6a88040",
"main.dart.mjs": "6b0cc6080da7e1d58b1b68b57c1bea95",
"main.dart.wasm": "4dc82d2004eedc17ea5316fd8949b253",
"manifest.json": "c5f77348de3d65f8126c73b9bce93f8c",
"moviez-app/index.html": "693a18018934c5514a4cdd7ecc565c76",
"moviez-app/privacy-policy/index.html": "693a18018934c5514a4cdd7ecc565c76",
"moviez-app/privacy-policy/privacy-policy.md": "d41d8cd98f00b204e9800998ecf8427e",
"pdf-creator/index.html": "25823aa17fc5843c382878c80c8ea64f",
"pdf-creator/privacy-policy/index.html": "25823aa17fc5843c382878c80c8ea64f",
"pdf-creator/privacy-policy/privacy-policy.md": "d41d8cd98f00b204e9800998ecf8427e",
"privacy-policy/index.html": "bb96f6fd4e74b29ff297d9748416de8b",
"privacy-policy/privacy-policy.md": "d41d8cd98f00b204e9800998ecf8427e",
"resume.pdf": "c96b351864c0b0d773365fca192145e7",
"version.json": "0e288361cad222570e4fc3dcffc8c25f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
