'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ea0b112a5c5cd00a42f49f86975bb2c6",
"assets/assets/fonts/JF-Flat-Bold.ttf": "9c7e9d108d8c9d3b9511f8c1e4e8951a",
"assets/assets/fonts/JF-Flat-Regular.ttf": "a742499d94a75f0b9a87b620f5f2acec",
"assets/assets/fonts/Tajawal-Black.ttf": "a515f84cb1a7ed89288dba4be9719722",
"assets/assets/fonts/Tajawal-Bold.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/assets/fonts/Tajawal-ExtraBold.ttf": "7bbbfd28e8dbd463c9f449aa96ffd7ed",
"assets/assets/fonts/Tajawal-ExtraLight.ttf": "8c37c5fa0335c5d15c2a9f182af1eeb0",
"assets/assets/fonts/Tajawal-Light.ttf": "fbca61ce5f0321ab500bdbb168b775b0",
"assets/assets/fonts/Tajawal-Medium.ttf": "2bfe3ee2145f6755e4b5960310daee03",
"assets/assets/fonts/Tajawal-Regular.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/assets/fonts/URW-DIN-Bold.ttf": "cd818848ed937e729170a169e358c446",
"assets/assets/fonts/URW-DIN-Demi.ttf": "f96b45a92354fc87df9b93a574e1acef",
"assets/assets/fonts/URW-DIN-Medium.ttf": "b3897000e9cffb576cd2725b208927e3",
"assets/assets/fonts/URW-DIN-Regular.ttf": "a7229cbf81f4b46f978a0acaa4fff370",
"assets/assets/fonts/URW-DIN.ttf": "a7229cbf81f4b46f978a0acaa4fff370",
"assets/assets/icons/apple.png": "3573a2e2dbab9c2f845caf82c36bdaf6",
"assets/assets/icons/cash.png": "99607a01d24b217dc898b8cbfaef14f2",
"assets/assets/icons/checkk.png": "fff107956adc8e2b80e1253b8bead266",
"assets/assets/icons/egypt.png": "61b21dd910b579fa7853e4e186cea5b3",
"assets/assets/icons/face.png": "c31c0f16ff859030d6959adb8b145d37",
"assets/assets/icons/facebook.png": "c34b5b332557f8fd17d2cddf596cdbcf",
"assets/assets/icons/googlee.png": "16679c2f71cee26ca055ef4516548199",
"assets/assets/icons/home.png": "d9e3e3b6070cb029f204142b2873926d",
"assets/assets/icons/homea.png": "9c1a9159d5197518923f171bbfc09808",
"assets/assets/icons/magnifying.png": "ed48def8f353c8683417dc31682ebb31",
"assets/assets/icons/more/check.png": "209b535f8112d70a9cb1df2d01fdc201",
"assets/assets/icons/more/clock.png": "fb1c5a2bd4867ca3de543a9db328651c",
"assets/assets/icons/more/contact.png": "a0296c3cd51186caa727f9498307e640",
"assets/assets/icons/more/delete.png": "2b9fec2f032c4dfc62c60a8775c1a649",
"assets/assets/icons/more/goo.png": "de9355f5205120b74c75f4bf1b0d3ca3",
"assets/assets/icons/more/heart.png": "d87c1e87b5804d72753bb48bff8c7f33",
"assets/assets/icons/more/heart2.png": "93ba51de74924ef6d5ff4ba4f7b4b656",
"assets/assets/icons/more/info.png": "d7778883e36fa8ce418e72c90f0251bd",
"assets/assets/icons/more/lang.png": "7a6b44abafb363ab0ce505bc25741c24",
"assets/assets/icons/more/like.png": "42d1ae123e1f311a1ac532376b434cc1",
"assets/assets/icons/more/logout.png": "f1c7944934ed0540a1604d132bc1a201",
"assets/assets/icons/more/noun_bookinga.png": "117b8001b88fb5736e5584187f4f94b8",
"assets/assets/icons/more/noun_cas.png": "f614dd78debd71f988c58467e009764e",
"assets/assets/icons/more/noun_edi.png": "016598fdf0ebd66a3bb77443129fe4ee",
"assets/assets/icons/more/noun_edit.png": "71e84959b407835fc0e4747920e62941",
"assets/assets/icons/more/noun_price.png": "c18c43443499cb3aa66512e38a444f83",
"assets/assets/icons/more/noun_settings.png": "01ada13fe3a75b7bc480d8196befdfd1",
"assets/assets/icons/more/omla.png": "98c8fcae9fe5f7a8a2071a675f4ca51d",
"assets/assets/icons/more/price.png": "a16440a3ce599d3f77490b8f86e38103",
"assets/assets/icons/more/review.png": "7d37d35b80e704157f9b8f084c79106e",
"assets/assets/icons/more/revieww.png": "33602888d7ec14fc9bdb6573a5e9a890",
"assets/assets/icons/more/setting.png": "63645e39e915e326f56755aea6e415e1",
"assets/assets/icons/more/share.png": "dd0f4e638b6b7e1e91c393cdb69cdba4",
"assets/assets/icons/more/terms.png": "96b6b9de312c6c4ef8423870c908880d",
"assets/assets/icons/more/user.png": "3f2dbc0b906da396f55aa5e6c655c9a7",
"assets/assets/icons/more/visa.png": "07a0f473b79f912b0bd7e3bbc16f2513",
"assets/assets/icons/more/wallettt.png": "8ff703ddb788ce76d4e5b6155206f1f9",
"assets/assets/icons/more/whatsapp.png": "9ba868ba749c399a6e2dc2c1fde1ae64",
"assets/assets/icons/noun_binocular.png": "67dbb487dc23e607917051304580f2c9",
"assets/assets/icons/noun_binocularsa.png": "61b6c686d24aa12e75928dfcf75374a7",
"assets/assets/icons/noun_booking.png": "28a359dfa7200032e83f42e170601f5b",
"assets/assets/icons/noun_bookinga.png": "b73b10ce5b9f2851c7bfad87176b99a1",
"assets/assets/icons/noun_exclamation.png": "7ed09b745e50183ef6919949d4da2a3c",
"assets/assets/icons/noun_profile.png": "84e5bfa5ccf4d8e8d42a5d629f97528c",
"assets/assets/icons/noun_profilea.png": "8df96c0ca38d55e4285fb6d3910020b6",
"assets/assets/icons/pin.png": "62a07fe2a08b77164e179480eec34f24",
"assets/assets/icons/place2.png": "f590b4d5c90568eb9d63d0141a5a7e63",
"assets/assets/icons/tw.png": "7c1fc07c5d58c0e66ec6a5c3a57e8c20",
"assets/assets/icons/youtube.png": "1b6d54ac722ebd327c0f001ee8c4fc16",
"assets/assets/images/1212.jpg": "22ee38c3079265d8fe36b0ec6d748ee9",
"assets/assets/images/1313.jpeg": "33304f484836e835787e7f2421e5dc38",
"assets/assets/images/1414.jpg": "c11b1758a2497bc5aef1d75fadb57eb3",
"assets/assets/images/1515.jpg": "254f6989d9be135aaa6117b1b235a25f",
"assets/assets/images/appbar.png": "fc145bba73a3d446cf7c8b31ada7a727",
"assets/assets/images/appbar2.png": "9651ea2739dedb783488fc6fb32e4aa8",
"assets/assets/images/apple.png": "0a41f4927aa7175d73d7ed06a3e236fa",
"assets/assets/images/applw.png": "8448de4f83cd9cafe75f66d71ea858e9",
"assets/assets/images/back5.gif": "2a83c2f1510605c4955d8e2a3156f303",
"assets/assets/images/back6.gif": "9a3f233fe35c00ad76cd9bd2d8a20a97",
"assets/assets/images/back7.gif": "fa16e96ccf29c9f9504ad76d13447e79",
"assets/assets/images/c1.png": "ef715ad2b45c2600a66a8d4d721652fe",
"assets/assets/images/c2.png": "c6782e0d2223652c457b52b68f0bc84c",
"assets/assets/images/circle.png": "d294e2fa2ab77c3c8fa3c70246d36e36",
"assets/assets/images/city.png": "4ca3827d9f8817024b7561398b074161",
"assets/assets/images/company.png": "8e0d99d59c51fefc5ba69e5a552e9c6f",
"assets/assets/images/company2.png": "0dcddb0538fdaa5f65f74ea0da2aa3c2",
"assets/assets/images/earth.jpg": "b7cb26a88a2e50ad00f5b10595d10948",
"assets/assets/images/editor-1.jpg": "dd72e7e0d1f4f19ad804db0f1e30f0c5",
"assets/assets/images/editor-2.jpg": "b2df684b5525dfb51755bd3f89b42c4e",
"assets/assets/images/editor-3.jpg": "661a68839be840c9f2c7a6511102386e",
"assets/assets/images/facebook.png": "de263854afb3cb348a62d58f10b707a0",
"assets/assets/images/gogle.png": "75dbc6b5325c1cb14bc4781dcbfc14c9",
"assets/assets/images/googleplay.png": "2fc5dd67e3d3b1b3cbc46263e2fe9109",
"assets/assets/images/goplus.png": "db874e96544c5b21a0e477e262201f56",
"assets/assets/images/hero-1.jpg": "cfb72829aef0cc46f6d513465ba7cf7b",
"assets/assets/images/hero-2.jpg": "0674e8e6d59823b75fa8c32846884e77",
"assets/assets/images/hero-3.jpg": "9dbd01c87ed06564676e6d6fa0c7e836",
"assets/assets/images/image10.png": "22ee9c7e284a7e432dd66881abb5bbef",
"assets/assets/images/intro.png": "c17d5de9e207bdbcd9c1167af42ca18a",
"assets/assets/images/login.png": "5f1ad3ccd4fcb7e65d3351878ef60f8f",
"assets/assets/images/logo.png": "43975d20c1df9f33ce3bf1ddbb18e37b",
"assets/assets/images/logonoti.png": "42bf941c516d766ab5d9ccea4ab21bae",
"assets/assets/images/no-imag.gif": "44f3336600515db04a02204fab5419ef",
"assets/assets/images/no-image.gif": "e0bd52cdff658fd128a6b81059c0e3ae",
"assets/assets/images/noitem2.gif": "d0cf8af21740fc30c2a9ad9027876822",
"assets/assets/images/person.png": "e705b430021d7bbae2a9876585f8acaf",
"assets/assets/images/QR-code.png": "3b85e9ce9c849022a7818a19739b77bd",
"assets/assets/images/ringing.png": "71e83144774b6a1ed4ae16bccac0c357",
"assets/assets/images/sea.png": "4c5104c961fa130b8088416b5c8d504f",
"assets/assets/images/sea__back.png": "07e1f0d9a412e13e17e3c870d6e5ffc5",
"assets/assets/images/see2.png": "9b9f280949950f65f21caa28e96fcc02",
"assets/assets/images/tw.png": "354a48184fa1222255db1e878bfa8a34",
"assets/assets/images/wallet.png": "2258acdb29915cc82701cee66fe9a3d3",
"assets/assets/images/youtube.png": "2b922855e5be01c270d955f55ca80e4d",
"assets/FontManifest.json": "d993a191bb029ceed0cf7492f9aa2482",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "90e6a18523f182b35d29906655f85a2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "215a3775b9f903b6dcb5afca60c51f97",
"/": "215a3775b9f903b6dcb5afca60c51f97",
"main.dart.js": "6006659ac9a10c517616d69692b0582f",
"manifest.json": "989e1f61c50fbef5c623fd27b4c4f3a7",
"version.json": "dccebdede30c0c1e36f620ecb467e370"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
