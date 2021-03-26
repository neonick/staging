// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/neo/code/cooper/src/img/mobile-menu-btn.svg":[["mobile-menu-btn.616b6a5e.svg","img/mobile-menu-btn.svg"],"img/mobile-menu-btn.svg"],"/Users/neo/code/cooper/src/img/button_arrow.svg":[["button_arrow.4b855fbc.svg","img/button_arrow.svg"],"img/button_arrow.svg"],"/Users/neo/code/cooper/src/img/paws_bg-green.png":[["paws_bg-green.ff40dd81.png","img/paws_bg-green.png"],"img/paws_bg-green.png"],"/Users/neo/code/cooper/src/img/dog_cta_burst.jpg":[["dog_cta_burst.251ab8f2.jpg","img/dog_cta_burst.jpg"],"img/dog_cta_burst.jpg"],"/Users/neo/code/cooper/src/img/cat_cta_burst.jpg":[["cat_cta_burst.b3059cb4.jpg","img/cat_cta_burst.jpg"],"img/cat_cta_burst.jpg"],"/Users/neo/code/cooper/src/img/cat-dog-decor1.svg":[["cat-dog-decor1.3d9639be.svg","img/cat-dog-decor1.svg"],"img/cat-dog-decor1.svg"],"/Users/neo/code/cooper/src/img/cat-dog-decor2.svg":[["cat-dog-decor2.4eaa34aa.svg","img/cat-dog-decor2.svg"],"img/cat-dog-decor2.svg"],"/Users/neo/code/cooper/src/img/link_arrow.svg":[["link_arrow.c2f36250.svg","img/link_arrow.svg"],"img/link_arrow.svg"],"/Users/neo/code/cooper/src/img/link_arrow_blue.svg":[["link_arrow_blue.468fe231.svg","img/link_arrow_blue.svg"],"img/link_arrow_blue.svg"],"/Users/neo/code/cooper/src/img/app-block-decor.svg":[["app-block-decor.016ed9b8.svg","img/app-block-decor.svg"],"img/app-block-decor.svg"],"/Users/neo/code/cooper/src/img/paw-background.png":[["paw-background.ec6ac7b0.png","img/paw-background.png"],"img/paw-background.png"],"/Users/neo/code/cooper/src/img/get-qoute-for-cats.png":[["get-qoute-for-cats.8d23f69c.png","img/get-qoute-for-cats.png"],"img/get-qoute-for-cats.png"],"/Users/neo/code/cooper/src/img/get-qoute-for-dogs.png":[["get-qoute-for-dogs.41bcea61.png","img/get-qoute-for-dogs.png"],"img/get-qoute-for-dogs.png"],"./../img/get-quote-bottom__decor.svg":[["get-quote-bottom__decor.38d0b22a.svg","img/get-quote-bottom__decor.svg"],"img/get-quote-bottom__decor.svg"],"/Users/neo/code/cooper/src/img/get_quote_full.jpg":[["get_quote_full.41a71a55.jpg","img/get_quote_full.jpg"],"img/get_quote_full.jpg"],"/Users/neo/code/cooper/src/img/get_quote_full_decor.svg":[["get_quote_full_decor.a6920566.svg","img/get_quote_full_decor.svg"],"img/get_quote_full_decor.svg"],"/Users/neo/code/cooper/src/img/paws_bg.png":[["paws_bg.b60d820b.png","img/paws_bg.png"],"img/paws_bg.png"],"/Users/neo/code/cooper/src/img/for-dogs-decor-1.svg":[["for-dogs-decor-1.2efd4589.svg","img/for-dogs-decor-1.svg"],"img/for-dogs-decor-1.svg"],"/Users/neo/code/cooper/src/img/for-dogs-decor-2.svg":[["for-dogs-decor-2.e4c6dc96.svg","img/for-dogs-decor-2.svg"],"img/for-dogs-decor-2.svg"],"/Users/neo/code/cooper/src/img/for-cats-decor-1.svg":[["for-cats-decor-1.0fb81a37.svg","img/for-cats-decor-1.svg"],"img/for-cats-decor-1.svg"],"/Users/neo/code/cooper/src/img/for-cats-decor-2.svg":[["for-cats-decor-2.2e5f9474.svg","img/for-cats-decor-2.svg"],"img/for-cats-decor-2.svg"],"/Users/neo/code/cooper/src/img/big-paw.svg":[["big-paw.d923769f.svg","img/big-paw.svg"],"img/big-paw.svg"],"/Users/neo/code/cooper/src/img/slider-arr-left.svg":[["slider-arr-left.d3a55283.svg","img/slider-arr-left.svg"],"img/slider-arr-left.svg"],"/Users/neo/code/cooper/src/img/slider-arr-right.svg":[["slider-arr-right.11a84611.svg","img/slider-arr-right.svg"],"img/slider-arr-right.svg"],"/Users/neo/code/cooper/src/img/faq-arrow.svg":[["faq-arrow.d8a913ad.svg","img/faq-arrow.svg"],"img/faq-arrow.svg"],"/Users/neo/code/cooper/src/img/faq-cat.png":[["faq-cat.09ec3ca9.png","img/faq-cat.png"],"img/faq-cat.png"],"/Users/neo/code/cooper/src/img/faq-dog.png":[["faq-dog.bd750577.png","img/faq-dog.png"],"img/faq-dog.png"],"/Users/neo/code/cooper/src/img/decor-dots-blue.svg":[["decor-dots-blue.5aac9b04.svg","img/decor-dots-blue.svg"],"img/decor-dots-blue.svg"],"/Users/neo/code/cooper/src/img/how-it-works__tail.jpg":[["how-it-works__tail.7bee7046.jpg","img/how-it-works__tail.jpg"],"img/how-it-works__tail.jpg"],"/Users/neo/code/cooper/src/img/how-it-works__heart.svg":[["how-it-works__heart.ff6c15e6.svg","img/how-it-works__heart.svg"],"img/how-it-works__heart.svg"],"/Users/neo/code/cooper/src/img/how-it-works__must.svg":[["how-it-works__must.817a5948.svg","img/how-it-works__must.svg"],"img/how-it-works__must.svg"],"/Users/neo/code/cooper/src/img/how-it-works__buble.svg":[["how-it-works__buble.14ffdd6f.svg","img/how-it-works__buble.svg"],"img/how-it-works__buble.svg"],"/Users/neo/code/cooper/src/img/how-it-works__ears.png":[["how-it-works__ears.6ab78c60.png","img/how-it-works__ears.png"],"img/how-it-works__ears.png"],"/Users/neo/code/cooper/src/img/cooper-steven.svg":[["cooper-steven.8d81a50d.svg","img/cooper-steven.svg"],"img/cooper-steven.svg"],"/Users/neo/code/cooper/src/img/cooper-michael-decor.svg":[["cooper-michael-decor.c5a942a1.svg","img/cooper-michael-decor.svg"],"img/cooper-michael-decor.svg"],"/Users/neo/code/cooper/src/img/cooper-max-mobile.svg":[["cooper-max-mobile.0aa8f3ee.svg","img/cooper-max-mobile.svg"],"img/cooper-max-mobile.svg"],"/Users/neo/code/cooper/src/img/cooper-max.svg":[["cooper-max.e7b7451b.svg","img/cooper-max.svg"],"img/cooper-max.svg"],"/Users/neo/code/cooper/src/img/cooper-pavel-decor.svg":[["cooper-pavel-decor.3b7c4215.svg","img/cooper-pavel-decor.svg"],"img/cooper-pavel-decor.svg"],"./../img/Paws.png":[["Paws.c9171cf7.png","img/Paws.png"],"img/Paws.png"],"/Users/neo/code/cooper/src/img/icon_facebook.svg":[["icon_facebook.09a65f46.svg","img/icon_facebook.svg"],"img/icon_facebook.svg"],"/Users/neo/code/cooper/src/img/icon_instagram.svg":[["icon_instagram.b5ca0c3b.svg","img/icon_instagram.svg"],"img/icon_instagram.svg"],"/Users/neo/code/cooper/src/img/icon_twitter.svg":[["icon_twitter.1cda945e.svg","img/icon_twitter.svg"],"img/icon_twitter.svg"],"/Users/neo/code/cooper/src/img/footer_cat1.png":[["footer_cat1.03007c54.png","img/footer_cat1.png"],"img/footer_cat1.png"],"/Users/neo/code/cooper/src/img/read-more-paw.svg":[["read-more-paw.7103728a.svg","img/read-more-paw.svg"],"img/read-more-paw.svg"],"/Users/neo/code/cooper/src/img/read-more-bone.svg":[["read-more-bone.192e9d5a.svg","img/read-more-bone.svg"],"img/read-more-bone.svg"],"/Users/neo/code/cooper/src/img/get-quote-small.jpg":[["get-quote-small.3e7ef099.jpg","img/get-quote-small.jpg"],"img/get-quote-small.jpg"],"/Users/neo/code/cooper/src/img/nav-arrow-left.svg":[["nav-arrow-left.af56de84.svg","img/nav-arrow-left.svg"],"img/nav-arrow-left.svg"],"/Users/neo/code/cooper/src/img/nav-arrow-right.svg":[["nav-arrow-right.ae1d8f4c.svg","img/nav-arrow-right.svg"],"img/nav-arrow-right.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57011" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.c86c3119.js.map