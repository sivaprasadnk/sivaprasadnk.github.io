'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "584709ba98dc24bd9383e9e97b86f519",
".git/config": "81e80d7114704d6f5751d47682a00c65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "925265df13ca23421cea52b10a12c63d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6bd70bcf3e52a709703ee70b12ce3992",
".git/logs/refs/heads/master": "6bd70bcf3e52a709703ee70b12ce3992",
".git/logs/refs/remotes/origin/master": "d54108c688dd8a446f8a9438bcce939b",
".git/objects/01/b0eecea9f56d5f3296766cc74ccb2e6efc3f91": "7286b52c6fe1114d208d52ad4b11ba0f",
".git/objects/05/5faac069dbfed61ca787f9041f7c2fd6f5f613": "80051cddd1675e20fa96a4e378227f68",
".git/objects/0a/e0b883ded5ccbba30753892ce27f64531522b9": "bcf0ff082b6d4ecb0c9f0da0f806998b",
".git/objects/11/1f5144780ba15413551cc92527d4abfa4da353": "16d7b40d5158b6d17c3bc08b052469b8",
".git/objects/1c/0183c4183b7bef9cdb0211880e06389bdb2c54": "c7652b047762de9d882d5d5991ddba2e",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/09eaf5478af2b809252630d980717e25d8d910": "1dd81f4fec725e35c41d8a427f498ddd",
".git/objects/2f/ec8828b04d71b005199e3d6101424e03163097": "f455b5001b3b3bfa3a9a5679c694e41f",
".git/objects/30/9c56146c423cccf9e4958f4837567430a65a72": "a068d87afb76dde8e0b8971a62acd033",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/da7dd8feaf5e4bb8ea0f1e4c164ac9afd7c1ae": "53bc2839304677f049e56da67817c7db",
".git/objects/37/2402c305182613147ef05855bae60a9073f1f5": "38defcca731584402a04171e1aa54a26",
".git/objects/4a/98c71b31ff605a334e6af330e282093bb54527": "175c6f8dce4a1624634315dafae2fa8c",
".git/objects/4a/c1756666c1f2d042dd47dddf9aaa0e9a91041b": "74d2f785bfe4bc96e5b41059f2f1d65c",
".git/objects/5a/13be961df363e8631c3c2863e9b3fbb414a3fd": "f21b07d3781759981baa1c282bfac7b9",
".git/objects/5c/b36197a7ba7731d4a26c491234c8c2cec033d6": "53fc40c879cd81847c501ba4e70a9ee8",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/63/2d7d4ff2b6992a51c038909b35d463a50d6a4a": "047f77ff53c1767644b7bf93e989860e",
".git/objects/6f/57558d7dc6432c57f286d9319b38b9d86efb5c": "7416b4d74f0358cb24292c94d15f7448",
".git/objects/70/064e9ee61ad7c1a37c162d3714f6f2b89eac95": "dbf924cbc1a2d68c87e1c645ba33d7c5",
".git/objects/78/93df60634c7aaedd24cdd0dba52eb9441dcbf4": "270863ee9300572f33457408f31a6f4d",
".git/objects/78/b33146054557f67aedb7f6192ebec6555558d1": "e6b25c4d5970e480a2a842d65e7a6ac9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/086b7ec9d5f507b6e793d3b9d33dd05f65f409": "081fdbe05ccd36c353b5fe7b68cdc595",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/f33d19ebe8d0f95a5c5905cf357d8e578733d0": "e3514c78691a0ede4a40d59588fa9d5f",
".git/objects/93/701256a05c1e0874f032c4db11d21a238bf755": "e97e6704275986bfbedee26fb76c643a",
".git/objects/9e/0ea24a2223010627f49fc20e3452b209a602f6": "92596e44077ad4d0a26d65fececb1bbb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e1c4a9fba812ec3032aa8920f18969de7d1cd7": "73bc3383d5c704b6a978c0a613177679",
".git/objects/a4/fc2061d5ec30df9db18e477144c67950902308": "4eaac814d60df462658a0468e5319dfd",
".git/objects/a7/f016b6f75d60ac5bf262a650335b8196c79fba": "9ce2dd3cdbb6e44990f9e7411a7f5e95",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/27f34d6488967c10a7c6fb2a6ef7e22c538bf8": "4f4d21ac366a509435e611e0608018a4",
".git/objects/b3/4e02fa64f6dcb0610268771aa25b71926f813e": "a53f601df1674bb8ebaaea29efda8286",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/73b58988855c671b7364c9c7d52956fd615529": "b849342192a5c592dcffb9e18bce8f95",
".git/objects/c5/6b0183b8623e06480035dea1771010a3bb6d3b": "12c795bda7d322378d856025621ea439",
".git/objects/c7/7840c884b844179b96edd0d9cfa12dffec3e3e": "85f14c9f668693ab75f390aa4f864e31",
".git/objects/ca/b140ad4478c706b17060af99897d8123441658": "bd0a49d82cfb618a32d33666ab25f480",
".git/objects/d0/9909563d3f81469bfb5a50de5633007e1ec3b0": "b203b7c56dd785ccb285dac7658f3f81",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/56b128c2c060a0df05f018fdc7d2a465fb6ec5": "f23d8df6b697a9f01b028b8fba49c3da",
".git/objects/ec/a53d3c8630500d1a9003dde52db7ac75e95e68": "894ae1b8484963051cb4f863d29c7711",
".git/objects/ed/d0630e0a85d5b0f8e7573c881c19e6cf67fcc3": "b15180bc56e7ad2a6e2e298d78019942",
".git/refs/heads/master": "f8e9d3f422ee8dae4e1a82b1ddbba681",
".git/refs/remotes/origin/master": "f8e9d3f422ee8dae4e1a82b1ddbba681",
"assets/AssetManifest.json": "26c3ad24e3666c909ce942c8cce83ae4",
"assets/assets/fonts/Courgette-Regular.ttf": "59c3685a73f0f1b7c302dd2d6dabd628",
"assets/assets/fonts/PatuaOne-Regular.ttf": "53290205673345c24884f0eac68f3b74",
"assets/assets/fonts/Vollkorn-Italic-VariableFont_wght.ttf": "cf6621540a829faa7ddafe6ed8d70e8d",
"assets/assets/images/fb.png": "295bf20e36e2661fa52e23b06c212dc8",
"assets/assets/images/greentick.json": "55574dccf524f233580a6e8d0dd41335",
"assets/assets/images/in.png": "a9c847bd495ecddf769ad070246f5331",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/propic.jpg": "305d34fb0c4330319dd229bbfa80980e",
"assets/assets/images/propic1.jpg": "305d34fb0c4330319dd229bbfa80980e",
"assets/assets/images/propic2.jpg": "8c6411797d21b671a2585421893d6ed4",
"assets/assets/images/propic3.jpg": "672618b77912ae0392cc5e728a4d5ba7",
"assets/assets/images/propic4.jpg": "83dfd2d15e6db0f516c469e79b004864",
"assets/assets/images/whatsapp.png": "203adbe4f93bb94d4b6f6a2b22248e34",
"assets/assets/images/whatsapp2.png": "eb522e0906bfcba525163350918c2f27",
"assets/assets/lotties/feedback.json": "5c8b7bf954f36495bbafb4b12c497a84",
"assets/assets/lotties/loading.json": "a8484818735d2511604f84c6e3a47fdc",
"assets/assets/lotties/network-error.json": "93be19a200d0f5696f94f926b9f8b83a",
"assets/assets/lotties/success.json": "324854e9301dc1edee1ccd87127d403d",
"assets/assets/svg/facebook_1.svg": "e39f66046aa444abeedc54602a6d2944",
"assets/assets/svg/facebook_2.svg": "04dd28cc4ae2e324b8fd5ba79cda261f",
"assets/assets/svg/instagram_1.svg": "9749c0be10c90f618efaaa9483a503d4",
"assets/assets/svg/linkedin_1.svg": "3b7b5dada6c060f7b8ebb005ee4878fc",
"assets/assets/svg/telegram_1.svg": "068d75c4f3f3bb8f5f39ba52e5136fd3",
"assets/assets/svg/whatsapp_1.svg": "5042039fd0a06b7e17f062345977658f",
"assets/FontManifest.json": "af3df2dc2ba0d44bc5a8d0d1efb6a7be",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "df39fd9da0bd4b85fc78fafd46ed5703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f1a3c2998201795f8b10d47ca8a2593e",
"/": "f1a3c2998201795f8b10d47ca8a2593e",
"main.dart.js": "4142f2cf2a676852f235415ce0114eef",
"manifest.json": "c5f77348de3d65f8126c73b9bce93f8c",
"version.json": "ecbaabfffdf2314297fcf6fb6e9d7ca8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
