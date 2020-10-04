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
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"normalize.css":"../node_modules/normalize.css/normalize.css","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unite = exports.createSectionFrom = exports.createTag = void 0;

// === CREATE TAG
var createTag = function createTag(tag, classes) {
  if (!tag || !isNaN(tag)) return null;
  var elemTag = document.createElement(tag);
  if (classes && isNaN(classes)) elemTag.classList.add(classes);

  for (var _len = arguments.length, elems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    elems[_key - 2] = arguments[_key];
  }

  if (elems.length == 0) return elemTag;
  elems.forEach(function (elem) {
    return elemTag.insertAdjacentHTML('beforeend', elem);
  });
  return elemTag.outerHTML;
}; // === CREATE SELECTOR


exports.createTag = createTag;

var createSectionFrom = function createSectionFrom() {
  var section = document.createElement('section');

  for (var _len2 = arguments.length, htmls = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    htmls[_key2] = arguments[_key2];
  }

  htmls.forEach(function (html) {
    return section.insertAdjacentHTML('beforeend', html);
  });
  return section;
}; // === UNITE


exports.createSectionFrom = createSectionFrom;

var unite = function unite() {
  var fragment = document.createDocumentFragment();

  for (var _len3 = arguments.length, slices = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    slices[_key3] = arguments[_key3];
  }

  slices.forEach(function (slice) {
    return fragment.appendChild(slice);
  });
  return fragment;
};

exports.unite = unite;
},{}],"images/aspro_min.jpg":[function(require,module,exports) {
module.exports = "/aspro_min.71a2b036.jpg";
},{}],"images/banner_min.jpg":[function(require,module,exports) {
module.exports = "/banner_min.34a5add3.jpg";
},{}],"images/phone.svg":[function(require,module,exports) {
module.exports = "/phone.b979c70b.svg";
},{}],"images/email.svg":[function(require,module,exports) {
module.exports = "/email.ee5e6050.svg";
},{}],"sectionMain/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showMenu = exports.showContacts = exports.showTriangles = exports.showBanner = exports.showImageLogo = void 0;

var _aspro_min = _interopRequireDefault(require("../images/aspro_min.jpg"));

var _banner_min = _interopRequireDefault(require("../images/banner_min.jpg"));

var _phone = _interopRequireDefault(require("../images/phone.svg"));

var _email = _interopRequireDefault(require("../images/email.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showImageLogo = function showImageLogo() {
  return "<img src=".concat(_aspro_min.default, " alt=\"", 'строительная компания aspro', "\" />");
};

exports.showImageLogo = showImageLogo;

var showBanner = function showBanner() {
  return "<img src=".concat(_banner_min.default, " alt=\"", 'строительная компания aspro', "\" />");
};

exports.showBanner = showBanner;

var showTriangles = function showTriangles() {
  return "\n    <div class=".concat('upper-triangle', "></div>\n    <div class=", 'lower-triangle', "></div>\n    <div class=", 'right-triangle', "></div>\n    <div class=", 'left-triangle', "></div>\n    <div class=", 'long-line', "></div>\n    <div class=", 'short-line', "></div>\n  ");
};

exports.showTriangles = showTriangles;

var showContacts = function showContacts() {
  return "\n    <div class=".concat('contact-text', ">\n      <h1>\u041E\u041E\u041E \"\u0421\u041A&nbsp; \u0410\u0421\u041F\u0420\u041E\"</h1>\n\n      <div class=\"address\">\n        ", '109382, г.Москва, ул. Люблинская, д.141, оф.424', "\n      </div>\n\n      <div class=\"phone\">\n        <img src=\"", _phone.default, "\" alt=\"", 'строительная компания aspro', "\" />\n        ", '+7(499) 964-46-70', " \n      </div>\n\n      <div class=\"email\">\n        <img src=\"").concat(_email.default, "\" alt=\"", 'строительная компания aspro', "\" />\n        ", 'info@sk-aspro.ru', " \n      </div>\n    </div>\n  ");
};

exports.showContacts = showContacts;

var showMenu = function showMenu() {
  return "<div class=".concat('menu', "></div>");
};

exports.showMenu = showMenu;
},{"../images/aspro_min.jpg":"images/aspro_min.jpg","../images/banner_min.jpg":"images/banner_min.jpg","../images/phone.svg":"images/phone.svg","../images/email.svg":"images/email.svg"}],"sectionMain/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _utils = require("../utils");

var _templates = require("./templates");

// Creating a section
var main = function main() {
  return (0, _utils.createSectionFrom)(header(), body());
}; // upper part of the section


exports.main = main;

var header = function header() {
  return (0, _utils.createTag)('div', 'main-header', (0, _templates.showImageLogo)());
}; // down part of the section


var body = function body() {
  return (0, _utils.createTag)('div', 'main-body', (0, _templates.showBanner)(), (0, _templates.showTriangles)(), (0, _templates.showContacts)());
};
},{"../utils":"utils.js","./templates":"sectionMain/templates.js"}],"sectionAbout/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.about = void 0;

// import {heading, content} from './templates'
var about = function about() {
  var elem = document.createElement('section'); // elem.insertAdjacentHTML('beforeend', heading() )
  // elem.insertAdjacentHTML('beforeend', '<p> 222223</p>')

  return elem;
};

exports.about = about;
},{}],"sectionPartners/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partners = void 0;

// import {heading, content} from './templates'
var partners = function partners() {
  var elem = document.createElement('section'); // elem.insertAdjacentHTML('beforeend', heading() )
  // elem.insertAdjacentHTML('beforeend', content() )

  return elem;
};

exports.partners = partners;
},{}],"sectionContacts/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contacts = void 0;

// import {heading, content} from './templates'
var contacts = function contacts() {
  var elem = document.createElement('section'); // elem.insertAdjacentHTML('beforeend', heading() )
  // elem.insertAdjacentHTML('beforeend', content() )

  return elem;
};

exports.contacts = contacts;
},{}],"app.js":[function(require,module,exports) {
"use strict";

require("./app.scss");

var _utils = require("./utils");

var _sectionMain = require("./sectionMain");

var _sectionAbout = require("./sectionAbout");

var _sectionPartners = require("./sectionPartners");

var _sectionContacts = require("./sectionContacts");

var elem = document.querySelector('#root');
var html = (0, _utils.unite)((0, _sectionMain.main)(), (0, _sectionAbout.about)(), (0, _sectionPartners.partners)(), (0, _sectionContacts.contacts)());
elem.appendChild(html);
},{"./app.scss":"app.scss","./utils":"utils.js","./sectionMain":"sectionMain/index.js","./sectionAbout":"sectionAbout/index.js","./sectionPartners":"sectionPartners/index.js","./sectionContacts":"sectionContacts/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39473" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map