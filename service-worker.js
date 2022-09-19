/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "471b287faae90361f2dee471727b5cc7"
  },
  {
    "url": "assets/css/0.styles.c986e881.css",
    "revision": "a42f4bd6b90ab87430d2b9ff5d1dc994"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.3e94535d.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.cf8bfb2f.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.bdfba657.js",
    "revision": "03ecf82cefce3ebbbb2644c493aaa943"
  },
  {
    "url": "assets/js/13.e21f5614.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.58f23e59.js",
    "revision": "7d5adaaf2e449ab6248b4c69383d1507"
  },
  {
    "url": "assets/js/15.45732e83.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.b87c7e66.js",
    "revision": "b7e9523311038d2a3f2cdcb6c88ea958"
  },
  {
    "url": "assets/js/17.cf8d5fc5.js",
    "revision": "072b64ec8e2ec3611e91b2ad003707a3"
  },
  {
    "url": "assets/js/18.558301ea.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.7ba65a8e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.38ad200e.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.e9124f59.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.f99d6d8e.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.b9207daf.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.c432a680.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.64495c93.js",
    "revision": "947c4b48429645447634b244abd0c2d9"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "e4ac8b80ca46897b05d53c7aef6cba6e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6e6414220d8d43363898e9f3eab04b5b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d7e83fa97bd0c083ca476fbb39ead7f8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "465cab5092caa9ad22a3ee70567a6404"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "70156fa36027e02ef0ccb309feba5e3a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "130f75a3b31eb2b3e1651d338cfc125e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "e8a25a00fad0ee77319260abc821f463"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "75acf0948343d8fe16b36a951f5ace48"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0e2a5ea0ebd6882c784229e06d2d760a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "49fd14a16e0f43ce7e1189ed60479739"
  },
  {
    "url": "tags/js/index.html",
    "revision": "001edf5e46c16a53bdd1097c019122a6"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "da2570a1a6a3d92b81cf71bc51cf1d92"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "138eac066c1f1433fa575d4787c4a390"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e690352e7fa72e4d314e9c2d78006204"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "38334d7d61b536608479e8a212514c6a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "47c8bc814aad103781038e3a99a4f523"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ee932154d13f1aba8daf6e354bfa5b50"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1e2aec77cd549fcf7c0ccb7c48caafb6"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1571c106397b05fd2bff3da90b605c8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e89c312db75509254ebc69d80b80fb9e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ee72863a42bb42b1afb5586593db1b86"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0b21dd85dbfc2c86be60b27bd5f608c8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7900493319911fb56fec5b2e2dbc97ae"
  },
  {
    "url": "生活分享/life.html",
    "revision": "eb96c66ebbd41210b83768926e1b19d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
