'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"aadhaar.jpg": "367202ed5aa3c1b73b9f485a8a4ec4b8",
"aadhaar.pdf": "d709984412fc44c2c1ae609376e87252",
"assets/AssetManifest.bin": "81c098346b83a72f2797d282fdd65685",
"assets/AssetManifest.bin.json": "9d29d622eaecba35d3610c377cd9e2be",
"assets/AssetManifest.json": "6c4a653d559b9c105bee6fd7150d23d2",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "d27b6b12d96d9cf68f493c78113ce390",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "b3721ba3bde34e5b38b0e1523cccfd7f",
"assets/assets/fonts/Rajdhani-Regular.ttf": "06b5e336b0842925676af9cb04dffe43",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Zina-Regular.ttf": "f3e461df9d2ab2837718d8d13c1a3d9e",
"assets/assets/images/bot.png": "ea553f71a6c83c4bdac044d65436248a",
"assets/assets/images/dash/dash1.png": "ac9d3e804bfc692c064b9647e3ebff5b",
"assets/assets/images/dash/dash2.png": "a0459b08ca3f7039919146638e47919c",
"assets/assets/images/dash/dash3.png": "ef3e42c031cd355e8377a4598b6c41b5",
"assets/assets/images/dash/dash4.png": "af9e4add653abc8b7d88658d40891253",
"assets/assets/images/dash/dash5.png": "1e270352a48a85ef03d2095f62bbf84f",
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
"assets/FontManifest.json": "f3322e52ca391bad92fbd4cff8a08463",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c341cf03a605a89a30e5332cb5cf2a9c",
"assets/packages/animated_icon/assets/activity.json": "8c7cbe8cfb2c35ccc4751194573222a3",
"assets/packages/animated_icon/assets/add.json": "b7bb068a9790921472e8c717fe5ca168",
"assets/packages/animated_icon/assets/alphabetical_sorting.json": "3f2b896ddd3d7f9d9359787eef3e846a",
"assets/packages/animated_icon/assets/angel.json": "ec103cc7e54b24104083c19f44d59ac4",
"assets/packages/animated_icon/assets/battery.json": "31acf00bd98d26ed21250a6d236ee37f",
"assets/packages/animated_icon/assets/bell.json": "668dba34f67b4ed2fe0361a4391cc4aa",
"assets/packages/animated_icon/assets/birthday_cake.json": "715293a88d166b3d166c77c51133d30e",
"assets/packages/animated_icon/assets/block_mic.json": "8688283117e0044ec752ec2421b5c7cd",
"assets/packages/animated_icon/assets/bookmark.json": "37e02b2261b19c5944081d94883e24e3",
"assets/packages/animated_icon/assets/calculator.json": "fe1abd248aff9fbc9f30a33fae8ca1e0",
"assets/packages/animated_icon/assets/calendar-tear.json": "4d6e4bf2c0bd0e845ca1ff161003ebe8",
"assets/packages/animated_icon/assets/calendar.json": "b74760ba851d59bd1acf3307bb0e9c12",
"assets/packages/animated_icon/assets/chat-message.json": "3d3b60d909f1ef7ae22be6f173003fef",
"assets/packages/animated_icon/assets/checkbox.json": "2930689eeba8a91e48be3089dccc53e1",
"assets/packages/animated_icon/assets/checkmark_ok.json": "d43791f67ed2065d8534d30ad3283365",
"assets/packages/animated_icon/assets/circles_menu_2.json": "c433cb02bf56657a42c1bb5963fa607d",
"assets/packages/animated_icon/assets/circles_menu_3.json": "5df3f9c85e0ca9e5bc56b718ece86226",
"assets/packages/animated_icon/assets/clear-symbol.json": "307c246cff2d27c944fb33cf4e24eb28",
"assets/packages/animated_icon/assets/clock.json": "ef46b5eeb36672562513d96f630ccd69",
"assets/packages/animated_icon/assets/cloud.json": "c76e77439df441152e8ab6f7b3bcd12c",
"assets/packages/animated_icon/assets/compass.json": "e29b3f473575de6c02af02da2f28690e",
"assets/packages/animated_icon/assets/confused.json": "30cbf5b57f504158300c82b37d172cf9",
"assets/packages/animated_icon/assets/cool.json": "fed987b806728dfd57109dfa8fa7e4b9",
"assets/packages/animated_icon/assets/cross.json": "4f8186dcb99e125c7cae80c8a6c7d58c",
"assets/packages/animated_icon/assets/crying.json": "57647df4780a9f4af5abc02124eb3dc7",
"assets/packages/animated_icon/assets/day_night_weather.json": "af60779aee2d8d834027bcf5ef2548c5",
"assets/packages/animated_icon/assets/demo.png": "7f9d85174d832fdd9ec3caaf583be682",
"assets/packages/animated_icon/assets/diamond.json": "e983e51ad87489050b061cc4dde04a86",
"assets/packages/animated_icon/assets/discount.json": "8c523e7761603f05583c06a17354b64d",
"assets/packages/animated_icon/assets/document.json": "05b47c11f7dcee983a0e1c24e698fcb2",
"assets/packages/animated_icon/assets/dollar.json": "41a4d363da9e51feade4d774712837b9",
"assets/packages/animated_icon/assets/down-arrow.json": "d1ce2bcb82fe6075a7ed7356da89836f",
"assets/packages/animated_icon/assets/download.json": "5af632f5d17961301b0c4eca42b79d8c",
"assets/packages/animated_icon/assets/drag-left.json": "5bc31de4409a61a7a372da9353cd2a1a",
"assets/packages/animated_icon/assets/drag-right.json": "979c0316830e0f193c4241a9e590cee0",
"assets/packages/animated_icon/assets/edit.json": "139320ad4e8be4aeb5421351744fec46",
"assets/packages/animated_icon/assets/edit_cancel.json": "4ee6ba5b65bf7d2ceb839aa990c7e90e",
"assets/packages/animated_icon/assets/edit_ok.json": "51350be0e5c184d7c524fe38f40902f4",
"assets/packages/animated_icon/assets/expensive.json": "0bb81a1ba4237d2e505c506a319f8bb2",
"assets/packages/animated_icon/assets/eye.json": "bf14651a14e319ac6d2ae8a37168e05f",
"assets/packages/animated_icon/assets/fatal-error.json": "9d82a9938e0eb82288d97f2948948c10",
"assets/packages/animated_icon/assets/favorite_folder.json": "5c5be33497e5752392a757948f81ec5c",
"assets/packages/animated_icon/assets/file.json": "3c5a683c8f0d5847e82447bc91f40d4b",
"assets/packages/animated_icon/assets/fog_weather.json": "75b3d483c81c75eb4bac6fdb79b299ef",
"assets/packages/animated_icon/assets/fullscreen.json": "04fe2e8b50ddf67d14d951414f8667c3",
"assets/packages/animated_icon/assets/gmail.json": "b37689e4d0b1a31ddb7cc6f0b08df20b",
"assets/packages/animated_icon/assets/heart.json": "4fd6bbd2a785c55c3c729217f9981cbc",
"assets/packages/animated_icon/assets/heart_2.json": "ec728a02801a28844116fb7c2b8f70d5",
"assets/packages/animated_icon/assets/home.json": "f7e97ef1b623b8db02a8db2476f37442",
"assets/packages/animated_icon/assets/hourglass.json": "372b56bb7dc3e56090a6494a7fb4d69b",
"assets/packages/animated_icon/assets/info-click.json": "9c4df7c49129c6cafa5c341026d43115",
"assets/packages/animated_icon/assets/internet.json": "de90409fd58251147830605d9896e44c",
"assets/packages/animated_icon/assets/in_love.json": "9d3e528375ee6e063e1a952aa758e67b",
"assets/packages/animated_icon/assets/iphone_spinner.json": "e0d52eb299840750b45a7e80c43e7d55",
"assets/packages/animated_icon/assets/laughing.json": "b6f5507a7f3a6bd4d606a21282615e68",
"assets/packages/animated_icon/assets/left_right.json": "5806bf128cea8c82d106f29a584c1ea0",
"assets/packages/animated_icon/assets/list.json": "fa94a8bf563855b68320e5b76aa5f764",
"assets/packages/animated_icon/assets/live-video-on.json": "638fffb60c94010b7f8d68f550eba331",
"assets/packages/animated_icon/assets/loading_1.json": "75efe45219ef6143429b4b225634449d",
"assets/packages/animated_icon/assets/loading_2.json": "f6e465a44b33233ce28a12ee76045dda",
"assets/packages/animated_icon/assets/loading_3.json": "18e23d18db166f2dff169cc1983f774f",
"assets/packages/animated_icon/assets/loading_4.json": "66268fbf3f4c7dea6a81df21a5a1e46a",
"assets/packages/animated_icon/assets/loading_5.json": "a831cd127c2d019778528f198cfefcc3",
"assets/packages/animated_icon/assets/loading_6.json": "cad4b6ccd0a1e43b9c1ed47133dabb04",
"assets/packages/animated_icon/assets/loading_7.json": "6dd95d36ea9d09924d92f18e14def8ab",
"assets/packages/animated_icon/assets/map.json": "6a4ad8816ccaa5a630279fdef4f06ebe",
"assets/packages/animated_icon/assets/map_pointer.json": "018a74eec55f8959347aefbaf10f9dcb",
"assets/packages/animated_icon/assets/menu.json": "86180df740cc1a224561e130d1b81da2",
"assets/packages/animated_icon/assets/menu_arrow.json": "16081971f09f67a26fc1b3f46b8802b1",
"assets/packages/animated_icon/assets/missed_call.json": "d69450dda953da82afa80f5e14cfcdf2",
"assets/packages/animated_icon/assets/mute.json": "a7cd312791b602731566644cda8f01fd",
"assets/packages/animated_icon/assets/neutral_face.json": "9417a2503732b758f921064ffe09a3f4",
"assets/packages/animated_icon/assets/no_comments.json": "63e9000d6324078c8c9b1848324b3d88",
"assets/packages/animated_icon/assets/numerical_sorting.json": "29ec74211cc6780607b965a97b7ddfa4",
"assets/packages/animated_icon/assets/paid.json": "6bf0ede45aa0082ff8ba2d1c7d1d4df2",
"assets/packages/animated_icon/assets/pause.json": "bd53aeea8b02f227dd372454be07e120",
"assets/packages/animated_icon/assets/play_stop.json": "bed868226187c4132aa075a1277d11b8",
"assets/packages/animated_icon/assets/play_stop_2.json": "1762898e2b28750ae79fc22bf868efc5",
"assets/packages/animated_icon/assets/power-off-button.json": "e0fa101ae10bbed6a3aa85c20c9f47aa",
"assets/packages/animated_icon/assets/print.json": "d54ba53aacc6d8fe2ea22012805d51b2",
"assets/packages/animated_icon/assets/puzzled.json": "365f0e93cef957303301c709fb4e6d63",
"assets/packages/animated_icon/assets/qr-code.json": "66255531a8987c95d9115bbc6b6c4846",
"assets/packages/animated_icon/assets/refresh.json": "0e4661e60e73fb2080d2248f1cfddfb5",
"assets/packages/animated_icon/assets/rotate.json": "0f43b79dc55b93a3d12948ccea68460d",
"assets/packages/animated_icon/assets/save-changes.json": "5813bb5a358888658a51386819169671",
"assets/packages/animated_icon/assets/settings.json": "4b6b3d0922452a469d80f1615fa1f3a0",
"assets/packages/animated_icon/assets/share.json": "bbca283e078a88e5e69608c207166403",
"assets/packages/animated_icon/assets/shocker.json": "6e697424f3c102bc2000c30245ddd14e",
"assets/packages/animated_icon/assets/sign-out.json": "f375d0e8ba61b296e4c0ae9353965773",
"assets/packages/animated_icon/assets/silent.json": "78626c6f16e9300839c518a92a19dd2d",
"assets/packages/animated_icon/assets/skateboarding.json": "36c68e00d9cf64d3f13746ccc3cd2bda",
"assets/packages/animated_icon/assets/skip_backwards.json": "2835cc51b2e2766df5a8bd7a36518312",
"assets/packages/animated_icon/assets/skip_forwards.json": "2af637238aa74085237d8554175a0d3c",
"assets/packages/animated_icon/assets/sleeping.json": "eeab4b61177e0b26feec443cda21e936",
"assets/packages/animated_icon/assets/smile.json": "dc30e2d8ae9ae4117513615780e0b452",
"assets/packages/animated_icon/assets/spinning_arrows.json": "8134b71f41e59b184d48fcd682b7ae43",
"assets/packages/animated_icon/assets/submit_progress.json": "73e31ca174258b4375dd8907bf4e598c",
"assets/packages/animated_icon/assets/thumb_up.json": "ae32094bbaf5a06c2fe785618c8ed4c5",
"assets/packages/animated_icon/assets/toggle.json": "3b2b9be0e4e36fefaa418741f3d0e26c",
"assets/packages/animated_icon/assets/tongue_out.json": "0ad19f80c100e8ebfdd6b3e23ccea745",
"assets/packages/animated_icon/assets/trash_bin.json": "d66d677f84f62f9037f321af36acbfe6",
"assets/packages/animated_icon/assets/tune.json": "4b763ed0cf954405cd7b2d501b63cd99",
"assets/packages/animated_icon/assets/unlock.json": "bda8666eab56bd80fc6af5dbe5702458",
"assets/packages/animated_icon/assets/upload.json": "0bd081997f18f3ec404d5903689b5411",
"assets/packages/animated_icon/assets/volume.json": "caf67509ea1a413e0627e5c6784b05af",
"assets/packages/animated_icon/assets/vomited.json": "1590f196364d415de15209f874366235",
"assets/packages/animated_icon/assets/walk.json": "df4aba413834afcd8af026b1749c6040",
"assets/packages/animated_icon/assets/wifi_search.json": "d37d07bb5deee76c31d7f6c383c6de22",
"assets/packages/animated_icon/assets/wink.json": "05858ea381a0523af1c93b8a045d01c6",
"assets/packages/animated_icon/assets/zoom.json": "5c12ae0d082ada5f1ad1633c556f8c0c",
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
"flutter_bootstrap.js": "a619f4dd82dab7902a14e5160b5b0210",
"icons/Icon-192.png": "11cf43083c086a6822d0d71a849a78d7",
"icons/Icon-192a.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "438f0c4d1f0afd16ba3b0d2b2d234fea",
"/": "438f0c4d1f0afd16ba3b0d2b2d234fea",
"main.dart.js": "1a29ee4543f2047c566c14dd7e4975ae",
"main.dart.mjs": "4bb6b02e88a1bea1abe553d739bda37a",
"main.dart.wasm": "9a34abd5849650327ceb17b5148349c4",
"manifest.json": "c5f77348de3d65f8126c73b9bce93f8c",
"moviez-app/index.html": "693a18018934c5514a4cdd7ecc565c76",
"moviez-app/privacy-policy/index.html": "693a18018934c5514a4cdd7ecc565c76",
"moviez-app/privacy-policy/privacy-policy.md": "d41d8cd98f00b204e9800998ecf8427e",
"pan_card.jpg": "50f7a52dd715a739a4fe83a3fabf7de6",
"pan_card.pdf": "8c5c63c156ac921684c01d1f5e6053ba",
"pdf-creator/index.html": "25823aa17fc5843c382878c80c8ea64f",
"pdf-creator/privacy-policy/index.html": "25823aa17fc5843c382878c80c8ea64f",
"pdf-creator/privacy-policy/privacy-policy.md": "d41d8cd98f00b204e9800998ecf8427e",
"privacy-policy/index.html": "bb96f6fd4e74b29ff297d9748416de8b",
"privacy-policy/privacy-policy.md": "d41d8cd98f00b204e9800998ecf8427e",
"resume.pdf": "3aa65058458f814b08967853f21d8a14",
"resume1.pdf": "7377122e4e0e76e3b222f90a89df2ad8",
"resume2.pdf": "3c5b74881bdd730c473acd57e0693c16",
"resume3.pdf": "089aef95913e6bf9f09930042190daa2",
"resume4.pdf": "5432dfc2edf750415c8446dfbb40b59b",
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
